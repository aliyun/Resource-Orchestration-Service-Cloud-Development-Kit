package alicloudroscdkacs


// Properties for defining a `VirtualCapacityReservation`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-acs-virtualcapacityreservation
type VirtualCapacityReservationProps struct {
	// Property podPostpaidSpec: Postpaid pod spec for inquiry.
	PodPostpaidSpec interface{} `field:"optional" json:"podPostpaidSpec" yaml:"podPostpaidSpec"`
}

