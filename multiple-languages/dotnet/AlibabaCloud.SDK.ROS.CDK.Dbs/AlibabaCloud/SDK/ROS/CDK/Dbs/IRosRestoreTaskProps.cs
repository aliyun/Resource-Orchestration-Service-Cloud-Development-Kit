using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dbs
{
    /// <summary>Properties for defining a `ALIYUN::DBS::RestoreTask`.</summary>
    [JsiiInterface(nativeType: typeof(IRosRestoreTaskProps), fullyQualifiedName: "@alicloud/ros-cdk-dbs.RosRestoreTaskProps")]
    public interface IRosRestoreTaskProps
    {
        /// <remarks>
        /// <strong>Property</strong>: backupPlanId: The ID of the backup plan.
        /// </remarks>
        [JsiiProperty(name: "backupPlanId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object BackupPlanId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: destinationEndpointInstanceType: The location of the database. Valid values:
        /// - rds
        /// - ecs
        /// - express: a database connected over express connect, VPN Gateway, or smart gateway.
        /// - agent: The database connected through the backup Gateway
        /// - dds: apsaradb for MongoDB
        /// - kvstore
        /// - polardb
        /// - drds
        /// - dg: the database is directly connected through IP Address: Port.
        /// </remarks>
        [JsiiProperty(name: "destinationEndpointInstanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DestinationEndpointInstanceType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: restoreTaskName: The name of the restoration task.
        /// </remarks>
        [JsiiProperty(name: "restoreTaskName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RestoreTaskName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: backupGatewayId: The ID of the backup gateway.
        /// NoteDestinationEndpointInstanceType if you set this parameter to agent, this parameter is required.
        /// </remarks>
        [JsiiProperty(name: "backupGatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? BackupGatewayId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: backupSetId: The ID of the full backup set used for restoration, which is mutually exclusive to
        /// RestoreTime.
        /// </remarks>
        [JsiiProperty(name: "backupSetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? BackupSetId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: destinationEndpointDatabaseName: The name of the RDS database.
        /// Note When the database type is PostgreSQL or MongoDB, this parameter is required.
        /// </remarks>
        [JsiiProperty(name: "destinationEndpointDatabaseName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DestinationEndpointDatabaseName
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: destinationEndpointInstanceId: The ID of the ApsaraDB RDS instance to query.
        /// NoteDestinationEndpointInstanceType if the value is RDS, ECS, DDS, or Express, this parameter is required.
        /// </remarks>
        [JsiiProperty(name: "destinationEndpointInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DestinationEndpointInstanceId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: destinationEndpointIp: The endpoint used to connect to the database.
        /// NoteDestinationEndpointInstanceType is express, agent, or other. This parameter is required.
        /// </remarks>
        [JsiiProperty(name: "destinationEndpointIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DestinationEndpointIp
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: destinationEndpointOracleSid: The SID of the Oracle instance.
        /// Note This parameter is required if the database type is Oracle.
        /// </remarks>
        [JsiiProperty(name: "destinationEndpointOracleSid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DestinationEndpointOracleSid
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: destinationEndpointPassword: The password that is used to log on to the RDS instance.
        /// Note You must specify this parameter when the database type is Redis, or the database location
        /// is agent and the database type is MSSQL.
        /// </remarks>
        [JsiiProperty(name: "destinationEndpointPassword", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DestinationEndpointPassword
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: destinationEndpointPort: The port that is used to access the database of the primary MySQL server.
        /// NoteDestinationEndpointInstanceType is in the format of express, agent, other, or ECS. This parameter is required.
        /// </remarks>
        [JsiiProperty(name: "destinationEndpointPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DestinationEndpointPort
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: destinationEndpointRegion: The region of the database.
        /// NoteDestinationEndpointInstanceType for RDS, ECS, DDS, Express, or Agent, this parameter is required.
        /// </remarks>
        [JsiiProperty(name: "destinationEndpointRegion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DestinationEndpointRegion
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: destinationEndpointUserName: The database account.
        /// Note You must specify this parameter when the database type is Redis, or the database location
        /// is agent and the database type is MSSQL.
        /// </remarks>
        [JsiiProperty(name: "destinationEndpointUserName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DestinationEndpointUserName
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: duplicateConflict: The handling method for conflicts between objects with the same name. Valid values:
        /// failure: The object with the same name fails (default).
        /// renamenew: renames an object with the same name.
        /// </remarks>
        [JsiiProperty(name: "duplicateConflict", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DuplicateConflict
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: restoreDir: DestinationEndpointInstanceType this parameter is required when agent is specified and the backup schedule is MySQL.
        /// </remarks>
        [JsiiProperty(name: "restoreDir", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RestoreDir
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: restoreHome: Database Program Directory.
        /// </remarks>
        [JsiiProperty(name: "restoreHome", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RestoreHome
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: restoreObjects: Restore an object.
        /// Note For details, see the following RestoreObjects if the database is located in an agent, this parameter is required in other scenarios.
        /// </remarks>
        [JsiiProperty(name: "restoreObjects", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RestoreObjects
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: restoreTime: The time when the fault is restored. Set the value to 1554560477000.
        /// </remarks>
        [JsiiProperty(name: "restoreTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RestoreTime
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: startTask: Start restore task after creating a recovery task.
        /// </remarks>
        [JsiiProperty(name: "startTask", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? StartTask
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::DBS::RestoreTask`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosRestoreTaskProps), fullyQualifiedName: "@alicloud/ros-cdk-dbs.RosRestoreTaskProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dbs.IRosRestoreTaskProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: backupPlanId: The ID of the backup plan.
            /// </remarks>
            [JsiiProperty(name: "backupPlanId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object BackupPlanId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: destinationEndpointInstanceType: The location of the database. Valid values:
            /// - rds
            /// - ecs
            /// - express: a database connected over express connect, VPN Gateway, or smart gateway.
            /// - agent: The database connected through the backup Gateway
            /// - dds: apsaradb for MongoDB
            /// - kvstore
            /// - polardb
            /// - drds
            /// - dg: the database is directly connected through IP Address: Port.
            /// </remarks>
            [JsiiProperty(name: "destinationEndpointInstanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DestinationEndpointInstanceType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: restoreTaskName: The name of the restoration task.
            /// </remarks>
            [JsiiProperty(name: "restoreTaskName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RestoreTaskName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: backupGatewayId: The ID of the backup gateway.
            /// NoteDestinationEndpointInstanceType if you set this parameter to agent, this parameter is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "backupGatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? BackupGatewayId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: backupSetId: The ID of the full backup set used for restoration, which is mutually exclusive to
            /// RestoreTime.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "backupSetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? BackupSetId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: destinationEndpointDatabaseName: The name of the RDS database.
            /// Note When the database type is PostgreSQL or MongoDB, this parameter is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "destinationEndpointDatabaseName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DestinationEndpointDatabaseName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: destinationEndpointInstanceId: The ID of the ApsaraDB RDS instance to query.
            /// NoteDestinationEndpointInstanceType if the value is RDS, ECS, DDS, or Express, this parameter is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "destinationEndpointInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DestinationEndpointInstanceId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: destinationEndpointIp: The endpoint used to connect to the database.
            /// NoteDestinationEndpointInstanceType is express, agent, or other. This parameter is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "destinationEndpointIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DestinationEndpointIp
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: destinationEndpointOracleSid: The SID of the Oracle instance.
            /// Note This parameter is required if the database type is Oracle.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "destinationEndpointOracleSid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DestinationEndpointOracleSid
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: destinationEndpointPassword: The password that is used to log on to the RDS instance.
            /// Note You must specify this parameter when the database type is Redis, or the database location
            /// is agent and the database type is MSSQL.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "destinationEndpointPassword", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DestinationEndpointPassword
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: destinationEndpointPort: The port that is used to access the database of the primary MySQL server.
            /// NoteDestinationEndpointInstanceType is in the format of express, agent, other, or ECS. This parameter is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "destinationEndpointPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DestinationEndpointPort
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: destinationEndpointRegion: The region of the database.
            /// NoteDestinationEndpointInstanceType for RDS, ECS, DDS, Express, or Agent, this parameter is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "destinationEndpointRegion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DestinationEndpointRegion
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: destinationEndpointUserName: The database account.
            /// Note You must specify this parameter when the database type is Redis, or the database location
            /// is agent and the database type is MSSQL.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "destinationEndpointUserName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DestinationEndpointUserName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: duplicateConflict: The handling method for conflicts between objects with the same name. Valid values:
            /// failure: The object with the same name fails (default).
            /// renamenew: renames an object with the same name.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "duplicateConflict", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DuplicateConflict
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: restoreDir: DestinationEndpointInstanceType this parameter is required when agent is specified and the backup schedule is MySQL.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "restoreDir", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RestoreDir
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: restoreHome: Database Program Directory.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "restoreHome", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RestoreHome
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: restoreObjects: Restore an object.
            /// Note For details, see the following RestoreObjects if the database is located in an agent, this parameter is required in other scenarios.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "restoreObjects", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RestoreObjects
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: restoreTime: The time when the fault is restored. Set the value to 1554560477000.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "restoreTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RestoreTime
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: startTask: Start restore task after creating a recovery task.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "startTask", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? StartTask
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
