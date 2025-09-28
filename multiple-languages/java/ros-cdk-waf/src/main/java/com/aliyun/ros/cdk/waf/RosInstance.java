package com.aliyun.ros.cdk.waf;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::WAF::Instance</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:31.007Z")
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
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrEndDate() {
        return software.amazon.jsii.Kernel.get(this, "attrEndDate", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInDebt() {
        return software.amazon.jsii.Kernel.get(this, "attrInDebt", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRemainDay() {
        return software.amazon.jsii.Kernel.get(this, "attrRemainDay", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSubscriptionType() {
        return software.amazon.jsii.Kernel.get(this, "attrSubscriptionType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTrial() {
        return software.amazon.jsii.Kernel.get(this, "attrTrial", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getBigScreen() {
        return software.amazon.jsii.Kernel.get(this, "bigScreen", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setBigScreen(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "bigScreen", java.util.Objects.requireNonNull(value, "bigScreen is required"));
    }

    /**
     */
    public void setBigScreen(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getExclusiveIpPackage() {
        return software.amazon.jsii.Kernel.get(this, "exclusiveIpPackage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setExclusiveIpPackage(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "exclusiveIpPackage", java.util.Objects.requireNonNull(value, "exclusiveIpPackage is required"));
    }

    /**
     */
    public void setExclusiveIpPackage(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "exclusiveIpPackage", java.util.Objects.requireNonNull(value, "exclusiveIpPackage is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getExtBandwidth() {
        return software.amazon.jsii.Kernel.get(this, "extBandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setExtBandwidth(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "extBandwidth", java.util.Objects.requireNonNull(value, "extBandwidth is required"));
    }

    /**
     */
    public void setExtBandwidth(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "extBandwidth", java.util.Objects.requireNonNull(value, "extBandwidth is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getExtDomainPackage() {
        return software.amazon.jsii.Kernel.get(this, "extDomainPackage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setExtDomainPackage(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "extDomainPackage", java.util.Objects.requireNonNull(value, "extDomainPackage is required"));
    }

    /**
     */
    public void setExtDomainPackage(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "extDomainPackage", java.util.Objects.requireNonNull(value, "extDomainPackage is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getLogStorage() {
        return software.amazon.jsii.Kernel.get(this, "logStorage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLogStorage(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "logStorage", java.util.Objects.requireNonNull(value, "logStorage is required"));
    }

    /**
     */
    public void setLogStorage(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "logStorage", java.util.Objects.requireNonNull(value, "logStorage is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getLogTime() {
        return software.amazon.jsii.Kernel.get(this, "logTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLogTime(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "logTime", java.util.Objects.requireNonNull(value, "logTime is required"));
    }

    /**
     */
    public void setLogTime(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "logTime", java.util.Objects.requireNonNull(value, "logTime is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getPackageCode() {
        return software.amazon.jsii.Kernel.get(this, "packageCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPackageCode(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "packageCode", java.util.Objects.requireNonNull(value, "packageCode is required"));
    }

    /**
     */
    public void setPackageCode(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "packageCode", java.util.Objects.requireNonNull(value, "packageCode is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getPrefessionalService() {
        return software.amazon.jsii.Kernel.get(this, "prefessionalService", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPrefessionalService(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "prefessionalService", java.util.Objects.requireNonNull(value, "prefessionalService is required"));
    }

    /**
     */
    public void setPrefessionalService(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "prefessionalService", java.util.Objects.requireNonNull(value, "prefessionalService is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getSubscriptionType() {
        return software.amazon.jsii.Kernel.get(this, "subscriptionType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSubscriptionType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "subscriptionType", java.util.Objects.requireNonNull(value, "subscriptionType is required"));
    }

    /**
     */
    public void setSubscriptionType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "subscriptionType", java.util.Objects.requireNonNull(value, "subscriptionType is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getWafLog() {
        return software.amazon.jsii.Kernel.get(this, "wafLog", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setWafLog(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "wafLog", java.util.Objects.requireNonNull(value, "wafLog is required"));
    }

    /**
     */
    public void setWafLog(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "wafLog", java.util.Objects.requireNonNull(value, "wafLog is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPeriod() {
        return software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPeriod(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "period", value);
    }

    /**
     */
    public void setPeriod(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "period", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRenewalStatus() {
        return software.amazon.jsii.Kernel.get(this, "renewalStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRenewalStatus(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "renewalStatus", value);
    }

    /**
     */
    public void setRenewalStatus(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "renewalStatus", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRenewPeriod() {
        return software.amazon.jsii.Kernel.get(this, "renewPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRenewPeriod(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "renewPeriod", value);
    }

    /**
     */
    public void setRenewPeriod(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "renewPeriod", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.waf.RosInstance}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.waf.RosInstance> {
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
         * @param bigScreen This parameter is required.
         */
        public Builder bigScreen(final com.aliyun.ros.cdk.core.IResolvable bigScreen) {
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
         * @param exclusiveIpPackage This parameter is required.
         */
        public Builder exclusiveIpPackage(final com.aliyun.ros.cdk.core.IResolvable exclusiveIpPackage) {
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
         * @param extBandwidth This parameter is required.
         */
        public Builder extBandwidth(final com.aliyun.ros.cdk.core.IResolvable extBandwidth) {
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
         * @param extDomainPackage This parameter is required.
         */
        public Builder extDomainPackage(final com.aliyun.ros.cdk.core.IResolvable extDomainPackage) {
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
         * @param logStorage This parameter is required.
         */
        public Builder logStorage(final com.aliyun.ros.cdk.core.IResolvable logStorage) {
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
         * @param logTime This parameter is required.
         */
        public Builder logTime(final com.aliyun.ros.cdk.core.IResolvable logTime) {
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
         * @param packageCode This parameter is required.
         */
        public Builder packageCode(final com.aliyun.ros.cdk.core.IResolvable packageCode) {
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
         * @param prefessionalService This parameter is required.
         */
        public Builder prefessionalService(final com.aliyun.ros.cdk.core.IResolvable prefessionalService) {
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
         * @param subscriptionType This parameter is required.
         */
        public Builder subscriptionType(final com.aliyun.ros.cdk.core.IResolvable subscriptionType) {
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
         * @param wafLog This parameter is required.
         */
        public Builder wafLog(final com.aliyun.ros.cdk.core.IResolvable wafLog) {
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
         * @param period This parameter is required.
         */
        public Builder period(final com.aliyun.ros.cdk.core.IResolvable period) {
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
         * @param renewalStatus This parameter is required.
         */
        public Builder renewalStatus(final com.aliyun.ros.cdk.core.IResolvable renewalStatus) {
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
         * @return {@code this}
         * @param renewPeriod This parameter is required.
         */
        public Builder renewPeriod(final com.aliyun.ros.cdk.core.IResolvable renewPeriod) {
            this.props.renewPeriod(renewPeriod);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.waf.RosInstance}.
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
