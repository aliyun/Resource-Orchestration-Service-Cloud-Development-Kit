package alicloudroscdkesa


// Properties for defining a `RosNetworkOptimization`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-networkoptimization
type RosNetworkOptimizationProps struct {
	SiteId interface{} `field:"required" json:"siteId" yaml:"siteId"`
	Grpc interface{} `field:"optional" json:"grpc" yaml:"grpc"`
	Http2Origin interface{} `field:"optional" json:"http2Origin" yaml:"http2Origin"`
	Rule interface{} `field:"optional" json:"rule" yaml:"rule"`
	RuleEnable interface{} `field:"optional" json:"ruleEnable" yaml:"ruleEnable"`
	RuleName interface{} `field:"optional" json:"ruleName" yaml:"ruleName"`
	Sequence interface{} `field:"optional" json:"sequence" yaml:"sequence"`
	SiteVersion interface{} `field:"optional" json:"siteVersion" yaml:"siteVersion"`
	SmartRouting interface{} `field:"optional" json:"smartRouting" yaml:"smartRouting"`
	UploadMaxFilesize interface{} `field:"optional" json:"uploadMaxFilesize" yaml:"uploadMaxFilesize"`
	Websocket interface{} `field:"optional" json:"websocket" yaml:"websocket"`
}

