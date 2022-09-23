using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>(experimental) Default resolver implementation.</summary>
    /// <remarks>
    /// <strong>Stability</strong>: Experimental
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Core.DefaultTokenResolver), fullyQualifiedName: "@alicloud/ros-cdk-core.DefaultTokenResolver", parametersJson: "[{\"name\":\"concat\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.IFragmentConcatenator\"}}]")]
    public class DefaultTokenResolver : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Core.ITokenResolver
    {
        /// <remarks>
        /// <strong>Stability</strong>: Experimental
        /// </remarks>
        public DefaultTokenResolver(AlibabaCloud.SDK.ROS.CDK.Core.IFragmentConcatenator concat): base(_MakeDeputyProps(concat))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.IFragmentConcatenator concat)
        {
            return new DeputyProps(new object?[]{concat});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected DefaultTokenResolver(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected DefaultTokenResolver(DeputyProps props): base(props)
        {
        }

        /// <summary>(experimental) Resolve a tokenized list.</summary>
        /// <remarks>
        /// <strong>Stability</strong>: Experimental
        /// </remarks>
        [JsiiMethod(name: "resolveList", returnsJson: "{\"type\":{\"primitive\":\"any\"}}", parametersJson: "[{\"name\":\"xs\",\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}},{\"name\":\"context\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.IResolveContext\"}}]")]
        public virtual object ResolveList(string[] xs, AlibabaCloud.SDK.ROS.CDK.Core.IResolveContext context)
        {
            return InvokeInstanceMethod<object>(new System.Type[]{typeof(string[]), typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolveContext)}, new object[]{xs, context})!;
        }

        /// <summary>(experimental) Resolve string fragments to Tokens.</summary>
        /// <remarks>
        /// <strong>Stability</strong>: Experimental
        /// </remarks>
        [JsiiMethod(name: "resolveString", returnsJson: "{\"type\":{\"primitive\":\"any\"}}", parametersJson: "[{\"name\":\"fragments\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.TokenizedStringFragments\"}},{\"name\":\"context\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.IResolveContext\"}}]")]
        public virtual object ResolveString(AlibabaCloud.SDK.ROS.CDK.Core.TokenizedStringFragments fragments, AlibabaCloud.SDK.ROS.CDK.Core.IResolveContext context)
        {
            return InvokeInstanceMethod<object>(new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Core.TokenizedStringFragments), typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolveContext)}, new object[]{fragments, context})!;
        }

        /// <summary>(experimental) Default Token resolution.</summary>
        /// <remarks>
        /// Resolve the Token, recurse into whatever it returns,
        /// then finally post-process it.
        ///
        /// <strong>Stability</strong>: Experimental
        /// </remarks>
        [JsiiMethod(name: "resolveToken", returnsJson: "{\"type\":{\"primitive\":\"any\"}}", parametersJson: "[{\"name\":\"t\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}},{\"name\":\"context\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.IResolveContext\"}},{\"name\":\"postProcessor\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.IPostProcessor\"}}]")]
        public virtual object ResolveToken(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable t, AlibabaCloud.SDK.ROS.CDK.Core.IResolveContext context, AlibabaCloud.SDK.ROS.CDK.Core.IPostProcessor postProcessor)
        {
            return InvokeInstanceMethod<object>(new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable), typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolveContext), typeof(AlibabaCloud.SDK.ROS.CDK.Core.IPostProcessor)}, new object[]{t, context, postProcessor})!;
        }
    }
}
