"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FnJoin = exports.FnListMerge = exports.FnOr = exports.FnNot = exports.FnIf = exports.FnEquals = exports.FnAnd = exports.FnBase64Encode = exports.FnSub = exports.FnSplit = exports.FnSelect = exports.FnGetAZs = exports.FnGetAtt = exports.FnFindInMap = exports.FnRef = exports.FnSelectMapList = exports.FnMergeMapToList = exports.FnJq = exports.FnGetStackOutput = exports.FnMin = exports.FnMax = exports.FnCalculate = exports.FnAdd = exports.FnAvg = exports.FnGetJsonValue = exports.FnReplace = exports.FnBase64Decode = exports.FnStr = exports.FnCidr = exports.FnMatchPattern = exports.FnEachMemberIn = exports.FnContains = exports.FnAny = exports.FnMarketplaceImage = exports.FnFormatTime = exports.FnLength = exports.FnIndex = exports.FnIndent = exports.Fn = void 0;
const template_lang_1 = require("./private/template-lang");
const intrinsic_1 = require("./private/intrinsic");
const reference_1 = require("./reference");
const token_1 = require("./token");
const stack_trace_1 = require("./stack-trace");
// tslint:disable:max-line-length
/**
 * Resource Orchestration Service intrinsic functions.
 * https://help.aliyun.com/zh/ros/user-guide/functions
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
     * The intrinsic function Fn::Indent adjust the indentation of the string.
     * @param str Strings that need to be indented.
     * @param level Indentation level. The range is [0,20].
     * @param indent Optional, defaults to 2 for two Spaces per level, in the range [0,4].
     */
    static indent(str, level, indent) {
        return new FnIndent(str, level, indent).toString();
    }
    /**
     * Returns the index of the item in the list.
     * @param itemToFindIndex The item to find in the list.
     * @param itemList The list to find the item in.
     */
    static index(itemToFindIndex, itemList) {
        return new FnIndex(itemToFindIndex, itemList).toString();
    }
    /**
     * Returns the length of the object.
     * @param obj An object whose length needs to be computed. Three types are supported: strings, lists, and dictionaries.
     */
    static lengthOf(obj) {
        return new FnLength(obj).toString();
    }
    /**
     * Returns the formatted time of the object.
     * @param format The format of the time.
     * @param timeZone The time zone.
     */
    static formatTime(format, timeZone) {
        return new FnFormatTime(format, timeZone).toString();
    }
    /**
     * The intrinsic function Fn::MarketplaceImage returns the default image ID of the specified cloud marketplace image product Code.
     * @param imageProductCode The product code of the cloud marketplace image.
     */
    static marketplaceImage(imageProductCode) {
        return new FnMarketplaceImage(imageProductCode).toString();
    }
    /**
     * Returns whether a value in the specified array is true or false. Returns true if any item in the array is true, and false otherwise.
     * @param values An array of values.
     */
    static any(values) {
        return new FnAny(values).toString();
    }
    /**
     * Returns true if at least one member of the list matches the specified value and false otherwise.
     * @param values An array of values.
     * @param value A value.
     */
    static contains(values, value) {
        return new FnContains(values, value).toString();
    }
    /**
     * Returns true if every member of the first list is equal to at least one value in the second list, and false otherwise.
     * @param values1 An array of values.
     * @param values2 An array of values.
     */
    static eachMemberIn(values1, values2) {
        return new FnEachMemberIn(values1, values2).toString();
    }
    /**
     * Returns true if a specified string matches a specified pattern.
     * @param pattern A regular expression in string form.
     * @param value The string to match.
     */
    static matchPattern(pattern, value) {
        return new FnMatchPattern(pattern, value).toString();
    }
    /**
     * Returns a list of CIDR addresses.
     * @param ipBlock The IP address block from which you want to allocate the CIDR. The block must be expressed in CIDR notation.
     * @param count The number of IPv4 CIDRs to generate. Valid input values range from 1 to 256 and are used to decide the total number of final subnets.
     * @param cidrBits The number of subnet bits of the new CIDR. For example, if the value "8" is specified for this parameter, a CIDR with a "/24" mask will be created.
     */
    static cidr(ipBlock, count, cidrBits) {
        return new FnCidr(ipBlock, count, cidrBits).toString();
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
class FnIndent extends FnBase {
    /**
     * Creates an ``Indent`` function.
     */
    constructor(str, level, indent) {
        if (typeof level === 'number' && (level < 0 || level > 20)) {
            throw new Error("level must be greater than 0 or less than 20");
        }
        if (indent && typeof level === 'number' && (indent < 0 || indent > 4)) {
            throw new Error("indent must be greater than 0 or less than 4");
        }
        super("Fn::Indent", [str, level, indent]);
    }
}
exports.FnIndent = FnIndent;
class FnIndex extends FnBase {
    /**
     * Creates an ``Index`` function.
     */
    constructor(itemToFindIndex, itemList) {
        super("Fn::Index", [itemToFindIndex, itemList]);
    }
}
exports.FnIndex = FnIndex;
class FnLength extends FnBase {
    /**
     * Creates an ``Length`` function.
     */
    constructor(obj) {
        super("Fn::Length", obj);
    }
}
exports.FnLength = FnLength;
class FnFormatTime extends FnBase {
    /**
     * Creates an ``FormatTime`` function.
     */
    constructor(format, timeZone) {
        super("Fn::FormatTime", [format, timeZone]);
    }
}
exports.FnFormatTime = FnFormatTime;
class FnMarketplaceImage extends FnBase {
    /**
     * Creates an ``MarketplaceImage`` function.
     */
    constructor(imageProductCode) {
        super("Fn::MarketplaceImage", imageProductCode);
    }
}
exports.FnMarketplaceImage = FnMarketplaceImage;
class FnAny extends FnBase {
    /**
     * Creates an ``Any`` function.
     */
    constructor(values) {
        super("Fn::Any", values);
    }
}
exports.FnAny = FnAny;
class FnContains extends FnBase {
    /**
     * Creates an ``Contains`` function.
     */
    constructor(values, value) {
        super("Fn::Contains", [values, value]);
    }
}
exports.FnContains = FnContains;
class FnEachMemberIn extends FnBase {
    /**
     * Creates an ``EachMemberIn`` function.
     */
    constructor(values1, values2) {
        super("Fn::EachMemberIn", [values1, values2]);
    }
}
exports.FnEachMemberIn = FnEachMemberIn;
class FnMatchPattern extends FnBase {
    /**
     * Creates an ``MatchPattern`` function.
     */
    constructor(pattern, value) {
        super("Fn::MatchPattern", [pattern, value]);
    }
}
exports.FnMatchPattern = FnMatchPattern;
class FnCidr extends FnBase {
    /**
     * Creates an ``Cidr`` function.
     */
    constructor(ipBlock, count, cidrBits) {
        super("Fn::Cidr", [ipBlock, count, cidrBits]);
    }
}
exports.FnCidr = FnCidr;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9zLWZuLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicm9zLWZuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLDJEQUE0RjtBQUM1RixtREFBZ0Q7QUFDaEQsMkNBQXdDO0FBQ3hDLG1DQUFnQztBQUNoQywrQ0FBa0Q7QUFJbEQsaUNBQWlDO0FBRWpDOzs7R0FHRztBQUNILE1BQWEsRUFBRTtJQUNOLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBVTtRQUMxQixvQ0FBb0M7UUFDcEMsNkJBQTZCO1FBQzdCLElBQUk7UUFDSixPQUFPLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3JDLENBQUM7SUFFTSxNQUFNLENBQUMsWUFBWSxDQUFDLElBQVk7UUFDckMsT0FBTyxJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM3QyxDQUFDO0lBRU0sTUFBTSxDQUFDLE9BQU8sQ0FDbkIsV0FBbUMsRUFDbkMsT0FBZTtRQUVmLE9BQU8sSUFBSSxTQUFTLENBQUMsQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMxRCxDQUFDO0lBRU0sTUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFzQztRQUM1RCxPQUFPLElBQUksV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFTSxNQUFNLENBQUMsWUFBWSxDQUFDLEdBQVcsRUFBRSxRQUFhO1FBQ25ELE9BQU8sSUFBSSxjQUFjLENBQUMsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN4RCxDQUFDO0lBRU0sTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFlLEVBQUUsTUFBZ0I7UUFDakQsT0FBTyxhQUFLLENBQUMsUUFBUSxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztJ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WUFBWSxDQUFDLEVBQUUsQ0FBQztTQUM1RDtRQUNELE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDN0MsSUFBSSxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUN6QixPQUFPLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNwQjtRQUNELE9BQU8sRUFBRSxVQUFVLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUM7SUFDcEQsQ0FBQztJQUVNLFFBQVE7UUFDYixPQUFPLGFBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVNLE1BQU07UUFDWCxPQUFPLFlBQVksQ0FBQztJQUN0QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNLLGFBQWEsQ0FBQyxPQUF3QjtRQUM1QyxNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQ2pELHFCQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQ2xELENBQUM7UUFDRixPQUFPLHNDQUFzQixDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsY0FBYyxDQUFDLENBQUM7SUFDaEUsQ0FBQztDQUNGO0FBckRELHdCQXFEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElSb3NDb25kaXRpb25FeHByZXNzaW9uIH0gZnJvbSBcIi4vcm9zLWNvbmRpdGlvblwiO1xuaW1wb3J0IHttaW5pbWFsUm9zVGVtcGxhdGVKb2luLCBtaW5pbWFsUm9zVGVtcGxhdGVMaXN0TWVyZ2V9IGZyb20gXCIuL3ByaXZhdGUvdGVtcGxhdGUtbGFuZ1wiO1xuaW1wb3J0IHsgSW50cmluc2ljIH0gZnJvbSBcIi4vcHJpdmF0ZS9pbnRyaW5zaWNcIjtcbmltcG9ydCB7IFJlZmVyZW5jZSB9IGZyb20gXCIuL3JlZmVyZW5jZVwiO1xuaW1wb3J0IHsgVG9rZW4gfSBmcm9tIFwiLi90b2tlblwiO1xuaW1wb3J0IHsgY2FwdHVyZVN0YWNrVHJhY2UgfSBmcm9tIFwiLi9zdGFjay10cmFjZVwiO1xuaW1wb3J0IHsgSVJlc29sdmVDb250ZXh0LCBJUmVzb2x2YWJsZSB9IGZyb20gXCIuL3Jlc29sdmFibGVcIjtcbmltcG9ydCAqIGFzIHJvcyBmcm9tIFwiLi9pbmRleFwiO1xuXG4vLyB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGhcblxuLyoqXG4gKiBSZXNvdXJjZSBPcmNoZXN0cmF0aW9uIFNlcnZpY2UgaW50cmluc2ljIGZ1bmN0aW9ucy5cbiAqIGh0dHBzOi8vaGVscC5hbGl5dW4uY29tL3poL3Jvcy91c2VyLWd1aWRlL2Z1bmN0aW9uc1xuICovXG5leHBvcnQgY2xhc3MgRm4ge1xuICBwdWJsaWMgc3RhdGljIHN0cih2YWx1ZTogYW55KTogc3RyaW5nIHtcbiAgICAvLyBpZiAoIVRva2VuLmlzVW5yZXNvbHZlZCh2YWx1ZSkpIHtcbiAgICAvLyAgIHJldHVybiB2YWx1ZS50b1N0cmluZygpO1xuICAgIC8vIH1cbiAgICByZXR1cm4gbmV3IEZuU3RyKHZhbHVlKS50b1N0cmluZygpO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBiYXNlNjREZWNvZGUoZGF0YTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gbmV3IEZuQmFzZTY0RGVjb2RlKGRhdGEpLnRvU3RyaW5nKCk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIHJlcGxhY2UoXG4gICAgcmVwbGFjZURhdGE6IHsgW2tleTogc3RyaW5nXTogYW55IH0sXG4gICAgY29udGVudDogc3RyaW5nXG4gICk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG5ldyBGblJlcGxhY2UoW3JlcGxhY2VEYXRhLCBjb250ZW50XSkudG9TdHJpbmcoKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgbGlzdE1lcmdlKHZhbHVlTGlzdDogKGFueVtdIHwgcm9zLklSZXNvbHZhYmxlKVtdKTogSVJlc29sdmFibGUge1xuICAgIHJldHVybiBuZXcgRm5MaXN0TWVyZ2UodmFsdWVMaXN0KTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZ2V0SnNvblZhbHVlKGtleTogc3RyaW5nLCBqc29uRGF0YTogYW55KTogc3RyaW5nIHtcbiAgICByZXR1cm4gbmV3IEZuR2V0SnNvblZhbHVlKFtrZXksIGpzb25EYXRhXSkudG9TdHJpbmcoKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgYXZnKG5kaWdpdHM6IG51bWJlciwgdmFsdWVzOiBudW1iZXJbXSk6IG51bWJlciB7XG4gICAgcmV0dXJuIFRva2VuLmFzTnVtYmVyKG5ldyBGbkF2ZyhbbmRpZ2l0cywgdmFsdWVzXSkpO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBhZGQodmFsdWVzOiBudW1iZXIgfCBhbnlbXSB8IHtba2V5OnN0cmluZ106IGFueX0pOiBJUmVzb2x2YWJsZSB7XG4gICAgcmV0dXJuIFRva2VuLmFzQW55KG5ldyBGbkFkZCh2YWx1ZXMpKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgY2FsY3VsYXRlKFxuICAgIHZhbHVlczogc3RyaW5nLFxuICAgIG5kaWdpdHM6IG51bWJlcixcbiAgICBwYXJhOiBudW1iZXJbXVxuICApOiBudW1iZXIge1xuICAgIHJldHVybiBUb2tlbi5hc051bWJlcihuZXcgRm5DYWxjdWxhdGUoW3ZhbHVlcywgbmRpZ2l0cywgcGFyYV0pKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgbWF4KHZhbHVlczogbnVtYmVyW10pOiBudW1iZXIge1xuICAgIHJldHVybiBUb2tlbi5hc051bWJlcihuZXcgRm5NYXgodmFsdWVzKSk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIG1pbih2YWx1ZXM6IG51bWJlcltdKTogbnVtYmVyIHtcbiAgICByZXR1cm4gVG9rZW4uYXNOdW1iZXIobmV3IEZuTWluKHZhbHVlcykpO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBqcShtZXRob2Q6IHN0cmluZywgc2NyaXB0OiBzdHJpbmcsIGlucHV0U3RyaW5nOiBzdHJpbmcgfCB7W2tleTpzdHJpbmddOiBhbnl9KTogSVJlc29sdmFibGUge1xuICAgIHJldHVybiBUb2tlbi5hc0FueShuZXcgRm5KcShbbWV0aG9kLCBzY3JpcHQsIGlucHV0U3RyaW5nXSkpO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBtZXJnZU1hcFRvTGlzdChtYXBMaXN0OiB7W2tleTogc3RyaW5nXTogYW55W119W10pOiBJUmVzb2x2YWJsZSB7XG4gICAgcmV0dXJuIG5ldyBGbk1lcmdlTWFwVG9MaXN0KG1hcExpc3QpO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBzZWxlY3RNYXBMaXN0KGtleTogc3RyaW5nLCBtYXBMaXN0OiB7W2tleTogc3RyaW5nXTogYW55fVtdKTogSVJlc29sdmFibGUge1xuICAgIHJldHVybiBuZXcgRm5TZWxlY3RNYXBMaXN0KFtrZXksIG1hcExpc3RdKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgYGBSZWZgYCBpbnRyaW5zaWMgZnVuY3Rpb24gcmV0dXJucyB0aGUgdmFsdWUgb2YgdGhlIHNwZWNpZmllZCBwYXJhbWV0ZXIgb3IgcmVzb3VyY2UuXG4gICAqIE5vdGUgdGhhdCBpdCBkb2Vzbid0IHZhbGlkYXRlIHRoZSBsb2dpY2FsTmFtZSwgaXQgbWFpbmx5IHNlcnZlcyBwYXJlbWV0ZXIvcmVzb3VyY2UgcmVmZXJlbmNlIGRlZmluZWQgaW4gYSBgYFJvc0luY2x1ZGVgYCB0ZW1wbGF0ZS5cbiAgICogQHBhcmFtIGxvZ2ljYWxOYW1lIFRoZSBsb2dpY2FsIG5hbWUgb2YgYSBwYXJhbWV0ZXIvcmVzb3VyY2UgZm9yIHdoaWNoIHlvdSB3YW50IHRvIHJldHJpZXZlIGl0cyB2YWx1ZS5cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgcmVmKGxvZ2ljYWxOYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBuZXcgRm5SZWYobG9naWNhbE5hbWUpLnRvU3RyaW5nKCk7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIHB1YmxpYyBzdGF0aWMgX3JlZihsb2dpY2FsSWQ6IHN0cmluZyk6IElSZXNvbHZhYmxlIHtcbiAgICByZXR1cm4gbmV3IEZuUmVmKGxvZ2ljYWxJZCk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIGBgRm46OkdldEF0dGBgIGludHJpbnNpYyBmdW5jdGlvbiByZXR1cm5zIHRoZSB2YWx1ZSBvZiBhbiBhdHRyaWJ1dGVcbiAgICogZnJvbSBhIHJlc291cmNlIGluIHRoZSB0ZW1wbGF0ZS5cbiAgICogQHBhcmFtIGxvZ2ljYWxOYW1lT2ZSZXNvdXJjZSBUaGUgbG9naWNhbCBuYW1lIChhbHNvIGNhbGxlZCBsb2dpY2FsIElEKSBvZlxuICAgKiB0aGUgcmVzb3VyY2UgdGhhdCBjb250YWlucyB0aGUgYXR0cmlidXRlIHRoYXQgeW91IHdhbnQuXG4gICAqIEBwYXJhbSBhdHRyaWJ1dGVOYW1lIFRoZSBuYW1lIG9mIHRoZSByZXNvdXJjZS1zcGVjaWZpYyBhdHRyaWJ1dGUgd2hvc2VcbiAgICogdmFsdWUgeW91IHdhbnQuIFNlZSB0aGUgcmVzb3VyY2UncyByZWZlcmVuY2UgcGFnZSBmb3IgZGV0YWlscyBhYm91dCB0aGVcbiAgICogYXR0cmlidXRlcyBhdmFpbGFibGUgZm9yIHRoYXQgcmVzb3VyY2UgdHlwZS5cbiAgICogQHJldHVybnMgYW4gSVJlc29sdmFibGUgb2JqZWN0XG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGdldEF0dChcbiAgICBsb2dpY2FsTmFtZU9mUmVzb3VyY2U6IHN0cmluZyxcbiAgICBhdHRyaWJ1dGVOYW1lOiBzdHJpbmdcbiAgKTogSVJlc29sdmFibGUge1xuICAgIHJldHVybiBuZXcgRm5HZXRBdHQobG9naWNhbE5hbWVPZlJlc291cmNlLCBhdHRyaWJ1dGVOYW1lKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgaW50cmluc2ljIGZ1bmN0aW9uIGBgRm46OkpvaW5gYCBhcHBlbmRzIGEgc2V0IG9mIHZhbHVlcyBpbnRvIGEgc2luZ2xlXG4gICAqIHZhbHVlLCBzZXBhcmF0ZWQgYnkgdGhlIHNwZWNpZmllZCBkZWxpbWl0ZXIuIElmIGEgZGVsaW1pdGVyIGlzIHRoZSBlbXB0eVxuICAgKiBzdHJpbmcsIHRoZSBzZXQgb2YgdmFsdWVzIGFyZSBjb25jYXRlbmF0ZWQgd2l0aCBubyBkZWxpbWl0ZXIuXG4gICAqIEBwYXJhbSBkZWxpbWl0ZXIgVGhlIHZhbHVlIHlvdSB3YW50IHRvIG9jY3VyIGJldHdlZW4gZnJhZ21lbnRzLiBUaGVcbiAgICogZGVsaW1pdGVyIHdpbGwgb2NjdXIgYmV0d2VlbiBmcmFnbWVudHMgb25seS4gSXQgd2lsbCBub3QgdGVybWluYXRlIHRoZVxuICAgKiBmaW5hbCB2YWx1ZS5cbiAgICogQHBhcmFtIGxpc3RPZlZhbHVlcyBUaGUgbGlzdCBvZiB2YWx1ZXMgeW91IHdhbnQgY29tYmluZWQuXG4gICAqIEByZXR1cm5zIGEgdG9rZW4gcmVwcmVzZW50ZWQgYXMgYSBzdHJpbmdcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgam9pbihkZWxpbWl0ZXI6IHN0cmluZywgbGlzdE9mVmFsdWVzOiAoc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlKVtdKTogc3RyaW5nIHtcbiAgICBpZiAobGlzdE9mVmFsdWVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRm5Kb2luIHJlcXVpcmVzIGF0IGxlYXN0IG9uZSB2YWx1ZSB0byBiZSBwcm92aWRlZFwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IEZuSm9pbihkZWxpbWl0ZXIsIGxpc3RPZlZhbHVlcykudG9TdHJpbmcoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUbyBzcGxpdCBhIHN0cmluZyBpbnRvIGEgbGlzdCBvZiBzdHJpbmcgdmFsdWVzIHNvIHRoYXQgeW91IGNhbiBzZWxlY3QgYW4gZWxlbWVudCBmcm9tIHRoZVxuICAgKiByZXN1bHRpbmcgc3RyaW5nIGxpc3QsIHVzZSB0aGUgYGBGbjo6U3BsaXRgYCBpbnRyaW5zaWMgZnVuY3Rpb24uIFNwZWNpZnkgdGhlIGxvY2F0aW9uIG9mIHNwbGl0c1xuICAgKiB3aXRoIGEgZGVsaW1pdGVyLCBzdWNoIGFzICwgKGEgY29tbWEpLiBBZnRlciB5b3Ugc3BsaXQgYSBzdHJpbmcsIHVzZSB0aGUgYGBGbjo6U2VsZWN0YGAgZnVuY3Rpb25cbiAgICogdG8gcGljayBhIHNwZWNpZmljIGVsZW1lbnQuXG4gICAqIEBwYXJhbSBkZWxpbWl0ZXIgQSBzdHJpbmcgdmFsdWUgdGhhdCBkZXRlcm1pbmVzIHdoZXJlIHRoZSBzb3VyY2Ugc3RyaW5nIGlzIGRpdmlkZWQuXG4gICAqIEBwYXJhbSBzb3VyY2UgVGhlIHN0cmluZyB2YWx1ZSB0aGF0IHlvdSB3YW50IHRvIHNwbGl0LlxuICAgKiBAcmV0dXJucyBhIHRva2VuIHJlcHJlc2VudGVkIGFzIGEgc3RyaW5nIGFycmF5XG4gICAqL1xuICBwdWJsaWMgc3RhdGljIHNwbGl0KGRlbGltaXRlcjogc3RyaW5nLCBzb3VyY2U6IHN0cmluZyk6IHN0cmluZ1tdIHtcbiAgICAvLyBzaG9ydC1jaXJjdXQgaWYgc291cmNlIGlzIG5vdCBhIHRva2VuXG4gICAgaWYgKCFUb2tlbi5pc1VucmVzb2x2ZWQoc291cmNlKSkge1xuICAgICAgcmV0dXJuIHNvdXJjZS5zcGxpdChkZWxpbWl0ZXIpO1xuICAgIH1cblxuICAgIHJldHVybiBUb2tlbi5hc0xpc3QobmV3IEZuU3BsaXQoW2RlbGltaXRlciwgc291cmNlXSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBpbnRyaW5zaWMgZnVuY3Rpb24gYGBGbjo6U2VsZWN0YGAgcmV0dXJucyBhIHNpbmdsZSBvYmplY3QgZnJvbSBhIGxpc3Qgb2Ygb2JqZWN0cyBieSBpbmRleC5cbiAgICogQHBhcmFtIGluZGV4IFRoZSBpbmRleCBvZiB0aGUgb2JqZWN0IHRvIHJldHJpZXZlLiBUaGlzIG11c3QgYmUgYSB2YWx1ZSBmcm9tIHplcm8gdG8gTi0xLCB3aGVyZSBOIHJlcHJlc2VudHMgdGhlIG51bWJlciBvZiBlbGVtZW50cyBpbiB0aGUgYXJyYXkuXG4gICAqIEBwYXJhbSBhcnJheSBUaGUgbGlzdCBvZiBvYmplY3RzIHRvIHNlbGVjdCBmcm9tLiBUaGlzIGxpc3QgbXVzdCBub3QgYmUgbnVsbCwgbm9yIGNhbiBpdCBoYXZlIG51bGwgZW50cmllcy5cbiAgICogQHJldHVybnMgYSB0b2tlbiByZXByZXNlbnRlZCBhcyBhIHN0cmluZ1xuICAgKi9cbiAgcHVibGljIHN0YXRpYyBzZWxlY3QoaW5kZXg6IG51bWJlciB8IHN0cmluZywgYXJyYXk6IGFueSk6IElSZXNvbHZhYmxlIHtcbiAgICByZXR1cm4gVG9rZW4uYXNBbnkobmV3IEZuU2VsZWN0KFtpbmRleCwgYXJyYXldKSk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIGludHJpbnNpYyBmdW5jdGlvbiBgYEZuOjpTdWJgYCBzdWJzdGl0dXRlcyB2YXJpYWJsZXMgaW4gYW4gaW5wdXQgc3RyaW5nXG4gICAqIHdpdGggdmFsdWVzIHRoYXQgeW91IHNwZWNpZnkuIEluIHlvdXIgdGVtcGxhdGVzLCB5b3UgY2FuIHVzZSB0aGlzIGZ1bmN0aW9uXG4gICAqIHRvIGNvbnN0cnVjdCBjb21tYW5kcyBvciBvdXRwdXRzIHRoYXQgaW5jbHVkZSB2YWx1ZXMgdGhhdCBhcmVuJ3QgYXZhaWxhYmxlXG4gICAqIHVudGlsIHlvdSBjcmVhdGUgb3IgdXBkYXRlIGEgc3RhY2suXG4gICAqIEBwYXJhbSBib2R5IEEgc3RyaW5nIHdpdGggdmFyaWFibGVzIHRoYXQgUm9zIFRlbXBsYXRlIHN1YnN0aXR1dGVzXG4gICAqIHdpdGggdGhlaXIgYXNzb2NpYXRlZCB2YWx1ZXMgYXQgcnVudGltZS4gV3JpdGUgdmFyaWFibGVzIGFzICR7TXlWYXJOYW1lfS5cbiAgICogVmFyaWFibGVzIGNhbiBiZSB0ZW1wbGF0ZSBwYXJhbWV0ZXIgbmFtZXMsIHJlc291cmNlIGxvZ2ljYWwgSURzLCByZXNvdXJjZVxuICAgKiBhdHRyaWJ1dGVzLCBvciBhIHZhcmlhYmxlIGluIGEga2V5LXZhbHVlIG1hcC4gSWYgeW91IHNwZWNpZnkgb25seSB0ZW1wbGF0ZVxuICAgKiBwYXJhbWV0ZXIgbmFtZXMsIHJlc291cmNlIGxvZ2ljYWwgSURzLCBhbmQgcmVzb3VyY2UgYXR0cmlidXRlcywgZG9uJ3RcbiAgICogc3BlY2lmeSBhIGtleS12YWx1ZSBtYXAuXG4gICAqIEBwYXJhbSB2YXJpYWJsZXMgVGhlIG5hbWUgb2YgYSB2YXJpYWJsZSB0aGF0IHlvdSBpbmNsdWRlZCBpbiB0aGUgU3RyaW5nXG4gICAqIHBhcmFtZXRlci4gVGhlIHZhbHVlIHRoYXQgUm9zIFRlbXBsYXRlIHN1YnN0aXR1dGVzIGZvciB0aGUgYXNzb2NpYXRlZFxuICAgKiB2YXJpYWJsZSBuYW1lIGF0IHJ1bnRpbWUuXG4gICAqIEByZXR1cm5zIGEgdG9rZW4gcmVwcmVzZW50ZWQgYXMgYSBzdHJpbmdcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgc3ViKFxuICAgIGJvZHk6IHN0cmluZyxcbiAgICB2YXJpYWJsZXM/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gICk6IHN0cmluZyB7XG4gICAgaWYgKHZhcmlhYmxlcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gbmV3IEZuU3ViKGJvZHkpLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgRm5TdWIoW2JvZHksIHZhcmlhYmxlc10pLnRvU3RyaW5nKCk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIGludHJpbnNpYyBmdW5jdGlvbiBgYEZuOjpCYXNlNjRgYCByZXR1cm5zIHRoZSBCYXNlNjQgcmVwcmVzZW50YXRpb24gb2ZcbiAgICogdGhlIGlucHV0IHN0cmluZy5cbiAgICogQHBhcmFtIGRhdGEgVGhlIHN0cmluZyB2YWx1ZSB5b3Ugd2FudCB0byBjb252ZXJ0IHRvIEJhc2U2NC5cbiAgICogQHJldHVybnMgYSB0b2tlbiByZXByZXNlbnRlZCBhcyBhIHN0cmluZ1xuICAgKi9cbiAgcHVibGljIHN0YXRpYyBiYXNlNjRFbmNvZGUoZGF0YTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gbmV3IEZuQmFzZTY0RW5jb2RlKGRhdGEpLnRvU3RyaW5nKCk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIGludHJpbnNpYyBmdW5jdGlvbiBgYEZuOjpHZXRBWnNgYCByZXR1cm5zIGFuIGFycmF5IHRoYXQgbGlzdHNcbiAgICogQXZhaWxhYmlsaXR5IFpvbmVzIGZvciBhIHNwZWNpZmllZCByZWdpb24uIEJlY2F1c2UgY3VzdG9tZXJzIGhhdmUgYWNjZXNzIHRvXG4gICAqIGRpZmZlcmVudCBBdmFpbGFiaWxpdHkgWm9uZXMsIHRoZSBpbnRyaW5zaWMgZnVuY3Rpb24gYGBGbjo6R2V0QVpzYGAgZW5hYmxlc1xuICAgKiB0ZW1wbGF0ZSBhdXRob3JzIHRvIHdyaXRlIHRlbXBsYXRlcyB0aGF0IGFkYXB0IHRvIHRoZSBjYWxsaW5nIHVzZXInc1xuICAgKiBhY2Nlc3MuIFRoYXQgd2F5IHlvdSBkb24ndCBoYXZlIHRvIGhhcmQtY29kZSBhIGZ1bGwgbGlzdCBvZiBBdmFpbGFiaWxpdHlcbiAgICogWm9uZXMgZm9yIGEgc3BlY2lmaWVkIHJlZ2lvbi5cbiAgICogQHBhcmFtIHJlZ2lvbiBUaGUgbmFtZSBvZiB0aGUgcmVnaW9uIGZvciB3aGljaCB5b3Ugd2FudCB0byBnZXQgdGhlXG4gICAqIEF2YWlsYWJpbGl0eSBab25lcy4gWW91IGNhbiB1c2UgdGhlIFJPUzo6UmVnaW9uIHBzZXVkbyBwYXJhbWV0ZXIgdG8gc3BlY2lmeVxuICAgKiB0aGUgcmVnaW9uIGluIHdoaWNoIHRoZSBzdGFjayBpcyBjcmVhdGVkLiBTcGVjaWZ5aW5nIGFuIGVtcHR5IHN0cmluZyBpc1xuICAgKiBlcXVpdmFsZW50IHRvIHNwZWNpZnlpbmcgUk9TOjpSZWdpb24uXG4gICAqIEByZXR1cm5zIGEgdG9rZW4gcmVwcmVzZW50ZWQgYXMgYSBzdHJpbmcgYXJyYXlcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgZ2V0QXpzKHJlZ2lvbjogc3RyaW5nKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBUb2tlbi5hc0xpc3QobmV3IEZuR2V0QVpzKHJlZ2lvbikpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBpbnRyaW5zaWMgZnVuY3Rpb24gYGBGbjo6R2V0U3RhY2tPdXRwdXRgYCByZXR1cm5zIHRoZSB2YWx1ZSBvZiBhbiBvdXRwdXRcbiAgICogZXhwb3J0ZWQgYnkgYW5vdGhlciBzdGFjay5cbiAgICogQHJldHVybnMgYSB0b2tlbiByZXByZXNlbnRlZCBhcyBhIHN0cmluZ1xuICAgKi9cbiAgcHVibGljIHN0YXRpYyBnZXRTdGFja091dHB1dChcbiAgICBzdGFja0lEOiBzdHJpbmcsXG4gICAgb3V0cHV0S2V5OiBzdHJpbmcsXG4gICAgc3RhY2tSZWdpb24/OiBzdHJpbmdcbiAgKTogSVJlc29sdmFibGUge1xuICAgIHJldHVybiBUb2tlbi5hc0FueShuZXcgRm5HZXRTdGFja091dHB1dChbc3RhY2tJRCwgb3V0cHV0S2V5LCBzdGFja1JlZ2lvbl0pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgaW50cmluc2ljIGZ1bmN0aW9uIGBgRm46OkZpbmRJbk1hcGBgIHJldHVybnMgdGhlIHZhbHVlIGNvcnJlc3BvbmRpbmcgdG9cbiAgICoga2V5cyBpbiBhIHR3by1sZXZlbCBtYXAgdGhhdCBpcyBkZWNsYXJlZCBpbiB0aGUgTWFwcGluZ3Mgc2VjdGlvbi5cbiAgICogQHJldHVybnMgYSB0b2tlbiByZXByZXNlbnRlZCBhcyBhIHN0cmluZ1xuICAgKi9cbiAgcHVibGljIHN0YXRpYyBmaW5kSW5NYXAoXG4gICAgbWFwTmFtZTogc3RyaW5nLFxuICAgIHRvcExldmVsS2V5OiBzdHJpbmcsXG4gICAgc2Vjb25kTGV2ZWxLZXk6IHN0cmluZ1xuICApOiBJUmVzb2x2YWJsZSB7XG4gICAgcmV0dXJuIFRva2VuLmFzQW55KG5ldyBGbkZpbmRJbk1hcChbbWFwTmFtZSwgdG9wTGV2ZWxLZXksIHNlY29uZExldmVsS2V5XSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiBhbGwgdGhlIHNwZWNpZmllZCBjb25kaXRpb25zIGV2YWx1YXRlIHRvIHRydWUsIG9yIHJldHVybnNcbiAgICogZmFsc2UgaWYgYW55IG9uZSBvZiB0aGUgY29uZGl0aW9ucyBldmFsdWF0ZXMgdG8gZmFsc2UuIGBgRm46OkFuZGBgIGFjdHMgYXNcbiAgICogYW4gQU5EIG9wZXJhdG9yLiBUaGUgbWluaW11bSBudW1iZXIgb2YgY29uZGl0aW9ucyB0aGF0IHlvdSBjYW4gaW5jbHVkZSBpc1xuICAgKiAyLCBhbmQgdGhlIG1heGltdW0gaXMgMTAuXG4gICAqIEBwYXJhbSBjb25kaXRpb25zIGNvbmRpdGlvbnMgdG8gQU5EXG4gICAqIEByZXR1cm5zIGFuIEZuQ29uZGl0aW9uIHRva2VuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGNvbmRpdGlvbkFuZChcbiAgICAuLi5jb25kaXRpb25zOiAoc3RyaW5nIHwgSVJvc0NvbmRpdGlvbkV4cHJlc3Npb24pW11cbiAgKTogSVJvc0NvbmRpdGlvbkV4cHJlc3Npb24ge1xuICAgIHJldHVybiBuZXcgRm5BbmQoLi4uY29uZGl0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogQ29tcGFyZXMgaWYgdHdvIHZhbHVlcyBhcmUgZXF1YWwuIFJldHVybnMgdHJ1ZSBpZiB0aGUgdHdvIHZhbHVlcyBhcmUgZXF1YWxcbiAgICogb3IgZmFsc2UgaWYgdGhleSBhcmVuJ3QuXG4gICAqIEBwYXJhbSBsaHMgQSB2YWx1ZSBvZiBhbnkgdHlwZSB0aGF0IHlvdSB3YW50IHRvIGNvbXBhcmUuXG4gICAqIEBwYXJhbSByaHMgQSB2YWx1ZSBvZiBhbnkgdHlwZSB0aGF0IHlvdSB3YW50IHRvIGNvbXBhcmUuXG4gICAqIEByZXR1cm5zIGFuIEZuQ29uZGl0aW9uIHRva2VuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGNvbmRpdGlvbkVxdWFscyhsaHM6IGFueSwgcmhzOiBhbnkpOiBJUm9zQ29uZGl0aW9uRXhwcmVzc2lvbiB7XG4gICAgcmV0dXJuIG5ldyBGbkVxdWFscyhsaHMsIHJocyk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBvbmUgdmFsdWUgaWYgdGhlIHNwZWNpZmllZCBjb25kaXRpb24gZXZhbHVhdGVzIHRvIHRydWUgYW5kIGFub3RoZXJcbiAgICogdmFsdWUgaWYgdGhlIHNwZWNpZmllZCBjb25kaXRpb24gZXZhbHVhdGVzIHRvIGZhbHNlLlxuICAgKiBAcGFyYW0gY29uZGl0aW9uSWQgQSByZWZlcmVuY2UgdG8gYSBjb25kaXRpb24gaW4gdGhlIENvbmRpdGlvbnMgc2VjdGlvbi4gVXNlXG4gICAqIHRoZSBjb25kaXRpb24ncyBuYW1lIHRvIHJlZmVyZW5jZSBpdC5cbiAgICogQHBhcmFtIHZhbHVlSWZUcnVlIEEgdmFsdWUgdG8gYmUgcmV0dXJuZWQgaWYgdGhlIHNwZWNpZmllZCBjb25kaXRpb25cbiAgICogZXZhbHVhdGVzIHRvIHRydWUuXG4gICAqIEBwYXJhbSB2YWx1ZUlmRmFsc2UgQSB2YWx1ZSB0byBiZSByZXR1cm5lZCBpZiB0aGUgc3BlY2lmaWVkIGNvbmRpdGlvblxuICAgKiBldmFsdWF0ZXMgdG8gZmFsc2UuXG4gICAqIEByZXR1cm5zIGFuIEZuQ29uZGl0aW9uIHRva2VuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGNvbmRpdGlvbklmKFxuICAgIGNvbmRpdGlvbklkOiBzdHJpbmcgfCBJUm9zQ29uZGl0aW9uRXhwcmVzc2lvbixcbiAgICB2YWx1ZUlmVHJ1ZTogYW55LFxuICAgIHZhbHVlSWZGYWxzZTogYW55XG4gICk6IGFueSB7XG4gICAgcmV0dXJuIG5ldyBGbklmKGNvbmRpdGlvbklkLCB2YWx1ZUlmVHJ1ZSwgdmFsdWVJZkZhbHNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgZm9yIGEgY29uZGl0aW9uIHRoYXQgZXZhbHVhdGVzIHRvIGZhbHNlIG9yIHJldHVybnMgZmFsc2UgZm9yIGFcbiAgICogY29uZGl0aW9uIHRoYXQgZXZhbHVhdGVzIHRvIHRydWUuIGBgRm46Ok5vdGBgIGFjdHMgYXMgYSBOT1Qgb3BlcmF0b3IuXG4gICAqIEBwYXJhbSBjb25kaXRpb24gQSBjb25kaXRpb24gc3VjaCBhcyBgYEZuOjpFcXVhbHNgYCB0aGF0IGV2YWx1YXRlcyB0byB0cnVlXG4gICAqIG9yIGZhbHNlLlxuICAgKiBAcmV0dXJucyBhbiBGbkNvbmRpdGlvbiB0b2tlblxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBjb25kaXRpb25Ob3QoXG4gICAgY29uZGl0aW9uOiBzdHJpbmcgfCBJUm9zQ29uZGl0aW9uRXhwcmVzc2lvblxuICApOiBJUm9zQ29uZGl0aW9uRXhwcmVzc2lvbiB7XG4gICAgcmV0dXJuIG5ldyBGbk5vdChjb25kaXRpb24pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiBhbnkgb25lIG9mIHRoZSBzcGVjaWZpZWQgY29uZGl0aW9ucyBldmFsdWF0ZSB0byB0cnVlLCBvclxuICAgKiByZXR1cm5zIGZhbHNlIGlmIGFsbCBvZiB0aGUgY29uZGl0aW9ucyBldmFsdWF0ZXMgdG8gZmFsc2UuIGBgRm46Ok9yYGAgYWN0c1xuICAgKiBhcyBhbiBPUiBvcGVyYXRvci4gVGhlIG1pbmltdW0gbnVtYmVyIG9mIGNvbmRpdGlvbnMgdGhhdCB5b3UgY2FuIGluY2x1ZGUgaXNcbiAgICogMiwgYW5kIHRoZSBtYXhpbXVtIGlzIDEwLlxuICAgKiBAcGFyYW0gY29uZGl0aW9ucyBjb25kaXRpb25zIHRoYXQgZXZhbHVhdGVzIHRvIHRydWUgb3IgZmFsc2UuXG4gICAqIEByZXR1cm5zIGFuIEZuQ29uZGl0aW9uIHRva2VuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGNvbmRpdGlvbk9yKFxuICAgIC4uLmNvbmRpdGlvbnM6IChzdHJpbmcgfCBJUm9zQ29uZGl0aW9uRXhwcmVzc2lvbilbXVxuICApOiBJUm9zQ29uZGl0aW9uRXhwcmVzc2lvbiB7XG4gICAgcmV0dXJuIG5ldyBGbk9yKC4uLmNvbmRpdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBpbnRyaW5zaWMgZnVuY3Rpb24gRm46OkluZGVudCBhZGp1c3QgdGhlIGluZGVudGF0aW9uIG9mIHRoZSBzdHJpbmcuXG4gICAqIEBwYXJhbSBzdHIgU3RyaW5ncyB0aGF0IG5lZWQgdG8gYmUgaW5kZW50ZWQuXG4gICAqIEBwYXJhbSBsZXZlbCBJbmRlbnRhdGlvbiBsZXZlbC4gVGhlIHJhbmdlIGlzIFswLDIwXS5cbiAgICogQHBhcmFtIGluZGVudCBPcHRpb25hbCwgZGVmYXVsdHMgdG8gMiBmb3IgdHdvIFNwYWNlcyBwZXIgbGV2ZWwsIGluIHRoZSByYW5nZSBbMCw0XS5cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgaW5kZW50KHN0cjogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlLCBsZXZlbDogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlLCBpbmRlbnQ/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGUpOiBzdHJpbmcge1xuICAgIHJldHVybiBuZXcgRm5JbmRlbnQoc3RyLCBsZXZlbCwgaW5kZW50KS50b1N0cmluZygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBpdGVtIGluIHRoZSBsaXN0LlxuICAgKiBAcGFyYW0gaXRlbVRvRmluZEluZGV4IFRoZSBpdGVtIHRvIGZpbmQgaW4gdGhlIGxpc3QuXG4gICAqIEBwYXJhbSBpdGVtTGlzdCBUaGUgbGlzdCB0byBmaW5kIHRoZSBpdGVtIGluLlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBpbmRleChpdGVtVG9GaW5kSW5kZXg6IGFueSwgaXRlbUxpc3Q6IGFueVtdIHwgcm9zLklSZXNvbHZhYmxlKTogc3RyaW5nIHtcbiAgICByZXR1cm4gbmV3IEZuSW5kZXgoaXRlbVRvRmluZEluZGV4LCBpdGVtTGlzdCkudG9TdHJpbmcoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBsZW5ndGggb2YgdGhlIG9iamVjdC5cbiAgICogQHBhcmFtIG9iaiBBbiBvYmplY3Qgd2hvc2UgbGVuZ3RoIG5lZWRzIHRvIGJlIGNvbXB1dGVkLiBUaHJlZSB0eXBlcyBhcmUgc3VwcG9ydGVkOiBzdHJpbmdzLCBsaXN0cywgYW5kIGRpY3Rpb25hcmllcy5cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgbGVuZ3RoT2Yob2JqOiBhbnkpOiBzdHJpbmcge1xuICAgIHJldHVybiBuZXcgRm5MZW5ndGgob2JqKS50b1N0cmluZygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGZvcm1hdHRlZCB0aW1lIG9mIHRoZSBvYmplY3QuXG4gICAqIEBwYXJhbSBmb3JtYXQgVGhlIGZvcm1hdCBvZiB0aGUgdGltZS5cbiAgICogQHBhcmFtIHRpbWVab25lIFRoZSB0aW1lIHpvbmUuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGZvcm1hdFRpbWUoZm9ybWF0OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUsIHRpbWVab25lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUpOiBzdHJpbmcge1xuICAgIHJldHVybiBuZXcgRm5Gb3JtYXRUaW1lKGZvcm1hdCwgdGltZVpvbmUpLnRvU3RyaW5nKCk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIGludHJpbnNpYyBmdW5jdGlvbiBGbjo6TWFya2V0cGxhY2VJbWFnZSByZXR1cm5zIHRoZSBkZWZhdWx0IGltYWdlIElEIG9mIHRoZSBzcGVjaWZpZWQgY2xvdWQgbWFya2V0cGxhY2UgaW1hZ2UgcHJvZHVjdCBDb2RlLlxuICAgKiBAcGFyYW0gaW1hZ2VQcm9kdWN0Q29kZSBUaGUgcHJvZHVjdCBjb2RlIG9mIHRoZSBjbG91ZCBtYXJrZXRwbGFjZSBpbWFnZS5cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgbWFya2V0cGxhY2VJbWFnZShpbWFnZVByb2R1Y3RDb2RlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUpOiBzdHJpbmcge1xuICAgIHJldHVybiBuZXcgRm5NYXJrZXRwbGFjZUltYWdlKGltYWdlUHJvZHVjdENvZGUpLnRvU3RyaW5nKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB3aGV0aGVyIGEgdmFsdWUgaW4gdGhlIHNwZWNpZmllZCBhcnJheSBpcyB0cnVlIG9yIGZhbHNlLiBSZXR1cm5zIHRydWUgaWYgYW55IGl0ZW0gaW4gdGhlIGFycmF5IGlzIHRydWUsIGFuZCBmYWxzZSBvdGhlcndpc2UuXG4gICAqIEBwYXJhbSB2YWx1ZXMgQW4gYXJyYXkgb2YgdmFsdWVzLlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBhbnkodmFsdWVzOiBhbnlbXSB8IHJvcy5JUmVzb2x2YWJsZSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG5ldyBGbkFueSh2YWx1ZXMpLnRvU3RyaW5nKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIGF0IGxlYXN0IG9uZSBtZW1iZXIgb2YgdGhlIGxpc3QgbWF0Y2hlcyB0aGUgc3BlY2lmaWVkIHZhbHVlIGFuZCBmYWxzZSBvdGhlcndpc2UuXG4gICAqIEBwYXJhbSB2YWx1ZXMgQW4gYXJyYXkgb2YgdmFsdWVzLlxuICAgKiBAcGFyYW0gdmFsdWUgQSB2YWx1ZS5cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgY29udGFpbnModmFsdWVzOiBhbnlbXSB8IHJvcy5JUmVzb2x2YWJsZSwgdmFsdWU6IGFueSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG5ldyBGbkNvbnRhaW5zKHZhbHVlcywgdmFsdWUpLnRvU3RyaW5nKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIGV2ZXJ5IG1lbWJlciBvZiB0aGUgZmlyc3QgbGlzdCBpcyBlcXVhbCB0byBhdCBsZWFzdCBvbmUgdmFsdWUgaW4gdGhlIHNlY29uZCBsaXN0LCBhbmQgZmFsc2Ugb3RoZXJ3aXNlLlxuICAgKiBAcGFyYW0gdmFsdWVzMSBBbiBhcnJheSBvZiB2YWx1ZXMuXG4gICAqIEBwYXJhbSB2YWx1ZXMyIEFuIGFycmF5IG9mIHZhbHVlcy5cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgZWFjaE1lbWJlckluKHZhbHVlczE6IGFueVtdIHwgcm9zLklSZXNvbHZhYmxlLCB2YWx1ZXMyOiBhbnlbXSB8IHJvcy5JUmVzb2x2YWJsZSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG5ldyBGbkVhY2hNZW1iZXJJbih2YWx1ZXMxLCB2YWx1ZXMyKS50b1N0cmluZygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiBhIHNwZWNpZmllZCBzdHJpbmcgbWF0Y2hlcyBhIHNwZWNpZmllZCBwYXR0ZXJuLlxuICAgKiBAcGFyYW0gcGF0dGVybiBBIHJlZ3VsYXIgZXhwcmVzc2lvbiBpbiBzdHJpbmcgZm9ybS5cbiAgICogQHBhcmFtIHZhbHVlIFRoZSBzdHJpbmcgdG8gbWF0Y2guXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIG1hdGNoUGF0dGVybihwYXR0ZXJuOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUsIHZhbHVlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUpOiBzdHJpbmcge1xuICAgIHJldHVybiBuZXcgRm5NYXRjaFBhdHRlcm4ocGF0dGVybiwgdmFsdWUpLnRvU3RyaW5nKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGxpc3Qgb2YgQ0lEUiBhZGRyZXNzZXMuXG4gICAqIEBwYXJhbSBpcEJsb2NrIFRoZSBJUCBhZGRyZXNzIGJsb2NrIGZyb20gd2hpY2ggeW91IHdhbnQgdG8gYWxsb2NhdGUgdGhlIENJRFIuIFRoZSBibG9jayBtdXN0IGJlIGV4cHJlc3NlZCBpbiBDSURSIG5vdGF0aW9uLlxuICAgKiBAcGFyYW0gY291bnQgVGhlIG51bWJlciBvZiBJUHY0IENJRFJzIHRvIGdlbmVyYXRlLiBWYWxpZCBpbnB1dCB2YWx1ZXMgcmFuZ2UgZnJvbSAxIHRvIDI1NiBhbmQgYXJlIHVzZWQgdG8gZGVjaWRlIHRoZSB0b3RhbCBudW1iZXIgb2YgZmluYWwgc3VibmV0cy5cbiAgICogQHBhcmFtIGNpZHJCaXRzIFRoZSBudW1iZXIgb2Ygc3VibmV0IGJpdHMgb2YgdGhlIG5ldyBDSURSLiBGb3IgZXhhbXBsZSwgaWYgdGhlIHZhbHVlIFwiOFwiIGlzIHNwZWNpZmllZCBmb3IgdGhpcyBwYXJhbWV0ZXIsIGEgQ0lEUiB3aXRoIGEgXCIvMjRcIiBtYXNrIHdpbGwgYmUgY3JlYXRlZC5cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgY2lkcihpcEJsb2NrOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUsIGNvdW50OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGUsIGNpZHJCaXRzOiBudW1iZXIgfCByb3MuSVJlc29sdmFibGUpOiBzdHJpbmcge1xuICAgIHJldHVybiBuZXcgRm5DaWRyKGlwQmxvY2ssIGNvdW50LCBjaWRyQml0cykudG9TdHJpbmcoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgYSBzcGVjaWZpZWQgc3RyaW5nIG1hdGNoZXMgYWxsIHZhbHVlcyBpbiBhIGxpc3QuXG4gICAqIHBhcmFtIGxpc3RPZlN0cmluZ3MgQSBsaXN0IG9mIHN0cmluZ3MsIHN1Y2ggYXMgXCJBXCIsIFwiQlwiLCBcIkNcIi5cbiAgICogcGFyYW0gdmFsdWUgQSBzdHJpbmcsIHN1Y2ggYXMgXCJBXCIsIHRoYXQgeW91IHdhbnQgdG8gY29tcGFyZSBhZ2FpbnN0IGEgbGlzdFxuICAgKiBvZiBzdHJpbmdzLlxuICAgKiBAcmV0dXJucyBhbiBGbkNvbmRpdGlvbiB0b2tlblxuICAgKi9cbiAgLy8gc3RhdGljIGNvbmRpdGlvbkVhY2hNZW1iZXJFcXVhbHMoXG4gIC8vICAgbGlzdE9mU3RyaW5nczogc3RyaW5nW10sXG4gIC8vICAgdmFsdWU6IHN0cmluZ1xuICAvLyApOiBJUm9zQ29uZGl0aW9uRXhwcmVzc2lvbiB7XG4gIC8vICAgcmV0dXJuIG5ldyBGbkVhY2hNZW1iZXJFcXVhbHMobGlzdE9mU3RyaW5ncywgdmFsdWUpO1xuICAvLyB9XG5cbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHt9XG59XG5cbi8qKlxuICogQmFzZSBjbGFzcyBmb3IgdG9rZW5zIHRoYXQgcmVwcmVzZW50IFJPUyBpbnRyaW5zaWMgZnVuY3Rpb25zLlxuICovXG5jbGFzcyBGbkJhc2UgZXh0ZW5kcyBJbnRyaW5zaWMge1xuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcbiAgICBzdXBlcih7IFtuYW1lXTogdmFsdWUgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZuSW5kZW50IGV4dGVuZHMgRm5CYXNlIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gYGBJbmRlbnRgYCBmdW5jdGlvbi5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHN0cjogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlLCBsZXZlbDogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlLCBpbmRlbnQ/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGUpIHtcbiAgICBpZiAodHlwZW9mIGxldmVsID09PSAnbnVtYmVyJyAmJiAobGV2ZWwgPCAwIHx8IGxldmVsID4gMjApKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJsZXZlbCBtdXN0IGJlIGdyZWF0ZXIgdGhhbiAwIG9yIGxlc3MgdGhhbiAyMFwiKTtcbiAgICB9XG4gICAgaWYgKGluZGVudCAmJiB0eXBlb2YgbGV2ZWwgPT09ICdudW1iZXInICYmIChpbmRlbnQgPCAwIHx8IGluZGVudCA+IDQpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbmRlbnQgbXVzdCBiZSBncmVhdGVyIHRoYW4gMCBvciBsZXNzIHRoYW4gNFwiKTtcbiAgICB9XG4gICAgc3VwZXIoXCJGbjo6SW5kZW50XCIsIFtzdHIsIGxldmVsLCBpbmRlbnRdKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRm5JbmRleCBleHRlbmRzIEZuQmFzZSB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGBgSW5kZXhgYCBmdW5jdGlvbi5cbiAgICovXG4gIGNvbnN0cnVjdG9yKGl0ZW1Ub0ZpbmRJbmRleDogYW55LCBpdGVtTGlzdDogYW55W10gfCByb3MuSVJlc29sdmFibGUpIHtcbiAgICBzdXBlcihcIkZuOjpJbmRleFwiLCBbaXRlbVRvRmluZEluZGV4LCBpdGVtTGlzdF0pO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGbkxlbmd0aCBleHRlbmRzIEZuQmFzZSB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGBgTGVuZ3RoYGAgZnVuY3Rpb24uXG4gICAqL1xuICBjb25zdHJ1Y3RvcihvYmo6IGFueSkge1xuICAgIHN1cGVyKFwiRm46Okxlbmd0aFwiLCBvYmopO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGbkZvcm1hdFRpbWUgZXh0ZW5kcyBGbkJhc2Uge1xuICAvKipcbiAgICogQ3JlYXRlcyBhbiBgYEZvcm1hdFRpbWVgYCBmdW5jdGlvbi5cbiAgICovXG4gIGNvbnN0cnVjdG9yKGZvcm1hdDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlLCB0aW1lWm9uZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlKSB7XG4gICAgc3VwZXIoXCJGbjo6Rm9ybWF0VGltZVwiLCBbZm9ybWF0LCB0aW1lWm9uZV0pO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGbk1hcmtldHBsYWNlSW1hZ2UgZXh0ZW5kcyBGbkJhc2Uge1xuICAvKipcbiAgICogQ3JlYXRlcyBhbiBgYE1hcmtldHBsYWNlSW1hZ2VgYCBmdW5jdGlvbi5cbiAgICovXG4gIGNvbnN0cnVjdG9yKGltYWdlUHJvZHVjdENvZGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSkge1xuICAgIHN1cGVyKFwiRm46Ok1hcmtldHBsYWNlSW1hZ2VcIiwgaW1hZ2VQcm9kdWN0Q29kZSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZuQW55IGV4dGVuZHMgRm5CYXNlIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gYGBBbnlgYCBmdW5jdGlvbi5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlczogYW55W10gfCByb3MuSVJlc29sdmFibGUpIHtcbiAgICBzdXBlcihcIkZuOjpBbnlcIiwgdmFsdWVzKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRm5Db250YWlucyBleHRlbmRzIEZuQmFzZSB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGBgQ29udGFpbnNgYCBmdW5jdGlvbi5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlczogYW55W10gfCByb3MuSVJlc29sdmFibGUsIHZhbHVlOiBhbnkpIHtcbiAgICBzdXBlcihcIkZuOjpDb250YWluc1wiLCBbdmFsdWVzLCB2YWx1ZV0pO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGbkVhY2hNZW1iZXJJbiBleHRlbmRzIEZuQmFzZSB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGBgRWFjaE1lbWJlckluYGAgZnVuY3Rpb24uXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZXMxOiBhbnlbXSB8IHJvcy5JUmVzb2x2YWJsZSwgdmFsdWVzMjogYW55W10gfCByb3MuSVJlc29sdmFibGUpIHtcbiAgICBzdXBlcihcIkZuOjpFYWNoTWVtYmVySW5cIiwgW3ZhbHVlczEsIHZhbHVlczJdKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRm5NYXRjaFBhdHRlcm4gZXh0ZW5kcyBGbkJhc2Uge1xuICAvKipcbiAgICogQ3JlYXRlcyBhbiBgYE1hdGNoUGF0dGVybmBgIGZ1bmN0aW9uLlxuICAgKi9cbiAgY29uc3RydWN0b3IocGF0dGVybjogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlLCB2YWx1ZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlKSB7XG4gICAgc3VwZXIoXCJGbjo6TWF0Y2hQYXR0ZXJuXCIsIFtwYXR0ZXJuLCB2YWx1ZV0pO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGbkNpZHIgZXh0ZW5kcyBGbkJhc2Uge1xuICAvKipcbiAgICogQ3JlYXRlcyBhbiBgYENpZHJgYCBmdW5jdGlvbi5cbiAgICovXG4gIGNvbnN0cnVjdG9yKGlwQmxvY2s6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSwgY291bnQ6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZSwgY2lkckJpdHM6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZSkge1xuICAgIHN1cGVyKFwiRm46OkNpZHJcIiwgW2lwQmxvY2ssIGNvdW50LCBjaWRyQml0c10pO1xuICB9XG59XG5cbi8vIG5ldyBmdW5jdGlvblxuZXhwb3J0IGNsYXNzIEZuU3RyIGV4dGVuZHMgRm5CYXNlIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gYGBTdHJgYCBmdW5jdGlvbi5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlOiBhbnkpIHtcbiAgICBzdXBlcihcIkZuOjpTdHJcIiwgdmFsdWUpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGbkJhc2U2NERlY29kZSBleHRlbmRzIEZuQmFzZSB7XG4gIGNvbnN0cnVjdG9yKGRhdGE6IGFueSkge1xuICAgIHN1cGVyKFwiRm46OkJhc2U2NERlY29kZVwiLCBkYXRhKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRm5SZXBsYWNlIGV4dGVuZHMgRm5CYXNlIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gYGBSZXBsYWNlYGAgZnVuY3Rpb24uXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZTogYW55KSB7XG4gICAgc3VwZXIoXCJGbjo6UmVwbGFjZVwiLCB2YWx1ZSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZuR2V0SnNvblZhbHVlIGV4dGVuZHMgRm5CYXNlIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gYGBHZXRKc29uVmFsdWVgYCBmdW5jdGlvbi5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlOiBhbnkpIHtcbiAgICBzdXBlcihcIkZuOjpHZXRKc29uVmFsdWVcIiwgdmFsdWUpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGbkF2ZyBleHRlbmRzIEZuQmFzZSB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGBgQXZnYGAgZnVuY3Rpb24uXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZTogYW55KSB7XG4gICAgc3VwZXIoXCJGbjo6QXZnXCIsIHZhbHVlKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRm5BZGQgZXh0ZW5kcyBGbkJhc2Uge1xuICAvKipcbiAgICogQ3JlYXRlcyBhbiBgYEFkZGBgIGZ1bmN0aW9uLlxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWVzOiBhbnkpIHtcbiAgICBzdXBlcihcIkZuOjpBZGRcIiwgdmFsdWVzKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRm5DYWxjdWxhdGUgZXh0ZW5kcyBGbkJhc2Uge1xuICAvKipcbiAgICogQ3JlYXRlcyBhbiBgYENhbGN1bGF0ZWBgIGZ1bmN0aW9uLlxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU6IGFueSkge1xuICAgIHN1cGVyKFwiRm46OkNhbGN1bGF0ZVwiLCB2YWx1ZSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZuTWF4IGV4dGVuZHMgRm5CYXNlIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gYGBNYXhgYCBmdW5jdGlvbi5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlczogYW55KSB7XG4gICAgc3VwZXIoXCJGbjo6TWF4XCIsIHZhbHVlcyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZuTWluIGV4dGVuZHMgRm5CYXNlIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gYGBNaW5gYCBmdW5jdGlvbi5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlczogYW55KSB7XG4gICAgc3VwZXIoXCJGbjo6TWluXCIsIHZhbHVlcyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZuR2V0U3RhY2tPdXRwdXQgZXh0ZW5kcyBGbkJhc2Uge1xuICAvKipcbiAgICogQ3JlYXRlcyBhbiBgYEdldFN0YWNrT3V0cHV0YGAgZnVuY3Rpb24uXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZTogYW55KSB7XG4gICAgc3VwZXIoXCJGbjo6R2V0U3RhY2tPdXRwdXRcIiwgdmFsdWUpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGbkpxIGV4dGVuZHMgRm5CYXNlIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gYGBKcWBgIGZ1bmN0aW9uLlxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU6IGFueSkge1xuICAgIHN1cGVyKFwiRm46OkpxXCIsIHZhbHVlKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRm5NZXJnZU1hcFRvTGlzdCBleHRlbmRzIEZuQmFzZSB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGBgRm5NZXJnZU1hcFRvTGlzdGBgIGZ1bmN0aW9uLlxuICAgKi9cbiAgY29uc3RydWN0b3IobWFwTGlzdDogYW55KSB7XG4gICAgc3VwZXIoXCJGbjo6TWVyZ2VNYXBUb0xpc3RcIiwgbWFwTGlzdCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZuU2VsZWN0TWFwTGlzdCBleHRlbmRzIEZuQmFzZSB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGBgRm5NZXJnZU1hcFRvTGlzdGBgIGZ1bmN0aW9uLlxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU6IGFueSkge1xuICAgIHN1cGVyKFwiRm46OlNlbGVjdE1hcExpc3RcIiwgdmFsdWUpO1xuICB9XG59XG5cbi8qKlxuICogVGhlIGludHJpbnNpYyBmdW5jdGlvbiBgYFJlZmBgIHJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSBzcGVjaWZpZWQgcGFyYW1ldGVyIG9yIHJlc291cmNlLlxuICogV2hlbiB5b3Ugc3BlY2lmeSBhIHBhcmFtZXRlcidzIGxvZ2ljYWwgbmFtZSwgaXQgcmV0dXJucyB0aGUgdmFsdWUgb2YgdGhlIHBhcmFtZXRlci5cbiAqIFdoZW4geW91IHNwZWNpZnkgYSByZXNvdXJjZSdzIGxvZ2ljYWwgbmFtZSwgaXQgcmV0dXJucyBhIHZhbHVlIHRoYXQgeW91IGNhbiB0eXBpY2FsbHkgdXNlIHRvIHJlZmVyIHRvIHRoYXQgcmVzb3VyY2UsIHN1Y2ggYXMgYSBwaHlzaWNhbCBJRC5cbiAqL1xuZXhwb3J0IGNsYXNzIEZuUmVmIGV4dGVuZHMgRm5CYXNlIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gYGBSZWZgYCBmdW5jdGlvbi5cbiAgICogQHBhcmFtIGxvZ2ljYWxOYW1lIFRoZSBsb2dpY2FsIG5hbWUgb2YgYSBwYXJhbWV0ZXIvcmVzb3VyY2UgZm9yIHdoaWNoIHlvdSB3YW50IHRvIHJldHJpZXZlIGl0cyB2YWx1ZS5cbiAgICovXG4gIGNvbnN0cnVjdG9yKGxvZ2ljYWxOYW1lOiBzdHJpbmcpIHtcbiAgICBzdXBlcihcIlJlZlwiLCBsb2dpY2FsTmFtZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBUaGUgaW50cmluc2ljIGZ1bmN0aW9uIGBgRm46OkZpbmRJbk1hcGBgIHJldHVybnMgdGhlIHZhbHVlIGNvcnJlc3BvbmRpbmcgdG8ga2V5cyBpbiBhIHR3by1sZXZlbFxuICogbWFwIHRoYXQgaXMgZGVjbGFyZWQgaW4gdGhlIE1hcHBpbmdzIHNlY3Rpb24uXG4gKi9cbmV4cG9ydCBjbGFzcyBGbkZpbmRJbk1hcCBleHRlbmRzIEZuQmFzZSB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGBgRm46OkZpbmRJbk1hcGBgIGZ1bmN0aW9uLlxuICAgKiBwYXJhbSBtYXBOYW1lIFRoZSBsb2dpY2FsIG5hbWUgb2YgYSBtYXBwaW5nIGRlY2xhcmVkIGluIHRoZSBNYXBwaW5ncyBzZWN0aW9uIHRoYXQgY29udGFpbnMgdGhlIGtleXMgYW5kIHZhbHVlcy5cbiAgICogcGFyYW0gdG9wTGV2ZWxLZXkgVGhlIHRvcC1sZXZlbCBrZXkgbmFtZS4gSXRzIHZhbHVlIGlzIGEgbGlzdCBvZiBrZXktdmFsdWUgcGFpcnMuXG4gICAqIHBhcmFtIHNlY29uZExldmVsS2V5IFRoZSBzZWNvbmQtbGV2ZWwga2V5IG5hbWUsIHdoaWNoIGlzIHNldCB0byBvbmUgb2YgdGhlIGtleXMgZnJvbSB0aGUgbGlzdCBhc3NpZ25lZCB0byBUb3BMZXZlbEtleS5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlOiBhbnkpIHtcbiAgICBzdXBlcihcIkZuOjpGaW5kSW5NYXBcIiwgdmFsdWUpO1xuICB9XG59XG5cbi8qKlxuICogVGhlIGBgRm46OkdldEF0dGBgIGludHJpbnNpYyBmdW5jdGlvbiByZXR1cm5zIHRoZSB2YWx1ZSBvZiBhbiBhdHRyaWJ1dGUgZnJvbSBhIHJlc291cmNlIGluIHRoZSB0ZW1wbGF0ZS5cbiAqL1xuZXhwb3J0IGNsYXNzIEZuR2V0QXR0IGV4dGVuZHMgRm5CYXNlIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBgYEZuOjpHZXRBdHRgYCBmdW5jdGlvbi5cbiAgICogQHBhcmFtIGxvZ2ljYWxOYW1lT2ZSZXNvdXJjZSBUaGUgbG9naWNhbCBuYW1lIChhbHNvIGNhbGxlZCBsb2dpY2FsIElEKSBvZiB0aGUgcmVzb3VyY2UgdGhhdCBjb250YWlucyB0aGUgYXR0cmlidXRlIHRoYXQgeW91IHdhbnQuXG4gICAqIEBwYXJhbSBhdHRyaWJ1dGVOYW1lIFRoZSBuYW1lIG9mIHRoZSByZXNvdXJjZS1zcGVjaWZpYyBhdHRyaWJ1dGUgd2hvc2UgdmFsdWUgeW91IHdhbnQuIFNlZSB0aGUgcmVzb3VyY2UncyByZWZlcmVuY2UgcGFnZSBmb3IgZGV0YWlscyBhYm91dCB0aGUgYXR0cmlidXRlcyBhdmFpbGFibGUgZm9yIHRoYXQgcmVzb3VyY2UgdHlwZS5cbiAgICovXG4gIGNvbnN0cnVjdG9yKGxvZ2ljYWxOYW1lT2ZSZXNvdXJjZTogc3RyaW5nLCBhdHRyaWJ1dGVOYW1lOiBzdHJpbmcpIHtcbiAgICBzdXBlcihcIkZuOjpHZXRBdHRcIiwgW2xvZ2ljYWxOYW1lT2ZSZXNvdXJjZSwgYXR0cmlidXRlTmFtZV0pO1xuICB9XG59XG5cbi8qKlxuICogVGhlIGludHJpbnNpYyBmdW5jdGlvbiBgYEZuOjpHZXRBWnNgYCByZXR1cm5zIGFuIGFycmF5IHRoYXQgbGlzdHMgQXZhaWxhYmlsaXR5IFpvbmVzIGZvciBhXG4gKiBzcGVjaWZpZWQgcmVnaW9uLiBCZWNhdXNlIGN1c3RvbWVycyBoYXZlIGFjY2VzcyB0byBkaWZmZXJlbnQgQXZhaWxhYmlsaXR5IFpvbmVzLCB0aGUgaW50cmluc2ljXG4gKiBmdW5jdGlvbiBgYEZuOjpHZXRBWnNgYCBlbmFibGVzIHRlbXBsYXRlIGF1dGhvcnMgdG8gd3JpdGUgdGVtcGxhdGVzIHRoYXQgYWRhcHQgdG8gdGhlIGNhbGxpbmdcbiAqIHVzZXIncyBhY2Nlc3MuIFRoYXQgd2F5IHlvdSBkb24ndCBoYXZlIHRvIGhhcmQtY29kZSBhIGZ1bGwgbGlzdCBvZiBBdmFpbGFiaWxpdHkgWm9uZXMgZm9yIGFcbiAqIHNwZWNpZmllZCByZWdpb24uXG4gKi9cbmV4cG9ydCBjbGFzcyBGbkdldEFacyBleHRlbmRzIEZuQmFzZSB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGBgRm46OkdldEFac2BgIGZ1bmN0aW9uLlxuICAgKiBAcGFyYW0gcmVnaW9uIFRoZSBuYW1lIG9mIHRoZSByZWdpb24gZm9yIHdoaWNoIHlvdSB3YW50IHRvIGdldCB0aGUgQXZhaWxhYmlsaXR5IFpvbmVzLlxuICAgKi9cbiAgY29uc3RydWN0b3IocmVnaW9uOiBhbnkpIHtcbiAgICBzdXBlcihcIkZuOjpHZXRBWnNcIiwgcmVnaW9uKTtcbiAgfVxufVxuXG4vKipcbiAqIFRoZSBpbnRyaW5zaWMgZnVuY3Rpb24gYGBGbjo6U2VsZWN0YGAgcmV0dXJucyBhIHNpbmdsZSBvYmplY3QgZnJvbSBhIGxpc3Qgb2Ygb2JqZWN0cyBieSBpbmRleC5cbiAqL1xuZXhwb3J0IGNsYXNzIEZuU2VsZWN0IGV4dGVuZHMgRm5CYXNlIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gYGBGbjo6U2VsZWN0YGAgZnVuY3Rpb24uXG4gICAqIHBhcmFtIGluZGV4IFRoZSBpbmRleCBvZiB0aGUgb2JqZWN0IHRvIHJldHJpZXZlLiBUaGlzIG11c3QgYmUgYSB2YWx1ZSBmcm9tIHplcm8gdG8gTi0xLCB3aGVyZSBOIHJlcHJlc2VudHMgdGhlIG51bWJlciBvZiBlbGVtZW50cyBpbiB0aGUgYXJyYXkuXG4gICAqIHBhcmFtIGFycmF5IFRoZSBsaXN0IG9mIG9iamVjdHMgdG8gc2VsZWN0IGZyb20uIFRoaXMgbGlzdCBtdXN0IG5vdCBiZSBudWxsLCBub3IgY2FuIGl0IGhhdmUgbnVsbCBlbnRyaWVzLlxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU6IGFueSkge1xuICAgIHN1cGVyKFwiRm46OlNlbGVjdFwiLCB2YWx1ZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBUbyBzcGxpdCBhIHN0cmluZyBpbnRvIGEgbGlzdCBvZiBzdHJpbmcgdmFsdWVzIHNvIHRoYXQgeW91IGNhbiBzZWxlY3QgYW4gZWxlbWVudCBmcm9tIHRoZVxuICogcmVzdWx0aW5nIHN0cmluZyBsaXN0LCB1c2UgdGhlIGBgRm46OlNwbGl0YGAgaW50cmluc2ljIGZ1bmN0aW9uLiBTcGVjaWZ5IHRoZSBsb2NhdGlvbiBvZiBzcGxpdHNcbiAqIHdpdGggYSBkZWxpbWl0ZXIsIHN1Y2ggYXMgLCAoYSBjb21tYSkuIEFmdGVyIHlvdSBzcGxpdCBhIHN0cmluZywgdXNlIHRoZSBgYEZuOjpTZWxlY3RgYCBmdW5jdGlvblxuICogdG8gcGljayBhIHNwZWNpZmljIGVsZW1lbnQuXG4gKi9cbmV4cG9ydCBjbGFzcyBGblNwbGl0IGV4dGVuZHMgRm5CYXNlIHtcbiAgLyoqXG4gICAqIENyZWF0ZSBhbiBgYEZuOjpTcGxpdGBgIGZ1bmN0aW9uLlxuICAgKiBwYXJhbSBkZWxpbWl0ZXIgQSBzdHJpbmcgdmFsdWUgdGhhdCBkZXRlcm1pbmVzIHdoZXJlIHRoZSBzb3VyY2Ugc3RyaW5nIGlzIGRpdmlkZWQuXG4gICAqIHBhcmFtIHNvdXJjZSBUaGUgc3RyaW5nIHZhbHVlIHRoYXQgeW91IHdhbnQgdG8gc3BsaXQuXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZTogYW55KSB7XG4gICAgc3VwZXIoXCJGbjo6U3BsaXRcIiwgdmFsdWUpO1xuICB9XG59XG5cbi8qKlxuICogVGhlIGludHJpbnNpYyBmdW5jdGlvbiBgYEZuOjpTdWJgYCBzdWJzdGl0dXRlcyB2YXJpYWJsZXMgaW4gYW4gaW5wdXQgc3RyaW5nIHdpdGggdmFsdWVzIHRoYXRcbiAqIHlvdSBzcGVjaWZ5LiBJbiB5b3VyIHRlbXBsYXRlcywgeW91IGNhbiB1c2UgdGhpcyBmdW5jdGlvbiB0byBjb25zdHJ1Y3QgY29tbWFuZHMgb3Igb3V0cHV0c1xuICogdGhhdCBpbmNsdWRlIHZhbHVlcyB0aGF0IGFyZW4ndCBhdmFpbGFibGUgdW50aWwgeW91IGNyZWF0ZSBvciB1cGRhdGUgYSBzdGFjay5cbiAqL1xuZXhwb3J0IGNsYXNzIEZuU3ViIGV4dGVuZHMgRm5CYXNlIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gYGBGbjo6U3ViYGAgZnVuY3Rpb24uXG4gICAqIHBhcmFtIGJvZHkgQSBzdHJpbmcgd2l0aCB2YXJpYWJsZXMgdGhhdCBSb3MgVGVtcGxhdGUgc3Vic3RpdHV0ZXMgd2l0aCB0aGVpclxuICAgKiAgICAgICBhc3NvY2lhdGVkIHZhbHVlcyBhdCBydW50aW1lLiBXcml0ZSB2YXJpYWJsZXMgYXMgJHtNeVZhck5hbWV9LiBWYXJpYWJsZXNcbiAgICogICAgICAgY2FuIGJlIHRlbXBsYXRlIHBhcmFtZXRlciBuYW1lcywgcmVzb3VyY2UgbG9naWNhbCBJRHMsIHJlc291cmNlIGF0dHJpYnV0ZXMsXG4gICAqICAgICAgIG9yIGEgdmFyaWFibGUgaW4gYSBrZXktdmFsdWUgbWFwLiBJZiB5b3Ugc3BlY2lmeSBvbmx5IHRlbXBsYXRlIHBhcmFtZXRlciBuYW1lcyxcbiAgICogICAgICAgcmVzb3VyY2UgbG9naWNhbCBJRHMsIGFuZCByZXNvdXJjZSBhdHRyaWJ1dGVzLCBkb24ndCBzcGVjaWZ5IGEga2V5LXZhbHVlIG1hcC5cbiAgICogcGFyYW0gdmFyaWFibGVzIFRoZSBuYW1lIG9mIGEgdmFyaWFibGUgdGhhdCB5b3UgaW5jbHVkZWQgaW4gdGhlIFN0cmluZyBwYXJhbWV0ZXIuXG4gICAqICAgICAgICAgIFRoZSB2YWx1ZSB0aGF0IFJvcyBUZW1wbGF0ZSBzdWJzdGl0dXRlcyBmb3IgdGhlIGFzc29jaWF0ZWQgdmFyaWFibGUgbmFtZSBhdCBydW50aW1lLlxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU6IGFueSkge1xuICAgIHN1cGVyKFwiRm46OlN1YlwiLCB2YWx1ZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBUaGUgaW50cmluc2ljIGZ1bmN0aW9uIGBgRm46OkJhc2U2NGBgIHJldHVybnMgdGhlIEJhc2U2NCByZXByZXNlbnRhdGlvbiBvZiB0aGUgaW5wdXQgc3RyaW5nLlxuICovXG5leHBvcnQgY2xhc3MgRm5CYXNlNjRFbmNvZGUgZXh0ZW5kcyBGbkJhc2Uge1xuICAvKipcbiAgICogQ3JlYXRlcyBhbiBgYEZuOjpCYXNlNjRgYCBmdW5jdGlvbi5cbiAgICogQHBhcmFtIGRhdGEgVGhlIHN0cmluZyB2YWx1ZSB5b3Ugd2FudCB0byBjb252ZXJ0IHRvIEJhc2U2NC5cbiAgICovXG4gIGNvbnN0cnVjdG9yKGRhdGE6IGFueSkge1xuICAgIHN1cGVyKFwiRm46OkJhc2U2NEVuY29kZVwiLCBkYXRhKTtcbiAgfVxufVxuXG5jbGFzcyBGbkNvbmRpdGlvbkJhc2UgZXh0ZW5kcyBJbnRyaW5zaWMgaW1wbGVtZW50cyBJUm9zQ29uZGl0aW9uRXhwcmVzc2lvbiB7XG4gIGNvbnN0cnVjdG9yKHR5cGU6IHN0cmluZywgdmFsdWU6IGFueSkge1xuICAgIHN1cGVyKHsgW3R5cGVdOiB2YWx1ZSB9KTtcbiAgfVxufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiBhbGwgdGhlIHNwZWNpZmllZCBjb25kaXRpb25zIGV2YWx1YXRlIHRvIHRydWUsIG9yIHJldHVybnMgZmFsc2UgaWYgYW55IG9uZVxuICogIG9mIHRoZSBjb25kaXRpb25zIGV2YWx1YXRlcyB0byBmYWxzZS4gYGBGbjo6QW5kYGAgYWN0cyBhcyBhbiBBTkQgb3BlcmF0b3IuIFRoZSBtaW5pbXVtIG51bWJlciBvZlxuICogY29uZGl0aW9ucyB0aGF0IHlvdSBjYW4gaW5jbHVkZSBpcyAyLCBhbmQgdGhlIG1heGltdW0gaXMgMTAuXG4gKi9cbmV4cG9ydCBjbGFzcyBGbkFuZCBleHRlbmRzIEZuQ29uZGl0aW9uQmFzZSB7XG4gIGNvbnN0cnVjdG9yKC4uLmNvbmRpdGlvbjogKHN0cmluZyB8IElSb3NDb25kaXRpb25FeHByZXNzaW9uKVtdKSB7XG4gICAgc3VwZXIoXCJGbjo6QW5kXCIsIGNvbmRpdGlvbik7XG4gIH1cbn1cblxuLyoqXG4gKiBDb21wYXJlcyBpZiB0d28gdmFsdWVzIGFyZSBlcXVhbC4gUmV0dXJucyB0cnVlIGlmIHRoZSB0d28gdmFsdWVzIGFyZSBlcXVhbCBvciBmYWxzZVxuICogaWYgdGhleSBhcmVuJ3QuXG4gKi9cbmV4cG9ydCBjbGFzcyBGbkVxdWFscyBleHRlbmRzIEZuQ29uZGl0aW9uQmFzZSB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGBgRm46OkVxdWFsc2BgIGNvbmRpdGlvbiBmdW5jdGlvbi5cbiAgICogQHBhcmFtIGxocyBBIHZhbHVlIG9mIGFueSB0eXBlIHRoYXQgeW91IHdhbnQgdG8gY29tcGFyZS5cbiAgICogQHBhcmFtIHJocyBBIHZhbHVlIG9mIGFueSB0eXBlIHRoYXQgeW91IHdhbnQgdG8gY29tcGFyZS5cbiAgICovXG4gIGNvbnN0cnVjdG9yKGxoczogYW55LCByaHM6IGFueSkge1xuICAgIHN1cGVyKFwiRm46OkVxdWFsc1wiLCBbbGhzLCByaHNdKTtcbiAgfVxufVxuXG4vKipcbiAqIFJldHVybnMgb25lIHZhbHVlIGlmIHRoZSBzcGVjaWZpZWQgY29uZGl0aW9uIGV2YWx1YXRlcyB0byB0cnVlIGFuZCBhbm90aGVyIHZhbHVlIGlmIHRoZVxuICogc3BlY2lmaWVkIGNvbmRpdGlvbiBldmFsdWF0ZXMgdG8gZmFsc2UuXG4gKi9cbmV4cG9ydCBjbGFzcyBGbklmIGV4dGVuZHMgRm5Db25kaXRpb25CYXNlIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gYGBGbjo6SWZgYCBjb25kaXRpb24gZnVuY3Rpb24uXG4gICAqIEBwYXJhbSBjb25kaXRpb24gQSByZWZlcmVuY2UgdG8gYSBjb25kaXRpb24gaW4gdGhlIENvbmRpdGlvbnMgc2VjdGlvbi4gVXNlIHRoZSBjb25kaXRpb24ncyBuYW1lIHRvIHJlZmVyZW5jZSBpdC5cbiAgICogQHBhcmFtIHZhbHVlSWZUcnVlIEEgdmFsdWUgdG8gYmUgcmV0dXJuZWQgaWYgdGhlIHNwZWNpZmllZCBjb25kaXRpb24gZXZhbHVhdGVzIHRvIHRydWUuXG4gICAqIEBwYXJhbSB2YWx1ZUlmRmFsc2UgQSB2YWx1ZSB0byBiZSByZXR1cm5lZCBpZiB0aGUgc3BlY2lmaWVkIGNvbmRpdGlvbiBldmFsdWF0ZXMgdG8gZmFsc2UuXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihjb25kaXRpb246IHN0cmluZyB8IElSb3NDb25kaXRpb25FeHByZXNzaW9uLCB2YWx1ZUlmVHJ1ZTogYW55LCB2YWx1ZUlmRmFsc2U6IGFueSkge1xuICAgIHN1cGVyKFwiRm46OklmXCIsIFtjb25kaXRpb24sIHZhbHVlSWZUcnVlLCB2YWx1ZUlmRmFsc2VdKTtcbiAgfVxufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBmb3IgYSBjb25kaXRpb24gdGhhdCBldmFsdWF0ZXMgdG8gZmFsc2Ugb3IgcmV0dXJucyBmYWxzZSBmb3IgYSBjb25kaXRpb24gdGhhdCBldmFsdWF0ZXMgdG8gdHJ1ZS5cbiAqIGBgRm46Ok5vdGBgIGFjdHMgYXMgYSBOT1Qgb3BlcmF0b3IuXG4gKi9cbmV4cG9ydCBjbGFzcyBGbk5vdCBleHRlbmRzIEZuQ29uZGl0aW9uQmFzZSB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGBgRm46Ok5vdGBgIGNvbmRpdGlvbiBmdW5jdGlvbi5cbiAgICogQHBhcmFtIGNvbmRpdGlvbiBBIGNvbmRpdGlvbiBzdWNoIGFzIGBgRm46OkVxdWFsc2BgIHRoYXQgZXZhbHVhdGVzIHRvIHRydWUgb3IgZmFsc2UuXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihjb25kaXRpb246IHN0cmluZyB8IElSb3NDb25kaXRpb25FeHByZXNzaW9uKSB7XG4gICAgc3VwZXIoXCJGbjo6Tm90XCIsIFtjb25kaXRpb25dKTtcbiAgfVxufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiBhbnkgb25lIG9mIHRoZSBzcGVjaWZpZWQgY29uZGl0aW9ucyBldmFsdWF0ZSB0byB0cnVlLCBvciByZXR1cm5zIGZhbHNlIGlmXG4gKiBhbGwgb2YgdGhlIGNvbmRpdGlvbnMgZXZhbHVhdGVzIHRvIGZhbHNlLiBgYEZuOjpPcmBgIGFjdHMgYXMgYW4gT1Igb3BlcmF0b3IuIFRoZSBtaW5pbXVtIG51bWJlclxuICogb2YgY29uZGl0aW9ucyB0aGF0IHlvdSBjYW4gaW5jbHVkZSBpcyAyLCBhbmQgdGhlIG1heGltdW0gaXMgMTAuXG4gKi9cbmV4cG9ydCBjbGFzcyBGbk9yIGV4dGVuZHMgRm5Db25kaXRpb25CYXNlIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gYGBGbjo6T3JgYCBjb25kaXRpb24gZnVuY3Rpb24uXG4gICAqIEBwYXJhbSBjb25kaXRpb24gQSBjb25kaXRpb24gdGhhdCBldmFsdWF0ZXMgdG8gdHJ1ZSBvciBmYWxzZS5cbiAgICovXG4gIGNvbnN0cnVjdG9yKC4uLmNvbmRpdGlvbjogKHN0cmluZyB8IElSb3NDb25kaXRpb25FeHByZXNzaW9uKVtdKSB7XG4gICAgc3VwZXIoXCJGbjo6T3JcIiwgY29uZGl0aW9uKTtcbiAgfVxufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiBhIHNwZWNpZmllZCBzdHJpbmcgbWF0Y2hlcyBhbGwgdmFsdWVzIGluIGEgbGlzdC5cbiAqL1xuLy8gY2xhc3MgRm5FYWNoTWVtYmVyRXF1YWxzIGV4dGVuZHMgRm5Db25kaXRpb25CYXNlIHtcbi8vICAgLyoqXG4vLyAgICAqIENyZWF0ZXMgYW4gYGBGbjo6RWFjaE1lbWJlckVxdWFsc2BgIGZ1bmN0aW9uLlxuLy8gICAgKiBAcGFyYW0gbGlzdE9mU3RyaW5ncyBBIGxpc3Qgb2Ygc3RyaW5ncywgc3VjaCBhcyBcIkFcIiwgXCJCXCIsIFwiQ1wiLlxuLy8gICAgKiBAcGFyYW0gdmFsdWUgQSBzdHJpbmcsIHN1Y2ggYXMgXCJBXCIsIHRoYXQgeW91IHdhbnQgdG8gY29tcGFyZSBhZ2FpbnN0IGEgbGlzdCBvZiBzdHJpbmdzLlxuLy8gICAgKi9cbi8vICAgY29uc3RydWN0b3IobGlzdE9mU3RyaW5nczogYW55LCB2YWx1ZTogc3RyaW5nKSB7XG4vLyAgICAgc3VwZXIoXCJGbjo6RWFjaE1lbWJlckVxdWFsc1wiLCBbbGlzdE9mU3RyaW5ncywgdmFsdWVdKTtcbi8vICAgfVxuLy8gfVxuXG5cbmV4cG9ydCBjbGFzcyBGbkxpc3RNZXJnZSBpbXBsZW1lbnRzIElSZXNvbHZhYmxlIHtcbiAgcHVibGljIHJlYWRvbmx5IGNyZWF0aW9uU3RhY2s6IHN0cmluZ1tdO1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgbGlzdE9mVmFsdWVzOiBhbnlbXTtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBgYExpc3RNZXJnZWBgIGZ1bmN0aW9uLlxuICAgKi9cbiAgY29uc3RydWN0b3IobGlzdE9mVmFsdWVzOiBhbnlbXSkge1xuICAgIGlmIChsaXN0T2ZWYWx1ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGbkxpc3RNZXJnZSByZXF1aXJlcyBhdCBsZWFzdCBvbmUgdmFsdWUgdG8gYmUgcHJvdmlkZWRcIik7XG4gICAgfVxuXG4gICAgdGhpcy5saXN0T2ZWYWx1ZXMgPSBsaXN0T2ZWYWx1ZXM7XG4gICAgdGhpcy5jcmVhdGlvblN0YWNrID0gY2FwdHVyZVN0YWNrVHJhY2UoKTtcbiAgfVxuXG4gIHB1YmxpYyByZXNvbHZlKGNvbnRleHQ6IElSZXNvbHZlQ29udGV4dCk6IGFueSB7XG4gICAgaWYgKFRva2VuLmlzVW5yZXNvbHZlZCh0aGlzLmxpc3RPZlZhbHVlcykpIHtcbiAgICAgIC8vIFRoaXMgaXMgYSBsaXN0IHRva2VuLCBkb24ndCB0cnkgdG8gZG8gc21hcnQgdGhpbmdzIHdpdGggaXQuXG4gICAgICByZXR1cm4geyBcIkZuOjpMaXN0TWVyZ2VcIjogdGhpcy5saXN0T2ZWYWx1ZXMgfTtcbiAgICB9XG4gICAgY29uc3QgcmVzb2x2ZWQgPSB0aGlzLnJlc29sdmVWYWx1ZXMoY29udGV4dCk7XG4gICAgaWYgKHJlc29sdmVkLmxlbmd0aCA9PT0gMSkge1xuICAgICAgcmV0dXJuIHJlc29sdmVkWzBdO1xuICAgIH1cbiAgICByZXR1cm4geyBcIkZuOjpMaXN0TWVyZ2VcIjogcmVzb2x2ZWQgfTtcbiAgfVxuXG4gIHB1YmxpYyB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gVG9rZW4uYXNTdHJpbmcodGhpcywgeyBkaXNwbGF5SGludDogXCJGbjo6TGlzdE1lcmdlXCIgfSk7XG4gIH1cblxuICBwdWJsaWMgdG9KU09OKCkge1xuICAgIHJldHVybiBcIjxGbjo6TGlzdE1lcmdlPlwiO1xuICB9XG5cbiAgLyoqXG4gICAqIE9wdGltaXphdGlvbjogaWYgYW4gRm46Okxpc3RNZXJnZSBpcyBuZXN0ZWQgaW4gYW5vdGhlciBvbmUsIHRoZW4gZmxhdHRlbiBpdCB1cC5cbiAgICovXG4gIHByaXZhdGUgcmVzb2x2ZVZhbHVlcyhjb250ZXh0OiBJUmVzb2x2ZUNvbnRleHQpIHtcbiAgICBjb25zdCByZXNvbHZlZFZhbHVlcyA9IHRoaXMubGlzdE9mVmFsdWVzLm1hcCgoeCkgPT5cbiAgICAgICAgUmVmZXJlbmNlLmlzUmVmZXJlbmNlKHgpID8geCA6IGNvbnRleHQucmVzb2x2ZSh4KVxuICAgICk7XG4gICAgcmV0dXJuIG1pbmltYWxSb3NUZW1wbGF0ZUxpc3RNZXJnZShyZXNvbHZlZFZhbHVlcyk7XG4gIH1cbn1cblxuLyoqXG4gKiBUaGUgaW50cmluc2ljIGZ1bmN0aW9uIGBgRm46OkpvaW5gYCBhcHBlbmRzIGEgc2V0IG9mIHZhbHVlcyBpbnRvIGEgc2luZ2xlIHZhbHVlLCBzZXBhcmF0ZWQgYnlcbiAqIHRoZSBzcGVjaWZpZWQgZGVsaW1pdGVyLiBJZiBhIGRlbGltaXRlciBpcyB0aGUgZW1wdHkgc3RyaW5nLCB0aGUgc2V0IG9mIHZhbHVlcyBhcmUgY29uY2F0ZW5hdGVkXG4gKiB3aXRoIG5vIGRlbGltaXRlci5cbiAqL1xuZXhwb3J0IGNsYXNzIEZuSm9pbiBpbXBsZW1lbnRzIElSZXNvbHZhYmxlIHtcbiAgcHVibGljIHJlYWRvbmx5IGNyZWF0aW9uU3RhY2s6IHN0cmluZ1tdO1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgZGVsaW1pdGVyOiBzdHJpbmc7XG4gIHByaXZhdGUgcmVhZG9ubHkgbGlzdE9mVmFsdWVzOiBhbnlbXTtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBgYEZuOjpKb2luYGAgZnVuY3Rpb24uXG4gICAqIEBwYXJhbSBkZWxpbWl0ZXIgVGhlIHZhbHVlIHlvdSB3YW50IHRvIG9jY3VyIGJldHdlZW4gZnJhZ21lbnRzLiBUaGUgZGVsaW1pdGVyIHdpbGwgb2NjdXIgYmV0d2VlbiBmcmFnbWVudHMgb25seS5cbiAgICogICAgICAgICAgSXQgd2lsbCBub3QgdGVybWluYXRlIHRoZSBmaW5hbCB2YWx1ZS5cbiAgICogQHBhcmFtIGxpc3RPZlZhbHVlcyBUaGUgbGlzdCBvZiB2YWx1ZXMgeW91IHdhbnQgY29tYmluZWQuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihkZWxpbWl0ZXI6IHN0cmluZywgbGlzdE9mVmFsdWVzOiBhbnlbXSkge1xuICAgIGlmIChsaXN0T2ZWYWx1ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGbkpvaW4gcmVxdWlyZXMgYXQgbGVhc3Qgb25lIHZhbHVlIHRvIGJlIHByb3ZpZGVkXCIpO1xuICAgIH1cblxuICAgIHRoaXMuZGVsaW1pdGVyID0gZGVsaW1pdGVyO1xuICAgIHRoaXMubGlzdE9mVmFsdWVzID0gbGlzdE9mVmFsdWVzO1xuICAgIHRoaXMuY3JlYXRpb25TdGFjayA9IGNhcHR1cmVTdGFja1RyYWNlKCk7XG4gIH1cblxuICBwdWJsaWMgcmVzb2x2ZShjb250ZXh0OiBJUmVzb2x2ZUNvbnRleHQpOiBhbnkge1xuICAgIGlmIChUb2tlbi5pc1VucmVzb2x2ZWQodGhpcy5saXN0T2ZWYWx1ZXMpKSB7XG4gICAgICAvLyBUaGlzIGlzIGEgbGlzdCB0b2tlbiwgZG9uJ3QgdHJ5IHRvIGRvIHNtYXJ0IHRoaW5ncyB3aXRoIGl0LlxuICAgICAgcmV0dXJuIHsgXCJGbjo6Sm9pblwiOiBbdGhpcy5kZWxpbWl0ZXIsIHRoaXMubGlzdE9mVmFsdWVzXSB9O1xuICAgIH1cbiAgICBjb25zdCByZXNvbHZlZCA9IHRoaXMucmVzb2x2ZVZhbHVlcyhjb250ZXh0KTtcbiAgICBpZiAocmVzb2x2ZWQubGVuZ3RoID09PSAxKSB7XG4gICAgICByZXR1cm4gcmVzb2x2ZWRbMF07XG4gICAgfVxuICAgIHJldHVybiB7IFwiRm46OkpvaW5cIjogW3RoaXMuZGVsaW1pdGVyLCByZXNvbHZlZF0gfTtcbiAgfVxuXG4gIHB1YmxpYyB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gVG9rZW4uYXNTdHJpbmcodGhpcywgeyBkaXNwbGF5SGludDogXCJGbjo6Sm9pblwiIH0pO1xuICB9XG5cbiAgcHVibGljIHRvSlNPTigpIHtcbiAgICByZXR1cm4gXCI8Rm46OkpvaW4+XCI7XG4gIH1cblxuICAvKipcbiAgICogT3B0aW1pemF0aW9uOiBpZiBhbiBGbjo6Sm9pbiBpcyBuZXN0ZWQgaW4gYW5vdGhlciBvbmUgYW5kIHRoZXkgc2hhcmUgdGhlIHNhbWUgZGVsaW1pdGVyLCB0aGVuIGZsYXR0ZW4gaXQgdXAuIEFsc28sXG4gICAqIGlmIHR3byBjb25jYXRlbmF0ZWQgZWxlbWVudHMgYXJlIGxpdGVyYWwgc3RyaW5ncyAobm90IHRva2VucyksIHRoZW4gcHJlLWNvbmNhdGVuYXRlIHRoZW0gd2l0aCB0aGUgZGVsaW1pdGVyLCB0b1xuICAgKiBnZW5lcmF0ZSBzaG9ydGVyIG91dHB1dC5cbiAgICovXG4gIHByaXZhdGUgcmVzb2x2ZVZhbHVlcyhjb250ZXh0OiBJUmVzb2x2ZUNvbnRleHQpIHtcbiAgICBjb25zdCByZXNvbHZlZFZhbHVlcyA9IHRoaXMubGlzdE9mVmFsdWVzLm1hcCgoeCkgPT5cbiAgICAgIFJlZmVyZW5jZS5pc1JlZmVyZW5jZSh4KSA/IHggOiBjb250ZXh0LnJlc29sdmUoeClcbiAgICApO1xuICAgIHJldHVybiBtaW5pbWFsUm9zVGVtcGxhdGVKb2luKHRoaXMuZGVsaW1pdGVyLCByZXNvbHZlZFZhbHVlcyk7XG4gIH1cbn1cbiJdfQ==