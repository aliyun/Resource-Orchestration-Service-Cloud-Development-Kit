using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `RosIpsecServer`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-ipsecserver
    /// </remarks>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-vpc.RosIpsecServerProps")]
    public class RosIpsecServerProps : AlibabaCloud.SDK.ROS.CDK.Vpc.IRosIpsecServerProps
    {
        private object _clientIpPool;

        /// <remarks>
        /// <strong>Property</strong>: clientIpPool: Client network segment refers to the address segment that assigns access addresses to the virtual network card of the client. Note: The client network segment cannot conflict with the VPC side network segment.
        /// </remarks>
        [JsiiProperty(name: "clientIpPool", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ClientIpPool
        {
            get => _clientIpPool;
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
                _clientIpPool = value;
            }
        }

        private object _localSubnet;

        /// <remarks>
        /// <strong>Property</strong>: localSubnet: The local network segment refers to the network segment on the VPC side that needs to be interconnected with the client network segment. Use half-width commas (,) to separate multiple network segments, for example: 192.168.1.0\/24,192.168.2.0\/24.
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

        private object _vpnGatewayId;

        /// <remarks>
        /// <strong>Property</strong>: vpnGatewayId: VPN gateway instance ID.
        /// </remarks>
        [JsiiProperty(name: "vpnGatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object VpnGatewayId
        {
            get => _vpnGatewayId;
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
                _vpnGatewayId = value;
            }
        }

        private object? _effectImmediately;

        /// <remarks>
        /// <strong>Property</strong>: effectImmediately: true: Apply the new configuration and trigger a reconnection immediately.
        /// false: Trigger a reconnection only when network traffic occurs. (The reconnection may cause the network to be unavailable for a brief moment)
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

        private object? _ikeConfig;

        /// <remarks>
        /// <strong>Property</strong>: ikeConfig: Negotiation parameter configuration in the first phase.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "ikeConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-vpc.RosIpsecServer.IkeConfigProperty\"}]}}", isOptional: true)]
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
                        case AlibabaCloud.SDK.ROS.CDK.Vpc.RosIpsecServer.IIkeConfigProperty cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Vpc.RosIpsecServer.IIkeConfigProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _ikeConfig = value;
            }
        }

        private object? _ipsecConfig;

        /// <remarks>
        /// <strong>Property</strong>: ipsecConfig: Negotiation parameter configuration in the second phase.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "ipsecConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-vpc.RosIpsecServer.IpsecConfigProperty\"}]}}", isOptional: true)]
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
                        case AlibabaCloud.SDK.ROS.CDK.Vpc.RosIpsecServer.IIpsecConfigProperty cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Vpc.RosIpsecServer.IIpsecConfigProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _ipsecConfig = value;
            }
        }

        private object? _ipsecServerName;

        /// <remarks>
        /// <strong>Property</strong>: ipsecServerName: The value must be 2 to 128 characters in length and start with a letter or Chinese character. It can contain digits, underscores (_), and hyphens (-).
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "ipsecServerName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? IpsecServerName
        {
            get => _ipsecServerName;
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
                _ipsecServerName = value;
            }
        }

        private object? _psk;

        /// <remarks>
        /// <strong>Property</strong>: psk: Pre-Shared key. Used for identity authentication between the VPN gateway and the client. A 16-bit random string is randomly generated by default, or you can manually specify the key. The length is limited to 100 characters.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "psk", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Psk
        {
            get => _psk;
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
                _psk = value;
            }
        }

        private object? _pskEnabled;

        /// <remarks>
        /// <strong>Property</strong>: pskEnabled: Whether to enable the pre-shared key authentication method. Only the value is true, which means that the pre-shared key authentication mode is enabled.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "pskEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? PskEnabled
        {
            get => _pskEnabled;
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
                _pskEnabled = value;
            }
        }
    }
}
