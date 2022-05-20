package com.aliyun.ros.cdk.ga;

/**
 * A ROS resource type:  `ALIYUN::GA::BandwidthPackage`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.59.0 (build eb02c92)", date = "2022-05-20T02:42:02.450Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ga.$Module.class, fqn = "@alicloud/ros-cdk-ga.BandwidthPackage")
public class BandwidthPackage extends com.aliyun.ros.cdk.core.Resource {

    protected BandwidthPackage(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected BandwidthPackage(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::GA::BandwidthPackage`.
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
    public BandwidthPackage(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ga.BandwidthPackageProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::GA::BandwidthPackage`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public BandwidthPackage(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ga.BandwidthPackageProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute AutoPay: The AutoPay of the bandwidth.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAutoPay() {
        return software.amazon.jsii.Kernel.get(this, "attrAutoPay", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute AutoUseCoupon: The AutoUseCoupon  of the bandwidth.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAutoUseCoupon() {
        return software.amazon.jsii.Kernel.get(this, "attrAutoUseCoupon", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Bandwidth: The bandwidth provided by the bandwidth plan.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrBandwidth() {
        return software.amazon.jsii.Kernel.get(this, "attrBandwidth", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute BandwidthPackageId: The Resource ID of the bandwidth.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrBandwidthPackageId() {
        return software.amazon.jsii.Kernel.get(this, "attrBandwidthPackageId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute BandwidthPackageName: The Resource name of the bandwidth.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrBandwidthPackageName() {
        return software.amazon.jsii.Kernel.get(this, "attrBandwidthPackageName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute BandwidthType: the bandwidth BandwidthType of the bandwidth.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrBandwidthType() {
        return software.amazon.jsii.Kernel.get(this, "attrBandwidthType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute BillingType: The BillingType of the bandwidth.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrBillingType() {
        return software.amazon.jsii.Kernel.get(this, "attrBillingType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute CbnGeographicRegionIdA: The CbnGeographicRegionIdA  of the bandwidth.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCbnGeographicRegionIdA() {
        return software.amazon.jsii.Kernel.get(this, "attrCbnGeographicRegionIdA", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute CbnGeographicRegionIdB: The CbnGeographicRegionIdB of the bandwidth.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCbnGeographicRegionIdB() {
        return software.amazon.jsii.Kernel.get(this, "attrCbnGeographicRegionIdB", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ChargeType: The ChargeType of the bandwidth.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrChargeType() {
        return software.amazon.jsii.Kernel.get(this, "attrChargeType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute PaymentType: The Payment Type of the bandwidth.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPaymentType() {
        return software.amazon.jsii.Kernel.get(this, "attrPaymentType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Ratio: The Ratio of the bandwidth.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRatio() {
        return software.amazon.jsii.Kernel.get(this, "attrRatio", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Type: The type of the bandwidth plan.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrType() {
        return software.amazon.jsii.Kernel.get(this, "attrType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ga.BandwidthPackage}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ga.BandwidthPackage> {
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
        private final com.aliyun.ros.cdk.ga.BandwidthPackageProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ga.BandwidthPackageProps.Builder();
        }

        /**
         * Property bandwidth: The bandwidth provided by the bandwidth plan.
         * <p>
         * @return {@code this}
         * @param bandwidth Property bandwidth: The bandwidth provided by the bandwidth plan. This parameter is required.
         */
        public Builder bandwidth(final java.lang.Number bandwidth) {
            this.props.bandwidth(bandwidth);
            return this;
        }
        /**
         * Property bandwidth: The bandwidth provided by the bandwidth plan.
         * <p>
         * @return {@code this}
         * @param bandwidth Property bandwidth: The bandwidth provided by the bandwidth plan. This parameter is required.
         */
        public Builder bandwidth(final com.aliyun.ros.cdk.core.IResolvable bandwidth) {
            this.props.bandwidth(bandwidth);
            return this;
        }

        /**
         * Property type: The type of the bandwidth plan.
         * <p>
         * @return {@code this}
         * @param type Property type: The type of the bandwidth plan. This parameter is required.
         */
        public Builder type(final java.lang.String type) {
            this.props.type(type);
            return this;
        }
        /**
         * Property type: The type of the bandwidth plan.
         * <p>
         * @return {@code this}
         * @param type Property type: The type of the bandwidth plan. This parameter is required.
         */
        public Builder type(final com.aliyun.ros.cdk.core.IResolvable type) {
            this.props.type(type);
            return this;
        }

        /**
         * Property autoPay: The AutoPay of the bandwidth.
         * <p>
         * @return {@code this}
         * @param autoPay Property autoPay: The AutoPay of the bandwidth. This parameter is required.
         */
        public Builder autoPay(final java.lang.String autoPay) {
            this.props.autoPay(autoPay);
            return this;
        }
        /**
         * Property autoPay: The AutoPay of the bandwidth.
         * <p>
         * @return {@code this}
         * @param autoPay Property autoPay: The AutoPay of the bandwidth. This parameter is required.
         */
        public Builder autoPay(final com.aliyun.ros.cdk.core.IResolvable autoPay) {
            this.props.autoPay(autoPay);
            return this;
        }

        /**
         * Property autoUseCoupon: The AutoUseCoupon  of the bandwidth.
         * <p>
         * @return {@code this}
         * @param autoUseCoupon Property autoUseCoupon: The AutoUseCoupon  of the bandwidth. This parameter is required.
         */
        public Builder autoUseCoupon(final java.lang.String autoUseCoupon) {
            this.props.autoUseCoupon(autoUseCoupon);
            return this;
        }
        /**
         * Property autoUseCoupon: The AutoUseCoupon  of the bandwidth.
         * <p>
         * @return {@code this}
         * @param autoUseCoupon Property autoUseCoupon: The AutoUseCoupon  of the bandwidth. This parameter is required.
         */
        public Builder autoUseCoupon(final com.aliyun.ros.cdk.core.IResolvable autoUseCoupon) {
            this.props.autoUseCoupon(autoUseCoupon);
            return this;
        }

        /**
         * Property bandwidthType: the bandwidth BandwidthType of the bandwidth.
         * <p>
         * @return {@code this}
         * @param bandwidthType Property bandwidthType: the bandwidth BandwidthType of the bandwidth. This parameter is required.
         */
        public Builder bandwidthType(final java.lang.String bandwidthType) {
            this.props.bandwidthType(bandwidthType);
            return this;
        }
        /**
         * Property bandwidthType: the bandwidth BandwidthType of the bandwidth.
         * <p>
         * @return {@code this}
         * @param bandwidthType Property bandwidthType: the bandwidth BandwidthType of the bandwidth. This parameter is required.
         */
        public Builder bandwidthType(final com.aliyun.ros.cdk.core.IResolvable bandwidthType) {
            this.props.bandwidthType(bandwidthType);
            return this;
        }

        /**
         * Property billingType: The BillingType of the bandwidth.
         * <p>
         * @return {@code this}
         * @param billingType Property billingType: The BillingType of the bandwidth. This parameter is required.
         */
        public Builder billingType(final java.lang.String billingType) {
            this.props.billingType(billingType);
            return this;
        }
        /**
         * Property billingType: The BillingType of the bandwidth.
         * <p>
         * @return {@code this}
         * @param billingType Property billingType: The BillingType of the bandwidth. This parameter is required.
         */
        public Builder billingType(final com.aliyun.ros.cdk.core.IResolvable billingType) {
            this.props.billingType(billingType);
            return this;
        }

        /**
         * Property cbnGeographicRegionIdA: The CbnGeographicRegionIdA  of the bandwidth.
         * <p>
         * @return {@code this}
         * @param cbnGeographicRegionIdA Property cbnGeographicRegionIdA: The CbnGeographicRegionIdA  of the bandwidth. This parameter is required.
         */
        public Builder cbnGeographicRegionIdA(final java.lang.String cbnGeographicRegionIdA) {
            this.props.cbnGeographicRegionIdA(cbnGeographicRegionIdA);
            return this;
        }
        /**
         * Property cbnGeographicRegionIdA: The CbnGeographicRegionIdA  of the bandwidth.
         * <p>
         * @return {@code this}
         * @param cbnGeographicRegionIdA Property cbnGeographicRegionIdA: The CbnGeographicRegionIdA  of the bandwidth. This parameter is required.
         */
        public Builder cbnGeographicRegionIdA(final com.aliyun.ros.cdk.core.IResolvable cbnGeographicRegionIdA) {
            this.props.cbnGeographicRegionIdA(cbnGeographicRegionIdA);
            return this;
        }

        /**
         * Property cbnGeographicRegionIdB: The CbnGeographicRegionIdB of the bandwidth.
         * <p>
         * @return {@code this}
         * @param cbnGeographicRegionIdB Property cbnGeographicRegionIdB: The CbnGeographicRegionIdB of the bandwidth. This parameter is required.
         */
        public Builder cbnGeographicRegionIdB(final java.lang.String cbnGeographicRegionIdB) {
            this.props.cbnGeographicRegionIdB(cbnGeographicRegionIdB);
            return this;
        }
        /**
         * Property cbnGeographicRegionIdB: The CbnGeographicRegionIdB of the bandwidth.
         * <p>
         * @return {@code this}
         * @param cbnGeographicRegionIdB Property cbnGeographicRegionIdB: The CbnGeographicRegionIdB of the bandwidth. This parameter is required.
         */
        public Builder cbnGeographicRegionIdB(final com.aliyun.ros.cdk.core.IResolvable cbnGeographicRegionIdB) {
            this.props.cbnGeographicRegionIdB(cbnGeographicRegionIdB);
            return this;
        }

        /**
         * Property chargeType: The ChargeType of the bandwidth.
         * <p>
         * @return {@code this}
         * @param chargeType Property chargeType: The ChargeType of the bandwidth. This parameter is required.
         */
        public Builder chargeType(final java.lang.String chargeType) {
            this.props.chargeType(chargeType);
            return this;
        }
        /**
         * Property chargeType: The ChargeType of the bandwidth.
         * <p>
         * @return {@code this}
         * @param chargeType Property chargeType: The ChargeType of the bandwidth. This parameter is required.
         */
        public Builder chargeType(final com.aliyun.ros.cdk.core.IResolvable chargeType) {
            this.props.chargeType(chargeType);
            return this;
        }

        /**
         * Property duration:.
         * <p>
         * @return {@code this}
         * @param duration Property duration:. This parameter is required.
         */
        public Builder duration(final java.lang.String duration) {
            this.props.duration(duration);
            return this;
        }
        /**
         * Property duration:.
         * <p>
         * @return {@code this}
         * @param duration Property duration:. This parameter is required.
         */
        public Builder duration(final com.aliyun.ros.cdk.core.IResolvable duration) {
            this.props.duration(duration);
            return this;
        }

        /**
         * Property pricingCycle:.
         * <p>
         * @return {@code this}
         * @param pricingCycle Property pricingCycle:. This parameter is required.
         */
        public Builder pricingCycle(final java.lang.String pricingCycle) {
            this.props.pricingCycle(pricingCycle);
            return this;
        }
        /**
         * Property pricingCycle:.
         * <p>
         * @return {@code this}
         * @param pricingCycle Property pricingCycle:. This parameter is required.
         */
        public Builder pricingCycle(final com.aliyun.ros.cdk.core.IResolvable pricingCycle) {
            this.props.pricingCycle(pricingCycle);
            return this;
        }

        /**
         * Property ratio: The Ratio of the bandwidth.
         * <p>
         * @return {@code this}
         * @param ratio Property ratio: The Ratio of the bandwidth. This parameter is required.
         */
        public Builder ratio(final java.lang.String ratio) {
            this.props.ratio(ratio);
            return this;
        }
        /**
         * Property ratio: The Ratio of the bandwidth.
         * <p>
         * @return {@code this}
         * @param ratio Property ratio: The Ratio of the bandwidth. This parameter is required.
         */
        public Builder ratio(final com.aliyun.ros.cdk.core.IResolvable ratio) {
            this.props.ratio(ratio);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.ga.BandwidthPackage}.
         */
        @Override
        public com.aliyun.ros.cdk.ga.BandwidthPackage build() {
            return new com.aliyun.ros.cdk.ga.BandwidthPackage(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
