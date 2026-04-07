package alicloudroscdkesa


// Properties for defining a `RosVideoProcessing`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-videoprocessing
type RosVideoProcessingProps struct {
	SiteId interface{} `field:"required" json:"siteId" yaml:"siteId"`
	FlvSeekEnd interface{} `field:"optional" json:"flvSeekEnd" yaml:"flvSeekEnd"`
	FlvSeekStart interface{} `field:"optional" json:"flvSeekStart" yaml:"flvSeekStart"`
	FlvVideoSeekMode interface{} `field:"optional" json:"flvVideoSeekMode" yaml:"flvVideoSeekMode"`
	Mp4SeekEnd interface{} `field:"optional" json:"mp4SeekEnd" yaml:"mp4SeekEnd"`
	Mp4SeekStart interface{} `field:"optional" json:"mp4SeekStart" yaml:"mp4SeekStart"`
	Rule interface{} `field:"optional" json:"rule" yaml:"rule"`
	RuleEnable interface{} `field:"optional" json:"ruleEnable" yaml:"ruleEnable"`
	RuleName interface{} `field:"optional" json:"ruleName" yaml:"ruleName"`
	Sequence interface{} `field:"optional" json:"sequence" yaml:"sequence"`
	SiteVersion interface{} `field:"optional" json:"siteVersion" yaml:"siteVersion"`
	VideoSeekEnable interface{} `field:"optional" json:"videoSeekEnable" yaml:"videoSeekEnable"`
}

