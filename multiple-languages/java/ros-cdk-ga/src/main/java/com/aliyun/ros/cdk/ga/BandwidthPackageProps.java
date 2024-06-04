package com.aliyun.ros.cdk.ga;

/**
 * Properties for defining a <code>BandwidthPackage</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-bandwidthpackage
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-04T02:47:55.675Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ga.$Module.class, fqn = "@alicloud/ros-cdk-ga.BandwidthPackageProps")
@software.amazon.jsii.Jsii.Proxy(BandwidthPackageProps.Jsii$Proxy.class)
public interface BandwidthPackageProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property bandwidth: The bandwidth provided by the bandwidth plan.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getBandwidth();

    /**
     * Property type: The type of the bandwidth plan.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getType();

    /**
     * Property autoPay: Specifies whether to enable automatic payment.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoPay() {
        return null;
    }

    /**
     * Property autoUseCoupon: The AutoUseCoupon  of the bandwidth.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoUseCoupon() {
        return null;
    }

    /**
     * Property bandwidthType: the bandwidth BandwidthType of the bandwidth.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBandwidthType() {
        return null;
    }

    /**
     * Property billingType: The BillingType of the bandwidth.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBillingType() {
        return null;
    }

    /**
     * Property cbnGeographicRegionIdA: The CbnGeographicRegionIdA  of the bandwidth.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCbnGeographicRegionIdA() {
        return null;
    }

    /**
     * Property cbnGeographicRegionIdB: The CbnGeographicRegionIdB of the bandwidth.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCbnGeographicRegionIdB() {
        return null;
    }

    /**
     * Property chargeType: The ChargeType of the bandwidth.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getChargeType() {
        return null;
    }

    /**
     * Property duration:.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDuration() {
        return null;
    }

    /**
     * Property pricingCycle:.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPricingCycle() {
        return null;
    }

    /**
     * Property ratio: The Ratio of the bandwidth.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRatio() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link BandwidthPackageProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link BandwidthPackageProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<BandwidthPackageProps> {
        java.lang.Object bandwidth;
        java.lang.Object type;
        java.lang.Object autoPay;
        java.lang.Object autoUseCoupon;
        java.lang.Object bandwidthType;
        java.lang.Object billingType;
        java.lang.Object cbnGeographicRegionIdA;
        java.lang.Object cbnGeographicRegionIdB;
        java.lang.Object chargeType;
        java.lang.Object duration;
        java.lang.Object pricingCycle;
        java.lang.Object ratio;

        /**
         * Sets the value of {@link BandwidthPackageProps#getBandwidth}
         * @param bandwidth Property bandwidth: The bandwidth provided by the bandwidth plan. This parameter is required.
         * @return {@code this}
         */
        public Builder bandwidth(java.lang.Number bandwidth) {
            this.bandwidth = bandwidth;
            return this;
        }

        /**
         * Sets the value of {@link BandwidthPackageProps#getBandwidth}
         * @param bandwidth Property bandwidth: The bandwidth provided by the bandwidth plan. This parameter is required.
         * @return {@code this}
         */
        public Builder bandwidth(com.aliyun.ros.cdk.core.IResolvable bandwidth) {
            this.bandwidth = bandwidth;
            return this;
        }

        /**
         * Sets the value of {@link BandwidthPackageProps#getType}
         * @param type Property type: The type of the bandwidth plan. This parameter is required.
         * @return {@code this}
         */
        public Builder type(java.lang.String type) {
            this.type = type;
            return this;
        }

        /**
         * Sets the value of {@link BandwidthPackageProps#getType}
         * @param type Property type: The type of the bandwidth plan. This parameter is required.
         * @return {@code this}
         */
        public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
            this.type = type;
            return this;
        }

        /**
         * Sets the value of {@link BandwidthPackageProps#getAutoPay}
         * @param autoPay Property autoPay: Specifies whether to enable automatic payment.
         * @return {@code this}
         */
        public Builder autoPay(java.lang.Boolean autoPay) {
            this.autoPay = autoPay;
            return this;
        }

        /**
         * Sets the value of {@link BandwidthPackageProps#getAutoPay}
         * @param autoPay Property autoPay: Specifies whether to enable automatic payment.
         * @return {@code this}
         */
        public Builder autoPay(com.aliyun.ros.cdk.core.IResolvable autoPay) {
            this.autoPay = autoPay;
            return this;
        }

        /**
         * Sets the value of {@link BandwidthPackageProps#getAutoUseCoupon}
         * @param autoUseCoupon Property autoUseCoupon: The AutoUseCoupon  of the bandwidth.
         * @return {@code this}
         */
        public Builder autoUseCoupon(java.lang.String autoUseCoupon) {
            this.autoUseCoupon = autoUseCoupon;
            return this;
        }

        /**
         * Sets the value of {@link BandwidthPackageProps#getAutoUseCoupon}
         * @param autoUseCoupon Property autoUseCoupon: The AutoUseCoupon  of the bandwidth.
         * @return {@code this}
         */
        public Builder autoUseCoupon(com.aliyun.ros.cdk.core.IResolvable autoUseCoupon) {
            this.autoUseCoupon = autoUseCoupon;
            return this;
        }

        /**
         * Sets the value of {@link BandwidthPackageProps#getBandwidthType}
         * @param bandwidthType Property bandwidthType: the bandwidth BandwidthType of the bandwidth.
         * @return {@code this}
         */
        public Builder bandwidthType(java.lang.String bandwidthType) {
            this.bandwidthType = bandwidthType;
            return this;
        }

        /**
         * Sets the value of {@link BandwidthPackageProps#getBandwidthType}
         * @param bandwidthType Property bandwidthType: the bandwidth BandwidthType of the bandwidth.
         * @return {@code this}
         */
        public Builder bandwidthType(com.aliyun.ros.cdk.core.IResolvable bandwidthType) {
            this.bandwidthType = bandwidthType;
            return this;
        }

        /**
         * Sets the value of {@link BandwidthPackageProps#getBillingType}
         * @param billingType Property billingType: The BillingType of the bandwidth.
         * @return {@code this}
         */
        public Builder billingType(java.lang.String billingType) {
            this.billingType = billingType;
            return this;
        }

        /**
         * Sets the value of {@link BandwidthPackageProps#getBillingType}
         * @param billingType Property billingType: The BillingType of the bandwidth.
         * @return {@code this}
         */
        public Builder billingType(com.aliyun.ros.cdk.core.IResolvable billingType) {
            this.billingType = billingType;
            return this;
        }

        /**
         * Sets the value of {@link BandwidthPackageProps#getCbnGeographicRegionIdA}
         * @param cbnGeographicRegionIdA Property cbnGeographicRegionIdA: The CbnGeographicRegionIdA  of the bandwidth.
         * @return {@code this}
         */
        public Builder cbnGeographicRegionIdA(java.lang.String cbnGeographicRegionIdA) {
            this.cbnGeographicRegionIdA = cbnGeographicRegionIdA;
            return this;
        }

        /**
         * Sets the value of {@link BandwidthPackageProps#getCbnGeographicRegionIdA}
         * @param cbnGeographicRegionIdA Property cbnGeographicRegionIdA: The CbnGeographicRegionIdA  of the bandwidth.
         * @return {@code this}
         */
        public Builder cbnGeographicRegionIdA(com.aliyun.ros.cdk.core.IResolvable cbnGeographicRegionIdA) {
            this.cbnGeographicRegionIdA = cbnGeographicRegionIdA;
            return this;
        }

        /**
         * Sets the value of {@link BandwidthPackageProps#getCbnGeographicRegionIdB}
         * @param cbnGeographicRegionIdB Property cbnGeographicRegionIdB: The CbnGeographicRegionIdB of the bandwidth.
         * @return {@code this}
         */
        public Builder cbnGeographicRegionIdB(java.lang.String cbnGeographicRegionIdB) {
            this.cbnGeographicRegionIdB = cbnGeographicRegionIdB;
            return this;
        }

        /**
         * Sets the value of {@link BandwidthPackageProps#getCbnGeographicRegionIdB}
         * @param cbnGeographicRegionIdB Property cbnGeographicRegionIdB: The CbnGeographicRegionIdB of the bandwidth.
         * @return {@code this}
         */
        public Builder cbnGeographicRegionIdB(com.aliyun.ros.cdk.core.IResolvable cbnGeographicRegionIdB) {
            this.cbnGeographicRegionIdB = cbnGeographicRegionIdB;
            return this;
        }

        /**
         * Sets the value of {@link BandwidthPackageProps#getChargeType}
         * @param chargeType Property chargeType: The ChargeType of the bandwidth.
         * @return {@code this}
         */
        public Builder chargeType(java.lang.String chargeType) {
            this.chargeType = chargeType;
            return this;
        }

        /**
         * Sets the value of {@link BandwidthPackageProps#getChargeType}
         * @param chargeType Property chargeType: The ChargeType of the bandwidth.
         * @return {@code this}
         */
        public Builder chargeType(com.aliyun.ros.cdk.core.IResolvable chargeType) {
            this.chargeType = chargeType;
            return this;
        }

        /**
         * Sets the value of {@link BandwidthPackageProps#getDuration}
         * @param duration Property duration:.
         * @return {@code this}
         */
        public Builder duration(java.lang.String duration) {
            this.duration = duration;
            return this;
        }

        /**
         * Sets the value of {@link BandwidthPackageProps#getDuration}
         * @param duration Property duration:.
         * @return {@code this}
         */
        public Builder duration(com.aliyun.ros.cdk.core.IResolvable duration) {
            this.duration = duration;
            return this;
        }

        /**
         * Sets the value of {@link BandwidthPackageProps#getPricingCycle}
         * @param pricingCycle Property pricingCycle:.
         * @return {@code this}
         */
        public Builder pricingCycle(java.lang.String pricingCycle) {
            this.pricingCycle = pricingCycle;
            return this;
        }

        /**
         * Sets the value of {@link BandwidthPackageProps#getPricingCycle}
         * @param pricingCycle Property pricingCycle:.
         * @return {@code this}
         */
        public Builder pricingCycle(com.aliyun.ros.cdk.core.IResolvable pricingCycle) {
            this.pricingCycle = pricingCycle;
            return this;
        }

        /**
         * Sets the value of {@link BandwidthPackageProps#getRatio}
         * @param ratio Property ratio: The Ratio of the bandwidth.
         * @return {@code this}
         */
        public Builder ratio(java.lang.String ratio) {
            this.ratio = ratio;
            return this;
        }

        /**
         * Sets the value of {@link BandwidthPackageProps#getRatio}
         * @param ratio Property ratio: The Ratio of the bandwidth.
         * @return {@code this}
         */
        public Builder ratio(com.aliyun.ros.cdk.core.IResolvable ratio) {
            this.ratio = ratio;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link BandwidthPackageProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public BandwidthPackageProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link BandwidthPackageProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements BandwidthPackageProps {
        private final java.lang.Object bandwidth;
        private final java.lang.Object type;
        private final java.lang.Object autoPay;
        private final java.lang.Object autoUseCoupon;
        private final java.lang.Object bandwidthType;
        private final java.lang.Object billingType;
        private final java.lang.Object cbnGeographicRegionIdA;
        private final java.lang.Object cbnGeographicRegionIdB;
        private final java.lang.Object chargeType;
        private final java.lang.Object duration;
        private final java.lang.Object pricingCycle;
        private final java.lang.Object ratio;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.bandwidth = software.amazon.jsii.Kernel.get(this, "bandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoPay = software.amazon.jsii.Kernel.get(this, "autoPay", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoUseCoupon = software.amazon.jsii.Kernel.get(this, "autoUseCoupon", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.bandwidthType = software.amazon.jsii.Kernel.get(this, "bandwidthType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.billingType = software.amazon.jsii.Kernel.get(this, "billingType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.cbnGeographicRegionIdA = software.amazon.jsii.Kernel.get(this, "cbnGeographicRegionIdA", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.cbnGeographicRegionIdB = software.amazon.jsii.Kernel.get(this, "cbnGeographicRegionIdB", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.chargeType = software.amazon.jsii.Kernel.get(this, "chargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.duration = software.amazon.jsii.Kernel.get(this, "duration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.pricingCycle = software.amazon.jsii.Kernel.get(this, "pricingCycle", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ratio = software.amazon.jsii.Kernel.get(this, "ratio", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.bandwidth = java.util.Objects.requireNonNull(builder.bandwidth, "bandwidth is required");
            this.type = java.util.Objects.requireNonNull(builder.type, "type is required");
            this.autoPay = builder.autoPay;
            this.autoUseCoupon = builder.autoUseCoupon;
            this.bandwidthType = builder.bandwidthType;
            this.billingType = builder.billingType;
            this.cbnGeographicRegionIdA = builder.cbnGeographicRegionIdA;
            this.cbnGeographicRegionIdB = builder.cbnGeographicRegionIdB;
            this.chargeType = builder.chargeType;
            this.duration = builder.duration;
            this.pricingCycle = builder.pricingCycle;
            this.ratio = builder.ratio;
        }

        @Override
        public final java.lang.Object getBandwidth() {
            return this.bandwidth;
        }

        @Override
        public final java.lang.Object getType() {
            return this.type;
        }

        @Override
        public final java.lang.Object getAutoPay() {
            return this.autoPay;
        }

        @Override
        public final java.lang.Object getAutoUseCoupon() {
            return this.autoUseCoupon;
        }

        @Override
        public final java.lang.Object getBandwidthType() {
            return this.bandwidthType;
        }

        @Override
        public final java.lang.Object getBillingType() {
            return this.billingType;
        }

        @Override
        public final java.lang.Object getCbnGeographicRegionIdA() {
            return this.cbnGeographicRegionIdA;
        }

        @Override
        public final java.lang.Object getCbnGeographicRegionIdB() {
            return this.cbnGeographicRegionIdB;
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
        public final java.lang.Object getRatio() {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ga.BandwidthPackageProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            BandwidthPackageProps.Jsii$Proxy that = (BandwidthPackageProps.Jsii$Proxy) o;

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
