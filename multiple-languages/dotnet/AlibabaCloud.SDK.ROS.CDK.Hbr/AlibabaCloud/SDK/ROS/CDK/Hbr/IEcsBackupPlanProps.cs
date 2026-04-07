using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Hbr
{
    /// <summary>Properties for defining a `EcsBackupPlan`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-ecsbackupplan
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IEcsBackupPlanProps), fullyQualifiedName: "@alicloud/ros-cdk-hbr.EcsBackupPlanProps")]
    public interface IEcsBackupPlanProps
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

        /// <summary>Property instanceId: The ID of ECS instance.</summary>
        /// <remarks>
        /// The ecs backup client must have been installed on the host.
        /// </remarks>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceId
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

        /// <summary>Property detail: The detail of the backup plan.</summary>
        [JsiiProperty(name: "detail", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Detail
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

        /// <summary>Property exclude: The exclude paths of the backup plan.</summary>
        [JsiiProperty(name: "exclude", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Exclude
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property include: The include paths of the backup plan.</summary>
        [JsiiProperty(name: "include", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Include
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property options: Windows operating system with application consistency using VSS, e.g: {"UseVSS":false}.</summary>
        [JsiiProperty(name: "options", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Options
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property paths: The paths of the backup plan.</summary>
        [JsiiProperty(name: "paths", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Paths
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property speedLimit: The speed limit of the backup plan.</summary>
        [JsiiProperty(name: "speedLimit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SpeedLimit
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `EcsBackupPlan`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-ecsbackupplan
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IEcsBackupPlanProps), fullyQualifiedName: "@alicloud/ros-cdk-hbr.EcsBackupPlanProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Hbr.IEcsBackupPlanProps
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

            /// <summary>Property instanceId: The ID of ECS instance.</summary>
            /// <remarks>
            /// The ecs backup client must have been installed on the host.
            /// </remarks>
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceId
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

            /// <summary>Property detail: The detail of the backup plan.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "detail", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? Detail
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

            /// <summary>Property exclude: The exclude paths of the backup plan.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "exclude", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Exclude
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property include: The include paths of the backup plan.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "include", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Include
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property options: Windows operating system with application consistency using VSS, e.g: {"UseVSS":false}.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "options", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? Options
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property paths: The paths of the backup plan.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "paths", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Paths
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property speedLimit: The speed limit of the backup plan.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "speedLimit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SpeedLimit
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
