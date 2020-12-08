"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unionValidator = exports.requireProperty = exports.requiredValidator = exports.propertyValidator = exports.hashValidator = exports.listValidator = exports.validateRosTag = exports.validateObject = exports.validateDate = exports.validateAny = exports.validateBoolean = exports.validateNumber = exports.validateString = exports.validateAllowedValues = exports.validateAllowedPattern = exports.validateRange = exports.validateLength = exports.canInspect = exports.VALIDATION_SUCCESS = exports.ValidationResults = exports.ValidationResult = exports.unionMapper = exports.hashMapper = exports.listMapper = exports.rosTagToRosTemplate = exports.dateToRosTemplate = exports.numberToRosTemplate = exports.objectToRosTemplate = exports.booleanToRosTemplate = exports.stringToRosTemplate = void 0;
function identity(x) {
    return x;
}
exports.stringToRosTemplate = identity;
exports.booleanToRosTemplate = identity;
exports.objectToRosTemplate = identity;
exports.numberToRosTemplate = identity;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVudGltZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJ1bnRpbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBWUEsU0FBUyxRQUFRLENBQUMsQ0FBTTtJQUN0QixPQUFPLENBQUMsQ0FBQztBQUNYLENBQUM7QUFFWSxRQUFBLG1CQUFtQixHQUFXLFFBQVEsQ0FBQztBQUN2QyxRQUFBLG9CQUFvQixHQUFXLFFBQVEsQ0FBQztBQUN4QyxRQUFBLG1CQUFtQixHQUFXLFFBQVEsQ0FBQztBQUN2QyxRQUFBLG1CQUFtQixHQUFXLFFBQVEsQ0FBQztBQUVwRDs7Ozs7O0dBTUc7QUFDSCxTQUFnQixpQkFBaUIsQ0FBQyxDQUFRO0lBQ3hDLElBQUksQ0FBQyxDQUFDLEVBQUU7UUFDTixPQUFPLFNBQVMsQ0FBQztLQUNsQjtJQUVELDJDQUEyQztJQUMzQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLGNBQWMsRUFBRSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUM3RCxDQUFDLENBQUMsVUFBVSxFQUFFLENBQ2YsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxJQUFJLEdBQUcsQ0FDeEQsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUNsQixFQUFFLENBQUM7QUFDTixDQUFDO0FBWEQsOENBV0M7QUFFRDs7R0FFRztBQUNILFNBQVMsR0FBRyxDQUFDLENBQVM7SUFDcEIsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFO1FBQ1YsT0FBTyxHQUFHLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO0tBQzNCO0lBQ0QsT0FBTyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDdEIsQ0FBQztBQUVEOztHQUVHO0FBQ0gsU0FBZ0IsbUJBQW1CLENBQUMsQ0FBTTtJQUN4QyxPQUFPO1FBQ0wsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHO1FBQ1YsS0FBSyxFQUFFLENBQUMsQ0FBQyxLQUFLO0tBQ2YsQ0FBQztBQUNKLENBQUM7QUFMRCxrREFLQztBQUVELFNBQWdCLFVBQVUsQ0FBQyxhQUFxQjtJQUM5QyxPQUFPLENBQUMsQ0FBTSxFQUFFLEVBQUU7UUFDaEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNsQixPQUFPLENBQUMsQ0FBQztTQUNWO1FBQ0QsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzlCLENBQUMsQ0FBQztBQUNKLENBQUM7QUFQRCxnQ0FPQztBQUVELFNBQWdCLFVBQVUsQ0FBQyxhQUFxQjtJQUM5QyxPQUFPLENBQUMsQ0FBTSxFQUFFLEVBQUU7UUFDaEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNsQixPQUFPLENBQUMsQ0FBQztTQUNWO1FBRUQsTUFBTSxHQUFHLEdBQVEsRUFBRSxDQUFDO1FBRXBCLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDN0IsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQWRELGdDQWNDO0FBRUQ7Ozs7OztHQU1HO0FBQ0gsU0FBZ0IsV0FBVyxDQUN6QixVQUF1QixFQUN2QixPQUFpQjtJQUVqQixJQUFJLFVBQVUsQ0FBQyxNQUFNLEtBQUssT0FBTyxDQUFDLE1BQU0sRUFBRTtRQUN4QyxNQUFNLEtBQUssQ0FDVCx1RUFBdUUsQ0FDeEUsQ0FBQztLQUNIO0lBRUQsT0FBTyxDQUFDLENBQU0sRUFBRSxFQUFFO1FBQ2hCLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDbEIsT0FBTyxDQUFDLENBQUM7U0FDVjtRQUVELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzFDLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRTtnQkFDOUIsT0FBTyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDdEI7U0FDRjtRQUVELDRGQUE0RjtRQUM1Rix1Q0FBdUM7UUFDdkMsTUFBTSxJQUFJLFNBQVMsQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO0lBQzlELENBQUMsQ0FBQztBQUNKLENBQUM7QUF6QkQsa0NBeUJDO0FBRUQseUVBQXlFO0FBQ3pFLGFBQWE7QUFDYixFQUFFO0FBQ0Ysc0ZBQXNGO0FBQ3RGLEVBQUU7QUFDRiwyRkFBMkY7QUFDM0YsMkZBQTJGO0FBQzNGLG9DQUFvQztBQUNwQyxFQUFFO0FBQ0YsMEZBQTBGO0FBQzFGLHNGQUFzRjtBQUN0RixFQUFFO0FBRUY7Ozs7O0dBS0c7QUFDSCxNQUFhLGdCQUFnQjtJQUMzQixZQUNXLGVBQXVCLEVBQUUsRUFDekIsVUFBNkIsSUFBSSxpQkFBaUIsRUFBRTtRQURwRCxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUN6QixZQUFPLEdBQVAsT0FBTyxDQUE2QztJQUM1RCxDQUFDO0lBRUosSUFBVyxTQUFTO1FBQ2xCLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO0lBQ3RELENBQUM7SUFFRDs7T0FFRztJQUNJLGFBQWE7UUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbkIsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQy9CLGdGQUFnRjtZQUNoRixPQUFPLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqRSxNQUFNLElBQUksaUJBQWlCLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDdEM7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxTQUFTO1FBQ2QsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNuRCxPQUFPLENBQ0wsSUFBSSxDQUFDLFlBQVk7WUFDakIsQ0FBQyxhQUFhLENBQUMsTUFBTTtnQkFDbkIsQ0FBQyxDQUFDLE9BQU8sYUFBYSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLEVBQUU7Z0JBQy9DLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FDUixDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0ksTUFBTSxDQUFDLE9BQWU7UUFDM0IsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxPQUFPLElBQUksZ0JBQWdCLENBQ3pCLEdBQUcsT0FBTyxLQUFLLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFDbEMsSUFBSSxDQUFDLE9BQU8sQ0FDYixDQUFDO0lBQ0osQ0FBQztDQUNGO0FBL0NELDRDQStDQztBQUVEOztHQUVHO0FBQ0gsTUFBYSxpQkFBaUI7SUFDNUIsWUFBbUIsVUFBOEIsRUFBRTtRQUFoQyxZQUFPLEdBQVAsT0FBTyxDQUF5QjtJQUFHLENBQUM7SUFFaEQsT0FBTyxDQUFDLE1BQXdCO1FBQ3JDLHdCQUF3QjtRQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRTtZQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUMzQjtJQUNILENBQUM7SUFFRCxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFTSxhQUFhO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSxJQUFJLENBQUMsT0FBZTtRQUN6QixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsT0FBTywwQkFBa0IsQ0FBQztTQUMzQjtRQUNELE9BQU8sSUFBSSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDN0MsQ0FBQztDQUNGO0FBOUJELDhDQThCQztBQUVELDBDQUEwQztBQUM3QixRQUFBLGtCQUFrQixHQUFHLElBQUksZ0JBQWdCLEVBQUUsQ0FBQztBQUl6RDs7OztHQUlHO0FBQ0gsU0FBZ0IsVUFBVSxDQUFDLENBQU07SUFDL0Isd0VBQXdFO0lBQ3hFLE9BQU8sQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN6QyxDQUFDO0FBSEQsZ0NBR0M7QUFFRCxTQUFnQixjQUFjLENBQUMsSUFJOUI7SUFDQyxJQUFJLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFO1FBQ3BDLE9BQU8sSUFBSSxnQkFBZ0IsQ0FDekIsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsMkJBQTJCLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FDbkUsQ0FBQztLQUNIO0lBRUQsSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRTtRQUNwQyxPQUFPLElBQUksZ0JBQWdCLENBQ3pCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLDZCQUE2QixJQUFJLENBQUMsR0FBRyxHQUFHLENBQ3JFLENBQUM7S0FDSDtJQUNELE9BQU8sMEJBQWtCLENBQUM7QUFDNUIsQ0FBQztBQWpCRCx3Q0FpQkM7QUFFRCxTQUFnQixhQUFhLENBQUMsSUFJN0I7SUFDQyxJQUFJLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFO1FBQ3BDLE9BQU8sSUFBSSxnQkFBZ0IsQ0FDekIsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsMkJBQTJCLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FDbkUsQ0FBQztLQUNIO0lBRUQsSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRTtRQUNwQyxPQUFPLElBQUksZ0JBQWdCLENBQ3pCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLDZCQUE2QixJQUFJLENBQUMsR0FBRyxHQUFHLENBQ3JFLENBQUM7S0FDSDtJQUNELE9BQU8sMEJBQWtCLENBQUM7QUFDNUIsQ0FBQztBQWpCRCxzQ0FpQkM7QUFFRCxTQUFnQixzQkFBc0IsQ0FBQyxJQUd0QztJQUNDLE1BQU0sTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNwQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQzFCLE9BQU8sMEJBQWtCLENBQUM7S0FDM0I7U0FBTTtRQUNMLE9BQU8sSUFBSSxnQkFBZ0IsQ0FDekIsY0FBYyxJQUFJLENBQUMsU0FBUyxDQUMxQixJQUFJLENBQUMsSUFBSSxDQUNWLDJDQUEyQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQ3hELENBQUM7S0FDSDtBQUNILENBQUM7QUFkRCx3REFjQztBQUVELFNBQWdCLHFCQUFxQixDQUFDLElBR3JDO0lBQ0MsS0FBSyxJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1FBQ3BDLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTywwQkFBa0IsQ0FBQztLQUNwRDtJQUNELE9BQU8sSUFBSSxnQkFBZ0IsQ0FDekIsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsc0JBQXNCLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FDeEUsQ0FBQztBQUNKLENBQUM7QUFWRCxzREFVQztBQUVELHFDQUFxQztBQUNyQyxTQUFnQixjQUFjLENBQUMsQ0FBTTtJQUNuQyxJQUFJLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxPQUFPLENBQUMsS0FBSyxRQUFRLEVBQUU7UUFDMUMsT0FBTyxJQUFJLGdCQUFnQixDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQztLQUN4RTtJQUNELE9BQU8sMEJBQWtCLENBQUM7QUFDNUIsQ0FBQztBQUxELHdDQUtDO0FBRUQsU0FBZ0IsY0FBYyxDQUFDLENBQU07SUFDbkMsSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksT0FBTyxDQUFDLEtBQUssUUFBUSxFQUFFO1FBQzFDLE9BQU8sSUFBSSxnQkFBZ0IsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUM7S0FDeEU7SUFDRCxPQUFPLDBCQUFrQixDQUFDO0FBQzVCLENBQUM7QUFMRCx3Q0FLQztBQUVELFNBQWdCLGVBQWUsQ0FBQyxDQUFNO0lBQ3BDLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxLQUFLLFNBQVMsRUFBRTtRQUMzQyxPQUFPLElBQUksZ0JBQWdCLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0tBQ3pFO0lBQ0QsT0FBTywwQkFBa0IsQ0FBQztBQUM1QixDQUFDO0FBTEQsMENBS0M7QUFFRCxTQUFnQixXQUFXLENBQUMsQ0FBTTtJQUNoQyxpRUFBaUU7SUFDakUsSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFFO1FBQ3pCLE9BQU8sMEJBQWtCLENBQUM7S0FDM0I7QUFDSCxDQUFDO0FBTEQsa0NBS0M7QUFFRCxTQUFnQixZQUFZLENBQUMsQ0FBTTtJQUNqQyxJQUFJLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLElBQUksQ0FBQyxFQUFFO1FBQ3pDLE9BQU8sSUFBSSxnQkFBZ0IsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUM7S0FDdEU7SUFFRCxJQUFJLENBQUMsS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFO1FBQ3pDLE9BQU8sSUFBSSxnQkFBZ0IsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0tBQ3hEO0lBRUQsT0FBTywwQkFBa0IsQ0FBQztBQUM1QixDQUFDO0FBVkQsb0NBVUM7QUFFRCxTQUFnQixjQUFjLENBQUMsQ0FBTTtJQUNuQyxJQUFJLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxPQUFPLENBQUMsS0FBSyxRQUFRLEVBQUU7UUFDMUMsT0FBTyxJQUFJLGdCQUFnQixDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsd0JBQXdCLENBQUMsQ0FBQztLQUMzRTtJQUNELE9BQU8sMEJBQWtCLENBQUM7QUFDNUIsQ0FBQztBQUxELHdDQUtDO0FBRUQsU0FBZ0IsY0FBYyxDQUFDLENBQU07SUFDbkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUNsQixPQUFPLDBCQUFrQixDQUFDO0tBQzNCO0lBRUQsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLElBQUksSUFBSSxDQUFDLENBQUMsS0FBSyxJQUFJLElBQUksRUFBRTtRQUNwQyxPQUFPLElBQUksZ0JBQWdCLENBQ3pCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsNkNBQTZDLENBQ2xFLENBQUM7S0FDSDtJQUVELE9BQU8sMEJBQWtCLENBQUM7QUFDNUIsQ0FBQztBQVpELHdDQVlDO0FBRUQ7O0dBRUc7QUFDSCxTQUFnQixhQUFhLENBQUMsZ0JBQTJCO0lBQ3ZELE9BQU8sQ0FBQyxDQUFNLEVBQUUsRUFBRTtRQUNoQixJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ2xCLE9BQU8sMEJBQWtCLENBQUM7U0FDM0I7UUFFRCxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRTtZQUNkLE9BQU8sSUFBSSxnQkFBZ0IsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUM7U0FDdEU7UUFFRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNqQyxNQUFNLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckIsTUFBTSxNQUFNLEdBQUcsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDekMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUU7Z0JBQ3JCLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDdEM7U0FDRjtRQUVELE9BQU8sMEJBQWtCLENBQUM7SUFDNUIsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQXBCRCxzQ0FvQkM7QUFFRDs7R0FFRztBQUNILFNBQWdCLGFBQWEsQ0FBQyxnQkFBMkI7SUFDdkQsT0FBTyxDQUFDLENBQU0sRUFBRSxFQUFFO1FBQ2hCLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDbEIsT0FBTywwQkFBa0IsQ0FBQztTQUMzQjtRQUVELEtBQUssTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNoQyxNQUFNLE1BQU0sR0FBRyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUN4QyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRTtnQkFDckIsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUMsQ0FBQzthQUMxQztTQUNGO1FBRUQsT0FBTywwQkFBa0IsQ0FBQztJQUM1QixDQUFDLENBQUM7QUFDSixDQUFDO0FBZkQsc0NBZUM7QUFFRDs7R0FFRztBQUNILFNBQWdCLGlCQUFpQixDQUMvQixRQUFnQixFQUNoQixTQUFvQjtJQUVwQixPQUFPLENBQUMsQ0FBTSxFQUFFLEVBQUU7UUFDaEIsT0FBTyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3ZDLENBQUMsQ0FBQztBQUNKLENBQUM7QUFQRCw4Q0FPQztBQUVEOzs7Ozs7O0dBT0c7QUFDSCxTQUFnQixpQkFBaUIsQ0FBQyxDQUFNO0lBQ3RDLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRTtRQUNiLE9BQU8sSUFBSSxnQkFBZ0IsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0tBQ3JEO0lBQ0QsT0FBTywwQkFBa0IsQ0FBQztBQUM1QixDQUFDO0FBTEQsOENBS0M7QUFFRDs7Ozs7Ozs7OztHQVVHO0FBQ0gsU0FBZ0IsZUFBZSxDQUM3QixLQUE4QixFQUM5QixJQUFZLEVBQ1osT0FBa0I7SUFFbEIsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLElBQUksS0FBSyxJQUFJLElBQUksRUFBRTtRQUNqQixNQUFNLElBQUksS0FBSyxDQUNiLEdBQUcsT0FBTyxDQUFDLFFBQVEsRUFBRSxrQ0FBa0MsSUFBSSxFQUFFLENBQzlELENBQUM7S0FDSDtJQUNELHFDQUFxQztJQUNyQyxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUM7QUFiRCwwQ0FhQztBQUVEOzs7Ozs7Ozs7Ozs7OztHQWNHO0FBQ0gsU0FBZ0IsY0FBYyxDQUFDLEdBQUcsVUFBdUI7SUFDdkQsT0FBTyxDQUFDLENBQU0sRUFBRSxFQUFFO1FBQ2hCLE1BQU0sT0FBTyxHQUFHLElBQUksaUJBQWlCLEVBQUUsQ0FBQztRQUN4QyxJQUFJLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFFeEIsS0FBSyxNQUFNLFNBQVMsSUFBSSxVQUFVLEVBQUU7WUFDbEMsTUFBTSxNQUFNLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVCLElBQUksTUFBTSxDQUFDLFNBQVMsRUFBRTtnQkFDcEIsT0FBTyxNQUFNLENBQUM7YUFDZjtZQUNELE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3pDLFFBQVEsR0FBRyxJQUFJLENBQUM7U0FDakI7UUFDRCxPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsK0JBQStCLENBQUMsQ0FBQztJQUN2RCxDQUFDLENBQUM7QUFDSixDQUFDO0FBZkQsd0NBZUM7QUFFRDs7Ozs7R0FLRztBQUNILFNBQVMsY0FBYyxDQUFDLENBQU07SUFDNUIsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssUUFBUSxDQUFDLEVBQUU7UUFDNUIsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUNELE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUIsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtRQUNyQixPQUFPLEtBQUssQ0FBQztLQUNkO0lBRUQsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLE1BQU0sQ0FBQztBQUM5RCxDQUFDO0FBRUQsNkRBQTZEO0FBQzdELE1BQU0saUJBQWtCLFNBQVEsS0FBSztJQUFyQzs7UUFDa0IsU0FBSSxHQUFHLG1CQUFtQixDQUFDO0lBQzdDLENBQUM7Q0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gXCIuL2NvbnN0cnVjdC1jb21wYXRcIjtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gUFJPUEVSVFkgTUFQUEVSU1xuLy9cbi8vIFRoZXNlIGFyZSB1c2VkIHdoaWxlIGNvbnZlcnRpbmcgZ2VuZXJhdGVkIGNsYXNzZXMvcHJvcGVydHkgYmFncyB0byBST1MgcHJvcGVydHkgb2JqZWN0c1xuLy9cbi8vIFdlIHVzZSBpZGVudGl0eSBtYXBwZXJzIGZvciB0aGUgcHJpbWl0aXZlIHR5cGVzLiBUaGVzZSBkb24ndCBkbyBhbnl0aGluZyBidXQgYXJlIHRoZXJlIHRvIG1ha2UgdGhlIGNvZGVcbi8vIGdlbmVyYXRpb24gd29yayBvdXQgbmljZWx5IChzbyB0aGUgY29kZSBnZW5lcmF0b3IgZG9lc24ndCBuZWVkIHRvIGVtaXQgZGlmZmVyZW50IGNvZGUgZm9yIHByaW1pdGl2ZVxuLy8gdnMuIGNvbXBsZXggdHlwZXMpLlxuZXhwb3J0IHR5cGUgTWFwcGVyID0gKHg6IGFueSkgPT4gYW55O1xuXG5mdW5jdGlvbiBpZGVudGl0eSh4OiBhbnkpIHtcbiAgcmV0dXJuIHg7XG59XG5cbmV4cG9ydCBjb25zdCBzdHJpbmdUb1Jvc1RlbXBsYXRlOiBNYXBwZXIgPSBpZGVudGl0eTtcbmV4cG9ydCBjb25zdCBib29sZWFuVG9Sb3NUZW1wbGF0ZTogTWFwcGVyID0gaWRlbnRpdHk7XG5leHBvcnQgY29uc3Qgb2JqZWN0VG9Sb3NUZW1wbGF0ZTogTWFwcGVyID0gaWRlbnRpdHk7XG5leHBvcnQgY29uc3QgbnVtYmVyVG9Sb3NUZW1wbGF0ZTogTWFwcGVyID0gaWRlbnRpdHk7XG5cbi8qKlxuICogVGhlIGRhdGUgbmVlZHMgdG8gYmUgZm9ybWF0dGVkIGFzIGFuIElTTyBkYXRlIGluIFVUQ1xuICpcbiAqIFNvbWUgdXNhZ2Ugc2l0ZXMgcmVxdWlyZSBhIGRhdGUsIHNvbWUgcmVxdWlyZSBhIHRpbWVzdGFtcC4gV2UnbGxcbiAqIGFsd2F5cyBvdXRwdXQgYSB0aW1lc3RhbXAgYW5kIGhvcGUgdGhlIHBhcnNlciBvbiB0aGUgb3RoZXIgZW5kXG4gKiBpcyBzbWFydCBlbm91Z2ggdG8gaWdub3JlIHRoZSB0aW1lIHBhcnQuLi4gKD8pXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkYXRlVG9Sb3NUZW1wbGF0ZSh4PzogRGF0ZSk6IGFueSB7XG4gIGlmICgheCkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXG4gIHJldHVybiBgJHt4LmdldFVUQ0Z1bGxZZWFyKCl9LSR7cGFkKHguZ2V0VVRDTW9udGgoKSArIDEpfS0ke3BhZChcbiAgICB4LmdldFVUQ0RhdGUoKVxuICApfVQke3BhZCh4LmdldFVUQ0hvdXJzKCkpfToke3BhZCh4LmdldFVUQ01pbnV0ZXMoKSl9OiR7cGFkKFxuICAgIHguZ2V0VVRDU2Vjb25kcygpXG4gICl9YDtcbn1cblxuLyoqXG4gKiBQYWQgYSBudW1iZXIgdG8gMiBkZWNpbWFsIHBsYWNlc1xuICovXG5mdW5jdGlvbiBwYWQoeDogbnVtYmVyKSB7XG4gIGlmICh4IDwgMTApIHtcbiAgICByZXR1cm4gXCIwXCIgKyB4LnRvU3RyaW5nKCk7XG4gIH1cbiAgcmV0dXJuIHgudG9TdHJpbmcoKTtcbn1cblxuLyoqXG4gKiBUdXJuIGEgdGFnIG9iamVjdCBpbnRvIHRoZSBwcm9wZXIgUk9TIHJlcHJlc2VudGF0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByb3NUYWdUb1Jvc1RlbXBsYXRlKHg6IGFueSk6IGFueSB7XG4gIHJldHVybiB7XG4gICAgS2V5OiB4LmtleSxcbiAgICBWYWx1ZTogeC52YWx1ZSxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxpc3RNYXBwZXIoZWxlbWVudE1hcHBlcjogTWFwcGVyKTogTWFwcGVyIHtcbiAgcmV0dXJuICh4OiBhbnkpID0+IHtcbiAgICBpZiAoIWNhbkluc3BlY3QoeCkpIHtcbiAgICAgIHJldHVybiB4O1xuICAgIH1cbiAgICByZXR1cm4geC5tYXAoZWxlbWVudE1hcHBlcik7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNoTWFwcGVyKGVsZW1lbnRNYXBwZXI6IE1hcHBlcik6IE1hcHBlciB7XG4gIHJldHVybiAoeDogYW55KSA9PiB7XG4gICAgaWYgKCFjYW5JbnNwZWN0KHgpKSB7XG4gICAgICByZXR1cm4geDtcbiAgICB9XG5cbiAgICBjb25zdCByZXQ6IGFueSA9IHt9O1xuXG4gICAgT2JqZWN0LmtleXMoeCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICByZXRba2V5XSA9IGVsZW1lbnRNYXBwZXIoeFtrZXldKTtcbiAgICB9KTtcblxuICAgIHJldHVybiByZXQ7XG4gIH07XG59XG5cbi8qKlxuICogUmV0dXJuIGEgdW5pb24gbWFwcGVyXG4gKlxuICogVGFrZXMgYSBsaXN0IG9mIHZhbGlkYXRvcnMgYW5kIGEgbGlzdCBvZiBtYXBwZXJzLCB3aGljaCBzaG91bGQgY29ycmVzcG9uZCBwYWlyd2lzZS5cbiAqXG4gKiBUaGUgbWFwcGVyIG9mIHRoZSBmaXJzdCBzdWNjZXNzZnVsIHZhbGlkYXRvciB3aWxsIGJlIGNhbGxlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVuaW9uTWFwcGVyKFxuICB2YWxpZGF0b3JzOiBWYWxpZGF0b3JbXSxcbiAgbWFwcGVyczogTWFwcGVyW11cbik6IE1hcHBlciB7XG4gIGlmICh2YWxpZGF0b3JzLmxlbmd0aCAhPT0gbWFwcGVycy5sZW5ndGgpIHtcbiAgICB0aHJvdyBFcnJvcihcbiAgICAgIFwiTm90IHRoZSBzYW1lIGFtb3VudCBvZiB2YWxpZGF0b3JzIGFuZCBtYXBwZXJzIHBhc3NlZCB0byB1bmlvbk1hcHBlcigpXCJcbiAgICApO1xuICB9XG5cbiAgcmV0dXJuICh4OiBhbnkpID0+IHtcbiAgICBpZiAoIWNhbkluc3BlY3QoeCkpIHtcbiAgICAgIHJldHVybiB4O1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsaWRhdG9ycy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHZhbGlkYXRvcnNbaV0oeCkuaXNTdWNjZXNzKSB7XG4gICAgICAgIHJldHVybiBtYXBwZXJzW2ldKHgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFNob3VsZCBub3QgYmUgcG9zc2libGUgYmVjYXVzZSB0aGUgdW5pb24gbXVzdCBoYXZlIHBhc3NlZCB2YWxpZGF0aW9uIGJlZm9yZSB0aGlzIGZ1bmN0aW9uXG4gICAgLy8gd2lsbCBiZSBjYWxsZWQsIGJ1dCBjYXRjaCBpdCBhbnl3YXkuXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk5vIHZhbGlkYXRvcnMgbWF0Y2hlZCBpbiB0aGUgdW5pb24oKVwiKTtcbiAgfTtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gVkFMSURBVE9SU1xuLy9cbi8vIFRoZXNlIGFyZSB1c2VkIHdoaWxlIGNoZWNraW5nIHRoYXQgc3VwcGxpZWQgcHJvcGVydHkgYmFncyBtYXRjaCB0aGUgZXhwZWN0ZWQgc2NoZW1hXG4vL1xuLy8gV2UgaGF2ZSBhIGNvdXBsZSBvZiBkYXRhdHlwZXMgdGhhdCBtb2RlbCB2YWxpZGF0aW9uIGVycm9ycyBhbmQgY29sbGVjdGlvbnMgb2YgdmFsaWRhdGlvblxuLy8gZXJyb3JzICh0b2dldGhlciBmb3JtaW5nIGEgdHJlZSBvZiBlcnJvcnMgc28gdGhhdCB3ZSBjYW4gdHJhY2UgdmFsaWRhdGlvbiBlcnJvcnMgdGhyb3VnaFxuLy8gYW4gb2JqZWN0IGdyYXBoKSwgYW5kIHZhbGlkYXRvcnMuXG4vL1xuLy8gVmFsaWRhdG9ycyBhcmUgc2ltcGx5IGZ1bmN0aW9ucyB0aGF0IHRha2UgYSB2YWx1ZSBhbmQgcmV0dXJuIGEgdmFsaWRhdGlvbiByZXN1bHRzLiBUaGVuXG4vLyB3ZSBoYXZlIHNvbWUgY29tYmluYXRvcnMgdG8gdHVybiBwcmltaXRpdmUgdmFsaWRhdG9ycyBpbnRvIG1vcmUgY29tcGxleCB2YWxpZGF0b3JzLlxuLy9cblxuLyoqXG4gKiBSZXByZXNlbnRhdGlvbiBvZiB2YWxpZGF0aW9uIHJlc3VsdHNcbiAqXG4gKiBNb2RlbHMgYSB0cmVlIG9mIHZhbGlkYXRpb24gZXJyb3JzIHNvIHRoYXQgd2UgaGF2ZSBhcyBtdWNoIGluZm9ybWF0aW9uIGFzIHBvc3NpYmxlXG4gKiBhYm91dCB0aGUgZmFpbHVyZSB0aGF0IG9jY3VycmVkLlxuICovXG5leHBvcnQgY2xhc3MgVmFsaWRhdGlvblJlc3VsdCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHJlYWRvbmx5IGVycm9yTWVzc2FnZTogc3RyaW5nID0gXCJcIixcbiAgICByZWFkb25seSByZXN1bHRzOiBWYWxpZGF0aW9uUmVzdWx0cyA9IG5ldyBWYWxpZGF0aW9uUmVzdWx0cygpXG4gICkge31cblxuICBwdWJsaWMgZ2V0IGlzU3VjY2VzcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIXRoaXMuZXJyb3JNZXNzYWdlICYmIHRoaXMucmVzdWx0cy5pc1N1Y2Nlc3M7XG4gIH1cblxuICAvKipcbiAgICogVHVybiBhIGZhaWxlZCB2YWxpZGF0aW9uIGludG8gYW4gZXhjZXB0aW9uXG4gICAqL1xuICBwdWJsaWMgYXNzZXJ0U3VjY2VzcygpIHtcbiAgICBpZiAoIXRoaXMuaXNTdWNjZXNzKSB7XG4gICAgICBsZXQgbWVzc2FnZSA9IHRoaXMuZXJyb3JUcmVlKCk7XG4gICAgICAvLyBUaGUgZmlyc3QgbGV0dGVyIHdpbGwgYmUgbG93ZXJjYXNlLCBzbyB1cHBlcmNhc2UgaXQgZm9yIGEgbmljZXIgZXJyb3IgbWVzc2FnZVxuICAgICAgbWVzc2FnZSA9IG1lc3NhZ2Uuc3Vic3RyKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyBtZXNzYWdlLnN1YnN0cigxKTtcbiAgICAgIHRocm93IG5ldyBSb3NTeW50aGVzaXNFcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGEgc3RyaW5nIHJlbmRlcmluZyBvZiB0aGUgdHJlZSBvZiB2YWxpZGF0aW9uIGZhaWx1cmVzXG4gICAqL1xuICBwdWJsaWMgZXJyb3JUcmVlKCk6IHN0cmluZyB7XG4gICAgY29uc3QgY2hpbGRNZXNzYWdlcyA9IHRoaXMucmVzdWx0cy5lcnJvclRyZWVMaXN0KCk7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuZXJyb3JNZXNzYWdlICtcbiAgICAgIChjaGlsZE1lc3NhZ2VzLmxlbmd0aFxuICAgICAgICA/IGBcXG4gICR7Y2hpbGRNZXNzYWdlcy5yZXBsYWNlKC9cXG4vZywgXCJcXG4gIFwiKX1gXG4gICAgICAgIDogXCJcIilcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFdyYXAgdGhpcyByZXN1bHQgd2l0aCBhbiBlcnJvciBtZXNzYWdlLCBpZiBpdCBjb25jZXJucyBhbiBlcnJvclxuICAgKi9cbiAgcHVibGljIHByZWZpeChtZXNzYWdlOiBzdHJpbmcpOiBWYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAodGhpcy5pc1N1Y2Nlc3MpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IFZhbGlkYXRpb25SZXN1bHQoXG4gICAgICBgJHttZXNzYWdlfTogJHt0aGlzLmVycm9yTWVzc2FnZX1gLFxuICAgICAgdGhpcy5yZXN1bHRzXG4gICAgKTtcbiAgfVxufVxuXG4vKipcbiAqIEEgY29sbGVjdGlvbiBvZiB2YWxpZGF0aW9uIHJlc3VsdHNcbiAqL1xuZXhwb3J0IGNsYXNzIFZhbGlkYXRpb25SZXN1bHRzIHtcbiAgY29uc3RydWN0b3IocHVibGljIHJlc3VsdHM6IFZhbGlkYXRpb25SZXN1bHRbXSA9IFtdKSB7fVxuXG4gIHB1YmxpYyBjb2xsZWN0KHJlc3VsdDogVmFsaWRhdGlvblJlc3VsdCkge1xuICAgIC8vIE9ubHkgY29sbGVjdCBmYWlsdXJlc1xuICAgIGlmICghcmVzdWx0LmlzU3VjY2Vzcykge1xuICAgICAgdGhpcy5yZXN1bHRzLnB1c2gocmVzdWx0KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlzU3VjY2VzcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5yZXN1bHRzLmV2ZXJ5KCh4KSA9PiB4LmlzU3VjY2Vzcyk7XG4gIH1cblxuICBwdWJsaWMgZXJyb3JUcmVlTGlzdCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnJlc3VsdHMubWFwKChjaGlsZCkgPT4gY2hpbGQuZXJyb3JUcmVlKCkpLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICAvKipcbiAgICogV3JhcCB1cCBhbGwgdmFsaWRhdGlvbiByZXN1bHRzIGludG8gYSBzaW5nbGUgdHJlZSBub2RlXG4gICAqXG4gICAqIElmIHRoZXJlIGFyZSBmYWlsdXJlcyBpbiB0aGUgY29sbGVjdGlvbiwgYWRkIGEgbWVzc2FnZSwgb3RoZXJ3aXNlXG4gICAqIHJldHVybiBhIHN1Y2Nlc3MuXG4gICAqL1xuICBwdWJsaWMgd3JhcChtZXNzYWdlOiBzdHJpbmcpOiBWYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAodGhpcy5pc1N1Y2Nlc3MpIHtcbiAgICAgIHJldHVybiBWQUxJREFUSU9OX1NVQ0NFU1M7XG4gICAgfVxuICAgIHJldHVybiBuZXcgVmFsaWRhdGlvblJlc3VsdChtZXNzYWdlLCB0aGlzKTtcbiAgfVxufVxuXG4vLyBTaW5nbGV0b24gb2JqZWN0IHRvIHNhdmUgb24gYWxsb2NhdGlvbnNcbmV4cG9ydCBjb25zdCBWQUxJREFUSU9OX1NVQ0NFU1MgPSBuZXcgVmFsaWRhdGlvblJlc3VsdCgpO1xuXG5leHBvcnQgdHlwZSBWYWxpZGF0b3IgPSAoeDogYW55KSA9PiBWYWxpZGF0aW9uUmVzdWx0O1xuXG4vKipcbiAqIFJldHVybiB3aGV0aGVyIHRoaXMgb2JqZWN0IGNhbiBiZSB2YWxpZGF0ZWQgYXQgYWxsXG4gKlxuICogVHJ1ZSB1bmxlc3MgaXQncyB1bmRlZmluZWQgb3IgYSBST1MgaW50cmluc2ljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjYW5JbnNwZWN0KHg6IGFueSkge1xuICAvLyBOb3RlOiB1c2luZyB3ZWFrIGVxdWFsaXR5IG9uIHB1cnBvc2UsIHdlIGFsc28gd2FudCB0byBjYXRjaCB1bmRlZmluZWRcbiAgcmV0dXJuIHggIT0gbnVsbCAmJiAhaXNSb3NJbnRyaW5zaWMoeCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZUxlbmd0aChwcm9wOiB7XG4gIG1pbj86IG51bWJlcjtcbiAgbWF4PzogbnVtYmVyO1xuICBkYXRhOiBudW1iZXI7XG59KTogVmFsaWRhdGlvblJlc3VsdCB7XG4gIGlmIChwcm9wLm1pbiAmJiBwcm9wLmRhdGEgPCBwcm9wLm1pbikge1xuICAgIHJldHVybiBuZXcgVmFsaWRhdGlvblJlc3VsdChcbiAgICAgIGAke0pTT04uc3RyaW5naWZ5KHByb3AuZGF0YSl9IGlzIGxlc3MgdGhhbiBtaW4gdmFsdWUoJHtwcm9wLm1pbn0pYFxuICAgICk7XG4gIH1cblxuICBpZiAocHJvcC5tYXggJiYgcHJvcC5kYXRhID4gcHJvcC5tYXgpIHtcbiAgICByZXR1cm4gbmV3IFZhbGlkYXRpb25SZXN1bHQoXG4gICAgICBgJHtKU09OLnN0cmluZ2lmeShwcm9wLmRhdGEpfSBpcyBsYXJnZXIgdGhhbiBtYXggdmFsdWUoJHtwcm9wLm1heH0pYFxuICAgICk7XG4gIH1cbiAgcmV0dXJuIFZBTElEQVRJT05fU1VDQ0VTUztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlUmFuZ2UocHJvcDoge1xuICBtaW4/OiBudW1iZXI7XG4gIG1heD86IG51bWJlcjtcbiAgZGF0YTogbnVtYmVyO1xufSk6IFZhbGlkYXRpb25SZXN1bHQge1xuICBpZiAocHJvcC5taW4gJiYgcHJvcC5kYXRhIDwgcHJvcC5taW4pIHtcbiAgICByZXR1cm4gbmV3IFZhbGlkYXRpb25SZXN1bHQoXG4gICAgICBgJHtKU09OLnN0cmluZ2lmeShwcm9wLmRhdGEpfSBpcyBsZXNzIHRoYW4gbWluIHZhbHVlKCR7cHJvcC5taW59KWBcbiAgICApO1xuICB9XG5cbiAgaWYgKHByb3AubWF4ICYmIHByb3AuZGF0YSA+IHByb3AubWF4KSB7XG4gICAgcmV0dXJuIG5ldyBWYWxpZGF0aW9uUmVzdWx0KFxuICAgICAgYCR7SlNPTi5zdHJpbmdpZnkocHJvcC5kYXRhKX0gaXMgbGFyZ2VyIHRoYW4gbWluIHZhbHVlKCR7cHJvcC5taW59KWBcbiAgICApO1xuICB9XG4gIHJldHVybiBWQUxJREFUSU9OX1NVQ0NFU1M7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZUFsbG93ZWRQYXR0ZXJuKHByb3A6IHtcbiAgcmVnOiBzdHJpbmc7XG4gIGRhdGE6IHN0cmluZztcbn0pOiBWYWxpZGF0aW9uUmVzdWx0IHtcbiAgY29uc3QgcmVnRXhwID0gbmV3IFJlZ0V4cChwcm9wLnJlZyk7XG4gIGlmIChyZWdFeHAudGVzdChwcm9wLmRhdGEpKSB7XG4gICAgcmV0dXJuIFZBTElEQVRJT05fU1VDQ0VTUztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbmV3IFZhbGlkYXRpb25SZXN1bHQoXG4gICAgICBgVGhlIHN0cmluZyAke0pTT04uc3RyaW5naWZ5KFxuICAgICAgICBwcm9wLmRhdGFcbiAgICAgICl9IGRvZXMgbm90IG1hdGNoIHRoZSByZWd1bGFyIGV4cHJlc3Npb24gXCIke3Byb3AucmVnfVwiYFxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlQWxsb3dlZFZhbHVlcyhwcm9wOiB7XG4gIGFsbG93ZWRWYWx1ZXM6IFthbnldO1xuICBkYXRhOiBhbnk7XG59KTogVmFsaWRhdGlvblJlc3VsdCB7XG4gIGZvciAobGV0IHZhbHVlIG9mIHByb3AuYWxsb3dlZFZhbHVlcykge1xuICAgIGlmICh2YWx1ZSA9PT0gcHJvcC5kYXRhKSByZXR1cm4gVkFMSURBVElPTl9TVUNDRVNTO1xuICB9XG4gIHJldHVybiBuZXcgVmFsaWRhdGlvblJlc3VsdChcbiAgICBgJHtKU09OLnN0cmluZ2lmeShwcm9wLmRhdGEpfSBkb2Vzbid0IGV4aXN0IGluIFske3Byb3AuYWxsb3dlZFZhbHVlc31dYFxuICApO1xufVxuXG4vLyBST1MgdmFsaWRhdG9ycyBmb3IgcHJpbWl0aXZlIHR5cGVzXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVTdHJpbmcoeDogYW55KTogVmFsaWRhdGlvblJlc3VsdCB7XG4gIGlmIChjYW5JbnNwZWN0KHgpICYmIHR5cGVvZiB4ICE9PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIG5ldyBWYWxpZGF0aW9uUmVzdWx0KGAke0pTT04uc3RyaW5naWZ5KHgpfSBzaG91bGQgYmUgYSBzdHJpbmdgKTtcbiAgfVxuICByZXR1cm4gVkFMSURBVElPTl9TVUNDRVNTO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVOdW1iZXIoeDogYW55KTogVmFsaWRhdGlvblJlc3VsdCB7XG4gIGlmIChjYW5JbnNwZWN0KHgpICYmIHR5cGVvZiB4ICE9PSBcIm51bWJlclwiKSB7XG4gICAgcmV0dXJuIG5ldyBWYWxpZGF0aW9uUmVzdWx0KGAke0pTT04uc3RyaW5naWZ5KHgpfSBzaG91bGQgYmUgYSBudW1iZXJgKTtcbiAgfVxuICByZXR1cm4gVkFMSURBVElPTl9TVUNDRVNTO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVCb29sZWFuKHg6IGFueSk6IFZhbGlkYXRpb25SZXN1bHQge1xuICBpZiAoY2FuSW5zcGVjdCh4KSAmJiB0eXBlb2YgeCAhPT0gXCJib29sZWFuXCIpIHtcbiAgICByZXR1cm4gbmV3IFZhbGlkYXRpb25SZXN1bHQoYCR7SlNPTi5zdHJpbmdpZnkoeCl9IHNob3VsZCBiZSBhIGJvb2xlYW5gKTtcbiAgfVxuICByZXR1cm4gVkFMSURBVElPTl9TVUNDRVNTO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVBbnkoeDogYW55KTogVmFsaWRhdGlvblJlc3VsdCB7XG4gIC8vIGF2b2lkIHRzYyBlcnJvciAtPiAneCcgaXMgZGVjbGFyZWQgYnV0IGl0cyB2YWx1ZSBpcyBuZXZlciByZWFkXG4gIGlmIChjYW5JbnNwZWN0KHgpIHx8IHRydWUpIHtcbiAgICByZXR1cm4gVkFMSURBVElPTl9TVUNDRVNTO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZURhdGUoeDogYW55KTogVmFsaWRhdGlvblJlc3VsdCB7XG4gIGlmIChjYW5JbnNwZWN0KHgpICYmICEoeCBpbnN0YW5jZW9mIERhdGUpKSB7XG4gICAgcmV0dXJuIG5ldyBWYWxpZGF0aW9uUmVzdWx0KGAke0pTT04uc3RyaW5naWZ5KHgpfSBzaG91bGQgYmUgYSBEYXRlYCk7XG4gIH1cblxuICBpZiAoeCAhPT0gdW5kZWZpbmVkICYmIGlzTmFOKHguZ2V0VGltZSgpKSkge1xuICAgIHJldHVybiBuZXcgVmFsaWRhdGlvblJlc3VsdChcImdvdCBhbiB1bnBhcnNlYWJsZSBEYXRlXCIpO1xuICB9XG5cbiAgcmV0dXJuIFZBTElEQVRJT05fU1VDQ0VTUztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlT2JqZWN0KHg6IGFueSk6IFZhbGlkYXRpb25SZXN1bHQge1xuICBpZiAoY2FuSW5zcGVjdCh4KSAmJiB0eXBlb2YgeCAhPT0gXCJvYmplY3RcIikge1xuICAgIHJldHVybiBuZXcgVmFsaWRhdGlvblJlc3VsdChgJHtKU09OLnN0cmluZ2lmeSh4KX0gc2hvdWxkIGJlIGFuICdvYmplY3QnYCk7XG4gIH1cbiAgcmV0dXJuIFZBTElEQVRJT05fU1VDQ0VTUztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlUm9zVGFnKHg6IGFueSk6IFZhbGlkYXRpb25SZXN1bHQge1xuICBpZiAoIWNhbkluc3BlY3QoeCkpIHtcbiAgICByZXR1cm4gVkFMSURBVElPTl9TVUNDRVNTO1xuICB9XG5cbiAgaWYgKHgua2V5ID09IG51bGwgfHwgeC52YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIG5ldyBWYWxpZGF0aW9uUmVzdWx0KFxuICAgICAgYCR7SlNPTi5zdHJpbmdpZnkoeCl9IHNob3VsZCBoYXZlIGEgJ2tleScgYW5kIGEgJ3ZhbHVlJyBwcm9wZXJ0eWBcbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIFZBTElEQVRJT05fU1VDQ0VTUztcbn1cblxuLyoqXG4gKiBSZXR1cm4gYSBsaXN0IHZhbGlkYXRvciBiYXNlZCBvbiB0aGUgZ2l2ZW4gZWxlbWVudCB2YWxpZGF0b3JcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxpc3RWYWxpZGF0b3IoZWxlbWVudFZhbGlkYXRvcjogVmFsaWRhdG9yKTogVmFsaWRhdG9yIHtcbiAgcmV0dXJuICh4OiBhbnkpID0+IHtcbiAgICBpZiAoIWNhbkluc3BlY3QoeCkpIHtcbiAgICAgIHJldHVybiBWQUxJREFUSU9OX1NVQ0NFU1M7XG4gICAgfVxuXG4gICAgaWYgKCF4LmZvckVhY2gpIHtcbiAgICAgIHJldHVybiBuZXcgVmFsaWRhdGlvblJlc3VsdChgJHtKU09OLnN0cmluZ2lmeSh4KX0gc2hvdWxkIGJlIGEgbGlzdGApO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgeC5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgZWxlbWVudCA9IHhbaV07XG4gICAgICBjb25zdCByZXN1bHQgPSBlbGVtZW50VmFsaWRhdG9yKGVsZW1lbnQpO1xuICAgICAgaWYgKCFyZXN1bHQuaXNTdWNjZXNzKSB7XG4gICAgICAgIHJldHVybiByZXN1bHQucHJlZml4KGBlbGVtZW50ICR7aX1gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gVkFMSURBVElPTl9TVUNDRVNTO1xuICB9O1xufVxuXG4vKipcbiAqIFJldHVybiBhIGhhc2ggdmFsaWRhdG9yIGJhc2VkIG9uIHRoZSBnaXZlbiBlbGVtZW50IHZhbGlkYXRvclxuICovXG5leHBvcnQgZnVuY3Rpb24gaGFzaFZhbGlkYXRvcihlbGVtZW50VmFsaWRhdG9yOiBWYWxpZGF0b3IpOiBWYWxpZGF0b3Ige1xuICByZXR1cm4gKHg6IGFueSkgPT4ge1xuICAgIGlmICghY2FuSW5zcGVjdCh4KSkge1xuICAgICAgcmV0dXJuIFZBTElEQVRJT05fU1VDQ0VTUztcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyh4KSkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gZWxlbWVudFZhbGlkYXRvcih4W2tleV0pO1xuICAgICAgaWYgKCFyZXN1bHQuaXNTdWNjZXNzKSB7XG4gICAgICAgIHJldHVybiByZXN1bHQucHJlZml4KGBlbGVtZW50ICcke2tleX0nYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFZBTElEQVRJT05fU1VDQ0VTUztcbiAgfTtcbn1cblxuLyoqXG4gKiBEZWNvcmF0ZSBhIHZhbGlkYXRvciB3aXRoIGEgbWVzc2FnZSBjbGFyaWZ5aW5nIHRoZSBwcm9wZXJ0eSB0aGUgZmFpbHVyZSBpcyBmb3IuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0eVZhbGlkYXRvcihcbiAgcHJvcE5hbWU6IHN0cmluZyxcbiAgdmFsaWRhdG9yOiBWYWxpZGF0b3Jcbik6IFZhbGlkYXRvciB7XG4gIHJldHVybiAoeDogYW55KSA9PiB7XG4gICAgcmV0dXJuIHZhbGlkYXRvcih4KS5wcmVmaXgocHJvcE5hbWUpO1xuICB9O1xufVxuXG4vKipcbiAqIFJldHVybiBhIHZhbGlkYXRvciB0aGF0IHdpbGwgZmFpbCBpZiB0aGUgcGFzc2VkIHByb3BlcnR5IGlzIG5vdCBwcmVzZW50XG4gKlxuICogRG9lcyBub3QgZGlzdGluZ3Vpc2ggYmV0d2VlbiB0aGUgcHJvcGVydHkgYWN0dWFsbHkgbm90IGJlaW5nIHByZXNlbnQsIHZzIGJlaW5nIHByZXNlbnQgYnV0ICdudWxsJ1xuICogb3IgJ3VuZGVmaW5lZCcgKGNvdXJ0ZXN5IG9mIEphdmFTY3JpcHQpLCB3aGljaCBpcyBnZW5lcmFsbHkgdGhlIGJlaGF2aW9yIHRoYXQgd2Ugd2FudC5cbiAqXG4gKiBFbXB0eSBzdHJpbmdzIGFyZSBjb25zaWRlcmVkIFwicHJlc2VudFwiLS1kb24ndCBrbm93IGlmIHRoaXMgYWdyZWVzIHdpdGggaG93IFJPUyBsb29rcyBhdCB0aGUgd29ybGQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXF1aXJlZFZhbGlkYXRvcih4OiBhbnkpIHtcbiAgaWYgKHggPT0gbnVsbCkge1xuICAgIHJldHVybiBuZXcgVmFsaWRhdGlvblJlc3VsdChcInJlcXVpcmVkIGJ1dCBtaXNzaW5nXCIpO1xuICB9XG4gIHJldHVybiBWQUxJREFUSU9OX1NVQ0NFU1M7XG59XG5cbi8qKlxuICogUmVxdWlyZSBhIHByb3BlcnR5IGZyb20gYSBwcm9wZXJ0eSBiYWcuXG4gKlxuICogQHBhcmFtIHByb3BzICB0aGUgcHJvcGVydHkgYmFnIGZyb20gd2hpY2ggYSBwcm9wZXJ0eSBpcyByZXF1aXJlZC5cbiAqIEBwYXJhbSBuYW1lICAgdGhlIG5hbWUgb2YgdGhlIHJlcXVpcmVkIHByb3BlcnR5LlxuICogQHBhcmFtIHR5cGVOYW1lIHRoZSBuYW1lIG9mIHRoZSBjb25zdHJ1Y3QgdHlwZSB0aGF0IHJlcXVpcmVzIHRoZSBwcm9wZXJ0eVxuICpcbiAqIEByZXR1cm5zIHRoZSB2YWx1ZSBvZiBgYHByb3BzW25hbWVdYGBcbiAqXG4gKiBAdGhyb3dzIGlmIHRoZSBwcm9wZXJ0eSBgYG5hbWVgYCBpcyBub3QgcHJlc2VudCBpbiBgYHByb3BzYGAuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXF1aXJlUHJvcGVydHkoXG4gIHByb3BzOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSxcbiAgbmFtZTogc3RyaW5nLFxuICBjb250ZXh0OiBDb25zdHJ1Y3Rcbik6IGFueSB7XG4gIGNvbnN0IHZhbHVlID0gcHJvcHNbbmFtZV07XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgYCR7Y29udGV4dC50b1N0cmluZygpfSBpcyBtaXNzaW5nIHJlcXVpcmVkIHByb3BlcnR5OiAke25hbWV9YFxuICAgICk7XG4gIH1cbiAgLy8gUG9zc2libHkgYWRkIHR5cGUtY2hlY2tpbmcgaGVyZS4uLlxuICByZXR1cm4gdmFsdWU7XG59XG5cbi8qKlxuICogVmFsaWRhdGVzIGlmIGFueSBvZiB0aGUgZ2l2ZW4gdmFsaWRhdG9ycyBtYXRjaGVzXG4gKlxuICogV2UgYWRkIGVpdGhlci9vciB3b3JkcyB0byB0aGUgZnJvbnQgb2YgdGhlIGVycm9yIG1lc2FnZXMgc28gdGhhdCB0aGV5IHJlYWRcbiAqIG1vcmUgbmljZWx5LiBFeGFtcGxlOlxuICpcbiAqICAgUHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgJ0Z1bmN0aW9uUHJvcHMnXG4gKiAgICAgY29kZVVyaTogbm90IG9uZSBvZiB0aGUgcG9zc2libGUgdHlwZXNcbiAqICAgICAgIGVpdGhlcjogcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgJ1MzTG9jYXRpb25Qcm9wZXJ0eSdcbiAqICAgICAgICAgYnVja2V0OiByZXF1aXJlZCBidXQgbWlzc2luZ1xuICogICAgICAgICBrZXk6IHJlcXVpcmVkIGJ1dCBtaXNzaW5nXG4gKiAgICAgICAgIHZlcnNpb246IHJlcXVpcmVkIGJ1dCBtaXNzaW5nXG4gKiAgICAgICBvcjogJzMnIHNob3VsZCBiZSBhICdzdHJpbmcnXG4gKlxuICovXG5leHBvcnQgZnVuY3Rpb24gdW5pb25WYWxpZGF0b3IoLi4udmFsaWRhdG9yczogVmFsaWRhdG9yW10pOiBWYWxpZGF0b3Ige1xuICByZXR1cm4gKHg6IGFueSkgPT4ge1xuICAgIGNvbnN0IHJlc3VsdHMgPSBuZXcgVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBsZXQgZWl0aGVyT3IgPSBcImVpdGhlclwiO1xuXG4gICAgZm9yIChjb25zdCB2YWxpZGF0b3Igb2YgdmFsaWRhdG9ycykge1xuICAgICAgY29uc3QgcmVzdWx0ID0gdmFsaWRhdG9yKHgpO1xuICAgICAgaWYgKHJlc3VsdC5pc1N1Y2Nlc3MpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH1cbiAgICAgIHJlc3VsdHMuY29sbGVjdChyZXN1bHQucHJlZml4KGVpdGhlck9yKSk7XG4gICAgICBlaXRoZXJPciA9IFwib3JcIjtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHMud3JhcChcIm5vdCBvbmUgb2YgdGhlIHBvc3NpYmxlIHR5cGVzXCIpO1xuICB9O1xufVxuXG4vKipcbiAqIFJldHVybiB3aGV0aGVyIHRoZSBpbmRpY2F0ZWQgdmFsdWUgcmVwcmVzZW50cyBhIFJPUyBpbnRyaW5zaWMuXG4gKlxuICogUk9TIGludHJpbnNpY3MgYXJlIG1vZGVsZWQgYXMgb2JqZWN0cyB3aXRoIGEgc2luZ2xlIGtleSwgd2hpY2hcbiAqIGxvb2sgbGlrZTogeyBcIkZuOjpHZXRBdHRcIjogWy4uLl0gfSBvciBzaW1pbGFyLlxuICovXG5mdW5jdGlvbiBpc1Jvc0ludHJpbnNpYyh4OiBhbnkpIHtcbiAgaWYgKCEodHlwZW9mIHggPT09IFwib2JqZWN0XCIpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh4KTtcbiAgaWYgKGtleXMubGVuZ3RoICE9PSAxKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGtleXNbMF0gPT09IFwiUmVmXCIgfHwga2V5c1swXS5zdWJzdHIoMCwgNCkgPT09IFwiRm46OlwiO1xufVxuXG4vLyBDYW5ub3QgYmUgcHVibGljIGJlY2F1c2UgSlNJSSBnZXRzIGNvbmZ1c2VkIGFib3V0IGVzNS5kLnRzXG5jbGFzcyBSb3NTeW50aGVzaXNFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgcHVibGljIHJlYWRvbmx5IHR5cGUgPSBcIlJvc1N5bnRoZXNpc0Vycm9yXCI7XG59XG4iXX0=