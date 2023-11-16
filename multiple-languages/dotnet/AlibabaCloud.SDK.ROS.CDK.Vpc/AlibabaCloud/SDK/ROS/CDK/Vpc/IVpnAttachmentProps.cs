using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `ALIYUN::VPC::VpnAttachment`.</summary>
    [JsiiInterface(nativeType: typeof(IVpnAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.VpnAttachmentProps")]
    public interface IVpnAttachmentProps
    {
        /// <summary>Property customerGatewayId: The ID of the user gateway.</summary>
        [JsiiProperty(name: "customerGatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CustomerGatewayId
        {
            get;
        }

        /// <summary>Property localSubnet: A network segment on the VPC side that needs to be interconnected with the local IDC for the second phase negotiation.</summary>
        /// <remarks>
        /// Multiple network segments are separated by commas, for example: 192.168.1.0/24, 192.168.2.0/24.
        /// </remarks>
        [JsiiProperty(name: "localSubnet", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object LocalSubnet
        {
            get;
        }

        /// <summary>Property remoteSubnet: The network segment of the local IDC is used for the second phase negotiation.</summary>
        /// <remarks>
        /// Multiple network segments are separated by commas, for example: 192.168.3.0/24, 192.168.4.0/24.
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

        /// <summary>Property healthCheckConfig: Whether to enable the health check configuration.</summary>
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

        /// <summary>Property name: The name of the IPsec connection.</summary>
        /// <remarks>
        /// The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_) and dashes (-), but cannot start with http:// or https:// .
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

        /// <summary>Properties for defining a `ALIYUN::VPC::VpnAttachment`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IVpnAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.VpnAttachmentProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IVpnAttachmentProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property customerGatewayId: The ID of the user gateway.</summary>
            [JsiiProperty(name: "customerGatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CustomerGatewayId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property localSubnet: A network segment on the VPC side that needs to be interconnected with the local IDC for the second phase negotiation.</summary>
            /// <remarks>
            /// Multiple network segments are separated by commas, for example: 192.168.1.0/24, 192.168.2.0/24.
            /// </remarks>
            [JsiiProperty(name: "localSubnet", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object LocalSubnet
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property remoteSubnet: The network segment of the local IDC is used for the second phase negotiation.</summary>
            /// <remarks>
            /// Multiple network segments are separated by commas, for example: 192.168.3.0/24, 192.168.4.0/24.
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

            /// <summary>Property healthCheckConfig: Whether to enable the health check configuration.</summary>
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

            /// <summary>Property name: The name of the IPsec connection.</summary>
            /// <remarks>
            /// The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_) and dashes (-), but cannot start with http:// or https:// .
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
        }
    }
}
