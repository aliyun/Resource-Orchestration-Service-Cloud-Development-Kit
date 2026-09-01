"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostResolveToken = exports.ignoreEmpty = exports.capitalizePropertyNames = exports.findLastCommonElement = exports.pathToTopLevelStack = exports.filterUndefined = exports.isAllowedValue = exports.ifUndefined = void 0;
const intrinsic_1 = require("./private/intrinsic");
const stack_1 = require("./stack");
function ifUndefined(value, defaultValue) {
    return value !== undefined ? value : defaultValue;
}
exports.ifUndefined = ifUndefined;
function isAllowedValue(props, name, context, allowedValues) {
    const value = props[name];
    let res = false;
    // if the value is undefined, there is no need to check
    if (value === undefined)
        return;
    allowedValues.forEach(function checkValue(x) {
        if (x === value)
            res = true;
    });
    if (!res) {
        throw new Error(`The property ${name} (value: ${value}) of ${context.toString()} is not allowed.\nIts value should be in ${allowedValues}`);
    }
}
exports.isAllowedValue = isAllowedValue;
function filterUndefined(obj) {
    if (Array.isArray(obj)) {
        return obj.filter((x) => x != null).map((x) => filterUndefined(x));
    }
    if (typeof obj === "object") {
        const ret = {};
        for (const [key, value] of Object.entries(obj)) {
            if (value == null) {
                continue;
            }
            ret[key] = filterUndefined(value);
        }
        return ret;
    }
    return obj;
}
exports.filterUndefined = filterUndefined;
/**
 * @returns the list of stacks that lead from the top-level stack (non-nested) all the way to a nested stack.
 */
function pathToTopLevelStack(s) {
    if (s.nestedStackParent) {
        return [...pathToTopLevelStack(s.nestedStackParent), s];
    }
    else {
        return [s];
    }
}
exports.pathToTopLevelStack = pathToTopLevelStack;
/**
 * Given two arrays, returns the last common element or `undefined` if there
 * isn't (arrays are foriegn).
 */
function findLastCommonElement(path1, path2) {
    let i = 0;
    while (i < path1.length && i < path2.length) {
        if (path1[i] !== path2[i]) {
            break;
        }
        i++;
    }
    return path1[i - 1];
}
exports.findLastCommonElement = findLastCommonElement;
function capitalizePropertyNames(construct, obj) {
    const stack = stack_1.Stack.of(construct);
    obj = stack.resolve(obj);
    if (typeof obj !== "object") {
        return obj;
    }
    if (Array.isArray(obj)) {
        return obj.map((x) => capitalizePropertyNames(construct, x));
    }
    const newObj = {};
    for (const key of Object.keys(obj)) {
        const value = obj[key];
        const first = key.charAt(0).toUpperCase();
        const newKey = first + key.slice(1);
        newObj[newKey] = capitalizePropertyNames(construct, value);
    }
    return newObj;
}
exports.capitalizePropertyNames = capitalizePropertyNames;
/**
 * Turns empty arrays/objects to undefined (after evaluating tokens).
 */
