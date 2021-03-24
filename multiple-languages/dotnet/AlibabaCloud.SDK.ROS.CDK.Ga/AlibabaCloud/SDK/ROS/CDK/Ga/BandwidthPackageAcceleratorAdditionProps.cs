using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ga
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::GA::BandwidthPackageAcceleratorAddition`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ga.BandwidthPackageAcceleratorAdditionProps")]
    public class BandwidthPackageAcceleratorAdditionProps : AlibabaCloud.SDK.ROS.CDK.Ga.IBandwidthPackageAcceleratorAdditionProps
    {
        /// <summary>Property acceleratorId: The ID of the Global Accelerator instance with which you want to associate the bandwidth plan.</summary>
        [JsiiProperty(name: "acceleratorId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string AcceleratorId
        {
            get;
            set;
        }

        /// <summary>Property bandwidthPackageId: The ID of the bandwidth package to associate.</summary>
        [JsiiProperty(name: "bandwidthPackageId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string BandwidthPackageId
        {
            get;
            set;
        }
    }
}
