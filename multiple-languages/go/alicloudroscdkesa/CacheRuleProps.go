package alicloudroscdkesa


// Properties for defining a `CacheRule`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-cacherule
type CacheRuleProps struct {
	// Property siteId: The site ID, which can be obtained by calling the [ListSites] API.
	SiteId interface{} `field:"required" json:"siteId" yaml:"siteId"`
	// Property additionalCacheablePorts: Enable caching on specified ports.
	//
	// Value range: 8880, 2052, 2082, 2086, 2095, 2053, 2083, 2087, 2096.
	AdditionalCacheablePorts interface{} `field:"optional" json:"additionalCacheablePorts" yaml:"additionalCacheablePorts"`
	// Property browserCacheMode: Browser cache mode.
	//
	// Possible values:
	// - `no_cache`no_cache: Do not cache.
	// - `follow_origin`: Follow the origin server's cache policy.
	// - `override_origin`: Override the origin server's cache policy.
	BrowserCacheMode interface{} `field:"optional" json:"browserCacheMode" yaml:"browserCacheMode"`
	// Property browserCacheTtl: Browser cache expiration time in seconds.
	BrowserCacheTtl interface{} `field:"optional" json:"browserCacheTtl" yaml:"browserCacheTtl"`
	// Property bypassCache: Set the bypass cache mode.
	//
	// Possible values:
	// - `cache_all`: Cache all requests.
	// - `bypass_all`: Bypass cache for all requests.
	BypassCache interface{} `field:"optional" json:"bypassCache" yaml:"bypassCache"`
	// Property cacheDeceptionArmor: Cache deception protection.
	//
	// Used to defend against web cache deception attacks, only the cache content that passes the validation will be cached. Value range:
	// - `on`: Enabled.
	// - `off`: Disabled.
	CacheDeceptionArmor interface{} `field:"optional" json:"cacheDeceptionArmor" yaml:"cacheDeceptionArmor"`
	// Property cacheReserveEligibility: Cache retention eligibility.
	//
	// Used to control whether user requests bypass the cache retention node when returning to the origin. Possible values:
	// - `bypass_cache_reserve`: Requests bypass cache retention.
	// - `eligible_for_cache_reserve`: Eligible for cache retention.
	CacheReserveEligibility interface{} `field:"optional" json:"cacheReserveEligibility" yaml:"cacheReserveEligibility"`
	// Property checkPresenceCookie: When generating the cache key, check if the cookie exists.
	//
	// If it does, add the cookie name (case-insensitive) to the cache key. Multiple cookie names are supported, separated by spaces.
	CheckPresenceCookie interface{} `field:"optional" json:"checkPresenceCookie" yaml:"checkPresenceCookie"`
	// Property checkPresenceHeader: When generating the cache key, check if the header exists.
	//
	// If it does, add the header name (case-insensitive) to the cache key. Multiple header names are supported, separated by spaces.
	CheckPresenceHeader interface{} `field:"optional" json:"checkPresenceHeader" yaml:"checkPresenceHeader"`
	// Property edgeCacheMode: Edge cache mode.
	//
	// Possible values:
	// - `follow_origin`: Follow the origin server's cache policy (if it exists), otherwise use the default cache policy.
	// - `no_cache`: Do not cache.
	// - `override_origin`: Override the origin server's cache policy.
	// - `follow_origin_bypass`: Follow the origin server's cache policy (if it exists), otherwise do not cache.
	EdgeCacheMode interface{} `field:"optional" json:"edgeCacheMode" yaml:"edgeCacheMode"`
	// Property edgeCacheTtl: Edge cache expiration time in seconds.
	EdgeCacheTtl interface{} `field:"optional" json:"edgeCacheTtl" yaml:"edgeCacheTtl"`
	// Property edgeStatusCodeCacheTtl: Status code cache expiration time in seconds.
	//
	// Multiple values are separated by commas, for example: 4xx=999999,5xx=999998.
	EdgeStatusCodeCacheTtl interface{} `field:"optional" json:"edgeStatusCodeCacheTtl" yaml:"edgeStatusCodeCacheTtl"`
	// Property includeCookie: When generating the cache key, add the specified cookie names and their values.
	//
	// Multiple values are supported, separated by spaces.
	IncludeCookie interface{} `field:"optional" json:"includeCookie" yaml:"includeCookie"`
	// Property includeHeader: When generating the cache key, add the specified header names and their values.
	//
	// Multiple values are supported, separated by spaces.
	IncludeHeader interface{} `field:"optional" json:"includeHeader" yaml:"includeHeader"`
	// Property queryString: Query strings to be reserved or excluded.
	//
	// Multiple values are supported, separated by spaces.
	QueryString interface{} `field:"optional" json:"queryString" yaml:"queryString"`
	// Property queryStringMode: The processing mode for query strings when generating the cache key.
	//
	// Possible values:
	// - `ignore_all`: Ignore all.
	// - `exclude_query_string`: Exclude specified query strings.
	// - `reserve_all`: Default, reserve all.
	// - `include_query_string`: Include specified query strings.
	QueryStringMode interface{} `field:"optional" json:"queryStringMode" yaml:"queryStringMode"`
	// Property rule: Rule content, using conditional expressions to match user requests.
	//
	// When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
	// - Match all incoming requests: value set to true.
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
	// Property serveStale: Serve stale cache.
	//
	// When enabled, the node can still respond to user requests with expired cached files when the origin server is unavailable. Value range:
	// - `on`: Enabled.
	// - `off`: Disabled.
	ServeStale interface{} `field:"optional" json:"serveStale" yaml:"serveStale"`
	// Property siteVersion: The version number of the site configuration.
	//
	// For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
	SiteVersion interface{} `field:"optional" json:"siteVersion" yaml:"siteVersion"`
	// Property sortQueryStringForCache: Query string sorting, disabled by default.
	//
	// Possible values:
	// - `on`: Enable.
	// - `off`: Disable.
	SortQueryStringForCache interface{} `field:"optional" json:"sortQueryStringForCache" yaml:"sortQueryStringForCache"`
	// Property userDeviceType: When generating the cache key, add the client device type.
	//
	// Possible values:
	// - `on`: Enable.
	// - `off`: Disable.
	UserDeviceType interface{} `field:"optional" json:"userDeviceType" yaml:"userDeviceType"`
	// Property userGeo: When generating the cache key, add the client's geographic location.
	//
	// Possible values:
	// - `on`: Enable.
	// - `off`: Disable.
	UserGeo interface{} `field:"optional" json:"userGeo" yaml:"userGeo"`
	// Property userLanguage: When generating cache keys, include the client's language type.
	//
	// Possible values:
	// - `on`: Enable.
	// - `off`: Disable.
	UserLanguage interface{} `field:"optional" json:"userLanguage" yaml:"userLanguage"`
}

