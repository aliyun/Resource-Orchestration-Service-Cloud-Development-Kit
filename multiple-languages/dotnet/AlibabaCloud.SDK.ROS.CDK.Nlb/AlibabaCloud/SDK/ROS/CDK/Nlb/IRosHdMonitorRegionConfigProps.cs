using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Nlb
{
    /// <summary>Properties for defining a `RosHdMonitorRegionConfig`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlb-hdmonitorregionconfig
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosHdMonitorRegionConfigProps), fullyQualifiedName: "@alicloud/ros-cdk-nlb.RosHdMonitorRegionConfigProps")]
    public interface IRosHdMonitorRegionConfigProps
    {
        /// <remarks>
        /// <strong>Property</strong>: logProject: The name of the LogProject.
        /// </remarks>
        [JsiiProperty(name: "logProject", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object LogProject
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: metricStore: The name of the MetricStore.
        /// </remarks>
        [JsiiProperty(name: "metricStore", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object MetricStore
        {
            get;
        }

        /// <summary>Properties for defining a `RosHdMonitorRegionConfig`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlb-hdmonitorregionconfig
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosHdMonitorRegionConfigProps), fullyQualifiedName: "@alicloud/ros-cdk-nlb.RosHdMonitorRegionConfigProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Nlb.IRosHdMonitorRegionConfigProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: logProject: The name of the LogProject.
            /// </remarks>
            [JsiiProperty(name: "logProject", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object LogProject
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: metricStore: The name of the MetricStore.
            /// </remarks>
            [JsiiProperty(name: "metricStore", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object MetricStore
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
