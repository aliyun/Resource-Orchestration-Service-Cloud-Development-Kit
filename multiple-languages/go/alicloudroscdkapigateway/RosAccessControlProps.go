package alicloudroscdkapigateway


// Properties for defining a `RosAccessControl`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-accesscontrol
type RosAccessControlProps struct {
	AccessControlListName interface{} `field:"required" json:"accessControlListName" yaml:"accessControlListName"`
	AclEntrys interface{} `field:"optional" json:"aclEntrys" yaml:"aclEntrys"`
	AddressIpVersion interface{} `field:"optional" json:"addressIpVersion" yaml:"addressIpVersion"`
}

