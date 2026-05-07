package com.aliyun.ros.cdk.esa;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::ESA::CacheRule</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:50.107Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.RosCacheRule")
public class RosCacheRule extends com.aliyun.ros.cdk.core.RosResource {

    protected RosCacheRule(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosCacheRule(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.esa.RosCacheRule.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosCacheRule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.RosCacheRuleProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), java.util.Objects.requireNonNull(enableResourcePropertyConstraint, "enableResourcePropertyConstraint is required") });
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> renderProperties(final @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> props) {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.call(this, "renderProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)), new Object[] { java.util.Objects.requireNonNull(props, "props is required") }));
    }

    /**
     * The resource type name for this resource class.
     */
    public final static java.lang.String ROS_RESOURCE_TYPE_NAME;

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAdditionalCacheablePorts() {
        return software.amazon.jsii.Kernel.get(this, "attrAdditionalCacheablePorts", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrBrowserCacheMode() {
        return software.amazon.jsii.Kernel.get(this, "attrBrowserCacheMode", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrBrowserCacheTtl() {
        return software.amazon.jsii.Kernel.get(this, "attrBrowserCacheTtl", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrBypassCache() {
        return software.amazon.jsii.Kernel.get(this, "attrBypassCache", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCacheDeceptionArmor() {
        return software.amazon.jsii.Kernel.get(this, "attrCacheDeceptionArmor", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCacheReserveEligibility() {
        return software.amazon.jsii.Kernel.get(this, "attrCacheReserveEligibility", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCacheRuleId() {
        return software.amazon.jsii.Kernel.get(this, "attrCacheRuleId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCheckPresenceCookie() {
        return software.amazon.jsii.Kernel.get(this, "attrCheckPresenceCookie", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCheckPresenceHeader() {
        return software.amazon.jsii.Kernel.get(this, "attrCheckPresenceHeader", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrConfigType() {
        return software.amazon.jsii.Kernel.get(this, "attrConfigType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrEdgeCacheMode() {
        return software.amazon.jsii.Kernel.get(this, "attrEdgeCacheMode", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrEdgeCacheTtl() {
        return software.amazon.jsii.Kernel.get(this, "attrEdgeCacheTtl", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrEdgeStatusCodeCacheTtl() {
        return software.amazon.jsii.Kernel.get(this, "attrEdgeStatusCodeCacheTtl", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrIncludeCookie() {
        return software.amazon.jsii.Kernel.get(this, "attrIncludeCookie", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrIncludeHeader() {
        return software.amazon.jsii.Kernel.get(this, "attrIncludeHeader", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrQueryString() {
        return software.amazon.jsii.Kernel.get(this, "attrQueryString", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrQueryStringMode() {
        return software.amazon.jsii.Kernel.get(this, "attrQueryStringMode", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRule() {
        return software.amazon.jsii.Kernel.get(this, "attrRule", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRuleEnable() {
        return software.amazon.jsii.Kernel.get(this, "attrRuleEnable", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRuleName() {
        return software.amazon.jsii.Kernel.get(this, "attrRuleName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSequence() {
        return software.amazon.jsii.Kernel.get(this, "attrSequence", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrServeStale() {
        return software.amazon.jsii.Kernel.get(this, "attrServeStale", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSiteVersion() {
        return software.amazon.jsii.Kernel.get(this, "attrSiteVersion", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSortQueryStringForCache() {
        return software.amazon.jsii.Kernel.get(this, "attrSortQueryStringForCache", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrUserDeviceType() {
        return software.amazon.jsii.Kernel.get(this, "attrUserDeviceType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrUserGeo() {
        return software.amazon.jsii.Kernel.get(this, "attrUserGeo", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrUserLanguage() {
        return software.amazon.jsii.Kernel.get(this, "attrUserLanguage", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getSiteId() {
        return software.amazon.jsii.Kernel.get(this, "siteId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSiteId(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "siteId", java.util.Objects.requireNonNull(value, "siteId is required"));
    }

    /**
     */
    public void setSiteId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "siteId", java.util.Objects.requireNonNull(value, "siteId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAdditionalCacheablePorts() {
        return software.amazon.jsii.Kernel.get(this, "additionalCacheablePorts", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAdditionalCacheablePorts(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "additionalCacheablePorts", value);
    }

    /**
     */
    public void setAdditionalCacheablePorts(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "additionalCacheablePorts", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getBrowserCacheMode() {
        return software.amazon.jsii.Kernel.get(this, "browserCacheMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setBrowserCacheMode(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "browserCacheMode", value);
    }

    /**
     */
    public void setBrowserCacheMode(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "browserCacheMode", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getBrowserCacheTtl() {
        return software.amazon.jsii.Kernel.get(this, "browserCacheTtl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setBrowserCacheTtl(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "browserCacheTtl", value);
    }

    /**
     */
    public void setBrowserCacheTtl(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "browserCacheTtl", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getBypassCache() {
        return software.amazon.jsii.Kernel.get(this, "bypassCache", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setBypassCache(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "bypassCache", value);
    }

    /**
     */
    public void setBypassCache(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "bypassCache", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCacheDeceptionArmor() {
        return software.amazon.jsii.Kernel.get(this, "cacheDeceptionArmor", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCacheDeceptionArmor(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "cacheDeceptionArmor", value);
    }

    /**
     */
    public void setCacheDeceptionArmor(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "cacheDeceptionArmor", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCacheReserveEligibility() {
        return software.amazon.jsii.Kernel.get(this, "cacheReserveEligibility", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCacheReserveEligibility(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "cacheReserveEligibility", value);
    }

    /**
     */
    public void setCacheReserveEligibility(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "cacheReserveEligibility", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCheckPresenceCookie() {
        return software.amazon.jsii.Kernel.get(this, "checkPresenceCookie", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCheckPresenceCookie(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "checkPresenceCookie", value);
    }

    /**
     */
    public void setCheckPresenceCookie(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "checkPresenceCookie", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCheckPresenceHeader() {
        return software.amazon.jsii.Kernel.get(this, "checkPresenceHeader", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCheckPresenceHeader(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "checkPresenceHeader", value);
    }

    /**
     */
    public void setCheckPresenceHeader(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "checkPresenceHeader", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEdgeCacheMode() {
        return software.amazon.jsii.Kernel.get(this, "edgeCacheMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEdgeCacheMode(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "edgeCacheMode", value);
    }

    /**
     */
    public void setEdgeCacheMode(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "edgeCacheMode", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEdgeCacheTtl() {
        return software.amazon.jsii.Kernel.get(this, "edgeCacheTtl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEdgeCacheTtl(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "edgeCacheTtl", value);
    }

    /**
     */
    public void setEdgeCacheTtl(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "edgeCacheTtl", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEdgeStatusCodeCacheTtl() {
        return software.amazon.jsii.Kernel.get(this, "edgeStatusCodeCacheTtl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEdgeStatusCodeCacheTtl(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "edgeStatusCodeCacheTtl", value);
    }

    /**
     */
    public void setEdgeStatusCodeCacheTtl(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "edgeStatusCodeCacheTtl", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getIncludeCookie() {
        return software.amazon.jsii.Kernel.get(this, "includeCookie", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setIncludeCookie(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "includeCookie", value);
    }

    /**
     */
    public void setIncludeCookie(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "includeCookie", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getIncludeHeader() {
        return software.amazon.jsii.Kernel.get(this, "includeHeader", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setIncludeHeader(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "includeHeader", value);
    }

    /**
     */
    public void setIncludeHeader(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "includeHeader", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getQueryString() {
        return software.amazon.jsii.Kernel.get(this, "queryString", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setQueryString(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "queryString", value);
    }

    /**
     */
    public void setQueryString(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "queryString", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getQueryStringMode() {
        return software.amazon.jsii.Kernel.get(this, "queryStringMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setQueryStringMode(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "queryStringMode", value);
    }

    /**
     */
    public void setQueryStringMode(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "queryStringMode", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRule() {
        return software.amazon.jsii.Kernel.get(this, "rule", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRule(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "rule", value);
    }

    /**
     */
    public void setRule(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "rule", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRuleEnable() {
        return software.amazon.jsii.Kernel.get(this, "ruleEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRuleEnable(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "ruleEnable", value);
    }

    /**
     */
    public void setRuleEnable(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ruleEnable", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRuleName() {
        return software.amazon.jsii.Kernel.get(this, "ruleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRuleName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "ruleName", value);
    }

    /**
     */
    public void setRuleName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ruleName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSequence() {
        return software.amazon.jsii.Kernel.get(this, "sequence", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSequence(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "sequence", value);
    }

    /**
     */
    public void setSequence(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "sequence", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getServeStale() {
        return software.amazon.jsii.Kernel.get(this, "serveStale", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setServeStale(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "serveStale", value);
    }

    /**
     */
    public void setServeStale(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "serveStale", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSiteVersion() {
        return software.amazon.jsii.Kernel.get(this, "siteVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSiteVersion(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "siteVersion", value);
    }

    /**
     */
    public void setSiteVersion(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "siteVersion", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSortQueryStringForCache() {
        return software.amazon.jsii.Kernel.get(this, "sortQueryStringForCache", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSortQueryStringForCache(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "sortQueryStringForCache", value);
    }

    /**
     */
    public void setSortQueryStringForCache(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "sortQueryStringForCache", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getUserDeviceType() {
        return software.amazon.jsii.Kernel.get(this, "userDeviceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setUserDeviceType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "userDeviceType", value);
    }

    /**
     */
    public void setUserDeviceType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "userDeviceType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getUserGeo() {
        return software.amazon.jsii.Kernel.get(this, "userGeo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setUserGeo(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "userGeo", value);
    }

    /**
     */
    public void setUserGeo(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "userGeo", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getUserLanguage() {
        return software.amazon.jsii.Kernel.get(this, "userLanguage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setUserLanguage(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "userLanguage", value);
    }

    /**
     */
    public void setUserLanguage(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "userLanguage", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.esa.RosCacheRule}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.esa.RosCacheRule> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
         * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.esa.RosCacheRuleProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.esa.RosCacheRuleProps.Builder();
        }

        /**
         * @return {@code this}
         * @param siteId This parameter is required.
         */
        public Builder siteId(final java.lang.Number siteId) {
            this.props.siteId(siteId);
            return this;
        }
        /**
         * @return {@code this}
         * @param siteId This parameter is required.
         */
        public Builder siteId(final com.aliyun.ros.cdk.core.IResolvable siteId) {
            this.props.siteId(siteId);
            return this;
        }

        /**
         * @return {@code this}
         * @param additionalCacheablePorts This parameter is required.
         */
        public Builder additionalCacheablePorts(final java.lang.Number additionalCacheablePorts) {
            this.props.additionalCacheablePorts(additionalCacheablePorts);
            return this;
        }
        /**
         * @return {@code this}
         * @param additionalCacheablePorts This parameter is required.
         */
        public Builder additionalCacheablePorts(final com.aliyun.ros.cdk.core.IResolvable additionalCacheablePorts) {
            this.props.additionalCacheablePorts(additionalCacheablePorts);
            return this;
        }

        /**
         * @return {@code this}
         * @param browserCacheMode This parameter is required.
         */
        public Builder browserCacheMode(final java.lang.String browserCacheMode) {
            this.props.browserCacheMode(browserCacheMode);
            return this;
        }
        /**
         * @return {@code this}
         * @param browserCacheMode This parameter is required.
         */
        public Builder browserCacheMode(final com.aliyun.ros.cdk.core.IResolvable browserCacheMode) {
            this.props.browserCacheMode(browserCacheMode);
            return this;
        }

        /**
         * @return {@code this}
         * @param browserCacheTtl This parameter is required.
         */
        public Builder browserCacheTtl(final java.lang.Number browserCacheTtl) {
            this.props.browserCacheTtl(browserCacheTtl);
            return this;
        }
        /**
         * @return {@code this}
         * @param browserCacheTtl This parameter is required.
         */
        public Builder browserCacheTtl(final com.aliyun.ros.cdk.core.IResolvable browserCacheTtl) {
            this.props.browserCacheTtl(browserCacheTtl);
            return this;
        }

        /**
         * @return {@code this}
         * @param bypassCache This parameter is required.
         */
        public Builder bypassCache(final java.lang.String bypassCache) {
            this.props.bypassCache(bypassCache);
            return this;
        }
        /**
         * @return {@code this}
         * @param bypassCache This parameter is required.
         */
        public Builder bypassCache(final com.aliyun.ros.cdk.core.IResolvable bypassCache) {
            this.props.bypassCache(bypassCache);
            return this;
        }

        /**
         * @return {@code this}
         * @param cacheDeceptionArmor This parameter is required.
         */
        public Builder cacheDeceptionArmor(final java.lang.String cacheDeceptionArmor) {
            this.props.cacheDeceptionArmor(cacheDeceptionArmor);
            return this;
        }
        /**
         * @return {@code this}
         * @param cacheDeceptionArmor This parameter is required.
         */
        public Builder cacheDeceptionArmor(final com.aliyun.ros.cdk.core.IResolvable cacheDeceptionArmor) {
            this.props.cacheDeceptionArmor(cacheDeceptionArmor);
            return this;
        }

        /**
         * @return {@code this}
         * @param cacheReserveEligibility This parameter is required.
         */
        public Builder cacheReserveEligibility(final java.lang.String cacheReserveEligibility) {
            this.props.cacheReserveEligibility(cacheReserveEligibility);
            return this;
        }
        /**
         * @return {@code this}
         * @param cacheReserveEligibility This parameter is required.
         */
        public Builder cacheReserveEligibility(final com.aliyun.ros.cdk.core.IResolvable cacheReserveEligibility) {
            this.props.cacheReserveEligibility(cacheReserveEligibility);
            return this;
        }

        /**
         * @return {@code this}
         * @param checkPresenceCookie This parameter is required.
         */
        public Builder checkPresenceCookie(final java.lang.String checkPresenceCookie) {
            this.props.checkPresenceCookie(checkPresenceCookie);
            return this;
        }
        /**
         * @return {@code this}
         * @param checkPresenceCookie This parameter is required.
         */
        public Builder checkPresenceCookie(final com.aliyun.ros.cdk.core.IResolvable checkPresenceCookie) {
            this.props.checkPresenceCookie(checkPresenceCookie);
            return this;
        }

        /**
         * @return {@code this}
         * @param checkPresenceHeader This parameter is required.
         */
        public Builder checkPresenceHeader(final java.lang.String checkPresenceHeader) {
            this.props.checkPresenceHeader(checkPresenceHeader);
            return this;
        }
        /**
         * @return {@code this}
         * @param checkPresenceHeader This parameter is required.
         */
        public Builder checkPresenceHeader(final com.aliyun.ros.cdk.core.IResolvable checkPresenceHeader) {
            this.props.checkPresenceHeader(checkPresenceHeader);
            return this;
        }

        /**
         * @return {@code this}
         * @param edgeCacheMode This parameter is required.
         */
        public Builder edgeCacheMode(final java.lang.String edgeCacheMode) {
            this.props.edgeCacheMode(edgeCacheMode);
            return this;
        }
        /**
         * @return {@code this}
         * @param edgeCacheMode This parameter is required.
         */
        public Builder edgeCacheMode(final com.aliyun.ros.cdk.core.IResolvable edgeCacheMode) {
            this.props.edgeCacheMode(edgeCacheMode);
            return this;
        }

        /**
         * @return {@code this}
         * @param edgeCacheTtl This parameter is required.
         */
        public Builder edgeCacheTtl(final java.lang.Number edgeCacheTtl) {
            this.props.edgeCacheTtl(edgeCacheTtl);
            return this;
        }
        /**
         * @return {@code this}
         * @param edgeCacheTtl This parameter is required.
         */
        public Builder edgeCacheTtl(final com.aliyun.ros.cdk.core.IResolvable edgeCacheTtl) {
            this.props.edgeCacheTtl(edgeCacheTtl);
            return this;
        }

        /**
         * @return {@code this}
         * @param edgeStatusCodeCacheTtl This parameter is required.
         */
        public Builder edgeStatusCodeCacheTtl(final java.lang.String edgeStatusCodeCacheTtl) {
            this.props.edgeStatusCodeCacheTtl(edgeStatusCodeCacheTtl);
            return this;
        }
        /**
         * @return {@code this}
         * @param edgeStatusCodeCacheTtl This parameter is required.
         */
        public Builder edgeStatusCodeCacheTtl(final com.aliyun.ros.cdk.core.IResolvable edgeStatusCodeCacheTtl) {
            this.props.edgeStatusCodeCacheTtl(edgeStatusCodeCacheTtl);
            return this;
        }

        /**
         * @return {@code this}
         * @param includeCookie This parameter is required.
         */
        public Builder includeCookie(final java.lang.String includeCookie) {
            this.props.includeCookie(includeCookie);
            return this;
        }
        /**
         * @return {@code this}
         * @param includeCookie This parameter is required.
         */
        public Builder includeCookie(final com.aliyun.ros.cdk.core.IResolvable includeCookie) {
            this.props.includeCookie(includeCookie);
            return this;
        }

        /**
         * @return {@code this}
         * @param includeHeader This parameter is required.
         */
        public Builder includeHeader(final java.lang.String includeHeader) {
            this.props.includeHeader(includeHeader);
            return this;
        }
        /**
         * @return {@code this}
         * @param includeHeader This parameter is required.
         */
        public Builder includeHeader(final com.aliyun.ros.cdk.core.IResolvable includeHeader) {
            this.props.includeHeader(includeHeader);
            return this;
        }

        /**
         * @return {@code this}
         * @param queryString This parameter is required.
         */
        public Builder queryString(final java.lang.String queryString) {
            this.props.queryString(queryString);
            return this;
        }
        /**
         * @return {@code this}
         * @param queryString This parameter is required.
         */
        public Builder queryString(final com.aliyun.ros.cdk.core.IResolvable queryString) {
            this.props.queryString(queryString);
            return this;
        }

        /**
         * @return {@code this}
         * @param queryStringMode This parameter is required.
         */
        public Builder queryStringMode(final java.lang.String queryStringMode) {
            this.props.queryStringMode(queryStringMode);
            return this;
        }
        /**
         * @return {@code this}
         * @param queryStringMode This parameter is required.
         */
        public Builder queryStringMode(final com.aliyun.ros.cdk.core.IResolvable queryStringMode) {
            this.props.queryStringMode(queryStringMode);
            return this;
        }

        /**
         * @return {@code this}
         * @param rule This parameter is required.
         */
        public Builder rule(final java.lang.String rule) {
            this.props.rule(rule);
            return this;
        }
        /**
         * @return {@code this}
         * @param rule This parameter is required.
         */
        public Builder rule(final com.aliyun.ros.cdk.core.IResolvable rule) {
            this.props.rule(rule);
            return this;
        }

        /**
         * @return {@code this}
         * @param ruleEnable This parameter is required.
         */
        public Builder ruleEnable(final java.lang.String ruleEnable) {
            this.props.ruleEnable(ruleEnable);
            return this;
        }
        /**
         * @return {@code this}
         * @param ruleEnable This parameter is required.
         */
        public Builder ruleEnable(final com.aliyun.ros.cdk.core.IResolvable ruleEnable) {
            this.props.ruleEnable(ruleEnable);
            return this;
        }

        /**
         * @return {@code this}
         * @param ruleName This parameter is required.
         */
        public Builder ruleName(final java.lang.String ruleName) {
            this.props.ruleName(ruleName);
            return this;
        }
        /**
         * @return {@code this}
         * @param ruleName This parameter is required.
         */
        public Builder ruleName(final com.aliyun.ros.cdk.core.IResolvable ruleName) {
            this.props.ruleName(ruleName);
            return this;
        }

        /**
         * @return {@code this}
         * @param sequence This parameter is required.
         */
        public Builder sequence(final java.lang.Number sequence) {
            this.props.sequence(sequence);
            return this;
        }
        /**
         * @return {@code this}
         * @param sequence This parameter is required.
         */
        public Builder sequence(final com.aliyun.ros.cdk.core.IResolvable sequence) {
            this.props.sequence(sequence);
            return this;
        }

        /**
         * @return {@code this}
         * @param serveStale This parameter is required.
         */
        public Builder serveStale(final java.lang.String serveStale) {
            this.props.serveStale(serveStale);
            return this;
        }
        /**
         * @return {@code this}
         * @param serveStale This parameter is required.
         */
        public Builder serveStale(final com.aliyun.ros.cdk.core.IResolvable serveStale) {
            this.props.serveStale(serveStale);
            return this;
        }

        /**
         * @return {@code this}
         * @param siteVersion This parameter is required.
         */
        public Builder siteVersion(final java.lang.Number siteVersion) {
            this.props.siteVersion(siteVersion);
            return this;
        }
        /**
         * @return {@code this}
         * @param siteVersion This parameter is required.
         */
        public Builder siteVersion(final com.aliyun.ros.cdk.core.IResolvable siteVersion) {
            this.props.siteVersion(siteVersion);
            return this;
        }

        /**
         * @return {@code this}
         * @param sortQueryStringForCache This parameter is required.
         */
        public Builder sortQueryStringForCache(final java.lang.String sortQueryStringForCache) {
            this.props.sortQueryStringForCache(sortQueryStringForCache);
            return this;
        }
        /**
         * @return {@code this}
         * @param sortQueryStringForCache This parameter is required.
         */
        public Builder sortQueryStringForCache(final com.aliyun.ros.cdk.core.IResolvable sortQueryStringForCache) {
            this.props.sortQueryStringForCache(sortQueryStringForCache);
            return this;
        }

        /**
         * @return {@code this}
         * @param userDeviceType This parameter is required.
         */
        public Builder userDeviceType(final java.lang.String userDeviceType) {
            this.props.userDeviceType(userDeviceType);
            return this;
        }
        /**
         * @return {@code this}
         * @param userDeviceType This parameter is required.
         */
        public Builder userDeviceType(final com.aliyun.ros.cdk.core.IResolvable userDeviceType) {
            this.props.userDeviceType(userDeviceType);
            return this;
        }

        /**
         * @return {@code this}
         * @param userGeo This parameter is required.
         */
        public Builder userGeo(final java.lang.String userGeo) {
            this.props.userGeo(userGeo);
            return this;
        }
        /**
         * @return {@code this}
         * @param userGeo This parameter is required.
         */
        public Builder userGeo(final com.aliyun.ros.cdk.core.IResolvable userGeo) {
            this.props.userGeo(userGeo);
            return this;
        }

        /**
         * @return {@code this}
         * @param userLanguage This parameter is required.
         */
        public Builder userLanguage(final java.lang.String userLanguage) {
            this.props.userLanguage(userLanguage);
            return this;
        }
        /**
         * @return {@code this}
         * @param userLanguage This parameter is required.
         */
        public Builder userLanguage(final com.aliyun.ros.cdk.core.IResolvable userLanguage) {
            this.props.userLanguage(userLanguage);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.esa.RosCacheRule}.
         */
        @Override
        public com.aliyun.ros.cdk.esa.RosCacheRule build() {
            return new com.aliyun.ros.cdk.esa.RosCacheRule(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
