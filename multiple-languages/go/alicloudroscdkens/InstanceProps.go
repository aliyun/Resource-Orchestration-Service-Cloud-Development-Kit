package alicloudroscdkens


// Properties for defining a `Instance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-instance
type InstanceProps struct {
	// Property dataDiskSize: Disk size of the system disk, range from 20 to 500 GB.
	//
	// If you specify with your own image, make sure the system disk size bigger than image size.
	DataDiskSize interface{} `field:"required" json:"dataDiskSize" yaml:"dataDiskSize"`
	// Property ensRegionId: ENS Region Id.
	EnsRegionId interface{} `field:"required" json:"ensRegionId" yaml:"ensRegionId"`
	// Property imageId: Image ID to create ens instance.
	ImageId interface{} `field:"required" json:"imageId" yaml:"imageId"`
	// Property instanceType: ENS instance supported instance type, make sure it should be correct.
	InstanceType interface{} `field:"required" json:"instanceType" yaml:"instanceType"`
	// Property period: Prepaid time period.
	//
	// Unit is month, it could be from 1 to 9 or 12. Default value is 1.
	Period interface{} `field:"required" json:"period" yaml:"period"`
	// Property quantity: number of instances to create.
	Quantity interface{} `field:"required" json:"quantity" yaml:"quantity"`
	// Property systemDiskSize: Disk size of the system disk.
	SystemDiskSize interface{} `field:"required" json:"systemDiskSize" yaml:"systemDiskSize"`
	// Property autoRenew: Whether renew the fee automatically?it could be True,FalseDefault value is False.
	AutoRenew interface{} `field:"optional" json:"autoRenew" yaml:"autoRenew"`
	// Property autoRenewPeriod: The time period of auto renew.
	//
	// it will take effect.It could be 1, 2, 3, 6, 12. Default value is 1.
	AutoRenewPeriod interface{} `field:"optional" json:"autoRenewPeriod" yaml:"autoRenewPeriod"`
	// Property hostName: The hostname of the instance.
	HostName interface{} `field:"optional" json:"hostName" yaml:"hostName"`
	// Property instanceName: Instance name.
	InstanceName interface{} `field:"optional" json:"instanceName" yaml:"instanceName"`
	// Property internetChargeType: Instance Charge type.it could be 95BandwidthByMonth, PayByBandwidth4thMonth.
	InternetChargeType interface{} `field:"optional" json:"internetChargeType" yaml:"internetChargeType"`
	// Property ipType: ip type, It could be ipv4Andipv6,ipv4,ipv6.default value isi pv4.
	IpType interface{} `field:"optional" json:"ipType" yaml:"ipType"`
	// Property keyPairName: SSH key pair name.
	KeyPairName interface{} `field:"optional" json:"keyPairName" yaml:"keyPairName"`
	// Property password: Password of created ens instance.
	//
	// Must contain at least 3 types of special character, lower character, upper character, number.
	Password interface{} `field:"optional" json:"password" yaml:"password"`
	// Property paymentType: Payment Type.only support value Subscription.
	PaymentType interface{} `field:"optional" json:"paymentType" yaml:"paymentType"`
	// Property privateIpAddress: Private IP for the instance created.
	PrivateIpAddress interface{} `field:"optional" json:"privateIpAddress" yaml:"privateIpAddress"`
	// Property uniqueSuffix: Specifies whether to automatically append sequential suffixes to the hostnames specified by the HostName parameter and instance names specified by the InstanceName parameter when you create multiple instances at a time.
	//
	// The sequential suffix ranges from 001 to 999. Valid values:  true false Default value: false.
	UniqueSuffix interface{} `field:"optional" json:"uniqueSuffix" yaml:"uniqueSuffix"`
	// Property userData: User data to pass to instance.
	//
	// [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
	UserData interface{} `field:"optional" json:"userData" yaml:"userData"`
	// Property vSwitchId: The vSwitch Id to create ens instance.
	VSwitchId interface{} `field:"optional" json:"vSwitchId" yaml:"vSwitchId"`
}

