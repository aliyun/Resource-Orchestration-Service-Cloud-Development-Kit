package alicloudroscdkcloudsso


// Properties for defining a `RosUserToGroupAddition`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-usertogroupaddition
type RosUserToGroupAdditionProps struct {
	DirectoryId interface{} `field:"required" json:"directoryId" yaml:"directoryId"`
	GroupId interface{} `field:"required" json:"groupId" yaml:"groupId"`
	UserId interface{} `field:"required" json:"userId" yaml:"userId"`
}

