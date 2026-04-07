package alicloudroscdkesa

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkesa/internal"
)

// Represents a `CacheRule`.
type ICacheRule interface {
	alicloudroscdkcore.IResource
	// Attribute AdditionalCacheablePorts: Enable caching on specified ports.
	AttrAdditionalCacheablePorts() interface{}
	// Attribute BrowserCacheMode: Browser cache mode.
	AttrBrowserCacheMode() interface{}
	// Attribute BrowserCacheTtl: Browser cache expiration time in seconds.
	AttrBrowserCacheTtl() interface{}
	// Attribute BypassCache: Set the bypass cache mode.
	AttrBypassCache() interface{}
	// Attribute CacheDeceptionArmor: Cache deception protection.
	//
	// Used to defend against web cache deception attacks, only the cache content that passes the validation will be cached.
	AttrCacheDeceptionArmor() interface{}
	// Attribute CacheReserveEligibility: Cache retention eligibility.
	//
	// Used to control whether user requests bypass the cache retention node when returning to the origin.
	AttrCacheReserveEligibility() interface{}
	// Attribute CacheRuleId: Cache Rule Id.
	AttrCacheRuleId() interface{}
	// Attribute CheckPresenceCookie: When generating the cache key, check if the cookie exists.
	//
	// If it does, add the cookie name (case-insensitive) to the cache key. Multiple cookie names are supported, separated by spaces.
	AttrCheckPresenceCookie() interface{}
	// Attribute CheckPresenceHeader: When generating the cache key, check if the header exists.
	//
	// If it does, add the header name (case-insensitive) to the cache key. Multiple header names are supported, separated by spaces.
	AttrCheckPresenceHeader() interface{}
	// Attribute ConfigType: Configuration type, which can be used to query global or rule-based configurations.
	AttrConfigType() interface{}
	// Attribute EdgeCacheMode: Edge cache mode.
	AttrEdgeCacheMode() interface{}
	// Attribute EdgeCacheTtl: Edge cache expiration time in seconds.
	AttrEdgeCacheTtl() interface{}
	// Attribute EdgeStatusCodeCacheTtl: Status code cache expiration time in seconds.
	AttrEdgeStatusCodeCacheTtl() interface{}
	// Attribute IncludeCookie: When generating the cache key, add the specified cookie names and their values.
	//
	// Multiple values are supported, separated by spaces.
	AttrIncludeCookie() interface{}
	// Attribute IncludeHeader: When generating the cache key, add the specified header names and their values.
	//
	// Multiple values are supported, separated by spaces.
	AttrIncludeHeader() interface{}
	// Attribute QueryString: Query strings to be reserved or excluded.
	//
	// Multiple values are supported, separated by spaces.
	AttrQueryString() interface{}
	// Attribute QueryStringMode: The processing mode for query strings when generating the cache key.
	AttrQueryStringMode() interface{}
	// Attribute Rule: Rule content, using conditional expressions to match user requests.
	//
	// When adding global configuration, this parameter does not need to be set.
	AttrRule() interface{}
	// Attribute RuleEnable: Rule switch.
	//
	// When adding global configuration, this parameter does not need to be set.
	AttrRuleEnable() interface{}
	// Attribute RuleName: Rule name.
	//
	// When adding global configuration, this parameter does not need to be set.
	AttrRuleName() interface{}
	// Attribute Sequence: Order of rule execution.
	//
	// The smaller the value, the higher the priority for execution.
	AttrSequence() interface{}
	// Attribute ServeStale: Serve stale cache.
	//
	// When enabled, the node can still respond to user requests with expired cached files when the origin server is unavailable.
	AttrServeStale() interface{}
	// Attribute SiteVersion: The version number of the site configuration.
	//
	// For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
	AttrSiteVersion() interface{}
	// Attribute SortQueryStringForCache: Query string sorting, disabled by default.
	AttrSortQueryStringForCache() interface{}
	// Attribute UserDeviceType: When generating the cache key, add the client device type.
	AttrUserDeviceType() interface{}
	// Attribute UserGeo: When generating the cache key, add the client's geographic location.
	AttrUserGeo() interface{}
	// Attribute UserLanguage: When generating cache keys, include the client's language type.
	AttrUserLanguage() interface{}
	Props() *CacheRuleProps
}

// The jsii proxy for ICacheRule
type jsiiProxy_ICacheRule struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ICacheRule) AttrAdditionalCacheablePorts() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAdditionalCacheablePorts",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICacheRule) AttrBrowserCacheMode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBrowserCacheMode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICacheRule) AttrBrowserCacheTtl() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBrowserCacheTtl",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICacheRule) AttrBypassCache() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBypassCache",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICacheRule) AttrCacheDeceptionArmor() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCacheDeceptionArmor",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICacheRule) AttrCacheReserveEligibility() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCacheReserveEligibility",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICacheRule) AttrCacheRuleId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCacheRuleId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICacheRule) AttrCheckPresenceCookie() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCheckPresenceCookie",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICacheRule) AttrCheckPresenceHeader() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCheckPresenceHeader",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICacheRule) AttrConfigType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConfigType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICacheRule) AttrEdgeCacheMode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEdgeCacheMode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICacheRule) AttrEdgeCacheTtl() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEdgeCacheTtl",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICacheRule) AttrEdgeStatusCodeCacheTtl() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEdgeStatusCodeCacheTtl",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICacheRule) AttrIncludeCookie() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIncludeCookie",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICacheRule) AttrIncludeHeader() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIncludeHeader",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICacheRule) AttrQueryString() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrQueryString",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICacheRule) AttrQueryStringMode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrQueryStringMode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICacheRule) AttrRule() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRule",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICacheRule) AttrRuleEnable() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRuleEnable",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICacheRule) AttrRuleName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRuleName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICacheRule) AttrSequence() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSequence",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICacheRule) AttrServeStale() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrServeStale",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICacheRule) AttrSiteVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSiteVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICacheRule) AttrSortQueryStringForCache() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSortQueryStringForCache",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICacheRule) AttrUserDeviceType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUserDeviceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICacheRule) AttrUserGeo() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUserGeo",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICacheRule) AttrUserLanguage() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUserLanguage",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICacheRule) Props() *CacheRuleProps {
	var returns *CacheRuleProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

