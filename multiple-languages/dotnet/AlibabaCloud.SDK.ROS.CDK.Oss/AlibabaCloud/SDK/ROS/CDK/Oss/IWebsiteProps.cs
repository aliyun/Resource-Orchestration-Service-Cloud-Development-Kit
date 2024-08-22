using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Oss
{
    /// <summary>Properties for defining a `Website`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-website
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IWebsiteProps), fullyQualifiedName: "@alicloud/ros-cdk-oss.WebsiteProps")]
    public interface IWebsiteProps
    {
        /// <summary>Property bucketName: Bucket name.</summary>
        [JsiiProperty(name: "bucketName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object BucketName
        {
            get;
        }

        /// <summary>Property websiteConfiguration: Website configuration.</summary>
        [JsiiProperty(name: "websiteConfiguration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosWebsite.WebsiteConfigurationProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? WebsiteConfiguration
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Website`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-website
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IWebsiteProps), fullyQualifiedName: "@alicloud/ros-cdk-oss.WebsiteProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Oss.IWebsiteProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property bucketName: Bucket name.</summary>
            [JsiiProperty(name: "bucketName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object BucketName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property websiteConfiguration: Website configuration.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "websiteConfiguration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosWebsite.WebsiteConfigurationProperty\"}]}}", isOptional: true)]
            public object? WebsiteConfiguration
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
