using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Hbr
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::HBR::DbAgent`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-hbr.RosDbAgentProps")]
    public class RosDbAgentProps : AlibabaCloud.SDK.ROS.CDK.Hbr.IRosDbAgentProps
    {
        /// <remarks>
        /// <strong>Property</strong>: instanceInfo: Instance infos
        /// </remarks>
        [JsiiProperty(name: "instanceInfo", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-hbr.RosDbAgent.InstanceInfoProperty\"}]}},\"kind\":\"array\"}}]}}")]
        public object InstanceInfo
        {
            get;
            set;
        }
    }
}
