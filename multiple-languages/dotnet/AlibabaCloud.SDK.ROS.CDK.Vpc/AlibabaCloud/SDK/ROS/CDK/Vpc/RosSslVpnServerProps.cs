using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::VPC::SslVpnServer`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-vpc.RosSslVpnServerProps")]
    public class RosSslVpnServerProps : AlibabaCloud.SDK.ROS.CDK.Vpc.IRosSslVpnServerProps
    {
        /// <remarks>
        /// <strong>Property</strong>: clientIpPool: It is the address segment that assigns the access address to the client virtual NIC. It does not refer to the existing intranet segment of the client.
        /// When the client accesses the local end through an SSL-VPN connection, the VPN gateway allocates an IP address to the client from the specified client network segment.
        /// The network segment cannot conflict with the LocalSubnet address segment.
        /// </remarks>
        [JsiiProperty(name: "clientIpPool", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ClientIpPool
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: localSubnet: Is the address segment that the client wants to access through an SSL-VPN connection.
        /// The local network segment can be the network segment of the VPC, the network segment of the switch, the network segment of the IDC interconnected by the leased line and the VPC, and the network segment of the cloud service such as RDS/OSS.
        /// </remarks>
        [JsiiProperty(name: "localSubnet", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string LocalSubnet
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: vpnGatewayId: ID of the VPN gateway.
        /// </remarks>
        [JsiiProperty(name: "vpnGatewayId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string VpnGatewayId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: cipher: The encryption algorithm used by SSL-VPN. Value:
        /// AES-128-CBC (default) | AES-192-CBC | AES-256-CBC | none
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "cipher", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Cipher
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: compress: Whether it is compressed.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "compress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Compress
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: name: The name of the SSL-VPN server. The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_), and dashes (-).
        /// But it can't start with http:// or https://.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Name
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: port: The port used by the SSL-VPN server. The default value is 1194. Cannot use the following ports:
        /// 22, 2222, 22222, 9000, 9001, 9002, 7505, 80, 443, 53, 68, 123, 4510, 4560, 500, 4500
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "port", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? Port
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: proto: The protocol used by the SSL-VPN server. Allowed values: UDP (default) | TCP.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "proto", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Proto
        {
            get;
            set;
        }
    }
}
