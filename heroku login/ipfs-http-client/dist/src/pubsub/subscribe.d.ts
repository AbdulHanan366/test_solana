declare function _exports(options: Options, subsTracker: import('./subscription-tracker')): (topic: string, handler: import("ipfs-core-types/src/pubsub").MessageHandlerFn, options?: (import("ipfs-core-types/src/pubsub").SubscribeOptions & import("../types").HTTPClientExtraOptions & {
    onError?: ErrorHandlerFn | undefined;
}) | undefined) => Promise<void>;
export = _exports;
export type HTTPClientExtraOptions = import('../types').HTTPClientExtraOptions;
export type Message = import('ipfs-core-types/src/pubsub').Message;
export type ErrorHandlerFn = (err: Error, fatal: boolean, msg?: import("ipfs-core-types/src/pubsub").Message | undefined) => void;
export type PubsubAPI = import('ipfs-core-types/src/pubsub').API<HTTPClientExtraOptions & {
    onError?: ErrorHandlerFn;
}>;
export type Options = import('../types').Options;
//# sourceMappingURL=subscribe.d.ts.map