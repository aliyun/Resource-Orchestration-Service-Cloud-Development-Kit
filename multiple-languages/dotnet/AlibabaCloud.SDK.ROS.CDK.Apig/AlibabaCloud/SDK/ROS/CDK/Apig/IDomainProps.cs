using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apig
{
    /// <summary>Properties for defining a `Domain`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-domain
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IDomainProps), fullyQualifiedName: "@alicloud/ros-cdk-apig.DomainProps")]
    public interface IDomainProps
    {
        /// <summary>Property domainName: The name of the Domain.</summary>
        [JsiiProperty(name: "domainName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DomainName
        {
            get;
        }

        /// <summary>Property protocol: The types of protocols supported by the domain are as follows: * HTTP: Supports only the HTTP protocol.</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description>HTTPS: Supports only the HTTPS protocol.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "protocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Protocol
        {
            get;
        }

        /// <summary>Property certIdentifier: The tls Certificate identification.</summary>
        [JsiiProperty(name: "certIdentifier", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CertIdentifier
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property forceHttps: Set the HTTPS protocol type and whether to enable forced HTTPS redirection.</summary>
        [JsiiProperty(name: "forceHttps", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ForceHttps
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property http2Option: Whether to enable http2 settings.</summary>
        [JsiiProperty(name: "http2Option", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Http2Option
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceGroupId: The ID of the resource group.</summary>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tlsCipherSuitesConfig: The configuration of the TLS encryption suite.</summary>
        [JsiiProperty(name: "tlsCipherSuitesConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apig.RosDomain.TlsCipherSuitesConfigProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TlsCipherSuitesConfig
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tlsMax: The maximum version of the TLS protocol.</summary>
        /// <remarks>
        /// The maximum version of the TLS protocol is 1.3.
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

        /// <summary>Property tlsMin: The minimum version of the TLS protocol.</summary>
        /// <remarks>
        /// The minimum version of the TLS protocol is 1.0.
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

        /// <summary>Properties for defining a `Domain`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-domain
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IDomainProps), fullyQualifiedName: "@alicloud/ros-cdk-apig.DomainProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Apig.IDomainProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property domainName: The name of the Domain.</summary>
            [JsiiProperty(name: "domainName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DomainName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property protocol: The types of protocols supported by the domain are as follows: * HTTP: Supports only the HTTP protocol.</summary>
            /// <remarks>
            /// <list type="bullet">
            /// <description>HTTPS: Supports only the HTTPS protocol.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "protocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Protocol
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property certIdentifier: The tls Certificate identification.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "certIdentifier", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CertIdentifier
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property forceHttps: Set the HTTPS protocol type and whether to enable forced HTTPS redirection.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "forceHttps", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ForceHttps
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property http2Option: Whether to enable http2 settings.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "http2Option", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Http2Option
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceGroupId: The ID of the resource group.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tlsCipherSuitesConfig: The configuration of the TLS encryption suite.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "tlsCipherSuitesConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apig.RosDomain.TlsCipherSuitesConfigProperty\"}]}}", isOptional: true)]
            public object? TlsCipherSuitesConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tlsMax: The maximum version of the TLS protocol.</summary>
            /// <remarks>
            /// The maximum version of the TLS protocol is 1.3.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tlsMax", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TlsMax
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tlsMin: The minimum version of the TLS protocol.</summary>
            /// <remarks>
            /// The minimum version of the TLS protocol is 1.0.
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
