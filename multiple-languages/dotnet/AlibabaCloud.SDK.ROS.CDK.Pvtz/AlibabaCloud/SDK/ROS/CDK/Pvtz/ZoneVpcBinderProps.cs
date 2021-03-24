using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Pvtz
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::PVTZ::ZoneVpcBinder`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-pvtz.ZoneVpcBinderProps")]
    public class ZoneVpcBinderProps : AlibabaCloud.SDK.ROS.CDK.Pvtz.IZoneVpcBinderProps
    {
        /// <summary>Property vpcs:.</summary>
        [JsiiProperty(name: "vpcs", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-pvtz.RosZoneVpcBinder.VpcsProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOverride: true)]
        public object Vpcs
        {
            get;
            set;
        }

        /// <summary>Property zoneId: Zone Id.</summary>
        [JsiiProperty(name: "zoneId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ZoneId
        {
            get;
            set;
        }
    }
}
