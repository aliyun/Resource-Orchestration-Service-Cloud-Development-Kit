using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Esa
{
    /// <summary>Properties for defining a `CompressionRule`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-compressionrule
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ICompressionRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-esa.CompressionRuleProps")]
    public interface ICompressionRuleProps
    {
        /// <summary>Property siteId: The site ID, which can be obtained by calling the ListSites API.</summary>
        [JsiiProperty(name: "siteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SiteId
        {
            get;
        }

        /// <summary>Property brotli: Brotli compression.</summary>
        /// <remarks>
        /// Value range:
        /// on: Enable.
        /// off: Disable.
        /// </remarks>
        [JsiiProperty(name: "brotli", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Brotli
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property gzip: Gzip compression.</summary>
        /// <remarks>
        /// Value range:
        /// on: Enable.
        /// off: Disable.
        /// </remarks>
        [JsiiProperty(name: "gzip", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Gzip
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
        /// on: Enable.
        /// off: Disable.
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

        /// <summary>Property zstd: Zstd compression.</summary>
        /// <remarks>
        /// Value range:
        /// on: Enable.
        /// off: Disable.
        /// </remarks>
        [JsiiProperty(name: "zstd", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Zstd
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `CompressionRule`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-compressionrule
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ICompressionRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-esa.CompressionRuleProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Esa.ICompressionRuleProps
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

            /// <summary>Property brotli: Brotli compression.</summary>
            /// <remarks>
            /// Value range:
            /// on: Enable.
            /// off: Disable.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "brotli", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Brotli
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property gzip: Gzip compression.</summary>
            /// <remarks>
            /// Value range:
            /// on: Enable.
            /// off: Disable.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "gzip", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Gzip
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
            /// on: Enable.
            /// off: Disable.
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

            /// <summary>Property zstd: Zstd compression.</summary>
            /// <remarks>
            /// Value range:
            /// on: Enable.
            /// off: Disable.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "zstd", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Zstd
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
