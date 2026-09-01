package alicloudroscdkbastionhost


// Properties for defining a `UserGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-usergroup
type UserGroupProps struct {
	// Property instanceId: The ID of the BastionHost instance.
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	// Property userGroupName: The name of the user group that you want to create.
	//
	// This name can be a up to 128
	// characters in length.
	UserGroupName interface{} `field:"required" json:"userGroupName" yaml:"userGroupName"`
	// Property comment: The description of the user group.
	//
	// The description can be up to 500 characters in
	// length.
	Comment interface{} `field:"optional" json:"comment" yaml:"comment"`
}

