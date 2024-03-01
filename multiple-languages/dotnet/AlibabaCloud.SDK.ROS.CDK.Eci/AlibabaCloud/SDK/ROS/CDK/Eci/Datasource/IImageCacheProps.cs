using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Eci.Datasource
{
    /// <summary>Properties for defining a `ImageCache`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eci-imagecache
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IImageCacheProps), fullyQualifiedName: "@alicloud/ros-cdk-eci.datasource.ImageCacheProps")]
    public interface IImageCacheProps
    {
        /// <summary>Property imageCacheId: ImageCacheId.</summary>
        [JsiiProperty(name: "imageCacheId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ImageCacheId
        {
            get;
        }

        /// <summary>Properties for defining a `ImageCache`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eci-imagecache
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IImageCacheProps), fullyQualifiedName: "@alicloud/ros-cdk-eci.datasource.ImageCacheProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Eci.Datasource.IImageCacheProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property imageCacheId: ImageCacheId.</summary>
            [JsiiProperty(name: "imageCacheId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ImageCacheId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
