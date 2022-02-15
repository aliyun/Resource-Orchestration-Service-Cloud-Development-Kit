using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>A ROS template type:  `ALIYUN::VPC::IpsecServer`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Vpc.RosIpsecServer), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosIpsecServer", parametersJson: "[{\"docs\":{\"summary\":\"- scope in which this resource is defined.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"summary\":\"- scoped id of the resource.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- resource properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-vpc.RosIpsecServerProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RosIpsecServer : AlibabaCloud.SDK.ROS.CDK.Core.RosResource
    {
        /// <summary>Create a new `ALIYUN::VPC::IpsecServer`.</summary>
        /// <param name="scope">- scope in which this resource is defined.</param>
        /// <param name="id">- scoped id of the resource.</param>
        /// <param name="props">- resource properties.</param>
        public RosIpsecServer(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Vpc.IRosIpsecServerProps props, bool enableResourcePropertyConstraint): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosIpsecServer(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosIpsecServer(DeputyProps props): base(props)
        {
        }

        [JsiiMethod(name: "renderProperties", returnsJson: "{\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}", parametersJson: "[{\"name\":\"props\",\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}]")]
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
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Vpc.RosIpsecServer))!;

        /// <remarks>
        /// <strong>Attribute</strong>: IpsecServerId: IPsec server ID.
        /// </remarks>
        [JsiiProperty(name: "attrIpsecServerId", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrIpsecServerId
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: IpsecServerName: IPsec server name.
        /// </remarks>
        [JsiiProperty(name: "attrIpsecServerName", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrIpsecServerName
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        [JsiiProperty(name: "rosProperties", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}")]
        protected override System.Collections.Generic.IDictionary<string, object> RosProperties
        {
            get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>>()!;
        }

        /// <remarks>
        /// <strong>Property</strong>: clientIpPool: Client network segment refers to the address segment that assigns access addresses to the virtual network card of the client. Note: The client network segment cannot conflict with the VPC side network segment.
        /// </remarks>
        [JsiiProperty(name: "clientIpPool", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object ClientIpPool
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
        /// <strong>Property</strong>: localSubnet: The local network segment refers to the network segment on the VPC side that needs to be interconnected with the client network segment. Use half-width commas (,) to separate multiple network segments, for example: 192.168.1.0/24,192.168.2.0/24.
        /// </remarks>
        [JsiiProperty(name: "localSubnet", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object LocalSubnet
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: vpnGatewayId: VPN gateway instance ID.
        /// </remarks>
        [JsiiProperty(name: "vpnGatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object VpnGatewayId
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: effectImmediately: true: Apply the new configuration and trigger a reconnection immediately.
        /// false: Trigger a reconnection only when network traffic occurs. (The reconnection may cause the network to be unavailable for a brief moment)
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "effectImmediately", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? EffectImmediately
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: ikeConfig: Negotiation parameter configuration in the first phase.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "ikeConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-vpc.RosIpsecServer.IkeConfigProperty\"}]}}", isOptional: true)]
        public virtual object? IkeConfig
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: ipsecConfig: Negotiation parameter configuration in the second phase.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "ipsecConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-vpc.RosIpsecServer.IpsecConfigProperty\"}]}}", isOptional: true)]
        public virtual object? IpsecConfig
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: ipsecServerName: The value must be 2 to 128 characters in length and start with a letter or Chinese character. It can contain digits, underscores (_), and hyphens (-).
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "ipsecServerName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? IpsecServerName
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: psk: Pre-Shared key. Used for identity authentication between the VPN gateway and the client. A 16-bit random string is randomly generated by default, or you can manually specify the key. The length is limited to 100 characters.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "psk", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? Psk
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: pskEnabled: Whether to enable the pre-shared key authentication method. Only the value is true, which means that the pre-shared key authentication mode is enabled.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "pskEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? PskEnabled
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }
        [JsiiInterface(nativeType: typeof(IIkeConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosIpsecServer.IkeConfigProperty")]
        public interface IIkeConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: ikeAuthAlg: The authentication algorithm negotiated in the first phase. Default value: sha1.
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
            /// <strong>Property</strong>: ikeEncAlg: Encryption algorithm negotiated in the first stage. Default value: aes.
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
            /// <strong>Property</strong>: ikeLifetime: The life cycle of the SA negotiated in the first phase. Default value: 86400, in seconds.
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
            /// <strong>Property</strong>: ikeMode: Negotiation mode of the IKE version. Default value: main.
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
            /// <strong>Property</strong>: ikePfs: The Diffie-Hellman key exchange algorithm used in the first stage of negotiation. Default value: group2.
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
            /// <strong>Property</strong>: ikeVersion: The version of the IKE protocol. Value: ikev1 or ikev2, default value: ikev2.
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
            /// <strong>Property</strong>: localId: IPsec server ID. Support FQDN and IP address format, the default value is the VPN gateway public network IP address.
            /// </remarks>
            [JsiiProperty(name: "localId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? LocalId
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: remoteId: Peer ID. Support FQDN and IP address format, the default value is empty.
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

            [JsiiTypeProxy(nativeType: typeof(IIkeConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosIpsecServer.IkeConfigProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.RosIpsecServer.IIkeConfigProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: ikeAuthAlg: The authentication algorithm negotiated in the first phase. Default value: sha1.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "ikeAuthAlg", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? IkeAuthAlg
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: ikeEncAlg: Encryption algorithm negotiated in the first stage. Default value: aes.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "ikeEncAlg", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? IkeEncAlg
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: ikeLifetime: The life cycle of the SA negotiated in the first phase. Default value: 86400, in seconds.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "ikeLifetime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? IkeLifetime
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: ikeMode: Negotiation mode of the IKE version. Default value: main.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "ikeMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? IkeMode
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: ikePfs: The Diffie-Hellman key exchange algorithm used in the first stage of negotiation. Default value: group2.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "ikePfs", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? IkePfs
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: ikeVersion: The version of the IKE protocol. Value: ikev1 or ikev2, default value: ikev2.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "ikeVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? IkeVersion
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: localId: IPsec server ID. Support FQDN and IP address format, the default value is the VPN gateway public network IP address.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "localId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? LocalId
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: remoteId: Peer ID. Support FQDN and IP address format, the default value is empty.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "remoteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? RemoteId
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-vpc.RosIpsecServer.IkeConfigProperty")]
        public class IkeConfigProperty : AlibabaCloud.SDK.ROS.CDK.Vpc.RosIpsecServer.IIkeConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: ikeAuthAlg: The authentication algorithm negotiated in the first phase. Default value: sha1.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ikeAuthAlg", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IkeAuthAlg
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: ikeEncAlg: Encryption algorithm negotiated in the first stage. Default value: aes.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ikeEncAlg", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IkeEncAlg
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: ikeLifetime: The life cycle of the SA negotiated in the first phase. Default value: 86400, in seconds.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ikeLifetime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IkeLifetime
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: ikeMode: Negotiation mode of the IKE version. Default value: main.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ikeMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IkeMode
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: ikePfs: The Diffie-Hellman key exchange algorithm used in the first stage of negotiation. Default value: group2.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ikePfs", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IkePfs
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: ikeVersion: The version of the IKE protocol. Value: ikev1 or ikev2, default value: ikev2.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ikeVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IkeVersion
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: localId: IPsec server ID. Support FQDN and IP address format, the default value is the VPN gateway public network IP address.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "localId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LocalId
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: remoteId: Peer ID. Support FQDN and IP address format, the default value is empty.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "remoteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RemoteId
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IIpsecConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosIpsecServer.IpsecConfigProperty")]
        public interface IIpsecConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: ipsecAuthAlg: The authentication algorithm negotiated in the second phase. Default value: sha1.
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
            /// <strong>Property</strong>: ipsecEncAlg: Encryption algorithm negotiated in the second stage. Default value: aes.
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
            /// <strong>Property</strong>: ipsecLifetime: The lifetime of the SA negotiated in the second stage. Default value: 86400, in seconds.
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
            /// <strong>Property</strong>: ipsecPfs: The Diffie-Hellman key exchange algorithm used in the second phase of negotiation. Default value: group2.
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

            [JsiiTypeProxy(nativeType: typeof(IIpsecConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosIpsecServer.IpsecConfigProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.RosIpsecServer.IIpsecConfigProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: ipsecAuthAlg: The authentication algorithm negotiated in the second phase. Default value: sha1.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "ipsecAuthAlg", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? IpsecAuthAlg
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: ipsecEncAlg: Encryption algorithm negotiated in the second stage. Default value: aes.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "ipsecEncAlg", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? IpsecEncAlg
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: ipsecLifetime: The lifetime of the SA negotiated in the second stage. Default value: 86400, in seconds.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "ipsecLifetime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? IpsecLifetime
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: ipsecPfs: The Diffie-Hellman key exchange algorithm used in the second phase of negotiation. Default value: group2.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "ipsecPfs", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? IpsecPfs
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-vpc.RosIpsecServer.IpsecConfigProperty")]
        public class IpsecConfigProperty : AlibabaCloud.SDK.ROS.CDK.Vpc.RosIpsecServer.IIpsecConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: ipsecAuthAlg: The authentication algorithm negotiated in the second phase. Default value: sha1.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ipsecAuthAlg", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IpsecAuthAlg
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: ipsecEncAlg: Encryption algorithm negotiated in the second stage. Default value: aes.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ipsecEncAlg", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IpsecEncAlg
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: ipsecLifetime: The lifetime of the SA negotiated in the second stage. Default value: 86400, in seconds.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ipsecLifetime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IpsecLifetime
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: ipsecPfs: The Diffie-Hellman key exchange algorithm used in the second phase of negotiation. Default value: group2.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ipsecPfs", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IpsecPfs
            {
                get;
                set;
            }
        }
    }
}
