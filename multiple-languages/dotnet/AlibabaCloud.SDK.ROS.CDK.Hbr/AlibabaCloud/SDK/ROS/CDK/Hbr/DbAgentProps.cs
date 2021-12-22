using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Hbr
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::HBR::DbAgent`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-hbr.DbAgentProps")]
    public class DbAgentProps : AlibabaCloud.SDK.ROS.CDK.Hbr.IDbAgentProps
    {
        /// <summary>Property instanceInfo: Instance infos.</summary>
        [JsiiProperty(name: "instanceInfo", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-hbr.RosDbAgent.InstanceInfoProperty\"}]}},\"kind\":\"array\"}}]}}", isOverride: true)]
        public object InstanceInfo
        {
            get;
            set;
        }
    }
}
