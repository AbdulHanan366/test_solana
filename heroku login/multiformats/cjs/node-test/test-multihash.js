'use strict';

var bytes = require('../src/bytes.js');
var assert = require('assert');
var validMultihash = require('./fixtures/valid-multihash.js');
var invalidMultihash = require('./fixtures/invalid-multihash.js');
var crypto = require('crypto');
var sha2 = require('../src/hashes/sha2.js');
var identity = require('../src/hashes/identity.js');
var digest = require('../src/hashes/digest.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var assert__default = /*#__PURE__*/_interopDefaultLegacy(assert);
var crypto__default = /*#__PURE__*/_interopDefaultLegacy(crypto);

const test = it;
const encode = name => data => bytes.coerce(crypto__default["default"].createHash(name).update(data).digest());
const same = (x, y) => {
  if (x instanceof Uint8Array && y instanceof Uint8Array) {
    if (Buffer.compare(Buffer.from(x), Buffer.from(y)) === 0)
      return;
  }
  return assert__default["default"].deepStrictEqual(x, y);
};
const sample = (code, size, hex) => {
  const toHex = i => {
    if (typeof i === 'string')
      return i;
    const h = i.toString(16);
    return h.length % 2 === 1 ? `0${ h }` : h;
  };
  return bytes.fromHex(`${ toHex(code) }${ toHex(size) }${ hex }`);
};
const testThrowAsync = async (fn, message) => {
  try {
    await fn();
  } catch (e) {
    if (e.message !== message)
      throw e;
    return;
  }
  throw new Error('Test failed to throw');
};
describe('multihash', () => {
  const empty = new Uint8Array(0);
  describe('encode', () => {
    test('valid', () => {
      for (const test of validMultihash) {
        const {encoding, hex, size} = test;
        const {code, varint} = encoding;
        const buf = sample(varint || code, size, hex);
        same(digest.create(code, hex ? bytes.fromHex(hex) : empty).bytes, buf);
      }
    });
    test('hash sha2-256', async () => {
      const hash = await sha2.sha256.digest(bytes.fromString('test'));
      same(hash.code, sha2.sha256.code);
      same(hash.digest, encode('sha256')(bytes.fromString('test')));
      const hash2 = digest.decode(hash.bytes);
      same(hash2.code, sha2.sha256.code);
      same(hash2.bytes, hash.bytes);
    });
    test('hash sha2-512', async () => {
      const hash = await sha2.sha512.digest(bytes.fromString('test'));
      same(hash.code, sha2.sha512.code);
      same(hash.digest, encode('sha512')(bytes.fromString('test')));
      const hash2 = digest.decode(hash.bytes);
      same(hash2.code, sha2.sha512.code);
      same(hash2.bytes, hash.bytes);
    });
    test('hash identity', async () => {
      const hash = await identity.identity.digest(bytes.fromString('test'));
      same(hash.code, identity.identity.code);
      same(identity.identity.code, 0);
      same(hash.digest, bytes.fromString('test'));
      const hash2 = digest.decode(hash.bytes);
      same(hash2.code, identity.identity.code);
      same(hash2.bytes, hash.bytes);
    });
  });
  describe('decode', () => {
    for (const {encoding, hex, size} of validMultihash) {
      test(`valid fixture ${ hex }`, () => {
        const {code, varint} = encoding;
        const bytes$1 = sample(varint || code, size, hex);
        const digest$1 = hex ? bytes.fromHex(hex) : empty;
        const hash = digest.decode(bytes$1);
        same(hash.bytes, bytes$1);
        same(hash.code, code);
        same(hash.size, size);
        same(hash.digest, digest$1);
      });
    }
    test('get from buffer', async () => {
      const hash = await sha2.sha256.digest(bytes.fromString('test'));
      same(hash.code, 18);
    });
  });
  describe('validate', async () => {
    test('invalid fixtures', async () => {
      for (const test of invalidMultihash) {
        const buff = bytes.fromHex(test.hex);
        await testThrowAsync(() => digest.decode(buff), test.message);
      }
    });
  });
  test('throw on hashing non-buffer', async () => {
    await testThrowAsync(() => sha2.sha256.digest('asdf'), 'Unknown type, must be binary type');
  });
});
