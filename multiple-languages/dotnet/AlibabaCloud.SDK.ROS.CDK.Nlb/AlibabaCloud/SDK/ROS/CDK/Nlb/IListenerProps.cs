using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Nlb
{
    /// <summary>Properties for defining a `Listener`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlb-listener
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IListenerProps), fullyQualifiedName: "@alicloud/ros-cdk-nlb.ListenerProps")]
    public interface IListenerProps
    {
        /// <summary>Property listenerProtocol: undefined.</summary>
        [JsiiProperty(name: "listenerProtocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ListenerProtocol
        {
            get;
        }

        /// <summary>Property loadBalancerId: ID of the LoadBalancer.</summary>
        [JsiiProperty(name: "loadBalancerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object LoadBalancerId
        {
            get;
        }

        /// <summary>Property serverGroupId: ID of the ServerGroup.</summary>
        [JsiiProperty(name: "serverGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ServerGroupId
        {
            get;
        }

        /// <summary>Property alpnEnabled: undefined.</summary>
        [JsiiProperty(name: "alpnEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AlpnEnabled
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property alpnPolicy: Proxy of alpn.</summary>
        [JsiiProperty(name: "alpnPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AlpnPolicy
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property caCertificateIds: List of the ca certificate ids.</summary>
        [JsiiProperty(name: "caCertificateIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CaCertificateIds
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property caEnabled: Whether to open CA.</summary>
        [JsiiProperty(name: "caEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CaEnabled
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property certificateIds: List of the certificate ids.</summary>
        [JsiiProperty(name: "certificateIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CertificateIds
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property cps: New connection rate limit of Instance.</summary>
        [JsiiProperty(name: "cps", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Cps
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property enable: Whether to start listener or not.</summary>
        /// <remarks>
        /// Default True.
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

        /// <summary>Property endPort: EndPort of the portRange.</summary>
        [JsiiProperty(name: "endPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EndPort
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property idleTimeout: Specifies the connection idle timeout.</summary>
        [JsiiProperty(name: "idleTimeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IdleTimeout
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property listenerDescription: Description of the listener, [2, 256] characters.</summary>
        [JsiiProperty(name: "listenerDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ListenerDescription
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property listenerPort: Port of the listener,[0, 65535] the portRange setting need 0.</summary>
        [JsiiProperty(name: "listenerPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ListenerPort
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property mss: Max length of the TCP packet.</summary>
        [JsiiProperty(name: "mss", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Mss
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property proxyProtocolEnabled: Whether to enable ppv2 function.</summary>
        [JsiiProperty(name: "proxyProtocolEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ProxyProtocolEnabled
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property proxyProtocolV2Config: ProxyProtocolV2Config of the listener.</summary>
        [JsiiProperty(name: "proxyProtocolV2Config", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-nlb.RosListener.ProxyProtocolV2ConfigProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ProxyProtocolV2Config
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property secSensorEnabled: Whether to enable the second-level monitoring function.</summary>
        [JsiiProperty(name: "secSensorEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SecSensorEnabled
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property securityPolicyId: Only valid for TcpSSL protocol monitoring.</summary>
        [JsiiProperty(name: "securityPolicyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SecurityPolicyId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property startPort: StartPort of the portRange.</summary>
        [JsiiProperty(name: "startPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? StartPort
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tags: Tags to attach to instance.</summary>
        /// <remarks>
        /// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-nlb.RosListener.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Nlb.RosListener.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Listener`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlb-listener
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IListenerProps), fullyQualifiedName: "@alicloud/ros-cdk-nlb.ListenerProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Nlb.IListenerProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property listenerProtocol: undefined.</summary>
            [JsiiProperty(name: "listenerProtocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ListenerProtocol
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property loadBalancerId: ID of the LoadBalancer.</summary>
            [JsiiProperty(name: "loadBalancerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object LoadBalancerId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property serverGroupId: ID of the ServerGroup.</summary>
            [JsiiProperty(name: "serverGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ServerGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property alpnEnabled: undefined.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "alpnEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AlpnEnabled
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property alpnPolicy: Proxy of alpn.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "alpnPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AlpnPolicy
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property caCertificateIds: List of the ca certificate ids.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "caCertificateIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? CaCertificateIds
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property caEnabled: Whether to open CA.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "caEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CaEnabled
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property certificateIds: List of the certificate ids.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "certificateIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? CertificateIds
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property cps: New connection rate limit of Instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "cps", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Cps
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property enable: Whether to start listener or not.</summary>
            /// <remarks>
            /// Default True.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Enable
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property endPort: EndPort of the portRange.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "endPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EndPort
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property idleTimeout: Specifies the connection idle timeout.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "idleTimeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IdleTimeout
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property listenerDescription: Description of the listener, [2, 256] characters.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "listenerDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ListenerDescription
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property listenerPort: Port of the listener,[0, 65535] the portRange setting need 0.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "listenerPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ListenerPort
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property mss: Max length of the TCP packet.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "mss", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Mss
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property proxyProtocolEnabled: Whether to enable ppv2 function.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "proxyProtocolEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ProxyProtocolEnabled
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property proxyProtocolV2Config: ProxyProtocolV2Config of the listener.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "proxyProtocolV2Config", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-nlb.RosListener.ProxyProtocolV2ConfigProperty\"}]}}", isOptional: true)]
            public object? ProxyProtocolV2Config
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property secSensorEnabled: Whether to enable the second-level monitoring function.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "secSensorEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SecSensorEnabled
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property securityPolicyId: Only valid for TcpSSL protocol monitoring.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "securityPolicyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SecurityPolicyId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property startPort: StartPort of the portRange.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "startPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? StartPort
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tags: Tags to attach to instance.</summary>
            /// <remarks>
            /// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-nlb.RosListener.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Nlb.RosListener.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Nlb.RosListener.ITagsProperty[]?>();
            }
        }
    }
}
