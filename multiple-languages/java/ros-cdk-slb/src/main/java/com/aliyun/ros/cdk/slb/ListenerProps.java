package com.aliyun.ros.cdk.slb;

/**
 * Properties for defining a `ALIYUN::SLB::Listener`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:34.559Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.slb.$Module.class, fqn = "@alicloud/ros-cdk-slb.ListenerProps")
@software.amazon.jsii.Jsii.Proxy(ListenerProps.Jsii$Proxy.class)
public interface ListenerProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Number getBackendServerPort();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Number getBandwidth();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Number getListenerPort();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getLoadBalancerId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getProtocol();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getAclId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getAclStatus() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getAclType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getCaCertificateId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheck() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHttpConfig() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getIdleTimeout() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getMasterSlaveServerGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPersistence() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getRequestTimeout() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getScheduler() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getServerCertificateId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getVServerGroupId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ListenerProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ListenerProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ListenerProps> {
        private java.lang.Number backendServerPort;
        private java.lang.Number bandwidth;
        private java.lang.Number listenerPort;
        private java.lang.String loadBalancerId;
        private java.lang.String protocol;
        private java.lang.String aclId;
        private java.lang.String aclStatus;
        private java.lang.String aclType;
        private java.lang.String caCertificateId;
        private java.lang.Object healthCheck;
        private java.lang.Object httpConfig;
        private java.lang.Number idleTimeout;
        private java.lang.String masterSlaveServerGroupId;
        private java.lang.Object persistence;
        private java.lang.Number requestTimeout;
        private java.lang.String scheduler;
        private java.lang.String serverCertificateId;
        private java.lang.String vServerGroupId;

        /**
         * Sets the value of {@link ListenerProps#getBackendServerPort}
         * @param backendServerPort the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder backendServerPort(java.lang.Number backendServerPort) {
            this.backendServerPort = backendServerPort;
            return this;
        }

        /**
         * Sets the value of {@link ListenerProps#getBandwidth}
         * @param bandwidth the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder bandwidth(java.lang.Number bandwidth) {
            this.bandwidth = bandwidth;
            return this;
        }

        /**
         * Sets the value of {@link ListenerProps#getListenerPort}
         * @param listenerPort the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder listenerPort(java.lang.Number listenerPort) {
            this.listenerPort = listenerPort;
            return this;
        }

        /**
         * Sets the value of {@link ListenerProps#getLoadBalancerId}
         * @param loadBalancerId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder loadBalancerId(java.lang.String loadBalancerId) {
            this.loadBalancerId = loadBalancerId;
            return this;
        }

        /**
         * Sets the value of {@link ListenerProps#getProtocol}
         * @param protocol the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder protocol(java.lang.String protocol) {
            this.protocol = protocol;
            return this;
        }

        /**
         * Sets the value of {@link ListenerProps#getAclId}
         * @param aclId the value to be set.
         * @return {@code this}
         */
        public Builder aclId(java.lang.String aclId) {
            this.aclId = aclId;
            return this;
        }

        /**
         * Sets the value of {@link ListenerProps#getAclStatus}
         * @param aclStatus the value to be set.
         * @return {@code this}
         */
        public Builder aclStatus(java.lang.String aclStatus) {
            this.aclStatus = aclStatus;
            return this;
        }

        /**
         * Sets the value of {@link ListenerProps#getAclType}
         * @param aclType the value to be set.
         * @return {@code this}
         */
        public Builder aclType(java.lang.String aclType) {
            this.aclType = aclType;
            return this;
        }

        /**
         * Sets the value of {@link ListenerProps#getCaCertificateId}
         * @param caCertificateId the value to be set.
         * @return {@code this}
         */
        public Builder caCertificateId(java.lang.String caCertificateId) {
            this.caCertificateId = caCertificateId;
            return this;
        }

        /**
         * Sets the value of {@link ListenerProps#getHealthCheck}
         * @param healthCheck the value to be set.
         * @return {@code this}
         */
        public Builder healthCheck(com.aliyun.ros.cdk.core.IResolvable healthCheck) {
            this.healthCheck = healthCheck;
            return this;
        }

        /**
         * Sets the value of {@link ListenerProps#getHealthCheck}
         * @param healthCheck the value to be set.
         * @return {@code this}
         */
        public Builder healthCheck(com.aliyun.ros.cdk.slb.RosListener.HealthCheckProperty healthCheck) {
            this.healthCheck = healthCheck;
            return this;
        }

        /**
         * Sets the value of {@link ListenerProps#getHttpConfig}
         * @param httpConfig the value to be set.
         * @return {@code this}
         */
        public Builder httpConfig(com.aliyun.ros.cdk.core.IResolvable httpConfig) {
            this.httpConfig = httpConfig;
            return this;
        }

        /**
         * Sets the value of {@link ListenerProps#getHttpConfig}
         * @param httpConfig the value to be set.
         * @return {@code this}
         */
        public Builder httpConfig(com.aliyun.ros.cdk.slb.RosListener.HttpConfigProperty httpConfig) {
            this.httpConfig = httpConfig;
            return this;
        }

        /**
         * Sets the value of {@link ListenerProps#getIdleTimeout}
         * @param idleTimeout the value to be set.
         * @return {@code this}
         */
        public Builder idleTimeout(java.lang.Number idleTimeout) {
            this.idleTimeout = idleTimeout;
            return this;
        }

        /**
         * Sets the value of {@link ListenerProps#getMasterSlaveServerGroupId}
         * @param masterSlaveServerGroupId the value to be set.
         * @return {@code this}
         */
        public Builder masterSlaveServerGroupId(java.lang.String masterSlaveServerGroupId) {
            this.masterSlaveServerGroupId = masterSlaveServerGroupId;
            return this;
        }

        /**
         * Sets the value of {@link ListenerProps#getPersistence}
         * @param persistence the value to be set.
         * @return {@code this}
         */
        public Builder persistence(com.aliyun.ros.cdk.core.IResolvable persistence) {
            this.persistence = persistence;
            return this;
        }

        /**
         * Sets the value of {@link ListenerProps#getPersistence}
         * @param persistence the value to be set.
         * @return {@code this}
         */
        public Builder persistence(com.aliyun.ros.cdk.slb.RosListener.PersistenceProperty persistence) {
            this.persistence = persistence;
            return this;
        }

        /**
         * Sets the value of {@link ListenerProps#getRequestTimeout}
         * @param requestTimeout the value to be set.
         * @return {@code this}
         */
        public Builder requestTimeout(java.lang.Number requestTimeout) {
            this.requestTimeout = requestTimeout;
            return this;
        }

        /**
         * Sets the value of {@link ListenerProps#getScheduler}
         * @param scheduler the value to be set.
         * @return {@code this}
         */
        public Builder scheduler(java.lang.String scheduler) {
            this.scheduler = scheduler;
            return this;
        }

        /**
         * Sets the value of {@link ListenerProps#getServerCertificateId}
         * @param serverCertificateId the value to be set.
         * @return {@code this}
         */
        public Builder serverCertificateId(java.lang.String serverCertificateId) {
            this.serverCertificateId = serverCertificateId;
            return this;
        }

        /**
         * Sets the value of {@link ListenerProps#getVServerGroupId}
         * @param vServerGroupId the value to be set.
         * @return {@code this}
         */
        public Builder vServerGroupId(java.lang.String vServerGroupId) {
            this.vServerGroupId = vServerGroupId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ListenerProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ListenerProps build() {
            return new Jsii$Proxy(backendServerPort, bandwidth, listenerPort, loadBalancerId, protocol, aclId, aclStatus, aclType, caCertificateId, healthCheck, httpConfig, idleTimeout, masterSlaveServerGroupId, persistence, requestTimeout, scheduler, serverCertificateId, vServerGroupId);
        }
    }

    /**
     * An implementation for {@link ListenerProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ListenerProps {
        private final java.lang.Number backendServerPort;
        private final java.lang.Number bandwidth;
        private final java.lang.Number listenerPort;
        private final java.lang.String loadBalancerId;
        private final java.lang.String protocol;
        private final java.lang.String aclId;
        private final java.lang.String aclStatus;
        private final java.lang.String aclType;
        private final java.lang.String caCertificateId;
        private final java.lang.Object healthCheck;
        private final java.lang.Object httpConfig;
        private final java.lang.Number idleTimeout;
        private final java.lang.String masterSlaveServerGroupId;
        private final java.lang.Object persistence;
        private final java.lang.Number requestTimeout;
        private final java.lang.String scheduler;
        private final java.lang.String serverCertificateId;
        private final java.lang.String vServerGroupId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.backendServerPort = software.amazon.jsii.Kernel.get(this, "backendServerPort", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.bandwidth = software.amazon.jsii.Kernel.get(this, "bandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.listenerPort = software.amazon.jsii.Kernel.get(this, "listenerPort", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.loadBalancerId = software.amazon.jsii.Kernel.get(this, "loadBalancerId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.protocol = software.amazon.jsii.Kernel.get(this, "protocol", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.aclId = software.amazon.jsii.Kernel.get(this, "aclId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.aclStatus = software.amazon.jsii.Kernel.get(this, "aclStatus", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.aclType = software.amazon.jsii.Kernel.get(this, "aclType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.caCertificateId = software.amazon.jsii.Kernel.get(this, "caCertificateId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.healthCheck = software.amazon.jsii.Kernel.get(this, "healthCheck", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.httpConfig = software.amazon.jsii.Kernel.get(this, "httpConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.idleTimeout = software.amazon.jsii.Kernel.get(this, "idleTimeout", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.masterSlaveServerGroupId = software.amazon.jsii.Kernel.get(this, "masterSlaveServerGroupId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.persistence = software.amazon.jsii.Kernel.get(this, "persistence", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.requestTimeout = software.amazon.jsii.Kernel.get(this, "requestTimeout", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.scheduler = software.amazon.jsii.Kernel.get(this, "scheduler", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.serverCertificateId = software.amazon.jsii.Kernel.get(this, "serverCertificateId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.vServerGroupId = software.amazon.jsii.Kernel.get(this, "vServerGroupId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.Number backendServerPort, final java.lang.Number bandwidth, final java.lang.Number listenerPort, final java.lang.String loadBalancerId, final java.lang.String protocol, final java.lang.String aclId, final java.lang.String aclStatus, final java.lang.String aclType, final java.lang.String caCertificateId, final java.lang.Object healthCheck, final java.lang.Object httpConfig, final java.lang.Number idleTimeout, final java.lang.String masterSlaveServerGroupId, final java.lang.Object persistence, final java.lang.Number requestTimeout, final java.lang.String scheduler, final java.lang.String serverCertificateId, final java.lang.String vServerGroupId) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.backendServerPort = java.util.Objects.requireNonNull(backendServerPort, "backendServerPort is required");
            this.bandwidth = java.util.Objects.requireNonNull(bandwidth, "bandwidth is required");
            this.listenerPort = java.util.Objects.requireNonNull(listenerPort, "listenerPort is required");
            this.loadBalancerId = java.util.Objects.requireNonNull(loadBalancerId, "loadBalancerId is required");
            this.protocol = java.util.Objects.requireNonNull(protocol, "protocol is required");
            this.aclId = aclId;
            this.aclStatus = aclStatus;
            this.aclType = aclType;
            this.caCertificateId = caCertificateId;
            this.healthCheck = healthCheck;
            this.httpConfig = httpConfig;
            this.idleTimeout = idleTimeout;
            this.masterSlaveServerGroupId = masterSlaveServerGroupId;
            this.persistence = persistence;
            this.requestTimeout = requestTimeout;
            this.scheduler = scheduler;
            this.serverCertificateId = serverCertificateId;
            this.vServerGroupId = vServerGroupId;
        }

        @Override
        public final java.lang.Number getBackendServerPort() {
            return this.backendServerPort;
        }

        @Override
        public final java.lang.Number getBandwidth() {
            return this.bandwidth;
        }

        @Override
        public final java.lang.Number getListenerPort() {
            return this.listenerPort;
        }

        @Override
        public final java.lang.String getLoadBalancerId() {
            return this.loadBalancerId;
        }

        @Override
        public final java.lang.String getProtocol() {
            return this.protocol;
        }

        @Override
        public final java.lang.String getAclId() {
            return this.aclId;
        }

        @Override
        public final java.lang.String getAclStatus() {
            return this.aclStatus;
        }

        @Override
        public final java.lang.String getAclType() {
            return this.aclType;
        }

        @Override
        public final java.lang.String getCaCertificateId() {
            return this.caCertificateId;
        }

        @Override
        public final java.lang.Object getHealthCheck() {
            return this.healthCheck;
        }

        @Override
        public final java.lang.Object getHttpConfig() {
            return this.httpConfig;
        }

        @Override
        public final java.lang.Number getIdleTimeout() {
            return this.idleTimeout;
        }

        @Override
        public final java.lang.String getMasterSlaveServerGroupId() {
            return this.masterSlaveServerGroupId;
        }

        @Override
        public final java.lang.Object getPersistence() {
            return this.persistence;
        }

        @Override
        public final java.lang.Number getRequestTimeout() {
            return this.requestTimeout;
        }

        @Override
        public final java.lang.String getScheduler() {
            return this.scheduler;
        }

        @Override
        public final java.lang.String getServerCertificateId() {
            return this.serverCertificateId;
        }

        @Override
        public final java.lang.String getVServerGroupId() {
            return this.vServerGroupId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("backendServerPort", om.valueToTree(this.getBackendServerPort()));
            data.set("bandwidth", om.valueToTree(this.getBandwidth()));
            data.set("listenerPort", om.valueToTree(this.getListenerPort()));
            data.set("loadBalancerId", om.valueToTree(this.getLoadBalancerId()));
            data.set("protocol", om.valueToTree(this.getProtocol()));
            if (this.getAclId() != null) {
                data.set("aclId", om.valueToTree(this.getAclId()));
            }
            if (this.getAclStatus() != null) {
                data.set("aclStatus", om.valueToTree(this.getAclStatus()));
            }
            if (this.getAclType() != null) {
                data.set("aclType", om.valueToTree(this.getAclType()));
            }
            if (this.getCaCertificateId() != null) {
                data.set("caCertificateId", om.valueToTree(this.getCaCertificateId()));
            }
            if (this.getHealthCheck() != null) {
                data.set("healthCheck", om.valueToTree(this.getHealthCheck()));
            }
            if (this.getHttpConfig() != null) {
                data.set("httpConfig", om.valueToTree(this.getHttpConfig()));
            }
            if (this.getIdleTimeout() != null) {
                data.set("idleTimeout", om.valueToTree(this.getIdleTimeout()));
            }
            if (this.getMasterSlaveServerGroupId() != null) {
                data.set("masterSlaveServerGroupId", om.valueToTree(this.getMasterSlaveServerGroupId()));
            }
            if (this.getPersistence() != null) {
                data.set("persistence", om.valueToTree(this.getPersistence()));
            }
            if (this.getRequestTimeout() != null) {
                data.set("requestTimeout", om.valueToTree(this.getRequestTimeout()));
            }
            if (this.getScheduler() != null) {
                data.set("scheduler", om.valueToTree(this.getScheduler()));
            }
            if (this.getServerCertificateId() != null) {
                data.set("serverCertificateId", om.valueToTree(this.getServerCertificateId()));
            }
            if (this.getVServerGroupId() != null) {
                data.set("vServerGroupId", om.valueToTree(this.getVServerGroupId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-slb.ListenerProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ListenerProps.Jsii$Proxy that = (ListenerProps.Jsii$Proxy) o;

            if (!backendServerPort.equals(that.backendServerPort)) return false;
            if (!bandwidth.equals(that.bandwidth)) return false;
            if (!listenerPort.equals(that.listenerPort)) return false;
            if (!loadBalancerId.equals(that.loadBalancerId)) return false;
            if (!protocol.equals(that.protocol)) return false;
            if (this.aclId != null ? !this.aclId.equals(that.aclId) : that.aclId != null) return false;
            if (this.aclStatus != null ? !this.aclStatus.equals(that.aclStatus) : that.aclStatus != null) return false;
            if (this.aclType != null ? !this.aclType.equals(that.aclType) : that.aclType != null) return false;
            if (this.caCertificateId != null ? !this.caCertificateId.equals(that.caCertificateId) : that.caCertificateId != null) return false;
            if (this.healthCheck != null ? !this.healthCheck.equals(that.healthCheck) : that.healthCheck != null) return false;
            if (this.httpConfig != null ? !this.httpConfig.equals(that.httpConfig) : that.httpConfig != null) return false;
            if (this.idleTimeout != null ? !this.idleTimeout.equals(that.idleTimeout) : that.idleTimeout != null) return false;
            if (this.masterSlaveServerGroupId != null ? !this.masterSlaveServerGroupId.equals(that.masterSlaveServerGroupId) : that.masterSlaveServerGroupId != null) return false;
            if (this.persistence != null ? !this.persistence.equals(that.persistence) : that.persistence != null) return false;
            if (this.requestTimeout != null ? !this.requestTimeout.equals(that.requestTimeout) : that.requestTimeout != null) return false;
            if (this.scheduler != null ? !this.scheduler.equals(that.scheduler) : that.scheduler != null) return false;
            if (this.serverCertificateId != null ? !this.serverCertificateId.equals(that.serverCertificateId) : that.serverCertificateId != null) return false;
            return this.vServerGroupId != null ? this.vServerGroupId.equals(that.vServerGroupId) : that.vServerGroupId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.backendServerPort.hashCode();
            result = 31 * result + (this.bandwidth.hashCode());
            result = 31 * result + (this.listenerPort.hashCode());
            result = 31 * result + (this.loadBalancerId.hashCode());
            result = 31 * result + (this.protocol.hashCode());
            result = 31 * result + (this.aclId != null ? this.aclId.hashCode() : 0);
            result = 31 * result + (this.aclStatus != null ? this.aclStatus.hashCode() : 0);
            result = 31 * result + (this.aclType != null ? this.aclType.hashCode() : 0);
            result = 31 * result + (this.caCertificateId != null ? this.caCertificateId.hashCode() : 0);
            result = 31 * result + (this.healthCheck != null ? this.healthCheck.hashCode() : 0);
            result = 31 * result + (this.httpConfig != null ? this.httpConfig.hashCode() : 0);
            result = 31 * result + (this.idleTimeout != null ? this.idleTimeout.hashCode() : 0);
            result = 31 * result + (this.masterSlaveServerGroupId != null ? this.masterSlaveServerGroupId.hashCode() : 0);
            result = 31 * result + (this.persistence != null ? this.persistence.hashCode() : 0);
            result = 31 * result + (this.requestTimeout != null ? this.requestTimeout.hashCode() : 0);
            result = 31 * result + (this.scheduler != null ? this.scheduler.hashCode() : 0);
            result = 31 * result + (this.serverCertificateId != null ? this.serverCertificateId.hashCode() : 0);
            result = 31 * result + (this.vServerGroupId != null ? this.vServerGroupId.hashCode() : 0);
            return result;
        }
    }
}
