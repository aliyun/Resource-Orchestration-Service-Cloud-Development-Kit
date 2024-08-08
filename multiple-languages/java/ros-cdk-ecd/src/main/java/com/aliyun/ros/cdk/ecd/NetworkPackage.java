package com.aliyun.ros.cdk.ecd;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ECD::NetworkPackage</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-08T09:17:09.464Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecd.$Module.class, fqn = "@alicloud/ros-cdk-ecd.NetworkPackage")
public class NetworkPackage extends com.aliyun.ros.cdk.core.Resource {

    protected NetworkPackage(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected NetworkPackage(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public NetworkPackage(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecd.NetworkPackageProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public NetworkPackage(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecd.NetworkPackageProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute NetworkPackageId: The ID of the Internet access package.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrNetworkPackageId() {
        return software.amazon.jsii.Kernel.get(this, "attrNetworkPackageId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecd.NetworkPackageProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecd.NetworkPackageProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecd.NetworkPackageProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ecd.NetworkPackage}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ecd.NetworkPackage> {
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
        private final com.aliyun.ros.cdk.ecd.NetworkPackageProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ecd.NetworkPackageProps.Builder();
        }

        /**
         * Property bandwidth: The maximum public bandwidth.
         * <p>
         * Unit: Mbit/s.
         * Valid values for the pay-by-data-transfer type (PayByTraffic): 10 to 200.
         * Valid values for the pay-by-bandwith type (PayByBandwidth): 10 to 1000.
         * <p>
         * @return {@code this}
         * @param bandwidth Property bandwidth: The maximum public bandwidth. This parameter is required.
         */
        public Builder bandwidth(final java.lang.Number bandwidth) {
            this.props.bandwidth(bandwidth);
            return this;
        }
        /**
         * Property bandwidth: The maximum public bandwidth.
         * <p>
         * Unit: Mbit/s.
         * Valid values for the pay-by-data-transfer type (PayByTraffic): 10 to 200.
         * Valid values for the pay-by-bandwith type (PayByBandwidth): 10 to 1000.
         * <p>
         * @return {@code this}
         * @param bandwidth Property bandwidth: The maximum public bandwidth. This parameter is required.
         */
        public Builder bandwidth(final com.aliyun.ros.cdk.core.IResolvable bandwidth) {
            this.props.bandwidth(bandwidth);
            return this;
        }

        /**
         * Property officeSiteId: The ID of the workspace.
         * <p>
         * @return {@code this}
         * @param officeSiteId Property officeSiteId: The ID of the workspace. This parameter is required.
         */
        public Builder officeSiteId(final java.lang.String officeSiteId) {
            this.props.officeSiteId(officeSiteId);
            return this;
        }
        /**
         * Property officeSiteId: The ID of the workspace.
         * <p>
         * @return {@code this}
         * @param officeSiteId Property officeSiteId: The ID of the workspace. This parameter is required.
         */
        public Builder officeSiteId(final com.aliyun.ros.cdk.core.IResolvable officeSiteId) {
            this.props.officeSiteId(officeSiteId);
            return this;
        }

        /**
         * Property autoPay: Specifies whether to enable automatic payment.
         * <p>
         * @return {@code this}
         * @param autoPay Property autoPay: Specifies whether to enable automatic payment. This parameter is required.
         */
        public Builder autoPay(final java.lang.Boolean autoPay) {
            this.props.autoPay(autoPay);
            return this;
        }
        /**
         * Property autoPay: Specifies whether to enable automatic payment.
         * <p>
         * @return {@code this}
         * @param autoPay Property autoPay: Specifies whether to enable automatic payment. This parameter is required.
         */
        public Builder autoPay(final com.aliyun.ros.cdk.core.IResolvable autoPay) {
            this.props.autoPay(autoPay);
            return this;
        }

        /**
         * Property autoRenew: Specifies whether to enable auto-renewal.
         * <p>
         * @return {@code this}
         * @param autoRenew Property autoRenew: Specifies whether to enable auto-renewal. This parameter is required.
         */
        public Builder autoRenew(final java.lang.Boolean autoRenew) {
            this.props.autoRenew(autoRenew);
            return this;
        }
        /**
         * Property autoRenew: Specifies whether to enable auto-renewal.
         * <p>
         * @return {@code this}
         * @param autoRenew Property autoRenew: Specifies whether to enable auto-renewal. This parameter is required.
         */
        public Builder autoRenew(final com.aliyun.ros.cdk.core.IResolvable autoRenew) {
            this.props.autoRenew(autoRenew);
            return this;
        }

        /**
         * Property internetChargeType: The metering method of the pay-as-you-go Internet access package.
         * <p>
         * Valid values:
         * PayByTraffic: pay-by-data-transfer.
         * PayByBandwidth: pay-by-bandwidth.
         * Default value: PayByTraffic.
         * <p>
         * @return {@code this}
         * @param internetChargeType Property internetChargeType: The metering method of the pay-as-you-go Internet access package. This parameter is required.
         */
        public Builder internetChargeType(final java.lang.String internetChargeType) {
            this.props.internetChargeType(internetChargeType);
            return this;
        }
        /**
         * Property internetChargeType: The metering method of the pay-as-you-go Internet access package.
         * <p>
         * Valid values:
         * PayByTraffic: pay-by-data-transfer.
         * PayByBandwidth: pay-by-bandwidth.
         * Default value: PayByTraffic.
         * <p>
         * @return {@code this}
         * @param internetChargeType Property internetChargeType: The metering method of the pay-as-you-go Internet access package. This parameter is required.
         */
        public Builder internetChargeType(final com.aliyun.ros.cdk.core.IResolvable internetChargeType) {
            this.props.internetChargeType(internetChargeType);
            return this;
        }

        /**
         * Property payType: The billing method of the Internet access package.
         * <p>
         * Enumeration Value:
         * PostPaid
         * PrePaid
         * <p>
         * @return {@code this}
         * @param payType Property payType: The billing method of the Internet access package. This parameter is required.
         */
        public Builder payType(final java.lang.String payType) {
            this.props.payType(payType);
            return this;
        }
        /**
         * Property payType: The billing method of the Internet access package.
         * <p>
         * Enumeration Value:
         * PostPaid
         * PrePaid
         * <p>
         * @return {@code this}
         * @param payType Property payType: The billing method of the Internet access package. This parameter is required.
         */
        public Builder payType(final com.aliyun.ros.cdk.core.IResolvable payType) {
            this.props.payType(payType);
            return this;
        }

        /**
         * Property period: The duration of the Internet access package.
         * <p>
         * @return {@code this}
         * @param period Property period: The duration of the Internet access package. This parameter is required.
         */
        public Builder period(final java.lang.Number period) {
            this.props.period(period);
            return this;
        }
        /**
         * Property period: The duration of the Internet access package.
         * <p>
         * @return {@code this}
         * @param period Property period: The duration of the Internet access package. This parameter is required.
         */
        public Builder period(final com.aliyun.ros.cdk.core.IResolvable period) {
            this.props.period(period);
            return this;
        }

        /**
         * Property periodUnit: The unit of duration that you want to use for the Internet access package.
         * <p>
         * Enumeration Value:
         * MonthYearWeek
         * <p>
         * @return {@code this}
         * @param periodUnit Property periodUnit: The unit of duration that you want to use for the Internet access package. This parameter is required.
         */
        public Builder periodUnit(final java.lang.String periodUnit) {
            this.props.periodUnit(periodUnit);
            return this;
        }
        /**
         * Property periodUnit: The unit of duration that you want to use for the Internet access package.
         * <p>
         * Enumeration Value:
         * MonthYearWeek
         * <p>
         * @return {@code this}
         * @param periodUnit Property periodUnit: The unit of duration that you want to use for the Internet access package. This parameter is required.
         */
        public Builder periodUnit(final com.aliyun.ros.cdk.core.IResolvable periodUnit) {
            this.props.periodUnit(periodUnit);
            return this;
        }

        /**
         * Property promotionId: The ID of the sales promotion.
         * <p>
         * @return {@code this}
         * @param promotionId Property promotionId: The ID of the sales promotion. This parameter is required.
         */
        public Builder promotionId(final java.lang.String promotionId) {
            this.props.promotionId(promotionId);
            return this;
        }
        /**
         * Property promotionId: The ID of the sales promotion.
         * <p>
         * @return {@code this}
         * @param promotionId Property promotionId: The ID of the sales promotion. This parameter is required.
         */
        public Builder promotionId(final com.aliyun.ros.cdk.core.IResolvable promotionId) {
            this.props.promotionId(promotionId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ecd.NetworkPackage}.
         */
        @Override
        public com.aliyun.ros.cdk.ecd.NetworkPackage build() {
            return new com.aliyun.ros.cdk.ecd.NetworkPackage(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
