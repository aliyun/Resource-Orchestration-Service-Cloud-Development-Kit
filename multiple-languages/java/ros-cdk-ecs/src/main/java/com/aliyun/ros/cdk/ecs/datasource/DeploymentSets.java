package com.aliyun.ros.cdk.ecs.datasource;

/**
 * A ROS resource type:  <code>DATASOURCE::ECS::DeploymentSets</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-11-07T09:08:35.095Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.datasource.DeploymentSets")
public class DeploymentSets extends com.aliyun.ros.cdk.core.Resource {

    protected DeploymentSets(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected DeploymentSets(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>DATASOURCE::ECS::DeploymentSets</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     * @param enableResourcePropertyConstraint
     */
    public DeploymentSets(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.ecs.datasource.DeploymentSetsProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props, enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>DATASOURCE::ECS::DeploymentSets</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     */
    public DeploymentSets(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.ecs.datasource.DeploymentSetsProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Create a new <code>DATASOURCE::ECS::DeploymentSets</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public DeploymentSets(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute DeploymentSetIds: the list of deployment set ids.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDeploymentSetIds() {
        return software.amazon.jsii.Kernel.get(this, "attrDeploymentSetIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute DeploymentSets: The list of deployment sets.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDeploymentSets() {
        return software.amazon.jsii.Kernel.get(this, "attrDeploymentSets", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ecs.datasource.DeploymentSets}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ecs.datasource.DeploymentSets> {
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
        private com.aliyun.ros.cdk.ecs.datasource.DeploymentSetsProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property deploymentSetIds: he IDs of deployment sets.
         * <p>
         * The value can be a JSON array that consists of up to 100 deployment set IDs in the format of ["ds-xxxxxxxxx", "ds-yyyyyyyyy", … "ds-zzzzzzzzz"]. Separate multiple deployment set IDs with commas (,).
         * <p>
         * @return {@code this}
         * @param deploymentSetIds Property deploymentSetIds: he IDs of deployment sets. This parameter is required.
         */
        public Builder deploymentSetIds(final java.util.List<? extends java.lang.Object> deploymentSetIds) {
            this.props().deploymentSetIds(deploymentSetIds);
            return this;
        }
        /**
         * Property deploymentSetIds: he IDs of deployment sets.
         * <p>
         * The value can be a JSON array that consists of up to 100 deployment set IDs in the format of ["ds-xxxxxxxxx", "ds-yyyyyyyyy", … "ds-zzzzzzzzz"]. Separate multiple deployment set IDs with commas (,).
         * <p>
         * @return {@code this}
         * @param deploymentSetIds Property deploymentSetIds: he IDs of deployment sets. This parameter is required.
         */
        public Builder deploymentSetIds(final com.aliyun.ros.cdk.core.IResolvable deploymentSetIds) {
            this.props().deploymentSetIds(deploymentSetIds);
            return this;
        }

        /**
         * Property deploymentSetName: The name of the deployment set.
         * <p>
         * @return {@code this}
         * @param deploymentSetName Property deploymentSetName: The name of the deployment set. This parameter is required.
         */
        public Builder deploymentSetName(final java.lang.String deploymentSetName) {
            this.props().deploymentSetName(deploymentSetName);
            return this;
        }
        /**
         * Property deploymentSetName: The name of the deployment set.
         * <p>
         * @return {@code this}
         * @param deploymentSetName Property deploymentSetName: The name of the deployment set. This parameter is required.
         */
        public Builder deploymentSetName(final com.aliyun.ros.cdk.core.IResolvable deploymentSetName) {
            this.props().deploymentSetName(deploymentSetName);
            return this;
        }

        /**
         * Property domain: The deployment domain.
         * <p>
         * @return {@code this}
         * @param domain Property domain: The deployment domain. This parameter is required.
         */
        public Builder domain(final java.lang.String domain) {
            this.props().domain(domain);
            return this;
        }
        /**
         * Property domain: The deployment domain.
         * <p>
         * @return {@code this}
         * @param domain Property domain: The deployment domain. This parameter is required.
         */
        public Builder domain(final com.aliyun.ros.cdk.core.IResolvable domain) {
            this.props().domain(domain);
            return this;
        }

        /**
         * Property strategy: The deployment strategy.
         * <p>
         * Valid values:
         * Availability: high availability strategy.
         * AvailabilityGroup: high availability group strategy.
         * <p>
         * @return {@code this}
         * @param strategy Property strategy: The deployment strategy. This parameter is required.
         */
        public Builder strategy(final java.lang.String strategy) {
            this.props().strategy(strategy);
            return this;
        }
        /**
         * Property strategy: The deployment strategy.
         * <p>
         * Valid values:
         * Availability: high availability strategy.
         * AvailabilityGroup: high availability group strategy.
         * <p>
         * @return {@code this}
         * @param strategy Property strategy: The deployment strategy. This parameter is required.
         */
        public Builder strategy(final com.aliyun.ros.cdk.core.IResolvable strategy) {
            this.props().strategy(strategy);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ecs.datasource.DeploymentSets}.
         */
        @Override
        public com.aliyun.ros.cdk.ecs.datasource.DeploymentSets build() {
            return new com.aliyun.ros.cdk.ecs.datasource.DeploymentSets(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.ecs.datasource.DeploymentSetsProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.ecs.datasource.DeploymentSetsProps.Builder();
            }
            return this.props;
        }
    }
}
