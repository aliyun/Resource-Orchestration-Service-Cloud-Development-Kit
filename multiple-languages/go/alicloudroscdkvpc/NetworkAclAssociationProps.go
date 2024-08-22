package alicloudroscdkvpc


// Properties for defining a `NetworkAclAssociation`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-networkaclassociation
type NetworkAclAssociationProps struct {
	// Property networkAclId: The ID of the network ACL.
	NetworkAclId interface{} `field:"required" json:"networkAclId" yaml:"networkAclId"`
	// Property resources: The list of resources that need to be associated with network ACL.
	Resources interface{} `field:"required" json:"resources" yaml:"resources"`
}

