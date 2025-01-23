using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Eci.Datasource
{
    /// <summary>Represents a `ImageCache`.</summary>
    [JsiiInterface(nativeType: typeof(IImageCache), fullyQualifiedName: "@alicloud/ros-cdk-eci.datasource.IImageCache")]
    public interface IImageCache : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute ContainerGroupId: ContainerGroupId.</summary>
        [JsiiProperty(name: "attrContainerGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrContainerGroupId
        {
            get;
        }

        /// <summary>Attribute CreateTime: CreateTime.</summary>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreateTime
        {
            get;
        }

        /// <summary>Attribute EliminationStrategy: The elimination strategy of the mirror cache.</summary>
        /// <remarks>
        /// The default is empty, indicating that it has been kept.
        /// </remarks>
        [JsiiProperty(name: "attrEliminationStrategy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEliminationStrategy
        {
            get;
        }

        /// <summary>Attribute Events: Events.</summary>
        [JsiiProperty(name: "attrEvents", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEvents
        {
            get;
        }

        /// <summary>Attribute ExpireDateTime: ExpireDateTime.</summary>
        [JsiiProperty(name: "attrExpireDateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrExpireDateTime
        {
            get;
        }

        /// <summary>Attribute FlashSnapshotId: FlashSnapshotId.</summary>
        [JsiiProperty(name: "attrFlashSnapshotId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrFlashSnapshotId
        {
            get;
        }

        /// <summary>Attribute ImageCacheId: ImageCacheId.</summary>
        [JsiiProperty(name: "attrImageCacheId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrImageCacheId
        {
            get;
        }

        /// <summary>Attribute ImageCacheName: ImageCacheName.</summary>
        [JsiiProperty(name: "attrImageCacheName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrImageCacheName
        {
            get;
        }

        /// <summary>Attribute ImageCacheSize: ImageCacheSize.</summary>
        [JsiiProperty(name: "attrImageCacheSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrImageCacheSize
        {
            get;
        }

        /// <summary>Attribute ImageCacheTags: Tags.</summary>
        [JsiiProperty(name: "attrImageCacheTags", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrImageCacheTags
        {
            get;
        }

        /// <summary>Attribute Images: Images.</summary>
        [JsiiProperty(name: "attrImages", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrImages
        {
            get;
        }

        /// <summary>Attribute Progress: Progress.</summary>
        [JsiiProperty(name: "attrProgress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrProgress
        {
            get;
        }

        /// <summary>Attribute ResourceGroupId: ResourceGroupId.</summary>
        [JsiiProperty(name: "attrResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrResourceGroupId
        {
            get;
        }

        /// <summary>Attribute SnapshotId: SnapshotId.</summary>
        [JsiiProperty(name: "attrSnapshotId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSnapshotId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-eci.datasource.ImageCacheProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Eci.Datasource.IImageCacheProps Props
        {
            get;
        }

        /// <summary>Represents a `ImageCache`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IImageCache), fullyQualifiedName: "@alicloud/ros-cdk-eci.datasource.IImageCache")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Eci.Datasource.IImageCache
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute ContainerGroupId: ContainerGroupId.</summary>
            [JsiiProperty(name: "attrContainerGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrContainerGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CreateTime: CreateTime.</summary>
            [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute EliminationStrategy: The elimination strategy of the mirror cache.</summary>
            /// <remarks>
            /// The default is empty, indicating that it has been kept.
            /// </remarks>
            [JsiiProperty(name: "attrEliminationStrategy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEliminationStrategy
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Events: Events.</summary>
            [JsiiProperty(name: "attrEvents", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEvents
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ExpireDateTime: ExpireDateTime.</summary>
            [JsiiProperty(name: "attrExpireDateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrExpireDateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute FlashSnapshotId: FlashSnapshotId.</summary>
            [JsiiProperty(name: "attrFlashSnapshotId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrFlashSnapshotId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ImageCacheId: ImageCacheId.</summary>
            [JsiiProperty(name: "attrImageCacheId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrImageCacheId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ImageCacheName: ImageCacheName.</summary>
            [JsiiProperty(name: "attrImageCacheName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrImageCacheName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ImageCacheSize: ImageCacheSize.</summary>
            [JsiiProperty(name: "attrImageCacheSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrImageCacheSize
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ImageCacheTags: Tags.</summary>
            [JsiiProperty(name: "attrImageCacheTags", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrImageCacheTags
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Images: Images.</summary>
            [JsiiProperty(name: "attrImages", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrImages
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Progress: Progress.</summary>
            [JsiiProperty(name: "attrProgress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrProgress
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ResourceGroupId: ResourceGroupId.</summary>
            [JsiiProperty(name: "attrResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrResourceGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SnapshotId: SnapshotId.</summary>
            [JsiiProperty(name: "attrSnapshotId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSnapshotId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-eci.datasource.ImageCacheProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Eci.Datasource.IImageCacheProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Eci.Datasource.IImageCacheProps>()!;
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
            [JsiiProperty(name: "env", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.ResourceEnvironment\"}")]
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
