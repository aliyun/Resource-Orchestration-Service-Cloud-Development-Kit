package alicloudroscdkmse


// Properties for defining a `Gateway2`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-gateway2
type Gateway2Props struct {
	// Property vpcId: The ID of the vpc.
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	// Property acceptLanguage: The language of the response.
	//
	// Valid values:
	// zh: Chinese
	// en: English.
	AcceptLanguage interface{} `field:"optional" json:"acceptLanguage" yaml:"acceptLanguage"`
	// Property chargeType: The billing method you specify when you purchase an normal instance.
	//
	// Valid values:
	// PREPAY: subscription
	// POSTPAY: pay-as-you-go.
	ChargeType interface{} `field:"optional" json:"chargeType" yaml:"chargeType"`
	// Property clbNetworkType: The network type of the purchased Classic Load Balancer (CLB) instance that is billed based on LCUs.
	//
	// pubnet: Internet
	// privatenet: private network
	// privatepubnet: Internet and private network.
	ClbNetworkType interface{} `field:"optional" json:"clbNetworkType" yaml:"clbNetworkType"`
	// Property enableHardwareAcceleration: Specifies whether to activate Tracing Analysis.
	EnableHardwareAcceleration interface{} `field:"optional" json:"enableHardwareAcceleration" yaml:"enableHardwareAcceleration"`
	// Property enableSls: Specifies whether to activate Log Service.
	EnableSls interface{} `field:"optional" json:"enableSls" yaml:"enableSls"`
	// Property enableXtrace: Whether to activate Tracing Analysis.
	EnableXtrace interface{} `field:"optional" json:"enableXtrace" yaml:"enableXtrace"`
	// Property enterpriseSecurityGroup: Specifies whether to enable hardware acceleration.
	EnterpriseSecurityGroup interface{} `field:"optional" json:"enterpriseSecurityGroup" yaml:"enterpriseSecurityGroup"`
	// Property internetSlb: Public network SLB specifications (for normal instances).
	//
	// Simple type (slb.s1.small)
	// Standard type 1 (slb.s2.smal)
	// Standard type I(slb.s2.medium)
	// Advanced Type 1 (slb.s3.small)
	// Advanced I(slb.s3.medium)
	// Super strong type I (slb.s3.large)
	// Description Traditional example: When creating, you can only choose one purchasing agent in NLB, CLB billed by LCU, and CLB specifications. Serverless example: When creating, you can only choose one purchasing agent in NLB, CLB billed by LCU
	InternetSlb interface{} `field:"optional" json:"internetSlb" yaml:"internetSlb"`
	// Property managedEntryNetworkType: Gateway entrance type (applicable to the mse_premium instance) pubnet: public network privatenet: privatenet privatepubnet: public + private network.
	ManagedEntryNetworkType interface{} `field:"optional" json:"managedEntryNetworkType" yaml:"managedEntryNetworkType"`
	// Property mserVersion: The MSE gateway instance type.
	//
	// Valid values:
	// mse_pro: normal instance
	// mse_premium: professional normal instancemse_serverless: serverless instance.
	MserVersion interface{} `field:"optional" json:"mserVersion" yaml:"mserVersion"`
	// Property name: The name of the created gateway.
	Name interface{} `field:"optional" json:"name" yaml:"name"`
	// Property nlbNetworkType: The network type of the Network Load Balancer (NLB) instance you specify when you purchase a serverless instance.
	//
	// pubnet: Internet
	// privatenet: private network
	// privatepubnet: Internet and private network.
	NlbNetworkType interface{} `field:"optional" json:"nlbNetworkType" yaml:"nlbNetworkType"`
	// Property period: Prepaid time period.
	//
	// While choose by pay by month, it could be from 1 to 9. While choose pay by year, it could be from 1 to 3. This parameter is Only valid when updating from postpaid instance to prepaid instance.
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	// Property periodUnit: Charge period for created instances.
	//
	// This parameter is only valid when updating from postpaid instance to prepaid instance.
	PeriodUnit interface{} `field:"optional" json:"periodUnit" yaml:"periodUnit"`
	// Property replica: The number of nodes you specify when you purchase an normal instance.
	//
	// For high availability, the value for this param is recommended to be greater than 2.
	Replica interface{} `field:"optional" json:"replica" yaml:"replica"`
	// Property resourceGroupId: The ID of the resource group.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property slbSpec: Private network SLB specifications (for normal instances).
	//
	// Simple type (slb.s1.small)
	// Standard type 1 (slb.s2.small)
	// Standard type I(slb.s2.medium)
	// Advanced Type 1 (slb.s3.small)
	// Advanced I(slb.s3.medium)
	// Super strong type I (slb.s3.large)
	// Description Traditional example: When creating, you can only choose one purchasing agent in NLB, CLB billed by LCU, and CLB specifications. Serverless example: When creating, you can only choose one purchasing agent in NLB, CLB billed by LCU
	SlbSpec interface{} `field:"optional" json:"slbSpec" yaml:"slbSpec"`
	// Property spec: The node specifications you specify when you purchase an normal instance.
	//
	// Valid values:
	// MSE_GTW_16_32_200_c(16C32G)
	// MSE_GTW_2_4_200_c(2C4G)
	// MSE_GTW_4_8_200_c(4C8G)
	// MSE_GTW_8_16_200_c(8C16G).
	Spec interface{} `field:"optional" json:"spec" yaml:"spec"`
	// Property tags: The list of tags in the form of key\/value pairs.
	//
	// You can define a maximum of 20 tags.
	Tags *[]*RosGateway2_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	// Property vSwitchId: The primary VSwitch ID.
	VSwitchId interface{} `field:"optional" json:"vSwitchId" yaml:"vSwitchId"`
	// Property vSwitchId2: The secondary VSwitch ID.
	VSwitchId2 interface{} `field:"optional" json:"vSwitchId2" yaml:"vSwitchId2"`
	// Property xtraceRatio: The sampling rate of Tracing Analysis.
	//
	// Valid values: [1,100].
	XtraceRatio interface{} `field:"optional" json:"xtraceRatio" yaml:"xtraceRatio"`
	// Property zoneInfo: The info details of the available zone.
	ZoneInfo interface{} `field:"optional" json:"zoneInfo" yaml:"zoneInfo"`
}

