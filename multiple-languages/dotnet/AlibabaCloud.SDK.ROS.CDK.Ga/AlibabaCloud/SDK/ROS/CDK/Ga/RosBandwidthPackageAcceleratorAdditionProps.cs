using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ga
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::GA::BandwidthPackageAcceleratorAddition`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ga.RosBandwidthPackageAcceleratorAdditionProps")]
    public class RosBandwidthPackageAcceleratorAdditionProps : AlibabaCloud.SDK.ROS.CDK.Ga.IRosBandwidthPackageAcceleratorAdditionProps
    {
        /// <remarks>
        /// <strong>Property</strong>: acceleratorId: The ID of the Global Accelerator instance with which you want to associate the bandwidth
        /// plan.
        /// </remarks>
        [JsiiProperty(name: "acceleratorId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object AcceleratorId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: bandwidthPackageId: The ID of the bandwidth package to associate.
        /// </remarks>
        [JsiiProperty(name: "bandwidthPackageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object BandwidthPackageId
        {
            get;
            set;
        }
    }
}
