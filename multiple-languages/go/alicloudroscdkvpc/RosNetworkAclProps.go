package alicloudroscdkvpc


// Properties for defining a `RosNetworkAcl`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-networkacl
type RosNetworkAclProps struct {
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	EgressAclEntries interface{} `field:"optional" json:"egressAclEntries" yaml:"egressAclEntries"`
	IngressAclEntries interface{} `field:"optional" json:"ingressAclEntries" yaml:"ingressAclEntries"`
	NetworkAclName interface{} `field:"optional" json:"networkAclName" yaml:"networkAclName"`
}

