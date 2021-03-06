export type ImportCandidateStream = import('ipfs-core-types/src/utils').ImportCandidateStream;
export type BrowserImportCandidate = import('ipfs-core-types/src/utils').BrowserImportCandidate;
/**
 * @typedef {import('ipfs-core-types/src/utils').ImportCandidateStream} ImportCandidateStream
 * @typedef {import('ipfs-core-types/src/utils').BrowserImportCandidate} BrowserImportCandidate
 */
/**
 * Transforms any of the `ipfs.add` input types into
 *
 * ```
 * AsyncIterable<{ path, mode, mtime, content: Blob }>
 * ```
 *
 * See https://github.com/ipfs/js-ipfs/blob/master/docs/core-api/FILES.md#ipfsadddata-options
 *
 * @param {ImportCandidateStream} input
 * @returns {AsyncGenerator<BrowserImportCandidate, void, undefined>}
 */
export function normaliseInput(input: ImportCandidateStream): AsyncGenerator<BrowserImportCandidate, void, undefined>;
//# sourceMappingURL=index.browser.d.ts.map