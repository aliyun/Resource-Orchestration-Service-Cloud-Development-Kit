package com.aliyun.ros.cdk.slb;

/**
 * Properties for defining a <code>ALIYUN::SLB::Listener</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-11-07T09:08:37.284Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.slb.$Module.class, fqn = "@alicloud/ros-cdk-slb.RosListenerProps")
@software.amazon.jsii.Jsii.Proxy(RosListenerProps.Jsii$Proxy.class)
public interface RosListenerProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getBandwidth();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getListenerPort();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getLoadBalancerId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getProtocol();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAclId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAclIds() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAclStatus() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAclType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBackendServerPort() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCaCertificateId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnableHttp2() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getGzip() {
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
    default @org.jetbrains.annotations.Nullable java.lang.Object getIdleTimeout() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMasterSlaveServerGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPersistence() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPortRange() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRequestTimeout() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getScheduler() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getServerCertificateId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getStartListener() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTlsCipherPolicy() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVServerGroupId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosListenerProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosListenerProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosListenerProps> {
        java.lang.Object bandwidth;
        java.lang.Object listenerPort;
        java.lang.Object loadBalancerId;
        java.lang.Object protocol;
        java.lang.Object aclId;
        java.lang.Object aclIds;
        java.lang.Object aclStatus;
        java.lang.Object aclType;
        java.lang.Object backendServerPort;
        java.lang.Object caCertificateId;
        java.lang.Object description;
        java.lang.Object enableHttp2;
        java.lang.Object gzip;
        java.lang.Object healthCheck;
        java.lang.Object httpConfig;
        java.lang.Object idleTimeout;
        java.lang.Object masterSlaveServerGroupId;
        java.lang.Object persistence;
        java.lang.Object portRange;
        java.lang.Object requestTimeout;
        java.lang.Object scheduler;
        java.lang.Object serverCertificateId;
        java.lang.Object startListener;
        java.lang.Object tlsCipherPolicy;
        java.lang.Object vServerGroupId;

        /**
         * Sets the value of {@link RosListenerProps#getBandwidth}
         * @param bandwidth the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder bandwidth(java.lang.Number bandwidth) {
            this.bandwidth = bandwidth;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getBandwidth}
         * @param bandwidth the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder bandwidth(com.aliyun.ros.cdk.core.IResolvable bandwidth) {
            this.bandwidth = bandwidth;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getListenerPort}
         * @param listenerPort the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder listenerPort(java.lang.Number listenerPort) {
            this.listenerPort = listenerPort;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getListenerPort}
         * @param listenerPort the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder listenerPort(com.aliyun.ros.cdk.core.IResolvable listenerPort) {
            this.listenerPort = listenerPort;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getLoadBalancerId}
         * @param loadBalancerId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder loadBalancerId(java.lang.String loadBalancerId) {
            this.loadBalancerId = loadBalancerId;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getLoadBalancerId}
         * @param loadBalancerId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder loadBalancerId(com.aliyun.ros.cdk.core.IResolvable loadBalancerId) {
            this.loadBalancerId = loadBalancerId;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getProtocol}
         * @param protocol the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder protocol(java.lang.String protocol) {
            this.protocol = protocol;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getProtocol}
         * @param protocol the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder protocol(com.aliyun.ros.cdk.core.IResolvable protocol) {
            this.protocol = protocol;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getAclId}
         * @param aclId the value to be set.
         * @return {@code this}
         */
        public Builder aclId(java.lang.String aclId) {
            this.aclId = aclId;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getAclId}
         * @param aclId the value to be set.
         * @return {@code this}
         */
        public Builder aclId(com.aliyun.ros.cdk.core.IResolvable aclId) {
            this.aclId = aclId;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getAclIds}
         * @param aclIds the value to be set.
         * @return {@code this}
         */
        public Builder aclIds(com.aliyun.ros.cdk.core.IResolvable aclIds) {
            this.aclIds = aclIds;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getAclIds}
         * @param aclIds the value to be set.
         * @return {@code this}
         */
        public Builder aclIds(java.util.List<? extends java.lang.Object> aclIds) {
            this.aclIds = aclIds;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getAclStatus}
         * @param aclStatus the value to be set.
         * @return {@code this}
         */
        public Builder aclStatus(java.lang.String aclStatus) {
            this.aclStatus = aclStatus;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getAclStatus}
         * @param aclStatus the value to be set.
         * @return {@code this}
         */
        public Builder aclStatus(com.aliyun.ros.cdk.core.IResolvable aclStatus) {
            this.aclStatus = aclStatus;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getAclType}
         * @param aclType the value to be set.
         * @return {@code this}
         */
        public Builder aclType(java.lang.String aclType) {
            this.aclType = aclType;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getAclType}
         * @param aclType the value to be set.
         * @return {@code this}
         */
        public Builder aclType(com.aliyun.ros.cdk.core.IResolvable aclType) {
            this.aclType = aclType;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getBackendServerPort}
         * @param backendServerPort the value to be set.
         * @return {@code this}
         */
        public Builder backendServerPort(java.lang.Number backendServerPort) {
            this.backendServerPort = backendServerPort;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getBackendServerPort}
         * @param backendServerPort the value to be set.
         * @return {@code this}
         */
        public Builder backendServerPort(com.aliyun.ros.cdk.core.IResolvable backendServerPort) {
            this.backendServerPort = backendServerPort;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getCaCertificateId}
         * @param caCertificateId the value to be set.
         * @return {@code this}
         */
        public Builder caCertificateId(java.lang.String caCertificateId) {
            this.caCertificateId = caCertificateId;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getCaCertificateId}
         * @param caCertificateId the value to be set.
         * @return {@code this}
         */
        public Builder caCertificateId(com.aliyun.ros.cdk.core.IResolvable caCertificateId) {
            this.caCertificateId = caCertificateId;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getEnableHttp2}
         * @param enableHttp2 the value to be set.
         * @return {@code this}
         */
        public Builder enableHttp2(java.lang.String enableHttp2) {
            this.enableHttp2 = enableHttp2;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getEnableHttp2}
         * @param enableHttp2 the value to be set.
         * @return {@code this}
         */
        public Builder enableHttp2(com.aliyun.ros.cdk.core.IResolvable enableHttp2) {
            this.enableHttp2 = enableHttp2;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getGzip}
         * @param gzip the value to be set.
         * @return {@code this}
         */
        public Builder gzip(java.lang.String gzip) {
            this.gzip = gzip;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getGzip}
         * @param gzip the value to be set.
         * @return {@code this}
         */
        public Builder gzip(com.aliyun.ros.cdk.core.IResolvable gzip) {
            this.gzip = gzip;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getHealthCheck}
         * @param healthCheck the value to be set.
         * @return {@code this}
         */
        public Builder healthCheck(com.aliyun.ros.cdk.core.IResolvable healthCheck) {
            this.healthCheck = healthCheck;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getHealthCheck}
         * @param healthCheck the value to be set.
         * @return {@code this}
         */
        public Builder healthCheck(com.aliyun.ros.cdk.slb.RosListener.HealthCheckProperty healthCheck) {
            this.healthCheck = healthCheck;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getHttpConfig}
         * @param httpConfig the value to be set.
         * @return {@code this}
         */
        public Builder httpConfig(com.aliyun.ros.cdk.core.IResolvable httpConfig) {
            this.httpConfig = httpConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getHttpConfig}
         * @param httpConfig the value to be set.
         * @return {@code this}
         */
        public Builder httpConfig(com.aliyun.ros.cdk.slb.RosListener.HttpConfigProperty httpConfig) {
            this.httpConfig = httpConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getIdleTimeout}
         * @param idleTimeout the value to be set.
         * @return {@code this}
         */
        public Builder idleTimeout(java.lang.Number idleTimeout) {
            this.idleTimeout = idleTimeout;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getIdleTimeout}
         * @param idleTimeout the value to be set.
         * @return {@code this}
         */
        public Builder idleTimeout(com.aliyun.ros.cdk.core.IResolvable idleTimeout) {
            this.idleTimeout = idleTimeout;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getMasterSlaveServerGroupId}
         * @param masterSlaveServerGroupId the value to be set.
         * @return {@code this}
         */
        public Builder masterSlaveServerGroupId(java.lang.String masterSlaveServerGroupId) {
            this.masterSlaveServerGroupId = masterSlaveServerGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getMasterSlaveServerGroupId}
         * @param masterSlaveServerGroupId the value to be set.
         * @return {@code this}
         */
        public Builder masterSlaveServerGroupId(com.aliyun.ros.cdk.core.IResolvable masterSlaveServerGroupId) {
            this.masterSlaveServerGroupId = masterSlaveServerGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getPersistence}
         * @param persistence the value to be set.
         * @return {@code this}
         */
        public Builder persistence(com.aliyun.ros.cdk.core.IResolvable persistence) {
            this.persistence = persistence;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getPersistence}
         * @param persistence the value to be set.
         * @return {@code this}
         */
        public Builder persistence(com.aliyun.ros.cdk.slb.RosListener.PersistenceProperty persistence) {
            this.persistence = persistence;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getPortRange}
         * @param portRange the value to be set.
         * @return {@code this}
         */
        public Builder portRange(com.aliyun.ros.cdk.core.IResolvable portRange) {
            this.portRange = portRange;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getPortRange}
         * @param portRange the value to be set.
         * @return {@code this}
         */
        public Builder portRange(java.util.List<? extends java.lang.Object> portRange) {
            this.portRange = portRange;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getRequestTimeout}
         * @param requestTimeout the value to be set.
         * @return {@code this}
         */
        public Builder requestTimeout(java.lang.Number requestTimeout) {
            this.requestTimeout = requestTimeout;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getRequestTimeout}
         * @param requestTimeout the value to be set.
         * @return {@code this}
         */
        public Builder requestTimeout(com.aliyun.ros.cdk.core.IResolvable requestTimeout) {
            this.requestTimeout = requestTimeout;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getScheduler}
         * @param scheduler the value to be set.
         * @return {@code this}
         */
        public Builder scheduler(java.lang.String scheduler) {
            this.scheduler = scheduler;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getScheduler}
         * @param scheduler the value to be set.
         * @return {@code this}
         */
        public Builder scheduler(com.aliyun.ros.cdk.core.IResolvable scheduler) {
            this.scheduler = scheduler;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getServerCertificateId}
         * @param serverCertificateId the value to be set.
         * @return {@code this}
         */
        public Builder serverCertificateId(java.lang.String serverCertificateId) {
            this.serverCertificateId = serverCertificateId;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getServerCertificateId}
         * @param serverCertificateId the value to be set.
         * @return {@code this}
         */
        public Builder serverCertificateId(com.aliyun.ros.cdk.core.IResolvable serverCertificateId) {
            this.serverCertificateId = serverCertificateId;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getStartListener}
         * @param startListener the value to be set.
         * @return {@code this}
         */
        public Builder startListener(java.lang.Boolean startListener) {
            this.startListener = startListener;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getStartListener}
         * @param startListener the value to be set.
         * @return {@code this}
         */
        public Builder startListener(com.aliyun.ros.cdk.core.IResolvable startListener) {
            this.startListener = startListener;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getTlsCipherPolicy}
         * @param tlsCipherPolicy the value to be set.
         * @return {@code this}
         */
        public Builder tlsCipherPolicy(java.lang.String tlsCipherPolicy) {
            this.tlsCipherPolicy = tlsCipherPolicy;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getTlsCipherPolicy}
         * @param tlsCipherPolicy the value to be set.
         * @return {@code this}
         */
        public Builder tlsCipherPolicy(com.aliyun.ros.cdk.core.IResolvable tlsCipherPolicy) {
            this.tlsCipherPolicy = tlsCipherPolicy;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getVServerGroupId}
         * @param vServerGroupId the value to be set.
         * @return {@code this}
         */
        public Builder vServerGroupId(java.lang.String vServerGroupId) {
            this.vServerGroupId = vServerGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getVServerGroupId}
         * @param vServerGroupId the value to be set.
         * @return {@code this}
         */
        public Builder vServerGroupId(com.aliyun.ros.cdk.core.IResolvable vServerGroupId) {
            this.vServerGroupId = vServerGroupId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosListenerProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosListenerProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosListenerProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosListenerProps {
        private final java.lang.Object bandwidth;
        private final java.lang.Object listenerPort;
        private final java.lang.Object loadBalancerId;
        private final java.lang.Object protocol;
        private final java.lang.Object aclId;
        private final java.lang.Object aclIds;
        private final java.lang.Object aclStatus;
        private final java.lang.Object aclType;
        private final java.lang.Object backendServerPort;
        private final java.lang.Object caCertificateId;
        private final java.lang.Object description;
        private final java.lang.Object enableHttp2;
        private final java.lang.Object gzip;
        private final java.lang.Object healthCheck;
        private final java.lang.Object httpConfig;
        private final java.lang.Object idleTimeout;
        private final java.lang.Object masterSlaveServerGroupId;
        private final java.lang.Object persistence;
        private final java.lang.Object portRange;
        private final java.lang.Object requestTimeout;
        private final java.lang.Object scheduler;
        private final java.lang.Object serverCertificateId;
        private final java.lang.Object startListener;
        private final java.lang.Object tlsCipherPolicy;
        private final java.lang.Object vServerGroupId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.bandwidth = software.amazon.jsii.Kernel.get(this, "bandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.listenerPort = software.amazon.jsii.Kernel.get(this, "listenerPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.loadBalancerId = software.amazon.jsii.Kernel.get(this, "loadBalancerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.protocol = software.amazon.jsii.Kernel.get(this, "protocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.aclId = software.amazon.jsii.Kernel.get(this, "aclId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.aclIds = software.amazon.jsii.Kernel.get(this, "aclIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.aclStatus = software.amazon.jsii.Kernel.get(this, "aclStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.aclType = software.amazon.jsii.Kernel.get(this, "aclType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.backendServerPort = software.amazon.jsii.Kernel.get(this, "backendServerPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.caCertificateId = software.amazon.jsii.Kernel.get(this, "caCertificateId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enableHttp2 = software.amazon.jsii.Kernel.get(this, "enableHttp2", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.gzip = software.amazon.jsii.Kernel.get(this, "gzip", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.healthCheck = software.amazon.jsii.Kernel.get(this, "healthCheck", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.httpConfig = software.amazon.jsii.Kernel.get(this, "httpConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.idleTimeout = software.amazon.jsii.Kernel.get(this, "idleTimeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.masterSlaveServerGroupId = software.amazon.jsii.Kernel.get(this, "masterSlaveServerGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.persistence = software.amazon.jsii.Kernel.get(this, "persistence", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.portRange = software.amazon.jsii.Kernel.get(this, "portRange", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.requestTimeout = software.amazon.jsii.Kernel.get(this, "requestTimeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.scheduler = software.amazon.jsii.Kernel.get(this, "scheduler", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.serverCertificateId = software.amazon.jsii.Kernel.get(this, "serverCertificateId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.startListener = software.amazon.jsii.Kernel.get(this, "startListener", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tlsCipherPolicy = software.amazon.jsii.Kernel.get(this, "tlsCipherPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vServerGroupId = software.amazon.jsii.Kernel.get(this, "vServerGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.bandwidth = java.util.Objects.requireNonNull(builder.bandwidth, "bandwidth is required");
            this.listenerPort = java.util.Objects.requireNonNull(builder.listenerPort, "listenerPort is required");
            this.loadBalancerId = java.util.Objects.requireNonNull(builder.loadBalancerId, "loadBalancerId is required");
            this.protocol = java.util.Objects.requireNonNull(builder.protocol, "protocol is required");
            this.aclId = builder.aclId;
            this.aclIds = builder.aclIds;
            this.aclStatus = builder.aclStatus;
            this.aclType = builder.aclType;
            this.backendServerPort = builder.backendServerPort;
            this.caCertificateId = builder.caCertificateId;
            this.description = builder.description;
            this.enableHttp2 = builder.enableHttp2;
            this.gzip = builder.gzip;
            this.healthCheck = builder.healthCheck;
            this.httpConfig = builder.httpConfig;
            this.idleTimeout = builder.idleTimeout;
            this.masterSlaveServerGroupId = builder.masterSlaveServerGroupId;
            this.persistence = builder.persistence;
            this.portRange = builder.portRange;
            this.requestTimeout = builder.requestTimeout;
            this.scheduler = builder.scheduler;
            this.serverCertificateId = builder.serverCertificateId;
            this.startListener = builder.startListener;
            this.tlsCipherPolicy = builder.tlsCipherPolicy;
            this.vServerGroupId = builder.vServerGroupId;
        }

        @Override
        public final java.lang.Object getBandwidth() {
            return this.bandwidth;
        }

        @Override
        public final java.lang.Object getListenerPort() {
            return this.listenerPort;
        }

        @Override
        public final java.lang.Object getLoadBalancerId() {
            return this.loadBalancerId;
        }

        @Override
        public final java.lang.Object getProtocol() {
            return this.protocol;
        }

        @Override
        public final java.lang.Object getAclId() {
            return this.aclId;
        }

        @Override
        public final java.lang.Object getAclIds() {
            return this.aclIds;
        }

        @Override
        public final java.lang.Object getAclStatus() {
            return this.aclStatus;
        }

        @Override
        public final java.lang.Object getAclType() {
            return this.aclType;
        }

        @Override
        public final java.lang.Object getBackendServerPort() {
            return this.backendServerPort;
        }

        @Override
        public final java.lang.Object getCaCertificateId() {
            return this.caCertificateId;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getEnableHttp2() {
            return this.enableHttp2;
        }

        @Override
        public final java.lang.Object getGzip() {
            return this.gzip;
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
        public final java.lang.Object getIdleTimeout() {
            return this.idleTimeout;
        }

        @Override
        public final java.lang.Object getMasterSlaveServerGroupId() {
            return this.masterSlaveServerGroupId;
        }

        @Override
        public final java.lang.Object getPersistence() {
            return this.persistence;
        }

        @Override
        public final java.lang.Object getPortRange() {
            return this.portRange;
        }

        @Override
        public final java.lang.Object getRequestTimeout() {
            return this.requestTimeout;
        }

        @Override
        public final java.lang.Object getScheduler() {
            return this.scheduler;
        }

        @Override
        public final java.lang.Object getServerCertificateId() {
            return this.serverCertificateId;
        }

        @Override
        public final java.lang.Object getStartListener() {
            return this.startListener;
        }

        @Override
        public final java.lang.Object getTlsCipherPolicy() {
            return this.tlsCipherPolicy;
        }

        @Override
        public final java.lang.Object getVServerGroupId() {
            return this.vServerGroupId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("bandwidth", om.valueToTree(this.getBandwidth()));
            data.set("listenerPort", om.valueToTree(this.getListenerPort()));
            data.set("loadBalancerId", om.valueToTree(this.getLoadBalancerId()));
            data.set("protocol", om.valueToTree(this.getProtocol()));
            if (this.getAclId() != null) {
                data.set("aclId", om.valueToTree(this.getAclId()));
            }
            if (this.getAclIds() != null) {
                data.set("aclIds", om.valueToTree(this.getAclIds()));
            }
            if (this.getAclStatus() != null) {
                data.set("aclStatus", om.valueToTree(this.getAclStatus()));
            }
            if (this.getAclType() != null) {
                data.set("aclType", om.valueToTree(this.getAclType()));
            }
            if (this.getBackendServerPort() != null) {
                data.set("backendServerPort", om.valueToTree(this.getBackendServerPort()));
            }
            if (this.getCaCertificateId() != null) {
                data.set("caCertificateId", om.valueToTree(this.getCaCertificateId()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getEnableHttp2() != null) {
                data.set("enableHttp2", om.valueToTree(this.getEnableHttp2()));
            }
            if (this.getGzip() != null) {
                data.set("gzip", om.valueToTree(this.getGzip()));
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
            if (this.getPortRange() != null) {
                data.set("portRange", om.valueToTree(this.getPortRange()));
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
            if (this.getStartListener() != null) {
                data.set("startListener", om.valueToTree(this.getStartListener()));
            }
            if (this.getTlsCipherPolicy() != null) {
                data.set("tlsCipherPolicy", om.valueToTree(this.getTlsCipherPolicy()));
            }
            if (this.getVServerGroupId() != null) {
                data.set("vServerGroupId", om.valueToTree(this.getVServerGroupId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-slb.RosListenerProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosListenerProps.Jsii$Proxy that = (RosListenerProps.Jsii$Proxy) o;

            if (!bandwidth.equals(that.bandwidth)) return false;
            if (!listenerPort.equals(that.listenerPort)) return false;
            if (!loadBalancerId.equals(that.loadBalancerId)) return false;
            if (!protocol.equals(that.protocol)) return false;
            if (this.aclId != null ? !this.aclId.equals(that.aclId) : that.aclId != null) return false;
            if (this.aclIds != null ? !this.aclIds.equals(that.aclIds) : that.aclIds != null) return false;
            if (this.aclStatus != null ? !this.aclStatus.equals(that.aclStatus) : that.aclStatus != null) return false;
            if (this.aclType != null ? !this.aclType.equals(that.aclType) : that.aclType != null) return false;
            if (this.backendServerPort != null ? !this.backendServerPort.equals(that.backendServerPort) : that.backendServerPort != null) return false;
            if (this.caCertificateId != null ? !this.caCertificateId.equals(that.caCertificateId) : that.caCertificateId != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.enableHttp2 != null ? !this.enableHttp2.equals(that.enableHttp2) : that.enableHttp2 != null) return false;
            if (this.gzip != null ? !this.gzip.equals(that.gzip) : that.gzip != null) return false;
            if (this.healthCheck != null ? !this.healthCheck.equals(that.healthCheck) : that.healthCheck != null) return false;
            if (this.httpConfig != null ? !this.httpConfig.equals(that.httpConfig) : that.httpConfig != null) return false;
            if (this.idleTimeout != null ? !this.idleTimeout.equals(that.idleTimeout) : that.idleTimeout != null) return false;
            if (this.masterSlaveServerGroupId != null ? !this.masterSlaveServerGroupId.equals(that.masterSlaveServerGroupId) : that.masterSlaveServerGroupId != null) return false;
            if (this.persistence != null ? !this.persistence.equals(that.persistence) : that.persistence != null) return false;
            if (this.portRange != null ? !this.portRange.equals(that.portRange) : that.portRange != null) return false;
            if (this.requestTimeout != null ? !this.requestTimeout.equals(that.requestTimeout) : that.requestTimeout != null) return false;
            if (this.scheduler != null ? !this.scheduler.equals(that.scheduler) : that.scheduler != null) return false;
            if (this.serverCertificateId != null ? !this.serverCertificateId.equals(that.serverCertificateId) : that.serverCertificateId != null) return false;
            if (this.startListener != null ? !this.startListener.equals(that.startListener) : that.startListener != null) return false;
            if (this.tlsCipherPolicy != null ? !this.tlsCipherPolicy.equals(that.tlsCipherPolicy) : that.tlsCipherPolicy != null) return false;
            return this.vServerGroupId != null ? this.vServerGroupId.equals(that.vServerGroupId) : that.vServerGroupId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.bandwidth.hashCode();
            result = 31 * result + (this.listenerPort.hashCode());
            result = 31 * result + (this.loadBalancerId.hashCode());
            result = 31 * result + (this.protocol.hashCode());
            result = 31 * result + (this.aclId != null ? this.aclId.hashCode() : 0);
            result = 31 * result + (this.aclIds != null ? this.aclIds.hashCode() : 0);
            result = 31 * result + (this.aclStatus != null ? this.aclStatus.hashCode() : 0);
            result = 31 * result + (this.aclType != null ? this.aclType.hashCode() : 0);
            result = 31 * result + (this.backendServerPort != null ? this.backendServerPort.hashCode() : 0);
            result = 31 * result + (this.caCertificateId != null ? this.caCertificateId.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.enableHttp2 != null ? this.enableHttp2.hashCode() : 0);
            result = 31 * result + (this.gzip != null ? this.gzip.hashCode() : 0);
            result = 31 * result + (this.healthCheck != null ? this.healthCheck.hashCode() : 0);
            result = 31 * result + (this.httpConfig != null ? this.httpConfig.hashCode() : 0);
            result = 31 * result + (this.idleTimeout != null ? this.idleTimeout.hashCode() : 0);
            result = 31 * result + (this.masterSlaveServerGroupId != null ? this.masterSlaveServerGroupId.hashCode() : 0);
            result = 31 * result + (this.persistence != null ? this.persistence.hashCode() : 0);
            result = 31 * result + (this.portRange != null ? this.portRange.hashCode() : 0);
            result = 31 * result + (this.requestTimeout != null ? this.requestTimeout.hashCode() : 0);
            result = 31 * result + (this.scheduler != null ? this.scheduler.hashCode() : 0);
            result = 31 * result + (this.serverCertificateId != null ? this.serverCertificateId.hashCode() : 0);
            result = 31 * result + (this.startListener != null ? this.startListener.hashCode() : 0);
            result = 31 * result + (this.tlsCipherPolicy != null ? this.tlsCipherPolicy.hashCode() : 0);
            result = 31 * result + (this.vServerGroupId != null ? this.vServerGroupId.hashCode() : 0);
            return result;
        }
    }
}
