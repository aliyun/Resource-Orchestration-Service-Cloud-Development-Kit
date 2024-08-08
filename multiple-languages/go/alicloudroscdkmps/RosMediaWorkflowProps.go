package alicloudroscdkmps


// Properties for defining a `RosMediaWorkflow`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mps-mediaworkflow
type RosMediaWorkflowProps struct {
	Name interface{} `field:"required" json:"name" yaml:"name"`
	Topology interface{} `field:"required" json:"topology" yaml:"topology"`
	TriggerMode interface{} `field:"optional" json:"triggerMode" yaml:"triggerMode"`
}

