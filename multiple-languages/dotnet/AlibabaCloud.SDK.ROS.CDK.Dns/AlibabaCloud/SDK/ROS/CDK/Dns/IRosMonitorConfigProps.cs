using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dns
{
    /// <summary>Properties for defining a `RosMonitorConfig`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-monitorconfig
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosMonitorConfigProps), fullyQualifiedName: "@alicloud/ros-cdk-dns.RosMonitorConfigProps")]
    public interface IRosMonitorConfigProps
    {
        /// <remarks>
        /// <strong>Property</strong>: addrPoolId: The ID of the address pool.
        /// </remarks>
        [JsiiProperty(name: "addrPoolId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AddrPoolId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: evaluationCount: The evaluation count of the monitor.
        /// </remarks>
        [JsiiProperty(name: "evaluationCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object EvaluationCount
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: interval: The interval of the monitor.
        /// </remarks>
        [JsiiProperty(name: "interval", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Interval
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: ispCityNode: The ISP city node list.
        /// </remarks>
        [JsiiProperty(name: "ispCityNode", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dns.RosMonitorConfig.IspCityNodeProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object IspCityNode
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: monitorExtendInfo: The extend info of the monitor.
        /// </remarks>
        [JsiiProperty(name: "monitorExtendInfo", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}")]
        object MonitorExtendInfo
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: protocolType: The protocol type of the monitor.
        /// </remarks>
        [JsiiProperty(name: "protocolType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ProtocolType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: timeout: The timeout of the monitor.
        /// </remarks>
        [JsiiProperty(name: "timeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Timeout
        {
            get;
        }

        /// <summary>Properties for defining a `RosMonitorConfig`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-monitorconfig
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosMonitorConfigProps), fullyQualifiedName: "@alicloud/ros-cdk-dns.RosMonitorConfigProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dns.IRosMonitorConfigProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: addrPoolId: The ID of the address pool.
            /// </remarks>
            [JsiiProperty(name: "addrPoolId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AddrPoolId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: evaluationCount: The evaluation count of the monitor.
            /// </remarks>
            [JsiiProperty(name: "evaluationCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object EvaluationCount
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: interval: The interval of the monitor.
            /// </remarks>
            [JsiiProperty(name: "interval", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Interval
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: ispCityNode: The ISP city node list.
            /// </remarks>
            [JsiiProperty(name: "ispCityNode", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dns.RosMonitorConfig.IspCityNodeProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object IspCityNode
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: monitorExtendInfo: The extend info of the monitor.
            /// </remarks>
            [JsiiProperty(name: "monitorExtendInfo", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}")]
            public object MonitorExtendInfo
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: protocolType: The protocol type of the monitor.
            /// </remarks>
            [JsiiProperty(name: "protocolType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ProtocolType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: timeout: The timeout of the monitor.
            /// </remarks>
            [JsiiProperty(name: "timeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Timeout
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
