package com.aliyun.ros.cdk.alb;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ALB::ServerGroup</code>, which is used to create a server group.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-29T07:52:36.110Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.alb.$Module.class, fqn = "@alicloud/ros-cdk-alb.ServerGroup")
public class ServerGroup extends com.aliyun.ros.cdk.core.Resource {

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
    public ServerGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.alb.ServerGroupProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.alb.ServerGroupProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.alb.ServerGroupProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.alb.ServerGroupProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
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
         * Note: This parameter is required if the ServerGroupType parameter is set to Instance or Ip.
         * Note: This parameter takes effect when the ServerGroupType parameter is set to Instance or Ip.
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
         * Note: This parameter is required if the ServerGroupType parameter is set to Instance or Ip.
         * Note: This parameter takes effect when the ServerGroupType parameter is set to Instance or Ip.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The ID of the virtual private cloud (VPC). This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }

        /**
         * Property connectionDrainConfig: Configuration related to graceful connection interruption.Enable graceful connection interruption. After the backend server is removed or the health check fails, the load balancing allows the existing connection to be transmitted normally within a certain period of time.Note:  Basic Edition instances do not support enabling graceful connection interruption. Only Standard Edition and WAF Enhanced Edition instances support it.Server type and IP type server group support graceful connection interruption. Function Compute type does not support it.
         * <p>
         * @return {@code this}
         * @param connectionDrainConfig Property connectionDrainConfig: Configuration related to graceful connection interruption.Enable graceful connection interruption. After the backend server is removed or the health check fails, the load balancing allows the existing connection to be transmitted normally within a certain period of time.Note:  Basic Edition instances do not support enabling graceful connection interruption. Only Standard Edition and WAF Enhanced Edition instances support it.Server type and IP type server group support graceful connection interruption. Function Compute type does not support it. This parameter is required.
         */
        public Builder connectionDrainConfig(final com.aliyun.ros.cdk.core.IResolvable connectionDrainConfig) {
            this.props.connectionDrainConfig(connectionDrainConfig);
            return this;
        }
        /**
         * Property connectionDrainConfig: Configuration related to graceful connection interruption.Enable graceful connection interruption. After the backend server is removed or the health check fails, the load balancing allows the existing connection to be transmitted normally within a certain period of time.Note:  Basic Edition instances do not support enabling graceful connection interruption. Only Standard Edition and WAF Enhanced Edition instances support it.Server type and IP type server group support graceful connection interruption. Function Compute type does not support it.
         * <p>
         * @return {@code this}
         * @param connectionDrainConfig Property connectionDrainConfig: Configuration related to graceful connection interruption.Enable graceful connection interruption. After the backend server is removed or the health check fails, the load balancing allows the existing connection to be transmitted normally within a certain period of time.Note:  Basic Edition instances do not support enabling graceful connection interruption. Only Standard Edition and WAF Enhanced Edition instances support it.Server type and IP type server group support graceful connection interruption. Function Compute type does not support it. This parameter is required.
         */
        public Builder connectionDrainConfig(final com.aliyun.ros.cdk.alb.RosServerGroup.ConnectionDrainConfigProperty connectionDrainConfig) {
            this.props.connectionDrainConfig(connectionDrainConfig);
            return this;
        }

        /**
         * Property protocol: The backend protocol.
         * <p>
         * Valid values:
         * HTTP (default): The server group can be associated with HTTPS, HTTP, and QUIC listeners.
         * HTTPS: The server group can be associated with HTTPS listeners.
         * gRPC: The server group can be associated with HTTPS and QUIC listeners.
         * Note: If the ServerGroupType parameter is set to Fc, you can set Protocol only to HTTP.
         * <p>
         * @return {@code this}
         * @param protocol Property protocol: The backend protocol. This parameter is required.
         */
        public Builder protocol(final java.lang.String protocol) {
            this.props.protocol(protocol);
            return this;
        }
        /**
         * Property protocol: The backend protocol.
         * <p>
         * Valid values:
         * HTTP (default): The server group can be associated with HTTPS, HTTP, and QUIC listeners.
         * HTTPS: The server group can be associated with HTTPS listeners.
         * gRPC: The server group can be associated with HTTPS and QUIC listeners.
         * Note: If the ServerGroupType parameter is set to Fc, you can set Protocol only to HTTP.
         * <p>
         * @return {@code this}
         * @param protocol Property protocol: The backend protocol. This parameter is required.
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
         * Wrr (default): The weighted round-robin algorithm is used. Backend servers that have higher weights receive more requests than those that have lower weights.
         * Wlc: The weighted least connections algorithm is used. Requests are distributed based on the weights and the number of connections to backend servers. If two backend servers have the same weight, the backend server that has fewer connections is expected to receive more requests.
         * Sch: The consistent hashing algorithm is used. Requests from the same source IP address are distributed to the same backend server.
         * Note: This parameter takes effect when the ServerGroupType parameter is set to Instance or Ip.
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
         * Wrr (default): The weighted round-robin algorithm is used. Backend servers that have higher weights receive more requests than those that have lower weights.
         * Wlc: The weighted least connections algorithm is used. Requests are distributed based on the weights and the number of connections to backend servers. If two backend servers have the same weight, the backend server that has fewer connections is expected to receive more requests.
         * Sch: The consistent hashing algorithm is used. Requests from the same source IP address are distributed to the same backend server.
         * Note: This parameter takes effect when the ServerGroupType parameter is set to Instance or Ip.
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
         * Instance (default): allows you add servers by specifying Ecs, Ens, or Eci.
         * Ip: allows you to add servers by specifying IP addresses.
         * Fc: allows you to add servers by specifying functions of Function Compute.
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
         * Instance (default): allows you add servers by specifying Ecs, Ens, or Eci.
         * Ip: allows you to add servers by specifying IP addresses.
         * Fc: allows you to add servers by specifying functions of Function Compute.
         * <p>
         * @return {@code this}
         * @param serverGroupType Property serverGroupType: The type of the server group. This parameter is required.
         */
        public Builder serverGroupType(final com.aliyun.ros.cdk.core.IResolvable serverGroupType) {
            this.props.serverGroupType(serverGroupType);
            return this;
        }

        /**
         * Property serviceName: This parameter is available only if the ALB Ingress controller is used.
         * <p>
         * In this case, set the parameter to the name of the Kubernetes Service that is associated with the server group.
         * <p>
         * @return {@code this}
         * @param serviceName Property serviceName: This parameter is available only if the ALB Ingress controller is used. This parameter is required.
         */
        public Builder serviceName(final java.lang.String serviceName) {
            this.props.serviceName(serviceName);
            return this;
        }
        /**
         * Property serviceName: This parameter is available only if the ALB Ingress controller is used.
         * <p>
         * In this case, set the parameter to the name of the Kubernetes Service that is associated with the server group.
         * <p>
         * @return {@code this}
         * @param serviceName Property serviceName: This parameter is available only if the ALB Ingress controller is used. This parameter is required.
         */
        public Builder serviceName(final com.aliyun.ros.cdk.core.IResolvable serviceName) {
            this.props.serviceName(serviceName);
            return this;
        }

        /**
         * Property slowStartConfig: Slow start related configuration.After slow start is enabled, the backend server newly added to the backend server group will be preheated within the set time period, and the number of requests forwarded to the server will increase linearly.Note: Basic Edition instances do not support slow start, only Standard Edition and WAF Enhanced Edition instances support it.Server type and IP type server groups support slow start configuration, but Function Compute type does not.Slow start can only be enabled when the backend scheduling algorithm is the weighted polling algorithm.
         * <p>
         * @return {@code this}
         * @param slowStartConfig Property slowStartConfig: Slow start related configuration.After slow start is enabled, the backend server newly added to the backend server group will be preheated within the set time period, and the number of requests forwarded to the server will increase linearly.Note: Basic Edition instances do not support slow start, only Standard Edition and WAF Enhanced Edition instances support it.Server type and IP type server groups support slow start configuration, but Function Compute type does not.Slow start can only be enabled when the backend scheduling algorithm is the weighted polling algorithm. This parameter is required.
         */
        public Builder slowStartConfig(final com.aliyun.ros.cdk.core.IResolvable slowStartConfig) {
            this.props.slowStartConfig(slowStartConfig);
            return this;
        }
        /**
         * Property slowStartConfig: Slow start related configuration.After slow start is enabled, the backend server newly added to the backend server group will be preheated within the set time period, and the number of requests forwarded to the server will increase linearly.Note: Basic Edition instances do not support slow start, only Standard Edition and WAF Enhanced Edition instances support it.Server type and IP type server groups support slow start configuration, but Function Compute type does not.Slow start can only be enabled when the backend scheduling algorithm is the weighted polling algorithm.
         * <p>
         * @return {@code this}
         * @param slowStartConfig Property slowStartConfig: Slow start related configuration.After slow start is enabled, the backend server newly added to the backend server group will be preheated within the set time period, and the number of requests forwarded to the server will increase linearly.Note: Basic Edition instances do not support slow start, only Standard Edition and WAF Enhanced Edition instances support it.Server type and IP type server groups support slow start configuration, but Function Compute type does not.Slow start can only be enabled when the backend scheduling algorithm is the weighted polling algorithm. This parameter is required.
         */
        public Builder slowStartConfig(final com.aliyun.ros.cdk.alb.RosServerGroup.SlowStartConfigProperty slowStartConfig) {
            this.props.slowStartConfig(slowStartConfig);
            return this;
        }

        /**
         * Property stickySessionConfig: The configuration of session persistence.
         * <p>
         * Note: This parameter is required if the ServerGroupType parameter is set to Instance or Ip.
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
         * Note: This parameter is required if the ServerGroupType parameter is set to Instance or Ip.
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
         * Property uchConfig: URL consistency hash parameter configuration.
         * <p>
         * @return {@code this}
         * @param uchConfig Property uchConfig: URL consistency hash parameter configuration. This parameter is required.
         */
        public Builder uchConfig(final com.aliyun.ros.cdk.core.IResolvable uchConfig) {
            this.props.uchConfig(uchConfig);
            return this;
        }
        /**
         * Property uchConfig: URL consistency hash parameter configuration.
         * <p>
         * @return {@code this}
         * @param uchConfig Property uchConfig: URL consistency hash parameter configuration. This parameter is required.
         */
        public Builder uchConfig(final com.aliyun.ros.cdk.alb.RosServerGroup.UchConfigProperty uchConfig) {
            this.props.uchConfig(uchConfig);
            return this;
        }

        /**
         * Property upstreamKeepaliveEnabled: Whether to enable upstream keepalive.
         * <p>
         * @return {@code this}
         * @param upstreamKeepaliveEnabled Property upstreamKeepaliveEnabled: Whether to enable upstream keepalive. This parameter is required.
         */
        public Builder upstreamKeepaliveEnabled(final java.lang.Boolean upstreamKeepaliveEnabled) {
            this.props.upstreamKeepaliveEnabled(upstreamKeepaliveEnabled);
            return this;
        }
        /**
         * Property upstreamKeepaliveEnabled: Whether to enable upstream keepalive.
         * <p>
         * @return {@code this}
         * @param upstreamKeepaliveEnabled Property upstreamKeepaliveEnabled: Whether to enable upstream keepalive. This parameter is required.
         */
        public Builder upstreamKeepaliveEnabled(final com.aliyun.ros.cdk.core.IResolvable upstreamKeepaliveEnabled) {
            this.props.upstreamKeepaliveEnabled(upstreamKeepaliveEnabled);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.alb.ServerGroup}.
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
