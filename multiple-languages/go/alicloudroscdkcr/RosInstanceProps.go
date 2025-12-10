package alicloudroscdkcr


// Properties for defining a `RosInstance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-instance
type RosInstanceProps struct {
	InstanceName interface{} `field:"required" json:"instanceName" yaml:"instanceName"`
	InstanceType interface{} `field:"required" json:"instanceType" yaml:"instanceType"`
	ImageScanner interface{} `field:"optional" json:"imageScanner" yaml:"imageScanner"`
	InstanceStorageName interface{} `field:"optional" json:"instanceStorageName" yaml:"instanceStorageName"`
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	RenewalStatus interface{} `field:"optional" json:"renewalStatus" yaml:"renewalStatus"`
	RenewPeriod interface{} `field:"optional" json:"renewPeriod" yaml:"renewPeriod"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
}

