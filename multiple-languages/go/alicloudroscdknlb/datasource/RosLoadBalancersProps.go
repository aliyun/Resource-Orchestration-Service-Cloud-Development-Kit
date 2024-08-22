package datasource


// Properties for defining a `RosLoadBalancers`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-nlb-loadbalancers
type RosLoadBalancersProps struct {
	AddressIpVersion interface{} `field:"optional" json:"addressIpVersion" yaml:"addressIpVersion"`
	AddressType interface{} `field:"optional" json:"addressType" yaml:"addressType"`
	Ipv6AddressType interface{} `field:"optional" json:"ipv6AddressType" yaml:"ipv6AddressType"`
	LoadBalancerBussinessStatus interface{} `field:"optional" json:"loadBalancerBussinessStatus" yaml:"loadBalancerBussinessStatus"`
	LoadBalancerIds interface{} `field:"optional" json:"loadBalancerIds" yaml:"loadBalancerIds"`
	LoadBalancerNames interface{} `field:"optional" json:"loadBalancerNames" yaml:"loadBalancerNames"`
	LoadBalancerStatus interface{} `field:"optional" json:"loadBalancerStatus" yaml:"loadBalancerStatus"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	Tags *[]*RosLoadBalancers_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	VpcIds interface{} `field:"optional" json:"vpcIds" yaml:"vpcIds"`
	ZoneId interface{} `field:"optional" json:"zoneId" yaml:"zoneId"`
}

