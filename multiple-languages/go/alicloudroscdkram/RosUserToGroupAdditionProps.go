package alicloudroscdkram


// Properties for defining a `RosUserToGroupAddition`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-usertogroupaddition
type RosUserToGroupAdditionProps struct {
	GroupName interface{} `field:"required" json:"groupName" yaml:"groupName"`
	Users interface{} `field:"required" json:"users" yaml:"users"`
}

