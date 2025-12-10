package com.aliyun.ros.cdk.elasticsearchserverless;

/**
 * Properties for defining a <code>Endpoint</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-elasticsearchserverless-endpoint
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:56.209Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.elasticsearchserverless.$Module.class, fqn = "@alicloud/ros-cdk-elasticsearchserverless.EndpointProps")
@software.amazon.jsii.Jsii.Proxy(EndpointProps.Jsii$Proxy.class)
public interface EndpointProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property endpointZones: The zone configurations of the endpoint.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEndpointZones();

    /**
     * Property name: The name of the endpoint.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getName() {
        return null;
    }

    /**
     * Property securityGroupIds: A list of security groups.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityGroupIds() {
        return null;
    }

    /**
     * Property type: Endpoint type, default value: VPC.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getType() {
        return null;
    }

    /**
     * Property vpcId: The vpc id of the endpoint.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVpcId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link EndpointProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link EndpointProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<EndpointProps> {
        java.lang.Object endpointZones;
        java.lang.Object name;
        java.lang.Object securityGroupIds;
        java.lang.Object type;
        java.lang.Object vpcId;

        /**
         * Sets the value of {@link EndpointProps#getEndpointZones}
         * @param endpointZones Property endpointZones: The zone configurations of the endpoint. This parameter is required.
         * @return {@code this}
         */
        public Builder endpointZones(com.aliyun.ros.cdk.core.IResolvable endpointZones) {
            this.endpointZones = endpointZones;
            return this;
        }

        /**
         * Sets the value of {@link EndpointProps#getEndpointZones}
         * @param endpointZones Property endpointZones: The zone configurations of the endpoint. This parameter is required.
         * @return {@code this}
         */
        public Builder endpointZones(java.util.List<? extends java.lang.Object> endpointZones) {
            this.endpointZones = endpointZones;
            return this;
        }

        /**
         * Sets the value of {@link EndpointProps#getName}
         * @param name Property name: The name of the endpoint.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link EndpointProps#getName}
         * @param name Property name: The name of the endpoint.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link EndpointProps#getSecurityGroupIds}
         * @param securityGroupIds Property securityGroupIds: A list of security groups.
         * @return {@code this}
         */
        public Builder securityGroupIds(com.aliyun.ros.cdk.core.IResolvable securityGroupIds) {
            this.securityGroupIds = securityGroupIds;
            return this;
        }

        /**
         * Sets the value of {@link EndpointProps#getSecurityGroupIds}
         * @param securityGroupIds Property securityGroupIds: A list of security groups.
         * @return {@code this}
         */
        public Builder securityGroupIds(java.util.List<? extends java.lang.Object> securityGroupIds) {
            this.securityGroupIds = securityGroupIds;
            return this;
        }

        /**
         * Sets the value of {@link EndpointProps#getType}
         * @param type Property type: Endpoint type, default value: VPC.
         * @return {@code this}
         */
        public Builder type(java.lang.String type) {
            this.type = type;
            return this;
        }

        /**
         * Sets the value of {@link EndpointProps#getType}
         * @param type Property type: Endpoint type, default value: VPC.
         * @return {@code this}
         */
        public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
            this.type = type;
            return this;
        }

        /**
         * Sets the value of {@link EndpointProps#getVpcId}
         * @param vpcId Property vpcId: The vpc id of the endpoint.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link EndpointProps#getVpcId}
         * @param vpcId Property vpcId: The vpc id of the endpoint.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link EndpointProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public EndpointProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link EndpointProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements EndpointProps {
        private final java.lang.Object endpointZones;
        private final java.lang.Object name;
        private final java.lang.Object securityGroupIds;
        private final java.lang.Object type;
        private final java.lang.Object vpcId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.endpointZones = software.amazon.jsii.Kernel.get(this, "endpointZones", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityGroupIds = software.amazon.jsii.Kernel.get(this, "securityGroupIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.endpointZones = java.util.Objects.requireNonNull(builder.endpointZones, "endpointZones is required");
            this.name = builder.name;
            this.securityGroupIds = builder.securityGroupIds;
            this.type = builder.type;
            this.vpcId = builder.vpcId;
        }

        @Override
        public final java.lang.Object getEndpointZones() {
            return this.endpointZones;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        public final java.lang.Object getSecurityGroupIds() {
            return this.securityGroupIds;
        }

        @Override
        public final java.lang.Object getType() {
            return this.type;
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

            data.set("endpointZones", om.valueToTree(this.getEndpointZones()));
            if (this.getName() != null) {
                data.set("name", om.valueToTree(this.getName()));
            }
            if (this.getSecurityGroupIds() != null) {
                data.set("securityGroupIds", om.valueToTree(this.getSecurityGroupIds()));
            }
            if (this.getType() != null) {
                data.set("type", om.valueToTree(this.getType()));
            }
            if (this.getVpcId() != null) {
                data.set("vpcId", om.valueToTree(this.getVpcId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-elasticsearchserverless.EndpointProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            EndpointProps.Jsii$Proxy that = (EndpointProps.Jsii$Proxy) o;

            if (!endpointZones.equals(that.endpointZones)) return false;
            if (this.name != null ? !this.name.equals(that.name) : that.name != null) return false;
            if (this.securityGroupIds != null ? !this.securityGroupIds.equals(that.securityGroupIds) : that.securityGroupIds != null) return false;
            if (this.type != null ? !this.type.equals(that.type) : that.type != null) return false;
            return this.vpcId != null ? this.vpcId.equals(that.vpcId) : that.vpcId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.endpointZones.hashCode();
            result = 31 * result + (this.name != null ? this.name.hashCode() : 0);
            result = 31 * result + (this.securityGroupIds != null ? this.securityGroupIds.hashCode() : 0);
            result = 31 * result + (this.type != null ? this.type.hashCode() : 0);
            result = 31 * result + (this.vpcId != null ? this.vpcId.hashCode() : 0);
            return result;
        }
    }
}
