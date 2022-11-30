package com.aliyun.ros.cdk.ecs;

/**
 * Properties for defining a `ALIYUN::ECS::NetworkInterfaceAttachment`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.71.0 (build f1f58ae)", date = "2022-11-30T05:21:19.132Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.RosNetworkInterfaceAttachmentProps")
@software.amazon.jsii.Jsii.Proxy(RosNetworkInterfaceAttachmentProps.Jsii$Proxy.class)
public interface RosNetworkInterfaceAttachmentProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNetworkInterfaceId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTrunkNetworkInstanceId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosNetworkInterfaceAttachmentProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosNetworkInterfaceAttachmentProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosNetworkInterfaceAttachmentProps> {
        java.lang.Object instanceId;
        java.lang.Object networkInterfaceId;
        java.lang.Object trunkNetworkInstanceId;

        /**
         * Sets the value of {@link RosNetworkInterfaceAttachmentProps#getInstanceId}
         * @param instanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosNetworkInterfaceAttachmentProps#getInstanceId}
         * @param instanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosNetworkInterfaceAttachmentProps#getNetworkInterfaceId}
         * @param networkInterfaceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder networkInterfaceId(java.lang.String networkInterfaceId) {
            this.networkInterfaceId = networkInterfaceId;
            return this;
        }

        /**
         * Sets the value of {@link RosNetworkInterfaceAttachmentProps#getNetworkInterfaceId}
         * @param networkInterfaceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder networkInterfaceId(com.aliyun.ros.cdk.core.IResolvable networkInterfaceId) {
            this.networkInterfaceId = networkInterfaceId;
            return this;
        }

        /**
         * Sets the value of {@link RosNetworkInterfaceAttachmentProps#getTrunkNetworkInstanceId}
         * @param trunkNetworkInstanceId the value to be set.
         * @return {@code this}
         */
        public Builder trunkNetworkInstanceId(java.lang.String trunkNetworkInstanceId) {
            this.trunkNetworkInstanceId = trunkNetworkInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosNetworkInterfaceAttachmentProps#getTrunkNetworkInstanceId}
         * @param trunkNetworkInstanceId the value to be set.
         * @return {@code this}
         */
        public Builder trunkNetworkInstanceId(com.aliyun.ros.cdk.core.IResolvable trunkNetworkInstanceId) {
            this.trunkNetworkInstanceId = trunkNetworkInstanceId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosNetworkInterfaceAttachmentProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosNetworkInterfaceAttachmentProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosNetworkInterfaceAttachmentProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosNetworkInterfaceAttachmentProps {
        private final java.lang.Object instanceId;
        private final java.lang.Object networkInterfaceId;
        private final java.lang.Object trunkNetworkInstanceId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.networkInterfaceId = software.amazon.jsii.Kernel.get(this, "networkInterfaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.trunkNetworkInstanceId = software.amazon.jsii.Kernel.get(this, "trunkNetworkInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.instanceId = java.util.Objects.requireNonNull(builder.instanceId, "instanceId is required");
            this.networkInterfaceId = java.util.Objects.requireNonNull(builder.networkInterfaceId, "networkInterfaceId is required");
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
            if (this.getTrunkNetworkInstanceId() != null) {
                data.set("trunkNetworkInstanceId", om.valueToTree(this.getTrunkNetworkInstanceId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.RosNetworkInterfaceAttachmentProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosNetworkInterfaceAttachmentProps.Jsii$Proxy that = (RosNetworkInterfaceAttachmentProps.Jsii$Proxy) o;

            if (!instanceId.equals(that.instanceId)) return false;
            if (!networkInterfaceId.equals(that.networkInterfaceId)) return false;
            return this.trunkNetworkInstanceId != null ? this.trunkNetworkInstanceId.equals(that.trunkNetworkInstanceId) : that.trunkNetworkInstanceId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.instanceId.hashCode();
            result = 31 * result + (this.networkInterfaceId.hashCode());
            result = 31 * result + (this.trunkNetworkInstanceId != null ? this.trunkNetworkInstanceId.hashCode() : 0);
            return result;
        }
    }
}
