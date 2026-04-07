import * as ros from '@alicloud/ros-cdk-core';
import { RosCacheRule } from './esa.generated';
export { RosCacheRule as CacheRuleProperty };
/**
 * Properties for defining a `CacheRule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-cacherule
 */
export interface CacheRuleProps {
    /**
     * Property siteId: The site ID, which can be obtained by calling the [ListSites] API.
     */
    readonly siteId: number | ros.IResolvable;
    /**
     * Property additionalCacheablePorts: Enable caching on specified ports. Value range: 8880, 2052, 2082, 2086, 2095, 2053, 2083, 2087, 2096.
     */
    readonly additionalCacheablePorts?: number | ros.IResolvable;
    /**
     * Property browserCacheMode: Browser cache mode. Possible values:
     * - `no_cache`no_cache: Do not cache.
     * - `follow_origin`: Follow the origin server's cache policy.
     * - `override_origin`: Override the origin server's cache policy.
     */
    readonly browserCacheMode?: string | ros.IResolvable;
    /**
     * Property browserCacheTtl: Browser cache expiration time in seconds.
     */
    readonly browserCacheTtl?: number | ros.IResolvable;
    /**
     * Property bypassCache: Set the bypass cache mode. Possible values:
     * - `cache_all`: Cache all requests.
     * - `bypass_all`: Bypass cache for all requests.
     */
    readonly bypassCache?: string | ros.IResolvable;
    /**
     * Property cacheDeceptionArmor: Cache deception protection. Used to defend against web cache deception attacks, only the cache content that passes the validation will be cached. Value range:
     * - `on`: Enabled.
     * - `off`: Disabled.
     */
    readonly cacheDeceptionArmor?: string | ros.IResolvable;
    /**
     * Property cacheReserveEligibility: Cache retention eligibility. Used to control whether user requests bypass the cache retention node when returning to the origin. Possible values:
     * - `bypass_cache_reserve`: Requests bypass cache retention.
     * - `eligible_for_cache_reserve`: Eligible for cache retention.
     */
    readonly cacheReserveEligibility?: string | ros.IResolvable;
    /**
     * Property checkPresenceCookie: When generating the cache key, check if the cookie exists. If it does, add the cookie name (case-insensitive) to the cache key. Multiple cookie names are supported, separated by spaces.
     */
    readonly checkPresenceCookie?: string | ros.IResolvable;
    /**
     * Property checkPresenceHeader: When generating the cache key, check if the header exists. If it does, add the header name (case-insensitive) to the cache key. Multiple header names are supported, separated by spaces.
     */
    readonly checkPresenceHeader?: string | ros.IResolvable;
    /**
     * Property edgeCacheMode: Edge cache mode. Possible values:
     * - `follow_origin`: Follow the origin server's cache policy (if it exists), otherwise use the default cache policy.
     * - `no_cache`: Do not cache.
     * - `override_origin`: Override the origin server's cache policy.
     * - `follow_origin_bypass`: Follow the origin server's cache policy (if it exists), otherwise do not cache.
     */
    readonly edgeCacheMode?: string | ros.IResolvable;
    /**
     * Property edgeCacheTtl: Edge cache expiration time in seconds.
     */
    readonly edgeCacheTtl?: number | ros.IResolvable;
    /**
     * Property edgeStatusCodeCacheTtl: Status code cache expiration time in seconds. Multiple values are separated by commas, for example: 4xx=999999,5xx=999998
     */
    readonly edgeStatusCodeCacheTtl?: string | ros.IResolvable;
    /**
     * Property includeCookie: When generating the cache key, add the specified cookie names and their values. Multiple values are supported, separated by spaces.
     */
    readonly includeCookie?: string | ros.IResolvable;
    /**
     * Property includeHeader: When generating the cache key, add the specified header names and their values. Multiple values are supported, separated by spaces.
     */
    readonly includeHeader?: string | ros.IResolvable;
    /**
     * Property queryString: Query strings to be reserved or excluded. Multiple values are supported, separated by spaces.
     */
    readonly queryString?: string | ros.IResolvable;
    /**
     * Property queryStringMode: The processing mode for query strings when generating the cache key. Possible values:
     * - `ignore_all`: Ignore all.
     * - `exclude_query_string`: Exclude specified query strings.
     * - `reserve_all`: Default, reserve all.
     * - `include_query_string`: Include specified query strings.
     */
    readonly queryStringMode?: string | ros.IResolvable;
    /**
     * Property rule: Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
     * - Match all incoming requests: value set to true.
     * - Match specified request: Set the value to a custom expression, for example: (http.host eq \"video.example.com\").
     */
    readonly rule?: string | ros.IResolvable;
    /**
     * Property ruleEnable: Rule switch. When adding global configuration, this parameter does not need to be set. Value range:
     * - `on`: open.
     * - `off`: close.
     */
    readonly ruleEnable?: string | ros.IResolvable;
    /**
     * Property ruleName: Rule name. When adding global configuration, this parameter does not need to be set.
     */
    readonly ruleName?: string | ros.IResolvable;
    /**
     * Property sequence: Order of rule execution. The smaller the value, the higher the priority for execution.
     */
    readonly sequence?: number | ros.IResolvable;
    /**
     * Property serveStale: Serve stale cache. When enabled, the node can still respond to user requests with expired cached files when the origin server is unavailable. Value range:
     * - `on`: Enabled.
     * - `off`: Disabled.
     */
    readonly serveStale?: string | ros.IResolvable;
    /**
     * Property siteVersion: The version number of the site configuration. For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
     */
    readonly siteVersion?: number | ros.IResolvable;
    /**
     * Property sortQueryStringForCache: Query string sorting, disabled by default. Possible values:
     * - `on`: Enable.
     * - `off`: Disable.
     */
    readonly sortQueryStringForCache?: string | ros.IResolvable;
    /**
     * Property userDeviceType: When generating the cache key, add the client device type. Possible values:
     * - `on`: Enable.
     * - `off`: Disable.
     */
    readonly userDeviceType?: string | ros.IResolvable;
    /**
     * Property userGeo: When generating the cache key, add the client's geographic location. Possible values:
     * - `on`: Enable.
     * - `off`: Disable.
     */
    readonly userGeo?: string | ros.IResolvable;
    /**
     * Property userLanguage: When generating cache keys, include the client's language type. Possible values:
     * - `on`: Enable.
     * - `off`: Disable.
     */
    readonly userLanguage?: string | ros.IResolvable;
}
/**
 * Represents a `CacheRule`.
 */
