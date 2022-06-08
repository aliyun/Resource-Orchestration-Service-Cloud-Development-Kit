package com.aliyun.ros.cdk.pvtz;

/**
 * A ROS template type:  `ALIYUN::PVTZ::UserVpcAuthorization`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.59.0 (build eb02c92)", date = "2022-06-08T09:23:35.912Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.pvtz.$Module.class, fqn = "@alicloud/ros-cdk-pvtz.RosUserVpcAuthorization")
public class RosUserVpcAuthorization extends com.aliyun.ros.cdk.core.RosResource {

    protected RosUserVpcAuthorization(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosUserVpcAuthorization(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.pvtz.RosUserVpcAuthorization.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new `ALIYUN::PVTZ::UserVpcAuthorization`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosUserVpcAuthorization(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pvtz.RosUserVpcAuthorizationProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAuthorizedUserId() {
        return software.amazon.jsii.Kernel.get(this, "attrAuthorizedUserId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAuthType() {
        return software.amazon.jsii.Kernel.get(this, "attrAuthType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAuthorizedUserId() {
        return software.amazon.jsii.Kernel.get(this, "authorizedUserId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAuthorizedUserId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "authorizedUserId", java.util.Objects.requireNonNull(value, "authorizedUserId is required"));
    }

    /**
     */
    public void setAuthorizedUserId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "authorizedUserId", java.util.Objects.requireNonNull(value, "authorizedUserId is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAuthChannel() {
        return software.amazon.jsii.Kernel.get(this, "authChannel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAuthChannel(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "authChannel", value);
    }

    /**
     */
    public void setAuthChannel(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "authChannel", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAuthCode() {
        return software.amazon.jsii.Kernel.get(this, "authCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAuthCode(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "authCode", value);
    }

    /**
     */
    public void setAuthCode(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "authCode", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAuthType() {
        return software.amazon.jsii.Kernel.get(this, "authType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAuthType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "authType", value);
    }

    /**
     */
    public void setAuthType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "authType", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.pvtz.RosUserVpcAuthorization}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.pvtz.RosUserVpcAuthorization> {
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
        private final com.aliyun.ros.cdk.pvtz.RosUserVpcAuthorizationProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.pvtz.RosUserVpcAuthorizationProps.Builder();
        }

        /**
         * @return {@code this}
         * @param authorizedUserId This parameter is required.
         */
        public Builder authorizedUserId(final java.lang.String authorizedUserId) {
            this.props.authorizedUserId(authorizedUserId);
            return this;
        }
        /**
         * @return {@code this}
         * @param authorizedUserId This parameter is required.
         */
        public Builder authorizedUserId(final com.aliyun.ros.cdk.core.IResolvable authorizedUserId) {
            this.props.authorizedUserId(authorizedUserId);
            return this;
        }

        /**
         * @return {@code this}
         * @param authChannel This parameter is required.
         */
        public Builder authChannel(final java.lang.String authChannel) {
            this.props.authChannel(authChannel);
            return this;
        }
        /**
         * @return {@code this}
         * @param authChannel This parameter is required.
         */
        public Builder authChannel(final com.aliyun.ros.cdk.core.IResolvable authChannel) {
            this.props.authChannel(authChannel);
            return this;
        }

        /**
         * @return {@code this}
         * @param authCode This parameter is required.
         */
        public Builder authCode(final java.lang.String authCode) {
            this.props.authCode(authCode);
            return this;
        }
        /**
         * @return {@code this}
         * @param authCode This parameter is required.
         */
        public Builder authCode(final com.aliyun.ros.cdk.core.IResolvable authCode) {
            this.props.authCode(authCode);
            return this;
        }

        /**
         * @return {@code this}
         * @param authType This parameter is required.
         */
        public Builder authType(final java.lang.String authType) {
            this.props.authType(authType);
            return this;
        }
        /**
         * @return {@code this}
         * @param authType This parameter is required.
         */
        public Builder authType(final com.aliyun.ros.cdk.core.IResolvable authType) {
            this.props.authType(authType);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.pvtz.RosUserVpcAuthorization}.
         */
        @Override
        public com.aliyun.ros.cdk.pvtz.RosUserVpcAuthorization build() {
            return new com.aliyun.ros.cdk.pvtz.RosUserVpcAuthorization(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
