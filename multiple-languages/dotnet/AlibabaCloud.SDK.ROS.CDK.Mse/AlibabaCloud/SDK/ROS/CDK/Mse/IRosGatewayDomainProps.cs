using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Mse
{
    /// <summary>Properties for defining a `RosGatewayDomain`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-gatewaydomain
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosGatewayDomainProps), fullyQualifiedName: "@alicloud/ros-cdk-mse.RosGatewayDomainProps")]
    public interface IRosGatewayDomainProps
    {
        /// <remarks>
        /// <strong>Property</strong>: gatewayUniqueId: The unique identifier of the gateway.
        /// </remarks>
        [JsiiProperty(name: "gatewayUniqueId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object GatewayUniqueId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: name: The domain name.
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Name
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: protocol: The protocol type: HTTP, HTTPS.
        /// </remarks>
        [JsiiProperty(name: "protocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Protocol
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: certIdentifier: Certificate ID.
        /// </remarks>
        [JsiiProperty(name: "certIdentifier", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CertIdentifier
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: http2: Whether to enable Http2: open, close, globalConfig.
        /// </remarks>
        [JsiiProperty(name: "http2", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Http2
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: mustHttps: Whether to enable HTTPS.
        /// </remarks>
        [JsiiProperty(name: "mustHttps", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MustHttps
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: tlsCipherSuitesConfigJson: TLS encryption suite configuration.
        /// </remarks>
        [JsiiProperty(name: "tlsCipherSuitesConfigJson", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-mse.RosGatewayDomain.TlsCipherSuitesConfigJSONProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TlsCipherSuitesConfigJson
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: tlsMax: The maximum TLS version.
        /// </remarks>
        [JsiiProperty(name: "tlsMax", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TlsMax
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: tlsMin: The minimum TLS version.
        /// </remarks>
        [JsiiProperty(name: "tlsMin", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TlsMin
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosGatewayDomain`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-gatewaydomain
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosGatewayDomainProps), fullyQualifiedName: "@alicloud/ros-cdk-mse.RosGatewayDomainProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Mse.IRosGatewayDomainProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: gatewayUniqueId: The unique identifier of the gateway.
            /// </remarks>
            [JsiiProperty(name: "gatewayUniqueId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object GatewayUniqueId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: name: The domain name.
            /// </remarks>
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Name
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: protocol: The protocol type: HTTP, HTTPS.
            /// </remarks>
            [JsiiProperty(name: "protocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Protocol
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: certIdentifier: Certificate ID.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "certIdentifier", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CertIdentifier
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: http2: Whether to enable Http2: open, close, globalConfig.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "http2", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Http2
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: mustHttps: Whether to enable HTTPS.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "mustHttps", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MustHttps
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: tlsCipherSuitesConfigJson: TLS encryption suite configuration.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tlsCipherSuitesConfigJson", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-mse.RosGatewayDomain.TlsCipherSuitesConfigJSONProperty\"}]}}", isOptional: true)]
            public object? TlsCipherSuitesConfigJson
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: tlsMax: The maximum TLS version.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tlsMax", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TlsMax
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: tlsMin: The minimum TLS version.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tlsMin", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TlsMin
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
