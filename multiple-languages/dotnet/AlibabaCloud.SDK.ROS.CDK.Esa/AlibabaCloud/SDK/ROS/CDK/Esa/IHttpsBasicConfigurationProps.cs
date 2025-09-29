using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Esa
{
    /// <summary>Properties for defining a `HttpsBasicConfiguration`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-httpsbasicconfiguration
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IHttpsBasicConfigurationProps), fullyQualifiedName: "@alicloud/ros-cdk-esa.HttpsBasicConfigurationProps")]
    public interface IHttpsBasicConfigurationProps
    {
        /// <summary>Property siteId: Site ID, which can be obtained by calling the [ListSites](~~ListSites~~) interface.</summary>
        [JsiiProperty(name: "siteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SiteId
        {
            get;
        }

        /// <summary>Property ciphersuite: Custom cipher suite, indicating the specific encryption algorithm selected when CiphersuiteGroup is set to custom.</summary>
        [JsiiProperty(name: "ciphersuite", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Ciphersuite
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ciphersuiteGroup: Cipher suite group.</summary>
        /// <remarks>
        /// Default is all cipher suites. Possible values:
        ///
        /// <list type="bullet">
        /// <description>all: All cipher suites.</description>
        /// <description>strict: Strong cipher suites.</description>
        /// <description>custom: Custom cipher suites.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "ciphersuiteGroup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CiphersuiteGroup
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property http2: Indicates whether HTTP2 is enabled.</summary>
        /// <remarks>
        /// Default is on. Possible values:
        ///
        /// <list type="bullet">
        /// <description>on: Enabled.</description>
        /// <description>off: Disabled.</description>
        /// </list>
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

        /// <summary>Property http3: Whether to enable HTTP3, which is enabled by default.</summary>
        /// <remarks>
        /// The value can be:
        ///
        /// <list type="bullet">
        /// <description>on: Enabled.</description>
        /// <description>off: Disabled.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "http3", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Http3
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property https: Whether to enable HTTPS.</summary>
        /// <remarks>
        /// Default is enabled. Possible values:
        ///
        /// <list type="bullet">
        /// <description>on: Enable.</description>
        /// <description>off: Disable.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "https", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Https
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ocspStapling: Indicates whether OCSP is enabled.</summary>
        /// <remarks>
        /// Default is off. Possible values:
        ///
        /// <list type="bullet">
        /// <description>on: Enabled.</description>
        /// <description>off: Disabled.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "ocspStapling", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? OcspStapling
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property rule: Rule content, using conditional expressions to match user requests.</summary>
        /// <remarks>
        /// When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
        ///
        /// <list type="bullet">
        /// <description>Match all incoming requests: value set to true</description>
        /// <description>Match specified request: Set the value to a custom expression, for example: (http.host eq "video.example.com").</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "rule", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Rule
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ruleEnable: Rule switch.</summary>
        /// <remarks>
        /// When adding global configuration, this parameter does not need to be set. Value range:
        ///
        /// <list type="bullet">
        /// <description>on: open.</description>
        /// <description>off: close.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "ruleEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RuleEnable
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ruleName: Rule name.</summary>
        /// <remarks>
        /// When adding global configuration, this parameter does not need to be set.
        /// </remarks>
        [JsiiProperty(name: "ruleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RuleName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property sequence: Order of rule execution.</summary>
        /// <remarks>
        /// The smaller the value, the higher the priority for execution.
        /// </remarks>
        [JsiiProperty(name: "sequence", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Sequence
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tls10: Whether to enable TLS1.0. Default is disabled. Possible values: - on: Enable. - off: Disable.</summary>
        [JsiiProperty(name: "tls10", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Tls10
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tls11: Whether to enable TLS1.1. Default is enabled. Possible values: - on: Enable. - off: Disable.</summary>
        [JsiiProperty(name: "tls11", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Tls11
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tls12: Whether to enable TLS1.2. Default is enabled. Possible values: - on: Enable. - off: Disable.</summary>
        [JsiiProperty(name: "tls12", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Tls12
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tls13: Whether to enable TLS1.3. Default is enabled. Possible values: - on: Enable. - off: Disable.</summary>
        [JsiiProperty(name: "tls13", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Tls13
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `HttpsBasicConfiguration`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-httpsbasicconfiguration
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IHttpsBasicConfigurationProps), fullyQualifiedName: "@alicloud/ros-cdk-esa.HttpsBasicConfigurationProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Esa.IHttpsBasicConfigurationProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property siteId: Site ID, which can be obtained by calling the [ListSites](~~ListSites~~) interface.</summary>
            [JsiiProperty(name: "siteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SiteId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property ciphersuite: Custom cipher suite, indicating the specific encryption algorithm selected when CiphersuiteGroup is set to custom.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "ciphersuite", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Ciphersuite
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ciphersuiteGroup: Cipher suite group.</summary>
            /// <remarks>
            /// Default is all cipher suites. Possible values:
            ///
            /// <list type="bullet">
            /// <description>all: All cipher suites.</description>
            /// <description>strict: Strong cipher suites.</description>
            /// <description>custom: Custom cipher suites.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ciphersuiteGroup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CiphersuiteGroup
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property http2: Indicates whether HTTP2 is enabled.</summary>
            /// <remarks>
            /// Default is on. Possible values:
            ///
            /// <list type="bullet">
            /// <description>on: Enabled.</description>
            /// <description>off: Disabled.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "http2", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Http2
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property http3: Whether to enable HTTP3, which is enabled by default.</summary>
            /// <remarks>
            /// The value can be:
            ///
            /// <list type="bullet">
            /// <description>on: Enabled.</description>
            /// <description>off: Disabled.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "http3", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Http3
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property https: Whether to enable HTTPS.</summary>
            /// <remarks>
            /// Default is enabled. Possible values:
            ///
            /// <list type="bullet">
            /// <description>on: Enable.</description>
            /// <description>off: Disable.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "https", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Https
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ocspStapling: Indicates whether OCSP is enabled.</summary>
            /// <remarks>
            /// Default is off. Possible values:
            ///
            /// <list type="bullet">
            /// <description>on: Enabled.</description>
            /// <description>off: Disabled.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ocspStapling", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OcspStapling
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property rule: Rule content, using conditional expressions to match user requests.</summary>
            /// <remarks>
            /// When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
            ///
            /// <list type="bullet">
            /// <description>Match all incoming requests: value set to true</description>
            /// <description>Match specified request: Set the value to a custom expression, for example: (http.host eq "video.example.com").</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "rule", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Rule
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ruleEnable: Rule switch.</summary>
            /// <remarks>
            /// When adding global configuration, this parameter does not need to be set. Value range:
            ///
            /// <list type="bullet">
            /// <description>on: open.</description>
            /// <description>off: close.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ruleEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RuleEnable
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ruleName: Rule name.</summary>
            /// <remarks>
            /// When adding global configuration, this parameter does not need to be set.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ruleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RuleName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property sequence: Order of rule execution.</summary>
            /// <remarks>
            /// The smaller the value, the higher the priority for execution.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sequence", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Sequence
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tls10: Whether to enable TLS1.0. Default is disabled. Possible values: - on: Enable. - off: Disable.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "tls10", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Tls10
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tls11: Whether to enable TLS1.1. Default is enabled. Possible values: - on: Enable. - off: Disable.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "tls11", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Tls11
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tls12: Whether to enable TLS1.2. Default is enabled. Possible values: - on: Enable. - off: Disable.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "tls12", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Tls12
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tls13: Whether to enable TLS1.3. Default is enabled. Possible values: - on: Enable. - off: Disable.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "tls13", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Tls13
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
