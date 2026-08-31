using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dns
{
    /// <summary>Properties for defining a `AddressPool`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-addresspool
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IAddressPoolProps), fullyQualifiedName: "@alicloud/ros-cdk-dns.AddressPoolProps")]
    public interface IAddressPoolProps
    {
        /// <summary>Property addr: The list of addresses in the address pool.</summary>
        [JsiiProperty(name: "addr", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dns.RosAddressPool.AddrProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object Addr
        {
            get;
        }

        /// <summary>Property instanceId: The ID of the GTM instance.</summary>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceId
        {
            get;
        }

        /// <summary>Property lbaStrategy: The load balancing policy.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>ALL_RR: returns all addresses.</description>
        /// <description>RATIO: returns addresses by weight.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "lbaStrategy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object LbaStrategy
        {
            get;
        }

        /// <summary>Property name: The name of the address pool.</summary>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Name
        {
            get;
        }

        /// <summary>Property type: The type of the address pool.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>IPV4: IPv4 address</description>
        /// <description>IPV6: IPv6 address</description>
        /// <description>DOMAIN: domain name</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Type
        {
            get;
        }

        /// <summary>Property evaluationCount: The number of times that the system waits for a response from each address before it marks the address as unhealthy.</summary>
        [JsiiProperty(name: "evaluationCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EvaluationCount
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property interval: The interval between two consecutive health checks, in seconds.</summary>
        [JsiiProperty(name: "interval", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Interval
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ispCityNode: The list of ISP city nodes.</summary>
        [JsiiProperty(name: "ispCityNode", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dns.RosAddressPool.IspCityNodeProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IspCityNode
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property monitorExtendInfo: The extended information.</summary>
        /// <remarks>
        /// This parameter is a JSON string. The required
        /// parameters vary based on the health check protocol:
        ///
        /// <list type="bullet">
        /// <description>HTTP and HTTPS:</description>
        /// <description>port: The health check port.</description>
        /// <description>host: The host settings.</description>
        /// <description>path: The URL path.</description>
        /// <description>code: The return code. A response with a status code greater than this value is
        /// considered abnormal. Valid values: 400 and 500.</description>
        /// <description>failureRate: The failure rate.</description>
        /// <description>sni: Specifies whether to enable Server Name Indication (SNI). This parameter
        /// is available only for the HTTPS protocol.</description>
        /// <description>true: Enable SNI.</description>
        /// <description>Other values: Disable SNI.</description>
        /// <description>nodeType: The type of the health check node when the address pool type is
        /// DOMAIN. Valid values:</description>
        /// <description>IPV4</description>
        /// <description>IPV6</description>
        /// <description>PING:</description>
        /// <description>failureRate: The failure rate.</description>
        /// <description>packetNum: The number of ping packets.</description>
        /// <description>packetLossRate: The packet loss rate.</description>
        /// <description>nodeType: The type of the health check node when the address pool type is
        /// DOMAIN. Valid values:</description>
        /// <description>IPV4</description>
        /// <description>IPV6</description>
        /// <description>TCP:</description>
        /// <description>port: The health check port.</description>
        /// <description>failureRate: The failure rate.</description>
        /// <description>nodeType: The type of the health check node when the address pool type is
        /// DOMAIN. Valid values:</description>
        /// <description>IPV4</description>
        /// <description>IPV6</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "monitorExtendInfo", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MonitorExtendInfo
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property monitorStatus: The status of the health check feature.</summary>
        /// <remarks>
        /// Default value: CLOSE. If you set this
        /// parameter to OPEN, the health check configuration is verified. Otherwise, the
        /// configuration is ignored.
        ///
        /// <list type="bullet">
        /// <description>OPEN: enabled</description>
        /// <description>CLOSE: disabled</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "monitorStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MonitorStatus
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property protocolType: The protocol type.</summary>
        [JsiiProperty(name: "protocolType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ProtocolType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property timeout: The timeout period of a health check, in seconds.</summary>
        [JsiiProperty(name: "timeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Timeout
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `AddressPool`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-addresspool
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IAddressPoolProps), fullyQualifiedName: "@alicloud/ros-cdk-dns.AddressPoolProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dns.IAddressPoolProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property addr: The list of addresses in the address pool.</summary>
            [JsiiProperty(name: "addr", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dns.RosAddressPool.AddrProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object Addr
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property instanceId: The ID of the GTM instance.</summary>
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property lbaStrategy: The load balancing policy.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>ALL_RR: returns all addresses.</description>
            /// <description>RATIO: returns addresses by weight.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "lbaStrategy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object LbaStrategy
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property name: The name of the address pool.</summary>
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Name
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property type: The type of the address pool.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>IPV4: IPv4 address</description>
            /// <description>IPV6: IPv6 address</description>
            /// <description>DOMAIN: domain name</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Type
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property evaluationCount: The number of times that the system waits for a response from each address before it marks the address as unhealthy.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "evaluationCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EvaluationCount
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property interval: The interval between two consecutive health checks, in seconds.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "interval", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Interval
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ispCityNode: The list of ISP city nodes.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "ispCityNode", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dns.RosAddressPool.IspCityNodeProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? IspCityNode
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property monitorExtendInfo: The extended information.</summary>
            /// <remarks>
            /// This parameter is a JSON string. The required
            /// parameters vary based on the health check protocol:
            ///
            /// <list type="bullet">
            /// <description>HTTP and HTTPS:</description>
            /// <description>port: The health check port.</description>
            /// <description>host: The host settings.</description>
            /// <description>path: The URL path.</description>
            /// <description>code: The return code. A response with a status code greater than this value is
            /// considered abnormal. Valid values: 400 and 500.</description>
            /// <description>failureRate: The failure rate.</description>
            /// <description>sni: Specifies whether to enable Server Name Indication (SNI). This parameter
            /// is available only for the HTTPS protocol.</description>
            /// <description>true: Enable SNI.</description>
            /// <description>Other values: Disable SNI.</description>
            /// <description>nodeType: The type of the health check node when the address pool type is
            /// DOMAIN. Valid values:</description>
            /// <description>IPV4</description>
            /// <description>IPV6</description>
            /// <description>PING:</description>
            /// <description>failureRate: The failure rate.</description>
            /// <description>packetNum: The number of ping packets.</description>
            /// <description>packetLossRate: The packet loss rate.</description>
            /// <description>nodeType: The type of the health check node when the address pool type is
            /// DOMAIN. Valid values:</description>
            /// <description>IPV4</description>
            /// <description>IPV6</description>
            /// <description>TCP:</description>
            /// <description>port: The health check port.</description>
            /// <description>failureRate: The failure rate.</description>
            /// <description>nodeType: The type of the health check node when the address pool type is
            /// DOMAIN. Valid values:</description>
            /// <description>IPV4</description>
            /// <description>IPV6</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "monitorExtendInfo", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? MonitorExtendInfo
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property monitorStatus: The status of the health check feature.</summary>
            /// <remarks>
            /// Default value: CLOSE. If you set this
            /// parameter to OPEN, the health check configuration is verified. Otherwise, the
            /// configuration is ignored.
            ///
            /// <list type="bullet">
            /// <description>OPEN: enabled</description>
            /// <description>CLOSE: disabled</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "monitorStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MonitorStatus
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property protocolType: The protocol type.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "protocolType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ProtocolType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property timeout: The timeout period of a health check, in seconds.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "timeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Timeout
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
