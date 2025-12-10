package com.aliyun.ros.cdk.hbr.datasource;

/**
 * This class encapsulates and extends the ROS resource type <code>DATASOURCE::HBR::Vault</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:57.646Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.hbr.$Module.class, fqn = "@alicloud/ros-cdk-hbr.datasource.Vault")
public class Vault extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.hbr.datasource.IVault {

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
    public Vault(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.hbr.datasource.VaultProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Vault(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.hbr.datasource.VaultProps props) {
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
     * Attribute CreateTime: The creation time of the backup vault.
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
     * The value is a UNIX timestamp. Unit: seconds.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrLatestReplicationTime() {
        return software.amazon.jsii.Kernel.get(this, "attrLatestReplicationTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PaymentType: The payment type of the backup vault.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPaymentType() {
        return software.amazon.jsii.Kernel.get(this, "attrPaymentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute RedundancyType: The data redundancy type of the backup vault.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRedundancyType() {
        return software.amazon.jsii.Kernel.get(this, "attrRedundancyType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Replication: Indicates whether the backup vault is a remote backup vault.
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
     * Attribute ReplicationSourceRegionId: The ID of the region in which the source vault resides.
     * <p>
     * This parameter is valid only for remote backup vaults.
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
     * Attribute SourceTypes: The data source types of the backup vault.
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
     * The value is a UNIX timestamp. Unit: seconds.
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
     * This parameter is valid only for remote backup vaults.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrVaultStatusMessage() {
        return software.amazon.jsii.Kernel.get(this, "attrVaultStatusMessage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute VaultStorageClass: Backup repository storage type.
     * <p>
     * The value is only <strong>STANDARD</strong>, which indicates STANDARD storage.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrVaultStorageClass() {
        return software.amazon.jsii.Kernel.get(this, "attrVaultStorageClass", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute VaultType: The type of the backup vault.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrVaultType() {
        return software.amazon.jsii.Kernel.get(this, "attrVaultType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.hbr.datasource.VaultProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.hbr.datasource.VaultProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.hbr.datasource.Vault}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.hbr.datasource.Vault> {
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
        private final com.aliyun.ros.cdk.hbr.datasource.VaultProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.hbr.datasource.VaultProps.Builder();
        }

        /**
         * Property vaultId: The ID of the backup vault.
         * <p>
         * @return {@code this}
         * @param vaultId Property vaultId: The ID of the backup vault. This parameter is required.
         */
        public Builder vaultId(final java.lang.String vaultId) {
            this.props.vaultId(vaultId);
            return this;
        }
        /**
         * Property vaultId: The ID of the backup vault.
         * <p>
         * @return {@code this}
         * @param vaultId Property vaultId: The ID of the backup vault. This parameter is required.
         */
        public Builder vaultId(final com.aliyun.ros.cdk.core.IResolvable vaultId) {
            this.props.vaultId(vaultId);
            return this;
        }

        /**
         * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         * <li>Always: Always refresh the datasource resource when the stack is updated.
         * Default is Never.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. This parameter is required.
         */
        public Builder refreshOptions(final java.lang.String refreshOptions) {
            this.props.refreshOptions(refreshOptions);
            return this;
        }
        /**
         * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         * <li>Always: Always refresh the datasource resource when the stack is updated.
         * Default is Never.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. This parameter is required.
         */
        public Builder refreshOptions(final com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.props.refreshOptions(refreshOptions);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.hbr.datasource.Vault}.
         */
        @Override
        public com.aliyun.ros.cdk.hbr.datasource.Vault build() {
            return new com.aliyun.ros.cdk.hbr.datasource.Vault(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
