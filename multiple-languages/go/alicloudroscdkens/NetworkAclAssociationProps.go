package alicloudroscdkens


// Properties for defining a `NetworkAclAssociation`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-networkaclassociation
type NetworkAclAssociationProps struct {
	// Property networkAclId: The ID of the network ACL.
	NetworkAclId interface{} `field:"required" json:"networkAclId" yaml:"networkAclId"`
	// Property networkIds: The network id which you want to associate the network ACL.
	NetworkIds interface{} `field:"required" json:"networkIds" yaml:"networkIds"`
}

