package com.aliyun.ros.cdk.ecs.datasource;

/**
 * Represents a <code>AutoSnapshotPolicy</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:15.767Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.datasource.IAutoSnapshotPolicy")
@software.amazon.jsii.Jsii.Proxy(IAutoSnapshotPolicy.Jsii$Proxy.class)
public interface IAutoSnapshotPolicy extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute AutoSnapshotPolicyName: Name of the automatic snapshot policy.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAutoSnapshotPolicyName();

    /**
     * Attribute CreateTime: The time when the automatic snapshot policy was created.
     * <p>
     * The time follows the ISO 8601 standard in the yyyy-MM-ddThh:mm:ssZ format. The time is displayed in UTC.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute DiskNums: Number of cloud disks with this policy enabled.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDiskNums();

    /**
     * Attribute RepeatWeekdays: The days of the week on which to create automatic snapshots.
     * <p>
     * Valid values: 1 to 7, which correspond to the days of the week. 1 indicates Monday. One or more days can be specified.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRepeatWeekdays();

    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId();

    /**
     * Attribute RetentionDays: The retention period of the automatic snapshot.
     * <p>
     * Unit: days. Valid values:
     * <p>
     * <ul>
     * <li>-1: The automatic snapshot is retained until it is deleted.</li>
     * <li>1 to 65536: The automatic snapshot is retained for the specified number of days.</li>
     * </ul>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRetentionDays();

    /**
     * Attribute Tags: The tags of the automatic snapshot policy.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags();

    /**
     * Attribute TimePoints: The time when the automatic snapshot policy was created.
     * <p>
     * The time follows the ISO 8601 standard in the yyyy-MM-ddThh:mm:ssZ format. The time is displayed in UTC.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTimePoints();

    /**
     * Attribute VolumeNums: The number of extended volumes to which the automatic snapshot policy is applied.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVolumeNums();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.datasource.AutoSnapshotPolicyProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.ecs.datasource.IAutoSnapshotPolicy.Jsii$Default {
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
         * Attribute AutoSnapshotPolicyName: Name of the automatic snapshot policy.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAutoSnapshotPolicyName() {
            return software.amazon.jsii.Kernel.get(this, "attrAutoSnapshotPolicyName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The time when the automatic snapshot policy was created.
         * <p>
         * The time follows the ISO 8601 standard in the yyyy-MM-ddThh:mm:ssZ format. The time is displayed in UTC.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DiskNums: Number of cloud disks with this policy enabled.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDiskNums() {
            return software.amazon.jsii.Kernel.get(this, "attrDiskNums", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RepeatWeekdays: The days of the week on which to create automatic snapshots.
         * <p>
         * Valid values: 1 to 7, which correspond to the days of the week. 1 indicates Monday. One or more days can be specified.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRepeatWeekdays() {
            return software.amazon.jsii.Kernel.get(this, "attrRepeatWeekdays", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: The ID of the resource group.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RetentionDays: The retention period of the automatic snapshot.
         * <p>
         * Unit: days. Valid values:
         * <p>
         * <ul>
         * <li>-1: The automatic snapshot is retained until it is deleted.</li>
         * <li>1 to 65536: The automatic snapshot is retained for the specified number of days.</li>
         * </ul>
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRetentionDays() {
            return software.amazon.jsii.Kernel.get(this, "attrRetentionDays", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: The tags of the automatic snapshot policy.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TimePoints: The time when the automatic snapshot policy was created.
         * <p>
         * The time follows the ISO 8601 standard in the yyyy-MM-ddThh:mm:ssZ format. The time is displayed in UTC.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTimePoints() {
            return software.amazon.jsii.Kernel.get(this, "attrTimePoints", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VolumeNums: The number of extended volumes to which the automatic snapshot policy is applied.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVolumeNums() {
            return software.amazon.jsii.Kernel.get(this, "attrVolumeNums", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.datasource.AutoSnapshotPolicyProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.datasource.AutoSnapshotPolicyProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IAutoSnapshotPolicy}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IAutoSnapshotPolicy, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute AutoSnapshotPolicyName: Name of the automatic snapshot policy.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAutoSnapshotPolicyName() {
            return software.amazon.jsii.Kernel.get(this, "attrAutoSnapshotPolicyName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The time when the automatic snapshot policy was created.
         * <p>
         * The time follows the ISO 8601 standard in the yyyy-MM-ddThh:mm:ssZ format. The time is displayed in UTC.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DiskNums: Number of cloud disks with this policy enabled.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDiskNums() {
            return software.amazon.jsii.Kernel.get(this, "attrDiskNums", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RepeatWeekdays: The days of the week on which to create automatic snapshots.
         * <p>
         * Valid values: 1 to 7, which correspond to the days of the week. 1 indicates Monday. One or more days can be specified.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRepeatWeekdays() {
            return software.amazon.jsii.Kernel.get(this, "attrRepeatWeekdays", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: The ID of the resource group.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RetentionDays: The retention period of the automatic snapshot.
         * <p>
         * Unit: days. Valid values:
         * <p>
         * <ul>
         * <li>-1: The automatic snapshot is retained until it is deleted.</li>
         * <li>1 to 65536: The automatic snapshot is retained for the specified number of days.</li>
         * </ul>
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRetentionDays() {
            return software.amazon.jsii.Kernel.get(this, "attrRetentionDays", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: The tags of the automatic snapshot policy.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TimePoints: The time when the automatic snapshot policy was created.
         * <p>
         * The time follows the ISO 8601 standard in the yyyy-MM-ddThh:mm:ssZ format. The time is displayed in UTC.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTimePoints() {
            return software.amazon.jsii.Kernel.get(this, "attrTimePoints", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VolumeNums: The number of extended volumes to which the automatic snapshot policy is applied.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVolumeNums() {
            return software.amazon.jsii.Kernel.get(this, "attrVolumeNums", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.datasource.AutoSnapshotPolicyProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.datasource.AutoSnapshotPolicyProps.class));
        }
    }
}
