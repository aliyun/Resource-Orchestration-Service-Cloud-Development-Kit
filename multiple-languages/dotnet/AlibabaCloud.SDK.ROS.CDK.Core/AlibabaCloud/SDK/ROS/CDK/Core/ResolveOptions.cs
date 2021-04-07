using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    #pragma warning disable CS8618

    /// <summary>Options to the resolve() operation.</summary>
    /// <remarks>
    /// NOT the same as the ResolveContext; ResolveContext is exposed to Token
    /// implementors and resolution hooks, whereas this struct is just to bundle
    /// a number of things that would otherwise be arguments to resolve() in a
    /// readable way.
    /// </remarks>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-core.ResolveOptions")]
    public class ResolveOptions : AlibabaCloud.SDK.ROS.CDK.Core.IResolveOptions
    {
        /// <summary>The resolver to apply to any resolvable tokens found.</summary>
        [JsiiProperty(name: "resolver", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.ITokenResolver\"}", isOverride: true)]
        public AlibabaCloud.SDK.ROS.CDK.Core.ITokenResolver Resolver
        {
            get;
            set;
        }

        /// <summary>The scope from which resolution is performed.</summary>
        [JsiiProperty(name: "scope", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IConstruct\"}", isOverride: true)]
        public AlibabaCloud.SDK.ROS.CDK.Core.IConstruct Scope
        {
            get;
            set;
        }

        /// <summary>Whether the resolution is being executed during the prepare phase or not.</summary>
        /// <remarks>
        /// <strong>Default</strong>: false
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "preparing", typeJson: "{\"primitive\":\"boolean\"}", isOptional: true, isOverride: true)]
        public bool? Preparing
        {
            get;
            set;
        }
    }
}
