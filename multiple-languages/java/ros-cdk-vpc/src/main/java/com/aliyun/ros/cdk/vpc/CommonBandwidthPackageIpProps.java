package com.aliyun.ros.cdk.vpc;

/**
 * Properties for defining a `ALIYUN::VPC::CommonBandwidthPackageIp`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:34.633Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.CommonBandwidthPackageIpProps")
@software.amazon.jsii.Jsii.Proxy(CommonBandwidthPackageIpProps.Jsii$Proxy.class)
public interface CommonBandwidthPackageIpProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getBandwidthPackageId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEips();

    /**
     * @return a {@link Builder} of {@link CommonBandwidthPackageIpProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link CommonBandwidthPackageIpProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<CommonBandwidthPackageIpProps> {
        private java.lang.String bandwidthPackageId;
        private java.lang.Object eips;

        /**
         * Sets the value of {@link CommonBandwidthPackageIpProps#getBandwidthPackageId}
         * @param bandwidthPackageId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder bandwidthPackageId(java.lang.String bandwidthPackageId) {
            this.bandwidthPackageId = bandwidthPackageId;
            return this;
        }

        /**
         * Sets the value of {@link CommonBandwidthPackageIpProps#getEips}
         * @param eips the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder eips(com.aliyun.ros.cdk.core.IResolvable eips) {
            this.eips = eips;
            return this;
        }

        /**
         * Sets the value of {@link CommonBandwidthPackageIpProps#getEips}
         * @param eips the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder eips(java.util.List<? extends java.lang.Object> eips) {
            this.eips = eips;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link CommonBandwidthPackageIpProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public CommonBandwidthPackageIpProps build() {
            return new Jsii$Proxy(bandwidthPackageId, eips);
        }
    }

    /**
     * An implementation for {@link CommonBandwidthPackageIpProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements CommonBandwidthPackageIpProps {
        private final java.lang.String bandwidthPackageId;
        private final java.lang.Object eips;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.bandwidthPackageId = software.amazon.jsii.Kernel.get(this, "bandwidthPackageId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.eips = software.amazon.jsii.Kernel.get(this, "eips", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String bandwidthPackageId, final java.lang.Object eips) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.bandwidthPackageId = java.util.Objects.requireNonNull(bandwidthPackageId, "bandwidthPackageId is required");
            this.eips = java.util.Objects.requireNonNull(eips, "eips is required");
        }

        @Override
        public final java.lang.String getBandwidthPackageId() {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.CommonBandwidthPackageIpProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            CommonBandwidthPackageIpProps.Jsii$Proxy that = (CommonBandwidthPackageIpProps.Jsii$Proxy) o;

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
