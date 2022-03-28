package com.aliyun.ros.cdk.sag;

/**
 * A ROS template type:  `ALIYUN::SAG::GrantCcnToCen`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.55.1 (build 07d2d90)", date = "2022-03-28T07:49:03.545Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sag.$Module.class, fqn = "@alicloud/ros-cdk-sag.RosGrantCcnToCen")
public class RosGrantCcnToCen extends com.aliyun.ros.cdk.core.RosResource {

    protected RosGrantCcnToCen(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosGrantCcnToCen(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.sag.RosGrantCcnToCen.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new `ALIYUN::SAG::GrantCcnToCen`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosGrantCcnToCen(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sag.RosGrantCcnToCenProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCcnInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrCcnInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCenInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrCenInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getCcnInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "ccnInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCcnInstanceId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "ccnInstanceId", java.util.Objects.requireNonNull(value, "ccnInstanceId is required"));
    }

    /**
     */
    public void setCcnInstanceId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ccnInstanceId", java.util.Objects.requireNonNull(value, "ccnInstanceId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getCenInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "cenInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCenInstanceId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "cenInstanceId", java.util.Objects.requireNonNull(value, "cenInstanceId is required"));
    }

    /**
     */
    public void setCenInstanceId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "cenInstanceId", java.util.Objects.requireNonNull(value, "cenInstanceId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getCenUid() {
        return software.amazon.jsii.Kernel.get(this, "cenUid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCenUid(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "cenUid", java.util.Objects.requireNonNull(value, "cenUid is required"));
    }

    /**
     */
    public void setCenUid(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "cenUid", java.util.Objects.requireNonNull(value, "cenUid is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.sag.RosGrantCcnToCen}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.sag.RosGrantCcnToCen> {
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
        private final com.aliyun.ros.cdk.sag.RosGrantCcnToCenProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.sag.RosGrantCcnToCenProps.Builder();
        }

        /**
         * @return {@code this}
         * @param ccnInstanceId This parameter is required.
         */
        public Builder ccnInstanceId(final java.lang.String ccnInstanceId) {
            this.props.ccnInstanceId(ccnInstanceId);
            return this;
        }
        /**
         * @return {@code this}
         * @param ccnInstanceId This parameter is required.
         */
        public Builder ccnInstanceId(final com.aliyun.ros.cdk.core.IResolvable ccnInstanceId) {
            this.props.ccnInstanceId(ccnInstanceId);
            return this;
        }

        /**
         * @return {@code this}
         * @param cenInstanceId This parameter is required.
         */
        public Builder cenInstanceId(final java.lang.String cenInstanceId) {
            this.props.cenInstanceId(cenInstanceId);
            return this;
        }
        /**
         * @return {@code this}
         * @param cenInstanceId This parameter is required.
         */
        public Builder cenInstanceId(final com.aliyun.ros.cdk.core.IResolvable cenInstanceId) {
            this.props.cenInstanceId(cenInstanceId);
            return this;
        }

        /**
         * @return {@code this}
         * @param cenUid This parameter is required.
         */
        public Builder cenUid(final java.lang.String cenUid) {
            this.props.cenUid(cenUid);
            return this;
        }
        /**
         * @return {@code this}
         * @param cenUid This parameter is required.
         */
        public Builder cenUid(final com.aliyun.ros.cdk.core.IResolvable cenUid) {
            this.props.cenUid(cenUid);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.sag.RosGrantCcnToCen}.
         */
        @Override
        public com.aliyun.ros.cdk.sag.RosGrantCcnToCen build() {
            return new com.aliyun.ros.cdk.sag.RosGrantCcnToCen(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
