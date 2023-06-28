package com.aliyun.ros.cdk.oos;

/**
 * Properties for defining a <code>ALIYUN::OOS::SecretParameter</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.84.0 (build 5404dcf)", date = "2023-06-28T08:22:29.561Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oos.$Module.class, fqn = "@alicloud/ros-cdk-oos.RosSecretParameterProps")
@software.amazon.jsii.Jsii.Proxy(RosSecretParameterProps.Jsii$Proxy.class)
public interface RosSecretParameterProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSecretParameterName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getValue();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getConstraints() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getKeyId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.oos.RosSecretParameter.TagsProperty> getTags() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosSecretParameterProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosSecretParameterProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosSecretParameterProps> {
        java.lang.Object secretParameterName;
        java.lang.Object value;
        java.lang.Object constraints;
        java.lang.Object description;
        java.lang.Object keyId;
        java.lang.Object resourceGroupId;
        java.util.List<com.aliyun.ros.cdk.oos.RosSecretParameter.TagsProperty> tags;

        /**
         * Sets the value of {@link RosSecretParameterProps#getSecretParameterName}
         * @param secretParameterName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder secretParameterName(java.lang.String secretParameterName) {
            this.secretParameterName = secretParameterName;
            return this;
        }

        /**
         * Sets the value of {@link RosSecretParameterProps#getSecretParameterName}
         * @param secretParameterName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder secretParameterName(com.aliyun.ros.cdk.core.IResolvable secretParameterName) {
            this.secretParameterName = secretParameterName;
            return this;
        }

        /**
         * Sets the value of {@link RosSecretParameterProps#getValue}
         * @param value the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder value(java.lang.String value) {
            this.value = value;
            return this;
        }

        /**
         * Sets the value of {@link RosSecretParameterProps#getValue}
         * @param value the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder value(com.aliyun.ros.cdk.core.IResolvable value) {
            this.value = value;
            return this;
        }

        /**
         * Sets the value of {@link RosSecretParameterProps#getConstraints}
         * @param constraints the value to be set.
         * @return {@code this}
         */
        public Builder constraints(com.aliyun.ros.cdk.core.IResolvable constraints) {
            this.constraints = constraints;
            return this;
        }

        /**
         * Sets the value of {@link RosSecretParameterProps#getConstraints}
         * @param constraints the value to be set.
         * @return {@code this}
         */
        public Builder constraints(java.util.Map<java.lang.String, ? extends java.lang.Object> constraints) {
            this.constraints = constraints;
            return this;
        }

        /**
         * Sets the value of {@link RosSecretParameterProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosSecretParameterProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosSecretParameterProps#getKeyId}
         * @param keyId the value to be set.
         * @return {@code this}
         */
        public Builder keyId(java.lang.String keyId) {
            this.keyId = keyId;
            return this;
        }

        /**
         * Sets the value of {@link RosSecretParameterProps#getKeyId}
         * @param keyId the value to be set.
         * @return {@code this}
         */
        public Builder keyId(com.aliyun.ros.cdk.core.IResolvable keyId) {
            this.keyId = keyId;
            return this;
        }

        /**
         * Sets the value of {@link RosSecretParameterProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosSecretParameterProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosSecretParameterProps#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.oos.RosSecretParameter.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.oos.RosSecretParameter.TagsProperty>)tags;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosSecretParameterProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosSecretParameterProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosSecretParameterProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosSecretParameterProps {
        private final java.lang.Object secretParameterName;
        private final java.lang.Object value;
        private final java.lang.Object constraints;
        private final java.lang.Object description;
        private final java.lang.Object keyId;
        private final java.lang.Object resourceGroupId;
        private final java.util.List<com.aliyun.ros.cdk.oos.RosSecretParameter.TagsProperty> tags;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.secretParameterName = software.amazon.jsii.Kernel.get(this, "secretParameterName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.value = software.amazon.jsii.Kernel.get(this, "value", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.constraints = software.amazon.jsii.Kernel.get(this, "constraints", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.keyId = software.amazon.jsii.Kernel.get(this, "keyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.oos.RosSecretParameter.TagsProperty.class)));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.secretParameterName = java.util.Objects.requireNonNull(builder.secretParameterName, "secretParameterName is required");
            this.value = java.util.Objects.requireNonNull(builder.value, "value is required");
            this.constraints = builder.constraints;
            this.description = builder.description;
            this.keyId = builder.keyId;
            this.resourceGroupId = builder.resourceGroupId;
            this.tags = (java.util.List<com.aliyun.ros.cdk.oos.RosSecretParameter.TagsProperty>)builder.tags;
        }

        @Override
        public final java.lang.Object getSecretParameterName() {
            return this.secretParameterName;
        }

        @Override
        public final java.lang.Object getValue() {
            return this.value;
        }

        @Override
        public final java.lang.Object getConstraints() {
            return this.constraints;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getKeyId() {
            return this.keyId;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.oos.RosSecretParameter.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("secretParameterName", om.valueToTree(this.getSecretParameterName()));
            data.set("value", om.valueToTree(this.getValue()));
            if (this.getConstraints() != null) {
                data.set("constraints", om.valueToTree(this.getConstraints()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getKeyId() != null) {
                data.set("keyId", om.valueToTree(this.getKeyId()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-oos.RosSecretParameterProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosSecretParameterProps.Jsii$Proxy that = (RosSecretParameterProps.Jsii$Proxy) o;

            if (!secretParameterName.equals(that.secretParameterName)) return false;
            if (!value.equals(that.value)) return false;
            if (this.constraints != null ? !this.constraints.equals(that.constraints) : that.constraints != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.keyId != null ? !this.keyId.equals(that.keyId) : that.keyId != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            return this.tags != null ? this.tags.equals(that.tags) : that.tags == null;
        }

        @Override
        public final int hashCode() {
            int result = this.secretParameterName.hashCode();
            result = 31 * result + (this.value.hashCode());
            result = 31 * result + (this.constraints != null ? this.constraints.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.keyId != null ? this.keyId.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            return result;
        }
    }
}
