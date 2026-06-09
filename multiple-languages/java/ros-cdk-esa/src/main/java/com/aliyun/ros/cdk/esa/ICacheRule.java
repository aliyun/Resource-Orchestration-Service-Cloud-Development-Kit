package com.aliyun.ros.cdk.esa;

/**
 * Represents a <code>CacheRule</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T11:49:07.646Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.ICacheRule")
@software.amazon.jsii.Jsii.Proxy(ICacheRule.Jsii$Proxy.class)
public interface ICacheRule extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute AdditionalCacheablePorts: Enable caching on specified ports.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAdditionalCacheablePorts();

    /**
     * Attribute BrowserCacheMode: Browser cache mode.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrBrowserCacheMode();

    /**
     * Attribute BrowserCacheTtl: Browser cache expiration time in seconds.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrBrowserCacheTtl();

    /**
     * Attribute BypassCache: Set the bypass cache mode.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrBypassCache();

    /**
     * Attribute CacheDeceptionArmor: Cache deception protection.
     * <p>
     * Used to defend against web cache deception attacks, only the cache content that passes the validation will be cached.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCacheDeceptionArmor();

    /**
     * Attribute CacheReserveEligibility: Cache retention eligibility.
     * <p>
     * Used to control whether user requests bypass the cache retention node when returning to the origin.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCacheReserveEligibility();

    /**
     * Attribute CacheRuleId: Cache Rule Id.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCacheRuleId();

    /**
     * Attribute CheckPresenceCookie: When generating the cache key, check if the cookie exists.
     * <p>
     * If it does, add the cookie name (case-insensitive) to the cache key. Multiple cookie names are supported, separated by spaces.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCheckPresenceCookie();

    /**
     * Attribute CheckPresenceHeader: When generating the cache key, check if the header exists.
     * <p>
     * If it does, add the header name (case-insensitive) to the cache key. Multiple header names are supported, separated by spaces.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCheckPresenceHeader();

    /**
     * Attribute ConfigType: Configuration type, which can be used to query global or rule-based configurations.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigType();

    /**
     * Attribute EdgeCacheMode: Edge cache mode.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEdgeCacheMode();

    /**
     * Attribute EdgeCacheTtl: Edge cache expiration time in seconds.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEdgeCacheTtl();

    /**
     * Attribute EdgeStatusCodeCacheTtl: Status code cache expiration time in seconds.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEdgeStatusCodeCacheTtl();

    /**
     * Attribute IncludeCookie: When generating the cache key, add the specified cookie names and their values.
     * <p>
     * Multiple values are supported, separated by spaces.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIncludeCookie();

    /**
     * Attribute IncludeHeader: When generating the cache key, add the specified header names and their values.
     * <p>
     * Multiple values are supported, separated by spaces.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIncludeHeader();

    /**
     * Attribute QueryString: Query strings to be reserved or excluded.
     * <p>
     * Multiple values are supported, separated by spaces.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrQueryString();

    /**
     * Attribute QueryStringMode: The processing mode for query strings when generating the cache key.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrQueryStringMode();

    /**
     * Attribute Rule: Rule content, using conditional expressions to match user requests.
     * <p>
     * When adding global configuration, this parameter does not need to be set.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRule();

    /**
     * Attribute RuleEnable: Rule switch.
     * <p>
     * When adding global configuration, this parameter does not need to be set.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleEnable();

    /**
     * Attribute RuleName: Rule name.
     * <p>
     * When adding global configuration, this parameter does not need to be set.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleName();

    /**
     * Attribute Sequence: Order of rule execution.
     * <p>
     * The smaller the value, the higher the priority for execution.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSequence();

    /**
     * Attribute ServeStale: Serve stale cache.
     * <p>
     * When enabled, the node can still respond to user requests with expired cached files when the origin server is unavailable.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrServeStale();

    /**
     * Attribute SiteVersion: The version number of the site configuration.
     * <p>
     * For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSiteVersion();

    /**
     * Attribute SortQueryStringForCache: Query string sorting, disabled by default.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSortQueryStringForCache();

    /**
     * Attribute UserDeviceType: When generating the cache key, add the client device type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserDeviceType();

    /**
     * Attribute UserGeo: When generating the cache key, add the client's geographic location.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserGeo();

    /**
     * Attribute UserLanguage: When generating cache keys, include the client's language type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserLanguage();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.CacheRuleProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.esa.ICacheRule.Jsii$Default {
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
        }

        /**
         * The construct tree node for this construct.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ConstructNode getNode() {
            return software.amazon.jsii.Kernel.get(this, "node", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.ConstructNode.class));
        }

        /**
         * The environment this resource belongs to.
         * <p>
         * For resources that are created and managed by the CDK
         * (generally, those created by creating new class instances like Role, Bucket, etc.),
         * this is always the same as the environment of the stack they belong to;
         * however, for imported resources
         * (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
         * that might be different than the stack they were imported into.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResourceEnvironment getEnv() {
            return software.amazon.jsii.Kernel.get(this, "env", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResourceEnvironment.class));
        }

        /**
         * The stack in which this resource is defined.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack getStack() {
            return software.amazon.jsii.Kernel.get(this, "stack", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Stack.class));
        }

        /**
         * Attribute AdditionalCacheablePorts: Enable caching on specified ports.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAdditionalCacheablePorts() {
            return software.amazon.jsii.Kernel.get(this, "attrAdditionalCacheablePorts", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute BrowserCacheMode: Browser cache mode.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrBrowserCacheMode() {
            return software.amazon.jsii.Kernel.get(this, "attrBrowserCacheMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute BrowserCacheTtl: Browser cache expiration time in seconds.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrBrowserCacheTtl() {
            return software.amazon.jsii.Kernel.get(this, "attrBrowserCacheTtl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute BypassCache: Set the bypass cache mode.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrBypassCache() {
            return software.amazon.jsii.Kernel.get(this, "attrBypassCache", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CacheDeceptionArmor: Cache deception protection.
         * <p>
         * Used to defend against web cache deception attacks, only the cache content that passes the validation will be cached.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCacheDeceptionArmor() {
            return software.amazon.jsii.Kernel.get(this, "attrCacheDeceptionArmor", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CacheReserveEligibility: Cache retention eligibility.
         * <p>
         * Used to control whether user requests bypass the cache retention node when returning to the origin.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCacheReserveEligibility() {
            return software.amazon.jsii.Kernel.get(this, "attrCacheReserveEligibility", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CacheRuleId: Cache Rule Id.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCacheRuleId() {
            return software.amazon.jsii.Kernel.get(this, "attrCacheRuleId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CheckPresenceCookie: When generating the cache key, check if the cookie exists.
         * <p>
         * If it does, add the cookie name (case-insensitive) to the cache key. Multiple cookie names are supported, separated by spaces.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCheckPresenceCookie() {
            return software.amazon.jsii.Kernel.get(this, "attrCheckPresenceCookie", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CheckPresenceHeader: When generating the cache key, check if the header exists.
         * <p>
         * If it does, add the header name (case-insensitive) to the cache key. Multiple header names are supported, separated by spaces.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCheckPresenceHeader() {
            return software.amazon.jsii.Kernel.get(this, "attrCheckPresenceHeader", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ConfigType: Configuration type, which can be used to query global or rule-based configurations.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigType() {
            return software.amazon.jsii.Kernel.get(this, "attrConfigType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EdgeCacheMode: Edge cache mode.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEdgeCacheMode() {
            return software.amazon.jsii.Kernel.get(this, "attrEdgeCacheMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EdgeCacheTtl: Edge cache expiration time in seconds.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEdgeCacheTtl() {
            return software.amazon.jsii.Kernel.get(this, "attrEdgeCacheTtl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EdgeStatusCodeCacheTtl: Status code cache expiration time in seconds.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEdgeStatusCodeCacheTtl() {
            return software.amazon.jsii.Kernel.get(this, "attrEdgeStatusCodeCacheTtl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IncludeCookie: When generating the cache key, add the specified cookie names and their values.
         * <p>
         * Multiple values are supported, separated by spaces.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIncludeCookie() {
            return software.amazon.jsii.Kernel.get(this, "attrIncludeCookie", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IncludeHeader: When generating the cache key, add the specified header names and their values.
         * <p>
         * Multiple values are supported, separated by spaces.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIncludeHeader() {
            return software.amazon.jsii.Kernel.get(this, "attrIncludeHeader", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute QueryString: Query strings to be reserved or excluded.
         * <p>
         * Multiple values are supported, separated by spaces.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrQueryString() {
            return software.amazon.jsii.Kernel.get(this, "attrQueryString", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute QueryStringMode: The processing mode for query strings when generating the cache key.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrQueryStringMode() {
            return software.amazon.jsii.Kernel.get(this, "attrQueryStringMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Rule: Rule content, using conditional expressions to match user requests.
         * <p>
         * When adding global configuration, this parameter does not need to be set.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRule() {
            return software.amazon.jsii.Kernel.get(this, "attrRule", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RuleEnable: Rule switch.
         * <p>
         * When adding global configuration, this parameter does not need to be set.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleEnable() {
            return software.amazon.jsii.Kernel.get(this, "attrRuleEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RuleName: Rule name.
         * <p>
         * When adding global configuration, this parameter does not need to be set.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleName() {
            return software.amazon.jsii.Kernel.get(this, "attrRuleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Sequence: Order of rule execution.
         * <p>
         * The smaller the value, the higher the priority for execution.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSequence() {
            return software.amazon.jsii.Kernel.get(this, "attrSequence", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ServeStale: Serve stale cache.
         * <p>
         * When enabled, the node can still respond to user requests with expired cached files when the origin server is unavailable.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrServeStale() {
            return software.amazon.jsii.Kernel.get(this, "attrServeStale", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SiteVersion: The version number of the site configuration.
         * <p>
         * For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSiteVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrSiteVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SortQueryStringForCache: Query string sorting, disabled by default.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSortQueryStringForCache() {
            return software.amazon.jsii.Kernel.get(this, "attrSortQueryStringForCache", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UserDeviceType: When generating the cache key, add the client device type.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserDeviceType() {
            return software.amazon.jsii.Kernel.get(this, "attrUserDeviceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UserGeo: When generating the cache key, add the client's geographic location.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserGeo() {
            return software.amazon.jsii.Kernel.get(this, "attrUserGeo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UserLanguage: When generating cache keys, include the client's language type.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserLanguage() {
            return software.amazon.jsii.Kernel.get(this, "attrUserLanguage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.CacheRuleProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.esa.CacheRuleProps.class));
        }
    }

    /**
     * Internal default implementation for {@link ICacheRule}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends ICacheRule, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

        /**
         * The construct tree node for this construct.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ConstructNode getNode() {
            return software.amazon.jsii.Kernel.get(this, "node", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.ConstructNode.class));
        }

        /**
         * The environment this resource belongs to.
         * <p>
         * For resources that are created and managed by the CDK
         * (generally, those created by creating new class instances like Role, Bucket, etc.),
         * this is always the same as the environment of the stack they belong to;
         * however, for imported resources
         * (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
         * that might be different than the stack they were imported into.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResourceEnvironment getEnv() {
            return software.amazon.jsii.Kernel.get(this, "env", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResourceEnvironment.class));
        }

        /**
         * The stack in which this resource is defined.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack getStack() {
            return software.amazon.jsii.Kernel.get(this, "stack", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Stack.class));
        }

        /**
         * Attribute AdditionalCacheablePorts: Enable caching on specified ports.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAdditionalCacheablePorts() {
            return software.amazon.jsii.Kernel.get(this, "attrAdditionalCacheablePorts", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute BrowserCacheMode: Browser cache mode.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrBrowserCacheMode() {
            return software.amazon.jsii.Kernel.get(this, "attrBrowserCacheMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute BrowserCacheTtl: Browser cache expiration time in seconds.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrBrowserCacheTtl() {
            return software.amazon.jsii.Kernel.get(this, "attrBrowserCacheTtl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute BypassCache: Set the bypass cache mode.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrBypassCache() {
            return software.amazon.jsii.Kernel.get(this, "attrBypassCache", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CacheDeceptionArmor: Cache deception protection.
         * <p>
         * Used to defend against web cache deception attacks, only the cache content that passes the validation will be cached.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCacheDeceptionArmor() {
            return software.amazon.jsii.Kernel.get(this, "attrCacheDeceptionArmor", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CacheReserveEligibility: Cache retention eligibility.
         * <p>
         * Used to control whether user requests bypass the cache retention node when returning to the origin.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCacheReserveEligibility() {
            return software.amazon.jsii.Kernel.get(this, "attrCacheReserveEligibility", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CacheRuleId: Cache Rule Id.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCacheRuleId() {
            return software.amazon.jsii.Kernel.get(this, "attrCacheRuleId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CheckPresenceCookie: When generating the cache key, check if the cookie exists.
         * <p>
         * If it does, add the cookie name (case-insensitive) to the cache key. Multiple cookie names are supported, separated by spaces.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCheckPresenceCookie() {
            return software.amazon.jsii.Kernel.get(this, "attrCheckPresenceCookie", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CheckPresenceHeader: When generating the cache key, check if the header exists.
         * <p>
         * If it does, add the header name (case-insensitive) to the cache key. Multiple header names are supported, separated by spaces.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCheckPresenceHeader() {
            return software.amazon.jsii.Kernel.get(this, "attrCheckPresenceHeader", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ConfigType: Configuration type, which can be used to query global or rule-based configurations.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigType() {
            return software.amazon.jsii.Kernel.get(this, "attrConfigType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EdgeCacheMode: Edge cache mode.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEdgeCacheMode() {
            return software.amazon.jsii.Kernel.get(this, "attrEdgeCacheMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EdgeCacheTtl: Edge cache expiration time in seconds.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEdgeCacheTtl() {
            return software.amazon.jsii.Kernel.get(this, "attrEdgeCacheTtl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EdgeStatusCodeCacheTtl: Status code cache expiration time in seconds.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEdgeStatusCodeCacheTtl() {
            return software.amazon.jsii.Kernel.get(this, "attrEdgeStatusCodeCacheTtl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IncludeCookie: When generating the cache key, add the specified cookie names and their values.
         * <p>
         * Multiple values are supported, separated by spaces.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIncludeCookie() {
            return software.amazon.jsii.Kernel.get(this, "attrIncludeCookie", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IncludeHeader: When generating the cache key, add the specified header names and their values.
         * <p>
         * Multiple values are supported, separated by spaces.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIncludeHeader() {
            return software.amazon.jsii.Kernel.get(this, "attrIncludeHeader", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute QueryString: Query strings to be reserved or excluded.
         * <p>
         * Multiple values are supported, separated by spaces.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrQueryString() {
            return software.amazon.jsii.Kernel.get(this, "attrQueryString", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute QueryStringMode: The processing mode for query strings when generating the cache key.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrQueryStringMode() {
            return software.amazon.jsii.Kernel.get(this, "attrQueryStringMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Rule: Rule content, using conditional expressions to match user requests.
         * <p>
         * When adding global configuration, this parameter does not need to be set.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRule() {
            return software.amazon.jsii.Kernel.get(this, "attrRule", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RuleEnable: Rule switch.
         * <p>
         * When adding global configuration, this parameter does not need to be set.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleEnable() {
            return software.amazon.jsii.Kernel.get(this, "attrRuleEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RuleName: Rule name.
         * <p>
         * When adding global configuration, this parameter does not need to be set.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleName() {
            return software.amazon.jsii.Kernel.get(this, "attrRuleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Sequence: Order of rule execution.
         * <p>
         * The smaller the value, the higher the priority for execution.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSequence() {
            return software.amazon.jsii.Kernel.get(this, "attrSequence", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ServeStale: Serve stale cache.
         * <p>
         * When enabled, the node can still respond to user requests with expired cached files when the origin server is unavailable.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrServeStale() {
            return software.amazon.jsii.Kernel.get(this, "attrServeStale", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SiteVersion: The version number of the site configuration.
         * <p>
         * For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSiteVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrSiteVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SortQueryStringForCache: Query string sorting, disabled by default.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSortQueryStringForCache() {
            return software.amazon.jsii.Kernel.get(this, "attrSortQueryStringForCache", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UserDeviceType: When generating the cache key, add the client device type.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserDeviceType() {
            return software.amazon.jsii.Kernel.get(this, "attrUserDeviceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UserGeo: When generating the cache key, add the client's geographic location.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserGeo() {
            return software.amazon.jsii.Kernel.get(this, "attrUserGeo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UserLanguage: When generating cache keys, include the client's language type.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserLanguage() {
            return software.amazon.jsii.Kernel.get(this, "attrUserLanguage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.CacheRuleProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.esa.CacheRuleProps.class));
        }
    }
}
