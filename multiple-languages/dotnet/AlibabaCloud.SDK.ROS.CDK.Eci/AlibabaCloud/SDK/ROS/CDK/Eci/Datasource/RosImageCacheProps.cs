using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Eci.Datasource
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `RosImageCache`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eci-imagecache
    /// </remarks>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-eci.datasource.RosImageCacheProps")]
    public class RosImageCacheProps : AlibabaCloud.SDK.ROS.CDK.Eci.Datasource.IRosImageCacheProps
    {
        private object _imageCacheId;

        /// <remarks>
        /// <strong>Property</strong>: imageCacheId: ImageCacheId.
        /// </remarks>
        [JsiiProperty(name: "imageCacheId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ImageCacheId
        {
            get => _imageCacheId;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _imageCacheId = value;
            }
        }
    }
}
