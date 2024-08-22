package alicloudroscdkalb


// Properties for defining a `AclAssociation`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-aclassociation
type AclAssociationProps struct {
	// Property aclIds: The IDs of the ACLs.
	//
	// You can specify up to three IDs at a time.
	AclIds interface{} `field:"required" json:"aclIds" yaml:"aclIds"`
	// Property aclType: The type of ACL.
	AclType interface{} `field:"required" json:"aclType" yaml:"aclType"`
	// Property listenerId: The ID of the listener.
	ListenerId interface{} `field:"required" json:"listenerId" yaml:"listenerId"`
}

