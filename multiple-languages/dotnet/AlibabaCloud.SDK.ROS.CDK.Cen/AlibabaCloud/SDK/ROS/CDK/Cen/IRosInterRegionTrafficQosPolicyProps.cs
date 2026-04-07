using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen
{
    /// <summary>Properties for defining a `RosInterRegionTrafficQosPolicy`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-interregiontrafficqospolicy
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosInterRegionTrafficQosPolicyProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.RosInterRegionTrafficQosPolicyProps")]
    public interface IRosInterRegionTrafficQosPolicyProps
    {
        /// <remarks>
        /// <strong>Property</strong>: transitRouterAttachmentId: The ID of the inter-region connection.
        /// </remarks>
        [JsiiProperty(name: "transitRouterAttachmentId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TransitRouterAttachmentId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: transitRouterId: The ID of the transit router.
        /// </remarks>
        [JsiiProperty(name: "transitRouterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TransitRouterId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: bandwidthGuaranteeMode: The allocation mode of the guaranteed bandwidth. You can specify an absolute bandwidth value or a bandwidth percentage. Valid values:
        /// * byBandwidth: allocates an absolute bandwidth value for the QoS queue.
        /// * byBandwidthPercent (default): allocates a bandwidth percentage for the OoS queue.
        /// </remarks>
        [JsiiProperty(name: "bandwidthGuaranteeMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? BandwidthGuaranteeMode
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: interRegionTrafficQosPolicyDescription: The description of the QoS policy. This parameter is optional. If you enter a description, it must be 1 to 256 characters in length, and cannot start with http:\/\/ or https:\/\/.
        /// </remarks>
        [JsiiProperty(name: "interRegionTrafficQosPolicyDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InterRegionTrafficQosPolicyDescription
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: interRegionTrafficQosPolicyName: The name of the QoS policy. The name can be empty or 1 to 128 characters in length, and cannot start with http:\/\/ or https:\/\/.
        /// </remarks>
        [JsiiProperty(name: "interRegionTrafficQosPolicyName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InterRegionTrafficQosPolicyName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosInterRegionTrafficQosPolicy`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-interregiontrafficqospolicy
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosInterRegionTrafficQosPolicyProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.RosInterRegionTrafficQosPolicyProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cen.IRosInterRegionTrafficQosPolicyProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: transitRouterAttachmentId: The ID of the inter-region connection.
            /// </remarks>
            [JsiiProperty(name: "transitRouterAttachmentId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TransitRouterAttachmentId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: transitRouterId: The ID of the transit router.
            /// </remarks>
            [JsiiProperty(name: "transitRouterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TransitRouterId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: bandwidthGuaranteeMode: The allocation mode of the guaranteed bandwidth. You can specify an absolute bandwidth value or a bandwidth percentage. Valid values:
            /// * byBandwidth: allocates an absolute bandwidth value for the QoS queue.
            /// * byBandwidthPercent (default): allocates a bandwidth percentage for the OoS queue.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "bandwidthGuaranteeMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? BandwidthGuaranteeMode
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: interRegionTrafficQosPolicyDescription: The description of the QoS policy. This parameter is optional. If you enter a description, it must be 1 to 256 characters in length, and cannot start with http:\/\/ or https:\/\/.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "interRegionTrafficQosPolicyDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InterRegionTrafficQosPolicyDescription
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: interRegionTrafficQosPolicyName: The name of the QoS policy. The name can be empty or 1 to 128 characters in length, and cannot start with http:\/\/ or https:\/\/.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "interRegionTrafficQosPolicyName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InterRegionTrafficQosPolicyName
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
