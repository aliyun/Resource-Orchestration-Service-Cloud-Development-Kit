using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Clickhouse
{
    /// <summary>Properties for defining a `EnterpriseDBClusterBackupPolicy`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-clickhouse-enterprisedbclusterbackuppolicy
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IEnterpriseDBClusterBackupPolicyProps), fullyQualifiedName: "@alicloud/ros-cdk-clickhouse.EnterpriseDBClusterBackupPolicyProps")]
    public interface IEnterpriseDBClusterBackupPolicyProps
    {
        /// <summary>Property backupRetentionPeriod: The number of days for which you can retain the backup data.</summary>
        [JsiiProperty(name: "backupRetentionPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object BackupRetentionPeriod
        {
            get;
        }

        /// <summary>Property dbInstanceId: The cluster ID.</summary>
        [JsiiProperty(name: "dbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbInstanceId
        {
            get;
        }

        /// <summary>Property preferredBackupPeriod: The backup cycle, which indicates the day of the week when the system regularly backs up data.</summary>
        /// <remarks>
        /// Separate multiple dates with commas (,).
        /// </remarks>
        [JsiiProperty(name: "preferredBackupPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PreferredBackupPeriod
        {
            get;
        }

        /// <summary>Property preferredBackupTime: The backup time window within which the backup task is performed.</summary>
        /// <remarks>
        /// The time is displayed in UTC. For example, 12:00Z-13:00Z indicates that the backup time window ranges from 12:00 (UTC) to 13:00 (UTC).
        /// </remarks>
        [JsiiProperty(name: "preferredBackupTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PreferredBackupTime
        {
            get;
        }

        /// <summary>Properties for defining a `EnterpriseDBClusterBackupPolicy`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-clickhouse-enterprisedbclusterbackuppolicy
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IEnterpriseDBClusterBackupPolicyProps), fullyQualifiedName: "@alicloud/ros-cdk-clickhouse.EnterpriseDBClusterBackupPolicyProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Clickhouse.IEnterpriseDBClusterBackupPolicyProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property backupRetentionPeriod: The number of days for which you can retain the backup data.</summary>
            [JsiiProperty(name: "backupRetentionPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object BackupRetentionPeriod
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property dbInstanceId: The cluster ID.</summary>
            [JsiiProperty(name: "dbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property preferredBackupPeriod: The backup cycle, which indicates the day of the week when the system regularly backs up data.</summary>
            /// <remarks>
            /// Separate multiple dates with commas (,).
            /// </remarks>
            [JsiiProperty(name: "preferredBackupPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PreferredBackupPeriod
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property preferredBackupTime: The backup time window within which the backup task is performed.</summary>
            /// <remarks>
            /// The time is displayed in UTC. For example, 12:00Z-13:00Z indicates that the backup time window ranges from 12:00 (UTC) to 13:00 (UTC).
            /// </remarks>
            [JsiiProperty(name: "preferredBackupTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PreferredBackupTime
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
