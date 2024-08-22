package alicloudroscdkmps


// Properties for defining a `MediaWorkflow`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mps-mediaworkflow
type MediaWorkflowProps struct {
	// Property name: The topology of the media workflow.
	//
	// The value cannot be empty.
	// The name cannot be the same as that of an existing media workflow within the current Alibaba Cloud account.
	// The name can be up to 64 characters in length.
	// The value must be encoded in the UTF-8 format.
	Name interface{} `field:"required" json:"name" yaml:"name"`
	// Property topology: The topology of the media workflow.
	//
	// The value must be a JSON object that contains the activities and activity dependencies. For more information, see the Sample topology section of this topic.Note The Object Storage Service (OSS) bucket must reside in the same region as your MPS service.
	Topology interface{} `field:"required" json:"topology" yaml:"topology"`
	// Property triggerMode: The triggering mode of the media workflow.
	//
	// Valid values:
	// OssAutoTrigger: The media workflow is automatically triggered.
	// NotInAuto: The media workflow is not automatically triggered.
	TriggerMode interface{} `field:"optional" json:"triggerMode" yaml:"triggerMode"`
}

