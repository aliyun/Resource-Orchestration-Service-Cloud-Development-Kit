package alicloudroscdkcr


// Properties for defining a `RosInstance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-instance
type RosInstanceProps struct {
	ImageScanner interface{} `field:"required" json:"imageScanner" yaml:"imageScanner"`
	InstanceName interface{} `field:"required" json:"instanceName" yaml:"instanceName"`
	InstanceType interface{} `field:"required" json:"instanceType" yaml:"instanceType"`
	Period interface{} `field:"required" json:"period" yaml:"period"`
	InstanceStorageName interface{} `field:"optional" json:"instanceStorageName" yaml:"instanceStorageName"`
	RenewalStatus interface{} `field:"optional" json:"renewalStatus" yaml:"renewalStatus"`
	RenewPeriod interface{} `field:"optional" json:"renewPeriod" yaml:"renewPeriod"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
}

