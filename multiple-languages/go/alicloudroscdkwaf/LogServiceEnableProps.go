package alicloudroscdkwaf


// Properties for defining a `LogServiceEnable`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-waf-logserviceenable
type LogServiceEnableProps struct {
	// Property domain: The domain name that is added to WAF.
	Domain interface{} `field:"required" json:"domain" yaml:"domain"`
	// Property instanceId: The ID of the WAF instance.
	//
	// You can call the DescribeInstanceInfo operation to query the ID of the WAF instance.
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
}

