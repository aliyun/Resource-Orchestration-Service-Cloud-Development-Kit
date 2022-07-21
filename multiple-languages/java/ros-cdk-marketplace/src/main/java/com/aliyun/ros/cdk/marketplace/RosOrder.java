package com.aliyun.ros.cdk.marketplace;

/**
 * A ROS template type:  `ALIYUN::MarketPlace::Order`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.62.0 (build 293ac17)", date = "2022-07-21T02:24:25.738Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.marketplace.$Module.class, fqn = "@alicloud/ros-cdk-marketplace.RosOrder")
public class RosOrder extends com.aliyun.ros.cdk.core.RosResource {

    protected RosOrder(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosOrder(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.marketplace.RosOrder.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new `ALIYUN::MarketPlace::Order`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosOrder(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.marketplace.RosOrderProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrOrderId() {
        return software.amazon.jsii.Kernel.get(this, "attrOrderId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getProductCode() {
        return software.amazon.jsii.Kernel.get(this, "productCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setProductCode(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "productCode", java.util.Objects.requireNonNull(value, "productCode is required"));
    }

    /**
     */
    public void setProductCode(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "productCode", java.util.Objects.requireNonNull(value, "productCode is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getSkuCode() {
        return software.amazon.jsii.Kernel.get(this, "skuCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSkuCode(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "skuCode", java.util.Objects.requireNonNull(value, "skuCode is required"));
    }

    /**
     */
    public void setSkuCode(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "skuCode", java.util.Objects.requireNonNull(value, "skuCode is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getChargeType() {
        return software.amazon.jsii.Kernel.get(this, "chargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setChargeType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "chargeType", value);
    }

    /**
     */
    public void setChargeType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "chargeType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDuration() {
        return software.amazon.jsii.Kernel.get(this, "duration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDuration(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "duration", value);
    }

    /**
     */
    public void setDuration(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "duration", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPreference() {
        return software.amazon.jsii.Kernel.get(this, "preference", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPreference(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "preference", value);
    }

    /**
     */
    public void setPreference(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.Object> value) {
        software.amazon.jsii.Kernel.set(this, "preference", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPricingCycle() {
        return software.amazon.jsii.Kernel.get(this, "pricingCycle", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPricingCycle(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "pricingCycle", value);
    }

    /**
     */
    public void setPricingCycle(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "pricingCycle", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getQuantity() {
        return software.amazon.jsii.Kernel.get(this, "quantity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setQuantity(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "quantity", value);
    }

    /**
     */
    public void setQuantity(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "quantity", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.marketplace.RosOrder}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.marketplace.RosOrder> {
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
        private final com.aliyun.ros.cdk.marketplace.RosOrderProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.marketplace.RosOrderProps.Builder();
        }

        /**
         * @return {@code this}
         * @param productCode This parameter is required.
         */
        public Builder productCode(final java.lang.String productCode) {
            this.props.productCode(productCode);
            return this;
        }
        /**
         * @return {@code this}
         * @param productCode This parameter is required.
         */
        public Builder productCode(final com.aliyun.ros.cdk.core.IResolvable productCode) {
            this.props.productCode(productCode);
            return this;
        }

        /**
         * @return {@code this}
         * @param skuCode This parameter is required.
         */
        public Builder skuCode(final java.lang.String skuCode) {
            this.props.skuCode(skuCode);
            return this;
        }
        /**
         * @return {@code this}
         * @param skuCode This parameter is required.
         */
        public Builder skuCode(final com.aliyun.ros.cdk.core.IResolvable skuCode) {
            this.props.skuCode(skuCode);
            return this;
        }

        /**
         * @return {@code this}
         * @param chargeType This parameter is required.
         */
        public Builder chargeType(final java.lang.String chargeType) {
            this.props.chargeType(chargeType);
            return this;
        }
        /**
         * @return {@code this}
         * @param chargeType This parameter is required.
         */
        public Builder chargeType(final com.aliyun.ros.cdk.core.IResolvable chargeType) {
            this.props.chargeType(chargeType);
            return this;
        }

        /**
         * @return {@code this}
         * @param duration This parameter is required.
         */
        public Builder duration(final java.lang.Number duration) {
            this.props.duration(duration);
            return this;
        }
        /**
         * @return {@code this}
         * @param duration This parameter is required.
         */
        public Builder duration(final com.aliyun.ros.cdk.core.IResolvable duration) {
            this.props.duration(duration);
            return this;
        }

        /**
         * @return {@code this}
         * @param preference This parameter is required.
         */
        public Builder preference(final com.aliyun.ros.cdk.core.IResolvable preference) {
            this.props.preference(preference);
            return this;
        }
        /**
         * @return {@code this}
         * @param preference This parameter is required.
         */
        public Builder preference(final java.util.Map<java.lang.String, ? extends java.lang.Object> preference) {
            this.props.preference(preference);
            return this;
        }

        /**
         * @return {@code this}
         * @param pricingCycle This parameter is required.
         */
        public Builder pricingCycle(final java.lang.String pricingCycle) {
            this.props.pricingCycle(pricingCycle);
            return this;
        }
        /**
         * @return {@code this}
         * @param pricingCycle This parameter is required.
         */
        public Builder pricingCycle(final com.aliyun.ros.cdk.core.IResolvable pricingCycle) {
            this.props.pricingCycle(pricingCycle);
            return this;
        }

        /**
         * @return {@code this}
         * @param quantity This parameter is required.
         */
        public Builder quantity(final java.lang.Number quantity) {
            this.props.quantity(quantity);
            return this;
        }
        /**
         * @return {@code this}
         * @param quantity This parameter is required.
         */
        public Builder quantity(final com.aliyun.ros.cdk.core.IResolvable quantity) {
            this.props.quantity(quantity);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.marketplace.RosOrder}.
         */
        @Override
        public com.aliyun.ros.cdk.marketplace.RosOrder build() {
            return new com.aliyun.ros.cdk.marketplace.RosOrder(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
