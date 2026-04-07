using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Oss
{
    /// <summary>Properties for defining a `BucketLogging`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-bucketlogging
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IBucketLoggingProps), fullyQualifiedName: "@alicloud/ros-cdk-oss.BucketLoggingProps")]
    public interface IBucketLoggingProps
    {
        /// <summary>Property bucket: The name of the bucket.</summary>
        [JsiiProperty(name: "bucket", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Bucket
        {
            get;
        }

        /// <summary>Property targetBucket: The bucket that stores access logs.</summary>
        [JsiiProperty(name: "targetBucket", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TargetBucket
        {
            get;
        }

        /// <summary>Property loggingRole: Authorization role used for bucket logging.</summary>
        [JsiiProperty(name: "loggingRole", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LoggingRole
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property targetPrefix: The prefix of the saved log objects.</summary>
        /// <remarks>
        /// This element can be left empty.
        /// </remarks>
        [JsiiProperty(name: "targetPrefix", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TargetPrefix
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `BucketLogging`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-bucketlogging
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IBucketLoggingProps), fullyQualifiedName: "@alicloud/ros-cdk-oss.BucketLoggingProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Oss.IBucketLoggingProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property bucket: The name of the bucket.</summary>
            [JsiiProperty(name: "bucket", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Bucket
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property targetBucket: The bucket that stores access logs.</summary>
            [JsiiProperty(name: "targetBucket", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TargetBucket
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property loggingRole: Authorization role used for bucket logging.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "loggingRole", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LoggingRole
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property targetPrefix: The prefix of the saved log objects.</summary>
            /// <remarks>
            /// This element can be left empty.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "targetPrefix", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TargetPrefix
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
