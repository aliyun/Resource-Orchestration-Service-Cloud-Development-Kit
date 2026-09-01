package alicloudroscdksag


// Properties for defining a `QosCar`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-qoscar
type QosCarProps struct {
	// Property limitType: The type of the traffic throttling policy.
	//
	// Valid values:
	// Absolute: throttles traffic by a specific bandwidth range.
	// Percent: throttles traffic by a specific range of bandwidth percentage.
	LimitType interface{} `field:"required" json:"limitType" yaml:"limitType"`
	// Property priority: The priority of the traffic throttling policy.
	//
	// A smaller value represents a higher
	// priority. If policies are assigned the same priority, the one applied the earliest
	// prevails. Valid values: 1 to 7.
	Priority interface{} `field:"required" json:"priority" yaml:"priority"`
	// Property qosId: The ID of the QoS policy.
	QosId interface{} `field:"required" json:"qosId" yaml:"qosId"`
	// Property description: The description of the traffic throttling policy.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property maxBandwidthAbs: The maximum bandwidth value.
	//
	// The value must be an integer. Unit: Mbit\/s.
	// This parameter is returned when LimitType is set to Absolute.
	// >  The maximum bandwidth value must be greater than the minimum bandwidth value.
	MaxBandwidthAbs interface{} `field:"optional" json:"maxBandwidthAbs" yaml:"maxBandwidthAbs"`
	// Property maxBandwidthPercent: The maximum bandwidth percentage.
	//
	// Unit: percent (%). Valid values: 1 to 100.
	// This parameter is required when you set LimitType to Percent.
	// >  The maximum bandwidth percentage must be greater than the minimum bandwidth
	// percentage.
	MaxBandwidthPercent interface{} `field:"optional" json:"maxBandwidthPercent" yaml:"maxBandwidthPercent"`
	// Property minBandwidthAbs: The minimum bandwidth value.
	//
	// The value must be an integer. Unit: Mbit\/s.
	// This parameter is returned when LimitType is set to Absolute.
	MinBandwidthAbs interface{} `field:"optional" json:"minBandwidthAbs" yaml:"minBandwidthAbs"`
	// Property minBandwidthPercent: The minimum bandwidth percentage.
	//
	// Unit: percent (%). Valid values: 1 to 100.
	// This parameter is required when you set LimitType to Percent.
	MinBandwidthPercent interface{} `field:"optional" json:"minBandwidthPercent" yaml:"minBandwidthPercent"`
	// Property name: The name of the traffic throttling rule.
	//
	// The name must be 2 to 128 characters in length, and can contain letters, digits,
	// periods (.), underscores (_), and hyphens (-). The name must start with a letter.
	Name interface{} `field:"optional" json:"name" yaml:"name"`
	// Property percentSourceType: If the policy throttles traffic based on a specified bandwidth percentage, the following options are available: CcnBandwidth: Cloud Enterprise Network (CCN) bandwidth.
	//
	// InternetUpBandwidth: Internet upstream bandwidth.
	PercentSourceType interface{} `field:"optional" json:"percentSourceType" yaml:"percentSourceType"`
}

