import { join } from 'path'
import { createLogger } from '@mojule/log-formatter'
import { fsLogger } from './fs'
import { removeLoggersBelowLevel, getLocalTimestamp } from './util'

import {
  isLoggingEnabledIISNode, loggingDirectory, logLevel
} from './env'

import { logInitMessage } from './log-init-message'
import { multiLogger } from './multi-logger'

const directory = join( process.cwd(), loggingDirectory )

const createLog = ( useLocalTime = true ) => {
  const getTimestamp = (
    useLocalTime ? getLocalTimestamp : () => ( new Date() ).toJSON()
  )

  const logger = createLogger( { getTimestamp } )

  const iisNodeLogger = (
    isLoggingEnabledIISNode ?
      logger :
      multiLogger( logger, fsLogger( directory ) )
  )

  const log = removeLoggersBelowLevel( logLevel, iisNodeLogger )

  return log
}

export const log = createLog()

log.info( 'Logging initiated', logInitMessage )
