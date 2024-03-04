using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Eci.Datasource
{
    /// <summary>Properties for defining a `ImageCaches`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eci-imagecaches
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IImageCachesProps), fullyQualifiedName: "@alicloud/ros-cdk-eci.datasource.ImageCachesProps")]
    public interface IImageCachesProps
    {
        /// <summary>Property imageCacheId: ImageCacheId.</summary>
        [JsiiProperty(name: "imageCacheId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ImageCacheId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property imageCacheName: ImageCacheName.</summary>
        [JsiiProperty(name: "imageCacheName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ImageCacheName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property limit: Number of pages.</summary>
        [JsiiProperty(name: "limit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Limit
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceGroupId: ResourceGroupId.</summary>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property snapshotId: SnapshotId.</summary>
        [JsiiProperty(name: "snapshotId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SnapshotId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ImageCaches`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eci-imagecaches
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IImageCachesProps), fullyQualifiedName: "@alicloud/ros-cdk-eci.datasource.ImageCachesProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Eci.Datasource.IImageCachesProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property imageCacheId: ImageCacheId.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "imageCacheId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ImageCacheId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property imageCacheName: ImageCacheName.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "imageCacheName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ImageCacheName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property limit: Number of pages.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "limit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Limit
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceGroupId: ResourceGroupId.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property snapshotId: SnapshotId.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "snapshotId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SnapshotId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
