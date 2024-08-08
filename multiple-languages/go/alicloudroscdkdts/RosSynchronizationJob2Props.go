package alicloudroscdkdts


// Properties for defining a `RosSynchronizationJob2`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dts-synchronizationjob2
type RosSynchronizationJob2Props struct {
	DataInitialization interface{} `field:"required" json:"dataInitialization" yaml:"dataInitialization"`
	DataSynchronization interface{} `field:"required" json:"dataSynchronization" yaml:"dataSynchronization"`
	DbList interface{} `field:"required" json:"dbList" yaml:"dbList"`
	DestinationEndpoint interface{} `field:"required" json:"destinationEndpoint" yaml:"destinationEndpoint"`
	DtsJobName interface{} `field:"required" json:"dtsJobName" yaml:"dtsJobName"`
	SourceEndpoint interface{} `field:"required" json:"sourceEndpoint" yaml:"sourceEndpoint"`
	StructureInitialization interface{} `field:"required" json:"structureInitialization" yaml:"structureInitialization"`
	Checkpoint interface{} `field:"optional" json:"checkpoint" yaml:"checkpoint"`
	DataCheckConfigure interface{} `field:"optional" json:"dataCheckConfigure" yaml:"dataCheckConfigure"`
	DedicatedClusterId interface{} `field:"optional" json:"dedicatedClusterId" yaml:"dedicatedClusterId"`
	DelayNotice interface{} `field:"optional" json:"delayNotice" yaml:"delayNotice"`
	DelayPhone interface{} `field:"optional" json:"delayPhone" yaml:"delayPhone"`
	DelayRuleTime interface{} `field:"optional" json:"delayRuleTime" yaml:"delayRuleTime"`
	DisasterRecoveryJob interface{} `field:"optional" json:"disasterRecoveryJob" yaml:"disasterRecoveryJob"`
	DtsBisLabel interface{} `field:"optional" json:"dtsBisLabel" yaml:"dtsBisLabel"`
	DtsInstanceId interface{} `field:"optional" json:"dtsInstanceId" yaml:"dtsInstanceId"`
	DtsJobId interface{} `field:"optional" json:"dtsJobId" yaml:"dtsJobId"`
	ErrorNotice interface{} `field:"optional" json:"errorNotice" yaml:"errorNotice"`
	ErrorPhone interface{} `field:"optional" json:"errorPhone" yaml:"errorPhone"`
	FileOssUrl interface{} `field:"optional" json:"fileOssUrl" yaml:"fileOssUrl"`
	Reserve interface{} `field:"optional" json:"reserve" yaml:"reserve"`
	Status interface{} `field:"optional" json:"status" yaml:"status"`
	SynchronizationDirection interface{} `field:"optional" json:"synchronizationDirection" yaml:"synchronizationDirection"`
}

