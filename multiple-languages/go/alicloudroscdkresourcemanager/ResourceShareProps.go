package alicloudroscdkresourcemanager


// Properties for defining a `ResourceShare`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-resourceshare
type ResourceShareProps struct {
	// Property resourceShareName: The name of the resource share.
	//
	// The name must be 1 to 50 characters in length.
	// It can contain letters, digits, periods (.), underscores (_), and hyphens (-).
	ResourceShareName interface{} `field:"required" json:"resourceShareName" yaml:"resourceShareName"`
	// Property allowExternalTargets: Whether to allow sharing to accounts outside the resource directory.
	//
	// Value:
	// false (default): Only allow sharing within the resource directory.
	// true: Allow sharing to any account.
	AllowExternalTargets interface{} `field:"optional" json:"allowExternalTargets" yaml:"allowExternalTargets"`
	// Property permissionNames: Sharing permission name.
	//
	// When empty, the system automatically binds the default permissions associated with the resource type.
	PermissionNames interface{} `field:"optional" json:"permissionNames" yaml:"permissionNames"`
	// Property resources:.
	Resources interface{} `field:"optional" json:"resources" yaml:"resources"`
	// Property targets: The shared target.
	//
	// A shared target shares the resources of resource owners. You can share your resources
	// only with the member accounts in your resource directory. A shared target is indicated
	// by its account ID. For more information about how to obtain the ID, see View the basic information of a member account.
	Targets interface{} `field:"optional" json:"targets" yaml:"targets"`
}

