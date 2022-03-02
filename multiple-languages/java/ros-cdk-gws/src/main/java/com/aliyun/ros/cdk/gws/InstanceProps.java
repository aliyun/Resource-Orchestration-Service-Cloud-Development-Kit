package com.aliyun.ros.cdk.gws;

/**
 * Properties for defining a `ALIYUN::GWS::Instance`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.53.0 (build c071d26)", date = "2022-02-11T01:44:08.019Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.gws.$Module.class, fqn = "@alicloud/ros-cdk-gws.InstanceProps")
@software.amazon.jsii.Jsii.Proxy(InstanceProps.Jsii$Proxy.class)
public interface InstanceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property clusterId: Cluster id.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getClusterId();

    /**
     * Property imageId: Mirror id.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getImageId();

    /**
     * Property instanceType: Examples of specifications, see examples of racial or specifications call DescribeInstanceTypes get specification sheet.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceType();

    /**
     * Property systemDiskCategory: System disk categories: cloud_ssd, cloud_essd, cloud, cloud and so on.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSystemDiskCategory();

    /**
     * Property systemDiskSize: System disk size.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSystemDiskSize();

    /**
     * Property workMode: Work mode: Desktop Application.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getWorkMode();

    /**
     * Property allocatePublicAddress: Whether to allocate a public network address.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAllocatePublicAddress() {
        return null;
    }

    /**
     * Property appList: App list.
     * <p>
     * This value is only valid when WorkMode is Application.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAppList() {
        return null;
    }

    /**
     * Property autoRenew: Whether auto renew.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenew() {
        return null;
    }

    /**
     * Property instanceChargeType: Instance charge type: PostPaid (default): Pay-As-You-Go PrePaid: Subscription.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceChargeType() {
        return null;
    }

    /**
     * Property internetChargeType: Network charge type: PayByTraffic (default): Flow-per-use billing PayByBandwidth: fixed-bandwidth billing This value is only valid when AllocatePublicAddress is true.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInternetChargeType() {
        return null;
    }

    /**
     * Property internetMaxBandwidthIn: Maximum inbound bandwidth of the public network (in Mbps).
     * <p>
     * Value range: 1-200
     * Default: 200
     * This value is only valid when AllocatePublicAddress is true.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInternetMaxBandwidthIn() {
        return null;
    }

    /**
     * Property internetMaxBandwidthOut: Maximum outbound bandwidth of the public network (in Mbps).
     * <p>
     * Value range: 1-200
     * Default: 200
     * This value is only valid when AllocatePublicAddress is true.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInternetMaxBandwidthOut() {
        return null;
    }

    /**
     * Property name: Instance name.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getName() {
        return null;
    }

    /**
     * Property period: Period of subscription.
     * <p>
     * When PeriodUnit is Week, the value range is 1-4
     * When PeriodUnit is Month, the value range is 1-9, 12, 24, 36, 48, 60
     * This value is only valid when InstanceChargeType is PrePaid.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriod() {
        return null;
    }

    /**
     * Property periodUnit: Unit of period.
     * <p>
     * Week or Month.
     * This value is only valid when InstanceChargeType is PrePaid.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriodUnit() {
        return null;
    }

    /**
     * Property vSwitchId: VSwitch id.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVSwitchId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link InstanceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link InstanceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<InstanceProps> {
        java.lang.Object clusterId;
        java.lang.Object imageId;
        java.lang.Object instanceType;
        java.lang.Object systemDiskCategory;
        java.lang.Object systemDiskSize;
        java.lang.Object workMode;
        java.lang.Object allocatePublicAddress;
        java.lang.Object appList;
        java.lang.Object autoRenew;
        java.lang.Object instanceChargeType;
        java.lang.Object internetChargeType;
        java.lang.Object internetMaxBandwidthIn;
        java.lang.Object internetMaxBandwidthOut;
        java.lang.Object name;
        java.lang.Object period;
        java.lang.Object periodUnit;
        java.lang.Object vSwitchId;

        /**
         * Sets the value of {@link InstanceProps#getClusterId}
         * @param clusterId Property clusterId: Cluster id. This parameter is required.
         * @return {@code this}
         */
        public Builder clusterId(java.lang.String clusterId) {
            this.clusterId = clusterId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getClusterId}
         * @param clusterId Property clusterId: Cluster id. This parameter is required.
         * @return {@code this}
         */
        public Builder clusterId(com.aliyun.ros.cdk.core.IResolvable clusterId) {
            this.clusterId = clusterId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getImageId}
         * @param imageId Property imageId: Mirror id. This parameter is required.
         * @return {@code this}
         */
        public Builder imageId(java.lang.String imageId) {
            this.imageId = imageId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getImageId}
         * @param imageId Property imageId: Mirror id. This parameter is required.
         * @return {@code this}
         */
        public Builder imageId(com.aliyun.ros.cdk.core.IResolvable imageId) {
            this.imageId = imageId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getInstanceType}
         * @param instanceType Property instanceType: Examples of specifications, see examples of racial or specifications call DescribeInstanceTypes get specification sheet. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceType(java.lang.String instanceType) {
            this.instanceType = instanceType;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getInstanceType}
         * @param instanceType Property instanceType: Examples of specifications, see examples of racial or specifications call DescribeInstanceTypes get specification sheet. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceType(com.aliyun.ros.cdk.core.IResolvable instanceType) {
            this.instanceType = instanceType;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getSystemDiskCategory}
         * @param systemDiskCategory Property systemDiskCategory: System disk categories: cloud_ssd, cloud_essd, cloud, cloud and so on. This parameter is required.
         * @return {@code this}
         */
        public Builder systemDiskCategory(java.lang.String systemDiskCategory) {
            this.systemDiskCategory = systemDiskCategory;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getSystemDiskCategory}
         * @param systemDiskCategory Property systemDiskCategory: System disk categories: cloud_ssd, cloud_essd, cloud, cloud and so on. This parameter is required.
         * @return {@code this}
         */
        public Builder systemDiskCategory(com.aliyun.ros.cdk.core.IResolvable systemDiskCategory) {
            this.systemDiskCategory = systemDiskCategory;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getSystemDiskSize}
         * @param systemDiskSize Property systemDiskSize: System disk size. This parameter is required.
         * @return {@code this}
         */
        public Builder systemDiskSize(java.lang.Number systemDiskSize) {
            this.systemDiskSize = systemDiskSize;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getSystemDiskSize}
         * @param systemDiskSize Property systemDiskSize: System disk size. This parameter is required.
         * @return {@code this}
         */
        public Builder systemDiskSize(com.aliyun.ros.cdk.core.IResolvable systemDiskSize) {
            this.systemDiskSize = systemDiskSize;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getWorkMode}
         * @param workMode Property workMode: Work mode: Desktop Application. This parameter is required.
         * @return {@code this}
         */
        public Builder workMode(java.lang.String workMode) {
            this.workMode = workMode;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getWorkMode}
         * @param workMode Property workMode: Work mode: Desktop Application. This parameter is required.
         * @return {@code this}
         */
        public Builder workMode(com.aliyun.ros.cdk.core.IResolvable workMode) {
            this.workMode = workMode;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getAllocatePublicAddress}
         * @param allocatePublicAddress Property allocatePublicAddress: Whether to allocate a public network address.
         * @return {@code this}
         */
        public Builder allocatePublicAddress(java.lang.Boolean allocatePublicAddress) {
            this.allocatePublicAddress = allocatePublicAddress;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getAllocatePublicAddress}
         * @param allocatePublicAddress Property allocatePublicAddress: Whether to allocate a public network address.
         * @return {@code this}
         */
        public Builder allocatePublicAddress(com.aliyun.ros.cdk.core.IResolvable allocatePublicAddress) {
            this.allocatePublicAddress = allocatePublicAddress;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getAppList}
         * @param appList Property appList: App list.
         *                This value is only valid when WorkMode is Application.
         * @return {@code this}
         */
        public Builder appList(com.aliyun.ros.cdk.core.IResolvable appList) {
            this.appList = appList;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getAppList}
         * @param appList Property appList: App list.
         *                This value is only valid when WorkMode is Application.
         * @return {@code this}
         */
        public Builder appList(java.util.List<? extends java.lang.Object> appList) {
            this.appList = appList;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getAutoRenew}
         * @param autoRenew Property autoRenew: Whether auto renew.
         * @return {@code this}
         */
        public Builder autoRenew(java.lang.Boolean autoRenew) {
            this.autoRenew = autoRenew;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getAutoRenew}
         * @param autoRenew Property autoRenew: Whether auto renew.
         * @return {@code this}
         */
        public Builder autoRenew(com.aliyun.ros.cdk.core.IResolvable autoRenew) {
            this.autoRenew = autoRenew;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getInstanceChargeType}
         * @param instanceChargeType Property instanceChargeType: Instance charge type: PostPaid (default): Pay-As-You-Go PrePaid: Subscription.
         * @return {@code this}
         */
        public Builder instanceChargeType(java.lang.String instanceChargeType) {
            this.instanceChargeType = instanceChargeType;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getInstanceChargeType}
         * @param instanceChargeType Property instanceChargeType: Instance charge type: PostPaid (default): Pay-As-You-Go PrePaid: Subscription.
         * @return {@code this}
         */
        public Builder instanceChargeType(com.aliyun.ros.cdk.core.IResolvable instanceChargeType) {
            this.instanceChargeType = instanceChargeType;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getInternetChargeType}
         * @param internetChargeType Property internetChargeType: Network charge type: PayByTraffic (default): Flow-per-use billing PayByBandwidth: fixed-bandwidth billing This value is only valid when AllocatePublicAddress is true.
         * @return {@code this}
         */
        public Builder internetChargeType(java.lang.String internetChargeType) {
            this.internetChargeType = internetChargeType;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getInternetChargeType}
         * @param internetChargeType Property internetChargeType: Network charge type: PayByTraffic (default): Flow-per-use billing PayByBandwidth: fixed-bandwidth billing This value is only valid when AllocatePublicAddress is true.
         * @return {@code this}
         */
        public Builder internetChargeType(com.aliyun.ros.cdk.core.IResolvable internetChargeType) {
            this.internetChargeType = internetChargeType;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getInternetMaxBandwidthIn}
         * @param internetMaxBandwidthIn Property internetMaxBandwidthIn: Maximum inbound bandwidth of the public network (in Mbps).
         *                               Value range: 1-200
         *                               Default: 200
         *                               This value is only valid when AllocatePublicAddress is true.
         * @return {@code this}
         */
        public Builder internetMaxBandwidthIn(java.lang.Number internetMaxBandwidthIn) {
            this.internetMaxBandwidthIn = internetMaxBandwidthIn;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getInternetMaxBandwidthIn}
         * @param internetMaxBandwidthIn Property internetMaxBandwidthIn: Maximum inbound bandwidth of the public network (in Mbps).
         *                               Value range: 1-200
         *                               Default: 200
         *                               This value is only valid when AllocatePublicAddress is true.
         * @return {@code this}
         */
        public Builder internetMaxBandwidthIn(com.aliyun.ros.cdk.core.IResolvable internetMaxBandwidthIn) {
            this.internetMaxBandwidthIn = internetMaxBandwidthIn;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getInternetMaxBandwidthOut}
         * @param internetMaxBandwidthOut Property internetMaxBandwidthOut: Maximum outbound bandwidth of the public network (in Mbps).
         *                                Value range: 1-200
         *                                Default: 200
         *                                This value is only valid when AllocatePublicAddress is true.
         * @return {@code this}
         */
        public Builder internetMaxBandwidthOut(java.lang.Number internetMaxBandwidthOut) {
            this.internetMaxBandwidthOut = internetMaxBandwidthOut;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getInternetMaxBandwidthOut}
         * @param internetMaxBandwidthOut Property internetMaxBandwidthOut: Maximum outbound bandwidth of the public network (in Mbps).
         *                                Value range: 1-200
         *                                Default: 200
         *                                This value is only valid when AllocatePublicAddress is true.
         * @return {@code this}
         */
        public Builder internetMaxBandwidthOut(com.aliyun.ros.cdk.core.IResolvable internetMaxBandwidthOut) {
            this.internetMaxBandwidthOut = internetMaxBandwidthOut;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getName}
         * @param name Property name: Instance name.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getName}
         * @param name Property name: Instance name.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getPeriod}
         * @param period Property period: Period of subscription.
         *               When PeriodUnit is Week, the value range is 1-4
         *               When PeriodUnit is Month, the value range is 1-9, 12, 24, 36, 48, 60
         *               This value is only valid when InstanceChargeType is PrePaid.
         * @return {@code this}
         */
        public Builder period(java.lang.Number period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getPeriod}
         * @param period Property period: Period of subscription.
         *               When PeriodUnit is Week, the value range is 1-4
         *               When PeriodUnit is Month, the value range is 1-9, 12, 24, 36, 48, 60
         *               This value is only valid when InstanceChargeType is PrePaid.
         * @return {@code this}
         */
        public Builder period(com.aliyun.ros.cdk.core.IResolvable period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getPeriodUnit}
         * @param periodUnit Property periodUnit: Unit of period.
         *                   Week or Month.
         *                   This value is only valid when InstanceChargeType is PrePaid.
         * @return {@code this}
         */
        public Builder periodUnit(java.lang.String periodUnit) {
            this.periodUnit = periodUnit;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getPeriodUnit}
         * @param periodUnit Property periodUnit: Unit of period.
         *                   Week or Month.
         *                   This value is only valid when InstanceChargeType is PrePaid.
         * @return {@code this}
         */
        public Builder periodUnit(com.aliyun.ros.cdk.core.IResolvable periodUnit) {
            this.periodUnit = periodUnit;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: VSwitch id.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: VSwitch id.
         * @return {@code this}
         */
        public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link InstanceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public InstanceProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link InstanceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements InstanceProps {
        private final java.lang.Object clusterId;
        private final java.lang.Object imageId;
        private final java.lang.Object instanceType;
        private final java.lang.Object systemDiskCategory;
        private final java.lang.Object systemDiskSize;
        private final java.lang.Object workMode;
        private final java.lang.Object allocatePublicAddress;
        private final java.lang.Object appList;
        private final java.lang.Object autoRenew;
        private final java.lang.Object instanceChargeType;
        private final java.lang.Object internetChargeType;
        private final java.lang.Object internetMaxBandwidthIn;
        private final java.lang.Object internetMaxBandwidthOut;
        private final java.lang.Object name;
        private final java.lang.Object period;
        private final java.lang.Object periodUnit;
        private final java.lang.Object vSwitchId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.clusterId = software.amazon.jsii.Kernel.get(this, "clusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.imageId = software.amazon.jsii.Kernel.get(this, "imageId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceType = software.amazon.jsii.Kernel.get(this, "instanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.systemDiskCategory = software.amazon.jsii.Kernel.get(this, "systemDiskCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.systemDiskSize = software.amazon.jsii.Kernel.get(this, "systemDiskSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.workMode = software.amazon.jsii.Kernel.get(this, "workMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.allocatePublicAddress = software.amazon.jsii.Kernel.get(this, "allocatePublicAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.appList = software.amazon.jsii.Kernel.get(this, "appList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoRenew = software.amazon.jsii.Kernel.get(this, "autoRenew", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceChargeType = software.amazon.jsii.Kernel.get(this, "instanceChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.internetChargeType = software.amazon.jsii.Kernel.get(this, "internetChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.internetMaxBandwidthIn = software.amazon.jsii.Kernel.get(this, "internetMaxBandwidthIn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.internetMaxBandwidthOut = software.amazon.jsii.Kernel.get(this, "internetMaxBandwidthOut", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.periodUnit = software.amazon.jsii.Kernel.get(this, "periodUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.clusterId = java.util.Objects.requireNonNull(builder.clusterId, "clusterId is required");
            this.imageId = java.util.Objects.requireNonNull(builder.imageId, "imageId is required");
            this.instanceType = java.util.Objects.requireNonNull(builder.instanceType, "instanceType is required");
            this.systemDiskCategory = java.util.Objects.requireNonNull(builder.systemDiskCategory, "systemDiskCategory is required");
            this.systemDiskSize = java.util.Objects.requireNonNull(builder.systemDiskSize, "systemDiskSize is required");
            this.workMode = java.util.Objects.requireNonNull(builder.workMode, "workMode is required");
            this.allocatePublicAddress = builder.allocatePublicAddress;
            this.appList = builder.appList;
            this.autoRenew = builder.autoRenew;
            this.instanceChargeType = builder.instanceChargeType;
            this.internetChargeType = builder.internetChargeType;
            this.internetMaxBandwidthIn = builder.internetMaxBandwidthIn;
            this.internetMaxBandwidthOut = builder.internetMaxBandwidthOut;
            this.name = builder.name;
            this.period = builder.period;
            this.periodUnit = builder.periodUnit;
            this.vSwitchId = builder.vSwitchId;
        }

        @Override
        public final java.lang.Object getClusterId() {
            return this.clusterId;
        }

        @Override
        public final java.lang.Object getImageId() {
            return this.imageId;
        }

        @Override
        public final java.lang.Object getInstanceType() {
            return this.instanceType;
        }

        @Override
        public final java.lang.Object getSystemDiskCategory() {
            return this.systemDiskCategory;
        }

        @Override
        public final java.lang.Object getSystemDiskSize() {
            return this.systemDiskSize;
        }

        @Override
        public final java.lang.Object getWorkMode() {
            return this.workMode;
        }

        @Override
        public final java.lang.Object getAllocatePublicAddress() {
            return this.allocatePublicAddress;
        }

        @Override
        public final java.lang.Object getAppList() {
            return this.appList;
        }

        @Override
        public final java.lang.Object getAutoRenew() {
            return this.autoRenew;
        }

        @Override
        public final java.lang.Object getInstanceChargeType() {
            return this.instanceChargeType;
        }

        @Override
        public final java.lang.Object getInternetChargeType() {
            return this.internetChargeType;
        }

        @Override
        public final java.lang.Object getInternetMaxBandwidthIn() {
            return this.internetMaxBandwidthIn;
        }

        @Override
        public final java.lang.Object getInternetMaxBandwidthOut() {
            return this.internetMaxBandwidthOut;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        public final java.lang.Object getPeriod() {
            return this.period;
        }

        @Override
        public final java.lang.Object getPeriodUnit() {
            return this.periodUnit;
        }

        @Override
        public final java.lang.Object getVSwitchId() {
            return this.vSwitchId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("clusterId", om.valueToTree(this.getClusterId()));
            data.set("imageId", om.valueToTree(this.getImageId()));
            data.set("instanceType", om.valueToTree(this.getInstanceType()));
            data.set("systemDiskCategory", om.valueToTree(this.getSystemDiskCategory()));
            data.set("systemDiskSize", om.valueToTree(this.getSystemDiskSize()));
            data.set("workMode", om.valueToTree(this.getWorkMode()));
            if (this.getAllocatePublicAddress() != null) {
                data.set("allocatePublicAddress", om.valueToTree(this.getAllocatePublicAddress()));
            }
            if (this.getAppList() != null) {
                data.set("appList", om.valueToTree(this.getAppList()));
            }
            if (this.getAutoRenew() != null) {
                data.set("autoRenew", om.valueToTree(this.getAutoRenew()));
            }
            if (this.getInstanceChargeType() != null) {
                data.set("instanceChargeType", om.valueToTree(this.getInstanceChargeType()));
            }
            if (this.getInternetChargeType() != null) {
                data.set("internetChargeType", om.valueToTree(this.getInternetChargeType()));
            }
            if (this.getInternetMaxBandwidthIn() != null) {
                data.set("internetMaxBandwidthIn", om.valueToTree(this.getInternetMaxBandwidthIn()));
            }
            if (this.getInternetMaxBandwidthOut() != null) {
                data.set("internetMaxBandwidthOut", om.valueToTree(this.getInternetMaxBandwidthOut()));
            }
            if (this.getName() != null) {
                data.set("name", om.valueToTree(this.getName()));
            }
            if (this.getPeriod() != null) {
                data.set("period", om.valueToTree(this.getPeriod()));
            }
            if (this.getPeriodUnit() != null) {
                data.set("periodUnit", om.valueToTree(this.getPeriodUnit()));
            }
            if (this.getVSwitchId() != null) {
                data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-gws.InstanceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            InstanceProps.Jsii$Proxy that = (InstanceProps.Jsii$Proxy) o;

            if (!clusterId.equals(that.clusterId)) return false;
            if (!imageId.equals(that.imageId)) return false;
            if (!instanceType.equals(that.instanceType)) return false;
            if (!systemDiskCategory.equals(that.systemDiskCategory)) return false;
            if (!systemDiskSize.equals(that.systemDiskSize)) return false;
            if (!workMode.equals(that.workMode)) return false;
            if (this.allocatePublicAddress != null ? !this.allocatePublicAddress.equals(that.allocatePublicAddress) : that.allocatePublicAddress != null) return false;
            if (this.appList != null ? !this.appList.equals(that.appList) : that.appList != null) return false;
            if (this.autoRenew != null ? !this.autoRenew.equals(that.autoRenew) : that.autoRenew != null) return false;
            if (this.instanceChargeType != null ? !this.instanceChargeType.equals(that.instanceChargeType) : that.instanceChargeType != null) return false;
            if (this.internetChargeType != null ? !this.internetChargeType.equals(that.internetChargeType) : that.internetChargeType != null) return false;
            if (this.internetMaxBandwidthIn != null ? !this.internetMaxBandwidthIn.equals(that.internetMaxBandwidthIn) : that.internetMaxBandwidthIn != null) return false;
            if (this.internetMaxBandwidthOut != null ? !this.internetMaxBandwidthOut.equals(that.internetMaxBandwidthOut) : that.internetMaxBandwidthOut != null) return false;
            if (this.name != null ? !this.name.equals(that.name) : that.name != null) return false;
            if (this.period != null ? !this.period.equals(that.period) : that.period != null) return false;
            if (this.periodUnit != null ? !this.periodUnit.equals(that.periodUnit) : that.periodUnit != null) return false;
            return this.vSwitchId != null ? this.vSwitchId.equals(that.vSwitchId) : that.vSwitchId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.clusterId.hashCode();
            result = 31 * result + (this.imageId.hashCode());
            result = 31 * result + (this.instanceType.hashCode());
            result = 31 * result + (this.systemDiskCategory.hashCode());
            result = 31 * result + (this.systemDiskSize.hashCode());
            result = 31 * result + (this.workMode.hashCode());
            result = 31 * result + (this.allocatePublicAddress != null ? this.allocatePublicAddress.hashCode() : 0);
            result = 31 * result + (this.appList != null ? this.appList.hashCode() : 0);
            result = 31 * result + (this.autoRenew != null ? this.autoRenew.hashCode() : 0);
            result = 31 * result + (this.instanceChargeType != null ? this.instanceChargeType.hashCode() : 0);
            result = 31 * result + (this.internetChargeType != null ? this.internetChargeType.hashCode() : 0);
            result = 31 * result + (this.internetMaxBandwidthIn != null ? this.internetMaxBandwidthIn.hashCode() : 0);
            result = 31 * result + (this.internetMaxBandwidthOut != null ? this.internetMaxBandwidthOut.hashCode() : 0);
            result = 31 * result + (this.name != null ? this.name.hashCode() : 0);
            result = 31 * result + (this.period != null ? this.period.hashCode() : 0);
            result = 31 * result + (this.periodUnit != null ? this.periodUnit.hashCode() : 0);
            result = 31 * result + (this.vSwitchId != null ? this.vSwitchId.hashCode() : 0);
            return result;
        }
    }
}
