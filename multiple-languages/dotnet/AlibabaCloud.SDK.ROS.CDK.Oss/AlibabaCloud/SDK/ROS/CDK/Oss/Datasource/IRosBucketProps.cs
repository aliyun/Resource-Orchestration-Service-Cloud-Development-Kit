using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Oss.Datasource
{
    /// <summary>Properties for defining a `RosBucket`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oss-bucket
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosBucketProps), fullyQualifiedName: "@alicloud/ros-cdk-oss.datasource.RosBucketProps")]
    public interface IRosBucketProps
    {
        /// <remarks>
        /// <strong>Property</strong>: bucketName: Bucket name. The naming conventions for buckets are as follows:
        /// Only lowercase letters, numbers, and dashes (-) can be included.
        /// Must start and end with lowercase letters or numbers.
        /// The length must be between 3 and 63 characters.
        /// </remarks>
        [JsiiProperty(name: "bucketName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object BucketName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
        /// - Never: Never refresh the datasource resource when the stack is updated.
        /// - Always: Always refresh the datasource resource when the stack is updated.
        /// Default is Never.
        /// </remarks>
        [JsiiProperty(name: "refreshOptions", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RefreshOptions
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosBucket`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oss-bucket
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosBucketProps), fullyQualifiedName: "@alicloud/ros-cdk-oss.datasource.RosBucketProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Oss.Datasource.IRosBucketProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: bucketName: Bucket name. The naming conventions for buckets are as follows:
            /// Only lowercase letters, numbers, and dashes (-) can be included.
            /// Must start and end with lowercase letters or numbers.
            /// The length must be between 3 and 63 characters.
            /// </remarks>
            [JsiiProperty(name: "bucketName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object BucketName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
            /// - Never: Never refresh the datasource resource when the stack is updated.
            /// - Always: Always refresh the datasource resource when the stack is updated.
            /// Default is Never.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "refreshOptions", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RefreshOptions
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
