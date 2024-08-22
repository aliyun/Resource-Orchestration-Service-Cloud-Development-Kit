package alicloudroscdktsdb


// Properties for defining a `HiTSDBInstance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-tsdb-hitsdbinstance
type HiTSDBInstanceProps struct {
	// Property instanceClass: The type of the instance.
	InstanceClass interface{} `field:"required" json:"instanceClass" yaml:"instanceClass"`
	// Property instanceStorage: The storage capacity of the instance.
	//
	// Unit: GB. For example, the value 50 indicates 50 GB.
	InstanceStorage interface{} `field:"required" json:"instanceStorage" yaml:"instanceStorage"`
	// Property vpcId: The ID of the virtual private cloud (VPC) that is connected to the instance.
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	// Property vSwitchId: The ID of the VSwitch in the specified VPC.
	VSwitchId interface{} `field:"required" json:"vSwitchId" yaml:"vSwitchId"`
	// Property zoneId: The zone ID of the instance.
	ZoneId interface{} `field:"required" json:"zoneId" yaml:"zoneId"`
	// Property diskCategory: The category of disk.
	DiskCategory interface{} `field:"optional" json:"diskCategory" yaml:"diskCategory"`
	// Property duration: The validity period of the instance.
	//
	// This parameter is valid only when the PayType parameter is set to PREPAY. Default value: 1.
	Duration interface{} `field:"optional" json:"duration" yaml:"duration"`
	// Property instanceAlias: The alias of the instance.
	InstanceAlias interface{} `field:"optional" json:"instanceAlias" yaml:"instanceAlias"`
	// Property payType: The billing method.
	//
	// Valid values:
	// - **prepay**: The prepay value indicates the subscription method.
	PayType interface{} `field:"optional" json:"payType" yaml:"payType"`
	// Property pricingCycle: The unit of the validity period.
	//
	// This parameter is valid only when the PayType parameter is set to PREPAY. Default value: Month.
	PricingCycle interface{} `field:"optional" json:"pricingCycle" yaml:"pricingCycle"`
	// Property securityIpList: List of the IP patterns.For example, ["127.0.0.1", "192.168.0.1\/24"].
	SecurityIpList interface{} `field:"optional" json:"securityIpList" yaml:"securityIpList"`
}

