package com.aliyun.ros.cdk.cddc.datasource;

/**
 * This class encapsulates and extends the ROS resource type <code>DATASOURCE::CDDC::DedicatedHostGroup</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:53.016Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cddc.$Module.class, fqn = "@alicloud/ros-cdk-cddc.datasource.DedicatedHostGroup")
public class DedicatedHostGroup extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.cddc.datasource.IDedicatedHostGroup {

    protected DedicatedHostGroup(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected DedicatedHostGroup(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public DedicatedHostGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cddc.datasource.DedicatedHostGroupProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public DedicatedHostGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cddc.datasource.DedicatedHostGroupProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute AllocationPolicy: Allocation Policy.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAllocationPolicy() {
        return software.amazon.jsii.Kernel.get(this, "attrAllocationPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute BastionInstanceId: BastionInstanceId.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrBastionInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrBastionInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Category: The dedicated cluster family to which the host belongs.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCategory() {
        return software.amazon.jsii.Kernel.get(this, "attrCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CpuAllocatedAmount: CpuAllocatedAmount.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCpuAllocatedAmount() {
        return software.amazon.jsii.Kernel.get(this, "attrCpuAllocatedAmount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CpuAllocateRation: CpuAllocateRation.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCpuAllocateRation() {
        return software.amazon.jsii.Kernel.get(this, "attrCpuAllocateRation", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CpuAllocationRatio: Cpu Allocation Ratio.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCpuAllocationRatio() {
        return software.amazon.jsii.Kernel.get(this, "attrCpuAllocationRatio", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CreateTime: Create Time.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DedicatedHostCountGroupByHostType: DedicatedHostCountGroupByHostType.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDedicatedHostCountGroupByHostType() {
        return software.amazon.jsii.Kernel.get(this, "attrDedicatedHostCountGroupByHostType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DedicatedHostGroupDesc: Dedicated Host Group Description.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDedicatedHostGroupDesc() {
        return software.amazon.jsii.Kernel.get(this, "attrDedicatedHostGroupDesc", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DedicatedHostGroupId: Dedicated Host Group ID.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDedicatedHostGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrDedicatedHostGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DeployType: DeployType.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeployType() {
        return software.amazon.jsii.Kernel.get(this, "attrDeployType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DiskAllocatedAmount: DiskAllocatedAmount.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDiskAllocatedAmount() {
        return software.amazon.jsii.Kernel.get(this, "attrDiskAllocatedAmount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DiskAllocateRation: DiskAllocateRation.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDiskAllocateRation() {
        return software.amazon.jsii.Kernel.get(this, "attrDiskAllocateRation", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DiskAllocationRatio: Disk Allocation Ratio.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDiskAllocationRatio() {
        return software.amazon.jsii.Kernel.get(this, "attrDiskAllocationRatio", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DiskUsedAmount: DiskUsedAmount.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDiskUsedAmount() {
        return software.amazon.jsii.Kernel.get(this, "attrDiskUsedAmount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DiskUtility: DiskUtility.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDiskUtility() {
        return software.amazon.jsii.Kernel.get(this, "attrDiskUtility", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Engine: Database Engine Type.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEngine() {
        return software.amazon.jsii.Kernel.get(this, "attrEngine", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute HostNumber: Total Host Number.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrHostNumber() {
        return software.amazon.jsii.Kernel.get(this, "attrHostNumber", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute HostReplacePolicy: Host Replace Policy.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrHostReplacePolicy() {
        return software.amazon.jsii.Kernel.get(this, "attrHostReplacePolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute InstanceNumber: Total Instance Number.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceNumber() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceNumber", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute MemAllocatedAmount: MemAllocatedAmount.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrMemAllocatedAmount() {
        return software.amazon.jsii.Kernel.get(this, "attrMemAllocatedAmount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute MemAllocateRation: MemAllocateRation.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrMemAllocateRation() {
        return software.amazon.jsii.Kernel.get(this, "attrMemAllocateRation", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute MemAllocationRatio: Memory Allocation Ratio.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrMemAllocationRatio() {
        return software.amazon.jsii.Kernel.get(this, "attrMemAllocationRatio", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute MemUsedAmount: MemUsedAmount.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrMemUsedAmount() {
        return software.amazon.jsii.Kernel.get(this, "attrMemUsedAmount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute MemUtility: MemUtility.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrMemUtility() {
        return software.amazon.jsii.Kernel.get(this, "attrMemUtility", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute OpenPermission: Whether Open OS Permission.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrOpenPermission() {
        return software.amazon.jsii.Kernel.get(this, "attrOpenPermission", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Text: Text.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrText() {
        return software.amazon.jsii.Kernel.get(this, "attrText", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute VpcId: VPC ID.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId() {
        return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ZoneIdList: ZoneIDList.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneIdList() {
        return software.amazon.jsii.Kernel.get(this, "attrZoneIdList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cddc.datasource.DedicatedHostGroupProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cddc.datasource.DedicatedHostGroupProps.class));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    protected void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.String getId() {
        return software.amazon.jsii.Kernel.get(this, "id", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    protected void setId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "id", java.util.Objects.requireNonNull(value, "id is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cddc.datasource.DedicatedHostGroup}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cddc.datasource.DedicatedHostGroup> {
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
        private final com.aliyun.ros.cdk.cddc.datasource.DedicatedHostGroupProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cddc.datasource.DedicatedHostGroupProps.Builder();
        }

        /**
         * Property dedicatedHostGroupId: Dedicated Host Group ID.
         * <p>
         * @return {@code this}
         * @param dedicatedHostGroupId Property dedicatedHostGroupId: Dedicated Host Group ID. This parameter is required.
         */
        public Builder dedicatedHostGroupId(final java.lang.String dedicatedHostGroupId) {
            this.props.dedicatedHostGroupId(dedicatedHostGroupId);
            return this;
        }
        /**
         * Property dedicatedHostGroupId: Dedicated Host Group ID.
         * <p>
         * @return {@code this}
         * @param dedicatedHostGroupId Property dedicatedHostGroupId: Dedicated Host Group ID. This parameter is required.
         */
        public Builder dedicatedHostGroupId(final com.aliyun.ros.cdk.core.IResolvable dedicatedHostGroupId) {
            this.props.dedicatedHostGroupId(dedicatedHostGroupId);
            return this;
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
         * <p>
         * @return {@code this}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. This parameter is required.
         */
        public Builder refreshOptions(final java.lang.String refreshOptions) {
            this.props.refreshOptions(refreshOptions);
            return this;
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
         * <p>
         * @return {@code this}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. This parameter is required.
         */
        public Builder refreshOptions(final com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.props.refreshOptions(refreshOptions);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cddc.datasource.DedicatedHostGroup}.
         */
        @Override
        public com.aliyun.ros.cdk.cddc.datasource.DedicatedHostGroup build() {
            return new com.aliyun.ros.cdk.cddc.datasource.DedicatedHostGroup(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
