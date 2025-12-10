package com.aliyun.ros.cdk.esa;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::ESA::OriginRule</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:56.672Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.RosOriginRule")
public class RosOriginRule extends com.aliyun.ros.cdk.core.RosResource {

    protected RosOriginRule(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosOriginRule(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.esa.RosOriginRule.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosOriginRule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.RosOriginRuleProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrConfigId() {
        return software.amazon.jsii.Kernel.get(this, "attrConfigId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrConfigType() {
        return software.amazon.jsii.Kernel.get(this, "attrConfigType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDnsRecord() {
        return software.amazon.jsii.Kernel.get(this, "attrDnsRecord", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrFollow302Enable() {
        return software.amazon.jsii.Kernel.get(this, "attrFollow302Enable", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrFollow302MaxTries() {
        return software.amazon.jsii.Kernel.get(this, "attrFollow302MaxTries", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrFollow302RetainArgs() {
        return software.amazon.jsii.Kernel.get(this, "attrFollow302RetainArgs", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrFollow302RetainHeader() {
        return software.amazon.jsii.Kernel.get(this, "attrFollow302RetainHeader", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrFollow302TargetHost() {
        return software.amazon.jsii.Kernel.get(this, "attrFollow302TargetHost", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrOriginHost() {
        return software.amazon.jsii.Kernel.get(this, "attrOriginHost", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrOriginHttpPort() {
        return software.amazon.jsii.Kernel.get(this, "attrOriginHttpPort", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrOriginHttpsPort() {
        return software.amazon.jsii.Kernel.get(this, "attrOriginHttpsPort", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrOriginMtls() {
        return software.amazon.jsii.Kernel.get(this, "attrOriginMtls", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrOriginReadTimeout() {
        return software.amazon.jsii.Kernel.get(this, "attrOriginReadTimeout", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrOriginScheme() {
        return software.amazon.jsii.Kernel.get(this, "attrOriginScheme", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrOriginSni() {
        return software.amazon.jsii.Kernel.get(this, "attrOriginSni", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrOriginVerify() {
        return software.amazon.jsii.Kernel.get(this, "attrOriginVerify", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRange() {
        return software.amazon.jsii.Kernel.get(this, "attrRange", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRangeChunkSize() {
        return software.amazon.jsii.Kernel.get(this, "attrRangeChunkSize", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSiteVersion() {
        return software.amazon.jsii.Kernel.get(this, "attrSiteVersion", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getDnsRecord() {
        return software.amazon.jsii.Kernel.get(this, "dnsRecord", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDnsRecord(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "dnsRecord", value);
    }

    /**
     */
    public void setDnsRecord(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dnsRecord", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getFollow302Enable() {
        return software.amazon.jsii.Kernel.get(this, "follow302Enable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setFollow302Enable(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "follow302Enable", value);
    }

    /**
     */
    public void setFollow302Enable(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "follow302Enable", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getFollow302MaxTries() {
        return software.amazon.jsii.Kernel.get(this, "follow302MaxTries", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setFollow302MaxTries(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "follow302MaxTries", value);
    }

    /**
     */
    public void setFollow302MaxTries(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "follow302MaxTries", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getFollow302RetainArgs() {
        return software.amazon.jsii.Kernel.get(this, "follow302RetainArgs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setFollow302RetainArgs(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "follow302RetainArgs", value);
    }

    /**
     */
    public void setFollow302RetainArgs(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "follow302RetainArgs", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getFollow302RetainHeader() {
        return software.amazon.jsii.Kernel.get(this, "follow302RetainHeader", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setFollow302RetainHeader(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "follow302RetainHeader", value);
    }

    /**
     */
    public void setFollow302RetainHeader(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "follow302RetainHeader", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getFollow302TargetHost() {
        return software.amazon.jsii.Kernel.get(this, "follow302TargetHost", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setFollow302TargetHost(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "follow302TargetHost", value);
    }

    /**
     */
    public void setFollow302TargetHost(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "follow302TargetHost", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getOriginHost() {
        return software.amazon.jsii.Kernel.get(this, "originHost", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setOriginHost(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "originHost", value);
    }

    /**
     */
    public void setOriginHost(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "originHost", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getOriginHttpPort() {
        return software.amazon.jsii.Kernel.get(this, "originHttpPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setOriginHttpPort(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "originHttpPort", value);
    }

    /**
     */
    public void setOriginHttpPort(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "originHttpPort", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getOriginHttpsPort() {
        return software.amazon.jsii.Kernel.get(this, "originHttpsPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setOriginHttpsPort(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "originHttpsPort", value);
    }

    /**
     */
    public void setOriginHttpsPort(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "originHttpsPort", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getOriginMtls() {
        return software.amazon.jsii.Kernel.get(this, "originMtls", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setOriginMtls(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "originMtls", value);
    }

    /**
     */
    public void setOriginMtls(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "originMtls", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getOriginReadTimeout() {
        return software.amazon.jsii.Kernel.get(this, "originReadTimeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setOriginReadTimeout(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "originReadTimeout", value);
    }

    /**
     */
    public void setOriginReadTimeout(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "originReadTimeout", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getOriginScheme() {
        return software.amazon.jsii.Kernel.get(this, "originScheme", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setOriginScheme(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "originScheme", value);
    }

    /**
     */
    public void setOriginScheme(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "originScheme", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getOriginSni() {
        return software.amazon.jsii.Kernel.get(this, "originSni", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setOriginSni(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "originSni", value);
    }

    /**
     */
    public void setOriginSni(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "originSni", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getOriginVerify() {
        return software.amazon.jsii.Kernel.get(this, "originVerify", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setOriginVerify(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "originVerify", value);
    }

    /**
     */
    public void setOriginVerify(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "originVerify", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRange() {
        return software.amazon.jsii.Kernel.get(this, "range", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRange(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "range", value);
    }

    /**
     */
    public void setRange(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "range", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRangeChunkSize() {
        return software.amazon.jsii.Kernel.get(this, "rangeChunkSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRangeChunkSize(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "rangeChunkSize", value);
    }

    /**
     */
    public void setRangeChunkSize(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "rangeChunkSize", value);
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
     * A fluent builder for {@link com.aliyun.ros.cdk.esa.RosOriginRule}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.esa.RosOriginRule> {
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
        private final com.aliyun.ros.cdk.esa.RosOriginRuleProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.esa.RosOriginRuleProps.Builder();
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
         * @param dnsRecord This parameter is required.
         */
        public Builder dnsRecord(final java.lang.String dnsRecord) {
            this.props.dnsRecord(dnsRecord);
            return this;
        }
        /**
         * @return {@code this}
         * @param dnsRecord This parameter is required.
         */
        public Builder dnsRecord(final com.aliyun.ros.cdk.core.IResolvable dnsRecord) {
            this.props.dnsRecord(dnsRecord);
            return this;
        }

        /**
         * @return {@code this}
         * @param follow302Enable This parameter is required.
         */
        public Builder follow302Enable(final java.lang.String follow302Enable) {
            this.props.follow302Enable(follow302Enable);
            return this;
        }
        /**
         * @return {@code this}
         * @param follow302Enable This parameter is required.
         */
        public Builder follow302Enable(final com.aliyun.ros.cdk.core.IResolvable follow302Enable) {
            this.props.follow302Enable(follow302Enable);
            return this;
        }

        /**
         * @return {@code this}
         * @param follow302MaxTries This parameter is required.
         */
        public Builder follow302MaxTries(final java.lang.Number follow302MaxTries) {
            this.props.follow302MaxTries(follow302MaxTries);
            return this;
        }
        /**
         * @return {@code this}
         * @param follow302MaxTries This parameter is required.
         */
        public Builder follow302MaxTries(final com.aliyun.ros.cdk.core.IResolvable follow302MaxTries) {
            this.props.follow302MaxTries(follow302MaxTries);
            return this;
        }

        /**
         * @return {@code this}
         * @param follow302RetainArgs This parameter is required.
         */
        public Builder follow302RetainArgs(final java.lang.String follow302RetainArgs) {
            this.props.follow302RetainArgs(follow302RetainArgs);
            return this;
        }
        /**
         * @return {@code this}
         * @param follow302RetainArgs This parameter is required.
         */
        public Builder follow302RetainArgs(final com.aliyun.ros.cdk.core.IResolvable follow302RetainArgs) {
            this.props.follow302RetainArgs(follow302RetainArgs);
            return this;
        }

        /**
         * @return {@code this}
         * @param follow302RetainHeader This parameter is required.
         */
        public Builder follow302RetainHeader(final java.lang.String follow302RetainHeader) {
            this.props.follow302RetainHeader(follow302RetainHeader);
            return this;
        }
        /**
         * @return {@code this}
         * @param follow302RetainHeader This parameter is required.
         */
        public Builder follow302RetainHeader(final com.aliyun.ros.cdk.core.IResolvable follow302RetainHeader) {
            this.props.follow302RetainHeader(follow302RetainHeader);
            return this;
        }

        /**
         * @return {@code this}
         * @param follow302TargetHost This parameter is required.
         */
        public Builder follow302TargetHost(final java.lang.String follow302TargetHost) {
            this.props.follow302TargetHost(follow302TargetHost);
            return this;
        }
        /**
         * @return {@code this}
         * @param follow302TargetHost This parameter is required.
         */
        public Builder follow302TargetHost(final com.aliyun.ros.cdk.core.IResolvable follow302TargetHost) {
            this.props.follow302TargetHost(follow302TargetHost);
            return this;
        }

        /**
         * @return {@code this}
         * @param originHost This parameter is required.
         */
        public Builder originHost(final java.lang.String originHost) {
            this.props.originHost(originHost);
            return this;
        }
        /**
         * @return {@code this}
         * @param originHost This parameter is required.
         */
        public Builder originHost(final com.aliyun.ros.cdk.core.IResolvable originHost) {
            this.props.originHost(originHost);
            return this;
        }

        /**
         * @return {@code this}
         * @param originHttpPort This parameter is required.
         */
        public Builder originHttpPort(final java.lang.Number originHttpPort) {
            this.props.originHttpPort(originHttpPort);
            return this;
        }
        /**
         * @return {@code this}
         * @param originHttpPort This parameter is required.
         */
        public Builder originHttpPort(final com.aliyun.ros.cdk.core.IResolvable originHttpPort) {
            this.props.originHttpPort(originHttpPort);
            return this;
        }

        /**
         * @return {@code this}
         * @param originHttpsPort This parameter is required.
         */
        public Builder originHttpsPort(final java.lang.Number originHttpsPort) {
            this.props.originHttpsPort(originHttpsPort);
            return this;
        }
        /**
         * @return {@code this}
         * @param originHttpsPort This parameter is required.
         */
        public Builder originHttpsPort(final com.aliyun.ros.cdk.core.IResolvable originHttpsPort) {
            this.props.originHttpsPort(originHttpsPort);
            return this;
        }

        /**
         * @return {@code this}
         * @param originMtls This parameter is required.
         */
        public Builder originMtls(final java.lang.String originMtls) {
            this.props.originMtls(originMtls);
            return this;
        }
        /**
         * @return {@code this}
         * @param originMtls This parameter is required.
         */
        public Builder originMtls(final com.aliyun.ros.cdk.core.IResolvable originMtls) {
            this.props.originMtls(originMtls);
            return this;
        }

        /**
         * @return {@code this}
         * @param originReadTimeout This parameter is required.
         */
        public Builder originReadTimeout(final java.lang.Number originReadTimeout) {
            this.props.originReadTimeout(originReadTimeout);
            return this;
        }
        /**
         * @return {@code this}
         * @param originReadTimeout This parameter is required.
         */
        public Builder originReadTimeout(final com.aliyun.ros.cdk.core.IResolvable originReadTimeout) {
            this.props.originReadTimeout(originReadTimeout);
            return this;
        }

        /**
         * @return {@code this}
         * @param originScheme This parameter is required.
         */
        public Builder originScheme(final java.lang.String originScheme) {
            this.props.originScheme(originScheme);
            return this;
        }
        /**
         * @return {@code this}
         * @param originScheme This parameter is required.
         */
        public Builder originScheme(final com.aliyun.ros.cdk.core.IResolvable originScheme) {
            this.props.originScheme(originScheme);
            return this;
        }

        /**
         * @return {@code this}
         * @param originSni This parameter is required.
         */
        public Builder originSni(final java.lang.String originSni) {
            this.props.originSni(originSni);
            return this;
        }
        /**
         * @return {@code this}
         * @param originSni This parameter is required.
         */
        public Builder originSni(final com.aliyun.ros.cdk.core.IResolvable originSni) {
            this.props.originSni(originSni);
            return this;
        }

        /**
         * @return {@code this}
         * @param originVerify This parameter is required.
         */
        public Builder originVerify(final java.lang.String originVerify) {
            this.props.originVerify(originVerify);
            return this;
        }
        /**
         * @return {@code this}
         * @param originVerify This parameter is required.
         */
        public Builder originVerify(final com.aliyun.ros.cdk.core.IResolvable originVerify) {
            this.props.originVerify(originVerify);
            return this;
        }

        /**
         * @return {@code this}
         * @param range This parameter is required.
         */
        public Builder range(final java.lang.String range) {
            this.props.range(range);
            return this;
        }
        /**
         * @return {@code this}
         * @param range This parameter is required.
         */
        public Builder range(final com.aliyun.ros.cdk.core.IResolvable range) {
            this.props.range(range);
            return this;
        }

        /**
         * @return {@code this}
         * @param rangeChunkSize This parameter is required.
         */
        public Builder rangeChunkSize(final java.lang.String rangeChunkSize) {
            this.props.rangeChunkSize(rangeChunkSize);
            return this;
        }
        /**
         * @return {@code this}
         * @param rangeChunkSize This parameter is required.
         */
        public Builder rangeChunkSize(final com.aliyun.ros.cdk.core.IResolvable rangeChunkSize) {
            this.props.rangeChunkSize(rangeChunkSize);
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
         * @return a newly built instance of {@link com.aliyun.ros.cdk.esa.RosOriginRule}.
         */
        @Override
        public com.aliyun.ros.cdk.esa.RosOriginRule build() {
            return new com.aliyun.ros.cdk.esa.RosOriginRule(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
