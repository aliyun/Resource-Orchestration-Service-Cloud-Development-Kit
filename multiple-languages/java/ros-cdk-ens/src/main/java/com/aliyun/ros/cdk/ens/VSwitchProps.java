package com.aliyun.ros.cdk.ens;

/**
 * Properties for defining a <code>VSwitch</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-vswitch
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-29T07:52:39.664Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ens.$Module.class, fqn = "@alicloud/ros-cdk-ens.VSwitchProps")
@software.amazon.jsii.Jsii.Proxy(VSwitchProps.Jsii$Proxy.class)
public interface VSwitchProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property cidrBlock: The CIDR block of the vSwitch.
     * <p>
     * Take note of the following limits:
     * The subnet mask must be 16 to 29 bits in length.
     * The CIDR block of the vSwitch must fall within the CIDR block of the VPC to which the vSwitch belongs.
     * The CIDR block of the vSwitch cannot be the same as the destination CIDR block in a route entry of the VPC. However, it can be a subset of the destination CIDR block.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCidrBlock();

    /**
     * Property ensRegionId: The ID of the edge node.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEnsRegionId();

    /**
     * Property networkId: The ID of the network to which the vSwitch that you want to create belongs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNetworkId();

    /**
     * Property description: The description of the vSwitch.
     * <p>
     * The description must be 2 to 256 characters in length. It must start with a letter but cannot start with http:// or https://.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property vSwitchName: The name of the vSwitch.
     * <p>
     * The name must meet the following requirements:
     * The name must be 2 to 128 characters in length.
     * The name must start with a letter and cannot start with http:// or https://. It can contain letters, digits, colons (:), underscores (_), and hyphens (-).
     * Default value: null.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVSwitchName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link VSwitchProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link VSwitchProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<VSwitchProps> {
        java.lang.Object cidrBlock;
        java.lang.Object ensRegionId;
        java.lang.Object networkId;
        java.lang.Object description;
        java.lang.Object vSwitchName;

        /**
         * Sets the value of {@link VSwitchProps#getCidrBlock}
         * @param cidrBlock Property cidrBlock: The CIDR block of the vSwitch. This parameter is required.
         *                  Take note of the following limits:
         *                  The subnet mask must be 16 to 29 bits in length.
         *                  The CIDR block of the vSwitch must fall within the CIDR block of the VPC to which the vSwitch belongs.
         *                  The CIDR block of the vSwitch cannot be the same as the destination CIDR block in a route entry of the VPC. However, it can be a subset of the destination CIDR block.
         * @return {@code this}
         */
        public Builder cidrBlock(java.lang.String cidrBlock) {
            this.cidrBlock = cidrBlock;
            return this;
        }

        /**
         * Sets the value of {@link VSwitchProps#getCidrBlock}
         * @param cidrBlock Property cidrBlock: The CIDR block of the vSwitch. This parameter is required.
         *                  Take note of the following limits:
         *                  The subnet mask must be 16 to 29 bits in length.
         *                  The CIDR block of the vSwitch must fall within the CIDR block of the VPC to which the vSwitch belongs.
         *                  The CIDR block of the vSwitch cannot be the same as the destination CIDR block in a route entry of the VPC. However, it can be a subset of the destination CIDR block.
         * @return {@code this}
         */
        public Builder cidrBlock(com.aliyun.ros.cdk.core.IResolvable cidrBlock) {
            this.cidrBlock = cidrBlock;
            return this;
        }

        /**
         * Sets the value of {@link VSwitchProps#getEnsRegionId}
         * @param ensRegionId Property ensRegionId: The ID of the edge node. This parameter is required.
         * @return {@code this}
         */
        public Builder ensRegionId(java.lang.String ensRegionId) {
            this.ensRegionId = ensRegionId;
            return this;
        }

        /**
         * Sets the value of {@link VSwitchProps#getEnsRegionId}
         * @param ensRegionId Property ensRegionId: The ID of the edge node. This parameter is required.
         * @return {@code this}
         */
        public Builder ensRegionId(com.aliyun.ros.cdk.core.IResolvable ensRegionId) {
            this.ensRegionId = ensRegionId;
            return this;
        }

        /**
         * Sets the value of {@link VSwitchProps#getNetworkId}
         * @param networkId Property networkId: The ID of the network to which the vSwitch that you want to create belongs. This parameter is required.
         * @return {@code this}
         */
        public Builder networkId(java.lang.String networkId) {
            this.networkId = networkId;
            return this;
        }

        /**
         * Sets the value of {@link VSwitchProps#getNetworkId}
         * @param networkId Property networkId: The ID of the network to which the vSwitch that you want to create belongs. This parameter is required.
         * @return {@code this}
         */
        public Builder networkId(com.aliyun.ros.cdk.core.IResolvable networkId) {
            this.networkId = networkId;
            return this;
        }

        /**
         * Sets the value of {@link VSwitchProps#getDescription}
         * @param description Property description: The description of the vSwitch.
         *                    The description must be 2 to 256 characters in length. It must start with a letter but cannot start with http:// or https://.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link VSwitchProps#getDescription}
         * @param description Property description: The description of the vSwitch.
         *                    The description must be 2 to 256 characters in length. It must start with a letter but cannot start with http:// or https://.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link VSwitchProps#getVSwitchName}
         * @param vSwitchName Property vSwitchName: The name of the vSwitch.
         *                    The name must meet the following requirements:
         *                    The name must be 2 to 128 characters in length.
         *                    The name must start with a letter and cannot start with http:// or https://. It can contain letters, digits, colons (:), underscores (_), and hyphens (-).
         *                    Default value: null.
         * @return {@code this}
         */
        public Builder vSwitchName(java.lang.String vSwitchName) {
            this.vSwitchName = vSwitchName;
            return this;
        }

        /**
         * Sets the value of {@link VSwitchProps#getVSwitchName}
         * @param vSwitchName Property vSwitchName: The name of the vSwitch.
         *                    The name must meet the following requirements:
         *                    The name must be 2 to 128 characters in length.
         *                    The name must start with a letter and cannot start with http:// or https://. It can contain letters, digits, colons (:), underscores (_), and hyphens (-).
         *                    Default value: null.
         * @return {@code this}
         */
        public Builder vSwitchName(com.aliyun.ros.cdk.core.IResolvable vSwitchName) {
            this.vSwitchName = vSwitchName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link VSwitchProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public VSwitchProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link VSwitchProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements VSwitchProps {
        private final java.lang.Object cidrBlock;
        private final java.lang.Object ensRegionId;
        private final java.lang.Object networkId;
        private final java.lang.Object description;
        private final java.lang.Object vSwitchName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.cidrBlock = software.amazon.jsii.Kernel.get(this, "cidrBlock", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ensRegionId = software.amazon.jsii.Kernel.get(this, "ensRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.networkId = software.amazon.jsii.Kernel.get(this, "networkId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchName = software.amazon.jsii.Kernel.get(this, "vSwitchName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.cidrBlock = java.util.Objects.requireNonNull(builder.cidrBlock, "cidrBlock is required");
            this.ensRegionId = java.util.Objects.requireNonNull(builder.ensRegionId, "ensRegionId is required");
            this.networkId = java.util.Objects.requireNonNull(builder.networkId, "networkId is required");
            this.description = builder.description;
            this.vSwitchName = builder.vSwitchName;
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
        public final java.lang.Object getNetworkId() {
            return this.networkId;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getVSwitchName() {
            return this.vSwitchName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("cidrBlock", om.valueToTree(this.getCidrBlock()));
            data.set("ensRegionId", om.valueToTree(this.getEnsRegionId()));
            data.set("networkId", om.valueToTree(this.getNetworkId()));
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getVSwitchName() != null) {
                data.set("vSwitchName", om.valueToTree(this.getVSwitchName()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ens.VSwitchProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            VSwitchProps.Jsii$Proxy that = (VSwitchProps.Jsii$Proxy) o;

            if (!cidrBlock.equals(that.cidrBlock)) return false;
            if (!ensRegionId.equals(that.ensRegionId)) return false;
            if (!networkId.equals(that.networkId)) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            return this.vSwitchName != null ? this.vSwitchName.equals(that.vSwitchName) : that.vSwitchName == null;
        }

        @Override
        public final int hashCode() {
            int result = this.cidrBlock.hashCode();
            result = 31 * result + (this.ensRegionId.hashCode());
            result = 31 * result + (this.networkId.hashCode());
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.vSwitchName != null ? this.vSwitchName.hashCode() : 0);
            return result;
        }
    }
}
