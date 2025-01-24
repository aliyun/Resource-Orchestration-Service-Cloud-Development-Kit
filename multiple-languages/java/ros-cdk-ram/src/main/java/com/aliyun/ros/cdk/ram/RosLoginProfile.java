package com.aliyun.ros.cdk.ram;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::RAM::LoginProfile</code>, which is used to create logon configurations for a Resource Access Management (RAM) user.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-01-23T09:30:42.961Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ram.$Module.class, fqn = "@alicloud/ros-cdk-ram.RosLoginProfile")
public class RosLoginProfile extends com.aliyun.ros.cdk.core.RosResource {

    protected RosLoginProfile(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosLoginProfile(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.ram.RosLoginProfile.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosLoginProfile(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ram.RosLoginProfileProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPassword() {
        return software.amazon.jsii.Kernel.get(this, "attrPassword", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getUserPrincipalName() {
        return software.amazon.jsii.Kernel.get(this, "userPrincipalName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setUserPrincipalName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "userPrincipalName", java.util.Objects.requireNonNull(value, "userPrincipalName is required"));
    }

    /**
     */
    public void setUserPrincipalName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "userPrincipalName", java.util.Objects.requireNonNull(value, "userPrincipalName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getGenerateRandomPassword() {
        return software.amazon.jsii.Kernel.get(this, "generateRandomPassword", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setGenerateRandomPassword(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "generateRandomPassword", value);
    }

    /**
     */
    public void setGenerateRandomPassword(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "generateRandomPassword", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMfaBindRequired() {
        return software.amazon.jsii.Kernel.get(this, "mfaBindRequired", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMfaBindRequired(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "mfaBindRequired", value);
    }

    /**
     */
    public void setMfaBindRequired(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "mfaBindRequired", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPassword() {
        return software.amazon.jsii.Kernel.get(this, "password", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPassword(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "password", value);
    }

    /**
     */
    public void setPassword(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "password", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPasswordResetRequired() {
        return software.amazon.jsii.Kernel.get(this, "passwordResetRequired", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPasswordResetRequired(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "passwordResetRequired", value);
    }

    /**
     */
    public void setPasswordResetRequired(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "passwordResetRequired", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getStatus() {
        return software.amazon.jsii.Kernel.get(this, "status", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setStatus(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "status", value);
    }

    /**
     */
    public void setStatus(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "status", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ram.RosLoginProfile}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ram.RosLoginProfile> {
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
        private final com.aliyun.ros.cdk.ram.RosLoginProfileProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ram.RosLoginProfileProps.Builder();
        }

        /**
         * @return {@code this}
         * @param userPrincipalName This parameter is required.
         */
        public Builder userPrincipalName(final java.lang.String userPrincipalName) {
            this.props.userPrincipalName(userPrincipalName);
            return this;
        }
        /**
         * @return {@code this}
         * @param userPrincipalName This parameter is required.
         */
        public Builder userPrincipalName(final com.aliyun.ros.cdk.core.IResolvable userPrincipalName) {
            this.props.userPrincipalName(userPrincipalName);
            return this;
        }

        /**
         * @return {@code this}
         * @param generateRandomPassword This parameter is required.
         */
        public Builder generateRandomPassword(final java.lang.Boolean generateRandomPassword) {
            this.props.generateRandomPassword(generateRandomPassword);
            return this;
        }
        /**
         * @return {@code this}
         * @param generateRandomPassword This parameter is required.
         */
        public Builder generateRandomPassword(final com.aliyun.ros.cdk.core.IResolvable generateRandomPassword) {
            this.props.generateRandomPassword(generateRandomPassword);
            return this;
        }

        /**
         * @return {@code this}
         * @param mfaBindRequired This parameter is required.
         */
        public Builder mfaBindRequired(final java.lang.Boolean mfaBindRequired) {
            this.props.mfaBindRequired(mfaBindRequired);
            return this;
        }
        /**
         * @return {@code this}
         * @param mfaBindRequired This parameter is required.
         */
        public Builder mfaBindRequired(final com.aliyun.ros.cdk.core.IResolvable mfaBindRequired) {
            this.props.mfaBindRequired(mfaBindRequired);
            return this;
        }

        /**
         * @return {@code this}
         * @param password This parameter is required.
         */
        public Builder password(final java.lang.String password) {
            this.props.password(password);
            return this;
        }
        /**
         * @return {@code this}
         * @param password This parameter is required.
         */
        public Builder password(final com.aliyun.ros.cdk.core.IResolvable password) {
            this.props.password(password);
            return this;
        }

        /**
         * @return {@code this}
         * @param passwordResetRequired This parameter is required.
         */
        public Builder passwordResetRequired(final java.lang.Boolean passwordResetRequired) {
            this.props.passwordResetRequired(passwordResetRequired);
            return this;
        }
        /**
         * @return {@code this}
         * @param passwordResetRequired This parameter is required.
         */
        public Builder passwordResetRequired(final com.aliyun.ros.cdk.core.IResolvable passwordResetRequired) {
            this.props.passwordResetRequired(passwordResetRequired);
            return this;
        }

        /**
         * @return {@code this}
         * @param status This parameter is required.
         */
        public Builder status(final java.lang.String status) {
            this.props.status(status);
            return this;
        }
        /**
         * @return {@code this}
         * @param status This parameter is required.
         */
        public Builder status(final com.aliyun.ros.cdk.core.IResolvable status) {
            this.props.status(status);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ram.RosLoginProfile}.
         */
        @Override
        public com.aliyun.ros.cdk.ram.RosLoginProfile build() {
            return new com.aliyun.ros.cdk.ram.RosLoginProfile(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
