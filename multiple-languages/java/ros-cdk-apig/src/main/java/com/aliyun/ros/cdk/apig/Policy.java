package com.aliyun.ros.cdk.apig;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::APIG::Policy</code>, which is used to create a policy.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:11.710Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.Policy")
public class Policy extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.apig.IPolicy {

    protected Policy(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Policy(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Policy(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apig.PolicyProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Policy(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apig.PolicyProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute PolicyClassId: The ID of policy class.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPolicyClassId() {
        return software.amazon.jsii.Kernel.get(this, "attrPolicyClassId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PolicyClassName: The name of policy class.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPolicyClassName() {
        return software.amazon.jsii.Kernel.get(this, "attrPolicyClassName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PolicyConfig: Policy Configuration.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPolicyConfig() {
        return software.amazon.jsii.Kernel.get(this, "attrPolicyConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PolicyId: The ID of the policy.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPolicyId() {
        return software.amazon.jsii.Kernel.get(this, "attrPolicyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PolicyName: The name of the policy.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPolicyName() {
        return software.amazon.jsii.Kernel.get(this, "attrPolicyName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apig.PolicyProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.apig.PolicyProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.apig.Policy}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.apig.Policy> {
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
        private final com.aliyun.ros.cdk.apig.PolicyProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.apig.PolicyProps.Builder();
        }

        /**
         * Property attachResourceIds: The Mount point id list.
         * <p>
         * @return {@code this}
         * @param attachResourceIds Property attachResourceIds: The Mount point id list. This parameter is required.
         */
        public Builder attachResourceIds(final com.aliyun.ros.cdk.core.IResolvable attachResourceIds) {
            this.props.attachResourceIds(attachResourceIds);
            return this;
        }
        /**
         * Property attachResourceIds: The Mount point id list.
         * <p>
         * @return {@code this}
         * @param attachResourceIds Property attachResourceIds: The Mount point id list. This parameter is required.
         */
        public Builder attachResourceIds(final java.util.List<? extends java.lang.Object> attachResourceIds) {
            this.props.attachResourceIds(attachResourceIds);
            return this;
        }

        /**
         * Property attachResourceType: Policies support mount point types.
         * <p>
         * HttpApi:HttpApi.
         * Operation: the Operation of the HttpApi.
         * GatewayRoute: Gateway route.
         * GatewayService: Gateway service.
         * GatewayServicePort: The Gateway service port.
         * Domain: The Gateway Domain name.
         * Gateway: Gateway.
         * <p>
         * @return {@code this}
         * @param attachResourceType Property attachResourceType: Policies support mount point types. This parameter is required.
         */
        public Builder attachResourceType(final java.lang.String attachResourceType) {
            this.props.attachResourceType(attachResourceType);
            return this;
        }
        /**
         * Property attachResourceType: Policies support mount point types.
         * <p>
         * HttpApi:HttpApi.
         * Operation: the Operation of the HttpApi.
         * GatewayRoute: Gateway route.
         * GatewayService: Gateway service.
         * GatewayServicePort: The Gateway service port.
         * Domain: The Gateway Domain name.
         * Gateway: Gateway.
         * <p>
         * @return {@code this}
         * @param attachResourceType Property attachResourceType: Policies support mount point types. This parameter is required.
         */
        public Builder attachResourceType(final com.aliyun.ros.cdk.core.IResolvable attachResourceType) {
            this.props.attachResourceType(attachResourceType);
            return this;
        }

        /**
         * Property environmentId: The id of the environment.
         * <p>
         * @return {@code this}
         * @param environmentId Property environmentId: The id of the environment. This parameter is required.
         */
        public Builder environmentId(final java.lang.String environmentId) {
            this.props.environmentId(environmentId);
            return this;
        }
        /**
         * Property environmentId: The id of the environment.
         * <p>
         * @return {@code this}
         * @param environmentId Property environmentId: The id of the environment. This parameter is required.
         */
        public Builder environmentId(final com.aliyun.ros.cdk.core.IResolvable environmentId) {
            this.props.environmentId(environmentId);
            return this;
        }

        /**
         * Property gatewayId: The ID of the Gateway.
         * <p>
         * @return {@code this}
         * @param gatewayId Property gatewayId: The ID of the Gateway. This parameter is required.
         */
        public Builder gatewayId(final java.lang.String gatewayId) {
            this.props.gatewayId(gatewayId);
            return this;
        }
        /**
         * Property gatewayId: The ID of the Gateway.
         * <p>
         * @return {@code this}
         * @param gatewayId Property gatewayId: The ID of the Gateway. This parameter is required.
         */
        public Builder gatewayId(final com.aliyun.ros.cdk.core.IResolvable gatewayId) {
            this.props.gatewayId(gatewayId);
            return this;
        }

        /**
         * Property policyClassName: The name of the policy class.
         * <p>
         * @return {@code this}
         * @param policyClassName Property policyClassName: The name of the policy class. This parameter is required.
         */
        public Builder policyClassName(final java.lang.String policyClassName) {
            this.props.policyClassName(policyClassName);
            return this;
        }
        /**
         * Property policyClassName: The name of the policy class.
         * <p>
         * @return {@code this}
         * @param policyClassName Property policyClassName: The name of the policy class. This parameter is required.
         */
        public Builder policyClassName(final com.aliyun.ros.cdk.core.IResolvable policyClassName) {
            this.props.policyClassName(policyClassName);
            return this;
        }

        /**
         * Property policyConfig: Policy Configuration.
         * <p>
         * @return {@code this}
         * @param policyConfig Property policyConfig: Policy Configuration. This parameter is required.
         */
        public Builder policyConfig(final java.lang.String policyConfig) {
            this.props.policyConfig(policyConfig);
            return this;
        }
        /**
         * Property policyConfig: Policy Configuration.
         * <p>
         * @return {@code this}
         * @param policyConfig Property policyConfig: Policy Configuration. This parameter is required.
         */
        public Builder policyConfig(final com.aliyun.ros.cdk.core.IResolvable policyConfig) {
            this.props.policyConfig(policyConfig);
            return this;
        }

        /**
         * Property policyName: The name of the policy.
         * <p>
         * @return {@code this}
         * @param policyName Property policyName: The name of the policy. This parameter is required.
         */
        public Builder policyName(final java.lang.String policyName) {
            this.props.policyName(policyName);
            return this;
        }
        /**
         * Property policyName: The name of the policy.
         * <p>
         * @return {@code this}
         * @param policyName Property policyName: The name of the policy. This parameter is required.
         */
        public Builder policyName(final com.aliyun.ros.cdk.core.IResolvable policyName) {
            this.props.policyName(policyName);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.apig.Policy}.
         */
        @Override
        public com.aliyun.ros.cdk.apig.Policy build() {
            return new com.aliyun.ros.cdk.apig.Policy(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
