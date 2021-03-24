using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dbs
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::DBS::RestoreTask`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-dbs.RosRestoreTaskProps")]
    public class RosRestoreTaskProps : AlibabaCloud.SDK.ROS.CDK.Dbs.IRosRestoreTaskProps
    {
        /// <remarks>
        /// <strong>Property</strong>: backupPlanId: The ID of the backup plan.
        /// </remarks>
        [JsiiProperty(name: "backupPlanId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string BackupPlanId
        {
            get;
            set;
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
        [JsiiProperty(name: "destinationEndpointInstanceType", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string DestinationEndpointInstanceType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: restoreTaskName: The name of the restoration task.
        /// </remarks>
        [JsiiProperty(name: "restoreTaskName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string RestoreTaskName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: backupGatewayId: The ID of the backup gateway.
        /// NoteDestinationEndpointInstanceType if you set this parameter to agent, this parameter is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "backupGatewayId", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? BackupGatewayId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: backupSetId: The ID of the full backup set used for restoration, which is mutually exclusive to
        /// RestoreTime.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "backupSetId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? BackupSetId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: destinationEndpointDatabaseName: The name of the RDS database.
        /// Note When the database type is PostgreSQL or MongoDB, this parameter is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "destinationEndpointDatabaseName", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? DestinationEndpointDatabaseName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: destinationEndpointInstanceId: The ID of the ApsaraDB RDS instance to query.
        /// NoteDestinationEndpointInstanceType if the value is RDS, ECS, DDS, or Express, this parameter is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "destinationEndpointInstanceId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? DestinationEndpointInstanceId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: destinationEndpointIp: The endpoint used to connect to the database.
        /// NoteDestinationEndpointInstanceType is express, agent, or other. This parameter is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "destinationEndpointIp", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? DestinationEndpointIp
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: destinationEndpointOracleSid: The SID of the Oracle instance.
        /// Note This parameter is required if the database type is Oracle.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "destinationEndpointOracleSid", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? DestinationEndpointOracleSid
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: destinationEndpointPassword: The password that is used to log on to the RDS instance.
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

        /// <remarks>
        /// <strong>Property</strong>: destinationEndpointPort: The port that is used to access the database of the primary MySQL server.
        /// NoteDestinationEndpointInstanceType is in the format of express, agent, other, or ECS. This parameter is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "destinationEndpointPort", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? DestinationEndpointPort
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: destinationEndpointRegion: The region of the database.
        /// NoteDestinationEndpointInstanceType for RDS, ECS, DDS, Express, or Agent, this parameter is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "destinationEndpointRegion", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? DestinationEndpointRegion
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: destinationEndpointUserName: The database account.
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

        /// <remarks>
        /// <strong>Property</strong>: duplicateConflict: The handling method for conflicts between objects with the same name. Valid values:
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

        /// <remarks>
        /// <strong>Property</strong>: restoreDir: DestinationEndpointInstanceType this parameter is required when agent is specified and the backup schedule is MySQL.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "restoreDir", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? RestoreDir
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: restoreHome: Database Program Directory.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "restoreHome", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? RestoreHome
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: restoreObjects: Restore an object.
        /// Note For details, see the following RestoreObjects if the database is located in an agent, this parameter is required in other scenarios.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "restoreObjects", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? RestoreObjects
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: restoreTime: The time when the fault is restored. Set the value to 1554560477000.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "restoreTime", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? RestoreTime
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: startTask: Start restore task after creating a recovery task.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "startTask", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? StartTask
        {
            get;
            set;
        }
    }
}
