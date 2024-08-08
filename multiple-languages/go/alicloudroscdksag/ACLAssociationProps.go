package alicloudroscdksag


// Properties for defining a `ACLAssociation`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-aclassociation
type ACLAssociationProps struct {
	// Property aclId: Access control ID.
	AclId interface{} `field:"required" json:"aclId" yaml:"aclId"`
	// Property smartAgId: An intelligent gateway instance that needs to bind access control.
	SmartAgId interface{} `field:"required" json:"smartAgId" yaml:"smartAgId"`
}

