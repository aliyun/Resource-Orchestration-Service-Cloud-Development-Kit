using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>Fragments of a concatenated string containing stringified Tokens.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Core.TokenizedStringFragments), fullyQualifiedName: "@alicloud/ros-cdk-core.TokenizedStringFragments")]
    public class TokenizedStringFragments : DeputyBase
    {
        public TokenizedStringFragments(): base(_MakeDeputyProps())
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps()
        {
            return new DeputyProps(System.Array.Empty<object?>());
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected TokenizedStringFragments(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected TokenizedStringFragments(DeputyProps props): base(props)
        {
        }

        [JsiiMethod(name: "addIntrinsic", parametersJson: "[{\"name\":\"value\",\"type\":{\"primitive\":\"any\"}}]")]
        public virtual void AddIntrinsic(object @value)
        {
            InvokeInstanceVoidMethod(new System.Type[]{typeof(object)}, new object[]{@value});
        }

        [JsiiMethod(name: "addLiteral", parametersJson: "[{\"name\":\"lit\",\"type\":{\"primitive\":\"any\"}}]")]
        public virtual void AddLiteral(object lit)
        {
            InvokeInstanceVoidMethod(new System.Type[]{typeof(object)}, new object[]{lit});
        }

        [JsiiMethod(name: "addToken", parametersJson: "[{\"name\":\"token\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}}]")]
        public virtual void AddToken(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable token)
        {
            InvokeInstanceVoidMethod(new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable)}, new object[]{token});
        }

        /// <summary>Combine the string fragments using the given joiner.</summary>
        /// <remarks>
        /// If there are any
        /// </remarks>
        [JsiiMethod(name: "join", returnsJson: "{\"type\":{\"primitive\":\"any\"}}", parametersJson: "[{\"name\":\"concat\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.IFragmentConcatenator\"}}]")]
        public virtual object Join(AlibabaCloud.SDK.ROS.CDK.Core.IFragmentConcatenator concat)
        {
            return InvokeInstanceMethod<object>(new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Core.IFragmentConcatenator)}, new object[]{concat})!;
        }

        /// <summary>Apply a transformation function to all tokens in the string.</summary>
        [JsiiMethod(name: "mapTokens", returnsJson: "{\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.TokenizedStringFragments\"}}", parametersJson: "[{\"name\":\"mapper\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.ITokenMapper\"}}]")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.TokenizedStringFragments MapTokens(AlibabaCloud.SDK.ROS.CDK.Core.ITokenMapper mapper)
        {
            return InvokeInstanceMethod<AlibabaCloud.SDK.ROS.CDK.Core.TokenizedStringFragments>(new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Core.ITokenMapper)}, new object[]{mapper})!;
        }

        [JsiiProperty(name: "firstValue", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object FirstValue
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "length", typeJson: "{\"primitive\":\"number\"}")]
        public virtual double Length
        {
            get => GetInstanceProperty<double>()!;
        }

        /// <summary>Return all Tokens from this string.</summary>
        [JsiiProperty(name: "tokens", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},\"kind\":\"array\"}}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable[] Tokens
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable[]>()!;
        }

        [JsiiOptional]
        [JsiiProperty(name: "firstToken", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}", isOptional: true)]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable? FirstToken
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable?>();
        }
    }
}
