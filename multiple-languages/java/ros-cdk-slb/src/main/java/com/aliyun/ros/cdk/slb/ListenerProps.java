package com.aliyun.ros.cdk.slb;

/**
 * Properties for defining a <code>ALIYUN::SLB::Listener</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.88.0 (build eaabd08)", date = "2023-09-15T07:33:50.372Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.slb.$Module.class, fqn = "@alicloud/ros-cdk-slb.ListenerProps")
@software.amazon.jsii.Jsii.Proxy(ListenerProps.Jsii$Proxy.class)
public interface ListenerProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property bandwidth: The bandwidth of network, unit in Mbps(Million bits per second).
     * <p>
     * If the specified load balancer with "LOAD_BALANCE_ID" is charged by "paybybandwidth" and is created in classic network, each Listener's bandwidth must be greater than 0 and the sum of all of its Listeners' bandwidth can't be greater than the bandwidth of the load balancer.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getBandwidth();

    /**
     * Property listenerPort: Port for front listener.
     * <p>
     * Range from 0 to 65535.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getListenerPort();

    /**
     * Property loadBalancerId: The id of load balancer to create listener.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getLoadBalancerId();

    /**
     * Property protocol: The load balancer transport protocol to use for routing: http, https, tcp, or udp.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getProtocol();

    /**
     * Property aclId: The ID of the access control associated with the listener to be created.
     * <p>
     * If the value of the AclStatus parameter is on, this parameter is required.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAclId() {
        return null;
    }

    /**
     * Property aclIds: The ID list of the access controls associated with the listener to be created.
     * <p>
     * If the value of the AclStatus parameter is on, this parameter is required.AclIds have higher priority than AclId.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAclIds() {
        return null;
    }

    /**
     * Property aclStatus: Indicates whether to enable access control.
     * <p>
     * Valid values: on | off. Default value: off
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAclStatus() {
        return null;
    }

    /**
     * Property aclType: The access control type: * white: Indicates a whitelist.
     * <p>
     * Only requests from IP addresses or CIDR blocks in the selected access control lists are forwarded. This applies to scenarios in which an application only allows access from specific IP addresses.
     * Enabling a whitelist poses some risks to your services.
     * After a whitelist is enabled, only the IP addresses in the list can access the listener.
     * If you enable a whitelist without adding any IP addresses in the list, no requests are forwarded.
     * <p>
     * <ul>
     * <li>black: Indicates a blacklist. Requests from IP addresses or CIDR blocks in the selected access control lists are not forwarded (that is, they are blocked). This applies to scenarios in which an application only denies access from specific IP addresses.
     * If you enable a blacklist without adding any IP addresses in the list, all requests are forwarded.</li>
     * </ul>
     * <p>
     * If the value of the AclStatus parameter is on, this parameter is required.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAclType() {
        return null;
    }

    /**
     * Property backendServerPort: Backend server can listen on ports from 1 to 65535.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBackendServerPort() {
        return null;
    }

    /**
     * Property caCertificateId: CA server certificate id, for https listener only.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCaCertificateId() {
        return null;
    }

    /**
     * Property description: The description of the listener.It must be 1 to 80 characters in length and can contain letters, digits, hyphens (-), forward slashes (/), periods (.), and underscores (_). Chinese characters are supported.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property enableHttp2: Specifies whether to use HTTP/2.
     * <p>
     * It takes effect when Protocol=https. Valid values:
     * on: yes
     * off: no
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnableHttp2() {
        return null;
    }

    /**
     * Property gzip: Specifies whether to enable Gzip compression to compress specific types of files.
     * <p>
     * Valid values:
     * on (default): yes
     * off: no
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getGzip() {
        return null;
    }

    /**
     * Property healthCheck: The properties of health checking setting.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheck() {
        return null;
    }

    /**
     * Property httpConfig: Config for http protocol.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHttpConfig() {
        return null;
    }

    /**
     * Property idleTimeout: Specify the idle connection timeout in seconds.
     * <p>
     * Valid value: 1-60 If no request is received during the specified timeout period, Server Load Balancer will temporarily terminate the connection and restart the connection when the next request comes.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIdleTimeout() {
        return null;
    }

    /**
     * Property masterSlaveServerGroupId: The id of the MasterSlaveServerGroup which use in listener.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMasterSlaveServerGroupId() {
        return null;
    }

    /**
     * Property persistence: The properties of persistence.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPersistence() {
        return null;
    }

    /**
     * Property portRange: Port range, only supports TCP or UDP listener.
     * <p>
     * ListenerPort should be 0 when PortRange is specified.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPortRange() {
        return null;
    }

    /**
     * Property requestTimeout: Specify the request timeout in seconds.
     * <p>
     * Valid value: 1-180 If no response is received from the backend server during the specified timeout period, Server Load Balancer will stop waiting and send an HTTP 504 error to the client.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRequestTimeout() {
        return null;
    }

    /**
     * Property scheduler: The scheduling algorithm.
     * <p>
     * Valid values:
     * wrr: Backend servers that have higher weights receive more requests than those that have lower weights.
     * wlc: Requests are distributed based on the combination of the weights and connections to backend servers. If two backend servers have the same weight, the backend server that has fewer connections receives more requests.
     * rr: Requests are distributed to backend servers in sequence.
     * sch: specifies consistent hashing that is based on source IP addresses. Requests from the same source IP address are distributed to the same backend server.
     * tch: specifies consistent hashing that is based on four factors: source IP address, destination IP address, source port number, and destination port number. Requests that contain the same preceding information are distributed to the same backend server.
     * Default: wrr
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getScheduler() {
        return null;
    }

    /**
     * Property serverCertificateId: Server certificate id, for https listener only, this properties is required.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getServerCertificateId() {
        return null;
    }

    /**
     * Property startListener: Whether start listener after listener created.
     * <p>
     * Default True.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getStartListener() {
        return null;
    }

    /**
     * Property tlsCipherPolicy: The Transport Layer Security (TLS) security policy.
     * <p>
     * Each security policy contains TLS protocol versions and cipher suites available for HTTPS. It takes effect when Protocol=https.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTlsCipherPolicy() {
        return null;
    }

    /**
     * Property vServerGroupId: The id of the VServerGroup which use in listener.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVServerGroupId() {
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
         * Sets the value of {@link ListenerProps#getBandwidth}
         * @param bandwidth Property bandwidth: The bandwidth of network, unit in Mbps(Million bits per second). This parameter is required.
         *                  If the specified load balancer with "LOAD_BALANCE_ID" is charged by "paybybandwidth" and is created in classic network, each Listener's bandwidth must be greater than 0 and the sum of all of its Listeners' bandwidth can't be greater than the bandwidth of the load balancer.
         * @return {@code this}
         */
        public Builder bandwidth(java.lang.Number bandwidth) {
            this.bandwidth = bandwidth;
            return this;
        }

        /**
         * Sets the value of {@link ListenerProps#getBandwidth}
         * @param bandwidth Property bandwidth: The bandwidth of network, unit in Mbps(Million bits per second). This parameter is required.
         *                  If the specified load balancer with "LOAD_BALANCE_ID" is charged by "paybybandwidth" and is created in classic network, each Listener's bandwidth must be greater than 0 and the sum of all of its Listeners' bandwidth can't be greater than the bandwidth of the load balancer.
         * @return {@code this}
         */
        public Builder bandwidth(com.aliyun.ros.cdk.core.IResolvable bandwidth) {
            this.bandwidth = bandwidth;
            return this;
        }

        /**
         * Sets the value of {@link ListenerProps#getListenerPort}
         * @param listenerPort Property listenerPort: Port for front listener. This parameter is required.
         *                     Range from 0 to 65535.
         * @return {@code this}
         */
        public Builder listenerPort(java.lang.Number listenerPort) {
            this.listenerPort = listenerPort;
            return this;
        }

        /**
         * Sets the value of {@link ListenerProps#getListenerPort}
         * @param listenerPort Property listenerPort: Port for front listener. This parameter is required.
         *                     Range from 0 to 65535.
         * @return {@code this}
         */
        public Builder listenerPort(com.aliyun.ros.cdk.core.IResolvable listenerPort) {
            this.listenerPort = listenerPort;
            return this;
        }

        /**
         * Sets the value of {@link ListenerProps#getLoadBalancerId}
         * @param loadBalancerId Property loadBalancerId: The id of load balancer to create listener. This parameter is required.
         * @return {@code this}
         */
        public Builder loadBalancerId(java.lang.String loadBalancerId) {
            this.loadBalancerId = loadBalancerId;
            return this;
        }

        /**
         * Sets the value of {@link ListenerProps#getLoadBalancerId}
         * @param loadBalancerId Property loadBalancerId: The id of load balancer to create listener. This parameter is required.
         * @return {@code this}
         */
        public Builder loadBalancerId(com.aliyun.ros.cdk.core.IResolvable loadBalancerId) {
            this.loadBalancerId = loadBalancerId;
            return this;
        }

        /**
         * Sets the value of {@link ListenerProps#getProtocol}
         * @param protocol Property protocol: The load balancer transport protocol to use for routing: http, https, tcp, or udp. This parameter is required.
         * @return {@code this}
         */
        public Builder protocol(java.lang.String protocol) {
            this.protocol = protocol;
            return this;
        }

        /**
         * Sets the value of {@link ListenerProps#getProtocol}
         * @param protocol Property protocol: The load balancer transport protocol to use for routing: http, https, tcp, or udp. This parameter is required.
         * @return {@code this}
         */
        public Builder protocol(com.aliyun.ros.cdk.core.IResolvable protocol) {
            this.protocol = protocol;
            return this;
        }

        /**
         * Sets the value of {@link ListenerProps#getAclId}
         * @param aclId Property aclId: The ID of the access control associated with the listener to be created.
         *              If the value of the AclStatus parameter is on, this parameter is required.
         * @return {@code this}
         */
        public Builder aclId(java.lang.String aclId) {
            this.aclId = aclId;
            return this;
        }

        /**
         * Sets the value of {@link ListenerProps#getAclId}
         * @param aclId Property aclId: The ID of the access control associated with the listener to be created.
         *              If the value of the AclStatus parameter is on, this parameter is required.
         * @return {@code this}
         */
        public Builder aclId(com.aliyun.ros.cdk.core.IResolvable aclId) {
            this.aclId = aclId;
            return this;
        }

        /**
         * Sets the value of {@link ListenerProps#getAclIds}
         * @param aclIds Property aclIds: The ID list of the access controls associated with the listener to be created.
         *               If the value of the AclStatus parameter is on, this parameter is required.AclIds have higher priority than AclId.
         * @return {@code this}
         */
        public Builder aclIds(com.aliyun.ros.cdk.core.IResolvable aclIds) {
            this.aclIds = aclIds;
            return this;
        }

        /**
         * Sets the value of {@link ListenerProps#getAclIds}
         * @param aclIds Property aclIds: The ID list of the access controls associated with the listener to be created.
         *               If the value of the AclStatus parameter is on, this parameter is required.AclIds have higher priority than AclId.
         * @return {@code this}
         */
        public Builder aclIds(java.util.List<? extends java.lang.Object> aclIds) {
            this.aclIds = aclIds;
            return this;
        }

        /**
         * Sets the value of {@link ListenerProps#getAclStatus}
         * @param aclStatus Property aclStatus: Indicates whether to enable access control.
         *                  Valid values: on | off. Default value: off
         * @return {@code this}
         */
        public Builder aclStatus(java.lang.String aclStatus) {
            this.aclStatus = aclStatus;
            return this;
        }

        /**
         * Sets the value of {@link ListenerProps#getAclStatus}
         * @param aclStatus Property aclStatus: Indicates whether to enable access control.
         *                  Valid values: on | off. Default value: off
         * @return {@code this}
         */
        public Builder aclStatus(com.aliyun.ros.cdk.core.IResolvable aclStatus) {
            this.aclStatus = aclStatus;
            return this;
        }

        /**
         * Sets the value of {@link ListenerProps#getAclType}
         * @param aclType Property aclType: The access control type: * white: Indicates a whitelist.
         *                Only requests from IP addresses or CIDR blocks in the selected access control lists are forwarded. This applies to scenarios in which an application only allows access from specific IP addresses.
         *                Enabling a whitelist poses some risks to your services.
         *                After a whitelist is enabled, only the IP addresses in the list can access the listener.
         *                If you enable a whitelist without adding any IP addresses in the list, no requests are forwarded.
         *                <p>
         *                <ul>
         *                <li>black: Indicates a blacklist. Requests from IP addresses or CIDR blocks in the selected access control lists are not forwarded (that is, they are blocked). This applies to scenarios in which an application only denies access from specific IP addresses.
         *                If you enable a blacklist without adding any IP addresses in the list, all requests are forwarded.</li>
         *                </ul>
         *                <p>
         *                If the value of the AclStatus parameter is on, this parameter is required.
         * @return {@code this}
         */
        public Builder aclType(java.lang.String aclType) {
            this.aclType = aclType;
            return this;
        }

        /**
         * Sets the value of {@link ListenerProps#getAclType}
         * @param aclType Property aclType: The access control type: * white: Indicates a whitelist.
         *                Only requests from IP addresses or CIDR blocks in the selected access control lists are forwarded. This applies to scenarios in which an application only allows access from specific IP addresses.
         *                Enabling a whitelist poses some risks to your services.
         *                After a whitelist is enabled, only the IP addresses in the list can access the listener.
         *                If you enable a whitelist without adding any IP addresses in the list, no requests are forwarded.
         *                <p>
         *                <ul>
         *                <li>black: Indicates a blacklist. Requests from IP addresses or CIDR blocks in the selected access control lists are not forwarded (that is, they are blocked). This applies to scenarios in which an application only denies access from specific IP addresses.
         *                If you enable a blacklist without adding any IP addresses in the list, all requests are forwarded.</li>
         *                </ul>
         *                <p>
         *                If the value of the AclStatus parameter is on, this parameter is required.
         * @return {@code this}
         */
        public Builder aclType(com.aliyun.ros.cdk.core.IResolvable aclType) {
            this.aclType = aclType;
            return this;
        }

        /**
         * Sets the value of {@link ListenerProps#getBackendServerPort}
         * @param backendServerPort Property backendServerPort: Backend server can listen on ports from 1 to 65535.
         * @return {@code this}
         */
        public Builder backendServerPort(java.lang.Number backendServerPort) {
            this.backendServerPort = backendServerPort;
            return this;
        }

        /**
         * Sets the value of {@link ListenerProps#getBackendServerPort}
         * @param backendServerPort Property backendServerPort: Backend server can listen on ports from 1 to 65535.
         * @return {@code this}
         */
        public Builder backendServerPort(com.aliyun.ros.cdk.core.IResolvable backendServerPort) {
            this.backendServerPort = backendServerPort;
            return this;
        }

        /**
         * Sets the value of {@link ListenerProps#getCaCertificateId}
         * @param caCertificateId Property caCertificateId: CA server certificate id, for https listener only.
         * @return {@code this}
         */
        public Builder caCertificateId(java.lang.String caCertificateId) {
            this.caCertificateId = caCertificateId;
            return this;
        }

        /**
         * Sets the value of {@link ListenerProps#getCaCertificateId}
         * @param caCertificateId Property caCertificateId: CA server certificate id, for https listener only.
         * @return {@code this}
         */
        public Builder caCertificateId(com.aliyun.ros.cdk.core.IResolvable caCertificateId) {
            this.caCertificateId = caCertificateId;
            return this;
        }

        /**
         * Sets the value of {@link ListenerProps#getDescription}
         * @param description Property description: The description of the listener.It must be 1 to 80 characters in length and can contain letters, digits, hyphens (-), forward slashes (/), periods (.), and underscores (_). Chinese characters are supported.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link ListenerProps#getDescription}
         * @param description Property description: The description of the listener.It must be 1 to 80 characters in length and can contain letters, digits, hyphens (-), forward slashes (/), periods (.), and underscores (_). Chinese characters are supported.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link ListenerProps#getEnableHttp2}
         * @param enableHttp2 Property enableHttp2: Specifies whether to use HTTP/2.
         *                    It takes effect when Protocol=https. Valid values:
         *                    on: yes
         *                    off: no
         * @return {@code this}
         */
        public Builder enableHttp2(java.lang.String enableHttp2) {
            this.enableHttp2 = enableHttp2;
            return this;
        }

        /**
         * Sets the value of {@link ListenerProps#getEnableHttp2}
         * @param enableHttp2 Property enableHttp2: Specifies whether to use HTTP/2.
         *                    It takes effect when Protocol=https. Valid values:
         *                    on: yes
         *                    off: no
         * @return {@code this}
         */
        public Builder enableHttp2(com.aliyun.ros.cdk.core.IResolvable enableHttp2) {
            this.enableHttp2 = enableHttp2;
            return this;
        }

        /**
         * Sets the value of {@link ListenerProps#getGzip}
         * @param gzip Property gzip: Specifies whether to enable Gzip compression to compress specific types of files.
         *             Valid values:
         *             on (default): yes
         *             off: no
         * @return {@code this}
         */
        public Builder gzip(java.lang.String gzip) {
            this.gzip = gzip;
            return this;
        }

        /**
         * Sets the value of {@link ListenerProps#getGzip}
         * @param gzip Property gzip: Specifies whether to enable Gzip compression to compress specific types of files.
         *             Valid values:
         *             on (default): yes
         *             off: no
         * @return {@code this}
         */
        public Builder gzip(com.aliyun.ros.cdk.core.IResolvable gzip) {
            this.gzip = gzip;
            return this;
        }

        /**
         * Sets the value of {@link ListenerProps#getHealthCheck}
         * @param healthCheck Property healthCheck: The properties of health checking setting.
         * @return {@code this}
         */
        public Builder healthCheck(com.aliyun.ros.cdk.core.IResolvable healthCheck) {
            this.healthCheck = healthCheck;
            return this;
        }

        /**
         * Sets the value of {@link ListenerProps#getHealthCheck}
         * @param healthCheck Property healthCheck: The properties of health checking setting.
         * @return {@code this}
         */
        public Builder healthCheck(com.aliyun.ros.cdk.slb.RosListener.HealthCheckProperty healthCheck) {
            this.healthCheck = healthCheck;
            return this;
        }

        /**
         * Sets the value of {@link ListenerProps#getHttpConfig}
         * @param httpConfig Property httpConfig: Config for http protocol.
         * @return {@code this}
         */
        public Builder httpConfig(com.aliyun.ros.cdk.core.IResolvable httpConfig) {
            this.httpConfig = httpConfig;
            return this;
        }

        /**
         * Sets the value of {@link ListenerProps#getHttpConfig}
         * @param httpConfig Property httpConfig: Config for http protocol.
         * @return {@code this}
         */
        public Builder httpConfig(com.aliyun.ros.cdk.slb.RosListener.HttpConfigProperty httpConfig) {
            this.httpConfig = httpConfig;
            return this;
        }

        /**
         * Sets the value of {@link ListenerProps#getIdleTimeout}
         * @param idleTimeout Property idleTimeout: Specify the idle connection timeout in seconds.
         *                    Valid value: 1-60 If no request is received during the specified timeout period, Server Load Balancer will temporarily terminate the connection and restart the connection when the next request comes.
         * @return {@code this}
         */
        public Builder idleTimeout(java.lang.Number idleTimeout) {
            this.idleTimeout = idleTimeout;
            return this;
        }

        /**
         * Sets the value of {@link ListenerProps#getIdleTimeout}
         * @param idleTimeout Property idleTimeout: Specify the idle connection timeout in seconds.
         *                    Valid value: 1-60 If no request is received during the specified timeout period, Server Load Balancer will temporarily terminate the connection and restart the connection when the next request comes.
         * @return {@code this}
         */
        public Builder idleTimeout(com.aliyun.ros.cdk.core.IResolvable idleTimeout) {
            this.idleTimeout = idleTimeout;
            return this;
        }

        /**
         * Sets the value of {@link ListenerProps#getMasterSlaveServerGroupId}
         * @param masterSlaveServerGroupId Property masterSlaveServerGroupId: The id of the MasterSlaveServerGroup which use in listener.
         * @return {@code this}
         */
        public Builder masterSlaveServerGroupId(java.lang.String masterSlaveServerGroupId) {
            this.masterSlaveServerGroupId = masterSlaveServerGroupId;
            return this;
        }

        /**
         * Sets the value of {@link ListenerProps#getMasterSlaveServerGroupId}
         * @param masterSlaveServerGroupId Property masterSlaveServerGroupId: The id of the MasterSlaveServerGroup which use in listener.
         * @return {@code this}
         */
        public Builder masterSlaveServerGroupId(com.aliyun.ros.cdk.core.IResolvable masterSlaveServerGroupId) {
            this.masterSlaveServerGroupId = masterSlaveServerGroupId;
            return this;
        }

        /**
         * Sets the value of {@link ListenerProps#getPersistence}
         * @param persistence Property persistence: The properties of persistence.
         * @return {@code this}
         */
        public Builder persistence(com.aliyun.ros.cdk.core.IResolvable persistence) {
            this.persistence = persistence;
            return this;
        }

        /**
         * Sets the value of {@link ListenerProps#getPersistence}
         * @param persistence Property persistence: The properties of persistence.
         * @return {@code this}
         */
        public Builder persistence(com.aliyun.ros.cdk.slb.RosListener.PersistenceProperty persistence) {
            this.persistence = persistence;
            return this;
        }

        /**
         * Sets the value of {@link ListenerProps#getPortRange}
         * @param portRange Property portRange: Port range, only supports TCP or UDP listener.
         *                  ListenerPort should be 0 when PortRange is specified.
         * @return {@code this}
         */
        public Builder portRange(com.aliyun.ros.cdk.core.IResolvable portRange) {
            this.portRange = portRange;
            return this;
        }

        /**
         * Sets the value of {@link ListenerProps#getPortRange}
         * @param portRange Property portRange: Port range, only supports TCP or UDP listener.
         *                  ListenerPort should be 0 when PortRange is specified.
         * @return {@code this}
         */
        public Builder portRange(java.util.List<? extends java.lang.Object> portRange) {
            this.portRange = portRange;
            return this;
        }

        /**
         * Sets the value of {@link ListenerProps#getRequestTimeout}
         * @param requestTimeout Property requestTimeout: Specify the request timeout in seconds.
         *                       Valid value: 1-180 If no response is received from the backend server during the specified timeout period, Server Load Balancer will stop waiting and send an HTTP 504 error to the client.
         * @return {@code this}
         */
        public Builder requestTimeout(java.lang.Number requestTimeout) {
            this.requestTimeout = requestTimeout;
            return this;
        }

        /**
         * Sets the value of {@link ListenerProps#getRequestTimeout}
         * @param requestTimeout Property requestTimeout: Specify the request timeout in seconds.
         *                       Valid value: 1-180 If no response is received from the backend server during the specified timeout period, Server Load Balancer will stop waiting and send an HTTP 504 error to the client.
         * @return {@code this}
         */
        public Builder requestTimeout(com.aliyun.ros.cdk.core.IResolvable requestTimeout) {
            this.requestTimeout = requestTimeout;
            return this;
        }

        /**
         * Sets the value of {@link ListenerProps#getScheduler}
         * @param scheduler Property scheduler: The scheduling algorithm.
         *                  Valid values:
         *                  wrr: Backend servers that have higher weights receive more requests than those that have lower weights.
         *                  wlc: Requests are distributed based on the combination of the weights and connections to backend servers. If two backend servers have the same weight, the backend server that has fewer connections receives more requests.
         *                  rr: Requests are distributed to backend servers in sequence.
         *                  sch: specifies consistent hashing that is based on source IP addresses. Requests from the same source IP address are distributed to the same backend server.
         *                  tch: specifies consistent hashing that is based on four factors: source IP address, destination IP address, source port number, and destination port number. Requests that contain the same preceding information are distributed to the same backend server.
         *                  Default: wrr
         * @return {@code this}
         */
        public Builder scheduler(java.lang.String scheduler) {
            this.scheduler = scheduler;
            return this;
        }

        /**
         * Sets the value of {@link ListenerProps#getScheduler}
         * @param scheduler Property scheduler: The scheduling algorithm.
         *                  Valid values:
         *                  wrr: Backend servers that have higher weights receive more requests than those that have lower weights.
         *                  wlc: Requests are distributed based on the combination of the weights and connections to backend servers. If two backend servers have the same weight, the backend server that has fewer connections receives more requests.
         *                  rr: Requests are distributed to backend servers in sequence.
         *                  sch: specifies consistent hashing that is based on source IP addresses. Requests from the same source IP address are distributed to the same backend server.
         *                  tch: specifies consistent hashing that is based on four factors: source IP address, destination IP address, source port number, and destination port number. Requests that contain the same preceding information are distributed to the same backend server.
         *                  Default: wrr
         * @return {@code this}
         */
        public Builder scheduler(com.aliyun.ros.cdk.core.IResolvable scheduler) {
            this.scheduler = scheduler;
            return this;
        }

        /**
         * Sets the value of {@link ListenerProps#getServerCertificateId}
         * @param serverCertificateId Property serverCertificateId: Server certificate id, for https listener only, this properties is required.
         * @return {@code this}
         */
        public Builder serverCertificateId(java.lang.String serverCertificateId) {
            this.serverCertificateId = serverCertificateId;
            return this;
        }

        /**
         * Sets the value of {@link ListenerProps#getServerCertificateId}
         * @param serverCertificateId Property serverCertificateId: Server certificate id, for https listener only, this properties is required.
         * @return {@code this}
         */
        public Builder serverCertificateId(com.aliyun.ros.cdk.core.IResolvable serverCertificateId) {
            this.serverCertificateId = serverCertificateId;
            return this;
        }

        /**
         * Sets the value of {@link ListenerProps#getStartListener}
         * @param startListener Property startListener: Whether start listener after listener created.
         *                      Default True.
         * @return {@code this}
         */
        public Builder startListener(java.lang.Boolean startListener) {
            this.startListener = startListener;
            return this;
        }

        /**
         * Sets the value of {@link ListenerProps#getStartListener}
         * @param startListener Property startListener: Whether start listener after listener created.
         *                      Default True.
         * @return {@code this}
         */
        public Builder startListener(com.aliyun.ros.cdk.core.IResolvable startListener) {
            this.startListener = startListener;
            return this;
        }

        /**
         * Sets the value of {@link ListenerProps#getTlsCipherPolicy}
         * @param tlsCipherPolicy Property tlsCipherPolicy: The Transport Layer Security (TLS) security policy.
         *                        Each security policy contains TLS protocol versions and cipher suites available for HTTPS. It takes effect when Protocol=https.
         * @return {@code this}
         */
        public Builder tlsCipherPolicy(java.lang.String tlsCipherPolicy) {
            this.tlsCipherPolicy = tlsCipherPolicy;
            return this;
        }

        /**
         * Sets the value of {@link ListenerProps#getTlsCipherPolicy}
         * @param tlsCipherPolicy Property tlsCipherPolicy: The Transport Layer Security (TLS) security policy.
         *                        Each security policy contains TLS protocol versions and cipher suites available for HTTPS. It takes effect when Protocol=https.
         * @return {@code this}
         */
        public Builder tlsCipherPolicy(com.aliyun.ros.cdk.core.IResolvable tlsCipherPolicy) {
            this.tlsCipherPolicy = tlsCipherPolicy;
            return this;
        }

        /**
         * Sets the value of {@link ListenerProps#getVServerGroupId}
         * @param vServerGroupId Property vServerGroupId: The id of the VServerGroup which use in listener.
         * @return {@code this}
         */
        public Builder vServerGroupId(java.lang.String vServerGroupId) {
            this.vServerGroupId = vServerGroupId;
            return this;
        }

        /**
         * Sets the value of {@link ListenerProps#getVServerGroupId}
         * @param vServerGroupId Property vServerGroupId: The id of the VServerGroup which use in listener.
         * @return {@code this}
         */
        public Builder vServerGroupId(com.aliyun.ros.cdk.core.IResolvable vServerGroupId) {
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
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ListenerProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ListenerProps {
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
