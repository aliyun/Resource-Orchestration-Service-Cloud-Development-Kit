using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ots
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::OTS::VpcBinder`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ots.VpcBinderProps")]
    public class VpcBinderProps : AlibabaCloud.SDK.ROS.CDK.Ots.IVpcBinderProps
    {
        /// <summary>Property instanceName: Instance name.</summary>
        [JsiiProperty(name: "instanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object InstanceName
        {
            get;
            set;
        }

        /// <summary>Property vpcs: Vpc binding configuration.</summary>
        [JsiiProperty(name: "vpcs", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ots.RosVpcBinder.VpcsProperty\"}]}},\"kind\":\"array\"}}]}}")]
        public object Vpcs
        {
            get;
            set;
        }
    }
}
