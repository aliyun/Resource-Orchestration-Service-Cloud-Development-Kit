using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Clickhouse
{
    /// <summary>Properties for defining a `RosEnterpriseDBClusterBackupPolicy`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-clickhouse-enterprisedbclusterbackuppolicy
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosEnterpriseDBClusterBackupPolicyProps), fullyQualifiedName: "@alicloud/ros-cdk-clickhouse.RosEnterpriseDBClusterBackupPolicyProps")]
    public interface IRosEnterpriseDBClusterBackupPolicyProps
    {
        /// <remarks>
        /// <strong>Property</strong>: backupRetentionPeriod: The number of days for which you can retain the backup data.
        /// </remarks>
        [JsiiProperty(name: "backupRetentionPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object BackupRetentionPeriod
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: dbInstanceId: The cluster ID.
        /// </remarks>
        [JsiiProperty(name: "dbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbInstanceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: preferredBackupPeriod: The backup cycle, which indicates the day of the week when the system regularly backs up data. Separate multiple dates with commas (,).
        /// </remarks>
        [JsiiProperty(name: "preferredBackupPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PreferredBackupPeriod
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: preferredBackupTime: The backup time window within which the backup task is performed. The time is displayed in UTC. For example, 12:00Z-13:00Z indicates that the backup time window ranges from 12:00 (UTC) to 13:00 (UTC).
        /// </remarks>
        [JsiiProperty(name: "preferredBackupTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PreferredBackupTime
        {
            get;
        }

        /// <summary>Properties for defining a `RosEnterpriseDBClusterBackupPolicy`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-clickhouse-enterprisedbclusterbackuppolicy
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosEnterpriseDBClusterBackupPolicyProps), fullyQualifiedName: "@alicloud/ros-cdk-clickhouse.RosEnterpriseDBClusterBackupPolicyProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Clickhouse.IRosEnterpriseDBClusterBackupPolicyProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: backupRetentionPeriod: The number of days for which you can retain the backup data.
            /// </remarks>
            [JsiiProperty(name: "backupRetentionPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object BackupRetentionPeriod
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: dbInstanceId: The cluster ID.
            /// </remarks>
            [JsiiProperty(name: "dbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: preferredBackupPeriod: The backup cycle, which indicates the day of the week when the system regularly backs up data. Separate multiple dates with commas (,).
            /// </remarks>
            [JsiiProperty(name: "preferredBackupPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PreferredBackupPeriod
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: preferredBackupTime: The backup time window within which the backup task is performed. The time is displayed in UTC. For example, 12:00Z-13:00Z indicates that the backup time window ranges from 12:00 (UTC) to 13:00 (UTC).
            /// </remarks>
            [JsiiProperty(name: "preferredBackupTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PreferredBackupTime
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
