package com.aliyun.ros.cdk.hbr;

/**
 * Properties for defining a <code>RosVault</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-vault
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-01-23T09:30:40.784Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.hbr.$Module.class, fqn = "@alicloud/ros-cdk-hbr.RosVaultProps")
@software.amazon.jsii.Jsii.Proxy(RosVaultProps.Jsii$Proxy.class)
public interface RosVaultProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVaultName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVaultType();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEncryptType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getKmsKeyId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRedundancyType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.hbr.RosVault.TagsProperty> getTags() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVaultStorageClass() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosVaultProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosVaultProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosVaultProps> {
        java.lang.Object vaultName;
        java.lang.Object vaultType;
        java.lang.Object description;
        java.lang.Object encryptType;
        java.lang.Object kmsKeyId;
        java.lang.Object redundancyType;
        java.lang.Object resourceGroupId;
        java.util.List<com.aliyun.ros.cdk.hbr.RosVault.TagsProperty> tags;
        java.lang.Object vaultStorageClass;

        /**
         * Sets the value of {@link RosVaultProps#getVaultName}
         * @param vaultName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vaultName(java.lang.String vaultName) {
            this.vaultName = vaultName;
            return this;
        }

        /**
         * Sets the value of {@link RosVaultProps#getVaultName}
         * @param vaultName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vaultName(com.aliyun.ros.cdk.core.IResolvable vaultName) {
            this.vaultName = vaultName;
            return this;
        }

        /**
         * Sets the value of {@link RosVaultProps#getVaultType}
         * @param vaultType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vaultType(java.lang.String vaultType) {
            this.vaultType = vaultType;
            return this;
        }

        /**
         * Sets the value of {@link RosVaultProps#getVaultType}
         * @param vaultType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vaultType(com.aliyun.ros.cdk.core.IResolvable vaultType) {
            this.vaultType = vaultType;
            return this;
        }

        /**
         * Sets the value of {@link RosVaultProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosVaultProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosVaultProps#getEncryptType}
         * @param encryptType the value to be set.
         * @return {@code this}
         */
        public Builder encryptType(java.lang.String encryptType) {
            this.encryptType = encryptType;
            return this;
        }

        /**
         * Sets the value of {@link RosVaultProps#getEncryptType}
         * @param encryptType the value to be set.
         * @return {@code this}
         */
        public Builder encryptType(com.aliyun.ros.cdk.core.IResolvable encryptType) {
            this.encryptType = encryptType;
            return this;
        }

        /**
         * Sets the value of {@link RosVaultProps#getKmsKeyId}
         * @param kmsKeyId the value to be set.
         * @return {@code this}
         */
        public Builder kmsKeyId(java.lang.String kmsKeyId) {
            this.kmsKeyId = kmsKeyId;
            return this;
        }

        /**
         * Sets the value of {@link RosVaultProps#getKmsKeyId}
         * @param kmsKeyId the value to be set.
         * @return {@code this}
         */
        public Builder kmsKeyId(com.aliyun.ros.cdk.core.IResolvable kmsKeyId) {
            this.kmsKeyId = kmsKeyId;
            return this;
        }

        /**
         * Sets the value of {@link RosVaultProps#getRedundancyType}
         * @param redundancyType the value to be set.
         * @return {@code this}
         */
        public Builder redundancyType(java.lang.String redundancyType) {
            this.redundancyType = redundancyType;
            return this;
        }

        /**
         * Sets the value of {@link RosVaultProps#getRedundancyType}
         * @param redundancyType the value to be set.
         * @return {@code this}
         */
        public Builder redundancyType(com.aliyun.ros.cdk.core.IResolvable redundancyType) {
            this.redundancyType = redundancyType;
            return this;
        }

        /**
         * Sets the value of {@link RosVaultProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosVaultProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosVaultProps#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.hbr.RosVault.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.hbr.RosVault.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link RosVaultProps#getVaultStorageClass}
         * @param vaultStorageClass the value to be set.
         * @return {@code this}
         */
        public Builder vaultStorageClass(java.lang.String vaultStorageClass) {
            this.vaultStorageClass = vaultStorageClass;
            return this;
        }

        /**
         * Sets the value of {@link RosVaultProps#getVaultStorageClass}
         * @param vaultStorageClass the value to be set.
         * @return {@code this}
         */
        public Builder vaultStorageClass(com.aliyun.ros.cdk.core.IResolvable vaultStorageClass) {
            this.vaultStorageClass = vaultStorageClass;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosVaultProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosVaultProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosVaultProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosVaultProps {
        private final java.lang.Object vaultName;
        private final java.lang.Object vaultType;
        private final java.lang.Object description;
        private final java.lang.Object encryptType;
        private final java.lang.Object kmsKeyId;
        private final java.lang.Object redundancyType;
        private final java.lang.Object resourceGroupId;
        private final java.util.List<com.aliyun.ros.cdk.hbr.RosVault.TagsProperty> tags;
        private final java.lang.Object vaultStorageClass;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.vaultName = software.amazon.jsii.Kernel.get(this, "vaultName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vaultType = software.amazon.jsii.Kernel.get(this, "vaultType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.encryptType = software.amazon.jsii.Kernel.get(this, "encryptType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.kmsKeyId = software.amazon.jsii.Kernel.get(this, "kmsKeyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.redundancyType = software.amazon.jsii.Kernel.get(this, "redundancyType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.hbr.RosVault.TagsProperty.class)));
            this.vaultStorageClass = software.amazon.jsii.Kernel.get(this, "vaultStorageClass", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.vaultName = java.util.Objects.requireNonNull(builder.vaultName, "vaultName is required");
            this.vaultType = java.util.Objects.requireNonNull(builder.vaultType, "vaultType is required");
            this.description = builder.description;
            this.encryptType = builder.encryptType;
            this.kmsKeyId = builder.kmsKeyId;
            this.redundancyType = builder.redundancyType;
            this.resourceGroupId = builder.resourceGroupId;
            this.tags = (java.util.List<com.aliyun.ros.cdk.hbr.RosVault.TagsProperty>)builder.tags;
            this.vaultStorageClass = builder.vaultStorageClass;
        }

        @Override
        public final java.lang.Object getVaultName() {
            return this.vaultName;
        }

        @Override
        public final java.lang.Object getVaultType() {
            return this.vaultType;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getEncryptType() {
            return this.encryptType;
        }

        @Override
        public final java.lang.Object getKmsKeyId() {
            return this.kmsKeyId;
        }

        @Override
        public final java.lang.Object getRedundancyType() {
            return this.redundancyType;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.hbr.RosVault.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        public final java.lang.Object getVaultStorageClass() {
            return this.vaultStorageClass;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("vaultName", om.valueToTree(this.getVaultName()));
            data.set("vaultType", om.valueToTree(this.getVaultType()));
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getEncryptType() != null) {
                data.set("encryptType", om.valueToTree(this.getEncryptType()));
            }
            if (this.getKmsKeyId() != null) {
                data.set("kmsKeyId", om.valueToTree(this.getKmsKeyId()));
            }
            if (this.getRedundancyType() != null) {
                data.set("redundancyType", om.valueToTree(this.getRedundancyType()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getVaultStorageClass() != null) {
                data.set("vaultStorageClass", om.valueToTree(this.getVaultStorageClass()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-hbr.RosVaultProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosVaultProps.Jsii$Proxy that = (RosVaultProps.Jsii$Proxy) o;

            if (!vaultName.equals(that.vaultName)) return false;
            if (!vaultType.equals(that.vaultType)) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.encryptType != null ? !this.encryptType.equals(that.encryptType) : that.encryptType != null) return false;
            if (this.kmsKeyId != null ? !this.kmsKeyId.equals(that.kmsKeyId) : that.kmsKeyId != null) return false;
            if (this.redundancyType != null ? !this.redundancyType.equals(that.redundancyType) : that.redundancyType != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            return this.vaultStorageClass != null ? this.vaultStorageClass.equals(that.vaultStorageClass) : that.vaultStorageClass == null;
        }

        @Override
        public final int hashCode() {
            int result = this.vaultName.hashCode();
            result = 31 * result + (this.vaultType.hashCode());
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.encryptType != null ? this.encryptType.hashCode() : 0);
            result = 31 * result + (this.kmsKeyId != null ? this.kmsKeyId.hashCode() : 0);
            result = 31 * result + (this.redundancyType != null ? this.redundancyType.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.vaultStorageClass != null ? this.vaultStorageClass.hashCode() : 0);
            return result;
        }
    }
}
