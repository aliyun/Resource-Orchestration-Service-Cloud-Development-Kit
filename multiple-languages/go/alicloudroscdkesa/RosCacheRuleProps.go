package alicloudroscdkesa


// Properties for defining a `RosCacheRule`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-cacherule
type RosCacheRuleProps struct {
	SiteId interface{} `field:"required" json:"siteId" yaml:"siteId"`
	AdditionalCacheablePorts interface{} `field:"optional" json:"additionalCacheablePorts" yaml:"additionalCacheablePorts"`
	BrowserCacheMode interface{} `field:"optional" json:"browserCacheMode" yaml:"browserCacheMode"`
	BrowserCacheTtl interface{} `field:"optional" json:"browserCacheTtl" yaml:"browserCacheTtl"`
	BypassCache interface{} `field:"optional" json:"bypassCache" yaml:"bypassCache"`
	CacheDeceptionArmor interface{} `field:"optional" json:"cacheDeceptionArmor" yaml:"cacheDeceptionArmor"`
	CacheReserveEligibility interface{} `field:"optional" json:"cacheReserveEligibility" yaml:"cacheReserveEligibility"`
	CheckPresenceCookie interface{} `field:"optional" json:"checkPresenceCookie" yaml:"checkPresenceCookie"`
	CheckPresenceHeader interface{} `field:"optional" json:"checkPresenceHeader" yaml:"checkPresenceHeader"`
	EdgeCacheMode interface{} `field:"optional" json:"edgeCacheMode" yaml:"edgeCacheMode"`
	EdgeCacheTtl interface{} `field:"optional" json:"edgeCacheTtl" yaml:"edgeCacheTtl"`
	EdgeStatusCodeCacheTtl interface{} `field:"optional" json:"edgeStatusCodeCacheTtl" yaml:"edgeStatusCodeCacheTtl"`
	IncludeCookie interface{} `field:"optional" json:"includeCookie" yaml:"includeCookie"`
	IncludeHeader interface{} `field:"optional" json:"includeHeader" yaml:"includeHeader"`
	QueryString interface{} `field:"optional" json:"queryString" yaml:"queryString"`
	QueryStringMode interface{} `field:"optional" json:"queryStringMode" yaml:"queryStringMode"`
	Rule interface{} `field:"optional" json:"rule" yaml:"rule"`
	RuleEnable interface{} `field:"optional" json:"ruleEnable" yaml:"ruleEnable"`
	RuleName interface{} `field:"optional" json:"ruleName" yaml:"ruleName"`
	Sequence interface{} `field:"optional" json:"sequence" yaml:"sequence"`
	ServeStale interface{} `field:"optional" json:"serveStale" yaml:"serveStale"`
	SiteVersion interface{} `field:"optional" json:"siteVersion" yaml:"siteVersion"`
	SortQueryStringForCache interface{} `field:"optional" json:"sortQueryStringForCache" yaml:"sortQueryStringForCache"`
	UserDeviceType interface{} `field:"optional" json:"userDeviceType" yaml:"userDeviceType"`
	UserGeo interface{} `field:"optional" json:"userGeo" yaml:"userGeo"`
	UserLanguage interface{} `field:"optional" json:"userLanguage" yaml:"userLanguage"`
}

