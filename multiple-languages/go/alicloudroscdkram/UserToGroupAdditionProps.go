package alicloudroscdkram


// Properties for defining a `UserToGroupAddition`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-usertogroupaddition
type UserToGroupAdditionProps struct {
	// Property groupName: Specifies the group name, containing up to 64 characters.
	GroupName interface{} `field:"required" json:"groupName" yaml:"groupName"`
	// Property users: list name of a users to which you want to add the group.
	Users interface{} `field:"required" json:"users" yaml:"users"`
}

