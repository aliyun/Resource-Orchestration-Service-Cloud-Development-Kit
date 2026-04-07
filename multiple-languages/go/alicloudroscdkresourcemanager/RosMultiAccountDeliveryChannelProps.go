package alicloudroscdkresourcemanager


// Properties for defining a `RosMultiAccountDeliveryChannel`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-multiaccountdeliverychannel
type RosMultiAccountDeliveryChannelProps struct {
	DeliveryChannelDescription interface{} `field:"required" json:"deliveryChannelDescription" yaml:"deliveryChannelDescription"`
	DeliveryChannelFilter interface{} `field:"required" json:"deliveryChannelFilter" yaml:"deliveryChannelFilter"`
	MultiAccountDeliveryChannelName interface{} `field:"required" json:"multiAccountDeliveryChannelName" yaml:"multiAccountDeliveryChannelName"`
	MultiAccountDeliveryChannelId interface{} `field:"optional" json:"multiAccountDeliveryChannelId" yaml:"multiAccountDeliveryChannelId"`
	ResourceChangeDelivery interface{} `field:"optional" json:"resourceChangeDelivery" yaml:"resourceChangeDelivery"`
	ResourceSnapshotDelivery interface{} `field:"optional" json:"resourceSnapshotDelivery" yaml:"resourceSnapshotDelivery"`
}

