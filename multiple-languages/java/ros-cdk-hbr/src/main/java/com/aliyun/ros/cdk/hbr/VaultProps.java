package com.aliyun.ros.cdk.hbr;

/**
 * Properties for defining a <code>ALIYUN::HBR::Vault</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.84.0 (build 5404dcf)", date = "2023-06-19T08:52:10.384Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.hbr.$Module.class, fqn = "@alicloud/ros-cdk-hbr.VaultProps")
@software.amazon.jsii.Jsii.Proxy(VaultProps.Jsii$Proxy.class)
public interface VaultProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property vaultName: The name of the backup vault.
     * <p>
     * The name must be 1 to 64 characters in length.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVaultName();

    /**
     * Property vaultType: The type of the backup vault.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li><strong>STANDARD</strong>: standard backup vault.</li>
     * <li><strong>OTS_BACKUP</strong>: backup vault for Tablestore.</li>
     * </ul>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVaultType();

    /**
     * Property description: The description of the backup vault.
     * <p>
     * The description must be 0 to 255 characters in length.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property encryptType: The method that is used to encrypt the source data.
     * <p>
     * This parameter is valid only if you set the VaultType parameter to STANDARD or OTS_BACKUP.
     * Valid values:- <strong>HBR_PRIVATE</strong>: The source data is encrypted by using the built-in encryption method of Hybrid Backup Recovery (HBR).
     * <p>
     * <ul>
     * <li><strong>KMS</strong>: The source data is encrypted by using Key Management Service (KMS).</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEncryptType() {
        return null;
    }

    /**
     * Property kmsKeyId: The customer master key (CMK) created in KMS or the alias of the key.
     * <p>
     * This parameter is required only if you set the EncryptType parameter to KMS.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getKmsKeyId() {
        return null;
    }

    /**
     * Property redundancyType: The data redundancy type of the backup vault.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li><strong>LRS</strong>: Locally redundant storage (LRS) is enabled for the backup vault. HBR stores the copies of each object on multiple devices of different facilities in the same zone. This way, HBR ensures data durability and availability even if hardware failures occur.</li>
     * <li><strong>ZRS</strong>: Zone-redundant storage (ZRS) is enabled for the backup vault. HBR uses the multi-zone mechanism to distribute data across three zones within the same region. If a zone fails, the data that is stored in the other two zones is still accessible.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRedundancyType() {
        return null;
    }

    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * Property tags: Tags of The resource attribute field representing the resource tag..
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.hbr.RosVault.TagsProperty> getTags() {
        return null;
    }

    /**
     * Property vaultStorageClass: The storage type of the backup vault.
     * <p>
     * The value is only <strong>STANDARD</strong>, which indicates STANDARD storage.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVaultStorageClass() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link VaultProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link VaultProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<VaultProps> {
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
         * Sets the value of {@link VaultProps#getVaultName}
         * @param vaultName Property vaultName: The name of the backup vault. This parameter is required.
         *                  The name must be 1 to 64 characters in length.
         * @return {@code this}
         */
        public Builder vaultName(java.lang.String vaultName) {
            this.vaultName = vaultName;
            return this;
        }

        /**
         * Sets the value of {@link VaultProps#getVaultName}
         * @param vaultName Property vaultName: The name of the backup vault. This parameter is required.
         *                  The name must be 1 to 64 characters in length.
         * @return {@code this}
         */
        public Builder vaultName(com.aliyun.ros.cdk.core.IResolvable vaultName) {
            this.vaultName = vaultName;
            return this;
        }

        /**
         * Sets the value of {@link VaultProps#getVaultType}
         * @param vaultType Property vaultType: The type of the backup vault. This parameter is required.
         *                  Valid values:
         *                  <p>
         *                  <ul>
         *                  <li><strong>STANDARD</strong>: standard backup vault.</li>
         *                  <li><strong>OTS_BACKUP</strong>: backup vault for Tablestore.</li>
         *                  </ul>
         * @return {@code this}
         */
        public Builder vaultType(java.lang.String vaultType) {
            this.vaultType = vaultType;
            return this;
        }

        /**
         * Sets the value of {@link VaultProps#getVaultType}
         * @param vaultType Property vaultType: The type of the backup vault. This parameter is required.
         *                  Valid values:
         *                  <p>
         *                  <ul>
         *                  <li><strong>STANDARD</strong>: standard backup vault.</li>
         *                  <li><strong>OTS_BACKUP</strong>: backup vault for Tablestore.</li>
         *                  </ul>
         * @return {@code this}
         */
        public Builder vaultType(com.aliyun.ros.cdk.core.IResolvable vaultType) {
            this.vaultType = vaultType;
            return this;
        }

        /**
         * Sets the value of {@link VaultProps#getDescription}
         * @param description Property description: The description of the backup vault.
         *                    The description must be 0 to 255 characters in length.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link VaultProps#getDescription}
         * @param description Property description: The description of the backup vault.
         *                    The description must be 0 to 255 characters in length.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link VaultProps#getEncryptType}
         * @param encryptType Property encryptType: The method that is used to encrypt the source data.
         *                    This parameter is valid only if you set the VaultType parameter to STANDARD or OTS_BACKUP.
         *                    Valid values:- <strong>HBR_PRIVATE</strong>: The source data is encrypted by using the built-in encryption method of Hybrid Backup Recovery (HBR).
         *                    <p>
         *                    <ul>
         *                    <li><strong>KMS</strong>: The source data is encrypted by using Key Management Service (KMS).</li>
         *                    </ul>
         * @return {@code this}
         */
        public Builder encryptType(java.lang.String encryptType) {
            this.encryptType = encryptType;
            return this;
        }

        /**
         * Sets the value of {@link VaultProps#getEncryptType}
         * @param encryptType Property encryptType: The method that is used to encrypt the source data.
         *                    This parameter is valid only if you set the VaultType parameter to STANDARD or OTS_BACKUP.
         *                    Valid values:- <strong>HBR_PRIVATE</strong>: The source data is encrypted by using the built-in encryption method of Hybrid Backup Recovery (HBR).
         *                    <p>
         *                    <ul>
         *                    <li><strong>KMS</strong>: The source data is encrypted by using Key Management Service (KMS).</li>
         *                    </ul>
         * @return {@code this}
         */
        public Builder encryptType(com.aliyun.ros.cdk.core.IResolvable encryptType) {
            this.encryptType = encryptType;
            return this;
        }

        /**
         * Sets the value of {@link VaultProps#getKmsKeyId}
         * @param kmsKeyId Property kmsKeyId: The customer master key (CMK) created in KMS or the alias of the key.
         *                 This parameter is required only if you set the EncryptType parameter to KMS.
         * @return {@code this}
         */
        public Builder kmsKeyId(java.lang.String kmsKeyId) {
            this.kmsKeyId = kmsKeyId;
            return this;
        }

        /**
         * Sets the value of {@link VaultProps#getKmsKeyId}
         * @param kmsKeyId Property kmsKeyId: The customer master key (CMK) created in KMS or the alias of the key.
         *                 This parameter is required only if you set the EncryptType parameter to KMS.
         * @return {@code this}
         */
        public Builder kmsKeyId(com.aliyun.ros.cdk.core.IResolvable kmsKeyId) {
            this.kmsKeyId = kmsKeyId;
            return this;
        }

        /**
         * Sets the value of {@link VaultProps#getRedundancyType}
         * @param redundancyType Property redundancyType: The data redundancy type of the backup vault.
         *                       Valid values:
         *                       <p>
         *                       <ul>
         *                       <li><strong>LRS</strong>: Locally redundant storage (LRS) is enabled for the backup vault. HBR stores the copies of each object on multiple devices of different facilities in the same zone. This way, HBR ensures data durability and availability even if hardware failures occur.</li>
         *                       <li><strong>ZRS</strong>: Zone-redundant storage (ZRS) is enabled for the backup vault. HBR uses the multi-zone mechanism to distribute data across three zones within the same region. If a zone fails, the data that is stored in the other two zones is still accessible.</li>
         *                       </ul>
         * @return {@code this}
         */
        public Builder redundancyType(java.lang.String redundancyType) {
            this.redundancyType = redundancyType;
            return this;
        }

        /**
         * Sets the value of {@link VaultProps#getRedundancyType}
         * @param redundancyType Property redundancyType: The data redundancy type of the backup vault.
         *                       Valid values:
         *                       <p>
         *                       <ul>
         *                       <li><strong>LRS</strong>: Locally redundant storage (LRS) is enabled for the backup vault. HBR stores the copies of each object on multiple devices of different facilities in the same zone. This way, HBR ensures data durability and availability even if hardware failures occur.</li>
         *                       <li><strong>ZRS</strong>: Zone-redundant storage (ZRS) is enabled for the backup vault. HBR uses the multi-zone mechanism to distribute data across three zones within the same region. If a zone fails, the data that is stored in the other two zones is still accessible.</li>
         *                       </ul>
         * @return {@code this}
         */
        public Builder redundancyType(com.aliyun.ros.cdk.core.IResolvable redundancyType) {
            this.redundancyType = redundancyType;
            return this;
        }

        /**
         * Sets the value of {@link VaultProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link VaultProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link VaultProps#getTags}
         * @param tags Property tags: Tags of The resource attribute field representing the resource tag..
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.hbr.RosVault.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.hbr.RosVault.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link VaultProps#getVaultStorageClass}
         * @param vaultStorageClass Property vaultStorageClass: The storage type of the backup vault.
         *                          The value is only <strong>STANDARD</strong>, which indicates STANDARD storage.
         * @return {@code this}
         */
        public Builder vaultStorageClass(java.lang.String vaultStorageClass) {
            this.vaultStorageClass = vaultStorageClass;
            return this;
        }

        /**
         * Sets the value of {@link VaultProps#getVaultStorageClass}
         * @param vaultStorageClass Property vaultStorageClass: The storage type of the backup vault.
         *                          The value is only <strong>STANDARD</strong>, which indicates STANDARD storage.
         * @return {@code this}
         */
        public Builder vaultStorageClass(com.aliyun.ros.cdk.core.IResolvable vaultStorageClass) {
            this.vaultStorageClass = vaultStorageClass;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link VaultProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public VaultProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link VaultProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements VaultProps {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-hbr.VaultProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            VaultProps.Jsii$Proxy that = (VaultProps.Jsii$Proxy) o;

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
