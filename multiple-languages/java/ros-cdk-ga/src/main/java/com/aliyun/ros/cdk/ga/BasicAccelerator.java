package com.aliyun.ros.cdk.ga;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::GA::BasicAccelerator</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-22T08:56:21.706Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ga.$Module.class, fqn = "@alicloud/ros-cdk-ga.BasicAccelerator")
public class BasicAccelerator extends com.aliyun.ros.cdk.core.Resource {

    protected BasicAccelerator(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected BasicAccelerator(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     * @param enableResourcePropertyConstraint
     */
    public BasicAccelerator(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.ga.BasicAcceleratorProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props, enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     */
    public BasicAccelerator(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.ga.BasicAcceleratorProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public BasicAccelerator(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute AcceleratorId: The ID of the accelerated IP address.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAcceleratorId() {
        return software.amazon.jsii.Kernel.get(this, "attrAcceleratorId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ga.BasicAcceleratorProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ga.BasicAcceleratorProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ga.BasicAcceleratorProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ga.BasicAccelerator}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ga.BasicAccelerator> {
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
        private com.aliyun.ros.cdk.ga.BasicAcceleratorProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property autoPay: Specifies whether to enable automatic payment.
         * <p>
         * Valid values:
         * false: disables automatic payment. If you select this option, you must go to the Order Center to complete the payment after an order is generated. This is the default value.
         * true: enables automatic payment. Payments are automatically completed.
         * <p>
         * @return {@code this}
         * @param autoPay Property autoPay: Specifies whether to enable automatic payment. This parameter is required.
         */
        public Builder autoPay(final java.lang.Boolean autoPay) {
            this.props().autoPay(autoPay);
            return this;
        }
        /**
         * Property autoPay: Specifies whether to enable automatic payment.
         * <p>
         * Valid values:
         * false: disables automatic payment. If you select this option, you must go to the Order Center to complete the payment after an order is generated. This is the default value.
         * true: enables automatic payment. Payments are automatically completed.
         * <p>
         * @return {@code this}
         * @param autoPay Property autoPay: Specifies whether to enable automatic payment. This parameter is required.
         */
        public Builder autoPay(final com.aliyun.ros.cdk.core.IResolvable autoPay) {
            this.props().autoPay(autoPay);
            return this;
        }

        /**
         * Property autoRenew: Specifies whether to enable auto-renewal for the basic GA instance.
         * <p>
         * Valid values:
         * true: enables auto-renewal for the basic GA instance.
         * false: disables auto-renewal for the basic GA instance. This is the default value.
         * <p>
         * @return {@code this}
         * @param autoRenew Property autoRenew: Specifies whether to enable auto-renewal for the basic GA instance. This parameter is required.
         */
        public Builder autoRenew(final java.lang.Boolean autoRenew) {
            this.props().autoRenew(autoRenew);
            return this;
        }
        /**
         * Property autoRenew: Specifies whether to enable auto-renewal for the basic GA instance.
         * <p>
         * Valid values:
         * true: enables auto-renewal for the basic GA instance.
         * false: disables auto-renewal for the basic GA instance. This is the default value.
         * <p>
         * @return {@code this}
         * @param autoRenew Property autoRenew: Specifies whether to enable auto-renewal for the basic GA instance. This parameter is required.
         */
        public Builder autoRenew(final com.aliyun.ros.cdk.core.IResolvable autoRenew) {
            this.props().autoRenew(autoRenew);
            return this;
        }

        /**
         * Property autoRenewDuration: The auto-renewal duration.
         * <p>
         * Unit: months.Valid values: 1 to 12. Default value: 1.
         * <p>
         * @return {@code this}
         * @param autoRenewDuration Property autoRenewDuration: The auto-renewal duration. This parameter is required.
         */
        public Builder autoRenewDuration(final java.lang.Number autoRenewDuration) {
            this.props().autoRenewDuration(autoRenewDuration);
            return this;
        }
        /**
         * Property autoRenewDuration: The auto-renewal duration.
         * <p>
         * Unit: months.Valid values: 1 to 12. Default value: 1.
         * <p>
         * @return {@code this}
         * @param autoRenewDuration Property autoRenewDuration: The auto-renewal duration. This parameter is required.
         */
        public Builder autoRenewDuration(final com.aliyun.ros.cdk.core.IResolvable autoRenewDuration) {
            this.props().autoRenewDuration(autoRenewDuration);
            return this;
        }

        /**
         * Property autoUseCoupon: Specifies whether to automatically apply coupons to your bills.
         * <p>
         * Valid values:
         * true: automatically applies coupons to your bills.
         * false: does not automatically apply coupons to your bills. This is the default value.
         * <p>
         * @return {@code this}
         * @param autoUseCoupon Property autoUseCoupon: Specifies whether to automatically apply coupons to your bills. This parameter is required.
         */
        public Builder autoUseCoupon(final java.lang.String autoUseCoupon) {
            this.props().autoUseCoupon(autoUseCoupon);
            return this;
        }
        /**
         * Property autoUseCoupon: Specifies whether to automatically apply coupons to your bills.
         * <p>
         * Valid values:
         * true: automatically applies coupons to your bills.
         * false: does not automatically apply coupons to your bills. This is the default value.
         * <p>
         * @return {@code this}
         * @param autoUseCoupon Property autoUseCoupon: Specifies whether to automatically apply coupons to your bills. This parameter is required.
         */
        public Builder autoUseCoupon(final com.aliyun.ros.cdk.core.IResolvable autoUseCoupon) {
            this.props().autoUseCoupon(autoUseCoupon);
            return this;
        }

        /**
         * Property bandwidthBillingType: The bandwidth billing method.
         * <p>
         * Valid values:
         * BandwidthPackage: billed based on bandwidth plans.
         * CDT: billed based on data transfer. The bills are managed by using Cloud Data Transfer (CDT).
         * CDT95: billed based on the 95th percentile bandwidth. The bills are managed by using Cloud Data Transfer (CDT). This bandwidth billing method is not available by default. Contact your Alibaba Cloud account manager for more information.
         * <p>
         * @return {@code this}
         * @param bandwidthBillingType Property bandwidthBillingType: The bandwidth billing method. This parameter is required.
         */
        public Builder bandwidthBillingType(final java.lang.String bandwidthBillingType) {
            this.props().bandwidthBillingType(bandwidthBillingType);
            return this;
        }
        /**
         * Property bandwidthBillingType: The bandwidth billing method.
         * <p>
         * Valid values:
         * BandwidthPackage: billed based on bandwidth plans.
         * CDT: billed based on data transfer. The bills are managed by using Cloud Data Transfer (CDT).
         * CDT95: billed based on the 95th percentile bandwidth. The bills are managed by using Cloud Data Transfer (CDT). This bandwidth billing method is not available by default. Contact your Alibaba Cloud account manager for more information.
         * <p>
         * @return {@code this}
         * @param bandwidthBillingType Property bandwidthBillingType: The bandwidth billing method. This parameter is required.
         */
        public Builder bandwidthBillingType(final com.aliyun.ros.cdk.core.IResolvable bandwidthBillingType) {
            this.props().bandwidthBillingType(bandwidthBillingType);
            return this;
        }

        /**
         * Property chargeType: The billing method.
         * <p>
         * Valid values:
         * PREPAY (default)POSTPAY
         * <p>
         * @return {@code this}
         * @param chargeType Property chargeType: The billing method. This parameter is required.
         */
        public Builder chargeType(final java.lang.String chargeType) {
            this.props().chargeType(chargeType);
            return this;
        }
        /**
         * Property chargeType: The billing method.
         * <p>
         * Valid values:
         * PREPAY (default)POSTPAY
         * <p>
         * @return {@code this}
         * @param chargeType Property chargeType: The billing method. This parameter is required.
         */
        public Builder chargeType(final com.aliyun.ros.cdk.core.IResolvable chargeType) {
            this.props().chargeType(chargeType);
            return this;
        }

        /**
         * Property duration: The subscription duration of the GA instance.
         * <p>
         * If you set PricingCycle to Month, the valid values for Duration are 1 to 9.
         * If you set PricingCycle to Year, the valid values for Duration are 1 to 3.
         * <p>
         * @return {@code this}
         * @param duration Property duration: The subscription duration of the GA instance. This parameter is required.
         */
        public Builder duration(final java.lang.Number duration) {
            this.props().duration(duration);
            return this;
        }
        /**
         * Property duration: The subscription duration of the GA instance.
         * <p>
         * If you set PricingCycle to Month, the valid values for Duration are 1 to 9.
         * If you set PricingCycle to Year, the valid values for Duration are 1 to 3.
         * <p>
         * @return {@code this}
         * @param duration Property duration: The subscription duration of the GA instance. This parameter is required.
         */
        public Builder duration(final com.aliyun.ros.cdk.core.IResolvable duration) {
            this.props().duration(duration);
            return this;
        }

        /**
         * Property pricingCycle: The billing cycle.
         * <p>
         * Valid values:
         * Month
         * Year
         * <p>
         * @return {@code this}
         * @param pricingCycle Property pricingCycle: The billing cycle. This parameter is required.
         */
        public Builder pricingCycle(final java.lang.String pricingCycle) {
            this.props().pricingCycle(pricingCycle);
            return this;
        }
        /**
         * Property pricingCycle: The billing cycle.
         * <p>
         * Valid values:
         * Month
         * Year
         * <p>
         * @return {@code this}
         * @param pricingCycle Property pricingCycle: The billing cycle. This parameter is required.
         */
        public Builder pricingCycle(final com.aliyun.ros.cdk.core.IResolvable pricingCycle) {
            this.props().pricingCycle(pricingCycle);
            return this;
        }

        /**
         * Property promotionOptionNo: The code of the coupon.
         * <p>
         * @return {@code this}
         * @param promotionOptionNo Property promotionOptionNo: The code of the coupon. This parameter is required.
         */
        public Builder promotionOptionNo(final java.lang.String promotionOptionNo) {
            this.props().promotionOptionNo(promotionOptionNo);
            return this;
        }
        /**
         * Property promotionOptionNo: The code of the coupon.
         * <p>
         * @return {@code this}
         * @param promotionOptionNo Property promotionOptionNo: The code of the coupon. This parameter is required.
         */
        public Builder promotionOptionNo(final com.aliyun.ros.cdk.core.IResolvable promotionOptionNo) {
            this.props().promotionOptionNo(promotionOptionNo);
            return this;
        }

        /**
         * Property resourceGroupId: The ID of the resource group to which the basic GA instance belongs.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the basic GA instance belongs. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props().resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: The ID of the resource group to which the basic GA instance belongs.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the basic GA instance belongs. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props().resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property tags: The tags of the basic GA instance.
         * <p>
         * @return {@code this}
         * @param tags Property tags: The tags of the basic GA instance. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.ga.RosBasicAccelerator.TagsProperty> tags) {
            this.props().tags(tags);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ga.BasicAccelerator}.
         */
        @Override
        public com.aliyun.ros.cdk.ga.BasicAccelerator build() {
            return new com.aliyun.ros.cdk.ga.BasicAccelerator(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.ga.BasicAcceleratorProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.ga.BasicAcceleratorProps.Builder();
            }
            return this.props;
        }
    }
}
