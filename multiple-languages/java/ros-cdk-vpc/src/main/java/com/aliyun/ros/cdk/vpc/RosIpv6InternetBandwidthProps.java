package com.aliyun.ros.cdk.vpc;

/**
 * Properties for defining a `ALIYUN::VPC::Ipv6InternetBandwidth`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.71.0 (build f1f58ae)", date = "2022-11-30T05:21:20.985Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.RosIpv6InternetBandwidthProps")
@software.amazon.jsii.Jsii.Proxy(RosIpv6InternetBandwidthProps.Jsii$Proxy.class)
public interface RosIpv6InternetBandwidthProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getBandwidth();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getIpv6AddressId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getIpv6GatewayId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInternetChargeType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.vpc.RosIpv6InternetBandwidth.TagsProperty> getTags() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosIpv6InternetBandwidthProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosIpv6InternetBandwidthProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosIpv6InternetBandwidthProps> {
        java.lang.Object bandwidth;
        java.lang.Object ipv6AddressId;
        java.lang.Object ipv6GatewayId;
        java.lang.Object internetChargeType;
        java.util.List<com.aliyun.ros.cdk.vpc.RosIpv6InternetBandwidth.TagsProperty> tags;

        /**
         * Sets the value of {@link RosIpv6InternetBandwidthProps#getBandwidth}
         * @param bandwidth the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder bandwidth(java.lang.Number bandwidth) {
            this.bandwidth = bandwidth;
            return this;
        }

        /**
         * Sets the value of {@link RosIpv6InternetBandwidthProps#getBandwidth}
         * @param bandwidth the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder bandwidth(com.aliyun.ros.cdk.core.IResolvable bandwidth) {
            this.bandwidth = bandwidth;
            return this;
        }

        /**
         * Sets the value of {@link RosIpv6InternetBandwidthProps#getIpv6AddressId}
         * @param ipv6AddressId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder ipv6AddressId(java.lang.String ipv6AddressId) {
            this.ipv6AddressId = ipv6AddressId;
            return this;
        }

        /**
         * Sets the value of {@link RosIpv6InternetBandwidthProps#getIpv6AddressId}
         * @param ipv6AddressId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder ipv6AddressId(com.aliyun.ros.cdk.core.IResolvable ipv6AddressId) {
            this.ipv6AddressId = ipv6AddressId;
            return this;
        }

        /**
         * Sets the value of {@link RosIpv6InternetBandwidthProps#getIpv6GatewayId}
         * @param ipv6GatewayId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder ipv6GatewayId(java.lang.String ipv6GatewayId) {
            this.ipv6GatewayId = ipv6GatewayId;
            return this;
        }

        /**
         * Sets the value of {@link RosIpv6InternetBandwidthProps#getIpv6GatewayId}
         * @param ipv6GatewayId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder ipv6GatewayId(com.aliyun.ros.cdk.core.IResolvable ipv6GatewayId) {
            this.ipv6GatewayId = ipv6GatewayId;
            return this;
        }

        /**
         * Sets the value of {@link RosIpv6InternetBandwidthProps#getInternetChargeType}
         * @param internetChargeType the value to be set.
         * @return {@code this}
         */
        public Builder internetChargeType(java.lang.String internetChargeType) {
            this.internetChargeType = internetChargeType;
            return this;
        }

        /**
         * Sets the value of {@link RosIpv6InternetBandwidthProps#getInternetChargeType}
         * @param internetChargeType the value to be set.
         * @return {@code this}
         */
        public Builder internetChargeType(com.aliyun.ros.cdk.core.IResolvable internetChargeType) {
            this.internetChargeType = internetChargeType;
            return this;
        }

        /**
         * Sets the value of {@link RosIpv6InternetBandwidthProps#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.vpc.RosIpv6InternetBandwidth.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.vpc.RosIpv6InternetBandwidth.TagsProperty>)tags;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosIpv6InternetBandwidthProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosIpv6InternetBandwidthProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosIpv6InternetBandwidthProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosIpv6InternetBandwidthProps {
        private final java.lang.Object bandwidth;
        private final java.lang.Object ipv6AddressId;
        private final java.lang.Object ipv6GatewayId;
        private final java.lang.Object internetChargeType;
        private final java.util.List<com.aliyun.ros.cdk.vpc.RosIpv6InternetBandwidth.TagsProperty> tags;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.bandwidth = software.amazon.jsii.Kernel.get(this, "bandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ipv6AddressId = software.amazon.jsii.Kernel.get(this, "ipv6AddressId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ipv6GatewayId = software.amazon.jsii.Kernel.get(this, "ipv6GatewayId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.internetChargeType = software.amazon.jsii.Kernel.get(this, "internetChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.RosIpv6InternetBandwidth.TagsProperty.class)));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.bandwidth = java.util.Objects.requireNonNull(builder.bandwidth, "bandwidth is required");
            this.ipv6AddressId = java.util.Objects.requireNonNull(builder.ipv6AddressId, "ipv6AddressId is required");
            this.ipv6GatewayId = java.util.Objects.requireNonNull(builder.ipv6GatewayId, "ipv6GatewayId is required");
            this.internetChargeType = builder.internetChargeType;
            this.tags = (java.util.List<com.aliyun.ros.cdk.vpc.RosIpv6InternetBandwidth.TagsProperty>)builder.tags;
        }

        @Override
        public final java.lang.Object getBandwidth() {
            return this.bandwidth;
        }

        @Override
        public final java.lang.Object getIpv6AddressId() {
            return this.ipv6AddressId;
        }

        @Override
        public final java.lang.Object getIpv6GatewayId() {
            return this.ipv6GatewayId;
        }

        @Override
        public final java.lang.Object getInternetChargeType() {
            return this.internetChargeType;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.vpc.RosIpv6InternetBandwidth.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("bandwidth", om.valueToTree(this.getBandwidth()));
            data.set("ipv6AddressId", om.valueToTree(this.getIpv6AddressId()));
            data.set("ipv6GatewayId", om.valueToTree(this.getIpv6GatewayId()));
            if (this.getInternetChargeType() != null) {
                data.set("internetChargeType", om.valueToTree(this.getInternetChargeType()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.RosIpv6InternetBandwidthProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosIpv6InternetBandwidthProps.Jsii$Proxy that = (RosIpv6InternetBandwidthProps.Jsii$Proxy) o;

            if (!bandwidth.equals(that.bandwidth)) return false;
            if (!ipv6AddressId.equals(that.ipv6AddressId)) return false;
            if (!ipv6GatewayId.equals(that.ipv6GatewayId)) return false;
            if (this.internetChargeType != null ? !this.internetChargeType.equals(that.internetChargeType) : that.internetChargeType != null) return false;
            return this.tags != null ? this.tags.equals(that.tags) : that.tags == null;
        }

        @Override
        public final int hashCode() {
            int result = this.bandwidth.hashCode();
            result = 31 * result + (this.ipv6AddressId.hashCode());
            result = 31 * result + (this.ipv6GatewayId.hashCode());
            result = 31 * result + (this.internetChargeType != null ? this.internetChargeType.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            return result;
        }
    }
}
