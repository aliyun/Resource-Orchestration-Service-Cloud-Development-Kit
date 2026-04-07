package alicloudroscdkbastionhost


// Properties for defining a `UserGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-usergroup
type UserGroupProps struct {
	// Property instanceId: The ID of the BastionHost instance.
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	// Property userGroupName: The name of the user group.
	UserGroupName interface{} `field:"required" json:"userGroupName" yaml:"userGroupName"`
	// Property comment: The comment of the user group.
	Comment interface{} `field:"optional" json:"comment" yaml:"comment"`
}

