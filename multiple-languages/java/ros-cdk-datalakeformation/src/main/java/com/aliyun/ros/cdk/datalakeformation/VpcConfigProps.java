package com.aliyun.ros.cdk.datalakeformation;

/**
 * Properties for defining a <code>VpcConfig</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-datalakeformation-vpcconfig
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:54.254Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.datalakeformation.$Module.class, fqn = "@alicloud/ros-cdk-datalakeformation.VpcConfigProps")
@software.amazon.jsii.Jsii.Proxy(VpcConfigProps.Jsii$Proxy.class)
public interface VpcConfigProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property vpcId: The VPC ID to be config.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVpcId();

    /**
     * @return a {@link Builder} of {@link VpcConfigProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link VpcConfigProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<VpcConfigProps> {
        java.lang.Object vpcId;

        /**
         * Sets the value of {@link VpcConfigProps#getVpcId}
         * @param vpcId Property vpcId: The VPC ID to be config. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link VpcConfigProps#getVpcId}
         * @param vpcId Property vpcId: The VPC ID to be config. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link VpcConfigProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public VpcConfigProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link VpcConfigProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements VpcConfigProps {
        private final java.lang.Object vpcId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.vpcId = java.util.Objects.requireNonNull(builder.vpcId, "vpcId is required");
        }

        @Override
        public final java.lang.Object getVpcId() {
            return this.vpcId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("vpcId", om.valueToTree(this.getVpcId()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-datalakeformation.VpcConfigProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            VpcConfigProps.Jsii$Proxy that = (VpcConfigProps.Jsii$Proxy) o;

            return this.vpcId.equals(that.vpcId);
        }

        @Override
        public final int hashCode() {
            int result = this.vpcId.hashCode();
            return result;
        }
    }
}
