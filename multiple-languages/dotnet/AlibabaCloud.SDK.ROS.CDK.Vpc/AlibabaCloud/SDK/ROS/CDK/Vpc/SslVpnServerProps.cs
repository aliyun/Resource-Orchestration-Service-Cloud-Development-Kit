using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::VPC::SslVpnServer`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-vpc.SslVpnServerProps")]
    public class SslVpnServerProps : AlibabaCloud.SDK.ROS.CDK.Vpc.ISslVpnServerProps
    {
        /// <summary>Property clientIpPool: It is the address segment that assigns the access address to the client virtual NIC.</summary>
        /// <remarks>
        /// It does not refer to the existing intranet segment of the client.
        /// When the client accesses the local end through an SSL-VPN connection, the VPN gateway allocates an IP address to the client from the specified client network segment.
        /// The network segment cannot conflict with the LocalSubnet address segment.
        /// </remarks>
        [JsiiProperty(name: "clientIpPool", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object ClientIpPool
        {
            get;
            set;
        }

        /// <summary>Property localSubnet: Is the address segment that the client wants to access through an SSL-VPN connection.</summary>
        /// <remarks>
        /// The local network segment can be the network segment of the VPC, the network segment of the switch, the network segment of the IDC interconnected by the leased line and the VPC, and the network segment of the cloud service such as RDS/OSS.
        /// </remarks>
        [JsiiProperty(name: "localSubnet", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object LocalSubnet
        {
            get;
            set;
        }

        /// <summary>Property vpnGatewayId: ID of the VPN gateway.</summary>
        [JsiiProperty(name: "vpnGatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object VpnGatewayId
        {
            get;
            set;
        }

        /// <summary>Property cipher: The encryption algorithm used by SSL-VPN.</summary>
        /// <remarks>
        /// Value:
        /// AES-128-CBC (default) | AES-192-CBC | AES-256-CBC | none
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "cipher", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Cipher
        {
            get;
            set;
        }

        /// <summary>Property compress: Whether it is compressed.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "compress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Compress
        {
            get;
            set;
        }

        /// <summary>Property name: The name of the SSL-VPN server.</summary>
        /// <remarks>
        /// The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_), and dashes (-).
        /// But it can't start with http:// or https://.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Name
        {
            get;
            set;
        }

        /// <summary>Property port: The port used by the SSL-VPN server.</summary>
        /// <remarks>
        /// The default value is 1194. Cannot use the following ports:
        /// 22, 2222, 22222, 9000, 9001, 9002, 7505, 80, 443, 53, 68, 123, 4510, 4560, 500, 4500
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "port", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Port
        {
            get;
            set;
        }

        /// <summary>Property proto: The protocol used by the SSL-VPN server.</summary>
        /// <remarks>
        /// Allowed values: UDP (default) | TCP.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "proto", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Proto
        {
            get;
            set;
        }
    }
}
