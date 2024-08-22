package alicloudroscdkalb


// Properties for defining a `RosAclAssociation`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-aclassociation
type RosAclAssociationProps struct {
	AclIds interface{} `field:"required" json:"aclIds" yaml:"aclIds"`
	AclType interface{} `field:"required" json:"aclType" yaml:"aclType"`
	ListenerId interface{} `field:"required" json:"listenerId" yaml:"listenerId"`
}

