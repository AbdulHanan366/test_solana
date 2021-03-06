declare function _exports(config: import('../types').Options): {
    getAll: (options?: (import("ipfs-core-types/src/utils").AbortOptions & import("../types").HTTPClientExtraOptions) | undefined) => Promise<import("ipfs-core-types/src/config").Config>;
    get: (key: string, options?: (import("ipfs-core-types/src/utils").AbortOptions & import("../types").HTTPClientExtraOptions) | undefined) => Promise<string | object>;
    set: (key: string, value: any, options?: (import("ipfs-core-types/src/utils").AbortOptions & import("../types").HTTPClientExtraOptions) | undefined) => Promise<void>;
    replace: (config: import("ipfs-core-types/src/config").Config, options?: (import("ipfs-core-types/src/utils").AbortOptions & import("../types").HTTPClientExtraOptions) | undefined) => Promise<void>;
    profiles: {
        apply: (profile: string, options?: (import("ipfs-core-types/src/config/profiles").ProfilesApplyOptions & import("../types").HTTPClientExtraOptions) | undefined) => Promise<import("ipfs-core-types/src/config/profiles").ProfilesApplyResult>;
        list: (options?: (import("ipfs-core-types/src/utils").AbortOptions & import("../types").HTTPClientExtraOptions) | undefined) => Promise<import("ipfs-core-types/src/config/profiles").Profile[]>;
    };
};
export = _exports;
//# sourceMappingURL=index.d.ts.map