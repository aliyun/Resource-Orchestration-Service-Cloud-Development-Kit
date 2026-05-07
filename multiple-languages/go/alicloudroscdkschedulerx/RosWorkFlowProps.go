package alicloudroscdkschedulerx


// Properties for defining a `RosWorkFlow`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-schedulerx-workflow
type RosWorkFlowProps struct {
	GroupId interface{} `field:"required" json:"groupId" yaml:"groupId"`
	Namespace interface{} `field:"required" json:"namespace" yaml:"namespace"`
	TimeType interface{} `field:"required" json:"timeType" yaml:"timeType"`
	WorkflowName interface{} `field:"required" json:"workflowName" yaml:"workflowName"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	MaxConcurrency interface{} `field:"optional" json:"maxConcurrency" yaml:"maxConcurrency"`
	NamespaceSource interface{} `field:"optional" json:"namespaceSource" yaml:"namespaceSource"`
	TimeExpression interface{} `field:"optional" json:"timeExpression" yaml:"timeExpression"`
	Timezone interface{} `field:"optional" json:"timezone" yaml:"timezone"`
}

