package com.aliyun.ros.cdk.ess;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ESS::LoadBalancerAttachment</code>, which is used to add one or more Server Load Balancer (SLB) instances.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:06.629Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ess.$Module.class, fqn = "@alicloud/ros-cdk-ess.LoadBalancerAttachment")
public class LoadBalancerAttachment extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.ess.ILoadBalancerAttachment {

    protected LoadBalancerAttachment(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected LoadBalancerAttachment(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public LoadBalancerAttachment(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ess.LoadBalancerAttachmentProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public LoadBalancerAttachment(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ess.LoadBalancerAttachmentProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ess.LoadBalancerAttachmentProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ess.LoadBalancerAttachmentProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.ess.LoadBalancerAttachment}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ess.LoadBalancerAttachment> {
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
        private final com.aliyun.ros.cdk.ess.LoadBalancerAttachmentProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ess.LoadBalancerAttachmentProps.Builder();
        }

        /**
         * Property scalingGroupId: The ID of the scaling group.
         * <p>
         * @return {@code this}
         * @param scalingGroupId Property scalingGroupId: The ID of the scaling group. This parameter is required.
         */
        public Builder scalingGroupId(final java.lang.String scalingGroupId) {
            this.props.scalingGroupId(scalingGroupId);
            return this;
        }
        /**
         * Property scalingGroupId: The ID of the scaling group.
         * <p>
         * @return {@code this}
         * @param scalingGroupId Property scalingGroupId: The ID of the scaling group. This parameter is required.
         */
        public Builder scalingGroupId(final com.aliyun.ros.cdk.core.IResolvable scalingGroupId) {
            this.props.scalingGroupId(scalingGroupId);
            return this;
        }

        /**
         * Property forceAttach: Specifies whether to add all instances in the current scaling group to the backend server groups of the attached CLB instance.
         * <p>
         * Valid values:
         * true
         * false
         * Default value: false.
         * <p>
         * @return {@code this}
         * @param forceAttach Property forceAttach: Specifies whether to add all instances in the current scaling group to the backend server groups of the attached CLB instance. This parameter is required.
         */
        public Builder forceAttach(final java.lang.Boolean forceAttach) {
            this.props.forceAttach(forceAttach);
            return this;
        }
        /**
         * Property forceAttach: Specifies whether to add all instances in the current scaling group to the backend server groups of the attached CLB instance.
         * <p>
         * Valid values:
         * true
         * false
         * Default value: false.
         * <p>
         * @return {@code this}
         * @param forceAttach Property forceAttach: Specifies whether to add all instances in the current scaling group to the backend server groups of the attached CLB instance. This parameter is required.
         */
        public Builder forceAttach(final com.aliyun.ros.cdk.core.IResolvable forceAttach) {
            this.props.forceAttach(forceAttach);
            return this;
        }

        /**
         * Property loadBalancerConfigs: Load balancer configuration list.
         * <p>
         * @return {@code this}
         * @param loadBalancerConfigs Property loadBalancerConfigs: Load balancer configuration list. This parameter is required.
         */
        public Builder loadBalancerConfigs(final com.aliyun.ros.cdk.core.IResolvable loadBalancerConfigs) {
            this.props.loadBalancerConfigs(loadBalancerConfigs);
            return this;
        }
        /**
         * Property loadBalancerConfigs: Load balancer configuration list.
         * <p>
         * @return {@code this}
         * @param loadBalancerConfigs Property loadBalancerConfigs: Load balancer configuration list. This parameter is required.
         */
        public Builder loadBalancerConfigs(final java.util.List<? extends java.lang.Object> loadBalancerConfigs) {
            this.props.loadBalancerConfigs(loadBalancerConfigs);
            return this;
        }

        /**
         * Property loadBalancers: The ID of CLB instance N that you want to attach to the scaling group.
         * <p>
         * Valid values of N: 1 to 5.
         * <p>
         * @return {@code this}
         * @param loadBalancers Property loadBalancers: The ID of CLB instance N that you want to attach to the scaling group. This parameter is required.
         */
        public Builder loadBalancers(final com.aliyun.ros.cdk.core.IResolvable loadBalancers) {
            this.props.loadBalancers(loadBalancers);
            return this;
        }
        /**
         * Property loadBalancers: The ID of CLB instance N that you want to attach to the scaling group.
         * <p>
         * Valid values of N: 1 to 5.
         * <p>
         * @return {@code this}
         * @param loadBalancers Property loadBalancers: The ID of CLB instance N that you want to attach to the scaling group. This parameter is required.
         */
        public Builder loadBalancers(final java.util.List<? extends java.lang.Object> loadBalancers) {
            this.props.loadBalancers(loadBalancers);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ess.LoadBalancerAttachment}.
         */
        @Override
        public com.aliyun.ros.cdk.ess.LoadBalancerAttachment build() {
            return new com.aliyun.ros.cdk.ess.LoadBalancerAttachment(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
