package alicloudroscdkadblake


// Properties for defining a `RosDBCluster`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-adblake-dbcluster
type RosDBClusterProps struct {
	ComputeResource interface{} `field:"required" json:"computeResource" yaml:"computeResource"`
	DbClusterVersion interface{} `field:"required" json:"dbClusterVersion" yaml:"dbClusterVersion"`
	PayType interface{} `field:"required" json:"payType" yaml:"payType"`
	StorageResource interface{} `field:"required" json:"storageResource" yaml:"storageResource"`
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	VSwitchId interface{} `field:"required" json:"vSwitchId" yaml:"vSwitchId"`
	ZoneId interface{} `field:"required" json:"zoneId" yaml:"zoneId"`
	BackupSetId interface{} `field:"optional" json:"backupSetId" yaml:"backupSetId"`
	DbClusterDescription interface{} `field:"optional" json:"dbClusterDescription" yaml:"dbClusterDescription"`
	EnableDefaultResourcePool interface{} `field:"optional" json:"enableDefaultResourcePool" yaml:"enableDefaultResourcePool"`
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	PeriodType interface{} `field:"optional" json:"periodType" yaml:"periodType"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	RestoreToTime interface{} `field:"optional" json:"restoreToTime" yaml:"restoreToTime"`
	RestoreType interface{} `field:"optional" json:"restoreType" yaml:"restoreType"`
	SourceDbClusterId interface{} `field:"optional" json:"sourceDbClusterId" yaml:"sourceDbClusterId"`
	Tags *[]*RosDBCluster_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

