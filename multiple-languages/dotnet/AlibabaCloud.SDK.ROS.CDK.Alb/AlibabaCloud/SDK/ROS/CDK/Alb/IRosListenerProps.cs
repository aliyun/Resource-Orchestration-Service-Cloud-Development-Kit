using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Alb
{
    /// <summary>Properties for defining a `RosListener`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-listener
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosListenerProps), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosListenerProps")]
    public interface IRosListenerProps
    {
        /// <remarks>
        /// <strong>Property</strong>: defaultActions: The actions of the rule.
        /// </remarks>
        [JsiiProperty(name: "defaultActions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosListener.DefaultActionsProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object DefaultActions
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: listenerPort: The frontend port that is used by the ALB instance.
        /// Valid values: 1 to 65535.
        /// </remarks>
        [JsiiProperty(name: "listenerPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ListenerPort
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: listenerProtocol: The listener protocol.
        /// Valid values: HTTP, HTTPS, and QUIC.
        /// </remarks>
        [JsiiProperty(name: "listenerProtocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ListenerProtocol
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: loadBalancerId: The ID of the ALB instance.
        /// </remarks>
        [JsiiProperty(name: "loadBalancerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object LoadBalancerId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: caCertificates: List of configured CA certificates for listener.
        /// </remarks>
        [JsiiProperty(name: "caCertificates", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosListener.CaCertificatesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CaCertificates
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: caEnabled: Specifies whether to enable mutual authentication. Default false.
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
        /// <strong>Property</strong>: certificates: The list of SSL certificates for listener.
        /// </remarks>
        [JsiiProperty(name: "certificates", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosListener.CertificatesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Certificates
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: gzipEnabled: Specifies whether to enable gzip compression to compress files of a specific type.
        /// Valid values: true and false.
        /// Default value: true.
        /// </remarks>
        [JsiiProperty(name: "gzipEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? GzipEnabled
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: http2Enabled: Specifies whether to enable HTTP\/2. Default value: on.
        /// Valid values: true and false.
        /// Default value: true.
        /// Note Only HTTPS listeners support this parameter.
        /// </remarks>
        [JsiiProperty(name: "http2Enabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Http2Enabled
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: idleTimeout: The timeout period of idle connections.
        /// Valid values: 1 to 180. Unit: seconds.
        /// Default value: 15.
        /// If no request is received within the specified timeout period, ALB closes the connection.
        /// ALB recreates the connection when a new connection request is received.
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
        /// <strong>Property</strong>: listenerDescription: The description of the listener.
        /// The description must be 2 to 256 characters in length.
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
        /// <strong>Property</strong>: listenerStatus: The status of the listener.
        /// </remarks>
        [JsiiProperty(name: "listenerStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ListenerStatus
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: quicConfig: Select a QUIC listener and associate it with the ALB instance.
        /// </remarks>
        [JsiiProperty(name: "quicConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosListener.QuicConfigProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? QuicConfig
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: requestTimeout: The timeout period of the request.
        /// Valid values: 1 to 180. Unit: seconds.
        /// Default value: 60.
        /// If no response is received from the backend server during the request timeout period,
        /// ALB sends an HTTP 504 error code to the client.
        /// </remarks>
        [JsiiProperty(name: "requestTimeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RequestTimeout
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: securityPolicyId: The ID of the security policy. System security policies and custom security policies
        /// are supported.
        /// Default value: tls_cipher_policy_1_0. This value indicates a system security policy.
        /// Note Only HTTPS listeners support this parameter.
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
        /// <strong>Property</strong>: xForwardedForConfig: The configuration of the XForward field.
        /// </remarks>
        [JsiiProperty(name: "xForwardedForConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosListener.XForwardedForConfigProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? XForwardedForConfig
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosListener`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-listener
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosListenerProps), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosListenerProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Alb.IRosListenerProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: defaultActions: The actions of the rule.
            /// </remarks>
            [JsiiProperty(name: "defaultActions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosListener.DefaultActionsProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object DefaultActions
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: listenerPort: The frontend port that is used by the ALB instance.
            /// Valid values: 1 to 65535.
            /// </remarks>
            [JsiiProperty(name: "listenerPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ListenerPort
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: listenerProtocol: The listener protocol.
            /// Valid values: HTTP, HTTPS, and QUIC.
            /// </remarks>
            [JsiiProperty(name: "listenerProtocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ListenerProtocol
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: loadBalancerId: The ID of the ALB instance.
            /// </remarks>
            [JsiiProperty(name: "loadBalancerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object LoadBalancerId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: caCertificates: List of configured CA certificates for listener.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "caCertificates", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosListener.CaCertificatesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? CaCertificates
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: caEnabled: Specifies whether to enable mutual authentication. Default false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "caEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CaEnabled
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: certificates: The list of SSL certificates for listener.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "certificates", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosListener.CertificatesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Certificates
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: gzipEnabled: Specifies whether to enable gzip compression to compress files of a specific type.
            /// Valid values: true and false.
            /// Default value: true.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "gzipEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? GzipEnabled
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: http2Enabled: Specifies whether to enable HTTP\/2. Default value: on.
            /// Valid values: true and false.
            /// Default value: true.
            /// Note Only HTTPS listeners support this parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "http2Enabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Http2Enabled
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: idleTimeout: The timeout period of idle connections.
            /// Valid values: 1 to 180. Unit: seconds.
            /// Default value: 15.
            /// If no request is received within the specified timeout period, ALB closes the connection.
            /// ALB recreates the connection when a new connection request is received.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "idleTimeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IdleTimeout
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: listenerDescription: The description of the listener.
            /// The description must be 2 to 256 characters in length.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "listenerDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ListenerDescription
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: listenerStatus: The status of the listener.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "listenerStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ListenerStatus
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: quicConfig: Select a QUIC listener and associate it with the ALB instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "quicConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosListener.QuicConfigProperty\"}]}}", isOptional: true)]
            public object? QuicConfig
            {
                get => GetInstanceProperty<object?>();
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
            public object? RequestTimeout
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: securityPolicyId: The ID of the security policy. System security policies and custom security policies
            /// are supported.
            /// Default value: tls_cipher_policy_1_0. This value indicates a system security policy.
            /// Note Only HTTPS listeners support this parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "securityPolicyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SecurityPolicyId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: xForwardedForConfig: The configuration of the XForward field.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "xForwardedForConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosListener.XForwardedForConfigProperty\"}]}}", isOptional: true)]
            public object? XForwardedForConfig
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
