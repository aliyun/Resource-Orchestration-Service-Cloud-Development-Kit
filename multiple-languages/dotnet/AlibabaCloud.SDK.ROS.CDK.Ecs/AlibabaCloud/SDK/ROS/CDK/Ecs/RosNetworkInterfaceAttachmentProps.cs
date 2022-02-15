using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ECS::NetworkInterfaceAttachment`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ecs.RosNetworkInterfaceAttachmentProps")]
    public class RosNetworkInterfaceAttachmentProps : AlibabaCloud.SDK.ROS.CDK.Ecs.IRosNetworkInterfaceAttachmentProps
    {
        /// <remarks>
        /// <strong>Property</strong>: instanceId: ECS instance id
        /// </remarks>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object InstanceId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: networkInterfaceId: Network interface id
        /// </remarks>
        [JsiiProperty(name: "networkInterfaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object NetworkInterfaceId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: trunkNetworkInstanceId: undefined
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "trunkNetworkInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? TrunkNetworkInstanceId
        {
            get;
            set;
        }
    }
}
