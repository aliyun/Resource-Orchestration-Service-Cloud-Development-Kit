package com.aliyun.ros.cdk.cen;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::CEN::CenBandwidthLimit</code>, which is used to configure the cross-region interconnection bandwidth in a bandwidth plan.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-22T08:56:18.151Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cen.$Module.class, fqn = "@alicloud/ros-cdk-cen.RosCenBandwidthLimit")
public class RosCenBandwidthLimit extends com.aliyun.ros.cdk.core.RosResource {

    protected RosCenBandwidthLimit(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosCenBandwidthLimit(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.cen.RosCenBandwidthLimit.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosCenBandwidthLimit(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cen.RosCenBandwidthLimitProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getBandwidthLimit() {
        return software.amazon.jsii.Kernel.get(this, "bandwidthLimit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setBandwidthLimit(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "bandwidthLimit", java.util.Objects.requireNonNull(value, "bandwidthLimit is required"));
    }

    /**
     */
    public void setBandwidthLimit(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "bandwidthLimit", java.util.Objects.requireNonNull(value, "bandwidthLimit is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getCenId() {
        return software.amazon.jsii.Kernel.get(this, "cenId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCenId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "cenId", java.util.Objects.requireNonNull(value, "cenId is required"));
    }

    /**
     */
    public void setCenId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "cenId", java.util.Objects.requireNonNull(value, "cenId is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getLocalRegionId() {
        return software.amazon.jsii.Kernel.get(this, "localRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLocalRegionId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "localRegionId", java.util.Objects.requireNonNull(value, "localRegionId is required"));
    }

    /**
     */
    public void setLocalRegionId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "localRegionId", java.util.Objects.requireNonNull(value, "localRegionId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getOppositeRegionId() {
        return software.amazon.jsii.Kernel.get(this, "oppositeRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setOppositeRegionId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "oppositeRegionId", java.util.Objects.requireNonNull(value, "oppositeRegionId is required"));
    }

    /**
     */
    public void setOppositeRegionId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "oppositeRegionId", java.util.Objects.requireNonNull(value, "oppositeRegionId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getBandwidthType() {
        return software.amazon.jsii.Kernel.get(this, "bandwidthType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setBandwidthType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "bandwidthType", value);
    }

    /**
     */
    public void setBandwidthType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "bandwidthType", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cen.RosCenBandwidthLimit}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cen.RosCenBandwidthLimit> {
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
        private final com.aliyun.ros.cdk.cen.RosCenBandwidthLimitProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cen.RosCenBandwidthLimitProps.Builder();
        }

        /**
         * @return {@code this}
         * @param bandwidthLimit This parameter is required.
         */
        public Builder bandwidthLimit(final java.lang.Number bandwidthLimit) {
            this.props.bandwidthLimit(bandwidthLimit);
            return this;
        }
        /**
         * @return {@code this}
         * @param bandwidthLimit This parameter is required.
         */
        public Builder bandwidthLimit(final com.aliyun.ros.cdk.core.IResolvable bandwidthLimit) {
            this.props.bandwidthLimit(bandwidthLimit);
            return this;
        }

        /**
         * @return {@code this}
         * @param cenId This parameter is required.
         */
        public Builder cenId(final java.lang.String cenId) {
            this.props.cenId(cenId);
            return this;
        }
        /**
         * @return {@code this}
         * @param cenId This parameter is required.
         */
        public Builder cenId(final com.aliyun.ros.cdk.core.IResolvable cenId) {
            this.props.cenId(cenId);
            return this;
        }

        /**
         * @return {@code this}
         * @param localRegionId This parameter is required.
         */
        public Builder localRegionId(final java.lang.String localRegionId) {
            this.props.localRegionId(localRegionId);
            return this;
        }
        /**
         * @return {@code this}
         * @param localRegionId This parameter is required.
         */
        public Builder localRegionId(final com.aliyun.ros.cdk.core.IResolvable localRegionId) {
            this.props.localRegionId(localRegionId);
            return this;
        }

        /**
         * @return {@code this}
         * @param oppositeRegionId This parameter is required.
         */
        public Builder oppositeRegionId(final java.lang.String oppositeRegionId) {
            this.props.oppositeRegionId(oppositeRegionId);
            return this;
        }
        /**
         * @return {@code this}
         * @param oppositeRegionId This parameter is required.
         */
        public Builder oppositeRegionId(final com.aliyun.ros.cdk.core.IResolvable oppositeRegionId) {
            this.props.oppositeRegionId(oppositeRegionId);
            return this;
        }

        /**
         * @return {@code this}
         * @param bandwidthType This parameter is required.
         */
        public Builder bandwidthType(final java.lang.String bandwidthType) {
            this.props.bandwidthType(bandwidthType);
            return this;
        }
        /**
         * @return {@code this}
         * @param bandwidthType This parameter is required.
         */
        public Builder bandwidthType(final com.aliyun.ros.cdk.core.IResolvable bandwidthType) {
            this.props.bandwidthType(bandwidthType);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cen.RosCenBandwidthLimit}.
         */
        @Override
        public com.aliyun.ros.cdk.cen.RosCenBandwidthLimit build() {
            return new com.aliyun.ros.cdk.cen.RosCenBandwidthLimit(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
