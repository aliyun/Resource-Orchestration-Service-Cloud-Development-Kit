package com.aliyun.ros.cdk.vpc;

/**
 * Properties for defining a <code>RosNatIp</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-natip
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-24T05:57:09.713Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.RosNatIpProps")
@software.amazon.jsii.Jsii.Proxy(RosNatIpProps.Jsii$Proxy.class)
public interface RosNatIpProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNatGatewayId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNatIpCidr();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNatIpDescription();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNatIpName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNatIp() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNatIpCidrId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosNatIpProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosNatIpProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosNatIpProps> {
        java.lang.Object natGatewayId;
        java.lang.Object natIpCidr;
        java.lang.Object natIpDescription;
        java.lang.Object natIpName;
        java.lang.Object natIp;
        java.lang.Object natIpCidrId;

        /**
         * Sets the value of {@link RosNatIpProps#getNatGatewayId}
         * @param natGatewayId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder natGatewayId(java.lang.String natGatewayId) {
            this.natGatewayId = natGatewayId;
            return this;
        }

        /**
         * Sets the value of {@link RosNatIpProps#getNatGatewayId}
         * @param natGatewayId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder natGatewayId(com.aliyun.ros.cdk.core.IResolvable natGatewayId) {
            this.natGatewayId = natGatewayId;
            return this;
        }

        /**
         * Sets the value of {@link RosNatIpProps#getNatIpCidr}
         * @param natIpCidr the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder natIpCidr(java.lang.String natIpCidr) {
            this.natIpCidr = natIpCidr;
            return this;
        }

        /**
         * Sets the value of {@link RosNatIpProps#getNatIpCidr}
         * @param natIpCidr the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder natIpCidr(com.aliyun.ros.cdk.core.IResolvable natIpCidr) {
            this.natIpCidr = natIpCidr;
            return this;
        }

        /**
         * Sets the value of {@link RosNatIpProps#getNatIpDescription}
         * @param natIpDescription the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder natIpDescription(java.lang.String natIpDescription) {
            this.natIpDescription = natIpDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosNatIpProps#getNatIpDescription}
         * @param natIpDescription the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder natIpDescription(com.aliyun.ros.cdk.core.IResolvable natIpDescription) {
            this.natIpDescription = natIpDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosNatIpProps#getNatIpName}
         * @param natIpName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder natIpName(java.lang.String natIpName) {
            this.natIpName = natIpName;
            return this;
        }

        /**
         * Sets the value of {@link RosNatIpProps#getNatIpName}
         * @param natIpName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder natIpName(com.aliyun.ros.cdk.core.IResolvable natIpName) {
            this.natIpName = natIpName;
            return this;
        }

        /**
         * Sets the value of {@link RosNatIpProps#getNatIp}
         * @param natIp the value to be set.
         * @return {@code this}
         */
        public Builder natIp(java.lang.String natIp) {
            this.natIp = natIp;
            return this;
        }

        /**
         * Sets the value of {@link RosNatIpProps#getNatIp}
         * @param natIp the value to be set.
         * @return {@code this}
         */
        public Builder natIp(com.aliyun.ros.cdk.core.IResolvable natIp) {
            this.natIp = natIp;
            return this;
        }

        /**
         * Sets the value of {@link RosNatIpProps#getNatIpCidrId}
         * @param natIpCidrId the value to be set.
         * @return {@code this}
         */
        public Builder natIpCidrId(java.lang.String natIpCidrId) {
            this.natIpCidrId = natIpCidrId;
            return this;
        }

        /**
         * Sets the value of {@link RosNatIpProps#getNatIpCidrId}
         * @param natIpCidrId the value to be set.
         * @return {@code this}
         */
        public Builder natIpCidrId(com.aliyun.ros.cdk.core.IResolvable natIpCidrId) {
            this.natIpCidrId = natIpCidrId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosNatIpProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosNatIpProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosNatIpProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosNatIpProps {
        private final java.lang.Object natGatewayId;
        private final java.lang.Object natIpCidr;
        private final java.lang.Object natIpDescription;
        private final java.lang.Object natIpName;
        private final java.lang.Object natIp;
        private final java.lang.Object natIpCidrId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.natGatewayId = software.amazon.jsii.Kernel.get(this, "natGatewayId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.natIpCidr = software.amazon.jsii.Kernel.get(this, "natIpCidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.natIpDescription = software.amazon.jsii.Kernel.get(this, "natIpDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.natIpName = software.amazon.jsii.Kernel.get(this, "natIpName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.natIp = software.amazon.jsii.Kernel.get(this, "natIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.natIpCidrId = software.amazon.jsii.Kernel.get(this, "natIpCidrId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.natGatewayId = java.util.Objects.requireNonNull(builder.natGatewayId, "natGatewayId is required");
            this.natIpCidr = java.util.Objects.requireNonNull(builder.natIpCidr, "natIpCidr is required");
            this.natIpDescription = java.util.Objects.requireNonNull(builder.natIpDescription, "natIpDescription is required");
            this.natIpName = java.util.Objects.requireNonNull(builder.natIpName, "natIpName is required");
            this.natIp = builder.natIp;
            this.natIpCidrId = builder.natIpCidrId;
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
        public final java.lang.Object getNatIpDescription() {
            return this.natIpDescription;
        }

        @Override
        public final java.lang.Object getNatIpName() {
            return this.natIpName;
        }

        @Override
        public final java.lang.Object getNatIp() {
            return this.natIp;
        }

        @Override
        public final java.lang.Object getNatIpCidrId() {
            return this.natIpCidrId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("natGatewayId", om.valueToTree(this.getNatGatewayId()));
            data.set("natIpCidr", om.valueToTree(this.getNatIpCidr()));
            data.set("natIpDescription", om.valueToTree(this.getNatIpDescription()));
            data.set("natIpName", om.valueToTree(this.getNatIpName()));
            if (this.getNatIp() != null) {
                data.set("natIp", om.valueToTree(this.getNatIp()));
            }
            if (this.getNatIpCidrId() != null) {
                data.set("natIpCidrId", om.valueToTree(this.getNatIpCidrId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.RosNatIpProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosNatIpProps.Jsii$Proxy that = (RosNatIpProps.Jsii$Proxy) o;

            if (!natGatewayId.equals(that.natGatewayId)) return false;
            if (!natIpCidr.equals(that.natIpCidr)) return false;
            if (!natIpDescription.equals(that.natIpDescription)) return false;
            if (!natIpName.equals(that.natIpName)) return false;
            if (this.natIp != null ? !this.natIp.equals(that.natIp) : that.natIp != null) return false;
            return this.natIpCidrId != null ? this.natIpCidrId.equals(that.natIpCidrId) : that.natIpCidrId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.natGatewayId.hashCode();
            result = 31 * result + (this.natIpCidr.hashCode());
            result = 31 * result + (this.natIpDescription.hashCode());
            result = 31 * result + (this.natIpName.hashCode());
            result = 31 * result + (this.natIp != null ? this.natIp.hashCode() : 0);
            result = 31 * result + (this.natIpCidrId != null ? this.natIpCidrId.hashCode() : 0);
            return result;
        }
    }
}
