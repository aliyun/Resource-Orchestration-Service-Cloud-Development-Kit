package alicloudroscdkemr


// Properties for defining a `FlowProject`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-emr-flowproject
type FlowProjectProps struct {
	// Property description: The description of the project.
	Description interface{} `field:"required" json:"description" yaml:"description"`
	// Property flowProjectName: The name of the project.
	FlowProjectName interface{} `field:"required" json:"flowProjectName" yaml:"flowProjectName"`
	// Property resourceGroupId: The ID of the enterprise resource group to which the EMR instances and ECS node instances belong.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
}

