package alicloudroscdkresourcemanager


// Properties for defining a `ResourceShareAssociation`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-resourceshareassociation
type ResourceShareAssociationProps struct {
	// Property resourceShareId: The ID of the resource share.
	ResourceShareId interface{} `field:"required" json:"resourceShareId" yaml:"resourceShareId"`
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

