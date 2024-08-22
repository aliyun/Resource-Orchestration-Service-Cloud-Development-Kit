package alicloudroscdkwaf3


// Properties for defining a `TGW`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-waf3-tgw
type TGWProps struct {
	// Property instanceId: The ID of the WAF instance.
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	// Property listen: Listening information.
	Listen interface{} `field:"required" json:"listen" yaml:"listen"`
	// Property redirect: Forwarding information.
	Redirect interface{} `field:"optional" json:"redirect" yaml:"redirect"`
	// Property resourceGroupId: The ID of the resource group.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
}

