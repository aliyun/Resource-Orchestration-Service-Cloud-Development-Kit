package alicloudroscdkecs


// Properties for defining a `NetworkInterfaceAttachment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-networkinterfaceattachment
type NetworkInterfaceAttachmentProps struct {
	// Property instanceId: ECS instance id.
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	// Property networkInterfaceId: Network interface id.
	NetworkInterfaceId interface{} `field:"required" json:"networkInterfaceId" yaml:"networkInterfaceId"`
	// Property ecsRestartOption: Control whether to restart the ECS instance when binding an elastic network card.Only effective for ENI that does not support hot swapping.
	EcsRestartOption interface{} `field:"optional" json:"ecsRestartOption" yaml:"ecsRestartOption"`
	// Property trunkNetworkInstanceId: undefined.
	TrunkNetworkInstanceId interface{} `field:"optional" json:"trunkNetworkInstanceId" yaml:"trunkNetworkInstanceId"`
}

