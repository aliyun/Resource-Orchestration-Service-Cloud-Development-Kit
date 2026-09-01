"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourcePart = exports.isSuperObject = exports.arrayWith = exports.exactValue = exports._objectContaining = exports.deepObjectLike = exports.objectLike = exports.HaveResourceAssertion = exports.haveResourceLike = exports.haveResource = exports.ABSENT = void 0;
const assertion_1 = require("../assertion");
/**
 * Magic value to signify that a certain key should be absent from the property bag.
 *
 * The property is either not present or set to `undefined.
 *
 * NOTE: `ABSENT` only works with the `haveResource()` and `haveResourceLike()`
 * assertions.
 */
exports.ABSENT = '{{ABSENT}}';
/**
 * An assertion to check whether a resource of a given type and with the given properties exists, disregarding properties
 *
 * @param resourceType the type of the resource that is expected to be present.
 * @param properties   the properties that the resource is expected to have. A function may be provided, in which case
 *                     it will be called with the properties of candidate resources and an ``InspectionFailure``
 *                     instance on which errors should be appended, and should return a truthy value to denote a match.
 * @param comparison   the entity that is being asserted against.
 * @param allowValueExtension if properties is an object, tells whether values must match exactly, or if they are
 *                     allowed to be supersets of the reference values. Meaningless if properties is a function.
 */
function haveResource(resourceType, properties, comparison, allowValueExtension = false) {
    return new HaveResourceAssertion(resourceType, properties, comparison, allowValueExtension);
}
exports.haveResource = haveResource;
/**
 * Sugar for calling ``haveResources`` with ``allowValueExtension`` set to ``true``.
 */
function haveResourceLike(resourceType, properties, comparison) {
    return haveResource(resourceType, properties, comparison, true);
}
exports.haveResourceLike = haveResourceLike;
class HaveResourceAssertion extends assertion_1.JestFriendlyAssertion {
    constructor(resourceType, properties, part, allowValueExtension = false) {
        super();
        this.resourceType = resourceType;
        this.inspected = [];
        this.matcher = isCallable(properties)
            ? properties
            : properties === undefined
                ? anything()
                : allowValueExtension
                    ? deepObjectLike(properties)
                    : objectLike(properties);
        this.part = part !== undefined ? part : ResourcePart.Properties;
    }
    assertUsing(inspector) {
        for (const logicalId of Object.keys(inspector.value.Resources || {})) {
            const resource = inspector.value.Resources[logicalId];
            if (resource.Type === this.resourceType) {
                const propsToCheck = this.part === ResourcePart.Properties ? resource.Properties : resource;
                // Pass inspection object as 2nd argument, initialize failure with default string,
                // to maintain backwards compatibility with old predicate API.
                const inspection = { resource, failureReason: 'Object did not match predicate' };
                if (match(propsToCheck, this.matcher, inspection)) {
                    return true;
                }
                this.inspected.push(inspection);
            }
        }
        return false;
    }
    generateErrorMessage() {
        const lines = [];
        lines.push(`None of ${this.inspected.length} resources matches ${this.description}.`);
        for (const inspected of this.inspected) {
            lines.push(`- ${inspected.failureReason} in:`);
            lines.push(indent(4, JSON.stringify(inspected.resource, null, 2)));
        }
        return lines.join('\n');
    }
    assertOrThrow(inspector) {
        if (!this.assertUsing(inspector)) {
            throw new Error(this.generateErrorMessage());
        }
    }
    get description() {
        // tslint:disable-next-line:max-line-length
        return `resource '${this.resourceType}' with ${JSON.stringify(this.matcher, undefined, 2)}`;
    }
}
exports.HaveResourceAssertion = HaveResourceAssertion;
function indent(n, s) {
    const prefix = ' '.repeat(n);
    return prefix + s.replace(/\n/g, '\n' + prefix);
}
/**
 * Match a given literal value against a matcher
 *
 * If the matcher is a callable, use that to evaluate the value. Otherwise, the values
 * must be literally the same.
 */
function match(value, matcher, inspection) {
    if (isCallable(matcher)) {
        // Custom matcher (this mostly looks very weird because our `InspectionFailure` signature is weird)
        const innerInspection = { ...inspection, failureReason: '' };
        const result = matcher(value, innerInspection);
        if (typeof result !== 'boolean') {
            return failMatcher(inspection, `Predicate returned non-boolean return value: ${result}`);
        }
        if (!result && !innerInspection.failureReason) {
            // Custom matcher neglected to return an error
            return failMatcher(inspection, 'Predicate returned false');
        }
        // Propagate inner error in case of failure
        if (!result) {
            inspection.failureReason = innerInspection.failureReason;
        }
        return result;
    }
    return matchLiteral(value, matcher, inspection);
}
/**
 * Match a literal value at the top level.
 *
 * When recursing into arrays or objects, the nested values can be either matchers
 * or literals.
 */
function matchLiteral(value, pattern, inspection) {
    if (pattern == null) {
        return true;
    }
    const errors = new Array();
    if (Array.isArray(value) !== Array.isArray(pattern)) {
        return failMatcher(inspection, 'Array type mismatch');
    }
    if (Array.isArray(value)) {
        if (pattern.length !== value.length) {
            return failMatcher(inspection, 'Array length mismatch');
        }
        // Recurse comparison for individual objects
        for (let i = 0; i < pattern.length; i++) {
            if (!match(value[i], pattern[i], { ...inspection })) {
                errors.push(`Array element ${i} mismatch`);
            }
        }
        if (errors.length > 0) {
            return failMatcher(inspection, errors.join(', '));
        }
        return true;
    }
    if ((typeof value === 'object') !== (typeof pattern === 'object')) {
        return failMatcher(inspection, 'Object type mismatch');
    }
    if (typeof pattern === 'object') {
        // Check that all fields in the pattern have the right value
        const innerInspection = { ...inspection, failureReason: '' };
        const matcher = objectLike(pattern)(value, innerInspection);
        if (!matcher) {
            inspection.failureReason = innerInspection.failureReason;
            return false;
        }
        // Check no fields uncovered
        const realFields = new Set(Object.keys(value));
        for (const key of Object.keys(pattern)) {
            realFields.delete(key);
        }
        if (realFields.size > 0) {
            return failMatcher(inspection, `Unexpected keys present in object: ${Array.from(realFields).join(', ')}`);
        }
        return true;
    }
    if (value !== pattern) {
        return failMatcher(inspection, 'Different values');
    }
    return true;
}
/**
 * Helper function to make matcher failure reporting a little easier
 *
 * Our protocol is weird (change a string on a passed-in object and return 'false'),
 * but I don't want to change that right now.
 */
function failMatcher(inspection, error) {
    inspection.failureReason = error;
    return false;
}
/**
 * A matcher for an object that contains at least the given fields with the given matchers (or literals)
 *
 * Only does lenient matching one level deep, at the next level all objects must declare the
 * exact expected keys again.
 */
