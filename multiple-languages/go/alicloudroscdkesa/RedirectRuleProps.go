package alicloudroscdkesa


// Properties for defining a `RedirectRule`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-redirectrule
type RedirectRuleProps struct {
	// Property reserveQueryString: Indicates whether the feature of retaining the query string is enabled.
	//
	// Valid values:
	// on
	// off.
	ReserveQueryString interface{} `field:"required" json:"reserveQueryString" yaml:"reserveQueryString"`
	// Property siteId: The website ID.
	SiteId interface{} `field:"required" json:"siteId" yaml:"siteId"`
	// Property statusCode: The response code that you want to use to indicate URL redirection.
	//
	// Valid values:
	// *   301
	// *   302
	// *   303
	// *   307
	// *   308.
	StatusCode interface{} `field:"required" json:"statusCode" yaml:"statusCode"`
	// Property targetUrl: The destination URL to which requests are redirected.
	TargetUrl interface{} `field:"required" json:"targetUrl" yaml:"targetUrl"`
	// Property type: The redirect type.
	//
	// Valid value:
	// *   static.
	Type interface{} `field:"required" json:"type" yaml:"type"`
	// Property rule: Rule content, using conditional expressions to match user requests.
	//
	// When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
	//   Match all incoming requests: value set to true
	//   Match specified request: Set the value to a custom expression, for example: (http.host eq \"video.example.com\").
	Rule interface{} `field:"optional" json:"rule" yaml:"rule"`
	// Property ruleEnable: Rule switch.
	//
	// When adding global configuration, this parameter does not need to be set. Value range:
	// on
	// off.
	RuleEnable interface{} `field:"optional" json:"ruleEnable" yaml:"ruleEnable"`
	// Property ruleName: Rule name.
	//
	// When adding global configuration, this parameter does not need to be set.
	RuleName interface{} `field:"optional" json:"ruleName" yaml:"ruleName"`
	// Property siteVersion: The version number of the site configuration.
	//
	// For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
	SiteVersion interface{} `field:"optional" json:"siteVersion" yaml:"siteVersion"`
}

