package com.aliyun.ros.cdk.maxcompute;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::MaxCompute::Role</code>, which is used to create a role at the MaxCompute project level.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:07.944Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.maxcompute.$Module.class, fqn = "@alicloud/ros-cdk-maxcompute.Role")
public class Role extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.maxcompute.IRole {

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
    public Role(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.maxcompute.RoleProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Role(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.maxcompute.RoleProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ProjectName: The name of the MaxCompute project.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrProjectName() {
        return software.amazon.jsii.Kernel.get(this, "attrProjectName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute RoleName: The name of the project role.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRoleName() {
        return software.amazon.jsii.Kernel.get(this, "attrRoleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.maxcompute.RoleProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.maxcompute.RoleProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.maxcompute.Role}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.maxcompute.Role> {
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
        private final com.aliyun.ros.cdk.maxcompute.RoleProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.maxcompute.RoleProps.Builder();
        }

        /**
         * Property projectName: The name of the MaxCompute project.
         * <p>
         * @return {@code this}
         * @param projectName Property projectName: The name of the MaxCompute project. This parameter is required.
         */
        public Builder projectName(final java.lang.String projectName) {
            this.props.projectName(projectName);
            return this;
        }
        /**
         * Property projectName: The name of the MaxCompute project.
         * <p>
         * @return {@code this}
         * @param projectName Property projectName: The name of the MaxCompute project. This parameter is required.
         */
        public Builder projectName(final com.aliyun.ros.cdk.core.IResolvable projectName) {
            this.props.projectName(projectName);
            return this;
        }

        /**
         * Property roleName: The name of the project role.
         * <p>
         * @return {@code this}
         * @param roleName Property roleName: The name of the project role. This parameter is required.
         */
        public Builder roleName(final java.lang.String roleName) {
            this.props.roleName(roleName);
            return this;
        }
        /**
         * Property roleName: The name of the project role.
         * <p>
         * @return {@code this}
         * @param roleName Property roleName: The name of the project role. This parameter is required.
         */
        public Builder roleName(final com.aliyun.ros.cdk.core.IResolvable roleName) {
            this.props.roleName(roleName);
            return this;
        }

        /**
         * Property type: Role types, MaxCompute provides administrator roles and resource roles.
         * <p>
         * Valid values:
         * Admin: You can grant management-related permissions to administrator roles by using policies instead of access control lists (ACLs). You cannot grant resource-related permissions to administrator roles.
         * Resource: You can grant resource-related permissions but not management-related permissions to resource roles.
         * <p>
         * @return {@code this}
         * @param type Property type: Role types, MaxCompute provides administrator roles and resource roles. This parameter is required.
         */
        public Builder type(final java.lang.String type) {
            this.props.type(type);
            return this;
        }
        /**
         * Property type: Role types, MaxCompute provides administrator roles and resource roles.
         * <p>
         * Valid values:
         * Admin: You can grant management-related permissions to administrator roles by using policies instead of access control lists (ACLs). You cannot grant resource-related permissions to administrator roles.
         * Resource: You can grant resource-related permissions but not management-related permissions to resource roles.
         * <p>
         * @return {@code this}
         * @param type Property type: Role types, MaxCompute provides administrator roles and resource roles. This parameter is required.
         */
        public Builder type(final com.aliyun.ros.cdk.core.IResolvable type) {
            this.props.type(type);
            return this;
        }

        /**
         * Property acl: The access-control list (ACL), This parameter is not required if a policy is used.
         * <p>
         * @return {@code this}
         * @param acl Property acl: The access-control list (ACL), This parameter is not required if a policy is used. This parameter is required.
         */
        public Builder acl(final com.aliyun.ros.cdk.core.IResolvable acl) {
            this.props.acl(acl);
            return this;
        }
        /**
         * Property acl: The access-control list (ACL), This parameter is not required if a policy is used.
         * <p>
         * @return {@code this}
         * @param acl Property acl: The access-control list (ACL), This parameter is not required if a policy is used. This parameter is required.
         */
        public Builder acl(final com.aliyun.ros.cdk.maxcompute.RosRole.AclProperty acl) {
            this.props.acl(acl);
            return this;
        }

        /**
         * Property policy: The document of the policy.
         * <p>
         * This parameter is not required if an access-control list (ACL) is used.
         * <p>
         * @return {@code this}
         * @param policy Property policy: The document of the policy. This parameter is required.
         */
        public Builder policy(final com.aliyun.ros.cdk.core.IResolvable policy) {
            this.props.policy(policy);
            return this;
        }
        /**
         * Property policy: The document of the policy.
         * <p>
         * This parameter is not required if an access-control list (ACL) is used.
         * <p>
         * @return {@code this}
         * @param policy Property policy: The document of the policy. This parameter is required.
         */
        public Builder policy(final java.util.Map<java.lang.String, ? extends java.lang.Object> policy) {
            this.props.policy(policy);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.maxcompute.Role}.
         */
        @Override
        public com.aliyun.ros.cdk.maxcompute.Role build() {
            return new com.aliyun.ros.cdk.maxcompute.Role(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
