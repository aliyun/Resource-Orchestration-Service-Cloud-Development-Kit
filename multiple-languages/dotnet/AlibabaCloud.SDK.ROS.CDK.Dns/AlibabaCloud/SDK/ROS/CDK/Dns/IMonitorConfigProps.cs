using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dns
{
    /// <summary>Properties for defining a `MonitorConfig`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-monitorconfig
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IMonitorConfigProps), fullyQualifiedName: "@alicloud/ros-cdk-dns.MonitorConfigProps")]
    public interface IMonitorConfigProps
    {
        /// <summary>Property addrPoolId: The ID of the address pool.</summary>
        [JsiiProperty(name: "addrPoolId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AddrPoolId
        {
            get;
        }

        /// <summary>Property evaluationCount: The evaluation count of the monitor.</summary>
        [JsiiProperty(name: "evaluationCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object EvaluationCount
        {
            get;
        }

        /// <summary>Property interval: The health check interval.</summary>
        /// <remarks>
        /// Unit: seconds.
        /// </remarks>
        [JsiiProperty(name: "interval", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Interval
        {
            get;
        }

        /// <summary>Property ispCityNode: The ISP city node list.</summary>
        [JsiiProperty(name: "ispCityNode", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dns.RosMonitorConfig.IspCityNodeProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object IspCityNode
        {
            get;
        }

        /// <summary>Property monitorExtendInfo: The extended information.</summary>
        /// <remarks>
        /// The parameters vary based on the protocol type.
        ///
        /// <list type="bullet">
        /// <description>HTTP or HTTPS</description>
        /// <description>port: The health check port.</description>
        /// <description>host: The Host header.</description>
        /// <description>path: The URL path.</description>
        /// <description>code: The health check is considered abnormal if the returned HTTP status code
        /// is greater than this value.</description>
        /// <description>failureRate: The failure rate.</description>
        /// <description>sni: Specifies whether to enable Server Name Indication (SNI). This parameter
        /// is used only when the health check protocol is HTTPS. Valid values:</description>
        /// <description>true</description>
        /// <description>false</description>
        /// <description>nodeType: The type of the monitoring node. This parameter is used when the
        /// address pool type is DOMAIN. Valid values:</description>
        /// <description>IPV4</description>
        /// <description>IPV6</description>
        /// <description>PING</description>
        /// <description>failureRate: The failure rate.</description>
        /// <description>packetNum: The number of ping packets.</description>
        /// <description>packetLossRate: The packet loss rate.</description>
        /// <description>nodeType: The type of the monitoring node. This parameter is used when the
        /// address pool type is DOMAIN. Valid values:</description>
        /// <description>IPV4</description>
        /// <description>IPV6</description>
        /// <description>TCP</description>
        /// <description>port: The health check port.</description>
        /// <description>failureRate: The failure rate.</description>
        /// <description>nodeType: The type of the monitoring node. This parameter is used when the
        /// address pool type is DOMAIN. Valid values:</description>
        /// <description>IPV4</description>
        /// <description>IPV6</description>
        /// </list>
        ///
        ///     This parameter must be a JSON string.
        /// </remarks>
        [JsiiProperty(name: "monitorExtendInfo", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}")]
        object MonitorExtendInfo
        {
            get;
        }

        /// <summary>Property protocolType: The health check protocol.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>HTTP</description>
        /// <description>HTTPS</description>
        /// <description>PING</description>
        /// <description>TCP</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "protocolType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ProtocolType
        {
            get;
        }

        /// <summary>Property timeout: The timeout period.</summary>
        /// <remarks>
        /// Unit: milliseconds.
        /// </remarks>
        [JsiiProperty(name: "timeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Timeout
        {
            get;
        }

        /// <summary>Properties for defining a `MonitorConfig`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-monitorconfig
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IMonitorConfigProps), fullyQualifiedName: "@alicloud/ros-cdk-dns.MonitorConfigProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dns.IMonitorConfigProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property addrPoolId: The ID of the address pool.</summary>
            [JsiiProperty(name: "addrPoolId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AddrPoolId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property evaluationCount: The evaluation count of the monitor.</summary>
            [JsiiProperty(name: "evaluationCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object EvaluationCount
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property interval: The health check interval.</summary>
            /// <remarks>
            /// Unit: seconds.
            /// </remarks>
            [JsiiProperty(name: "interval", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Interval
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property ispCityNode: The ISP city node list.</summary>
            [JsiiProperty(name: "ispCityNode", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dns.RosMonitorConfig.IspCityNodeProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object IspCityNode
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property monitorExtendInfo: The extended information.</summary>
            /// <remarks>
            /// The parameters vary based on the protocol type.
            ///
            /// <list type="bullet">
            /// <description>HTTP or HTTPS</description>
            /// <description>port: The health check port.</description>
            /// <description>host: The Host header.</description>
            /// <description>path: The URL path.</description>
            /// <description>code: The health check is considered abnormal if the returned HTTP status code
            /// is greater than this value.</description>
            /// <description>failureRate: The failure rate.</description>
            /// <description>sni: Specifies whether to enable Server Name Indication (SNI). This parameter
            /// is used only when the health check protocol is HTTPS. Valid values:</description>
            /// <description>true</description>
            /// <description>false</description>
            /// <description>nodeType: The type of the monitoring node. This parameter is used when the
            /// address pool type is DOMAIN. Valid values:</description>
            /// <description>IPV4</description>
            /// <description>IPV6</description>
            /// <description>PING</description>
            /// <description>failureRate: The failure rate.</description>
            /// <description>packetNum: The number of ping packets.</description>
            /// <description>packetLossRate: The packet loss rate.</description>
            /// <description>nodeType: The type of the monitoring node. This parameter is used when the
            /// address pool type is DOMAIN. Valid values:</description>
            /// <description>IPV4</description>
            /// <description>IPV6</description>
            /// <description>TCP</description>
            /// <description>port: The health check port.</description>
            /// <description>failureRate: The failure rate.</description>
            /// <description>nodeType: The type of the monitoring node. This parameter is used when the
            /// address pool type is DOMAIN. Valid values:</description>
            /// <description>IPV4</description>
            /// <description>IPV6</description>
            /// </list>
            ///
            ///     This parameter must be a JSON string.
            /// </remarks>
            [JsiiProperty(name: "monitorExtendInfo", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}")]
            public object MonitorExtendInfo
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property protocolType: The health check protocol.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>HTTP</description>
            /// <description>HTTPS</description>
            /// <description>PING</description>
            /// <description>TCP</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "protocolType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ProtocolType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property timeout: The timeout period.</summary>
            /// <remarks>
            /// Unit: milliseconds.
            /// </remarks>
            [JsiiProperty(name: "timeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Timeout
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
