declare function _exports(clientOptions: import("../types").Options): (path: import("ipfs-core-types/src/utils").IPFSPath, options?: (import("ipfs-core-types/src/files").StatOptions & import("../types").HTTPClientExtraOptions) | undefined) => Promise<import("ipfs-core-types/src/files").StatResult>;
export = _exports;
export type HTTPClientExtraOptions = import('../types').HTTPClientExtraOptions;
export type FilesAPI = import('ipfs-core-types/src/files').API<HTTPClientExtraOptions>;
//# sourceMappingURL=stat.d.ts.map