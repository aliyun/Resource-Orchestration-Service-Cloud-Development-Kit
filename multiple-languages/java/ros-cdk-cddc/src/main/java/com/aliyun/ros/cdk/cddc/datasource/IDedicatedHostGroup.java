package com.aliyun.ros.cdk.cddc.datasource;

/**
 * Represents a <code>DedicatedHostGroup</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:12.442Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cddc.$Module.class, fqn = "@alicloud/ros-cdk-cddc.datasource.IDedicatedHostGroup")
@software.amazon.jsii.Jsii.Proxy(IDedicatedHostGroup.Jsii$Proxy.class)
public interface IDedicatedHostGroup extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute AllocationPolicy: Allocation Policy.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAllocationPolicy();

    /**
     * Attribute BastionInstanceId: BastionInstanceId.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrBastionInstanceId();

    /**
     * Attribute Category: The dedicated cluster family to which the host belongs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCategory();

    /**
     * Attribute CpuAllocatedAmount: CpuAllocatedAmount.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCpuAllocatedAmount();

    /**
     * Attribute CpuAllocateRation: CpuAllocateRation.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCpuAllocateRation();

    /**
     * Attribute CpuAllocationRatio: Cpu Allocation Ratio.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCpuAllocationRatio();

    /**
     * Attribute CreateTime: Create Time.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute DedicatedHostCountGroupByHostType: DedicatedHostCountGroupByHostType.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDedicatedHostCountGroupByHostType();

    /**
     * Attribute DedicatedHostGroupDesc: Dedicated Host Group Description.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDedicatedHostGroupDesc();

    /**
     * Attribute DedicatedHostGroupId: Dedicated Host Group ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDedicatedHostGroupId();

    /**
     * Attribute DeployType: DeployType.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeployType();

    /**
     * Attribute DiskAllocatedAmount: DiskAllocatedAmount.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDiskAllocatedAmount();

    /**
     * Attribute DiskAllocateRation: DiskAllocateRation.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDiskAllocateRation();

    /**
     * Attribute DiskAllocationRatio: Disk Allocation Ratio.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDiskAllocationRatio();

    /**
     * Attribute DiskUsedAmount: DiskUsedAmount.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDiskUsedAmount();

    /**
     * Attribute DiskUtility: DiskUtility.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDiskUtility();

    /**
     * Attribute Engine: Database Engine Type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEngine();

    /**
     * Attribute HostNumber: Total Host Number.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHostNumber();

    /**
     * Attribute HostReplacePolicy: Host Replace Policy.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHostReplacePolicy();

    /**
     * Attribute InstanceNumber: Total Instance Number.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceNumber();

    /**
     * Attribute MemAllocatedAmount: MemAllocatedAmount.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMemAllocatedAmount();

    /**
     * Attribute MemAllocateRation: MemAllocateRation.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMemAllocateRation();

    /**
     * Attribute MemAllocationRatio: Memory Allocation Ratio.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMemAllocationRatio();

    /**
     * Attribute MemUsedAmount: MemUsedAmount.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMemUsedAmount();

    /**
     * Attribute MemUtility: MemUtility.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMemUtility();

    /**
     * Attribute OpenPermission: Whether Open OS Permission.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrOpenPermission();

    /**
     * Attribute Text: Text.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrText();

    /**
     * Attribute VpcId: VPC ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId();

    /**
     * Attribute ZoneIdList: ZoneIDList.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneIdList();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cddc.datasource.DedicatedHostGroupProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.cddc.datasource.IDedicatedHostGroup.Jsii$Default {
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
         * Attribute AllocationPolicy: Allocation Policy.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAllocationPolicy() {
            return software.amazon.jsii.Kernel.get(this, "attrAllocationPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute BastionInstanceId: BastionInstanceId.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrBastionInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrBastionInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Category: The dedicated cluster family to which the host belongs.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCategory() {
            return software.amazon.jsii.Kernel.get(this, "attrCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CpuAllocatedAmount: CpuAllocatedAmount.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCpuAllocatedAmount() {
            return software.amazon.jsii.Kernel.get(this, "attrCpuAllocatedAmount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CpuAllocateRation: CpuAllocateRation.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCpuAllocateRation() {
            return software.amazon.jsii.Kernel.get(this, "attrCpuAllocateRation", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CpuAllocationRatio: Cpu Allocation Ratio.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCpuAllocationRatio() {
            return software.amazon.jsii.Kernel.get(this, "attrCpuAllocationRatio", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: Create Time.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DedicatedHostCountGroupByHostType: DedicatedHostCountGroupByHostType.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDedicatedHostCountGroupByHostType() {
            return software.amazon.jsii.Kernel.get(this, "attrDedicatedHostCountGroupByHostType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DedicatedHostGroupDesc: Dedicated Host Group Description.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDedicatedHostGroupDesc() {
            return software.amazon.jsii.Kernel.get(this, "attrDedicatedHostGroupDesc", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DedicatedHostGroupId: Dedicated Host Group ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDedicatedHostGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrDedicatedHostGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DeployType: DeployType.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeployType() {
            return software.amazon.jsii.Kernel.get(this, "attrDeployType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DiskAllocatedAmount: DiskAllocatedAmount.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDiskAllocatedAmount() {
            return software.amazon.jsii.Kernel.get(this, "attrDiskAllocatedAmount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DiskAllocateRation: DiskAllocateRation.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDiskAllocateRation() {
            return software.amazon.jsii.Kernel.get(this, "attrDiskAllocateRation", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DiskAllocationRatio: Disk Allocation Ratio.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDiskAllocationRatio() {
            return software.amazon.jsii.Kernel.get(this, "attrDiskAllocationRatio", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DiskUsedAmount: DiskUsedAmount.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDiskUsedAmount() {
            return software.amazon.jsii.Kernel.get(this, "attrDiskUsedAmount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DiskUtility: DiskUtility.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDiskUtility() {
            return software.amazon.jsii.Kernel.get(this, "attrDiskUtility", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Engine: Database Engine Type.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEngine() {
            return software.amazon.jsii.Kernel.get(this, "attrEngine", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HostNumber: Total Host Number.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHostNumber() {
            return software.amazon.jsii.Kernel.get(this, "attrHostNumber", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HostReplacePolicy: Host Replace Policy.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHostReplacePolicy() {
            return software.amazon.jsii.Kernel.get(this, "attrHostReplacePolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceNumber: Total Instance Number.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceNumber() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceNumber", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MemAllocatedAmount: MemAllocatedAmount.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMemAllocatedAmount() {
            return software.amazon.jsii.Kernel.get(this, "attrMemAllocatedAmount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MemAllocateRation: MemAllocateRation.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMemAllocateRation() {
            return software.amazon.jsii.Kernel.get(this, "attrMemAllocateRation", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MemAllocationRatio: Memory Allocation Ratio.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMemAllocationRatio() {
            return software.amazon.jsii.Kernel.get(this, "attrMemAllocationRatio", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MemUsedAmount: MemUsedAmount.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMemUsedAmount() {
            return software.amazon.jsii.Kernel.get(this, "attrMemUsedAmount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MemUtility: MemUtility.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMemUtility() {
            return software.amazon.jsii.Kernel.get(this, "attrMemUtility", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OpenPermission: Whether Open OS Permission.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrOpenPermission() {
            return software.amazon.jsii.Kernel.get(this, "attrOpenPermission", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Text: Text.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrText() {
            return software.amazon.jsii.Kernel.get(this, "attrText", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpcId: VPC ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ZoneIdList: ZoneIDList.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneIdList() {
            return software.amazon.jsii.Kernel.get(this, "attrZoneIdList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cddc.datasource.DedicatedHostGroupProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cddc.datasource.DedicatedHostGroupProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IDedicatedHostGroup}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IDedicatedHostGroup, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute AllocationPolicy: Allocation Policy.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAllocationPolicy() {
            return software.amazon.jsii.Kernel.get(this, "attrAllocationPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute BastionInstanceId: BastionInstanceId.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrBastionInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrBastionInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Category: The dedicated cluster family to which the host belongs.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCategory() {
            return software.amazon.jsii.Kernel.get(this, "attrCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CpuAllocatedAmount: CpuAllocatedAmount.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCpuAllocatedAmount() {
            return software.amazon.jsii.Kernel.get(this, "attrCpuAllocatedAmount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CpuAllocateRation: CpuAllocateRation.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCpuAllocateRation() {
            return software.amazon.jsii.Kernel.get(this, "attrCpuAllocateRation", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CpuAllocationRatio: Cpu Allocation Ratio.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCpuAllocationRatio() {
            return software.amazon.jsii.Kernel.get(this, "attrCpuAllocationRatio", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: Create Time.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DedicatedHostCountGroupByHostType: DedicatedHostCountGroupByHostType.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDedicatedHostCountGroupByHostType() {
            return software.amazon.jsii.Kernel.get(this, "attrDedicatedHostCountGroupByHostType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DedicatedHostGroupDesc: Dedicated Host Group Description.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDedicatedHostGroupDesc() {
            return software.amazon.jsii.Kernel.get(this, "attrDedicatedHostGroupDesc", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DedicatedHostGroupId: Dedicated Host Group ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDedicatedHostGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrDedicatedHostGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DeployType: DeployType.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeployType() {
            return software.amazon.jsii.Kernel.get(this, "attrDeployType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DiskAllocatedAmount: DiskAllocatedAmount.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDiskAllocatedAmount() {
            return software.amazon.jsii.Kernel.get(this, "attrDiskAllocatedAmount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DiskAllocateRation: DiskAllocateRation.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDiskAllocateRation() {
            return software.amazon.jsii.Kernel.get(this, "attrDiskAllocateRation", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DiskAllocationRatio: Disk Allocation Ratio.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDiskAllocationRatio() {
            return software.amazon.jsii.Kernel.get(this, "attrDiskAllocationRatio", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DiskUsedAmount: DiskUsedAmount.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDiskUsedAmount() {
            return software.amazon.jsii.Kernel.get(this, "attrDiskUsedAmount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DiskUtility: DiskUtility.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDiskUtility() {
            return software.amazon.jsii.Kernel.get(this, "attrDiskUtility", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Engine: Database Engine Type.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEngine() {
            return software.amazon.jsii.Kernel.get(this, "attrEngine", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HostNumber: Total Host Number.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHostNumber() {
            return software.amazon.jsii.Kernel.get(this, "attrHostNumber", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HostReplacePolicy: Host Replace Policy.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHostReplacePolicy() {
            return software.amazon.jsii.Kernel.get(this, "attrHostReplacePolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceNumber: Total Instance Number.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceNumber() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceNumber", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MemAllocatedAmount: MemAllocatedAmount.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMemAllocatedAmount() {
            return software.amazon.jsii.Kernel.get(this, "attrMemAllocatedAmount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MemAllocateRation: MemAllocateRation.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMemAllocateRation() {
            return software.amazon.jsii.Kernel.get(this, "attrMemAllocateRation", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MemAllocationRatio: Memory Allocation Ratio.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMemAllocationRatio() {
            return software.amazon.jsii.Kernel.get(this, "attrMemAllocationRatio", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MemUsedAmount: MemUsedAmount.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMemUsedAmount() {
            return software.amazon.jsii.Kernel.get(this, "attrMemUsedAmount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MemUtility: MemUtility.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMemUtility() {
            return software.amazon.jsii.Kernel.get(this, "attrMemUtility", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OpenPermission: Whether Open OS Permission.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrOpenPermission() {
            return software.amazon.jsii.Kernel.get(this, "attrOpenPermission", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Text: Text.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrText() {
            return software.amazon.jsii.Kernel.get(this, "attrText", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpcId: VPC ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ZoneIdList: ZoneIDList.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneIdList() {
            return software.amazon.jsii.Kernel.get(this, "attrZoneIdList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cddc.datasource.DedicatedHostGroupProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cddc.datasource.DedicatedHostGroupProps.class));
        }
    }
}
