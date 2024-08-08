package alicloudroscdkros


// Properties for defining a `RosStackInstances`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ros-stackinstances
type RosStackInstancesProps struct {
	RegionIds interface{} `field:"required" json:"regionIds" yaml:"regionIds"`
	StackGroupName interface{} `field:"required" json:"stackGroupName" yaml:"stackGroupName"`
	AccountIds interface{} `field:"optional" json:"accountIds" yaml:"accountIds"`
	DeploymentTargets interface{} `field:"optional" json:"deploymentTargets" yaml:"deploymentTargets"`
	DisableRollback interface{} `field:"optional" json:"disableRollback" yaml:"disableRollback"`
	OperationDescription interface{} `field:"optional" json:"operationDescription" yaml:"operationDescription"`
	OperationPreferences interface{} `field:"optional" json:"operationPreferences" yaml:"operationPreferences"`
	ParameterOverrides interface{} `field:"optional" json:"parameterOverrides" yaml:"parameterOverrides"`
	RetainStacks interface{} `field:"optional" json:"retainStacks" yaml:"retainStacks"`
	TimeoutInMinutes interface{} `field:"optional" json:"timeoutInMinutes" yaml:"timeoutInMinutes"`
}

