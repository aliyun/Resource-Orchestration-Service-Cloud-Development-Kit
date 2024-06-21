import { IRosConditionExpression } from "./ros-condition";
import { Intrinsic } from "./private/intrinsic";
import { IResolveContext, IResolvable } from "./resolvable";
import * as ros from "./index";
/**
 * Resource Orchestration Service intrinsic functions.
 * https://help.aliyun.com/document_detail/28852.html
 */
export declare class Fn {
    static str(value: any): string;
    static base64Decode(data: string): string;
    static replace(replaceData: {
        [key: string]: any;
    }, content: string): string;
    static listMerge(valueList: (any[] | ros.IResolvable)[]): IResolvable;
    static getJsonValue(key: string, jsonData: any): string;
    static avg(ndigits: number, values: number[]): number;
    static add(values: number | any[] | {
        [key: string]: any;
    }): IResolvable;
    static calculate(values: string, ndigits: number, para: number[]): number;
    static max(values: number[]): number;
    static min(values: number[]): number;
    static jq(method: string, script: string, inputString: string | {
        [key: string]: any;
    }): IResolvable;
    static mergeMapToList(mapList: {
        [key: string]: any[];
    }[]): IResolvable;
    static selectMapList(key: string, mapList: {
        [key: string]: any;
    }[]): IResolvable;
    /**
     * The ``Ref`` intrinsic function returns the value of the specified parameter or resource.
     * Note that it doesn't validate the logicalName, it mainly serves paremeter/resource reference defined in a ``RosInclude`` template.
     * @param logicalName The logical name of a parameter/resource for which you want to retrieve its value.
     */
    static ref(logicalName: string): string;
    /** @internal */
    static _ref(logicalId: string): IResolvable;
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
    static getAtt(logicalNameOfResource: string, attributeName: string): IResolvable;
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
    static join(delimiter: string, listOfValues: (string | ros.IResolvable)[]): string;
    /**
     * To split a string into a list of string values so that you can select an element from the
     * resulting string list, use the ``Fn::Split`` intrinsic function. Specify the location of splits
     * with a delimiter, such as , (a comma). After you split a string, use the ``Fn::Select`` function
     * to pick a specific element.
     * @param delimiter A string value that determines where the source string is divided.
     * @param source The string value that you want to split.
     * @returns a token represented as a string array
     */
    static split(delimiter: string, source: string): string[];
    /**
     * The intrinsic function ``Fn::Select`` returns a single object from a list of objects by index.
     * @param index The index of the object to retrieve. This must be a value from zero to N-1, where N represents the number of elements in the array.
     * @param array The list of objects to select from. This list must not be null, nor can it have null entries.
     * @returns a token represented as a string
     */
    static select(index: number | string, array: any): IResolvable;
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
    static sub(body: string, variables?: {
        [key: string]: any;
    }): string;
    /**
     * The intrinsic function ``Fn::Base64`` returns the Base64 representation of
     * the input string.
     * @param data The string value you want to convert to Base64.
     * @returns a token represented as a string
     */
    static base64Encode(data: string): string;
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
    static getAzs(region: string): string[];
    /**
     * The intrinsic function ``Fn::GetStackOutput`` returns the value of an output
     * exported by another stack.
     * @returns a token represented as a string
     */
    static getStackOutput(stackID: string, outputKey: string, stackRegion?: string): IResolvable;
    /**
     * The intrinsic function ``Fn::FindInMap`` returns the value corresponding to
     * keys in a two-level map that is declared in the Mappings section.
     * @returns a token represented as a string
     */
    static findInMap(mapName: string, topLevelKey: string, secondLevelKey: string): IResolvable;
    /**
     * Returns true if all the specified conditions evaluate to true, or returns
     * false if any one of the conditions evaluates to false. ``Fn::And`` acts as
     * an AND operator. The minimum number of conditions that you can include is
     * 2, and the maximum is 10.
     * @param conditions conditions to AND
     * @returns an FnCondition token
     */
    static conditionAnd(...conditions: (string | IRosConditionExpression)[]): IRosConditionExpression;
    /**
     * Compares if two values are equal. Returns true if the two values are equal
     * or false if they aren't.
     * @param lhs A value of any type that you want to compare.
     * @param rhs A value of any type that you want to compare.
     * @returns an FnCondition token
     */
    static conditionEquals(lhs: any, rhs: any): IRosConditionExpression;
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
    static conditionIf(conditionId: string | IRosConditionExpression, valueIfTrue: any, valueIfFalse: any): any;
    /**
     * Returns true for a condition that evaluates to false or returns false for a
     * condition that evaluates to true. ``Fn::Not`` acts as a NOT operator.
     * @param condition A condition such as ``Fn::Equals`` that evaluates to true
     * or false.
     * @returns an FnCondition token
     */
    static conditionNot(condition: string | IRosConditionExpression): IRosConditionExpression;
    /**
     * Returns true if any one of the specified conditions evaluate to true, or
     * returns false if all of the conditions evaluates to false. ``Fn::Or`` acts
     * as an OR operator. The minimum number of conditions that you can include is
     * 2, and the maximum is 10.
     * @param conditions conditions that evaluates to true or false.
     * @returns an FnCondition token
     */
    static conditionOr(...conditions: (string | IRosConditionExpression)[]): IRosConditionExpression;
    /**
     * Returns true if a specified string matches all values in a list.
     * param listOfStrings A list of strings, such as "A", "B", "C".
     * param value A string, such as "A", that you want to compare against a list
     * of strings.
     * @returns an FnCondition token
     */
    private constructor();
}
/**
 * Base class for tokens that represent ROS intrinsic functions.
 */
