package alicloudroscdkflink


// Properties for defining a `InstanceV2`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-flink-instancev2
type InstanceV2Props struct {
	// Property chargeType: The payment type, the value of the value is as follows: POST: pay as you go.
	//
	// PRE: subscription.
	ChargeType interface{} `field:"required" json:"chargeType" yaml:"chargeType"`
	// Property instanceName: The name of the workspace.
	//
	// The name must start with a lowercase letter, can
	// contain lowercase letters, digits, and hyphens (-), and cannot end with a hyphen.
	InstanceName interface{} `field:"required" json:"instanceName" yaml:"instanceName"`
	// Property storage: The storage parameters.
	Storage interface{} `field:"required" json:"storage" yaml:"storage"`
	// Property vpcId: VPC ID.
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	// Property vSwitchIds: Virtual switch ID.
	VSwitchIds interface{} `field:"required" json:"vSwitchIds" yaml:"vSwitchIds"`
	// Property architectureType: The architecture type, the value of the value is as follows: X86, ARM.
	ArchitectureType interface{} `field:"optional" json:"architectureType" yaml:"architectureType"`
	// Property autoRenew: Specifies whether to enable auto-renewal.
	//
	// Valid values:
	// - true: Auto-renewal is enabled.
	// - false: Auto-renewal is disabled. This is the default value.
	// > This parameter does not take effect for pay-as-you-go instances.
	AutoRenew interface{} `field:"optional" json:"autoRenew" yaml:"autoRenew"`
	// Property duration: Number of order cycle.
	//
	// When ChargeType is configured as PRE, the duration parameter must be filled.
	// If PricingCycle is Month, the valid range is 1, 2, 3, 6, 7, 8, 9, 12, 24, 36
	// If PricingCycle is year, the valid range is 1 to 3.
	Duration interface{} `field:"optional" json:"duration" yaml:"duration"`
	// Property haResourceSpec: HA resource specifications.
	//
	// When ChargeType is configured as PRE, the resource specification parameters must be filled.
	HaResourceSpec interface{} `field:"optional" json:"haResourceSpec" yaml:"haResourceSpec"`
	// Property haVSwitchIds: HA VSwitch IDs.
	HaVSwitchIds interface{} `field:"optional" json:"haVSwitchIds" yaml:"haVSwitchIds"`
	// Property monitorType: The monitor type, the value of the value is as follows: TAIHAO, ARMS.
	MonitorType interface{} `field:"optional" json:"monitorType" yaml:"monitorType"`
	// Property pricingCycle: The ordering cycle only supports ordering in the year and month.
	PricingCycle interface{} `field:"optional" json:"pricingCycle" yaml:"pricingCycle"`
	// Property promotionCode: Promo Code.
	PromotionCode interface{} `field:"optional" json:"promotionCode" yaml:"promotionCode"`
	// Property resourceSpec: Resource specifications.
	//
	// When ChargeType is configured as PRE, the resource specification parameters must be filled.
	ResourceSpec interface{} `field:"optional" json:"resourceSpec" yaml:"resourceSpec"`
	// Property usePromotionCode: Whether to use coupons.The value is as follows: true: Use. false: Not in use.
	UsePromotionCode interface{} `field:"optional" json:"usePromotionCode" yaml:"usePromotionCode"`
}

