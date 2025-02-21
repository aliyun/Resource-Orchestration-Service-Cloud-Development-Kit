package com.aliyun.ros.cdk.ecs.datasource;

/**
 * Properties for defining a <code>Disks</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-disks
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:15.751Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.datasource.DisksProps")
@software.amazon.jsii.Jsii.Proxy(DisksProps.Jsii$Proxy.class)
public interface DisksProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property additionalAttributes: The value of attribute N.
     * <p>
     * Set the value to IOPS, which indicates the maximum IOPS of the disk.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAdditionalAttributes() {
        return null;
    }

    /**
     * Property autoSnapshotPolicyId: The ID of the automatic snapshot policy that is applied to the cloud disk.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoSnapshotPolicyId() {
        return null;
    }

    /**
     * Property category: The category of the disk.
     * <p>
     * Valid values:
     * all: all disk categories
     * cloud: basic disk
     * cloud_efficiency: ultra disk
     * cloud_ssd: standard SSD
     * ephemeral: retired local disk
     * ephemeral_ssd: local SSD
     * cloud_essd: ESSD
     * local_ssd_pro: I/O-intensive local disk
     * local_hdd_pro: throughput-intensive local disk
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCategory() {
        return null;
    }

    /**
     * Property deleteAutoSnapshot: Specifies whether to delete the automatic snapshots of the cloud disk when the disk is released.
     * <p>
     * Default value: false.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDeleteAutoSnapshot() {
        return null;
    }

    /**
     * Property deleteWithInstance: Specifies whether to release the cloud disk when its associated instance is released.
     * <p>
     * Valid values:
     * true: The cloud disk is released when its associated instance is released.
     * false: The cloud disk is not released but is retained as a pay-as-you-go data disk when its associated instance is released.
     * Default value: false.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDeleteWithInstance() {
        return null;
    }

    /**
     * Property diskChargeType: The billing method of the disk.
     * <p>
     * Valid values:
     * PrePaid: subscription
     * PostPaid: pay-as-you-go
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDiskChargeType() {
        return null;
    }

    /**
     * Property diskIds: The IDs of disks.
     * <p>
     * The value is a JSON array that consists of up to 100 disk IDs.
     * Separate the disk IDs with commas (,).
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDiskIds() {
        return null;
    }

    /**
     * Property diskName: The name of the disk.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDiskName() {
        return null;
    }

    /**
     * Property diskType: The type of the disk.
     * <p>
     * Valid values:
     * all: system disk and data disk
     * system: system disk
     * data: data disk
     * Default value: all.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDiskType() {
        return null;
    }

    /**
     * Property enableAutomatedSnapshotPolicy: Specifies whether an automatic snapshot policy is applied to the cloud disk.
     * <p>
     * true: An automatic snapshot policy is applied to the cloud disk.
     * false: No automatic snapshot policy is applied to the cloud disk.
     * Default value: false.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnableAutomatedSnapshotPolicy() {
        return null;
    }

    /**
     * Property enableAutoSnapshot: Specifies whether the automatic snapshot policy feature is enabled for the cloud disk.
     * <p>
     * true: The automatic snapshot policy feature is enabled for the cloud disk.
     * false: The automatic snapshot policy feature is disabled for the cloud disk.
     * Note By default, the automatic snapshot policy feature is enabled for created cloud disks. You need only to apply an automatic snapshot policy to a cloud disk before you can use the automatic snapshot policy.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnableAutoSnapshot() {
        return null;
    }

    /**
     * Property enableShared: Specifies whether the disk is a Shared Block Storage device.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnableShared() {
        return null;
    }

    /**
     * Property encrypted: Specifies whether to query only encrypted cloud disks.
     * <p>
     * Default value: false.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEncrypted() {
        return null;
    }

    /**
     * Property filters: Filter value when querying resources.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFilters() {
        return null;
    }

    /**
     * Property instanceId: The ID of the instance to which the disk is attached.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceId() {
        return null;
    }

    /**
     * Property kmsKeyId: The ID of the Key Management Service (KMS) key used by the cloud disk.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getKmsKeyId() {
        return null;
    }

    /**
     * Property multiAttach: Specifies whether the multi-attach feature is enabled for the disk.
     * <p>
     * Valid values:
     * Disabled: The multi-attach feature is disabled.
     * Enabled: The multi-attach feature is enabled.
     * LegacyShared: Shared Block Storage devices are queried.
     * The multi-attach feature is in invitational preview. To use this feature, submit a ticket.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMultiAttach() {
        return null;
    }

    /**
     * Property portable: Specifies whether the disk is removable.
     * <p>
     * Valid values:
     * true: The disk is removable.A removable disk can independently exist and can be attached to or detached from an instance within the same zone.
     * false: The disk is not removable. A disk that is not removable cannot independently exist or be attached to or detached from an instance within the same zone.
     * The Portable attribute of the following disks is false, and these disks share the same lifecycle with their associated instances:
     * Local disks
     * Local SSDs
     * Subscription data disks
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPortable() {
        return null;
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
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRefreshOptions() {
        return null;
    }

    /**
     * Property resourceGroupId: The ID of the resource group to which the disk belongs.
     * <p>
     * If this parameter is specified to query resources,up to 1,000 resources that belong to the specified resource group can be displayed in the response.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * Property snapshotId: The ID of the snapshot used to create the cloud disk.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSnapshotId() {
        return null;
    }

    /**
     * Property status: The state of the cloud disk.
     * <p>
     * For more information, see Disk states. Valid values:
     * In_use
     * Available
     * Attaching
     * Detaching
     * Creating
     * ReIniting
     * All
     * Default value: All.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getStatus() {
        return null;
    }

    /**
     * Property tags: Tags of disks.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.ecs.datasource.RosDisks.TagsProperty> getTags() {
        return null;
    }

    /**
     * Property zoneId: The ID of the zone for which to query resources.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getZoneId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link DisksProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link DisksProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<DisksProps> {
        java.lang.Object additionalAttributes;
        java.lang.Object autoSnapshotPolicyId;
        java.lang.Object category;
        java.lang.Object deleteAutoSnapshot;
        java.lang.Object deleteWithInstance;
        java.lang.Object diskChargeType;
        java.lang.Object diskIds;
        java.lang.Object diskName;
        java.lang.Object diskType;
        java.lang.Object enableAutomatedSnapshotPolicy;
        java.lang.Object enableAutoSnapshot;
        java.lang.Object enableShared;
        java.lang.Object encrypted;
        java.lang.Object filters;
        java.lang.Object instanceId;
        java.lang.Object kmsKeyId;
        java.lang.Object multiAttach;
        java.lang.Object portable;
        java.lang.Object refreshOptions;
        java.lang.Object resourceGroupId;
        java.lang.Object snapshotId;
        java.lang.Object status;
        java.util.List<com.aliyun.ros.cdk.ecs.datasource.RosDisks.TagsProperty> tags;
        java.lang.Object zoneId;

        /**
         * Sets the value of {@link DisksProps#getAdditionalAttributes}
         * @param additionalAttributes Property additionalAttributes: The value of attribute N.
         *                             Set the value to IOPS, which indicates the maximum IOPS of the disk.
         * @return {@code this}
         */
        public Builder additionalAttributes(com.aliyun.ros.cdk.core.IResolvable additionalAttributes) {
            this.additionalAttributes = additionalAttributes;
            return this;
        }

        /**
         * Sets the value of {@link DisksProps#getAdditionalAttributes}
         * @param additionalAttributes Property additionalAttributes: The value of attribute N.
         *                             Set the value to IOPS, which indicates the maximum IOPS of the disk.
         * @return {@code this}
         */
        public Builder additionalAttributes(java.util.List<? extends java.lang.Object> additionalAttributes) {
            this.additionalAttributes = additionalAttributes;
            return this;
        }

        /**
         * Sets the value of {@link DisksProps#getAutoSnapshotPolicyId}
         * @param autoSnapshotPolicyId Property autoSnapshotPolicyId: The ID of the automatic snapshot policy that is applied to the cloud disk.
         * @return {@code this}
         */
        public Builder autoSnapshotPolicyId(java.lang.String autoSnapshotPolicyId) {
            this.autoSnapshotPolicyId = autoSnapshotPolicyId;
            return this;
        }

        /**
         * Sets the value of {@link DisksProps#getAutoSnapshotPolicyId}
         * @param autoSnapshotPolicyId Property autoSnapshotPolicyId: The ID of the automatic snapshot policy that is applied to the cloud disk.
         * @return {@code this}
         */
        public Builder autoSnapshotPolicyId(com.aliyun.ros.cdk.core.IResolvable autoSnapshotPolicyId) {
            this.autoSnapshotPolicyId = autoSnapshotPolicyId;
            return this;
        }

        /**
         * Sets the value of {@link DisksProps#getCategory}
         * @param category Property category: The category of the disk.
         *                 Valid values:
         *                 all: all disk categories
         *                 cloud: basic disk
         *                 cloud_efficiency: ultra disk
         *                 cloud_ssd: standard SSD
         *                 ephemeral: retired local disk
         *                 ephemeral_ssd: local SSD
         *                 cloud_essd: ESSD
         *                 local_ssd_pro: I/O-intensive local disk
         *                 local_hdd_pro: throughput-intensive local disk
         * @return {@code this}
         */
        public Builder category(java.lang.String category) {
            this.category = category;
            return this;
        }

        /**
         * Sets the value of {@link DisksProps#getCategory}
         * @param category Property category: The category of the disk.
         *                 Valid values:
         *                 all: all disk categories
         *                 cloud: basic disk
         *                 cloud_efficiency: ultra disk
         *                 cloud_ssd: standard SSD
         *                 ephemeral: retired local disk
         *                 ephemeral_ssd: local SSD
         *                 cloud_essd: ESSD
         *                 local_ssd_pro: I/O-intensive local disk
         *                 local_hdd_pro: throughput-intensive local disk
         * @return {@code this}
         */
        public Builder category(com.aliyun.ros.cdk.core.IResolvable category) {
            this.category = category;
            return this;
        }

        /**
         * Sets the value of {@link DisksProps#getDeleteAutoSnapshot}
         * @param deleteAutoSnapshot Property deleteAutoSnapshot: Specifies whether to delete the automatic snapshots of the cloud disk when the disk is released.
         *                           Default value: false.
         * @return {@code this}
         */
        public Builder deleteAutoSnapshot(java.lang.String deleteAutoSnapshot) {
            this.deleteAutoSnapshot = deleteAutoSnapshot;
            return this;
        }

        /**
         * Sets the value of {@link DisksProps#getDeleteAutoSnapshot}
         * @param deleteAutoSnapshot Property deleteAutoSnapshot: Specifies whether to delete the automatic snapshots of the cloud disk when the disk is released.
         *                           Default value: false.
         * @return {@code this}
         */
        public Builder deleteAutoSnapshot(com.aliyun.ros.cdk.core.IResolvable deleteAutoSnapshot) {
            this.deleteAutoSnapshot = deleteAutoSnapshot;
            return this;
        }

        /**
         * Sets the value of {@link DisksProps#getDeleteWithInstance}
         * @param deleteWithInstance Property deleteWithInstance: Specifies whether to release the cloud disk when its associated instance is released.
         *                           Valid values:
         *                           true: The cloud disk is released when its associated instance is released.
         *                           false: The cloud disk is not released but is retained as a pay-as-you-go data disk when its associated instance is released.
         *                           Default value: false.
         * @return {@code this}
         */
        public Builder deleteWithInstance(java.lang.Boolean deleteWithInstance) {
            this.deleteWithInstance = deleteWithInstance;
            return this;
        }

        /**
         * Sets the value of {@link DisksProps#getDeleteWithInstance}
         * @param deleteWithInstance Property deleteWithInstance: Specifies whether to release the cloud disk when its associated instance is released.
         *                           Valid values:
         *                           true: The cloud disk is released when its associated instance is released.
         *                           false: The cloud disk is not released but is retained as a pay-as-you-go data disk when its associated instance is released.
         *                           Default value: false.
         * @return {@code this}
         */
        public Builder deleteWithInstance(com.aliyun.ros.cdk.core.IResolvable deleteWithInstance) {
            this.deleteWithInstance = deleteWithInstance;
            return this;
        }

        /**
         * Sets the value of {@link DisksProps#getDiskChargeType}
         * @param diskChargeType Property diskChargeType: The billing method of the disk.
         *                       Valid values:
         *                       PrePaid: subscription
         *                       PostPaid: pay-as-you-go
         * @return {@code this}
         */
        public Builder diskChargeType(java.lang.String diskChargeType) {
            this.diskChargeType = diskChargeType;
            return this;
        }

        /**
         * Sets the value of {@link DisksProps#getDiskChargeType}
         * @param diskChargeType Property diskChargeType: The billing method of the disk.
         *                       Valid values:
         *                       PrePaid: subscription
         *                       PostPaid: pay-as-you-go
         * @return {@code this}
         */
        public Builder diskChargeType(com.aliyun.ros.cdk.core.IResolvable diskChargeType) {
            this.diskChargeType = diskChargeType;
            return this;
        }

        /**
         * Sets the value of {@link DisksProps#getDiskIds}
         * @param diskIds Property diskIds: The IDs of disks.
         *                The value is a JSON array that consists of up to 100 disk IDs.
         *                Separate the disk IDs with commas (,).
         * @return {@code this}
         */
        public Builder diskIds(com.aliyun.ros.cdk.core.IResolvable diskIds) {
            this.diskIds = diskIds;
            return this;
        }

        /**
         * Sets the value of {@link DisksProps#getDiskIds}
         * @param diskIds Property diskIds: The IDs of disks.
         *                The value is a JSON array that consists of up to 100 disk IDs.
         *                Separate the disk IDs with commas (,).
         * @return {@code this}
         */
        public Builder diskIds(java.util.List<? extends java.lang.Object> diskIds) {
            this.diskIds = diskIds;
            return this;
        }

        /**
         * Sets the value of {@link DisksProps#getDiskName}
         * @param diskName Property diskName: The name of the disk.
         * @return {@code this}
         */
        public Builder diskName(java.lang.String diskName) {
            this.diskName = diskName;
            return this;
        }

        /**
         * Sets the value of {@link DisksProps#getDiskName}
         * @param diskName Property diskName: The name of the disk.
         * @return {@code this}
         */
        public Builder diskName(com.aliyun.ros.cdk.core.IResolvable diskName) {
            this.diskName = diskName;
            return this;
        }

        /**
         * Sets the value of {@link DisksProps#getDiskType}
         * @param diskType Property diskType: The type of the disk.
         *                 Valid values:
         *                 all: system disk and data disk
         *                 system: system disk
         *                 data: data disk
         *                 Default value: all.
         * @return {@code this}
         */
        public Builder diskType(java.lang.String diskType) {
            this.diskType = diskType;
            return this;
        }

        /**
         * Sets the value of {@link DisksProps#getDiskType}
         * @param diskType Property diskType: The type of the disk.
         *                 Valid values:
         *                 all: system disk and data disk
         *                 system: system disk
         *                 data: data disk
         *                 Default value: all.
         * @return {@code this}
         */
        public Builder diskType(com.aliyun.ros.cdk.core.IResolvable diskType) {
            this.diskType = diskType;
            return this;
        }

        /**
         * Sets the value of {@link DisksProps#getEnableAutomatedSnapshotPolicy}
         * @param enableAutomatedSnapshotPolicy Property enableAutomatedSnapshotPolicy: Specifies whether an automatic snapshot policy is applied to the cloud disk.
         *                                      true: An automatic snapshot policy is applied to the cloud disk.
         *                                      false: No automatic snapshot policy is applied to the cloud disk.
         *                                      Default value: false.
         * @return {@code this}
         */
        public Builder enableAutomatedSnapshotPolicy(java.lang.Boolean enableAutomatedSnapshotPolicy) {
            this.enableAutomatedSnapshotPolicy = enableAutomatedSnapshotPolicy;
            return this;
        }

        /**
         * Sets the value of {@link DisksProps#getEnableAutomatedSnapshotPolicy}
         * @param enableAutomatedSnapshotPolicy Property enableAutomatedSnapshotPolicy: Specifies whether an automatic snapshot policy is applied to the cloud disk.
         *                                      true: An automatic snapshot policy is applied to the cloud disk.
         *                                      false: No automatic snapshot policy is applied to the cloud disk.
         *                                      Default value: false.
         * @return {@code this}
         */
        public Builder enableAutomatedSnapshotPolicy(com.aliyun.ros.cdk.core.IResolvable enableAutomatedSnapshotPolicy) {
            this.enableAutomatedSnapshotPolicy = enableAutomatedSnapshotPolicy;
            return this;
        }

        /**
         * Sets the value of {@link DisksProps#getEnableAutoSnapshot}
         * @param enableAutoSnapshot Property enableAutoSnapshot: Specifies whether the automatic snapshot policy feature is enabled for the cloud disk.
         *                           true: The automatic snapshot policy feature is enabled for the cloud disk.
         *                           false: The automatic snapshot policy feature is disabled for the cloud disk.
         *                           Note By default, the automatic snapshot policy feature is enabled for created cloud disks. You need only to apply an automatic snapshot policy to a cloud disk before you can use the automatic snapshot policy.
         * @return {@code this}
         */
        public Builder enableAutoSnapshot(java.lang.Boolean enableAutoSnapshot) {
            this.enableAutoSnapshot = enableAutoSnapshot;
            return this;
        }

        /**
         * Sets the value of {@link DisksProps#getEnableAutoSnapshot}
         * @param enableAutoSnapshot Property enableAutoSnapshot: Specifies whether the automatic snapshot policy feature is enabled for the cloud disk.
         *                           true: The automatic snapshot policy feature is enabled for the cloud disk.
         *                           false: The automatic snapshot policy feature is disabled for the cloud disk.
         *                           Note By default, the automatic snapshot policy feature is enabled for created cloud disks. You need only to apply an automatic snapshot policy to a cloud disk before you can use the automatic snapshot policy.
         * @return {@code this}
         */
        public Builder enableAutoSnapshot(com.aliyun.ros.cdk.core.IResolvable enableAutoSnapshot) {
            this.enableAutoSnapshot = enableAutoSnapshot;
            return this;
        }

        /**
         * Sets the value of {@link DisksProps#getEnableShared}
         * @param enableShared Property enableShared: Specifies whether the disk is a Shared Block Storage device.
         * @return {@code this}
         */
        public Builder enableShared(java.lang.String enableShared) {
            this.enableShared = enableShared;
            return this;
        }

        /**
         * Sets the value of {@link DisksProps#getEnableShared}
         * @param enableShared Property enableShared: Specifies whether the disk is a Shared Block Storage device.
         * @return {@code this}
         */
        public Builder enableShared(com.aliyun.ros.cdk.core.IResolvable enableShared) {
            this.enableShared = enableShared;
            return this;
        }

        /**
         * Sets the value of {@link DisksProps#getEncrypted}
         * @param encrypted Property encrypted: Specifies whether to query only encrypted cloud disks.
         *                  Default value: false.
         * @return {@code this}
         */
        public Builder encrypted(java.lang.Boolean encrypted) {
            this.encrypted = encrypted;
            return this;
        }

        /**
         * Sets the value of {@link DisksProps#getEncrypted}
         * @param encrypted Property encrypted: Specifies whether to query only encrypted cloud disks.
         *                  Default value: false.
         * @return {@code this}
         */
        public Builder encrypted(com.aliyun.ros.cdk.core.IResolvable encrypted) {
            this.encrypted = encrypted;
            return this;
        }

        /**
         * Sets the value of {@link DisksProps#getFilters}
         * @param filters Property filters: Filter value when querying resources.
         * @return {@code this}
         */
        public Builder filters(com.aliyun.ros.cdk.core.IResolvable filters) {
            this.filters = filters;
            return this;
        }

        /**
         * Sets the value of {@link DisksProps#getFilters}
         * @param filters Property filters: Filter value when querying resources.
         * @return {@code this}
         */
        public Builder filters(java.util.List<? extends java.lang.Object> filters) {
            this.filters = filters;
            return this;
        }

        /**
         * Sets the value of {@link DisksProps#getInstanceId}
         * @param instanceId Property instanceId: The ID of the instance to which the disk is attached.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link DisksProps#getInstanceId}
         * @param instanceId Property instanceId: The ID of the instance to which the disk is attached.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link DisksProps#getKmsKeyId}
         * @param kmsKeyId Property kmsKeyId: The ID of the Key Management Service (KMS) key used by the cloud disk.
         * @return {@code this}
         */
        public Builder kmsKeyId(java.lang.String kmsKeyId) {
            this.kmsKeyId = kmsKeyId;
            return this;
        }

        /**
         * Sets the value of {@link DisksProps#getKmsKeyId}
         * @param kmsKeyId Property kmsKeyId: The ID of the Key Management Service (KMS) key used by the cloud disk.
         * @return {@code this}
         */
        public Builder kmsKeyId(com.aliyun.ros.cdk.core.IResolvable kmsKeyId) {
            this.kmsKeyId = kmsKeyId;
            return this;
        }

        /**
         * Sets the value of {@link DisksProps#getMultiAttach}
         * @param multiAttach Property multiAttach: Specifies whether the multi-attach feature is enabled for the disk.
         *                    Valid values:
         *                    Disabled: The multi-attach feature is disabled.
         *                    Enabled: The multi-attach feature is enabled.
         *                    LegacyShared: Shared Block Storage devices are queried.
         *                    The multi-attach feature is in invitational preview. To use this feature, submit a ticket.
         * @return {@code this}
         */
        public Builder multiAttach(java.lang.String multiAttach) {
            this.multiAttach = multiAttach;
            return this;
        }

        /**
         * Sets the value of {@link DisksProps#getMultiAttach}
         * @param multiAttach Property multiAttach: Specifies whether the multi-attach feature is enabled for the disk.
         *                    Valid values:
         *                    Disabled: The multi-attach feature is disabled.
         *                    Enabled: The multi-attach feature is enabled.
         *                    LegacyShared: Shared Block Storage devices are queried.
         *                    The multi-attach feature is in invitational preview. To use this feature, submit a ticket.
         * @return {@code this}
         */
        public Builder multiAttach(com.aliyun.ros.cdk.core.IResolvable multiAttach) {
            this.multiAttach = multiAttach;
            return this;
        }

        /**
         * Sets the value of {@link DisksProps#getPortable}
         * @param portable Property portable: Specifies whether the disk is removable.
         *                 Valid values:
         *                 true: The disk is removable.A removable disk can independently exist and can be attached to or detached from an instance within the same zone.
         *                 false: The disk is not removable. A disk that is not removable cannot independently exist or be attached to or detached from an instance within the same zone.
         *                 The Portable attribute of the following disks is false, and these disks share the same lifecycle with their associated instances:
         *                 Local disks
         *                 Local SSDs
         *                 Subscription data disks
         * @return {@code this}
         */
        public Builder portable(java.lang.String portable) {
            this.portable = portable;
            return this;
        }

        /**
         * Sets the value of {@link DisksProps#getPortable}
         * @param portable Property portable: Specifies whether the disk is removable.
         *                 Valid values:
         *                 true: The disk is removable.A removable disk can independently exist and can be attached to or detached from an instance within the same zone.
         *                 false: The disk is not removable. A disk that is not removable cannot independently exist or be attached to or detached from an instance within the same zone.
         *                 The Portable attribute of the following disks is false, and these disks share the same lifecycle with their associated instances:
         *                 Local disks
         *                 Local SSDs
         *                 Subscription data disks
         * @return {@code this}
         */
        public Builder portable(com.aliyun.ros.cdk.core.IResolvable portable) {
            this.portable = portable;
            return this;
        }

        /**
         * Sets the value of {@link DisksProps#getRefreshOptions}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         *                       Valid values:
         *                       <p>
         *                       <ul>
         *                       <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         *                       <li>Always: Always refresh the datasource resource when the stack is updated.
         *                       Default is Never.</li>
         *                       </ul>
         * @return {@code this}
         */
        public Builder refreshOptions(java.lang.String refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link DisksProps#getRefreshOptions}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         *                       Valid values:
         *                       <p>
         *                       <ul>
         *                       <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         *                       <li>Always: Always refresh the datasource resource when the stack is updated.
         *                       Default is Never.</li>
         *                       </ul>
         * @return {@code this}
         */
        public Builder refreshOptions(com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link DisksProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the disk belongs.
         *                        If this parameter is specified to query resources,up to 1,000 resources that belong to the specified resource group can be displayed in the response.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link DisksProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the disk belongs.
         *                        If this parameter is specified to query resources,up to 1,000 resources that belong to the specified resource group can be displayed in the response.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link DisksProps#getSnapshotId}
         * @param snapshotId Property snapshotId: The ID of the snapshot used to create the cloud disk.
         * @return {@code this}
         */
        public Builder snapshotId(java.lang.String snapshotId) {
            this.snapshotId = snapshotId;
            return this;
        }

        /**
         * Sets the value of {@link DisksProps#getSnapshotId}
         * @param snapshotId Property snapshotId: The ID of the snapshot used to create the cloud disk.
         * @return {@code this}
         */
        public Builder snapshotId(com.aliyun.ros.cdk.core.IResolvable snapshotId) {
            this.snapshotId = snapshotId;
            return this;
        }

        /**
         * Sets the value of {@link DisksProps#getStatus}
         * @param status Property status: The state of the cloud disk.
         *               For more information, see Disk states. Valid values:
         *               In_use
         *               Available
         *               Attaching
         *               Detaching
         *               Creating
         *               ReIniting
         *               All
         *               Default value: All.
         * @return {@code this}
         */
        public Builder status(java.lang.String status) {
            this.status = status;
            return this;
        }

        /**
         * Sets the value of {@link DisksProps#getStatus}
         * @param status Property status: The state of the cloud disk.
         *               For more information, see Disk states. Valid values:
         *               In_use
         *               Available
         *               Attaching
         *               Detaching
         *               Creating
         *               ReIniting
         *               All
         *               Default value: All.
         * @return {@code this}
         */
        public Builder status(com.aliyun.ros.cdk.core.IResolvable status) {
            this.status = status;
            return this;
        }

        /**
         * Sets the value of {@link DisksProps#getTags}
         * @param tags Property tags: Tags of disks.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.ecs.datasource.RosDisks.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.ecs.datasource.RosDisks.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link DisksProps#getZoneId}
         * @param zoneId Property zoneId: The ID of the zone for which to query resources.
         * @return {@code this}
         */
        public Builder zoneId(java.lang.String zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link DisksProps#getZoneId}
         * @param zoneId Property zoneId: The ID of the zone for which to query resources.
         * @return {@code this}
         */
        public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link DisksProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public DisksProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link DisksProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DisksProps {
        private final java.lang.Object additionalAttributes;
        private final java.lang.Object autoSnapshotPolicyId;
        private final java.lang.Object category;
        private final java.lang.Object deleteAutoSnapshot;
        private final java.lang.Object deleteWithInstance;
        private final java.lang.Object diskChargeType;
        private final java.lang.Object diskIds;
        private final java.lang.Object diskName;
        private final java.lang.Object diskType;
        private final java.lang.Object enableAutomatedSnapshotPolicy;
        private final java.lang.Object enableAutoSnapshot;
        private final java.lang.Object enableShared;
        private final java.lang.Object encrypted;
        private final java.lang.Object filters;
        private final java.lang.Object instanceId;
        private final java.lang.Object kmsKeyId;
        private final java.lang.Object multiAttach;
        private final java.lang.Object portable;
        private final java.lang.Object refreshOptions;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object snapshotId;
        private final java.lang.Object status;
        private final java.util.List<com.aliyun.ros.cdk.ecs.datasource.RosDisks.TagsProperty> tags;
        private final java.lang.Object zoneId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.additionalAttributes = software.amazon.jsii.Kernel.get(this, "additionalAttributes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoSnapshotPolicyId = software.amazon.jsii.Kernel.get(this, "autoSnapshotPolicyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.category = software.amazon.jsii.Kernel.get(this, "category", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.deleteAutoSnapshot = software.amazon.jsii.Kernel.get(this, "deleteAutoSnapshot", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.deleteWithInstance = software.amazon.jsii.Kernel.get(this, "deleteWithInstance", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.diskChargeType = software.amazon.jsii.Kernel.get(this, "diskChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.diskIds = software.amazon.jsii.Kernel.get(this, "diskIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.diskName = software.amazon.jsii.Kernel.get(this, "diskName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.diskType = software.amazon.jsii.Kernel.get(this, "diskType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enableAutomatedSnapshotPolicy = software.amazon.jsii.Kernel.get(this, "enableAutomatedSnapshotPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enableAutoSnapshot = software.amazon.jsii.Kernel.get(this, "enableAutoSnapshot", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enableShared = software.amazon.jsii.Kernel.get(this, "enableShared", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.encrypted = software.amazon.jsii.Kernel.get(this, "encrypted", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.filters = software.amazon.jsii.Kernel.get(this, "filters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.kmsKeyId = software.amazon.jsii.Kernel.get(this, "kmsKeyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.multiAttach = software.amazon.jsii.Kernel.get(this, "multiAttach", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.portable = software.amazon.jsii.Kernel.get(this, "portable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.refreshOptions = software.amazon.jsii.Kernel.get(this, "refreshOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.snapshotId = software.amazon.jsii.Kernel.get(this, "snapshotId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.status = software.amazon.jsii.Kernel.get(this, "status", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.datasource.RosDisks.TagsProperty.class)));
            this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.additionalAttributes = builder.additionalAttributes;
            this.autoSnapshotPolicyId = builder.autoSnapshotPolicyId;
            this.category = builder.category;
            this.deleteAutoSnapshot = builder.deleteAutoSnapshot;
            this.deleteWithInstance = builder.deleteWithInstance;
            this.diskChargeType = builder.diskChargeType;
            this.diskIds = builder.diskIds;
            this.diskName = builder.diskName;
            this.diskType = builder.diskType;
            this.enableAutomatedSnapshotPolicy = builder.enableAutomatedSnapshotPolicy;
            this.enableAutoSnapshot = builder.enableAutoSnapshot;
            this.enableShared = builder.enableShared;
            this.encrypted = builder.encrypted;
            this.filters = builder.filters;
            this.instanceId = builder.instanceId;
            this.kmsKeyId = builder.kmsKeyId;
            this.multiAttach = builder.multiAttach;
            this.portable = builder.portable;
            this.refreshOptions = builder.refreshOptions;
            this.resourceGroupId = builder.resourceGroupId;
            this.snapshotId = builder.snapshotId;
            this.status = builder.status;
            this.tags = (java.util.List<com.aliyun.ros.cdk.ecs.datasource.RosDisks.TagsProperty>)builder.tags;
            this.zoneId = builder.zoneId;
        }

        @Override
        public final java.lang.Object getAdditionalAttributes() {
            return this.additionalAttributes;
        }

        @Override
        public final java.lang.Object getAutoSnapshotPolicyId() {
            return this.autoSnapshotPolicyId;
        }

        @Override
        public final java.lang.Object getCategory() {
            return this.category;
        }

        @Override
        public final java.lang.Object getDeleteAutoSnapshot() {
            return this.deleteAutoSnapshot;
        }

        @Override
        public final java.lang.Object getDeleteWithInstance() {
            return this.deleteWithInstance;
        }

        @Override
        public final java.lang.Object getDiskChargeType() {
            return this.diskChargeType;
        }

        @Override
        public final java.lang.Object getDiskIds() {
            return this.diskIds;
        }

        @Override
        public final java.lang.Object getDiskName() {
            return this.diskName;
        }

        @Override
        public final java.lang.Object getDiskType() {
            return this.diskType;
        }

        @Override
        public final java.lang.Object getEnableAutomatedSnapshotPolicy() {
            return this.enableAutomatedSnapshotPolicy;
        }

        @Override
        public final java.lang.Object getEnableAutoSnapshot() {
            return this.enableAutoSnapshot;
        }

        @Override
        public final java.lang.Object getEnableShared() {
            return this.enableShared;
        }

        @Override
        public final java.lang.Object getEncrypted() {
            return this.encrypted;
        }

        @Override
        public final java.lang.Object getFilters() {
            return this.filters;
        }

        @Override
        public final java.lang.Object getInstanceId() {
            return this.instanceId;
        }

        @Override
        public final java.lang.Object getKmsKeyId() {
            return this.kmsKeyId;
        }

        @Override
        public final java.lang.Object getMultiAttach() {
            return this.multiAttach;
        }

        @Override
        public final java.lang.Object getPortable() {
            return this.portable;
        }

        @Override
        public final java.lang.Object getRefreshOptions() {
            return this.refreshOptions;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getSnapshotId() {
            return this.snapshotId;
        }

        @Override
        public final java.lang.Object getStatus() {
            return this.status;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.ecs.datasource.RosDisks.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        public final java.lang.Object getZoneId() {
            return this.zoneId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getAdditionalAttributes() != null) {
                data.set("additionalAttributes", om.valueToTree(this.getAdditionalAttributes()));
            }
            if (this.getAutoSnapshotPolicyId() != null) {
                data.set("autoSnapshotPolicyId", om.valueToTree(this.getAutoSnapshotPolicyId()));
            }
            if (this.getCategory() != null) {
                data.set("category", om.valueToTree(this.getCategory()));
            }
            if (this.getDeleteAutoSnapshot() != null) {
                data.set("deleteAutoSnapshot", om.valueToTree(this.getDeleteAutoSnapshot()));
            }
            if (this.getDeleteWithInstance() != null) {
                data.set("deleteWithInstance", om.valueToTree(this.getDeleteWithInstance()));
            }
            if (this.getDiskChargeType() != null) {
                data.set("diskChargeType", om.valueToTree(this.getDiskChargeType()));
            }
            if (this.getDiskIds() != null) {
                data.set("diskIds", om.valueToTree(this.getDiskIds()));
            }
            if (this.getDiskName() != null) {
                data.set("diskName", om.valueToTree(this.getDiskName()));
            }
            if (this.getDiskType() != null) {
                data.set("diskType", om.valueToTree(this.getDiskType()));
            }
            if (this.getEnableAutomatedSnapshotPolicy() != null) {
                data.set("enableAutomatedSnapshotPolicy", om.valueToTree(this.getEnableAutomatedSnapshotPolicy()));
            }
            if (this.getEnableAutoSnapshot() != null) {
                data.set("enableAutoSnapshot", om.valueToTree(this.getEnableAutoSnapshot()));
            }
            if (this.getEnableShared() != null) {
                data.set("enableShared", om.valueToTree(this.getEnableShared()));
            }
            if (this.getEncrypted() != null) {
                data.set("encrypted", om.valueToTree(this.getEncrypted()));
            }
            if (this.getFilters() != null) {
                data.set("filters", om.valueToTree(this.getFilters()));
            }
            if (this.getInstanceId() != null) {
                data.set("instanceId", om.valueToTree(this.getInstanceId()));
            }
            if (this.getKmsKeyId() != null) {
                data.set("kmsKeyId", om.valueToTree(this.getKmsKeyId()));
            }
            if (this.getMultiAttach() != null) {
                data.set("multiAttach", om.valueToTree(this.getMultiAttach()));
            }
            if (this.getPortable() != null) {
                data.set("portable", om.valueToTree(this.getPortable()));
            }
            if (this.getRefreshOptions() != null) {
                data.set("refreshOptions", om.valueToTree(this.getRefreshOptions()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getSnapshotId() != null) {
                data.set("snapshotId", om.valueToTree(this.getSnapshotId()));
            }
            if (this.getStatus() != null) {
                data.set("status", om.valueToTree(this.getStatus()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getZoneId() != null) {
                data.set("zoneId", om.valueToTree(this.getZoneId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.datasource.DisksProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            DisksProps.Jsii$Proxy that = (DisksProps.Jsii$Proxy) o;

            if (this.additionalAttributes != null ? !this.additionalAttributes.equals(that.additionalAttributes) : that.additionalAttributes != null) return false;
            if (this.autoSnapshotPolicyId != null ? !this.autoSnapshotPolicyId.equals(that.autoSnapshotPolicyId) : that.autoSnapshotPolicyId != null) return false;
            if (this.category != null ? !this.category.equals(that.category) : that.category != null) return false;
            if (this.deleteAutoSnapshot != null ? !this.deleteAutoSnapshot.equals(that.deleteAutoSnapshot) : that.deleteAutoSnapshot != null) return false;
            if (this.deleteWithInstance != null ? !this.deleteWithInstance.equals(that.deleteWithInstance) : that.deleteWithInstance != null) return false;
            if (this.diskChargeType != null ? !this.diskChargeType.equals(that.diskChargeType) : that.diskChargeType != null) return false;
            if (this.diskIds != null ? !this.diskIds.equals(that.diskIds) : that.diskIds != null) return false;
            if (this.diskName != null ? !this.diskName.equals(that.diskName) : that.diskName != null) return false;
            if (this.diskType != null ? !this.diskType.equals(that.diskType) : that.diskType != null) return false;
            if (this.enableAutomatedSnapshotPolicy != null ? !this.enableAutomatedSnapshotPolicy.equals(that.enableAutomatedSnapshotPolicy) : that.enableAutomatedSnapshotPolicy != null) return false;
            if (this.enableAutoSnapshot != null ? !this.enableAutoSnapshot.equals(that.enableAutoSnapshot) : that.enableAutoSnapshot != null) return false;
            if (this.enableShared != null ? !this.enableShared.equals(that.enableShared) : that.enableShared != null) return false;
            if (this.encrypted != null ? !this.encrypted.equals(that.encrypted) : that.encrypted != null) return false;
            if (this.filters != null ? !this.filters.equals(that.filters) : that.filters != null) return false;
            if (this.instanceId != null ? !this.instanceId.equals(that.instanceId) : that.instanceId != null) return false;
            if (this.kmsKeyId != null ? !this.kmsKeyId.equals(that.kmsKeyId) : that.kmsKeyId != null) return false;
            if (this.multiAttach != null ? !this.multiAttach.equals(that.multiAttach) : that.multiAttach != null) return false;
            if (this.portable != null ? !this.portable.equals(that.portable) : that.portable != null) return false;
            if (this.refreshOptions != null ? !this.refreshOptions.equals(that.refreshOptions) : that.refreshOptions != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.snapshotId != null ? !this.snapshotId.equals(that.snapshotId) : that.snapshotId != null) return false;
            if (this.status != null ? !this.status.equals(that.status) : that.status != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            return this.zoneId != null ? this.zoneId.equals(that.zoneId) : that.zoneId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.additionalAttributes != null ? this.additionalAttributes.hashCode() : 0;
            result = 31 * result + (this.autoSnapshotPolicyId != null ? this.autoSnapshotPolicyId.hashCode() : 0);
            result = 31 * result + (this.category != null ? this.category.hashCode() : 0);
            result = 31 * result + (this.deleteAutoSnapshot != null ? this.deleteAutoSnapshot.hashCode() : 0);
            result = 31 * result + (this.deleteWithInstance != null ? this.deleteWithInstance.hashCode() : 0);
            result = 31 * result + (this.diskChargeType != null ? this.diskChargeType.hashCode() : 0);
            result = 31 * result + (this.diskIds != null ? this.diskIds.hashCode() : 0);
            result = 31 * result + (this.diskName != null ? this.diskName.hashCode() : 0);
            result = 31 * result + (this.diskType != null ? this.diskType.hashCode() : 0);
            result = 31 * result + (this.enableAutomatedSnapshotPolicy != null ? this.enableAutomatedSnapshotPolicy.hashCode() : 0);
            result = 31 * result + (this.enableAutoSnapshot != null ? this.enableAutoSnapshot.hashCode() : 0);
            result = 31 * result + (this.enableShared != null ? this.enableShared.hashCode() : 0);
            result = 31 * result + (this.encrypted != null ? this.encrypted.hashCode() : 0);
            result = 31 * result + (this.filters != null ? this.filters.hashCode() : 0);
            result = 31 * result + (this.instanceId != null ? this.instanceId.hashCode() : 0);
            result = 31 * result + (this.kmsKeyId != null ? this.kmsKeyId.hashCode() : 0);
            result = 31 * result + (this.multiAttach != null ? this.multiAttach.hashCode() : 0);
            result = 31 * result + (this.portable != null ? this.portable.hashCode() : 0);
            result = 31 * result + (this.refreshOptions != null ? this.refreshOptions.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.snapshotId != null ? this.snapshotId.hashCode() : 0);
            result = 31 * result + (this.status != null ? this.status.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.zoneId != null ? this.zoneId.hashCode() : 0);
            return result;
        }
    }
}
