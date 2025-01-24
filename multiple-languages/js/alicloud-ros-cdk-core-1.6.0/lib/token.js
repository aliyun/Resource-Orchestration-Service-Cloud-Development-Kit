"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withResolved = exports.isResolvableObject = exports.Tokenization = exports.Token = exports.TokenComparison = void 0;
const encoding_1 = require("./private/encoding");
const intrinsic_1 = require("./private/intrinsic");
const resolve_1 = require("./private/resolve");
const token_map_1 = require("./private/token-map");
const lazy_1 = require("./lazy");
/**
 * An enum-like class that represents the result of comparing two Tokens.
 * The return type of `Token.compareStrings`.
 */
class TokenComparison {
    constructor() {
    }
}
exports.TokenComparison = TokenComparison;
/**
 * This means we're certain the two components are NOT
 * Tokens, and identical.
 */
TokenComparison.SAME = new TokenComparison();
/**
 * This means we're certain the two components are NOT
 * Tokens, and different.
 */
TokenComparison.DIFFERENT = new TokenComparison();
/** This means exactly one of the components is a Token. */
TokenComparison.ONE_UNRESOLVED = new TokenComparison();
/** This means both components are Tokens. */
TokenComparison.BOTH_UNRESOLVED = new TokenComparison();
/**
 * Represents a special or lazily-evaluated value.
 *
 * Can be used to delay evaluation of a certain value in case, for example,
 * that it requires some context or late-bound data. Can also be used to
 * mark values that need special processing at document rendering time.
 *
 * Tokens can be embedded into strings while retaining their original
 * semantics.
 */
class Token {
    /**
     * Returns true if obj represents an unresolved value
     *
     * One of these must be true:
     *
     * - `obj` is an IResolvable
     * - `obj` is a string containing at least one encoded `IResolvable`
     * - `obj` is either an encoded number or list
     *
     * This does NOT recurse into lists or objects to see if they
     * containing resolvables.
     *
     * @param obj The object to test.
     */
    static isUnresolved(obj) {
        return encoding_1.unresolved(obj);
    }
    /**
     * Return a reversible string representation of this token
     *
     * If the Token is initialized with a literal, the stringified value of the
     * literal is returned. Otherwise, a special quoted string representation
     * of the Token is returned that can be embedded into other strings.
     *
     * Strings with quoted Tokens in them can be restored back into
     * complex values with the Tokens restored by calling `resolve()`
     * on the string.
     */
    static asString(value, options = {}) {
        if (typeof value === "string") {
            return value;
        }
        return token_map_1.TokenMap.instance().registerString(Token.asAny(value), options.displayHint);
    }
    /**
     * Return a reversible number representation of this token
     */
    static asNumber(value) {
        if (typeof value === "number") {
            return value;
        }
        return token_map_1.TokenMap.instance().registerNumber(Token.asAny(value));
    }
    /**
     * Return a reversible list representation of this token
     */
    static asList(value, options = {}) {
        if (Array.isArray(value) && value.every((x) => typeof x === "string")) {
            return value;
        }
        return token_map_1.TokenMap.instance().registerList(Token.asAny(value), options.displayHint);
    }
    /**
     * Return a resolvable representation of the given value
     */
    static asAny(value) {
        return isResolvableObject(value) ? value : new intrinsic_1.Intrinsic(value);
    }
    /** Compare two strings that might contain Tokens with each other. */
    static compareStrings(possibleToken1, possibleToken2) {
        const firstIsUnresolved = Token.isUnresolved(possibleToken1);
        const secondIsUnresolved = Token.isUnresolved(possibleToken2);
        if (firstIsUnresolved && secondIsUnresolved) {
            return TokenComparison.BOTH_UNRESOLVED;
        }
        if (firstIsUnresolved || secondIsUnresolved) {
            return TokenComparison.ONE_UNRESOLVED;
        }
        return possibleToken1 === possibleToken2 ? TokenComparison.SAME : TokenComparison.DIFFERENT;
    }
    constructor() { }
}
exports.Token = Token;
/**
 * Less oft-needed functions to manipulate Tokens
 */
