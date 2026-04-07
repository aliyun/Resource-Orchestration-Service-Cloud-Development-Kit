using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen
{
    /// <summary>Represents a `InterRegionTrafficQosPolicy`.</summary>
    [JsiiInterface(nativeType: typeof(IInterRegionTrafficQosPolicy), fullyQualifiedName: "@alicloud/ros-cdk-cen.IInterRegionTrafficQosPolicy")]
    public interface IInterRegionTrafficQosPolicy : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute BandwidthGuaranteeMode: The allocation mode of the guaranteed bandwidth.</summary>
        [JsiiProperty(name: "attrBandwidthGuaranteeMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrBandwidthGuaranteeMode
        {
            get;
        }

        /// <summary>Attribute InterRegionTrafficQosPolicyDescription: The description of the QoS policy.</summary>
        [JsiiProperty(name: "attrInterRegionTrafficQosPolicyDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInterRegionTrafficQosPolicyDescription
        {
            get;
        }

        /// <summary>Attribute InterRegionTrafficQosPolicyId: The ID of the QoS policy.</summary>
        [JsiiProperty(name: "attrInterRegionTrafficQosPolicyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInterRegionTrafficQosPolicyId
        {
            get;
        }

        /// <summary>Attribute InterRegionTrafficQosPolicyName: The name of the QoS policy.</summary>
        [JsiiProperty(name: "attrInterRegionTrafficQosPolicyName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInterRegionTrafficQosPolicyName
        {
            get;
        }

        /// <summary>Attribute TransitRouterAttachmentId: The ID of the inter-region connection.</summary>
        [JsiiProperty(name: "attrTransitRouterAttachmentId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTransitRouterAttachmentId
        {
            get;
        }

        /// <summary>Attribute TransitRouterId: The ID of the transit router.</summary>
        [JsiiProperty(name: "attrTransitRouterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTransitRouterId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cen.InterRegionTrafficQosPolicyProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Cen.IInterRegionTrafficQosPolicyProps Props
        {
            get;
        }

        /// <summary>Represents a `InterRegionTrafficQosPolicy`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IInterRegionTrafficQosPolicy), fullyQualifiedName: "@alicloud/ros-cdk-cen.IInterRegionTrafficQosPolicy")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cen.IInterRegionTrafficQosPolicy
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute BandwidthGuaranteeMode: The allocation mode of the guaranteed bandwidth.</summary>
            [JsiiProperty(name: "attrBandwidthGuaranteeMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrBandwidthGuaranteeMode
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InterRegionTrafficQosPolicyDescription: The description of the QoS policy.</summary>
            [JsiiProperty(name: "attrInterRegionTrafficQosPolicyDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInterRegionTrafficQosPolicyDescription
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InterRegionTrafficQosPolicyId: The ID of the QoS policy.</summary>
            [JsiiProperty(name: "attrInterRegionTrafficQosPolicyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInterRegionTrafficQosPolicyId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InterRegionTrafficQosPolicyName: The name of the QoS policy.</summary>
            [JsiiProperty(name: "attrInterRegionTrafficQosPolicyName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInterRegionTrafficQosPolicyName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TransitRouterAttachmentId: The ID of the inter-region connection.</summary>
            [JsiiProperty(name: "attrTransitRouterAttachmentId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTransitRouterAttachmentId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TransitRouterId: The ID of the transit router.</summary>
            [JsiiProperty(name: "attrTransitRouterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTransitRouterId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cen.InterRegionTrafficQosPolicyProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Cen.IInterRegionTrafficQosPolicyProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Cen.IInterRegionTrafficQosPolicyProps>()!;
            }

            /// <summary>The environment this resource belongs to.</summary>
            /// <remarks>
            /// For resources that are created and managed by the CDK
            /// (generally, those created by creating new class instances like Role, Bucket, etc.),
            /// this is always the same as the environment of the stack they belong to;
            /// however, for imported resources
            /// (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
            /// that might be different than the stack they were imported into.
            /// </remarks>
            [JsiiProperty(name: "env", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResourceEnvironment\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment Env
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment>()!;
            }

            /// <summary>The stack in which this resource is defined.</summary>
            [JsiiProperty(name: "stack", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.Stack\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.Stack Stack
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.Stack>()!;
            }

            /// <summary>The construct tree node for this construct.</summary>
            [JsiiProperty(name: "node", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.ConstructNode\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode Node
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode>()!;
            }
        }
    }
}
