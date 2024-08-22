package alicloudroscdkamqp


// Properties for defining a `RosVirtualHost`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-amqp-virtualhost
type RosVirtualHostProps struct {
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	VirtualHost interface{} `field:"required" json:"virtualHost" yaml:"virtualHost"`
}

