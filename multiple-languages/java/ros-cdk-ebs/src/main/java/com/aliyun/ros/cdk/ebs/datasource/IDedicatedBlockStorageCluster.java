package com.aliyun.ros.cdk.ebs.datasource;

/**
 * Represents a <code>DedicatedBlockStorageCluster</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:45.946Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ebs.$Module.class, fqn = "@alicloud/ros-cdk-ebs.datasource.IDedicatedBlockStorageCluster")
@software.amazon.jsii.Jsii.Proxy(IDedicatedBlockStorageCluster.Jsii$Proxy.class)
public interface IDedicatedBlockStorageCluster extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute AvailableCapacity: The available capacity of the dedicated block storage cluster.
     * <p>
     * Unit: GiB.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAvailableCapacity();

    /**
     * Attribute Category: The category of disks that can be created in the dedicated block storage cluster.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCategory();

    /**
     * Attribute CreateTime: The time when the dedicated block storage cluster was created.
     * <p>
     * The value is a UNIX timestamp. Unit: seconds.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute DedicatedBlockStorageClusterId: The ID of the dedicated block storage cluster.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDedicatedBlockStorageClusterId();

    /**
     * Attribute DedicatedBlockStorageClusterName: The name of the dedicated block storage cluster.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDedicatedBlockStorageClusterName();

    /**
     * Attribute DeliveryCapacity: The capacity to be delivered for the dedicated block storage cluster.
     * <p>
     * Unit: GiB.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeliveryCapacity();

    /**
     * Attribute Description: The description of the dedicated block storage cluster.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription();

    /**
     * Attribute ExpiredTime: The expiration time of the dedicated block storage cluster, in the Unix timestamp format, in seconds.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrExpiredTime();

    /**
     * Attribute PerformanceLevel: The performance level of disks.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPerformanceLevel();

    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId();

    /**
     * Attribute SupportedCategory: This parameter is not supported.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSupportedCategory();

    /**
     * Attribute Tags: The tags of the dedicated block storage cluster.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags();

    /**
     * Attribute TotalCapacity: The total capacity of the dedicated block storage cluster.
     * <p>
     * Unit: GiB.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTotalCapacity();

    /**
     * Attribute Type: The dedicated block storage cluster performance type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrType();

    /**
     * Attribute UsedCapacity: The used (created disk) capacity of the current cluster, in GB.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrUsedCapacity();

    /**
     * Attribute ZoneId: The zone ID of the dedicated block storage cluster.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneId();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ebs.datasource.DedicatedBlockStorageClusterProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.ebs.datasource.IDedicatedBlockStorageCluster.Jsii$Default {
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
         * Attribute AvailableCapacity: The available capacity of the dedicated block storage cluster.
         * <p>
         * Unit: GiB.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAvailableCapacity() {
            return software.amazon.jsii.Kernel.get(this, "attrAvailableCapacity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Category: The category of disks that can be created in the dedicated block storage cluster.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCategory() {
            return software.amazon.jsii.Kernel.get(this, "attrCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The time when the dedicated block storage cluster was created.
         * <p>
         * The value is a UNIX timestamp. Unit: seconds.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DedicatedBlockStorageClusterId: The ID of the dedicated block storage cluster.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDedicatedBlockStorageClusterId() {
            return software.amazon.jsii.Kernel.get(this, "attrDedicatedBlockStorageClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DedicatedBlockStorageClusterName: The name of the dedicated block storage cluster.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDedicatedBlockStorageClusterName() {
            return software.amazon.jsii.Kernel.get(this, "attrDedicatedBlockStorageClusterName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DeliveryCapacity: The capacity to be delivered for the dedicated block storage cluster.
         * <p>
         * Unit: GiB.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeliveryCapacity() {
            return software.amazon.jsii.Kernel.get(this, "attrDeliveryCapacity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: The description of the dedicated block storage cluster.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ExpiredTime: The expiration time of the dedicated block storage cluster, in the Unix timestamp format, in seconds.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrExpiredTime() {
            return software.amazon.jsii.Kernel.get(this, "attrExpiredTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PerformanceLevel: The performance level of disks.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPerformanceLevel() {
            return software.amazon.jsii.Kernel.get(this, "attrPerformanceLevel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: The ID of the resource group.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SupportedCategory: This parameter is not supported.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSupportedCategory() {
            return software.amazon.jsii.Kernel.get(this, "attrSupportedCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: The tags of the dedicated block storage cluster.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TotalCapacity: The total capacity of the dedicated block storage cluster.
         * <p>
         * Unit: GiB.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTotalCapacity() {
            return software.amazon.jsii.Kernel.get(this, "attrTotalCapacity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Type: The dedicated block storage cluster performance type.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrType() {
            return software.amazon.jsii.Kernel.get(this, "attrType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UsedCapacity: The used (created disk) capacity of the current cluster, in GB.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrUsedCapacity() {
            return software.amazon.jsii.Kernel.get(this, "attrUsedCapacity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ZoneId: The zone ID of the dedicated block storage cluster.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneId() {
            return software.amazon.jsii.Kernel.get(this, "attrZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ebs.datasource.DedicatedBlockStorageClusterProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ebs.datasource.DedicatedBlockStorageClusterProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IDedicatedBlockStorageCluster}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IDedicatedBlockStorageCluster, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute AvailableCapacity: The available capacity of the dedicated block storage cluster.
         * <p>
         * Unit: GiB.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAvailableCapacity() {
            return software.amazon.jsii.Kernel.get(this, "attrAvailableCapacity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Category: The category of disks that can be created in the dedicated block storage cluster.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCategory() {
            return software.amazon.jsii.Kernel.get(this, "attrCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The time when the dedicated block storage cluster was created.
         * <p>
         * The value is a UNIX timestamp. Unit: seconds.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DedicatedBlockStorageClusterId: The ID of the dedicated block storage cluster.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDedicatedBlockStorageClusterId() {
            return software.amazon.jsii.Kernel.get(this, "attrDedicatedBlockStorageClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DedicatedBlockStorageClusterName: The name of the dedicated block storage cluster.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDedicatedBlockStorageClusterName() {
            return software.amazon.jsii.Kernel.get(this, "attrDedicatedBlockStorageClusterName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DeliveryCapacity: The capacity to be delivered for the dedicated block storage cluster.
         * <p>
         * Unit: GiB.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeliveryCapacity() {
            return software.amazon.jsii.Kernel.get(this, "attrDeliveryCapacity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: The description of the dedicated block storage cluster.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ExpiredTime: The expiration time of the dedicated block storage cluster, in the Unix timestamp format, in seconds.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrExpiredTime() {
            return software.amazon.jsii.Kernel.get(this, "attrExpiredTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PerformanceLevel: The performance level of disks.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPerformanceLevel() {
            return software.amazon.jsii.Kernel.get(this, "attrPerformanceLevel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: The ID of the resource group.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SupportedCategory: This parameter is not supported.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSupportedCategory() {
            return software.amazon.jsii.Kernel.get(this, "attrSupportedCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: The tags of the dedicated block storage cluster.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TotalCapacity: The total capacity of the dedicated block storage cluster.
         * <p>
         * Unit: GiB.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTotalCapacity() {
            return software.amazon.jsii.Kernel.get(this, "attrTotalCapacity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Type: The dedicated block storage cluster performance type.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrType() {
            return software.amazon.jsii.Kernel.get(this, "attrType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UsedCapacity: The used (created disk) capacity of the current cluster, in GB.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrUsedCapacity() {
            return software.amazon.jsii.Kernel.get(this, "attrUsedCapacity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ZoneId: The zone ID of the dedicated block storage cluster.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneId() {
            return software.amazon.jsii.Kernel.get(this, "attrZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ebs.datasource.DedicatedBlockStorageClusterProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ebs.datasource.DedicatedBlockStorageClusterProps.class));
        }
    }
}
