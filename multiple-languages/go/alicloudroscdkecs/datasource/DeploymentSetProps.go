package datasource


// Properties for defining a `DeploymentSet`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-deploymentset
type DeploymentSetProps struct {
	// Property deploymentSetId: The ID of deployment set.
	DeploymentSetId interface{} `field:"required" json:"deploymentSetId" yaml:"deploymentSetId"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

