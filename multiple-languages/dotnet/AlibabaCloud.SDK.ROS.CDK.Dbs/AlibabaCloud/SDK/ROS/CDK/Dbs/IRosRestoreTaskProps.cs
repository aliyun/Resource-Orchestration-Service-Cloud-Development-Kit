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
        [JsiiProperty(name: "backupPlanId", typeJson: "{\"primitive\":\"string\"}")]
        string BackupPlanId
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
        [JsiiProperty(name: "destinationEndpointInstanceType", typeJson: "{\"primitive\":\"string\"}")]
        string DestinationEndpointInstanceType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: restoreTaskName: The name of the restoration task.
        /// </remarks>
        [JsiiProperty(name: "restoreTaskName", typeJson: "{\"primitive\":\"string\"}")]
        string RestoreTaskName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: backupGatewayId: The ID of the backup gateway.
        /// NoteDestinationEndpointInstanceType if you set this parameter to agent, this parameter is required.
        /// </remarks>
        [JsiiProperty(name: "backupGatewayId", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? BackupGatewayId
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
        [JsiiProperty(name: "backupSetId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? BackupSetId
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
        [JsiiProperty(name: "destinationEndpointDatabaseName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? DestinationEndpointDatabaseName
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
        [JsiiProperty(name: "destinationEndpointInstanceId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? DestinationEndpointInstanceId
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
        [JsiiProperty(name: "destinationEndpointIp", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? DestinationEndpointIp
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
        [JsiiProperty(name: "destinationEndpointOracleSid", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? DestinationEndpointOracleSid
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
        [JsiiProperty(name: "destinationEndpointPassword", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? DestinationEndpointPassword
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
        [JsiiProperty(name: "destinationEndpointPort", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? DestinationEndpointPort
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
        [JsiiProperty(name: "destinationEndpointRegion", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? DestinationEndpointRegion
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
        [JsiiProperty(name: "destinationEndpointUserName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? DestinationEndpointUserName
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
        [JsiiProperty(name: "duplicateConflict", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? DuplicateConflict
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: restoreDir: DestinationEndpointInstanceType this parameter is required when agent is specified and the backup schedule is MySQL.
        /// </remarks>
        [JsiiProperty(name: "restoreDir", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? RestoreDir
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: restoreHome: Database Program Directory.
        /// </remarks>
        [JsiiProperty(name: "restoreHome", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? RestoreHome
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
        [JsiiProperty(name: "restoreObjects", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? RestoreObjects
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: restoreTime: The time when the fault is restored. Set the value to 1554560477000.
        /// </remarks>
        [JsiiProperty(name: "restoreTime", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? RestoreTime
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
            [JsiiProperty(name: "backupPlanId", typeJson: "{\"primitive\":\"string\"}")]
            public string BackupPlanId
            {
                get => GetInstanceProperty<string>()!;
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
            [JsiiProperty(name: "destinationEndpointInstanceType", typeJson: "{\"primitive\":\"string\"}")]
            public string DestinationEndpointInstanceType
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: restoreTaskName: The name of the restoration task.
            /// </remarks>
            [JsiiProperty(name: "restoreTaskName", typeJson: "{\"primitive\":\"string\"}")]
            public string RestoreTaskName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: backupGatewayId: The ID of the backup gateway.
            /// NoteDestinationEndpointInstanceType if you set this parameter to agent, this parameter is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "backupGatewayId", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? BackupGatewayId
            {
                get => GetInstanceProperty<double?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: backupSetId: The ID of the full backup set used for restoration, which is mutually exclusive to
            /// RestoreTime.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "backupSetId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? BackupSetId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: destinationEndpointDatabaseName: The name of the RDS database.
            /// Note When the database type is PostgreSQL or MongoDB, this parameter is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "destinationEndpointDatabaseName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? DestinationEndpointDatabaseName
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: destinationEndpointInstanceId: The ID of the ApsaraDB RDS instance to query.
            /// NoteDestinationEndpointInstanceType if the value is RDS, ECS, DDS, or Express, this parameter is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "destinationEndpointInstanceId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? DestinationEndpointInstanceId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: destinationEndpointIp: The endpoint used to connect to the database.
            /// NoteDestinationEndpointInstanceType is express, agent, or other. This parameter is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "destinationEndpointIp", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? DestinationEndpointIp
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: destinationEndpointOracleSid: The SID of the Oracle instance.
            /// Note This parameter is required if the database type is Oracle.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "destinationEndpointOracleSid", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? DestinationEndpointOracleSid
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: destinationEndpointPassword: The password that is used to log on to the RDS instance.
            /// Note You must specify this parameter when the database type is Redis, or the database location
            /// is agent and the database type is MSSQL.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "destinationEndpointPassword", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? DestinationEndpointPassword
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: destinationEndpointPort: The port that is used to access the database of the primary MySQL server.
            /// NoteDestinationEndpointInstanceType is in the format of express, agent, other, or ECS. This parameter is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "destinationEndpointPort", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? DestinationEndpointPort
            {
                get => GetInstanceProperty<double?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: destinationEndpointRegion: The region of the database.
            /// NoteDestinationEndpointInstanceType for RDS, ECS, DDS, Express, or Agent, this parameter is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "destinationEndpointRegion", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? DestinationEndpointRegion
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: destinationEndpointUserName: The database account.
            /// Note You must specify this parameter when the database type is Redis, or the database location
            /// is agent and the database type is MSSQL.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "destinationEndpointUserName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? DestinationEndpointUserName
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: duplicateConflict: The handling method for conflicts between objects with the same name. Valid values:
            /// failure: The object with the same name fails (default).
            /// renamenew: renames an object with the same name.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "duplicateConflict", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? DuplicateConflict
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: restoreDir: DestinationEndpointInstanceType this parameter is required when agent is specified and the backup schedule is MySQL.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "restoreDir", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? RestoreDir
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: restoreHome: Database Program Directory.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "restoreHome", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? RestoreHome
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: restoreObjects: Restore an object.
            /// Note For details, see the following RestoreObjects if the database is located in an agent, this parameter is required in other scenarios.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "restoreObjects", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? RestoreObjects
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: restoreTime: The time when the fault is restored. Set the value to 1554560477000.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "restoreTime", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? RestoreTime
            {
                get => GetInstanceProperty<double?>();
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
