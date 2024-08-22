package alicloudroscdkros


// Properties for defining a `StackGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ros-stackgroup
type StackGroupProps struct {
	// Property stackGroupName: undefined.
	StackGroupName interface{} `field:"required" json:"stackGroupName" yaml:"stackGroupName"`
	// Property administrationRoleName: undefined.
	AdministrationRoleName interface{} `field:"optional" json:"administrationRoleName" yaml:"administrationRoleName"`
	// Property autoDeployment: undefined.
	AutoDeployment interface{} `field:"optional" json:"autoDeployment" yaml:"autoDeployment"`
	// Property description: undefined.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property dynamicTemplateBody: undefined.
	DynamicTemplateBody interface{} `field:"optional" json:"dynamicTemplateBody" yaml:"dynamicTemplateBody"`
	// Property executionRoleName: undefined.
	ExecutionRoleName interface{} `field:"optional" json:"executionRoleName" yaml:"executionRoleName"`
	// Property parameters: undefined.
	Parameters interface{} `field:"optional" json:"parameters" yaml:"parameters"`
	// Property permissionModel: undefined.
	PermissionModel interface{} `field:"optional" json:"permissionModel" yaml:"permissionModel"`
	// Property resourceGroupId: undefined.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property templateBody: undefined.
	TemplateBody interface{} `field:"optional" json:"templateBody" yaml:"templateBody"`
	// Property templateId: undefined.
	TemplateId interface{} `field:"optional" json:"templateId" yaml:"templateId"`
	// Property templateUrl: undefined.
	TemplateUrl interface{} `field:"optional" json:"templateUrl" yaml:"templateUrl"`
	// Property templateVersion: undefined.
	TemplateVersion interface{} `field:"optional" json:"templateVersion" yaml:"templateVersion"`
}

