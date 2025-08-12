package alicloudroscdkadblake


// Properties for defining a `RosDBCluster`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-adblake-dbcluster
type RosDBClusterProps struct {
	DbClusterVersion interface{} `field:"required" json:"dbClusterVersion" yaml:"dbClusterVersion"`
	PayType interface{} `field:"required" json:"payType" yaml:"payType"`
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	VSwitchId interface{} `field:"required" json:"vSwitchId" yaml:"vSwitchId"`
	ZoneId interface{} `field:"required" json:"zoneId" yaml:"zoneId"`
	BackupSetId interface{} `field:"optional" json:"backupSetId" yaml:"backupSetId"`
	CloneSourceRegionId interface{} `field:"optional" json:"cloneSourceRegionId" yaml:"cloneSourceRegionId"`
	ComputeResource interface{} `field:"optional" json:"computeResource" yaml:"computeResource"`
	DbClusterDescription interface{} `field:"optional" json:"dbClusterDescription" yaml:"dbClusterDescription"`
	DbClusterNetworkType interface{} `field:"optional" json:"dbClusterNetworkType" yaml:"dbClusterNetworkType"`
	DiskEncryption interface{} `field:"optional" json:"diskEncryption" yaml:"diskEncryption"`
	EnableDefaultResourcePool interface{} `field:"optional" json:"enableDefaultResourcePool" yaml:"enableDefaultResourcePool"`
	KmsId interface{} `field:"optional" json:"kmsId" yaml:"kmsId"`
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	PeriodType interface{} `field:"optional" json:"periodType" yaml:"periodType"`
	ProductForm interface{} `field:"optional" json:"productForm" yaml:"productForm"`
	ProductVersion interface{} `field:"optional" json:"productVersion" yaml:"productVersion"`
	ReservedNodeCount interface{} `field:"optional" json:"reservedNodeCount" yaml:"reservedNodeCount"`
	ReservedNodeSize interface{} `field:"optional" json:"reservedNodeSize" yaml:"reservedNodeSize"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	RestoreToTime interface{} `field:"optional" json:"restoreToTime" yaml:"restoreToTime"`
	RestoreType interface{} `field:"optional" json:"restoreType" yaml:"restoreType"`
	SecondaryVSwitchId interface{} `field:"optional" json:"secondaryVSwitchId" yaml:"secondaryVSwitchId"`
	SecondaryZoneId interface{} `field:"optional" json:"secondaryZoneId" yaml:"secondaryZoneId"`
	SourceDbClusterId interface{} `field:"optional" json:"sourceDbClusterId" yaml:"sourceDbClusterId"`
	StorageResource interface{} `field:"optional" json:"storageResource" yaml:"storageResource"`
	Tags *[]*RosDBCluster_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

