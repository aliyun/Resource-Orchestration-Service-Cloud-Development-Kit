package com.aliyun.ros.cdk.cddc;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::CDDC::DedicatedHost</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:52.986Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cddc.$Module.class, fqn = "@alicloud/ros-cdk-cddc.DedicatedHost")
public class DedicatedHost extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.cddc.IDedicatedHost {

    protected DedicatedHost(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected DedicatedHost(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public DedicatedHost(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cddc.DedicatedHostProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public DedicatedHost(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cddc.DedicatedHostProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute AutoRenew: Whether Auto Renew.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAutoRenew() {
        return software.amazon.jsii.Kernel.get(this, "attrAutoRenew", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CpuAllocationRatio: CPU Allocation Ratio.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCpuAllocationRatio() {
        return software.amazon.jsii.Kernel.get(this, "attrCpuAllocationRatio", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CpuUsed: CPU Used.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCpuUsed() {
        return software.amazon.jsii.Kernel.get(this, "attrCpuUsed", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DedicatedHostGroupId: Dedicated Host Group ID.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDedicatedHostGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrDedicatedHostGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DedicatedHostId: The first ID of the resource.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDedicatedHostId() {
        return software.amazon.jsii.Kernel.get(this, "attrDedicatedHostId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DiskAllocationRatio: Disk Allocation Ratio.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDiskAllocationRatio() {
        return software.amazon.jsii.Kernel.get(this, "attrDiskAllocationRatio", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute EcsClassCode: ECS Class Code.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEcsClassCode() {
        return software.amazon.jsii.Kernel.get(this, "attrEcsClassCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute HostClass: Host Class.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrHostClass() {
        return software.amazon.jsii.Kernel.get(this, "attrHostClass", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute HostCpu: Host CPU.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrHostCpu() {
        return software.amazon.jsii.Kernel.get(this, "attrHostCpu", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute HostMem: Host Memory.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrHostMem() {
        return software.amazon.jsii.Kernel.get(this, "attrHostMem", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute HostName: Host Name.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrHostName() {
        return software.amazon.jsii.Kernel.get(this, "attrHostName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute HostStorage: Host Storage.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrHostStorage() {
        return software.amazon.jsii.Kernel.get(this, "attrHostStorage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute HostType: Host Storage Type.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrHostType() {
        return software.amazon.jsii.Kernel.get(this, "attrHostType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ImageCategory: Host Image Category.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageCategory() {
        return software.amazon.jsii.Kernel.get(this, "attrImageCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute IpAddress: Host IP Address.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpAddress() {
        return software.amazon.jsii.Kernel.get(this, "attrIpAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute MemAllocationRatio: Memory Allocation Ratio.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrMemAllocationRatio() {
        return software.amazon.jsii.Kernel.get(this, "attrMemAllocationRatio", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute MemoryUsed: Host Memory Used.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrMemoryUsed() {
        return software.amazon.jsii.Kernel.get(this, "attrMemoryUsed", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute OpenPermission: Whether Open OS Permission.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrOpenPermission() {
        return software.amazon.jsii.Kernel.get(this, "attrOpenPermission", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PaymentType: Payment Type.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPaymentType() {
        return software.amazon.jsii.Kernel.get(this, "attrPaymentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute StorageUsed: Storage Used.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrStorageUsed() {
        return software.amazon.jsii.Kernel.get(this, "attrStorageUsed", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute VpcId: VPC ID.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId() {
        return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute VSwitchId: VSwitch ID.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrVSwitchId() {
        return software.amazon.jsii.Kernel.get(this, "attrVSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ZoneId: Zone ID.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneId() {
        return software.amazon.jsii.Kernel.get(this, "attrZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cddc.DedicatedHostProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cddc.DedicatedHostProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.cddc.DedicatedHost}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cddc.DedicatedHost> {
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
        private final com.aliyun.ros.cdk.cddc.DedicatedHostProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cddc.DedicatedHostProps.Builder();
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
         * Property hostClass: Host Class.
         * <p>
         * @return {@code this}
         * @param hostClass Property hostClass: Host Class. This parameter is required.
         */
        public Builder hostClass(final java.lang.String hostClass) {
            this.props.hostClass(hostClass);
            return this;
        }
        /**
         * Property hostClass: Host Class.
         * <p>
         * @return {@code this}
         * @param hostClass Property hostClass: Host Class. This parameter is required.
         */
        public Builder hostClass(final com.aliyun.ros.cdk.core.IResolvable hostClass) {
            this.props.hostClass(hostClass);
            return this;
        }

        /**
         * Property paymentType: Payment Type.
         * <p>
         * @return {@code this}
         * @param paymentType Property paymentType: Payment Type. This parameter is required.
         */
        public Builder paymentType(final java.lang.String paymentType) {
            this.props.paymentType(paymentType);
            return this;
        }
        /**
         * Property paymentType: Payment Type.
         * <p>
         * @return {@code this}
         * @param paymentType Property paymentType: Payment Type. This parameter is required.
         */
        public Builder paymentType(final com.aliyun.ros.cdk.core.IResolvable paymentType) {
            this.props.paymentType(paymentType);
            return this;
        }

        /**
         * Property vSwitchId: VSwitch ID.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: VSwitch ID. This parameter is required.
         */
        public Builder vSwitchId(final java.lang.String vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }
        /**
         * Property vSwitchId: VSwitch ID.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: VSwitch ID. This parameter is required.
         */
        public Builder vSwitchId(final com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }

        /**
         * Property zoneId: Zone ID.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: Zone ID. This parameter is required.
         */
        public Builder zoneId(final java.lang.String zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }
        /**
         * Property zoneId: Zone ID.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: Zone ID. This parameter is required.
         */
        public Builder zoneId(final com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }

        /**
         * Property autoRenew: Whether Auto Renew.
         * <p>
         * @return {@code this}
         * @param autoRenew Property autoRenew: Whether Auto Renew. This parameter is required.
         */
        public Builder autoRenew(final java.lang.String autoRenew) {
            this.props.autoRenew(autoRenew);
            return this;
        }
        /**
         * Property autoRenew: Whether Auto Renew.
         * <p>
         * @return {@code this}
         * @param autoRenew Property autoRenew: Whether Auto Renew. This parameter is required.
         */
        public Builder autoRenew(final com.aliyun.ros.cdk.core.IResolvable autoRenew) {
            this.props.autoRenew(autoRenew);
            return this;
        }

        /**
         * Property hostName: Host Name.
         * <p>
         * @return {@code this}
         * @param hostName Property hostName: Host Name. This parameter is required.
         */
        public Builder hostName(final java.lang.String hostName) {
            this.props.hostName(hostName);
            return this;
        }
        /**
         * Property hostName: Host Name.
         * <p>
         * @return {@code this}
         * @param hostName Property hostName: Host Name. This parameter is required.
         */
        public Builder hostName(final com.aliyun.ros.cdk.core.IResolvable hostName) {
            this.props.hostName(hostName);
            return this;
        }

        /**
         * Property imageCategory: Host Image Category.
         * <p>
         * @return {@code this}
         * @param imageCategory Property imageCategory: Host Image Category. This parameter is required.
         */
        public Builder imageCategory(final java.lang.String imageCategory) {
            this.props.imageCategory(imageCategory);
            return this;
        }
        /**
         * Property imageCategory: Host Image Category.
         * <p>
         * @return {@code this}
         * @param imageCategory Property imageCategory: Host Image Category. This parameter is required.
         */
        public Builder imageCategory(final com.aliyun.ros.cdk.core.IResolvable imageCategory) {
            this.props.imageCategory(imageCategory);
            return this;
        }

        /**
         * Property osPassword:.
         * <p>
         * @return {@code this}
         * @param osPassword Property osPassword:. This parameter is required.
         */
        public Builder osPassword(final java.lang.String osPassword) {
            this.props.osPassword(osPassword);
            return this;
        }
        /**
         * Property osPassword:.
         * <p>
         * @return {@code this}
         * @param osPassword Property osPassword:. This parameter is required.
         */
        public Builder osPassword(final com.aliyun.ros.cdk.core.IResolvable osPassword) {
            this.props.osPassword(osPassword);
            return this;
        }

        /**
         * Property period:.
         * <p>
         * @return {@code this}
         * @param period Property period:. This parameter is required.
         */
        public Builder period(final java.lang.String period) {
            this.props.period(period);
            return this;
        }
        /**
         * Property period:.
         * <p>
         * @return {@code this}
         * @param period Property period:. This parameter is required.
         */
        public Builder period(final com.aliyun.ros.cdk.core.IResolvable period) {
            this.props.period(period);
            return this;
        }

        /**
         * Property tags: The tag of the resource.
         * <p>
         * @return {@code this}
         * @param tags Property tags: The tag of the resource. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.cddc.RosDedicatedHost.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * Property usedTime:.
         * <p>
         * @return {@code this}
         * @param usedTime Property usedTime:. This parameter is required.
         */
        public Builder usedTime(final java.lang.String usedTime) {
            this.props.usedTime(usedTime);
            return this;
        }
        /**
         * Property usedTime:.
         * <p>
         * @return {@code this}
         * @param usedTime Property usedTime:. This parameter is required.
         */
        public Builder usedTime(final com.aliyun.ros.cdk.core.IResolvable usedTime) {
            this.props.usedTime(usedTime);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cddc.DedicatedHost}.
         */
        @Override
        public com.aliyun.ros.cdk.cddc.DedicatedHost build() {
            return new com.aliyun.ros.cdk.cddc.DedicatedHost(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
