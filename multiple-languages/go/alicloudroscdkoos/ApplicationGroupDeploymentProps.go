package alicloudroscdkoos


// Properties for defining a `ApplicationGroupDeployment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-applicationgroupdeployment
type ApplicationGroupDeploymentProps struct {
	// Property applicationName: The name of the application.
	ApplicationName interface{} `field:"required" json:"applicationName" yaml:"applicationName"`
	// Property name: The name of the application group.
	Name interface{} `field:"required" json:"name" yaml:"name"`
	// Property deployParameters: The deploy parameters of the application group to be deployed.
	DeployParameters interface{} `field:"optional" json:"deployParameters" yaml:"deployParameters"`
	// Property revisionId: The ID of the revision.
	RevisionId interface{} `field:"optional" json:"revisionId" yaml:"revisionId"`
}

