package com.aliyun.ros.cdk.ebs;

/**
 * Represents a <code>DiskReplicaPair</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:45.913Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ebs.$Module.class, fqn = "@alicloud/ros-cdk-ebs.IDiskReplicaPair")
@software.amazon.jsii.Jsii.Proxy(IDiskReplicaPair.Jsii$Proxy.class)
public interface IDiskReplicaPair extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute Bandwidth: The bandwidth for asynchronous data replication between cloud disks.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrBandwidth();

    /**
     * Attribute CreateTime: The creation time of the resource.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute Description: The description of the asynchronous replication relationship.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription();

    /**
     * Attribute DestinationDiskId: The ID of the standby disk.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDestinationDiskId();

    /**
     * Attribute DestinationRegionId: The ID of the region to which the disaster recovery site belongs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDestinationRegionId();

    /**
     * Attribute DestinationZoneId: The ID of the zone to which the disaster recovery site belongs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDestinationZoneId();

    /**
     * Attribute DiskId: The ID of the primary disk.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDiskId();

    /**
     * Attribute DiskReplicaPairName: The name of the asynchronous replication relationship.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDiskReplicaPairName();

    /**
     * Attribute PaymentType: The payment type of the resource.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPaymentType();

    /**
     * Attribute ReplicaPairId: The ID of the disk replica pair.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrReplicaPairId();

    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId();

    /**
     * Attribute RPO: The RPO value set by the consistency group in seconds.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRpo();

    /**
     * Attribute SourceZoneId: The ID of the zone to which the production site belongs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceZoneId();

    /**
     * Attribute Tags: The tags of the disk replica pair.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ebs.DiskReplicaPairProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.ebs.IDiskReplicaPair.Jsii$Default {
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
         * Attribute Bandwidth: The bandwidth for asynchronous data replication between cloud disks.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrBandwidth() {
            return software.amazon.jsii.Kernel.get(this, "attrBandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The creation time of the resource.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: The description of the asynchronous replication relationship.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DestinationDiskId: The ID of the standby disk.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDestinationDiskId() {
            return software.amazon.jsii.Kernel.get(this, "attrDestinationDiskId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
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
         * Attribute DiskId: The ID of the primary disk.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDiskId() {
            return software.amazon.jsii.Kernel.get(this, "attrDiskId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DiskReplicaPairName: The name of the asynchronous replication relationship.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDiskReplicaPairName() {
            return software.amazon.jsii.Kernel.get(this, "attrDiskReplicaPairName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PaymentType: The payment type of the resource.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPaymentType() {
            return software.amazon.jsii.Kernel.get(this, "attrPaymentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ReplicaPairId: The ID of the disk replica pair.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrReplicaPairId() {
            return software.amazon.jsii.Kernel.get(this, "attrReplicaPairId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: The ID of the resource group.
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
         * Attribute SourceZoneId: The ID of the zone to which the production site belongs.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceZoneId() {
            return software.amazon.jsii.Kernel.get(this, "attrSourceZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: The tags of the disk replica pair.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ebs.DiskReplicaPairProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ebs.DiskReplicaPairProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IDiskReplicaPair}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IDiskReplicaPair, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute Bandwidth: The bandwidth for asynchronous data replication between cloud disks.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrBandwidth() {
            return software.amazon.jsii.Kernel.get(this, "attrBandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The creation time of the resource.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: The description of the asynchronous replication relationship.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DestinationDiskId: The ID of the standby disk.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDestinationDiskId() {
            return software.amazon.jsii.Kernel.get(this, "attrDestinationDiskId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
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
         * Attribute DiskId: The ID of the primary disk.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDiskId() {
            return software.amazon.jsii.Kernel.get(this, "attrDiskId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DiskReplicaPairName: The name of the asynchronous replication relationship.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDiskReplicaPairName() {
            return software.amazon.jsii.Kernel.get(this, "attrDiskReplicaPairName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PaymentType: The payment type of the resource.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPaymentType() {
            return software.amazon.jsii.Kernel.get(this, "attrPaymentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ReplicaPairId: The ID of the disk replica pair.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrReplicaPairId() {
            return software.amazon.jsii.Kernel.get(this, "attrReplicaPairId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: The ID of the resource group.
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
         * Attribute SourceZoneId: The ID of the zone to which the production site belongs.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceZoneId() {
            return software.amazon.jsii.Kernel.get(this, "attrSourceZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: The tags of the disk replica pair.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ebs.DiskReplicaPairProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ebs.DiskReplicaPairProps.class));
        }
    }
}
