"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNameOfRosIntrinsic = exports.minimalRosTemplateJoin = exports.ROS_TOKEN_RESOLVER = exports.RosTemplateLang = void 0;
const lazy_1 = require("../lazy");
const reference_1 = require("../reference");
const resolvable_1 = require("../resolvable");
const token_1 = require("../token");
const intrinsic_1 = require("./intrinsic");
const resolve_1 = require("./resolve");
/**
 * Routines that know how to do operations at the ROS document language level
 */
class RosTemplateLang {
    /**
     * Turn an arbitrary structure potentially containing Tokens into a JSON string.
     *
     * Returns a Token which will evaluate to ROS expression that
     * will be evaluated by ROS to the JSON representation of the
     * input structure.
     *
     * All Tokens substituted in this way must return strings, or the evaluation
     * in ROS will fail.
     *
     * @param obj The object to stringify
     * @param space Indentation to use (default: no pretty-printing)
     */
    static toJSON(obj, space) {
        // This works in two stages:
        //
        // First, resolve everything. This gets rid of the lazy evaluations, evaluation
        // to the real types of things (for example, would a function return a string, an
        // intrinsic, or a number? We have to resolve to know).
        //
        // We then to through the returned result, identify things that evaluated to
        // ROS intrinsics, and re-wrap those in Tokens that have a
        // toJSON() method returning their string representation. If we then call
        // JSON.stringify() on that result, that gives us essentially the same
        // string that we started with, except with the non-token characters quoted.
        //
        //    {"field": "${TOKEN}"} --> {\"field\": \"${TOKEN}\"}
        //
        // A final resolve() on that string (done by the framework) will yield the string
        // we're after.
        //
        // Resolving and wrapping are done in go using the resolver framework.
        class IntrinsincWrapper extends resolvable_1.DefaultTokenResolver {
            constructor() {
                super(ROS_CONCAT);
            }
            resolveToken(t, context, postProcess) {
                // Return References directly, so their type is maintained and the references will
                // continue to work. Only while preparing, because we do need the final value of the
                // token while resolving.
                if (reference_1.Reference.isReference(t) && context.preparing) {
                    return wrap(t);
                }
                // Deep-resolve and wrap. This is necessary for Lazy tokens so we can see "inside" them.
                return wrap(super.resolveToken(t, context, postProcess));
            }
            resolveString(fragments, context) {
                return wrap(super.resolveString(fragments, context));
            }
            resolveList(l, context) {
                return wrap(super.resolveList(l, context));
            }
        }
        // We need a ResolveContext to get started so return a Token
        return lazy_1.Lazy.stringValue({
            produce: (ctx) => JSON.stringify(resolve_1.resolve(obj, {
                preparing: ctx.preparing,
                scope: ctx.scope,
                resolver: new IntrinsincWrapper(),
            }), undefined, space),
        });
        function wrap(value) {
            return isIntrinsic(value)
                ? new JsonToken(deepQuoteStringsForJSON(value))
                : value;
        }
    }
    /**
     * Produce a ROS expression to concat two arbitrary expressions when resolving
     */
    static concat(left, right) {
        if (left === undefined && right === undefined) {
            return "";
        }
        const parts = new Array();
        if (left !== undefined) {
            parts.push(left);
        }
        if (right !== undefined) {
            parts.push(right);
        }
        // Some case analysis to produce minimal expressions
        if (parts.length === 1) {
            return parts[0];
        }
        if (parts.length === 2 &&
            typeof parts[0] === "string" &&
            typeof parts[1] === "string") {
            return parts[0] + parts[1];
        }
        // Otherwise return a Join intrinsic (already in the target document language to avoid taking
        // circular dependencies on FnJoin & friends)
        return { "Fn::Join": ["", minimalRosTemplateJoin("", parts)] };
    }
}
exports.RosTemplateLang = RosTemplateLang;
/**
 * Token that also stringifies in the toJSON() operation.
 */
class JsonToken extends intrinsic_1.Intrinsic {
    /**
     * Special handler that gets called when JSON.stringify() is used.
     */
    toJSON() {
        return this.toString();
    }
}
/**
 * Deep escape strings for use in a JSON context
 */
