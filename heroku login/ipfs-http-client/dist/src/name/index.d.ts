declare function _exports(config: import('../types').Options): {
    publish: (path: string | import("multiformats").CID, options?: (import("ipfs-core-types/src/name").PublishOptions & import("../types").HTTPClientExtraOptions) | undefined) => Promise<import("ipfs-core-types/src/name").PublishResult>;
    resolve: (path: string, options?: (import("ipfs-core-types/src/name").ResolveOptions & import("../types").HTTPClientExtraOptions) | undefined) => AsyncIterable<string>;
    pubsub: {
        cancel: (name: string, options?: (import("ipfs-core-types/src/utils").AbortOptions & import("../types").HTTPClientExtraOptions) | undefined) => Promise<import("ipfs-core-types/src/name/pubsub").PubsubCancelResult>;
        state: (options?: (import("ipfs-core-types/src/utils").AbortOptions & import("../types").HTTPClientExtraOptions) | undefined) => Promise<import("ipfs-core-types/src/name/pubsub").PubsubStateResult>;
        subs: (options?: (import("ipfs-core-types/src/utils").AbortOptions & import("../types").HTTPClientExtraOptions) | undefined) => Promise<string[]>;
    };
};
export = _exports;
//# sourceMappingURL=index.d.ts.map