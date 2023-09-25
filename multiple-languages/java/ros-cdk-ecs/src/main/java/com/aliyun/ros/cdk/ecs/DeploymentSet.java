package com.aliyun.ros.cdk.ecs;

/**
 * A ROS resource type:  <code>ALIYUN::ECS::DeploymentSet</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-25T05:23:24.682Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.DeploymentSet")
public class DeploymentSet extends com.aliyun.ros.cdk.core.Resource {

    protected DeploymentSet(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected DeploymentSet(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>ALIYUN::ECS::DeploymentSet</code>.
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
    public DeploymentSet(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.ecs.DeploymentSetProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props, enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>ALIYUN::ECS::DeploymentSet</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     */
    public DeploymentSet(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.ecs.DeploymentSetProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Create a new <code>ALIYUN::ECS::DeploymentSet</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public DeploymentSet(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute DeploymentSetId: The ID of the deployment set.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDeploymentSetId() {
        return software.amazon.jsii.Kernel.get(this, "attrDeploymentSetId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ecs.DeploymentSet}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ecs.DeploymentSet> {
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
        private com.aliyun.ros.cdk.ecs.DeploymentSetProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property deploymentSetName: The name of the deployment set.
         * <p>
         * It must be 2 to 128 characters in length. It must
         * start with a letter and cannot start with http:// or https://. It can contain letters,
         * digits, colons (:), underscores (_), and hyphens (-).
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
         * It must be 2 to 128 characters in length. It must
         * start with a letter and cannot start with http:// or https://. It can contain letters,
         * digits, colons (:), underscores (_), and hyphens (-).
         * <p>
         * @return {@code this}
         * @param deploymentSetName Property deploymentSetName: The name of the deployment set. This parameter is required.
         */
        public Builder deploymentSetName(final com.aliyun.ros.cdk.core.IResolvable deploymentSetName) {
            this.props().deploymentSetName(deploymentSetName);
            return this;
        }

        /**
         * Property description: The description of the deployment set.
         * <p>
         * It must be 2 to 256 characters in length. It
         * cannot start with http:// or https://.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the deployment set. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props().description(description);
            return this;
        }
        /**
         * Property description: The description of the deployment set.
         * <p>
         * It must be 2 to 256 characters in length. It
         * cannot start with http:// or https://.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the deployment set. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props().description(description);
            return this;
        }

        /**
         * Property onUnableToRedeployFailedInstance: The emergency solution to redeploy failed instances in the deployment set.
         * <p>
         * Valid values:
         * CancelMembershipAndStart: restarts the instances immediately after they are shut down
         * and migrated to other deployment sets. This is the default value.
         * KeepStopped: keeps the instances shut down and restarts them after the deployment
         * set is replenished.
         * <p>
         * @return {@code this}
         * @param onUnableToRedeployFailedInstance Property onUnableToRedeployFailedInstance: The emergency solution to redeploy failed instances in the deployment set. This parameter is required.
         */
        public Builder onUnableToRedeployFailedInstance(final java.lang.String onUnableToRedeployFailedInstance) {
            this.props().onUnableToRedeployFailedInstance(onUnableToRedeployFailedInstance);
            return this;
        }
        /**
         * Property onUnableToRedeployFailedInstance: The emergency solution to redeploy failed instances in the deployment set.
         * <p>
         * Valid values:
         * CancelMembershipAndStart: restarts the instances immediately after they are shut down
         * and migrated to other deployment sets. This is the default value.
         * KeepStopped: keeps the instances shut down and restarts them after the deployment
         * set is replenished.
         * <p>
         * @return {@code this}
         * @param onUnableToRedeployFailedInstance Property onUnableToRedeployFailedInstance: The emergency solution to redeploy failed instances in the deployment set. This parameter is required.
         */
        public Builder onUnableToRedeployFailedInstance(final com.aliyun.ros.cdk.core.IResolvable onUnableToRedeployFailedInstance) {
            this.props().onUnableToRedeployFailedInstance(onUnableToRedeployFailedInstance);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ecs.DeploymentSet}.
         */
        @Override
        public com.aliyun.ros.cdk.ecs.DeploymentSet build() {
            return new com.aliyun.ros.cdk.ecs.DeploymentSet(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.ecs.DeploymentSetProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.ecs.DeploymentSetProps.Builder();
            }
            return this.props;
        }
    }
}
