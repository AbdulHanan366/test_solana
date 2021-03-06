declare function _exports(config: import('../types').Options): {
    get: (cid: import("multiformats").CID, options?: (import("ipfs-core-types/src/utils").AbortOptions & import("ipfs-core-types/src/utils").PreloadOptions & import("../types").HTTPClientExtraOptions) | undefined) => Promise<Uint8Array>;
    stat: (cid: import("multiformats").CID, options?: (import("ipfs-core-types/src/utils").AbortOptions & import("ipfs-core-types/src/utils").PreloadOptions & import("../types").HTTPClientExtraOptions) | undefined) => Promise<import("ipfs-core-types/src/block").StatResult>;
    put: (data: Uint8Array, options?: (import("ipfs-core-types/src/block").PutOptions & import("../types").HTTPClientExtraOptions) | undefined) => Promise<import("multiformats").CID>;
    rm: (cid: import("multiformats").CID | import("multiformats").CID[], options?: (import("ipfs-core-types/src/block").RmOptions & import("../types").HTTPClientExtraOptions) | undefined) => AsyncIterable<import("ipfs-core-types/src/block").RmResult>;
};
export = _exports;
//# sourceMappingURL=index.d.ts.map