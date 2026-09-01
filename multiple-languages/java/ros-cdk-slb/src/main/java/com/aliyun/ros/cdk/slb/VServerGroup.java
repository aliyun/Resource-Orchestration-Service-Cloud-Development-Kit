package com.aliyun.ros.cdk.slb;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::SLB::VServerGroup</code>, which is used to create a server group and attach backend servers to a Server Load Balancer (SLB) instance.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-08-31T11:44:47.165Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.slb.$Module.class, fqn = "@alicloud/ros-cdk-slb.VServerGroup")
public class VServerGroup extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.slb.IVServerGroup {

    protected VServerGroup(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected VServerGroup(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public VServerGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.slb.VServerGroupProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public VServerGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.slb.VServerGroupProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrArn() {
        return software.amazon.jsii.Kernel.get(this, "attrArn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute BackendServers: Backend server list in this VServerGroup.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrBackendServers() {
        return software.amazon.jsii.Kernel.get(this, "attrBackendServers", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute LoadBalancerId: The id of load balancer.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrLoadBalancerId() {
        return software.amazon.jsii.Kernel.get(this, "attrLoadBalancerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute VServerGroupId: The id of VServerGroup created.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrVServerGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrVServerGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.slb.VServerGroupProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.slb.VServerGroupProps.class));
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
         * Property vServerGroupName: The name of the vServer group.
         * <p>
         * The name must be 1 to 80 characters in length, and can contain letters, digits,
         * hyphens (-), forward slashes (/), periods (.),and underscores (_).
         * <p>
         * @return {@code this}
         * @param vServerGroupName Property vServerGroupName: The name of the vServer group. This parameter is required.
         */
        public Builder vServerGroupName(final java.lang.String vServerGroupName) {
            this.props.vServerGroupName(vServerGroupName);
            return this;
        }
        /**
         * Property vServerGroupName: The name of the vServer group.
         * <p>
         * The name must be 1 to 80 characters in length, and can contain letters, digits,
         * hyphens (-), forward slashes (/), periods (.),and underscores (_).
         * <p>
         * @return {@code this}
         * @param vServerGroupName Property vServerGroupName: The name of the vServer group. This parameter is required.
         */
        public Builder vServerGroupName(final com.aliyun.ros.cdk.core.IResolvable vServerGroupName) {
            this.props.vServerGroupName(vServerGroupName);
            return this;
        }

        /**
         * Property backendServers: The backend servers that you want to add.
         * <p>
         * Configure the following parameters:
         * <p>
         * <ul>
         * <li>ServerId: required. The ID of the backend server. Specify the ID in a string.
         * You can specify the ID of an Elastic Compute Service (ECS) instance, an elastic
         * network interface (ENI), or an elastic container instance. If you set ServerId to
         * the ID of an ENI or an elastic container instance, you must configure the Type
         * parameter.</li>
         * <li>Weight: the weight of the backend server. Valid values: 0 to 100. Default
         * value: 100. If you set the weight of a backend server to 0, no requests are
         * forwarded to the backend server.</li>
         * <li>Description: optional. The description of the backend server. Specify the
         * description in a string. The description must be 1 to 80 characters in length,
         * and can contain letters, digits, hyphens (-), forward slashes (/), periods (.),
         * and underscores (_).</li>
         * <li>Type: the type of the backend server. Valid values:</li>
         * <li>ecs (default): ECS instance</li>
         * <li>eni: ENI.</li>
         * <li>eni: elastic container instance.</li>
         * </ul>
         * <p>
         * <blockquote>
         * <p>
         * You can specify ENIs and elastic container instances as backend servers only
         * for high-performance SLB instances.
         * <p>
         * </blockquote>
         * <p>
         * <ul>
         * <li>ServerIp: The IP address of the ECS instance or ENI.</li>
         * <li>Port: the backend port.
         * Examples:</li>
         * <li>Add an ECS instance:
         * <code>[{ "ServerId": "i-xxxxxxxxx", "Weight": "100", "Type": "ecs", "Port":"80","Description":"test-112" }]</code></li>
         * <li>Add an ENI:
         * <code>[{ "ServerId": "eni-xxxxxxxxx", "Weight": "100", "Type": "eni", "ServerIp": "192.168..", "Port":"80","Description":"test-112" }]</code></li>
         * <li>Add an ENI with multiple IP addresses:
         * <code>[{ "ServerId": "eni-xxxxxxxxx", "Weight": "100", "Type": "eni", "ServerIp": "192.168..", "Port":"80","Description":"test-113" },{ "ServerId": "eni-xxxxxxxxx", "Weight": "100", "Type": "eni", "ServerIp": "172.166..", "Port":"80","Description":"test-113" }]</code></li>
         * <li>Add an elastic container instance:
         * <code>[{ "ServerId": "eci-xxxxxxxxx", "Weight": "100", "Type": "eci", "ServerIp": "192.168..", "Port":"80","Description":"test-114" }]</code></li>
         * </ul>
         * <p>
         * <blockquote>
         * <p>
         * You can add only running backend servers to SLB instances. You can specify at
         * most 20 backend servers.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param backendServers Property backendServers: The backend servers that you want to add. This parameter is required.
         */
        public Builder backendServers(final com.aliyun.ros.cdk.core.IResolvable backendServers) {
            this.props.backendServers(backendServers);
            return this;
        }
        /**
         * Property backendServers: The backend servers that you want to add.
         * <p>
         * Configure the following parameters:
         * <p>
         * <ul>
         * <li>ServerId: required. The ID of the backend server. Specify the ID in a string.
         * You can specify the ID of an Elastic Compute Service (ECS) instance, an elastic
         * network interface (ENI), or an elastic container instance. If you set ServerId to
         * the ID of an ENI or an elastic container instance, you must configure the Type
         * parameter.</li>
         * <li>Weight: the weight of the backend server. Valid values: 0 to 100. Default
         * value: 100. If you set the weight of a backend server to 0, no requests are
         * forwarded to the backend server.</li>
         * <li>Description: optional. The description of the backend server. Specify the
         * description in a string. The description must be 1 to 80 characters in length,
         * and can contain letters, digits, hyphens (-), forward slashes (/), periods (.),
         * and underscores (_).</li>
         * <li>Type: the type of the backend server. Valid values:</li>
         * <li>ecs (default): ECS instance</li>
         * <li>eni: ENI.</li>
         * <li>eni: elastic container instance.</li>
         * </ul>
         * <p>
         * <blockquote>
         * <p>
         * You can specify ENIs and elastic container instances as backend servers only
         * for high-performance SLB instances.
         * <p>
         * </blockquote>
         * <p>
         * <ul>
         * <li>ServerIp: The IP address of the ECS instance or ENI.</li>
         * <li>Port: the backend port.
         * Examples:</li>
         * <li>Add an ECS instance:
         * <code>[{ "ServerId": "i-xxxxxxxxx", "Weight": "100", "Type": "ecs", "Port":"80","Description":"test-112" }]</code></li>
         * <li>Add an ENI:
         * <code>[{ "ServerId": "eni-xxxxxxxxx", "Weight": "100", "Type": "eni", "ServerIp": "192.168..", "Port":"80","Description":"test-112" }]</code></li>
         * <li>Add an ENI with multiple IP addresses:
         * <code>[{ "ServerId": "eni-xxxxxxxxx", "Weight": "100", "Type": "eni", "ServerIp": "192.168..", "Port":"80","Description":"test-113" },{ "ServerId": "eni-xxxxxxxxx", "Weight": "100", "Type": "eni", "ServerIp": "172.166..", "Port":"80","Description":"test-113" }]</code></li>
         * <li>Add an elastic container instance:
         * <code>[{ "ServerId": "eci-xxxxxxxxx", "Weight": "100", "Type": "eci", "ServerIp": "192.168..", "Port":"80","Description":"test-114" }]</code></li>
         * </ul>
         * <p>
         * <blockquote>
         * <p>
         * You can add only running backend servers to SLB instances. You can specify at
         * most 20 backend servers.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param backendServers Property backendServers: The backend servers that you want to add. This parameter is required.
         */
        public Builder backendServers(final java.util.List<? extends java.lang.Object> backendServers) {
            this.props.backendServers(backendServers);
            return this;
        }

        /**
         * Property tags: Tags to attach to instance.
         * <p>
         * Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tags to attach to instance. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.slb.RosVServerGroup.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.slb.VServerGroup}.
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
