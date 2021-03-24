using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    /// <summary>Properties for defining a `ALIYUN::ECS::CopyImage`.</summary>
    [JsiiInterface(nativeType: typeof(ICopyImageProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.CopyImageProps")]
    public interface ICopyImageProps
    {
        /// <summary>Property destinationRegionId: ID of the region to where the destination custom image belongs.</summary>
        [JsiiProperty(name: "destinationRegionId", typeJson: "{\"primitive\":\"string\"}")]
        string DestinationRegionId
        {
            get;
        }

        /// <summary>Property imageId: ID of the source custom image.</summary>
        [JsiiProperty(name: "imageId", typeJson: "{\"primitive\":\"string\"}")]
        string ImageId
        {
            get;
        }

        /// <summary>Property destinationDescription: The description of the destination custom image.It cannot begin with http:// or https://.  Default value: null.</summary>
        [JsiiProperty(name: "destinationDescription", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? DestinationDescription
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property destinationImageName: Name of the destination custom image.The name is a string of 2 to 128 characters. It must begin with an English or a Chinese character. It can contain A-Z, a-z, Chinese characters, numbers, periods (.), colons (:), underscores (_), and hyphens (-).  Default value: null.</summary>
        [JsiiProperty(name: "destinationImageName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? DestinationImageName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property encrypted: Whether to encrypt the image.</summary>
        [JsiiProperty(name: "encrypted", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Encrypted
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property kmsKeyId: The ID of the key used to encrypt the image.</summary>
        [JsiiProperty(name: "kmsKeyId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? KmsKeyId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tag:.</summary>
        [JsiiProperty(name: "tag", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-core.RosTag\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Tag
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::ECS::CopyImage`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ICopyImageProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.CopyImageProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.ICopyImageProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property destinationRegionId: ID of the region to where the destination custom image belongs.</summary>
            [JsiiProperty(name: "destinationRegionId", typeJson: "{\"primitive\":\"string\"}")]
            public string DestinationRegionId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property imageId: ID of the source custom image.</summary>
            [JsiiProperty(name: "imageId", typeJson: "{\"primitive\":\"string\"}")]
            public string ImageId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property destinationDescription: The description of the destination custom image.It cannot begin with http:// or https://.  Default value: null.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "destinationDescription", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? DestinationDescription
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property destinationImageName: Name of the destination custom image.The name is a string of 2 to 128 characters. It must begin with an English or a Chinese character. It can contain A-Z, a-z, Chinese characters, numbers, periods (.), colons (:), underscores (_), and hyphens (-).  Default value: null.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "destinationImageName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? DestinationImageName
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property encrypted: Whether to encrypt the image.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "encrypted", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Encrypted
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property kmsKeyId: The ID of the key used to encrypt the image.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "kmsKeyId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? KmsKeyId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property tag:.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "tag", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-core.RosTag\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Tag
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
