using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Oss.Datasource
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `Bucket`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oss-bucket
    /// </remarks>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-oss.datasource.BucketProps")]
    public class BucketProps : AlibabaCloud.SDK.ROS.CDK.Oss.Datasource.IBucketProps
    {
        private object _bucketName;

        /// <summary>Property bucketName: Bucket name.</summary>
        /// <remarks>
        /// The naming conventions for buckets are as follows:
        /// Only lowercase letters, numbers, and dashes (-) can be included.
        /// Must start and end with lowercase letters or numbers.
        /// The length must be between 3 and 63 characters.
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
    }
}
