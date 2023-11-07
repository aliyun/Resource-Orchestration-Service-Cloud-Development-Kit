using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dbs
{
    /// <summary>Properties for defining a `ALIYUN::DBS::Download`.</summary>
    [JsiiInterface(nativeType: typeof(IRosDownloadProps), fullyQualifiedName: "@alicloud/ros-cdk-dbs.RosDownloadProps")]
    public interface IRosDownloadProps
    {
        /// <remarks>
        /// <strong>Property</strong>: formatType: The format to which the downloaded backup set is converted.
        /// Valid values: CSV|SQL|Parquet
        /// </remarks>
        [JsiiProperty(name: "formatType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object FormatType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceName: The ID of the instance.
        /// </remarks>
        [JsiiProperty(name: "instanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: bakSetId: The ID of the backup set. You can call the DescribeBackups operation to query the ID of the backup set.
        /// This parameter is required if the BakSetType parameter is set to full.
        /// </remarks>
        [JsiiProperty(name: "bakSetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? BakSetId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: bakSetSize: The size of the full backup set. Unit: bytes.
        /// You can call the DescribeBackups operation to query the size of the full backup set.
        /// </remarks>
        [JsiiProperty(name: "bakSetSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? BakSetSize
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: bakSetType: The type of the download task. Valid values:
        /// full: downloads a full backup set
        /// pitr: downloads a backup set at a specific point in time.
        /// </remarks>
        [JsiiProperty(name: "bakSetType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? BakSetType
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: deleteBackupSetInOss: Whether to delete the backup set in OSS when deleting the stack.
        /// Valid values: true|false, default is true.
        /// </remarks>
        [JsiiProperty(name: "deleteBackupSetInOss", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DeleteBackupSetInOss
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: downloadAddressDuration: When the download target is a URL, set the link validity period.
        /// The default URL validity period is 7200 seconds.
        /// The effective duration range can be set from 300 seconds to 86400 seconds
        /// </remarks>
        [JsiiProperty(name: "downloadAddressDuration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DownloadAddressDuration
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: downloadPointInTime: The point in time at which the backup set is downloaded.
        /// Specify a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
        /// This parameter is required if the BakSetType parameter is set to pitr.
        /// </remarks>
        [JsiiProperty(name: "downloadPointInTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DownloadPointInTime
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: targetBucket: The name of the OSS bucket that is used to store the backup set.
        /// This parameter is required if the TargetType parameter is set to OSS.
        /// Make sure that your account is granted the AliyunDBSDefaultRole permission.
        /// For more information, see Use RAM for resource authorization.
        /// You can also grant permissions based on the operation instructions in the Resource Access Management (RAM) console.
        /// </remarks>
        [JsiiProperty(name: "targetBucket", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TargetBucket
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: targetOssRegion: The region in which the OSS bucket resides.
        /// This parameter is required if the TargetType parameter is set to OSS.
        /// </remarks>
        [JsiiProperty(name: "targetOssRegion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TargetOssRegion
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: targetPath: The destination path to which the backup set is downloaded.
        /// This parameter is required if the TargetType parameter is set to OSS.
        /// </remarks>
        [JsiiProperty(name: "targetPath", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TargetPath
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: targetType: The type of the destination to which the backup set is downloaded.
        /// Valid values: OSS|URL
        /// </remarks>
        [JsiiProperty(name: "targetType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TargetType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::DBS::Download`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosDownloadProps), fullyQualifiedName: "@alicloud/ros-cdk-dbs.RosDownloadProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dbs.IRosDownloadProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: formatType: The format to which the downloaded backup set is converted.
            /// Valid values: CSV|SQL|Parquet
            /// </remarks>
            [JsiiProperty(name: "formatType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object FormatType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceName: The ID of the instance.
            /// </remarks>
            [JsiiProperty(name: "instanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: bakSetId: The ID of the backup set. You can call the DescribeBackups operation to query the ID of the backup set.
            /// This parameter is required if the BakSetType parameter is set to full.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "bakSetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? BakSetId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: bakSetSize: The size of the full backup set. Unit: bytes.
            /// You can call the DescribeBackups operation to query the size of the full backup set.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "bakSetSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? BakSetSize
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: bakSetType: The type of the download task. Valid values:
            /// full: downloads a full backup set
            /// pitr: downloads a backup set at a specific point in time.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "bakSetType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? BakSetType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: deleteBackupSetInOss: Whether to delete the backup set in OSS when deleting the stack.
            /// Valid values: true|false, default is true.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "deleteBackupSetInOss", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DeleteBackupSetInOss
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: downloadAddressDuration: When the download target is a URL, set the link validity period.
            /// The default URL validity period is 7200 seconds.
            /// The effective duration range can be set from 300 seconds to 86400 seconds
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "downloadAddressDuration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DownloadAddressDuration
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: downloadPointInTime: The point in time at which the backup set is downloaded.
            /// Specify a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
            /// This parameter is required if the BakSetType parameter is set to pitr.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "downloadPointInTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DownloadPointInTime
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: targetBucket: The name of the OSS bucket that is used to store the backup set.
            /// This parameter is required if the TargetType parameter is set to OSS.
            /// Make sure that your account is granted the AliyunDBSDefaultRole permission.
            /// For more information, see Use RAM for resource authorization.
            /// You can also grant permissions based on the operation instructions in the Resource Access Management (RAM) console.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "targetBucket", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TargetBucket
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: targetOssRegion: The region in which the OSS bucket resides.
            /// This parameter is required if the TargetType parameter is set to OSS.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "targetOssRegion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TargetOssRegion
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: targetPath: The destination path to which the backup set is downloaded.
            /// This parameter is required if the TargetType parameter is set to OSS.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "targetPath", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TargetPath
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: targetType: The type of the destination to which the backup set is downloaded.
            /// Valid values: OSS|URL
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "targetType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TargetType
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
