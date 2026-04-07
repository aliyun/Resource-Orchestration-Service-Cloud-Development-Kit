using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen
{
    /// <summary>Properties for defining a `InterRegionTrafficQosPolicy`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-interregiontrafficqospolicy
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IInterRegionTrafficQosPolicyProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.InterRegionTrafficQosPolicyProps")]
    public interface IInterRegionTrafficQosPolicyProps
    {
        /// <summary>Property transitRouterAttachmentId: The ID of the inter-region connection.</summary>
        [JsiiProperty(name: "transitRouterAttachmentId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TransitRouterAttachmentId
        {
            get;
        }

        /// <summary>Property transitRouterId: The ID of the transit router.</summary>
        [JsiiProperty(name: "transitRouterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TransitRouterId
        {
            get;
        }

        /// <summary>Property bandwidthGuaranteeMode: The allocation mode of the guaranteed bandwidth.</summary>
        /// <remarks>
        /// You can specify an absolute bandwidth value or a bandwidth percentage. Valid values:
        ///
        /// <list type="bullet">
        /// <description>byBandwidth: allocates an absolute bandwidth value for the QoS queue.</description>
        /// <description>byBandwidthPercent (default): allocates a bandwidth percentage for the OoS queue.</description>
        /// </list>
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

        /// <summary>Property interRegionTrafficQosPolicyDescription: The description of the QoS policy.</summary>
        /// <remarks>
        /// This parameter is optional. If you enter a description, it must be 1 to 256 characters in length, and cannot start with http:// or https://.
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

        /// <summary>Property interRegionTrafficQosPolicyName: The name of the QoS policy.</summary>
        /// <remarks>
        /// The name can be empty or 1 to 128 characters in length, and cannot start with http:// or https://.
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

        /// <summary>Properties for defining a `InterRegionTrafficQosPolicy`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-interregiontrafficqospolicy
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IInterRegionTrafficQosPolicyProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.InterRegionTrafficQosPolicyProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cen.IInterRegionTrafficQosPolicyProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property transitRouterAttachmentId: The ID of the inter-region connection.</summary>
            [JsiiProperty(name: "transitRouterAttachmentId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TransitRouterAttachmentId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property transitRouterId: The ID of the transit router.</summary>
            [JsiiProperty(name: "transitRouterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TransitRouterId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property bandwidthGuaranteeMode: The allocation mode of the guaranteed bandwidth.</summary>
            /// <remarks>
            /// You can specify an absolute bandwidth value or a bandwidth percentage. Valid values:
            ///
            /// <list type="bullet">
            /// <description>byBandwidth: allocates an absolute bandwidth value for the QoS queue.</description>
            /// <description>byBandwidthPercent (default): allocates a bandwidth percentage for the OoS queue.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "bandwidthGuaranteeMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? BandwidthGuaranteeMode
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property interRegionTrafficQosPolicyDescription: The description of the QoS policy.</summary>
            /// <remarks>
            /// This parameter is optional. If you enter a description, it must be 1 to 256 characters in length, and cannot start with http:// or https://.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "interRegionTrafficQosPolicyDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InterRegionTrafficQosPolicyDescription
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property interRegionTrafficQosPolicyName: The name of the QoS policy.</summary>
            /// <remarks>
            /// The name can be empty or 1 to 128 characters in length, and cannot start with http:// or https://.
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
