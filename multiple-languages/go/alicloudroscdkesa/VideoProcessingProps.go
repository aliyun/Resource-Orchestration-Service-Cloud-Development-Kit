package alicloudroscdkesa


// Properties for defining a `VideoProcessing`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-videoprocessing
type VideoProcessingProps struct {
	// Property siteId: The site ID, which can be obtained by calling the ListSites API.
	SiteId interface{} `field:"required" json:"siteId" yaml:"siteId"`
	// Property flvSeekEnd: Custom FLV end parameters.
	FlvSeekEnd interface{} `field:"optional" json:"flvSeekEnd" yaml:"flvSeekEnd"`
	// Property flvSeekStart: Custom FLV start parameters.
	FlvSeekStart interface{} `field:"optional" json:"flvSeekStart" yaml:"flvSeekStart"`
	// Property flvVideoSeekMode: FLV drag mode.
	//
	// Value range:
	// - `by_byte`: Drag by byte.
	// - `by_time`: Drag by time.
	FlvVideoSeekMode interface{} `field:"optional" json:"flvVideoSeekMode" yaml:"flvVideoSeekMode"`
	// Property mp4SeekEnd: Custom mp4 end parameters.
	Mp4SeekEnd interface{} `field:"optional" json:"mp4SeekEnd" yaml:"mp4SeekEnd"`
	// Property mp4SeekStart: Custom mp4 start parameters.
	Mp4SeekStart interface{} `field:"optional" json:"mp4SeekStart" yaml:"mp4SeekStart"`
	// Property rule: Rule content, using conditional expressions to match user requests.
	//
	// When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
	// - Match all incoming requests: value set to true
	// - Match specified request: Set the value to a custom expression, for example: (http.host eq \"video.example.com\").
	Rule interface{} `field:"optional" json:"rule" yaml:"rule"`
	// Property ruleEnable: Rule switch.
	//
	// When adding global configuration, this parameter does not need to be set. Value range:
	// - `on`: open.
	// - `off`: close.
	RuleEnable interface{} `field:"optional" json:"ruleEnable" yaml:"ruleEnable"`
	// Property ruleName: Rule name.
	//
	// When adding global configuration, this parameter does not need to be set.
	RuleName interface{} `field:"optional" json:"ruleName" yaml:"ruleName"`
	// Property sequence: The rule execution order prioritizes lower numerical values.
	//
	// It is only applicable when setting or modifying the order of individual rule configurations.
	Sequence interface{} `field:"optional" json:"sequence" yaml:"sequence"`
	// Property siteVersion: The version number of the site configuration.
	//
	// For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
	SiteVersion interface{} `field:"optional" json:"siteVersion" yaml:"siteVersion"`
	// Property videoSeekEnable: Drag and drop the play function switch.
	//
	// Value range:
	// - `on`: open.
	// - `off`: close.
	VideoSeekEnable interface{} `field:"optional" json:"videoSeekEnable" yaml:"videoSeekEnable"`
}

