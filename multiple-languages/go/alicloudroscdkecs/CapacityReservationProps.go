package alicloudroscdkecs


// Properties for defining a `CapacityReservation`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-capacityreservation
type CapacityReservationProps struct {
	// Property instanceAmount: The total number of instances for which to reserve capacity of an instance type.
	InstanceAmount interface{} `field:"required" json:"instanceAmount" yaml:"instanceAmount"`
	// Property instanceType: The instance type.
	//
	// A capacity reservation can be created to reserve the capacity of only a single instance type. You can call the DescribeInstanceTypes operation to query the instance types provided by ECS.
	InstanceType interface{} `field:"required" json:"instanceType" yaml:"instanceType"`
	// Property zoneId: The ID of zone N within the region in which to create the capacity reservation.
	//
	// A capacity reservation can reserve resources within only a single zone.
	ZoneId interface{} `field:"required" json:"zoneId" yaml:"zoneId"`
	// Property description: The description of the capacity reservation.
	//
	// The description must be 2 to 256 characters in length and cannot start with http:\/\/ or https:\/\/.
	// This parameter is empty by default.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property endTime: The time when the capacity reservation expires.
	//
	// Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. For more information, see ISO 8601.
	EndTime interface{} `field:"optional" json:"endTime" yaml:"endTime"`
	// Property endTimeType: The release mode of the capacity reservation.
	//
	// Valid values:
	// Limited: The capacity reservation is automatically released at the specified time. If you specify this parameter, you must also specify the EndTime parameter.
	// Unlimited: The capacity reservation must be manually released. You can release it anytime.
	EndTimeType interface{} `field:"optional" json:"endTimeType" yaml:"endTimeType"`
	// Property privatePoolOptions:.
	PrivatePoolOptions interface{} `field:"optional" json:"privatePoolOptions" yaml:"privatePoolOptions"`
	// Property resourceGroupId: The ID of the resource group to which to assign the capacity reservation.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property tags:.
	Tags *[]*RosCapacityReservation_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

