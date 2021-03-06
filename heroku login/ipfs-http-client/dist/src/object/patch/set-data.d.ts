declare function _exports(clientOptions: import("../../types").Options): (cid: CID, data: Uint8Array, options?: (import("ipfs-core-types/src/utils").AbortOptions & import("../../types").HTTPClientExtraOptions) | undefined) => Promise<CID>;
export = _exports;
export type HTTPClientExtraOptions = import('../../types').HTTPClientExtraOptions;
export type ObjectPatchAPI = import('ipfs-core-types/src/object/patch').API<HTTPClientExtraOptions>;
import { CID } from "multiformats/cid";
//# sourceMappingURL=set-data.d.ts.map