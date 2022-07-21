package com.aliyun.ros.cdk.ecs;

/**
 * Properties for defining a `ALIYUN::ECS::SSHKeyPairAttachment`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.62.0 (build 293ac17)", date = "2022-07-21T02:24:24.954Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.RosSSHKeyPairAttachmentProps")
@software.amazon.jsii.Jsii.Proxy(RosSSHKeyPairAttachmentProps.Jsii$Proxy.class)
public interface RosSSHKeyPairAttachmentProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceIds();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getKeyPairName();

    /**
     * @return a {@link Builder} of {@link RosSSHKeyPairAttachmentProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosSSHKeyPairAttachmentProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosSSHKeyPairAttachmentProps> {
        java.lang.Object instanceIds;
        java.lang.Object keyPairName;

        /**
         * Sets the value of {@link RosSSHKeyPairAttachmentProps#getInstanceIds}
         * @param instanceIds the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceIds(java.util.List<? extends java.lang.Object> instanceIds) {
            this.instanceIds = instanceIds;
            return this;
        }

        /**
         * Sets the value of {@link RosSSHKeyPairAttachmentProps#getInstanceIds}
         * @param instanceIds the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceIds(com.aliyun.ros.cdk.core.IResolvable instanceIds) {
            this.instanceIds = instanceIds;
            return this;
        }

        /**
         * Sets the value of {@link RosSSHKeyPairAttachmentProps#getKeyPairName}
         * @param keyPairName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder keyPairName(java.lang.String keyPairName) {
            this.keyPairName = keyPairName;
            return this;
        }

        /**
         * Sets the value of {@link RosSSHKeyPairAttachmentProps#getKeyPairName}
         * @param keyPairName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder keyPairName(com.aliyun.ros.cdk.core.IResolvable keyPairName) {
            this.keyPairName = keyPairName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosSSHKeyPairAttachmentProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosSSHKeyPairAttachmentProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosSSHKeyPairAttachmentProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosSSHKeyPairAttachmentProps {
        private final java.lang.Object instanceIds;
        private final java.lang.Object keyPairName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.instanceIds = software.amazon.jsii.Kernel.get(this, "instanceIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.keyPairName = software.amazon.jsii.Kernel.get(this, "keyPairName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.instanceIds = java.util.Objects.requireNonNull(builder.instanceIds, "instanceIds is required");
            this.keyPairName = java.util.Objects.requireNonNull(builder.keyPairName, "keyPairName is required");
        }

        @Override
        public final java.lang.Object getInstanceIds() {
            return this.instanceIds;
        }

        @Override
        public final java.lang.Object getKeyPairName() {
            return this.keyPairName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("instanceIds", om.valueToTree(this.getInstanceIds()));
            data.set("keyPairName", om.valueToTree(this.getKeyPairName()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.RosSSHKeyPairAttachmentProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosSSHKeyPairAttachmentProps.Jsii$Proxy that = (RosSSHKeyPairAttachmentProps.Jsii$Proxy) o;

            if (!instanceIds.equals(that.instanceIds)) return false;
            return this.keyPairName.equals(that.keyPairName);
        }

        @Override
        public final int hashCode() {
            int result = this.instanceIds.hashCode();
            result = 31 * result + (this.keyPairName.hashCode());
            return result;
        }
    }
}
