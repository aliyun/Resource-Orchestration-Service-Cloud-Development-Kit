package alicloudroscdkfc3


type RosProvisionConfig_TargetTrackingPoliciesProperty struct {
	MaxCapacity interface{} `field:"required" json:"maxCapacity" yaml:"maxCapacity"`
	MetricTarget interface{} `field:"required" json:"metricTarget" yaml:"metricTarget"`
	MetricType interface{} `field:"required" json:"metricType" yaml:"metricType"`
	MinCapacity interface{} `field:"required" json:"minCapacity" yaml:"minCapacity"`
	Name interface{} `field:"required" json:"name" yaml:"name"`
	EndTime interface{} `field:"optional" json:"endTime" yaml:"endTime"`
	StartTime interface{} `field:"optional" json:"startTime" yaml:"startTime"`
	TimeZone interface{} `field:"optional" json:"timeZone" yaml:"timeZone"`
}

