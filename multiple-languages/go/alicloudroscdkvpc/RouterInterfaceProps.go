package alicloudroscdkvpc


// Properties for defining a `RouterInterface`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-routerinterface
type RouterInterfaceProps struct {
	// Property role: RouterInterface role.
	//
	// Now support 'InitiatingSide|AcceptingSide'.
	Role interface{} `field:"required" json:"role" yaml:"role"`
	// Property routerId: The router ID to create RouterInterface.
	RouterId interface{} `field:"required" json:"routerId" yaml:"routerId"`
	// Property accessPointId: Access point ID.
	//
	// If 'RouterType' is specified as 'VBR', the value is required.
	AccessPointId interface{} `field:"optional" json:"accessPointId" yaml:"accessPointId"`
	// Property autoPay: Indicates whether automatic payment is enabled.
	//
	// Valid values:
	// false: Automatic payment is disabled. You need to go to Orders to make the payment once an order is generated.
	// true: Automatic payment is enabled. The payment is automatically made.
	// Default: true.
	AutoPay interface{} `field:"optional" json:"autoPay" yaml:"autoPay"`
	// Property description: Custom description of the RouterInterface, [2, 256] characters.
	//
	// Don't fill or empty, the default is empty.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property healthCheckSourceIp: Source IP address of the packet for leased line HealthCheck in leased line disaster tolerance and ECMP scenarios.
	//
	// It is valid only for a VRouter RouterInterface with a peer on a VBR. The source IP address must be in the VPC of the local VRouter and is not used. HealthCheckSourceIp and HealthCheckTargetIp parameters must be both specified or left unspecified.
	HealthCheckSourceIp interface{} `field:"optional" json:"healthCheckSourceIp" yaml:"healthCheckSourceIp"`
	// Property healthCheckTargetIp: Target IP address of the packet for leased line HealthCheck in leased line disaster tolerance and ECMP scenarios.
	//
	// It is valid only for a VRouter RouterInterface with a peer on a VBR. Usually you can use the CPE IP address of the leased line user's client (that is, the PeerGatewayIP on the VBR of the peer RouterInterface), you can also specify another IP address of the leased line user's client as the HealthCheck target IP address. HealthCheckSourceIp and HealthCheckTargetIp parameters must be both specified or left unspecified.
	HealthCheckTargetIp interface{} `field:"optional" json:"healthCheckTargetIp" yaml:"healthCheckTargetIp"`
	// Property instanceChargeType: The billing method of the router interface.
	//
	// Valid values: PrePaid (Subscription), PostPaid (default, Pay-As-You-Go).
	InstanceChargeType interface{} `field:"optional" json:"instanceChargeType" yaml:"instanceChargeType"`
	// Property name: Custom name of the RouterInterface, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.
	Name interface{} `field:"optional" json:"name" yaml:"name"`
	// Property oppositeAccessPointId: Access point ID of the connection peer RouterInterface.
	//
	// If 'OppositeRouterType' is specified as 'VBR', the value is required.
	OppositeAccessPointId interface{} `field:"optional" json:"oppositeAccessPointId" yaml:"oppositeAccessPointId"`
	// Property oppositeInterfaceId: The ID of the peer router interface.
	OppositeInterfaceId interface{} `field:"optional" json:"oppositeInterfaceId" yaml:"oppositeInterfaceId"`
	// Property oppositeInterfaceOwnerId: Owner account ID of the connection peer RouterInterface.
	//
	// The default value is current user Id.
	OppositeInterfaceOwnerId interface{} `field:"optional" json:"oppositeInterfaceOwnerId" yaml:"oppositeInterfaceOwnerId"`
	// Property oppositeRegionId: The region where the connection peer RouterInterface locates.
	//
	// The default value is region where stack is created.
	OppositeRegionId interface{} `field:"optional" json:"oppositeRegionId" yaml:"oppositeRegionId"`
	// Property oppositeRouterId: The router ID of the connection peer RouterInterface.
	OppositeRouterId interface{} `field:"optional" json:"oppositeRouterId" yaml:"oppositeRouterId"`
	// Property oppositeRouterType: Router type of the connection peer router.
	//
	// Now support 'VRouter|VBR'. If 'RouterType' is specified as 'VBR', the value must be 'VRouter'.
	OppositeRouterType interface{} `field:"optional" json:"oppositeRouterType" yaml:"oppositeRouterType"`
	// Property period: Prepaid time period.
	//
	// It could be from 1 to 9 when PricingCycle is Month, or 1 to 3 when PricingCycle is Year.
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	// Property pricingCycle: Unit of the payment cycle.
	//
	// It could be Month (default) or Year.
	PricingCycle interface{} `field:"optional" json:"pricingCycle" yaml:"pricingCycle"`
	// Property routerType: Router type.
	//
	// Now support 'VRouter|VBR'.
	RouterType interface{} `field:"optional" json:"routerType" yaml:"routerType"`
	// Property spec: RouterInterface specification.
	//
	// If 'Role' is specified as 'InitiatingSide', the value is required. If 'Role' is specified as 'AcceptingSide', the value is set as 'Negative' by default.
	Spec interface{} `field:"optional" json:"spec" yaml:"spec"`
}

