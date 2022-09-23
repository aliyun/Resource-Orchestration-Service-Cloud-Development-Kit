using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Rds
{
    /// <summary>Properties for defining a `ALIYUN::RDS::MigrateTask`.</summary>
    [JsiiInterface(nativeType: typeof(IMigrateTaskProps), fullyQualifiedName: "@alicloud/ros-cdk-rds.MigrateTaskProps")]
    public interface IMigrateTaskProps
    {
        /// <summary>Property backupMode: The type of the migration task.</summary>
        /// <remarks>
        /// Valid values:
        /// FULL: specifies that full backup files are used to restore data.
        /// UPDF: specifies that incremental backup files or log files are used to restore incremental data.
        /// </remarks>
        [JsiiProperty(name: "backupMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object BackupMode
        {
            get;
        }

        /// <summary>Property dbInstanceId: The ID of the instance.</summary>
        [JsiiProperty(name: "dbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbInstanceId
        {
            get;
        }

        /// <summary>Property dbName: The name of the database that you want to restore.</summary>
        [JsiiProperty(name: "dbName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbName
        {
            get;
        }

        /// <summary>Property isOnlineDb: Specifies whether to bring the restored database online for user access.</summary>
        /// <remarks>
        /// Note The value for SQL Server 2008 R2 is fixed to True.
        /// </remarks>
        [JsiiProperty(name: "isOnlineDb", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object IsOnlineDb
        {
            get;
        }

        /// <summary>Property checkDbMode: The consistency check method of the database.</summary>
        /// <remarks>
        /// Valid values:
        /// SyncExecuteDBCheck: synchronous database check
        /// AsyncExecuteDBCheck: asynchronous database check
        /// Default value: AsyncExecuteDBCheck (compatible with SQL Server 2008 R2).
        /// Note When IsOnlineDB is set to True, this value is valid.
        /// </remarks>
        [JsiiProperty(name: "checkDbMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CheckDbMode
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ossObjectPositions: The information of the backup file in the OSS bucket.</summary>
        /// <remarks>
        /// The values consist of three parts that are separated by colons (:):
        /// The endpoint of the OSS bucket: oss-ap-southeast-1.aliyuncs.com.
        /// The name of the OSS bucket: rdsmssqlsingapore.
        /// The key of the backup file in the OSS bucket: autotest_2008R2_TestMigration_FULL.bak.
        /// Note
        /// This parameter is optional for instances that run SQL Server 2008 R2.
        /// This parameter is required for instances that run a database engine later than SQL
        /// Server 2008 R2.
        /// </remarks>
        [JsiiProperty(name: "ossObjectPositions", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? OssObjectPositions
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ossUrls: The shared URL of the backup file in the OSS bucket.</summary>
        /// <remarks>
        /// The URL must be encoded.
        /// If you specify multiple URLs, separate them with vertical bars (|) and then encode
        /// them.
        /// Note This parameter must be entered for instances that run SQL Server 2008 R2.
        /// </remarks>
        [JsiiProperty(name: "ossUrls", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? OssUrls
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::RDS::MigrateTask`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IMigrateTaskProps), fullyQualifiedName: "@alicloud/ros-cdk-rds.MigrateTaskProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Rds.IMigrateTaskProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property backupMode: The type of the migration task.</summary>
            /// <remarks>
            /// Valid values:
            /// FULL: specifies that full backup files are used to restore data.
            /// UPDF: specifies that incremental backup files or log files are used to restore incremental data.
            /// </remarks>
            [JsiiProperty(name: "backupMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object BackupMode
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property dbInstanceId: The ID of the instance.</summary>
            [JsiiProperty(name: "dbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property dbName: The name of the database that you want to restore.</summary>
            [JsiiProperty(name: "dbName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property isOnlineDb: Specifies whether to bring the restored database online for user access.</summary>
            /// <remarks>
            /// Note The value for SQL Server 2008 R2 is fixed to True.
            /// </remarks>
            [JsiiProperty(name: "isOnlineDb", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object IsOnlineDb
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property checkDbMode: The consistency check method of the database.</summary>
            /// <remarks>
            /// Valid values:
            /// SyncExecuteDBCheck: synchronous database check
            /// AsyncExecuteDBCheck: asynchronous database check
            /// Default value: AsyncExecuteDBCheck (compatible with SQL Server 2008 R2).
            /// Note When IsOnlineDB is set to True, this value is valid.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "checkDbMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CheckDbMode
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ossObjectPositions: The information of the backup file in the OSS bucket.</summary>
            /// <remarks>
            /// The values consist of three parts that are separated by colons (:):
            /// The endpoint of the OSS bucket: oss-ap-southeast-1.aliyuncs.com.
            /// The name of the OSS bucket: rdsmssqlsingapore.
            /// The key of the backup file in the OSS bucket: autotest_2008R2_TestMigration_FULL.bak.
            /// Note
            /// This parameter is optional for instances that run SQL Server 2008 R2.
            /// This parameter is required for instances that run a database engine later than SQL
            /// Server 2008 R2.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ossObjectPositions", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OssObjectPositions
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ossUrls: The shared URL of the backup file in the OSS bucket.</summary>
            /// <remarks>
            /// The URL must be encoded.
            /// If you specify multiple URLs, separate them with vertical bars (|) and then encode
            /// them.
            /// Note This parameter must be entered for instances that run SQL Server 2008 R2.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ossUrls", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OssUrls
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
