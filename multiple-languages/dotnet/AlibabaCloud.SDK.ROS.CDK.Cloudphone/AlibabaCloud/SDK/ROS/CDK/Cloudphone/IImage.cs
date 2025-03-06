using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cloudphone
{
    /// <summary>Represents a `Image`.</summary>
    [JsiiInterface(nativeType: typeof(IImage), fullyQualifiedName: "@alicloud/ros-cdk-cloudphone.IImage")]
    public interface IImage : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute CreateTime: The time when the image was created.</summary>
        /// <remarks>
        /// The time follows the ISO 8601 standard.
        /// </remarks>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreateTime
        {
            get;
        }

        /// <summary>Attribute Description: The image description.</summary>
        [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDescription
        {
            get;
        }

        /// <summary>Attribute ImageCategory: The image type.</summary>
        [JsiiProperty(name: "attrImageCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrImageCategory
        {
            get;
        }

        /// <summary>Attribute ImageId: The image ID.</summary>
        [JsiiProperty(name: "attrImageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrImageId
        {
            get;
        }

        /// <summary>Attribute ImageName: The image name.</summary>
        [JsiiProperty(name: "attrImageName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrImageName
        {
            get;
        }

        /// <summary>Attribute IsSelfShared: Indicates whether the image is shared with other Alibaba Cloud accounts.</summary>
        [JsiiProperty(name: "attrIsSelfShared", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrIsSelfShared
        {
            get;
        }

        /// <summary>Attribute OsName: The display name of the OS in Chinese.</summary>
        [JsiiProperty(name: "attrOsName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrOsName
        {
            get;
        }

        /// <summary>Attribute OsNameEn: The display name of the OS in English.</summary>
        [JsiiProperty(name: "attrOsNameEn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrOsNameEn
        {
            get;
        }

        /// <summary>Attribute OsType: The image OS.</summary>
        [JsiiProperty(name: "attrOsType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrOsType
        {
            get;
        }

        /// <summary>Attribute Platform: The OS distribution.</summary>
        [JsiiProperty(name: "attrPlatform", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPlatform
        {
            get;
        }

        /// <summary>Attribute Progress: The progress of image creation.</summary>
        [JsiiProperty(name: "attrProgress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrProgress
        {
            get;
        }

        /// <summary>Attribute Usage: Whether the image is already running in the cloud phone instance.</summary>
        [JsiiProperty(name: "attrUsage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrUsage
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cloudphone.ImageProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Cloudphone.IImageProps Props
        {
            get;
        }

        /// <summary>Represents a `Image`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IImage), fullyQualifiedName: "@alicloud/ros-cdk-cloudphone.IImage")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cloudphone.IImage
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute CreateTime: The time when the image was created.</summary>
            /// <remarks>
            /// The time follows the ISO 8601 standard.
            /// </remarks>
            [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Description: The image description.</summary>
            [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDescription
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ImageCategory: The image type.</summary>
            [JsiiProperty(name: "attrImageCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrImageCategory
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ImageId: The image ID.</summary>
            [JsiiProperty(name: "attrImageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrImageId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ImageName: The image name.</summary>
            [JsiiProperty(name: "attrImageName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrImageName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute IsSelfShared: Indicates whether the image is shared with other Alibaba Cloud accounts.</summary>
            [JsiiProperty(name: "attrIsSelfShared", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrIsSelfShared
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute OsName: The display name of the OS in Chinese.</summary>
            [JsiiProperty(name: "attrOsName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrOsName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute OsNameEn: The display name of the OS in English.</summary>
            [JsiiProperty(name: "attrOsNameEn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrOsNameEn
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute OsType: The image OS.</summary>
            [JsiiProperty(name: "attrOsType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrOsType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Platform: The OS distribution.</summary>
            [JsiiProperty(name: "attrPlatform", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPlatform
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Progress: The progress of image creation.</summary>
            [JsiiProperty(name: "attrProgress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrProgress
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Usage: Whether the image is already running in the cloud phone instance.</summary>
            [JsiiProperty(name: "attrUsage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrUsage
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cloudphone.ImageProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Cloudphone.IImageProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Cloudphone.IImageProps>()!;
            }

            /// <summary>The environment this resource belongs to.</summary>
            /// <remarks>
            /// For resources that are created and managed by the CDK
            /// (generally, those created by creating new class instances like Role, Bucket, etc.),
            /// this is always the same as the environment of the stack they belong to;
            /// however, for imported resources
            /// (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
            /// that might be different than the stack they were imported into.
            /// </remarks>
            [JsiiProperty(name: "env", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResourceEnvironment\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment Env
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment>()!;
            }

            /// <summary>The stack in which this resource is defined.</summary>
            [JsiiProperty(name: "stack", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.Stack\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.Stack Stack
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.Stack>()!;
            }

            /// <summary>The construct tree node for this construct.</summary>
            [JsiiProperty(name: "node", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.ConstructNode\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode Node
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode>()!;
            }
        }
    }
}
