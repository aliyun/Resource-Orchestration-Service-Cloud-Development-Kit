package com.aliyun.ros.cdk.hbr;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::HBR::Vault</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:07.483Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.hbr.$Module.class, fqn = "@alicloud/ros-cdk-hbr.Vault")
public class Vault extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.hbr.IVault {

    protected Vault(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Vault(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public Vault(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.hbr.VaultProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Vault(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.hbr.VaultProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute BackupPlanStatistics: The statistics of backup plans that use the backup vault.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrBackupPlanStatistics() {
        return software.amazon.jsii.Kernel.get(this, "attrBackupPlanStatistics", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute BytesDone: The amount of data that is backed up.
     * <p>
     * Unit: bytes.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrBytesDone() {
        return software.amazon.jsii.Kernel.get(this, "attrBytesDone", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CreateTime: The time when the backup vault was created.
     * <p>
     * This value is a UNIX timestamp. Unit: seconds.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Dedup: Indicates whether the deduplication feature is enabled.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDedup() {
        return software.amazon.jsii.Kernel.get(this, "attrDedup", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Description: The description of the backup vault.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute IndexAvailable: Indicates whether indexes are available.
     * <p>
     * Indexes are available when they are not being updated.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrIndexAvailable() {
        return software.amazon.jsii.Kernel.get(this, "attrIndexAvailable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute IndexLevel: The index level.
     * <p>
     * <ul>
     * <li><strong>OFF</strong>: No indexes are created.</li>
     * <li><strong>META</strong>: Metadata indexes are created.</li>
     * <li><strong>ALL</strong>: Full-text indexes are created.</li>
     * </ul>
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrIndexLevel() {
        return software.amazon.jsii.Kernel.get(this, "attrIndexLevel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute IndexUpdateTime: The time when the index was updated.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrIndexUpdateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrIndexUpdateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute LatestReplicationTime: The time when the last remote backup was synchronized.
     * <p>
     * This value is a UNIX timestamp. Unit: seconds.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrLatestReplicationTime() {
        return software.amazon.jsii.Kernel.get(this, "attrLatestReplicationTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PaymentType: PaymentType.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPaymentType() {
        return software.amazon.jsii.Kernel.get(this, "attrPaymentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute RedundancyType: The data redundancy type of the backup vault.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li><strong>LRS</strong>: Locally redundant storage (LRS) is enabled for the backup vault. HBR stores the copies of each object on multiple devices of different facilities in the same zone. This way, HBR ensures data durability and availability even if hardware failures occur.</li>
     * <li><strong>ZRS</strong>: Zone-redundant storage (ZRS) is enabled for the backup vault. HBR uses the multi-zone mechanism to distribute data across three zones within the same region. If a zone fails, the data that is stored in the other two zones is still accessible.</li>
     * </ul>
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRedundancyType() {
        return software.amazon.jsii.Kernel.get(this, "attrRedundancyType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Replication: Indicates whether the backup vault is a remote backup vault.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li><strong>true</strong>: The backup vault is a remote backup vault.</li>
     * <li><strong>false</strong>: The backup vault is an on-premises backup vault.</li>
     * </ul>
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrReplication() {
        return software.amazon.jsii.Kernel.get(this, "attrReplication", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ReplicationProgress: The progress of data synchronization from the backup vault to the mirror vault.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrReplicationProgress() {
        return software.amazon.jsii.Kernel.get(this, "attrReplicationProgress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ReplicationSourceRegionId: The ID of the region where the remote backup vault resides.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrReplicationSourceRegionId() {
        return software.amazon.jsii.Kernel.get(this, "attrReplicationSourceRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ReplicationSourceVaultId: The ID of the source vault that corresponds to the remote backup vault.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrReplicationSourceVaultId() {
        return software.amazon.jsii.Kernel.get(this, "attrReplicationSourceVaultId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Retention: The retention period of the backup vault.
     * <p>
     * Unit: days.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRetention() {
        return software.amazon.jsii.Kernel.get(this, "attrRetention", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SearchEnabled: Indicates whether the backup search feature is enabled.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSearchEnabled() {
        return software.amazon.jsii.Kernel.get(this, "attrSearchEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SourceTypes: The information about the data source.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceTypes() {
        return software.amazon.jsii.Kernel.get(this, "attrSourceTypes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute StorageSize: The usage of the backup vault.
     * <p>
     * Unit: bytes.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrStorageSize() {
        return software.amazon.jsii.Kernel.get(this, "attrStorageSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Tags: The tags of the backup vault.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
        return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute TrialInfo: The free trial information.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTrialInfo() {
        return software.amazon.jsii.Kernel.get(this, "attrTrialInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute UpdatedTime: The time when the backup vault was updated.
     * <p>
     * This value is a UNIX timestamp. Unit: seconds.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdatedTime() {
        return software.amazon.jsii.Kernel.get(this, "attrUpdatedTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute VaultId: The ID of the backup vault.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrVaultId() {
        return software.amazon.jsii.Kernel.get(this, "attrVaultId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute VaultName: The name of the backup vault.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrVaultName() {
        return software.amazon.jsii.Kernel.get(this, "attrVaultName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute VaultStatusMessage: The status message that is returned when the backup vault is in the ERROR state.
     * <p>
     * This parameter is available only for remote backup vaults. Valid values:
     * <p>
     * <ul>
     * <li>*<em>UNKNOWN_ERROR</em>: An unknown error occurs.</li>
     * <li><strong>SOURCE_VAULT_ALREADY_HAS_REPLICATION</strong>: A mirror vault is configured for the source vault.</li>
     * </ul>
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrVaultStatusMessage() {
        return software.amazon.jsii.Kernel.get(this, "attrVaultStatusMessage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute VaultStorageClass: The storage type of the backup vault.
     * <p>
     * Valid value: <strong>STANDARD</strong>, which indicates standard storage.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrVaultStorageClass() {
        return software.amazon.jsii.Kernel.get(this, "attrVaultStorageClass", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute VaultType: The type of the backup vault.
     * <p>
     * Valid value: <strong>STANDARD</strong>, which indicates a standard backup vault.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrVaultType() {
        return software.amazon.jsii.Kernel.get(this, "attrVaultType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.hbr.VaultProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.hbr.VaultProps.class));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    protected void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.String getId() {
        return software.amazon.jsii.Kernel.get(this, "id", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    protected void setId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "id", java.util.Objects.requireNonNull(value, "id is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.hbr.Vault}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.hbr.Vault> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.hbr.VaultProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.hbr.VaultProps.Builder();
        }

        /**
         * Property vaultName: The name of the backup vault.
         * <p>
         * The name must be 1 to 64 characters in length.
         * <p>
         * @return {@code this}
         * @param vaultName Property vaultName: The name of the backup vault. This parameter is required.
         */
        public Builder vaultName(final java.lang.String vaultName) {
            this.props.vaultName(vaultName);
            return this;
        }
        /**
         * Property vaultName: The name of the backup vault.
         * <p>
         * The name must be 1 to 64 characters in length.
         * <p>
         * @return {@code this}
         * @param vaultName Property vaultName: The name of the backup vault. This parameter is required.
         */
        public Builder vaultName(final com.aliyun.ros.cdk.core.IResolvable vaultName) {
            this.props.vaultName(vaultName);
            return this;
        }

        /**
         * Property vaultType: The type of the backup vault.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><strong>STANDARD</strong>: standard backup vault.</li>
         * <li><strong>OTS_BACKUP</strong>: backup vault for Tablestore.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param vaultType Property vaultType: The type of the backup vault. This parameter is required.
         */
        public Builder vaultType(final java.lang.String vaultType) {
            this.props.vaultType(vaultType);
            return this;
        }
        /**
         * Property vaultType: The type of the backup vault.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><strong>STANDARD</strong>: standard backup vault.</li>
         * <li><strong>OTS_BACKUP</strong>: backup vault for Tablestore.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param vaultType Property vaultType: The type of the backup vault. This parameter is required.
         */
        public Builder vaultType(final com.aliyun.ros.cdk.core.IResolvable vaultType) {
            this.props.vaultType(vaultType);
            return this;
        }

        /**
         * Property description: The description of the backup vault.
         * <p>
         * The description must be 0 to 255 characters in length.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the backup vault. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: The description of the backup vault.
         * <p>
         * The description must be 0 to 255 characters in length.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the backup vault. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
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
         * <p>
         * @return {@code this}
         * @param encryptType Property encryptType: The method that is used to encrypt the source data. This parameter is required.
         */
        public Builder encryptType(final java.lang.String encryptType) {
            this.props.encryptType(encryptType);
            return this;
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
         * <p>
         * @return {@code this}
         * @param encryptType Property encryptType: The method that is used to encrypt the source data. This parameter is required.
         */
        public Builder encryptType(final com.aliyun.ros.cdk.core.IResolvable encryptType) {
            this.props.encryptType(encryptType);
            return this;
        }

        /**
         * Property kmsKeyId: The customer master key (CMK) created in KMS or the alias of the key.
         * <p>
         * This parameter is required only if you set the EncryptType parameter to KMS.
         * <p>
         * @return {@code this}
         * @param kmsKeyId Property kmsKeyId: The customer master key (CMK) created in KMS or the alias of the key. This parameter is required.
         */
        public Builder kmsKeyId(final java.lang.String kmsKeyId) {
            this.props.kmsKeyId(kmsKeyId);
            return this;
        }
        /**
         * Property kmsKeyId: The customer master key (CMK) created in KMS or the alias of the key.
         * <p>
         * This parameter is required only if you set the EncryptType parameter to KMS.
         * <p>
         * @return {@code this}
         * @param kmsKeyId Property kmsKeyId: The customer master key (CMK) created in KMS or the alias of the key. This parameter is required.
         */
        public Builder kmsKeyId(final com.aliyun.ros.cdk.core.IResolvable kmsKeyId) {
            this.props.kmsKeyId(kmsKeyId);
            return this;
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
         * <p>
         * @return {@code this}
         * @param redundancyType Property redundancyType: The data redundancy type of the backup vault. This parameter is required.
         */
        public Builder redundancyType(final java.lang.String redundancyType) {
            this.props.redundancyType(redundancyType);
            return this;
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
         * <p>
         * @return {@code this}
         * @param redundancyType Property redundancyType: The data redundancy type of the backup vault. This parameter is required.
         */
        public Builder redundancyType(final com.aliyun.ros.cdk.core.IResolvable redundancyType) {
            this.props.redundancyType(redundancyType);
            return this;
        }

        /**
         * Property resourceGroupId: The ID of the resource group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: The ID of the resource group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property tags: Tags of The resource attribute field representing the resource tag..
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tags of The resource attribute field representing the resource tag.. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.hbr.RosVault.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * Property vaultStorageClass: The storage type of the backup vault.
         * <p>
         * The value is only <strong>STANDARD</strong>, which indicates STANDARD storage.
         * <p>
         * @return {@code this}
         * @param vaultStorageClass Property vaultStorageClass: The storage type of the backup vault. This parameter is required.
         */
        public Builder vaultStorageClass(final java.lang.String vaultStorageClass) {
            this.props.vaultStorageClass(vaultStorageClass);
            return this;
        }
        /**
         * Property vaultStorageClass: The storage type of the backup vault.
         * <p>
         * The value is only <strong>STANDARD</strong>, which indicates STANDARD storage.
         * <p>
         * @return {@code this}
         * @param vaultStorageClass Property vaultStorageClass: The storage type of the backup vault. This parameter is required.
         */
        public Builder vaultStorageClass(final com.aliyun.ros.cdk.core.IResolvable vaultStorageClass) {
            this.props.vaultStorageClass(vaultStorageClass);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.hbr.Vault}.
         */
        @Override
        public com.aliyun.ros.cdk.hbr.Vault build() {
            return new com.aliyun.ros.cdk.hbr.Vault(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
