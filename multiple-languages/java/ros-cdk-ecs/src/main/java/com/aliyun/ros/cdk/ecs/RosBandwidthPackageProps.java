package com.aliyun.ros.cdk.ecs;

/**
 * Properties for defining a `ALIYUN::ECS::BandwidthPackage`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-20T10:55:02.722Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.RosBandwidthPackageProps")
@software.amazon.jsii.Jsii.Proxy(RosBandwidthPackageProps.Jsii$Proxy.class)
public interface RosBandwidthPackageProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Number getBandwidth();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Number getIpCount();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getNatGatewayId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getBandwidthPackageName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getInternetChargeType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getZoneId() {
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
        private java.lang.Number ipCount;
        private java.lang.String natGatewayId;
        private java.lang.String bandwidthPackageName;
        private java.lang.String description;
        private java.lang.String internetChargeType;
        private java.lang.String zoneId;

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
         * Sets the value of {@link RosBandwidthPackageProps#getIpCount}
         * @param ipCount the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder ipCount(java.lang.Number ipCount) {
            this.ipCount = ipCount;
            return this;
        }

        /**
         * Sets the value of {@link RosBandwidthPackageProps#getNatGatewayId}
         * @param natGatewayId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder natGatewayId(java.lang.String natGatewayId) {
            this.natGatewayId = natGatewayId;
            return this;
        }

        /**
         * Sets the value of {@link RosBandwidthPackageProps#getBandwidthPackageName}
         * @param bandwidthPackageName the value to be set.
         * @return {@code this}
         */
        public Builder bandwidthPackageName(java.lang.String bandwidthPackageName) {
            this.bandwidthPackageName = bandwidthPackageName;
            return this;
        }

        /**
         * Sets the value of {@link RosBandwidthPackageProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosBandwidthPackageProps#getInternetChargeType}
         * @param internetChargeType the value to be set.
         * @return {@code this}
         */
        public Builder internetChargeType(java.lang.String internetChargeType) {
            this.internetChargeType = internetChargeType;
            return this;
        }

        /**
         * Sets the value of {@link RosBandwidthPackageProps#getZoneId}
         * @param zoneId the value to be set.
         * @return {@code this}
         */
        public Builder zoneId(java.lang.String zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosBandwidthPackageProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosBandwidthPackageProps build() {
            return new Jsii$Proxy(bandwidth, ipCount, natGatewayId, bandwidthPackageName, description, internetChargeType, zoneId);
        }
    }

    /**
     * An implementation for {@link RosBandwidthPackageProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosBandwidthPackageProps {
        private final java.lang.Number bandwidth;
        private final java.lang.Number ipCount;
        private final java.lang.String natGatewayId;
        private final java.lang.String bandwidthPackageName;
        private final java.lang.String description;
        private final java.lang.String internetChargeType;
        private final java.lang.String zoneId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.bandwidth = software.amazon.jsii.Kernel.get(this, "bandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.ipCount = software.amazon.jsii.Kernel.get(this, "ipCount", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.natGatewayId = software.amazon.jsii.Kernel.get(this, "natGatewayId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.bandwidthPackageName = software.amazon.jsii.Kernel.get(this, "bandwidthPackageName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.internetChargeType = software.amazon.jsii.Kernel.get(this, "internetChargeType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.Number bandwidth, final java.lang.Number ipCount, final java.lang.String natGatewayId, final java.lang.String bandwidthPackageName, final java.lang.String description, final java.lang.String internetChargeType, final java.lang.String zoneId) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.bandwidth = java.util.Objects.requireNonNull(bandwidth, "bandwidth is required");
            this.ipCount = java.util.Objects.requireNonNull(ipCount, "ipCount is required");
            this.natGatewayId = java.util.Objects.requireNonNull(natGatewayId, "natGatewayId is required");
            this.bandwidthPackageName = bandwidthPackageName;
            this.description = description;
            this.internetChargeType = internetChargeType;
            this.zoneId = zoneId;
        }

        @Override
        public final java.lang.Number getBandwidth() {
            return this.bandwidth;
        }

        @Override
        public final java.lang.Number getIpCount() {
            return this.ipCount;
        }

        @Override
        public final java.lang.String getNatGatewayId() {
            return this.natGatewayId;
        }

        @Override
        public final java.lang.String getBandwidthPackageName() {
            return this.bandwidthPackageName;
        }

        @Override
        public final java.lang.String getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.String getInternetChargeType() {
            return this.internetChargeType;
        }

        @Override
        public final java.lang.String getZoneId() {
            return this.zoneId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("bandwidth", om.valueToTree(this.getBandwidth()));
            data.set("ipCount", om.valueToTree(this.getIpCount()));
            data.set("natGatewayId", om.valueToTree(this.getNatGatewayId()));
            if (this.getBandwidthPackageName() != null) {
                data.set("bandwidthPackageName", om.valueToTree(this.getBandwidthPackageName()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getInternetChargeType() != null) {
                data.set("internetChargeType", om.valueToTree(this.getInternetChargeType()));
            }
            if (this.getZoneId() != null) {
                data.set("zoneId", om.valueToTree(this.getZoneId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.RosBandwidthPackageProps"));
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
            if (!ipCount.equals(that.ipCount)) return false;
            if (!natGatewayId.equals(that.natGatewayId)) return false;
            if (this.bandwidthPackageName != null ? !this.bandwidthPackageName.equals(that.bandwidthPackageName) : that.bandwidthPackageName != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.internetChargeType != null ? !this.internetChargeType.equals(that.internetChargeType) : that.internetChargeType != null) return false;
            return this.zoneId != null ? this.zoneId.equals(that.zoneId) : that.zoneId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.bandwidth.hashCode();
            result = 31 * result + (this.ipCount.hashCode());
            result = 31 * result + (this.natGatewayId.hashCode());
            result = 31 * result + (this.bandwidthPackageName != null ? this.bandwidthPackageName.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.internetChargeType != null ? this.internetChargeType.hashCode() : 0);
            result = 31 * result + (this.zoneId != null ? this.zoneId.hashCode() : 0);
            return result;
        }
    }
}
