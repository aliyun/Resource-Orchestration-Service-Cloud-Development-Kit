package com.aliyun.ros.cdk.kms;

/**
 * Properties for defining a `ALIYUN::KMS::Secret`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-02-04T07:29:36.052Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.kms.$Module.class, fqn = "@alicloud/ros-cdk-kms.SecretProps")
@software.amazon.jsii.Jsii.Proxy(SecretProps.Jsii$Proxy.class)
public interface SecretProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getSecretData();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getSecretName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getVersionId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getEncryptionKeyId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getForceDeleteWithoutRecovery() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getRecoveryWindowInDays() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getSecretDataType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getVersionStages() {
        return null;
    }

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
        private java.lang.String secretData;
        private java.lang.String secretName;
        private java.lang.String versionId;
        private java.lang.String description;
        private java.lang.String encryptionKeyId;
        private java.lang.Object forceDeleteWithoutRecovery;
        private java.lang.Number recoveryWindowInDays;
        private java.lang.String secretDataType;
        private java.util.List<java.lang.String> versionStages;

        /**
         * Sets the value of {@link SecretProps#getSecretData}
         * @param secretData the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder secretData(java.lang.String secretData) {
            this.secretData = secretData;
            return this;
        }

        /**
         * Sets the value of {@link SecretProps#getSecretName}
         * @param secretName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder secretName(java.lang.String secretName) {
            this.secretName = secretName;
            return this;
        }

        /**
         * Sets the value of {@link SecretProps#getVersionId}
         * @param versionId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder versionId(java.lang.String versionId) {
            this.versionId = versionId;
            return this;
        }

        /**
         * Sets the value of {@link SecretProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link SecretProps#getEncryptionKeyId}
         * @param encryptionKeyId the value to be set.
         * @return {@code this}
         */
        public Builder encryptionKeyId(java.lang.String encryptionKeyId) {
            this.encryptionKeyId = encryptionKeyId;
            return this;
        }

        /**
         * Sets the value of {@link SecretProps#getForceDeleteWithoutRecovery}
         * @param forceDeleteWithoutRecovery the value to be set.
         * @return {@code this}
         */
        public Builder forceDeleteWithoutRecovery(java.lang.Boolean forceDeleteWithoutRecovery) {
            this.forceDeleteWithoutRecovery = forceDeleteWithoutRecovery;
            return this;
        }

        /**
         * Sets the value of {@link SecretProps#getForceDeleteWithoutRecovery}
         * @param forceDeleteWithoutRecovery the value to be set.
         * @return {@code this}
         */
        public Builder forceDeleteWithoutRecovery(com.aliyun.ros.cdk.core.IResolvable forceDeleteWithoutRecovery) {
            this.forceDeleteWithoutRecovery = forceDeleteWithoutRecovery;
            return this;
        }

        /**
         * Sets the value of {@link SecretProps#getRecoveryWindowInDays}
         * @param recoveryWindowInDays the value to be set.
         * @return {@code this}
         */
        public Builder recoveryWindowInDays(java.lang.Number recoveryWindowInDays) {
            this.recoveryWindowInDays = recoveryWindowInDays;
            return this;
        }

        /**
         * Sets the value of {@link SecretProps#getSecretDataType}
         * @param secretDataType the value to be set.
         * @return {@code this}
         */
        public Builder secretDataType(java.lang.String secretDataType) {
            this.secretDataType = secretDataType;
            return this;
        }

        /**
         * Sets the value of {@link SecretProps#getVersionStages}
         * @param versionStages the value to be set.
         * @return {@code this}
         */
        public Builder versionStages(java.util.List<java.lang.String> versionStages) {
            this.versionStages = versionStages;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link SecretProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public SecretProps build() {
            return new Jsii$Proxy(secretData, secretName, versionId, description, encryptionKeyId, forceDeleteWithoutRecovery, recoveryWindowInDays, secretDataType, versionStages);
        }
    }

    /**
     * An implementation for {@link SecretProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SecretProps {
        private final java.lang.String secretData;
        private final java.lang.String secretName;
        private final java.lang.String versionId;
        private final java.lang.String description;
        private final java.lang.String encryptionKeyId;
        private final java.lang.Object forceDeleteWithoutRecovery;
        private final java.lang.Number recoveryWindowInDays;
        private final java.lang.String secretDataType;
        private final java.util.List<java.lang.String> versionStages;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.secretData = software.amazon.jsii.Kernel.get(this, "secretData", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.secretName = software.amazon.jsii.Kernel.get(this, "secretName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.versionId = software.amazon.jsii.Kernel.get(this, "versionId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.encryptionKeyId = software.amazon.jsii.Kernel.get(this, "encryptionKeyId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.forceDeleteWithoutRecovery = software.amazon.jsii.Kernel.get(this, "forceDeleteWithoutRecovery", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.recoveryWindowInDays = software.amazon.jsii.Kernel.get(this, "recoveryWindowInDays", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.secretDataType = software.amazon.jsii.Kernel.get(this, "secretDataType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.versionStages = software.amazon.jsii.Kernel.get(this, "versionStages", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String secretData, final java.lang.String secretName, final java.lang.String versionId, final java.lang.String description, final java.lang.String encryptionKeyId, final java.lang.Object forceDeleteWithoutRecovery, final java.lang.Number recoveryWindowInDays, final java.lang.String secretDataType, final java.util.List<java.lang.String> versionStages) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.secretData = java.util.Objects.requireNonNull(secretData, "secretData is required");
            this.secretName = java.util.Objects.requireNonNull(secretName, "secretName is required");
            this.versionId = java.util.Objects.requireNonNull(versionId, "versionId is required");
            this.description = description;
            this.encryptionKeyId = encryptionKeyId;
            this.forceDeleteWithoutRecovery = forceDeleteWithoutRecovery;
            this.recoveryWindowInDays = recoveryWindowInDays;
            this.secretDataType = secretDataType;
            this.versionStages = versionStages;
        }

        @Override
        public final java.lang.String getSecretData() {
            return this.secretData;
        }

        @Override
        public final java.lang.String getSecretName() {
            return this.secretName;
        }

        @Override
        public final java.lang.String getVersionId() {
            return this.versionId;
        }

        @Override
        public final java.lang.String getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.String getEncryptionKeyId() {
            return this.encryptionKeyId;
        }

        @Override
        public final java.lang.Object getForceDeleteWithoutRecovery() {
            return this.forceDeleteWithoutRecovery;
        }

        @Override
        public final java.lang.Number getRecoveryWindowInDays() {
            return this.recoveryWindowInDays;
        }

        @Override
        public final java.lang.String getSecretDataType() {
            return this.secretDataType;
        }

        @Override
        public final java.util.List<java.lang.String> getVersionStages() {
            return this.versionStages;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("secretData", om.valueToTree(this.getSecretData()));
            data.set("secretName", om.valueToTree(this.getSecretName()));
            data.set("versionId", om.valueToTree(this.getVersionId()));
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getEncryptionKeyId() != null) {
                data.set("encryptionKeyId", om.valueToTree(this.getEncryptionKeyId()));
            }
            if (this.getForceDeleteWithoutRecovery() != null) {
                data.set("forceDeleteWithoutRecovery", om.valueToTree(this.getForceDeleteWithoutRecovery()));
            }
            if (this.getRecoveryWindowInDays() != null) {
                data.set("recoveryWindowInDays", om.valueToTree(this.getRecoveryWindowInDays()));
            }
            if (this.getSecretDataType() != null) {
                data.set("secretDataType", om.valueToTree(this.getSecretDataType()));
            }
            if (this.getVersionStages() != null) {
                data.set("versionStages", om.valueToTree(this.getVersionStages()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-kms.SecretProps"));
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

            if (!secretData.equals(that.secretData)) return false;
            if (!secretName.equals(that.secretName)) return false;
            if (!versionId.equals(that.versionId)) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.encryptionKeyId != null ? !this.encryptionKeyId.equals(that.encryptionKeyId) : that.encryptionKeyId != null) return false;
            if (this.forceDeleteWithoutRecovery != null ? !this.forceDeleteWithoutRecovery.equals(that.forceDeleteWithoutRecovery) : that.forceDeleteWithoutRecovery != null) return false;
            if (this.recoveryWindowInDays != null ? !this.recoveryWindowInDays.equals(that.recoveryWindowInDays) : that.recoveryWindowInDays != null) return false;
            if (this.secretDataType != null ? !this.secretDataType.equals(that.secretDataType) : that.secretDataType != null) return false;
            return this.versionStages != null ? this.versionStages.equals(that.versionStages) : that.versionStages == null;
        }

        @Override
        public final int hashCode() {
            int result = this.secretData.hashCode();
            result = 31 * result + (this.secretName.hashCode());
            result = 31 * result + (this.versionId.hashCode());
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.encryptionKeyId != null ? this.encryptionKeyId.hashCode() : 0);
            result = 31 * result + (this.forceDeleteWithoutRecovery != null ? this.forceDeleteWithoutRecovery.hashCode() : 0);
            result = 31 * result + (this.recoveryWindowInDays != null ? this.recoveryWindowInDays.hashCode() : 0);
            result = 31 * result + (this.secretDataType != null ? this.secretDataType.hashCode() : 0);
            result = 31 * result + (this.versionStages != null ? this.versionStages.hashCode() : 0);
            return result;
        }
    }
}
