package datasource


// Properties for defining a `RosDeploymentSet`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-deploymentset
type RosDeploymentSetProps struct {
	DeploymentSetId interface{} `field:"required" json:"deploymentSetId" yaml:"deploymentSetId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