export interface ICacheRule extends ros.IResource {
    readonly props: CacheRuleProps;
    /**
     * Attribute AdditionalCacheablePorts: Enable caching on specified ports.
     */
    readonly attrAdditionalCacheablePorts: ros.IResolvable | string;
    /**
     * Attribute BrowserCacheMode: Browser cache mode.
     */
    readonly attrBrowserCacheMode: ros.IResolvable | string;
    /**
     * Attribute BrowserCacheTtl: Browser cache expiration time in seconds.
     */
    readonly attrBrowserCacheTtl: ros.IResolvable | string;
    /**
     * Attribute BypassCache: Set the bypass cache mode.
     */
    readonly attrBypassCache: ros.IResolvable | string;
    /**
     * Attribute CacheDeceptionArmor: Cache deception protection. Used to defend against web cache deception attacks, only the cache content that passes the validation will be cached.
     */
    readonly attrCacheDeceptionArmor: ros.IResolvable | string;
    /**
     * Attribute CacheReserveEligibility: Cache retention eligibility. Used to control whether user requests bypass the cache retention node when returning to the origin.
     */
    readonly attrCacheReserveEligibility: ros.IResolvable | string;
    /**
     * Attribute CacheRuleId: Cache Rule Id.
     */
    readonly attrCacheRuleId: ros.IResolvable | string;
    /**
     * Attribute CheckPresenceCookie: When generating the cache key, check if the cookie exists. If it does, add the cookie name (case-insensitive) to the cache key. Multiple cookie names are supported, separated by spaces.
     */
    readonly attrCheckPresenceCookie: ros.IResolvable | string;
    /**
     * Attribute CheckPresenceHeader: When generating the cache key, check if the header exists. If it does, add the header name (case-insensitive) to the cache key. Multiple header names are supported, separated by spaces.
     */
    readonly attrCheckPresenceHeader: ros.IResolvable | string;
    /**
     * Attribute ConfigType: Configuration type, which can be used to query global or rule-based configurations.
     */
    readonly attrConfigType: ros.IResolvable | string;
    /**
     * Attribute EdgeCacheMode: Edge cache mode.
     */
    readonly attrEdgeCacheMode: ros.IResolvable | string;
    /**
     * Attribute EdgeCacheTtl: Edge cache expiration time in seconds.
     */
    readonly attrEdgeCacheTtl: ros.IResolvable | string;
    /**
     * Attribute EdgeStatusCodeCacheTtl: Status code cache expiration time in seconds.
     */
    readonly attrEdgeStatusCodeCacheTtl: ros.IResolvable | string;
    /**
     * Attribute IncludeCookie: When generating the cache key, add the specified cookie names and their values. Multiple values are supported, separated by spaces.
     */
    readonly attrIncludeCookie: ros.IResolvable | string;
    /**
     * Attribute IncludeHeader: When generating the cache key, add the specified header names and their values. Multiple values are supported, separated by spaces.
     */
    readonly attrIncludeHeader: ros.IResolvable | string;
    /**
     * Attribute QueryString: Query strings to be reserved or excluded. Multiple values are supported, separated by spaces.
     */
    readonly attrQueryString: ros.IResolvable | string;
    /**
     * Attribute QueryStringMode: The processing mode for query strings when generating the cache key.
     */
    readonly attrQueryStringMode: ros.IResolvable | string;
    /**
     * Attribute Rule: Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set.
     */
    readonly attrRule: ros.IResolvable | string;
    /**
     * Attribute RuleEnable: Rule switch. When adding global configuration, this parameter does not need to be set.
     */
    readonly attrRuleEnable: ros.IResolvable | string;
    /**
     * Attribute RuleName: Rule name. When adding global configuration, this parameter does not need to be set.
     */
    readonly attrRuleName: ros.IResolvable | string;
    /**
     * Attribute Sequence: Order of rule execution. The smaller the value, the higher the priority for execution.
     */
    readonly attrSequence: ros.IResolvable | string;
    /**
     * Attribute ServeStale: Serve stale cache. When enabled, the node can still respond to user requests with expired cached files when the origin server is unavailable.
     */
    readonly attrServeStale: ros.IResolvable | string;
    /**
     * Attribute SiteVersion: The version number of the site configuration. For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
     */
    readonly attrSiteVersion: ros.IResolvable | string;
    /**
     * Attribute SortQueryStringForCache: Query string sorting, disabled by default.
     */
    readonly attrSortQueryStringForCache: ros.IResolvable | string;
    /**
     * Attribute UserDeviceType: When generating the cache key, add the client device type.
     */
    readonly attrUserDeviceType: ros.IResolvable | string;
    /**
     * Attribute UserGeo: When generating the cache key, add the client's geographic location.
     */
    readonly attrUserGeo: ros.IResolvable | string;
    /**
     * Attribute UserLanguage: When generating cache keys, include the client's language type.
     */
    readonly attrUserLanguage: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ESA::CacheRule`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosCacheRule`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-cacherule
 */
export declare class CacheRule extends ros.Resource implements ICacheRule {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: CacheRuleProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AdditionalCacheablePorts: Enable caching on specified ports.
     */
    readonly attrAdditionalCacheablePorts: ros.IResolvable | string;
    /**
     * Attribute BrowserCacheMode: Browser cache mode.
     */
    readonly attrBrowserCacheMode: ros.IResolvable | string;
    /**
     * Attribute BrowserCacheTtl: Browser cache expiration time in seconds.
     */
    readonly attrBrowserCacheTtl: ros.IResolvable | string;
    /**
     * Attribute BypassCache: Set the bypass cache mode.
     */
    readonly attrBypassCache: ros.IResolvable | string;
    /**
     * Attribute CacheDeceptionArmor: Cache deception protection. Used to defend against web cache deception attacks, only the cache content that passes the validation will be cached.
     */
    readonly attrCacheDeceptionArmor: ros.IResolvable | string;
    /**
     * Attribute CacheReserveEligibility: Cache retention eligibility. Used to control whether user requests bypass the cache retention node when returning to the origin.
     */
    readonly attrCacheReserveEligibility: ros.IResolvable | string;
    /**
     * Attribute CacheRuleId: Cache Rule Id.
     */
    readonly attrCacheRuleId: ros.IResolvable | string;
    /**
     * Attribute CheckPresenceCookie: When generating the cache key, check if the cookie exists. If it does, add the cookie name (case-insensitive) to the cache key. Multiple cookie names are supported, separated by spaces.
     */
    readonly attrCheckPresenceCookie: ros.IResolvable | string;
    /**
     * Attribute CheckPresenceHeader: When generating the cache key, check if the header exists. If it does, add the header name (case-insensitive) to the cache key. Multiple header names are supported, separated by spaces.
     */
    readonly attrCheckPresenceHeader: ros.IResolvable | string;
    /**
     * Attribute ConfigType: Configuration type, which can be used to query global or rule-based configurations.
     */
    readonly attrConfigType: ros.IResolvable | string;
    /**
     * Attribute EdgeCacheMode: Edge cache mode.
     */
    readonly attrEdgeCacheMode: ros.IResolvable | string;
    /**
     * Attribute EdgeCacheTtl: Edge cache expiration time in seconds.
     */
    readonly attrEdgeCacheTtl: ros.IResolvable | string;
    /**
     * Attribute EdgeStatusCodeCacheTtl: Status code cache expiration time in seconds.
     */
    readonly attrEdgeStatusCodeCacheTtl: ros.IResolvable | string;
    /**
     * Attribute IncludeCookie: When generating the cache key, add the specified cookie names and their values. Multiple values are supported, separated by spaces.
     */
    readonly attrIncludeCookie: ros.IResolvable | string;
    /**
     * Attribute IncludeHeader: When generating the cache key, add the specified header names and their values. Multiple values are supported, separated by spaces.
     */
    readonly attrIncludeHeader: ros.IResolvable | string;
    /**
     * Attribute QueryString: Query strings to be reserved or excluded. Multiple values are supported, separated by spaces.
     */
    readonly attrQueryString: ros.IResolvable | string;
    /**
     * Attribute QueryStringMode: The processing mode for query strings when generating the cache key.
     */
    readonly attrQueryStringMode: ros.IResolvable | string;
    /**
     * Attribute Rule: Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set.
     */
    readonly attrRule: ros.IResolvable | string;
    /**
     * Attribute RuleEnable: Rule switch. When adding global configuration, this parameter does not need to be set.
     */
    readonly attrRuleEnable: ros.IResolvable | string;
    /**
     * Attribute RuleName: Rule name. When adding global configuration, this parameter does not need to be set.
     */
    readonly attrRuleName: ros.IResolvable | string;
    /**
     * Attribute Sequence: Order of rule execution. The smaller the value, the higher the priority for execution.
     */
    readonly attrSequence: ros.IResolvable | string;
    /**
     * Attribute ServeStale: Serve stale cache. When enabled, the node can still respond to user requests with expired cached files when the origin server is unavailable.
     */
    readonly attrServeStale: ros.IResolvable | string;
    /**
     * Attribute SiteVersion: The version number of the site configuration. For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
     */
    readonly attrSiteVersion: ros.IResolvable | string;
    /**
     * Attribute SortQueryStringForCache: Query string sorting, disabled by default.
     */
    readonly attrSortQueryStringForCache: ros.IResolvable | string;
    /**
     * Attribute UserDeviceType: When generating the cache key, add the client device type.
     */
    readonly attrUserDeviceType: ros.IResolvable | string;
    /**
     * Attribute UserGeo: When generating the cache key, add the client's geographic location.
     */
    readonly attrUserGeo: ros.IResolvable | string;
    /**
     * Attribute UserLanguage: When generating cache keys, include the client's language type.
     */
    readonly attrUserLanguage: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: CacheRuleProps, enableResourcePropertyConstraint?: boolean);
}
