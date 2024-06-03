"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FnJoin = exports.FnListMerge = exports.FnOr = exports.FnNot = exports.FnIf = exports.FnEquals = exports.FnAnd = exports.FnBase64Encode = exports.FnSub = exports.FnSplit = exports.FnSelect = exports.FnGetAZs = exports.FnGetAtt = exports.FnFindInMap = exports.FnRef = exports.FnSelectMapList = exports.FnMergeMapToList = exports.FnJq = exports.FnGetStackOutput = exports.FnMin = exports.FnMax = exports.FnCalculate = exports.FnAdd = exports.FnAvg = exports.FnGetJsonValue = exports.FnReplace = exports.FnBase64Decode = exports.FnStr = exports.Fn = void 0;
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
        // if (!Token.isUnresolved(value)) {
        //   return value.toString();
        // }
        return new FnStr(value).toString();
    }
    static base64Decode(data) {
        return new FnBase64Decode(data).toString();
    }
    static replace(replaceData, content) {
        return new FnReplace([replaceData, content]).toString();
    }
    static listMerge(valueList) {
        return new FnListMerge(valueList);
    }
    static getJsonValue(key, jsonData) {
        return new FnGetJsonValue([key, jsonData]).toString();
    }
    static avg(ndigits, values) {
        return token_1.Token.asNumber(new FnAvg([ndigits, values]));
    }
    static add(values) {
        return token_1.Token.asAny(new FnAdd(values));
    }
    static calculate(values, ndigits, para) {
        return token_1.Token.asNumber(new FnCalculate([values, ndigits, para]));
    }
    static max(values) {
        return token_1.Token.asNumber(new FnMax(values));
    }
    static min(values) {
        return token_1.Token.asNumber(new FnMin(values));
    }
    static jq(method, script, inputString) {
        return token_1.Token.asAny(new FnJq([method, script, inputString]));
    }
    static mergeMapToList(mapList) {
        return new FnMergeMapToList(mapList);
    }
    static selectMapList(key, mapList) {
        return new FnSelectMapList([key, mapList]);
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
        return token_1.Token.asList(new FnSplit([delimiter, source]));
    }
    /**
     * The intrinsic function ``Fn::Select`` returns a single object from a list of objects by index.
     * @param index The index of the object to retrieve. This must be a value from zero to N-1, where N represents the number of elements in the array.
     * @param array The list of objects to select from. This list must not be null, nor can it have null entries.
     * @returns a token represented as a string
     */
    static select(index, array) {
        return token_1.Token.asAny(new FnSelect([index, array]));
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
        if (variables === undefined) {
            return new FnSub(body).toString();
        }
        return new FnSub([body, variables]).toString();
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
        return token_1.Token.asAny(new FnGetStackOutput([stackID, outputKey, stackRegion]));
    }
    /**
     * The intrinsic function ``Fn::FindInMap`` returns the value corresponding to
     * keys in a two-level map that is declared in the Mappings section.
     * @returns a token represented as a string
     */
    static findInMap(mapName, topLevelKey, secondLevelKey) {
        return token_1.Token.asAny(new FnFindInMap([mapName, topLevelKey, secondLevelKey]));
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
     * param listOfStrings A list of strings, such as "A", "B", "C".
     * param value A string, such as "A", that you want to compare against a list
     * of strings.
     * @returns an FnCondition token
     */
    // static conditionEachMemberEquals(
    //   listOfStrings: string[],
    //   value: string
    // ): IRosConditionExpression {
    //   return new FnEachMemberEquals(listOfStrings, value);
    // }
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
exports.FnStr = FnStr;
class FnBase64Decode extends FnBase {
    constructor(data) {
        super("Fn::Base64Decode", data);
    }
}
exports.FnBase64Decode = FnBase64Decode;
class FnReplace extends FnBase {
    /**
     * Creates an ``Replace`` function.
     */
    constructor(value) {
        super("Fn::Replace", value);
    }
}
exports.FnReplace = FnReplace;
class FnGetJsonValue extends FnBase {
    /**
     * Creates an ``GetJsonValue`` function.
     */
    constructor(value) {
        super("Fn::GetJsonValue", value);
    }
}
exports.FnGetJsonValue = FnGetJsonValue;
class FnAvg extends FnBase {
    /**
     * Creates an ``Avg`` function.
     */
    constructor(value) {
        super("Fn::Avg", value);
    }
}
exports.FnAvg = FnAvg;
class FnAdd extends FnBase {
    /**
     * Creates an ``Add`` function.
     */
    constructor(values) {
        super("Fn::Add", values);
    }
}
exports.FnAdd = FnAdd;
class FnCalculate extends FnBase {
    /**
     * Creates an ``Calculate`` function.
     */
    constructor(value) {
        super("Fn::Calculate", value);
    }
}
exports.FnCalculate = FnCalculate;
class FnMax extends FnBase {
    /**
     * Creates an ``Max`` function.
     */
    constructor(values) {
        super("Fn::Max", values);
    }
}
exports.FnMax = FnMax;
class FnMin extends FnBase {
    /**
     * Creates an ``Min`` function.
     */
    constructor(values) {
        super("Fn::Min", values);
    }
}
exports.FnMin = FnMin;
class FnGetStackOutput extends FnBase {
    /**
     * Creates an ``GetStackOutput`` function.
     */
    constructor(value) {
        super("Fn::GetStackOutput", value);
    }
}
exports.FnGetStackOutput = FnGetStackOutput;
class FnJq extends FnBase {
    /**
     * Creates an ``Jq`` function.
     */
    constructor(value) {
        super("Fn::Jq", value);
    }
}
exports.FnJq = FnJq;
class FnMergeMapToList extends FnBase {
    /**
     * Creates an ``FnMergeMapToList`` function.
     */
    constructor(mapList) {
        super("Fn::MergeMapToList", mapList);
    }
}
exports.FnMergeMapToList = FnMergeMapToList;
class FnSelectMapList extends FnBase {
    /**
     * Creates an ``FnMergeMapToList`` function.
     */
    constructor(value) {
        super("Fn::SelectMapList", value);
    }
}
exports.FnSelectMapList = FnSelectMapList;
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
exports.FnRef = FnRef;
/**
 * The intrinsic function ``Fn::FindInMap`` returns the value corresponding to keys in a two-level
 * map that is declared in the Mappings section.
 */
class FnFindInMap extends FnBase {
    /**
     * Creates an ``Fn::FindInMap`` function.
     * param mapName The logical name of a mapping declared in the Mappings section that contains the keys and values.
     * param topLevelKey The top-level key name. Its value is a list of key-value pairs.
     * param secondLevelKey The second-level key name, which is set to one of the keys from the list assigned to TopLevelKey.
     */
    constructor(value) {
        super("Fn::FindInMap", value);
    }
}
exports.FnFindInMap = FnFindInMap;
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
exports.FnGetAtt = FnGetAtt;
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
        super("Fn::GetAZs", region);
    }
}
exports.FnGetAZs = FnGetAZs;
/**
 * The intrinsic function ``Fn::Select`` returns a single object from a list of objects by index.
 */
class FnSelect extends FnBase {
    /**
     * Creates an ``Fn::Select`` function.
     * param index The index of the object to retrieve. This must be a value from zero to N-1, where N represents the number of elements in the array.
     * param array The list of objects to select from. This list must not be null, nor can it have null entries.
     */
    constructor(value) {
        super("Fn::Select", value);
    }
}
exports.FnSelect = FnSelect;
/**
 * To split a string into a list of string values so that you can select an element from the
 * resulting string list, use the ``Fn::Split`` intrinsic function. Specify the location of splits
 * with a delimiter, such as , (a comma). After you split a string, use the ``Fn::Select`` function
 * to pick a specific element.
 */
class FnSplit extends FnBase {
    /**
     * Create an ``Fn::Split`` function.
     * param delimiter A string value that determines where the source string is divided.
     * param source The string value that you want to split.
     */
    constructor(value) {
        super("Fn::Split", value);
    }
}
exports.FnSplit = FnSplit;
/**
 * The intrinsic function ``Fn::Sub`` substitutes variables in an input string with values that
 * you specify. In your templates, you can use this function to construct commands or outputs
 * that include values that aren't available until you create or update a stack.
 */
class FnSub extends FnBase {
    /**
     * Creates an ``Fn::Sub`` function.
     * param body A string with variables that Ros Template substitutes with their
     *       associated values at runtime. Write variables as ${MyVarName}. Variables
     *       can be template parameter names, resource logical IDs, resource attributes,
     *       or a variable in a key-value map. If you specify only template parameter names,
     *       resource logical IDs, and resource attributes, don't specify a key-value map.
     * param variables The name of a variable that you included in the String parameter.
     *          The value that Ros Template substitutes for the associated variable name at runtime.
     */
    constructor(value) {
        super("Fn::Sub", value);
    }
}
exports.FnSub = FnSub;
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
exports.FnBase64Encode = FnBase64Encode;
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
exports.FnAnd = FnAnd;
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
exports.FnEquals = FnEquals;
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
exports.FnIf = FnIf;
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
exports.FnNot = FnNot;
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
exports.FnOr = FnOr;
/**
 * Returns true if a specified string matches all values in a list.
 */
