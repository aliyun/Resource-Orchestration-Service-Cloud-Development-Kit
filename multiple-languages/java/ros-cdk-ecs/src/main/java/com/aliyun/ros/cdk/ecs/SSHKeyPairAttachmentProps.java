package com.aliyun.ros.cdk.ecs;

/**
 * Properties for defining a `ALIYUN::ECS::SSHKeyPairAttachment`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-20T10:55:02.835Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.SSHKeyPairAttachmentProps")
@software.amazon.jsii.Jsii.Proxy(SSHKeyPairAttachmentProps.Jsii$Proxy.class)
public interface SSHKeyPairAttachmentProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceIds();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getKeyPairName();

    /**
     * @return a {@link Builder} of {@link SSHKeyPairAttachmentProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link SSHKeyPairAttachmentProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<SSHKeyPairAttachmentProps> {
        private java.lang.Object instanceIds;
        private java.lang.String keyPairName;

        /**
         * Sets the value of {@link SSHKeyPairAttachmentProps#getInstanceIds}
         * @param instanceIds the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceIds(java.util.List<? extends java.lang.Object> instanceIds) {
            this.instanceIds = instanceIds;
            return this;
        }

        /**
         * Sets the value of {@link SSHKeyPairAttachmentProps#getInstanceIds}
         * @param instanceIds the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceIds(com.aliyun.ros.cdk.core.IResolvable instanceIds) {
            this.instanceIds = instanceIds;
            return this;
        }

        /**
         * Sets the value of {@link SSHKeyPairAttachmentProps#getKeyPairName}
         * @param keyPairName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder keyPairName(java.lang.String keyPairName) {
            this.keyPairName = keyPairName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link SSHKeyPairAttachmentProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public SSHKeyPairAttachmentProps build() {
            return new Jsii$Proxy(instanceIds, keyPairName);
        }
    }

    /**
     * An implementation for {@link SSHKeyPairAttachmentProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SSHKeyPairAttachmentProps {
        private final java.lang.Object instanceIds;
        private final java.lang.String keyPairName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.instanceIds = software.amazon.jsii.Kernel.get(this, "instanceIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.keyPairName = software.amazon.jsii.Kernel.get(this, "keyPairName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.Object instanceIds, final java.lang.String keyPairName) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.instanceIds = java.util.Objects.requireNonNull(instanceIds, "instanceIds is required");
            this.keyPairName = java.util.Objects.requireNonNull(keyPairName, "keyPairName is required");
        }

        @Override
        public final java.lang.Object getInstanceIds() {
            return this.instanceIds;
        }

        @Override
        public final java.lang.String getKeyPairName() {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.SSHKeyPairAttachmentProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            SSHKeyPairAttachmentProps.Jsii$Proxy that = (SSHKeyPairAttachmentProps.Jsii$Proxy) o;

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
