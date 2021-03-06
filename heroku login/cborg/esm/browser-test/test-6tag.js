import chai from 'chai';
import {
  Token,
  Type
} from '../lib/token.js';
import {
  decode,
  encode
} from '../cborg.js';
import {
  fromHex,
  toHex
} from '../lib/byte-utils.js';
const {assert} = chai;
function dateDecoder(obj) {
  if (typeof obj !== 'string') {
    throw new Error('expected string for tag 1');
  }
  return new Date(obj);
}
function dateEncoder(obj) {
  if (!(obj instanceof Date)) {
    throw new Error('expected Date for "Date" encoder');
  }
  return [
    new Token(Type.tag, 0),
    new Token(Type.string, obj.toISOString().replace(/\.000Z$/, 'Z'))
  ];
}
function Uint16ArrayDecoder(obj) {
  if (typeof obj !== 'string') {
    throw new Error('expected string for tag 23');
  }
  const u8a = fromHex(obj);
  return new Uint16Array(u8a.buffer, u8a.byteOffset, u8a.length / 2);
}
function Uint16ArrayEncoder(obj) {
  if (!(obj instanceof Uint16Array)) {
    throw new Error('expected Uint16Array for "Uint16Array" encoder');
  }
  return [
    new Token(Type.tag, 23),
    new Token(Type.string, toHex(obj))
  ];
}
describe('tag', () => {
  it('date', () => {
    assert.throws(() => encode({ d: new Date() }), /unsupported type: Date/);
    assert.equal(toHex(encode(new Date('2013-03-21T20:04:00Z'), { typeEncoders: { Date: dateEncoder } })), 'c074323031332d30332d32315432303a30343a30305a');
    const decodedDate = decode(fromHex('c074323031332d30332d32315432303a30343a30305a'), { tags: { 0: dateDecoder } });
    assert.instanceOf(decodedDate, Date);
    assert.equal(decodedDate.toISOString(), new Date('2013-03-21T20:04:00Z').toISOString());
  });
  it('Uint16Array as hex/23 (overide existing type)', () => {
    assert.equal(toHex(encode(Uint16Array.from([
      1,
      2,
      3
    ]), { typeEncoders: { Uint16Array: Uint16ArrayEncoder } })), 'd76c303130303032303030333030');
    const decoded = decode(fromHex('d76c303130303032303030333030'), { tags: { 23: Uint16ArrayDecoder } });
    assert.instanceOf(decoded, Uint16Array);
    assert.equal(toHex(decoded), toHex(Uint16Array.from([
      1,
      2,
      3
    ])));
  });
  it('tag int too large', () => {
    const verify = (hex, strict) => {
      if (!strict) {
        assert.throws(() => decode(fromHex(hex), {
          tags: { 8: dateDecoder },
          strict: true
        }), /integer encoded in more bytes than necessary/);
      }
      const decodedDate = decode(fromHex(hex), {
        tags: { 8: dateDecoder },
        strict
      });
      assert.instanceOf(decodedDate, Date);
      assert.equal(decodedDate.toISOString(), new Date('2013-03-21T20:04:00Z').toISOString());
    };
    verify('c874323031332d30332d32315432303a30343a30305a', true);
    verify('d80874323031332d30332d32315432303a30343a30305a', false);
    verify('d9000874323031332d30332d32315432303a30343a30305a', false);
    verify('da0000000874323031332d30332d32315432303a30343a30305a', false);
    verify('db000000000000000874323031332d30332d32315432303a30343a30305a', false);
  });
});