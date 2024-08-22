package alicloudroscdkemr


// Properties for defining a `RosFlowProject`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-emr-flowproject
type RosFlowProjectProps struct {
	Description interface{} `field:"required" json:"description" yaml:"description"`
	FlowProjectName interface{} `field:"required" json:"flowProjectName" yaml:"flowProjectName"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
}

