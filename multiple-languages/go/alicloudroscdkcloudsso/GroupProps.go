package alicloudroscdkcloudsso


// Properties for defining a `Group`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-group
type GroupProps struct {
	// Property directoryId: The ID of the directory.
	DirectoryId interface{} `field:"required" json:"directoryId" yaml:"directoryId"`
	// Property groupName: The name of the group.
	//
	// The name can contain letters, digits, underscores (_), hyphens (-), and periods (.).
	// The name can be up to 128 characters in length.
	GroupName interface{} `field:"required" json:"groupName" yaml:"groupName"`
	// Property description: The description of the group.
	//
	// The description can be up to 1,024 characters in length.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
}

