package com.aliyun.ros.cdk.ram;

/**
 * A ROS resource type:  `ALIYUN::RAM::ManagedPolicy`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:34.329Z")
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
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public ManagedPolicy(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ram.ManagedPolicyProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::RAM::ManagedPolicy`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     */
    public ManagedPolicy(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ram.ManagedPolicyProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPolicyName() {
        return software.amazon.jsii.Kernel.get(this, "attrPolicyName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ram.ManagedPolicy}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ram.ManagedPolicy> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope - scope in which this resource is defined. This parameter is required.
         * @param id - scoped id of the resource. This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope - scope in which this resource is defined. This parameter is required.
         * @param id - scoped id of the resource. This parameter is required.
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
         * @return {@code this}
         * @param policyName This parameter is required.
         */
        public Builder policyName(final java.lang.String policyName) {
            this.props.policyName(policyName);
            return this;
        }

        /**
         * @return {@code this}
         * @param description This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }

        /**
         * @return {@code this}
         * @param groups This parameter is required.
         */
        public Builder groups(final java.util.List<? extends java.lang.Object> groups) {
            this.props.groups(groups);
            return this;
        }
        /**
         * @return {@code this}
         * @param groups This parameter is required.
         */
        public Builder groups(final com.aliyun.ros.cdk.core.IResolvable groups) {
            this.props.groups(groups);
            return this;
        }

        /**
         * @return {@code this}
         * @param policyDocument This parameter is required.
         */
        public Builder policyDocument(final com.aliyun.ros.cdk.core.IResolvable policyDocument) {
            this.props.policyDocument(policyDocument);
            return this;
        }
        /**
         * @return {@code this}
         * @param policyDocument This parameter is required.
         */
        public Builder policyDocument(final com.aliyun.ros.cdk.ram.RosManagedPolicy.PolicyDocumentProperty policyDocument) {
            this.props.policyDocument(policyDocument);
            return this;
        }

        /**
         * @return {@code this}
         * @param policyDocumentUnchecked This parameter is required.
         */
        public Builder policyDocumentUnchecked(final com.aliyun.ros.cdk.core.IResolvable policyDocumentUnchecked) {
            this.props.policyDocumentUnchecked(policyDocumentUnchecked);
            return this;
        }
        /**
         * @return {@code this}
         * @param policyDocumentUnchecked This parameter is required.
         */
        public Builder policyDocumentUnchecked(final java.util.Map<java.lang.String, ? extends java.lang.Object> policyDocumentUnchecked) {
            this.props.policyDocumentUnchecked(policyDocumentUnchecked);
            return this;
        }

        /**
         * @return {@code this}
         * @param roles This parameter is required.
         */
        public Builder roles(final java.util.List<? extends java.lang.Object> roles) {
            this.props.roles(roles);
            return this;
        }
        /**
         * @return {@code this}
         * @param roles This parameter is required.
         */
        public Builder roles(final com.aliyun.ros.cdk.core.IResolvable roles) {
            this.props.roles(roles);
            return this;
        }

        /**
         * @return {@code this}
         * @param users This parameter is required.
         */
        public Builder users(final java.util.List<? extends java.lang.Object> users) {
            this.props.users(users);
            return this;
        }
        /**
         * @return {@code this}
         * @param users This parameter is required.
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
