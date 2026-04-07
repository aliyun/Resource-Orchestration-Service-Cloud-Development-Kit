package alicloudroscdkbastionhost


// Properties for defining a `RosUserGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-usergroup
type RosUserGroupProps struct {
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	UserGroupName interface{} `field:"required" json:"userGroupName" yaml:"userGroupName"`
	Comment interface{} `field:"optional" json:"comment" yaml:"comment"`
}

