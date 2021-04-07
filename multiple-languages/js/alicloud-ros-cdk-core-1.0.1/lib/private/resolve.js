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
        if (encoding_1.containsListTokenElement(obj)) {
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
    if (encoding_1.unresolved(obj)) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb2x2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlc29sdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsb0RBQW9EO0FBQ3BELHlDQUErRTtBQUMvRSwyQ0FBdUM7QUFFdkMsOENBT3VCO0FBQ3ZCLHFHQUFxRztBQUVyRyxNQUFNLFFBQVEsR0FBRyxvQkFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBaUJyQzs7Ozs7O0dBTUc7QUFDSCxTQUFnQixPQUFPLENBQUMsR0FBUSxFQUFFLE9BQXdCO0lBQ3hELE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDO0lBQ3BDLE1BQU0sUUFBUSxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRXhDOztPQUVHO0lBQ0gsU0FBUyxXQUFXLENBQUMsVUFBbUI7UUFDdEMsTUFBTSxTQUFTLEdBQ2IsVUFBVSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7UUFFMUUsSUFBSSxhQUF5QyxDQUFDO1FBRTlDLE1BQU0sT0FBTyxHQUFvQjtZQUMvQixTQUFTLEVBQUUsT0FBTyxDQUFDLFNBQVM7WUFDNUIsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLO1lBQ3BCLHFCQUFxQixDQUFDLEVBQUU7Z0JBQ3RCLGFBQWEsR0FBRyxFQUFFLENBQUM7WUFDckIsQ0FBQztZQUNELE9BQU8sQ0FBQyxDQUFNO2dCQUNaLE9BQU8sT0FBTyxDQUFDLENBQUMsRUFBRSxFQUFFLEdBQUcsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO1lBQ3ZELENBQUM7U0FDRixDQUFDO1FBRUYsT0FBTztZQUNMLE9BQU87WUFDUDtnQkFDRSxXQUFXLENBQUMsQ0FBQztvQkFDWCxPQUFPLGFBQWEsQ0FB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S0FDVjtJQUNELE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNoQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUNvbnN0cnVjdCB9IGZyb20gXCIuLi9jb25zdHJ1Y3QtY29tcGF0XCI7XG5cbi8vIGltcG9ydCB7IElDb25zdHJ1Y3QgfSBmcm9tICcuLi9jb25zdHJ1Y3QtY29tcGF0JztcbmltcG9ydCB7IGNvbnRhaW5zTGlzdFRva2VuRWxlbWVudCwgVG9rZW5TdHJpbmcsIHVucmVzb2x2ZWQgfSBmcm9tIFwiLi9lbmNvZGluZ1wiO1xuaW1wb3J0IHsgVG9rZW5NYXAgfSBmcm9tIFwiLi90b2tlbi1tYXBcIjtcbmltcG9ydCB7IFRva2VuaXplZFN0cmluZ0ZyYWdtZW50cyB9IGZyb20gXCIuLi9zdHJpbmctZnJhZ21lbnRzXCI7XG5pbXBvcnQge1xuICBJUmVzb2x2YWJsZSxcbiAgSVRva2VuUmVzb2x2ZXIsXG4gIERlZmF1bHRUb2tlblJlc29sdmVyLFxuICBJUmVzb2x2ZUNvbnRleHQsXG4gIFN0cmluZ0NvbmNhdCxcbiAgSVBvc3RQcm9jZXNzb3IsXG59IGZyb20gXCIuLi9yZXNvbHZhYmxlXCI7XG4vLyBUaGlzIGZpbGUgc2hvdWxkIG5vdCBiZSBleHBvcnRlZCB0byBjb25zdW1lcnMsIHJlc29sdmluZyBzaG91bGQgaGFwcGVuIHRocm91Z2ggQ29uc3RydWN0LnJlc29sdmUoKVxuXG5jb25zdCB0b2tlbk1hcCA9IFRva2VuTWFwLmluc3RhbmNlKCk7XG5cbi8qKlxuICogT3B0aW9ucyB0byB0aGUgcmVzb2x2ZSgpIG9wZXJhdGlvblxuICpcbiAqIE5PVCB0aGUgc2FtZSBhcyB0aGUgUmVzb2x2ZUNvbnRleHQ7IFJlc29sdmVDb250ZXh0IGlzIGV4cG9zZWQgdG8gVG9rZW5cbiAqIGltcGxlbWVudG9ycyBhbmQgcmVzb2x1dGlvbiBob29rcywgd2hlcmVhcyB0aGlzIHN0cnVjdCBpcyBqdXN0IHRvIGJ1bmRsZVxuICogYSBudW1iZXIgb2YgdGhpbmdzIHRoYXQgd291bGQgb3RoZXJ3aXNlIGJlIGFyZ3VtZW50cyB0byByZXNvbHZlKCkgaW4gYVxuICogcmVhZGFibGUgd2F5LlxuICovXG5leHBvcnQgaW50ZXJmYWNlIElSZXNvbHZlT3B0aW9ucyB7XG4gIHNjb3BlOiBJQ29uc3RydWN0O1xuICBwcmVwYXJpbmc6IGJvb2xlYW47XG4gIHJlc29sdmVyOiBJVG9rZW5SZXNvbHZlcjtcbiAgcHJlZml4Pzogc3RyaW5nW107XG59XG5cbi8qKlxuICogUmVzb2x2ZXMgYW4gb2JqZWN0IGJ5IGV2YWx1YXRpbmcgYWxsIHRva2VucyBhbmQgcmVtb3ZpbmcgYW55IHVuZGVmaW5lZCBvciBlbXB0eSBvYmplY3RzIG9yIGFycmF5cy5cbiAqIFZhbHVlcyBjYW4gb25seSBiZSBwcmltaXRpdmVzLCBhcnJheXMgb3IgdG9rZW5zLiBPdGhlciBvYmplY3RzIChpLmUuIHdpdGggbWV0aG9kcykgd2lsbCBiZSByZWplY3RlZC5cbiAqXG4gKiBAcGFyYW0gb2JqIFRoZSBvYmplY3QgdG8gcmVzb2x2ZS5cbiAqIEBwYXJhbSBwcmVmaXggUHJlZml4IGtleSBwYXRoIGNvbXBvbmVudHMgZm9yIGRpYWdub3N0aWNzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZShvYmo6IGFueSwgb3B0aW9uczogSVJlc29sdmVPcHRpb25zKTogYW55IHtcbiAgY29uc3QgcHJlZml4ID0gb3B0aW9ucy5wcmVmaXggfHwgW107XG4gIGNvbnN0IHBhdGhOYW1lID0gXCIvXCIgKyBwcmVmaXguam9pbihcIi9cIik7XG5cbiAgLyoqXG4gICAqIE1ha2UgYSBuZXcgcmVzb2x1dGlvbiBjb250ZXh0XG4gICAqL1xuICBmdW5jdGlvbiBtYWtlQ29udGV4dChhcHBlbmRQYXRoPzogc3RyaW5nKTogW0lSZXNvbHZlQ29udGV4dCwgSVBvc3RQcm9jZXNzb3JdIHtcbiAgICBjb25zdCBuZXdQcmVmaXggPVxuICAgICAgYXBwZW5kUGF0aCAhPT0gdW5kZWZpbmVkID8gcHJlZml4LmNvbmNhdChbYXBwZW5kUGF0aF0pIDogb3B0aW9ucy5wcmVmaXg7XG5cbiAgICBsZXQgcG9zdFByb2Nlc3NvcjogSVBvc3RQcm9jZXNzb3IgfCB1bmRlZmluZWQ7XG5cbiAgICBjb25zdCBjb250ZXh0OiBJUmVzb2x2ZUNvbnRleHQgPSB7XG4gICAgICBwcmVwYXJpbmc6IG9wdGlvbnMucHJlcGFyaW5nLFxuICAgICAgc2NvcGU6IG9wdGlvbnMuc2NvcGUsXG4gICAgICByZWdpc3RlclBvc3RQcm9jZXNzb3IocHApIHtcbiAgICAgICAgcG9zdFByb2Nlc3NvciA9IHBwO1xuICAgICAgfSxcbiAgICAgIHJlc29sdmUoeDogYW55KSB7XG4gICAgICAgIHJldHVybiByZXNvbHZlKHgsIHsgLi4ub3B0aW9ucywgcHJlZml4OiBuZXdQcmVmaXggfSk7XG4gICAgICB9LFxuICAgIH07XG5cbiAgICByZXR1cm4gW1xuICAgICAgY29udGV4dCxcbiAgICAgIHtcbiAgICAgICAgcG9zdFByb2Nlc3MoeCkge1xuICAgICAgICAgIHJldHVybiBwb3N0UHJvY2Vzc29yID8gcG9zdFByb2Nlc3Nvci5wb3N0UHJvY2Vzcyh4LCBjb250ZXh0KSA6IHg7XG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIF07XG4gIH1cblxuICAvLyBwcm90ZWN0IGFnYWluc3QgY3ljbGljIHJlZmVyZW5jZXMgYnkgbGltaXRpbmcgZGVwdGguXG4gIGlmIChwcmVmaXgubGVuZ3RoID4gMjAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgXCJVbmFibGUgdG8gcmVzb2x2ZSBvYmplY3QgdHJlZSB3aXRoIGNpcmN1bGFyIHJlZmVyZW5jZS4gUGF0aDogXCIgKyBwYXRoTmFtZVxuICAgICk7XG4gIH1cblxuICAvL1xuICAvLyB1bmRlZmluZWRcbiAgLy9cblxuICBpZiAodHlwZW9mIG9iaiA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICAvL1xuICAvLyBudWxsXG4gIC8vXG5cbiAgaWYgKG9iaiA9PT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLy9cbiAgLy8gZnVuY3Rpb25zIC0gbm90IHN1cHBvcnRlZCAob25seSB0b2tlbnMgYXJlIHN1cHBvcnRlZClcbiAgLy9cblxuICBpZiAodHlwZW9mIG9iaiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgYFRyeWluZyB0byByZXNvbHZlIGEgbm9uLWRhdGEgb2JqZWN0LiBPbmx5IHRva2VuIGFyZSBzdXBwb3J0ZWQgZm9yIGxhenkgZXZhbHVhdGlvbi4gUGF0aDogJHtwYXRoTmFtZX0uIE9iamVjdDogJHtvYmp9YFxuICAgICk7XG4gIH1cblxuICAvL1xuICAvLyBzdHJpbmcgLSBwb3RlbnRpYWxseSByZXBsYWNlIGFsbCBzdHJpbmdpZmllZCBUb2tlbnNcbiAgLy9cbiAgaWYgKHR5cGVvZiBvYmogPT09IFwic3RyaW5nXCIpIHtcbiAgICBjb25zdCBzdHIgPSBUb2tlblN0cmluZy5mb3JTdHJpbmcob2JqKTtcbiAgICBpZiAoc3RyLnRlc3QoKSkge1xuICAgICAgY29uc3QgZnJhZ21lbnRzID0gc3RyLnNwbGl0KHRva2VuTWFwLmxvb2t1cFRva2VuLmJpbmQodG9rZW5NYXApKTtcbiAgICAgIHJldHVybiBvcHRpb25zLnJlc29sdmVyLnJlc29sdmVTdHJpbmcoZnJhZ21lbnRzLCBtYWtlQ29udGV4dCgpWzBdKTtcbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIC8vXG4gIC8vIG51bWJlciAtIHBvdGVudGlhbGx5IGRlY29kZSBUb2tlbml6ZWQgbnVtYmVyXG4gIC8vXG4gIGlmICh0eXBlb2Ygb2JqID09PSBcIm51bWJlclwiKSB7XG4gICAgcmV0dXJuIHJlc29sdmVOdW1iZXJUb2tlbihvYmosIG1ha2VDb250ZXh0KClbMF0pO1xuICB9XG5cbiAgLy9cbiAgLy8gcHJpbWl0aXZlcyAtIGFzLWlzXG4gIC8vXG5cbiAgaWYgKHR5cGVvZiBvYmogIT09IFwib2JqZWN0XCIgfHwgb2JqIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICAvL1xuICAvLyBhcnJheXMgLSByZXNvbHZlIGFsbCB2YWx1ZXMsIHJlbW92ZSB1bmRlZmluZWQgYW5kIHJlbW92ZSBlbXB0eSBhcnJheXNcbiAgLy9cblxuICBpZiAoQXJyYXkuaXNBcnJheShvYmopKSB7XG4gICAgaWYgKGNvbnRhaW5zTGlzdFRva2VuRWxlbWVudChvYmopKSB7XG4gICAgICByZXR1cm4gb3B0aW9ucy5yZXNvbHZlci5yZXNvbHZlTGlzdChvYmosIG1ha2VDb250ZXh0KClbMF0pO1xuICAgIH1cblxuICAgIGNvbnN0IGFyciA9IG9ialxuICAgICAgLm1hcCgoeCwgaSkgPT4gbWFrZUNvbnRleHQoYCR7aX1gKVswXS5yZXNvbHZlKHgpKVxuICAgICAgLmZpbHRlcigoeCkgPT4gdHlwZW9mIHggIT09IFwidW5kZWZpbmVkXCIpO1xuXG4gICAgcmV0dXJuIGFycjtcbiAgfVxuXG4gIC8vXG4gIC8vIHRva2VucyAtIGludm9rZSAncmVzb2x2ZScgYW5kIGNvbnRpbnVlIHRvIHJlc29sdmUgcmVjdXJzaXZlbHlcbiAgLy9cblxuICBpZiAodW5yZXNvbHZlZChvYmopKSB7XG4gICAgY29uc3QgW2NvbnRleHQsIHBvc3RQcm9jZXNzb3JdID0gbWFrZUNvbnRleHQoKTtcbiAgICByZXR1cm4gb3B0aW9ucy5yZXNvbHZlci5yZXNvbHZlVG9rZW4ob2JqLCBjb250ZXh0LCBwb3N0UHJvY2Vzc29yKTtcbiAgfVxuXG4gIC8vXG4gIC8vIG9iamVjdHMgLSBkZWVwLXJlc29sdmUgYWxsIHZhbHVlc1xuICAvL1xuXG4gIC8vIE11c3Qgbm90IGJlIGEgQ29uc3RydWN0IGF0IHRoaXMgcG9pbnQsIG90aGVyd2lzZSB5b3UgcHJvYmFibHkgbWFkZSBhIHR5cG9cbiAgLy8gbWlzdGFrZSBzb21ld2hlcmUgYW5kIHJlc29sdmUgd2lsbCBnZXQgaW50byBhbiBpbmZpbml0ZSBsb29wIHJlY3Vyc2luZyBpbnRvXG4gIC8vIGNoaWxkLnBhcmVudCA8LS0tPiBwYXJlbnQuY2hpbGRyZW5cbiAgaWYgKGlzQ29uc3RydWN0KG9iaikpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJUcnlpbmcgdG8gcmVzb2x2ZSgpIGEgQ29uc3RydWN0IGF0IFwiICsgcGF0aE5hbWUpO1xuICB9XG5cbiAgY29uc3QgcmVzdWx0OiBhbnkgPSB7fTtcbiAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMob2JqKSkge1xuICAgIGNvbnN0IHJlc29sdmVkS2V5ID0gbWFrZUNvbnRleHQoKVswXS5yZXNvbHZlKGtleSk7XG4gICAgaWYgKHR5cGVvZiByZXNvbHZlZEtleSAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgXCIke2tleX1cIiBpcyB1c2VkIGFzIHRoZSBrZXkgaW4gYSBtYXAgc28gbXVzdCByZXNvbHZlIHRvIGEgc3RyaW5nLCBidXQgaXQgcmVzb2x2ZXMgdG86ICR7SlNPTi5zdHJpbmdpZnkoXG4gICAgICAgICAgcmVzb2x2ZWRLZXlcbiAgICAgICAgKX0uIENvbnNpZGVyIHVzaW5nIFwiUm9zSnNvblwiIHRvIGRlbGF5IHJlc29sdXRpb24gdG8gZGVwbG95bWVudC10aW1lYFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBjb25zdCB2YWx1ZSA9IG1ha2VDb250ZXh0KGtleSlbMF0ucmVzb2x2ZShvYmpba2V5XSk7XG5cbiAgICAvLyBza2lwIHVuZGVmaW5lZFxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHJlc3VsdFtyZXNvbHZlZEtleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRmluZCBhbGwgVG9rZW5zIHRoYXQgYXJlIHVzZWQgaW4gdGhlIGdpdmVuIHN0cnVjdHVyZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZmluZFRva2VucyhzY29wZTogSUNvbnN0cnVjdCwgZm46ICgpID0+IGFueSk6IElSZXNvbHZhYmxlW10ge1xuICBjb25zdCByZXNvbHZlciA9IG5ldyBSZW1lbWJlcmluZ1Rva2VuUmVzb2x2ZXIobmV3IFN0cmluZ0NvbmNhdCgpKTtcblxuICByZXNvbHZlKGZuKCksIHsgc2NvcGUsIHByZWZpeDogW10sIHJlc29sdmVyLCBwcmVwYXJpbmc6IHRydWUgfSk7XG5cbiAgcmV0dXJuIHJlc29sdmVyLnRva2Vucztcbn1cblxuLyoqXG4gKiBSZW1lbWJlciBhbGwgVG9rZW5zIGVuY291bnRlcmVkIHdoaWxlIHJlc29sdmluZ1xuICovXG5leHBvcnQgY2xhc3MgUmVtZW1iZXJpbmdUb2tlblJlc29sdmVyIGV4dGVuZHMgRGVmYXVsdFRva2VuUmVzb2x2ZXIge1xuICBwcml2YXRlIHJlYWRvbmx5IHRva2Vuc1NlZW4gPSBuZXcgU2V0PElSZXNvbHZhYmxlPigpO1xuXG4gIHB1YmxpYyByZXNvbHZlVG9rZW4oXG4gICAgdDogSVJlc29sdmFibGUsXG4gICAgY29udGV4dDogSVJlc29sdmVDb250ZXh0LFxuICAgIHBvc3RQcm9jZXNzb3I6IElQb3N0UHJvY2Vzc29yXG4gICkge1xuICAgIHRoaXMudG9rZW5zU2Vlbi5hZGQodCk7XG4gICAgcmV0dXJuIHN1cGVyLnJlc29sdmVUb2tlbih0LCBjb250ZXh0LCBwb3N0UHJvY2Vzc29yKTtcbiAgfVxuXG4gIHB1YmxpYyByZXNvbHZlU3RyaW5nKHM6IFRva2VuaXplZFN0cmluZ0ZyYWdtZW50cywgY29udGV4dDogSVJlc29sdmVDb250ZXh0KSB7XG4gICAgY29uc3QgcmV0ID0gc3VwZXIucmVzb2x2ZVN0cmluZyhzLCBjb250ZXh0KTtcbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgcHVibGljIGdldCB0b2tlbnMoKTogSVJlc29sdmFibGVbXSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy50b2tlbnNTZWVuKTtcbiAgfVxufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIGFuIG9iamVjdCBpcyBhIENvbnN0cnVjdFxuICpcbiAqIE5vdCBpbiAnY29uc3RydWN0LnRzJyBiZWNhdXNlIHRoYXQgd291bGQgbGVhZCB0byBhIGRlcGVuZGVuY3kgY3ljbGUgdmlhICd1bmlxdWVpZC50cycsXG4gKiBhbmQgdGhpcyBpcyBhIGJlc3QtZWZmb3J0IHByb3RlY3Rpb24gYWdhaW5zdCBhIGNvbW1vbiBwcm9ncmFtbWluZyBtaXN0YWtlIGFueXdheS5cbiAqL1xuZnVuY3Rpb24gaXNDb25zdHJ1Y3QoeDogYW55KTogYm9vbGVhbiB7XG4gIHJldHVybiB4Ll9jaGlsZHJlbiAhPT0gdW5kZWZpbmVkICYmIHguX21ldGFkYXRhICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVOdW1iZXJUb2tlbih4OiBudW1iZXIsIGNvbnRleHQ6IElSZXNvbHZlQ29udGV4dCk6IGFueSB7XG4gIGNvbnN0IHRva2VuID0gVG9rZW5NYXAuaW5zdGFuY2UoKS5sb29rdXBOdW1iZXJUb2tlbih4KTtcbiAgaWYgKHRva2VuID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4geDtcbiAgfVxuICByZXR1cm4gY29udGV4dC5yZXNvbHZlKHRva2VuKTtcbn1cbiJdfQ==