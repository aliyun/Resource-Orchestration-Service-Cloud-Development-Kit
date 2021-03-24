using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `ALIYUN::VPC::VpnConnection`.</summary>
    [JsiiInterface(nativeType: typeof(IVpnConnectionProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.VpnConnectionProps")]
    public interface IVpnConnectionProps
    {
        /// <summary>Property customerGatewayId: The ID of the user gateway.</summary>
        [JsiiProperty(name: "customerGatewayId", typeJson: "{\"primitive\":\"string\"}")]
        string CustomerGatewayId
        {
            get;
        }

        /// <summary>Property localSubnet: A network segment on the VPC side that needs to be interconnected with the local IDC for the second phase negotiation.</summary>
        /// <remarks>
        /// Multiple network segments are separated by commas, for example: 192.168.1.0/24, 192.168.2.0/24.
        /// </remarks>
        [JsiiProperty(name: "localSubnet", typeJson: "{\"primitive\":\"string\"}")]
        string LocalSubnet
        {
            get;
        }

        /// <summary>Property remoteSubnet: The network segment of the local IDC is used for the second phase negotiation.</summary>
        /// <remarks>
        /// Multiple network segments are separated by commas, for example: 192.168.3.0/24, 192.168.4.0/24.
        /// </remarks>
        [JsiiProperty(name: "remoteSubnet", typeJson: "{\"primitive\":\"string\"}")]
        string RemoteSubnet
        {
            get;
        }

        /// <summary>Property vpnGatewayId: ID of the VPN gateway.</summary>
        [JsiiProperty(name: "vpnGatewayId", typeJson: "{\"primitive\":\"string\"}")]
        string VpnGatewayId
        {
            get;
        }

        /// <summary>Property effectImmediately: Whether to delete the currently negotiated IPsec tunnel and re-initiate the negotiation.</summary>
        /// <remarks>
        /// Value:
        /// True: Negotiate immediately after the configuration is complete.
        /// False (default): Negotiate when traffic enters.
        /// </remarks>
        [JsiiProperty(name: "effectImmediately", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EffectImmediately
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property healthCheckConfig: Whether to enable the health check configuration.</summary>
        [JsiiProperty(name: "healthCheckConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-vpc.RosVpnConnection.HealthCheckConfigProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? HealthCheckConfig
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ikeConfig: Configuration information for the first phase of negotiation.</summary>
        [JsiiProperty(name: "ikeConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-vpc.RosVpnConnection.IkeConfigProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IkeConfig
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ipsecConfig: Configuration information for the second phase negotiation.</summary>
        [JsiiProperty(name: "ipsecConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-vpc.RosVpnConnection.IpsecConfigProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IpsecConfig
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property name: The name of the IPsec connection.</summary>
        /// <remarks>
        /// The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_) and dashes (-), but cannot start with http:// or https:// .
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Name
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::VPC::VpnConnection`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IVpnConnectionProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.VpnConnectionProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IVpnConnectionProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property customerGatewayId: The ID of the user gateway.</summary>
            [JsiiProperty(name: "customerGatewayId", typeJson: "{\"primitive\":\"string\"}")]
            public string CustomerGatewayId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property localSubnet: A network segment on the VPC side that needs to be interconnected with the local IDC for the second phase negotiation.</summary>
            /// <remarks>
            /// Multiple network segments are separated by commas, for example: 192.168.1.0/24, 192.168.2.0/24.
            /// </remarks>
            [JsiiProperty(name: "localSubnet", typeJson: "{\"primitive\":\"string\"}")]
            public string LocalSubnet
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property remoteSubnet: The network segment of the local IDC is used for the second phase negotiation.</summary>
            /// <remarks>
            /// Multiple network segments are separated by commas, for example: 192.168.3.0/24, 192.168.4.0/24.
            /// </remarks>
            [JsiiProperty(name: "remoteSubnet", typeJson: "{\"primitive\":\"string\"}")]
            public string RemoteSubnet
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property vpnGatewayId: ID of the VPN gateway.</summary>
            [JsiiProperty(name: "vpnGatewayId", typeJson: "{\"primitive\":\"string\"}")]
            public string VpnGatewayId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property effectImmediately: Whether to delete the currently negotiated IPsec tunnel and re-initiate the negotiation.</summary>
            /// <remarks>
            /// Value:
            /// True: Negotiate immediately after the configuration is complete.
            /// False (default): Negotiate when traffic enters.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "effectImmediately", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EffectImmediately
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property healthCheckConfig: Whether to enable the health check configuration.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "healthCheckConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-vpc.RosVpnConnection.HealthCheckConfigProperty\"}]}}", isOptional: true)]
            public object? HealthCheckConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ikeConfig: Configuration information for the first phase of negotiation.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "ikeConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-vpc.RosVpnConnection.IkeConfigProperty\"}]}}", isOptional: true)]
            public object? IkeConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ipsecConfig: Configuration information for the second phase negotiation.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "ipsecConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-vpc.RosVpnConnection.IpsecConfigProperty\"}]}}", isOptional: true)]
            public object? IpsecConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property name: The name of the IPsec connection.</summary>
            /// <remarks>
            /// The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_) and dashes (-), but cannot start with http:// or https:// .
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Name
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
