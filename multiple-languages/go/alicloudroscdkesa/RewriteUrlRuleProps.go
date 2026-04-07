package alicloudroscdkesa


// Properties for defining a `RewriteUrlRule`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-rewriteurlrule
type RewriteUrlRuleProps struct {
	// Property siteId: The website ID, which can be obtained by calling the [ListSites](https:\/\/www.alibabacloud.com\/help\/en\/doc-detail\/2850189.html) operation.
	SiteId interface{} `field:"required" json:"siteId" yaml:"siteId"`
	// Property queryString: The desired query string to which you want to rewrite the query string in the original request.
	QueryString interface{} `field:"optional" json:"queryString" yaml:"queryString"`
	// Property rewriteQueryStringType: Query string rewrite type.
	//
	// Value range:
	// - `static`: Static mode.
	// - `dynamic`: Dynamic mode.
	RewriteQueryStringType interface{} `field:"optional" json:"rewriteQueryStringType" yaml:"rewriteQueryStringType"`
	// Property rewriteUriType: URI rewrite type.
	//
	// Value range:
	// - `static`: Static mode.
	// - `dynamic`: Dynamic mode.
	RewriteUriType interface{} `field:"optional" json:"rewriteUriType" yaml:"rewriteUriType"`
	// Property rule: Rule content, using conditional expressions to match user requests.
	//
	// When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
	//   Match all incoming requests: value set to true
	//   Match specified request: Set the value to a custom expression, for example: (http.host eq \"video.example.com\").
	Rule interface{} `field:"optional" json:"rule" yaml:"rule"`
	// Property ruleEnable: Rule switch.
	//
	// When adding global configuration, this parameter does not need to be set. Value range:
	//   on: open.
	//   off: close.
	RuleEnable interface{} `field:"optional" json:"ruleEnable" yaml:"ruleEnable"`
	// Property ruleName: Rule name.
	//
	// When adding global configuration, this parameter does not need to be set.
	RuleName interface{} `field:"optional" json:"ruleName" yaml:"ruleName"`
	// Property siteVersion: Version number of the site configuration.
	//
	// For a site with configuration version management enabled, you can use this parameter to specify the site version in which the configuration takes effect. The default version is 0.
	SiteVersion interface{} `field:"optional" json:"siteVersion" yaml:"siteVersion"`
	// Property uri: The desired URI to which you want to rewrite the path in the original request.
	Uri interface{} `field:"optional" json:"uri" yaml:"uri"`
}

