using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Mse
{
    /// <summary>Properties for defining a `GatewayDomain`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-gatewaydomain
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IGatewayDomainProps), fullyQualifiedName: "@alicloud/ros-cdk-mse.GatewayDomainProps")]
    public interface IGatewayDomainProps
    {
        /// <summary>Property gatewayUniqueId: The unique identifier of the gateway.</summary>
        [JsiiProperty(name: "gatewayUniqueId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object GatewayUniqueId
        {
            get;
        }

        /// <summary>Property name: The domain name.</summary>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Name
        {
            get;
        }

        /// <summary>Property protocol: The protocol type: HTTP, HTTPS.</summary>
        [JsiiProperty(name: "protocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Protocol
        {
            get;
        }

        /// <summary>Property certIdentifier: Certificate ID.</summary>
        [JsiiProperty(name: "certIdentifier", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CertIdentifier
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property http2: Whether to enable Http2: open, close, globalConfig.</summary>
        [JsiiProperty(name: "http2", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Http2
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property mustHttps: Whether to enable HTTPS.</summary>
        [JsiiProperty(name: "mustHttps", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MustHttps
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tlsCipherSuitesConfigJson: TLS encryption suite configuration.</summary>
        [JsiiProperty(name: "tlsCipherSuitesConfigJson", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-mse.RosGatewayDomain.TlsCipherSuitesConfigJSONProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TlsCipherSuitesConfigJson
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tlsMax: The maximum TLS version.</summary>
        [JsiiProperty(name: "tlsMax", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TlsMax
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tlsMin: The minimum TLS version.</summary>
        [JsiiProperty(name: "tlsMin", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TlsMin
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `GatewayDomain`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-gatewaydomain
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IGatewayDomainProps), fullyQualifiedName: "@alicloud/ros-cdk-mse.GatewayDomainProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Mse.IGatewayDomainProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property gatewayUniqueId: The unique identifier of the gateway.</summary>
            [JsiiProperty(name: "gatewayUniqueId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object GatewayUniqueId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property name: The domain name.</summary>
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Name
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property protocol: The protocol type: HTTP, HTTPS.</summary>
            [JsiiProperty(name: "protocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Protocol
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property certIdentifier: Certificate ID.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "certIdentifier", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CertIdentifier
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property http2: Whether to enable Http2: open, close, globalConfig.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "http2", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Http2
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property mustHttps: Whether to enable HTTPS.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "mustHttps", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MustHttps
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tlsCipherSuitesConfigJson: TLS encryption suite configuration.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "tlsCipherSuitesConfigJson", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-mse.RosGatewayDomain.TlsCipherSuitesConfigJSONProperty\"}]}}", isOptional: true)]
            public object? TlsCipherSuitesConfigJson
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tlsMax: The maximum TLS version.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "tlsMax", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TlsMax
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tlsMin: The minimum TLS version.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "tlsMin", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TlsMin
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
