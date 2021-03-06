declare function _exports(clientOptions: import("./types").Options): (path: import("ipfs-core-types/src/utils").IPFSPath, options?: (import("ipfs-core-types/src/root").CatOptions & import("./types").HTTPClientExtraOptions) | undefined) => AsyncIterable<Uint8Array>;
export = _exports;
export type HTTPClientExtraOptions = import('./types').HTTPClientExtraOptions;
export type RootAPI = import('ipfs-core-types/src/root').API<HTTPClientExtraOptions>;
//# sourceMappingURL=cat.d.ts.map