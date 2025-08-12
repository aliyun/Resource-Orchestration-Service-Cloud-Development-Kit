using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Esa
{
    /// <summary>Properties for defining a `HttpsApplicationConfiguration`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-httpsapplicationconfiguration
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IHttpsApplicationConfigurationProps), fullyQualifiedName: "@alicloud/ros-cdk-esa.HttpsApplicationConfigurationProps")]
    public interface IHttpsApplicationConfigurationProps
    {
        /// <summary>Property siteId: The site ID, which can be obtained by calling the ListSites API.</summary>
        [JsiiProperty(name: "siteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SiteId
        {
            get;
        }

        /// <summary>Property altSvc: Function switch, default off.</summary>
        /// <remarks>
        /// Value range:
        /// on: Enabled.
        /// off: Disabled.
        /// </remarks>
        [JsiiProperty(name: "altSvc", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AltSvc
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property altSvcClear: Alt-Svc whether The header contains the clear parameter.</summary>
        /// <remarks>
        /// This parameter is disabled by default. Value range:
        /// on: Enabled.
        /// off: Disabled.
        /// </remarks>
        [JsiiProperty(name: "altSvcClear", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AltSvcClear
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property altSvcMa: The effective time of the Alt-Svc, in seconds.</summary>
        /// <remarks>
        /// The default value is 86400 seconds.
        /// </remarks>
        [JsiiProperty(name: "altSvcMa", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AltSvcMa
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property altSvcPersist: Alt-Svc whether The header contains the persist parameter.</summary>
        /// <remarks>
        /// This parameter is disabled by default. Value range:
        /// on: Enabled.
        /// off: Disabled.
        /// </remarks>
        [JsiiProperty(name: "altSvcPersist", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AltSvcPersist
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property hsts: Whether to enable HSTS.</summary>
        /// <remarks>
        /// It is disabled by default. Value range:
        /// on: Enabled.
        /// off: Disabled.
        /// </remarks>
        [JsiiProperty(name: "hsts", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Hsts
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property hstsIncludeSubdomains: Whether to include subdomains in HSTS is disabled by default.</summary>
        /// <remarks>
        /// Value range:
        /// on: Enabled.
        /// off: Disabled.
        /// </remarks>
        [JsiiProperty(name: "hstsIncludeSubdomains", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? HstsIncludeSubdomains
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property hstsMaxAge: The expiration time of HSTS, in seconds.</summary>
        [JsiiProperty(name: "hstsMaxAge", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? HstsMaxAge
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property hstsPreload: Whether to enable HSTS preloading.</summary>
        /// <remarks>
        /// It is disabled by default. Value range:
        /// on: Enabled.
        /// off: Disabled.
        /// </remarks>
        [JsiiProperty(name: "hstsPreload", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? HstsPreload
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property httpsForce: Whether to enable forced HTTPS.</summary>
        /// <remarks>
        /// It is disabled by default. Value range:
        /// on: Enabled.
        /// off: Disabled.
        /// </remarks>
        [JsiiProperty(name: "httpsForce", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? HttpsForce
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property httpsForceCode: Forced HTTPS jump status code, value range: 301 302 307 308.</summary>
        [JsiiProperty(name: "httpsForceCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? HttpsForceCode
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property httpsNoSniDeny: Whether to enable to reject TLS handshake requests without SNI.</summary>
        /// <remarks>
        /// This parameter is disabled by default. Value range:
        /// on: Enabled.
        /// off: Disabled.
        /// </remarks>
        [JsiiProperty(name: "httpsNoSniDeny", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? HttpsNoSniDeny
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property httpsSniVerify: Whether to enable SNI verification.</summary>
        /// <remarks>
        /// It is disabled by default. Value range:
        /// on: Enabled.
        /// off: Disabled.
        /// </remarks>
        [JsiiProperty(name: "httpsSniVerify", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? HttpsSniVerify
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property httpsSniWhitelist: Specifies the list of allowed SNI whitelists, separated by spaces.</summary>
        [JsiiProperty(name: "httpsSniWhitelist", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? HttpsSniWhitelist
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property paymentType: Payment Type.</summary>
        [JsiiProperty(name: "paymentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PaymentType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property rule: Rule content, using conditional expressions to match user requests.</summary>
        /// <remarks>
        /// When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
        /// Match all incoming requests: value set to true
        /// Match specified request: Set the value to a custom expression, for example: (http.host eq "video.example.com").
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
        /// on: Enabled.
        /// off: Disabled.
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

        /// <summary>Property siteVersion: The version number of the site configuration.</summary>
        /// <remarks>
        /// For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
        /// </remarks>
        [JsiiProperty(name: "siteVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SiteVersion
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `HttpsApplicationConfiguration`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-httpsapplicationconfiguration
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IHttpsApplicationConfigurationProps), fullyQualifiedName: "@alicloud/ros-cdk-esa.HttpsApplicationConfigurationProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Esa.IHttpsApplicationConfigurationProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property siteId: The site ID, which can be obtained by calling the ListSites API.</summary>
            [JsiiProperty(name: "siteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SiteId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property altSvc: Function switch, default off.</summary>
            /// <remarks>
            /// Value range:
            /// on: Enabled.
            /// off: Disabled.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "altSvc", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AltSvc
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property altSvcClear: Alt-Svc whether The header contains the clear parameter.</summary>
            /// <remarks>
            /// This parameter is disabled by default. Value range:
            /// on: Enabled.
            /// off: Disabled.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "altSvcClear", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AltSvcClear
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property altSvcMa: The effective time of the Alt-Svc, in seconds.</summary>
            /// <remarks>
            /// The default value is 86400 seconds.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "altSvcMa", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AltSvcMa
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property altSvcPersist: Alt-Svc whether The header contains the persist parameter.</summary>
            /// <remarks>
            /// This parameter is disabled by default. Value range:
            /// on: Enabled.
            /// off: Disabled.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "altSvcPersist", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AltSvcPersist
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property hsts: Whether to enable HSTS.</summary>
            /// <remarks>
            /// It is disabled by default. Value range:
            /// on: Enabled.
            /// off: Disabled.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "hsts", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Hsts
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property hstsIncludeSubdomains: Whether to include subdomains in HSTS is disabled by default.</summary>
            /// <remarks>
            /// Value range:
            /// on: Enabled.
            /// off: Disabled.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "hstsIncludeSubdomains", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HstsIncludeSubdomains
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property hstsMaxAge: The expiration time of HSTS, in seconds.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "hstsMaxAge", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HstsMaxAge
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property hstsPreload: Whether to enable HSTS preloading.</summary>
            /// <remarks>
            /// It is disabled by default. Value range:
            /// on: Enabled.
            /// off: Disabled.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "hstsPreload", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HstsPreload
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property httpsForce: Whether to enable forced HTTPS.</summary>
            /// <remarks>
            /// It is disabled by default. Value range:
            /// on: Enabled.
            /// off: Disabled.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "httpsForce", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HttpsForce
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property httpsForceCode: Forced HTTPS jump status code, value range: 301 302 307 308.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "httpsForceCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HttpsForceCode
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property httpsNoSniDeny: Whether to enable to reject TLS handshake requests without SNI.</summary>
            /// <remarks>
            /// This parameter is disabled by default. Value range:
            /// on: Enabled.
            /// off: Disabled.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "httpsNoSniDeny", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HttpsNoSniDeny
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property httpsSniVerify: Whether to enable SNI verification.</summary>
            /// <remarks>
            /// It is disabled by default. Value range:
            /// on: Enabled.
            /// off: Disabled.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "httpsSniVerify", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HttpsSniVerify
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property httpsSniWhitelist: Specifies the list of allowed SNI whitelists, separated by spaces.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "httpsSniWhitelist", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HttpsSniWhitelist
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property paymentType: Payment Type.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "paymentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PaymentType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property rule: Rule content, using conditional expressions to match user requests.</summary>
            /// <remarks>
            /// When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
            /// Match all incoming requests: value set to true
            /// Match specified request: Set the value to a custom expression, for example: (http.host eq "video.example.com").
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
            /// on: Enabled.
            /// off: Disabled.
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

            /// <summary>Property siteVersion: The version number of the site configuration.</summary>
            /// <remarks>
            /// For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "siteVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SiteVersion
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
