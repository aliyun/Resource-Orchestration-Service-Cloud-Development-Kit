package com.aliyun.ros.cdk.ga;

/**
 * A ROS resource type:  `ALIYUN::GA::Accelerator`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.53.0 (build c071d26)", date = "2022-02-11T01:44:07.866Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ga.$Module.class, fqn = "@alicloud/ros-cdk-ga.Accelerator")
public class Accelerator extends com.aliyun.ros.cdk.core.Resource {

    protected Accelerator(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Accelerator(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::GA::Accelerator`.
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
    public Accelerator(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ga.AcceleratorProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::GA::Accelerator`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Accelerator(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ga.AcceleratorProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
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
        private final com.aliyun.ros.cdk.ga.AcceleratorProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ga.AcceleratorProps.Builder();
        }

        /**
         * Property duration: The Duration of the GA instance.
         * <p>
         * @return {@code this}
         * @param duration Property duration: The Duration of the GA instance. This parameter is required.
         */
        public Builder duration(final java.lang.String duration) {
            this.props.duration(duration);
            return this;
        }
        /**
         * Property duration: The Duration of the GA instance.
         * <p>
         * @return {@code this}
         * @param duration Property duration: The Duration of the GA instance. This parameter is required.
         */
        public Builder duration(final com.aliyun.ros.cdk.core.IResolvable duration) {
            this.props.duration(duration);
            return this;
        }

        /**
         * Property pricingCycle: The PricingCycle of the GA instance.
         * <p>
         * @return {@code this}
         * @param pricingCycle Property pricingCycle: The PricingCycle of the GA instance. This parameter is required.
         */
        public Builder pricingCycle(final java.lang.String pricingCycle) {
            this.props.pricingCycle(pricingCycle);
            return this;
        }
        /**
         * Property pricingCycle: The PricingCycle of the GA instance.
         * <p>
         * @return {@code this}
         * @param pricingCycle Property pricingCycle: The PricingCycle of the GA instance. This parameter is required.
         */
        public Builder pricingCycle(final com.aliyun.ros.cdk.core.IResolvable pricingCycle) {
            this.props.pricingCycle(pricingCycle);
            return this;
        }

        /**
         * Property spec: The instance type of the GA instance.
         * <p>
         * @return {@code this}
         * @param spec Property spec: The instance type of the GA instance. This parameter is required.
         */
        public Builder spec(final java.lang.String spec) {
            this.props.spec(spec);
            return this;
        }
        /**
         * Property spec: The instance type of the GA instance.
         * <p>
         * @return {@code this}
         * @param spec Property spec: The instance type of the GA instance. This parameter is required.
         */
        public Builder spec(final com.aliyun.ros.cdk.core.IResolvable spec) {
            this.props.spec(spec);
            return this;
        }

        /**
         * Property acceleratorName: The Name of the GA instance.
         * <p>
         * @return {@code this}
         * @param acceleratorName Property acceleratorName: The Name of the GA instance. This parameter is required.
         */
        public Builder acceleratorName(final java.lang.String acceleratorName) {
            this.props.acceleratorName(acceleratorName);
            return this;
        }
        /**
         * Property acceleratorName: The Name of the GA instance.
         * <p>
         * @return {@code this}
         * @param acceleratorName Property acceleratorName: The Name of the GA instance. This parameter is required.
         */
        public Builder acceleratorName(final com.aliyun.ros.cdk.core.IResolvable acceleratorName) {
            this.props.acceleratorName(acceleratorName);
            return this;
        }

        /**
         * Property autoPay: The AutoPay of the GA instance.
         * <p>
         * @return {@code this}
         * @param autoPay Property autoPay: The AutoPay of the GA instance. This parameter is required.
         */
        public Builder autoPay(final java.lang.String autoPay) {
            this.props.autoPay(autoPay);
            return this;
        }
        /**
         * Property autoPay: The AutoPay of the GA instance.
         * <p>
         * @return {@code this}
         * @param autoPay Property autoPay: The AutoPay of the GA instance. This parameter is required.
         */
        public Builder autoPay(final com.aliyun.ros.cdk.core.IResolvable autoPay) {
            this.props.autoPay(autoPay);
            return this;
        }

        /**
         * Property autoUseCoupon: The AutoUseCoupon of the GA instance.
         * <p>
         * @return {@code this}
         * @param autoUseCoupon Property autoUseCoupon: The AutoUseCoupon of the GA instance. This parameter is required.
         */
        public Builder autoUseCoupon(final java.lang.String autoUseCoupon) {
            this.props.autoUseCoupon(autoUseCoupon);
            return this;
        }
        /**
         * Property autoUseCoupon: The AutoUseCoupon of the GA instance.
         * <p>
         * @return {@code this}
         * @param autoUseCoupon Property autoUseCoupon: The AutoUseCoupon of the GA instance. This parameter is required.
         */
        public Builder autoUseCoupon(final com.aliyun.ros.cdk.core.IResolvable autoUseCoupon) {
            this.props.autoUseCoupon(autoUseCoupon);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.ga.Accelerator}.
         */
        @Override
        public com.aliyun.ros.cdk.ga.Accelerator build() {
            return new com.aliyun.ros.cdk.ga.Accelerator(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
