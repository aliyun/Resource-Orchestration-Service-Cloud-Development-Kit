package com.aliyun.ros.cdk.alb;

/**
 * A ROS resource type:  `ALIYUN::ALB::ServerGroup`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.63.2 (build a8a8833)", date = "2022-08-05T07:29:02.708Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.alb.$Module.class, fqn = "@alicloud/ros-cdk-alb.ServerGroup")
public class ServerGroup extends com.aliyun.ros.cdk.core.Resource {

    protected ServerGroup(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ServerGroup(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::ALB::ServerGroup`.
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
    public ServerGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.alb.ServerGroupProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::ALB::ServerGroup`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public ServerGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.alb.ServerGroupProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ServerGroupId: The ID of the server group.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrServerGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrServerGroupId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.alb.ServerGroup}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.alb.ServerGroup> {
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
        private final com.aliyun.ros.cdk.alb.ServerGroupProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.alb.ServerGroupProps.Builder();
        }

        /**
         * Property healthCheckConfig: The configuration of health checks.
         * <p>
         * @return {@code this}
         * @param healthCheckConfig Property healthCheckConfig: The configuration of health checks. This parameter is required.
         */
        public Builder healthCheckConfig(final com.aliyun.ros.cdk.core.IResolvable healthCheckConfig) {
            this.props.healthCheckConfig(healthCheckConfig);
            return this;
        }
        /**
         * Property healthCheckConfig: The configuration of health checks.
         * <p>
         * @return {@code this}
         * @param healthCheckConfig Property healthCheckConfig: The configuration of health checks. This parameter is required.
         */
        public Builder healthCheckConfig(final com.aliyun.ros.cdk.alb.RosServerGroup.HealthCheckConfigProperty healthCheckConfig) {
            this.props.healthCheckConfig(healthCheckConfig);
            return this;
        }

        /**
         * Property serverGroupName: The name of the server group.
         * <p>
         * The name must be 2 to 128 characters in length, and
         * can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name
         * must start with a letter.
         * <p>
         * @return {@code this}
         * @param serverGroupName Property serverGroupName: The name of the server group. This parameter is required.
         */
        public Builder serverGroupName(final java.lang.String serverGroupName) {
            this.props.serverGroupName(serverGroupName);
            return this;
        }
        /**
         * Property serverGroupName: The name of the server group.
         * <p>
         * The name must be 2 to 128 characters in length, and
         * can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name
         * must start with a letter.
         * <p>
         * @return {@code this}
         * @param serverGroupName Property serverGroupName: The name of the server group. This parameter is required.
         */
        public Builder serverGroupName(final com.aliyun.ros.cdk.core.IResolvable serverGroupName) {
            this.props.serverGroupName(serverGroupName);
            return this;
        }

        /**
         * Property vpcId: The ID of the virtual private cloud (VPC).
         * <p>
         * You can add only servers that are deployed
         * in the specified VPC to the server group.
         * Note This parameter is required if the ServerGroupType parameter is set to Instance or Ip.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The ID of the virtual private cloud (VPC). This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }
        /**
         * Property vpcId: The ID of the virtual private cloud (VPC).
         * <p>
         * You can add only servers that are deployed
         * in the specified VPC to the server group.
         * Note This parameter is required if the ServerGroupType parameter is set to Instance or Ip.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The ID of the virtual private cloud (VPC). This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }

        /**
         * Property protocol: The server protocol.
         * <p>
         * Valid values:
         * HTTP: allows you to associate HTTPS, HTTP, or QUIC listeners with backend servers. This
         * is the default value.
         * HTTPS: allows you to associate HTTPS listeners with backend servers.
         * <p>
         * @return {@code this}
         * @param protocol Property protocol: The server protocol. This parameter is required.
         */
        public Builder protocol(final java.lang.String protocol) {
            this.props.protocol(protocol);
            return this;
        }
        /**
         * Property protocol: The server protocol.
         * <p>
         * Valid values:
         * HTTP: allows you to associate HTTPS, HTTP, or QUIC listeners with backend servers. This
         * is the default value.
         * HTTPS: allows you to associate HTTPS listeners with backend servers.
         * <p>
         * @return {@code this}
         * @param protocol Property protocol: The server protocol. This parameter is required.
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
         * Property scheduler: The scheduling algorithm.
         * <p>
         * Valid values:
         * Wrr: Backend servers that have higher weights receive more requests than those that have
         * lower weights. This is the default value.
         * Wlc: Requests are distributed based on the weight and load of each backend server. The
         * load refers to the number of connections to a backend server. If multiple backend
         * servers have the same weight, requests are routed to the backend server with the least
         * connections.
         * Sch: specifies consistent hashing that is based on source IP addresses.
         * <p>
         * @return {@code this}
         * @param scheduler Property scheduler: The scheduling algorithm. This parameter is required.
         */
        public Builder scheduler(final java.lang.String scheduler) {
            this.props.scheduler(scheduler);
            return this;
        }
        /**
         * Property scheduler: The scheduling algorithm.
         * <p>
         * Valid values:
         * Wrr: Backend servers that have higher weights receive more requests than those that have
         * lower weights. This is the default value.
         * Wlc: Requests are distributed based on the weight and load of each backend server. The
         * load refers to the number of connections to a backend server. If multiple backend
         * servers have the same weight, requests are routed to the backend server with the least
         * connections.
         * Sch: specifies consistent hashing that is based on source IP addresses.
         * <p>
         * @return {@code this}
         * @param scheduler Property scheduler: The scheduling algorithm. This parameter is required.
         */
        public Builder scheduler(final com.aliyun.ros.cdk.core.IResolvable scheduler) {
            this.props.scheduler(scheduler);
            return this;
        }

        /**
         * Property serverGroupType: The type of the server group.
         * <p>
         * Valid values:
         * Instance: a server group that consists of servers. You can add Elastic Compute Service (ECS)
         * instances, elastic network interfaces (ENIs), and elastic container instances to this
         * type of server group. This is the default value.
         * Ip: a server group that consists of IP addresses. You can add IP addresses to this type
         * of server group.
         * <p>
         * @return {@code this}
         * @param serverGroupType Property serverGroupType: The type of the server group. This parameter is required.
         */
        public Builder serverGroupType(final java.lang.String serverGroupType) {
            this.props.serverGroupType(serverGroupType);
            return this;
        }
        /**
         * Property serverGroupType: The type of the server group.
         * <p>
         * Valid values:
         * Instance: a server group that consists of servers. You can add Elastic Compute Service (ECS)
         * instances, elastic network interfaces (ENIs), and elastic container instances to this
         * type of server group. This is the default value.
         * Ip: a server group that consists of IP addresses. You can add IP addresses to this type
         * of server group.
         * <p>
         * @return {@code this}
         * @param serverGroupType Property serverGroupType: The type of the server group. This parameter is required.
         */
        public Builder serverGroupType(final com.aliyun.ros.cdk.core.IResolvable serverGroupType) {
            this.props.serverGroupType(serverGroupType);
            return this;
        }

        /**
         * Property stickySessionConfig: The configuration of session persistence.
         * <p>
         * Note This parameter is required if the ServerGroupType parameter is set to Instance or Ip.
         * <p>
         * @return {@code this}
         * @param stickySessionConfig Property stickySessionConfig: The configuration of session persistence. This parameter is required.
         */
        public Builder stickySessionConfig(final com.aliyun.ros.cdk.core.IResolvable stickySessionConfig) {
            this.props.stickySessionConfig(stickySessionConfig);
            return this;
        }
        /**
         * Property stickySessionConfig: The configuration of session persistence.
         * <p>
         * Note This parameter is required if the ServerGroupType parameter is set to Instance or Ip.
         * <p>
         * @return {@code this}
         * @param stickySessionConfig Property stickySessionConfig: The configuration of session persistence. This parameter is required.
         */
        public Builder stickySessionConfig(final com.aliyun.ros.cdk.alb.RosServerGroup.StickySessionConfigProperty stickySessionConfig) {
            this.props.stickySessionConfig(stickySessionConfig);
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
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.alb.RosServerGroup.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.alb.ServerGroup}.
         */
        @Override
        public com.aliyun.ros.cdk.alb.ServerGroup build() {
            return new com.aliyun.ros.cdk.alb.ServerGroup(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
