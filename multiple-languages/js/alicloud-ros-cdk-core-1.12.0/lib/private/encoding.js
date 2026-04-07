"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractTokenDouble = exports.createTokenDouble = exports.unresolved = exports.containsListTokenElement = exports.NullConcat = exports.regexQuote = exports.TokenString = exports.VALID_KEY_CHARS = exports.END_TOKEN_MARKER = exports.BEGIN_LIST_TOKEN_MARKER = exports.BEGIN_STRING_TOKEN_MARKER = void 0;
const string_fragments_1 = require("../string-fragments");
const token_1 = require("../token");
// Details for encoding and decoding Tokens into native types; should not be exported
exports.BEGIN_STRING_TOKEN_MARKER = "${Token[";
exports.BEGIN_LIST_TOKEN_MARKER = "#{Token[";
exports.END_TOKEN_MARKER = "]}";
exports.VALID_KEY_CHARS = "a-zA-Z0-9:._-";
const QUOTED_BEGIN_STRING_TOKEN_MARKER = regexQuote(exports.BEGIN_STRING_TOKEN_MARKER);
const QUOTED_BEGIN_LIST_TOKEN_MARKER = regexQuote(exports.BEGIN_LIST_TOKEN_MARKER);
const QUOTED_END_TOKEN_MARKER = regexQuote(exports.END_TOKEN_MARKER);
const STRING_TOKEN_REGEX = new RegExp(`${QUOTED_BEGIN_STRING_TOKEN_MARKER}([${exports.VALID_KEY_CHARS}]+)${QUOTED_END_TOKEN_MARKER}`, "g");
const LIST_TOKEN_REGEX = new RegExp(`${QUOTED_BEGIN_LIST_TOKEN_MARKER}([${exports.VALID_KEY_CHARS}]+)${QUOTED_END_TOKEN_MARKER}`, "g");
/**
 * A string with markers in it that can be resolved to external values
 */
class TokenString {
    /**
     * Returns a `TokenString` for this string.
     */
    static forString(s) {
        return new TokenString(s, STRING_TOKEN_REGEX);
    }
    /**
     * Returns a `TokenString` for this string (must be the first string element of the list)
     */
    static forListToken(s) {
        return new TokenString(s, LIST_TOKEN_REGEX);
    }
    constructor(str, re) {
        this.str = str;
        this.re = re;
    }
    /**
     * Split string on markers, substituting markers with Tokens
     */
    split(lookup) {
        const ret = new string_fragments_1.TokenizedStringFragments();
        let rest = 0;
        this.re.lastIndex = 0; // Reset
        let m = this.re.exec(this.str);
        while (m) {
            if (m.index > rest) {
                ret.addLiteral(this.str.substring(rest, m.index));
            }
            ret.addToken(lookup(m[1]));
            rest = this.re.lastIndex;
            m = this.re.exec(this.str);
        }
        if (rest < this.str.length) {
            ret.addLiteral(this.str.substring(rest));
        }
        return ret;
    }
    /**
     * Indicates if this string includes tokens.
     */
    test() {
        this.re.lastIndex = 0; // Reset
        return this.re.test(this.str);
    }
}
exports.TokenString = TokenString;
/**
 * Quote a string for use in a regex
 */
function regexQuote(s) {
    return s.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
}
exports.regexQuote = regexQuote;
/**
 * Concatenator that disregards the input
 *
 * Can be used when traversing the tokens is important, but the
 * result isn't.
 */
class NullConcat {
    join(_left, _right) {
        return undefined;
    }
}
exports.NullConcat = NullConcat;
function containsListTokenElement(xs) {
    return xs.some((x) => typeof x === "string" && TokenString.forListToken(x).test());
}
exports.containsListTokenElement = containsListTokenElement;
/**
 * Returns true if obj is a token (i.e. has the resolve() method or is a string
 * that includes token markers), or it's a listifictaion of a Token string.
 *
 * @param obj The object to test.
 */
