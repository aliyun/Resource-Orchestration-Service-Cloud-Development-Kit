using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Nas
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `Fileset`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-fileset
    /// </remarks>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-nas.FilesetProps")]
    public class FilesetProps : AlibabaCloud.SDK.ROS.CDK.Nas.IFilesetProps
    {
        private object _fileSystemId;

        /// <summary>Property fileSystemId: The ID of the file system.</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description>The IDs of CPFS file systems must start with <c>cpfs-</c>. Example:
        /// cpfs-099394bd928c****.</description>
        /// <description>The IDs of CPFS for Lingjun file systems must start with <c>bmcpfs-</c>. Example:
        /// bmcpfs-290w65p03ok64ya****.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "fileSystemId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object FileSystemId
        {
            get => _fileSystemId;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _fileSystemId = value;
            }
        }

        private object _fileSystemPath;

        /// <summary>Property fileSystemPath: The absolute path of the fileset.</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description>CPFS path limits.</description>
        /// <description>The parent directory of the path that you specify must be an existing
        /// directory in the file system.</description>
        /// <description>The path must be 2 to 1024 characters in length.</description>
        /// <description>The path must start and end with a forward slash (/).</description>
        /// <description>Path limit of CPFS for Lingjun</description>
        /// <description>The path must be 2 to 1024 characters in length.</description>
        /// <description>The path must start and end with a forward slash (/).</description>
        /// <description>The fileset path must be a new path and cannot be an existing path. Fileset
        /// paths cannot be renamed and cannot be symbolic links.</description>
        /// <description>The maximum depth supported by a fileset path is eight levels. The depth of
        /// the root directory / is 0 levels. For example, the fileset path /test/aaa/ccc/
        /// has three levels.</description>
        /// <description>If the fileset path is a multi-level path, the parent directory must be an
        /// existing directory.</description>
        /// <description>Nested filesets are not supported. If a fileset is specified as a parent
        /// directory, its subdirectory cannot be a fileset. A fileset path supports only one
        /// quota.</description>
        /// <description>The path cannot exceed 990 characters in length.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "fileSystemPath", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object FileSystemPath
        {
            get => _fileSystemPath;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _fileSystemPath = value;
            }
        }

        private object? _description;

        /// <summary>Property description: The description of the fileset.</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description>The description must be 2 to 128 characters in length.</description>
        /// <description>The name must start with a letter and cannot start with http:// or https://.</description>
        /// <description>The description can contain letters, digits, colons (:), underscores (_),
        /// periods (.), and hyphens (-).</description>
        /// </list>
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Description
        {
            get => _description;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _description = value;
            }
        }
    }
}
