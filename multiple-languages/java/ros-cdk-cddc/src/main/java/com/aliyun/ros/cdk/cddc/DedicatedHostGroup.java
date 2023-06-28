package com.aliyun.ros.cdk.cddc;

/**
 * A ROS resource type:  <code>ALIYUN::CDDC::DedicatedHostGroup</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.84.0 (build 5404dcf)", date = "2023-06-28T08:22:26.921Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cddc.$Module.class, fqn = "@alicloud/ros-cdk-cddc.DedicatedHostGroup")
public class DedicatedHostGroup extends com.aliyun.ros.cdk.core.Resource {

    protected DedicatedHostGroup(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected DedicatedHostGroup(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>ALIYUN::CDDC::DedicatedHostGroup</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public DedicatedHostGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cddc.DedicatedHostGroupProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>ALIYUN::CDDC::DedicatedHostGroup</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public DedicatedHostGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cddc.DedicatedHostGroupProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute AllocationPolicy: Allocation Policy.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAllocationPolicy() {
        return software.amazon.jsii.Kernel.get(this, "attrAllocationPolicy", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute BastionInstanceId: BastionInstanceId.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrBastionInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrBastionInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute CpuAllocatedAmount: CpuAllocatedAmount.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCpuAllocatedAmount() {
        return software.amazon.jsii.Kernel.get(this, "attrCpuAllocatedAmount", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute CpuAllocateRation: CpuAllocateRation.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCpuAllocateRation() {
        return software.amazon.jsii.Kernel.get(this, "attrCpuAllocateRation", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute CpuAllocationRatio: Cpu Allocation Ratio.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCpuAllocationRatio() {
        return software.amazon.jsii.Kernel.get(this, "attrCpuAllocationRatio", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute DedicatedHostGroupDesc: Dedicated Host Group Description.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDedicatedHostGroupDesc() {
        return software.amazon.jsii.Kernel.get(this, "attrDedicatedHostGroupDesc", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute DedicatedHostGroupId: Dedicated Host Group ID.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDedicatedHostGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrDedicatedHostGroupId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute DeployType: DeployType.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDeployType() {
        return software.amazon.jsii.Kernel.get(this, "attrDeployType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute DiskAllocatedAmount: DiskAllocatedAmount.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDiskAllocatedAmount() {
        return software.amazon.jsii.Kernel.get(this, "attrDiskAllocatedAmount", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute DiskAllocateRation: DiskAllocateRation.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDiskAllocateRation() {
        return software.amazon.jsii.Kernel.get(this, "attrDiskAllocateRation", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute DiskAllocationRatio: Disk Allocation Ratio.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDiskAllocationRatio() {
        return software.amazon.jsii.Kernel.get(this, "attrDiskAllocationRatio", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute DiskUsedAmount: DiskUsedAmount.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDiskUsedAmount() {
        return software.amazon.jsii.Kernel.get(this, "attrDiskUsedAmount", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute DiskUtility: DiskUtility.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDiskUtility() {
        return software.amazon.jsii.Kernel.get(this, "attrDiskUtility", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Engine: Database Engine Type.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrEngine() {
        return software.amazon.jsii.Kernel.get(this, "attrEngine", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute HostNumber: Total Host Number.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrHostNumber() {
        return software.amazon.jsii.Kernel.get(this, "attrHostNumber", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute HostReplacePolicy: Host Replace Policy.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrHostReplacePolicy() {
        return software.amazon.jsii.Kernel.get(this, "attrHostReplacePolicy", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute InstanceNumber: Total Instance Number.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceNumber() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceNumber", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute MemAllocatedAmount: MemAllocatedAmount.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrMemAllocatedAmount() {
        return software.amazon.jsii.Kernel.get(this, "attrMemAllocatedAmount", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute MemAllocateRation: MemAllocateRation.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrMemAllocateRation() {
        return software.amazon.jsii.Kernel.get(this, "attrMemAllocateRation", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute MemAllocationRatio: Memory Allocation Ratio.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrMemAllocationRatio() {
        return software.amazon.jsii.Kernel.get(this, "attrMemAllocationRatio", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute MemUsedAmount: MemUsedAmount.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrMemUsedAmount() {
        return software.amazon.jsii.Kernel.get(this, "attrMemUsedAmount", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute MemUtility: MemUtility.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrMemUtility() {
        return software.amazon.jsii.Kernel.get(this, "attrMemUtility", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute OpenPermission: Whether Open OS Permission.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrOpenPermission() {
        return software.amazon.jsii.Kernel.get(this, "attrOpenPermission", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Text: Text.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrText() {
        return software.amazon.jsii.Kernel.get(this, "attrText", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute VpcId: VPC ID.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVpcId() {
        return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cddc.DedicatedHostGroup}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cddc.DedicatedHostGroup> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.cddc.DedicatedHostGroupProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cddc.DedicatedHostGroupProps.Builder();
        }

        /**
         * Property engine: Database Engine Type.
         * <p>
         * @return {@code this}
         * @param engine Property engine: Database Engine Type. This parameter is required.
         */
        public Builder engine(final java.lang.String engine) {
            this.props.engine(engine);
            return this;
        }
        /**
         * Property engine: Database Engine Type.
         * <p>
         * @return {@code this}
         * @param engine Property engine: Database Engine Type. This parameter is required.
         */
        public Builder engine(final com.aliyun.ros.cdk.core.IResolvable engine) {
            this.props.engine(engine);
            return this;
        }

        /**
         * Property vpcId: VPC ID.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: VPC ID. This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }
        /**
         * Property vpcId: VPC ID.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: VPC ID. This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }

        /**
         * Property allocationPolicy: Allocation Policy.
         * <p>
         * @return {@code this}
         * @param allocationPolicy Property allocationPolicy: Allocation Policy. This parameter is required.
         */
        public Builder allocationPolicy(final java.lang.String allocationPolicy) {
            this.props.allocationPolicy(allocationPolicy);
            return this;
        }
        /**
         * Property allocationPolicy: Allocation Policy.
         * <p>
         * @return {@code this}
         * @param allocationPolicy Property allocationPolicy: Allocation Policy. This parameter is required.
         */
        public Builder allocationPolicy(final com.aliyun.ros.cdk.core.IResolvable allocationPolicy) {
            this.props.allocationPolicy(allocationPolicy);
            return this;
        }

        /**
         * Property cpuAllocationRatio: Cpu Allocation Ratio.
         * <p>
         * @return {@code this}
         * @param cpuAllocationRatio Property cpuAllocationRatio: Cpu Allocation Ratio. This parameter is required.
         */
        public Builder cpuAllocationRatio(final java.lang.Number cpuAllocationRatio) {
            this.props.cpuAllocationRatio(cpuAllocationRatio);
            return this;
        }
        /**
         * Property cpuAllocationRatio: Cpu Allocation Ratio.
         * <p>
         * @return {@code this}
         * @param cpuAllocationRatio Property cpuAllocationRatio: Cpu Allocation Ratio. This parameter is required.
         */
        public Builder cpuAllocationRatio(final com.aliyun.ros.cdk.core.IResolvable cpuAllocationRatio) {
            this.props.cpuAllocationRatio(cpuAllocationRatio);
            return this;
        }

        /**
         * Property dedicatedHostGroupDesc: Dedicated Host Group Description.
         * <p>
         * @return {@code this}
         * @param dedicatedHostGroupDesc Property dedicatedHostGroupDesc: Dedicated Host Group Description. This parameter is required.
         */
        public Builder dedicatedHostGroupDesc(final java.lang.String dedicatedHostGroupDesc) {
            this.props.dedicatedHostGroupDesc(dedicatedHostGroupDesc);
            return this;
        }
        /**
         * Property dedicatedHostGroupDesc: Dedicated Host Group Description.
         * <p>
         * @return {@code this}
         * @param dedicatedHostGroupDesc Property dedicatedHostGroupDesc: Dedicated Host Group Description. This parameter is required.
         */
        public Builder dedicatedHostGroupDesc(final com.aliyun.ros.cdk.core.IResolvable dedicatedHostGroupDesc) {
            this.props.dedicatedHostGroupDesc(dedicatedHostGroupDesc);
            return this;
        }

        /**
         * Property diskAllocationRatio: Disk Allocation Ratio.
         * <p>
         * @return {@code this}
         * @param diskAllocationRatio Property diskAllocationRatio: Disk Allocation Ratio. This parameter is required.
         */
        public Builder diskAllocationRatio(final java.lang.Number diskAllocationRatio) {
            this.props.diskAllocationRatio(diskAllocationRatio);
            return this;
        }
        /**
         * Property diskAllocationRatio: Disk Allocation Ratio.
         * <p>
         * @return {@code this}
         * @param diskAllocationRatio Property diskAllocationRatio: Disk Allocation Ratio. This parameter is required.
         */
        public Builder diskAllocationRatio(final com.aliyun.ros.cdk.core.IResolvable diskAllocationRatio) {
            this.props.diskAllocationRatio(diskAllocationRatio);
            return this;
        }

        /**
         * Property hostReplacePolicy: Host Replace Policy.
         * <p>
         * @return {@code this}
         * @param hostReplacePolicy Property hostReplacePolicy: Host Replace Policy. This parameter is required.
         */
        public Builder hostReplacePolicy(final java.lang.String hostReplacePolicy) {
            this.props.hostReplacePolicy(hostReplacePolicy);
            return this;
        }
        /**
         * Property hostReplacePolicy: Host Replace Policy.
         * <p>
         * @return {@code this}
         * @param hostReplacePolicy Property hostReplacePolicy: Host Replace Policy. This parameter is required.
         */
        public Builder hostReplacePolicy(final com.aliyun.ros.cdk.core.IResolvable hostReplacePolicy) {
            this.props.hostReplacePolicy(hostReplacePolicy);
            return this;
        }

        /**
         * Property memAllocationRatio: Memory Allocation Ratio.
         * <p>
         * @return {@code this}
         * @param memAllocationRatio Property memAllocationRatio: Memory Allocation Ratio. This parameter is required.
         */
        public Builder memAllocationRatio(final java.lang.Number memAllocationRatio) {
            this.props.memAllocationRatio(memAllocationRatio);
            return this;
        }
        /**
         * Property memAllocationRatio: Memory Allocation Ratio.
         * <p>
         * @return {@code this}
         * @param memAllocationRatio Property memAllocationRatio: Memory Allocation Ratio. This parameter is required.
         */
        public Builder memAllocationRatio(final com.aliyun.ros.cdk.core.IResolvable memAllocationRatio) {
            this.props.memAllocationRatio(memAllocationRatio);
            return this;
        }

        /**
         * Property openPermission: Whether Open OS Permission.
         * <p>
         * @return {@code this}
         * @param openPermission Property openPermission: Whether Open OS Permission. This parameter is required.
         */
        public Builder openPermission(final java.lang.String openPermission) {
            this.props.openPermission(openPermission);
            return this;
        }
        /**
         * Property openPermission: Whether Open OS Permission.
         * <p>
         * @return {@code this}
         * @param openPermission Property openPermission: Whether Open OS Permission. This parameter is required.
         */
        public Builder openPermission(final com.aliyun.ros.cdk.core.IResolvable openPermission) {
            this.props.openPermission(openPermission);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cddc.DedicatedHostGroup}.
         */
        @Override
        public com.aliyun.ros.cdk.cddc.DedicatedHostGroup build() {
            return new com.aliyun.ros.cdk.cddc.DedicatedHostGroup(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
