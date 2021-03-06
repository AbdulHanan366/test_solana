declare function _exports(config: import('../types').Options): {
    ls: (options?: (import("ipfs-core-types/src/utils").AbortOptions & import("../types").HTTPClientExtraOptions) | undefined) => Promise<string[]>;
    peers: (topic: string, options?: (import("ipfs-core-types/src/utils").AbortOptions & import("../types").HTTPClientExtraOptions) | undefined) => Promise<string[]>;
    publish: (topic: string, data: Uint8Array, options?: (import("ipfs-core-types/src/utils").AbortOptions & import("../types").HTTPClientExtraOptions) | undefined) => Promise<void>;
    subscribe: (topic: string, handler: import("ipfs-core-types/src/pubsub").MessageHandlerFn, options?: (import("ipfs-core-types/src/pubsub").SubscribeOptions & import("../types").HTTPClientExtraOptions & {
        onError?: import("./subscribe").ErrorHandlerFn | undefined;
    }) | undefined) => Promise<void>;
    unsubscribe: (topic: string, handler: import("ipfs-core-types/src/pubsub").MessageHandlerFn | undefined) => Promise<void>;
};
export = _exports;
//# sourceMappingURL=index.d.ts.map