declare class FnBase extends Intrinsic {
    constructor(name: string, value: any);
}
export declare class FnStr extends FnBase {
    /**
     * Creates an ``Str`` function.
     */
    constructor(value: any);
}
export declare class FnBase64Decode extends FnBase {
    constructor(data: any);
}
export declare class FnReplace extends FnBase {
    /**
     * Creates an ``Replace`` function.
     */
    constructor(value: any);
}
export declare class FnGetJsonValue extends FnBase {
    /**
     * Creates an ``GetJsonValue`` function.
     */
    constructor(value: any);
}
export declare class FnAvg extends FnBase {
    /**
     * Creates an ``Avg`` function.
     */
    constructor(value: any);
}
export declare class FnAdd extends FnBase {
    /**
     * Creates an ``Add`` function.
     */
    constructor(values: any);
}
export declare class FnCalculate extends FnBase {
    /**
     * Creates an ``Calculate`` function.
     */
    constructor(value: any);
}
export declare class FnMax extends FnBase {
    /**
     * Creates an ``Max`` function.
     */
    constructor(values: any);
}
export declare class FnMin extends FnBase {
    /**
     * Creates an ``Min`` function.
     */
    constructor(values: any);
}
export declare class FnGetStackOutput extends FnBase {
    /**
     * Creates an ``GetStackOutput`` function.
     */
    constructor(value: any);
}
export declare class FnJq extends FnBase {
    /**
     * Creates an ``Jq`` function.
     */
    constructor(value: any);
}
export declare class FnMergeMapToList extends FnBase {
    /**
     * Creates an ``FnMergeMapToList`` function.
     */
    constructor(mapList: any);
}
export declare class FnSelectMapList extends FnBase {
    /**
     * Creates an ``FnMergeMapToList`` function.
     */
    constructor(value: any);
}
/**
 * The intrinsic function ``Ref`` returns the value of the specified parameter or resource.
 * When you specify a parameter's logical name, it returns the value of the parameter.
 * When you specify a resource's logical name, it returns a value that you can typically use to refer to that resource, such as a physical ID.
 */
export declare class FnRef extends FnBase {
    /**
     * Creates an ``Ref`` function.
     * @param logicalName The logical name of a parameter/resource for which you want to retrieve its value.
     */
    constructor(logicalName: string);
}
/**
 * The intrinsic function ``Fn::FindInMap`` returns the value corresponding to keys in a two-level
 * map that is declared in the Mappings section.
 */
export declare class FnFindInMap extends FnBase {
    /**
     * Creates an ``Fn::FindInMap`` function.
     * param mapName The logical name of a mapping declared in the Mappings section that contains the keys and values.
     * param topLevelKey The top-level key name. Its value is a list of key-value pairs.
     * param secondLevelKey The second-level key name, which is set to one of the keys from the list assigned to TopLevelKey.
     */
    constructor(value: any);
}
/**
 * The ``Fn::GetAtt`` intrinsic function returns the value of an attribute from a resource in the template.
 */
export declare class FnGetAtt extends FnBase {
    /**
     * Creates a ``Fn::GetAtt`` function.
     * @param logicalNameOfResource The logical name (also called logical ID) of the resource that contains the attribute that you want.
     * @param attributeName The name of the resource-specific attribute whose value you want. See the resource's reference page for details about the attributes available for that resource type.
     */
    constructor(logicalNameOfResource: string, attributeName: string);
}
/**
 * The intrinsic function ``Fn::GetAZs`` returns an array that lists Availability Zones for a
 * specified region. Because customers have access to different Availability Zones, the intrinsic
 * function ``Fn::GetAZs`` enables template authors to write templates that adapt to the calling
 * user's access. That way you don't have to hard-code a full list of Availability Zones for a
 * specified region.
 */
export declare class FnGetAZs extends FnBase {
    /**
     * Creates an ``Fn::GetAZs`` function.
     * @param region The name of the region for which you want to get the Availability Zones.
     */
    constructor(region: any);
}
/**
 * The intrinsic function ``Fn::Select`` returns a single object from a list of objects by index.
 */
