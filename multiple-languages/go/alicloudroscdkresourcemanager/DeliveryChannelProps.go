package alicloudroscdkresourcemanager


// Properties for defining a `DeliveryChannel`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-deliverychannel
type DeliveryChannelProps struct {
	// Property deliveryChannelFilter: The effective scope of the delivery channel.
	DeliveryChannelFilter interface{} `field:"required" json:"deliveryChannelFilter" yaml:"deliveryChannelFilter"`
	// Property deliveryChannelName: The name of the delivery channel.
	DeliveryChannelName interface{} `field:"required" json:"deliveryChannelName" yaml:"deliveryChannelName"`
	// Property deliveryChannelDescription: The description of the delivery channel.
	DeliveryChannelDescription interface{} `field:"optional" json:"deliveryChannelDescription" yaml:"deliveryChannelDescription"`
	// Property deliveryChannelId: The ID of the delivery channel.
	DeliveryChannelId interface{} `field:"optional" json:"deliveryChannelId" yaml:"deliveryChannelId"`
	// Property enabledResourceChangeDelivery: Enable resource change delivery.
	EnabledResourceChangeDelivery interface{} `field:"optional" json:"enabledResourceChangeDelivery" yaml:"enabledResourceChangeDelivery"`
	// Property enabledResourceSnapshotDelivery: Enable resource snapshot delivery.
	EnabledResourceSnapshotDelivery interface{} `field:"optional" json:"enabledResourceSnapshotDelivery" yaml:"enabledResourceSnapshotDelivery"`
	// Property resourceChangeDelivery: The delivery of resource configuration changes.
	ResourceChangeDelivery interface{} `field:"optional" json:"resourceChangeDelivery" yaml:"resourceChangeDelivery"`
	// Property resourceSnapshotDelivery: The scheduled delivery of resource snapshots.
	ResourceSnapshotDelivery interface{} `field:"optional" json:"resourceSnapshotDelivery" yaml:"resourceSnapshotDelivery"`
}