function deepQuoteStringsForJSON(x) {
    if (typeof x === "string") {
        // Whenever we escape a string we strip off the outermost quotes
        // since we're already in a quoted context.
        const stringified = JSON.stringify(x);
        return stringified.substring(1, stringified.length - 1);
    }
    if (Array.isArray(x)) {
        return x.map(deepQuoteStringsForJSON);
    }
    if (typeof x === "object") {
        for (const key of Object.keys(x)) {
            x[key] = deepQuoteStringsForJSON(x[key]);
        }
    }
    return x;
}
const ROS_CONCAT = {
    join(left, right) {
        return RosTemplateLang.concat(left, right);
    },
};
/**
 * Default Token resolver for ROS templates
 */
exports.ROS_TOKEN_RESOLVER = new resolvable_1.DefaultTokenResolver(ROS_CONCAT);
/**
 * Do an intelligent ROS join on the given values, producing a minimal expression
 */
function minimalRosTemplateJoin(delimiter, values) {
    let i = 0;
    while (i < values.length) {
        const el = values[i];
        if (isSplicableFnJoinIntrinsic(el)) {
            values.splice(i, 1, ...el["Fn::Join"][1]);
        }
        else if (i > 0 &&
            isPlainString(values[i - 1]) &&
            isPlainString(values[i])) {
            values[i - 1] += delimiter + values[i];
            values.splice(i, 1);
        }
        else {
            i += 1;
        }
    }
    return values;
    function isPlainString(obj) {
        return typeof obj === "string" && !token_1.Token.isUnresolved(obj);
    }
    function isSplicableFnJoinIntrinsic(obj) {
        if (!isIntrinsic(obj)) {
            return false;
        }
        if (Object.keys(obj)[0] !== "Fn::Join") {
            return false;
        }
        const [delim, list] = obj["Fn::Join"];
        if (delim !== delimiter) {
            return false;
        }
        if (token_1.Token.isUnresolved(list)) {
            return false;
        }
        if (!Array.isArray(list)) {
            return false;
        }
        return true;
    }
}
exports.minimalRosTemplateJoin = minimalRosTemplateJoin;
/**
 * Return whether the given value represents a ROS intrinsic
 */
