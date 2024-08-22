package alicloudroscdkdevops


// Properties for defining a `VariableGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-devops-variablegroup
type VariableGroupProps struct {
	// Property name: The name of variable group.
	Name interface{} `field:"required" json:"name" yaml:"name"`
	// Property organizationId: Corporate identity, also known as enterprise id, can obtain in cloud effect access links.
	OrganizationId interface{} `field:"required" json:"organizationId" yaml:"organizationId"`
	// Property variables: Variables information.
	Variables interface{} `field:"required" json:"variables" yaml:"variables"`
	// Property description: The description of variable group.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
}

