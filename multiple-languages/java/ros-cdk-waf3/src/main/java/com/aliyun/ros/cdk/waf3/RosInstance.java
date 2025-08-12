package com.aliyun.ros.cdk.waf3;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::WAF3::Instance</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:51.780Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.waf3.$Module.class, fqn = "@alicloud/ros-cdk-waf3.RosInstance")
public class RosInstance extends com.aliyun.ros.cdk.core.RosResource {

    protected RosInstance(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosInstance(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.waf3.RosInstance.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosInstance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.waf3.RosInstanceProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getPayType() {
        return software.amazon.jsii.Kernel.get(this, "payType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPayType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "payType", java.util.Objects.requireNonNull(value, "payType is required"));
    }

    /**
     */
    public void setPayType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "payType", java.util.Objects.requireNonNull(value, "payType is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getRegion() {
        return software.amazon.jsii.Kernel.get(this, "region", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRegion(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "region", java.util.Objects.requireNonNull(value, "region is required"));
    }

    /**
     */
    public void setRegion(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "region", java.util.Objects.requireNonNull(value, "region is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAdditionalProtectionNodes() {
        return software.amazon.jsii.Kernel.get(this, "additionalProtectionNodes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAdditionalProtectionNodes(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "additionalProtectionNodes", value);
    }

    /**
     */
    public void setAdditionalProtectionNodes(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "additionalProtectionNodes", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getApiSecurity() {
        return software.amazon.jsii.Kernel.get(this, "apiSecurity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setApiSecurity(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "apiSecurity", value);
    }

    /**
     */
    public void setApiSecurity(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "apiSecurity", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAutoPay() {
        return software.amazon.jsii.Kernel.get(this, "autoPay", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAutoPay(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "autoPay", value);
    }

    /**
     */
    public void setAutoPay(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "autoPay", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenew() {
        return software.amazon.jsii.Kernel.get(this, "autoRenew", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAutoRenew(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "autoRenew", value);
    }

    /**
     */
    public void setAutoRenew(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "autoRenew", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getBotAppProtection() {
        return software.amazon.jsii.Kernel.get(this, "botAppProtection", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setBotAppProtection(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "botAppProtection", value);
    }

    /**
     */
    public void setBotAppProtection(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "botAppProtection", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getBotWebProtection() {
        return software.amazon.jsii.Kernel.get(this, "botWebProtection", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setBotWebProtection(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "botWebProtection", value);
    }

    /**
     */
    public void setBotWebProtection(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "botWebProtection", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDomainsExtension() {
        return software.amazon.jsii.Kernel.get(this, "domainsExtension", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDomainsExtension(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "domainsExtension", value);
    }

    /**
     */
    public void setDomainsExtension(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "domainsExtension", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getElasticQps() {
        return software.amazon.jsii.Kernel.get(this, "elasticQps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setElasticQps(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "elasticQps", value);
    }

    /**
     */
    public void setElasticQps(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "elasticQps", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getExclusiveIpAddress() {
        return software.amazon.jsii.Kernel.get(this, "exclusiveIpAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setExclusiveIpAddress(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "exclusiveIpAddress", value);
    }

    /**
     */
    public void setExclusiveIpAddress(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "exclusiveIpAddress", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getFraudDetection() {
        return software.amazon.jsii.Kernel.get(this, "fraudDetection", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setFraudDetection(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "fraudDetection", value);
    }

    /**
     */
    public void setFraudDetection(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "fraudDetection", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getIgnoreExisting() {
        return software.amazon.jsii.Kernel.get(this, "ignoreExisting", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setIgnoreExisting(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "ignoreExisting", value);
    }

    /**
     */
    public void setIgnoreExisting(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ignoreExisting", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getIntelligentLoadBalancing() {
        return software.amazon.jsii.Kernel.get(this, "intelligentLoadBalancing", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setIntelligentLoadBalancing(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "intelligentLoadBalancing", value);
    }

    /**
     */
    public void setIntelligentLoadBalancing(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "intelligentLoadBalancing", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getLogService() {
        return software.amazon.jsii.Kernel.get(this, "logService", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLogService(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "logService", value);
    }

    /**
     */
    public void setLogService(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "logService", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getLogStorage() {
        return software.amazon.jsii.Kernel.get(this, "logStorage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLogStorage(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "logStorage", value);
    }

    /**
     */
    public void setLogStorage(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "logStorage", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPeriod() {
        return software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPeriod(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "period", value);
    }

    /**
     */
    public void setPeriod(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "period", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPeriodUnit() {
        return software.amazon.jsii.Kernel.get(this, "periodUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPeriodUnit(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "periodUnit", value);
    }

    /**
     */
    public void setPeriodUnit(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "periodUnit", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getQpsExtension() {
        return software.amazon.jsii.Kernel.get(this, "qpsExtension", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setQpsExtension(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "qpsExtension", value);
    }

    /**
     */
    public void setQpsExtension(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "qpsExtension", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTrafficBillingProtectionThreshold() {
        return software.amazon.jsii.Kernel.get(this, "trafficBillingProtectionThreshold", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTrafficBillingProtectionThreshold(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "trafficBillingProtectionThreshold", value);
    }

    /**
     */
    public void setTrafficBillingProtectionThreshold(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "trafficBillingProtectionThreshold", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getWafVersion() {
        return software.amazon.jsii.Kernel.get(this, "wafVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setWafVersion(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "wafVersion", value);
    }

    /**
     */
    public void setWafVersion(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "wafVersion", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.waf3.RosInstance}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.waf3.RosInstance> {
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
        private final com.aliyun.ros.cdk.waf3.RosInstanceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.waf3.RosInstanceProps.Builder();
        }

        /**
         * @return {@code this}
         * @param payType This parameter is required.
         */
        public Builder payType(final java.lang.String payType) {
            this.props.payType(payType);
            return this;
        }
        /**
         * @return {@code this}
         * @param payType This parameter is required.
         */
        public Builder payType(final com.aliyun.ros.cdk.core.IResolvable payType) {
            this.props.payType(payType);
            return this;
        }

        /**
         * @return {@code this}
         * @param region This parameter is required.
         */
        public Builder region(final java.lang.String region) {
            this.props.region(region);
            return this;
        }
        /**
         * @return {@code this}
         * @param region This parameter is required.
         */
        public Builder region(final com.aliyun.ros.cdk.core.IResolvable region) {
            this.props.region(region);
            return this;
        }

        /**
         * @return {@code this}
         * @param additionalProtectionNodes This parameter is required.
         */
        public Builder additionalProtectionNodes(final java.lang.Number additionalProtectionNodes) {
            this.props.additionalProtectionNodes(additionalProtectionNodes);
            return this;
        }
        /**
         * @return {@code this}
         * @param additionalProtectionNodes This parameter is required.
         */
        public Builder additionalProtectionNodes(final com.aliyun.ros.cdk.core.IResolvable additionalProtectionNodes) {
            this.props.additionalProtectionNodes(additionalProtectionNodes);
            return this;
        }

        /**
         * @return {@code this}
         * @param apiSecurity This parameter is required.
         */
        public Builder apiSecurity(final java.lang.Boolean apiSecurity) {
            this.props.apiSecurity(apiSecurity);
            return this;
        }
        /**
         * @return {@code this}
         * @param apiSecurity This parameter is required.
         */
        public Builder apiSecurity(final com.aliyun.ros.cdk.core.IResolvable apiSecurity) {
            this.props.apiSecurity(apiSecurity);
            return this;
        }

        /**
         * @return {@code this}
         * @param autoPay This parameter is required.
         */
        public Builder autoPay(final java.lang.Boolean autoPay) {
            this.props.autoPay(autoPay);
            return this;
        }
        /**
         * @return {@code this}
         * @param autoPay This parameter is required.
         */
        public Builder autoPay(final com.aliyun.ros.cdk.core.IResolvable autoPay) {
            this.props.autoPay(autoPay);
            return this;
        }

        /**
         * @return {@code this}
         * @param autoRenew This parameter is required.
         */
        public Builder autoRenew(final java.lang.Boolean autoRenew) {
            this.props.autoRenew(autoRenew);
            return this;
        }
        /**
         * @return {@code this}
         * @param autoRenew This parameter is required.
         */
        public Builder autoRenew(final com.aliyun.ros.cdk.core.IResolvable autoRenew) {
            this.props.autoRenew(autoRenew);
            return this;
        }

        /**
         * @return {@code this}
         * @param botAppProtection This parameter is required.
         */
        public Builder botAppProtection(final java.lang.Boolean botAppProtection) {
            this.props.botAppProtection(botAppProtection);
            return this;
        }
        /**
         * @return {@code this}
         * @param botAppProtection This parameter is required.
         */
        public Builder botAppProtection(final com.aliyun.ros.cdk.core.IResolvable botAppProtection) {
            this.props.botAppProtection(botAppProtection);
            return this;
        }

        /**
         * @return {@code this}
         * @param botWebProtection This parameter is required.
         */
        public Builder botWebProtection(final java.lang.Boolean botWebProtection) {
            this.props.botWebProtection(botWebProtection);
            return this;
        }
        /**
         * @return {@code this}
         * @param botWebProtection This parameter is required.
         */
        public Builder botWebProtection(final com.aliyun.ros.cdk.core.IResolvable botWebProtection) {
            this.props.botWebProtection(botWebProtection);
            return this;
        }

        /**
         * @return {@code this}
         * @param domainsExtension This parameter is required.
         */
        public Builder domainsExtension(final java.lang.Number domainsExtension) {
            this.props.domainsExtension(domainsExtension);
            return this;
        }
        /**
         * @return {@code this}
         * @param domainsExtension This parameter is required.
         */
        public Builder domainsExtension(final com.aliyun.ros.cdk.core.IResolvable domainsExtension) {
            this.props.domainsExtension(domainsExtension);
            return this;
        }

        /**
         * @return {@code this}
         * @param elasticQps This parameter is required.
         */
        public Builder elasticQps(final java.lang.Number elasticQps) {
            this.props.elasticQps(elasticQps);
            return this;
        }
        /**
         * @return {@code this}
         * @param elasticQps This parameter is required.
         */
        public Builder elasticQps(final com.aliyun.ros.cdk.core.IResolvable elasticQps) {
            this.props.elasticQps(elasticQps);
            return this;
        }

        /**
         * @return {@code this}
         * @param exclusiveIpAddress This parameter is required.
         */
        public Builder exclusiveIpAddress(final java.lang.Number exclusiveIpAddress) {
            this.props.exclusiveIpAddress(exclusiveIpAddress);
            return this;
        }
        /**
         * @return {@code this}
         * @param exclusiveIpAddress This parameter is required.
         */
        public Builder exclusiveIpAddress(final com.aliyun.ros.cdk.core.IResolvable exclusiveIpAddress) {
            this.props.exclusiveIpAddress(exclusiveIpAddress);
            return this;
        }

        /**
         * @return {@code this}
         * @param fraudDetection This parameter is required.
         */
        public Builder fraudDetection(final java.lang.Boolean fraudDetection) {
            this.props.fraudDetection(fraudDetection);
            return this;
        }
        /**
         * @return {@code this}
         * @param fraudDetection This parameter is required.
         */
        public Builder fraudDetection(final com.aliyun.ros.cdk.core.IResolvable fraudDetection) {
            this.props.fraudDetection(fraudDetection);
            return this;
        }

        /**
         * @return {@code this}
         * @param ignoreExisting This parameter is required.
         */
        public Builder ignoreExisting(final java.lang.Boolean ignoreExisting) {
            this.props.ignoreExisting(ignoreExisting);
            return this;
        }
        /**
         * @return {@code this}
         * @param ignoreExisting This parameter is required.
         */
        public Builder ignoreExisting(final com.aliyun.ros.cdk.core.IResolvable ignoreExisting) {
            this.props.ignoreExisting(ignoreExisting);
            return this;
        }

        /**
         * @return {@code this}
         * @param intelligentLoadBalancing This parameter is required.
         */
        public Builder intelligentLoadBalancing(final java.lang.Boolean intelligentLoadBalancing) {
            this.props.intelligentLoadBalancing(intelligentLoadBalancing);
            return this;
        }
        /**
         * @return {@code this}
         * @param intelligentLoadBalancing This parameter is required.
         */
        public Builder intelligentLoadBalancing(final com.aliyun.ros.cdk.core.IResolvable intelligentLoadBalancing) {
            this.props.intelligentLoadBalancing(intelligentLoadBalancing);
            return this;
        }

        /**
         * @return {@code this}
         * @param logService This parameter is required.
         */
        public Builder logService(final java.lang.Boolean logService) {
            this.props.logService(logService);
            return this;
        }
        /**
         * @return {@code this}
         * @param logService This parameter is required.
         */
        public Builder logService(final com.aliyun.ros.cdk.core.IResolvable logService) {
            this.props.logService(logService);
            return this;
        }

        /**
         * @return {@code this}
         * @param logStorage This parameter is required.
         */
        public Builder logStorage(final java.lang.Number logStorage) {
            this.props.logStorage(logStorage);
            return this;
        }
        /**
         * @return {@code this}
         * @param logStorage This parameter is required.
         */
        public Builder logStorage(final com.aliyun.ros.cdk.core.IResolvable logStorage) {
            this.props.logStorage(logStorage);
            return this;
        }

        /**
         * @return {@code this}
         * @param period This parameter is required.
         */
        public Builder period(final java.lang.Number period) {
            this.props.period(period);
            return this;
        }
        /**
         * @return {@code this}
         * @param period This parameter is required.
         */
        public Builder period(final com.aliyun.ros.cdk.core.IResolvable period) {
            this.props.period(period);
            return this;
        }

        /**
         * @return {@code this}
         * @param periodUnit This parameter is required.
         */
        public Builder periodUnit(final java.lang.String periodUnit) {
            this.props.periodUnit(periodUnit);
            return this;
        }
        /**
         * @return {@code this}
         * @param periodUnit This parameter is required.
         */
        public Builder periodUnit(final com.aliyun.ros.cdk.core.IResolvable periodUnit) {
            this.props.periodUnit(periodUnit);
            return this;
        }

        /**
         * @return {@code this}
         * @param qpsExtension This parameter is required.
         */
        public Builder qpsExtension(final java.lang.Number qpsExtension) {
            this.props.qpsExtension(qpsExtension);
            return this;
        }
        /**
         * @return {@code this}
         * @param qpsExtension This parameter is required.
         */
        public Builder qpsExtension(final com.aliyun.ros.cdk.core.IResolvable qpsExtension) {
            this.props.qpsExtension(qpsExtension);
            return this;
        }

        /**
         * @return {@code this}
         * @param trafficBillingProtectionThreshold This parameter is required.
         */
        public Builder trafficBillingProtectionThreshold(final java.lang.Number trafficBillingProtectionThreshold) {
            this.props.trafficBillingProtectionThreshold(trafficBillingProtectionThreshold);
            return this;
        }
        /**
         * @return {@code this}
         * @param trafficBillingProtectionThreshold This parameter is required.
         */
        public Builder trafficBillingProtectionThreshold(final com.aliyun.ros.cdk.core.IResolvable trafficBillingProtectionThreshold) {
            this.props.trafficBillingProtectionThreshold(trafficBillingProtectionThreshold);
            return this;
        }

        /**
         * @return {@code this}
         * @param wafVersion This parameter is required.
         */
        public Builder wafVersion(final java.lang.String wafVersion) {
            this.props.wafVersion(wafVersion);
            return this;
        }
        /**
         * @return {@code this}
         * @param wafVersion This parameter is required.
         */
        public Builder wafVersion(final com.aliyun.ros.cdk.core.IResolvable wafVersion) {
            this.props.wafVersion(wafVersion);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.waf3.RosInstance}.
         */
        @Override
        public com.aliyun.ros.cdk.waf3.RosInstance build() {
            return new com.aliyun.ros.cdk.waf3.RosInstance(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
