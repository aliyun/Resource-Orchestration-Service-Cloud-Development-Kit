using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Alb
{
    /// <summary>A ROS template type:  `ALIYUN::ALB::Listener`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Alb.RosListener), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosListener", parametersJson: "[{\"docs\":{\"summary\":\"- scope in which this resource is defined.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"summary\":\"- scoped id of the resource.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- resource properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-alb.RosListenerProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RosListener : AlibabaCloud.SDK.ROS.CDK.Core.RosResource
    {
        /// <summary>Create a new `ALIYUN::ALB::Listener`.</summary>
        /// <param name="scope">- scope in which this resource is defined.</param>
        /// <param name="id">- scoped id of the resource.</param>
        /// <param name="props">- resource properties.</param>
        public RosListener(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Alb.IRosListenerProps props, bool enableResourcePropertyConstraint): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosListener(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosListener(DeputyProps props): base(props)
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
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Alb.RosListener))!;

        /// <remarks>
        /// <strong>Attribute</strong>: ListenerId: The ID of the listener.
        /// </remarks>
        [JsiiProperty(name: "attrListenerId", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrListenerId
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        [JsiiProperty(name: "rosProperties", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}")]
        protected override System.Collections.Generic.IDictionary<string, object> RosProperties
        {
            get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>>()!;
        }

        /// <remarks>
        /// <strong>Property</strong>: defaultActions: The actions of the rule.
        /// </remarks>
        [JsiiProperty(name: "defaultActions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosListener.DefaultActionsProperty\"}]}},\"kind\":\"array\"}}]}}")]
        public virtual object DefaultActions
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
        /// <strong>Property</strong>: listenerPort: The frontend port that is used by the ALB instance.
        /// Valid values: 1 to 65535.
        /// </remarks>
        [JsiiProperty(name: "listenerPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object ListenerPort
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: listenerProtocol: The listener protocol.
        /// Valid values: HTTP, HTTPS, and QUIC.
        /// </remarks>
        [JsiiProperty(name: "listenerProtocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object ListenerProtocol
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: loadBalancerId: The ID of the ALB instance.
        /// </remarks>
        [JsiiProperty(name: "loadBalancerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object LoadBalancerId
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: certificates: The content of the SSL certificate.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "certificates", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosListener.CertificatesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public virtual object? Certificates
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: gzipEnabled: Specifies whether to enable gzip compression to compress files of a specific type.
        /// Valid values: true and false.
        /// Default value: true.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "gzipEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? GzipEnabled
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: http2Enabled: Specifies whether to enable HTTP/2. Default value: on.
        /// Valid values: true and false.
        /// Default value: true.
        /// Note Only HTTPS listeners support this parameter.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "http2Enabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? Http2Enabled
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: idleTimeout: The timeout period of idle connections.
        /// Valid values: 1 to 60. Unit: seconds.
        /// Default value: 15.
        /// If no request is received within the specified timeout period, ALB closes the connection.
        /// ALB recreates the connection when a new connection request is received.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "idleTimeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? IdleTimeout
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: listenerDescription: The description of the listener.
        /// The description must be 2 to 256 characters in length.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "listenerDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? ListenerDescription
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: quicConfig: Select a QUIC listener and associate it with the ALB instance.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "quicConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosListener.QuicConfigProperty\"}]}}", isOptional: true)]
        public virtual object? QuicConfig
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: requestTimeout: The timeout period of the request.
        /// Valid values: 1 to 180. Unit: seconds.
        /// Default value: 60.
        /// If no response is received from the backend server during the request timeout period,
        /// ALB sends an HTTP 504 error code to the client.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "requestTimeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? RequestTimeout
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: securityPolicyId: The ID of the security policy. System security policies and custom security policies
        /// are supported.
        /// Default value: tls_cipher_policy_1_0. This value indicates a system security policy.
        /// Note Only HTTPS listeners support this parameter.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "securityPolicyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? SecurityPolicyId
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: xForwardedForConfig: The configuration of the XForward field.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "xForwardedForConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosListener.XForwardedForConfigProperty\"}]}}", isOptional: true)]
        public virtual object? XForwardedForConfig
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }
        [JsiiInterface(nativeType: typeof(ICertificatesProperty), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosListener.CertificatesProperty")]
        public interface ICertificatesProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: certificateId: The certificate ID. You must enter IDs of server certificate.
            /// </remarks>
            [JsiiProperty(name: "certificateId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? CertificateId
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(ICertificatesProperty), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosListener.CertificatesProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Alb.RosListener.ICertificatesProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: certificateId: The certificate ID. You must enter IDs of server certificate.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "certificateId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? CertificateId
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-alb.RosListener.CertificatesProperty")]
        public class CertificatesProperty : AlibabaCloud.SDK.ROS.CDK.Alb.RosListener.ICertificatesProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: certificateId: The certificate ID. You must enter IDs of server certificate.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "certificateId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CertificateId
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IDefaultActionsProperty), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosListener.DefaultActionsProperty")]
        public interface IDefaultActionsProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: forwardGroupConfig: The configurations of the actions. This parameter is required if Type is set to FowardGroup.
            /// </remarks>
            [JsiiProperty(name: "forwardGroupConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosListener.ForwardGroupConfigProperty\"}]}}")]
            object ForwardGroupConfig
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: type: The action type. The value is set to ForwardGroup.
            /// It indicates that requests are forwarded to multiple vServer groups.
            /// </remarks>
            [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Type
            {
                get;
            }

            [JsiiTypeProxy(nativeType: typeof(IDefaultActionsProperty), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosListener.DefaultActionsProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Alb.RosListener.IDefaultActionsProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: forwardGroupConfig: The configurations of the actions. This parameter is required if Type is set to FowardGroup.
                /// </remarks>
                [JsiiProperty(name: "forwardGroupConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosListener.ForwardGroupConfigProperty\"}]}}")]
                public object ForwardGroupConfig
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: type: The action type. The value is set to ForwardGroup.
                /// It indicates that requests are forwarded to multiple vServer groups.
                /// </remarks>
                [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Type
                {
                    get => GetInstanceProperty<object>()!;
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-alb.RosListener.DefaultActionsProperty")]
        public class DefaultActionsProperty : AlibabaCloud.SDK.ROS.CDK.Alb.RosListener.IDefaultActionsProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: forwardGroupConfig: The configurations of the actions. This parameter is required if Type is set to FowardGroup.
            /// </remarks>
            [JsiiProperty(name: "forwardGroupConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosListener.ForwardGroupConfigProperty\"}]}}")]
            public object ForwardGroupConfig
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: type: The action type. The value is set to ForwardGroup.
            /// It indicates that requests are forwarded to multiple vServer groups.
            /// </remarks>
            [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Type
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IForwardGroupConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosListener.ForwardGroupConfigProperty")]
        public interface IForwardGroupConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: serverGroupTuples: The destination server group to which requests are forwarded.
            /// </remarks>
            [JsiiProperty(name: "serverGroupTuples", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosListener.ServerGroupTuplesProperty\"}]}},\"kind\":\"array\"}}]}}")]
            object ServerGroupTuples
            {
                get;
            }

            [JsiiTypeProxy(nativeType: typeof(IForwardGroupConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosListener.ForwardGroupConfigProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Alb.RosListener.IForwardGroupConfigProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: serverGroupTuples: The destination server group to which requests are forwarded.
                /// </remarks>
                [JsiiProperty(name: "serverGroupTuples", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosListener.ServerGroupTuplesProperty\"}]}},\"kind\":\"array\"}}]}}")]
                public object ServerGroupTuples
                {
                    get => GetInstanceProperty<object>()!;
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-alb.RosListener.ForwardGroupConfigProperty")]
        public class ForwardGroupConfigProperty : AlibabaCloud.SDK.ROS.CDK.Alb.RosListener.IForwardGroupConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: serverGroupTuples: The destination server group to which requests are forwarded.
            /// </remarks>
            [JsiiProperty(name: "serverGroupTuples", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosListener.ServerGroupTuplesProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object ServerGroupTuples
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IQuicConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosListener.QuicConfigProperty")]
        public interface IQuicConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: quicListenerId: The ID of the QUIC listener to be associated. Only HTTPS listeners support this parameter. If QuicUpgradeEnabled is set to true, this parameter is required.
            /// Note The original listener and the QUIC listener must belong to the same ALB instance.
            /// In addition, make sure that the QUIC listener has not been associated before.
            /// </remarks>
            [JsiiProperty(name: "quicListenerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? QuicListenerId
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: quicUpgradeEnabled: Specifies whether to enable the QUIC update feature.
            /// Valid values: true and false.
            /// Default value: false.
            /// Note Only HTTPS listeners support this parameter.
            /// </remarks>
            [JsiiProperty(name: "quicUpgradeEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? QuicUpgradeEnabled
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IQuicConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosListener.QuicConfigProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Alb.RosListener.IQuicConfigProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: quicListenerId: The ID of the QUIC listener to be associated. Only HTTPS listeners support this parameter. If QuicUpgradeEnabled is set to true, this parameter is required.
                /// Note The original listener and the QUIC listener must belong to the same ALB instance.
                /// In addition, make sure that the QUIC listener has not been associated before.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "quicListenerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? QuicListenerId
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: quicUpgradeEnabled: Specifies whether to enable the QUIC update feature.
                /// Valid values: true and false.
                /// Default value: false.
                /// Note Only HTTPS listeners support this parameter.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "quicUpgradeEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? QuicUpgradeEnabled
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-alb.RosListener.QuicConfigProperty")]
        public class QuicConfigProperty : AlibabaCloud.SDK.ROS.CDK.Alb.RosListener.IQuicConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: quicListenerId: The ID of the QUIC listener to be associated. Only HTTPS listeners support this parameter. If QuicUpgradeEnabled is set to true, this parameter is required.
            /// Note The original listener and the QUIC listener must belong to the same ALB instance.
            /// In addition, make sure that the QUIC listener has not been associated before.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "quicListenerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? QuicListenerId
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: quicUpgradeEnabled: Specifies whether to enable the QUIC update feature.
            /// Valid values: true and false.
            /// Default value: false.
            /// Note Only HTTPS listeners support this parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "quicUpgradeEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? QuicUpgradeEnabled
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IServerGroupTuplesProperty), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosListener.ServerGroupTuplesProperty")]
        public interface IServerGroupTuplesProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: serverGroupId: The ID of the destination server group to which requests are forwarded.
            /// </remarks>
            [JsiiProperty(name: "serverGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object ServerGroupId
            {
                get;
            }

            [JsiiTypeProxy(nativeType: typeof(IServerGroupTuplesProperty), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosListener.ServerGroupTuplesProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Alb.RosListener.IServerGroupTuplesProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: serverGroupId: The ID of the destination server group to which requests are forwarded.
                /// </remarks>
                [JsiiProperty(name: "serverGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object ServerGroupId
                {
                    get => GetInstanceProperty<object>()!;
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-alb.RosListener.ServerGroupTuplesProperty")]
        public class ServerGroupTuplesProperty : AlibabaCloud.SDK.ROS.CDK.Alb.RosListener.IServerGroupTuplesProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: serverGroupId: The ID of the destination server group to which requests are forwarded.
            /// </remarks>
            [JsiiProperty(name: "serverGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ServerGroupId
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IXForwardedForConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosListener.XForwardedForConfigProperty")]
        public interface IXForwardedForConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: xForwardedForClientCertClientVerifyAlias: The name of the custom header. This parameter is valid only if XForwardedForClientCertClientVerifyEnabled is set to true.
            /// The name must be 1 to 40 characters in length, and can contain letters, hyphens (-),
            /// underscores (_), and digits.
            /// Note Only HTTPS listeners support this parameter.
            /// </remarks>
            [JsiiProperty(name: "xForwardedForClientCertClientVerifyAlias", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? XForwardedForClientCertClientVerifyAlias
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: xForwardedForClientCertClientVerifyEnabled: Specifies whether to use the X-Forwarded-Clientcert-clientverify header field to obtain the verification result of the ALB client certificate.
            /// Valid values: true and false.
            /// Default value: false.
            /// Note Only HTTPS listeners support this parameter.
            /// </remarks>
            [JsiiProperty(name: "xForwardedForClientCertClientVerifyEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? XForwardedForClientCertClientVerifyEnabled
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: xForwardedForClientCertFingerprintAlias: The name of the custom header. This parameter is valid only if XForwardedForClientCertFingerprintEnabled is set to true.
            /// The name must be 1 to 40 characters in length, and can contain letters, hyphens (-),
            /// underscores (_), and digits.
            /// Note Only HTTPS listeners support this parameter.
            /// </remarks>
            [JsiiProperty(name: "xForwardedForClientCertFingerprintAlias", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? XForwardedForClientCertFingerprintAlias
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: xForwardedForClientCertFingerprintEnabled: Specifies whether to use the X-Forwarded-Clientcert-fingerprint header field to obtain the fingerprint of the ALB client certificate.
            /// Valid values: true and false.
            /// Default value: false.
            /// Note Only HTTPS listeners support this parameter.
            /// </remarks>
            [JsiiProperty(name: "xForwardedForClientCertFingerprintEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? XForwardedForClientCertFingerprintEnabled
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: xForwardedForClientCertIssuerDnAlias: The name of the custom header. This parameter is valid only if XForwardedForClientCertIssuerDNEnabled is set to On.
            /// The name must be 1 to 40 characters in length, and can contain letters, hyphens (-),
            /// underscores (_), and digits.
            /// Note Only HTTPS listeners support this parameter.
            /// </remarks>
            [JsiiProperty(name: "xForwardedForClientCertIssuerDnAlias", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? XForwardedForClientCertIssuerDnAlias
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: xForwardedForClientCertIssuerDnEnabled: Specifies whether to use the X-Forwarded-Clientcert-issuerdn header field to obtain information about the authority that issues the ALB client
            /// certificate.
            /// Valid values: true and false.
            /// Default value: false.
            /// Note Only HTTPS listeners support this parameter.
            /// </remarks>
            [JsiiProperty(name: "xForwardedForClientCertIssuerDnEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? XForwardedForClientCertIssuerDnEnabled
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: xForwardedForClientCertSubjectDnAlias: The name of the custom header. This parameter is valid only if XForwardedForClientCertSubjectDNEnabled
            /// is set to true.
            /// The name must be 1 to 40 characters in length, and can contain letters, hyphens (-),
            /// underscores (_), and digits.
            /// Note Only HTTPS listeners support this parameter.
            /// </remarks>
            [JsiiProperty(name: "xForwardedForClientCertSubjectDnAlias", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? XForwardedForClientCertSubjectDnAlias
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: xForwardedForClientCertSubjectDnEnabled: Specifies whether to use the X-Forwarded-Clientcert-subjectdn header field to obtain information about the owner of the ALB client certificate.
            /// Valid values: true and false.
            /// Default value: false.
            /// Note Only HTTPS listeners support this parameter.
            /// </remarks>
            [JsiiProperty(name: "xForwardedForClientCertSubjectDnEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? XForwardedForClientCertSubjectDnEnabled
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: xForwardedForClientSrcPortEnabled: Specifies whether to use the X-Forwarded-Client-Port header field to obtain the port of the ALB client.
            /// Valid values: true and false.
            /// Default value: false.
            /// Note HTTP and HTTPS listeners support this parameter.
            /// </remarks>
            [JsiiProperty(name: "xForwardedForClientSrcPortEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? XForwardedForClientSrcPortEnabled
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: xForwardedForEnabled: Specifies whether to use the X-Forwarded-For header field to obtain the real IP address of the client.
            /// Valid values: true and false.
            /// Default value: true.
            /// Note HTTP and HTTPS listeners support this parameter.
            /// </remarks>
            [JsiiProperty(name: "xForwardedForEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? XForwardedForEnabled
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: xForwardedForProtoEnabled: Specifies whether to use the X-Forwarded-Proto header field to obtain the listener protocol of the ALB instance.
            /// Valid values: true and false.
            /// Default value: false.
            /// Note HTTP, HTTPS, and QUIC listeners support this parameter.
            /// </remarks>
            [JsiiProperty(name: "xForwardedForProtoEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? XForwardedForProtoEnabled
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: xForwardedForSlbIdEnabled: Specifies whether to use the SLB-ID header field to obtain the ID of the ALB instance.
            /// Valid values: true and false.
            /// Default value: false.
            /// Note HTTP, HTTPS, and QUIC listeners support this parameter.
            /// </remarks>
            [JsiiProperty(name: "xForwardedForSlbIdEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? XForwardedForSlbIdEnabled
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: xForwardedForSlbPortEnabled: Specifies whether to use the X-Forwarded-Port header field to obtain the listener port of the ALB instance.
            /// Valid values: true and false.
            /// Default value: false.
            /// Note HTTP, HTTPS, and QUIC listeners support this parameter.
            /// </remarks>
            [JsiiProperty(name: "xForwardedForSlbPortEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? XForwardedForSlbPortEnabled
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IXForwardedForConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosListener.XForwardedForConfigProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Alb.RosListener.IXForwardedForConfigProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: xForwardedForClientCertClientVerifyAlias: The name of the custom header. This parameter is valid only if XForwardedForClientCertClientVerifyEnabled is set to true.
                /// The name must be 1 to 40 characters in length, and can contain letters, hyphens (-),
                /// underscores (_), and digits.
                /// Note Only HTTPS listeners support this parameter.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "xForwardedForClientCertClientVerifyAlias", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? XForwardedForClientCertClientVerifyAlias
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: xForwardedForClientCertClientVerifyEnabled: Specifies whether to use the X-Forwarded-Clientcert-clientverify header field to obtain the verification result of the ALB client certificate.
                /// Valid values: true and false.
                /// Default value: false.
                /// Note Only HTTPS listeners support this parameter.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "xForwardedForClientCertClientVerifyEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? XForwardedForClientCertClientVerifyEnabled
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: xForwardedForClientCertFingerprintAlias: The name of the custom header. This parameter is valid only if XForwardedForClientCertFingerprintEnabled is set to true.
                /// The name must be 1 to 40 characters in length, and can contain letters, hyphens (-),
                /// underscores (_), and digits.
                /// Note Only HTTPS listeners support this parameter.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "xForwardedForClientCertFingerprintAlias", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? XForwardedForClientCertFingerprintAlias
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: xForwardedForClientCertFingerprintEnabled: Specifies whether to use the X-Forwarded-Clientcert-fingerprint header field to obtain the fingerprint of the ALB client certificate.
                /// Valid values: true and false.
                /// Default value: false.
                /// Note Only HTTPS listeners support this parameter.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "xForwardedForClientCertFingerprintEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? XForwardedForClientCertFingerprintEnabled
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: xForwardedForClientCertIssuerDnAlias: The name of the custom header. This parameter is valid only if XForwardedForClientCertIssuerDNEnabled is set to On.
                /// The name must be 1 to 40 characters in length, and can contain letters, hyphens (-),
                /// underscores (_), and digits.
                /// Note Only HTTPS listeners support this parameter.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "xForwardedForClientCertIssuerDnAlias", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? XForwardedForClientCertIssuerDnAlias
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: xForwardedForClientCertIssuerDnEnabled: Specifies whether to use the X-Forwarded-Clientcert-issuerdn header field to obtain information about the authority that issues the ALB client
                /// certificate.
                /// Valid values: true and false.
                /// Default value: false.
                /// Note Only HTTPS listeners support this parameter.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "xForwardedForClientCertIssuerDnEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? XForwardedForClientCertIssuerDnEnabled
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: xForwardedForClientCertSubjectDnAlias: The name of the custom header. This parameter is valid only if XForwardedForClientCertSubjectDNEnabled
                /// is set to true.
                /// The name must be 1 to 40 characters in length, and can contain letters, hyphens (-),
                /// underscores (_), and digits.
                /// Note Only HTTPS listeners support this parameter.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "xForwardedForClientCertSubjectDnAlias", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? XForwardedForClientCertSubjectDnAlias
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: xForwardedForClientCertSubjectDnEnabled: Specifies whether to use the X-Forwarded-Clientcert-subjectdn header field to obtain information about the owner of the ALB client certificate.
                /// Valid values: true and false.
                /// Default value: false.
                /// Note Only HTTPS listeners support this parameter.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "xForwardedForClientCertSubjectDnEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? XForwardedForClientCertSubjectDnEnabled
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: xForwardedForClientSrcPortEnabled: Specifies whether to use the X-Forwarded-Client-Port header field to obtain the port of the ALB client.
                /// Valid values: true and false.
                /// Default value: false.
                /// Note HTTP and HTTPS listeners support this parameter.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "xForwardedForClientSrcPortEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? XForwardedForClientSrcPortEnabled
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: xForwardedForEnabled: Specifies whether to use the X-Forwarded-For header field to obtain the real IP address of the client.
                /// Valid values: true and false.
                /// Default value: true.
                /// Note HTTP and HTTPS listeners support this parameter.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "xForwardedForEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? XForwardedForEnabled
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: xForwardedForProtoEnabled: Specifies whether to use the X-Forwarded-Proto header field to obtain the listener protocol of the ALB instance.
                /// Valid values: true and false.
                /// Default value: false.
                /// Note HTTP, HTTPS, and QUIC listeners support this parameter.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "xForwardedForProtoEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? XForwardedForProtoEnabled
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: xForwardedForSlbIdEnabled: Specifies whether to use the SLB-ID header field to obtain the ID of the ALB instance.
                /// Valid values: true and false.
                /// Default value: false.
                /// Note HTTP, HTTPS, and QUIC listeners support this parameter.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "xForwardedForSlbIdEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? XForwardedForSlbIdEnabled
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: xForwardedForSlbPortEnabled: Specifies whether to use the X-Forwarded-Port header field to obtain the listener port of the ALB instance.
                /// Valid values: true and false.
                /// Default value: false.
                /// Note HTTP, HTTPS, and QUIC listeners support this parameter.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "xForwardedForSlbPortEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? XForwardedForSlbPortEnabled
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-alb.RosListener.XForwardedForConfigProperty")]
        public class XForwardedForConfigProperty : AlibabaCloud.SDK.ROS.CDK.Alb.RosListener.IXForwardedForConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: xForwardedForClientCertClientVerifyAlias: The name of the custom header. This parameter is valid only if XForwardedForClientCertClientVerifyEnabled is set to true.
            /// The name must be 1 to 40 characters in length, and can contain letters, hyphens (-),
            /// underscores (_), and digits.
            /// Note Only HTTPS listeners support this parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "xForwardedForClientCertClientVerifyAlias", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? XForwardedForClientCertClientVerifyAlias
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: xForwardedForClientCertClientVerifyEnabled: Specifies whether to use the X-Forwarded-Clientcert-clientverify header field to obtain the verification result of the ALB client certificate.
            /// Valid values: true and false.
            /// Default value: false.
            /// Note Only HTTPS listeners support this parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "xForwardedForClientCertClientVerifyEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? XForwardedForClientCertClientVerifyEnabled
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: xForwardedForClientCertFingerprintAlias: The name of the custom header. This parameter is valid only if XForwardedForClientCertFingerprintEnabled is set to true.
            /// The name must be 1 to 40 characters in length, and can contain letters, hyphens (-),
            /// underscores (_), and digits.
            /// Note Only HTTPS listeners support this parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "xForwardedForClientCertFingerprintAlias", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? XForwardedForClientCertFingerprintAlias
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: xForwardedForClientCertFingerprintEnabled: Specifies whether to use the X-Forwarded-Clientcert-fingerprint header field to obtain the fingerprint of the ALB client certificate.
            /// Valid values: true and false.
            /// Default value: false.
            /// Note Only HTTPS listeners support this parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "xForwardedForClientCertFingerprintEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? XForwardedForClientCertFingerprintEnabled
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: xForwardedForClientCertIssuerDnAlias: The name of the custom header. This parameter is valid only if XForwardedForClientCertIssuerDNEnabled is set to On.
            /// The name must be 1 to 40 characters in length, and can contain letters, hyphens (-),
            /// underscores (_), and digits.
            /// Note Only HTTPS listeners support this parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "xForwardedForClientCertIssuerDnAlias", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? XForwardedForClientCertIssuerDnAlias
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: xForwardedForClientCertIssuerDnEnabled: Specifies whether to use the X-Forwarded-Clientcert-issuerdn header field to obtain information about the authority that issues the ALB client
            /// certificate.
            /// Valid values: true and false.
            /// Default value: false.
            /// Note Only HTTPS listeners support this parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "xForwardedForClientCertIssuerDnEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? XForwardedForClientCertIssuerDnEnabled
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: xForwardedForClientCertSubjectDnAlias: The name of the custom header. This parameter is valid only if XForwardedForClientCertSubjectDNEnabled
            /// is set to true.
            /// The name must be 1 to 40 characters in length, and can contain letters, hyphens (-),
            /// underscores (_), and digits.
            /// Note Only HTTPS listeners support this parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "xForwardedForClientCertSubjectDnAlias", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? XForwardedForClientCertSubjectDnAlias
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: xForwardedForClientCertSubjectDnEnabled: Specifies whether to use the X-Forwarded-Clientcert-subjectdn header field to obtain information about the owner of the ALB client certificate.
            /// Valid values: true and false.
            /// Default value: false.
            /// Note Only HTTPS listeners support this parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "xForwardedForClientCertSubjectDnEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? XForwardedForClientCertSubjectDnEnabled
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: xForwardedForClientSrcPortEnabled: Specifies whether to use the X-Forwarded-Client-Port header field to obtain the port of the ALB client.
            /// Valid values: true and false.
            /// Default value: false.
            /// Note HTTP and HTTPS listeners support this parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "xForwardedForClientSrcPortEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? XForwardedForClientSrcPortEnabled
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: xForwardedForEnabled: Specifies whether to use the X-Forwarded-For header field to obtain the real IP address of the client.
            /// Valid values: true and false.
            /// Default value: true.
            /// Note HTTP and HTTPS listeners support this parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "xForwardedForEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? XForwardedForEnabled
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: xForwardedForProtoEnabled: Specifies whether to use the X-Forwarded-Proto header field to obtain the listener protocol of the ALB instance.
            /// Valid values: true and false.
            /// Default value: false.
            /// Note HTTP, HTTPS, and QUIC listeners support this parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "xForwardedForProtoEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? XForwardedForProtoEnabled
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: xForwardedForSlbIdEnabled: Specifies whether to use the SLB-ID header field to obtain the ID of the ALB instance.
            /// Valid values: true and false.
            /// Default value: false.
            /// Note HTTP, HTTPS, and QUIC listeners support this parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "xForwardedForSlbIdEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? XForwardedForSlbIdEnabled
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: xForwardedForSlbPortEnabled: Specifies whether to use the X-Forwarded-Port header field to obtain the listener port of the ALB instance.
            /// Valid values: true and false.
            /// Default value: false.
            /// Note HTTP, HTTPS, and QUIC listeners support this parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "xForwardedForSlbPortEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? XForwardedForSlbPortEnabled
            {
                get;
                set;
            }
        }
    }
}
