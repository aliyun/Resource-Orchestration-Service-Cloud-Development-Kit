package com.aliyun.ros.cdk.ecs.datasource;

/**
 * Represents a <code>Snapshot</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:05.645Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.datasource.ISnapshot")
@software.amazon.jsii.Jsii.Proxy(ISnapshot.Jsii$Proxy.class)
public interface ISnapshot extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute CreateTime: The create time.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute Description: The description.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription();

    /**
     * Attribute DiskId: The source disk id.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDiskId();

    /**
     * Attribute Encrypted: Whether the snapshot is encrypted.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEncrypted();

    /**
     * Attribute InstantAccess: Whether snapshot speed availability is enabled.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstantAccess();

    /**
     * Attribute InstantAccessRetentionDays: InstantAccessRetentionDays.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstantAccessRetentionDays();

    /**
     * Attribute ProductCode: The product number inherited from the mirror market.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrProductCode();

    /**
     * Attribute Progress: Snapshot creation progress, in percentage.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrProgress();

    /**
     * Attribute RemainTime: Remaining completion time for the snapshot being created.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRemainTime();

    /**
     * Attribute ResourceGroupId: The resource group id.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId();

    /**
     * Attribute RetentionDays: Automatic snapshot retention days.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRetentionDays();

    /**
     * Attribute SnapshotId: The snapshot id.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSnapshotId();

    /**
     * Attribute SnapshotName: Snapshot Display Name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSnapshotName();

    /**
     * Attribute SnapshotSN: Snapshot serial number.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSnapshotSn();

    /**
     * Attribute SnapshotType: Snapshot creation type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSnapshotType();

    /**
     * Attribute SourceDiskSize: Source disk capacity.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceDiskSize();

    /**
     * Attribute SourceDiskType: Source disk attributes.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceDiskType();

    /**
     * Attribute SourceStorageType: Original disk type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceStorageType();

    /**
     * Attribute Tags: The tags.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags();

    /**
     * Attribute Usage: A resource type that has a reference relationship.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrUsage();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.datasource.SnapshotProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.ecs.datasource.ISnapshot.Jsii$Default {
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
         * Attribute CreateTime: The create time.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: The description.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DiskId: The source disk id.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDiskId() {
            return software.amazon.jsii.Kernel.get(this, "attrDiskId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Encrypted: Whether the snapshot is encrypted.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEncrypted() {
            return software.amazon.jsii.Kernel.get(this, "attrEncrypted", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstantAccess: Whether snapshot speed availability is enabled.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstantAccess() {
            return software.amazon.jsii.Kernel.get(this, "attrInstantAccess", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstantAccessRetentionDays: InstantAccessRetentionDays.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstantAccessRetentionDays() {
            return software.amazon.jsii.Kernel.get(this, "attrInstantAccessRetentionDays", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ProductCode: The product number inherited from the mirror market.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrProductCode() {
            return software.amazon.jsii.Kernel.get(this, "attrProductCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Progress: Snapshot creation progress, in percentage.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrProgress() {
            return software.amazon.jsii.Kernel.get(this, "attrProgress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RemainTime: Remaining completion time for the snapshot being created.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRemainTime() {
            return software.amazon.jsii.Kernel.get(this, "attrRemainTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: The resource group id.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RetentionDays: Automatic snapshot retention days.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRetentionDays() {
            return software.amazon.jsii.Kernel.get(this, "attrRetentionDays", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SnapshotId: The snapshot id.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSnapshotId() {
            return software.amazon.jsii.Kernel.get(this, "attrSnapshotId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SnapshotName: Snapshot Display Name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSnapshotName() {
            return software.amazon.jsii.Kernel.get(this, "attrSnapshotName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SnapshotSN: Snapshot serial number.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSnapshotSn() {
            return software.amazon.jsii.Kernel.get(this, "attrSnapshotSn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SnapshotType: Snapshot creation type.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSnapshotType() {
            return software.amazon.jsii.Kernel.get(this, "attrSnapshotType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SourceDiskSize: Source disk capacity.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceDiskSize() {
            return software.amazon.jsii.Kernel.get(this, "attrSourceDiskSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SourceDiskType: Source disk attributes.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceDiskType() {
            return software.amazon.jsii.Kernel.get(this, "attrSourceDiskType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SourceStorageType: Original disk type.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceStorageType() {
            return software.amazon.jsii.Kernel.get(this, "attrSourceStorageType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: The tags.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Usage: A resource type that has a reference relationship.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrUsage() {
            return software.amazon.jsii.Kernel.get(this, "attrUsage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.datasource.SnapshotProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.datasource.SnapshotProps.class));
        }
    }

    /**
     * Internal default implementation for {@link ISnapshot}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends ISnapshot, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute CreateTime: The create time.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: The description.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DiskId: The source disk id.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDiskId() {
            return software.amazon.jsii.Kernel.get(this, "attrDiskId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Encrypted: Whether the snapshot is encrypted.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEncrypted() {
            return software.amazon.jsii.Kernel.get(this, "attrEncrypted", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstantAccess: Whether snapshot speed availability is enabled.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstantAccess() {
            return software.amazon.jsii.Kernel.get(this, "attrInstantAccess", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstantAccessRetentionDays: InstantAccessRetentionDays.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstantAccessRetentionDays() {
            return software.amazon.jsii.Kernel.get(this, "attrInstantAccessRetentionDays", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ProductCode: The product number inherited from the mirror market.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrProductCode() {
            return software.amazon.jsii.Kernel.get(this, "attrProductCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Progress: Snapshot creation progress, in percentage.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrProgress() {
            return software.amazon.jsii.Kernel.get(this, "attrProgress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RemainTime: Remaining completion time for the snapshot being created.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRemainTime() {
            return software.amazon.jsii.Kernel.get(this, "attrRemainTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: The resource group id.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RetentionDays: Automatic snapshot retention days.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRetentionDays() {
            return software.amazon.jsii.Kernel.get(this, "attrRetentionDays", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SnapshotId: The snapshot id.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSnapshotId() {
            return software.amazon.jsii.Kernel.get(this, "attrSnapshotId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SnapshotName: Snapshot Display Name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSnapshotName() {
            return software.amazon.jsii.Kernel.get(this, "attrSnapshotName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SnapshotSN: Snapshot serial number.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSnapshotSn() {
            return software.amazon.jsii.Kernel.get(this, "attrSnapshotSn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SnapshotType: Snapshot creation type.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSnapshotType() {
            return software.amazon.jsii.Kernel.get(this, "attrSnapshotType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SourceDiskSize: Source disk capacity.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceDiskSize() {
            return software.amazon.jsii.Kernel.get(this, "attrSourceDiskSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SourceDiskType: Source disk attributes.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceDiskType() {
            return software.amazon.jsii.Kernel.get(this, "attrSourceDiskType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SourceStorageType: Original disk type.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceStorageType() {
            return software.amazon.jsii.Kernel.get(this, "attrSourceStorageType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: The tags.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Usage: A resource type that has a reference relationship.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrUsage() {
            return software.amazon.jsii.Kernel.get(this, "attrUsage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.datasource.SnapshotProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.datasource.SnapshotProps.class));
        }
    }
}
