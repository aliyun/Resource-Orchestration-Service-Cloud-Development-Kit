using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Adb
{
    /// <summary>Properties for defining a `BackupPolicy`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-adb-backuppolicy
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IBackupPolicyProps), fullyQualifiedName: "@alicloud/ros-cdk-adb.BackupPolicyProps")]
    public interface IBackupPolicyProps
    {
        /// <summary>Property dbClusterId: The ID of the ADB cluster.</summary>
        [JsiiProperty(name: "dbClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbClusterId
        {
            get;
        }

        /// <summary>Property preferredBackupPeriod: The preferred backup period.</summary>
        /// <remarks>
        /// Valid values: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.
        /// </remarks>
        [JsiiProperty(name: "preferredBackupPeriod", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object PreferredBackupPeriod
        {
            get;
        }

        /// <summary>Property preferredBackupTime: The preferred backup time.</summary>
        /// <remarks>
        /// Format: HH:mmZ-HH:mmZ. Example: 02:00Z-03:00Z
        /// </remarks>
        [JsiiProperty(name: "preferredBackupTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PreferredBackupTime
        {
            get;
        }

        /// <summary>Property backupRetentionPeriod: The number of days for which backup files are retained.</summary>
        /// <remarks>
        /// Valid values: 7 to 730.
        /// </remarks>
        [JsiiProperty(name: "backupRetentionPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? BackupRetentionPeriod
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property enableBackupLog: Whether to enable log backup.</summary>
        /// <remarks>
        /// Valid values: Enable, Disable.
        /// </remarks>
        [JsiiProperty(name: "enableBackupLog", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnableBackupLog
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property logBackupRetentionPeriod: The number of days for which log backup files are retained.</summary>
        /// <remarks>
        /// Valid values: 7 to 730.
        /// </remarks>
        [JsiiProperty(name: "logBackupRetentionPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LogBackupRetentionPeriod
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `BackupPolicy`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-adb-backuppolicy
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IBackupPolicyProps), fullyQualifiedName: "@alicloud/ros-cdk-adb.BackupPolicyProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Adb.IBackupPolicyProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property dbClusterId: The ID of the ADB cluster.</summary>
            [JsiiProperty(name: "dbClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbClusterId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property preferredBackupPeriod: The preferred backup period.</summary>
            /// <remarks>
            /// Valid values: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.
            /// </remarks>
            [JsiiProperty(name: "preferredBackupPeriod", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object PreferredBackupPeriod
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property preferredBackupTime: The preferred backup time.</summary>
            /// <remarks>
            /// Format: HH:mmZ-HH:mmZ. Example: 02:00Z-03:00Z
            /// </remarks>
            [JsiiProperty(name: "preferredBackupTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PreferredBackupTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property backupRetentionPeriod: The number of days for which backup files are retained.</summary>
            /// <remarks>
            /// Valid values: 7 to 730.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "backupRetentionPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? BackupRetentionPeriod
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property enableBackupLog: Whether to enable log backup.</summary>
            /// <remarks>
            /// Valid values: Enable, Disable.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enableBackupLog", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableBackupLog
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property logBackupRetentionPeriod: The number of days for which log backup files are retained.</summary>
            /// <remarks>
            /// Valid values: 7 to 730.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "logBackupRetentionPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LogBackupRetentionPeriod
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
