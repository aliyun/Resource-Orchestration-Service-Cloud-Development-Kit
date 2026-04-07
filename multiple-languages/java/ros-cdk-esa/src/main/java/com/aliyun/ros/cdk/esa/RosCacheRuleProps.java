package com.aliyun.ros.cdk.esa;

/**
 * Properties for defining a <code>RosCacheRule</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-cacherule
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:26.153Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.RosCacheRuleProps")
@software.amazon.jsii.Jsii.Proxy(RosCacheRuleProps.Jsii$Proxy.class)
public interface RosCacheRuleProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSiteId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAdditionalCacheablePorts() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBrowserCacheMode() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBrowserCacheTtl() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBypassCache() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCacheDeceptionArmor() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCacheReserveEligibility() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCheckPresenceCookie() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCheckPresenceHeader() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEdgeCacheMode() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEdgeCacheTtl() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEdgeStatusCodeCacheTtl() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIncludeCookie() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIncludeHeader() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getQueryString() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getQueryStringMode() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRule() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRuleEnable() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRuleName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSequence() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getServeStale() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSiteVersion() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSortQueryStringForCache() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getUserDeviceType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getUserGeo() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getUserLanguage() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosCacheRuleProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosCacheRuleProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosCacheRuleProps> {
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
         * Sets the value of {@link RosCacheRuleProps#getSiteId}
         * @param siteId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder siteId(java.lang.Number siteId) {
            this.siteId = siteId;
            return this;
        }

        /**
         * Sets the value of {@link RosCacheRuleProps#getSiteId}
         * @param siteId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder siteId(com.aliyun.ros.cdk.core.IResolvable siteId) {
            this.siteId = siteId;
            return this;
        }

        /**
         * Sets the value of {@link RosCacheRuleProps#getAdditionalCacheablePorts}
         * @param additionalCacheablePorts the value to be set.
         * @return {@code this}
         */
        public Builder additionalCacheablePorts(java.lang.Number additionalCacheablePorts) {
            this.additionalCacheablePorts = additionalCacheablePorts;
            return this;
        }

        /**
         * Sets the value of {@link RosCacheRuleProps#getAdditionalCacheablePorts}
         * @param additionalCacheablePorts the value to be set.
         * @return {@code this}
         */
        public Builder additionalCacheablePorts(com.aliyun.ros.cdk.core.IResolvable additionalCacheablePorts) {
            this.additionalCacheablePorts = additionalCacheablePorts;
            return this;
        }

        /**
         * Sets the value of {@link RosCacheRuleProps#getBrowserCacheMode}
         * @param browserCacheMode the value to be set.
         * @return {@code this}
         */
        public Builder browserCacheMode(java.lang.String browserCacheMode) {
            this.browserCacheMode = browserCacheMode;
            return this;
        }

        /**
         * Sets the value of {@link RosCacheRuleProps#getBrowserCacheMode}
         * @param browserCacheMode the value to be set.
         * @return {@code this}
         */
        public Builder browserCacheMode(com.aliyun.ros.cdk.core.IResolvable browserCacheMode) {
            this.browserCacheMode = browserCacheMode;
            return this;
        }

        /**
         * Sets the value of {@link RosCacheRuleProps#getBrowserCacheTtl}
         * @param browserCacheTtl the value to be set.
         * @return {@code this}
         */
        public Builder browserCacheTtl(java.lang.Number browserCacheTtl) {
            this.browserCacheTtl = browserCacheTtl;
            return this;
        }

        /**
         * Sets the value of {@link RosCacheRuleProps#getBrowserCacheTtl}
         * @param browserCacheTtl the value to be set.
         * @return {@code this}
         */
        public Builder browserCacheTtl(com.aliyun.ros.cdk.core.IResolvable browserCacheTtl) {
            this.browserCacheTtl = browserCacheTtl;
            return this;
        }

        /**
         * Sets the value of {@link RosCacheRuleProps#getBypassCache}
         * @param bypassCache the value to be set.
         * @return {@code this}
         */
        public Builder bypassCache(java.lang.String bypassCache) {
            this.bypassCache = bypassCache;
            return this;
        }

        /**
         * Sets the value of {@link RosCacheRuleProps#getBypassCache}
         * @param bypassCache the value to be set.
         * @return {@code this}
         */
        public Builder bypassCache(com.aliyun.ros.cdk.core.IResolvable bypassCache) {
            this.bypassCache = bypassCache;
            return this;
        }

        /**
         * Sets the value of {@link RosCacheRuleProps#getCacheDeceptionArmor}
         * @param cacheDeceptionArmor the value to be set.
         * @return {@code this}
         */
        public Builder cacheDeceptionArmor(java.lang.String cacheDeceptionArmor) {
            this.cacheDeceptionArmor = cacheDeceptionArmor;
            return this;
        }

        /**
         * Sets the value of {@link RosCacheRuleProps#getCacheDeceptionArmor}
         * @param cacheDeceptionArmor the value to be set.
         * @return {@code this}
         */
        public Builder cacheDeceptionArmor(com.aliyun.ros.cdk.core.IResolvable cacheDeceptionArmor) {
            this.cacheDeceptionArmor = cacheDeceptionArmor;
            return this;
        }

        /**
         * Sets the value of {@link RosCacheRuleProps#getCacheReserveEligibility}
         * @param cacheReserveEligibility the value to be set.
         * @return {@code this}
         */
        public Builder cacheReserveEligibility(java.lang.String cacheReserveEligibility) {
            this.cacheReserveEligibility = cacheReserveEligibility;
            return this;
        }

        /**
         * Sets the value of {@link RosCacheRuleProps#getCacheReserveEligibility}
         * @param cacheReserveEligibility the value to be set.
         * @return {@code this}
         */
        public Builder cacheReserveEligibility(com.aliyun.ros.cdk.core.IResolvable cacheReserveEligibility) {
            this.cacheReserveEligibility = cacheReserveEligibility;
            return this;
        }

        /**
         * Sets the value of {@link RosCacheRuleProps#getCheckPresenceCookie}
         * @param checkPresenceCookie the value to be set.
         * @return {@code this}
         */
        public Builder checkPresenceCookie(java.lang.String checkPresenceCookie) {
            this.checkPresenceCookie = checkPresenceCookie;
            return this;
        }

        /**
         * Sets the value of {@link RosCacheRuleProps#getCheckPresenceCookie}
         * @param checkPresenceCookie the value to be set.
         * @return {@code this}
         */
        public Builder checkPresenceCookie(com.aliyun.ros.cdk.core.IResolvable checkPresenceCookie) {
            this.checkPresenceCookie = checkPresenceCookie;
            return this;
        }

        /**
         * Sets the value of {@link RosCacheRuleProps#getCheckPresenceHeader}
         * @param checkPresenceHeader the value to be set.
         * @return {@code this}
         */
        public Builder checkPresenceHeader(java.lang.String checkPresenceHeader) {
            this.checkPresenceHeader = checkPresenceHeader;
            return this;
        }

        /**
         * Sets the value of {@link RosCacheRuleProps#getCheckPresenceHeader}
         * @param checkPresenceHeader the value to be set.
         * @return {@code this}
         */
        public Builder checkPresenceHeader(com.aliyun.ros.cdk.core.IResolvable checkPresenceHeader) {
            this.checkPresenceHeader = checkPresenceHeader;
            return this;
        }

        /**
         * Sets the value of {@link RosCacheRuleProps#getEdgeCacheMode}
         * @param edgeCacheMode the value to be set.
         * @return {@code this}
         */
        public Builder edgeCacheMode(java.lang.String edgeCacheMode) {
            this.edgeCacheMode = edgeCacheMode;
            return this;
        }

        /**
         * Sets the value of {@link RosCacheRuleProps#getEdgeCacheMode}
         * @param edgeCacheMode the value to be set.
         * @return {@code this}
         */
        public Builder edgeCacheMode(com.aliyun.ros.cdk.core.IResolvable edgeCacheMode) {
            this.edgeCacheMode = edgeCacheMode;
            return this;
        }

        /**
         * Sets the value of {@link RosCacheRuleProps#getEdgeCacheTtl}
         * @param edgeCacheTtl the value to be set.
         * @return {@code this}
         */
        public Builder edgeCacheTtl(java.lang.Number edgeCacheTtl) {
            this.edgeCacheTtl = edgeCacheTtl;
            return this;
        }

        /**
         * Sets the value of {@link RosCacheRuleProps#getEdgeCacheTtl}
         * @param edgeCacheTtl the value to be set.
         * @return {@code this}
         */
        public Builder edgeCacheTtl(com.aliyun.ros.cdk.core.IResolvable edgeCacheTtl) {
            this.edgeCacheTtl = edgeCacheTtl;
            return this;
        }

        /**
         * Sets the value of {@link RosCacheRuleProps#getEdgeStatusCodeCacheTtl}
         * @param edgeStatusCodeCacheTtl the value to be set.
         * @return {@code this}
         */
        public Builder edgeStatusCodeCacheTtl(java.lang.String edgeStatusCodeCacheTtl) {
            this.edgeStatusCodeCacheTtl = edgeStatusCodeCacheTtl;
            return this;
        }

        /**
         * Sets the value of {@link RosCacheRuleProps#getEdgeStatusCodeCacheTtl}
         * @param edgeStatusCodeCacheTtl the value to be set.
         * @return {@code this}
         */
        public Builder edgeStatusCodeCacheTtl(com.aliyun.ros.cdk.core.IResolvable edgeStatusCodeCacheTtl) {
            this.edgeStatusCodeCacheTtl = edgeStatusCodeCacheTtl;
            return this;
        }

        /**
         * Sets the value of {@link RosCacheRuleProps#getIncludeCookie}
         * @param includeCookie the value to be set.
         * @return {@code this}
         */
        public Builder includeCookie(java.lang.String includeCookie) {
            this.includeCookie = includeCookie;
            return this;
        }

        /**
         * Sets the value of {@link RosCacheRuleProps#getIncludeCookie}
         * @param includeCookie the value to be set.
         * @return {@code this}
         */
        public Builder includeCookie(com.aliyun.ros.cdk.core.IResolvable includeCookie) {
            this.includeCookie = includeCookie;
            return this;
        }

        /**
         * Sets the value of {@link RosCacheRuleProps#getIncludeHeader}
         * @param includeHeader the value to be set.
         * @return {@code this}
         */
        public Builder includeHeader(java.lang.String includeHeader) {
            this.includeHeader = includeHeader;
            return this;
        }

        /**
         * Sets the value of {@link RosCacheRuleProps#getIncludeHeader}
         * @param includeHeader the value to be set.
         * @return {@code this}
         */
        public Builder includeHeader(com.aliyun.ros.cdk.core.IResolvable includeHeader) {
            this.includeHeader = includeHeader;
            return this;
        }

        /**
         * Sets the value of {@link RosCacheRuleProps#getQueryString}
         * @param queryString the value to be set.
         * @return {@code this}
         */
        public Builder queryString(java.lang.String queryString) {
            this.queryString = queryString;
            return this;
        }

        /**
         * Sets the value of {@link RosCacheRuleProps#getQueryString}
         * @param queryString the value to be set.
         * @return {@code this}
         */
        public Builder queryString(com.aliyun.ros.cdk.core.IResolvable queryString) {
            this.queryString = queryString;
            return this;
        }

        /**
         * Sets the value of {@link RosCacheRuleProps#getQueryStringMode}
         * @param queryStringMode the value to be set.
         * @return {@code this}
         */
        public Builder queryStringMode(java.lang.String queryStringMode) {
            this.queryStringMode = queryStringMode;
            return this;
        }

        /**
         * Sets the value of {@link RosCacheRuleProps#getQueryStringMode}
         * @param queryStringMode the value to be set.
         * @return {@code this}
         */
        public Builder queryStringMode(com.aliyun.ros.cdk.core.IResolvable queryStringMode) {
            this.queryStringMode = queryStringMode;
            return this;
        }

        /**
         * Sets the value of {@link RosCacheRuleProps#getRule}
         * @param rule the value to be set.
         * @return {@code this}
         */
        public Builder rule(java.lang.String rule) {
            this.rule = rule;
            return this;
        }

        /**
         * Sets the value of {@link RosCacheRuleProps#getRule}
         * @param rule the value to be set.
         * @return {@code this}
         */
        public Builder rule(com.aliyun.ros.cdk.core.IResolvable rule) {
            this.rule = rule;
            return this;
        }

        /**
         * Sets the value of {@link RosCacheRuleProps#getRuleEnable}
         * @param ruleEnable the value to be set.
         * @return {@code this}
         */
        public Builder ruleEnable(java.lang.String ruleEnable) {
            this.ruleEnable = ruleEnable;
            return this;
        }

        /**
         * Sets the value of {@link RosCacheRuleProps#getRuleEnable}
         * @param ruleEnable the value to be set.
         * @return {@code this}
         */
        public Builder ruleEnable(com.aliyun.ros.cdk.core.IResolvable ruleEnable) {
            this.ruleEnable = ruleEnable;
            return this;
        }

        /**
         * Sets the value of {@link RosCacheRuleProps#getRuleName}
         * @param ruleName the value to be set.
         * @return {@code this}
         */
        public Builder ruleName(java.lang.String ruleName) {
            this.ruleName = ruleName;
            return this;
        }

        /**
         * Sets the value of {@link RosCacheRuleProps#getRuleName}
         * @param ruleName the value to be set.
         * @return {@code this}
         */
        public Builder ruleName(com.aliyun.ros.cdk.core.IResolvable ruleName) {
            this.ruleName = ruleName;
            return this;
        }

        /**
         * Sets the value of {@link RosCacheRuleProps#getSequence}
         * @param sequence the value to be set.
         * @return {@code this}
         */
        public Builder sequence(java.lang.Number sequence) {
            this.sequence = sequence;
            return this;
        }

        /**
         * Sets the value of {@link RosCacheRuleProps#getSequence}
         * @param sequence the value to be set.
         * @return {@code this}
         */
        public Builder sequence(com.aliyun.ros.cdk.core.IResolvable sequence) {
            this.sequence = sequence;
            return this;
        }

        /**
         * Sets the value of {@link RosCacheRuleProps#getServeStale}
         * @param serveStale the value to be set.
         * @return {@code this}
         */
        public Builder serveStale(java.lang.String serveStale) {
            this.serveStale = serveStale;
            return this;
        }

        /**
         * Sets the value of {@link RosCacheRuleProps#getServeStale}
         * @param serveStale the value to be set.
         * @return {@code this}
         */
        public Builder serveStale(com.aliyun.ros.cdk.core.IResolvable serveStale) {
            this.serveStale = serveStale;
            return this;
        }

        /**
         * Sets the value of {@link RosCacheRuleProps#getSiteVersion}
         * @param siteVersion the value to be set.
         * @return {@code this}
         */
        public Builder siteVersion(java.lang.Number siteVersion) {
            this.siteVersion = siteVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosCacheRuleProps#getSiteVersion}
         * @param siteVersion the value to be set.
         * @return {@code this}
         */
        public Builder siteVersion(com.aliyun.ros.cdk.core.IResolvable siteVersion) {
            this.siteVersion = siteVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosCacheRuleProps#getSortQueryStringForCache}
         * @param sortQueryStringForCache the value to be set.
         * @return {@code this}
         */
        public Builder sortQueryStringForCache(java.lang.String sortQueryStringForCache) {
            this.sortQueryStringForCache = sortQueryStringForCache;
            return this;
        }

        /**
         * Sets the value of {@link RosCacheRuleProps#getSortQueryStringForCache}
         * @param sortQueryStringForCache the value to be set.
         * @return {@code this}
         */
        public Builder sortQueryStringForCache(com.aliyun.ros.cdk.core.IResolvable sortQueryStringForCache) {
            this.sortQueryStringForCache = sortQueryStringForCache;
            return this;
        }

        /**
         * Sets the value of {@link RosCacheRuleProps#getUserDeviceType}
         * @param userDeviceType the value to be set.
         * @return {@code this}
         */
        public Builder userDeviceType(java.lang.String userDeviceType) {
            this.userDeviceType = userDeviceType;
            return this;
        }

        /**
         * Sets the value of {@link RosCacheRuleProps#getUserDeviceType}
         * @param userDeviceType the value to be set.
         * @return {@code this}
         */
        public Builder userDeviceType(com.aliyun.ros.cdk.core.IResolvable userDeviceType) {
            this.userDeviceType = userDeviceType;
            return this;
        }

        /**
         * Sets the value of {@link RosCacheRuleProps#getUserGeo}
         * @param userGeo the value to be set.
         * @return {@code this}
         */
        public Builder userGeo(java.lang.String userGeo) {
            this.userGeo = userGeo;
            return this;
        }

        /**
         * Sets the value of {@link RosCacheRuleProps#getUserGeo}
         * @param userGeo the value to be set.
         * @return {@code this}
         */
        public Builder userGeo(com.aliyun.ros.cdk.core.IResolvable userGeo) {
            this.userGeo = userGeo;
            return this;
        }

        /**
         * Sets the value of {@link RosCacheRuleProps#getUserLanguage}
         * @param userLanguage the value to be set.
         * @return {@code this}
         */
        public Builder userLanguage(java.lang.String userLanguage) {
            this.userLanguage = userLanguage;
            return this;
        }

        /**
         * Sets the value of {@link RosCacheRuleProps#getUserLanguage}
         * @param userLanguage the value to be set.
         * @return {@code this}
         */
        public Builder userLanguage(com.aliyun.ros.cdk.core.IResolvable userLanguage) {
            this.userLanguage = userLanguage;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosCacheRuleProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosCacheRuleProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosCacheRuleProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosCacheRuleProps {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-esa.RosCacheRuleProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosCacheRuleProps.Jsii$Proxy that = (RosCacheRuleProps.Jsii$Proxy) o;

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
