"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unionValidator = exports.requireProperty = exports.requiredValidator = exports.propertyValidator = exports.hashValidator = exports.listValidator = exports.validateRosTag = exports.validateAnyDict = exports.validateObject = exports.validateDate = exports.validateAny = exports.validateBoolean = exports.validateNumber = exports.validateString = exports.validateAllowedValues = exports.validateAllowedPattern = exports.validateRange = exports.validateLength = exports.canInspect = exports.VALIDATION_SUCCESS = exports.ValidationResults = exports.ValidationResult = exports.unionMapper = exports.hashMapper = exports.listMapper = exports.rosTagToRosTemplate = exports.dateToRosTemplate = exports.anyDictToRosTemplate = exports.numberToRosTemplate = exports.objectToRosTemplate = exports.booleanToRosTemplate = exports.stringToRosTemplate = void 0;
function identity(x) {
    return x;
}
exports.stringToRosTemplate = identity;
exports.booleanToRosTemplate = identity;
exports.objectToRosTemplate = identity;
exports.numberToRosTemplate = identity;
exports.anyDictToRosTemplate = identity;
/**
 * The date needs to be formatted as an ISO date in UTC
 *
 * Some usage sites require a date, some require a timestamp. We'll
 * always output a timestamp and hope the parser on the other end
 * is smart enough to ignore the time part... (?)
 */
function dateToRosTemplate(x) {
    if (!x) {
        return undefined;
    }
    // tslint:disable-next-line:max-line-length
    return `${x.getUTCFullYear()}-${pad(x.getUTCMonth() + 1)}-${pad(x.getUTCDate())}T${pad(x.getUTCHours())}:${pad(x.getUTCMinutes())}:${pad(x.getUTCSeconds())}`;
}
exports.dateToRosTemplate = dateToRosTemplate;
/**
 * Pad a number to 2 decimal places
 */
function pad(x) {
    if (x < 10) {
        return "0" + x.toString();
    }
    return x.toString();
}
/**
 * Turn a tag object into the proper ROS representation
 */
function rosTagToRosTemplate(x) {
    return {
        Key: x.key,
        Value: x.value,
    };
}
exports.rosTagToRosTemplate = rosTagToRosTemplate;
function listMapper(elementMapper) {
    return (x) => {
        if (!canInspect(x)) {
            return x;
        }
        return x.map(elementMapper);
    };
}
exports.listMapper = listMapper;
function hashMapper(elementMapper) {
    return (x) => {
        if (!canInspect(x)) {
            return x;
        }
        const ret = {};
        Object.keys(x).forEach((key) => {
            ret[key] = elementMapper(x[key]);
        });
        return ret;
    };
}
exports.hashMapper = hashMapper;
/**
 * Return a union mapper
 *
 * Takes a list of validators and a list of mappers, which should correspond pairwise.
 *
 * The mapper of the first successful validator will be called.
 */
function unionMapper(validators, mappers) {
    if (validators.length !== mappers.length) {
        throw Error("Not the same amount of validators and mappers passed to unionMapper()");
    }
    return (x) => {
        if (!canInspect(x)) {
            return x;
        }
        for (let i = 0; i < validators.length; i++) {
            if (validators[i](x).isSuccess) {
                return mappers[i](x);
            }
        }
        // Should not be possible because the union must have passed validation before this function
        // will be called, but catch it anyway.
        throw new TypeError("No validators matched in the union()");
    };
}
exports.unionMapper = unionMapper;
// ----------------------------------------------------------------------
// VALIDATORS
//
// These are used while checking that supplied property bags match the expected schema
//
// We have a couple of datatypes that model validation errors and collections of validation
// errors (together forming a tree of errors so that we can trace validation errors through
// an object graph), and validators.
//
// Validators are simply functions that take a value and return a validation results. Then
// we have some combinators to turn primitive validators into more complex validators.
//
/**
 * Representation of validation results
 *
 * Models a tree of validation errors so that we have as much information as possible
 * about the failure that occurred.
 */
class ValidationResult {
    constructor(errorMessage = "", results = new ValidationResults()) {
        this.errorMessage = errorMessage;
        this.results = results;
    }
    get isSuccess() {
        return !this.errorMessage && this.results.isSuccess;
    }
    /**
     * Turn a failed validation into an exception
     */
    assertSuccess() {
        if (!this.isSuccess) {
            let message = this.errorTree();
            // The first letter will be lowercase, so uppercase it for a nicer error message
            message = message.substr(0, 1).toUpperCase() + message.substr(1);
            throw new RosSynthesisError(message);
        }
    }
    /**
     * Return a string rendering of the tree of validation failures
     */
    errorTree() {
        const childMessages = this.results.errorTreeList();
        return (this.errorMessage +
            (childMessages.length
                ? `\n  ${childMessages.replace(/\n/g, "\n  ")}`
                : ""));
    }
    /**
     * Wrap this result with an error message, if it concerns an error
     */
    prefix(message) {
        if (this.isSuccess) {
            return this;
        }
        return new ValidationResult(`${message}: ${this.errorMessage}`, this.results);
    }
}
exports.ValidationResult = ValidationResult;
/**
 * A collection of validation results
 */
class ValidationResults {
    constructor(results = []) {
        this.results = results;
    }
    collect(result) {
        // Only collect failures
        if (!result.isSuccess) {
            this.results.push(result);
        }
    }
    get isSuccess() {
        return this.results.every((x) => x.isSuccess);
    }
    errorTreeList() {
        return this.results.map((child) => child.errorTree()).join("\n");
    }
    /**
     * Wrap up all validation results into a single tree node
     *
     * If there are failures in the collection, add a message, otherwise
     * return a success.
     */
    wrap(message) {
        if (this.isSuccess) {
            return exports.VALIDATION_SUCCESS;
        }
        return new ValidationResult(message, this);
    }
}
exports.ValidationResults = ValidationResults;
// Singleton object to save on allocations
exports.VALIDATION_SUCCESS = new ValidationResult();
/**
 * Return whether this object can be validated at all
 *
 * True unless it's undefined or a ROS intrinsic
 */
