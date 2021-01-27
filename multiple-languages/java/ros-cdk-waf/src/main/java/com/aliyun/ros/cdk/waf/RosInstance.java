package com.aliyun.ros.cdk.waf;

/**
 * A ROS template type:  `ALIYUN::WAF::Instance`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:34.735Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.waf.$Module.class, fqn = "@alicloud/ros-cdk-waf.RosInstance")
public class RosInstance extends com.aliyun.ros.cdk.core.RosResource {

    protected RosInstance(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosInstance(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.waf.RosInstance.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new `ALIYUN::WAF::Instance`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosInstance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.waf.RosInstanceProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEndDate() {
        return software.amazon.jsii.Kernel.get(this, "attrEndDate", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInDebt() {
        return software.amazon.jsii.Kernel.get(this, "attrInDebt", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRemainDay() {
        return software.amazon.jsii.Kernel.get(this, "attrRemainDay", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSubscriptionType() {
        return software.amazon.jsii.Kernel.get(this, "attrSubscriptionType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTrial() {
        return software.amazon.jsii.Kernel.get(this, "attrTrial", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.String getBigScreen() {
        return software.amazon.jsii.Kernel.get(this, "bigScreen", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setBigScreen(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "bigScreen", java.util.Objects.requireNonNull(value, "bigScreen is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.String getExclusiveIpPackage() {
        return software.amazon.jsii.Kernel.get(this, "exclusiveIpPackage", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setExclusiveIpPackage(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "exclusiveIpPackage", java.util.Objects.requireNonNull(value, "exclusiveIpPackage is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.String getExtBandwidth() {
        return software.amazon.jsii.Kernel.get(this, "extBandwidth", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setExtBandwidth(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "extBandwidth", java.util.Objects.requireNonNull(value, "extBandwidth is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.String getExtDomainPackage() {
        return software.amazon.jsii.Kernel.get(this, "extDomainPackage", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setExtDomainPackage(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "extDomainPackage", java.util.Objects.requireNonNull(value, "extDomainPackage is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.String getLogStorage() {
        return software.amazon.jsii.Kernel.get(this, "logStorage", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setLogStorage(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "logStorage", java.util.Objects.requireNonNull(value, "logStorage is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.String getLogTime() {
        return software.amazon.jsii.Kernel.get(this, "logTime", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setLogTime(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "logTime", java.util.Objects.requireNonNull(value, "logTime is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.String getPackageCode() {
        return software.amazon.jsii.Kernel.get(this, "packageCode", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setPackageCode(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "packageCode", java.util.Objects.requireNonNull(value, "packageCode is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.String getPrefessionalService() {
        return software.amazon.jsii.Kernel.get(this, "prefessionalService", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setPrefessionalService(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "prefessionalService", java.util.Objects.requireNonNull(value, "prefessionalService is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.String getSubscriptionType() {
        return software.amazon.jsii.Kernel.get(this, "subscriptionType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setSubscriptionType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "subscriptionType", java.util.Objects.requireNonNull(value, "subscriptionType is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.String getWafLog() {
        return software.amazon.jsii.Kernel.get(this, "wafLog", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setWafLog(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "wafLog", java.util.Objects.requireNonNull(value, "wafLog is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getPeriod() {
        return software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setPeriod(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "period", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getRenewalStatus() {
        return software.amazon.jsii.Kernel.get(this, "renewalStatus", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setRenewalStatus(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "renewalStatus", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getRenewPeriod() {
        return software.amazon.jsii.Kernel.get(this, "renewPeriod", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setRenewPeriod(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "renewPeriod", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.waf.RosInstance}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.waf.RosInstance> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope - scope in which this resource is defined. This parameter is required.
         * @param id - scoped id of the resource. This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.waf.RosInstanceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.waf.RosInstanceProps.Builder();
        }

        /**
         * @return {@code this}
         * @param bigScreen This parameter is required.
         */
        public Builder bigScreen(final java.lang.String bigScreen) {
            this.props.bigScreen(bigScreen);
            return this;
        }

        /**
         * @return {@code this}
         * @param exclusiveIpPackage This parameter is required.
         */
        public Builder exclusiveIpPackage(final java.lang.String exclusiveIpPackage) {
            this.props.exclusiveIpPackage(exclusiveIpPackage);
            return this;
        }

        /**
         * @return {@code this}
         * @param extBandwidth This parameter is required.
         */
        public Builder extBandwidth(final java.lang.String extBandwidth) {
            this.props.extBandwidth(extBandwidth);
            return this;
        }

        /**
         * @return {@code this}
         * @param extDomainPackage This parameter is required.
         */
        public Builder extDomainPackage(final java.lang.String extDomainPackage) {
            this.props.extDomainPackage(extDomainPackage);
            return this;
        }

        /**
         * @return {@code this}
         * @param logStorage This parameter is required.
         */
        public Builder logStorage(final java.lang.String logStorage) {
            this.props.logStorage(logStorage);
            return this;
        }

        /**
         * @return {@code this}
         * @param logTime This parameter is required.
         */
        public Builder logTime(final java.lang.String logTime) {
            this.props.logTime(logTime);
            return this;
        }

        /**
         * @return {@code this}
         * @param packageCode This parameter is required.
         */
        public Builder packageCode(final java.lang.String packageCode) {
            this.props.packageCode(packageCode);
            return this;
        }

        /**
         * @return {@code this}
         * @param prefessionalService This parameter is required.
         */
        public Builder prefessionalService(final java.lang.String prefessionalService) {
            this.props.prefessionalService(prefessionalService);
            return this;
        }

        /**
         * @return {@code this}
         * @param subscriptionType This parameter is required.
         */
        public Builder subscriptionType(final java.lang.String subscriptionType) {
            this.props.subscriptionType(subscriptionType);
            return this;
        }

        /**
         * @return {@code this}
         * @param wafLog This parameter is required.
         */
        public Builder wafLog(final java.lang.String wafLog) {
            this.props.wafLog(wafLog);
            return this;
        }

        /**
         * @return {@code this}
         * @param period This parameter is required.
         */
        public Builder period(final java.lang.String period) {
            this.props.period(period);
            return this;
        }

        /**
         * @return {@code this}
         * @param renewalStatus This parameter is required.
         */
        public Builder renewalStatus(final java.lang.String renewalStatus) {
            this.props.renewalStatus(renewalStatus);
            return this;
        }

        /**
         * @return {@code this}
         * @param renewPeriod This parameter is required.
         */
        public Builder renewPeriod(final java.lang.String renewPeriod) {
            this.props.renewPeriod(renewPeriod);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.waf.RosInstance}.
         */
        @Override
        public com.aliyun.ros.cdk.waf.RosInstance build() {
            return new com.aliyun.ros.cdk.waf.RosInstance(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
