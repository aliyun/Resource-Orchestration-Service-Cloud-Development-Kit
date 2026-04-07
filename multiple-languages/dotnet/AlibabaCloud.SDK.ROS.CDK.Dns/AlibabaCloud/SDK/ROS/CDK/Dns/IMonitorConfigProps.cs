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

        /// <summary>Property interval: The interval of the monitor.</summary>
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

        /// <summary>Property monitorExtendInfo: The extend info of the monitor.</summary>
        [JsiiProperty(name: "monitorExtendInfo", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}")]
        object MonitorExtendInfo
        {
            get;
        }

        /// <summary>Property protocolType: The protocol type of the monitor.</summary>
        [JsiiProperty(name: "protocolType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ProtocolType
        {
            get;
        }

        /// <summary>Property timeout: The timeout of the monitor.</summary>
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

            /// <summary>Property interval: The interval of the monitor.</summary>
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

            /// <summary>Property monitorExtendInfo: The extend info of the monitor.</summary>
            [JsiiProperty(name: "monitorExtendInfo", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}")]
            public object MonitorExtendInfo
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property protocolType: The protocol type of the monitor.</summary>
            [JsiiProperty(name: "protocolType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ProtocolType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property timeout: The timeout of the monitor.</summary>
            [JsiiProperty(name: "timeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Timeout
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
