package alicloudroscdkadb


// Properties for defining a `RosDBCluster`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-adb-dbcluster
type RosDBClusterProps struct {
	DbClusterCategory interface{} `field:"required" json:"dbClusterCategory" yaml:"dbClusterCategory"`
	DbClusterVersion interface{} `field:"required" json:"dbClusterVersion" yaml:"dbClusterVersion"`
	Mode interface{} `field:"required" json:"mode" yaml:"mode"`
	PayType interface{} `field:"required" json:"payType" yaml:"payType"`
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	VSwitchId interface{} `field:"required" json:"vSwitchId" yaml:"vSwitchId"`
	ComputeResource interface{} `field:"optional" json:"computeResource" yaml:"computeResource"`
	DbClusterClass interface{} `field:"optional" json:"dbClusterClass" yaml:"dbClusterClass"`
	DbClusterDescription interface{} `field:"optional" json:"dbClusterDescription" yaml:"dbClusterDescription"`
	DbNodeGroupCount interface{} `field:"optional" json:"dbNodeGroupCount" yaml:"dbNodeGroupCount"`
	DbNodeStorage interface{} `field:"optional" json:"dbNodeStorage" yaml:"dbNodeStorage"`
	ElasticIoResource interface{} `field:"optional" json:"elasticIoResource" yaml:"elasticIoResource"`
	ExecutorCount interface{} `field:"optional" json:"executorCount" yaml:"executorCount"`
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	PeriodType interface{} `field:"optional" json:"periodType" yaml:"periodType"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	Tags *[]*RosDBCluster_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	ZoneId interface{} `field:"optional" json:"zoneId" yaml:"zoneId"`
}

