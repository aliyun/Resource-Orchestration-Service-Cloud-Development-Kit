"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fn = void 0;
const template_lang_1 = require("./private/template-lang");
const intrinsic_1 = require("./private/intrinsic");
const reference_1 = require("./reference");
const token_1 = require("./token");
const stack_trace_1 = require("./stack-trace");
// tslint:disable:max-line-length
/**
 * Resource Orchestration Service intrinsic functions.
 * https://help.aliyun.com/document_detail/28852.html
 */
class Fn {
    static str(value) {
        if (!token_1.Token.isUnresolved(value)) {
            return value.toString();
        }
        return new FnStr(value).toString();
    }
    static base64Decode(data) {
        return new FnBase64Decode(data).toString();
    }
    static replace(replaceData, content) {
        return new FnReplace([replaceData, content]).toString();
    }
    static listMerge(valueList) {
        return new FnListMerge(valueList).toString();
    }
    static getJsonValue(value) {
        return new FnGetJsonValue(value).toString();
    }
    static avg(ndigits, values) {
        return new FnAvg(ndigits, values).toString();
    }
    static add(values) {
        return new FnAdd(values).toString();
    }
    static calculate(values, ndigits, para) {
        return new FnCalculate(values, ndigits, para).toString();
    }
    static max(values) {
        return new FnMax(values).toString();
    }
    static min(values) {
        return new FnMin(values).toString();
    }
    static jq(method, script, inputString) {
        return new FnJq(method, script, inputString).toString();
    }
    static mergeMapToList(mapList) {
        return new FnMergeMapToList(mapList).toString();
    }
    static selectMapList(key, mapList) {
        return new FnSelectMapList(key, mapList).toString();
    }
    /**
     * The ``Ref`` intrinsic function returns the value of the specified parameter or resource.
     * Note that it doesn't validate the logicalName, it mainly serves paremeter/resource reference defined in a ``RosInclude`` template.
     * @param logicalName The logical name of a parameter/resource for which you want to retrieve its value.
     */
    static ref(logicalName) {
        return new FnRef(logicalName).toString();
    }
    /** @internal */
    static _ref(logicalId) {
        return new FnRef(logicalId);
    }
    /**
     * The ``Fn::GetAtt`` intrinsic function returns the value of an attribute
     * from a resource in the template.
     * @param logicalNameOfResource The logical name (also called logical ID) of
     * the resource that contains the attribute that you want.
     * @param attributeName The name of the resource-specific attribute whose
     * value you want. See the resource's reference page for details about the
     * attributes available for that resource type.
     * @returns an IResolvable object
     */
    static getAtt(logicalNameOfResource, attributeName) {
        return new FnGetAtt(logicalNameOfResource, attributeName);
    }
    /**
     * The intrinsic function ``Fn::Join`` appends a set of values into a single
     * value, separated by the specified delimiter. If a delimiter is the empty
     * string, the set of values are concatenated with no delimiter.
     * @param delimiter The value you want to occur between fragments. The
     * delimiter will occur between fragments only. It will not terminate the
     * final value.
     * @param listOfValues The list of values you want combined.
     * @returns a token represented as a string
     */
    static join(delimiter, listOfValues) {
        if (listOfValues.length === 0) {
            throw new Error("FnJoin requires at least one value to be provided");
        }
        return new FnJoin(delimiter, listOfValues).toString();
    }
    /**
     * To split a string into a list of string values so that you can select an element from the
     * resulting string list, use the ``Fn::Split`` intrinsic function. Specify the location of splits
     * with a delimiter, such as , (a comma). After you split a string, use the ``Fn::Select`` function
     * to pick a specific element.
     * @param delimiter A string value that determines where the source string is divided.
     * @param source The string value that you want to split.
     * @returns a token represented as a string array
     */
    static split(delimiter, source) {
        // short-circut if source is not a token
        if (!token_1.Token.isUnresolved(source)) {
            return source.split(delimiter);
        }
        return token_1.Token.asList(new FnSplit(delimiter, source));
    }
    /**
     * The intrinsic function ``Fn::Select`` returns a single object from a list of objects by index.
     * @param index The index of the object to retrieve. This must be a value from zero to N-1, where N represents the number of elements in the array.
     * @param array The list of objects to select from. This list must not be null, nor can it have null entries.
     * @returns a token represented as a string
     */
    static select(index, array) {
        return new FnSelect(index, array).toString();
    }
    /**
     * The intrinsic function ``Fn::Sub`` substitutes variables in an input string
     * with values that you specify. In your templates, you can use this function
     * to construct commands or outputs that include values that aren't available
     * until you create or update a stack.
     * @param body A string with variables that Ros Template substitutes
     * with their associated values at runtime. Write variables as ${MyVarName}.
     * Variables can be template parameter names, resource logical IDs, resource
     * attributes, or a variable in a key-value map. If you specify only template
     * parameter names, resource logical IDs, and resource attributes, don't
     * specify a key-value map.
     * @param variables The name of a variable that you included in the String
     * parameter. The value that Ros Template substitutes for the associated
     * variable name at runtime.
     * @returns a token represented as a string
     */
    static sub(body, variables) {
        return new FnSub(body, variables).toString();
    }
    /**
     * The intrinsic function ``Fn::Base64`` returns the Base64 representation of
     * the input string.
     * @param data The string value you want to convert to Base64.
     * @returns a token represented as a string
     */
    static base64Encode(data) {
        return new FnBase64Encode(data).toString();
    }
    /**
     * The intrinsic function ``Fn::GetAZs`` returns an array that lists
     * Availability Zones for a specified region. Because customers have access to
     * different Availability Zones, the intrinsic function ``Fn::GetAZs`` enables
     * template authors to write templates that adapt to the calling user's
     * access. That way you don't have to hard-code a full list of Availability
     * Zones for a specified region.
     * @param region The name of the region for which you want to get the
     * Availability Zones. You can use the ROS::Region pseudo parameter to specify
     * the region in which the stack is created. Specifying an empty string is
     * equivalent to specifying ROS::Region.
     * @returns a token represented as a string array
     */
    static getAzs(region) {
        return token_1.Token.asList(new FnGetAZs(region));
    }
    /**
     * The intrinsic function ``Fn::GetStackOutput`` returns the value of an output
     * exported by another stack.
     * @returns a token represented as a string
     */
    static getStackOutput(stackID, outputKey, stackRegion) {
        return new FnGetStackOutput(stackID, outputKey, stackRegion).toString();
    }
    /**
     * The intrinsic function ``Fn::FindInMap`` returns the value corresponding to
     * keys in a two-level map that is declared in the Mappings section.
     * @returns a token represented as a string
     */
    static findInMap(mapName, topLevelKey, secondLevelKey) {
        return new FnFindInMap(mapName, topLevelKey, secondLevelKey).toString();
    }
    /**
     * Returns true if all the specified conditions evaluate to true, or returns
     * false if any one of the conditions evaluates to false. ``Fn::And`` acts as
     * an AND operator. The minimum number of conditions that you can include is
     * 2, and the maximum is 10.
     * @param conditions conditions to AND
     * @returns an FnCondition token
     */
    static conditionAnd(...conditions) {
        return new FnAnd(...conditions);
    }
    /**
     * Compares if two values are equal. Returns true if the two values are equal
     * or false if they aren't.
     * @param lhs A value of any type that you want to compare.
     * @param rhs A value of any type that you want to compare.
     * @returns an FnCondition token
     */
    static conditionEquals(lhs, rhs) {
        return new FnEquals(lhs, rhs);
    }
    /**
     * Returns one value if the specified condition evaluates to true and another
     * value if the specified condition evaluates to false.
     * @param conditionId A reference to a condition in the Conditions section. Use
     * the condition's name to reference it.
     * @param valueIfTrue A value to be returned if the specified condition
     * evaluates to true.
     * @param valueIfFalse A value to be returned if the specified condition
     * evaluates to false.
     * @returns an FnCondition token
     */
    static conditionIf(conditionId, valueIfTrue, valueIfFalse) {
        return new FnIf(conditionId, valueIfTrue, valueIfFalse);
    }
    /**
     * Returns true for a condition that evaluates to false or returns false for a
     * condition that evaluates to true. ``Fn::Not`` acts as a NOT operator.
     * @param condition A condition such as ``Fn::Equals`` that evaluates to true
     * or false.
     * @returns an FnCondition token
     */
    static conditionNot(condition) {
        return new FnNot(condition);
    }
    /**
     * Returns true if any one of the specified conditions evaluate to true, or
     * returns false if all of the conditions evaluates to false. ``Fn::Or`` acts
     * as an OR operator. The minimum number of conditions that you can include is
     * 2, and the maximum is 10.
     * @param conditions conditions that evaluates to true or false.
     * @returns an FnCondition token
     */
    static conditionOr(...conditions) {
        return new FnOr(...conditions);
    }
    /**
     * Returns true if a specified string matches all values in a list.
     * @param listOfStrings A list of strings, such as "A", "B", "C".
     * @param value A string, such as "A", that you want to compare against a list
     * of strings.
     * @returns an FnCondition token
     */
    static conditionEachMemberEquals(listOfStrings, value) {
        return new FnEachMemberEquals(listOfStrings, value);
    }
    constructor() { }
}
exports.Fn = Fn;
/**
 * Base class for tokens that represent ROS intrinsic functions.
 */
class FnBase extends intrinsic_1.Intrinsic {
    constructor(name, value) {
        super({ [name]: value });
    }
}
// new function
class FnStr extends FnBase {
    /**
     * Creates an ``Str`` function.
     */
    constructor(value) {
        super("Fn::Str", value);
    }
}
class FnBase64Decode extends FnBase {
    constructor(data) {
        super("Fn::Base64Decode", data);
    }
}
class FnReplace extends FnBase {
    /**
     * Creates an ``Replace`` function.
     */
    constructor(value) {
        super("Fn::Replace", value);
    }
}
class FnListMerge extends FnBase {
    /**
     * Creates an ``ListMerge`` function.
     */
    constructor(value) {
        super("Fn::ListMerge", value);
    }
}
class FnGetJsonValue extends FnBase {
    /**
     * Creates an ``GetJsonValue`` function.
     */
    constructor(value) {
        super("Fn::GetJsonValue", value);
    }
}
class FnAvg extends FnBase {
    /**
     * Creates an ``Avg`` function.
     */
    constructor(ndigits, values) {
        super("Fn::Avg", [ndigits, values]);
    }
}
class FnAdd extends FnBase {
    /**
     * Creates an ``Add`` function.
     */
    constructor(values) {
        super("Fn::Add", values);
    }
}
class FnCalculate extends FnBase {
    /**
     * Creates an ``Calculate`` function.
     */
    constructor(values, ndigits, para) {
        super("Fn::Calculate", [values, ndigits, para]);
    }
}
class FnMax extends FnBase {
    /**
     * Creates an ``Max`` function.
     */
    constructor(values) {
        super("Fn::Max", values);
    }
}
class FnMin extends FnBase {
    /**
     * Creates an ``Min`` function.
     */
    constructor(values) {
        super("Fn::Min", values);
    }
}
class FnGetStackOutput extends FnBase {
    /**
     * Creates an ``GetStackOutput`` function.
     */
    constructor(stackID, outputKey, stackRegion) {
        super("Fn::GetStackOutput", [stackID, outputKey, stackRegion]);
    }
}
class FnJq extends FnBase {
    /**
     * Creates an ``Jq`` function.
     */
    constructor(method, script, inputString) {
        super("Fn::Jq", [method, script, inputString]);
    }
}
class FnMergeMapToList extends FnBase {
    /**
     * Creates an ``FnMergeMapToList`` function.
     */
    constructor(mapList) {
        super("Fn::MergeMapToList", mapList);
    }
}
class FnSelectMapList extends FnBase {
    /**
     * Creates an ``FnMergeMapToList`` function.
     */
    constructor(key, mapList) {
        super("Fn::SelectMapList", [key, mapList]);
    }
}
/**
 * The intrinsic function ``Ref`` returns the value of the specified parameter or resource.
 * When you specify a parameter's logical name, it returns the value of the parameter.
 * When you specify a resource's logical name, it returns a value that you can typically use to refer to that resource, such as a physical ID.
 */
