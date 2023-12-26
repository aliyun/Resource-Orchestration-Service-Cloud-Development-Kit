using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Nas
{
    /// <summary>Properties for defining a `RosFileset`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-fileset
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosFilesetProps), fullyQualifiedName: "@alicloud/ros-cdk-nas.RosFilesetProps")]
    public interface IRosFilesetProps
    {
        /// <remarks>
        /// <strong>Property</strong>: fileSystemId: File system ID.
        /// </remarks>
        [JsiiProperty(name: "fileSystemId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object FileSystemId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: fileSystemPath: The absolute path of Fileset to be created.
        /// The parent catalog of specified the directory must be a directory in the file system.
        /// The length is 2 to 1024 characters.
        /// Specify the directory must start with positive (\/).
        /// </remarks>
        [JsiiProperty(name: "fileSystemPath", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object FileSystemPath
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: Fileset description information.
        /// The length is 2 to 128 English or Chinese characters.
        /// Start with a lowercase letter or Chinese, and you cannot start with http:\/\/ and https: \/\/.
        /// It can contain numbers, half-horn colon (:), down line (_) or short lines (-).
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosFileset`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-fileset
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosFilesetProps), fullyQualifiedName: "@alicloud/ros-cdk-nas.RosFilesetProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Nas.IRosFilesetProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: fileSystemId: File system ID.
            /// </remarks>
            [JsiiProperty(name: "fileSystemId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object FileSystemId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: fileSystemPath: The absolute path of Fileset to be created.
            /// The parent catalog of specified the directory must be a directory in the file system.
            /// The length is 2 to 1024 characters.
            /// Specify the directory must start with positive (\/).
            /// </remarks>
            [JsiiProperty(name: "fileSystemPath", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object FileSystemPath
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: description: Fileset description information.
            /// The length is 2 to 128 English or Chinese characters.
            /// Start with a lowercase letter or Chinese, and you cannot start with http:\/\/ and https: \/\/.
            /// It can contain numbers, half-horn colon (:), down line (_) or short lines (-).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
