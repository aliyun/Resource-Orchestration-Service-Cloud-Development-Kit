package com.aliyun.ros.cdk.ram;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::RAM::User</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:09.477Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ram.$Module.class, fqn = "@alicloud/ros-cdk-ram.User")
public class User extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.ram.IUser, com.aliyun.ros.cdk.ram.IPrincipal {

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
    public User(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ram.UserProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public User(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ram.UserProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Add to the policy of this principal.
     * <p>
     * @param policyDocument This parameter is required.
     */
    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ram.ManagedPolicy addToPolicy(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ram.RosManagedPolicy.PolicyDocumentProperty policyDocument) {
        return software.amazon.jsii.Kernel.call(this, "addToPolicy", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ram.ManagedPolicy.class), new Object[] { java.util.Objects.requireNonNull(policyDocument, "policyDocument is required") });
    }

    /**
     * Attribute CreateDate: Create date of ram user.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateDate() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateDate", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute LastLoginDate: Last login date of ram user.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrLastLoginDate() {
        return software.amazon.jsii.Kernel.get(this, "attrLastLoginDate", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute UserId: Id of ram user.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserId() {
        return software.amazon.jsii.Kernel.get(this, "attrUserId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute UserName: Name of ram user.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserName() {
        return software.amazon.jsii.Kernel.get(this, "attrUserName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * The principal to grant permissions to.
     */
    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ram.IPrincipal getGrantPrincipal() {
        return software.amazon.jsii.Kernel.get(this, "grantPrincipal", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ram.IPrincipal.class));
    }

    /**
     * The principal to grant permissions to.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getPrincipalName() {
        return software.amazon.jsii.Kernel.get(this, "principalName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * The principal type, such as 'Group', 'Role', 'User'.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.String getPrincipalType() {
        return software.amazon.jsii.Kernel.get(this, "principalType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ram.UserProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ram.UserProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.ram.User}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ram.User> {
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
        private final com.aliyun.ros.cdk.ram.UserProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ram.UserProps.Builder();
        }

        /**
         * Property userName: Specifies the user name, containing up to 64 characters.
         * <p>
         * @return {@code this}
         * @param userName Property userName: Specifies the user name, containing up to 64 characters. This parameter is required.
         */
        public Builder userName(final java.lang.String userName) {
            this.props.userName(userName);
            return this;
        }
        /**
         * Property userName: Specifies the user name, containing up to 64 characters.
         * <p>
         * @return {@code this}
         * @param userName Property userName: Specifies the user name, containing up to 64 characters. This parameter is required.
         */
        public Builder userName(final com.aliyun.ros.cdk.core.IResolvable userName) {
            this.props.userName(userName);
            return this;
        }

        /**
         * Property comments: Comments of ram user.
         * <p>
         * @return {@code this}
         * @param comments Property comments: Comments of ram user. This parameter is required.
         */
        public Builder comments(final java.lang.String comments) {
            this.props.comments(comments);
            return this;
        }
        /**
         * Property comments: Comments of ram user.
         * <p>
         * @return {@code this}
         * @param comments Property comments: Comments of ram user. This parameter is required.
         */
        public Builder comments(final com.aliyun.ros.cdk.core.IResolvable comments) {
            this.props.comments(comments);
            return this;
        }

        /**
         * Property deletionForce: Whether force detach the policies and groups attached to the user.
         * <p>
         * Default value is false.
         * <p>
         * @return {@code this}
         * @param deletionForce Property deletionForce: Whether force detach the policies and groups attached to the user. This parameter is required.
         */
        public Builder deletionForce(final java.lang.Boolean deletionForce) {
            this.props.deletionForce(deletionForce);
            return this;
        }
        /**
         * Property deletionForce: Whether force detach the policies and groups attached to the user.
         * <p>
         * Default value is false.
         * <p>
         * @return {@code this}
         * @param deletionForce Property deletionForce: Whether force detach the policies and groups attached to the user. This parameter is required.
         */
        public Builder deletionForce(final com.aliyun.ros.cdk.core.IResolvable deletionForce) {
            this.props.deletionForce(deletionForce);
            return this;
        }

        /**
         * Property displayName: Display name, up to 128 characters or Chinese characters.
         * <p>
         * @return {@code this}
         * @param displayName Property displayName: Display name, up to 128 characters or Chinese characters. This parameter is required.
         */
        public Builder displayName(final java.lang.String displayName) {
            this.props.displayName(displayName);
            return this;
        }
        /**
         * Property displayName: Display name, up to 128 characters or Chinese characters.
         * <p>
         * @return {@code this}
         * @param displayName Property displayName: Display name, up to 128 characters or Chinese characters. This parameter is required.
         */
        public Builder displayName(final com.aliyun.ros.cdk.core.IResolvable displayName) {
            this.props.displayName(displayName);
            return this;
        }

