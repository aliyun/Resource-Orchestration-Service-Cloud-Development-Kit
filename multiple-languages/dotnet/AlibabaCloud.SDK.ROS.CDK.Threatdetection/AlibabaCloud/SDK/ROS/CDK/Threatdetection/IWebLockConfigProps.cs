using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Threatdetection
{
    /// <summary>Properties for defining a `WebLockConfig`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-weblockconfig
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IWebLockConfigProps), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.WebLockConfigProps")]
    public interface IWebLockConfigProps
    {
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
        object DefenceMode
        {
            get;
        }

        /// <summary>Property dir: The directory for which you want to enable web tamper proofing.</summary>
        [JsiiProperty(name: "dir", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Dir
        {
            get;
        }

        /// <summary>Property localBackupDir: The local path to the backup files of the protected directory.\ The directory format of a Linux server is different from that of a Windows server. You must enter the directory in the required format based on your operating system. Examples: *   Linux server: \/usr\/local\/aegis\/bak *   Windows server: C:\Program Files (x86)\xxx\Aegis\bak.</summary>
        [JsiiProperty(name: "localBackupDir", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object LocalBackupDir
        {
            get;
        }

        /// <summary>Property uuid: The UUID of the server for which you want to add a directory to protect.</summary>
        /// <remarks>
        ///     You can call the <a href="~~DescribeCloudCenterInstances~~">DescribeCloudCenterInstances</a> operation to query the UUIDs of servers.
        /// </remarks>
        [JsiiProperty(name: "uuid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Uuid
        {
            get;
        }

        /// <summary>Property exclusiveDir: The directory for which you want to disable web tamper proofing.</summary>
        /// <remarks>
        ///     If you set <strong>Mode</strong> to <strong>blacklist</strong>, you must specify this parameter.
        /// </remarks>
        [JsiiProperty(name: "exclusiveDir", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ExclusiveDir
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property exclusiveFile: The file for which you want to disable web tamper proofing.</summary>
        /// <remarks>
        ///     If you set <strong>Mode</strong> to <strong>blacklist</strong>, you must specify this parameter.
        /// </remarks>
        [JsiiProperty(name: "exclusiveFile", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ExclusiveFile
        {
            get
            {
                return null;
            }
        }

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
        [JsiiProperty(name: "exclusiveFileType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ExclusiveFileType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property inclusiveFile: The file that has web tamper proofing enabled.</summary>
        /// <remarks>
        ///     If the value of <strong>Mode</strong> is <strong>whitelist</strong>, this parameter is returned.
        /// </remarks>
        [JsiiProperty(name: "inclusiveFile", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InclusiveFile
        {
            get
            {
                return null;
            }
        }

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
        [JsiiProperty(name: "inclusiveFileType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InclusiveFileType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property mode: The protection mode of web tamper proofing.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description><strong>whitelist</strong>: In this mode, web tamper proofing is enabled for the specified directories and file types.</description>
        /// <description><strong>blacklist</strong>: In this mode, web tamper proofing is enabled for the unspecified sub-directories, file types, and files in the protected directories.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "mode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Mode
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `WebLockConfig`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-weblockconfig
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IWebLockConfigProps), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.WebLockConfigProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Threatdetection.IWebLockConfigProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

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
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property dir: The directory for which you want to enable web tamper proofing.</summary>
            [JsiiProperty(name: "dir", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Dir
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property localBackupDir: The local path to the backup files of the protected directory.\ The directory format of a Linux server is different from that of a Windows server. You must enter the directory in the required format based on your operating system. Examples: *   Linux server: \/usr\/local\/aegis\/bak *   Windows server: C:\Program Files (x86)\xxx\Aegis\bak.</summary>
            [JsiiProperty(name: "localBackupDir", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object LocalBackupDir
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property uuid: The UUID of the server for which you want to add a directory to protect.</summary>
            /// <remarks>
            ///     You can call the <a href="~~DescribeCloudCenterInstances~~">DescribeCloudCenterInstances</a> operation to query the UUIDs of servers.
            /// </remarks>
            [JsiiProperty(name: "uuid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Uuid
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property exclusiveDir: The directory for which you want to disable web tamper proofing.</summary>
            /// <remarks>
            ///     If you set <strong>Mode</strong> to <strong>blacklist</strong>, you must specify this parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "exclusiveDir", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ExclusiveDir
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property exclusiveFile: The file for which you want to disable web tamper proofing.</summary>
            /// <remarks>
            ///     If you set <strong>Mode</strong> to <strong>blacklist</strong>, you must specify this parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "exclusiveFile", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ExclusiveFile
            {
                get => GetInstanceProperty<object?>();
            }

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
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property inclusiveFile: The file that has web tamper proofing enabled.</summary>
            /// <remarks>
            ///     If the value of <strong>Mode</strong> is <strong>whitelist</strong>, this parameter is returned.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "inclusiveFile", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InclusiveFile
            {
                get => GetInstanceProperty<object?>();
            }

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
                get => GetInstanceProperty<object?>();
            }

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
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
