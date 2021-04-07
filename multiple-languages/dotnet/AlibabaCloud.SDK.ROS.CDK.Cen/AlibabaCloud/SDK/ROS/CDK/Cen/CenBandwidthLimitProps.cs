using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::CEN::CenBandwidthLimit`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cen.CenBandwidthLimitProps")]
    public class CenBandwidthLimitProps : AlibabaCloud.SDK.ROS.CDK.Cen.ICenBandwidthLimitProps
    {
        /// <summary>Property bandwidthLimit: The bandwidth configured for the interconnected regions communication.</summary>
        /// <remarks>
        /// Minimal value: 1
        /// </remarks>
        [JsiiProperty(name: "bandwidthLimit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object BandwidthLimit
        {
            get;
            set;
        }

        /// <summary>Property cenId: The ID of the CEN instance.</summary>
        [JsiiProperty(name: "cenId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object CenId
        {
            get;
            set;
        }

        /// <summary>Property localRegionId: The ID of the local region.</summary>
        [JsiiProperty(name: "localRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object LocalRegionId
        {
            get;
            set;
        }

        /// <summary>Property oppositeRegionId: The ID of the other interconnected region.</summary>
        [JsiiProperty(name: "oppositeRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object OppositeRegionId
        {
            get;
            set;
        }
    }
}
