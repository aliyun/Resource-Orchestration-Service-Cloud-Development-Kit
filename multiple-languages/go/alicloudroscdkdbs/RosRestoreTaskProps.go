package alicloudroscdkdbs


// Properties for defining a `RosRestoreTask`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dbs-restoretask
type RosRestoreTaskProps struct {
	BackupPlanId interface{} `field:"required" json:"backupPlanId" yaml:"backupPlanId"`
	DestinationEndpointInstanceType interface{} `field:"required" json:"destinationEndpointInstanceType" yaml:"destinationEndpointInstanceType"`
	RestoreTaskName interface{} `field:"required" json:"restoreTaskName" yaml:"restoreTaskName"`
	BackupGatewayId interface{} `field:"optional" json:"backupGatewayId" yaml:"backupGatewayId"`
	BackupSetId interface{} `field:"optional" json:"backupSetId" yaml:"backupSetId"`
	DestinationEndpointDatabaseName interface{} `field:"optional" json:"destinationEndpointDatabaseName" yaml:"destinationEndpointDatabaseName"`
	DestinationEndpointInstanceId interface{} `field:"optional" json:"destinationEndpointInstanceId" yaml:"destinationEndpointInstanceId"`
	DestinationEndpointIp interface{} `field:"optional" json:"destinationEndpointIp" yaml:"destinationEndpointIp"`
	DestinationEndpointOracleSid interface{} `field:"optional" json:"destinationEndpointOracleSid" yaml:"destinationEndpointOracleSid"`
	DestinationEndpointPassword interface{} `field:"optional" json:"destinationEndpointPassword" yaml:"destinationEndpointPassword"`
	DestinationEndpointPort interface{} `field:"optional" json:"destinationEndpointPort" yaml:"destinationEndpointPort"`
	DestinationEndpointRegion interface{} `field:"optional" json:"destinationEndpointRegion" yaml:"destinationEndpointRegion"`
	DestinationEndpointUserName interface{} `field:"optional" json:"destinationEndpointUserName" yaml:"destinationEndpointUserName"`
	DuplicateConflict interface{} `field:"optional" json:"duplicateConflict" yaml:"duplicateConflict"`
	RestoreDir interface{} `field:"optional" json:"restoreDir" yaml:"restoreDir"`
	RestoreHome interface{} `field:"optional" json:"restoreHome" yaml:"restoreHome"`
	RestoreObjects interface{} `field:"optional" json:"restoreObjects" yaml:"restoreObjects"`
	RestoreTime interface{} `field:"optional" json:"restoreTime" yaml:"restoreTime"`
	StartTask interface{} `field:"optional" json:"startTask" yaml:"startTask"`
}

