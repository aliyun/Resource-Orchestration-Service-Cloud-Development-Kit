package alicloudroscdkoos


// Properties for defining a `DeployRevision`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-deployrevision
type DeployRevisionProps struct {
	// Property applicationName: The name of the application.
	ApplicationName interface{} `field:"required" json:"applicationName" yaml:"applicationName"`
	// Property description: The description of the revision.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property hooks: The hook of the code to be deployed.
	Hooks interface{} `field:"optional" json:"hooks" yaml:"hooks"`
	// Property location: The location of the code to be deployed.
	Location interface{} `field:"optional" json:"location" yaml:"location"`
	// Property revisionType: The type of the revision.
	RevisionType interface{} `field:"optional" json:"revisionType" yaml:"revisionType"`
}

