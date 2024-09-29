package com.aliyun.ros.cdk.ram;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::RAM::ManagedPolicy</code>, which is used to create a Resource Access Management (RAM) policy.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-29T07:52:41.611Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ram.$Module.class, fqn = "@alicloud/ros-cdk-ram.ManagedPolicy")
public class ManagedPolicy extends com.aliyun.ros.cdk.core.Resource {

    protected ManagedPolicy(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ManagedPolicy(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public ManagedPolicy(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ram.ManagedPolicyProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public ManagedPolicy(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ram.ManagedPolicyProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute PolicyName: When the logical ID of this resource is provided to the Ref intrinsic function, Ref returns the ARN.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPolicyName() {
        return software.amazon.jsii.Kernel.get(this, "attrPolicyName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ram.ManagedPolicyProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ram.ManagedPolicyProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ram.ManagedPolicyProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ram.ManagedPolicy}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ram.ManagedPolicy> {
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
        private final com.aliyun.ros.cdk.ram.ManagedPolicyProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ram.ManagedPolicyProps.Builder();
        }

        /**
         * Property policyName: Specifies the authorization policy name, containing up to 128 characters.
         * <p>
         * @return {@code this}
         * @param policyName Property policyName: Specifies the authorization policy name, containing up to 128 characters. This parameter is required.
         */
        public Builder policyName(final java.lang.String policyName) {
            this.props.policyName(policyName);
            return this;
        }
        /**
         * Property policyName: Specifies the authorization policy name, containing up to 128 characters.
         * <p>
         * @return {@code this}
         * @param policyName Property policyName: Specifies the authorization policy name, containing up to 128 characters. This parameter is required.
         */
        public Builder policyName(final com.aliyun.ros.cdk.core.IResolvable policyName) {
            this.props.policyName(policyName);
            return this;
        }

        /**
         * Property description: Specifies the authorization policy description, containing up to 1024 characters.
         * <p>
         * @return {@code this}
         * @param description Property description: Specifies the authorization policy description, containing up to 1024 characters. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: Specifies the authorization policy description, containing up to 1024 characters.
         * <p>
         * @return {@code this}
         * @param description Property description: Specifies the authorization policy description, containing up to 1024 characters. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property groups: The names of groups to attach to this policy.
         * <p>
         * @return {@code this}
         * @param groups Property groups: The names of groups to attach to this policy. This parameter is required.
         */
        public Builder groups(final java.util.List<? extends java.lang.Object> groups) {
            this.props.groups(groups);
            return this;
        }
        /**
         * Property groups: The names of groups to attach to this policy.
         * <p>
         * @return {@code this}
         * @param groups Property groups: The names of groups to attach to this policy. This parameter is required.
         */
        public Builder groups(final com.aliyun.ros.cdk.core.IResolvable groups) {
            this.props.groups(groups);
            return this;
        }

        /**
         * Property ignoreExisting: Whether to ignore existing policy False: ROS will perform a uniqueness check.If a policy with the same name exists, an error will be reported when creating it. True: ROS will not check the uniqueness.If there is a policy with the same name, the policy creation process will be ignored. If the policy is not created by ROS, it will be ignored during update and delete stage.
         * <p>
         * @return {@code this}
         * @param ignoreExisting Property ignoreExisting: Whether to ignore existing policy False: ROS will perform a uniqueness check.If a policy with the same name exists, an error will be reported when creating it. True: ROS will not check the uniqueness.If there is a policy with the same name, the policy creation process will be ignored. If the policy is not created by ROS, it will be ignored during update and delete stage. This parameter is required.
         */
        public Builder ignoreExisting(final java.lang.Boolean ignoreExisting) {
            this.props.ignoreExisting(ignoreExisting);
            return this;
        }
        /**
         * Property ignoreExisting: Whether to ignore existing policy False: ROS will perform a uniqueness check.If a policy with the same name exists, an error will be reported when creating it. True: ROS will not check the uniqueness.If there is a policy with the same name, the policy creation process will be ignored. If the policy is not created by ROS, it will be ignored during update and delete stage.
         * <p>
         * @return {@code this}
         * @param ignoreExisting Property ignoreExisting: Whether to ignore existing policy False: ROS will perform a uniqueness check.If a policy with the same name exists, an error will be reported when creating it. True: ROS will not check the uniqueness.If there is a policy with the same name, the policy creation process will be ignored. If the policy is not created by ROS, it will be ignored during update and delete stage. This parameter is required.
         */
        public Builder ignoreExisting(final com.aliyun.ros.cdk.core.IResolvable ignoreExisting) {
            this.props.ignoreExisting(ignoreExisting);
            return this;
        }

        /**
         * Property policyDocument: A policy document that describes what actions are allowed on which resources.
         * <p>
         * @return {@code this}
         * @param policyDocument Property policyDocument: A policy document that describes what actions are allowed on which resources. This parameter is required.
         */
        public Builder policyDocument(final com.aliyun.ros.cdk.core.IResolvable policyDocument) {
            this.props.policyDocument(policyDocument);
            return this;
        }
        /**
         * Property policyDocument: A policy document that describes what actions are allowed on which resources.
         * <p>
         * @return {@code this}
         * @param policyDocument Property policyDocument: A policy document that describes what actions are allowed on which resources. This parameter is required.
         */
        public Builder policyDocument(final com.aliyun.ros.cdk.ram.RosManagedPolicy.PolicyDocumentProperty policyDocument) {
            this.props.policyDocument(policyDocument);
            return this;
        }

        /**
         * Property policyDocumentUnchecked: A policy document that describes what actions are allowed on which resources.
         * <p>
         * If it is specified, PolicyDocument will be ignored.
         * <p>
         * @return {@code this}
         * @param policyDocumentUnchecked Property policyDocumentUnchecked: A policy document that describes what actions are allowed on which resources. This parameter is required.
         */
        public Builder policyDocumentUnchecked(final com.aliyun.ros.cdk.core.IResolvable policyDocumentUnchecked) {
            this.props.policyDocumentUnchecked(policyDocumentUnchecked);
            return this;
        }
        /**
         * Property policyDocumentUnchecked: A policy document that describes what actions are allowed on which resources.
         * <p>
         * If it is specified, PolicyDocument will be ignored.
         * <p>
         * @return {@code this}
         * @param policyDocumentUnchecked Property policyDocumentUnchecked: A policy document that describes what actions are allowed on which resources. This parameter is required.
         */
        public Builder policyDocumentUnchecked(final java.util.Map<java.lang.String, ? extends java.lang.Object> policyDocumentUnchecked) {
            this.props.policyDocumentUnchecked(policyDocumentUnchecked);
            return this;
        }

        /**
         * Property roles: The names of roles to attach to this policy.
         * <p>
         * @return {@code this}
         * @param roles Property roles: The names of roles to attach to this policy. This parameter is required.
         */
        public Builder roles(final java.util.List<? extends java.lang.Object> roles) {
            this.props.roles(roles);
            return this;
        }
        /**
         * Property roles: The names of roles to attach to this policy.
         * <p>
         * @return {@code this}
         * @param roles Property roles: The names of roles to attach to this policy. This parameter is required.
         */
        public Builder roles(final com.aliyun.ros.cdk.core.IResolvable roles) {
            this.props.roles(roles);
            return this;
        }

        /**
         * Property users: The names of users to attach to this policy.
         * <p>
         * @return {@code this}
         * @param users Property users: The names of users to attach to this policy. This parameter is required.
         */
        public Builder users(final java.util.List<? extends java.lang.Object> users) {
            this.props.users(users);
            return this;
        }
        /**
         * Property users: The names of users to attach to this policy.
         * <p>
         * @return {@code this}
         * @param users Property users: The names of users to attach to this policy. This parameter is required.
         */
        public Builder users(final com.aliyun.ros.cdk.core.IResolvable users) {
            this.props.users(users);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ram.ManagedPolicy}.
         */
        @Override
        public com.aliyun.ros.cdk.ram.ManagedPolicy build() {
            return new com.aliyun.ros.cdk.ram.ManagedPolicy(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
