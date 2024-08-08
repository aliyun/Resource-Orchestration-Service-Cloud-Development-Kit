package datasource


// Properties for defining a `LoadBalancers`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-alb-loadbalancers
type LoadBalancersProps struct {
	// Property addressType: The address type of the load balancing instance.
	AddressType interface{} `field:"optional" json:"addressType" yaml:"addressType"`
	// Property loadBalancerBussinessStatus: Service status of application load balancing.
	LoadBalancerBussinessStatus interface{} `field:"optional" json:"loadBalancerBussinessStatus" yaml:"loadBalancerBussinessStatus"`
	// Property loadBalancerIds: IDs of the load balancer instance.
	LoadBalancerIds interface{} `field:"optional" json:"loadBalancerIds" yaml:"loadBalancerIds"`
	// Property loadBalancerNames: Names of the load balancing instance.
	LoadBalancerNames interface{} `field:"optional" json:"loadBalancerNames" yaml:"loadBalancerNames"`
	// Property loadBalancerStatus: The status of SLB.
	LoadBalancerStatus interface{} `field:"optional" json:"loadBalancerStatus" yaml:"loadBalancerStatus"`
	// Property payType: Load balancing instance payment type.
	PayType interface{} `field:"optional" json:"payType" yaml:"payType"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	// Property resourceGroupId: Resource group id.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property tags: Tags of Alb.
	Tags *[]*RosLoadBalancers_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	// Property vpcIds: VPC IDs.
	VpcIds interface{} `field:"optional" json:"vpcIds" yaml:"vpcIds"`
	// Property zoneId: ID of the ready-to-use zone of the load balancing instance.
	ZoneId interface{} `field:"optional" json:"zoneId" yaml:"zoneId"`
}

