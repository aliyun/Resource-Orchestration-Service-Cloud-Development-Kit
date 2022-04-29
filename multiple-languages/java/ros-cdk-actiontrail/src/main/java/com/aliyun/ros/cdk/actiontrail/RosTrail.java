package com.aliyun.ros.cdk.actiontrail;

/**
 * A ROS template type:  `ALIYUN::ACTIONTRAIL::Trail`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.57.0 (build f614666)", date = "2022-04-29T01:47:27.621Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.actiontrail.$Module.class, fqn = "@alicloud/ros-cdk-actiontrail.RosTrail")
public class RosTrail extends com.aliyun.ros.cdk.core.RosResource {

    protected RosTrail(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosTrail(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.actiontrail.RosTrail.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new `ALIYUN::ACTIONTRAIL::Trail`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosTrail(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.actiontrail.RosTrailProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrName() {
        return software.amazon.jsii.Kernel.get(this, "attrName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getName() {
        return software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "name", java.util.Objects.requireNonNull(value, "name is required"));
    }

    /**
     */
    public void setName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "name", java.util.Objects.requireNonNull(value, "name is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getOssBucketName() {
        return software.amazon.jsii.Kernel.get(this, "ossBucketName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setOssBucketName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "ossBucketName", java.util.Objects.requireNonNull(value, "ossBucketName is required"));
    }

    /**
     */
    public void setOssBucketName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ossBucketName", java.util.Objects.requireNonNull(value, "ossBucketName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getRoleName() {
        return software.amazon.jsii.Kernel.get(this, "roleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRoleName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "roleName", java.util.Objects.requireNonNull(value, "roleName is required"));
    }

    /**
     */
    public void setRoleName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "roleName", java.util.Objects.requireNonNull(value, "roleName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEventRw() {
        return software.amazon.jsii.Kernel.get(this, "eventRw", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEventRw(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "eventRw", value);
    }

    /**
     */
    public void setEventRw(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "eventRw", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getOssKeyPrefix() {
        return software.amazon.jsii.Kernel.get(this, "ossKeyPrefix", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setOssKeyPrefix(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "ossKeyPrefix", value);
    }

    /**
     */
    public void setOssKeyPrefix(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ossKeyPrefix", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSlsProjectArn() {
        return software.amazon.jsii.Kernel.get(this, "slsProjectArn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSlsProjectArn(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "slsProjectArn", value);
    }

    /**
     */
    public void setSlsProjectArn(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "slsProjectArn", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSlsWriteRoleArn() {
        return software.amazon.jsii.Kernel.get(this, "slsWriteRoleArn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSlsWriteRoleArn(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "slsWriteRoleArn", value);
    }

    /**
     */
    public void setSlsWriteRoleArn(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "slsWriteRoleArn", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.actiontrail.RosTrail}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.actiontrail.RosTrail> {
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
        private final com.aliyun.ros.cdk.actiontrail.RosTrailProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.actiontrail.RosTrailProps.Builder();
        }

        /**
         * @return {@code this}
         * @param name This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }
        /**
         * @return {@code this}
         * @param name This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props.name(name);
            return this;
        }

        /**
         * @return {@code this}
         * @param ossBucketName This parameter is required.
         */
        public Builder ossBucketName(final java.lang.String ossBucketName) {
            this.props.ossBucketName(ossBucketName);
            return this;
        }
        /**
         * @return {@code this}
         * @param ossBucketName This parameter is required.
         */
        public Builder ossBucketName(final com.aliyun.ros.cdk.core.IResolvable ossBucketName) {
            this.props.ossBucketName(ossBucketName);
            return this;
        }

        /**
         * @return {@code this}
         * @param roleName This parameter is required.
         */
        public Builder roleName(final java.lang.String roleName) {
            this.props.roleName(roleName);
            return this;
        }
        /**
         * @return {@code this}
         * @param roleName This parameter is required.
         */
        public Builder roleName(final com.aliyun.ros.cdk.core.IResolvable roleName) {
            this.props.roleName(roleName);
            return this;
        }

        /**
         * @return {@code this}
         * @param eventRw This parameter is required.
         */
        public Builder eventRw(final java.lang.String eventRw) {
            this.props.eventRw(eventRw);
            return this;
        }
        /**
         * @return {@code this}
         * @param eventRw This parameter is required.
         */
        public Builder eventRw(final com.aliyun.ros.cdk.core.IResolvable eventRw) {
            this.props.eventRw(eventRw);
            return this;
        }

        /**
         * @return {@code this}
         * @param ossKeyPrefix This parameter is required.
         */
        public Builder ossKeyPrefix(final java.lang.String ossKeyPrefix) {
            this.props.ossKeyPrefix(ossKeyPrefix);
            return this;
        }
        /**
         * @return {@code this}
         * @param ossKeyPrefix This parameter is required.
         */
        public Builder ossKeyPrefix(final com.aliyun.ros.cdk.core.IResolvable ossKeyPrefix) {
            this.props.ossKeyPrefix(ossKeyPrefix);
            return this;
        }

        /**
         * @return {@code this}
         * @param slsProjectArn This parameter is required.
         */
        public Builder slsProjectArn(final java.lang.String slsProjectArn) {
            this.props.slsProjectArn(slsProjectArn);
            return this;
        }
        /**
         * @return {@code this}
         * @param slsProjectArn This parameter is required.
         */
        public Builder slsProjectArn(final com.aliyun.ros.cdk.core.IResolvable slsProjectArn) {
            this.props.slsProjectArn(slsProjectArn);
            return this;
        }

        /**
         * @return {@code this}
         * @param slsWriteRoleArn This parameter is required.
         */
        public Builder slsWriteRoleArn(final java.lang.String slsWriteRoleArn) {
            this.props.slsWriteRoleArn(slsWriteRoleArn);
            return this;
        }
        /**
         * @return {@code this}
         * @param slsWriteRoleArn This parameter is required.
         */
        public Builder slsWriteRoleArn(final com.aliyun.ros.cdk.core.IResolvable slsWriteRoleArn) {
            this.props.slsWriteRoleArn(slsWriteRoleArn);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.actiontrail.RosTrail}.
         */
        @Override
        public com.aliyun.ros.cdk.actiontrail.RosTrail build() {
            return new com.aliyun.ros.cdk.actiontrail.RosTrail(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
