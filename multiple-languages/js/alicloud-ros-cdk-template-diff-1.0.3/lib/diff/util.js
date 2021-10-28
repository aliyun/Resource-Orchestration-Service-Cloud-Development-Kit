"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unionOf = exports.diffKeyedEntities = exports.deepEqual = void 0;
/**
 * Compares two objects for equality, deeply. The function handles arguments that are
 * +null+, +undefined+, arrays and objects. For objects, the function will not take the
 * object prototype into account for the purpose of the comparison, only the values of
 * properties reported by +Object.keys+.
 *
 * @param lvalue the left operand of the equality comparison.
 * @param rvalue the right operand of the equality comparison.
 *
 * @returns +true+ if both +lvalue+ and +rvalue+ are equivalent to each other.
 */
function deepEqual(lvalue, rvalue) {
    if (lvalue === rvalue) {
        return true;
    }
    if (typeof lvalue !== typeof rvalue) {
        return false;
    }
    if (Array.isArray(lvalue) !== Array.isArray(rvalue)) {
        return false;
    }
    if (Array.isArray(lvalue) /* && Array.isArray(rvalue) */) {
        if (lvalue.length !== rvalue.length) {
            return false;
        }
        for (let i = 0; i < lvalue.length; i++) {
            if (!deepEqual(lvalue[i], rvalue[i])) {
                return false;
            }
        }
        return true;
    }
    if (typeof lvalue === 'object' /* && typeof rvalue === 'object' */) {
        if (lvalue === null || rvalue === null) {
            // If both were null, they'd have been ===
            return false;
        }
        const keys = Object.keys(lvalue);
        if (keys.length !== Object.keys(rvalue).length) {
            return false;
        }
        for (const key of keys) {
            if (!rvalue.hasOwnProperty(key)) {
                return false;
            }
            if (!deepEqual(lvalue[key], rvalue[key])) {
                return false;
            }
        }
        return true;
    }
    // Neither object, nor array: I deduce this is primitive type
    // Primitive type and not ===, so I deduce not deepEqual
    return false;
}
exports.deepEqual = deepEqual;
/**
 * Produce the differences between two maps, as a map, using a specified diff function.
 *
 * @param oldValue  the old map.
 * @param newValue  the new map.
 * @param elementDiff the diff function.
 *
 * @returns a map representing the differences between +oldValue+ and +newValue+.
 */
function diffKeyedEntities(oldValue, newValue, elementDiff) {
    const result = {};
    for (const logicalId of unionOf(Object.keys(oldValue || {}), Object.keys(newValue || {}))) {
        const oldElement = oldValue && oldValue[logicalId];
        const newElement = newValue && newValue[logicalId];
        result[logicalId] = elementDiff(oldElement, newElement, logicalId);
    }
    return result;
}
exports.diffKeyedEntities = diffKeyedEntities;
/**
 * Computes the union of two sets of strings.
 *
 * @param lv the left set of strings.
 * @param rv the right set of strings.
 *
 * @returns a new array containing all elemebts from +lv+ and +rv+, with no duplicates.
 */
