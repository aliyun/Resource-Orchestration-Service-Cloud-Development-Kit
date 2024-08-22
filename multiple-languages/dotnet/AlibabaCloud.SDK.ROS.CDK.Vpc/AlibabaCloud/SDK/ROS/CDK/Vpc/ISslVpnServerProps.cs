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
        /// <summary>Property clientIpPool: It is the address segment that assigns the access address to the client virtual NIC.</summary>
        /// <remarks>
        /// It does not refer to the existing intranet segment of the client.
        /// When the client accesses the local end through an SSL-VPN connection, the VPN gateway allocates an IP address to the client from the specified client network segment.
        /// The network segment cannot conflict with the LocalSubnet address segment.
        /// </remarks>
        [JsiiProperty(name: "clientIpPool", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ClientIpPool
        {
            get;
        }

        /// <summary>Property localSubnet: Is the address segment that the client wants to access through an SSL-VPN connection.</summary>
        /// <remarks>
        /// The local network segment can be the network segment of the VPC, the network segment of the switch, the network segment of the IDC interconnected by the leased line and the VPC, and the network segment of the cloud service such as RDS/OSS.
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

        /// <summary>Property name: The name of the SSL-VPN server.</summary>
        /// <remarks>
        /// The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_), and dashes (-).
        /// But it can't start with http:// or https://.
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

        /// <summary>Property proto: The protocol used by the SSL-VPN server.</summary>
        /// <remarks>
        /// Allowed values: UDP (default) | TCP.
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

            /// <summary>Property clientIpPool: It is the address segment that assigns the access address to the client virtual NIC.</summary>
            /// <remarks>
            /// It does not refer to the existing intranet segment of the client.
            /// When the client accesses the local end through an SSL-VPN connection, the VPN gateway allocates an IP address to the client from the specified client network segment.
            /// The network segment cannot conflict with the LocalSubnet address segment.
            /// </remarks>
            [JsiiProperty(name: "clientIpPool", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ClientIpPool
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property localSubnet: Is the address segment that the client wants to access through an SSL-VPN connection.</summary>
            /// <remarks>
            /// The local network segment can be the network segment of the VPC, the network segment of the switch, the network segment of the IDC interconnected by the leased line and the VPC, and the network segment of the cloud service such as RDS/OSS.
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

            /// <summary>Property name: The name of the SSL-VPN server.</summary>
            /// <remarks>
            /// The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_), and dashes (-).
            /// But it can't start with http:// or https://.
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

            /// <summary>Property proto: The protocol used by the SSL-VPN server.</summary>
            /// <remarks>
            /// Allowed values: UDP (default) | TCP.
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
