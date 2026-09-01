using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dbs
{
    /// <summary>Properties for defining a `RestoreTask`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dbs-restoretask
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRestoreTaskProps), fullyQualifiedName: "@alicloud/ros-cdk-dbs.RestoreTaskProps")]
    public interface IRestoreTaskProps
    {
        /// <summary>Property backupPlanId: The ID of the backup plan.</summary>
        [JsiiProperty(name: "backupPlanId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object BackupPlanId
        {
            get;
        }

        /// <summary>Property destinationEndpointInstanceType: The type of the destination endpoint.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>RDS: an ApsaraDB RDS instance.</description>
        /// <description>ECS: a self-managed database hosted on an ECS instance.</description>
        /// <description>Express: a database connected over a leased line, VPN Gateway, or Smart Access
        /// Gateway.</description>
        /// <description>Agent: a database connected via a backup gateway.</description>
        /// <description>DDS: an ApsaraDB for MongoDB (DDS) instance.</description>
        /// <description>Other: a database connected over the internet by using a public IP address and
        /// port.</description>
        /// <description>dg: a self-managed database without a public endpoint, connected via Database
        /// Gateway.</description>
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

        /// <summary>Property destinationEndpointPassword: The password for the destination database account.</summary>
        /// <remarks>
        ///     This parameter is optional if the database engine is Redis, or if
        ///     <c>DestinationEndpointInstanceType</c> is set to <c>Agent</c> and the database engine is
        ///     MSSQL. In other scenarios, this parameter is required.
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

        /// <summary>Property destinationEndpointUserName: The username for the destination database account.</summary>
        /// <remarks>
        ///     This parameter is optional if the database engine is Redis, or if
        ///     <c>DestinationEndpointInstanceType</c> is set to <c>Agent</c> and the database engine is
        ///     MSSQL. In other scenarios, this parameter is required.
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

        /// <summary>Property restoreDir: The restore directory.</summary>
        /// <remarks>
        /// This parameter is required if
        /// DestinationEndpointInstanceType is set to <c>Agent</c> and the database type is MySQL.
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

        /// <summary>Property restoreObjects: The objects to restore.</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description>This parameter is optional if <c>DestinationEndpointInstanceType</c> is set to
        /// <c>Agent</c>. In other scenarios, this parameter is required.</description>
        /// <description>The value must be a JSON string in the following format: <c>[{ "DBName": "source_database_name", "NewDBName": "destination_database_name" }]</c></description>
        /// </list>
        ///
        ///     You can use this API operation to restore data only at the database level. To
        ///     restore data at the table level, log on to the console.
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

        /// <summary>Property restoreTime: The point-in-time for the restore, specified as a UNIX timestamp in milliseconds.</summary>
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

        /// <summary>Properties for defining a `RestoreTask`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dbs-restoretask
        /// </remarks>
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

            /// <summary>Property destinationEndpointInstanceType: The type of the destination endpoint.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>RDS: an ApsaraDB RDS instance.</description>
            /// <description>ECS: a self-managed database hosted on an ECS instance.</description>
            /// <description>Express: a database connected over a leased line, VPN Gateway, or Smart Access
            /// Gateway.</description>
            /// <description>Agent: a database connected via a backup gateway.</description>
            /// <description>DDS: an ApsaraDB for MongoDB (DDS) instance.</description>
            /// <description>Other: a database connected over the internet by using a public IP address and
            /// port.</description>
            /// <description>dg: a self-managed database without a public endpoint, connected via Database
            /// Gateway.</description>
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

            /// <summary>Property destinationEndpointPassword: The password for the destination database account.</summary>
            /// <remarks>
            ///     This parameter is optional if the database engine is Redis, or if
            ///     <c>DestinationEndpointInstanceType</c> is set to <c>Agent</c> and the database engine is
            ///     MSSQL. In other scenarios, this parameter is required.
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

            /// <summary>Property destinationEndpointUserName: The username for the destination database account.</summary>
            /// <remarks>
            ///     This parameter is optional if the database engine is Redis, or if
            ///     <c>DestinationEndpointInstanceType</c> is set to <c>Agent</c> and the database engine is
            ///     MSSQL. In other scenarios, this parameter is required.
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

            /// <summary>Property restoreDir: The restore directory.</summary>
            /// <remarks>
            /// This parameter is required if
            /// DestinationEndpointInstanceType is set to <c>Agent</c> and the database type is MySQL.
            /// </remarks>
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

            /// <summary>Property restoreObjects: The objects to restore.</summary>
            /// <remarks>
            /// <list type="bullet">
            /// <description>This parameter is optional if <c>DestinationEndpointInstanceType</c> is set to
            /// <c>Agent</c>. In other scenarios, this parameter is required.</description>
            /// <description>The value must be a JSON string in the following format: <c>[{ "DBName": "source_database_name", "NewDBName": "destination_database_name" }]</c></description>
            /// </list>
            ///
            ///     You can use this API operation to restore data only at the database level. To
            ///     restore data at the table level, log on to the console.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "restoreObjects", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RestoreObjects
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property restoreTime: The point-in-time for the restore, specified as a UNIX timestamp in milliseconds.</summary>
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
