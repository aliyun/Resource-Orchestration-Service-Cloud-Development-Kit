using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    /// <summary>Properties for defining a `ALIYUN::ECS::CustomImage`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ecs.CustomImageProps")]
    public class CustomImageProps : AlibabaCloud.SDK.ROS.CDK.Ecs.ICustomImageProps
    {
        /// <summary>Property architecture: After specifying the data disk snapshot as the mirrored system disk, you need to determine the system architecture of the system disk through Architecture.</summary>
        /// <remarks>
        /// Ranges:
        /// I386
        /// X86_64 (default)
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "architecture", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Architecture
        {
            get;
            set;
        }

        /// <summary>Property description: The description of the image.</summary>
        /// <remarks>
        /// It can be [0, 256] letters in length.
        /// It cannot begin with http:// or https://.
        /// Default value: null.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Description
        {
            get;
            set;
        }

        /// <summary>Property diskDeviceMapping:.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "diskDeviceMapping", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ecs.RosCustomImage.DiskDeviceMappingProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
        public object? DiskDeviceMapping
        {
            get;
            set;
        }

        /// <summary>Property imageName: Image name.</summary>
        /// <remarks>
        /// Can contain [2, 128] characters in length. Must begin with an English letter or Chinese character. Can contain digits, colons (:), underscores (_), or hyphens (-).
        /// Cannot begin with http:// or https://.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "imageName", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? ImageName
        {
            get;
            set;
        }

        /// <summary>Property instanceId: Instance ID.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "instanceId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? InstanceId
        {
            get;
            set;
        }

        /// <summary>Property platform: After specifying the data disk snapshot as the mirrored system disk, you need to determine the operating system release of the system disk through Platform.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "platform", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Platform
        {
            get;
            set;
        }

        /// <summary>Property resourceGroupId: The enterprise resource group ID where the custom image is located.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? ResourceGroupId
        {
            get;
            set;
        }

        /// <summary>Property snapshotId: The snapshot ID.</summary>
        /// <remarks>
        /// A custom image is created from the specified snapshot.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "snapshotId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? SnapshotId
        {
            get;
            set;
        }

        /// <summary>Property tag:.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "tag", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-core.RosTag\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
        public object? Tag
        {
            get;
            set;
        }
    }
}
