package com.aliyun.ros.cdk.ram;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::RAM::Role</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:19.357Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ram.$Module.class, fqn = "@alicloud/ros-cdk-ram.Role")
public class Role extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.ram.IRole {

    protected Role(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Role(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Role(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ram.RoleProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Role(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ram.RoleProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Arn: Name of alicloud resource.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrArn() {
        return software.amazon.jsii.Kernel.get(this, "attrArn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute RoleId: Id of ram role.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRoleId() {
        return software.amazon.jsii.Kernel.get(this, "attrRoleId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute RoleName: Name of ram role.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRoleName() {
        return software.amazon.jsii.Kernel.get(this, "attrRoleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ram.RoleProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ram.RoleProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.ram.Role}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ram.Role> {
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
        private final com.aliyun.ros.cdk.ram.RoleProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ram.RoleProps.Builder();
        }

        /**
         * Property assumeRolePolicyDocument: The RAM assume role policy that is associated with this role.
         * <p>
         * @return {@code this}
         * @param assumeRolePolicyDocument Property assumeRolePolicyDocument: The RAM assume role policy that is associated with this role. This parameter is required.
         */
        public Builder assumeRolePolicyDocument(final com.aliyun.ros.cdk.core.IResolvable assumeRolePolicyDocument) {
            this.props.assumeRolePolicyDocument(assumeRolePolicyDocument);
            return this;
        }
        /**
         * Property assumeRolePolicyDocument: The RAM assume role policy that is associated with this role.
         * <p>
         * @return {@code this}
         * @param assumeRolePolicyDocument Property assumeRolePolicyDocument: The RAM assume role policy that is associated with this role. This parameter is required.
         */
        public Builder assumeRolePolicyDocument(final com.aliyun.ros.cdk.ram.RosRole.AssumeRolePolicyDocumentProperty assumeRolePolicyDocument) {
            this.props.assumeRolePolicyDocument(assumeRolePolicyDocument);
            return this;
        }

        /**
         * Property roleName: Specifies the role name, containing up to 64 characters.
         * <p>
         * @return {@code this}
         * @param roleName Property roleName: Specifies the role name, containing up to 64 characters. This parameter is required.
         */
        public Builder roleName(final java.lang.String roleName) {
            this.props.roleName(roleName);
            return this;
        }
        /**
         * Property roleName: Specifies the role name, containing up to 64 characters.
         * <p>
         * @return {@code this}
         * @param roleName Property roleName: Specifies the role name, containing up to 64 characters. This parameter is required.
         */
        public Builder roleName(final com.aliyun.ros.cdk.core.IResolvable roleName) {
            this.props.roleName(roleName);
            return this;
        }

        /**
         * Property deletionForce: Whether force detach the policies attached to the role.
         * <p>
         * Default value is false.
         * <p>
         * @return {@code this}
         * @param deletionForce Property deletionForce: Whether force detach the policies attached to the role. This parameter is required.
         */
        public Builder deletionForce(final java.lang.Boolean deletionForce) {
            this.props.deletionForce(deletionForce);
            return this;
        }
        /**
         * Property deletionForce: Whether force detach the policies attached to the role.
         * <p>
         * Default value is false.
         * <p>
         * @return {@code this}
         * @param deletionForce Property deletionForce: Whether force detach the policies attached to the role. This parameter is required.
         */
        public Builder deletionForce(final com.aliyun.ros.cdk.core.IResolvable deletionForce) {
            this.props.deletionForce(deletionForce);
            return this;
        }

        /**
         * Property description: Remark information, up to 1024 characters or Chinese characters.
         * <p>
         * @return {@code this}
         * @param description Property description: Remark information, up to 1024 characters or Chinese characters. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: Remark information, up to 1024 characters or Chinese characters.
         * <p>
         * @return {@code this}
         * @param description Property description: Remark information, up to 1024 characters or Chinese characters. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property ignoreExisting: Whether to ignore existing role False: ROS will perform a uniqueness check.If a role with the same name exists, an error will be reported when creating it. True: ROS will not check the uniqueness.If there is a role with the same name, the role creation process will be ignored. If the role is not created by ROS, it will be ignored during update and delete stage.
         * <p>
         * @return {@code this}
         * @param ignoreExisting Property ignoreExisting: Whether to ignore existing role False: ROS will perform a uniqueness check.If a role with the same name exists, an error will be reported when creating it. True: ROS will not check the uniqueness.If there is a role with the same name, the role creation process will be ignored. If the role is not created by ROS, it will be ignored during update and delete stage. This parameter is required.
         */
        public Builder ignoreExisting(final java.lang.Boolean ignoreExisting) {
            this.props.ignoreExisting(ignoreExisting);
            return this;
        }
        /**
         * Property ignoreExisting: Whether to ignore existing role False: ROS will perform a uniqueness check.If a role with the same name exists, an error will be reported when creating it. True: ROS will not check the uniqueness.If there is a role with the same name, the role creation process will be ignored. If the role is not created by ROS, it will be ignored during update and delete stage.
         * <p>
         * @return {@code this}
         * @param ignoreExisting Property ignoreExisting: Whether to ignore existing role False: ROS will perform a uniqueness check.If a role with the same name exists, an error will be reported when creating it. True: ROS will not check the uniqueness.If there is a role with the same name, the role creation process will be ignored. If the role is not created by ROS, it will be ignored during update and delete stage. This parameter is required.
         */
        public Builder ignoreExisting(final com.aliyun.ros.cdk.core.IResolvable ignoreExisting) {
            this.props.ignoreExisting(ignoreExisting);
            return this;
        }

        /**
         * Property maxSessionDuration: The maximum session duration of the RAM role.
         * <p>
         * Valid values: 3600 to 43200. Unit: seconds. Default value: 3600.
         * The default value is used if the parameter is not specified.
         * <p>
         * @return {@code this}
         * @param maxSessionDuration Property maxSessionDuration: The maximum session duration of the RAM role. This parameter is required.
         */
        public Builder maxSessionDuration(final java.lang.Number maxSessionDuration) {
            this.props.maxSessionDuration(maxSessionDuration);
            return this;
        }
        /**
         * Property maxSessionDuration: The maximum session duration of the RAM role.
         * <p>
         * Valid values: 3600 to 43200. Unit: seconds. Default value: 3600.
         * The default value is used if the parameter is not specified.
         * <p>
         * @return {@code this}
         * @param maxSessionDuration Property maxSessionDuration: The maximum session duration of the RAM role. This parameter is required.
         */
        public Builder maxSessionDuration(final com.aliyun.ros.cdk.core.IResolvable maxSessionDuration) {
            this.props.maxSessionDuration(maxSessionDuration);
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
        public Builder policyAttachments(final com.aliyun.ros.cdk.ram.RosRole.PolicyAttachmentsProperty policyAttachments) {
            this.props.policyAttachments(policyAttachments);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ram.Role}.
         */
        @Override
        public com.aliyun.ros.cdk.ram.Role build() {
            return new com.aliyun.ros.cdk.ram.Role(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
