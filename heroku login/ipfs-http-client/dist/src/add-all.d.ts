declare function _exports(clientOptions: import("./types").Options): (source: import("ipfs-core-types/src/utils").ImportCandidateStream, options?: (import("ipfs-core-types/src/root").AddAllOptions & import("ipfs-core-types/src/utils").AbortOptions & import("./types").HTTPClientExtraOptions) | undefined) => AsyncIterable<import("ipfs-core-types/src/root").AddResult>;
export = _exports;
export type IPFSUtilsHttpUploadProgressFn = import('ipfs-utils/src/types').ProgressFn;
export type IPFSCoreAddProgressFn = import('ipfs-core-types/src/root').AddProgressFn;
export type HTTPClientExtraOptions = import('./types').HTTPClientExtraOptions;
export type RootAPI = import('ipfs-core-types/src/root').API<HTTPClientExtraOptions>;
export type AddResult = import('ipfs-core-types/src/root').AddResult;
//# sourceMappingURL=add-all.d.ts.map