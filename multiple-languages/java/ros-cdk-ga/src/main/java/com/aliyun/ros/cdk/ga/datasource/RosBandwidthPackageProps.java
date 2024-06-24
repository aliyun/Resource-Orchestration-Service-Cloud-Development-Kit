package com.aliyun.ros.cdk.ga.datasource;

/**
 * Properties for defining a <code>RosBandwidthPackage</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ga-bandwidthpackage
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-24T05:57:07.307Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ga.$Module.class, fqn = "@alicloud/ros-cdk-ga.datasource.RosBandwidthPackageProps")
@software.amazon.jsii.Jsii.Proxy(RosBandwidthPackageProps.Jsii$Proxy.class)
public interface RosBandwidthPackageProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getBandwidthPackageId();

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
        java.lang.Object bandwidthPackageId;

        /**
         * Sets the value of {@link RosBandwidthPackageProps#getBandwidthPackageId}
         * @param bandwidthPackageId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder bandwidthPackageId(java.lang.String bandwidthPackageId) {
            this.bandwidthPackageId = bandwidthPackageId;
            return this;
        }

        /**
         * Sets the value of {@link RosBandwidthPackageProps#getBandwidthPackageId}
         * @param bandwidthPackageId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder bandwidthPackageId(com.aliyun.ros.cdk.core.IResolvable bandwidthPackageId) {
            this.bandwidthPackageId = bandwidthPackageId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosBandwidthPackageProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosBandwidthPackageProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosBandwidthPackageProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosBandwidthPackageProps {
        private final java.lang.Object bandwidthPackageId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.bandwidthPackageId = software.amazon.jsii.Kernel.get(this, "bandwidthPackageId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.bandwidthPackageId = java.util.Objects.requireNonNull(builder.bandwidthPackageId, "bandwidthPackageId is required");
        }

        @Override
        public final java.lang.Object getBandwidthPackageId() {
            return this.bandwidthPackageId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("bandwidthPackageId", om.valueToTree(this.getBandwidthPackageId()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ga.datasource.RosBandwidthPackageProps"));
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

            return this.bandwidthPackageId.equals(that.bandwidthPackageId);
        }

        @Override
        public final int hashCode() {
            int result = this.bandwidthPackageId.hashCode();
            return result;
        }
    }
}
