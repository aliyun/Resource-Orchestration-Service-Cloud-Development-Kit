package datasource


// Properties for defining a `DeploymentSets`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-deploymentsets
type DeploymentSetsProps struct {
	// Property deploymentSetIds: he IDs of deployment sets.
	//
	// The value can be a JSON array that consists of up to 100 deployment set IDs in the format of ["ds-xxxxxxxxx", "ds-yyyyyyyyy", … "ds-zzzzzzzzz"]. Separate multiple deployment set IDs with commas (,).
	DeploymentSetIds interface{} `field:"optional" json:"deploymentSetIds" yaml:"deploymentSetIds"`
	// Property deploymentSetName: The name of the deployment set.
	DeploymentSetName interface{} `field:"optional" json:"deploymentSetName" yaml:"deploymentSetName"`
	// Property domain: The deployment domain.
	Domain interface{} `field:"optional" json:"domain" yaml:"domain"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	// Property strategy: The deployment strategy.
	//
	// Valid values:
	// Availability: high availability strategy.
	//   AvailabilityGroup: high availability group strategy.
	Strategy interface{} `field:"optional" json:"strategy" yaml:"strategy"`
}

