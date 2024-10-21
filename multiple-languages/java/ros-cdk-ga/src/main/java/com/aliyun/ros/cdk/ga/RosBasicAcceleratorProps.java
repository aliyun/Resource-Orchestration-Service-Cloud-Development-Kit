package com.aliyun.ros.cdk.ga;

/**
 * Properties for defining a <code>RosBasicAccelerator</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicaccelerator
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-10-18T08:56:30.710Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ga.$Module.class, fqn = "@alicloud/ros-cdk-ga.RosBasicAcceleratorProps")
@software.amazon.jsii.Jsii.Proxy(RosBasicAcceleratorProps.Jsii$Proxy.class)
public interface RosBasicAcceleratorProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoPay() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenew() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenewDuration() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoUseCoupon() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBandwidthBillingType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getChargeType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDuration() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPricingCycle() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPromotionOptionNo() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.ga.RosBasicAccelerator.TagsProperty> getTags() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosBasicAcceleratorProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosBasicAcceleratorProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosBasicAcceleratorProps> {
        java.lang.Object autoPay;
        java.lang.Object autoRenew;
        java.lang.Object autoRenewDuration;
        java.lang.Object autoUseCoupon;
        java.lang.Object bandwidthBillingType;
        java.lang.Object chargeType;
        java.lang.Object duration;
        java.lang.Object pricingCycle;
        java.lang.Object promotionOptionNo;
        java.lang.Object resourceGroupId;
        java.util.List<com.aliyun.ros.cdk.ga.RosBasicAccelerator.TagsProperty> tags;

        /**
         * Sets the value of {@link RosBasicAcceleratorProps#getAutoPay}
         * @param autoPay the value to be set.
         * @return {@code this}
         */
        public Builder autoPay(java.lang.Boolean autoPay) {
            this.autoPay = autoPay;
            return this;
        }

        /**
         * Sets the value of {@link RosBasicAcceleratorProps#getAutoPay}
         * @param autoPay the value to be set.
         * @return {@code this}
         */
        public Builder autoPay(com.aliyun.ros.cdk.core.IResolvable autoPay) {
            this.autoPay = autoPay;
            return this;
        }

        /**
         * Sets the value of {@link RosBasicAcceleratorProps#getAutoRenew}
         * @param autoRenew the value to be set.
         * @return {@code this}
         */
        public Builder autoRenew(java.lang.Boolean autoRenew) {
            this.autoRenew = autoRenew;
            return this;
        }

        /**
         * Sets the value of {@link RosBasicAcceleratorProps#getAutoRenew}
         * @param autoRenew the value to be set.
         * @return {@code this}
         */
        public Builder autoRenew(com.aliyun.ros.cdk.core.IResolvable autoRenew) {
            this.autoRenew = autoRenew;
            return this;
        }

        /**
         * Sets the value of {@link RosBasicAcceleratorProps#getAutoRenewDuration}
         * @param autoRenewDuration the value to be set.
         * @return {@code this}
         */
        public Builder autoRenewDuration(java.lang.Number autoRenewDuration) {
            this.autoRenewDuration = autoRenewDuration;
            return this;
        }

        /**
         * Sets the value of {@link RosBasicAcceleratorProps#getAutoRenewDuration}
         * @param autoRenewDuration the value to be set.
         * @return {@code this}
         */
        public Builder autoRenewDuration(com.aliyun.ros.cdk.core.IResolvable autoRenewDuration) {
            this.autoRenewDuration = autoRenewDuration;
            return this;
        }

        /**
         * Sets the value of {@link RosBasicAcceleratorProps#getAutoUseCoupon}
         * @param autoUseCoupon the value to be set.
         * @return {@code this}
         */
        public Builder autoUseCoupon(java.lang.String autoUseCoupon) {
            this.autoUseCoupon = autoUseCoupon;
            return this;
        }

        /**
         * Sets the value of {@link RosBasicAcceleratorProps#getAutoUseCoupon}
         * @param autoUseCoupon the value to be set.
         * @return {@code this}
         */
        public Builder autoUseCoupon(com.aliyun.ros.cdk.core.IResolvable autoUseCoupon) {
            this.autoUseCoupon = autoUseCoupon;
            return this;
        }

        /**
         * Sets the value of {@link RosBasicAcceleratorProps#getBandwidthBillingType}
         * @param bandwidthBillingType the value to be set.
         * @return {@code this}
         */
        public Builder bandwidthBillingType(java.lang.String bandwidthBillingType) {
            this.bandwidthBillingType = bandwidthBillingType;
            return this;
        }

        /**
         * Sets the value of {@link RosBasicAcceleratorProps#getBandwidthBillingType}
         * @param bandwidthBillingType the value to be set.
         * @return {@code this}
         */
        public Builder bandwidthBillingType(com.aliyun.ros.cdk.core.IResolvable bandwidthBillingType) {
            this.bandwidthBillingType = bandwidthBillingType;
            return this;
        }

        /**
         * Sets the value of {@link RosBasicAcceleratorProps#getChargeType}
         * @param chargeType the value to be set.
         * @return {@code this}
         */
        public Builder chargeType(java.lang.String chargeType) {
            this.chargeType = chargeType;
            return this;
        }

        /**
         * Sets the value of {@link RosBasicAcceleratorProps#getChargeType}
         * @param chargeType the value to be set.
         * @return {@code this}
         */
        public Builder chargeType(com.aliyun.ros.cdk.core.IResolvable chargeType) {
            this.chargeType = chargeType;
            return this;
        }

        /**
         * Sets the value of {@link RosBasicAcceleratorProps#getDuration}
         * @param duration the value to be set.
         * @return {@code this}
         */
        public Builder duration(java.lang.Number duration) {
            this.duration = duration;
            return this;
        }

        /**
         * Sets the value of {@link RosBasicAcceleratorProps#getDuration}
         * @param duration the value to be set.
         * @return {@code this}
         */
        public Builder duration(com.aliyun.ros.cdk.core.IResolvable duration) {
            this.duration = duration;
            return this;
        }

        /**
         * Sets the value of {@link RosBasicAcceleratorProps#getPricingCycle}
         * @param pricingCycle the value to be set.
         * @return {@code this}
         */
        public Builder pricingCycle(java.lang.String pricingCycle) {
            this.pricingCycle = pricingCycle;
            return this;
        }

        /**
         * Sets the value of {@link RosBasicAcceleratorProps#getPricingCycle}
         * @param pricingCycle the value to be set.
         * @return {@code this}
         */
        public Builder pricingCycle(com.aliyun.ros.cdk.core.IResolvable pricingCycle) {
            this.pricingCycle = pricingCycle;
            return this;
        }

        /**
         * Sets the value of {@link RosBasicAcceleratorProps#getPromotionOptionNo}
         * @param promotionOptionNo the value to be set.
         * @return {@code this}
         */
        public Builder promotionOptionNo(java.lang.String promotionOptionNo) {
            this.promotionOptionNo = promotionOptionNo;
            return this;
        }

        /**
         * Sets the value of {@link RosBasicAcceleratorProps#getPromotionOptionNo}
         * @param promotionOptionNo the value to be set.
         * @return {@code this}
         */
        public Builder promotionOptionNo(com.aliyun.ros.cdk.core.IResolvable promotionOptionNo) {
            this.promotionOptionNo = promotionOptionNo;
            return this;
        }

        /**
         * Sets the value of {@link RosBasicAcceleratorProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosBasicAcceleratorProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosBasicAcceleratorProps#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.ga.RosBasicAccelerator.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.ga.RosBasicAccelerator.TagsProperty>)tags;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosBasicAcceleratorProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosBasicAcceleratorProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosBasicAcceleratorProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosBasicAcceleratorProps {
        private final java.lang.Object autoPay;
        private final java.lang.Object autoRenew;
        private final java.lang.Object autoRenewDuration;
        private final java.lang.Object autoUseCoupon;
        private final java.lang.Object bandwidthBillingType;
        private final java.lang.Object chargeType;
        private final java.lang.Object duration;
        private final java.lang.Object pricingCycle;
        private final java.lang.Object promotionOptionNo;
        private final java.lang.Object resourceGroupId;
        private final java.util.List<com.aliyun.ros.cdk.ga.RosBasicAccelerator.TagsProperty> tags;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.autoPay = software.amazon.jsii.Kernel.get(this, "autoPay", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoRenew = software.amazon.jsii.Kernel.get(this, "autoRenew", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoRenewDuration = software.amazon.jsii.Kernel.get(this, "autoRenewDuration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoUseCoupon = software.amazon.jsii.Kernel.get(this, "autoUseCoupon", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.bandwidthBillingType = software.amazon.jsii.Kernel.get(this, "bandwidthBillingType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.chargeType = software.amazon.jsii.Kernel.get(this, "chargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.duration = software.amazon.jsii.Kernel.get(this, "duration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.pricingCycle = software.amazon.jsii.Kernel.get(this, "pricingCycle", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.promotionOptionNo = software.amazon.jsii.Kernel.get(this, "promotionOptionNo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ga.RosBasicAccelerator.TagsProperty.class)));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.autoPay = builder.autoPay;
            this.autoRenew = builder.autoRenew;
            this.autoRenewDuration = builder.autoRenewDuration;
            this.autoUseCoupon = builder.autoUseCoupon;
            this.bandwidthBillingType = builder.bandwidthBillingType;
            this.chargeType = builder.chargeType;
            this.duration = builder.duration;
            this.pricingCycle = builder.pricingCycle;
            this.promotionOptionNo = builder.promotionOptionNo;
            this.resourceGroupId = builder.resourceGroupId;
            this.tags = (java.util.List<com.aliyun.ros.cdk.ga.RosBasicAccelerator.TagsProperty>)builder.tags;
        }

        @Override
        public final java.lang.Object getAutoPay() {
            return this.autoPay;
        }

        @Override
        public final java.lang.Object getAutoRenew() {
            return this.autoRenew;
        }

        @Override
        public final java.lang.Object getAutoRenewDuration() {
            return this.autoRenewDuration;
        }

        @Override
        public final java.lang.Object getAutoUseCoupon() {
            return this.autoUseCoupon;
        }

        @Override
        public final java.lang.Object getBandwidthBillingType() {
            return this.bandwidthBillingType;
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
        public final java.lang.Object getPricingCycle() {
            return this.pricingCycle;
        }

        @Override
        public final java.lang.Object getPromotionOptionNo() {
            return this.promotionOptionNo;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.ga.RosBasicAccelerator.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getAutoPay() != null) {
                data.set("autoPay", om.valueToTree(this.getAutoPay()));
            }
            if (this.getAutoRenew() != null) {
                data.set("autoRenew", om.valueToTree(this.getAutoRenew()));
            }
            if (this.getAutoRenewDuration() != null) {
                data.set("autoRenewDuration", om.valueToTree(this.getAutoRenewDuration()));
            }
            if (this.getAutoUseCoupon() != null) {
                data.set("autoUseCoupon", om.valueToTree(this.getAutoUseCoupon()));
            }
            if (this.getBandwidthBillingType() != null) {
                data.set("bandwidthBillingType", om.valueToTree(this.getBandwidthBillingType()));
            }
            if (this.getChargeType() != null) {
                data.set("chargeType", om.valueToTree(this.getChargeType()));
            }
            if (this.getDuration() != null) {
                data.set("duration", om.valueToTree(this.getDuration()));
            }
            if (this.getPricingCycle() != null) {
                data.set("pricingCycle", om.valueToTree(this.getPricingCycle()));
            }
            if (this.getPromotionOptionNo() != null) {
                data.set("promotionOptionNo", om.valueToTree(this.getPromotionOptionNo()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ga.RosBasicAcceleratorProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosBasicAcceleratorProps.Jsii$Proxy that = (RosBasicAcceleratorProps.Jsii$Proxy) o;

            if (this.autoPay != null ? !this.autoPay.equals(that.autoPay) : that.autoPay != null) return false;
            if (this.autoRenew != null ? !this.autoRenew.equals(that.autoRenew) : that.autoRenew != null) return false;
            if (this.autoRenewDuration != null ? !this.autoRenewDuration.equals(that.autoRenewDuration) : that.autoRenewDuration != null) return false;
            if (this.autoUseCoupon != null ? !this.autoUseCoupon.equals(that.autoUseCoupon) : that.autoUseCoupon != null) return false;
            if (this.bandwidthBillingType != null ? !this.bandwidthBillingType.equals(that.bandwidthBillingType) : that.bandwidthBillingType != null) return false;
            if (this.chargeType != null ? !this.chargeType.equals(that.chargeType) : that.chargeType != null) return false;
            if (this.duration != null ? !this.duration.equals(that.duration) : that.duration != null) return false;
            if (this.pricingCycle != null ? !this.pricingCycle.equals(that.pricingCycle) : that.pricingCycle != null) return false;
            if (this.promotionOptionNo != null ? !this.promotionOptionNo.equals(that.promotionOptionNo) : that.promotionOptionNo != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            return this.tags != null ? this.tags.equals(that.tags) : that.tags == null;
        }

        @Override
        public final int hashCode() {
            int result = this.autoPay != null ? this.autoPay.hashCode() : 0;
            result = 31 * result + (this.autoRenew != null ? this.autoRenew.hashCode() : 0);
            result = 31 * result + (this.autoRenewDuration != null ? this.autoRenewDuration.hashCode() : 0);
            result = 31 * result + (this.autoUseCoupon != null ? this.autoUseCoupon.hashCode() : 0);
            result = 31 * result + (this.bandwidthBillingType != null ? this.bandwidthBillingType.hashCode() : 0);
            result = 31 * result + (this.chargeType != null ? this.chargeType.hashCode() : 0);
            result = 31 * result + (this.duration != null ? this.duration.hashCode() : 0);
            result = 31 * result + (this.pricingCycle != null ? this.pricingCycle.hashCode() : 0);
            result = 31 * result + (this.promotionOptionNo != null ? this.promotionOptionNo.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            return result;
        }
    }
}
