package alicloudroscdkcloudsso


// Properties for defining a `UserToGroupAddition`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-usertogroupaddition
type UserToGroupAdditionProps struct {
	// Property directoryId: The ID of the directory.
	DirectoryId interface{} `field:"required" json:"directoryId" yaml:"directoryId"`
	// Property groupId: The ID of the group.
	GroupId interface{} `field:"required" json:"groupId" yaml:"groupId"`
	// Property userId: The ID of the user.
	UserId interface{} `field:"required" json:"userId" yaml:"userId"`
}

