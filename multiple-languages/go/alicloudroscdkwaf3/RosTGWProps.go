package alicloudroscdkwaf3


// Properties for defining a `RosTGW`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-waf3-tgw
type RosTGWProps struct {
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	Listen interface{} `field:"required" json:"listen" yaml:"listen"`
	Redirect interface{} `field:"optional" json:"redirect" yaml:"redirect"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
}

