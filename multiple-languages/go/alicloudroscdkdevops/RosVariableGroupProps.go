package alicloudroscdkdevops


// Properties for defining a `RosVariableGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-devops-variablegroup
type RosVariableGroupProps struct {
	Name interface{} `field:"required" json:"name" yaml:"name"`
	OrganizationId interface{} `field:"required" json:"organizationId" yaml:"organizationId"`
	Variables interface{} `field:"required" json:"variables" yaml:"variables"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
}

