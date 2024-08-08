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
	// Property autoPay: Indicates whether automatic payment is enabled.
	//
	// Valid values:
	// false: Automatic payment is disabled. You need to go to Orders to make the payment once an order is generated.
	// true: Automatic payment is enabled. The payment is automatically made.
	// Default true.
	AutoPay interface{} `field:"optional" json:"autoPay" yaml:"autoPay"`
	// Property chargeType: The billing method of the router interface.
	//
	// Valid values: PrePaid (Subscription), PostPaid (default, Pay-As-You-Go). Default value: PostPaid.
	ChargeType interface{} `field:"optional" json:"chargeType" yaml:"chargeType"`
	// Property deletionForce: Whether force delete the instance even if its status is START_FAILED.
	//
	// Default value is false.
	DeletionForce interface{} `field:"optional" json:"deletionForce" yaml:"deletionForce"`
	// Property duration: Prepaid time period.
	//
	// It could be from 1 to 9 when PricingCycle is Month, or 1 to 3 when PricingCycle is Year. Default value is 3.
	Duration interface{} `field:"optional" json:"duration" yaml:"duration"`
	// Property pricingCycle: Unit of the payment cycle.
	//
	// It could be Month (default) or Year.
	PricingCycle interface{} `field:"optional" json:"pricingCycle" yaml:"pricingCycle"`
	// Property tags: Tags to attach to instance.
	//
	// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosInstance_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

