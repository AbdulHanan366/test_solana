'use strict'

const { CID } = require('multiformats/cid')
const configure = require('../../lib/configure')
const toUrlSearchParams = require('../../lib/to-url-search-params')

/**
 * @typedef {import('../../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/object/patch').API<HTTPClientExtraOptions>} ObjectPatchAPI
 */

module.exports = configure(api => {
  /**
   * @type {ObjectPatchAPI["addLink"]}
   */
  async function addLink (cid, dLink, options = {}) {
    const res = await api.post('object/patch/add-link', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: [
          `${cid}`,
          // @ts-ignore loose types
          dLink.Name || dLink.name || '',
          // @ts-ignore loose types
          (dLink.Hash || dLink.cid || '').toString() || null
        ],
        ...options
      }),
      headers: options.headers
    })

    const { Hash } = await res.json()

    return CID.parse(Hash)
  }

  return addLink
})
