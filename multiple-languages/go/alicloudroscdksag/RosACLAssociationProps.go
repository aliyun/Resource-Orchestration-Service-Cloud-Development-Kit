package alicloudroscdksag


// Properties for defining a `RosACLAssociation`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-aclassociation
type RosACLAssociationProps struct {
	AclId interface{} `field:"required" json:"aclId" yaml:"aclId"`
	SmartAgId interface{} `field:"required" json:"smartAgId" yaml:"smartAgId"`
}

