package alicloudroscdkslb


// Properties for defining a `RosAccessControl`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-accesscontrol
type RosAccessControlProps struct {
	AclName interface{} `field:"required" json:"aclName" yaml:"aclName"`
	AclEntries interface{} `field:"optional" json:"aclEntries" yaml:"aclEntries"`
	AddressIpVersion interface{} `field:"optional" json:"addressIpVersion" yaml:"addressIpVersion"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	Tags *[]*RosAccessControl_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

