package alicloudroscdkoos


// Properties for defining a `Execution`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-execution
type ExecutionProps struct {
	// Property description: The description of OOS Execution.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property loopMode: The loop mode of OOS Execution.
	//
	// Valid values:
	// - Automatic(Default): does not pause.
	// - FirstBatchPause: The first batch of pauses.
	// - EveryBatchPause: pause each batch.
	LoopMode interface{} `field:"optional" json:"loopMode" yaml:"loopMode"`
	// Property mode: Execution mode.
	Mode interface{} `field:"optional" json:"mode" yaml:"mode"`
	// Property parameters: Parameters for the execution of template.
	Parameters interface{} `field:"optional" json:"parameters" yaml:"parameters"`
	// Property parentExecutionId: Parent execution ID.
	ParentExecutionId interface{} `field:"optional" json:"parentExecutionId" yaml:"parentExecutionId"`
	// Property resourceGroupId: Resource group id.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property resourceOptions: Resource options user by ROS.
	ResourceOptions interface{} `field:"optional" json:"resourceOptions" yaml:"resourceOptions"`
	// Property safetyCheck: Security check mode.
	//
	// Allowed values:
	// - Skip: This option means that customers understand the risks, you can do anything without confirmation Action, no matter what the level of risk. It takes effect only if Mode is Automatic.
	// - ConfirmEveryHighRiskAction (default): This option would require customers to confirm each Action a high risk. NotifyExecution by calling customer interface to confirm or cancel.
	SafetyCheck interface{} `field:"optional" json:"safetyCheck" yaml:"safetyCheck"`
	// Property tags: Tag value and the key mapping, the label of the key number can be up to 20.
	Tags *map[string]interface{} `field:"optional" json:"tags" yaml:"tags"`
	// Property templateContent: The content of the template in the JSON or YAML format.
	//
	// This parameter is the same as the Content parameter that you can specify when you call the CreateTemplate operation. You can use this parameter to specify the tasks that you want to run. This way, you do not need to create a template before you start an execution. If you select an existing template, you do not need to specify this parameter.
	TemplateContent interface{} `field:"optional" json:"templateContent" yaml:"templateContent"`
	// Property templateName: Template name.
	//
	// Content is limited to letters, numbers, underlined, underline, the length of 200 characters.
	TemplateName interface{} `field:"optional" json:"templateName" yaml:"templateName"`
	// Property templateUrl: The Object Storage Service (OSS) URL of the object that stores the content of the Operation Orchestration Service (OOS) template.
	//
	// The access control list (ACL) of the object must be public-read. You can use this parameter to specify the tasks that you want to run. This way, you do not need to create a template before you start an execution. If you select an existing template, you do not need to specify this parameter.
	TemplateUrl interface{} `field:"optional" json:"templateUrl" yaml:"templateUrl"`
	// Property templateVersion: Version number of template.
	//
	// Default to the latest version.
	TemplateVersion interface{} `field:"optional" json:"templateVersion" yaml:"templateVersion"`
}

