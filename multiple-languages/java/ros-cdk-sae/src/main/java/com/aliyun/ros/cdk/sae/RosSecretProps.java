package com.aliyun.ros.cdk.sae;

/**
 * Properties for defining a <code>RosSecret</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-secret
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:25:00.147Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sae.$Module.class, fqn = "@alicloud/ros-cdk-sae.RosSecretProps")
@software.amazon.jsii.Jsii.Proxy(RosSecretProps.Jsii$Proxy.class)
public interface RosSecretProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNamespaceId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSecretData();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSecretName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSecretType();

    /**
     * @return a {@link Builder} of {@link RosSecretProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosSecretProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosSecretProps> {
        java.lang.Object namespaceId;
        java.lang.Object secretData;
        java.lang.Object secretName;
        java.lang.Object secretType;

        /**
         * Sets the value of {@link RosSecretProps#getNamespaceId}
         * @param namespaceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder namespaceId(java.lang.String namespaceId) {
            this.namespaceId = namespaceId;
            return this;
        }

        /**
         * Sets the value of {@link RosSecretProps#getNamespaceId}
         * @param namespaceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder namespaceId(com.aliyun.ros.cdk.core.IResolvable namespaceId) {
            this.namespaceId = namespaceId;
            return this;
        }

        /**
         * Sets the value of {@link RosSecretProps#getSecretData}
         * @param secretData the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder secretData(com.aliyun.ros.cdk.core.IResolvable secretData) {
            this.secretData = secretData;
            return this;
        }

        /**
         * Sets the value of {@link RosSecretProps#getSecretData}
         * @param secretData the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder secretData(java.util.Map<java.lang.String, ? extends java.lang.Object> secretData) {
            this.secretData = secretData;
            return this;
        }

        /**
         * Sets the value of {@link RosSecretProps#getSecretName}
         * @param secretName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder secretName(java.lang.String secretName) {
            this.secretName = secretName;
            return this;
        }

        /**
         * Sets the value of {@link RosSecretProps#getSecretName}
         * @param secretName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder secretName(com.aliyun.ros.cdk.core.IResolvable secretName) {
            this.secretName = secretName;
            return this;
        }

        /**
         * Sets the value of {@link RosSecretProps#getSecretType}
         * @param secretType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder secretType(java.lang.String secretType) {
            this.secretType = secretType;
            return this;
        }

        /**
         * Sets the value of {@link RosSecretProps#getSecretType}
         * @param secretType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder secretType(com.aliyun.ros.cdk.core.IResolvable secretType) {
            this.secretType = secretType;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosSecretProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosSecretProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosSecretProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosSecretProps {
        private final java.lang.Object namespaceId;
        private final java.lang.Object secretData;
        private final java.lang.Object secretName;
        private final java.lang.Object secretType;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.namespaceId = software.amazon.jsii.Kernel.get(this, "namespaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.secretData = software.amazon.jsii.Kernel.get(this, "secretData", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.secretName = software.amazon.jsii.Kernel.get(this, "secretName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.secretType = software.amazon.jsii.Kernel.get(this, "secretType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.namespaceId = java.util.Objects.requireNonNull(builder.namespaceId, "namespaceId is required");
            this.secretData = java.util.Objects.requireNonNull(builder.secretData, "secretData is required");
            this.secretName = java.util.Objects.requireNonNull(builder.secretName, "secretName is required");
            this.secretType = java.util.Objects.requireNonNull(builder.secretType, "secretType is required");
        }

        @Override
        public final java.lang.Object getNamespaceId() {
            return this.namespaceId;
        }

        @Override
        public final java.lang.Object getSecretData() {
            return this.secretData;
        }

        @Override
        public final java.lang.Object getSecretName() {
            return this.secretName;
        }

        @Override
        public final java.lang.Object getSecretType() {
            return this.secretType;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("namespaceId", om.valueToTree(this.getNamespaceId()));
            data.set("secretData", om.valueToTree(this.getSecretData()));
            data.set("secretName", om.valueToTree(this.getSecretName()));
            data.set("secretType", om.valueToTree(this.getSecretType()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-sae.RosSecretProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosSecretProps.Jsii$Proxy that = (RosSecretProps.Jsii$Proxy) o;

            if (!namespaceId.equals(that.namespaceId)) return false;
            if (!secretData.equals(that.secretData)) return false;
            if (!secretName.equals(that.secretName)) return false;
            return this.secretType.equals(that.secretType);
        }

        @Override
        public final int hashCode() {
            int result = this.namespaceId.hashCode();
            result = 31 * result + (this.secretData.hashCode());
            result = 31 * result + (this.secretName.hashCode());
            result = 31 * result + (this.secretType.hashCode());
            return result;
        }
    }
}
