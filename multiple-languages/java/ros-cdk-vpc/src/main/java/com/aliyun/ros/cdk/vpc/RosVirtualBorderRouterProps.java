package com.aliyun.ros.cdk.vpc;

/**
 * Properties for defining a <code>ALIYUN::VPC::VirtualBorderRouter</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.88.0 (build eaabd08)", date = "2023-09-15T07:33:50.808Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.RosVirtualBorderRouterProps")
@software.amazon.jsii.Jsii.Proxy(RosVirtualBorderRouterProps.Jsii$Proxy.class)
public interface RosVirtualBorderRouterProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getLocalGatewayIp();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPeerGatewayIp();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPeeringSubnetMask();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPhysicalConnectionId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVlanId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCircuitCode() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosVirtualBorderRouterProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosVirtualBorderRouterProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosVirtualBorderRouterProps> {
        java.lang.Object localGatewayIp;
        java.lang.Object peerGatewayIp;
        java.lang.Object peeringSubnetMask;
        java.lang.Object physicalConnectionId;
        java.lang.Object vlanId;
        java.lang.Object circuitCode;
        java.lang.Object description;
        java.lang.Object name;

        /**
         * Sets the value of {@link RosVirtualBorderRouterProps#getLocalGatewayIp}
         * @param localGatewayIp the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder localGatewayIp(java.lang.String localGatewayIp) {
            this.localGatewayIp = localGatewayIp;
            return this;
        }

        /**
         * Sets the value of {@link RosVirtualBorderRouterProps#getLocalGatewayIp}
         * @param localGatewayIp the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder localGatewayIp(com.aliyun.ros.cdk.core.IResolvable localGatewayIp) {
            this.localGatewayIp = localGatewayIp;
            return this;
        }

        /**
         * Sets the value of {@link RosVirtualBorderRouterProps#getPeerGatewayIp}
         * @param peerGatewayIp the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder peerGatewayIp(java.lang.String peerGatewayIp) {
            this.peerGatewayIp = peerGatewayIp;
            return this;
        }

        /**
         * Sets the value of {@link RosVirtualBorderRouterProps#getPeerGatewayIp}
         * @param peerGatewayIp the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder peerGatewayIp(com.aliyun.ros.cdk.core.IResolvable peerGatewayIp) {
            this.peerGatewayIp = peerGatewayIp;
            return this;
        }

        /**
         * Sets the value of {@link RosVirtualBorderRouterProps#getPeeringSubnetMask}
         * @param peeringSubnetMask the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder peeringSubnetMask(java.lang.String peeringSubnetMask) {
            this.peeringSubnetMask = peeringSubnetMask;
            return this;
        }

        /**
         * Sets the value of {@link RosVirtualBorderRouterProps#getPeeringSubnetMask}
         * @param peeringSubnetMask the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder peeringSubnetMask(com.aliyun.ros.cdk.core.IResolvable peeringSubnetMask) {
            this.peeringSubnetMask = peeringSubnetMask;
            return this;
        }

        /**
         * Sets the value of {@link RosVirtualBorderRouterProps#getPhysicalConnectionId}
         * @param physicalConnectionId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder physicalConnectionId(java.lang.String physicalConnectionId) {
            this.physicalConnectionId = physicalConnectionId;
            return this;
        }

        /**
         * Sets the value of {@link RosVirtualBorderRouterProps#getPhysicalConnectionId}
         * @param physicalConnectionId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder physicalConnectionId(com.aliyun.ros.cdk.core.IResolvable physicalConnectionId) {
            this.physicalConnectionId = physicalConnectionId;
            return this;
        }

        /**
         * Sets the value of {@link RosVirtualBorderRouterProps#getVlanId}
         * @param vlanId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vlanId(java.lang.Number vlanId) {
            this.vlanId = vlanId;
            return this;
        }

        /**
         * Sets the value of {@link RosVirtualBorderRouterProps#getVlanId}
         * @param vlanId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vlanId(com.aliyun.ros.cdk.core.IResolvable vlanId) {
            this.vlanId = vlanId;
            return this;
        }

        /**
         * Sets the value of {@link RosVirtualBorderRouterProps#getCircuitCode}
         * @param circuitCode the value to be set.
         * @return {@code this}
         */
        public Builder circuitCode(java.lang.String circuitCode) {
            this.circuitCode = circuitCode;
            return this;
        }

        /**
         * Sets the value of {@link RosVirtualBorderRouterProps#getCircuitCode}
         * @param circuitCode the value to be set.
         * @return {@code this}
         */
        public Builder circuitCode(com.aliyun.ros.cdk.core.IResolvable circuitCode) {
            this.circuitCode = circuitCode;
            return this;
        }

        /**
         * Sets the value of {@link RosVirtualBorderRouterProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosVirtualBorderRouterProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosVirtualBorderRouterProps#getName}
         * @param name the value to be set.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RosVirtualBorderRouterProps#getName}
         * @param name the value to be set.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosVirtualBorderRouterProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosVirtualBorderRouterProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosVirtualBorderRouterProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosVirtualBorderRouterProps {
        private final java.lang.Object localGatewayIp;
        private final java.lang.Object peerGatewayIp;
        private final java.lang.Object peeringSubnetMask;
        private final java.lang.Object physicalConnectionId;
        private final java.lang.Object vlanId;
        private final java.lang.Object circuitCode;
        private final java.lang.Object description;
        private final java.lang.Object name;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.localGatewayIp = software.amazon.jsii.Kernel.get(this, "localGatewayIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.peerGatewayIp = software.amazon.jsii.Kernel.get(this, "peerGatewayIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.peeringSubnetMask = software.amazon.jsii.Kernel.get(this, "peeringSubnetMask", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.physicalConnectionId = software.amazon.jsii.Kernel.get(this, "physicalConnectionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vlanId = software.amazon.jsii.Kernel.get(this, "vlanId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.circuitCode = software.amazon.jsii.Kernel.get(this, "circuitCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.localGatewayIp = java.util.Objects.requireNonNull(builder.localGatewayIp, "localGatewayIp is required");
            this.peerGatewayIp = java.util.Objects.requireNonNull(builder.peerGatewayIp, "peerGatewayIp is required");
            this.peeringSubnetMask = java.util.Objects.requireNonNull(builder.peeringSubnetMask, "peeringSubnetMask is required");
            this.physicalConnectionId = java.util.Objects.requireNonNull(builder.physicalConnectionId, "physicalConnectionId is required");
            this.vlanId = java.util.Objects.requireNonNull(builder.vlanId, "vlanId is required");
            this.circuitCode = builder.circuitCode;
            this.description = builder.description;
            this.name = builder.name;
        }

        @Override
        public final java.lang.Object getLocalGatewayIp() {
            return this.localGatewayIp;
        }

        @Override
        public final java.lang.Object getPeerGatewayIp() {
            return this.peerGatewayIp;
        }

        @Override
        public final java.lang.Object getPeeringSubnetMask() {
            return this.peeringSubnetMask;
        }

        @Override
        public final java.lang.Object getPhysicalConnectionId() {
            return this.physicalConnectionId;
        }

        @Override
        public final java.lang.Object getVlanId() {
            return this.vlanId;
        }

        @Override
        public final java.lang.Object getCircuitCode() {
            return this.circuitCode;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("localGatewayIp", om.valueToTree(this.getLocalGatewayIp()));
            data.set("peerGatewayIp", om.valueToTree(this.getPeerGatewayIp()));
            data.set("peeringSubnetMask", om.valueToTree(this.getPeeringSubnetMask()));
            data.set("physicalConnectionId", om.valueToTree(this.getPhysicalConnectionId()));
            data.set("vlanId", om.valueToTree(this.getVlanId()));
            if (this.getCircuitCode() != null) {
                data.set("circuitCode", om.valueToTree(this.getCircuitCode()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getName() != null) {
                data.set("name", om.valueToTree(this.getName()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.RosVirtualBorderRouterProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosVirtualBorderRouterProps.Jsii$Proxy that = (RosVirtualBorderRouterProps.Jsii$Proxy) o;

            if (!localGatewayIp.equals(that.localGatewayIp)) return false;
            if (!peerGatewayIp.equals(that.peerGatewayIp)) return false;
            if (!peeringSubnetMask.equals(that.peeringSubnetMask)) return false;
            if (!physicalConnectionId.equals(that.physicalConnectionId)) return false;
            if (!vlanId.equals(that.vlanId)) return false;
            if (this.circuitCode != null ? !this.circuitCode.equals(that.circuitCode) : that.circuitCode != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            return this.name != null ? this.name.equals(that.name) : that.name == null;
        }

        @Override
        public final int hashCode() {
            int result = this.localGatewayIp.hashCode();
            result = 31 * result + (this.peerGatewayIp.hashCode());
            result = 31 * result + (this.peeringSubnetMask.hashCode());
            result = 31 * result + (this.physicalConnectionId.hashCode());
            result = 31 * result + (this.vlanId.hashCode());
            result = 31 * result + (this.circuitCode != null ? this.circuitCode.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.name != null ? this.name.hashCode() : 0);
            return result;
        }
    }
}
