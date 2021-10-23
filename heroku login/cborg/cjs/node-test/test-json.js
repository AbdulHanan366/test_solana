'use strict';

var chai = require('chai');
require('../lib/json/json.js');
var encode = require('../lib/json/encode.js');
var decode = require('../lib/json/decode.js');

const toBytes = str => new TextEncoder().encode(str);
function verifyRoundTrip(obj, sorting) {
  const encoded = new TextDecoder().decode(encode.encode(obj, sorting === false ? { mapSorter: null } : undefined));
  const json = JSON.stringify(obj);
  chai.assert.strictEqual(encoded, json);
  const decoded = decode.decode(toBytes(JSON.stringify(obj)));
  chai.assert.deepStrictEqual(decoded, obj);
}
function verifyEncodedForm(testCase) {
  const obj = JSON.parse(testCase);
  const encoded = encode.encode(obj);
  chai.assert.strictEqual(new TextDecoder().decode(encoded), JSON.stringify(obj));
  const decoded = decode.decode(encoded);
  chai.assert.deepStrictEqual(decoded, obj);
  const decoded2 = decode.decode(toBytes(testCase));
  chai.assert.deepStrictEqual(decoded2, obj);
}
describe('json basics', () => {
  it('can round-trip basic literals', () => {
    const testCases = [
      'null',
      'true',
      'false',
      '0',
      '9007199254740991',
      '-9007199254740991',
      JSON.stringify(Number.MAX_VALUE),
      JSON.stringify(Number.MIN_VALUE)
    ];
    for (const testCase of testCases) {
      verifyEncodedForm(testCase);
    }
    chai.assert.strictEqual(decode.decode(toBytes('1E1')), 10);
    chai.assert.strictEqual(decode.decode(toBytes('0.1e1')), 1);
    chai.assert.strictEqual(decode.decode(toBytes('1e-1')), 0.1);
    chai.assert.strictEqual(decode.decode(toBytes('1e+00')), 1);
    chai.assert.strictEqual(decode.decode(toBytes('10.0')), 10);
    chai.assert.deepStrictEqual(decode.decode(toBytes('[-10.0,1.0,0.0,100.0]')), [
      -10,
      1,
      0,
      100
    ]);
    verifyRoundTrip(true);
    verifyRoundTrip(false);
    verifyRoundTrip(null);
    verifyRoundTrip(100);
    verifyRoundTrip(-100);
    verifyRoundTrip(1.11);
    verifyRoundTrip(-100.11111);
    verifyRoundTrip(11100000000);
    verifyRoundTrip(1.0011111e-18);
  });
  it('handles large integers as BigInt', () => {
    const verify = (inp, str) => {
      if (str === undefined) {
        str = String(inp);
      }
      chai.assert.strictEqual(decode.decode(toBytes(str), { allowBigInt: true }), inp);
      chai.assert.strictEqual(decode.decode(toBytes(str)), parseFloat(str));
    };
    verify(Number.MAX_SAFE_INTEGER);
    verify(-Number.MAX_SAFE_INTEGER);
    verify(BigInt('9007199254740992'));
    verify(BigInt('9007199254740993'));
    verify(BigInt('11959030306112471731'));
    verify(BigInt('18446744073709551615'));
    verify(BigInt('9223372036854775807'));
    verify(BigInt('-9007199254740992'));
    verify(BigInt('-9007199254740993'));
    verify(BigInt('-9223372036854776000'));
    verify(BigInt('-11959030306112471732'));
    verify(BigInt('-18446744073709551616'));
    verify(-9007199254740992, '-9007199254740992.0');
    verify(-9223372036854776000, '-9223372036854776000.0');
    verify(-18446744073709552000, '-18446744073709551616.0');
  });
  it('can round-trip string literals', () => {
    const testCases = [
      JSON.stringify(''),
      JSON.stringify(' '),
      JSON.stringify('"'),
      JSON.stringify('\\'),
      JSON.stringify('\b\f\n\r\t'),
      JSON.stringify('"'),
      JSON.stringify('&#34; %22 0x22 034 &#x22;'),
      '"\uD83D\uDE00"'
    ];
    for (const testCase of testCases) {
      verifyEncodedForm(testCase);
    }
    chai.assert.strictEqual(decode.decode(toBytes('"/ & \\/"')), '/ & /');
    verifyRoundTrip('this is a string');
    verifyRoundTrip('this \uD834\uDD1E is a \u263A\u263A \u2663 string ̐ ̀\n\r');
    verifyRoundTrip('');
    verifyRoundTrip('foo\\bar\nbaz\tbop\rbing"bip\'bang');
  });
  it('can round-trip array literals', () => {
    const testCases = [
      '[]',
      '[null]',
      '[true, false]',
      '[ \n 0,1, 2\n ,  3,\n4] \n ',
      '[-10.0, 1.0, 0.0, 100.0]',
      '[["2 deep"]]'
    ];
    for (const testCase of testCases) {
      verifyEncodedForm(testCase);
    }
    verifyRoundTrip([
      1,
      2,
      3,
      'string',
      true,
      4
    ]);
    verifyRoundTrip([
      1,
      2,
      3,
      'string',
      true,
      [
        'and',
        'a',
        'nested',
        'array',
        true
      ],
      4
    ]);
  });
  it('can round-trip object literals', () => {
    const testCases = [
      '{}',
      '\n {\n "\\b"\n :\n""\n }\n ',
      '{"":""}',
      '{"1":{"2":0,"3":"deep"}}'
    ];
    for (const testCase of testCases) {
      verifyEncodedForm(testCase);
    }
  });
  it('will sort map keys', () => {
    const unsorted = {
      one: 1,
      two: 2,
      three: 3.1,
      str: 'string',
      bool: true,
      four: 4
    };
    verifyRoundTrip(unsorted, false);
    chai.assert.strictEqual(new TextDecoder().decode(encode.encode(unsorted)), '{"bool":true,"four":4,"one":1,"str":"string","three":3.1,"two":2}');
  });
  it('can handle novel cases', () => {
    chai.assert.strictEqual(decode.decode(toBytes('"this \\uD834\\uDD1E is a \\u263a\\u263a string"')), 'this \uD834\uDD1E is a \u263A\u263A string');
    verifyRoundTrip({
      one: 1,
      two: 2,
      three: 3.1,
      str: 'string',
      arr: [
        'and',
        'a',
        'nested',
        [],
        'array',
        [
          true,
          1
        ],
        false
      ],
      bool: true,
      obj: {
        nested: 'object',
        a: [],
        o: {}
      },
      four: 4
    }, false);
    verifyRoundTrip([
      false,
      [
        {
          '#nFzU': {},
          '\\w>': -0.9441451951197325,
          '\t\'': '\'JB+2Wg\tw"IrM*#e^L/d&4rrzUuwq(1mH6aVRredB&Bfs]S"KqK(Tz1Q"URBAfw',
          '\n@FrfM': 'M[D]q&'
        },
        'J4>\'Xdc+u2$%',
        4227406737130333
      ]
    ], false);
    verifyRoundTrip([
      0.12995619865708727,
      -4973404279772543,
      {
        drG2: [true],
        ';#K^Qf>V': null,
        '`2=': 'ecc<e/$+-.;U>Gr5RdZDJ\n5+:{=QHNN.tVVN~dX$FWFwu`6>"&=tW!*1*^\u263A)JFM1p|}&X.B|${*\\f@!w2\u263A+'
      }
    ], false);
    chai.assert.strictEqual(`${ decode.decode(encode.encode(9007199254740991)) }`, '9007199254740991');
    chai.assert.strictEqual(`${ decode.decode(encode.encode(9007199254740992)) }`, '9007199254740992');
    chai.assert.strictEqual(`${ decode.decode(encode.encode(900719925474099100)) }`, '900719925474099100');
  });
  it('should throw on bad types', () => {
    chai.assert.throws(() => encode.encode(new Uint8Array([
      1,
      2
    ])), /CBOR encode error: unsupported type: Uint8Array/);
    chai.assert.throws(() => encode.encode({
      boop: new Uint8Array([
        1,
        2
      ])
    }), /CBOR encode error: unsupported type: Uint8Array/);
    chai.assert.throws(() => encode.encode(undefined), /CBOR encode error: unsupported type: undefined/);
    chai.assert.throws(() => encode.encode(new Map([
      [
        1,
        2
      ],
      [
        2,
        3
      ]
    ])), /CBOR encode error: non-string map keys are not supported/);
    chai.assert.throws(() => encode.encode(new Map([
      [
        [
          'foo',
          'bar'
        ],
        2
      ],
      [
        [
          'bar',
          'foo'
        ],
        3
      ]
    ])), /CBOR encode error: complex map keys are not supported/);
  });
  it('should throw on bad decode failure modes', () => {
    chai.assert.throws(() => decode.decode(toBytes('{"a":1 & "b":2}')), 'CBOR decode error: unexpected character at position 7, was expecting object delimiter but found \'&\'');
    chai.assert.throws(() => decode.decode(toBytes('{"a":1,"b"!2}')), 'CBOR decode error: unexpected character at position 10, was expecting key/value delimiter \':\' but found \'!\'');
    chai.assert.throws(() => decode.decode(toBytes('[1,2&3]')), 'CBOR decode error: unexpected character at position 4, was expecting array delimiter but found \'&\'');
    chai.assert.throws(() => decode.decode(toBytes('{"a":!}')), 'CBOR decode error: unexpected character at position 5');
    chai.assert.throws(() => decode.decode(toBytes('"abc')), 'CBOR decode error: unexpected end of string at position 4');
    chai.assert.throws(() => decode.decode(toBytes('"ab\\xc"')), 'CBOR decode error: unexpected string escape character at position 5');
    chai.assert.throws(() => decode.decode(toBytes('"ab\x1Ec"')), 'CBOR decode error: invalid control character at position 3');
    chai.assert.throws(() => decode.decode(toBytes('"ab\\')), 'CBOR decode error: unexpected string termination at position 4');
    chai.assert.throws(() => decode.decode(toBytes('"\u263A').subarray(0, 3)), 'CBOR decode error: unexpected unicode sequence at position 1');
    chai.assert.throws(() => decode.decode(toBytes('"\\uxyza"')), 'CBOR decode error: unexpected unicode escape character at position 3');
    chai.assert.throws(() => decode.decode(toBytes('"\\u11"')), 'CBOR decode error: unexpected end of unicode escape sequence at position 3');
    chai.assert.throws(() => decode.decode(toBytes('-boop')), 'CBOR decode error: unexpected token at position 1');
    chai.assert.throws(() => decode.decode(toBytes('{"v":nope}')), 'CBOR decode error: unexpected token at position 7, expected to find \'null\'');
    chai.assert.throws(() => decode.decode(toBytes('[n]')), 'CBOR decode error: unexpected end of input at position 1');
    chai.assert.throws(() => decode.decode(toBytes('{"v":truu}')), 'CBOR decode error: unexpected token at position 9, expected to find \'true\'');
    chai.assert.throws(() => decode.decode(toBytes('[tr]')), 'CBOR decode error: unexpected end of input at position 1');
    chai.assert.throws(() => decode.decode(toBytes('{"v":flase}')), 'CBOR decode error: unexpected token at position 7, expected to find \'false\'');
    chai.assert.throws(() => decode.decode(toBytes('[fa]')), 'CBOR decode error: unexpected end of input at position 1');
    chai.assert.throws(() => decode.decode(toBytes('-0..1')), 'CBOR decode error: unexpected token at position 3');
  });
});