        /**
         * Property email: Email of ram user.
         * <p>
         * @return {@code this}
         * @param email Property email: Email of ram user. This parameter is required.
         */
        public Builder email(final java.lang.String email) {
            this.props.email(email);
            return this;
        }
        /**
         * Property email: Email of ram user.
         * <p>
         * @return {@code this}
         * @param email Property email: Email of ram user. This parameter is required.
         */
        public Builder email(final com.aliyun.ros.cdk.core.IResolvable email) {
            this.props.email(email);
            return this;
        }

        /**
         * Property groups: A name of a group to which you want to add the user.
         * <p>
         * @return {@code this}
         * @param groups Property groups: A name of a group to which you want to add the user. This parameter is required.
         */
        public Builder groups(final java.util.List<? extends java.lang.Object> groups) {
            this.props.groups(groups);
            return this;
        }
        /**
         * Property groups: A name of a group to which you want to add the user.
         * <p>
         * @return {@code this}
         * @param groups Property groups: A name of a group to which you want to add the user. This parameter is required.
         */
        public Builder groups(final com.aliyun.ros.cdk.core.IResolvable groups) {
            this.props.groups(groups);
            return this;
        }

        /**
         * Property loginProfile: Creates a login profile for users so that they can access the AliCloud Management Console.
         * <p>
         * @return {@code this}
         * @param loginProfile Property loginProfile: Creates a login profile for users so that they can access the AliCloud Management Console. This parameter is required.
         */
        public Builder loginProfile(final com.aliyun.ros.cdk.core.IResolvable loginProfile) {
            this.props.loginProfile(loginProfile);
            return this;
        }
        /**
         * Property loginProfile: Creates a login profile for users so that they can access the AliCloud Management Console.
         * <p>
         * @return {@code this}
         * @param loginProfile Property loginProfile: Creates a login profile for users so that they can access the AliCloud Management Console. This parameter is required.
         */
        public Builder loginProfile(final com.aliyun.ros.cdk.ram.RosUser.LoginProfileProperty loginProfile) {
            this.props.loginProfile(loginProfile);
            return this;
        }

        /**
         * Property mobilePhone: Phone number of ram user.
         * <p>
         * @return {@code this}
         * @param mobilePhone Property mobilePhone: Phone number of ram user. This parameter is required.
         */
        public Builder mobilePhone(final java.lang.String mobilePhone) {
            this.props.mobilePhone(mobilePhone);
            return this;
        }
        /**
         * Property mobilePhone: Phone number of ram user.
         * <p>
         * @return {@code this}
         * @param mobilePhone Property mobilePhone: Phone number of ram user. This parameter is required.
         */
        public Builder mobilePhone(final com.aliyun.ros.cdk.core.IResolvable mobilePhone) {
            this.props.mobilePhone(mobilePhone);
            return this;
        }

        /**
         * Property policies: Describes what actions are allowed on what resources.
         * <p>
         * @return {@code this}
         * @param policies Property policies: Describes what actions are allowed on what resources. This parameter is required.
         */
        public Builder policies(final com.aliyun.ros.cdk.core.IResolvable policies) {
            this.props.policies(policies);
            return this;
        }
        /**
         * Property policies: Describes what actions are allowed on what resources.
         * <p>
         * @return {@code this}
         * @param policies Property policies: Describes what actions are allowed on what resources. This parameter is required.
         */
        public Builder policies(final java.util.List<? extends java.lang.Object> policies) {
            this.props.policies(policies);
            return this;
        }

        /**
         * Property policyAttachments: System and custom policy names to attach.
         * <p>
         * @return {@code this}
         * @param policyAttachments Property policyAttachments: System and custom policy names to attach. This parameter is required.
         */
        public Builder policyAttachments(final com.aliyun.ros.cdk.core.IResolvable policyAttachments) {
            this.props.policyAttachments(policyAttachments);
            return this;
        }
        /**
         * Property policyAttachments: System and custom policy names to attach.
         * <p>
         * @return {@code this}
         * @param policyAttachments Property policyAttachments: System and custom policy names to attach. This parameter is required.
         */
        public Builder policyAttachments(final com.aliyun.ros.cdk.ram.RosUser.PolicyAttachmentsProperty policyAttachments) {
            this.props.policyAttachments(policyAttachments);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ram.User}.
         */
        @Override
        public com.aliyun.ros.cdk.ram.User build() {
            return new com.aliyun.ros.cdk.ram.User(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
