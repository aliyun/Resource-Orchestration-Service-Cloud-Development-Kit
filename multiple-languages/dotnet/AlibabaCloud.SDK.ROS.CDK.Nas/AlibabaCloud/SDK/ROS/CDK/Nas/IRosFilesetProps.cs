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
        /// <strong>Property</strong>: fileSystemId: The ID of the file system.
        /// *   The IDs of CPFS file systems must start with `cpfs-`. Example:
        /// cpfs-099394bd928c\*\*\*\*.
        /// *   The IDs of CPFS for Lingjun file systems must start with `bmcpfs-`. Example:
        /// bmcpfs-290w65p03ok64ya\*\*\*\*.
        /// </remarks>
        [JsiiProperty(name: "fileSystemId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object FileSystemId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: fileSystemPath: The absolute path of the fileset.
        /// *   CPFS path limits.
        /// *   The parent directory of the path that you specify must be an existing
        /// directory in the file system.
        /// *   The path must be 2 to 1024 characters in length.
        /// *   The path must start and end with a forward slash (\/).
        /// *   Path limit of CPFS for Lingjun
        /// *   The path must be 2 to 1024 characters in length.
        /// *   The path must start and end with a forward slash (\/).
        /// *   The fileset path must be a new path and cannot be an existing path. Fileset
        /// paths cannot be renamed and cannot be symbolic links.
        /// *   The maximum depth supported by a fileset path is eight levels. The depth of
        /// the root directory \/ is 0 levels. For example, the fileset path \/test\/aaa\/ccc\/
        /// has three levels.
        /// *   If the fileset path is a multi-level path, the parent directory must be an
        /// existing directory.
        /// *   Nested filesets are not supported. If a fileset is specified as a parent
        /// directory, its subdirectory cannot be a fileset. A fileset path supports only one
        /// quota.
        /// *   The path cannot exceed 990 characters in length.
        /// </remarks>
        [JsiiProperty(name: "fileSystemPath", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object FileSystemPath
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: The description of the fileset.
        /// *   The description must be 2 to 128 characters in length.
        /// *   The name must start with a letter and cannot start with http:\/\/ or https:\/\/.
        /// *   The description can contain letters, digits, colons (:), underscores (_),
        /// periods (.), and hyphens (-).
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
            /// <strong>Property</strong>: fileSystemId: The ID of the file system.
            /// *   The IDs of CPFS file systems must start with `cpfs-`. Example:
            /// cpfs-099394bd928c\*\*\*\*.
            /// *   The IDs of CPFS for Lingjun file systems must start with `bmcpfs-`. Example:
            /// bmcpfs-290w65p03ok64ya\*\*\*\*.
            /// </remarks>
            [JsiiProperty(name: "fileSystemId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object FileSystemId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: fileSystemPath: The absolute path of the fileset.
            /// *   CPFS path limits.
            /// *   The parent directory of the path that you specify must be an existing
            /// directory in the file system.
            /// *   The path must be 2 to 1024 characters in length.
            /// *   The path must start and end with a forward slash (\/).
            /// *   Path limit of CPFS for Lingjun
            /// *   The path must be 2 to 1024 characters in length.
            /// *   The path must start and end with a forward slash (\/).
            /// *   The fileset path must be a new path and cannot be an existing path. Fileset
            /// paths cannot be renamed and cannot be symbolic links.
            /// *   The maximum depth supported by a fileset path is eight levels. The depth of
            /// the root directory \/ is 0 levels. For example, the fileset path \/test\/aaa\/ccc\/
            /// has three levels.
            /// *   If the fileset path is a multi-level path, the parent directory must be an
            /// existing directory.
            /// *   Nested filesets are not supported. If a fileset is specified as a parent
            /// directory, its subdirectory cannot be a fileset. A fileset path supports only one
            /// quota.
            /// *   The path cannot exceed 990 characters in length.
            /// </remarks>
            [JsiiProperty(name: "fileSystemPath", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object FileSystemPath
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: description: The description of the fileset.
            /// *   The description must be 2 to 128 characters in length.
            /// *   The name must start with a letter and cannot start with http:\/\/ or https:\/\/.
            /// *   The description can contain letters, digits, colons (:), underscores (_),
            /// periods (.), and hyphens (-).
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
