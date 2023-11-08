package com.aliyun.ros.cdk.cddc;

/**
 * A ROS template type:  <code>ALIYUN::CDDC::DedicatedHostGroup</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-11-07T09:08:33.557Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cddc.$Module.class, fqn = "@alicloud/ros-cdk-cddc.RosDedicatedHostGroup")
public class RosDedicatedHostGroup extends com.aliyun.ros.cdk.core.RosResource {

    protected RosDedicatedHostGroup(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosDedicatedHostGroup(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.cddc.RosDedicatedHostGroup.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new <code>ALIYUN::CDDC::DedicatedHostGroup</code>.
     * <p>
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosDedicatedHostGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cddc.RosDedicatedHostGroupProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), java.util.Objects.requireNonNull(enableResourcePropertyConstraint, "enableResourcePropertyConstraint is required") });
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> renderProperties(final @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> props) {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.call(this, "renderProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)), new Object[] { java.util.Objects.requireNonNull(props, "props is required") }));
    }

    /**
     * The resource type name for this resource class.
     */
    public final static java.lang.String ROS_RESOURCE_TYPE_NAME;

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAllocationPolicy() {
        return software.amazon.jsii.Kernel.get(this, "attrAllocationPolicy", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrBastionInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrBastionInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCpuAllocatedAmount() {
        return software.amazon.jsii.Kernel.get(this, "attrCpuAllocatedAmount", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCpuAllocateRation() {
        return software.amazon.jsii.Kernel.get(this, "attrCpuAllocateRation", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCpuAllocationRatio() {
        return software.amazon.jsii.Kernel.get(this, "attrCpuAllocationRatio", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDedicatedHostGroupDesc() {
        return software.amazon.jsii.Kernel.get(this, "attrDedicatedHostGroupDesc", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDedicatedHostGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrDedicatedHostGroupId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDeployType() {
        return software.amazon.jsii.Kernel.get(this, "attrDeployType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDiskAllocatedAmount() {
        return software.amazon.jsii.Kernel.get(this, "attrDiskAllocatedAmount", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDiskAllocateRation() {
        return software.amazon.jsii.Kernel.get(this, "attrDiskAllocateRation", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDiskAllocationRatio() {
        return software.amazon.jsii.Kernel.get(this, "attrDiskAllocationRatio", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDiskUsedAmount() {
        return software.amazon.jsii.Kernel.get(this, "attrDiskUsedAmount", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDiskUtility() {
        return software.amazon.jsii.Kernel.get(this, "attrDiskUtility", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrEngine() {
        return software.amazon.jsii.Kernel.get(this, "attrEngine", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrHostNumber() {
        return software.amazon.jsii.Kernel.get(this, "attrHostNumber", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrHostReplacePolicy() {
        return software.amazon.jsii.Kernel.get(this, "attrHostReplacePolicy", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceNumber() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceNumber", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrMemAllocatedAmount() {
        return software.amazon.jsii.Kernel.get(this, "attrMemAllocatedAmount", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrMemAllocateRation() {
        return software.amazon.jsii.Kernel.get(this, "attrMemAllocateRation", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrMemAllocationRatio() {
        return software.amazon.jsii.Kernel.get(this, "attrMemAllocationRatio", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrMemUsedAmount() {
        return software.amazon.jsii.Kernel.get(this, "attrMemUsedAmount", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrMemUtility() {
        return software.amazon.jsii.Kernel.get(this, "attrMemUtility", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrOpenPermission() {
        return software.amazon.jsii.Kernel.get(this, "attrOpenPermission", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrText() {
        return software.amazon.jsii.Kernel.get(this, "attrText", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVpcId() {
        return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getEngine() {
        return software.amazon.jsii.Kernel.get(this, "engine", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEngine(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "engine", java.util.Objects.requireNonNull(value, "engine is required"));
    }

    /**
     */
    public void setEngine(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "engine", java.util.Objects.requireNonNull(value, "engine is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getVpcId() {
        return software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVpcId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "vpcId", java.util.Objects.requireNonNull(value, "vpcId is required"));
    }

    /**
     */
    public void setVpcId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "vpcId", java.util.Objects.requireNonNull(value, "vpcId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAllocationPolicy() {
        return software.amazon.jsii.Kernel.get(this, "allocationPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAllocationPolicy(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "allocationPolicy", value);
    }

    /**
     */
    public void setAllocationPolicy(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "allocationPolicy", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCpuAllocationRatio() {
        return software.amazon.jsii.Kernel.get(this, "cpuAllocationRatio", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCpuAllocationRatio(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "cpuAllocationRatio", value);
    }

    /**
     */
    public void setCpuAllocationRatio(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "cpuAllocationRatio", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDedicatedHostGroupDesc() {
        return software.amazon.jsii.Kernel.get(this, "dedicatedHostGroupDesc", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDedicatedHostGroupDesc(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "dedicatedHostGroupDesc", value);
    }

    /**
     */
    public void setDedicatedHostGroupDesc(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dedicatedHostGroupDesc", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDiskAllocationRatio() {
        return software.amazon.jsii.Kernel.get(this, "diskAllocationRatio", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDiskAllocationRatio(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "diskAllocationRatio", value);
    }

    /**
     */
    public void setDiskAllocationRatio(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "diskAllocationRatio", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getHostReplacePolicy() {
        return software.amazon.jsii.Kernel.get(this, "hostReplacePolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setHostReplacePolicy(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "hostReplacePolicy", value);
    }

    /**
     */
    public void setHostReplacePolicy(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "hostReplacePolicy", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMemAllocationRatio() {
        return software.amazon.jsii.Kernel.get(this, "memAllocationRatio", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMemAllocationRatio(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "memAllocationRatio", value);
    }

    /**
     */
    public void setMemAllocationRatio(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "memAllocationRatio", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getOpenPermission() {
        return software.amazon.jsii.Kernel.get(this, "openPermission", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setOpenPermission(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "openPermission", value);
    }

    /**
     */
    public void setOpenPermission(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "openPermission", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cddc.RosDedicatedHostGroup}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cddc.RosDedicatedHostGroup> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
         * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.cddc.RosDedicatedHostGroupProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cddc.RosDedicatedHostGroupProps.Builder();
        }

        /**
         * @return {@code this}
         * @param engine This parameter is required.
         */
        public Builder engine(final java.lang.String engine) {
            this.props.engine(engine);
            return this;
        }
        /**
         * @return {@code this}
         * @param engine This parameter is required.
         */
        public Builder engine(final com.aliyun.ros.cdk.core.IResolvable engine) {
            this.props.engine(engine);
            return this;
        }

        /**
         * @return {@code this}
         * @param vpcId This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }
        /**
         * @return {@code this}
         * @param vpcId This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }

        /**
         * @return {@code this}
         * @param allocationPolicy This parameter is required.
         */
        public Builder allocationPolicy(final java.lang.String allocationPolicy) {
            this.props.allocationPolicy(allocationPolicy);
            return this;
        }
        /**
         * @return {@code this}
         * @param allocationPolicy This parameter is required.
         */
        public Builder allocationPolicy(final com.aliyun.ros.cdk.core.IResolvable allocationPolicy) {
            this.props.allocationPolicy(allocationPolicy);
            return this;
        }

        /**
         * @return {@code this}
         * @param cpuAllocationRatio This parameter is required.
         */
        public Builder cpuAllocationRatio(final java.lang.Number cpuAllocationRatio) {
            this.props.cpuAllocationRatio(cpuAllocationRatio);
            return this;
        }
        /**
         * @return {@code this}
         * @param cpuAllocationRatio This parameter is required.
         */
        public Builder cpuAllocationRatio(final com.aliyun.ros.cdk.core.IResolvable cpuAllocationRatio) {
            this.props.cpuAllocationRatio(cpuAllocationRatio);
            return this;
        }

        /**
         * @return {@code this}
         * @param dedicatedHostGroupDesc This parameter is required.
         */
        public Builder dedicatedHostGroupDesc(final java.lang.String dedicatedHostGroupDesc) {
            this.props.dedicatedHostGroupDesc(dedicatedHostGroupDesc);
            return this;
        }
        /**
         * @return {@code this}
         * @param dedicatedHostGroupDesc This parameter is required.
         */
        public Builder dedicatedHostGroupDesc(final com.aliyun.ros.cdk.core.IResolvable dedicatedHostGroupDesc) {
            this.props.dedicatedHostGroupDesc(dedicatedHostGroupDesc);
            return this;
        }

        /**
         * @return {@code this}
         * @param diskAllocationRatio This parameter is required.
         */
        public Builder diskAllocationRatio(final java.lang.Number diskAllocationRatio) {
            this.props.diskAllocationRatio(diskAllocationRatio);
            return this;
        }
        /**
         * @return {@code this}
         * @param diskAllocationRatio This parameter is required.
         */
        public Builder diskAllocationRatio(final com.aliyun.ros.cdk.core.IResolvable diskAllocationRatio) {
            this.props.diskAllocationRatio(diskAllocationRatio);
            return this;
        }

        /**
         * @return {@code this}
         * @param hostReplacePolicy This parameter is required.
         */
        public Builder hostReplacePolicy(final java.lang.String hostReplacePolicy) {
            this.props.hostReplacePolicy(hostReplacePolicy);
            return this;
        }
        /**
         * @return {@code this}
         * @param hostReplacePolicy This parameter is required.
         */
        public Builder hostReplacePolicy(final com.aliyun.ros.cdk.core.IResolvable hostReplacePolicy) {
            this.props.hostReplacePolicy(hostReplacePolicy);
            return this;
        }

        /**
         * @return {@code this}
         * @param memAllocationRatio This parameter is required.
         */
        public Builder memAllocationRatio(final java.lang.Number memAllocationRatio) {
            this.props.memAllocationRatio(memAllocationRatio);
            return this;
        }
        /**
         * @return {@code this}
         * @param memAllocationRatio This parameter is required.
         */
        public Builder memAllocationRatio(final com.aliyun.ros.cdk.core.IResolvable memAllocationRatio) {
            this.props.memAllocationRatio(memAllocationRatio);
            return this;
        }

        /**
         * @return {@code this}
         * @param openPermission This parameter is required.
         */
        public Builder openPermission(final java.lang.String openPermission) {
            this.props.openPermission(openPermission);
            return this;
        }
        /**
         * @return {@code this}
         * @param openPermission This parameter is required.
         */
        public Builder openPermission(final com.aliyun.ros.cdk.core.IResolvable openPermission) {
            this.props.openPermission(openPermission);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cddc.RosDedicatedHostGroup}.
         */
        @Override
        public com.aliyun.ros.cdk.cddc.RosDedicatedHostGroup build() {
            return new com.aliyun.ros.cdk.cddc.RosDedicatedHostGroup(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
