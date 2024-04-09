package com.aliyun.ros.cdk.ecs;

/**
 * Properties for defining a <code>RosSSHKeyPair</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-sshkeypair
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-04-09T06:05:32.370Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.RosSSHKeyPairProps")
@software.amazon.jsii.Jsii.Proxy(RosSSHKeyPairProps.Jsii$Proxy.class)
public interface RosSSHKeyPairProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getKeyPairName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPublicKeyBody() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.ecs.RosSSHKeyPair.TagsProperty> getTags() {
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
        java.lang.Object keyPairName;
        java.lang.Object publicKeyBody;
        java.lang.Object resourceGroupId;
        java.util.List<com.aliyun.ros.cdk.ecs.RosSSHKeyPair.TagsProperty> tags;

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
         * Sets the value of {@link RosSSHKeyPairProps#getKeyPairName}
         * @param keyPairName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder keyPairName(com.aliyun.ros.cdk.core.IResolvable keyPairName) {
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
         * Sets the value of {@link RosSSHKeyPairProps#getPublicKeyBody}
         * @param publicKeyBody the value to be set.
         * @return {@code this}
         */
        public Builder publicKeyBody(com.aliyun.ros.cdk.core.IResolvable publicKeyBody) {
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
         * Sets the value of {@link RosSSHKeyPairProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosSSHKeyPairProps#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.ecs.RosSSHKeyPair.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.ecs.RosSSHKeyPair.TagsProperty>)tags;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosSSHKeyPairProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosSSHKeyPairProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosSSHKeyPairProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosSSHKeyPairProps {
        private final java.lang.Object keyPairName;
        private final java.lang.Object publicKeyBody;
        private final java.lang.Object resourceGroupId;
        private final java.util.List<com.aliyun.ros.cdk.ecs.RosSSHKeyPair.TagsProperty> tags;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.keyPairName = software.amazon.jsii.Kernel.get(this, "keyPairName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.publicKeyBody = software.amazon.jsii.Kernel.get(this, "publicKeyBody", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.RosSSHKeyPair.TagsProperty.class)));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.keyPairName = java.util.Objects.requireNonNull(builder.keyPairName, "keyPairName is required");
            this.publicKeyBody = builder.publicKeyBody;
            this.resourceGroupId = builder.resourceGroupId;
            this.tags = (java.util.List<com.aliyun.ros.cdk.ecs.RosSSHKeyPair.TagsProperty>)builder.tags;
        }

        @Override
        public final java.lang.Object getKeyPairName() {
            return this.keyPairName;
        }

        @Override
        public final java.lang.Object getPublicKeyBody() {
            return this.publicKeyBody;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.ecs.RosSSHKeyPair.TagsProperty> getTags() {
            return this.tags;
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
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
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
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            return this.tags != null ? this.tags.equals(that.tags) : that.tags == null;
        }

        @Override
        public final int hashCode() {
            int result = this.keyPairName.hashCode();
            result = 31 * result + (this.publicKeyBody != null ? this.publicKeyBody.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            return result;
        }
    }
}
