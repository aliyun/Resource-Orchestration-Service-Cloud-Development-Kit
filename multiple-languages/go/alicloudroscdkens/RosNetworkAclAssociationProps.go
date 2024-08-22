package alicloudroscdkens


// Properties for defining a `RosNetworkAclAssociation`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-networkaclassociation
type RosNetworkAclAssociationProps struct {
	NetworkAclId interface{} `field:"required" json:"networkAclId" yaml:"networkAclId"`
	NetworkIds interface{} `field:"required" json:"networkIds" yaml:"networkIds"`
}

