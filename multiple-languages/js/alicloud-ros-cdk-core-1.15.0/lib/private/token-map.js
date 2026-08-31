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
        const tokenIndex = (0, encoding_1.extractTokenDouble)(x);
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
        return (0, encoding_1.createTokenDouble)(counter);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW4tbWFwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidG9rZW4tbWFwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLG9DQUFpQztBQUNqQyx5Q0FRb0I7QUFFcEIsTUFBTSxJQUFJLEdBQUcsTUFBYSxDQUFDO0FBRTNCLE1BQU0sYUFBYSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsOEJBQThCLENBQUMsQ0FBQztBQUNqRSxNQUFNLFdBQVcsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDLENBQUM7QUFDN0QsTUFBTSxhQUFhLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0FBRWpFOzs7Ozs7OztHQVFHO0FBQ0gsTUFBYSxRQUFRO0lBQXJCO1FBV21CLG1CQUFjLEdBQUcsSUFBSSxHQUFHLEVBQXVCLENBQUM7UUFDaEQsbUJBQWMsR0FBRyxJQUFJLEdBQUcsRUFBdUIsQ0FBQztRQUN6RCxpQkFBWSxHQUFHLENBQUMsQ0FBQztJQXFJM0IsQ0FBQztJQWpKQzs7T0FFRztJQUNJLE1BQU0sQ0FBQyxRQUFRO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxRQUFRLEVBQUUsQ0FBQztTQUNyQztRQUNELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDO0lBTUQ7Ozs7Ozs7Ozs7T0FVRztJQUNJLGNBQWMsQ0FBQyxLQUFrQixFQUFFLFdBQW9CO1FBQzVELE9BQU8sV0FBVyxDQUFDLEtBQUssRUFBRSxhQUFhLEVBQUUsR0FBRyxFQUFFO1lBQzVDLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFDdkQsT0FBTyxHQUFHLG9DQUF5QixHQUFHLEdBQUcsR0FBRywyQkFBZ0IsRUFBRSxDQUFDO1FBQ2pFLENBQUMsQ0FBQyxDQUFDO0lBQ0ws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QUFDLEdBQVUsQ0FBQyxDQUFDO0lBQ3BDLElBQUksTUFBTSxLQUFLLFNBQVMsRUFBRTtRQUN4QixNQUFNLEdBQUcsSUFBSSxFQUFFLENBQUM7UUFDaEIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7S0FDbEQ7SUFDRCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVG9rZW5pemVkU3RyaW5nRnJhZ21lbnRzIH0gZnJvbSBcIi4uL3N0cmluZy1mcmFnbWVudHNcIjtcbmltcG9ydCB7IElSZXNvbHZhYmxlIH0gZnJvbSBcIi4uL3Jlc29sdmFibGVcIjtcbmltcG9ydCB7IFRva2VuIH0gZnJvbSBcIi4uL3Rva2VuXCI7XG5pbXBvcnQge1xuICBCRUdJTl9MSVNUX1RPS0VOX01BUktFUixcbiAgQkVHSU5fU1RSSU5HX1RPS0VOX01BUktFUixcbiAgY3JlYXRlVG9rZW5Eb3VibGUsXG4gIEVORF9UT0tFTl9NQVJLRVIsXG4gIGV4dHJhY3RUb2tlbkRvdWJsZSxcbiAgVG9rZW5TdHJpbmcsXG4gIFZBTElEX0tFWV9DSEFSUyxcbn0gZnJvbSBcIi4vZW5jb2RpbmdcIjtcblxuY29uc3QgZ2xvYiA9IGdsb2JhbCBhcyBhbnk7XG5cbmNvbnN0IFNUUklOR19TWU1CT0wgPSBTeW1ib2wuZm9yKFwicm9zLWNkay1jb3JlLlRva2VuTWFwLlNUUklOR1wiKTtcbmNvbnN0IExJU1RfU1lNQk9MID0gU3ltYm9sLmZvcihcInJvcy1jZGstY29yZS5Ub2tlbk1hcC5MSVNUXCIpO1xuY29uc3QgTlVNQkVSX1NZTUJPTCA9IFN5bWJvbC5mb3IoXCJyb3MtY2RrLWNvcmUuVG9rZW5NYXAuTlVNQkVSXCIpO1xuXG4vKipcbiAqIENlbnRyYWwgcGxhY2Ugd2hlcmUgd2Uga2VlcCBhIG1hcHBpbmcgZnJvbSBUb2tlbnMgdG8gdGhlaXIgU3RyaW5nIHJlcHJlc2VudGF0aW9uXG4gKlxuICogVGhlIHN0cmluZyByZXByZXNlbnRhdGlvbiBpcyB1c2VkIHRvIGVtYmVkIHRva2VuIGludG8gc3RyaW5ncyxcbiAqIGFuZCBzdG9yZWQgdG8gYmUgYWJsZSB0byByZXZlcnNlIHRoYXQgbWFwcGluZy5cbiAqXG4gKiBBbGwgaW5zdGFuY2VzIG9mIFRva2VuU3RyaW5nTWFwIHNoYXJlIHRoZSBzYW1lIHN0b3JhZ2UsIHNvIHRoYXQgdGhpcyBwcm9jZXNzXG4gKiB3b3JrcyBldmVuIHdoZW4gZGlmZmVyZW50IGNvcGllcyBvZiB0aGUgbGlicmFyeSBhcmUgbG9hZGVkLlxuICovXG5leHBvcnQgY2xhc3MgVG9rZW5NYXAge1xuICAvKipcbiAgICogU2luZ2xldG9uIGluc3RhbmNlIG9mIHRoZSB0b2tlbiBzdHJpbmcgbWFwXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGluc3RhbmNlKCk6IFRva2VuTWFwIHtcbiAgICBpZiAoIWdsb2IuX19jZGtUb2tlbk1hcCkge1xuICAgICAgZ2xvYi5fX2Nka1Rva2VuTWFwID0gbmV3IFRva2VuTWFwKCk7XG4gICAgfVxuICAgIHJldHVybiBnbG9iLl9fY2RrVG9rZW5NYXA7XG4gIH1cblxuICBwcml2YXRlIHJlYWRvbmx5IHN0cmluZ1Rva2VuTWFwID0gbmV3IE1hcDxzdHJpbmcsIElSZXNvbHZhYmxlPigpO1xuICBwcml2YXRlIHJlYWRvbmx5IG51bWJlclRva2VuTWFwID0gbmV3IE1hcDxudW1iZXIsIElSZXNvbHZhYmxlPigpO1xuICBwcml2YXRlIHRva2VuQ291bnRlciA9IDA7XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlIGEgdW5pcXVlIHN0cmluZyBmb3IgdGhpcyBUb2tlbiwgcmV0dXJuaW5nIGEga2V5XG4gICAqXG4gICAqIEV2ZXJ5IGNhbGwgZm9yIHRoZSBzYW1lIFRva2VuIHdpbGwgcHJvZHVjZSBhIG5ldyB1bmlxdWUgc3RyaW5nLCBub1xuICAgKiBhdHRlbXB0IGlzIG1hZGUgdG8gZGVkdXBsaWNhdGUuIFRva2VuIG9iamVjdHMgc2hvdWxkIGNhY2hlIHRoZVxuICAgKiB2YWx1ZSB0aGVtc2VsdmVzLCBpZiByZXF1aXJlZC5cbiAgICpcbiAgICogVGhlIHRva2VuIGNhbiBjaG9vc2UgKHBhcnQgb2YpIGl0cyBvd24gcmVwcmVzZW50YXRpb24gc3RyaW5nIHdpdGggYVxuICAgKiBoaW50LiBUaGlzIG1heSBiZSB1c2VkIHRvIHByb2R1Y2UgYWVzdGhldGljYWxseSBwbGVhc2luZyBhbmRcbiAgICogcmVjb2duaXphYmxlIHRva2VuIHJlcHJlc2VudGF0aW9ucyBmb3IgaHVtYW5zLlxuICAgKi9cbiAgcHVibGljIHJlZ2lzdGVyU3RyaW5nKHRva2VuOiBJUmVzb2x2YWJsZSwgZGlzcGxheUhpbnQ/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBjYWNoZWRWYWx1ZSh0b2tlbiwgU1RSSU5HX1NZTUJPTCwgKCkgPT4ge1xuICAgICAgY29uc3Qga2V5ID0gdGhpcy5yZWdpc3RlclN0cmluZ0tleSh0b2tlbiwgZGlzcGxheUhpbnQpO1xuICAgICAgcmV0dXJuIGAke0JFR0lOX1NUUklOR19UT0tFTl9NQVJLRVJ9JHtrZXl9JHtFTkRfVE9LRU5fTUFSS0VSfWA7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogR2VuZXJhdGUgYSB1bmlxdWUgc3RyaW5nIGZvciB0aGlzIFRva2VuLCByZXR1cm5pbmcgYSBrZXlcbiAgICovXG4gIHB1YmxpYyByZWdpc3Rlckxpc3QodG9rZW46IElSZXNvbHZhYmxlLCBkaXNwbGF5SGludD86IHN0cmluZyk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gY2FjaGVkVmFsdWUodG9rZW4sIExJU1RfU1lNQk9MLCAoKSA9PiB7XG4gICAgICBjb25zdCBrZXkgPSB0aGlzLnJlZ2lzdGVyU3RyaW5nS2V5KHRva2VuLCBkaXNwbGF5SGludCk7XG4gICAgICByZXR1cm4gW2Ake0JFR0lOX0xJU1RfVE9LRU5fTUFSS0VSfSR7a2V5fSR7RU5EX1RPS0VOX01BUktFUn1gXTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSB1bmlxdWUgbnVtYmVyIHJlcHJlc2VudGF0aW9uIGZvciB0aGlzIFRva2VuIGFuZCByZXR1cm4gaXRcbiAgICovXG4gIHB1YmxpYyByZWdpc3Rlck51bWJlcih0b2tlbjogSVJlc29sdmFibGUpOiBudW1iZXIge1xuICAgIHJldHVybiBjYWNoZWRWYWx1ZSh0b2tlbiwgTlVNQkVSX1NZTUJPTCwgKCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMucmVnaXN0ZXJOdW1iZXJLZXkodG9rZW4pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIExvb2t1cCBhIHRva2VuIGZyb20gYW4gZW5jb2RlZCB2YWx1ZVxuICAgKi9cbiAgcHVibGljIHRva2VuRnJvbUVuY29kaW5nKHg6IGFueSk6IElSZXNvbHZhYmxlIHwgdW5kZWZpbmVkIHtcbiAgICBpZiAodHlwZW9mIHggPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHJldHVybiB0aGlzLmxvb2t1cFN0cmluZyh4KTtcbiAgICB9XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoeCkpIHtcbiAgICAgIHJldHVybiB0aGlzLmxvb2t1cExpc3QoeCk7XG4gICAgfVxuICAgIGlmIChUb2tlbi5pc1VucmVzb2x2ZWQoeCkpIHtcbiAgICAgIHJldHVybiB4O1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldmVyc2UgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gaW50byBhIFRva2VuIG9iamVjdFxuICAgKi9cbiAgcHVibGljIGxvb2t1cFN0cmluZyhzOiBzdHJpbmcpOiBJUmVzb2x2YWJsZSB8IHVuZGVmaW5lZCB7XG4gICAgY29uc3QgZnJhZ21lbnRzID0gdGhpcy5zcGxpdFN0cmluZyhzKTtcbiAgICBpZiAoZnJhZ21lbnRzLnRva2Vucy5sZW5ndGggPiAwICYmIGZyYWdtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHJldHVybiBmcmFnbWVudHMuZmlyc3RUb2tlbjtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXZlcnNlIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIGludG8gYSBUb2tlbiBvYmplY3RcbiAgICovXG4gIHB1YmxpYyBsb29rdXBMaXN0KHhzOiBzdHJpbmdbXSk6IElSZXNvbHZhYmxlIHwgdW5kZWZpbmVkIHtcbiAgICBpZiAoeHMubGVuZ3RoICE9PSAxKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBjb25zdCBzdHIgPSBUb2tlblN0cmluZy5mb3JMaXN0VG9rZW4oeHNbMF0pO1xuICAgIGNvbnN0IGZyYWdtZW50cyA9IHN0ci5zcGxpdCh0aGlzLmxvb2t1cFRva2VuLmJpbmQodGhpcykpO1xuICAgIGlmIChmcmFnbWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICByZXR1cm4gZnJhZ21lbnRzLmZpcnN0VG9rZW47XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICAvKipcbiAgICogU3BsaXQgYSBzdHJpbmcgaW50byBsaXRlcmFscyBhbmQgVG9rZW5zXG4gICAqL1xuICBwdWJsaWMgc3BsaXRTdHJpbmcoczogc3RyaW5nKTogVG9rZW5pemVkU3RyaW5nRnJhZ21lbnRzIHtcbiAgICBjb25zdCBzdHIgPSBUb2tlblN0cmluZy5mb3JTdHJpbmcocyk7XG4gICAgcmV0dXJuIHN0ci5zcGxpdCh0aGlzLmxvb2t1cFRva2VuLmJpbmQodGhpcykpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldmVyc2UgYSBudW1iZXIgZW5jb2RpbmcgaW50byBhIFRva2VuLCBvciB1bmRlZmluZWQgaWYgdGhlIG51bWJlciB3YXNuJ3QgYSBUb2tlblxuICAgKi9cbiAgcHVibGljIGxvb2t1cE51bWJlclRva2VuKHg6IG51bWJlcik6IElSZXNvbHZhYmxlIHwgdW5kZWZpbmVkIHtcbiAgICBjb25zdCB0b2tlbkluZGV4ID0gZXh0cmFjdFRva2VuRG91YmxlKHgpO1xuICAgIGlmICh0b2tlbkluZGV4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGNvbnN0IHQgPSB0aGlzLm51bWJlclRva2VuTWFwLmdldCh0b2tlbkluZGV4KTtcbiAgICBpZiAodCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFbmNvZGVkIHJlcHJlc2VudGF0aW9uIG9mIHVua25vd24gbnVtYmVyIFRva2VuIGZvdW5kXCIpO1xuICAgIH1cbiAgICByZXR1cm4gdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kIGEgVG9rZW4gYnkga2V5LlxuICAgKlxuICAgKiBUaGlzIGV4Y2x1ZGVzIHRoZSB0b2tlbiBtYXJrZXJzLlxuICAgKi9cbiAgcHVibGljIGxvb2t1cFRva2VuKGtleTogc3RyaW5nKTogSVJlc29sdmFibGUge1xuICAgIGNvbnN0IHRva2VuID0gdGhpcy5zdHJpbmdUb2tlbk1hcC5nZXQoa2V5KTtcbiAgICBpZiAoIXRva2VuKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFVucmVjb2duaXplZCB0b2tlbiBrZXk6ICR7a2V5fWApO1xuICAgIH1cbiAgICByZXR1cm4gdG9rZW47XG4gIH1cblxuICBwcml2YXRlIHJlZ2lzdGVyU3RyaW5nS2V5KHRva2VuOiBJUmVzb2x2YWJsZSwgZGlzcGxheUhpbnQ/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IGNvdW50ZXIgPSB0aGlzLnRva2VuQ291bnRlcisrO1xuICAgIGNvbnN0IHJlcHJlc2VudGF0aW9uID0gKGRpc3BsYXlIaW50IHx8IFwiVE9LRU5cIikucmVwbGFjZShcbiAgICAgIG5ldyBSZWdFeHAoYFteJHtWQUxJRF9LRVlfQ0hBUlN9XWAsIFwiZ1wiKSxcbiAgICAgIFwiLlwiXG4gICAgKTtcbiAgICBjb25zdCBrZXkgPSBgJHtyZXByZXNlbnRhdGlvbn0uJHtjb3VudGVyfWA7XG4gICAgdGhpcy5zdHJpbmdUb2tlbk1hcC5zZXQoa2V5LCB0b2tlbik7XG4gICAgcmV0dXJuIGtleTtcbiAgfVxuXG4gIHByaXZhdGUgcmVnaXN0ZXJOdW1iZXJLZXkodG9rZW46IElSZXNvbHZhYmxlKTogbnVtYmVyIHtcbiAgICBjb25zdCBjb3VudGVyID0gdGhpcy50b2tlbkNvdW50ZXIrKztcbiAgICB0aGlzLm51bWJlclRva2VuTWFwLnNldChjb3VudGVyLCB0b2tlbik7XG4gICAgcmV0dXJuIGNyZWF0ZVRva2VuRG91YmxlKGNvdW50ZXIpO1xuICB9XG59XG5cbi8qKlxuICogR2V0IGEgY2FjaGVkIHZhbHVlIGZvciBhbiBvYmplY3QsIHN0b3JpbmcgaXQgb24gdGhlIG9iamVjdCBpbiBhIHN5bWJvbFxuICovXG5mdW5jdGlvbiBjYWNoZWRWYWx1ZTxBIGV4dGVuZHMgb2JqZWN0LCBCPih4OiBBLCBzeW06IHN5bWJvbCwgcHJvZDogKCkgPT4gQikge1xuICBsZXQgY2FjaGVkID0gKHggYXMgYW55KVtzeW0gYXMgYW55XTtcbiAgaWYgKGNhY2hlZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY2FjaGVkID0gcHJvZCgpO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh4LCBzeW0sIHsgdmFsdWU6IGNhY2hlZCB9KTtcbiAgfVxuICByZXR1cm4gY2FjaGVkO1xufVxuIl19