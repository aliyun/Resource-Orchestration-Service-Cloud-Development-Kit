using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>Resource Orchestration Service intrinsic functions.</summary>
    /// <remarks>
    /// https://help.aliyun.com/document_detail/28852.html
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Core.Fn), fullyQualifiedName: "@alicloud/ros-cdk-core.Fn")]
    public class Fn : DeputyBase
    {
        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Fn(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Fn(DeputyProps props): base(props)
        {
        }

        [JsiiMethod(name: "add", returnsJson: "{\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}}", parametersJson: "[{\"name\":\"values\",\"type\":{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}}]")]
        public static AlibabaCloud.SDK.ROS.CDK.Core.IResolvable Add(object values)
        {
            return InvokeStaticMethod<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.Fn), new System.Type[]{typeof(object)}, new object[]{values})!;
        }

        [JsiiMethod(name: "avg", returnsJson: "{\"type\":{\"primitive\":\"number\"}}", parametersJson: "[{\"name\":\"ndigits\",\"type\":{\"primitive\":\"number\"}},{\"name\":\"values\",\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"number\"},\"kind\":\"array\"}}}]")]
        public static double Avg(double ndigits, double[] values)
        {
            return InvokeStaticMethod<double>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.Fn), new System.Type[]{typeof(double), typeof(double[])}, new object[]{ndigits, values})!;
        }

        [JsiiMethod(name: "base64Decode", returnsJson: "{\"type\":{\"primitive\":\"string\"}}", parametersJson: "[{\"name\":\"data\",\"type\":{\"primitive\":\"string\"}}]")]
        public static string Base64Decode(string data)
        {
            return InvokeStaticMethod<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.Fn), new System.Type[]{typeof(string)}, new object[]{data})!;
        }

        /// <summary>The intrinsic function ``Fn::Base64`` returns the Base64 representation of the input string.</summary>
        /// <param name="data">The string value you want to convert to Base64.</param>
        /// <returns>a token represented as a string</returns>
        [JsiiMethod(name: "base64Encode", returnsJson: "{\"type\":{\"primitive\":\"string\"}}", parametersJson: "[{\"docs\":{\"summary\":\"The string value you want to convert to Base64.\"},\"name\":\"data\",\"type\":{\"primitive\":\"string\"}}]")]
        public static string Base64Encode(string data)
        {
            return InvokeStaticMethod<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.Fn), new System.Type[]{typeof(string)}, new object[]{data})!;
        }

        [JsiiMethod(name: "calculate", returnsJson: "{\"type\":{\"primitive\":\"number\"}}", parametersJson: "[{\"name\":\"values\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"ndigits\",\"type\":{\"primitive\":\"number\"}},{\"name\":\"para\",\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"number\"},\"kind\":\"array\"}}}]")]
        public static double Calculate(string values, double ndigits, double[] para)
        {
            return InvokeStaticMethod<double>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.Fn), new System.Type[]{typeof(string), typeof(double), typeof(double[])}, new object[]{values, ndigits, para})!;
        }

        /// <summary>Returns true if all the specified conditions evaluate to true, or returns false if any one of the conditions evaluates to false.</summary>
        /// <param name="conditions">conditions to AND.</param>
        /// <returns>an FnCondition token</returns>
        /// <remarks>
        /// <c>Fn::And</c> acts as
        /// an AND operator. The minimum number of conditions that you can include is
        /// 2, and the maximum is 10.
        /// </remarks>
        [JsiiMethod(name: "conditionAnd", returnsJson: "{\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.IRosConditionExpression\"}}", parametersJson: "[{\"docs\":{\"summary\":\"conditions to AND.\"},\"name\":\"conditions\",\"type\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IRosConditionExpression\"}]}},\"variadic\":true}]")]
        public static AlibabaCloud.SDK.ROS.CDK.Core.IRosConditionExpression ConditionAnd(params object[] conditions)
        {
            return InvokeStaticMethod<AlibabaCloud.SDK.ROS.CDK.Core.IRosConditionExpression>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.Fn), new System.Type[]{typeof(object[])}, new object[]{conditions})!;
        }

        /// <summary>Compares if two values are equal.</summary>
        /// <param name="lhs">A value of any type that you want to compare.</param>
        /// <param name="rhs">A value of any type that you want to compare.</param>
        /// <returns>an FnCondition token</returns>
        /// <remarks>
        /// Returns true if the two values are equal
        /// or false if they aren't.
        /// </remarks>
        [JsiiMethod(name: "conditionEquals", returnsJson: "{\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.IRosConditionExpression\"}}", parametersJson: "[{\"docs\":{\"summary\":\"A value of any type that you want to compare.\"},\"name\":\"lhs\",\"type\":{\"primitive\":\"any\"}},{\"docs\":{\"summary\":\"A value of any type that you want to compare.\"},\"name\":\"rhs\",\"type\":{\"primitive\":\"any\"}}]")]
        public static AlibabaCloud.SDK.ROS.CDK.Core.IRosConditionExpression ConditionEquals(object lhs, object rhs)
        {
            return InvokeStaticMethod<AlibabaCloud.SDK.ROS.CDK.Core.IRosConditionExpression>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.Fn), new System.Type[]{typeof(object), typeof(object)}, new object[]{lhs, rhs})!;
        }

        /// <summary>Returns one value if the specified condition evaluates to true and another value if the specified condition evaluates to false.</summary>
        /// <param name="conditionId">A reference to a condition in the Conditions section.</param>
        /// <param name="valueIfTrue">A value to be returned if the specified condition evaluates to true.</param>
        /// <param name="valueIfFalse">A value to be returned if the specified condition evaluates to false.</param>
        /// <returns>an FnCondition token</returns>
        [JsiiMethod(name: "conditionIf", returnsJson: "{\"type\":{\"primitive\":\"any\"}}", parametersJson: "[{\"docs\":{\"remarks\":\"Use\nthe condition's name to reference it.\",\"summary\":\"A reference to a condition in the Conditions section.\"},\"name\":\"conditionId\",\"type\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IRosConditionExpression\"}]}}},{\"docs\":{\"summary\":\"A value to be returned if the specified condition evaluates to true.\"},\"name\":\"valueIfTrue\",\"type\":{\"primitive\":\"any\"}},{\"docs\":{\"summary\":\"A value to be returned if the specified condition evaluates to false.\"},\"name\":\"valueIfFalse\",\"type\":{\"primitive\":\"any\"}}]")]
        public static object ConditionIf(object conditionId, object valueIfTrue, object valueIfFalse)
        {
            return InvokeStaticMethod<object>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.Fn), new System.Type[]{typeof(object), typeof(object), typeof(object)}, new object[]{conditionId, valueIfTrue, valueIfFalse})!;
        }

        /// <summary>Returns true for a condition that evaluates to false or returns false for a condition that evaluates to true.</summary>
        /// <param name="condition">A condition such as ``Fn::Equals`` that evaluates to true or false.</param>
        /// <returns>an FnCondition token</returns>
        /// <remarks>
        /// <c>Fn::Not</c> acts as a NOT operator.
        /// </remarks>
        [JsiiMethod(name: "conditionNot", returnsJson: "{\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.IRosConditionExpression\"}}", parametersJson: "[{\"docs\":{\"summary\":\"A condition such as ``Fn::Equals`` that evaluates to true or false.\"},\"name\":\"condition\",\"type\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IRosConditionExpression\"}]}}}]")]
        public static AlibabaCloud.SDK.ROS.CDK.Core.IRosConditionExpression ConditionNot(object condition)
        {
            return InvokeStaticMethod<AlibabaCloud.SDK.ROS.CDK.Core.IRosConditionExpression>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.Fn), new System.Type[]{typeof(object)}, new object[]{condition})!;
        }

        /// <summary>Returns true if any one of the specified conditions evaluate to true, or returns false if all of the conditions evaluates to false.</summary>
        /// <param name="conditions">conditions that evaluates to true or false.</param>
        /// <returns>an FnCondition token</returns>
        /// <remarks>
        /// <c>Fn::Or</c> acts
        /// as an OR operator. The minimum number of conditions that you can include is
        /// 2, and the maximum is 10.
        /// </remarks>
        [JsiiMethod(name: "conditionOr", returnsJson: "{\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.IRosConditionExpression\"}}", parametersJson: "[{\"docs\":{\"summary\":\"conditions that evaluates to true or false.\"},\"name\":\"conditions\",\"type\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IRosConditionExpression\"}]}},\"variadic\":true}]")]
        public static AlibabaCloud.SDK.ROS.CDK.Core.IRosConditionExpression ConditionOr(params object[] conditions)
        {
            return InvokeStaticMethod<AlibabaCloud.SDK.ROS.CDK.Core.IRosConditionExpression>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.Fn), new System.Type[]{typeof(object[])}, new object[]{conditions})!;
        }

        /// <summary>The intrinsic function ``Fn::FindInMap`` returns the value corresponding to keys in a two-level map that is declared in the Mappings section.</summary>
        /// <returns>a token represented as a string</returns>
        [JsiiMethod(name: "findInMap", returnsJson: "{\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}}", parametersJson: "[{\"name\":\"mapName\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"topLevelKey\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"secondLevelKey\",\"type\":{\"primitive\":\"string\"}}]")]
        public static AlibabaCloud.SDK.ROS.CDK.Core.IResolvable FindInMap(string mapName, string topLevelKey, string secondLevelKey)
        {
            return InvokeStaticMethod<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.Fn), new System.Type[]{typeof(string), typeof(string), typeof(string)}, new object[]{mapName, topLevelKey, secondLevelKey})!;
        }

        /// <summary>The ``Fn::GetAtt`` intrinsic function returns the value of an attribute from a resource in the template.</summary>
        /// <param name="logicalNameOfResource">The logical name (also called logical ID) of the resource that contains the attribute that you want.</param>
        /// <param name="attributeName">The name of the resource-specific attribute whose value you want.</param>
        /// <returns>an IResolvable object</returns>
        [JsiiMethod(name: "getAtt", returnsJson: "{\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}}", parametersJson: "[{\"docs\":{\"summary\":\"The logical name (also called logical ID) of the resource that contains the attribute that you want.\"},\"name\":\"logicalNameOfResource\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"remarks\":\"See the resource's reference page for details about the\nattributes available for that resource type.\",\"summary\":\"The name of the resource-specific attribute whose value you want.\"},\"name\":\"attributeName\",\"type\":{\"primitive\":\"string\"}}]")]
        public static AlibabaCloud.SDK.ROS.CDK.Core.IResolvable GetAtt(string logicalNameOfResource, string attributeName)
        {
            return InvokeStaticMethod<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.Fn), new System.Type[]{typeof(string), typeof(string)}, new object[]{logicalNameOfResource, attributeName})!;
        }

        /// <summary>The intrinsic function ``Fn::GetAZs`` returns an array that lists Availability Zones for a specified region.</summary>
        /// <param name="region">The name of the region for which you want to get the Availability Zones.</param>
        /// <returns>a token represented as a string array</returns>
        /// <remarks>
        /// Because customers have access to
        /// different Availability Zones, the intrinsic function <c>Fn::GetAZs</c> enables
        /// template authors to write templates that adapt to the calling user's
        /// access. That way you don't have to hard-code a full list of Availability
        /// Zones for a specified region.
        /// </remarks>
        [JsiiMethod(name: "getAzs", returnsJson: "{\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}}", parametersJson: "[{\"docs\":{\"remarks\":\"You can use the ROS::Region pseudo parameter to specify\nthe region in which the stack is created. Specifying an empty string is\nequivalent to specifying ROS::Region.\",\"summary\":\"The name of the region for which you want to get the Availability Zones.\"},\"name\":\"region\",\"type\":{\"primitive\":\"string\"}}]")]
        public static string[] GetAzs(string region)
        {
            return InvokeStaticMethod<string[]>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.Fn), new System.Type[]{typeof(string)}, new object[]{region})!;
        }

        [JsiiMethod(name: "getJsonValue", returnsJson: "{\"type\":{\"primitive\":\"string\"}}", parametersJson: "[{\"name\":\"key\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"jsonData\",\"type\":{\"primitive\":\"any\"}}]")]
        public static string GetJsonValue(string key, object jsonData)
        {
            return InvokeStaticMethod<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.Fn), new System.Type[]{typeof(string), typeof(object)}, new object[]{key, jsonData})!;
        }

        /// <summary>The intrinsic function ``Fn::GetStackOutput`` returns the value of an output exported by another stack.</summary>
        /// <returns>a token represented as a string</returns>
        [JsiiMethod(name: "getStackOutput", returnsJson: "{\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}}", parametersJson: "[{\"name\":\"stackID\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"outputKey\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"stackRegion\",\"optional\":true,\"type\":{\"primitive\":\"string\"}}]")]
        public static AlibabaCloud.SDK.ROS.CDK.Core.IResolvable GetStackOutput(string stackId, string outputKey, string? stackRegion = null)
        {
            return InvokeStaticMethod<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.Fn), new System.Type[]{typeof(string), typeof(string), typeof(string)}, new object?[]{stackId, outputKey, stackRegion})!;
        }

        /// <summary>The intrinsic function ``Fn::Join`` appends a set of values into a single value, separated by the specified delimiter.</summary>
        /// <param name="delimiter">The value you want to occur between fragments.</param>
        /// <param name="listOfValues">The list of values you want combined.</param>
        /// <returns>a token represented as a string</returns>
        /// <remarks>
        /// If a delimiter is the empty
        /// string, the set of values are concatenated with no delimiter.
        /// </remarks>
        [JsiiMethod(name: "join", returnsJson: "{\"type\":{\"primitive\":\"string\"}}", parametersJson: "[{\"docs\":{\"remarks\":\"The\ndelimiter will occur between fragments only. It will not terminate the\nfinal value.\",\"summary\":\"The value you want to occur between fragments.\"},\"name\":\"delimiter\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"The list of values you want combined.\"},\"name\":\"listOfValues\",\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}}]")]
        public static string Join(string delimiter, string[] listOfValues)
        {
            return InvokeStaticMethod<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.Fn), new System.Type[]{typeof(string), typeof(string[])}, new object[]{delimiter, listOfValues})!;
        }

        [JsiiMethod(name: "jq", returnsJson: "{\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}}", parametersJson: "[{\"name\":\"method\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"script\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"inputString\",\"type\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}}]")]
        public static AlibabaCloud.SDK.ROS.CDK.Core.IResolvable Jq(string method, string script, object inputString)
        {
            return InvokeStaticMethod<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.Fn), new System.Type[]{typeof(string), typeof(string), typeof(object)}, new object[]{method, script, inputString})!;
        }

        [JsiiMethod(name: "listMerge", returnsJson: "{\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}}", parametersJson: "[{\"name\":\"valueList\",\"type\":{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},\"kind\":\"array\"}}}]")]
        public static AlibabaCloud.SDK.ROS.CDK.Core.IResolvable ListMerge(object[][] valueList)
        {
            return InvokeStaticMethod<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.Fn), new System.Type[]{typeof(object[][])}, new object[]{valueList})!;
        }

        [JsiiMethod(name: "max", returnsJson: "{\"type\":{\"primitive\":\"number\"}}", parametersJson: "[{\"name\":\"values\",\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"number\"},\"kind\":\"array\"}}}]")]
        public static double Max(double[] values)
        {
            return InvokeStaticMethod<double>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.Fn), new System.Type[]{typeof(double[])}, new object[]{values})!;
        }

        [JsiiMethod(name: "mergeMapToList", returnsJson: "{\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}}", parametersJson: "[{\"name\":\"mapList\",\"type\":{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},\"kind\":\"map\"}},\"kind\":\"array\"}}}]")]
        public static AlibabaCloud.SDK.ROS.CDK.Core.IResolvable MergeMapToList(System.Collections.Generic.IDictionary<string, object[]>[] mapList)
        {
            return InvokeStaticMethod<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.Fn), new System.Type[]{typeof(System.Collections.Generic.IDictionary<string, object[]>[])}, new object[]{mapList})!;
        }

        [JsiiMethod(name: "min", returnsJson: "{\"type\":{\"primitive\":\"number\"}}", parametersJson: "[{\"name\":\"values\",\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"number\"},\"kind\":\"array\"}}}]")]
        public static double Min(double[] values)
        {
            return InvokeStaticMethod<double>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.Fn), new System.Type[]{typeof(double[])}, new object[]{values})!;
        }

        /// <summary>The ``Ref`` intrinsic function returns the value of the specified parameter or resource.</summary>
        /// <param name="logicalName">The logical name of a parameter/resource for which you want to retrieve its value.</param>
        /// <remarks>
        /// Note that it doesn't validate the logicalName, it mainly serves paremeter/resource reference defined in a <c>RosInclude</c> template.
        /// </remarks>
        [JsiiMethod(name: "ref", returnsJson: "{\"type\":{\"primitive\":\"string\"}}", parametersJson: "[{\"docs\":{\"summary\":\"The logical name of a parameter/resource for which you want to retrieve its value.\"},\"name\":\"logicalName\",\"type\":{\"primitive\":\"string\"}}]")]
        public static string Ref(string logicalName)
        {
            return InvokeStaticMethod<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.Fn), new System.Type[]{typeof(string)}, new object[]{logicalName})!;
        }

        [JsiiMethod(name: "replace", returnsJson: "{\"type\":{\"primitive\":\"string\"}}", parametersJson: "[{\"name\":\"replaceData\",\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}},{\"name\":\"content\",\"type\":{\"primitive\":\"string\"}}]")]
        public static string Replace(System.Collections.Generic.IDictionary<string, object> replaceData, string content)
        {
            return InvokeStaticMethod<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.Fn), new System.Type[]{typeof(System.Collections.Generic.IDictionary<string, object>), typeof(string)}, new object[]{replaceData, content})!;
        }

        /// <summary>The intrinsic function ``Fn::Select`` returns a single object from a list of objects by index.</summary>
        /// <param name="index">The index of the object to retrieve.</param>
        /// <param name="array">The list of objects to select from.</param>
        /// <returns>a token represented as a string</returns>
        [JsiiMethod(name: "select", returnsJson: "{\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}}", parametersJson: "[{\"docs\":{\"remarks\":\"This must be a value from zero to N-1, where N represents the number of elements in the array.\",\"summary\":\"The index of the object to retrieve.\"},\"name\":\"index\",\"type\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"primitive\":\"number\"}]}}},{\"docs\":{\"remarks\":\"This list must not be null, nor can it have null entries.\",\"summary\":\"The list of objects to select from.\"},\"name\":\"array\",\"type\":{\"primitive\":\"any\"}}]")]
        public static AlibabaCloud.SDK.ROS.CDK.Core.IResolvable Select(object index, object array)
        {
            return InvokeStaticMethod<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.Fn), new System.Type[]{typeof(object), typeof(object)}, new object[]{index, array})!;
        }

        [JsiiMethod(name: "selectMapList", returnsJson: "{\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}}", parametersJson: "[{\"name\":\"key\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"mapList\",\"type\":{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},\"kind\":\"array\"}}}]")]
        public static AlibabaCloud.SDK.ROS.CDK.Core.IResolvable SelectMapList(string key, System.Collections.Generic.IDictionary<string, object>[] mapList)
        {
            return InvokeStaticMethod<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.Fn), new System.Type[]{typeof(string), typeof(System.Collections.Generic.IDictionary<string, object>[])}, new object[]{key, mapList})!;
        }

        /// <summary>To split a string into a list of string values so that you can select an element from the resulting string list, use the ``Fn::Split`` intrinsic function.</summary>
        /// <param name="delimiter">A string value that determines where the source string is divided.</param>
        /// <param name="source">The string value that you want to split.</param>
        /// <returns>a token represented as a string array</returns>
        /// <remarks>
        /// Specify the location of splits
        /// with a delimiter, such as , (a comma). After you split a string, use the <c>Fn::Select</c> function
        /// to pick a specific element.
        /// </remarks>
        [JsiiMethod(name: "split", returnsJson: "{\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}}", parametersJson: "[{\"docs\":{\"summary\":\"A string value that determines where the source string is divided.\"},\"name\":\"delimiter\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"The string value that you want to split.\"},\"name\":\"source\",\"type\":{\"primitive\":\"string\"}}]")]
        public static string[] Split(string delimiter, string source)
        {
            return InvokeStaticMethod<string[]>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.Fn), new System.Type[]{typeof(string), typeof(string)}, new object[]{delimiter, source})!;
        }

        [JsiiMethod(name: "str", returnsJson: "{\"type\":{\"primitive\":\"string\"}}", parametersJson: "[{\"name\":\"value\",\"type\":{\"primitive\":\"any\"}}]")]
        public static string Str(object @value)
        {
            return InvokeStaticMethod<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.Fn), new System.Type[]{typeof(object)}, new object[]{@value})!;
        }

        /// <summary>The intrinsic function ``Fn::Sub`` substitutes variables in an input string with values that you specify.</summary>
        /// <param name="body">A string with variables that Ros Template substitutes with their associated values at runtime.</param>
        /// <param name="variables">The name of a variable that you included in the String parameter.</param>
        /// <returns>a token represented as a string</returns>
        /// <remarks>
        /// In your templates, you can use this function
        /// to construct commands or outputs that include values that aren't available
        /// until you create or update a stack.
        /// </remarks>
        [JsiiMethod(name: "sub", returnsJson: "{\"type\":{\"primitive\":\"string\"}}", parametersJson: "[{\"docs\":{\"remarks\":\"Write variables as ${MyVarName}.\nVariables can be template parameter names, resource logical IDs, resource\nattributes, or a variable in a key-value map. If you specify only template\nparameter names, resource logical IDs, and resource attributes, don't\nspecify a key-value map.\",\"summary\":\"A string with variables that Ros Template substitutes with their associated values at runtime.\"},\"name\":\"body\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"remarks\":\"The value that Ros Template substitutes for the associated\nvariable name at runtime.\",\"summary\":\"The name of a variable that you included in the String parameter.\"},\"name\":\"variables\",\"optional\":true,\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}]")]
        public static string Sub(string body, System.Collections.Generic.IDictionary<string, object>? variables = null)
        {
            return InvokeStaticMethod<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.Fn), new System.Type[]{typeof(string), typeof(System.Collections.Generic.IDictionary<string, object>)}, new object?[]{body, variables})!;
        }
    }
}
