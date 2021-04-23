import { LogLevel, Logger } from '@mojule/log-formatter/src/types';
export declare const isAtLevelOrAbove: (level: LogLevel, minLevel: LogLevel) => boolean;
export declare const removeLoggersBelowLevel: (minLevel: LogLevel, logger: Logger) => Logger;
export declare const getLocalTimestamp: () => string;
