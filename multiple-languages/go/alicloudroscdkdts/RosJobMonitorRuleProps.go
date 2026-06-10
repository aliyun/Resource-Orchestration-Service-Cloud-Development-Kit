package alicloudroscdkdts


// Properties for defining a `RosJobMonitorRule`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dts-jobmonitorrule
type RosJobMonitorRuleProps struct {
	DtsJobId interface{} `field:"required" json:"dtsJobId" yaml:"dtsJobId"`
	Type interface{} `field:"required" json:"type" yaml:"type"`
	DelayRuleTime interface{} `field:"optional" json:"delayRuleTime" yaml:"delayRuleTime"`
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	Phones interface{} `field:"optional" json:"phones" yaml:"phones"`
	State interface{} `field:"optional" json:"state" yaml:"state"`
	Times interface{} `field:"optional" json:"times" yaml:"times"`
}

