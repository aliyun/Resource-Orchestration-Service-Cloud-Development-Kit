package com.aliyun.ros.cdk.ens;

/**
 * Properties for defining a <code>Network</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-network
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-03T08:19:52.063Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ens.$Module.class, fqn = "@alicloud/ros-cdk-ens.NetworkProps")
@software.amazon.jsii.Jsii.Proxy(NetworkProps.Jsii$Proxy.class)
public interface NetworkProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property cidrBlock: The CIDR block of the network.
     * <p>
     * You can use one of the following CIDR blocks or their subnets as the CIDR block of the network:
     * 10.0.0.0/8 (default)
     * 172.16.0.0/12
     * 192.168.0.0/16
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCidrBlock();

    /**
     * Property ensRegionId: The ID of the edge node.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEnsRegionId();

    /**
     * Property description: The description of the network.
     * <p>
     * The description must be 2 to 256 characters in length. It must start with a letter but cannot start with http:// or https://.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property networkName: The name of the network.
     * <p>
     * The name must meet the following requirements:
     * The name must be 2 to 128 characters in length.
     * The name must start with a letter but cannot start with http:// or https://.
     * The name can contain letters, digits, colons (:), underscores (_), and hyphens (-).
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNetworkName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link NetworkProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link NetworkProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<NetworkProps> {
        java.lang.Object cidrBlock;
        java.lang.Object ensRegionId;
        java.lang.Object description;
        java.lang.Object networkName;

        /**
         * Sets the value of {@link NetworkProps#getCidrBlock}
         * @param cidrBlock Property cidrBlock: The CIDR block of the network. This parameter is required.
         *                  You can use one of the following CIDR blocks or their subnets as the CIDR block of the network:
         *                  10.0.0.0/8 (default)
         *                  172.16.0.0/12
         *                  192.168.0.0/16
         * @return {@code this}
         */
        public Builder cidrBlock(java.lang.String cidrBlock) {
            this.cidrBlock = cidrBlock;
            return this;
        }

        /**
         * Sets the value of {@link NetworkProps#getCidrBlock}
         * @param cidrBlock Property cidrBlock: The CIDR block of the network. This parameter is required.
         *                  You can use one of the following CIDR blocks or their subnets as the CIDR block of the network:
         *                  10.0.0.0/8 (default)
         *                  172.16.0.0/12
         *                  192.168.0.0/16
         * @return {@code this}
         */
        public Builder cidrBlock(com.aliyun.ros.cdk.core.IResolvable cidrBlock) {
            this.cidrBlock = cidrBlock;
            return this;
        }

        /**
         * Sets the value of {@link NetworkProps#getEnsRegionId}
         * @param ensRegionId Property ensRegionId: The ID of the edge node. This parameter is required.
         * @return {@code this}
         */
        public Builder ensRegionId(java.lang.String ensRegionId) {
            this.ensRegionId = ensRegionId;
            return this;
        }

        /**
         * Sets the value of {@link NetworkProps#getEnsRegionId}
         * @param ensRegionId Property ensRegionId: The ID of the edge node. This parameter is required.
         * @return {@code this}
         */
        public Builder ensRegionId(com.aliyun.ros.cdk.core.IResolvable ensRegionId) {
            this.ensRegionId = ensRegionId;
            return this;
        }

        /**
         * Sets the value of {@link NetworkProps#getDescription}
         * @param description Property description: The description of the network.
         *                    The description must be 2 to 256 characters in length. It must start with a letter but cannot start with http:// or https://.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link NetworkProps#getDescription}
         * @param description Property description: The description of the network.
         *                    The description must be 2 to 256 characters in length. It must start with a letter but cannot start with http:// or https://.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link NetworkProps#getNetworkName}
         * @param networkName Property networkName: The name of the network.
         *                    The name must meet the following requirements:
         *                    The name must be 2 to 128 characters in length.
         *                    The name must start with a letter but cannot start with http:// or https://.
         *                    The name can contain letters, digits, colons (:), underscores (_), and hyphens (-).
         * @return {@code this}
         */
        public Builder networkName(java.lang.String networkName) {
            this.networkName = networkName;
            return this;
        }

        /**
         * Sets the value of {@link NetworkProps#getNetworkName}
         * @param networkName Property networkName: The name of the network.
         *                    The name must meet the following requirements:
         *                    The name must be 2 to 128 characters in length.
         *                    The name must start with a letter but cannot start with http:// or https://.
         *                    The name can contain letters, digits, colons (:), underscores (_), and hyphens (-).
         * @return {@code this}
         */
        public Builder networkName(com.aliyun.ros.cdk.core.IResolvable networkName) {
            this.networkName = networkName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link NetworkProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public NetworkProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link NetworkProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements NetworkProps {
        private final java.lang.Object cidrBlock;
        private final java.lang.Object ensRegionId;
        private final java.lang.Object description;
        private final java.lang.Object networkName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.cidrBlock = software.amazon.jsii.Kernel.get(this, "cidrBlock", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ensRegionId = software.amazon.jsii.Kernel.get(this, "ensRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.networkName = software.amazon.jsii.Kernel.get(this, "networkName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.cidrBlock = java.util.Objects.requireNonNull(builder.cidrBlock, "cidrBlock is required");
            this.ensRegionId = java.util.Objects.requireNonNull(builder.ensRegionId, "ensRegionId is required");
            this.description = builder.description;
            this.networkName = builder.networkName;
        }

        @Override
        public final java.lang.Object getCidrBlock() {
            return this.cidrBlock;
        }

        @Override
        public final java.lang.Object getEnsRegionId() {
            return this.ensRegionId;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getNetworkName() {
            return this.networkName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("cidrBlock", om.valueToTree(this.getCidrBlock()));
            data.set("ensRegionId", om.valueToTree(this.getEnsRegionId()));
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getNetworkName() != null) {
                data.set("networkName", om.valueToTree(this.getNetworkName()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ens.NetworkProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            NetworkProps.Jsii$Proxy that = (NetworkProps.Jsii$Proxy) o;

            if (!cidrBlock.equals(that.cidrBlock)) return false;
            if (!ensRegionId.equals(that.ensRegionId)) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            return this.networkName != null ? this.networkName.equals(that.networkName) : that.networkName == null;
        }

        @Override
        public final int hashCode() {
            int result = this.cidrBlock.hashCode();
            result = 31 * result + (this.ensRegionId.hashCode());
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.networkName != null ? this.networkName.hashCode() : 0);
            return result;
        }
    }
}