function canInspect(x) {
    // Note: using weak equality on purpose, we also want to catch undefined
    return x != null && !isRosIntrinsic(x);
}
exports.canInspect = canInspect;
function validateLength(prop) {
    if (prop.min && prop.data < prop.min) {
        return new ValidationResult(`${JSON.stringify(prop.data)} is less than min value(${prop.min})`);
    }
    if (prop.max && prop.data > prop.max) {
        return new ValidationResult(`${JSON.stringify(prop.data)} is larger than max value(${prop.max})`);
    }
    return exports.VALIDATION_SUCCESS;
}
exports.validateLength = validateLength;
function validateRange(prop) {
    if (prop.min && prop.data < prop.min) {
        return new ValidationResult(`${JSON.stringify(prop.data)} is less than min value(${prop.min})`);
    }
    if (prop.max && prop.data > prop.max) {
        return new ValidationResult(`${JSON.stringify(prop.data)} is larger than min value(${prop.min})`);
    }
    return exports.VALIDATION_SUCCESS;
}
exports.validateRange = validateRange;
function validateAllowedPattern(prop) {
    const regExp = new RegExp(prop.reg);
    if (regExp.test(prop.data)) {
        return exports.VALIDATION_SUCCESS;
    }
    else {
        return new ValidationResult(`The string ${JSON.stringify(prop.data)} does not match the regular expression "${prop.reg}"`);
    }
}
exports.validateAllowedPattern = validateAllowedPattern;
function validateAllowedValues(prop) {
    for (let value of prop.allowedValues) {
        if (value === prop.data)
            return exports.VALIDATION_SUCCESS;
    }
    return new ValidationResult(`${JSON.stringify(prop.data)} doesn't exist in [${prop.allowedValues}]`);
}
exports.validateAllowedValues = validateAllowedValues;
// ROS validators for primitive types
function validateString(x) {
    if (canInspect(x) && typeof x !== "string") {
        return new ValidationResult(`${JSON.stringify(x)} should be a string`);
    }
    return exports.VALIDATION_SUCCESS;
}
exports.validateString = validateString;
function validateNumber(x) {
    if (canInspect(x) && typeof x !== "number") {
        return new ValidationResult(`${JSON.stringify(x)} should be a number`);
    }
    return exports.VALIDATION_SUCCESS;
}
exports.validateNumber = validateNumber;
function validateBoolean(x) {
    if (canInspect(x) && typeof x !== "boolean") {
        return new ValidationResult(`${JSON.stringify(x)} should be a boolean`);
    }
    return exports.VALIDATION_SUCCESS;
}
exports.validateBoolean = validateBoolean;
function validateAny(x) {
    // avoid tsc error -> 'x' is declared but its value is never read
    if (canInspect(x) || true) {
        return exports.VALIDATION_SUCCESS;
    }
}
exports.validateAny = validateAny;
function validateDate(x) {
    if (canInspect(x) && !(x instanceof Date)) {
        return new ValidationResult(`${JSON.stringify(x)} should be a Date`);
    }
    if (x !== undefined && isNaN(x.getTime())) {
        return new ValidationResult("got an unparseable Date");
    }
    return exports.VALIDATION_SUCCESS;
}
exports.validateDate = validateDate;
function validateObject(x) {
    if (canInspect(x) && typeof x !== "object") {
        return new ValidationResult(`${JSON.stringify(x)} should be an 'object'`);
    }
    return exports.VALIDATION_SUCCESS;
}
exports.validateObject = validateObject;
function validateAnyDict(x) {
    if (canInspect(x) && typeof x !== "object") {
        return new ValidationResult(`${JSON.stringify(x)} should be an 'Dict[str, Any]'`);
    }
    return exports.VALIDATION_SUCCESS;
}
exports.validateAnyDict = validateAnyDict;
function validateRosTag(x) {
    if (!canInspect(x)) {
        return exports.VALIDATION_SUCCESS;
    }
    if (x.key == null || x.value == null) {
        return new ValidationResult(`${JSON.stringify(x)} should have a 'key' and a 'value' property`);
    }
    return exports.VALIDATION_SUCCESS;
}
exports.validateRosTag = validateRosTag;
/**
 * Return a list validator based on the given element validator
 */
function listValidator(elementValidator) {
    return (x) => {
        if (!canInspect(x)) {
            return exports.VALIDATION_SUCCESS;
        }
        if (!x.forEach) {
            return new ValidationResult(`${JSON.stringify(x)} should be a list`);
        }
        for (let i = 0; i < x.length; i++) {
            const element = x[i];
            const result = elementValidator(element);
            if (!result.isSuccess) {
                return result.prefix(`element ${i}`);
            }
        }
        return exports.VALIDATION_SUCCESS;
    };
}
exports.listValidator = listValidator;
/**
 * Return a hash validator based on the given element validator
 */
function hashValidator(elementValidator) {
    return (x) => {
        if (!canInspect(x)) {
            return exports.VALIDATION_SUCCESS;
        }
        for (const key of Object.keys(x)) {
            const result = elementValidator(x[key]);
            if (!result.isSuccess) {
                return result.prefix(`element '${key}'`);
            }
        }
        return exports.VALIDATION_SUCCESS;
    };
}
exports.hashValidator = hashValidator;
/**
 * Decorate a validator with a message clarifying the property the failure is for.
 */
function propertyValidator(propName, validator) {
    return (x) => {
        return validator(x).prefix(propName);
    };
}
exports.propertyValidator = propertyValidator;
/**
 * Return a validator that will fail if the passed property is not present
 *
 * Does not distinguish between the property actually not being present, vs being present but 'null'
 * or 'undefined' (courtesy of JavaScript), which is generally the behavior that we want.
 *
 * Empty strings are considered "present"--don't know if this agrees with how ROS looks at the world.
 */
function requiredValidator(x) {
    if (x == null) {
        return new ValidationResult("required but missing");
    }
    return exports.VALIDATION_SUCCESS;
}
exports.requiredValidator = requiredValidator;
/**
 * Require a property from a property bag.
 *
 * @param props  the property bag from which a property is required.
 * @param name   the name of the required property.
 * @param typeName the name of the construct type that requires the property
 *
 * @returns the value of ``props[name]``
 *
 * @throws if the property ``name`` is not present in ``props``.
 */
function requireProperty(props, name, context) {
    const value = props[name];
    if (value == null) {
        throw new Error(`${context.toString()} is missing required property: ${name}`);
    }
    // Possibly add type-checking here...
    return value;
}
exports.requireProperty = requireProperty;
/**
 * Validates if any of the given validators matches
 *
 * We add either/or words to the front of the error mesages so that they read
 * more nicely. Example:
 *
 *   Properties not correct for 'FunctionProps'
 *     codeUri: not one of the possible types
 *       either: properties not correct for 'S3LocationProperty'
 *         bucket: required but missing
 *         key: required but missing
 *         version: required but missing
 *       or: '3' should be a 'string'
 *
 */
function unionValidator(...validators) {
    return (x) => {
        const results = new ValidationResults();
        let eitherOr = "either";
        for (const validator of validators) {
            const result = validator(x);
            if (result.isSuccess) {
                return result;
            }
            results.collect(result.prefix(eitherOr));
            eitherOr = "or";
        }
        return results.wrap("not one of the possible types");
    };
}
exports.unionValidator = unionValidator;
/**
 * Return whether the indicated value represents a ROS intrinsic.
 *
 * ROS intrinsics are modeled as objects with a single key, which
 * look like: { "Fn::GetAtt": [...] } or similar.
 */
