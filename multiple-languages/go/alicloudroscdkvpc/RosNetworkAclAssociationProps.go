package alicloudroscdkvpc


// Properties for defining a `RosNetworkAclAssociation`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-networkaclassociation
type RosNetworkAclAssociationProps struct {
	NetworkAclId interface{} `field:"required" json:"networkAclId" yaml:"networkAclId"`
	Resources interface{} `field:"required" json:"resources" yaml:"resources"`
}

