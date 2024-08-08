package alicloudroscdkga


// Properties for defining a `RosAclsListenerAssociation`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-aclslistenerassociation
type RosAclsListenerAssociationProps struct {
	AclIds interface{} `field:"required" json:"aclIds" yaml:"aclIds"`
	AclType interface{} `field:"required" json:"aclType" yaml:"aclType"`
	ListenerId interface{} `field:"required" json:"listenerId" yaml:"listenerId"`
}

