package com.aliyun.ros.cdk.paidatasetacc;

/**
 * Properties for defining a <code>Endpoint</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paidatasetacc-endpoint
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:18.853Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.paidatasetacc.$Module.class, fqn = "@alicloud/ros-cdk-paidatasetacc.EndpointProps")
@software.amazon.jsii.Jsii.Proxy(EndpointProps.Jsii$Proxy.class)
public interface EndpointProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property instanceId: The ID of the acceleration instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId();

    /**
     * Property name: The name of the Mount Target.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getName();

    /**
     * Property type: The network type of the Mount Target.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getType() {
        return null;
    }

    /**
     * Property vpcId: The ID of the VPC.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVpcId() {
        return null;
    }

    /**
     * Property vswitchId: The ID of the vSwitch.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVswitchId() {
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
        java.lang.Object instanceId;
        java.lang.Object name;
        java.lang.Object type;
        java.lang.Object vpcId;
        java.lang.Object vswitchId;

        /**
         * Sets the value of {@link EndpointProps#getInstanceId}
         * @param instanceId Property instanceId: The ID of the acceleration instance. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link EndpointProps#getInstanceId}
         * @param instanceId Property instanceId: The ID of the acceleration instance. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link EndpointProps#getName}
         * @param name Property name: The name of the Mount Target. This parameter is required.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link EndpointProps#getName}
         * @param name Property name: The name of the Mount Target. This parameter is required.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link EndpointProps#getType}
         * @param type Property type: The network type of the Mount Target.
         * @return {@code this}
         */
        public Builder type(java.lang.String type) {
            this.type = type;
            return this;
        }

        /**
         * Sets the value of {@link EndpointProps#getType}
         * @param type Property type: The network type of the Mount Target.
         * @return {@code this}
         */
        public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
            this.type = type;
            return this;
        }

        /**
         * Sets the value of {@link EndpointProps#getVpcId}
         * @param vpcId Property vpcId: The ID of the VPC.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link EndpointProps#getVpcId}
         * @param vpcId Property vpcId: The ID of the VPC.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link EndpointProps#getVswitchId}
         * @param vswitchId Property vswitchId: The ID of the vSwitch.
         * @return {@code this}
         */
        public Builder vswitchId(java.lang.String vswitchId) {
            this.vswitchId = vswitchId;
            return this;
        }

        /**
         * Sets the value of {@link EndpointProps#getVswitchId}
         * @param vswitchId Property vswitchId: The ID of the vSwitch.
         * @return {@code this}
         */
        public Builder vswitchId(com.aliyun.ros.cdk.core.IResolvable vswitchId) {
            this.vswitchId = vswitchId;
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
        private final java.lang.Object instanceId;
        private final java.lang.Object name;
        private final java.lang.Object type;
        private final java.lang.Object vpcId;
        private final java.lang.Object vswitchId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vswitchId = software.amazon.jsii.Kernel.get(this, "vswitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.instanceId = java.util.Objects.requireNonNull(builder.instanceId, "instanceId is required");
            this.name = java.util.Objects.requireNonNull(builder.name, "name is required");
            this.type = builder.type;
            this.vpcId = builder.vpcId;
            this.vswitchId = builder.vswitchId;
        }

        @Override
        public final java.lang.Object getInstanceId() {
            return this.instanceId;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
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
        public final java.lang.Object getVswitchId() {
            return this.vswitchId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("instanceId", om.valueToTree(this.getInstanceId()));
            data.set("name", om.valueToTree(this.getName()));
            if (this.getType() != null) {
                data.set("type", om.valueToTree(this.getType()));
            }
            if (this.getVpcId() != null) {
                data.set("vpcId", om.valueToTree(this.getVpcId()));
            }
            if (this.getVswitchId() != null) {
                data.set("vswitchId", om.valueToTree(this.getVswitchId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-paidatasetacc.EndpointProps"));
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

            if (!instanceId.equals(that.instanceId)) return false;
            if (!name.equals(that.name)) return false;
            if (this.type != null ? !this.type.equals(that.type) : that.type != null) return false;
            if (this.vpcId != null ? !this.vpcId.equals(that.vpcId) : that.vpcId != null) return false;
            return this.vswitchId != null ? this.vswitchId.equals(that.vswitchId) : that.vswitchId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.instanceId.hashCode();
            result = 31 * result + (this.name.hashCode());
            result = 31 * result + (this.type != null ? this.type.hashCode() : 0);
            result = 31 * result + (this.vpcId != null ? this.vpcId.hashCode() : 0);
            result = 31 * result + (this.vswitchId != null ? this.vswitchId.hashCode() : 0);
            return result;
        }
    }
}
