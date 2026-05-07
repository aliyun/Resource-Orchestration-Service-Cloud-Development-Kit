using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Nlb
{
    /// <summary>Properties for defining a `HdMonitorRegionConfig`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlb-hdmonitorregionconfig
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IHdMonitorRegionConfigProps), fullyQualifiedName: "@alicloud/ros-cdk-nlb.HdMonitorRegionConfigProps")]
    public interface IHdMonitorRegionConfigProps
    {
        /// <summary>Property logProject: The name of the LogProject.</summary>
        [JsiiProperty(name: "logProject", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object LogProject
        {
            get;
        }

        /// <summary>Property metricStore: The name of the MetricStore.</summary>
        [JsiiProperty(name: "metricStore", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object MetricStore
        {
            get;
        }

        /// <summary>Properties for defining a `HdMonitorRegionConfig`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlb-hdmonitorregionconfig
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IHdMonitorRegionConfigProps), fullyQualifiedName: "@alicloud/ros-cdk-nlb.HdMonitorRegionConfigProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Nlb.IHdMonitorRegionConfigProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property logProject: The name of the LogProject.</summary>
            [JsiiProperty(name: "logProject", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object LogProject
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property metricStore: The name of the MetricStore.</summary>
            [JsiiProperty(name: "metricStore", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object MetricStore
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
