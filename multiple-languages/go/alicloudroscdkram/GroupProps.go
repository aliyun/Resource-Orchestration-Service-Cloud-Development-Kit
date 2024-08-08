package alicloudroscdkram


// Properties for defining a `Group`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-group
type GroupProps struct {
	// Property groupName: Specifies the group name, containing up to 64 characters.
	GroupName interface{} `field:"required" json:"groupName" yaml:"groupName"`
	// Property comments: Remark information, up to 128 characters or Chinese characters.
	Comments interface{} `field:"optional" json:"comments" yaml:"comments"`
	// Property deletionForce: Whether force detach the policies attached to the group.
	//
	// Default value is false.
	DeletionForce interface{} `field:"optional" json:"deletionForce" yaml:"deletionForce"`
	// Property ignoreExisting: Whether to ignore existing group False: ROS will perform a uniqueness check.If a group with the same name exists, an error will be reported when creating it. True: ROS will not check the uniqueness.If there is a group with the same name, the group creation process will be ignored. If the group is not created by ROS, it will be ignored during update and delete stage.
	IgnoreExisting interface{} `field:"optional" json:"ignoreExisting" yaml:"ignoreExisting"`
	// Property policies: Describes what actions are allowed on what resources.
	Policies interface{} `field:"optional" json:"policies" yaml:"policies"`
	// Property policyAttachments: System and custom policy names to attach.
	PolicyAttachments interface{} `field:"optional" json:"policyAttachments" yaml:"policyAttachments"`
}