function unresolved(obj) {
    if (typeof obj === "string") {
        return TokenString.forString(obj).test();
    }
    else if (typeof obj === "number") {
        return extractTokenDouble(obj) !== undefined;
    }
    else if (Array.isArray(obj) && obj.length === 1) {
        return (typeof obj[0] === "string" && TokenString.forListToken(obj[0]).test());
    }
    else {
        return (0, token_1.isResolvableObject)(obj);
    }
}
exports.unresolved = unresolved;
/**
 * Bit pattern in the top 16 bits of a double to indicate a Token
 *
 * An IEEE double in LE memory order looks like this (grouped
 * into octets, then grouped into 32-bit words):
 *
 * mmmmmmmm.mmmmmmmm.mmmmmmmm.mmmmmmmm | mmmmmmmm.mmmmmmmm.EEEEmmmm.sEEEEEEE
 *
 * - m: mantissa (52 bits)
 * - E: exponent (11 bits)
 * - s: sign (1 bit)
 *
 * We put the following marker into the top 16 bits (exponent and sign), and
 * use the mantissa part to encode the token index. To save some bit twiddling
 * we use all top 16 bits for the tag. That loses us 4 mantissa bits to store
 * information in but we still have 48, which is going to be plenty for any
 * number of tokens to be created during the lifetime of any CDK application.
 *
 * Can't have all bits set because that makes a NaN, so unset the least
 * significant exponent bit.
 *
 * Currently not supporting BE architectures.
 */
// tslint:disable-next-line:no-bitwise
const DOUBLE_TOKEN_MARKER_BITS = 0xfbff << 16;
/**
 * Highest encodable number
 */
const MAX_ENCODABLE_INTEGER = Math.pow(2, 48) - 1;
/**
 * Get 2^32 as a number, so we can do multiplication and div instead of bit shifting
 *
 * Necessary because in JavaScript, bit operations implicitly convert
 * to int32 and we need them to work on "int64"s.
 *
 * So instead of x >> 32, we do Math.floor(x / 2^32), and vice versa.
 */
const BITS32 = Math.pow(2, 32);
/**
 * Return a special Double value that encodes the given nonnegative integer
 *
 * We use this to encode Token ordinals.
 */
function createTokenDouble(x) {
    if (Math.floor(x) !== x || x < 0) {
        throw new Error("Can only encode positive integers");
    }
    if (x > MAX_ENCODABLE_INTEGER) {
        throw new Error(`Got an index too large to encode: ${x}`);
    }
    const buf = new ArrayBuffer(8);
    const ints = new Uint32Array(buf);
    // tslint:disable:no-bitwise
    ints[0] = x & 0x0000ffffffff; // Bottom 32 bits of number
    // This needs an "x >> 32" but that will make it a 32-bit number instead
    // of a 64-bit number.
    ints[1] = (shr32(x) & 0xffff) | DOUBLE_TOKEN_MARKER_BITS; // Top 16 bits of number and the mask
    // tslint:enable:no-bitwise
    return new Float64Array(buf)[0];
}
exports.createTokenDouble = createTokenDouble;
/**
 * Shift a 64-bit int right 32 bits
 */
function shr32(x) {
    return Math.floor(x / BITS32);
}
/**
 * Shift a 64-bit left 32 bits
 */
function shl32(x) {
    return x * BITS32;
}
/**
 * Extract the encoded integer out of the special Double value
 *
 * Returns undefined if the float is a not an encoded token.
 */
