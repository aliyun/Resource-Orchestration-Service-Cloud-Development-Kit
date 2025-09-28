package com.aliyun.ros.cdk.vpc;

/**
 * Properties for defining a <code>RosNatIpCidr</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-natipcidr
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:30.547Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.RosNatIpCidrProps")
@software.amazon.jsii.Jsii.Proxy(RosNatIpCidrProps.Jsii$Proxy.class)
public interface RosNatIpCidrProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNatGatewayId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNatIpCidr();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNatIpCidrDescription();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNatIpCidrName();

    /**
     * @return a {@link Builder} of {@link RosNatIpCidrProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosNatIpCidrProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosNatIpCidrProps> {
        java.lang.Object natGatewayId;
        java.lang.Object natIpCidr;
        java.lang.Object natIpCidrDescription;
        java.lang.Object natIpCidrName;

        /**
         * Sets the value of {@link RosNatIpCidrProps#getNatGatewayId}
         * @param natGatewayId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder natGatewayId(java.lang.String natGatewayId) {
            this.natGatewayId = natGatewayId;
            return this;
        }

        /**
         * Sets the value of {@link RosNatIpCidrProps#getNatGatewayId}
         * @param natGatewayId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder natGatewayId(com.aliyun.ros.cdk.core.IResolvable natGatewayId) {
            this.natGatewayId = natGatewayId;
            return this;
        }

        /**
         * Sets the value of {@link RosNatIpCidrProps#getNatIpCidr}
         * @param natIpCidr the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder natIpCidr(java.lang.String natIpCidr) {
            this.natIpCidr = natIpCidr;
            return this;
        }

        /**
         * Sets the value of {@link RosNatIpCidrProps#getNatIpCidr}
         * @param natIpCidr the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder natIpCidr(com.aliyun.ros.cdk.core.IResolvable natIpCidr) {
            this.natIpCidr = natIpCidr;
            return this;
        }

        /**
         * Sets the value of {@link RosNatIpCidrProps#getNatIpCidrDescription}
         * @param natIpCidrDescription the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder natIpCidrDescription(java.lang.String natIpCidrDescription) {
            this.natIpCidrDescription = natIpCidrDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosNatIpCidrProps#getNatIpCidrDescription}
         * @param natIpCidrDescription the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder natIpCidrDescription(com.aliyun.ros.cdk.core.IResolvable natIpCidrDescription) {
            this.natIpCidrDescription = natIpCidrDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosNatIpCidrProps#getNatIpCidrName}
         * @param natIpCidrName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder natIpCidrName(java.lang.String natIpCidrName) {
            this.natIpCidrName = natIpCidrName;
            return this;
        }

        /**
         * Sets the value of {@link RosNatIpCidrProps#getNatIpCidrName}
         * @param natIpCidrName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder natIpCidrName(com.aliyun.ros.cdk.core.IResolvable natIpCidrName) {
            this.natIpCidrName = natIpCidrName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosNatIpCidrProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosNatIpCidrProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosNatIpCidrProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosNatIpCidrProps {
        private final java.lang.Object natGatewayId;
        private final java.lang.Object natIpCidr;
        private final java.lang.Object natIpCidrDescription;
        private final java.lang.Object natIpCidrName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.natGatewayId = software.amazon.jsii.Kernel.get(this, "natGatewayId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.natIpCidr = software.amazon.jsii.Kernel.get(this, "natIpCidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.natIpCidrDescription = software.amazon.jsii.Kernel.get(this, "natIpCidrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.natIpCidrName = software.amazon.jsii.Kernel.get(this, "natIpCidrName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.natGatewayId = java.util.Objects.requireNonNull(builder.natGatewayId, "natGatewayId is required");
            this.natIpCidr = java.util.Objects.requireNonNull(builder.natIpCidr, "natIpCidr is required");
            this.natIpCidrDescription = java.util.Objects.requireNonNull(builder.natIpCidrDescription, "natIpCidrDescription is required");
            this.natIpCidrName = java.util.Objects.requireNonNull(builder.natIpCidrName, "natIpCidrName is required");
        }

        @Override
        public final java.lang.Object getNatGatewayId() {
            return this.natGatewayId;
        }

        @Override
        public final java.lang.Object getNatIpCidr() {
            return this.natIpCidr;
        }

        @Override
        public final java.lang.Object getNatIpCidrDescription() {
            return this.natIpCidrDescription;
        }

        @Override
        public final java.lang.Object getNatIpCidrName() {
            return this.natIpCidrName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("natGatewayId", om.valueToTree(this.getNatGatewayId()));
            data.set("natIpCidr", om.valueToTree(this.getNatIpCidr()));
            data.set("natIpCidrDescription", om.valueToTree(this.getNatIpCidrDescription()));
            data.set("natIpCidrName", om.valueToTree(this.getNatIpCidrName()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.RosNatIpCidrProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosNatIpCidrProps.Jsii$Proxy that = (RosNatIpCidrProps.Jsii$Proxy) o;

            if (!natGatewayId.equals(that.natGatewayId)) return false;
            if (!natIpCidr.equals(that.natIpCidr)) return false;
            if (!natIpCidrDescription.equals(that.natIpCidrDescription)) return false;
            return this.natIpCidrName.equals(that.natIpCidrName);
        }

        @Override
        public final int hashCode() {
            int result = this.natGatewayId.hashCode();
            result = 31 * result + (this.natIpCidr.hashCode());
            result = 31 * result + (this.natIpCidrDescription.hashCode());
            result = 31 * result + (this.natIpCidrName.hashCode());
            return result;
        }
    }
}
