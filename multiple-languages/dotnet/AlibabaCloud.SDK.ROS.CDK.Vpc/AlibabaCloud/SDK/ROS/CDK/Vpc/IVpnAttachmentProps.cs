using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `VpnAttachment`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vpnattachment
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IVpnAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.VpnAttachmentProps")]
    public interface IVpnAttachmentProps
    {
        /// <summary>Property localSubnet: The CIDR block on the VPC side.</summary>
        /// <remarks>
        /// The CIDR block is used in Phase 2 negotiations.
        /// Separate multiple CIDR blocks with commas (,). Example:
        /// 192.168.1.0/24,192.168.2.0/24.
        /// The following routing modes are supported:
        ///
        /// <list type="bullet">
        /// <description>If you set LocalSubnet and RemoteSubnet to 0.0.0.0/0, the routing mode of the
        /// IPsec-VPN connection is set to Destination Routing Mode.</description>
        /// <description>If you set LocalSubnet and RemoteSubnet to specific CIDR blocks, the routing
        /// mode of the IPsec-VPN connection is set to Protected Data Flows.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "localSubnet", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object LocalSubnet
        {
            get;
        }

        /// <summary>Property remoteSubnet: The CIDR block on the data center side.</summary>
        /// <remarks>
        /// This CIDR block is used in Phase 2
        /// negotiations.
        /// Separate multiple CIDR blocks with commas (,). Example:
        /// 192.168.3.0/24,192.168.4.0/24.
        /// The following routing modes are supported:
        ///
        /// <list type="bullet">
        /// <description>If you set LocalSubnet and RemoteSubnet to 0.0.0.0/0, the routing mode of the
        /// IPsec-VPN connection is set to Destination Routing Mode.</description>
        /// <description>If you set LocalSubnet and RemoteSubnet to specific CIDR blocks, the routing
        /// mode of the IPsec-VPN connection is set to Protected Data Flows.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "remoteSubnet", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RemoteSubnet
        {
            get;
        }

        /// <summary>Property autoConfigRoute: Specifies whether to automatically configure routes.</summary>
        /// <remarks>
        /// Valid values:
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

        /// <summary>Property bgpConfig: The Border Gateway Protocol (BGP) configuration.</summary>
        /// <remarks>
        /// This parameter is required when the VPN gateway has dynamic BGP enabled.
        /// Before you configure BGP, we recommend that you learn about how BGP works and its limits. For more information, see VPN Gateway supports BGP dynamic routing.
        /// We recommend that you use a private ASN to establish a connection with Alibaba Cloud over BGP.
        /// Refer to the relevant documentation for the private ASN range.
        /// </remarks>
        [JsiiProperty(name: "bgpConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-vpc.RosVpnAttachment.BgpConfigProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? BgpConfig
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property customerGatewayId: The ID of the user gateway.</summary>
        [JsiiProperty(name: "customerGatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CustomerGatewayId
        {
            get
            {
                return null;
            }
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

        /// <summary>Property enableDpd: Specifies whether to enable the dead peer detection (DPD) feature.</summary>
        /// <remarks>
        /// Valid values:
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

        /// <summary>Property enableNatTraversal: Specifies whether to enable NAT traversal.</summary>
        /// <remarks>
        /// Valid values:
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

        /// <summary>Property enableTunnelsBgp: Support configuring this parameter when creating dual-tunnel mode IPsec-VPN connections.</summary>
        /// <remarks>
        /// Whether to enable BGP function for the tunnel. Values: <strong>true</strong> or <strong>false</strong> (default value).
        ///
        ///     Before adding BGP configuration, it is recommended that you first understand the working mechanism and usage limitations of the BGP dynamic routing function. For more information, please see Configuring BGP Dynamic Routing.
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

        /// <summary>Property healthCheckConfig: This parameter is supported if you create an IPsec-VPN connection in single-tunnel mode.</summary>
        /// <remarks>
        /// The health check configurations:
        ///
        /// <list type="bullet">
        /// <description>HealthCheckConfig.enable: indicates whether the health check is enabled.
        /// Valid values: true and false (default).</description>
        /// <description>HealthCheckConfig.dip: the destination IP address configured for health
        /// checks. Enter the IP address of the on-premises data center that the VPC can
        /// access through the IPsec connection.</description>
        /// <description>HealthCheckConfig.sip: the source IP address configured for health checks.
        /// Enter the IP address of the VPC that the on-premises data center can access
        /// through the IPsec connection.</description>
        /// <description>HealthCheckConfig.interval: the time interval of health check retries. Unit:
        /// seconds. Default value: 3.</description>
        /// <description>HealthCheckConfig.retry: the maximum number of health check retries. Default
        /// value: 3.</description>
        /// <description>HealthCheckConfig.Policy: specifies whether to withdraw published routes when
        /// health checks fail. Valid values:</description>
        /// <description>revoke_route (default): withdraws published routes.</description>
        /// <description>reserve_route: does not withdraw published routes.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "healthCheckConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-vpc.RosVpnAttachment.HealthCheckConfigProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? HealthCheckConfig
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ikeConfig: Configuration information for the first phase of negotiation.</summary>
        [JsiiProperty(name: "ikeConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-vpc.RosVpnAttachment.IkeConfigProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IkeConfig
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ipsecConfig: Configuration information for the second phase negotiation.</summary>
        [JsiiProperty(name: "ipsecConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-vpc.RosVpnAttachment.IpsecConfigProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IpsecConfig
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property name: The name of the IPsec-VPN connection.</summary>
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

        /// <summary>Property networkType: The network type of the IPsec connection.</summary>
        /// <remarks>
        /// Value: public|private.
        /// </remarks>
        [JsiiProperty(name: "networkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? NetworkType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property remoteCaCert: The peer CA certificate when a ShangMi (SM) VPN gateway is used to establish the IPsec-VPN connection.</summary>
        /// <remarks>
        /// This parameter is required when an SM VPN gateway is used to establish the IPsec-VPN connection.
        /// You can ignore this parameter when a standard VPN gateway is used to create the IPsec-VPN connection.
        /// </remarks>
        [JsiiProperty(name: "remoteCaCert", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RemoteCaCert
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceGroupId: The resource group ID to which the IPsec connection belongs.</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description>You can call the ListResourceGroups interface to query the resource group ID.</description>
        /// <description>If you do not specify a resource group ID, the IPsec connection will belong to the default resource group after creation.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tunnelBandwidth: Used to indicate the bandwidth specification of a single VPN tunnel, values: Standard (default value): Standard type, default bandwidth 1Gbps Large: Large type, default bandwidth 3Gbps.</summary>
        [JsiiProperty(name: "tunnelBandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TunnelBandwidth
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tunnelOptionsSpecification: Configuration of tunnels.</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description>When creating dual-tunnel mode IPsec-VPN connections, you can configure parameters under <strong>TunnelOptionsSpecification</strong> array.</description>
        /// <description>When creating dual-tunnel mode IPsec-VPN connections, you must add two tunnels for the IPsec-VPN connection simultaneously to ensure the IPsec-VPN connection has link redundancy capability. Only two tunnels are supported under an IPsec-VPN connection.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "tunnelOptionsSpecification", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-vpc.RosVpnAttachment.TunnelOptionsSpecificationProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TunnelOptionsSpecification
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `VpnAttachment`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vpnattachment
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IVpnAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.VpnAttachmentProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IVpnAttachmentProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property localSubnet: The CIDR block on the VPC side.</summary>
            /// <remarks>
            /// The CIDR block is used in Phase 2 negotiations.
            /// Separate multiple CIDR blocks with commas (,). Example:
            /// 192.168.1.0/24,192.168.2.0/24.
            /// The following routing modes are supported:
            ///
            /// <list type="bullet">
            /// <description>If you set LocalSubnet and RemoteSubnet to 0.0.0.0/0, the routing mode of the
            /// IPsec-VPN connection is set to Destination Routing Mode.</description>
            /// <description>If you set LocalSubnet and RemoteSubnet to specific CIDR blocks, the routing
            /// mode of the IPsec-VPN connection is set to Protected Data Flows.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "localSubnet", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object LocalSubnet
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property remoteSubnet: The CIDR block on the data center side.</summary>
            /// <remarks>
            /// This CIDR block is used in Phase 2
            /// negotiations.
            /// Separate multiple CIDR blocks with commas (,). Example:
            /// 192.168.3.0/24,192.168.4.0/24.
            /// The following routing modes are supported:
            ///
            /// <list type="bullet">
            /// <description>If you set LocalSubnet and RemoteSubnet to 0.0.0.0/0, the routing mode of the
            /// IPsec-VPN connection is set to Destination Routing Mode.</description>
            /// <description>If you set LocalSubnet and RemoteSubnet to specific CIDR blocks, the routing
            /// mode of the IPsec-VPN connection is set to Protected Data Flows.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "remoteSubnet", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RemoteSubnet
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property autoConfigRoute: Specifies whether to automatically configure routes.</summary>
            /// <remarks>
            /// Valid values:
            /// true (default)
            /// false
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoConfigRoute", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoConfigRoute
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property bgpConfig: The Border Gateway Protocol (BGP) configuration.</summary>
            /// <remarks>
            /// This parameter is required when the VPN gateway has dynamic BGP enabled.
            /// Before you configure BGP, we recommend that you learn about how BGP works and its limits. For more information, see VPN Gateway supports BGP dynamic routing.
            /// We recommend that you use a private ASN to establish a connection with Alibaba Cloud over BGP.
            /// Refer to the relevant documentation for the private ASN range.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "bgpConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-vpc.RosVpnAttachment.BgpConfigProperty\"}]}}", isOptional: true)]
            public object? BgpConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property customerGatewayId: The ID of the user gateway.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "customerGatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CustomerGatewayId
            {
                get => GetInstanceProperty<object?>();
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

            /// <summary>Property enableDpd: Specifies whether to enable the dead peer detection (DPD) feature.</summary>
            /// <remarks>
            /// Valid values:
            /// true (default) The initiator of the IPsec-VPN connection sends DPD packets to verify the existence and availability of the peer. If no response is received from the peer within a specified period of time, the connection fails. ISAKMP SAs and IPsec SAs are deleted. The IPsec tunnel is also deleted.
            /// false: disables DPD. The IPsec initiator does not send DPD packets.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enableDpd", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableDpd
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property enableNatTraversal: Specifies whether to enable NAT traversal.</summary>
            /// <remarks>
            /// Valid values:
            /// true (default) After NAT traversal is enabled, the initiator does not check the UDP ports during IKE negotiations and can automatically discover NAT gateway devices along the VPN tunnel.
            /// false
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enableNatTraversal", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableNatTraversal
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property enableTunnelsBgp: Support configuring this parameter when creating dual-tunnel mode IPsec-VPN connections.</summary>
            /// <remarks>
            /// Whether to enable BGP function for the tunnel. Values: <strong>true</strong> or <strong>false</strong> (default value).
            ///
            ///     Before adding BGP configuration, it is recommended that you first understand the working mechanism and usage limitations of the BGP dynamic routing function. For more information, please see Configuring BGP Dynamic Routing.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enableTunnelsBgp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableTunnelsBgp
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property healthCheckConfig: This parameter is supported if you create an IPsec-VPN connection in single-tunnel mode.</summary>
            /// <remarks>
            /// The health check configurations:
            ///
            /// <list type="bullet">
            /// <description>HealthCheckConfig.enable: indicates whether the health check is enabled.
            /// Valid values: true and false (default).</description>
            /// <description>HealthCheckConfig.dip: the destination IP address configured for health
            /// checks. Enter the IP address of the on-premises data center that the VPC can
            /// access through the IPsec connection.</description>
            /// <description>HealthCheckConfig.sip: the source IP address configured for health checks.
            /// Enter the IP address of the VPC that the on-premises data center can access
            /// through the IPsec connection.</description>
            /// <description>HealthCheckConfig.interval: the time interval of health check retries. Unit:
            /// seconds. Default value: 3.</description>
            /// <description>HealthCheckConfig.retry: the maximum number of health check retries. Default
            /// value: 3.</description>
            /// <description>HealthCheckConfig.Policy: specifies whether to withdraw published routes when
            /// health checks fail. Valid values:</description>
            /// <description>revoke_route (default): withdraws published routes.</description>
            /// <description>reserve_route: does not withdraw published routes.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "healthCheckConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-vpc.RosVpnAttachment.HealthCheckConfigProperty\"}]}}", isOptional: true)]
            public object? HealthCheckConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ikeConfig: Configuration information for the first phase of negotiation.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "ikeConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-vpc.RosVpnAttachment.IkeConfigProperty\"}]}}", isOptional: true)]
            public object? IkeConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ipsecConfig: Configuration information for the second phase negotiation.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "ipsecConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-vpc.RosVpnAttachment.IpsecConfigProperty\"}]}}", isOptional: true)]
            public object? IpsecConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property name: The name of the IPsec-VPN connection.</summary>
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

            /// <summary>Property networkType: The network type of the IPsec connection.</summary>
            /// <remarks>
            /// Value: public|private.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "networkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? NetworkType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property remoteCaCert: The peer CA certificate when a ShangMi (SM) VPN gateway is used to establish the IPsec-VPN connection.</summary>
            /// <remarks>
            /// This parameter is required when an SM VPN gateway is used to establish the IPsec-VPN connection.
            /// You can ignore this parameter when a standard VPN gateway is used to create the IPsec-VPN connection.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "remoteCaCert", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RemoteCaCert
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceGroupId: The resource group ID to which the IPsec connection belongs.</summary>
            /// <remarks>
            /// <list type="bullet">
            /// <description>You can call the ListResourceGroups interface to query the resource group ID.</description>
            /// <description>If you do not specify a resource group ID, the IPsec connection will belong to the default resource group after creation.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tunnelBandwidth: Used to indicate the bandwidth specification of a single VPN tunnel, values: Standard (default value): Standard type, default bandwidth 1Gbps Large: Large type, default bandwidth 3Gbps.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "tunnelBandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TunnelBandwidth
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tunnelOptionsSpecification: Configuration of tunnels.</summary>
            /// <remarks>
            /// <list type="bullet">
            /// <description>When creating dual-tunnel mode IPsec-VPN connections, you can configure parameters under <strong>TunnelOptionsSpecification</strong> array.</description>
            /// <description>When creating dual-tunnel mode IPsec-VPN connections, you must add two tunnels for the IPsec-VPN connection simultaneously to ensure the IPsec-VPN connection has link redundancy capability. Only two tunnels are supported under an IPsec-VPN connection.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tunnelOptionsSpecification", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-vpc.RosVpnAttachment.TunnelOptionsSpecificationProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? TunnelOptionsSpecification
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
