package alicloudroscdkens


// Properties for defining a `RosNetworkAcl`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-networkacl
type RosNetworkAclProps struct {
	AclEntries interface{} `field:"optional" json:"aclEntries" yaml:"aclEntries"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	NetworkAclName interface{} `field:"optional" json:"networkAclName" yaml:"networkAclName"`
}

