package alicloudroscdkpai


// Properties for defining a `RosUserConfig`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-userconfig
type RosUserConfigProps struct {
	CategoryName interface{} `field:"required" json:"categoryName" yaml:"categoryName"`
	ConfigKey interface{} `field:"required" json:"configKey" yaml:"configKey"`
	Configs interface{} `field:"optional" json:"configs" yaml:"configs"`
}

