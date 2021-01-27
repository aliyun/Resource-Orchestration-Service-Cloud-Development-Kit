package com.aliyun.ros.cdk.pvtz;

/**
 * A ROS template type:  `ALIYUN::PVTZ::Zone`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:34.291Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.pvtz.$Module.class, fqn = "@alicloud/ros-cdk-pvtz.RosZone")
public class RosZone extends com.aliyun.ros.cdk.core.RosResource {

    protected RosZone(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosZone(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.pvtz.RosZone.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new `ALIYUN::PVTZ::Zone`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosZone(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pvtz.RosZoneProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneId() {
        return software.amazon.jsii.Kernel.get(this, "attrZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
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
    public @org.jetbrains.annotations.NotNull java.lang.String getZoneName() {
        return software.amazon.jsii.Kernel.get(this, "zoneName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setZoneName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "zoneName", java.util.Objects.requireNonNull(value, "zoneName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getProxyPattern() {
        return software.amazon.jsii.Kernel.get(this, "proxyPattern", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setProxyPattern(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "proxyPattern", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getRemark() {
        return software.amazon.jsii.Kernel.get(this, "remark", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setRemark(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "remark", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.pvtz.RosZone}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.pvtz.RosZone> {
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
        private final com.aliyun.ros.cdk.pvtz.RosZoneProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.pvtz.RosZoneProps.Builder();
        }

        /**
         * @return {@code this}
         * @param zoneName This parameter is required.
         */
        public Builder zoneName(final java.lang.String zoneName) {
            this.props.zoneName(zoneName);
            return this;
        }

        /**
         * @return {@code this}
         * @param proxyPattern This parameter is required.
         */
        public Builder proxyPattern(final java.lang.String proxyPattern) {
            this.props.proxyPattern(proxyPattern);
            return this;
        }

        /**
         * @return {@code this}
         * @param remark This parameter is required.
         */
        public Builder remark(final java.lang.String remark) {
            this.props.remark(remark);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.pvtz.RosZone}.
         */
        @Override
        public com.aliyun.ros.cdk.pvtz.RosZone build() {
            return new com.aliyun.ros.cdk.pvtz.RosZone(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
