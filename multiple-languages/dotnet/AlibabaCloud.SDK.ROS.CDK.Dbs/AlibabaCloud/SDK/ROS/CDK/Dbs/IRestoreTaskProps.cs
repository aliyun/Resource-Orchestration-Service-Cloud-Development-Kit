using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dbs
{
    /// <summary>Properties for defining a `ALIYUN::DBS::RestoreTask`.</summary>
    [JsiiInterface(nativeType: typeof(IRestoreTaskProps), fullyQualifiedName: "@alicloud/ros-cdk-dbs.RestoreTaskProps")]
    public interface IRestoreTaskProps
    {
        /// <summary>Property backupPlanId: The ID of the backup plan.</summary>
        [JsiiProperty(name: "backupPlanId", typeJson: "{\"primitive\":\"string\"}")]
        string BackupPlanId
        {
            get;
        }

        /// <summary>Property destinationEndpointInstanceType: The location of the database.</summary>
        /// <remarks>
        /// Valid values:
        /// 
        /// <list type="bullet">
        /// <description>rds</description>
        /// <description>ecs</description>
        /// <description>express: a database connected over express connect, VPN Gateway, or smart gateway.</description>
        /// <description>agent: The database connected through the backup Gateway</description>
        /// <description>dds: apsaradb for MongoDB</description>
        /// <description>kvstore</description>
        /// <description>polardb</description>
        /// <description>drds</description>
        /// <description>dg: the database is directly connected through IP Address: Port.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "destinationEndpointInstanceType", typeJson: "{\"primitive\":\"string\"}")]
        string DestinationEndpointInstanceType
        {
            get;
        }

        /// <summary>Property restoreTaskName: The name of the restoration task.</summary>
        [JsiiProperty(name: "restoreTaskName", typeJson: "{\"primitive\":\"string\"}")]
        string RestoreTaskName
        {
            get;
        }

        /// <summary>Property backupGatewayId: The ID of the backup gateway.</summary>
        /// <remarks>
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

        /// <summary>Property backupSetId: The ID of the full backup set used for restoration, which is mutually exclusive to RestoreTime.</summary>
        [JsiiProperty(name: "backupSetId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? BackupSetId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property destinationEndpointDatabaseName: The name of the RDS database.</summary>
        /// <remarks>
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

        /// <summary>Property destinationEndpointInstanceId: The ID of the ApsaraDB RDS instance to query.</summary>
        /// <remarks>
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

        /// <summary>Property destinationEndpointIp: The endpoint used to connect to the database.</summary>
        /// <remarks>
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

        /// <summary>Property destinationEndpointOracleSid: The SID of the Oracle instance.</summary>
        /// <remarks>
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

        /// <summary>Property destinationEndpointPassword: The password that is used to log on to the RDS instance.</summary>
        /// <remarks>
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

        /// <summary>Property destinationEndpointPort: The port that is used to access the database of the primary MySQL server.</summary>
        /// <remarks>
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

        /// <summary>Property destinationEndpointRegion: The region of the database.</summary>
        /// <remarks>
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

        /// <summary>Property destinationEndpointUserName: The database account.</summary>
        /// <remarks>
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

        /// <summary>Property duplicateConflict: The handling method for conflicts between objects with the same name.</summary>
        /// <remarks>
        /// Valid values:
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

        /// <summary>Property restoreDir: DestinationEndpointInstanceType this parameter is required when agent is specified and the backup schedule is MySQL.</summary>
        [JsiiProperty(name: "restoreDir", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? RestoreDir
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property restoreHome: Database Program Directory.</summary>
        [JsiiProperty(name: "restoreHome", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? RestoreHome
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property restoreObjects: Restore an object.</summary>
        /// <remarks>
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

        /// <summary>Property restoreTime: The time when the fault is restored.</summary>
        /// <remarks>
        /// Set the value to 1554560477000.
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

        /// <summary>Property startTask: Start restore task after creating a recovery task.</summary>
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
        [JsiiTypeProxy(nativeType: typeof(IRestoreTaskProps), fullyQualifiedName: "@alicloud/ros-cdk-dbs.RestoreTaskProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dbs.IRestoreTaskProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property backupPlanId: The ID of the backup plan.</summary>
            [JsiiProperty(name: "backupPlanId", typeJson: "{\"primitive\":\"string\"}")]
            public string BackupPlanId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property destinationEndpointInstanceType: The location of the database.</summary>
            /// <remarks>
            /// Valid values:
            /// 
            /// <list type="bullet">
            /// <description>rds</description>
            /// <description>ecs</description>
            /// <description>express: a database connected over express connect, VPN Gateway, or smart gateway.</description>
            /// <description>agent: The database connected through the backup Gateway</description>
            /// <description>dds: apsaradb for MongoDB</description>
            /// <description>kvstore</description>
            /// <description>polardb</description>
            /// <description>drds</description>
            /// <description>dg: the database is directly connected through IP Address: Port.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "destinationEndpointInstanceType", typeJson: "{\"primitive\":\"string\"}")]
            public string DestinationEndpointInstanceType
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property restoreTaskName: The name of the restoration task.</summary>
            [JsiiProperty(name: "restoreTaskName", typeJson: "{\"primitive\":\"string\"}")]
            public string RestoreTaskName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property backupGatewayId: The ID of the backup gateway.</summary>
            /// <remarks>
            /// NoteDestinationEndpointInstanceType if you set this parameter to agent, this parameter is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "backupGatewayId", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? BackupGatewayId
            {
                get => GetInstanceProperty<double?>();
            }

            /// <summary>Property backupSetId: The ID of the full backup set used for restoration, which is mutually exclusive to RestoreTime.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "backupSetId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? BackupSetId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property destinationEndpointDatabaseName: The name of the RDS database.</summary>
            /// <remarks>
            /// Note When the database type is PostgreSQL or MongoDB, this parameter is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "destinationEndpointDatabaseName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? DestinationEndpointDatabaseName
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property destinationEndpointInstanceId: The ID of the ApsaraDB RDS instance to query.</summary>
            /// <remarks>
            /// NoteDestinationEndpointInstanceType if the value is RDS, ECS, DDS, or Express, this parameter is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "destinationEndpointInstanceId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? DestinationEndpointInstanceId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property destinationEndpointIp: The endpoint used to connect to the database.</summary>
            /// <remarks>
            /// NoteDestinationEndpointInstanceType is express, agent, or other. This parameter is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "destinationEndpointIp", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? DestinationEndpointIp
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property destinationEndpointOracleSid: The SID of the Oracle instance.</summary>
            /// <remarks>
            /// Note This parameter is required if the database type is Oracle.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "destinationEndpointOracleSid", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? DestinationEndpointOracleSid
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property destinationEndpointPassword: The password that is used to log on to the RDS instance.</summary>
            /// <remarks>
            /// Note You must specify this parameter when the database type is Redis, or the database location
            /// is agent and the database type is MSSQL.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "destinationEndpointPassword", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? DestinationEndpointPassword
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property destinationEndpointPort: The port that is used to access the database of the primary MySQL server.</summary>
            /// <remarks>
            /// NoteDestinationEndpointInstanceType is in the format of express, agent, other, or ECS. This parameter is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "destinationEndpointPort", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? DestinationEndpointPort
            {
                get => GetInstanceProperty<double?>();
            }

            /// <summary>Property destinationEndpointRegion: The region of the database.</summary>
            /// <remarks>
            /// NoteDestinationEndpointInstanceType for RDS, ECS, DDS, Express, or Agent, this parameter is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "destinationEndpointRegion", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? DestinationEndpointRegion
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property destinationEndpointUserName: The database account.</summary>
            /// <remarks>
            /// Note You must specify this parameter when the database type is Redis, or the database location
            /// is agent and the database type is MSSQL.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "destinationEndpointUserName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? DestinationEndpointUserName
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property duplicateConflict: The handling method for conflicts between objects with the same name.</summary>
            /// <remarks>
            /// Valid values:
            /// failure: The object with the same name fails (default).
            /// renamenew: renames an object with the same name.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "duplicateConflict", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? DuplicateConflict
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property restoreDir: DestinationEndpointInstanceType this parameter is required when agent is specified and the backup schedule is MySQL.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "restoreDir", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? RestoreDir
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property restoreHome: Database Program Directory.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "restoreHome", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? RestoreHome
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property restoreObjects: Restore an object.</summary>
            /// <remarks>
            /// Note For details, see the following RestoreObjects if the database is located in an agent, this parameter is required in other scenarios.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "restoreObjects", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? RestoreObjects
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property restoreTime: The time when the fault is restored.</summary>
            /// <remarks>
            /// Set the value to 1554560477000.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "restoreTime", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? RestoreTime
            {
                get => GetInstanceProperty<double?>();
            }

            /// <summary>Property startTask: Start restore task after creating a recovery task.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "startTask", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? StartTask
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