function objectLike(pattern) {
    return _objectContaining(pattern, false);
}
exports.objectLike = objectLike;
/**
 * A matcher for an object that contains at least the given fields with the given matchers (or literals)
 *
 * Switches to "deep" lenient matching. Nested objects also only need to contain declared keys.
 */
function deepObjectLike(pattern) {
    return _objectContaining(pattern, true);
}
exports.deepObjectLike = deepObjectLike;
function _objectContaining(pattern, deep) {
    const ret = (value, inspection) => {
        if (typeof value !== 'object' || !value) {
            return failMatcher(inspection, `Expect an object but got '${typeof value}'`);
        }
        const errors = new Array();
        for (const [patternKey, patternValue] of Object.entries(pattern)) {
            if (patternValue === exports.ABSENT) {
                if (value[patternKey] !== undefined) {
                    errors.push(`Field ${patternKey} present, but shouldn't be`);
                }
                continue;
            }
            if (!(patternKey in value)) {
                errors.push(`Field ${patternKey} missing`);
                continue;
            }
            // If we are doing DEEP objectLike, translate object literals in the pattern into
            // more `deepObjectLike` matchers, even if they occur in lists.
            const matchValue = deep ? deepMatcherFromObjectLiteral(patternValue) : patternValue;
            const innerInspection = { ...inspection, failureReason: '' };
            const valueMatches = match(value[patternKey], matchValue, innerInspection);
            if (!valueMatches) {
                errors.push(`Field ${patternKey} mismatch: ${innerInspection.failureReason}`);
            }
        }
        /**
         * Transform nested object literals into more deep object matchers, if applicable
         *
         * Object literals in lists are also transformed.
         */
        function deepMatcherFromObjectLiteral(nestedPattern) {
            if (isObject(nestedPattern)) {
                return deepObjectLike(nestedPattern);
            }
            if (Array.isArray(nestedPattern)) {
                return nestedPattern.map(deepMatcherFromObjectLiteral);
            }
            return nestedPattern;
        }
        if (errors.length > 0) {
            return failMatcher(inspection, errors.join(', '));
        }
        return true;
    };
    // Override toJSON so that our error messages print an readable version of this matcher
    // (which we produce by doing JSON.stringify() at some point in the future).
    ret.toJSON = () => ({ [deep ? '$deepObjectLike' : '$objectLike']: pattern });
    return ret;
}
exports._objectContaining = _objectContaining;
/**
 * Match exactly the given value
 *
 * This is the default, you only need this to escape from the deep lenient matching
 * of `deepObjectLike`.
 */
function exactValue(expected) {
    const ret = (value, inspection) => {
        return matchLiteral(value, expected, inspection);
    };
    // Override toJSON so that our error messages print an readable version of this matcher
    // (which we produce by doing JSON.stringify() at some point in the future).
    ret.toJSON = () => ({ $exactValue: expected });
    return ret;
}
exports.exactValue = exactValue;
/**
 * A matcher for a list that contains all of the given elements in any order
 */
function arrayWith(...elements) {
    if (elements.length === 0) {
        return anything();
    }
    const ret = (value, inspection) => {
        if (!Array.isArray(value)) {
            return failMatcher(inspection, `Expect an array but got '${typeof value}'`);
        }
        for (const element of elements) {
            const failure = longestFailure(value, element);
            if (failure) {
                return failMatcher(inspection, `Array did not contain expected element, closest match at index ${failure[0]}: ${failure[1]}`);
            }
        }
        return true;
        /**
         * Return 'null' if the matcher matches anywhere in the array, otherwise the longest error and its index
         */
        function longestFailure(array, matcher) {
            let fail = null;
            for (let i = 0; i < array.length; i++) {
                const innerInspection = { ...inspection, failureReason: '' };
                if (match(array[i], matcher, innerInspection)) {
                    return null;
                }
                if (fail === null || innerInspection.failureReason.length > fail[1].length) {
                    fail = [i, innerInspection.failureReason];
                }
            }
            return fail;
        }
    };
    // Override toJSON so that our error messages print an readable version of this matcher
    // (which we produce by doing JSON.stringify() at some point in the future).
    ret.toJSON = () => ({ $arrayContaining: elements.length === 1 ? elements[0] : elements });
    return ret;
}
exports.arrayWith = arrayWith;
/**
 * Matches anything
 */
function anything() {
    const ret = () => {
        return true;
    };
    ret.toJSON = () => ({ $anything: true });
    return ret;
}
/**
 * Return whether `superObj` is a super-object of `obj`.
 *
 * A super-object has the same or more property values, recursing into sub properties if ``allowValueExtension`` is true.
 *
 * At any point in the object, a value may be replaced with a function which will be used to check that particular field.
 * The type of a matcher function is expected to be of type PropertyMatcher.
 *
 * @deprecated - Use `objectLike` or a literal object instead.
 */
function isSuperObject(superObj, pattern, errors = [], allowValueExtension = false) {
    const matcher = allowValueExtension ? deepObjectLike(pattern) : objectLike(pattern);
    const inspection = { resource: superObj, failureReason: '' };
    const ret = match(superObj, matcher, inspection);
    if (!ret) {
        errors.push(inspection.failureReason);
    }
    return ret;
}
exports.isSuperObject = isSuperObject;
/**
 * What part of the resource to compare
 */
var ResourcePart;
(function (ResourcePart) {
    /**
     * Only compare the resource's properties
     */
    ResourcePart[ResourcePart["Properties"] = 0] = "Properties";
    /**
     * Check the entire config
     *
     * (including UpdateConfig, DependsOn, etc.)
     */
    ResourcePart[ResourcePart["CompleteDefinition"] = 1] = "CompleteDefinition";
})(ResourcePart = exports.ResourcePart || (exports.ResourcePart = {}));
/**
 * Whether a value is a callable
 */
function isCallable(x) {
    return x && {}.toString.call(x) === '[object Function]';
}
/**
 * Whether a value is an object
 */
