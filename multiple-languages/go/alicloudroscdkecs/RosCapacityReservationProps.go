package alicloudroscdkecs


// Properties for defining a `RosCapacityReservation`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-capacityreservation
type RosCapacityReservationProps struct {
	InstanceAmount interface{} `field:"required" json:"instanceAmount" yaml:"instanceAmount"`
	InstanceType interface{} `field:"required" json:"instanceType" yaml:"instanceType"`
	ZoneId interface{} `field:"required" json:"zoneId" yaml:"zoneId"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	EndTime interface{} `field:"optional" json:"endTime" yaml:"endTime"`
	EndTimeType interface{} `field:"optional" json:"endTimeType" yaml:"endTimeType"`
	PrivatePoolOptions interface{} `field:"optional" json:"privatePoolOptions" yaml:"privatePoolOptions"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	Tags *[]*RosCapacityReservation_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

