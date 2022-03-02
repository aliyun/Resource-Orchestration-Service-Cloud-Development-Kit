using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Actiontrail
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ACTIONTRAIL::Trail`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-actiontrail.TrailProps")]
    public class TrailProps : AlibabaCloud.SDK.ROS.CDK.Actiontrail.ITrailProps
    {
        /// <summary>Property name: The name of the trail to be created, which must be unique for an account.</summary>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Name
        {
            get;
            set;
        }

        /// <summary>Property ossBucketName: The OSS bucket to which the trail delivers logs.</summary>
        /// <remarks>
        /// Ensure that this is an existing OSS bucket.
        /// </remarks>
        [JsiiProperty(name: "ossBucketName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object OssBucketName
        {
            get;
            set;
        }

        /// <summary>Property roleName: The RAM role in ActionTrail permitted by the user.</summary>
        [JsiiProperty(name: "roleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object RoleName
        {
            get;
            set;
        }

        /// <summary>Property eventRw: Indicates whether the event is a read or a write event.</summary>
        /// <remarks>
        /// Valid values: Read, Write, and All. Default value: Write.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "eventRw", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? EventRw
        {
            get;
            set;
        }

        /// <summary>Property ossKeyPrefix: The prefix of the specified OSS bucket name.</summary>
        /// <remarks>
        /// This parameter can be left empty.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "ossKeyPrefix", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? OssKeyPrefix
        {
            get;
            set;
        }

        /// <summary>Property slsProjectArn: The unique ARN of the Log Service project.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "slsProjectArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? SlsProjectArn
        {
            get;
            set;
        }

        /// <summary>Property slsWriteRoleArn: The unique ARN of the Log Service role.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "slsWriteRoleArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? SlsWriteRoleArn
        {
            get;
            set;
        }
    }
}
