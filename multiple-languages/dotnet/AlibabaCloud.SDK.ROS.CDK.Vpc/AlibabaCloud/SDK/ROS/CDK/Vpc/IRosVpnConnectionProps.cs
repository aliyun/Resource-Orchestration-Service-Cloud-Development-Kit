using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `ALIYUN::VPC::VpnConnection`.</summary>
    [JsiiInterface(nativeType: typeof(IRosVpnConnectionProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosVpnConnectionProps")]
    public interface IRosVpnConnectionProps
    {
        /// <remarks>
        /// <strong>Property</strong>: customerGatewayId: The ID of the user gateway.
        /// </remarks>
        [JsiiProperty(name: "customerGatewayId", typeJson: "{\"primitive\":\"string\"}")]
        string CustomerGatewayId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: localSubnet: A network segment on the VPC side that needs to be interconnected with the local IDC for the second phase negotiation.
        /// Multiple network segments are separated by commas, for example: 192.168.1.0/24, 192.168.2.0/24.
        /// </remarks>
        [JsiiProperty(name: "localSubnet", typeJson: "{\"primitive\":\"string\"}")]
        string LocalSubnet
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: remoteSubnet: The network segment of the local IDC is used for the second phase negotiation.
        /// Multiple network segments are separated by commas, for example: 192.168.3.0/24, 192.168.4.0/24.
        /// </remarks>
        [JsiiProperty(name: "remoteSubnet", typeJson: "{\"primitive\":\"string\"}")]
        string RemoteSubnet
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: vpnGatewayId: ID of the VPN gateway.
        /// </remarks>
        [JsiiProperty(name: "vpnGatewayId", typeJson: "{\"primitive\":\"string\"}")]
        string VpnGatewayId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: effectImmediately: Whether to delete the currently negotiated IPsec tunnel and re-initiate the negotiation. Value:
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

        /// <remarks>
        /// <strong>Property</strong>: healthCheckConfig: Whether to enable the health check configuration.
        /// </remarks>
        [JsiiProperty(name: "healthCheckConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-vpc.RosVpnConnection.HealthCheckConfigProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? HealthCheckConfig
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: ikeConfig: Configuration information for the first phase of negotiation.
        /// </remarks>
        [JsiiProperty(name: "ikeConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-vpc.RosVpnConnection.IkeConfigProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IkeConfig
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: ipsecConfig: Configuration information for the second phase negotiation.
        /// </remarks>
        [JsiiProperty(name: "ipsecConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-vpc.RosVpnConnection.IpsecConfigProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IpsecConfig
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: name: The name of the IPsec connection.
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
        [JsiiTypeProxy(nativeType: typeof(IRosVpnConnectionProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosVpnConnectionProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IRosVpnConnectionProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: customerGatewayId: The ID of the user gateway.
            /// </remarks>
            [JsiiProperty(name: "customerGatewayId", typeJson: "{\"primitive\":\"string\"}")]
            public string CustomerGatewayId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: localSubnet: A network segment on the VPC side that needs to be interconnected with the local IDC for the second phase negotiation.
            /// Multiple network segments are separated by commas, for example: 192.168.1.0/24, 192.168.2.0/24.
            /// </remarks>
            [JsiiProperty(name: "localSubnet", typeJson: "{\"primitive\":\"string\"}")]
            public string LocalSubnet
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: remoteSubnet: The network segment of the local IDC is used for the second phase negotiation.
            /// Multiple network segments are separated by commas, for example: 192.168.3.0/24, 192.168.4.0/24.
            /// </remarks>
            [JsiiProperty(name: "remoteSubnet", typeJson: "{\"primitive\":\"string\"}")]
            public string RemoteSubnet
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: vpnGatewayId: ID of the VPN gateway.
            /// </remarks>
            [JsiiProperty(name: "vpnGatewayId", typeJson: "{\"primitive\":\"string\"}")]
            public string VpnGatewayId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: effectImmediately: Whether to delete the currently negotiated IPsec tunnel and re-initiate the negotiation. Value:
            /// True: Negotiate immediately after the configuration is complete.
            /// False (default): Negotiate when traffic enters.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "effectImmediately", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EffectImmediately
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: healthCheckConfig: Whether to enable the health check configuration.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "healthCheckConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-vpc.RosVpnConnection.HealthCheckConfigProperty\"}]}}", isOptional: true)]
            public object? HealthCheckConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: ikeConfig: Configuration information for the first phase of negotiation.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ikeConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-vpc.RosVpnConnection.IkeConfigProperty\"}]}}", isOptional: true)]
            public object? IkeConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: ipsecConfig: Configuration information for the second phase negotiation.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ipsecConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-vpc.RosVpnConnection.IpsecConfigProperty\"}]}}", isOptional: true)]
            public object? IpsecConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: name: The name of the IPsec connection.
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
