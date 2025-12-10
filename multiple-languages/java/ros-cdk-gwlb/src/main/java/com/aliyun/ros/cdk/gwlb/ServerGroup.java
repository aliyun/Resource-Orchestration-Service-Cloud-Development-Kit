package com.aliyun.ros.cdk.gwlb;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::GWLB::ServerGroup</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:57.544Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.gwlb.$Module.class, fqn = "@alicloud/ros-cdk-gwlb.ServerGroup")
public class ServerGroup extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.gwlb.IServerGroup {

    protected ServerGroup(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ServerGroup(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public ServerGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.gwlb.ServerGroupProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public ServerGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.gwlb.ServerGroupProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ConnectionDrainConfig: Connected graceful interrupt configuration.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrConnectionDrainConfig() {
        return software.amazon.jsii.Kernel.get(this, "attrConnectionDrainConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CreateTime: The creation time of the server group.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute HealthCheckConfig: Health check configurations.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckConfig() {
        return software.amazon.jsii.Kernel.get(this, "attrHealthCheckConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Protocol: Backend Protocol.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrProtocol() {
        return software.amazon.jsii.Kernel.get(this, "attrProtocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Scheduler: Scheduling algorithm.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrScheduler() {
        return software.amazon.jsii.Kernel.get(this, "attrScheduler", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ServerGroupId: The server group ID.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrServerGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrServerGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ServerGroupName: The server group name.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrServerGroupName() {
        return software.amazon.jsii.Kernel.get(this, "attrServerGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ServerGroupType: The server group type.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrServerGroupType() {
        return software.amazon.jsii.Kernel.get(this, "attrServerGroupType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Servers: List of servers.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrServers() {
        return software.amazon.jsii.Kernel.get(this, "attrServers", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Tags: List of resource tags.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
        return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute VpcId: The VPC instance ID.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId() {
        return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.gwlb.ServerGroupProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.gwlb.ServerGroupProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.gwlb.ServerGroup}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.gwlb.ServerGroup> {
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
        private final com.aliyun.ros.cdk.gwlb.ServerGroupProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.gwlb.ServerGroupProps.Builder();
        }

        /**
         * Property vpcId: The VPC instance ID.
         * <p>
         * <blockquote>
         * <p>
         * If the value of ServerGroupType is Instance, only servers in the VPC can be added to the server group.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The VPC instance ID. This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }
        /**
         * Property vpcId: The VPC instance ID.
         * <p>
         * <blockquote>
         * <p>
         * If the value of ServerGroupType is Instance, only servers in the VPC can be added to the server group.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The VPC instance ID. This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }

        /**
         * Property connectionDrainConfig: Connected graceful interrupt configuration.
         * <p>
         * @return {@code this}
         * @param connectionDrainConfig Property connectionDrainConfig: Connected graceful interrupt configuration. This parameter is required.
         */
        public Builder connectionDrainConfig(final com.aliyun.ros.cdk.core.IResolvable connectionDrainConfig) {
            this.props.connectionDrainConfig(connectionDrainConfig);
            return this;
        }
        /**
         * Property connectionDrainConfig: Connected graceful interrupt configuration.
         * <p>
         * @return {@code this}
         * @param connectionDrainConfig Property connectionDrainConfig: Connected graceful interrupt configuration. This parameter is required.
         */
        public Builder connectionDrainConfig(final com.aliyun.ros.cdk.gwlb.RosServerGroup.ConnectionDrainConfigProperty connectionDrainConfig) {
            this.props.connectionDrainConfig(connectionDrainConfig);
            return this;
        }

        /**
         * Property healthCheckConfig: Health check configurations.
         * <p>
         * @return {@code this}
         * @param healthCheckConfig Property healthCheckConfig: Health check configurations. This parameter is required.
         */
        public Builder healthCheckConfig(final com.aliyun.ros.cdk.core.IResolvable healthCheckConfig) {
            this.props.healthCheckConfig(healthCheckConfig);
            return this;
        }
        /**
         * Property healthCheckConfig: Health check configurations.
         * <p>
         * @return {@code this}
         * @param healthCheckConfig Property healthCheckConfig: Health check configurations. This parameter is required.
         */
        public Builder healthCheckConfig(final com.aliyun.ros.cdk.gwlb.RosServerGroup.HealthCheckConfigProperty healthCheckConfig) {
            this.props.healthCheckConfig(healthCheckConfig);
            return this;
        }

        /**
         * Property protocol: Backend Protocol.
         * <p>
         * Value:
         * <strong>GENEVE (default)</strong>.
         * <p>
         * @return {@code this}
         * @param protocol Property protocol: Backend Protocol. This parameter is required.
         */
        public Builder protocol(final java.lang.String protocol) {
            this.props.protocol(protocol);
            return this;
        }
        /**
         * Property protocol: Backend Protocol.
         * <p>
         * Value:
         * <strong>GENEVE (default)</strong>.
         * <p>
         * @return {@code this}
         * @param protocol Property protocol: Backend Protocol. This parameter is required.
         */
        public Builder protocol(final com.aliyun.ros.cdk.core.IResolvable protocol) {
            this.props.protocol(protocol);
            return this;
        }

        /**
         * Property resourceGroupId: The ID of the resource group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: The ID of the resource group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property scheduler: Scheduling algorithm.
         * <p>
         * Value:
         * <p>
         * <ul>
         * <li><strong>5TCH (default)</strong>: quintuple hash, which is based on the consistent hash of the quintuple (source IP, Destination IP, source port, destination port, and protocol). The same flow is scheduled to the same backend server.</li>
         * <li><strong>3TCH</strong>: a three-tuple hash, which is based on the consistent hash of three tuples (source IP address, destination IP address, and protocol). The same flow is dispatched to the same backend server.</li>
         * <li><strong>2TCH</strong>: Binary Group hash, which is based on the consistent hash of the binary group (source IP and destination IP). The same flow is scheduled to the same backend server.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param scheduler Property scheduler: Scheduling algorithm. This parameter is required.
         */
        public Builder scheduler(final java.lang.String scheduler) {
            this.props.scheduler(scheduler);
            return this;
        }
        /**
         * Property scheduler: Scheduling algorithm.
         * <p>
         * Value:
         * <p>
         * <ul>
         * <li><strong>5TCH (default)</strong>: quintuple hash, which is based on the consistent hash of the quintuple (source IP, Destination IP, source port, destination port, and protocol). The same flow is scheduled to the same backend server.</li>
         * <li><strong>3TCH</strong>: a three-tuple hash, which is based on the consistent hash of three tuples (source IP address, destination IP address, and protocol). The same flow is dispatched to the same backend server.</li>
         * <li><strong>2TCH</strong>: Binary Group hash, which is based on the consistent hash of the binary group (source IP and destination IP). The same flow is scheduled to the same backend server.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param scheduler Property scheduler: Scheduling algorithm. This parameter is required.
         */
        public Builder scheduler(final com.aliyun.ros.cdk.core.IResolvable scheduler) {
            this.props.scheduler(scheduler);
            return this;
        }

        /**
         * Property serverGroupName: The server group name.
         * <p>
         * It must be 2 to 128 characters in length, start with an uppercase letter or a Chinese character, and can contain digits, half-width periods (.), underscores (_), and dashes (-).
         * <p>
         * @return {@code this}
         * @param serverGroupName Property serverGroupName: The server group name. This parameter is required.
         */
        public Builder serverGroupName(final java.lang.String serverGroupName) {
            this.props.serverGroupName(serverGroupName);
            return this;
        }
        /**
         * Property serverGroupName: The server group name.
         * <p>
         * It must be 2 to 128 characters in length, start with an uppercase letter or a Chinese character, and can contain digits, half-width periods (.), underscores (_), and dashes (-).
         * <p>
         * @return {@code this}
         * @param serverGroupName Property serverGroupName: The server group name. This parameter is required.
         */
        public Builder serverGroupName(final com.aliyun.ros.cdk.core.IResolvable serverGroupName) {
            this.props.serverGroupName(serverGroupName);
            return this;
        }

        /**
         * Property serverGroupType: The server group type.
         * <p>
         * Value:
         * <p>
         * <ul>
         * <li><strong>Instance (default)</strong>: The instance type. You can add Ecs, Eni, and Eci instances to the server group.</li>
         * <li><strong>Ip</strong>: The Ip address type. You can directly add backend servers of the Ip address type to the server group.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param serverGroupType Property serverGroupType: The server group type. This parameter is required.
         */
        public Builder serverGroupType(final java.lang.String serverGroupType) {
            this.props.serverGroupType(serverGroupType);
            return this;
        }
        /**
         * Property serverGroupType: The server group type.
         * <p>
         * Value:
         * <p>
         * <ul>
         * <li><strong>Instance (default)</strong>: The instance type. You can add Ecs, Eni, and Eci instances to the server group.</li>
         * <li><strong>Ip</strong>: The Ip address type. You can directly add backend servers of the Ip address type to the server group.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param serverGroupType Property serverGroupType: The server group type. This parameter is required.
         */
        public Builder serverGroupType(final com.aliyun.ros.cdk.core.IResolvable serverGroupType) {
            this.props.serverGroupType(serverGroupType);
            return this;
        }

        /**
         * Property servers: List of servers.
         * <p>
         * @return {@code this}
         * @param servers Property servers: List of servers. This parameter is required.
         */
        public Builder servers(final com.aliyun.ros.cdk.core.IResolvable servers) {
            this.props.servers(servers);
            return this;
        }
        /**
         * Property servers: List of servers.
         * <p>
         * @return {@code this}
         * @param servers Property servers: List of servers. This parameter is required.
         */
        public Builder servers(final java.util.List<? extends java.lang.Object> servers) {
            this.props.servers(servers);
            return this;
        }

        /**
         * Property tags: Tags of server group.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tags of server group. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.gwlb.RosServerGroup.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.gwlb.ServerGroup}.
         */
        @Override
        public com.aliyun.ros.cdk.gwlb.ServerGroup build() {
            return new com.aliyun.ros.cdk.gwlb.ServerGroup(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
