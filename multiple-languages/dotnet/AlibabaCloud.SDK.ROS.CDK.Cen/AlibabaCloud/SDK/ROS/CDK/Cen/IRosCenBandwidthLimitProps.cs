using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen
{
    /// <summary>Properties for defining a `RosCenBandwidthLimit`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-cenbandwidthlimit
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosCenBandwidthLimitProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.RosCenBandwidthLimitProps")]
    public interface IRosCenBandwidthLimitProps
    {
        /// <remarks>
        /// <strong>Property</strong>: bandwidthLimit: The bandwidth configured for the interconnected regions communication. Minimal value: 1
        /// </remarks>
        [JsiiProperty(name: "bandwidthLimit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object BandwidthLimit
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: cenId: The ID of the CEN instance.
        /// </remarks>
        [JsiiProperty(name: "cenId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CenId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: localRegionId: The ID of the local region.
        /// </remarks>
        [JsiiProperty(name: "localRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object LocalRegionId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: oppositeRegionId: The ID of the other interconnected region.
        /// </remarks>
        [JsiiProperty(name: "oppositeRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object OppositeRegionId
        {
            get;
        }

        /// <summary>Properties for defining a `RosCenBandwidthLimit`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-cenbandwidthlimit
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosCenBandwidthLimitProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.RosCenBandwidthLimitProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cen.IRosCenBandwidthLimitProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: bandwidthLimit: The bandwidth configured for the interconnected regions communication. Minimal value: 1
            /// </remarks>
            [JsiiProperty(name: "bandwidthLimit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object BandwidthLimit
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: cenId: The ID of the CEN instance.
            /// </remarks>
            [JsiiProperty(name: "cenId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CenId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: localRegionId: The ID of the local region.
            /// </remarks>
            [JsiiProperty(name: "localRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object LocalRegionId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: oppositeRegionId: The ID of the other interconnected region.
            /// </remarks>
            [JsiiProperty(name: "oppositeRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object OppositeRegionId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
