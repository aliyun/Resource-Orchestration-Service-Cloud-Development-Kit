package alicloudroscdkmps


// Properties for defining a `RosPipeline`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mps-pipeline
type RosPipelineProps struct {
	Name interface{} `field:"required" json:"name" yaml:"name"`
	NotifyConfig interface{} `field:"optional" json:"notifyConfig" yaml:"notifyConfig"`
	Role interface{} `field:"optional" json:"role" yaml:"role"`
	Speed interface{} `field:"optional" json:"speed" yaml:"speed"`
	SpeedLevel interface{} `field:"optional" json:"speedLevel" yaml:"speedLevel"`
	State interface{} `field:"optional" json:"state" yaml:"state"`
}