function ignoreEmpty(obj) {
    return new PostResolveToken(obj, (o) => {
        // undefined/null
        if (o == null) {
            return o;
        }
        if (Array.isArray(o) && o.length === 0) {
            return undefined;
        }
        if (typeof o === "object" && Object.keys(o).length === 0) {
            return undefined;
        }
        return o;
    });
}
exports.ignoreEmpty = ignoreEmpty;
class PostResolveToken extends intrinsic_1.Intrinsic {
    constructor(value, processor) {
        super(value);
        this.processor = processor;
    }
    resolve(context) {
        context.registerPostProcessor(this);
        return super.resolve(context);
    }
    postProcess(o, _context) {
        return this.processor(o);
    }
}
exports.PostResolveToken = PostResolveToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsbURBQWdEO0FBRWhELG1DQUFnQztBQUVoQyxTQUFnQixXQUFXLENBQUksS0FBb0IsRUFBRSxZQUFlO0lBQ2xFLE9BQU8sS0FBSyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUM7QUFDcEQsQ0FBQztBQUZELGtDQUVDO0FBRUQsU0FBZ0IsY0FBYyxDQUM1QixLQUVDLEVBQ0QsSUFBWSxFQUNaLE9BQWtCLEVBQ2xCLGFBQW9CO0lBRXBCLE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixJQUFJLEdBQUcsR0FBWSxLQUFLLENBQUM7SUFDekIsdURBQXVEO0lBQ3ZELElBQUksS0FBSyxLQUFLLFNBQVM7UUFBRSxPQUFPO0lBQ2hDLGFBQWEsQ0FBQyxPQUFPLENBQUMsU0FBUyxVQUFVLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsS0FBSyxLQUFLO1lBQUUsR0FBRyxHQUFHLElBQUksQ0FBQztJQUM5QixDQUFDLENBQUMsQ0FBQztJQUVILElBQUksQ0FBQyxHQUFHLEVBQUU7UUFDUixNQUFNLElBQUksS0FBSyxDQUNiLGdCQUFnQixJQUFJLFlBQVksS0FBSyxRQUFRLE9BQU8sQ0FBQyxRQUFRLEVBQUUsNENBQTRDLGFBQWEsRUFBRSxDQUMzSCxDQUFDO0tBQ0g7QUFDSCxDQUFDO0FBckJELHdDQXFCQztBQUVELFNBQWdCLGVBQWUsQ0FBQyxHQUFRO0lBQ3RDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUN0QixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3BFO0lBRUQsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLEVBQUU7UUFDM0IsTUFBTSxHQUFHLEdBQVEsRUFBRSxDQUFDO1FBQ3BCLEtBQUssTUFBTSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzlDLElBQUksS0FBSyxJQUFJLElBQUksRUFBRTtnQkFDakIsU0FBUzthQUNWO1lBQ0QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNuQztRQUNELE9BQU8sR0FBRyxDQUFDO0tBQ1o7SUFFRCxPQUFPLEdBQUcsQ0FBQztBQUNiLENBQUM7QUFqQkQsMENBaUJDO0FBRUQ7O0dBRUc7QUFDSCxTQUFnQixtQkFBbUIsQ0FBQyxDQUFRO0lBQzFDLElBQUksQ0FBQyxDQUFDLGlCQUFpQixFQUFFO1FBQ3ZCLE9BQU8sQ0FBQyxHQUFHLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQ3pEO1NBQU07UUFDTCxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDWjtBQUNILENBQUM7QUFORCxrREFNQztBQUVEOzs7R0FHRztBQUNILFNBQWdCLHFCQUFxQixDQUNuQyxLQUFVLEVBQ1YsS0FBVTtJQUVWLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNWLE9BQU8sQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUU7UUFDM0MsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3pCLE1BQU07U0FDUDtRQUVELENBQUMsRUFBRSxDQUFDO0tBQ0w7SUFFRCxPQUFPLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDdEIsQ0FBQztBQWRELHNEQWNDO0FBRUQsU0FBZ0IsdUJBQXVCLENBQUMsU0FBcUIsRUFBRSxHQUFRO0lBQ3JFLE1BQU0sS0FBSyxHQUFHLGFBQUssQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbEMsR0FBRyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFekIsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLEVBQUU7UUFDM0IsT0FBTyxHQUFHLENBQUM7S0FDWjtJQUVELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUN0QixPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLHVCQUF1QixDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzlEO0lBRUQsTUFBTSxNQUFNLEdBQVEsRUFBRSxDQUFDO0lBQ3ZCLEtBQUssTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUNsQyxNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFdkIsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUMxQyxNQUFNLE1BQU0sR0FBRyxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsdUJBQXVCLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO0tBQzVEO0lBRUQsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQztBQXRCRCwwREFzQkM7QUFFRDs7R0FFRztBQUNILFNBQWdCLFdBQVcsQ0FBQyxHQUFRO0lBQ2xDLE9BQU8sSUFBSSxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtRQUNyQyxpQkFBaUI7UUFDakIsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFO1lBQ2IsT0FBTyxDQUFDLENBQUM7U0FDVjtRQUVELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUN0QyxPQUFPLFNBQVMsQ0FBQztTQUNsQjtRQUVELElBQUksT0FBTyxDQUFDLEtBQUssUUFBUSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUN4RCxPQUFPLFNBQVMsQ0FBQztTQUNsQjtRQUVELE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBakJELGtDQWlCQztBQUVELE1BQWEsZ0JBQWlCLFNBQVEscUJBQVM7SUFDN0MsWUFBWSxLQUFVLEVBQW1CLFNBQTBCO1FBQ2pFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUQwQixjQUFTLEdBQVQsU0FBUyxDQUFpQjtJQUVuRSxDQUFDO0lBRU0sT0FBTyxDQUFDLE9BQXdCO1FBQ3JDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQyxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVNLFdBQVcsQ0FBQyxDQUFNLEVBQUUsUUFBeUI7UUFDbEQsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNCLENBQUM7Q0FDRjtBQWJELDRDQWFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUNvbnN0cnVjdCwgQ29uc3RydWN0IH0gZnJvbSBcIi4vY29uc3RydWN0LWNvbXBhdFwiO1xuaW1wb3J0IHsgSW50cmluc2ljIH0gZnJvbSBcIi4vcHJpdmF0ZS9pbnRyaW5zaWNcIjtcbmltcG9ydCB7IElQb3N0UHJvY2Vzc29yLCBJUmVzb2x2ZUNvbnRleHQgfSBmcm9tIFwiLi9yZXNvbHZhYmxlXCI7XG5pbXBvcnQgeyBTdGFjayB9IGZyb20gXCIuL3N0YWNrXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBpZlVuZGVmaW5lZDxUPih2YWx1ZTogVCB8IHVuZGVmaW5lZCwgZGVmYXVsdFZhbHVlOiBUKTogVCB7XG4gIHJldHVybiB2YWx1ZSAhPT0gdW5kZWZpbmVkID8gdmFsdWUgOiBkZWZhdWx0VmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0FsbG93ZWRWYWx1ZShcbiAgcHJvcHM6IHtcbiAgICBbbmFtZTogc3RyaW5nXTogYW55O1xuICB9LFxuICBuYW1lOiBzdHJpbmcsXG4gIGNvbnRleHQ6IENvbnN0cnVjdCxcbiAgYWxsb3dlZFZhbHVlczogYW55W11cbik6IHZvaWQge1xuICBjb25zdCB2YWx1ZSA9IHByb3BzW25hbWVdO1xuICBsZXQgcmVzOiBib29sZWFuID0gZmFsc2U7XG4gIC8vIGlmIHRoZSB2YWx1ZSBpcyB1bmRlZmluZWQsIHRoZXJlIGlzIG5vIG5lZWQgdG8gY2hlY2tcbiAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHJldHVybjtcbiAgYWxsb3dlZFZhbHVlcy5mb3JFYWNoKGZ1bmN0aW9uIGNoZWNrVmFsdWUoeCkge1xuICAgIGlmICh4ID09PSB2YWx1ZSkgcmVzID0gdHJ1ZTtcbiAgfSk7XG5cbiAgaWYgKCFyZXMpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBgVGhlIHByb3BlcnR5ICR7bmFtZX0gKHZhbHVlOiAke3ZhbHVlfSkgb2YgJHtjb250ZXh0LnRvU3RyaW5nKCl9IGlzIG5vdCBhbGxvd2VkLlxcbkl0cyB2YWx1ZSBzaG91bGQgYmUgaW4gJHthbGxvd2VkVmFsdWVzfWBcbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJVbmRlZmluZWQob2JqOiBhbnkpOiBhbnkge1xuICBpZiAoQXJyYXkuaXNBcnJheShvYmopKSB7XG4gICAgcmV0dXJuIG9iai5maWx0ZXIoKHgpID0+IHggIT0gbnVsbCkubWFwKCh4KSA9PiBmaWx0ZXJVbmRlZmluZWQoeCkpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBvYmogPT09IFwib2JqZWN0XCIpIHtcbiAgICBjb25zdCByZXQ6IGFueSA9IHt9O1xuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKG9iaikpIHtcbiAgICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgcmV0W2tleV0gPSBmaWx0ZXJVbmRlZmluZWQodmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxuLyoqXG4gKiBAcmV0dXJucyB0aGUgbGlzdCBvZiBzdGFja3MgdGhhdCBsZWFkIGZyb20gdGhlIHRvcC1sZXZlbCBzdGFjayAobm9uLW5lc3RlZCkgYWxsIHRoZSB3YXkgdG8gYSBuZXN0ZWQgc3RhY2suXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXRoVG9Ub3BMZXZlbFN0YWNrKHM6IFN0YWNrKTogU3RhY2tbXSB7XG4gIGlmIChzLm5lc3RlZFN0YWNrUGFyZW50KSB7XG4gICAgcmV0dXJuIFsuLi5wYXRoVG9Ub3BMZXZlbFN0YWNrKHMubmVzdGVkU3RhY2tQYXJlbnQpLCBzXTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gW3NdO1xuICB9XG59XG5cbi8qKlxuICogR2l2ZW4gdHdvIGFycmF5cywgcmV0dXJucyB0aGUgbGFzdCBjb21tb24gZWxlbWVudCBvciBgdW5kZWZpbmVkYCBpZiB0aGVyZVxuICogaXNuJ3QgKGFycmF5cyBhcmUgZm9yaWVnbikuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaW5kTGFzdENvbW1vbkVsZW1lbnQ8VD4oXG4gIHBhdGgxOiBUW10sXG4gIHBhdGgyOiBUW11cbik6IFQgfCB1bmRlZmluZWQge1xuICBsZXQgaSA9IDA7XG4gIHdoaWxlIChpIDwgcGF0aDEubGVuZ3RoICYmIGkgPCBwYXRoMi5sZW5ndGgpIHtcbiAgICBpZiAocGF0aDFbaV0gIT09IHBhdGgyW2ldKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBpKys7XG4gIH1cblxuICByZXR1cm4gcGF0aDFbaSAtIDFdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FwaXRhbGl6ZVByb3BlcnR5TmFtZXMoY29uc3RydWN0OiBJQ29uc3RydWN0LCBvYmo6IGFueSk6IGFueSB7XG4gIGNvbnN0IHN0YWNrID0gU3RhY2sub2YoY29uc3RydWN0KTtcbiAgb2JqID0gc3RhY2sucmVzb2x2ZShvYmopO1xuXG4gIGlmICh0eXBlb2Ygb2JqICE9PSBcIm9iamVjdFwiKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KG9iaikpIHtcbiAgICByZXR1cm4gb2JqLm1hcCgoeCkgPT4gY2FwaXRhbGl6ZVByb3BlcnR5TmFtZXMoY29uc3RydWN0LCB4KSk7XG4gIH1cblxuICBjb25zdCBuZXdPYmo6IGFueSA9IHt9O1xuICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhvYmopKSB7XG4gICAgY29uc3QgdmFsdWUgPSBvYmpba2V5XTtcblxuICAgIGNvbnN0IGZpcnN0ID0ga2V5LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpO1xuICAgIGNvbnN0IG5ld0tleSA9IGZpcnN0ICsga2V5LnNsaWNlKDEpO1xuICAgIG5ld09ialtuZXdLZXldID0gY2FwaXRhbGl6ZVByb3BlcnR5TmFtZXMoY29uc3RydWN0LCB2YWx1ZSk7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG4vKipcbiAqIFR1cm5zIGVtcHR5IGFycmF5cy9vYmplY3RzIHRvIHVuZGVmaW5lZCAoYWZ0ZXIgZXZhbHVhdGluZyB0b2tlbnMpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaWdub3JlRW1wdHkob2JqOiBhbnkpOiBhbnkge1xuICByZXR1cm4gbmV3IFBvc3RSZXNvbHZlVG9rZW4ob2JqLCAobykgPT4ge1xuICAgIC8vIHVuZGVmaW5lZC9udWxsXG4gICAgaWYgKG8gPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG87XG4gICAgfVxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkobykgJiYgby5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBvID09PSBcIm9iamVjdFwiICYmIE9iamVjdC5rZXlzKG8pLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICByZXR1cm4gbztcbiAgfSk7XG59XG5cbmV4cG9ydCBjbGFzcyBQb3N0UmVzb2x2ZVRva2VuIGV4dGVuZHMgSW50cmluc2ljIGltcGxlbWVudHMgSVBvc3RQcm9jZXNzb3Ige1xuICBjb25zdHJ1Y3Rvcih2YWx1ZTogYW55LCBwcml2YXRlIHJlYWRvbmx5IHByb2Nlc3NvcjogKHg6IGFueSkgPT4gYW55KSB7XG4gICAgc3VwZXIodmFsdWUpO1xuICB9XG5cbiAgcHVibGljIHJlc29sdmUoY29udGV4dDogSVJlc29sdmVDb250ZXh0KSB7XG4gICAgY29udGV4dC5yZWdpc3RlclBvc3RQcm9jZXNzb3IodGhpcyk7XG4gICAgcmV0dXJuIHN1cGVyLnJlc29sdmUoY29udGV4dCk7XG4gIH1cblxuICBwdWJsaWMgcG9zdFByb2Nlc3MobzogYW55LCBfY29udGV4dDogSVJlc29sdmVDb250ZXh0KTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5wcm9jZXNzb3Iobyk7XG4gIH1cbn1cbiJdfQ==