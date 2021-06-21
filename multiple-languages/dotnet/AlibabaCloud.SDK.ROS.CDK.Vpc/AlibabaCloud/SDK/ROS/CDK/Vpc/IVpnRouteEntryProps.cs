using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `ALIYUN::VPC::VpnRouteEntry`.</summary>
    [JsiiInterface(nativeType: typeof(IVpnRouteEntryProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.VpnRouteEntryProps")]
    public interface IVpnRouteEntryProps
    {
        /// <summary>Property nextHop: The next hop of the destination route entry.</summary>
        [JsiiProperty(name: "nextHop", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object NextHop
        {
            get;
        }

        /// <summary>Property publishVpc: Indicates whether to publish the destination route to the VPC.</summary>
        /// <remarks>
        /// Valid values:
        /// true: Publish the destination route to the VPC.
        /// false: Do not publish the destination route to the VPC.
        /// </remarks>
        [JsiiProperty(name: "publishVpc", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PublishVpc
        {
            get;
        }

        /// <summary>Property routeDest: The destination CIDR block of the destination route.</summary>
        [JsiiProperty(name: "routeDest", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RouteDest
        {
            get;
        }

        /// <summary>Property vpnGatewayId: The ID of the VPN Gateway.</summary>
        [JsiiProperty(name: "vpnGatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VpnGatewayId
        {
            get;
        }

        /// <summary>Property weight: The weight of the destination route.</summary>
        /// <remarks>
        /// Valid values: 0|100.
        /// </remarks>
        [JsiiProperty(name: "weight", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Weight
        {
            get;
        }

        /// <summary>Property description: The description of the VPN destination route.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property overlayMode: The overlay mode.</summary>
        [JsiiProperty(name: "overlayMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? OverlayMode
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::VPC::VpnRouteEntry`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IVpnRouteEntryProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.VpnRouteEntryProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IVpnRouteEntryProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property nextHop: The next hop of the destination route entry.</summary>
            [JsiiProperty(name: "nextHop", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object NextHop
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property publishVpc: Indicates whether to publish the destination route to the VPC.</summary>
            /// <remarks>
            /// Valid values:
            /// true: Publish the destination route to the VPC.
            /// false: Do not publish the destination route to the VPC.
            /// </remarks>
            [JsiiProperty(name: "publishVpc", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PublishVpc
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property routeDest: The destination CIDR block of the destination route.</summary>
            [JsiiProperty(name: "routeDest", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RouteDest
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property vpnGatewayId: The ID of the VPN Gateway.</summary>
            [JsiiProperty(name: "vpnGatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VpnGatewayId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property weight: The weight of the destination route.</summary>
            /// <remarks>
            /// Valid values: 0|100.
            /// </remarks>
            [JsiiProperty(name: "weight", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Weight
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property description: The description of the VPN destination route.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property overlayMode: The overlay mode.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "overlayMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OverlayMode
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
