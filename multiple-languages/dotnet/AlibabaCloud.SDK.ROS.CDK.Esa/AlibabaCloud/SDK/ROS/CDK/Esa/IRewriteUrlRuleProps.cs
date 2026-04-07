using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Esa
{
    /// <summary>Properties for defining a `RewriteUrlRule`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-rewriteurlrule
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRewriteUrlRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-esa.RewriteUrlRuleProps")]
    public interface IRewriteUrlRuleProps
    {
        /// <summary>Property siteId: The website ID, which can be obtained by calling the [ListSites](https:\/\/www.alibabacloud.com\/help\/en\/doc-detail\/2850189.html) operation.</summary>
        [JsiiProperty(name: "siteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SiteId
        {
            get;
        }

        /// <summary>Property queryString: The desired query string to which you want to rewrite the query string in the original request.</summary>
        [JsiiProperty(name: "queryString", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? QueryString
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property rewriteQueryStringType: Query string rewrite type.</summary>
        /// <remarks>
        /// Value range:
        ///
        /// <list type="bullet">
        /// <description><c>static</c>: Static mode.</description>
        /// <description><c>dynamic</c>: Dynamic mode.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "rewriteQueryStringType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RewriteQueryStringType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property rewriteUriType: URI rewrite type.</summary>
        /// <remarks>
        /// Value range:
        ///
        /// <list type="bullet">
        /// <description><c>static</c>: Static mode.</description>
        /// <description><c>dynamic</c>: Dynamic mode.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "rewriteUriType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RewriteUriType
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
        /// on: open.
        /// off: close.
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

        /// <summary>Property siteVersion: Version number of the site configuration.</summary>
        /// <remarks>
        /// For a site with configuration version management enabled, you can use this parameter to specify the site version in which the configuration takes effect. The default version is 0.
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

        /// <summary>Property uri: The desired URI to which you want to rewrite the path in the original request.</summary>
        [JsiiProperty(name: "uri", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Uri
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RewriteUrlRule`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-rewriteurlrule
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRewriteUrlRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-esa.RewriteUrlRuleProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Esa.IRewriteUrlRuleProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property siteId: The website ID, which can be obtained by calling the [ListSites](https:\/\/www.alibabacloud.com\/help\/en\/doc-detail\/2850189.html) operation.</summary>
            [JsiiProperty(name: "siteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SiteId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property queryString: The desired query string to which you want to rewrite the query string in the original request.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "queryString", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? QueryString
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property rewriteQueryStringType: Query string rewrite type.</summary>
            /// <remarks>
            /// Value range:
            ///
            /// <list type="bullet">
            /// <description><c>static</c>: Static mode.</description>
            /// <description><c>dynamic</c>: Dynamic mode.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "rewriteQueryStringType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RewriteQueryStringType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property rewriteUriType: URI rewrite type.</summary>
            /// <remarks>
            /// Value range:
            ///
            /// <list type="bullet">
            /// <description><c>static</c>: Static mode.</description>
            /// <description><c>dynamic</c>: Dynamic mode.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "rewriteUriType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RewriteUriType
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
            /// on: open.
            /// off: close.
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

            /// <summary>Property siteVersion: Version number of the site configuration.</summary>
            /// <remarks>
            /// For a site with configuration version management enabled, you can use this parameter to specify the site version in which the configuration takes effect. The default version is 0.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "siteVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SiteVersion
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property uri: The desired URI to which you want to rewrite the path in the original request.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "uri", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Uri
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
