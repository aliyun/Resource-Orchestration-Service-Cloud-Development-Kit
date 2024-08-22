package alicloudroscdksag


// Properties for defining a `RosQosCar`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-qoscar
type RosQosCarProps struct {
	LimitType interface{} `field:"required" json:"limitType" yaml:"limitType"`
	Priority interface{} `field:"required" json:"priority" yaml:"priority"`
	QosId interface{} `field:"required" json:"qosId" yaml:"qosId"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	MaxBandwidthAbs interface{} `field:"optional" json:"maxBandwidthAbs" yaml:"maxBandwidthAbs"`
	MaxBandwidthPercent interface{} `field:"optional" json:"maxBandwidthPercent" yaml:"maxBandwidthPercent"`
	MinBandwidthAbs interface{} `field:"optional" json:"minBandwidthAbs" yaml:"minBandwidthAbs"`
	MinBandwidthPercent interface{} `field:"optional" json:"minBandwidthPercent" yaml:"minBandwidthPercent"`
	Name interface{} `field:"optional" json:"name" yaml:"name"`
	PercentSourceType interface{} `field:"optional" json:"percentSourceType" yaml:"percentSourceType"`
}

