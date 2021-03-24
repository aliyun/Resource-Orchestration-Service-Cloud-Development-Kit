using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::CEN::CenBandwidthLimit`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cen.RosCenBandwidthLimitProps")]
    public class RosCenBandwidthLimitProps : AlibabaCloud.SDK.ROS.CDK.Cen.IRosCenBandwidthLimitProps
    {
        /// <remarks>
        /// <strong>Property</strong>: bandwidthLimit: The bandwidth configured for the interconnected regions communication. Minimal value: 1
        /// </remarks>
        [JsiiProperty(name: "bandwidthLimit", typeJson: "{\"primitive\":\"number\"}", isOverride: true)]
        public double BandwidthLimit
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: cenId: The ID of the CEN instance.
        /// </remarks>
        [JsiiProperty(name: "cenId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string CenId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: localRegionId: The ID of the local region.
        /// </remarks>
        [JsiiProperty(name: "localRegionId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string LocalRegionId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: oppositeRegionId: The ID of the other interconnected region.
        /// </remarks>
        [JsiiProperty(name: "oppositeRegionId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string OppositeRegionId
        {
            get;
            set;
        }
    }
}
