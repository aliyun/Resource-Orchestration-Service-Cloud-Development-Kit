package alicloudroscdkpolardb


// Properties for defining a `GlobalSecurityIPGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-globalsecurityipgroup
type GlobalSecurityIPGroupProps struct {
	// Property gIpList: The IP addresses in the whitelist template.
	//
	// You can create up to 1,000 IP addresses or CIDR blocks for all IP whitelists.
	GIpList interface{} `field:"required" json:"gIpList" yaml:"gIpList"`
	// Property globalIgName: The name of the IP whitelist template.
	//
	// The name must meet the following requirements:
	// The name can contain lowercase letters, digits, and underscores (_).
	// The name must start with a letter and end with a letter or digit.
	// The name must be 2 to 120 characters in length.
	GlobalIgName interface{} `field:"required" json:"globalIgName" yaml:"globalIgName"`
	// Property resourceGroupId: The ID of the resource group.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
}

