import { Logger, LogLevel } from '@mojule/log-formatter/src/types'
import { createLogger } from '@mojule/log-formatter'

export const multiLogger = ( ...loggers: Logger[] ) => {
  const logMany = ( logLevel: LogLevel ) =>
    ( content: string ) => {
      loggers.forEach( logger => {
        logger[ logLevel ]( content )
      } )
    }

  const trace = logMany( 'trace' )
  const debug = logMany( 'debug' )
  const time = logMany( 'time' )
  const info = logMany( 'info' )
  const warn = logMany( 'warn' )
  const error = logMany( 'error')
  const fatal = logMany( 'fatal' )

  const options = {
    trace, debug, time, info, warn, error, fatal
  }

  return createLogger( options )
}
