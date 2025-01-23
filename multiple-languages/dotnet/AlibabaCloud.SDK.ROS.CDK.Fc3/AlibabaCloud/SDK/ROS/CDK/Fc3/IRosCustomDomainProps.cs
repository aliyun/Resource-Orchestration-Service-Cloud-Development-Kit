using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Fc3
{
    /// <summary>Properties for defining a `RosCustomDomain`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-customdomain
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosCustomDomainProps), fullyQualifiedName: "@alicloud/ros-cdk-fc3.RosCustomDomainProps")]
    public interface IRosCustomDomainProps
    {
        /// <remarks>
        /// <strong>Property</strong>: authConfig: Permission authentication configuration.
        /// </remarks>
        [JsiiProperty(name: "authConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc3.RosCustomDomain.AuthConfigProperty\"}]}}")]
        object AuthConfig
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: domainName: Domain name. Fill in the custom domain name that has been filed in Ali cloud or access to the record.
        /// </remarks>
        [JsiiProperty(name: "domainName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DomainName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: protocol: Protocol types supported by the domain name. Valid values:
        /// - HTTP: Only HTTP protocol is supported.
        /// - HTTPS: HTTPS only is supported.
        /// - HTTP,HTTPS: Supports HTTP and HTTPS protocols.
        /// </remarks>
        [JsiiProperty(name: "protocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Protocol
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: certConfig: HTTPS certificate information.
        /// </remarks>
        [JsiiProperty(name: "certConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc3.RosCustomDomain.CertConfigProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CertConfig
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: routeConfig: Routing table: path to function mappingwhen a function is called with a custom domain name
        /// </remarks>
        [JsiiProperty(name: "routeConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc3.RosCustomDomain.RouteConfigProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RouteConfig
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: tlsConfig: TLS config.
        /// </remarks>
        [JsiiProperty(name: "tlsConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc3.RosCustomDomain.TlsConfigProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TlsConfig
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: wafConfig: Web application firewall configuration information.
        /// </remarks>
        [JsiiProperty(name: "wafConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc3.RosCustomDomain.WafConfigProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? WafConfig
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosCustomDomain`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-customdomain
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosCustomDomainProps), fullyQualifiedName: "@alicloud/ros-cdk-fc3.RosCustomDomainProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Fc3.IRosCustomDomainProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: authConfig: Permission authentication configuration.
            /// </remarks>
            [JsiiProperty(name: "authConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc3.RosCustomDomain.AuthConfigProperty\"}]}}")]
            public object AuthConfig
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: domainName: Domain name. Fill in the custom domain name that has been filed in Ali cloud or access to the record.
            /// </remarks>
            [JsiiProperty(name: "domainName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DomainName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: protocol: Protocol types supported by the domain name. Valid values:
            /// - HTTP: Only HTTP protocol is supported.
            /// - HTTPS: HTTPS only is supported.
            /// - HTTP,HTTPS: Supports HTTP and HTTPS protocols.
            /// </remarks>
            [JsiiProperty(name: "protocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Protocol
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: certConfig: HTTPS certificate information.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "certConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc3.RosCustomDomain.CertConfigProperty\"}]}}", isOptional: true)]
            public object? CertConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: routeConfig: Routing table: path to function mappingwhen a function is called with a custom domain name
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "routeConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc3.RosCustomDomain.RouteConfigProperty\"}]}}", isOptional: true)]
            public object? RouteConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: tlsConfig: TLS config.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tlsConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc3.RosCustomDomain.TlsConfigProperty\"}]}}", isOptional: true)]
            public object? TlsConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: wafConfig: Web application firewall configuration information.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "wafConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc3.RosCustomDomain.WafConfigProperty\"}]}}", isOptional: true)]
            public object? WafConfig
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
