package alicloudroscdkga


// Properties for defining a `RosAcl`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-acl
type RosAclProps struct {
	AddressIpVersion interface{} `field:"required" json:"addressIpVersion" yaml:"addressIpVersion"`
	AclEntries interface{} `field:"optional" json:"aclEntries" yaml:"aclEntries"`
	AclName interface{} `field:"optional" json:"aclName" yaml:"aclName"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	Tags *[]*RosAcl_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

