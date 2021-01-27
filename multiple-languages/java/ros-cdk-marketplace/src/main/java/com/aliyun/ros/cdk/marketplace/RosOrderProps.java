package com.aliyun.ros.cdk.marketplace;

/**
 * Properties for defining a `ALIYUN::MarketPlace::Order`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:34.071Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.marketplace.$Module.class, fqn = "@alicloud/ros-cdk-marketplace.RosOrderProps")
@software.amazon.jsii.Jsii.Proxy(RosOrderProps.Jsii$Proxy.class)
public interface RosOrderProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getProductCode();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getSkuCode();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getChargeType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getDuration() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPreference() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getPricingCycle() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getQuantity() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosOrderProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosOrderProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosOrderProps> {
        private java.lang.String productCode;
        private java.lang.String skuCode;
        private java.lang.String chargeType;
        private java.lang.Number duration;
        private java.lang.Object preference;
        private java.lang.String pricingCycle;
        private java.lang.Number quantity;

        /**
         * Sets the value of {@link RosOrderProps#getProductCode}
         * @param productCode the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder productCode(java.lang.String productCode) {
            this.productCode = productCode;
            return this;
        }

        /**
         * Sets the value of {@link RosOrderProps#getSkuCode}
         * @param skuCode the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder skuCode(java.lang.String skuCode) {
            this.skuCode = skuCode;
            return this;
        }

        /**
         * Sets the value of {@link RosOrderProps#getChargeType}
         * @param chargeType the value to be set.
         * @return {@code this}
         */
        public Builder chargeType(java.lang.String chargeType) {
            this.chargeType = chargeType;
            return this;
        }

        /**
         * Sets the value of {@link RosOrderProps#getDuration}
         * @param duration the value to be set.
         * @return {@code this}
         */
        public Builder duration(java.lang.Number duration) {
            this.duration = duration;
            return this;
        }

        /**
         * Sets the value of {@link RosOrderProps#getPreference}
         * @param preference the value to be set.
         * @return {@code this}
         */
        public Builder preference(com.aliyun.ros.cdk.core.IResolvable preference) {
            this.preference = preference;
            return this;
        }

        /**
         * Sets the value of {@link RosOrderProps#getPreference}
         * @param preference the value to be set.
         * @return {@code this}
         */
        public Builder preference(java.util.Map<java.lang.String, ? extends java.lang.Object> preference) {
            this.preference = preference;
            return this;
        }

        /**
         * Sets the value of {@link RosOrderProps#getPricingCycle}
         * @param pricingCycle the value to be set.
         * @return {@code this}
         */
        public Builder pricingCycle(java.lang.String pricingCycle) {
            this.pricingCycle = pricingCycle;
            return this;
        }

        /**
         * Sets the value of {@link RosOrderProps#getQuantity}
         * @param quantity the value to be set.
         * @return {@code this}
         */
        public Builder quantity(java.lang.Number quantity) {
            this.quantity = quantity;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosOrderProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosOrderProps build() {
            return new Jsii$Proxy(productCode, skuCode, chargeType, duration, preference, pricingCycle, quantity);
        }
    }

    /**
     * An implementation for {@link RosOrderProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosOrderProps {
        private final java.lang.String productCode;
        private final java.lang.String skuCode;
        private final java.lang.String chargeType;
        private final java.lang.Number duration;
        private final java.lang.Object preference;
        private final java.lang.String pricingCycle;
        private final java.lang.Number quantity;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.productCode = software.amazon.jsii.Kernel.get(this, "productCode", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.skuCode = software.amazon.jsii.Kernel.get(this, "skuCode", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.chargeType = software.amazon.jsii.Kernel.get(this, "chargeType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.duration = software.amazon.jsii.Kernel.get(this, "duration", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.preference = software.amazon.jsii.Kernel.get(this, "preference", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.pricingCycle = software.amazon.jsii.Kernel.get(this, "pricingCycle", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.quantity = software.amazon.jsii.Kernel.get(this, "quantity", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String productCode, final java.lang.String skuCode, final java.lang.String chargeType, final java.lang.Number duration, final java.lang.Object preference, final java.lang.String pricingCycle, final java.lang.Number quantity) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.productCode = java.util.Objects.requireNonNull(productCode, "productCode is required");
            this.skuCode = java.util.Objects.requireNonNull(skuCode, "skuCode is required");
            this.chargeType = chargeType;
            this.duration = duration;
            this.preference = preference;
            this.pricingCycle = pricingCycle;
            this.quantity = quantity;
        }

        @Override
        public final java.lang.String getProductCode() {
            return this.productCode;
        }

        @Override
        public final java.lang.String getSkuCode() {
            return this.skuCode;
        }

        @Override
        public final java.lang.String getChargeType() {
            return this.chargeType;
        }

        @Override
        public final java.lang.Number getDuration() {
            return this.duration;
        }

        @Override
        public final java.lang.Object getPreference() {
            return this.preference;
        }

        @Override
        public final java.lang.String getPricingCycle() {
            return this.pricingCycle;
        }

        @Override
        public final java.lang.Number getQuantity() {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-marketplace.RosOrderProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosOrderProps.Jsii$Proxy that = (RosOrderProps.Jsii$Proxy) o;

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
