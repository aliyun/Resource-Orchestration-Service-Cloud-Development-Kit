package alicloudroscdkoos


// Properties for defining a `RosDeployRevision`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-deployrevision
type RosDeployRevisionProps struct {
	ApplicationName interface{} `field:"required" json:"applicationName" yaml:"applicationName"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	Hooks interface{} `field:"optional" json:"hooks" yaml:"hooks"`
	Location interface{} `field:"optional" json:"location" yaml:"location"`
	RevisionType interface{} `field:"optional" json:"revisionType" yaml:"revisionType"`
}

