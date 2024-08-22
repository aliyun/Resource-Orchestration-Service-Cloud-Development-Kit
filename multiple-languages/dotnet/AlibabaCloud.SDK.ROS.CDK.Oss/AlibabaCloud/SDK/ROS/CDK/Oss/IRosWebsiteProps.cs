using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Oss
{
    /// <summary>Properties for defining a `RosWebsite`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-website
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosWebsiteProps), fullyQualifiedName: "@alicloud/ros-cdk-oss.RosWebsiteProps")]
    public interface IRosWebsiteProps
    {
        /// <remarks>
        /// <strong>Property</strong>: bucketName: Bucket name.
        /// </remarks>
        [JsiiProperty(name: "bucketName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object BucketName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: websiteConfiguration: Website configuration.
        /// </remarks>
        [JsiiProperty(name: "websiteConfiguration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosWebsite.WebsiteConfigurationProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? WebsiteConfiguration
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosWebsite`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-website
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosWebsiteProps), fullyQualifiedName: "@alicloud/ros-cdk-oss.RosWebsiteProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Oss.IRosWebsiteProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: bucketName: Bucket name.
            /// </remarks>
            [JsiiProperty(name: "bucketName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object BucketName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: websiteConfiguration: Website configuration.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "websiteConfiguration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosWebsite.WebsiteConfigurationProperty\"}]}}", isOptional: true)]
            public object? WebsiteConfiguration
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
