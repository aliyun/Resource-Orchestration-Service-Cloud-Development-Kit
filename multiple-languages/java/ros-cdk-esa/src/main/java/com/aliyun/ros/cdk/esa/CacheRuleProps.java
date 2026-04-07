package com.aliyun.ros.cdk.esa;

/**
 * Properties for defining a <code>CacheRule</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-cacherule
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:25.897Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.CacheRuleProps")
@software.amazon.jsii.Jsii.Proxy(CacheRuleProps.Jsii$Proxy.class)
public interface CacheRuleProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property siteId: The site ID, which can be obtained by calling the [ListSites] API.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSiteId();

    /**
     * Property additionalCacheablePorts: Enable caching on specified ports.
     * <p>
     * Value range: 8880, 2052, 2082, 2086, 2095, 2053, 2083, 2087, 2096.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAdditionalCacheablePorts() {
        return null;
    }

    /**
     * Property browserCacheMode: Browser cache mode.
     * <p>
     * Possible values:
     * <p>
     * <ul>
     * <li><code>no_cache</code>no_cache: Do not cache.</li>
     * <li><code>follow_origin</code>: Follow the origin server's cache policy.</li>
     * <li><code>override_origin</code>: Override the origin server's cache policy.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBrowserCacheMode() {
        return null;
    }

    /**
     * Property browserCacheTtl: Browser cache expiration time in seconds.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBrowserCacheTtl() {
        return null;
    }

    /**
     * Property bypassCache: Set the bypass cache mode.
     * <p>
     * Possible values:
     * <p>
     * <ul>
     * <li><code>cache_all</code>: Cache all requests.</li>
     * <li><code>bypass_all</code>: Bypass cache for all requests.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBypassCache() {
        return null;
    }

    /**
     * Property cacheDeceptionArmor: Cache deception protection.
     * <p>
     * Used to defend against web cache deception attacks, only the cache content that passes the validation will be cached. Value range:
     * <p>
     * <ul>
     * <li><code>on</code>: Enabled.</li>
     * <li><code>off</code>: Disabled.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCacheDeceptionArmor() {
        return null;
    }

    /**
     * Property cacheReserveEligibility: Cache retention eligibility.
     * <p>
     * Used to control whether user requests bypass the cache retention node when returning to the origin. Possible values:
     * <p>
     * <ul>
     * <li><code>bypass_cache_reserve</code>: Requests bypass cache retention.</li>
     * <li><code>eligible_for_cache_reserve</code>: Eligible for cache retention.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCacheReserveEligibility() {
        return null;
    }

    /**
     * Property checkPresenceCookie: When generating the cache key, check if the cookie exists.
     * <p>
     * If it does, add the cookie name (case-insensitive) to the cache key. Multiple cookie names are supported, separated by spaces.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCheckPresenceCookie() {
        return null;
    }

    /**
     * Property checkPresenceHeader: When generating the cache key, check if the header exists.
     * <p>
     * If it does, add the header name (case-insensitive) to the cache key. Multiple header names are supported, separated by spaces.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCheckPresenceHeader() {
        return null;
    }

    /**
     * Property edgeCacheMode: Edge cache mode.
     * <p>
     * Possible values:
     * <p>
     * <ul>
     * <li><code>follow_origin</code>: Follow the origin server's cache policy (if it exists), otherwise use the default cache policy.</li>
     * <li><code>no_cache</code>: Do not cache.</li>
     * <li><code>override_origin</code>: Override the origin server's cache policy.</li>
     * <li><code>follow_origin_bypass</code>: Follow the origin server's cache policy (if it exists), otherwise do not cache.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEdgeCacheMode() {
        return null;
    }

    /**
     * Property edgeCacheTtl: Edge cache expiration time in seconds.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEdgeCacheTtl() {
        return null;
    }

    /**
     * Property edgeStatusCodeCacheTtl: Status code cache expiration time in seconds.
     * <p>
     * Multiple values are separated by commas, for example: 4xx=999999,5xx=999998
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEdgeStatusCodeCacheTtl() {
        return null;
    }

    /**
     * Property includeCookie: When generating the cache key, add the specified cookie names and their values.
     * <p>
     * Multiple values are supported, separated by spaces.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIncludeCookie() {
        return null;
    }

    /**
     * Property includeHeader: When generating the cache key, add the specified header names and their values.
     * <p>
     * Multiple values are supported, separated by spaces.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIncludeHeader() {
        return null;
    }

    /**
     * Property queryString: Query strings to be reserved or excluded.
     * <p>
     * Multiple values are supported, separated by spaces.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getQueryString() {
        return null;
    }

    /**
     * Property queryStringMode: The processing mode for query strings when generating the cache key.
     * <p>
     * Possible values:
     * <p>
     * <ul>
     * <li><code>ignore_all</code>: Ignore all.</li>
     * <li><code>exclude_query_string</code>: Exclude specified query strings.</li>
     * <li><code>reserve_all</code>: Default, reserve all.</li>
     * <li><code>include_query_string</code>: Include specified query strings.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getQueryStringMode() {
        return null;
    }

    /**
     * Property rule: Rule content, using conditional expressions to match user requests.
     * <p>
     * When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
     * <p>
     * <ul>
     * <li>Match all incoming requests: value set to true.</li>
     * <li>Match specified request: Set the value to a custom expression, for example: (http.host eq "video.example.com").</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRule() {
        return null;
    }

    /**
     * Property ruleEnable: Rule switch.
     * <p>
     * When adding global configuration, this parameter does not need to be set. Value range:
     * <p>
     * <ul>
     * <li><code>on</code>: open.</li>
     * <li><code>off</code>: close.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRuleEnable() {
        return null;
    }

    /**
     * Property ruleName: Rule name.
     * <p>
     * When adding global configuration, this parameter does not need to be set.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRuleName() {
        return null;
    }

    /**
     * Property sequence: Order of rule execution.
     * <p>
     * The smaller the value, the higher the priority for execution.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSequence() {
        return null;
    }

    /**
     * Property serveStale: Serve stale cache.
     * <p>
     * When enabled, the node can still respond to user requests with expired cached files when the origin server is unavailable. Value range:
     * <p>
     * <ul>
     * <li><code>on</code>: Enabled.</li>
     * <li><code>off</code>: Disabled.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getServeStale() {
        return null;
    }

    /**
     * Property siteVersion: The version number of the site configuration.
     * <p>
     * For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSiteVersion() {
        return null;
    }

    /**
     * Property sortQueryStringForCache: Query string sorting, disabled by default.
     * <p>
     * Possible values:
     * <p>
     * <ul>
     * <li><code>on</code>: Enable.</li>
     * <li><code>off</code>: Disable.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSortQueryStringForCache() {
        return null;
    }

    /**
     * Property userDeviceType: When generating the cache key, add the client device type.
     * <p>
     * Possible values:
     * <p>
     * <ul>
     * <li><code>on</code>: Enable.</li>
     * <li><code>off</code>: Disable.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getUserDeviceType() {
        return null;
    }

    /**
     * Property userGeo: When generating the cache key, add the client's geographic location.
     * <p>
     * Possible values:
     * <p>
     * <ul>
     * <li><code>on</code>: Enable.</li>
     * <li><code>off</code>: Disable.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getUserGeo() {
        return null;
    }

    /**
     * Property userLanguage: When generating cache keys, include the client's language type.
     * <p>
     * Possible values:
     * <p>
     * <ul>
     * <li><code>on</code>: Enable.</li>
     * <li><code>off</code>: Disable.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getUserLanguage() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link CacheRuleProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link CacheRuleProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<CacheRuleProps> {
        java.lang.Object siteId;
        java.lang.Object additionalCacheablePorts;
        java.lang.Object browserCacheMode;
        java.lang.Object browserCacheTtl;
        java.lang.Object bypassCache;
        java.lang.Object cacheDeceptionArmor;
        java.lang.Object cacheReserveEligibility;
        java.lang.Object checkPresenceCookie;
        java.lang.Object checkPresenceHeader;
        java.lang.Object edgeCacheMode;
        java.lang.Object edgeCacheTtl;
        java.lang.Object edgeStatusCodeCacheTtl;
        java.lang.Object includeCookie;
        java.lang.Object includeHeader;
        java.lang.Object queryString;
        java.lang.Object queryStringMode;
        java.lang.Object rule;
        java.lang.Object ruleEnable;
        java.lang.Object ruleName;
        java.lang.Object sequence;
        java.lang.Object serveStale;
        java.lang.Object siteVersion;
        java.lang.Object sortQueryStringForCache;
        java.lang.Object userDeviceType;
        java.lang.Object userGeo;
        java.lang.Object userLanguage;

        /**
         * Sets the value of {@link CacheRuleProps#getSiteId}
         * @param siteId Property siteId: The site ID, which can be obtained by calling the [ListSites] API. This parameter is required.
         * @return {@code this}
         */
        public Builder siteId(java.lang.Number siteId) {
            this.siteId = siteId;
            return this;
        }

        /**
         * Sets the value of {@link CacheRuleProps#getSiteId}
         * @param siteId Property siteId: The site ID, which can be obtained by calling the [ListSites] API. This parameter is required.
         * @return {@code this}
         */
        public Builder siteId(com.aliyun.ros.cdk.core.IResolvable siteId) {
            this.siteId = siteId;
            return this;
        }

        /**
         * Sets the value of {@link CacheRuleProps#getAdditionalCacheablePorts}
         * @param additionalCacheablePorts Property additionalCacheablePorts: Enable caching on specified ports.
         *                                 Value range: 8880, 2052, 2082, 2086, 2095, 2053, 2083, 2087, 2096.
         * @return {@code this}
         */
        public Builder additionalCacheablePorts(java.lang.Number additionalCacheablePorts) {
            this.additionalCacheablePorts = additionalCacheablePorts;
            return this;
        }

        /**
         * Sets the value of {@link CacheRuleProps#getAdditionalCacheablePorts}
         * @param additionalCacheablePorts Property additionalCacheablePorts: Enable caching on specified ports.
         *                                 Value range: 8880, 2052, 2082, 2086, 2095, 2053, 2083, 2087, 2096.
         * @return {@code this}
         */
        public Builder additionalCacheablePorts(com.aliyun.ros.cdk.core.IResolvable additionalCacheablePorts) {
            this.additionalCacheablePorts = additionalCacheablePorts;
            return this;
        }

        /**
         * Sets the value of {@link CacheRuleProps#getBrowserCacheMode}
         * @param browserCacheMode Property browserCacheMode: Browser cache mode.
         *                         Possible values:
         *                         <p>
         *                         <ul>
         *                         <li><code>no_cache</code>no_cache: Do not cache.</li>
         *                         <li><code>follow_origin</code>: Follow the origin server's cache policy.</li>
         *                         <li><code>override_origin</code>: Override the origin server's cache policy.</li>
         *                         </ul>
         * @return {@code this}
         */
        public Builder browserCacheMode(java.lang.String browserCacheMode) {
            this.browserCacheMode = browserCacheMode;
            return this;
        }

        /**
         * Sets the value of {@link CacheRuleProps#getBrowserCacheMode}
         * @param browserCacheMode Property browserCacheMode: Browser cache mode.
         *                         Possible values:
         *                         <p>
         *                         <ul>
         *                         <li><code>no_cache</code>no_cache: Do not cache.</li>
         *                         <li><code>follow_origin</code>: Follow the origin server's cache policy.</li>
         *                         <li><code>override_origin</code>: Override the origin server's cache policy.</li>
         *                         </ul>
         * @return {@code this}
         */
        public Builder browserCacheMode(com.aliyun.ros.cdk.core.IResolvable browserCacheMode) {
            this.browserCacheMode = browserCacheMode;
            return this;
        }

        /**
         * Sets the value of {@link CacheRuleProps#getBrowserCacheTtl}
         * @param browserCacheTtl Property browserCacheTtl: Browser cache expiration time in seconds.
         * @return {@code this}
         */
        public Builder browserCacheTtl(java.lang.Number browserCacheTtl) {
            this.browserCacheTtl = browserCacheTtl;
            return this;
        }

        /**
         * Sets the value of {@link CacheRuleProps#getBrowserCacheTtl}
         * @param browserCacheTtl Property browserCacheTtl: Browser cache expiration time in seconds.
         * @return {@code this}
         */
        public Builder browserCacheTtl(com.aliyun.ros.cdk.core.IResolvable browserCacheTtl) {
            this.browserCacheTtl = browserCacheTtl;
            return this;
        }

        /**
         * Sets the value of {@link CacheRuleProps#getBypassCache}
         * @param bypassCache Property bypassCache: Set the bypass cache mode.
         *                    Possible values:
         *                    <p>
         *                    <ul>
         *                    <li><code>cache_all</code>: Cache all requests.</li>
         *                    <li><code>bypass_all</code>: Bypass cache for all requests.</li>
         *                    </ul>
         * @return {@code this}
         */
        public Builder bypassCache(java.lang.String bypassCache) {
            this.bypassCache = bypassCache;
            return this;
        }

        /**
         * Sets the value of {@link CacheRuleProps#getBypassCache}
         * @param bypassCache Property bypassCache: Set the bypass cache mode.
         *                    Possible values:
         *                    <p>
         *                    <ul>
         *                    <li><code>cache_all</code>: Cache all requests.</li>
         *                    <li><code>bypass_all</code>: Bypass cache for all requests.</li>
         *                    </ul>
         * @return {@code this}
         */
        public Builder bypassCache(com.aliyun.ros.cdk.core.IResolvable bypassCache) {
            this.bypassCache = bypassCache;
            return this;
        }

        /**
         * Sets the value of {@link CacheRuleProps#getCacheDeceptionArmor}
         * @param cacheDeceptionArmor Property cacheDeceptionArmor: Cache deception protection.
         *                            Used to defend against web cache deception attacks, only the cache content that passes the validation will be cached. Value range:
         *                            <p>
         *                            <ul>
         *                            <li><code>on</code>: Enabled.</li>
         *                            <li><code>off</code>: Disabled.</li>
         *                            </ul>
         * @return {@code this}
         */
        public Builder cacheDeceptionArmor(java.lang.String cacheDeceptionArmor) {
            this.cacheDeceptionArmor = cacheDeceptionArmor;
            return this;
        }

        /**
         * Sets the value of {@link CacheRuleProps#getCacheDeceptionArmor}
         * @param cacheDeceptionArmor Property cacheDeceptionArmor: Cache deception protection.
         *                            Used to defend against web cache deception attacks, only the cache content that passes the validation will be cached. Value range:
         *                            <p>
         *                            <ul>
         *                            <li><code>on</code>: Enabled.</li>
         *                            <li><code>off</code>: Disabled.</li>
         *                            </ul>
         * @return {@code this}
         */
        public Builder cacheDeceptionArmor(com.aliyun.ros.cdk.core.IResolvable cacheDeceptionArmor) {
            this.cacheDeceptionArmor = cacheDeceptionArmor;
            return this;
        }

        /**
         * Sets the value of {@link CacheRuleProps#getCacheReserveEligibility}
         * @param cacheReserveEligibility Property cacheReserveEligibility: Cache retention eligibility.
         *                                Used to control whether user requests bypass the cache retention node when returning to the origin. Possible values:
         *                                <p>
         *                                <ul>
         *                                <li><code>bypass_cache_reserve</code>: Requests bypass cache retention.</li>
         *                                <li><code>eligible_for_cache_reserve</code>: Eligible for cache retention.</li>
         *                                </ul>
         * @return {@code this}
         */
        public Builder cacheReserveEligibility(java.lang.String cacheReserveEligibility) {
            this.cacheReserveEligibility = cacheReserveEligibility;
            return this;
        }

        /**
         * Sets the value of {@link CacheRuleProps#getCacheReserveEligibility}
         * @param cacheReserveEligibility Property cacheReserveEligibility: Cache retention eligibility.
         *                                Used to control whether user requests bypass the cache retention node when returning to the origin. Possible values:
         *                                <p>
         *                                <ul>
         *                                <li><code>bypass_cache_reserve</code>: Requests bypass cache retention.</li>
         *                                <li><code>eligible_for_cache_reserve</code>: Eligible for cache retention.</li>
         *                                </ul>
         * @return {@code this}
         */
        public Builder cacheReserveEligibility(com.aliyun.ros.cdk.core.IResolvable cacheReserveEligibility) {
            this.cacheReserveEligibility = cacheReserveEligibility;
            return this;
        }

        /**
         * Sets the value of {@link CacheRuleProps#getCheckPresenceCookie}
         * @param checkPresenceCookie Property checkPresenceCookie: When generating the cache key, check if the cookie exists.
         *                            If it does, add the cookie name (case-insensitive) to the cache key. Multiple cookie names are supported, separated by spaces.
         * @return {@code this}
         */
        public Builder checkPresenceCookie(java.lang.String checkPresenceCookie) {
            this.checkPresenceCookie = checkPresenceCookie;
            return this;
        }

        /**
         * Sets the value of {@link CacheRuleProps#getCheckPresenceCookie}
         * @param checkPresenceCookie Property checkPresenceCookie: When generating the cache key, check if the cookie exists.
         *                            If it does, add the cookie name (case-insensitive) to the cache key. Multiple cookie names are supported, separated by spaces.
         * @return {@code this}
         */
        public Builder checkPresenceCookie(com.aliyun.ros.cdk.core.IResolvable checkPresenceCookie) {
            this.checkPresenceCookie = checkPresenceCookie;
            return this;
        }

        /**
         * Sets the value of {@link CacheRuleProps#getCheckPresenceHeader}
         * @param checkPresenceHeader Property checkPresenceHeader: When generating the cache key, check if the header exists.
         *                            If it does, add the header name (case-insensitive) to the cache key. Multiple header names are supported, separated by spaces.
         * @return {@code this}
         */
        public Builder checkPresenceHeader(java.lang.String checkPresenceHeader) {
            this.checkPresenceHeader = checkPresenceHeader;
            return this;
        }

        /**
         * Sets the value of {@link CacheRuleProps#getCheckPresenceHeader}
         * @param checkPresenceHeader Property checkPresenceHeader: When generating the cache key, check if the header exists.
         *                            If it does, add the header name (case-insensitive) to the cache key. Multiple header names are supported, separated by spaces.
         * @return {@code this}
         */
        public Builder checkPresenceHeader(com.aliyun.ros.cdk.core.IResolvable checkPresenceHeader) {
            this.checkPresenceHeader = checkPresenceHeader;
            return this;
        }

        /**
         * Sets the value of {@link CacheRuleProps#getEdgeCacheMode}
         * @param edgeCacheMode Property edgeCacheMode: Edge cache mode.
         *                      Possible values:
         *                      <p>
         *                      <ul>
         *                      <li><code>follow_origin</code>: Follow the origin server's cache policy (if it exists), otherwise use the default cache policy.</li>
         *                      <li><code>no_cache</code>: Do not cache.</li>
         *                      <li><code>override_origin</code>: Override the origin server's cache policy.</li>
         *                      <li><code>follow_origin_bypass</code>: Follow the origin server's cache policy (if it exists), otherwise do not cache.</li>
         *                      </ul>
         * @return {@code this}
         */
        public Builder edgeCacheMode(java.lang.String edgeCacheMode) {
            this.edgeCacheMode = edgeCacheMode;
            return this;
        }

        /**
         * Sets the value of {@link CacheRuleProps#getEdgeCacheMode}
         * @param edgeCacheMode Property edgeCacheMode: Edge cache mode.
         *                      Possible values:
         *                      <p>
         *                      <ul>
         *                      <li><code>follow_origin</code>: Follow the origin server's cache policy (if it exists), otherwise use the default cache policy.</li>
         *                      <li><code>no_cache</code>: Do not cache.</li>
         *                      <li><code>override_origin</code>: Override the origin server's cache policy.</li>
         *                      <li><code>follow_origin_bypass</code>: Follow the origin server's cache policy (if it exists), otherwise do not cache.</li>
         *                      </ul>
         * @return {@code this}
         */
        public Builder edgeCacheMode(com.aliyun.ros.cdk.core.IResolvable edgeCacheMode) {
            this.edgeCacheMode = edgeCacheMode;
            return this;
        }

        /**
         * Sets the value of {@link CacheRuleProps#getEdgeCacheTtl}
         * @param edgeCacheTtl Property edgeCacheTtl: Edge cache expiration time in seconds.
         * @return {@code this}
         */
        public Builder edgeCacheTtl(java.lang.Number edgeCacheTtl) {
            this.edgeCacheTtl = edgeCacheTtl;
            return this;
        }

        /**
         * Sets the value of {@link CacheRuleProps#getEdgeCacheTtl}
         * @param edgeCacheTtl Property edgeCacheTtl: Edge cache expiration time in seconds.
         * @return {@code this}
         */
        public Builder edgeCacheTtl(com.aliyun.ros.cdk.core.IResolvable edgeCacheTtl) {
            this.edgeCacheTtl = edgeCacheTtl;
            return this;
        }

        /**
         * Sets the value of {@link CacheRuleProps#getEdgeStatusCodeCacheTtl}
         * @param edgeStatusCodeCacheTtl Property edgeStatusCodeCacheTtl: Status code cache expiration time in seconds.
         *                               Multiple values are separated by commas, for example: 4xx=999999,5xx=999998
         * @return {@code this}
         */
        public Builder edgeStatusCodeCacheTtl(java.lang.String edgeStatusCodeCacheTtl) {
            this.edgeStatusCodeCacheTtl = edgeStatusCodeCacheTtl;
            return this;
        }

        /**
         * Sets the value of {@link CacheRuleProps#getEdgeStatusCodeCacheTtl}
         * @param edgeStatusCodeCacheTtl Property edgeStatusCodeCacheTtl: Status code cache expiration time in seconds.
         *                               Multiple values are separated by commas, for example: 4xx=999999,5xx=999998
         * @return {@code this}
         */
        public Builder edgeStatusCodeCacheTtl(com.aliyun.ros.cdk.core.IResolvable edgeStatusCodeCacheTtl) {
            this.edgeStatusCodeCacheTtl = edgeStatusCodeCacheTtl;
            return this;
        }

        /**
         * Sets the value of {@link CacheRuleProps#getIncludeCookie}
         * @param includeCookie Property includeCookie: When generating the cache key, add the specified cookie names and their values.
         *                      Multiple values are supported, separated by spaces.
         * @return {@code this}
         */
        public Builder includeCookie(java.lang.String includeCookie) {
            this.includeCookie = includeCookie;
            return this;
        }

        /**
         * Sets the value of {@link CacheRuleProps#getIncludeCookie}
         * @param includeCookie Property includeCookie: When generating the cache key, add the specified cookie names and their values.
         *                      Multiple values are supported, separated by spaces.
         * @return {@code this}
         */
        public Builder includeCookie(com.aliyun.ros.cdk.core.IResolvable includeCookie) {
            this.includeCookie = includeCookie;
            return this;
        }

        /**
         * Sets the value of {@link CacheRuleProps#getIncludeHeader}
         * @param includeHeader Property includeHeader: When generating the cache key, add the specified header names and their values.
         *                      Multiple values are supported, separated by spaces.
         * @return {@code this}
         */
        public Builder includeHeader(java.lang.String includeHeader) {
            this.includeHeader = includeHeader;
            return this;
        }

        /**
         * Sets the value of {@link CacheRuleProps#getIncludeHeader}
         * @param includeHeader Property includeHeader: When generating the cache key, add the specified header names and their values.
         *                      Multiple values are supported, separated by spaces.
         * @return {@code this}
         */
        public Builder includeHeader(com.aliyun.ros.cdk.core.IResolvable includeHeader) {
            this.includeHeader = includeHeader;
            return this;
        }

        /**
         * Sets the value of {@link CacheRuleProps#getQueryString}
         * @param queryString Property queryString: Query strings to be reserved or excluded.
         *                    Multiple values are supported, separated by spaces.
         * @return {@code this}
         */
        public Builder queryString(java.lang.String queryString) {
            this.queryString = queryString;
            return this;
        }

        /**
         * Sets the value of {@link CacheRuleProps#getQueryString}
         * @param queryString Property queryString: Query strings to be reserved or excluded.
         *                    Multiple values are supported, separated by spaces.
         * @return {@code this}
         */
        public Builder queryString(com.aliyun.ros.cdk.core.IResolvable queryString) {
            this.queryString = queryString;
            return this;
        }

        /**
         * Sets the value of {@link CacheRuleProps#getQueryStringMode}
         * @param queryStringMode Property queryStringMode: The processing mode for query strings when generating the cache key.
         *                        Possible values:
         *                        <p>
         *                        <ul>
         *                        <li><code>ignore_all</code>: Ignore all.</li>
         *                        <li><code>exclude_query_string</code>: Exclude specified query strings.</li>
         *                        <li><code>reserve_all</code>: Default, reserve all.</li>
         *                        <li><code>include_query_string</code>: Include specified query strings.</li>
         *                        </ul>
         * @return {@code this}
         */
        public Builder queryStringMode(java.lang.String queryStringMode) {
            this.queryStringMode = queryStringMode;
            return this;
        }

        /**
         * Sets the value of {@link CacheRuleProps#getQueryStringMode}
         * @param queryStringMode Property queryStringMode: The processing mode for query strings when generating the cache key.
         *                        Possible values:
         *                        <p>
         *                        <ul>
         *                        <li><code>ignore_all</code>: Ignore all.</li>
         *                        <li><code>exclude_query_string</code>: Exclude specified query strings.</li>
         *                        <li><code>reserve_all</code>: Default, reserve all.</li>
         *                        <li><code>include_query_string</code>: Include specified query strings.</li>
         *                        </ul>
         * @return {@code this}
         */
        public Builder queryStringMode(com.aliyun.ros.cdk.core.IResolvable queryStringMode) {
            this.queryStringMode = queryStringMode;
            return this;
        }

        /**
         * Sets the value of {@link CacheRuleProps#getRule}
         * @param rule Property rule: Rule content, using conditional expressions to match user requests.
         *             When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
         *             <p>
         *             <ul>
         *             <li>Match all incoming requests: value set to true.</li>
         *             <li>Match specified request: Set the value to a custom expression, for example: (http.host eq "video.example.com").</li>
         *             </ul>
         * @return {@code this}
         */
        public Builder rule(java.lang.String rule) {
            this.rule = rule;
            return this;
        }

        /**
         * Sets the value of {@link CacheRuleProps#getRule}
         * @param rule Property rule: Rule content, using conditional expressions to match user requests.
         *             When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
         *             <p>
         *             <ul>
         *             <li>Match all incoming requests: value set to true.</li>
         *             <li>Match specified request: Set the value to a custom expression, for example: (http.host eq "video.example.com").</li>
         *             </ul>
         * @return {@code this}
         */
        public Builder rule(com.aliyun.ros.cdk.core.IResolvable rule) {
            this.rule = rule;
            return this;
        }

        /**
         * Sets the value of {@link CacheRuleProps#getRuleEnable}
         * @param ruleEnable Property ruleEnable: Rule switch.
         *                   When adding global configuration, this parameter does not need to be set. Value range:
         *                   <p>
         *                   <ul>
         *                   <li><code>on</code>: open.</li>
         *                   <li><code>off</code>: close.</li>
         *                   </ul>
         * @return {@code this}
         */
        public Builder ruleEnable(java.lang.String ruleEnable) {
            this.ruleEnable = ruleEnable;
            return this;
        }

        /**
         * Sets the value of {@link CacheRuleProps#getRuleEnable}
         * @param ruleEnable Property ruleEnable: Rule switch.
         *                   When adding global configuration, this parameter does not need to be set. Value range:
         *                   <p>
         *                   <ul>
         *                   <li><code>on</code>: open.</li>
         *                   <li><code>off</code>: close.</li>
         *                   </ul>
         * @return {@code this}
         */
        public Builder ruleEnable(com.aliyun.ros.cdk.core.IResolvable ruleEnable) {
            this.ruleEnable = ruleEnable;
            return this;
        }

        /**
         * Sets the value of {@link CacheRuleProps#getRuleName}
         * @param ruleName Property ruleName: Rule name.
         *                 When adding global configuration, this parameter does not need to be set.
         * @return {@code this}
         */
        public Builder ruleName(java.lang.String ruleName) {
            this.ruleName = ruleName;
            return this;
        }

        /**
         * Sets the value of {@link CacheRuleProps#getRuleName}
         * @param ruleName Property ruleName: Rule name.
         *                 When adding global configuration, this parameter does not need to be set.
         * @return {@code this}
         */
        public Builder ruleName(com.aliyun.ros.cdk.core.IResolvable ruleName) {
            this.ruleName = ruleName;
            return this;
        }

        /**
         * Sets the value of {@link CacheRuleProps#getSequence}
         * @param sequence Property sequence: Order of rule execution.
         *                 The smaller the value, the higher the priority for execution.
         * @return {@code this}
         */
        public Builder sequence(java.lang.Number sequence) {
            this.sequence = sequence;
            return this;
        }

        /**
         * Sets the value of {@link CacheRuleProps#getSequence}
         * @param sequence Property sequence: Order of rule execution.
         *                 The smaller the value, the higher the priority for execution.
         * @return {@code this}
         */
        public Builder sequence(com.aliyun.ros.cdk.core.IResolvable sequence) {
            this.sequence = sequence;
            return this;
        }

        /**
         * Sets the value of {@link CacheRuleProps#getServeStale}
         * @param serveStale Property serveStale: Serve stale cache.
         *                   When enabled, the node can still respond to user requests with expired cached files when the origin server is unavailable. Value range:
         *                   <p>
         *                   <ul>
         *                   <li><code>on</code>: Enabled.</li>
         *                   <li><code>off</code>: Disabled.</li>
         *                   </ul>
         * @return {@code this}
         */
        public Builder serveStale(java.lang.String serveStale) {
            this.serveStale = serveStale;
            return this;
        }

        /**
         * Sets the value of {@link CacheRuleProps#getServeStale}
         * @param serveStale Property serveStale: Serve stale cache.
         *                   When enabled, the node can still respond to user requests with expired cached files when the origin server is unavailable. Value range:
         *                   <p>
         *                   <ul>
         *                   <li><code>on</code>: Enabled.</li>
         *                   <li><code>off</code>: Disabled.</li>
         *                   </ul>
         * @return {@code this}
         */
        public Builder serveStale(com.aliyun.ros.cdk.core.IResolvable serveStale) {
            this.serveStale = serveStale;
            return this;
        }

        /**
         * Sets the value of {@link CacheRuleProps#getSiteVersion}
         * @param siteVersion Property siteVersion: The version number of the site configuration.
         *                    For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
         * @return {@code this}
         */
        public Builder siteVersion(java.lang.Number siteVersion) {
            this.siteVersion = siteVersion;
            return this;
        }

        /**
         * Sets the value of {@link CacheRuleProps#getSiteVersion}
         * @param siteVersion Property siteVersion: The version number of the site configuration.
         *                    For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
         * @return {@code this}
         */
        public Builder siteVersion(com.aliyun.ros.cdk.core.IResolvable siteVersion) {
            this.siteVersion = siteVersion;
            return this;
        }

        /**
         * Sets the value of {@link CacheRuleProps#getSortQueryStringForCache}
         * @param sortQueryStringForCache Property sortQueryStringForCache: Query string sorting, disabled by default.
         *                                Possible values:
         *                                <p>
         *                                <ul>
         *                                <li><code>on</code>: Enable.</li>
         *                                <li><code>off</code>: Disable.</li>
         *                                </ul>
         * @return {@code this}
         */
        public Builder sortQueryStringForCache(java.lang.String sortQueryStringForCache) {
            this.sortQueryStringForCache = sortQueryStringForCache;
            return this;
        }

        /**
         * Sets the value of {@link CacheRuleProps#getSortQueryStringForCache}
         * @param sortQueryStringForCache Property sortQueryStringForCache: Query string sorting, disabled by default.
         *                                Possible values:
         *                                <p>
         *                                <ul>
         *                                <li><code>on</code>: Enable.</li>
         *                                <li><code>off</code>: Disable.</li>
         *                                </ul>
         * @return {@code this}
         */
        public Builder sortQueryStringForCache(com.aliyun.ros.cdk.core.IResolvable sortQueryStringForCache) {
            this.sortQueryStringForCache = sortQueryStringForCache;
            return this;
        }

        /**
         * Sets the value of {@link CacheRuleProps#getUserDeviceType}
         * @param userDeviceType Property userDeviceType: When generating the cache key, add the client device type.
         *                       Possible values:
         *                       <p>
         *                       <ul>
         *                       <li><code>on</code>: Enable.</li>
         *                       <li><code>off</code>: Disable.</li>
         *                       </ul>
         * @return {@code this}
         */
        public Builder userDeviceType(java.lang.String userDeviceType) {
            this.userDeviceType = userDeviceType;
            return this;
        }

        /**
         * Sets the value of {@link CacheRuleProps#getUserDeviceType}
         * @param userDeviceType Property userDeviceType: When generating the cache key, add the client device type.
         *                       Possible values:
         *                       <p>
         *                       <ul>
         *                       <li><code>on</code>: Enable.</li>
         *                       <li><code>off</code>: Disable.</li>
         *                       </ul>
         * @return {@code this}
         */
        public Builder userDeviceType(com.aliyun.ros.cdk.core.IResolvable userDeviceType) {
            this.userDeviceType = userDeviceType;
            return this;
        }

        /**
         * Sets the value of {@link CacheRuleProps#getUserGeo}
         * @param userGeo Property userGeo: When generating the cache key, add the client's geographic location.
         *                Possible values:
         *                <p>
         *                <ul>
         *                <li><code>on</code>: Enable.</li>
         *                <li><code>off</code>: Disable.</li>
         *                </ul>
         * @return {@code this}
         */
        public Builder userGeo(java.lang.String userGeo) {
            this.userGeo = userGeo;
            return this;
        }

        /**
         * Sets the value of {@link CacheRuleProps#getUserGeo}
         * @param userGeo Property userGeo: When generating the cache key, add the client's geographic location.
         *                Possible values:
         *                <p>
         *                <ul>
         *                <li><code>on</code>: Enable.</li>
         *                <li><code>off</code>: Disable.</li>
         *                </ul>
         * @return {@code this}
         */
        public Builder userGeo(com.aliyun.ros.cdk.core.IResolvable userGeo) {
            this.userGeo = userGeo;
            return this;
        }

        /**
         * Sets the value of {@link CacheRuleProps#getUserLanguage}
         * @param userLanguage Property userLanguage: When generating cache keys, include the client's language type.
         *                     Possible values:
         *                     <p>
         *                     <ul>
         *                     <li><code>on</code>: Enable.</li>
         *                     <li><code>off</code>: Disable.</li>
         *                     </ul>
         * @return {@code this}
         */
        public Builder userLanguage(java.lang.String userLanguage) {
            this.userLanguage = userLanguage;
            return this;
        }

        /**
         * Sets the value of {@link CacheRuleProps#getUserLanguage}
         * @param userLanguage Property userLanguage: When generating cache keys, include the client's language type.
         *                     Possible values:
         *                     <p>
         *                     <ul>
         *                     <li><code>on</code>: Enable.</li>
         *                     <li><code>off</code>: Disable.</li>
         *                     </ul>
         * @return {@code this}
         */
        public Builder userLanguage(com.aliyun.ros.cdk.core.IResolvable userLanguage) {
            this.userLanguage = userLanguage;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link CacheRuleProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public CacheRuleProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link CacheRuleProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements CacheRuleProps {
        private final java.lang.Object siteId;
        private final java.lang.Object additionalCacheablePorts;
        private final java.lang.Object browserCacheMode;
        private final java.lang.Object browserCacheTtl;
        private final java.lang.Object bypassCache;
        private final java.lang.Object cacheDeceptionArmor;
        private final java.lang.Object cacheReserveEligibility;
        private final java.lang.Object checkPresenceCookie;
        private final java.lang.Object checkPresenceHeader;
        private final java.lang.Object edgeCacheMode;
        private final java.lang.Object edgeCacheTtl;
        private final java.lang.Object edgeStatusCodeCacheTtl;
        private final java.lang.Object includeCookie;
        private final java.lang.Object includeHeader;
        private final java.lang.Object queryString;
        private final java.lang.Object queryStringMode;
        private final java.lang.Object rule;
        private final java.lang.Object ruleEnable;
        private final java.lang.Object ruleName;
        private final java.lang.Object sequence;
        private final java.lang.Object serveStale;
        private final java.lang.Object siteVersion;
        private final java.lang.Object sortQueryStringForCache;
        private final java.lang.Object userDeviceType;
        private final java.lang.Object userGeo;
        private final java.lang.Object userLanguage;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.siteId = software.amazon.jsii.Kernel.get(this, "siteId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.additionalCacheablePorts = software.amazon.jsii.Kernel.get(this, "additionalCacheablePorts", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.browserCacheMode = software.amazon.jsii.Kernel.get(this, "browserCacheMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.browserCacheTtl = software.amazon.jsii.Kernel.get(this, "browserCacheTtl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.bypassCache = software.amazon.jsii.Kernel.get(this, "bypassCache", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.cacheDeceptionArmor = software.amazon.jsii.Kernel.get(this, "cacheDeceptionArmor", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.cacheReserveEligibility = software.amazon.jsii.Kernel.get(this, "cacheReserveEligibility", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.checkPresenceCookie = software.amazon.jsii.Kernel.get(this, "checkPresenceCookie", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.checkPresenceHeader = software.amazon.jsii.Kernel.get(this, "checkPresenceHeader", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.edgeCacheMode = software.amazon.jsii.Kernel.get(this, "edgeCacheMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.edgeCacheTtl = software.amazon.jsii.Kernel.get(this, "edgeCacheTtl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.edgeStatusCodeCacheTtl = software.amazon.jsii.Kernel.get(this, "edgeStatusCodeCacheTtl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.includeCookie = software.amazon.jsii.Kernel.get(this, "includeCookie", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.includeHeader = software.amazon.jsii.Kernel.get(this, "includeHeader", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.queryString = software.amazon.jsii.Kernel.get(this, "queryString", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.queryStringMode = software.amazon.jsii.Kernel.get(this, "queryStringMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.rule = software.amazon.jsii.Kernel.get(this, "rule", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ruleEnable = software.amazon.jsii.Kernel.get(this, "ruleEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ruleName = software.amazon.jsii.Kernel.get(this, "ruleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sequence = software.amazon.jsii.Kernel.get(this, "sequence", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.serveStale = software.amazon.jsii.Kernel.get(this, "serveStale", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.siteVersion = software.amazon.jsii.Kernel.get(this, "siteVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sortQueryStringForCache = software.amazon.jsii.Kernel.get(this, "sortQueryStringForCache", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.userDeviceType = software.amazon.jsii.Kernel.get(this, "userDeviceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.userGeo = software.amazon.jsii.Kernel.get(this, "userGeo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.userLanguage = software.amazon.jsii.Kernel.get(this, "userLanguage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.siteId = java.util.Objects.requireNonNull(builder.siteId, "siteId is required");
            this.additionalCacheablePorts = builder.additionalCacheablePorts;
            this.browserCacheMode = builder.browserCacheMode;
            this.browserCacheTtl = builder.browserCacheTtl;
            this.bypassCache = builder.bypassCache;
            this.cacheDeceptionArmor = builder.cacheDeceptionArmor;
            this.cacheReserveEligibility = builder.cacheReserveEligibility;
            this.checkPresenceCookie = builder.checkPresenceCookie;
            this.checkPresenceHeader = builder.checkPresenceHeader;
            this.edgeCacheMode = builder.edgeCacheMode;
            this.edgeCacheTtl = builder.edgeCacheTtl;
            this.edgeStatusCodeCacheTtl = builder.edgeStatusCodeCacheTtl;
            this.includeCookie = builder.includeCookie;
            this.includeHeader = builder.includeHeader;
            this.queryString = builder.queryString;
            this.queryStringMode = builder.queryStringMode;
            this.rule = builder.rule;
            this.ruleEnable = builder.ruleEnable;
            this.ruleName = builder.ruleName;
            this.sequence = builder.sequence;
            this.serveStale = builder.serveStale;
            this.siteVersion = builder.siteVersion;
            this.sortQueryStringForCache = builder.sortQueryStringForCache;
            this.userDeviceType = builder.userDeviceType;
            this.userGeo = builder.userGeo;
            this.userLanguage = builder.userLanguage;
        }

        @Override
        public final java.lang.Object getSiteId() {
            return this.siteId;
        }

        @Override
        public final java.lang.Object getAdditionalCacheablePorts() {
            return this.additionalCacheablePorts;
        }

        @Override
        public final java.lang.Object getBrowserCacheMode() {
            return this.browserCacheMode;
        }

        @Override
        public final java.lang.Object getBrowserCacheTtl() {
            return this.browserCacheTtl;
        }

        @Override
        public final java.lang.Object getBypassCache() {
            return this.bypassCache;
        }

        @Override
        public final java.lang.Object getCacheDeceptionArmor() {
            return this.cacheDeceptionArmor;
        }

        @Override
        public final java.lang.Object getCacheReserveEligibility() {
            return this.cacheReserveEligibility;
        }

        @Override
        public final java.lang.Object getCheckPresenceCookie() {
            return this.checkPresenceCookie;
        }

        @Override
        public final java.lang.Object getCheckPresenceHeader() {
            return this.checkPresenceHeader;
        }

        @Override
        public final java.lang.Object getEdgeCacheMode() {
            return this.edgeCacheMode;
        }

        @Override
        public final java.lang.Object getEdgeCacheTtl() {
            return this.edgeCacheTtl;
        }

        @Override
        public final java.lang.Object getEdgeStatusCodeCacheTtl() {
            return this.edgeStatusCodeCacheTtl;
        }

        @Override
        public final java.lang.Object getIncludeCookie() {
            return this.includeCookie;
        }

        @Override
        public final java.lang.Object getIncludeHeader() {
            return this.includeHeader;
        }

        @Override
        public final java.lang.Object getQueryString() {
            return this.queryString;
        }

        @Override
        public final java.lang.Object getQueryStringMode() {
            return this.queryStringMode;
        }

        @Override
        public final java.lang.Object getRule() {
            return this.rule;
        }

        @Override
        public final java.lang.Object getRuleEnable() {
            return this.ruleEnable;
        }

        @Override
        public final java.lang.Object getRuleName() {
            return this.ruleName;
        }

        @Override
        public final java.lang.Object getSequence() {
            return this.sequence;
        }

        @Override
        public final java.lang.Object getServeStale() {
            return this.serveStale;
        }

        @Override
        public final java.lang.Object getSiteVersion() {
            return this.siteVersion;
        }

        @Override
        public final java.lang.Object getSortQueryStringForCache() {
            return this.sortQueryStringForCache;
        }

        @Override
        public final java.lang.Object getUserDeviceType() {
            return this.userDeviceType;
        }

        @Override
        public final java.lang.Object getUserGeo() {
            return this.userGeo;
        }

        @Override
        public final java.lang.Object getUserLanguage() {
            return this.userLanguage;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("siteId", om.valueToTree(this.getSiteId()));
            if (this.getAdditionalCacheablePorts() != null) {
                data.set("additionalCacheablePorts", om.valueToTree(this.getAdditionalCacheablePorts()));
            }
            if (this.getBrowserCacheMode() != null) {
                data.set("browserCacheMode", om.valueToTree(this.getBrowserCacheMode()));
            }
            if (this.getBrowserCacheTtl() != null) {
                data.set("browserCacheTtl", om.valueToTree(this.getBrowserCacheTtl()));
            }
            if (this.getBypassCache() != null) {
                data.set("bypassCache", om.valueToTree(this.getBypassCache()));
            }
            if (this.getCacheDeceptionArmor() != null) {
                data.set("cacheDeceptionArmor", om.valueToTree(this.getCacheDeceptionArmor()));
            }
            if (this.getCacheReserveEligibility() != null) {
                data.set("cacheReserveEligibility", om.valueToTree(this.getCacheReserveEligibility()));
            }
            if (this.getCheckPresenceCookie() != null) {
                data.set("checkPresenceCookie", om.valueToTree(this.getCheckPresenceCookie()));
            }
            if (this.getCheckPresenceHeader() != null) {
                data.set("checkPresenceHeader", om.valueToTree(this.getCheckPresenceHeader()));
            }
            if (this.getEdgeCacheMode() != null) {
                data.set("edgeCacheMode", om.valueToTree(this.getEdgeCacheMode()));
            }
            if (this.getEdgeCacheTtl() != null) {
                data.set("edgeCacheTtl", om.valueToTree(this.getEdgeCacheTtl()));
            }
            if (this.getEdgeStatusCodeCacheTtl() != null) {
                data.set("edgeStatusCodeCacheTtl", om.valueToTree(this.getEdgeStatusCodeCacheTtl()));
            }
            if (this.getIncludeCookie() != null) {
                data.set("includeCookie", om.valueToTree(this.getIncludeCookie()));
            }
            if (this.getIncludeHeader() != null) {
                data.set("includeHeader", om.valueToTree(this.getIncludeHeader()));
            }
            if (this.getQueryString() != null) {
                data.set("queryString", om.valueToTree(this.getQueryString()));
            }
            if (this.getQueryStringMode() != null) {
                data.set("queryStringMode", om.valueToTree(this.getQueryStringMode()));
            }
            if (this.getRule() != null) {
                data.set("rule", om.valueToTree(this.getRule()));
            }
            if (this.getRuleEnable() != null) {
                data.set("ruleEnable", om.valueToTree(this.getRuleEnable()));
            }
            if (this.getRuleName() != null) {
                data.set("ruleName", om.valueToTree(this.getRuleName()));
            }
            if (this.getSequence() != null) {
                data.set("sequence", om.valueToTree(this.getSequence()));
            }
            if (this.getServeStale() != null) {
                data.set("serveStale", om.valueToTree(this.getServeStale()));
            }
            if (this.getSiteVersion() != null) {
                data.set("siteVersion", om.valueToTree(this.getSiteVersion()));
            }
            if (this.getSortQueryStringForCache() != null) {
                data.set("sortQueryStringForCache", om.valueToTree(this.getSortQueryStringForCache()));
            }
            if (this.getUserDeviceType() != null) {
                data.set("userDeviceType", om.valueToTree(this.getUserDeviceType()));
            }
            if (this.getUserGeo() != null) {
                data.set("userGeo", om.valueToTree(this.getUserGeo()));
            }
            if (this.getUserLanguage() != null) {
                data.set("userLanguage", om.valueToTree(this.getUserLanguage()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-esa.CacheRuleProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            CacheRuleProps.Jsii$Proxy that = (CacheRuleProps.Jsii$Proxy) o;

            if (!siteId.equals(that.siteId)) return false;
            if (this.additionalCacheablePorts != null ? !this.additionalCacheablePorts.equals(that.additionalCacheablePorts) : that.additionalCacheablePorts != null) return false;
            if (this.browserCacheMode != null ? !this.browserCacheMode.equals(that.browserCacheMode) : that.browserCacheMode != null) return false;
            if (this.browserCacheTtl != null ? !this.browserCacheTtl.equals(that.browserCacheTtl) : that.browserCacheTtl != null) return false;
            if (this.bypassCache != null ? !this.bypassCache.equals(that.bypassCache) : that.bypassCache != null) return false;
            if (this.cacheDeceptionArmor != null ? !this.cacheDeceptionArmor.equals(that.cacheDeceptionArmor) : that.cacheDeceptionArmor != null) return false;
            if (this.cacheReserveEligibility != null ? !this.cacheReserveEligibility.equals(that.cacheReserveEligibility) : that.cacheReserveEligibility != null) return false;
            if (this.checkPresenceCookie != null ? !this.checkPresenceCookie.equals(that.checkPresenceCookie) : that.checkPresenceCookie != null) return false;
            if (this.checkPresenceHeader != null ? !this.checkPresenceHeader.equals(that.checkPresenceHeader) : that.checkPresenceHeader != null) return false;
            if (this.edgeCacheMode != null ? !this.edgeCacheMode.equals(that.edgeCacheMode) : that.edgeCacheMode != null) return false;
            if (this.edgeCacheTtl != null ? !this.edgeCacheTtl.equals(that.edgeCacheTtl) : that.edgeCacheTtl != null) return false;
            if (this.edgeStatusCodeCacheTtl != null ? !this.edgeStatusCodeCacheTtl.equals(that.edgeStatusCodeCacheTtl) : that.edgeStatusCodeCacheTtl != null) return false;
            if (this.includeCookie != null ? !this.includeCookie.equals(that.includeCookie) : that.includeCookie != null) return false;
            if (this.includeHeader != null ? !this.includeHeader.equals(that.includeHeader) : that.includeHeader != null) return false;
            if (this.queryString != null ? !this.queryString.equals(that.queryString) : that.queryString != null) return false;
            if (this.queryStringMode != null ? !this.queryStringMode.equals(that.queryStringMode) : that.queryStringMode != null) return false;
            if (this.rule != null ? !this.rule.equals(that.rule) : that.rule != null) return false;
            if (this.ruleEnable != null ? !this.ruleEnable.equals(that.ruleEnable) : that.ruleEnable != null) return false;
            if (this.ruleName != null ? !this.ruleName.equals(that.ruleName) : that.ruleName != null) return false;
            if (this.sequence != null ? !this.sequence.equals(that.sequence) : that.sequence != null) return false;
            if (this.serveStale != null ? !this.serveStale.equals(that.serveStale) : that.serveStale != null) return false;
            if (this.siteVersion != null ? !this.siteVersion.equals(that.siteVersion) : that.siteVersion != null) return false;
            if (this.sortQueryStringForCache != null ? !this.sortQueryStringForCache.equals(that.sortQueryStringForCache) : that.sortQueryStringForCache != null) return false;
            if (this.userDeviceType != null ? !this.userDeviceType.equals(that.userDeviceType) : that.userDeviceType != null) return false;
            if (this.userGeo != null ? !this.userGeo.equals(that.userGeo) : that.userGeo != null) return false;
            return this.userLanguage != null ? this.userLanguage.equals(that.userLanguage) : that.userLanguage == null;
        }

        @Override
        public final int hashCode() {
            int result = this.siteId.hashCode();
            result = 31 * result + (this.additionalCacheablePorts != null ? this.additionalCacheablePorts.hashCode() : 0);
            result = 31 * result + (this.browserCacheMode != null ? this.browserCacheMode.hashCode() : 0);
            result = 31 * result + (this.browserCacheTtl != null ? this.browserCacheTtl.hashCode() : 0);
            result = 31 * result + (this.bypassCache != null ? this.bypassCache.hashCode() : 0);
            result = 31 * result + (this.cacheDeceptionArmor != null ? this.cacheDeceptionArmor.hashCode() : 0);
            result = 31 * result + (this.cacheReserveEligibility != null ? this.cacheReserveEligibility.hashCode() : 0);
            result = 31 * result + (this.checkPresenceCookie != null ? this.checkPresenceCookie.hashCode() : 0);
            result = 31 * result + (this.checkPresenceHeader != null ? this.checkPresenceHeader.hashCode() : 0);
            result = 31 * result + (this.edgeCacheMode != null ? this.edgeCacheMode.hashCode() : 0);
            result = 31 * result + (this.edgeCacheTtl != null ? this.edgeCacheTtl.hashCode() : 0);
            result = 31 * result + (this.edgeStatusCodeCacheTtl != null ? this.edgeStatusCodeCacheTtl.hashCode() : 0);
            result = 31 * result + (this.includeCookie != null ? this.includeCookie.hashCode() : 0);
            result = 31 * result + (this.includeHeader != null ? this.includeHeader.hashCode() : 0);
            result = 31 * result + (this.queryString != null ? this.queryString.hashCode() : 0);
            result = 31 * result + (this.queryStringMode != null ? this.queryStringMode.hashCode() : 0);
            result = 31 * result + (this.rule != null ? this.rule.hashCode() : 0);
            result = 31 * result + (this.ruleEnable != null ? this.ruleEnable.hashCode() : 0);
            result = 31 * result + (this.ruleName != null ? this.ruleName.hashCode() : 0);
            result = 31 * result + (this.sequence != null ? this.sequence.hashCode() : 0);
            result = 31 * result + (this.serveStale != null ? this.serveStale.hashCode() : 0);
            result = 31 * result + (this.siteVersion != null ? this.siteVersion.hashCode() : 0);
            result = 31 * result + (this.sortQueryStringForCache != null ? this.sortQueryStringForCache.hashCode() : 0);
            result = 31 * result + (this.userDeviceType != null ? this.userDeviceType.hashCode() : 0);
            result = 31 * result + (this.userGeo != null ? this.userGeo.hashCode() : 0);
            result = 31 * result + (this.userLanguage != null ? this.userLanguage.hashCode() : 0);
            return result;
        }
    }
}
