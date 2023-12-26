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
        /// <summary>Property name: The name of the trail to be created, which must be unique for an account.</summary>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Name
        {
            get;
        }

        /// <summary>Property ossBucketName: The OSS bucket to which the trail delivers logs.</summary>
        /// <remarks>
        /// Ensure that this is an existing OSS bucket.
        /// </remarks>
        [JsiiProperty(name: "ossBucketName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object OssBucketName
        {
            get;
        }

        /// <summary>Property roleName: The RAM role in ActionTrail permitted by the user.</summary>
        [JsiiProperty(name: "roleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RoleName
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

        /// <summary>Property ossKeyPrefix: The prefix of the specified OSS bucket name.</summary>
        /// <remarks>
        /// This parameter can be left empty.
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

        /// <summary>Property slsProjectArn: The unique ARN of the Log Service project.</summary>
        [JsiiProperty(name: "slsProjectArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SlsProjectArn
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property slsWriteRoleArn: The unique ARN of the Log Service role.</summary>
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

            /// <summary>Property name: The name of the trail to be created, which must be unique for an account.</summary>
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Name
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property ossBucketName: The OSS bucket to which the trail delivers logs.</summary>
            /// <remarks>
            /// Ensure that this is an existing OSS bucket.
            /// </remarks>
            [JsiiProperty(name: "ossBucketName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object OssBucketName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property roleName: The RAM role in ActionTrail permitted by the user.</summary>
            [JsiiProperty(name: "roleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RoleName
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

            /// <summary>Property ossKeyPrefix: The prefix of the specified OSS bucket name.</summary>
            /// <remarks>
            /// This parameter can be left empty.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ossKeyPrefix", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OssKeyPrefix
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property slsProjectArn: The unique ARN of the Log Service project.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "slsProjectArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SlsProjectArn
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property slsWriteRoleArn: The unique ARN of the Log Service role.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "slsWriteRoleArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SlsWriteRoleArn
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
