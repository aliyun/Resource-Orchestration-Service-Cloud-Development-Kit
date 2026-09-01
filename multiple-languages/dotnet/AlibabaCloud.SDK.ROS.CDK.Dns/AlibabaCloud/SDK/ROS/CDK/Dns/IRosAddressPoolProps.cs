using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dns
{
    /// <summary>Properties for defining a `RosAddressPool`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-addresspool
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosAddressPoolProps), fullyQualifiedName: "@alicloud/ros-cdk-dns.RosAddressPoolProps")]
    public interface IRosAddressPoolProps
    {
        /// <remarks>
        /// <strong>Property</strong>: addr: The list of addresses in the address pool.
        /// </remarks>
        [JsiiProperty(name: "addr", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dns.RosAddressPool.AddrProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object Addr
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceId: The ID of the GTM instance.
        /// </remarks>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: lbaStrategy: The load balancing policy. Valid values:
        /// - ALL_RR: returns all addresses.
        /// - RATIO: returns addresses by weight.
        /// </remarks>
        [JsiiProperty(name: "lbaStrategy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object LbaStrategy
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: name: The name of the address pool.
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Name
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: type: The type of the address pool. Valid values:
        /// - IPV4: IPv4 address
        /// - IPV6: IPv6 address
        /// - DOMAIN: domain name
        /// </remarks>
        [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Type
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: evaluationCount: The number of times that the system waits for a response from each address before it marks the address as unhealthy.
        /// </remarks>
        [JsiiProperty(name: "evaluationCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EvaluationCount
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: interval: The interval between two consecutive health checks, in seconds.
        /// </remarks>
        [JsiiProperty(name: "interval", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Interval
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: ispCityNode: The list of ISP city nodes.
        /// </remarks>
        [JsiiProperty(name: "ispCityNode", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dns.RosAddressPool.IspCityNodeProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IspCityNode
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: monitorExtendInfo: The extended information. This parameter is a JSON string. The required
        /// parameters vary based on the health check protocol:
        /// - HTTP and HTTPS:
        /// - port: The health check port.
        /// - host: The host settings.
        /// - path: The URL path.
        /// - code: The return code. A response with a status code greater than this value is
        /// considered abnormal. Valid values: 400 and 500.
        /// - failureRate: The failure rate.
        /// - sni: Specifies whether to enable Server Name Indication (SNI). This parameter
        /// is available only for the HTTPS protocol.
        /// - true: Enable SNI.
        /// - Other values: Disable SNI.
        /// - nodeType: The type of the health check node when the address pool type is
        /// DOMAIN. Valid values:
        /// - IPV4
        /// - IPV6
        /// - PING:
        /// - failureRate: The failure rate.
        /// - packetNum: The number of ping packets.
        /// - packetLossRate: The packet loss rate.
        /// - nodeType: The type of the health check node when the address pool type is
        /// DOMAIN. Valid values:
        /// - IPV4
        /// - IPV6
        /// - TCP:
        /// - port: The health check port.
        /// - failureRate: The failure rate.
        /// - nodeType: The type of the health check node when the address pool type is
        /// DOMAIN. Valid values:
        /// - IPV4
        /// - IPV6
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

        /// <remarks>
        /// <strong>Property</strong>: monitorStatus: The status of the health check feature. Default value: CLOSE. If you set this
        /// parameter to OPEN, the health check configuration is verified. Otherwise, the
        /// configuration is ignored.
        /// - OPEN: enabled
        /// - CLOSE: disabled
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

        /// <remarks>
        /// <strong>Property</strong>: protocolType: The protocol type.
        /// </remarks>
        [JsiiProperty(name: "protocolType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ProtocolType
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: timeout: The timeout period of a health check, in seconds.
        /// </remarks>
        [JsiiProperty(name: "timeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Timeout
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosAddressPool`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-addresspool
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosAddressPoolProps), fullyQualifiedName: "@alicloud/ros-cdk-dns.RosAddressPoolProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dns.IRosAddressPoolProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: addr: The list of addresses in the address pool.
            /// </remarks>
            [JsiiProperty(name: "addr", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dns.RosAddressPool.AddrProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object Addr
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceId: The ID of the GTM instance.
            /// </remarks>
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: lbaStrategy: The load balancing policy. Valid values:
            /// - ALL_RR: returns all addresses.
            /// - RATIO: returns addresses by weight.
            /// </remarks>
            [JsiiProperty(name: "lbaStrategy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object LbaStrategy
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: name: The name of the address pool.
            /// </remarks>
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Name
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: type: The type of the address pool. Valid values:
            /// - IPV4: IPv4 address
            /// - IPV6: IPv6 address
            /// - DOMAIN: domain name
            /// </remarks>
            [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Type
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: evaluationCount: The number of times that the system waits for a response from each address before it marks the address as unhealthy.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "evaluationCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EvaluationCount
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: interval: The interval between two consecutive health checks, in seconds.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "interval", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Interval
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: ispCityNode: The list of ISP city nodes.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ispCityNode", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dns.RosAddressPool.IspCityNodeProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? IspCityNode
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: monitorExtendInfo: The extended information. This parameter is a JSON string. The required
            /// parameters vary based on the health check protocol:
            /// - HTTP and HTTPS:
            /// - port: The health check port.
            /// - host: The host settings.
            /// - path: The URL path.
            /// - code: The return code. A response with a status code greater than this value is
            /// considered abnormal. Valid values: 400 and 500.
            /// - failureRate: The failure rate.
            /// - sni: Specifies whether to enable Server Name Indication (SNI). This parameter
            /// is available only for the HTTPS protocol.
            /// - true: Enable SNI.
            /// - Other values: Disable SNI.
            /// - nodeType: The type of the health check node when the address pool type is
            /// DOMAIN. Valid values:
            /// - IPV4
            /// - IPV6
            /// - PING:
            /// - failureRate: The failure rate.
            /// - packetNum: The number of ping packets.
            /// - packetLossRate: The packet loss rate.
            /// - nodeType: The type of the health check node when the address pool type is
            /// DOMAIN. Valid values:
            /// - IPV4
            /// - IPV6
            /// - TCP:
            /// - port: The health check port.
            /// - failureRate: The failure rate.
            /// - nodeType: The type of the health check node when the address pool type is
            /// DOMAIN. Valid values:
            /// - IPV4
            /// - IPV6
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "monitorExtendInfo", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? MonitorExtendInfo
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: monitorStatus: The status of the health check feature. Default value: CLOSE. If you set this
            /// parameter to OPEN, the health check configuration is verified. Otherwise, the
            /// configuration is ignored.
            /// - OPEN: enabled
            /// - CLOSE: disabled
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "monitorStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MonitorStatus
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: protocolType: The protocol type.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "protocolType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ProtocolType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: timeout: The timeout period of a health check, in seconds.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "timeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Timeout
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
