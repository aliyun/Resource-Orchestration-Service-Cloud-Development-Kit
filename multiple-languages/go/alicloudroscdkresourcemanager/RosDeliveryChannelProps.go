package alicloudroscdkresourcemanager


// Properties for defining a `RosDeliveryChannel`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-deliverychannel
type RosDeliveryChannelProps struct {
	DeliveryChannelFilter interface{} `field:"required" json:"deliveryChannelFilter" yaml:"deliveryChannelFilter"`
	DeliveryChannelName interface{} `field:"required" json:"deliveryChannelName" yaml:"deliveryChannelName"`
	DeliveryChannelDescription interface{} `field:"optional" json:"deliveryChannelDescription" yaml:"deliveryChannelDescription"`
	DeliveryChannelId interface{} `field:"optional" json:"deliveryChannelId" yaml:"deliveryChannelId"`
	EnabledResourceChangeDelivery interface{} `field:"optional" json:"enabledResourceChangeDelivery" yaml:"enabledResourceChangeDelivery"`
	EnabledResourceSnapshotDelivery interface{} `field:"optional" json:"enabledResourceSnapshotDelivery" yaml:"enabledResourceSnapshotDelivery"`
	ResourceChangeDelivery interface{} `field:"optional" json:"resourceChangeDelivery" yaml:"resourceChangeDelivery"`
	ResourceSnapshotDelivery interface{} `field:"optional" json:"resourceSnapshotDelivery" yaml:"resourceSnapshotDelivery"`
}

