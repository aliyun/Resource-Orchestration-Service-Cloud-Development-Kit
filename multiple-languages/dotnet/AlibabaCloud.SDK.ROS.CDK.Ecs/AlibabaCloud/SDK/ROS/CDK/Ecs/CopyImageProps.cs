using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ECS::CopyImage`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ecs.CopyImageProps")]
    public class CopyImageProps : AlibabaCloud.SDK.ROS.CDK.Ecs.ICopyImageProps
    {
        /// <summary>Property destinationRegionId: ID of the region to where the destination custom image belongs.</summary>
        [JsiiProperty(name: "destinationRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object DestinationRegionId
        {
            get;
            set;
        }

        /// <summary>Property imageId: ID of the source custom image.</summary>
        [JsiiProperty(name: "imageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object ImageId
        {
            get;
            set;
        }

        /// <summary>Property destinationDescription: The description of the destination custom image.It cannot begin with http:// or https://.  Default value: null.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "destinationDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? DestinationDescription
        {
            get;
            set;
        }

        /// <summary>Property destinationImageName: Name of the destination custom image.The name is a string of 2 to 128 characters. It must begin with an English or a Chinese character. It can contain A-Z, a-z, Chinese characters, numbers, periods (.), colons (:), underscores (_), and hyphens (-).  Default value: null.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "destinationImageName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? DestinationImageName
        {
            get;
            set;
        }

        /// <summary>Property encrypted: Whether to encrypt the image.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "encrypted", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Encrypted
        {
            get;
            set;
        }

        /// <summary>Property kmsKeyId: The ID of the key used to encrypt the image.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "kmsKeyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? KmsKeyId
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
