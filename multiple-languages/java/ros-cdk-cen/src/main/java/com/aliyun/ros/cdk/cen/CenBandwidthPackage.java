package com.aliyun.ros.cdk.cen;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::CEN::CenBandwidthPackage</code>, which is used to purchase a bandwidth plan before you use Cloud Enterprise Network (CEN) to connect network instances that reside in different regions.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-01-23T09:30:35.352Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cen.$Module.class, fqn = "@alicloud/ros-cdk-cen.CenBandwidthPackage")
public class CenBandwidthPackage extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.cen.ICenBandwidthPackage {

    protected CenBandwidthPackage(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected CenBandwidthPackage(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public CenBandwidthPackage(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cen.CenBandwidthPackageProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public CenBandwidthPackage(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cen.CenBandwidthPackageProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute CenBandwidthPackageId: The ID of the bandwidth package.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCenBandwidthPackageId() {
        return software.amazon.jsii.Kernel.get(this, "attrCenBandwidthPackageId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cen.CenBandwidthPackageProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cen.CenBandwidthPackageProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.cen.CenBandwidthPackage}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cen.CenBandwidthPackage> {
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
        private final com.aliyun.ros.cdk.cen.CenBandwidthPackageProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cen.CenBandwidthPackageProps.Builder();
        }

        /**
         * Property bandwidth: The bandwidth in Mbps of the bandwidth package.
         * <p>
         * The bandwidth cannot be less than 2 Mbps.
         * <p>
         * @return {@code this}
         * @param bandwidth Property bandwidth: The bandwidth in Mbps of the bandwidth package. This parameter is required.
         */
        public Builder bandwidth(final java.lang.Number bandwidth) {
            this.props.bandwidth(bandwidth);
            return this;
        }
        /**
         * Property bandwidth: The bandwidth in Mbps of the bandwidth package.
         * <p>
         * The bandwidth cannot be less than 2 Mbps.
         * <p>
         * @return {@code this}
         * @param bandwidth Property bandwidth: The bandwidth in Mbps of the bandwidth package. This parameter is required.
         */
        public Builder bandwidth(final com.aliyun.ros.cdk.core.IResolvable bandwidth) {
            this.props.bandwidth(bandwidth);
            return this;
        }

        /**
         * Property geographicRegionAId: The other area A to connect.
         * <p>
         * Valid value: China | North-America | Asia-Pacific | Europe | Australia
         * <p>
         * @return {@code this}
         * @param geographicRegionAId Property geographicRegionAId: The other area A to connect. This parameter is required.
         */
        public Builder geographicRegionAId(final java.lang.String geographicRegionAId) {
            this.props.geographicRegionAId(geographicRegionAId);
            return this;
        }
        /**
         * Property geographicRegionAId: The other area A to connect.
         * <p>
         * Valid value: China | North-America | Asia-Pacific | Europe | Australia
         * <p>
         * @return {@code this}
         * @param geographicRegionAId Property geographicRegionAId: The other area A to connect. This parameter is required.
         */
        public Builder geographicRegionAId(final com.aliyun.ros.cdk.core.IResolvable geographicRegionAId) {
            this.props.geographicRegionAId(geographicRegionAId);
            return this;
        }

        /**
         * Property geographicRegionBId: The other area B to connect.
         * <p>
         * Valid value: China | North-America | Asia-Pacific | Europe | Australia
         * <p>
         * @return {@code this}
         * @param geographicRegionBId Property geographicRegionBId: The other area B to connect. This parameter is required.
         */
        public Builder geographicRegionBId(final java.lang.String geographicRegionBId) {
            this.props.geographicRegionBId(geographicRegionBId);
            return this;
        }
        /**
         * Property geographicRegionBId: The other area B to connect.
         * <p>
         * Valid value: China | North-America | Asia-Pacific | Europe | Australia
         * <p>
         * @return {@code this}
         * @param geographicRegionBId Property geographicRegionBId: The other area B to connect. This parameter is required.
         */
        public Builder geographicRegionBId(final com.aliyun.ros.cdk.core.IResolvable geographicRegionBId) {
            this.props.geographicRegionBId(geographicRegionBId);
            return this;
        }

        /**
         * Property autoPay: Whether to automatically pay the bill.
         * <p>
         * Valid value:
         * true (default)
         * false
         * <p>
         * @return {@code this}
         * @param autoPay Property autoPay: Whether to automatically pay the bill. This parameter is required.
         */
        public Builder autoPay(final java.lang.Boolean autoPay) {
            this.props.autoPay(autoPay);
            return this;
        }
        /**
         * Property autoPay: Whether to automatically pay the bill.
         * <p>
         * Valid value:
         * true (default)
         * false
         * <p>
         * @return {@code this}
         * @param autoPay Property autoPay: Whether to automatically pay the bill. This parameter is required.
         */
        public Builder autoPay(final com.aliyun.ros.cdk.core.IResolvable autoPay) {
            this.props.autoPay(autoPay);
            return this;
        }

        /**
         * Property autoRenew: Indicates whether automatic renewal is enabled.
         * <p>
         * Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
         * <p>
         * @return {@code this}
         * @param autoRenew Property autoRenew: Indicates whether automatic renewal is enabled. This parameter is required.
         */
        public Builder autoRenew(final java.lang.Boolean autoRenew) {
            this.props.autoRenew(autoRenew);
            return this;
        }
        /**
         * Property autoRenew: Indicates whether automatic renewal is enabled.
         * <p>
         * Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
         * <p>
         * @return {@code this}
         * @param autoRenew Property autoRenew: Indicates whether automatic renewal is enabled. This parameter is required.
         */
        public Builder autoRenew(final com.aliyun.ros.cdk.core.IResolvable autoRenew) {
            this.props.autoRenew(autoRenew);
            return this;
        }

        /**
         * Property autoRenewDuration: Duration of each automatic renewals.
         * <p>
         * It takes effect when AutoRenew is true.
         * <p>
         * @return {@code this}
         * @param autoRenewDuration Property autoRenewDuration: Duration of each automatic renewals. This parameter is required.
         */
        public Builder autoRenewDuration(final java.lang.Number autoRenewDuration) {
            this.props.autoRenewDuration(autoRenewDuration);
            return this;
        }
        /**
         * Property autoRenewDuration: Duration of each automatic renewals.
         * <p>
         * It takes effect when AutoRenew is true.
         * <p>
         * @return {@code this}
         * @param autoRenewDuration Property autoRenewDuration: Duration of each automatic renewals. This parameter is required.
         */
        public Builder autoRenewDuration(final com.aliyun.ros.cdk.core.IResolvable autoRenewDuration) {
            this.props.autoRenewDuration(autoRenewDuration);
            return this;
        }

        /**
         * Property bandwidthPackageChargeType: The billing method.
         * <p>
         * Valid value: PREPAY, POSTPAY (Default)
         * <p>
         * @return {@code this}
         * @param bandwidthPackageChargeType Property bandwidthPackageChargeType: The billing method. This parameter is required.
         */
        public Builder bandwidthPackageChargeType(final java.lang.String bandwidthPackageChargeType) {
            this.props.bandwidthPackageChargeType(bandwidthPackageChargeType);
            return this;
        }
        /**
         * Property bandwidthPackageChargeType: The billing method.
         * <p>
         * Valid value: PREPAY, POSTPAY (Default)
         * <p>
         * @return {@code this}
         * @param bandwidthPackageChargeType Property bandwidthPackageChargeType: The billing method. This parameter is required.
         */
        public Builder bandwidthPackageChargeType(final com.aliyun.ros.cdk.core.IResolvable bandwidthPackageChargeType) {
            this.props.bandwidthPackageChargeType(bandwidthPackageChargeType);
            return this;
        }

        /**
         * Property description: The description of the bandwidth package.
         * <p>
         * The description can contain [2,256] characters, numbers, underscores, and hyphens, and the name must start with English letters, but cannot start with http:// or https://.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the bandwidth package. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: The description of the bandwidth package.
         * <p>
         * The description can contain [2,256] characters, numbers, underscores, and hyphens, and the name must start with English letters, but cannot start with http:// or https://.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the bandwidth package. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property name: The name of the bandwidth package.
         * <p>
         * The name can contain 2-128 characters including a-z, A-Z, 0-9, periods, underlines, and hyphens. It must start with English letters, but cannot start with http:// or https://.
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the bandwidth package. This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }
        /**
         * Property name: The name of the bandwidth package.
         * <p>
         * The name can contain 2-128 characters including a-z, A-Z, 0-9, periods, underlines, and hyphens. It must start with English letters, but cannot start with http:// or https://.
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the bandwidth package. This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props.name(name);
            return this;
        }

        /**
         * Property period: The purchase period.
         * <p>
         * The default value is 1.
         * <p>
         * @return {@code this}
         * @param period Property period: The purchase period. This parameter is required.
         */
        public Builder period(final java.lang.Number period) {
            this.props.period(period);
            return this;
        }
        /**
         * Property period: The purchase period.
         * <p>
         * The default value is 1.
         * <p>
         * @return {@code this}
         * @param period Property period: The purchase period. This parameter is required.
         */
        public Builder period(final com.aliyun.ros.cdk.core.IResolvable period) {
            this.props.period(period);
            return this;
        }

        /**
         * Property pricingCycle: The pricing cycle.
         * <p>
         * @return {@code this}
         * @param pricingCycle Property pricingCycle: The pricing cycle. This parameter is required.
         */
        public Builder pricingCycle(final java.lang.String pricingCycle) {
            this.props.pricingCycle(pricingCycle);
            return this;
        }
        /**
         * Property pricingCycle: The pricing cycle.
         * <p>
         * @return {@code this}
         * @param pricingCycle Property pricingCycle: The pricing cycle. This parameter is required.
         */
        public Builder pricingCycle(final com.aliyun.ros.cdk.core.IResolvable pricingCycle) {
            this.props.pricingCycle(pricingCycle);
            return this;
        }

        /**
         * Property resourceGroupId: Resource group id.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: Resource group id. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: Resource group id.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: Resource group id. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property tags: Tags to attach to instance.
         * <p>
         * Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tags to attach to instance. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.cen.RosCenBandwidthPackage.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cen.CenBandwidthPackage}.
         */
        @Override
        public com.aliyun.ros.cdk.cen.CenBandwidthPackage build() {
            return new com.aliyun.ros.cdk.cen.CenBandwidthPackage(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
