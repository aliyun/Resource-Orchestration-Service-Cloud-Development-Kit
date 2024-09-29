package alicloudroscdkrocketmq5


type RosInstance_InternetInfoProperty struct {
	InternetSpec interface{} `field:"required" json:"internetSpec" yaml:"internetSpec"`
	FlowOutBandwidth interface{} `field:"optional" json:"flowOutBandwidth" yaml:"flowOutBandwidth"`
	FlowOutType interface{} `field:"optional" json:"flowOutType" yaml:"flowOutType"`
	IpWhitelist interface{} `field:"optional" json:"ipWhitelist" yaml:"ipWhitelist"`
}

