package alicloudroscdkpolardb


// Properties for defining a `RosDBNodes`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-dbnodes
type RosDBNodesProps struct {
	Amount interface{} `field:"required" json:"amount" yaml:"amount"`
	DbClusterId interface{} `field:"required" json:"dbClusterId" yaml:"dbClusterId"`
	DbNodeType interface{} `field:"optional" json:"dbNodeType" yaml:"dbNodeType"`
	ImciSwitch interface{} `field:"optional" json:"imciSwitch" yaml:"imciSwitch"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
}

