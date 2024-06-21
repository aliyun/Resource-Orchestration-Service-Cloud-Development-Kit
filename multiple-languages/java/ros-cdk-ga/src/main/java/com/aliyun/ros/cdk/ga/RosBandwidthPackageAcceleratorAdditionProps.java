package com.aliyun.ros.cdk.ga;

/**
 * Properties for defining a <code>RosBandwidthPackageAcceleratorAddition</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-bandwidthpackageacceleratoraddition
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-21T05:59:10.206Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ga.$Module.class, fqn = "@alicloud/ros-cdk-ga.RosBandwidthPackageAcceleratorAdditionProps")
@software.amazon.jsii.Jsii.Proxy(RosBandwidthPackageAcceleratorAdditionProps.Jsii$Proxy.class)
public interface RosBandwidthPackageAcceleratorAdditionProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAcceleratorId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getBandwidthPackageId();

    /**
     * @return a {@link Builder} of {@link RosBandwidthPackageAcceleratorAdditionProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosBandwidthPackageAcceleratorAdditionProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosBandwidthPackageAcceleratorAdditionProps> {
        java.lang.Object acceleratorId;
        java.lang.Object bandwidthPackageId;

        /**
         * Sets the value of {@link RosBandwidthPackageAcceleratorAdditionProps#getAcceleratorId}
         * @param acceleratorId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder acceleratorId(java.lang.String acceleratorId) {
            this.acceleratorId = acceleratorId;
            return this;
        }

        /**
         * Sets the value of {@link RosBandwidthPackageAcceleratorAdditionProps#getAcceleratorId}
         * @param acceleratorId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder acceleratorId(com.aliyun.ros.cdk.core.IResolvable acceleratorId) {
            this.acceleratorId = acceleratorId;
            return this;
        }

        /**
         * Sets the value of {@link RosBandwidthPackageAcceleratorAdditionProps#getBandwidthPackageId}
         * @param bandwidthPackageId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder bandwidthPackageId(java.lang.String bandwidthPackageId) {
            this.bandwidthPackageId = bandwidthPackageId;
            return this;
        }

        /**
         * Sets the value of {@link RosBandwidthPackageAcceleratorAdditionProps#getBandwidthPackageId}
         * @param bandwidthPackageId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder bandwidthPackageId(com.aliyun.ros.cdk.core.IResolvable bandwidthPackageId) {
            this.bandwidthPackageId = bandwidthPackageId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosBandwidthPackageAcceleratorAdditionProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosBandwidthPackageAcceleratorAdditionProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosBandwidthPackageAcceleratorAdditionProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosBandwidthPackageAcceleratorAdditionProps {
        private final java.lang.Object acceleratorId;
        private final java.lang.Object bandwidthPackageId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.acceleratorId = software.amazon.jsii.Kernel.get(this, "acceleratorId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.bandwidthPackageId = software.amazon.jsii.Kernel.get(this, "bandwidthPackageId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.acceleratorId = java.util.Objects.requireNonNull(builder.acceleratorId, "acceleratorId is required");
            this.bandwidthPackageId = java.util.Objects.requireNonNull(builder.bandwidthPackageId, "bandwidthPackageId is required");
        }

        @Override
        public final java.lang.Object getAcceleratorId() {
            return this.acceleratorId;
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

            data.set("acceleratorId", om.valueToTree(this.getAcceleratorId()));
            data.set("bandwidthPackageId", om.valueToTree(this.getBandwidthPackageId()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ga.RosBandwidthPackageAcceleratorAdditionProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosBandwidthPackageAcceleratorAdditionProps.Jsii$Proxy that = (RosBandwidthPackageAcceleratorAdditionProps.Jsii$Proxy) o;

            if (!acceleratorId.equals(that.acceleratorId)) return false;
            return this.bandwidthPackageId.equals(that.bandwidthPackageId);
        }

        @Override
        public final int hashCode() {
            int result = this.acceleratorId.hashCode();
            result = 31 * result + (this.bandwidthPackageId.hashCode());
            return result;
        }
    }
}
