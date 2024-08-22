package alicloudroscdkcore


// Options to configure TagManager behavior.
type TagManagerOptions struct {
	// The name of the property in ROS for these tags.
	//
	// Normally this is `tags`, but Cognito UserPool uses UserPoolTags.
	TagPropertyName *string `field:"optional" json:"tagPropertyName" yaml:"tagPropertyName"`
}

