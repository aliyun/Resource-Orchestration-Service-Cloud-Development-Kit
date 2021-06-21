using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::VPC::VpnRouteEntry`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-vpc.RosVpnRouteEntryProps")]
    public class RosVpnRouteEntryProps : AlibabaCloud.SDK.ROS.CDK.Vpc.IRosVpnRouteEntryProps
    {
        /// <remarks>
        /// <strong>Property</strong>: nextHop: The next hop of the destination route entry.
        /// </remarks>
        [JsiiProperty(name: "nextHop", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object NextHop
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: publishVpc: Indicates whether to publish the destination route to the VPC. Valid values:
        /// true: Publish the destination route to the VPC.
        /// false: Do not publish the destination route to the VPC.
        /// </remarks>
        [JsiiProperty(name: "publishVpc", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object PublishVpc
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: routeDest: The destination CIDR block of the destination route.
        /// </remarks>
        [JsiiProperty(name: "routeDest", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object RouteDest
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: vpnGatewayId: The ID of the VPN Gateway.
        /// </remarks>
        [JsiiProperty(name: "vpnGatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object VpnGatewayId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: weight: The weight of the destination route. Valid values: 0|100.
        /// </remarks>
        [JsiiProperty(name: "weight", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object Weight
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: The description of the VPN destination route.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Description
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: overlayMode: The overlay mode.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "overlayMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? OverlayMode
        {
            get;
            set;
        }
    }
}
