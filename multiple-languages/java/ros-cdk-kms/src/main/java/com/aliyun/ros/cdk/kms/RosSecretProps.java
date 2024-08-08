package com.aliyun.ros.cdk.kms;

/**
 * Properties for defining a <code>RosSecret</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kms-secret
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-08T09:17:11.706Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.kms.$Module.class, fqn = "@alicloud/ros-cdk-kms.RosSecretProps")
@software.amazon.jsii.Jsii.Proxy(RosSecretProps.Jsii$Proxy.class)
public interface RosSecretProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSecretData();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSecretName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVersionId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDkmsInstanceId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnableAutomaticRotation() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEncryptionKeyId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getExtendedConfig() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getForceDeleteWithoutRecovery() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRecoveryWindowInDays() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRotationInterval() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecretDataType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecretType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVersionStages() {
        return null;
    }

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
        java.lang.Object secretData;
        java.lang.Object secretName;
        java.lang.Object versionId;
        java.lang.Object description;
        java.lang.Object dkmsInstanceId;
        java.lang.Object enableAutomaticRotation;
        java.lang.Object encryptionKeyId;
        java.lang.Object extendedConfig;
        java.lang.Object forceDeleteWithoutRecovery;
        java.lang.Object recoveryWindowInDays;
        java.lang.Object rotationInterval;
        java.lang.Object secretDataType;
        java.lang.Object secretType;
        java.lang.Object versionStages;

        /**
         * Sets the value of {@link RosSecretProps#getSecretData}
         * @param secretData the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder secretData(java.lang.String secretData) {
            this.secretData = secretData;
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
         * Sets the value of {@link RosSecretProps#getVersionId}
         * @param versionId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder versionId(java.lang.String versionId) {
            this.versionId = versionId;
            return this;
        }

        /**
         * Sets the value of {@link RosSecretProps#getVersionId}
         * @param versionId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder versionId(com.aliyun.ros.cdk.core.IResolvable versionId) {
            this.versionId = versionId;
            return this;
        }

        /**
         * Sets the value of {@link RosSecretProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosSecretProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosSecretProps#getDkmsInstanceId}
         * @param dkmsInstanceId the value to be set.
         * @return {@code this}
         */
        public Builder dkmsInstanceId(java.lang.String dkmsInstanceId) {
            this.dkmsInstanceId = dkmsInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosSecretProps#getDkmsInstanceId}
         * @param dkmsInstanceId the value to be set.
         * @return {@code this}
         */
        public Builder dkmsInstanceId(com.aliyun.ros.cdk.core.IResolvable dkmsInstanceId) {
            this.dkmsInstanceId = dkmsInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosSecretProps#getEnableAutomaticRotation}
         * @param enableAutomaticRotation the value to be set.
         * @return {@code this}
         */
        public Builder enableAutomaticRotation(java.lang.Boolean enableAutomaticRotation) {
            this.enableAutomaticRotation = enableAutomaticRotation;
            return this;
        }

        /**
         * Sets the value of {@link RosSecretProps#getEnableAutomaticRotation}
         * @param enableAutomaticRotation the value to be set.
         * @return {@code this}
         */
        public Builder enableAutomaticRotation(com.aliyun.ros.cdk.core.IResolvable enableAutomaticRotation) {
            this.enableAutomaticRotation = enableAutomaticRotation;
            return this;
        }

        /**
         * Sets the value of {@link RosSecretProps#getEncryptionKeyId}
         * @param encryptionKeyId the value to be set.
         * @return {@code this}
         */
        public Builder encryptionKeyId(java.lang.String encryptionKeyId) {
            this.encryptionKeyId = encryptionKeyId;
            return this;
        }

        /**
         * Sets the value of {@link RosSecretProps#getEncryptionKeyId}
         * @param encryptionKeyId the value to be set.
         * @return {@code this}
         */
        public Builder encryptionKeyId(com.aliyun.ros.cdk.core.IResolvable encryptionKeyId) {
            this.encryptionKeyId = encryptionKeyId;
            return this;
        }

        /**
         * Sets the value of {@link RosSecretProps#getExtendedConfig}
         * @param extendedConfig the value to be set.
         * @return {@code this}
         */
        public Builder extendedConfig(com.aliyun.ros.cdk.core.IResolvable extendedConfig) {
            this.extendedConfig = extendedConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosSecretProps#getExtendedConfig}
         * @param extendedConfig the value to be set.
         * @return {@code this}
         */
        public Builder extendedConfig(java.util.Map<java.lang.String, ? extends java.lang.Object> extendedConfig) {
            this.extendedConfig = extendedConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosSecretProps#getForceDeleteWithoutRecovery}
         * @param forceDeleteWithoutRecovery the value to be set.
         * @return {@code this}
         */
        public Builder forceDeleteWithoutRecovery(java.lang.Boolean forceDeleteWithoutRecovery) {
            this.forceDeleteWithoutRecovery = forceDeleteWithoutRecovery;
            return this;
        }

        /**
         * Sets the value of {@link RosSecretProps#getForceDeleteWithoutRecovery}
         * @param forceDeleteWithoutRecovery the value to be set.
         * @return {@code this}
         */
        public Builder forceDeleteWithoutRecovery(com.aliyun.ros.cdk.core.IResolvable forceDeleteWithoutRecovery) {
            this.forceDeleteWithoutRecovery = forceDeleteWithoutRecovery;
            return this;
        }

        /**
         * Sets the value of {@link RosSecretProps#getRecoveryWindowInDays}
         * @param recoveryWindowInDays the value to be set.
         * @return {@code this}
         */
        public Builder recoveryWindowInDays(java.lang.Number recoveryWindowInDays) {
            this.recoveryWindowInDays = recoveryWindowInDays;
            return this;
        }

        /**
         * Sets the value of {@link RosSecretProps#getRecoveryWindowInDays}
         * @param recoveryWindowInDays the value to be set.
         * @return {@code this}
         */
        public Builder recoveryWindowInDays(com.aliyun.ros.cdk.core.IResolvable recoveryWindowInDays) {
            this.recoveryWindowInDays = recoveryWindowInDays;
            return this;
        }

        /**
         * Sets the value of {@link RosSecretProps#getRotationInterval}
         * @param rotationInterval the value to be set.
         * @return {@code this}
         */
        public Builder rotationInterval(java.lang.String rotationInterval) {
            this.rotationInterval = rotationInterval;
            return this;
        }

        /**
         * Sets the value of {@link RosSecretProps#getRotationInterval}
         * @param rotationInterval the value to be set.
         * @return {@code this}
         */
        public Builder rotationInterval(com.aliyun.ros.cdk.core.IResolvable rotationInterval) {
            this.rotationInterval = rotationInterval;
            return this;
        }

        /**
         * Sets the value of {@link RosSecretProps#getSecretDataType}
         * @param secretDataType the value to be set.
         * @return {@code this}
         */
        public Builder secretDataType(java.lang.String secretDataType) {
            this.secretDataType = secretDataType;
            return this;
        }

        /**
         * Sets the value of {@link RosSecretProps#getSecretDataType}
         * @param secretDataType the value to be set.
         * @return {@code this}
         */
        public Builder secretDataType(com.aliyun.ros.cdk.core.IResolvable secretDataType) {
            this.secretDataType = secretDataType;
            return this;
        }

        /**
         * Sets the value of {@link RosSecretProps#getSecretType}
         * @param secretType the value to be set.
         * @return {@code this}
         */
        public Builder secretType(java.lang.String secretType) {
            this.secretType = secretType;
            return this;
        }

        /**
         * Sets the value of {@link RosSecretProps#getSecretType}
         * @param secretType the value to be set.
         * @return {@code this}
         */
        public Builder secretType(com.aliyun.ros.cdk.core.IResolvable secretType) {
            this.secretType = secretType;
            return this;
        }

        /**
         * Sets the value of {@link RosSecretProps#getVersionStages}
         * @param versionStages the value to be set.
         * @return {@code this}
         */
        public Builder versionStages(com.aliyun.ros.cdk.core.IResolvable versionStages) {
            this.versionStages = versionStages;
            return this;
        }

        /**
         * Sets the value of {@link RosSecretProps#getVersionStages}
         * @param versionStages the value to be set.
         * @return {@code this}
         */
        public Builder versionStages(java.util.List<? extends java.lang.Object> versionStages) {
            this.versionStages = versionStages;
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
        private final java.lang.Object secretData;
        private final java.lang.Object secretName;
        private final java.lang.Object versionId;
        private final java.lang.Object description;
        private final java.lang.Object dkmsInstanceId;
        private final java.lang.Object enableAutomaticRotation;
        private final java.lang.Object encryptionKeyId;
        private final java.lang.Object extendedConfig;
        private final java.lang.Object forceDeleteWithoutRecovery;
        private final java.lang.Object recoveryWindowInDays;
        private final java.lang.Object rotationInterval;
        private final java.lang.Object secretDataType;
        private final java.lang.Object secretType;
        private final java.lang.Object versionStages;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.secretData = software.amazon.jsii.Kernel.get(this, "secretData", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.secretName = software.amazon.jsii.Kernel.get(this, "secretName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.versionId = software.amazon.jsii.Kernel.get(this, "versionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dkmsInstanceId = software.amazon.jsii.Kernel.get(this, "dkmsInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enableAutomaticRotation = software.amazon.jsii.Kernel.get(this, "enableAutomaticRotation", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.encryptionKeyId = software.amazon.jsii.Kernel.get(this, "encryptionKeyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.extendedConfig = software.amazon.jsii.Kernel.get(this, "extendedConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.forceDeleteWithoutRecovery = software.amazon.jsii.Kernel.get(this, "forceDeleteWithoutRecovery", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.recoveryWindowInDays = software.amazon.jsii.Kernel.get(this, "recoveryWindowInDays", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.rotationInterval = software.amazon.jsii.Kernel.get(this, "rotationInterval", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.secretDataType = software.amazon.jsii.Kernel.get(this, "secretDataType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.secretType = software.amazon.jsii.Kernel.get(this, "secretType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.versionStages = software.amazon.jsii.Kernel.get(this, "versionStages", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.secretData = java.util.Objects.requireNonNull(builder.secretData, "secretData is required");
            this.secretName = java.util.Objects.requireNonNull(builder.secretName, "secretName is required");
            this.versionId = java.util.Objects.requireNonNull(builder.versionId, "versionId is required");
            this.description = builder.description;
            this.dkmsInstanceId = builder.dkmsInstanceId;
            this.enableAutomaticRotation = builder.enableAutomaticRotation;
            this.encryptionKeyId = builder.encryptionKeyId;
            this.extendedConfig = builder.extendedConfig;
            this.forceDeleteWithoutRecovery = builder.forceDeleteWithoutRecovery;
            this.recoveryWindowInDays = builder.recoveryWindowInDays;
            this.rotationInterval = builder.rotationInterval;
            this.secretDataType = builder.secretDataType;
            this.secretType = builder.secretType;
            this.versionStages = builder.versionStages;
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
        public final java.lang.Object getVersionId() {
            return this.versionId;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getDkmsInstanceId() {
            return this.dkmsInstanceId;
        }

        @Override
        public final java.lang.Object getEnableAutomaticRotation() {
            return this.enableAutomaticRotation;
        }

        @Override
        public final java.lang.Object getEncryptionKeyId() {
            return this.encryptionKeyId;
        }

        @Override
        public final java.lang.Object getExtendedConfig() {
            return this.extendedConfig;
        }

        @Override
        public final java.lang.Object getForceDeleteWithoutRecovery() {
            return this.forceDeleteWithoutRecovery;
        }

        @Override
        public final java.lang.Object getRecoveryWindowInDays() {
            return this.recoveryWindowInDays;
        }

        @Override
        public final java.lang.Object getRotationInterval() {
            return this.rotationInterval;
        }

        @Override
        public final java.lang.Object getSecretDataType() {
            return this.secretDataType;
        }

        @Override
        public final java.lang.Object getSecretType() {
            return this.secretType;
        }

        @Override
        public final java.lang.Object getVersionStages() {
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
            if (this.getDkmsInstanceId() != null) {
                data.set("dkmsInstanceId", om.valueToTree(this.getDkmsInstanceId()));
            }
            if (this.getEnableAutomaticRotation() != null) {
                data.set("enableAutomaticRotation", om.valueToTree(this.getEnableAutomaticRotation()));
            }
            if (this.getEncryptionKeyId() != null) {
                data.set("encryptionKeyId", om.valueToTree(this.getEncryptionKeyId()));
            }
            if (this.getExtendedConfig() != null) {
                data.set("extendedConfig", om.valueToTree(this.getExtendedConfig()));
            }
            if (this.getForceDeleteWithoutRecovery() != null) {
                data.set("forceDeleteWithoutRecovery", om.valueToTree(this.getForceDeleteWithoutRecovery()));
            }
            if (this.getRecoveryWindowInDays() != null) {
                data.set("recoveryWindowInDays", om.valueToTree(this.getRecoveryWindowInDays()));
            }
            if (this.getRotationInterval() != null) {
                data.set("rotationInterval", om.valueToTree(this.getRotationInterval()));
            }
            if (this.getSecretDataType() != null) {
                data.set("secretDataType", om.valueToTree(this.getSecretDataType()));
            }
            if (this.getSecretType() != null) {
                data.set("secretType", om.valueToTree(this.getSecretType()));
            }
            if (this.getVersionStages() != null) {
                data.set("versionStages", om.valueToTree(this.getVersionStages()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-kms.RosSecretProps"));
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

            if (!secretData.equals(that.secretData)) return false;
            if (!secretName.equals(that.secretName)) return false;
            if (!versionId.equals(that.versionId)) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.dkmsInstanceId != null ? !this.dkmsInstanceId.equals(that.dkmsInstanceId) : that.dkmsInstanceId != null) return false;
            if (this.enableAutomaticRotation != null ? !this.enableAutomaticRotation.equals(that.enableAutomaticRotation) : that.enableAutomaticRotation != null) return false;
            if (this.encryptionKeyId != null ? !this.encryptionKeyId.equals(that.encryptionKeyId) : that.encryptionKeyId != null) return false;
            if (this.extendedConfig != null ? !this.extendedConfig.equals(that.extendedConfig) : that.extendedConfig != null) return false;
            if (this.forceDeleteWithoutRecovery != null ? !this.forceDeleteWithoutRecovery.equals(that.forceDeleteWithoutRecovery) : that.forceDeleteWithoutRecovery != null) return false;
            if (this.recoveryWindowInDays != null ? !this.recoveryWindowInDays.equals(that.recoveryWindowInDays) : that.recoveryWindowInDays != null) return false;
            if (this.rotationInterval != null ? !this.rotationInterval.equals(that.rotationInterval) : that.rotationInterval != null) return false;
            if (this.secretDataType != null ? !this.secretDataType.equals(that.secretDataType) : that.secretDataType != null) return false;
            if (this.secretType != null ? !this.secretType.equals(that.secretType) : that.secretType != null) return false;
            return this.versionStages != null ? this.versionStages.equals(that.versionStages) : that.versionStages == null;
        }

        @Override
        public final int hashCode() {
            int result = this.secretData.hashCode();
            result = 31 * result + (this.secretName.hashCode());
            result = 31 * result + (this.versionId.hashCode());
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.dkmsInstanceId != null ? this.dkmsInstanceId.hashCode() : 0);
            result = 31 * result + (this.enableAutomaticRotation != null ? this.enableAutomaticRotation.hashCode() : 0);
            result = 31 * result + (this.encryptionKeyId != null ? this.encryptionKeyId.hashCode() : 0);
            result = 31 * result + (this.extendedConfig != null ? this.extendedConfig.hashCode() : 0);
            result = 31 * result + (this.forceDeleteWithoutRecovery != null ? this.forceDeleteWithoutRecovery.hashCode() : 0);
            result = 31 * result + (this.recoveryWindowInDays != null ? this.recoveryWindowInDays.hashCode() : 0);
            result = 31 * result + (this.rotationInterval != null ? this.rotationInterval.hashCode() : 0);
            result = 31 * result + (this.secretDataType != null ? this.secretDataType.hashCode() : 0);
            result = 31 * result + (this.secretType != null ? this.secretType.hashCode() : 0);
            result = 31 * result + (this.versionStages != null ? this.versionStages.hashCode() : 0);
            return result;
        }
    }
}
