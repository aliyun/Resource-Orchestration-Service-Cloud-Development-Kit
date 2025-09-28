using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Esa
{
    /// <summary>Properties for defining a `OriginRule`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-originrule
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IOriginRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-esa.OriginRuleProps")]
    public interface IOriginRuleProps
    {
        /// <summary>Property siteId: The site ID.</summary>
        [JsiiProperty(name: "siteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SiteId
        {
            get;
        }

        /// <summary>Property dnsRecord: Overwrite the DNS resolution record of the origin request.</summary>
        [JsiiProperty(name: "dnsRecord", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DnsRecord
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property follow302Enable: Return Source 302 follow switch.</summary>
        /// <remarks>
        /// Value range:
        ///
        /// <list type="bullet">
        /// <description><c>on</c>: ON.</description>
        /// <description><c>off</c>: closed.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "follow302Enable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Follow302Enable
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property follow302MaxTries: 302 follows the upper limit of the number of times, with a value range of [1-5].</summary>
        [JsiiProperty(name: "follow302MaxTries", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Follow302MaxTries
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property follow302RetainArgs: Retain the original request parameter switch.</summary>
        /// <remarks>
        /// Value range:
        ///
        /// <list type="bullet">
        /// <description><c>on</c>: ON.</description>
        /// <description><c>off</c>: closed.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "follow302RetainArgs", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Follow302RetainArgs
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property follow302RetainHeader: Retain the original request header switch.</summary>
        /// <remarks>
        /// Value range:
        ///
        /// <list type="bullet">
        /// <description><c>on</c>: ON.</description>
        /// <description><c>off</c>: closed.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "follow302RetainHeader", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Follow302RetainHeader
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property follow302TargetHost: Modify the source host after 302.</summary>
        [JsiiProperty(name: "follow302TargetHost", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Follow302TargetHost
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property originHost: The HOST carried in the back-to-origin request.</summary>
        [JsiiProperty(name: "originHost", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? OriginHost
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property originHttpPort: The port of the origin station accessed when the HTTP protocol is used to return to the origin.</summary>
        [JsiiProperty(name: "originHttpPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? OriginHttpPort
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property originHttpsPort: Port of the origin server when using the HTTPS protocol for origin requests.</summary>
        [JsiiProperty(name: "originHttpsPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? OriginHttpsPort
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property originMtls: The mtls switch.</summary>
        /// <remarks>
        /// Value range:
        ///
        /// <list type="bullet">
        /// <description><c>on</c>: ON.</description>
        /// <description><c>off</c>: closed.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "originMtls", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? OriginMtls
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property originReadTimeout: Read timeout interval of the source station (s).</summary>
        [JsiiProperty(name: "originReadTimeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? OriginReadTimeout
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property originScheme: The protocol used by the back-to-origin request.</summary>
        /// <remarks>
        /// Value range:
        ///
        /// <list type="bullet">
        /// <description><c>http</c>: uses the http protocol to return to the source.</description>
        /// <description><c>https</c>: uses the https protocol to return to the source.</description>
        /// <description><c>follow</c>: follows the Client Protocol back to the source.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "originScheme", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? OriginScheme
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property originSni: SNI carried in the back-to-origin request.</summary>
        [JsiiProperty(name: "originSni", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? OriginSni
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property originVerify: Source station certificate verification switch.</summary>
        /// <remarks>
        /// Value range:
        ///
        /// <list type="bullet">
        /// <description><c>on</c>: ON.</description>
        /// <description><c>off</c>: closed.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "originVerify", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? OriginVerify
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property range: Use the range sharding method to download the file from the source.</summary>
        /// <remarks>
        /// Value range:
        ///
        /// <list type="bullet">
        /// <description><c>on</c>: Open.</description>
        /// <description><c>off</c>: off.</description>
        /// <description><c>force</c>: force.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "range", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Range
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property rangeChunkSize: range shard size.</summary>
        [JsiiProperty(name: "rangeChunkSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RangeChunkSize
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
        /// <description><c>on</c>: open.</description>
        /// <description><c>off</c>: close.</description>
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

        /// <summary>Properties for defining a `OriginRule`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-originrule
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IOriginRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-esa.OriginRuleProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Esa.IOriginRuleProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property siteId: The site ID.</summary>
            [JsiiProperty(name: "siteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SiteId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property dnsRecord: Overwrite the DNS resolution record of the origin request.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "dnsRecord", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DnsRecord
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property follow302Enable: Return Source 302 follow switch.</summary>
            /// <remarks>
            /// Value range:
            ///
            /// <list type="bullet">
            /// <description><c>on</c>: ON.</description>
            /// <description><c>off</c>: closed.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "follow302Enable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Follow302Enable
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property follow302MaxTries: 302 follows the upper limit of the number of times, with a value range of [1-5].</summary>
            [JsiiOptional]
            [JsiiProperty(name: "follow302MaxTries", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Follow302MaxTries
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property follow302RetainArgs: Retain the original request parameter switch.</summary>
            /// <remarks>
            /// Value range:
            ///
            /// <list type="bullet">
            /// <description><c>on</c>: ON.</description>
            /// <description><c>off</c>: closed.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "follow302RetainArgs", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Follow302RetainArgs
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property follow302RetainHeader: Retain the original request header switch.</summary>
            /// <remarks>
            /// Value range:
            ///
            /// <list type="bullet">
            /// <description><c>on</c>: ON.</description>
            /// <description><c>off</c>: closed.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "follow302RetainHeader", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Follow302RetainHeader
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property follow302TargetHost: Modify the source host after 302.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "follow302TargetHost", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Follow302TargetHost
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property originHost: The HOST carried in the back-to-origin request.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "originHost", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OriginHost
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property originHttpPort: The port of the origin station accessed when the HTTP protocol is used to return to the origin.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "originHttpPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OriginHttpPort
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property originHttpsPort: Port of the origin server when using the HTTPS protocol for origin requests.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "originHttpsPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OriginHttpsPort
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property originMtls: The mtls switch.</summary>
            /// <remarks>
            /// Value range:
            ///
            /// <list type="bullet">
            /// <description><c>on</c>: ON.</description>
            /// <description><c>off</c>: closed.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "originMtls", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OriginMtls
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property originReadTimeout: Read timeout interval of the source station (s).</summary>
            [JsiiOptional]
            [JsiiProperty(name: "originReadTimeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OriginReadTimeout
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property originScheme: The protocol used by the back-to-origin request.</summary>
            /// <remarks>
            /// Value range:
            ///
            /// <list type="bullet">
            /// <description><c>http</c>: uses the http protocol to return to the source.</description>
            /// <description><c>https</c>: uses the https protocol to return to the source.</description>
            /// <description><c>follow</c>: follows the Client Protocol back to the source.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "originScheme", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OriginScheme
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property originSni: SNI carried in the back-to-origin request.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "originSni", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OriginSni
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property originVerify: Source station certificate verification switch.</summary>
            /// <remarks>
            /// Value range:
            ///
            /// <list type="bullet">
            /// <description><c>on</c>: ON.</description>
            /// <description><c>off</c>: closed.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "originVerify", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OriginVerify
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property range: Use the range sharding method to download the file from the source.</summary>
            /// <remarks>
            /// Value range:
            ///
            /// <list type="bullet">
            /// <description><c>on</c>: Open.</description>
            /// <description><c>off</c>: off.</description>
            /// <description><c>force</c>: force.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "range", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Range
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property rangeChunkSize: range shard size.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "rangeChunkSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RangeChunkSize
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
            /// <description><c>on</c>: open.</description>
            /// <description><c>off</c>: close.</description>
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
