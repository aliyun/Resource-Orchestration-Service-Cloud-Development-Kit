package com.aliyun.ros.cdk.ecd;

/**
 * Properties for defining a <code>RosNetworkPackage</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecd-networkpackage
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-21T05:59:08.919Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecd.$Module.class, fqn = "@alicloud/ros-cdk-ecd.RosNetworkPackageProps")
@software.amazon.jsii.Jsii.Proxy(RosNetworkPackageProps.Jsii$Proxy.class)
public interface RosNetworkPackageProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getBandwidth();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getOfficeSiteId();

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
    default @org.jetbrains.annotations.Nullable java.lang.Object getInternetChargeType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPayType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriod() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriodUnit() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPromotionId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosNetworkPackageProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosNetworkPackageProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosNetworkPackageProps> {
        java.lang.Object bandwidth;
        java.lang.Object officeSiteId;
        java.lang.Object autoPay;
        java.lang.Object autoRenew;
        java.lang.Object internetChargeType;
        java.lang.Object payType;
        java.lang.Object period;
        java.lang.Object periodUnit;
        java.lang.Object promotionId;

        /**
         * Sets the value of {@link RosNetworkPackageProps#getBandwidth}
         * @param bandwidth the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder bandwidth(java.lang.Number bandwidth) {
            this.bandwidth = bandwidth;
            return this;
        }

        /**
         * Sets the value of {@link RosNetworkPackageProps#getBandwidth}
         * @param bandwidth the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder bandwidth(com.aliyun.ros.cdk.core.IResolvable bandwidth) {
            this.bandwidth = bandwidth;
            return this;
        }

        /**
         * Sets the value of {@link RosNetworkPackageProps#getOfficeSiteId}
         * @param officeSiteId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder officeSiteId(java.lang.String officeSiteId) {
            this.officeSiteId = officeSiteId;
            return this;
        }

        /**
         * Sets the value of {@link RosNetworkPackageProps#getOfficeSiteId}
         * @param officeSiteId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder officeSiteId(com.aliyun.ros.cdk.core.IResolvable officeSiteId) {
            this.officeSiteId = officeSiteId;
            return this;
        }

        /**
         * Sets the value of {@link RosNetworkPackageProps#getAutoPay}
         * @param autoPay the value to be set.
         * @return {@code this}
         */
        public Builder autoPay(java.lang.Boolean autoPay) {
            this.autoPay = autoPay;
            return this;
        }

        /**
         * Sets the value of {@link RosNetworkPackageProps#getAutoPay}
         * @param autoPay the value to be set.
         * @return {@code this}
         */
        public Builder autoPay(com.aliyun.ros.cdk.core.IResolvable autoPay) {
            this.autoPay = autoPay;
            return this;
        }

        /**
         * Sets the value of {@link RosNetworkPackageProps#getAutoRenew}
         * @param autoRenew the value to be set.
         * @return {@code this}
         */
        public Builder autoRenew(java.lang.Boolean autoRenew) {
            this.autoRenew = autoRenew;
            return this;
        }

        /**
         * Sets the value of {@link RosNetworkPackageProps#getAutoRenew}
         * @param autoRenew the value to be set.
         * @return {@code this}
         */
        public Builder autoRenew(com.aliyun.ros.cdk.core.IResolvable autoRenew) {
            this.autoRenew = autoRenew;
            return this;
        }

        /**
         * Sets the value of {@link RosNetworkPackageProps#getInternetChargeType}
         * @param internetChargeType the value to be set.
         * @return {@code this}
         */
        public Builder internetChargeType(java.lang.String internetChargeType) {
            this.internetChargeType = internetChargeType;
            return this;
        }

        /**
         * Sets the value of {@link RosNetworkPackageProps#getInternetChargeType}
         * @param internetChargeType the value to be set.
         * @return {@code this}
         */
        public Builder internetChargeType(com.aliyun.ros.cdk.core.IResolvable internetChargeType) {
            this.internetChargeType = internetChargeType;
            return this;
        }

        /**
         * Sets the value of {@link RosNetworkPackageProps#getPayType}
         * @param payType the value to be set.
         * @return {@code this}
         */
        public Builder payType(java.lang.String payType) {
            this.payType = payType;
            return this;
        }

        /**
         * Sets the value of {@link RosNetworkPackageProps#getPayType}
         * @param payType the value to be set.
         * @return {@code this}
         */
        public Builder payType(com.aliyun.ros.cdk.core.IResolvable payType) {
            this.payType = payType;
            return this;
        }

        /**
         * Sets the value of {@link RosNetworkPackageProps#getPeriod}
         * @param period the value to be set.
         * @return {@code this}
         */
        public Builder period(java.lang.Number period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link RosNetworkPackageProps#getPeriod}
         * @param period the value to be set.
         * @return {@code this}
         */
        public Builder period(com.aliyun.ros.cdk.core.IResolvable period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link RosNetworkPackageProps#getPeriodUnit}
         * @param periodUnit the value to be set.
         * @return {@code this}
         */
        public Builder periodUnit(java.lang.String periodUnit) {
            this.periodUnit = periodUnit;
            return this;
        }

        /**
         * Sets the value of {@link RosNetworkPackageProps#getPeriodUnit}
         * @param periodUnit the value to be set.
         * @return {@code this}
         */
        public Builder periodUnit(com.aliyun.ros.cdk.core.IResolvable periodUnit) {
            this.periodUnit = periodUnit;
            return this;
        }

        /**
         * Sets the value of {@link RosNetworkPackageProps#getPromotionId}
         * @param promotionId the value to be set.
         * @return {@code this}
         */
        public Builder promotionId(java.lang.String promotionId) {
            this.promotionId = promotionId;
            return this;
        }

        /**
         * Sets the value of {@link RosNetworkPackageProps#getPromotionId}
         * @param promotionId the value to be set.
         * @return {@code this}
         */
        public Builder promotionId(com.aliyun.ros.cdk.core.IResolvable promotionId) {
            this.promotionId = promotionId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosNetworkPackageProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosNetworkPackageProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosNetworkPackageProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosNetworkPackageProps {
        private final java.lang.Object bandwidth;
        private final java.lang.Object officeSiteId;
        private final java.lang.Object autoPay;
        private final java.lang.Object autoRenew;
        private final java.lang.Object internetChargeType;
        private final java.lang.Object payType;
        private final java.lang.Object period;
        private final java.lang.Object periodUnit;
        private final java.lang.Object promotionId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.bandwidth = software.amazon.jsii.Kernel.get(this, "bandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.officeSiteId = software.amazon.jsii.Kernel.get(this, "officeSiteId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoPay = software.amazon.jsii.Kernel.get(this, "autoPay", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoRenew = software.amazon.jsii.Kernel.get(this, "autoRenew", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.internetChargeType = software.amazon.jsii.Kernel.get(this, "internetChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.payType = software.amazon.jsii.Kernel.get(this, "payType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.periodUnit = software.amazon.jsii.Kernel.get(this, "periodUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.promotionId = software.amazon.jsii.Kernel.get(this, "promotionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.bandwidth = java.util.Objects.requireNonNull(builder.bandwidth, "bandwidth is required");
            this.officeSiteId = java.util.Objects.requireNonNull(builder.officeSiteId, "officeSiteId is required");
            this.autoPay = builder.autoPay;
            this.autoRenew = builder.autoRenew;
            this.internetChargeType = builder.internetChargeType;
            this.payType = builder.payType;
            this.period = builder.period;
            this.periodUnit = builder.periodUnit;
            this.promotionId = builder.promotionId;
        }

        @Override
        public final java.lang.Object getBandwidth() {
            return this.bandwidth;
        }

        @Override
        public final java.lang.Object getOfficeSiteId() {
            return this.officeSiteId;
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
        public final java.lang.Object getInternetChargeType() {
            return this.internetChargeType;
        }

        @Override
        public final java.lang.Object getPayType() {
            return this.payType;
        }

        @Override
        public final java.lang.Object getPeriod() {
            return this.period;
        }

        @Override
        public final java.lang.Object getPeriodUnit() {
            return this.periodUnit;
        }

        @Override
        public final java.lang.Object getPromotionId() {
            return this.promotionId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("bandwidth", om.valueToTree(this.getBandwidth()));
            data.set("officeSiteId", om.valueToTree(this.getOfficeSiteId()));
            if (this.getAutoPay() != null) {
                data.set("autoPay", om.valueToTree(this.getAutoPay()));
            }
            if (this.getAutoRenew() != null) {
                data.set("autoRenew", om.valueToTree(this.getAutoRenew()));
            }
            if (this.getInternetChargeType() != null) {
                data.set("internetChargeType", om.valueToTree(this.getInternetChargeType()));
            }
            if (this.getPayType() != null) {
                data.set("payType", om.valueToTree(this.getPayType()));
            }
            if (this.getPeriod() != null) {
                data.set("period", om.valueToTree(this.getPeriod()));
            }
            if (this.getPeriodUnit() != null) {
                data.set("periodUnit", om.valueToTree(this.getPeriodUnit()));
            }
            if (this.getPromotionId() != null) {
                data.set("promotionId", om.valueToTree(this.getPromotionId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecd.RosNetworkPackageProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosNetworkPackageProps.Jsii$Proxy that = (RosNetworkPackageProps.Jsii$Proxy) o;

            if (!bandwidth.equals(that.bandwidth)) return false;
            if (!officeSiteId.equals(that.officeSiteId)) return false;
            if (this.autoPay != null ? !this.autoPay.equals(that.autoPay) : that.autoPay != null) return false;
            if (this.autoRenew != null ? !this.autoRenew.equals(that.autoRenew) : that.autoRenew != null) return false;
            if (this.internetChargeType != null ? !this.internetChargeType.equals(that.internetChargeType) : that.internetChargeType != null) return false;
            if (this.payType != null ? !this.payType.equals(that.payType) : that.payType != null) return false;
            if (this.period != null ? !this.period.equals(that.period) : that.period != null) return false;
            if (this.periodUnit != null ? !this.periodUnit.equals(that.periodUnit) : that.periodUnit != null) return false;
            return this.promotionId != null ? this.promotionId.equals(that.promotionId) : that.promotionId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.bandwidth.hashCode();
            result = 31 * result + (this.officeSiteId.hashCode());
            result = 31 * result + (this.autoPay != null ? this.autoPay.hashCode() : 0);
            result = 31 * result + (this.autoRenew != null ? this.autoRenew.hashCode() : 0);
            result = 31 * result + (this.internetChargeType != null ? this.internetChargeType.hashCode() : 0);
            result = 31 * result + (this.payType != null ? this.payType.hashCode() : 0);
            result = 31 * result + (this.period != null ? this.period.hashCode() : 0);
            result = 31 * result + (this.periodUnit != null ? this.periodUnit.hashCode() : 0);
            result = 31 * result + (this.promotionId != null ? this.promotionId.hashCode() : 0);
            return result;
        }
    }
}
