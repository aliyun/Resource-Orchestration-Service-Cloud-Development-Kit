package com.aliyun.ros.cdk.ram;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::RAM::LoginProfile</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:28.390Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ram.$Module.class, fqn = "@alicloud/ros-cdk-ram.LoginProfile")
public class LoginProfile extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.ram.ILoginProfile {

    protected LoginProfile(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected LoginProfile(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public LoginProfile(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ram.LoginProfileProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public LoginProfile(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ram.LoginProfileProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Password: The password of the RAM user.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPassword() {
        return software.amazon.jsii.Kernel.get(this, "attrPassword", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ram.LoginProfileProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ram.LoginProfileProps.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ram.LoginProfile}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ram.LoginProfile> {
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
        private final com.aliyun.ros.cdk.ram.LoginProfileProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ram.LoginProfileProps.Builder();
        }

        /**
         * Property userPrincipalName: The login name of the RAM user.
         * <p>
         * @return {@code this}
         * @param userPrincipalName Property userPrincipalName: The login name of the RAM user. This parameter is required.
         */
        public Builder userPrincipalName(final java.lang.String userPrincipalName) {
            this.props.userPrincipalName(userPrincipalName);
            return this;
        }
        /**
         * Property userPrincipalName: The login name of the RAM user.
         * <p>
         * @return {@code this}
         * @param userPrincipalName Property userPrincipalName: The login name of the RAM user. This parameter is required.
         */
        public Builder userPrincipalName(final com.aliyun.ros.cdk.core.IResolvable userPrincipalName) {
            this.props.userPrincipalName(userPrincipalName);
            return this;
        }

        /**
         * Property generateRandomPassword: Whether to generate a random password for the RAM user.
         * <p>
         * @return {@code this}
         * @param generateRandomPassword Property generateRandomPassword: Whether to generate a random password for the RAM user. This parameter is required.
         */
        public Builder generateRandomPassword(final java.lang.Boolean generateRandomPassword) {
            this.props.generateRandomPassword(generateRandomPassword);
            return this;
        }
        /**
         * Property generateRandomPassword: Whether to generate a random password for the RAM user.
         * <p>
         * @return {@code this}
         * @param generateRandomPassword Property generateRandomPassword: Whether to generate a random password for the RAM user. This parameter is required.
         */
        public Builder generateRandomPassword(final com.aliyun.ros.cdk.core.IResolvable generateRandomPassword) {
            this.props.generateRandomPassword(generateRandomPassword);
            return this;
        }

        /**
         * Property mfaBindRequired: Whether to force RAM users to enable multi-factor authentication.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>true: This is required. RAM users must bind the multifactor authentication device the next time they log in.</li>
         * <li>false (default) : This is not required.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param mfaBindRequired Property mfaBindRequired: Whether to force RAM users to enable multi-factor authentication. This parameter is required.
         */
        public Builder mfaBindRequired(final java.lang.Boolean mfaBindRequired) {
            this.props.mfaBindRequired(mfaBindRequired);
            return this;
        }
        /**
         * Property mfaBindRequired: Whether to force RAM users to enable multi-factor authentication.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>true: This is required. RAM users must bind the multifactor authentication device the next time they log in.</li>
         * <li>false (default) : This is not required.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param mfaBindRequired Property mfaBindRequired: Whether to force RAM users to enable multi-factor authentication. This parameter is required.
         */
        public Builder mfaBindRequired(final com.aliyun.ros.cdk.core.IResolvable mfaBindRequired) {
            this.props.mfaBindRequired(mfaBindRequired);
            return this;
        }

        /**
         * Property password: The password of the RAM user.
         * <p>
         * @return {@code this}
         * @param password Property password: The password of the RAM user. This parameter is required.
         */
        public Builder password(final java.lang.String password) {
            this.props.password(password);
            return this;
        }
        /**
         * Property password: The password of the RAM user.
         * <p>
         * @return {@code this}
         * @param password Property password: The password of the RAM user. This parameter is required.
         */
        public Builder password(final com.aliyun.ros.cdk.core.IResolvable password) {
            this.props.password(password);
            return this;
        }

        /**
         * Property passwordResetRequired: Whether RAM users must reset their password the next time they log in.
         * <p>
         * @return {@code this}
         * @param passwordResetRequired Property passwordResetRequired: Whether RAM users must reset their password the next time they log in. This parameter is required.
         */
        public Builder passwordResetRequired(final java.lang.Boolean passwordResetRequired) {
            this.props.passwordResetRequired(passwordResetRequired);
            return this;
        }
        /**
         * Property passwordResetRequired: Whether RAM users must reset their password the next time they log in.
         * <p>
         * @return {@code this}
         * @param passwordResetRequired Property passwordResetRequired: Whether RAM users must reset their password the next time they log in. This parameter is required.
         */
        public Builder passwordResetRequired(final com.aliyun.ros.cdk.core.IResolvable passwordResetRequired) {
            this.props.passwordResetRequired(passwordResetRequired);
            return this;
        }

        /**
         * Property status: Enable or disable console password login.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Activate (default): Enable.</li>
         * <li>Inactivate: Disable.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param status Property status: Enable or disable console password login. This parameter is required.
         */
        public Builder status(final java.lang.String status) {
            this.props.status(status);
            return this;
        }
        /**
         * Property status: Enable or disable console password login.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Activate (default): Enable.</li>
         * <li>Inactivate: Disable.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param status Property status: Enable or disable console password login. This parameter is required.
         */
        public Builder status(final com.aliyun.ros.cdk.core.IResolvable status) {
            this.props.status(status);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ram.LoginProfile}.
         */
        @Override
        public com.aliyun.ros.cdk.ram.LoginProfile build() {
            return new com.aliyun.ros.cdk.ram.LoginProfile(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
