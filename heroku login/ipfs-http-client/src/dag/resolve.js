'use strict'

const { CID } = require('multiformats/cid')
const configure = require('../lib/configure')
const toUrlSearchParams = require('../lib/to-url-search-params')

/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/dag').API<HTTPClientExtraOptions>} DAGAPI
 */

module.exports = configure(api => {
  /**
   * @type {DAGAPI["resolve"]}
   */
  const resolve = async (ipfsPath, options = {}) => {
    const res = await api.post('dag/resolve', {
      signal: options.signal,
      searchParams: toUrlSearchParams({
        arg: `${ipfsPath}${options.path ? `/${options.path}`.replace(/\/[/]+/g, '/') : ''}`,
        ...options
      }),
      headers: options.headers
    })

    const data = await res.json()

    return { cid: CID.parse(data.Cid['/']), remainderPath: data.RemPath }
  }

  return resolve
})
