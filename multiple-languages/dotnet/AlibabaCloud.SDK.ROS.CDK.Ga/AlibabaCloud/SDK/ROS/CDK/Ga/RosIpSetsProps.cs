using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ga
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::GA::IpSets`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ga.RosIpSetsProps")]
    public class RosIpSetsProps : AlibabaCloud.SDK.ROS.CDK.Ga.IRosIpSetsProps
    {
        /// <remarks>
        /// <strong>Property</strong>: accelerateRegion:
        /// </remarks>
        [JsiiProperty(name: "accelerateRegion", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-ga.RosIpSets.AccelerateRegionProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOverride: true)]
        public object AccelerateRegion
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: acceleratorId: The ID of the GA instance.
        /// </remarks>
        [JsiiProperty(name: "acceleratorId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string AcceleratorId
        {
            get;
            set;
        }
    }
}
