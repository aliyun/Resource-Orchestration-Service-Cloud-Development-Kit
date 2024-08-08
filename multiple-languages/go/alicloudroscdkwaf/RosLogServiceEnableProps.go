package alicloudroscdkwaf


// Properties for defining a `RosLogServiceEnable`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-waf-logserviceenable
type RosLogServiceEnableProps struct {
	Domain interface{} `field:"required" json:"domain" yaml:"domain"`
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
}

