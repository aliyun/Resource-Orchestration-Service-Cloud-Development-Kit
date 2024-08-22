package alicloudroscdkamqp


// Properties for defining a `VirtualHost`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-amqp-virtualhost
type VirtualHostProps struct {
	// Property instanceId: InstanceId.
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	// Property virtualHost: The name of the virtual host.
	VirtualHost interface{} `field:"required" json:"virtualHost" yaml:"virtualHost"`
}

