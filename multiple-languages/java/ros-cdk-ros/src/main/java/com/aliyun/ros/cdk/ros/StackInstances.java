package com.aliyun.ros.cdk.ros;

/**
 * A ROS resource type:  `ALIYUN::ROS::StackInstances`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.70.0 (build 03c2f6f)", date = "2022-11-04T06:18:43.725Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ros.$Module.class, fqn = "@alicloud/ros-cdk-ros.StackInstances")
public class StackInstances extends com.aliyun.ros.cdk.core.Resource {

    protected StackInstances(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected StackInstances(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::ROS::StackInstances`.
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
    public StackInstances(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ros.StackInstancesProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::ROS::StackInstances`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public StackInstances(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ros.StackInstancesProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute LastOperationId: undefined.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrLastOperationId() {
        return software.amazon.jsii.Kernel.get(this, "attrLastOperationId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Stacks: undefined.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrStacks() {
        return software.amazon.jsii.Kernel.get(this, "attrStacks", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ros.StackInstances}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ros.StackInstances> {
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
        private final com.aliyun.ros.cdk.ros.StackInstancesProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ros.StackInstancesProps.Builder();
        }

        /**
         * Property regionIds: undefined.
         * <p>
         * @return {@code this}
         * @param regionIds Property regionIds: undefined. This parameter is required.
         */
        public Builder regionIds(final com.aliyun.ros.cdk.core.IResolvable regionIds) {
            this.props.regionIds(regionIds);
            return this;
        }
        /**
         * Property regionIds: undefined.
         * <p>
         * @return {@code this}
         * @param regionIds Property regionIds: undefined. This parameter is required.
         */
        public Builder regionIds(final java.util.List<? extends java.lang.Object> regionIds) {
            this.props.regionIds(regionIds);
            return this;
        }

        /**
         * Property stackGroupName: undefined.
         * <p>
         * @return {@code this}
         * @param stackGroupName Property stackGroupName: undefined. This parameter is required.
         */
        public Builder stackGroupName(final java.lang.String stackGroupName) {
            this.props.stackGroupName(stackGroupName);
            return this;
        }
        /**
         * Property stackGroupName: undefined.
         * <p>
         * @return {@code this}
         * @param stackGroupName Property stackGroupName: undefined. This parameter is required.
         */
        public Builder stackGroupName(final com.aliyun.ros.cdk.core.IResolvable stackGroupName) {
            this.props.stackGroupName(stackGroupName);
            return this;
        }

        /**
         * Property accountIds: undefined.
         * <p>
         * @return {@code this}
         * @param accountIds Property accountIds: undefined. This parameter is required.
         */
        public Builder accountIds(final com.aliyun.ros.cdk.core.IResolvable accountIds) {
            this.props.accountIds(accountIds);
            return this;
        }
        /**
         * Property accountIds: undefined.
         * <p>
         * @return {@code this}
         * @param accountIds Property accountIds: undefined. This parameter is required.
         */
        public Builder accountIds(final java.util.List<? extends java.lang.Object> accountIds) {
            this.props.accountIds(accountIds);
            return this;
        }

        /**
         * Property deploymentTargets: undefined.
         * <p>
         * @return {@code this}
         * @param deploymentTargets Property deploymentTargets: undefined. This parameter is required.
         */
        public Builder deploymentTargets(final com.aliyun.ros.cdk.core.IResolvable deploymentTargets) {
            this.props.deploymentTargets(deploymentTargets);
            return this;
        }
        /**
         * Property deploymentTargets: undefined.
         * <p>
         * @return {@code this}
         * @param deploymentTargets Property deploymentTargets: undefined. This parameter is required.
         */
        public Builder deploymentTargets(final com.aliyun.ros.cdk.ros.RosStackInstances.DeploymentTargetsProperty deploymentTargets) {
            this.props.deploymentTargets(deploymentTargets);
            return this;
        }

        /**
         * Property disableRollback: undefined.
         * <p>
         * @return {@code this}
         * @param disableRollback Property disableRollback: undefined. This parameter is required.
         */
        public Builder disableRollback(final java.lang.Boolean disableRollback) {
            this.props.disableRollback(disableRollback);
            return this;
        }
        /**
         * Property disableRollback: undefined.
         * <p>
         * @return {@code this}
         * @param disableRollback Property disableRollback: undefined. This parameter is required.
         */
        public Builder disableRollback(final com.aliyun.ros.cdk.core.IResolvable disableRollback) {
            this.props.disableRollback(disableRollback);
            return this;
        }

        /**
         * Property operationDescription: undefined.
         * <p>
         * @return {@code this}
         * @param operationDescription Property operationDescription: undefined. This parameter is required.
         */
        public Builder operationDescription(final java.lang.String operationDescription) {
            this.props.operationDescription(operationDescription);
            return this;
        }
        /**
         * Property operationDescription: undefined.
         * <p>
         * @return {@code this}
         * @param operationDescription Property operationDescription: undefined. This parameter is required.
         */
        public Builder operationDescription(final com.aliyun.ros.cdk.core.IResolvable operationDescription) {
            this.props.operationDescription(operationDescription);
            return this;
        }

        /**
         * Property operationPreferences: undefined.
         * <p>
         * @return {@code this}
         * @param operationPreferences Property operationPreferences: undefined. This parameter is required.
         */
        public Builder operationPreferences(final com.aliyun.ros.cdk.core.IResolvable operationPreferences) {
            this.props.operationPreferences(operationPreferences);
            return this;
        }
        /**
         * Property operationPreferences: undefined.
         * <p>
         * @return {@code this}
         * @param operationPreferences Property operationPreferences: undefined. This parameter is required.
         */
        public Builder operationPreferences(final com.aliyun.ros.cdk.ros.RosStackInstances.OperationPreferencesProperty operationPreferences) {
            this.props.operationPreferences(operationPreferences);
            return this;
        }

        /**
         * Property parameterOverrides: undefined.
         * <p>
         * @return {@code this}
         * @param parameterOverrides Property parameterOverrides: undefined. This parameter is required.
         */
        public Builder parameterOverrides(final com.aliyun.ros.cdk.core.IResolvable parameterOverrides) {
            this.props.parameterOverrides(parameterOverrides);
            return this;
        }
        /**
         * Property parameterOverrides: undefined.
         * <p>
         * @return {@code this}
         * @param parameterOverrides Property parameterOverrides: undefined. This parameter is required.
         */
        public Builder parameterOverrides(final java.util.Map<java.lang.String, ? extends java.lang.Object> parameterOverrides) {
            this.props.parameterOverrides(parameterOverrides);
            return this;
        }

        /**
         * Property retainStacks: undefined.
         * <p>
         * @return {@code this}
         * @param retainStacks Property retainStacks: undefined. This parameter is required.
         */
        public Builder retainStacks(final java.lang.Boolean retainStacks) {
            this.props.retainStacks(retainStacks);
            return this;
        }
        /**
         * Property retainStacks: undefined.
         * <p>
         * @return {@code this}
         * @param retainStacks Property retainStacks: undefined. This parameter is required.
         */
        public Builder retainStacks(final com.aliyun.ros.cdk.core.IResolvable retainStacks) {
            this.props.retainStacks(retainStacks);
            return this;
        }

        /**
         * Property timeoutInMinutes: undefined.
         * <p>
         * @return {@code this}
         * @param timeoutInMinutes Property timeoutInMinutes: undefined. This parameter is required.
         */
        public Builder timeoutInMinutes(final java.lang.Number timeoutInMinutes) {
            this.props.timeoutInMinutes(timeoutInMinutes);
            return this;
        }
        /**
         * Property timeoutInMinutes: undefined.
         * <p>
         * @return {@code this}
         * @param timeoutInMinutes Property timeoutInMinutes: undefined. This parameter is required.
         */
        public Builder timeoutInMinutes(final com.aliyun.ros.cdk.core.IResolvable timeoutInMinutes) {
            this.props.timeoutInMinutes(timeoutInMinutes);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.ros.StackInstances}.
         */
        @Override
        public com.aliyun.ros.cdk.ros.StackInstances build() {
            return new com.aliyun.ros.cdk.ros.StackInstances(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
