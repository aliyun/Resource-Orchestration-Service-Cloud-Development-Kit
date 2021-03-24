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
        [JsiiProperty(name: "instanceId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string InstanceId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: networkInterfaceId: Network interface id
        /// </remarks>
        [JsiiProperty(name: "networkInterfaceId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string NetworkInterfaceId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: trunkNetworkInstanceId: undefined
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "trunkNetworkInstanceId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? TrunkNetworkInstanceId
        {
            get;
            set;
        }
    }
}
