package datasource


// Properties for defining a `LoadBalancers`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-loadbalancers
type LoadBalancersProps struct {
	// Property address: The service address of the load balancing instance.
	Address interface{} `field:"optional" json:"address" yaml:"address"`
	// Property addressIpVersion: IP version.
	AddressIpVersion interface{} `field:"optional" json:"addressIpVersion" yaml:"addressIpVersion"`
	// Property addressType: The address type of the load balancing instance.
	AddressType interface{} `field:"optional" json:"addressType" yaml:"addressType"`
	// Property internetChargeType: Public network type instance payment method.
	InternetChargeType interface{} `field:"optional" json:"internetChargeType" yaml:"internetChargeType"`
	// Property loadBalancerId: ID of the load balancing instance.
	LoadBalancerId interface{} `field:"optional" json:"loadBalancerId" yaml:"loadBalancerId"`
	// Property loadBalancerName: Name of the load balancing instance.
	LoadBalancerName interface{} `field:"optional" json:"loadBalancerName" yaml:"loadBalancerName"`
	// Property masterZoneId: ID of the primary available area of the load balancing instance.
	MasterZoneId interface{} `field:"optional" json:"masterZoneId" yaml:"masterZoneId"`
	// Property networkType: The network type of the private network load balancing instance.
	NetworkType interface{} `field:"optional" json:"networkType" yaml:"networkType"`
	// Property paymentType: Load balancing instance payment type.
	PaymentType interface{} `field:"optional" json:"paymentType" yaml:"paymentType"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	// Property resourceGroupId: Resource group id.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property slaveZoneId: ID of the ready-to-use zone of the load balancing instance.
	SlaveZoneId interface{} `field:"optional" json:"slaveZoneId" yaml:"slaveZoneId"`
	// Property status: The status of SLB.
	Status interface{} `field:"optional" json:"status" yaml:"status"`
	// Property vpcId: VPC ID.
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
	// Property vSwitchId: The ID of the switch.
	VSwitchId interface{} `field:"optional" json:"vSwitchId" yaml:"vSwitchId"`
}

