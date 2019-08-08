import { Logger } from '@mojule/log-formatter/src/types';
export declare const multiLogger: (...loggers: Logger[]) => {
    trace: (message?: any, ...args: any) => void;
    debug: (message?: any, ...args: any) => void;
    time: (message?: any, ...args: any) => void;
    info: (message?: any, ...args: any) => void;
    warn: (message?: any, ...args: any) => void;
    error: (message?: any, ...args: any) => void;
    fatal: (message?: any, ...args: any) => void;
};
