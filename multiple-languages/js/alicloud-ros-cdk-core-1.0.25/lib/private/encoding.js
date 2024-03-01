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
    constructor(str, re) {
        this.str = str;
        this.re = re;
    }
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
        return token_1.isResolvableObject(obj);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5jb2RpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJlbmNvZGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwwREFBK0Q7QUFDL0Qsb0NBQThDO0FBRzlDLHFGQUFxRjtBQUV4RSxRQUFBLHlCQUF5QixHQUFHLFVBQVUsQ0FBQztBQUN2QyxRQUFBLHVCQUF1QixHQUFHLFVBQVUsQ0FBQztBQUNyQyxRQUFBLGdCQUFnQixHQUFHLElBQUksQ0FBQztBQUV4QixRQUFBLGVBQWUsR0FBRyxlQUFlLENBQUM7QUFFL0MsTUFBTSxnQ0FBZ0MsR0FBRyxVQUFVLENBQUMsaUNBQXlCLENBQUMsQ0FBQztBQUMvRSxNQUFNLDhCQUE4QixHQUFHLFVBQVUsQ0FBQywrQkFBdUIsQ0FBQyxDQUFDO0FBQzNFLE1BQU0sdUJBQXVCLEdBQUcsVUFBVSxDQUFDLHdCQUFnQixDQUFDLENBQUM7QUFFN0QsTUFBTSxrQkFBa0IsR0FBRyxJQUFJLE1BQU0sQ0FDbkMsR0FBRyxnQ0FBZ0MsS0FBSyx1QkFBZSxNQUFNLHVCQUF1QixFQUFFLEVBQ3RGLEdBQUcsQ0FDSixDQUFDO0FBQ0YsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLE1BQU0sQ0FDakMsR0FBRyw4QkFBOEIsS0FBSyx1QkFBZSxNQUFNLHVCQUF1QixFQUFFLEVBQ3BGLEdBQUcsQ0FDSixDQUFDO0FBRUY7O0dBRUc7QUFDSCxNQUFhLFdBQVc7SUFldEIsWUFBNkIsR0FBVyxFQUFtQixFQUFVO1FBQXhDLFFBQUcsR0FBSCxHQUFHLENBQVE7UUFBbUIsT0FBRSxHQUFGLEVBQUUsQ0FBUTtJQUFHLENBQUM7SUFkekU7O09BRUc7SUFDSSxNQUFNLENBQUMsU0FBUyxDQUFDLENBQVM7UUFDL0IsT0FBTyxJQUFJLFdBQVcsQ0FBQyxDQUFDLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxNQUFNLENBQUMsWUFBWSxDQUFDLENBQVM7UUFDbEMsT0FBTyxJQUFJLFdBQVcsQ0FBQyxDQUFDLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBSUQ7O09BRUc7SUFDSSxLQUFLLENBQUMsTUFBbUM7UUFDOUMsTUFBTSxHQUFHLEdBQUcsSUFBSSwyQ0FBd0IsRUFBRSxDQUFDO1FBRTNDLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQztRQUNiLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVE7UUFDL0IsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQy9CLE9BQU8sQ0FBQyxFQUFFO1lBQ1IsSUFBSSxDQUFDLENBQUMsS0FBSyxHQUFHLElBQUksRUFBRTtnQkFDbEIsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7YUFDbkQ7WUFFRCxHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRTNCLElBQUksR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztZQUN6QixDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzVCO1FBRUQsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUU7WUFDMUIsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQzFDO1FBRUQsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBRUQ7O09BRUc7SUFDSSxJQUFJO1FBQ1QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUTtRQUMvQixPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNoQyxDQUFDO0NBQ0Y7QUFuREQsa0NBbURDO0FBRUQ7O0dBRUc7QUFDSCxTQUFnQixVQUFVLENBQUMsQ0FBUztJQUNsQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsc0JBQXNCLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDbkQsQ0FBQztBQUZELGdDQUVDO0FBRUQ7Ozs7O0dBS0c7QUFDSCxNQUFhLFVBQVU7SUFDZCxJQUFJLENBQUMsS0FBc0IsRUFBRSxNQUF1QjtRQUN6RCxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDO0NBQ0Y7QUFKRCxnQ0FJQztBQUVELFNBQWdCLHdCQUF3QixDQUFDLEVBQVM7SUFDaEQsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUNaLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxRQUFRLElBQUksV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FDbkUsQ0FBQztBQUNKLENBQUM7QUFKRCw0REFJQztBQUVEOzs7OztHQUtHO0FBQ0gsU0FBZ0IsVUFBVSxDQUFDLEdBQVE7SUFDakMsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLEVBQUU7UUFDM0IsT0FBTyxXQUFXLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0tBQzFDO1NBQU0sSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLEVBQUU7UUFDbEMsT0FBTyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsS0FBSyxTQUFTLENBQUM7S0FDOUM7U0FBTSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDakQsT0FBTyxDQUNMLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLFFBQVEsSUFBSSxXQUFXLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUN0RSxDQUFDO0tBQ0g7U0FBTTtRQUNMLE9BQU8sMEJBQWtCLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDaEM7QUFDSCxDQUFDO0FBWkQsZ0NBWUM7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXNCRztBQUNILHNDQUFzQztBQUN0QyxNQUFNLHdCQUF3QixHQUFHLE1BQU0sSUFBSSxFQUFFLENBQUM7QUFFOUM7O0dBRUc7QUFDSCxNQUFNLHFCQUFxQixHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUVsRDs7Ozs7OztHQU9HO0FBQ0gsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFFL0I7Ozs7R0FJRztBQUNILFNBQWdCLGlCQUFpQixDQUFDLENBQVM7SUFDekMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQ2hDLE1BQU0sSUFBSSxLQUFLLENBQUMsbUNBQW1DLENBQUMsQ0FBQztLQUN0RDtJQUNELElBQUksQ0FBQyxHQUFHLHFCQUFxQixFQUFFO1FBQzdCLE1BQU0sSUFBSSxLQUFLLENBQUMscUNBQXFDLENBQUMsRUFBRSxDQUFDLENBQUM7S0FDM0Q7SUFFRCxNQUFNLEdBQUcsR0FBRyxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvQixNQUFNLElBQUksR0FBRyxJQUFJLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUVsQyw0QkFBNEI7SUFDNUIsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxjQUFjLENBQUMsQ0FBQywyQkFBMkI7SUFFekQsd0VBQXdFO0lBQ3hFLHNCQUFzQjtJQUN0QixJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsd0JBQXdCLENBQUMsQ0FBQyxxQ0FBcUM7SUFDL0YsMkJBQTJCO0lBRTNCLE9BQU8sSUFBSSxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbEMsQ0FBQztBQXBCRCw4Q0FvQkM7QUFFRDs7R0FFRztBQUNILFNBQVMsS0FBSyxDQUFDLENBQVM7SUFDdEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQztBQUNoQyxDQUFDO0FBRUQ7O0dBRUc7QUFDSCxTQUFTLEtBQUssQ0FBQyxDQUFTO0lBQ3RCLE9BQU8sQ0FBQyxHQUFHLE1BQU0sQ0FBQztBQUNwQixDQUFDO0FBRUQ7Ozs7R0FJRztBQUNILFNBQWdCLGtCQUFrQixDQUFDLE9BQWU7SUFDaEQsTUFBTSxHQUFHLEdBQUcsSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0IsSUFBSSxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDO0lBRW5DLE1BQU0sSUFBSSxHQUFHLElBQUksV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRWxDLDRCQUE0QjtJQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxLQUFLLHdCQUF3QixFQUFFO1FBQ3ZELE9BQU8sU0FBUyxDQUFDO0tBQ2xCO0lBRUQsbURBQW1EO0lBQ25ELHNEQUFzRDtJQUN0RCxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDO0lBQ3pDLDJCQUEyQjtBQUM3QixDQUFDO0FBZkQsZ0RBZUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUb2tlbml6ZWRTdHJpbmdGcmFnbWVudHMgfSBmcm9tIFwiLi4vc3RyaW5nLWZyYWdtZW50c1wiO1xuaW1wb3J0IHsgaXNSZXNvbHZhYmxlT2JqZWN0IH0gZnJvbSBcIi4uL3Rva2VuXCI7XG5pbXBvcnQgeyBJUmVzb2x2YWJsZSwgSUZyYWdtZW50Q29uY2F0ZW5hdG9yIH0gZnJvbSBcIi4uL3Jlc29sdmFibGVcIjtcblxuLy8gRGV0YWlscyBmb3IgZW5jb2RpbmcgYW5kIGRlY29kaW5nIFRva2VucyBpbnRvIG5hdGl2ZSB0eXBlczsgc2hvdWxkIG5vdCBiZSBleHBvcnRlZFxuXG5leHBvcnQgY29uc3QgQkVHSU5fU1RSSU5HX1RPS0VOX01BUktFUiA9IFwiJHtUb2tlbltcIjtcbmV4cG9ydCBjb25zdCBCRUdJTl9MSVNUX1RPS0VOX01BUktFUiA9IFwiI3tUb2tlbltcIjtcbmV4cG9ydCBjb25zdCBFTkRfVE9LRU5fTUFSS0VSID0gXCJdfVwiO1xuXG5leHBvcnQgY29uc3QgVkFMSURfS0VZX0NIQVJTID0gXCJhLXpBLVowLTk6Ll8tXCI7XG5cbmNvbnN0IFFVT1RFRF9CRUdJTl9TVFJJTkdfVE9LRU5fTUFSS0VSID0gcmVnZXhRdW90ZShCRUdJTl9TVFJJTkdfVE9LRU5fTUFSS0VSKTtcbmNvbnN0IFFVT1RFRF9CRUdJTl9MSVNUX1RPS0VOX01BUktFUiA9IHJlZ2V4UXVvdGUoQkVHSU5fTElTVF9UT0tFTl9NQVJLRVIpO1xuY29uc3QgUVVPVEVEX0VORF9UT0tFTl9NQVJLRVIgPSByZWdleFF1b3RlKEVORF9UT0tFTl9NQVJLRVIpO1xuXG5jb25zdCBTVFJJTkdfVE9LRU5fUkVHRVggPSBuZXcgUmVnRXhwKFxuICBgJHtRVU9URURfQkVHSU5fU1RSSU5HX1RPS0VOX01BUktFUn0oWyR7VkFMSURfS0VZX0NIQVJTfV0rKSR7UVVPVEVEX0VORF9UT0tFTl9NQVJLRVJ9YCxcbiAgXCJnXCJcbik7XG5jb25zdCBMSVNUX1RPS0VOX1JFR0VYID0gbmV3IFJlZ0V4cChcbiAgYCR7UVVPVEVEX0JFR0lOX0xJU1RfVE9LRU5fTUFSS0VSfShbJHtWQUxJRF9LRVlfQ0hBUlN9XSspJHtRVU9URURfRU5EX1RPS0VOX01BUktFUn1gLFxuICBcImdcIlxuKTtcblxuLyoqXG4gKiBBIHN0cmluZyB3aXRoIG1hcmtlcnMgaW4gaXQgdGhhdCBjYW4gYmUgcmVzb2x2ZWQgdG8gZXh0ZXJuYWwgdmFsdWVzXG4gKi9cbmV4cG9ydCBjbGFzcyBUb2tlblN0cmluZyB7XG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgYFRva2VuU3RyaW5nYCBmb3IgdGhpcyBzdHJpbmcuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGZvclN0cmluZyhzOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gbmV3IFRva2VuU3RyaW5nKHMsIFNUUklOR19UT0tFTl9SRUdFWCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGBUb2tlblN0cmluZ2AgZm9yIHRoaXMgc3RyaW5nIChtdXN0IGJlIHRoZSBmaXJzdCBzdHJpbmcgZWxlbWVudCBvZiB0aGUgbGlzdClcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgZm9yTGlzdFRva2VuKHM6IHN0cmluZykge1xuICAgIHJldHVybiBuZXcgVG9rZW5TdHJpbmcocywgTElTVF9UT0tFTl9SRUdFWCk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHN0cjogc3RyaW5nLCBwcml2YXRlIHJlYWRvbmx5IHJlOiBSZWdFeHApIHt9XG5cbiAgLyoqXG4gICAqIFNwbGl0IHN0cmluZyBvbiBtYXJrZXJzLCBzdWJzdGl0dXRpbmcgbWFya2VycyB3aXRoIFRva2Vuc1xuICAgKi9cbiAgcHVibGljIHNwbGl0KGxvb2t1cDogKGlkOiBzdHJpbmcpID0+IElSZXNvbHZhYmxlKTogVG9rZW5pemVkU3RyaW5nRnJhZ21lbnRzIHtcbiAgICBjb25zdCByZXQgPSBuZXcgVG9rZW5pemVkU3RyaW5nRnJhZ21lbnRzKCk7XG5cbiAgICBsZXQgcmVzdCA9IDA7XG4gICAgdGhpcy5yZS5sYXN0SW5kZXggPSAwOyAvLyBSZXNldFxuICAgIGxldCBtID0gdGhpcy5yZS5leGVjKHRoaXMuc3RyKTtcbiAgICB3aGlsZSAobSkge1xuICAgICAgaWYgKG0uaW5kZXggPiByZXN0KSB7XG4gICAgICAgIHJldC5hZGRMaXRlcmFsKHRoaXMuc3RyLnN1YnN0cmluZyhyZXN0LCBtLmluZGV4KSk7XG4gICAgICB9XG5cbiAgICAgIHJldC5hZGRUb2tlbihsb29rdXAobVsxXSkpO1xuXG4gICAgICByZXN0ID0gdGhpcy5yZS5sYXN0SW5kZXg7XG4gICAgICBtID0gdGhpcy5yZS5leGVjKHRoaXMuc3RyKTtcbiAgICB9XG5cbiAgICBpZiAocmVzdCA8IHRoaXMuc3RyLmxlbmd0aCkge1xuICAgICAgcmV0LmFkZExpdGVyYWwodGhpcy5zdHIuc3Vic3RyaW5nKHJlc3QpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyBpZiB0aGlzIHN0cmluZyBpbmNsdWRlcyB0b2tlbnMuXG4gICAqL1xuICBwdWJsaWMgdGVzdCgpOiBib29sZWFuIHtcbiAgICB0aGlzLnJlLmxhc3RJbmRleCA9IDA7IC8vIFJlc2V0XG4gICAgcmV0dXJuIHRoaXMucmUudGVzdCh0aGlzLnN0cik7XG4gIH1cbn1cblxuLyoqXG4gKiBRdW90ZSBhIHN0cmluZyBmb3IgdXNlIGluIGEgcmVnZXhcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZ2V4UXVvdGUoczogc3RyaW5nKSB7XG4gIHJldHVybiBzLnJlcGxhY2UoL1suPyorXiRbXFxdXFxcXCgpe318LV0vZywgXCJcXFxcJCZcIik7XG59XG5cbi8qKlxuICogQ29uY2F0ZW5hdG9yIHRoYXQgZGlzcmVnYXJkcyB0aGUgaW5wdXRcbiAqXG4gKiBDYW4gYmUgdXNlZCB3aGVuIHRyYXZlcnNpbmcgdGhlIHRva2VucyBpcyBpbXBvcnRhbnQsIGJ1dCB0aGVcbiAqIHJlc3VsdCBpc24ndC5cbiAqL1xuZXhwb3J0IGNsYXNzIE51bGxDb25jYXQgaW1wbGVtZW50cyBJRnJhZ21lbnRDb25jYXRlbmF0b3Ige1xuICBwdWJsaWMgam9pbihfbGVmdDogYW55IHwgdW5kZWZpbmVkLCBfcmlnaHQ6IGFueSB8IHVuZGVmaW5lZCk6IGFueSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY29udGFpbnNMaXN0VG9rZW5FbGVtZW50KHhzOiBhbnlbXSkge1xuICByZXR1cm4geHMuc29tZShcbiAgICAoeCkgPT4gdHlwZW9mIHggPT09IFwic3RyaW5nXCIgJiYgVG9rZW5TdHJpbmcuZm9yTGlzdFRva2VuKHgpLnRlc3QoKVxuICApO1xufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiBvYmogaXMgYSB0b2tlbiAoaS5lLiBoYXMgdGhlIHJlc29sdmUoKSBtZXRob2Qgb3IgaXMgYSBzdHJpbmdcbiAqIHRoYXQgaW5jbHVkZXMgdG9rZW4gbWFya2VycyksIG9yIGl0J3MgYSBsaXN0aWZpY3RhaW9uIG9mIGEgVG9rZW4gc3RyaW5nLlxuICpcbiAqIEBwYXJhbSBvYmogVGhlIG9iamVjdCB0byB0ZXN0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gdW5yZXNvbHZlZChvYmo6IGFueSk6IGJvb2xlYW4ge1xuICBpZiAodHlwZW9mIG9iaiA9PT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiBUb2tlblN0cmluZy5mb3JTdHJpbmcob2JqKS50ZXN0KCk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIG9iaiA9PT0gXCJudW1iZXJcIikge1xuICAgIHJldHVybiBleHRyYWN0VG9rZW5Eb3VibGUob2JqKSAhPT0gdW5kZWZpbmVkO1xuICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkob2JqKSAmJiBvYmoubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHR5cGVvZiBvYmpbMF0gPT09IFwic3RyaW5nXCIgJiYgVG9rZW5TdHJpbmcuZm9yTGlzdFRva2VuKG9ialswXSkudGVzdCgpXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gaXNSZXNvbHZhYmxlT2JqZWN0KG9iaik7XG4gIH1cbn1cblxuLyoqXG4gKiBCaXQgcGF0dGVybiBpbiB0aGUgdG9wIDE2IGJpdHMgb2YgYSBkb3VibGUgdG8gaW5kaWNhdGUgYSBUb2tlblxuICpcbiAqIEFuIElFRUUgZG91YmxlIGluIExFIG1lbW9yeSBvcmRlciBsb29rcyBsaWtlIHRoaXMgKGdyb3VwZWRcbiAqIGludG8gb2N0ZXRzLCB0aGVuIGdyb3VwZWQgaW50byAzMi1iaXQgd29yZHMpOlxuICpcbiAqIG1tbW1tbW1tLm1tbW1tbW1tLm1tbW1tbW1tLm1tbW1tbW1tIHwgbW1tbW1tbW0ubW1tbW1tbW0uRUVFRW1tbW0uc0VFRUVFRUVcbiAqXG4gKiAtIG06IG1hbnRpc3NhICg1MiBiaXRzKVxuICogLSBFOiBleHBvbmVudCAoMTEgYml0cylcbiAqIC0gczogc2lnbiAoMSBiaXQpXG4gKlxuICogV2UgcHV0IHRoZSBmb2xsb3dpbmcgbWFya2VyIGludG8gdGhlIHRvcCAxNiBiaXRzIChleHBvbmVudCBhbmQgc2lnbiksIGFuZFxuICogdXNlIHRoZSBtYW50aXNzYSBwYXJ0IHRvIGVuY29kZSB0aGUgdG9rZW4gaW5kZXguIFRvIHNhdmUgc29tZSBiaXQgdHdpZGRsaW5nXG4gKiB3ZSB1c2UgYWxsIHRvcCAxNiBiaXRzIGZvciB0aGUgdGFnLiBUaGF0IGxvc2VzIHVzIDQgbWFudGlzc2EgYml0cyB0byBzdG9yZVxuICogaW5mb3JtYXRpb24gaW4gYnV0IHdlIHN0aWxsIGhhdmUgNDgsIHdoaWNoIGlzIGdvaW5nIHRvIGJlIHBsZW50eSBmb3IgYW55XG4gKiBudW1iZXIgb2YgdG9rZW5zIHRvIGJlIGNyZWF0ZWQgZHVyaW5nIHRoZSBsaWZldGltZSBvZiBhbnkgQ0RLIGFwcGxpY2F0aW9uLlxuICpcbiAqIENhbid0IGhhdmUgYWxsIGJpdHMgc2V0IGJlY2F1c2UgdGhhdCBtYWtlcyBhIE5hTiwgc28gdW5zZXQgdGhlIGxlYXN0XG4gKiBzaWduaWZpY2FudCBleHBvbmVudCBiaXQuXG4gKlxuICogQ3VycmVudGx5IG5vdCBzdXBwb3J0aW5nIEJFIGFyY2hpdGVjdHVyZXMuXG4gKi9cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1iaXR3aXNlXG5jb25zdCBET1VCTEVfVE9LRU5fTUFSS0VSX0JJVFMgPSAweGZiZmYgPDwgMTY7XG5cbi8qKlxuICogSGlnaGVzdCBlbmNvZGFibGUgbnVtYmVyXG4gKi9cbmNvbnN0IE1BWF9FTkNPREFCTEVfSU5URUdFUiA9IE1hdGgucG93KDIsIDQ4KSAtIDE7XG5cbi8qKlxuICogR2V0IDJeMzIgYXMgYSBudW1iZXIsIHNvIHdlIGNhbiBkbyBtdWx0aXBsaWNhdGlvbiBhbmQgZGl2IGluc3RlYWQgb2YgYml0IHNoaWZ0aW5nXG4gKlxuICogTmVjZXNzYXJ5IGJlY2F1c2UgaW4gSmF2YVNjcmlwdCwgYml0IG9wZXJhdGlvbnMgaW1wbGljaXRseSBjb252ZXJ0XG4gKiB0byBpbnQzMiBhbmQgd2UgbmVlZCB0aGVtIHRvIHdvcmsgb24gXCJpbnQ2NFwicy5cbiAqXG4gKiBTbyBpbnN0ZWFkIG9mIHggPj4gMzIsIHdlIGRvIE1hdGguZmxvb3IoeCAvIDJeMzIpLCBhbmQgdmljZSB2ZXJzYS5cbiAqL1xuY29uc3QgQklUUzMyID0gTWF0aC5wb3coMiwgMzIpO1xuXG4vKipcbiAqIFJldHVybiBhIHNwZWNpYWwgRG91YmxlIHZhbHVlIHRoYXQgZW5jb2RlcyB0aGUgZ2l2ZW4gbm9ubmVnYXRpdmUgaW50ZWdlclxuICpcbiAqIFdlIHVzZSB0aGlzIHRvIGVuY29kZSBUb2tlbiBvcmRpbmFscy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRva2VuRG91YmxlKHg6IG51bWJlcikge1xuICBpZiAoTWF0aC5mbG9vcih4KSAhPT0geCB8fCB4IDwgMCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNhbiBvbmx5IGVuY29kZSBwb3NpdGl2ZSBpbnRlZ2Vyc1wiKTtcbiAgfVxuICBpZiAoeCA+IE1BWF9FTkNPREFCTEVfSU5URUdFUikge1xuICAgIHRocm93IG5ldyBFcnJvcihgR290IGFuIGluZGV4IHRvbyBsYXJnZSB0byBlbmNvZGU6ICR7eH1gKTtcbiAgfVxuXG4gIGNvbnN0IGJ1ZiA9IG5ldyBBcnJheUJ1ZmZlcig4KTtcbiAgY29uc3QgaW50cyA9IG5ldyBVaW50MzJBcnJheShidWYpO1xuXG4gIC8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2VcbiAgaW50c1swXSA9IHggJiAweDAwMDBmZmZmZmZmZjsgLy8gQm90dG9tIDMyIGJpdHMgb2YgbnVtYmVyXG5cbiAgLy8gVGhpcyBuZWVkcyBhbiBcInggPj4gMzJcIiBidXQgdGhhdCB3aWxsIG1ha2UgaXQgYSAzMi1iaXQgbnVtYmVyIGluc3RlYWRcbiAgLy8gb2YgYSA2NC1iaXQgbnVtYmVyLlxuICBpbnRzWzFdID0gKHNocjMyKHgpICYgMHhmZmZmKSB8IERPVUJMRV9UT0tFTl9NQVJLRVJfQklUUzsgLy8gVG9wIDE2IGJpdHMgb2YgbnVtYmVyIGFuZCB0aGUgbWFza1xuICAvLyB0c2xpbnQ6ZW5hYmxlOm5vLWJpdHdpc2VcblxuICByZXR1cm4gbmV3IEZsb2F0NjRBcnJheShidWYpWzBdO1xufVxuXG4vKipcbiAqIFNoaWZ0IGEgNjQtYml0IGludCByaWdodCAzMiBiaXRzXG4gKi9cbmZ1bmN0aW9uIHNocjMyKHg6IG51bWJlcikge1xuICByZXR1cm4gTWF0aC5mbG9vcih4IC8gQklUUzMyKTtcbn1cblxuLyoqXG4gKiBTaGlmdCBhIDY0LWJpdCBsZWZ0IDMyIGJpdHNcbiAqL1xuZnVuY3Rpb24gc2hsMzIoeDogbnVtYmVyKSB7XG4gIHJldHVybiB4ICogQklUUzMyO1xufVxuXG4vKipcbiAqIEV4dHJhY3QgdGhlIGVuY29kZWQgaW50ZWdlciBvdXQgb2YgdGhlIHNwZWNpYWwgRG91YmxlIHZhbHVlXG4gKlxuICogUmV0dXJucyB1bmRlZmluZWQgaWYgdGhlIGZsb2F0IGlzIGEgbm90IGFuIGVuY29kZWQgdG9rZW4uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleHRyYWN0VG9rZW5Eb3VibGUoZW5jb2RlZDogbnVtYmVyKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgY29uc3QgYnVmID0gbmV3IEFycmF5QnVmZmVyKDgpO1xuICBuZXcgRmxvYXQ2NEFycmF5KGJ1ZilbMF0gPSBlbmNvZGVkO1xuXG4gIGNvbnN0IGludHMgPSBuZXcgVWludDMyQXJyYXkoYnVmKTtcblxuICAvLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlXG4gIGlmICgoaW50c1sxXSAmIDB4ZmZmZjAwMDApICE9PSBET1VCTEVfVE9LRU5fTUFSS0VSX0JJVFMpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgLy8gTXVzdCB1c2UgKyBpbnN0ZWFkIG9mIHwgaGVyZSAoYml0d2lzZSBvcGVyYXRpb25zXG4gIC8vIHdpbGwgZm9yY2UgMzItYml0cyBpbnRlZ2VyIGFyaXRobWV0aWMsICsgd2lsbCBub3QpLlxuICByZXR1cm4gaW50c1swXSArIHNobDMyKGludHNbMV0gJiAweGZmZmYpO1xuICAvLyB0c2xpbnQ6ZW5hYmxlOm5vLWJpdHdpc2Vcbn1cbiJdfQ==