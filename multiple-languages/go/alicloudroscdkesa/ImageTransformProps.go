package alicloudroscdkesa


// Properties for defining a `ImageTransform`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-imagetransform
type ImageTransformProps struct {
	// Property siteId: The site ID, which can be obtained by calling the ListSites API.
	SiteId interface{} `field:"required" json:"siteId" yaml:"siteId"`
	// Property enable: Indicates whether the image transformations feature is enabled.
	//
	// Valid values:
	// on: Enabled.
	// off: Disabled.
	Enable interface{} `field:"optional" json:"enable" yaml:"enable"`
	// Property paymentType: Payment Type.
	PaymentType interface{} `field:"optional" json:"paymentType" yaml:"paymentType"`
	// Property rule: Rule content, using conditional expressions to match user requests.
	//
	// When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
	// Match all incoming requests: value set to true
	// Match specified request: Set the value to a custom expression, for example: (http.host eq \"video.example.com\").
	Rule interface{} `field:"optional" json:"rule" yaml:"rule"`
	// Property ruleEnable: Rule switch.
	//
	// When adding global configuration, this parameter does not need to be set. Value range:
	// on: Enabled.
	// off: Disabled.
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

