using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Actiontrail
{
    /// <summary>Properties for defining a `ALIYUN::ACTIONTRAIL::Trail`.</summary>
    [JsiiInterface(nativeType: typeof(IRosTrailProps), fullyQualifiedName: "@alicloud/ros-cdk-actiontrail.RosTrailProps")]
    public interface IRosTrailProps
    {
        /// <remarks>
        /// <strong>Property</strong>: name: The name of the trail to be created, which must be unique for an account.
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}")]
        string Name
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: ossBucketName: The OSS bucket to which the trail delivers logs. Ensure that this is an existing OSS bucket.
        /// </remarks>
        [JsiiProperty(name: "ossBucketName", typeJson: "{\"primitive\":\"string\"}")]
        string OssBucketName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: roleName: The RAM role in ActionTrail permitted by the user.
        /// </remarks>
        [JsiiProperty(name: "roleName", typeJson: "{\"primitive\":\"string\"}")]
        string RoleName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: eventRw: Indicates whether the event is a read or a write event. Valid values: Read, Write, and All. Default value: Write.
        /// </remarks>
        [JsiiProperty(name: "eventRw", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? EventRw
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: ossKeyPrefix: The prefix of the specified OSS bucket name. This parameter can be left empty.
        /// </remarks>
        [JsiiProperty(name: "ossKeyPrefix", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? OssKeyPrefix
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: slsProjectArn: The unique ARN of the Log Service project.
        /// </remarks>
        [JsiiProperty(name: "slsProjectArn", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? SlsProjectArn
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: slsWriteRoleArn: The unique ARN of the Log Service role.
        /// </remarks>
        [JsiiProperty(name: "slsWriteRoleArn", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? SlsWriteRoleArn
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::ACTIONTRAIL::Trail`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosTrailProps), fullyQualifiedName: "@alicloud/ros-cdk-actiontrail.RosTrailProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Actiontrail.IRosTrailProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: name: The name of the trail to be created, which must be unique for an account.
            /// </remarks>
            [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}")]
            public string Name
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: ossBucketName: The OSS bucket to which the trail delivers logs. Ensure that this is an existing OSS bucket.
            /// </remarks>
            [JsiiProperty(name: "ossBucketName", typeJson: "{\"primitive\":\"string\"}")]
            public string OssBucketName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: roleName: The RAM role in ActionTrail permitted by the user.
            /// </remarks>
            [JsiiProperty(name: "roleName", typeJson: "{\"primitive\":\"string\"}")]
            public string RoleName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: eventRw: Indicates whether the event is a read or a write event. Valid values: Read, Write, and All. Default value: Write.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "eventRw", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? EventRw
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: ossKeyPrefix: The prefix of the specified OSS bucket name. This parameter can be left empty.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ossKeyPrefix", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? OssKeyPrefix
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: slsProjectArn: The unique ARN of the Log Service project.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "slsProjectArn", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? SlsProjectArn
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: slsWriteRoleArn: The unique ARN of the Log Service role.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "slsWriteRoleArn", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? SlsWriteRoleArn
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
