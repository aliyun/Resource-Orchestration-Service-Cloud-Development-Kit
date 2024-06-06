package com.aliyun.ros.cdk.ecs;

/**
 * Properties for defining a <code>NetworkInterfaceAttachment</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-networkinterfaceattachment
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-06T03:35:14.366Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.NetworkInterfaceAttachmentProps")
@software.amazon.jsii.Jsii.Proxy(NetworkInterfaceAttachmentProps.Jsii$Proxy.class)
public interface NetworkInterfaceAttachmentProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property instanceId: ECS instance id.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId();

    /**
     * Property networkInterfaceId: Network interface id.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNetworkInterfaceId();

    /**
     * Property ecsRestartOption: Control whether to restart the ECS instance when binding an elastic network card.Only effective for ENI that does not support hot swapping.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEcsRestartOption() {
        return null;
    }

    /**
     * Property trunkNetworkInstanceId: undefined.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTrunkNetworkInstanceId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link NetworkInterfaceAttachmentProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link NetworkInterfaceAttachmentProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<NetworkInterfaceAttachmentProps> {
        java.lang.Object instanceId;
        java.lang.Object networkInterfaceId;
        java.lang.Object ecsRestartOption;
        java.lang.Object trunkNetworkInstanceId;

        /**
         * Sets the value of {@link NetworkInterfaceAttachmentProps#getInstanceId}
         * @param instanceId Property instanceId: ECS instance id. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link NetworkInterfaceAttachmentProps#getInstanceId}
         * @param instanceId Property instanceId: ECS instance id. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link NetworkInterfaceAttachmentProps#getNetworkInterfaceId}
         * @param networkInterfaceId Property networkInterfaceId: Network interface id. This parameter is required.
         * @return {@code this}
         */
        public Builder networkInterfaceId(java.lang.String networkInterfaceId) {
            this.networkInterfaceId = networkInterfaceId;
            return this;
        }

        /**
         * Sets the value of {@link NetworkInterfaceAttachmentProps#getNetworkInterfaceId}
         * @param networkInterfaceId Property networkInterfaceId: Network interface id. This parameter is required.
         * @return {@code this}
         */
        public Builder networkInterfaceId(com.aliyun.ros.cdk.core.IResolvable networkInterfaceId) {
            this.networkInterfaceId = networkInterfaceId;
            return this;
        }

        /**
         * Sets the value of {@link NetworkInterfaceAttachmentProps#getEcsRestartOption}
         * @param ecsRestartOption Property ecsRestartOption: Control whether to restart the ECS instance when binding an elastic network card.Only effective for ENI that does not support hot swapping.
         * @return {@code this}
         */
        public Builder ecsRestartOption(java.lang.String ecsRestartOption) {
            this.ecsRestartOption = ecsRestartOption;
            return this;
        }

        /**
         * Sets the value of {@link NetworkInterfaceAttachmentProps#getEcsRestartOption}
         * @param ecsRestartOption Property ecsRestartOption: Control whether to restart the ECS instance when binding an elastic network card.Only effective for ENI that does not support hot swapping.
         * @return {@code this}
         */
        public Builder ecsRestartOption(com.aliyun.ros.cdk.core.IResolvable ecsRestartOption) {
            this.ecsRestartOption = ecsRestartOption;
            return this;
        }

        /**
         * Sets the value of {@link NetworkInterfaceAttachmentProps#getTrunkNetworkInstanceId}
         * @param trunkNetworkInstanceId Property trunkNetworkInstanceId: undefined.
         * @return {@code this}
         */
        public Builder trunkNetworkInstanceId(java.lang.String trunkNetworkInstanceId) {
            this.trunkNetworkInstanceId = trunkNetworkInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link NetworkInterfaceAttachmentProps#getTrunkNetworkInstanceId}
         * @param trunkNetworkInstanceId Property trunkNetworkInstanceId: undefined.
         * @return {@code this}
         */
        public Builder trunkNetworkInstanceId(com.aliyun.ros.cdk.core.IResolvable trunkNetworkInstanceId) {
            this.trunkNetworkInstanceId = trunkNetworkInstanceId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link NetworkInterfaceAttachmentProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public NetworkInterfaceAttachmentProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link NetworkInterfaceAttachmentProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements NetworkInterfaceAttachmentProps {
        private final java.lang.Object instanceId;
        private final java.lang.Object networkInterfaceId;
        private final java.lang.Object ecsRestartOption;
        private final java.lang.Object trunkNetworkInstanceId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.networkInterfaceId = software.amazon.jsii.Kernel.get(this, "networkInterfaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ecsRestartOption = software.amazon.jsii.Kernel.get(this, "ecsRestartOption", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.trunkNetworkInstanceId = software.amazon.jsii.Kernel.get(this, "trunkNetworkInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.instanceId = java.util.Objects.requireNonNull(builder.instanceId, "instanceId is required");
            this.networkInterfaceId = java.util.Objects.requireNonNull(builder.networkInterfaceId, "networkInterfaceId is required");
            this.ecsRestartOption = builder.ecsRestartOption;
            this.trunkNetworkInstanceId = builder.trunkNetworkInstanceId;
        }

        @Override
        public final java.lang.Object getInstanceId() {
            return this.instanceId;
        }

        @Override
        public final java.lang.Object getNetworkInterfaceId() {
            return this.networkInterfaceId;
        }

        @Override
        public final java.lang.Object getEcsRestartOption() {
            return this.ecsRestartOption;
        }

        @Override
        public final java.lang.Object getTrunkNetworkInstanceId() {
            return this.trunkNetworkInstanceId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("instanceId", om.valueToTree(this.getInstanceId()));
            data.set("networkInterfaceId", om.valueToTree(this.getNetworkInterfaceId()));
            if (this.getEcsRestartOption() != null) {
                data.set("ecsRestartOption", om.valueToTree(this.getEcsRestartOption()));
            }
            if (this.getTrunkNetworkInstanceId() != null) {
                data.set("trunkNetworkInstanceId", om.valueToTree(this.getTrunkNetworkInstanceId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.NetworkInterfaceAttachmentProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            NetworkInterfaceAttachmentProps.Jsii$Proxy that = (NetworkInterfaceAttachmentProps.Jsii$Proxy) o;

            if (!instanceId.equals(that.instanceId)) return false;
            if (!networkInterfaceId.equals(that.networkInterfaceId)) return false;
            if (this.ecsRestartOption != null ? !this.ecsRestartOption.equals(that.ecsRestartOption) : that.ecsRestartOption != null) return false;
            return this.trunkNetworkInstanceId != null ? this.trunkNetworkInstanceId.equals(that.trunkNetworkInstanceId) : that.trunkNetworkInstanceId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.instanceId.hashCode();
            result = 31 * result + (this.networkInterfaceId.hashCode());
            result = 31 * result + (this.ecsRestartOption != null ? this.ecsRestartOption.hashCode() : 0);
            result = 31 * result + (this.trunkNetworkInstanceId != null ? this.trunkNetworkInstanceId.hashCode() : 0);
            return result;
        }
    }
}
