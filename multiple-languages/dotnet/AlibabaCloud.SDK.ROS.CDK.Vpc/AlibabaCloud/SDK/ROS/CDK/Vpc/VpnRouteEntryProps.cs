using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::VPC::VpnRouteEntry`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-vpc.VpnRouteEntryProps")]
    public class VpnRouteEntryProps : AlibabaCloud.SDK.ROS.CDK.Vpc.IVpnRouteEntryProps
    {
        /// <summary>Property nextHop: The next hop of the destination route entry.</summary>
        [JsiiProperty(name: "nextHop", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object NextHop
        {
            get;
            set;
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
            get;
            set;
        }

        /// <summary>Property routeDest: The destination CIDR block of the destination route.</summary>
        [JsiiProperty(name: "routeDest", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object RouteDest
        {
            get;
            set;
        }

        /// <summary>Property vpnGatewayId: The ID of the VPN Gateway.</summary>
        [JsiiProperty(name: "vpnGatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object VpnGatewayId
        {
            get;
            set;
        }

        /// <summary>Property weight: The weight of the destination route.</summary>
        /// <remarks>
        /// Valid values: 0|100.
        /// </remarks>
        [JsiiProperty(name: "weight", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Weight
        {
            get;
            set;
        }

        /// <summary>Property description: The description of the VPN destination route.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Description
        {
            get;
            set;
        }

        /// <summary>Property overlayMode: The overlay mode.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "overlayMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? OverlayMode
        {
            get;
            set;
        }
    }
}
