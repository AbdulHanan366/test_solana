declare function _exports(clientOptions: import("../types").Options): (sources: string | string[], destination: string, options?: (import("ipfs-core-types/src/files").MvOptions & import("../types").HTTPClientExtraOptions) | undefined) => Promise<void>;
export = _exports;
export type HTTPClientExtraOptions = import('../types').HTTPClientExtraOptions;
export type FilesAPI = import('ipfs-core-types/src/files').API<HTTPClientExtraOptions>;
//# sourceMappingURL=mv.d.ts.map