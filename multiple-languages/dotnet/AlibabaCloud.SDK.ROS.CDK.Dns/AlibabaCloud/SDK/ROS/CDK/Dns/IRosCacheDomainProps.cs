using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dns
{
    /// <summary>Properties for defining a `RosCacheDomain`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-cachedomain
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosCacheDomainProps), fullyQualifiedName: "@alicloud/ros-cdk-dns.RosCacheDomainProps")]
    public interface IRosCacheDomainProps
    {
        /// <remarks>
        /// <strong>Property</strong>: cacheTtlMax: The maximum TTL value for cached records.
        /// </remarks>
        [JsiiProperty(name: "cacheTtlMax", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CacheTtlMax
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: cacheTtlMin: The minimum TTL value for cached records.
        /// </remarks>
        [JsiiProperty(name: "cacheTtlMin", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CacheTtlMin
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: domainName: The domain name of the DNS cache domain.
        /// </remarks>
        [JsiiProperty(name: "domainName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DomainName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceId: The instance ID associated with the DNS cache domain.
        /// </remarks>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: sourceDnsServer: List of source DNS servers.
        /// </remarks>
        [JsiiProperty(name: "sourceDnsServer", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dns.RosCacheDomain.SourceDnsServerProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object SourceDnsServer
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: sourceEdns: Whether EDNS is enabled for the source DNS server.
        /// </remarks>
        [JsiiProperty(name: "sourceEdns", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SourceEdns
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: sourceProtocol: The protocol used by the source DNS server.
        /// </remarks>
        [JsiiProperty(name: "sourceProtocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SourceProtocol
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: remark: Remark for the DNS cache domain.
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

        /// <summary>Properties for defining a `RosCacheDomain`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-cachedomain
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosCacheDomainProps), fullyQualifiedName: "@alicloud/ros-cdk-dns.RosCacheDomainProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dns.IRosCacheDomainProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: cacheTtlMax: The maximum TTL value for cached records.
            /// </remarks>
            [JsiiProperty(name: "cacheTtlMax", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CacheTtlMax
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: cacheTtlMin: The minimum TTL value for cached records.
            /// </remarks>
            [JsiiProperty(name: "cacheTtlMin", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CacheTtlMin
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: domainName: The domain name of the DNS cache domain.
            /// </remarks>
            [JsiiProperty(name: "domainName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DomainName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceId: The instance ID associated with the DNS cache domain.
            /// </remarks>
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: sourceDnsServer: List of source DNS servers.
            /// </remarks>
            [JsiiProperty(name: "sourceDnsServer", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dns.RosCacheDomain.SourceDnsServerProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object SourceDnsServer
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: sourceEdns: Whether EDNS is enabled for the source DNS server.
            /// </remarks>
            [JsiiProperty(name: "sourceEdns", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SourceEdns
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: sourceProtocol: The protocol used by the source DNS server.
            /// </remarks>
            [JsiiProperty(name: "sourceProtocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SourceProtocol
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: remark: Remark for the DNS cache domain.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "remark", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Remark
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
