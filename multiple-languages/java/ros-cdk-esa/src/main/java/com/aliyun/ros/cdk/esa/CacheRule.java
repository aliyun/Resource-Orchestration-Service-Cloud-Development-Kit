package com.aliyun.ros.cdk.esa;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ESA::CacheRule</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:49.857Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.CacheRule")
public class CacheRule extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.esa.ICacheRule {

    protected CacheRule(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected CacheRule(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public CacheRule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.CacheRuleProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public CacheRule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.CacheRuleProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute AdditionalCacheablePorts: Enable caching on specified ports.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAdditionalCacheablePorts() {
        return software.amazon.jsii.Kernel.get(this, "attrAdditionalCacheablePorts", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute BrowserCacheMode: Browser cache mode.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrBrowserCacheMode() {
        return software.amazon.jsii.Kernel.get(this, "attrBrowserCacheMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute BrowserCacheTtl: Browser cache expiration time in seconds.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrBrowserCacheTtl() {
        return software.amazon.jsii.Kernel.get(this, "attrBrowserCacheTtl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute BypassCache: Set the bypass cache mode.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrBypassCache() {
        return software.amazon.jsii.Kernel.get(this, "attrBypassCache", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CacheDeceptionArmor: Cache deception protection.
     * <p>
     * Used to defend against web cache deception attacks, only the cache content that passes the validation will be cached.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCacheDeceptionArmor() {
        return software.amazon.jsii.Kernel.get(this, "attrCacheDeceptionArmor", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CacheReserveEligibility: Cache retention eligibility.
     * <p>
     * Used to control whether user requests bypass the cache retention node when returning to the origin.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCacheReserveEligibility() {
        return software.amazon.jsii.Kernel.get(this, "attrCacheReserveEligibility", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CacheRuleId: Cache Rule Id.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCacheRuleId() {
        return software.amazon.jsii.Kernel.get(this, "attrCacheRuleId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CheckPresenceCookie: When generating the cache key, check if the cookie exists.
     * <p>
     * If it does, add the cookie name (case-insensitive) to the cache key. Multiple cookie names are supported, separated by spaces.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCheckPresenceCookie() {
        return software.amazon.jsii.Kernel.get(this, "attrCheckPresenceCookie", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CheckPresenceHeader: When generating the cache key, check if the header exists.
     * <p>
     * If it does, add the header name (case-insensitive) to the cache key. Multiple header names are supported, separated by spaces.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCheckPresenceHeader() {
        return software.amazon.jsii.Kernel.get(this, "attrCheckPresenceHeader", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ConfigType: Configuration type, which can be used to query global or rule-based configurations.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigType() {
        return software.amazon.jsii.Kernel.get(this, "attrConfigType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute EdgeCacheMode: Edge cache mode.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEdgeCacheMode() {
        return software.amazon.jsii.Kernel.get(this, "attrEdgeCacheMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute EdgeCacheTtl: Edge cache expiration time in seconds.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEdgeCacheTtl() {
        return software.amazon.jsii.Kernel.get(this, "attrEdgeCacheTtl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute EdgeStatusCodeCacheTtl: Status code cache expiration time in seconds.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEdgeStatusCodeCacheTtl() {
        return software.amazon.jsii.Kernel.get(this, "attrEdgeStatusCodeCacheTtl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute IncludeCookie: When generating the cache key, add the specified cookie names and their values.
     * <p>
     * Multiple values are supported, separated by spaces.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrIncludeCookie() {
        return software.amazon.jsii.Kernel.get(this, "attrIncludeCookie", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute IncludeHeader: When generating the cache key, add the specified header names and their values.
     * <p>
     * Multiple values are supported, separated by spaces.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrIncludeHeader() {
        return software.amazon.jsii.Kernel.get(this, "attrIncludeHeader", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute QueryString: Query strings to be reserved or excluded.
     * <p>
     * Multiple values are supported, separated by spaces.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrQueryString() {
        return software.amazon.jsii.Kernel.get(this, "attrQueryString", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute QueryStringMode: The processing mode for query strings when generating the cache key.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrQueryStringMode() {
        return software.amazon.jsii.Kernel.get(this, "attrQueryStringMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Rule: Rule content, using conditional expressions to match user requests.
     * <p>
     * When adding global configuration, this parameter does not need to be set.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRule() {
        return software.amazon.jsii.Kernel.get(this, "attrRule", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute RuleEnable: Rule switch.
     * <p>
     * When adding global configuration, this parameter does not need to be set.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleEnable() {
        return software.amazon.jsii.Kernel.get(this, "attrRuleEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute RuleName: Rule name.
     * <p>
     * When adding global configuration, this parameter does not need to be set.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleName() {
        return software.amazon.jsii.Kernel.get(this, "attrRuleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Sequence: Order of rule execution.
     * <p>
     * The smaller the value, the higher the priority for execution.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSequence() {
        return software.amazon.jsii.Kernel.get(this, "attrSequence", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ServeStale: Serve stale cache.
     * <p>
     * When enabled, the node can still respond to user requests with expired cached files when the origin server is unavailable.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrServeStale() {
        return software.amazon.jsii.Kernel.get(this, "attrServeStale", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SiteVersion: The version number of the site configuration.
     * <p>
     * For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSiteVersion() {
        return software.amazon.jsii.Kernel.get(this, "attrSiteVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SortQueryStringForCache: Query string sorting, disabled by default.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSortQueryStringForCache() {
        return software.amazon.jsii.Kernel.get(this, "attrSortQueryStringForCache", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute UserDeviceType: When generating the cache key, add the client device type.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserDeviceType() {
        return software.amazon.jsii.Kernel.get(this, "attrUserDeviceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute UserGeo: When generating the cache key, add the client's geographic location.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserGeo() {
        return software.amazon.jsii.Kernel.get(this, "attrUserGeo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute UserLanguage: When generating cache keys, include the client's language type.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserLanguage() {
        return software.amazon.jsii.Kernel.get(this, "attrUserLanguage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.CacheRuleProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.esa.CacheRuleProps.class));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    protected void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.String getId() {
        return software.amazon.jsii.Kernel.get(this, "id", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    protected void setId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "id", java.util.Objects.requireNonNull(value, "id is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.esa.CacheRule}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.esa.CacheRule> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.esa.CacheRuleProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.esa.CacheRuleProps.Builder();
        }

        /**
         * Property siteId: The site ID, which can be obtained by calling the [ListSites] API.
         * <p>
         * @return {@code this}
         * @param siteId Property siteId: The site ID, which can be obtained by calling the [ListSites] API. This parameter is required.
         */
        public Builder siteId(final java.lang.Number siteId) {
            this.props.siteId(siteId);
            return this;
        }
        /**
         * Property siteId: The site ID, which can be obtained by calling the [ListSites] API.
         * <p>
         * @return {@code this}
         * @param siteId Property siteId: The site ID, which can be obtained by calling the [ListSites] API. This parameter is required.
         */
        public Builder siteId(final com.aliyun.ros.cdk.core.IResolvable siteId) {
            this.props.siteId(siteId);
            return this;
        }

        /**
         * Property additionalCacheablePorts: Enable caching on specified ports.
         * <p>
         * Value range: 8880, 2052, 2082, 2086, 2095, 2053, 2083, 2087, 2096.
         * <p>
         * @return {@code this}
         * @param additionalCacheablePorts Property additionalCacheablePorts: Enable caching on specified ports. This parameter is required.
         */
        public Builder additionalCacheablePorts(final java.lang.Number additionalCacheablePorts) {
            this.props.additionalCacheablePorts(additionalCacheablePorts);
            return this;
        }
        /**
         * Property additionalCacheablePorts: Enable caching on specified ports.
         * <p>
         * Value range: 8880, 2052, 2082, 2086, 2095, 2053, 2083, 2087, 2096.
         * <p>
         * @return {@code this}
         * @param additionalCacheablePorts Property additionalCacheablePorts: Enable caching on specified ports. This parameter is required.
         */
        public Builder additionalCacheablePorts(final com.aliyun.ros.cdk.core.IResolvable additionalCacheablePorts) {
            this.props.additionalCacheablePorts(additionalCacheablePorts);
            return this;
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
         * <p>
         * @return {@code this}
         * @param browserCacheMode Property browserCacheMode: Browser cache mode. This parameter is required.
         */
        public Builder browserCacheMode(final java.lang.String browserCacheMode) {
            this.props.browserCacheMode(browserCacheMode);
            return this;
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
         * <p>
         * @return {@code this}
         * @param browserCacheMode Property browserCacheMode: Browser cache mode. This parameter is required.
         */
        public Builder browserCacheMode(final com.aliyun.ros.cdk.core.IResolvable browserCacheMode) {
            this.props.browserCacheMode(browserCacheMode);
            return this;
        }

        /**
         * Property browserCacheTtl: Browser cache expiration time in seconds.
         * <p>
         * @return {@code this}
         * @param browserCacheTtl Property browserCacheTtl: Browser cache expiration time in seconds. This parameter is required.
         */
        public Builder browserCacheTtl(final java.lang.Number browserCacheTtl) {
            this.props.browserCacheTtl(browserCacheTtl);
            return this;
        }
        /**
         * Property browserCacheTtl: Browser cache expiration time in seconds.
         * <p>
         * @return {@code this}
         * @param browserCacheTtl Property browserCacheTtl: Browser cache expiration time in seconds. This parameter is required.
         */
        public Builder browserCacheTtl(final com.aliyun.ros.cdk.core.IResolvable browserCacheTtl) {
            this.props.browserCacheTtl(browserCacheTtl);
            return this;
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
         * <p>
         * @return {@code this}
         * @param bypassCache Property bypassCache: Set the bypass cache mode. This parameter is required.
         */
        public Builder bypassCache(final java.lang.String bypassCache) {
            this.props.bypassCache(bypassCache);
            return this;
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
         * <p>
         * @return {@code this}
         * @param bypassCache Property bypassCache: Set the bypass cache mode. This parameter is required.
         */
        public Builder bypassCache(final com.aliyun.ros.cdk.core.IResolvable bypassCache) {
            this.props.bypassCache(bypassCache);
            return this;
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
         * <p>
         * @return {@code this}
         * @param cacheDeceptionArmor Property cacheDeceptionArmor: Cache deception protection. This parameter is required.
         */
        public Builder cacheDeceptionArmor(final java.lang.String cacheDeceptionArmor) {
            this.props.cacheDeceptionArmor(cacheDeceptionArmor);
            return this;
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
         * <p>
         * @return {@code this}
         * @param cacheDeceptionArmor Property cacheDeceptionArmor: Cache deception protection. This parameter is required.
         */
        public Builder cacheDeceptionArmor(final com.aliyun.ros.cdk.core.IResolvable cacheDeceptionArmor) {
            this.props.cacheDeceptionArmor(cacheDeceptionArmor);
            return this;
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
         * <p>
         * @return {@code this}
         * @param cacheReserveEligibility Property cacheReserveEligibility: Cache retention eligibility. This parameter is required.
         */
        public Builder cacheReserveEligibility(final java.lang.String cacheReserveEligibility) {
            this.props.cacheReserveEligibility(cacheReserveEligibility);
            return this;
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
         * <p>
         * @return {@code this}
         * @param cacheReserveEligibility Property cacheReserveEligibility: Cache retention eligibility. This parameter is required.
         */
        public Builder cacheReserveEligibility(final com.aliyun.ros.cdk.core.IResolvable cacheReserveEligibility) {
            this.props.cacheReserveEligibility(cacheReserveEligibility);
            return this;
        }

        /**
         * Property checkPresenceCookie: When generating the cache key, check if the cookie exists.
         * <p>
         * If it does, add the cookie name (case-insensitive) to the cache key. Multiple cookie names are supported, separated by spaces.
         * <p>
         * @return {@code this}
         * @param checkPresenceCookie Property checkPresenceCookie: When generating the cache key, check if the cookie exists. This parameter is required.
         */
        public Builder checkPresenceCookie(final java.lang.String checkPresenceCookie) {
            this.props.checkPresenceCookie(checkPresenceCookie);
            return this;
        }
        /**
         * Property checkPresenceCookie: When generating the cache key, check if the cookie exists.
         * <p>
         * If it does, add the cookie name (case-insensitive) to the cache key. Multiple cookie names are supported, separated by spaces.
         * <p>
         * @return {@code this}
         * @param checkPresenceCookie Property checkPresenceCookie: When generating the cache key, check if the cookie exists. This parameter is required.
         */
        public Builder checkPresenceCookie(final com.aliyun.ros.cdk.core.IResolvable checkPresenceCookie) {
            this.props.checkPresenceCookie(checkPresenceCookie);
            return this;
        }

        /**
         * Property checkPresenceHeader: When generating the cache key, check if the header exists.
         * <p>
         * If it does, add the header name (case-insensitive) to the cache key. Multiple header names are supported, separated by spaces.
         * <p>
         * @return {@code this}
         * @param checkPresenceHeader Property checkPresenceHeader: When generating the cache key, check if the header exists. This parameter is required.
         */
        public Builder checkPresenceHeader(final java.lang.String checkPresenceHeader) {
            this.props.checkPresenceHeader(checkPresenceHeader);
            return this;
        }
        /**
         * Property checkPresenceHeader: When generating the cache key, check if the header exists.
         * <p>
         * If it does, add the header name (case-insensitive) to the cache key. Multiple header names are supported, separated by spaces.
         * <p>
         * @return {@code this}
         * @param checkPresenceHeader Property checkPresenceHeader: When generating the cache key, check if the header exists. This parameter is required.
         */
        public Builder checkPresenceHeader(final com.aliyun.ros.cdk.core.IResolvable checkPresenceHeader) {
            this.props.checkPresenceHeader(checkPresenceHeader);
            return this;
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
         * <p>
         * @return {@code this}
         * @param edgeCacheMode Property edgeCacheMode: Edge cache mode. This parameter is required.
         */
        public Builder edgeCacheMode(final java.lang.String edgeCacheMode) {
            this.props.edgeCacheMode(edgeCacheMode);
            return this;
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
         * <p>
         * @return {@code this}
         * @param edgeCacheMode Property edgeCacheMode: Edge cache mode. This parameter is required.
         */
        public Builder edgeCacheMode(final com.aliyun.ros.cdk.core.IResolvable edgeCacheMode) {
            this.props.edgeCacheMode(edgeCacheMode);
            return this;
        }

        /**
         * Property edgeCacheTtl: Edge cache expiration time in seconds.
         * <p>
         * @return {@code this}
         * @param edgeCacheTtl Property edgeCacheTtl: Edge cache expiration time in seconds. This parameter is required.
         */
        public Builder edgeCacheTtl(final java.lang.Number edgeCacheTtl) {
            this.props.edgeCacheTtl(edgeCacheTtl);
            return this;
        }
        /**
         * Property edgeCacheTtl: Edge cache expiration time in seconds.
         * <p>
         * @return {@code this}
         * @param edgeCacheTtl Property edgeCacheTtl: Edge cache expiration time in seconds. This parameter is required.
         */
        public Builder edgeCacheTtl(final com.aliyun.ros.cdk.core.IResolvable edgeCacheTtl) {
            this.props.edgeCacheTtl(edgeCacheTtl);
            return this;
        }

        /**
         * Property edgeStatusCodeCacheTtl: Status code cache expiration time in seconds.
         * <p>
         * Multiple values are separated by commas, for example: 4xx=999999,5xx=999998
         * <p>
         * @return {@code this}
         * @param edgeStatusCodeCacheTtl Property edgeStatusCodeCacheTtl: Status code cache expiration time in seconds. This parameter is required.
         */
        public Builder edgeStatusCodeCacheTtl(final java.lang.String edgeStatusCodeCacheTtl) {
            this.props.edgeStatusCodeCacheTtl(edgeStatusCodeCacheTtl);
            return this;
        }
        /**
         * Property edgeStatusCodeCacheTtl: Status code cache expiration time in seconds.
         * <p>
         * Multiple values are separated by commas, for example: 4xx=999999,5xx=999998
         * <p>
         * @return {@code this}
         * @param edgeStatusCodeCacheTtl Property edgeStatusCodeCacheTtl: Status code cache expiration time in seconds. This parameter is required.
         */
        public Builder edgeStatusCodeCacheTtl(final com.aliyun.ros.cdk.core.IResolvable edgeStatusCodeCacheTtl) {
            this.props.edgeStatusCodeCacheTtl(edgeStatusCodeCacheTtl);
            return this;
        }

        /**
         * Property includeCookie: When generating the cache key, add the specified cookie names and their values.
         * <p>
         * Multiple values are supported, separated by spaces.
         * <p>
         * @return {@code this}
         * @param includeCookie Property includeCookie: When generating the cache key, add the specified cookie names and their values. This parameter is required.
         */
        public Builder includeCookie(final java.lang.String includeCookie) {
            this.props.includeCookie(includeCookie);
            return this;
        }
        /**
         * Property includeCookie: When generating the cache key, add the specified cookie names and their values.
         * <p>
         * Multiple values are supported, separated by spaces.
         * <p>
         * @return {@code this}
         * @param includeCookie Property includeCookie: When generating the cache key, add the specified cookie names and their values. This parameter is required.
         */
        public Builder includeCookie(final com.aliyun.ros.cdk.core.IResolvable includeCookie) {
            this.props.includeCookie(includeCookie);
            return this;
        }

        /**
         * Property includeHeader: When generating the cache key, add the specified header names and their values.
         * <p>
         * Multiple values are supported, separated by spaces.
         * <p>
         * @return {@code this}
         * @param includeHeader Property includeHeader: When generating the cache key, add the specified header names and their values. This parameter is required.
         */
        public Builder includeHeader(final java.lang.String includeHeader) {
            this.props.includeHeader(includeHeader);
            return this;
        }
        /**
         * Property includeHeader: When generating the cache key, add the specified header names and their values.
         * <p>
         * Multiple values are supported, separated by spaces.
         * <p>
         * @return {@code this}
         * @param includeHeader Property includeHeader: When generating the cache key, add the specified header names and their values. This parameter is required.
         */
        public Builder includeHeader(final com.aliyun.ros.cdk.core.IResolvable includeHeader) {
            this.props.includeHeader(includeHeader);
            return this;
        }

        /**
         * Property queryString: Query strings to be reserved or excluded.
         * <p>
         * Multiple values are supported, separated by spaces.
         * <p>
         * @return {@code this}
         * @param queryString Property queryString: Query strings to be reserved or excluded. This parameter is required.
         */
        public Builder queryString(final java.lang.String queryString) {
            this.props.queryString(queryString);
            return this;
        }
        /**
         * Property queryString: Query strings to be reserved or excluded.
         * <p>
         * Multiple values are supported, separated by spaces.
         * <p>
         * @return {@code this}
         * @param queryString Property queryString: Query strings to be reserved or excluded. This parameter is required.
         */
        public Builder queryString(final com.aliyun.ros.cdk.core.IResolvable queryString) {
            this.props.queryString(queryString);
            return this;
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
         * <p>
         * @return {@code this}
         * @param queryStringMode Property queryStringMode: The processing mode for query strings when generating the cache key. This parameter is required.
         */
        public Builder queryStringMode(final java.lang.String queryStringMode) {
            this.props.queryStringMode(queryStringMode);
            return this;
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
         * <p>
         * @return {@code this}
         * @param queryStringMode Property queryStringMode: The processing mode for query strings when generating the cache key. This parameter is required.
         */
        public Builder queryStringMode(final com.aliyun.ros.cdk.core.IResolvable queryStringMode) {
            this.props.queryStringMode(queryStringMode);
            return this;
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
         * <p>
         * @return {@code this}
         * @param rule Property rule: Rule content, using conditional expressions to match user requests. This parameter is required.
         */
        public Builder rule(final java.lang.String rule) {
            this.props.rule(rule);
            return this;
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
         * <p>
         * @return {@code this}
         * @param rule Property rule: Rule content, using conditional expressions to match user requests. This parameter is required.
         */
        public Builder rule(final com.aliyun.ros.cdk.core.IResolvable rule) {
            this.props.rule(rule);
            return this;
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
         * <p>
         * @return {@code this}
         * @param ruleEnable Property ruleEnable: Rule switch. This parameter is required.
         */
        public Builder ruleEnable(final java.lang.String ruleEnable) {
            this.props.ruleEnable(ruleEnable);
            return this;
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
         * <p>
         * @return {@code this}
         * @param ruleEnable Property ruleEnable: Rule switch. This parameter is required.
         */
        public Builder ruleEnable(final com.aliyun.ros.cdk.core.IResolvable ruleEnable) {
            this.props.ruleEnable(ruleEnable);
            return this;
        }

        /**
         * Property ruleName: Rule name.
         * <p>
         * When adding global configuration, this parameter does not need to be set.
         * <p>
         * @return {@code this}
         * @param ruleName Property ruleName: Rule name. This parameter is required.
         */
        public Builder ruleName(final java.lang.String ruleName) {
            this.props.ruleName(ruleName);
            return this;
        }
        /**
         * Property ruleName: Rule name.
         * <p>
         * When adding global configuration, this parameter does not need to be set.
         * <p>
         * @return {@code this}
         * @param ruleName Property ruleName: Rule name. This parameter is required.
         */
        public Builder ruleName(final com.aliyun.ros.cdk.core.IResolvable ruleName) {
            this.props.ruleName(ruleName);
            return this;
        }

        /**
         * Property sequence: Order of rule execution.
         * <p>
         * The smaller the value, the higher the priority for execution.
         * <p>
         * @return {@code this}
         * @param sequence Property sequence: Order of rule execution. This parameter is required.
         */
        public Builder sequence(final java.lang.Number sequence) {
            this.props.sequence(sequence);
            return this;
        }
        /**
         * Property sequence: Order of rule execution.
         * <p>
         * The smaller the value, the higher the priority for execution.
         * <p>
         * @return {@code this}
         * @param sequence Property sequence: Order of rule execution. This parameter is required.
         */
        public Builder sequence(final com.aliyun.ros.cdk.core.IResolvable sequence) {
            this.props.sequence(sequence);
            return this;
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
         * <p>
         * @return {@code this}
         * @param serveStale Property serveStale: Serve stale cache. This parameter is required.
         */
        public Builder serveStale(final java.lang.String serveStale) {
            this.props.serveStale(serveStale);
            return this;
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
         * <p>
         * @return {@code this}
         * @param serveStale Property serveStale: Serve stale cache. This parameter is required.
         */
        public Builder serveStale(final com.aliyun.ros.cdk.core.IResolvable serveStale) {
            this.props.serveStale(serveStale);
            return this;
        }

        /**
         * Property siteVersion: The version number of the site configuration.
         * <p>
         * For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
         * <p>
         * @return {@code this}
         * @param siteVersion Property siteVersion: The version number of the site configuration. This parameter is required.
         */
        public Builder siteVersion(final java.lang.Number siteVersion) {
            this.props.siteVersion(siteVersion);
            return this;
        }
        /**
         * Property siteVersion: The version number of the site configuration.
         * <p>
         * For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
         * <p>
         * @return {@code this}
         * @param siteVersion Property siteVersion: The version number of the site configuration. This parameter is required.
         */
        public Builder siteVersion(final com.aliyun.ros.cdk.core.IResolvable siteVersion) {
            this.props.siteVersion(siteVersion);
            return this;
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
         * <p>
         * @return {@code this}
         * @param sortQueryStringForCache Property sortQueryStringForCache: Query string sorting, disabled by default. This parameter is required.
         */
        public Builder sortQueryStringForCache(final java.lang.String sortQueryStringForCache) {
            this.props.sortQueryStringForCache(sortQueryStringForCache);
            return this;
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
         * <p>
         * @return {@code this}
         * @param sortQueryStringForCache Property sortQueryStringForCache: Query string sorting, disabled by default. This parameter is required.
         */
        public Builder sortQueryStringForCache(final com.aliyun.ros.cdk.core.IResolvable sortQueryStringForCache) {
            this.props.sortQueryStringForCache(sortQueryStringForCache);
            return this;
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
         * <p>
         * @return {@code this}
         * @param userDeviceType Property userDeviceType: When generating the cache key, add the client device type. This parameter is required.
         */
        public Builder userDeviceType(final java.lang.String userDeviceType) {
            this.props.userDeviceType(userDeviceType);
            return this;
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
         * <p>
         * @return {@code this}
         * @param userDeviceType Property userDeviceType: When generating the cache key, add the client device type. This parameter is required.
         */
        public Builder userDeviceType(final com.aliyun.ros.cdk.core.IResolvable userDeviceType) {
            this.props.userDeviceType(userDeviceType);
            return this;
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
         * <p>
         * @return {@code this}
         * @param userGeo Property userGeo: When generating the cache key, add the client's geographic location. This parameter is required.
         */
        public Builder userGeo(final java.lang.String userGeo) {
            this.props.userGeo(userGeo);
            return this;
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
         * <p>
         * @return {@code this}
         * @param userGeo Property userGeo: When generating the cache key, add the client's geographic location. This parameter is required.
         */
        public Builder userGeo(final com.aliyun.ros.cdk.core.IResolvable userGeo) {
            this.props.userGeo(userGeo);
            return this;
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
         * <p>
         * @return {@code this}
         * @param userLanguage Property userLanguage: When generating cache keys, include the client's language type. This parameter is required.
         */
        public Builder userLanguage(final java.lang.String userLanguage) {
            this.props.userLanguage(userLanguage);
            return this;
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
         * <p>
         * @return {@code this}
         * @param userLanguage Property userLanguage: When generating cache keys, include the client's language type. This parameter is required.
         */
        public Builder userLanguage(final com.aliyun.ros.cdk.core.IResolvable userLanguage) {
            this.props.userLanguage(userLanguage);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.esa.CacheRule}.
         */
        @Override
        public com.aliyun.ros.cdk.esa.CacheRule build() {
            return new com.aliyun.ros.cdk.esa.CacheRule(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