function isObject(x) {
    // Because `typeof null === 'object'`.
    return x && typeof x === 'object';
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGF2ZS1yZXNvdXJjZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhhdmUtcmVzb3VyY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNENBQWdFO0FBR2hFOzs7Ozs7O0dBT0c7QUFDVSxRQUFBLE1BQU0sR0FBRyxZQUFZLENBQUM7QUFFbkM7Ozs7Ozs7Ozs7R0FVRztBQUNILFNBQWdCLFlBQVksQ0FDMUIsWUFBb0IsRUFDcEIsVUFBZ0IsRUFDaEIsVUFBeUIsRUFDekIsc0JBQStCLEtBQUs7SUFFcEMsT0FBTyxJQUFJLHFCQUFxQixDQUFDLFlBQVksRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLG1CQUFtQixDQUFDLENBQUM7QUFDOUYsQ0FBQztBQVBELG9DQU9DO0FBRUQ7O0dBRUc7QUFDSCxTQUFnQixnQkFBZ0IsQ0FBQyxZQUFvQixFQUFFLFVBQWdCLEVBQUUsVUFBeUI7SUFDaEcsT0FBTyxZQUFZLENBQUMsWUFBWSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDbEUsQ0FBQztBQUZELDRDQUVDO0FBSUQsTUFBYSxxQkFBc0IsU0FBUSxpQ0FBcUM7SUFLOUUsWUFDbUIsWUFBb0IsRUFDckMsVUFBZ0IsRUFDaEIsSUFBbUIsRUFDbkIsc0JBQStCLEtBQUs7UUFFcEMsS0FBSyxFQUFFLENBQUM7UUFMUyxpQkFBWSxHQUFaLFlBQVksQ0FBUTtRQUx0QixjQUFTLEdBQXdCLEVBQUUsQ0FBQztRQVluRCxJQUFJLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQyxVQUFVLENBQUM7WUFDbkMsQ0FBQyxDQUFDLFVBQVU7WUFDWixDQUFDLENBQUMsVUFBVSxLQUFLLFNBQVM7Z0JBQzFCLENBQUMsQ0FBQyxRQUFRLEVBQUU7Z0JBQ1osQ0FBQyxDQUFDLG1CQUFtQjtvQkFDckIsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUM7b0JBQzVCLENBQUMsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7UUFD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QU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0tBQ3ZDO0lBQ0QsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDO0FBZEQsc0NBY0M7QUFFRDs7R0FFRztBQUNILElBQVksWUFZWDtBQVpELFdBQVksWUFBWTtJQUN0Qjs7T0FFRztJQUNILDJEQUFVLENBQUE7SUFFVjs7OztPQUlHO0lBQ0gsMkVBQWtCLENBQUE7QUFDcEIsQ0FBQyxFQVpXLFlBQVksR0FBWixvQkFBWSxLQUFaLG9CQUFZLFFBWXZCO0FBRUQ7O0dBRUc7QUFDSCxTQUFTLFVBQVUsQ0FBQyxDQUFNO0lBQ3hCLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLG1CQUFtQixDQUFDO0FBQzFELENBQUM7QUFFRDs7R0FFRztBQUNILFNBQVMsUUFBUSxDQUFDLENBQU07SUFDdEIsc0NBQXNDO0lBQ3RDLE9BQU8sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxLQUFLLFFBQVEsQ0FBQztBQUNwQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXNzZXJ0aW9uLCBKZXN0RnJpZW5kbHlBc3NlcnRpb24gfSBmcm9tICcuLi9hc3NlcnRpb24nO1xuaW1wb3J0IHsgU3RhY2tJbnNwZWN0b3IgfSBmcm9tICcuLi9pbnNwZWN0b3InO1xuXG4vKipcbiAqIE1hZ2ljIHZhbHVlIHRvIHNpZ25pZnkgdGhhdCBhIGNlcnRhaW4ga2V5IHNob3VsZCBiZSBhYnNlbnQgZnJvbSB0aGUgcHJvcGVydHkgYmFnLlxuICpcbiAqIFRoZSBwcm9wZXJ0eSBpcyBlaXRoZXIgbm90IHByZXNlbnQgb3Igc2V0IHRvIGB1bmRlZmluZWQuXG4gKlxuICogTk9URTogYEFCU0VOVGAgb25seSB3b3JrcyB3aXRoIHRoZSBgaGF2ZVJlc291cmNlKClgIGFuZCBgaGF2ZVJlc291cmNlTGlrZSgpYFxuICogYXNzZXJ0aW9ucy5cbiAqL1xuZXhwb3J0IGNvbnN0IEFCU0VOVCA9ICd7e0FCU0VOVH19JztcblxuLyoqXG4gKiBBbiBhc3NlcnRpb24gdG8gY2hlY2sgd2hldGhlciBhIHJlc291cmNlIG9mIGEgZ2l2ZW4gdHlwZSBhbmQgd2l0aCB0aGUgZ2l2ZW4gcHJvcGVydGllcyBleGlzdHMsIGRpc3JlZ2FyZGluZyBwcm9wZXJ0aWVzXG4gKlxuICogQHBhcmFtIHJlc291cmNlVHlwZSB0aGUgdHlwZSBvZiB0aGUgcmVzb3VyY2UgdGhhdCBpcyBleHBlY3RlZCB0byBiZSBwcmVzZW50LlxuICogQHBhcmFtIHByb3BlcnRpZXMgICB0aGUgcHJvcGVydGllcyB0aGF0IHRoZSByZXNvdXJjZSBpcyBleHBlY3RlZCB0byBoYXZlLiBBIGZ1bmN0aW9uIG1heSBiZSBwcm92aWRlZCwgaW4gd2hpY2ggY2FzZVxuICogICAgICAgICAgICAgICAgICAgICBpdCB3aWxsIGJlIGNhbGxlZCB3aXRoIHRoZSBwcm9wZXJ0aWVzIG9mIGNhbmRpZGF0ZSByZXNvdXJjZXMgYW5kIGFuIGBgSW5zcGVjdGlvbkZhaWx1cmVgYFxuICogICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZSBvbiB3aGljaCBlcnJvcnMgc2hvdWxkIGJlIGFwcGVuZGVkLCBhbmQgc2hvdWxkIHJldHVybiBhIHRydXRoeSB2YWx1ZSB0byBkZW5vdGUgYSBtYXRjaC5cbiAqIEBwYXJhbSBjb21wYXJpc29uICAgdGhlIGVudGl0eSB0aGF0IGlzIGJlaW5nIGFzc2VydGVkIGFnYWluc3QuXG4gKiBAcGFyYW0gYWxsb3dWYWx1ZUV4dGVuc2lvbiBpZiBwcm9wZXJ0aWVzIGlzIGFuIG9iamVjdCwgdGVsbHMgd2hldGhlciB2YWx1ZXMgbXVzdCBtYXRjaCBleGFjdGx5LCBvciBpZiB0aGV5IGFyZVxuICogICAgICAgICAgICAgICAgICAgICBhbGxvd2VkIHRvIGJlIHN1cGVyc2V0cyBvZiB0aGUgcmVmZXJlbmNlIHZhbHVlcy4gTWVhbmluZ2xlc3MgaWYgcHJvcGVydGllcyBpcyBhIGZ1bmN0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaGF2ZVJlc291cmNlKFxuICByZXNvdXJjZVR5cGU6IHN0cmluZyxcbiAgcHJvcGVydGllcz86IGFueSxcbiAgY29tcGFyaXNvbj86IFJlc291cmNlUGFydCxcbiAgYWxsb3dWYWx1ZUV4dGVuc2lvbjogYm9vbGVhbiA9IGZhbHNlLFxuKTogQXNzZXJ0aW9uPFN0YWNrSW5zcGVjdG9yPiB7XG4gIHJldHVybiBuZXcgSGF2ZVJlc291cmNlQXNzZXJ0aW9uKHJlc291cmNlVHlwZSwgcHJvcGVydGllcywgY29tcGFyaXNvbiwgYWxsb3dWYWx1ZUV4dGVuc2lvbik7XG59XG5cbi8qKlxuICogU3VnYXIgZm9yIGNhbGxpbmcgYGBoYXZlUmVzb3VyY2VzYGAgd2l0aCBgYGFsbG93VmFsdWVFeHRlbnNpb25gYCBzZXQgdG8gYGB0cnVlYGAuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoYXZlUmVzb3VyY2VMaWtlKHJlc291cmNlVHlwZTogc3RyaW5nLCBwcm9wZXJ0aWVzPzogYW55LCBjb21wYXJpc29uPzogUmVzb3VyY2VQYXJ0KSB7XG4gIHJldHVybiBoYXZlUmVzb3VyY2UocmVzb3VyY2VUeXBlLCBwcm9wZXJ0aWVzLCBjb21wYXJpc29uLCB0cnVlKTtcbn1cblxuZXhwb3J0IHR5cGUgUHJvcGVydHlNYXRjaGVyID0gKHByb3BzOiBhbnksIGluc3BlY3Rpb246IEluc3BlY3Rpb25GYWlsdXJlKSA9PiBib29sZWFuO1xuXG5leHBvcnQgY2xhc3MgSGF2ZVJlc291cmNlQXNzZXJ0aW9uIGV4dGVuZHMgSmVzdEZyaWVuZGx5QXNzZXJ0aW9uPFN0YWNrSW5zcGVjdG9yPiB7XG4gIHByaXZhdGUgcmVhZG9ubHkgaW5zcGVjdGVkOiBJbnNwZWN0aW9uRmFpbHVyZVtdID0gW107XG4gIHByaXZhdGUgcmVhZG9ubHkgcGFydDogUmVzb3VyY2VQYXJ0O1xuICBwcml2YXRlIHJlYWRvbmx5IG1hdGNoZXI6IGFueTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlYWRvbmx5IHJlc291cmNlVHlwZTogc3RyaW5nLFxuICAgIHByb3BlcnRpZXM/OiBhbnksXG4gICAgcGFydD86IFJlc291cmNlUGFydCxcbiAgICBhbGxvd1ZhbHVlRXh0ZW5zaW9uOiBib29sZWFuID0gZmFsc2UsXG4gICkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLm1hdGNoZXIgPSBpc0NhbGxhYmxlKHByb3BlcnRpZXMpXG4gICAgICA/IHByb3BlcnRpZXNcbiAgICAgIDogcHJvcGVydGllcyA9PT0gdW5kZWZpbmVkXG4gICAgICA/IGFueXRoaW5nKClcbiAgICAgIDogYWxsb3dWYWx1ZUV4dGVuc2lvblxuICAgICAgPyBkZWVwT2JqZWN0TGlrZShwcm9wZXJ0aWVzKVxuICAgICAgOiBvYmplY3RMaWtlKHByb3BlcnRpZXMpO1xuICAgIHRoaXMucGFydCA9IHBhcnQgIT09IHVuZGVmaW5lZCA/IHBhcnQgOiBSZXNvdXJjZVBhcnQuUHJvcGVydGllcztcbiAgfVxuXG4gIHB1YmxpYyBhc3NlcnRVc2luZyhpbnNwZWN0b3I6IFN0YWNrSW5zcGVjdG9yKTogYm9vbGVhbiB7XG4gICAgZm9yIChjb25zdCBsb2dpY2FsSWQgb2YgT2JqZWN0LmtleXMoaW5zcGVjdG9yLnZhbHVlLlJlc291cmNlcyB8fCB7fSkpIHtcbiAgICAgIGNvbnN0IHJlc291cmNlID0gaW5zcGVjdG9yLnZhbHVlLlJlc291cmNlc1tsb2dpY2FsSWRdO1xuICAgICAgaWYgKHJlc291cmNlLlR5cGUgPT09IHRoaXMucmVzb3VyY2VUeXBlKSB7XG4gICAgICAgIGNvbnN0IHByb3BzVG9DaGVjayA9IHRoaXMucGFydCA9PT0gUmVzb3VyY2VQYXJ0LlByb3BlcnRpZXMgPyByZXNvdXJjZS5Qcm9wZXJ0aWVzIDogcmVzb3VyY2U7XG5cbiAgICAgICAgLy8gUGFzcyBpbnNwZWN0aW9uIG9iamVjdCBhcyAybmQgYXJndW1lbnQsIGluaXRpYWxpemUgZmFpbHVyZSB3aXRoIGRlZmF1bHQgc3RyaW5nLFxuICAgICAgICAvLyB0byBtYWludGFpbiBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSB3aXRoIG9sZCBwcmVkaWNhdGUgQVBJLlxuICAgICAgICBjb25zdCBpbnNwZWN0aW9uID0geyByZXNvdXJjZSwgZmFpbHVyZVJlYXNvbjogJ09iamVjdCBkaWQgbm90IG1hdGNoIHByZWRpY2F0ZScgfTtcblxuICAgICAgICBpZiAobWF0Y2gocHJvcHNUb0NoZWNrLCB0aGlzLm1hdGNoZXIsIGluc3BlY3Rpb24pKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmluc3BlY3RlZC5wdXNoKGluc3BlY3Rpb24pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyBnZW5lcmF0ZUVycm9yTWVzc2FnZSgpIHtcbiAgICBjb25zdCBsaW5lczogc3RyaW5nW10gPSBbXTtcbiAgICBsaW5lcy5wdXNoKGBOb25lIG9mICR7dGhpcy5pbnNwZWN0ZWQubGVuZ3RofSByZXNvdXJjZXMgbWF0Y2hlcyAke3RoaXMuZGVzY3JpcHRpb259LmApO1xuXG4gICAgZm9yIChjb25zdCBpbnNwZWN0ZWQgb2YgdGhpcy5pbnNwZWN0ZWQpIHtcbiAgICAgIGxpbmVzLnB1c2goYC0gJHtpbnNwZWN0ZWQuZmFpbHVyZVJlYXNvbn0gaW46YCk7XG4gICAgICBsaW5lcy5wdXNoKGluZGVudCg0LCBKU09OLnN0cmluZ2lmeShpbnNwZWN0ZWQucmVzb3VyY2UsIG51bGwsIDIpKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpbmVzLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcHVibGljIGFzc2VydE9yVGhyb3coaW5zcGVjdG9yOiBTdGFja0luc3BlY3Rvcikge1xuICAgIGlmICghdGhpcy5hc3NlcnRVc2luZyhpbnNwZWN0b3IpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IodGhpcy5nZW5lcmF0ZUVycm9yTWVzc2FnZSgpKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGRlc2NyaXB0aW9uKCk6IHN0cmluZyB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxuICAgIHJldHVybiBgcmVzb3VyY2UgJyR7dGhpcy5yZXNvdXJjZVR5cGV9JyB3aXRoICR7SlNPTi5zdHJpbmdpZnkodGhpcy5tYXRjaGVyLCB1bmRlZmluZWQsIDIpfWA7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5kZW50KG46IG51bWJlciwgczogc3RyaW5nKSB7XG4gIGNvbnN0IHByZWZpeCA9ICcgJy5yZXBlYXQobik7XG4gIHJldHVybiBwcmVmaXggKyBzLnJlcGxhY2UoL1xcbi9nLCAnXFxuJyArIHByZWZpeCk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW5zcGVjdGlvbkZhaWx1cmUge1xuICByZXNvdXJjZTogYW55O1xuICBmYWlsdXJlUmVhc29uOiBzdHJpbmc7XG59XG5cbi8qKlxuICogTWF0Y2ggYSBnaXZlbiBsaXRlcmFsIHZhbHVlIGFnYWluc3QgYSBtYXRjaGVyXG4gKlxuICogSWYgdGhlIG1hdGNoZXIgaXMgYSBjYWxsYWJsZSwgdXNlIHRoYXQgdG8gZXZhbHVhdGUgdGhlIHZhbHVlLiBPdGhlcndpc2UsIHRoZSB2YWx1ZXNcbiAqIG11c3QgYmUgbGl0ZXJhbGx5IHRoZSBzYW1lLlxuICovXG5mdW5jdGlvbiBtYXRjaCh2YWx1ZTogYW55LCBtYXRjaGVyOiBhbnksIGluc3BlY3Rpb246IEluc3BlY3Rpb25GYWlsdXJlKSB7XG4gIGlmIChpc0NhbGxhYmxlKG1hdGNoZXIpKSB7XG4gICAgLy8gQ3VzdG9tIG1hdGNoZXIgKHRoaXMgbW9zdGx5IGxvb2tzIHZlcnkgd2VpcmQgYmVjYXVzZSBvdXIgYEluc3BlY3Rpb25GYWlsdXJlYCBzaWduYXR1cmUgaXMgd2VpcmQpXG4gICAgY29uc3QgaW5uZXJJbnNwZWN0aW9uOiBJbnNwZWN0aW9uRmFpbHVyZSA9IHsgLi4uaW5zcGVjdGlvbiwgZmFpbHVyZVJlYXNvbjogJycgfTtcbiAgICBjb25zdCByZXN1bHQgPSBtYXRjaGVyKHZhbHVlLCBpbm5lckluc3BlY3Rpb24pO1xuICAgIGlmICh0eXBlb2YgcmVzdWx0ICE9PSAnYm9vbGVhbicpIHtcbiAgICAgIHJldHVybiBmYWlsTWF0Y2hlcihpbnNwZWN0aW9uLCBgUHJlZGljYXRlIHJldHVybmVkIG5vbi1ib29sZWFuIHJldHVybiB2YWx1ZTogJHtyZXN1bHR9YCk7XG4gICAgfVxuICAgIGlmICghcmVzdWx0ICYmICFpbm5lckluc3BlY3Rpb24uZmFpbHVyZVJlYXNvbikge1xuICAgICAgLy8gQ3VzdG9tIG1hdGNoZXIgbmVnbGVjdGVkIHRvIHJldHVybiBhbiBlcnJvclxuICAgICAgcmV0dXJuIGZhaWxNYXRjaGVyKGluc3BlY3Rpb24sICdQcmVkaWNhdGUgcmV0dXJuZWQgZmFsc2UnKTtcbiAgICB9XG4gICAgLy8gUHJvcGFnYXRlIGlubmVyIGVycm9yIGluIGNhc2Ugb2YgZmFpbHVyZVxuICAgIGlmICghcmVzdWx0KSB7XG4gICAgICBpbnNwZWN0aW9uLmZhaWx1cmVSZWFzb24gPSBpbm5lckluc3BlY3Rpb24uZmFpbHVyZVJlYXNvbjtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHJldHVybiBtYXRjaExpdGVyYWwodmFsdWUsIG1hdGNoZXIsIGluc3BlY3Rpb24pO1xufVxuXG4vKipcbiAqIE1hdGNoIGEgbGl0ZXJhbCB2YWx1ZSBhdCB0aGUgdG9wIGxldmVsLlxuICpcbiAqIFdoZW4gcmVjdXJzaW5nIGludG8gYXJyYXlzIG9yIG9iamVjdHMsIHRoZSBuZXN0ZWQgdmFsdWVzIGNhbiBiZSBlaXRoZXIgbWF0Y2hlcnNcbiAqIG9yIGxpdGVyYWxzLlxuICovXG5mdW5jdGlvbiBtYXRjaExpdGVyYWwodmFsdWU6IGFueSwgcGF0dGVybjogYW55LCBpbnNwZWN0aW9uOiBJbnNwZWN0aW9uRmFpbHVyZSkge1xuICBpZiAocGF0dGVybiA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBjb25zdCBlcnJvcnMgPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSAhPT0gQXJyYXkuaXNBcnJheShwYXR0ZXJuKSkge1xuICAgIHJldHVybiBmYWlsTWF0Y2hlcihpbnNwZWN0aW9uLCAnQXJyYXkgdHlwZSBtaXNtYXRjaCcpO1xuICB9XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIGlmIChwYXR0ZXJuLmxlbmd0aCAhPT0gdmFsdWUubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZmFpbE1hdGNoZXIoaW5zcGVjdGlvbiwgJ0FycmF5IGxlbmd0aCBtaXNtYXRjaCcpO1xuICAgIH1cblxuICAgIC8vIFJlY3Vyc2UgY29tcGFyaXNvbiBmb3IgaW5kaXZpZHVhbCBvYmplY3RzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXR0ZXJuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoIW1hdGNoKHZhbHVlW2ldLCBwYXR0ZXJuW2ldLCB7IC4uLmluc3BlY3Rpb24gfSkpIHtcbiAgICAgICAgZXJyb3JzLnB1c2goYEFycmF5IGVsZW1lbnQgJHtpfSBtaXNtYXRjaGApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChlcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIGZhaWxNYXRjaGVyKGluc3BlY3Rpb24sIGVycm9ycy5qb2luKCcsICcpKTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKCh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSAhPT0gKHR5cGVvZiBwYXR0ZXJuID09PSAnb2JqZWN0JykpIHtcbiAgICByZXR1cm4gZmFpbE1hdGNoZXIoaW5zcGVjdGlvbiwgJ09iamVjdCB0eXBlIG1pc21hdGNoJyk7XG4gIH1cbiAgaWYgKHR5cGVvZiBwYXR0ZXJuID09PSAnb2JqZWN0Jykge1xuICAgIC8vIENoZWNrIHRoYXQgYWxsIGZpZWxkcyBpbiB0aGUgcGF0dGVybiBoYXZlIHRoZSByaWdodCB2YWx1ZVxuICAgIGNvbnN0IGlubmVySW5zcGVjdGlvbiA9IHsgLi4uaW5zcGVjdGlvbiwgZmFpbHVyZVJlYXNvbjogJycgfTtcbiAgICBjb25zdCBtYXRjaGVyID0gb2JqZWN0TGlrZShwYXR0ZXJuKSh2YWx1ZSwgaW5uZXJJbnNwZWN0aW9uKTtcbiAgICBpZiAoIW1hdGNoZXIpIHtcbiAgICAgIGluc3BlY3Rpb24uZmFpbHVyZVJlYXNvbiA9IGlubmVySW5zcGVjdGlvbi5mYWlsdXJlUmVhc29uO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIENoZWNrIG5vIGZpZWxkcyB1bmNvdmVyZWRcbiAgICBjb25zdCByZWFsRmllbGRzID0gbmV3IFNldChPYmplY3Qua2V5cyh2YWx1ZSkpO1xuICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHBhdHRlcm4pKSB7XG4gICAgICByZWFsRmllbGRzLmRlbGV0ZShrZXkpO1xuICAgIH1cbiAgICBpZiAocmVhbEZpZWxkcy5zaXplID4gMCkge1xuICAgICAgcmV0dXJuIGZhaWxNYXRjaGVyKGluc3BlY3Rpb24sIGBVbmV4cGVjdGVkIGtleXMgcHJlc2VudCBpbiBvYmplY3Q6ICR7QXJyYXkuZnJvbShyZWFsRmllbGRzKS5qb2luKCcsICcpfWApO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh2YWx1ZSAhPT0gcGF0dGVybikge1xuICAgIHJldHVybiBmYWlsTWF0Y2hlcihpbnNwZWN0aW9uLCAnRGlmZmVyZW50IHZhbHVlcycpO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIHRvIG1ha2UgbWF0Y2hlciBmYWlsdXJlIHJlcG9ydGluZyBhIGxpdHRsZSBlYXNpZXJcbiAqXG4gKiBPdXIgcHJvdG9jb2wgaXMgd2VpcmQgKGNoYW5nZSBhIHN0cmluZyBvbiBhIHBhc3NlZC1pbiBvYmplY3QgYW5kIHJldHVybiAnZmFsc2UnKSxcbiAqIGJ1dCBJIGRvbid0IHdhbnQgdG8gY2hhbmdlIHRoYXQgcmlnaHQgbm93LlxuICovXG5mdW5jdGlvbiBmYWlsTWF0Y2hlcihpbnNwZWN0aW9uOiBJbnNwZWN0aW9uRmFpbHVyZSwgZXJyb3I6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBpbnNwZWN0aW9uLmZhaWx1cmVSZWFzb24gPSBlcnJvcjtcbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIEEgbWF0Y2hlciBmb3IgYW4gb2JqZWN0IHRoYXQgY29udGFpbnMgYXQgbGVhc3QgdGhlIGdpdmVuIGZpZWxkcyB3aXRoIHRoZSBnaXZlbiBtYXRjaGVycyAob3IgbGl0ZXJhbHMpXG4gKlxuICogT25seSBkb2VzIGxlbmllbnQgbWF0Y2hpbmcgb25lIGxldmVsIGRlZXAsIGF0IHRoZSBuZXh0IGxldmVsIGFsbCBvYmplY3RzIG11c3QgZGVjbGFyZSB0aGVcbiAqIGV4YWN0IGV4cGVjdGVkIGtleXMgYWdhaW4uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvYmplY3RMaWtlPEEgZXh0ZW5kcyBvYmplY3Q+KHBhdHRlcm46IEEpOiBQcm9wZXJ0eU1hdGNoZXIge1xuICByZXR1cm4gX29iamVjdENvbnRhaW5pbmcocGF0dGVybiwgZmFsc2UpO1xufVxuXG4vKipcbiAqIEEgbWF0Y2hlciBmb3IgYW4gb2JqZWN0IHRoYXQgY29udGFpbnMgYXQgbGVhc3QgdGhlIGdpdmVuIGZpZWxkcyB3aXRoIHRoZSBnaXZlbiBtYXRjaGVycyAob3IgbGl0ZXJhbHMpXG4gKlxuICogU3dpdGNoZXMgdG8gXCJkZWVwXCIgbGVuaWVudCBtYXRjaGluZy4gTmVzdGVkIG9iamVjdHMgYWxzbyBvbmx5IG5lZWQgdG8gY29udGFpbiBkZWNsYXJlZCBrZXlzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVlcE9iamVjdExpa2U8QSBleHRlbmRzIG9iamVjdD4ocGF0dGVybjogQSk6IFByb3BlcnR5TWF0Y2hlciB7XG4gIHJldHVybiBfb2JqZWN0Q29udGFpbmluZyhwYXR0ZXJuLCB0cnVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9vYmplY3RDb250YWluaW5nPEEgZXh0ZW5kcyBvYmplY3Q+KHBhdHRlcm46IEEsIGRlZXA6IGJvb2xlYW4pOiBQcm9wZXJ0eU1hdGNoZXIge1xuICBjb25zdCByZXQgPSAodmFsdWU6IGFueSwgaW5zcGVjdGlvbjogSW5zcGVjdGlvbkZhaWx1cmUpOiBib29sZWFuID0+IHtcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0JyB8fCAhdmFsdWUpIHtcbiAgICAgIHJldHVybiBmYWlsTWF0Y2hlcihpbnNwZWN0aW9uLCBgRXhwZWN0IGFuIG9iamVjdCBidXQgZ290ICcke3R5cGVvZiB2YWx1ZX0nYCk7XG4gICAgfVxuXG4gICAgY29uc3QgZXJyb3JzID0gbmV3IEFycmF5PHN0cmluZz4oKTtcblxuICAgIGZvciAoY29uc3QgW3BhdHRlcm5LZXksIHBhdHRlcm5WYWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMocGF0dGVybikpIHtcbiAgICAgIGlmIChwYXR0ZXJuVmFsdWUgPT09IEFCU0VOVCkge1xuICAgICAgICBpZiAodmFsdWVbcGF0dGVybktleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGVycm9ycy5wdXNoKGBGaWVsZCAke3BhdHRlcm5LZXl9IHByZXNlbnQsIGJ1dCBzaG91bGRuJ3QgYmVgKTtcbiAgICAgICAgfVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCEocGF0dGVybktleSBpbiB2YWx1ZSkpIHtcbiAgICAgICAgZXJyb3JzLnB1c2goYEZpZWxkICR7cGF0dGVybktleX0gbWlzc2luZ2ApO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLy8gSWYgd2UgYXJlIGRvaW5nIERFRVAgb2JqZWN0TGlrZSwgdHJhbnNsYXRlIG9iamVjdCBsaXRlcmFscyBpbiB0aGUgcGF0dGVybiBpbnRvXG4gICAgICAvLyBtb3JlIGBkZWVwT2JqZWN0TGlrZWAgbWF0Y2hlcnMsIGV2ZW4gaWYgdGhleSBvY2N1ciBpbiBsaXN0cy5cbiAgICAgIGNvbnN0IG1hdGNoVmFsdWUgPSBkZWVwID8gZGVlcE1hdGNoZXJGcm9tT2JqZWN0TGl0ZXJhbChwYXR0ZXJuVmFsdWUpIDogcGF0dGVyblZhbHVlO1xuXG4gICAgICBjb25zdCBpbm5lckluc3BlY3Rpb24gPSB7IC4uLmluc3BlY3Rpb24sIGZhaWx1cmVSZWFzb246ICcnIH07XG4gICAgICBjb25zdCB2YWx1ZU1hdGNoZXMgPSBtYXRjaCh2YWx1ZVtwYXR0ZXJuS2V5XSwgbWF0Y2hWYWx1ZSwgaW5uZXJJbnNwZWN0aW9uKTtcbiAgICAgIGlmICghdmFsdWVNYXRjaGVzKSB7XG4gICAgICAgIGVycm9ycy5wdXNoKGBGaWVsZCAke3BhdHRlcm5LZXl9IG1pc21hdGNoOiAke2lubmVySW5zcGVjdGlvbi5mYWlsdXJlUmVhc29ufWApO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyYW5zZm9ybSBuZXN0ZWQgb2JqZWN0IGxpdGVyYWxzIGludG8gbW9yZSBkZWVwIG9iamVjdCBtYXRjaGVycywgaWYgYXBwbGljYWJsZVxuICAgICAqXG4gICAgICogT2JqZWN0IGxpdGVyYWxzIGluIGxpc3RzIGFyZSBhbHNvIHRyYW5zZm9ybWVkLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGRlZXBNYXRjaGVyRnJvbU9iamVjdExpdGVyYWwobmVzdGVkUGF0dGVybjogYW55KTogYW55IHtcbiAgICAgIGlmIChpc09iamVjdChuZXN0ZWRQYXR0ZXJuKSkge1xuICAgICAgICByZXR1cm4gZGVlcE9iamVjdExpa2UobmVzdGVkUGF0dGVybik7XG4gICAgICB9XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShuZXN0ZWRQYXR0ZXJuKSkge1xuICAgICAgICByZXR1cm4gbmVzdGVkUGF0dGVybi5tYXAoZGVlcE1hdGNoZXJGcm9tT2JqZWN0TGl0ZXJhbCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmVzdGVkUGF0dGVybjtcbiAgICB9XG5cbiAgICBpZiAoZXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiBmYWlsTWF0Y2hlcihpbnNwZWN0aW9uLCBlcnJvcnMuam9pbignLCAnKSk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIC8vIE92ZXJyaWRlIHRvSlNPTiBzbyB0aGF0IG91ciBlcnJvciBtZXNzYWdlcyBwcmludCBhbiByZWFkYWJsZSB2ZXJzaW9uIG9mIHRoaXMgbWF0Y2hlclxuICAvLyAod2hpY2ggd2UgcHJvZHVjZSBieSBkb2luZyBKU09OLnN0cmluZ2lmeSgpIGF0IHNvbWUgcG9pbnQgaW4gdGhlIGZ1dHVyZSkuXG4gIHJldC50b0pTT04gPSAoKSA9PiAoeyBbZGVlcCA/ICckZGVlcE9iamVjdExpa2UnIDogJyRvYmplY3RMaWtlJ106IHBhdHRlcm4gfSk7XG4gIHJldHVybiByZXQ7XG59XG5cbi8qKlxuICogTWF0Y2ggZXhhY3RseSB0aGUgZ2l2ZW4gdmFsdWVcbiAqXG4gKiBUaGlzIGlzIHRoZSBkZWZhdWx0LCB5b3Ugb25seSBuZWVkIHRoaXMgdG8gZXNjYXBlIGZyb20gdGhlIGRlZXAgbGVuaWVudCBtYXRjaGluZ1xuICogb2YgYGRlZXBPYmplY3RMaWtlYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4YWN0VmFsdWUoZXhwZWN0ZWQ6IGFueSk6IFByb3BlcnR5TWF0Y2hlciB7XG4gIGNvbnN0IHJldCA9ICh2YWx1ZTogYW55LCBpbnNwZWN0aW9uOiBJbnNwZWN0aW9uRmFpbHVyZSk6IGJvb2xlYW4gPT4ge1xuICAgIHJldHVybiBtYXRjaExpdGVyYWwodmFsdWUsIGV4cGVjdGVkLCBpbnNwZWN0aW9uKTtcbiAgfTtcblxuICAvLyBPdmVycmlkZSB0b0pTT04gc28gdGhhdCBvdXIgZXJyb3IgbWVzc2FnZXMgcHJpbnQgYW4gcmVhZGFibGUgdmVyc2lvbiBvZiB0aGlzIG1hdGNoZXJcbiAgLy8gKHdoaWNoIHdlIHByb2R1Y2UgYnkgZG9pbmcgSlNPTi5zdHJpbmdpZnkoKSBhdCBzb21lIHBvaW50IGluIHRoZSBmdXR1cmUpLlxuICByZXQudG9KU09OID0gKCkgPT4gKHsgJGV4YWN0VmFsdWU6IGV4cGVjdGVkIH0pO1xuICByZXR1cm4gcmV0O1xufVxuXG4vKipcbiAqIEEgbWF0Y2hlciBmb3IgYSBsaXN0IHRoYXQgY29udGFpbnMgYWxsIG9mIHRoZSBnaXZlbiBlbGVtZW50cyBpbiBhbnkgb3JkZXJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFycmF5V2l0aCguLi5lbGVtZW50czogYW55W10pOiBQcm9wZXJ0eU1hdGNoZXIge1xuICBpZiAoZWxlbWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGFueXRoaW5nKCk7XG4gIH1cblxuICBjb25zdCByZXQgPSAodmFsdWU6IGFueSwgaW5zcGVjdGlvbjogSW5zcGVjdGlvbkZhaWx1cmUpOiBib29sZWFuID0+IHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICByZXR1cm4gZmFpbE1hdGNoZXIoaW5zcGVjdGlvbiwgYEV4cGVjdCBhbiBhcnJheSBidXQgZ290ICcke3R5cGVvZiB2YWx1ZX0nYCk7XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBlbGVtZW50IG9mIGVsZW1lbnRzKSB7XG4gICAgICBjb25zdCBmYWlsdXJlID0gbG9uZ2VzdEZhaWx1cmUodmFsdWUsIGVsZW1lbnQpO1xuICAgICAgaWYgKGZhaWx1cmUpIHtcbiAgICAgICAgcmV0dXJuIGZhaWxNYXRjaGVyKFxuICAgICAgICAgIGluc3BlY3Rpb24sXG4gICAgICAgICAgYEFycmF5IGRpZCBub3QgY29udGFpbiBleHBlY3RlZCBlbGVtZW50LCBjbG9zZXN0IG1hdGNoIGF0IGluZGV4ICR7ZmFpbHVyZVswXX06ICR7ZmFpbHVyZVsxXX1gLFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJuICdudWxsJyBpZiB0aGUgbWF0Y2hlciBtYXRjaGVzIGFueXdoZXJlIGluIHRoZSBhcnJheSwgb3RoZXJ3aXNlIHRoZSBsb25nZXN0IGVycm9yIGFuZCBpdHMgaW5kZXhcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBsb25nZXN0RmFpbHVyZShhcnJheTogYW55W10sIG1hdGNoZXI6IGFueSk6IFtudW1iZXIsIHN0cmluZ10gfCBudWxsIHtcbiAgICAgIGxldCBmYWlsOiBbbnVtYmVyLCBzdHJpbmddIHwgbnVsbCA9IG51bGw7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGlubmVySW5zcGVjdGlvbiA9IHsgLi4uaW5zcGVjdGlvbiwgZmFpbHVyZVJlYXNvbjogJycgfTtcbiAgICAgICAgaWYgKG1hdGNoKGFycmF5W2ldLCBtYXRjaGVyLCBpbm5lckluc3BlY3Rpb24pKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZmFpbCA9PT0gbnVsbCB8fCBpbm5lckluc3BlY3Rpb24uZmFpbHVyZVJlYXNvbi5sZW5ndGggPiBmYWlsWzFdLmxlbmd0aCkge1xuICAgICAgICAgIGZhaWwgPSBbaSwgaW5uZXJJbnNwZWN0aW9uLmZhaWx1cmVSZWFzb25dO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFpbDtcbiAgICB9XG4gIH07XG5cbiAgLy8gT3ZlcnJpZGUgdG9KU09OIHNvIHRoYXQgb3VyIGVycm9yIG1lc3NhZ2VzIHByaW50IGFuIHJlYWRhYmxlIHZlcnNpb24gb2YgdGhpcyBtYXRjaGVyXG4gIC8vICh3aGljaCB3ZSBwcm9kdWNlIGJ5IGRvaW5nIEpTT04uc3RyaW5naWZ5KCkgYXQgc29tZSBwb2ludCBpbiB0aGUgZnV0dXJlKS5cbiAgcmV0LnRvSlNPTiA9ICgpID0+ICh7ICRhcnJheUNvbnRhaW5pbmc6IGVsZW1lbnRzLmxlbmd0aCA9PT0gMSA/IGVsZW1lbnRzWzBdIDogZWxlbWVudHMgfSk7XG4gIHJldHVybiByZXQ7XG59XG5cbi8qKlxuICogTWF0Y2hlcyBhbnl0aGluZ1xuICovXG5mdW5jdGlvbiBhbnl0aGluZygpIHtcbiAgY29uc3QgcmV0ID0gKCkgPT4ge1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xuICByZXQudG9KU09OID0gKCkgPT4gKHsgJGFueXRoaW5nOiB0cnVlIH0pO1xuICByZXR1cm4gcmV0O1xufVxuXG4vKipcbiAqIFJldHVybiB3aGV0aGVyIGBzdXBlck9iamAgaXMgYSBzdXBlci1vYmplY3Qgb2YgYG9iamAuXG4gKlxuICogQSBzdXBlci1vYmplY3QgaGFzIHRoZSBzYW1lIG9yIG1vcmUgcHJvcGVydHkgdmFsdWVzLCByZWN1cnNpbmcgaW50byBzdWIgcHJvcGVydGllcyBpZiBgYGFsbG93VmFsdWVFeHRlbnNpb25gYCBpcyB0cnVlLlxuICpcbiAqIEF0IGFueSBwb2ludCBpbiB0aGUgb2JqZWN0LCBhIHZhbHVlIG1heSBiZSByZXBsYWNlZCB3aXRoIGEgZnVuY3Rpb24gd2hpY2ggd2lsbCBiZSB1c2VkIHRvIGNoZWNrIHRoYXQgcGFydGljdWxhciBmaWVsZC5cbiAqIFRoZSB0eXBlIG9mIGEgbWF0Y2hlciBmdW5jdGlvbiBpcyBleHBlY3RlZCB0byBiZSBvZiB0eXBlIFByb3BlcnR5TWF0Y2hlci5cbiAqXG4gKiBAZGVwcmVjYXRlZCAtIFVzZSBgb2JqZWN0TGlrZWAgb3IgYSBsaXRlcmFsIG9iamVjdCBpbnN0ZWFkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNTdXBlck9iamVjdChcbiAgc3VwZXJPYmo6IGFueSxcbiAgcGF0dGVybjogYW55LFxuICBlcnJvcnM6IHN0cmluZ1tdID0gW10sXG4gIGFsbG93VmFsdWVFeHRlbnNpb246IGJvb2xlYW4gPSBmYWxzZSxcbik6IGJvb2xlYW4ge1xuICBjb25zdCBtYXRjaGVyID0gYWxsb3dWYWx1ZUV4dGVuc2lvbiA/IGRlZXBPYmplY3RMaWtlKHBhdHRlcm4pIDogb2JqZWN0TGlrZShwYXR0ZXJuKTtcblxuICBjb25zdCBpbnNwZWN0aW9uOiBJbnNwZWN0aW9uRmFpbHVyZSA9IHsgcmVzb3VyY2U6IHN1cGVyT2JqLCBmYWlsdXJlUmVhc29uOiAnJyB9O1xuICBjb25zdCByZXQgPSBtYXRjaChzdXBlck9iaiwgbWF0Y2hlciwgaW5zcGVjdGlvbik7XG4gIGlmICghcmV0KSB7XG4gICAgZXJyb3JzLnB1c2goaW5zcGVjdGlvbi5mYWlsdXJlUmVhc29uKTtcbiAgfVxuICByZXR1cm4gcmV0O1xufVxuXG4vKipcbiAqIFdoYXQgcGFydCBvZiB0aGUgcmVzb3VyY2UgdG8gY29tcGFyZVxuICovXG5leHBvcnQgZW51bSBSZXNvdXJjZVBhcnQge1xuICAvKipcbiAgICogT25seSBjb21wYXJlIHRoZSByZXNvdXJjZSdzIHByb3BlcnRpZXNcbiAgICovXG4gIFByb3BlcnRpZXMsXG5cbiAgLyoqXG4gICAqIENoZWNrIHRoZSBlbnRpcmUgY29uZmlnXG4gICAqXG4gICAqIChpbmNsdWRpbmcgVXBkYXRlQ29uZmlnLCBEZXBlbmRzT24sIGV0Yy4pXG4gICAqL1xuICBDb21wbGV0ZURlZmluaXRpb24sXG59XG5cbi8qKlxuICogV2hldGhlciBhIHZhbHVlIGlzIGEgY2FsbGFibGVcbiAqL1xuZnVuY3Rpb24gaXNDYWxsYWJsZSh4OiBhbnkpOiB4IGlzICguLi5hcmdzOiBhbnlbXSkgPT4gYW55IHtcbiAgcmV0dXJuIHggJiYge30udG9TdHJpbmcuY2FsbCh4KSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbn1cblxuLyoqXG4gKiBXaGV0aGVyIGEgdmFsdWUgaXMgYW4gb2JqZWN0XG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHg6IGFueSk6IHggaXMgb2JqZWN0IHtcbiAgLy8gQmVjYXVzZSBgdHlwZW9mIG51bGwgPT09ICdvYmplY3QnYC5cbiAgcmV0dXJuIHggJiYgdHlwZW9mIHggPT09ICdvYmplY3QnO1xufVxuIl19