class FnRef extends FnBase {
    /**
     * Creates an ``Ref`` function.
     * @param logicalName The logical name of a parameter/resource for which you want to retrieve its value.
     */
    constructor(logicalName) {
        super("Ref", logicalName);
    }
}
/**
 * The intrinsic function ``Fn::FindInMap`` returns the value corresponding to keys in a two-level
 * map that is declared in the Mappings section.
 */
class FnFindInMap extends FnBase {
    /**
     * Creates an ``Fn::FindInMap`` function.
     * @param mapName The logical name of a mapping declared in the Mappings section that contains the keys and values.
     * @param topLevelKey The top-level key name. Its value is a list of key-value pairs.
     * @param secondLevelKey The second-level key name, which is set to one of the keys from the list assigned to TopLevelKey.
     */
    constructor(mapName, topLevelKey, secondLevelKey) {
        super("Fn::FindInMap", [mapName, topLevelKey, secondLevelKey]);
    }
}
/**
 * The ``Fn::GetAtt`` intrinsic function returns the value of an attribute from a resource in the template.
 */
class FnGetAtt extends FnBase {
    /**
     * Creates a ``Fn::GetAtt`` function.
     * @param logicalNameOfResource The logical name (also called logical ID) of the resource that contains the attribute that you want.
     * @param attributeName The name of the resource-specific attribute whose value you want. See the resource's reference page for details about the attributes available for that resource type.
     */
    constructor(logicalNameOfResource, attributeName) {
        super("Fn::GetAtt", [logicalNameOfResource, attributeName]);
    }
}
/**
 * The intrinsic function ``Fn::GetAZs`` returns an array that lists Availability Zones for a
 * specified region. Because customers have access to different Availability Zones, the intrinsic
 * function ``Fn::GetAZs`` enables template authors to write templates that adapt to the calling
 * user's access. That way you don't have to hard-code a full list of Availability Zones for a
 * specified region.
 */
class FnGetAZs extends FnBase {
    /**
     * Creates an ``Fn::GetAZs`` function.
     * @param region The name of the region for which you want to get the Availability Zones.
     */
    constructor(region) {
        super("Fn::GetAZs", region || "");
    }
}
/**
 * The intrinsic function ``Fn::Select`` returns a single object from a list of objects by index.
 */
class FnSelect extends FnBase {
    /**
     * Creates an ``Fn::Select`` function.
     * @param index The index of the object to retrieve. This must be a value from zero to N-1, where N represents the number of elements in the array.
     * @param array The list of objects to select from. This list must not be null, nor can it have null entries.
     */
    constructor(index, array) {
        super("Fn::Select", [index, array]);
    }
}
/**
 * To split a string into a list of string values so that you can select an element from the
 * resulting string list, use the ``Fn::Split`` intrinsic function. Specify the location of splits
 * with a delimiter, such as , (a comma). After you split a string, use the ``Fn::Select`` function
 * to pick a specific element.
 */
class FnSplit extends FnBase {
    /**
     * Create an ``Fn::Split`` function.
     * @param delimiter A string value that determines where the source string is divided.
     * @param source The string value that you want to split.
     */
    constructor(delimiter, source) {
        super("Fn::Split", [delimiter, source]);
    }
}
/**
 * The intrinsic function ``Fn::Sub`` substitutes variables in an input string with values that
 * you specify. In your templates, you can use this function to construct commands or outputs
 * that include values that aren't available until you create or update a stack.
 */
class FnSub extends FnBase {
    /**
     * Creates an ``Fn::Sub`` function.
     * @param body A string with variables that Ros Template substitutes with their
     *       associated values at runtime. Write variables as ${MyVarName}. Variables
     *       can be template parameter names, resource logical IDs, resource attributes,
     *       or a variable in a key-value map. If you specify only template parameter names,
     *       resource logical IDs, and resource attributes, don't specify a key-value map.
     * @param variables The name of a variable that you included in the String parameter.
     *          The value that Ros Template substitutes for the associated variable name at runtime.
     */
    constructor(body, variables) {
        super("Fn::Sub", variables ? [body, variables] : body);
    }
}
/**
 * The intrinsic function ``Fn::Base64`` returns the Base64 representation of the input string.
 */
class FnBase64Encode extends FnBase {
    /**
     * Creates an ``Fn::Base64`` function.
     * @param data The string value you want to convert to Base64.
     */
    constructor(data) {
        super("Fn::Base64Encode", data);
    }
}
class FnConditionBase extends intrinsic_1.Intrinsic {
    constructor(type, value) {
        super({ [type]: value });
    }
}
/**
 * Returns true if all the specified conditions evaluate to true, or returns false if any one
 *  of the conditions evaluates to false. ``Fn::And`` acts as an AND operator. The minimum number of
 * conditions that you can include is 2, and the maximum is 10.
 */
class FnAnd extends FnConditionBase {
    constructor(...condition) {
        super("Fn::And", condition);
    }
}
/**
 * Compares if two values are equal. Returns true if the two values are equal or false
 * if they aren't.
 */
class FnEquals extends FnConditionBase {
    /**
     * Creates an ``Fn::Equals`` condition function.
     * @param lhs A value of any type that you want to compare.
     * @param rhs A value of any type that you want to compare.
     */
    constructor(lhs, rhs) {
        super("Fn::Equals", [lhs, rhs]);
    }
}
/**
 * Returns one value if the specified condition evaluates to true and another value if the
 * specified condition evaluates to false.
 */
class FnIf extends FnConditionBase {
    /**
     * Creates an ``Fn::If`` condition function.
     * @param condition A reference to a condition in the Conditions section. Use the condition's name to reference it.
     * @param valueIfTrue A value to be returned if the specified condition evaluates to true.
     * @param valueIfFalse A value to be returned if the specified condition evaluates to false.
     */
    constructor(condition, valueIfTrue, valueIfFalse) {
        super("Fn::If", [condition, valueIfTrue, valueIfFalse]);
    }
}
/**
 * Returns true for a condition that evaluates to false or returns false for a condition that evaluates to true.
 * ``Fn::Not`` acts as a NOT operator.
 */
class FnNot extends FnConditionBase {
    /**
     * Creates an ``Fn::Not`` condition function.
     * @param condition A condition such as ``Fn::Equals`` that evaluates to true or false.
     */
    constructor(condition) {
        super("Fn::Not", [condition]);
    }
}
/**
 * Returns true if any one of the specified conditions evaluate to true, or returns false if
 * all of the conditions evaluates to false. ``Fn::Or`` acts as an OR operator. The minimum number
 * of conditions that you can include is 2, and the maximum is 10.
 */
class FnOr extends FnConditionBase {
    /**
     * Creates an ``Fn::Or`` condition function.
     * @param condition A condition that evaluates to true or false.
     */
    constructor(...condition) {
        super("Fn::Or", condition);
    }
}
/**
 * Returns true if a specified string matches all values in a list.
 */
class FnEachMemberEquals extends FnConditionBase {
    /**
     * Creates an ``Fn::EachMemberEquals`` function.
     * @param listOfStrings A list of strings, such as "A", "B", "C".
     * @param value A string, such as "A", that you want to compare against a list of strings.
     */
    constructor(listOfStrings, value) {
        super("Fn::EachMemberEquals", [listOfStrings, value]);
    }
}
/**
 * The intrinsic function ``Fn::Join`` appends a set of values into a single value, separated by
 * the specified delimiter. If a delimiter is the empty string, the set of values are concatenated
 * with no delimiter.
 */
