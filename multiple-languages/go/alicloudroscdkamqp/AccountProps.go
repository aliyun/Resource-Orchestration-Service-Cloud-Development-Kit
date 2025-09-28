package alicloudroscdkamqp


// Properties for defining a `Account`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-amqp-account
type AccountProps struct {
	// Property accountAccessKey: Your Alibaba Cloud account or RAM user's AccessKey ID.
	//
	// For obtaining it, visit RAM console.
	// If you use the static username and password created by the AccessKey of the RAM user to access the RabbitMQ version of the message queue and send and receive messages, make sure that the RAM user has been granted the permission of sending and receiving messages. For more information, see RAM permissions policy.
	AccountAccessKey interface{} `field:"required" json:"accountAccessKey" yaml:"accountAccessKey"`
	// Property accountAccessKeySecret: Your Alibaba Cloud account or RAM user's AccessKeySecret.
	AccountAccessKeySecret interface{} `field:"required" json:"accountAccessKeySecret" yaml:"accountAccessKeySecret"`
	// Property instanceId: Message Queue The ID of the RabbitMQ version instance, indicating which instance you need to create a static username and password.
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
}

