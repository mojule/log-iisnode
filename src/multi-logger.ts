import { Logger, LogLevel } from '@mojule/log-formatter/src/types'

export const multiLogger = ( ...loggers: Logger[] ) => {
  const logMany = ( logLevel: LogLevel ) =>
    ( message?: any, ...args: any ) => {
      loggers.forEach( logger => {
        logger[ logLevel ]( message, ...args )
      } )
    }

  const trace = logMany( 'trace' )
  const debug = logMany( 'debug' )
  const time = logMany( 'time' )
  const info = logMany( 'info' )
  const warn = logMany( 'warn' )
  const error = logMany( 'error')
  const fatal = logMany( 'fatal' )

  const logger = {
    trace, debug, time, info, warn, error, fatal
  }

  return logger
}
