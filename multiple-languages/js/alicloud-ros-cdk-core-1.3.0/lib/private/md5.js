"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsMd5 = exports.cryptoMd5 = exports.md5hash = void 0;
/**
 * md5 hashing
 *
 * Uses the built-in 'crypto' library by default for a C implementation
 * of md5, but in case the crypto library has been compiled to disable
 * FIPS-noncompliant hash suites, fall back to a pure JS implementation of
 * md5.
 */
const crypto = require("crypto");
let _impl;
/* eslint-disable no-restricted-syntax */
/**
 * Return a hash of the given input string, in hex format
 */
function md5hash(x) {
    if (!_impl) {
        try {
            crypto.createHash('md5');
            _impl = cryptoMd5;
        }
        catch {
            _impl = jsMd5;
        }
    }
    return _impl(x);
}
exports.md5hash = md5hash;
/* eslint-disable no-bitwise */
function cryptoMd5(x) {
    const hash = crypto.createHash('md5');
    hash.update(x);
    return hash.digest('hex');
}
exports.cryptoMd5 = cryptoMd5;
function jsMd5(s) {
    return hex(md5Buffer(Buffer.from(s, 'utf-8')));
}
exports.jsMd5 = jsMd5;
function md5Round(x, k) {
    let a = x[0], b = x[1], c = x[2], d = x[3];
    a = F(a, b, c, d, k[0], 7, -680876936);
    d = F(d, a, b, c, k[1], 12, -389564586);
    c = F(c, d, a, b, k[2], 17, 606105819);
    b = F(b, c, d, a, k[3], 22, -1044525330);
    a = F(a, b, c, d, k[4], 7, -176418897);
    d = F(d, a, b, c, k[5], 12, 1200080426);
    c = F(c, d, a, b, k[6], 17, -1473231341);
    b = F(b, c, d, a, k[7], 22, -45705983);
    a = F(a, b, c, d, k[8], 7, 1770035416);
    d = F(d, a, b, c, k[9], 12, -1958414417);
    c = F(c, d, a, b, k[10], 17, -42063);
    b = F(b, c, d, a, k[11], 22, -1990404162);
    a = F(a, b, c, d, k[12], 7, 1804603682);
    d = F(d, a, b, c, k[13], 12, -40341101);
    c = F(c, d, a, b, k[14], 17, -1502002290);
    b = F(b, c, d, a, k[15], 22, 1236535329);
    a = G(a, b, c, d, k[1], 5, -165796510);
    d = G(d, a, b, c, k[6], 9, -1069501632);
    c = G(c, d, a, b, k[11], 14, 643717713);
    b = G(b, c, d, a, k[0], 20, -373897302);
    a = G(a, b, c, d, k[5], 5, -701558691);
    d = G(d, a, b, c, k[10], 9, 38016083);
    c = G(c, d, a, b, k[15], 14, -660478335);
    b = G(b, c, d, a, k[4], 20, -405537848);
    a = G(a, b, c, d, k[9], 5, 568446438);
    d = G(d, a, b, c, k[14], 9, -1019803690);
    c = G(c, d, a, b, k[3], 14, -187363961);
    b = G(b, c, d, a, k[8], 20, 1163531501);
    a = G(a, b, c, d, k[13], 5, -1444681467);
    d = G(d, a, b, c, k[2], 9, -51403784);
    c = G(c, d, a, b, k[7], 14, 1735328473);
    b = G(b, c, d, a, k[12], 20, -1926607734);
    a = H(a, b, c, d, k[5], 4, -378558);
    d = H(d, a, b, c, k[8], 11, -2022574463);
    c = H(c, d, a, b, k[11], 16, 1839030562);
    b = H(b, c, d, a, k[14], 23, -35309556);
    a = H(a, b, c, d, k[1], 4, -1530992060);
    d = H(d, a, b, c, k[4], 11, 1272893353);
    c = H(c, d, a, b, k[7], 16, -155497632);
    b = H(b, c, d, a, k[10], 23, -1094730640);
    a = H(a, b, c, d, k[13], 4, 681279174);
    d = H(d, a, b, c, k[0], 11, -358537222);
    c = H(c, d, a, b, k[3], 16, -722521979);
    b = H(b, c, d, a, k[6], 23, 76029189);
    a = H(a, b, c, d, k[9], 4, -640364487);
    d = H(d, a, b, c, k[12], 11, -421815835);
    c = H(c, d, a, b, k[15], 16, 530742520);
    b = H(b, c, d, a, k[2], 23, -995338651);
    a = I(a, b, c, d, k[0], 6, -198630844);
    d = I(d, a, b, c, k[7], 10, 1126891415);
    c = I(c, d, a, b, k[14], 15, -1416354905);
    b = I(b, c, d, a, k[5], 21, -57434055);
    a = I(a, b, c, d, k[12], 6, 1700485571);
    d = I(d, a, b, c, k[3], 10, -1894986606);
    c = I(c, d, a, b, k[10], 15, -1051523);
    b = I(b, c, d, a, k[1], 21, -2054922799);
    a = I(a, b, c, d, k[8], 6, 1873313359);
    d = I(d, a, b, c, k[15], 10, -30611744);
    c = I(c, d, a, b, k[6], 15, -1560198380);
    b = I(b, c, d, a, k[13], 21, 1309151649);
    a = I(a, b, c, d, k[4], 6, -145523070);
    d = I(d, a, b, c, k[11], 10, -1120210379);
    c = I(c, d, a, b, k[2], 15, 718787259);
    b = I(b, c, d, a, k[9], 21, -343485551);
    x[0] = add32(a, x[0]);
    x[1] = add32(b, x[1]);
    x[2] = add32(c, x[2]);
    x[3] = add32(d, x[3]);
}
function cmn(q, a, b, x, s, t) {
    a = add32(add32(a, q), add32(x, t));
    return add32((a << s) | (a >>> (32 - s)), b);
}
function F(a, b, c, d, x, s, t) {
    return cmn((b & c) | (~b & d), a, b, x, s, t);
}
function G(a, b, c, d, x, s, t) {
    return cmn((b & d) | (c & ~d), a, b, x, s, t);
}
function H(a, b, c, d, x, s, t) {
    return cmn(b ^ c ^ d, a, b, x, s, t);
}
function I(a, b, c, d, x, s, t) {
    return cmn(c ^ (b | ~d), a, b, x, s, t);
}
function md5Buffer(buf) {
    let n = buf.length, state = [1732584193, -271733879, -1732584194, 271733878], i = 0;
    for (; i + 64 <= n; i += 64) {
        md5Round(state, bytesToWordsBuf(buf, i));
    }
    // Padding - a single high 1 byte, and the length of the original message at the end
    // Need to add 2 tails if the message is less than 9 bytes shorter than a multiple of 64
    // (Otherwise not enough room for high bit and the 64 bit size)
    const remainingBytes = n - i;
    const padding = Buffer.alloc(64 - remainingBytes < 9 ? 128 : 64);
    buf.copy(padding, 0, i);
    padding.writeUint8(0x80, remainingBytes); // High bit
    const bitLength = n * 8;
    padding.writeUint32LE(n << 3, padding.length - 8);
    if (bitLength >= 0xFFFFFFFF) {
        padding.writeUint32LE(Math.floor(bitLength / 0xFFFFFFFF), padding.length - 4);
    }
    md5Round(state, bytesToWordsBuf(padding, 0));
    if (padding.length > 64) {
        md5Round(state, bytesToWordsBuf(padding, 64));
    }
    return state;
}
function bytesToWordsBuf(buf, byteOffset) {
    const ret = new Array(16);
    let i = 0, j = byteOffset;
    for (; i < 16; i++, j += 4) {
        ret[i] = buf.readUint32LE(j);
    }
    return ret;
}
let hex_chr = '0123456789abcdef'.split('');
function hexify(n) {
    const s = new Array();
    for (let j = 0; j < 4; j++) {
        s.push(hex_chr[(n >>> (j * 8 + 4)) & 0x0f] + hex_chr[(n >>> (j * 8)) & 0x0f]);
    }
    return s.join('');
}
function hex(x) {
    const ret = new Array(x.length);
    for (let i = 0; i < x.length; i++)
        ret[i] = hexify(x[i]);
    return ret.join('');
}
function add32(a, b) {
    return (a + b) & 0xffffffff;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWQ1LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWQ1LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBOzs7Ozs7O0dBT0c7QUFDSCxpQ0FBaUM7QUFFakMsSUFBSSxLQUEwQyxDQUFDO0FBRS9DLHlDQUF5QztBQUV6Qzs7R0FFRztBQUNILFNBQWdCLE9BQU8sQ0FBQyxDQUFTO0lBQy9CLElBQUksQ0FBQyxLQUFLLEVBQUU7UUFDVixJQUFJO1lBQ0YsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN6QixLQUFLLEdBQUcsU0FBUyxDQUFDO1NBQ25CO1FBQUMsTUFBTTtZQUNOLEtBQUssR0FBRyxLQUFLLENBQUM7U0FDZjtLQUNGO0lBQ0QsT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbEIsQ0FBQztBQVZELDBCQVVDO0FBRUQsK0JBQStCO0FBRS9CLFNBQWdCLFNBQVMsQ0FBQyxDQUFTO0lBQ2pDLE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNmLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUM1QixDQUFDO0FBSkQsOEJBSUM7QUFFRCxTQUFnQixLQUFLLENBQUMsQ0FBUztJQUM3QixPQUFPLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2pELENBQUM7QUFGRCxzQkFFQztBQUVELFNBQVMsUUFBUSxDQUFDLENBQVcsRUFBRSxDQUF3QjtJQUNyRCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFM0MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN4QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN6QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdkMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUN4QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDekMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3ZDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDdkMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3pDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDMUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUN4QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDeEMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFFekMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN4QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3hDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN4QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdkMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUN0QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDekMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3hDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDdEMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3pDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN4QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ3hDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN6QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdEMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUN4QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUM7SUFFMUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN6QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ3pDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN4QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDeEMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUN4QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDeEMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDdkMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3hDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN4QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3RDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN2QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDekMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUN4QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7SUFFeEMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDeEMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN2QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ3hDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN6QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdkMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3pDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDdkMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3hDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN6QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ3pDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN2QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDMUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUN2QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7SUFFeEMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDeEIsQ0FBQztBQUVELFNBQVMsR0FBRyxDQUFDLENBQVMsRUFBRSxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFTLEVBQUUsQ0FBUztJQUMzRSxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLE9BQU8sS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDL0MsQ0FBQztBQUVELFNBQVMsQ0FBQyxDQUFDLENBQVMsRUFBRSxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVM7SUFDcEYsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDaEQsQ0FBQztBQUVELFNBQVMsQ0FBQyxDQUFDLENBQVMsRUFBRSxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVM7SUFDcEYsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDaEQsQ0FBQztBQUVELFNBQVMsQ0FBQyxDQUFDLENBQVMsRUFBRSxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVM7SUFDcEYsT0FBTyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3ZDLENBQUM7QUFFRCxTQUFTLENBQUMsQ0FBQyxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFTO0lBQ3BGLE9BQU8sR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUMxQyxDQUFDO0FBRUQsU0FBUyxTQUFTLENBQUMsR0FBVztJQUM1QixJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUNoQixLQUFLLEdBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxVQUFVLEVBQUUsU0FBUyxDQUFDLEVBQ3hELENBQUMsR0FBRyxDQUFDLENBQUM7SUFFUixPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUU7UUFDM0IsUUFBUSxDQUFDLEtBQUssRUFBRSxlQUFlLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDMUM7SUFFRCxvRkFBb0Y7SUFDcEYsd0ZBQXdGO0lBQ3hGLCtEQUErRDtJQUMvRCxNQUFNLGNBQWMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzdCLE1BQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFHLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7SUFFakUsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3hCLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLGNBQWMsQ0FBQyxDQUFDLENBQUMsV0FBVztJQUVyRCxNQUFNLFNBQVMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3hCLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2xELElBQUksU0FBUyxJQUFJLFVBQVUsRUFBRTtRQUMzQixPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDL0U7SUFFRCxRQUFRLENBQUMsS0FBSyxFQUFFLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3QyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsRUFBRSxFQUFFO1FBQ3ZCLFFBQVEsQ0FBQyxLQUFLLEVBQUUsZUFBZSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQy9DO0lBRUQsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDO0FBRUQsU0FBUyxlQUFlLENBQUMsR0FBVyxFQUFFLFVBQWtCO0lBQ3RELE1BQU0sR0FBRyxHQUFHLElBQUksS0FBSyxDQUFTLEVBQUUsQ0FBQyxDQUFDO0lBQ2xDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxDQUFDO0lBRTFCLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQzFCLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzlCO0lBQ0QsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDO0FBRUQsSUFBSSxPQUFPLEdBQUcsa0JBQWtCLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBRTNDLFNBQVMsTUFBTSxDQUFDLENBQVM7SUFDdkIsTUFBTSxDQUFDLEdBQUcsSUFBSSxLQUFLLEVBQVUsQ0FBQztJQUM5QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQzFCLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7S0FDL0U7SUFDRCxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDcEIsQ0FBQztBQUVELFNBQVMsR0FBRyxDQUFDLENBQVc7SUFDdEIsTUFBTSxHQUFHLEdBQUcsSUFBSSxLQUFLLENBQVMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3hDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRTtRQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDekQsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3RCLENBQUM7QUFFRCxTQUFTLEtBQUssQ0FBQyxDQUFTLEVBQUUsQ0FBUztJQUNqQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQztBQUM5QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBtZDUgaGFzaGluZ1xuICpcbiAqIFVzZXMgdGhlIGJ1aWx0LWluICdjcnlwdG8nIGxpYnJhcnkgYnkgZGVmYXVsdCBmb3IgYSBDIGltcGxlbWVudGF0aW9uXG4gKiBvZiBtZDUsIGJ1dCBpbiBjYXNlIHRoZSBjcnlwdG8gbGlicmFyeSBoYXMgYmVlbiBjb21waWxlZCB0byBkaXNhYmxlXG4gKiBGSVBTLW5vbmNvbXBsaWFudCBoYXNoIHN1aXRlcywgZmFsbCBiYWNrIHRvIGEgcHVyZSBKUyBpbXBsZW1lbnRhdGlvbiBvZlxuICogbWQ1LlxuICovXG5pbXBvcnQgKiBhcyBjcnlwdG8gZnJvbSAnY3J5cHRvJztcblxubGV0IF9pbXBsOiB1bmRlZmluZWQgfCAoKHg6IHN0cmluZykgPT4gc3RyaW5nKTtcblxuLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1zeW50YXggKi9cblxuLyoqXG4gKiBSZXR1cm4gYSBoYXNoIG9mIHRoZSBnaXZlbiBpbnB1dCBzdHJpbmcsIGluIGhleCBmb3JtYXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1kNWhhc2goeDogc3RyaW5nKSB7XG4gIGlmICghX2ltcGwpIHtcbiAgICB0cnkge1xuICAgICAgY3J5cHRvLmNyZWF0ZUhhc2goJ21kNScpO1xuICAgICAgX2ltcGwgPSBjcnlwdG9NZDU7XG4gICAgfSBjYXRjaCB7XG4gICAgICBfaW1wbCA9IGpzTWQ1O1xuICAgIH1cbiAgfVxuICByZXR1cm4gX2ltcGwoeCk7XG59XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLWJpdHdpc2UgKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNyeXB0b01kNSh4OiBzdHJpbmcpIHtcbiAgY29uc3QgaGFzaCA9IGNyeXB0by5jcmVhdGVIYXNoKCdtZDUnKTtcbiAgaGFzaC51cGRhdGUoeCk7XG4gIHJldHVybiBoYXNoLmRpZ2VzdCgnaGV4Jyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBqc01kNShzOiBzdHJpbmcpIHtcbiAgcmV0dXJuIGhleChtZDVCdWZmZXIoQnVmZmVyLmZyb20ocywgJ3V0Zi04JykpKTtcbn1cblxuZnVuY3Rpb24gbWQ1Um91bmQoeDogbnVtYmVyW10sIGs6IFJlYWRvbmx5QXJyYXk8bnVtYmVyPikge1xuICBsZXQgYSA9IHhbMF0sIGIgPSB4WzFdLCBjID0geFsyXSwgZCA9IHhbM107XG5cbiAgYSA9IEYoYSwgYiwgYywgZCwga1swXSwgNywgLTY4MDg3NjkzNik7XG4gIGQgPSBGKGQsIGEsIGIsIGMsIGtbMV0sIDEyLCAtMzg5NTY0NTg2KTtcbiAgYyA9IEYoYywgZCwgYSwgYiwga1syXSwgMTcsIDYwNjEwNTgxOSk7XG4gIGIgPSBGKGIsIGMsIGQsIGEsIGtbM10sIDIyLCAtMTA0NDUyNTMzMCk7XG4gIGEgPSBGKGEsIGIsIGMsIGQsIGtbNF0sIDcsIC0xNzY0MTg4OTcpO1xuICBkID0gRihkLCBhLCBiLCBjLCBrWzVdLCAxMiwgMTIwMDA4MDQyNik7XG4gIGMgPSBGKGMsIGQsIGEsIGIsIGtbNl0sIDE3LCAtMTQ3MzIzMTM0MSk7XG4gIGIgPSBGKGIsIGMsIGQsIGEsIGtbN10sIDIyLCAtNDU3MDU5ODMpO1xuICBhID0gRihhLCBiLCBjLCBkLCBrWzhdLCA3LCAxNzcwMDM1NDE2KTtcbiAgZCA9IEYoZCwgYSwgYiwgYywga1s5XSwgMTIsIC0xOTU4NDE0NDE3KTtcbiAgYyA9IEYoYywgZCwgYSwgYiwga1sxMF0sIDE3LCAtNDIwNjMpO1xuICBiID0gRihiLCBjLCBkLCBhLCBrWzExXSwgMjIsIC0xOTkwNDA0MTYyKTtcbiAgYSA9IEYoYSwgYiwgYywgZCwga1sxMl0sIDcsIDE4MDQ2MDM2ODIpO1xuICBkID0gRihkLCBhLCBiLCBjLCBrWzEzXSwgMTIsIC00MDM0MTEwMSk7XG4gIGMgPSBGKGMsIGQsIGEsIGIsIGtbMTRdLCAxNywgLTE1MDIwMDIyOTApO1xuICBiID0gRihiLCBjLCBkLCBhLCBrWzE1XSwgMjIsIDEyMzY1MzUzMjkpO1xuXG4gIGEgPSBHKGEsIGIsIGMsIGQsIGtbMV0sIDUsIC0xNjU3OTY1MTApO1xuICBkID0gRyhkLCBhLCBiLCBjLCBrWzZdLCA5LCAtMTA2OTUwMTYzMik7XG4gIGMgPSBHKGMsIGQsIGEsIGIsIGtbMTFdLCAxNCwgNjQzNzE3NzEzKTtcbiAgYiA9IEcoYiwgYywgZCwgYSwga1swXSwgMjAsIC0zNzM4OTczMDIpO1xuICBhID0gRyhhLCBiLCBjLCBkLCBrWzVdLCA1LCAtNzAxNTU4NjkxKTtcbiAgZCA9IEcoZCwgYSwgYiwgYywga1sxMF0sIDksIDM4MDE2MDgzKTtcbiAgYyA9IEcoYywgZCwgYSwgYiwga1sxNV0sIDE0LCAtNjYwNDc4MzM1KTtcbiAgYiA9IEcoYiwgYywgZCwgYSwga1s0XSwgMjAsIC00MDU1Mzc4NDgpO1xuICBhID0gRyhhLCBiLCBjLCBkLCBrWzldLCA1LCA1Njg0NDY0MzgpO1xuICBkID0gRyhkLCBhLCBiLCBjLCBrWzE0XSwgOSwgLTEwMTk4MDM2OTApO1xuICBjID0gRyhjLCBkLCBhLCBiLCBrWzNdLCAxNCwgLTE4NzM2Mzk2MSk7XG4gIGIgPSBHKGIsIGMsIGQsIGEsIGtbOF0sIDIwLCAxMTYzNTMxNTAxKTtcbiAgYSA9IEcoYSwgYiwgYywgZCwga1sxM10sIDUsIC0xNDQ0NjgxNDY3KTtcbiAgZCA9IEcoZCwgYSwgYiwgYywga1syXSwgOSwgLTUxNDAzNzg0KTtcbiAgYyA9IEcoYywgZCwgYSwgYiwga1s3XSwgMTQsIDE3MzUzMjg0NzMpO1xuICBiID0gRyhiLCBjLCBkLCBhLCBrWzEyXSwgMjAsIC0xOTI2NjA3NzM0KTtcblxuICBhID0gSChhLCBiLCBjLCBkLCBrWzVdLCA0LCAtMzc4NTU4KTtcbiAgZCA9IEgoZCwgYSwgYiwgYywga1s4XSwgMTEsIC0yMDIyNTc0NDYzKTtcbiAgYyA9IEgoYywgZCwgYSwgYiwga1sxMV0sIDE2LCAxODM5MDMwNTYyKTtcbiAgYiA9IEgoYiwgYywgZCwgYSwga1sxNF0sIDIzLCAtMzUzMDk1NTYpO1xuICBhID0gSChhLCBiLCBjLCBkLCBrWzFdLCA0LCAtMTUzMDk5MjA2MCk7XG4gIGQgPSBIKGQsIGEsIGIsIGMsIGtbNF0sIDExLCAxMjcyODkzMzUzKTtcbiAgYyA9IEgoYywgZCwgYSwgYiwga1s3XSwgMTYsIC0xNTU0OTc2MzIpO1xuICBiID0gSChiLCBjLCBkLCBhLCBrWzEwXSwgMjMsIC0xMDk0NzMwNjQwKTtcbiAgYSA9IEgoYSwgYiwgYywgZCwga1sxM10sIDQsIDY4MTI3OTE3NCk7XG4gIGQgPSBIKGQsIGEsIGIsIGMsIGtbMF0sIDExLCAtMzU4NTM3MjIyKTtcbiAgYyA9IEgoYywgZCwgYSwgYiwga1szXSwgMTYsIC03MjI1MjE5NzkpO1xuICBiID0gSChiLCBjLCBkLCBhLCBrWzZdLCAyMywgNzYwMjkxODkpO1xuICBhID0gSChhLCBiLCBjLCBkLCBrWzldLCA0LCAtNjQwMzY0NDg3KTtcbiAgZCA9IEgoZCwgYSwgYiwgYywga1sxMl0sIDExLCAtNDIxODE1ODM1KTtcbiAgYyA9IEgoYywgZCwgYSwgYiwga1sxNV0sIDE2LCA1MzA3NDI1MjApO1xuICBiID0gSChiLCBjLCBkLCBhLCBrWzJdLCAyMywgLTk5NTMzODY1MSk7XG5cbiAgYSA9IEkoYSwgYiwgYywgZCwga1swXSwgNiwgLTE5ODYzMDg0NCk7XG4gIGQgPSBJKGQsIGEsIGIsIGMsIGtbN10sIDEwLCAxMTI2ODkxNDE1KTtcbiAgYyA9IEkoYywgZCwgYSwgYiwga1sxNF0sIDE1LCAtMTQxNjM1NDkwNSk7XG4gIGIgPSBJKGIsIGMsIGQsIGEsIGtbNV0sIDIxLCAtNTc0MzQwNTUpO1xuICBhID0gSShhLCBiLCBjLCBkLCBrWzEyXSwgNiwgMTcwMDQ4NTU3MSk7XG4gIGQgPSBJKGQsIGEsIGIsIGMsIGtbM10sIDEwLCAtMTg5NDk4NjYwNik7XG4gIGMgPSBJKGMsIGQsIGEsIGIsIGtbMTBdLCAxNSwgLTEwNTE1MjMpO1xuICBiID0gSShiLCBjLCBkLCBhLCBrWzFdLCAyMSwgLTIwNTQ5MjI3OTkpO1xuICBhID0gSShhLCBiLCBjLCBkLCBrWzhdLCA2LCAxODczMzEzMzU5KTtcbiAgZCA9IEkoZCwgYSwgYiwgYywga1sxNV0sIDEwLCAtMzA2MTE3NDQpO1xuICBjID0gSShjLCBkLCBhLCBiLCBrWzZdLCAxNSwgLTE1NjAxOTgzODApO1xuICBiID0gSShiLCBjLCBkLCBhLCBrWzEzXSwgMjEsIDEzMDkxNTE2NDkpO1xuICBhID0gSShhLCBiLCBjLCBkLCBrWzRdLCA2LCAtMTQ1NTIzMDcwKTtcbiAgZCA9IEkoZCwgYSwgYiwgYywga1sxMV0sIDEwLCAtMTEyMDIxMDM3OSk7XG4gIGMgPSBJKGMsIGQsIGEsIGIsIGtbMl0sIDE1LCA3MTg3ODcyNTkpO1xuICBiID0gSShiLCBjLCBkLCBhLCBrWzldLCAyMSwgLTM0MzQ4NTU1MSk7XG5cbiAgeFswXSA9IGFkZDMyKGEsIHhbMF0pO1xuICB4WzFdID0gYWRkMzIoYiwgeFsxXSk7XG4gIHhbMl0gPSBhZGQzMihjLCB4WzJdKTtcbiAgeFszXSA9IGFkZDMyKGQsIHhbM10pO1xufVxuXG5mdW5jdGlvbiBjbW4ocTogbnVtYmVyLCBhOiBudW1iZXIsIGI6IG51bWJlciwgeDogbnVtYmVyLCBzOiBudW1iZXIsIHQ6IG51bWJlcikge1xuICBhID0gYWRkMzIoYWRkMzIoYSwgcSksIGFkZDMyKHgsIHQpKTtcbiAgcmV0dXJuIGFkZDMyKChhIDw8IHMpIHwgKGEgPj4+ICgzMiAtIHMpKSwgYik7XG59XG5cbmZ1bmN0aW9uIEYoYTogbnVtYmVyLCBiOiBudW1iZXIsIGM6IG51bWJlciwgZDogbnVtYmVyLCB4OiBudW1iZXIsIHM6IG51bWJlciwgdDogbnVtYmVyKSB7XG4gIHJldHVybiBjbW4oKGIgJiBjKSB8ICh+YiAmIGQpLCBhLCBiLCB4LCBzLCB0KTtcbn1cblxuZnVuY3Rpb24gRyhhOiBudW1iZXIsIGI6IG51bWJlciwgYzogbnVtYmVyLCBkOiBudW1iZXIsIHg6IG51bWJlciwgczogbnVtYmVyLCB0OiBudW1iZXIpIHtcbiAgcmV0dXJuIGNtbigoYiAmIGQpIHwgKGMgJiB+ZCksIGEsIGIsIHgsIHMsIHQpO1xufVxuXG5mdW5jdGlvbiBIKGE6IG51bWJlciwgYjogbnVtYmVyLCBjOiBudW1iZXIsIGQ6IG51bWJlciwgeDogbnVtYmVyLCBzOiBudW1iZXIsIHQ6IG51bWJlcikge1xuICByZXR1cm4gY21uKGIgXiBjIF4gZCwgYSwgYiwgeCwgcywgdCk7XG59XG5cbmZ1bmN0aW9uIEkoYTogbnVtYmVyLCBiOiBudW1iZXIsIGM6IG51bWJlciwgZDogbnVtYmVyLCB4OiBudW1iZXIsIHM6IG51bWJlciwgdDogbnVtYmVyKSB7XG4gIHJldHVybiBjbW4oYyBeIChiIHwgfmQpLCBhLCBiLCB4LCBzLCB0KTtcbn1cblxuZnVuY3Rpb24gbWQ1QnVmZmVyKGJ1ZjogQnVmZmVyKSB7XG4gIGxldCBuID0gYnVmLmxlbmd0aCxcbiAgICBzdGF0ZSA9IFsxNzMyNTg0MTkzLCAtMjcxNzMzODc5LCAtMTczMjU4NDE5NCwgMjcxNzMzODc4XSxcbiAgICBpID0gMDtcblxuICBmb3IgKDsgaSArIDY0IDw9IG47IGkgKz0gNjQpIHtcbiAgICBtZDVSb3VuZChzdGF0ZSwgYnl0ZXNUb1dvcmRzQnVmKGJ1ZiwgaSkpO1xuICB9XG5cbiAgLy8gUGFkZGluZyAtIGEgc2luZ2xlIGhpZ2ggMSBieXRlLCBhbmQgdGhlIGxlbmd0aCBvZiB0aGUgb3JpZ2luYWwgbWVzc2FnZSBhdCB0aGUgZW5kXG4gIC8vIE5lZWQgdG8gYWRkIDIgdGFpbHMgaWYgdGhlIG1lc3NhZ2UgaXMgbGVzcyB0aGFuIDkgYnl0ZXMgc2hvcnRlciB0aGFuIGEgbXVsdGlwbGUgb2YgNjRcbiAgLy8gKE90aGVyd2lzZSBub3QgZW5vdWdoIHJvb20gZm9yIGhpZ2ggYml0IGFuZCB0aGUgNjQgYml0IHNpemUpXG4gIGNvbnN0IHJlbWFpbmluZ0J5dGVzID0gbiAtIGk7XG4gIGNvbnN0IHBhZGRpbmcgPSBCdWZmZXIuYWxsb2MoNjQgLSByZW1haW5pbmdCeXRlcyA8IDkgPyAxMjggOiA2NCk7XG5cbiAgYnVmLmNvcHkocGFkZGluZywgMCwgaSk7XG4gIHBhZGRpbmcud3JpdGVVaW50OCgweDgwLCByZW1haW5pbmdCeXRlcyk7IC8vIEhpZ2ggYml0XG5cbiAgY29uc3QgYml0TGVuZ3RoID0gbiAqIDg7XG4gIHBhZGRpbmcud3JpdGVVaW50MzJMRShuIDw8IDMsIHBhZGRpbmcubGVuZ3RoIC0gOCk7XG4gIGlmIChiaXRMZW5ndGggPj0gMHhGRkZGRkZGRikge1xuICAgIHBhZGRpbmcud3JpdGVVaW50MzJMRShNYXRoLmZsb29yKGJpdExlbmd0aCAvIDB4RkZGRkZGRkYpLCBwYWRkaW5nLmxlbmd0aCAtIDQpO1xuICB9XG5cbiAgbWQ1Um91bmQoc3RhdGUsIGJ5dGVzVG9Xb3Jkc0J1ZihwYWRkaW5nLCAwKSk7XG4gIGlmIChwYWRkaW5nLmxlbmd0aCA+IDY0KSB7XG4gICAgbWQ1Um91bmQoc3RhdGUsIGJ5dGVzVG9Xb3Jkc0J1ZihwYWRkaW5nLCA2NCkpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuXG5mdW5jdGlvbiBieXRlc1RvV29yZHNCdWYoYnVmOiBCdWZmZXIsIGJ5dGVPZmZzZXQ6IG51bWJlcikge1xuICBjb25zdCByZXQgPSBuZXcgQXJyYXk8bnVtYmVyPigxNik7XG4gIGxldCBpID0gMCwgaiA9IGJ5dGVPZmZzZXQ7XG5cbiAgZm9yICg7IGkgPCAxNjsgaSsrLCBqICs9IDQpIHtcbiAgICByZXRbaV0gPSBidWYucmVhZFVpbnQzMkxFKGopO1xuICB9XG4gIHJldHVybiByZXQ7XG59XG5cbmxldCBoZXhfY2hyID0gJzAxMjM0NTY3ODlhYmNkZWYnLnNwbGl0KCcnKTtcblxuZnVuY3Rpb24gaGV4aWZ5KG46IG51bWJlcikge1xuICBjb25zdCBzID0gbmV3IEFycmF5PHN0cmluZz4oKTtcbiAgZm9yIChsZXQgaiA9IDA7IGogPCA0OyBqKyspIHtcbiAgICBzLnB1c2goaGV4X2NoclsobiA+Pj4gKGogKiA4ICsgNCkpICYgMHgwZl0gKyBoZXhfY2hyWyhuID4+PiAoaiAqIDgpKSAmIDB4MGZdKTtcbiAgfVxuICByZXR1cm4gcy5qb2luKCcnKTtcbn1cblxuZnVuY3Rpb24gaGV4KHg6IG51bWJlcltdKSB7XG4gIGNvbnN0IHJldCA9IG5ldyBBcnJheTxzdHJpbmc+KHgubGVuZ3RoKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB4Lmxlbmd0aDsgaSsrKSByZXRbaV0gPSBoZXhpZnkoeFtpXSk7XG4gIHJldHVybiByZXQuam9pbignJyk7XG59XG5cbmZ1bmN0aW9uIGFkZDMyKGE6IG51bWJlciwgYjogbnVtYmVyKSB7XG4gIHJldHVybiAoYSArIGIpICYgMHhmZmZmZmZmZjtcbn1cbiJdfQ==