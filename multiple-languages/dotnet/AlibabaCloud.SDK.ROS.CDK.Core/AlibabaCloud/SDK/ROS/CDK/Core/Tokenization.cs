using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>Less oft-needed functions to manipulate Tokens.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Core.Tokenization), fullyQualifiedName: "@alicloud/ros-cdk-core.Tokenization")]
    public class Tokenization : DeputyBase
    {
        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Tokenization(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Tokenization(DeputyProps props): base(props)
        {
        }

        /// <summary>Return whether the given object is an IResolvable object&#xD; &#xD; This is different from Token.isUnresolved() which will also check for&#xD; encoded Tokens, whereas this method will only do a type check on the given&#xD; object.</summary>
        [JsiiMethod(name: "isResolvable", returnsJson: "{\"type\":{\"primitive\":\"boolean\"}}", parametersJson: "[{\"name\":\"obj\",\"type\":{\"primitive\":\"any\"}}]")]
        public static bool IsResolvable(object obj)
        {
            return InvokeStaticMethod<bool>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.Tokenization), new System.Type[]{typeof(object)}, new object[]{obj})!;
        }

        /// <summary>Resolves an object by evaluating all tokens and removing any undefined or empty objects or arrays.</summary>
        /// <param name="obj">The object to resolve.</param>
        /// <param name="options">Prefix key path components for diagnostics.</param>
        /// <remarks>
        /// Values can only be primitives, arrays or tokens. Other objects (i.e. with methods) will be rejected.
        /// </remarks>
        [JsiiMethod(name: "resolve", returnsJson: "{\"type\":{\"primitive\":\"any\"}}", parametersJson: "[{\"docs\":{\"summary\":\"The object to resolve.\"},\"name\":\"obj\",\"type\":{\"primitive\":\"any\"}},{\"docs\":{\"summary\":\"Prefix key path components for diagnostics.\"},\"name\":\"options\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.ResolveOptions\"}}]")]
        public static object Resolve(object obj, AlibabaCloud.SDK.ROS.CDK.Core.IResolveOptions options)
        {
            return InvokeStaticMethod<object>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.Tokenization), new System.Type[]{typeof(object), typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolveOptions)}, new object[]{obj, options})!;
        }

        /// <summary>Un-encode a Tokenized value from a list.</summary>
        [JsiiMethod(name: "reverseList", returnsJson: "{\"optional\":true,\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}}", parametersJson: "[{\"name\":\"l\",\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}}]")]
        public static AlibabaCloud.SDK.ROS.CDK.Core.IResolvable? ReverseList(string[] l)
        {
            return InvokeStaticMethod<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable?>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.Tokenization), new System.Type[]{typeof(string[])}, new object[]{l});
        }

        /// <summary>Un-encode a Tokenized value from a number.</summary>
        [JsiiMethod(name: "reverseNumber", returnsJson: "{\"optional\":true,\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}}", parametersJson: "[{\"name\":\"n\",\"type\":{\"primitive\":\"number\"}}]")]
        public static AlibabaCloud.SDK.ROS.CDK.Core.IResolvable? ReverseNumber(double n)
        {
            return InvokeStaticMethod<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable?>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.Tokenization), new System.Type[]{typeof(double)}, new object[]{n});
        }

        /// <summary>Un-encode a string potentially containing encoded tokens.</summary>
        [JsiiMethod(name: "reverseString", returnsJson: "{\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.TokenizedStringFragments\"}}", parametersJson: "[{\"name\":\"s\",\"type\":{\"primitive\":\"string\"}}]")]
        public static AlibabaCloud.SDK.ROS.CDK.Core.TokenizedStringFragments ReverseString(string s)
        {
            return InvokeStaticMethod<AlibabaCloud.SDK.ROS.CDK.Core.TokenizedStringFragments>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.Tokenization), new System.Type[]{typeof(string)}, new object[]{s})!;
        }

        /// <summary>Stringify a number directly or lazily if it's a Token.</summary>
        /// <remarks>
        /// If it is an object (i.e., { Ref: 'SomeLogicalId' }), return it as-is.
        /// </remarks>
        [JsiiMethod(name: "stringifyNumber", returnsJson: "{\"type\":{\"primitive\":\"string\"}}", parametersJson: "[{\"name\":\"x\",\"type\":{\"primitive\":\"number\"}}]")]
        public static string StringifyNumber(double x)
        {
            return InvokeStaticMethod<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.Tokenization), new System.Type[]{typeof(double)}, new object[]{x})!;
        }
    }
}
