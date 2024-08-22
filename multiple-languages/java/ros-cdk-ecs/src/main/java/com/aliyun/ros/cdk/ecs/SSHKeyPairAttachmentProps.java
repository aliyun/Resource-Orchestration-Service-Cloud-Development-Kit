package com.aliyun.ros.cdk.ecs;

/**
 * Properties for defining a <code>SSHKeyPairAttachment</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-sshkeypairattachment
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-22T08:56:20.362Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.SSHKeyPairAttachmentProps")
@software.amazon.jsii.Jsii.Proxy(SSHKeyPairAttachmentProps.Jsii$Proxy.class)
public interface SSHKeyPairAttachmentProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property instanceIds: The comma delimited ECS instance id list.
     * <p>
     * Only support Linux.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceIds();

    /**
     * Property keyPairName: SSH key pair name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getKeyPairName();

    /**
     * Property autoReboot: If the instance is running, whether to reboot the instance for the ssh key to take effect.
     * <p>
     * Default: false
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoReboot() {
        return null;
    }

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
        java.lang.Object instanceIds;
        java.lang.Object keyPairName;
        java.lang.Object autoReboot;

        /**
         * Sets the value of {@link SSHKeyPairAttachmentProps#getInstanceIds}
         * @param instanceIds Property instanceIds: The comma delimited ECS instance id list. This parameter is required.
         *                    Only support Linux.
         * @return {@code this}
         */
        public Builder instanceIds(java.util.List<? extends java.lang.Object> instanceIds) {
            this.instanceIds = instanceIds;
            return this;
        }

        /**
         * Sets the value of {@link SSHKeyPairAttachmentProps#getInstanceIds}
         * @param instanceIds Property instanceIds: The comma delimited ECS instance id list. This parameter is required.
         *                    Only support Linux.
         * @return {@code this}
         */
        public Builder instanceIds(com.aliyun.ros.cdk.core.IResolvable instanceIds) {
            this.instanceIds = instanceIds;
            return this;
        }

        /**
         * Sets the value of {@link SSHKeyPairAttachmentProps#getKeyPairName}
         * @param keyPairName Property keyPairName: SSH key pair name. This parameter is required.
         * @return {@code this}
         */
        public Builder keyPairName(java.lang.String keyPairName) {
            this.keyPairName = keyPairName;
            return this;
        }

        /**
         * Sets the value of {@link SSHKeyPairAttachmentProps#getKeyPairName}
         * @param keyPairName Property keyPairName: SSH key pair name. This parameter is required.
         * @return {@code this}
         */
        public Builder keyPairName(com.aliyun.ros.cdk.core.IResolvable keyPairName) {
            this.keyPairName = keyPairName;
            return this;
        }

        /**
         * Sets the value of {@link SSHKeyPairAttachmentProps#getAutoReboot}
         * @param autoReboot Property autoReboot: If the instance is running, whether to reboot the instance for the ssh key to take effect.
         *                   Default: false
         * @return {@code this}
         */
        public Builder autoReboot(java.lang.Boolean autoReboot) {
            this.autoReboot = autoReboot;
            return this;
        }

        /**
         * Sets the value of {@link SSHKeyPairAttachmentProps#getAutoReboot}
         * @param autoReboot Property autoReboot: If the instance is running, whether to reboot the instance for the ssh key to take effect.
         *                   Default: false
         * @return {@code this}
         */
        public Builder autoReboot(com.aliyun.ros.cdk.core.IResolvable autoReboot) {
            this.autoReboot = autoReboot;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link SSHKeyPairAttachmentProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public SSHKeyPairAttachmentProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link SSHKeyPairAttachmentProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SSHKeyPairAttachmentProps {
        private final java.lang.Object instanceIds;
        private final java.lang.Object keyPairName;
        private final java.lang.Object autoReboot;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.instanceIds = software.amazon.jsii.Kernel.get(this, "instanceIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.keyPairName = software.amazon.jsii.Kernel.get(this, "keyPairName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoReboot = software.amazon.jsii.Kernel.get(this, "autoReboot", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.instanceIds = java.util.Objects.requireNonNull(builder.instanceIds, "instanceIds is required");
            this.keyPairName = java.util.Objects.requireNonNull(builder.keyPairName, "keyPairName is required");
            this.autoReboot = builder.autoReboot;
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
        public final java.lang.Object getAutoReboot() {
            return this.autoReboot;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("instanceIds", om.valueToTree(this.getInstanceIds()));
            data.set("keyPairName", om.valueToTree(this.getKeyPairName()));
            if (this.getAutoReboot() != null) {
                data.set("autoReboot", om.valueToTree(this.getAutoReboot()));
            }

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
            if (!keyPairName.equals(that.keyPairName)) return false;
            return this.autoReboot != null ? this.autoReboot.equals(that.autoReboot) : that.autoReboot == null;
        }

        @Override
        public final int hashCode() {
            int result = this.instanceIds.hashCode();
            result = 31 * result + (this.keyPairName.hashCode());
            result = 31 * result + (this.autoReboot != null ? this.autoReboot.hashCode() : 0);
            return result;
        }
    }
}
