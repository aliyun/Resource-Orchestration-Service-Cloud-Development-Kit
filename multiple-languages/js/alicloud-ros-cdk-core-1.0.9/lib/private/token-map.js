"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenMap = void 0;
const token_1 = require("../token");
const encoding_1 = require("./encoding");
const glob = global;
const STRING_SYMBOL = Symbol.for("ros-cdk-core.TokenMap.STRING");
const LIST_SYMBOL = Symbol.for("ros-cdk-core.TokenMap.LIST");
const NUMBER_SYMBOL = Symbol.for("ros-cdk-core.TokenMap.NUMBER");
/**
 * Central place where we keep a mapping from Tokens to their String representation
 *
 * The string representation is used to embed token into strings,
 * and stored to be able to reverse that mapping.
 *
 * All instances of TokenStringMap share the same storage, so that this process
 * works even when different copies of the library are loaded.
 */
class TokenMap {
    constructor() {
        this.stringTokenMap = new Map();
        this.numberTokenMap = new Map();
        this.tokenCounter = 0;
    }
    /**
     * Singleton instance of the token string map
     */
    static instance() {
        if (!glob.__cdkTokenMap) {
            glob.__cdkTokenMap = new TokenMap();
        }
        return glob.__cdkTokenMap;
    }
    /**
     * Generate a unique string for this Token, returning a key
     *
     * Every call for the same Token will produce a new unique string, no
     * attempt is made to deduplicate. Token objects should cache the
     * value themselves, if required.
     *
     * The token can choose (part of) its own representation string with a
     * hint. This may be used to produce aesthetically pleasing and
     * recognizable token representations for humans.
     */
    registerString(token, displayHint) {
        return cachedValue(token, STRING_SYMBOL, () => {
            const key = this.registerStringKey(token, displayHint);
            return `${encoding_1.BEGIN_STRING_TOKEN_MARKER}${key}${encoding_1.END_TOKEN_MARKER}`;
        });
    }
    /**
     * Generate a unique string for this Token, returning a key
     */
    registerList(token, displayHint) {
        return cachedValue(token, LIST_SYMBOL, () => {
            const key = this.registerStringKey(token, displayHint);
            return [`${encoding_1.BEGIN_LIST_TOKEN_MARKER}${key}${encoding_1.END_TOKEN_MARKER}`];
        });
    }
    /**
     * Create a unique number representation for this Token and return it
     */
    registerNumber(token) {
        return cachedValue(token, NUMBER_SYMBOL, () => {
            return this.registerNumberKey(token);
        });
    }
    /**
     * Lookup a token from an encoded value
     */
    tokenFromEncoding(x) {
        if (typeof x === "string") {
            return this.lookupString(x);
        }
        if (Array.isArray(x)) {
            return this.lookupList(x);
        }
        if (token_1.Token.isUnresolved(x)) {
            return x;
        }
        return undefined;
    }
    /**
     * Reverse a string representation into a Token object
     */
    lookupString(s) {
        const fragments = this.splitString(s);
        if (fragments.tokens.length > 0 && fragments.length === 1) {
            return fragments.firstToken;
        }
        return undefined;
    }
    /**
     * Reverse a string representation into a Token object
     */
    lookupList(xs) {
        if (xs.length !== 1) {
            return undefined;
        }
        const str = encoding_1.TokenString.forListToken(xs[0]);
        const fragments = str.split(this.lookupToken.bind(this));
        if (fragments.length === 1) {
            return fragments.firstToken;
        }
        return undefined;
    }
    /**
     * Split a string into literals and Tokens
     */
    splitString(s) {
        const str = encoding_1.TokenString.forString(s);
        return str.split(this.lookupToken.bind(this));
    }
    /**
     * Reverse a number encoding into a Token, or undefined if the number wasn't a Token
     */
    lookupNumberToken(x) {
        const tokenIndex = encoding_1.extractTokenDouble(x);
        if (tokenIndex === undefined) {
            return undefined;
        }
        const t = this.numberTokenMap.get(tokenIndex);
        if (t === undefined) {
            throw new Error("Encoded representation of unknown number Token found");
        }
        return t;
    }
    /**
     * Find a Token by key.
     *
     * This excludes the token markers.
     */
    lookupToken(key) {
        const token = this.stringTokenMap.get(key);
        if (!token) {
            throw new Error(`Unrecognized token key: ${key}`);
        }
        return token;
    }
    registerStringKey(token, displayHint) {
        const counter = this.tokenCounter++;
        const representation = (displayHint || "TOKEN").replace(new RegExp(`[^${encoding_1.VALID_KEY_CHARS}]`, "g"), ".");
        const key = `${representation}.${counter}`;
        this.stringTokenMap.set(key, token);
        return key;
    }
    registerNumberKey(token) {
        const counter = this.tokenCounter++;
        this.numberTokenMap.set(counter, token);
        return encoding_1.createTokenDouble(counter);
    }
}
exports.TokenMap = TokenMap;
/**
 * Get a cached value for an object, storing it on the object in a symbol
 */
