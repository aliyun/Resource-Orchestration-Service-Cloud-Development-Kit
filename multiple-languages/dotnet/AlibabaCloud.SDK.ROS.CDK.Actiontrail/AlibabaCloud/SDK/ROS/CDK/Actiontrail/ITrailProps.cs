using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Actiontrail
{
    /// <summary>Properties for defining a `Trail`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-actiontrail-trail
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ITrailProps), fullyQualifiedName: "@alicloud/ros-cdk-actiontrail.TrailProps")]
    public interface ITrailProps
    {
        /// <summary>Property name: The name of the trail to be created.</summary>
        /// <remarks>
        /// Length should be between 6 and 36 characters, must start with a lowercase letter,
        /// and can include lowercase letters, numbers, hyphens (-), and underscores (_).
        ///
        ///     The trail name must be unique within the same account.
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Name
        {
            get;
        }

        /// <summary>Property eventRw: Indicates whether the event is a read or a write event.</summary>
        /// <remarks>
        /// Valid values: Read, Write, and All. Default value: Write.
        /// </remarks>
        [JsiiProperty(name: "eventRw", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EventRw
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ossBucketName: The OSS bucket for the trail delivery.</summary>
        /// <remarks>
        /// Length should be between 3 and 63 characters, must start with a lowercase letter
        /// or number, and can include lowercase letters, numbers, and hyphens (-).
        ///
        ///     At least one of OssBucketName and SlsProjectArn must be specified.
        /// </remarks>
        [JsiiProperty(name: "ossBucketName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? OssBucketName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ossKeyPrefix: The prefix for the filenames in the OSS bucket for the trail delivery.</summary>
        /// <remarks>
        /// Length should be between 6 and 32 characters, must start with a letter, and can
        /// include letters, numbers, hyphens (-), forward slashes (/), and underscores (_).
        /// </remarks>
        [JsiiProperty(name: "ossKeyPrefix", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? OssKeyPrefix
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property roleName: The name of the associated role for Operation Audit, with a default value of serviceroleforactiontrail.</summary>
        [JsiiProperty(name: "roleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RoleName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property slsProjectArn: The ARN of the Log Service project for the trail delivery.</summary>
        /// <remarks>
        ///     At least one of OssBucketName and SlsProjectArn must be specified.
        /// </remarks>
        [JsiiProperty(name: "slsProjectArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SlsProjectArn
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property slsWriteRoleArn: The ARN of the role assumed by Operation Audit when delivering operation events to the Log Service project.</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description>If this parameter is not specified, Operation Audit will create the necessary
        /// resources by creating a service-linked role.</description>
        /// <description>If this parameter is specified, when you need to deliver events to the current
        /// account, you need to grant the RAM role the permissions of the Operation Audit
        /// service-linked role. When you need to deliver events to another account, you need
        /// to bind the system permission policy for event delivery to the RAM role. For more
        /// information on cross-account delivery, see Deliver Events from Multiple
        /// Accounts to One Account.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "slsWriteRoleArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SlsWriteRoleArn
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Trail`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-actiontrail-trail
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ITrailProps), fullyQualifiedName: "@alicloud/ros-cdk-actiontrail.TrailProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Actiontrail.ITrailProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property name: The name of the trail to be created.</summary>
            /// <remarks>
            /// Length should be between 6 and 36 characters, must start with a lowercase letter,
            /// and can include lowercase letters, numbers, hyphens (-), and underscores (_).
            ///
            ///     The trail name must be unique within the same account.
            /// </remarks>
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Name
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property eventRw: Indicates whether the event is a read or a write event.</summary>
            /// <remarks>
            /// Valid values: Read, Write, and All. Default value: Write.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "eventRw", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EventRw
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ossBucketName: The OSS bucket for the trail delivery.</summary>
            /// <remarks>
            /// Length should be between 3 and 63 characters, must start with a lowercase letter
            /// or number, and can include lowercase letters, numbers, and hyphens (-).
            ///
            ///     At least one of OssBucketName and SlsProjectArn must be specified.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ossBucketName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OssBucketName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ossKeyPrefix: The prefix for the filenames in the OSS bucket for the trail delivery.</summary>
            /// <remarks>
            /// Length should be between 6 and 32 characters, must start with a letter, and can
            /// include letters, numbers, hyphens (-), forward slashes (/), and underscores (_).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ossKeyPrefix", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OssKeyPrefix
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property roleName: The name of the associated role for Operation Audit, with a default value of serviceroleforactiontrail.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "roleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RoleName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property slsProjectArn: The ARN of the Log Service project for the trail delivery.</summary>
            /// <remarks>
            ///     At least one of OssBucketName and SlsProjectArn must be specified.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "slsProjectArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SlsProjectArn
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property slsWriteRoleArn: The ARN of the role assumed by Operation Audit when delivering operation events to the Log Service project.</summary>
            /// <remarks>
            /// <list type="bullet">
            /// <description>If this parameter is not specified, Operation Audit will create the necessary
            /// resources by creating a service-linked role.</description>
            /// <description>If this parameter is specified, when you need to deliver events to the current
            /// account, you need to grant the RAM role the permissions of the Operation Audit
            /// service-linked role. When you need to deliver events to another account, you need
            /// to bind the system permission policy for event delivery to the RAM role. For more
            /// information on cross-account delivery, see Deliver Events from Multiple
            /// Accounts to One Account.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "slsWriteRoleArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SlsWriteRoleArn
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
