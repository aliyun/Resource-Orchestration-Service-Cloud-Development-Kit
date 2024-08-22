package alicloudroscdkvpc


// Properties for defining a `NetworkAcl`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-networkacl
type NetworkAclProps struct {
	// Property vpcId: The ID of the virtual private cloud (VPC) to which the network ACL belongs.
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	// Property description: The description of the network ACL.
	//
	// The description must be 2 to 256 characters in length. The description must start
	// with a letter but cannot start with http:\/\/ or https:\/\/.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property egressAclEntries: The list of egress network ACL entries.
	EgressAclEntries interface{} `field:"optional" json:"egressAclEntries" yaml:"egressAclEntries"`
	// Property ingressAclEntries: The list of ingress network ACL entries.
	IngressAclEntries interface{} `field:"optional" json:"ingressAclEntries" yaml:"ingressAclEntries"`
	// Property networkAclName: The name of the network ACL.
	//
	// The name must be 2 to 128 characters in length and can contain letters, digits, periods
	// (.), underscores (_), and hyphens (-). The name must start with a letter and cannot
	// start with http:\/\/ or https:\/\/.
	NetworkAclName interface{} `field:"optional" json:"networkAclName" yaml:"networkAclName"`
}

