package alicloudroscdkoos


// Properties for defining a `StateConfiguration`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-stateconfiguration
type StateConfigurationProps struct {
	// Property scheduleExpression: The schedule expression.
	//
	// The interval between two schedules must be a minimum of 30 minutes.
	ScheduleExpression interface{} `field:"required" json:"scheduleExpression" yaml:"scheduleExpression"`
	// Property scheduleType: The schedule type.
	//
	// Set the value to rate.
	ScheduleType interface{} `field:"required" json:"scheduleType" yaml:"scheduleType"`
	// Property targets: The resources to be queried.
	Targets interface{} `field:"required" json:"targets" yaml:"targets"`
	// Property templateName: The name of the template.
	//
	// The name must be 1 to 200 characters in length and can contain letters, digits, hyphens (-), and underscores (_).
	TemplateName interface{} `field:"required" json:"templateName" yaml:"templateName"`
	// Property configureMode: The configuration mode.
	//
	// Valid values: ApplyOnce: The configuration is applied only once. After a configuration is updated, the new configuration is applied. ApplyAndMonitor: The configuration is applied only once. After the configuration is applied, the system only checks whether the configuration is migrated in the future. ApplyAndAutoCorrect: The configuration is always applied.
	ConfigureMode interface{} `field:"optional" json:"configureMode" yaml:"configureMode"`
	// Property description: The description of the desired-state configuration.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property parameters: The parameters.
	Parameters interface{} `field:"optional" json:"parameters" yaml:"parameters"`
	// Property resourceGroupId: The resource group ID.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property tags: Tag value and the key mapping, the label of the key number can be up to 20.
	Tags *map[string]interface{} `field:"optional" json:"tags" yaml:"tags"`
	// Property templateVersion: The version number of the template.
	//
	// If you do not specify this parameter, the latest version of the template is used.
	TemplateVersion interface{} `field:"optional" json:"templateVersion" yaml:"templateVersion"`
}

