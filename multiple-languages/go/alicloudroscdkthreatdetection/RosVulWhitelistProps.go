package alicloudroscdkthreatdetection


// Properties for defining a `RosVulWhitelist`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-vulwhitelist
type RosVulWhitelistProps struct {
	TargetInfo interface{} `field:"required" json:"targetInfo" yaml:"targetInfo"`
	Whitelist interface{} `field:"required" json:"whitelist" yaml:"whitelist"`
	Reason interface{} `field:"optional" json:"reason" yaml:"reason"`
}

