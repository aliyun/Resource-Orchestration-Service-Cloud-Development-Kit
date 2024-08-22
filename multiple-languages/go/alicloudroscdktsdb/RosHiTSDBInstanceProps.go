package alicloudroscdktsdb


// Properties for defining a `RosHiTSDBInstance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-tsdb-hitsdbinstance
type RosHiTSDBInstanceProps struct {
	InstanceClass interface{} `field:"required" json:"instanceClass" yaml:"instanceClass"`
	InstanceStorage interface{} `field:"required" json:"instanceStorage" yaml:"instanceStorage"`
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	VSwitchId interface{} `field:"required" json:"vSwitchId" yaml:"vSwitchId"`
	ZoneId interface{} `field:"required" json:"zoneId" yaml:"zoneId"`
	DiskCategory interface{} `field:"optional" json:"diskCategory" yaml:"diskCategory"`
	Duration interface{} `field:"optional" json:"duration" yaml:"duration"`
	InstanceAlias interface{} `field:"optional" json:"instanceAlias" yaml:"instanceAlias"`
	PayType interface{} `field:"optional" json:"payType" yaml:"payType"`
	PricingCycle interface{} `field:"optional" json:"pricingCycle" yaml:"pricingCycle"`
	SecurityIpList interface{} `field:"optional" json:"securityIpList" yaml:"securityIpList"`
}

