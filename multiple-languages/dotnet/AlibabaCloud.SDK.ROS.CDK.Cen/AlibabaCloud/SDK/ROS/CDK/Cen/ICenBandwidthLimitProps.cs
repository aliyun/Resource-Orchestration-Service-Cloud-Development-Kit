using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen
{
    /// <summary>Properties for defining a `ALIYUN::CEN::CenBandwidthLimit`.</summary>
    [JsiiInterface(nativeType: typeof(ICenBandwidthLimitProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.CenBandwidthLimitProps")]
    public interface ICenBandwidthLimitProps
    {
        /// <summary>Property bandwidthLimit: The bandwidth configured for the interconnected regions communication.</summary>
        /// <remarks>
        /// Minimal value: 1
        /// </remarks>
        [JsiiProperty(name: "bandwidthLimit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object BandwidthLimit
        {
            get;
        }

        /// <summary>Property cenId: The ID of the CEN instance.</summary>
        [JsiiProperty(name: "cenId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CenId
        {
            get;
        }

        /// <summary>Property localRegionId: The ID of the local region.</summary>
        [JsiiProperty(name: "localRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object LocalRegionId
        {
            get;
        }

        /// <summary>Property oppositeRegionId: The ID of the other interconnected region.</summary>
        [JsiiProperty(name: "oppositeRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object OppositeRegionId
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::CEN::CenBandwidthLimit`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ICenBandwidthLimitProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.CenBandwidthLimitProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cen.ICenBandwidthLimitProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property bandwidthLimit: The bandwidth configured for the interconnected regions communication.</summary>
            /// <remarks>
            /// Minimal value: 1
            /// </remarks>
            [JsiiProperty(name: "bandwidthLimit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object BandwidthLimit
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property cenId: The ID of the CEN instance.</summary>
            [JsiiProperty(name: "cenId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CenId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property localRegionId: The ID of the local region.</summary>
            [JsiiProperty(name: "localRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object LocalRegionId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property oppositeRegionId: The ID of the other interconnected region.</summary>
            [JsiiProperty(name: "oppositeRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object OppositeRegionId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
