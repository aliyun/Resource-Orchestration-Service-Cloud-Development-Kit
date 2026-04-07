using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Oss
{
    /// <summary>Properties for defining a `RosBucketLogging`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-bucketlogging
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosBucketLoggingProps), fullyQualifiedName: "@alicloud/ros-cdk-oss.RosBucketLoggingProps")]
    public interface IRosBucketLoggingProps
    {
        /// <remarks>
        /// <strong>Property</strong>: bucket: The name of the bucket.
        /// </remarks>
        [JsiiProperty(name: "bucket", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Bucket
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: targetBucket: The bucket that stores access logs.
        /// </remarks>
        [JsiiProperty(name: "targetBucket", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TargetBucket
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: loggingRole: Authorization role used for bucket logging.
        /// </remarks>
        [JsiiProperty(name: "loggingRole", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LoggingRole
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: targetPrefix: The prefix of the saved log objects. This element can be left empty.
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

        /// <summary>Properties for defining a `RosBucketLogging`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-bucketlogging
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosBucketLoggingProps), fullyQualifiedName: "@alicloud/ros-cdk-oss.RosBucketLoggingProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Oss.IRosBucketLoggingProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: bucket: The name of the bucket.
            /// </remarks>
            [JsiiProperty(name: "bucket", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Bucket
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: targetBucket: The bucket that stores access logs.
            /// </remarks>
            [JsiiProperty(name: "targetBucket", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TargetBucket
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: loggingRole: Authorization role used for bucket logging.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "loggingRole", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LoggingRole
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: targetPrefix: The prefix of the saved log objects. This element can be left empty.
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
