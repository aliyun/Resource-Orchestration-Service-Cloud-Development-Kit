package com.aliyun.ros.cdk.ess;

/**
 * A ROS resource type:  `ALIYUN::ESS::ScalingGroupEnable`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.71.0 (build f1f58ae)", date = "2022-11-16T03:59:10.027Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ess.$Module.class, fqn = "@alicloud/ros-cdk-ess.ScalingGroupEnable")
public class ScalingGroupEnable extends com.aliyun.ros.cdk.core.Resource {

    protected ScalingGroupEnable(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ScalingGroupEnable(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::ESS::ScalingGroupEnable`.
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
    public ScalingGroupEnable(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ess.ScalingGroupEnableProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::ESS::ScalingGroupEnable`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public ScalingGroupEnable(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ess.ScalingGroupEnableProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute LifecycleState: The scaling group status.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrLifecycleState() {
        return software.amazon.jsii.Kernel.get(this, "attrLifecycleState", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ScalingGroupId: The scaling group id.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrScalingGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrScalingGroupId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ScalingInstanceDetails: Detail information of auto created scaling instances.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrScalingInstanceDetails() {
        return software.amazon.jsii.Kernel.get(this, "attrScalingInstanceDetails", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ScalingInstances: The auto created scaling instances.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrScalingInstances() {
        return software.amazon.jsii.Kernel.get(this, "attrScalingInstances", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ScalingRuleArisExecuteErrorInfo: The error info of the execution of scaling rule aris.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrScalingRuleArisExecuteErrorInfo() {
        return software.amazon.jsii.Kernel.get(this, "attrScalingRuleArisExecuteErrorInfo", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ScalingRuleArisExecuteResultInstancesAdded: Instances added via the execution of scaling rule aris.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrScalingRuleArisExecuteResultInstancesAdded() {
        return software.amazon.jsii.Kernel.get(this, "attrScalingRuleArisExecuteResultInstancesAdded", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ScalingRuleArisExecuteResultInstancesRemoved: Instances removed via the execution of scaling rule aris.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrScalingRuleArisExecuteResultInstancesRemoved() {
        return software.amazon.jsii.Kernel.get(this, "attrScalingRuleArisExecuteResultInstancesRemoved", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ScalingRuleArisExecuteResultNumberOfAddedInstances: The number of added vm via the execution of scaling rule aris.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrScalingRuleArisExecuteResultNumberOfAddedInstances() {
        return software.amazon.jsii.Kernel.get(this, "attrScalingRuleArisExecuteResultNumberOfAddedInstances", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ess.ScalingGroupEnable}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ess.ScalingGroupEnable> {
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
        private final com.aliyun.ros.cdk.ess.ScalingGroupEnableProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ess.ScalingGroupEnableProps.Builder();
        }

        /**
         * Property scalingGroupId: The id of operated scaling group.
         * <p>
         * @return {@code this}
         * @param scalingGroupId Property scalingGroupId: The id of operated scaling group. This parameter is required.
         */
        public Builder scalingGroupId(final java.lang.String scalingGroupId) {
            this.props.scalingGroupId(scalingGroupId);
            return this;
        }
        /**
         * Property scalingGroupId: The id of operated scaling group.
         * <p>
         * @return {@code this}
         * @param scalingGroupId Property scalingGroupId: The id of operated scaling group. This parameter is required.
         */
        public Builder scalingGroupId(final com.aliyun.ros.cdk.core.IResolvable scalingGroupId) {
            this.props.scalingGroupId(scalingGroupId);
            return this;
        }

        /**
         * Property instanceIds: The id list of ECS instance which will be attached.
         * <p>
         * Max support 1000 instances.
         * <p>
         * @return {@code this}
         * @param instanceIds Property instanceIds: The id list of ECS instance which will be attached. This parameter is required.
         */
        public Builder instanceIds(final java.util.List<? extends java.lang.Object> instanceIds) {
            this.props.instanceIds(instanceIds);
            return this;
        }
        /**
         * Property instanceIds: The id list of ECS instance which will be attached.
         * <p>
         * Max support 1000 instances.
         * <p>
         * @return {@code this}
         * @param instanceIds Property instanceIds: The id list of ECS instance which will be attached. This parameter is required.
         */
        public Builder instanceIds(final com.aliyun.ros.cdk.core.IResolvable instanceIds) {
            this.props.instanceIds(instanceIds);
            return this;
        }

        /**
         * Property removeInstanceIds: The id list of ECS instance which will be removed.
         * <p>
         * Max support 1000 instances.
         * <p>
         * @return {@code this}
         * @param removeInstanceIds Property removeInstanceIds: The id list of ECS instance which will be removed. This parameter is required.
         */
        public Builder removeInstanceIds(final java.util.List<? extends java.lang.Object> removeInstanceIds) {
            this.props.removeInstanceIds(removeInstanceIds);
            return this;
        }
        /**
         * Property removeInstanceIds: The id list of ECS instance which will be removed.
         * <p>
         * Max support 1000 instances.
         * <p>
         * @return {@code this}
         * @param removeInstanceIds Property removeInstanceIds: The id list of ECS instance which will be removed. This parameter is required.
         */
        public Builder removeInstanceIds(final com.aliyun.ros.cdk.core.IResolvable removeInstanceIds) {
            this.props.removeInstanceIds(removeInstanceIds);
            return this;
        }

        /**
         * Property scalingConfigurationId: The id of scaling configuration which will be activate.
         * <p>
         * @return {@code this}
         * @param scalingConfigurationId Property scalingConfigurationId: The id of scaling configuration which will be activate. This parameter is required.
         */
        public Builder scalingConfigurationId(final java.lang.String scalingConfigurationId) {
            this.props.scalingConfigurationId(scalingConfigurationId);
            return this;
        }
        /**
         * Property scalingConfigurationId: The id of scaling configuration which will be activate.
         * <p>
         * @return {@code this}
         * @param scalingConfigurationId Property scalingConfigurationId: The id of scaling configuration which will be activate. This parameter is required.
         */
        public Builder scalingConfigurationId(final com.aliyun.ros.cdk.core.IResolvable scalingConfigurationId) {
            this.props.scalingConfigurationId(scalingConfigurationId);
            return this;
        }

        /**
         * Property scalingRuleAris: A list of scaling rule aris which will be executed.
         * <p>
         * Max support 10 scaling rule aris.
         * When creating the resource, all the scaling rule aris in the list will be executed.
         * When updating the resource, none of scaling rule aris in the list will be executed, unless ScalingRuleArisExecuteVersion is changed.
         * <p>
         * @return {@code this}
         * @param scalingRuleAris Property scalingRuleAris: A list of scaling rule aris which will be executed. This parameter is required.
         */
        public Builder scalingRuleAris(final java.util.List<? extends java.lang.Object> scalingRuleAris) {
            this.props.scalingRuleAris(scalingRuleAris);
            return this;
        }
        /**
         * Property scalingRuleAris: A list of scaling rule aris which will be executed.
         * <p>
         * Max support 10 scaling rule aris.
         * When creating the resource, all the scaling rule aris in the list will be executed.
         * When updating the resource, none of scaling rule aris in the list will be executed, unless ScalingRuleArisExecuteVersion is changed.
         * <p>
         * @return {@code this}
         * @param scalingRuleAris Property scalingRuleAris: A list of scaling rule aris which will be executed. This parameter is required.
         */
        public Builder scalingRuleAris(final com.aliyun.ros.cdk.core.IResolvable scalingRuleAris) {
            this.props.scalingRuleAris(scalingRuleAris);
            return this;
        }

        /**
         * Property scalingRuleArisExecuteVersion: The change of the property leads to the execution of all the scaling rule aris in ScalingRuleAris.
         * <p>
         * @return {@code this}
         * @param scalingRuleArisExecuteVersion Property scalingRuleArisExecuteVersion: The change of the property leads to the execution of all the scaling rule aris in ScalingRuleAris. This parameter is required.
         */
        public Builder scalingRuleArisExecuteVersion(final java.lang.Number scalingRuleArisExecuteVersion) {
            this.props.scalingRuleArisExecuteVersion(scalingRuleArisExecuteVersion);
            return this;
        }
        /**
         * Property scalingRuleArisExecuteVersion: The change of the property leads to the execution of all the scaling rule aris in ScalingRuleAris.
         * <p>
         * @return {@code this}
         * @param scalingRuleArisExecuteVersion Property scalingRuleArisExecuteVersion: The change of the property leads to the execution of all the scaling rule aris in ScalingRuleAris. This parameter is required.
         */
        public Builder scalingRuleArisExecuteVersion(final com.aliyun.ros.cdk.core.IResolvable scalingRuleArisExecuteVersion) {
            this.props.scalingRuleArisExecuteVersion(scalingRuleArisExecuteVersion);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.ess.ScalingGroupEnable}.
         */
        @Override
        public com.aliyun.ros.cdk.ess.ScalingGroupEnable build() {
            return new com.aliyun.ros.cdk.ess.ScalingGroupEnable(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
