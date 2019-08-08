import { loadPackageJSON } from './package'

import {
  logName, logLevel, levelSource, isArgLevel, isEnvLevel, defaultLogLevel,
  badArgLevel, badEnvLevel, argSource, envSource, isHostedInIISNode, runtimeEnv
} from './env'

const logInitInfo: ( [ string, string ] | string )[] = [
  [ 'Logger name', logName ],
  [ 'Level', logLevel ],
  [ 'Level set by', levelSource ]
]

if ( isArgLevel || isEnvLevel ) {
  logInitInfo.push(
    [ 'Level overrides default', defaultLogLevel ]
  )
} else if ( badArgLevel ) {
  logInitInfo.push(
    [ `Using default level, unexpected ${ argSource }`, badArgLevel ]
  )
} else if ( badEnvLevel ) {
  logInitInfo.push(
    [ `Using default level, unexpected ${ envSource }`, badEnvLevel ]
  )
}

if ( isHostedInIISNode ) {
  logInitInfo.push( 'Hosted by IISNode' )

  Object.keys( process.env ).forEach( key => {
    if ( !key.startsWith( 'IISNODE_' ) ) return

    const value = String( process.env[ key ] )

    logInitInfo.push( [ key, value ] )
  } )
}

logInitInfo.push(
  [ 'Platform', process.arch ],
  [ 'Node Version', process.version ],
  [ 'Node Environment', runtimeEnv ],
)

try {
  const { name, version } = loadPackageJSON()

  logInitInfo.push(
    [ 'Package Name', name ],
    [ 'Package Version', String( version ) ]
  )
} catch( err ){
  logInitInfo.push(
    [ 'Error', 'package.json not present' ]
  )
}

export const logInitMessage = logInitInfo.map(
  entry => {
    if ( typeof entry === 'string' ) return entry

    return entry.join( ': ' )
  }
).join( '\n' )
