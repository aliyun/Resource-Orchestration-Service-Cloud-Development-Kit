using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dbs
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::DBS::RestoreTask`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-dbs.RestoreTaskProps")]
    public class RestoreTaskProps : AlibabaCloud.SDK.ROS.CDK.Dbs.IRestoreTaskProps
    {
        /// <summary>Property backupPlanId: The ID of the backup plan.</summary>
        [JsiiProperty(name: "backupPlanId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string BackupPlanId
        {
            get;
            set;
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
        [JsiiProperty(name: "destinationEndpointInstanceType", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string DestinationEndpointInstanceType
        {
            get;
            set;
        }

        /// <summary>Property restoreTaskName: The name of the restoration task.</summary>
        [JsiiProperty(name: "restoreTaskName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string RestoreTaskName
        {
            get;
            set;
        }

        /// <summary>Property backupGatewayId: The ID of the backup gateway.</summary>
        /// <remarks>
        /// NoteDestinationEndpointInstanceType if you set this parameter to agent, this parameter is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "backupGatewayId", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? BackupGatewayId
        {
            get;
            set;
        }

        /// <summary>Property backupSetId: The ID of the full backup set used for restoration, which is mutually exclusive to RestoreTime.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "backupSetId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? BackupSetId
        {
            get;
            set;
        }

        /// <summary>Property destinationEndpointDatabaseName: The name of the RDS database.</summary>
        /// <remarks>
        /// Note When the database type is PostgreSQL or MongoDB, this parameter is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "destinationEndpointDatabaseName", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? DestinationEndpointDatabaseName
        {
            get;
            set;
        }

        /// <summary>Property destinationEndpointInstanceId: The ID of the ApsaraDB RDS instance to query.</summary>
        /// <remarks>
        /// NoteDestinationEndpointInstanceType if the value is RDS, ECS, DDS, or Express, this parameter is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "destinationEndpointInstanceId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? DestinationEndpointInstanceId
        {
            get;
            set;
        }

        /// <summary>Property destinationEndpointIp: The endpoint used to connect to the database.</summary>
        /// <remarks>
        /// NoteDestinationEndpointInstanceType is express, agent, or other. This parameter is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "destinationEndpointIp", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? DestinationEndpointIp
        {
            get;
            set;
        }

        /// <summary>Property destinationEndpointOracleSid: The SID of the Oracle instance.</summary>
        /// <remarks>
        /// Note This parameter is required if the database type is Oracle.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "destinationEndpointOracleSid", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? DestinationEndpointOracleSid
        {
            get;
            set;
        }

        /// <summary>Property destinationEndpointPassword: The password that is used to log on to the RDS instance.</summary>
        /// <remarks>
        /// Note You must specify this parameter when the database type is Redis, or the database location
        /// is agent and the database type is MSSQL.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "destinationEndpointPassword", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? DestinationEndpointPassword
        {
            get;
            set;
        }

        /// <summary>Property destinationEndpointPort: The port that is used to access the database of the primary MySQL server.</summary>
        /// <remarks>
        /// NoteDestinationEndpointInstanceType is in the format of express, agent, other, or ECS. This parameter is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "destinationEndpointPort", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? DestinationEndpointPort
        {
            get;
            set;
        }

        /// <summary>Property destinationEndpointRegion: The region of the database.</summary>
        /// <remarks>
        /// NoteDestinationEndpointInstanceType for RDS, ECS, DDS, Express, or Agent, this parameter is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "destinationEndpointRegion", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? DestinationEndpointRegion
        {
            get;
            set;
        }

        /// <summary>Property destinationEndpointUserName: The database account.</summary>
        /// <remarks>
        /// Note You must specify this parameter when the database type is Redis, or the database location
        /// is agent and the database type is MSSQL.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "destinationEndpointUserName", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? DestinationEndpointUserName
        {
            get;
            set;
        }

        /// <summary>Property duplicateConflict: The handling method for conflicts between objects with the same name.</summary>
        /// <remarks>
        /// Valid values:
        /// failure: The object with the same name fails (default).
        /// renamenew: renames an object with the same name.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "duplicateConflict", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? DuplicateConflict
        {
            get;
            set;
        }

        /// <summary>Property restoreDir: DestinationEndpointInstanceType this parameter is required when agent is specified and the backup schedule is MySQL.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "restoreDir", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? RestoreDir
        {
            get;
            set;
        }

        /// <summary>Property restoreHome: Database Program Directory.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "restoreHome", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? RestoreHome
        {
            get;
            set;
        }

        /// <summary>Property restoreObjects: Restore an object.</summary>
        /// <remarks>
        /// Note For details, see the following RestoreObjects if the database is located in an agent, this parameter is required in other scenarios.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "restoreObjects", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? RestoreObjects
        {
            get;
            set;
        }

        /// <summary>Property restoreTime: The time when the fault is restored.</summary>
        /// <remarks>
        /// Set the value to 1554560477000.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "restoreTime", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? RestoreTime
        {
            get;
            set;
        }

        /// <summary>Property startTask: Start restore task after creating a recovery task.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "startTask", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? StartTask
        {
            get;
            set;
        }
    }
}
