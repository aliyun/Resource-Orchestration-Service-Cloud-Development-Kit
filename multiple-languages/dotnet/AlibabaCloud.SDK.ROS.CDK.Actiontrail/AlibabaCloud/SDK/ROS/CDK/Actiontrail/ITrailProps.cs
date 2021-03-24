using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Actiontrail
{
    /// <summary>Properties for defining a `ALIYUN::ACTIONTRAIL::Trail`.</summary>
    [JsiiInterface(nativeType: typeof(ITrailProps), fullyQualifiedName: "@alicloud/ros-cdk-actiontrail.TrailProps")]
    public interface ITrailProps
    {
        /// <summary>Property name: The name of the trail to be created, which must be unique for an account.</summary>
        [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}")]
        string Name
        {
            get;
        }

        /// <summary>Property ossBucketName: The OSS bucket to which the trail delivers logs.</summary>
        /// <remarks>
        /// Ensure that this is an existing OSS bucket.
        /// </remarks>
        [JsiiProperty(name: "ossBucketName", typeJson: "{\"primitive\":\"string\"}")]
        string OssBucketName
        {
            get;
        }

        /// <summary>Property roleName: The RAM role in ActionTrail permitted by the user.</summary>
        [JsiiProperty(name: "roleName", typeJson: "{\"primitive\":\"string\"}")]
        string RoleName
        {
            get;
        }

        /// <summary>Property eventRw: Indicates whether the event is a read or a write event.</summary>
        /// <remarks>
        /// Valid values: Read, Write, and All. Default value: Write.
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

        /// <summary>Property ossKeyPrefix: The prefix of the specified OSS bucket name.</summary>
        /// <remarks>
        /// This parameter can be left empty.
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

        /// <summary>Property slsProjectArn: The unique ARN of the Log Service project.</summary>
        [JsiiProperty(name: "slsProjectArn", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? SlsProjectArn
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property slsWriteRoleArn: The unique ARN of the Log Service role.</summary>
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
        [JsiiTypeProxy(nativeType: typeof(ITrailProps), fullyQualifiedName: "@alicloud/ros-cdk-actiontrail.TrailProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Actiontrail.ITrailProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property name: The name of the trail to be created, which must be unique for an account.</summary>
            [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}")]
            public string Name
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property ossBucketName: The OSS bucket to which the trail delivers logs.</summary>
            /// <remarks>
            /// Ensure that this is an existing OSS bucket.
            /// </remarks>
            [JsiiProperty(name: "ossBucketName", typeJson: "{\"primitive\":\"string\"}")]
            public string OssBucketName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property roleName: The RAM role in ActionTrail permitted by the user.</summary>
            [JsiiProperty(name: "roleName", typeJson: "{\"primitive\":\"string\"}")]
            public string RoleName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property eventRw: Indicates whether the event is a read or a write event.</summary>
            /// <remarks>
            /// Valid values: Read, Write, and All. Default value: Write.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "eventRw", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? EventRw
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property ossKeyPrefix: The prefix of the specified OSS bucket name.</summary>
            /// <remarks>
            /// This parameter can be left empty.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ossKeyPrefix", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? OssKeyPrefix
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property slsProjectArn: The unique ARN of the Log Service project.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "slsProjectArn", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? SlsProjectArn
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property slsWriteRoleArn: The unique ARN of the Log Service role.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "slsWriteRoleArn", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? SlsWriteRoleArn
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
