package com.aliyun.ros.cdk.sae;

/**
 * Properties for defining a <code>Secret</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-secret
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:25:00.150Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sae.$Module.class, fqn = "@alicloud/ros-cdk-sae.SecretProps")
@software.amazon.jsii.Jsii.Proxy(SecretProps.Jsii$Proxy.class)
public interface SecretProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property namespaceId: The namespace ID where the Secret instance resides.
     * <p>
     * If the namespace you are in is the default namespace, you just need to fill in the RegionId.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNamespaceId();

    /**
     * Property secretData: Secret key-value pair data, required.The format is as follows: {"Data":"{"k1":"v1", "k2":"v2"}"} k represents the key and v represents the value.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSecretData();

    /**
     * Property secretName: Secret instance name.Allows combinations of numbers, letters, en dash (-) and underscores (_) and only start with letters.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSecretName();

    /**
     * Property secretType: The currently supported Secret instance type.The values are as follows: kubernetes.io/dockerconfigjson: A confidential dictionary that stores the username and password of the mirror repository, used to pull mirror authentication during deployment.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSecretType();

    /**
     * @return a {@link Builder} of {@link SecretProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link SecretProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<SecretProps> {
        java.lang.Object namespaceId;
        java.lang.Object secretData;
        java.lang.Object secretName;
        java.lang.Object secretType;

        /**
         * Sets the value of {@link SecretProps#getNamespaceId}
         * @param namespaceId Property namespaceId: The namespace ID where the Secret instance resides. This parameter is required.
         *                    If the namespace you are in is the default namespace, you just need to fill in the RegionId.
         * @return {@code this}
         */
        public Builder namespaceId(java.lang.String namespaceId) {
            this.namespaceId = namespaceId;
            return this;
        }

        /**
         * Sets the value of {@link SecretProps#getNamespaceId}
         * @param namespaceId Property namespaceId: The namespace ID where the Secret instance resides. This parameter is required.
         *                    If the namespace you are in is the default namespace, you just need to fill in the RegionId.
         * @return {@code this}
         */
        public Builder namespaceId(com.aliyun.ros.cdk.core.IResolvable namespaceId) {
            this.namespaceId = namespaceId;
            return this;
        }

        /**
         * Sets the value of {@link SecretProps#getSecretData}
         * @param secretData Property secretData: Secret key-value pair data, required.The format is as follows: {"Data":"{"k1":"v1", "k2":"v2"}"} k represents the key and v represents the value. This parameter is required.
         * @return {@code this}
         */
        public Builder secretData(com.aliyun.ros.cdk.core.IResolvable secretData) {
            this.secretData = secretData;
            return this;
        }

        /**
         * Sets the value of {@link SecretProps#getSecretData}
         * @param secretData Property secretData: Secret key-value pair data, required.The format is as follows: {"Data":"{"k1":"v1", "k2":"v2"}"} k represents the key and v represents the value. This parameter is required.
         * @return {@code this}
         */
        public Builder secretData(java.util.Map<java.lang.String, ? extends java.lang.Object> secretData) {
            this.secretData = secretData;
            return this;
        }

        /**
         * Sets the value of {@link SecretProps#getSecretName}
         * @param secretName Property secretName: Secret instance name.Allows combinations of numbers, letters, en dash (-) and underscores (_) and only start with letters. This parameter is required.
         * @return {@code this}
         */
        public Builder secretName(java.lang.String secretName) {
            this.secretName = secretName;
            return this;
        }

        /**
         * Sets the value of {@link SecretProps#getSecretName}
         * @param secretName Property secretName: Secret instance name.Allows combinations of numbers, letters, en dash (-) and underscores (_) and only start with letters. This parameter is required.
         * @return {@code this}
         */
        public Builder secretName(com.aliyun.ros.cdk.core.IResolvable secretName) {
            this.secretName = secretName;
            return this;
        }

        /**
         * Sets the value of {@link SecretProps#getSecretType}
         * @param secretType Property secretType: The currently supported Secret instance type.The values are as follows: kubernetes.io/dockerconfigjson: A confidential dictionary that stores the username and password of the mirror repository, used to pull mirror authentication during deployment. This parameter is required.
         * @return {@code this}
         */
        public Builder secretType(java.lang.String secretType) {
            this.secretType = secretType;
            return this;
        }

        /**
         * Sets the value of {@link SecretProps#getSecretType}
         * @param secretType Property secretType: The currently supported Secret instance type.The values are as follows: kubernetes.io/dockerconfigjson: A confidential dictionary that stores the username and password of the mirror repository, used to pull mirror authentication during deployment. This parameter is required.
         * @return {@code this}
         */
        public Builder secretType(com.aliyun.ros.cdk.core.IResolvable secretType) {
            this.secretType = secretType;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link SecretProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public SecretProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link SecretProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SecretProps {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-sae.SecretProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            SecretProps.Jsii$Proxy that = (SecretProps.Jsii$Proxy) o;

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
