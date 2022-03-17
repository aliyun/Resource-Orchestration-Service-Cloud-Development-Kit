package com.aliyun.ros.cdk.slb;

/**
 * A ROS resource type:  `ALIYUN::SLB::VServerGroup`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.55.1 (build 07d2d90)", date = "2022-03-17T08:21:16.490Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.slb.$Module.class, fqn = "@alicloud/ros-cdk-slb.VServerGroup")
public class VServerGroup extends com.aliyun.ros.cdk.core.Resource {

    protected VServerGroup(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected VServerGroup(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::SLB::VServerGroup`.
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
    public VServerGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.slb.VServerGroupProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::SLB::VServerGroup`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public VServerGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.slb.VServerGroupProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute BackendServers: Backend server list in this VServerGroup.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrBackendServers() {
        return software.amazon.jsii.Kernel.get(this, "attrBackendServers", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute VServerGroupId: The id of VServerGroup created.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVServerGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrVServerGroupId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.slb.VServerGroup}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.slb.VServerGroup> {
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
        private final com.aliyun.ros.cdk.slb.VServerGroupProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.slb.VServerGroupProps.Builder();
        }

        /**
         * Property loadBalancerId: The id of load balancer.
         * <p>
         * @return {@code this}
         * @param loadBalancerId Property loadBalancerId: The id of load balancer. This parameter is required.
         */
        public Builder loadBalancerId(final java.lang.String loadBalancerId) {
            this.props.loadBalancerId(loadBalancerId);
            return this;
        }
        /**
         * Property loadBalancerId: The id of load balancer.
         * <p>
         * @return {@code this}
         * @param loadBalancerId Property loadBalancerId: The id of load balancer. This parameter is required.
         */
        public Builder loadBalancerId(final com.aliyun.ros.cdk.core.IResolvable loadBalancerId) {
            this.props.loadBalancerId(loadBalancerId);
            return this;
        }

        /**
         * Property vServerGroupName: Display name of the VServerGroup.
         * <p>
         * @return {@code this}
         * @param vServerGroupName Property vServerGroupName: Display name of the VServerGroup. This parameter is required.
         */
        public Builder vServerGroupName(final java.lang.String vServerGroupName) {
            this.props.vServerGroupName(vServerGroupName);
            return this;
        }
        /**
         * Property vServerGroupName: Display name of the VServerGroup.
         * <p>
         * @return {@code this}
         * @param vServerGroupName Property vServerGroupName: Display name of the VServerGroup. This parameter is required.
         */
        public Builder vServerGroupName(final com.aliyun.ros.cdk.core.IResolvable vServerGroupName) {
            this.props.vServerGroupName(vServerGroupName);
            return this;
        }

        /**
         * Property backendServers: The list of a combination of ECS Instance-Port-Weight.Same ecs instance with different port is allowed, but same ecs instance with same port isn't.
         * <p>
         * @return {@code this}
         * @param backendServers Property backendServers: The list of a combination of ECS Instance-Port-Weight.Same ecs instance with different port is allowed, but same ecs instance with same port isn't. This parameter is required.
         */
        public Builder backendServers(final com.aliyun.ros.cdk.core.IResolvable backendServers) {
            this.props.backendServers(backendServers);
            return this;
        }
        /**
         * Property backendServers: The list of a combination of ECS Instance-Port-Weight.Same ecs instance with different port is allowed, but same ecs instance with same port isn't.
         * <p>
         * @return {@code this}
         * @param backendServers Property backendServers: The list of a combination of ECS Instance-Port-Weight.Same ecs instance with different port is allowed, but same ecs instance with same port isn't. This parameter is required.
         */
        public Builder backendServers(final java.util.List<? extends java.lang.Object> backendServers) {
            this.props.backendServers(backendServers);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.slb.VServerGroup}.
         */
        @Override
        public com.aliyun.ros.cdk.slb.VServerGroup build() {
            return new com.aliyun.ros.cdk.slb.VServerGroup(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
