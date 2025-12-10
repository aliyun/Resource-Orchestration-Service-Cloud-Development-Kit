package com.aliyun.ros.cdk.esa;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::ESA::HttpsApplicationConfiguration</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:56.637Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.RosHttpsApplicationConfiguration")
public class RosHttpsApplicationConfiguration extends com.aliyun.ros.cdk.core.RosResource {

    protected RosHttpsApplicationConfiguration(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosHttpsApplicationConfiguration(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.esa.RosHttpsApplicationConfiguration.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosHttpsApplicationConfiguration(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.RosHttpsApplicationConfigurationProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAltSvc() {
        return software.amazon.jsii.Kernel.get(this, "attrAltSvc", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAltSvcClear() {
        return software.amazon.jsii.Kernel.get(this, "attrAltSvcClear", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAltSvcMa() {
        return software.amazon.jsii.Kernel.get(this, "attrAltSvcMa", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAltSvcPersist() {
        return software.amazon.jsii.Kernel.get(this, "attrAltSvcPersist", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrHsts() {
        return software.amazon.jsii.Kernel.get(this, "attrHsts", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrHstsIncludeSubdomains() {
        return software.amazon.jsii.Kernel.get(this, "attrHstsIncludeSubdomains", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrHstsMaxAge() {
        return software.amazon.jsii.Kernel.get(this, "attrHstsMaxAge", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrHstsPreload() {
        return software.amazon.jsii.Kernel.get(this, "attrHstsPreload", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrHttpsForce() {
        return software.amazon.jsii.Kernel.get(this, "attrHttpsForce", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrHttpsForceCode() {
        return software.amazon.jsii.Kernel.get(this, "attrHttpsForceCode", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrHttpsNoSniDeny() {
        return software.amazon.jsii.Kernel.get(this, "attrHttpsNoSniDeny", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrHttpsSniVerify() {
        return software.amazon.jsii.Kernel.get(this, "attrHttpsSniVerify", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrHttpsSniWhitelist() {
        return software.amazon.jsii.Kernel.get(this, "attrHttpsSniWhitelist", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getAltSvc() {
        return software.amazon.jsii.Kernel.get(this, "altSvc", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAltSvc(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "altSvc", value);
    }

    /**
     */
    public void setAltSvc(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "altSvc", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAltSvcClear() {
        return software.amazon.jsii.Kernel.get(this, "altSvcClear", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAltSvcClear(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "altSvcClear", value);
    }

    /**
     */
    public void setAltSvcClear(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "altSvcClear", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAltSvcMa() {
        return software.amazon.jsii.Kernel.get(this, "altSvcMa", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAltSvcMa(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "altSvcMa", value);
    }

    /**
     */
    public void setAltSvcMa(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "altSvcMa", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAltSvcPersist() {
        return software.amazon.jsii.Kernel.get(this, "altSvcPersist", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAltSvcPersist(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "altSvcPersist", value);
    }

    /**
     */
    public void setAltSvcPersist(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "altSvcPersist", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getHsts() {
        return software.amazon.jsii.Kernel.get(this, "hsts", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setHsts(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "hsts", value);
    }

    /**
     */
    public void setHsts(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "hsts", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getHstsIncludeSubdomains() {
        return software.amazon.jsii.Kernel.get(this, "hstsIncludeSubdomains", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setHstsIncludeSubdomains(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "hstsIncludeSubdomains", value);
    }

    /**
     */
    public void setHstsIncludeSubdomains(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "hstsIncludeSubdomains", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getHstsMaxAge() {
        return software.amazon.jsii.Kernel.get(this, "hstsMaxAge", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setHstsMaxAge(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "hstsMaxAge", value);
    }

    /**
     */
    public void setHstsMaxAge(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "hstsMaxAge", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getHstsPreload() {
        return software.amazon.jsii.Kernel.get(this, "hstsPreload", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setHstsPreload(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "hstsPreload", value);
    }

    /**
     */
    public void setHstsPreload(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "hstsPreload", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getHttpsForce() {
        return software.amazon.jsii.Kernel.get(this, "httpsForce", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setHttpsForce(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "httpsForce", value);
    }

    /**
     */
    public void setHttpsForce(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "httpsForce", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getHttpsForceCode() {
        return software.amazon.jsii.Kernel.get(this, "httpsForceCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setHttpsForceCode(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "httpsForceCode", value);
    }

    /**
     */
    public void setHttpsForceCode(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "httpsForceCode", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getHttpsNoSniDeny() {
        return software.amazon.jsii.Kernel.get(this, "httpsNoSniDeny", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setHttpsNoSniDeny(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "httpsNoSniDeny", value);
    }

    /**
     */
    public void setHttpsNoSniDeny(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "httpsNoSniDeny", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getHttpsSniVerify() {
        return software.amazon.jsii.Kernel.get(this, "httpsSniVerify", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setHttpsSniVerify(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "httpsSniVerify", value);
    }

    /**
     */
    public void setHttpsSniVerify(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "httpsSniVerify", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getHttpsSniWhitelist() {
        return software.amazon.jsii.Kernel.get(this, "httpsSniWhitelist", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setHttpsSniWhitelist(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "httpsSniWhitelist", value);
    }

    /**
     */
    public void setHttpsSniWhitelist(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "httpsSniWhitelist", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPaymentType() {
        return software.amazon.jsii.Kernel.get(this, "paymentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPaymentType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "paymentType", value);
    }

    /**
     */
    public void setPaymentType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "paymentType", value);
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
     * A fluent builder for {@link com.aliyun.ros.cdk.esa.RosHttpsApplicationConfiguration}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.esa.RosHttpsApplicationConfiguration> {
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
        private final com.aliyun.ros.cdk.esa.RosHttpsApplicationConfigurationProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.esa.RosHttpsApplicationConfigurationProps.Builder();
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
         * @param altSvc This parameter is required.
         */
        public Builder altSvc(final java.lang.String altSvc) {
            this.props.altSvc(altSvc);
            return this;
        }
        /**
         * @return {@code this}
         * @param altSvc This parameter is required.
         */
        public Builder altSvc(final com.aliyun.ros.cdk.core.IResolvable altSvc) {
            this.props.altSvc(altSvc);
            return this;
        }

        /**
         * @return {@code this}
         * @param altSvcClear This parameter is required.
         */
        public Builder altSvcClear(final java.lang.String altSvcClear) {
            this.props.altSvcClear(altSvcClear);
            return this;
        }
        /**
         * @return {@code this}
         * @param altSvcClear This parameter is required.
         */
        public Builder altSvcClear(final com.aliyun.ros.cdk.core.IResolvable altSvcClear) {
            this.props.altSvcClear(altSvcClear);
            return this;
        }

        /**
         * @return {@code this}
         * @param altSvcMa This parameter is required.
         */
        public Builder altSvcMa(final java.lang.String altSvcMa) {
            this.props.altSvcMa(altSvcMa);
            return this;
        }
        /**
         * @return {@code this}
         * @param altSvcMa This parameter is required.
         */
        public Builder altSvcMa(final com.aliyun.ros.cdk.core.IResolvable altSvcMa) {
            this.props.altSvcMa(altSvcMa);
            return this;
        }

        /**
         * @return {@code this}
         * @param altSvcPersist This parameter is required.
         */
        public Builder altSvcPersist(final java.lang.String altSvcPersist) {
            this.props.altSvcPersist(altSvcPersist);
            return this;
        }
        /**
         * @return {@code this}
         * @param altSvcPersist This parameter is required.
         */
        public Builder altSvcPersist(final com.aliyun.ros.cdk.core.IResolvable altSvcPersist) {
            this.props.altSvcPersist(altSvcPersist);
            return this;
        }

        /**
         * @return {@code this}
         * @param hsts This parameter is required.
         */
        public Builder hsts(final java.lang.String hsts) {
            this.props.hsts(hsts);
            return this;
        }
        /**
         * @return {@code this}
         * @param hsts This parameter is required.
         */
        public Builder hsts(final com.aliyun.ros.cdk.core.IResolvable hsts) {
            this.props.hsts(hsts);
            return this;
        }

        /**
         * @return {@code this}
         * @param hstsIncludeSubdomains This parameter is required.
         */
        public Builder hstsIncludeSubdomains(final java.lang.String hstsIncludeSubdomains) {
            this.props.hstsIncludeSubdomains(hstsIncludeSubdomains);
            return this;
        }
        /**
         * @return {@code this}
         * @param hstsIncludeSubdomains This parameter is required.
         */
        public Builder hstsIncludeSubdomains(final com.aliyun.ros.cdk.core.IResolvable hstsIncludeSubdomains) {
            this.props.hstsIncludeSubdomains(hstsIncludeSubdomains);
            return this;
        }

        /**
         * @return {@code this}
         * @param hstsMaxAge This parameter is required.
         */
        public Builder hstsMaxAge(final java.lang.String hstsMaxAge) {
            this.props.hstsMaxAge(hstsMaxAge);
            return this;
        }
        /**
         * @return {@code this}
         * @param hstsMaxAge This parameter is required.
         */
        public Builder hstsMaxAge(final com.aliyun.ros.cdk.core.IResolvable hstsMaxAge) {
            this.props.hstsMaxAge(hstsMaxAge);
            return this;
        }

        /**
         * @return {@code this}
         * @param hstsPreload This parameter is required.
         */
        public Builder hstsPreload(final java.lang.String hstsPreload) {
            this.props.hstsPreload(hstsPreload);
            return this;
        }
        /**
         * @return {@code this}
         * @param hstsPreload This parameter is required.
         */
        public Builder hstsPreload(final com.aliyun.ros.cdk.core.IResolvable hstsPreload) {
            this.props.hstsPreload(hstsPreload);
            return this;
        }

        /**
         * @return {@code this}
         * @param httpsForce This parameter is required.
         */
        public Builder httpsForce(final java.lang.String httpsForce) {
            this.props.httpsForce(httpsForce);
            return this;
        }
        /**
         * @return {@code this}
         * @param httpsForce This parameter is required.
         */
        public Builder httpsForce(final com.aliyun.ros.cdk.core.IResolvable httpsForce) {
            this.props.httpsForce(httpsForce);
            return this;
        }

        /**
         * @return {@code this}
         * @param httpsForceCode This parameter is required.
         */
        public Builder httpsForceCode(final java.lang.String httpsForceCode) {
            this.props.httpsForceCode(httpsForceCode);
            return this;
        }
        /**
         * @return {@code this}
         * @param httpsForceCode This parameter is required.
         */
        public Builder httpsForceCode(final com.aliyun.ros.cdk.core.IResolvable httpsForceCode) {
            this.props.httpsForceCode(httpsForceCode);
            return this;
        }

        /**
         * @return {@code this}
         * @param httpsNoSniDeny This parameter is required.
         */
        public Builder httpsNoSniDeny(final java.lang.String httpsNoSniDeny) {
            this.props.httpsNoSniDeny(httpsNoSniDeny);
            return this;
        }
        /**
         * @return {@code this}
         * @param httpsNoSniDeny This parameter is required.
         */
        public Builder httpsNoSniDeny(final com.aliyun.ros.cdk.core.IResolvable httpsNoSniDeny) {
            this.props.httpsNoSniDeny(httpsNoSniDeny);
            return this;
        }

        /**
         * @return {@code this}
         * @param httpsSniVerify This parameter is required.
         */
        public Builder httpsSniVerify(final java.lang.String httpsSniVerify) {
            this.props.httpsSniVerify(httpsSniVerify);
            return this;
        }
        /**
         * @return {@code this}
         * @param httpsSniVerify This parameter is required.
         */
        public Builder httpsSniVerify(final com.aliyun.ros.cdk.core.IResolvable httpsSniVerify) {
            this.props.httpsSniVerify(httpsSniVerify);
            return this;
        }

        /**
         * @return {@code this}
         * @param httpsSniWhitelist This parameter is required.
         */
        public Builder httpsSniWhitelist(final java.lang.String httpsSniWhitelist) {
            this.props.httpsSniWhitelist(httpsSniWhitelist);
            return this;
        }
        /**
         * @return {@code this}
         * @param httpsSniWhitelist This parameter is required.
         */
        public Builder httpsSniWhitelist(final com.aliyun.ros.cdk.core.IResolvable httpsSniWhitelist) {
            this.props.httpsSniWhitelist(httpsSniWhitelist);
            return this;
        }

        /**
         * @return {@code this}
         * @param paymentType This parameter is required.
         */
        public Builder paymentType(final java.lang.String paymentType) {
            this.props.paymentType(paymentType);
            return this;
        }
        /**
         * @return {@code this}
         * @param paymentType This parameter is required.
         */
        public Builder paymentType(final com.aliyun.ros.cdk.core.IResolvable paymentType) {
            this.props.paymentType(paymentType);
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
         * @return a newly built instance of {@link com.aliyun.ros.cdk.esa.RosHttpsApplicationConfiguration}.
         */
        @Override
        public com.aliyun.ros.cdk.esa.RosHttpsApplicationConfiguration build() {
            return new com.aliyun.ros.cdk.esa.RosHttpsApplicationConfiguration(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
