package com.aliyun.ros.cdk.ga;

/**
 * Properties for defining a `ALIYUN::GA::BandwidthPackage`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:33.993Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ga.$Module.class, fqn = "@alicloud/ros-cdk-ga.RosBandwidthPackageProps")
@software.amazon.jsii.Jsii.Proxy(RosBandwidthPackageProps.Jsii$Proxy.class)
public interface RosBandwidthPackageProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Number getBandwidth();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getType();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getAutoPay() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getAutoUseCoupon() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getBandwidthType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getBillingType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getCbnGeographicRegionIdA() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getCbnGeographicRegionIdB() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getChargeType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDuration() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getPricingCycle() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getRatio() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosBandwidthPackageProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosBandwidthPackageProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosBandwidthPackageProps> {
        private java.lang.Number bandwidth;
        private java.lang.String type;
        private java.lang.String autoPay;
        private java.lang.String autoUseCoupon;
        private java.lang.String bandwidthType;
        private java.lang.String billingType;
        private java.lang.String cbnGeographicRegionIdA;
        private java.lang.String cbnGeographicRegionIdB;
        private java.lang.String chargeType;
        private java.lang.String duration;
        private java.lang.String pricingCycle;
        private java.lang.String ratio;

        /**
         * Sets the value of {@link RosBandwidthPackageProps#getBandwidth}
         * @param bandwidth the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder bandwidth(java.lang.Number bandwidth) {
            this.bandwidth = bandwidth;
            return this;
        }

        /**
         * Sets the value of {@link RosBandwidthPackageProps#getType}
         * @param type the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder type(java.lang.String type) {
            this.type = type;
            return this;
        }

        /**
         * Sets the value of {@link RosBandwidthPackageProps#getAutoPay}
         * @param autoPay the value to be set.
         * @return {@code this}
         */
        public Builder autoPay(java.lang.String autoPay) {
            this.autoPay = autoPay;
            return this;
        }

        /**
         * Sets the value of {@link RosBandwidthPackageProps#getAutoUseCoupon}
         * @param autoUseCoupon the value to be set.
         * @return {@code this}
         */
        public Builder autoUseCoupon(java.lang.String autoUseCoupon) {
            this.autoUseCoupon = autoUseCoupon;
            return this;
        }

        /**
         * Sets the value of {@link RosBandwidthPackageProps#getBandwidthType}
         * @param bandwidthType the value to be set.
         * @return {@code this}
         */
        public Builder bandwidthType(java.lang.String bandwidthType) {
            this.bandwidthType = bandwidthType;
            return this;
        }

        /**
         * Sets the value of {@link RosBandwidthPackageProps#getBillingType}
         * @param billingType the value to be set.
         * @return {@code this}
         */
        public Builder billingType(java.lang.String billingType) {
            this.billingType = billingType;
            return this;
        }

        /**
         * Sets the value of {@link RosBandwidthPackageProps#getCbnGeographicRegionIdA}
         * @param cbnGeographicRegionIdA the value to be set.
         * @return {@code this}
         */
        public Builder cbnGeographicRegionIdA(java.lang.String cbnGeographicRegionIdA) {
            this.cbnGeographicRegionIdA = cbnGeographicRegionIdA;
            return this;
        }

        /**
         * Sets the value of {@link RosBandwidthPackageProps#getCbnGeographicRegionIdB}
         * @param cbnGeographicRegionIdB the value to be set.
         * @return {@code this}
         */
        public Builder cbnGeographicRegionIdB(java.lang.String cbnGeographicRegionIdB) {
            this.cbnGeographicRegionIdB = cbnGeographicRegionIdB;
            return this;
        }

        /**
         * Sets the value of {@link RosBandwidthPackageProps#getChargeType}
         * @param chargeType the value to be set.
         * @return {@code this}
         */
        public Builder chargeType(java.lang.String chargeType) {
            this.chargeType = chargeType;
            return this;
        }

        /**
         * Sets the value of {@link RosBandwidthPackageProps#getDuration}
         * @param duration the value to be set.
         * @return {@code this}
         */
        public Builder duration(java.lang.String duration) {
            this.duration = duration;
            return this;
        }

        /**
         * Sets the value of {@link RosBandwidthPackageProps#getPricingCycle}
         * @param pricingCycle the value to be set.
         * @return {@code this}
         */
        public Builder pricingCycle(java.lang.String pricingCycle) {
            this.pricingCycle = pricingCycle;
            return this;
        }

        /**
         * Sets the value of {@link RosBandwidthPackageProps#getRatio}
         * @param ratio the value to be set.
         * @return {@code this}
         */
        public Builder ratio(java.lang.String ratio) {
            this.ratio = ratio;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosBandwidthPackageProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosBandwidthPackageProps build() {
            return new Jsii$Proxy(bandwidth, type, autoPay, autoUseCoupon, bandwidthType, billingType, cbnGeographicRegionIdA, cbnGeographicRegionIdB, chargeType, duration, pricingCycle, ratio);
        }
    }

    /**
     * An implementation for {@link RosBandwidthPackageProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosBandwidthPackageProps {
        private final java.lang.Number bandwidth;
        private final java.lang.String type;
        private final java.lang.String autoPay;
        private final java.lang.String autoUseCoupon;
        private final java.lang.String bandwidthType;
        private final java.lang.String billingType;
        private final java.lang.String cbnGeographicRegionIdA;
        private final java.lang.String cbnGeographicRegionIdB;
        private final java.lang.String chargeType;
        private final java.lang.String duration;
        private final java.lang.String pricingCycle;
        private final java.lang.String ratio;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.bandwidth = software.amazon.jsii.Kernel.get(this, "bandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.autoPay = software.amazon.jsii.Kernel.get(this, "autoPay", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.autoUseCoupon = software.amazon.jsii.Kernel.get(this, "autoUseCoupon", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.bandwidthType = software.amazon.jsii.Kernel.get(this, "bandwidthType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.billingType = software.amazon.jsii.Kernel.get(this, "billingType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.cbnGeographicRegionIdA = software.amazon.jsii.Kernel.get(this, "cbnGeographicRegionIdA", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.cbnGeographicRegionIdB = software.amazon.jsii.Kernel.get(this, "cbnGeographicRegionIdB", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.chargeType = software.amazon.jsii.Kernel.get(this, "chargeType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.duration = software.amazon.jsii.Kernel.get(this, "duration", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.pricingCycle = software.amazon.jsii.Kernel.get(this, "pricingCycle", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.ratio = software.amazon.jsii.Kernel.get(this, "ratio", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.Number bandwidth, final java.lang.String type, final java.lang.String autoPay, final java.lang.String autoUseCoupon, final java.lang.String bandwidthType, final java.lang.String billingType, final java.lang.String cbnGeographicRegionIdA, final java.lang.String cbnGeographicRegionIdB, final java.lang.String chargeType, final java.lang.String duration, final java.lang.String pricingCycle, final java.lang.String ratio) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.bandwidth = java.util.Objects.requireNonNull(bandwidth, "bandwidth is required");
            this.type = java.util.Objects.requireNonNull(type, "type is required");
            this.autoPay = autoPay;
            this.autoUseCoupon = autoUseCoupon;
            this.bandwidthType = bandwidthType;
            this.billingType = billingType;
            this.cbnGeographicRegionIdA = cbnGeographicRegionIdA;
            this.cbnGeographicRegionIdB = cbnGeographicRegionIdB;
            this.chargeType = chargeType;
            this.duration = duration;
            this.pricingCycle = pricingCycle;
            this.ratio = ratio;
        }

        @Override
        public final java.lang.Number getBandwidth() {
            return this.bandwidth;
        }

        @Override
        public final java.lang.String getType() {
            return this.type;
        }

        @Override
        public final java.lang.String getAutoPay() {
            return this.autoPay;
        }

        @Override
        public final java.lang.String getAutoUseCoupon() {
            return this.autoUseCoupon;
        }

        @Override
        public final java.lang.String getBandwidthType() {
            return this.bandwidthType;
        }

        @Override
        public final java.lang.String getBillingType() {
            return this.billingType;
        }

        @Override
        public final java.lang.String getCbnGeographicRegionIdA() {
            return this.cbnGeographicRegionIdA;
        }

        @Override
        public final java.lang.String getCbnGeographicRegionIdB() {
            return this.cbnGeographicRegionIdB;
        }

        @Override
        public final java.lang.String getChargeType() {
            return this.chargeType;
        }

        @Override
        public final java.lang.String getDuration() {
            return this.duration;
        }

        @Override
        public final java.lang.String getPricingCycle() {
            return this.pricingCycle;
        }

        @Override
        public final java.lang.String getRatio() {
            return this.ratio;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("bandwidth", om.valueToTree(this.getBandwidth()));
            data.set("type", om.valueToTree(this.getType()));
            if (this.getAutoPay() != null) {
                data.set("autoPay", om.valueToTree(this.getAutoPay()));
            }
            if (this.getAutoUseCoupon() != null) {
                data.set("autoUseCoupon", om.valueToTree(this.getAutoUseCoupon()));
            }
            if (this.getBandwidthType() != null) {
                data.set("bandwidthType", om.valueToTree(this.getBandwidthType()));
            }
            if (this.getBillingType() != null) {
                data.set("billingType", om.valueToTree(this.getBillingType()));
            }
            if (this.getCbnGeographicRegionIdA() != null) {
                data.set("cbnGeographicRegionIdA", om.valueToTree(this.getCbnGeographicRegionIdA()));
            }
            if (this.getCbnGeographicRegionIdB() != null) {
                data.set("cbnGeographicRegionIdB", om.valueToTree(this.getCbnGeographicRegionIdB()));
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
            if (this.getRatio() != null) {
                data.set("ratio", om.valueToTree(this.getRatio()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ga.RosBandwidthPackageProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosBandwidthPackageProps.Jsii$Proxy that = (RosBandwidthPackageProps.Jsii$Proxy) o;

            if (!bandwidth.equals(that.bandwidth)) return false;
            if (!type.equals(that.type)) return false;
            if (this.autoPay != null ? !this.autoPay.equals(that.autoPay) : that.autoPay != null) return false;
            if (this.autoUseCoupon != null ? !this.autoUseCoupon.equals(that.autoUseCoupon) : that.autoUseCoupon != null) return false;
            if (this.bandwidthType != null ? !this.bandwidthType.equals(that.bandwidthType) : that.bandwidthType != null) return false;
            if (this.billingType != null ? !this.billingType.equals(that.billingType) : that.billingType != null) return false;
            if (this.cbnGeographicRegionIdA != null ? !this.cbnGeographicRegionIdA.equals(that.cbnGeographicRegionIdA) : that.cbnGeographicRegionIdA != null) return false;
            if (this.cbnGeographicRegionIdB != null ? !this.cbnGeographicRegionIdB.equals(that.cbnGeographicRegionIdB) : that.cbnGeographicRegionIdB != null) return false;
            if (this.chargeType != null ? !this.chargeType.equals(that.chargeType) : that.chargeType != null) return false;
            if (this.duration != null ? !this.duration.equals(that.duration) : that.duration != null) return false;
            if (this.pricingCycle != null ? !this.pricingCycle.equals(that.pricingCycle) : that.pricingCycle != null) return false;
            return this.ratio != null ? this.ratio.equals(that.ratio) : that.ratio == null;
        }

        @Override
        public final int hashCode() {
            int result = this.bandwidth.hashCode();
            result = 31 * result + (this.type.hashCode());
            result = 31 * result + (this.autoPay != null ? this.autoPay.hashCode() : 0);
            result = 31 * result + (this.autoUseCoupon != null ? this.autoUseCoupon.hashCode() : 0);
            result = 31 * result + (this.bandwidthType != null ? this.bandwidthType.hashCode() : 0);
            result = 31 * result + (this.billingType != null ? this.billingType.hashCode() : 0);
            result = 31 * result + (this.cbnGeographicRegionIdA != null ? this.cbnGeographicRegionIdA.hashCode() : 0);
            result = 31 * result + (this.cbnGeographicRegionIdB != null ? this.cbnGeographicRegionIdB.hashCode() : 0);
            result = 31 * result + (this.chargeType != null ? this.chargeType.hashCode() : 0);
            result = 31 * result + (this.duration != null ? this.duration.hashCode() : 0);
            result = 31 * result + (this.pricingCycle != null ? this.pricingCycle.hashCode() : 0);
            result = 31 * result + (this.ratio != null ? this.ratio.hashCode() : 0);
            return result;
        }
    }
}
