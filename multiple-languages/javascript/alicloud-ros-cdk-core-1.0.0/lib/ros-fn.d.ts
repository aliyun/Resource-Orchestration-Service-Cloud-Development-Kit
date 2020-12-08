import { IRosConditionExpression } from "./ros-condition";
import { IResolvable } from "./resolvable";
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
    static listMerge(valueList: string[][]): string;
    static getJsonValue(value: any[]): string;
    static avg(ndigits: number, values: any[]): string;
    static add(values: any[]): string;
    static calculate(values: string, ndigits: number, para: number[]): string;
    static max(values: number[]): string;
    static min(values: number[]): string;
    static jq(method: string, script: string, inputString: any): string;
    static mergeMapToList(mapList: any[]): string;
    static selectMapList(key: string, mapList: any[]): string;
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
    static join(delimiter: string, listOfValues: string[]): string;
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
    static select(index: number | string, array: any): string;
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
        [key: string]: string;
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
    static getAzs(region?: string): string[];
    /**
     * The intrinsic function ``Fn::GetStackOutput`` returns the value of an output
     * exported by another stack.
     * @returns a token represented as a string
     */
    static getStackOutput(stackID: string, outputKey: string, stackRegion?: string): string;
    /**
     * The intrinsic function ``Fn::FindInMap`` returns the value corresponding to
     * keys in a two-level map that is declared in the Mappings section.
     * @returns a token represented as a string
     */
    static findInMap(mapName: string, topLevelKey: string, secondLevelKey: string): string;
    /**
     * Returns true if all the specified conditions evaluate to true, or returns
     * false if any one of the conditions evaluates to false. ``Fn::And`` acts as
     * an AND operator. The minimum number of conditions that you can include is
     * 2, and the maximum is 10.
     * @param conditions conditions to AND
     * @returns an FnCondition token
     */
    static conditionAnd(...conditions: IRosConditionExpression[]): IRosConditionExpression;
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
    static conditionIf(conditionId: string, valueIfTrue: any, valueIfFalse: any): IRosConditionExpression;
    /**
     * Returns true for a condition that evaluates to false or returns false for a
     * condition that evaluates to true. ``Fn::Not`` acts as a NOT operator.
     * @param condition A condition such as ``Fn::Equals`` that evaluates to true
     * or false.
     * @returns an FnCondition token
     */
    static conditionNot(condition: IRosConditionExpression): IRosConditionExpression;
    /**
     * Returns true if any one of the specified conditions evaluate to true, or
     * returns false if all of the conditions evaluates to false. ``Fn::Or`` acts
     * as an OR operator. The minimum number of conditions that you can include is
     * 2, and the maximum is 10.
     * @param conditions conditions that evaluates to true or false.
     * @returns an FnCondition token
     */
    static conditionOr(...conditions: IRosConditionExpression[]): IRosConditionExpression;
    /**
     * Returns true if a specified string matches all values in a list.
     * @param listOfStrings A list of strings, such as "A", "B", "C".
     * @param value A string, such as "A", that you want to compare against a list
     * of strings.
     * @returns an FnCondition token
     */
    static conditionEachMemberEquals(listOfStrings: string[], value: string): IRosConditionExpression;
    private constructor();
}
