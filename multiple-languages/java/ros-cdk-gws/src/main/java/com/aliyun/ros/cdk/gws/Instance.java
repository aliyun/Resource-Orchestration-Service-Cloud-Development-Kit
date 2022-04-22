package com.aliyun.ros.cdk.gws;

/**
 * A ROS resource type:  `ALIYUN::GWS::Instance`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.57.0 (build f614666)", date = "2022-04-22T03:34:40.807Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.gws.$Module.class, fqn = "@alicloud/ros-cdk-gws.Instance")
public class Instance extends com.aliyun.ros.cdk.core.Resource {

    protected Instance(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Instance(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::GWS::Instance`.
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
    public Instance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.gws.InstanceProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::GWS::Instance`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Instance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.gws.InstanceProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ClusterId: Cluster id.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrClusterId() {
        return software.amazon.jsii.Kernel.get(this, "attrClusterId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute InstanceChargeType: Instance charge type.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceChargeType() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceChargeType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute InstanceId: Instance id.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute MaxBandwidthIn: Maximum inbound bandwidth of the public network (in Mbps).
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrMaxBandwidthIn() {
        return software.amazon.jsii.Kernel.get(this, "attrMaxBandwidthIn", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute MaxBandwidthOut: Maximum outbound bandwidth of the public network (in Mbps).
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrMaxBandwidthOut() {
        return software.amazon.jsii.Kernel.get(this, "attrMaxBandwidthOut", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Name: Instance name.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrName() {
        return software.amazon.jsii.Kernel.get(this, "attrName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.gws.Instance}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.gws.Instance> {
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
        private final com.aliyun.ros.cdk.gws.InstanceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.gws.InstanceProps.Builder();
        }

        /**
         * Property clusterId: Cluster id.
         * <p>
         * @return {@code this}
         * @param clusterId Property clusterId: Cluster id. This parameter is required.
         */
        public Builder clusterId(final java.lang.String clusterId) {
            this.props.clusterId(clusterId);
            return this;
        }
        /**
         * Property clusterId: Cluster id.
         * <p>
         * @return {@code this}
         * @param clusterId Property clusterId: Cluster id. This parameter is required.
         */
        public Builder clusterId(final com.aliyun.ros.cdk.core.IResolvable clusterId) {
            this.props.clusterId(clusterId);
            return this;
        }

        /**
         * Property imageId: Mirror id.
         * <p>
         * @return {@code this}
         * @param imageId Property imageId: Mirror id. This parameter is required.
         */
        public Builder imageId(final java.lang.String imageId) {
            this.props.imageId(imageId);
            return this;
        }
        /**
         * Property imageId: Mirror id.
         * <p>
         * @return {@code this}
         * @param imageId Property imageId: Mirror id. This parameter is required.
         */
        public Builder imageId(final com.aliyun.ros.cdk.core.IResolvable imageId) {
            this.props.imageId(imageId);
            return this;
        }

        /**
         * Property instanceType: Examples of specifications, see examples of racial or specifications call DescribeInstanceTypes get specification sheet.
         * <p>
         * @return {@code this}
         * @param instanceType Property instanceType: Examples of specifications, see examples of racial or specifications call DescribeInstanceTypes get specification sheet. This parameter is required.
         */
        public Builder instanceType(final java.lang.String instanceType) {
            this.props.instanceType(instanceType);
            return this;
        }
        /**
         * Property instanceType: Examples of specifications, see examples of racial or specifications call DescribeInstanceTypes get specification sheet.
         * <p>
         * @return {@code this}
         * @param instanceType Property instanceType: Examples of specifications, see examples of racial or specifications call DescribeInstanceTypes get specification sheet. This parameter is required.
         */
        public Builder instanceType(final com.aliyun.ros.cdk.core.IResolvable instanceType) {
            this.props.instanceType(instanceType);
            return this;
        }

        /**
         * Property systemDiskCategory: System disk categories: cloud_ssd, cloud_essd, cloud, cloud and so on.
         * <p>
         * @return {@code this}
         * @param systemDiskCategory Property systemDiskCategory: System disk categories: cloud_ssd, cloud_essd, cloud, cloud and so on. This parameter is required.
         */
        public Builder systemDiskCategory(final java.lang.String systemDiskCategory) {
            this.props.systemDiskCategory(systemDiskCategory);
            return this;
        }
        /**
         * Property systemDiskCategory: System disk categories: cloud_ssd, cloud_essd, cloud, cloud and so on.
         * <p>
         * @return {@code this}
         * @param systemDiskCategory Property systemDiskCategory: System disk categories: cloud_ssd, cloud_essd, cloud, cloud and so on. This parameter is required.
         */
        public Builder systemDiskCategory(final com.aliyun.ros.cdk.core.IResolvable systemDiskCategory) {
            this.props.systemDiskCategory(systemDiskCategory);
            return this;
        }

        /**
         * Property systemDiskSize: System disk size.
         * <p>
         * @return {@code this}
         * @param systemDiskSize Property systemDiskSize: System disk size. This parameter is required.
         */
        public Builder systemDiskSize(final java.lang.Number systemDiskSize) {
            this.props.systemDiskSize(systemDiskSize);
            return this;
        }
        /**
         * Property systemDiskSize: System disk size.
         * <p>
         * @return {@code this}
         * @param systemDiskSize Property systemDiskSize: System disk size. This parameter is required.
         */
        public Builder systemDiskSize(final com.aliyun.ros.cdk.core.IResolvable systemDiskSize) {
            this.props.systemDiskSize(systemDiskSize);
            return this;
        }

        /**
         * Property workMode: Work mode: Desktop Application.
         * <p>
         * @return {@code this}
         * @param workMode Property workMode: Work mode: Desktop Application. This parameter is required.
         */
        public Builder workMode(final java.lang.String workMode) {
            this.props.workMode(workMode);
            return this;
        }
        /**
         * Property workMode: Work mode: Desktop Application.
         * <p>
         * @return {@code this}
         * @param workMode Property workMode: Work mode: Desktop Application. This parameter is required.
         */
        public Builder workMode(final com.aliyun.ros.cdk.core.IResolvable workMode) {
            this.props.workMode(workMode);
            return this;
        }

        /**
         * Property allocatePublicAddress: Whether to allocate a public network address.
         * <p>
         * @return {@code this}
         * @param allocatePublicAddress Property allocatePublicAddress: Whether to allocate a public network address. This parameter is required.
         */
        public Builder allocatePublicAddress(final java.lang.Boolean allocatePublicAddress) {
            this.props.allocatePublicAddress(allocatePublicAddress);
            return this;
        }
        /**
         * Property allocatePublicAddress: Whether to allocate a public network address.
         * <p>
         * @return {@code this}
         * @param allocatePublicAddress Property allocatePublicAddress: Whether to allocate a public network address. This parameter is required.
         */
        public Builder allocatePublicAddress(final com.aliyun.ros.cdk.core.IResolvable allocatePublicAddress) {
            this.props.allocatePublicAddress(allocatePublicAddress);
            return this;
        }

        /**
         * Property appList: App list.
         * <p>
         * This value is only valid when WorkMode is Application.
         * <p>
         * @return {@code this}
         * @param appList Property appList: App list. This parameter is required.
         */
        public Builder appList(final com.aliyun.ros.cdk.core.IResolvable appList) {
            this.props.appList(appList);
            return this;
        }
        /**
         * Property appList: App list.
         * <p>
         * This value is only valid when WorkMode is Application.
         * <p>
         * @return {@code this}
         * @param appList Property appList: App list. This parameter is required.
         */
        public Builder appList(final java.util.List<? extends java.lang.Object> appList) {
            this.props.appList(appList);
            return this;
        }

        /**
         * Property autoRenew: Whether auto renew.
         * <p>
         * @return {@code this}
         * @param autoRenew Property autoRenew: Whether auto renew. This parameter is required.
         */
        public Builder autoRenew(final java.lang.Boolean autoRenew) {
            this.props.autoRenew(autoRenew);
            return this;
        }
        /**
         * Property autoRenew: Whether auto renew.
         * <p>
         * @return {@code this}
         * @param autoRenew Property autoRenew: Whether auto renew. This parameter is required.
         */
        public Builder autoRenew(final com.aliyun.ros.cdk.core.IResolvable autoRenew) {
            this.props.autoRenew(autoRenew);
            return this;
        }

        /**
         * Property instanceChargeType: Instance charge type: PostPaid (default): Pay-As-You-Go PrePaid: Subscription.
         * <p>
         * @return {@code this}
         * @param instanceChargeType Property instanceChargeType: Instance charge type: PostPaid (default): Pay-As-You-Go PrePaid: Subscription. This parameter is required.
         */
        public Builder instanceChargeType(final java.lang.String instanceChargeType) {
            this.props.instanceChargeType(instanceChargeType);
            return this;
        }
        /**
         * Property instanceChargeType: Instance charge type: PostPaid (default): Pay-As-You-Go PrePaid: Subscription.
         * <p>
         * @return {@code this}
         * @param instanceChargeType Property instanceChargeType: Instance charge type: PostPaid (default): Pay-As-You-Go PrePaid: Subscription. This parameter is required.
         */
        public Builder instanceChargeType(final com.aliyun.ros.cdk.core.IResolvable instanceChargeType) {
            this.props.instanceChargeType(instanceChargeType);
            return this;
        }

        /**
         * Property internetChargeType: Network charge type: PayByTraffic (default): Flow-per-use billing PayByBandwidth: fixed-bandwidth billing This value is only valid when AllocatePublicAddress is true.
         * <p>
         * @return {@code this}
         * @param internetChargeType Property internetChargeType: Network charge type: PayByTraffic (default): Flow-per-use billing PayByBandwidth: fixed-bandwidth billing This value is only valid when AllocatePublicAddress is true. This parameter is required.
         */
        public Builder internetChargeType(final java.lang.String internetChargeType) {
            this.props.internetChargeType(internetChargeType);
            return this;
        }
        /**
         * Property internetChargeType: Network charge type: PayByTraffic (default): Flow-per-use billing PayByBandwidth: fixed-bandwidth billing This value is only valid when AllocatePublicAddress is true.
         * <p>
         * @return {@code this}
         * @param internetChargeType Property internetChargeType: Network charge type: PayByTraffic (default): Flow-per-use billing PayByBandwidth: fixed-bandwidth billing This value is only valid when AllocatePublicAddress is true. This parameter is required.
         */
        public Builder internetChargeType(final com.aliyun.ros.cdk.core.IResolvable internetChargeType) {
            this.props.internetChargeType(internetChargeType);
            return this;
        }

        /**
         * Property internetMaxBandwidthOut: Maximum outbound bandwidth of the public network (in Mbps).
         * <p>
         * Value range: 1-200
         * Default: 200
         * This value is only valid when AllocatePublicAddress is true.
         * <p>
         * @return {@code this}
         * @param internetMaxBandwidthOut Property internetMaxBandwidthOut: Maximum outbound bandwidth of the public network (in Mbps). This parameter is required.
         */
        public Builder internetMaxBandwidthOut(final java.lang.Number internetMaxBandwidthOut) {
            this.props.internetMaxBandwidthOut(internetMaxBandwidthOut);
            return this;
        }
        /**
         * Property internetMaxBandwidthOut: Maximum outbound bandwidth of the public network (in Mbps).
         * <p>
         * Value range: 1-200
         * Default: 200
         * This value is only valid when AllocatePublicAddress is true.
         * <p>
         * @return {@code this}
         * @param internetMaxBandwidthOut Property internetMaxBandwidthOut: Maximum outbound bandwidth of the public network (in Mbps). This parameter is required.
         */
        public Builder internetMaxBandwidthOut(final com.aliyun.ros.cdk.core.IResolvable internetMaxBandwidthOut) {
            this.props.internetMaxBandwidthOut(internetMaxBandwidthOut);
            return this;
        }

        /**
         * Property name: Instance name.
         * <p>
         * @return {@code this}
         * @param name Property name: Instance name. This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }
        /**
         * Property name: Instance name.
         * <p>
         * @return {@code this}
         * @param name Property name: Instance name. This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props.name(name);
            return this;
        }

        /**
         * Property period: Period of subscription.
         * <p>
         * When PeriodUnit is Week, the value range is 1-4
         * When PeriodUnit is Month, the value range is 1-9, 12, 24, 36, 48, 60
         * This value is only valid when InstanceChargeType is PrePaid.
         * <p>
         * @return {@code this}
         * @param period Property period: Period of subscription. This parameter is required.
         */
        public Builder period(final java.lang.Number period) {
            this.props.period(period);
            return this;
        }
        /**
         * Property period: Period of subscription.
         * <p>
         * When PeriodUnit is Week, the value range is 1-4
         * When PeriodUnit is Month, the value range is 1-9, 12, 24, 36, 48, 60
         * This value is only valid when InstanceChargeType is PrePaid.
         * <p>
         * @return {@code this}
         * @param period Property period: Period of subscription. This parameter is required.
         */
        public Builder period(final com.aliyun.ros.cdk.core.IResolvable period) {
            this.props.period(period);
            return this;
        }

        /**
         * Property periodUnit: Unit of period.
         * <p>
         * Week or Month.
         * This value is only valid when InstanceChargeType is PrePaid.
         * <p>
         * @return {@code this}
         * @param periodUnit Property periodUnit: Unit of period. This parameter is required.
         */
        public Builder periodUnit(final java.lang.String periodUnit) {
            this.props.periodUnit(periodUnit);
            return this;
        }
        /**
         * Property periodUnit: Unit of period.
         * <p>
         * Week or Month.
         * This value is only valid when InstanceChargeType is PrePaid.
         * <p>
         * @return {@code this}
         * @param periodUnit Property periodUnit: Unit of period. This parameter is required.
         */
        public Builder periodUnit(final com.aliyun.ros.cdk.core.IResolvable periodUnit) {
            this.props.periodUnit(periodUnit);
            return this;
        }

        /**
         * Property vSwitchId: VSwitch id.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: VSwitch id. This parameter is required.
         */
        public Builder vSwitchId(final java.lang.String vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }
        /**
         * Property vSwitchId: VSwitch id.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: VSwitch id. This parameter is required.
         */
        public Builder vSwitchId(final com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.gws.Instance}.
         */
        @Override
        public com.aliyun.ros.cdk.gws.Instance build() {
            return new com.aliyun.ros.cdk.gws.Instance(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
