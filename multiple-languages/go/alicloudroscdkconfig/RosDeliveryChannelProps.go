package alicloudroscdkconfig


// Properties for defining a `RosDeliveryChannel`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-config-deliverychannel
type RosDeliveryChannelProps struct {
	DeliveryChannelAssumeRoleArn interface{} `field:"required" json:"deliveryChannelAssumeRoleArn" yaml:"deliveryChannelAssumeRoleArn"`
	DeliveryChannelTargetArn interface{} `field:"required" json:"deliveryChannelTargetArn" yaml:"deliveryChannelTargetArn"`
	DeliveryChannelType interface{} `field:"required" json:"deliveryChannelType" yaml:"deliveryChannelType"`
	DeliveryChannelCondition interface{} `field:"optional" json:"deliveryChannelCondition" yaml:"deliveryChannelCondition"`
	DeliveryChannelName interface{} `field:"optional" json:"deliveryChannelName" yaml:"deliveryChannelName"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
}

