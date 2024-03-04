using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Eci.Datasource
{
    /// <summary>Properties for defining a `RosImageCache`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eci-imagecache
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosImageCacheProps), fullyQualifiedName: "@alicloud/ros-cdk-eci.datasource.RosImageCacheProps")]
    public interface IRosImageCacheProps
    {
        /// <remarks>
        /// <strong>Property</strong>: imageCacheId: ImageCacheId.
        /// </remarks>
        [JsiiProperty(name: "imageCacheId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ImageCacheId
        {
            get;
        }

        /// <summary>Properties for defining a `RosImageCache`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eci-imagecache
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosImageCacheProps), fullyQualifiedName: "@alicloud/ros-cdk-eci.datasource.RosImageCacheProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Eci.Datasource.IRosImageCacheProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: imageCacheId: ImageCacheId.
            /// </remarks>
            [JsiiProperty(name: "imageCacheId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ImageCacheId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
