package alicloudroscdkens


// Properties for defining a `RosInstance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-instance
type RosInstanceProps struct {
	DataDiskSize interface{} `field:"required" json:"dataDiskSize" yaml:"dataDiskSize"`
	EnsRegionId interface{} `field:"required" json:"ensRegionId" yaml:"ensRegionId"`
	ImageId interface{} `field:"required" json:"imageId" yaml:"imageId"`
	InstanceType interface{} `field:"required" json:"instanceType" yaml:"instanceType"`
	Period interface{} `field:"required" json:"period" yaml:"period"`
	Quantity interface{} `field:"required" json:"quantity" yaml:"quantity"`
	SystemDiskSize interface{} `field:"required" json:"systemDiskSize" yaml:"systemDiskSize"`
	AutoRenew interface{} `field:"optional" json:"autoRenew" yaml:"autoRenew"`
	AutoRenewPeriod interface{} `field:"optional" json:"autoRenewPeriod" yaml:"autoRenewPeriod"`
	HostName interface{} `field:"optional" json:"hostName" yaml:"hostName"`
	InstanceName interface{} `field:"optional" json:"instanceName" yaml:"instanceName"`
	InternetChargeType interface{} `field:"optional" json:"internetChargeType" yaml:"internetChargeType"`
	IpType interface{} `field:"optional" json:"ipType" yaml:"ipType"`
	KeyPairName interface{} `field:"optional" json:"keyPairName" yaml:"keyPairName"`
	Password interface{} `field:"optional" json:"password" yaml:"password"`
	PaymentType interface{} `field:"optional" json:"paymentType" yaml:"paymentType"`
	PrivateIpAddress interface{} `field:"optional" json:"privateIpAddress" yaml:"privateIpAddress"`
	UniqueSuffix interface{} `field:"optional" json:"uniqueSuffix" yaml:"uniqueSuffix"`
	UserData interface{} `field:"optional" json:"userData" yaml:"userData"`
	VSwitchId interface{} `field:"optional" json:"vSwitchId" yaml:"vSwitchId"`
}

