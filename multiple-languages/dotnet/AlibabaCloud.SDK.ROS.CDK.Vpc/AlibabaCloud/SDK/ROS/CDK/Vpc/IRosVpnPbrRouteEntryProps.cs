using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `RosVpnPbrRouteEntry`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vpnpbrrouteentry
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosVpnPbrRouteEntryProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosVpnPbrRouteEntryProps")]
    public interface IRosVpnPbrRouteEntryProps
    {
        /// <remarks>
        /// <strong>Property</strong>: nextHop: The next hop of the destination route entry.
        /// </remarks>
        [JsiiProperty(name: "nextHop", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object NextHop
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: publishVpc: Indicates whether to publish the destination route to the VPC. Valid values:
        /// true: Publish the destination route to the VPC.
        /// false: Do not publish the destination route to the VPC.
        /// </remarks>
        [JsiiProperty(name: "publishVpc", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PublishVpc
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: routeDest: The destination CIDR block of the destination route.
        /// </remarks>
        [JsiiProperty(name: "routeDest", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RouteDest
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: routeSource: The source CIDR block of the policy-based route.
        /// </remarks>
        [JsiiProperty(name: "routeSource", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RouteSource
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: vpnGatewayId: The ID of the VPN Gateway.
        /// </remarks>
        [JsiiProperty(name: "vpnGatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VpnGatewayId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: weight: The weight of the destination route. Valid values: 0|100.
        /// </remarks>
        [JsiiProperty(name: "weight", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Weight
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: The description of the VPN destination route.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: overlayMode: The overlay mode.
        /// </remarks>
        [JsiiProperty(name: "overlayMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? OverlayMode
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosVpnPbrRouteEntry`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vpnpbrrouteentry
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosVpnPbrRouteEntryProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosVpnPbrRouteEntryProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IRosVpnPbrRouteEntryProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: nextHop: The next hop of the destination route entry.
            /// </remarks>
            [JsiiProperty(name: "nextHop", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object NextHop
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: publishVpc: Indicates whether to publish the destination route to the VPC. Valid values:
            /// true: Publish the destination route to the VPC.
            /// false: Do not publish the destination route to the VPC.
            /// </remarks>
            [JsiiProperty(name: "publishVpc", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PublishVpc
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: routeDest: The destination CIDR block of the destination route.
            /// </remarks>
            [JsiiProperty(name: "routeDest", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RouteDest
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: routeSource: The source CIDR block of the policy-based route.
            /// </remarks>
            [JsiiProperty(name: "routeSource", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RouteSource
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: vpnGatewayId: The ID of the VPN Gateway.
            /// </remarks>
            [JsiiProperty(name: "vpnGatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VpnGatewayId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: weight: The weight of the destination route. Valid values: 0|100.
            /// </remarks>
            [JsiiProperty(name: "weight", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Weight
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: description: The description of the VPN destination route.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: overlayMode: The overlay mode.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "overlayMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OverlayMode
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
