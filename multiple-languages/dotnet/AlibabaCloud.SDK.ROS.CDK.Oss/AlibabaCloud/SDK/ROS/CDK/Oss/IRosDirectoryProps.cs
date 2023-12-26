using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Oss
{
    /// <summary>Properties for defining a `RosDirectory`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-directory
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosDirectoryProps), fullyQualifiedName: "@alicloud/ros-cdk-oss.RosDirectoryProps")]
    public interface IRosDirectoryProps
    {
        /// <remarks>
        /// <strong>Property</strong>: bucketName: bucket name.
        /// </remarks>
        [JsiiProperty(name: "bucketName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object BucketName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: directoryName: Directory name
        /// </remarks>
        [JsiiProperty(name: "directoryName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DirectoryName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: deletionForce: Whether force delete the relative objects in the directory. Default value is false.
        /// </remarks>
        [JsiiProperty(name: "deletionForce", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DeletionForce
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosDirectory`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-directory
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosDirectoryProps), fullyQualifiedName: "@alicloud/ros-cdk-oss.RosDirectoryProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Oss.IRosDirectoryProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: bucketName: bucket name.
            /// </remarks>
            [JsiiProperty(name: "bucketName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object BucketName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: directoryName: Directory name
            /// </remarks>
            [JsiiProperty(name: "directoryName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DirectoryName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: deletionForce: Whether force delete the relative objects in the directory. Default value is false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "deletionForce", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DeletionForce
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
