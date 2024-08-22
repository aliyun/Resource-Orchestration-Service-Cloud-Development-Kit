package alicloudroscdkros


// Properties for defining a `StackInstances`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ros-stackinstances
type StackInstancesProps struct {
	// Property regionIds: undefined.
	RegionIds interface{} `field:"required" json:"regionIds" yaml:"regionIds"`
	// Property stackGroupName: undefined.
	StackGroupName interface{} `field:"required" json:"stackGroupName" yaml:"stackGroupName"`
	// Property accountIds: undefined.
	AccountIds interface{} `field:"optional" json:"accountIds" yaml:"accountIds"`
	// Property deploymentTargets: undefined.
	DeploymentTargets interface{} `field:"optional" json:"deploymentTargets" yaml:"deploymentTargets"`
	// Property disableRollback: undefined.
	DisableRollback interface{} `field:"optional" json:"disableRollback" yaml:"disableRollback"`
	// Property operationDescription: undefined.
	OperationDescription interface{} `field:"optional" json:"operationDescription" yaml:"operationDescription"`
	// Property operationPreferences: undefined.
	OperationPreferences interface{} `field:"optional" json:"operationPreferences" yaml:"operationPreferences"`
	// Property parameterOverrides: undefined.
	ParameterOverrides interface{} `field:"optional" json:"parameterOverrides" yaml:"parameterOverrides"`
	// Property retainStacks: undefined.
	RetainStacks interface{} `field:"optional" json:"retainStacks" yaml:"retainStacks"`
	// Property timeoutInMinutes: undefined.
	TimeoutInMinutes interface{} `field:"optional" json:"timeoutInMinutes" yaml:"timeoutInMinutes"`
}

