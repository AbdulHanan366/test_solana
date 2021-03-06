declare function _exports(config: import('../../types').Options): {
    addLink: (cid: import("multiformats").CID, dLink: import("@ipld/dag-pb/src/interface").PBLink, options?: (import("ipfs-core-types/src/utils").AbortOptions & import("../../types").HTTPClientExtraOptions) | undefined) => Promise<import("multiformats").CID>;
    appendData: (cid: import("multiformats").CID, data: Uint8Array, options?: (import("ipfs-core-types/src/utils").AbortOptions & import("../../types").HTTPClientExtraOptions) | undefined) => Promise<import("multiformats").CID>;
    rmLink: (cid: import("multiformats").CID, dLink: string | import("@ipld/dag-pb/src/interface").PBLink, options?: (import("ipfs-core-types/src/utils").AbortOptions & import("../../types").HTTPClientExtraOptions) | undefined) => Promise<import("multiformats").CID>;
    setData: (cid: import("multiformats").CID, data: Uint8Array, options?: (import("ipfs-core-types/src/utils").AbortOptions & import("../../types").HTTPClientExtraOptions) | undefined) => Promise<import("multiformats").CID>;
};
export = _exports;
//# sourceMappingURL=index.d.ts.map