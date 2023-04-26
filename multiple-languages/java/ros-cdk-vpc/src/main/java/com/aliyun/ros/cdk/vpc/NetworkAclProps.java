package com.aliyun.ros.cdk.vpc;

/**
 * Properties for defining a `ALIYUN::VPC::NetworkAcl`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.80.0 (build bce6a1d)", date = "2023-04-26T03:02:21.368Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.NetworkAclProps")
@software.amazon.jsii.Jsii.Proxy(NetworkAclProps.Jsii$Proxy.class)
public interface NetworkAclProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property vpcId: The ID of the virtual private cloud (VPC) to which the network ACL belongs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVpcId();

    /**
     * Property description: The description of the network ACL.
     * <p>
     * The description must be 2 to 256 characters in length. The description must start
     * with a letter but cannot start with http:// or https://.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property egressAclEntries: The list of egress network ACL entries.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEgressAclEntries() {
        return null;
    }

    /**
     * Property ingressAclEntries: The list of ingress network ACL entries.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIngressAclEntries() {
        return null;
    }

    /**
     * Property networkAclName: The name of the network ACL.
     * <p>
     * The name must be 2 to 128 characters in length and can contain letters, digits, periods
     * (.), underscores (_), and hyphens (-). The name must start with a letter and cannot
     * start with http:// or https://.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNetworkAclName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link NetworkAclProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link NetworkAclProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<NetworkAclProps> {
        java.lang.Object vpcId;
        java.lang.Object description;
        java.lang.Object egressAclEntries;
        java.lang.Object ingressAclEntries;
        java.lang.Object networkAclName;

        /**
         * Sets the value of {@link NetworkAclProps#getVpcId}
         * @param vpcId Property vpcId: The ID of the virtual private cloud (VPC) to which the network ACL belongs. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link NetworkAclProps#getVpcId}
         * @param vpcId Property vpcId: The ID of the virtual private cloud (VPC) to which the network ACL belongs. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link NetworkAclProps#getDescription}
         * @param description Property description: The description of the network ACL.
         *                    The description must be 2 to 256 characters in length. The description must start
         *                    with a letter but cannot start with http:// or https://.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link NetworkAclProps#getDescription}
         * @param description Property description: The description of the network ACL.
         *                    The description must be 2 to 256 characters in length. The description must start
         *                    with a letter but cannot start with http:// or https://.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link NetworkAclProps#getEgressAclEntries}
         * @param egressAclEntries Property egressAclEntries: The list of egress network ACL entries.
         * @return {@code this}
         */
        public Builder egressAclEntries(com.aliyun.ros.cdk.core.IResolvable egressAclEntries) {
            this.egressAclEntries = egressAclEntries;
            return this;
        }

        /**
         * Sets the value of {@link NetworkAclProps#getEgressAclEntries}
         * @param egressAclEntries Property egressAclEntries: The list of egress network ACL entries.
         * @return {@code this}
         */
        public Builder egressAclEntries(java.util.List<? extends java.lang.Object> egressAclEntries) {
            this.egressAclEntries = egressAclEntries;
            return this;
        }

        /**
         * Sets the value of {@link NetworkAclProps#getIngressAclEntries}
         * @param ingressAclEntries Property ingressAclEntries: The list of ingress network ACL entries.
         * @return {@code this}
         */
        public Builder ingressAclEntries(com.aliyun.ros.cdk.core.IResolvable ingressAclEntries) {
            this.ingressAclEntries = ingressAclEntries;
            return this;
        }

        /**
         * Sets the value of {@link NetworkAclProps#getIngressAclEntries}
         * @param ingressAclEntries Property ingressAclEntries: The list of ingress network ACL entries.
         * @return {@code this}
         */
        public Builder ingressAclEntries(java.util.List<? extends java.lang.Object> ingressAclEntries) {
            this.ingressAclEntries = ingressAclEntries;
            return this;
        }

        /**
         * Sets the value of {@link NetworkAclProps#getNetworkAclName}
         * @param networkAclName Property networkAclName: The name of the network ACL.
         *                       The name must be 2 to 128 characters in length and can contain letters, digits, periods
         *                       (.), underscores (_), and hyphens (-). The name must start with a letter and cannot
         *                       start with http:// or https://.
         * @return {@code this}
         */
        public Builder networkAclName(java.lang.String networkAclName) {
            this.networkAclName = networkAclName;
            return this;
        }

        /**
         * Sets the value of {@link NetworkAclProps#getNetworkAclName}
         * @param networkAclName Property networkAclName: The name of the network ACL.
         *                       The name must be 2 to 128 characters in length and can contain letters, digits, periods
         *                       (.), underscores (_), and hyphens (-). The name must start with a letter and cannot
         *                       start with http:// or https://.
         * @return {@code this}
         */
        public Builder networkAclName(com.aliyun.ros.cdk.core.IResolvable networkAclName) {
            this.networkAclName = networkAclName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link NetworkAclProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public NetworkAclProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link NetworkAclProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements NetworkAclProps {
        private final java.lang.Object vpcId;
        private final java.lang.Object description;
        private final java.lang.Object egressAclEntries;
        private final java.lang.Object ingressAclEntries;
        private final java.lang.Object networkAclName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.egressAclEntries = software.amazon.jsii.Kernel.get(this, "egressAclEntries", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ingressAclEntries = software.amazon.jsii.Kernel.get(this, "ingressAclEntries", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.networkAclName = software.amazon.jsii.Kernel.get(this, "networkAclName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.vpcId = java.util.Objects.requireNonNull(builder.vpcId, "vpcId is required");
            this.description = builder.description;
            this.egressAclEntries = builder.egressAclEntries;
            this.ingressAclEntries = builder.ingressAclEntries;
            this.networkAclName = builder.networkAclName;
        }

        @Override
        public final java.lang.Object getVpcId() {
            return this.vpcId;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getEgressAclEntries() {
            return this.egressAclEntries;
        }

        @Override
        public final java.lang.Object getIngressAclEntries() {
            return this.ingressAclEntries;
        }

        @Override
        public final java.lang.Object getNetworkAclName() {
            return this.networkAclName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("vpcId", om.valueToTree(this.getVpcId()));
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getEgressAclEntries() != null) {
                data.set("egressAclEntries", om.valueToTree(this.getEgressAclEntries()));
            }
            if (this.getIngressAclEntries() != null) {
                data.set("ingressAclEntries", om.valueToTree(this.getIngressAclEntries()));
            }
            if (this.getNetworkAclName() != null) {
                data.set("networkAclName", om.valueToTree(this.getNetworkAclName()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.NetworkAclProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            NetworkAclProps.Jsii$Proxy that = (NetworkAclProps.Jsii$Proxy) o;

            if (!vpcId.equals(that.vpcId)) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.egressAclEntries != null ? !this.egressAclEntries.equals(that.egressAclEntries) : that.egressAclEntries != null) return false;
            if (this.ingressAclEntries != null ? !this.ingressAclEntries.equals(that.ingressAclEntries) : that.ingressAclEntries != null) return false;
            return this.networkAclName != null ? this.networkAclName.equals(that.networkAclName) : that.networkAclName == null;
        }

        @Override
        public final int hashCode() {
            int result = this.vpcId.hashCode();
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.egressAclEntries != null ? this.egressAclEntries.hashCode() : 0);
            result = 31 * result + (this.ingressAclEntries != null ? this.ingressAclEntries.hashCode() : 0);
            result = 31 * result + (this.networkAclName != null ? this.networkAclName.hashCode() : 0);
            return result;
        }
    }
}