function isRosIntrinsic(x) {
    if (!(typeof x === "object")) {
        return false;
    }
    const keys = Object.keys(x);
    if (keys.length !== 1) {
        return false;
    }
    return keys[0] === "Ref" || keys[0].substr(0, 4) === "Fn::";
}
// Cannot be public because JSII gets confused about es5.d.ts
class RosSynthesisError extends Error {
    constructor() {
        super(...arguments);
        this.type = "RosSynthesisError";
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVudGltZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJ1bnRpbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBWUEsU0FBUyxRQUFRLENBQUMsQ0FBTTtJQUN0QixPQUFPLENBQUMsQ0FBQztBQUNYLENBQUM7QUFFWSxRQUFBLG1CQUFtQixHQUFXLFFBQVEsQ0FBQztBQUN2QyxRQUFBLG9CQUFvQixHQUFXLFFBQVEsQ0FBQztBQUN4QyxRQUFBLG1CQUFtQixHQUFXLFFBQVEsQ0FBQztBQUN2QyxRQUFBLG1CQUFtQixHQUFXLFFBQVEsQ0FBQztBQUN2QyxRQUFBLG9CQUFvQixHQUFXLFFBQVEsQ0FBQztBQUVyRDs7Ozs7O0dBTUc7QUFDSCxTQUFnQixpQkFBaUIsQ0FBQyxDQUFRO0lBQ3hDLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFDTixPQUFPLFNBQVMsQ0FBQztLQUNsQjtJQUVELDJDQUEyQztJQUMzQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLGNBQWMsRUFBRSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUM3RCxDQUFDLENBQUMsVUFBVSxFQUFFLENBQ2YsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxJQUFJLEdBQUcsQ0FDeEQsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUNsQixFQUFFLENBQUM7QUFDTixDQUFDO0FBWEQsOENBV0M7QUFFRDs7R0FFRztBQUNILFNBQVMsR0FBRyxDQUFDLENBQVM7SUFDcEIsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFO1FBQ1YsT0FBTyxHQUFHLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO0tBQzNCO0lBQ0QsT0FBTyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDdEIsQ0FBQztBQUVEOztHQUVHO0FBQ0gsU0FBZ0IsbUJBQW1C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LEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxNQUFNLENBQUM7QUFDOUQsQ0FBQztBQUVELDZEQUE2RDtBQUM3RCxNQUFNLGlCQUFrQixTQUFRLEtBQUs7SUFBckM7O1FBQ2tCLFNBQUksR0FBRyxtQkFBbUIsQ0FBQztJQUM3QyxDQUFDO0NBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tIFwiLi9jb25zdHJ1Y3QtY29tcGF0XCI7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFBST1BFUlRZIE1BUFBFUlNcbi8vXG4vLyBUaGVzZSBhcmUgdXNlZCB3aGlsZSBjb252ZXJ0aW5nIGdlbmVyYXRlZCBjbGFzc2VzL3Byb3BlcnR5IGJhZ3MgdG8gUk9TIHByb3BlcnR5IG9iamVjdHNcbi8vXG4vLyBXZSB1c2UgaWRlbnRpdHkgbWFwcGVycyBmb3IgdGhlIHByaW1pdGl2ZSB0eXBlcy4gVGhlc2UgZG9uJ3QgZG8gYW55dGhpbmcgYnV0IGFyZSB0aGVyZSB0byBtYWtlIHRoZSBjb2RlXG4vLyBnZW5lcmF0aW9uIHdvcmsgb3V0IG5pY2VseSAoc28gdGhlIGNvZGUgZ2VuZXJhdG9yIGRvZXNuJ3QgbmVlZCB0byBlbWl0IGRpZmZlcmVudCBjb2RlIGZvciBwcmltaXRpdmVcbi8vIHZzLiBjb21wbGV4IHR5cGVzKS5cbmV4cG9ydCB0eXBlIE1hcHBlciA9ICh4OiBhbnkpID0+IGFueTtcblxuZnVuY3Rpb24gaWRlbnRpdHkoeDogYW55KSB7XG4gIHJldHVybiB4O1xufVxuXG5leHBvcnQgY29uc3Qgc3RyaW5nVG9Sb3NUZW1wbGF0ZTogTWFwcGVyID0gaWRlbnRpdHk7XG5leHBvcnQgY29uc3QgYm9vbGVhblRvUm9zVGVtcGxhdGU6IE1hcHBlciA9IGlkZW50aXR5O1xuZXhwb3J0IGNvbnN0IG9iamVjdFRvUm9zVGVtcGxhdGU6IE1hcHBlciA9IGlkZW50aXR5O1xuZXhwb3J0IGNvbnN0IG51bWJlclRvUm9zVGVtcGxhdGU6IE1hcHBlciA9IGlkZW50aXR5O1xuZXhwb3J0IGNvbnN0IGFueURpY3RUb1Jvc1RlbXBsYXRlOiBNYXBwZXIgPSBpZGVudGl0eTtcblxuLyoqXG4gKiBUaGUgZGF0ZSBuZWVkcyB0byBiZSBmb3JtYXR0ZWQgYXMgYW4gSVNPIGRhdGUgaW4gVVRDXG4gKlxuICogU29tZSB1c2FnZSBzaXRlcyByZXF1aXJlIGEgZGF0ZSwgc29tZSByZXF1aXJlIGEgdGltZXN0YW1wLiBXZSdsbFxuICogYWx3YXlzIG91dHB1dCBhIHRpbWVzdGFtcCBhbmQgaG9wZSB0aGUgcGFyc2VyIG9uIHRoZSBvdGhlciBlbmRcbiAqIGlzIHNtYXJ0IGVub3VnaCB0byBpZ25vcmUgdGhlIHRpbWUgcGFydC4uLiAoPylcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRhdGVUb1Jvc1RlbXBsYXRlKHg/OiBEYXRlKTogYW55IHtcbiAgaWYgKCF4KSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcbiAgcmV0dXJuIGAke3guZ2V0VVRDRnVsbFllYXIoKX0tJHtwYWQoeC5nZXRVVENNb250aCgpICsgMSl9LSR7cGFkKFxuICAgIHguZ2V0VVRDRGF0ZSgpXG4gICl9VCR7cGFkKHguZ2V0VVRDSG91cnMoKSl9OiR7cGFkKHguZ2V0VVRDTWludXRlcygpKX06JHtwYWQoXG4gICAgeC5nZXRVVENTZWNvbmRzKClcbiAgKX1gO1xufVxuXG4vKipcbiAqIFBhZCBhIG51bWJlciB0byAyIGRlY2ltYWwgcGxhY2VzXG4gKi9cbmZ1bmN0aW9uIHBhZCh4OiBudW1iZXIpIHtcbiAgaWYgKHggPCAxMCkge1xuICAgIHJldHVybiBcIjBcIiArIHgudG9TdHJpbmcoKTtcbiAgfVxuICByZXR1cm4geC50b1N0cmluZygpO1xufVxuXG4vKipcbiAqIFR1cm4gYSB0YWcgb2JqZWN0IGludG8gdGhlIHByb3BlciBST1MgcmVwcmVzZW50YXRpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJvc1RhZ1RvUm9zVGVtcGxhdGUoeDogYW55KTogYW55IHtcbiAgcmV0dXJuIHtcbiAgICBLZXk6IHgua2V5LFxuICAgIFZhbHVlOiB4LnZhbHVlLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGlzdE1hcHBlcihlbGVtZW50TWFwcGVyOiBNYXBwZXIpOiBNYXBwZXIge1xuICByZXR1cm4gKHg6IGFueSkgPT4ge1xuICAgIGlmICghY2FuSW5zcGVjdCh4KSkge1xuICAgICAgcmV0dXJuIHg7XG4gICAgfVxuICAgIHJldHVybiB4Lm1hcChlbGVtZW50TWFwcGVyKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc2hNYXBwZXIoZWxlbWVudE1hcHBlcjogTWFwcGVyKTogTWFwcGVyIHtcbiAgcmV0dXJuICh4OiBhbnkpID0+IHtcbiAgICBpZiAoIWNhbkluc3BlY3QoeCkpIHtcbiAgICAgIHJldHVybiB4O1xuICAgIH1cblxuICAgIGNvbnN0IHJldDogYW55ID0ge307XG5cbiAgICBPYmplY3Qua2V5cyh4KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIHJldFtrZXldID0gZWxlbWVudE1hcHBlcih4W2tleV0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJldDtcbiAgfTtcbn1cblxuLyoqXG4gKiBSZXR1cm4gYSB1bmlvbiBtYXBwZXJcbiAqXG4gKiBUYWtlcyBhIGxpc3Qgb2YgdmFsaWRhdG9ycyBhbmQgYSBsaXN0IG9mIG1hcHBlcnMsIHdoaWNoIHNob3VsZCBjb3JyZXNwb25kIHBhaXJ3aXNlLlxuICpcbiAqIFRoZSBtYXBwZXIgb2YgdGhlIGZpcnN0IHN1Y2Nlc3NmdWwgdmFsaWRhdG9yIHdpbGwgYmUgY2FsbGVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdW5pb25NYXBwZXIoXG4gIHZhbGlkYXRvcnM6IFZhbGlkYXRvcltdLFxuICBtYXBwZXJzOiBNYXBwZXJbXVxuKTogTWFwcGVyIHtcbiAgaWYgKHZhbGlkYXRvcnMubGVuZ3RoICE9PSBtYXBwZXJzLmxlbmd0aCkge1xuICAgIHRocm93IEVycm9yKFxuICAgICAgXCJOb3QgdGhlIHNhbWUgYW1vdW50IG9mIHZhbGlkYXRvcnMgYW5kIG1hcHBlcnMgcGFzc2VkIHRvIHVuaW9uTWFwcGVyKClcIlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKHg6IGFueSkgPT4ge1xuICAgIGlmICghY2FuSW5zcGVjdCh4KSkge1xuICAgICAgcmV0dXJuIHg7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWxpZGF0b3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodmFsaWRhdG9yc1tpXSh4KS5pc1N1Y2Nlc3MpIHtcbiAgICAgICAgcmV0dXJuIG1hcHBlcnNbaV0oeCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gU2hvdWxkIG5vdCBiZSBwb3NzaWJsZSBiZWNhdXNlIHRoZSB1bmlvbiBtdXN0IGhhdmUgcGFzc2VkIHZhbGlkYXRpb24gYmVmb3JlIHRoaXMgZnVuY3Rpb25cbiAgICAvLyB3aWxsIGJlIGNhbGxlZCwgYnV0IGNhdGNoIGl0IGFueXdheS5cbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTm8gdmFsaWRhdG9ycyBtYXRjaGVkIGluIHRoZSB1bmlvbigpXCIpO1xuICB9O1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBWQUxJREFUT1JTXG4vL1xuLy8gVGhlc2UgYXJlIHVzZWQgd2hpbGUgY2hlY2tpbmcgdGhhdCBzdXBwbGllZCBwcm9wZXJ0eSBiYWdzIG1hdGNoIHRoZSBleHBlY3RlZCBzY2hlbWFcbi8vXG4vLyBXZSBoYXZlIGEgY291cGxlIG9mIGRhdGF0eXBlcyB0aGF0IG1vZGVsIHZhbGlkYXRpb24gZXJyb3JzIGFuZCBjb2xsZWN0aW9ucyBvZiB2YWxpZGF0aW9uXG4vLyBlcnJvcnMgKHRvZ2V0aGVyIGZvcm1pbmcgYSB0cmVlIG9mIGVycm9ycyBzbyB0aGF0IHdlIGNhbiB0cmFjZSB2YWxpZGF0aW9uIGVycm9ycyB0aHJvdWdoXG4vLyBhbiBvYmplY3QgZ3JhcGgpLCBhbmQgdmFsaWRhdG9ycy5cbi8vXG4vLyBWYWxpZGF0b3JzIGFyZSBzaW1wbHkgZnVuY3Rpb25zIHRoYXQgdGFrZSBhIHZhbHVlIGFuZCByZXR1cm4gYSB2YWxpZGF0aW9uIHJlc3VsdHMuIFRoZW5cbi8vIHdlIGhhdmUgc29tZSBjb21iaW5hdG9ycyB0byB0dXJuIHByaW1pdGl2ZSB2YWxpZGF0b3JzIGludG8gbW9yZSBjb21wbGV4IHZhbGlkYXRvcnMuXG4vL1xuXG4vKipcbiAqIFJlcHJlc2VudGF0aW9uIG9mIHZhbGlkYXRpb24gcmVzdWx0c1xuICpcbiAqIE1vZGVscyBhIHRyZWUgb2YgdmFsaWRhdGlvbiBlcnJvcnMgc28gdGhhdCB3ZSBoYXZlIGFzIG11Y2ggaW5mb3JtYXRpb24gYXMgcG9zc2libGVcbiAqIGFib3V0IHRoZSBmYWlsdXJlIHRoYXQgb2NjdXJyZWQuXG4gKi9cbmV4cG9ydCBjbGFzcyBWYWxpZGF0aW9uUmVzdWx0IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcmVhZG9ubHkgZXJyb3JNZXNzYWdlOiBzdHJpbmcgPSBcIlwiLFxuICAgIHJlYWRvbmx5IHJlc3VsdHM6IFZhbGlkYXRpb25SZXN1bHRzID0gbmV3IFZhbGlkYXRpb25SZXN1bHRzKClcbiAgKSB7fVxuXG4gIHB1YmxpYyBnZXQgaXNTdWNjZXNzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhdGhpcy5lcnJvck1lc3NhZ2UgJiYgdGhpcy5yZXN1bHRzLmlzU3VjY2VzcztcbiAgfVxuXG4gIC8qKlxuICAgKiBUdXJuIGEgZmFpbGVkIHZhbGlkYXRpb24gaW50byBhbiBleGNlcHRpb25cbiAgICovXG4gIHB1YmxpYyBhc3NlcnRTdWNjZXNzKCkge1xuICAgIGlmICghdGhpcy5pc1N1Y2Nlc3MpIHtcbiAgICAgIGxldCBtZXNzYWdlID0gdGhpcy5lcnJvclRyZWUoKTtcbiAgICAgIC8vIFRoZSBmaXJzdCBsZXR0ZXIgd2lsbCBiZSBsb3dlcmNhc2UsIHNvIHVwcGVyY2FzZSBpdCBmb3IgYSBuaWNlciBlcnJvciBtZXNzYWdlXG4gICAgICBtZXNzYWdlID0gbWVzc2FnZS5zdWJzdHIoMCwgMSkudG9VcHBlckNhc2UoKSArIG1lc3NhZ2Uuc3Vic3RyKDEpO1xuICAgICAgdGhyb3cgbmV3IFJvc1N5bnRoZXNpc0Vycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYSBzdHJpbmcgcmVuZGVyaW5nIG9mIHRoZSB0cmVlIG9mIHZhbGlkYXRpb24gZmFpbHVyZXNcbiAgICovXG4gIHB1YmxpYyBlcnJvclRyZWUoKTogc3RyaW5nIHtcbiAgICBjb25zdCBjaGlsZE1lc3NhZ2VzID0gdGhpcy5yZXN1bHRzLmVycm9yVHJlZUxpc3QoKTtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgK1xuICAgICAgKGNoaWxkTWVzc2FnZXMubGVuZ3RoXG4gICAgICAgID8gYFxcbiAgJHtjaGlsZE1lc3NhZ2VzLnJlcGxhY2UoL1xcbi9nLCBcIlxcbiAgXCIpfWBcbiAgICAgICAgOiBcIlwiKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogV3JhcCB0aGlzIHJlc3VsdCB3aXRoIGFuIGVycm9yIG1lc3NhZ2UsIGlmIGl0IGNvbmNlcm5zIGFuIGVycm9yXG4gICAqL1xuICBwdWJsaWMgcHJlZml4KG1lc3NhZ2U6IHN0cmluZyk6IFZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICh0aGlzLmlzU3VjY2Vzcykge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHJldHVybiBuZXcgVmFsaWRhdGlvblJlc3VsdChcbiAgICAgIGAke21lc3NhZ2V9OiAke3RoaXMuZXJyb3JNZXNzYWdlfWAsXG4gICAgICB0aGlzLnJlc3VsdHNcbiAgICApO1xuICB9XG59XG5cbi8qKlxuICogQSBjb2xsZWN0aW9uIG9mIHZhbGlkYXRpb24gcmVzdWx0c1xuICovXG5leHBvcnQgY2xhc3MgVmFsaWRhdGlvblJlc3VsdHMge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcmVzdWx0czogVmFsaWRhdGlvblJlc3VsdFtdID0gW10pIHt9XG5cbiAgcHVibGljIGNvbGxlY3QocmVzdWx0OiBWYWxpZGF0aW9uUmVzdWx0KSB7XG4gICAgLy8gT25seSBjb2xsZWN0IGZhaWx1cmVzXG4gICAgaWYgKCFyZXN1bHQuaXNTdWNjZXNzKSB7XG4gICAgICB0aGlzLnJlc3VsdHMucHVzaChyZXN1bHQpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgaXNTdWNjZXNzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnJlc3VsdHMuZXZlcnkoKHgpID0+IHguaXNTdWNjZXNzKTtcbiAgfVxuXG4gIHB1YmxpYyBlcnJvclRyZWVMaXN0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMucmVzdWx0cy5tYXAoKGNoaWxkKSA9PiBjaGlsZC5lcnJvclRyZWUoKSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXcmFwIHVwIGFsbCB2YWxpZGF0aW9uIHJlc3VsdHMgaW50byBhIHNpbmdsZSB0cmVlIG5vZGVcbiAgICpcbiAgICogSWYgdGhlcmUgYXJlIGZhaWx1cmVzIGluIHRoZSBjb2xsZWN0aW9uLCBhZGQgYSBtZXNzYWdlLCBvdGhlcndpc2VcbiAgICogcmV0dXJuIGEgc3VjY2Vzcy5cbiAgICovXG4gIHB1YmxpYyB3cmFwKG1lc3NhZ2U6IHN0cmluZyk6IFZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICh0aGlzLmlzU3VjY2Vzcykge1xuICAgICAgcmV0dXJuIFZBTElEQVRJT05fU1VDQ0VTUztcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBWYWxpZGF0aW9uUmVzdWx0KG1lc3NhZ2UsIHRoaXMpO1xuICB9XG59XG5cbi8vIFNpbmdsZXRvbiBvYmplY3QgdG8gc2F2ZSBvbiBhbGxvY2F0aW9uc1xuZXhwb3J0IGNvbnN0IFZBTElEQVRJT05fU1VDQ0VTUyA9IG5ldyBWYWxpZGF0aW9uUmVzdWx0KCk7XG5cbmV4cG9ydCB0eXBlIFZhbGlkYXRvciA9ICh4OiBhbnkpID0+IFZhbGlkYXRpb25SZXN1bHQ7XG5cbi8qKlxuICogUmV0dXJuIHdoZXRoZXIgdGhpcyBvYmplY3QgY2FuIGJlIHZhbGlkYXRlZCBhdCBhbGxcbiAqXG4gKiBUcnVlIHVubGVzcyBpdCdzIHVuZGVmaW5lZCBvciBhIFJPUyBpbnRyaW5zaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNhbkluc3BlY3QoeDogYW55KSB7XG4gIC8vIE5vdGU6IHVzaW5nIHdlYWsgZXF1YWxpdHkgb24gcHVycG9zZSwgd2UgYWxzbyB3YW50IHRvIGNhdGNoIHVuZGVmaW5lZFxuICByZXR1cm4geCAhPSBudWxsICYmICFpc1Jvc0ludHJpbnNpYyh4KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlTGVuZ3RoKHByb3A6IHtcbiAgbWluPzogbnVtYmVyO1xuICBtYXg/OiBudW1iZXI7XG4gIGRhdGE6IG51bWJlcjtcbn0pOiBWYWxpZGF0aW9uUmVzdWx0IHtcbiAgaWYgKHByb3AubWluICYmIHByb3AuZGF0YSA8IHByb3AubWluKSB7XG4gICAgcmV0dXJuIG5ldyBWYWxpZGF0aW9uUmVzdWx0KFxuICAgICAgYCR7SlNPTi5zdHJpbmdpZnkocHJvcC5kYXRhKX0gaXMgbGVzcyB0aGFuIG1pbiB2YWx1ZSgke3Byb3AubWlufSlgXG4gICAgKTtcbiAgfVxuXG4gIGlmIChwcm9wLm1heCAmJiBwcm9wLmRhdGEgPiBwcm9wLm1heCkge1xuICAgIHJldHVybiBuZXcgVmFsaWRhdGlvblJlc3VsdChcbiAgICAgIGAke0pTT04uc3RyaW5naWZ5KHByb3AuZGF0YSl9IGlzIGxhcmdlciB0aGFuIG1heCB2YWx1ZSgke3Byb3AubWF4fSlgXG4gICAgKTtcbiAgfVxuICByZXR1cm4gVkFMSURBVElPTl9TVUNDRVNTO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVSYW5nZShwcm9wOiB7XG4gIG1pbj86IG51bWJlcjtcbiAgbWF4PzogbnVtYmVyO1xuICBkYXRhOiBudW1iZXI7XG59KTogVmFsaWRhdGlvblJlc3VsdCB7XG4gIGlmIChwcm9wLm1pbiAmJiBwcm9wLmRhdGEgPCBwcm9wLm1pbikge1xuICAgIHJldHVybiBuZXcgVmFsaWRhdGlvblJlc3VsdChcbiAgICAgIGAke0pTT04uc3RyaW5naWZ5KHByb3AuZGF0YSl9IGlzIGxlc3MgdGhhbiBtaW4gdmFsdWUoJHtwcm9wLm1pbn0pYFxuICAgICk7XG4gIH1cblxuICBpZiAocHJvcC5tYXggJiYgcHJvcC5kYXRhID4gcHJvcC5tYXgpIHtcbiAgICByZXR1cm4gbmV3IFZhbGlkYXRpb25SZXN1bHQoXG4gICAgICBgJHtKU09OLnN0cmluZ2lmeShwcm9wLmRhdGEpfSBpcyBsYXJnZXIgdGhhbiBtaW4gdmFsdWUoJHtwcm9wLm1pbn0pYFxuICAgICk7XG4gIH1cbiAgcmV0dXJuIFZBTElEQVRJT05fU1VDQ0VTUztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlQWxsb3dlZFBhdHRlcm4ocHJvcDoge1xuICByZWc6IHN0cmluZztcbiAgZGF0YTogc3RyaW5nO1xufSk6IFZhbGlkYXRpb25SZXN1bHQge1xuICBjb25zdCByZWdFeHAgPSBuZXcgUmVnRXhwKHByb3AucmVnKTtcbiAgaWYgKHJlZ0V4cC50ZXN0KHByb3AuZGF0YSkpIHtcbiAgICByZXR1cm4gVkFMSURBVElPTl9TVUNDRVNTO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBuZXcgVmFsaWRhdGlvblJlc3VsdChcbiAgICAgIGBUaGUgc3RyaW5nICR7SlNPTi5zdHJpbmdpZnkoXG4gICAgICAgIHByb3AuZGF0YVxuICAgICAgKX0gZG9lcyBub3QgbWF0Y2ggdGhlIHJlZ3VsYXIgZXhwcmVzc2lvbiBcIiR7cHJvcC5yZWd9XCJgXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVBbGxvd2VkVmFsdWVzKHByb3A6IHtcbiAgYWxsb3dlZFZhbHVlczogW2FueV07XG4gIGRhdGE6IGFueTtcbn0pOiBWYWxpZGF0aW9uUmVzdWx0IHtcbiAgZm9yIChsZXQgdmFsdWUgb2YgcHJvcC5hbGxvd2VkVmFsdWVzKSB7XG4gICAgaWYgKHZhbHVlID09PSBwcm9wLmRhdGEpIHJldHVybiBWQUxJREFUSU9OX1NVQ0NFU1M7XG4gIH1cbiAgcmV0dXJuIG5ldyBWYWxpZGF0aW9uUmVzdWx0KFxuICAgIGAke0pTT04uc3RyaW5naWZ5KHByb3AuZGF0YSl9IGRvZXNuJ3QgZXhpc3QgaW4gWyR7cHJvcC5hbGxvd2VkVmFsdWVzfV1gXG4gICk7XG59XG5cbi8vIFJPUyB2YWxpZGF0b3JzIGZvciBwcmltaXRpdmUgdHlwZXNcbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZVN0cmluZyh4OiBhbnkpOiBWYWxpZGF0aW9uUmVzdWx0IHtcbiAgaWYgKGNhbkluc3BlY3QoeCkgJiYgdHlwZW9mIHggIT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gbmV3IFZhbGlkYXRpb25SZXN1bHQoYCR7SlNPTi5zdHJpbmdpZnkoeCl9IHNob3VsZCBiZSBhIHN0cmluZ2ApO1xuICB9XG4gIHJldHVybiBWQUxJREFUSU9OX1NVQ0NFU1M7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZU51bWJlcih4OiBhbnkpOiBWYWxpZGF0aW9uUmVzdWx0IHtcbiAgaWYgKGNhbkluc3BlY3QoeCkgJiYgdHlwZW9mIHggIT09IFwibnVtYmVyXCIpIHtcbiAgICByZXR1cm4gbmV3IFZhbGlkYXRpb25SZXN1bHQoYCR7SlNPTi5zdHJpbmdpZnkoeCl9IHNob3VsZCBiZSBhIG51bWJlcmApO1xuICB9XG4gIHJldHVybiBWQUxJREFUSU9OX1NVQ0NFU1M7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZUJvb2xlYW4oeDogYW55KTogVmFsaWRhdGlvblJlc3VsdCB7XG4gIGlmIChjYW5JbnNwZWN0KHgpICYmIHR5cGVvZiB4ICE9PSBcImJvb2xlYW5cIikge1xuICAgIHJldHVybiBuZXcgVmFsaWRhdGlvblJlc3VsdChgJHtKU09OLnN0cmluZ2lmeSh4KX0gc2hvdWxkIGJlIGEgYm9vbGVhbmApO1xuICB9XG4gIHJldHVybiBWQUxJREFUSU9OX1NVQ0NFU1M7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZUFueSh4OiBhbnkpOiBWYWxpZGF0aW9uUmVzdWx0IHtcbiAgLy8gYXZvaWQgdHNjIGVycm9yIC0+ICd4JyBpcyBkZWNsYXJlZCBidXQgaXRzIHZhbHVlIGlzIG5ldmVyIHJlYWRcbiAgaWYgKGNhbkluc3BlY3QoeCkgfHwgdHJ1ZSkge1xuICAgIHJldHVybiBWQUxJREFUSU9OX1NVQ0NFU1M7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlRGF0ZSh4OiBhbnkpOiBWYWxpZGF0aW9uUmVzdWx0IHtcbiAgaWYgKGNhbkluc3BlY3QoeCkgJiYgISh4IGluc3RhbmNlb2YgRGF0ZSkpIHtcbiAgICByZXR1cm4gbmV3IFZhbGlkYXRpb25SZXN1bHQoYCR7SlNPTi5zdHJpbmdpZnkoeCl9IHNob3VsZCBiZSBhIERhdGVgKTtcbiAgfVxuXG4gIGlmICh4ICE9PSB1bmRlZmluZWQgJiYgaXNOYU4oeC5nZXRUaW1lKCkpKSB7XG4gICAgcmV0dXJuIG5ldyBWYWxpZGF0aW9uUmVzdWx0KFwiZ290IGFuIHVucGFyc2VhYmxlIERhdGVcIik7XG4gIH1cblxuICByZXR1cm4gVkFMSURBVElPTl9TVUNDRVNTO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVPYmplY3QoeDogYW55KTogVmFsaWRhdGlvblJlc3VsdCB7XG4gIGlmIChjYW5JbnNwZWN0KHgpICYmIHR5cGVvZiB4ICE9PSBcIm9iamVjdFwiKSB7XG4gICAgcmV0dXJuIG5ldyBWYWxpZGF0aW9uUmVzdWx0KGAke0pTT04uc3RyaW5naWZ5KHgpfSBzaG91bGQgYmUgYW4gJ29iamVjdCdgKTtcbiAgfVxuICByZXR1cm4gVkFMSURBVElPTl9TVUNDRVNTO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVBbnlEaWN0KHg6IGFueSk6IFZhbGlkYXRpb25SZXN1bHQge1xuICBpZiAoY2FuSW5zcGVjdCh4KSAmJiB0eXBlb2YgeCAhPT0gXCJvYmplY3RcIikge1xuICAgIHJldHVybiBuZXcgVmFsaWRhdGlvblJlc3VsdChgJHtKU09OLnN0cmluZ2lmeSh4KX0gc2hvdWxkIGJlIGFuICdEaWN0W3N0ciwgQW55XSdgKTtcbiAgfVxuICByZXR1cm4gVkFMSURBVElPTl9TVUNDRVNTO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVSb3NUYWcoeDogYW55KTogVmFsaWRhdGlvblJlc3VsdCB7XG4gIGlmICghY2FuSW5zcGVjdCh4KSkge1xuICAgIHJldHVybiBWQUxJREFUSU9OX1NVQ0NFU1M7XG4gIH1cblxuICBpZiAoeC5rZXkgPT0gbnVsbCB8fCB4LnZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gbmV3IFZhbGlkYXRpb25SZXN1bHQoXG4gICAgICBgJHtKU09OLnN0cmluZ2lmeSh4KX0gc2hvdWxkIGhhdmUgYSAna2V5JyBhbmQgYSAndmFsdWUnIHByb3BlcnR5YFxuICAgICk7XG4gIH1cblxuICByZXR1cm4gVkFMSURBVElPTl9TVUNDRVNTO1xufVxuXG4vKipcbiAqIFJldHVybiBhIGxpc3QgdmFsaWRhdG9yIGJhc2VkIG9uIHRoZSBnaXZlbiBlbGVtZW50IHZhbGlkYXRvclxuICovXG5leHBvcnQgZnVuY3Rpb24gbGlzdFZhbGlkYXRvcihlbGVtZW50VmFsaWRhdG9yOiBWYWxpZGF0b3IpOiBWYWxpZGF0b3Ige1xuICByZXR1cm4gKHg6IGFueSkgPT4ge1xuICAgIGlmICghY2FuSW5zcGVjdCh4KSkge1xuICAgICAgcmV0dXJuIFZBTElEQVRJT05fU1VDQ0VTUztcbiAgICB9XG5cbiAgICBpZiAoIXguZm9yRWFjaCkge1xuICAgICAgcmV0dXJuIG5ldyBWYWxpZGF0aW9uUmVzdWx0KGAke0pTT04uc3RyaW5naWZ5KHgpfSBzaG91bGQgYmUgYSBsaXN0YCk7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB4Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0geFtpXTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGVsZW1lbnRWYWxpZGF0b3IoZWxlbWVudCk7XG4gICAgICBpZiAoIXJlc3VsdC5pc1N1Y2Nlc3MpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5wcmVmaXgoYGVsZW1lbnQgJHtpfWApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBWQUxJREFUSU9OX1NVQ0NFU1M7XG4gIH07XG59XG5cbi8qKlxuICogUmV0dXJuIGEgaGFzaCB2YWxpZGF0b3IgYmFzZWQgb24gdGhlIGdpdmVuIGVsZW1lbnQgdmFsaWRhdG9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoYXNoVmFsaWRhdG9yKGVsZW1lbnRWYWxpZGF0b3I6IFZhbGlkYXRvcik6IFZhbGlkYXRvciB7XG4gIHJldHVybiAoeDogYW55KSA9PiB7XG4gICAgaWYgKCFjYW5JbnNwZWN0KHgpKSB7XG4gICAgICByZXR1cm4gVkFMSURBVElPTl9TVUNDRVNTO1xuICAgIH1cblxuICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHgpKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBlbGVtZW50VmFsaWRhdG9yKHhba2V5XSk7XG4gICAgICBpZiAoIXJlc3VsdC5pc1N1Y2Nlc3MpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5wcmVmaXgoYGVsZW1lbnQgJyR7a2V5fSdgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gVkFMSURBVElPTl9TVUNDRVNTO1xuICB9O1xufVxuXG4vKipcbiAqIERlY29yYXRlIGEgdmFsaWRhdG9yIHdpdGggYSBtZXNzYWdlIGNsYXJpZnlpbmcgdGhlIHByb3BlcnR5IHRoZSBmYWlsdXJlIGlzIGZvci5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByb3BlcnR5VmFsaWRhdG9yKFxuICBwcm9wTmFtZTogc3RyaW5nLFxuICB2YWxpZGF0b3I6IFZhbGlkYXRvclxuKTogVmFsaWRhdG9yIHtcbiAgcmV0dXJuICh4OiBhbnkpID0+IHtcbiAgICByZXR1cm4gdmFsaWRhdG9yKHgpLnByZWZpeChwcm9wTmFtZSk7XG4gIH07XG59XG5cbi8qKlxuICogUmV0dXJuIGEgdmFsaWRhdG9yIHRoYXQgd2lsbCBmYWlsIGlmIHRoZSBwYXNzZWQgcHJvcGVydHkgaXMgbm90IHByZXNlbnRcbiAqXG4gKiBEb2VzIG5vdCBkaXN0aW5ndWlzaCBiZXR3ZWVuIHRoZSBwcm9wZXJ0eSBhY3R1YWxseSBub3QgYmVpbmcgcHJlc2VudCwgdnMgYmVpbmcgcHJlc2VudCBidXQgJ251bGwnXG4gKiBvciAndW5kZWZpbmVkJyAoY291cnRlc3kgb2YgSmF2YVNjcmlwdCksIHdoaWNoIGlzIGdlbmVyYWxseSB0aGUgYmVoYXZpb3IgdGhhdCB3ZSB3YW50LlxuICpcbiAqIEVtcHR5IHN0cmluZ3MgYXJlIGNvbnNpZGVyZWQgXCJwcmVzZW50XCItLWRvbid0IGtub3cgaWYgdGhpcyBhZ3JlZXMgd2l0aCBob3cgUk9TIGxvb2tzIGF0IHRoZSB3b3JsZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlcXVpcmVkVmFsaWRhdG9yKHg6IGFueSkge1xuICBpZiAoeCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIG5ldyBWYWxpZGF0aW9uUmVzdWx0KFwicmVxdWlyZWQgYnV0IG1pc3NpbmdcIik7XG4gIH1cbiAgcmV0dXJuIFZBTElEQVRJT05fU1VDQ0VTUztcbn1cblxuLyoqXG4gKiBSZXF1aXJlIGEgcHJvcGVydHkgZnJvbSBhIHByb3BlcnR5IGJhZy5cbiAqXG4gKiBAcGFyYW0gcHJvcHMgIHRoZSBwcm9wZXJ0eSBiYWcgZnJvbSB3aGljaCBhIHByb3BlcnR5IGlzIHJlcXVpcmVkLlxuICogQHBhcmFtIG5hbWUgICB0aGUgbmFtZSBvZiB0aGUgcmVxdWlyZWQgcHJvcGVydHkuXG4gKiBAcGFyYW0gdHlwZU5hbWUgdGhlIG5hbWUgb2YgdGhlIGNvbnN0cnVjdCB0eXBlIHRoYXQgcmVxdWlyZXMgdGhlIHByb3BlcnR5XG4gKlxuICogQHJldHVybnMgdGhlIHZhbHVlIG9mIGBgcHJvcHNbbmFtZV1gYFxuICpcbiAqIEB0aHJvd3MgaWYgdGhlIHByb3BlcnR5IGBgbmFtZWBgIGlzIG5vdCBwcmVzZW50IGluIGBgcHJvcHNgYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlcXVpcmVQcm9wZXJ0eShcbiAgcHJvcHM6IHsgW25hbWU6IHN0cmluZ106IGFueSB9LFxuICBuYW1lOiBzdHJpbmcsXG4gIGNvbnRleHQ6IENvbnN0cnVjdFxuKTogYW55IHtcbiAgY29uc3QgdmFsdWUgPSBwcm9wc1tuYW1lXTtcbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBgJHtjb250ZXh0LnRvU3RyaW5nKCl9IGlzIG1pc3NpbmcgcmVxdWlyZWQgcHJvcGVydHk6ICR7bmFtZX1gXG4gICAgKTtcbiAgfVxuICAvLyBQb3NzaWJseSBhZGQgdHlwZS1jaGVja2luZyBoZXJlLi4uXG4gIHJldHVybiB2YWx1ZTtcbn1cblxuLyoqXG4gKiBWYWxpZGF0ZXMgaWYgYW55IG9mIHRoZSBnaXZlbiB2YWxpZGF0b3JzIG1hdGNoZXNcbiAqXG4gKiBXZSBhZGQgZWl0aGVyL29yIHdvcmRzIHRvIHRoZSBmcm9udCBvZiB0aGUgZXJyb3IgbWVzYWdlcyBzbyB0aGF0IHRoZXkgcmVhZFxuICogbW9yZSBuaWNlbHkuIEV4YW1wbGU6XG4gKlxuICogICBQcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciAnRnVuY3Rpb25Qcm9wcydcbiAqICAgICBjb2RlVXJpOiBub3Qgb25lIG9mIHRoZSBwb3NzaWJsZSB0eXBlc1xuICogICAgICAgZWl0aGVyOiBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciAnUzNMb2NhdGlvblByb3BlcnR5J1xuICogICAgICAgICBidWNrZXQ6IHJlcXVpcmVkIGJ1dCBtaXNzaW5nXG4gKiAgICAgICAgIGtleTogcmVxdWlyZWQgYnV0IG1pc3NpbmdcbiAqICAgICAgICAgdmVyc2lvbjogcmVxdWlyZWQgYnV0IG1pc3NpbmdcbiAqICAgICAgIG9yOiAnMycgc2hvdWxkIGJlIGEgJ3N0cmluZydcbiAqXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1bmlvblZhbGlkYXRvciguLi52YWxpZGF0b3JzOiBWYWxpZGF0b3JbXSk6IFZhbGlkYXRvciB7XG4gIHJldHVybiAoeDogYW55KSA9PiB7XG4gICAgY29uc3QgcmVzdWx0cyA9IG5ldyBWYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGxldCBlaXRoZXJPciA9IFwiZWl0aGVyXCI7XG5cbiAgICBmb3IgKGNvbnN0IHZhbGlkYXRvciBvZiB2YWxpZGF0b3JzKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSB2YWxpZGF0b3IoeCk7XG4gICAgICBpZiAocmVzdWx0LmlzU3VjY2Vzcykge1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfVxuICAgICAgcmVzdWx0cy5jb2xsZWN0KHJlc3VsdC5wcmVmaXgoZWl0aGVyT3IpKTtcbiAgICAgIGVpdGhlck9yID0gXCJvclwiO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cy53cmFwKFwibm90IG9uZSBvZiB0aGUgcG9zc2libGUgdHlwZXNcIik7XG4gIH07XG59XG5cbi8qKlxuICogUmV0dXJuIHdoZXRoZXIgdGhlIGluZGljYXRlZCB2YWx1ZSByZXByZXNlbnRzIGEgUk9TIGludHJpbnNpYy5cbiAqXG4gKiBST1MgaW50cmluc2ljcyBhcmUgbW9kZWxlZCBhcyBvYmplY3RzIHdpdGggYSBzaW5nbGUga2V5LCB3aGljaFxuICogbG9vayBsaWtlOiB7IFwiRm46OkdldEF0dFwiOiBbLi4uXSB9IG9yIHNpbWlsYXIuXG4gKi9cbmZ1bmN0aW9uIGlzUm9zSW50cmluc2ljKHg6IGFueSkge1xuICBpZiAoISh0eXBlb2YgeCA9PT0gXCJvYmplY3RcIikpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHgpO1xuICBpZiAoa2V5cy5sZW5ndGggIT09IDEpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4ga2V5c1swXSA9PT0gXCJSZWZcIiB8fCBrZXlzWzBdLnN1YnN0cigwLCA0KSA9PT0gXCJGbjo6XCI7XG59XG5cbi8vIENhbm5vdCBiZSBwdWJsaWMgYmVjYXVzZSBKU0lJIGdldHMgY29uZnVzZWQgYWJvdXQgZXM1LmQudHNcbmNsYXNzIFJvc1N5bnRoZXNpc0Vycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBwdWJsaWMgcmVhZG9ubHkgdHlwZSA9IFwiUm9zU3ludGhlc2lzRXJyb3JcIjtcbn1cbiJdfQ==