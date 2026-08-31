"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RememberingTokenResolver = exports.findTokens = exports.resolve = void 0;
// import { IConstruct } from '../construct-compat';
const encoding_1 = require("./encoding");
const token_map_1 = require("./token-map");
const resolvable_1 = require("../resolvable");
// This file should not be exported to consumers, resolving should happen through Construct.resolve()
const tokenMap = token_map_1.TokenMap.instance();
/**
 * Resolves an object by evaluating all tokens and removing any undefined or empty objects or arrays.
 * Values can only be primitives, arrays or tokens. Other objects (i.e. with methods) will be rejected.
 *
 * @param obj The object to resolve.
 * @param prefix Prefix key path components for diagnostics.
 */
function resolve(obj, options) {
    const prefix = options.prefix || [];
    const pathName = "/" + prefix.join("/");
    /**
     * Make a new resolution context
     */
    function makeContext(appendPath) {
        const newPrefix = appendPath !== undefined ? prefix.concat([appendPath]) : options.prefix;
        let postProcessor;
        const context = {
            preparing: options.preparing,
            scope: options.scope,
            registerPostProcessor(pp) {
                postProcessor = pp;
            },
            resolve(x) {
                return resolve(x, { ...options, prefix: newPrefix });
            },
        };
        return [
            context,
            {
                postProcess(x) {
                    return postProcessor ? postProcessor.postProcess(x, context) : x;
                },
            },
        ];
    }
    // protect against cyclic references by limiting depth.
    if (prefix.length > 200) {
        throw new Error("Unable to resolve object tree with circular reference. Path: " + pathName);
    }
    //
    // undefined
    //
    if (typeof obj === "undefined") {
        return undefined;
    }
    //
    // null
    //
    if (obj === null) {
        return null;
    }
    //
    // functions - not supported (only tokens are supported)
    //
    if (typeof obj === "function") {
        throw new Error(`Trying to resolve a non-data object. Only token are supported for lazy evaluation. Path: ${pathName}. Object: ${obj}`);
    }
    //
    // string - potentially replace all stringified Tokens
    //
    if (typeof obj === "string") {
        const str = encoding_1.TokenString.forString(obj);
        if (str.test()) {
            const fragments = str.split(tokenMap.lookupToken.bind(tokenMap));
            return options.resolver.resolveString(fragments, makeContext()[0]);
        }
        return obj;
    }
    //
    // number - potentially decode Tokenized number
    //
    if (typeof obj === "number") {
        return resolveNumberToken(obj, makeContext()[0]);
    }
    //
    // primitives - as-is
    //
    if (typeof obj !== "object" || obj instanceof Date) {
        return obj;
    }
    //
    // arrays - resolve all values, remove undefined and remove empty arrays
    //
    if (Array.isArray(obj)) {
        if ((0, encoding_1.containsListTokenElement)(obj)) {
            return options.resolver.resolveList(obj, makeContext()[0]);
        }
        const arr = obj
            .map((x, i) => makeContext(`${i}`)[0].resolve(x))
            .filter((x) => typeof x !== "undefined");
        return arr;
    }
    //
    // tokens - invoke 'resolve' and continue to resolve recursively
    //
    if ((0, encoding_1.unresolved)(obj)) {
        const [context, postProcessor] = makeContext();
        return options.resolver.resolveToken(obj, context, postProcessor);
    }
    //
    // objects - deep-resolve all values
    //
    // Must not be a Construct at this point, otherwise you probably made a typo
    // mistake somewhere and resolve will get into an infinite loop recursing into
    // child.parent <---> parent.children
    if (isConstruct(obj)) {
        throw new Error("Trying to resolve() a Construct at " + pathName);
    }
    const result = {};
    for (const key of Object.keys(obj)) {
        const resolvedKey = makeContext()[0].resolve(key);
        if (typeof resolvedKey !== "string") {
            throw new Error(`"${key}" is used as the key in a map so must resolve to a string, but it resolves to: ${JSON.stringify(resolvedKey)}. Consider using "RosJson" to delay resolution to deployment-time`);
        }
        const value = makeContext(key)[0].resolve(obj[key]);
        // skip undefined
        if (typeof value === "undefined") {
            continue;
        }
        result[resolvedKey] = value;
    }
    return result;
}
exports.resolve = resolve;
/**
 * Find all Tokens that are used in the given structure
 */
