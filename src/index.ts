import { join } from 'path'
import { logger } from '@mojule/log-formatter'
import { fsLogger } from './fs'
import { removeLoggersBelowLevel } from './util'

import {
  isLoggingEnabledIISNode, loggingDirectory, logLevel
} from './env'

import { logInitMessage } from './log-init-message'
import { multiLogger } from './multi-logger';

const directory = join( process.cwd(), loggingDirectory )

const iisNodeLogger = (
  isLoggingEnabledIISNode ?
    logger :
    multiLogger( logger, fsLogger( directory ) )
)

export const log = removeLoggersBelowLevel( logLevel, iisNodeLogger )

log.info( 'Logging initiated', logInitMessage )
