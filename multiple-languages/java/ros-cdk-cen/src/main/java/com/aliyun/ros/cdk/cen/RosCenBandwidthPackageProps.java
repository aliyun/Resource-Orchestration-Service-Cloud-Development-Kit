package com.aliyun.ros.cdk.cen;

/**
 * Properties for defining a `ALIYUN::CEN::CenBandwidthPackage`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.56.0 (build 55e7d15)", date = "2022-04-13T06:46:13.918Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cen.$Module.class, fqn = "@alicloud/ros-cdk-cen.RosCenBandwidthPackageProps")
@software.amazon.jsii.Jsii.Proxy(RosCenBandwidthPackageProps.Jsii$Proxy.class)
public interface RosCenBandwidthPackageProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getBandwidth();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getGeographicRegionAId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getGeographicRegionBId();

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
    default @org.jetbrains.annotations.Nullable java.lang.Object getBandwidthPackageChargeType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriod() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPricingCycle() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosCenBandwidthPackageProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosCenBandwidthPackageProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosCenBandwidthPackageProps> {
        java.lang.Object bandwidth;
        java.lang.Object geographicRegionAId;
        java.lang.Object geographicRegionBId;
        java.lang.Object autoPay;
        java.lang.Object autoRenew;
        java.lang.Object autoRenewDuration;
        java.lang.Object bandwidthPackageChargeType;
        java.lang.Object description;
        java.lang.Object name;
        java.lang.Object period;
        java.lang.Object pricingCycle;

        /**
         * Sets the value of {@link RosCenBandwidthPackageProps#getBandwidth}
         * @param bandwidth the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder bandwidth(java.lang.Number bandwidth) {
            this.bandwidth = bandwidth;
            return this;
        }

        /**
         * Sets the value of {@link RosCenBandwidthPackageProps#getBandwidth}
         * @param bandwidth the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder bandwidth(com.aliyun.ros.cdk.core.IResolvable bandwidth) {
            this.bandwidth = bandwidth;
            return this;
        }

        /**
         * Sets the value of {@link RosCenBandwidthPackageProps#getGeographicRegionAId}
         * @param geographicRegionAId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder geographicRegionAId(java.lang.String geographicRegionAId) {
            this.geographicRegionAId = geographicRegionAId;
            return this;
        }

        /**
         * Sets the value of {@link RosCenBandwidthPackageProps#getGeographicRegionAId}
         * @param geographicRegionAId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder geographicRegionAId(com.aliyun.ros.cdk.core.IResolvable geographicRegionAId) {
            this.geographicRegionAId = geographicRegionAId;
            return this;
        }

        /**
         * Sets the value of {@link RosCenBandwidthPackageProps#getGeographicRegionBId}
         * @param geographicRegionBId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder geographicRegionBId(java.lang.String geographicRegionBId) {
            this.geographicRegionBId = geographicRegionBId;
            return this;
        }

        /**
         * Sets the value of {@link RosCenBandwidthPackageProps#getGeographicRegionBId}
         * @param geographicRegionBId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder geographicRegionBId(com.aliyun.ros.cdk.core.IResolvable geographicRegionBId) {
            this.geographicRegionBId = geographicRegionBId;
            return this;
        }

        /**
         * Sets the value of {@link RosCenBandwidthPackageProps#getAutoPay}
         * @param autoPay the value to be set.
         * @return {@code this}
         */
        public Builder autoPay(java.lang.Boolean autoPay) {
            this.autoPay = autoPay;
            return this;
        }

        /**
         * Sets the value of {@link RosCenBandwidthPackageProps#getAutoPay}
         * @param autoPay the value to be set.
         * @return {@code this}
         */
        public Builder autoPay(com.aliyun.ros.cdk.core.IResolvable autoPay) {
            this.autoPay = autoPay;
            return this;
        }

        /**
         * Sets the value of {@link RosCenBandwidthPackageProps#getAutoRenew}
         * @param autoRenew the value to be set.
         * @return {@code this}
         */
        public Builder autoRenew(java.lang.Boolean autoRenew) {
            this.autoRenew = autoRenew;
            return this;
        }

        /**
         * Sets the value of {@link RosCenBandwidthPackageProps#getAutoRenew}
         * @param autoRenew the value to be set.
         * @return {@code this}
         */
        public Builder autoRenew(com.aliyun.ros.cdk.core.IResolvable autoRenew) {
            this.autoRenew = autoRenew;
            return this;
        }

        /**
         * Sets the value of {@link RosCenBandwidthPackageProps#getAutoRenewDuration}
         * @param autoRenewDuration the value to be set.
         * @return {@code this}
         */
        public Builder autoRenewDuration(java.lang.Number autoRenewDuration) {
            this.autoRenewDuration = autoRenewDuration;
            return this;
        }

        /**
         * Sets the value of {@link RosCenBandwidthPackageProps#getAutoRenewDuration}
         * @param autoRenewDuration the value to be set.
         * @return {@code this}
         */
        public Builder autoRenewDuration(com.aliyun.ros.cdk.core.IResolvable autoRenewDuration) {
            this.autoRenewDuration = autoRenewDuration;
            return this;
        }

        /**
         * Sets the value of {@link RosCenBandwidthPackageProps#getBandwidthPackageChargeType}
         * @param bandwidthPackageChargeType the value to be set.
         * @return {@code this}
         */
        public Builder bandwidthPackageChargeType(java.lang.String bandwidthPackageChargeType) {
            this.bandwidthPackageChargeType = bandwidthPackageChargeType;
            return this;
        }

        /**
         * Sets the value of {@link RosCenBandwidthPackageProps#getBandwidthPackageChargeType}
         * @param bandwidthPackageChargeType the value to be set.
         * @return {@code this}
         */
        public Builder bandwidthPackageChargeType(com.aliyun.ros.cdk.core.IResolvable bandwidthPackageChargeType) {
            this.bandwidthPackageChargeType = bandwidthPackageChargeType;
            return this;
        }

        /**
         * Sets the value of {@link RosCenBandwidthPackageProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosCenBandwidthPackageProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosCenBandwidthPackageProps#getName}
         * @param name the value to be set.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RosCenBandwidthPackageProps#getName}
         * @param name the value to be set.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RosCenBandwidthPackageProps#getPeriod}
         * @param period the value to be set.
         * @return {@code this}
         */
        public Builder period(java.lang.Number period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link RosCenBandwidthPackageProps#getPeriod}
         * @param period the value to be set.
         * @return {@code this}
         */
        public Builder period(com.aliyun.ros.cdk.core.IResolvable period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link RosCenBandwidthPackageProps#getPricingCycle}
         * @param pricingCycle the value to be set.
         * @return {@code this}
         */
        public Builder pricingCycle(java.lang.String pricingCycle) {
            this.pricingCycle = pricingCycle;
            return this;
        }

        /**
         * Sets the value of {@link RosCenBandwidthPackageProps#getPricingCycle}
         * @param pricingCycle the value to be set.
         * @return {@code this}
         */
        public Builder pricingCycle(com.aliyun.ros.cdk.core.IResolvable pricingCycle) {
            this.pricingCycle = pricingCycle;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosCenBandwidthPackageProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosCenBandwidthPackageProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosCenBandwidthPackageProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosCenBandwidthPackageProps {
        private final java.lang.Object bandwidth;
        private final java.lang.Object geographicRegionAId;
        private final java.lang.Object geographicRegionBId;
        private final java.lang.Object autoPay;
        private final java.lang.Object autoRenew;
        private final java.lang.Object autoRenewDuration;
        private final java.lang.Object bandwidthPackageChargeType;
        private final java.lang.Object description;
        private final java.lang.Object name;
        private final java.lang.Object period;
        private final java.lang.Object pricingCycle;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.bandwidth = software.amazon.jsii.Kernel.get(this, "bandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.geographicRegionAId = software.amazon.jsii.Kernel.get(this, "geographicRegionAId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.geographicRegionBId = software.amazon.jsii.Kernel.get(this, "geographicRegionBId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoPay = software.amazon.jsii.Kernel.get(this, "autoPay", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoRenew = software.amazon.jsii.Kernel.get(this, "autoRenew", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoRenewDuration = software.amazon.jsii.Kernel.get(this, "autoRenewDuration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.bandwidthPackageChargeType = software.amazon.jsii.Kernel.get(this, "bandwidthPackageChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.pricingCycle = software.amazon.jsii.Kernel.get(this, "pricingCycle", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.bandwidth = java.util.Objects.requireNonNull(builder.bandwidth, "bandwidth is required");
            this.geographicRegionAId = java.util.Objects.requireNonNull(builder.geographicRegionAId, "geographicRegionAId is required");
            this.geographicRegionBId = java.util.Objects.requireNonNull(builder.geographicRegionBId, "geographicRegionBId is required");
            this.autoPay = builder.autoPay;
            this.autoRenew = builder.autoRenew;
            this.autoRenewDuration = builder.autoRenewDuration;
            this.bandwidthPackageChargeType = builder.bandwidthPackageChargeType;
            this.description = builder.description;
            this.name = builder.name;
            this.period = builder.period;
            this.pricingCycle = builder.pricingCycle;
        }

        @Override
        public final java.lang.Object getBandwidth() {
            return this.bandwidth;
        }

        @Override
        public final java.lang.Object getGeographicRegionAId() {
            return this.geographicRegionAId;
        }

        @Override
        public final java.lang.Object getGeographicRegionBId() {
            return this.geographicRegionBId;
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
        public final java.lang.Object getBandwidthPackageChargeType() {
            return this.bandwidthPackageChargeType;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        public final java.lang.Object getPeriod() {
            return this.period;
        }

        @Override
        public final java.lang.Object getPricingCycle() {
            return this.pricingCycle;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("bandwidth", om.valueToTree(this.getBandwidth()));
            data.set("geographicRegionAId", om.valueToTree(this.getGeographicRegionAId()));
            data.set("geographicRegionBId", om.valueToTree(this.getGeographicRegionBId()));
            if (this.getAutoPay() != null) {
                data.set("autoPay", om.valueToTree(this.getAutoPay()));
            }
            if (this.getAutoRenew() != null) {
                data.set("autoRenew", om.valueToTree(this.getAutoRenew()));
            }
            if (this.getAutoRenewDuration() != null) {
                data.set("autoRenewDuration", om.valueToTree(this.getAutoRenewDuration()));
            }
            if (this.getBandwidthPackageChargeType() != null) {
                data.set("bandwidthPackageChargeType", om.valueToTree(this.getBandwidthPackageChargeType()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getName() != null) {
                data.set("name", om.valueToTree(this.getName()));
            }
            if (this.getPeriod() != null) {
                data.set("period", om.valueToTree(this.getPeriod()));
            }
            if (this.getPricingCycle() != null) {
                data.set("pricingCycle", om.valueToTree(this.getPricingCycle()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cen.RosCenBandwidthPackageProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosCenBandwidthPackageProps.Jsii$Proxy that = (RosCenBandwidthPackageProps.Jsii$Proxy) o;

            if (!bandwidth.equals(that.bandwidth)) return false;
            if (!geographicRegionAId.equals(that.geographicRegionAId)) return false;
            if (!geographicRegionBId.equals(that.geographicRegionBId)) return false;
            if (this.autoPay != null ? !this.autoPay.equals(that.autoPay) : that.autoPay != null) return false;
            if (this.autoRenew != null ? !this.autoRenew.equals(that.autoRenew) : that.autoRenew != null) return false;
            if (this.autoRenewDuration != null ? !this.autoRenewDuration.equals(that.autoRenewDuration) : that.autoRenewDuration != null) return false;
            if (this.bandwidthPackageChargeType != null ? !this.bandwidthPackageChargeType.equals(that.bandwidthPackageChargeType) : that.bandwidthPackageChargeType != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.name != null ? !this.name.equals(that.name) : that.name != null) return false;
            if (this.period != null ? !this.period.equals(that.period) : that.period != null) return false;
            return this.pricingCycle != null ? this.pricingCycle.equals(that.pricingCycle) : that.pricingCycle == null;
        }

        @Override
        public final int hashCode() {
            int result = this.bandwidth.hashCode();
            result = 31 * result + (this.geographicRegionAId.hashCode());
            result = 31 * result + (this.geographicRegionBId.hashCode());
            result = 31 * result + (this.autoPay != null ? this.autoPay.hashCode() : 0);
            result = 31 * result + (this.autoRenew != null ? this.autoRenew.hashCode() : 0);
            result = 31 * result + (this.autoRenewDuration != null ? this.autoRenewDuration.hashCode() : 0);
            result = 31 * result + (this.bandwidthPackageChargeType != null ? this.bandwidthPackageChargeType.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.name != null ? this.name.hashCode() : 0);
            result = 31 * result + (this.period != null ? this.period.hashCode() : 0);
            result = 31 * result + (this.pricingCycle != null ? this.pricingCycle.hashCode() : 0);
            return result;
        }
    }
}
