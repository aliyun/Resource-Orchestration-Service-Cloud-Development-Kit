package com.aliyun.ros.cdk.hbr.datasource;

/**
 * Represents a <code>Vault</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:48.142Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.hbr.$Module.class, fqn = "@alicloud/ros-cdk-hbr.datasource.IVault")
@software.amazon.jsii.Jsii.Proxy(IVault.Jsii$Proxy.class)
public interface IVault extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute BackupPlanStatistics: The statistics of backup plans that use the backup vault.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrBackupPlanStatistics();

    /**
     * Attribute BytesDone: The amount of data that is backed up.
     * <p>
     * Unit: bytes.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrBytesDone();

    /**
     * Attribute CreateTime: The creation time of the backup vault.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute Dedup: Indicates whether the deduplication feature is enabled.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDedup();

    /**
     * Attribute Description: The description of the backup vault.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription();

    /**
     * Attribute IndexAvailable: Indicates whether indexes are available.
     * <p>
     * Indexes are available when they are not being updated.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIndexAvailable();

    /**
     * Attribute IndexLevel: The index level.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIndexLevel();

    /**
     * Attribute IndexUpdateTime: The time when the index was updated.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIndexUpdateTime();

    /**
     * Attribute LatestReplicationTime: The time when the last remote backup was synchronized.
     * <p>
     * The value is a UNIX timestamp. Unit: seconds.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrLatestReplicationTime();

    /**
     * Attribute PaymentType: The payment type of the backup vault.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPaymentType();

    /**
     * Attribute RedundancyType: The data redundancy type of the backup vault.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRedundancyType();

    /**
     * Attribute Replication: Indicates whether the backup vault is a remote backup vault.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrReplication();

    /**
     * Attribute ReplicationProgress: The progress of data synchronization from the backup vault to the mirror vault.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrReplicationProgress();

    /**
     * Attribute ReplicationSourceRegionId: The ID of the region in which the source vault resides.
     * <p>
     * This parameter is valid only for remote backup vaults.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrReplicationSourceRegionId();

    /**
     * Attribute ReplicationSourceVaultId: The ID of the source vault that corresponds to the remote backup vault.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrReplicationSourceVaultId();

    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId();

    /**
     * Attribute Retention: The retention period of the backup vault.
     * <p>
     * Unit: days.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRetention();

    /**
     * Attribute SearchEnabled: Indicates whether the backup search feature is enabled.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSearchEnabled();

    /**
     * Attribute SourceTypes: The data source types of the backup vault.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceTypes();

    /**
     * Attribute StorageSize: The usage of the backup vault.
     * <p>
     * Unit: bytes.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrStorageSize();

    /**
     * Attribute Tags: The tags of the backup vault.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags();

    /**
     * Attribute TrialInfo: The free trial information.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTrialInfo();

    /**
     * Attribute UpdatedTime: The time when the backup vault was updated.
     * <p>
     * The value is a UNIX timestamp. Unit: seconds.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdatedTime();

    /**
     * Attribute VaultId: The ID of the backup vault.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVaultId();

    /**
     * Attribute VaultName: The name of the backup vault.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVaultName();

    /**
     * Attribute VaultStatusMessage: The status message that is returned when the backup vault is in the ERROR state.
     * <p>
     * This parameter is valid only for remote backup vaults.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVaultStatusMessage();

    /**
     * Attribute VaultStorageClass: Backup repository storage type.
     * <p>
     * The value is only <strong>STANDARD</strong>, which indicates STANDARD storage.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVaultStorageClass();

    /**
     * Attribute VaultType: The type of the backup vault.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVaultType();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.hbr.datasource.VaultProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.hbr.datasource.IVault.Jsii$Default {
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
        }

        /**
         * The construct tree node for this construct.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ConstructNode getNode() {
            return software.amazon.jsii.Kernel.get(this, "node", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.ConstructNode.class));
        }

        /**
         * The environment this resource belongs to.
         * <p>
         * For resources that are created and managed by the CDK
         * (generally, those created by creating new class instances like Role, Bucket, etc.),
         * this is always the same as the environment of the stack they belong to;
         * however, for imported resources
         * (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
         * that might be different than the stack they were imported into.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResourceEnvironment getEnv() {
            return software.amazon.jsii.Kernel.get(this, "env", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResourceEnvironment.class));
        }

        /**
         * The stack in which this resource is defined.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack getStack() {
            return software.amazon.jsii.Kernel.get(this, "stack", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Stack.class));
        }

        /**
         * Attribute BackupPlanStatistics: The statistics of backup plans that use the backup vault.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrBackupPlanStatistics() {
            return software.amazon.jsii.Kernel.get(this, "attrBackupPlanStatistics", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute BytesDone: The amount of data that is backed up.
         * <p>
         * Unit: bytes.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrBytesDone() {
            return software.amazon.jsii.Kernel.get(this, "attrBytesDone", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The creation time of the backup vault.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Dedup: Indicates whether the deduplication feature is enabled.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDedup() {
            return software.amazon.jsii.Kernel.get(this, "attrDedup", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: The description of the backup vault.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IndexAvailable: Indicates whether indexes are available.
         * <p>
         * Indexes are available when they are not being updated.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIndexAvailable() {
            return software.amazon.jsii.Kernel.get(this, "attrIndexAvailable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IndexLevel: The index level.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIndexLevel() {
            return software.amazon.jsii.Kernel.get(this, "attrIndexLevel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IndexUpdateTime: The time when the index was updated.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIndexUpdateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrIndexUpdateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LatestReplicationTime: The time when the last remote backup was synchronized.
         * <p>
         * The value is a UNIX timestamp. Unit: seconds.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrLatestReplicationTime() {
            return software.amazon.jsii.Kernel.get(this, "attrLatestReplicationTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PaymentType: The payment type of the backup vault.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPaymentType() {
            return software.amazon.jsii.Kernel.get(this, "attrPaymentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RedundancyType: The data redundancy type of the backup vault.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRedundancyType() {
            return software.amazon.jsii.Kernel.get(this, "attrRedundancyType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Replication: Indicates whether the backup vault is a remote backup vault.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrReplication() {
            return software.amazon.jsii.Kernel.get(this, "attrReplication", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ReplicationProgress: The progress of data synchronization from the backup vault to the mirror vault.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrReplicationProgress() {
            return software.amazon.jsii.Kernel.get(this, "attrReplicationProgress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ReplicationSourceRegionId: The ID of the region in which the source vault resides.
         * <p>
         * This parameter is valid only for remote backup vaults.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrReplicationSourceRegionId() {
            return software.amazon.jsii.Kernel.get(this, "attrReplicationSourceRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ReplicationSourceVaultId: The ID of the source vault that corresponds to the remote backup vault.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrReplicationSourceVaultId() {
            return software.amazon.jsii.Kernel.get(this, "attrReplicationSourceVaultId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: The ID of the resource group.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Retention: The retention period of the backup vault.
         * <p>
         * Unit: days.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRetention() {
            return software.amazon.jsii.Kernel.get(this, "attrRetention", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SearchEnabled: Indicates whether the backup search feature is enabled.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSearchEnabled() {
            return software.amazon.jsii.Kernel.get(this, "attrSearchEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SourceTypes: The data source types of the backup vault.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceTypes() {
            return software.amazon.jsii.Kernel.get(this, "attrSourceTypes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute StorageSize: The usage of the backup vault.
         * <p>
         * Unit: bytes.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrStorageSize() {
            return software.amazon.jsii.Kernel.get(this, "attrStorageSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: The tags of the backup vault.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TrialInfo: The free trial information.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTrialInfo() {
            return software.amazon.jsii.Kernel.get(this, "attrTrialInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UpdatedTime: The time when the backup vault was updated.
         * <p>
         * The value is a UNIX timestamp. Unit: seconds.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdatedTime() {
            return software.amazon.jsii.Kernel.get(this, "attrUpdatedTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VaultId: The ID of the backup vault.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVaultId() {
            return software.amazon.jsii.Kernel.get(this, "attrVaultId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VaultName: The name of the backup vault.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVaultName() {
            return software.amazon.jsii.Kernel.get(this, "attrVaultName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VaultStatusMessage: The status message that is returned when the backup vault is in the ERROR state.
         * <p>
         * This parameter is valid only for remote backup vaults.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVaultStatusMessage() {
            return software.amazon.jsii.Kernel.get(this, "attrVaultStatusMessage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VaultStorageClass: Backup repository storage type.
         * <p>
         * The value is only <strong>STANDARD</strong>, which indicates STANDARD storage.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVaultStorageClass() {
            return software.amazon.jsii.Kernel.get(this, "attrVaultStorageClass", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VaultType: The type of the backup vault.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVaultType() {
            return software.amazon.jsii.Kernel.get(this, "attrVaultType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.hbr.datasource.VaultProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.hbr.datasource.VaultProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IVault}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IVault, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

        /**
         * The construct tree node for this construct.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ConstructNode getNode() {
            return software.amazon.jsii.Kernel.get(this, "node", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.ConstructNode.class));
        }

        /**
         * The environment this resource belongs to.
         * <p>
         * For resources that are created and managed by the CDK
         * (generally, those created by creating new class instances like Role, Bucket, etc.),
         * this is always the same as the environment of the stack they belong to;
         * however, for imported resources
         * (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
         * that might be different than the stack they were imported into.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResourceEnvironment getEnv() {
            return software.amazon.jsii.Kernel.get(this, "env", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResourceEnvironment.class));
        }

        /**
         * The stack in which this resource is defined.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack getStack() {
            return software.amazon.jsii.Kernel.get(this, "stack", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Stack.class));
        }

        /**
         * Attribute BackupPlanStatistics: The statistics of backup plans that use the backup vault.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrBackupPlanStatistics() {
            return software.amazon.jsii.Kernel.get(this, "attrBackupPlanStatistics", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute BytesDone: The amount of data that is backed up.
         * <p>
         * Unit: bytes.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrBytesDone() {
            return software.amazon.jsii.Kernel.get(this, "attrBytesDone", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The creation time of the backup vault.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Dedup: Indicates whether the deduplication feature is enabled.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDedup() {
            return software.amazon.jsii.Kernel.get(this, "attrDedup", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: The description of the backup vault.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IndexAvailable: Indicates whether indexes are available.
         * <p>
         * Indexes are available when they are not being updated.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIndexAvailable() {
            return software.amazon.jsii.Kernel.get(this, "attrIndexAvailable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IndexLevel: The index level.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIndexLevel() {
            return software.amazon.jsii.Kernel.get(this, "attrIndexLevel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IndexUpdateTime: The time when the index was updated.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIndexUpdateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrIndexUpdateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LatestReplicationTime: The time when the last remote backup was synchronized.
         * <p>
         * The value is a UNIX timestamp. Unit: seconds.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrLatestReplicationTime() {
            return software.amazon.jsii.Kernel.get(this, "attrLatestReplicationTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PaymentType: The payment type of the backup vault.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPaymentType() {
            return software.amazon.jsii.Kernel.get(this, "attrPaymentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RedundancyType: The data redundancy type of the backup vault.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRedundancyType() {
            return software.amazon.jsii.Kernel.get(this, "attrRedundancyType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Replication: Indicates whether the backup vault is a remote backup vault.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrReplication() {
            return software.amazon.jsii.Kernel.get(this, "attrReplication", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ReplicationProgress: The progress of data synchronization from the backup vault to the mirror vault.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrReplicationProgress() {
            return software.amazon.jsii.Kernel.get(this, "attrReplicationProgress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ReplicationSourceRegionId: The ID of the region in which the source vault resides.
         * <p>
         * This parameter is valid only for remote backup vaults.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrReplicationSourceRegionId() {
            return software.amazon.jsii.Kernel.get(this, "attrReplicationSourceRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ReplicationSourceVaultId: The ID of the source vault that corresponds to the remote backup vault.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrReplicationSourceVaultId() {
            return software.amazon.jsii.Kernel.get(this, "attrReplicationSourceVaultId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: The ID of the resource group.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Retention: The retention period of the backup vault.
         * <p>
         * Unit: days.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRetention() {
            return software.amazon.jsii.Kernel.get(this, "attrRetention", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SearchEnabled: Indicates whether the backup search feature is enabled.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSearchEnabled() {
            return software.amazon.jsii.Kernel.get(this, "attrSearchEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SourceTypes: The data source types of the backup vault.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceTypes() {
            return software.amazon.jsii.Kernel.get(this, "attrSourceTypes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute StorageSize: The usage of the backup vault.
         * <p>
         * Unit: bytes.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrStorageSize() {
            return software.amazon.jsii.Kernel.get(this, "attrStorageSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: The tags of the backup vault.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TrialInfo: The free trial information.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTrialInfo() {
            return software.amazon.jsii.Kernel.get(this, "attrTrialInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UpdatedTime: The time when the backup vault was updated.
         * <p>
         * The value is a UNIX timestamp. Unit: seconds.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdatedTime() {
            return software.amazon.jsii.Kernel.get(this, "attrUpdatedTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VaultId: The ID of the backup vault.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVaultId() {
            return software.amazon.jsii.Kernel.get(this, "attrVaultId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VaultName: The name of the backup vault.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVaultName() {
            return software.amazon.jsii.Kernel.get(this, "attrVaultName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VaultStatusMessage: The status message that is returned when the backup vault is in the ERROR state.
         * <p>
         * This parameter is valid only for remote backup vaults.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVaultStatusMessage() {
            return software.amazon.jsii.Kernel.get(this, "attrVaultStatusMessage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VaultStorageClass: Backup repository storage type.
         * <p>
         * The value is only <strong>STANDARD</strong>, which indicates STANDARD storage.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVaultStorageClass() {
            return software.amazon.jsii.Kernel.get(this, "attrVaultStorageClass", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VaultType: The type of the backup vault.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVaultType() {
            return software.amazon.jsii.Kernel.get(this, "attrVaultType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.hbr.datasource.VaultProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.hbr.datasource.VaultProps.class));
        }
    }
}
