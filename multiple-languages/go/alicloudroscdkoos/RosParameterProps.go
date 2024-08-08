package alicloudroscdkoos


// Properties for defining a `RosParameter`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-parameter
type RosParameterProps struct {
	Name interface{} `field:"required" json:"name" yaml:"name"`
	Type interface{} `field:"required" json:"type" yaml:"type"`
	Value interface{} `field:"required" json:"value" yaml:"value"`
	Constraints interface{} `field:"optional" json:"constraints" yaml:"constraints"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
}

