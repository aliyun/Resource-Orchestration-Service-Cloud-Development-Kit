package com.aliyun.ros.cdk.waf;

/**
 * A ROS resource type:  `ALIYUN::WAF::Instance`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:34.725Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.waf.$Module.class, fqn = "@alicloud/ros-cdk-waf.Instance")
public class Instance extends com.aliyun.ros.cdk.core.Resource {

    protected Instance(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Instance(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::WAF::Instance`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public Instance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.waf.InstanceProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::WAF::Instance`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     */
    public Instance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.waf.InstanceProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

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

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.waf.Instance}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.waf.Instance> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope - scope in which this resource is defined. This parameter is required.
         * @param id - scoped id of the resource. This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope - scope in which this resource is defined. This parameter is required.
         * @param id - scoped id of the resource. This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.waf.InstanceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.waf.InstanceProps.Builder();
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
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.waf.Instance}.
         */
        @Override
        public com.aliyun.ros.cdk.waf.Instance build() {
            return new com.aliyun.ros.cdk.waf.Instance(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
