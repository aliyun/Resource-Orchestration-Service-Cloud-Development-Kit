using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `VpnAttachment`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vpnattachment
    /// </remarks>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-vpc.VpnAttachmentProps")]
    public class VpnAttachmentProps : AlibabaCloud.SDK.ROS.CDK.Vpc.IVpnAttachmentProps
    {
        private object _localSubnet;

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
            get => _localSubnet;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _localSubnet = value;
            }
        }

        private object _remoteSubnet;

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
            get => _remoteSubnet;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _remoteSubnet = value;
            }
        }

        private object? _autoConfigRoute;

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
            get => _autoConfigRoute;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case bool cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: bool, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _autoConfigRoute = value;
            }
        }

        private object? _bgpConfig;

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
            get => _bgpConfig;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Vpc.RosVpnAttachment.IBgpConfigProperty cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Vpc.RosVpnAttachment.IBgpConfigProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _bgpConfig = value;
            }
        }

        private object? _customerGatewayId;

        /// <summary>Property customerGatewayId: The ID of the user gateway.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "customerGatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? CustomerGatewayId
        {
            get => _customerGatewayId;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _customerGatewayId = value;
            }
        }

        private object? _effectImmediately;

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
            get => _effectImmediately;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case bool cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: bool, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _effectImmediately = value;
            }
        }

        private object? _enableDpd;

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
            get => _enableDpd;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case bool cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: bool, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _enableDpd = value;
            }
        }

        private object? _enableNatTraversal;

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
            get => _enableNatTraversal;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case bool cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: bool, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _enableNatTraversal = value;
            }
        }

        private object? _enableTunnelsBgp;

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
            get => _enableTunnelsBgp;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case bool cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: bool, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _enableTunnelsBgp = value;
            }
        }

        private object? _healthCheckConfig;

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
            get => _healthCheckConfig;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Vpc.RosVpnAttachment.IHealthCheckConfigProperty cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Vpc.RosVpnAttachment.IHealthCheckConfigProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _healthCheckConfig = value;
            }
        }

        private object? _ikeConfig;

        /// <summary>Property ikeConfig: Configuration information for the first phase of negotiation.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "ikeConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-vpc.RosVpnAttachment.IkeConfigProperty\"}]}}", isOptional: true)]
        public object? IkeConfig
        {
            get => _ikeConfig;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Vpc.RosVpnAttachment.IIkeConfigProperty cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Vpc.RosVpnAttachment.IIkeConfigProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _ikeConfig = value;
            }
        }

        private object? _ipsecConfig;

        /// <summary>Property ipsecConfig: Configuration information for the second phase negotiation.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "ipsecConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-vpc.RosVpnAttachment.IpsecConfigProperty\"}]}}", isOptional: true)]
        public object? IpsecConfig
        {
            get => _ipsecConfig;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Vpc.RosVpnAttachment.IIpsecConfigProperty cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Vpc.RosVpnAttachment.IIpsecConfigProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _ipsecConfig = value;
            }
        }

        private object? _name;

        /// <summary>Property name: The name of the IPsec-VPN connection.</summary>
        /// <remarks>
        /// The name must be 1 to 100 characters in length and cannot start with <c>http:\/\/</c> or
        /// <c>https:\/\/</c>.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Name
        {
            get => _name;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _name = value;
            }
        }

        private object? _networkType;

        /// <summary>Property networkType: The network type of the IPsec connection.</summary>
        /// <remarks>
        /// Value: public|private.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "networkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? NetworkType
        {
            get => _networkType;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _networkType = value;
            }
        }

        private object? _remoteCaCert;

        /// <summary>Property remoteCaCert: The peer CA certificate when a ShangMi (SM) VPN gateway is used to establish the IPsec-VPN connection.</summary>
        /// <remarks>
        /// This parameter is required when an SM VPN gateway is used to establish the IPsec-VPN connection.
        /// You can ignore this parameter when a standard VPN gateway is used to create the IPsec-VPN connection.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "remoteCaCert", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? RemoteCaCert
        {
            get => _remoteCaCert;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _remoteCaCert = value;
            }
        }

        private object? _resourceGroupId;

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
            get => _resourceGroupId;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _resourceGroupId = value;
            }
        }

        private object? _tunnelBandwidth;

        /// <summary>Property tunnelBandwidth: Used to indicate the bandwidth specification of a single VPN tunnel, values: Standard (default value): Standard type, default bandwidth 1Gbps Large: Large type, default bandwidth 3Gbps.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "tunnelBandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? TunnelBandwidth
        {
            get => _tunnelBandwidth;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _tunnelBandwidth = value;
            }
        }

        private object? _tunnelOptionsSpecification;

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
            get => _tunnelOptionsSpecification;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case object[] cast_cd4240:
                            for (var __idx_f64a5c = 0 ; __idx_f64a5c < cast_cd4240.Length ; __idx_f64a5c++)
                            {
                                switch (cast_cd4240[__idx_f64a5c])
                                {
                                    case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_201718:
                                        break;
                                    case AlibabaCloud.SDK.ROS.CDK.Vpc.RosVpnAttachment.ITunnelOptionsSpecificationProperty cast_201718:
                                        break;
                                    case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_201718:
                                        // Not enough information to type-check...
                                        break;
                                    case null:
                                        throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Vpc.RosVpnAttachment.ITunnelOptionsSpecificationProperty).FullName}; received null", nameof(value));
                                    default:
                                        throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Vpc.RosVpnAttachment.ITunnelOptionsSpecificationProperty).FullName}; received {cast_cd4240[__idx_f64a5c].GetType().FullName}", nameof(value));
                                }
                            }
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, object[]; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _tunnelOptionsSpecification = value;
            }
        }
    }
}
