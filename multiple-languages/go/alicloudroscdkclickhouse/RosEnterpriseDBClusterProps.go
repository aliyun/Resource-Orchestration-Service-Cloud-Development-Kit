package alicloudroscdkclickhouse


// Properties for defining a `RosEnterpriseDBCluster`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-clickhouse-enterprisedbcluster
type RosEnterpriseDBClusterProps struct {
	Engine interface{} `field:"required" json:"engine" yaml:"engine"`
	NodeCount interface{} `field:"required" json:"nodeCount" yaml:"nodeCount"`
	NodeScaleMax interface{} `field:"required" json:"nodeScaleMax" yaml:"nodeScaleMax"`
	NodeScaleMin interface{} `field:"required" json:"nodeScaleMin" yaml:"nodeScaleMin"`
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	VSwitchId interface{} `field:"required" json:"vSwitchId" yaml:"vSwitchId"`
	ZoneId interface{} `field:"required" json:"zoneId" yaml:"zoneId"`
	BackupSetId interface{} `field:"optional" json:"backupSetId" yaml:"backupSetId"`
	DbInstanceDescription interface{} `field:"optional" json:"dbInstanceDescription" yaml:"dbInstanceDescription"`
	DbTimeZone interface{} `field:"optional" json:"dbTimeZone" yaml:"dbTimeZone"`
	DeploySchema interface{} `field:"optional" json:"deploySchema" yaml:"deploySchema"`
	MultiZone interface{} `field:"optional" json:"multiZone" yaml:"multiZone"`
	PublicConnectionSetting interface{} `field:"optional" json:"publicConnectionSetting" yaml:"publicConnectionSetting"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	SourceDbInstanceId interface{} `field:"optional" json:"sourceDbInstanceId" yaml:"sourceDbInstanceId"`
	StorageQuota interface{} `field:"optional" json:"storageQuota" yaml:"storageQuota"`
	StorageType interface{} `field:"optional" json:"storageType" yaml:"storageType"`
	Tags *[]*RosEnterpriseDBCluster_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