// class FnEachMemberEquals extends FnConditionBase {
//   /**
//    * Creates an ``Fn::EachMemberEquals`` function.
//    * @param listOfStrings A list of strings, such as "A", "B", "C".
//    * @param value A string, such as "A", that you want to compare against a list of strings.
//    */
//   constructor(listOfStrings: any, value: string) {
//     super("Fn::EachMemberEquals", [listOfStrings, value]);
//   }
// }
class FnListMerge {
    /**
     * Creates an ``ListMerge`` function.
     */
    constructor(listOfValues) {
        if (listOfValues.length === 0) {
            throw new Error("FnListMerge requires at least one value to be provided");
        }
        this.listOfValues = listOfValues;
        this.creationStack = stack_trace_1.captureStackTrace();
    }
    resolve(context) {
        if (token_1.Token.isUnresolved(this.listOfValues)) {
            // This is a list token, don't try to do smart things with it.
            return { "Fn::ListMerge": this.listOfValues };
        }
        const resolved = this.resolveValues(context);
        if (resolved.length === 1) {
            return resolved[0];
        }
        return { "Fn::ListMerge": resolved };
    }
    toString() {
        return token_1.Token.asString(this, { displayHint: "Fn::ListMerge" });
    }
    toJSON() {
        return "<Fn::ListMerge>";
    }
    /**
     * Optimization: if an Fn::ListMerge is nested in another one, then flatten it up.
     */
    resolveValues(context) {
        const resolvedValues = this.listOfValues.map((x) => reference_1.Reference.isReference(x) ? x : context.resolve(x));
        return template_lang_1.minimalRosTemplateListMerge(resolvedValues);
    }
}
exports.FnListMerge = FnListMerge;
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
exports.FnJoin = FnJoin;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9zLWZuLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicm9zLWZuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLDJEQUE0RjtBQUM1RixtREFBZ0Q7QUFDaEQsMkNBQXdDO0FBQ3hDLG1DQUFnQztBQUNoQywrQ0FBa0Q7QUFJbEQsaUNBQWlDO0FBRWpDOzs7R0FHRztBQUNILE1BQWEsRUFBRTtJQUNOLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBVTtRQUMxQixvQ0FBb0M7UUFDcEMsNkJBQTZCO1FBQzdCLElBQUk7UUFDSixPQUFPLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3JDLENBQUM7SUFFTSxNQUFNLENBQUMsWUFBWSxDQUFDLElBQVk7UUFDckMsT0FBTyxJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM3QyxDQUFDO0lBRU0sTUFBTSxDQUFDLE9BQU8sQ0FDbkIsV0FBbUMsRUFDbkMsT0FBZTtRQUVmLE9BQU8sSUFBSSxTQUFTLENBQUMsQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMxRCxDQUFDO0lBRU0sTUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFzQztRQUM1RCxPQUFPLElBQUksV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFTSxNQUFNLENBQUMsWUFBWSxDQUFDLEdBQVcsRUFBRSxRQUFhO1FBQ25ELE9BQU8sSUFBSSxjQUFjLENBQUMsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN4RCxDQUFDO0lBRU0sTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFlLEVBQUUsTUFBZ0I7UUFDakQsT0FBTyxhQUFLLENBQUMsUUFBUSxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztJ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WUFBWSxDQUFDO0lBQ3RCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ssYUFBYSxDQUFDLE9BQXdCO1FBQzVDLE1BQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FDakQscUJBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FDbEQsQ0FBQztRQUNGLE9BQU8sc0NBQXNCLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxjQUFjLENBQUMsQ0FBQztJQUNoRSxDQUFDO0NBQ0Y7QUFyREQsd0JBcURDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVJvc0NvbmRpdGlvbkV4cHJlc3Npb24gfSBmcm9tIFwiLi9yb3MtY29uZGl0aW9uXCI7XG5pbXBvcnQge21pbmltYWxSb3NUZW1wbGF0ZUpvaW4sIG1pbmltYWxSb3NUZW1wbGF0ZUxpc3RNZXJnZX0gZnJvbSBcIi4vcHJpdmF0ZS90ZW1wbGF0ZS1sYW5nXCI7XG5pbXBvcnQgeyBJbnRyaW5zaWMgfSBmcm9tIFwiLi9wcml2YXRlL2ludHJpbnNpY1wiO1xuaW1wb3J0IHsgUmVmZXJlbmNlIH0gZnJvbSBcIi4vcmVmZXJlbmNlXCI7XG5pbXBvcnQgeyBUb2tlbiB9IGZyb20gXCIuL3Rva2VuXCI7XG5pbXBvcnQgeyBjYXB0dXJlU3RhY2tUcmFjZSB9IGZyb20gXCIuL3N0YWNrLXRyYWNlXCI7XG5pbXBvcnQgeyBJUmVzb2x2ZUNvbnRleHQsIElSZXNvbHZhYmxlIH0gZnJvbSBcIi4vcmVzb2x2YWJsZVwiO1xuaW1wb3J0ICogYXMgcm9zIGZyb20gXCIuL2luZGV4XCI7XG5cbi8vIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aFxuXG4vKipcbiAqIFJlc291cmNlIE9yY2hlc3RyYXRpb24gU2VydmljZSBpbnRyaW5zaWMgZnVuY3Rpb25zLlxuICogaHR0cHM6Ly9oZWxwLmFsaXl1bi5jb20vZG9jdW1lbnRfZGV0YWlsLzI4ODUyLmh0bWxcbiAqL1xuZXhwb3J0IGNsYXNzIEZuIHtcbiAgcHVibGljIHN0YXRpYyBzdHIodmFsdWU6IGFueSk6IHN0cmluZyB7XG4gICAgLy8gaWYgKCFUb2tlbi5pc1VucmVzb2x2ZWQodmFsdWUpKSB7XG4gICAgLy8gICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKTtcbiAgICAvLyB9XG4gICAgcmV0dXJuIG5ldyBGblN0cih2YWx1ZSkudG9TdHJpbmcoKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgYmFzZTY0RGVjb2RlKGRhdGE6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG5ldyBGbkJhc2U2NERlY29kZShkYXRhKS50b1N0cmluZygpO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyByZXBsYWNlKFxuICAgIHJlcGxhY2VEYXRhOiB7IFtrZXk6IHN0cmluZ106IGFueSB9LFxuICAgIGNvbnRlbnQ6IHN0cmluZ1xuICApOiBzdHJpbmcge1xuICAgIHJldHVybiBuZXcgRm5SZXBsYWNlKFtyZXBsYWNlRGF0YSwgY29udGVudF0pLnRvU3RyaW5nKCk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGxpc3RNZXJnZSh2YWx1ZUxpc3Q6IChhbnlbXSB8IHJvcy5JUmVzb2x2YWJsZSlbXSk6IElSZXNvbHZhYmxlIHtcbiAgICByZXR1cm4gbmV3IEZuTGlzdE1lcmdlKHZhbHVlTGlzdCk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGdldEpzb25WYWx1ZShrZXk6IHN0cmluZywganNvbkRhdGE6IGFueSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG5ldyBGbkdldEpzb25WYWx1ZShba2V5LCBqc29uRGF0YV0pLnRvU3RyaW5nKCk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGF2ZyhuZGlnaXRzOiBudW1iZXIsIHZhbHVlczogbnVtYmVyW10pOiBudW1iZXIge1xuICAgIHJldHVybiBUb2tlbi5hc051bWJlcihuZXcgRm5BdmcoW25kaWdpdHMsIHZhbHVlc10pKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgYWRkKHZhbHVlczogbnVtYmVyIHwgYW55W10gfCB7W2tleTpzdHJpbmddOiBhbnl9KTogSVJlc29sdmFibGUge1xuICAgIHJldHVybiBUb2tlbi5hc0FueShuZXcgRm5BZGQodmFsdWVzKSk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGNhbGN1bGF0ZShcbiAgICB2YWx1ZXM6IHN0cmluZyxcbiAgICBuZGlnaXRzOiBudW1iZXIsXG4gICAgcGFyYTogbnVtYmVyW11cbiAgKTogbnVtYmVyIHtcbiAgICByZXR1cm4gVG9rZW4uYXNOdW1iZXIobmV3IEZuQ2FsY3VsYXRlKFt2YWx1ZXMsIG5kaWdpdHMsIHBhcmFdKSk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIG1heCh2YWx1ZXM6IG51bWJlcltdKTogbnVtYmVyIHtcbiAgICByZXR1cm4gVG9rZW4uYXNOdW1iZXIobmV3IEZuTWF4KHZhbHVlcykpO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBtaW4odmFsdWVzOiBudW1iZXJbXSk6IG51bWJlciB7XG4gICAgcmV0dXJuIFRva2VuLmFzTnVtYmVyKG5ldyBGbk1pbih2YWx1ZXMpKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMganEobWV0aG9kOiBzdHJpbmcsIHNjcmlwdDogc3RyaW5nLCBpbnB1dFN0cmluZzogc3RyaW5nIHwge1trZXk6c3RyaW5nXTogYW55fSk6IElSZXNvbHZhYmxlIHtcbiAgICByZXR1cm4gVG9rZW4uYXNBbnkobmV3IEZuSnEoW21ldGhvZCwgc2NyaXB0LCBpbnB1dFN0cmluZ10pKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgbWVyZ2VNYXBUb0xpc3QobWFwTGlzdDoge1trZXk6IHN0cmluZ106IGFueVtdfVtdKTogSVJlc29sdmFibGUge1xuICAgIHJldHVybiBuZXcgRm5NZXJnZU1hcFRvTGlzdChtYXBMaXN0KTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgc2VsZWN0TWFwTGlzdChrZXk6IHN0cmluZywgbWFwTGlzdDoge1trZXk6IHN0cmluZ106IGFueX1bXSk6IElSZXNvbHZhYmxlIHtcbiAgICByZXR1cm4gbmV3IEZuU2VsZWN0TWFwTGlzdChba2V5LCBtYXBMaXN0XSk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIGBgUmVmYGAgaW50cmluc2ljIGZ1bmN0aW9uIHJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSBzcGVjaWZpZWQgcGFyYW1ldGVyIG9yIHJlc291cmNlLlxuICAgKiBOb3RlIHRoYXQgaXQgZG9lc24ndCB2YWxpZGF0ZSB0aGUgbG9naWNhbE5hbWUsIGl0IG1haW5seSBzZXJ2ZXMgcGFyZW1ldGVyL3Jlc291cmNlIHJlZmVyZW5jZSBkZWZpbmVkIGluIGEgYGBSb3NJbmNsdWRlYGAgdGVtcGxhdGUuXG4gICAqIEBwYXJhbSBsb2dpY2FsTmFtZSBUaGUgbG9naWNhbCBuYW1lIG9mIGEgcGFyYW1ldGVyL3Jlc291cmNlIGZvciB3aGljaCB5b3Ugd2FudCB0byByZXRyaWV2ZSBpdHMgdmFsdWUuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIHJlZihsb2dpY2FsTmFtZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gbmV3IEZuUmVmKGxvZ2ljYWxOYW1lKS50b1N0cmluZygpO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBwdWJsaWMgc3RhdGljIF9yZWYobG9naWNhbElkOiBzdHJpbmcpOiBJUmVzb2x2YWJsZSB7XG4gICAgcmV0dXJuIG5ldyBGblJlZihsb2dpY2FsSWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBgYEZuOjpHZXRBdHRgYCBpbnRyaW5zaWMgZnVuY3Rpb24gcmV0dXJucyB0aGUgdmFsdWUgb2YgYW4gYXR0cmlidXRlXG4gICAqIGZyb20gYSByZXNvdXJjZSBpbiB0aGUgdGVtcGxhdGUuXG4gICAqIEBwYXJhbSBsb2dpY2FsTmFtZU9mUmVzb3VyY2UgVGhlIGxvZ2ljYWwgbmFtZSAoYWxzbyBjYWxsZWQgbG9naWNhbCBJRCkgb2ZcbiAgICogdGhlIHJlc291cmNlIHRoYXQgY29udGFpbnMgdGhlIGF0dHJpYnV0ZSB0aGF0IHlvdSB3YW50LlxuICAgKiBAcGFyYW0gYXR0cmlidXRlTmFtZSBUaGUgbmFtZSBvZiB0aGUgcmVzb3VyY2Utc3BlY2lmaWMgYXR0cmlidXRlIHdob3NlXG4gICAqIHZhbHVlIHlvdSB3YW50LiBTZWUgdGhlIHJlc291cmNlJ3MgcmVmZXJlbmNlIHBhZ2UgZm9yIGRldGFpbHMgYWJvdXQgdGhlXG4gICAqIGF0dHJpYnV0ZXMgYXZhaWxhYmxlIGZvciB0aGF0IHJlc291cmNlIHR5cGUuXG4gICAqIEByZXR1cm5zIGFuIElSZXNvbHZhYmxlIG9iamVjdFxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBnZXRBdHQoXG4gICAgbG9naWNhbE5hbWVPZlJlc291cmNlOiBzdHJpbmcsXG4gICAgYXR0cmlidXRlTmFtZTogc3RyaW5nXG4gICk6IElSZXNvbHZhYmxlIHtcbiAgICByZXR1cm4gbmV3IEZuR2V0QXR0KGxvZ2ljYWxOYW1lT2ZSZXNvdXJjZSwgYXR0cmlidXRlTmFtZSk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIGludHJpbnNpYyBmdW5jdGlvbiBgYEZuOjpKb2luYGAgYXBwZW5kcyBhIHNldCBvZiB2YWx1ZXMgaW50byBhIHNpbmdsZVxuICAgKiB2YWx1ZSwgc2VwYXJhdGVkIGJ5IHRoZSBzcGVjaWZpZWQgZGVsaW1pdGVyLiBJZiBhIGRlbGltaXRlciBpcyB0aGUgZW1wdHlcbiAgICogc3RyaW5nLCB0aGUgc2V0IG9mIHZhbHVlcyBhcmUgY29uY2F0ZW5hdGVkIHdpdGggbm8gZGVsaW1pdGVyLlxuICAgKiBAcGFyYW0gZGVsaW1pdGVyIFRoZSB2YWx1ZSB5b3Ugd2FudCB0byBvY2N1ciBiZXR3ZWVuIGZyYWdtZW50cy4gVGhlXG4gICAqIGRlbGltaXRlciB3aWxsIG9jY3VyIGJldHdlZW4gZnJhZ21lbnRzIG9ubHkuIEl0IHdpbGwgbm90IHRlcm1pbmF0ZSB0aGVcbiAgICogZmluYWwgdmFsdWUuXG4gICAqIEBwYXJhbSBsaXN0T2ZWYWx1ZXMgVGhlIGxpc3Qgb2YgdmFsdWVzIHlvdSB3YW50IGNvbWJpbmVkLlxuICAgKiBAcmV0dXJucyBhIHRva2VuIHJlcHJlc2VudGVkIGFzIGEgc3RyaW5nXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGpvaW4oZGVsaW1pdGVyOiBzdHJpbmcsIGxpc3RPZlZhbHVlczogKHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSlbXSk6IHN0cmluZyB7XG4gICAgaWYgKGxpc3RPZlZhbHVlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkZuSm9pbiByZXF1aXJlcyBhdCBsZWFzdCBvbmUgdmFsdWUgdG8gYmUgcHJvdmlkZWRcIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBGbkpvaW4oZGVsaW1pdGVyLCBsaXN0T2ZWYWx1ZXMpLnRvU3RyaW5nKCk7XG4gIH1cblxuICAvKipcbiAgICogVG8gc3BsaXQgYSBzdHJpbmcgaW50byBhIGxpc3Qgb2Ygc3RyaW5nIHZhbHVlcyBzbyB0aGF0IHlvdSBjYW4gc2VsZWN0IGFuIGVsZW1lbnQgZnJvbSB0aGVcbiAgICogcmVzdWx0aW5nIHN0cmluZyBsaXN0LCB1c2UgdGhlIGBgRm46OlNwbGl0YGAgaW50cmluc2ljIGZ1bmN0aW9uLiBTcGVjaWZ5IHRoZSBsb2NhdGlvbiBvZiBzcGxpdHNcbiAgICogd2l0aCBhIGRlbGltaXRlciwgc3VjaCBhcyAsIChhIGNvbW1hKS4gQWZ0ZXIgeW91IHNwbGl0IGEgc3RyaW5nLCB1c2UgdGhlIGBgRm46OlNlbGVjdGBgIGZ1bmN0aW9uXG4gICAqIHRvIHBpY2sgYSBzcGVjaWZpYyBlbGVtZW50LlxuICAgKiBAcGFyYW0gZGVsaW1pdGVyIEEgc3RyaW5nIHZhbHVlIHRoYXQgZGV0ZXJtaW5lcyB3aGVyZSB0aGUgc291cmNlIHN0cmluZyBpcyBkaXZpZGVkLlxuICAgKiBAcGFyYW0gc291cmNlIFRoZSBzdHJpbmcgdmFsdWUgdGhhdCB5b3Ugd2FudCB0byBzcGxpdC5cbiAgICogQHJldHVybnMgYSB0b2tlbiByZXByZXNlbnRlZCBhcyBhIHN0cmluZyBhcnJheVxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBzcGxpdChkZWxpbWl0ZXI6IHN0cmluZywgc291cmNlOiBzdHJpbmcpOiBzdHJpbmdbXSB7XG4gICAgLy8gc2hvcnQtY2lyY3V0IGlmIHNvdXJjZSBpcyBub3QgYSB0b2tlblxuICAgIGlmICghVG9rZW4uaXNVbnJlc29sdmVkKHNvdXJjZSkpIHtcbiAgICAgIHJldHVybiBzb3VyY2Uuc3BsaXQoZGVsaW1pdGVyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gVG9rZW4uYXNMaXN0KG5ldyBGblNwbGl0KFtkZWxpbWl0ZXIsIHNvdXJjZV0pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgaW50cmluc2ljIGZ1bmN0aW9uIGBgRm46OlNlbGVjdGBgIHJldHVybnMgYSBzaW5nbGUgb2JqZWN0IGZyb20gYSBsaXN0IG9mIG9iamVjdHMgYnkgaW5kZXguXG4gICAqIEBwYXJhbSBpbmRleCBUaGUgaW5kZXggb2YgdGhlIG9iamVjdCB0byByZXRyaWV2ZS4gVGhpcyBtdXN0IGJlIGEgdmFsdWUgZnJvbSB6ZXJvIHRvIE4tMSwgd2hlcmUgTiByZXByZXNlbnRzIHRoZSBudW1iZXIgb2YgZWxlbWVudHMgaW4gdGhlIGFycmF5LlxuICAgKiBAcGFyYW0gYXJyYXkgVGhlIGxpc3Qgb2Ygb2JqZWN0cyB0byBzZWxlY3QgZnJvbS4gVGhpcyBsaXN0IG11c3Qgbm90IGJlIG51bGwsIG5vciBjYW4gaXQgaGF2ZSBudWxsIGVudHJpZXMuXG4gICAqIEByZXR1cm5zIGEgdG9rZW4gcmVwcmVzZW50ZWQgYXMgYSBzdHJpbmdcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgc2VsZWN0KGluZGV4OiBudW1iZXIgfCBzdHJpbmcsIGFycmF5OiBhbnkpOiBJUmVzb2x2YWJsZSB7XG4gICAgcmV0dXJuIFRva2VuLmFzQW55KG5ldyBGblNlbGVjdChbaW5kZXgsIGFycmF5XSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBpbnRyaW5zaWMgZnVuY3Rpb24gYGBGbjo6U3ViYGAgc3Vic3RpdHV0ZXMgdmFyaWFibGVzIGluIGFuIGlucHV0IHN0cmluZ1xuICAgKiB3aXRoIHZhbHVlcyB0aGF0IHlvdSBzcGVjaWZ5LiBJbiB5b3VyIHRlbXBsYXRlcywgeW91IGNhbiB1c2UgdGhpcyBmdW5jdGlvblxuICAgKiB0byBjb25zdHJ1Y3QgY29tbWFuZHMgb3Igb3V0cHV0cyB0aGF0IGluY2x1ZGUgdmFsdWVzIHRoYXQgYXJlbid0IGF2YWlsYWJsZVxuICAgKiB1bnRpbCB5b3UgY3JlYXRlIG9yIHVwZGF0ZSBhIHN0YWNrLlxuICAgKiBAcGFyYW0gYm9keSBBIHN0cmluZyB3aXRoIHZhcmlhYmxlcyB0aGF0IFJvcyBUZW1wbGF0ZSBzdWJzdGl0dXRlc1xuICAgKiB3aXRoIHRoZWlyIGFzc29jaWF0ZWQgdmFsdWVzIGF0IHJ1bnRpbWUuIFdyaXRlIHZhcmlhYmxlcyBhcyAke015VmFyTmFtZX0uXG4gICAqIFZhcmlhYmxlcyBjYW4gYmUgdGVtcGxhdGUgcGFyYW1ldGVyIG5hbWVzLCByZXNvdXJjZSBsb2dpY2FsIElEcywgcmVzb3VyY2VcbiAgICogYXR0cmlidXRlcywgb3IgYSB2YXJpYWJsZSBpbiBhIGtleS12YWx1ZSBtYXAuIElmIHlvdSBzcGVjaWZ5IG9ubHkgdGVtcGxhdGVcbiAgICogcGFyYW1ldGVyIG5hbWVzLCByZXNvdXJjZSBsb2dpY2FsIElEcywgYW5kIHJlc291cmNlIGF0dHJpYnV0ZXMsIGRvbid0XG4gICAqIHNwZWNpZnkgYSBrZXktdmFsdWUgbWFwLlxuICAgKiBAcGFyYW0gdmFyaWFibGVzIFRoZSBuYW1lIG9mIGEgdmFyaWFibGUgdGhhdCB5b3UgaW5jbHVkZWQgaW4gdGhlIFN0cmluZ1xuICAgKiBwYXJhbWV0ZXIuIFRoZSB2YWx1ZSB0aGF0IFJvcyBUZW1wbGF0ZSBzdWJzdGl0dXRlcyBmb3IgdGhlIGFzc29jaWF0ZWRcbiAgICogdmFyaWFibGUgbmFtZSBhdCBydW50aW1lLlxuICAgKiBAcmV0dXJucyBhIHRva2VuIHJlcHJlc2VudGVkIGFzIGEgc3RyaW5nXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIHN1YihcbiAgICBib2R5OiBzdHJpbmcsXG4gICAgdmFyaWFibGVzPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICApOiBzdHJpbmcge1xuICAgIGlmICh2YXJpYWJsZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIG5ldyBGblN1Yihib2R5KS50b1N0cmluZygpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IEZuU3ViKFtib2R5LCB2YXJpYWJsZXNdKS50b1N0cmluZygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBpbnRyaW5zaWMgZnVuY3Rpb24gYGBGbjo6QmFzZTY0YGAgcmV0dXJucyB0aGUgQmFzZTY0IHJlcHJlc2VudGF0aW9uIG9mXG4gICAqIHRoZSBpbnB1dCBzdHJpbmcuXG4gICAqIEBwYXJhbSBkYXRhIFRoZSBzdHJpbmcgdmFsdWUgeW91IHdhbnQgdG8gY29udmVydCB0byBCYXNlNjQuXG4gICAqIEByZXR1cm5zIGEgdG9rZW4gcmVwcmVzZW50ZWQgYXMgYSBzdHJpbmdcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgYmFzZTY0RW5jb2RlKGRhdGE6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG5ldyBGbkJhc2U2NEVuY29kZShkYXRhKS50b1N0cmluZygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBpbnRyaW5zaWMgZnVuY3Rpb24gYGBGbjo6R2V0QVpzYGAgcmV0dXJucyBhbiBhcnJheSB0aGF0IGxpc3RzXG4gICAqIEF2YWlsYWJpbGl0eSBab25lcyBmb3IgYSBzcGVjaWZpZWQgcmVnaW9uLiBCZWNhdXNlIGN1c3RvbWVycyBoYXZlIGFjY2VzcyB0b1xuICAgKiBkaWZmZXJlbnQgQXZhaWxhYmlsaXR5IFpvbmVzLCB0aGUgaW50cmluc2ljIGZ1bmN0aW9uIGBgRm46OkdldEFac2BgIGVuYWJsZXNcbiAgICogdGVtcGxhdGUgYXV0aG9ycyB0byB3cml0ZSB0ZW1wbGF0ZXMgdGhhdCBhZGFwdCB0byB0aGUgY2FsbGluZyB1c2VyJ3NcbiAgICogYWNjZXNzLiBUaGF0IHdheSB5b3UgZG9uJ3QgaGF2ZSB0byBoYXJkLWNvZGUgYSBmdWxsIGxpc3Qgb2YgQXZhaWxhYmlsaXR5XG4gICAqIFpvbmVzIGZvciBhIHNwZWNpZmllZCByZWdpb24uXG4gICAqIEBwYXJhbSByZWdpb24gVGhlIG5hbWUgb2YgdGhlIHJlZ2lvbiBmb3Igd2hpY2ggeW91IHdhbnQgdG8gZ2V0IHRoZVxuICAgKiBBdmFpbGFiaWxpdHkgWm9uZXMuIFlvdSBjYW4gdXNlIHRoZSBST1M6OlJlZ2lvbiBwc2V1ZG8gcGFyYW1ldGVyIHRvIHNwZWNpZnlcbiAgICogdGhlIHJlZ2lvbiBpbiB3aGljaCB0aGUgc3RhY2sgaXMgY3JlYXRlZC4gU3BlY2lmeWluZyBhbiBlbXB0eSBzdHJpbmcgaXNcbiAgICogZXF1aXZhbGVudCB0byBzcGVjaWZ5aW5nIFJPUzo6UmVnaW9uLlxuICAgKiBAcmV0dXJucyBhIHRva2VuIHJlcHJlc2VudGVkIGFzIGEgc3RyaW5nIGFycmF5XG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGdldEF6cyhyZWdpb246IHN0cmluZyk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gVG9rZW4uYXNMaXN0KG5ldyBGbkdldEFacyhyZWdpb24pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgaW50cmluc2ljIGZ1bmN0aW9uIGBgRm46OkdldFN0YWNrT3V0cHV0YGAgcmV0dXJucyB0aGUgdmFsdWUgb2YgYW4gb3V0cHV0XG4gICAqIGV4cG9ydGVkIGJ5IGFub3RoZXIgc3RhY2suXG4gICAqIEByZXR1cm5zIGEgdG9rZW4gcmVwcmVzZW50ZWQgYXMgYSBzdHJpbmdcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgZ2V0U3RhY2tPdXRwdXQoXG4gICAgc3RhY2tJRDogc3RyaW5nLFxuICAgIG91dHB1dEtleTogc3RyaW5nLFxuICAgIHN0YWNrUmVnaW9uPzogc3RyaW5nXG4gICk6IElSZXNvbHZhYmxlIHtcbiAgICByZXR1cm4gVG9rZW4uYXNBbnkobmV3IEZuR2V0U3RhY2tPdXRwdXQoW3N0YWNrSUQsIG91dHB1dEtleSwgc3RhY2tSZWdpb25dKSk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIGludHJpbnNpYyBmdW5jdGlvbiBgYEZuOjpGaW5kSW5NYXBgYCByZXR1cm5zIHRoZSB2YWx1ZSBjb3JyZXNwb25kaW5nIHRvXG4gICAqIGtleXMgaW4gYSB0d28tbGV2ZWwgbWFwIHRoYXQgaXMgZGVjbGFyZWQgaW4gdGhlIE1hcHBpbmdzIHNlY3Rpb24uXG4gICAqIEByZXR1cm5zIGEgdG9rZW4gcmVwcmVzZW50ZWQgYXMgYSBzdHJpbmdcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgZmluZEluTWFwKFxuICAgIG1hcE5hbWU6IHN0cmluZyxcbiAgICB0b3BMZXZlbEtleTogc3RyaW5nLFxuICAgIHNlY29uZExldmVsS2V5OiBzdHJpbmdcbiAgKTogSVJlc29sdmFibGUge1xuICAgIHJldHVybiBUb2tlbi5hc0FueShuZXcgRm5GaW5kSW5NYXAoW21hcE5hbWUsIHRvcExldmVsS2V5LCBzZWNvbmRMZXZlbEtleV0pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgYWxsIHRoZSBzcGVjaWZpZWQgY29uZGl0aW9ucyBldmFsdWF0ZSB0byB0cnVlLCBvciByZXR1cm5zXG4gICAqIGZhbHNlIGlmIGFueSBvbmUgb2YgdGhlIGNvbmRpdGlvbnMgZXZhbHVhdGVzIHRvIGZhbHNlLiBgYEZuOjpBbmRgYCBhY3RzIGFzXG4gICAqIGFuIEFORCBvcGVyYXRvci4gVGhlIG1pbmltdW0gbnVtYmVyIG9mIGNvbmRpdGlvbnMgdGhhdCB5b3UgY2FuIGluY2x1ZGUgaXNcbiAgICogMiwgYW5kIHRoZSBtYXhpbXVtIGlzIDEwLlxuICAgKiBAcGFyYW0gY29uZGl0aW9ucyBjb25kaXRpb25zIHRvIEFORFxuICAgKiBAcmV0dXJucyBhbiBGbkNvbmRpdGlvbiB0b2tlblxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBjb25kaXRpb25BbmQoXG4gICAgLi4uY29uZGl0aW9uczogKHN0cmluZyB8IElSb3NDb25kaXRpb25FeHByZXNzaW9uKVtdXG4gICk6IElSb3NDb25kaXRpb25FeHByZXNzaW9uIHtcbiAgICByZXR1cm4gbmV3IEZuQW5kKC4uLmNvbmRpdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbXBhcmVzIGlmIHR3byB2YWx1ZXMgYXJlIGVxdWFsLiBSZXR1cm5zIHRydWUgaWYgdGhlIHR3byB2YWx1ZXMgYXJlIGVxdWFsXG4gICAqIG9yIGZhbHNlIGlmIHRoZXkgYXJlbid0LlxuICAgKiBAcGFyYW0gbGhzIEEgdmFsdWUgb2YgYW55IHR5cGUgdGhhdCB5b3Ugd2FudCB0byBjb21wYXJlLlxuICAgKiBAcGFyYW0gcmhzIEEgdmFsdWUgb2YgYW55IHR5cGUgdGhhdCB5b3Ugd2FudCB0byBjb21wYXJlLlxuICAgKiBAcmV0dXJucyBhbiBGbkNvbmRpdGlvbiB0b2tlblxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBjb25kaXRpb25FcXVhbHMobGhzOiBhbnksIHJoczogYW55KTogSVJvc0NvbmRpdGlvbkV4cHJlc3Npb24ge1xuICAgIHJldHVybiBuZXcgRm5FcXVhbHMobGhzLCByaHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgb25lIHZhbHVlIGlmIHRoZSBzcGVjaWZpZWQgY29uZGl0aW9uIGV2YWx1YXRlcyB0byB0cnVlIGFuZCBhbm90aGVyXG4gICAqIHZhbHVlIGlmIHRoZSBzcGVjaWZpZWQgY29uZGl0aW9uIGV2YWx1YXRlcyB0byBmYWxzZS5cbiAgICogQHBhcmFtIGNvbmRpdGlvbklkIEEgcmVmZXJlbmNlIHRvIGEgY29uZGl0aW9uIGluIHRoZSBDb25kaXRpb25zIHNlY3Rpb24uIFVzZVxuICAgKiB0aGUgY29uZGl0aW9uJ3MgbmFtZSB0byByZWZlcmVuY2UgaXQuXG4gICAqIEBwYXJhbSB2YWx1ZUlmVHJ1ZSBBIHZhbHVlIHRvIGJlIHJldHVybmVkIGlmIHRoZSBzcGVjaWZpZWQgY29uZGl0aW9uXG4gICAqIGV2YWx1YXRlcyB0byB0cnVlLlxuICAgKiBAcGFyYW0gdmFsdWVJZkZhbHNlIEEgdmFsdWUgdG8gYmUgcmV0dXJuZWQgaWYgdGhlIHNwZWNpZmllZCBjb25kaXRpb25cbiAgICogZXZhbHVhdGVzIHRvIGZhbHNlLlxuICAgKiBAcmV0dXJucyBhbiBGbkNvbmRpdGlvbiB0b2tlblxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBjb25kaXRpb25JZihcbiAgICBjb25kaXRpb25JZDogc3RyaW5nIHwgSVJvc0NvbmRpdGlvbkV4cHJlc3Npb24sXG4gICAgdmFsdWVJZlRydWU6IGFueSxcbiAgICB2YWx1ZUlmRmFsc2U6IGFueVxuICApOiBhbnkge1xuICAgIHJldHVybiBuZXcgRm5JZihjb25kaXRpb25JZCwgdmFsdWVJZlRydWUsIHZhbHVlSWZGYWxzZSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGZvciBhIGNvbmRpdGlvbiB0aGF0IGV2YWx1YXRlcyB0byBmYWxzZSBvciByZXR1cm5zIGZhbHNlIGZvciBhXG4gICAqIGNvbmRpdGlvbiB0aGF0IGV2YWx1YXRlcyB0byB0cnVlLiBgYEZuOjpOb3RgYCBhY3RzIGFzIGEgTk9UIG9wZXJhdG9yLlxuICAgKiBAcGFyYW0gY29uZGl0aW9uIEEgY29uZGl0aW9uIHN1Y2ggYXMgYGBGbjo6RXF1YWxzYGAgdGhhdCBldmFsdWF0ZXMgdG8gdHJ1ZVxuICAgKiBvciBmYWxzZS5cbiAgICogQHJldHVybnMgYW4gRm5Db25kaXRpb24gdG9rZW5cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgY29uZGl0aW9uTm90KFxuICAgIGNvbmRpdGlvbjogc3RyaW5nIHwgSVJvc0NvbmRpdGlvbkV4cHJlc3Npb25cbiAgKTogSVJvc0NvbmRpdGlvbkV4cHJlc3Npb24ge1xuICAgIHJldHVybiBuZXcgRm5Ob3QoY29uZGl0aW9uKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgYW55IG9uZSBvZiB0aGUgc3BlY2lmaWVkIGNvbmRpdGlvbnMgZXZhbHVhdGUgdG8gdHJ1ZSwgb3JcbiAgICogcmV0dXJucyBmYWxzZSBpZiBhbGwgb2YgdGhlIGNvbmRpdGlvbnMgZXZhbHVhdGVzIHRvIGZhbHNlLiBgYEZuOjpPcmBgIGFjdHNcbiAgICogYXMgYW4gT1Igb3BlcmF0b3IuIFRoZSBtaW5pbXVtIG51bWJlciBvZiBjb25kaXRpb25zIHRoYXQgeW91IGNhbiBpbmNsdWRlIGlzXG4gICAqIDIsIGFuZCB0aGUgbWF4aW11bSBpcyAxMC5cbiAgICogQHBhcmFtIGNvbmRpdGlvbnMgY29uZGl0aW9ucyB0aGF0IGV2YWx1YXRlcyB0byB0cnVlIG9yIGZhbHNlLlxuICAgKiBAcmV0dXJucyBhbiBGbkNvbmRpdGlvbiB0b2tlblxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBjb25kaXRpb25PcihcbiAgICAuLi5jb25kaXRpb25zOiAoc3RyaW5nIHwgSVJvc0NvbmRpdGlvbkV4cHJlc3Npb24pW11cbiAgKTogSVJvc0NvbmRpdGlvbkV4cHJlc3Npb24ge1xuICAgIHJldHVybiBuZXcgRm5PciguLi5jb25kaXRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgYSBzcGVjaWZpZWQgc3RyaW5nIG1hdGNoZXMgYWxsIHZhbHVlcyBpbiBhIGxpc3QuXG4gICAqIHBhcmFtIGxpc3RPZlN0cmluZ3MgQSBsaXN0IG9mIHN0cmluZ3MsIHN1Y2ggYXMgXCJBXCIsIFwiQlwiLCBcIkNcIi5cbiAgICogcGFyYW0gdmFsdWUgQSBzdHJpbmcsIHN1Y2ggYXMgXCJBXCIsIHRoYXQgeW91IHdhbnQgdG8gY29tcGFyZSBhZ2FpbnN0IGEgbGlzdFxuICAgKiBvZiBzdHJpbmdzLlxuICAgKiBAcmV0dXJucyBhbiBGbkNvbmRpdGlvbiB0b2tlblxuICAgKi9cbiAgLy8gc3RhdGljIGNvbmRpdGlvbkVhY2hNZW1iZXJFcXVhbHMoXG4gIC8vICAgbGlzdE9mU3RyaW5nczogc3RyaW5nW10sXG4gIC8vICAgdmFsdWU6IHN0cmluZ1xuICAvLyApOiBJUm9zQ29uZGl0aW9uRXhwcmVzc2lvbiB7XG4gIC8vICAgcmV0dXJuIG5ldyBGbkVhY2hNZW1iZXJFcXVhbHMobGlzdE9mU3RyaW5ncywgdmFsdWUpO1xuICAvLyB9XG5cbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHt9XG59XG5cbi8qKlxuICogQmFzZSBjbGFzcyBmb3IgdG9rZW5zIHRoYXQgcmVwcmVzZW50IFJPUyBpbnRyaW5zaWMgZnVuY3Rpb25zLlxuICovXG5jbGFzcyBGbkJhc2UgZXh0ZW5kcyBJbnRyaW5zaWMge1xuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcbiAgICBzdXBlcih7IFtuYW1lXTogdmFsdWUgfSk7XG4gIH1cbn1cblxuLy8gbmV3IGZ1bmN0aW9uXG5leHBvcnQgY2xhc3MgRm5TdHIgZXh0ZW5kcyBGbkJhc2Uge1xuICAvKipcbiAgICogQ3JlYXRlcyBhbiBgYFN0cmBgIGZ1bmN0aW9uLlxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU6IGFueSkge1xuICAgIHN1cGVyKFwiRm46OlN0clwiLCB2YWx1ZSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZuQmFzZTY0RGVjb2RlIGV4dGVuZHMgRm5CYXNlIHtcbiAgY29uc3RydWN0b3IoZGF0YTogYW55KSB7XG4gICAgc3VwZXIoXCJGbjo6QmFzZTY0RGVjb2RlXCIsIGRhdGEpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGblJlcGxhY2UgZXh0ZW5kcyBGbkJhc2Uge1xuICAvKipcbiAgICogQ3JlYXRlcyBhbiBgYFJlcGxhY2VgYCBmdW5jdGlvbi5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlOiBhbnkpIHtcbiAgICBzdXBlcihcIkZuOjpSZXBsYWNlXCIsIHZhbHVlKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRm5HZXRKc29uVmFsdWUgZXh0ZW5kcyBGbkJhc2Uge1xuICAvKipcbiAgICogQ3JlYXRlcyBhbiBgYEdldEpzb25WYWx1ZWBgIGZ1bmN0aW9uLlxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU6IGFueSkge1xuICAgIHN1cGVyKFwiRm46OkdldEpzb25WYWx1ZVwiLCB2YWx1ZSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZuQXZnIGV4dGVuZHMgRm5CYXNlIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gYGBBdmdgYCBmdW5jdGlvbi5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlOiBhbnkpIHtcbiAgICBzdXBlcihcIkZuOjpBdmdcIiwgdmFsdWUpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGbkFkZCBleHRlbmRzIEZuQmFzZSB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGBgQWRkYGAgZnVuY3Rpb24uXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZXM6IGFueSkge1xuICAgIHN1cGVyKFwiRm46OkFkZFwiLCB2YWx1ZXMpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGbkNhbGN1bGF0ZSBleHRlbmRzIEZuQmFzZSB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGBgQ2FsY3VsYXRlYGAgZnVuY3Rpb24uXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZTogYW55KSB7XG4gICAgc3VwZXIoXCJGbjo6Q2FsY3VsYXRlXCIsIHZhbHVlKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRm5NYXggZXh0ZW5kcyBGbkJhc2Uge1xuICAvKipcbiAgICogQ3JlYXRlcyBhbiBgYE1heGBgIGZ1bmN0aW9uLlxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWVzOiBhbnkpIHtcbiAgICBzdXBlcihcIkZuOjpNYXhcIiwgdmFsdWVzKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRm5NaW4gZXh0ZW5kcyBGbkJhc2Uge1xuICAvKipcbiAgICogQ3JlYXRlcyBhbiBgYE1pbmBgIGZ1bmN0aW9uLlxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWVzOiBhbnkpIHtcbiAgICBzdXBlcihcIkZuOjpNaW5cIiwgdmFsdWVzKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRm5HZXRTdGFja091dHB1dCBleHRlbmRzIEZuQmFzZSB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGBgR2V0U3RhY2tPdXRwdXRgYCBmdW5jdGlvbi5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlOiBhbnkpIHtcbiAgICBzdXBlcihcIkZuOjpHZXRTdGFja091dHB1dFwiLCB2YWx1ZSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZuSnEgZXh0ZW5kcyBGbkJhc2Uge1xuICAvKipcbiAgICogQ3JlYXRlcyBhbiBgYEpxYGAgZnVuY3Rpb24uXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZTogYW55KSB7XG4gICAgc3VwZXIoXCJGbjo6SnFcIiwgdmFsdWUpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGbk1lcmdlTWFwVG9MaXN0IGV4dGVuZHMgRm5CYXNlIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gYGBGbk1lcmdlTWFwVG9MaXN0YGAgZnVuY3Rpb24uXG4gICAqL1xuICBjb25zdHJ1Y3RvcihtYXBMaXN0OiBhbnkpIHtcbiAgICBzdXBlcihcIkZuOjpNZXJnZU1hcFRvTGlzdFwiLCBtYXBMaXN0KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRm5TZWxlY3RNYXBMaXN0IGV4dGVuZHMgRm5CYXNlIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gYGBGbk1lcmdlTWFwVG9MaXN0YGAgZnVuY3Rpb24uXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZTogYW55KSB7XG4gICAgc3VwZXIoXCJGbjo6U2VsZWN0TWFwTGlzdFwiLCB2YWx1ZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBUaGUgaW50cmluc2ljIGZ1bmN0aW9uIGBgUmVmYGAgcmV0dXJucyB0aGUgdmFsdWUgb2YgdGhlIHNwZWNpZmllZCBwYXJhbWV0ZXIgb3IgcmVzb3VyY2UuXG4gKiBXaGVuIHlvdSBzcGVjaWZ5IGEgcGFyYW1ldGVyJ3MgbG9naWNhbCBuYW1lLCBpdCByZXR1cm5zIHRoZSB2YWx1ZSBvZiB0aGUgcGFyYW1ldGVyLlxuICogV2hlbiB5b3Ugc3BlY2lmeSBhIHJlc291cmNlJ3MgbG9naWNhbCBuYW1lLCBpdCByZXR1cm5zIGEgdmFsdWUgdGhhdCB5b3UgY2FuIHR5cGljYWxseSB1c2UgdG8gcmVmZXIgdG8gdGhhdCByZXNvdXJjZSwgc3VjaCBhcyBhIHBoeXNpY2FsIElELlxuICovXG5leHBvcnQgY2xhc3MgRm5SZWYgZXh0ZW5kcyBGbkJhc2Uge1xuICAvKipcbiAgICogQ3JlYXRlcyBhbiBgYFJlZmBgIGZ1bmN0aW9uLlxuICAgKiBAcGFyYW0gbG9naWNhbE5hbWUgVGhlIGxvZ2ljYWwgbmFtZSBvZiBhIHBhcmFtZXRlci9yZXNvdXJjZSBmb3Igd2hpY2ggeW91IHdhbnQgdG8gcmV0cmlldmUgaXRzIHZhbHVlLlxuICAgKi9cbiAgY29uc3RydWN0b3IobG9naWNhbE5hbWU6IHN0cmluZykge1xuICAgIHN1cGVyKFwiUmVmXCIsIGxvZ2ljYWxOYW1lKTtcbiAgfVxufVxuXG4vKipcbiAqIFRoZSBpbnRyaW5zaWMgZnVuY3Rpb24gYGBGbjo6RmluZEluTWFwYGAgcmV0dXJucyB0aGUgdmFsdWUgY29ycmVzcG9uZGluZyB0byBrZXlzIGluIGEgdHdvLWxldmVsXG4gKiBtYXAgdGhhdCBpcyBkZWNsYXJlZCBpbiB0aGUgTWFwcGluZ3Mgc2VjdGlvbi5cbiAqL1xuZXhwb3J0IGNsYXNzIEZuRmluZEluTWFwIGV4dGVuZHMgRm5CYXNlIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gYGBGbjo6RmluZEluTWFwYGAgZnVuY3Rpb24uXG4gICAqIHBhcmFtIG1hcE5hbWUgVGhlIGxvZ2ljYWwgbmFtZSBvZiBhIG1hcHBpbmcgZGVjbGFyZWQgaW4gdGhlIE1hcHBpbmdzIHNlY3Rpb24gdGhhdCBjb250YWlucyB0aGUga2V5cyBhbmQgdmFsdWVzLlxuICAgKiBwYXJhbSB0b3BMZXZlbEtleSBUaGUgdG9wLWxldmVsIGtleSBuYW1lLiBJdHMgdmFsdWUgaXMgYSBsaXN0IG9mIGtleS12YWx1ZSBwYWlycy5cbiAgICogcGFyYW0gc2Vjb25kTGV2ZWxLZXkgVGhlIHNlY29uZC1sZXZlbCBrZXkgbmFtZSwgd2hpY2ggaXMgc2V0IHRvIG9uZSBvZiB0aGUga2V5cyBmcm9tIHRoZSBsaXN0IGFzc2lnbmVkIHRvIFRvcExldmVsS2V5LlxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU6IGFueSkge1xuICAgIHN1cGVyKFwiRm46OkZpbmRJbk1hcFwiLCB2YWx1ZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBUaGUgYGBGbjo6R2V0QXR0YGAgaW50cmluc2ljIGZ1bmN0aW9uIHJldHVybnMgdGhlIHZhbHVlIG9mIGFuIGF0dHJpYnV0ZSBmcm9tIGEgcmVzb3VyY2UgaW4gdGhlIHRlbXBsYXRlLlxuICovXG5leHBvcnQgY2xhc3MgRm5HZXRBdHQgZXh0ZW5kcyBGbkJhc2Uge1xuICAvKipcbiAgICogQ3JlYXRlcyBhIGBgRm46OkdldEF0dGBgIGZ1bmN0aW9uLlxuICAgKiBAcGFyYW0gbG9naWNhbE5hbWVPZlJlc291cmNlIFRoZSBsb2dpY2FsIG5hbWUgKGFsc28gY2FsbGVkIGxvZ2ljYWwgSUQpIG9mIHRoZSByZXNvdXJjZSB0aGF0IGNvbnRhaW5zIHRoZSBhdHRyaWJ1dGUgdGhhdCB5b3Ugd2FudC5cbiAgICogQHBhcmFtIGF0dHJpYnV0ZU5hbWUgVGhlIG5hbWUgb2YgdGhlIHJlc291cmNlLXNwZWNpZmljIGF0dHJpYnV0ZSB3aG9zZSB2YWx1ZSB5b3Ugd2FudC4gU2VlIHRoZSByZXNvdXJjZSdzIHJlZmVyZW5jZSBwYWdlIGZvciBkZXRhaWxzIGFib3V0IHRoZSBhdHRyaWJ1dGVzIGF2YWlsYWJsZSBmb3IgdGhhdCByZXNvdXJjZSB0eXBlLlxuICAgKi9cbiAgY29uc3RydWN0b3IobG9naWNhbE5hbWVPZlJlc291cmNlOiBzdHJpbmcsIGF0dHJpYnV0ZU5hbWU6IHN0cmluZykge1xuICAgIHN1cGVyKFwiRm46OkdldEF0dFwiLCBbbG9naWNhbE5hbWVPZlJlc291cmNlLCBhdHRyaWJ1dGVOYW1lXSk7XG4gIH1cbn1cblxuLyoqXG4gKiBUaGUgaW50cmluc2ljIGZ1bmN0aW9uIGBgRm46OkdldEFac2BgIHJldHVybnMgYW4gYXJyYXkgdGhhdCBsaXN0cyBBdmFpbGFiaWxpdHkgWm9uZXMgZm9yIGFcbiAqIHNwZWNpZmllZCByZWdpb24uIEJlY2F1c2UgY3VzdG9tZXJzIGhhdmUgYWNjZXNzIHRvIGRpZmZlcmVudCBBdmFpbGFiaWxpdHkgWm9uZXMsIHRoZSBpbnRyaW5zaWNcbiAqIGZ1bmN0aW9uIGBgRm46OkdldEFac2BgIGVuYWJsZXMgdGVtcGxhdGUgYXV0aG9ycyB0byB3cml0ZSB0ZW1wbGF0ZXMgdGhhdCBhZGFwdCB0byB0aGUgY2FsbGluZ1xuICogdXNlcidzIGFjY2Vzcy4gVGhhdCB3YXkgeW91IGRvbid0IGhhdmUgdG8gaGFyZC1jb2RlIGEgZnVsbCBsaXN0IG9mIEF2YWlsYWJpbGl0eSBab25lcyBmb3IgYVxuICogc3BlY2lmaWVkIHJlZ2lvbi5cbiAqL1xuZXhwb3J0IGNsYXNzIEZuR2V0QVpzIGV4dGVuZHMgRm5CYXNlIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gYGBGbjo6R2V0QVpzYGAgZnVuY3Rpb24uXG4gICAqIEBwYXJhbSByZWdpb24gVGhlIG5hbWUgb2YgdGhlIHJlZ2lvbiBmb3Igd2hpY2ggeW91IHdhbnQgdG8gZ2V0IHRoZSBBdmFpbGFiaWxpdHkgWm9uZXMuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihyZWdpb246IGFueSkge1xuICAgIHN1cGVyKFwiRm46OkdldEFac1wiLCByZWdpb24pO1xuICB9XG59XG5cbi8qKlxuICogVGhlIGludHJpbnNpYyBmdW5jdGlvbiBgYEZuOjpTZWxlY3RgYCByZXR1cm5zIGEgc2luZ2xlIG9iamVjdCBmcm9tIGEgbGlzdCBvZiBvYmplY3RzIGJ5IGluZGV4LlxuICovXG5leHBvcnQgY2xhc3MgRm5TZWxlY3QgZXh0ZW5kcyBGbkJhc2Uge1xuICAvKipcbiAgICogQ3JlYXRlcyBhbiBgYEZuOjpTZWxlY3RgYCBmdW5jdGlvbi5cbiAgICogcGFyYW0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSBvYmplY3QgdG8gcmV0cmlldmUuIFRoaXMgbXVzdCBiZSBhIHZhbHVlIGZyb20gemVybyB0byBOLTEsIHdoZXJlIE4gcmVwcmVzZW50cyB0aGUgbnVtYmVyIG9mIGVsZW1lbnRzIGluIHRoZSBhcnJheS5cbiAgICogcGFyYW0gYXJyYXkgVGhlIGxpc3Qgb2Ygb2JqZWN0cyB0byBzZWxlY3QgZnJvbS4gVGhpcyBsaXN0IG11c3Qgbm90IGJlIG51bGwsIG5vciBjYW4gaXQgaGF2ZSBudWxsIGVudHJpZXMuXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZTogYW55KSB7XG4gICAgc3VwZXIoXCJGbjo6U2VsZWN0XCIsIHZhbHVlKTtcbiAgfVxufVxuXG4vKipcbiAqIFRvIHNwbGl0IGEgc3RyaW5nIGludG8gYSBsaXN0IG9mIHN0cmluZyB2YWx1ZXMgc28gdGhhdCB5b3UgY2FuIHNlbGVjdCBhbiBlbGVtZW50IGZyb20gdGhlXG4gKiByZXN1bHRpbmcgc3RyaW5nIGxpc3QsIHVzZSB0aGUgYGBGbjo6U3BsaXRgYCBpbnRyaW5zaWMgZnVuY3Rpb24uIFNwZWNpZnkgdGhlIGxvY2F0aW9uIG9mIHNwbGl0c1xuICogd2l0aCBhIGRlbGltaXRlciwgc3VjaCBhcyAsIChhIGNvbW1hKS4gQWZ0ZXIgeW91IHNwbGl0IGEgc3RyaW5nLCB1c2UgdGhlIGBgRm46OlNlbGVjdGBgIGZ1bmN0aW9uXG4gKiB0byBwaWNrIGEgc3BlY2lmaWMgZWxlbWVudC5cbiAqL1xuZXhwb3J0IGNsYXNzIEZuU3BsaXQgZXh0ZW5kcyBGbkJhc2Uge1xuICAvKipcbiAgICogQ3JlYXRlIGFuIGBgRm46OlNwbGl0YGAgZnVuY3Rpb24uXG4gICAqIHBhcmFtIGRlbGltaXRlciBBIHN0cmluZyB2YWx1ZSB0aGF0IGRldGVybWluZXMgd2hlcmUgdGhlIHNvdXJjZSBzdHJpbmcgaXMgZGl2aWRlZC5cbiAgICogcGFyYW0gc291cmNlIFRoZSBzdHJpbmcgdmFsdWUgdGhhdCB5b3Ugd2FudCB0byBzcGxpdC5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlOiBhbnkpIHtcbiAgICBzdXBlcihcIkZuOjpTcGxpdFwiLCB2YWx1ZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBUaGUgaW50cmluc2ljIGZ1bmN0aW9uIGBgRm46OlN1YmBgIHN1YnN0aXR1dGVzIHZhcmlhYmxlcyBpbiBhbiBpbnB1dCBzdHJpbmcgd2l0aCB2YWx1ZXMgdGhhdFxuICogeW91IHNwZWNpZnkuIEluIHlvdXIgdGVtcGxhdGVzLCB5b3UgY2FuIHVzZSB0aGlzIGZ1bmN0aW9uIHRvIGNvbnN0cnVjdCBjb21tYW5kcyBvciBvdXRwdXRzXG4gKiB0aGF0IGluY2x1ZGUgdmFsdWVzIHRoYXQgYXJlbid0IGF2YWlsYWJsZSB1bnRpbCB5b3UgY3JlYXRlIG9yIHVwZGF0ZSBhIHN0YWNrLlxuICovXG5leHBvcnQgY2xhc3MgRm5TdWIgZXh0ZW5kcyBGbkJhc2Uge1xuICAvKipcbiAgICogQ3JlYXRlcyBhbiBgYEZuOjpTdWJgYCBmdW5jdGlvbi5cbiAgICogcGFyYW0gYm9keSBBIHN0cmluZyB3aXRoIHZhcmlhYmxlcyB0aGF0IFJvcyBUZW1wbGF0ZSBzdWJzdGl0dXRlcyB3aXRoIHRoZWlyXG4gICAqICAgICAgIGFzc29jaWF0ZWQgdmFsdWVzIGF0IHJ1bnRpbWUuIFdyaXRlIHZhcmlhYmxlcyBhcyAke015VmFyTmFtZX0uIFZhcmlhYmxlc1xuICAgKiAgICAgICBjYW4gYmUgdGVtcGxhdGUgcGFyYW1ldGVyIG5hbWVzLCByZXNvdXJjZSBsb2dpY2FsIElEcywgcmVzb3VyY2UgYXR0cmlidXRlcyxcbiAgICogICAgICAgb3IgYSB2YXJpYWJsZSBpbiBhIGtleS12YWx1ZSBtYXAuIElmIHlvdSBzcGVjaWZ5IG9ubHkgdGVtcGxhdGUgcGFyYW1ldGVyIG5hbWVzLFxuICAgKiAgICAgICByZXNvdXJjZSBsb2dpY2FsIElEcywgYW5kIHJlc291cmNlIGF0dHJpYnV0ZXMsIGRvbid0IHNwZWNpZnkgYSBrZXktdmFsdWUgbWFwLlxuICAgKiBwYXJhbSB2YXJpYWJsZXMgVGhlIG5hbWUgb2YgYSB2YXJpYWJsZSB0aGF0IHlvdSBpbmNsdWRlZCBpbiB0aGUgU3RyaW5nIHBhcmFtZXRlci5cbiAgICogICAgICAgICAgVGhlIHZhbHVlIHRoYXQgUm9zIFRlbXBsYXRlIHN1YnN0aXR1dGVzIGZvciB0aGUgYXNzb2NpYXRlZCB2YXJpYWJsZSBuYW1lIGF0IHJ1bnRpbWUuXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZTogYW55KSB7XG4gICAgc3VwZXIoXCJGbjo6U3ViXCIsIHZhbHVlKTtcbiAgfVxufVxuXG4vKipcbiAqIFRoZSBpbnRyaW5zaWMgZnVuY3Rpb24gYGBGbjo6QmFzZTY0YGAgcmV0dXJucyB0aGUgQmFzZTY0IHJlcHJlc2VudGF0aW9uIG9mIHRoZSBpbnB1dCBzdHJpbmcuXG4gKi9cbmV4cG9ydCBjbGFzcyBGbkJhc2U2NEVuY29kZSBleHRlbmRzIEZuQmFzZSB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGBgRm46OkJhc2U2NGBgIGZ1bmN0aW9uLlxuICAgKiBAcGFyYW0gZGF0YSBUaGUgc3RyaW5nIHZhbHVlIHlvdSB3YW50IHRvIGNvbnZlcnQgdG8gQmFzZTY0LlxuICAgKi9cbiAgY29uc3RydWN0b3IoZGF0YTogYW55KSB7XG4gICAgc3VwZXIoXCJGbjo6QmFzZTY0RW5jb2RlXCIsIGRhdGEpO1xuICB9XG59XG5cbmNsYXNzIEZuQ29uZGl0aW9uQmFzZSBleHRlbmRzIEludHJpbnNpYyBpbXBsZW1lbnRzIElSb3NDb25kaXRpb25FeHByZXNzaW9uIHtcbiAgY29uc3RydWN0b3IodHlwZTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XG4gICAgc3VwZXIoeyBbdHlwZV06IHZhbHVlIH0pO1xuICB9XG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIGFsbCB0aGUgc3BlY2lmaWVkIGNvbmRpdGlvbnMgZXZhbHVhdGUgdG8gdHJ1ZSwgb3IgcmV0dXJucyBmYWxzZSBpZiBhbnkgb25lXG4gKiAgb2YgdGhlIGNvbmRpdGlvbnMgZXZhbHVhdGVzIHRvIGZhbHNlLiBgYEZuOjpBbmRgYCBhY3RzIGFzIGFuIEFORCBvcGVyYXRvci4gVGhlIG1pbmltdW0gbnVtYmVyIG9mXG4gKiBjb25kaXRpb25zIHRoYXQgeW91IGNhbiBpbmNsdWRlIGlzIDIsIGFuZCB0aGUgbWF4aW11bSBpcyAxMC5cbiAqL1xuZXhwb3J0IGNsYXNzIEZuQW5kIGV4dGVuZHMgRm5Db25kaXRpb25CYXNlIHtcbiAgY29uc3RydWN0b3IoLi4uY29uZGl0aW9uOiAoc3RyaW5nIHwgSVJvc0NvbmRpdGlvbkV4cHJlc3Npb24pW10pIHtcbiAgICBzdXBlcihcIkZuOjpBbmRcIiwgY29uZGl0aW9uKTtcbiAgfVxufVxuXG4vKipcbiAqIENvbXBhcmVzIGlmIHR3byB2YWx1ZXMgYXJlIGVxdWFsLiBSZXR1cm5zIHRydWUgaWYgdGhlIHR3byB2YWx1ZXMgYXJlIGVxdWFsIG9yIGZhbHNlXG4gKiBpZiB0aGV5IGFyZW4ndC5cbiAqL1xuZXhwb3J0IGNsYXNzIEZuRXF1YWxzIGV4dGVuZHMgRm5Db25kaXRpb25CYXNlIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gYGBGbjo6RXF1YWxzYGAgY29uZGl0aW9uIGZ1bmN0aW9uLlxuICAgKiBAcGFyYW0gbGhzIEEgdmFsdWUgb2YgYW55IHR5cGUgdGhhdCB5b3Ugd2FudCB0byBjb21wYXJlLlxuICAgKiBAcGFyYW0gcmhzIEEgdmFsdWUgb2YgYW55IHR5cGUgdGhhdCB5b3Ugd2FudCB0byBjb21wYXJlLlxuICAgKi9cbiAgY29uc3RydWN0b3IobGhzOiBhbnksIHJoczogYW55KSB7XG4gICAgc3VwZXIoXCJGbjo6RXF1YWxzXCIsIFtsaHMsIHJoc10pO1xuICB9XG59XG5cbi8qKlxuICogUmV0dXJucyBvbmUgdmFsdWUgaWYgdGhlIHNwZWNpZmllZCBjb25kaXRpb24gZXZhbHVhdGVzIHRvIHRydWUgYW5kIGFub3RoZXIgdmFsdWUgaWYgdGhlXG4gKiBzcGVjaWZpZWQgY29uZGl0aW9uIGV2YWx1YXRlcyB0byBmYWxzZS5cbiAqL1xuZXhwb3J0IGNsYXNzIEZuSWYgZXh0ZW5kcyBGbkNvbmRpdGlvbkJhc2Uge1xuICAvKipcbiAgICogQ3JlYXRlcyBhbiBgYEZuOjpJZmBgIGNvbmRpdGlvbiBmdW5jdGlvbi5cbiAgICogQHBhcmFtIGNvbmRpdGlvbiBBIHJlZmVyZW5jZSB0byBhIGNvbmRpdGlvbiBpbiB0aGUgQ29uZGl0aW9ucyBzZWN0aW9uLiBVc2UgdGhlIGNvbmRpdGlvbidzIG5hbWUgdG8gcmVmZXJlbmNlIGl0LlxuICAgKiBAcGFyYW0gdmFsdWVJZlRydWUgQSB2YWx1ZSB0byBiZSByZXR1cm5lZCBpZiB0aGUgc3BlY2lmaWVkIGNvbmRpdGlvbiBldmFsdWF0ZXMgdG8gdHJ1ZS5cbiAgICogQHBhcmFtIHZhbHVlSWZGYWxzZSBBIHZhbHVlIHRvIGJlIHJldHVybmVkIGlmIHRoZSBzcGVjaWZpZWQgY29uZGl0aW9uIGV2YWx1YXRlcyB0byBmYWxzZS5cbiAgICovXG4gIGNvbnN0cnVjdG9yKGNvbmRpdGlvbjogc3RyaW5nIHwgSVJvc0NvbmRpdGlvbkV4cHJlc3Npb24sIHZhbHVlSWZUcnVlOiBhbnksIHZhbHVlSWZGYWxzZTogYW55KSB7XG4gICAgc3VwZXIoXCJGbjo6SWZcIiwgW2NvbmRpdGlvbiwgdmFsdWVJZlRydWUsIHZhbHVlSWZGYWxzZV0pO1xuICB9XG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGZvciBhIGNvbmRpdGlvbiB0aGF0IGV2YWx1YXRlcyB0byBmYWxzZSBvciByZXR1cm5zIGZhbHNlIGZvciBhIGNvbmRpdGlvbiB0aGF0IGV2YWx1YXRlcyB0byB0cnVlLlxuICogYGBGbjo6Tm90YGAgYWN0cyBhcyBhIE5PVCBvcGVyYXRvci5cbiAqL1xuZXhwb3J0IGNsYXNzIEZuTm90IGV4dGVuZHMgRm5Db25kaXRpb25CYXNlIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gYGBGbjo6Tm90YGAgY29uZGl0aW9uIGZ1bmN0aW9uLlxuICAgKiBAcGFyYW0gY29uZGl0aW9uIEEgY29uZGl0aW9uIHN1Y2ggYXMgYGBGbjo6RXF1YWxzYGAgdGhhdCBldmFsdWF0ZXMgdG8gdHJ1ZSBvciBmYWxzZS5cbiAgICovXG4gIGNvbnN0cnVjdG9yKGNvbmRpdGlvbjogc3RyaW5nIHwgSVJvc0NvbmRpdGlvbkV4cHJlc3Npb24pIHtcbiAgICBzdXBlcihcIkZuOjpOb3RcIiwgW2NvbmRpdGlvbl0pO1xuICB9XG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIGFueSBvbmUgb2YgdGhlIHNwZWNpZmllZCBjb25kaXRpb25zIGV2YWx1YXRlIHRvIHRydWUsIG9yIHJldHVybnMgZmFsc2UgaWZcbiAqIGFsbCBvZiB0aGUgY29uZGl0aW9ucyBldmFsdWF0ZXMgdG8gZmFsc2UuIGBgRm46Ok9yYGAgYWN0cyBhcyBhbiBPUiBvcGVyYXRvci4gVGhlIG1pbmltdW0gbnVtYmVyXG4gKiBvZiBjb25kaXRpb25zIHRoYXQgeW91IGNhbiBpbmNsdWRlIGlzIDIsIGFuZCB0aGUgbWF4aW11bSBpcyAxMC5cbiAqL1xuZXhwb3J0IGNsYXNzIEZuT3IgZXh0ZW5kcyBGbkNvbmRpdGlvbkJhc2Uge1xuICAvKipcbiAgICogQ3JlYXRlcyBhbiBgYEZuOjpPcmBgIGNvbmRpdGlvbiBmdW5jdGlvbi5cbiAgICogQHBhcmFtIGNvbmRpdGlvbiBBIGNvbmRpdGlvbiB0aGF0IGV2YWx1YXRlcyB0byB0cnVlIG9yIGZhbHNlLlxuICAgKi9cbiAgY29uc3RydWN0b3IoLi4uY29uZGl0aW9uOiAoc3RyaW5nIHwgSVJvc0NvbmRpdGlvbkV4cHJlc3Npb24pW10pIHtcbiAgICBzdXBlcihcIkZuOjpPclwiLCBjb25kaXRpb24pO1xuICB9XG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIGEgc3BlY2lmaWVkIHN0cmluZyBtYXRjaGVzIGFsbCB2YWx1ZXMgaW4gYSBsaXN0LlxuICovXG4vLyBjbGFzcyBGbkVhY2hNZW1iZXJFcXVhbHMgZXh0ZW5kcyBGbkNvbmRpdGlvbkJhc2Uge1xuLy8gICAvKipcbi8vICAgICogQ3JlYXRlcyBhbiBgYEZuOjpFYWNoTWVtYmVyRXF1YWxzYGAgZnVuY3Rpb24uXG4vLyAgICAqIEBwYXJhbSBsaXN0T2ZTdHJpbmdzIEEgbGlzdCBvZiBzdHJpbmdzLCBzdWNoIGFzIFwiQVwiLCBcIkJcIiwgXCJDXCIuXG4vLyAgICAqIEBwYXJhbSB2YWx1ZSBBIHN0cmluZywgc3VjaCBhcyBcIkFcIiwgdGhhdCB5b3Ugd2FudCB0byBjb21wYXJlIGFnYWluc3QgYSBsaXN0IG9mIHN0cmluZ3MuXG4vLyAgICAqL1xuLy8gICBjb25zdHJ1Y3RvcihsaXN0T2ZTdHJpbmdzOiBhbnksIHZhbHVlOiBzdHJpbmcpIHtcbi8vICAgICBzdXBlcihcIkZuOjpFYWNoTWVtYmVyRXF1YWxzXCIsIFtsaXN0T2ZTdHJpbmdzLCB2YWx1ZV0pO1xuLy8gICB9XG4vLyB9XG5cblxuZXhwb3J0IGNsYXNzIEZuTGlzdE1lcmdlIGltcGxlbWVudHMgSVJlc29sdmFibGUge1xuICBwdWJsaWMgcmVhZG9ubHkgY3JlYXRpb25TdGFjazogc3RyaW5nW107XG5cbiAgcHJpdmF0ZSByZWFkb25seSBsaXN0T2ZWYWx1ZXM6IGFueVtdO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGBgTGlzdE1lcmdlYGAgZnVuY3Rpb24uXG4gICAqL1xuICBjb25zdHJ1Y3RvcihsaXN0T2ZWYWx1ZXM6IGFueVtdKSB7XG4gICAgaWYgKGxpc3RPZlZhbHVlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkZuTGlzdE1lcmdlIHJlcXVpcmVzIGF0IGxlYXN0IG9uZSB2YWx1ZSB0byBiZSBwcm92aWRlZFwiKTtcbiAgICB9XG5cbiAgICB0aGlzLmxpc3RPZlZhbHVlcyA9IGxpc3RPZlZhbHVlcztcbiAgICB0aGlzLmNyZWF0aW9uU3RhY2sgPSBjYXB0dXJlU3RhY2tUcmFjZSgpO1xuICB9XG5cbiAgcHVibGljIHJlc29sdmUoY29udGV4dDogSVJlc29sdmVDb250ZXh0KTogYW55IHtcbiAgICBpZiAoVG9rZW4uaXNVbnJlc29sdmVkKHRoaXMubGlzdE9mVmFsdWVzKSkge1xuICAgICAgLy8gVGhpcyBpcyBhIGxpc3QgdG9rZW4sIGRvbid0IHRyeSB0byBkbyBzbWFydCB0aGluZ3Mgd2l0aCBpdC5cbiAgICAgIHJldHVybiB7IFwiRm46Okxpc3RNZXJnZVwiOiB0aGlzLmxpc3RPZlZhbHVlcyB9O1xuICAgIH1cbiAgICBjb25zdCByZXNvbHZlZCA9IHRoaXMucmVzb2x2ZVZhbHVlcyhjb250ZXh0KTtcbiAgICBpZiAocmVzb2x2ZWQubGVuZ3RoID09PSAxKSB7XG4gICAgICByZXR1cm4gcmVzb2x2ZWRbMF07XG4gICAgfVxuICAgIHJldHVybiB7IFwiRm46Okxpc3RNZXJnZVwiOiByZXNvbHZlZCB9O1xuICB9XG5cbiAgcHVibGljIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiBUb2tlbi5hc1N0cmluZyh0aGlzLCB7IGRpc3BsYXlIaW50OiBcIkZuOjpMaXN0TWVyZ2VcIiB9KTtcbiAgfVxuXG4gIHB1YmxpYyB0b0pTT04oKSB7XG4gICAgcmV0dXJuIFwiPEZuOjpMaXN0TWVyZ2U+XCI7XG4gIH1cblxuICAvKipcbiAgICogT3B0aW1pemF0aW9uOiBpZiBhbiBGbjo6TGlzdE1lcmdlIGlzIG5lc3RlZCBpbiBhbm90aGVyIG9uZSwgdGhlbiBmbGF0dGVuIGl0IHVwLlxuICAgKi9cbiAgcHJpdmF0ZSByZXNvbHZlVmFsdWVzKGNvbnRleHQ6IElSZXNvbHZlQ29udGV4dCkge1xuICAgIGNvbnN0IHJlc29sdmVkVmFsdWVzID0gdGhpcy5saXN0T2ZWYWx1ZXMubWFwKCh4KSA9PlxuICAgICAgICBSZWZlcmVuY2UuaXNSZWZlcmVuY2UoeCkgPyB4IDogY29udGV4dC5yZXNvbHZlKHgpXG4gICAgKTtcbiAgICByZXR1cm4gbWluaW1hbFJvc1RlbXBsYXRlTGlzdE1lcmdlKHJlc29sdmVkVmFsdWVzKTtcbiAgfVxufVxuXG4vKipcbiAqIFRoZSBpbnRyaW5zaWMgZnVuY3Rpb24gYGBGbjo6Sm9pbmBgIGFwcGVuZHMgYSBzZXQgb2YgdmFsdWVzIGludG8gYSBzaW5nbGUgdmFsdWUsIHNlcGFyYXRlZCBieVxuICogdGhlIHNwZWNpZmllZCBkZWxpbWl0ZXIuIElmIGEgZGVsaW1pdGVyIGlzIHRoZSBlbXB0eSBzdHJpbmcsIHRoZSBzZXQgb2YgdmFsdWVzIGFyZSBjb25jYXRlbmF0ZWRcbiAqIHdpdGggbm8gZGVsaW1pdGVyLlxuICovXG5leHBvcnQgY2xhc3MgRm5Kb2luIGltcGxlbWVudHMgSVJlc29sdmFibGUge1xuICBwdWJsaWMgcmVhZG9ubHkgY3JlYXRpb25TdGFjazogc3RyaW5nW107XG5cbiAgcHJpdmF0ZSByZWFkb25seSBkZWxpbWl0ZXI6IHN0cmluZztcbiAgcHJpdmF0ZSByZWFkb25seSBsaXN0T2ZWYWx1ZXM6IGFueVtdO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGBgRm46OkpvaW5gYCBmdW5jdGlvbi5cbiAgICogQHBhcmFtIGRlbGltaXRlciBUaGUgdmFsdWUgeW91IHdhbnQgdG8gb2NjdXIgYmV0d2VlbiBmcmFnbWVudHMuIFRoZSBkZWxpbWl0ZXIgd2lsbCBvY2N1ciBiZXR3ZWVuIGZyYWdtZW50cyBvbmx5LlxuICAgKiAgICAgICAgICBJdCB3aWxsIG5vdCB0ZXJtaW5hdGUgdGhlIGZpbmFsIHZhbHVlLlxuICAgKiBAcGFyYW0gbGlzdE9mVmFsdWVzIFRoZSBsaXN0IG9mIHZhbHVlcyB5b3Ugd2FudCBjb21iaW5lZC5cbiAgICovXG4gIGNvbnN0cnVjdG9yKGRlbGltaXRlcjogc3RyaW5nLCBsaXN0T2ZWYWx1ZXM6IGFueVtdKSB7XG4gICAgaWYgKGxpc3RPZlZhbHVlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkZuSm9pbiByZXF1aXJlcyBhdCBsZWFzdCBvbmUgdmFsdWUgdG8gYmUgcHJvdmlkZWRcIik7XG4gICAgfVxuXG4gICAgdGhpcy5kZWxpbWl0ZXIgPSBkZWxpbWl0ZXI7XG4gICAgdGhpcy5saXN0T2ZWYWx1ZXMgPSBsaXN0T2ZWYWx1ZXM7XG4gICAgdGhpcy5jcmVhdGlvblN0YWNrID0gY2FwdHVyZVN0YWNrVHJhY2UoKTtcbiAgfVxuXG4gIHB1YmxpYyByZXNvbHZlKGNvbnRleHQ6IElSZXNvbHZlQ29udGV4dCk6IGFueSB7XG4gICAgaWYgKFRva2VuLmlzVW5yZXNvbHZlZCh0aGlzLmxpc3RPZlZhbHVlcykpIHtcbiAgICAgIC8vIFRoaXMgaXMgYSBsaXN0IHRva2VuLCBkb24ndCB0cnkgdG8gZG8gc21hcnQgdGhpbmdzIHdpdGggaXQuXG4gICAgICByZXR1cm4geyBcIkZuOjpKb2luXCI6IFt0aGlzLmRlbGltaXRlciwgdGhpcy5saXN0T2ZWYWx1ZXNdIH07XG4gICAgfVxuICAgIGNvbnN0IHJlc29sdmVkID0gdGhpcy5yZXNvbHZlVmFsdWVzKGNvbnRleHQpO1xuICAgIGlmIChyZXNvbHZlZC5sZW5ndGggPT09IDEpIHtcbiAgICAgIHJldHVybiByZXNvbHZlZFswXTtcbiAgICB9XG4gICAgcmV0dXJuIHsgXCJGbjo6Sm9pblwiOiBbdGhpcy5kZWxpbWl0ZXIsIHJlc29sdmVkXSB9O1xuICB9XG5cbiAgcHVibGljIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiBUb2tlbi5hc1N0cmluZyh0aGlzLCB7IGRpc3BsYXlIaW50OiBcIkZuOjpKb2luXCIgfSk7XG4gIH1cblxuICBwdWJsaWMgdG9KU09OKCkge1xuICAgIHJldHVybiBcIjxGbjo6Sm9pbj5cIjtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcHRpbWl6YXRpb246IGlmIGFuIEZuOjpKb2luIGlzIG5lc3RlZCBpbiBhbm90aGVyIG9uZSBhbmQgdGhleSBzaGFyZSB0aGUgc2FtZSBkZWxpbWl0ZXIsIHRoZW4gZmxhdHRlbiBpdCB1cC4gQWxzbyxcbiAgICogaWYgdHdvIGNvbmNhdGVuYXRlZCBlbGVtZW50cyBhcmUgbGl0ZXJhbCBzdHJpbmdzIChub3QgdG9rZW5zKSwgdGhlbiBwcmUtY29uY2F0ZW5hdGUgdGhlbSB3aXRoIHRoZSBkZWxpbWl0ZXIsIHRvXG4gICAqIGdlbmVyYXRlIHNob3J0ZXIgb3V0cHV0LlxuICAgKi9cbiAgcHJpdmF0ZSByZXNvbHZlVmFsdWVzKGNvbnRleHQ6IElSZXNvbHZlQ29udGV4dCkge1xuICAgIGNvbnN0IHJlc29sdmVkVmFsdWVzID0gdGhpcy5saXN0T2ZWYWx1ZXMubWFwKCh4KSA9PlxuICAgICAgUmVmZXJlbmNlLmlzUmVmZXJlbmNlKHgpID8geCA6IGNvbnRleHQucmVzb2x2ZSh4KVxuICAgICk7XG4gICAgcmV0dXJuIG1pbmltYWxSb3NUZW1wbGF0ZUpvaW4odGhpcy5kZWxpbWl0ZXIsIHJlc29sdmVkVmFsdWVzKTtcbiAgfVxufVxuIl19