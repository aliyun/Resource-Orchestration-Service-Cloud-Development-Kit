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
        [JsiiProperty(name: "bandwidthLimit", typeJson: "{\"primitive\":\"number\"}")]
        double BandwidthLimit
        {
            get;
        }

        /// <summary>Property cenId: The ID of the CEN instance.</summary>
        [JsiiProperty(name: "cenId", typeJson: "{\"primitive\":\"string\"}")]
        string CenId
        {
            get;
        }

        /// <summary>Property localRegionId: The ID of the local region.</summary>
        [JsiiProperty(name: "localRegionId", typeJson: "{\"primitive\":\"string\"}")]
        string LocalRegionId
        {
            get;
        }

        /// <summary>Property oppositeRegionId: The ID of the other interconnected region.</summary>
        [JsiiProperty(name: "oppositeRegionId", typeJson: "{\"primitive\":\"string\"}")]
        string OppositeRegionId
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
            [JsiiProperty(name: "bandwidthLimit", typeJson: "{\"primitive\":\"number\"}")]
            public double BandwidthLimit
            {
                get => GetInstanceProperty<double>()!;
            }

            /// <summary>Property cenId: The ID of the CEN instance.</summary>
            [JsiiProperty(name: "cenId", typeJson: "{\"primitive\":\"string\"}")]
            public string CenId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property localRegionId: The ID of the local region.</summary>
            [JsiiProperty(name: "localRegionId", typeJson: "{\"primitive\":\"string\"}")]
            public string LocalRegionId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property oppositeRegionId: The ID of the other interconnected region.</summary>
            [JsiiProperty(name: "oppositeRegionId", typeJson: "{\"primitive\":\"string\"}")]
            public string OppositeRegionId
            {
                get => GetInstanceProperty<string>()!;
            }
        }
    }
}
