package com.aliyun.ros.cdk.ecs;

/**
 * Properties for defining a `ALIYUN::ECS::SSHKeyPair`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:33.771Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.RosSSHKeyPairProps")
@software.amazon.jsii.Jsii.Proxy(RosSSHKeyPairProps.Jsii$Proxy.class)
public interface RosSSHKeyPairProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getKeyPairName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getPublicKeyBody() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getResourceGroupId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosSSHKeyPairProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosSSHKeyPairProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosSSHKeyPairProps> {
        private java.lang.String keyPairName;
        private java.lang.String publicKeyBody;
        private java.lang.String resourceGroupId;

        /**
         * Sets the value of {@link RosSSHKeyPairProps#getKeyPairName}
         * @param keyPairName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder keyPairName(java.lang.String keyPairName) {
            this.keyPairName = keyPairName;
            return this;
        }

        /**
         * Sets the value of {@link RosSSHKeyPairProps#getPublicKeyBody}
         * @param publicKeyBody the value to be set.
         * @return {@code this}
         */
        public Builder publicKeyBody(java.lang.String publicKeyBody) {
            this.publicKeyBody = publicKeyBody;
            return this;
        }

        /**
         * Sets the value of {@link RosSSHKeyPairProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosSSHKeyPairProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosSSHKeyPairProps build() {
            return new Jsii$Proxy(keyPairName, publicKeyBody, resourceGroupId);
        }
    }

    /**
     * An implementation for {@link RosSSHKeyPairProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosSSHKeyPairProps {
        private final java.lang.String keyPairName;
        private final java.lang.String publicKeyBody;
        private final java.lang.String resourceGroupId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.keyPairName = software.amazon.jsii.Kernel.get(this, "keyPairName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.publicKeyBody = software.amazon.jsii.Kernel.get(this, "publicKeyBody", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String keyPairName, final java.lang.String publicKeyBody, final java.lang.String resourceGroupId) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.keyPairName = java.util.Objects.requireNonNull(keyPairName, "keyPairName is required");
            this.publicKeyBody = publicKeyBody;
            this.resourceGroupId = resourceGroupId;
        }

        @Override
        public final java.lang.String getKeyPairName() {
            return this.keyPairName;
        }

        @Override
        public final java.lang.String getPublicKeyBody() {
            return this.publicKeyBody;
        }

        @Override
        public final java.lang.String getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("keyPairName", om.valueToTree(this.getKeyPairName()));
            if (this.getPublicKeyBody() != null) {
                data.set("publicKeyBody", om.valueToTree(this.getPublicKeyBody()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.RosSSHKeyPairProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosSSHKeyPairProps.Jsii$Proxy that = (RosSSHKeyPairProps.Jsii$Proxy) o;

            if (!keyPairName.equals(that.keyPairName)) return false;
            if (this.publicKeyBody != null ? !this.publicKeyBody.equals(that.publicKeyBody) : that.publicKeyBody != null) return false;
            return this.resourceGroupId != null ? this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.keyPairName.hashCode();
            result = 31 * result + (this.publicKeyBody != null ? this.publicKeyBody.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            return result;
        }
    }
}
