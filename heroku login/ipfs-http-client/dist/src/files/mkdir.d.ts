declare function _exports(clientOptions: import("../types").Options): (path: string, options?: (import("ipfs-core-types/src/files").MkdirOptions & import("../types").HTTPClientExtraOptions) | undefined) => Promise<void>;
export = _exports;
export type HTTPClientExtraOptions = import('../types').HTTPClientExtraOptions;
export type FilesAPI = import('ipfs-core-types/src/files').API<HTTPClientExtraOptions>;
//# sourceMappingURL=mkdir.d.ts.map