package alicloudroscdkslb


// Properties for defining a `RosLoadBalancer`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-loadbalancer
type RosLoadBalancerProps struct {
	AddressIpVersion interface{} `field:"optional" json:"addressIpVersion" yaml:"addressIpVersion"`
	AddressType interface{} `field:"optional" json:"addressType" yaml:"addressType"`
	AutoPay interface{} `field:"optional" json:"autoPay" yaml:"autoPay"`
	AutoRenew interface{} `field:"optional" json:"autoRenew" yaml:"autoRenew"`
	AutoRenewPeriod interface{} `field:"optional" json:"autoRenewPeriod" yaml:"autoRenewPeriod"`
	Bandwidth interface{} `field:"optional" json:"bandwidth" yaml:"bandwidth"`
	DeletionProtection interface{} `field:"optional" json:"deletionProtection" yaml:"deletionProtection"`
	Duration interface{} `field:"optional" json:"duration" yaml:"duration"`
	InstanceChargeType interface{} `field:"optional" json:"instanceChargeType" yaml:"instanceChargeType"`
	InternetChargeType interface{} `field:"optional" json:"internetChargeType" yaml:"internetChargeType"`
	LoadBalancerName interface{} `field:"optional" json:"loadBalancerName" yaml:"loadBalancerName"`
	LoadBalancerSpec interface{} `field:"optional" json:"loadBalancerSpec" yaml:"loadBalancerSpec"`
	MasterZoneId interface{} `field:"optional" json:"masterZoneId" yaml:"masterZoneId"`
	ModificationProtectionReason interface{} `field:"optional" json:"modificationProtectionReason" yaml:"modificationProtectionReason"`
	ModificationProtectionStatus interface{} `field:"optional" json:"modificationProtectionStatus" yaml:"modificationProtectionStatus"`
	PayType interface{} `field:"optional" json:"payType" yaml:"payType"`
	PricingCycle interface{} `field:"optional" json:"pricingCycle" yaml:"pricingCycle"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	SlaveZoneId interface{} `field:"optional" json:"slaveZoneId" yaml:"slaveZoneId"`
	Tags *[]*RosLoadBalancer_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
	VSwitchId interface{} `field:"optional" json:"vSwitchId" yaml:"vSwitchId"`
}