function findTokens(scope, fn) {
    const resolver = new RememberingTokenResolver(new resolvable_1.StringConcat());
    resolve(fn(), { scope, prefix: [], resolver, preparing: true });
    return resolver.tokens;
}
exports.findTokens = findTokens;
/**
 * Remember all Tokens encountered while resolving
 */
class RememberingTokenResolver extends resolvable_1.DefaultTokenResolver {
    constructor() {
        super(...arguments);
        this.tokensSeen = new Set();
    }
    resolveToken(t, context, postProcessor) {
        this.tokensSeen.add(t);
        return super.resolveToken(t, context, postProcessor);
    }
    resolveString(s, context) {
        const ret = super.resolveString(s, context);
        return ret;
    }
    get tokens() {
        return Array.from(this.tokensSeen);
    }
}
exports.RememberingTokenResolver = RememberingTokenResolver;
/**
 * Determine whether an object is a Construct
 *
 * Not in 'construct.ts' because that would lead to a dependency cycle via 'uniqueid.ts',
 * and this is a best-effort protection against a common programming mistake anyway.
 */
function isConstruct(x) {
    return x._children !== undefined && x._metadata !== undefined;
}
function resolveNumberToken(x, context) {
    const token = token_map_1.TokenMap.instance().lookupNumberToken(x);
    if (token === undefined) {
        return x;
    }
    return context.resolve(token);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb2x2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlc29sdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsb0RBQW9EO0FBQ3BELHlDQUErRTtBQUMvRSwyQ0FBdUM7QUFFdkMsOENBT3VCO0FBQ3ZCLHFHQUFxRztBQUVyRyxNQUFNLFFBQVEsR0FBRyxvQkFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBaUJyQzs7Ozs7O0dBTUc7QUFDSCxTQUFnQixPQUFPLENBQUMsR0FBUSxFQUFFLE9BQXdCO0lBQ3hELE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDO0lBQ3BDLE1BQU0sUUFBUSxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRXhDOztPQUVHO0lBQ0gsU0FBUyxXQUFXLENBQUMsVUFBbUI7UUFDdEMsTUFBTSxTQUFTLEdBQ2IsVUFBVSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7UUFFMUUsSUFBSSxhQUF5QyxDQUFDO1FBRTlDLE1BQU0sT0FBTyxHQUFvQjtZQUMvQixTQUFTLEVBQUUsT0FBTyxDQUFDLFNBQVM7WUFDNUIsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLO1lBQ3BCLHFCQUFxQixDQUFDLEVBQUU7Z0JBQ3RCLGFBQWEsR0FBRyxFQUFFLENBQUM7WUFDckIsQ0FBQztZQUNELE9BQU8sQ0FBQyxDQUFNO2dCQUNaLE9BQU8sT0FBTyxDQUFDLENBQUMsRUFBRSxFQUFFLEdBQUcsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO1lBQ3ZELENBQUM7U0FDRixDQUFDO1FBRUYsT0FBTztZQUNMLE9BQU87WUFDUDtnQkFDRSxXQUFXLENBQUMsQ0FBQztvQkFDWCxPQUFPLGFBQWEsQ0FB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Q0FBQyxDQUFDO0tBQ1Y7SUFDRCxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDaEMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElDb25zdHJ1Y3QgfSBmcm9tIFwiLi4vY29uc3RydWN0LWNvbXBhdFwiO1xuXG4vLyBpbXBvcnQgeyBJQ29uc3RydWN0IH0gZnJvbSAnLi4vY29uc3RydWN0LWNvbXBhdCc7XG5pbXBvcnQgeyBjb250YWluc0xpc3RUb2tlbkVsZW1lbnQsIFRva2VuU3RyaW5nLCB1bnJlc29sdmVkIH0gZnJvbSBcIi4vZW5jb2RpbmdcIjtcbmltcG9ydCB7IFRva2VuTWFwIH0gZnJvbSBcIi4vdG9rZW4tbWFwXCI7XG5pbXBvcnQgeyBUb2tlbml6ZWRTdHJpbmdGcmFnbWVudHMgfSBmcm9tIFwiLi4vc3RyaW5nLWZyYWdtZW50c1wiO1xuaW1wb3J0IHtcbiAgSVJlc29sdmFibGUsXG4gIElUb2tlblJlc29sdmVyLFxuICBEZWZhdWx0VG9rZW5SZXNvbHZlcixcbiAgSVJlc29sdmVDb250ZXh0LFxuICBTdHJpbmdDb25jYXQsXG4gIElQb3N0UHJvY2Vzc29yLFxufSBmcm9tIFwiLi4vcmVzb2x2YWJsZVwiO1xuLy8gVGhpcyBmaWxlIHNob3VsZCBub3QgYmUgZXhwb3J0ZWQgdG8gY29uc3VtZXJzLCByZXNvbHZpbmcgc2hvdWxkIGhhcHBlbiB0aHJvdWdoIENvbnN0cnVjdC5yZXNvbHZlKClcblxuY29uc3QgdG9rZW5NYXAgPSBUb2tlbk1hcC5pbnN0YW5jZSgpO1xuXG4vKipcbiAqIE9wdGlvbnMgdG8gdGhlIHJlc29sdmUoKSBvcGVyYXRpb25cbiAqXG4gKiBOT1QgdGhlIHNhbWUgYXMgdGhlIFJlc29sdmVDb250ZXh0OyBSZXNvbHZlQ29udGV4dCBpcyBleHBvc2VkIHRvIFRva2VuXG4gKiBpbXBsZW1lbnRvcnMgYW5kIHJlc29sdXRpb24gaG9va3MsIHdoZXJlYXMgdGhpcyBzdHJ1Y3QgaXMganVzdCB0byBidW5kbGVcbiAqIGEgbnVtYmVyIG9mIHRoaW5ncyB0aGF0IHdvdWxkIG90aGVyd2lzZSBiZSBhcmd1bWVudHMgdG8gcmVzb2x2ZSgpIGluIGFcbiAqIHJlYWRhYmxlIHdheS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJUmVzb2x2ZU9wdGlvbnMge1xuICBzY29wZTogSUNvbnN0cnVjdDtcbiAgcHJlcGFyaW5nOiBib29sZWFuO1xuICByZXNvbHZlcjogSVRva2VuUmVzb2x2ZXI7XG4gIHByZWZpeD86IHN0cmluZ1tdO1xufVxuXG4vKipcbiAqIFJlc29sdmVzIGFuIG9iamVjdCBieSBldmFsdWF0aW5nIGFsbCB0b2tlbnMgYW5kIHJlbW92aW5nIGFueSB1bmRlZmluZWQgb3IgZW1wdHkgb2JqZWN0cyBvciBhcnJheXMuXG4gKiBWYWx1ZXMgY2FuIG9ubHkgYmUgcHJpbWl0aXZlcywgYXJyYXlzIG9yIHRva2Vucy4gT3RoZXIgb2JqZWN0cyAoaS5lLiB3aXRoIG1ldGhvZHMpIHdpbGwgYmUgcmVqZWN0ZWQuXG4gKlxuICogQHBhcmFtIG9iaiBUaGUgb2JqZWN0IHRvIHJlc29sdmUuXG4gKiBAcGFyYW0gcHJlZml4IFByZWZpeCBrZXkgcGF0aCBjb21wb25lbnRzIGZvciBkaWFnbm9zdGljcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmUob2JqOiBhbnksIG9wdGlvbnM6IElSZXNvbHZlT3B0aW9ucyk6IGFueSB7XG4gIGNvbnN0IHByZWZpeCA9IG9wdGlvbnMucHJlZml4IHx8IFtdO1xuICBjb25zdCBwYXRoTmFtZSA9IFwiL1wiICsgcHJlZml4LmpvaW4oXCIvXCIpO1xuXG4gIC8qKlxuICAgKiBNYWtlIGEgbmV3IHJlc29sdXRpb24gY29udGV4dFxuICAgKi9cbiAgZnVuY3Rpb24gbWFrZUNvbnRleHQoYXBwZW5kUGF0aD86IHN0cmluZyk6IFtJUmVzb2x2ZUNvbnRleHQsIElQb3N0UHJvY2Vzc29yXSB7XG4gICAgY29uc3QgbmV3UHJlZml4ID1cbiAgICAgIGFwcGVuZFBhdGggIT09IHVuZGVmaW5lZCA/IHByZWZpeC5jb25jYXQoW2FwcGVuZFBhdGhdKSA6IG9wdGlvbnMucHJlZml4O1xuXG4gICAgbGV0IHBvc3RQcm9jZXNzb3I6IElQb3N0UHJvY2Vzc29yIHwgdW5kZWZpbmVkO1xuXG4gICAgY29uc3QgY29udGV4dDogSVJlc29sdmVDb250ZXh0ID0ge1xuICAgICAgcHJlcGFyaW5nOiBvcHRpb25zLnByZXBhcmluZyxcbiAgICAgIHNjb3BlOiBvcHRpb25zLnNjb3BlLFxuICAgICAgcmVnaXN0ZXJQb3N0UHJvY2Vzc29yKHBwKSB7XG4gICAgICAgIHBvc3RQcm9jZXNzb3IgPSBwcDtcbiAgICAgIH0sXG4gICAgICByZXNvbHZlKHg6IGFueSkge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZSh4LCB7IC4uLm9wdGlvbnMsIHByZWZpeDogbmV3UHJlZml4IH0pO1xuICAgICAgfSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIFtcbiAgICAgIGNvbnRleHQsXG4gICAgICB7XG4gICAgICAgIHBvc3RQcm9jZXNzKHgpIHtcbiAgICAgICAgICByZXR1cm4gcG9zdFByb2Nlc3NvciA/IHBvc3RQcm9jZXNzb3IucG9zdFByb2Nlc3MoeCwgY29udGV4dCkgOiB4O1xuICAgICAgICB9LFxuICAgICAgfSxcbiAgICBdO1xuICB9XG5cbiAgLy8gcHJvdGVjdCBhZ2FpbnN0IGN5Y2xpYyByZWZlcmVuY2VzIGJ5IGxpbWl0aW5nIGRlcHRoLlxuICBpZiAocHJlZml4Lmxlbmd0aCA+IDIwMCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIFwiVW5hYmxlIHRvIHJlc29sdmUgb2JqZWN0IHRyZWUgd2l0aCBjaXJjdWxhciByZWZlcmVuY2UuIFBhdGg6IFwiICsgcGF0aE5hbWVcbiAgICApO1xuICB9XG5cbiAgLy9cbiAgLy8gdW5kZWZpbmVkXG4gIC8vXG5cbiAgaWYgKHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgLy9cbiAgLy8gbnVsbFxuICAvL1xuXG4gIGlmIChvYmogPT09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8vXG4gIC8vIGZ1bmN0aW9ucyAtIG5vdCBzdXBwb3J0ZWQgKG9ubHkgdG9rZW5zIGFyZSBzdXBwb3J0ZWQpXG4gIC8vXG5cbiAgaWYgKHR5cGVvZiBvYmogPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIGBUcnlpbmcgdG8gcmVzb2x2ZSBhIG5vbi1kYXRhIG9iamVjdC4gT25seSB0b2tlbiBhcmUgc3VwcG9ydGVkIGZvciBsYXp5IGV2YWx1YXRpb24uIFBhdGg6ICR7cGF0aE5hbWV9LiBPYmplY3Q6ICR7b2JqfWBcbiAgICApO1xuICB9XG5cbiAgLy9cbiAgLy8gc3RyaW5nIC0gcG90ZW50aWFsbHkgcmVwbGFjZSBhbGwgc3RyaW5naWZpZWQgVG9rZW5zXG4gIC8vXG4gIGlmICh0eXBlb2Ygb2JqID09PSBcInN0cmluZ1wiKSB7XG4gICAgY29uc3Qgc3RyID0gVG9rZW5TdHJpbmcuZm9yU3RyaW5nKG9iaik7XG4gICAgaWYgKHN0ci50ZXN0KCkpIHtcbiAgICAgIGNvbnN0IGZyYWdtZW50cyA9IHN0ci5zcGxpdCh0b2tlbk1hcC5sb29rdXBUb2tlbi5iaW5kKHRva2VuTWFwKSk7XG4gICAgICByZXR1cm4gb3B0aW9ucy5yZXNvbHZlci5yZXNvbHZlU3RyaW5nKGZyYWdtZW50cywgbWFrZUNvbnRleHQoKVswXSk7XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICAvL1xuICAvLyBudW1iZXIgLSBwb3RlbnRpYWxseSBkZWNvZGUgVG9rZW5pemVkIG51bWJlclxuICAvL1xuICBpZiAodHlwZW9mIG9iaiA9PT0gXCJudW1iZXJcIikge1xuICAgIHJldHVybiByZXNvbHZlTnVtYmVyVG9rZW4ob2JqLCBtYWtlQ29udGV4dCgpWzBdKTtcbiAgfVxuXG4gIC8vXG4gIC8vIHByaW1pdGl2ZXMgLSBhcy1pc1xuICAvL1xuXG4gIGlmICh0eXBlb2Ygb2JqICE9PSBcIm9iamVjdFwiIHx8IG9iaiBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgLy9cbiAgLy8gYXJyYXlzIC0gcmVzb2x2ZSBhbGwgdmFsdWVzLCByZW1vdmUgdW5kZWZpbmVkIGFuZCByZW1vdmUgZW1wdHkgYXJyYXlzXG4gIC8vXG5cbiAgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgIGlmIChjb250YWluc0xpc3RUb2tlbkVsZW1lbnQob2JqKSkge1xuICAgICAgcmV0dXJuIG9wdGlvbnMucmVzb2x2ZXIucmVzb2x2ZUxpc3Qob2JqLCBtYWtlQ29udGV4dCgpWzBdKTtcbiAgICB9XG5cbiAgICBjb25zdCBhcnIgPSBvYmpcbiAgICAgIC5tYXAoKHgsIGkpID0+IG1ha2VDb250ZXh0KGAke2l9YClbMF0ucmVzb2x2ZSh4KSlcbiAgICAgIC5maWx0ZXIoKHgpID0+IHR5cGVvZiB4ICE9PSBcInVuZGVmaW5lZFwiKTtcblxuICAgIHJldHVybiBhcnI7XG4gIH1cblxuICAvL1xuICAvLyB0b2tlbnMgLSBpbnZva2UgJ3Jlc29sdmUnIGFuZCBjb250aW51ZSB0byByZXNvbHZlIHJlY3Vyc2l2ZWx5XG4gIC8vXG5cbiAgaWYgKHVucmVzb2x2ZWQob2JqKSkge1xuICAgIGNvbnN0IFtjb250ZXh0LCBwb3N0UHJvY2Vzc29yXSA9IG1ha2VDb250ZXh0KCk7XG4gICAgcmV0dXJuIG9wdGlvbnMucmVzb2x2ZXIucmVzb2x2ZVRva2VuKG9iaiwgY29udGV4dCwgcG9zdFByb2Nlc3Nvcik7XG4gIH1cblxuICAvL1xuICAvLyBvYmplY3RzIC0gZGVlcC1yZXNvbHZlIGFsbCB2YWx1ZXNcbiAgLy9cblxuICAvLyBNdXN0IG5vdCBiZSBhIENvbnN0cnVjdCBhdCB0aGlzIHBvaW50LCBvdGhlcndpc2UgeW91IHByb2JhYmx5IG1hZGUgYSB0eXBvXG4gIC8vIG1pc3Rha2Ugc29tZXdoZXJlIGFuZCByZXNvbHZlIHdpbGwgZ2V0IGludG8gYW4gaW5maW5pdGUgbG9vcCByZWN1cnNpbmcgaW50b1xuICAvLyBjaGlsZC5wYXJlbnQgPC0tLT4gcGFyZW50LmNoaWxkcmVuXG4gIGlmIChpc0NvbnN0cnVjdChvYmopKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVHJ5aW5nIHRvIHJlc29sdmUoKSBhIENvbnN0cnVjdCBhdCBcIiArIHBhdGhOYW1lKTtcbiAgfVxuXG4gIGNvbnN0IHJlc3VsdDogYW55ID0ge307XG4gIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKG9iaikpIHtcbiAgICBjb25zdCByZXNvbHZlZEtleSA9IG1ha2VDb250ZXh0KClbMF0ucmVzb2x2ZShrZXkpO1xuICAgIGlmICh0eXBlb2YgcmVzb2x2ZWRLZXkgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYFwiJHtrZXl9XCIgaXMgdXNlZCBhcyB0aGUga2V5IGluIGEgbWFwIHNvIG11c3QgcmVzb2x2ZSB0byBhIHN0cmluZywgYnV0IGl0IHJlc29sdmVzIHRvOiAke0pTT04uc3RyaW5naWZ5KFxuICAgICAgICAgIHJlc29sdmVkS2V5XG4gICAgICAgICl9LiBDb25zaWRlciB1c2luZyBcIlJvc0pzb25cIiB0byBkZWxheSByZXNvbHV0aW9uIHRvIGRlcGxveW1lbnQtdGltZWBcbiAgICAgICk7XG4gICAgfVxuXG4gICAgY29uc3QgdmFsdWUgPSBtYWtlQ29udGV4dChrZXkpWzBdLnJlc29sdmUob2JqW2tleV0pO1xuXG4gICAgLy8gc2tpcCB1bmRlZmluZWRcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICByZXN1bHRbcmVzb2x2ZWRLZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEZpbmQgYWxsIFRva2VucyB0aGF0IGFyZSB1c2VkIGluIHRoZSBnaXZlbiBzdHJ1Y3R1cmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpbmRUb2tlbnMoc2NvcGU6IElDb25zdHJ1Y3QsIGZuOiAoKSA9PiBhbnkpOiBJUmVzb2x2YWJsZVtdIHtcbiAgY29uc3QgcmVzb2x2ZXIgPSBuZXcgUmVtZW1iZXJpbmdUb2tlblJlc29sdmVyKG5ldyBTdHJpbmdDb25jYXQoKSk7XG5cbiAgcmVzb2x2ZShmbigpLCB7IHNjb3BlLCBwcmVmaXg6IFtdLCByZXNvbHZlciwgcHJlcGFyaW5nOiB0cnVlIH0pO1xuXG4gIHJldHVybiByZXNvbHZlci50b2tlbnM7XG59XG5cbi8qKlxuICogUmVtZW1iZXIgYWxsIFRva2VucyBlbmNvdW50ZXJlZCB3aGlsZSByZXNvbHZpbmdcbiAqL1xuZXhwb3J0IGNsYXNzIFJlbWVtYmVyaW5nVG9rZW5SZXNvbHZlciBleHRlbmRzIERlZmF1bHRUb2tlblJlc29sdmVyIHtcbiAgcHJpdmF0ZSByZWFkb25seSB0b2tlbnNTZWVuID0gbmV3IFNldDxJUmVzb2x2YWJsZT4oKTtcblxuICBwdWJsaWMgcmVzb2x2ZVRva2VuKFxuICAgIHQ6IElSZXNvbHZhYmxlLFxuICAgIGNvbnRleHQ6IElSZXNvbHZlQ29udGV4dCxcbiAgICBwb3N0UHJvY2Vzc29yOiBJUG9zdFByb2Nlc3NvclxuICApIHtcbiAgICB0aGlzLnRva2Vuc1NlZW4uYWRkKHQpO1xuICAgIHJldHVybiBzdXBlci5yZXNvbHZlVG9rZW4odCwgY29udGV4dCwgcG9zdFByb2Nlc3Nvcik7XG4gIH1cblxuICBwdWJsaWMgcmVzb2x2ZVN0cmluZyhzOiBUb2tlbml6ZWRTdHJpbmdGcmFnbWVudHMsIGNvbnRleHQ6IElSZXNvbHZlQ29udGV4dCkge1xuICAgIGNvbnN0IHJldCA9IHN1cGVyLnJlc29sdmVTdHJpbmcocywgY29udGV4dCk7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgdG9rZW5zKCk6IElSZXNvbHZhYmxlW10ge1xuICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMudG9rZW5zU2Vlbik7XG4gIH1cbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciBhbiBvYmplY3QgaXMgYSBDb25zdHJ1Y3RcbiAqXG4gKiBOb3QgaW4gJ2NvbnN0cnVjdC50cycgYmVjYXVzZSB0aGF0IHdvdWxkIGxlYWQgdG8gYSBkZXBlbmRlbmN5IGN5Y2xlIHZpYSAndW5pcXVlaWQudHMnLFxuICogYW5kIHRoaXMgaXMgYSBiZXN0LWVmZm9ydCBwcm90ZWN0aW9uIGFnYWluc3QgYSBjb21tb24gcHJvZ3JhbW1pbmcgbWlzdGFrZSBhbnl3YXkuXG4gKi9cbmZ1bmN0aW9uIGlzQ29uc3RydWN0KHg6IGFueSk6IGJvb2xlYW4ge1xuICByZXR1cm4geC5fY2hpbGRyZW4gIT09IHVuZGVmaW5lZCAmJiB4Ll9tZXRhZGF0YSAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiByZXNvbHZlTnVtYmVyVG9rZW4oeDogbnVtYmVyLCBjb250ZXh0OiBJUmVzb2x2ZUNvbnRleHQpOiBhbnkge1xuICBjb25zdCB0b2tlbiA9IFRva2VuTWFwLmluc3RhbmNlKCkubG9va3VwTnVtYmVyVG9rZW4oeCk7XG4gIGlmICh0b2tlbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHg7XG4gIH1cbiAgcmV0dXJuIGNvbnRleHQucmVzb2x2ZSh0b2tlbik7XG59XG4iXX0=