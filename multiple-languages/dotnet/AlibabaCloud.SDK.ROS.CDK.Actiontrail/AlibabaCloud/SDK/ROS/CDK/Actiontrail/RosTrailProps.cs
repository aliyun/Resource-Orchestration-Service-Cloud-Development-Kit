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
        [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string Name
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: ossBucketName: The OSS bucket to which the trail delivers logs. Ensure that this is an existing OSS bucket.
        /// </remarks>
        [JsiiProperty(name: "ossBucketName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string OssBucketName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: roleName: The RAM role in ActionTrail permitted by the user.
        /// </remarks>
        [JsiiProperty(name: "roleName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string RoleName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: eventRw: Indicates whether the event is a read or a write event. Valid values: Read, Write, and All. Default value: Write.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "eventRw", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? EventRw
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: ossKeyPrefix: The prefix of the specified OSS bucket name. This parameter can be left empty.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "ossKeyPrefix", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? OssKeyPrefix
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: slsProjectArn: The unique ARN of the Log Service project.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "slsProjectArn", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? SlsProjectArn
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: slsWriteRoleArn: The unique ARN of the Log Service role.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "slsWriteRoleArn", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? SlsWriteRoleArn
        {
            get;
            set;
        }
    }
}