class FnJoin {
    /**
     * Creates an ``Fn::Join`` function.
     * @param delimiter The value you want to occur between fragments. The delimiter will occur between fragments only.
     *          It will not terminate the final value.
     * @param listOfValues The list of values you want combined.
     */
    constructor(delimiter, listOfValues) {
        if (listOfValues.length === 0) {
            throw new Error("FnJoin requires at least one value to be provided");
        }
        this.delimiter = delimiter;
        this.listOfValues = listOfValues;
        this.creationStack = stack_trace_1.captureStackTrace();
    }
    resolve(context) {
        if (token_1.Token.isUnresolved(this.listOfValues)) {
            // This is a list token, don't try to do smart things with it.
            return { "Fn::Join": [this.delimiter, this.listOfValues] };
        }
        const resolved = this.resolveValues(context);
        if (resolved.length === 1) {
            return resolved[0];
        }
        return { "Fn::Join": [this.delimiter, resolved] };
    }
    toString() {
        return token_1.Token.asString(this, { displayHint: "Fn::Join" });
    }
    toJSON() {
        return "<Fn::Join>";
    }
    /**
     * Optimization: if an Fn::Join is nested in another one and they share the same delimiter, then flatten it up. Also,
     * if two concatenated elements are literal strings (not tokens), then pre-concatenate them with the delimiter, to
     * generate shorter output.
     */
    resolveValues(context) {
        const resolvedValues = this.listOfValues.map((x) => reference_1.Reference.isReference(x) ? x : context.resolve(x));
        return template_lang_1.minimalRosTemplateJoin(this.delimiter, resolvedValues);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9zLWZuLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicm9zLWZuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLDJEQUFpRTtBQUNqRSxtREFBZ0Q7QUFDaEQsMkNBQXdDO0FBQ3hDLG1DQUFnQztBQUNoQywrQ0FBa0Q7QUFHbEQsaUNBQWlDO0FBRWpDOzs7R0FHRztBQUNILE1BQWEsRUFBRTtJQUNOLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBVTtRQUMxQixJQUFJLENBQUMsYUFBSyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUM5QixPQUFPLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUN6QjtRQUNELE9BQU8sSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDckMsQ0FBQztJQUVNLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBWTtRQUNyQyxPQUFPLElBQUksY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzdDLENBQUM7SUFFTSxNQUFNLENBQUMsT0FBTyxDQUNuQixXQUFtQyxFQUNuQyxPQUFlO1FBRWYsT0FBTyxJQUFJLFNBQVMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzFELENBQUM7SUFFTSxNQUFNLENBQUMsU0FBUyxDQUFDLFNBQXFCO1FBQzNDLE9BQU8sSUFBSSxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDL0MsQ0FBQztJQUVNLE1BQU0sQ0FBQyxZQUFZLENBQUMsS0FBWTtRQUNyQyxPQUFPLElBQUksY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzlDLENBQUM7SUFFTSxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQWUsRUFBRSxNQUFhO1FBQzlDLE9BQU8sSUFBSSxLQUFLLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxD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UUFDWCxPQUFPLFlBQVksQ0FBQztJQUN0QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNLLGFBQWEsQ0FBQyxPQUF3QjtRQUM1QyxNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQ2pELHFCQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQ2xELENBQUM7UUFDRixPQUFPLHNDQUFzQixDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsY0FBYyxDQUFDLENBQUM7SUFDaEUsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVJvc0NvbmRpdGlvbkV4cHJlc3Npb24gfSBmcm9tIFwiLi9yb3MtY29uZGl0aW9uXCI7XG5pbXBvcnQgeyBtaW5pbWFsUm9zVGVtcGxhdGVKb2luIH0gZnJvbSBcIi4vcHJpdmF0ZS90ZW1wbGF0ZS1sYW5nXCI7XG5pbXBvcnQgeyBJbnRyaW5zaWMgfSBmcm9tIFwiLi9wcml2YXRlL2ludHJpbnNpY1wiO1xuaW1wb3J0IHsgUmVmZXJlbmNlIH0gZnJvbSBcIi4vcmVmZXJlbmNlXCI7XG5pbXBvcnQgeyBUb2tlbiB9IGZyb20gXCIuL3Rva2VuXCI7XG5pbXBvcnQgeyBjYXB0dXJlU3RhY2tUcmFjZSB9IGZyb20gXCIuL3N0YWNrLXRyYWNlXCI7XG5pbXBvcnQgeyBJUmVzb2x2ZUNvbnRleHQsIElSZXNvbHZhYmxlIH0gZnJvbSBcIi4vcmVzb2x2YWJsZVwiO1xuXG4vLyB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGhcblxuLyoqXG4gKiBSZXNvdXJjZSBPcmNoZXN0cmF0aW9uIFNlcnZpY2UgaW50cmluc2ljIGZ1bmN0aW9ucy5cbiAqIGh0dHBzOi8vaGVscC5hbGl5dW4uY29tL2RvY3VtZW50X2RldGFpbC8yODg1Mi5odG1sXG4gKi9cbmV4cG9ydCBjbGFzcyBGbiB7XG4gIHB1YmxpYyBzdGF0aWMgc3RyKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xuICAgIGlmICghVG9rZW4uaXNVbnJlc29sdmVkKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgRm5TdHIodmFsdWUpLnRvU3RyaW5nKCk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGJhc2U2NERlY29kZShkYXRhOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBuZXcgRm5CYXNlNjREZWNvZGUoZGF0YSkudG9TdHJpbmcoKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgcmVwbGFjZShcbiAgICByZXBsYWNlRGF0YTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSxcbiAgICBjb250ZW50OiBzdHJpbmdcbiAgKTogc3RyaW5nIHtcbiAgICByZXR1cm4gbmV3IEZuUmVwbGFjZShbcmVwbGFjZURhdGEsIGNvbnRlbnRdKS50b1N0cmluZygpO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBsaXN0TWVyZ2UodmFsdWVMaXN0OiBzdHJpbmdbXVtdKTogc3RyaW5nIHtcbiAgICByZXR1cm4gbmV3IEZuTGlzdE1lcmdlKHZhbHVlTGlzdCkudG9TdHJpbmcoKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZ2V0SnNvblZhbHVlKHZhbHVlOiBhbnlbXSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG5ldyBGbkdldEpzb25WYWx1ZSh2YWx1ZSkudG9TdHJpbmcoKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgYXZnKG5kaWdpdHM6IG51bWJlciwgdmFsdWVzOiBhbnlbXSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG5ldyBGbkF2ZyhuZGlnaXRzLCB2YWx1ZXMpLnRvU3RyaW5nKCk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGFkZCh2YWx1ZXM6IGFueVtdKTogc3RyaW5nIHtcbiAgICByZXR1cm4gbmV3IEZuQWRkKHZhbHVlcykudG9TdHJpbmcoKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgY2FsY3VsYXRlKFxuICAgIHZhbHVlczogc3RyaW5nLFxuICAgIG5kaWdpdHM6IG51bWJlcixcbiAgICBwYXJhOiBudW1iZXJbXVxuICApOiBzdHJpbmcge1xuICAgIHJldHVybiBuZXcgRm5DYWxjdWxhdGUodmFsdWVzLCBuZGlnaXRzLCBwYXJhKS50b1N0cmluZygpO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBtYXgodmFsdWVzOiBudW1iZXJbXSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG5ldyBGbk1heCh2YWx1ZXMpLnRvU3RyaW5nKCk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIG1pbih2YWx1ZXM6IG51bWJlcltdKTogc3RyaW5nIHtcbiAgICByZXR1cm4gbmV3IEZuTWluKHZhbHVlcykudG9TdHJpbmcoKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMganEobWV0aG9kOiBzdHJpbmcsIHNjcmlwdDogc3RyaW5nLCBpbnB1dFN0cmluZzogYW55KTogc3RyaW5nIHtcbiAgICByZXR1cm4gbmV3IEZuSnEobWV0aG9kLCBzY3JpcHQsIGlucHV0U3RyaW5nKS50b1N0cmluZygpO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBtZXJnZU1hcFRvTGlzdChtYXBMaXN0OiBhbnlbXSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG5ldyBGbk1lcmdlTWFwVG9MaXN0KG1hcExpc3QpLnRvU3RyaW5nKCk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIHNlbGVjdE1hcExpc3Qoa2V5OiBzdHJpbmcsIG1hcExpc3Q6IGFueVtdKTogc3RyaW5nIHtcbiAgICByZXR1cm4gbmV3IEZuU2VsZWN0TWFwTGlzdChrZXksIG1hcExpc3QpLnRvU3RyaW5nKCk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIGBgUmVmYGAgaW50cmluc2ljIGZ1bmN0aW9uIHJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSBzcGVjaWZpZWQgcGFyYW1ldGVyIG9yIHJlc291cmNlLlxuICAgKiBOb3RlIHRoYXQgaXQgZG9lc24ndCB2YWxpZGF0ZSB0aGUgbG9naWNhbE5hbWUsIGl0IG1haW5seSBzZXJ2ZXMgcGFyZW1ldGVyL3Jlc291cmNlIHJlZmVyZW5jZSBkZWZpbmVkIGluIGEgYGBSb3NJbmNsdWRlYGAgdGVtcGxhdGUuXG4gICAqIEBwYXJhbSBsb2dpY2FsTmFtZSBUaGUgbG9naWNhbCBuYW1lIG9mIGEgcGFyYW1ldGVyL3Jlc291cmNlIGZvciB3aGljaCB5b3Ugd2FudCB0byByZXRyaWV2ZSBpdHMgdmFsdWUuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIHJlZihsb2dpY2FsTmFtZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gbmV3IEZuUmVmKGxvZ2ljYWxOYW1lKS50b1N0cmluZygpO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBwdWJsaWMgc3RhdGljIF9yZWYobG9naWNhbElkOiBzdHJpbmcpOiBJUmVzb2x2YWJsZSB7XG4gICAgcmV0dXJuIG5ldyBGblJlZihsb2dpY2FsSWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBgYEZuOjpHZXRBdHRgYCBpbnRyaW5zaWMgZnVuY3Rpb24gcmV0dXJucyB0aGUgdmFsdWUgb2YgYW4gYXR0cmlidXRlXG4gICAqIGZyb20gYSByZXNvdXJjZSBpbiB0aGUgdGVtcGxhdGUuXG4gICAqIEBwYXJhbSBsb2dpY2FsTmFtZU9mUmVzb3VyY2UgVGhlIGxvZ2ljYWwgbmFtZSAoYWxzbyBjYWxsZWQgbG9naWNhbCBJRCkgb2ZcbiAgICogdGhlIHJlc291cmNlIHRoYXQgY29udGFpbnMgdGhlIGF0dHJpYnV0ZSB0aGF0IHlvdSB3YW50LlxuICAgKiBAcGFyYW0gYXR0cmlidXRlTmFtZSBUaGUgbmFtZSBvZiB0aGUgcmVzb3VyY2Utc3BlY2lmaWMgYXR0cmlidXRlIHdob3NlXG4gICAqIHZhbHVlIHlvdSB3YW50LiBTZWUgdGhlIHJlc291cmNlJ3MgcmVmZXJlbmNlIHBhZ2UgZm9yIGRldGFpbHMgYWJvdXQgdGhlXG4gICAqIGF0dHJpYnV0ZXMgYXZhaWxhYmxlIGZvciB0aGF0IHJlc291cmNlIHR5cGUuXG4gICAqIEByZXR1cm5zIGFuIElSZXNvbHZhYmxlIG9iamVjdFxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBnZXRBdHQoXG4gICAgbG9naWNhbE5hbWVPZlJlc291cmNlOiBzdHJpbmcsXG4gICAgYXR0cmlidXRlTmFtZTogc3RyaW5nXG4gICk6IElSZXNvbHZhYmxlIHtcbiAgICByZXR1cm4gbmV3IEZuR2V0QXR0KGxvZ2ljYWxOYW1lT2ZSZXNvdXJjZSwgYXR0cmlidXRlTmFtZSk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIGludHJpbnNpYyBmdW5jdGlvbiBgYEZuOjpKb2luYGAgYXBwZW5kcyBhIHNldCBvZiB2YWx1ZXMgaW50byBhIHNpbmdsZVxuICAgKiB2YWx1ZSwgc2VwYXJhdGVkIGJ5IHRoZSBzcGVjaWZpZWQgZGVsaW1pdGVyLiBJZiBhIGRlbGltaXRlciBpcyB0aGUgZW1wdHlcbiAgICogc3RyaW5nLCB0aGUgc2V0IG9mIHZhbHVlcyBhcmUgY29uY2F0ZW5hdGVkIHdpdGggbm8gZGVsaW1pdGVyLlxuICAgKiBAcGFyYW0gZGVsaW1pdGVyIFRoZSB2YWx1ZSB5b3Ugd2FudCB0byBvY2N1ciBiZXR3ZWVuIGZyYWdtZW50cy4gVGhlXG4gICAqIGRlbGltaXRlciB3aWxsIG9jY3VyIGJldHdlZW4gZnJhZ21lbnRzIG9ubHkuIEl0IHdpbGwgbm90IHRlcm1pbmF0ZSB0aGVcbiAgICogZmluYWwgdmFsdWUuXG4gICAqIEBwYXJhbSBsaXN0T2ZWYWx1ZXMgVGhlIGxpc3Qgb2YgdmFsdWVzIHlvdSB3YW50IGNvbWJpbmVkLlxuICAgKiBAcmV0dXJucyBhIHRva2VuIHJlcHJlc2VudGVkIGFzIGEgc3RyaW5nXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGpvaW4oZGVsaW1pdGVyOiBzdHJpbmcsIGxpc3RPZlZhbHVlczogc3RyaW5nW10pOiBzdHJpbmcge1xuICAgIGlmIChsaXN0T2ZWYWx1ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGbkpvaW4gcmVxdWlyZXMgYXQgbGVhc3Qgb25lIHZhbHVlIHRvIGJlIHByb3ZpZGVkXCIpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRm5Kb2luKGRlbGltaXRlciwgbGlzdE9mVmFsdWVzKS50b1N0cmluZygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRvIHNwbGl0IGEgc3RyaW5nIGludG8gYSBsaXN0IG9mIHN0cmluZyB2YWx1ZXMgc28gdGhhdCB5b3UgY2FuIHNlbGVjdCBhbiBlbGVtZW50IGZyb20gdGhlXG4gICAqIHJlc3VsdGluZyBzdHJpbmcgbGlzdCwgdXNlIHRoZSBgYEZuOjpTcGxpdGBgIGludHJpbnNpYyBmdW5jdGlvbi4gU3BlY2lmeSB0aGUgbG9jYXRpb24gb2Ygc3BsaXRzXG4gICAqIHdpdGggYSBkZWxpbWl0ZXIsIHN1Y2ggYXMgLCAoYSBjb21tYSkuIEFmdGVyIHlvdSBzcGxpdCBhIHN0cmluZywgdXNlIHRoZSBgYEZuOjpTZWxlY3RgYCBmdW5jdGlvblxuICAgKiB0byBwaWNrIGEgc3BlY2lmaWMgZWxlbWVudC5cbiAgICogQHBhcmFtIGRlbGltaXRlciBBIHN0cmluZyB2YWx1ZSB0aGF0IGRldGVybWluZXMgd2hlcmUgdGhlIHNvdXJjZSBzdHJpbmcgaXMgZGl2aWRlZC5cbiAgICogQHBhcmFtIHNvdXJjZSBUaGUgc3RyaW5nIHZhbHVlIHRoYXQgeW91IHdhbnQgdG8gc3BsaXQuXG4gICAqIEByZXR1cm5zIGEgdG9rZW4gcmVwcmVzZW50ZWQgYXMgYSBzdHJpbmcgYXJyYXlcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgc3BsaXQoZGVsaW1pdGVyOiBzdHJpbmcsIHNvdXJjZTogc3RyaW5nKTogc3RyaW5nW10ge1xuICAgIC8vIHNob3J0LWNpcmN1dCBpZiBzb3VyY2UgaXMgbm90IGEgdG9rZW5cbiAgICBpZiAoIVRva2VuLmlzVW5yZXNvbHZlZChzb3VyY2UpKSB7XG4gICAgICByZXR1cm4gc291cmNlLnNwbGl0KGRlbGltaXRlcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIFRva2VuLmFzTGlzdChuZXcgRm5TcGxpdChkZWxpbWl0ZXIsIHNvdXJjZSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBpbnRyaW5zaWMgZnVuY3Rpb24gYGBGbjo6U2VsZWN0YGAgcmV0dXJucyBhIHNpbmdsZSBvYmplY3QgZnJvbSBhIGxpc3Qgb2Ygb2JqZWN0cyBieSBpbmRleC5cbiAgICogQHBhcmFtIGluZGV4IFRoZSBpbmRleCBvZiB0aGUgb2JqZWN0IHRvIHJldHJpZXZlLiBUaGlzIG11c3QgYmUgYSB2YWx1ZSBmcm9tIHplcm8gdG8gTi0xLCB3aGVyZSBOIHJlcHJlc2VudHMgdGhlIG51bWJlciBvZiBlbGVtZW50cyBpbiB0aGUgYXJyYXkuXG4gICAqIEBwYXJhbSBhcnJheSBUaGUgbGlzdCBvZiBvYmplY3RzIHRvIHNlbGVjdCBmcm9tLiBUaGlzIGxpc3QgbXVzdCBub3QgYmUgbnVsbCwgbm9yIGNhbiBpdCBoYXZlIG51bGwgZW50cmllcy5cbiAgICogQHJldHVybnMgYSB0b2tlbiByZXByZXNlbnRlZCBhcyBhIHN0cmluZ1xuICAgKi9cbiAgcHVibGljIHN0YXRpYyBzZWxlY3QoaW5kZXg6IG51bWJlciB8IHN0cmluZywgYXJyYXk6IGFueSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG5ldyBGblNlbGVjdChpbmRleCwgYXJyYXkpLnRvU3RyaW5nKCk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIGludHJpbnNpYyBmdW5jdGlvbiBgYEZuOjpTdWJgYCBzdWJzdGl0dXRlcyB2YXJpYWJsZXMgaW4gYW4gaW5wdXQgc3RyaW5nXG4gICAqIHdpdGggdmFsdWVzIHRoYXQgeW91IHNwZWNpZnkuIEluIHlvdXIgdGVtcGxhdGVzLCB5b3UgY2FuIHVzZSB0aGlzIGZ1bmN0aW9uXG4gICAqIHRvIGNvbnN0cnVjdCBjb21tYW5kcyBvciBvdXRwdXRzIHRoYXQgaW5jbHVkZSB2YWx1ZXMgdGhhdCBhcmVuJ3QgYXZhaWxhYmxlXG4gICAqIHVudGlsIHlvdSBjcmVhdGUgb3IgdXBkYXRlIGEgc3RhY2suXG4gICAqIEBwYXJhbSBib2R5IEEgc3RyaW5nIHdpdGggdmFyaWFibGVzIHRoYXQgUm9zIFRlbXBsYXRlIHN1YnN0aXR1dGVzXG4gICAqIHdpdGggdGhlaXIgYXNzb2NpYXRlZCB2YWx1ZXMgYXQgcnVudGltZS4gV3JpdGUgdmFyaWFibGVzIGFzICR7TXlWYXJOYW1lfS5cbiAgICogVmFyaWFibGVzIGNhbiBiZSB0ZW1wbGF0ZSBwYXJhbWV0ZXIgbmFtZXMsIHJlc291cmNlIGxvZ2ljYWwgSURzLCByZXNvdXJjZVxuICAgKiBhdHRyaWJ1dGVzLCBvciBhIHZhcmlhYmxlIGluIGEga2V5LXZhbHVlIG1hcC4gSWYgeW91IHNwZWNpZnkgb25seSB0ZW1wbGF0ZVxuICAgKiBwYXJhbWV0ZXIgbmFtZXMsIHJlc291cmNlIGxvZ2ljYWwgSURzLCBhbmQgcmVzb3VyY2UgYXR0cmlidXRlcywgZG9uJ3RcbiAgICogc3BlY2lmeSBhIGtleS12YWx1ZSBtYXAuXG4gICAqIEBwYXJhbSB2YXJpYWJsZXMgVGhlIG5hbWUgb2YgYSB2YXJpYWJsZSB0aGF0IHlvdSBpbmNsdWRlZCBpbiB0aGUgU3RyaW5nXG4gICAqIHBhcmFtZXRlci4gVGhlIHZhbHVlIHRoYXQgUm9zIFRlbXBsYXRlIHN1YnN0aXR1dGVzIGZvciB0aGUgYXNzb2NpYXRlZFxuICAgKiB2YXJpYWJsZSBuYW1lIGF0IHJ1bnRpbWUuXG4gICAqIEByZXR1cm5zIGEgdG9rZW4gcmVwcmVzZW50ZWQgYXMgYSBzdHJpbmdcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgc3ViKFxuICAgIGJvZHk6IHN0cmluZyxcbiAgICB2YXJpYWJsZXM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9XG4gICk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG5ldyBGblN1Yihib2R5LCB2YXJpYWJsZXMpLnRvU3RyaW5nKCk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIGludHJpbnNpYyBmdW5jdGlvbiBgYEZuOjpCYXNlNjRgYCByZXR1cm5zIHRoZSBCYXNlNjQgcmVwcmVzZW50YXRpb24gb2ZcbiAgICogdGhlIGlucHV0IHN0cmluZy5cbiAgICogQHBhcmFtIGRhdGEgVGhlIHN0cmluZyB2YWx1ZSB5b3Ugd2FudCB0byBjb252ZXJ0IHRvIEJhc2U2NC5cbiAgICogQHJldHVybnMgYSB0b2tlbiByZXByZXNlbnRlZCBhcyBhIHN0cmluZ1xuICAgKi9cbiAgcHVibGljIHN0YXRpYyBiYXNlNjRFbmNvZGUoZGF0YTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gbmV3IEZuQmFzZTY0RW5jb2RlKGRhdGEpLnRvU3RyaW5nKCk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIGludHJpbnNpYyBmdW5jdGlvbiBgYEZuOjpHZXRBWnNgYCByZXR1cm5zIGFuIGFycmF5IHRoYXQgbGlzdHNcbiAgICogQXZhaWxhYmlsaXR5IFpvbmVzIGZvciBhIHNwZWNpZmllZCByZWdpb24uIEJlY2F1c2UgY3VzdG9tZXJzIGhhdmUgYWNjZXNzIHRvXG4gICAqIGRpZmZlcmVudCBBdmFpbGFiaWxpdHkgWm9uZXMsIHRoZSBpbnRyaW5zaWMgZnVuY3Rpb24gYGBGbjo6R2V0QVpzYGAgZW5hYmxlc1xuICAgKiB0ZW1wbGF0ZSBhdXRob3JzIHRvIHdyaXRlIHRlbXBsYXRlcyB0aGF0IGFkYXB0IHRvIHRoZSBjYWxsaW5nIHVzZXInc1xuICAgKiBhY2Nlc3MuIFRoYXQgd2F5IHlvdSBkb24ndCBoYXZlIHRvIGhhcmQtY29kZSBhIGZ1bGwgbGlzdCBvZiBBdmFpbGFiaWxpdHlcbiAgICogWm9uZXMgZm9yIGEgc3BlY2lmaWVkIHJlZ2lvbi5cbiAgICogQHBhcmFtIHJlZ2lvbiBUaGUgbmFtZSBvZiB0aGUgcmVnaW9uIGZvciB3aGljaCB5b3Ugd2FudCB0byBnZXQgdGhlXG4gICAqIEF2YWlsYWJpbGl0eSBab25lcy4gWW91IGNhbiB1c2UgdGhlIFJPUzo6UmVnaW9uIHBzZXVkbyBwYXJhbWV0ZXIgdG8gc3BlY2lmeVxuICAgKiB0aGUgcmVnaW9uIGluIHdoaWNoIHRoZSBzdGFjayBpcyBjcmVhdGVkLiBTcGVjaWZ5aW5nIGFuIGVtcHR5IHN0cmluZyBpc1xuICAgKiBlcXVpdmFsZW50IHRvIHNwZWNpZnlpbmcgUk9TOjpSZWdpb24uXG4gICAqIEByZXR1cm5zIGEgdG9rZW4gcmVwcmVzZW50ZWQgYXMgYSBzdHJpbmcgYXJyYXlcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgZ2V0QXpzKHJlZ2lvbj86IHN0cmluZyk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gVG9rZW4uYXNMaXN0KG5ldyBGbkdldEFacyhyZWdpb24pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgaW50cmluc2ljIGZ1bmN0aW9uIGBgRm46OkdldFN0YWNrT3V0cHV0YGAgcmV0dXJucyB0aGUgdmFsdWUgb2YgYW4gb3V0cHV0XG4gICAqIGV4cG9ydGVkIGJ5IGFub3RoZXIgc3RhY2suXG4gICAqIEByZXR1cm5zIGEgdG9rZW4gcmVwcmVzZW50ZWQgYXMgYSBzdHJpbmdcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgZ2V0U3RhY2tPdXRwdXQoXG4gICAgc3RhY2tJRDogc3RyaW5nLFxuICAgIG91dHB1dEtleTogc3RyaW5nLFxuICAgIHN0YWNrUmVnaW9uPzogc3RyaW5nXG4gICk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG5ldyBGbkdldFN0YWNrT3V0cHV0KHN0YWNrSUQsIG91dHB1dEtleSwgc3RhY2tSZWdpb24pLnRvU3RyaW5nKCk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIGludHJpbnNpYyBmdW5jdGlvbiBgYEZuOjpGaW5kSW5NYXBgYCByZXR1cm5zIHRoZSB2YWx1ZSBjb3JyZXNwb25kaW5nIHRvXG4gICAqIGtleXMgaW4gYSB0d28tbGV2ZWwgbWFwIHRoYXQgaXMgZGVjbGFyZWQgaW4gdGhlIE1hcHBpbmdzIHNlY3Rpb24uXG4gICAqIEByZXR1cm5zIGEgdG9rZW4gcmVwcmVzZW50ZWQgYXMgYSBzdHJpbmdcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgZmluZEluTWFwKFxuICAgIG1hcE5hbWU6IHN0cmluZyxcbiAgICB0b3BMZXZlbEtleTogc3RyaW5nLFxuICAgIHNlY29uZExldmVsS2V5OiBzdHJpbmdcbiAgKTogc3RyaW5nIHtcbiAgICByZXR1cm4gbmV3IEZuRmluZEluTWFwKG1hcE5hbWUsIHRvcExldmVsS2V5LCBzZWNvbmRMZXZlbEtleSkudG9TdHJpbmcoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgYWxsIHRoZSBzcGVjaWZpZWQgY29uZGl0aW9ucyBldmFsdWF0ZSB0byB0cnVlLCBvciByZXR1cm5zXG4gICAqIGZhbHNlIGlmIGFueSBvbmUgb2YgdGhlIGNvbmRpdGlvbnMgZXZhbHVhdGVzIHRvIGZhbHNlLiBgYEZuOjpBbmRgYCBhY3RzIGFzXG4gICAqIGFuIEFORCBvcGVyYXRvci4gVGhlIG1pbmltdW0gbnVtYmVyIG9mIGNvbmRpdGlvbnMgdGhhdCB5b3UgY2FuIGluY2x1ZGUgaXNcbiAgICogMiwgYW5kIHRoZSBtYXhpbXVtIGlzIDEwLlxuICAgKiBAcGFyYW0gY29uZGl0aW9ucyBjb25kaXRpb25zIHRvIEFORFxuICAgKiBAcmV0dXJucyBhbiBGbkNvbmRpdGlvbiB0b2tlblxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBjb25kaXRpb25BbmQoXG4gICAgLi4uY29uZGl0aW9uczogSVJvc0NvbmRpdGlvbkV4cHJlc3Npb25bXVxuICApOiBJUm9zQ29uZGl0aW9uRXhwcmVzc2lvbiB7XG4gICAgcmV0dXJuIG5ldyBGbkFuZCguLi5jb25kaXRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb21wYXJlcyBpZiB0d28gdmFsdWVzIGFyZSBlcXVhbC4gUmV0dXJucyB0cnVlIGlmIHRoZSB0d28gdmFsdWVzIGFyZSBlcXVhbFxuICAgKiBvciBmYWxzZSBpZiB0aGV5IGFyZW4ndC5cbiAgICogQHBhcmFtIGxocyBBIHZhbHVlIG9mIGFueSB0eXBlIHRoYXQgeW91IHdhbnQgdG8gY29tcGFyZS5cbiAgICogQHBhcmFtIHJocyBBIHZhbHVlIG9mIGFueSB0eXBlIHRoYXQgeW91IHdhbnQgdG8gY29tcGFyZS5cbiAgICogQHJldHVybnMgYW4gRm5Db25kaXRpb24gdG9rZW5cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgY29uZGl0aW9uRXF1YWxzKGxoczogYW55LCByaHM6IGFueSk6IElSb3NDb25kaXRpb25FeHByZXNzaW9uIHtcbiAgICByZXR1cm4gbmV3IEZuRXF1YWxzKGxocywgcmhzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIG9uZSB2YWx1ZSBpZiB0aGUgc3BlY2lmaWVkIGNvbmRpdGlvbiBldmFsdWF0ZXMgdG8gdHJ1ZSBhbmQgYW5vdGhlclxuICAgKiB2YWx1ZSBpZiB0aGUgc3BlY2lmaWVkIGNvbmRpdGlvbiBldmFsdWF0ZXMgdG8gZmFsc2UuXG4gICAqIEBwYXJhbSBjb25kaXRpb25JZCBBIHJlZmVyZW5jZSB0byBhIGNvbmRpdGlvbiBpbiB0aGUgQ29uZGl0aW9ucyBzZWN0aW9uLiBVc2VcbiAgICogdGhlIGNvbmRpdGlvbidzIG5hbWUgdG8gcmVmZXJlbmNlIGl0LlxuICAgKiBAcGFyYW0gdmFsdWVJZlRydWUgQSB2YWx1ZSB0byBiZSByZXR1cm5lZCBpZiB0aGUgc3BlY2lmaWVkIGNvbmRpdGlvblxuICAgKiBldmFsdWF0ZXMgdG8gdHJ1ZS5cbiAgICogQHBhcmFtIHZhbHVlSWZGYWxzZSBBIHZhbHVlIHRvIGJlIHJldHVybmVkIGlmIHRoZSBzcGVjaWZpZWQgY29uZGl0aW9uXG4gICAqIGV2YWx1YXRlcyB0byBmYWxzZS5cbiAgICogQHJldHVybnMgYW4gRm5Db25kaXRpb24gdG9rZW5cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgY29uZGl0aW9uSWYoXG4gICAgY29uZGl0aW9uSWQ6IHN0cmluZyxcbiAgICB2YWx1ZUlmVHJ1ZTogYW55LFxuICAgIHZhbHVlSWZGYWxzZTogYW55XG4gICk6IElSb3NDb25kaXRpb25FeHByZXNzaW9uIHtcbiAgICByZXR1cm4gbmV3IEZuSWYoY29uZGl0aW9uSWQsIHZhbHVlSWZUcnVlLCB2YWx1ZUlmRmFsc2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBmb3IgYSBjb25kaXRpb24gdGhhdCBldmFsdWF0ZXMgdG8gZmFsc2Ugb3IgcmV0dXJucyBmYWxzZSBmb3IgYVxuICAgKiBjb25kaXRpb24gdGhhdCBldmFsdWF0ZXMgdG8gdHJ1ZS4gYGBGbjo6Tm90YGAgYWN0cyBhcyBhIE5PVCBvcGVyYXRvci5cbiAgICogQHBhcmFtIGNvbmRpdGlvbiBBIGNvbmRpdGlvbiBzdWNoIGFzIGBgRm46OkVxdWFsc2BgIHRoYXQgZXZhbHVhdGVzIHRvIHRydWVcbiAgICogb3IgZmFsc2UuXG4gICAqIEByZXR1cm5zIGFuIEZuQ29uZGl0aW9uIHRva2VuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGNvbmRpdGlvbk5vdChcbiAgICBjb25kaXRpb246IElSb3NDb25kaXRpb25FeHByZXNzaW9uXG4gICk6IElSb3NDb25kaXRpb25FeHByZXNzaW9uIHtcbiAgICByZXR1cm4gbmV3IEZuTm90KGNvbmRpdGlvbik7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIGFueSBvbmUgb2YgdGhlIHNwZWNpZmllZCBjb25kaXRpb25zIGV2YWx1YXRlIHRvIHRydWUsIG9yXG4gICAqIHJldHVybnMgZmFsc2UgaWYgYWxsIG9mIHRoZSBjb25kaXRpb25zIGV2YWx1YXRlcyB0byBmYWxzZS4gYGBGbjo6T3JgYCBhY3RzXG4gICAqIGFzIGFuIE9SIG9wZXJhdG9yLiBUaGUgbWluaW11bSBudW1iZXIgb2YgY29uZGl0aW9ucyB0aGF0IHlvdSBjYW4gaW5jbHVkZSBpc1xuICAgKiAyLCBhbmQgdGhlIG1heGltdW0gaXMgMTAuXG4gICAqIEBwYXJhbSBjb25kaXRpb25zIGNvbmRpdGlvbnMgdGhhdCBldmFsdWF0ZXMgdG8gdHJ1ZSBvciBmYWxzZS5cbiAgICogQHJldHVybnMgYW4gRm5Db25kaXRpb24gdG9rZW5cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgY29uZGl0aW9uT3IoXG4gICAgLi4uY29uZGl0aW9uczogSVJvc0NvbmRpdGlvbkV4cHJlc3Npb25bXVxuICApOiBJUm9zQ29uZGl0aW9uRXhwcmVzc2lvbiB7XG4gICAgcmV0dXJuIG5ldyBGbk9yKC4uLmNvbmRpdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiBhIHNwZWNpZmllZCBzdHJpbmcgbWF0Y2hlcyBhbGwgdmFsdWVzIGluIGEgbGlzdC5cbiAgICogQHBhcmFtIGxpc3RPZlN0cmluZ3MgQSBsaXN0IG9mIHN0cmluZ3MsIHN1Y2ggYXMgXCJBXCIsIFwiQlwiLCBcIkNcIi5cbiAgICogQHBhcmFtIHZhbHVlIEEgc3RyaW5nLCBzdWNoIGFzIFwiQVwiLCB0aGF0IHlvdSB3YW50IHRvIGNvbXBhcmUgYWdhaW5zdCBhIGxpc3RcbiAgICogb2Ygc3RyaW5ncy5cbiAgICogQHJldHVybnMgYW4gRm5Db25kaXRpb24gdG9rZW5cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgY29uZGl0aW9uRWFjaE1lbWJlckVxdWFscyhcbiAgICBsaXN0T2ZTdHJpbmdzOiBzdHJpbmdbXSxcbiAgICB2YWx1ZTogc3RyaW5nXG4gICk6IElSb3NDb25kaXRpb25FeHByZXNzaW9uIHtcbiAgICByZXR1cm4gbmV3IEZuRWFjaE1lbWJlckVxdWFscyhsaXN0T2ZTdHJpbmdzLCB2YWx1ZSk7XG4gIH1cblxuICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge31cbn1cblxuLyoqXG4gKiBCYXNlIGNsYXNzIGZvciB0b2tlbnMgdGhhdCByZXByZXNlbnQgUk9TIGludHJpbnNpYyBmdW5jdGlvbnMuXG4gKi9cbmNsYXNzIEZuQmFzZSBleHRlbmRzIEludHJpbnNpYyB7XG4gIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSkge1xuICAgIHN1cGVyKHsgW25hbWVdOiB2YWx1ZSB9KTtcbiAgfVxufVxuXG4vLyBuZXcgZnVuY3Rpb25cbmNsYXNzIEZuU3RyIGV4dGVuZHMgRm5CYXNlIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gYGBTdHJgYCBmdW5jdGlvbi5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlOiBhbnkpIHtcbiAgICBzdXBlcihcIkZuOjpTdHJcIiwgdmFsdWUpO1xuICB9XG59XG5cbmNsYXNzIEZuQmFzZTY0RGVjb2RlIGV4dGVuZHMgRm5CYXNlIHtcbiAgY29uc3RydWN0b3IoZGF0YTogYW55KSB7XG4gICAgc3VwZXIoXCJGbjo6QmFzZTY0RGVjb2RlXCIsIGRhdGEpO1xuICB9XG59XG5cbmNsYXNzIEZuUmVwbGFjZSBleHRlbmRzIEZuQmFzZSB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGBgUmVwbGFjZWBgIGZ1bmN0aW9uLlxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU6IGFueVtdKSB7XG4gICAgc3VwZXIoXCJGbjo6UmVwbGFjZVwiLCB2YWx1ZSk7XG4gIH1cbn1cblxuY2xhc3MgRm5MaXN0TWVyZ2UgZXh0ZW5kcyBGbkJhc2Uge1xuICAvKipcbiAgICogQ3JlYXRlcyBhbiBgYExpc3RNZXJnZWBgIGZ1bmN0aW9uLlxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU6IHN0cmluZ1tdW10pIHtcbiAgICBzdXBlcihcIkZuOjpMaXN0TWVyZ2VcIiwgdmFsdWUpO1xuICB9XG59XG5cbmNsYXNzIEZuR2V0SnNvblZhbHVlIGV4dGVuZHMgRm5CYXNlIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gYGBHZXRKc29uVmFsdWVgYCBmdW5jdGlvbi5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlOiBhbnlbXSkge1xuICAgIHN1cGVyKFwiRm46OkdldEpzb25WYWx1ZVwiLCB2YWx1ZSk7XG4gIH1cbn1cblxuY2xhc3MgRm5BdmcgZXh0ZW5kcyBGbkJhc2Uge1xuICAvKipcbiAgICogQ3JlYXRlcyBhbiBgYEF2Z2BgIGZ1bmN0aW9uLlxuICAgKi9cbiAgY29uc3RydWN0b3IobmRpZ2l0czogbnVtYmVyLCB2YWx1ZXM6IGFueVtdKSB7XG4gICAgc3VwZXIoXCJGbjo6QXZnXCIsIFtuZGlnaXRzLCB2YWx1ZXNdKTtcbiAgfVxufVxuXG5jbGFzcyBGbkFkZCBleHRlbmRzIEZuQmFzZSB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGBgQWRkYGAgZnVuY3Rpb24uXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZXM6IGFueVtdKSB7XG4gICAgc3VwZXIoXCJGbjo6QWRkXCIsIHZhbHVlcyk7XG4gIH1cbn1cblxuY2xhc3MgRm5DYWxjdWxhdGUgZXh0ZW5kcyBGbkJhc2Uge1xuICAvKipcbiAgICogQ3JlYXRlcyBhbiBgYENhbGN1bGF0ZWBgIGZ1bmN0aW9uLlxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWVzOiBzdHJpbmcsIG5kaWdpdHM6IG51bWJlciwgcGFyYTogbnVtYmVyW10pIHtcbiAgICBzdXBlcihcIkZuOjpDYWxjdWxhdGVcIiwgW3ZhbHVlcywgbmRpZ2l0cywgcGFyYV0pO1xuICB9XG59XG5cbmNsYXNzIEZuTWF4IGV4dGVuZHMgRm5CYXNlIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gYGBNYXhgYCBmdW5jdGlvbi5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlczogbnVtYmVyW10pIHtcbiAgICBzdXBlcihcIkZuOjpNYXhcIiwgdmFsdWVzKTtcbiAgfVxufVxuXG5jbGFzcyBGbk1pbiBleHRlbmRzIEZuQmFzZSB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGBgTWluYGAgZnVuY3Rpb24uXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZXM6IG51bWJlcltdKSB7XG4gICAgc3VwZXIoXCJGbjo6TWluXCIsIHZhbHVlcyk7XG4gIH1cbn1cblxuY2xhc3MgRm5HZXRTdGFja091dHB1dCBleHRlbmRzIEZuQmFzZSB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGBgR2V0U3RhY2tPdXRwdXRgYCBmdW5jdGlvbi5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHN0YWNrSUQ6IHN0cmluZywgb3V0cHV0S2V5OiBzdHJpbmcsIHN0YWNrUmVnaW9uPzogc3RyaW5nKSB7XG4gICAgc3VwZXIoXCJGbjo6R2V0U3RhY2tPdXRwdXRcIiwgW3N0YWNrSUQsIG91dHB1dEtleSwgc3RhY2tSZWdpb25dKTtcbiAgfVxufVxuXG5jbGFzcyBGbkpxIGV4dGVuZHMgRm5CYXNlIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gYGBKcWBgIGZ1bmN0aW9uLlxuICAgKi9cbiAgY29uc3RydWN0b3IobWV0aG9kOiBzdHJpbmcsIHNjcmlwdDogc3RyaW5nLCBpbnB1dFN0cmluZzogYW55KSB7XG4gICAgc3VwZXIoXCJGbjo6SnFcIiwgW21ldGhvZCwgc2NyaXB0LCBpbnB1dFN0cmluZ10pO1xuICB9XG59XG5cbmNsYXNzIEZuTWVyZ2VNYXBUb0xpc3QgZXh0ZW5kcyBGbkJhc2Uge1xuICAvKipcbiAgICogQ3JlYXRlcyBhbiBgYEZuTWVyZ2VNYXBUb0xpc3RgYCBmdW5jdGlvbi5cbiAgICovXG4gIGNvbnN0cnVjdG9yKG1hcExpc3Q6IGFueVtdKSB7XG4gICAgc3VwZXIoXCJGbjo6TWVyZ2VNYXBUb0xpc3RcIiwgbWFwTGlzdCk7XG4gIH1cbn1cblxuY2xhc3MgRm5TZWxlY3RNYXBMaXN0IGV4dGVuZHMgRm5CYXNlIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gYGBGbk1lcmdlTWFwVG9MaXN0YGAgZnVuY3Rpb24uXG4gICAqL1xuICBjb25zdHJ1Y3RvcihrZXk6IHN0cmluZywgbWFwTGlzdDogYW55W10pIHtcbiAgICBzdXBlcihcIkZuOjpTZWxlY3RNYXBMaXN0XCIsIFtrZXksIG1hcExpc3RdKTtcbiAgfVxufVxuXG4vKipcbiAqIFRoZSBpbnRyaW5zaWMgZnVuY3Rpb24gYGBSZWZgYCByZXR1cm5zIHRoZSB2YWx1ZSBvZiB0aGUgc3BlY2lmaWVkIHBhcmFtZXRlciBvciByZXNvdXJjZS5cbiAqIFdoZW4geW91IHNwZWNpZnkgYSBwYXJhbWV0ZXIncyBsb2dpY2FsIG5hbWUsIGl0IHJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSBwYXJhbWV0ZXIuXG4gKiBXaGVuIHlvdSBzcGVjaWZ5IGEgcmVzb3VyY2UncyBsb2dpY2FsIG5hbWUsIGl0IHJldHVybnMgYSB2YWx1ZSB0aGF0IHlvdSBjYW4gdHlwaWNhbGx5IHVzZSB0byByZWZlciB0byB0aGF0IHJlc291cmNlLCBzdWNoIGFzIGEgcGh5c2ljYWwgSUQuXG4gKi9cbmNsYXNzIEZuUmVmIGV4dGVuZHMgRm5CYXNlIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gYGBSZWZgYCBmdW5jdGlvbi5cbiAgICogQHBhcmFtIGxvZ2ljYWxOYW1lIFRoZSBsb2dpY2FsIG5hbWUgb2YgYSBwYXJhbWV0ZXIvcmVzb3VyY2UgZm9yIHdoaWNoIHlvdSB3YW50IHRvIHJldHJpZXZlIGl0cyB2YWx1ZS5cbiAgICovXG4gIGNvbnN0cnVjdG9yKGxvZ2ljYWxOYW1lOiBzdHJpbmcpIHtcbiAgICBzdXBlcihcIlJlZlwiLCBsb2dpY2FsTmFtZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBUaGUgaW50cmluc2ljIGZ1bmN0aW9uIGBgRm46OkZpbmRJbk1hcGBgIHJldHVybnMgdGhlIHZhbHVlIGNvcnJlc3BvbmRpbmcgdG8ga2V5cyBpbiBhIHR3by1sZXZlbFxuICogbWFwIHRoYXQgaXMgZGVjbGFyZWQgaW4gdGhlIE1hcHBpbmdzIHNlY3Rpb24uXG4gKi9cbmNsYXNzIEZuRmluZEluTWFwIGV4dGVuZHMgRm5CYXNlIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gYGBGbjo6RmluZEluTWFwYGAgZnVuY3Rpb24uXG4gICAqIEBwYXJhbSBtYXBOYW1lIFRoZSBsb2dpY2FsIG5hbWUgb2YgYSBtYXBwaW5nIGRlY2xhcmVkIGluIHRoZSBNYXBwaW5ncyBzZWN0aW9uIHRoYXQgY29udGFpbnMgdGhlIGtleXMgYW5kIHZhbHVlcy5cbiAgICogQHBhcmFtIHRvcExldmVsS2V5IFRoZSB0b3AtbGV2ZWwga2V5IG5hbWUuIEl0cyB2YWx1ZSBpcyBhIGxpc3Qgb2Yga2V5LXZhbHVlIHBhaXJzLlxuICAgKiBAcGFyYW0gc2Vjb25kTGV2ZWxLZXkgVGhlIHNlY29uZC1sZXZlbCBrZXkgbmFtZSwgd2hpY2ggaXMgc2V0IHRvIG9uZSBvZiB0aGUga2V5cyBmcm9tIHRoZSBsaXN0IGFzc2lnbmVkIHRvIFRvcExldmVsS2V5LlxuICAgKi9cbiAgY29uc3RydWN0b3IobWFwTmFtZTogc3RyaW5nLCB0b3BMZXZlbEtleTogYW55LCBzZWNvbmRMZXZlbEtleTogYW55KSB7XG4gICAgc3VwZXIoXCJGbjo6RmluZEluTWFwXCIsIFttYXBOYW1lLCB0b3BMZXZlbEtleSwgc2Vjb25kTGV2ZWxLZXldKTtcbiAgfVxufVxuXG4vKipcbiAqIFRoZSBgYEZuOjpHZXRBdHRgYCBpbnRyaW5zaWMgZnVuY3Rpb24gcmV0dXJucyB0aGUgdmFsdWUgb2YgYW4gYXR0cmlidXRlIGZyb20gYSByZXNvdXJjZSBpbiB0aGUgdGVtcGxhdGUuXG4gKi9cbmNsYXNzIEZuR2V0QXR0IGV4dGVuZHMgRm5CYXNlIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBgYEZuOjpHZXRBdHRgYCBmdW5jdGlvbi5cbiAgICogQHBhcmFtIGxvZ2ljYWxOYW1lT2ZSZXNvdXJjZSBUaGUgbG9naWNhbCBuYW1lIChhbHNvIGNhbGxlZCBsb2dpY2FsIElEKSBvZiB0aGUgcmVzb3VyY2UgdGhhdCBjb250YWlucyB0aGUgYXR0cmlidXRlIHRoYXQgeW91IHdhbnQuXG4gICAqIEBwYXJhbSBhdHRyaWJ1dGVOYW1lIFRoZSBuYW1lIG9mIHRoZSByZXNvdXJjZS1zcGVjaWZpYyBhdHRyaWJ1dGUgd2hvc2UgdmFsdWUgeW91IHdhbnQuIFNlZSB0aGUgcmVzb3VyY2UncyByZWZlcmVuY2UgcGFnZSBmb3IgZGV0YWlscyBhYm91dCB0aGUgYXR0cmlidXRlcyBhdmFpbGFibGUgZm9yIHRoYXQgcmVzb3VyY2UgdHlwZS5cbiAgICovXG4gIGNvbnN0cnVjdG9yKGxvZ2ljYWxOYW1lT2ZSZXNvdXJjZTogc3RyaW5nLCBhdHRyaWJ1dGVOYW1lOiBzdHJpbmcpIHtcbiAgICBzdXBlcihcIkZuOjpHZXRBdHRcIiwgW2xvZ2ljYWxOYW1lT2ZSZXNvdXJjZSwgYXR0cmlidXRlTmFtZV0pO1xuICB9XG59XG5cbi8qKlxuICogVGhlIGludHJpbnNpYyBmdW5jdGlvbiBgYEZuOjpHZXRBWnNgYCByZXR1cm5zIGFuIGFycmF5IHRoYXQgbGlzdHMgQXZhaWxhYmlsaXR5IFpvbmVzIGZvciBhXG4gKiBzcGVjaWZpZWQgcmVnaW9uLiBCZWNhdXNlIGN1c3RvbWVycyBoYXZlIGFjY2VzcyB0byBkaWZmZXJlbnQgQXZhaWxhYmlsaXR5IFpvbmVzLCB0aGUgaW50cmluc2ljXG4gKiBmdW5jdGlvbiBgYEZuOjpHZXRBWnNgYCBlbmFibGVzIHRlbXBsYXRlIGF1dGhvcnMgdG8gd3JpdGUgdGVtcGxhdGVzIHRoYXQgYWRhcHQgdG8gdGhlIGNhbGxpbmdcbiAqIHVzZXIncyBhY2Nlc3MuIFRoYXQgd2F5IHlvdSBkb24ndCBoYXZlIHRvIGhhcmQtY29kZSBhIGZ1bGwgbGlzdCBvZiBBdmFpbGFiaWxpdHkgWm9uZXMgZm9yIGFcbiAqIHNwZWNpZmllZCByZWdpb24uXG4gKi9cbmNsYXNzIEZuR2V0QVpzIGV4dGVuZHMgRm5CYXNlIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gYGBGbjo6R2V0QVpzYGAgZnVuY3Rpb24uXG4gICAqIEBwYXJhbSByZWdpb24gVGhlIG5hbWUgb2YgdGhlIHJlZ2lvbiBmb3Igd2hpY2ggeW91IHdhbnQgdG8gZ2V0IHRoZSBBdmFpbGFiaWxpdHkgWm9uZXMuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihyZWdpb24/OiBzdHJpbmcpIHtcbiAgICBzdXBlcihcIkZuOjpHZXRBWnNcIiwgcmVnaW9uIHx8IFwiXCIpO1xuICB9XG59XG5cbi8qKlxuICogVGhlIGludHJpbnNpYyBmdW5jdGlvbiBgYEZuOjpTZWxlY3RgYCByZXR1cm5zIGEgc2luZ2xlIG9iamVjdCBmcm9tIGEgbGlzdCBvZiBvYmplY3RzIGJ5IGluZGV4LlxuICovXG5jbGFzcyBGblNlbGVjdCBleHRlbmRzIEZuQmFzZSB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGBgRm46OlNlbGVjdGBgIGZ1bmN0aW9uLlxuICAgKiBAcGFyYW0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSBvYmplY3QgdG8gcmV0cmlldmUuIFRoaXMgbXVzdCBiZSBhIHZhbHVlIGZyb20gemVybyB0byBOLTEsIHdoZXJlIE4gcmVwcmVzZW50cyB0aGUgbnVtYmVyIG9mIGVsZW1lbnRzIGluIHRoZSBhcnJheS5cbiAgICogQHBhcmFtIGFycmF5IFRoZSBsaXN0IG9mIG9iamVjdHMgdG8gc2VsZWN0IGZyb20uIFRoaXMgbGlzdCBtdXN0IG5vdCBiZSBudWxsLCBub3IgY2FuIGl0IGhhdmUgbnVsbCBlbnRyaWVzLlxuICAgKi9cbiAgY29uc3RydWN0b3IoaW5kZXg6IG51bWJlciB8IHN0cmluZywgYXJyYXk6IGFueSkge1xuICAgIHN1cGVyKFwiRm46OlNlbGVjdFwiLCBbaW5kZXgsIGFycmF5XSk7XG4gIH1cbn1cblxuLyoqXG4gKiBUbyBzcGxpdCBhIHN0cmluZyBpbnRvIGEgbGlzdCBvZiBzdHJpbmcgdmFsdWVzIHNvIHRoYXQgeW91IGNhbiBzZWxlY3QgYW4gZWxlbWVudCBmcm9tIHRoZVxuICogcmVzdWx0aW5nIHN0cmluZyBsaXN0LCB1c2UgdGhlIGBgRm46OlNwbGl0YGAgaW50cmluc2ljIGZ1bmN0aW9uLiBTcGVjaWZ5IHRoZSBsb2NhdGlvbiBvZiBzcGxpdHNcbiAqIHdpdGggYSBkZWxpbWl0ZXIsIHN1Y2ggYXMgLCAoYSBjb21tYSkuIEFmdGVyIHlvdSBzcGxpdCBhIHN0cmluZywgdXNlIHRoZSBgYEZuOjpTZWxlY3RgYCBmdW5jdGlvblxuICogdG8gcGljayBhIHNwZWNpZmljIGVsZW1lbnQuXG4gKi9cbmNsYXNzIEZuU3BsaXQgZXh0ZW5kcyBGbkJhc2Uge1xuICAvKipcbiAgICogQ3JlYXRlIGFuIGBgRm46OlNwbGl0YGAgZnVuY3Rpb24uXG4gICAqIEBwYXJhbSBkZWxpbWl0ZXIgQSBzdHJpbmcgdmFsdWUgdGhhdCBkZXRlcm1pbmVzIHdoZXJlIHRoZSBzb3VyY2Ugc3RyaW5nIGlzIGRpdmlkZWQuXG4gICAqIEBwYXJhbSBzb3VyY2UgVGhlIHN0cmluZyB2YWx1ZSB0aGF0IHlvdSB3YW50IHRvIHNwbGl0LlxuICAgKi9cbiAgY29uc3RydWN0b3IoZGVsaW1pdGVyOiBzdHJpbmcsIHNvdXJjZTogYW55KSB7XG4gICAgc3VwZXIoXCJGbjo6U3BsaXRcIiwgW2RlbGltaXRlciwgc291cmNlXSk7XG4gIH1cbn1cblxuLyoqXG4gKiBUaGUgaW50cmluc2ljIGZ1bmN0aW9uIGBgRm46OlN1YmBgIHN1YnN0aXR1dGVzIHZhcmlhYmxlcyBpbiBhbiBpbnB1dCBzdHJpbmcgd2l0aCB2YWx1ZXMgdGhhdFxuICogeW91IHNwZWNpZnkuIEluIHlvdXIgdGVtcGxhdGVzLCB5b3UgY2FuIHVzZSB0aGlzIGZ1bmN0aW9uIHRvIGNvbnN0cnVjdCBjb21tYW5kcyBvciBvdXRwdXRzXG4gKiB0aGF0IGluY2x1ZGUgdmFsdWVzIHRoYXQgYXJlbid0IGF2YWlsYWJsZSB1bnRpbCB5b3UgY3JlYXRlIG9yIHVwZGF0ZSBhIHN0YWNrLlxuICovXG5jbGFzcyBGblN1YiBleHRlbmRzIEZuQmFzZSB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGBgRm46OlN1YmBgIGZ1bmN0aW9uLlxuICAgKiBAcGFyYW0gYm9keSBBIHN0cmluZyB3aXRoIHZhcmlhYmxlcyB0aGF0IFJvcyBUZW1wbGF0ZSBzdWJzdGl0dXRlcyB3aXRoIHRoZWlyXG4gICAqICAgICAgIGFzc29jaWF0ZWQgdmFsdWVzIGF0IHJ1bnRpbWUuIFdyaXRlIHZhcmlhYmxlcyBhcyAke015VmFyTmFtZX0uIFZhcmlhYmxlc1xuICAgKiAgICAgICBjYW4gYmUgdGVtcGxhdGUgcGFyYW1ldGVyIG5hbWVzLCByZXNvdXJjZSBsb2dpY2FsIElEcywgcmVzb3VyY2UgYXR0cmlidXRlcyxcbiAgICogICAgICAgb3IgYSB2YXJpYWJsZSBpbiBhIGtleS12YWx1ZSBtYXAuIElmIHlvdSBzcGVjaWZ5IG9ubHkgdGVtcGxhdGUgcGFyYW1ldGVyIG5hbWVzLFxuICAgKiAgICAgICByZXNvdXJjZSBsb2dpY2FsIElEcywgYW5kIHJlc291cmNlIGF0dHJpYnV0ZXMsIGRvbid0IHNwZWNpZnkgYSBrZXktdmFsdWUgbWFwLlxuICAgKiBAcGFyYW0gdmFyaWFibGVzIFRoZSBuYW1lIG9mIGEgdmFyaWFibGUgdGhhdCB5b3UgaW5jbHVkZWQgaW4gdGhlIFN0cmluZyBwYXJhbWV0ZXIuXG4gICAqICAgICAgICAgIFRoZSB2YWx1ZSB0aGF0IFJvcyBUZW1wbGF0ZSBzdWJzdGl0dXRlcyBmb3IgdGhlIGFzc29jaWF0ZWQgdmFyaWFibGUgbmFtZSBhdCBydW50aW1lLlxuICAgKi9cbiAgY29uc3RydWN0b3IoYm9keTogc3RyaW5nLCB2YXJpYWJsZXM/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9KSB7XG4gICAgc3VwZXIoXCJGbjo6U3ViXCIsIHZhcmlhYmxlcyA/IFtib2R5LCB2YXJpYWJsZXNdIDogYm9keSk7XG4gIH1cbn1cblxuLyoqXG4gKiBUaGUgaW50cmluc2ljIGZ1bmN0aW9uIGBgRm46OkJhc2U2NGBgIHJldHVybnMgdGhlIEJhc2U2NCByZXByZXNlbnRhdGlvbiBvZiB0aGUgaW5wdXQgc3RyaW5nLlxuICovXG5jbGFzcyBGbkJhc2U2NEVuY29kZSBleHRlbmRzIEZuQmFzZSB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGBgRm46OkJhc2U2NGBgIGZ1bmN0aW9uLlxuICAgKiBAcGFyYW0gZGF0YSBUaGUgc3RyaW5nIHZhbHVlIHlvdSB3YW50IHRvIGNvbnZlcnQgdG8gQmFzZTY0LlxuICAgKi9cbiAgY29uc3RydWN0b3IoZGF0YTogYW55KSB7XG4gICAgc3VwZXIoXCJGbjo6QmFzZTY0RW5jb2RlXCIsIGRhdGEpO1xuICB9XG59XG5cbmNsYXNzIEZuQ29uZGl0aW9uQmFzZSBleHRlbmRzIEludHJpbnNpYyBpbXBsZW1lbnRzIElSb3NDb25kaXRpb25FeHByZXNzaW9uIHtcbiAgY29uc3RydWN0b3IodHlwZTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XG4gICAgc3VwZXIoeyBbdHlwZV06IHZhbHVlIH0pO1xuICB9XG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIGFsbCB0aGUgc3BlY2lmaWVkIGNvbmRpdGlvbnMgZXZhbHVhdGUgdG8gdHJ1ZSwgb3IgcmV0dXJucyBmYWxzZSBpZiBhbnkgb25lXG4gKiAgb2YgdGhlIGNvbmRpdGlvbnMgZXZhbHVhdGVzIHRvIGZhbHNlLiBgYEZuOjpBbmRgYCBhY3RzIGFzIGFuIEFORCBvcGVyYXRvci4gVGhlIG1pbmltdW0gbnVtYmVyIG9mXG4gKiBjb25kaXRpb25zIHRoYXQgeW91IGNhbiBpbmNsdWRlIGlzIDIsIGFuZCB0aGUgbWF4aW11bSBpcyAxMC5cbiAqL1xuY2xhc3MgRm5BbmQgZXh0ZW5kcyBGbkNvbmRpdGlvbkJhc2Uge1xuICBjb25zdHJ1Y3RvciguLi5jb25kaXRpb246IElSb3NDb25kaXRpb25FeHByZXNzaW9uW10pIHtcbiAgICBzdXBlcihcIkZuOjpBbmRcIiwgY29uZGl0aW9uKTtcbiAgfVxufVxuXG4vKipcbiAqIENvbXBhcmVzIGlmIHR3byB2YWx1ZXMgYXJlIGVxdWFsLiBSZXR1cm5zIHRydWUgaWYgdGhlIHR3byB2YWx1ZXMgYXJlIGVxdWFsIG9yIGZhbHNlXG4gKiBpZiB0aGV5IGFyZW4ndC5cbiAqL1xuY2xhc3MgRm5FcXVhbHMgZXh0ZW5kcyBGbkNvbmRpdGlvbkJhc2Uge1xuICAvKipcbiAgICogQ3JlYXRlcyBhbiBgYEZuOjpFcXVhbHNgYCBjb25kaXRpb24gZnVuY3Rpb24uXG4gICAqIEBwYXJhbSBsaHMgQSB2YWx1ZSBvZiBhbnkgdHlwZSB0aGF0IHlvdSB3YW50IHRvIGNvbXBhcmUuXG4gICAqIEBwYXJhbSByaHMgQSB2YWx1ZSBvZiBhbnkgdHlwZSB0aGF0IHlvdSB3YW50IHRvIGNvbXBhcmUuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihsaHM6IGFueSwgcmhzOiBhbnkpIHtcbiAgICBzdXBlcihcIkZuOjpFcXVhbHNcIiwgW2xocywgcmhzXSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZXR1cm5zIG9uZSB2YWx1ZSBpZiB0aGUgc3BlY2lmaWVkIGNvbmRpdGlvbiBldmFsdWF0ZXMgdG8gdHJ1ZSBhbmQgYW5vdGhlciB2YWx1ZSBpZiB0aGVcbiAqIHNwZWNpZmllZCBjb25kaXRpb24gZXZhbHVhdGVzIHRvIGZhbHNlLlxuICovXG5jbGFzcyBGbklmIGV4dGVuZHMgRm5Db25kaXRpb25CYXNlIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gYGBGbjo6SWZgYCBjb25kaXRpb24gZnVuY3Rpb24uXG4gICAqIEBwYXJhbSBjb25kaXRpb24gQSByZWZlcmVuY2UgdG8gYSBjb25kaXRpb24gaW4gdGhlIENvbmRpdGlvbnMgc2VjdGlvbi4gVXNlIHRoZSBjb25kaXRpb24ncyBuYW1lIHRvIHJlZmVyZW5jZSBpdC5cbiAgICogQHBhcmFtIHZhbHVlSWZUcnVlIEEgdmFsdWUgdG8gYmUgcmV0dXJuZWQgaWYgdGhlIHNwZWNpZmllZCBjb25kaXRpb24gZXZhbHVhdGVzIHRvIHRydWUuXG4gICAqIEBwYXJhbSB2YWx1ZUlmRmFsc2UgQSB2YWx1ZSB0byBiZSByZXR1cm5lZCBpZiB0aGUgc3BlY2lmaWVkIGNvbmRpdGlvbiBldmFsdWF0ZXMgdG8gZmFsc2UuXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihjb25kaXRpb246IHN0cmluZywgdmFsdWVJZlRydWU6IGFueSwgdmFsdWVJZkZhbHNlOiBhbnkpIHtcbiAgICBzdXBlcihcIkZuOjpJZlwiLCBbY29uZGl0aW9uLCB2YWx1ZUlmVHJ1ZSwgdmFsdWVJZkZhbHNlXSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgZm9yIGEgY29uZGl0aW9uIHRoYXQgZXZhbHVhdGVzIHRvIGZhbHNlIG9yIHJldHVybnMgZmFsc2UgZm9yIGEgY29uZGl0aW9uIHRoYXQgZXZhbHVhdGVzIHRvIHRydWUuXG4gKiBgYEZuOjpOb3RgYCBhY3RzIGFzIGEgTk9UIG9wZXJhdG9yLlxuICovXG5jbGFzcyBGbk5vdCBleHRlbmRzIEZuQ29uZGl0aW9uQmFzZSB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGBgRm46Ok5vdGBgIGNvbmRpdGlvbiBmdW5jdGlvbi5cbiAgICogQHBhcmFtIGNvbmRpdGlvbiBBIGNvbmRpdGlvbiBzdWNoIGFzIGBgRm46OkVxdWFsc2BgIHRoYXQgZXZhbHVhdGVzIHRvIHRydWUgb3IgZmFsc2UuXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihjb25kaXRpb246IElSb3NDb25kaXRpb25FeHByZXNzaW9uKSB7XG4gICAgc3VwZXIoXCJGbjo6Tm90XCIsIFtjb25kaXRpb25dKTtcbiAgfVxufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiBhbnkgb25lIG9mIHRoZSBzcGVjaWZpZWQgY29uZGl0aW9ucyBldmFsdWF0ZSB0byB0cnVlLCBvciByZXR1cm5zIGZhbHNlIGlmXG4gKiBhbGwgb2YgdGhlIGNvbmRpdGlvbnMgZXZhbHVhdGVzIHRvIGZhbHNlLiBgYEZuOjpPcmBgIGFjdHMgYXMgYW4gT1Igb3BlcmF0b3IuIFRoZSBtaW5pbXVtIG51bWJlclxuICogb2YgY29uZGl0aW9ucyB0aGF0IHlvdSBjYW4gaW5jbHVkZSBpcyAyLCBhbmQgdGhlIG1heGltdW0gaXMgMTAuXG4gKi9cbmNsYXNzIEZuT3IgZXh0ZW5kcyBGbkNvbmRpdGlvbkJhc2Uge1xuICAvKipcbiAgICogQ3JlYXRlcyBhbiBgYEZuOjpPcmBgIGNvbmRpdGlvbiBmdW5jdGlvbi5cbiAgICogQHBhcmFtIGNvbmRpdGlvbiBBIGNvbmRpdGlvbiB0aGF0IGV2YWx1YXRlcyB0byB0cnVlIG9yIGZhbHNlLlxuICAgKi9cbiAgY29uc3RydWN0b3IoLi4uY29uZGl0aW9uOiBJUm9zQ29uZGl0aW9uRXhwcmVzc2lvbltdKSB7XG4gICAgc3VwZXIoXCJGbjo6T3JcIiwgY29uZGl0aW9uKTtcbiAgfVxufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiBhIHNwZWNpZmllZCBzdHJpbmcgbWF0Y2hlcyBhbGwgdmFsdWVzIGluIGEgbGlzdC5cbiAqL1xuY2xhc3MgRm5FYWNoTWVtYmVyRXF1YWxzIGV4dGVuZHMgRm5Db25kaXRpb25CYXNlIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gYGBGbjo6RWFjaE1lbWJlckVxdWFsc2BgIGZ1bmN0aW9uLlxuICAgKiBAcGFyYW0gbGlzdE9mU3RyaW5ncyBBIGxpc3Qgb2Ygc3RyaW5ncywgc3VjaCBhcyBcIkFcIiwgXCJCXCIsIFwiQ1wiLlxuICAgKiBAcGFyYW0gdmFsdWUgQSBzdHJpbmcsIHN1Y2ggYXMgXCJBXCIsIHRoYXQgeW91IHdhbnQgdG8gY29tcGFyZSBhZ2FpbnN0IGEgbGlzdCBvZiBzdHJpbmdzLlxuICAgKi9cbiAgY29uc3RydWN0b3IobGlzdE9mU3RyaW5nczogYW55LCB2YWx1ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIoXCJGbjo6RWFjaE1lbWJlckVxdWFsc1wiLCBbbGlzdE9mU3RyaW5ncywgdmFsdWVdKTtcbiAgfVxufVxuXG4vKipcbiAqIFRoZSBpbnRyaW5zaWMgZnVuY3Rpb24gYGBGbjo6Sm9pbmBgIGFwcGVuZHMgYSBzZXQgb2YgdmFsdWVzIGludG8gYSBzaW5nbGUgdmFsdWUsIHNlcGFyYXRlZCBieVxuICogdGhlIHNwZWNpZmllZCBkZWxpbWl0ZXIuIElmIGEgZGVsaW1pdGVyIGlzIHRoZSBlbXB0eSBzdHJpbmcsIHRoZSBzZXQgb2YgdmFsdWVzIGFyZSBjb25jYXRlbmF0ZWRcbiAqIHdpdGggbm8gZGVsaW1pdGVyLlxuICovXG5jbGFzcyBGbkpvaW4gaW1wbGVtZW50cyBJUmVzb2x2YWJsZSB7XG4gIHB1YmxpYyByZWFkb25seSBjcmVhdGlvblN0YWNrOiBzdHJpbmdbXTtcblxuICBwcml2YXRlIHJlYWRvbmx5IGRlbGltaXRlcjogc3RyaW5nO1xuICBwcml2YXRlIHJlYWRvbmx5IGxpc3RPZlZhbHVlczogYW55W107XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gYGBGbjo6Sm9pbmBgIGZ1bmN0aW9uLlxuICAgKiBAcGFyYW0gZGVsaW1pdGVyIFRoZSB2YWx1ZSB5b3Ugd2FudCB0byBvY2N1ciBiZXR3ZWVuIGZyYWdtZW50cy4gVGhlIGRlbGltaXRlciB3aWxsIG9jY3VyIGJldHdlZW4gZnJhZ21lbnRzIG9ubHkuXG4gICAqICAgICAgICAgIEl0IHdpbGwgbm90IHRlcm1pbmF0ZSB0aGUgZmluYWwgdmFsdWUuXG4gICAqIEBwYXJhbSBsaXN0T2ZWYWx1ZXMgVGhlIGxpc3Qgb2YgdmFsdWVzIHlvdSB3YW50IGNvbWJpbmVkLlxuICAgKi9cbiAgY29uc3RydWN0b3IoZGVsaW1pdGVyOiBzdHJpbmcsIGxpc3RPZlZhbHVlczogYW55W10pIHtcbiAgICBpZiAobGlzdE9mVmFsdWVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRm5Kb2luIHJlcXVpcmVzIGF0IGxlYXN0IG9uZSB2YWx1ZSB0byBiZSBwcm92aWRlZFwiKTtcbiAgICB9XG5cbiAgICB0aGlzLmRlbGltaXRlciA9IGRlbGltaXRlcjtcbiAgICB0aGlzLmxpc3RPZlZhbHVlcyA9IGxpc3RPZlZhbHVlcztcbiAgICB0aGlzLmNyZWF0aW9uU3RhY2sgPSBjYXB0dXJlU3RhY2tUcmFjZSgpO1xuICB9XG5cbiAgcHVibGljIHJlc29sdmUoY29udGV4dDogSVJlc29sdmVDb250ZXh0KTogYW55IHtcbiAgICBpZiAoVG9rZW4uaXNVbnJlc29sdmVkKHRoaXMubGlzdE9mVmFsdWVzKSkge1xuICAgICAgLy8gVGhpcyBpcyBhIGxpc3QgdG9rZW4sIGRvbid0IHRyeSB0byBkbyBzbWFydCB0aGluZ3Mgd2l0aCBpdC5cbiAgICAgIHJldHVybiB7IFwiRm46OkpvaW5cIjogW3RoaXMuZGVsaW1pdGVyLCB0aGlzLmxpc3RPZlZhbHVlc10gfTtcbiAgICB9XG4gICAgY29uc3QgcmVzb2x2ZWQgPSB0aGlzLnJlc29sdmVWYWx1ZXMoY29udGV4dCk7XG4gICAgaWYgKHJlc29sdmVkLmxlbmd0aCA9PT0gMSkge1xuICAgICAgcmV0dXJuIHJlc29sdmVkWzBdO1xuICAgIH1cbiAgICByZXR1cm4geyBcIkZuOjpKb2luXCI6IFt0aGlzLmRlbGltaXRlciwgcmVzb2x2ZWRdIH07XG4gIH1cblxuICBwdWJsaWMgdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIFRva2VuLmFzU3RyaW5nKHRoaXMsIHsgZGlzcGxheUhpbnQ6IFwiRm46OkpvaW5cIiB9KTtcbiAgfVxuXG4gIHB1YmxpYyB0b0pTT04oKSB7XG4gICAgcmV0dXJuIFwiPEZuOjpKb2luPlwiO1xuICB9XG5cbiAgLyoqXG4gICAqIE9wdGltaXphdGlvbjogaWYgYW4gRm46OkpvaW4gaXMgbmVzdGVkIGluIGFub3RoZXIgb25lIGFuZCB0aGV5IHNoYXJlIHRoZSBzYW1lIGRlbGltaXRlciwgdGhlbiBmbGF0dGVuIGl0IHVwLiBBbHNvLFxuICAgKiBpZiB0d28gY29uY2F0ZW5hdGVkIGVsZW1lbnRzIGFyZSBsaXRlcmFsIHN0cmluZ3MgKG5vdCB0b2tlbnMpLCB0aGVuIHByZS1jb25jYXRlbmF0ZSB0aGVtIHdpdGggdGhlIGRlbGltaXRlciwgdG9cbiAgICogZ2VuZXJhdGUgc2hvcnRlciBvdXRwdXQuXG4gICAqL1xuICBwcml2YXRlIHJlc29sdmVWYWx1ZXMoY29udGV4dDogSVJlc29sdmVDb250ZXh0KSB7XG4gICAgY29uc3QgcmVzb2x2ZWRWYWx1ZXMgPSB0aGlzLmxpc3RPZlZhbHVlcy5tYXAoKHgpID0+XG4gICAgICBSZWZlcmVuY2UuaXNSZWZlcmVuY2UoeCkgPyB4IDogY29udGV4dC5yZXNvbHZlKHgpXG4gICAgKTtcbiAgICByZXR1cm4gbWluaW1hbFJvc1RlbXBsYXRlSm9pbih0aGlzLmRlbGltaXRlciwgcmVzb2x2ZWRWYWx1ZXMpO1xuICB9XG59XG4iXX0=