function cachedValue(x, sym, prod) {
    let cached = x[sym];
    if (cached === undefined) {
        cached = prod();
        Object.defineProperty(x, sym, { value: cached });
    }
    return cached;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW4tbWFwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidG9rZW4tbWFwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLG9DQUFpQztBQUNqQyx5Q0FRb0I7QUFFcEIsTUFBTSxJQUFJLEdBQUcsTUFBYSxDQUFDO0FBRTNCLE1BQU0sYUFBYSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsOEJBQThCLENBQUMsQ0FBQztBQUNqRSxNQUFNLFdBQVcsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDLENBQUM7QUFDN0QsTUFBTSxhQUFhLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0FBRWpFOzs7Ozs7OztHQVFHO0FBQ0gsTUFBYSxRQUFRO0lBQXJCO1FBV21CLG1CQUFjLEdBQUcsSUFBSSxHQUFHLEVBQXVCLENBQUM7UUFDaEQsbUJBQWMsR0FBRyxJQUFJLEdBQUcsRUFBdUIsQ0FBQztRQUN6RCxpQkFBWSxHQUFHLENBQUMsQ0FBQztJQXFJM0IsQ0FBQztJQWpKQzs7T0FFRztJQUNJLE1BQU0sQ0FBQyxRQUFRO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxRQUFRLEVBQUUsQ0FBQztTQUNyQztRQUNELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDO0lBTUQ7Ozs7Ozs7Ozs7T0FVRztJQUNJLGNBQWMsQ0FBQyxLQUFrQixFQUFFLFdBQW9CO1FBQzVELE9BQU8sV0FBVyxDQUFDLEtBQUssRUFBRSxhQUFhLEVBQUUsR0FBRyxFQUFFO1lBQzVDLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFDdkQsT0FBTyxHQUFHLG9DQUF5QixHQUFHLEdBQUcsR0FBRywyQkFBZ0IsRUFBRSxDQUFDO1FBQ2pFLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOztPQUVHO0lBQ0ksWUFBWSxDQUFDLEtBQWtCLEVBQUUsV0FBb0I7UUFDMUQsT0FBTyxXQUFXLENBQUMsS0FBSyxFQUFFLFdBQVcsRUFBRSxHQUFHLEVBQUU7WUFDMUMsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRSxXQUFXLENBQUMsQ0FBQztZQUN2RCxPQUFPLENBQUMsR0FBRyxrQ0FBdUIsR0FBRyxHQUFHLEdBQUcsMkJBQWdCLEVBQUUsQ0FBQyxDQUFDO1FBQ2pFLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOztPQUVHO0lBQ0ksY0FBYyxDQUFDLEtBQWtCO1FBQ3RDLE9BQU8sV0FBVyxDQUFDLEtBQUssRUFBRSxhQUFhLEVBQUUsR0FBRyxFQUFFO1lBQzVDLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOztPQUVHO0lBQ0ksaUJBQWlCLENBQUMsQ0FBTTtRQUM3QixJQUFJLE9BQU8sQ0FBQyxLQUFLLFFBQVEsRUFBRTtZQUN6QixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDN0I7UUFDRCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDcEIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzNCO1FBQ0QsSUFBSSxhQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3pCLE9BQU8sQ0FBQyxDQUFDO1NBQ1Y7UUFDRCxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDO0lBRUQ7O09BRUc7SUFDSSxZQUFZLENBQUMsQ0FBUztRQUMzQixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLElBQUksU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3pELE9BQU8sU0FBUyxDQUFDLFVBQVUsQ0FBQztTQUM3QjtRQUNELE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7SUFFRDs7T0FFRztJQUNJLFVBQVUsQ0FBQyxFQUFZO1FBQzVCLElBQUksRUFBRSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDbkIsT0FBTyxTQUFTLENBQUM7U0FDbEI7UUFDRCxNQUFNLEdBQUcsR0FBRyxzQkFBVyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1QyxNQUFNLFNBQVMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDekQsSUFBSSxTQUFTLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUMxQixPQUFPLFNBQVMsQ0FBQyxVQUFVLENBQUM7U0FDN0I7UUFDRCxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDO0lBRUQ7O09BRUc7SUFDSSxXQUFXLENBQUMsQ0FBUztRQUMxQixNQUFNLEdBQUcsR0FBRyxzQkFBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQyxPQUFPLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxpQkFBaUIsQ0FBQyxDQUFTO1FBQ2hDLE1BQU0sVUFBVSxHQUFHLDZCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLElBQUksVUFBVSxLQUFLLFNBQVMsRUFBRTtZQUM1QixPQUFPLFNBQVMsQ0FBQztTQUNsQjtRQUNELE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxLQUFLLFNBQVMsRUFBRTtZQUNuQixNQUFNLElBQUksS0FBSyxDQUFDLHNEQUFzRCxDQUFDLENBQUM7U0FDekU7UUFDRCxPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksV0FBVyxDQUFDLEdBQVc7UUFDNUIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNWLE1BQU0sSUFBSSxLQUFLLENBQUMsMkJBQTJCLEdBQUcsRUFBRSxDQUFDLENBQUM7U0FDbkQ7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFTyxpQkFBaUIsQ0FBQyxLQUFrQixFQUFFLFdBQW9CO1FBQ2hFLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLGNBQWMsR0FBRyxDQUFDLFdBQVcsSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQ3JELElBQUksTUFBTSxDQUFDLEtBQUssMEJBQWUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUN4QyxHQUFHLENBQ0osQ0FBQztRQUNGLE1BQU0sR0FBRyxHQUFHLEdBQUcsY0FBYyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQzNDLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNwQyxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFFTyxpQkFBaUIsQ0FBQyxLQUFrQjtRQUMxQyxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3hDLE9BQU8sNEJBQWlCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDcEMsQ0FBQztDQUNGO0FBbEpELDRCQWtKQztBQUVEOztHQUVHO0FBQ0gsU0FBUyxXQUFXLENBQXNCLENBQUksRUFBRSxHQUFXLEVBQUUsSUFBYTtJQUN4RSxJQUFJLE1BQU0sR0FBSSxDQUFTLENBQUMsR0FBVSxDQUFDLENBQUM7SUFDcEMsSUFBSSxNQUFNLEtBQUssU0FBUyxFQUFFO1FBQ3hCLE1BQU0sR0FBRyxJQUFJLEVBQUUsQ0FBQztRQUNoQixNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztLQUNsRDtJQUNELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUb2tlbml6ZWRTdHJpbmdGcmFnbWVudHMgfSBmcm9tIFwiLi4vc3RyaW5nLWZyYWdtZW50c1wiO1xuaW1wb3J0IHsgSVJlc29sdmFibGUgfSBmcm9tIFwiLi4vcmVzb2x2YWJsZVwiO1xuaW1wb3J0IHsgVG9rZW4gfSBmcm9tIFwiLi4vdG9rZW5cIjtcbmltcG9ydCB7XG4gIEJFR0lOX0xJU1RfVE9LRU5fTUFSS0VSLFxuICBCRUdJTl9TVFJJTkdfVE9LRU5fTUFSS0VSLFxuICBjcmVhdGVUb2tlbkRvdWJsZSxcbiAgRU5EX1RPS0VOX01BUktFUixcbiAgZXh0cmFjdFRva2VuRG91YmxlLFxuICBUb2tlblN0cmluZyxcbiAgVkFMSURfS0VZX0NIQVJTLFxufSBmcm9tIFwiLi9lbmNvZGluZ1wiO1xuXG5jb25zdCBnbG9iID0gZ2xvYmFsIGFzIGFueTtcblxuY29uc3QgU1RSSU5HX1NZTUJPTCA9IFN5bWJvbC5mb3IoXCJyb3MtY2RrLWNvcmUuVG9rZW5NYXAuU1RSSU5HXCIpO1xuY29uc3QgTElTVF9TWU1CT0wgPSBTeW1ib2wuZm9yKFwicm9zLWNkay1jb3JlLlRva2VuTWFwLkxJU1RcIik7XG5jb25zdCBOVU1CRVJfU1lNQk9MID0gU3ltYm9sLmZvcihcInJvcy1jZGstY29yZS5Ub2tlbk1hcC5OVU1CRVJcIik7XG5cbi8qKlxuICogQ2VudHJhbCBwbGFjZSB3aGVyZSB3ZSBrZWVwIGEgbWFwcGluZyBmcm9tIFRva2VucyB0byB0aGVpciBTdHJpbmcgcmVwcmVzZW50YXRpb25cbiAqXG4gKiBUaGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uIGlzIHVzZWQgdG8gZW1iZWQgdG9rZW4gaW50byBzdHJpbmdzLFxuICogYW5kIHN0b3JlZCB0byBiZSBhYmxlIHRvIHJldmVyc2UgdGhhdCBtYXBwaW5nLlxuICpcbiAqIEFsbCBpbnN0YW5jZXMgb2YgVG9rZW5TdHJpbmdNYXAgc2hhcmUgdGhlIHNhbWUgc3RvcmFnZSwgc28gdGhhdCB0aGlzIHByb2Nlc3NcbiAqIHdvcmtzIGV2ZW4gd2hlbiBkaWZmZXJlbnQgY29waWVzIG9mIHRoZSBsaWJyYXJ5IGFyZSBsb2FkZWQuXG4gKi9cbmV4cG9ydCBjbGFzcyBUb2tlbk1hcCB7XG4gIC8qKlxuICAgKiBTaW5nbGV0b24gaW5zdGFuY2Ugb2YgdGhlIHRva2VuIHN0cmluZyBtYXBcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgaW5zdGFuY2UoKTogVG9rZW5NYXAge1xuICAgIGlmICghZ2xvYi5fX2Nka1Rva2VuTWFwKSB7XG4gICAgICBnbG9iLl9fY2RrVG9rZW5NYXAgPSBuZXcgVG9rZW5NYXAoKTtcbiAgICB9XG4gICAgcmV0dXJuIGdsb2IuX19jZGtUb2tlbk1hcDtcbiAgfVxuXG4gIHByaXZhdGUgcmVhZG9ubHkgc3RyaW5nVG9rZW5NYXAgPSBuZXcgTWFwPHN0cmluZywgSVJlc29sdmFibGU+KCk7XG4gIHByaXZhdGUgcmVhZG9ubHkgbnVtYmVyVG9rZW5NYXAgPSBuZXcgTWFwPG51bWJlciwgSVJlc29sdmFibGU+KCk7XG4gIHByaXZhdGUgdG9rZW5Db3VudGVyID0gMDtcblxuICAvKipcbiAgICogR2VuZXJhdGUgYSB1bmlxdWUgc3RyaW5nIGZvciB0aGlzIFRva2VuLCByZXR1cm5pbmcgYSBrZXlcbiAgICpcbiAgICogRXZlcnkgY2FsbCBmb3IgdGhlIHNhbWUgVG9rZW4gd2lsbCBwcm9kdWNlIGEgbmV3IHVuaXF1ZSBzdHJpbmcsIG5vXG4gICAqIGF0dGVtcHQgaXMgbWFkZSB0byBkZWR1cGxpY2F0ZS4gVG9rZW4gb2JqZWN0cyBzaG91bGQgY2FjaGUgdGhlXG4gICAqIHZhbHVlIHRoZW1zZWx2ZXMsIGlmIHJlcXVpcmVkLlxuICAgKlxuICAgKiBUaGUgdG9rZW4gY2FuIGNob29zZSAocGFydCBvZikgaXRzIG93biByZXByZXNlbnRhdGlvbiBzdHJpbmcgd2l0aCBhXG4gICAqIGhpbnQuIFRoaXMgbWF5IGJlIHVzZWQgdG8gcHJvZHVjZSBhZXN0aGV0aWNhbGx5IHBsZWFzaW5nIGFuZFxuICAgKiByZWNvZ25pemFibGUgdG9rZW4gcmVwcmVzZW50YXRpb25zIGZvciBodW1hbnMuXG4gICAqL1xuICBwdWJsaWMgcmVnaXN0ZXJTdHJpbmcodG9rZW46IElSZXNvbHZhYmxlLCBkaXNwbGF5SGludD86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGNhY2hlZFZhbHVlKHRva2VuLCBTVFJJTkdfU1lNQk9MLCAoKSA9PiB7XG4gICAgICBjb25zdCBrZXkgPSB0aGlzLnJlZ2lzdGVyU3RyaW5nS2V5KHRva2VuLCBkaXNwbGF5SGludCk7XG4gICAgICByZXR1cm4gYCR7QkVHSU5fU1RSSU5HX1RPS0VOX01BUktFUn0ke2tleX0ke0VORF9UT0tFTl9NQVJLRVJ9YDtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZSBhIHVuaXF1ZSBzdHJpbmcgZm9yIHRoaXMgVG9rZW4sIHJldHVybmluZyBhIGtleVxuICAgKi9cbiAgcHVibGljIHJlZ2lzdGVyTGlzdCh0b2tlbjogSVJlc29sdmFibGUsIGRpc3BsYXlIaW50Pzogc3RyaW5nKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBjYWNoZWRWYWx1ZSh0b2tlbiwgTElTVF9TWU1CT0wsICgpID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IHRoaXMucmVnaXN0ZXJTdHJpbmdLZXkodG9rZW4sIGRpc3BsYXlIaW50KTtcbiAgICAgIHJldHVybiBbYCR7QkVHSU5fTElTVF9UT0tFTl9NQVJLRVJ9JHtrZXl9JHtFTkRfVE9LRU5fTUFSS0VSfWBdO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIHVuaXF1ZSBudW1iZXIgcmVwcmVzZW50YXRpb24gZm9yIHRoaXMgVG9rZW4gYW5kIHJldHVybiBpdFxuICAgKi9cbiAgcHVibGljIHJlZ2lzdGVyTnVtYmVyKHRva2VuOiBJUmVzb2x2YWJsZSk6IG51bWJlciB7XG4gICAgcmV0dXJuIGNhY2hlZFZhbHVlKHRva2VuLCBOVU1CRVJfU1lNQk9MLCAoKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5yZWdpc3Rlck51bWJlcktleSh0b2tlbik7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogTG9va3VwIGEgdG9rZW4gZnJvbSBhbiBlbmNvZGVkIHZhbHVlXG4gICAqL1xuICBwdWJsaWMgdG9rZW5Gcm9tRW5jb2RpbmcoeDogYW55KTogSVJlc29sdmFibGUgfCB1bmRlZmluZWQge1xuICAgIGlmICh0eXBlb2YgeCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgcmV0dXJuIHRoaXMubG9va3VwU3RyaW5nKHgpO1xuICAgIH1cbiAgICBpZiAoQXJyYXkuaXNBcnJheSh4KSkge1xuICAgICAgcmV0dXJuIHRoaXMubG9va3VwTGlzdCh4KTtcbiAgICB9XG4gICAgaWYgKFRva2VuLmlzVW5yZXNvbHZlZCh4KSkge1xuICAgICAgcmV0dXJuIHg7XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICAvKipcbiAgICogUmV2ZXJzZSBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBpbnRvIGEgVG9rZW4gb2JqZWN0XG4gICAqL1xuICBwdWJsaWMgbG9va3VwU3RyaW5nKHM6IHN0cmluZyk6IElSZXNvbHZhYmxlIHwgdW5kZWZpbmVkIHtcbiAgICBjb25zdCBmcmFnbWVudHMgPSB0aGlzLnNwbGl0U3RyaW5nKHMpO1xuICAgIGlmIChmcmFnbWVudHMudG9rZW5zLmxlbmd0aCA+IDAgJiYgZnJhZ21lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgcmV0dXJuIGZyYWdtZW50cy5maXJzdFRva2VuO1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldmVyc2UgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gaW50byBhIFRva2VuIG9iamVjdFxuICAgKi9cbiAgcHVibGljIGxvb2t1cExpc3QoeHM6IHN0cmluZ1tdKTogSVJlc29sdmFibGUgfCB1bmRlZmluZWQge1xuICAgIGlmICh4cy5sZW5ndGggIT09IDEpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGNvbnN0IHN0ciA9IFRva2VuU3RyaW5nLmZvckxpc3RUb2tlbih4c1swXSk7XG4gICAgY29uc3QgZnJhZ21lbnRzID0gc3RyLnNwbGl0KHRoaXMubG9va3VwVG9rZW4uYmluZCh0aGlzKSk7XG4gICAgaWYgKGZyYWdtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHJldHVybiBmcmFnbWVudHMuZmlyc3RUb2tlbjtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTcGxpdCBhIHN0cmluZyBpbnRvIGxpdGVyYWxzIGFuZCBUb2tlbnNcbiAgICovXG4gIHB1YmxpYyBzcGxpdFN0cmluZyhzOiBzdHJpbmcpOiBUb2tlbml6ZWRTdHJpbmdGcmFnbWVudHMge1xuICAgIGNvbnN0IHN0ciA9IFRva2VuU3RyaW5nLmZvclN0cmluZyhzKTtcbiAgICByZXR1cm4gc3RyLnNwbGl0KHRoaXMubG9va3VwVG9rZW4uYmluZCh0aGlzKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV2ZXJzZSBhIG51bWJlciBlbmNvZGluZyBpbnRvIGEgVG9rZW4sIG9yIHVuZGVmaW5lZCBpZiB0aGUgbnVtYmVyIHdhc24ndCBhIFRva2VuXG4gICAqL1xuICBwdWJsaWMgbG9va3VwTnVtYmVyVG9rZW4oeDogbnVtYmVyKTogSVJlc29sdmFibGUgfCB1bmRlZmluZWQge1xuICAgIGNvbnN0IHRva2VuSW5kZXggPSBleHRyYWN0VG9rZW5Eb3VibGUoeCk7XG4gICAgaWYgKHRva2VuSW5kZXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgY29uc3QgdCA9IHRoaXMubnVtYmVyVG9rZW5NYXAuZ2V0KHRva2VuSW5kZXgpO1xuICAgIGlmICh0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkVuY29kZWQgcmVwcmVzZW50YXRpb24gb2YgdW5rbm93biBudW1iZXIgVG9rZW4gZm91bmRcIik7XG4gICAgfVxuICAgIHJldHVybiB0O1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmQgYSBUb2tlbiBieSBrZXkuXG4gICAqXG4gICAqIFRoaXMgZXhjbHVkZXMgdGhlIHRva2VuIG1hcmtlcnMuXG4gICAqL1xuICBwdWJsaWMgbG9va3VwVG9rZW4oa2V5OiBzdHJpbmcpOiBJUmVzb2x2YWJsZSB7XG4gICAgY29uc3QgdG9rZW4gPSB0aGlzLnN0cmluZ1Rva2VuTWFwLmdldChrZXkpO1xuICAgIGlmICghdG9rZW4pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5yZWNvZ25pemVkIHRva2VuIGtleTogJHtrZXl9YCk7XG4gICAgfVxuICAgIHJldHVybiB0b2tlbjtcbiAgfVxuXG4gIHByaXZhdGUgcmVnaXN0ZXJTdHJpbmdLZXkodG9rZW46IElSZXNvbHZhYmxlLCBkaXNwbGF5SGludD86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgY291bnRlciA9IHRoaXMudG9rZW5Db3VudGVyKys7XG4gICAgY29uc3QgcmVwcmVzZW50YXRpb24gPSAoZGlzcGxheUhpbnQgfHwgXCJUT0tFTlwiKS5yZXBsYWNlKFxuICAgICAgbmV3IFJlZ0V4cChgW14ke1ZBTElEX0tFWV9DSEFSU31dYCwgXCJnXCIpLFxuICAgICAgXCIuXCJcbiAgICApO1xuICAgIGNvbnN0IGtleSA9IGAke3JlcHJlc2VudGF0aW9ufS4ke2NvdW50ZXJ9YDtcbiAgICB0aGlzLnN0cmluZ1Rva2VuTWFwLnNldChrZXksIHRva2VuKTtcbiAgICByZXR1cm4ga2V5O1xuICB9XG5cbiAgcHJpdmF0ZSByZWdpc3Rlck51bWJlcktleSh0b2tlbjogSVJlc29sdmFibGUpOiBudW1iZXIge1xuICAgIGNvbnN0IGNvdW50ZXIgPSB0aGlzLnRva2VuQ291bnRlcisrO1xuICAgIHRoaXMubnVtYmVyVG9rZW5NYXAuc2V0KGNvdW50ZXIsIHRva2VuKTtcbiAgICByZXR1cm4gY3JlYXRlVG9rZW5Eb3VibGUoY291bnRlcik7XG4gIH1cbn1cblxuLyoqXG4gKiBHZXQgYSBjYWNoZWQgdmFsdWUgZm9yIGFuIG9iamVjdCwgc3RvcmluZyBpdCBvbiB0aGUgb2JqZWN0IGluIGEgc3ltYm9sXG4gKi9cbmZ1bmN0aW9uIGNhY2hlZFZhbHVlPEEgZXh0ZW5kcyBvYmplY3QsIEI+KHg6IEEsIHN5bTogc3ltYm9sLCBwcm9kOiAoKSA9PiBCKSB7XG4gIGxldCBjYWNoZWQgPSAoeCBhcyBhbnkpW3N5bSBhcyBhbnldO1xuICBpZiAoY2FjaGVkID09PSB1bmRlZmluZWQpIHtcbiAgICBjYWNoZWQgPSBwcm9kKCk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHgsIHN5bSwgeyB2YWx1ZTogY2FjaGVkIH0pO1xuICB9XG4gIHJldHVybiBjYWNoZWQ7XG59XG4iXX0=