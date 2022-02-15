using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Actiontrail
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ACTIONTRAIL::Trail`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-actiontrail.RosTrailProps")]
    public class RosTrailProps : AlibabaCloud.SDK.ROS.CDK.Actiontrail.IRosTrailProps
    {
        /// <remarks>
        /// <strong>Property</strong>: name: The name of the trail to be created, which must be unique for an account.
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Name
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: ossBucketName: The OSS bucket to which the trail delivers logs. Ensure that this is an existing OSS bucket.
        /// </remarks>
        [JsiiProperty(name: "ossBucketName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object OssBucketName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: roleName: The RAM role in ActionTrail permitted by the user.
        /// </remarks>
        [JsiiProperty(name: "roleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object RoleName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: eventRw: Indicates whether the event is a read or a write event. Valid values: Read, Write, and All. Default value: Write.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "eventRw", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? EventRw
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: ossKeyPrefix: The prefix of the specified OSS bucket name. This parameter can be left empty.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "ossKeyPrefix", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? OssKeyPrefix
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: slsProjectArn: The unique ARN of the Log Service project.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "slsProjectArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? SlsProjectArn
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: slsWriteRoleArn: The unique ARN of the Log Service role.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "slsWriteRoleArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? SlsWriteRoleArn
        {
            get;
            set;
        }
    }
}