class Tokenization {
    /**
     * Un-encode a string potentially containing encoded tokens
     */
    static reverseString(s) {
        return token_map_1.TokenMap.instance().splitString(s);
    }
    /**
     * Un-encode a Tokenized value from a number
     */
    static reverseNumber(n) {
        return token_map_1.TokenMap.instance().lookupNumberToken(n);
    }
    /**
     * Un-encode a Tokenized value from a list
     */
    static reverseList(l) {
        return token_map_1.TokenMap.instance().lookupList(l);
    }
    /**
     * Resolves an object by evaluating all tokens and removing any undefined or empty objects or arrays.
     * Values can only be primitives, arrays or tokens. Other objects (i.e. with methods) will be rejected.
     *
     * @param obj The object to resolve.
     * @param options Prefix key path components for diagnostics.
     */
    static resolve(obj, options) {
        return resolve_1.resolve(obj, {
            scope: options.scope,
            resolver: options.resolver,
            preparing: options.preparing !== undefined ? options.preparing : false,
        });
    }
    /**
     * Return whether the given object is an IResolvable object
     *
     * This is different from Token.isUnresolved() which will also check for
     * encoded Tokens, whereas this method will only do a type check on the given
     * object.
     */
    static isResolvable(obj) {
        return isResolvableObject(obj);
    }
    /**
     * Stringify a number directly or lazily if it's a Token. If it is an object (i.e., { Ref: 'SomeLogicalId' }), return it as-is.
     */
    static stringifyNumber(x) {
        // only convert numbers to strings so that Refs, conditions, and other things don't end up synthesizing as [object object]
        if (Token.isUnresolved(x)) {
            return lazy_1.Lazy.stringValue({
                produce: (context) => {
                    const resolved = context.resolve(x);
                    return typeof resolved !== "number" ? resolved : `${resolved}`;
                },
            });
        }
        else {
            return typeof x !== "number" ? x : `${x}`;
        }
    }
    constructor() { }
}
exports.Tokenization = Tokenization;
function isResolvableObject(x) {
    return typeof x === "object" && x !== null && typeof x.resolve === "function";
}
exports.isResolvableObject = isResolvableObject;
function withResolved(...args) {
    if (args.length < 2) {
        return;
    }
    const argArray = args.slice(0, args.length - 1);
    if (argArray.some(Token.isUnresolved)) {
        return;
    }
    args[args.length - 1].apply(arguments, argArray);
}
exports.withResolved = withResolved;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0b2tlbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxpREFBZ0Q7QUFDaEQsbURBQWdEO0FBQ2hELCtDQUE0QztBQUM1QyxtREFBK0M7QUFDL0MsaUNBQThCO0FBSTlCOzs7R0FHRztBQUNILE1BQWEsZUFBZTtJQW1CMUI7SUFDQSxDQUFDOztBQXBCSCwwQ0FxQkM7QUFwQkM7OztHQUdHO0FBQ29CLG9CQUFJLEdBQUcsSUFBSSxlQUFlLEVBQUUsQ0FBQztBQUVwRDs7O0dBR0c7QUFDb0IseUJBQVMsR0FBRyxJQUFJLGVBQWUsRUFBRSxDQUFDO0FBRXpELDJEQUEyRDtBQUNwQyw4QkFBYyxHQUFHLElBQUksZUFBZSxFQUFFLENBQUM7QUFFOUQsNkNBQTZDO0FBQ3RCLCtCQUFlLEdBQUcsSUFBSSxlQUFlLEVBQUUsQ0FBQztBQU1qRTs7Ozs7Ozs7O0dBU0c7QUFDSCxNQUFhLEtBQUs7SUFDaEI7Ozs7Ozs7Ozs7Ozs7T0FhRztJQUNJLE1BQU0sQ0FBQyxZQUFZLENBQUMsR0FBUTtRQUNqQyxPQUFPLHFCQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7Ozs7Ozs7O09BVUc7SUFDSSxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQVUsRUFBRSxVQUEyQixFQUFFO1FBQzlELElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1lBQzdCLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxPQUFPLG9CQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsY0FBYyxDQUN2QyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUNsQixPQUFPLENBQUMsV0FBVyxDQUNwQixDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0ksTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFVO1FBQy9CLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1lBQzdCLE9BQU8sS0FBSyxDQUFDO1NB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LFFBQVEsQ0FBQyxDQUFDO0FBQ25ELENBQUM7QUFURCxvQ0FTQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElDb25zdHJ1Y3QgfSBmcm9tIFwiLi9jb25zdHJ1Y3QtY29tcGF0XCI7XG5pbXBvcnQgeyB1bnJlc29sdmVkIH0gZnJvbSBcIi4vcHJpdmF0ZS9lbmNvZGluZ1wiO1xuaW1wb3J0IHsgSW50cmluc2ljIH0gZnJvbSBcIi4vcHJpdmF0ZS9pbnRyaW5zaWNcIjtcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tIFwiLi9wcml2YXRlL3Jlc29sdmVcIjtcbmltcG9ydCB7IFRva2VuTWFwIH0gZnJvbSBcIi4vcHJpdmF0ZS90b2tlbi1tYXBcIjtcbmltcG9ydCB7IExhenkgfSBmcm9tIFwiLi9sYXp5XCI7XG5pbXBvcnQgeyBJUmVzb2x2YWJsZSwgSVRva2VuUmVzb2x2ZXIgfSBmcm9tIFwiLi9yZXNvbHZhYmxlXCI7XG5pbXBvcnQgeyBUb2tlbml6ZWRTdHJpbmdGcmFnbWVudHMgfSBmcm9tIFwiLi9zdHJpbmctZnJhZ21lbnRzXCI7XG5cbi8qKlxuICogQW4gZW51bS1saWtlIGNsYXNzIHRoYXQgcmVwcmVzZW50cyB0aGUgcmVzdWx0IG9mIGNvbXBhcmluZyB0d28gVG9rZW5zLlxuICogVGhlIHJldHVybiB0eXBlIG9mIGBUb2tlbi5jb21wYXJlU3RyaW5nc2AuXG4gKi9cbmV4cG9ydCBjbGFzcyBUb2tlbkNvbXBhcmlzb24ge1xuICAvKipcbiAgICogVGhpcyBtZWFucyB3ZSdyZSBjZXJ0YWluIHRoZSB0d28gY29tcG9uZW50cyBhcmUgTk9UXG4gICAqIFRva2VucywgYW5kIGlkZW50aWNhbC5cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgU0FNRSA9IG5ldyBUb2tlbkNvbXBhcmlzb24oKTtcblxuICAvKipcbiAgICogVGhpcyBtZWFucyB3ZSdyZSBjZXJ0YWluIHRoZSB0d28gY29tcG9uZW50cyBhcmUgTk9UXG4gICAqIFRva2VucywgYW5kIGRpZmZlcmVudC5cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRElGRkVSRU5UID0gbmV3IFRva2VuQ29tcGFyaXNvbigpO1xuXG4gIC8qKiBUaGlzIG1lYW5zIGV4YWN0bHkgb25lIG9mIHRoZSBjb21wb25lbnRzIGlzIGEgVG9rZW4uICovXG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgT05FX1VOUkVTT0xWRUQgPSBuZXcgVG9rZW5Db21wYXJpc29uKCk7XG5cbiAgLyoqIFRoaXMgbWVhbnMgYm90aCBjb21wb25lbnRzIGFyZSBUb2tlbnMuICovXG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQk9USF9VTlJFU09MVkVEID0gbmV3IFRva2VuQ29tcGFyaXNvbigpO1xuXG4gIHByaXZhdGUgY29uc3RydWN0b3IoKSB7XG4gIH1cbn1cblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgc3BlY2lhbCBvciBsYXppbHktZXZhbHVhdGVkIHZhbHVlLlxuICpcbiAqIENhbiBiZSB1c2VkIHRvIGRlbGF5IGV2YWx1YXRpb24gb2YgYSBjZXJ0YWluIHZhbHVlIGluIGNhc2UsIGZvciBleGFtcGxlLFxuICogdGhhdCBpdCByZXF1aXJlcyBzb21lIGNvbnRleHQgb3IgbGF0ZS1ib3VuZCBkYXRhLiBDYW4gYWxzbyBiZSB1c2VkIHRvXG4gKiBtYXJrIHZhbHVlcyB0aGF0IG5lZWQgc3BlY2lhbCBwcm9jZXNzaW5nIGF0IGRvY3VtZW50IHJlbmRlcmluZyB0aW1lLlxuICpcbiAqIFRva2VucyBjYW4gYmUgZW1iZWRkZWQgaW50byBzdHJpbmdzIHdoaWxlIHJldGFpbmluZyB0aGVpciBvcmlnaW5hbFxuICogc2VtYW50aWNzLlxuICovXG5leHBvcnQgY2xhc3MgVG9rZW4ge1xuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIG9iaiByZXByZXNlbnRzIGFuIHVucmVzb2x2ZWQgdmFsdWVcbiAgICpcbiAgICogT25lIG9mIHRoZXNlIG11c3QgYmUgdHJ1ZTpcbiAgICpcbiAgICogLSBgb2JqYCBpcyBhbiBJUmVzb2x2YWJsZVxuICAgKiAtIGBvYmpgIGlzIGEgc3RyaW5nIGNvbnRhaW5pbmcgYXQgbGVhc3Qgb25lIGVuY29kZWQgYElSZXNvbHZhYmxlYFxuICAgKiAtIGBvYmpgIGlzIGVpdGhlciBhbiBlbmNvZGVkIG51bWJlciBvciBsaXN0XG4gICAqXG4gICAqIFRoaXMgZG9lcyBOT1QgcmVjdXJzZSBpbnRvIGxpc3RzIG9yIG9iamVjdHMgdG8gc2VlIGlmIHRoZXlcbiAgICogY29udGFpbmluZyByZXNvbHZhYmxlcy5cbiAgICpcbiAgICogQHBhcmFtIG9iaiBUaGUgb2JqZWN0IHRvIHRlc3QuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGlzVW5yZXNvbHZlZChvYmo6IGFueSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB1bnJlc29sdmVkKG9iaik7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGEgcmV2ZXJzaWJsZSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyB0b2tlblxuICAgKlxuICAgKiBJZiB0aGUgVG9rZW4gaXMgaW5pdGlhbGl6ZWQgd2l0aCBhIGxpdGVyYWwsIHRoZSBzdHJpbmdpZmllZCB2YWx1ZSBvZiB0aGVcbiAgICogbGl0ZXJhbCBpcyByZXR1cm5lZC4gT3RoZXJ3aXNlLCBhIHNwZWNpYWwgcXVvdGVkIHN0cmluZyByZXByZXNlbnRhdGlvblxuICAgKiBvZiB0aGUgVG9rZW4gaXMgcmV0dXJuZWQgdGhhdCBjYW4gYmUgZW1iZWRkZWQgaW50byBvdGhlciBzdHJpbmdzLlxuICAgKlxuICAgKiBTdHJpbmdzIHdpdGggcXVvdGVkIFRva2VucyBpbiB0aGVtIGNhbiBiZSByZXN0b3JlZCBiYWNrIGludG9cbiAgICogY29tcGxleCB2YWx1ZXMgd2l0aCB0aGUgVG9rZW5zIHJlc3RvcmVkIGJ5IGNhbGxpbmcgYHJlc29sdmUoKWBcbiAgICogb24gdGhlIHN0cmluZy5cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgYXNTdHJpbmcodmFsdWU6IGFueSwgb3B0aW9uczogRW5jb2RpbmdPcHRpb25zID0ge30pOiBzdHJpbmcge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIFRva2VuTWFwLmluc3RhbmNlKCkucmVnaXN0ZXJTdHJpbmcoXG4gICAgICBUb2tlbi5hc0FueSh2YWx1ZSksXG4gICAgICBvcHRpb25zLmRpc3BsYXlIaW50XG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYSByZXZlcnNpYmxlIG51bWJlciByZXByZXNlbnRhdGlvbiBvZiB0aGlzIHRva2VuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGFzTnVtYmVyKHZhbHVlOiBhbnkpOiBudW1iZXIge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIFRva2VuTWFwLmluc3RhbmNlKCkucmVnaXN0ZXJOdW1iZXIoVG9rZW4uYXNBbnkodmFsdWUpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYSByZXZlcnNpYmxlIGxpc3QgcmVwcmVzZW50YXRpb24gb2YgdGhpcyB0b2tlblxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBhc0xpc3QodmFsdWU6IGFueSwgb3B0aW9uczogRW5jb2RpbmdPcHRpb25zID0ge30pOiBzdHJpbmdbXSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmV2ZXJ5KCh4KSA9PiB0eXBlb2YgeCA9PT0gXCJzdHJpbmdcIikpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIFRva2VuTWFwLmluc3RhbmNlKCkucmVnaXN0ZXJMaXN0KFxuICAgICAgVG9rZW4uYXNBbnkodmFsdWUpLFxuICAgICAgb3B0aW9ucy5kaXNwbGF5SGludFxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGEgcmVzb2x2YWJsZSByZXByZXNlbnRhdGlvbiBvZiB0aGUgZ2l2ZW4gdmFsdWVcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgYXNBbnkodmFsdWU6IGFueSk6IElSZXNvbHZhYmxlIHtcbiAgICByZXR1cm4gaXNSZXNvbHZhYmxlT2JqZWN0KHZhbHVlKSA/IHZhbHVlIDogbmV3IEludHJpbnNpYyh2YWx1ZSk7XG4gIH1cblxuICAvKiogQ29tcGFyZSB0d28gc3RyaW5ncyB0aGF0IG1pZ2h0IGNvbnRhaW4gVG9rZW5zIHdpdGggZWFjaCBvdGhlci4gKi9cbiAgcHVibGljIHN0YXRpYyBjb21wYXJlU3RyaW5ncyhwb3NzaWJsZVRva2VuMTogc3RyaW5nLCBwb3NzaWJsZVRva2VuMjogc3RyaW5nKTogVG9rZW5Db21wYXJpc29uIHtcbiAgICBjb25zdCBmaXJzdElzVW5yZXNvbHZlZCA9IFRva2VuLmlzVW5yZXNvbHZlZChwb3NzaWJsZVRva2VuMSk7XG4gICAgY29uc3Qgc2Vjb25kSXNVbnJlc29sdmVkID0gVG9rZW4uaXNVbnJlc29sdmVkKHBvc3NpYmxlVG9rZW4yKTtcblxuICAgIGlmIChmaXJzdElzVW5yZXNvbHZlZCAmJiBzZWNvbmRJc1VucmVzb2x2ZWQpIHtcbiAgICAgIHJldHVybiBUb2tlbkNvbXBhcmlzb24uQk9USF9VTlJFU09MVkVEO1xuICAgIH1cbiAgICBpZiAoZmlyc3RJc1VucmVzb2x2ZWQgfHwgc2Vjb25kSXNVbnJlc29sdmVkKSB7XG4gICAgICByZXR1cm4gVG9rZW5Db21wYXJpc29uLk9ORV9VTlJFU09MVkVEO1xuICAgIH1cblxuICAgIHJldHVybiBwb3NzaWJsZVRva2VuMSA9PT0gcG9zc2libGVUb2tlbjIgPyBUb2tlbkNvbXBhcmlzb24uU0FNRSA6IFRva2VuQ29tcGFyaXNvbi5ESUZGRVJFTlQ7XG4gIH1cblxuICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge31cbn1cblxuLyoqXG4gKiBMZXNzIG9mdC1uZWVkZWQgZnVuY3Rpb25zIHRvIG1hbmlwdWxhdGUgVG9rZW5zXG4gKi9cbmV4cG9ydCBjbGFzcyBUb2tlbml6YXRpb24ge1xuICAvKipcbiAgICogVW4tZW5jb2RlIGEgc3RyaW5nIHBvdGVudGlhbGx5IGNvbnRhaW5pbmcgZW5jb2RlZCB0b2tlbnNcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgcmV2ZXJzZVN0cmluZyhzOiBzdHJpbmcpOiBUb2tlbml6ZWRTdHJpbmdGcmFnbWVudHMge1xuICAgIHJldHVybiBUb2tlbk1hcC5pbnN0YW5jZSgpLnNwbGl0U3RyaW5nKHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuLWVuY29kZSBhIFRva2VuaXplZCB2YWx1ZSBmcm9tIGEgbnVtYmVyXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIHJldmVyc2VOdW1iZXIobjogbnVtYmVyKTogSVJlc29sdmFibGUgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiBUb2tlbk1hcC5pbnN0YW5jZSgpLmxvb2t1cE51bWJlclRva2VuKG4pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuLWVuY29kZSBhIFRva2VuaXplZCB2YWx1ZSBmcm9tIGEgbGlzdFxuICAgKi9cbiAgcHVibGljIHN0YXRpYyByZXZlcnNlTGlzdChsOiBzdHJpbmdbXSk6IElSZXNvbHZhYmxlIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gVG9rZW5NYXAuaW5zdGFuY2UoKS5sb29rdXBMaXN0KGwpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc29sdmVzIGFuIG9iamVjdCBieSBldmFsdWF0aW5nIGFsbCB0b2tlbnMgYW5kIHJlbW92aW5nIGFueSB1bmRlZmluZWQgb3IgZW1wdHkgb2JqZWN0cyBvciBhcnJheXMuXG4gICAqIFZhbHVlcyBjYW4gb25seSBiZSBwcmltaXRpdmVzLCBhcnJheXMgb3IgdG9rZW5zLiBPdGhlciBvYmplY3RzIChpLmUuIHdpdGggbWV0aG9kcykgd2lsbCBiZSByZWplY3RlZC5cbiAgICpcbiAgICogQHBhcmFtIG9iaiBUaGUgb2JqZWN0IHRvIHJlc29sdmUuXG4gICAqIEBwYXJhbSBvcHRpb25zIFByZWZpeCBrZXkgcGF0aCBjb21wb25lbnRzIGZvciBkaWFnbm9zdGljcy5cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgcmVzb2x2ZShvYmo6IGFueSwgb3B0aW9uczogUmVzb2x2ZU9wdGlvbnMpOiBhbnkge1xuICAgIHJldHVybiByZXNvbHZlKG9iaiwge1xuICAgICAgc2NvcGU6IG9wdGlvbnMuc2NvcGUsXG4gICAgICByZXNvbHZlcjogb3B0aW9ucy5yZXNvbHZlcixcbiAgICAgIHByZXBhcmluZzogb3B0aW9ucy5wcmVwYXJpbmcgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMucHJlcGFyaW5nIDogZmFsc2UsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHdoZXRoZXIgdGhlIGdpdmVuIG9iamVjdCBpcyBhbiBJUmVzb2x2YWJsZSBvYmplY3RcbiAgICpcbiAgICogVGhpcyBpcyBkaWZmZXJlbnQgZnJvbSBUb2tlbi5pc1VucmVzb2x2ZWQoKSB3aGljaCB3aWxsIGFsc28gY2hlY2sgZm9yXG4gICAqIGVuY29kZWQgVG9rZW5zLCB3aGVyZWFzIHRoaXMgbWV0aG9kIHdpbGwgb25seSBkbyBhIHR5cGUgY2hlY2sgb24gdGhlIGdpdmVuXG4gICAqIG9iamVjdC5cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgaXNSZXNvbHZhYmxlKG9iajogYW55KTogb2JqIGlzIElSZXNvbHZhYmxlIHtcbiAgICByZXR1cm4gaXNSZXNvbHZhYmxlT2JqZWN0KG9iaik7XG4gIH1cblxuICAvKipcbiAgICogU3RyaW5naWZ5IGEgbnVtYmVyIGRpcmVjdGx5IG9yIGxhemlseSBpZiBpdCdzIGEgVG9rZW4uIElmIGl0IGlzIGFuIG9iamVjdCAoaS5lLiwgeyBSZWY6ICdTb21lTG9naWNhbElkJyB9KSwgcmV0dXJuIGl0IGFzLWlzLlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBzdHJpbmdpZnlOdW1iZXIoeDogbnVtYmVyKSB7XG4gICAgLy8gb25seSBjb252ZXJ0IG51bWJlcnMgdG8gc3RyaW5ncyBzbyB0aGF0IFJlZnMsIGNvbmRpdGlvbnMsIGFuZCBvdGhlciB0aGluZ3MgZG9uJ3QgZW5kIHVwIHN5bnRoZXNpemluZyBhcyBbb2JqZWN0IG9iamVjdF1cblxuICAgIGlmIChUb2tlbi5pc1VucmVzb2x2ZWQoeCkpIHtcbiAgICAgIHJldHVybiBMYXp5LnN0cmluZ1ZhbHVlKHtcbiAgICAgICAgcHJvZHVjZTogKGNvbnRleHQpID0+IHtcbiAgICAgICAgICBjb25zdCByZXNvbHZlZCA9IGNvbnRleHQucmVzb2x2ZSh4KTtcbiAgICAgICAgICByZXR1cm4gdHlwZW9mIHJlc29sdmVkICE9PSBcIm51bWJlclwiID8gcmVzb2x2ZWQgOiBgJHtyZXNvbHZlZH1gO1xuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0eXBlb2YgeCAhPT0gXCJudW1iZXJcIiA/IHggOiBgJHt4fWA7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHt9XG59XG5cbi8qKlxuICogT3B0aW9ucyB0byB0aGUgcmVzb2x2ZSgpIG9wZXJhdGlvblxuICpcbiAqIE5PVCB0aGUgc2FtZSBhcyB0aGUgUmVzb2x2ZUNvbnRleHQ7IFJlc29sdmVDb250ZXh0IGlzIGV4cG9zZWQgdG8gVG9rZW5cbiAqIGltcGxlbWVudG9ycyBhbmQgcmVzb2x1dGlvbiBob29rcywgd2hlcmVhcyB0aGlzIHN0cnVjdCBpcyBqdXN0IHRvIGJ1bmRsZVxuICogYSBudW1iZXIgb2YgdGhpbmdzIHRoYXQgd291bGQgb3RoZXJ3aXNlIGJlIGFyZ3VtZW50cyB0byByZXNvbHZlKCkgaW4gYVxuICogcmVhZGFibGUgd2F5LlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJlc29sdmVPcHRpb25zIHtcbiAgLyoqXG4gICAqIFRoZSBzY29wZSBmcm9tIHdoaWNoIHJlc29sdXRpb24gaXMgcGVyZm9ybWVkXG4gICAqL1xuICByZWFkb25seSBzY29wZTogSUNvbnN0cnVjdDtcblxuICAvKipcbiAgICogVGhlIHJlc29sdmVyIHRvIGFwcGx5IHRvIGFueSByZXNvbHZhYmxlIHRva2VucyBmb3VuZFxuICAgKi9cbiAgcmVhZG9ubHkgcmVzb2x2ZXI6IElUb2tlblJlc29sdmVyO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZSByZXNvbHV0aW9uIGlzIGJlaW5nIGV4ZWN1dGVkIGR1cmluZyB0aGUgcHJlcGFyZSBwaGFzZSBvciBub3QuXG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqL1xuICByZWFkb25seSBwcmVwYXJpbmc/OiBib29sZWFuO1xufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgdG8gc3RyaW5nIGVuY29kaW5nc1xuICovXG5leHBvcnQgaW50ZXJmYWNlIEVuY29kaW5nT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBBIGhpbnQgZm9yIHRoZSBUb2tlbidzIHB1cnBvc2Ugd2hlbiBzdHJpbmdpZnlpbmcgaXRcbiAgICovXG4gIHJlYWRvbmx5IGRpc3BsYXlIaW50Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNvbHZhYmxlT2JqZWN0KHg6IGFueSk6IHggaXMgSVJlc29sdmFibGUge1xuICByZXR1cm4gdHlwZW9mIHggPT09IFwib2JqZWN0XCIgJiYgeCAhPT0gbnVsbCAmJiB0eXBlb2YgeC5yZXNvbHZlID09PSBcImZ1bmN0aW9uXCI7XG59XG5cbi8qKlxuICogQ2FsbCB0aGUgZ2l2ZW4gZnVuY3Rpb24gb25seSBpZiBhbGwgZ2l2ZW4gdmFsdWVzIGFyZSByZXNvbHZlZFxuICpcbiAqIEV4cG9ydGVkIGFzIGEgZnVuY3Rpb24gc2luY2UgaXQgd2lsbCBiZSB1c2VkIGJ5IFR5cGVTY3JpcHQgbW9kdWxlcywgYnV0XG4gKiBjYW4ndCBiZSBleHBvc2VkIHZpYSBKU0lJIGJlY2F1c2Ugb2YgdGhlIGdlbmVyaWNzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gd2l0aFJlc29sdmVkPEE+KGE6IEEsIGZuOiAoYTogQSkgPT4gdm9pZCk6IHZvaWQ7XG5leHBvcnQgZnVuY3Rpb24gd2l0aFJlc29sdmVkPEEsIEI+KGE6IEEsIGI6IEIsIGZuOiAoYTogQSwgYjogQikgPT4gdm9pZCk6IHZvaWQ7XG5leHBvcnQgZnVuY3Rpb24gd2l0aFJlc29sdmVkPEEsIEIsIEM+KFxuICBhOiBBLFxuICBiOiBCLFxuICBjOiBDLFxuICBmbjogKGE6IEEsIGI6IEIsIGM6IEMpID0+IHZvaWRcbik6IHZvaWQ7XG5leHBvcnQgZnVuY3Rpb24gd2l0aFJlc29sdmVkKC4uLmFyZ3M6IGFueVtdKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IDIpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgYXJnQXJyYXkgPSBhcmdzLnNsaWNlKDAsIGFyZ3MubGVuZ3RoIC0gMSk7XG4gIGlmIChhcmdBcnJheS5zb21lKFRva2VuLmlzVW5yZXNvbHZlZCkpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgYXJnc1thcmdzLmxlbmd0aCAtIDFdLmFwcGx5KGFyZ3VtZW50cywgYXJnQXJyYXkpO1xufVxuIl19