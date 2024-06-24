package com.aliyun.ros.cdk.ga;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::GA::Accelerator</code>, which is used to create a Global Accelerator (GA) instance.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-24T05:57:07.215Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ga.$Module.class, fqn = "@alicloud/ros-cdk-ga.Accelerator")
public class Accelerator extends com.aliyun.ros.cdk.core.Resource {

    protected Accelerator(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Accelerator(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Accelerator(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.ga.AcceleratorProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Accelerator(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.ga.AcceleratorProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public Accelerator(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute AcceleratorId: The ID of the GA instance to query.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAcceleratorId() {
        return software.amazon.jsii.Kernel.get(this, "attrAcceleratorId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute AcceleratorName: The Name of the GA instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAcceleratorName() {
        return software.amazon.jsii.Kernel.get(this, "attrAcceleratorName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute AutoPay: The AutoPay of the GA instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAutoPay() {
        return software.amazon.jsii.Kernel.get(this, "attrAutoPay", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute AutoUseCoupon: The AutoUseCoupon of the GA instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAutoUseCoupon() {
        return software.amazon.jsii.Kernel.get(this, "attrAutoUseCoupon", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Duration: The Duration of the GA instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDuration() {
        return software.amazon.jsii.Kernel.get(this, "attrDuration", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute OrderId: The OrderId of the GA instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrOrderId() {
        return software.amazon.jsii.Kernel.get(this, "attrOrderId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute PaymentType: The Payment Typethe GA instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPaymentType() {
        return software.amazon.jsii.Kernel.get(this, "attrPaymentType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute PricingCycle: The PricingCycle of the GA instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPricingCycle() {
        return software.amazon.jsii.Kernel.get(this, "attrPricingCycle", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Spec: The instance type of the GA instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSpec() {
        return software.amazon.jsii.Kernel.get(this, "attrSpec", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ga.AcceleratorProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ga.AcceleratorProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ga.AcceleratorProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ga.Accelerator}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ga.Accelerator> {
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
        private com.aliyun.ros.cdk.ga.AcceleratorProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property acceleratorName: The Name of the GA instance.
         * <p>
         * @return {@code this}
         * @param acceleratorName Property acceleratorName: The Name of the GA instance. This parameter is required.
         */
        public Builder acceleratorName(final java.lang.String acceleratorName) {
            this.props().acceleratorName(acceleratorName);
            return this;
        }
        /**
         * Property acceleratorName: The Name of the GA instance.
         * <p>
         * @return {@code this}
         * @param acceleratorName Property acceleratorName: The Name of the GA instance. This parameter is required.
         */
        public Builder acceleratorName(final com.aliyun.ros.cdk.core.IResolvable acceleratorName) {
            this.props().acceleratorName(acceleratorName);
            return this;
        }

        /**
         * Property autoPay: Whether to pay automatically.
         * <p>
         * @return {@code this}
         * @param autoPay Property autoPay: Whether to pay automatically. This parameter is required.
         */
        public Builder autoPay(final java.lang.Boolean autoPay) {
            this.props().autoPay(autoPay);
            return this;
        }
        /**
         * Property autoPay: Whether to pay automatically.
         * <p>
         * @return {@code this}
         * @param autoPay Property autoPay: Whether to pay automatically. This parameter is required.
         */
        public Builder autoPay(final com.aliyun.ros.cdk.core.IResolvable autoPay) {
            this.props().autoPay(autoPay);
            return this;
        }

        /**
         * Property autoUseCoupon: The AutoUseCoupon of the GA instance.
         * <p>
         * @return {@code this}
         * @param autoUseCoupon Property autoUseCoupon: The AutoUseCoupon of the GA instance. This parameter is required.
         */
        public Builder autoUseCoupon(final java.lang.String autoUseCoupon) {
            this.props().autoUseCoupon(autoUseCoupon);
            return this;
        }
        /**
         * Property autoUseCoupon: The AutoUseCoupon of the GA instance.
         * <p>
         * @return {@code this}
         * @param autoUseCoupon Property autoUseCoupon: The AutoUseCoupon of the GA instance. This parameter is required.
         */
        public Builder autoUseCoupon(final com.aliyun.ros.cdk.core.IResolvable autoUseCoupon) {
            this.props().autoUseCoupon(autoUseCoupon);
            return this;
        }

        /**
         * Property bandwidthBillingType: Bandwidth billing method.
         * <p>
         * @return {@code this}
         * @param bandwidthBillingType Property bandwidthBillingType: Bandwidth billing method. This parameter is required.
         */
        public Builder bandwidthBillingType(final java.lang.String bandwidthBillingType) {
            this.props().bandwidthBillingType(bandwidthBillingType);
            return this;
        }
        /**
         * Property bandwidthBillingType: Bandwidth billing method.
         * <p>
         * @return {@code this}
         * @param bandwidthBillingType Property bandwidthBillingType: Bandwidth billing method. This parameter is required.
         */
        public Builder bandwidthBillingType(final com.aliyun.ros.cdk.core.IResolvable bandwidthBillingType) {
            this.props().bandwidthBillingType(bandwidthBillingType);
            return this;
        }

        /**
         * Property duration: Length of purchase.
         * <p>
         * @return {@code this}
         * @param duration Property duration: Length of purchase. This parameter is required.
         */
        public Builder duration(final java.lang.String duration) {
            this.props().duration(duration);
            return this;
        }
        /**
         * Property duration: Length of purchase.
         * <p>
         * @return {@code this}
         * @param duration Property duration: Length of purchase. This parameter is required.
         */
        public Builder duration(final com.aliyun.ros.cdk.core.IResolvable duration) {
            this.props().duration(duration);
            return this;
        }

        /**
         * Property enableCrossBorder: Whether the global acceleration instance enables the cross-border line function.
         * <p>
         * @return {@code this}
         * @param enableCrossBorder Property enableCrossBorder: Whether the global acceleration instance enables the cross-border line function. This parameter is required.
         */
        public Builder enableCrossBorder(final java.lang.Boolean enableCrossBorder) {
            this.props().enableCrossBorder(enableCrossBorder);
            return this;
        }
        /**
         * Property enableCrossBorder: Whether the global acceleration instance enables the cross-border line function.
         * <p>
         * @return {@code this}
         * @param enableCrossBorder Property enableCrossBorder: Whether the global acceleration instance enables the cross-border line function. This parameter is required.
         */
        public Builder enableCrossBorder(final com.aliyun.ros.cdk.core.IResolvable enableCrossBorder) {
            this.props().enableCrossBorder(enableCrossBorder);
            return this;
        }

        /**
         * Property instanceChargeType: Global acceleration instance payment type, the default value is PREPAY (prepaid).
         * <p>
         * @return {@code this}
         * @param instanceChargeType Property instanceChargeType: Global acceleration instance payment type, the default value is PREPAY (prepaid). This parameter is required.
         */
        public Builder instanceChargeType(final java.lang.String instanceChargeType) {
            this.props().instanceChargeType(instanceChargeType);
            return this;
        }
        /**
         * Property instanceChargeType: Global acceleration instance payment type, the default value is PREPAY (prepaid).
         * <p>
         * @return {@code this}
         * @param instanceChargeType Property instanceChargeType: Global acceleration instance payment type, the default value is PREPAY (prepaid). This parameter is required.
         */
        public Builder instanceChargeType(final com.aliyun.ros.cdk.core.IResolvable instanceChargeType) {
            this.props().instanceChargeType(instanceChargeType);
            return this;
        }

        /**
         * Property ipSetConfig: Accelerate zone configuration.
         * <p>
         * @return {@code this}
         * @param ipSetConfig Property ipSetConfig: Accelerate zone configuration. This parameter is required.
         */
        public Builder ipSetConfig(final com.aliyun.ros.cdk.core.IResolvable ipSetConfig) {
            this.props().ipSetConfig(ipSetConfig);
            return this;
        }
        /**
         * Property ipSetConfig: Accelerate zone configuration.
         * <p>
         * @return {@code this}
         * @param ipSetConfig Property ipSetConfig: Accelerate zone configuration. This parameter is required.
         */
        public Builder ipSetConfig(final com.aliyun.ros.cdk.ga.RosAccelerator.IpSetConfigProperty ipSetConfig) {
            this.props().ipSetConfig(ipSetConfig);
            return this;
        }

        /**
         * Property pricingCycle: Billing cycle.
         * <p>
         * @return {@code this}
         * @param pricingCycle Property pricingCycle: Billing cycle. This parameter is required.
         */
        public Builder pricingCycle(final java.lang.String pricingCycle) {
            this.props().pricingCycle(pricingCycle);
            return this;
        }
        /**
         * Property pricingCycle: Billing cycle.
         * <p>
         * @return {@code this}
         * @param pricingCycle Property pricingCycle: Billing cycle. This parameter is required.
         */
        public Builder pricingCycle(final com.aliyun.ros.cdk.core.IResolvable pricingCycle) {
            this.props().pricingCycle(pricingCycle);
            return this;
        }

        /**
         * Property resourceGroupId: The ResourceGroup Id.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ResourceGroup Id. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props().resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: The ResourceGroup Id.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ResourceGroup Id. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props().resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property spec: Specifications of Global Acceleration Instances.
         * <p>
         * @return {@code this}
         * @param spec Property spec: Specifications of Global Acceleration Instances. This parameter is required.
         */
        public Builder spec(final java.lang.String spec) {
            this.props().spec(spec);
            return this;
        }
        /**
         * Property spec: Specifications of Global Acceleration Instances.
         * <p>
         * @return {@code this}
         * @param spec Property spec: Specifications of Global Acceleration Instances. This parameter is required.
         */
        public Builder spec(final com.aliyun.ros.cdk.core.IResolvable spec) {
            this.props().spec(spec);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ga.Accelerator}.
         */
        @Override
        public com.aliyun.ros.cdk.ga.Accelerator build() {
            return new com.aliyun.ros.cdk.ga.Accelerator(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.ga.AcceleratorProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.ga.AcceleratorProps.Builder();
            }
            return this.props;
        }
    }
}
