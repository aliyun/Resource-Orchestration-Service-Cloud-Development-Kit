package alicloudroscdkvpc


// Properties for defining a `RosVSwitchCidrReservation`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vswitchcidrreservation
type RosVSwitchCidrReservationProps struct {
	VSwitchId interface{} `field:"required" json:"vSwitchId" yaml:"vSwitchId"`
	IpVersion interface{} `field:"optional" json:"ipVersion" yaml:"ipVersion"`
	Tags *[]*RosVSwitchCidrReservation_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	VSwitchCidrReservationCidr interface{} `field:"optional" json:"vSwitchCidrReservationCidr" yaml:"vSwitchCidrReservationCidr"`
	VSwitchCidrReservationDescription interface{} `field:"optional" json:"vSwitchCidrReservationDescription" yaml:"vSwitchCidrReservationDescription"`
	VSwitchCidrReservationMask interface{} `field:"optional" json:"vSwitchCidrReservationMask" yaml:"vSwitchCidrReservationMask"`
	VSwitchCidrReservationName interface{} `field:"optional" json:"vSwitchCidrReservationName" yaml:"vSwitchCidrReservationName"`
	VSwitchCidrReservationType interface{} `field:"optional" json:"vSwitchCidrReservationType" yaml:"vSwitchCidrReservationType"`
}

