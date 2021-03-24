using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ECS::DiskAttachment`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ecs.RosDiskAttachmentProps")]
    public class RosDiskAttachmentProps : AlibabaCloud.SDK.ROS.CDK.Ecs.IRosDiskAttachmentProps
    {
        /// <remarks>
        /// <strong>Property</strong>: diskId: The disk id to attached.
        /// </remarks>
        [JsiiProperty(name: "diskId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string DiskId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceId: The instanceId to attach the disk.
        /// </remarks>
        [JsiiProperty(name: "instanceId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string InstanceId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: deleteAutoSnapshot: Whether the auto snapshot is released with the disk. Default to true.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "deleteAutoSnapshot", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? DeleteAutoSnapshot
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: deleteWithInstance: If property is true, the disk will be deleted while instance is deleted, if property is false, the disk will be retain after instance is deleted.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "deleteWithInstance", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? DeleteWithInstance
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: device: The device where the volume is exposed on the instance. could be /dev/xvd[b-z]. If not specification, will use default value.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "device", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Device
        {
            get;
            set;
        }
    }
}
