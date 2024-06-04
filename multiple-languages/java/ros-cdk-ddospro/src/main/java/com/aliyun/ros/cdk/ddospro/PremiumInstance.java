package com.aliyun.ros.cdk.ddospro;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::DDoSPro::PremiumInstance</code>, which is used to create an Anti-DDoS Proxy (Outside Chinese Mainland) instance.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-04T02:47:53.753Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ddospro.$Module.class, fqn = "@alicloud/ros-cdk-ddospro.PremiumInstance")
public class PremiumInstance extends com.aliyun.ros.cdk.core.Resource {

    protected PremiumInstance(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected PremiumInstance(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public PremiumInstance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.ddospro.PremiumInstanceProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public PremiumInstance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.ddospro.PremiumInstanceProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public PremiumInstance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute InstanceId: The ID of the instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ddospro.PremiumInstanceProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ddospro.PremiumInstanceProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ddospro.PremiumInstanceProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ddospro.PremiumInstance}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ddospro.PremiumInstance> {
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
        private com.aliyun.ros.cdk.ddospro.PremiumInstanceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property burstBandwidthMode: The metering method of the 95th percentile burstable clean bandwidth.
         * <p>
         * Valid values:
         * 0: disables the burstable clean bandwidth feature.
         * 1: enables the burstable clean bandwidth feature and uses the daily 95th percentile metering method.
         * 2: enables the burstable clean bandwidth feature and uses the monthly 95th percentile metering method.
         * <p>
         * @return {@code this}
         * @param burstBandwidthMode Property burstBandwidthMode: The metering method of the 95th percentile burstable clean bandwidth. This parameter is required.
         */
        public Builder burstBandwidthMode(final java.lang.String burstBandwidthMode) {
            this.props().burstBandwidthMode(burstBandwidthMode);
            return this;
        }
        /**
         * Property burstBandwidthMode: The metering method of the 95th percentile burstable clean bandwidth.
         * <p>
         * Valid values:
         * 0: disables the burstable clean bandwidth feature.
         * 1: enables the burstable clean bandwidth feature and uses the daily 95th percentile metering method.
         * 2: enables the burstable clean bandwidth feature and uses the monthly 95th percentile metering method.
         * <p>
         * @return {@code this}
         * @param burstBandwidthMode Property burstBandwidthMode: The metering method of the 95th percentile burstable clean bandwidth. This parameter is required.
         */
        public Builder burstBandwidthMode(final com.aliyun.ros.cdk.core.IResolvable burstBandwidthMode) {
            this.props().burstBandwidthMode(burstBandwidthMode);
            return this;
        }

        /**
         * Property domainCount: The number of domain names that you want to protect.
         * <p>
         * The value of DomainCount varies based on the value of ProductPlan.
         * If you set ProductPlan to 0, you can set DomainCount to a value that ranges from 10 to 200. The value must be a multiple of 10.
         * If you set ProductPlan to 1, you can set DomainCount to a value that ranges from 10 to 200. The value must be a multiple of 10.
         * If you set ProductPlan to 2, you do not need to specify this parameter.
         * If you set ProductPlan to 3, you can set DomainCount to a value that ranges from 10 to 200. The value must be a multiple of 10.
         * <p>
         * @return {@code this}
         * @param domainCount Property domainCount: The number of domain names that you want to protect. This parameter is required.
         */
        public Builder domainCount(final java.lang.Number domainCount) {
            this.props().domainCount(domainCount);
            return this;
        }
        /**
         * Property domainCount: The number of domain names that you want to protect.
         * <p>
         * The value of DomainCount varies based on the value of ProductPlan.
         * If you set ProductPlan to 0, you can set DomainCount to a value that ranges from 10 to 200. The value must be a multiple of 10.
         * If you set ProductPlan to 1, you can set DomainCount to a value that ranges from 10 to 200. The value must be a multiple of 10.
         * If you set ProductPlan to 2, you do not need to specify this parameter.
         * If you set ProductPlan to 3, you can set DomainCount to a value that ranges from 10 to 200. The value must be a multiple of 10.
         * <p>
         * @return {@code this}
         * @param domainCount Property domainCount: The number of domain names that you want to protect. This parameter is required.
         */
        public Builder domainCount(final com.aliyun.ros.cdk.core.IResolvable domainCount) {
            this.props().domainCount(domainCount);
            return this;
        }

        /**
         * Property functionVersion: The function plan of the instance.
         * <p>
         * Valid values:
         * 0: the Standard function plan
         * 1: the Enhanced function plan.
         * <p>
         * @return {@code this}
         * @param functionVersion Property functionVersion: The function plan of the instance. This parameter is required.
         */
        public Builder functionVersion(final java.lang.String functionVersion) {
            this.props().functionVersion(functionVersion);
            return this;
        }
        /**
         * Property functionVersion: The function plan of the instance.
         * <p>
         * Valid values:
         * 0: the Standard function plan
         * 1: the Enhanced function plan.
         * <p>
         * @return {@code this}
         * @param functionVersion Property functionVersion: The function plan of the instance. This parameter is required.
         */
        public Builder functionVersion(final com.aliyun.ros.cdk.core.IResolvable functionVersion) {
            this.props().functionVersion(functionVersion);
            return this;
        }

        /**
         * Property normalBandwidth: The clean bandwidth provided by the instance.
         * <p>
         * Unit: Mbit/s.
         * The value of NormalBandwidth varies based on the value of ProductPlan.
         * If you set ProductPlan to 0, you can set NormalBandwidth to 100, 150, 200, 250, or 300.
         * If you set ProductPlan to 1, you can set NormalBandwidth to 100, 150, 200, 250, or 300.
         * If you set ProductPlan to 2, you can set NormalBandwidth to 10, 20, 30, 40, 50, 60, 70, 80, 90, or 100.
         * If you set ProductPlan to 3, you can set NormalBandwidth to 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 150, or 200.
         * <p>
         * @return {@code this}
         * @param normalBandwidth Property normalBandwidth: The clean bandwidth provided by the instance. This parameter is required.
         */
        public Builder normalBandwidth(final java.lang.Number normalBandwidth) {
            this.props().normalBandwidth(normalBandwidth);
            return this;
        }
        /**
         * Property normalBandwidth: The clean bandwidth provided by the instance.
         * <p>
         * Unit: Mbit/s.
         * The value of NormalBandwidth varies based on the value of ProductPlan.
         * If you set ProductPlan to 0, you can set NormalBandwidth to 100, 150, 200, 250, or 300.
         * If you set ProductPlan to 1, you can set NormalBandwidth to 100, 150, 200, 250, or 300.
         * If you set ProductPlan to 2, you can set NormalBandwidth to 10, 20, 30, 40, 50, 60, 70, 80, 90, or 100.
         * If you set ProductPlan to 3, you can set NormalBandwidth to 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 150, or 200.
         * <p>
         * @return {@code this}
         * @param normalBandwidth Property normalBandwidth: The clean bandwidth provided by the instance. This parameter is required.
         */
        public Builder normalBandwidth(final com.aliyun.ros.cdk.core.IResolvable normalBandwidth) {
            this.props().normalBandwidth(normalBandwidth);
            return this;
        }

        /**
         * Property normalQps: The clean QPS provided by the instance.
         * <p>
         * The value of NormalQps varies based on the value of ProductPlan.
         * If you set ProductPlan to 0, you can set NormalQps to a value that ranges from 500 to 100000. The value must be a multiple of 100.
         * If you set ProductPlan to 1, you can set NormalQps to a value that ranges from 1000 to 100000. The value must be a multiple of 100.
         * If you set ProductPlan to 2, you do not need to specify this parameter.
         * If you set ProductPlan to 3, you can set NormalQps to a value that ranges from 500 to 100000. The value must be a multiple of 100.
         * <p>
         * @return {@code this}
         * @param normalQps Property normalQps: The clean QPS provided by the instance. This parameter is required.
         */
        public Builder normalQps(final java.lang.Number normalQps) {
            this.props().normalQps(normalQps);
            return this;
        }
        /**
         * Property normalQps: The clean QPS provided by the instance.
         * <p>
         * The value of NormalQps varies based on the value of ProductPlan.
         * If you set ProductPlan to 0, you can set NormalQps to a value that ranges from 500 to 100000. The value must be a multiple of 100.
         * If you set ProductPlan to 1, you can set NormalQps to a value that ranges from 1000 to 100000. The value must be a multiple of 100.
         * If you set ProductPlan to 2, you do not need to specify this parameter.
         * If you set ProductPlan to 3, you can set NormalQps to a value that ranges from 500 to 100000. The value must be a multiple of 100.
         * <p>
         * @return {@code this}
         * @param normalQps Property normalQps: The clean QPS provided by the instance. This parameter is required.
         */
        public Builder normalQps(final com.aliyun.ros.cdk.core.IResolvable normalQps) {
            this.props().normalQps(normalQps);
            return this;
        }

        /**
         * Property period: The subscription period of the firewallIf PeriodUnit is Month, the valid range is 1, 2, 3, 4, 5, 6, 12, 24 If PeriodUnit is Year, the valid range is 1, 2.
         * <p>
         * @return {@code this}
         * @param period Property period: The subscription period of the firewallIf PeriodUnit is Month, the valid range is 1, 2, 3, 4, 5, 6, 12, 24 If PeriodUnit is Year, the valid range is 1, 2. This parameter is required.
         */
        public Builder period(final java.lang.Number period) {
            this.props().period(period);
            return this;
        }
        /**
         * Property period: The subscription period of the firewallIf PeriodUnit is Month, the valid range is 1, 2, 3, 4, 5, 6, 12, 24 If PeriodUnit is Year, the valid range is 1, 2.
         * <p>
         * @return {@code this}
         * @param period Property period: The subscription period of the firewallIf PeriodUnit is Month, the valid range is 1, 2, 3, 4, 5, 6, 12, 24 If PeriodUnit is Year, the valid range is 1, 2. This parameter is required.
         */
        public Builder period(final com.aliyun.ros.cdk.core.IResolvable period) {
            this.props().period(period);
            return this;
        }

        /**
         * Property periodUnit: The unit of the subscription duration.
         * <p>
         * Valid values:
         * Month
         * Year
         * Default value: Month.
         * <p>
         * @return {@code this}
         * @param periodUnit Property periodUnit: The unit of the subscription duration. This parameter is required.
         */
        public Builder periodUnit(final java.lang.String periodUnit) {
            this.props().periodUnit(periodUnit);
            return this;
        }
        /**
         * Property periodUnit: The unit of the subscription duration.
         * <p>
         * Valid values:
         * Month
         * Year
         * Default value: Month.
         * <p>
         * @return {@code this}
         * @param periodUnit Property periodUnit: The unit of the subscription duration. This parameter is required.
         */
        public Builder periodUnit(final com.aliyun.ros.cdk.core.IResolvable periodUnit) {
            this.props().periodUnit(periodUnit);
            return this;
        }

        /**
         * Property portCount: The number of ports that you want to protect.
         * <p>
         * The value of PortCount varies based on the value of ProductPlan.
         * If you set ProductPlan to 0, you can set PortCount to a value that ranges from 5 to 400. The value must be a multiple of 5.
         * If you set ProductPlan to 1, you can set PortCount to a value that ranges from 5 to 400. The value must be a multiple of 5.
         * If you set ProductPlan to 2, you do not need to specify this parameter.
         * If you set ProductPlan to 3, you can set PortCount to a value that ranges from 5 to 400. The value must be a multiple of 5.
         * <p>
         * @return {@code this}
         * @param portCount Property portCount: The number of ports that you want to protect. This parameter is required.
         */
        public Builder portCount(final java.lang.Number portCount) {
            this.props().portCount(portCount);
            return this;
        }
        /**
         * Property portCount: The number of ports that you want to protect.
         * <p>
         * The value of PortCount varies based on the value of ProductPlan.
         * If you set ProductPlan to 0, you can set PortCount to a value that ranges from 5 to 400. The value must be a multiple of 5.
         * If you set ProductPlan to 1, you can set PortCount to a value that ranges from 5 to 400. The value must be a multiple of 5.
         * If you set ProductPlan to 2, you do not need to specify this parameter.
         * If you set ProductPlan to 3, you can set PortCount to a value that ranges from 5 to 400. The value must be a multiple of 5.
         * <p>
         * @return {@code this}
         * @param portCount Property portCount: The number of ports that you want to protect. This parameter is required.
         */
        public Builder portCount(final com.aliyun.ros.cdk.core.IResolvable portCount) {
            this.props().portCount(portCount);
            return this;
        }

        /**
         * Property productPlan: The mitigation plan of the instance.
         * <p>
         * Valid values:
         * 0: the Insurance mitigation plan
         * 1: the Unlimited mitigation plan
         * 2: the Chinese Mainland Acceleration (CMA) mitigation plan
         * 3: the Secure Chinese Mainland Acceleration (Sec-CMA) mitigation plan
         * <p>
         * @return {@code this}
         * @param productPlan Property productPlan: The mitigation plan of the instance. This parameter is required.
         */
        public Builder productPlan(final java.lang.String productPlan) {
            this.props().productPlan(productPlan);
            return this;
        }
        /**
         * Property productPlan: The mitigation plan of the instance.
         * <p>
         * Valid values:
         * 0: the Insurance mitigation plan
         * 1: the Unlimited mitigation plan
         * 2: the Chinese Mainland Acceleration (CMA) mitigation plan
         * 3: the Secure Chinese Mainland Acceleration (Sec-CMA) mitigation plan
         * <p>
         * @return {@code this}
         * @param productPlan Property productPlan: The mitigation plan of the instance. This parameter is required.
         */
        public Builder productPlan(final com.aliyun.ros.cdk.core.IResolvable productPlan) {
            this.props().productPlan(productPlan);
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
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.ddospro.RosPremiumInstance.TagsProperty> tags) {
            this.props().tags(tags);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ddospro.PremiumInstance}.
         */
        @Override
        public com.aliyun.ros.cdk.ddospro.PremiumInstance build() {
            return new com.aliyun.ros.cdk.ddospro.PremiumInstance(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.ddospro.PremiumInstanceProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.ddospro.PremiumInstanceProps.Builder();
            }
            return this.props;
        }
    }
}
