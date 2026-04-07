package alicloudroscdkclickhouse


// Properties for defining a `EnterpriseDBCluster`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-clickhouse-enterprisedbcluster
type EnterpriseDBClusterProps struct {
	// Property engine: The engine type.
	Engine interface{} `field:"required" json:"engine" yaml:"engine"`
	// Property nodeCount: The number of nodes.
	NodeCount interface{} `field:"required" json:"nodeCount" yaml:"nodeCount"`
	// Property nodeScaleMax: The maximum number of nodes for scaling.
	NodeScaleMax interface{} `field:"required" json:"nodeScaleMax" yaml:"nodeScaleMax"`
	// Property nodeScaleMin: The minimum number of nodes for scaling.
	NodeScaleMin interface{} `field:"required" json:"nodeScaleMin" yaml:"nodeScaleMin"`
	// Property vpcId: The ID of the VPC.
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	// Property vSwitchId: The ID of the VSwitch.
	VSwitchId interface{} `field:"required" json:"vSwitchId" yaml:"vSwitchId"`
	// Property zoneId: The ID of the zone.
	ZoneId interface{} `field:"required" json:"zoneId" yaml:"zoneId"`
	// Property backupSetId: The ID of the backup set.
	BackupSetId interface{} `field:"optional" json:"backupSetId" yaml:"backupSetId"`
	// Property dbInstanceDescription: The description of the database instance.
	DbInstanceDescription interface{} `field:"optional" json:"dbInstanceDescription" yaml:"dbInstanceDescription"`
	// Property dbTimeZone: The time zone of the database.
	DbTimeZone interface{} `field:"optional" json:"dbTimeZone" yaml:"dbTimeZone"`
	// Property deploySchema: The deployment schema.
	DeploySchema interface{} `field:"optional" json:"deploySchema" yaml:"deploySchema"`
	// Property multiZone: Multi-zone configuration.
	MultiZone interface{} `field:"optional" json:"multiZone" yaml:"multiZone"`
	// Property publicConnectionSetting: The public connection setting.
	PublicConnectionSetting interface{} `field:"optional" json:"publicConnectionSetting" yaml:"publicConnectionSetting"`
	// Property resourceGroupId: The ID of the resource group.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property sourceDbInstanceId: The ID of the source database instance.
	SourceDbInstanceId interface{} `field:"optional" json:"sourceDbInstanceId" yaml:"sourceDbInstanceId"`
	// Property storageQuota: The storage quota.
	StorageQuota interface{} `field:"optional" json:"storageQuota" yaml:"storageQuota"`
	// Property storageType: The type of storage.
	StorageType interface{} `field:"optional" json:"storageType" yaml:"storageType"`
	// Property tags: Tags to attach to clickhouse_enterprise_db.
	//
	// Max support 20 tags to add during create clickhouse_enterprise_db. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosEnterpriseDBCluster_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

