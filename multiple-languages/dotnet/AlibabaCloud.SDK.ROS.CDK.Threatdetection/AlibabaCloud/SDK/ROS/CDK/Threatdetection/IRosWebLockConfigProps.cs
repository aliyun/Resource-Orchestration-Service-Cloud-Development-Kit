using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Threatdetection
{
    /// <summary>Properties for defining a `RosWebLockConfig`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-weblockconfig
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosWebLockConfigProps), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.RosWebLockConfigProps")]
    public interface IRosWebLockConfigProps
    {
        /// <remarks>
        /// <strong>Property</strong>: defenceMode: The prevention mode. Valid values:
        /// *   **block**: Interception Mode
        /// *   **audit**: Alert Mode.
        /// </remarks>
        [JsiiProperty(name: "defenceMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DefenceMode
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: dir: The directory for which you want to enable web tamper proofing.
        /// </remarks>
        [JsiiProperty(name: "dir", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Dir
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: localBackupDir: The local path to the backup files of the protected directory.\
        /// The directory format of a Linux server is different from that of a Windows server. You must enter the directory in the required format based on your operating system. Examples:
        /// *   Linux server: \/usr\/local\/aegis\/bak
        /// *   Windows server: C:\Program Files (x86)\xxx\Aegis\bak.
        /// </remarks>
        [JsiiProperty(name: "localBackupDir", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object LocalBackupDir
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: uuid: The UUID of the server for which you want to add a directory to protect.
        /// > You can call the [DescribeCloudCenterInstances](~~DescribeCloudCenterInstances~~) operation to query the UUIDs of servers.
        /// </remarks>
        [JsiiProperty(name: "uuid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Uuid
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: exclusiveDir: The directory for which you want to disable web tamper proofing.
        /// > If you set **Mode** to **blacklist**, you must specify this parameter.
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

        /// <remarks>
        /// <strong>Property</strong>: exclusiveFile: The file for which you want to disable web tamper proofing.
        /// > If you set **Mode** to **blacklist**, you must specify this parameter.
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

        /// <remarks>
        /// <strong>Property</strong>: exclusiveFileType: The type of file for which you want to disable web tamper proofing. Separate multiple types with semicolons (;). Valid values:
        /// *   php
        /// *   jsp
        /// *   asp
        /// *   aspx
        /// *   js
        /// *   cgi
        /// *   html
        /// *   htm
        /// *   xml
        /// *   shtml
        /// *   shtm
        /// *   jpg
        /// *   gif
        /// *   png
        /// > If you set **Mode** to **blacklist**, you must specify this parameter.
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

        /// <remarks>
        /// <strong>Property</strong>: inclusiveFile: The file that has web tamper proofing enabled.
        /// > If the value of **Mode** is **whitelist**, this parameter is returned.
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

        /// <remarks>
        /// <strong>Property</strong>: inclusiveFileType: The type of file for which you want to enable web tamper proofing. Separate multiple types with semicolons (;). Valid values:
        /// *   php
        /// *   jsp
        /// *   asp
        /// *   aspx
        /// *   js
        /// *   cgi
        /// *   html
        /// *   htm
        /// *   xml
        /// *   shtml
        /// *   shtm
        /// *   jpg
        /// *   gif
        /// *   png
        /// > If you set **Mode** to **whitelist**, you must specify this parameter.
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

        /// <remarks>
        /// <strong>Property</strong>: mode: The protection mode of web tamper proofing. Valid values:
        /// *   **whitelist**: In this mode, web tamper proofing is enabled for the specified directories and file types.
        /// *   **blacklist**: In this mode, web tamper proofing is enabled for the unspecified sub-directories, file types, and files in the protected directories.
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

        /// <summary>Properties for defining a `RosWebLockConfig`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-weblockconfig
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosWebLockConfigProps), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.RosWebLockConfigProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Threatdetection.IRosWebLockConfigProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: defenceMode: The prevention mode. Valid values:
            /// *   **block**: Interception Mode
            /// *   **audit**: Alert Mode.
            /// </remarks>
            [JsiiProperty(name: "defenceMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DefenceMode
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: dir: The directory for which you want to enable web tamper proofing.
            /// </remarks>
            [JsiiProperty(name: "dir", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Dir
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: localBackupDir: The local path to the backup files of the protected directory.\
            /// The directory format of a Linux server is different from that of a Windows server. You must enter the directory in the required format based on your operating system. Examples:
            /// *   Linux server: \/usr\/local\/aegis\/bak
            /// *   Windows server: C:\Program Files (x86)\xxx\Aegis\bak.
            /// </remarks>
            [JsiiProperty(name: "localBackupDir", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object LocalBackupDir
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: uuid: The UUID of the server for which you want to add a directory to protect.
            /// > You can call the [DescribeCloudCenterInstances](~~DescribeCloudCenterInstances~~) operation to query the UUIDs of servers.
            /// </remarks>
            [JsiiProperty(name: "uuid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Uuid
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: exclusiveDir: The directory for which you want to disable web tamper proofing.
            /// > If you set **Mode** to **blacklist**, you must specify this parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "exclusiveDir", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ExclusiveDir
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: exclusiveFile: The file for which you want to disable web tamper proofing.
            /// > If you set **Mode** to **blacklist**, you must specify this parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "exclusiveFile", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ExclusiveFile
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: exclusiveFileType: The type of file for which you want to disable web tamper proofing. Separate multiple types with semicolons (;). Valid values:
            /// *   php
            /// *   jsp
            /// *   asp
            /// *   aspx
            /// *   js
            /// *   cgi
            /// *   html
            /// *   htm
            /// *   xml
            /// *   shtml
            /// *   shtm
            /// *   jpg
            /// *   gif
            /// *   png
            /// > If you set **Mode** to **blacklist**, you must specify this parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "exclusiveFileType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ExclusiveFileType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: inclusiveFile: The file that has web tamper proofing enabled.
            /// > If the value of **Mode** is **whitelist**, this parameter is returned.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "inclusiveFile", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InclusiveFile
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: inclusiveFileType: The type of file for which you want to enable web tamper proofing. Separate multiple types with semicolons (;). Valid values:
            /// *   php
            /// *   jsp
            /// *   asp
            /// *   aspx
            /// *   js
            /// *   cgi
            /// *   html
            /// *   htm
            /// *   xml
            /// *   shtml
            /// *   shtm
            /// *   jpg
            /// *   gif
            /// *   png
            /// > If you set **Mode** to **whitelist**, you must specify this parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "inclusiveFileType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InclusiveFileType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: mode: The protection mode of web tamper proofing. Valid values:
            /// *   **whitelist**: In this mode, web tamper proofing is enabled for the specified directories and file types.
            /// *   **blacklist**: In this mode, web tamper proofing is enabled for the unspecified sub-directories, file types, and files in the protected directories.
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
