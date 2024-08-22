package alicloudroscdkecs


// Properties for defining a `RosNetworkInterfaceAttachment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-networkinterfaceattachment
type RosNetworkInterfaceAttachmentProps struct {
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	NetworkInterfaceId interface{} `field:"required" json:"networkInterfaceId" yaml:"networkInterfaceId"`
	EcsRestartOption interface{} `field:"optional" json:"ecsRestartOption" yaml:"ecsRestartOption"`
	TrunkNetworkInstanceId interface{} `field:"optional" json:"trunkNetworkInstanceId" yaml:"trunkNetworkInstanceId"`
}

