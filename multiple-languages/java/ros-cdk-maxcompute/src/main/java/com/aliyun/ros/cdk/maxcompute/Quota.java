package com.aliyun.ros.cdk.maxcompute;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::MaxCompute::Quota</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:26.857Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.maxcompute.$Module.class, fqn = "@alicloud/ros-cdk-maxcompute.Quota")
public class Quota extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.maxcompute.IQuota {

    protected Quota(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Quota(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public Quota(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.maxcompute.QuotaProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Quota(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.maxcompute.QuotaProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute DefaultSubQuotaNickname: The default sub quota nickname of the odps quota instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDefaultSubQuotaNickname() {
        return software.amazon.jsii.Kernel.get(this, "attrDefaultSubQuotaNickname", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Nickname: The nickname of the odps quota instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrNickname() {
        return software.amazon.jsii.Kernel.get(this, "attrNickname", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.maxcompute.QuotaProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.maxcompute.QuotaProps.class));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    protected void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.String getId() {
        return software.amazon.jsii.Kernel.get(this, "id", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    protected void setId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "id", java.util.Objects.requireNonNull(value, "id is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.maxcompute.Quota}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.maxcompute.Quota> {
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
        private final com.aliyun.ros.cdk.maxcompute.QuotaProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.maxcompute.QuotaProps.Builder();
        }

        /**
         * Property payType: The billing method of the odps quota instance.
         * <p>
         * Valid values:
         * PayAsYouGo: pay-as-you-go
         * Subscription: subscription
         * <p>
         * @return {@code this}
         * @param payType Property payType: The billing method of the odps quota instance. This parameter is required.
         */
        public Builder payType(final java.lang.String payType) {
            this.props.payType(payType);
            return this;
        }
        /**
         * Property payType: The billing method of the odps quota instance.
         * <p>
         * Valid values:
         * PayAsYouGo: pay-as-you-go
         * Subscription: subscription
         * <p>
         * @return {@code this}
         * @param payType Property payType: The billing method of the odps quota instance. This parameter is required.
         */
        public Builder payType(final com.aliyun.ros.cdk.core.IResolvable payType) {
            this.props.payType(payType);
            return this;
        }

        /**
         * Property autoPay: Whether to auto pay the bill.
         * <p>
         * @return {@code this}
         * @param autoPay Property autoPay: Whether to auto pay the bill. This parameter is required.
         */
        public Builder autoPay(final java.lang.Boolean autoPay) {
            this.props.autoPay(autoPay);
            return this;
        }
        /**
         * Property autoPay: Whether to auto pay the bill.
         * <p>
         * @return {@code this}
         * @param autoPay Property autoPay: Whether to auto pay the bill. This parameter is required.
         */
        public Builder autoPay(final com.aliyun.ros.cdk.core.IResolvable autoPay) {
            this.props.autoPay(autoPay);
            return this;
        }

        /**
         * Property autoRenew: Whether to auto renew the prepay instance.
         * <p>
         * @return {@code this}
         * @param autoRenew Property autoRenew: Whether to auto renew the prepay instance. This parameter is required.
         */
        public Builder autoRenew(final java.lang.Boolean autoRenew) {
            this.props.autoRenew(autoRenew);
            return this;
        }
        /**
         * Property autoRenew: Whether to auto renew the prepay instance.
         * <p>
         * @return {@code this}
         * @param autoRenew Property autoRenew: Whether to auto renew the prepay instance. This parameter is required.
         */
        public Builder autoRenew(final com.aliyun.ros.cdk.core.IResolvable autoRenew) {
            this.props.autoRenew(autoRenew);
            return this;
        }

        /**
         * Property cu: The compute unit of the odps quota instance.
         * <p>
         * When the specification is the StandardCompute, this parameter is required.
         * <p>
         * @return {@code this}
         * @param cu Property cu: The compute unit of the odps quota instance. This parameter is required.
         */
        public Builder cu(final java.lang.Number cu) {
            this.props.cu(cu);
            return this;
        }
        /**
         * Property cu: The compute unit of the odps quota instance.
         * <p>
         * When the specification is the StandardCompute, this parameter is required.
         * <p>
         * @return {@code this}
         * @param cu Property cu: The compute unit of the odps quota instance. This parameter is required.
         */
        public Builder cu(final com.aliyun.ros.cdk.core.IResolvable cu) {
            this.props.cu(cu);
            return this;
        }

        /**
         * Property period: The subscription period of the odps quotaIf PeriodUnit is month, the valid range is 1-9 If periodUnit is year, the valid range is 1, 2, 3, 4, 5.
         * <p>
         * @return {@code this}
         * @param period Property period: The subscription period of the odps quotaIf PeriodUnit is month, the valid range is 1-9 If periodUnit is year, the valid range is 1, 2, 3, 4, 5. This parameter is required.
         */
        public Builder period(final java.lang.Number period) {
            this.props.period(period);
            return this;
        }
        /**
         * Property period: The subscription period of the odps quotaIf PeriodUnit is month, the valid range is 1-9 If periodUnit is year, the valid range is 1, 2, 3, 4, 5.
         * <p>
         * @return {@code this}
         * @param period Property period: The subscription period of the odps quotaIf PeriodUnit is month, the valid range is 1-9 If periodUnit is year, the valid range is 1, 2, 3, 4, 5. This parameter is required.
         */
        public Builder period(final com.aliyun.ros.cdk.core.IResolvable period) {
            this.props.period(period);
            return this;
        }

        /**
         * Property periodUnit: The unit of the subscription duration.
         * <p>
         * Valid values:
         * Month
         * Year
         * Default value: Month.
         * <p>
         * @return {@code this}
         * @param periodUnit Property periodUnit: The unit of the subscription duration. This parameter is required.
         */
        public Builder periodUnit(final java.lang.String periodUnit) {
            this.props.periodUnit(periodUnit);
            return this;
        }
        /**
         * Property periodUnit: The unit of the subscription duration.
         * <p>
         * Valid values:
         * Month
         * Year
         * Default value: Month.
         * <p>
         * @return {@code this}
         * @param periodUnit Property periodUnit: The unit of the subscription duration. This parameter is required.
         */
        public Builder periodUnit(final com.aliyun.ros.cdk.core.IResolvable periodUnit) {
            this.props.periodUnit(periodUnit);
            return this;
        }

        /**
         * Property quotaNickname: The nickname of the odps quota instance.
         * <p>
         * @return {@code this}
         * @param quotaNickname Property quotaNickname: The nickname of the odps quota instance. This parameter is required.
         */
        public Builder quotaNickname(final java.lang.String quotaNickname) {
            this.props.quotaNickname(quotaNickname);
            return this;
        }
        /**
         * Property quotaNickname: The nickname of the odps quota instance.
         * <p>
         * @return {@code this}
         * @param quotaNickname Property quotaNickname: The nickname of the odps quota instance. This parameter is required.
         */
        public Builder quotaNickname(final com.aliyun.ros.cdk.core.IResolvable quotaNickname) {
            this.props.quotaNickname(quotaNickname);
            return this;
        }

        /**
         * Property specification: The specification of the odps quota instance.
         * <p>
         * @return {@code this}
         * @param specification Property specification: The specification of the odps quota instance. This parameter is required.
         */
        public Builder specification(final java.lang.String specification) {
            this.props.specification(specification);
            return this;
        }
        /**
         * Property specification: The specification of the odps quota instance.
         * <p>
         * @return {@code this}
         * @param specification Property specification: The specification of the odps quota instance. This parameter is required.
         */
        public Builder specification(final com.aliyun.ros.cdk.core.IResolvable specification) {
            this.props.specification(specification);
            return this;
        }

        /**
         * Property tunnel: The tunnel unit of the odps quota instance.
         * <p>
         * When the specification is the Tunnel, this parameter is required
         * <p>
         * @return {@code this}
         * @param tunnel Property tunnel: The tunnel unit of the odps quota instance. This parameter is required.
         */
        public Builder tunnel(final java.lang.Number tunnel) {
            this.props.tunnel(tunnel);
            return this;
        }
        /**
         * Property tunnel: The tunnel unit of the odps quota instance.
         * <p>
         * When the specification is the Tunnel, this parameter is required
         * <p>
         * @return {@code this}
         * @param tunnel Property tunnel: The tunnel unit of the odps quota instance. This parameter is required.
         */
        public Builder tunnel(final com.aliyun.ros.cdk.core.IResolvable tunnel) {
            this.props.tunnel(tunnel);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.maxcompute.Quota}.
         */
        @Override
        public com.aliyun.ros.cdk.maxcompute.Quota build() {
            return new com.aliyun.ros.cdk.maxcompute.Quota(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
