package com.aliyun.ros.cdk.ebs;

/**
 * Represents a <code>DiskReplicaGroup</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-01-23T09:30:37.536Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ebs.$Module.class, fqn = "@alicloud/ros-cdk-ebs.IDiskReplicaGroup")
@software.amazon.jsii.Jsii.Proxy(IDiskReplicaGroup.Jsii$Proxy.class)
public interface IDiskReplicaGroup extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute Description: The description of the consistent replication group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription();

    /**
     * Attribute DestinationRegionId: The ID of the region to which the disaster recovery site belongs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDestinationRegionId();

    /**
     * Attribute DestinationZoneId: The ID of the zone to which the disaster recovery site belongs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDestinationZoneId();

    /**
     * Attribute DiskReplicaGroupName: Consistent replication group name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDiskReplicaGroupName();

    /**
     * Attribute LastRecoverPoint: The time when the last asynchronous replication operation of the consistent replication group completed.
     * <p>
     * This parameter provides the return value as a timestamp. Unit: seconds.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrLastRecoverPoint();

    /**
     * Attribute PairIds: List of replication pair IDs contained in a consistent replication group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPairIds();

    /**
     * Attribute PairNumber: The number of replication pairs contained in a consistent replication group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPairNumber();

    /**
     * Attribute PrimaryRegion: The initial source region of the replication group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrimaryRegion();

    /**
     * Attribute PrimaryZone: The initial source available area of the replication group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrimaryZone();

    /**
     * Attribute ReplicaGroupId: The ID of the consistent replication group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrReplicaGroupId();

    /**
     * Attribute ResourceGroupId: resource group ID of enterprise.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId();

    /**
     * Attribute RPO: The RPO value set by the consistency group in seconds.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRpo();

    /**
     * Attribute Site: Site information sources for replication pairs and consistent replication groups.
     * <p>
     * Possible values:
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSite();

    /**
     * Attribute SourceRegionId: The ID of the region to which the production site belongs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceRegionId();

    /**
     * Attribute SourceZoneId: The ID of the zone to which the production site belongs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceZoneId();

    /**
     * Attribute StandbyRegion: The initial destination region of the replication group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrStandbyRegion();

    /**
     * Attribute StandbyZone: The initial destination zone of the replication group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrStandbyZone();

    /**
     * Attribute Tags: The tags of the disk replica group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ebs.DiskReplicaGroupProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.ebs.IDiskReplicaGroup.Jsii$Default {
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
         * Attribute Description: The description of the consistent replication group.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DestinationRegionId: The ID of the region to which the disaster recovery site belongs.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDestinationRegionId() {
            return software.amazon.jsii.Kernel.get(this, "attrDestinationRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DestinationZoneId: The ID of the zone to which the disaster recovery site belongs.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDestinationZoneId() {
            return software.amazon.jsii.Kernel.get(this, "attrDestinationZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DiskReplicaGroupName: Consistent replication group name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDiskReplicaGroupName() {
            return software.amazon.jsii.Kernel.get(this, "attrDiskReplicaGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LastRecoverPoint: The time when the last asynchronous replication operation of the consistent replication group completed.
         * <p>
         * This parameter provides the return value as a timestamp. Unit: seconds.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrLastRecoverPoint() {
            return software.amazon.jsii.Kernel.get(this, "attrLastRecoverPoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PairIds: List of replication pair IDs contained in a consistent replication group.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPairIds() {
            return software.amazon.jsii.Kernel.get(this, "attrPairIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PairNumber: The number of replication pairs contained in a consistent replication group.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPairNumber() {
            return software.amazon.jsii.Kernel.get(this, "attrPairNumber", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PrimaryRegion: The initial source region of the replication group.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrimaryRegion() {
            return software.amazon.jsii.Kernel.get(this, "attrPrimaryRegion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PrimaryZone: The initial source available area of the replication group.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrimaryZone() {
            return software.amazon.jsii.Kernel.get(this, "attrPrimaryZone", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ReplicaGroupId: The ID of the consistent replication group.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrReplicaGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrReplicaGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: resource group ID of enterprise.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RPO: The RPO value set by the consistency group in seconds.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRpo() {
            return software.amazon.jsii.Kernel.get(this, "attrRpo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Site: Site information sources for replication pairs and consistent replication groups.
         * <p>
         * Possible values:
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSite() {
            return software.amazon.jsii.Kernel.get(this, "attrSite", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SourceRegionId: The ID of the region to which the production site belongs.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceRegionId() {
            return software.amazon.jsii.Kernel.get(this, "attrSourceRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SourceZoneId: The ID of the zone to which the production site belongs.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceZoneId() {
            return software.amazon.jsii.Kernel.get(this, "attrSourceZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute StandbyRegion: The initial destination region of the replication group.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrStandbyRegion() {
            return software.amazon.jsii.Kernel.get(this, "attrStandbyRegion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute StandbyZone: The initial destination zone of the replication group.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrStandbyZone() {
            return software.amazon.jsii.Kernel.get(this, "attrStandbyZone", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: The tags of the disk replica group.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ebs.DiskReplicaGroupProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ebs.DiskReplicaGroupProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IDiskReplicaGroup}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IDiskReplicaGroup, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute Description: The description of the consistent replication group.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DestinationRegionId: The ID of the region to which the disaster recovery site belongs.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDestinationRegionId() {
            return software.amazon.jsii.Kernel.get(this, "attrDestinationRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DestinationZoneId: The ID of the zone to which the disaster recovery site belongs.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDestinationZoneId() {
            return software.amazon.jsii.Kernel.get(this, "attrDestinationZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DiskReplicaGroupName: Consistent replication group name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDiskReplicaGroupName() {
            return software.amazon.jsii.Kernel.get(this, "attrDiskReplicaGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LastRecoverPoint: The time when the last asynchronous replication operation of the consistent replication group completed.
         * <p>
         * This parameter provides the return value as a timestamp. Unit: seconds.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrLastRecoverPoint() {
            return software.amazon.jsii.Kernel.get(this, "attrLastRecoverPoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PairIds: List of replication pair IDs contained in a consistent replication group.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPairIds() {
            return software.amazon.jsii.Kernel.get(this, "attrPairIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PairNumber: The number of replication pairs contained in a consistent replication group.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPairNumber() {
            return software.amazon.jsii.Kernel.get(this, "attrPairNumber", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PrimaryRegion: The initial source region of the replication group.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrimaryRegion() {
            return software.amazon.jsii.Kernel.get(this, "attrPrimaryRegion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PrimaryZone: The initial source available area of the replication group.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrimaryZone() {
            return software.amazon.jsii.Kernel.get(this, "attrPrimaryZone", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ReplicaGroupId: The ID of the consistent replication group.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrReplicaGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrReplicaGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: resource group ID of enterprise.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RPO: The RPO value set by the consistency group in seconds.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRpo() {
            return software.amazon.jsii.Kernel.get(this, "attrRpo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Site: Site information sources for replication pairs and consistent replication groups.
         * <p>
         * Possible values:
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSite() {
            return software.amazon.jsii.Kernel.get(this, "attrSite", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SourceRegionId: The ID of the region to which the production site belongs.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceRegionId() {
            return software.amazon.jsii.Kernel.get(this, "attrSourceRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SourceZoneId: The ID of the zone to which the production site belongs.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceZoneId() {
            return software.amazon.jsii.Kernel.get(this, "attrSourceZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute StandbyRegion: The initial destination region of the replication group.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrStandbyRegion() {
            return software.amazon.jsii.Kernel.get(this, "attrStandbyRegion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute StandbyZone: The initial destination zone of the replication group.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrStandbyZone() {
            return software.amazon.jsii.Kernel.get(this, "attrStandbyZone", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: The tags of the disk replica group.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ebs.DiskReplicaGroupProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ebs.DiskReplicaGroupProps.class));
        }
    }
}
