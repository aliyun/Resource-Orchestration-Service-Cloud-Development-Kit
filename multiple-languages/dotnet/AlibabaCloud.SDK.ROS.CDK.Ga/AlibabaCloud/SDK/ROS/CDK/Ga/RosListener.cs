using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ga
{
    /// <summary>A ROS template type:  `ALIYUN::GA::Listener`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Ga.RosListener), fullyQualifiedName: "@alicloud/ros-cdk-ga.RosListener", parametersJson: "[{\"docs\":{\"summary\":\"- scope in which this resource is defined.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"summary\":\"- scoped id of the resource.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- resource properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-ga.RosListenerProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RosListener : AlibabaCloud.SDK.ROS.CDK.Core.RosResource
    {
        /// <summary>Create a new `ALIYUN::GA::Listener`.</summary>
        /// <param name="scope">- scope in which this resource is defined.</param>
        /// <param name="id">- scoped id of the resource.</param>
        /// <param name="props">- resource properties.</param>
        public RosListener(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Ga.IRosListenerProps props, bool enableResourcePropertyConstraint): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
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
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Ga.RosListener))!;

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
        /// <strong>Property</strong>: acceleratorId: The ID of the Global Accelerator instance to which the listener will be added.
        /// </remarks>
        [JsiiProperty(name: "acceleratorId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AcceleratorId
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
        /// <strong>Property</strong>: portRanges:
        /// </remarks>
        [JsiiProperty(name: "portRanges", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ga.RosListener.PortRangesProperty\"}]}},\"kind\":\"array\"}}]}}")]
        public virtual object PortRanges
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: protocol: The network transmission protocol of the listener. Valid values:
        /// tcp: TCP protocol
        /// udp: UDP protocol
        /// http: HTTP protocolhttps: HTTPS protocol.
        /// </remarks>
        [JsiiProperty(name: "protocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object Protocol
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: certificates:
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "certificates", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ga.RosListener.CertificatesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public virtual object? Certificates
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: clientAffinity: Specifies whether to enable client affinity for the listener.
        /// If you do not specify the default value in the parameter, client affinity is disabled.
        /// When client affinity is disabled, the connections from a specific source (client)
        /// IP address are not always routed to the same endpoint.
        /// If you set the value to SOURCE_IP, client affinity is enabled. When client affinity is enabled, the connections from
        /// a specific source (client) IP address are always routed to the same endpoint.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "clientAffinity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? ClientAffinity
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: description: The description of the listener.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? Description
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: name: The name of the listener.
        /// The name must be 2 to 128 characters in length and can contain letters, digits, underscores
        /// (_), and hyphens (-). It must start with a letter or Chinese character.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? Name
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: proxyProtocol: Specifies whether to preserve client IP addresses. Valid values:
        /// true: preserves client IP addresses. After this feature is enabled, backend servers can retrieve client IP addresses.
        /// false (default): does not preserve client IP addresses.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "proxyProtocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? ProxyProtocol
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: securityPolicyId: The ID of the security policy. Valid values:
        /// tls_cipher_policy_1_0
        /// tls_cipher_policy_1_1
        /// tls_cipher_policy_1_2
        /// tls_cipher_policy_1_2_strict
        /// tls_cipher_policy_1_2_strict_with_1_3
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
        [JsiiProperty(name: "xForwardedForConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ga.RosListener.XForwardedForConfigProperty\"}]}}", isOptional: true)]
        public virtual object? XForwardedForConfig
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }
        [JsiiInterface(nativeType: typeof(ICertificatesProperty), fullyQualifiedName: "@alicloud/ros-cdk-ga.RosListener.CertificatesProperty")]
        public interface ICertificatesProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: id: The ID of the SSL certificate.
            /// </remarks>
            [JsiiProperty(name: "id", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Id
            {
                get;
            }

            [JsiiTypeProxy(nativeType: typeof(ICertificatesProperty), fullyQualifiedName: "@alicloud/ros-cdk-ga.RosListener.CertificatesProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ga.RosListener.ICertificatesProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: id: The ID of the SSL certificate.
                /// </remarks>
                [JsiiProperty(name: "id", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Id
                {
                    get => GetInstanceProperty<object>()!;
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-ga.RosListener.CertificatesProperty")]
        public class CertificatesProperty : AlibabaCloud.SDK.ROS.CDK.Ga.RosListener.ICertificatesProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: id: The ID of the SSL certificate.
            /// </remarks>
            [JsiiProperty(name: "id", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Id
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IPortRangesProperty), fullyQualifiedName: "@alicloud/ros-cdk-ga.RosListener.PortRangesProperty")]
        public interface IPortRangesProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: fromPort: The first listening port of the port range specified for receiving and forwarding
            /// requests to endpoints.
            /// </remarks>
            [JsiiProperty(name: "fromPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object FromPort
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: toPort: The last listening port of the port range specified for receiving and forwarding requests
            /// to endpoints.
            /// </remarks>
            [JsiiProperty(name: "toPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object ToPort
            {
                get;
            }

            [JsiiTypeProxy(nativeType: typeof(IPortRangesProperty), fullyQualifiedName: "@alicloud/ros-cdk-ga.RosListener.PortRangesProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ga.RosListener.IPortRangesProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: fromPort: The first listening port of the port range specified for receiving and forwarding
                /// requests to endpoints.
                /// </remarks>
                [JsiiProperty(name: "fromPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object FromPort
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: toPort: The last listening port of the port range specified for receiving and forwarding requests
                /// to endpoints.
                /// </remarks>
                [JsiiProperty(name: "toPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object ToPort
                {
                    get => GetInstanceProperty<object>()!;
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-ga.RosListener.PortRangesProperty")]
        public class PortRangesProperty : AlibabaCloud.SDK.ROS.CDK.Ga.RosListener.IPortRangesProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: fromPort: The first listening port of the port range specified for receiving and forwarding
            /// requests to endpoints.
            /// </remarks>
            [JsiiProperty(name: "fromPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object FromPort
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: toPort: The last listening port of the port range specified for receiving and forwarding requests
            /// to endpoints.
            /// </remarks>
            [JsiiProperty(name: "toPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ToPort
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IXForwardedForConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-ga.RosListener.XForwardedForConfigProperty")]
        public interface IXForwardedForConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: xForwardedForGaApEnabled: Specifies whether to use the GA-AP header to retrieve the information about the acceleration area. Valid values:
            /// true: yes
            /// false (default): no
            /// Note Only HTTP and HTTPS listeners support this parameter.
            /// </remarks>
            [JsiiProperty(name: "xForwardedForGaApEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? XForwardedForGaApEnabled
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: xForwardedForGaIdEnabled: Specifies whether to use the GA-ID header to retrieve the ID of the GA instance. Valid values:
            /// true: yes
            /// false (default): no
            /// Note Only HTTP and HTTPS listeners support this parameter.
            /// </remarks>
            [JsiiProperty(name: "xForwardedForGaIdEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? XForwardedForGaIdEnabled
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: xForwardedForPortEnabled: Specifies whether to use the GA-X-Forward-Port header to retrieve the listener ports of the GA instance. Valid values:
            /// true: yes
            /// false (default): no
            /// Note Only HTTP and HTTPS listeners support this parameter.
            /// </remarks>
            [JsiiProperty(name: "xForwardedForPortEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? XForwardedForPortEnabled
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: xForwardedForProtoEnabled: Specifies whether to use the GA-X-Forward-Proto header to retrieve the listener protocol of the GA instance. Valid values:
            /// true: yes
            /// false (default): no
            /// Note Only HTTP and HTTPS listeners support this parameter.
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
            /// <strong>Property</strong>: xRealIpEnabled: Specifies whether to use the X-Real-IP header to retrieve client IP addresses. Valid values:
            /// true: yes
            /// false (default): no
            /// Note Only HTTP and HTTPS listeners support this parameter.
            /// </remarks>
            [JsiiProperty(name: "xRealIpEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? XRealIpEnabled
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IXForwardedForConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-ga.RosListener.XForwardedForConfigProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ga.RosListener.IXForwardedForConfigProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: xForwardedForGaApEnabled: Specifies whether to use the GA-AP header to retrieve the information about the acceleration area. Valid values:
                /// true: yes
                /// false (default): no
                /// Note Only HTTP and HTTPS listeners support this parameter.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "xForwardedForGaApEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? XForwardedForGaApEnabled
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: xForwardedForGaIdEnabled: Specifies whether to use the GA-ID header to retrieve the ID of the GA instance. Valid values:
                /// true: yes
                /// false (default): no
                /// Note Only HTTP and HTTPS listeners support this parameter.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "xForwardedForGaIdEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? XForwardedForGaIdEnabled
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: xForwardedForPortEnabled: Specifies whether to use the GA-X-Forward-Port header to retrieve the listener ports of the GA instance. Valid values:
                /// true: yes
                /// false (default): no
                /// Note Only HTTP and HTTPS listeners support this parameter.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "xForwardedForPortEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? XForwardedForPortEnabled
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: xForwardedForProtoEnabled: Specifies whether to use the GA-X-Forward-Proto header to retrieve the listener protocol of the GA instance. Valid values:
                /// true: yes
                /// false (default): no
                /// Note Only HTTP and HTTPS listeners support this parameter.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "xForwardedForProtoEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? XForwardedForProtoEnabled
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: xRealIpEnabled: Specifies whether to use the X-Real-IP header to retrieve client IP addresses. Valid values:
                /// true: yes
                /// false (default): no
                /// Note Only HTTP and HTTPS listeners support this parameter.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "xRealIpEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? XRealIpEnabled
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-ga.RosListener.XForwardedForConfigProperty")]
        public class XForwardedForConfigProperty : AlibabaCloud.SDK.ROS.CDK.Ga.RosListener.IXForwardedForConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: xForwardedForGaApEnabled: Specifies whether to use the GA-AP header to retrieve the information about the acceleration area. Valid values:
            /// true: yes
            /// false (default): no
            /// Note Only HTTP and HTTPS listeners support this parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "xForwardedForGaApEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? XForwardedForGaApEnabled
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: xForwardedForGaIdEnabled: Specifies whether to use the GA-ID header to retrieve the ID of the GA instance. Valid values:
            /// true: yes
            /// false (default): no
            /// Note Only HTTP and HTTPS listeners support this parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "xForwardedForGaIdEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? XForwardedForGaIdEnabled
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: xForwardedForPortEnabled: Specifies whether to use the GA-X-Forward-Port header to retrieve the listener ports of the GA instance. Valid values:
            /// true: yes
            /// false (default): no
            /// Note Only HTTP and HTTPS listeners support this parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "xForwardedForPortEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? XForwardedForPortEnabled
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: xForwardedForProtoEnabled: Specifies whether to use the GA-X-Forward-Proto header to retrieve the listener protocol of the GA instance. Valid values:
            /// true: yes
            /// false (default): no
            /// Note Only HTTP and HTTPS listeners support this parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "xForwardedForProtoEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? XForwardedForProtoEnabled
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: xRealIpEnabled: Specifies whether to use the X-Real-IP header to retrieve client IP addresses. Valid values:
            /// true: yes
            /// false (default): no
            /// Note Only HTTP and HTTPS listeners support this parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "xRealIpEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? XRealIpEnabled
            {
                get;
                set;
            }
        }
    }
}
