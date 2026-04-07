using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Adb
{
    /// <summary>Properties for defining a `RosBackupPolicy`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-adb-backuppolicy
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosBackupPolicyProps), fullyQualifiedName: "@alicloud/ros-cdk-adb.RosBackupPolicyProps")]
    public interface IRosBackupPolicyProps
    {
        /// <remarks>
        /// <strong>Property</strong>: dbClusterId: The ID of the ADB cluster.
        /// </remarks>
        [JsiiProperty(name: "dbClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbClusterId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: preferredBackupPeriod: The preferred backup period. Valid values: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.
        /// </remarks>
        [JsiiProperty(name: "preferredBackupPeriod", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object PreferredBackupPeriod
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: preferredBackupTime: The preferred backup time. Format: HH:mmZ-HH:mmZ. Example: 02:00Z-03:00Z
        /// </remarks>
        [JsiiProperty(name: "preferredBackupTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PreferredBackupTime
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: backupRetentionPeriod: The number of days for which backup files are retained. Valid values: 7 to 730.
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

        /// <remarks>
        /// <strong>Property</strong>: enableBackupLog: Whether to enable log backup. Valid values: Enable, Disable.
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

        /// <remarks>
        /// <strong>Property</strong>: logBackupRetentionPeriod: The number of days for which log backup files are retained. Valid values: 7 to 730.
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

        /// <summary>Properties for defining a `RosBackupPolicy`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-adb-backuppolicy
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosBackupPolicyProps), fullyQualifiedName: "@alicloud/ros-cdk-adb.RosBackupPolicyProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Adb.IRosBackupPolicyProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: dbClusterId: The ID of the ADB cluster.
            /// </remarks>
            [JsiiProperty(name: "dbClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbClusterId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: preferredBackupPeriod: The preferred backup period. Valid values: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.
            /// </remarks>
            [JsiiProperty(name: "preferredBackupPeriod", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object PreferredBackupPeriod
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: preferredBackupTime: The preferred backup time. Format: HH:mmZ-HH:mmZ. Example: 02:00Z-03:00Z
            /// </remarks>
            [JsiiProperty(name: "preferredBackupTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PreferredBackupTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: backupRetentionPeriod: The number of days for which backup files are retained. Valid values: 7 to 730.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "backupRetentionPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? BackupRetentionPeriod
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: enableBackupLog: Whether to enable log backup. Valid values: Enable, Disable.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enableBackupLog", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableBackupLog
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: logBackupRetentionPeriod: The number of days for which log backup files are retained. Valid values: 7 to 730.
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
