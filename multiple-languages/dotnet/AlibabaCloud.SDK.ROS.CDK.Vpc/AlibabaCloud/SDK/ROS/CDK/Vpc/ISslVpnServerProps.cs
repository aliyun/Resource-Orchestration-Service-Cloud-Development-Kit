using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `SslVpnServer`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-sslvpnserver
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ISslVpnServerProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.SslVpnServerProps")]
    public interface ISslVpnServerProps
    {
        /// <summary>Property clientIpPool: The client CIDR block.</summary>
        /// <remarks>
        /// The CIDR block from which an IP address is allocated to the virtual network
        /// interface controller (NIC) of the client, rather than the private CIDR block.
        /// If the client accesses the SSL server over an SSL-VPN connection, the VPN gateway
        /// assigns an IP address from the specified client CIDR block for the client to
        /// access cloud resources.
        /// Make sure that the number of IP addresses in the client CIDR block is at least
        /// four times the maximum number of SSL-VPN connections supported by the VPN
        /// gateway.
        /// ... (omitted for brevity; see metadata URL) ...
        ///
        /// <list type="bullet">
        /// <description>The subnet mask of the client CIDR block must be 16 to 29 bits in length.</description>
        /// <description>Make sure that the client CIDR block does not overlap with the local CIDR
        /// block, the VPC CIDR block, or route CIDR blocks associated with the client.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "clientIpPool", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ClientIpPool
        {
            get;
        }

        /// <summary>Property localSubnet: The local CIDR block.</summary>
        /// <remarks>
        /// The CIDR block that your client needs to access by using the SSL-VPN connection.
        /// This value can be the CIDR block of a VPC, a vSwitch, a data center that is
        /// connected to a VPC by using an Express Connect circuit, or a cloud
        /// service such as Object Storage Service (OSS).
        /// The subnet mask of the specified local CIDR block must be 8 to 32 bits in length.
        /// You cannot specify the following CIDR blocks as the local CIDR blocks:
        ///
        /// <list type="bullet">
        /// <description>127.0.0.0~127.255.255.255</description>
        /// <description>169.254.0.0~169.254.255.255</description>
        /// <description>224.0.0.0~239.255.255.255</description>
        /// <description>255.0.0.0~255.255.255.255</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "localSubnet", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object LocalSubnet
        {
            get;
        }

        /// <summary>Property vpnGatewayId: ID of the VPN gateway.</summary>
        [JsiiProperty(name: "vpnGatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VpnGatewayId
        {
            get;
        }

        /// <summary>Property cipher: The encryption algorithm used by SSL-VPN.</summary>
        /// <remarks>
        /// Value:
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

        /// <summary>Property compress: Whether it is compressed.</summary>
        [JsiiProperty(name: "compress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Compress
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property enableMultiFactorAuth: Whether to enable multi-factor authentication.</summary>
        /// <remarks>
        /// The default value is false.
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

        /// <summary>Property iDaaSApplicationId: The ID of the IDaaS application.</summary>
        [JsiiProperty(name: "iDaaSApplicationId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IDaaSApplicationId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property iDaaSInstanceId: The ID of the IDaaS instance.</summary>
        [JsiiProperty(name: "iDaaSInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IDaaSInstanceId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property iDaaSRegionId: The region ID of the IDaaS instance.</summary>
        [JsiiProperty(name: "iDaaSRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IDaaSRegionId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property name: The SSL server name.</summary>
        /// <remarks>
        /// The name must be 1 to 100 characters in length and cannot start with <c>http:\/\/</c> or
        /// <c>https:\/\/</c>.
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

        /// <summary>Property port: The port used by the SSL-VPN server.</summary>
        /// <remarks>
        /// The default value is 1194. Cannot use the following ports:
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

        /// <summary>Property proto: The protocol that is used by the SSL server.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>TCP (default)</description>
        /// <description>UDP</description>
        /// </list>
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

        /// <summary>Properties for defining a `SslVpnServer`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-sslvpnserver
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ISslVpnServerProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.SslVpnServerProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.ISslVpnServerProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property clientIpPool: The client CIDR block.</summary>
            /// <remarks>
            /// The CIDR block from which an IP address is allocated to the virtual network
            /// interface controller (NIC) of the client, rather than the private CIDR block.
            /// If the client accesses the SSL server over an SSL-VPN connection, the VPN gateway
            /// assigns an IP address from the specified client CIDR block for the client to
            /// access cloud resources.
            /// Make sure that the number of IP addresses in the client CIDR block is at least
            /// four times the maximum number of SSL-VPN connections supported by the VPN
            /// gateway.
            /// ... (omitted for brevity; see metadata URL) ...
            ///
            /// <list type="bullet">
            /// <description>The subnet mask of the client CIDR block must be 16 to 29 bits in length.</description>
            /// <description>Make sure that the client CIDR block does not overlap with the local CIDR
            /// block, the VPC CIDR block, or route CIDR blocks associated with the client.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "clientIpPool", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ClientIpPool
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property localSubnet: The local CIDR block.</summary>
            /// <remarks>
            /// The CIDR block that your client needs to access by using the SSL-VPN connection.
            /// This value can be the CIDR block of a VPC, a vSwitch, a data center that is
            /// connected to a VPC by using an Express Connect circuit, or a cloud
            /// service such as Object Storage Service (OSS).
            /// The subnet mask of the specified local CIDR block must be 8 to 32 bits in length.
            /// You cannot specify the following CIDR blocks as the local CIDR blocks:
            ///
            /// <list type="bullet">
            /// <description>127.0.0.0~127.255.255.255</description>
            /// <description>169.254.0.0~169.254.255.255</description>
            /// <description>224.0.0.0~239.255.255.255</description>
            /// <description>255.0.0.0~255.255.255.255</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "localSubnet", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object LocalSubnet
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property vpnGatewayId: ID of the VPN gateway.</summary>
            [JsiiProperty(name: "vpnGatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VpnGatewayId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property cipher: The encryption algorithm used by SSL-VPN.</summary>
            /// <remarks>
            /// Value:
            /// AES-128-CBC (default) | AES-192-CBC | AES-256-CBC | none
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "cipher", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Cipher
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property compress: Whether it is compressed.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "compress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Compress
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property enableMultiFactorAuth: Whether to enable multi-factor authentication.</summary>
            /// <remarks>
            /// The default value is false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enableMultiFactorAuth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableMultiFactorAuth
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property iDaaSApplicationId: The ID of the IDaaS application.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "iDaaSApplicationId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IDaaSApplicationId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property iDaaSInstanceId: The ID of the IDaaS instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "iDaaSInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IDaaSInstanceId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property iDaaSRegionId: The region ID of the IDaaS instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "iDaaSRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IDaaSRegionId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property name: The SSL server name.</summary>
            /// <remarks>
            /// The name must be 1 to 100 characters in length and cannot start with <c>http:\/\/</c> or
            /// <c>https:\/\/</c>.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Name
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property port: The port used by the SSL-VPN server.</summary>
            /// <remarks>
            /// The default value is 1194. Cannot use the following ports:
            /// 22, 2222, 22222, 9000, 9001, 9002, 7505, 80, 443, 53, 68, 123, 4510, 4560, 500, 4500
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "port", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Port
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property proto: The protocol that is used by the SSL server.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>TCP (default)</description>
            /// <description>UDP</description>
            /// </list>
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
