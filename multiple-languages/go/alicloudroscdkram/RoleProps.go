package alicloudroscdkram


// Properties for defining a `Role`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-role
type RoleProps struct {
	// Property assumeRolePolicyDocument: The RAM assume role policy that is associated with this role.
	AssumeRolePolicyDocument interface{} `field:"required" json:"assumeRolePolicyDocument" yaml:"assumeRolePolicyDocument"`
	// Property roleName: Specifies the role name, containing up to 64 characters.
	RoleName interface{} `field:"required" json:"roleName" yaml:"roleName"`
	// Property deletionForce: Whether force detach the policies attached to the role.
	//
	// Default value is false.
	DeletionForce interface{} `field:"optional" json:"deletionForce" yaml:"deletionForce"`
	// Property description: Remark information, up to 1024 characters or Chinese characters.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property ignoreExisting: Whether to ignore existing role False: ROS will perform a uniqueness check.If a role with the same name exists, an error will be reported when creating it. True: ROS will not check the uniqueness.If there is a role with the same name, the role creation process will be ignored. If the role is not created by ROS, it will be ignored during update and delete stage.
	IgnoreExisting interface{} `field:"optional" json:"ignoreExisting" yaml:"ignoreExisting"`
	// Property maxSessionDuration: The maximum session duration of the RAM role.
	//
	// Valid values: 3600 to 43200. Unit: seconds. Default value: 3600.
	// The default value is used if the parameter is not specified.
	MaxSessionDuration interface{} `field:"optional" json:"maxSessionDuration" yaml:"maxSessionDuration"`
	// Property policies: Describes what actions are allowed on what resources.
	Policies interface{} `field:"optional" json:"policies" yaml:"policies"`
	// Property policyAttachments: System and custom policy names to attach.
	PolicyAttachments interface{} `field:"optional" json:"policyAttachments" yaml:"policyAttachments"`
}

