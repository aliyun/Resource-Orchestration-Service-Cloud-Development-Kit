package com.aliyun.ros.cdk.ga;

/**
 * A ROS template type:  `ALIYUN::GA::BandwidthPackageAcceleratorAddition`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.53.0 (build c071d26)", date = "2022-02-11T01:44:07.924Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ga.$Module.class, fqn = "@alicloud/ros-cdk-ga.RosBandwidthPackageAcceleratorAddition")
public class RosBandwidthPackageAcceleratorAddition extends com.aliyun.ros.cdk.core.RosResource {

    protected RosBandwidthPackageAcceleratorAddition(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosBandwidthPackageAcceleratorAddition(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.ga.RosBandwidthPackageAcceleratorAddition.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new `ALIYUN::GA::BandwidthPackageAcceleratorAddition`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosBandwidthPackageAcceleratorAddition(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ga.RosBandwidthPackageAcceleratorAdditionProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAcceleratorId() {
        return software.amazon.jsii.Kernel.get(this, "attrAcceleratorId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrBandwidthPackageId() {
        return software.amazon.jsii.Kernel.get(this, "attrBandwidthPackageId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAcceleratorId() {
        return software.amazon.jsii.Kernel.get(this, "acceleratorId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAcceleratorId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "acceleratorId", java.util.Objects.requireNonNull(value, "acceleratorId is required"));
    }

    /**
     */
    public void setAcceleratorId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "acceleratorId", java.util.Objects.requireNonNull(value, "acceleratorId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getBandwidthPackageId() {
        return software.amazon.jsii.Kernel.get(this, "bandwidthPackageId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setBandwidthPackageId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "bandwidthPackageId", java.util.Objects.requireNonNull(value, "bandwidthPackageId is required"));
    }

    /**
     */
    public void setBandwidthPackageId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "bandwidthPackageId", java.util.Objects.requireNonNull(value, "bandwidthPackageId is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ga.RosBandwidthPackageAcceleratorAddition}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ga.RosBandwidthPackageAcceleratorAddition> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope - scope in which this resource is defined. This parameter is required.
         * @param id - scoped id of the resource. This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.ga.RosBandwidthPackageAcceleratorAdditionProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ga.RosBandwidthPackageAcceleratorAdditionProps.Builder();
        }

        /**
         * @return {@code this}
         * @param acceleratorId This parameter is required.
         */
        public Builder acceleratorId(final java.lang.String acceleratorId) {
            this.props.acceleratorId(acceleratorId);
            return this;
        }
        /**
         * @return {@code this}
         * @param acceleratorId This parameter is required.
         */
        public Builder acceleratorId(final com.aliyun.ros.cdk.core.IResolvable acceleratorId) {
            this.props.acceleratorId(acceleratorId);
            return this;
        }

        /**
         * @return {@code this}
         * @param bandwidthPackageId This parameter is required.
         */
        public Builder bandwidthPackageId(final java.lang.String bandwidthPackageId) {
            this.props.bandwidthPackageId(bandwidthPackageId);
            return this;
        }
        /**
         * @return {@code this}
         * @param bandwidthPackageId This parameter is required.
         */
        public Builder bandwidthPackageId(final com.aliyun.ros.cdk.core.IResolvable bandwidthPackageId) {
            this.props.bandwidthPackageId(bandwidthPackageId);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.ga.RosBandwidthPackageAcceleratorAddition}.
         */
        @Override
        public com.aliyun.ros.cdk.ga.RosBandwidthPackageAcceleratorAddition build() {
            return new com.aliyun.ros.cdk.ga.RosBandwidthPackageAcceleratorAddition(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
