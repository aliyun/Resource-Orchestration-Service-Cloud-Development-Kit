"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNameOfRosIntrinsic = exports.minimalRosTemplateListMerge = exports.minimalRosTemplateJoin = exports.ROS_TOKEN_RESOLVER = exports.RosTemplateLang = void 0;
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
 * Do an intelligent ROS merge list on the given values, producing a minimal expression
 */
function minimalRosTemplateListMerge(values) {
    let i = 0;
    while (i < values.length) {
        const el = values[i];
        if (isSplicableFnListMergeIntrinsic(el)) {
            values.splice(i, 1, ...el["Fn::ListMerge"]);
        }
        else {
            i += 1;
        }
    }
    return values;
    function isSplicableFnListMergeIntrinsic(obj) {
        if (!isIntrinsic(obj)) {
            return false;
        }
        if (Object.keys(obj)[0] !== "Fn::ListMerge") {
            return false;
        }
        const list = obj["Fn::ListMerge"];
        if (token_1.Token.isUnresolved(list)) {
            return false;
        }
        return Array.isArray(list);
    }
}
exports.minimalRosTemplateListMerge = minimalRosTemplateListMerge;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUtbGFuZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlbXBsYXRlLWxhbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsa0NBQStCO0FBQy9CLDRDQUF5QztBQUN6Qyw4Q0FNdUI7QUFFdkIsb0NBQWlDO0FBQ2pDLDJDQUF3QztBQUN4Qyx1Q0FBb0M7QUFFcEM7O0dBRUc7QUFDSCxNQUFhLGVBQWU7SUFDMUI7Ozs7Ozs7Ozs7OztPQVlHO0lBQ0ksTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFRLEVBQUUsS0FBYztRQUMzQyw0QkFBNEI7UUFDNUIsRUFBRTtRQUNGLCtFQUErRTtRQUMvRSxpRkFBaUY7UUFDakYsdURBQXVEO1FBQ3ZELEVBQUU7UUFDRiw0RUFBNEU7UUFDNUUsMERBQTBEO1FBQzFELHlFQUF5RTtRQUN6RSxzRUFBc0U7UUFDdEUsNEVBQTRFO1FBQzVFLEVBQUU7UUFDRix5REFBeUQ7UUFDekQsRUFBRTtRQUNGLGlGQUFpRjtRQUNqRixlQUFlO1FBQ2YsRUFBRTtRQUNGLHNFQUFzRTtRQUN0RSxNQUFNLGlCQUFrQixTQUFRLGlDQUFvQjtZQUNsRDtnQkFDRSxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDcEIsQ0FBQztZQUVNLFlBQVksQ0FDakIsQ0FBYyxFQUNkLE9BQXdCLEVBQ3hCLFdBQTJCO2dCQUUzQixrRkFBa0Y7Z0JBQ2xGLG9GQUFvRjtnQkFDcEYseUJBQXlCO2dCQUN6QixJQUFJLHFCQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUU7b0JBQ2pELE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNoQjtnQkFFRCx3RkFBd0Y7Z0JBQ3hGLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQzNELENBQUM7WUFDTSxhQUFhLENBQ2xCLFNBQW1DLEVB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SUFFRCxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLElBQUksb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDNUQsQ0FBQztBQUVELFNBQWdCLG9CQUFvQixDQUFDLElBQVk7SUFDL0MsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDNUIsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUNELHVHQUF1RztJQUN2RyxPQUFPLElBQUksS0FBSyxvQkFBb0IsSUFBSSxJQUFJLEtBQUssY0FBYyxDQUFDO0FBQ2xFLENBQUM7QUFORCxvREFNQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExhenkgfSBmcm9tIFwiLi4vbGF6eVwiO1xuaW1wb3J0IHsgUmVmZXJlbmNlIH0gZnJvbSBcIi4uL3JlZmVyZW5jZVwiO1xuaW1wb3J0IHtcbiAgRGVmYXVsdFRva2VuUmVzb2x2ZXIsXG4gIElGcmFnbWVudENvbmNhdGVuYXRvcixcbiAgSVBvc3RQcm9jZXNzb3IsXG4gIElSZXNvbHZhYmxlLFxuICBJUmVzb2x2ZUNvbnRleHQsXG59IGZyb20gXCIuLi9yZXNvbHZhYmxlXCI7XG5pbXBvcnQgeyBUb2tlbml6ZWRTdHJpbmdGcmFnbWVudHMgfSBmcm9tIFwiLi4vc3RyaW5nLWZyYWdtZW50c1wiO1xuaW1wb3J0IHsgVG9rZW4gfSBmcm9tIFwiLi4vdG9rZW5cIjtcbmltcG9ydCB7IEludHJpbnNpYyB9IGZyb20gXCIuL2ludHJpbnNpY1wiO1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gXCIuL3Jlc29sdmVcIjtcblxuLyoqXG4gKiBSb3V0aW5lcyB0aGF0IGtub3cgaG93IHRvIGRvIG9wZXJhdGlvbnMgYXQgdGhlIFJPUyBkb2N1bWVudCBsYW5ndWFnZSBsZXZlbFxuICovXG5leHBvcnQgY2xhc3MgUm9zVGVtcGxhdGVMYW5nIHtcbiAgLyoqXG4gICAqIFR1cm4gYW4gYXJiaXRyYXJ5IHN0cnVjdHVyZSBwb3RlbnRpYWxseSBjb250YWluaW5nIFRva2VucyBpbnRvIGEgSlNPTiBzdHJpbmcuXG4gICAqXG4gICAqIFJldHVybnMgYSBUb2tlbiB3aGljaCB3aWxsIGV2YWx1YXRlIHRvIFJPUyBleHByZXNzaW9uIHRoYXRcbiAgICogd2lsbCBiZSBldmFsdWF0ZWQgYnkgUk9TIHRvIHRoZSBKU09OIHJlcHJlc2VudGF0aW9uIG9mIHRoZVxuICAgKiBpbnB1dCBzdHJ1Y3R1cmUuXG4gICAqXG4gICAqIEFsbCBUb2tlbnMgc3Vic3RpdHV0ZWQgaW4gdGhpcyB3YXkgbXVzdCByZXR1cm4gc3RyaW5ncywgb3IgdGhlIGV2YWx1YXRpb25cbiAgICogaW4gUk9TIHdpbGwgZmFpbC5cbiAgICpcbiAgICogQHBhcmFtIG9iaiBUaGUgb2JqZWN0IHRvIHN0cmluZ2lmeVxuICAgKiBAcGFyYW0gc3BhY2UgSW5kZW50YXRpb24gdG8gdXNlIChkZWZhdWx0OiBubyBwcmV0dHktcHJpbnRpbmcpXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIHRvSlNPTihvYmo6IGFueSwgc3BhY2U/OiBudW1iZXIpOiBzdHJpbmcge1xuICAgIC8vIFRoaXMgd29ya3MgaW4gdHdvIHN0YWdlczpcbiAgICAvL1xuICAgIC8vIEZpcnN0LCByZXNvbHZlIGV2ZXJ5dGhpbmcuIFRoaXMgZ2V0cyByaWQgb2YgdGhlIGxhenkgZXZhbHVhdGlvbnMsIGV2YWx1YXRpb25cbiAgICAvLyB0byB0aGUgcmVhbCB0eXBlcyBvZiB0aGluZ3MgKGZvciBleGFtcGxlLCB3b3VsZCBhIGZ1bmN0aW9uIHJldHVybiBhIHN0cmluZywgYW5cbiAgICAvLyBpbnRyaW5zaWMsIG9yIGEgbnVtYmVyPyBXZSBoYXZlIHRvIHJlc29sdmUgdG8ga25vdykuXG4gICAgLy9cbiAgICAvLyBXZSB0aGVuIHRvIHRocm91Z2ggdGhlIHJldHVybmVkIHJlc3VsdCwgaWRlbnRpZnkgdGhpbmdzIHRoYXQgZXZhbHVhdGVkIHRvXG4gICAgLy8gUk9TIGludHJpbnNpY3MsIGFuZCByZS13cmFwIHRob3NlIGluIFRva2VucyB0aGF0IGhhdmUgYVxuICAgIC8vIHRvSlNPTigpIG1ldGhvZCByZXR1cm5pbmcgdGhlaXIgc3RyaW5nIHJlcHJlc2VudGF0aW9uLiBJZiB3ZSB0aGVuIGNhbGxcbiAgICAvLyBKU09OLnN0cmluZ2lmeSgpIG9uIHRoYXQgcmVzdWx0LCB0aGF0IGdpdmVzIHVzIGVzc2VudGlhbGx5IHRoZSBzYW1lXG4gICAgLy8gc3RyaW5nIHRoYXQgd2Ugc3RhcnRlZCB3aXRoLCBleGNlcHQgd2l0aCB0aGUgbm9uLXRva2VuIGNoYXJhY3RlcnMgcXVvdGVkLlxuICAgIC8vXG4gICAgLy8gICAge1wiZmllbGRcIjogXCIke1RPS0VOfVwifSAtLT4ge1xcXCJmaWVsZFxcXCI6IFxcXCIke1RPS0VOfVxcXCJ9XG4gICAgLy9cbiAgICAvLyBBIGZpbmFsIHJlc29sdmUoKSBvbiB0aGF0IHN0cmluZyAoZG9uZSBieSB0aGUgZnJhbWV3b3JrKSB3aWxsIHlpZWxkIHRoZSBzdHJpbmdcbiAgICAvLyB3ZSdyZSBhZnRlci5cbiAgICAvL1xuICAgIC8vIFJlc29sdmluZyBhbmQgd3JhcHBpbmcgYXJlIGRvbmUgaW4gZ28gdXNpbmcgdGhlIHJlc29sdmVyIGZyYW1ld29yay5cbiAgICBjbGFzcyBJbnRyaW5zaW5jV3JhcHBlciBleHRlbmRzIERlZmF1bHRUb2tlblJlc29sdmVyIHtcbiAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihST1NfQ09OQ0FUKTtcbiAgICAgIH1cblxuICAgICAgcHVibGljIHJlc29sdmVUb2tlbihcbiAgICAgICAgdDogSVJlc29sdmFibGUsXG4gICAgICAgIGNvbnRleHQ6IElSZXNvbHZlQ29udGV4dCxcbiAgICAgICAgcG9zdFByb2Nlc3M6IElQb3N0UHJvY2Vzc29yXG4gICAgICApIHtcbiAgICAgICAgLy8gUmV0dXJuIFJlZmVyZW5jZXMgZGlyZWN0bHksIHNvIHRoZWlyIHR5cGUgaXMgbWFpbnRhaW5lZCBhbmQgdGhlIHJlZmVyZW5jZXMgd2lsbFxuICAgICAgICAvLyBjb250aW51ZSB0byB3b3JrLiBPbmx5IHdoaWxlIHByZXBhcmluZywgYmVjYXVzZSB3ZSBkbyBuZWVkIHRoZSBmaW5hbCB2YWx1ZSBvZiB0aGVcbiAgICAgICAgLy8gdG9rZW4gd2hpbGUgcmVzb2x2aW5nLlxuICAgICAgICBpZiAoUmVmZXJlbmNlLmlzUmVmZXJlbmNlKHQpICYmIGNvbnRleHQucHJlcGFyaW5nKSB7XG4gICAgICAgICAgcmV0dXJuIHdyYXAodCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBEZWVwLXJlc29sdmUgYW5kIHdyYXAuIFRoaXMgaXMgbmVjZXNzYXJ5IGZvciBMYXp5IHRva2VucyBzbyB3ZSBjYW4gc2VlIFwiaW5zaWRlXCIgdGhlbS5cbiAgICAgICAgcmV0dXJuIHdyYXAoc3VwZXIucmVzb2x2ZVRva2VuKHQsIGNvbnRleHQsIHBvc3RQcm9jZXNzKSk7XG4gICAgICB9XG4gICAgICBwdWJsaWMgcmVzb2x2ZVN0cmluZyhcbiAgICAgICAgZnJhZ21lbnRzOiBUb2tlbml6ZWRTdHJpbmdGcmFnbWVudHMsXG4gICAgICAgIGNvbnRleHQ6IElSZXNvbHZlQ29udGV4dFxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiB3cmFwKHN1cGVyLnJlc29sdmVTdHJpbmcoZnJhZ21lbnRzLCBjb250ZXh0KSk7XG4gICAgICB9XG4gICAgICBwdWJsaWMgcmVzb2x2ZUxpc3QobDogc3RyaW5nW10sIGNvbnRleHQ6IElSZXNvbHZlQ29udGV4dCkge1xuICAgICAgICByZXR1cm4gd3JhcChzdXBlci5yZXNvbHZlTGlzdChsLCBjb250ZXh0KSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gV2UgbmVlZCBhIFJlc29sdmVDb250ZXh0IHRvIGdldCBzdGFydGVkIHNvIHJldHVybiBhIFRva2VuXG4gICAgcmV0dXJuIExhenkuc3RyaW5nVmFsdWUoe1xuICAgICAgcHJvZHVjZTogKGN0eDogSVJlc29sdmVDb250ZXh0KSA9PlxuICAgICAgICBKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICByZXNvbHZlKG9iaiwge1xuICAgICAgICAgICAgcHJlcGFyaW5nOiBjdHgucHJlcGFyaW5nLFxuICAgICAgICAgICAgc2NvcGU6IGN0eC5zY29wZSxcbiAgICAgICAgICAgIHJlc29sdmVyOiBuZXcgSW50cmluc2luY1dyYXBwZXIoKSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgICAgc3BhY2VcbiAgICAgICAgKSxcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIHdyYXAodmFsdWU6IGFueSk6IGFueSB7XG4gICAgICByZXR1cm4gaXNJbnRyaW5zaWModmFsdWUpXG4gICAgICAgID8gbmV3IEpzb25Ub2tlbihkZWVwUXVvdGVTdHJpbmdzRm9ySlNPTih2YWx1ZSkpXG4gICAgICAgIDogdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFByb2R1Y2UgYSBST1MgZXhwcmVzc2lvbiB0byBjb25jYXQgdHdvIGFyYml0cmFyeSBleHByZXNzaW9ucyB3aGVuIHJlc29sdmluZ1xuICAgKi9cbiAgcHVibGljIHN0YXRpYyBjb25jYXQobGVmdDogYW55IHwgdW5kZWZpbmVkLCByaWdodDogYW55IHwgdW5kZWZpbmVkKTogYW55IHtcbiAgICBpZiAobGVmdCA9PT0gdW5kZWZpbmVkICYmIHJpZ2h0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cblxuICAgIGNvbnN0IHBhcnRzID0gbmV3IEFycmF5PGFueT4oKTtcbiAgICBpZiAobGVmdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBwYXJ0cy5wdXNoKGxlZnQpO1xuICAgIH1cbiAgICBpZiAocmlnaHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcGFydHMucHVzaChyaWdodCk7XG4gICAgfVxuXG4gICAgLy8gU29tZSBjYXNlIGFuYWx5c2lzIHRvIHByb2R1Y2UgbWluaW1hbCBleHByZXNzaW9uc1xuICAgIGlmIChwYXJ0cy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHJldHVybiBwYXJ0c1swXTtcbiAgICB9XG4gICAgaWYgKFxuICAgICAgcGFydHMubGVuZ3RoID09PSAyICYmXG4gICAgICB0eXBlb2YgcGFydHNbMF0gPT09IFwic3RyaW5nXCIgJiZcbiAgICAgIHR5cGVvZiBwYXJ0c1sxXSA9PT0gXCJzdHJpbmdcIlxuICAgICkge1xuICAgICAgcmV0dXJuIHBhcnRzWzBdICsgcGFydHNbMV07XG4gICAgfVxuXG4gICAgLy8gT3RoZXJ3aXNlIHJldHVybiBhIEpvaW4gaW50cmluc2ljIChhbHJlYWR5IGluIHRoZSB0YXJnZXQgZG9jdW1lbnQgbGFuZ3VhZ2UgdG8gYXZvaWQgdGFraW5nXG4gICAgLy8gY2lyY3VsYXIgZGVwZW5kZW5jaWVzIG9uIEZuSm9pbiAmIGZyaWVuZHMpXG4gICAgcmV0dXJuIHsgXCJGbjo6Sm9pblwiOiBbXCJcIiwgbWluaW1hbFJvc1RlbXBsYXRlSm9pbihcIlwiLCBwYXJ0cyldIH07XG4gIH1cbn1cblxuLyoqXG4gKiBUb2tlbiB0aGF0IGFsc28gc3RyaW5naWZpZXMgaW4gdGhlIHRvSlNPTigpIG9wZXJhdGlvbi5cbiAqL1xuY2xhc3MgSnNvblRva2VuIGV4dGVuZHMgSW50cmluc2ljIHtcbiAgLyoqXG4gICAqIFNwZWNpYWwgaGFuZGxlciB0aGF0IGdldHMgY2FsbGVkIHdoZW4gSlNPTi5zdHJpbmdpZnkoKSBpcyB1c2VkLlxuICAgKi9cbiAgcHVibGljIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b1N0cmluZygpO1xuICB9XG59XG5cbi8qKlxuICogRGVlcCBlc2NhcGUgc3RyaW5ncyBmb3IgdXNlIGluIGEgSlNPTiBjb250ZXh0XG4gKi9cbmZ1bmN0aW9uIGRlZXBRdW90ZVN0cmluZ3NGb3JKU09OKHg6IGFueSk6IGFueSB7XG4gIGlmICh0eXBlb2YgeCA9PT0gXCJzdHJpbmdcIikge1xuICAgIC8vIFdoZW5ldmVyIHdlIGVzY2FwZSBhIHN0cmluZyB3ZSBzdHJpcCBvZmYgdGhlIG91dGVybW9zdCBxdW90ZXNcbiAgICAvLyBzaW5jZSB3ZSdyZSBhbHJlYWR5IGluIGEgcXVvdGVkIGNvbnRleHQuXG4gICAgY29uc3Qgc3RyaW5naWZpZWQgPSBKU09OLnN0cmluZ2lmeSh4KTtcbiAgICByZXR1cm4gc3RyaW5naWZpZWQuc3Vic3RyaW5nKDEsIHN0cmluZ2lmaWVkLmxlbmd0aCAtIDEpO1xuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkoeCkpIHtcbiAgICByZXR1cm4geC5tYXAoZGVlcFF1b3RlU3RyaW5nc0ZvckpTT04pO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB4ID09PSBcIm9iamVjdFwiKSB7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoeCkpIHtcbiAgICAgIHhba2V5XSA9IGRlZXBRdW90ZVN0cmluZ3NGb3JKU09OKHhba2V5XSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHg7XG59XG5cbmNvbnN0IFJPU19DT05DQVQ6IElGcmFnbWVudENvbmNhdGVuYXRvciA9IHtcbiAgam9pbihsZWZ0OiBhbnksIHJpZ2h0OiBhbnkpIHtcbiAgICByZXR1cm4gUm9zVGVtcGxhdGVMYW5nLmNvbmNhdChsZWZ0LCByaWdodCk7XG4gIH0sXG59O1xuXG4vKipcbiAqIERlZmF1bHQgVG9rZW4gcmVzb2x2ZXIgZm9yIFJPUyB0ZW1wbGF0ZXNcbiAqL1xuZXhwb3J0IGNvbnN0IFJPU19UT0tFTl9SRVNPTFZFUiA9IG5ldyBEZWZhdWx0VG9rZW5SZXNvbHZlcihST1NfQ09OQ0FUKTtcblxuLyoqXG4gKiBEbyBhbiBpbnRlbGxpZ2VudCBST1Mgam9pbiBvbiB0aGUgZ2l2ZW4gdmFsdWVzLCBwcm9kdWNpbmcgYSBtaW5pbWFsIGV4cHJlc3Npb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1pbmltYWxSb3NUZW1wbGF0ZUpvaW4oXG4gIGRlbGltaXRlcjogc3RyaW5nLFxuICB2YWx1ZXM6IGFueVtdXG4pOiBhbnlbXSB7XG4gIGxldCBpID0gMDtcbiAgd2hpbGUgKGkgPCB2YWx1ZXMubGVuZ3RoKSB7XG4gICAgY29uc3QgZWwgPSB2YWx1ZXNbaV07XG4gICAgaWYgKGlzU3BsaWNhYmxlRm5Kb2luSW50cmluc2ljKGVsKSkge1xuICAgICAgdmFsdWVzLnNwbGljZShpLCAxLCAuLi5lbFtcIkZuOjpKb2luXCJdWzFdKTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgaSA+IDAgJiZcbiAgICAgIGlzUGxhaW5TdHJpbmcodmFsdWVzW2kgLSAxXSkgJiZcbiAgICAgIGlzUGxhaW5TdHJpbmcodmFsdWVzW2ldKVxuICAgICkge1xuICAgICAgdmFsdWVzW2kgLSAxXSArPSBkZWxpbWl0ZXIgKyB2YWx1ZXNbaV07XG4gICAgICB2YWx1ZXMuc3BsaWNlKGksIDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpICs9IDE7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHZhbHVlcztcblxuICBmdW5jdGlvbiBpc1BsYWluU3RyaW5nKG9iajogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmogPT09IFwic3RyaW5nXCIgJiYgIVRva2VuLmlzVW5yZXNvbHZlZChvYmopO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNTcGxpY2FibGVGbkpvaW5JbnRyaW5zaWMob2JqOiBhbnkpOiBib29sZWFuIHtcbiAgICBpZiAoIWlzSW50cmluc2ljKG9iaikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKE9iamVjdC5rZXlzKG9iailbMF0gIT09IFwiRm46OkpvaW5cIikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IFtkZWxpbSwgbGlzdF0gPSBvYmpbXCJGbjo6Sm9pblwiXTtcbiAgICBpZiAoZGVsaW0gIT09IGRlbGltaXRlcikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChUb2tlbi5pc1VucmVzb2x2ZWQobGlzdCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGxpc3QpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cblxuLyoqXG4gKiBEbyBhbiBpbnRlbGxpZ2VudCBST1MgbWVyZ2UgbGlzdCBvbiB0aGUgZ2l2ZW4gdmFsdWVzLCBwcm9kdWNpbmcgYSBtaW5pbWFsIGV4cHJlc3Npb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1pbmltYWxSb3NUZW1wbGF0ZUxpc3RNZXJnZShcbiAgICB2YWx1ZXM6IGFueVtdXG4pOiBhbnlbXSB7XG4gIGxldCBpID0gMDtcbiAgd2hpbGUgKGkgPCB2YWx1ZXMubGVuZ3RoKSB7XG4gICAgY29uc3QgZWwgPSB2YWx1ZXNbaV07XG4gICAgaWYgKGlzU3BsaWNhYmxlRm5MaXN0TWVyZ2VJbnRyaW5zaWMoZWwpKSB7XG4gICAgICB2YWx1ZXMuc3BsaWNlKGksIDEsIC4uLmVsW1wiRm46Okxpc3RNZXJnZVwiXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGkgKz0gMTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGlzU3BsaWNhYmxlRm5MaXN0TWVyZ2VJbnRyaW5zaWMob2JqOiBhbnkpOiBib29sZWFuIHtcbiAgICBpZiAoIWlzSW50cmluc2ljKG9iaikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKE9iamVjdC5rZXlzKG9iailbMF0gIT09IFwiRm46Okxpc3RNZXJnZVwiKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgbGlzdCA9IG9ialtcIkZuOjpMaXN0TWVyZ2VcIl07XG5cbiAgICBpZiAoVG9rZW4uaXNVbnJlc29sdmVkKGxpc3QpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkobGlzdCk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZXR1cm4gd2hldGhlciB0aGUgZ2l2ZW4gdmFsdWUgcmVwcmVzZW50cyBhIFJPUyBpbnRyaW5zaWNcbiAqL1xuZnVuY3Rpb24gaXNJbnRyaW5zaWMoeDogYW55KSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHgpIHx8IHggPT09IG51bGwgfHwgdHlwZW9mIHggIT09IFwib2JqZWN0XCIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoeCk7XG4gIGlmIChrZXlzLmxlbmd0aCAhPT0gMSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBrZXlzWzBdID09PSBcIlJlZlwiIHx8IGlzTmFtZU9mUm9zSW50cmluc2ljKGtleXNbMF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOYW1lT2ZSb3NJbnRyaW5zaWMobmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGlmICghbmFtZS5zdGFydHNXaXRoKFwiRm46OlwiKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvLyB0aGVzZSBhcmUgJ2Zha2UnIGludHJpbnNpY3MsIG9ubHkgdXNhYmxlIGluc2lkZSB0aGUgcGFyYW1ldGVyIG92ZXJyaWRlcyBvZiBhIFJPUyBDb2RlUGlwZWxpbmUgQWN0aW9uXG4gIHJldHVybiBuYW1lICE9PSBcIkZuOjpHZXRBcnRpZmFjdEF0dFwiICYmIG5hbWUgIT09IFwiRm46OkdldFBhcmFtXCI7XG59XG4iXX0=