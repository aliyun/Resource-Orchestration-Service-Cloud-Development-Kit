using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Hbr
{
    /// <summary>Properties for defining a `OssBackupPlan`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-ossbackupplan
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IOssBackupPlanProps), fullyQualifiedName: "@alicloud/ros-cdk-hbr.OssBackupPlanProps")]
    public interface IOssBackupPlanProps
    {
        /// <summary>Property backupType: Backup type.</summary>
        /// <remarks>
        /// Valid values: COMPLETE.
        /// </remarks>
        [JsiiProperty(name: "backupType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object BackupType
        {
            get;
        }

        /// <summary>Property bucket: The name of OSS bucket.</summary>
        [JsiiProperty(name: "bucket", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Bucket
        {
            get;
        }

        /// <summary>Property planName: The name of the backup plan.</summary>
        /// <remarks>
        /// 1~64 characters, the backup plan name of each data source type in a single warehouse required to be unique.
        /// </remarks>
        [JsiiProperty(name: "planName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PlanName
        {
            get;
        }

        /// <summary>Property retention: Backup retention days, the minimum is 1.</summary>
        [JsiiProperty(name: "retention", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Retention
        {
            get;
        }

        /// <summary>Property schedule: Backup strategy.</summary>
        /// <remarks>
        /// Optional format: I|{startTime}|{interval}. It means to execute a backup task every {interval} starting from {startTime}. The backup task for the elapsed time will not be compensated. If the last backup task has not completed yet, the next backup task will not be triggered.
        /// </remarks>
        [JsiiProperty(name: "schedule", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Schedule
        {
            get;
        }

        /// <summary>Property vaultId: The ID of backup vault.</summary>
        [JsiiProperty(name: "vaultId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VaultId
        {
            get;
        }

        /// <summary>Property crossAccountRoleName: The role name created in the original account RAM backup by the cross account managed by the current account.</summary>
        [JsiiProperty(name: "crossAccountRoleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CrossAccountRoleName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property crossAccountType: The type of the cross account backup.</summary>
        /// <remarks>
        /// Valid values: SELF_ACCOUNT, CROSS_ACCOUNT.
        /// </remarks>
        [JsiiProperty(name: "crossAccountType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CrossAccountType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property crossAccountUserId: The original account ID of the cross account backup managed by the current account.</summary>
        [JsiiProperty(name: "crossAccountUserId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CrossAccountUserId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property disabled: Whether to disable the backup task.</summary>
        /// <remarks>
        /// Valid values: true, false.
        /// </remarks>
        [JsiiProperty(name: "disabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Disabled
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property prefix: Backup prefix.</summary>
        /// <remarks>
        /// Once specified, only objects with matching prefixes will be backed up.
        /// </remarks>
        [JsiiProperty(name: "prefix", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Prefix
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `OssBackupPlan`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-ossbackupplan
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IOssBackupPlanProps), fullyQualifiedName: "@alicloud/ros-cdk-hbr.OssBackupPlanProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Hbr.IOssBackupPlanProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property backupType: Backup type.</summary>
            /// <remarks>
            /// Valid values: COMPLETE.
            /// </remarks>
            [JsiiProperty(name: "backupType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object BackupType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property bucket: The name of OSS bucket.</summary>
            [JsiiProperty(name: "bucket", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Bucket
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property planName: The name of the backup plan.</summary>
            /// <remarks>
            /// 1~64 characters, the backup plan name of each data source type in a single warehouse required to be unique.
            /// </remarks>
            [JsiiProperty(name: "planName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PlanName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property retention: Backup retention days, the minimum is 1.</summary>
            [JsiiProperty(name: "retention", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Retention
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property schedule: Backup strategy.</summary>
            /// <remarks>
            /// Optional format: I|{startTime}|{interval}. It means to execute a backup task every {interval} starting from {startTime}. The backup task for the elapsed time will not be compensated. If the last backup task has not completed yet, the next backup task will not be triggered.
            /// </remarks>
            [JsiiProperty(name: "schedule", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Schedule
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property vaultId: The ID of backup vault.</summary>
            [JsiiProperty(name: "vaultId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VaultId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property crossAccountRoleName: The role name created in the original account RAM backup by the cross account managed by the current account.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "crossAccountRoleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CrossAccountRoleName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property crossAccountType: The type of the cross account backup.</summary>
            /// <remarks>
            /// Valid values: SELF_ACCOUNT, CROSS_ACCOUNT.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "crossAccountType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CrossAccountType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property crossAccountUserId: The original account ID of the cross account backup managed by the current account.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "crossAccountUserId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CrossAccountUserId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property disabled: Whether to disable the backup task.</summary>
            /// <remarks>
            /// Valid values: true, false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "disabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Disabled
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property prefix: Backup prefix.</summary>
            /// <remarks>
            /// Once specified, only objects with matching prefixes will be backed up.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "prefix", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Prefix
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
