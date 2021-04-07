using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>Options to the resolve() operation.</summary>
    /// <remarks>
    /// NOT the same as the ResolveContext; ResolveContext is exposed to Token
    /// implementors and resolution hooks, whereas this struct is just to bundle
    /// a number of things that would otherwise be arguments to resolve() in a
    /// readable way.
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IResolveOptions), fullyQualifiedName: "@alicloud/ros-cdk-core.ResolveOptions")]
    public interface IResolveOptions
    {
        /// <summary>The resolver to apply to any resolvable tokens found.</summary>
        [JsiiProperty(name: "resolver", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.ITokenResolver\"}")]
        AlibabaCloud.SDK.ROS.CDK.Core.ITokenResolver Resolver
        {
            get;
        }

        /// <summary>The scope from which resolution is performed.</summary>
        [JsiiProperty(name: "scope", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IConstruct\"}")]
        AlibabaCloud.SDK.ROS.CDK.Core.IConstruct Scope
        {
            get;
        }

        /// <summary>Whether the resolution is being executed during the prepare phase or not.</summary>
        /// <remarks>
        /// <strong>Default</strong>: false
        /// </remarks>
        [JsiiProperty(name: "preparing", typeJson: "{\"primitive\":\"boolean\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        bool? Preparing
        {
            get
            {
                return null;
            }
        }

        /// <summary>Options to the resolve() operation.</summary>
        /// <remarks>
        /// NOT the same as the ResolveContext; ResolveContext is exposed to Token
        /// implementors and resolution hooks, whereas this struct is just to bundle
        /// a number of things that would otherwise be arguments to resolve() in a
        /// readable way.
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IResolveOptions), fullyQualifiedName: "@alicloud/ros-cdk-core.ResolveOptions")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Core.IResolveOptions
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>The resolver to apply to any resolvable tokens found.</summary>
            [JsiiProperty(name: "resolver", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.ITokenResolver\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.ITokenResolver Resolver
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.ITokenResolver>()!;
            }

            /// <summary>The scope from which resolution is performed.</summary>
            [JsiiProperty(name: "scope", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IConstruct\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.IConstruct Scope
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IConstruct>()!;
            }

            /// <summary>Whether the resolution is being executed during the prepare phase or not.</summary>
            /// <remarks>
            /// <strong>Default</strong>: false
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "preparing", typeJson: "{\"primitive\":\"boolean\"}", isOptional: true)]
            public bool? Preparing
            {
                get => GetInstanceProperty<bool?>();
            }
        }
    }
}
