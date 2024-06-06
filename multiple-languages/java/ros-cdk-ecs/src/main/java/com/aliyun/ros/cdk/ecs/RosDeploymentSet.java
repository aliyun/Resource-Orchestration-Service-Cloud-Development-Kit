package com.aliyun.ros.cdk.ecs;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::ECS::DeploymentSet</code>, which is used to create a deployment set in a region.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-06T03:35:14.415Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.RosDeploymentSet")
public class RosDeploymentSet extends com.aliyun.ros.cdk.core.RosResource {

    protected RosDeploymentSet(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosDeploymentSet(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.ecs.RosDeploymentSet.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosDeploymentSet(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.RosDeploymentSetProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), java.util.Objects.requireNonNull(enableResourcePropertyConstraint, "enableResourcePropertyConstraint is required") });
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> renderProperties(final @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> props) {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.call(this, "renderProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)), new Object[] { java.util.Objects.requireNonNull(props, "props is required") }));
    }

    /**
     * The resource type name for this resource class.
     */
    public final static java.lang.String ROS_RESOURCE_TYPE_NAME;

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDeploymentSetId() {
        return software.amazon.jsii.Kernel.get(this, "attrDeploymentSetId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDeploymentSetName() {
        return software.amazon.jsii.Kernel.get(this, "deploymentSetName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDeploymentSetName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "deploymentSetName", value);
    }

    /**
     */
    public void setDeploymentSetName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "deploymentSetName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "description", value);
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "description", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getGroupCount() {
        return software.amazon.jsii.Kernel.get(this, "groupCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setGroupCount(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "groupCount", value);
    }

    /**
     */
    public void setGroupCount(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "groupCount", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getOnUnableToRedeployFailedInstance() {
        return software.amazon.jsii.Kernel.get(this, "onUnableToRedeployFailedInstance", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setOnUnableToRedeployFailedInstance(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "onUnableToRedeployFailedInstance", value);
    }

    /**
     */
    public void setOnUnableToRedeployFailedInstance(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "onUnableToRedeployFailedInstance", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getStrategy() {
        return software.amazon.jsii.Kernel.get(this, "strategy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setStrategy(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "strategy", value);
    }

    /**
     */
    public void setStrategy(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "strategy", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ecs.RosDeploymentSet}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ecs.RosDeploymentSet> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
         * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.ecs.RosDeploymentSetProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ecs.RosDeploymentSetProps.Builder();
        }

        /**
         * @return {@code this}
         * @param deploymentSetName This parameter is required.
         */
        public Builder deploymentSetName(final java.lang.String deploymentSetName) {
            this.props.deploymentSetName(deploymentSetName);
            return this;
        }
        /**
         * @return {@code this}
         * @param deploymentSetName This parameter is required.
         */
        public Builder deploymentSetName(final com.aliyun.ros.cdk.core.IResolvable deploymentSetName) {
            this.props.deploymentSetName(deploymentSetName);
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
         * @param description This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * @return {@code this}
         * @param groupCount This parameter is required.
         */
        public Builder groupCount(final java.lang.Number groupCount) {
            this.props.groupCount(groupCount);
            return this;
        }
        /**
         * @return {@code this}
         * @param groupCount This parameter is required.
         */
        public Builder groupCount(final com.aliyun.ros.cdk.core.IResolvable groupCount) {
            this.props.groupCount(groupCount);
            return this;
        }

        /**
         * @return {@code this}
         * @param onUnableToRedeployFailedInstance This parameter is required.
         */
        public Builder onUnableToRedeployFailedInstance(final java.lang.String onUnableToRedeployFailedInstance) {
            this.props.onUnableToRedeployFailedInstance(onUnableToRedeployFailedInstance);
            return this;
        }
        /**
         * @return {@code this}
         * @param onUnableToRedeployFailedInstance This parameter is required.
         */
        public Builder onUnableToRedeployFailedInstance(final com.aliyun.ros.cdk.core.IResolvable onUnableToRedeployFailedInstance) {
            this.props.onUnableToRedeployFailedInstance(onUnableToRedeployFailedInstance);
            return this;
        }

        /**
         * @return {@code this}
         * @param strategy This parameter is required.
         */
        public Builder strategy(final java.lang.String strategy) {
            this.props.strategy(strategy);
            return this;
        }
        /**
         * @return {@code this}
         * @param strategy This parameter is required.
         */
        public Builder strategy(final com.aliyun.ros.cdk.core.IResolvable strategy) {
            this.props.strategy(strategy);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ecs.RosDeploymentSet}.
         */
        @Override
        public com.aliyun.ros.cdk.ecs.RosDeploymentSet build() {
            return new com.aliyun.ros.cdk.ecs.RosDeploymentSet(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
