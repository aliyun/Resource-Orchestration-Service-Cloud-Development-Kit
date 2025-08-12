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
        if (indent && typeof indent === 'number' && (indent < 0 || indent > 4)) {
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
        this.creationStack = (0, stack_trace_1.captureStackTrace)();
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
        return (0, template_lang_1.minimalRosTemplateListMerge)(resolvedValues);
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
        this.creationStack = (0, stack_trace_1.captureStackTrace)();
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
        return (0, template_lang_1.minimalRosTemplateJoin)(this.delimiter, resolvedValues);
    }
}
exports.FnJoin = FnJoin;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9zLWZuLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicm9zLWZuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLDJEQUE0RjtBQUM1RixtREFBZ0Q7QUFDaEQsMkNBQXdDO0FBQ3hDLG1DQUFnQztBQUNoQywrQ0FBa0Q7QUFJbEQsaUNBQWlDO0FBRWpDOzs7R0FHRztBQUNILE1BQWEsRUFBRTtJQUNOLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBVTtRQUMxQixvQ0FBb0M7UUFDcEMsNkJBQTZCO1FBQzdCLElBQUk7UUFDSixPQUFPLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3JDLENBQUM7SUFFTSxNQUFNLENBQUMsWUFBWSxDQUFDLElBQVk7UUFDckMsT0FBTyxJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM3QyxDQUFDO0lBRU0sTUFBTSxDQUFDLE9BQU8sQ0FDbkIsV0FBbUMsRUFDbkMsT0FBZTtRQUVmLE9BQU8sSUFBSSxTQUFTLENBQUMsQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMxRCxDQUFDO0lBRU0sTUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFzQztRQUM1RCxPQUFPLElBQUksV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFTSxNQUFNLENBQUMsWUFBWSxDQUFDLEdBQVcsRUFBRSxRQUFhO1FBQ25ELE9BQU8sSUFBSSxjQUFjLENBQUMsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN4RCxDQUFDO0lBRU0sTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFlLEVBQUUsTUFBZ0I7UUFDakQsT0FBTyxhQUFLLENBQUMsUUFBUSxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztJ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RUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQztTQUM1RDtRQUNELE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDN0MsSUFBSSxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUN6QixPQUFPLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNwQjtRQUNELE9BQU8sRUFBRSxVQUFVLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUM7SUFDcEQsQ0FBQztJQUVNLFFBQVE7UUFDYixPQUFPLGFBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVNLE1BQU07UUFDWCxPQUFPLFlBQVksQ0FBQztJQUN0QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNLLGFBQWEsQ0FBQyxPQUF3QjtRQUM1QyxNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQ2pELHFCQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQ2xELENBQUM7UUFDRixPQUFPLElBQUEsc0NBQXNCLEVBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxjQUFjLENBQUMsQ0FBQztJQUNoRSxDQUFDO0NBQ0Y7QUFyREQsd0JBcURDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVJvc0NvbmRpdGlvbkV4cHJlc3Npb24gfSBmcm9tIFwiLi9yb3MtY29uZGl0aW9uXCI7XG5pbXBvcnQge21pbmltYWxSb3NUZW1wbGF0ZUpvaW4sIG1pbmltYWxSb3NUZW1wbGF0ZUxpc3RNZXJnZX0gZnJvbSBcIi4vcHJpdmF0ZS90ZW1wbGF0ZS1sYW5nXCI7XG5pbXBvcnQgeyBJbnRyaW5zaWMgfSBmcm9tIFwiLi9wcml2YXRlL2ludHJpbnNpY1wiO1xuaW1wb3J0IHsgUmVmZXJlbmNlIH0gZnJvbSBcIi4vcmVmZXJlbmNlXCI7XG5pbXBvcnQgeyBUb2tlbiB9IGZyb20gXCIuL3Rva2VuXCI7XG5pbXBvcnQgeyBjYXB0dXJlU3RhY2tUcmFjZSB9IGZyb20gXCIuL3N0YWNrLXRyYWNlXCI7XG5pbXBvcnQgeyBJUmVzb2x2ZUNvbnRleHQsIElSZXNvbHZhYmxlIH0gZnJvbSBcIi4vcmVzb2x2YWJsZVwiO1xuaW1wb3J0ICogYXMgcm9zIGZyb20gXCIuL2luZGV4XCI7XG5cbi8vIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aFxuXG4vKipcbiAqIFJlc291cmNlIE9yY2hlc3RyYXRpb24gU2VydmljZSBpbnRyaW5zaWMgZnVuY3Rpb25zLlxuICogaHR0cHM6Ly9oZWxwLmFsaXl1bi5jb20vemgvcm9zL3VzZXItZ3VpZGUvZnVuY3Rpb25zXG4gKi9cbmV4cG9ydCBjbGFzcyBGbiB7XG4gIHB1YmxpYyBzdGF0aWMgc3RyKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xuICAgIC8vIGlmICghVG9rZW4uaXNVbnJlc29sdmVkKHZhbHVlKSkge1xuICAgIC8vICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKCk7XG4gICAgLy8gfVxuICAgIHJldHVybiBuZXcgRm5TdHIodmFsdWUpLnRvU3RyaW5nKCk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGJhc2U2NERlY29kZShkYXRhOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBuZXcgRm5CYXNlNjREZWNvZGUoZGF0YSkudG9TdHJpbmcoKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgcmVwbGFjZShcbiAgICByZXBsYWNlRGF0YTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSxcbiAgICBjb250ZW50OiBzdHJpbmdcbiAgKTogc3RyaW5nIHtcbiAgICByZXR1cm4gbmV3IEZuUmVwbGFjZShbcmVwbGFjZURhdGEsIGNvbnRlbnRdKS50b1N0cmluZygpO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBsaXN0TWVyZ2UodmFsdWVMaXN0OiAoYW55W10gfCByb3MuSVJlc29sdmFibGUpW10pOiBJUmVzb2x2YWJsZSB7XG4gICAgcmV0dXJuIG5ldyBGbkxpc3RNZXJnZSh2YWx1ZUxpc3QpO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBnZXRKc29uVmFsdWUoa2V5OiBzdHJpbmcsIGpzb25EYXRhOiBhbnkpOiBzdHJpbmcge1xuICAgIHJldHVybiBuZXcgRm5HZXRKc29uVmFsdWUoW2tleSwganNvbkRhdGFdKS50b1N0cmluZygpO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBhdmcobmRpZ2l0czogbnVtYmVyLCB2YWx1ZXM6IG51bWJlcltdKTogbnVtYmVyIHtcbiAgICByZXR1cm4gVG9rZW4uYXNOdW1iZXIobmV3IEZuQXZnKFtuZGlnaXRzLCB2YWx1ZXNdKSk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGFkZCh2YWx1ZXM6IG51bWJlciB8IGFueVtdIHwge1trZXk6c3RyaW5nXTogYW55fSk6IElSZXNvbHZhYmxlIHtcbiAgICByZXR1cm4gVG9rZW4uYXNBbnkobmV3IEZuQWRkKHZhbHVlcykpO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBjYWxjdWxhdGUoXG4gICAgdmFsdWVzOiBzdHJpbmcsXG4gICAgbmRpZ2l0czogbnVtYmVyLFxuICAgIHBhcmE6IG51bWJlcltdXG4gICk6IG51bWJlciB7XG4gICAgcmV0dXJuIFRva2VuLmFzTnVtYmVyKG5ldyBGbkNhbGN1bGF0ZShbdmFsdWVzLCBuZGlnaXRzLCBwYXJhXSkpO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBtYXgodmFsdWVzOiBudW1iZXJbXSk6IG51bWJlciB7XG4gICAgcmV0dXJuIFRva2VuLmFzTnVtYmVyKG5ldyBGbk1heCh2YWx1ZXMpKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgbWluKHZhbHVlczogbnVtYmVyW10pOiBudW1iZXIge1xuICAgIHJldHVybiBUb2tlbi5hc051bWJlcihuZXcgRm5NaW4odmFsdWVzKSk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGpxKG1ldGhvZDogc3RyaW5nLCBzY3JpcHQ6IHN0cmluZywgaW5wdXRTdHJpbmc6IHN0cmluZyB8IHtba2V5OnN0cmluZ106IGFueX0pOiBJUmVzb2x2YWJsZSB7XG4gICAgcmV0dXJuIFRva2VuLmFzQW55KG5ldyBGbkpxKFttZXRob2QsIHNjcmlwdCwgaW5wdXRTdHJpbmddKSk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIG1lcmdlTWFwVG9MaXN0KG1hcExpc3Q6IHtba2V5OiBzdHJpbmddOiBhbnlbXX1bXSk6IElSZXNvbHZhYmxlIHtcbiAgICByZXR1cm4gbmV3IEZuTWVyZ2VNYXBUb0xpc3QobWFwTGlzdCk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIHNlbGVjdE1hcExpc3Qoa2V5OiBzdHJpbmcsIG1hcExpc3Q6IHtba2V5OiBzdHJpbmddOiBhbnl9W10pOiBJUmVzb2x2YWJsZSB7XG4gICAgcmV0dXJuIG5ldyBGblNlbGVjdE1hcExpc3QoW2tleSwgbWFwTGlzdF0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBgYFJlZmBgIGludHJpbnNpYyBmdW5jdGlvbiByZXR1cm5zIHRoZSB2YWx1ZSBvZiB0aGUgc3BlY2lmaWVkIHBhcmFtZXRlciBvciByZXNvdXJjZS5cbiAgICogTm90ZSB0aGF0IGl0IGRvZXNuJ3QgdmFsaWRhdGUgdGhlIGxvZ2ljYWxOYW1lLCBpdCBtYWlubHkgc2VydmVzIHBhcmVtZXRlci9yZXNvdXJjZSByZWZlcmVuY2UgZGVmaW5lZCBpbiBhIGBgUm9zSW5jbHVkZWBgIHRlbXBsYXRlLlxuICAgKiBAcGFyYW0gbG9naWNhbE5hbWUgVGhlIGxvZ2ljYWwgbmFtZSBvZiBhIHBhcmFtZXRlci9yZXNvdXJjZSBmb3Igd2hpY2ggeW91IHdhbnQgdG8gcmV0cmlldmUgaXRzIHZhbHVlLlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyByZWYobG9naWNhbE5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG5ldyBGblJlZihsb2dpY2FsTmFtZSkudG9TdHJpbmcoKTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgcHVibGljIHN0YXRpYyBfcmVmKGxvZ2ljYWxJZDogc3RyaW5nKTogSVJlc29sdmFibGUge1xuICAgIHJldHVybiBuZXcgRm5SZWYobG9naWNhbElkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgYGBGbjo6R2V0QXR0YGAgaW50cmluc2ljIGZ1bmN0aW9uIHJldHVybnMgdGhlIHZhbHVlIG9mIGFuIGF0dHJpYnV0ZVxuICAgKiBmcm9tIGEgcmVzb3VyY2UgaW4gdGhlIHRlbXBsYXRlLlxuICAgKiBAcGFyYW0gbG9naWNhbE5hbWVPZlJlc291cmNlIFRoZSBsb2dpY2FsIG5hbWUgKGFsc28gY2FsbGVkIGxvZ2ljYWwgSUQpIG9mXG4gICAqIHRoZSByZXNvdXJjZSB0aGF0IGNvbnRhaW5zIHRoZSBhdHRyaWJ1dGUgdGhhdCB5b3Ugd2FudC5cbiAgICogQHBhcmFtIGF0dHJpYnV0ZU5hbWUgVGhlIG5hbWUgb2YgdGhlIHJlc291cmNlLXNwZWNpZmljIGF0dHJpYnV0ZSB3aG9zZVxuICAgKiB2YWx1ZSB5b3Ugd2FudC4gU2VlIHRoZSByZXNvdXJjZSdzIHJlZmVyZW5jZSBwYWdlIGZvciBkZXRhaWxzIGFib3V0IHRoZVxuICAgKiBhdHRyaWJ1dGVzIGF2YWlsYWJsZSBmb3IgdGhhdCByZXNvdXJjZSB0eXBlLlxuICAgKiBAcmV0dXJucyBhbiBJUmVzb2x2YWJsZSBvYmplY3RcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgZ2V0QXR0KFxuICAgIGxvZ2ljYWxOYW1lT2ZSZXNvdXJjZTogc3RyaW5nLFxuICAgIGF0dHJpYnV0ZU5hbWU6IHN0cmluZ1xuICApOiBJUmVzb2x2YWJsZSB7XG4gICAgcmV0dXJuIG5ldyBGbkdldEF0dChsb2dpY2FsTmFtZU9mUmVzb3VyY2UsIGF0dHJpYnV0ZU5hbWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBpbnRyaW5zaWMgZnVuY3Rpb24gYGBGbjo6Sm9pbmBgIGFwcGVuZHMgYSBzZXQgb2YgdmFsdWVzIGludG8gYSBzaW5nbGVcbiAgICogdmFsdWUsIHNlcGFyYXRlZCBieSB0aGUgc3BlY2lmaWVkIGRlbGltaXRlci4gSWYgYSBkZWxpbWl0ZXIgaXMgdGhlIGVtcHR5XG4gICAqIHN0cmluZywgdGhlIHNldCBvZiB2YWx1ZXMgYXJlIGNvbmNhdGVuYXRlZCB3aXRoIG5vIGRlbGltaXRlci5cbiAgICogQHBhcmFtIGRlbGltaXRlciBUaGUgdmFsdWUgeW91IHdhbnQgdG8gb2NjdXIgYmV0d2VlbiBmcmFnbWVudHMuIFRoZVxuICAgKiBkZWxpbWl0ZXIgd2lsbCBvY2N1ciBiZXR3ZWVuIGZyYWdtZW50cyBvbmx5LiBJdCB3aWxsIG5vdCB0ZXJtaW5hdGUgdGhlXG4gICAqIGZpbmFsIHZhbHVlLlxuICAgKiBAcGFyYW0gbGlzdE9mVmFsdWVzIFRoZSBsaXN0IG9mIHZhbHVlcyB5b3Ugd2FudCBjb21iaW5lZC5cbiAgICogQHJldHVybnMgYSB0b2tlbiByZXByZXNlbnRlZCBhcyBhIHN0cmluZ1xuICAgKi9cbiAgcHVibGljIHN0YXRpYyBqb2luKGRlbGltaXRlcjogc3RyaW5nLCBsaXN0T2ZWYWx1ZXM6IChzdHJpbmcgfCByb3MuSVJlc29sdmFibGUpW10pOiBzdHJpbmcge1xuICAgIGlmIChsaXN0T2ZWYWx1ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGbkpvaW4gcmVxdWlyZXMgYXQgbGVhc3Qgb25lIHZhbHVlIHRvIGJlIHByb3ZpZGVkXCIpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRm5Kb2luKGRlbGltaXRlciwgbGlzdE9mVmFsdWVzKS50b1N0cmluZygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRvIHNwbGl0IGEgc3RyaW5nIGludG8gYSBsaXN0IG9mIHN0cmluZyB2YWx1ZXMgc28gdGhhdCB5b3UgY2FuIHNlbGVjdCBhbiBlbGVtZW50IGZyb20gdGhlXG4gICAqIHJlc3VsdGluZyBzdHJpbmcgbGlzdCwgdXNlIHRoZSBgYEZuOjpTcGxpdGBgIGludHJpbnNpYyBmdW5jdGlvbi4gU3BlY2lmeSB0aGUgbG9jYXRpb24gb2Ygc3BsaXRzXG4gICAqIHdpdGggYSBkZWxpbWl0ZXIsIHN1Y2ggYXMgLCAoYSBjb21tYSkuIEFmdGVyIHlvdSBzcGxpdCBhIHN0cmluZywgdXNlIHRoZSBgYEZuOjpTZWxlY3RgYCBmdW5jdGlvblxuICAgKiB0byBwaWNrIGEgc3BlY2lmaWMgZWxlbWVudC5cbiAgICogQHBhcmFtIGRlbGltaXRlciBBIHN0cmluZyB2YWx1ZSB0aGF0IGRldGVybWluZXMgd2hlcmUgdGhlIHNvdXJjZSBzdHJpbmcgaXMgZGl2aWRlZC5cbiAgICogQHBhcmFtIHNvdXJjZSBUaGUgc3RyaW5nIHZhbHVlIHRoYXQgeW91IHdhbnQgdG8gc3BsaXQuXG4gICAqIEByZXR1cm5zIGEgdG9rZW4gcmVwcmVzZW50ZWQgYXMgYSBzdHJpbmcgYXJyYXlcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgc3BsaXQoZGVsaW1pdGVyOiBzdHJpbmcsIHNvdXJjZTogc3RyaW5nKTogc3RyaW5nW10ge1xuICAgIC8vIHNob3J0LWNpcmN1dCBpZiBzb3VyY2UgaXMgbm90IGEgdG9rZW5cbiAgICBpZiAoIVRva2VuLmlzVW5yZXNvbHZlZChzb3VyY2UpKSB7XG4gICAgICByZXR1cm4gc291cmNlLnNwbGl0KGRlbGltaXRlcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIFRva2VuLmFzTGlzdChuZXcgRm5TcGxpdChbZGVsaW1pdGVyLCBzb3VyY2VdKSk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIGludHJpbnNpYyBmdW5jdGlvbiBgYEZuOjpTZWxlY3RgYCByZXR1cm5zIGEgc2luZ2xlIG9iamVjdCBmcm9tIGEgbGlzdCBvZiBvYmplY3RzIGJ5IGluZGV4LlxuICAgKiBAcGFyYW0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSBvYmplY3QgdG8gcmV0cmlldmUuIFRoaXMgbXVzdCBiZSBhIHZhbHVlIGZyb20gemVybyB0byBOLTEsIHdoZXJlIE4gcmVwcmVzZW50cyB0aGUgbnVtYmVyIG9mIGVsZW1lbnRzIGluIHRoZSBhcnJheS5cbiAgICogQHBhcmFtIGFycmF5IFRoZSBsaXN0IG9mIG9iamVjdHMgdG8gc2VsZWN0IGZyb20uIFRoaXMgbGlzdCBtdXN0IG5vdCBiZSBudWxsLCBub3IgY2FuIGl0IGhhdmUgbnVsbCBlbnRyaWVzLlxuICAgKiBAcmV0dXJucyBhIHRva2VuIHJlcHJlc2VudGVkIGFzIGEgc3RyaW5nXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIHNlbGVjdChpbmRleDogbnVtYmVyIHwgc3RyaW5nLCBhcnJheTogYW55KTogSVJlc29sdmFibGUge1xuICAgIHJldHVybiBUb2tlbi5hc0FueShuZXcgRm5TZWxlY3QoW2luZGV4LCBhcnJheV0pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgaW50cmluc2ljIGZ1bmN0aW9uIGBgRm46OlN1YmBgIHN1YnN0aXR1dGVzIHZhcmlhYmxlcyBpbiBhbiBpbnB1dCBzdHJpbmdcbiAgICogd2l0aCB2YWx1ZXMgdGhhdCB5b3Ugc3BlY2lmeS4gSW4geW91ciB0ZW1wbGF0ZXMsIHlvdSBjYW4gdXNlIHRoaXMgZnVuY3Rpb25cbiAgICogdG8gY29uc3RydWN0IGNvbW1hbmRzIG9yIG91dHB1dHMgdGhhdCBpbmNsdWRlIHZhbHVlcyB0aGF0IGFyZW4ndCBhdmFpbGFibGVcbiAgICogdW50aWwgeW91IGNyZWF0ZSBvciB1cGRhdGUgYSBzdGFjay5cbiAgICogQHBhcmFtIGJvZHkgQSBzdHJpbmcgd2l0aCB2YXJpYWJsZXMgdGhhdCBSb3MgVGVtcGxhdGUgc3Vic3RpdHV0ZXNcbiAgICogd2l0aCB0aGVpciBhc3NvY2lhdGVkIHZhbHVlcyBhdCBydW50aW1lLiBXcml0ZSB2YXJpYWJsZXMgYXMgJHtNeVZhck5hbWV9LlxuICAgKiBWYXJpYWJsZXMgY2FuIGJlIHRlbXBsYXRlIHBhcmFtZXRlciBuYW1lcywgcmVzb3VyY2UgbG9naWNhbCBJRHMsIHJlc291cmNlXG4gICAqIGF0dHJpYnV0ZXMsIG9yIGEgdmFyaWFibGUgaW4gYSBrZXktdmFsdWUgbWFwLiBJZiB5b3Ugc3BlY2lmeSBvbmx5IHRlbXBsYXRlXG4gICAqIHBhcmFtZXRlciBuYW1lcywgcmVzb3VyY2UgbG9naWNhbCBJRHMsIGFuZCByZXNvdXJjZSBhdHRyaWJ1dGVzLCBkb24ndFxuICAgKiBzcGVjaWZ5IGEga2V5LXZhbHVlIG1hcC5cbiAgICogQHBhcmFtIHZhcmlhYmxlcyBUaGUgbmFtZSBvZiBhIHZhcmlhYmxlIHRoYXQgeW91IGluY2x1ZGVkIGluIHRoZSBTdHJpbmdcbiAgICogcGFyYW1ldGVyLiBUaGUgdmFsdWUgdGhhdCBSb3MgVGVtcGxhdGUgc3Vic3RpdHV0ZXMgZm9yIHRoZSBhc3NvY2lhdGVkXG4gICAqIHZhcmlhYmxlIG5hbWUgYXQgcnVudGltZS5cbiAgICogQHJldHVybnMgYSB0b2tlbiByZXByZXNlbnRlZCBhcyBhIHN0cmluZ1xuICAgKi9cbiAgcHVibGljIHN0YXRpYyBzdWIoXG4gICAgYm9keTogc3RyaW5nLFxuICAgIHZhcmlhYmxlcz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgKTogc3RyaW5nIHtcbiAgICBpZiAodmFyaWFibGVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBuZXcgRm5TdWIoYm9keSkudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBGblN1YihbYm9keSwgdmFyaWFibGVzXSkudG9TdHJpbmcoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgaW50cmluc2ljIGZ1bmN0aW9uIGBgRm46OkJhc2U2NGBgIHJldHVybnMgdGhlIEJhc2U2NCByZXByZXNlbnRhdGlvbiBvZlxuICAgKiB0aGUgaW5wdXQgc3RyaW5nLlxuICAgKiBAcGFyYW0gZGF0YSBUaGUgc3RyaW5nIHZhbHVlIHlvdSB3YW50IHRvIGNvbnZlcnQgdG8gQmFzZTY0LlxuICAgKiBAcmV0dXJucyBhIHRva2VuIHJlcHJlc2VudGVkIGFzIGEgc3RyaW5nXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGJhc2U2NEVuY29kZShkYXRhOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBuZXcgRm5CYXNlNjRFbmNvZGUoZGF0YSkudG9TdHJpbmcoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgaW50cmluc2ljIGZ1bmN0aW9uIGBgRm46OkdldEFac2BgIHJldHVybnMgYW4gYXJyYXkgdGhhdCBsaXN0c1xuICAgKiBBdmFpbGFiaWxpdHkgWm9uZXMgZm9yIGEgc3BlY2lmaWVkIHJlZ2lvbi4gQmVjYXVzZSBjdXN0b21lcnMgaGF2ZSBhY2Nlc3MgdG9cbiAgICogZGlmZmVyZW50IEF2YWlsYWJpbGl0eSBab25lcywgdGhlIGludHJpbnNpYyBmdW5jdGlvbiBgYEZuOjpHZXRBWnNgYCBlbmFibGVzXG4gICAqIHRlbXBsYXRlIGF1dGhvcnMgdG8gd3JpdGUgdGVtcGxhdGVzIHRoYXQgYWRhcHQgdG8gdGhlIGNhbGxpbmcgdXNlcidzXG4gICAqIGFjY2Vzcy4gVGhhdCB3YXkgeW91IGRvbid0IGhhdmUgdG8gaGFyZC1jb2RlIGEgZnVsbCBsaXN0IG9mIEF2YWlsYWJpbGl0eVxuICAgKiBab25lcyBmb3IgYSBzcGVjaWZpZWQgcmVnaW9uLlxuICAgKiBAcGFyYW0gcmVnaW9uIFRoZSBuYW1lIG9mIHRoZSByZWdpb24gZm9yIHdoaWNoIHlvdSB3YW50IHRvIGdldCB0aGVcbiAgICogQXZhaWxhYmlsaXR5IFpvbmVzLiBZb3UgY2FuIHVzZSB0aGUgUk9TOjpSZWdpb24gcHNldWRvIHBhcmFtZXRlciB0byBzcGVjaWZ5XG4gICAqIHRoZSByZWdpb24gaW4gd2hpY2ggdGhlIHN0YWNrIGlzIGNyZWF0ZWQuIFNwZWNpZnlpbmcgYW4gZW1wdHkgc3RyaW5nIGlzXG4gICAqIGVxdWl2YWxlbnQgdG8gc3BlY2lmeWluZyBST1M6OlJlZ2lvbi5cbiAgICogQHJldHVybnMgYSB0b2tlbiByZXByZXNlbnRlZCBhcyBhIHN0cmluZyBhcnJheVxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBnZXRBenMocmVnaW9uOiBzdHJpbmcpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIFRva2VuLmFzTGlzdChuZXcgRm5HZXRBWnMocmVnaW9uKSk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIGludHJpbnNpYyBmdW5jdGlvbiBgYEZuOjpHZXRTdGFja091dHB1dGBgIHJldHVybnMgdGhlIHZhbHVlIG9mIGFuIG91dHB1dFxuICAgKiBleHBvcnRlZCBieSBhbm90aGVyIHN0YWNrLlxuICAgKiBAcmV0dXJucyBhIHRva2VuIHJlcHJlc2VudGVkIGFzIGEgc3RyaW5nXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGdldFN0YWNrT3V0cHV0KFxuICAgIHN0YWNrSUQ6IHN0cmluZyxcbiAgICBvdXRwdXRLZXk6IHN0cmluZyxcbiAgICBzdGFja1JlZ2lvbj86IHN0cmluZ1xuICApOiBJUmVzb2x2YWJsZSB7XG4gICAgcmV0dXJuIFRva2VuLmFzQW55KG5ldyBGbkdldFN0YWNrT3V0cHV0KFtzdGFja0lELCBvdXRwdXRLZXksIHN0YWNrUmVnaW9uXSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBpbnRyaW5zaWMgZnVuY3Rpb24gYGBGbjo6RmluZEluTWFwYGAgcmV0dXJucyB0aGUgdmFsdWUgY29ycmVzcG9uZGluZyB0b1xuICAgKiBrZXlzIGluIGEgdHdvLWxldmVsIG1hcCB0aGF0IGlzIGRlY2xhcmVkIGluIHRoZSBNYXBwaW5ncyBzZWN0aW9uLlxuICAgKiBAcmV0dXJucyBhIHRva2VuIHJlcHJlc2VudGVkIGFzIGEgc3RyaW5nXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGZpbmRJbk1hcChcbiAgICBtYXBOYW1lOiBzdHJpbmcsXG4gICAgdG9wTGV2ZWxLZXk6IHN0cmluZyxcbiAgICBzZWNvbmRMZXZlbEtleTogc3RyaW5nXG4gICk6IElSZXNvbHZhYmxlIHtcbiAgICByZXR1cm4gVG9rZW4uYXNBbnkobmV3IEZuRmluZEluTWFwKFttYXBOYW1lLCB0b3BMZXZlbEtleSwgc2Vjb25kTGV2ZWxLZXldKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIGFsbCB0aGUgc3BlY2lmaWVkIGNvbmRpdGlvbnMgZXZhbHVhdGUgdG8gdHJ1ZSwgb3IgcmV0dXJuc1xuICAgKiBmYWxzZSBpZiBhbnkgb25lIG9mIHRoZSBjb25kaXRpb25zIGV2YWx1YXRlcyB0byBmYWxzZS4gYGBGbjo6QW5kYGAgYWN0cyBhc1xuICAgKiBhbiBBTkQgb3BlcmF0b3IuIFRoZSBtaW5pbXVtIG51bWJlciBvZiBjb25kaXRpb25zIHRoYXQgeW91IGNhbiBpbmNsdWRlIGlzXG4gICAqIDIsIGFuZCB0aGUgbWF4aW11bSBpcyAxMC5cbiAgICogQHBhcmFtIGNvbmRpdGlvbnMgY29uZGl0aW9ucyB0byBBTkRcbiAgICogQHJldHVybnMgYW4gRm5Db25kaXRpb24gdG9rZW5cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgY29uZGl0aW9uQW5kKFxuICAgIC4uLmNvbmRpdGlvbnM6IChzdHJpbmcgfCBJUm9zQ29uZGl0aW9uRXhwcmVzc2lvbilbXVxuICApOiBJUm9zQ29uZGl0aW9uRXhwcmVzc2lvbiB7XG4gICAgcmV0dXJuIG5ldyBGbkFuZCguLi5jb25kaXRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb21wYXJlcyBpZiB0d28gdmFsdWVzIGFyZSBlcXVhbC4gUmV0dXJucyB0cnVlIGlmIHRoZSB0d28gdmFsdWVzIGFyZSBlcXVhbFxuICAgKiBvciBmYWxzZSBpZiB0aGV5IGFyZW4ndC5cbiAgICogQHBhcmFtIGxocyBBIHZhbHVlIG9mIGFueSB0eXBlIHRoYXQgeW91IHdhbnQgdG8gY29tcGFyZS5cbiAgICogQHBhcmFtIHJocyBBIHZhbHVlIG9mIGFueSB0eXBlIHRoYXQgeW91IHdhbnQgdG8gY29tcGFyZS5cbiAgICogQHJldHVybnMgYW4gRm5Db25kaXRpb24gdG9rZW5cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgY29uZGl0aW9uRXF1YWxzKGxoczogYW55LCByaHM6IGFueSk6IElSb3NDb25kaXRpb25FeHByZXNzaW9uIHtcbiAgICByZXR1cm4gbmV3IEZuRXF1YWxzKGxocywgcmhzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIG9uZSB2YWx1ZSBpZiB0aGUgc3BlY2lmaWVkIGNvbmRpdGlvbiBldmFsdWF0ZXMgdG8gdHJ1ZSBhbmQgYW5vdGhlclxuICAgKiB2YWx1ZSBpZiB0aGUgc3BlY2lmaWVkIGNvbmRpdGlvbiBldmFsdWF0ZXMgdG8gZmFsc2UuXG4gICAqIEBwYXJhbSBjb25kaXRpb25JZCBBIHJlZmVyZW5jZSB0byBhIGNvbmRpdGlvbiBpbiB0aGUgQ29uZGl0aW9ucyBzZWN0aW9uLiBVc2VcbiAgICogdGhlIGNvbmRpdGlvbidzIG5hbWUgdG8gcmVmZXJlbmNlIGl0LlxuICAgKiBAcGFyYW0gdmFsdWVJZlRydWUgQSB2YWx1ZSB0byBiZSByZXR1cm5lZCBpZiB0aGUgc3BlY2lmaWVkIGNvbmRpdGlvblxuICAgKiBldmFsdWF0ZXMgdG8gdHJ1ZS5cbiAgICogQHBhcmFtIHZhbHVlSWZGYWxzZSBBIHZhbHVlIHRvIGJlIHJldHVybmVkIGlmIHRoZSBzcGVjaWZpZWQgY29uZGl0aW9uXG4gICAqIGV2YWx1YXRlcyB0byBmYWxzZS5cbiAgICogQHJldHVybnMgYW4gRm5Db25kaXRpb24gdG9rZW5cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgY29uZGl0aW9uSWYoXG4gICAgY29uZGl0aW9uSWQ6IHN0cmluZyB8IElSb3NDb25kaXRpb25FeHByZXNzaW9uLFxuICAgIHZhbHVlSWZUcnVlOiBhbnksXG4gICAgdmFsdWVJZkZhbHNlOiBhbnlcbiAgKTogYW55IHtcbiAgICByZXR1cm4gbmV3IEZuSWYoY29uZGl0aW9uSWQsIHZhbHVlSWZUcnVlLCB2YWx1ZUlmRmFsc2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBmb3IgYSBjb25kaXRpb24gdGhhdCBldmFsdWF0ZXMgdG8gZmFsc2Ugb3IgcmV0dXJucyBmYWxzZSBmb3IgYVxuICAgKiBjb25kaXRpb24gdGhhdCBldmFsdWF0ZXMgdG8gdHJ1ZS4gYGBGbjo6Tm90YGAgYWN0cyBhcyBhIE5PVCBvcGVyYXRvci5cbiAgICogQHBhcmFtIGNvbmRpdGlvbiBBIGNvbmRpdGlvbiBzdWNoIGFzIGBgRm46OkVxdWFsc2BgIHRoYXQgZXZhbHVhdGVzIHRvIHRydWVcbiAgICogb3IgZmFsc2UuXG4gICAqIEByZXR1cm5zIGFuIEZuQ29uZGl0aW9uIHRva2VuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGNvbmRpdGlvbk5vdChcbiAgICBjb25kaXRpb246IHN0cmluZyB8IElSb3NDb25kaXRpb25FeHByZXNzaW9uXG4gICk6IElSb3NDb25kaXRpb25FeHByZXNzaW9uIHtcbiAgICByZXR1cm4gbmV3IEZuTm90KGNvbmRpdGlvbik7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIGFueSBvbmUgb2YgdGhlIHNwZWNpZmllZCBjb25kaXRpb25zIGV2YWx1YXRlIHRvIHRydWUsIG9yXG4gICAqIHJldHVybnMgZmFsc2UgaWYgYWxsIG9mIHRoZSBjb25kaXRpb25zIGV2YWx1YXRlcyB0byBmYWxzZS4gYGBGbjo6T3JgYCBhY3RzXG4gICAqIGFzIGFuIE9SIG9wZXJhdG9yLiBUaGUgbWluaW11bSBudW1iZXIgb2YgY29uZGl0aW9ucyB0aGF0IHlvdSBjYW4gaW5jbHVkZSBpc1xuICAgKiAyLCBhbmQgdGhlIG1heGltdW0gaXMgMTAuXG4gICAqIEBwYXJhbSBjb25kaXRpb25zIGNvbmRpdGlvbnMgdGhhdCBldmFsdWF0ZXMgdG8gdHJ1ZSBvciBmYWxzZS5cbiAgICogQHJldHVybnMgYW4gRm5Db25kaXRpb24gdG9rZW5cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgY29uZGl0aW9uT3IoXG4gICAgLi4uY29uZGl0aW9uczogKHN0cmluZyB8IElSb3NDb25kaXRpb25FeHByZXNzaW9uKVtdXG4gICk6IElSb3NDb25kaXRpb25FeHByZXNzaW9uIHtcbiAgICByZXR1cm4gbmV3IEZuT3IoLi4uY29uZGl0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIGludHJpbnNpYyBmdW5jdGlvbiBGbjo6SW5kZW50IGFkanVzdCB0aGUgaW5kZW50YXRpb24gb2YgdGhlIHN0cmluZy5cbiAgICogQHBhcmFtIHN0ciBTdHJpbmdzIHRoYXQgbmVlZCB0byBiZSBpbmRlbnRlZC5cbiAgICogQHBhcmFtIGxldmVsIEluZGVudGF0aW9uIGxldmVsLiBUaGUgcmFuZ2UgaXMgWzAsMjBdLlxuICAgKiBAcGFyYW0gaW5kZW50IE9wdGlvbmFsLCBkZWZhdWx0cyB0byAyIGZvciB0d28gU3BhY2VzIHBlciBsZXZlbCwgaW4gdGhlIHJhbmdlIFswLDRdLlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBpbmRlbnQoc3RyOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUsIGxldmVsOiBudW1iZXIgfCByb3MuSVJlc29sdmFibGUsIGluZGVudD86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG5ldyBGbkluZGVudChzdHIsIGxldmVsLCBpbmRlbnQpLnRvU3RyaW5nKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIGl0ZW0gaW4gdGhlIGxpc3QuXG4gICAqIEBwYXJhbSBpdGVtVG9GaW5kSW5kZXggVGhlIGl0ZW0gdG8gZmluZCBpbiB0aGUgbGlzdC5cbiAgICogQHBhcmFtIGl0ZW1MaXN0IFRoZSBsaXN0IHRvIGZpbmQgdGhlIGl0ZW0gaW4uXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGluZGV4KGl0ZW1Ub0ZpbmRJbmRleDogYW55LCBpdGVtTGlzdDogYW55W10gfCByb3MuSVJlc29sdmFibGUpOiBzdHJpbmcge1xuICAgIHJldHVybiBuZXcgRm5JbmRleChpdGVtVG9GaW5kSW5kZXgsIGl0ZW1MaXN0KS50b1N0cmluZygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGxlbmd0aCBvZiB0aGUgb2JqZWN0LlxuICAgKiBAcGFyYW0gb2JqIEFuIG9iamVjdCB3aG9zZSBsZW5ndGggbmVlZHMgdG8gYmUgY29tcHV0ZWQuIFRocmVlIHR5cGVzIGFyZSBzdXBwb3J0ZWQ6IHN0cmluZ3MsIGxpc3RzLCBhbmQgZGljdGlvbmFyaWVzLlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBsZW5ndGhPZihvYmo6IGFueSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG5ldyBGbkxlbmd0aChvYmopLnRvU3RyaW5nKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZm9ybWF0dGVkIHRpbWUgb2YgdGhlIG9iamVjdC5cbiAgICogQHBhcmFtIGZvcm1hdCBUaGUgZm9ybWF0IG9mIHRoZSB0aW1lLlxuICAgKiBAcGFyYW0gdGltZVpvbmUgVGhlIHRpbWUgem9uZS5cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgZm9ybWF0VGltZShmb3JtYXQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSwgdGltZVpvbmU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG5ldyBGbkZvcm1hdFRpbWUoZm9ybWF0LCB0aW1lWm9uZSkudG9TdHJpbmcoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgaW50cmluc2ljIGZ1bmN0aW9uIEZuOjpNYXJrZXRwbGFjZUltYWdlIHJldHVybnMgdGhlIGRlZmF1bHQgaW1hZ2UgSUQgb2YgdGhlIHNwZWNpZmllZCBjbG91ZCBtYXJrZXRwbGFjZSBpbWFnZSBwcm9kdWN0IENvZGUuXG4gICAqIEBwYXJhbSBpbWFnZVByb2R1Y3RDb2RlIFRoZSBwcm9kdWN0IGNvZGUgb2YgdGhlIGNsb3VkIG1hcmtldHBsYWNlIGltYWdlLlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBtYXJrZXRwbGFjZUltYWdlKGltYWdlUHJvZHVjdENvZGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG5ldyBGbk1hcmtldHBsYWNlSW1hZ2UoaW1hZ2VQcm9kdWN0Q29kZSkudG9TdHJpbmcoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHdoZXRoZXIgYSB2YWx1ZSBpbiB0aGUgc3BlY2lmaWVkIGFycmF5IGlzIHRydWUgb3IgZmFsc2UuIFJldHVybnMgdHJ1ZSBpZiBhbnkgaXRlbSBpbiB0aGUgYXJyYXkgaXMgdHJ1ZSwgYW5kIGZhbHNlIG90aGVyd2lzZS5cbiAgICogQHBhcmFtIHZhbHVlcyBBbiBhcnJheSBvZiB2YWx1ZXMuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGFueSh2YWx1ZXM6IGFueVtdIHwgcm9zLklSZXNvbHZhYmxlKTogc3RyaW5nIHtcbiAgICByZXR1cm4gbmV3IEZuQW55KHZhbHVlcykudG9TdHJpbmcoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgYXQgbGVhc3Qgb25lIG1lbWJlciBvZiB0aGUgbGlzdCBtYXRjaGVzIHRoZSBzcGVjaWZpZWQgdmFsdWUgYW5kIGZhbHNlIG90aGVyd2lzZS5cbiAgICogQHBhcmFtIHZhbHVlcyBBbiBhcnJheSBvZiB2YWx1ZXMuXG4gICAqIEBwYXJhbSB2YWx1ZSBBIHZhbHVlLlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBjb250YWlucyh2YWx1ZXM6IGFueVtdIHwgcm9zLklSZXNvbHZhYmxlLCB2YWx1ZTogYW55KTogc3RyaW5nIHtcbiAgICByZXR1cm4gbmV3IEZuQ29udGFpbnModmFsdWVzLCB2YWx1ZSkudG9TdHJpbmcoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgZXZlcnkgbWVtYmVyIG9mIHRoZSBmaXJzdCBsaXN0IGlzIGVxdWFsIHRvIGF0IGxlYXN0IG9uZSB2YWx1ZSBpbiB0aGUgc2Vjb25kIGxpc3QsIGFuZCBmYWxzZSBvdGhlcndpc2UuXG4gICAqIEBwYXJhbSB2YWx1ZXMxIEFuIGFycmF5IG9mIHZhbHVlcy5cbiAgICogQHBhcmFtIHZhbHVlczIgQW4gYXJyYXkgb2YgdmFsdWVzLlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBlYWNoTWVtYmVySW4odmFsdWVzMTogYW55W10gfCByb3MuSVJlc29sdmFibGUsIHZhbHVlczI6IGFueVtdIHwgcm9zLklSZXNvbHZhYmxlKTogc3RyaW5nIHtcbiAgICByZXR1cm4gbmV3IEZuRWFjaE1lbWJlckluKHZhbHVlczEsIHZhbHVlczIpLnRvU3RyaW5nKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIGEgc3BlY2lmaWVkIHN0cmluZyBtYXRjaGVzIGEgc3BlY2lmaWVkIHBhdHRlcm4uXG4gICAqIEBwYXJhbSBwYXR0ZXJuIEEgcmVndWxhciBleHByZXNzaW9uIGluIHN0cmluZyBmb3JtLlxuICAgKiBAcGFyYW0gdmFsdWUgVGhlIHN0cmluZyB0byBtYXRjaC5cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgbWF0Y2hQYXR0ZXJuKHBhdHRlcm46IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSwgdmFsdWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG5ldyBGbk1hdGNoUGF0dGVybihwYXR0ZXJuLCB2YWx1ZSkudG9TdHJpbmcoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgbGlzdCBvZiBDSURSIGFkZHJlc3Nlcy5cbiAgICogQHBhcmFtIGlwQmxvY2sgVGhlIElQIGFkZHJlc3MgYmxvY2sgZnJvbSB3aGljaCB5b3Ugd2FudCB0byBhbGxvY2F0ZSB0aGUgQ0lEUi4gVGhlIGJsb2NrIG11c3QgYmUgZXhwcmVzc2VkIGluIENJRFIgbm90YXRpb24uXG4gICAqIEBwYXJhbSBjb3VudCBUaGUgbnVtYmVyIG9mIElQdjQgQ0lEUnMgdG8gZ2VuZXJhdGUuIFZhbGlkIGlucHV0IHZhbHVlcyByYW5nZSBmcm9tIDEgdG8gMjU2IGFuZCBhcmUgdXNlZCB0byBkZWNpZGUgdGhlIHRvdGFsIG51bWJlciBvZiBmaW5hbCBzdWJuZXRzLlxuICAgKiBAcGFyYW0gY2lkckJpdHMgVGhlIG51bWJlciBvZiBzdWJuZXQgYml0cyBvZiB0aGUgbmV3IENJRFIuIEZvciBleGFtcGxlLCBpZiB0aGUgdmFsdWUgXCI4XCIgaXMgc3BlY2lmaWVkIGZvciB0aGlzIHBhcmFtZXRlciwgYSBDSURSIHdpdGggYSBcIi8yNFwiIG1hc2sgd2lsbCBiZSBjcmVhdGVkLlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBjaWRyKGlwQmxvY2s6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSwgY291bnQ6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZSwgY2lkckJpdHM6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG5ldyBGbkNpZHIoaXBCbG9jaywgY291bnQsIGNpZHJCaXRzKS50b1N0cmluZygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiBhIHNwZWNpZmllZCBzdHJpbmcgbWF0Y2hlcyBhbGwgdmFsdWVzIGluIGEgbGlzdC5cbiAgICogcGFyYW0gbGlzdE9mU3RyaW5ncyBBIGxpc3Qgb2Ygc3RyaW5ncywgc3VjaCBhcyBcIkFcIiwgXCJCXCIsIFwiQ1wiLlxuICAgKiBwYXJhbSB2YWx1ZSBBIHN0cmluZywgc3VjaCBhcyBcIkFcIiwgdGhhdCB5b3Ugd2FudCB0byBjb21wYXJlIGFnYWluc3QgYSBsaXN0XG4gICAqIG9mIHN0cmluZ3MuXG4gICAqIEByZXR1cm5zIGFuIEZuQ29uZGl0aW9uIHRva2VuXG4gICAqL1xuICAvLyBzdGF0aWMgY29uZGl0aW9uRWFjaE1lbWJlckVxdWFscyhcbiAgLy8gICBsaXN0T2ZTdHJpbmdzOiBzdHJpbmdbXSxcbiAgLy8gICB2YWx1ZTogc3RyaW5nXG4gIC8vICk6IElSb3NDb25kaXRpb25FeHByZXNzaW9uIHtcbiAgLy8gICByZXR1cm4gbmV3IEZuRWFjaE1lbWJlckVxdWFscyhsaXN0T2ZTdHJpbmdzLCB2YWx1ZSk7XG4gIC8vIH1cblxuICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge31cbn1cblxuLyoqXG4gKiBCYXNlIGNsYXNzIGZvciB0b2tlbnMgdGhhdCByZXByZXNlbnQgUk9TIGludHJpbnNpYyBmdW5jdGlvbnMuXG4gKi9cbmNsYXNzIEZuQmFzZSBleHRlbmRzIEludHJpbnNpYyB7XG4gIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSkge1xuICAgIHN1cGVyKHsgW25hbWVdOiB2YWx1ZSB9KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRm5JbmRlbnQgZXh0ZW5kcyBGbkJhc2Uge1xuICAvKipcbiAgICogQ3JlYXRlcyBhbiBgYEluZGVudGBgIGZ1bmN0aW9uLlxuICAgKi9cbiAgY29uc3RydWN0b3Ioc3RyOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUsIGxldmVsOiBudW1iZXIgfCByb3MuSVJlc29sdmFibGUsIGluZGVudD86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZSkge1xuICAgIGlmICh0eXBlb2YgbGV2ZWwgPT09ICdudW1iZXInICYmIChsZXZlbCA8IDAgfHwgbGV2ZWwgPiAyMCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcImxldmVsIG11c3QgYmUgZ3JlYXRlciB0aGFuIDAgb3IgbGVzcyB0aGFuIDIwXCIpO1xuICAgIH1cbiAgICBpZiAoaW5kZW50ICYmIHR5cGVvZiBpbmRlbnQgPT09ICdudW1iZXInICYmIChpbmRlbnQgPCAwIHx8IGluZGVudCA+IDQpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbmRlbnQgbXVzdCBiZSBncmVhdGVyIHRoYW4gMCBvciBsZXNzIHRoYW4gNFwiKTtcbiAgICB9XG4gICAgc3VwZXIoXCJGbjo6SW5kZW50XCIsIFtzdHIsIGxldmVsLCBpbmRlbnRdKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRm5JbmRleCBleHRlbmRzIEZuQmFzZSB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGBgSW5kZXhgYCBmdW5jdGlvbi5cbiAgICovXG4gIGNvbnN0cnVjdG9yKGl0ZW1Ub0ZpbmRJbmRleDogYW55LCBpdGVtTGlzdDogYW55W10gfCByb3MuSVJlc29sdmFibGUpIHtcbiAgICBzdXBlcihcIkZuOjpJbmRleFwiLCBbaXRlbVRvRmluZEluZGV4LCBpdGVtTGlzdF0pO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGbkxlbmd0aCBleHRlbmRzIEZuQmFzZSB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGBgTGVuZ3RoYGAgZnVuY3Rpb24uXG4gICAqL1xuICBjb25zdHJ1Y3RvcihvYmo6IGFueSkge1xuICAgIHN1cGVyKFwiRm46Okxlbmd0aFwiLCBvYmopO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGbkZvcm1hdFRpbWUgZXh0ZW5kcyBGbkJhc2Uge1xuICAvKipcbiAgICogQ3JlYXRlcyBhbiBgYEZvcm1hdFRpbWVgYCBmdW5jdGlvbi5cbiAgICovXG4gIGNvbnN0cnVjdG9yKGZvcm1hdDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlLCB0aW1lWm9uZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlKSB7XG4gICAgc3VwZXIoXCJGbjo6Rm9ybWF0VGltZVwiLCBbZm9ybWF0LCB0aW1lWm9uZV0pO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGbk1hcmtldHBsYWNlSW1hZ2UgZXh0ZW5kcyBGbkJhc2Uge1xuICAvKipcbiAgICogQ3JlYXRlcyBhbiBgYE1hcmtldHBsYWNlSW1hZ2VgYCBmdW5jdGlvbi5cbiAgICovXG4gIGNvbnN0cnVjdG9yKGltYWdlUHJvZHVjdENvZGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSkge1xuICAgIHN1cGVyKFwiRm46Ok1hcmtldHBsYWNlSW1hZ2VcIiwgaW1hZ2VQcm9kdWN0Q29kZSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZuQW55IGV4dGVuZHMgRm5CYXNlIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gYGBBbnlgYCBmdW5jdGlvbi5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlczogYW55W10gfCByb3MuSVJlc29sdmFibGUpIHtcbiAgICBzdXBlcihcIkZuOjpBbnlcIiwgdmFsdWVzKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRm5Db250YWlucyBleHRlbmRzIEZuQmFzZSB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGBgQ29udGFpbnNgYCBmdW5jdGlvbi5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlczogYW55W10gfCByb3MuSVJlc29sdmFibGUsIHZhbHVlOiBhbnkpIHtcbiAgICBzdXBlcihcIkZuOjpDb250YWluc1wiLCBbdmFsdWVzLCB2YWx1ZV0pO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGbkVhY2hNZW1iZXJJbiBleHRlbmRzIEZuQmFzZSB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGBgRWFjaE1lbWJlckluYGAgZnVuY3Rpb24uXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZXMxOiBhbnlbXSB8IHJvcy5JUmVzb2x2YWJsZSwgdmFsdWVzMjogYW55W10gfCByb3MuSVJlc29sdmFibGUpIHtcbiAgICBzdXBlcihcIkZuOjpFYWNoTWVtYmVySW5cIiwgW3ZhbHVlczEsIHZhbHVlczJdKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRm5NYXRjaFBhdHRlcm4gZXh0ZW5kcyBGbkJhc2Uge1xuICAvKipcbiAgICogQ3JlYXRlcyBhbiBgYE1hdGNoUGF0dGVybmBgIGZ1bmN0aW9uLlxuICAgKi9cbiAgY29uc3RydWN0b3IocGF0dGVybjogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlLCB2YWx1ZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlKSB7XG4gICAgc3VwZXIoXCJGbjo6TWF0Y2hQYXR0ZXJuXCIsIFtwYXR0ZXJuLCB2YWx1ZV0pO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGbkNpZHIgZXh0ZW5kcyBGbkJhc2Uge1xuICAvKipcbiAgICogQ3JlYXRlcyBhbiBgYENpZHJgYCBmdW5jdGlvbi5cbiAgICovXG4gIGNvbnN0cnVjdG9yKGlwQmxvY2s6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSwgY291bnQ6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZSwgY2lkckJpdHM6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZSkge1xuICAgIHN1cGVyKFwiRm46OkNpZHJcIiwgW2lwQmxvY2ssIGNvdW50LCBjaWRyQml0c10pO1xuICB9XG59XG5cbi8vIG5ldyBmdW5jdGlvblxuZXhwb3J0IGNsYXNzIEZuU3RyIGV4dGVuZHMgRm5CYXNlIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gYGBTdHJgYCBmdW5jdGlvbi5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlOiBhbnkpIHtcbiAgICBzdXBlcihcIkZuOjpTdHJcIiwgdmFsdWUpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGbkJhc2U2NERlY29kZSBleHRlbmRzIEZuQmFzZSB7XG4gIGNvbnN0cnVjdG9yKGRhdGE6IGFueSkge1xuICAgIHN1cGVyKFwiRm46OkJhc2U2NERlY29kZVwiLCBkYXRhKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRm5SZXBsYWNlIGV4dGVuZHMgRm5CYXNlIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gYGBSZXBsYWNlYGAgZnVuY3Rpb24uXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZTogYW55KSB7XG4gICAgc3VwZXIoXCJGbjo6UmVwbGFjZVwiLCB2YWx1ZSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZuR2V0SnNvblZhbHVlIGV4dGVuZHMgRm5CYXNlIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gYGBHZXRKc29uVmFsdWVgYCBmdW5jdGlvbi5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlOiBhbnkpIHtcbiAgICBzdXBlcihcIkZuOjpHZXRKc29uVmFsdWVcIiwgdmFsdWUpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGbkF2ZyBleHRlbmRzIEZuQmFzZSB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGBgQXZnYGAgZnVuY3Rpb24uXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZTogYW55KSB7XG4gICAgc3VwZXIoXCJGbjo6QXZnXCIsIHZhbHVlKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRm5BZGQgZXh0ZW5kcyBGbkJhc2Uge1xuICAvKipcbiAgICogQ3JlYXRlcyBhbiBgYEFkZGBgIGZ1bmN0aW9uLlxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWVzOiBhbnkpIHtcbiAgICBzdXBlcihcIkZuOjpBZGRcIiwgdmFsdWVzKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRm5DYWxjdWxhdGUgZXh0ZW5kcyBGbkJhc2Uge1xuICAvKipcbiAgICogQ3JlYXRlcyBhbiBgYENhbGN1bGF0ZWBgIGZ1bmN0aW9uLlxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU6IGFueSkge1xuICAgIHN1cGVyKFwiRm46OkNhbGN1bGF0ZVwiLCB2YWx1ZSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZuTWF4IGV4dGVuZHMgRm5CYXNlIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gYGBNYXhgYCBmdW5jdGlvbi5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlczogYW55KSB7XG4gICAgc3VwZXIoXCJGbjo6TWF4XCIsIHZhbHVlcyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZuTWluIGV4dGVuZHMgRm5CYXNlIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gYGBNaW5gYCBmdW5jdGlvbi5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlczogYW55KSB7XG4gICAgc3VwZXIoXCJGbjo6TWluXCIsIHZhbHVlcyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZuR2V0U3RhY2tPdXRwdXQgZXh0ZW5kcyBGbkJhc2Uge1xuICAvKipcbiAgICogQ3JlYXRlcyBhbiBgYEdldFN0YWNrT3V0cHV0YGAgZnVuY3Rpb24uXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZTogYW55KSB7XG4gICAgc3VwZXIoXCJGbjo6R2V0U3RhY2tPdXRwdXRcIiwgdmFsdWUpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGbkpxIGV4dGVuZHMgRm5CYXNlIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gYGBKcWBgIGZ1bmN0aW9uLlxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU6IGFueSkge1xuICAgIHN1cGVyKFwiRm46OkpxXCIsIHZhbHVlKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRm5NZXJnZU1hcFRvTGlzdCBleHRlbmRzIEZuQmFzZSB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGBgRm5NZXJnZU1hcFRvTGlzdGBgIGZ1bmN0aW9uLlxuICAgKi9cbiAgY29uc3RydWN0b3IobWFwTGlzdDogYW55KSB7XG4gICAgc3VwZXIoXCJGbjo6TWVyZ2VNYXBUb0xpc3RcIiwgbWFwTGlzdCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZuU2VsZWN0TWFwTGlzdCBleHRlbmRzIEZuQmFzZSB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGBgRm5NZXJnZU1hcFRvTGlzdGBgIGZ1bmN0aW9uLlxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU6IGFueSkge1xuICAgIHN1cGVyKFwiRm46OlNlbGVjdE1hcExpc3RcIiwgdmFsdWUpO1xuICB9XG59XG5cbi8qKlxuICogVGhlIGludHJpbnNpYyBmdW5jdGlvbiBgYFJlZmBgIHJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSBzcGVjaWZpZWQgcGFyYW1ldGVyIG9yIHJlc291cmNlLlxuICogV2hlbiB5b3Ugc3BlY2lmeSBhIHBhcmFtZXRlcidzIGxvZ2ljYWwgbmFtZSwgaXQgcmV0dXJucyB0aGUgdmFsdWUgb2YgdGhlIHBhcmFtZXRlci5cbiAqIFdoZW4geW91IHNwZWNpZnkgYSByZXNvdXJjZSdzIGxvZ2ljYWwgbmFtZSwgaXQgcmV0dXJucyBhIHZhbHVlIHRoYXQgeW91IGNhbiB0eXBpY2FsbHkgdXNlIHRvIHJlZmVyIHRvIHRoYXQgcmVzb3VyY2UsIHN1Y2ggYXMgYSBwaHlzaWNhbCBJRC5cbiAqL1xuZXhwb3J0IGNsYXNzIEZuUmVmIGV4dGVuZHMgRm5CYXNlIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gYGBSZWZgYCBmdW5jdGlvbi5cbiAgICogQHBhcmFtIGxvZ2ljYWxOYW1lIFRoZSBsb2dpY2FsIG5hbWUgb2YgYSBwYXJhbWV0ZXIvcmVzb3VyY2UgZm9yIHdoaWNoIHlvdSB3YW50IHRvIHJldHJpZXZlIGl0cyB2YWx1ZS5cbiAgICovXG4gIGNvbnN0cnVjdG9yKGxvZ2ljYWxOYW1lOiBzdHJpbmcpIHtcbiAgICBzdXBlcihcIlJlZlwiLCBsb2dpY2FsTmFtZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBUaGUgaW50cmluc2ljIGZ1bmN0aW9uIGBgRm46OkZpbmRJbk1hcGBgIHJldHVybnMgdGhlIHZhbHVlIGNvcnJlc3BvbmRpbmcgdG8ga2V5cyBpbiBhIHR3by1sZXZlbFxuICogbWFwIHRoYXQgaXMgZGVjbGFyZWQgaW4gdGhlIE1hcHBpbmdzIHNlY3Rpb24uXG4gKi9cbmV4cG9ydCBjbGFzcyBGbkZpbmRJbk1hcCBleHRlbmRzIEZuQmFzZSB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGBgRm46OkZpbmRJbk1hcGBgIGZ1bmN0aW9uLlxuICAgKiBwYXJhbSBtYXBOYW1lIFRoZSBsb2dpY2FsIG5hbWUgb2YgYSBtYXBwaW5nIGRlY2xhcmVkIGluIHRoZSBNYXBwaW5ncyBzZWN0aW9uIHRoYXQgY29udGFpbnMgdGhlIGtleXMgYW5kIHZhbHVlcy5cbiAgICogcGFyYW0gdG9wTGV2ZWxLZXkgVGhlIHRvcC1sZXZlbCBrZXkgbmFtZS4gSXRzIHZhbHVlIGlzIGEgbGlzdCBvZiBrZXktdmFsdWUgcGFpcnMuXG4gICAqIHBhcmFtIHNlY29uZExldmVsS2V5IFRoZSBzZWNvbmQtbGV2ZWwga2V5IG5hbWUsIHdoaWNoIGlzIHNldCB0byBvbmUgb2YgdGhlIGtleXMgZnJvbSB0aGUgbGlzdCBhc3NpZ25lZCB0byBUb3BMZXZlbEtleS5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHZhbHVlOiBhbnkpIHtcbiAgICBzdXBlcihcIkZuOjpGaW5kSW5NYXBcIiwgdmFsdWUpO1xuICB9XG59XG5cbi8qKlxuICogVGhlIGBgRm46OkdldEF0dGBgIGludHJpbnNpYyBmdW5jdGlvbiByZXR1cm5zIHRoZSB2YWx1ZSBvZiBhbiBhdHRyaWJ1dGUgZnJvbSBhIHJlc291cmNlIGluIHRoZSB0ZW1wbGF0ZS5cbiAqL1xuZXhwb3J0IGNsYXNzIEZuR2V0QXR0IGV4dGVuZHMgRm5CYXNlIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBgYEZuOjpHZXRBdHRgYCBmdW5jdGlvbi5cbiAgICogQHBhcmFtIGxvZ2ljYWxOYW1lT2ZSZXNvdXJjZSBUaGUgbG9naWNhbCBuYW1lIChhbHNvIGNhbGxlZCBsb2dpY2FsIElEKSBvZiB0aGUgcmVzb3VyY2UgdGhhdCBjb250YWlucyB0aGUgYXR0cmlidXRlIHRoYXQgeW91IHdhbnQuXG4gICAqIEBwYXJhbSBhdHRyaWJ1dGVOYW1lIFRoZSBuYW1lIG9mIHRoZSByZXNvdXJjZS1zcGVjaWZpYyBhdHRyaWJ1dGUgd2hvc2UgdmFsdWUgeW91IHdhbnQuIFNlZSB0aGUgcmVzb3VyY2UncyByZWZlcmVuY2UgcGFnZSBmb3IgZGV0YWlscyBhYm91dCB0aGUgYXR0cmlidXRlcyBhdmFpbGFibGUgZm9yIHRoYXQgcmVzb3VyY2UgdHlwZS5cbiAgICovXG4gIGNvbnN0cnVjdG9yKGxvZ2ljYWxOYW1lT2ZSZXNvdXJjZTogc3RyaW5nLCBhdHRyaWJ1dGVOYW1lOiBzdHJpbmcpIHtcbiAgICBzdXBlcihcIkZuOjpHZXRBdHRcIiwgW2xvZ2ljYWxOYW1lT2ZSZXNvdXJjZSwgYXR0cmlidXRlTmFtZV0pO1xuICB9XG59XG5cbi8qKlxuICogVGhlIGludHJpbnNpYyBmdW5jdGlvbiBgYEZuOjpHZXRBWnNgYCByZXR1cm5zIGFuIGFycmF5IHRoYXQgbGlzdHMgQXZhaWxhYmlsaXR5IFpvbmVzIGZvciBhXG4gKiBzcGVjaWZpZWQgcmVnaW9uLiBCZWNhdXNlIGN1c3RvbWVycyBoYXZlIGFjY2VzcyB0byBkaWZmZXJlbnQgQXZhaWxhYmlsaXR5IFpvbmVzLCB0aGUgaW50cmluc2ljXG4gKiBmdW5jdGlvbiBgYEZuOjpHZXRBWnNgYCBlbmFibGVzIHRlbXBsYXRlIGF1dGhvcnMgdG8gd3JpdGUgdGVtcGxhdGVzIHRoYXQgYWRhcHQgdG8gdGhlIGNhbGxpbmdcbiAqIHVzZXIncyBhY2Nlc3MuIFRoYXQgd2F5IHlvdSBkb24ndCBoYXZlIHRvIGhhcmQtY29kZSBhIGZ1bGwgbGlzdCBvZiBBdmFpbGFiaWxpdHkgWm9uZXMgZm9yIGFcbiAqIHNwZWNpZmllZCByZWdpb24uXG4gKi9cbmV4cG9ydCBjbGFzcyBGbkdldEFacyBleHRlbmRzIEZuQmFzZSB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGBgRm46OkdldEFac2BgIGZ1bmN0aW9uLlxuICAgKiBAcGFyYW0gcmVnaW9uIFRoZSBuYW1lIG9mIHRoZSByZWdpb24gZm9yIHdoaWNoIHlvdSB3YW50IHRvIGdldCB0aGUgQXZhaWxhYmlsaXR5IFpvbmVzLlxuICAgKi9cbiAgY29uc3RydWN0b3IocmVnaW9uOiBhbnkpIHtcbiAgICBzdXBlcihcIkZuOjpHZXRBWnNcIiwgcmVnaW9uKTtcbiAgfVxufVxuXG4vKipcbiAqIFRoZSBpbnRyaW5zaWMgZnVuY3Rpb24gYGBGbjo6U2VsZWN0YGAgcmV0dXJucyBhIHNpbmdsZSBvYmplY3QgZnJvbSBhIGxpc3Qgb2Ygb2JqZWN0cyBieSBpbmRleC5cbiAqL1xuZXhwb3J0IGNsYXNzIEZuU2VsZWN0IGV4dGVuZHMgRm5CYXNlIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gYGBGbjo6U2VsZWN0YGAgZnVuY3Rpb24uXG4gICAqIHBhcmFtIGluZGV4IFRoZSBpbmRleCBvZiB0aGUgb2JqZWN0IHRvIHJldHJpZXZlLiBUaGlzIG11c3QgYmUgYSB2YWx1ZSBmcm9tIHplcm8gdG8gTi0xLCB3aGVyZSBOIHJlcHJlc2VudHMgdGhlIG51bWJlciBvZiBlbGVtZW50cyBpbiB0aGUgYXJyYXkuXG4gICAqIHBhcmFtIGFycmF5IFRoZSBsaXN0IG9mIG9iamVjdHMgdG8gc2VsZWN0IGZyb20uIFRoaXMgbGlzdCBtdXN0IG5vdCBiZSBudWxsLCBub3IgY2FuIGl0IGhhdmUgbnVsbCBlbnRyaWVzLlxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU6IGFueSkge1xuICAgIHN1cGVyKFwiRm46OlNlbGVjdFwiLCB2YWx1ZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBUbyBzcGxpdCBhIHN0cmluZyBpbnRvIGEgbGlzdCBvZiBzdHJpbmcgdmFsdWVzIHNvIHRoYXQgeW91IGNhbiBzZWxlY3QgYW4gZWxlbWVudCBmcm9tIHRoZVxuICogcmVzdWx0aW5nIHN0cmluZyBsaXN0LCB1c2UgdGhlIGBgRm46OlNwbGl0YGAgaW50cmluc2ljIGZ1bmN0aW9uLiBTcGVjaWZ5IHRoZSBsb2NhdGlvbiBvZiBzcGxpdHNcbiAqIHdpdGggYSBkZWxpbWl0ZXIsIHN1Y2ggYXMgLCAoYSBjb21tYSkuIEFmdGVyIHlvdSBzcGxpdCBhIHN0cmluZywgdXNlIHRoZSBgYEZuOjpTZWxlY3RgYCBmdW5jdGlvblxuICogdG8gcGljayBhIHNwZWNpZmljIGVsZW1lbnQuXG4gKi9cbmV4cG9ydCBjbGFzcyBGblNwbGl0IGV4dGVuZHMgRm5CYXNlIHtcbiAgLyoqXG4gICAqIENyZWF0ZSBhbiBgYEZuOjpTcGxpdGBgIGZ1bmN0aW9uLlxuICAgKiBwYXJhbSBkZWxpbWl0ZXIgQSBzdHJpbmcgdmFsdWUgdGhhdCBkZXRlcm1pbmVzIHdoZXJlIHRoZSBzb3VyY2Ugc3RyaW5nIGlzIGRpdmlkZWQuXG4gICAqIHBhcmFtIHNvdXJjZSBUaGUgc3RyaW5nIHZhbHVlIHRoYXQgeW91IHdhbnQgdG8gc3BsaXQuXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZTogYW55KSB7XG4gICAgc3VwZXIoXCJGbjo6U3BsaXRcIiwgdmFsdWUpO1xuICB9XG59XG5cbi8qKlxuICogVGhlIGludHJpbnNpYyBmdW5jdGlvbiBgYEZuOjpTdWJgYCBzdWJzdGl0dXRlcyB2YXJpYWJsZXMgaW4gYW4gaW5wdXQgc3RyaW5nIHdpdGggdmFsdWVzIHRoYXRcbiAqIHlvdSBzcGVjaWZ5LiBJbiB5b3VyIHRlbXBsYXRlcywgeW91IGNhbiB1c2UgdGhpcyBmdW5jdGlvbiB0byBjb25zdHJ1Y3QgY29tbWFuZHMgb3Igb3V0cHV0c1xuICogdGhhdCBpbmNsdWRlIHZhbHVlcyB0aGF0IGFyZW4ndCBhdmFpbGFibGUgdW50aWwgeW91IGNyZWF0ZSBvciB1cGRhdGUgYSBzdGFjay5cbiAqL1xuZXhwb3J0IGNsYXNzIEZuU3ViIGV4dGVuZHMgRm5CYXNlIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gYGBGbjo6U3ViYGAgZnVuY3Rpb24uXG4gICAqIHBhcmFtIGJvZHkgQSBzdHJpbmcgd2l0aCB2YXJpYWJsZXMgdGhhdCBSb3MgVGVtcGxhdGUgc3Vic3RpdHV0ZXMgd2l0aCB0aGVpclxuICAgKiAgICAgICBhc3NvY2lhdGVkIHZhbHVlcyBhdCBydW50aW1lLiBXcml0ZSB2YXJpYWJsZXMgYXMgJHtNeVZhck5hbWV9LiBWYXJpYWJsZXNcbiAgICogICAgICAgY2FuIGJlIHRlbXBsYXRlIHBhcmFtZXRlciBuYW1lcywgcmVzb3VyY2UgbG9naWNhbCBJRHMsIHJlc291cmNlIGF0dHJpYnV0ZXMsXG4gICAqICAgICAgIG9yIGEgdmFyaWFibGUgaW4gYSBrZXktdmFsdWUgbWFwLiBJZiB5b3Ugc3BlY2lmeSBvbmx5IHRlbXBsYXRlIHBhcmFtZXRlciBuYW1lcyxcbiAgICogICAgICAgcmVzb3VyY2UgbG9naWNhbCBJRHMsIGFuZCByZXNvdXJjZSBhdHRyaWJ1dGVzLCBkb24ndCBzcGVjaWZ5IGEga2V5LXZhbHVlIG1hcC5cbiAgICogcGFyYW0gdmFyaWFibGVzIFRoZSBuYW1lIG9mIGEgdmFyaWFibGUgdGhhdCB5b3UgaW5jbHVkZWQgaW4gdGhlIFN0cmluZyBwYXJhbWV0ZXIuXG4gICAqICAgICAgICAgIFRoZSB2YWx1ZSB0aGF0IFJvcyBUZW1wbGF0ZSBzdWJzdGl0dXRlcyBmb3IgdGhlIGFzc29jaWF0ZWQgdmFyaWFibGUgbmFtZSBhdCBydW50aW1lLlxuICAgKi9cbiAgY29uc3RydWN0b3IodmFsdWU6IGFueSkge1xuICAgIHN1cGVyKFwiRm46OlN1YlwiLCB2YWx1ZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBUaGUgaW50cmluc2ljIGZ1bmN0aW9uIGBgRm46OkJhc2U2NGBgIHJldHVybnMgdGhlIEJhc2U2NCByZXByZXNlbnRhdGlvbiBvZiB0aGUgaW5wdXQgc3RyaW5nLlxuICovXG5leHBvcnQgY2xhc3MgRm5CYXNlNjRFbmNvZGUgZXh0ZW5kcyBGbkJhc2Uge1xuICAvKipcbiAgICogQ3JlYXRlcyBhbiBgYEZuOjpCYXNlNjRgYCBmdW5jdGlvbi5cbiAgICogQHBhcmFtIGRhdGEgVGhlIHN0cmluZyB2YWx1ZSB5b3Ugd2FudCB0byBjb252ZXJ0IHRvIEJhc2U2NC5cbiAgICovXG4gIGNvbnN0cnVjdG9yKGRhdGE6IGFueSkge1xuICAgIHN1cGVyKFwiRm46OkJhc2U2NEVuY29kZVwiLCBkYXRhKTtcbiAgfVxufVxuXG5jbGFzcyBGbkNvbmRpdGlvbkJhc2UgZXh0ZW5kcyBJbnRyaW5zaWMgaW1wbGVtZW50cyBJUm9zQ29uZGl0aW9uRXhwcmVzc2lvbiB7XG4gIGNvbnN0cnVjdG9yKHR5cGU6IHN0cmluZywgdmFsdWU6IGFueSkge1xuICAgIHN1cGVyKHsgW3R5cGVdOiB2YWx1ZSB9KTtcbiAgfVxufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiBhbGwgdGhlIHNwZWNpZmllZCBjb25kaXRpb25zIGV2YWx1YXRlIHRvIHRydWUsIG9yIHJldHVybnMgZmFsc2UgaWYgYW55IG9uZVxuICogIG9mIHRoZSBjb25kaXRpb25zIGV2YWx1YXRlcyB0byBmYWxzZS4gYGBGbjo6QW5kYGAgYWN0cyBhcyBhbiBBTkQgb3BlcmF0b3IuIFRoZSBtaW5pbXVtIG51bWJlciBvZlxuICogY29uZGl0aW9ucyB0aGF0IHlvdSBjYW4gaW5jbHVkZSBpcyAyLCBhbmQgdGhlIG1heGltdW0gaXMgMTAuXG4gKi9cbmV4cG9ydCBjbGFzcyBGbkFuZCBleHRlbmRzIEZuQ29uZGl0aW9uQmFzZSB7XG4gIGNvbnN0cnVjdG9yKC4uLmNvbmRpdGlvbjogKHN0cmluZyB8IElSb3NDb25kaXRpb25FeHByZXNzaW9uKVtdKSB7XG4gICAgc3VwZXIoXCJGbjo6QW5kXCIsIGNvbmRpdGlvbik7XG4gIH1cbn1cblxuLyoqXG4gKiBDb21wYXJlcyBpZiB0d28gdmFsdWVzIGFyZSBlcXVhbC4gUmV0dXJucyB0cnVlIGlmIHRoZSB0d28gdmFsdWVzIGFyZSBlcXVhbCBvciBmYWxzZVxuICogaWYgdGhleSBhcmVuJ3QuXG4gKi9cbmV4cG9ydCBjbGFzcyBGbkVxdWFscyBleHRlbmRzIEZuQ29uZGl0aW9uQmFzZSB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGBgRm46OkVxdWFsc2BgIGNvbmRpdGlvbiBmdW5jdGlvbi5cbiAgICogQHBhcmFtIGxocyBBIHZhbHVlIG9mIGFueSB0eXBlIHRoYXQgeW91IHdhbnQgdG8gY29tcGFyZS5cbiAgICogQHBhcmFtIHJocyBBIHZhbHVlIG9mIGFueSB0eXBlIHRoYXQgeW91IHdhbnQgdG8gY29tcGFyZS5cbiAgICovXG4gIGNvbnN0cnVjdG9yKGxoczogYW55LCByaHM6IGFueSkge1xuICAgIHN1cGVyKFwiRm46OkVxdWFsc1wiLCBbbGhzLCByaHNdKTtcbiAgfVxufVxuXG4vKipcbiAqIFJldHVybnMgb25lIHZhbHVlIGlmIHRoZSBzcGVjaWZpZWQgY29uZGl0aW9uIGV2YWx1YXRlcyB0byB0cnVlIGFuZCBhbm90aGVyIHZhbHVlIGlmIHRoZVxuICogc3BlY2lmaWVkIGNvbmRpdGlvbiBldmFsdWF0ZXMgdG8gZmFsc2UuXG4gKi9cbmV4cG9ydCBjbGFzcyBGbklmIGV4dGVuZHMgRm5Db25kaXRpb25CYXNlIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gYGBGbjo6SWZgYCBjb25kaXRpb24gZnVuY3Rpb24uXG4gICAqIEBwYXJhbSBjb25kaXRpb24gQSByZWZlcmVuY2UgdG8gYSBjb25kaXRpb24gaW4gdGhlIENvbmRpdGlvbnMgc2VjdGlvbi4gVXNlIHRoZSBjb25kaXRpb24ncyBuYW1lIHRvIHJlZmVyZW5jZSBpdC5cbiAgICogQHBhcmFtIHZhbHVlSWZUcnVlIEEgdmFsdWUgdG8gYmUgcmV0dXJuZWQgaWYgdGhlIHNwZWNpZmllZCBjb25kaXRpb24gZXZhbHVhdGVzIHRvIHRydWUuXG4gICAqIEBwYXJhbSB2YWx1ZUlmRmFsc2UgQSB2YWx1ZSB0byBiZSByZXR1cm5lZCBpZiB0aGUgc3BlY2lmaWVkIGNvbmRpdGlvbiBldmFsdWF0ZXMgdG8gZmFsc2UuXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihjb25kaXRpb246IHN0cmluZyB8IElSb3NDb25kaXRpb25FeHByZXNzaW9uLCB2YWx1ZUlmVHJ1ZTogYW55LCB2YWx1ZUlmRmFsc2U6IGFueSkge1xuICAgIHN1cGVyKFwiRm46OklmXCIsIFtjb25kaXRpb24sIHZhbHVlSWZUcnVlLCB2YWx1ZUlmRmFsc2VdKTtcbiAgfVxufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBmb3IgYSBjb25kaXRpb24gdGhhdCBldmFsdWF0ZXMgdG8gZmFsc2Ugb3IgcmV0dXJucyBmYWxzZSBmb3IgYSBjb25kaXRpb24gdGhhdCBldmFsdWF0ZXMgdG8gdHJ1ZS5cbiAqIGBgRm46Ok5vdGBgIGFjdHMgYXMgYSBOT1Qgb3BlcmF0b3IuXG4gKi9cbmV4cG9ydCBjbGFzcyBGbk5vdCBleHRlbmRzIEZuQ29uZGl0aW9uQmFzZSB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGBgRm46Ok5vdGBgIGNvbmRpdGlvbiBmdW5jdGlvbi5cbiAgICogQHBhcmFtIGNvbmRpdGlvbiBBIGNvbmRpdGlvbiBzdWNoIGFzIGBgRm46OkVxdWFsc2BgIHRoYXQgZXZhbHVhdGVzIHRvIHRydWUgb3IgZmFsc2UuXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihjb25kaXRpb246IHN0cmluZyB8IElSb3NDb25kaXRpb25FeHByZXNzaW9uKSB7XG4gICAgc3VwZXIoXCJGbjo6Tm90XCIsIFtjb25kaXRpb25dKTtcbiAgfVxufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiBhbnkgb25lIG9mIHRoZSBzcGVjaWZpZWQgY29uZGl0aW9ucyBldmFsdWF0ZSB0byB0cnVlLCBvciByZXR1cm5zIGZhbHNlIGlmXG4gKiBhbGwgb2YgdGhlIGNvbmRpdGlvbnMgZXZhbHVhdGVzIHRvIGZhbHNlLiBgYEZuOjpPcmBgIGFjdHMgYXMgYW4gT1Igb3BlcmF0b3IuIFRoZSBtaW5pbXVtIG51bWJlclxuICogb2YgY29uZGl0aW9ucyB0aGF0IHlvdSBjYW4gaW5jbHVkZSBpcyAyLCBhbmQgdGhlIG1heGltdW0gaXMgMTAuXG4gKi9cbmV4cG9ydCBjbGFzcyBGbk9yIGV4dGVuZHMgRm5Db25kaXRpb25CYXNlIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gYGBGbjo6T3JgYCBjb25kaXRpb24gZnVuY3Rpb24uXG4gICAqIEBwYXJhbSBjb25kaXRpb24gQSBjb25kaXRpb24gdGhhdCBldmFsdWF0ZXMgdG8gdHJ1ZSBvciBmYWxzZS5cbiAgICovXG4gIGNvbnN0cnVjdG9yKC4uLmNvbmRpdGlvbjogKHN0cmluZyB8IElSb3NDb25kaXRpb25FeHByZXNzaW9uKVtdKSB7XG4gICAgc3VwZXIoXCJGbjo6T3JcIiwgY29uZGl0aW9uKTtcbiAgfVxufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiBhIHNwZWNpZmllZCBzdHJpbmcgbWF0Y2hlcyBhbGwgdmFsdWVzIGluIGEgbGlzdC5cbiAqL1xuLy8gY2xhc3MgRm5FYWNoTWVtYmVyRXF1YWxzIGV4dGVuZHMgRm5Db25kaXRpb25CYXNlIHtcbi8vICAgLyoqXG4vLyAgICAqIENyZWF0ZXMgYW4gYGBGbjo6RWFjaE1lbWJlckVxdWFsc2BgIGZ1bmN0aW9uLlxuLy8gICAgKiBAcGFyYW0gbGlzdE9mU3RyaW5ncyBBIGxpc3Qgb2Ygc3RyaW5ncywgc3VjaCBhcyBcIkFcIiwgXCJCXCIsIFwiQ1wiLlxuLy8gICAgKiBAcGFyYW0gdmFsdWUgQSBzdHJpbmcsIHN1Y2ggYXMgXCJBXCIsIHRoYXQgeW91IHdhbnQgdG8gY29tcGFyZSBhZ2FpbnN0IGEgbGlzdCBvZiBzdHJpbmdzLlxuLy8gICAgKi9cbi8vICAgY29uc3RydWN0b3IobGlzdE9mU3RyaW5nczogYW55LCB2YWx1ZTogc3RyaW5nKSB7XG4vLyAgICAgc3VwZXIoXCJGbjo6RWFjaE1lbWJlckVxdWFsc1wiLCBbbGlzdE9mU3RyaW5ncywgdmFsdWVdKTtcbi8vICAgfVxuLy8gfVxuXG5cbmV4cG9ydCBjbGFzcyBGbkxpc3RNZXJnZSBpbXBsZW1lbnRzIElSZXNvbHZhYmxlIHtcbiAgcHVibGljIHJlYWRvbmx5IGNyZWF0aW9uU3RhY2s6IHN0cmluZ1tdO1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgbGlzdE9mVmFsdWVzOiBhbnlbXTtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBgYExpc3RNZXJnZWBgIGZ1bmN0aW9uLlxuICAgKi9cbiAgY29uc3RydWN0b3IobGlzdE9mVmFsdWVzOiBhbnlbXSkge1xuICAgIGlmIChsaXN0T2ZWYWx1ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGbkxpc3RNZXJnZSByZXF1aXJlcyBhdCBsZWFzdCBvbmUgdmFsdWUgdG8gYmUgcHJvdmlkZWRcIik7XG4gICAgfVxuXG4gICAgdGhpcy5saXN0T2ZWYWx1ZXMgPSBsaXN0T2ZWYWx1ZXM7XG4gICAgdGhpcy5jcmVhdGlvblN0YWNrID0gY2FwdHVyZVN0YWNrVHJhY2UoKTtcbiAgfVxuXG4gIHB1YmxpYyByZXNvbHZlKGNvbnRleHQ6IElSZXNvbHZlQ29udGV4dCk6IGFueSB7XG4gICAgaWYgKFRva2VuLmlzVW5yZXNvbHZlZCh0aGlzLmxpc3RPZlZhbHVlcykpIHtcbiAgICAgIC8vIFRoaXMgaXMgYSBsaXN0IHRva2VuLCBkb24ndCB0cnkgdG8gZG8gc21hcnQgdGhpbmdzIHdpdGggaXQuXG4gICAgICByZXR1cm4geyBcIkZuOjpMaXN0TWVyZ2VcIjogdGhpcy5saXN0T2ZWYWx1ZXMgfTtcbiAgICB9XG4gICAgY29uc3QgcmVzb2x2ZWQgPSB0aGlzLnJlc29sdmVWYWx1ZXMoY29udGV4dCk7XG4gICAgaWYgKHJlc29sdmVkLmxlbmd0aCA9PT0gMSkge1xuICAgICAgcmV0dXJuIHJlc29sdmVkWzBdO1xuICAgIH1cbiAgICByZXR1cm4geyBcIkZuOjpMaXN0TWVyZ2VcIjogcmVzb2x2ZWQgfTtcbiAgfVxuXG4gIHB1YmxpYyB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gVG9rZW4uYXNTdHJpbmcodGhpcywgeyBkaXNwbGF5SGludDogXCJGbjo6TGlzdE1lcmdlXCIgfSk7XG4gIH1cblxuICBwdWJsaWMgdG9KU09OKCkge1xuICAgIHJldHVybiBcIjxGbjo6TGlzdE1lcmdlPlwiO1xuICB9XG5cbiAgLyoqXG4gICAqIE9wdGltaXphdGlvbjogaWYgYW4gRm46Okxpc3RNZXJnZSBpcyBuZXN0ZWQgaW4gYW5vdGhlciBvbmUsIHRoZW4gZmxhdHRlbiBpdCB1cC5cbiAgICovXG4gIHByaXZhdGUgcmVzb2x2ZVZhbHVlcyhjb250ZXh0OiBJUmVzb2x2ZUNvbnRleHQpIHtcbiAgICBjb25zdCByZXNvbHZlZFZhbHVlcyA9IHRoaXMubGlzdE9mVmFsdWVzLm1hcCgoeCkgPT5cbiAgICAgICAgUmVmZXJlbmNlLmlzUmVmZXJlbmNlKHgpID8geCA6IGNvbnRleHQucmVzb2x2ZSh4KVxuICAgICk7XG4gICAgcmV0dXJuIG1pbmltYWxSb3NUZW1wbGF0ZUxpc3RNZXJnZShyZXNvbHZlZFZhbHVlcyk7XG4gIH1cbn1cblxuLyoqXG4gKiBUaGUgaW50cmluc2ljIGZ1bmN0aW9uIGBgRm46OkpvaW5gYCBhcHBlbmRzIGEgc2V0IG9mIHZhbHVlcyBpbnRvIGEgc2luZ2xlIHZhbHVlLCBzZXBhcmF0ZWQgYnlcbiAqIHRoZSBzcGVjaWZpZWQgZGVsaW1pdGVyLiBJZiBhIGRlbGltaXRlciBpcyB0aGUgZW1wdHkgc3RyaW5nLCB0aGUgc2V0IG9mIHZhbHVlcyBhcmUgY29uY2F0ZW5hdGVkXG4gKiB3aXRoIG5vIGRlbGltaXRlci5cbiAqL1xuZXhwb3J0IGNsYXNzIEZuSm9pbiBpbXBsZW1lbnRzIElSZXNvbHZhYmxlIHtcbiAgcHVibGljIHJlYWRvbmx5IGNyZWF0aW9uU3RhY2s6IHN0cmluZ1tdO1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgZGVsaW1pdGVyOiBzdHJpbmc7XG4gIHByaXZhdGUgcmVhZG9ubHkgbGlzdE9mVmFsdWVzOiBhbnlbXTtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBgYEZuOjpKb2luYGAgZnVuY3Rpb24uXG4gICAqIEBwYXJhbSBkZWxpbWl0ZXIgVGhlIHZhbHVlIHlvdSB3YW50IHRvIG9jY3VyIGJldHdlZW4gZnJhZ21lbnRzLiBUaGUgZGVsaW1pdGVyIHdpbGwgb2NjdXIgYmV0d2VlbiBmcmFnbWVudHMgb25seS5cbiAgICogICAgICAgICAgSXQgd2lsbCBub3QgdGVybWluYXRlIHRoZSBmaW5hbCB2YWx1ZS5cbiAgICogQHBhcmFtIGxpc3RPZlZhbHVlcyBUaGUgbGlzdCBvZiB2YWx1ZXMgeW91IHdhbnQgY29tYmluZWQuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihkZWxpbWl0ZXI6IHN0cmluZywgbGlzdE9mVmFsdWVzOiBhbnlbXSkge1xuICAgIGlmIChsaXN0T2ZWYWx1ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGbkpvaW4gcmVxdWlyZXMgYXQgbGVhc3Qgb25lIHZhbHVlIHRvIGJlIHByb3ZpZGVkXCIpO1xuICAgIH1cblxuICAgIHRoaXMuZGVsaW1pdGVyID0gZGVsaW1pdGVyO1xuICAgIHRoaXMubGlzdE9mVmFsdWVzID0gbGlzdE9mVmFsdWVzO1xuICAgIHRoaXMuY3JlYXRpb25TdGFjayA9IGNhcHR1cmVTdGFja1RyYWNlKCk7XG4gIH1cblxuICBwdWJsaWMgcmVzb2x2ZShjb250ZXh0OiBJUmVzb2x2ZUNvbnRleHQpOiBhbnkge1xuICAgIGlmIChUb2tlbi5pc1VucmVzb2x2ZWQodGhpcy5saXN0T2ZWYWx1ZXMpKSB7XG4gICAgICAvLyBUaGlzIGlzIGEgbGlzdCB0b2tlbiwgZG9uJ3QgdHJ5IHRvIGRvIHNtYXJ0IHRoaW5ncyB3aXRoIGl0LlxuICAgICAgcmV0dXJuIHsgXCJGbjo6Sm9pblwiOiBbdGhpcy5kZWxpbWl0ZXIsIHRoaXMubGlzdE9mVmFsdWVzXSB9O1xuICAgIH1cbiAgICBjb25zdCByZXNvbHZlZCA9IHRoaXMucmVzb2x2ZVZhbHVlcyhjb250ZXh0KTtcbiAgICBpZiAocmVzb2x2ZWQubGVuZ3RoID09PSAxKSB7XG4gICAgICByZXR1cm4gcmVzb2x2ZWRbMF07XG4gICAgfVxuICAgIHJldHVybiB7IFwiRm46OkpvaW5cIjogW3RoaXMuZGVsaW1pdGVyLCByZXNvbHZlZF0gfTtcbiAgfVxuXG4gIHB1YmxpYyB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gVG9rZW4uYXNTdHJpbmcodGhpcywgeyBkaXNwbGF5SGludDogXCJGbjo6Sm9pblwiIH0pO1xuICB9XG5cbiAgcHVibGljIHRvSlNPTigpIHtcbiAgICByZXR1cm4gXCI8Rm46OkpvaW4+XCI7XG4gIH1cblxuICAvKipcbiAgICogT3B0aW1pemF0aW9uOiBpZiBhbiBGbjo6Sm9pbiBpcyBuZXN0ZWQgaW4gYW5vdGhlciBvbmUgYW5kIHRoZXkgc2hhcmUgdGhlIHNhbWUgZGVsaW1pdGVyLCB0aGVuIGZsYXR0ZW4gaXQgdXAuIEFsc28sXG4gICAqIGlmIHR3byBjb25jYXRlbmF0ZWQgZWxlbWVudHMgYXJlIGxpdGVyYWwgc3RyaW5ncyAobm90IHRva2VucyksIHRoZW4gcHJlLWNvbmNhdGVuYXRlIHRoZW0gd2l0aCB0aGUgZGVsaW1pdGVyLCB0b1xuICAgKiBnZW5lcmF0ZSBzaG9ydGVyIG91dHB1dC5cbiAgICovXG4gIHByaXZhdGUgcmVzb2x2ZVZhbHVlcyhjb250ZXh0OiBJUmVzb2x2ZUNvbnRleHQpIHtcbiAgICBjb25zdCByZXNvbHZlZFZhbHVlcyA9IHRoaXMubGlzdE9mVmFsdWVzLm1hcCgoeCkgPT5cbiAgICAgIFJlZmVyZW5jZS5pc1JlZmVyZW5jZSh4KSA/IHggOiBjb250ZXh0LnJlc29sdmUoeClcbiAgICApO1xuICAgIHJldHVybiBtaW5pbWFsUm9zVGVtcGxhdGVKb2luKHRoaXMuZGVsaW1pdGVyLCByZXNvbHZlZFZhbHVlcyk7XG4gIH1cbn1cbiJdfQ==