package com.aliyun.ros.cdk.gwlb;

/**
 * Properties for defining a <code>ServerGroup</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gwlb-servergroup
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:26.354Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.gwlb.$Module.class, fqn = "@alicloud/ros-cdk-gwlb.ServerGroupProps")
@software.amazon.jsii.Jsii.Proxy(ServerGroupProps.Jsii$Proxy.class)
public interface ServerGroupProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property vpcId: The VPC instance ID.
     * <p>
     * <blockquote>
     * <p>
     * If the value of ServerGroupType is Instance, only servers in the VPC can be added to the server group.
     * <p>
     * </blockquote>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVpcId();

    /**
     * Property connectionDrainConfig: Connected graceful interrupt configuration.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getConnectionDrainConfig() {
        return null;
    }

    /**
     * Property healthCheckConfig: Health check configurations.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckConfig() {
        return null;
    }

    /**
     * Property protocol: Backend Protocol.
     * <p>
     * Value:
     * <strong>GENEVE (default)</strong>.
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
     * Property scheduler: Scheduling algorithm.
     * <p>
     * Value:
     * <p>
     * <ul>
     * <li><strong>5TCH (default)</strong>: quintuple hash, which is based on the consistent hash of the quintuple (source IP, Destination IP, source port, destination port, and protocol). The same flow is scheduled to the same backend server.</li>
     * <li><strong>3TCH</strong>: a three-tuple hash, which is based on the consistent hash of three tuples (source IP address, destination IP address, and protocol). The same flow is dispatched to the same backend server.</li>
     * <li><strong>2TCH</strong>: Binary Group hash, which is based on the consistent hash of the binary group (source IP and destination IP). The same flow is scheduled to the same backend server.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getScheduler() {
        return null;
    }

    /**
     * Property serverGroupName: The server group name.
     * <p>
     * It must be 2 to 128 characters in length, start with an uppercase letter or a Chinese character, and can contain digits, half-width periods (.), underscores (_), and dashes (-).
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getServerGroupName() {
        return null;
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
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getServerGroupType() {
        return null;
    }

    /**
     * Property servers: List of servers.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getServers() {
        return null;
    }

    /**
     * Property tags: Tags of server group.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.gwlb.RosServerGroup.TagsProperty> getTags() {
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
        java.lang.Object vpcId;
        java.lang.Object connectionDrainConfig;
        java.lang.Object healthCheckConfig;
        java.lang.Object protocol;
        java.lang.Object resourceGroupId;
        java.lang.Object scheduler;
        java.lang.Object serverGroupName;
        java.lang.Object serverGroupType;
        java.lang.Object servers;
        java.util.List<com.aliyun.ros.cdk.gwlb.RosServerGroup.TagsProperty> tags;

        /**
         * Sets the value of {@link ServerGroupProps#getVpcId}
         * @param vpcId Property vpcId: The VPC instance ID. This parameter is required.
         *              <blockquote>
         *              <p>
         *              If the value of ServerGroupType is Instance, only servers in the VPC can be added to the server group.
         *              <p>
         *              </blockquote>
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link ServerGroupProps#getVpcId}
         * @param vpcId Property vpcId: The VPC instance ID. This parameter is required.
         *              <blockquote>
         *              <p>
         *              If the value of ServerGroupType is Instance, only servers in the VPC can be added to the server group.
         *              <p>
         *              </blockquote>
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link ServerGroupProps#getConnectionDrainConfig}
         * @param connectionDrainConfig Property connectionDrainConfig: Connected graceful interrupt configuration.
         * @return {@code this}
         */
        public Builder connectionDrainConfig(com.aliyun.ros.cdk.core.IResolvable connectionDrainConfig) {
            this.connectionDrainConfig = connectionDrainConfig;
            return this;
        }

        /**
         * Sets the value of {@link ServerGroupProps#getConnectionDrainConfig}
         * @param connectionDrainConfig Property connectionDrainConfig: Connected graceful interrupt configuration.
         * @return {@code this}
         */
        public Builder connectionDrainConfig(com.aliyun.ros.cdk.gwlb.RosServerGroup.ConnectionDrainConfigProperty connectionDrainConfig) {
            this.connectionDrainConfig = connectionDrainConfig;
            return this;
        }

        /**
         * Sets the value of {@link ServerGroupProps#getHealthCheckConfig}
         * @param healthCheckConfig Property healthCheckConfig: Health check configurations.
         * @return {@code this}
         */
        public Builder healthCheckConfig(com.aliyun.ros.cdk.core.IResolvable healthCheckConfig) {
            this.healthCheckConfig = healthCheckConfig;
            return this;
        }

        /**
         * Sets the value of {@link ServerGroupProps#getHealthCheckConfig}
         * @param healthCheckConfig Property healthCheckConfig: Health check configurations.
         * @return {@code this}
         */
        public Builder healthCheckConfig(com.aliyun.ros.cdk.gwlb.RosServerGroup.HealthCheckConfigProperty healthCheckConfig) {
            this.healthCheckConfig = healthCheckConfig;
            return this;
        }

        /**
         * Sets the value of {@link ServerGroupProps#getProtocol}
         * @param protocol Property protocol: Backend Protocol.
         *                 Value:
         *                 <strong>GENEVE (default)</strong>.
         * @return {@code this}
         */
        public Builder protocol(java.lang.String protocol) {
            this.protocol = protocol;
            return this;
        }

        /**
         * Sets the value of {@link ServerGroupProps#getProtocol}
         * @param protocol Property protocol: Backend Protocol.
         *                 Value:
         *                 <strong>GENEVE (default)</strong>.
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
         * @param scheduler Property scheduler: Scheduling algorithm.
         *                  Value:
         *                  <p>
         *                  <ul>
         *                  <li><strong>5TCH (default)</strong>: quintuple hash, which is based on the consistent hash of the quintuple (source IP, Destination IP, source port, destination port, and protocol). The same flow is scheduled to the same backend server.</li>
         *                  <li><strong>3TCH</strong>: a three-tuple hash, which is based on the consistent hash of three tuples (source IP address, destination IP address, and protocol). The same flow is dispatched to the same backend server.</li>
         *                  <li><strong>2TCH</strong>: Binary Group hash, which is based on the consistent hash of the binary group (source IP and destination IP). The same flow is scheduled to the same backend server.</li>
         *                  </ul>
         * @return {@code this}
         */
        public Builder scheduler(java.lang.String scheduler) {
            this.scheduler = scheduler;
            return this;
        }

        /**
         * Sets the value of {@link ServerGroupProps#getScheduler}
         * @param scheduler Property scheduler: Scheduling algorithm.
         *                  Value:
         *                  <p>
         *                  <ul>
         *                  <li><strong>5TCH (default)</strong>: quintuple hash, which is based on the consistent hash of the quintuple (source IP, Destination IP, source port, destination port, and protocol). The same flow is scheduled to the same backend server.</li>
         *                  <li><strong>3TCH</strong>: a three-tuple hash, which is based on the consistent hash of three tuples (source IP address, destination IP address, and protocol). The same flow is dispatched to the same backend server.</li>
         *                  <li><strong>2TCH</strong>: Binary Group hash, which is based on the consistent hash of the binary group (source IP and destination IP). The same flow is scheduled to the same backend server.</li>
         *                  </ul>
         * @return {@code this}
         */
        public Builder scheduler(com.aliyun.ros.cdk.core.IResolvable scheduler) {
            this.scheduler = scheduler;
            return this;
        }

        /**
         * Sets the value of {@link ServerGroupProps#getServerGroupName}
         * @param serverGroupName Property serverGroupName: The server group name.
         *                        It must be 2 to 128 characters in length, start with an uppercase letter or a Chinese character, and can contain digits, half-width periods (.), underscores (_), and dashes (-).
         * @return {@code this}
         */
        public Builder serverGroupName(java.lang.String serverGroupName) {
            this.serverGroupName = serverGroupName;
            return this;
        }

        /**
         * Sets the value of {@link ServerGroupProps#getServerGroupName}
         * @param serverGroupName Property serverGroupName: The server group name.
         *                        It must be 2 to 128 characters in length, start with an uppercase letter or a Chinese character, and can contain digits, half-width periods (.), underscores (_), and dashes (-).
         * @return {@code this}
         */
        public Builder serverGroupName(com.aliyun.ros.cdk.core.IResolvable serverGroupName) {
            this.serverGroupName = serverGroupName;
            return this;
        }

        /**
         * Sets the value of {@link ServerGroupProps#getServerGroupType}
         * @param serverGroupType Property serverGroupType: The server group type.
         *                        Value:
         *                        <p>
         *                        <ul>
         *                        <li><strong>Instance (default)</strong>: The instance type. You can add Ecs, Eni, and Eci instances to the server group.</li>
         *                        <li><strong>Ip</strong>: The Ip address type. You can directly add backend servers of the Ip address type to the server group.</li>
         *                        </ul>
         * @return {@code this}
         */
        public Builder serverGroupType(java.lang.String serverGroupType) {
            this.serverGroupType = serverGroupType;
            return this;
        }

        /**
         * Sets the value of {@link ServerGroupProps#getServerGroupType}
         * @param serverGroupType Property serverGroupType: The server group type.
         *                        Value:
         *                        <p>
         *                        <ul>
         *                        <li><strong>Instance (default)</strong>: The instance type. You can add Ecs, Eni, and Eci instances to the server group.</li>
         *                        <li><strong>Ip</strong>: The Ip address type. You can directly add backend servers of the Ip address type to the server group.</li>
         *                        </ul>
         * @return {@code this}
         */
        public Builder serverGroupType(com.aliyun.ros.cdk.core.IResolvable serverGroupType) {
            this.serverGroupType = serverGroupType;
            return this;
        }

        /**
         * Sets the value of {@link ServerGroupProps#getServers}
         * @param servers Property servers: List of servers.
         * @return {@code this}
         */
        public Builder servers(com.aliyun.ros.cdk.core.IResolvable servers) {
            this.servers = servers;
            return this;
        }

        /**
         * Sets the value of {@link ServerGroupProps#getServers}
         * @param servers Property servers: List of servers.
         * @return {@code this}
         */
        public Builder servers(java.util.List<? extends java.lang.Object> servers) {
            this.servers = servers;
            return this;
        }

        /**
         * Sets the value of {@link ServerGroupProps#getTags}
         * @param tags Property tags: Tags of server group.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.gwlb.RosServerGroup.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.gwlb.RosServerGroup.TagsProperty>)tags;
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
        private final java.lang.Object vpcId;
        private final java.lang.Object connectionDrainConfig;
        private final java.lang.Object healthCheckConfig;
        private final java.lang.Object protocol;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object scheduler;
        private final java.lang.Object serverGroupName;
        private final java.lang.Object serverGroupType;
        private final java.lang.Object servers;
        private final java.util.List<com.aliyun.ros.cdk.gwlb.RosServerGroup.TagsProperty> tags;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.connectionDrainConfig = software.amazon.jsii.Kernel.get(this, "connectionDrainConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.healthCheckConfig = software.amazon.jsii.Kernel.get(this, "healthCheckConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.protocol = software.amazon.jsii.Kernel.get(this, "protocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.scheduler = software.amazon.jsii.Kernel.get(this, "scheduler", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.serverGroupName = software.amazon.jsii.Kernel.get(this, "serverGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.serverGroupType = software.amazon.jsii.Kernel.get(this, "serverGroupType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.servers = software.amazon.jsii.Kernel.get(this, "servers", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.gwlb.RosServerGroup.TagsProperty.class)));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.vpcId = java.util.Objects.requireNonNull(builder.vpcId, "vpcId is required");
            this.connectionDrainConfig = builder.connectionDrainConfig;
            this.healthCheckConfig = builder.healthCheckConfig;
            this.protocol = builder.protocol;
            this.resourceGroupId = builder.resourceGroupId;
            this.scheduler = builder.scheduler;
            this.serverGroupName = builder.serverGroupName;
            this.serverGroupType = builder.serverGroupType;
            this.servers = builder.servers;
            this.tags = (java.util.List<com.aliyun.ros.cdk.gwlb.RosServerGroup.TagsProperty>)builder.tags;
        }

        @Override
        public final java.lang.Object getVpcId() {
            return this.vpcId;
        }

        @Override
        public final java.lang.Object getConnectionDrainConfig() {
            return this.connectionDrainConfig;
        }

        @Override
        public final java.lang.Object getHealthCheckConfig() {
            return this.healthCheckConfig;
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
        public final java.lang.Object getServerGroupName() {
            return this.serverGroupName;
        }

        @Override
        public final java.lang.Object getServerGroupType() {
            return this.serverGroupType;
        }

        @Override
        public final java.lang.Object getServers() {
            return this.servers;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.gwlb.RosServerGroup.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("vpcId", om.valueToTree(this.getVpcId()));
            if (this.getConnectionDrainConfig() != null) {
                data.set("connectionDrainConfig", om.valueToTree(this.getConnectionDrainConfig()));
            }
            if (this.getHealthCheckConfig() != null) {
                data.set("healthCheckConfig", om.valueToTree(this.getHealthCheckConfig()));
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
            if (this.getServerGroupName() != null) {
                data.set("serverGroupName", om.valueToTree(this.getServerGroupName()));
            }
            if (this.getServerGroupType() != null) {
                data.set("serverGroupType", om.valueToTree(this.getServerGroupType()));
            }
            if (this.getServers() != null) {
                data.set("servers", om.valueToTree(this.getServers()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-gwlb.ServerGroupProps"));
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

            if (!vpcId.equals(that.vpcId)) return false;
            if (this.connectionDrainConfig != null ? !this.connectionDrainConfig.equals(that.connectionDrainConfig) : that.connectionDrainConfig != null) return false;
            if (this.healthCheckConfig != null ? !this.healthCheckConfig.equals(that.healthCheckConfig) : that.healthCheckConfig != null) return false;
            if (this.protocol != null ? !this.protocol.equals(that.protocol) : that.protocol != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.scheduler != null ? !this.scheduler.equals(that.scheduler) : that.scheduler != null) return false;
            if (this.serverGroupName != null ? !this.serverGroupName.equals(that.serverGroupName) : that.serverGroupName != null) return false;
            if (this.serverGroupType != null ? !this.serverGroupType.equals(that.serverGroupType) : that.serverGroupType != null) return false;
            if (this.servers != null ? !this.servers.equals(that.servers) : that.servers != null) return false;
            return this.tags != null ? this.tags.equals(that.tags) : that.tags == null;
        }

        @Override
        public final int hashCode() {
            int result = this.vpcId.hashCode();
            result = 31 * result + (this.connectionDrainConfig != null ? this.connectionDrainConfig.hashCode() : 0);
            result = 31 * result + (this.healthCheckConfig != null ? this.healthCheckConfig.hashCode() : 0);
            result = 31 * result + (this.protocol != null ? this.protocol.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.scheduler != null ? this.scheduler.hashCode() : 0);
            result = 31 * result + (this.serverGroupName != null ? this.serverGroupName.hashCode() : 0);
            result = 31 * result + (this.serverGroupType != null ? this.serverGroupType.hashCode() : 0);
            result = 31 * result + (this.servers != null ? this.servers.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            return result;
        }
    }
}
