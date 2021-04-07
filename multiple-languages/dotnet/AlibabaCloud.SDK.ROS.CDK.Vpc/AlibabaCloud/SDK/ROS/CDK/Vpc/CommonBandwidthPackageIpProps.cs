using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::VPC::CommonBandwidthPackageIp`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-vpc.CommonBandwidthPackageIpProps")]
    public class CommonBandwidthPackageIpProps : AlibabaCloud.SDK.ROS.CDK.Vpc.ICommonBandwidthPackageIpProps
    {
        /// <summary>Property bandwidthPackageId: The ID of the Internet Shared Bandwidth instance.</summary>
        [JsiiProperty(name: "bandwidthPackageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object BandwidthPackageId
        {
            get;
            set;
        }

        /// <summary>Property eips: List of eip associated with the Internet Shared Bandwidth instance.</summary>
        [JsiiProperty(name: "eips", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-vpc.RosCommonBandwidthPackageIp.EipsProperty\"}]}},\"kind\":\"array\"}}]}}", isOverride: true)]
        public object Eips
        {
            get;
            set;
        }
    }
}
