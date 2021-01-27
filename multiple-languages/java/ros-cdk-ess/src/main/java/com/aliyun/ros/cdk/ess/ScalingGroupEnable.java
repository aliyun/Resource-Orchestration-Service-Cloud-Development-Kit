package com.aliyun.ros.cdk.ess;

/**
 * A ROS resource type:  `ALIYUN::ESS::ScalingGroupEnable`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:33.925Z")
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
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public ScalingGroupEnable(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ess.ScalingGroupEnableProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::ESS::ScalingGroupEnable`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     */
    public ScalingGroupEnable(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ess.ScalingGroupEnableProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrLifecycleState() {
        return software.amazon.jsii.Kernel.get(this, "attrLifecycleState", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrScalingGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrScalingGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrScalingInstanceDetails() {
        return software.amazon.jsii.Kernel.get(this, "attrScalingInstanceDetails", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrScalingInstances() {
        return software.amazon.jsii.Kernel.get(this, "attrScalingInstances", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrScalingRuleArisExecuteErrorInfo() {
        return software.amazon.jsii.Kernel.get(this, "attrScalingRuleArisExecuteErrorInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrScalingRuleArisExecuteResultInstancesAdded() {
        return software.amazon.jsii.Kernel.get(this, "attrScalingRuleArisExecuteResultInstancesAdded", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrScalingRuleArisExecuteResultInstancesRemoved() {
        return software.amazon.jsii.Kernel.get(this, "attrScalingRuleArisExecuteResultInstancesRemoved", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrScalingRuleArisExecuteResultNumberOfAddedInstances() {
        return software.amazon.jsii.Kernel.get(this, "attrScalingRuleArisExecuteResultNumberOfAddedInstances", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ess.ScalingGroupEnable}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ess.ScalingGroupEnable> {
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
        private final com.aliyun.ros.cdk.ess.ScalingGroupEnableProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ess.ScalingGroupEnableProps.Builder();
        }

        /**
         * @return {@code this}
         * @param scalingGroupId This parameter is required.
         */
        public Builder scalingGroupId(final java.lang.String scalingGroupId) {
            this.props.scalingGroupId(scalingGroupId);
            return this;
        }

        /**
         * @return {@code this}
         * @param instanceIds This parameter is required.
         */
        public Builder instanceIds(final java.util.List<? extends java.lang.Object> instanceIds) {
            this.props.instanceIds(instanceIds);
            return this;
        }
        /**
         * @return {@code this}
         * @param instanceIds This parameter is required.
         */
        public Builder instanceIds(final com.aliyun.ros.cdk.core.IResolvable instanceIds) {
            this.props.instanceIds(instanceIds);
            return this;
        }

        /**
         * @return {@code this}
         * @param removeInstanceIds This parameter is required.
         */
        public Builder removeInstanceIds(final java.util.List<? extends java.lang.Object> removeInstanceIds) {
            this.props.removeInstanceIds(removeInstanceIds);
            return this;
        }
        /**
         * @return {@code this}
         * @param removeInstanceIds This parameter is required.
         */
        public Builder removeInstanceIds(final com.aliyun.ros.cdk.core.IResolvable removeInstanceIds) {
            this.props.removeInstanceIds(removeInstanceIds);
            return this;
        }

        /**
         * @return {@code this}
         * @param scalingConfigurationId This parameter is required.
         */
        public Builder scalingConfigurationId(final java.lang.String scalingConfigurationId) {
            this.props.scalingConfigurationId(scalingConfigurationId);
            return this;
        }

        /**
         * @return {@code this}
         * @param scalingRuleAris This parameter is required.
         */
        public Builder scalingRuleAris(final java.util.List<? extends java.lang.Object> scalingRuleAris) {
            this.props.scalingRuleAris(scalingRuleAris);
            return this;
        }
        /**
         * @return {@code this}
         * @param scalingRuleAris This parameter is required.
         */
        public Builder scalingRuleAris(final com.aliyun.ros.cdk.core.IResolvable scalingRuleAris) {
            this.props.scalingRuleAris(scalingRuleAris);
            return this;
        }

        /**
         * @return {@code this}
         * @param scalingRuleArisExecuteVersion This parameter is required.
         */
        public Builder scalingRuleArisExecuteVersion(final java.lang.Number scalingRuleArisExecuteVersion) {
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