function extractTokenDouble(encoded) {
    const buf = new ArrayBuffer(8);
    new Float64Array(buf)[0] = encoded;
    const ints = new Uint32Array(buf);
    // tslint:disable:no-bitwise
    if ((ints[1] & 0xffff0000) !== DOUBLE_TOKEN_MARKER_BITS) {
        return undefined;
    }
    // Must use + instead of | here (bitwise operations
    // will force 32-bits integer arithmetic, + will not).
    return ints[0] + shl32(ints[1] & 0xffff);
    // tslint:enable:no-bitwise
}
exports.extractTokenDouble = extractTokenDouble;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5jb2RpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJlbmNvZGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwwREFBK0Q7QUFDL0Qsb0NBQThDO0FBRzlDLHFGQUFxRjtBQUV4RSxRQUFBLHlCQUF5QixHQUFHLFVBQVUsQ0FBQztBQUN2QyxRQUFBLHVCQUF1QixHQUFHLFVBQVUsQ0FBQztBQUNyQyxRQUFBLGdCQUFnQixHQUFHLElBQUksQ0FBQztBQUV4QixRQUFBLGVBQWUsR0FBRyxlQUFlLENBQUM7QUFFL0MsTUFBTSxnQ0FBZ0MsR0FBRyxVQUFVLENBQUMsaUNBQXlCLENBQUMsQ0FBQztBQUMvRSxNQUFNLDhCQUE4QixHQUFHLFVBQVUsQ0FBQywrQkFBdUIsQ0FBQyxDQUFDO0FBQzNFLE1BQU0sdUJBQXVCLEdBQUcsVUFBVSxDQUFDLHdCQUFnQixDQUFDLENBQUM7QUFFN0QsTUFBTSxrQkFBa0IsR0FBRyxJQUFJLE1BQU0sQ0FDbkMsR0FBRyxnQ0FBZ0MsS0FBSyx1QkFBZSxNQUFNLHVCQUF1QixFQUFFLEVBQ3RGLEdBQUcsQ0FDSixDQUFDO0FBQ0YsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLE1BQU0sQ0FDakMsR0FBRyw4QkFBOEIsS0FBSyx1QkFBZSxNQUFNLHVCQUF1QixFQUFFLEVBQ3BGLEdBQUcsQ0FDSixDQUFDO0FBRUY7O0dBRUc7QUFDSCxNQUFhLFdBQVc7SUFDdEI7O09BRUc7SUFDSSxNQUFNLENBQUMsU0FBUyxDQUFDLENBQVM7UUFDL0IsT0FBTyxJQUFJLFdBQVcsQ0FBQyxDQUFDLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxNQUFNLENBQUMsWUFBWSxDQUFDLENBQVM7UUFDbEMsT0FBTyxJQUFJLFdBQVcsQ0FBQyxDQUFDLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsWUFBNkIsR0FBVyxFQUFtQixFQUFVO1FBQXhDLFFBQUcsR0FBSCxH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Q0FBQyxDQUFDLHFDQUFxQztJQUMvRiwyQkFBMkI7SUFFM0IsT0FBTyxJQUFJLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNsQyxDQUFDO0FBcEJELDhDQW9CQztBQUVEOztHQUVHO0FBQ0gsU0FBUyxLQUFLLENBQUMsQ0FBUztJQUN0QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDO0FBQ2hDLENBQUM7QUFFRDs7R0FFRztBQUNILFNBQVMsS0FBSyxDQUFDLENBQVM7SUFDdEIsT0FBTyxDQUFDLEdBQUcsTUFBTSxDQUFDO0FBQ3BCLENBQUM7QUFFRDs7OztHQUlHO0FBQ0gsU0FBZ0Isa0JBQWtCLENBQUMsT0FBZTtJQUNoRCxNQUFNLEdBQUcsR0FBRyxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvQixJQUFJLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUM7SUFFbkMsTUFBTSxJQUFJLEdBQUcsSUFBSSxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFbEMsNEJBQTRCO0lBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLEtBQUssd0JBQXdCLEVBQUU7UUFDdkQsT0FBTyxTQUFTLENBQUM7S0FDbEI7SUFFRCxtREFBbUQ7SUFDbkQsc0RBQXNEO0lBQ3RELE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUM7SUFDekMsMkJBQTJCO0FBQzdCLENBQUM7QUFmRCxnREFlQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRva2VuaXplZFN0cmluZ0ZyYWdtZW50cyB9IGZyb20gXCIuLi9zdHJpbmctZnJhZ21lbnRzXCI7XG5pbXBvcnQgeyBpc1Jlc29sdmFibGVPYmplY3QgfSBmcm9tIFwiLi4vdG9rZW5cIjtcbmltcG9ydCB7IElSZXNvbHZhYmxlLCBJRnJhZ21lbnRDb25jYXRlbmF0b3IgfSBmcm9tIFwiLi4vcmVzb2x2YWJsZVwiO1xuXG4vLyBEZXRhaWxzIGZvciBlbmNvZGluZyBhbmQgZGVjb2RpbmcgVG9rZW5zIGludG8gbmF0aXZlIHR5cGVzOyBzaG91bGQgbm90IGJlIGV4cG9ydGVkXG5cbmV4cG9ydCBjb25zdCBCRUdJTl9TVFJJTkdfVE9LRU5fTUFSS0VSID0gXCIke1Rva2VuW1wiO1xuZXhwb3J0IGNvbnN0IEJFR0lOX0xJU1RfVE9LRU5fTUFSS0VSID0gXCIje1Rva2VuW1wiO1xuZXhwb3J0IGNvbnN0IEVORF9UT0tFTl9NQVJLRVIgPSBcIl19XCI7XG5cbmV4cG9ydCBjb25zdCBWQUxJRF9LRVlfQ0hBUlMgPSBcImEtekEtWjAtOTouXy1cIjtcblxuY29uc3QgUVVPVEVEX0JFR0lOX1NUUklOR19UT0tFTl9NQVJLRVIgPSByZWdleFF1b3RlKEJFR0lOX1NUUklOR19UT0tFTl9NQVJLRVIpO1xuY29uc3QgUVVPVEVEX0JFR0lOX0xJU1RfVE9LRU5fTUFSS0VSID0gcmVnZXhRdW90ZShCRUdJTl9MSVNUX1RPS0VOX01BUktFUik7XG5jb25zdCBRVU9URURfRU5EX1RPS0VOX01BUktFUiA9IHJlZ2V4UXVvdGUoRU5EX1RPS0VOX01BUktFUik7XG5cbmNvbnN0IFNUUklOR19UT0tFTl9SRUdFWCA9IG5ldyBSZWdFeHAoXG4gIGAke1FVT1RFRF9CRUdJTl9TVFJJTkdfVE9LRU5fTUFSS0VSfShbJHtWQUxJRF9LRVlfQ0hBUlN9XSspJHtRVU9URURfRU5EX1RPS0VOX01BUktFUn1gLFxuICBcImdcIlxuKTtcbmNvbnN0IExJU1RfVE9LRU5fUkVHRVggPSBuZXcgUmVnRXhwKFxuICBgJHtRVU9URURfQkVHSU5fTElTVF9UT0tFTl9NQVJLRVJ9KFske1ZBTElEX0tFWV9DSEFSU31dKykke1FVT1RFRF9FTkRfVE9LRU5fTUFSS0VSfWAsXG4gIFwiZ1wiXG4pO1xuXG4vKipcbiAqIEEgc3RyaW5nIHdpdGggbWFya2VycyBpbiBpdCB0aGF0IGNhbiBiZSByZXNvbHZlZCB0byBleHRlcm5hbCB2YWx1ZXNcbiAqL1xuZXhwb3J0IGNsYXNzIFRva2VuU3RyaW5nIHtcbiAgLyoqXG4gICAqIFJldHVybnMgYSBgVG9rZW5TdHJpbmdgIGZvciB0aGlzIHN0cmluZy5cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgZm9yU3RyaW5nKHM6IHN0cmluZykge1xuICAgIHJldHVybiBuZXcgVG9rZW5TdHJpbmcocywgU1RSSU5HX1RPS0VOX1JFR0VYKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgYFRva2VuU3RyaW5nYCBmb3IgdGhpcyBzdHJpbmcgKG11c3QgYmUgdGhlIGZpcnN0IHN0cmluZyBlbGVtZW50IG9mIHRoZSBsaXN0KVxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBmb3JMaXN0VG9rZW4oczogc3RyaW5nKSB7XG4gICAgcmV0dXJuIG5ldyBUb2tlblN0cmluZyhzLCBMSVNUX1RPS0VOX1JFR0VYKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc3RyOiBzdHJpbmcsIHByaXZhdGUgcmVhZG9ubHkgcmU6IFJlZ0V4cCkge31cblxuICAvKipcbiAgICogU3BsaXQgc3RyaW5nIG9uIG1hcmtlcnMsIHN1YnN0aXR1dGluZyBtYXJrZXJzIHdpdGggVG9rZW5zXG4gICAqL1xuICBwdWJsaWMgc3BsaXQobG9va3VwOiAoaWQ6IHN0cmluZykgPT4gSVJlc29sdmFibGUpOiBUb2tlbml6ZWRTdHJpbmdGcmFnbWVudHMge1xuICAgIGNvbnN0IHJldCA9IG5ldyBUb2tlbml6ZWRTdHJpbmdGcmFnbWVudHMoKTtcblxuICAgIGxldCByZXN0ID0gMDtcbiAgICB0aGlzLnJlLmxhc3RJbmRleCA9IDA7IC8vIFJlc2V0XG4gICAgbGV0IG0gPSB0aGlzLnJlLmV4ZWModGhpcy5zdHIpO1xuICAgIHdoaWxlIChtKSB7XG4gICAgICBpZiAobS5pbmRleCA+IHJlc3QpIHtcbiAgICAgICAgcmV0LmFkZExpdGVyYWwodGhpcy5zdHIuc3Vic3RyaW5nKHJlc3QsIG0uaW5kZXgpKTtcbiAgICAgIH1cblxuICAgICAgcmV0LmFkZFRva2VuKGxvb2t1cChtWzFdKSk7XG5cbiAgICAgIHJlc3QgPSB0aGlzLnJlLmxhc3RJbmRleDtcbiAgICAgIG0gPSB0aGlzLnJlLmV4ZWModGhpcy5zdHIpO1xuICAgIH1cblxuICAgIGlmIChyZXN0IDwgdGhpcy5zdHIubGVuZ3RoKSB7XG4gICAgICByZXQuYWRkTGl0ZXJhbCh0aGlzLnN0ci5zdWJzdHJpbmcocmVzdCkpO1xuICAgIH1cblxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICAvKipcbiAgICogSW5kaWNhdGVzIGlmIHRoaXMgc3RyaW5nIGluY2x1ZGVzIHRva2Vucy5cbiAgICovXG4gIHB1YmxpYyB0ZXN0KCk6IGJvb2xlYW4ge1xuICAgIHRoaXMucmUubGFzdEluZGV4ID0gMDsgLy8gUmVzZXRcbiAgICByZXR1cm4gdGhpcy5yZS50ZXN0KHRoaXMuc3RyKTtcbiAgfVxufVxuXG4vKipcbiAqIFF1b3RlIGEgc3RyaW5nIGZvciB1c2UgaW4gYSByZWdleFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVnZXhRdW90ZShzOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHMucmVwbGFjZSgvWy4/KiteJFtcXF1cXFxcKCl7fXwtXS9nLCBcIlxcXFwkJlwiKTtcbn1cblxuLyoqXG4gKiBDb25jYXRlbmF0b3IgdGhhdCBkaXNyZWdhcmRzIHRoZSBpbnB1dFxuICpcbiAqIENhbiBiZSB1c2VkIHdoZW4gdHJhdmVyc2luZyB0aGUgdG9rZW5zIGlzIGltcG9ydGFudCwgYnV0IHRoZVxuICogcmVzdWx0IGlzbid0LlxuICovXG5leHBvcnQgY2xhc3MgTnVsbENvbmNhdCBpbXBsZW1lbnRzIElGcmFnbWVudENvbmNhdGVuYXRvciB7XG4gIHB1YmxpYyBqb2luKF9sZWZ0OiBhbnkgfCB1bmRlZmluZWQsIF9yaWdodDogYW55IHwgdW5kZWZpbmVkKTogYW55IHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb250YWluc0xpc3RUb2tlbkVsZW1lbnQoeHM6IGFueVtdKSB7XG4gIHJldHVybiB4cy5zb21lKFxuICAgICh4KSA9PiB0eXBlb2YgeCA9PT0gXCJzdHJpbmdcIiAmJiBUb2tlblN0cmluZy5mb3JMaXN0VG9rZW4oeCkudGVzdCgpXG4gICk7XG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIG9iaiBpcyBhIHRva2VuIChpLmUuIGhhcyB0aGUgcmVzb2x2ZSgpIG1ldGhvZCBvciBpcyBhIHN0cmluZ1xuICogdGhhdCBpbmNsdWRlcyB0b2tlbiBtYXJrZXJzKSwgb3IgaXQncyBhIGxpc3RpZmljdGFpb24gb2YgYSBUb2tlbiBzdHJpbmcuXG4gKlxuICogQHBhcmFtIG9iaiBUaGUgb2JqZWN0IHRvIHRlc3QuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1bnJlc29sdmVkKG9iajogYW55KTogYm9vbGVhbiB7XG4gIGlmICh0eXBlb2Ygb2JqID09PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIFRva2VuU3RyaW5nLmZvclN0cmluZyhvYmopLnRlc3QoKTtcbiAgfSBlbHNlIGlmICh0eXBlb2Ygb2JqID09PSBcIm51bWJlclwiKSB7XG4gICAgcmV0dXJuIGV4dHJhY3RUb2tlbkRvdWJsZShvYmopICE9PSB1bmRlZmluZWQ7XG4gIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShvYmopICYmIG9iai5sZW5ndGggPT09IDEpIHtcbiAgICByZXR1cm4gKFxuICAgICAgdHlwZW9mIG9ialswXSA9PT0gXCJzdHJpbmdcIiAmJiBUb2tlblN0cmluZy5mb3JMaXN0VG9rZW4ob2JqWzBdKS50ZXN0KClcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBpc1Jlc29sdmFibGVPYmplY3Qob2JqKTtcbiAgfVxufVxuXG4vKipcbiAqIEJpdCBwYXR0ZXJuIGluIHRoZSB0b3AgMTYgYml0cyBvZiBhIGRvdWJsZSB0byBpbmRpY2F0ZSBhIFRva2VuXG4gKlxuICogQW4gSUVFRSBkb3VibGUgaW4gTEUgbWVtb3J5IG9yZGVyIGxvb2tzIGxpa2UgdGhpcyAoZ3JvdXBlZFxuICogaW50byBvY3RldHMsIHRoZW4gZ3JvdXBlZCBpbnRvIDMyLWJpdCB3b3Jkcyk6XG4gKlxuICogbW1tbW1tbW0ubW1tbW1tbW0ubW1tbW1tbW0ubW1tbW1tbW0gfCBtbW1tbW1tbS5tbW1tbW1tbS5FRUVFbW1tbS5zRUVFRUVFRVxuICpcbiAqIC0gbTogbWFudGlzc2EgKDUyIGJpdHMpXG4gKiAtIEU6IGV4cG9uZW50ICgxMSBiaXRzKVxuICogLSBzOiBzaWduICgxIGJpdClcbiAqXG4gKiBXZSBwdXQgdGhlIGZvbGxvd2luZyBtYXJrZXIgaW50byB0aGUgdG9wIDE2IGJpdHMgKGV4cG9uZW50IGFuZCBzaWduKSwgYW5kXG4gKiB1c2UgdGhlIG1hbnRpc3NhIHBhcnQgdG8gZW5jb2RlIHRoZSB0b2tlbiBpbmRleC4gVG8gc2F2ZSBzb21lIGJpdCB0d2lkZGxpbmdcbiAqIHdlIHVzZSBhbGwgdG9wIDE2IGJpdHMgZm9yIHRoZSB0YWcuIFRoYXQgbG9zZXMgdXMgNCBtYW50aXNzYSBiaXRzIHRvIHN0b3JlXG4gKiBpbmZvcm1hdGlvbiBpbiBidXQgd2Ugc3RpbGwgaGF2ZSA0OCwgd2hpY2ggaXMgZ29pbmcgdG8gYmUgcGxlbnR5IGZvciBhbnlcbiAqIG51bWJlciBvZiB0b2tlbnMgdG8gYmUgY3JlYXRlZCBkdXJpbmcgdGhlIGxpZmV0aW1lIG9mIGFueSBDREsgYXBwbGljYXRpb24uXG4gKlxuICogQ2FuJ3QgaGF2ZSBhbGwgYml0cyBzZXQgYmVjYXVzZSB0aGF0IG1ha2VzIGEgTmFOLCBzbyB1bnNldCB0aGUgbGVhc3RcbiAqIHNpZ25pZmljYW50IGV4cG9uZW50IGJpdC5cbiAqXG4gKiBDdXJyZW50bHkgbm90IHN1cHBvcnRpbmcgQkUgYXJjaGl0ZWN0dXJlcy5cbiAqL1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWJpdHdpc2VcbmNvbnN0IERPVUJMRV9UT0tFTl9NQVJLRVJfQklUUyA9IDB4ZmJmZiA8PCAxNjtcblxuLyoqXG4gKiBIaWdoZXN0IGVuY29kYWJsZSBudW1iZXJcbiAqL1xuY29uc3QgTUFYX0VOQ09EQUJMRV9JTlRFR0VSID0gTWF0aC5wb3coMiwgNDgpIC0gMTtcblxuLyoqXG4gKiBHZXQgMl4zMiBhcyBhIG51bWJlciwgc28gd2UgY2FuIGRvIG11bHRpcGxpY2F0aW9uIGFuZCBkaXYgaW5zdGVhZCBvZiBiaXQgc2hpZnRpbmdcbiAqXG4gKiBOZWNlc3NhcnkgYmVjYXVzZSBpbiBKYXZhU2NyaXB0LCBiaXQgb3BlcmF0aW9ucyBpbXBsaWNpdGx5IGNvbnZlcnRcbiAqIHRvIGludDMyIGFuZCB3ZSBuZWVkIHRoZW0gdG8gd29yayBvbiBcImludDY0XCJzLlxuICpcbiAqIFNvIGluc3RlYWQgb2YgeCA+PiAzMiwgd2UgZG8gTWF0aC5mbG9vcih4IC8gMl4zMiksIGFuZCB2aWNlIHZlcnNhLlxuICovXG5jb25zdCBCSVRTMzIgPSBNYXRoLnBvdygyLCAzMik7XG5cbi8qKlxuICogUmV0dXJuIGEgc3BlY2lhbCBEb3VibGUgdmFsdWUgdGhhdCBlbmNvZGVzIHRoZSBnaXZlbiBub25uZWdhdGl2ZSBpbnRlZ2VyXG4gKlxuICogV2UgdXNlIHRoaXMgdG8gZW5jb2RlIFRva2VuIG9yZGluYWxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVG9rZW5Eb3VibGUoeDogbnVtYmVyKSB7XG4gIGlmIChNYXRoLmZsb29yKHgpICE9PSB4IHx8IHggPCAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ2FuIG9ubHkgZW5jb2RlIHBvc2l0aXZlIGludGVnZXJzXCIpO1xuICB9XG4gIGlmICh4ID4gTUFYX0VOQ09EQUJMRV9JTlRFR0VSKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBHb3QgYW4gaW5kZXggdG9vIGxhcmdlIHRvIGVuY29kZTogJHt4fWApO1xuICB9XG5cbiAgY29uc3QgYnVmID0gbmV3IEFycmF5QnVmZmVyKDgpO1xuICBjb25zdCBpbnRzID0gbmV3IFVpbnQzMkFycmF5KGJ1Zik7XG5cbiAgLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZVxuICBpbnRzWzBdID0geCAmIDB4MDAwMGZmZmZmZmZmOyAvLyBCb3R0b20gMzIgYml0cyBvZiBudW1iZXJcblxuICAvLyBUaGlzIG5lZWRzIGFuIFwieCA+PiAzMlwiIGJ1dCB0aGF0IHdpbGwgbWFrZSBpdCBhIDMyLWJpdCBudW1iZXIgaW5zdGVhZFxuICAvLyBvZiBhIDY0LWJpdCBudW1iZXIuXG4gIGludHNbMV0gPSAoc2hyMzIoeCkgJiAweGZmZmYpIHwgRE9VQkxFX1RPS0VOX01BUktFUl9CSVRTOyAvLyBUb3AgMTYgYml0cyBvZiBudW1iZXIgYW5kIHRoZSBtYXNrXG4gIC8vIHRzbGludDplbmFibGU6bm8tYml0d2lzZVxuXG4gIHJldHVybiBuZXcgRmxvYXQ2NEFycmF5KGJ1ZilbMF07XG59XG5cbi8qKlxuICogU2hpZnQgYSA2NC1iaXQgaW50IHJpZ2h0IDMyIGJpdHNcbiAqL1xuZnVuY3Rpb24gc2hyMzIoeDogbnVtYmVyKSB7XG4gIHJldHVybiBNYXRoLmZsb29yKHggLyBCSVRTMzIpO1xufVxuXG4vKipcbiAqIFNoaWZ0IGEgNjQtYml0IGxlZnQgMzIgYml0c1xuICovXG5mdW5jdGlvbiBzaGwzMih4OiBudW1iZXIpIHtcbiAgcmV0dXJuIHggKiBCSVRTMzI7XG59XG5cbi8qKlxuICogRXh0cmFjdCB0aGUgZW5jb2RlZCBpbnRlZ2VyIG91dCBvZiB0aGUgc3BlY2lhbCBEb3VibGUgdmFsdWVcbiAqXG4gKiBSZXR1cm5zIHVuZGVmaW5lZCBpZiB0aGUgZmxvYXQgaXMgYSBub3QgYW4gZW5jb2RlZCB0b2tlbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4dHJhY3RUb2tlbkRvdWJsZShlbmNvZGVkOiBudW1iZXIpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICBjb25zdCBidWYgPSBuZXcgQXJyYXlCdWZmZXIoOCk7XG4gIG5ldyBGbG9hdDY0QXJyYXkoYnVmKVswXSA9IGVuY29kZWQ7XG5cbiAgY29uc3QgaW50cyA9IG5ldyBVaW50MzJBcnJheShidWYpO1xuXG4gIC8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2VcbiAgaWYgKChpbnRzWzFdICYgMHhmZmZmMDAwMCkgIT09IERPVUJMRV9UT0tFTl9NQVJLRVJfQklUUykge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICAvLyBNdXN0IHVzZSArIGluc3RlYWQgb2YgfCBoZXJlIChiaXR3aXNlIG9wZXJhdGlvbnNcbiAgLy8gd2lsbCBmb3JjZSAzMi1iaXRzIGludGVnZXIgYXJpdGhtZXRpYywgKyB3aWxsIG5vdCkuXG4gIHJldHVybiBpbnRzWzBdICsgc2hsMzIoaW50c1sxXSAmIDB4ZmZmZik7XG4gIC8vIHRzbGludDplbmFibGU6bm8tYml0d2lzZVxufVxuIl19