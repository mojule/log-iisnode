import * as parseArgs from 'yargs-parser'
import { LogLevel } from '@mojule/log-formatter/src/types'
import { logLevels } from '@mojule/log-formatter'

const argv = parseArgs( process.argv.slice( 2 ) )

export const logLevelKey = 'LOG_LEVEL'
export const defaultLogLevel: LogLevel = 'debug'

const isLogLevel = ( value: any ): value is LogLevel =>
  typeof value === 'string' && logLevels.includes( <any>value )

export const runtimeEnv = process.env.NODE_ENV || 'development'

export const isHostedInIISNode = process.env.IISNODE_VERSION !== undefined

export const isLoggingEnabledIISNode = (
  isHostedInIISNode && process.env.IISNODE_LOGGINGENABLED === '1'
)

export const loggingDirectory = (
  isHostedInIISNode && typeof process.env.IISNODE_LOGDIRECTORY === 'string' ?
    process.env.IISNODE_LOGDIRECTORY :
    './logs'
)

export let badArgLevel = ''
export let badEnvLevel = ''
export let isArgLevel = false
export let isEnvLevel = false
export let logLevel: LogLevel = defaultLogLevel

export const argSource = `cmd --${ logLevelKey }`
export const envSource = `process.env[ "${ logLevelKey }" ]`

export const argLevel = argv[ logLevelKey ]
export const envLevel = process.env[ logLevelKey ]

if ( typeof argLevel === 'string' ) {
  if ( isLogLevel( argLevel ) ) {
    logLevel = argLevel
    isArgLevel = true
  } else {
    badArgLevel = argLevel
  }
} else if ( typeof envLevel === 'string' ) {
  if ( isLogLevel( envLevel ) ) {
    logLevel = envLevel
    isEnvLevel = true
  } else {
    badEnvLevel = envLevel
  }
}

export const levelSource = (
  isArgLevel ?
    argSource :
    isEnvLevel ?
      envSource :
      'default'
)

export const logName = isLoggingEnabledIISNode ? 'iisnode-stdout' : 'fs'
