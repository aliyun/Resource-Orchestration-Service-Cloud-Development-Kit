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
        /// <strong>Property</strong>: clientIpPool: The client CIDR block.
        /// The CIDR block from which an IP address is allocated to the virtual network
        /// interface controller (NIC) of the client, rather than the private CIDR block.
        /// If the client accesses the SSL server over an SSL-VPN connection, the VPN gateway
        /// assigns an IP address from the specified client CIDR block for the client to
        /// access cloud resources.
        /// Make sure that the number of IP addresses in the client CIDR block is at least
        /// four times the maximum number of SSL-VPN connections supported by the VPN
        /// gateway.
        /// ... (omitted for brevity; see metadata URL) ...
        /// *   The subnet mask of the client CIDR block must be 16 to 29 bits in length.
        /// *   Make sure that the client CIDR block does not overlap with the local CIDR
        /// block, the VPC CIDR block, or route CIDR blocks associated with the client.
        /// </remarks>
        [JsiiProperty(name: "clientIpPool", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ClientIpPool
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: localSubnet: The local CIDR block.
        /// The CIDR block that your client needs to access by using the SSL-VPN connection.
        /// This value can be the CIDR block of a VPC, a vSwitch, a data center that is
        /// connected to a VPC by using an Express Connect circuit, or a cloud
        /// service such as Object Storage Service (OSS).
        /// The subnet mask of the specified local CIDR block must be 8 to 32 bits in length.
        /// You cannot specify the following CIDR blocks as the local CIDR blocks:
        /// *   127.0.0.0~127.255.255.255
        /// *   169.254.0.0~169.254.255.255
        /// *   224.0.0.0~239.255.255.255
        /// *   255.0.0.0~255.255.255.255
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
        /// <strong>Property</strong>: enableMultiFactorAuth: Whether to enable multi-factor authentication. The default value is false.
        /// </remarks>
        [JsiiProperty(name: "enableMultiFactorAuth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnableMultiFactorAuth
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: iDaaSApplicationId: The ID of the IDaaS application.
        /// </remarks>
        [JsiiProperty(name: "iDaaSApplicationId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IDaaSApplicationId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: iDaaSInstanceId: The ID of the IDaaS instance.
        /// </remarks>
        [JsiiProperty(name: "iDaaSInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IDaaSInstanceId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: iDaaSRegionId: The region ID of the IDaaS instance.
        /// </remarks>
        [JsiiProperty(name: "iDaaSRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IDaaSRegionId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: name: The SSL server name.
        /// The name must be 1 to 100 characters in length and cannot start with `http:\/\/` or
        /// `https:\/\/`.
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
        /// <strong>Property</strong>: proto: The protocol that is used by the SSL server. Valid values:
        /// *   TCP (default)
        /// *   UDP
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
            /// <strong>Property</strong>: clientIpPool: The client CIDR block.
            /// The CIDR block from which an IP address is allocated to the virtual network
            /// interface controller (NIC) of the client, rather than the private CIDR block.
            /// If the client accesses the SSL server over an SSL-VPN connection, the VPN gateway
            /// assigns an IP address from the specified client CIDR block for the client to
            /// access cloud resources.
            /// Make sure that the number of IP addresses in the client CIDR block is at least
            /// four times the maximum number of SSL-VPN connections supported by the VPN
            /// gateway.
            /// ... (omitted for brevity; see metadata URL) ...
            /// *   The subnet mask of the client CIDR block must be 16 to 29 bits in length.
            /// *   Make sure that the client CIDR block does not overlap with the local CIDR
            /// block, the VPC CIDR block, or route CIDR blocks associated with the client.
            /// </remarks>
            [JsiiProperty(name: "clientIpPool", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ClientIpPool
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: localSubnet: The local CIDR block.
            /// The CIDR block that your client needs to access by using the SSL-VPN connection.
            /// This value can be the CIDR block of a VPC, a vSwitch, a data center that is
            /// connected to a VPC by using an Express Connect circuit, or a cloud
            /// service such as Object Storage Service (OSS).
            /// The subnet mask of the specified local CIDR block must be 8 to 32 bits in length.
            /// You cannot specify the following CIDR blocks as the local CIDR blocks:
            /// *   127.0.0.0~127.255.255.255
            /// *   169.254.0.0~169.254.255.255
            /// *   224.0.0.0~239.255.255.255
            /// *   255.0.0.0~255.255.255.255
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
            /// <strong>Property</strong>: enableMultiFactorAuth: Whether to enable multi-factor authentication. The default value is false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enableMultiFactorAuth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableMultiFactorAuth
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: iDaaSApplicationId: The ID of the IDaaS application.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "iDaaSApplicationId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IDaaSApplicationId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: iDaaSInstanceId: The ID of the IDaaS instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "iDaaSInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IDaaSInstanceId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: iDaaSRegionId: The region ID of the IDaaS instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "iDaaSRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IDaaSRegionId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: name: The SSL server name.
            /// The name must be 1 to 100 characters in length and cannot start with `http:\/\/` or
            /// `https:\/\/`.
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
            /// <strong>Property</strong>: proto: The protocol that is used by the SSL server. Valid values:
            /// *   TCP (default)
            /// *   UDP
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
