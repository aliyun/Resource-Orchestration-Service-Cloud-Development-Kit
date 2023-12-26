using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `RosVpnConnection`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vpnconnection
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosVpnConnectionProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosVpnConnectionProps")]
    public interface IRosVpnConnectionProps
    {
        /// <remarks>
        /// <strong>Property</strong>: localSubnet: A network segment on the VPC side that needs to be interconnected with the local IDC for the second phase negotiation.
        /// Multiple network segments are separated by commas, for example: 192.168.1.0\/24, 192.168.2.0\/24.
        /// </remarks>
        [JsiiProperty(name: "localSubnet", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object LocalSubnet
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: remoteSubnet: The network segment of the local IDC is used for the second phase negotiation.
        /// Multiple network segments are separated by commas, for example: 192.168.3.0\/24, 192.168.4.0\/24.
        /// </remarks>
        [JsiiProperty(name: "remoteSubnet", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RemoteSubnet
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
        /// <strong>Property</strong>: autoConfigRoute: Specifies whether to automatically configure routes. Valid values:
        /// true (default)
        /// false
        /// </remarks>
        [JsiiProperty(name: "autoConfigRoute", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AutoConfigRoute
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: bgpConfig: The Border Gateway Protocol (BGP) configuration.
        /// This parameter is required when the VPN gateway has dynamic BGP enabled.
        /// Before you configure BGP, we recommend that you learn about how BGP works and its limits. For more information, see VPN Gateway supports BGP dynamic routing.
        /// We recommend that you use a private ASN to establish a connection with Alibaba Cloud over BGP.
        /// Refer to the relevant documentation for the private ASN range.
        /// </remarks>
        [JsiiProperty(name: "bgpConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-vpc.RosVpnConnection.BgpConfigProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? BgpConfig
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: customerGatewayId: The ID of the user gateway.
        /// </remarks>
        [JsiiProperty(name: "customerGatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CustomerGatewayId
        {
            get
            {
                return null;
            }
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
        /// <strong>Property</strong>: enableDpd: Specifies whether to enable the dead peer detection (DPD) feature. Valid values:
        /// true (default) The initiator of the IPsec-VPN connection sends DPD packets to verify the existence and availability of the peer. If no response is received from the peer within a specified period of time, the connection fails. ISAKMP SAs and IPsec SAs are deleted. The IPsec tunnel is also deleted.
        /// false: disables DPD. The IPsec initiator does not send DPD packets.
        /// </remarks>
        [JsiiProperty(name: "enableDpd", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnableDpd
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: enableNatTraversal: Specifies whether to enable NAT traversal. Valid values:
        /// true (default) After NAT traversal is enabled, the initiator does not check the UDP ports during IKE negotiations and can automatically discover NAT gateway devices along the VPN tunnel.
        /// false
        /// </remarks>
        [JsiiProperty(name: "enableNatTraversal", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnableNatTraversal
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: enableTunnelsBgp: Specifies whether to enable the BGP feature for the tunnel.
        /// Valid values: true and false. Default value: false.
        /// </remarks>
        [JsiiProperty(name: "enableTunnelsBgp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnableTunnelsBgp
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
        /// The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_) and dashes (-), but cannot start with http:\/\/ or https:\/\/ .
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
        /// <strong>Property</strong>: remoteCaCertificate: The peer CA certificate when a ShangMi (SM) VPN gateway is used to establish the IPsec-VPN connection.
        /// This parameter is required when an SM VPN gateway is used to establish the IPsec-VPN connection.
        /// You can ignore this parameter when a standard VPN gateway is used to create the IPsec-VPN connection.
        /// </remarks>
        [JsiiProperty(name: "remoteCaCertificate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RemoteCaCertificate
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: tunnelOptionsSpecification: TunnelOptionsSpecification parameters are supported by dual-tunnel IPsec-VPN gateways.
        /// You can modify both the active and standby tunnels of the IPsec-VPN connection.
        /// </remarks>
        [JsiiProperty(name: "tunnelOptionsSpecification", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-vpc.RosVpnConnection.TunnelOptionsSpecificationProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TunnelOptionsSpecification
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosVpnConnection`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vpnconnection
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosVpnConnectionProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosVpnConnectionProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IRosVpnConnectionProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: localSubnet: A network segment on the VPC side that needs to be interconnected with the local IDC for the second phase negotiation.
            /// Multiple network segments are separated by commas, for example: 192.168.1.0\/24, 192.168.2.0\/24.
            /// </remarks>
            [JsiiProperty(name: "localSubnet", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object LocalSubnet
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: remoteSubnet: The network segment of the local IDC is used for the second phase negotiation.
            /// Multiple network segments are separated by commas, for example: 192.168.3.0\/24, 192.168.4.0\/24.
            /// </remarks>
            [JsiiProperty(name: "remoteSubnet", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RemoteSubnet
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
            /// <strong>Property</strong>: autoConfigRoute: Specifies whether to automatically configure routes. Valid values:
            /// true (default)
            /// false
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoConfigRoute", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoConfigRoute
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: bgpConfig: The Border Gateway Protocol (BGP) configuration.
            /// This parameter is required when the VPN gateway has dynamic BGP enabled.
            /// Before you configure BGP, we recommend that you learn about how BGP works and its limits. For more information, see VPN Gateway supports BGP dynamic routing.
            /// We recommend that you use a private ASN to establish a connection with Alibaba Cloud over BGP.
            /// Refer to the relevant documentation for the private ASN range.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "bgpConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-vpc.RosVpnConnection.BgpConfigProperty\"}]}}", isOptional: true)]
            public object? BgpConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: customerGatewayId: The ID of the user gateway.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "customerGatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CustomerGatewayId
            {
                get => GetInstanceProperty<object?>();
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
            /// <strong>Property</strong>: enableDpd: Specifies whether to enable the dead peer detection (DPD) feature. Valid values:
            /// true (default) The initiator of the IPsec-VPN connection sends DPD packets to verify the existence and availability of the peer. If no response is received from the peer within a specified period of time, the connection fails. ISAKMP SAs and IPsec SAs are deleted. The IPsec tunnel is also deleted.
            /// false: disables DPD. The IPsec initiator does not send DPD packets.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enableDpd", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableDpd
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: enableNatTraversal: Specifies whether to enable NAT traversal. Valid values:
            /// true (default) After NAT traversal is enabled, the initiator does not check the UDP ports during IKE negotiations and can automatically discover NAT gateway devices along the VPN tunnel.
            /// false
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enableNatTraversal", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableNatTraversal
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: enableTunnelsBgp: Specifies whether to enable the BGP feature for the tunnel.
            /// Valid values: true and false. Default value: false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enableTunnelsBgp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableTunnelsBgp
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
            /// The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_) and dashes (-), but cannot start with http:\/\/ or https:\/\/ .
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Name
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: remoteCaCertificate: The peer CA certificate when a ShangMi (SM) VPN gateway is used to establish the IPsec-VPN connection.
            /// This parameter is required when an SM VPN gateway is used to establish the IPsec-VPN connection.
            /// You can ignore this parameter when a standard VPN gateway is used to create the IPsec-VPN connection.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "remoteCaCertificate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RemoteCaCertificate
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: tunnelOptionsSpecification: TunnelOptionsSpecification parameters are supported by dual-tunnel IPsec-VPN gateways.
            /// You can modify both the active and standby tunnels of the IPsec-VPN connection.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tunnelOptionsSpecification", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-vpc.RosVpnConnection.TunnelOptionsSpecificationProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? TunnelOptionsSpecification
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
