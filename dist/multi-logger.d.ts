import { Logger } from '@mojule/log-formatter/src/types';
export declare const multiLogger: (...loggers: Logger[]) => {
    trace: (content: string) => void;
    debug: (content: string) => void;
    time: (content: string) => void;
    info: (content: string) => void;
    warn: (content: string) => void;
    error: (content: string) => void;
    fatal: (content: string) => void;
};
