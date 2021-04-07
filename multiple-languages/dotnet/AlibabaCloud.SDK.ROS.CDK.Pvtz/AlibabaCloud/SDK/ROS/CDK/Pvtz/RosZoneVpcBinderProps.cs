using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Pvtz
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::PVTZ::ZoneVpcBinder`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-pvtz.RosZoneVpcBinderProps")]
    public class RosZoneVpcBinderProps : AlibabaCloud.SDK.ROS.CDK.Pvtz.IRosZoneVpcBinderProps
    {
        /// <remarks>
        /// <strong>Property</strong>: vpcs:
        /// </remarks>
        [JsiiProperty(name: "vpcs", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-pvtz.RosZoneVpcBinder.VpcsProperty\"}]}},\"kind\":\"array\"}}]}}", isOverride: true)]
        public object Vpcs
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: zoneId: Zone Id
        /// </remarks>
        [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object ZoneId
        {
            get;
            set;
        }
    }
}
