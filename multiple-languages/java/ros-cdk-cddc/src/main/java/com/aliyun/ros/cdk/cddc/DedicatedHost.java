package com.aliyun.ros.cdk.cddc;

/**
 * A ROS resource type:  `ALIYUN::CDDC::DedicatedHost`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.71.0 (build f1f58ae)", date = "2022-11-22T06:16:27.671Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cddc.$Module.class, fqn = "@alicloud/ros-cdk-cddc.DedicatedHost")
public class DedicatedHost extends com.aliyun.ros.cdk.core.Resource {

    protected DedicatedHost(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected DedicatedHost(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::CDDC::DedicatedHost`.
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
    public DedicatedHost(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cddc.DedicatedHostProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::CDDC::DedicatedHost`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAutoRenew() {
        return software.amazon.jsii.Kernel.get(this, "attrAutoRenew", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute CpuAllocationRatio: CPU Allocation Ratio.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCpuAllocationRatio() {
        return software.amazon.jsii.Kernel.get(this, "attrCpuAllocationRatio", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute CpuUsed: CPU Used.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCpuUsed() {
        return software.amazon.jsii.Kernel.get(this, "attrCpuUsed", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute DedicatedHostGroupId: Dedicated Host Group ID.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDedicatedHostGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrDedicatedHostGroupId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute DedicatedHostId: The first ID of the resource.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDedicatedHostId() {
        return software.amazon.jsii.Kernel.get(this, "attrDedicatedHostId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute DiskAllocationRatio: Disk Allocation Ratio.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDiskAllocationRatio() {
        return software.amazon.jsii.Kernel.get(this, "attrDiskAllocationRatio", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute EcsClassCode: ECS Class Code.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrEcsClassCode() {
        return software.amazon.jsii.Kernel.get(this, "attrEcsClassCode", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute HostClass: Host Class.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrHostClass() {
        return software.amazon.jsii.Kernel.get(this, "attrHostClass", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute HostCpu: Host CPU.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrHostCpu() {
        return software.amazon.jsii.Kernel.get(this, "attrHostCpu", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute HostMem: Host Memory.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrHostMem() {
        return software.amazon.jsii.Kernel.get(this, "attrHostMem", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute HostName: Host Name.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrHostName() {
        return software.amazon.jsii.Kernel.get(this, "attrHostName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute HostStorage: Host Storage.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrHostStorage() {
        return software.amazon.jsii.Kernel.get(this, "attrHostStorage", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute HostType: Host Storage Type.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrHostType() {
        return software.amazon.jsii.Kernel.get(this, "attrHostType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ImageCategory: Host Image Category.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrImageCategory() {
        return software.amazon.jsii.Kernel.get(this, "attrImageCategory", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute IpAddress: Host IP Address.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrIpAddress() {
        return software.amazon.jsii.Kernel.get(this, "attrIpAddress", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute MemAllocationRatio: Memory Allocation Ratio.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrMemAllocationRatio() {
        return software.amazon.jsii.Kernel.get(this, "attrMemAllocationRatio", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute MemoryUsed: Host Memory Used.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrMemoryUsed() {
        return software.amazon.jsii.Kernel.get(this, "attrMemoryUsed", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute OpenPermission: Whether Open OS Permission.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrOpenPermission() {
        return software.amazon.jsii.Kernel.get(this, "attrOpenPermission", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute PaymentType: Payment Type.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPaymentType() {
        return software.amazon.jsii.Kernel.get(this, "attrPaymentType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute StorageUsed: Storage Used.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrStorageUsed() {
        return software.amazon.jsii.Kernel.get(this, "attrStorageUsed", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute VpcId: VPC ID.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVpcId() {
        return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute VSwitchId: VSwitch ID.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVSwitchId() {
        return software.amazon.jsii.Kernel.get(this, "attrVSwitchId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ZoneId: Zone ID.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrZoneId() {
        return software.amazon.jsii.Kernel.get(this, "attrZoneId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.cddc.DedicatedHost}.
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
