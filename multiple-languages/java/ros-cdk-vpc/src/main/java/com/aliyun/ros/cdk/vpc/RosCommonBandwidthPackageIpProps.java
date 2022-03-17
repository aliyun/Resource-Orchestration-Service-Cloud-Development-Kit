package com.aliyun.ros.cdk.vpc;

/**
 * Properties for defining a `ALIYUN::VPC::CommonBandwidthPackageIp`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.55.1 (build 07d2d90)", date = "2022-03-17T08:21:16.635Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.RosCommonBandwidthPackageIpProps")
@software.amazon.jsii.Jsii.Proxy(RosCommonBandwidthPackageIpProps.Jsii$Proxy.class)
public interface RosCommonBandwidthPackageIpProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getBandwidthPackageId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEips();

    /**
     * @return a {@link Builder} of {@link RosCommonBandwidthPackageIpProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosCommonBandwidthPackageIpProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosCommonBandwidthPackageIpProps> {
        java.lang.Object bandwidthPackageId;
        java.lang.Object eips;

        /**
         * Sets the value of {@link RosCommonBandwidthPackageIpProps#getBandwidthPackageId}
         * @param bandwidthPackageId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder bandwidthPackageId(java.lang.String bandwidthPackageId) {
            this.bandwidthPackageId = bandwidthPackageId;
            return this;
        }

        /**
         * Sets the value of {@link RosCommonBandwidthPackageIpProps#getBandwidthPackageId}
         * @param bandwidthPackageId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder bandwidthPackageId(com.aliyun.ros.cdk.core.IResolvable bandwidthPackageId) {
            this.bandwidthPackageId = bandwidthPackageId;
            return this;
        }

        /**
         * Sets the value of {@link RosCommonBandwidthPackageIpProps#getEips}
         * @param eips the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder eips(com.aliyun.ros.cdk.core.IResolvable eips) {
            this.eips = eips;
            return this;
        }

        /**
         * Sets the value of {@link RosCommonBandwidthPackageIpProps#getEips}
         * @param eips the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder eips(java.util.List<? extends java.lang.Object> eips) {
            this.eips = eips;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosCommonBandwidthPackageIpProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosCommonBandwidthPackageIpProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosCommonBandwidthPackageIpProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosCommonBandwidthPackageIpProps {
        private final java.lang.Object bandwidthPackageId;
        private final java.lang.Object eips;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.bandwidthPackageId = software.amazon.jsii.Kernel.get(this, "bandwidthPackageId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.eips = software.amazon.jsii.Kernel.get(this, "eips", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.bandwidthPackageId = java.util.Objects.requireNonNull(builder.bandwidthPackageId, "bandwidthPackageId is required");
            this.eips = java.util.Objects.requireNonNull(builder.eips, "eips is required");
        }

        @Override
        public final java.lang.Object getBandwidthPackageId() {
            return this.bandwidthPackageId;
        }

        @Override
        public final java.lang.Object getEips() {
            return this.eips;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("bandwidthPackageId", om.valueToTree(this.getBandwidthPackageId()));
            data.set("eips", om.valueToTree(this.getEips()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.RosCommonBandwidthPackageIpProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosCommonBandwidthPackageIpProps.Jsii$Proxy that = (RosCommonBandwidthPackageIpProps.Jsii$Proxy) o;

            if (!bandwidthPackageId.equals(that.bandwidthPackageId)) return false;
            return this.eips.equals(that.eips);
        }

        @Override
        public final int hashCode() {
            int result = this.bandwidthPackageId.hashCode();
            result = 31 * result + (this.eips.hashCode());
            return result;
        }
    }
}
