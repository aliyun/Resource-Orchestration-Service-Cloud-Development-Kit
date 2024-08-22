package alicloudroscdkrocketmq5


type RosInstance_ProductInfoProperty struct {
	MsgProcessSpec interface{} `field:"required" json:"msgProcessSpec" yaml:"msgProcessSpec"`
	AutoScaling interface{} `field:"optional" json:"autoScaling" yaml:"autoScaling"`
	MessageRetentionTime interface{} `field:"optional" json:"messageRetentionTime" yaml:"messageRetentionTime"`
	SendReceiveRatio interface{} `field:"optional" json:"sendReceiveRatio" yaml:"sendReceiveRatio"`
}

