using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>A ROS template type:  `ALIYUN::VPC::VpnConnection`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Vpc.RosVpnConnection), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosVpnConnection", parametersJson: "[{\"docs\":{\"summary\":\"- scope in which this resource is defined.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"summary\":\"- scoped id of the resource.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- resource properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-vpc.RosVpnConnectionProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RosVpnConnection : AlibabaCloud.SDK.ROS.CDK.Core.RosResource
    {
        /// <summary>Create a new `ALIYUN::VPC::VpnConnection`.</summary>
        /// <param name="scope">- scope in which this resource is defined.</param>
        /// <param name="id">- scoped id of the resource.</param>
        /// <param name="props">- resource properties.</param>
        public RosVpnConnection(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Vpc.IRosVpnConnectionProps props, bool enableResourcePropertyConstraint): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosVpnConnection(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosVpnConnection(DeputyProps props): base(props)
        {
        }

        [JsiiMethod(name: "renderProperties", returnsJson: "{\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}", parametersJson: "[{\"name\":\"props\",\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}]", isOverride: true)]
        protected override System.Collections.Generic.IDictionary<string, object> RenderProperties(System.Collections.Generic.IDictionary<string, object> props)
        {
            return InvokeInstanceMethod<System.Collections.Generic.IDictionary<string, object>>(new System.Type[]{typeof(System.Collections.Generic.IDictionary<string, object>)}, new object[]{props})!;
        }

        /// <summary>The resource type name for this resource class.</summary>
        [JsiiProperty(name: "ROS_RESOURCE_TYPE_NAME", typeJson: "{\"primitive\":\"string\"}")]
        public static string ROS_RESOURCE_TYPE_NAME
        {
            get;
        }
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Vpc.RosVpnConnection))!;

        /// <remarks>
        /// <strong>Attribute</strong>: PeerVpnConnectionConfig: Peer vpc connection config.
        /// </remarks>
        [JsiiProperty(name: "attrPeerVpnConnectionConfig", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrPeerVpnConnectionConfig
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: Status: Status of the IPsec connection.
        /// </remarks>
        [JsiiProperty(name: "attrStatus", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrStatus
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: VpnConnectionId: ID of the IPsec connection.
        /// </remarks>
        [JsiiProperty(name: "attrVpnConnectionId", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrVpnConnectionId
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        [JsiiProperty(name: "rosProperties", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}")]
        protected override System.Collections.Generic.IDictionary<string, object> RosProperties
        {
            get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>>()!;
        }

        /// <remarks>
        /// <strong>Property</strong>: customerGatewayId: The ID of the user gateway.
        /// </remarks>
        [JsiiProperty(name: "customerGatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object CustomerGatewayId
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        [JsiiProperty(name: "enableResourcePropertyConstraint", typeJson: "{\"primitive\":\"boolean\"}")]
        public virtual bool EnableResourcePropertyConstraint
        {
            get => GetInstanceProperty<bool>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: localSubnet: A network segment on the VPC side that needs to be interconnected with the local IDC for the second phase negotiation.
        /// Multiple network segments are separated by commas, for example: 192.168.1.0/24, 192.168.2.0/24.
        /// </remarks>
        [JsiiProperty(name: "localSubnet", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object LocalSubnet
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: remoteSubnet: The network segment of the local IDC is used for the second phase negotiation.
        /// Multiple network segments are separated by commas, for example: 192.168.3.0/24, 192.168.4.0/24.
        /// </remarks>
        [JsiiProperty(name: "remoteSubnet", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object RemoteSubnet
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: vpnGatewayId: ID of the VPN gateway.
        /// </remarks>
        [JsiiProperty(name: "vpnGatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object VpnGatewayId
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: effectImmediately: Whether to delete the currently negotiated IPsec tunnel and re-initiate the negotiation. Value:
        /// True: Negotiate immediately after the configuration is complete.
        /// False (default): Negotiate when traffic enters.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "effectImmediately", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? EffectImmediately
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: healthCheckConfig: Whether to enable the health check configuration.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "healthCheckConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-vpc.RosVpnConnection.HealthCheckConfigProperty\"}]}}", isOptional: true)]
        public virtual object? HealthCheckConfig
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: ikeConfig: Configuration information for the first phase of negotiation.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "ikeConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-vpc.RosVpnConnection.IkeConfigProperty\"}]}}", isOptional: true)]
        public virtual object? IkeConfig
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: ipsecConfig: Configuration information for the second phase negotiation.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "ipsecConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-vpc.RosVpnConnection.IpsecConfigProperty\"}]}}", isOptional: true)]
        public virtual object? IpsecConfig
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: name: The name of the IPsec connection.
        /// The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_) and dashes (-), but cannot start with http:// or https:// .
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? Name
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }
        [JsiiInterface(nativeType: typeof(IHealthCheckConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosVpnConnection.HealthCheckConfigProperty")]
        public interface IHealthCheckConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: dip:
            /// </remarks>
            [JsiiProperty(name: "dip", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Dip
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: enable:
            /// </remarks>
            [JsiiProperty(name: "enable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Enable
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: interval:
            /// </remarks>
            [JsiiProperty(name: "interval", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Interval
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: retry:
            /// </remarks>
            [JsiiProperty(name: "retry", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Retry
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: sip:
            /// </remarks>
            [JsiiProperty(name: "sip", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Sip
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IHealthCheckConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosVpnConnection.HealthCheckConfigProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.RosVpnConnection.IHealthCheckConfigProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: dip:
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "dip", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Dip
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: enable:
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "enable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Enable
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: interval:
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "interval", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Interval
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: retry:
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "retry", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Retry
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: sip:
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "sip", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Sip
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-vpc.RosVpnConnection.HealthCheckConfigProperty")]
        public class HealthCheckConfigProperty : AlibabaCloud.SDK.ROS.CDK.Vpc.RosVpnConnection.IHealthCheckConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: dip:
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dip", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? Dip
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: enable:
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? Enable
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: interval:
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "interval", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? Interval
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: retry:
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "retry", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? Retry
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: sip:
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sip", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? Sip
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IIkeConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosVpnConnection.IkeConfigProperty")]
        public interface IIkeConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: ikeAuthAlg: The authentication algorithm negotiated in the first phase, the value is md5|sha1, and the default value is md5.
            /// </remarks>
            [JsiiProperty(name: "ikeAuthAlg", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? IkeAuthAlg
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: ikeEncAlg: The encryption algorithm negotiated in the first phase, value: aes|aes192|aes256|des|3des, default value: aes.
            /// </remarks>
            [JsiiProperty(name: "ikeEncAlg", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? IkeEncAlg
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: ikeLifetime: The life cycle of the SA negotiated in the first phase. The value ranges from 0 to 86400, in seconds. The default value is 86400.
            /// </remarks>
            [JsiiProperty(name: "ikeLifetime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? IkeLifetime
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: ikeMode: Negotiation mode for IKE V1. Value: main|aggressive, default: main.
            /// </remarks>
            [JsiiProperty(name: "ikeMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? IkeMode
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: ikePfs: Diffie-Hellman key exchange algorithm used in the first phase negotiation. Value: group1|group2|group5|group14|group24, default value: group2.
            /// </remarks>
            [JsiiProperty(name: "ikePfs", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? IkePfs
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: ikeVersion: The version of the IKE protocol. Value: ikev1|ikev2, default: ikev1.
            /// </remarks>
            [JsiiProperty(name: "ikeVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? IkeVersion
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: localIdIPsec: ID of the VPN gateway. The length is limited to 100 characters. The default value is the public IP address of the VPN gateway.
            /// </remarks>
            [JsiiProperty(name: "localIdIPsec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? LocalIdIPsec
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: psk: Used for identity authentication between the IPsec VPN gateway and the user gateway. It is generated randomly by default, or you can specify the key manually. The length is limited to 100 characters.
            /// </remarks>
            [JsiiProperty(name: "psk", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Psk
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: remoteId: ID of the user gateway. The length is limited to 100 characters. The default value is the public IP address of the user gateway.
            /// </remarks>
            [JsiiProperty(name: "remoteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? RemoteId
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IIkeConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosVpnConnection.IkeConfigProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.RosVpnConnection.IIkeConfigProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: ikeAuthAlg: The authentication algorithm negotiated in the first phase, the value is md5|sha1, and the default value is md5.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "ikeAuthAlg", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? IkeAuthAlg
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: ikeEncAlg: The encryption algorithm negotiated in the first phase, value: aes|aes192|aes256|des|3des, default value: aes.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "ikeEncAlg", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? IkeEncAlg
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: ikeLifetime: The life cycle of the SA negotiated in the first phase. The value ranges from 0 to 86400, in seconds. The default value is 86400.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "ikeLifetime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? IkeLifetime
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: ikeMode: Negotiation mode for IKE V1. Value: main|aggressive, default: main.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "ikeMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? IkeMode
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: ikePfs: Diffie-Hellman key exchange algorithm used in the first phase negotiation. Value: group1|group2|group5|group14|group24, default value: group2.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "ikePfs", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? IkePfs
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: ikeVersion: The version of the IKE protocol. Value: ikev1|ikev2, default: ikev1.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "ikeVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? IkeVersion
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: localIdIPsec: ID of the VPN gateway. The length is limited to 100 characters. The default value is the public IP address of the VPN gateway.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "localIdIPsec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? LocalIdIPsec
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: psk: Used for identity authentication between the IPsec VPN gateway and the user gateway. It is generated randomly by default, or you can specify the key manually. The length is limited to 100 characters.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "psk", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Psk
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: remoteId: ID of the user gateway. The length is limited to 100 characters. The default value is the public IP address of the user gateway.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "remoteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? RemoteId
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-vpc.RosVpnConnection.IkeConfigProperty")]
        public class IkeConfigProperty : AlibabaCloud.SDK.ROS.CDK.Vpc.RosVpnConnection.IIkeConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: ikeAuthAlg: The authentication algorithm negotiated in the first phase, the value is md5|sha1, and the default value is md5.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ikeAuthAlg", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? IkeAuthAlg
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: ikeEncAlg: The encryption algorithm negotiated in the first phase, value: aes|aes192|aes256|des|3des, default value: aes.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ikeEncAlg", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? IkeEncAlg
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: ikeLifetime: The life cycle of the SA negotiated in the first phase. The value ranges from 0 to 86400, in seconds. The default value is 86400.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ikeLifetime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? IkeLifetime
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: ikeMode: Negotiation mode for IKE V1. Value: main|aggressive, default: main.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ikeMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? IkeMode
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: ikePfs: Diffie-Hellman key exchange algorithm used in the first phase negotiation. Value: group1|group2|group5|group14|group24, default value: group2.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ikePfs", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? IkePfs
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: ikeVersion: The version of the IKE protocol. Value: ikev1|ikev2, default: ikev1.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ikeVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? IkeVersion
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: localIdIPsec: ID of the VPN gateway. The length is limited to 100 characters. The default value is the public IP address of the VPN gateway.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "localIdIPsec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? LocalIdIPsec
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: psk: Used for identity authentication between the IPsec VPN gateway and the user gateway. It is generated randomly by default, or you can specify the key manually. The length is limited to 100 characters.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "psk", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? Psk
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: remoteId: ID of the user gateway. The length is limited to 100 characters. The default value is the public IP address of the user gateway.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "remoteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? RemoteId
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IIpsecConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosVpnConnection.IpsecConfigProperty")]
        public interface IIpsecConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: ipsecAuthAlg: Authentication algorithm negotiated in the second phase. Value: md5|sha1, default value: md5.
            /// </remarks>
            [JsiiProperty(name: "ipsecAuthAlg", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? IpsecAuthAlg
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: ipsecEncAlg: Encryption algorithm negotiated in the second phase. Value: aes|aes192|aes256|des|3des, default value: aes.
            /// </remarks>
            [JsiiProperty(name: "ipsecEncAlg", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? IpsecEncAlg
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: ipsecLifetime: IpsecLifetime: The life cycle of the SA negotiated in the second phase. The value ranges from 0 to 86400, in seconds. The default value is 86400.
            /// </remarks>
            [JsiiProperty(name: "ipsecLifetime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? IpsecLifetime
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: ipsecPfs: Forwards all protocol packets. The Diffie-Hellman key exchange algorithm used in the first phase negotiation, the value: group1|group2|group5|group14|group24, default value: group2.
            /// </remarks>
            [JsiiProperty(name: "ipsecPfs", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? IpsecPfs
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IIpsecConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosVpnConnection.IpsecConfigProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.RosVpnConnection.IIpsecConfigProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: ipsecAuthAlg: Authentication algorithm negotiated in the second phase. Value: md5|sha1, default value: md5.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "ipsecAuthAlg", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? IpsecAuthAlg
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: ipsecEncAlg: Encryption algorithm negotiated in the second phase. Value: aes|aes192|aes256|des|3des, default value: aes.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "ipsecEncAlg", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? IpsecEncAlg
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: ipsecLifetime: IpsecLifetime: The life cycle of the SA negotiated in the second phase. The value ranges from 0 to 86400, in seconds. The default value is 86400.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "ipsecLifetime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? IpsecLifetime
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: ipsecPfs: Forwards all protocol packets. The Diffie-Hellman key exchange algorithm used in the first phase negotiation, the value: group1|group2|group5|group14|group24, default value: group2.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "ipsecPfs", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? IpsecPfs
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-vpc.RosVpnConnection.IpsecConfigProperty")]
        public class IpsecConfigProperty : AlibabaCloud.SDK.ROS.CDK.Vpc.RosVpnConnection.IIpsecConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: ipsecAuthAlg: Authentication algorithm negotiated in the second phase. Value: md5|sha1, default value: md5.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ipsecAuthAlg", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? IpsecAuthAlg
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: ipsecEncAlg: Encryption algorithm negotiated in the second phase. Value: aes|aes192|aes256|des|3des, default value: aes.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ipsecEncAlg", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? IpsecEncAlg
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: ipsecLifetime: IpsecLifetime: The life cycle of the SA negotiated in the second phase. The value ranges from 0 to 86400, in seconds. The default value is 86400.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ipsecLifetime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? IpsecLifetime
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: ipsecPfs: Forwards all protocol packets. The Diffie-Hellman key exchange algorithm used in the first phase negotiation, the value: group1|group2|group5|group14|group24, default value: group2.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ipsecPfs", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? IpsecPfs
            {
                get;
                set;
            }
        }
    }
}
