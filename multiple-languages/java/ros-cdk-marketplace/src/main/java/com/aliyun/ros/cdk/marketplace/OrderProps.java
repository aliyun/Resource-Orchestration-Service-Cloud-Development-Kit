package com.aliyun.ros.cdk.marketplace;

/**
 * Properties for defining a <code>Order</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-marketplace-order
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-12-26T06:30:16.792Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.marketplace.$Module.class, fqn = "@alicloud/ros-cdk-marketplace.OrderProps")
@software.amazon.jsii.Jsii.Proxy(OrderProps.Jsii$Proxy.class)
public interface OrderProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property productCode: Product code for the resource.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getProductCode();

    /**
     * Property skuCode: Sku code for the resource.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSkuCode();

    /**
     * Property chargeType: The resource charge type.
     * <p>
     * Default value is Prepaid
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getChargeType() {
        return null;
    }

    /**
     * Property duration: Duration of the resource.
     * <p>
     * If ChargeType is specified as Postpaid, this value will be ignore.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDuration() {
        return null;
    }

    /**
     * Property preference: Customized parameters.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPreference() {
        return null;
    }

    /**
     * Property pricingCycle: Price cycle of the resource.
     * <p>
     * This property has no default value. If ChargeType is specified as Postpaid, this value will be ignore.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPricingCycle() {
        return null;
    }

    /**
     * Property quantity: Resource number.
     * <p>
     * Default value is 1
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getQuantity() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link OrderProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link OrderProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<OrderProps> {
        java.lang.Object productCode;
        java.lang.Object skuCode;
        java.lang.Object chargeType;
        java.lang.Object duration;
        java.lang.Object preference;
        java.lang.Object pricingCycle;
        java.lang.Object quantity;

        /**
         * Sets the value of {@link OrderProps#getProductCode}
         * @param productCode Property productCode: Product code for the resource. This parameter is required.
         * @return {@code this}
         */
        public Builder productCode(java.lang.String productCode) {
            this.productCode = productCode;
            return this;
        }

        /**
         * Sets the value of {@link OrderProps#getProductCode}
         * @param productCode Property productCode: Product code for the resource. This parameter is required.
         * @return {@code this}
         */
        public Builder productCode(com.aliyun.ros.cdk.core.IResolvable productCode) {
            this.productCode = productCode;
            return this;
        }

        /**
         * Sets the value of {@link OrderProps#getSkuCode}
         * @param skuCode Property skuCode: Sku code for the resource. This parameter is required.
         * @return {@code this}
         */
        public Builder skuCode(java.lang.String skuCode) {
            this.skuCode = skuCode;
            return this;
        }

        /**
         * Sets the value of {@link OrderProps#getSkuCode}
         * @param skuCode Property skuCode: Sku code for the resource. This parameter is required.
         * @return {@code this}
         */
        public Builder skuCode(com.aliyun.ros.cdk.core.IResolvable skuCode) {
            this.skuCode = skuCode;
            return this;
        }

        /**
         * Sets the value of {@link OrderProps#getChargeType}
         * @param chargeType Property chargeType: The resource charge type.
         *                   Default value is Prepaid
         * @return {@code this}
         */
        public Builder chargeType(java.lang.String chargeType) {
            this.chargeType = chargeType;
            return this;
        }

        /**
         * Sets the value of {@link OrderProps#getChargeType}
         * @param chargeType Property chargeType: The resource charge type.
         *                   Default value is Prepaid
         * @return {@code this}
         */
        public Builder chargeType(com.aliyun.ros.cdk.core.IResolvable chargeType) {
            this.chargeType = chargeType;
            return this;
        }

        /**
         * Sets the value of {@link OrderProps#getDuration}
         * @param duration Property duration: Duration of the resource.
         *                 If ChargeType is specified as Postpaid, this value will be ignore.
         * @return {@code this}
         */
        public Builder duration(java.lang.Number duration) {
            this.duration = duration;
            return this;
        }

        /**
         * Sets the value of {@link OrderProps#getDuration}
         * @param duration Property duration: Duration of the resource.
         *                 If ChargeType is specified as Postpaid, this value will be ignore.
         * @return {@code this}
         */
        public Builder duration(com.aliyun.ros.cdk.core.IResolvable duration) {
            this.duration = duration;
            return this;
        }

        /**
         * Sets the value of {@link OrderProps#getPreference}
         * @param preference Property preference: Customized parameters.
         * @return {@code this}
         */
        public Builder preference(com.aliyun.ros.cdk.core.IResolvable preference) {
            this.preference = preference;
            return this;
        }

        /**
         * Sets the value of {@link OrderProps#getPreference}
         * @param preference Property preference: Customized parameters.
         * @return {@code this}
         */
        public Builder preference(java.util.Map<java.lang.String, ? extends java.lang.Object> preference) {
            this.preference = preference;
            return this;
        }

        /**
         * Sets the value of {@link OrderProps#getPricingCycle}
         * @param pricingCycle Property pricingCycle: Price cycle of the resource.
         *                     This property has no default value. If ChargeType is specified as Postpaid, this value will be ignore.
         * @return {@code this}
         */
        public Builder pricingCycle(java.lang.String pricingCycle) {
            this.pricingCycle = pricingCycle;
            return this;
        }

        /**
         * Sets the value of {@link OrderProps#getPricingCycle}
         * @param pricingCycle Property pricingCycle: Price cycle of the resource.
         *                     This property has no default value. If ChargeType is specified as Postpaid, this value will be ignore.
         * @return {@code this}
         */
        public Builder pricingCycle(com.aliyun.ros.cdk.core.IResolvable pricingCycle) {
            this.pricingCycle = pricingCycle;
            return this;
        }

        /**
         * Sets the value of {@link OrderProps#getQuantity}
         * @param quantity Property quantity: Resource number.
         *                 Default value is 1
         * @return {@code this}
         */
        public Builder quantity(java.lang.Number quantity) {
            this.quantity = quantity;
            return this;
        }

        /**
         * Sets the value of {@link OrderProps#getQuantity}
         * @param quantity Property quantity: Resource number.
         *                 Default value is 1
         * @return {@code this}
         */
        public Builder quantity(com.aliyun.ros.cdk.core.IResolvable quantity) {
            this.quantity = quantity;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link OrderProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public OrderProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link OrderProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements OrderProps {
        private final java.lang.Object productCode;
        private final java.lang.Object skuCode;
        private final java.lang.Object chargeType;
        private final java.lang.Object duration;
        private final java.lang.Object preference;
        private final java.lang.Object pricingCycle;
        private final java.lang.Object quantity;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.productCode = software.amazon.jsii.Kernel.get(this, "productCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.skuCode = software.amazon.jsii.Kernel.get(this, "skuCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.chargeType = software.amazon.jsii.Kernel.get(this, "chargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.duration = software.amazon.jsii.Kernel.get(this, "duration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.preference = software.amazon.jsii.Kernel.get(this, "preference", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.pricingCycle = software.amazon.jsii.Kernel.get(this, "pricingCycle", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.quantity = software.amazon.jsii.Kernel.get(this, "quantity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.productCode = java.util.Objects.requireNonNull(builder.productCode, "productCode is required");
            this.skuCode = java.util.Objects.requireNonNull(builder.skuCode, "skuCode is required");
            this.chargeType = builder.chargeType;
            this.duration = builder.duration;
            this.preference = builder.preference;
            this.pricingCycle = builder.pricingCycle;
            this.quantity = builder.quantity;
        }

        @Override
        public final java.lang.Object getProductCode() {
            return this.productCode;
        }

        @Override
        public final java.lang.Object getSkuCode() {
            return this.skuCode;
        }

        @Override
        public final java.lang.Object getChargeType() {
            return this.chargeType;
        }

        @Override
        public final java.lang.Object getDuration() {
            return this.duration;
        }

        @Override
        public final java.lang.Object getPreference() {
            return this.preference;
        }

        @Override
        public final java.lang.Object getPricingCycle() {
            return this.pricingCycle;
        }

        @Override
        public final java.lang.Object getQuantity() {
            return this.quantity;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("productCode", om.valueToTree(this.getProductCode()));
            data.set("skuCode", om.valueToTree(this.getSkuCode()));
            if (this.getChargeType() != null) {
                data.set("chargeType", om.valueToTree(this.getChargeType()));
            }
            if (this.getDuration() != null) {
                data.set("duration", om.valueToTree(this.getDuration()));
            }
            if (this.getPreference() != null) {
                data.set("preference", om.valueToTree(this.getPreference()));
            }
            if (this.getPricingCycle() != null) {
                data.set("pricingCycle", om.valueToTree(this.getPricingCycle()));
            }
            if (this.getQuantity() != null) {
                data.set("quantity", om.valueToTree(this.getQuantity()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-marketplace.OrderProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            OrderProps.Jsii$Proxy that = (OrderProps.Jsii$Proxy) o;

            if (!productCode.equals(that.productCode)) return false;
            if (!skuCode.equals(that.skuCode)) return false;
            if (this.chargeType != null ? !this.chargeType.equals(that.chargeType) : that.chargeType != null) return false;
            if (this.duration != null ? !this.duration.equals(that.duration) : that.duration != null) return false;
            if (this.preference != null ? !this.preference.equals(that.preference) : that.preference != null) return false;
            if (this.pricingCycle != null ? !this.pricingCycle.equals(that.pricingCycle) : that.pricingCycle != null) return false;
            return this.quantity != null ? this.quantity.equals(that.quantity) : that.quantity == null;
        }

        @Override
        public final int hashCode() {
            int result = this.productCode.hashCode();
            result = 31 * result + (this.skuCode.hashCode());
            result = 31 * result + (this.chargeType != null ? this.chargeType.hashCode() : 0);
            result = 31 * result + (this.duration != null ? this.duration.hashCode() : 0);
            result = 31 * result + (this.preference != null ? this.preference.hashCode() : 0);
            result = 31 * result + (this.pricingCycle != null ? this.pricingCycle.hashCode() : 0);
            result = 31 * result + (this.quantity != null ? this.quantity.hashCode() : 0);
            return result;
        }
    }
}
