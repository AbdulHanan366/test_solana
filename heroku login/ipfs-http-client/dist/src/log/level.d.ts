declare function _exports(clientOptions: import("../types").Options): (subsystem: string, level: string, options?: (import("ipfs-core-types/src/utils").AbortOptions & import("../types").HTTPClientExtraOptions) | undefined) => Promise<any>;
export = _exports;
export type HTTPClientExtraOptions = import('../types').HTTPClientExtraOptions;
export type LogAPI = import('ipfs-core-types/src/log').API<HTTPClientExtraOptions>;
//# sourceMappingURL=level.d.ts.map