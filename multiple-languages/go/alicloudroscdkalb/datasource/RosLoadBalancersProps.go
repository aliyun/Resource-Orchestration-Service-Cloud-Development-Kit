package datasource


// Properties for defining a `RosLoadBalancers`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-alb-loadbalancers
type RosLoadBalancersProps struct {
	AddressType interface{} `field:"optional" json:"addressType" yaml:"addressType"`
	LoadBalancerBussinessStatus interface{} `field:"optional" json:"loadBalancerBussinessStatus" yaml:"loadBalancerBussinessStatus"`
	LoadBalancerIds interface{} `field:"optional" json:"loadBalancerIds" yaml:"loadBalancerIds"`
	LoadBalancerNames interface{} `field:"optional" json:"loadBalancerNames" yaml:"loadBalancerNames"`
	LoadBalancerStatus interface{} `field:"optional" json:"loadBalancerStatus" yaml:"loadBalancerStatus"`
	PayType interface{} `field:"optional" json:"payType" yaml:"payType"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	Tags *[]*RosLoadBalancers_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	VpcIds interface{} `field:"optional" json:"vpcIds" yaml:"vpcIds"`
	ZoneId interface{} `field:"optional" json:"zoneId" yaml:"zoneId"`
}

