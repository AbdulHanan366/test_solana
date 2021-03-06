declare function _exports(clientOptions: import("./types").Options): (path: import("ipfs-core-types/src/utils").IPFSPath, options?: (import("ipfs-core-types/src/root").ListOptions & import("./types").HTTPClientExtraOptions) | undefined) => AsyncIterable<import("ipfs-core-types/src/root").IPFSEntry>;
export = _exports;
export type HTTPClientExtraOptions = import('./types').HTTPClientExtraOptions;
export type RootAPI = import('ipfs-core-types/src/root').API<HTTPClientExtraOptions>;
//# sourceMappingURL=ls.d.ts.map