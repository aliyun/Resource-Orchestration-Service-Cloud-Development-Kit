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
	// Property description: The description of the elasticity assurance.
	//
	// The description must be 2 to 256 characters in length and cannot start with http:\/\/ or https:\/\/.
	// This parameter is empty by default.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property period: The effective duration of the elasticity assurance.
	//
	// The unit of the effective duration is determined by the PeriodUnit value. Valid values:
	// When the PeriodUnit parameter is set to Month, the valid values are 1, 2, 3, 4, 5, 6, 7, 8, and 9.
	// When the PeriodUnit parameter is set to Year, the valid values are 1, 2, 3, 4, and 5.
	// Default value: 1.
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	// Property periodUnit: The unit of the effective duration of the elasticity assurance.
	//
	// Valid values:
	// Month
	// Year
	// Default value: Year.
	PeriodUnit interface{} `field:"optional" json:"periodUnit" yaml:"periodUnit"`
	// Property privatePoolOptions:.
	PrivatePoolOptions interface{} `field:"optional" json:"privatePoolOptions" yaml:"privatePoolOptions"`
	// Property resourceGroupId: The ID of the resource group to which to assign the elasticity assurance.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property startTime: The time when the elasticity assurance takes effect.
	//
	// The default value is the time when the CreateElasticityAssurance operation is called to create the elasticity assurance. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. For more information, see ISO 8601.
	StartTime interface{} `field:"optional" json:"startTime" yaml:"startTime"`
	// Property tags:.
	Tags *[]*RosElasticityAssurance_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

