package alicloudroscdkrocketmq5


type RosInstance_ProductInfoProperty struct {
	MsgProcessSpec interface{} `field:"required" json:"msgProcessSpec" yaml:"msgProcessSpec"`
	AutoScaling interface{} `field:"optional" json:"autoScaling" yaml:"autoScaling"`
	CapacityType interface{} `field:"optional" json:"capacityType" yaml:"capacityType"`
	MessageRetentionTime interface{} `field:"optional" json:"messageRetentionTime" yaml:"messageRetentionTime"`
	ProvisionedCapacity interface{} `field:"optional" json:"provisionedCapacity" yaml:"provisionedCapacity"`
	SendReceiveRatio interface{} `field:"optional" json:"sendReceiveRatio" yaml:"sendReceiveRatio"`
}

