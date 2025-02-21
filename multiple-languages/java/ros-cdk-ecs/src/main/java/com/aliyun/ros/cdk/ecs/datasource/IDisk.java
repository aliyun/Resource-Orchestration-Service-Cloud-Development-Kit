package com.aliyun.ros.cdk.ecs.datasource;

/**
 * Represents a <code>Disk</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:15.788Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.datasource.IDisk")
@software.amazon.jsii.Jsii.Proxy(IDisk.Jsii$Proxy.class)
public interface IDisk extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute AttachedTime: The attached time.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAttachedTime();

    /**
     * Attribute AutoSnapshotPolicyId: Automatic snapshot policy ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAutoSnapshotPolicyId();

    /**
     * Attribute BurstingEnabled: Does the data disk turn on Burst (performance Burst).
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrBurstingEnabled();

    /**
     * Attribute Category: Disk type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCategory();

    /**
     * Attribute CreateTime: The creation time.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute DeleteAutoSnapshot: Whether to delete automatic snapshots at the same time.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeleteAutoSnapshot();

    /**
     * Attribute DeleteWithInstance: Whether to release with the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeleteWithInstance();

    /**
     * Attribute Description: The description.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription();

    /**
     * Attribute DetachedTime: Unloading time.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDetachedTime();

    /**
     * Attribute Device: Cloud disk or the device name of the mounted instance on the site.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDevice();

    /**
     * Attribute DiskId: The disk id.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDiskId();

    /**
     * Attribute DiskName: The disk name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDiskName();

    /**
     * Attribute EnableAutomatedSnapshotPolicy: Whether the disk implements an automatic snapshot policy.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnableAutomatedSnapshotPolicy();

    /**
     * Attribute EnableAutoSnapshot: Whether the disk implements an automatic snapshot policy.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnableAutoSnapshot();

    /**
     * Attribute Encrypted: Whether the disk is encrypted.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEncrypted();

    /**
     * Attribute ExpiredTime: The expiration time of a monthly disk.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrExpiredTime();

    /**
     * Attribute ImageId: The image id.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageId();

    /**
     * Attribute InstanceId: The instance id.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId();

    /**
     * Attribute Iops: Number of read/write (I/O) operations per second.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIops();

    /**
     * Attribute IopsRead: Number of reads per second.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIopsRead();

    /**
     * Attribute IopsWrite: Number of writes per second.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIopsWrite();

    /**
     * Attribute KmsKeyId: The KMS keyId.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrKmsKeyId();

    /**
     * Attribute MountInstanceNum: Number of instances mounted on shared storage.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMountInstanceNum();

    /**
     * Attribute MountInstances: Disk mount instances.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMountInstances();

    /**
     * Attribute MultiAttach: Whether to enable the multi-Mount feature.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMultiAttach();

    /**
     * Attribute OperationLocks: Resource locking information.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrOperationLocks();

    /**
     * Attribute PaymentType: Payment method for disk.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPaymentType();

    /**
     * Attribute PerformanceLevel: Performance levels of ESSD cloud disk.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPerformanceLevel();

    /**
     * Attribute Portable: Whether the disk is unmountable.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPortable();

    /**
     * Attribute ProductCode: The product logo of the cloud market.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrProductCode();

    /**
     * Attribute ProvisionedIops: The preconfigured read and write IOPS of the ESSD AutoPL cloud disk.
     * <p>
     * Possible values: 0 ~ min{50,000, 1000 * capacity-baseline performance}.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrProvisionedIops();

    /**
     * Attribute ResourceGroupId: The resource group id.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId();

    /**
     * Attribute Size: Disk size.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSize();

    /**
     * Attribute SnapshotId: The source snapshot id.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSnapshotId();

    /**
     * Attribute StorageClusterId: The ID of the dedicated block storage cluster.
     * <p>
     * If you need to create a cloud disk in the specified dedicated block storage cluster, specify this parameter.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrStorageClusterId();

    /**
     * Attribute StorageSetId: The ID of the Save set.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrStorageSetId();

    /**
     * Attribute StorageSetPartitionNumber: Number of Save set partitions.
     * <p>
     * Value range: greater than or equal to 2. The maximum value cannot exceed the equity quota limit displayed after calling.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrStorageSetPartitionNumber();

    /**
     * Attribute Tags: The tags.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags();

    /**
     * Attribute ZoneId: ID of the free zone to which the disk belongs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneId();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.datasource.DiskProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.ecs.datasource.IDisk.Jsii$Default {
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
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ResourceEnvironment getEnv() {
            return software.amazon.jsii.Kernel.get(this, "env", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.ResourceEnvironment.class));
        }

        /**
         * The stack in which this resource is defined.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack getStack() {
            return software.amazon.jsii.Kernel.get(this, "stack", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Stack.class));
        }

        /**
         * Attribute AttachedTime: The attached time.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAttachedTime() {
            return software.amazon.jsii.Kernel.get(this, "attrAttachedTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AutoSnapshotPolicyId: Automatic snapshot policy ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAutoSnapshotPolicyId() {
            return software.amazon.jsii.Kernel.get(this, "attrAutoSnapshotPolicyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute BurstingEnabled: Does the data disk turn on Burst (performance Burst).
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrBurstingEnabled() {
            return software.amazon.jsii.Kernel.get(this, "attrBurstingEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Category: Disk type.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCategory() {
            return software.amazon.jsii.Kernel.get(this, "attrCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The creation time.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DeleteAutoSnapshot: Whether to delete automatic snapshots at the same time.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeleteAutoSnapshot() {
            return software.amazon.jsii.Kernel.get(this, "attrDeleteAutoSnapshot", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DeleteWithInstance: Whether to release with the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeleteWithInstance() {
            return software.amazon.jsii.Kernel.get(this, "attrDeleteWithInstance", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: The description.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DetachedTime: Unloading time.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDetachedTime() {
            return software.amazon.jsii.Kernel.get(this, "attrDetachedTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Device: Cloud disk or the device name of the mounted instance on the site.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDevice() {
            return software.amazon.jsii.Kernel.get(this, "attrDevice", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DiskId: The disk id.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDiskId() {
            return software.amazon.jsii.Kernel.get(this, "attrDiskId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DiskName: The disk name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDiskName() {
            return software.amazon.jsii.Kernel.get(this, "attrDiskName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EnableAutomatedSnapshotPolicy: Whether the disk implements an automatic snapshot policy.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnableAutomatedSnapshotPolicy() {
            return software.amazon.jsii.Kernel.get(this, "attrEnableAutomatedSnapshotPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EnableAutoSnapshot: Whether the disk implements an automatic snapshot policy.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnableAutoSnapshot() {
            return software.amazon.jsii.Kernel.get(this, "attrEnableAutoSnapshot", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Encrypted: Whether the disk is encrypted.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEncrypted() {
            return software.amazon.jsii.Kernel.get(this, "attrEncrypted", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ExpiredTime: The expiration time of a monthly disk.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrExpiredTime() {
            return software.amazon.jsii.Kernel.get(this, "attrExpiredTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ImageId: The image id.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageId() {
            return software.amazon.jsii.Kernel.get(this, "attrImageId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceId: The instance id.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Iops: Number of read/write (I/O) operations per second.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIops() {
            return software.amazon.jsii.Kernel.get(this, "attrIops", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IopsRead: Number of reads per second.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIopsRead() {
            return software.amazon.jsii.Kernel.get(this, "attrIopsRead", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IopsWrite: Number of writes per second.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIopsWrite() {
            return software.amazon.jsii.Kernel.get(this, "attrIopsWrite", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute KmsKeyId: The KMS keyId.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrKmsKeyId() {
            return software.amazon.jsii.Kernel.get(this, "attrKmsKeyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MountInstanceNum: Number of instances mounted on shared storage.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMountInstanceNum() {
            return software.amazon.jsii.Kernel.get(this, "attrMountInstanceNum", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MountInstances: Disk mount instances.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMountInstances() {
            return software.amazon.jsii.Kernel.get(this, "attrMountInstances", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MultiAttach: Whether to enable the multi-Mount feature.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMultiAttach() {
            return software.amazon.jsii.Kernel.get(this, "attrMultiAttach", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OperationLocks: Resource locking information.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrOperationLocks() {
            return software.amazon.jsii.Kernel.get(this, "attrOperationLocks", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PaymentType: Payment method for disk.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPaymentType() {
            return software.amazon.jsii.Kernel.get(this, "attrPaymentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PerformanceLevel: Performance levels of ESSD cloud disk.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPerformanceLevel() {
            return software.amazon.jsii.Kernel.get(this, "attrPerformanceLevel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Portable: Whether the disk is unmountable.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPortable() {
            return software.amazon.jsii.Kernel.get(this, "attrPortable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ProductCode: The product logo of the cloud market.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrProductCode() {
            return software.amazon.jsii.Kernel.get(this, "attrProductCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ProvisionedIops: The preconfigured read and write IOPS of the ESSD AutoPL cloud disk.
         * <p>
         * Possible values: 0 ~ min{50,000, 1000 * capacity-baseline performance}.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrProvisionedIops() {
            return software.amazon.jsii.Kernel.get(this, "attrProvisionedIops", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: The resource group id.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Size: Disk size.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSize() {
            return software.amazon.jsii.Kernel.get(this, "attrSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SnapshotId: The source snapshot id.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSnapshotId() {
            return software.amazon.jsii.Kernel.get(this, "attrSnapshotId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute StorageClusterId: The ID of the dedicated block storage cluster.
         * <p>
         * If you need to create a cloud disk in the specified dedicated block storage cluster, specify this parameter.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrStorageClusterId() {
            return software.amazon.jsii.Kernel.get(this, "attrStorageClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute StorageSetId: The ID of the Save set.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrStorageSetId() {
            return software.amazon.jsii.Kernel.get(this, "attrStorageSetId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute StorageSetPartitionNumber: Number of Save set partitions.
         * <p>
         * Value range: greater than or equal to 2. The maximum value cannot exceed the equity quota limit displayed after calling.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrStorageSetPartitionNumber() {
            return software.amazon.jsii.Kernel.get(this, "attrStorageSetPartitionNumber", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: The tags.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ZoneId: ID of the free zone to which the disk belongs.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneId() {
            return software.amazon.jsii.Kernel.get(this, "attrZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.datasource.DiskProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.datasource.DiskProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IDisk}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IDisk, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ResourceEnvironment getEnv() {
            return software.amazon.jsii.Kernel.get(this, "env", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.ResourceEnvironment.class));
        }

        /**
         * The stack in which this resource is defined.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack getStack() {
            return software.amazon.jsii.Kernel.get(this, "stack", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Stack.class));
        }

        /**
         * Attribute AttachedTime: The attached time.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAttachedTime() {
            return software.amazon.jsii.Kernel.get(this, "attrAttachedTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AutoSnapshotPolicyId: Automatic snapshot policy ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAutoSnapshotPolicyId() {
            return software.amazon.jsii.Kernel.get(this, "attrAutoSnapshotPolicyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute BurstingEnabled: Does the data disk turn on Burst (performance Burst).
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrBurstingEnabled() {
            return software.amazon.jsii.Kernel.get(this, "attrBurstingEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Category: Disk type.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCategory() {
            return software.amazon.jsii.Kernel.get(this, "attrCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The creation time.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DeleteAutoSnapshot: Whether to delete automatic snapshots at the same time.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeleteAutoSnapshot() {
            return software.amazon.jsii.Kernel.get(this, "attrDeleteAutoSnapshot", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DeleteWithInstance: Whether to release with the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeleteWithInstance() {
            return software.amazon.jsii.Kernel.get(this, "attrDeleteWithInstance", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: The description.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DetachedTime: Unloading time.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDetachedTime() {
            return software.amazon.jsii.Kernel.get(this, "attrDetachedTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Device: Cloud disk or the device name of the mounted instance on the site.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDevice() {
            return software.amazon.jsii.Kernel.get(this, "attrDevice", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DiskId: The disk id.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDiskId() {
            return software.amazon.jsii.Kernel.get(this, "attrDiskId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DiskName: The disk name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDiskName() {
            return software.amazon.jsii.Kernel.get(this, "attrDiskName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EnableAutomatedSnapshotPolicy: Whether the disk implements an automatic snapshot policy.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnableAutomatedSnapshotPolicy() {
            return software.amazon.jsii.Kernel.get(this, "attrEnableAutomatedSnapshotPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EnableAutoSnapshot: Whether the disk implements an automatic snapshot policy.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnableAutoSnapshot() {
            return software.amazon.jsii.Kernel.get(this, "attrEnableAutoSnapshot", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Encrypted: Whether the disk is encrypted.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEncrypted() {
            return software.amazon.jsii.Kernel.get(this, "attrEncrypted", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ExpiredTime: The expiration time of a monthly disk.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrExpiredTime() {
            return software.amazon.jsii.Kernel.get(this, "attrExpiredTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ImageId: The image id.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageId() {
            return software.amazon.jsii.Kernel.get(this, "attrImageId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceId: The instance id.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Iops: Number of read/write (I/O) operations per second.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIops() {
            return software.amazon.jsii.Kernel.get(this, "attrIops", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IopsRead: Number of reads per second.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIopsRead() {
            return software.amazon.jsii.Kernel.get(this, "attrIopsRead", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IopsWrite: Number of writes per second.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIopsWrite() {
            return software.amazon.jsii.Kernel.get(this, "attrIopsWrite", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute KmsKeyId: The KMS keyId.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrKmsKeyId() {
            return software.amazon.jsii.Kernel.get(this, "attrKmsKeyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MountInstanceNum: Number of instances mounted on shared storage.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMountInstanceNum() {
            return software.amazon.jsii.Kernel.get(this, "attrMountInstanceNum", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MountInstances: Disk mount instances.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMountInstances() {
            return software.amazon.jsii.Kernel.get(this, "attrMountInstances", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MultiAttach: Whether to enable the multi-Mount feature.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMultiAttach() {
            return software.amazon.jsii.Kernel.get(this, "attrMultiAttach", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OperationLocks: Resource locking information.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrOperationLocks() {
            return software.amazon.jsii.Kernel.get(this, "attrOperationLocks", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PaymentType: Payment method for disk.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPaymentType() {
            return software.amazon.jsii.Kernel.get(this, "attrPaymentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PerformanceLevel: Performance levels of ESSD cloud disk.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPerformanceLevel() {
            return software.amazon.jsii.Kernel.get(this, "attrPerformanceLevel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Portable: Whether the disk is unmountable.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPortable() {
            return software.amazon.jsii.Kernel.get(this, "attrPortable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ProductCode: The product logo of the cloud market.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrProductCode() {
            return software.amazon.jsii.Kernel.get(this, "attrProductCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ProvisionedIops: The preconfigured read and write IOPS of the ESSD AutoPL cloud disk.
         * <p>
         * Possible values: 0 ~ min{50,000, 1000 * capacity-baseline performance}.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrProvisionedIops() {
            return software.amazon.jsii.Kernel.get(this, "attrProvisionedIops", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: The resource group id.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Size: Disk size.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSize() {
            return software.amazon.jsii.Kernel.get(this, "attrSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SnapshotId: The source snapshot id.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSnapshotId() {
            return software.amazon.jsii.Kernel.get(this, "attrSnapshotId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute StorageClusterId: The ID of the dedicated block storage cluster.
         * <p>
         * If you need to create a cloud disk in the specified dedicated block storage cluster, specify this parameter.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrStorageClusterId() {
            return software.amazon.jsii.Kernel.get(this, "attrStorageClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute StorageSetId: The ID of the Save set.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrStorageSetId() {
            return software.amazon.jsii.Kernel.get(this, "attrStorageSetId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute StorageSetPartitionNumber: Number of Save set partitions.
         * <p>
         * Value range: greater than or equal to 2. The maximum value cannot exceed the equity quota limit displayed after calling.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrStorageSetPartitionNumber() {
            return software.amazon.jsii.Kernel.get(this, "attrStorageSetPartitionNumber", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: The tags.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ZoneId: ID of the free zone to which the disk belongs.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneId() {
            return software.amazon.jsii.Kernel.get(this, "attrZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.datasource.DiskProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.datasource.DiskProps.class));
        }
    }
}
