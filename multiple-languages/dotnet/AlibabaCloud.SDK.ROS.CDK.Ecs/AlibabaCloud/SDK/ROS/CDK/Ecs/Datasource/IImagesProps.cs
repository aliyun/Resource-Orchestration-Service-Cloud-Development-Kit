using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::ECS::Images`.</summary>
    [JsiiInterface(nativeType: typeof(IImagesProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.ImagesProps")]
    public interface IImagesProps
    {
        /// <summary>Property actionType: The scenario in which the image is used.</summary>
        /// <remarks>
        /// Default value: CreateEcs. Valid values:
        /// CreateEcs: instance creation
        /// ChangeOS: replacement of the system disk or operating system
        /// </remarks>
        [JsiiProperty(name: "actionType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ActionType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property architecture: The image architecture.</summary>
        /// <remarks>
        /// Valid values:
        /// i38
        /// x86_64
        /// arm64
        /// </remarks>
        [JsiiProperty(name: "architecture", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Architecture
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property imageFamily: The name of the image family.</summary>
        /// <remarks>
        /// You can set this parameter to query images of the specified image family.
        /// This parameter is empty by default.
        /// </remarks>
        [JsiiProperty(name: "imageFamily", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ImageFamily
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property imageId: The ID of the image.</summary>
        [JsiiProperty(name: "imageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ImageId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property imageName: The name of the image.</summary>
        /// <remarks>
        /// Support for fuzzy queries using *.
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

        /// <summary>Property imageOwnerAlias: The source of the image.</summary>
        /// <remarks>
        /// Valid values:
        /// system: public images provided by Alibaba Cloud.
        /// self: your custom images.
        /// others: shared images from other Alibaba Cloud accounts, or community images published by other Alibaba Cloud accounts. Take note of the following items:
        ///
        /// <list type="bullet">
        /// <description>To query community images, you must set IsPublic to true.
        /// To query shared images, you must set IsPublic to false or leave the IsPublic parameter empty.
        /// marketplace: Alibaba Cloud Marketplace images. If Alibaba Cloud Marketplace images are returned in the response, you can use the images without subscription. You must pay attention to the billing details of Alibaba Cloud Marketplace images.
        /// This parameter is empty by default, which indicates that the results that match system, self, and others are returned.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "imageOwnerAlias", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ImageOwnerAlias
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property instanceType: The instance type for which the image can be used.</summary>
        [JsiiProperty(name: "instanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstanceType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property isPublic: Specifies whether to query published community images.</summary>
        /// <remarks>
        /// Valid values:
        /// true: queries published community images. When you set this parameter to true, you must set ImageOwnerAlias to others.
        /// false: queries other image types than community images. The specific image types to be queried are determined by the ImageOwnerAlias value.
        /// Default value: false.
        /// </remarks>
        [JsiiProperty(name: "isPublic", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IsPublic
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property isSupportCloudinit: Specifies whether the image supports cloud-init.</summary>
        [JsiiProperty(name: "isSupportCloudinit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IsSupportCloudinit
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property isSupportIoOptimized: Specifies whether the image can be used on I/O optimized instances.</summary>
        [JsiiProperty(name: "isSupportIoOptimized", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IsSupportIoOptimized
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property osType: The operating system type of the image.</summary>
        /// <remarks>
        /// Valid values:
        /// windows
        /// linux
        /// </remarks>
        [JsiiProperty(name: "osType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? OsType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceGroupId: The ID of the resource group to which the custom image belongs.</summary>
        /// <remarks>
        /// If this parameter is specified to query resources, up to 1,000 resources that belong to the specified resource group can be displayed in the response.
        /// </remarks>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property snapshotId: The ID of the snapshot used to create the custom image.</summary>
        [JsiiProperty(name: "snapshotId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SnapshotId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property status: The state of the image.</summary>
        /// <remarks>
        /// Default value: Available. Valid values:
        /// Creating: The image is being created.
        /// Waiting: The image is waiting to be processed.
        /// Available: The image is available.
        /// UnAvailable: The image is unavailable.
        /// CreateFailed: The image failed to be created.
        /// Deprecated: The image is discontinued.
        /// You can specify multiple values. Separate multiple values with commas (,).
        /// </remarks>
        [JsiiProperty(name: "status", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Status
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tags: Tags of image.</summary>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-ecs.datasource.RosImages.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.RosImages.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property usage: Specifies whether the image is running on an Elastic Compute Service (ECS) instance.</summary>
        /// <remarks>
        /// Valid values:
        /// instance: The image is already in use and running on an ECS instance.
        /// none: The image is not in use.
        /// </remarks>
        [JsiiProperty(name: "usage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Usage
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DATASOURCE::ECS::Images`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IImagesProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.ImagesProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.IImagesProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property actionType: The scenario in which the image is used.</summary>
            /// <remarks>
            /// Default value: CreateEcs. Valid values:
            /// CreateEcs: instance creation
            /// ChangeOS: replacement of the system disk or operating system
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "actionType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ActionType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property architecture: The image architecture.</summary>
            /// <remarks>
            /// Valid values:
            /// i38
            /// x86_64
            /// arm64
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "architecture", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Architecture
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property imageFamily: The name of the image family.</summary>
            /// <remarks>
            /// You can set this parameter to query images of the specified image family.
            /// This parameter is empty by default.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "imageFamily", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ImageFamily
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property imageId: The ID of the image.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "imageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ImageId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property imageName: The name of the image.</summary>
            /// <remarks>
            /// Support for fuzzy queries using *.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "imageName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ImageName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property imageOwnerAlias: The source of the image.</summary>
            /// <remarks>
            /// Valid values:
            /// system: public images provided by Alibaba Cloud.
            /// self: your custom images.
            /// others: shared images from other Alibaba Cloud accounts, or community images published by other Alibaba Cloud accounts. Take note of the following items:
            ///
            /// <list type="bullet">
            /// <description>To query community images, you must set IsPublic to true.
            /// To query shared images, you must set IsPublic to false or leave the IsPublic parameter empty.
            /// marketplace: Alibaba Cloud Marketplace images. If Alibaba Cloud Marketplace images are returned in the response, you can use the images without subscription. You must pay attention to the billing details of Alibaba Cloud Marketplace images.
            /// This parameter is empty by default, which indicates that the results that match system, self, and others are returned.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "imageOwnerAlias", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ImageOwnerAlias
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property instanceType: The instance type for which the image can be used.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "instanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property isPublic: Specifies whether to query published community images.</summary>
            /// <remarks>
            /// Valid values:
            /// true: queries published community images. When you set this parameter to true, you must set ImageOwnerAlias to others.
            /// false: queries other image types than community images. The specific image types to be queried are determined by the ImageOwnerAlias value.
            /// Default value: false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "isPublic", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IsPublic
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property isSupportCloudinit: Specifies whether the image supports cloud-init.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "isSupportCloudinit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IsSupportCloudinit
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property isSupportIoOptimized: Specifies whether the image can be used on I/O optimized instances.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "isSupportIoOptimized", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IsSupportIoOptimized
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property osType: The operating system type of the image.</summary>
            /// <remarks>
            /// Valid values:
            /// windows
            /// linux
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "osType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OsType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceGroupId: The ID of the resource group to which the custom image belongs.</summary>
            /// <remarks>
            /// If this parameter is specified to query resources, up to 1,000 resources that belong to the specified resource group can be displayed in the response.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property snapshotId: The ID of the snapshot used to create the custom image.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "snapshotId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SnapshotId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property status: The state of the image.</summary>
            /// <remarks>
            /// Default value: Available. Valid values:
            /// Creating: The image is being created.
            /// Waiting: The image is waiting to be processed.
            /// Available: The image is available.
            /// UnAvailable: The image is unavailable.
            /// CreateFailed: The image failed to be created.
            /// Deprecated: The image is discontinued.
            /// You can specify multiple values. Separate multiple values with commas (,).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "status", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Status
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tags: Tags of image.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-ecs.datasource.RosImages.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.RosImages.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.RosImages.ITagsProperty[]?>();
            }

            /// <summary>Property usage: Specifies whether the image is running on an Elastic Compute Service (ECS) instance.</summary>
            /// <remarks>
            /// Valid values:
            /// instance: The image is already in use and running on an ECS instance.
            /// none: The image is not in use.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "usage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Usage
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
