using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dbs
{
    /// <summary>Properties for defining a `ALIYUN::DBS::RestoreTask`.</summary>
    [JsiiInterface(nativeType: typeof(IRestoreTaskProps), fullyQualifiedName: "@alicloud/ros-cdk-dbs.RestoreTaskProps")]
    public interface IRestoreTaskProps
    {
        /// <summary>Property backupPlanId: The ID of the backup plan.</summary>
        [JsiiProperty(name: "backupPlanId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object BackupPlanId
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
        [JsiiProperty(name: "destinationEndpointInstanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DestinationEndpointInstanceType
        {
            get;
        }

        /// <summary>Property restoreTaskName: The name of the restoration task.</summary>
        [JsiiProperty(name: "restoreTaskName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RestoreTaskName
        {
            get;
        }

        /// <summary>Property backupGatewayId: The ID of the backup gateway.</summary>
        /// <remarks>
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

        /// <summary>Property backupSetId: The ID of the full backup set used for restoration, which is mutually exclusive to RestoreTime.</summary>
        [JsiiProperty(name: "backupSetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? BackupSetId
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
        [JsiiProperty(name: "destinationEndpointDatabaseName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DestinationEndpointDatabaseName
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
        [JsiiProperty(name: "destinationEndpointInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DestinationEndpointInstanceId
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
        [JsiiProperty(name: "destinationEndpointIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DestinationEndpointIp
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
        [JsiiProperty(name: "destinationEndpointOracleSid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DestinationEndpointOracleSid
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
        [JsiiProperty(name: "destinationEndpointPassword", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DestinationEndpointPassword
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
        [JsiiProperty(name: "destinationEndpointPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DestinationEndpointPort
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
        [JsiiProperty(name: "destinationEndpointRegion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DestinationEndpointRegion
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
        [JsiiProperty(name: "destinationEndpointUserName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DestinationEndpointUserName
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
        [JsiiProperty(name: "duplicateConflict", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DuplicateConflict
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property restoreDir: DestinationEndpointInstanceType this parameter is required when agent is specified and the backup schedule is MySQL.</summary>
        [JsiiProperty(name: "restoreDir", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RestoreDir
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property restoreHome: Database Program Directory.</summary>
        [JsiiProperty(name: "restoreHome", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RestoreHome
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
        [JsiiProperty(name: "restoreObjects", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RestoreObjects
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
        [JsiiProperty(name: "restoreTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RestoreTime
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
            [JsiiProperty(name: "backupPlanId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object BackupPlanId
            {
                get => GetInstanceProperty<object>()!;
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
            [JsiiProperty(name: "destinationEndpointInstanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DestinationEndpointInstanceType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property restoreTaskName: The name of the restoration task.</summary>
            [JsiiProperty(name: "restoreTaskName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RestoreTaskName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property backupGatewayId: The ID of the backup gateway.</summary>
            /// <remarks>
            /// NoteDestinationEndpointInstanceType if you set this parameter to agent, this parameter is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "backupGatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? BackupGatewayId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property backupSetId: The ID of the full backup set used for restoration, which is mutually exclusive to RestoreTime.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "backupSetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? BackupSetId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property destinationEndpointDatabaseName: The name of the RDS database.</summary>
            /// <remarks>
            /// Note When the database type is PostgreSQL or MongoDB, this parameter is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "destinationEndpointDatabaseName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DestinationEndpointDatabaseName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property destinationEndpointInstanceId: The ID of the ApsaraDB RDS instance to query.</summary>
            /// <remarks>
            /// NoteDestinationEndpointInstanceType if the value is RDS, ECS, DDS, or Express, this parameter is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "destinationEndpointInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DestinationEndpointInstanceId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property destinationEndpointIp: The endpoint used to connect to the database.</summary>
            /// <remarks>
            /// NoteDestinationEndpointInstanceType is express, agent, or other. This parameter is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "destinationEndpointIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DestinationEndpointIp
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property destinationEndpointOracleSid: The SID of the Oracle instance.</summary>
            /// <remarks>
            /// Note This parameter is required if the database type is Oracle.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "destinationEndpointOracleSid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DestinationEndpointOracleSid
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property destinationEndpointPassword: The password that is used to log on to the RDS instance.</summary>
            /// <remarks>
            /// Note You must specify this parameter when the database type is Redis, or the database location
            /// is agent and the database type is MSSQL.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "destinationEndpointPassword", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DestinationEndpointPassword
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property destinationEndpointPort: The port that is used to access the database of the primary MySQL server.</summary>
            /// <remarks>
            /// NoteDestinationEndpointInstanceType is in the format of express, agent, other, or ECS. This parameter is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "destinationEndpointPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DestinationEndpointPort
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property destinationEndpointRegion: The region of the database.</summary>
            /// <remarks>
            /// NoteDestinationEndpointInstanceType for RDS, ECS, DDS, Express, or Agent, this parameter is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "destinationEndpointRegion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DestinationEndpointRegion
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property destinationEndpointUserName: The database account.</summary>
            /// <remarks>
            /// Note You must specify this parameter when the database type is Redis, or the database location
            /// is agent and the database type is MSSQL.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "destinationEndpointUserName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DestinationEndpointUserName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property duplicateConflict: The handling method for conflicts between objects with the same name.</summary>
            /// <remarks>
            /// Valid values:
            /// failure: The object with the same name fails (default).
            /// renamenew: renames an object with the same name.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "duplicateConflict", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DuplicateConflict
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property restoreDir: DestinationEndpointInstanceType this parameter is required when agent is specified and the backup schedule is MySQL.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "restoreDir", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RestoreDir
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property restoreHome: Database Program Directory.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "restoreHome", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RestoreHome
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property restoreObjects: Restore an object.</summary>
            /// <remarks>
            /// Note For details, see the following RestoreObjects if the database is located in an agent, this parameter is required in other scenarios.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "restoreObjects", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RestoreObjects
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property restoreTime: The time when the fault is restored.</summary>
            /// <remarks>
            /// Set the value to 1554560477000.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "restoreTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RestoreTime
            {
                get => GetInstanceProperty<object?>();
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
