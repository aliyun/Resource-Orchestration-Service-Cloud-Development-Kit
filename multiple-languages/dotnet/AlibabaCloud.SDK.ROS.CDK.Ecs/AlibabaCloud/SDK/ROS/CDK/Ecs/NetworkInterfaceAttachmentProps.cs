using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ECS::NetworkInterfaceAttachment`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ecs.NetworkInterfaceAttachmentProps")]
    public class NetworkInterfaceAttachmentProps : AlibabaCloud.SDK.ROS.CDK.Ecs.INetworkInterfaceAttachmentProps
    {
        /// <summary>Property instanceId: ECS instance id.</summary>
        [JsiiProperty(name: "instanceId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string InstanceId
        {
            get;
            set;
        }

        /// <summary>Property networkInterfaceId: Network interface id.</summary>
        [JsiiProperty(name: "networkInterfaceId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string NetworkInterfaceId
        {
            get;
            set;
        }

        /// <summary>Property trunkNetworkInstanceId: undefined.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "trunkNetworkInstanceId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? TrunkNetworkInstanceId
        {
            get;
            set;
        }
    }
}
