using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Fc3
{
    /// <summary>Properties for defining a `CustomDomain`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-customdomain
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ICustomDomainProps), fullyQualifiedName: "@alicloud/ros-cdk-fc3.CustomDomainProps")]
    public interface ICustomDomainProps
    {
        /// <summary>Property authConfig: Permission authentication configuration.</summary>
        [JsiiProperty(name: "authConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc3.RosCustomDomain.AuthConfigProperty\"}]}}")]
        object AuthConfig
        {
            get;
        }

        /// <summary>Property domainName: Domain name.</summary>
        /// <remarks>
        /// Fill in the custom domain name that has been filed in Ali cloud or access to the record.
        /// </remarks>
        [JsiiProperty(name: "domainName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DomainName
        {
            get;
        }

        /// <summary>Property protocol: Protocol types supported by the domain name.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>HTTP: Only HTTP protocol is supported.</description>
        /// <description>HTTPS: HTTPS only is supported.</description>
        /// <description>HTTP,HTTPS: Supports HTTP and HTTPS protocols.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "protocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Protocol
        {
            get;
        }

        /// <summary>Property certConfig: HTTPS certificate information.</summary>
        [JsiiProperty(name: "certConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc3.RosCustomDomain.CertConfigProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CertConfig
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property routeConfig: Routing table: path to function mappingwhen a function is called with a custom domain name.</summary>
        [JsiiProperty(name: "routeConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc3.RosCustomDomain.RouteConfigProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RouteConfig
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tlsConfig: TLS config.</summary>
        [JsiiProperty(name: "tlsConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc3.RosCustomDomain.TlsConfigProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TlsConfig
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property wafConfig: Web application firewall configuration information.</summary>
        [JsiiProperty(name: "wafConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc3.RosCustomDomain.WafConfigProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? WafConfig
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `CustomDomain`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-customdomain
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ICustomDomainProps), fullyQualifiedName: "@alicloud/ros-cdk-fc3.CustomDomainProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Fc3.ICustomDomainProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property authConfig: Permission authentication configuration.</summary>
            [JsiiProperty(name: "authConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc3.RosCustomDomain.AuthConfigProperty\"}]}}")]
            public object AuthConfig
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property domainName: Domain name.</summary>
            /// <remarks>
            /// Fill in the custom domain name that has been filed in Ali cloud or access to the record.
            /// </remarks>
            [JsiiProperty(name: "domainName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DomainName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property protocol: Protocol types supported by the domain name.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>HTTP: Only HTTP protocol is supported.</description>
            /// <description>HTTPS: HTTPS only is supported.</description>
            /// <description>HTTP,HTTPS: Supports HTTP and HTTPS protocols.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "protocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Protocol
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property certConfig: HTTPS certificate information.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "certConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc3.RosCustomDomain.CertConfigProperty\"}]}}", isOptional: true)]
            public object? CertConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property routeConfig: Routing table: path to function mappingwhen a function is called with a custom domain name.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "routeConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc3.RosCustomDomain.RouteConfigProperty\"}]}}", isOptional: true)]
            public object? RouteConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tlsConfig: TLS config.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "tlsConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc3.RosCustomDomain.TlsConfigProperty\"}]}}", isOptional: true)]
            public object? TlsConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property wafConfig: Web application firewall configuration information.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "wafConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc3.RosCustomDomain.WafConfigProperty\"}]}}", isOptional: true)]
            public object? WafConfig
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
