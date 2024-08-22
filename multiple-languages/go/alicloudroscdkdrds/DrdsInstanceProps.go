package alicloudroscdkdrds


// Properties for defining a `DrdsInstance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-drds-drdsinstance
type DrdsInstanceProps struct {
	// Property description: Description of the DRDS instance, 2-128 characters.
	Description interface{} `field:"required" json:"description" yaml:"description"`
	// Property instanceSeries: drds.sn1.4c8g Starter Edition; drds.sn1.8c16g Standard Edition; drds.sn1.16c32g Business Edition; drds.sn1.32c64g Ultimate Edition.
	InstanceSeries interface{} `field:"required" json:"instanceSeries" yaml:"instanceSeries"`
	// Property payType: For the type of payment, see "Payment Type Parameter Table".
	PayType interface{} `field:"required" json:"payType" yaml:"payType"`
	// Property specification: The example specification, for example, drds.sn1.4c8g.8C16G, consists of the DRDS instance series (drds.sn1.4c8g) plus a specific example specification (8C16G). For the DRDS instance specification value range, see: Distributed Relational Database Service Specifications and Pricing.
	Specification interface{} `field:"required" json:"specification" yaml:"specification"`
	// Property type: Instance type, instance type 0 - shared instance 1 - exclusive instance, in addition, this parameter can also pass PRIVATE and PUBLIC to represent exclusive instance and shared instance respectively.
	Type interface{} `field:"required" json:"type" yaml:"type"`
	// Property zoneId: Availability zone, an available zone belongs to a certain zone, such as Hangzhou Availability Zone A (cn-hangzhou-a) belongs to the region Hangzhou (cn-hangzhou).
	ZoneId interface{} `field:"required" json:"zoneId" yaml:"zoneId"`
	// Property duration: The number of cycles ordered.
	//
	// When PricingCycle=year, the value is 1-3; when PricingCycle=month, the value is 1-9. The parameter takes effect when the payment type is drdsPre.
	Duration interface{} `field:"optional" json:"duration" yaml:"duration"`
	// Property isAutoRenew: Whether to renew the fee automatically, if it is purchased on a monthly basis, it will automatically renew for one month, and if it is purchased on an annual basis, it will automatically renew for one year.
	//
	// The parameter takes effect when the payment type is drdsPre.
	IsAutoRenew interface{} `field:"optional" json:"isAutoRenew" yaml:"isAutoRenew"`
	// Property mySqlVersion: The MySQL protocol version supported by DRDS.
	//
	// Valid values: 5 and 8. Default value: 5. This parameter is valid only when the primary instance is created. The read-only instance is the same as the primary instance by default.
	MySqlVersion interface{} `field:"optional" json:"mySqlVersion" yaml:"mySqlVersion"`
	// Property pricingCycle: The unit of the order period, year: year, month: month.
	//
	// The parameter takes effect when the payment type is drdsPre.
	PricingCycle interface{} `field:"optional" json:"pricingCycle" yaml:"pricingCycle"`
	// Property resourceGroupId: Resource group id.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property tags: Tags to attach to instance.
	//
	// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosDrdsInstance_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	// Property vpcId: Virtual private network ID, must be specified when creating a DRDS for VPC network type.
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
	// Property vswitchId: Virtual switch ID, must be specified when creating a DRDS for VPC network type.
	VswitchId interface{} `field:"optional" json:"vswitchId" yaml:"vswitchId"`
}

