package com.aliyun.ros.cdk.ecs;

/**
 * Properties for defining a `ALIYUN::ECS::BandwidthPackage`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.30.0 (build adae23f)", date = "2021-06-21T09:47:42.927Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.BandwidthPackageProps")
@software.amazon.jsii.Jsii.Proxy(BandwidthPackageProps.Jsii$Proxy.class)
public interface BandwidthPackageProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property bandwidth: Bandwidth, [5-5000]M for PayByBandwidth, [5-50]M for PayByTraffic.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getBandwidth();

    /**
     * Property ipCount: Total internet IPs of this Bandwidth package, [1-5].
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getIpCount();

    /**
     * Property natGatewayId: Create bandwidth package for specified NAT gateway.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNatGatewayId();

    /**
     * Property bandwidthPackageName: Display name of the bandwidth package, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBandwidthPackageName() {
        return null;
    }

    /**
     * Property description: Description of the bandwidth package, [2, 256] characters.
     * <p>
     * Do not fill or empty, the default is empty.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property internetChargeType: Nat Gateway internet access charge type.Support 'PayByBandwidth' and 'PayByTraffic' only. Default is PayByTraffic.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInternetChargeType() {
        return null;
    }

    /**
     * Property zoneId: The availability zone where the bandwidth package will be created.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getZoneId() {
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
        private java.lang.Object bandwidth;
        private java.lang.Object ipCount;
        private java.lang.Object natGatewayId;
        private java.lang.Object bandwidthPackageName;
        private java.lang.Object description;
        private java.lang.Object internetChargeType;
        private java.lang.Object zoneId;

        /**
         * Sets the value of {@link BandwidthPackageProps#getBandwidth}
         * @param bandwidth Property bandwidth: Bandwidth, [5-5000]M for PayByBandwidth, [5-50]M for PayByTraffic. This parameter is required.
         * @return {@code this}
         */
        public Builder bandwidth(java.lang.Number bandwidth) {
            this.bandwidth = bandwidth;
            return this;
        }

        /**
         * Sets the value of {@link BandwidthPackageProps#getBandwidth}
         * @param bandwidth Property bandwidth: Bandwidth, [5-5000]M for PayByBandwidth, [5-50]M for PayByTraffic. This parameter is required.
         * @return {@code this}
         */
        public Builder bandwidth(com.aliyun.ros.cdk.core.IResolvable bandwidth) {
            this.bandwidth = bandwidth;
            return this;
        }

        /**
         * Sets the value of {@link BandwidthPackageProps#getIpCount}
         * @param ipCount Property ipCount: Total internet IPs of this Bandwidth package, [1-5]. This parameter is required.
         * @return {@code this}
         */
        public Builder ipCount(java.lang.Number ipCount) {
            this.ipCount = ipCount;
            return this;
        }

        /**
         * Sets the value of {@link BandwidthPackageProps#getIpCount}
         * @param ipCount Property ipCount: Total internet IPs of this Bandwidth package, [1-5]. This parameter is required.
         * @return {@code this}
         */
        public Builder ipCount(com.aliyun.ros.cdk.core.IResolvable ipCount) {
            this.ipCount = ipCount;
            return this;
        }

        /**
         * Sets the value of {@link BandwidthPackageProps#getNatGatewayId}
         * @param natGatewayId Property natGatewayId: Create bandwidth package for specified NAT gateway. This parameter is required.
         * @return {@code this}
         */
        public Builder natGatewayId(java.lang.String natGatewayId) {
            this.natGatewayId = natGatewayId;
            return this;
        }

        /**
         * Sets the value of {@link BandwidthPackageProps#getNatGatewayId}
         * @param natGatewayId Property natGatewayId: Create bandwidth package for specified NAT gateway. This parameter is required.
         * @return {@code this}
         */
        public Builder natGatewayId(com.aliyun.ros.cdk.core.IResolvable natGatewayId) {
            this.natGatewayId = natGatewayId;
            return this;
        }

        /**
         * Sets the value of {@link BandwidthPackageProps#getBandwidthPackageName}
         * @param bandwidthPackageName Property bandwidthPackageName: Display name of the bandwidth package, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.
         * @return {@code this}
         */
        public Builder bandwidthPackageName(java.lang.String bandwidthPackageName) {
            this.bandwidthPackageName = bandwidthPackageName;
            return this;
        }

        /**
         * Sets the value of {@link BandwidthPackageProps#getBandwidthPackageName}
         * @param bandwidthPackageName Property bandwidthPackageName: Display name of the bandwidth package, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.
         * @return {@code this}
         */
        public Builder bandwidthPackageName(com.aliyun.ros.cdk.core.IResolvable bandwidthPackageName) {
            this.bandwidthPackageName = bandwidthPackageName;
            return this;
        }

        /**
         * Sets the value of {@link BandwidthPackageProps#getDescription}
         * @param description Property description: Description of the bandwidth package, [2, 256] characters.
         *                    Do not fill or empty, the default is empty.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link BandwidthPackageProps#getDescription}
         * @param description Property description: Description of the bandwidth package, [2, 256] characters.
         *                    Do not fill or empty, the default is empty.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link BandwidthPackageProps#getInternetChargeType}
         * @param internetChargeType Property internetChargeType: Nat Gateway internet access charge type.Support 'PayByBandwidth' and 'PayByTraffic' only. Default is PayByTraffic.
         * @return {@code this}
         */
        public Builder internetChargeType(java.lang.String internetChargeType) {
            this.internetChargeType = internetChargeType;
            return this;
        }

        /**
         * Sets the value of {@link BandwidthPackageProps#getInternetChargeType}
         * @param internetChargeType Property internetChargeType: Nat Gateway internet access charge type.Support 'PayByBandwidth' and 'PayByTraffic' only. Default is PayByTraffic.
         * @return {@code this}
         */
        public Builder internetChargeType(com.aliyun.ros.cdk.core.IResolvable internetChargeType) {
            this.internetChargeType = internetChargeType;
            return this;
        }

        /**
         * Sets the value of {@link BandwidthPackageProps#getZoneId}
         * @param zoneId Property zoneId: The availability zone where the bandwidth package will be created.
         * @return {@code this}
         */
        public Builder zoneId(java.lang.String zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link BandwidthPackageProps#getZoneId}
         * @param zoneId Property zoneId: The availability zone where the bandwidth package will be created.
         * @return {@code this}
         */
        public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link BandwidthPackageProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public BandwidthPackageProps build() {
            return new Jsii$Proxy(bandwidth, ipCount, natGatewayId, bandwidthPackageName, description, internetChargeType, zoneId);
        }
    }

    /**
     * An implementation for {@link BandwidthPackageProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements BandwidthPackageProps {
        private final java.lang.Object bandwidth;
        private final java.lang.Object ipCount;
        private final java.lang.Object natGatewayId;
        private final java.lang.Object bandwidthPackageName;
        private final java.lang.Object description;
        private final java.lang.Object internetChargeType;
        private final java.lang.Object zoneId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.bandwidth = software.amazon.jsii.Kernel.get(this, "bandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ipCount = software.amazon.jsii.Kernel.get(this, "ipCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.natGatewayId = software.amazon.jsii.Kernel.get(this, "natGatewayId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.bandwidthPackageName = software.amazon.jsii.Kernel.get(this, "bandwidthPackageName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.internetChargeType = software.amazon.jsii.Kernel.get(this, "internetChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.Object bandwidth, final java.lang.Object ipCount, final java.lang.Object natGatewayId, final java.lang.Object bandwidthPackageName, final java.lang.Object description, final java.lang.Object internetChargeType, final java.lang.Object zoneId) {
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
        public final java.lang.Object getBandwidth() {
            return this.bandwidth;
        }

        @Override
        public final java.lang.Object getIpCount() {
            return this.ipCount;
        }

        @Override
        public final java.lang.Object getNatGatewayId() {
            return this.natGatewayId;
        }

        @Override
        public final java.lang.Object getBandwidthPackageName() {
            return this.bandwidthPackageName;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getInternetChargeType() {
            return this.internetChargeType;
        }

        @Override
        public final java.lang.Object getZoneId() {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.BandwidthPackageProps"));
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
