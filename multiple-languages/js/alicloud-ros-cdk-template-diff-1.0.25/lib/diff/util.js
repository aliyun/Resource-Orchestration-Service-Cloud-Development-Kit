"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unionOf = exports.diffKeyedEntities = exports.deepEqual = exports.compare = void 0;
function convertAnyToString(value) {
    if (value === null) {
        return 'null';
    }
    if (value === undefined) {
        return 'undefined';
    }
    if (typeof value === 'string') {
        return value;
    }
    if (typeof value === 'number') {
        return value.toString();
    }
    if (typeof value === 'boolean') {
        return value.toString();
    }
    if (typeof value === 'object') {
        return JSON.stringify(value);
    }
    if (Array.isArray(value)) {
        return value.sort(compare).join(',');
    }
    return value.toString();
}
function compare(a, b) {
    return convertAnyToString(a).localeCompare(convertAnyToString(b));
}
exports.compare = compare;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsU0FBUyxrQkFBa0IsQ0FBQyxLQUFVO0lBQ3BDLElBQUksS0FBSyxLQUFLLElBQUksRUFBRTtRQUNsQixPQUFPLE1BQU0sQ0FBQztLQUNmO0lBQ0QsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1FBQ3ZCLE9BQU8sV0FBVyxDQUFDO0tBQ3BCO0lBQ0QsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7UUFDN0IsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUNELElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1FBQzdCLE9BQU8sS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO0tBQ3pCO0lBQ0QsSUFBSSxPQUFPLEtBQUssS0FBSyxTQUFTLEVBQUU7UUFDOUIsT0FBTyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDekI7SUFDRCxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtRQUM3QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDOUI7SUFDRCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDeEIsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUN0QztJQUNELE9BQU8sS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQzFCLENBQUM7QUFHRCxTQUFnQixPQUFPLENBQUMsQ0FBTSxFQUFFLENBQU07SUFDcEMsT0FBTyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNwRSxDQUFDO0FBRkQsMEJBRUM7QUFFRDs7Ozs7Ozs7OztHQVVHO0FBQ0gsU0FBZ0IsU0FBUyxDQUFDLE1BQVcsRUFBRSxNQUFXO0lB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QUU7UUFDbEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNmO0lBQ0QsT0FBTyxJQUFJLEtBQUssQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDO0FBQzlCLENBQUM7QUFORCwwQkFNQyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNvbnZlcnRBbnlUb1N0cmluZyh2YWx1ZTogYW55KTogc3RyaW5nIHtcbiAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgcmV0dXJuICdudWxsJztcbiAgfVxuICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiAndW5kZWZpbmVkJztcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygpO1xuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJykge1xuICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygpO1xuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcbiAgfVxuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWUuc29ydChjb21wYXJlKS5qb2luKCcsJyk7XG4gIH1cbiAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKCk7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmUoYTogYW55LCBiOiBhbnkpIHtcbiAgcmV0dXJuIGNvbnZlcnRBbnlUb1N0cmluZyhhKS5sb2NhbGVDb21wYXJlKGNvbnZlcnRBbnlUb1N0cmluZyhiKSk7XG59XG5cbi8qKlxuICogQ29tcGFyZXMgdHdvIG9iamVjdHMgZm9yIGVxdWFsaXR5LCBkZWVwbHkuIFRoZSBmdW5jdGlvbiBoYW5kbGVzIGFyZ3VtZW50cyB0aGF0IGFyZVxuICogK251bGwrLCArdW5kZWZpbmVkKywgYXJyYXlzIGFuZCBvYmplY3RzLiBGb3Igb2JqZWN0cywgdGhlIGZ1bmN0aW9uIHdpbGwgbm90IHRha2UgdGhlXG4gKiBvYmplY3QgcHJvdG90eXBlIGludG8gYWNjb3VudCBmb3IgdGhlIHB1cnBvc2Ugb2YgdGhlIGNvbXBhcmlzb24sIG9ubHkgdGhlIHZhbHVlcyBvZlxuICogcHJvcGVydGllcyByZXBvcnRlZCBieSArT2JqZWN0LmtleXMrLlxuICpcbiAqIEBwYXJhbSBsdmFsdWUgdGhlIGxlZnQgb3BlcmFuZCBvZiB0aGUgZXF1YWxpdHkgY29tcGFyaXNvbi5cbiAqIEBwYXJhbSBydmFsdWUgdGhlIHJpZ2h0IG9wZXJhbmQgb2YgdGhlIGVxdWFsaXR5IGNvbXBhcmlzb24uXG4gKlxuICogQHJldHVybnMgK3RydWUrIGlmIGJvdGggK2x2YWx1ZSsgYW5kICtydmFsdWUrIGFyZSBlcXVpdmFsZW50IHRvIGVhY2ggb3RoZXIuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWVwRXF1YWwobHZhbHVlOiBhbnksIHJ2YWx1ZTogYW55KTogYm9vbGVhbiB7XG4gIGlmIChsdmFsdWUgPT09IHJ2YWx1ZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmICh0eXBlb2YgbHZhbHVlICE9PSB0eXBlb2YgcnZhbHVlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChBcnJheS5pc0FycmF5KGx2YWx1ZSkgIT09IEFycmF5LmlzQXJyYXkocnZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAoQXJyYXkuaXNBcnJheShsdmFsdWUpIC8qICYmIEFycmF5LmlzQXJyYXkocnZhbHVlKSAqLykge1xuICAgIGlmIChsdmFsdWUubGVuZ3RoICE9PSBydmFsdWUubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbHZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoIWRlZXBFcXVhbChsdmFsdWVbaV0sIHJ2YWx1ZVtpXSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAodHlwZW9mIGx2YWx1ZSA9PT0gJ29iamVjdCcgLyogJiYgdHlwZW9mIHJ2YWx1ZSA9PT0gJ29iamVjdCcgKi8pIHtcbiAgICBpZiAobHZhbHVlID09PSBudWxsIHx8IHJ2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgLy8gSWYgYm90aCB3ZXJlIG51bGwsIHRoZXknZCBoYXZlIGJlZW4gPT09XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhsdmFsdWUpO1xuICAgIGlmIChrZXlzLmxlbmd0aCAhPT0gT2JqZWN0LmtleXMocnZhbHVlKS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgICAgaWYgKCFydmFsdWUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoIWRlZXBFcXVhbChsdmFsdWVba2V5XSwgcnZhbHVlW2tleV0pKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgLy8gTmVpdGhlciBvYmplY3QsIG5vciBhcnJheTogSSBkZWR1Y2UgdGhpcyBpcyBwcmltaXRpdmUgdHlwZVxuICAvLyBQcmltaXRpdmUgdHlwZSBhbmQgbm90ID09PSwgc28gSSBkZWR1Y2Ugbm90IGRlZXBFcXVhbFxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogUHJvZHVjZSB0aGUgZGlmZmVyZW5jZXMgYmV0d2VlbiB0d28gbWFwcywgYXMgYSBtYXAsIHVzaW5nIGEgc3BlY2lmaWVkIGRpZmYgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIG9sZFZhbHVlICB0aGUgb2xkIG1hcC5cbiAqIEBwYXJhbSBuZXdWYWx1ZSAgdGhlIG5ldyBtYXAuXG4gKiBAcGFyYW0gZWxlbWVudERpZmYgdGhlIGRpZmYgZnVuY3Rpb24uXG4gKlxuICogQHJldHVybnMgYSBtYXAgcmVwcmVzZW50aW5nIHRoZSBkaWZmZXJlbmNlcyBiZXR3ZWVuICtvbGRWYWx1ZSsgYW5kICtuZXdWYWx1ZSsuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaWZmS2V5ZWRFbnRpdGllczxUPihcbiAgb2xkVmFsdWU6IHsgW2tleTogc3RyaW5nXTogYW55IH0gfCB1bmRlZmluZWQsXG4gIG5ld1ZhbHVlOiB7IFtrZXk6IHN0cmluZ106IGFueSB9IHwgdW5kZWZpbmVkLFxuICBlbGVtZW50RGlmZjogKG9sZEVsZW1lbnQ6IGFueSwgbmV3RWxlbWVudDogYW55LCBrZXk6IHN0cmluZykgPT4gVCxcbik6IHsgW25hbWU6IHN0cmluZ106IFQgfSB7XG4gIGNvbnN0IHJlc3VsdDogeyBbbmFtZTogc3RyaW5nXTogVCB9ID0ge307XG4gIGZvciAoY29uc3QgbG9naWNhbElkIG9mIHVuaW9uT2YoT2JqZWN0LmtleXMob2xkVmFsdWUgfHwge30pLCBPYmplY3Qua2V5cyhuZXdWYWx1ZSB8fCB7fSkpKSB7XG4gICAgY29uc3Qgb2xkRWxlbWVudCA9IG9sZFZhbHVlICYmIG9sZFZhbHVlW2xvZ2ljYWxJZF07XG4gICAgY29uc3QgbmV3RWxlbWVudCA9IG5ld1ZhbHVlICYmIG5ld1ZhbHVlW2xvZ2ljYWxJZF07XG4gICAgcmVzdWx0W2xvZ2ljYWxJZF0gPSBlbGVtZW50RGlmZihvbGRFbGVtZW50LCBuZXdFbGVtZW50LCBsb2dpY2FsSWQpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ29tcHV0ZXMgdGhlIHVuaW9uIG9mIHR3byBzZXRzIG9mIHN0cmluZ3MuXG4gKlxuICogQHBhcmFtIGx2IHRoZSBsZWZ0IHNldCBvZiBzdHJpbmdzLlxuICogQHBhcmFtIHJ2IHRoZSByaWdodCBzZXQgb2Ygc3RyaW5ncy5cbiAqXG4gKiBAcmV0dXJucyBhIG5ldyBhcnJheSBjb250YWluaW5nIGFsbCBlbGVtZWJ0cyBmcm9tICtsdisgYW5kICtydissIHdpdGggbm8gZHVwbGljYXRlcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVuaW9uT2YobHY6IHN0cmluZ1tdIHwgU2V0PHN0cmluZz4sIHJ2OiBzdHJpbmdbXSB8IFNldDxzdHJpbmc+KTogc3RyaW5nW10ge1xuICBjb25zdCByZXN1bHQgPSBuZXcgU2V0KGx2KTtcbiAgZm9yIChjb25zdCB2IG9mIHJ2KSB7XG4gICAgcmVzdWx0LmFkZCh2KTtcbiAgfVxuICByZXR1cm4gbmV3IEFycmF5KC4uLnJlc3VsdCk7XG59XG4iXX0=