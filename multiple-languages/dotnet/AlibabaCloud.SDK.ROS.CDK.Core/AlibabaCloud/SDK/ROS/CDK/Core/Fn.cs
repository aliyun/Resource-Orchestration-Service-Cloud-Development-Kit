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

        [JsiiMethod(name: "add", returnsJson: "{\"type\":{\"primitive\":\"string\"}}", parametersJson: "[{\"name\":\"values\",\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}}}]")]
        public static string Add(object[] values)
        {
            return InvokeStaticMethod<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.Fn), new System.Type[]{typeof(object[])}, new object[]{values})!;
        }

        [JsiiMethod(name: "avg", returnsJson: "{\"type\":{\"primitive\":\"string\"}}", parametersJson: "[{\"name\":\"ndigits\",\"type\":{\"primitive\":\"number\"}},{\"name\":\"values\",\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}}}]")]
        public static string Avg(double ndigits, object[] values)
        {
            return InvokeStaticMethod<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.Fn), new System.Type[]{typeof(double), typeof(object[])}, new object[]{ndigits, values})!;
        }

        [JsiiMethod(name: "base64Decode", returnsJson: "{\"type\":{\"primitive\":\"string\"}}", parametersJson: "[{\"name\":\"data\",\"type\":{\"primitive\":\"string\"}}]")]
        public static string Base64Decode(string data)
        {
            return InvokeStaticMethod<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.Fn), new System.Type[]{typeof(string)}, new object[]{data})!;
        }

        /// <summary>The intrinsic function ``Fn::Base64`` returns the Base64 representation of&#xD; the input string.</summary>
        /// <param name="data">The string value you want to convert to Base64.</param>
        /// <returns>a token represented as a string</returns>
        [JsiiMethod(name: "base64Encode", returnsJson: "{\"type\":{\"primitive\":\"string\"}}", parametersJson: "[{\"docs\":{\"summary\":\"The string value you want to convert to Base64.\"},\"name\":\"data\",\"type\":{\"primitive\":\"string\"}}]")]
        public static string Base64Encode(string data)
        {
            return InvokeStaticMethod<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.Fn), new System.Type[]{typeof(string)}, new object[]{data})!;
        }

        [JsiiMethod(name: "calculate", returnsJson: "{\"type\":{\"primitive\":\"string\"}}", parametersJson: "[{\"name\":\"values\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"ndigits\",\"type\":{\"primitive\":\"number\"}},{\"name\":\"para\",\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"number\"},\"kind\":\"array\"}}}]")]
        public static string Calculate(string values, double ndigits, double[] para)
        {
            return InvokeStaticMethod<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.Fn), new System.Type[]{typeof(string), typeof(double), typeof(double[])}, new object[]{values, ndigits, para})!;
        }

        /// <summary>Returns true if all the specified conditions evaluate to true, or returns&#xD; false if any one of the conditions evaluates to false.</summary>
        /// <param name="conditions">conditions to AND.</param>
        /// <returns>an FnCondition token</returns>
        /// <remarks>
        /// <c>Fn::And</c> acts as
        /// an AND operator. The minimum number of conditions that you can include is
        /// 2, and the maximum is 10.
        /// </remarks>
        [JsiiMethod(name: "conditionAnd", returnsJson: "{\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.IRosConditionExpression\"}}", parametersJson: "[{\"docs\":{\"summary\":\"conditions to AND.\"},\"name\":\"conditions\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.IRosConditionExpression\"},\"variadic\":true}]")]
        public static AlibabaCloud.SDK.ROS.CDK.Core.IRosConditionExpression ConditionAnd(params AlibabaCloud.SDK.ROS.CDK.Core.IRosConditionExpression[] conditions)
        {
            return InvokeStaticMethod<AlibabaCloud.SDK.ROS.CDK.Core.IRosConditionExpression>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.Fn), new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Core.IRosConditionExpression[])}, new object[]{conditions})!;
        }

        /// <summary>Returns true if a specified string matches all values in a list.</summary>
        /// <param name="listOfStrings">A list of strings, such as "A", "B", "C".</param>
        /// <param name="value">A string, such as "A", that you want to compare against a list&#xD;of strings.</param>
        /// <returns>an FnCondition token</returns>
        [JsiiMethod(name: "conditionEachMemberEquals", returnsJson: "{\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.IRosConditionExpression\"}}", parametersJson: "[{\"docs\":{\"summary\":\"A list of strings, such as testAtest, testBtest, testCtest.\"},\"name\":\"listOfStrings\",\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}},{\"docs\":{\"summary\":\"A string, such as testAtest, that you want to compare against a list\rof strings.\"},\"name\":\"value\",\"type\":{\"primitive\":\"string\"}}]")]
        public static AlibabaCloud.SDK.ROS.CDK.Core.IRosConditionExpression ConditionEachMemberEquals(string[] listOfStrings, string @value)
        {
            return InvokeStaticMethod<AlibabaCloud.SDK.ROS.CDK.Core.IRosConditionExpression>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.Fn), new System.Type[]{typeof(string[]), typeof(string)}, new object[]{listOfStrings, @value})!;
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

        /// <summary>Returns one value if the specified condition evaluates to true and another&#xD; value if the specified condition evaluates to false.</summary>
        /// <param name="conditionId">A reference to a condition in the Conditions section.</param>
        /// <param name="valueIfTrue">A value to be returned if the specified condition&#xD;evaluates to true.</param>
        /// <param name="valueIfFalse">A value to be returned if the specified condition&#xD;evaluates to false.</param>
        /// <returns>an FnCondition token</returns>
        [JsiiMethod(name: "conditionIf", returnsJson: "{\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.IRosConditionExpression\"}}", parametersJson: "[{\"docs\":{\"remarks\":\"Use\rthe condition's name to reference it.\",\"summary\":\"A reference to a condition in the Conditions section.\"},\"name\":\"conditionId\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"A value to be returned if the specified condition\revaluates to true.\"},\"name\":\"valueIfTrue\",\"type\":{\"primitive\":\"any\"}},{\"docs\":{\"summary\":\"A value to be returned if the specified condition\revaluates to false.\"},\"name\":\"valueIfFalse\",\"type\":{\"primitive\":\"any\"}}]")]
        public static AlibabaCloud.SDK.ROS.CDK.Core.IRosConditionExpression ConditionIf(string conditionId, object valueIfTrue, object valueIfFalse)
        {
            return InvokeStaticMethod<AlibabaCloud.SDK.ROS.CDK.Core.IRosConditionExpression>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.Fn), new System.Type[]{typeof(string), typeof(object), typeof(object)}, new object[]{conditionId, valueIfTrue, valueIfFalse})!;
        }

        /// <summary>Returns true for a condition that evaluates to false or returns false for a&#xD; condition that evaluates to true.</summary>
        /// <param name="condition">A condition such as ``Fn::Equals`` that evaluates to true&#xD;or false.</param>
        /// <returns>an FnCondition token</returns>
        /// <remarks>
        /// <c>Fn::Not</c> acts as a NOT operator.
        /// </remarks>
        [JsiiMethod(name: "conditionNot", returnsJson: "{\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.IRosConditionExpression\"}}", parametersJson: "[{\"docs\":{\"summary\":\"A condition such as ``Fn::Equals`` that evaluates to true\ror false.\"},\"name\":\"condition\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.IRosConditionExpression\"}}]")]
        public static AlibabaCloud.SDK.ROS.CDK.Core.IRosConditionExpression ConditionNot(AlibabaCloud.SDK.ROS.CDK.Core.IRosConditionExpression condition)
        {
            return InvokeStaticMethod<AlibabaCloud.SDK.ROS.CDK.Core.IRosConditionExpression>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.Fn), new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Core.IRosConditionExpression)}, new object[]{condition})!;
        }

        /// <summary>Returns true if any one of the specified conditions evaluate to true, or&#xD; returns false if all of the conditions evaluates to false.</summary>
        /// <param name="conditions">conditions that evaluates to true or false.</param>
        /// <returns>an FnCondition token</returns>
        /// <remarks>
        /// <c>Fn::Or</c> acts
        /// as an OR operator. The minimum number of conditions that you can include is
        /// 2, and the maximum is 10.
        /// </remarks>
        [JsiiMethod(name: "conditionOr", returnsJson: "{\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.IRosConditionExpression\"}}", parametersJson: "[{\"docs\":{\"summary\":\"conditions that evaluates to true or false.\"},\"name\":\"conditions\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.IRosConditionExpression\"},\"variadic\":true}]")]
        public static AlibabaCloud.SDK.ROS.CDK.Core.IRosConditionExpression ConditionOr(params AlibabaCloud.SDK.ROS.CDK.Core.IRosConditionExpression[] conditions)
        {
            return InvokeStaticMethod<AlibabaCloud.SDK.ROS.CDK.Core.IRosConditionExpression>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.Fn), new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Core.IRosConditionExpression[])}, new object[]{conditions})!;
        }

        /// <summary>The intrinsic function ``Fn::FindInMap`` returns the value corresponding to&#xD; keys in a two-level map that is declared in the Mappings section.</summary>
        /// <returns>a token represented as a string</returns>
        [JsiiMethod(name: "findInMap", returnsJson: "{\"type\":{\"primitive\":\"string\"}}", parametersJson: "[{\"name\":\"mapName\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"topLevelKey\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"secondLevelKey\",\"type\":{\"primitive\":\"string\"}}]")]
        public static string FindInMap(string mapName, string topLevelKey, string secondLevelKey)
        {
            return InvokeStaticMethod<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.Fn), new System.Type[]{typeof(string), typeof(string), typeof(string)}, new object[]{mapName, topLevelKey, secondLevelKey})!;
        }

        /// <summary>The ``Fn::GetAtt`` intrinsic function returns the value of an attribute&#xD; from a resource in the template.</summary>
        /// <param name="logicalNameOfResource">The logical name (also called logical ID) of&#xD;the resource that contains the attribute that you want.</param>
        /// <param name="attributeName">The name of the resource-specific attribute whose&#xD;value you want.</param>
        /// <returns>an IResolvable object</returns>
        [JsiiMethod(name: "getAtt", returnsJson: "{\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}}", parametersJson: "[{\"docs\":{\"summary\":\"The logical name (also called logical ID) of\rthe resource that contains the attribute that you want.\"},\"name\":\"logicalNameOfResource\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"remarks\":\"See the resource's reference page for details about the\rattributes available for that resource type.\",\"summary\":\"The name of the resource-specific attribute whose\rvalue you want.\"},\"name\":\"attributeName\",\"type\":{\"primitive\":\"string\"}}]")]
        public static AlibabaCloud.SDK.ROS.CDK.Core.IResolvable GetAtt(string logicalNameOfResource, string attributeName)
        {
            return InvokeStaticMethod<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.Fn), new System.Type[]{typeof(string), typeof(string)}, new object[]{logicalNameOfResource, attributeName})!;
        }

        /// <summary>The intrinsic function ``Fn::GetAZs`` returns an array that lists&#xD; Availability Zones for a specified region.</summary>
        /// <param name="region">The name of the region for which you want to get the&#xD;Availability Zones.</param>
        /// <returns>a token represented as a string array</returns>
        /// <remarks>
        /// Because customers have access to
        /// different Availability Zones, the intrinsic function <c>Fn::GetAZs</c> enables
        /// template authors to write templates that adapt to the calling user's
        /// access. That way you don't have to hard-code a full list of Availability
        /// Zones for a specified region.
        /// </remarks>
        [JsiiMethod(name: "getAzs", returnsJson: "{\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}}", parametersJson: "[{\"docs\":{\"remarks\":\"You can use the ROS::Region pseudo parameter to specify\rthe region in which the stack is created. Specifying an empty string is\requivalent to specifying ROS::Region.\",\"summary\":\"The name of the region for which you want to get the\rAvailability Zones.\"},\"name\":\"region\",\"optional\":true,\"type\":{\"primitive\":\"string\"}}]")]
        public static string[] GetAzs(string? region = null)
        {
            return InvokeStaticMethod<string[]>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.Fn), new System.Type[]{typeof(string)}, new object?[]{region})!;
        }

        [JsiiMethod(name: "getJsonValue", returnsJson: "{\"type\":{\"primitive\":\"string\"}}", parametersJson: "[{\"name\":\"value\",\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}}}]")]
        public static string GetJsonValue(object[] @value)
        {
            return InvokeStaticMethod<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.Fn), new System.Type[]{typeof(object[])}, new object[]{@value})!;
        }

        /// <summary>The intrinsic function ``Fn::GetStackOutput`` returns the value of an output&#xD; exported by another stack.</summary>
        /// <returns>a token represented as a string</returns>
        [JsiiMethod(name: "getStackOutput", returnsJson: "{\"type\":{\"primitive\":\"string\"}}", parametersJson: "[{\"name\":\"stackID\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"outputKey\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"stackRegion\",\"optional\":true,\"type\":{\"primitive\":\"string\"}}]")]
        public static string GetStackOutput(string stackId, string outputKey, string? stackRegion = null)
        {
            return InvokeStaticMethod<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.Fn), new System.Type[]{typeof(string), typeof(string), typeof(string)}, new object?[]{stackId, outputKey, stackRegion})!;
        }

        /// <summary>The intrinsic function ``Fn::Join`` appends a set of values into a single&#xD; value, separated by the specified delimiter.</summary>
        /// <param name="delimiter">The value you want to occur between fragments.</param>
        /// <param name="listOfValues">The list of values you want combined.</param>
        /// <returns>a token represented as a string</returns>
        /// <remarks>
        /// If a delimiter is the empty
        /// string, the set of values are concatenated with no delimiter.
        /// </remarks>
        [JsiiMethod(name: "join", returnsJson: "{\"type\":{\"primitive\":\"string\"}}", parametersJson: "[{\"docs\":{\"remarks\":\"The\rdelimiter will occur between fragments only. It will not terminate the\rfinal value.\",\"summary\":\"The value you want to occur between fragments.\"},\"name\":\"delimiter\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"The list of values you want combined.\"},\"name\":\"listOfValues\",\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}}]")]
        public static string Join(string delimiter, string[] listOfValues)
        {
            return InvokeStaticMethod<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.Fn), new System.Type[]{typeof(string), typeof(string[])}, new object[]{delimiter, listOfValues})!;
        }

        [JsiiMethod(name: "jq", returnsJson: "{\"type\":{\"primitive\":\"string\"}}", parametersJson: "[{\"name\":\"method\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"script\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"inputString\",\"type\":{\"primitive\":\"any\"}}]")]
        public static string Jq(string method, string script, object inputString)
        {
            return InvokeStaticMethod<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.Fn), new System.Type[]{typeof(string), typeof(string), typeof(object)}, new object[]{method, script, inputString})!;
        }

        [JsiiMethod(name: "listMerge", returnsJson: "{\"type\":{\"primitive\":\"string\"}}", parametersJson: "[{\"name\":\"valueList\",\"type\":{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}},\"kind\":\"array\"}}}]")]
        public static string ListMerge(string[][] valueList)
        {
            return InvokeStaticMethod<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.Fn), new System.Type[]{typeof(string[][])}, new object[]{valueList})!;
        }

        [JsiiMethod(name: "max", returnsJson: "{\"type\":{\"primitive\":\"string\"}}", parametersJson: "[{\"name\":\"values\",\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"number\"},\"kind\":\"array\"}}}]")]
        public static string Max(double[] values)
        {
            return InvokeStaticMethod<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.Fn), new System.Type[]{typeof(double[])}, new object[]{values})!;
        }

        [JsiiMethod(name: "mergeMapToList", returnsJson: "{\"type\":{\"primitive\":\"string\"}}", parametersJson: "[{\"name\":\"mapList\",\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}}}]")]
        public static string MergeMapToList(object[] mapList)
        {
            return InvokeStaticMethod<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.Fn), new System.Type[]{typeof(object[])}, new object[]{mapList})!;
        }

        [JsiiMethod(name: "min", returnsJson: "{\"type\":{\"primitive\":\"string\"}}", parametersJson: "[{\"name\":\"values\",\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"number\"},\"kind\":\"array\"}}}]")]
        public static string Min(double[] values)
        {
            return InvokeStaticMethod<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.Fn), new System.Type[]{typeof(double[])}, new object[]{values})!;
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
        [JsiiMethod(name: "select", returnsJson: "{\"type\":{\"primitive\":\"string\"}}", parametersJson: "[{\"docs\":{\"remarks\":\"This must be a value from zero to N-1, where N represents the number of elements in the array.\",\"summary\":\"The index of the object to retrieve.\"},\"name\":\"index\",\"type\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"primitive\":\"number\"}]}}},{\"docs\":{\"remarks\":\"This list must not be null, nor can it have null entries.\",\"summary\":\"The list of objects to select from.\"},\"name\":\"array\",\"type\":{\"primitive\":\"any\"}}]")]
        public static string Select(object index, object array)
        {
            return InvokeStaticMethod<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.Fn), new System.Type[]{typeof(object), typeof(object)}, new object[]{index, array})!;
        }

        [JsiiMethod(name: "selectMapList", returnsJson: "{\"type\":{\"primitive\":\"string\"}}", parametersJson: "[{\"name\":\"key\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"mapList\",\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}}}]")]
        public static string SelectMapList(string key, object[] mapList)
        {
            return InvokeStaticMethod<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.Fn), new System.Type[]{typeof(string), typeof(object[])}, new object[]{key, mapList})!;
        }

        /// <summary>To split a string into a list of string values so that you can select an element from the&#xD; resulting string list, use the ``Fn::Split`` intrinsic function.</summary>
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

        /// <summary>The intrinsic function ``Fn::Sub`` substitutes variables in an input string&#xD; with values that you specify.</summary>
        /// <param name="body">A string with variables that Ros Template substitutes&#xD;with their associated values at runtime.</param>
        /// <param name="variables">The name of a variable that you included in the String&#xD;parameter.</param>
        /// <returns>a token represented as a string</returns>
        /// <remarks>
        /// In your templates, you can use this function
        /// to construct commands or outputs that include values that aren't available
        /// until you create or update a stack.
        /// </remarks>
        [JsiiMethod(name: "sub", returnsJson: "{\"type\":{\"primitive\":\"string\"}}", parametersJson: "[{\"docs\":{\"remarks\":\"Write variables as ${MyVarName}.\rVariables can be template parameter names, resource logical IDs, resource\rattributes, or a variable in a key-value map. If you specify only template\rparameter names, resource logical IDs, and resource attributes, don't\rspecify a key-value map.\",\"summary\":\"A string with variables that Ros Template substitutes\rwith their associated values at runtime.\"},\"name\":\"body\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"remarks\":\"The value that Ros Template substitutes for the associated\rvariable name at runtime.\",\"summary\":\"The name of a variable that you included in the String\rparameter.\"},\"name\":\"variables\",\"optional\":true,\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"map\"}}}]")]
        public static string Sub(string body, System.Collections.Generic.IDictionary<string, string>? variables = null)
        {
            return InvokeStaticMethod<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.Fn), new System.Type[]{typeof(string), typeof(System.Collections.Generic.IDictionary<string, string>)}, new object?[]{body, variables})!;
        }
    }
}
