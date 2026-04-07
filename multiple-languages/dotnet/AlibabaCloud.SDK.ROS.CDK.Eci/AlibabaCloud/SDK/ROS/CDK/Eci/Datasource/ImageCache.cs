using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Eci.Datasource
{
    /// <summary>This class encapsulates and extends the ROS resource type `DATASOURCE::ECI::ImageCache`, which is used to query the information about an image cache.</summary>
    /// <remarks>
    /// <strong>Note</strong>: This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosImageCache`for a more convenient development experience.
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eci-imagecache
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Eci.Datasource.ImageCache), fullyQualifiedName: "@alicloud/ros-cdk-eci.datasource.ImageCache", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-eci.datasource.ImageCacheProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class ImageCache : AlibabaCloud.SDK.ROS.CDK.Core.Resource_, AlibabaCloud.SDK.ROS.CDK.Eci.Datasource.IImageCache
    {
        /// <summary>Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.</summary>
        public ImageCache(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Eci.Datasource.IImageCacheProps props, bool? enableResourcePropertyConstraint = null): base(_MakeDeputyProps(scope, id, props, enableResourcePropertyConstraint))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Eci.Datasource.IImageCacheProps props, bool? enableResourcePropertyConstraint = null)
        {
            return new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected ImageCache(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected ImageCache(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute ContainerGroupId: ContainerGroupId.</summary>
        [JsiiProperty(name: "attrContainerGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrContainerGroupId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute CreateTime: CreateTime.</summary>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrCreateTime
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute EliminationStrategy: The elimination strategy of the mirror cache.</summary>
        /// <remarks>
        /// The default is empty, indicating that it has been kept.
        /// </remarks>
        [JsiiProperty(name: "attrEliminationStrategy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrEliminationStrategy
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Events: Events.</summary>
        [JsiiProperty(name: "attrEvents", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrEvents
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ExpireDateTime: ExpireDateTime.</summary>
        [JsiiProperty(name: "attrExpireDateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrExpireDateTime
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute FlashSnapshotId: FlashSnapshotId.</summary>
        [JsiiProperty(name: "attrFlashSnapshotId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrFlashSnapshotId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ImageCacheId: ImageCacheId.</summary>
        [JsiiProperty(name: "attrImageCacheId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrImageCacheId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ImageCacheName: ImageCacheName.</summary>
        [JsiiProperty(name: "attrImageCacheName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrImageCacheName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ImageCacheSize: ImageCacheSize.</summary>
        [JsiiProperty(name: "attrImageCacheSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrImageCacheSize
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ImageCacheTags: Tags.</summary>
        [JsiiProperty(name: "attrImageCacheTags", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrImageCacheTags
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Images: Images.</summary>
        [JsiiProperty(name: "attrImages", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrImages
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Progress: Progress.</summary>
        [JsiiProperty(name: "attrProgress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrProgress
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ResourceGroupId: ResourceGroupId.</summary>
        [JsiiProperty(name: "attrResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrResourceGroupId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute SnapshotId: SnapshotId.</summary>
        [JsiiProperty(name: "attrSnapshotId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrSnapshotId
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-eci.datasource.ImageCacheProps\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Eci.Datasource.IImageCacheProps Props
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Eci.Datasource.IImageCacheProps>()!;
        }

        [JsiiProperty(name: "enableResourcePropertyConstraint", typeJson: "{\"primitive\":\"boolean\"}")]
        protected virtual bool EnableResourcePropertyConstraint
        {
            get => GetInstanceProperty<bool>()!;
            set => SetInstanceProperty(value);
        }

        [JsiiProperty(name: "id", typeJson: "{\"primitive\":\"string\"}")]
        protected virtual string Id
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        [JsiiProperty(name: "scope", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}")]
        protected virtual AlibabaCloud.SDK.ROS.CDK.Core.Construct Scope
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.Construct>()!;
            set => SetInstanceProperty(value);
        }
    }
}