function unionOf(lv, rv) {
    const result = new Set(lv);
    for (const v of rv) {
        result.add(v);
    }
    return new Array(...result);
}
exports.unionOf = unionOf;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7Ozs7Ozs7Ozs7R0FVRztBQUNILFNBQWdCLFNBQVMsQ0FBQyxNQUFXLEVBQUUsTUFBVztJQUNoRCxJQUFJLE1BQU0sS0FBSyxNQUFNLEVBQUU7UUFDckIsT0FBTyxJQUFJLENBQUM7S0FDYjtJQUNELElBQUksT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEVBQUU7UUFDbkMsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUNELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ25ELE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFDRCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsOEJBQThCLEVBQUU7UUFDeEQsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLE1BQU0sQ0FBQyxNQUFNLEVBQUU7WUFDbkMsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3RDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNwQyxPQUFPLEtBQUssQ0FBQzthQUNkO1NBQ0Y7UUFDRCxPQUFPLElBQUksQ0FBQztLQUNiO0lBQ0QsSUFBSSxPQUFPLE1BQU0sS0FBSyxRQUFRLENBQUMsbUNBQW1DLEVBQUU7UUFDbEUsSUFBSSxNQUFNLEtBQUssSUFBSSxJQUFJLE1BQU0sS0FBSyxJQUFJLEVBQUU7WUFDdEMsMENBQTBDO1lBQzFDLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pDLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sRUFBRTtZQUM5QyxPQUFPLEtBQUssQ0FBQztTQUNkO1FBQ0QsS0FBSyxNQUFNLEdBQUcsSUFBSSxJQUFJLEVBQUU7WUFDdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQy9CLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7WUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtnQkFDeEMsT0FBTyxLQUFLLENBQUM7YUFDZDtTQUNGO1FBQ0QsT0FBTyxJQUFJLENBQUM7S0FDYjtJQUNELDZEQUE2RDtJQUM3RCx3REFBd0Q7SUFDeEQsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDO0FBM0NELDhCQTJDQztBQUVEOzs7Ozs7OztHQVFHO0FBQ0gsU0FBZ0IsaUJBQWlCLENBQy9CLFFBQTRDLEVBQzVDLFFBQTRDLEVBQzVDLFdBQWlFO0lBRWpFLE1BQU0sTUFBTSxHQUEwQixFQUFFLENBQUM7SUFDekMsS0FBSyxNQUFNLFNBQVMsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRTtRQUN6RixNQUFNLFVBQVUsR0FBRyxRQUFRLElBQUksUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ25ELE1BQU0sVUFBVSxHQUFHLFFBQVEsSUFBSSxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDbkQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxVQUFVLEVBQUUsVUFBVSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0tBQ3BFO0lBQ0QsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQztBQVpELDhDQVlDO0FBRUQ7Ozs7Ozs7R0FPRztBQUNILFNBQWdCLE9BQU8sQ0FBQyxFQUEwQixFQUFFLEVBQTBCO0lBQzVFLE1BQU0sTUFBTSxHQUFHLElBQUksR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzNCLEtBQUssTUFBTSxDQUFDLElBQUksRUFBRSxFQUFFO1FBQ2xCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDZjtJQUNELE9BQU8sSUFBSSxLQUFLLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQztBQUM5QixDQUFDO0FBTkQsMEJBTUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvbXBhcmVzIHR3byBvYmplY3RzIGZvciBlcXVhbGl0eSwgZGVlcGx5LiBUaGUgZnVuY3Rpb24gaGFuZGxlcyBhcmd1bWVudHMgdGhhdCBhcmVcbiAqICtudWxsKywgK3VuZGVmaW5lZCssIGFycmF5cyBhbmQgb2JqZWN0cy4gRm9yIG9iamVjdHMsIHRoZSBmdW5jdGlvbiB3aWxsIG5vdCB0YWtlIHRoZVxuICogb2JqZWN0IHByb3RvdHlwZSBpbnRvIGFjY291bnQgZm9yIHRoZSBwdXJwb3NlIG9mIHRoZSBjb21wYXJpc29uLCBvbmx5IHRoZSB2YWx1ZXMgb2ZcbiAqIHByb3BlcnRpZXMgcmVwb3J0ZWQgYnkgK09iamVjdC5rZXlzKy5cbiAqXG4gKiBAcGFyYW0gbHZhbHVlIHRoZSBsZWZ0IG9wZXJhbmQgb2YgdGhlIGVxdWFsaXR5IGNvbXBhcmlzb24uXG4gKiBAcGFyYW0gcnZhbHVlIHRoZSByaWdodCBvcGVyYW5kIG9mIHRoZSBlcXVhbGl0eSBjb21wYXJpc29uLlxuICpcbiAqIEByZXR1cm5zICt0cnVlKyBpZiBib3RoICtsdmFsdWUrIGFuZCArcnZhbHVlKyBhcmUgZXF1aXZhbGVudCB0byBlYWNoIG90aGVyLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVlcEVxdWFsKGx2YWx1ZTogYW55LCBydmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICBpZiAobHZhbHVlID09PSBydmFsdWUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAodHlwZW9mIGx2YWx1ZSAhPT0gdHlwZW9mIHJ2YWx1ZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAoQXJyYXkuaXNBcnJheShsdmFsdWUpICE9PSBBcnJheS5pc0FycmF5KHJ2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKEFycmF5LmlzQXJyYXkobHZhbHVlKSAvKiAmJiBBcnJheS5pc0FycmF5KHJ2YWx1ZSkgKi8pIHtcbiAgICBpZiAobHZhbHVlLmxlbmd0aCAhPT0gcnZhbHVlLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGx2YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKCFkZWVwRXF1YWwobHZhbHVlW2ldLCBydmFsdWVbaV0pKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKHR5cGVvZiBsdmFsdWUgPT09ICdvYmplY3QnIC8qICYmIHR5cGVvZiBydmFsdWUgPT09ICdvYmplY3QnICovKSB7XG4gICAgaWYgKGx2YWx1ZSA9PT0gbnVsbCB8fCBydmFsdWUgPT09IG51bGwpIHtcbiAgICAgIC8vIElmIGJvdGggd2VyZSBudWxsLCB0aGV5J2QgaGF2ZSBiZWVuID09PVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMobHZhbHVlKTtcbiAgICBpZiAoa2V5cy5sZW5ndGggIT09IE9iamVjdC5rZXlzKHJ2YWx1ZSkubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgIGlmICghcnZhbHVlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKCFkZWVwRXF1YWwobHZhbHVlW2tleV0sIHJ2YWx1ZVtrZXldKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIC8vIE5laXRoZXIgb2JqZWN0LCBub3IgYXJyYXk6IEkgZGVkdWNlIHRoaXMgaXMgcHJpbWl0aXZlIHR5cGVcbiAgLy8gUHJpbWl0aXZlIHR5cGUgYW5kIG5vdCA9PT0sIHNvIEkgZGVkdWNlIG5vdCBkZWVwRXF1YWxcbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIFByb2R1Y2UgdGhlIGRpZmZlcmVuY2VzIGJldHdlZW4gdHdvIG1hcHMsIGFzIGEgbWFwLCB1c2luZyBhIHNwZWNpZmllZCBkaWZmIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSBvbGRWYWx1ZSAgdGhlIG9sZCBtYXAuXG4gKiBAcGFyYW0gbmV3VmFsdWUgIHRoZSBuZXcgbWFwLlxuICogQHBhcmFtIGVsZW1lbnREaWZmIHRoZSBkaWZmIGZ1bmN0aW9uLlxuICpcbiAqIEByZXR1cm5zIGEgbWFwIHJlcHJlc2VudGluZyB0aGUgZGlmZmVyZW5jZXMgYmV0d2VlbiArb2xkVmFsdWUrIGFuZCArbmV3VmFsdWUrLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZGlmZktleWVkRW50aXRpZXM8VD4oXG4gIG9sZFZhbHVlOiB7IFtrZXk6IHN0cmluZ106IGFueSB9IHwgdW5kZWZpbmVkLFxuICBuZXdWYWx1ZTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSB8IHVuZGVmaW5lZCxcbiAgZWxlbWVudERpZmY6IChvbGRFbGVtZW50OiBhbnksIG5ld0VsZW1lbnQ6IGFueSwga2V5OiBzdHJpbmcpID0+IFQsXG4pOiB7IFtuYW1lOiBzdHJpbmddOiBUIH0ge1xuICBjb25zdCByZXN1bHQ6IHsgW25hbWU6IHN0cmluZ106IFQgfSA9IHt9O1xuICBmb3IgKGNvbnN0IGxvZ2ljYWxJZCBvZiB1bmlvbk9mKE9iamVjdC5rZXlzKG9sZFZhbHVlIHx8IHt9KSwgT2JqZWN0LmtleXMobmV3VmFsdWUgfHwge30pKSkge1xuICAgIGNvbnN0IG9sZEVsZW1lbnQgPSBvbGRWYWx1ZSAmJiBvbGRWYWx1ZVtsb2dpY2FsSWRdO1xuICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBuZXdWYWx1ZSAmJiBuZXdWYWx1ZVtsb2dpY2FsSWRdO1xuICAgIHJlc3VsdFtsb2dpY2FsSWRdID0gZWxlbWVudERpZmYob2xkRWxlbWVudCwgbmV3RWxlbWVudCwgbG9naWNhbElkKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIENvbXB1dGVzIHRoZSB1bmlvbiBvZiB0d28gc2V0cyBvZiBzdHJpbmdzLlxuICpcbiAqIEBwYXJhbSBsdiB0aGUgbGVmdCBzZXQgb2Ygc3RyaW5ncy5cbiAqIEBwYXJhbSBydiB0aGUgcmlnaHQgc2V0IG9mIHN0cmluZ3MuXG4gKlxuICogQHJldHVybnMgYSBuZXcgYXJyYXkgY29udGFpbmluZyBhbGwgZWxlbWVidHMgZnJvbSArbHYrIGFuZCArcnYrLCB3aXRoIG5vIGR1cGxpY2F0ZXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1bmlvbk9mKGx2OiBzdHJpbmdbXSB8IFNldDxzdHJpbmc+LCBydjogc3RyaW5nW10gfCBTZXQ8c3RyaW5nPik6IHN0cmluZ1tdIHtcbiAgY29uc3QgcmVzdWx0ID0gbmV3IFNldChsdik7XG4gIGZvciAoY29uc3QgdiBvZiBydikge1xuICAgIHJlc3VsdC5hZGQodik7XG4gIH1cbiAgcmV0dXJuIG5ldyBBcnJheSguLi5yZXN1bHQpO1xufVxuIl19