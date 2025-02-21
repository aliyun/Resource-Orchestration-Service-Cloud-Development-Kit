package alicloudroscdkpolardb


// Properties for defining a `RosGlobalSecurityIPGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-globalsecurityipgroup
type RosGlobalSecurityIPGroupProps struct {
	GIpList interface{} `field:"required" json:"gIpList" yaml:"gIpList"`
	GlobalIgName interface{} `field:"required" json:"globalIgName" yaml:"globalIgName"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
}

