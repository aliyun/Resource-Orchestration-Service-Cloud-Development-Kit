package com.aliyun.ros.cdk.alb.datasource;

/**
 * This class encapsulates and extends the ROS resource type <code>DATASOURCE::ALB::LoadBalancers</code>, which is used to query the basic information about created Application Load Balancer (ALB) instances.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-12T02:20:22.925Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.alb.$Module.class, fqn = "@alicloud/ros-cdk-alb.datasource.LoadBalancers")
public class LoadBalancers extends com.aliyun.ros.cdk.core.Resource {

    protected LoadBalancers(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected LoadBalancers(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     * @param enableResourcePropertyConstraint
     */
    public LoadBalancers(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.alb.datasource.LoadBalancersProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props, enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     */
    public LoadBalancers(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.alb.datasource.LoadBalancersProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public LoadBalancers(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute LoadBalancerIds: The list of load balancer IDs.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrLoadBalancerIds() {
        return software.amazon.jsii.Kernel.get(this, "attrLoadBalancerIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute LoadBalancers: The list of load balancers.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrLoadBalancers() {
        return software.amazon.jsii.Kernel.get(this, "attrLoadBalancers", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.alb.datasource.LoadBalancersProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.alb.datasource.LoadBalancersProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.alb.datasource.LoadBalancersProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.alb.datasource.LoadBalancers}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.alb.datasource.LoadBalancers> {
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
        private com.aliyun.ros.cdk.alb.datasource.LoadBalancersProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property addressType: The address type of the load balancing instance.
         * <p>
         * @return {@code this}
         * @param addressType Property addressType: The address type of the load balancing instance. This parameter is required.
         */
        public Builder addressType(final java.lang.String addressType) {
            this.props().addressType(addressType);
            return this;
        }
        /**
         * Property addressType: The address type of the load balancing instance.
         * <p>
         * @return {@code this}
         * @param addressType Property addressType: The address type of the load balancing instance. This parameter is required.
         */
        public Builder addressType(final com.aliyun.ros.cdk.core.IResolvable addressType) {
            this.props().addressType(addressType);
            return this;
        }

        /**
         * Property loadBalancerBussinessStatus: Service status of application load balancing.
         * <p>
         * @return {@code this}
         * @param loadBalancerBussinessStatus Property loadBalancerBussinessStatus: Service status of application load balancing. This parameter is required.
         */
        public Builder loadBalancerBussinessStatus(final java.lang.String loadBalancerBussinessStatus) {
            this.props().loadBalancerBussinessStatus(loadBalancerBussinessStatus);
            return this;
        }
        /**
         * Property loadBalancerBussinessStatus: Service status of application load balancing.
         * <p>
         * @return {@code this}
         * @param loadBalancerBussinessStatus Property loadBalancerBussinessStatus: Service status of application load balancing. This parameter is required.
         */
        public Builder loadBalancerBussinessStatus(final com.aliyun.ros.cdk.core.IResolvable loadBalancerBussinessStatus) {
            this.props().loadBalancerBussinessStatus(loadBalancerBussinessStatus);
            return this;
        }

        /**
         * Property loadBalancerIds: IDs of the load balancer instance.
         * <p>
         * @return {@code this}
         * @param loadBalancerIds Property loadBalancerIds: IDs of the load balancer instance. This parameter is required.
         */
        public Builder loadBalancerIds(final com.aliyun.ros.cdk.core.IResolvable loadBalancerIds) {
            this.props().loadBalancerIds(loadBalancerIds);
            return this;
        }
        /**
         * Property loadBalancerIds: IDs of the load balancer instance.
         * <p>
         * @return {@code this}
         * @param loadBalancerIds Property loadBalancerIds: IDs of the load balancer instance. This parameter is required.
         */
        public Builder loadBalancerIds(final java.util.List<? extends java.lang.Object> loadBalancerIds) {
            this.props().loadBalancerIds(loadBalancerIds);
            return this;
        }

        /**
         * Property loadBalancerNames: Names of the load balancing instance.
         * <p>
         * @return {@code this}
         * @param loadBalancerNames Property loadBalancerNames: Names of the load balancing instance. This parameter is required.
         */
        public Builder loadBalancerNames(final com.aliyun.ros.cdk.core.IResolvable loadBalancerNames) {
            this.props().loadBalancerNames(loadBalancerNames);
            return this;
        }
        /**
         * Property loadBalancerNames: Names of the load balancing instance.
         * <p>
         * @return {@code this}
         * @param loadBalancerNames Property loadBalancerNames: Names of the load balancing instance. This parameter is required.
         */
        public Builder loadBalancerNames(final java.util.List<? extends java.lang.Object> loadBalancerNames) {
            this.props().loadBalancerNames(loadBalancerNames);
            return this;
        }

        /**
         * Property loadBalancerStatus: The status of SLB.
         * <p>
         * @return {@code this}
         * @param loadBalancerStatus Property loadBalancerStatus: The status of SLB. This parameter is required.
         */
        public Builder loadBalancerStatus(final java.lang.String loadBalancerStatus) {
            this.props().loadBalancerStatus(loadBalancerStatus);
            return this;
        }
        /**
         * Property loadBalancerStatus: The status of SLB.
         * <p>
         * @return {@code this}
         * @param loadBalancerStatus Property loadBalancerStatus: The status of SLB. This parameter is required.
         */
        public Builder loadBalancerStatus(final com.aliyun.ros.cdk.core.IResolvable loadBalancerStatus) {
            this.props().loadBalancerStatus(loadBalancerStatus);
            return this;
        }

        /**
         * Property payType: Load balancing instance payment type.
         * <p>
         * @return {@code this}
         * @param payType Property payType: Load balancing instance payment type. This parameter is required.
         */
        public Builder payType(final java.lang.String payType) {
            this.props().payType(payType);
            return this;
        }
        /**
         * Property payType: Load balancing instance payment type.
         * <p>
         * @return {@code this}
         * @param payType Property payType: Load balancing instance payment type. This parameter is required.
         */
        public Builder payType(final com.aliyun.ros.cdk.core.IResolvable payType) {
            this.props().payType(payType);
            return this;
        }

        /**
         * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         * <li>Always: Always refresh the datasource resource when the stack is updated.
         * Default is Never.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. This parameter is required.
         */
        public Builder refreshOptions(final java.lang.String refreshOptions) {
            this.props().refreshOptions(refreshOptions);
            return this;
        }
        /**
         * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         * <li>Always: Always refresh the datasource resource when the stack is updated.
         * Default is Never.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. This parameter is required.
         */
        public Builder refreshOptions(final com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.props().refreshOptions(refreshOptions);
            return this;
        }

        /**
         * Property resourceGroupId: Resource group id.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: Resource group id. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props().resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: Resource group id.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: Resource group id. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props().resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property tags: Tags of Alb.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tags of Alb. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.alb.datasource.RosLoadBalancers.TagsProperty> tags) {
            this.props().tags(tags);
            return this;
        }

        /**
         * Property vpcIds: VPC IDs.
         * <p>
         * @return {@code this}
         * @param vpcIds Property vpcIds: VPC IDs. This parameter is required.
         */
        public Builder vpcIds(final com.aliyun.ros.cdk.core.IResolvable vpcIds) {
            this.props().vpcIds(vpcIds);
            return this;
        }
        /**
         * Property vpcIds: VPC IDs.
         * <p>
         * @return {@code this}
         * @param vpcIds Property vpcIds: VPC IDs. This parameter is required.
         */
        public Builder vpcIds(final java.util.List<? extends java.lang.Object> vpcIds) {
            this.props().vpcIds(vpcIds);
            return this;
        }

        /**
         * Property zoneId: ID of the ready-to-use zone of the load balancing instance.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: ID of the ready-to-use zone of the load balancing instance. This parameter is required.
         */
        public Builder zoneId(final java.lang.String zoneId) {
            this.props().zoneId(zoneId);
            return this;
        }
        /**
         * Property zoneId: ID of the ready-to-use zone of the load balancing instance.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: ID of the ready-to-use zone of the load balancing instance. This parameter is required.
         */
        public Builder zoneId(final com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.props().zoneId(zoneId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.alb.datasource.LoadBalancers}.
         */
        @Override
        public com.aliyun.ros.cdk.alb.datasource.LoadBalancers build() {
            return new com.aliyun.ros.cdk.alb.datasource.LoadBalancers(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.alb.datasource.LoadBalancersProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.alb.datasource.LoadBalancersProps.Builder();
            }
            return this.props;
        }
    }
}
