using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Uis
{
    /// <summary>A ROS template type:  `ALIYUN::UIS::UisConnection`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Uis.RosUisConnection), fullyQualifiedName: "@alicloud/ros-cdk-uis.RosUisConnection", parametersJson: "[{\"docs\":{\"summary\":\"- scope in which this resource is defined.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"summary\":\"- scoped id of the resource.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- resource properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-uis.RosUisConnectionProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RosUisConnection : AlibabaCloud.SDK.ROS.CDK.Core.RosResource
    {
        /// <summary>Create a new `ALIYUN::UIS::UisConnection`.</summary>
        /// <param name="scope">- scope in which this resource is defined.</param>
        /// <param name="id">- scoped id of the resource.</param>
        /// <param name="props">- resource properties.</param>
        public RosUisConnection(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Uis.IRosUisConnectionProps props, bool enableResourcePropertyConstraint): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosUisConnection(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosUisConnection(DeputyProps props): base(props)
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
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Uis.RosUisConnection))!;

        /// <remarks>
        /// <strong>Attribute</strong>: UisConnectionId: ID of the VPN server. This ID does not distinguish between protocols.
        /// </remarks>
        [JsiiProperty(name: "attrUisConnectionId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrUisConnectionId
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "rosProperties", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}")]
        protected override System.Collections.Generic.IDictionary<string, object> RosProperties
        {
            get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>>()!;
        }

        [JsiiProperty(name: "enableResourcePropertyConstraint", typeJson: "{\"primitive\":\"boolean\"}")]
        public virtual bool EnableResourcePropertyConstraint
        {
            get => GetInstanceProperty<bool>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: uisNodeId: Node instance ID.
        /// </remarks>
        [JsiiProperty(name: "uisNodeId", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string UisNodeId
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: uisProtocol: The protocol name used by the software and server. The default value is SSLVPN.
        /// </remarks>
        [JsiiProperty(name: "uisProtocol", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string UisProtocol
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: description: A description of the tunnel connection.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? Description
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: greConfig: The config for GRE. Item can be overwritten, but removed.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "greConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-uis.RosUisConnection.GreConfigProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public virtual object? GreConfig
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: name: The name of the tunnel connection.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? Name
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: sslConfig: The config for SSLVPN.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "sslConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-uis.RosUisConnection.SslConfigProperty\"}]}}", isOptional: true)]
        public virtual object? SslConfig
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }
        [JsiiInterface(nativeType: typeof(IGreConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-uis.RosUisConnection.GreConfigProperty")]
        public interface IGreConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: customerIp: The customer's public IP.
            /// </remarks>
            [JsiiProperty(name: "customerIp", typeJson: "{\"primitive\":\"string\"}")]
            string CustomerIp
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: customerSubnet: The CIDR of customer's GRE private network.
            /// </remarks>
            [JsiiProperty(name: "customerSubnet", typeJson: "{\"primitive\":\"string\"}")]
            string CustomerSubnet
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: customerTunnelIp: The GRE Tunnel IP for Customer.
            /// </remarks>
            [JsiiProperty(name: "customerTunnelIp", typeJson: "{\"primitive\":\"string\"}")]
            string CustomerTunnelIp
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: localIp: UisNode IP.
            /// </remarks>
            [JsiiProperty(name: "localIp", typeJson: "{\"primitive\":\"string\"}")]
            string LocalIp
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: localTunnelIp: The GRE Tunnel IP for UisNode.
            /// </remarks>
            [JsiiProperty(name: "localTunnelIp", typeJson: "{\"primitive\":\"string\"}")]
            string LocalTunnelIp
            {
                get;
            }

            [JsiiTypeProxy(nativeType: typeof(IGreConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-uis.RosUisConnection.GreConfigProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Uis.RosUisConnection.IGreConfigProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: customerIp: The customer's public IP.
                /// </remarks>
                [JsiiProperty(name: "customerIp", typeJson: "{\"primitive\":\"string\"}")]
                public string CustomerIp
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: customerSubnet: The CIDR of customer's GRE private network.
                /// </remarks>
                [JsiiProperty(name: "customerSubnet", typeJson: "{\"primitive\":\"string\"}")]
                public string CustomerSubnet
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: customerTunnelIp: The GRE Tunnel IP for Customer.
                /// </remarks>
                [JsiiProperty(name: "customerTunnelIp", typeJson: "{\"primitive\":\"string\"}")]
                public string CustomerTunnelIp
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: localIp: UisNode IP.
                /// </remarks>
                [JsiiProperty(name: "localIp", typeJson: "{\"primitive\":\"string\"}")]
                public string LocalIp
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: localTunnelIp: The GRE Tunnel IP for UisNode.
                /// </remarks>
                [JsiiProperty(name: "localTunnelIp", typeJson: "{\"primitive\":\"string\"}")]
                public string LocalTunnelIp
                {
                    get => GetInstanceProperty<string>()!;
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-uis.RosUisConnection.GreConfigProperty")]
        public class GreConfigProperty : AlibabaCloud.SDK.ROS.CDK.Uis.RosUisConnection.IGreConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: customerIp: The customer's public IP.
            /// </remarks>
            [JsiiProperty(name: "customerIp", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string CustomerIp
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: customerSubnet: The CIDR of customer's GRE private network.
            /// </remarks>
            [JsiiProperty(name: "customerSubnet", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string CustomerSubnet
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: customerTunnelIp: The GRE Tunnel IP for Customer.
            /// </remarks>
            [JsiiProperty(name: "customerTunnelIp", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string CustomerTunnelIp
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: localIp: UisNode IP.
            /// </remarks>
            [JsiiProperty(name: "localIp", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string LocalIp
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: localTunnelIp: The GRE Tunnel IP for UisNode.
            /// </remarks>
            [JsiiProperty(name: "localTunnelIp", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string LocalTunnelIp
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(ISslConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-uis.RosUisConnection.SslConfigProperty")]
        public interface ISslConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: cipher: The encryption algorithm used by SSL-VPN. Value: AES-128-CBC (default) | AES-192-CBC | AES-256-CBC | none.
            /// </remarks>
            [JsiiProperty(name: "cipher", typeJson: "{\"primitive\":\"string\"}")]
            string Cipher
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: port: The port used by the SSL-VPN server. The default value is 1194. The port range us 1025-10000, and avoid the following well-known ports [22, 2222, 22222, 9000, 9001, 9002, 7505, 80, 443, 53, 68, 123, 4510, 4560, 500, 4500]
            /// </remarks>
            [JsiiProperty(name: "port", typeJson: "{\"primitive\":\"number\"}")]
            double Port
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: protocol: The protocol used by the SSL-VPN server. Value: UDP (default) | TCP
            /// </remarks>
            [JsiiProperty(name: "protocol", typeJson: "{\"primitive\":\"string\"}")]
            string Protocol
            {
                get;
            }

            [JsiiTypeProxy(nativeType: typeof(ISslConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-uis.RosUisConnection.SslConfigProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Uis.RosUisConnection.ISslConfigProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: cipher: The encryption algorithm used by SSL-VPN. Value: AES-128-CBC (default) | AES-192-CBC | AES-256-CBC | none.
                /// </remarks>
                [JsiiProperty(name: "cipher", typeJson: "{\"primitive\":\"string\"}")]
                public string Cipher
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: port: The port used by the SSL-VPN server. The default value is 1194. The port range us 1025-10000, and avoid the following well-known ports [22, 2222, 22222, 9000, 9001, 9002, 7505, 80, 443, 53, 68, 123, 4510, 4560, 500, 4500]
                /// </remarks>
                [JsiiProperty(name: "port", typeJson: "{\"primitive\":\"number\"}")]
                public double Port
                {
                    get => GetInstanceProperty<double>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: protocol: The protocol used by the SSL-VPN server. Value: UDP (default) | TCP
                /// </remarks>
                [JsiiProperty(name: "protocol", typeJson: "{\"primitive\":\"string\"}")]
                public string Protocol
                {
                    get => GetInstanceProperty<string>()!;
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-uis.RosUisConnection.SslConfigProperty")]
        public class SslConfigProperty : AlibabaCloud.SDK.ROS.CDK.Uis.RosUisConnection.ISslConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: cipher: The encryption algorithm used by SSL-VPN. Value: AES-128-CBC (default) | AES-192-CBC | AES-256-CBC | none.
            /// </remarks>
            [JsiiProperty(name: "cipher", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string Cipher
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: port: The port used by the SSL-VPN server. The default value is 1194. The port range us 1025-10000, and avoid the following well-known ports [22, 2222, 22222, 9000, 9001, 9002, 7505, 80, 443, 53, 68, 123, 4510, 4560, 500, 4500]
            /// </remarks>
            [JsiiProperty(name: "port", typeJson: "{\"primitive\":\"number\"}", isOverride: true)]
            public double Port
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: protocol: The protocol used by the SSL-VPN server. Value: UDP (default) | TCP
            /// </remarks>
            [JsiiProperty(name: "protocol", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string Protocol
            {
                get;
                set;
            }
        }
    }
}
