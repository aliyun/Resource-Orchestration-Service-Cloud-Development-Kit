using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::CEN::CenBandwidthPackageAssociation`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cen.RosCenBandwidthPackageAssociationProps")]
    public class RosCenBandwidthPackageAssociationProps : AlibabaCloud.SDK.ROS.CDK.Cen.IRosCenBandwidthPackageAssociationProps
    {
        /// <remarks>
        /// <strong>Property</strong>: cenBandwidthPackageId: The ID of the bandwidth package.
        /// </remarks>
        [JsiiProperty(name: "cenBandwidthPackageId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string CenBandwidthPackageId
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
    }
}
