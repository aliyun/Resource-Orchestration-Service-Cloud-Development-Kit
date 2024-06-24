package com.aliyun.ros.cdk.slb;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::SLB::LoadBalancerClone</code>, which is used to clone a Server Load Balancer (SLB) instance.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-24T05:57:09.296Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.slb.$Module.class, fqn = "@alicloud/ros-cdk-slb.LoadBalancerClone")
public class LoadBalancerClone extends com.aliyun.ros.cdk.core.Resource {

    protected LoadBalancerClone(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected LoadBalancerClone(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public LoadBalancerClone(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.slb.LoadBalancerCloneProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.slb.LoadBalancerCloneProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.slb.LoadBalancerCloneProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.slb.LoadBalancerCloneProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
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
         * Property instanceChargeType: Instance billing method.
         * <p>
         * Value:PayBySpec: Pay by spec.
         * PayByCLCU: billed by usage.
         * If not specified, it is same with the source load balancer.
         * <p>
         * @return {@code this}
         * @param instanceChargeType Property instanceChargeType: Instance billing method. This parameter is required.
         */
        public Builder instanceChargeType(final java.lang.String instanceChargeType) {
            this.props.instanceChargeType(instanceChargeType);
            return this;
        }
        /**
         * Property instanceChargeType: Instance billing method.
         * <p>
         * Value:PayBySpec: Pay by spec.
         * PayByCLCU: billed by usage.
         * If not specified, it is same with the source load balancer.
         * <p>
         * @return {@code this}
         * @param instanceChargeType Property instanceChargeType: Instance billing method. This parameter is required.
         */
        public Builder instanceChargeType(final com.aliyun.ros.cdk.core.IResolvable instanceChargeType) {
            this.props.instanceChargeType(instanceChargeType);
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
         * Property loadBalancerSpec: The specification of the load balancer.
         * <p>
         * If not specified, it is same with the source load balancer.
         * Note If InstanceChargeType is set to PayByCLCU, the LoadBalancerSpec parameter is invalid and you do not need to set this parameter.
         * <p>
         * @return {@code this}
         * @param loadBalancerSpec Property loadBalancerSpec: The specification of the load balancer. This parameter is required.
         */
        public Builder loadBalancerSpec(final java.lang.String loadBalancerSpec) {
            this.props.loadBalancerSpec(loadBalancerSpec);
            return this;
        }
        /**
         * Property loadBalancerSpec: The specification of the load balancer.
         * <p>
         * If not specified, it is same with the source load balancer.
         * Note If InstanceChargeType is set to PayByCLCU, the LoadBalancerSpec parameter is invalid and you do not need to set this parameter.
         * <p>
         * @return {@code this}
         * @param loadBalancerSpec Property loadBalancerSpec: The specification of the load balancer. This parameter is required.
         */
        public Builder loadBalancerSpec(final com.aliyun.ros.cdk.core.IResolvable loadBalancerSpec) {
            this.props.loadBalancerSpec(loadBalancerSpec);
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
         * If select 'clone', it will clone from source load balancer. If select 'empty' it will not copy tags. If select 'append' it will append the new tags. If select 'replace' it will add new tags.
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
         * If select 'clone', it will clone from source load balancer. If select 'empty' it will not copy tags. If select 'append' it will append the new tags. If select 'replace' it will add new tags.
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
         * @return a newly built instance of {@link com.aliyun.ros.cdk.slb.LoadBalancerClone}.
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
