package alicloudroscdkapigateway


// Properties for defining a `Instance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-instance
type InstanceProps struct {
	// Property httpsPolicy: HTTPS security policy.
	//
	// Valid values: HTTPS2_TLS1_0, HTTPS2_TLS1_2, HTTPS1_1_TLS1_0.
	HttpsPolicy interface{} `field:"required" json:"httpsPolicy" yaml:"httpsPolicy"`
	// Property instanceName: Instance name.
	InstanceName interface{} `field:"required" json:"instanceName" yaml:"instanceName"`
	// Property instanceSpec: Instance specification.
	//
	// For example: api.s1.small
	InstanceSpec interface{} `field:"required" json:"instanceSpec" yaml:"instanceSpec"`
	// Property zoneId: Zone to which the instance belongs.
	//
	// For example: cn-beijing-MAZ2(f,g).
	// Pleas call DescribeZones to get supported zone list.
	ZoneId interface{} `field:"required" json:"zoneId" yaml:"zoneId"`
	// Property autoPay: Specifies whether to enable auto-payment for renewals.
	//
	// Valid values:
	// - True: Auto-payment is enabled. Make sure that your account has a sufficient
	// balance.
	// - False: Manual payment is required. To pay for an order, log on to the console.
	// In the upper-right corner, choose Billing > User Center. On the Order Management
	// page, find the order and complete the payment.
	// Default value: False.
	AutoPay interface{} `field:"optional" json:"autoPay" yaml:"autoPay"`
	// Property chargeType: The billing method of the router interface.
	//
	// Valid values: PrePaid (Subscription), PostPaid (default, Pay-As-You-Go). Default value: PostPaid.
	ChargeType interface{} `field:"optional" json:"chargeType" yaml:"chargeType"`
	// Property deletionForce: Whether force delete the instance even if its status is START_FAILED.
	//
	// Default value is false.
	DeletionForce interface{} `field:"optional" json:"deletionForce" yaml:"deletionForce"`
	// Property duration: The subscription duration of the instance.
	//
	// Valid values:
	// - If PricingCycle is set to Month, the valid values are 1 to 9.
	// - If PricingCycle is set to Year, the valid values are 1 to 3.
	// > This parameter is required and takes effect only if you set ChargeType to
	// PrePaid.
	Duration interface{} `field:"optional" json:"duration" yaml:"duration"`
	// Property pricingCycle: The billing cycle of the subscription instance.
	//
	// Valid values:
	// - year
	// - month
	// > This parameter is required if you set ChargeType to PrePaid.
	PricingCycle interface{} `field:"optional" json:"pricingCycle" yaml:"pricingCycle"`
	// Property tags: Tags to attach to instance.
	//
	// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosInstance_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

