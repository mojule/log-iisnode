import { Logger } from '@mojule/log-formatter/src/types';
export declare const isAtLevelOrAbove: (level: "error" | "time" | "trace" | "debug" | "info" | "warn" | "fatal", minLevel: "error" | "time" | "trace" | "debug" | "info" | "warn" | "fatal") => boolean;
export declare const removeLoggersBelowLevel: (minLevel: "error" | "time" | "trace" | "debug" | "info" | "warn" | "fatal", logger: Logger) => Logger;
export declare const getLocalTimestamp: () => string;
