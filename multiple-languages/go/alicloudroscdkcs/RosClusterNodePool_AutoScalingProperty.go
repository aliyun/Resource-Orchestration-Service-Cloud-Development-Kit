package alicloudroscdkcs


type RosClusterNodePool_AutoScalingProperty struct {
	Enable interface{} `field:"required" json:"enable" yaml:"enable"`
	EipBandwidth interface{} `field:"optional" json:"eipBandwidth" yaml:"eipBandwidth"`
	EipInternetChargeType interface{} `field:"optional" json:"eipInternetChargeType" yaml:"eipInternetChargeType"`
	IsBondEip interface{} `field:"optional" json:"isBondEip" yaml:"isBondEip"`
	MaxInstances interface{} `field:"optional" json:"maxInstances" yaml:"maxInstances"`
	MinInstances interface{} `field:"optional" json:"minInstances" yaml:"minInstances"`
	Type interface{} `field:"optional" json:"type" yaml:"type"`
}

