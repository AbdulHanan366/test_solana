declare function _exports(clientOptions: import("./types").Options): (options?: (import("ipfs-core-types/src/utils").AbortOptions & import("./types").HTTPClientExtraOptions) | undefined) => Promise<string[]>;
export = _exports;
export type HTTPClientExtraOptions = import('./types').HTTPClientExtraOptions;
export type RootAPI = import('ipfs-core-types/src/root').API<HTTPClientExtraOptions>;
//# sourceMappingURL=commands.d.ts.map