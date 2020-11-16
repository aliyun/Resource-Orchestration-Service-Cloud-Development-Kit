import { IRosConditionExpression } from "./ros-condition";
import { minimalRosTemplateJoin } from "./private/template-lang";
import { Intrinsic } from "./private/intrinsic";
import { Reference } from "./reference";
import { Token } from "./token";
import { captureStackTrace } from "./stack-trace";
import { IResolveContext, IResolvable } from "./resolvable";

// tslint:disable:max-line-length

/**
 * Resource Orchestration Service intrinsic functions.
 * https://help.aliyun.com/document_detail/28852.html
 */
export class Fn {
  public static str(value: any): string {
    if (!Token.isUnresolved(value)) {
      return value.toString();
    }
    return new FnStr(value).toString();
  }

  public static base64Decode(data: string): string {
    return new FnBase64Decode(data).toString();
  }

  public static replace(
    replaceData: { [key: string]: any },
    content: string
  ): string {
    return new FnReplace([replaceData, content]).toString();
  }

  public static listMerge(valueList: string[][]): string {
    return new FnListMerge(valueList).toString();
  }

  public static getJsonValue(value: any[]): string {
    return new FnGetJsonValue(value).toString();
  }

  public static avg(ndigits: number, values: any[]): string {
    return new FnAvg(ndigits, values).toString();
  }

  public static add(values: any[]): string {
    return new FnAdd(values).toString();
  }

  public static calculate(
    values: string,
    ndigits: number,
    para: number[]
  ): string {
    return new FnCalculate(values, ndigits, para).toString();
  }

  public static max(values: number[]): string {
    return new FnMax(values).toString();
  }

  public static min(values: number[]): string {
    return new FnMin(values).toString();
  }

  public static jq(method: string, script: string, inputString: any): string {
    return new FnJq(method, script, inputString).toString();
  }

  public static mergeMapToList(mapList: any[]): string {
    return new FnMergeMapToList(mapList).toString();
  }

  public static selectMapList(key: string, mapList: any[]): string {
    return new FnSelectMapList(key, mapList).toString();
  }

  /**
   * The ``Ref`` intrinsic function returns the value of the specified parameter or resource.
   * Note that it doesn't validate the logicalName, it mainly serves paremeter/resource reference defined in a ``RosInclude`` template.
   * @param logicalName The logical name of a parameter/resource for which you want to retrieve its value.
   */
  public static ref(logicalName: string): string {
    return new FnRef(logicalName).toString();
  }

