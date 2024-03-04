package com.aliyun.ros.cdk.nlb;

/**
 * Properties for defining a <code>ServerGroup</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlb-servergroup
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-03-01T09:16:53.278Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.nlb.$Module.class, fqn = "@alicloud/ros-cdk-nlb.ServerGroupProps")
@software.amazon.jsii.Jsii.Proxy(ServerGroupProps.Jsii$Proxy.class)
public interface ServerGroupProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property serverGroupName: Name of ServerGroup.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getServerGroupName();

    /**
     * Property vpcId: ID of VPC.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVpcId();

    /**
     * Property addressIpVersion: IP version of address.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAddressIpVersion() {
        return null;
    }

    /**
     * Property anyPortEnabled: Specifies whether to enable all-port forwarding.
     * <p>
     * Valid values:
     * true
     * false (default)
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAnyPortEnabled() {
        return null;
    }

    /**
     * Property connectionDrainEnabled: Whether to enable graceful connection interruption.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getConnectionDrainEnabled() {
        return null;
    }

    /**
     * Property connectionDrainTimeout: Time of graceful connection interruption.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getConnectionDrainTimeout() {
        return null;
    }

    /**
     * Property healthCheckConfig: Health Check Config.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckConfig() {
        return null;
    }

    /**
     * Property persistenceEnabled: Whether to enable session persistence.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPersistenceEnabled() {
        return null;
    }

    /**
     * Property persistenceTimeout: Time of session persistence.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPersistenceTimeout() {
        return null;
    }

    /**
     * Property preserveClientIpEnabled: Whether to enable the client address retention function.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPreserveClientIpEnabled() {
        return null;
    }

    /**
     * Property protocol: Protocol of ServerGroup.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getProtocol() {
        return null;
    }

    /**
     * Property resourceGroupId: undefined.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * Property scheduler: undefined.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getScheduler() {
        return null;
    }

    /**
     * Property serverGroupType: Type of ServerGroup.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getServerGroupType() {
        return null;
    }

    /**
     * Property servers: undefined.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getServers() {
        return null;
    }

    /**
     * Property tags: Tags to attach to instance.
     * <p>
     * Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.nlb.RosServerGroup.TagsProperty> getTags() {
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
        java.lang.Object serverGroupName;
        java.lang.Object vpcId;
        java.lang.Object addressIpVersion;
        java.lang.Object anyPortEnabled;
        java.lang.Object connectionDrainEnabled;
        java.lang.Object connectionDrainTimeout;
        java.lang.Object healthCheckConfig;
        java.lang.Object persistenceEnabled;
        java.lang.Object persistenceTimeout;
        java.lang.Object preserveClientIpEnabled;
        java.lang.Object protocol;
        java.lang.Object resourceGroupId;
        java.lang.Object scheduler;
        java.lang.Object serverGroupType;
        java.lang.Object servers;
        java.util.List<com.aliyun.ros.cdk.nlb.RosServerGroup.TagsProperty> tags;

        /**
         * Sets the value of {@link ServerGroupProps#getServerGroupName}
         * @param serverGroupName Property serverGroupName: Name of ServerGroup. This parameter is required.
         * @return {@code this}
         */
        public Builder serverGroupName(java.lang.String serverGroupName) {
            this.serverGroupName = serverGroupName;
            return this;
        }

        /**
         * Sets the value of {@link ServerGroupProps#getServerGroupName}
         * @param serverGroupName Property serverGroupName: Name of ServerGroup. This parameter is required.
         * @return {@code this}
         */
        public Builder serverGroupName(com.aliyun.ros.cdk.core.IResolvable serverGroupName) {
            this.serverGroupName = serverGroupName;
            return this;
        }

        /**
         * Sets the value of {@link ServerGroupProps#getVpcId}
         * @param vpcId Property vpcId: ID of VPC. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link ServerGroupProps#getVpcId}
         * @param vpcId Property vpcId: ID of VPC. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link ServerGroupProps#getAddressIpVersion}
         * @param addressIpVersion Property addressIpVersion: IP version of address.
         * @return {@code this}
         */
        public Builder addressIpVersion(java.lang.String addressIpVersion) {
            this.addressIpVersion = addressIpVersion;
            return this;
        }

        /**
         * Sets the value of {@link ServerGroupProps#getAddressIpVersion}
         * @param addressIpVersion Property addressIpVersion: IP version of address.
         * @return {@code this}
         */
        public Builder addressIpVersion(com.aliyun.ros.cdk.core.IResolvable addressIpVersion) {
            this.addressIpVersion = addressIpVersion;
            return this;
        }

        /**
         * Sets the value of {@link ServerGroupProps#getAnyPortEnabled}
         * @param anyPortEnabled Property anyPortEnabled: Specifies whether to enable all-port forwarding.
         *                       Valid values:
         *                       true
         *                       false (default)
         * @return {@code this}
         */
        public Builder anyPortEnabled(java.lang.Boolean anyPortEnabled) {
            this.anyPortEnabled = anyPortEnabled;
            return this;
        }

        /**
         * Sets the value of {@link ServerGroupProps#getAnyPortEnabled}
         * @param anyPortEnabled Property anyPortEnabled: Specifies whether to enable all-port forwarding.
         *                       Valid values:
         *                       true
         *                       false (default)
         * @return {@code this}
         */
        public Builder anyPortEnabled(com.aliyun.ros.cdk.core.IResolvable anyPortEnabled) {
            this.anyPortEnabled = anyPortEnabled;
            return this;
        }

        /**
         * Sets the value of {@link ServerGroupProps#getConnectionDrainEnabled}
         * @param connectionDrainEnabled Property connectionDrainEnabled: Whether to enable graceful connection interruption.
         * @return {@code this}
         */
        public Builder connectionDrainEnabled(java.lang.Boolean connectionDrainEnabled) {
            this.connectionDrainEnabled = connectionDrainEnabled;
            return this;
        }

        /**
         * Sets the value of {@link ServerGroupProps#getConnectionDrainEnabled}
         * @param connectionDrainEnabled Property connectionDrainEnabled: Whether to enable graceful connection interruption.
         * @return {@code this}
         */
        public Builder connectionDrainEnabled(com.aliyun.ros.cdk.core.IResolvable connectionDrainEnabled) {
            this.connectionDrainEnabled = connectionDrainEnabled;
            return this;
        }

        /**
         * Sets the value of {@link ServerGroupProps#getConnectionDrainTimeout}
         * @param connectionDrainTimeout Property connectionDrainTimeout: Time of graceful connection interruption.
         * @return {@code this}
         */
        public Builder connectionDrainTimeout(java.lang.Number connectionDrainTimeout) {
            this.connectionDrainTimeout = connectionDrainTimeout;
            return this;
        }

        /**
         * Sets the value of {@link ServerGroupProps#getConnectionDrainTimeout}
         * @param connectionDrainTimeout Property connectionDrainTimeout: Time of graceful connection interruption.
         * @return {@code this}
         */
        public Builder connectionDrainTimeout(com.aliyun.ros.cdk.core.IResolvable connectionDrainTimeout) {
            this.connectionDrainTimeout = connectionDrainTimeout;
            return this;
        }

        /**
         * Sets the value of {@link ServerGroupProps#getHealthCheckConfig}
         * @param healthCheckConfig Property healthCheckConfig: Health Check Config.
         * @return {@code this}
         */
        public Builder healthCheckConfig(com.aliyun.ros.cdk.core.IResolvable healthCheckConfig) {
            this.healthCheckConfig = healthCheckConfig;
            return this;
        }

        /**
         * Sets the value of {@link ServerGroupProps#getHealthCheckConfig}
         * @param healthCheckConfig Property healthCheckConfig: Health Check Config.
         * @return {@code this}
         */
        public Builder healthCheckConfig(com.aliyun.ros.cdk.nlb.RosServerGroup.HealthCheckConfigProperty healthCheckConfig) {
            this.healthCheckConfig = healthCheckConfig;
            return this;
        }

        /**
         * Sets the value of {@link ServerGroupProps#getPersistenceEnabled}
         * @param persistenceEnabled Property persistenceEnabled: Whether to enable session persistence.
         * @return {@code this}
         */
        public Builder persistenceEnabled(java.lang.Boolean persistenceEnabled) {
            this.persistenceEnabled = persistenceEnabled;
            return this;
        }

        /**
         * Sets the value of {@link ServerGroupProps#getPersistenceEnabled}
         * @param persistenceEnabled Property persistenceEnabled: Whether to enable session persistence.
         * @return {@code this}
         */
        public Builder persistenceEnabled(com.aliyun.ros.cdk.core.IResolvable persistenceEnabled) {
            this.persistenceEnabled = persistenceEnabled;
            return this;
        }

        /**
         * Sets the value of {@link ServerGroupProps#getPersistenceTimeout}
         * @param persistenceTimeout Property persistenceTimeout: Time of session persistence.
         * @return {@code this}
         */
        public Builder persistenceTimeout(java.lang.Number persistenceTimeout) {
            this.persistenceTimeout = persistenceTimeout;
            return this;
        }

        /**
         * Sets the value of {@link ServerGroupProps#getPersistenceTimeout}
         * @param persistenceTimeout Property persistenceTimeout: Time of session persistence.
         * @return {@code this}
         */
        public Builder persistenceTimeout(com.aliyun.ros.cdk.core.IResolvable persistenceTimeout) {
            this.persistenceTimeout = persistenceTimeout;
            return this;
        }

        /**
         * Sets the value of {@link ServerGroupProps#getPreserveClientIpEnabled}
         * @param preserveClientIpEnabled Property preserveClientIpEnabled: Whether to enable the client address retention function.
         * @return {@code this}
         */
        public Builder preserveClientIpEnabled(java.lang.Boolean preserveClientIpEnabled) {
            this.preserveClientIpEnabled = preserveClientIpEnabled;
            return this;
        }

        /**
         * Sets the value of {@link ServerGroupProps#getPreserveClientIpEnabled}
         * @param preserveClientIpEnabled Property preserveClientIpEnabled: Whether to enable the client address retention function.
         * @return {@code this}
         */
        public Builder preserveClientIpEnabled(com.aliyun.ros.cdk.core.IResolvable preserveClientIpEnabled) {
            this.preserveClientIpEnabled = preserveClientIpEnabled;
            return this;
        }

        /**
         * Sets the value of {@link ServerGroupProps#getProtocol}
         * @param protocol Property protocol: Protocol of ServerGroup.
         * @return {@code this}
         */
        public Builder protocol(java.lang.String protocol) {
            this.protocol = protocol;
            return this;
        }

        /**
         * Sets the value of {@link ServerGroupProps#getProtocol}
         * @param protocol Property protocol: Protocol of ServerGroup.
         * @return {@code this}
         */
        public Builder protocol(com.aliyun.ros.cdk.core.IResolvable protocol) {
            this.protocol = protocol;
            return this;
        }

        /**
         * Sets the value of {@link ServerGroupProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: undefined.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link ServerGroupProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: undefined.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link ServerGroupProps#getScheduler}
         * @param scheduler Property scheduler: undefined.
         * @return {@code this}
         */
        public Builder scheduler(java.lang.String scheduler) {
            this.scheduler = scheduler;
            return this;
        }

        /**
         * Sets the value of {@link ServerGroupProps#getScheduler}
         * @param scheduler Property scheduler: undefined.
         * @return {@code this}
         */
        public Builder scheduler(com.aliyun.ros.cdk.core.IResolvable scheduler) {
            this.scheduler = scheduler;
            return this;
        }

        /**
         * Sets the value of {@link ServerGroupProps#getServerGroupType}
         * @param serverGroupType Property serverGroupType: Type of ServerGroup.
         * @return {@code this}
         */
        public Builder serverGroupType(java.lang.String serverGroupType) {
            this.serverGroupType = serverGroupType;
            return this;
        }

        /**
         * Sets the value of {@link ServerGroupProps#getServerGroupType}
         * @param serverGroupType Property serverGroupType: Type of ServerGroup.
         * @return {@code this}
         */
        public Builder serverGroupType(com.aliyun.ros.cdk.core.IResolvable serverGroupType) {
            this.serverGroupType = serverGroupType;
            return this;
        }

        /**
         * Sets the value of {@link ServerGroupProps#getServers}
         * @param servers Property servers: undefined.
         * @return {@code this}
         */
        public Builder servers(com.aliyun.ros.cdk.core.IResolvable servers) {
            this.servers = servers;
            return this;
        }

        /**
         * Sets the value of {@link ServerGroupProps#getServers}
         * @param servers Property servers: undefined.
         * @return {@code this}
         */
        public Builder servers(java.util.List<? extends java.lang.Object> servers) {
            this.servers = servers;
            return this;
        }

        /**
         * Sets the value of {@link ServerGroupProps#getTags}
         * @param tags Property tags: Tags to attach to instance.
         *             Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.nlb.RosServerGroup.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.nlb.RosServerGroup.TagsProperty>)tags;
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
        private final java.lang.Object serverGroupName;
        private final java.lang.Object vpcId;
        private final java.lang.Object addressIpVersion;
        private final java.lang.Object anyPortEnabled;
        private final java.lang.Object connectionDrainEnabled;
        private final java.lang.Object connectionDrainTimeout;
        private final java.lang.Object healthCheckConfig;
        private final java.lang.Object persistenceEnabled;
        private final java.lang.Object persistenceTimeout;
        private final java.lang.Object preserveClientIpEnabled;
        private final java.lang.Object protocol;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object scheduler;
        private final java.lang.Object serverGroupType;
        private final java.lang.Object servers;
        private final java.util.List<com.aliyun.ros.cdk.nlb.RosServerGroup.TagsProperty> tags;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.serverGroupName = software.amazon.jsii.Kernel.get(this, "serverGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.addressIpVersion = software.amazon.jsii.Kernel.get(this, "addressIpVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.anyPortEnabled = software.amazon.jsii.Kernel.get(this, "anyPortEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.connectionDrainEnabled = software.amazon.jsii.Kernel.get(this, "connectionDrainEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.connectionDrainTimeout = software.amazon.jsii.Kernel.get(this, "connectionDrainTimeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.healthCheckConfig = software.amazon.jsii.Kernel.get(this, "healthCheckConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.persistenceEnabled = software.amazon.jsii.Kernel.get(this, "persistenceEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.persistenceTimeout = software.amazon.jsii.Kernel.get(this, "persistenceTimeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.preserveClientIpEnabled = software.amazon.jsii.Kernel.get(this, "preserveClientIpEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.protocol = software.amazon.jsii.Kernel.get(this, "protocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.scheduler = software.amazon.jsii.Kernel.get(this, "scheduler", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.serverGroupType = software.amazon.jsii.Kernel.get(this, "serverGroupType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.servers = software.amazon.jsii.Kernel.get(this, "servers", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.nlb.RosServerGroup.TagsProperty.class)));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.serverGroupName = java.util.Objects.requireNonNull(builder.serverGroupName, "serverGroupName is required");
            this.vpcId = java.util.Objects.requireNonNull(builder.vpcId, "vpcId is required");
            this.addressIpVersion = builder.addressIpVersion;
            this.anyPortEnabled = builder.anyPortEnabled;
            this.connectionDrainEnabled = builder.connectionDrainEnabled;
            this.connectionDrainTimeout = builder.connectionDrainTimeout;
            this.healthCheckConfig = builder.healthCheckConfig;
            this.persistenceEnabled = builder.persistenceEnabled;
            this.persistenceTimeout = builder.persistenceTimeout;
            this.preserveClientIpEnabled = builder.preserveClientIpEnabled;
            this.protocol = builder.protocol;
            this.resourceGroupId = builder.resourceGroupId;
            this.scheduler = builder.scheduler;
            this.serverGroupType = builder.serverGroupType;
            this.servers = builder.servers;
            this.tags = (java.util.List<com.aliyun.ros.cdk.nlb.RosServerGroup.TagsProperty>)builder.tags;
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
        public final java.lang.Object getAddressIpVersion() {
            return this.addressIpVersion;
        }

        @Override
        public final java.lang.Object getAnyPortEnabled() {
            return this.anyPortEnabled;
        }

        @Override
        public final java.lang.Object getConnectionDrainEnabled() {
            return this.connectionDrainEnabled;
        }

        @Override
        public final java.lang.Object getConnectionDrainTimeout() {
            return this.connectionDrainTimeout;
        }

        @Override
        public final java.lang.Object getHealthCheckConfig() {
            return this.healthCheckConfig;
        }

        @Override
        public final java.lang.Object getPersistenceEnabled() {
            return this.persistenceEnabled;
        }

        @Override
        public final java.lang.Object getPersistenceTimeout() {
            return this.persistenceTimeout;
        }

        @Override
        public final java.lang.Object getPreserveClientIpEnabled() {
            return this.preserveClientIpEnabled;
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
        public final java.lang.Object getServers() {
            return this.servers;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.nlb.RosServerGroup.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("serverGroupName", om.valueToTree(this.getServerGroupName()));
            data.set("vpcId", om.valueToTree(this.getVpcId()));
            if (this.getAddressIpVersion() != null) {
                data.set("addressIpVersion", om.valueToTree(this.getAddressIpVersion()));
            }
            if (this.getAnyPortEnabled() != null) {
                data.set("anyPortEnabled", om.valueToTree(this.getAnyPortEnabled()));
            }
            if (this.getConnectionDrainEnabled() != null) {
                data.set("connectionDrainEnabled", om.valueToTree(this.getConnectionDrainEnabled()));
            }
            if (this.getConnectionDrainTimeout() != null) {
                data.set("connectionDrainTimeout", om.valueToTree(this.getConnectionDrainTimeout()));
            }
            if (this.getHealthCheckConfig() != null) {
                data.set("healthCheckConfig", om.valueToTree(this.getHealthCheckConfig()));
            }
            if (this.getPersistenceEnabled() != null) {
                data.set("persistenceEnabled", om.valueToTree(this.getPersistenceEnabled()));
            }
            if (this.getPersistenceTimeout() != null) {
                data.set("persistenceTimeout", om.valueToTree(this.getPersistenceTimeout()));
            }
            if (this.getPreserveClientIpEnabled() != null) {
                data.set("preserveClientIpEnabled", om.valueToTree(this.getPreserveClientIpEnabled()));
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
            if (this.getServers() != null) {
                data.set("servers", om.valueToTree(this.getServers()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-nlb.ServerGroupProps"));
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

            if (!serverGroupName.equals(that.serverGroupName)) return false;
            if (!vpcId.equals(that.vpcId)) return false;
            if (this.addressIpVersion != null ? !this.addressIpVersion.equals(that.addressIpVersion) : that.addressIpVersion != null) return false;
            if (this.anyPortEnabled != null ? !this.anyPortEnabled.equals(that.anyPortEnabled) : that.anyPortEnabled != null) return false;
            if (this.connectionDrainEnabled != null ? !this.connectionDrainEnabled.equals(that.connectionDrainEnabled) : that.connectionDrainEnabled != null) return false;
            if (this.connectionDrainTimeout != null ? !this.connectionDrainTimeout.equals(that.connectionDrainTimeout) : that.connectionDrainTimeout != null) return false;
            if (this.healthCheckConfig != null ? !this.healthCheckConfig.equals(that.healthCheckConfig) : that.healthCheckConfig != null) return false;
            if (this.persistenceEnabled != null ? !this.persistenceEnabled.equals(that.persistenceEnabled) : that.persistenceEnabled != null) return false;
            if (this.persistenceTimeout != null ? !this.persistenceTimeout.equals(that.persistenceTimeout) : that.persistenceTimeout != null) return false;
            if (this.preserveClientIpEnabled != null ? !this.preserveClientIpEnabled.equals(that.preserveClientIpEnabled) : that.preserveClientIpEnabled != null) return false;
            if (this.protocol != null ? !this.protocol.equals(that.protocol) : that.protocol != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.scheduler != null ? !this.scheduler.equals(that.scheduler) : that.scheduler != null) return false;
            if (this.serverGroupType != null ? !this.serverGroupType.equals(that.serverGroupType) : that.serverGroupType != null) return false;
            if (this.servers != null ? !this.servers.equals(that.servers) : that.servers != null) return false;
            return this.tags != null ? this.tags.equals(that.tags) : that.tags == null;
        }

        @Override
        public final int hashCode() {
            int result = this.serverGroupName.hashCode();
            result = 31 * result + (this.vpcId.hashCode());
            result = 31 * result + (this.addressIpVersion != null ? this.addressIpVersion.hashCode() : 0);
            result = 31 * result + (this.anyPortEnabled != null ? this.anyPortEnabled.hashCode() : 0);
            result = 31 * result + (this.connectionDrainEnabled != null ? this.connectionDrainEnabled.hashCode() : 0);
            result = 31 * result + (this.connectionDrainTimeout != null ? this.connectionDrainTimeout.hashCode() : 0);
            result = 31 * result + (this.healthCheckConfig != null ? this.healthCheckConfig.hashCode() : 0);
            result = 31 * result + (this.persistenceEnabled != null ? this.persistenceEnabled.hashCode() : 0);
            result = 31 * result + (this.persistenceTimeout != null ? this.persistenceTimeout.hashCode() : 0);
            result = 31 * result + (this.preserveClientIpEnabled != null ? this.preserveClientIpEnabled.hashCode() : 0);
            result = 31 * result + (this.protocol != null ? this.protocol.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.scheduler != null ? this.scheduler.hashCode() : 0);
            result = 31 * result + (this.serverGroupType != null ? this.serverGroupType.hashCode() : 0);
            result = 31 * result + (this.servers != null ? this.servers.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            return result;
        }
    }
}
