package com.aliyun.ros.cdk.vpc.datasource;

/**
 * This class encapsulates and extends the ROS resource type <code>DATASOURCE::VPC::CommonBandwidthPackage</code>, which is used to query the information about an Internet Shared Bandwidth instance in a region.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-12-13T06:45:13.169Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.datasource.CommonBandwidthPackage")
public class CommonBandwidthPackage extends com.aliyun.ros.cdk.core.Resource {

    protected CommonBandwidthPackage(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected CommonBandwidthPackage(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     * @param enableResourcePropertyConstraint
     */
    public CommonBandwidthPackage(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.vpc.datasource.CommonBandwidthPackageProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props, enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     */
    public CommonBandwidthPackage(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.vpc.datasource.CommonBandwidthPackageProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public CommonBandwidthPackage(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute Bandwidth: The maximum bandwidth of the Internet Shared Bandwidth instance.
     * <p>
     * Unit: Mbit/s.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrBandwidth() {
        return software.amazon.jsii.Kernel.get(this, "attrBandwidth", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute BusinessStatus: The service status of the Internet Shared Bandwidth instance.
     * <p>
     * Valid values:
     * Normal: The Internet Shared Bandwidth instance runs as expected.
     * FinancialLocked: An overdue payment occurs in the Internet Shared Bandwidth instance
     * Unactivated: The Internet Shared Bandwidth instance is not activated.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrBusinessStatus() {
        return software.amazon.jsii.Kernel.get(this, "attrBusinessStatus", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute CommonBandwidthPackageId: The ID of the Internet shared bandwidth.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCommonBandwidthPackageId() {
        return software.amazon.jsii.Kernel.get(this, "attrCommonBandwidthPackageId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute CommonBandwidthPackageName: The name of the Internet Shared Bandwidth instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCommonBandwidthPackageName() {
        return software.amazon.jsii.Kernel.get(this, "attrCommonBandwidthPackageName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute CreationTime: The time when the Internet Shared Bandwidth instance was created.
     * <p>
     * The time is displayed in the YYYY-MM-DDThh:mm:ssZ format.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCreationTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreationTime", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute DeletionProtection: Indicates whether deletion protection is enabled.
     * <p>
     * Valid values:
     * false
     * true
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDeletionProtection() {
        return software.amazon.jsii.Kernel.get(this, "attrDeletionProtection", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Description: The description of the Internet Shared Bandwidth instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ExpiredTime: The time when the Internet Shared Bandwidth instance expired.
     * <p>
     * The time is displayed in the YYYY-MM-DDThh:mm:ssZ format.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrExpiredTime() {
        return software.amazon.jsii.Kernel.get(this, "attrExpiredTime", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute HasReservationData: Indicates whether the information about pending orders is returned.
     * <p>
     * Valid values:
     * false
     * true
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrHasReservationData() {
        return software.amazon.jsii.Kernel.get(this, "attrHasReservationData", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute InstanceChargeType: The billing method of the Internet Shared Bandwidth instance.
     * <p>
     * Valid value:
     * PostPaid: pay-as-you-go
     * PrePaid: subscription
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceChargeType() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceChargeType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute InternetChargeType: The metering method of the Internet Shared Bandwidth instance.
     * <p>
     * Valid value:
     * PayBy95: Charged by Enhanced 95th Percentile.
     * PayByBandwidth: Charged by Bandwidth.
     * PayByDominantTraffic: Charged by Dominant Traffic.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInternetChargeType() {
        return software.amazon.jsii.Kernel.get(this, "attrInternetChargeType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Isp: The line type.
     * <p>
     * Valid values:
     * BGP (default): BGP (Multi-ISP) lines.
     * BGP_PRO: BGP (Multi-ISP) Pro lines.
     * Valid values if you are allowed to use single-ISP bandwidth:
     * ChinaTelecom
     * ChinaUnicom
     * ChinaMobile
     * ChinaTelecom_L2
     * ChinaUnicom_L2
     * ChinaMobile_L2
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrIsp() {
        return software.amazon.jsii.Kernel.get(this, "attrIsp", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute PublicIpAddresses: The elastic IP addresses (EIPs) that are associated with the Internet Shared Bandwidth instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPublicIpAddresses() {
        return software.amazon.jsii.Kernel.get(this, "attrPublicIpAddresses", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Ratio: The percentage of the minimum bandwidth commitment.
     * <p>
     * Only 20 is returned.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRatio() {
        return software.amazon.jsii.Kernel.get(this, "attrRatio", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ReservationActiveTime: The time when the renewal took effect.
     * <p>
     * The time is displayed in the YYYY-MM-DDThh:mm:ssZ format.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrReservationActiveTime() {
        return software.amazon.jsii.Kernel.get(this, "attrReservationActiveTime", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ReservationBandwidth: The new maximum bandwidth after the configurations are changed.
     * <p>
     * Unit: Mbit/s.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrReservationBandwidth() {
        return software.amazon.jsii.Kernel.get(this, "attrReservationBandwidth", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ReservationInternetChargeType: The metering method after the configurations are changed.
     * <p>
     * Valid value:
     * PayBy95: Charged by Enhanced 95th Percentile.
     * PayByBandwidth: Charged by Bandwidth.
     * PayByDominantTraffic: Charged by Dominant Traffic.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrReservationInternetChargeType() {
        return software.amazon.jsii.Kernel.get(this, "attrReservationInternetChargeType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ReservationOrderType: The renewal method.
     * <p>
     * Valid values:
     * RENEWCHANGE: renewal with a specification change
     * TEMP_UPGRADE: renewal with a temporary upgrade
     * UPGRADE: renewal with an upgrade
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrReservationOrderType() {
        return software.amazon.jsii.Kernel.get(this, "attrReservationOrderType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrResourceGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ServiceManaged: Indicates whether the resource is created by the service account.
     * <p>
     * Valid values:
     * 0: The resource is not created by the service account.
     * 1: The resource is created by the service account.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrServiceManaged() {
        return software.amazon.jsii.Kernel.get(this, "attrServiceManaged", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Status: The status of the Internet Shared Bandwidth instance.
     * <p>
     * Valid values:
     * Available: The Internet Shared Bandwidth instance is available.
     * Modifying: The Internet Shared Bandwidth instance is being modified.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrStatus() {
        return software.amazon.jsii.Kernel.get(this, "attrStatus", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.datasource.CommonBandwidthPackageProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.datasource.CommonBandwidthPackageProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.datasource.CommonBandwidthPackageProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.vpc.datasource.CommonBandwidthPackage}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.vpc.datasource.CommonBandwidthPackage> {
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
        private com.aliyun.ros.cdk.vpc.datasource.CommonBandwidthPackageProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property commonBandwidthPackageId: The ID of the Internet shared bandwidth.
         * <p>
         * @return {@code this}
         * @param commonBandwidthPackageId Property commonBandwidthPackageId: The ID of the Internet shared bandwidth. This parameter is required.
         */
        public Builder commonBandwidthPackageId(final java.lang.String commonBandwidthPackageId) {
            this.props().commonBandwidthPackageId(commonBandwidthPackageId);
            return this;
        }
        /**
         * Property commonBandwidthPackageId: The ID of the Internet shared bandwidth.
         * <p>
         * @return {@code this}
         * @param commonBandwidthPackageId Property commonBandwidthPackageId: The ID of the Internet shared bandwidth. This parameter is required.
         */
        public Builder commonBandwidthPackageId(final com.aliyun.ros.cdk.core.IResolvable commonBandwidthPackageId) {
            this.props().commonBandwidthPackageId(commonBandwidthPackageId);
            return this;
        }

        /**
         * Property commonBandwidthPackageName: The name of the Internet Shared Bandwidth instance.
         * <p>
         * @return {@code this}
         * @param commonBandwidthPackageName Property commonBandwidthPackageName: The name of the Internet Shared Bandwidth instance. This parameter is required.
         */
        public Builder commonBandwidthPackageName(final java.lang.String commonBandwidthPackageName) {
            this.props().commonBandwidthPackageName(commonBandwidthPackageName);
            return this;
        }
        /**
         * Property commonBandwidthPackageName: The name of the Internet Shared Bandwidth instance.
         * <p>
         * @return {@code this}
         * @param commonBandwidthPackageName Property commonBandwidthPackageName: The name of the Internet Shared Bandwidth instance. This parameter is required.
         */
        public Builder commonBandwidthPackageName(final com.aliyun.ros.cdk.core.IResolvable commonBandwidthPackageName) {
            this.props().commonBandwidthPackageName(commonBandwidthPackageName);
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
            this.props().refreshOptions(refreshOptions);
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
            this.props().refreshOptions(refreshOptions);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.vpc.datasource.CommonBandwidthPackage}.
         */
        @Override
        public com.aliyun.ros.cdk.vpc.datasource.CommonBandwidthPackage build() {
            return new com.aliyun.ros.cdk.vpc.datasource.CommonBandwidthPackage(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.vpc.datasource.CommonBandwidthPackageProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.vpc.datasource.CommonBandwidthPackageProps.Builder();
            }
            return this.props;
        }
    }
}
