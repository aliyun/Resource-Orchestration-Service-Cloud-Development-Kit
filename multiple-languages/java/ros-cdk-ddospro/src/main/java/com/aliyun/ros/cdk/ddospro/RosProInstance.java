package com.aliyun.ros.cdk.ddospro;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::DDoSPro::ProInstance</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-03-01T09:16:51.163Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ddospro.$Module.class, fqn = "@alicloud/ros-cdk-ddospro.RosProInstance")
public class RosProInstance extends com.aliyun.ros.cdk.core.RosResource {

    protected RosProInstance(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosProInstance(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.ddospro.RosProInstance.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosProInstance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ddospro.RosProInstanceProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getAddressType() {
        return software.amazon.jsii.Kernel.get(this, "addressType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAddressType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "addressType", value);
    }

    /**
     */
    public void setAddressType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "addressType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getBandwidth() {
        return software.amazon.jsii.Kernel.get(this, "bandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setBandwidth(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "bandwidth", value);
    }

    /**
     */
    public void setBandwidth(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "bandwidth", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getBaseBandwidth() {
        return software.amazon.jsii.Kernel.get(this, "baseBandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setBaseBandwidth(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "baseBandwidth", value);
    }

    /**
     */
    public void setBaseBandwidth(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "baseBandwidth", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getBurstBandwidthMode() {
        return software.amazon.jsii.Kernel.get(this, "burstBandwidthMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setBurstBandwidthMode(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "burstBandwidthMode", value);
    }

    /**
     */
    public void setBurstBandwidthMode(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "burstBandwidthMode", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDomainCount() {
        return software.amazon.jsii.Kernel.get(this, "domainCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDomainCount(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "domainCount", value);
    }

    /**
     */
    public void setDomainCount(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "domainCount", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEdition() {
        return software.amazon.jsii.Kernel.get(this, "edition", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEdition(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "edition", value);
    }

    /**
     */
    public void setEdition(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "edition", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getFunctionVersion() {
        return software.amazon.jsii.Kernel.get(this, "functionVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setFunctionVersion(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "functionVersion", value);
    }

    /**
     */
    public void setFunctionVersion(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "functionVersion", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getNormalQps() {
        return software.amazon.jsii.Kernel.get(this, "normalQps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setNormalQps(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "normalQps", value);
    }

    /**
     */
    public void setNormalQps(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "normalQps", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPeriod() {
        return software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPeriod(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "period", value);
    }

    /**
     */
    public void setPeriod(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "period", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPeriodUnit() {
        return software.amazon.jsii.Kernel.get(this, "periodUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPeriodUnit(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "periodUnit", value);
    }

    /**
     */
    public void setPeriodUnit(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "periodUnit", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPortCount() {
        return software.amazon.jsii.Kernel.get(this, "portCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPortCount(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "portCount", value);
    }

    /**
     */
    public void setPortCount(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "portCount", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getServiceBandwidth() {
        return software.amazon.jsii.Kernel.get(this, "serviceBandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setServiceBandwidth(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "serviceBandwidth", value);
    }

    /**
     */
    public void setServiceBandwidth(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "serviceBandwidth", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getServicePartner() {
        return software.amazon.jsii.Kernel.get(this, "servicePartner", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setServicePartner(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "servicePartner", value);
    }

    /**
     */
    public void setServicePartner(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "servicePartner", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ddospro.RosProInstance}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ddospro.RosProInstance> {
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
        private final com.aliyun.ros.cdk.ddospro.RosProInstanceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ddospro.RosProInstanceProps.Builder();
        }

        /**
         * @return {@code this}
         * @param addressType This parameter is required.
         */
        public Builder addressType(final java.lang.String addressType) {
            this.props.addressType(addressType);
            return this;
        }
        /**
         * @return {@code this}
         * @param addressType This parameter is required.
         */
        public Builder addressType(final com.aliyun.ros.cdk.core.IResolvable addressType) {
            this.props.addressType(addressType);
            return this;
        }

        /**
         * @return {@code this}
         * @param bandwidth This parameter is required.
         */
        public Builder bandwidth(final java.lang.Number bandwidth) {
            this.props.bandwidth(bandwidth);
            return this;
        }
        /**
         * @return {@code this}
         * @param bandwidth This parameter is required.
         */
        public Builder bandwidth(final com.aliyun.ros.cdk.core.IResolvable bandwidth) {
            this.props.bandwidth(bandwidth);
            return this;
        }

        /**
         * @return {@code this}
         * @param baseBandwidth This parameter is required.
         */
        public Builder baseBandwidth(final java.lang.Number baseBandwidth) {
            this.props.baseBandwidth(baseBandwidth);
            return this;
        }
        /**
         * @return {@code this}
         * @param baseBandwidth This parameter is required.
         */
        public Builder baseBandwidth(final com.aliyun.ros.cdk.core.IResolvable baseBandwidth) {
            this.props.baseBandwidth(baseBandwidth);
            return this;
        }

        /**
         * @return {@code this}
         * @param burstBandwidthMode This parameter is required.
         */
        public Builder burstBandwidthMode(final java.lang.String burstBandwidthMode) {
            this.props.burstBandwidthMode(burstBandwidthMode);
            return this;
        }
        /**
         * @return {@code this}
         * @param burstBandwidthMode This parameter is required.
         */
        public Builder burstBandwidthMode(final com.aliyun.ros.cdk.core.IResolvable burstBandwidthMode) {
            this.props.burstBandwidthMode(burstBandwidthMode);
            return this;
        }

        /**
         * @return {@code this}
         * @param domainCount This parameter is required.
         */
        public Builder domainCount(final java.lang.Number domainCount) {
            this.props.domainCount(domainCount);
            return this;
        }
        /**
         * @return {@code this}
         * @param domainCount This parameter is required.
         */
        public Builder domainCount(final com.aliyun.ros.cdk.core.IResolvable domainCount) {
            this.props.domainCount(domainCount);
            return this;
        }

        /**
         * @return {@code this}
         * @param edition This parameter is required.
         */
        public Builder edition(final java.lang.String edition) {
            this.props.edition(edition);
            return this;
        }
        /**
         * @return {@code this}
         * @param edition This parameter is required.
         */
        public Builder edition(final com.aliyun.ros.cdk.core.IResolvable edition) {
            this.props.edition(edition);
            return this;
        }

        /**
         * @return {@code this}
         * @param functionVersion This parameter is required.
         */
        public Builder functionVersion(final java.lang.String functionVersion) {
            this.props.functionVersion(functionVersion);
            return this;
        }
        /**
         * @return {@code this}
         * @param functionVersion This parameter is required.
         */
        public Builder functionVersion(final com.aliyun.ros.cdk.core.IResolvable functionVersion) {
            this.props.functionVersion(functionVersion);
            return this;
        }

        /**
         * @return {@code this}
         * @param normalQps This parameter is required.
         */
        public Builder normalQps(final java.lang.Number normalQps) {
            this.props.normalQps(normalQps);
            return this;
        }
        /**
         * @return {@code this}
         * @param normalQps This parameter is required.
         */
        public Builder normalQps(final com.aliyun.ros.cdk.core.IResolvable normalQps) {
            this.props.normalQps(normalQps);
            return this;
        }

        /**
         * @return {@code this}
         * @param period This parameter is required.
         */
        public Builder period(final java.lang.Number period) {
            this.props.period(period);
            return this;
        }
        /**
         * @return {@code this}
         * @param period This parameter is required.
         */
        public Builder period(final com.aliyun.ros.cdk.core.IResolvable period) {
            this.props.period(period);
            return this;
        }

        /**
         * @return {@code this}
         * @param periodUnit This parameter is required.
         */
        public Builder periodUnit(final java.lang.String periodUnit) {
            this.props.periodUnit(periodUnit);
            return this;
        }
        /**
         * @return {@code this}
         * @param periodUnit This parameter is required.
         */
        public Builder periodUnit(final com.aliyun.ros.cdk.core.IResolvable periodUnit) {
            this.props.periodUnit(periodUnit);
            return this;
        }

        /**
         * @return {@code this}
         * @param portCount This parameter is required.
         */
        public Builder portCount(final java.lang.Number portCount) {
            this.props.portCount(portCount);
            return this;
        }
        /**
         * @return {@code this}
         * @param portCount This parameter is required.
         */
        public Builder portCount(final com.aliyun.ros.cdk.core.IResolvable portCount) {
            this.props.portCount(portCount);
            return this;
        }

        /**
         * @return {@code this}
         * @param serviceBandwidth This parameter is required.
         */
        public Builder serviceBandwidth(final java.lang.Number serviceBandwidth) {
            this.props.serviceBandwidth(serviceBandwidth);
            return this;
        }
        /**
         * @return {@code this}
         * @param serviceBandwidth This parameter is required.
         */
        public Builder serviceBandwidth(final com.aliyun.ros.cdk.core.IResolvable serviceBandwidth) {
            this.props.serviceBandwidth(serviceBandwidth);
            return this;
        }

        /**
         * @return {@code this}
         * @param servicePartner This parameter is required.
         */
        public Builder servicePartner(final java.lang.String servicePartner) {
            this.props.servicePartner(servicePartner);
            return this;
        }
        /**
         * @return {@code this}
         * @param servicePartner This parameter is required.
         */
        public Builder servicePartner(final com.aliyun.ros.cdk.core.IResolvable servicePartner) {
            this.props.servicePartner(servicePartner);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ddospro.RosProInstance}.
         */
        @Override
        public com.aliyun.ros.cdk.ddospro.RosProInstance build() {
            return new com.aliyun.ros.cdk.ddospro.RosProInstance(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
