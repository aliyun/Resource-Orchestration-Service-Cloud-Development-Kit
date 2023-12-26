using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Nlb
{
    /// <summary>Properties for defining a `RosListener`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlb-listener
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosListenerProps), fullyQualifiedName: "@alicloud/ros-cdk-nlb.RosListenerProps")]
    public interface IRosListenerProps
    {
        /// <remarks>
        /// <strong>Property</strong>: listenerProtocol: undefined
        /// </remarks>
        [JsiiProperty(name: "listenerProtocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ListenerProtocol
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: loadBalancerId: ID of the LoadBalancer
        /// </remarks>
        [JsiiProperty(name: "loadBalancerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object LoadBalancerId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: serverGroupId: ID of the ServerGroup
        /// </remarks>
        [JsiiProperty(name: "serverGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ServerGroupId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: alpnEnabled: undefined
        /// </remarks>
        [JsiiProperty(name: "alpnEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AlpnEnabled
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: alpnPolicy: Proxy of alpn
        /// </remarks>
        [JsiiProperty(name: "alpnPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AlpnPolicy
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: caCertificateIds: List of the ca certificate ids
        /// </remarks>
        [JsiiProperty(name: "caCertificateIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CaCertificateIds
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: caEnabled: Whether to open CA
        /// </remarks>
        [JsiiProperty(name: "caEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CaEnabled
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: certificateIds: List of the certificate ids
        /// </remarks>
        [JsiiProperty(name: "certificateIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CertificateIds
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: cps: New connection rate limit of Instance
        /// </remarks>
        [JsiiProperty(name: "cps", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Cps
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: enable: Whether to start listener or not. Default True.
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
        /// <strong>Property</strong>: endPort: EndPort of the portRange
        /// </remarks>
        [JsiiProperty(name: "endPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EndPort
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: idleTimeout: Specifies the connection idle timeout
        /// </remarks>
        [JsiiProperty(name: "idleTimeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IdleTimeout
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: listenerDescription: Description of the listener, [2, 256] characters.
        /// </remarks>
        [JsiiProperty(name: "listenerDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ListenerDescription
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: listenerPort: Port of the listener,[0, 65535] the portRange setting need 0
        /// </remarks>
        [JsiiProperty(name: "listenerPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ListenerPort
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: mss: Max length of the TCP packet
        /// </remarks>
        [JsiiProperty(name: "mss", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Mss
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: proxyProtocolEnabled: Whether to enable ppv2 function
        /// </remarks>
        [JsiiProperty(name: "proxyProtocolEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ProxyProtocolEnabled
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: secSensorEnabled: Whether to enable the second-level monitoring function
        /// </remarks>
        [JsiiProperty(name: "secSensorEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SecSensorEnabled
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: securityPolicyId: Only valid for TcpSSL protocol monitoring
        /// </remarks>
        [JsiiProperty(name: "securityPolicyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SecurityPolicyId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: startPort: StartPort of the portRange
        /// </remarks>
        [JsiiProperty(name: "startPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? StartPort
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosListener`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlb-listener
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosListenerProps), fullyQualifiedName: "@alicloud/ros-cdk-nlb.RosListenerProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Nlb.IRosListenerProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: listenerProtocol: undefined
            /// </remarks>
            [JsiiProperty(name: "listenerProtocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ListenerProtocol
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: loadBalancerId: ID of the LoadBalancer
            /// </remarks>
            [JsiiProperty(name: "loadBalancerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object LoadBalancerId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: serverGroupId: ID of the ServerGroup
            /// </remarks>
            [JsiiProperty(name: "serverGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ServerGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: alpnEnabled: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "alpnEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AlpnEnabled
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: alpnPolicy: Proxy of alpn
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "alpnPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AlpnPolicy
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: caCertificateIds: List of the ca certificate ids
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "caCertificateIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? CaCertificateIds
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: caEnabled: Whether to open CA
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "caEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CaEnabled
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: certificateIds: List of the certificate ids
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "certificateIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? CertificateIds
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: cps: New connection rate limit of Instance
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "cps", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Cps
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: enable: Whether to start listener or not. Default True.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Enable
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: endPort: EndPort of the portRange
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "endPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EndPort
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: idleTimeout: Specifies the connection idle timeout
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "idleTimeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IdleTimeout
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: listenerDescription: Description of the listener, [2, 256] characters.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "listenerDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ListenerDescription
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: listenerPort: Port of the listener,[0, 65535] the portRange setting need 0
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "listenerPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ListenerPort
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: mss: Max length of the TCP packet
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "mss", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Mss
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: proxyProtocolEnabled: Whether to enable ppv2 function
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "proxyProtocolEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ProxyProtocolEnabled
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: secSensorEnabled: Whether to enable the second-level monitoring function
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "secSensorEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SecSensorEnabled
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: securityPolicyId: Only valid for TcpSSL protocol monitoring
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "securityPolicyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SecurityPolicyId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: startPort: StartPort of the portRange
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "startPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? StartPort
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
