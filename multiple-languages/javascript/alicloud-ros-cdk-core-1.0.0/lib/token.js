"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withResolved = exports.isResolvableObject = exports.Tokenization = exports.Token = void 0;
const encoding_1 = require("./private/encoding");
const intrinsic_1 = require("./private/intrinsic");
const resolve_1 = require("./private/resolve");
const token_map_1 = require("./private/token-map");
const lazy_1 = require("./lazy");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0b2tlbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxpREFBZ0Q7QUFDaEQsbURBQWdEO0FBQ2hELCtDQUE0QztBQUM1QyxtREFBK0M7QUFDL0MsaUNBQThCO0FBSTlCOzs7Ozs7Ozs7R0FTRztBQUNILE1BQWEsS0FBSztJQUNoQjs7Ozs7Ozs7Ozs7OztPQWFHO0lBQ0ksTUFBTSxDQUFDLFlBQVksQ0FBQyxHQUFRO1FBQ2pDLE9BQU8scUJBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRUQ7Ozs7Ozs7Ozs7T0FVRztJQUNJLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBVSxFQUFFLFVBQTJCLEVBQUU7UUFDOUQsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7WUFDN0IsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELE9BQU8sb0JBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxjQUFjLENBQ3ZDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQ2xCLE9BQU8sQ0FBQyxXQUFXLENBQ3BCLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSSxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQVU7UUFDL0IsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7WUFDN0IsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELE9BQU8sb0JBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRDs7T0FFRztJQUNJLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBVSxFQUFFLFVBQTJCLEVBQUU7UUFDNUQsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLFFBQVEsQ0FBQyxFQUFFO1lBQ3JFLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxPQUFPLG9CQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsWUFBWSxDQUNyQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUNsQixPQUFPLENBQUMsV0FBVyxDQUNwQixDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0ksTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFVO1FBQzVCLE9BQU8sa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxxQkFBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFRCxnQkFBdUIsQ0FBQztDQUN6QjtBQXZFRCxzQkF1RUM7QUFFRDs7R0FFRztBQUNILE1BQWEsWUFBWTtJQUN2Qjs7T0FFRztJQUNJLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBUztRQUNuQyxPQUFPLG9CQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRDs7T0FFRztJQUNJLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBUztRQUNuQyxPQUFPLG9CQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVEOztPQUVHO0lBQ0ksTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFXO1FBQ25DLE9BQU8sb0JBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNJLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBUSxFQUFFLE9BQXVCO1FBQ3JELE9BQU8saUJBQU8sQ0FBQyxHQUFHLEVBQUU7WUFDbEIsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLO1lBQ3BCLFFBQVEsRUFBRSxPQUFPLENBQUMsUUFBUTtZQUMxQixTQUFTLEVBQUUsT0FBTyxDQUFDLFNBQVMsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUs7U0FDdkUsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNJLE1BQU0sQ0FBQyxZQUFZLENBQUMsR0FBUTtRQUNqQyxPQUFPLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRDs7T0FFRztJQUNJLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBUztRQUNyQywwSEFBMEg7UUFFMUgsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3pCLE9BQU8sV0FBSSxDQUFDLFdBQVcsQ0FBQztnQkFDdEIsT0FBTyxFQUFFLENBQUMsT0FBTyxFQUFFLEVBQUU7b0JBQ25CLE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3BDLE9BQU8sT0FBTyxRQUFRLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxFQUFFLENBQUM7Z0JBQ2pFLENBQUM7YUFDRixDQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsT0FBTyxPQUFPLENBQUMsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztTQUMzQztJQUNILENBQUM7SUFFRCxnQkFBdUIsQ0FBQztDQUN6QjtBQW5FRCxvQ0FtRUM7QUFzQ0QsU0FBZ0Isa0JBQWtCLENBQUMsQ0FBTTtJQUN2QyxPQUFPLE9BQU8sQ0FBQyxLQUFLLFFBQVEsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sS0FBSyxVQUFVLENBQUM7QUFDaEYsQ0FBQztBQUZELGdEQUVDO0FBZ0JELFNBQWdCLFlBQVksQ0FBQyxHQUFHLElBQVc7SUFDekMsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtRQUNuQixPQUFPO0tBQ1I7SUFDRCxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2hELElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEVBQUU7UUFDckMsT0FBTztLQUNSO0lBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQztBQUNuRCxDQUFDO0FBVEQsb0NBU0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJQ29uc3RydWN0IH0gZnJvbSBcIi4vY29uc3RydWN0LWNvbXBhdFwiO1xuaW1wb3J0IHsgdW5yZXNvbHZlZCB9IGZyb20gXCIuL3ByaXZhdGUvZW5jb2RpbmdcIjtcbmltcG9ydCB7IEludHJpbnNpYyB9IGZyb20gXCIuL3ByaXZhdGUvaW50cmluc2ljXCI7XG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSBcIi4vcHJpdmF0ZS9yZXNvbHZlXCI7XG5pbXBvcnQgeyBUb2tlbk1hcCB9IGZyb20gXCIuL3ByaXZhdGUvdG9rZW4tbWFwXCI7XG5pbXBvcnQgeyBMYXp5IH0gZnJvbSBcIi4vbGF6eVwiO1xuaW1wb3J0IHsgSVJlc29sdmFibGUsIElUb2tlblJlc29sdmVyIH0gZnJvbSBcIi4vcmVzb2x2YWJsZVwiO1xuaW1wb3J0IHsgVG9rZW5pemVkU3RyaW5nRnJhZ21lbnRzIH0gZnJvbSBcIi4vc3RyaW5nLWZyYWdtZW50c1wiO1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBzcGVjaWFsIG9yIGxhemlseS1ldmFsdWF0ZWQgdmFsdWUuXG4gKlxuICogQ2FuIGJlIHVzZWQgdG8gZGVsYXkgZXZhbHVhdGlvbiBvZiBhIGNlcnRhaW4gdmFsdWUgaW4gY2FzZSwgZm9yIGV4YW1wbGUsXG4gKiB0aGF0IGl0IHJlcXVpcmVzIHNvbWUgY29udGV4dCBvciBsYXRlLWJvdW5kIGRhdGEuIENhbiBhbHNvIGJlIHVzZWQgdG9cbiAqIG1hcmsgdmFsdWVzIHRoYXQgbmVlZCBzcGVjaWFsIHByb2Nlc3NpbmcgYXQgZG9jdW1lbnQgcmVuZGVyaW5nIHRpbWUuXG4gKlxuICogVG9rZW5zIGNhbiBiZSBlbWJlZGRlZCBpbnRvIHN0cmluZ3Mgd2hpbGUgcmV0YWluaW5nIHRoZWlyIG9yaWdpbmFsXG4gKiBzZW1hbnRpY3MuXG4gKi9cbmV4cG9ydCBjbGFzcyBUb2tlbiB7XG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgb2JqIHJlcHJlc2VudHMgYW4gdW5yZXNvbHZlZCB2YWx1ZVxuICAgKlxuICAgKiBPbmUgb2YgdGhlc2UgbXVzdCBiZSB0cnVlOlxuICAgKlxuICAgKiAtIGBvYmpgIGlzIGFuIElSZXNvbHZhYmxlXG4gICAqIC0gYG9iamAgaXMgYSBzdHJpbmcgY29udGFpbmluZyBhdCBsZWFzdCBvbmUgZW5jb2RlZCBgSVJlc29sdmFibGVgXG4gICAqIC0gYG9iamAgaXMgZWl0aGVyIGFuIGVuY29kZWQgbnVtYmVyIG9yIGxpc3RcbiAgICpcbiAgICogVGhpcyBkb2VzIE5PVCByZWN1cnNlIGludG8gbGlzdHMgb3Igb2JqZWN0cyB0byBzZWUgaWYgdGhleVxuICAgKiBjb250YWluaW5nIHJlc29sdmFibGVzLlxuICAgKlxuICAgKiBAcGFyYW0gb2JqIFRoZSBvYmplY3QgdG8gdGVzdC5cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgaXNVbnJlc29sdmVkKG9iajogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHVucmVzb2x2ZWQob2JqKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYSByZXZlcnNpYmxlIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIHRva2VuXG4gICAqXG4gICAqIElmIHRoZSBUb2tlbiBpcyBpbml0aWFsaXplZCB3aXRoIGEgbGl0ZXJhbCwgdGhlIHN0cmluZ2lmaWVkIHZhbHVlIG9mIHRoZVxuICAgKiBsaXRlcmFsIGlzIHJldHVybmVkLiBPdGhlcndpc2UsIGEgc3BlY2lhbCBxdW90ZWQgc3RyaW5nIHJlcHJlc2VudGF0aW9uXG4gICAqIG9mIHRoZSBUb2tlbiBpcyByZXR1cm5lZCB0aGF0IGNhbiBiZSBlbWJlZGRlZCBpbnRvIG90aGVyIHN0cmluZ3MuXG4gICAqXG4gICAqIFN0cmluZ3Mgd2l0aCBxdW90ZWQgVG9rZW5zIGluIHRoZW0gY2FuIGJlIHJlc3RvcmVkIGJhY2sgaW50b1xuICAgKiBjb21wbGV4IHZhbHVlcyB3aXRoIHRoZSBUb2tlbnMgcmVzdG9yZWQgYnkgY2FsbGluZyBgcmVzb2x2ZSgpYFxuICAgKiBvbiB0aGUgc3RyaW5nLlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBhc1N0cmluZyh2YWx1ZTogYW55LCBvcHRpb25zOiBFbmNvZGluZ09wdGlvbnMgPSB7fSk6IHN0cmluZyB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gVG9rZW5NYXAuaW5zdGFuY2UoKS5yZWdpc3RlclN0cmluZyhcbiAgICAgIFRva2VuLmFzQW55KHZhbHVlKSxcbiAgICAgIG9wdGlvbnMuZGlzcGxheUhpbnRcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhIHJldmVyc2libGUgbnVtYmVyIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgdG9rZW5cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgYXNOdW1iZXIodmFsdWU6IGFueSk6IG51bWJlciB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gVG9rZW5NYXAuaW5zdGFuY2UoKS5yZWdpc3Rlck51bWJlcihUb2tlbi5hc0FueSh2YWx1ZSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhIHJldmVyc2libGUgbGlzdCByZXByZXNlbnRhdGlvbiBvZiB0aGlzIHRva2VuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGFzTGlzdCh2YWx1ZTogYW55LCBvcHRpb25zOiBFbmNvZGluZ09wdGlvbnMgPSB7fSk6IHN0cmluZ1tdIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUuZXZlcnkoKHgpID0+IHR5cGVvZiB4ID09PSBcInN0cmluZ1wiKSkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gVG9rZW5NYXAuaW5zdGFuY2UoKS5yZWdpc3Rlckxpc3QoXG4gICAgICBUb2tlbi5hc0FueSh2YWx1ZSksXG4gICAgICBvcHRpb25zLmRpc3BsYXlIaW50XG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYSByZXNvbHZhYmxlIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBnaXZlbiB2YWx1ZVxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBhc0FueSh2YWx1ZTogYW55KTogSVJlc29sdmFibGUge1xuICAgIHJldHVybiBpc1Jlc29sdmFibGVPYmplY3QodmFsdWUpID8gdmFsdWUgOiBuZXcgSW50cmluc2ljKHZhbHVlKTtcbiAgfVxuXG4gIHByaXZhdGUgY29uc3RydWN0b3IoKSB7fVxufVxuXG4vKipcbiAqIExlc3Mgb2Z0LW5lZWRlZCBmdW5jdGlvbnMgdG8gbWFuaXB1bGF0ZSBUb2tlbnNcbiAqL1xuZXhwb3J0IGNsYXNzIFRva2VuaXphdGlvbiB7XG4gIC8qKlxuICAgKiBVbi1lbmNvZGUgYSBzdHJpbmcgcG90ZW50aWFsbHkgY29udGFpbmluZyBlbmNvZGVkIHRva2Vuc1xuICAgKi9cbiAgcHVibGljIHN0YXRpYyByZXZlcnNlU3RyaW5nKHM6IHN0cmluZyk6IFRva2VuaXplZFN0cmluZ0ZyYWdtZW50cyB7XG4gICAgcmV0dXJuIFRva2VuTWFwLmluc3RhbmNlKCkuc3BsaXRTdHJpbmcocyk7XG4gIH1cblxuICAvKipcbiAgICogVW4tZW5jb2RlIGEgVG9rZW5pemVkIHZhbHVlIGZyb20gYSBudW1iZXJcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgcmV2ZXJzZU51bWJlcihuOiBudW1iZXIpOiBJUmVzb2x2YWJsZSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIFRva2VuTWFwLmluc3RhbmNlKCkubG9va3VwTnVtYmVyVG9rZW4obik7XG4gIH1cblxuICAvKipcbiAgICogVW4tZW5jb2RlIGEgVG9rZW5pemVkIHZhbHVlIGZyb20gYSBsaXN0XG4gICAqL1xuICBwdWJsaWMgc3RhdGljIHJldmVyc2VMaXN0KGw6IHN0cmluZ1tdKTogSVJlc29sdmFibGUgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiBUb2tlbk1hcC5pbnN0YW5jZSgpLmxvb2t1cExpc3QobCk7XG4gIH1cblxuICAvKipcbiAgICogUmVzb2x2ZXMgYW4gb2JqZWN0IGJ5IGV2YWx1YXRpbmcgYWxsIHRva2VucyBhbmQgcmVtb3ZpbmcgYW55IHVuZGVmaW5lZCBvciBlbXB0eSBvYmplY3RzIG9yIGFycmF5cy5cbiAgICogVmFsdWVzIGNhbiBvbmx5IGJlIHByaW1pdGl2ZXMsIGFycmF5cyBvciB0b2tlbnMuIE90aGVyIG9iamVjdHMgKGkuZS4gd2l0aCBtZXRob2RzKSB3aWxsIGJlIHJlamVjdGVkLlxuICAgKlxuICAgKiBAcGFyYW0gb2JqIFRoZSBvYmplY3QgdG8gcmVzb2x2ZS5cbiAgICogQHBhcmFtIG9wdGlvbnMgUHJlZml4IGtleSBwYXRoIGNvbXBvbmVudHMgZm9yIGRpYWdub3N0aWNzLlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyByZXNvbHZlKG9iajogYW55LCBvcHRpb25zOiBSZXNvbHZlT3B0aW9ucyk6IGFueSB7XG4gICAgcmV0dXJuIHJlc29sdmUob2JqLCB7XG4gICAgICBzY29wZTogb3B0aW9ucy5zY29wZSxcbiAgICAgIHJlc29sdmVyOiBvcHRpb25zLnJlc29sdmVyLFxuICAgICAgcHJlcGFyaW5nOiBvcHRpb25zLnByZXBhcmluZyAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5wcmVwYXJpbmcgOiBmYWxzZSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gd2hldGhlciB0aGUgZ2l2ZW4gb2JqZWN0IGlzIGFuIElSZXNvbHZhYmxlIG9iamVjdFxuICAgKlxuICAgKiBUaGlzIGlzIGRpZmZlcmVudCBmcm9tIFRva2VuLmlzVW5yZXNvbHZlZCgpIHdoaWNoIHdpbGwgYWxzbyBjaGVjayBmb3JcbiAgICogZW5jb2RlZCBUb2tlbnMsIHdoZXJlYXMgdGhpcyBtZXRob2Qgd2lsbCBvbmx5IGRvIGEgdHlwZSBjaGVjayBvbiB0aGUgZ2l2ZW5cbiAgICogb2JqZWN0LlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBpc1Jlc29sdmFibGUob2JqOiBhbnkpOiBvYmogaXMgSVJlc29sdmFibGUge1xuICAgIHJldHVybiBpc1Jlc29sdmFibGVPYmplY3Qob2JqKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdHJpbmdpZnkgYSBudW1iZXIgZGlyZWN0bHkgb3IgbGF6aWx5IGlmIGl0J3MgYSBUb2tlbi4gSWYgaXQgaXMgYW4gb2JqZWN0IChpLmUuLCB7IFJlZjogJ1NvbWVMb2dpY2FsSWQnIH0pLCByZXR1cm4gaXQgYXMtaXMuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIHN0cmluZ2lmeU51bWJlcih4OiBudW1iZXIpIHtcbiAgICAvLyBvbmx5IGNvbnZlcnQgbnVtYmVycyB0byBzdHJpbmdzIHNvIHRoYXQgUmVmcywgY29uZGl0aW9ucywgYW5kIG90aGVyIHRoaW5ncyBkb24ndCBlbmQgdXAgc3ludGhlc2l6aW5nIGFzIFtvYmplY3Qgb2JqZWN0XVxuXG4gICAgaWYgKFRva2VuLmlzVW5yZXNvbHZlZCh4KSkge1xuICAgICAgcmV0dXJuIExhenkuc3RyaW5nVmFsdWUoe1xuICAgICAgICBwcm9kdWNlOiAoY29udGV4dCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHJlc29sdmVkID0gY29udGV4dC5yZXNvbHZlKHgpO1xuICAgICAgICAgIHJldHVybiB0eXBlb2YgcmVzb2x2ZWQgIT09IFwibnVtYmVyXCIgPyByZXNvbHZlZCA6IGAke3Jlc29sdmVkfWA7XG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHR5cGVvZiB4ICE9PSBcIm51bWJlclwiID8geCA6IGAke3h9YDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge31cbn1cblxuLyoqXG4gKiBPcHRpb25zIHRvIHRoZSByZXNvbHZlKCkgb3BlcmF0aW9uXG4gKlxuICogTk9UIHRoZSBzYW1lIGFzIHRoZSBSZXNvbHZlQ29udGV4dDsgUmVzb2x2ZUNvbnRleHQgaXMgZXhwb3NlZCB0byBUb2tlblxuICogaW1wbGVtZW50b3JzIGFuZCByZXNvbHV0aW9uIGhvb2tzLCB3aGVyZWFzIHRoaXMgc3RydWN0IGlzIGp1c3QgdG8gYnVuZGxlXG4gKiBhIG51bWJlciBvZiB0aGluZ3MgdGhhdCB3b3VsZCBvdGhlcndpc2UgYmUgYXJndW1lbnRzIHRvIHJlc29sdmUoKSBpbiBhXG4gKiByZWFkYWJsZSB3YXkuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUmVzb2x2ZU9wdGlvbnMge1xuICAvKipcbiAgICogVGhlIHNjb3BlIGZyb20gd2hpY2ggcmVzb2x1dGlvbiBpcyBwZXJmb3JtZWRcbiAgICovXG4gIHJlYWRvbmx5IHNjb3BlOiBJQ29uc3RydWN0O1xuXG4gIC8qKlxuICAgKiBUaGUgcmVzb2x2ZXIgdG8gYXBwbHkgdG8gYW55IHJlc29sdmFibGUgdG9rZW5zIGZvdW5kXG4gICAqL1xuICByZWFkb25seSByZXNvbHZlcjogSVRva2VuUmVzb2x2ZXI7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhlIHJlc29sdXRpb24gaXMgYmVpbmcgZXhlY3V0ZWQgZHVyaW5nIHRoZSBwcmVwYXJlIHBoYXNlIG9yIG5vdC5cbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICovXG4gIHJlYWRvbmx5IHByZXBhcmluZz86IGJvb2xlYW47XG59XG5cbi8qKlxuICogUHJvcGVydGllcyB0byBzdHJpbmcgZW5jb2RpbmdzXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRW5jb2RpbmdPcHRpb25zIHtcbiAgLyoqXG4gICAqIEEgaGludCBmb3IgdGhlIFRva2VuJ3MgcHVycG9zZSB3aGVuIHN0cmluZ2lmeWluZyBpdFxuICAgKi9cbiAgcmVhZG9ubHkgZGlzcGxheUhpbnQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc29sdmFibGVPYmplY3QoeDogYW55KTogeCBpcyBJUmVzb2x2YWJsZSB7XG4gIHJldHVybiB0eXBlb2YgeCA9PT0gXCJvYmplY3RcIiAmJiB4ICE9PSBudWxsICYmIHR5cGVvZiB4LnJlc29sdmUgPT09IFwiZnVuY3Rpb25cIjtcbn1cblxuLyoqXG4gKiBDYWxsIHRoZSBnaXZlbiBmdW5jdGlvbiBvbmx5IGlmIGFsbCBnaXZlbiB2YWx1ZXMgYXJlIHJlc29sdmVkXG4gKlxuICogRXhwb3J0ZWQgYXMgYSBmdW5jdGlvbiBzaW5jZSBpdCB3aWxsIGJlIHVzZWQgYnkgVHlwZVNjcmlwdCBtb2R1bGVzLCBidXRcbiAqIGNhbid0IGJlIGV4cG9zZWQgdmlhIEpTSUkgYmVjYXVzZSBvZiB0aGUgZ2VuZXJpY3MuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB3aXRoUmVzb2x2ZWQ8QT4oYTogQSwgZm46IChhOiBBKSA9PiB2b2lkKTogdm9pZDtcbmV4cG9ydCBmdW5jdGlvbiB3aXRoUmVzb2x2ZWQ8QSwgQj4oYTogQSwgYjogQiwgZm46IChhOiBBLCBiOiBCKSA9PiB2b2lkKTogdm9pZDtcbmV4cG9ydCBmdW5jdGlvbiB3aXRoUmVzb2x2ZWQ8QSwgQiwgQz4oXG4gIGE6IEEsXG4gIGI6IEIsXG4gIGM6IEMsXG4gIGZuOiAoYTogQSwgYjogQiwgYzogQykgPT4gdm9pZFxuKTogdm9pZDtcbmV4cG9ydCBmdW5jdGlvbiB3aXRoUmVzb2x2ZWQoLi4uYXJnczogYW55W10pIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgMikge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBhcmdBcnJheSA9IGFyZ3Muc2xpY2UoMCwgYXJncy5sZW5ndGggLSAxKTtcbiAgaWYgKGFyZ0FycmF5LnNvbWUoVG9rZW4uaXNVbnJlc29sdmVkKSkge1xuICAgIHJldHVybjtcbiAgfVxuICBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0uYXBwbHkoYXJndW1lbnRzLCBhcmdBcnJheSk7XG59XG4iXX0=