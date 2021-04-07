using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ECS::DiskAttachment`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ecs.DiskAttachmentProps")]
    public class DiskAttachmentProps : AlibabaCloud.SDK.ROS.CDK.Ecs.IDiskAttachmentProps
    {
        /// <summary>Property diskId: The disk id to attached.</summary>
        [JsiiProperty(name: "diskId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object DiskId
        {
            get;
            set;
        }

        /// <summary>Property instanceId: The instanceId to attach the disk.</summary>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object InstanceId
        {
            get;
            set;
        }

        /// <summary>Property deleteAutoSnapshot: Whether the auto snapshot is released with the disk.</summary>
        /// <remarks>
        /// Default to true.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "deleteAutoSnapshot", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? DeleteAutoSnapshot
        {
            get;
            set;
        }

        /// <summary>Property deleteWithInstance: If property is true, the disk will be deleted while instance is deleted, if property is false, the disk will be retain after instance is deleted.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "deleteWithInstance", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? DeleteWithInstance
        {
            get;
            set;
        }

        /// <summary>Property device: The device where the volume is exposed on the instance.</summary>
        /// <remarks>
        /// could be /dev/xvd[b-z]. If not specification, will use default value.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "device", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Device
        {
            get;
            set;
        }
    }
}