  /** @internal */
  public static _ref(logicalId: string): IResolvable {
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
  public static getAtt(
    logicalNameOfResource: string,
    attributeName: string
  ): IResolvable {
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
  public static join(delimiter: string, listOfValues: string[]): string {
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
  public static split(delimiter: string, source: string): string[] {
    // short-circut if source is not a token
    if (!Token.isUnresolved(source)) {
      return source.split(delimiter);
    }

    return Token.asList(new FnSplit(delimiter, source));
  }

  /**
   * The intrinsic function ``Fn::Select`` returns a single object from a list of objects by index.
   * @param index The index of the object to retrieve. This must be a value from zero to N-1, where N represents the number of elements in the array.
   * @param array The list of objects to select from. This list must not be null, nor can it have null entries.
   * @returns a token represented as a string
   */
  public static select(index: number | string, array: any): string {
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
  public static sub(
    body: string,
    variables?: { [key: string]: string }
  ): string {
    return new FnSub(body, variables).toString();
  }

  /**
   * The intrinsic function ``Fn::Base64`` returns the Base64 representation of
   * the input string.
   * @param data The string value you want to convert to Base64.
   * @returns a token represented as a string
   */
  public static base64Encode(data: string): string {
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
  public static getAzs(region?: string): string[] {
    return Token.asList(new FnGetAZs(region));
  }

  /**
   * The intrinsic function ``Fn::GetStackOutput`` returns the value of an output
   * exported by another stack.
   * @returns a token represented as a string
   */
  public static getStackOutput(
    stackID: string,
    outputKey: string,
    stackRegion?: string
  ): string {
    return new FnGetStackOutput(stackID, outputKey, stackRegion).toString();
  }

  /**
   * The intrinsic function ``Fn::FindInMap`` returns the value corresponding to
   * keys in a two-level map that is declared in the Mappings section.
   * @returns a token represented as a string
   */
  public static findInMap(
    mapName: string,
    topLevelKey: string,
    secondLevelKey: string
  ): string {
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
  public static conditionAnd(
    ...conditions: IRosConditionExpression[]
  ): IRosConditionExpression {
    return new FnAnd(...conditions);
  }

  /**
   * Compares if two values are equal. Returns true if the two values are equal
   * or false if they aren't.
   * @param lhs A value of any type that you want to compare.
   * @param rhs A value of any type that you want to compare.
   * @returns an FnCondition token
   */
  public static conditionEquals(lhs: any, rhs: any): IRosConditionExpression {
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
  public static conditionIf(
    conditionId: string,
    valueIfTrue: any,
    valueIfFalse: any
  ): IRosConditionExpression {
    return new FnIf(conditionId, valueIfTrue, valueIfFalse);
  }

  /**
   * Returns true for a condition that evaluates to false or returns false for a
   * condition that evaluates to true. ``Fn::Not`` acts as a NOT operator.
   * @param condition A condition such as ``Fn::Equals`` that evaluates to true
   * or false.
   * @returns an FnCondition token
   */
  public static conditionNot(
    condition: IRosConditionExpression
  ): IRosConditionExpression {
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
  public static conditionOr(
    ...conditions: IRosConditionExpression[]
  ): IRosConditionExpression {
    return new FnOr(...conditions);
  }

  /**
   * Returns true if a specified string matches all values in a list.
   * @param listOfStrings A list of strings, such as "A", "B", "C".
   * @param value A string, such as "A", that you want to compare against a list
   * of strings.
   * @returns an FnCondition token
   */
  public static conditionEachMemberEquals(
    listOfStrings: string[],
    value: string
  ): IRosConditionExpression {
    return new FnEachMemberEquals(listOfStrings, value);
  }

  private constructor() {}
}

/**
 * Base class for tokens that represent ROS intrinsic functions.
 */
class FnBase extends Intrinsic {
  constructor(name: string, value: any) {
    super({ [name]: value });
  }
}

// new function
class FnStr extends FnBase {
  /**
   * Creates an ``Str`` function.
   */
  constructor(value: any) {
    super("Fn::Str", value);
  }
}

class FnBase64Decode extends FnBase {
  constructor(data: any) {
    super("Fn::Base64Decode", data);
  }
}

class FnReplace extends FnBase {
  /**
   * Creates an ``Replace`` function.
   */
  constructor(value: any[]) {
    super("Fn::Replace", value);
  }
}

class FnListMerge extends FnBase {
  /**
   * Creates an ``ListMerge`` function.
   */
  constructor(value: string[][]) {
    super("Fn::ListMerge", value);
  }
}

class FnGetJsonValue extends FnBase {
  /**
   * Creates an ``GetJsonValue`` function.
   */
  constructor(value: any[]) {
    super("Fn::GetJsonValue", value);
  }
}

class FnAvg extends FnBase {
  /**
   * Creates an ``Avg`` function.
   */
  constructor(ndigits: number, values: any[]) {
    super("Fn::Avg", [ndigits, values]);
  }
}

class FnAdd extends FnBase {
  /**
   * Creates an ``Add`` function.
   */
  constructor(values: any[]) {
    super("Fn::Add", values);
  }
}

class FnCalculate extends FnBase {
  /**
   * Creates an ``Calculate`` function.
   */
  constructor(values: string, ndigits: number, para: number[]) {
    super("Fn::Calculate", [values, ndigits, para]);
  }
}

class FnMax extends FnBase {
  /**
   * Creates an ``Max`` function.
   */
  constructor(values: number[]) {
    super("Fn::Max", values);
  }
}

class FnMin extends FnBase {
  /**
   * Creates an ``Min`` function.
   */
  constructor(values: number[]) {
    super("Fn::Min", values);
  }
}

class FnGetStackOutput extends FnBase {
  /**
   * Creates an ``GetStackOutput`` function.
   */
  constructor(stackID: string, outputKey: string, stackRegion?: string) {
    super("Fn::GetStackOutput", [stackID, outputKey, stackRegion]);
  }
}

class FnJq extends FnBase {
  /**
   * Creates an ``Jq`` function.
   */
  constructor(method: string, script: string, inputString: any) {
    super("Fn::Jq", [method, script, inputString]);
  }
}

class FnMergeMapToList extends FnBase {
  /**
   * Creates an ``FnMergeMapToList`` function.
   */
  constructor(mapList: any[]) {
    super("Fn::MergeMapToList", mapList);
  }
}

class FnSelectMapList extends FnBase {
  /**
   * Creates an ``FnMergeMapToList`` function.
   */
  constructor(key: string, mapList: any[]) {
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
  constructor(logicalName: string) {
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
  constructor(mapName: string, topLevelKey: any, secondLevelKey: any) {
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
  constructor(logicalNameOfResource: string, attributeName: string) {
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
  constructor(region?: string) {
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
  constructor(index: number | string, array: any) {
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
  constructor(delimiter: string, source: any) {
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
  constructor(body: string, variables?: { [key: string]: any }) {
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
  constructor(data: any) {
    super("Fn::Base64Encode", data);
  }
}

class FnConditionBase extends Intrinsic implements IRosConditionExpression {
  constructor(type: string, value: any) {
    super({ [type]: value });
  }
}

/**
 * Returns true if all the specified conditions evaluate to true, or returns false if any one
 *  of the conditions evaluates to false. ``Fn::And`` acts as an AND operator. The minimum number of
 * conditions that you can include is 2, and the maximum is 10.
 */
class FnAnd extends FnConditionBase {
  constructor(...condition: IRosConditionExpression[]) {
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
  constructor(lhs: any, rhs: any) {
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
  constructor(condition: string, valueIfTrue: any, valueIfFalse: any) {
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
  constructor(condition: IRosConditionExpression) {
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
  constructor(...condition: IRosConditionExpression[]) {
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
  constructor(listOfStrings: any, value: string) {
    super("Fn::EachMemberEquals", [listOfStrings, value]);
  }
}

/**
 * The intrinsic function ``Fn::Join`` appends a set of values into a single value, separated by
 * the specified delimiter. If a delimiter is the empty string, the set of values are concatenated
 * with no delimiter.
 */
class FnJoin implements IResolvable {
  public readonly creationStack: string[];

  private readonly delimiter: string;
  private readonly listOfValues: any[];

  /**
   * Creates an ``Fn::Join`` function.
   * @param delimiter The value you want to occur between fragments. The delimiter will occur between fragments only.
   *          It will not terminate the final value.
   * @param listOfValues The list of values you want combined.
   */
  constructor(delimiter: string, listOfValues: any[]) {
    if (listOfValues.length === 0) {
      throw new Error("FnJoin requires at least one value to be provided");
    }

    this.delimiter = delimiter;
    this.listOfValues = listOfValues;
    this.creationStack = captureStackTrace();
  }

  public resolve(context: IResolveContext): any {
    if (Token.isUnresolved(this.listOfValues)) {
      // This is a list token, don't try to do smart things with it.
      return { "Fn::Join": [this.delimiter, this.listOfValues] };
    }
    const resolved = this.resolveValues(context);
    if (resolved.length === 1) {
      return resolved[0];
    }
    return { "Fn::Join": [this.delimiter, resolved] };
  }

  public toString() {
    return Token.asString(this, { displayHint: "Fn::Join" });
  }

  public toJSON() {
    return "<Fn::Join>";
  }

  /**
   * Optimization: if an Fn::Join is nested in another one and they share the same delimiter, then flatten it up. Also,
   * if two concatenated elements are literal strings (not tokens), then pre-concatenate them with the delimiter, to
   * generate shorter output.
   */
  private resolveValues(context: IResolveContext) {
    const resolvedValues = this.listOfValues.map((x) =>
      Reference.isReference(x) ? x : context.resolve(x)
    );
    return minimalRosTemplateJoin(this.delimiter, resolvedValues);
  }
}
