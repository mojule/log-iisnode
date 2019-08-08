import { LogLevel, Logger } from '@mojule/log-formatter/src/types'
import { logLevels } from '@mojule/log-formatter'

export const isAtLevelOrAbove = ( level: LogLevel, minLevel: LogLevel ) => {
  const levelIndex = logLevels.indexOf( level )
  const minIndex = logLevels.indexOf( minLevel )

  return levelIndex >= minIndex
}

export const removeLoggersBelowLevel = ( minLevel: LogLevel, logger: Logger ) => {
  const noops: Partial<Logger> = {}

  logLevels.forEach( current => {
    if( !isAtLevelOrAbove( current, minLevel ) ){
      noops[ current ] = () => {}
    }
  } )

  return Object.assign( {}, logger, noops ) as Logger
}
