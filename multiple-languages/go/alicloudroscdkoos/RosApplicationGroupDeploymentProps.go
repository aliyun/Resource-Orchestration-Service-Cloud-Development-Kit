package alicloudroscdkoos


// Properties for defining a `RosApplicationGroupDeployment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-applicationgroupdeployment
type RosApplicationGroupDeploymentProps struct {
	ApplicationName interface{} `field:"required" json:"applicationName" yaml:"applicationName"`
	Name interface{} `field:"required" json:"name" yaml:"name"`
	DeployParameters interface{} `field:"optional" json:"deployParameters" yaml:"deployParameters"`
	RevisionId interface{} `field:"optional" json:"revisionId" yaml:"revisionId"`
}

