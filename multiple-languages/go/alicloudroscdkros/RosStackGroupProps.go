package alicloudroscdkros


// Properties for defining a `RosStackGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ros-stackgroup
type RosStackGroupProps struct {
	StackGroupName interface{} `field:"required" json:"stackGroupName" yaml:"stackGroupName"`
	AdministrationRoleName interface{} `field:"optional" json:"administrationRoleName" yaml:"administrationRoleName"`
	AutoDeployment interface{} `field:"optional" json:"autoDeployment" yaml:"autoDeployment"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	DynamicTemplateBody interface{} `field:"optional" json:"dynamicTemplateBody" yaml:"dynamicTemplateBody"`
	ExecutionRoleName interface{} `field:"optional" json:"executionRoleName" yaml:"executionRoleName"`
	Parameters interface{} `field:"optional" json:"parameters" yaml:"parameters"`
	PermissionModel interface{} `field:"optional" json:"permissionModel" yaml:"permissionModel"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	TemplateBody interface{} `field:"optional" json:"templateBody" yaml:"templateBody"`
	TemplateId interface{} `field:"optional" json:"templateId" yaml:"templateId"`
	TemplateUrl interface{} `field:"optional" json:"templateUrl" yaml:"templateUrl"`
	TemplateVersion interface{} `field:"optional" json:"templateVersion" yaml:"templateVersion"`
}