export declare class FnSelect extends FnBase {
    /**
     * Creates an ``Fn::Select`` function.
     * param index The index of the object to retrieve. This must be a value from zero to N-1, where N represents the number of elements in the array.
     * param array The list of objects to select from. This list must not be null, nor can it have null entries.
     */
    constructor(value: any);
}
/**
 * To split a string into a list of string values so that you can select an element from the
 * resulting string list, use the ``Fn::Split`` intrinsic function. Specify the location of splits
 * with a delimiter, such as , (a comma). After you split a string, use the ``Fn::Select`` function
 * to pick a specific element.
 */
export declare class FnSplit extends FnBase {
    /**
     * Create an ``Fn::Split`` function.
     * param delimiter A string value that determines where the source string is divided.
     * param source The string value that you want to split.
     */
    constructor(value: any);
}
/**
 * The intrinsic function ``Fn::Sub`` substitutes variables in an input string with values that
 * you specify. In your templates, you can use this function to construct commands or outputs
 * that include values that aren't available until you create or update a stack.
 */
export declare class FnSub extends FnBase {
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
    constructor(value: any);
}
/**
 * The intrinsic function ``Fn::Base64`` returns the Base64 representation of the input string.
 */
export declare class FnBase64Encode extends FnBase {
    /**
     * Creates an ``Fn::Base64`` function.
     * @param data The string value you want to convert to Base64.
     */
    constructor(data: any);
}
declare class FnConditionBase extends Intrinsic implements IRosConditionExpression {
    constructor(type: string, value: any);
}
/**
 * Returns true if all the specified conditions evaluate to true, or returns false if any one
 *  of the conditions evaluates to false. ``Fn::And`` acts as an AND operator. The minimum number of
 * conditions that you can include is 2, and the maximum is 10.
 */
export declare class FnAnd extends FnConditionBase {
    constructor(...condition: (string | IRosConditionExpression)[]);
}
/**
 * Compares if two values are equal. Returns true if the two values are equal or false
 * if they aren't.
 */
export declare class FnEquals extends FnConditionBase {
    /**
     * Creates an ``Fn::Equals`` condition function.
     * @param lhs A value of any type that you want to compare.
     * @param rhs A value of any type that you want to compare.
     */
    constructor(lhs: any, rhs: any);
}
/**
 * Returns one value if the specified condition evaluates to true and another value if the
 * specified condition evaluates to false.
 */
export declare class FnIf extends FnConditionBase {
    /**
     * Creates an ``Fn::If`` condition function.
     * @param condition A reference to a condition in the Conditions section. Use the condition's name to reference it.
     * @param valueIfTrue A value to be returned if the specified condition evaluates to true.
     * @param valueIfFalse A value to be returned if the specified condition evaluates to false.
     */
    constructor(condition: string | IRosConditionExpression, valueIfTrue: any, valueIfFalse: any);
}
/**
 * Returns true for a condition that evaluates to false or returns false for a condition that evaluates to true.
 * ``Fn::Not`` acts as a NOT operator.
 */
export declare class FnNot extends FnConditionBase {
    /**
     * Creates an ``Fn::Not`` condition function.
     * @param condition A condition such as ``Fn::Equals`` that evaluates to true or false.
     */
    constructor(condition: string | IRosConditionExpression);
}
/**
 * Returns true if any one of the specified conditions evaluate to true, or returns false if
 * all of the conditions evaluates to false. ``Fn::Or`` acts as an OR operator. The minimum number
 * of conditions that you can include is 2, and the maximum is 10.
 */
export declare class FnOr extends FnConditionBase {
    /**
     * Creates an ``Fn::Or`` condition function.
     * @param condition A condition that evaluates to true or false.
     */
    constructor(...condition: (string | IRosConditionExpression)[]);
}
/**
 * Returns true if a specified string matches all values in a list.
 */
export declare class FnListMerge implements IResolvable {
    readonly creationStack: string[];
    private readonly listOfValues;
    /**
     * Creates an ``ListMerge`` function.
     */
    constructor(listOfValues: any[]);
    resolve(context: IResolveContext): any;
    toString(): string;
    toJSON(): string;
    /**
     * Optimization: if an Fn::ListMerge is nested in another one, then flatten it up.
     */
    private resolveValues;
}
/**
 * The intrinsic function ``Fn::Join`` appends a set of values into a single value, separated by
 * the specified delimiter. If a delimiter is the empty string, the set of values are concatenated
 * with no delimiter.
 */
export declare class FnJoin implements IResolvable {
    readonly creationStack: string[];
    private readonly delimiter;
    private readonly listOfValues;
    /**
     * Creates an ``Fn::Join`` function.
     * @param delimiter The value you want to occur between fragments. The delimiter will occur between fragments only.
     *          It will not terminate the final value.
     * @param listOfValues The list of values you want combined.
     */
    constructor(delimiter: string, listOfValues: any[]);
    resolve(context: IResolveContext): any;
    toString(): string;
    toJSON(): string;
    /**
     * Optimization: if an Fn::Join is nested in another one and they share the same delimiter, then flatten it up. Also,
     * if two concatenated elements are literal strings (not tokens), then pre-concatenate them with the delimiter, to
     * generate shorter output.
     */
    private resolveValues;
}
export {};
