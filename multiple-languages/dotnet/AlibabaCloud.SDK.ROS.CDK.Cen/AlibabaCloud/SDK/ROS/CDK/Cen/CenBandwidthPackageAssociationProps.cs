using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::CEN::CenBandwidthPackageAssociation`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cen.CenBandwidthPackageAssociationProps")]
    public class CenBandwidthPackageAssociationProps : AlibabaCloud.SDK.ROS.CDK.Cen.ICenBandwidthPackageAssociationProps
    {
        /// <summary>Property cenBandwidthPackageId: The ID of the bandwidth package.</summary>
        [JsiiProperty(name: "cenBandwidthPackageId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string CenBandwidthPackageId
        {
            get;
            set;
        }

        /// <summary>Property cenId: The ID of the CEN instance.</summary>
        [JsiiProperty(name: "cenId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string CenId
        {
            get;
            set;
        }
    }
}
