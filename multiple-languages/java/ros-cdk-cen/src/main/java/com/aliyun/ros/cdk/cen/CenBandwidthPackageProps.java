package com.aliyun.ros.cdk.cen;

/**
 * Properties for defining a `ALIYUN::CEN::CenBandwidthPackage`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-02-04T07:29:35.210Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cen.$Module.class, fqn = "@alicloud/ros-cdk-cen.CenBandwidthPackageProps")
@software.amazon.jsii.Jsii.Proxy(CenBandwidthPackageProps.Jsii$Proxy.class)
public interface CenBandwidthPackageProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Number getBandwidth();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getGeographicRegionAId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getGeographicRegionBId();

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
    default @org.jetbrains.annotations.Nullable java.lang.Number getAutoRenewDuration() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getBandwidthPackageChargeType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getPeriod() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getPricingCycle() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link CenBandwidthPackageProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link CenBandwidthPackageProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<CenBandwidthPackageProps> {
        private java.lang.Number bandwidth;
        private java.lang.String geographicRegionAId;
        private java.lang.String geographicRegionBId;
        private java.lang.Object autoPay;
        private java.lang.Object autoRenew;
        private java.lang.Number autoRenewDuration;
        private java.lang.String bandwidthPackageChargeType;
        private java.lang.String description;
        private java.lang.String name;
        private java.lang.Number period;
        private java.lang.String pricingCycle;

        /**
         * Sets the value of {@link CenBandwidthPackageProps#getBandwidth}
         * @param bandwidth the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder bandwidth(java.lang.Number bandwidth) {
            this.bandwidth = bandwidth;
            return this;
        }

        /**
         * Sets the value of {@link CenBandwidthPackageProps#getGeographicRegionAId}
         * @param geographicRegionAId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder geographicRegionAId(java.lang.String geographicRegionAId) {
            this.geographicRegionAId = geographicRegionAId;
            return this;
        }

        /**
         * Sets the value of {@link CenBandwidthPackageProps#getGeographicRegionBId}
         * @param geographicRegionBId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder geographicRegionBId(java.lang.String geographicRegionBId) {
            this.geographicRegionBId = geographicRegionBId;
            return this;
        }

        /**
         * Sets the value of {@link CenBandwidthPackageProps#getAutoPay}
         * @param autoPay the value to be set.
         * @return {@code this}
         */
        public Builder autoPay(java.lang.Boolean autoPay) {
            this.autoPay = autoPay;
            return this;
        }

        /**
         * Sets the value of {@link CenBandwidthPackageProps#getAutoPay}
         * @param autoPay the value to be set.
         * @return {@code this}
         */
        public Builder autoPay(com.aliyun.ros.cdk.core.IResolvable autoPay) {
            this.autoPay = autoPay;
            return this;
        }

        /**
         * Sets the value of {@link CenBandwidthPackageProps#getAutoRenew}
         * @param autoRenew the value to be set.
         * @return {@code this}
         */
        public Builder autoRenew(java.lang.Boolean autoRenew) {
            this.autoRenew = autoRenew;
            return this;
        }

        /**
         * Sets the value of {@link CenBandwidthPackageProps#getAutoRenew}
         * @param autoRenew the value to be set.
         * @return {@code this}
         */
        public Builder autoRenew(com.aliyun.ros.cdk.core.IResolvable autoRenew) {
            this.autoRenew = autoRenew;
            return this;
        }

        /**
         * Sets the value of {@link CenBandwidthPackageProps#getAutoRenewDuration}
         * @param autoRenewDuration the value to be set.
         * @return {@code this}
         */
        public Builder autoRenewDuration(java.lang.Number autoRenewDuration) {
            this.autoRenewDuration = autoRenewDuration;
            return this;
        }

        /**
         * Sets the value of {@link CenBandwidthPackageProps#getBandwidthPackageChargeType}
         * @param bandwidthPackageChargeType the value to be set.
         * @return {@code this}
         */
        public Builder bandwidthPackageChargeType(java.lang.String bandwidthPackageChargeType) {
            this.bandwidthPackageChargeType = bandwidthPackageChargeType;
            return this;
        }

        /**
         * Sets the value of {@link CenBandwidthPackageProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link CenBandwidthPackageProps#getName}
         * @param name the value to be set.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link CenBandwidthPackageProps#getPeriod}
         * @param period the value to be set.
         * @return {@code this}
         */
        public Builder period(java.lang.Number period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link CenBandwidthPackageProps#getPricingCycle}
         * @param pricingCycle the value to be set.
         * @return {@code this}
         */
        public Builder pricingCycle(java.lang.String pricingCycle) {
            this.pricingCycle = pricingCycle;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link CenBandwidthPackageProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public CenBandwidthPackageProps build() {
            return new Jsii$Proxy(bandwidth, geographicRegionAId, geographicRegionBId, autoPay, autoRenew, autoRenewDuration, bandwidthPackageChargeType, description, name, period, pricingCycle);
        }
    }

    /**
     * An implementation for {@link CenBandwidthPackageProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements CenBandwidthPackageProps {
        private final java.lang.Number bandwidth;
        private final java.lang.String geographicRegionAId;
        private final java.lang.String geographicRegionBId;
        private final java.lang.Object autoPay;
        private final java.lang.Object autoRenew;
        private final java.lang.Number autoRenewDuration;
        private final java.lang.String bandwidthPackageChargeType;
        private final java.lang.String description;
        private final java.lang.String name;
        private final java.lang.Number period;
        private final java.lang.String pricingCycle;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.bandwidth = software.amazon.jsii.Kernel.get(this, "bandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.geographicRegionAId = software.amazon.jsii.Kernel.get(this, "geographicRegionAId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.geographicRegionBId = software.amazon.jsii.Kernel.get(this, "geographicRegionBId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.autoPay = software.amazon.jsii.Kernel.get(this, "autoPay", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoRenew = software.amazon.jsii.Kernel.get(this, "autoRenew", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoRenewDuration = software.amazon.jsii.Kernel.get(this, "autoRenewDuration", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.bandwidthPackageChargeType = software.amazon.jsii.Kernel.get(this, "bandwidthPackageChargeType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.pricingCycle = software.amazon.jsii.Kernel.get(this, "pricingCycle", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.Number bandwidth, final java.lang.String geographicRegionAId, final java.lang.String geographicRegionBId, final java.lang.Object autoPay, final java.lang.Object autoRenew, final java.lang.Number autoRenewDuration, final java.lang.String bandwidthPackageChargeType, final java.lang.String description, final java.lang.String name, final java.lang.Number period, final java.lang.String pricingCycle) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.bandwidth = java.util.Objects.requireNonNull(bandwidth, "bandwidth is required");
            this.geographicRegionAId = java.util.Objects.requireNonNull(geographicRegionAId, "geographicRegionAId is required");
            this.geographicRegionBId = java.util.Objects.requireNonNull(geographicRegionBId, "geographicRegionBId is required");
            this.autoPay = autoPay;
            this.autoRenew = autoRenew;
            this.autoRenewDuration = autoRenewDuration;
            this.bandwidthPackageChargeType = bandwidthPackageChargeType;
            this.description = description;
            this.name = name;
            this.period = period;
            this.pricingCycle = pricingCycle;
        }

        @Override
        public final java.lang.Number getBandwidth() {
            return this.bandwidth;
        }

        @Override
        public final java.lang.String getGeographicRegionAId() {
            return this.geographicRegionAId;
        }

        @Override
        public final java.lang.String getGeographicRegionBId() {
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
        public final java.lang.Number getAutoRenewDuration() {
            return this.autoRenewDuration;
        }

        @Override
        public final java.lang.String getBandwidthPackageChargeType() {
            return this.bandwidthPackageChargeType;
        }

        @Override
        public final java.lang.String getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.String getName() {
            return this.name;
        }

        @Override
        public final java.lang.Number getPeriod() {
            return this.period;
        }

        @Override
        public final java.lang.String getPricingCycle() {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cen.CenBandwidthPackageProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            CenBandwidthPackageProps.Jsii$Proxy that = (CenBandwidthPackageProps.Jsii$Proxy) o;

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
