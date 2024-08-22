package alicloudroscdkbastionhost


// Properties for defining a `RosInstance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-instance
type RosInstanceProps struct {
	ExtendedStoragePlans interface{} `field:"required" json:"extendedStoragePlans" yaml:"extendedStoragePlans"`
	ExtraBandwidth interface{} `field:"required" json:"extraBandwidth" yaml:"extraBandwidth"`
	Plan interface{} `field:"required" json:"plan" yaml:"plan"`
	StartInstanceParam interface{} `field:"required" json:"startInstanceParam" yaml:"startInstanceParam"`
	Version interface{} `field:"required" json:"version" yaml:"version"`
	AutoPay interface{} `field:"optional" json:"autoPay" yaml:"autoPay"`
	AutoRenew interface{} `field:"optional" json:"autoRenew" yaml:"autoRenew"`
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	PeriodUnit interface{} `field:"optional" json:"periodUnit" yaml:"periodUnit"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
}

