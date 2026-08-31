package alicloudroscdkecs


// Properties for defining a `ElasticityAssurance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-elasticityassurance
type ElasticityAssuranceProps struct {
	// Property instanceAmount: The total number of instances for which to reserve capacity of an instance type.
	//
	// Valid values: 1 to 1000.
	InstanceAmount interface{} `field:"required" json:"instanceAmount" yaml:"instanceAmount"`
	// Property instanceTypes: Instance type.
	//
	// Currently, an elasticity assurance can be created to reserve the capacity of a single instance type.
	InstanceTypes interface{} `field:"required" json:"instanceTypes" yaml:"instanceTypes"`
	// Property zoneId: The zone ID of the elasticity assurance.
	//
	// Currently, an elasticity assurance can be used to reserve resources within a single zone.
	ZoneId interface{} `field:"required" json:"zoneId" yaml:"zoneId"`
	// Property autoRenew: Specifies whether to enable auto-renewal for the elasticity assurance.
	//
	// Valid
	// values:
	// - true
	// - false
	// Default value: false.
	AutoRenew interface{} `field:"optional" json:"autoRenew" yaml:"autoRenew"`
	// Property autoRenewPeriod: The auto-renewal period.
	//
	// Unit: month. Valid values: 1, 2, 3, 6, 12, 24, and 36.
	// - Default value when `PeriodUnit` is set to Month: 1.
	// - Default value when `PeriodUnit` is set to Year: 12.
	// > If you set `AutoRenew` to `true`, you must specify this parameter.
	AutoRenewPeriod interface{} `field:"optional" json:"autoRenewPeriod" yaml:"autoRenewPeriod"`
	// Property description: The description of the elasticity assurance.
	//
	// The description must be 2 to 256 characters in length and cannot start with http:\/\/ or https:\/\/.
	// This parameter is empty by default.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property instanceCpuCoreCount: > This parameter is no longer used.
	InstanceCpuCoreCount interface{} `field:"optional" json:"instanceCpuCoreCount" yaml:"instanceCpuCoreCount"`
	// Property period: The validity period of the elasticity assurance.
	//
	// The unit of the validity period
	// is determined by the value of `PeriodUnit`. Specifies whether to check the image
	// used by the instance supports hot migration. Valid values:
	// - When the value of `PeriodUnit` is `Month`, the valid values are 1, 2, 3, 4, 5,
	// 6, 7, 8, and 9.
	// - When the value of `PeriodUnit` is `Year`, the valid values are 1, 2, 3, 4, and
	// 5.
	// - When the value of `PeriodUnit` is `Day`, the valid values are 1 to 365.
	// Default value: 1.
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	// Property periodUnit: The unit of the validity period of the elasticity assurance.
	//
	// Valid values:
	// - Month
	// - Year
	// - Day
	// \*\*
	// Note If you set `PeriodUnit` to `Day`, you must specify RecurrenceRules to create
	// a time-segmented elasticity assurance.
	// Default value: Year.
	PeriodUnit interface{} `field:"optional" json:"periodUnit" yaml:"periodUnit"`
	// Property privatePoolOptions:.
	PrivatePoolOptions interface{} `field:"optional" json:"privatePoolOptions" yaml:"privatePoolOptions"`
	// Property recurrenceRules: The assurance schedules based on which the capacity reservation takes effect.
	//
	// > Time-segmented elasticity assurances are available only in specific regions and
	// to specific users. To use time-segmented elasticity assurances, submit a ticket.
	RecurrenceRules interface{} `field:"optional" json:"recurrenceRules" yaml:"recurrenceRules"`
	// Property resourceGroupId: The ID of the resource group to which to assign the elasticity assurance.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property startTime: The time when the elasticity assurance takes effect.
	//
	// The default value is the time when the CreateElasticityAssurance operation is called to create the elasticity assurance. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. For more information, see ISO 8601.
	StartTime interface{} `field:"optional" json:"startTime" yaml:"startTime"`
	// Property tags:.
	Tags *[]*RosElasticityAssurance_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

