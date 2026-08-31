package alicloudroscdkdrds


// Properties for defining a `DrdsInstance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-drds-drdsinstance
type DrdsInstanceProps struct {
	// Property description: Specifies the description of the instance.
	//
	// The description must meet the
	// following requirements:
	// *   The description cannot contain the prefix http:\/\/ or https:\/\/.
	// *   The description must start with a letter or a Chinese character, and can
	// contain uppercase and lowercase letters, Chinese characters, digits, underscores
	// (_), and hyphens (-).
	// *   The description must be 2 to 256 characters in length.
	Description interface{} `field:"required" json:"description" yaml:"description"`
	// Property instanceSeries: Specifies the instance type of the instance.
	//
	// Valid values:
	// *   drds.sn2.4c16g: The instance is of the Starter Edition.
	// *   drds.sn2.8c32g: The instance is of the Standard Edition
	// *   drds.sn2.16c64g: The instance is of the Enterprise Edition.
	InstanceSeries interface{} `field:"required" json:"instanceSeries" yaml:"instanceSeries"`
	// Property payType: Specifies the billing method of the instance.
	//
	// Valid values:
	// *   drdsPre: The instance uses the subscription billing method.
	// *   drdsPost: The instance uses the pay-as-you-go billing method.
	// *   drdsRo: By default, the pay-as-you-go billing method is used when you create
	// read-only instances.
	PayType interface{} `field:"required" json:"payType" yaml:"payType"`
	// Property specification: Specifies the specification code of the instance.
	//
	// The value consists of the
	// instance type and the specified instance specification. For example, you can set
	// the value to drds.sn2.4c16g.8c32g.
	Specification interface{} `field:"required" json:"specification" yaml:"specification"`
	// Property type: Specifies the type of the instance.
	//
	// Set the value to PRIVATE. The value PRIVATE
	// specifies that the instance is a dedicated instance.
	// >  You can also set the value to 1 to specify that the instance is a dedicated
	// instance.
	Type interface{} `field:"required" json:"type" yaml:"type"`
	// Property zoneId: Availability zone, an available zone belongs to a certain zone, such as Hangzhou Availability Zone A (cn-hangzhou-a) belongs to the region Hangzhou (cn-hangzhou).
	ZoneId interface{} `field:"required" json:"zoneId" yaml:"zoneId"`
	// Property duration: The number of cycles ordered.
	//
	// When PricingCycle=year, the value is 1-3; when PricingCycle=month, the value is 1-9. The parameter takes effect when the payment type is drdsPre.
	Duration interface{} `field:"optional" json:"duration" yaml:"duration"`
	// Property isAutoRenew: Specifies whether to enable automatic renewal.
	//
	// Valid values:
	// *   true: If the PricingCycle parameter is set to month, the subscription is
	// automatically renewed for one month. If the PricingCycle parameter is set to
	// year, the subscription is automatically renewed for one year.
	// *   false: The auto-renewal feature is disabled for the instance.
	// >  This parameter only takes effect when the PayType parameter is set to drdsPre.
	IsAutoRenew interface{} `field:"optional" json:"isAutoRenew" yaml:"isAutoRenew"`
	// Property mySqlVersion: Specifies the MySQL version that is supported by the instance.
	//
	// Valid values:
	// *   5: The instance is fully compatible with MySQL 5.x. This value is the default
	// value.
	// *   8: The instance is fully compatible with MySQL 8.0.
	// >  This parameter only takes effect when you create a primary instance. By
	// default, the MySQL version of the read-only instance is the same as that of the
	// primary instance.
	MySqlVersion interface{} `field:"optional" json:"mySqlVersion" yaml:"mySqlVersion"`
	// Property pricingCycle: Specifies the unit of the subscription duration of the subscription instance.
	//
	// Valid values:
	// *   year: The unit of the subscription duration is year.
	// *   month: The unit of the subscription duration is month.
	// >  This parameter is required if you set the PayType parameter to drdsPre.
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

