using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>How to resolve tokens.</summary>
    [JsiiInterface(nativeType: typeof(ITokenResolver), fullyQualifiedName: "@alicloud/ros-cdk-core.ITokenResolver")]
    public interface ITokenResolver
    {
        /// <summary>Resolve a tokenized list.</summary>
        [JsiiMethod(name: "resolveList", returnsJson: "{\"type\":{\"primitive\":\"any\"}}", parametersJson: "[{\"name\":\"l\",\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}},{\"name\":\"context\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.IResolveContext\"}}]")]
        object ResolveList(string[] l, AlibabaCloud.SDK.ROS.CDK.Core.IResolveContext context);
        /// <summary>Resolve a string with at least one stringified token in it&#xD; &#xD; (May use concatenation).</summary>
        [JsiiMethod(name: "resolveString", returnsJson: "{\"type\":{\"primitive\":\"any\"}}", parametersJson: "[{\"name\":\"s\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.TokenizedStringFragments\"}},{\"name\":\"context\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.IResolveContext\"}}]")]
        object ResolveString(AlibabaCloud.SDK.ROS.CDK.Core.TokenizedStringFragments s, AlibabaCloud.SDK.ROS.CDK.Core.IResolveContext context);
        /// <summary>Resolve a single token.</summary>
        [JsiiMethod(name: "resolveToken", returnsJson: "{\"type\":{\"primitive\":\"any\"}}", parametersJson: "[{\"name\":\"t\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}},{\"name\":\"context\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.IResolveContext\"}},{\"name\":\"postProcessor\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.IPostProcessor\"}}]")]
        object ResolveToken(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable t, AlibabaCloud.SDK.ROS.CDK.Core.IResolveContext context, AlibabaCloud.SDK.ROS.CDK.Core.IPostProcessor postProcessor);

        /// <summary>How to resolve tokens.</summary>
        [JsiiTypeProxy(nativeType: typeof(ITokenResolver), fullyQualifiedName: "@alicloud/ros-cdk-core.ITokenResolver")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Core.ITokenResolver
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Resolve a tokenized list.</summary>
            [JsiiMethod(name: "resolveList", returnsJson: "{\"type\":{\"primitive\":\"any\"}}", parametersJson: "[{\"name\":\"l\",\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}},{\"name\":\"context\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.IResolveContext\"}}]")]
            public object ResolveList(string[] l, AlibabaCloud.SDK.ROS.CDK.Core.IResolveContext context)
            {
                return InvokeInstanceMethod<object>(new System.Type[]{typeof(string[]), typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolveContext)}, new object[]{l, context})!;
            }

            /// <summary>Resolve a string with at least one stringified token in it&#xD; &#xD; (May use concatenation).</summary>
            [JsiiMethod(name: "resolveString", returnsJson: "{\"type\":{\"primitive\":\"any\"}}", parametersJson: "[{\"name\":\"s\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.TokenizedStringFragments\"}},{\"name\":\"context\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.IResolveContext\"}}]")]
            public object ResolveString(AlibabaCloud.SDK.ROS.CDK.Core.TokenizedStringFragments s, AlibabaCloud.SDK.ROS.CDK.Core.IResolveContext context)
            {
                return InvokeInstanceMethod<object>(new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Core.TokenizedStringFragments), typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolveContext)}, new object[]{s, context})!;
            }

            /// <summary>Resolve a single token.</summary>
            [JsiiMethod(name: "resolveToken", returnsJson: "{\"type\":{\"primitive\":\"any\"}}", parametersJson: "[{\"name\":\"t\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}},{\"name\":\"context\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.IResolveContext\"}},{\"name\":\"postProcessor\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.IPostProcessor\"}}]")]
            public object ResolveToken(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable t, AlibabaCloud.SDK.ROS.CDK.Core.IResolveContext context, AlibabaCloud.SDK.ROS.CDK.Core.IPostProcessor postProcessor)
            {
                return InvokeInstanceMethod<object>(new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable), typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolveContext), typeof(AlibabaCloud.SDK.ROS.CDK.Core.IPostProcessor)}, new object[]{t, context, postProcessor})!;
            }
        }
    }
}
