package alicloudroscdkvpc


// Properties for defining a `RosRouterInterface`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-routerinterface
type RosRouterInterfaceProps struct {
	Role interface{} `field:"required" json:"role" yaml:"role"`
	RouterId interface{} `field:"required" json:"routerId" yaml:"routerId"`
	AccessPointId interface{} `field:"optional" json:"accessPointId" yaml:"accessPointId"`
	AutoPay interface{} `field:"optional" json:"autoPay" yaml:"autoPay"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	HealthCheckSourceIp interface{} `field:"optional" json:"healthCheckSourceIp" yaml:"healthCheckSourceIp"`
	HealthCheckTargetIp interface{} `field:"optional" json:"healthCheckTargetIp" yaml:"healthCheckTargetIp"`
	InstanceChargeType interface{} `field:"optional" json:"instanceChargeType" yaml:"instanceChargeType"`
	Name interface{} `field:"optional" json:"name" yaml:"name"`
	OppositeAccessPointId interface{} `field:"optional" json:"oppositeAccessPointId" yaml:"oppositeAccessPointId"`
	OppositeInterfaceId interface{} `field:"optional" json:"oppositeInterfaceId" yaml:"oppositeInterfaceId"`
	OppositeInterfaceOwnerId interface{} `field:"optional" json:"oppositeInterfaceOwnerId" yaml:"oppositeInterfaceOwnerId"`
	OppositeRegionId interface{} `field:"optional" json:"oppositeRegionId" yaml:"oppositeRegionId"`
	OppositeRouterId interface{} `field:"optional" json:"oppositeRouterId" yaml:"oppositeRouterId"`
	OppositeRouterType interface{} `field:"optional" json:"oppositeRouterType" yaml:"oppositeRouterType"`
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	PricingCycle interface{} `field:"optional" json:"pricingCycle" yaml:"pricingCycle"`
	RouterType interface{} `field:"optional" json:"routerType" yaml:"routerType"`
	Spec interface{} `field:"optional" json:"spec" yaml:"spec"`
}

