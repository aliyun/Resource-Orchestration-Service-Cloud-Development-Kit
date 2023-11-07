package com.aliyun.ros.cdk.marketplace;

/**
 * A ROS resource type:  <code>ALIYUN::MarketPlace::Order</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-11-07T09:08:36.012Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.marketplace.$Module.class, fqn = "@alicloud/ros-cdk-marketplace.Order")
public class Order extends com.aliyun.ros.cdk.core.Resource {

    protected Order(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Order(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>ALIYUN::MarketPlace::Order</code>.
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
    public Order(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.marketplace.OrderProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>ALIYUN::MarketPlace::Order</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Order(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.marketplace.OrderProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute OrderId: Order ID of created instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrOrderId() {
        return software.amazon.jsii.Kernel.get(this, "attrOrderId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.marketplace.Order}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.marketplace.Order> {
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
        private final com.aliyun.ros.cdk.marketplace.OrderProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.marketplace.OrderProps.Builder();
        }

        /**
         * Property productCode: Product code for the resource.
         * <p>
         * @return {@code this}
         * @param productCode Property productCode: Product code for the resource. This parameter is required.
         */
        public Builder productCode(final java.lang.String productCode) {
            this.props.productCode(productCode);
            return this;
        }
        /**
         * Property productCode: Product code for the resource.
         * <p>
         * @return {@code this}
         * @param productCode Property productCode: Product code for the resource. This parameter is required.
         */
        public Builder productCode(final com.aliyun.ros.cdk.core.IResolvable productCode) {
            this.props.productCode(productCode);
            return this;
        }

        /**
         * Property skuCode: Sku code for the resource.
         * <p>
         * @return {@code this}
         * @param skuCode Property skuCode: Sku code for the resource. This parameter is required.
         */
        public Builder skuCode(final java.lang.String skuCode) {
            this.props.skuCode(skuCode);
            return this;
        }
        /**
         * Property skuCode: Sku code for the resource.
         * <p>
         * @return {@code this}
         * @param skuCode Property skuCode: Sku code for the resource. This parameter is required.
         */
        public Builder skuCode(final com.aliyun.ros.cdk.core.IResolvable skuCode) {
            this.props.skuCode(skuCode);
            return this;
        }

        /**
         * Property chargeType: The resource charge type.
         * <p>
         * Default value is Prepaid
         * <p>
         * @return {@code this}
         * @param chargeType Property chargeType: The resource charge type. This parameter is required.
         */
        public Builder chargeType(final java.lang.String chargeType) {
            this.props.chargeType(chargeType);
            return this;
        }
        /**
         * Property chargeType: The resource charge type.
         * <p>
         * Default value is Prepaid
         * <p>
         * @return {@code this}
         * @param chargeType Property chargeType: The resource charge type. This parameter is required.
         */
        public Builder chargeType(final com.aliyun.ros.cdk.core.IResolvable chargeType) {
            this.props.chargeType(chargeType);
            return this;
        }

        /**
         * Property duration: Duration of the resource.
         * <p>
         * If ChargeType is specified as Postpaid, this value will be ignore.
         * <p>
         * @return {@code this}
         * @param duration Property duration: Duration of the resource. This parameter is required.
         */
        public Builder duration(final java.lang.Number duration) {
            this.props.duration(duration);
            return this;
        }
        /**
         * Property duration: Duration of the resource.
         * <p>
         * If ChargeType is specified as Postpaid, this value will be ignore.
         * <p>
         * @return {@code this}
         * @param duration Property duration: Duration of the resource. This parameter is required.
         */
        public Builder duration(final com.aliyun.ros.cdk.core.IResolvable duration) {
            this.props.duration(duration);
            return this;
        }

        /**
         * Property preference: Customized parameters.
         * <p>
         * @return {@code this}
         * @param preference Property preference: Customized parameters. This parameter is required.
         */
        public Builder preference(final com.aliyun.ros.cdk.core.IResolvable preference) {
            this.props.preference(preference);
            return this;
        }
        /**
         * Property preference: Customized parameters.
         * <p>
         * @return {@code this}
         * @param preference Property preference: Customized parameters. This parameter is required.
         */
        public Builder preference(final java.util.Map<java.lang.String, ? extends java.lang.Object> preference) {
            this.props.preference(preference);
            return this;
        }

        /**
         * Property pricingCycle: Price cycle of the resource.
         * <p>
         * This property has no default value. If ChargeType is specified as Postpaid, this value will be ignore.
         * <p>
         * @return {@code this}
         * @param pricingCycle Property pricingCycle: Price cycle of the resource. This parameter is required.
         */
        public Builder pricingCycle(final java.lang.String pricingCycle) {
            this.props.pricingCycle(pricingCycle);
            return this;
        }
        /**
         * Property pricingCycle: Price cycle of the resource.
         * <p>
         * This property has no default value. If ChargeType is specified as Postpaid, this value will be ignore.
         * <p>
         * @return {@code this}
         * @param pricingCycle Property pricingCycle: Price cycle of the resource. This parameter is required.
         */
        public Builder pricingCycle(final com.aliyun.ros.cdk.core.IResolvable pricingCycle) {
            this.props.pricingCycle(pricingCycle);
            return this;
        }

        /**
         * Property quantity: Resource number.
         * <p>
         * Default value is 1
         * <p>
         * @return {@code this}
         * @param quantity Property quantity: Resource number. This parameter is required.
         */
        public Builder quantity(final java.lang.Number quantity) {
            this.props.quantity(quantity);
            return this;
        }
        /**
         * Property quantity: Resource number.
         * <p>
         * Default value is 1
         * <p>
         * @return {@code this}
         * @param quantity Property quantity: Resource number. This parameter is required.
         */
        public Builder quantity(final com.aliyun.ros.cdk.core.IResolvable quantity) {
            this.props.quantity(quantity);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.marketplace.Order}.
         */
        @Override
        public com.aliyun.ros.cdk.marketplace.Order build() {
            return new com.aliyun.ros.cdk.marketplace.Order(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
