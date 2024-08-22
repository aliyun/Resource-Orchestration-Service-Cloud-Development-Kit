package alicloudroscdksls


// Properties for defining a `RosLogtailConfig`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-logtailconfig
type RosLogtailConfigProps struct {
	LogstoreName interface{} `field:"required" json:"logstoreName" yaml:"logstoreName"`
	LogtailConfigName interface{} `field:"required" json:"logtailConfigName" yaml:"logtailConfigName"`
	ProjectName interface{} `field:"required" json:"projectName" yaml:"projectName"`
	CloneFrom interface{} `field:"optional" json:"cloneFrom" yaml:"cloneFrom"`
	RawConfigData interface{} `field:"optional" json:"rawConfigData" yaml:"rawConfigData"`
}

