package alicloudroscdkram


// Properties for defining a `ManagedPolicy`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-managedpolicy
type ManagedPolicyProps struct {
	// Property policyName: Specifies the authorization policy name, containing up to 128 characters.
	PolicyName interface{} `field:"required" json:"policyName" yaml:"policyName"`
	// Property description: Specifies the authorization policy description, containing up to 1024 characters.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property groups: The names of groups to attach to this policy.
	Groups interface{} `field:"optional" json:"groups" yaml:"groups"`
	// Property ignoreExisting: Whether to ignore existing policy False: ROS will perform a uniqueness check.If a policy with the same name exists, an error will be reported when creating it. True: ROS will not check the uniqueness.If there is a policy with the same name, the policy creation process will be ignored. If the policy is not created by ROS, it will be ignored during update and delete stage.
	IgnoreExisting interface{} `field:"optional" json:"ignoreExisting" yaml:"ignoreExisting"`
	// Property policyDocument: A policy document that describes what actions are allowed on which resources.
	PolicyDocument interface{} `field:"optional" json:"policyDocument" yaml:"policyDocument"`
	// Property policyDocumentUnchecked: A policy document that describes what actions are allowed on which resources.
	//
	// If it is specified, PolicyDocument will be ignored.
	PolicyDocumentUnchecked interface{} `field:"optional" json:"policyDocumentUnchecked" yaml:"policyDocumentUnchecked"`
	// Property roles: The names of roles to attach to this policy.
	Roles interface{} `field:"optional" json:"roles" yaml:"roles"`
	// Property users: The names of users to attach to this policy.
	Users interface{} `field:"optional" json:"users" yaml:"users"`
}

