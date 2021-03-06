declare function _exports(codecs: import('ipfs-core-utils/src/multicodecs'), config: import('../types').Options): {
    data: (cid: import("multiformats").CID, options?: (import("ipfs-core-types/src/utils").AbortOptions & import("ipfs-core-types/src/utils").PreloadOptions & import("../types").HTTPClientExtraOptions) | undefined) => Promise<Uint8Array>;
    get: (cid: import("multiformats").CID, options?: (import("ipfs-core-types/src/utils").AbortOptions & import("ipfs-core-types/src/utils").PreloadOptions & import("../types").HTTPClientExtraOptions) | undefined) => Promise<import("@ipld/dag-pb/src/interface").PBNode>;
    links: (cid: import("multiformats").CID, options?: (import("ipfs-core-types/src/utils").AbortOptions & import("ipfs-core-types/src/utils").PreloadOptions & import("../types").HTTPClientExtraOptions) | undefined) => Promise<import("@ipld/dag-pb/src/interface").PBLink[]>;
    new: (options?: (import("ipfs-core-types/src/object").NewObjectOptions & import("../types").HTTPClientExtraOptions) | undefined) => Promise<import("multiformats").CID>;
    patch: {
        addLink: (cid: import("multiformats").CID, dLink: import("@ipld/dag-pb/src/interface").PBLink, options?: (import("ipfs-core-types/src/utils").AbortOptions & import("../types").HTTPClientExtraOptions) | undefined) => Promise<import("multiformats").CID>;
        appendData: (cid: import("multiformats").CID, data: Uint8Array, options?: (import("ipfs-core-types/src/utils").AbortOptions & import("../types").HTTPClientExtraOptions) | undefined) => Promise<import("multiformats").CID>;
        rmLink: (cid: import("multiformats").CID, dLink: string | import("@ipld/dag-pb/src/interface").PBLink, options?: (import("ipfs-core-types/src/utils").AbortOptions & import("../types").HTTPClientExtraOptions) | undefined) => Promise<import("multiformats").CID>;
        setData: (cid: import("multiformats").CID, data: Uint8Array, options?: (import("ipfs-core-types/src/utils").AbortOptions & import("../types").HTTPClientExtraOptions) | undefined) => Promise<import("multiformats").CID>;
    };
    put: (obj: import("@ipld/dag-pb/src/interface").PBNode, options?: (import("ipfs-core-types/src/object").PutOptions & import("../types").HTTPClientExtraOptions) | undefined) => Promise<import("multiformats").CID>;
    stat: (cid: import("multiformats").CID, options?: (import("ipfs-core-types/src/utils").AbortOptions & import("ipfs-core-types/src/utils").PreloadOptions & import("../types").HTTPClientExtraOptions) | undefined) => Promise<import("ipfs-core-types/src/object").StatResult>;
};
export = _exports;
//# sourceMappingURL=index.d.ts.map