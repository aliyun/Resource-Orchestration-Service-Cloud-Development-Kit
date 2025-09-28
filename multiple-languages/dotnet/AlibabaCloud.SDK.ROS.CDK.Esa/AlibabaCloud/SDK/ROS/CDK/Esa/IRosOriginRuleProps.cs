using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Esa
{
    /// <summary>Properties for defining a `RosOriginRule`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-originrule
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosOriginRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-esa.RosOriginRuleProps")]
    public interface IRosOriginRuleProps
    {
        /// <remarks>
        /// <strong>Property</strong>: siteId: The site ID.
        /// </remarks>
        [JsiiProperty(name: "siteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SiteId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: dnsRecord: Overwrite the DNS resolution record of the origin request.
        /// </remarks>
        [JsiiProperty(name: "dnsRecord", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DnsRecord
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: follow302Enable: Return Source 302 follow switch. Value range:
        /// - `on`: ON.
        /// - `off`: closed.
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

        /// <remarks>
        /// <strong>Property</strong>: follow302MaxTries: 302 follows the upper limit of the number of times, with a value range of [1-5].
        /// </remarks>
        [JsiiProperty(name: "follow302MaxTries", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Follow302MaxTries
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: follow302RetainArgs: Retain the original request parameter switch. Value range:
        /// - `on`: ON.
        /// - `off`: closed.
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

        /// <remarks>
        /// <strong>Property</strong>: follow302RetainHeader: Retain the original request header switch. Value range:
        /// - `on`: ON.
        /// - `off`: closed.
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

        /// <remarks>
        /// <strong>Property</strong>: follow302TargetHost: Modify the source host after 302.
        /// </remarks>
        [JsiiProperty(name: "follow302TargetHost", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Follow302TargetHost
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: originHost: The HOST carried in the back-to-origin request.
        /// </remarks>
        [JsiiProperty(name: "originHost", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? OriginHost
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: originHttpPort: The port of the origin station accessed when the HTTP protocol is used to return to the origin.
        /// </remarks>
        [JsiiProperty(name: "originHttpPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? OriginHttpPort
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: originHttpsPort: Port of the origin server when using the HTTPS protocol for origin requests.
        /// </remarks>
        [JsiiProperty(name: "originHttpsPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? OriginHttpsPort
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: originMtls: The mtls switch. Value range:
        /// - `on`: ON.
        /// - `off`: closed.
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

        /// <remarks>
        /// <strong>Property</strong>: originReadTimeout: Read timeout interval of the source station (s).
        /// </remarks>
        [JsiiProperty(name: "originReadTimeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? OriginReadTimeout
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: originScheme: The protocol used by the back-to-origin request. Value range:
        /// - `http`: uses the http protocol to return to the source.
        /// - `https`: uses the https protocol to return to the source.
        /// - `follow`: follows the Client Protocol back to the source.
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

        /// <remarks>
        /// <strong>Property</strong>: originSni: SNI carried in the back-to-origin request.
        /// </remarks>
        [JsiiProperty(name: "originSni", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? OriginSni
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: originVerify: Source station certificate verification switch. Value range:
        /// - `on`: ON.
        /// - `off`: closed.
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

        /// <remarks>
        /// <strong>Property</strong>: range: Use the range sharding method to download the file from the source. Value range:
        /// - `on`: Open.
        /// - `off`: off.
        /// - `force`: force.
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

        /// <remarks>
        /// <strong>Property</strong>: rangeChunkSize: range shard size.
        /// </remarks>
        [JsiiProperty(name: "rangeChunkSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RangeChunkSize
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: rule: Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
        /// - Match all incoming requests: value set to true
        /// - Match specified request: Set the value to a custom expression, for example: (http.host eq \"video.example.com\").
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

        /// <remarks>
        /// <strong>Property</strong>: ruleEnable: Rule switch. When adding global configuration, this parameter does not need to be set. Value range:
        /// - `on`: open.
        /// - `off`: close.
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

        /// <remarks>
        /// <strong>Property</strong>: ruleName: Rule name. When adding global configuration, this parameter does not need to be set.
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

        /// <remarks>
        /// <strong>Property</strong>: sequence: Order of rule execution. The smaller the value, the higher the priority for execution.
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

        /// <remarks>
        /// <strong>Property</strong>: siteVersion: The version number of the site configuration. For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
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

        /// <summary>Properties for defining a `RosOriginRule`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-originrule
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosOriginRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-esa.RosOriginRuleProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Esa.IRosOriginRuleProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: siteId: The site ID.
            /// </remarks>
            [JsiiProperty(name: "siteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SiteId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: dnsRecord: Overwrite the DNS resolution record of the origin request.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dnsRecord", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DnsRecord
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: follow302Enable: Return Source 302 follow switch. Value range:
            /// - `on`: ON.
            /// - `off`: closed.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "follow302Enable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Follow302Enable
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: follow302MaxTries: 302 follows the upper limit of the number of times, with a value range of [1-5].
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "follow302MaxTries", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Follow302MaxTries
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: follow302RetainArgs: Retain the original request parameter switch. Value range:
            /// - `on`: ON.
            /// - `off`: closed.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "follow302RetainArgs", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Follow302RetainArgs
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: follow302RetainHeader: Retain the original request header switch. Value range:
            /// - `on`: ON.
            /// - `off`: closed.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "follow302RetainHeader", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Follow302RetainHeader
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: follow302TargetHost: Modify the source host after 302.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "follow302TargetHost", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Follow302TargetHost
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: originHost: The HOST carried in the back-to-origin request.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "originHost", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OriginHost
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: originHttpPort: The port of the origin station accessed when the HTTP protocol is used to return to the origin.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "originHttpPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OriginHttpPort
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: originHttpsPort: Port of the origin server when using the HTTPS protocol for origin requests.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "originHttpsPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OriginHttpsPort
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: originMtls: The mtls switch. Value range:
            /// - `on`: ON.
            /// - `off`: closed.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "originMtls", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OriginMtls
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: originReadTimeout: Read timeout interval of the source station (s).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "originReadTimeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OriginReadTimeout
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: originScheme: The protocol used by the back-to-origin request. Value range:
            /// - `http`: uses the http protocol to return to the source.
            /// - `https`: uses the https protocol to return to the source.
            /// - `follow`: follows the Client Protocol back to the source.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "originScheme", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OriginScheme
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: originSni: SNI carried in the back-to-origin request.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "originSni", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OriginSni
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: originVerify: Source station certificate verification switch. Value range:
            /// - `on`: ON.
            /// - `off`: closed.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "originVerify", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OriginVerify
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: range: Use the range sharding method to download the file from the source. Value range:
            /// - `on`: Open.
            /// - `off`: off.
            /// - `force`: force.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "range", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Range
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: rangeChunkSize: range shard size.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "rangeChunkSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RangeChunkSize
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: rule: Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
            /// - Match all incoming requests: value set to true
            /// - Match specified request: Set the value to a custom expression, for example: (http.host eq \"video.example.com\").
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "rule", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Rule
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: ruleEnable: Rule switch. When adding global configuration, this parameter does not need to be set. Value range:
            /// - `on`: open.
            /// - `off`: close.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ruleEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RuleEnable
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: ruleName: Rule name. When adding global configuration, this parameter does not need to be set.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ruleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RuleName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: sequence: Order of rule execution. The smaller the value, the higher the priority for execution.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sequence", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Sequence
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: siteVersion: The version number of the site configuration. For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
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
