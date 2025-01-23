package com.aliyun.ros.cdk.cddc;

/**
 * Represents a <code>DedicatedHost</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-01-23T09:30:35.268Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cddc.$Module.class, fqn = "@alicloud/ros-cdk-cddc.IDedicatedHost")
@software.amazon.jsii.Jsii.Proxy(IDedicatedHost.Jsii$Proxy.class)
public interface IDedicatedHost extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute AutoRenew: Whether Auto Renew.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAutoRenew();

    /**
     * Attribute CpuAllocationRatio: CPU Allocation Ratio.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCpuAllocationRatio();

    /**
     * Attribute CpuUsed: CPU Used.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCpuUsed();

    /**
     * Attribute DedicatedHostGroupId: Dedicated Host Group ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDedicatedHostGroupId();

    /**
     * Attribute DedicatedHostId: The first ID of the resource.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDedicatedHostId();

    /**
     * Attribute DiskAllocationRatio: Disk Allocation Ratio.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDiskAllocationRatio();

    /**
     * Attribute EcsClassCode: ECS Class Code.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEcsClassCode();

    /**
     * Attribute HostClass: Host Class.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHostClass();

    /**
     * Attribute HostCpu: Host CPU.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHostCpu();

    /**
     * Attribute HostMem: Host Memory.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHostMem();

    /**
     * Attribute HostName: Host Name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHostName();

    /**
     * Attribute HostStorage: Host Storage.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHostStorage();

    /**
     * Attribute HostType: Host Storage Type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHostType();

    /**
     * Attribute ImageCategory: Host Image Category.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageCategory();

    /**
     * Attribute IpAddress: Host IP Address.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpAddress();

    /**
     * Attribute MemAllocationRatio: Memory Allocation Ratio.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMemAllocationRatio();

    /**
     * Attribute MemoryUsed: Host Memory Used.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMemoryUsed();

    /**
     * Attribute OpenPermission: Whether Open OS Permission.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrOpenPermission();

    /**
     * Attribute PaymentType: Payment Type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPaymentType();

    /**
     * Attribute StorageUsed: Storage Used.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrStorageUsed();

    /**
     * Attribute VpcId: VPC ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId();

    /**
     * Attribute VSwitchId: VSwitch ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVSwitchId();

    /**
     * Attribute ZoneId: Zone ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneId();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cddc.DedicatedHostProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.cddc.IDedicatedHost.Jsii$Default {
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
         * Attribute AutoRenew: Whether Auto Renew.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAutoRenew() {
            return software.amazon.jsii.Kernel.get(this, "attrAutoRenew", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CpuAllocationRatio: CPU Allocation Ratio.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCpuAllocationRatio() {
            return software.amazon.jsii.Kernel.get(this, "attrCpuAllocationRatio", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CpuUsed: CPU Used.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCpuUsed() {
            return software.amazon.jsii.Kernel.get(this, "attrCpuUsed", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DedicatedHostGroupId: Dedicated Host Group ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDedicatedHostGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrDedicatedHostGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DedicatedHostId: The first ID of the resource.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDedicatedHostId() {
            return software.amazon.jsii.Kernel.get(this, "attrDedicatedHostId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DiskAllocationRatio: Disk Allocation Ratio.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDiskAllocationRatio() {
            return software.amazon.jsii.Kernel.get(this, "attrDiskAllocationRatio", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EcsClassCode: ECS Class Code.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEcsClassCode() {
            return software.amazon.jsii.Kernel.get(this, "attrEcsClassCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HostClass: Host Class.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHostClass() {
            return software.amazon.jsii.Kernel.get(this, "attrHostClass", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HostCpu: Host CPU.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHostCpu() {
            return software.amazon.jsii.Kernel.get(this, "attrHostCpu", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HostMem: Host Memory.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHostMem() {
            return software.amazon.jsii.Kernel.get(this, "attrHostMem", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HostName: Host Name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHostName() {
            return software.amazon.jsii.Kernel.get(this, "attrHostName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HostStorage: Host Storage.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHostStorage() {
            return software.amazon.jsii.Kernel.get(this, "attrHostStorage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HostType: Host Storage Type.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHostType() {
            return software.amazon.jsii.Kernel.get(this, "attrHostType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ImageCategory: Host Image Category.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageCategory() {
            return software.amazon.jsii.Kernel.get(this, "attrImageCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IpAddress: Host IP Address.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpAddress() {
            return software.amazon.jsii.Kernel.get(this, "attrIpAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MemAllocationRatio: Memory Allocation Ratio.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMemAllocationRatio() {
            return software.amazon.jsii.Kernel.get(this, "attrMemAllocationRatio", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MemoryUsed: Host Memory Used.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMemoryUsed() {
            return software.amazon.jsii.Kernel.get(this, "attrMemoryUsed", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OpenPermission: Whether Open OS Permission.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrOpenPermission() {
            return software.amazon.jsii.Kernel.get(this, "attrOpenPermission", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PaymentType: Payment Type.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPaymentType() {
            return software.amazon.jsii.Kernel.get(this, "attrPaymentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute StorageUsed: Storage Used.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrStorageUsed() {
            return software.amazon.jsii.Kernel.get(this, "attrStorageUsed", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpcId: VPC ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VSwitchId: VSwitch ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVSwitchId() {
            return software.amazon.jsii.Kernel.get(this, "attrVSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ZoneId: Zone ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneId() {
            return software.amazon.jsii.Kernel.get(this, "attrZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cddc.DedicatedHostProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cddc.DedicatedHostProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IDedicatedHost}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IDedicatedHost, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute AutoRenew: Whether Auto Renew.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAutoRenew() {
            return software.amazon.jsii.Kernel.get(this, "attrAutoRenew", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CpuAllocationRatio: CPU Allocation Ratio.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCpuAllocationRatio() {
            return software.amazon.jsii.Kernel.get(this, "attrCpuAllocationRatio", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CpuUsed: CPU Used.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCpuUsed() {
            return software.amazon.jsii.Kernel.get(this, "attrCpuUsed", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DedicatedHostGroupId: Dedicated Host Group ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDedicatedHostGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrDedicatedHostGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DedicatedHostId: The first ID of the resource.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDedicatedHostId() {
            return software.amazon.jsii.Kernel.get(this, "attrDedicatedHostId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DiskAllocationRatio: Disk Allocation Ratio.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDiskAllocationRatio() {
            return software.amazon.jsii.Kernel.get(this, "attrDiskAllocationRatio", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EcsClassCode: ECS Class Code.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEcsClassCode() {
            return software.amazon.jsii.Kernel.get(this, "attrEcsClassCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HostClass: Host Class.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHostClass() {
            return software.amazon.jsii.Kernel.get(this, "attrHostClass", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HostCpu: Host CPU.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHostCpu() {
            return software.amazon.jsii.Kernel.get(this, "attrHostCpu", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HostMem: Host Memory.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHostMem() {
            return software.amazon.jsii.Kernel.get(this, "attrHostMem", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HostName: Host Name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHostName() {
            return software.amazon.jsii.Kernel.get(this, "attrHostName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HostStorage: Host Storage.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHostStorage() {
            return software.amazon.jsii.Kernel.get(this, "attrHostStorage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HostType: Host Storage Type.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHostType() {
            return software.amazon.jsii.Kernel.get(this, "attrHostType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ImageCategory: Host Image Category.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageCategory() {
            return software.amazon.jsii.Kernel.get(this, "attrImageCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IpAddress: Host IP Address.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpAddress() {
            return software.amazon.jsii.Kernel.get(this, "attrIpAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MemAllocationRatio: Memory Allocation Ratio.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMemAllocationRatio() {
            return software.amazon.jsii.Kernel.get(this, "attrMemAllocationRatio", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MemoryUsed: Host Memory Used.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMemoryUsed() {
            return software.amazon.jsii.Kernel.get(this, "attrMemoryUsed", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OpenPermission: Whether Open OS Permission.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrOpenPermission() {
            return software.amazon.jsii.Kernel.get(this, "attrOpenPermission", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PaymentType: Payment Type.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPaymentType() {
            return software.amazon.jsii.Kernel.get(this, "attrPaymentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute StorageUsed: Storage Used.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrStorageUsed() {
            return software.amazon.jsii.Kernel.get(this, "attrStorageUsed", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpcId: VPC ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VSwitchId: VSwitch ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVSwitchId() {
            return software.amazon.jsii.Kernel.get(this, "attrVSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ZoneId: Zone ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneId() {
            return software.amazon.jsii.Kernel.get(this, "attrZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cddc.DedicatedHostProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cddc.DedicatedHostProps.class));
        }
    }
}
