using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>Resource Orchestration Service intrinsic functions.</summary>
    /// <remarks>
    /// https://help.aliyun.com/zh/ros/user-guide/functions
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
            if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
            {
                switch (values)
                {
                    case double cast_89445e:
                        break;
                    case byte cast_89445e:
                        break;
                    case decimal cast_89445e:
                        break;
                    case float cast_89445e:
                        break;
                    case int cast_89445e:
                        break;
                    case long cast_89445e:
                        break;
                    case sbyte cast_89445e:
                        break;
                    case short cast_89445e:
                        break;
                    case uint cast_89445e:
                        break;
                    case ulong cast_89445e:
                        break;
                    case ushort cast_89445e:
                        break;
                    case object[] cast_89445e:
                        break;
                    case System.Collections.Generic.IDictionary<string, object> cast_89445e:
                        break;
                    case null:
                        throw new System.ArgumentException($"Expected argument {nameof(values)} to be one of: double, object[], System.Collections.Generic.IDictionary<string, object>; received null", nameof(values));
                    default:
                        throw new System.ArgumentException($"Expected argument {nameof(values)} to be one of: double, object[], System.Collections.Generic.IDictionary<string, object>; received {values.GetType().FullName}", nameof(values));
                }
            }
            return InvokeStaticMethod<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.Fn), new System.Type[]{typeof(object)}, new object[]{values})!;
        }

        /// <summary>Returns whether a value in the specified array is true or false.</summary>
        /// <param name="values">An array of values.</param>
        /// <remarks>
        /// Returns true if any item in the array is true, and false otherwise.
        /// </remarks>
        [JsiiMethod(name: "any", returnsJson: "{\"type\":{\"primitive\":\"string\"}}", parametersJson: "[{\"docs\":{\"summary\":\"An array of values.\"},\"name\":\"values\",\"type\":{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}}]")]
        public static string Any(object values)
        {
            if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
            {
                switch (values)
                {
                    case object[] cast_89445e:
                        break;
                    case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_89445e:
                        break;
                    case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_89445e:
                        // Not enough information to type-check...
                        break;
                    case null:
                        throw new System.ArgumentException($"Expected argument {nameof(values)} to be one of: object[], {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(values));
                    default:
                        throw new System.ArgumentException($"Expected argument {nameof(values)} to be one of: object[], {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {values.GetType().FullName}", nameof(values));
                }
            }
            return InvokeStaticMethod<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.Fn), new System.Type[]{typeof(object)}, new object[]{values})!;
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

        /// <summary>Returns a list of CIDR addresses.</summary>
        /// <param name="ipBlock">The IP address block from which you want to allocate the CIDR.</param>
        /// <param name="count">The number of IPv4 CIDRs to generate.</param>
        /// <param name="cidrBits">The number of subnet bits of the new CIDR.</param>
        [JsiiMethod(name: "cidr", returnsJson: "{\"type\":{\"primitive\":\"string\"}}", parametersJson: "[{\"docs\":{\"remarks\":\"The block must be expressed in CIDR notation.\",\"summary\":\"The IP address block from which you want to allocate the CIDR.\"},\"name\":\"ipBlock\",\"type\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}},{\"docs\":{\"remarks\":\"Valid input values range from 1 to 256 and are used to decide the total number of final subnets.\",\"summary\":\"The number of IPv4 CIDRs to generate.\"},\"name\":\"count\",\"type\":{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}},{\"docs\":{\"remarks\":\"For example, if the value test8test is specified for this parameter, a CIDR with a test/24test mask will be created.\",\"summary\":\"The number of subnet bits of the new CIDR.\"},\"name\":\"cidrBits\",\"type\":{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}}]")]
        public static string Cidr(object ipBlock, object count, object cidrBits)
        {
            if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
            {
                switch (ipBlock)
                {
                    case string cast_d22625:
                        break;
                    case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_d22625:
                        break;
                    case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_d22625:
                        // Not enough information to type-check...
                        break;
                    case null:
                        throw new System.ArgumentException($"Expected argument {nameof(ipBlock)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(ipBlock));
                    default:
                        throw new System.ArgumentException($"Expected argument {nameof(ipBlock)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {ipBlock.GetType().FullName}", nameof(ipBlock));
                }
                switch (count)
                {
                    case double cast_6c3549:
                        break;
                    case byte cast_6c3549:
                        break;
                    case decimal cast_6c3549:
                        break;
                    case float cast_6c3549:
                        break;
                    case int cast_6c3549:
                        break;
                    case long cast_6c3549:
                        break;
                    case sbyte cast_6c3549:
                        break;
                    case short cast_6c3549:
                        break;
                    case uint cast_6c3549:
                        break;
                    case ulong cast_6c3549:
                        break;
                    case ushort cast_6c3549:
                        break;
                    case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_6c3549:
                        break;
                    case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_6c3549:
                        // Not enough information to type-check...
                        break;
                    case null:
                        throw new System.ArgumentException($"Expected argument {nameof(count)} to be one of: double, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(count));
                    default:
                        throw new System.ArgumentException($"Expected argument {nameof(count)} to be one of: double, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {count.GetType().FullName}", nameof(count));
                }
                switch (cidrBits)
                {
                    case double cast_de6f23:
                        break;
                    case byte cast_de6f23:
                        break;
                    case decimal cast_de6f23:
                        break;
                    case float cast_de6f23:
                        break;
                    case int cast_de6f23:
                        break;
                    case long cast_de6f23:
                        break;
                    case sbyte cast_de6f23:
                        break;
                    case short cast_de6f23:
                        break;
                    case uint cast_de6f23:
                        break;
                    case ulong cast_de6f23:
                        break;
                    case ushort cast_de6f23:
                        break;
                    case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_de6f23:
                        break;
                    case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_de6f23:
                        // Not enough information to type-check...
                        break;
                    case null:
                        throw new System.ArgumentException($"Expected argument {nameof(cidrBits)} to be one of: double, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(cidrBits));
                    default:
                        throw new System.ArgumentException($"Expected argument {nameof(cidrBits)} to be one of: double, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {cidrBits.GetType().FullName}", nameof(cidrBits));
                }
            }
            return InvokeStaticMethod<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.Fn), new System.Type[]{typeof(object), typeof(object), typeof(object)}, new object[]{ipBlock, count, cidrBits})!;
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
            if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
            {
                for (var __idx_562a77 = 0 ; __idx_562a77 < conditions.Length ; __idx_562a77++)
                {
                    switch (conditions[__idx_562a77])
                    {
                        case string cast_656354:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IRosConditionExpression cast_656354:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_656354:
                            // Not enough information to type-check...
                            break;
                        case null:
                            throw new System.ArgumentException($"Expected argument {nameof(conditions)}[{__idx_562a77}] to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IRosConditionExpression).FullName}; received null", nameof(conditions));
                        default:
                            throw new System.ArgumentException($"Expected argument {nameof(conditions)}[{__idx_562a77}] to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IRosConditionExpression).FullName}; received {conditions[__idx_562a77].GetType().FullName}", nameof(conditions));
                    }
                }
            }
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
            if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
            {
                switch (conditionId)
                {
                    case string cast_0a6e28:
                        break;
                    case AlibabaCloud.SDK.ROS.CDK.Core.IRosConditionExpression cast_0a6e28:
                        break;
                    case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_0a6e28:
                        // Not enough information to type-check...
                        break;
                    case null:
                        throw new System.ArgumentException($"Expected argument {nameof(conditionId)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IRosConditionExpression).FullName}; received null", nameof(conditionId));
                    default:
                        throw new System.ArgumentException($"Expected argument {nameof(conditionId)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IRosConditionExpression).FullName}; received {conditionId.GetType().FullName}", nameof(conditionId));
                }
            }
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
            if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
            {
                switch (condition)
                {
                    case string cast_596d40:
                        break;
                    case AlibabaCloud.SDK.ROS.CDK.Core.IRosConditionExpression cast_596d40:
                        break;
                    case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_596d40:
                        // Not enough information to type-check...
                        break;
                    case null:
                        throw new System.ArgumentException($"Expected argument {nameof(condition)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IRosConditionExpression).FullName}; received null", nameof(condition));
                    default:
                        throw new System.ArgumentException($"Expected argument {nameof(condition)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IRosConditionExpression).FullName}; received {condition.GetType().FullName}", nameof(condition));
                }
            }
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
            if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
            {
                for (var __idx_562a77 = 0 ; __idx_562a77 < conditions.Length ; __idx_562a77++)
                {
                    switch (conditions[__idx_562a77])
                    {
                        case string cast_656354:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IRosConditionExpression cast_656354:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_656354:
                            // Not enough information to type-check...
                            break;
                        case null:
                            throw new System.ArgumentException($"Expected argument {nameof(conditions)}[{__idx_562a77}] to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IRosConditionExpression).FullName}; received null", nameof(conditions));
                        default:
                            throw new System.ArgumentException($"Expected argument {nameof(conditions)}[{__idx_562a77}] to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IRosConditionExpression).FullName}; received {conditions[__idx_562a77].GetType().FullName}", nameof(conditions));
                    }
                }
            }
            return InvokeStaticMethod<AlibabaCloud.SDK.ROS.CDK.Core.IRosConditionExpression>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.Fn), new System.Type[]{typeof(object[])}, new object[]{conditions})!;
        }

        /// <summary>Returns true if at least one member of the list matches the specified value and false otherwise.</summary>
        /// <param name="values">An array of values.</param>
        /// <param name="value">A value.</param>
        [JsiiMethod(name: "contains", returnsJson: "{\"type\":{\"primitive\":\"string\"}}", parametersJson: "[{\"docs\":{\"summary\":\"An array of values.\"},\"name\":\"values\",\"type\":{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}},{\"docs\":{\"summary\":\"A value.\"},\"name\":\"value\",\"type\":{\"primitive\":\"any\"}}]")]
        public static string Contains(object values, object @value)
        {
            if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
            {
                switch (values)
                {
                    case object[] cast_89445e:
                        break;
                    case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_89445e:
                        break;
                    case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_89445e:
                        // Not enough information to type-check...
                        break;
                    case null:
                        throw new System.ArgumentException($"Expected argument {nameof(values)} to be one of: object[], {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(values));
                    default:
                        throw new System.ArgumentException($"Expected argument {nameof(values)} to be one of: object[], {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {values.GetType().FullName}", nameof(values));
                }
            }
            return InvokeStaticMethod<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.Fn), new System.Type[]{typeof(object), typeof(object)}, new object[]{values, @value})!;
        }

        /// <summary>Returns true if every member of the first list is equal to at least one value in the second list, and false otherwise.</summary>
        /// <param name="values1">An array of values.</param>
        /// <param name="values2">An array of values.</param>
        [JsiiMethod(name: "eachMemberIn", returnsJson: "{\"type\":{\"primitive\":\"string\"}}", parametersJson: "[{\"docs\":{\"summary\":\"An array of values.\"},\"name\":\"values1\",\"type\":{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}},{\"docs\":{\"summary\":\"An array of values.\"},\"name\":\"values2\",\"type\":{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}}]")]
        public static string EachMemberIn(object values1, object values2)
        {
            if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
            {
                switch (values1)
                {
                    case object[] cast_4ae8e1:
                        break;
                    case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_4ae8e1:
                        break;
                    case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_4ae8e1:
                        // Not enough information to type-check...
                        break;
                    case null:
                        throw new System.ArgumentException($"Expected argument {nameof(values1)} to be one of: object[], {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(values1));
                    default:
                        throw new System.ArgumentException($"Expected argument {nameof(values1)} to be one of: object[], {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {values1.GetType().FullName}", nameof(values1));
                }
                switch (values2)
                {
                    case object[] cast_b92750:
                        break;
                    case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_b92750:
                        break;
                    case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_b92750:
                        // Not enough information to type-check...
                        break;
                    case null:
                        throw new System.ArgumentException($"Expected argument {nameof(values2)} to be one of: object[], {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(values2));
                    default:
                        throw new System.ArgumentException($"Expected argument {nameof(values2)} to be one of: object[], {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {values2.GetType().FullName}", nameof(values2));
                }
            }
            return InvokeStaticMethod<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.Fn), new System.Type[]{typeof(object), typeof(object)}, new object[]{values1, values2})!;
        }

        /// <summary>The intrinsic function ``Fn::FindInMap`` returns the value corresponding to keys in a two-level map that is declared in the Mappings section.</summary>
        /// <returns>a token represented as a string</returns>
        [JsiiMethod(name: "findInMap", returnsJson: "{\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}}", parametersJson: "[{\"name\":\"mapName\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"topLevelKey\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"secondLevelKey\",\"type\":{\"primitive\":\"string\"}}]")]
        public static AlibabaCloud.SDK.ROS.CDK.Core.IResolvable FindInMap(string mapName, string topLevelKey, string secondLevelKey)
        {
            return InvokeStaticMethod<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.Fn), new System.Type[]{typeof(string), typeof(string), typeof(string)}, new object[]{mapName, topLevelKey, secondLevelKey})!;
        }

        /// <summary>Returns the formatted time of the object.</summary>
        /// <param name="format">The format of the time.</param>
        /// <param name="timeZone">The time zone.</param>
        [JsiiMethod(name: "formatTime", returnsJson: "{\"type\":{\"primitive\":\"string\"}}", parametersJson: "[{\"docs\":{\"summary\":\"The format of the time.\"},\"name\":\"format\",\"type\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}},{\"docs\":{\"summary\":\"The time zone.\"},\"name\":\"timeZone\",\"type\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}}]")]
        public static string FormatTime(object format, object timeZone)
        {
            if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
            {
                switch (format)
                {
                    case string cast_e904c9:
                        break;
                    case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_e904c9:
                        break;
                    case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_e904c9:
                        // Not enough information to type-check...
                        break;
                    case null:
                        throw new System.ArgumentException($"Expected argument {nameof(format)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(format));
                    default:
                        throw new System.ArgumentException($"Expected argument {nameof(format)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {format.GetType().FullName}", nameof(format));
                }
                switch (timeZone)
                {
                    case string cast_ab9689:
                        break;
                    case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_ab9689:
                        break;
                    case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_ab9689:
                        // Not enough information to type-check...
                        break;
                    case null:
                        throw new System.ArgumentException($"Expected argument {nameof(timeZone)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(timeZone));
                    default:
                        throw new System.ArgumentException($"Expected argument {nameof(timeZone)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {timeZone.GetType().FullName}", nameof(timeZone));
                }
            }
            return InvokeStaticMethod<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.Fn), new System.Type[]{typeof(object), typeof(object)}, new object[]{format, timeZone})!;
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

        /// <summary>The intrinsic function Fn::Indent adjust the indentation of the string.</summary>
        /// <param name="str">Strings that need to be indented.</param>
        /// <param name="level">Indentation level.</param>
        /// <param name="indent">Optional, defaults to 2 for two Spaces per level, in the range [0,4].</param>
        [JsiiMethod(name: "indent", returnsJson: "{\"type\":{\"primitive\":\"string\"}}", parametersJson: "[{\"docs\":{\"summary\":\"Strings that need to be indented.\"},\"name\":\"str\",\"type\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}},{\"docs\":{\"remarks\":\"The range is [0,20].\",\"summary\":\"Indentation level.\"},\"name\":\"level\",\"type\":{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}},{\"docs\":{\"summary\":\"Optional, defaults to 2 for two Spaces per level, in the range [0,4].\"},\"name\":\"indent\",\"optional\":true,\"type\":{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}}]")]
        public static string Indent(object str, object level, object? indent = null)
        {
            if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
            {
                switch (str)
                {
                    case string cast_8c25cb:
                        break;
                    case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_8c25cb:
                        break;
                    case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_8c25cb:
                        // Not enough information to type-check...
                        break;
                    case null:
                        throw new System.ArgumentException($"Expected argument {nameof(str)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(str));
                    default:
                        throw new System.ArgumentException($"Expected argument {nameof(str)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {str.GetType().FullName}", nameof(str));
                }
                switch (level)
                {
                    case double cast_008177:
                        break;
                    case byte cast_008177:
                        break;
                    case decimal cast_008177:
                        break;
                    case float cast_008177:
                        break;
                    case int cast_008177:
                        break;
                    case long cast_008177:
                        break;
                    case sbyte cast_008177:
                        break;
                    case short cast_008177:
                        break;
                    case uint cast_008177:
                        break;
                    case ulong cast_008177:
                        break;
                    case ushort cast_008177:
                        break;
                    case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_008177:
                        break;
                    case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_008177:
                        // Not enough information to type-check...
                        break;
                    case null:
                        throw new System.ArgumentException($"Expected argument {nameof(level)} to be one of: double, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(level));
                    default:
                        throw new System.ArgumentException($"Expected argument {nameof(level)} to be one of: double, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {level.GetType().FullName}", nameof(level));
                }
                switch (indent)
                {
                    case double cast_7f113a:
                        break;
                    case byte cast_7f113a:
                        break;
                    case decimal cast_7f113a:
                        break;
                    case float cast_7f113a:
                        break;
                    case int cast_7f113a:
                        break;
                    case long cast_7f113a:
                        break;
                    case sbyte cast_7f113a:
                        break;
                    case short cast_7f113a:
                        break;
                    case uint cast_7f113a:
                        break;
                    case ulong cast_7f113a:
                        break;
                    case ushort cast_7f113a:
                        break;
                    case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_7f113a:
                        break;
                    case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_7f113a:
                        // Not enough information to type-check...
                        break;
                    case null:
                        break;
                    default:
                        throw new System.ArgumentException($"Expected argument {nameof(indent)} to be one of: double, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {indent.GetType().FullName}", nameof(indent));
                }
            }
            return InvokeStaticMethod<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.Fn), new System.Type[]{typeof(object), typeof(object), typeof(object)}, new object?[]{str, level, indent})!;
        }

        /// <summary>Returns the index of the item in the list.</summary>
        /// <param name="itemToFindIndex">The item to find in the list.</param>
        /// <param name="itemList">The list to find the item in.</param>
        [JsiiMethod(name: "index", returnsJson: "{\"type\":{\"primitive\":\"string\"}}", parametersJson: "[{\"docs\":{\"summary\":\"The item to find in the list.\"},\"name\":\"itemToFindIndex\",\"type\":{\"primitive\":\"any\"}},{\"docs\":{\"summary\":\"The list to find the item in.\"},\"name\":\"itemList\",\"type\":{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}}]")]
        public static string Index(object itemToFindIndex, object itemList)
        {
            if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
            {
                switch (itemList)
                {
                    case object[] cast_9dda49:
                        break;
                    case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_9dda49:
                        break;
                    case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_9dda49:
                        // Not enough information to type-check...
                        break;
                    case null:
                        throw new System.ArgumentException($"Expected argument {nameof(itemList)} to be one of: object[], {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(itemList));
                    default:
                        throw new System.ArgumentException($"Expected argument {nameof(itemList)} to be one of: object[], {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {itemList.GetType().FullName}", nameof(itemList));
                }
            }
            return InvokeStaticMethod<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.Fn), new System.Type[]{typeof(object), typeof(object)}, new object[]{itemToFindIndex, itemList})!;
        }

        /// <summary>The intrinsic function ``Fn::Join`` appends a set of values into a single value, separated by the specified delimiter.</summary>
        /// <param name="delimiter">The value you want to occur between fragments.</param>
        /// <param name="listOfValues">The list of values you want combined.</param>
        /// <returns>a token represented as a string</returns>
        /// <remarks>
        /// If a delimiter is the empty
        /// string, the set of values are concatenated with no delimiter.
        /// </remarks>
        [JsiiMethod(name: "join", returnsJson: "{\"type\":{\"primitive\":\"string\"}}", parametersJson: "[{\"docs\":{\"remarks\":\"The\ndelimiter will occur between fragments only. It will not terminate the\nfinal value.\",\"summary\":\"The value you want to occur between fragments.\"},\"name\":\"delimiter\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"The list of values you want combined.\"},\"name\":\"listOfValues\",\"type\":{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}}]")]
        public static string Join(string delimiter, object[] listOfValues)
        {
            if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
            {
                for (var __idx_7506d4 = 0 ; __idx_7506d4 < listOfValues.Length ; __idx_7506d4++)
                {
                    switch (listOfValues[__idx_7506d4])
                    {
                        case string cast_171a22:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_171a22:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_171a22:
                            // Not enough information to type-check...
                            break;
                        case null:
                            throw new System.ArgumentException($"Expected argument {nameof(listOfValues)}[{__idx_7506d4}] to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(listOfValues));
                        default:
                            throw new System.ArgumentException($"Expected argument {nameof(listOfValues)}[{__idx_7506d4}] to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {listOfValues[__idx_7506d4].GetType().FullName}", nameof(listOfValues));
                    }
                }
            }
            return InvokeStaticMethod<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.Fn), new System.Type[]{typeof(string), typeof(object[])}, new object[]{delimiter, listOfValues})!;
        }

        [JsiiMethod(name: "jq", returnsJson: "{\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}}", parametersJson: "[{\"name\":\"method\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"script\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"inputString\",\"type\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}}]")]
        public static AlibabaCloud.SDK.ROS.CDK.Core.IResolvable Jq(string method, string script, object inputString)
        {
            if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
            {
                switch (inputString)
                {
                    case string cast_cad069:
                        break;
                    case System.Collections.Generic.IDictionary<string, object> cast_cad069:
                        break;
                    case null:
                        throw new System.ArgumentException($"Expected argument {nameof(inputString)} to be one of: string, System.Collections.Generic.IDictionary<string, object>; received null", nameof(inputString));
                    default:
                        throw new System.ArgumentException($"Expected argument {nameof(inputString)} to be one of: string, System.Collections.Generic.IDictionary<string, object>; received {inputString.GetType().FullName}", nameof(inputString));
                }
            }
            return InvokeStaticMethod<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.Fn), new System.Type[]{typeof(string), typeof(string), typeof(object)}, new object[]{method, script, inputString})!;
        }

        /// <summary>Returns the length of the object.</summary>
        /// <param name="obj">An object whose length needs to be computed.</param>
        [JsiiMethod(name: "lengthOf", returnsJson: "{\"type\":{\"primitive\":\"string\"}}", parametersJson: "[{\"docs\":{\"remarks\":\"Three types are supported: strings, lists, and dictionaries.\",\"summary\":\"An object whose length needs to be computed.\"},\"name\":\"obj\",\"type\":{\"primitive\":\"any\"}}]")]
        public static string LengthOf(object obj)
        {
            return InvokeStaticMethod<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.Fn), new System.Type[]{typeof(object)}, new object[]{obj})!;
        }

        [JsiiMethod(name: "listMerge", returnsJson: "{\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}}", parametersJson: "[{\"name\":\"valueList\",\"type\":{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}}]")]
        public static AlibabaCloud.SDK.ROS.CDK.Core.IResolvable ListMerge(object[] valueList)
        {
            if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
            {
                for (var __idx_7313ea = 0 ; __idx_7313ea < valueList.Length ; __idx_7313ea++)
                {
                    switch (valueList[__idx_7313ea])
                    {
                        case object[] cast_0a7939:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_0a7939:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_0a7939:
                            // Not enough information to type-check...
                            break;
                        case null:
                            throw new System.ArgumentException($"Expected argument {nameof(valueList)}[{__idx_7313ea}] to be one of: object[], {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(valueList));
                        default:
                            throw new System.ArgumentException($"Expected argument {nameof(valueList)}[{__idx_7313ea}] to be one of: object[], {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {valueList[__idx_7313ea].GetType().FullName}", nameof(valueList));
                    }
                }
            }
            return InvokeStaticMethod<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.Fn), new System.Type[]{typeof(object[])}, new object[]{valueList})!;
        }

        /// <summary>The intrinsic function Fn::MarketplaceImage returns the default image ID of the specified cloud marketplace image product Code.</summary>
        /// <param name="imageProductCode">The product code of the cloud marketplace image.</param>
        [JsiiMethod(name: "marketplaceImage", returnsJson: "{\"type\":{\"primitive\":\"string\"}}", parametersJson: "[{\"docs\":{\"summary\":\"The product code of the cloud marketplace image.\"},\"name\":\"imageProductCode\",\"type\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}}]")]
        public static string MarketplaceImage(object imageProductCode)
        {
            if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
            {
                switch (imageProductCode)
                {
                    case string cast_48ad40:
                        break;
                    case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_48ad40:
                        break;
                    case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_48ad40:
                        // Not enough information to type-check...
                        break;
                    case null:
                        throw new System.ArgumentException($"Expected argument {nameof(imageProductCode)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(imageProductCode));
                    default:
                        throw new System.ArgumentException($"Expected argument {nameof(imageProductCode)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {imageProductCode.GetType().FullName}", nameof(imageProductCode));
                }
            }
            return InvokeStaticMethod<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.Fn), new System.Type[]{typeof(object)}, new object[]{imageProductCode})!;
        }

        /// <summary>Returns true if a specified string matches a specified pattern.</summary>
        /// <param name="pattern">A regular expression in string form.</param>
        /// <param name="value">The string to match.</param>
        [JsiiMethod(name: "matchPattern", returnsJson: "{\"type\":{\"primitive\":\"string\"}}", parametersJson: "[{\"docs\":{\"summary\":\"A regular expression in string form.\"},\"name\":\"pattern\",\"type\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}},{\"docs\":{\"summary\":\"The string to match.\"},\"name\":\"value\",\"type\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}}]")]
        public static string MatchPattern(object pattern, object @value)
        {
            if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
            {
                switch (pattern)
                {
                    case string cast_1fd38d:
                        break;
                    case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_1fd38d:
                        break;
                    case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_1fd38d:
                        // Not enough information to type-check...
                        break;
                    case null:
                        throw new System.ArgumentException($"Expected argument {nameof(pattern)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(pattern));
                    default:
                        throw new System.ArgumentException($"Expected argument {nameof(pattern)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {pattern.GetType().FullName}", nameof(pattern));
                }
                switch (@value)
                {
                    case string cast_2ed7d7:
                        break;
                    case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_2ed7d7:
                        break;
                    case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_2ed7d7:
                        // Not enough information to type-check...
                        break;
                    case null:
                        throw new System.ArgumentException($"Expected argument {nameof(@value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(@value));
                    default:
                        throw new System.ArgumentException($"Expected argument {nameof(@value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {@value.GetType().FullName}", nameof(@value));
                }
            }
            return InvokeStaticMethod<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.Fn), new System.Type[]{typeof(object), typeof(object)}, new object[]{pattern, @value})!;
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
            if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
            {
                switch (index)
                {
                    case string cast_1bc04b:
                        break;
                    case double cast_1bc04b:
                        break;
                    case byte cast_1bc04b:
                        break;
                    case decimal cast_1bc04b:
                        break;
                    case float cast_1bc04b:
                        break;
                    case int cast_1bc04b:
                        break;
                    case long cast_1bc04b:
                        break;
                    case sbyte cast_1bc04b:
                        break;
                    case short cast_1bc04b:
                        break;
                    case uint cast_1bc04b:
                        break;
                    case ulong cast_1bc04b:
                        break;
                    case ushort cast_1bc04b:
                        break;
                    case null:
                        throw new System.ArgumentException($"Expected argument {nameof(index)} to be one of: string, double; received null", nameof(index));
                    default:
                        throw new System.ArgumentException($"Expected argument {nameof(index)} to be one of: string, double; received {index.GetType().FullName}", nameof(index));
                }
            }
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
