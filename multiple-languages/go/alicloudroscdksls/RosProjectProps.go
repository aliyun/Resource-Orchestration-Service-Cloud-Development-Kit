package alicloudroscdksls


// Properties for defining a `RosProject`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-project
type RosProjectProps struct {
	Name interface{} `field:"required" json:"name" yaml:"name"`
	DataRedundancyType interface{} `field:"optional" json:"dataRedundancyType" yaml:"dataRedundancyType"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	Tags *[]*RosProject_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

