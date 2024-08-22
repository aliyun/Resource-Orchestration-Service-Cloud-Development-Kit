package alicloudroscdkecs


// Properties for defining a `RosDeploymentSet`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-deploymentset
type RosDeploymentSetProps struct {
	DeploymentSetName interface{} `field:"optional" json:"deploymentSetName" yaml:"deploymentSetName"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	GroupCount interface{} `field:"optional" json:"groupCount" yaml:"groupCount"`
	OnUnableToRedeployFailedInstance interface{} `field:"optional" json:"onUnableToRedeployFailedInstance" yaml:"onUnableToRedeployFailedInstance"`
	Strategy interface{} `field:"optional" json:"strategy" yaml:"strategy"`
}

