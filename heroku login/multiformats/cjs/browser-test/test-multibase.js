'use strict';

var bytes = require('../src/bytes.js');
var assert = require('assert');
var base2 = require('../src/bases/base2.js');
var base8 = require('../src/bases/base8.js');
var base10 = require('../src/bases/base10.js');
var base16$1 = require('../src/bases/base16.js');
var base32$1 = require('../src/bases/base32.js');
var base36 = require('../src/bases/base36.js');
var base58 = require('../src/bases/base58.js');
var base64$1 = require('../src/bases/base64.js');
var testThrow = require('./fixtures/test-throw.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var assert__default = /*#__PURE__*/_interopDefaultLegacy(assert);

const {base16, base32, base58btc, base64} = {
  ...base16$1,
  ...base32$1,
  ...base58,
  ...base64$1
};
const same = assert__default["default"].deepStrictEqual;
const test = it;
describe('multibase', () => {
  for (const base of [
      base16,
      base32,
      base58btc,
      base64
    ]) {
    describe(`basics ${ base.name }`, () => {
      test('encode/decode', () => {
        const string = base.encode(bytes.fromString('test'));
        same(string[0], base.prefix);
        const buffer = base.decode(string);
        same(buffer, bytes.fromString('test'));
      });
      test('pristine backing buffer', () => {
        const string = base.encode(bytes.fromString('test'));
        const buffer = base.decode(string);
        const expected = bytes.fromString('test');
        same(new Uint8Array(buffer).join(','), new Uint8Array(expected.buffer).join(','));
      });
      test('empty', () => {
        const str = base.encode(bytes.fromString(''));
        same(str, base.prefix);
        same(base.decode(str), bytes.fromString(''));
      });
      test('bad chars', () => {
        const str = base.prefix + '#$%^&*&^%$#';
        const msg = `Non-${ base.name } character`;
        testThrow(() => base.decode(str), msg);
      });
    });
  }
  test('encode string failure', () => {
    const msg = 'Unknown type, must be binary type';
    testThrow(() => base32.encode('asdf'), msg);
    testThrow(() => base32.encoder.encode('asdf'), msg);
  });
  test('decode int failure', () => {
    const msg = 'Can only multibase decode strings';
    testThrow(() => base32.decode(1), msg);
    testThrow(() => base32.decoder.decode(1), msg);
  });
  const buff = bytes.fromString('test');
  const nonPrintableBuff = Uint8Array.from([
    239,
    250,
    254
  ]);
  const baseTest = bases => {
    for (const base of Object.values(bases)) {
      if (base && base.name) {
        test(`encode/decode ${ base.name }`, () => {
          const encoded = base.encode(buff);
          const decoded = base.decode(encoded);
          same(decoded, buff);
          same(encoded, base.encoder.encode(buff));
          same(buff, base.decoder.decode(encoded));
        });
        test(`encode/decode ${ base.name } with non-printable values`, () => {
          const encoded = base.encode(nonPrintableBuff);
          const decoded = base.decode(encoded);
          same(decoded, nonPrintableBuff);
          same(encoded, base.encoder.encode(nonPrintableBuff));
          same(nonPrintableBuff, base.decoder.decode(encoded));
        });
      }
    }
  };
  describe('base2', () => {
    baseTest(base2);
  });
  describe('base8', () => {
    baseTest(base8);
  });
  describe('base10', () => {
    baseTest(base10);
  });
  describe('base16', () => {
    baseTest(base16$1);
  });
  describe('base32', () => {
    baseTest(base32$1);
  });
  describe('base36', () => {
    baseTest(base36);
  });
  describe('base58', () => {
    baseTest(base58);
  });
  describe('base64', () => {
    baseTest(base64$1);
  });
  test('multibase mismatch', () => {
    const b64 = base64.encode(bytes.fromString('test'));
    const msg = `Unable to decode multibase string "${ b64 }", base32 decoder only supports inputs prefixed with ${ base32.prefix }`;
    testThrow(() => base32.decode(b64), msg);
  });
  test('decoder composition', () => {
    const base = base32.decoder.or(base58btc.decoder);
    const b32 = base32.encode(bytes.fromString('test'));
    same(base.decode(b32), bytes.fromString('test'));
    const b58 = base58btc.encode(bytes.fromString('test'));
    same(base.decode(b58), bytes.fromString('test'));
    const b64 = base64.encode(bytes.fromString('test'));
    const msg = `Unable to decode multibase string "${ b64 }", only inputs prefixed with ${ base32.prefix },${ base58btc.prefix } are supported`;
    testThrow(() => base.decode(b64), msg);
    const baseExt = base.or(base64);
    same(baseExt.decode(b64), bytes.fromString('test'));
    testThrow(() => base.decode(b64), msg);
  });
  test('truncated data', () => {
    const b64 = base64.encode(Uint8Array.from([
      245,
      250
    ]));
    testThrow(() => base64.decode(b64.substring(0, b64.length - 1)), 'Unexpected end of data');
  });
});
