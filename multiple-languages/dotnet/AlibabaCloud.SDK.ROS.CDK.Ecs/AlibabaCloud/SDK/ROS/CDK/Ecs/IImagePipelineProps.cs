using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    /// <summary>Properties for defining a `ImagePipeline`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-imagepipeline
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IImagePipelineProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.ImagePipelineProps")]
    public interface IImagePipelineProps
    {
        /// <summary>Property baseImage: The source image.</summary>
        /// <remarks>
        /// If you set BaseImageType to IMAGE, set the BaseImage parameter to the ID of a custom image.
        /// If you set BaseImageType to IMAGE_FAMILY, set the BaseImage parameter to the name of an image family.
        /// </remarks>
        [JsiiProperty(name: "baseImage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object BaseImage
        {
            get;
        }

        /// <summary>Property baseImageType: The type of the source image.</summary>
        /// <remarks>
        /// Valid values:
        /// IMAGE: image
        /// IMAGE_FAMILY: image family
        /// </remarks>
        [JsiiProperty(name: "baseImageType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object BaseImageType
        {
            get;
        }

        /// <summary>Property addAccount: The IDs of Alibaba Cloud accounts to which to share the image that will be created based on the image template.</summary>
        /// <remarks>
        /// You can specify up to 20 account IDs.
        /// </remarks>
        [JsiiProperty(name: "addAccount", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AddAccount
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property buildContent: The content of the image template.</summary>
        /// <remarks>
        /// The content cannot exceed 16 KB in size and can contain up to 127 commands. For more information about the commands that are supported, see the "Usage notes" section of this topic.
        /// </remarks>
        [JsiiProperty(name: "buildContent", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? BuildContent
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property deleteInstanceOnFailure: Specifies whether to release the intermediate instance when the image cannot be created.</summary>
        /// <remarks>
        /// Valid values:
        /// true
        /// false
        /// Default value: true.
        /// Note If the intermediate instance cannot be started, the instance is released by default.
        /// </remarks>
        [JsiiProperty(name: "deleteInstanceOnFailure", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DeleteInstanceOnFailure
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property description: The description of the image template.</summary>
        /// <remarks>
        /// The description must be 2 to 256 characters in length. It cannot start with http:// or https://.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property executePipeline: Whether execute pipeline.</summary>
        /// <remarks>
        /// Default value is true
        /// </remarks>
        [JsiiProperty(name: "executePipeline", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ExecutePipeline
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property imageName: The prefix of the image name.</summary>
        /// <remarks>
        /// The prefix must be 2 to 64 characters in length. It must start with a letter and cannot start with http:// or https://. It can contain letters, digits, colons (:), underscores (<em>), periods (.), and hyphens (-).
        /// The system generates the final complete image name that consists of the specified prefix and the ID of the build task (ExecutionId) in the format of {ImageName}</em>{ExecutionId}.
        /// </remarks>
        [JsiiProperty(name: "imageName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ImageName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property instanceType: The instance type.</summary>
        /// <remarks>
        /// You can call the  DescribeInstanceTypes  to query instance types.
        /// If you do not configure this parameter, an instance type that provides the fewest vCPUs and memory resources is automatically selected. This configuration is subject to resource availability of instance types. For example, the ecs.g6.large instance type is automatically selected. If available ecs.g6.large resources are insufficient, the ecs.g6.xlarge instance type is selected.
        /// </remarks>
        [JsiiProperty(name: "instanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstanceType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property internetMaxBandwidthOut: The size of the outbound public bandwidth for the intermediate instance.</summary>
        /// <remarks>
        /// Unit: Mbit/s. Valid values: 0 to 100.
        /// Default value: 0.
        /// </remarks>
        [JsiiProperty(name: "internetMaxBandwidthOut", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InternetMaxBandwidthOut
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property name: The name of the image template.</summary>
        /// <remarks>
        /// The name must be 2 to 128 characters in length. It must start with a letter and cannot start with http:// or https://. It can contain letters, digits, colons (:), underscores (_), periods (.), and hyphens (-).
        /// Note If you do not specify the Name parameter, the return value of ImagePipelineId is used.
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Name
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceGroupId: The ID of the resource group.</summary>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property systemDiskSize: The system disk size of the intermediate instance.</summary>
        /// <remarks>
        /// Unit: GiB. Valid values: 20 to 500.
        /// Default value: 40.
        /// </remarks>
        [JsiiProperty(name: "systemDiskSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SystemDiskSize
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tags:.</summary>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-ecs.RosImagePipeline.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Ecs.RosImagePipeline.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property toRegionId: The IDs of regions to which you want to distribute the image that is created based on the image template.</summary>
        /// <remarks>
        /// You can specify up to 20 region IDs.
        /// If you do not specify this parameter, the image is created only in the current region.
        /// </remarks>
        [JsiiProperty(name: "toRegionId", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ToRegionId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vSwitchId: The ID of the vSwitch.</summary>
        /// <remarks>
        /// If you do not specify this parameter, a new VPC and vSwitch are created. Make sure that the VPC quota in your account is sufficient. For more information, see Limits and quotas.
        /// </remarks>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VSwitchId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ImagePipeline`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-imagepipeline
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IImagePipelineProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.ImagePipelineProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.IImagePipelineProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property baseImage: The source image.</summary>
            /// <remarks>
            /// If you set BaseImageType to IMAGE, set the BaseImage parameter to the ID of a custom image.
            /// If you set BaseImageType to IMAGE_FAMILY, set the BaseImage parameter to the name of an image family.
            /// </remarks>
            [JsiiProperty(name: "baseImage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object BaseImage
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property baseImageType: The type of the source image.</summary>
            /// <remarks>
            /// Valid values:
            /// IMAGE: image
            /// IMAGE_FAMILY: image family
            /// </remarks>
            [JsiiProperty(name: "baseImageType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object BaseImageType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property addAccount: The IDs of Alibaba Cloud accounts to which to share the image that will be created based on the image template.</summary>
            /// <remarks>
            /// You can specify up to 20 account IDs.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "addAccount", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? AddAccount
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property buildContent: The content of the image template.</summary>
            /// <remarks>
            /// The content cannot exceed 16 KB in size and can contain up to 127 commands. For more information about the commands that are supported, see the "Usage notes" section of this topic.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "buildContent", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? BuildContent
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property deleteInstanceOnFailure: Specifies whether to release the intermediate instance when the image cannot be created.</summary>
            /// <remarks>
            /// Valid values:
            /// true
            /// false
            /// Default value: true.
            /// Note If the intermediate instance cannot be started, the instance is released by default.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "deleteInstanceOnFailure", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DeleteInstanceOnFailure
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property description: The description of the image template.</summary>
            /// <remarks>
            /// The description must be 2 to 256 characters in length. It cannot start with http:// or https://.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property executePipeline: Whether execute pipeline.</summary>
            /// <remarks>
            /// Default value is true
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "executePipeline", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ExecutePipeline
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property imageName: The prefix of the image name.</summary>
            /// <remarks>
            /// The prefix must be 2 to 64 characters in length. It must start with a letter and cannot start with http:// or https://. It can contain letters, digits, colons (:), underscores (<em>), periods (.), and hyphens (-).
            /// The system generates the final complete image name that consists of the specified prefix and the ID of the build task (ExecutionId) in the format of {ImageName}</em>{ExecutionId}.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "imageName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ImageName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property instanceType: The instance type.</summary>
            /// <remarks>
            /// You can call the  DescribeInstanceTypes  to query instance types.
            /// If you do not configure this parameter, an instance type that provides the fewest vCPUs and memory resources is automatically selected. This configuration is subject to resource availability of instance types. For example, the ecs.g6.large instance type is automatically selected. If available ecs.g6.large resources are insufficient, the ecs.g6.xlarge instance type is selected.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property internetMaxBandwidthOut: The size of the outbound public bandwidth for the intermediate instance.</summary>
            /// <remarks>
            /// Unit: Mbit/s. Valid values: 0 to 100.
            /// Default value: 0.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "internetMaxBandwidthOut", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InternetMaxBandwidthOut
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property name: The name of the image template.</summary>
            /// <remarks>
            /// The name must be 2 to 128 characters in length. It must start with a letter and cannot start with http:// or https://. It can contain letters, digits, colons (:), underscores (_), periods (.), and hyphens (-).
            /// Note If you do not specify the Name parameter, the return value of ImagePipelineId is used.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Name
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceGroupId: The ID of the resource group.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property systemDiskSize: The system disk size of the intermediate instance.</summary>
            /// <remarks>
            /// Unit: GiB. Valid values: 20 to 500.
            /// Default value: 40.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "systemDiskSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SystemDiskSize
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tags:.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-ecs.RosImagePipeline.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Ecs.RosImagePipeline.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ecs.RosImagePipeline.ITagsProperty[]?>();
            }

            /// <summary>Property toRegionId: The IDs of regions to which you want to distribute the image that is created based on the image template.</summary>
            /// <remarks>
            /// You can specify up to 20 region IDs.
            /// If you do not specify this parameter, the image is created only in the current region.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "toRegionId", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? ToRegionId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property vSwitchId: The ID of the vSwitch.</summary>
            /// <remarks>
            /// If you do not specify this parameter, a new VPC and vSwitch are created. Make sure that the VPC quota in your account is sufficient. For more information, see Limits and quotas.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VSwitchId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
