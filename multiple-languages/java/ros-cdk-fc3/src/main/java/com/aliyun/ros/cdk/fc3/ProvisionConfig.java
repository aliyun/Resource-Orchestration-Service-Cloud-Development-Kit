package com.aliyun.ros.cdk.fc3;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::FC3::ProvisionConfig</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-01-23T09:30:40.156Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc3.$Module.class, fqn = "@alicloud/ros-cdk-fc3.ProvisionConfig")
public class ProvisionConfig extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.fc3.IProvisionConfig {

    protected ProvisionConfig(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ProvisionConfig(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public ProvisionConfig(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.fc3.ProvisionConfigProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public ProvisionConfig(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.fc3.ProvisionConfigProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.fc3.ProvisionConfigProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.fc3.ProvisionConfigProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.fc3.ProvisionConfig}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.fc3.ProvisionConfig> {
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
        private final com.aliyun.ros.cdk.fc3.ProvisionConfigProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.fc3.ProvisionConfigProps.Builder();
        }

        /**
         * Property defaultTarget: The number of target resources to reserve.
         * <p>
         * @return {@code this}
         * @param defaultTarget Property defaultTarget: The number of target resources to reserve. This parameter is required.
         */
        public Builder defaultTarget(final java.lang.Number defaultTarget) {
            this.props.defaultTarget(defaultTarget);
            return this;
        }
        /**
         * Property defaultTarget: The number of target resources to reserve.
         * <p>
         * @return {@code this}
         * @param defaultTarget Property defaultTarget: The number of target resources to reserve. This parameter is required.
         */
        public Builder defaultTarget(final com.aliyun.ros.cdk.core.IResolvable defaultTarget) {
            this.props.defaultTarget(defaultTarget);
            return this;
        }

        /**
         * Property functionName: Function name.
         * <p>
         * @return {@code this}
         * @param functionName Property functionName: Function name. This parameter is required.
         */
        public Builder functionName(final java.lang.String functionName) {
            this.props.functionName(functionName);
            return this;
        }
        /**
         * Property functionName: Function name.
         * <p>
         * @return {@code this}
         * @param functionName Property functionName: Function name. This parameter is required.
         */
        public Builder functionName(final com.aliyun.ros.cdk.core.IResolvable functionName) {
            this.props.functionName(functionName);
            return this;
        }

        /**
         * Property alwaysAllocateCpu: Whether CPU should always be allocated;
         * <p>
         * defaults to true.
         * <p>
         * @return {@code this}
         * @param alwaysAllocateCpu Property alwaysAllocateCpu: Whether CPU should always be allocated;. This parameter is required.
         */
        public Builder alwaysAllocateCpu(final java.lang.Boolean alwaysAllocateCpu) {
            this.props.alwaysAllocateCpu(alwaysAllocateCpu);
            return this;
        }
        /**
         * Property alwaysAllocateCpu: Whether CPU should always be allocated;
         * <p>
         * defaults to true.
         * <p>
         * @return {@code this}
         * @param alwaysAllocateCpu Property alwaysAllocateCpu: Whether CPU should always be allocated;. This parameter is required.
         */
        public Builder alwaysAllocateCpu(final com.aliyun.ros.cdk.core.IResolvable alwaysAllocateCpu) {
            this.props.alwaysAllocateCpu(alwaysAllocateCpu);
            return this;
        }

        /**
         * Property alwaysAllocateGpu: Whether GPU should always be allocated;
         * <p>
         * defaults to true.
         * <p>
         * @return {@code this}
         * @param alwaysAllocateGpu Property alwaysAllocateGpu: Whether GPU should always be allocated;. This parameter is required.
         */
        public Builder alwaysAllocateGpu(final java.lang.Boolean alwaysAllocateGpu) {
            this.props.alwaysAllocateGpu(alwaysAllocateGpu);
            return this;
        }
        /**
         * Property alwaysAllocateGpu: Whether GPU should always be allocated;
         * <p>
         * defaults to true.
         * <p>
         * @return {@code this}
         * @param alwaysAllocateGpu Property alwaysAllocateGpu: Whether GPU should always be allocated;. This parameter is required.
         */
        public Builder alwaysAllocateGpu(final com.aliyun.ros.cdk.core.IResolvable alwaysAllocateGpu) {
            this.props.alwaysAllocateGpu(alwaysAllocateGpu);
            return this;
        }

        /**
         * Property qualifier: Function alias or LATEST.
         * <p>
         * @return {@code this}
         * @param qualifier Property qualifier: Function alias or LATEST. This parameter is required.
         */
        public Builder qualifier(final java.lang.String qualifier) {
            this.props.qualifier(qualifier);
            return this;
        }
        /**
         * Property qualifier: Function alias or LATEST.
         * <p>
         * @return {@code this}
         * @param qualifier Property qualifier: Function alias or LATEST. This parameter is required.
         */
        public Builder qualifier(final com.aliyun.ros.cdk.core.IResolvable qualifier) {
            this.props.qualifier(qualifier);
            return this;
        }

        /**
         * Property scheduledActions: Timing policy configuration.
         * <p>
         * @return {@code this}
         * @param scheduledActions Property scheduledActions: Timing policy configuration. This parameter is required.
         */
        public Builder scheduledActions(final com.aliyun.ros.cdk.core.IResolvable scheduledActions) {
            this.props.scheduledActions(scheduledActions);
            return this;
        }
        /**
         * Property scheduledActions: Timing policy configuration.
         * <p>
         * @return {@code this}
         * @param scheduledActions Property scheduledActions: Timing policy configuration. This parameter is required.
         */
        public Builder scheduledActions(final java.util.List<? extends java.lang.Object> scheduledActions) {
            this.props.scheduledActions(scheduledActions);
            return this;
        }

        /**
         * Property targetTrackingPolicies: Target tracking policy configuration.
         * <p>
         * @return {@code this}
         * @param targetTrackingPolicies Property targetTrackingPolicies: Target tracking policy configuration. This parameter is required.
         */
        public Builder targetTrackingPolicies(final com.aliyun.ros.cdk.core.IResolvable targetTrackingPolicies) {
            this.props.targetTrackingPolicies(targetTrackingPolicies);
            return this;
        }
        /**
         * Property targetTrackingPolicies: Target tracking policy configuration.
         * <p>
         * @return {@code this}
         * @param targetTrackingPolicies Property targetTrackingPolicies: Target tracking policy configuration. This parameter is required.
         */
        public Builder targetTrackingPolicies(final java.util.List<? extends java.lang.Object> targetTrackingPolicies) {
            this.props.targetTrackingPolicies(targetTrackingPolicies);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.fc3.ProvisionConfig}.
         */
        @Override
        public com.aliyun.ros.cdk.fc3.ProvisionConfig build() {
            return new com.aliyun.ros.cdk.fc3.ProvisionConfig(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
