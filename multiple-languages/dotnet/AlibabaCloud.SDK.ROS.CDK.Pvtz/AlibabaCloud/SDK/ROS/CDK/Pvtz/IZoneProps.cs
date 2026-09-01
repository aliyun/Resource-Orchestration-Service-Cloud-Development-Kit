using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Pvtz
{
    /// <summary>Properties for defining a `Zone`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pvtz-zone
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IZoneProps), fullyQualifiedName: "@alicloud/ros-cdk-pvtz.ZoneProps")]
    public interface IZoneProps
    {
        /// <summary>Property zoneName: Zone name.</summary>
        [JsiiProperty(name: "zoneName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ZoneName
        {
            get;
        }

        /// <summary>Property dnsGroup: The location of the built-in authoritative zone.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>NORMAL_ZONE: Standard zone. DNS responses are cached. If a cache miss occurs,
        /// the query is sent to the built-in authoritative standard zone. The time to live
        /// (TTL) value affects the time when a DNS record change takes effect. You cannot
        /// use custom DNS lines or weighted round-robin.</description>
        /// <description>FAST_ZONE: Accelerated zone (recommended). DNS queries are directly responded
        /// to with the lowest latency. DNS record changes take effect in real time. You can
        /// use custom DNS lines and weighted round-robin.
        /// Default value: NORMAL_ZONE.</description>
        /// </list>
        ///
        ///     The built-in authoritative accelerated zone is located before the cache module.
        ///     DNS responses are not cached. This may increase the number of DNS queries and
        ///     your costs.
        ///     Starting from April 30, 2025 (UTC+8), when new users activate Cloud DNS
        ///     PrivateZone, added zones are set as accelerated zones by default.
        /// </remarks>
        [JsiiProperty(name: "dnsGroup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DnsGroup
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ignoredStackTagKeys: Stack tag keys to ignore.</summary>
        [JsiiProperty(name: "ignoredStackTagKeys", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IgnoredStackTagKeys
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property proxyPattern: Specifies whether to enable subdomain recursive proxy.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>ZONE: Disables the feature. If a DNS query for a subdomain that does not exist
        /// under the current domain name is received, an NXDOMAIN error is returned.</description>
        /// <description>RECORD: Enables the feature. If a DNS query for a subdomain that does not exist
        /// under the current domain name is received, the query is processed by the
        /// forwarding and recursion modules in sequence. The final result is used to respond
        /// to the DNS query.
        /// Default value: ZONE.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "proxyPattern", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ProxyPattern
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property remark: 50 characters at most.</summary>
        /// <remarks>
        /// It can only contain numbers, Chinese, English and special characters: "_-,.，。".
        /// </remarks>
        [JsiiProperty(name: "remark", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Remark
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceGroupId: Resource group id.</summary>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tags: Tags to attach to instance.</summary>
        /// <remarks>
        /// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-pvtz.RosZone.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Pvtz.RosZone.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Zone`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pvtz-zone
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IZoneProps), fullyQualifiedName: "@alicloud/ros-cdk-pvtz.ZoneProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Pvtz.IZoneProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property zoneName: Zone name.</summary>
            [JsiiProperty(name: "zoneName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ZoneName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property dnsGroup: The location of the built-in authoritative zone.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>NORMAL_ZONE: Standard zone. DNS responses are cached. If a cache miss occurs,
            /// the query is sent to the built-in authoritative standard zone. The time to live
            /// (TTL) value affects the time when a DNS record change takes effect. You cannot
            /// use custom DNS lines or weighted round-robin.</description>
            /// <description>FAST_ZONE: Accelerated zone (recommended). DNS queries are directly responded
            /// to with the lowest latency. DNS record changes take effect in real time. You can
            /// use custom DNS lines and weighted round-robin.
            /// Default value: NORMAL_ZONE.</description>
            /// </list>
            ///
            ///     The built-in authoritative accelerated zone is located before the cache module.
            ///     DNS responses are not cached. This may increase the number of DNS queries and
            ///     your costs.
            ///     Starting from April 30, 2025 (UTC+8), when new users activate Cloud DNS
            ///     PrivateZone, added zones are set as accelerated zones by default.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dnsGroup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DnsGroup
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ignoredStackTagKeys: Stack tag keys to ignore.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "ignoredStackTagKeys", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? IgnoredStackTagKeys
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property proxyPattern: Specifies whether to enable subdomain recursive proxy.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>ZONE: Disables the feature. If a DNS query for a subdomain that does not exist
            /// under the current domain name is received, an NXDOMAIN error is returned.</description>
            /// <description>RECORD: Enables the feature. If a DNS query for a subdomain that does not exist
            /// under the current domain name is received, the query is processed by the
            /// forwarding and recursion modules in sequence. The final result is used to respond
            /// to the DNS query.
            /// Default value: ZONE.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "proxyPattern", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ProxyPattern
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property remark: 50 characters at most.</summary>
            /// <remarks>
            /// It can only contain numbers, Chinese, English and special characters: "_-,.，。".
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "remark", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Remark
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceGroupId: Resource group id.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tags: Tags to attach to instance.</summary>
            /// <remarks>
            /// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-pvtz.RosZone.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Pvtz.RosZone.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Pvtz.RosZone.ITagsProperty[]?>();
            }
        }
    }
}
