package alicloudroscdkcr


// Properties for defining a `RosInstanceV2`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-instancev2
type RosInstanceV2Props struct {
	InstanceName interface{} `field:"required" json:"instanceName" yaml:"instanceName"`
	InstanceType interface{} `field:"required" json:"instanceType" yaml:"instanceType"`
	PaymentType interface{} `field:"required" json:"paymentType" yaml:"paymentType"`
	CustomOssBucket interface{} `field:"optional" json:"customOssBucket" yaml:"customOssBucket"`
	DefaultOssBucket interface{} `field:"optional" json:"defaultOssBucket" yaml:"defaultOssBucket"`
	ImageScanner interface{} `field:"optional" json:"imageScanner" yaml:"imageScanner"`
	Password interface{} `field:"optional" json:"password" yaml:"password"`
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	RenewalStatus interface{} `field:"optional" json:"renewalStatus" yaml:"renewalStatus"`
	RenewPeriod interface{} `field:"optional" json:"renewPeriod" yaml:"renewPeriod"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
}

