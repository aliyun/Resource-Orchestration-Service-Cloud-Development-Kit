package com.aliyun.ros.cdk.alb;

/**
 * Properties for defining a <code>ServerGroup</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-servergroup
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:20.685Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.alb.$Module.class, fqn = "@alicloud/ros-cdk-alb.ServerGroupProps")
@software.amazon.jsii.Jsii.Proxy(ServerGroupProps.Jsii$Proxy.class)
public interface ServerGroupProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property healthCheckConfig: The configuration of health checks.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getHealthCheckConfig();

    /**
     * Property serverGroupName: The name of the server group.
     * <p>
     * The name must be 2 to 128 characters in length, and
     * can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name
     * must start with a letter.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getServerGroupName();

    /**
     * Property connectionDrainConfig: Configuration related to graceful connection interruption.Enable graceful connection interruption. After the backend server is removed or the health check fails, the load balancing allows the existing connection to be transmitted normally within a certain period of time.Note:  Basic Edition instances do not support enabling graceful connection interruption. Only Standard Edition and WAF Enhanced Edition instances support it.Server type and IP type server group support graceful connection interruption. Function Compute type does not support it.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getConnectionDrainConfig() {
        return null;
    }

    /**
     * Property crossZoneEnabled: Specifies whether to enable cross-zone load balancing.
     * <p>
     * Valid values:
     * true (default)
     * false
     * Note:
     * Basic ALB instances do not support server groups that have cross-zone load balancing disabled. Only Standard and WAF-enabled ALB instances support server groups that have cross-zone load balancing.
     * Cross-zone load balancing can be disabled for server groups of the server and IP type, but not for server groups of the Function Compute type.
     * When cross-zone load balancing is disabled, session persistence cannot be enabled.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCrossZoneEnabled() {
        return null;
    }

    /**
     * Property ipv6Enabled: Whether to enable IPv6.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIpv6Enabled() {
        return null;
    }

    /**
     * Property protocol: The backend protocol.
     * <p>
     * Valid values:
     * HTTP (default): The server group can be associated with HTTPS, HTTP, and QUIC listeners.
     * HTTPS: The server group can be associated with HTTPS listeners.
     * gRPC: The server group can be associated with HTTPS and QUIC listeners.
     * Note: If the ServerGroupType parameter is set to Fc, you can set Protocol only to HTTP.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getProtocol() {
        return null;
    }

    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * Property scheduler: The scheduling algorithm.
     * <p>
     * Valid values:
     * Wrr (default): The weighted round-robin algorithm is used. Backend servers that have higher weights receive more requests than those that have lower weights.
     * Wlc: The weighted least connections algorithm is used. Requests are distributed based on the weights and the number of connections to backend servers. If two backend servers have the same weight, the backend server that has fewer connections is expected to receive more requests.
     * Sch: The consistent hashing algorithm is used. Requests from the same source IP address are distributed to the same backend server.
     * Note: This parameter takes effect when the ServerGroupType parameter is set to Instance or Ip.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getScheduler() {
        return null;
    }

    /**
     * Property serverGroupType: The type of the server group.
     * <p>
     * Valid values:
     * Instance (default): allows you add servers by specifying Ecs, Ens, or Eci.
     * Ip: allows you to add servers by specifying IP addresses.
     * Fc: allows you to add servers by specifying functions of Function Compute.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getServerGroupType() {
        return null;
    }

    /**
     * Property serviceName: This parameter is available only if the ALB Ingress controller is used.
     * <p>
     * In this case, set the parameter to the name of the Kubernetes Service that is associated with the server group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getServiceName() {
        return null;
    }

    /**
     * Property slowStartConfig: Slow start related configuration.After slow start is enabled, the backend server newly added to the backend server group will be preheated within the set time period, and the number of requests forwarded to the server will increase linearly.Note: Basic Edition instances do not support slow start, only Standard Edition and WAF Enhanced Edition instances support it.Server type and IP type server groups support slow start configuration, but Function Compute type does not.Slow start can only be enabled when the backend scheduling algorithm is the weighted polling algorithm.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSlowStartConfig() {
        return null;
    }

    /**
     * Property stickySessionConfig: The configuration of session persistence.
     * <p>
     * Note: This parameter is required if the ServerGroupType parameter is set to Instance or Ip.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getStickySessionConfig() {
        return null;
    }

    /**
     * Property tags: Tags to attach to instance.
     * <p>
     * Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.alb.RosServerGroup.TagsProperty> getTags() {
        return null;
    }

    /**
     * Property uchConfig: URL consistency hash parameter configuration.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getUchConfig() {
        return null;
    }

    /**
     * Property upstreamKeepaliveEnabled: Whether to enable upstream keepalive.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getUpstreamKeepaliveEnabled() {
        return null;
    }

    /**
     * Property vpcId: The ID of the virtual private cloud (VPC).
     * <p>
     * You can add only servers that are deployed
     * in the specified VPC to the server group.
     * Note: This parameter is required if the ServerGroupType parameter is set to Instance or Ip.
     * Note: This parameter takes effect when the ServerGroupType parameter is set to Instance or Ip.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVpcId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ServerGroupProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ServerGroupProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ServerGroupProps> {
        java.lang.Object healthCheckConfig;
        java.lang.Object serverGroupName;
        java.lang.Object connectionDrainConfig;
        java.lang.Object crossZoneEnabled;
        java.lang.Object ipv6Enabled;
        java.lang.Object protocol;
        java.lang.Object resourceGroupId;
        java.lang.Object scheduler;
        java.lang.Object serverGroupType;
        java.lang.Object serviceName;
        java.lang.Object slowStartConfig;
        java.lang.Object stickySessionConfig;
        java.util.List<com.aliyun.ros.cdk.alb.RosServerGroup.TagsProperty> tags;
        java.lang.Object uchConfig;
        java.lang.Object upstreamKeepaliveEnabled;
        java.lang.Object vpcId;

        /**
         * Sets the value of {@link ServerGroupProps#getHealthCheckConfig}
         * @param healthCheckConfig Property healthCheckConfig: The configuration of health checks. This parameter is required.
         * @return {@code this}
         */
        public Builder healthCheckConfig(com.aliyun.ros.cdk.core.IResolvable healthCheckConfig) {
            this.healthCheckConfig = healthCheckConfig;
            return this;
        }

        /**
         * Sets the value of {@link ServerGroupProps#getHealthCheckConfig}
         * @param healthCheckConfig Property healthCheckConfig: The configuration of health checks. This parameter is required.
         * @return {@code this}
         */
        public Builder healthCheckConfig(com.aliyun.ros.cdk.alb.RosServerGroup.HealthCheckConfigProperty healthCheckConfig) {
            this.healthCheckConfig = healthCheckConfig;
            return this;
        }

        /**
         * Sets the value of {@link ServerGroupProps#getServerGroupName}
         * @param serverGroupName Property serverGroupName: The name of the server group. This parameter is required.
         *                        The name must be 2 to 128 characters in length, and
         *                        can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name
         *                        must start with a letter.
         * @return {@code this}
         */
        public Builder serverGroupName(java.lang.String serverGroupName) {
            this.serverGroupName = serverGroupName;
            return this;
        }

        /**
         * Sets the value of {@link ServerGroupProps#getServerGroupName}
         * @param serverGroupName Property serverGroupName: The name of the server group. This parameter is required.
         *                        The name must be 2 to 128 characters in length, and
         *                        can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name
         *                        must start with a letter.
         * @return {@code this}
         */
        public Builder serverGroupName(com.aliyun.ros.cdk.core.IResolvable serverGroupName) {
            this.serverGroupName = serverGroupName;
            return this;
        }

        /**
         * Sets the value of {@link ServerGroupProps#getConnectionDrainConfig}
         * @param connectionDrainConfig Property connectionDrainConfig: Configuration related to graceful connection interruption.Enable graceful connection interruption. After the backend server is removed or the health check fails, the load balancing allows the existing connection to be transmitted normally within a certain period of time.Note:  Basic Edition instances do not support enabling graceful connection interruption. Only Standard Edition and WAF Enhanced Edition instances support it.Server type and IP type server group support graceful connection interruption. Function Compute type does not support it.
         * @return {@code this}
         */
        public Builder connectionDrainConfig(com.aliyun.ros.cdk.core.IResolvable connectionDrainConfig) {
            this.connectionDrainConfig = connectionDrainConfig;
            return this;
        }

        /**
         * Sets the value of {@link ServerGroupProps#getConnectionDrainConfig}
         * @param connectionDrainConfig Property connectionDrainConfig: Configuration related to graceful connection interruption.Enable graceful connection interruption. After the backend server is removed or the health check fails, the load balancing allows the existing connection to be transmitted normally within a certain period of time.Note:  Basic Edition instances do not support enabling graceful connection interruption. Only Standard Edition and WAF Enhanced Edition instances support it.Server type and IP type server group support graceful connection interruption. Function Compute type does not support it.
         * @return {@code this}
         */
        public Builder connectionDrainConfig(com.aliyun.ros.cdk.alb.RosServerGroup.ConnectionDrainConfigProperty connectionDrainConfig) {
            this.connectionDrainConfig = connectionDrainConfig;
            return this;
        }

        /**
         * Sets the value of {@link ServerGroupProps#getCrossZoneEnabled}
         * @param crossZoneEnabled Property crossZoneEnabled: Specifies whether to enable cross-zone load balancing.
         *                         Valid values:
         *                         true (default)
         *                         false
         *                         Note:
         *                         Basic ALB instances do not support server groups that have cross-zone load balancing disabled. Only Standard and WAF-enabled ALB instances support server groups that have cross-zone load balancing.
         *                         Cross-zone load balancing can be disabled for server groups of the server and IP type, but not for server groups of the Function Compute type.
         *                         When cross-zone load balancing is disabled, session persistence cannot be enabled.
         * @return {@code this}
         */
        public Builder crossZoneEnabled(java.lang.Boolean crossZoneEnabled) {
            this.crossZoneEnabled = crossZoneEnabled;
            return this;
        }

        /**
         * Sets the value of {@link ServerGroupProps#getCrossZoneEnabled}
         * @param crossZoneEnabled Property crossZoneEnabled: Specifies whether to enable cross-zone load balancing.
         *                         Valid values:
         *                         true (default)
         *                         false
         *                         Note:
         *                         Basic ALB instances do not support server groups that have cross-zone load balancing disabled. Only Standard and WAF-enabled ALB instances support server groups that have cross-zone load balancing.
         *                         Cross-zone load balancing can be disabled for server groups of the server and IP type, but not for server groups of the Function Compute type.
         *                         When cross-zone load balancing is disabled, session persistence cannot be enabled.
         * @return {@code this}
         */
        public Builder crossZoneEnabled(com.aliyun.ros.cdk.core.IResolvable crossZoneEnabled) {
            this.crossZoneEnabled = crossZoneEnabled;
            return this;
        }

        /**
         * Sets the value of {@link ServerGroupProps#getIpv6Enabled}
         * @param ipv6Enabled Property ipv6Enabled: Whether to enable IPv6.
         * @return {@code this}
         */
        public Builder ipv6Enabled(java.lang.Boolean ipv6Enabled) {
            this.ipv6Enabled = ipv6Enabled;
            return this;
        }

        /**
         * Sets the value of {@link ServerGroupProps#getIpv6Enabled}
         * @param ipv6Enabled Property ipv6Enabled: Whether to enable IPv6.
         * @return {@code this}
         */
        public Builder ipv6Enabled(com.aliyun.ros.cdk.core.IResolvable ipv6Enabled) {
            this.ipv6Enabled = ipv6Enabled;
            return this;
        }

        /**
         * Sets the value of {@link ServerGroupProps#getProtocol}
         * @param protocol Property protocol: The backend protocol.
         *                 Valid values:
         *                 HTTP (default): The server group can be associated with HTTPS, HTTP, and QUIC listeners.
         *                 HTTPS: The server group can be associated with HTTPS listeners.
         *                 gRPC: The server group can be associated with HTTPS and QUIC listeners.
         *                 Note: If the ServerGroupType parameter is set to Fc, you can set Protocol only to HTTP.
         * @return {@code this}
         */
        public Builder protocol(java.lang.String protocol) {
            this.protocol = protocol;
            return this;
        }

        /**
         * Sets the value of {@link ServerGroupProps#getProtocol}
         * @param protocol Property protocol: The backend protocol.
         *                 Valid values:
         *                 HTTP (default): The server group can be associated with HTTPS, HTTP, and QUIC listeners.
         *                 HTTPS: The server group can be associated with HTTPS listeners.
         *                 gRPC: The server group can be associated with HTTPS and QUIC listeners.
         *                 Note: If the ServerGroupType parameter is set to Fc, you can set Protocol only to HTTP.
         * @return {@code this}
         */
        public Builder protocol(com.aliyun.ros.cdk.core.IResolvable protocol) {
            this.protocol = protocol;
            return this;
        }

        /**
         * Sets the value of {@link ServerGroupProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link ServerGroupProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link ServerGroupProps#getScheduler}
         * @param scheduler Property scheduler: The scheduling algorithm.
         *                  Valid values:
         *                  Wrr (default): The weighted round-robin algorithm is used. Backend servers that have higher weights receive more requests than those that have lower weights.
         *                  Wlc: The weighted least connections algorithm is used. Requests are distributed based on the weights and the number of connections to backend servers. If two backend servers have the same weight, the backend server that has fewer connections is expected to receive more requests.
         *                  Sch: The consistent hashing algorithm is used. Requests from the same source IP address are distributed to the same backend server.
         *                  Note: This parameter takes effect when the ServerGroupType parameter is set to Instance or Ip.
         * @return {@code this}
         */
        public Builder scheduler(java.lang.String scheduler) {
            this.scheduler = scheduler;
            return this;
        }

        /**
         * Sets the value of {@link ServerGroupProps#getScheduler}
         * @param scheduler Property scheduler: The scheduling algorithm.
         *                  Valid values:
         *                  Wrr (default): The weighted round-robin algorithm is used. Backend servers that have higher weights receive more requests than those that have lower weights.
         *                  Wlc: The weighted least connections algorithm is used. Requests are distributed based on the weights and the number of connections to backend servers. If two backend servers have the same weight, the backend server that has fewer connections is expected to receive more requests.
         *                  Sch: The consistent hashing algorithm is used. Requests from the same source IP address are distributed to the same backend server.
         *                  Note: This parameter takes effect when the ServerGroupType parameter is set to Instance or Ip.
         * @return {@code this}
         */
        public Builder scheduler(com.aliyun.ros.cdk.core.IResolvable scheduler) {
            this.scheduler = scheduler;
            return this;
        }

        /**
         * Sets the value of {@link ServerGroupProps#getServerGroupType}
         * @param serverGroupType Property serverGroupType: The type of the server group.
         *                        Valid values:
         *                        Instance (default): allows you add servers by specifying Ecs, Ens, or Eci.
         *                        Ip: allows you to add servers by specifying IP addresses.
         *                        Fc: allows you to add servers by specifying functions of Function Compute.
         * @return {@code this}
         */
        public Builder serverGroupType(java.lang.String serverGroupType) {
            this.serverGroupType = serverGroupType;
            return this;
        }

        /**
         * Sets the value of {@link ServerGroupProps#getServerGroupType}
         * @param serverGroupType Property serverGroupType: The type of the server group.
         *                        Valid values:
         *                        Instance (default): allows you add servers by specifying Ecs, Ens, or Eci.
         *                        Ip: allows you to add servers by specifying IP addresses.
         *                        Fc: allows you to add servers by specifying functions of Function Compute.
         * @return {@code this}
         */
        public Builder serverGroupType(com.aliyun.ros.cdk.core.IResolvable serverGroupType) {
            this.serverGroupType = serverGroupType;
            return this;
        }

        /**
         * Sets the value of {@link ServerGroupProps#getServiceName}
         * @param serviceName Property serviceName: This parameter is available only if the ALB Ingress controller is used.
         *                    In this case, set the parameter to the name of the Kubernetes Service that is associated with the server group.
         * @return {@code this}
         */
        public Builder serviceName(java.lang.String serviceName) {
            this.serviceName = serviceName;
            return this;
        }

        /**
         * Sets the value of {@link ServerGroupProps#getServiceName}
         * @param serviceName Property serviceName: This parameter is available only if the ALB Ingress controller is used.
         *                    In this case, set the parameter to the name of the Kubernetes Service that is associated with the server group.
         * @return {@code this}
         */
        public Builder serviceName(com.aliyun.ros.cdk.core.IResolvable serviceName) {
            this.serviceName = serviceName;
            return this;
        }

        /**
         * Sets the value of {@link ServerGroupProps#getSlowStartConfig}
         * @param slowStartConfig Property slowStartConfig: Slow start related configuration.After slow start is enabled, the backend server newly added to the backend server group will be preheated within the set time period, and the number of requests forwarded to the server will increase linearly.Note: Basic Edition instances do not support slow start, only Standard Edition and WAF Enhanced Edition instances support it.Server type and IP type server groups support slow start configuration, but Function Compute type does not.Slow start can only be enabled when the backend scheduling algorithm is the weighted polling algorithm.
         * @return {@code this}
         */
        public Builder slowStartConfig(com.aliyun.ros.cdk.core.IResolvable slowStartConfig) {
            this.slowStartConfig = slowStartConfig;
            return this;
        }

        /**
         * Sets the value of {@link ServerGroupProps#getSlowStartConfig}
         * @param slowStartConfig Property slowStartConfig: Slow start related configuration.After slow start is enabled, the backend server newly added to the backend server group will be preheated within the set time period, and the number of requests forwarded to the server will increase linearly.Note: Basic Edition instances do not support slow start, only Standard Edition and WAF Enhanced Edition instances support it.Server type and IP type server groups support slow start configuration, but Function Compute type does not.Slow start can only be enabled when the backend scheduling algorithm is the weighted polling algorithm.
         * @return {@code this}
         */
        public Builder slowStartConfig(com.aliyun.ros.cdk.alb.RosServerGroup.SlowStartConfigProperty slowStartConfig) {
            this.slowStartConfig = slowStartConfig;
            return this;
        }

        /**
         * Sets the value of {@link ServerGroupProps#getStickySessionConfig}
         * @param stickySessionConfig Property stickySessionConfig: The configuration of session persistence.
         *                            Note: This parameter is required if the ServerGroupType parameter is set to Instance or Ip.
         * @return {@code this}
         */
        public Builder stickySessionConfig(com.aliyun.ros.cdk.core.IResolvable stickySessionConfig) {
            this.stickySessionConfig = stickySessionConfig;
            return this;
        }

        /**
         * Sets the value of {@link ServerGroupProps#getStickySessionConfig}
         * @param stickySessionConfig Property stickySessionConfig: The configuration of session persistence.
         *                            Note: This parameter is required if the ServerGroupType parameter is set to Instance or Ip.
         * @return {@code this}
         */
        public Builder stickySessionConfig(com.aliyun.ros.cdk.alb.RosServerGroup.StickySessionConfigProperty stickySessionConfig) {
            this.stickySessionConfig = stickySessionConfig;
            return this;
        }

        /**
         * Sets the value of {@link ServerGroupProps#getTags}
         * @param tags Property tags: Tags to attach to instance.
         *             Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.alb.RosServerGroup.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.alb.RosServerGroup.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link ServerGroupProps#getUchConfig}
         * @param uchConfig Property uchConfig: URL consistency hash parameter configuration.
         * @return {@code this}
         */
        public Builder uchConfig(com.aliyun.ros.cdk.core.IResolvable uchConfig) {
            this.uchConfig = uchConfig;
            return this;
        }

        /**
         * Sets the value of {@link ServerGroupProps#getUchConfig}
         * @param uchConfig Property uchConfig: URL consistency hash parameter configuration.
         * @return {@code this}
         */
        public Builder uchConfig(com.aliyun.ros.cdk.alb.RosServerGroup.UchConfigProperty uchConfig) {
            this.uchConfig = uchConfig;
            return this;
        }

        /**
         * Sets the value of {@link ServerGroupProps#getUpstreamKeepaliveEnabled}
         * @param upstreamKeepaliveEnabled Property upstreamKeepaliveEnabled: Whether to enable upstream keepalive.
         * @return {@code this}
         */
        public Builder upstreamKeepaliveEnabled(java.lang.Boolean upstreamKeepaliveEnabled) {
            this.upstreamKeepaliveEnabled = upstreamKeepaliveEnabled;
            return this;
        }

        /**
         * Sets the value of {@link ServerGroupProps#getUpstreamKeepaliveEnabled}
         * @param upstreamKeepaliveEnabled Property upstreamKeepaliveEnabled: Whether to enable upstream keepalive.
         * @return {@code this}
         */
        public Builder upstreamKeepaliveEnabled(com.aliyun.ros.cdk.core.IResolvable upstreamKeepaliveEnabled) {
            this.upstreamKeepaliveEnabled = upstreamKeepaliveEnabled;
            return this;
        }

        /**
         * Sets the value of {@link ServerGroupProps#getVpcId}
         * @param vpcId Property vpcId: The ID of the virtual private cloud (VPC).
         *              You can add only servers that are deployed
         *              in the specified VPC to the server group.
         *              Note: This parameter is required if the ServerGroupType parameter is set to Instance or Ip.
         *              Note: This parameter takes effect when the ServerGroupType parameter is set to Instance or Ip.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link ServerGroupProps#getVpcId}
         * @param vpcId Property vpcId: The ID of the virtual private cloud (VPC).
         *              You can add only servers that are deployed
         *              in the specified VPC to the server group.
         *              Note: This parameter is required if the ServerGroupType parameter is set to Instance or Ip.
         *              Note: This parameter takes effect when the ServerGroupType parameter is set to Instance or Ip.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ServerGroupProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ServerGroupProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ServerGroupProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ServerGroupProps {
        private final java.lang.Object healthCheckConfig;
        private final java.lang.Object serverGroupName;
        private final java.lang.Object connectionDrainConfig;
        private final java.lang.Object crossZoneEnabled;
        private final java.lang.Object ipv6Enabled;
        private final java.lang.Object protocol;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object scheduler;
        private final java.lang.Object serverGroupType;
        private final java.lang.Object serviceName;
        private final java.lang.Object slowStartConfig;
        private final java.lang.Object stickySessionConfig;
        private final java.util.List<com.aliyun.ros.cdk.alb.RosServerGroup.TagsProperty> tags;
        private final java.lang.Object uchConfig;
        private final java.lang.Object upstreamKeepaliveEnabled;
        private final java.lang.Object vpcId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.healthCheckConfig = software.amazon.jsii.Kernel.get(this, "healthCheckConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.serverGroupName = software.amazon.jsii.Kernel.get(this, "serverGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.connectionDrainConfig = software.amazon.jsii.Kernel.get(this, "connectionDrainConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.crossZoneEnabled = software.amazon.jsii.Kernel.get(this, "crossZoneEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ipv6Enabled = software.amazon.jsii.Kernel.get(this, "ipv6Enabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.protocol = software.amazon.jsii.Kernel.get(this, "protocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.scheduler = software.amazon.jsii.Kernel.get(this, "scheduler", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.serverGroupType = software.amazon.jsii.Kernel.get(this, "serverGroupType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.serviceName = software.amazon.jsii.Kernel.get(this, "serviceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.slowStartConfig = software.amazon.jsii.Kernel.get(this, "slowStartConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.stickySessionConfig = software.amazon.jsii.Kernel.get(this, "stickySessionConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.alb.RosServerGroup.TagsProperty.class)));
            this.uchConfig = software.amazon.jsii.Kernel.get(this, "uchConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.upstreamKeepaliveEnabled = software.amazon.jsii.Kernel.get(this, "upstreamKeepaliveEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.healthCheckConfig = java.util.Objects.requireNonNull(builder.healthCheckConfig, "healthCheckConfig is required");
            this.serverGroupName = java.util.Objects.requireNonNull(builder.serverGroupName, "serverGroupName is required");
            this.connectionDrainConfig = builder.connectionDrainConfig;
            this.crossZoneEnabled = builder.crossZoneEnabled;
            this.ipv6Enabled = builder.ipv6Enabled;
            this.protocol = builder.protocol;
            this.resourceGroupId = builder.resourceGroupId;
            this.scheduler = builder.scheduler;
            this.serverGroupType = builder.serverGroupType;
            this.serviceName = builder.serviceName;
            this.slowStartConfig = builder.slowStartConfig;
            this.stickySessionConfig = builder.stickySessionConfig;
            this.tags = (java.util.List<com.aliyun.ros.cdk.alb.RosServerGroup.TagsProperty>)builder.tags;
            this.uchConfig = builder.uchConfig;
            this.upstreamKeepaliveEnabled = builder.upstreamKeepaliveEnabled;
            this.vpcId = builder.vpcId;
        }

        @Override
        public final java.lang.Object getHealthCheckConfig() {
            return this.healthCheckConfig;
        }

        @Override
        public final java.lang.Object getServerGroupName() {
            return this.serverGroupName;
        }

        @Override
        public final java.lang.Object getConnectionDrainConfig() {
            return this.connectionDrainConfig;
        }

        @Override
        public final java.lang.Object getCrossZoneEnabled() {
            return this.crossZoneEnabled;
        }

        @Override
        public final java.lang.Object getIpv6Enabled() {
            return this.ipv6Enabled;
        }

        @Override
        public final java.lang.Object getProtocol() {
            return this.protocol;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getScheduler() {
            return this.scheduler;
        }

        @Override
        public final java.lang.Object getServerGroupType() {
            return this.serverGroupType;
        }

        @Override
        public final java.lang.Object getServiceName() {
            return this.serviceName;
        }

        @Override
        public final java.lang.Object getSlowStartConfig() {
            return this.slowStartConfig;
        }

        @Override
        public final java.lang.Object getStickySessionConfig() {
            return this.stickySessionConfig;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.alb.RosServerGroup.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        public final java.lang.Object getUchConfig() {
            return this.uchConfig;
        }

        @Override
        public final java.lang.Object getUpstreamKeepaliveEnabled() {
            return this.upstreamKeepaliveEnabled;
        }

        @Override
        public final java.lang.Object getVpcId() {
            return this.vpcId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("healthCheckConfig", om.valueToTree(this.getHealthCheckConfig()));
            data.set("serverGroupName", om.valueToTree(this.getServerGroupName()));
            if (this.getConnectionDrainConfig() != null) {
                data.set("connectionDrainConfig", om.valueToTree(this.getConnectionDrainConfig()));
            }
            if (this.getCrossZoneEnabled() != null) {
                data.set("crossZoneEnabled", om.valueToTree(this.getCrossZoneEnabled()));
            }
            if (this.getIpv6Enabled() != null) {
                data.set("ipv6Enabled", om.valueToTree(this.getIpv6Enabled()));
            }
            if (this.getProtocol() != null) {
                data.set("protocol", om.valueToTree(this.getProtocol()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getScheduler() != null) {
                data.set("scheduler", om.valueToTree(this.getScheduler()));
            }
            if (this.getServerGroupType() != null) {
                data.set("serverGroupType", om.valueToTree(this.getServerGroupType()));
            }
            if (this.getServiceName() != null) {
                data.set("serviceName", om.valueToTree(this.getServiceName()));
            }
            if (this.getSlowStartConfig() != null) {
                data.set("slowStartConfig", om.valueToTree(this.getSlowStartConfig()));
            }
            if (this.getStickySessionConfig() != null) {
                data.set("stickySessionConfig", om.valueToTree(this.getStickySessionConfig()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getUchConfig() != null) {
                data.set("uchConfig", om.valueToTree(this.getUchConfig()));
            }
            if (this.getUpstreamKeepaliveEnabled() != null) {
                data.set("upstreamKeepaliveEnabled", om.valueToTree(this.getUpstreamKeepaliveEnabled()));
            }
            if (this.getVpcId() != null) {
                data.set("vpcId", om.valueToTree(this.getVpcId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-alb.ServerGroupProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ServerGroupProps.Jsii$Proxy that = (ServerGroupProps.Jsii$Proxy) o;

            if (!healthCheckConfig.equals(that.healthCheckConfig)) return false;
            if (!serverGroupName.equals(that.serverGroupName)) return false;
            if (this.connectionDrainConfig != null ? !this.connectionDrainConfig.equals(that.connectionDrainConfig) : that.connectionDrainConfig != null) return false;
            if (this.crossZoneEnabled != null ? !this.crossZoneEnabled.equals(that.crossZoneEnabled) : that.crossZoneEnabled != null) return false;
            if (this.ipv6Enabled != null ? !this.ipv6Enabled.equals(that.ipv6Enabled) : that.ipv6Enabled != null) return false;
            if (this.protocol != null ? !this.protocol.equals(that.protocol) : that.protocol != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.scheduler != null ? !this.scheduler.equals(that.scheduler) : that.scheduler != null) return false;
            if (this.serverGroupType != null ? !this.serverGroupType.equals(that.serverGroupType) : that.serverGroupType != null) return false;
            if (this.serviceName != null ? !this.serviceName.equals(that.serviceName) : that.serviceName != null) return false;
            if (this.slowStartConfig != null ? !this.slowStartConfig.equals(that.slowStartConfig) : that.slowStartConfig != null) return false;
            if (this.stickySessionConfig != null ? !this.stickySessionConfig.equals(that.stickySessionConfig) : that.stickySessionConfig != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            if (this.uchConfig != null ? !this.uchConfig.equals(that.uchConfig) : that.uchConfig != null) return false;
            if (this.upstreamKeepaliveEnabled != null ? !this.upstreamKeepaliveEnabled.equals(that.upstreamKeepaliveEnabled) : that.upstreamKeepaliveEnabled != null) return false;
            return this.vpcId != null ? this.vpcId.equals(that.vpcId) : that.vpcId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.healthCheckConfig.hashCode();
            result = 31 * result + (this.serverGroupName.hashCode());
            result = 31 * result + (this.connectionDrainConfig != null ? this.connectionDrainConfig.hashCode() : 0);
            result = 31 * result + (this.crossZoneEnabled != null ? this.crossZoneEnabled.hashCode() : 0);
            result = 31 * result + (this.ipv6Enabled != null ? this.ipv6Enabled.hashCode() : 0);
            result = 31 * result + (this.protocol != null ? this.protocol.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.scheduler != null ? this.scheduler.hashCode() : 0);
            result = 31 * result + (this.serverGroupType != null ? this.serverGroupType.hashCode() : 0);
            result = 31 * result + (this.serviceName != null ? this.serviceName.hashCode() : 0);
            result = 31 * result + (this.slowStartConfig != null ? this.slowStartConfig.hashCode() : 0);
            result = 31 * result + (this.stickySessionConfig != null ? this.stickySessionConfig.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.uchConfig != null ? this.uchConfig.hashCode() : 0);
            result = 31 * result + (this.upstreamKeepaliveEnabled != null ? this.upstreamKeepaliveEnabled.hashCode() : 0);
            result = 31 * result + (this.vpcId != null ? this.vpcId.hashCode() : 0);
            return result;
        }
    }
}
