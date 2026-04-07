using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dns
{
    /// <summary>Properties for defining a `CacheDomain`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-cachedomain
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ICacheDomainProps), fullyQualifiedName: "@alicloud/ros-cdk-dns.CacheDomainProps")]
    public interface ICacheDomainProps
    {
        /// <summary>Property cacheTtlMax: The maximum TTL value for cached records.</summary>
        [JsiiProperty(name: "cacheTtlMax", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CacheTtlMax
        {
            get;
        }

        /// <summary>Property cacheTtlMin: The minimum TTL value for cached records.</summary>
        [JsiiProperty(name: "cacheTtlMin", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CacheTtlMin
        {
            get;
        }

        /// <summary>Property domainName: The domain name of the DNS cache domain.</summary>
        [JsiiProperty(name: "domainName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DomainName
        {
            get;
        }

        /// <summary>Property instanceId: The instance ID associated with the DNS cache domain.</summary>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceId
        {
            get;
        }

        /// <summary>Property sourceDnsServer: List of source DNS servers.</summary>
        [JsiiProperty(name: "sourceDnsServer", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dns.RosCacheDomain.SourceDnsServerProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object SourceDnsServer
        {
            get;
        }

        /// <summary>Property sourceEdns: Whether EDNS is enabled for the source DNS server.</summary>
        [JsiiProperty(name: "sourceEdns", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SourceEdns
        {
            get;
        }

        /// <summary>Property sourceProtocol: The protocol used by the source DNS server.</summary>
        [JsiiProperty(name: "sourceProtocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SourceProtocol
        {
            get;
        }

        /// <summary>Property remark: Remark for the DNS cache domain.</summary>
        [JsiiProperty(name: "remark", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Remark
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `CacheDomain`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-cachedomain
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ICacheDomainProps), fullyQualifiedName: "@alicloud/ros-cdk-dns.CacheDomainProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dns.ICacheDomainProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property cacheTtlMax: The maximum TTL value for cached records.</summary>
            [JsiiProperty(name: "cacheTtlMax", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CacheTtlMax
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property cacheTtlMin: The minimum TTL value for cached records.</summary>
            [JsiiProperty(name: "cacheTtlMin", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CacheTtlMin
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property domainName: The domain name of the DNS cache domain.</summary>
            [JsiiProperty(name: "domainName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DomainName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property instanceId: The instance ID associated with the DNS cache domain.</summary>
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property sourceDnsServer: List of source DNS servers.</summary>
            [JsiiProperty(name: "sourceDnsServer", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dns.RosCacheDomain.SourceDnsServerProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object SourceDnsServer
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property sourceEdns: Whether EDNS is enabled for the source DNS server.</summary>
            [JsiiProperty(name: "sourceEdns", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SourceEdns
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property sourceProtocol: The protocol used by the source DNS server.</summary>
            [JsiiProperty(name: "sourceProtocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SourceProtocol
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property remark: Remark for the DNS cache domain.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "remark", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Remark
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
