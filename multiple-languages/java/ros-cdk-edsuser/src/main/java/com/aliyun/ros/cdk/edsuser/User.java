package com.aliyun.ros.cdk.edsuser;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::EdsUser::User</code>, which is used to create a convenience user.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:16.244Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.edsuser.$Module.class, fqn = "@alicloud/ros-cdk-edsuser.User")
public class User extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.edsuser.IUser {

    protected User(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected User(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public User(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.edsuser.UserProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public User(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.edsuser.UserProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute EndUserId: The name of the end user.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEndUserId() {
        return software.amazon.jsii.Kernel.get(this, "attrEndUserId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.edsuser.UserProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.edsuser.UserProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.edsuser.User}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.edsuser.User> {
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
        private final com.aliyun.ros.cdk.edsuser.UserProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.edsuser.UserProps.Builder();
        }

        /**
         * Property endUserId: The name of the end user.
         * <p>
         * The name must be 3 to 24 characters in length, and can contain lowercase letters, digits, and underscores (_).
         * <p>
         * @return {@code this}
         * @param endUserId Property endUserId: The name of the end user. This parameter is required.
         */
        public Builder endUserId(final java.lang.String endUserId) {
            this.props.endUserId(endUserId);
            return this;
        }
        /**
         * Property endUserId: The name of the end user.
         * <p>
         * The name must be 3 to 24 characters in length, and can contain lowercase letters, digits, and underscores (_).
         * <p>
         * @return {@code this}
         * @param endUserId Property endUserId: The name of the end user. This parameter is required.
         */
        public Builder endUserId(final com.aliyun.ros.cdk.core.IResolvable endUserId) {
            this.props.endUserId(endUserId);
            return this;
        }

        /**
         * Property email: The email address of the end user.
         * <p>
         * The email address is used to receive notifications about events such as desktop assignment. You must specify an email address or a mobile number to receive notifications.
         * <p>
         * @return {@code this}
         * @param email Property email: The email address of the end user. This parameter is required.
         */
        public Builder email(final java.lang.String email) {
            this.props.email(email);
            return this;
        }
        /**
         * Property email: The email address of the end user.
         * <p>
         * The email address is used to receive notifications about events such as desktop assignment. You must specify an email address or a mobile number to receive notifications.
         * <p>
         * @return {@code this}
         * @param email Property email: The email address of the end user. This parameter is required.
         */
        public Builder email(final com.aliyun.ros.cdk.core.IResolvable email) {
            this.props.email(email);
            return this;
        }

        /**
         * Property orgId: The organization to which the end user belongs.
         * <p>
         * @return {@code this}
         * @param orgId Property orgId: The organization to which the end user belongs. This parameter is required.
         */
        public Builder orgId(final java.lang.String orgId) {
            this.props.orgId(orgId);
            return this;
        }
        /**
         * Property orgId: The organization to which the end user belongs.
         * <p>
         * @return {@code this}
         * @param orgId Property orgId: The organization to which the end user belongs. This parameter is required.
         */
        public Builder orgId(final com.aliyun.ros.cdk.core.IResolvable orgId) {
            this.props.orgId(orgId);
            return this;
        }

        /**
         * Property ownerType: The type of the account ownership.
         * <p>
         * Enumeration Value:
         * CreateFromManager
         * Normal
         * <p>
         * @return {@code this}
         * @param ownerType Property ownerType: The type of the account ownership. This parameter is required.
         */
        public Builder ownerType(final java.lang.String ownerType) {
            this.props.ownerType(ownerType);
            return this;
        }
        /**
         * Property ownerType: The type of the account ownership.
         * <p>
         * Enumeration Value:
         * CreateFromManager
         * Normal
         * <p>
         * @return {@code this}
         * @param ownerType Property ownerType: The type of the account ownership. This parameter is required.
         */
        public Builder ownerType(final com.aliyun.ros.cdk.core.IResolvable ownerType) {
            this.props.ownerType(ownerType);
            return this;
        }

        /**
         * Property password: The initial password.
         * <p>
         * If this parameter is left empty, an email for password reset is sent to the specified email address.
         * <p>
         * @return {@code this}
         * @param password Property password: The initial password. This parameter is required.
         */
        public Builder password(final java.lang.String password) {
            this.props.password(password);
            return this;
        }
        /**
         * Property password: The initial password.
         * <p>
         * If this parameter is left empty, an email for password reset is sent to the specified email address.
         * <p>
         * @return {@code this}
         * @param password Property password: The initial password. This parameter is required.
         */
        public Builder password(final com.aliyun.ros.cdk.core.IResolvable password) {
            this.props.password(password);
            return this;
        }

        /**
         * Property phone: Mobile numbers are not supported on the international site (alibabacloud.com).
         * <p>
         * @return {@code this}
         * @param phone Property phone: Mobile numbers are not supported on the international site (alibabacloud.com). This parameter is required.
         */
        public Builder phone(final java.lang.String phone) {
            this.props.phone(phone);
            return this;
        }
        /**
         * Property phone: Mobile numbers are not supported on the international site (alibabacloud.com).
         * <p>
         * @return {@code this}
         * @param phone Property phone: Mobile numbers are not supported on the international site (alibabacloud.com). This parameter is required.
         */
        public Builder phone(final com.aliyun.ros.cdk.core.IResolvable phone) {
            this.props.phone(phone);
            return this;
        }

        /**
         * Property remark: The remarks of the end user.
         * <p>
         * @return {@code this}
         * @param remark Property remark: The remarks of the end user. This parameter is required.
         */
        public Builder remark(final java.lang.String remark) {
            this.props.remark(remark);
            return this;
        }
        /**
         * Property remark: The remarks of the end user.
         * <p>
         * @return {@code this}
         * @param remark Property remark: The remarks of the end user. This parameter is required.
         */
        public Builder remark(final com.aliyun.ros.cdk.core.IResolvable remark) {
            this.props.remark(remark);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.edsuser.User}.
         */
        @Override
        public com.aliyun.ros.cdk.edsuser.User build() {
            return new com.aliyun.ros.cdk.edsuser.User(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
