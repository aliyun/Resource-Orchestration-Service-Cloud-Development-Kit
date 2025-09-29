package alicloudroscdkesa


// Properties for defining a `OriginRule`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-originrule
type OriginRuleProps struct {
	// Property siteId: The site ID.
	SiteId interface{} `field:"required" json:"siteId" yaml:"siteId"`
	// Property dnsRecord: Overwrite the DNS resolution record of the origin request.
	DnsRecord interface{} `field:"optional" json:"dnsRecord" yaml:"dnsRecord"`
	// Property follow302Enable: Return Source 302 follow switch.
	//
	// Value range:
	// - `on`: ON.
	// - `off`: closed.
	Follow302Enable interface{} `field:"optional" json:"follow302Enable" yaml:"follow302Enable"`
	// Property follow302MaxTries: 302 follows the upper limit of the number of times, with a value range of [1-5].
	Follow302MaxTries interface{} `field:"optional" json:"follow302MaxTries" yaml:"follow302MaxTries"`
	// Property follow302RetainArgs: Retain the original request parameter switch.
	//
	// Value range:
	// - `on`: ON.
	// - `off`: closed.
	Follow302RetainArgs interface{} `field:"optional" json:"follow302RetainArgs" yaml:"follow302RetainArgs"`
	// Property follow302RetainHeader: Retain the original request header switch.
	//
	// Value range:
	// - `on`: ON.
	// - `off`: closed.
	Follow302RetainHeader interface{} `field:"optional" json:"follow302RetainHeader" yaml:"follow302RetainHeader"`
	// Property follow302TargetHost: Modify the source host after 302.
	Follow302TargetHost interface{} `field:"optional" json:"follow302TargetHost" yaml:"follow302TargetHost"`
	// Property originHost: The HOST carried in the back-to-origin request.
	OriginHost interface{} `field:"optional" json:"originHost" yaml:"originHost"`
	// Property originHttpPort: The port of the origin station accessed when the HTTP protocol is used to return to the origin.
	OriginHttpPort interface{} `field:"optional" json:"originHttpPort" yaml:"originHttpPort"`
	// Property originHttpsPort: Port of the origin server when using the HTTPS protocol for origin requests.
	OriginHttpsPort interface{} `field:"optional" json:"originHttpsPort" yaml:"originHttpsPort"`
	// Property originMtls: The mtls switch.
	//
	// Value range:
	// - `on`: ON.
	// - `off`: closed.
	OriginMtls interface{} `field:"optional" json:"originMtls" yaml:"originMtls"`
	// Property originReadTimeout: Read timeout interval of the source station (s).
	OriginReadTimeout interface{} `field:"optional" json:"originReadTimeout" yaml:"originReadTimeout"`
	// Property originScheme: The protocol used by the back-to-origin request.
	//
	// Value range:
	// - `http`: uses the http protocol to return to the source.
	// - `https`: uses the https protocol to return to the source.
	// - `follow`: follows the Client Protocol back to the source.
	OriginScheme interface{} `field:"optional" json:"originScheme" yaml:"originScheme"`
	// Property originSni: SNI carried in the back-to-origin request.
	OriginSni interface{} `field:"optional" json:"originSni" yaml:"originSni"`
	// Property originVerify: Source station certificate verification switch.
	//
	// Value range:
	// - `on`: ON.
	// - `off`: closed.
	OriginVerify interface{} `field:"optional" json:"originVerify" yaml:"originVerify"`
	// Property range: Use the range sharding method to download the file from the source.
	//
	// Value range:
	// - `on`: Open.
	// - `off`: off.
	// - `force`: force.
	Range interface{} `field:"optional" json:"range" yaml:"range"`
	// Property rangeChunkSize: range shard size.
	RangeChunkSize interface{} `field:"optional" json:"rangeChunkSize" yaml:"rangeChunkSize"`
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
	// Property sequence: Order of rule execution.
	//
	// The smaller the value, the higher the priority for execution.
	Sequence interface{} `field:"optional" json:"sequence" yaml:"sequence"`
	// Property siteVersion: The version number of the site configuration.
	//
	// For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
	SiteVersion interface{} `field:"optional" json:"siteVersion" yaml:"siteVersion"`
}

