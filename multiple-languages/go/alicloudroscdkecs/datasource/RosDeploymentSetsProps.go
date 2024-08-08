package datasource


// Properties for defining a `RosDeploymentSets`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-deploymentsets
type RosDeploymentSetsProps struct {
	DeploymentSetIds interface{} `field:"optional" json:"deploymentSetIds" yaml:"deploymentSetIds"`
	DeploymentSetName interface{} `field:"optional" json:"deploymentSetName" yaml:"deploymentSetName"`
	Domain interface{} `field:"optional" json:"domain" yaml:"domain"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	Strategy interface{} `field:"optional" json:"strategy" yaml:"strategy"`
}

