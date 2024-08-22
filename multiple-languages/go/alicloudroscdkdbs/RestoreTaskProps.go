package alicloudroscdkdbs


// Properties for defining a `RestoreTask`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dbs-restoretask
type RestoreTaskProps struct {
	// Property backupPlanId: The ID of the backup plan.
	BackupPlanId interface{} `field:"required" json:"backupPlanId" yaml:"backupPlanId"`
	// Property destinationEndpointInstanceType: The location of the database.
	//
	// Valid values:
	// - rds
	// - ecs
	// - express: a database connected over express connect, VPN Gateway, or smart gateway.
	// - agent: The database connected through the backup Gateway
	// - dds: apsaradb for MongoDB
	// - kvstore
	// - polardb
	// - drds
	// - dg: the database is directly connected through IP Address: Port.
	DestinationEndpointInstanceType interface{} `field:"required" json:"destinationEndpointInstanceType" yaml:"destinationEndpointInstanceType"`
	// Property restoreTaskName: The name of the restoration task.
	RestoreTaskName interface{} `field:"required" json:"restoreTaskName" yaml:"restoreTaskName"`
	// Property backupGatewayId: The ID of the backup gateway.
	//
	// NoteDestinationEndpointInstanceType if you set this parameter to agent, this parameter is required.
	BackupGatewayId interface{} `field:"optional" json:"backupGatewayId" yaml:"backupGatewayId"`
	// Property backupSetId: The ID of the full backup set used for restoration, which is mutually exclusive to RestoreTime.
	BackupSetId interface{} `field:"optional" json:"backupSetId" yaml:"backupSetId"`
	// Property destinationEndpointDatabaseName: The name of the RDS database.
	//
	// Note When the database type is PostgreSQL or MongoDB, this parameter is required.
	DestinationEndpointDatabaseName interface{} `field:"optional" json:"destinationEndpointDatabaseName" yaml:"destinationEndpointDatabaseName"`
	// Property destinationEndpointInstanceId: The ID of the ApsaraDB RDS instance to query.
	//
	// NoteDestinationEndpointInstanceType if the value is RDS, ECS, DDS, or Express, this parameter is required.
	DestinationEndpointInstanceId interface{} `field:"optional" json:"destinationEndpointInstanceId" yaml:"destinationEndpointInstanceId"`
	// Property destinationEndpointIp: The endpoint used to connect to the database.
	//
	// NoteDestinationEndpointInstanceType is express, agent, or other. This parameter is required.
	DestinationEndpointIp interface{} `field:"optional" json:"destinationEndpointIp" yaml:"destinationEndpointIp"`
	// Property destinationEndpointOracleSid: The SID of the Oracle instance.
	//
	// Note This parameter is required if the database type is Oracle.
	DestinationEndpointOracleSid interface{} `field:"optional" json:"destinationEndpointOracleSid" yaml:"destinationEndpointOracleSid"`
	// Property destinationEndpointPassword: The password that is used to log on to the RDS instance.
	//
	// Note You must specify this parameter when the database type is Redis, or the database location
	// is agent and the database type is MSSQL.
	DestinationEndpointPassword interface{} `field:"optional" json:"destinationEndpointPassword" yaml:"destinationEndpointPassword"`
	// Property destinationEndpointPort: The port that is used to access the database of the primary MySQL server.
	//
	// NoteDestinationEndpointInstanceType is in the format of express, agent, other, or ECS. This parameter is required.
	DestinationEndpointPort interface{} `field:"optional" json:"destinationEndpointPort" yaml:"destinationEndpointPort"`
	// Property destinationEndpointRegion: The region of the database.
	//
	// NoteDestinationEndpointInstanceType for RDS, ECS, DDS, Express, or Agent, this parameter is required.
	DestinationEndpointRegion interface{} `field:"optional" json:"destinationEndpointRegion" yaml:"destinationEndpointRegion"`
	// Property destinationEndpointUserName: The database account.
	//
	// Note You must specify this parameter when the database type is Redis, or the database location
	// is agent and the database type is MSSQL.
	DestinationEndpointUserName interface{} `field:"optional" json:"destinationEndpointUserName" yaml:"destinationEndpointUserName"`
	// Property duplicateConflict: The handling method for conflicts between objects with the same name.
	//
	// Valid values:
	// failure: The object with the same name fails (default).
	// renamenew: renames an object with the same name.
	DuplicateConflict interface{} `field:"optional" json:"duplicateConflict" yaml:"duplicateConflict"`
	// Property restoreDir: DestinationEndpointInstanceType this parameter is required when agent is specified and the backup schedule is MySQL.
	RestoreDir interface{} `field:"optional" json:"restoreDir" yaml:"restoreDir"`
	// Property restoreHome: Database Program Directory.
	RestoreHome interface{} `field:"optional" json:"restoreHome" yaml:"restoreHome"`
	// Property restoreObjects: Restore an object.
	//
	// Note For details, see the following RestoreObjects if the database is located in an agent, this parameter is required in other scenarios.
	RestoreObjects interface{} `field:"optional" json:"restoreObjects" yaml:"restoreObjects"`
	// Property restoreTime: The time when the fault is restored.
	//
	// Set the value to 1554560477000.
	RestoreTime interface{} `field:"optional" json:"restoreTime" yaml:"restoreTime"`
	// Property startTask: Start restore task after creating a recovery task.
	StartTask interface{} `field:"optional" json:"startTask" yaml:"startTask"`
}

