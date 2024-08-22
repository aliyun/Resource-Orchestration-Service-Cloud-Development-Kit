using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Oss
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `RosWebsite`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-website
    /// </remarks>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-oss.RosWebsiteProps")]
    public class RosWebsiteProps : AlibabaCloud.SDK.ROS.CDK.Oss.IRosWebsiteProps
    {
        private object _bucketName;

        /// <remarks>
        /// <strong>Property</strong>: bucketName: Bucket name.
        /// </remarks>
        [JsiiProperty(name: "bucketName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object BucketName
        {
            get => _bucketName;
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
                _bucketName = value;
            }
        }

        private object? _websiteConfiguration;

        /// <remarks>
        /// <strong>Property</strong>: websiteConfiguration: Website configuration.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "websiteConfiguration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosWebsite.WebsiteConfigurationProperty\"}]}}", isOptional: true)]
        public object? WebsiteConfiguration
        {
            get => _websiteConfiguration;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Oss.RosWebsite.IWebsiteConfigurationProperty cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Oss.RosWebsite.IWebsiteConfigurationProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _websiteConfiguration = value;
            }
        }
    }
}
