package com.aliyun.ros.cdk.waf;

/**
 * A ROS resource type:  `ALIYUN::WAF::Instance`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.55.1 (build 07d2d90)", date = "2022-04-07T03:17:42.883Z")
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
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public Instance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.waf.InstanceProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::WAF::Instance`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Instance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.waf.InstanceProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute EndDate: Due date of the instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrEndDate() {
        return software.amazon.jsii.Kernel.get(this, "attrEndDate", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute InDebt: Instance is overdue.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInDebt() {
        return software.amazon.jsii.Kernel.get(this, "attrInDebt", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute InstanceId: Instance ID.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute RemainDay: Number of available days for WAF Trial version.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRemainDay() {
        return software.amazon.jsii.Kernel.get(this, "attrRemainDay", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute SubscriptionType: Subscription type of the instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSubscriptionType() {
        return software.amazon.jsii.Kernel.get(this, "attrSubscriptionType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Trial: Trial version.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTrial() {
        return software.amazon.jsii.Kernel.get(this, "attrTrial", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.waf.Instance}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.waf.Instance> {
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
        private final com.aliyun.ros.cdk.waf.InstanceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.waf.InstanceProps.Builder();
        }

        /**
         * Property bigScreen:.
         * <p>
         * @return {@code this}
         * @param bigScreen Property bigScreen:. This parameter is required.
         */
        public Builder bigScreen(final java.lang.String bigScreen) {
            this.props.bigScreen(bigScreen);
            return this;
        }
        /**
         * Property bigScreen:.
         * <p>
         * @return {@code this}
         * @param bigScreen Property bigScreen:. This parameter is required.
         */
        public Builder bigScreen(final com.aliyun.ros.cdk.core.IResolvable bigScreen) {
            this.props.bigScreen(bigScreen);
            return this;
        }

        /**
         * Property exclusiveIpPackage:.
         * <p>
         * @return {@code this}
         * @param exclusiveIpPackage Property exclusiveIpPackage:. This parameter is required.
         */
        public Builder exclusiveIpPackage(final java.lang.String exclusiveIpPackage) {
            this.props.exclusiveIpPackage(exclusiveIpPackage);
            return this;
        }
        /**
         * Property exclusiveIpPackage:.
         * <p>
         * @return {@code this}
         * @param exclusiveIpPackage Property exclusiveIpPackage:. This parameter is required.
         */
        public Builder exclusiveIpPackage(final com.aliyun.ros.cdk.core.IResolvable exclusiveIpPackage) {
            this.props.exclusiveIpPackage(exclusiveIpPackage);
            return this;
        }

        /**
         * Property extBandwidth:.
         * <p>
         * @return {@code this}
         * @param extBandwidth Property extBandwidth:. This parameter is required.
         */
        public Builder extBandwidth(final java.lang.String extBandwidth) {
            this.props.extBandwidth(extBandwidth);
            return this;
        }
        /**
         * Property extBandwidth:.
         * <p>
         * @return {@code this}
         * @param extBandwidth Property extBandwidth:. This parameter is required.
         */
        public Builder extBandwidth(final com.aliyun.ros.cdk.core.IResolvable extBandwidth) {
            this.props.extBandwidth(extBandwidth);
            return this;
        }

        /**
         * Property extDomainPackage:.
         * <p>
         * @return {@code this}
         * @param extDomainPackage Property extDomainPackage:. This parameter is required.
         */
        public Builder extDomainPackage(final java.lang.String extDomainPackage) {
            this.props.extDomainPackage(extDomainPackage);
            return this;
        }
        /**
         * Property extDomainPackage:.
         * <p>
         * @return {@code this}
         * @param extDomainPackage Property extDomainPackage:. This parameter is required.
         */
        public Builder extDomainPackage(final com.aliyun.ros.cdk.core.IResolvable extDomainPackage) {
            this.props.extDomainPackage(extDomainPackage);
            return this;
        }

        /**
         * Property logStorage:.
         * <p>
         * @return {@code this}
         * @param logStorage Property logStorage:. This parameter is required.
         */
        public Builder logStorage(final java.lang.String logStorage) {
            this.props.logStorage(logStorage);
            return this;
        }
        /**
         * Property logStorage:.
         * <p>
         * @return {@code this}
         * @param logStorage Property logStorage:. This parameter is required.
         */
        public Builder logStorage(final com.aliyun.ros.cdk.core.IResolvable logStorage) {
            this.props.logStorage(logStorage);
            return this;
        }

        /**
         * Property logTime:.
         * <p>
         * @return {@code this}
         * @param logTime Property logTime:. This parameter is required.
         */
        public Builder logTime(final java.lang.String logTime) {
            this.props.logTime(logTime);
            return this;
        }
        /**
         * Property logTime:.
         * <p>
         * @return {@code this}
         * @param logTime Property logTime:. This parameter is required.
         */
        public Builder logTime(final com.aliyun.ros.cdk.core.IResolvable logTime) {
            this.props.logTime(logTime);
            return this;
        }

        /**
         * Property packageCode:.
         * <p>
         * @return {@code this}
         * @param packageCode Property packageCode:. This parameter is required.
         */
        public Builder packageCode(final java.lang.String packageCode) {
            this.props.packageCode(packageCode);
            return this;
        }
        /**
         * Property packageCode:.
         * <p>
         * @return {@code this}
         * @param packageCode Property packageCode:. This parameter is required.
         */
        public Builder packageCode(final com.aliyun.ros.cdk.core.IResolvable packageCode) {
            this.props.packageCode(packageCode);
            return this;
        }

        /**
         * Property prefessionalService:.
         * <p>
         * @return {@code this}
         * @param prefessionalService Property prefessionalService:. This parameter is required.
         */
        public Builder prefessionalService(final java.lang.String prefessionalService) {
            this.props.prefessionalService(prefessionalService);
            return this;
        }
        /**
         * Property prefessionalService:.
         * <p>
         * @return {@code this}
         * @param prefessionalService Property prefessionalService:. This parameter is required.
         */
        public Builder prefessionalService(final com.aliyun.ros.cdk.core.IResolvable prefessionalService) {
            this.props.prefessionalService(prefessionalService);
            return this;
        }

        /**
         * Property subscriptionType: Subscription type of the instance.
         * <p>
         * @return {@code this}
         * @param subscriptionType Property subscriptionType: Subscription type of the instance. This parameter is required.
         */
        public Builder subscriptionType(final java.lang.String subscriptionType) {
            this.props.subscriptionType(subscriptionType);
            return this;
        }
        /**
         * Property subscriptionType: Subscription type of the instance.
         * <p>
         * @return {@code this}
         * @param subscriptionType Property subscriptionType: Subscription type of the instance. This parameter is required.
         */
        public Builder subscriptionType(final com.aliyun.ros.cdk.core.IResolvable subscriptionType) {
            this.props.subscriptionType(subscriptionType);
            return this;
        }

        /**
         * Property wafLog:.
         * <p>
         * @return {@code this}
         * @param wafLog Property wafLog:. This parameter is required.
         */
        public Builder wafLog(final java.lang.String wafLog) {
            this.props.wafLog(wafLog);
            return this;
        }
        /**
         * Property wafLog:.
         * <p>
         * @return {@code this}
         * @param wafLog Property wafLog:. This parameter is required.
         */
        public Builder wafLog(final com.aliyun.ros.cdk.core.IResolvable wafLog) {
            this.props.wafLog(wafLog);
            return this;
        }

        /**
         * Property period:.
         * <p>
         * @return {@code this}
         * @param period Property period:. This parameter is required.
         */
        public Builder period(final java.lang.String period) {
            this.props.period(period);
            return this;
        }
        /**
         * Property period:.
         * <p>
         * @return {@code this}
         * @param period Property period:. This parameter is required.
         */
        public Builder period(final com.aliyun.ros.cdk.core.IResolvable period) {
            this.props.period(period);
            return this;
        }

        /**
         * Property renewalStatus:.
         * <p>
         * @return {@code this}
         * @param renewalStatus Property renewalStatus:. This parameter is required.
         */
        public Builder renewalStatus(final java.lang.String renewalStatus) {
            this.props.renewalStatus(renewalStatus);
            return this;
        }
        /**
         * Property renewalStatus:.
         * <p>
         * @return {@code this}
         * @param renewalStatus Property renewalStatus:. This parameter is required.
         */
        public Builder renewalStatus(final com.aliyun.ros.cdk.core.IResolvable renewalStatus) {
            this.props.renewalStatus(renewalStatus);
            return this;
        }

        /**
         * Property renewPeriod:.
         * <p>
         * @return {@code this}
         * @param renewPeriod Property renewPeriod:. This parameter is required.
         */
        public Builder renewPeriod(final java.lang.String renewPeriod) {
            this.props.renewPeriod(renewPeriod);
            return this;
        }
        /**
         * Property renewPeriod:.
         * <p>
         * @return {@code this}
         * @param renewPeriod Property renewPeriod:. This parameter is required.
         */
        public Builder renewPeriod(final com.aliyun.ros.cdk.core.IResolvable renewPeriod) {
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
