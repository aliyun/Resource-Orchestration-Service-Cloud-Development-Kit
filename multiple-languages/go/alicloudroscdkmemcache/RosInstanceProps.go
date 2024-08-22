package alicloudroscdkmemcache


// Properties for defining a `RosInstance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-memcache-instance
type RosInstanceProps struct {
	AutoRenew interface{} `field:"optional" json:"autoRenew" yaml:"autoRenew"`
	AutoRenewPeriod interface{} `field:"optional" json:"autoRenewPeriod" yaml:"autoRenewPeriod"`
	AutoUseCoupon interface{} `field:"optional" json:"autoUseCoupon" yaml:"autoUseCoupon"`
	BackupPolicy interface{} `field:"optional" json:"backupPolicy" yaml:"backupPolicy"`
	Capacity interface{} `field:"optional" json:"capacity" yaml:"capacity"`
	ChargeType interface{} `field:"optional" json:"chargeType" yaml:"chargeType"`
	Config interface{} `field:"optional" json:"config" yaml:"config"`
	CouponNo interface{} `field:"optional" json:"couponNo" yaml:"couponNo"`
	InstanceClass interface{} `field:"optional" json:"instanceClass" yaml:"instanceClass"`
	InstanceName interface{} `field:"optional" json:"instanceName" yaml:"instanceName"`
	NetworkType interface{} `field:"optional" json:"networkType" yaml:"networkType"`
	Password interface{} `field:"optional" json:"password" yaml:"password"`
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	PrivateIpAddress interface{} `field:"optional" json:"privateIpAddress" yaml:"privateIpAddress"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
	VpcPasswordFree interface{} `field:"optional" json:"vpcPasswordFree" yaml:"vpcPasswordFree"`
	VSwitchId interface{} `field:"optional" json:"vSwitchId" yaml:"vSwitchId"`
	ZoneId interface{} `field:"optional" json:"zoneId" yaml:"zoneId"`
}

