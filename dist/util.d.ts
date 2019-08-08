import { Logger } from '@mojule/log-formatter/src/types';
export declare const isAtLevelOrAbove: (level: import("@mojule/log-formatter/dist/types").LogLevel, minLevel: import("@mojule/log-formatter/dist/types").LogLevel) => boolean;
export declare const removeLoggersBelowLevel: (minLevel: import("@mojule/log-formatter/dist/types").LogLevel, logger: Logger) => Logger;