function isIntrinsic(x) {
    if (Array.isArray(x) || x === null || typeof x !== "object") {
        return false;
    }
    const keys = Object.keys(x);
    if (keys.length !== 1) {
        return false;
    }
    return keys[0] === "Ref" || isNameOfRosIntrinsic(keys[0]);
}
function isNameOfRosIntrinsic(name) {
    if (!name.startsWith("Fn::")) {
        return false;
    }
    // these are 'fake' intrinsics, only usable inside the parameter overrides of a ROS CodePipeline Action
    return name !== "Fn::GetArtifactAtt" && name !== "Fn::GetParam";
}
exports.isNameOfRosIntrinsic = isNameOfRosIntrinsic;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUtbGFuZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlbXBsYXRlLWxhbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsa0NBQStCO0FBQy9CLDRDQUF5QztBQUN6Qyw4Q0FNdUI7QUFFdkIsb0NBQWlDO0FBQ2pDLDJDQUF3QztBQUN4Qyx1Q0FBb0M7QUFFcEM7O0dBRUc7QUFDSCxNQUFhLGVBQWU7SUFDMUI7Ozs7Ozs7Ozs7OztPQVlHO0lBQ0ksTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFRLEVBQUUsS0FBYztRQUMzQyw0QkFBNEI7UUFDNUIsRUFBRTtRQUNGLCtFQUErRTtRQUMvRSxpRkFBaUY7UUFDakYsdURBQXVEO1FBQ3ZELEVBQUU7UUFDRiw0RUFBNEU7UUFDNUUsMERBQTBEO1FBQzFELHlFQUF5RTtRQUN6RSxzRUFBc0U7UUFDdEUsNEVBQTRFO1FBQzVFLEVBQUU7UUFDRix5REFBeUQ7UUFDekQsRUFBRTtRQUNGLGlGQUFpRjtRQUNqRixlQUFlO1FBQ2YsRUFBRTtRQUNGLHNFQUFzRTtRQUN0RSxNQUFNLGlCQUFrQixTQUFRLGlDQUFvQjtZQUNsRDtnQkFDRSxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDcEIsQ0FBQztZQUVNLFlBQVksQ0FDakIsQ0FBYyxFQUNkLE9BQXdCLEVBQ3hCLFdBQTJCO2dCQUUzQixrRkFBa0Y7Z0JBQ2xGLG9GQUFvRjtnQkFDcEYseUJBQXlCO2dCQUN6QixJQUFJLHFCQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUU7b0JBQ2pELE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNoQjtnQkFFRCx3RkFBd0Y7Z0JBQ3hGLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQzNELENBQUM7WUFDTSxhQUFhLENBQ2xCLFNBQW1DLEVB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T0FBTyxDQUFDLEtBQUssUUFBUSxFQUFFO1FBQzNELE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFFRCxNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVCLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDckIsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUVELE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEtBQUssSUFBSSxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM1RCxDQUFDO0FBRUQsU0FBZ0Isb0JBQW9CLENBQUMsSUFBWTtJQUMvQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUM1QixPQUFPLEtBQUssQ0FBQztLQUNkO0lBQ0QsdUdBQXVHO0lBQ3ZHLE9BQU8sSUFBSSxLQUFLLG9CQUFvQixJQUFJLElBQUksS0FBSyxjQUFjLENBQUM7QUFDbEUsQ0FBQztBQU5ELG9EQU1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGF6eSB9IGZyb20gXCIuLi9sYXp5XCI7XG5pbXBvcnQgeyBSZWZlcmVuY2UgfSBmcm9tIFwiLi4vcmVmZXJlbmNlXCI7XG5pbXBvcnQge1xuICBEZWZhdWx0VG9rZW5SZXNvbHZlcixcbiAgSUZyYWdtZW50Q29uY2F0ZW5hdG9yLFxuICBJUG9zdFByb2Nlc3NvcixcbiAgSVJlc29sdmFibGUsXG4gIElSZXNvbHZlQ29udGV4dCxcbn0gZnJvbSBcIi4uL3Jlc29sdmFibGVcIjtcbmltcG9ydCB7IFRva2VuaXplZFN0cmluZ0ZyYWdtZW50cyB9IGZyb20gXCIuLi9zdHJpbmctZnJhZ21lbnRzXCI7XG5pbXBvcnQgeyBUb2tlbiB9IGZyb20gXCIuLi90b2tlblwiO1xuaW1wb3J0IHsgSW50cmluc2ljIH0gZnJvbSBcIi4vaW50cmluc2ljXCI7XG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSBcIi4vcmVzb2x2ZVwiO1xuXG4vKipcbiAqIFJvdXRpbmVzIHRoYXQga25vdyBob3cgdG8gZG8gb3BlcmF0aW9ucyBhdCB0aGUgUk9TIGRvY3VtZW50IGxhbmd1YWdlIGxldmVsXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NUZW1wbGF0ZUxhbmcge1xuICAvKipcbiAgICogVHVybiBhbiBhcmJpdHJhcnkgc3RydWN0dXJlIHBvdGVudGlhbGx5IGNvbnRhaW5pbmcgVG9rZW5zIGludG8gYSBKU09OIHN0cmluZy5cbiAgICpcbiAgICogUmV0dXJucyBhIFRva2VuIHdoaWNoIHdpbGwgZXZhbHVhdGUgdG8gUk9TIGV4cHJlc3Npb24gdGhhdFxuICAgKiB3aWxsIGJlIGV2YWx1YXRlZCBieSBST1MgdG8gdGhlIEpTT04gcmVwcmVzZW50YXRpb24gb2YgdGhlXG4gICAqIGlucHV0IHN0cnVjdHVyZS5cbiAgICpcbiAgICogQWxsIFRva2VucyBzdWJzdGl0dXRlZCBpbiB0aGlzIHdheSBtdXN0IHJldHVybiBzdHJpbmdzLCBvciB0aGUgZXZhbHVhdGlvblxuICAgKiBpbiBST1Mgd2lsbCBmYWlsLlxuICAgKlxuICAgKiBAcGFyYW0gb2JqIFRoZSBvYmplY3QgdG8gc3RyaW5naWZ5XG4gICAqIEBwYXJhbSBzcGFjZSBJbmRlbnRhdGlvbiB0byB1c2UgKGRlZmF1bHQ6IG5vIHByZXR0eS1wcmludGluZylcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgdG9KU09OKG9iajogYW55LCBzcGFjZT86IG51bWJlcik6IHN0cmluZyB7XG4gICAgLy8gVGhpcyB3b3JrcyBpbiB0d28gc3RhZ2VzOlxuICAgIC8vXG4gICAgLy8gRmlyc3QsIHJlc29sdmUgZXZlcnl0aGluZy4gVGhpcyBnZXRzIHJpZCBvZiB0aGUgbGF6eSBldmFsdWF0aW9ucywgZXZhbHVhdGlvblxuICAgIC8vIHRvIHRoZSByZWFsIHR5cGVzIG9mIHRoaW5ncyAoZm9yIGV4YW1wbGUsIHdvdWxkIGEgZnVuY3Rpb24gcmV0dXJuIGEgc3RyaW5nLCBhblxuICAgIC8vIGludHJpbnNpYywgb3IgYSBudW1iZXI/IFdlIGhhdmUgdG8gcmVzb2x2ZSB0byBrbm93KS5cbiAgICAvL1xuICAgIC8vIFdlIHRoZW4gdG8gdGhyb3VnaCB0aGUgcmV0dXJuZWQgcmVzdWx0LCBpZGVudGlmeSB0aGluZ3MgdGhhdCBldmFsdWF0ZWQgdG9cbiAgICAvLyBST1MgaW50cmluc2ljcywgYW5kIHJlLXdyYXAgdGhvc2UgaW4gVG9rZW5zIHRoYXQgaGF2ZSBhXG4gICAgLy8gdG9KU09OKCkgbWV0aG9kIHJldHVybmluZyB0aGVpciBzdHJpbmcgcmVwcmVzZW50YXRpb24uIElmIHdlIHRoZW4gY2FsbFxuICAgIC8vIEpTT04uc3RyaW5naWZ5KCkgb24gdGhhdCByZXN1bHQsIHRoYXQgZ2l2ZXMgdXMgZXNzZW50aWFsbHkgdGhlIHNhbWVcbiAgICAvLyBzdHJpbmcgdGhhdCB3ZSBzdGFydGVkIHdpdGgsIGV4Y2VwdCB3aXRoIHRoZSBub24tdG9rZW4gY2hhcmFjdGVycyBxdW90ZWQuXG4gICAgLy9cbiAgICAvLyAgICB7XCJmaWVsZFwiOiBcIiR7VE9LRU59XCJ9IC0tPiB7XFxcImZpZWxkXFxcIjogXFxcIiR7VE9LRU59XFxcIn1cbiAgICAvL1xuICAgIC8vIEEgZmluYWwgcmVzb2x2ZSgpIG9uIHRoYXQgc3RyaW5nIChkb25lIGJ5IHRoZSBmcmFtZXdvcmspIHdpbGwgeWllbGQgdGhlIHN0cmluZ1xuICAgIC8vIHdlJ3JlIGFmdGVyLlxuICAgIC8vXG4gICAgLy8gUmVzb2x2aW5nIGFuZCB3cmFwcGluZyBhcmUgZG9uZSBpbiBnbyB1c2luZyB0aGUgcmVzb2x2ZXIgZnJhbWV3b3JrLlxuICAgIGNsYXNzIEludHJpbnNpbmNXcmFwcGVyIGV4dGVuZHMgRGVmYXVsdFRva2VuUmVzb2x2ZXIge1xuICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKFJPU19DT05DQVQpO1xuICAgICAgfVxuXG4gICAgICBwdWJsaWMgcmVzb2x2ZVRva2VuKFxuICAgICAgICB0OiBJUmVzb2x2YWJsZSxcbiAgICAgICAgY29udGV4dDogSVJlc29sdmVDb250ZXh0LFxuICAgICAgICBwb3N0UHJvY2VzczogSVBvc3RQcm9jZXNzb3JcbiAgICAgICkge1xuICAgICAgICAvLyBSZXR1cm4gUmVmZXJlbmNlcyBkaXJlY3RseSwgc28gdGhlaXIgdHlwZSBpcyBtYWludGFpbmVkIGFuZCB0aGUgcmVmZXJlbmNlcyB3aWxsXG4gICAgICAgIC8vIGNvbnRpbnVlIHRvIHdvcmsuIE9ubHkgd2hpbGUgcHJlcGFyaW5nLCBiZWNhdXNlIHdlIGRvIG5lZWQgdGhlIGZpbmFsIHZhbHVlIG9mIHRoZVxuICAgICAgICAvLyB0b2tlbiB3aGlsZSByZXNvbHZpbmcuXG4gICAgICAgIGlmIChSZWZlcmVuY2UuaXNSZWZlcmVuY2UodCkgJiYgY29udGV4dC5wcmVwYXJpbmcpIHtcbiAgICAgICAgICByZXR1cm4gd3JhcCh0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERlZXAtcmVzb2x2ZSBhbmQgd3JhcC4gVGhpcyBpcyBuZWNlc3NhcnkgZm9yIExhenkgdG9rZW5zIHNvIHdlIGNhbiBzZWUgXCJpbnNpZGVcIiB0aGVtLlxuICAgICAgICByZXR1cm4gd3JhcChzdXBlci5yZXNvbHZlVG9rZW4odCwgY29udGV4dCwgcG9zdFByb2Nlc3MpKTtcbiAgICAgIH1cbiAgICAgIHB1YmxpYyByZXNvbHZlU3RyaW5nKFxuICAgICAgICBmcmFnbWVudHM6IFRva2VuaXplZFN0cmluZ0ZyYWdtZW50cyxcbiAgICAgICAgY29udGV4dDogSVJlc29sdmVDb250ZXh0XG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIHdyYXAoc3VwZXIucmVzb2x2ZVN0cmluZyhmcmFnbWVudHMsIGNvbnRleHQpKTtcbiAgICAgIH1cbiAgICAgIHB1YmxpYyByZXNvbHZlTGlzdChsOiBzdHJpbmdbXSwgY29udGV4dDogSVJlc29sdmVDb250ZXh0KSB7XG4gICAgICAgIHJldHVybiB3cmFwKHN1cGVyLnJlc29sdmVMaXN0KGwsIGNvbnRleHQpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBXZSBuZWVkIGEgUmVzb2x2ZUNvbnRleHQgdG8gZ2V0IHN0YXJ0ZWQgc28gcmV0dXJuIGEgVG9rZW5cbiAgICByZXR1cm4gTGF6eS5zdHJpbmdWYWx1ZSh7XG4gICAgICBwcm9kdWNlOiAoY3R4OiBJUmVzb2x2ZUNvbnRleHQpID0+XG4gICAgICAgIEpTT04uc3RyaW5naWZ5KFxuICAgICAgICAgIHJlc29sdmUob2JqLCB7XG4gICAgICAgICAgICBwcmVwYXJpbmc6IGN0eC5wcmVwYXJpbmcsXG4gICAgICAgICAgICBzY29wZTogY3R4LnNjb3BlLFxuICAgICAgICAgICAgcmVzb2x2ZXI6IG5ldyBJbnRyaW5zaW5jV3JhcHBlcigpLFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgICBzcGFjZVxuICAgICAgICApLFxuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gd3JhcCh2YWx1ZTogYW55KTogYW55IHtcbiAgICAgIHJldHVybiBpc0ludHJpbnNpYyh2YWx1ZSlcbiAgICAgICAgPyBuZXcgSnNvblRva2VuKGRlZXBRdW90ZVN0cmluZ3NGb3JKU09OKHZhbHVlKSlcbiAgICAgICAgOiB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUHJvZHVjZSBhIFJPUyBleHByZXNzaW9uIHRvIGNvbmNhdCB0d28gYXJiaXRyYXJ5IGV4cHJlc3Npb25zIHdoZW4gcmVzb2x2aW5nXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGNvbmNhdChsZWZ0OiBhbnkgfCB1bmRlZmluZWQsIHJpZ2h0OiBhbnkgfCB1bmRlZmluZWQpOiBhbnkge1xuICAgIGlmIChsZWZ0ID09PSB1bmRlZmluZWQgJiYgcmlnaHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuXG4gICAgY29uc3QgcGFydHMgPSBuZXcgQXJyYXk8YW55PigpO1xuICAgIGlmIChsZWZ0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHBhcnRzLnB1c2gobGVmdCk7XG4gICAgfVxuICAgIGlmIChyaWdodCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBwYXJ0cy5wdXNoKHJpZ2h0KTtcbiAgICB9XG5cbiAgICAvLyBTb21lIGNhc2UgYW5hbHlzaXMgdG8gcHJvZHVjZSBtaW5pbWFsIGV4cHJlc3Npb25zXG4gICAgaWYgKHBhcnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgcmV0dXJuIHBhcnRzWzBdO1xuICAgIH1cbiAgICBpZiAoXG4gICAgICBwYXJ0cy5sZW5ndGggPT09IDIgJiZcbiAgICAgIHR5cGVvZiBwYXJ0c1swXSA9PT0gXCJzdHJpbmdcIiAmJlxuICAgICAgdHlwZW9mIHBhcnRzWzFdID09PSBcInN0cmluZ1wiXG4gICAgKSB7XG4gICAgICByZXR1cm4gcGFydHNbMF0gKyBwYXJ0c1sxXTtcbiAgICB9XG5cbiAgICAvLyBPdGhlcndpc2UgcmV0dXJuIGEgSm9pbiBpbnRyaW5zaWMgKGFscmVhZHkgaW4gdGhlIHRhcmdldCBkb2N1bWVudCBsYW5ndWFnZSB0byBhdm9pZCB0YWtpbmdcbiAgICAvLyBjaXJjdWxhciBkZXBlbmRlbmNpZXMgb24gRm5Kb2luICYgZnJpZW5kcylcbiAgICByZXR1cm4geyBcIkZuOjpKb2luXCI6IFtcIlwiLCBtaW5pbWFsUm9zVGVtcGxhdGVKb2luKFwiXCIsIHBhcnRzKV0gfTtcbiAgfVxufVxuXG4vKipcbiAqIFRva2VuIHRoYXQgYWxzbyBzdHJpbmdpZmllcyBpbiB0aGUgdG9KU09OKCkgb3BlcmF0aW9uLlxuICovXG5jbGFzcyBKc29uVG9rZW4gZXh0ZW5kcyBJbnRyaW5zaWMge1xuICAvKipcbiAgICogU3BlY2lhbCBoYW5kbGVyIHRoYXQgZ2V0cyBjYWxsZWQgd2hlbiBKU09OLnN0cmluZ2lmeSgpIGlzIHVzZWQuXG4gICAqL1xuICBwdWJsaWMgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvU3RyaW5nKCk7XG4gIH1cbn1cblxuLyoqXG4gKiBEZWVwIGVzY2FwZSBzdHJpbmdzIGZvciB1c2UgaW4gYSBKU09OIGNvbnRleHRcbiAqL1xuZnVuY3Rpb24gZGVlcFF1b3RlU3RyaW5nc0ZvckpTT04oeDogYW55KTogYW55IHtcbiAgaWYgKHR5cGVvZiB4ID09PSBcInN0cmluZ1wiKSB7XG4gICAgLy8gV2hlbmV2ZXIgd2UgZXNjYXBlIGEgc3RyaW5nIHdlIHN0cmlwIG9mZiB0aGUgb3V0ZXJtb3N0IHF1b3Rlc1xuICAgIC8vIHNpbmNlIHdlJ3JlIGFscmVhZHkgaW4gYSBxdW90ZWQgY29udGV4dC5cbiAgICBjb25zdCBzdHJpbmdpZmllZCA9IEpTT04uc3RyaW5naWZ5KHgpO1xuICAgIHJldHVybiBzdHJpbmdpZmllZC5zdWJzdHJpbmcoMSwgc3RyaW5naWZpZWQubGVuZ3RoIC0gMSk7XG4gIH1cblxuICBpZiAoQXJyYXkuaXNBcnJheSh4KSkge1xuICAgIHJldHVybiB4Lm1hcChkZWVwUXVvdGVTdHJpbmdzRm9ySlNPTik7XG4gIH1cblxuICBpZiAodHlwZW9mIHggPT09IFwib2JqZWN0XCIpIHtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyh4KSkge1xuICAgICAgeFtrZXldID0gZGVlcFF1b3RlU3RyaW5nc0ZvckpTT04oeFtrZXldKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4geDtcbn1cblxuY29uc3QgUk9TX0NPTkNBVDogSUZyYWdtZW50Q29uY2F0ZW5hdG9yID0ge1xuICBqb2luKGxlZnQ6IGFueSwgcmlnaHQ6IGFueSkge1xuICAgIHJldHVybiBSb3NUZW1wbGF0ZUxhbmcuY29uY2F0KGxlZnQsIHJpZ2h0KTtcbiAgfSxcbn07XG5cbi8qKlxuICogRGVmYXVsdCBUb2tlbiByZXNvbHZlciBmb3IgUk9TIHRlbXBsYXRlc1xuICovXG5leHBvcnQgY29uc3QgUk9TX1RPS0VOX1JFU09MVkVSID0gbmV3IERlZmF1bHRUb2tlblJlc29sdmVyKFJPU19DT05DQVQpO1xuXG4vKipcbiAqIERvIGFuIGludGVsbGlnZW50IFJPUyBqb2luIG9uIHRoZSBnaXZlbiB2YWx1ZXMsIHByb2R1Y2luZyBhIG1pbmltYWwgZXhwcmVzc2lvblxuICovXG5leHBvcnQgZnVuY3Rpb24gbWluaW1hbFJvc1RlbXBsYXRlSm9pbihcbiAgZGVsaW1pdGVyOiBzdHJpbmcsXG4gIHZhbHVlczogYW55W11cbik6IGFueVtdIHtcbiAgbGV0IGkgPSAwO1xuICB3aGlsZSAoaSA8IHZhbHVlcy5sZW5ndGgpIHtcbiAgICBjb25zdCBlbCA9IHZhbHVlc1tpXTtcbiAgICBpZiAoaXNTcGxpY2FibGVGbkpvaW5JbnRyaW5zaWMoZWwpKSB7XG4gICAgICB2YWx1ZXMuc3BsaWNlKGksIDEsIC4uLmVsW1wiRm46OkpvaW5cIl1bMV0pO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBpID4gMCAmJlxuICAgICAgaXNQbGFpblN0cmluZyh2YWx1ZXNbaSAtIDFdKSAmJlxuICAgICAgaXNQbGFpblN0cmluZyh2YWx1ZXNbaV0pXG4gICAgKSB7XG4gICAgICB2YWx1ZXNbaSAtIDFdICs9IGRlbGltaXRlciArIHZhbHVlc1tpXTtcbiAgICAgIHZhbHVlcy5zcGxpY2UoaSwgMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGkgKz0gMTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGlzUGxhaW5TdHJpbmcob2JqOiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gXCJzdHJpbmdcIiAmJiAhVG9rZW4uaXNVbnJlc29sdmVkKG9iaik7XG4gIH1cblxuICBmdW5jdGlvbiBpc1NwbGljYWJsZUZuSm9pbkludHJpbnNpYyhvYmo6IGFueSk6IGJvb2xlYW4ge1xuICAgIGlmICghaXNJbnRyaW5zaWMob2JqKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoT2JqZWN0LmtleXMob2JqKVswXSAhPT0gXCJGbjo6Sm9pblwiKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgW2RlbGltLCBsaXN0XSA9IG9ialtcIkZuOjpKb2luXCJdO1xuICAgIGlmIChkZWxpbSAhPT0gZGVsaW1pdGVyKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKFRva2VuLmlzVW5yZXNvbHZlZChsaXN0KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkobGlzdCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuXG4vKipcbiAqIFJldHVybiB3aGV0aGVyIHRoZSBnaXZlbiB2YWx1ZSByZXByZXNlbnRzIGEgUk9TIGludHJpbnNpY1xuICovXG5mdW5jdGlvbiBpc0ludHJpbnNpYyh4OiBhbnkpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoeCkgfHwgeCA9PT0gbnVsbCB8fCB0eXBlb2YgeCAhPT0gXCJvYmplY3RcIikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh4KTtcbiAgaWYgKGtleXMubGVuZ3RoICE9PSAxKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGtleXNbMF0gPT09IFwiUmVmXCIgfHwgaXNOYW1lT2ZSb3NJbnRyaW5zaWMoa2V5c1swXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc05hbWVPZlJvc0ludHJpbnNpYyhuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgaWYgKCFuYW1lLnN0YXJ0c1dpdGgoXCJGbjo6XCIpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vIHRoZXNlIGFyZSAnZmFrZScgaW50cmluc2ljcywgb25seSB1c2FibGUgaW5zaWRlIHRoZSBwYXJhbWV0ZXIgb3ZlcnJpZGVzIG9mIGEgUk9TIENvZGVQaXBlbGluZSBBY3Rpb25cbiAgcmV0dXJuIG5hbWUgIT09IFwiRm46OkdldEFydGlmYWN0QXR0XCIgJiYgbmFtZSAhPT0gXCJGbjo6R2V0UGFyYW1cIjtcbn1cbiJdfQ==