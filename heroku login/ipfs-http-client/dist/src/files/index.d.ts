declare function _exports(config: import('../types').Options): {
    chmod: (path: string, mode: string | number, options?: (import("ipfs-core-types/src/files").ChmodOptions & import("../types").HTTPClientExtraOptions) | undefined) => Promise<void>;
    cp: (sources: import("ipfs-core-types/src/utils").IPFSPath | import("ipfs-core-types/src/utils").IPFSPath[], destination: string, options?: (import("ipfs-core-types/src/files").CpOptions & import("../types").HTTPClientExtraOptions) | undefined) => Promise<void>;
    flush: (path: string, options?: (import("ipfs-core-types/src/utils").AbortOptions & import("../types").HTTPClientExtraOptions) | undefined) => Promise<import("multiformats").CID>;
    ls: (path: import("ipfs-core-types/src/utils").IPFSPath, options?: (import("ipfs-core-types/src/utils").AbortOptions & import("../types").HTTPClientExtraOptions) | undefined) => AsyncIterable<import("ipfs-core-types/src/files").MFSEntry>;
    mkdir: (path: string, options?: (import("ipfs-core-types/src/files").MkdirOptions & import("../types").HTTPClientExtraOptions) | undefined) => Promise<void>;
    mv: (sources: string | string[], destination: string, options?: (import("ipfs-core-types/src/files").MvOptions & import("../types").HTTPClientExtraOptions) | undefined) => Promise<void>;
    read: (path: import("ipfs-core-types/src/utils").IPFSPath, options?: (import("ipfs-core-types/src/files").ReadOptions & import("../types").HTTPClientExtraOptions) | undefined) => AsyncIterable<Uint8Array>;
    rm: (path: string | string[], options?: (import("ipfs-core-types/src/files").RmOptions & import("../types").HTTPClientExtraOptions) | undefined) => Promise<void>;
    stat: (path: import("ipfs-core-types/src/utils").IPFSPath, options?: (import("ipfs-core-types/src/files").StatOptions & import("../types").HTTPClientExtraOptions) | undefined) => Promise<import("ipfs-core-types/src/files").StatResult>;
    touch: (path: string, options?: (import("ipfs-core-types/src/files").TouchOptions & import("../types").HTTPClientExtraOptions) | undefined) => Promise<void>;
    write: (path: string, input: string | Blob | Uint8Array | Iterable<Uint8Array> | AsyncIterable<Uint8Array>, options?: (import("ipfs-core-types/src/files").WriteOptions & import("../types").HTTPClientExtraOptions) | undefined) => Promise<void>;
};
export = _exports;
//# sourceMappingURL=index.d.ts.map