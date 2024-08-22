package alicloudroscdkdts


// Properties for defining a `MigrationJob2`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dts-migrationjob2
type MigrationJob2Props struct {
	// Property dataInitialization: Specifies whether to perform full data migration or full data synchronization.
	//
	// Default value: **true**. Valid values: **true** and **false**.
	DataInitialization interface{} `field:"required" json:"dataInitialization" yaml:"dataInitialization"`
	// Property dataSynchronization: Specifies whether to perform incremental data migration or incremental data synchronization.
	//
	// Default value: **false**. Valid values: **true** and **false**.
	DataSynchronization interface{} `field:"required" json:"dataSynchronization" yaml:"dataSynchronization"`
	// Property dbList: The objects that you want to migrate or synchronize.
	DbList interface{} `field:"required" json:"dbList" yaml:"dbList"`
	// Property destinationEndpoint: Destination instance configuration.
	DestinationEndpoint interface{} `field:"required" json:"destinationEndpoint" yaml:"destinationEndpoint"`
	// Property dtsJobName: The name of the DTS instance.
	DtsJobName interface{} `field:"required" json:"dtsJobName" yaml:"dtsJobName"`
	// Property sourceEndpoint: Source instance configuration.
	SourceEndpoint interface{} `field:"required" json:"sourceEndpoint" yaml:"sourceEndpoint"`
	// Property structureInitialization: Specifies whether to perform schema migration or schema synchronization.
	//
	// Default value: true. Valid values: **true** and **false**.
	StructureInitialization interface{} `field:"required" json:"structureInitialization" yaml:"structureInitialization"`
	// Property checkpoint: The start offset of incremental data migration or synchronization.
	//
	// This value is a UNIX timestamp representing the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC.
	Checkpoint interface{} `field:"optional" json:"checkpoint" yaml:"checkpoint"`
	// Property dataCheckConfigure: The data verification task for a data migration or synchronization instance.
	DataCheckConfigure interface{} `field:"optional" json:"dataCheckConfigure" yaml:"dataCheckConfigure"`
	// Property dedicatedClusterId: The ID of the DTS dedicated cluster on which the task runs.
	DedicatedClusterId interface{} `field:"optional" json:"dedicatedClusterId" yaml:"dedicatedClusterId"`
	// Property delayNotice: Specifies whether to monitor the task latency.
	//
	// Valid values: **true** and **false**.
	DelayNotice interface{} `field:"optional" json:"delayNotice" yaml:"delayNotice"`
	// Property delayPhone: The mobile numbers that receive latency-related alerts.
	//
	// Separate multiple mobile numbers with commas (,).
	// **Note**: This parameter is available only for users of the China site (aliyun.com). Only mobile numbers in the Chinese mainland are supported. You can specify up to 10 mobile numbers. Users of the international site (alibabacloud.com) cannot receive alerts by using mobile numbers, but can configure alert rules for DTS tasks in the CloudMonitor console.
	DelayPhone interface{} `field:"optional" json:"delayPhone" yaml:"delayPhone"`
	// Property delayRuleTime: The threshold for latency alerts.
	//
	// Unit: seconds. You can set the threshold based on your business requirements. To prevent jitters caused by network and database overloads, we recommend that you set the threshold to more than 10 seconds.
	DelayRuleTime interface{} `field:"optional" json:"delayRuleTime" yaml:"delayRuleTime"`
	// Property disasterRecoveryJob: Specifies whether the instance is a disaster recovery instance.
	//
	// Valid values: **true** and **false**.
	DisasterRecoveryJob interface{} `field:"optional" json:"disasterRecoveryJob" yaml:"disasterRecoveryJob"`
	// Property dtsBisLabel: The environment tag of the DTS instance.
	//
	// Valid values: **normal** and **online**.
	DtsBisLabel interface{} `field:"optional" json:"dtsBisLabel" yaml:"dtsBisLabel"`
	// Property dtsInstanceId: The ID of the DTS instance.
	DtsInstanceId interface{} `field:"optional" json:"dtsInstanceId" yaml:"dtsInstanceId"`
	// Property dtsJobId: The ID of the DTS task.
	DtsJobId interface{} `field:"optional" json:"dtsJobId" yaml:"dtsJobId"`
	// Property errorNotice: Specifies whether to monitor the task status.
	//
	// Valid values: **true** and **false**.
	ErrorNotice interface{} `field:"optional" json:"errorNotice" yaml:"errorNotice"`
	// Property errorPhone: The mobile numbers that receive status-related alerts.
	//
	// Separate multiple mobile numbers with commas (,).
	// **Note**: This parameter is available only for users of the China site (aliyun.com). Only mobile numbers in the Chinese mainland are supported. You can specify up to 10 mobile numbers. Users of the international site (alibabacloud.com) cannot receive alerts by using mobile numbers, but can configure alert rules for DTS tasks in the CloudMonitor console.
	ErrorPhone interface{} `field:"optional" json:"errorPhone" yaml:"errorPhone"`
	// Property fileOssUrl: The URL of the Object Storage Service (OSS) bucket that stores the files related to the DTS task.
	FileOssUrl interface{} `field:"optional" json:"fileOssUrl" yaml:"fileOssUrl"`
	// Property reserve: The reserved parameter of DTS.
	//
	// You can specify this parameter to add more configurations of the source or destination instance to the DTS task. For example, you can specify the data storage format of the destination Kafka database and the ID of the CEN instance.
	Reserve interface{} `field:"optional" json:"reserve" yaml:"reserve"`
	// Property status: The status of the resource.
	//
	// Valid values:
	// - **Migrating**: Start the task.
	// - **Suspending**: Suspend the task.
	// - **Stopping**: Stop the task.
	Status interface{} `field:"optional" json:"status" yaml:"status"`
}

