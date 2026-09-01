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

        /// <summary>Property preferredBackupTime: The start time of the full backup within a time range.</summary>
        /// <remarks>
        /// Specify the time range in
        /// the HH:mmZ-HH:mmZ format. The time must be in UTC.
        ///
        ///     The time range is 1 hour.
        /// </remarks>
        [JsiiProperty(name: "preferredBackupTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PreferredBackupTime
        {
            get;
        }

        /// <summary>Property backupRetentionPeriod: The number of days for which to retain full backup files.</summary>
        /// <remarks>
        /// Valid values: 7 to 730.
        ///
        ///     If you do not specify this parameter, the default value 7 is used.
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

        /// <summary>Property enableBackupLog: Specifies whether to enable real-time log backup.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>Enable</description>
        /// <description>Disable</description>
        /// </list>
        ///
        ///     If you leave this parameter empty, the default value Enable is used.
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

        /// <summary>Property logBackupRetentionPeriod: The number of days for which to retain log backup files.</summary>
        /// <remarks>
        /// Valid values: 7 to 730.
        ///
        ///     If you do not specify this parameter, the default value 7 is used.
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

            /// <summary>Property preferredBackupTime: The start time of the full backup within a time range.</summary>
            /// <remarks>
            /// Specify the time range in
            /// the HH:mmZ-HH:mmZ format. The time must be in UTC.
            ///
            ///     The time range is 1 hour.
            /// </remarks>
            [JsiiProperty(name: "preferredBackupTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PreferredBackupTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property backupRetentionPeriod: The number of days for which to retain full backup files.</summary>
            /// <remarks>
            /// Valid values: 7 to 730.
            ///
            ///     If you do not specify this parameter, the default value 7 is used.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "backupRetentionPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? BackupRetentionPeriod
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property enableBackupLog: Specifies whether to enable real-time log backup.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>Enable</description>
            /// <description>Disable</description>
            /// </list>
            ///
            ///     If you leave this parameter empty, the default value Enable is used.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enableBackupLog", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableBackupLog
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property logBackupRetentionPeriod: The number of days for which to retain log backup files.</summary>
            /// <remarks>
            /// Valid values: 7 to 730.
            ///
            ///     If you do not specify this parameter, the default value 7 is used.
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
