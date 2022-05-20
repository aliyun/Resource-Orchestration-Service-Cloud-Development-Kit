package com.aliyun.ros.cdk.slb;

/**
 * A ROS resource type:  `ALIYUN::SLB::LoadBalancerClone`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.59.0 (build eb02c92)", date = "2022-05-20T02:42:03.538Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.slb.$Module.class, fqn = "@alicloud/ros-cdk-slb.LoadBalancerClone")
public class LoadBalancerClone extends com.aliyun.ros.cdk.core.Resource {

    protected LoadBalancerClone(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected LoadBalancerClone(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::SLB::LoadBalancerClone`.
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
    public LoadBalancerClone(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.slb.LoadBalancerCloneProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::SLB::LoadBalancerClone`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public LoadBalancerClone(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.slb.LoadBalancerCloneProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute LoadBalancerId: The id of load balance generated.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrLoadBalancerId() {
        return software.amazon.jsii.Kernel.get(this, "attrLoadBalancerId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.slb.LoadBalancerClone}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.slb.LoadBalancerClone> {
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
        private final com.aliyun.ros.cdk.slb.LoadBalancerCloneProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.slb.LoadBalancerCloneProps.Builder();
        }

        /**
         * Property sourceLoadBalancerId: Source load balancer id to clone.
         * <p>
         * @return {@code this}
         * @param sourceLoadBalancerId Property sourceLoadBalancerId: Source load balancer id to clone. This parameter is required.
         */
        public Builder sourceLoadBalancerId(final java.lang.String sourceLoadBalancerId) {
            this.props.sourceLoadBalancerId(sourceLoadBalancerId);
            return this;
        }
        /**
         * Property sourceLoadBalancerId: Source load balancer id to clone.
         * <p>
         * @return {@code this}
         * @param sourceLoadBalancerId Property sourceLoadBalancerId: Source load balancer id to clone. This parameter is required.
         */
        public Builder sourceLoadBalancerId(final com.aliyun.ros.cdk.core.IResolvable sourceLoadBalancerId) {
            this.props.sourceLoadBalancerId(sourceLoadBalancerId);
            return this;
        }

        /**
         * Property backendServers: The list of ECS instance, which will attached to load balancer.
         * <p>
         * @return {@code this}
         * @param backendServers Property backendServers: The list of ECS instance, which will attached to load balancer. This parameter is required.
         */
        public Builder backendServers(final com.aliyun.ros.cdk.core.IResolvable backendServers) {
            this.props.backendServers(backendServers);
            return this;
        }
        /**
         * Property backendServers: The list of ECS instance, which will attached to load balancer.
         * <p>
         * @return {@code this}
         * @param backendServers Property backendServers: The list of ECS instance, which will attached to load balancer. This parameter is required.
         */
        public Builder backendServers(final java.util.List<? extends java.lang.Object> backendServers) {
            this.props.backendServers(backendServers);
            return this;
        }

        /**
         * Property backendServersPolicy: Solution for handle the backend server and weights.
         * <p>
         * If select 'clone', it will clone from source load balancer. If select 'empty' it will not attach any backend servers. If select 'append' it will append the new backend server list to source backed servers. If select 'replace' it will only attach new backend server list. Default is 'clone'.
         * <p>
         * @return {@code this}
         * @param backendServersPolicy Property backendServersPolicy: Solution for handle the backend server and weights. This parameter is required.
         */
        public Builder backendServersPolicy(final java.lang.String backendServersPolicy) {
            this.props.backendServersPolicy(backendServersPolicy);
            return this;
        }
        /**
         * Property backendServersPolicy: Solution for handle the backend server and weights.
         * <p>
         * If select 'clone', it will clone from source load balancer. If select 'empty' it will not attach any backend servers. If select 'append' it will append the new backend server list to source backed servers. If select 'replace' it will only attach new backend server list. Default is 'clone'.
         * <p>
         * @return {@code this}
         * @param backendServersPolicy Property backendServersPolicy: Solution for handle the backend server and weights. This parameter is required.
         */
        public Builder backendServersPolicy(final com.aliyun.ros.cdk.core.IResolvable backendServersPolicy) {
            this.props.backendServersPolicy(backendServersPolicy);
            return this;
        }

        /**
         * Property loadBalancerName: Name of created load balancer.
         * <p>
         * Length is limited to 1-80 characters, allowed to contain letters, numbers, '-, /, _,.' When not specified, a default name will be assigned.
         * <p>
         * @return {@code this}
         * @param loadBalancerName Property loadBalancerName: Name of created load balancer. This parameter is required.
         */
        public Builder loadBalancerName(final java.lang.String loadBalancerName) {
            this.props.loadBalancerName(loadBalancerName);
            return this;
        }
        /**
         * Property loadBalancerName: Name of created load balancer.
         * <p>
         * Length is limited to 1-80 characters, allowed to contain letters, numbers, '-, /, _,.' When not specified, a default name will be assigned.
         * <p>
         * @return {@code this}
         * @param loadBalancerName Property loadBalancerName: Name of created load balancer. This parameter is required.
         */
        public Builder loadBalancerName(final com.aliyun.ros.cdk.core.IResolvable loadBalancerName) {
            this.props.loadBalancerName(loadBalancerName);
            return this;
        }

        /**
         * Property resourceGroupId: Resource group id.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: Resource group id. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: Resource group id.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: Resource group id. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property tags: Tags to attach to slb.
         * <p>
         * Max support 5 tags to add during create slb. Each tag with two properties Key and Value, and Key is required.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tags to attach to slb. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.slb.RosLoadBalancerClone.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * Property tagsPolicy: Solution for handle the tags.
         * <p>
         * If select 'clone', it will clone from source load balancer. If select 'empty' it will not coppy tags. If select 'append' it will append the new tags. If select 'replace' it will add new tags.
         * Default is 'empty'.
         * <p>
         * @return {@code this}
         * @param tagsPolicy Property tagsPolicy: Solution for handle the tags. This parameter is required.
         */
        public Builder tagsPolicy(final java.lang.String tagsPolicy) {
            this.props.tagsPolicy(tagsPolicy);
            return this;
        }
        /**
         * Property tagsPolicy: Solution for handle the tags.
         * <p>
         * If select 'clone', it will clone from source load balancer. If select 'empty' it will not coppy tags. If select 'append' it will append the new tags. If select 'replace' it will add new tags.
         * Default is 'empty'.
         * <p>
         * @return {@code this}
         * @param tagsPolicy Property tagsPolicy: Solution for handle the tags. This parameter is required.
         */
        public Builder tagsPolicy(final com.aliyun.ros.cdk.core.IResolvable tagsPolicy) {
            this.props.tagsPolicy(tagsPolicy);
            return this;
        }

        /**
         * Property vSwitchId: The new VSwitch ID to create load balancer instance.
         * <p>
         * For VPC network only and the VSwitch should belong to the VPC which source load balancer is located.When not specified, source load balancer VSwitch ID will be used.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: The new VSwitch ID to create load balancer instance. This parameter is required.
         */
        public Builder vSwitchId(final java.lang.String vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }
        /**
         * Property vSwitchId: The new VSwitch ID to create load balancer instance.
         * <p>
         * For VPC network only and the VSwitch should belong to the VPC which source load balancer is located.When not specified, source load balancer VSwitch ID will be used.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: The new VSwitch ID to create load balancer instance. This parameter is required.
         */
        public Builder vSwitchId(final com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.slb.LoadBalancerClone}.
         */
        @Override
        public com.aliyun.ros.cdk.slb.LoadBalancerClone build() {
            return new com.aliyun.ros.cdk.slb.LoadBalancerClone(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
