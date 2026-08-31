package alicloudroscdkdbs


// Properties for defining a `RestoreTask`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dbs-restoretask
type RestoreTaskProps struct {
	// Property backupPlanId: The ID of the backup plan.
	BackupPlanId interface{} `field:"required" json:"backupPlanId" yaml:"backupPlanId"`
	// Property destinationEndpointInstanceType: The type of the destination endpoint.
	//
	// Valid values:
	// - RDS: an ApsaraDB RDS instance.
	// - ECS: a self-managed database hosted on an ECS instance.
	// - Express: a database connected over a leased line, VPN Gateway, or Smart Access
	// Gateway.
	// - Agent: a database connected via a backup gateway.
	// - DDS: an ApsaraDB for MongoDB (DDS) instance.
	// - Other: a database connected over the internet by using a public IP address and
	// port.
	// - dg: a self-managed database without a public endpoint, connected via Database
	// Gateway.
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
	// Property destinationEndpointPassword: The password for the destination database account.
	//
	// > This parameter is optional if the database engine is Redis, or if
	// `DestinationEndpointInstanceType` is set to `Agent` and the database engine is
	// MSSQL. In other scenarios, this parameter is required.
	DestinationEndpointPassword interface{} `field:"optional" json:"destinationEndpointPassword" yaml:"destinationEndpointPassword"`
	// Property destinationEndpointPort: The port that is used to access the database of the primary MySQL server.
	//
	// NoteDestinationEndpointInstanceType is in the format of express, agent, other, or ECS. This parameter is required.
	DestinationEndpointPort interface{} `field:"optional" json:"destinationEndpointPort" yaml:"destinationEndpointPort"`
	// Property destinationEndpointRegion: The region of the database.
	//
	// NoteDestinationEndpointInstanceType for RDS, ECS, DDS, Express, or Agent, this parameter is required.
	DestinationEndpointRegion interface{} `field:"optional" json:"destinationEndpointRegion" yaml:"destinationEndpointRegion"`
	// Property destinationEndpointUserName: The username for the destination database account.
	//
	// > This parameter is optional if the database engine is Redis, or if
	// `DestinationEndpointInstanceType` is set to `Agent` and the database engine is
	// MSSQL. In other scenarios, this parameter is required.
	DestinationEndpointUserName interface{} `field:"optional" json:"destinationEndpointUserName" yaml:"destinationEndpointUserName"`
	// Property duplicateConflict: The handling method for conflicts between objects with the same name.
	//
	// Valid values:
	// failure: The object with the same name fails (default).
	// renamenew: renames an object with the same name.
	DuplicateConflict interface{} `field:"optional" json:"duplicateConflict" yaml:"duplicateConflict"`
	// Property restoreDir: The restore directory.
	//
	// This parameter is required if
	// DestinationEndpointInstanceType is set to `Agent` and the database type is MySQL.
	RestoreDir interface{} `field:"optional" json:"restoreDir" yaml:"restoreDir"`
	// Property restoreHome: Database Program Directory.
	RestoreHome interface{} `field:"optional" json:"restoreHome" yaml:"restoreHome"`
	// Property restoreObjects: The objects to restore.
	//
	// - This parameter is optional if `DestinationEndpointInstanceType` is set to
	// `Agent`. In other scenarios, this parameter is required.
	// - The value must be a JSON string in the following format: `[{ "DBName":
	// "source_database_name", "NewDBName": "destination_database_name" }]`
	// > You can use this API operation to restore data only at the database level. To
	// restore data at the table level, log on to the console.
	RestoreObjects interface{} `field:"optional" json:"restoreObjects" yaml:"restoreObjects"`
	// Property restoreTime: The point-in-time for the restore, specified as a UNIX timestamp in milliseconds.
	RestoreTime interface{} `field:"optional" json:"restoreTime" yaml:"restoreTime"`
	// Property startTask: Start restore task after creating a recovery task.
	StartTask interface{} `field:"optional" json:"startTask" yaml:"startTask"`
}

