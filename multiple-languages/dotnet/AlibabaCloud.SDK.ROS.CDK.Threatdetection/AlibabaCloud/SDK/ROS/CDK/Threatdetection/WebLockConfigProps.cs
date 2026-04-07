using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Threatdetection
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `WebLockConfig`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-weblockconfig
    /// </remarks>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-threatdetection.WebLockConfigProps")]
    public class WebLockConfigProps : AlibabaCloud.SDK.ROS.CDK.Threatdetection.IWebLockConfigProps
    {
        private object _defenceMode;

        /// <summary>Property defenceMode: The prevention mode.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description><strong>block</strong>: Interception Mode</description>
        /// <description><strong>audit</strong>: Alert Mode.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "defenceMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object DefenceMode
        {
            get => _defenceMode;
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
                _defenceMode = value;
            }
        }

        private object _dir;

        /// <summary>Property dir: The directory for which you want to enable web tamper proofing.</summary>
        [JsiiProperty(name: "dir", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Dir
        {
            get => _dir;
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
                _dir = value;
            }
        }

        private object _localBackupDir;

        /// <summary>Property localBackupDir: The local path to the backup files of the protected directory.\ The directory format of a Linux server is different from that of a Windows server. You must enter the directory in the required format based on your operating system. Examples: *   Linux server: \/usr\/local\/aegis\/bak *   Windows server: C:\Program Files (x86)\xxx\Aegis\bak.</summary>
        [JsiiProperty(name: "localBackupDir", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object LocalBackupDir
        {
            get => _localBackupDir;
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
                _localBackupDir = value;
            }
        }

        private object _uuid;

        /// <summary>Property uuid: The UUID of the server for which you want to add a directory to protect.</summary>
        /// <remarks>
        ///     You can call the <a href="~~DescribeCloudCenterInstances~~">DescribeCloudCenterInstances</a> operation to query the UUIDs of servers.
        /// </remarks>
        [JsiiProperty(name: "uuid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Uuid
        {
            get => _uuid;
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
                _uuid = value;
            }
        }

        private object? _exclusiveDir;

        /// <summary>Property exclusiveDir: The directory for which you want to disable web tamper proofing.</summary>
        /// <remarks>
        ///     If you set <strong>Mode</strong> to <strong>blacklist</strong>, you must specify this parameter.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "exclusiveDir", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ExclusiveDir
        {
            get => _exclusiveDir;
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
                _exclusiveDir = value;
            }
        }

        private object? _exclusiveFile;

        /// <summary>Property exclusiveFile: The file for which you want to disable web tamper proofing.</summary>
        /// <remarks>
        ///     If you set <strong>Mode</strong> to <strong>blacklist</strong>, you must specify this parameter.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "exclusiveFile", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ExclusiveFile
        {
            get => _exclusiveFile;
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
                _exclusiveFile = value;
            }
        }

        private object? _exclusiveFileType;

        /// <summary>Property exclusiveFileType: The type of file for which you want to disable web tamper proofing.</summary>
        /// <remarks>
        /// Separate multiple types with semicolons (;). Valid values:
        ///
        /// <list type="bullet">
        /// <description>php</description>
        /// <description>jsp</description>
        /// <description>asp</description>
        /// <description>aspx</description>
        /// <description>js</description>
        /// <description>cgi</description>
        /// <description>html</description>
        /// <description>htm</description>
        /// <description>xml</description>
        /// <description>shtml</description>
        /// <description>shtm</description>
        /// <description>jpg</description>
        /// <description>gif</description>
        /// <description>png</description>
        /// </list>
        ///
        ///     If you set <strong>Mode</strong> to <strong>blacklist</strong>, you must specify this parameter.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "exclusiveFileType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ExclusiveFileType
        {
            get => _exclusiveFileType;
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
                _exclusiveFileType = value;
            }
        }

        private object? _inclusiveFile;

        /// <summary>Property inclusiveFile: The file that has web tamper proofing enabled.</summary>
        /// <remarks>
        ///     If the value of <strong>Mode</strong> is <strong>whitelist</strong>, this parameter is returned.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "inclusiveFile", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? InclusiveFile
        {
            get => _inclusiveFile;
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
                _inclusiveFile = value;
            }
        }

        private object? _inclusiveFileType;

        /// <summary>Property inclusiveFileType: The type of file for which you want to enable web tamper proofing.</summary>
        /// <remarks>
        /// Separate multiple types with semicolons (;). Valid values:
        ///
        /// <list type="bullet">
        /// <description>php</description>
        /// <description>jsp</description>
        /// <description>asp</description>
        /// <description>aspx</description>
        /// <description>js</description>
        /// <description>cgi</description>
        /// <description>html</description>
        /// <description>htm</description>
        /// <description>xml</description>
        /// <description>shtml</description>
        /// <description>shtm</description>
        /// <description>jpg</description>
        /// <description>gif</description>
        /// <description>png</description>
        /// </list>
        ///
        ///     If you set <strong>Mode</strong> to <strong>whitelist</strong>, you must specify this parameter.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "inclusiveFileType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? InclusiveFileType
        {
            get => _inclusiveFileType;
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
                _inclusiveFileType = value;
            }
        }

        private object? _mode;

        /// <summary>Property mode: The protection mode of web tamper proofing.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description><strong>whitelist</strong>: In this mode, web tamper proofing is enabled for the specified directories and file types.</description>
        /// <description><strong>blacklist</strong>: In this mode, web tamper proofing is enabled for the unspecified sub-directories, file types, and files in the protected directories.</description>
        /// </list>
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "mode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Mode
        {
            get => _mode;
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
                _mode = value;
            }
        }
    }
}
