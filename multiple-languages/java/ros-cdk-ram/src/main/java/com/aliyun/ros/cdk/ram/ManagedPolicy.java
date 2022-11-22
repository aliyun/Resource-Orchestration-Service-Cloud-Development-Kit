package com.aliyun.ros.cdk.ram;

/**
 * A ROS resource type:  `ALIYUN::RAM::ManagedPolicy`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.71.0 (build f1f58ae)", date = "2022-11-22T06:16:29.922Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ram.$Module.class, fqn = "@alicloud/ros-cdk-ram.ManagedPolicy")
public class ManagedPolicy extends com.aliyun.ros.cdk.core.Resource {

    protected ManagedPolicy(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ManagedPolicy(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::RAM::ManagedPolicy`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
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
     * Create a new `ALIYUN::RAM::ManagedPolicy`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
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
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.ram.ManagedPolicy}.
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
