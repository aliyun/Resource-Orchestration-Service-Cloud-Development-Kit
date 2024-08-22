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
	// Property maxBandwidthAbs: The maximum bandwidth.
	//
	// This parameter is required when LimitType is set to Absolute.
	MaxBandwidthAbs interface{} `field:"optional" json:"maxBandwidthAbs" yaml:"maxBandwidthAbs"`
	// Property maxBandwidthPercent: The maximum percentage that is based on the maximum upstream bandwidth of the SAG instance.
	//
	// This parameter is required when LimitType is set to Percent.
	MaxBandwidthPercent interface{} `field:"optional" json:"maxBandwidthPercent" yaml:"maxBandwidthPercent"`
	// Property minBandwidthAbs: The minimum bandwidth.
	//
	// This parameter is required when LimitType is set to Absolute.
	MinBandwidthAbs interface{} `field:"optional" json:"minBandwidthAbs" yaml:"minBandwidthAbs"`
	// Property minBandwidthPercent: The minimum percentage that is based on the maximum upstream bandwidth of the SAG instance.
	//
	// This parameter is required when LimitType is set to Percent.
	MinBandwidthPercent interface{} `field:"optional" json:"minBandwidthPercent" yaml:"minBandwidthPercent"`
	// Property name: The name of the traffic throttling policy.
	//
	// The name must be 2 to 128 characters in
	// length, and can contain Chinese characters, letters, digits, periods (.), underscores
	// (_), and hyphens (-).
	Name interface{} `field:"optional" json:"name" yaml:"name"`
	// Property percentSourceType: If the policy throttles traffic based on a specified bandwidth percentage, the following options are available: CcnBandwidth: Cloud Enterprise Network (CCN) bandwidth.
	//
	// InternetUpBandwidth: Internet upstream bandwidth.
	PercentSourceType interface{} `field:"optional" json:"percentSourceType" yaml:"percentSourceType"`
}

