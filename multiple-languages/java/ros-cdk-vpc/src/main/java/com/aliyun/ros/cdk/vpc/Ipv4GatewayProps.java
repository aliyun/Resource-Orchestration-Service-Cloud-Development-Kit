package com.aliyun.ros.cdk.vpc;

/**
 * Properties for defining a <code>Ipv4Gateway</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-ipv4gateway
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-04T02:47:57.853Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.Ipv4GatewayProps")
@software.amazon.jsii.Jsii.Proxy(Ipv4GatewayProps.Jsii$Proxy.class)
public interface Ipv4GatewayProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property vpcId: The ID of the VPC associated with the IPv4 Gateway.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVpcId();

    /**
     * Property ipv4GatewayDescription: Description information.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIpv4GatewayDescription() {
        return null;
    }

    /**
     * Property ipv4GatewayName: Resource name.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIpv4GatewayName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link Ipv4GatewayProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link Ipv4GatewayProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<Ipv4GatewayProps> {
        java.lang.Object vpcId;
        java.lang.Object ipv4GatewayDescription;
        java.lang.Object ipv4GatewayName;

        /**
         * Sets the value of {@link Ipv4GatewayProps#getVpcId}
         * @param vpcId Property vpcId: The ID of the VPC associated with the IPv4 Gateway. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link Ipv4GatewayProps#getVpcId}
         * @param vpcId Property vpcId: The ID of the VPC associated with the IPv4 Gateway. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link Ipv4GatewayProps#getIpv4GatewayDescription}
         * @param ipv4GatewayDescription Property ipv4GatewayDescription: Description information.
         * @return {@code this}
         */
        public Builder ipv4GatewayDescription(java.lang.String ipv4GatewayDescription) {
            this.ipv4GatewayDescription = ipv4GatewayDescription;
            return this;
        }

        /**
         * Sets the value of {@link Ipv4GatewayProps#getIpv4GatewayDescription}
         * @param ipv4GatewayDescription Property ipv4GatewayDescription: Description information.
         * @return {@code this}
         */
        public Builder ipv4GatewayDescription(com.aliyun.ros.cdk.core.IResolvable ipv4GatewayDescription) {
            this.ipv4GatewayDescription = ipv4GatewayDescription;
            return this;
        }

        /**
         * Sets the value of {@link Ipv4GatewayProps#getIpv4GatewayName}
         * @param ipv4GatewayName Property ipv4GatewayName: Resource name.
         * @return {@code this}
         */
        public Builder ipv4GatewayName(java.lang.String ipv4GatewayName) {
            this.ipv4GatewayName = ipv4GatewayName;
            return this;
        }

        /**
         * Sets the value of {@link Ipv4GatewayProps#getIpv4GatewayName}
         * @param ipv4GatewayName Property ipv4GatewayName: Resource name.
         * @return {@code this}
         */
        public Builder ipv4GatewayName(com.aliyun.ros.cdk.core.IResolvable ipv4GatewayName) {
            this.ipv4GatewayName = ipv4GatewayName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link Ipv4GatewayProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public Ipv4GatewayProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link Ipv4GatewayProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements Ipv4GatewayProps {
        private final java.lang.Object vpcId;
        private final java.lang.Object ipv4GatewayDescription;
        private final java.lang.Object ipv4GatewayName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ipv4GatewayDescription = software.amazon.jsii.Kernel.get(this, "ipv4GatewayDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ipv4GatewayName = software.amazon.jsii.Kernel.get(this, "ipv4GatewayName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.vpcId = java.util.Objects.requireNonNull(builder.vpcId, "vpcId is required");
            this.ipv4GatewayDescription = builder.ipv4GatewayDescription;
            this.ipv4GatewayName = builder.ipv4GatewayName;
        }

        @Override
        public final java.lang.Object getVpcId() {
            return this.vpcId;
        }

        @Override
        public final java.lang.Object getIpv4GatewayDescription() {
            return this.ipv4GatewayDescription;
        }

        @Override
        public final java.lang.Object getIpv4GatewayName() {
            return this.ipv4GatewayName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("vpcId", om.valueToTree(this.getVpcId()));
            if (this.getIpv4GatewayDescription() != null) {
                data.set("ipv4GatewayDescription", om.valueToTree(this.getIpv4GatewayDescription()));
            }
            if (this.getIpv4GatewayName() != null) {
                data.set("ipv4GatewayName", om.valueToTree(this.getIpv4GatewayName()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.Ipv4GatewayProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            Ipv4GatewayProps.Jsii$Proxy that = (Ipv4GatewayProps.Jsii$Proxy) o;

            if (!vpcId.equals(that.vpcId)) return false;
            if (this.ipv4GatewayDescription != null ? !this.ipv4GatewayDescription.equals(that.ipv4GatewayDescription) : that.ipv4GatewayDescription != null) return false;
            return this.ipv4GatewayName != null ? this.ipv4GatewayName.equals(that.ipv4GatewayName) : that.ipv4GatewayName == null;
        }

        @Override
        public final int hashCode() {
            int result = this.vpcId.hashCode();
            result = 31 * result + (this.ipv4GatewayDescription != null ? this.ipv4GatewayDescription.hashCode() : 0);
            result = 31 * result + (this.ipv4GatewayName != null ? this.ipv4GatewayName.hashCode() : 0);
            return result;
        }
    }
}
