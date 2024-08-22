package alicloudroscdkalb


type RosRule_TrafficLimitConfigProperty struct {
	Qps interface{} `field:"required" json:"qps" yaml:"qps"`
	PerIpQps interface{} `field:"optional" json:"perIpQps" yaml:"perIpQps"`
}

