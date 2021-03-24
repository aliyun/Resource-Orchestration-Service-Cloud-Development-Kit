using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::VPC::VpnConnection`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-vpc.VpnConnectionProps")]
    public class VpnConnectionProps : AlibabaCloud.SDK.ROS.CDK.Vpc.IVpnConnectionProps
    {
        /// <summary>Property customerGatewayId: The ID of the user gateway.</summary>
        [JsiiProperty(name: "customerGatewayId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string CustomerGatewayId
        {
            get;
            set;
        }

        /// <summary>Property localSubnet: A network segment on the VPC side that needs to be interconnected with the local IDC for the second phase negotiation.</summary>
        /// <remarks>
        /// Multiple network segments are separated by commas, for example: 192.168.1.0/24, 192.168.2.0/24.
        /// </remarks>
        [JsiiProperty(name: "localSubnet", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string LocalSubnet
        {
            get;
            set;
        }

        /// <summary>Property remoteSubnet: The network segment of the local IDC is used for the second phase negotiation.</summary>
        /// <remarks>
        /// Multiple network segments are separated by commas, for example: 192.168.3.0/24, 192.168.4.0/24.
        /// </remarks>
        [JsiiProperty(name: "remoteSubnet", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string RemoteSubnet
        {
            get;
            set;
        }

        /// <summary>Property vpnGatewayId: ID of the VPN gateway.</summary>
        [JsiiProperty(name: "vpnGatewayId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string VpnGatewayId
        {
            get;
            set;
        }

        /// <summary>Property effectImmediately: Whether to delete the currently negotiated IPsec tunnel and re-initiate the negotiation.</summary>
        /// <remarks>
        /// Value:
        /// True: Negotiate immediately after the configuration is complete.
        /// False (default): Negotiate when traffic enters.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "effectImmediately", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? EffectImmediately
        {
            get;
            set;
        }

        /// <summary>Property healthCheckConfig: Whether to enable the health check configuration.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "healthCheckConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-vpc.RosVpnConnection.HealthCheckConfigProperty\"}]}}", isOptional: true, isOverride: true)]
        public object? HealthCheckConfig
        {
            get;
            set;
        }

        /// <summary>Property ikeConfig: Configuration information for the first phase of negotiation.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "ikeConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-vpc.RosVpnConnection.IkeConfigProperty\"}]}}", isOptional: true, isOverride: true)]
        public object? IkeConfig
        {
            get;
            set;
        }

        /// <summary>Property ipsecConfig: Configuration information for the second phase negotiation.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "ipsecConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-vpc.RosVpnConnection.IpsecConfigProperty\"}]}}", isOptional: true, isOverride: true)]
        public object? IpsecConfig
        {
            get;
            set;
        }

        /// <summary>Property name: The name of the IPsec connection.</summary>
        /// <remarks>
        /// The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_) and dashes (-), but cannot start with http:// or https:// .
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Name
        {
            get;
            set;
        }
    }
}
