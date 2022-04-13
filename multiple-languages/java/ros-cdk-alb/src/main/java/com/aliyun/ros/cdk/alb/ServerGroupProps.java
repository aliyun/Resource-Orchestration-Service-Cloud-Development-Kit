package com.aliyun.ros.cdk.alb;

/**
 * Properties for defining a `ALIYUN::ALB::ServerGroup`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.56.0 (build 55e7d15)", date = "2022-04-13T06:46:13.667Z")
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
     * Property vpcId: The ID of the virtual private cloud (VPC).
     * <p>
     * You can add only servers that are deployed
     * in the specified VPC to the server group.
     * Note This parameter is required if the ServerGroupType parameter is set to Instance or Ip.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVpcId();

    /**
     * Property protocol: The server protocol.
     * <p>
     * Valid values:
     * HTTP: allows you to associate HTTPS, HTTP, or QUIC listeners with backend servers. This
     * is the default value.
     * HTTPS: allows you to associate HTTPS listeners with backend servers.
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
     * Wrr: Backend servers that have higher weights receive more requests than those that have
     * lower weights. This is the default value.
     * Wlc: Requests are distributed based on the weight and load of each backend server. The
     * load refers to the number of connections to a backend server. If multiple backend
     * servers have the same weight, requests are routed to the backend server with the least
     * connections.
     * Sch: specifies consistent hashing that is based on source IP addresses.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getScheduler() {
        return null;
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
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getServerGroupType() {
        return null;
    }

    /**
     * Property stickySessionConfig: The configuration of session persistence.
     * <p>
     * Note This parameter is required if the ServerGroupType parameter is set to Instance or Ip.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getStickySessionConfig() {
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
        java.lang.Object vpcId;
        java.lang.Object protocol;
        java.lang.Object resourceGroupId;
        java.lang.Object scheduler;
        java.lang.Object serverGroupType;
        java.lang.Object stickySessionConfig;

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
         * Sets the value of {@link ServerGroupProps#getVpcId}
         * @param vpcId Property vpcId: The ID of the virtual private cloud (VPC). This parameter is required.
         *              You can add only servers that are deployed
         *              in the specified VPC to the server group.
         *              Note This parameter is required if the ServerGroupType parameter is set to Instance or Ip.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link ServerGroupProps#getVpcId}
         * @param vpcId Property vpcId: The ID of the virtual private cloud (VPC). This parameter is required.
         *              You can add only servers that are deployed
         *              in the specified VPC to the server group.
         *              Note This parameter is required if the ServerGroupType parameter is set to Instance or Ip.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link ServerGroupProps#getProtocol}
         * @param protocol Property protocol: The server protocol.
         *                 Valid values:
         *                 HTTP: allows you to associate HTTPS, HTTP, or QUIC listeners with backend servers. This
         *                 is the default value.
         *                 HTTPS: allows you to associate HTTPS listeners with backend servers.
         * @return {@code this}
         */
        public Builder protocol(java.lang.String protocol) {
            this.protocol = protocol;
            return this;
        }

        /**
         * Sets the value of {@link ServerGroupProps#getProtocol}
         * @param protocol Property protocol: The server protocol.
         *                 Valid values:
         *                 HTTP: allows you to associate HTTPS, HTTP, or QUIC listeners with backend servers. This
         *                 is the default value.
         *                 HTTPS: allows you to associate HTTPS listeners with backend servers.
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
         *                  Wrr: Backend servers that have higher weights receive more requests than those that have
         *                  lower weights. This is the default value.
         *                  Wlc: Requests are distributed based on the weight and load of each backend server. The
         *                  load refers to the number of connections to a backend server. If multiple backend
         *                  servers have the same weight, requests are routed to the backend server with the least
         *                  connections.
         *                  Sch: specifies consistent hashing that is based on source IP addresses.
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
         *                  Wrr: Backend servers that have higher weights receive more requests than those that have
         *                  lower weights. This is the default value.
         *                  Wlc: Requests are distributed based on the weight and load of each backend server. The
         *                  load refers to the number of connections to a backend server. If multiple backend
         *                  servers have the same weight, requests are routed to the backend server with the least
         *                  connections.
         *                  Sch: specifies consistent hashing that is based on source IP addresses.
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
         *                        Instance: a server group that consists of servers. You can add Elastic Compute Service (ECS)
         *                        instances, elastic network interfaces (ENIs), and elastic container instances to this
         *                        type of server group. This is the default value.
         *                        Ip: a server group that consists of IP addresses. You can add IP addresses to this type
         *                        of server group.
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
         *                        Instance: a server group that consists of servers. You can add Elastic Compute Service (ECS)
         *                        instances, elastic network interfaces (ENIs), and elastic container instances to this
         *                        type of server group. This is the default value.
         *                        Ip: a server group that consists of IP addresses. You can add IP addresses to this type
         *                        of server group.
         * @return {@code this}
         */
        public Builder serverGroupType(com.aliyun.ros.cdk.core.IResolvable serverGroupType) {
            this.serverGroupType = serverGroupType;
            return this;
        }

        /**
         * Sets the value of {@link ServerGroupProps#getStickySessionConfig}
         * @param stickySessionConfig Property stickySessionConfig: The configuration of session persistence.
         *                            Note This parameter is required if the ServerGroupType parameter is set to Instance or Ip.
         * @return {@code this}
         */
        public Builder stickySessionConfig(com.aliyun.ros.cdk.core.IResolvable stickySessionConfig) {
            this.stickySessionConfig = stickySessionConfig;
            return this;
        }

        /**
         * Sets the value of {@link ServerGroupProps#getStickySessionConfig}
         * @param stickySessionConfig Property stickySessionConfig: The configuration of session persistence.
         *                            Note This parameter is required if the ServerGroupType parameter is set to Instance or Ip.
         * @return {@code this}
         */
        public Builder stickySessionConfig(com.aliyun.ros.cdk.alb.RosServerGroup.StickySessionConfigProperty stickySessionConfig) {
            this.stickySessionConfig = stickySessionConfig;
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
        private final java.lang.Object vpcId;
        private final java.lang.Object protocol;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object scheduler;
        private final java.lang.Object serverGroupType;
        private final java.lang.Object stickySessionConfig;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.healthCheckConfig = software.amazon.jsii.Kernel.get(this, "healthCheckConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.serverGroupName = software.amazon.jsii.Kernel.get(this, "serverGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.protocol = software.amazon.jsii.Kernel.get(this, "protocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.scheduler = software.amazon.jsii.Kernel.get(this, "scheduler", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.serverGroupType = software.amazon.jsii.Kernel.get(this, "serverGroupType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.stickySessionConfig = software.amazon.jsii.Kernel.get(this, "stickySessionConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.healthCheckConfig = java.util.Objects.requireNonNull(builder.healthCheckConfig, "healthCheckConfig is required");
            this.serverGroupName = java.util.Objects.requireNonNull(builder.serverGroupName, "serverGroupName is required");
            this.vpcId = java.util.Objects.requireNonNull(builder.vpcId, "vpcId is required");
            this.protocol = builder.protocol;
            this.resourceGroupId = builder.resourceGroupId;
            this.scheduler = builder.scheduler;
            this.serverGroupType = builder.serverGroupType;
            this.stickySessionConfig = builder.stickySessionConfig;
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
        public final java.lang.Object getVpcId() {
            return this.vpcId;
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
        public final java.lang.Object getStickySessionConfig() {
            return this.stickySessionConfig;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("healthCheckConfig", om.valueToTree(this.getHealthCheckConfig()));
            data.set("serverGroupName", om.valueToTree(this.getServerGroupName()));
            data.set("vpcId", om.valueToTree(this.getVpcId()));
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
            if (this.getStickySessionConfig() != null) {
                data.set("stickySessionConfig", om.valueToTree(this.getStickySessionConfig()));
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
            if (!vpcId.equals(that.vpcId)) return false;
            if (this.protocol != null ? !this.protocol.equals(that.protocol) : that.protocol != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.scheduler != null ? !this.scheduler.equals(that.scheduler) : that.scheduler != null) return false;
            if (this.serverGroupType != null ? !this.serverGroupType.equals(that.serverGroupType) : that.serverGroupType != null) return false;
            return this.stickySessionConfig != null ? this.stickySessionConfig.equals(that.stickySessionConfig) : that.stickySessionConfig == null;
        }

        @Override
        public final int hashCode() {
            int result = this.healthCheckConfig.hashCode();
            result = 31 * result + (this.serverGroupName.hashCode());
            result = 31 * result + (this.vpcId.hashCode());
            result = 31 * result + (this.protocol != null ? this.protocol.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.scheduler != null ? this.scheduler.hashCode() : 0);
            result = 31 * result + (this.serverGroupType != null ? this.serverGroupType.hashCode() : 0);
            result = 31 * result + (this.stickySessionConfig != null ? this.stickySessionConfig.hashCode() : 0);
            return result;
        }
    }
}
