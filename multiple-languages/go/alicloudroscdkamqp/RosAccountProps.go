package alicloudroscdkamqp


// Properties for defining a `RosAccount`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-amqp-account
type RosAccountProps struct {
	AccountAccessKey interface{} `field:"required" json:"accountAccessKey" yaml:"accountAccessKey"`
	AccountAccessKeySecret interface{} `field:"required" json:"accountAccessKeySecret" yaml:"accountAccessKeySecret"`
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
}

