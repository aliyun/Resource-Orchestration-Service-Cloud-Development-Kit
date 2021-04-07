using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ots
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::OTS::VpcBinder`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ots.RosVpcBinderProps")]
    public class RosVpcBinderProps : AlibabaCloud.SDK.ROS.CDK.Ots.IRosVpcBinderProps
    {
        /// <remarks>
        /// <strong>Property</strong>: instanceName: Instance name
        /// </remarks>
        [JsiiProperty(name: "instanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object InstanceName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: vpcs: Vpc binding configuration.
        /// </remarks>
        [JsiiProperty(name: "vpcs", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ots.RosVpcBinder.VpcsProperty\"}]}},\"kind\":\"array\"}}]}}", isOverride: true)]
        public object Vpcs
        {
            get;
            set;
        }
    }
}
