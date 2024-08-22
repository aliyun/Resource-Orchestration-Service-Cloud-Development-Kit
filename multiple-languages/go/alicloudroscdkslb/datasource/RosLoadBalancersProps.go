package datasource


// Properties for defining a `RosLoadBalancers`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-loadbalancers
type RosLoadBalancersProps struct {
	Address interface{} `field:"optional" json:"address" yaml:"address"`
	AddressIpVersion interface{} `field:"optional" json:"addressIpVersion" yaml:"addressIpVersion"`
	AddressType interface{} `field:"optional" json:"addressType" yaml:"addressType"`
	InternetChargeType interface{} `field:"optional" json:"internetChargeType" yaml:"internetChargeType"`
	LoadBalancerId interface{} `field:"optional" json:"loadBalancerId" yaml:"loadBalancerId"`
	LoadBalancerName interface{} `field:"optional" json:"loadBalancerName" yaml:"loadBalancerName"`
	MasterZoneId interface{} `field:"optional" json:"masterZoneId" yaml:"masterZoneId"`
	NetworkType interface{} `field:"optional" json:"networkType" yaml:"networkType"`
	PaymentType interface{} `field:"optional" json:"paymentType" yaml:"paymentType"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	SlaveZoneId interface{} `field:"optional" json:"slaveZoneId" yaml:"slaveZoneId"`
	Status interface{} `field:"optional" json:"status" yaml:"status"`
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
	VSwitchId interface{} `field:"optional" json:"vSwitchId" yaml:"vSwitchId"`
}

