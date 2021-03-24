using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>Represents a special or lazily-evaluated value.</summary>
    /// <remarks>
    /// Can be used to delay evaluation of a certain value in case, for example,
    /// that it requires some context or late-bound data. Can also be used to
    /// mark values that need special processing at document rendering time.
    /// 
    /// Tokens can be embedded into strings while retaining their original
    /// semantics.
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Core.Token), fullyQualifiedName: "@alicloud/ros-cdk-core.Token")]
    public class Token : DeputyBase
    {
        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Token(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Token(DeputyProps props): base(props)
        {
        }

        /// <summary>Return a resolvable representation of the given value.</summary>
        [JsiiMethod(name: "asAny", returnsJson: "{\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}}", parametersJson: "[{\"name\":\"value\",\"type\":{\"primitive\":\"any\"}}]")]
        public static AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AsAny(object @value)
        {
            return InvokeStaticMethod<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.Token), new System.Type[]{typeof(object)}, new object[]{@value})!;
        }

        /// <summary>Return a reversible list representation of this token.</summary>
        [JsiiMethod(name: "asList", returnsJson: "{\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}}", parametersJson: "[{\"name\":\"value\",\"type\":{\"primitive\":\"any\"}},{\"name\":\"options\",\"optional\":true,\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.EncodingOptions\"}}]")]
        public static string[] AsList(object @value, AlibabaCloud.SDK.ROS.CDK.Core.IEncodingOptions? options = null)
        {
            return InvokeStaticMethod<string[]>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.Token), new System.Type[]{typeof(object), typeof(AlibabaCloud.SDK.ROS.CDK.Core.IEncodingOptions)}, new object?[]{@value, options})!;
        }

        /// <summary>Return a reversible number representation of this token.</summary>
        [JsiiMethod(name: "asNumber", returnsJson: "{\"type\":{\"primitive\":\"number\"}}", parametersJson: "[{\"name\":\"value\",\"type\":{\"primitive\":\"any\"}}]")]
        public static double AsNumber(object @value)
        {
            return InvokeStaticMethod<double>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.Token), new System.Type[]{typeof(object)}, new object[]{@value})!;
        }

        /// <summary>Return a reversible string representation of this token&#xD; &#xD; If the Token is initialized with a literal, the stringified value of the&#xD; literal is returned.</summary>
        /// <remarks>
        /// Otherwise, a special quoted string representation
        /// of the Token is returned that can be embedded into other strings.
        /// 
        /// Strings with quoted Tokens in them can be restored back into
        /// complex values with the Tokens restored by calling <c>resolve()</c>
        /// on the string.
        /// </remarks>
        [JsiiMethod(name: "asString", returnsJson: "{\"type\":{\"primitive\":\"string\"}}", parametersJson: "[{\"name\":\"value\",\"type\":{\"primitive\":\"any\"}},{\"name\":\"options\",\"optional\":true,\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.EncodingOptions\"}}]")]
        public static string AsString(object @value, AlibabaCloud.SDK.ROS.CDK.Core.IEncodingOptions? options = null)
        {
            return InvokeStaticMethod<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.Token), new System.Type[]{typeof(object), typeof(AlibabaCloud.SDK.ROS.CDK.Core.IEncodingOptions)}, new object?[]{@value, options})!;
        }

        /// <summary>Returns true if obj represents an unresolved value&#xD; &#xD; One of these must be true:&#xD; &#xD; - `obj` is an IResolvable&#xD; - `obj` is a string containing at least one encoded `IResolvable`&#xD; - `obj` is either an encoded number or list&#xD; &#xD; This does NOT recurse into lists or objects to see if they&#xD; containing resolvables.</summary>
        /// <param name="obj">The object to test.</param>
        [JsiiMethod(name: "isUnresolved", returnsJson: "{\"type\":{\"primitive\":\"boolean\"}}", parametersJson: "[{\"docs\":{\"summary\":\"The object to test.\"},\"name\":\"obj\",\"type\":{\"primitive\":\"any\"}}]")]
        public static bool IsUnresolved(object obj)
        {
            return InvokeStaticMethod<bool>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.Token), new System.Type[]{typeof(object)}, new object[]{obj})!;
        }
    }
}
