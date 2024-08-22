package alicloudroscdkalb


// Properties for defining a `RosAcl`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-acl
type RosAclProps struct {
	AclEntries interface{} `field:"optional" json:"aclEntries" yaml:"aclEntries"`
	AclName interface{} `field:"optional" json:"aclName" yaml:"aclName"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
}

