package alicloudroscdkadblake


// Properties for defining a `RosResourceGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-adblake-resourcegroup
type RosResourceGroupProps struct {
	DbClusterId interface{} `field:"required" json:"dbClusterId" yaml:"dbClusterId"`
	Engine interface{} `field:"required" json:"engine" yaml:"engine"`
	GroupName interface{} `field:"required" json:"groupName" yaml:"groupName"`
	GroupType interface{} `field:"required" json:"groupType" yaml:"groupType"`
	AutoStopInterval interface{} `field:"optional" json:"autoStopInterval" yaml:"autoStopInterval"`
	ClusterMode interface{} `field:"optional" json:"clusterMode" yaml:"clusterMode"`
	ClusterSizeResource interface{} `field:"optional" json:"clusterSizeResource" yaml:"clusterSizeResource"`
	EnableSpot interface{} `field:"optional" json:"enableSpot" yaml:"enableSpot"`
	EngineParams interface{} `field:"optional" json:"engineParams" yaml:"engineParams"`
	MaxClusterCount interface{} `field:"optional" json:"maxClusterCount" yaml:"maxClusterCount"`
	MaxComputeResource interface{} `field:"optional" json:"maxComputeResource" yaml:"maxComputeResource"`
	MinClusterCount interface{} `field:"optional" json:"minClusterCount" yaml:"minClusterCount"`
	MinComputeResource interface{} `field:"optional" json:"minComputeResource" yaml:"minComputeResource"`
	Rules interface{} `field:"optional" json:"rules" yaml:"rules"`
}

