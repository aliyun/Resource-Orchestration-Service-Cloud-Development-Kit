using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `RosSslVpnServer`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-sslvpnserver
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosSslVpnServerProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosSslVpnServerProps")]
    public interface IRosSslVpnServerProps
    {
        /// <remarks>
        /// <strong>Property</strong>: clientIpPool: It is the address segment that assigns the access address to the client virtual NIC. It does not refer to the existing intranet segment of the client.
        /// When the client accesses the local end through an SSL-VPN connection, the VPN gateway allocates an IP address to the client from the specified client network segment.
        /// The network segment cannot conflict with the LocalSubnet address segment.
        /// </remarks>
        [JsiiProperty(name: "clientIpPool", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ClientIpPool
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: localSubnet: Is the address segment that the client wants to access through an SSL-VPN connection.
        /// The local network segment can be the network segment of the VPC, the network segment of the switch, the network segment of the IDC interconnected by the leased line and the VPC, and the network segment of the cloud service such as RDS\/OSS.
        /// </remarks>
        [JsiiProperty(name: "localSubnet", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object LocalSubnet
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: vpnGatewayId: ID of the VPN gateway.
        /// </remarks>
        [JsiiProperty(name: "vpnGatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VpnGatewayId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: cipher: The encryption algorithm used by SSL-VPN. Value:
        /// AES-128-CBC (default) | AES-192-CBC | AES-256-CBC | none
        /// </remarks>
        [JsiiProperty(name: "cipher", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Cipher
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: compress: Whether it is compressed.
        /// </remarks>
        [JsiiProperty(name: "compress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Compress
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: name: The name of the SSL-VPN server. The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_), and dashes (-).
        /// But it can't start with http:\/\/ or https:\/\/.
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Name
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: port: The port used by the SSL-VPN server. The default value is 1194. Cannot use the following ports:
        /// 22, 2222, 22222, 9000, 9001, 9002, 7505, 80, 443, 53, 68, 123, 4510, 4560, 500, 4500
        /// </remarks>
        [JsiiProperty(name: "port", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Port
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: proto: The protocol used by the SSL-VPN server. Allowed values: UDP (default) | TCP.
        /// </remarks>
        [JsiiProperty(name: "proto", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Proto
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosSslVpnServer`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-sslvpnserver
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosSslVpnServerProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosSslVpnServerProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IRosSslVpnServerProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: clientIpPool: It is the address segment that assigns the access address to the client virtual NIC. It does not refer to the existing intranet segment of the client.
            /// When the client accesses the local end through an SSL-VPN connection, the VPN gateway allocates an IP address to the client from the specified client network segment.
            /// The network segment cannot conflict with the LocalSubnet address segment.
            /// </remarks>
            [JsiiProperty(name: "clientIpPool", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ClientIpPool
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: localSubnet: Is the address segment that the client wants to access through an SSL-VPN connection.
            /// The local network segment can be the network segment of the VPC, the network segment of the switch, the network segment of the IDC interconnected by the leased line and the VPC, and the network segment of the cloud service such as RDS\/OSS.
            /// </remarks>
            [JsiiProperty(name: "localSubnet", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object LocalSubnet
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: vpnGatewayId: ID of the VPN gateway.
            /// </remarks>
            [JsiiProperty(name: "vpnGatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VpnGatewayId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: cipher: The encryption algorithm used by SSL-VPN. Value:
            /// AES-128-CBC (default) | AES-192-CBC | AES-256-CBC | none
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "cipher", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Cipher
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: compress: Whether it is compressed.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "compress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Compress
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: name: The name of the SSL-VPN server. The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_), and dashes (-).
            /// But it can't start with http:\/\/ or https:\/\/.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Name
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: port: The port used by the SSL-VPN server. The default value is 1194. Cannot use the following ports:
            /// 22, 2222, 22222, 9000, 9001, 9002, 7505, 80, 443, 53, 68, 123, 4510, 4560, 500, 4500
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "port", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Port
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: proto: The protocol used by the SSL-VPN server. Allowed values: UDP (default) | TCP.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "proto", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Proto
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
