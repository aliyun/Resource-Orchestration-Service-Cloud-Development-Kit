using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen
{
    /// <summary>Properties for defining a `ALIYUN::CEN::CenBandwidthLimit`.</summary>
    [JsiiInterface(nativeType: typeof(IRosCenBandwidthLimitProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.RosCenBandwidthLimitProps")]
    public interface IRosCenBandwidthLimitProps
    {
        /// <remarks>
        /// <strong>Property</strong>: bandwidthLimit: The bandwidth configured for the interconnected regions communication. Minimal value: 1
        /// </remarks>
        [JsiiProperty(name: "bandwidthLimit", typeJson: "{\"primitive\":\"number\"}")]
        double BandwidthLimit
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: cenId: The ID of the CEN instance.
        /// </remarks>
        [JsiiProperty(name: "cenId", typeJson: "{\"primitive\":\"string\"}")]
        string CenId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: localRegionId: The ID of the local region.
        /// </remarks>
        [JsiiProperty(name: "localRegionId", typeJson: "{\"primitive\":\"string\"}")]
        string LocalRegionId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: oppositeRegionId: The ID of the other interconnected region.
        /// </remarks>
        [JsiiProperty(name: "oppositeRegionId", typeJson: "{\"primitive\":\"string\"}")]
        string OppositeRegionId
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::CEN::CenBandwidthLimit`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosCenBandwidthLimitProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.RosCenBandwidthLimitProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cen.IRosCenBandwidthLimitProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: bandwidthLimit: The bandwidth configured for the interconnected regions communication. Minimal value: 1
            /// </remarks>
            [JsiiProperty(name: "bandwidthLimit", typeJson: "{\"primitive\":\"number\"}")]
            public double BandwidthLimit
            {
                get => GetInstanceProperty<double>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: cenId: The ID of the CEN instance.
            /// </remarks>
            [JsiiProperty(name: "cenId", typeJson: "{\"primitive\":\"string\"}")]
            public string CenId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: localRegionId: The ID of the local region.
            /// </remarks>
            [JsiiProperty(name: "localRegionId", typeJson: "{\"primitive\":\"string\"}")]
            public string LocalRegionId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: oppositeRegionId: The ID of the other interconnected region.
            /// </remarks>
            [JsiiProperty(name: "oppositeRegionId", typeJson: "{\"primitive\":\"string\"}")]
            public string OppositeRegionId
            {
                get => GetInstanceProperty<string>()!;
            }
        }
    }
}
