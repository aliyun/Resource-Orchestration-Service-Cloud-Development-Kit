package alicloudroscdkresourcemanager


// Properties for defining a `MultiAccountDeliveryChannel`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-multiaccountdeliverychannel
type MultiAccountDeliveryChannelProps struct {
	// Property deliveryChannelDescription: The description of the delivery channel.
	DeliveryChannelDescription interface{} `field:"required" json:"deliveryChannelDescription" yaml:"deliveryChannelDescription"`
	// Property deliveryChannelFilter: The effective scope of the delivery channel.
	DeliveryChannelFilter interface{} `field:"required" json:"deliveryChannelFilter" yaml:"deliveryChannelFilter"`
	// Property multiAccountDeliveryChannelName: The name of the delivery channel.
	MultiAccountDeliveryChannelName interface{} `field:"required" json:"multiAccountDeliveryChannelName" yaml:"multiAccountDeliveryChannelName"`
	// Property multiAccountDeliveryChannelId: Delivery Channel id.
	MultiAccountDeliveryChannelId interface{} `field:"optional" json:"multiAccountDeliveryChannelId" yaml:"multiAccountDeliveryChannelId"`
	// Property resourceChangeDelivery: The configurations for delivery of resource configuration change events.
	ResourceChangeDelivery interface{} `field:"optional" json:"resourceChangeDelivery" yaml:"resourceChangeDelivery"`
	// Property resourceSnapshotDelivery: The configurations for scheduled delivery of resource snapshots.
	ResourceSnapshotDelivery interface{} `field:"optional" json:"resourceSnapshotDelivery" yaml:"resourceSnapshotDelivery"`
}

