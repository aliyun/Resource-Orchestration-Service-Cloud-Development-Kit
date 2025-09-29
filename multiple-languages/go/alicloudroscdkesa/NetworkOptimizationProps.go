package alicloudroscdkesa


// Properties for defining a `NetworkOptimization`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-networkoptimization
type NetworkOptimizationProps struct {
	// Property siteId: Site ID.
	SiteId interface{} `field:"required" json:"siteId" yaml:"siteId"`
	// Property grpc: Whether to enable GRPC, default is disabled.
	//
	// Value range:
	// - `on`: Enabled
	// - `off`: Disabled.
	Grpc interface{} `field:"optional" json:"grpc" yaml:"grpc"`
	// Property http2Origin: Whether to enable HTTP2 origin, default is disabled.
	//
	// Value range:
	// - `on`: Enabled
	// - `off`: Disabled.
	Http2Origin interface{} `field:"optional" json:"http2Origin" yaml:"http2Origin"`
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
	RuleName interface{} `field:"optional" json:"ruleName" yaml:"ruleName"`
	// Property sequence: Order of rule execution.
	//
	// The smaller the value, the higher the priority for execution.
	Sequence interface{} `field:"optional" json:"sequence" yaml:"sequence"`
	// Property siteVersion: The version number of the site configuration.
	//
	// For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
	SiteVersion interface{} `field:"optional" json:"siteVersion" yaml:"siteVersion"`
	// Property smartRouting: Whether to enable smart routing service, default is disabled.
	//
	// Value range:
	// - `on`: Enabled
	// - `off`: Disabled.
	SmartRouting interface{} `field:"optional" json:"smartRouting" yaml:"smartRouting"`
	// Property uploadMaxFilesize: Maximum upload file size, in MB, value range: 100～500.
	UploadMaxFilesize interface{} `field:"optional" json:"uploadMaxFilesize" yaml:"uploadMaxFilesize"`
	// Property websocket: Whether to enable Websocket, default is enabled.
	//
	// Value range:
	// - `on`: Enabled
	// - `off`: Disabled.
	Websocket interface{} `field:"optional" json:"websocket" yaml:"websocket"`
}

