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
        return (0, encoding_1.unresolved)(obj);
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
        return (0, resolve_1.resolve)(obj, {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0b2tlbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxpREFBZ0Q7QUFDaEQsbURBQWdEO0FBQ2hELCtDQUE0QztBQUM1QyxtREFBK0M7QUFDL0MsaUNBQThCO0FBSTlCOzs7R0FHRztBQUNILE1BQWEsZUFBZTtJQW1CMUI7SUFDQSxDQUFDOztBQXBCSCwwQ0FxQkM7QUFwQkM7OztHQUdHO0FBQ29CLG9CQUFJLEdBQUcsSUFBSSxlQUFlLEVBQUUsQ0FBQztBQUVwRDs7O0dBR0c7QUFDb0IseUJBQVMsR0FBRyxJQUFJLGVBQWUsRUFBRSxDQUFDO0FBRXpELDJEQUEyRDtBQUNwQyw4QkFBYyxHQUFHLElBQUksZUFBZSxFQUFFLENBQUM7QUFFOUQsNkNBQTZDO0FBQ3RCLCtCQUFlLEdBQUcsSUFBSSxlQUFlLEVBQUUsQ0FBQztBQU1qRTs7Ozs7Ozs7O0dBU0c7QUFDSCxNQUFhLEtBQUs7SUFDaEI7Ozs7Ozs7Ozs7Ozs7T0FhRztJQUNJLE1BQU0sQ0FBQyxZQUFZLENBQUMsR0FBUTtRQUNqQyxPQUFPLElBQUEscUJBQVUsRUFBQyxHQUFHLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRUQ7Ozs7Ozs7Ozs7T0FVRztJQUNJLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBVSxFQUFFLFVBQTJCLEVBQUU7UUFDOUQsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7WUFDN0IsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELE9BQU8sb0JBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxjQUFjLENBQ3ZDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQ2xCLE9BQU8sQ0FBQyxXQUFXLENBQ3BCLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSSxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQVU7UUFDL0IsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7WUFDN0IsT0FBTyxLQUFLLENB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LFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQztBQUNuRCxDQUFDO0FBVEQsb0NBU0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJQ29uc3RydWN0IH0gZnJvbSBcIi4vY29uc3RydWN0LWNvbXBhdFwiO1xuaW1wb3J0IHsgdW5yZXNvbHZlZCB9IGZyb20gXCIuL3ByaXZhdGUvZW5jb2RpbmdcIjtcbmltcG9ydCB7IEludHJpbnNpYyB9IGZyb20gXCIuL3ByaXZhdGUvaW50cmluc2ljXCI7XG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSBcIi4vcHJpdmF0ZS9yZXNvbHZlXCI7XG5pbXBvcnQgeyBUb2tlbk1hcCB9IGZyb20gXCIuL3ByaXZhdGUvdG9rZW4tbWFwXCI7XG5pbXBvcnQgeyBMYXp5IH0gZnJvbSBcIi4vbGF6eVwiO1xuaW1wb3J0IHsgSVJlc29sdmFibGUsIElUb2tlblJlc29sdmVyIH0gZnJvbSBcIi4vcmVzb2x2YWJsZVwiO1xuaW1wb3J0IHsgVG9rZW5pemVkU3RyaW5nRnJhZ21lbnRzIH0gZnJvbSBcIi4vc3RyaW5nLWZyYWdtZW50c1wiO1xuXG4vKipcbiAqIEFuIGVudW0tbGlrZSBjbGFzcyB0aGF0IHJlcHJlc2VudHMgdGhlIHJlc3VsdCBvZiBjb21wYXJpbmcgdHdvIFRva2Vucy5cbiAqIFRoZSByZXR1cm4gdHlwZSBvZiBgVG9rZW4uY29tcGFyZVN0cmluZ3NgLlxuICovXG5leHBvcnQgY2xhc3MgVG9rZW5Db21wYXJpc29uIHtcbiAgLyoqXG4gICAqIFRoaXMgbWVhbnMgd2UncmUgY2VydGFpbiB0aGUgdHdvIGNvbXBvbmVudHMgYXJlIE5PVFxuICAgKiBUb2tlbnMsIGFuZCBpZGVudGljYWwuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFNBTUUgPSBuZXcgVG9rZW5Db21wYXJpc29uKCk7XG5cbiAgLyoqXG4gICAqIFRoaXMgbWVhbnMgd2UncmUgY2VydGFpbiB0aGUgdHdvIGNvbXBvbmVudHMgYXJlIE5PVFxuICAgKiBUb2tlbnMsIGFuZCBkaWZmZXJlbnQuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IERJRkZFUkVOVCA9IG5ldyBUb2tlbkNvbXBhcmlzb24oKTtcblxuICAvKiogVGhpcyBtZWFucyBleGFjdGx5IG9uZSBvZiB0aGUgY29tcG9uZW50cyBpcyBhIFRva2VuLiAqL1xuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IE9ORV9VTlJFU09MVkVEID0gbmV3IFRva2VuQ29tcGFyaXNvbigpO1xuXG4gIC8qKiBUaGlzIG1lYW5zIGJvdGggY29tcG9uZW50cyBhcmUgVG9rZW5zLiAqL1xuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEJPVEhfVU5SRVNPTFZFRCA9IG5ldyBUb2tlbkNvbXBhcmlzb24oKTtcblxuICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xuICB9XG59XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIHNwZWNpYWwgb3IgbGF6aWx5LWV2YWx1YXRlZCB2YWx1ZS5cbiAqXG4gKiBDYW4gYmUgdXNlZCB0byBkZWxheSBldmFsdWF0aW9uIG9mIGEgY2VydGFpbiB2YWx1ZSBpbiBjYXNlLCBmb3IgZXhhbXBsZSxcbiAqIHRoYXQgaXQgcmVxdWlyZXMgc29tZSBjb250ZXh0IG9yIGxhdGUtYm91bmQgZGF0YS4gQ2FuIGFsc28gYmUgdXNlZCB0b1xuICogbWFyayB2YWx1ZXMgdGhhdCBuZWVkIHNwZWNpYWwgcHJvY2Vzc2luZyBhdCBkb2N1bWVudCByZW5kZXJpbmcgdGltZS5cbiAqXG4gKiBUb2tlbnMgY2FuIGJlIGVtYmVkZGVkIGludG8gc3RyaW5ncyB3aGlsZSByZXRhaW5pbmcgdGhlaXIgb3JpZ2luYWxcbiAqIHNlbWFudGljcy5cbiAqL1xuZXhwb3J0IGNsYXNzIFRva2VuIHtcbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiBvYmogcmVwcmVzZW50cyBhbiB1bnJlc29sdmVkIHZhbHVlXG4gICAqXG4gICAqIE9uZSBvZiB0aGVzZSBtdXN0IGJlIHRydWU6XG4gICAqXG4gICAqIC0gYG9iamAgaXMgYW4gSVJlc29sdmFibGVcbiAgICogLSBgb2JqYCBpcyBhIHN0cmluZyBjb250YWluaW5nIGF0IGxlYXN0IG9uZSBlbmNvZGVkIGBJUmVzb2x2YWJsZWBcbiAgICogLSBgb2JqYCBpcyBlaXRoZXIgYW4gZW5jb2RlZCBudW1iZXIgb3IgbGlzdFxuICAgKlxuICAgKiBUaGlzIGRvZXMgTk9UIHJlY3Vyc2UgaW50byBsaXN0cyBvciBvYmplY3RzIHRvIHNlZSBpZiB0aGV5XG4gICAqIGNvbnRhaW5pbmcgcmVzb2x2YWJsZXMuXG4gICAqXG4gICAqIEBwYXJhbSBvYmogVGhlIG9iamVjdCB0byB0ZXN0LlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBpc1VucmVzb2x2ZWQob2JqOiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdW5yZXNvbHZlZChvYmopO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhIHJldmVyc2libGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgdG9rZW5cbiAgICpcbiAgICogSWYgdGhlIFRva2VuIGlzIGluaXRpYWxpemVkIHdpdGggYSBsaXRlcmFsLCB0aGUgc3RyaW5naWZpZWQgdmFsdWUgb2YgdGhlXG4gICAqIGxpdGVyYWwgaXMgcmV0dXJuZWQuIE90aGVyd2lzZSwgYSBzcGVjaWFsIHF1b3RlZCBzdHJpbmcgcmVwcmVzZW50YXRpb25cbiAgICogb2YgdGhlIFRva2VuIGlzIHJldHVybmVkIHRoYXQgY2FuIGJlIGVtYmVkZGVkIGludG8gb3RoZXIgc3RyaW5ncy5cbiAgICpcbiAgICogU3RyaW5ncyB3aXRoIHF1b3RlZCBUb2tlbnMgaW4gdGhlbSBjYW4gYmUgcmVzdG9yZWQgYmFjayBpbnRvXG4gICAqIGNvbXBsZXggdmFsdWVzIHdpdGggdGhlIFRva2VucyByZXN0b3JlZCBieSBjYWxsaW5nIGByZXNvbHZlKClgXG4gICAqIG9uIHRoZSBzdHJpbmcuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGFzU3RyaW5nKHZhbHVlOiBhbnksIG9wdGlvbnM6IEVuY29kaW5nT3B0aW9ucyA9IHt9KTogc3RyaW5nIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBUb2tlbk1hcC5pbnN0YW5jZSgpLnJlZ2lzdGVyU3RyaW5nKFxuICAgICAgVG9rZW4uYXNBbnkodmFsdWUpLFxuICAgICAgb3B0aW9ucy5kaXNwbGF5SGludFxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGEgcmV2ZXJzaWJsZSBudW1iZXIgcmVwcmVzZW50YXRpb24gb2YgdGhpcyB0b2tlblxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBhc051bWJlcih2YWx1ZTogYW55KTogbnVtYmVyIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBUb2tlbk1hcC5pbnN0YW5jZSgpLnJlZ2lzdGVyTnVtYmVyKFRva2VuLmFzQW55KHZhbHVlKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGEgcmV2ZXJzaWJsZSBsaXN0IHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgdG9rZW5cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgYXNMaXN0KHZhbHVlOiBhbnksIG9wdGlvbnM6IEVuY29kaW5nT3B0aW9ucyA9IHt9KTogc3RyaW5nW10ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5ldmVyeSgoeCkgPT4gdHlwZW9mIHggPT09IFwic3RyaW5nXCIpKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBUb2tlbk1hcC5pbnN0YW5jZSgpLnJlZ2lzdGVyTGlzdChcbiAgICAgIFRva2VuLmFzQW55KHZhbHVlKSxcbiAgICAgIG9wdGlvbnMuZGlzcGxheUhpbnRcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhIHJlc29sdmFibGUgcmVwcmVzZW50YXRpb24gb2YgdGhlIGdpdmVuIHZhbHVlXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGFzQW55KHZhbHVlOiBhbnkpOiBJUmVzb2x2YWJsZSB7XG4gICAgcmV0dXJuIGlzUmVzb2x2YWJsZU9iamVjdCh2YWx1ZSkgPyB2YWx1ZSA6IG5ldyBJbnRyaW5zaWModmFsdWUpO1xuICB9XG5cbiAgLyoqIENvbXBhcmUgdHdvIHN0cmluZ3MgdGhhdCBtaWdodCBjb250YWluIFRva2VucyB3aXRoIGVhY2ggb3RoZXIuICovXG4gIHB1YmxpYyBzdGF0aWMgY29tcGFyZVN0cmluZ3MocG9zc2libGVUb2tlbjE6IHN0cmluZywgcG9zc2libGVUb2tlbjI6IHN0cmluZyk6IFRva2VuQ29tcGFyaXNvbiB7XG4gICAgY29uc3QgZmlyc3RJc1VucmVzb2x2ZWQgPSBUb2tlbi5pc1VucmVzb2x2ZWQocG9zc2libGVUb2tlbjEpO1xuICAgIGNvbnN0IHNlY29uZElzVW5yZXNvbHZlZCA9IFRva2VuLmlzVW5yZXNvbHZlZChwb3NzaWJsZVRva2VuMik7XG5cbiAgICBpZiAoZmlyc3RJc1VucmVzb2x2ZWQgJiYgc2Vjb25kSXNVbnJlc29sdmVkKSB7XG4gICAgICByZXR1cm4gVG9rZW5Db21wYXJpc29uLkJPVEhfVU5SRVNPTFZFRDtcbiAgICB9XG4gICAgaWYgKGZpcnN0SXNVbnJlc29sdmVkIHx8IHNlY29uZElzVW5yZXNvbHZlZCkge1xuICAgICAgcmV0dXJuIFRva2VuQ29tcGFyaXNvbi5PTkVfVU5SRVNPTFZFRDtcbiAgICB9XG5cbiAgICByZXR1cm4gcG9zc2libGVUb2tlbjEgPT09IHBvc3NpYmxlVG9rZW4yID8gVG9rZW5Db21wYXJpc29uLlNBTUUgOiBUb2tlbkNvbXBhcmlzb24uRElGRkVSRU5UO1xuICB9XG5cbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHt9XG59XG5cbi8qKlxuICogTGVzcyBvZnQtbmVlZGVkIGZ1bmN0aW9ucyB0byBtYW5pcHVsYXRlIFRva2Vuc1xuICovXG5leHBvcnQgY2xhc3MgVG9rZW5pemF0aW9uIHtcbiAgLyoqXG4gICAqIFVuLWVuY29kZSBhIHN0cmluZyBwb3RlbnRpYWxseSBjb250YWluaW5nIGVuY29kZWQgdG9rZW5zXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIHJldmVyc2VTdHJpbmcoczogc3RyaW5nKTogVG9rZW5pemVkU3RyaW5nRnJhZ21lbnRzIHtcbiAgICByZXR1cm4gVG9rZW5NYXAuaW5zdGFuY2UoKS5zcGxpdFN0cmluZyhzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbi1lbmNvZGUgYSBUb2tlbml6ZWQgdmFsdWUgZnJvbSBhIG51bWJlclxuICAgKi9cbiAgcHVibGljIHN0YXRpYyByZXZlcnNlTnVtYmVyKG46IG51bWJlcik6IElSZXNvbHZhYmxlIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gVG9rZW5NYXAuaW5zdGFuY2UoKS5sb29rdXBOdW1iZXJUb2tlbihuKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbi1lbmNvZGUgYSBUb2tlbml6ZWQgdmFsdWUgZnJvbSBhIGxpc3RcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgcmV2ZXJzZUxpc3QobDogc3RyaW5nW10pOiBJUmVzb2x2YWJsZSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIFRva2VuTWFwLmluc3RhbmNlKCkubG9va3VwTGlzdChsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNvbHZlcyBhbiBvYmplY3QgYnkgZXZhbHVhdGluZyBhbGwgdG9rZW5zIGFuZCByZW1vdmluZyBhbnkgdW5kZWZpbmVkIG9yIGVtcHR5IG9iamVjdHMgb3IgYXJyYXlzLlxuICAgKiBWYWx1ZXMgY2FuIG9ubHkgYmUgcHJpbWl0aXZlcywgYXJyYXlzIG9yIHRva2Vucy4gT3RoZXIgb2JqZWN0cyAoaS5lLiB3aXRoIG1ldGhvZHMpIHdpbGwgYmUgcmVqZWN0ZWQuXG4gICAqXG4gICAqIEBwYXJhbSBvYmogVGhlIG9iamVjdCB0byByZXNvbHZlLlxuICAgKiBAcGFyYW0gb3B0aW9ucyBQcmVmaXgga2V5IHBhdGggY29tcG9uZW50cyBmb3IgZGlhZ25vc3RpY3MuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIHJlc29sdmUob2JqOiBhbnksIG9wdGlvbnM6IFJlc29sdmVPcHRpb25zKTogYW55IHtcbiAgICByZXR1cm4gcmVzb2x2ZShvYmosIHtcbiAgICAgIHNjb3BlOiBvcHRpb25zLnNjb3BlLFxuICAgICAgcmVzb2x2ZXI6IG9wdGlvbnMucmVzb2x2ZXIsXG4gICAgICBwcmVwYXJpbmc6IG9wdGlvbnMucHJlcGFyaW5nICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLnByZXBhcmluZyA6IGZhbHNlLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB3aGV0aGVyIHRoZSBnaXZlbiBvYmplY3QgaXMgYW4gSVJlc29sdmFibGUgb2JqZWN0XG4gICAqXG4gICAqIFRoaXMgaXMgZGlmZmVyZW50IGZyb20gVG9rZW4uaXNVbnJlc29sdmVkKCkgd2hpY2ggd2lsbCBhbHNvIGNoZWNrIGZvclxuICAgKiBlbmNvZGVkIFRva2Vucywgd2hlcmVhcyB0aGlzIG1ldGhvZCB3aWxsIG9ubHkgZG8gYSB0eXBlIGNoZWNrIG9uIHRoZSBnaXZlblxuICAgKiBvYmplY3QuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGlzUmVzb2x2YWJsZShvYmo6IGFueSk6IG9iaiBpcyBJUmVzb2x2YWJsZSB7XG4gICAgcmV0dXJuIGlzUmVzb2x2YWJsZU9iamVjdChvYmopO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0cmluZ2lmeSBhIG51bWJlciBkaXJlY3RseSBvciBsYXppbHkgaWYgaXQncyBhIFRva2VuLiBJZiBpdCBpcyBhbiBvYmplY3QgKGkuZS4sIHsgUmVmOiAnU29tZUxvZ2ljYWxJZCcgfSksIHJldHVybiBpdCBhcy1pcy5cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgc3RyaW5naWZ5TnVtYmVyKHg6IG51bWJlcikge1xuICAgIC8vIG9ubHkgY29udmVydCBudW1iZXJzIHRvIHN0cmluZ3Mgc28gdGhhdCBSZWZzLCBjb25kaXRpb25zLCBhbmQgb3RoZXIgdGhpbmdzIGRvbid0IGVuZCB1cCBzeW50aGVzaXppbmcgYXMgW29iamVjdCBvYmplY3RdXG5cbiAgICBpZiAoVG9rZW4uaXNVbnJlc29sdmVkKHgpKSB7XG4gICAgICByZXR1cm4gTGF6eS5zdHJpbmdWYWx1ZSh7XG4gICAgICAgIHByb2R1Y2U6IChjb250ZXh0KSA9PiB7XG4gICAgICAgICAgY29uc3QgcmVzb2x2ZWQgPSBjb250ZXh0LnJlc29sdmUoeCk7XG4gICAgICAgICAgcmV0dXJuIHR5cGVvZiByZXNvbHZlZCAhPT0gXCJudW1iZXJcIiA/IHJlc29sdmVkIDogYCR7cmVzb2x2ZWR9YDtcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdHlwZW9mIHggIT09IFwibnVtYmVyXCIgPyB4IDogYCR7eH1gO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY29uc3RydWN0b3IoKSB7fVxufVxuXG4vKipcbiAqIE9wdGlvbnMgdG8gdGhlIHJlc29sdmUoKSBvcGVyYXRpb25cbiAqXG4gKiBOT1QgdGhlIHNhbWUgYXMgdGhlIFJlc29sdmVDb250ZXh0OyBSZXNvbHZlQ29udGV4dCBpcyBleHBvc2VkIHRvIFRva2VuXG4gKiBpbXBsZW1lbnRvcnMgYW5kIHJlc29sdXRpb24gaG9va3MsIHdoZXJlYXMgdGhpcyBzdHJ1Y3QgaXMganVzdCB0byBidW5kbGVcbiAqIGEgbnVtYmVyIG9mIHRoaW5ncyB0aGF0IHdvdWxkIG90aGVyd2lzZSBiZSBhcmd1bWVudHMgdG8gcmVzb2x2ZSgpIGluIGFcbiAqIHJlYWRhYmxlIHdheS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSZXNvbHZlT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBUaGUgc2NvcGUgZnJvbSB3aGljaCByZXNvbHV0aW9uIGlzIHBlcmZvcm1lZFxuICAgKi9cbiAgcmVhZG9ubHkgc2NvcGU6IElDb25zdHJ1Y3Q7XG5cbiAgLyoqXG4gICAqIFRoZSByZXNvbHZlciB0byBhcHBseSB0byBhbnkgcmVzb2x2YWJsZSB0b2tlbnMgZm91bmRcbiAgICovXG4gIHJlYWRvbmx5IHJlc29sdmVyOiBJVG9rZW5SZXNvbHZlcjtcblxuICAvKipcbiAgICogV2hldGhlciB0aGUgcmVzb2x1dGlvbiBpcyBiZWluZyBleGVjdXRlZCBkdXJpbmcgdGhlIHByZXBhcmUgcGhhc2Ugb3Igbm90LlxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgcmVhZG9ubHkgcHJlcGFyaW5nPzogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIHRvIHN0cmluZyBlbmNvZGluZ3NcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBFbmNvZGluZ09wdGlvbnMge1xuICAvKipcbiAgICogQSBoaW50IGZvciB0aGUgVG9rZW4ncyBwdXJwb3NlIHdoZW4gc3RyaW5naWZ5aW5nIGl0XG4gICAqL1xuICByZWFkb25seSBkaXNwbGF5SGludD86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzb2x2YWJsZU9iamVjdCh4OiBhbnkpOiB4IGlzIElSZXNvbHZhYmxlIHtcbiAgcmV0dXJuIHR5cGVvZiB4ID09PSBcIm9iamVjdFwiICYmIHggIT09IG51bGwgJiYgdHlwZW9mIHgucmVzb2x2ZSA9PT0gXCJmdW5jdGlvblwiO1xufVxuXG4vKipcbiAqIENhbGwgdGhlIGdpdmVuIGZ1bmN0aW9uIG9ubHkgaWYgYWxsIGdpdmVuIHZhbHVlcyBhcmUgcmVzb2x2ZWRcbiAqXG4gKiBFeHBvcnRlZCBhcyBhIGZ1bmN0aW9uIHNpbmNlIGl0IHdpbGwgYmUgdXNlZCBieSBUeXBlU2NyaXB0IG1vZHVsZXMsIGJ1dFxuICogY2FuJ3QgYmUgZXhwb3NlZCB2aWEgSlNJSSBiZWNhdXNlIG9mIHRoZSBnZW5lcmljcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHdpdGhSZXNvbHZlZDxBPihhOiBBLCBmbjogKGE6IEEpID0+IHZvaWQpOiB2b2lkO1xuZXhwb3J0IGZ1bmN0aW9uIHdpdGhSZXNvbHZlZDxBLCBCPihhOiBBLCBiOiBCLCBmbjogKGE6IEEsIGI6IEIpID0+IHZvaWQpOiB2b2lkO1xuZXhwb3J0IGZ1bmN0aW9uIHdpdGhSZXNvbHZlZDxBLCBCLCBDPihcbiAgYTogQSxcbiAgYjogQixcbiAgYzogQyxcbiAgZm46IChhOiBBLCBiOiBCLCBjOiBDKSA9PiB2b2lkXG4pOiB2b2lkO1xuZXhwb3J0IGZ1bmN0aW9uIHdpdGhSZXNvbHZlZCguLi5hcmdzOiBhbnlbXSkge1xuICBpZiAoYXJncy5sZW5ndGggPCAyKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGFyZ0FycmF5ID0gYXJncy5zbGljZSgwLCBhcmdzLmxlbmd0aCAtIDEpO1xuICBpZiAoYXJnQXJyYXkuc29tZShUb2tlbi5pc1VucmVzb2x2ZWQpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGFyZ3NbYXJncy5sZW5ndGggLSAxXS5hcHBseShhcmd1bWVudHMsIGFyZ0FycmF5KTtcbn1cbiJdfQ==