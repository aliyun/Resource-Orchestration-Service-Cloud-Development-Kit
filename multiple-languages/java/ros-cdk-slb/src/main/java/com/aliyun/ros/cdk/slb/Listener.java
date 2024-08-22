package com.aliyun.ros.cdk.slb;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::SLB::Listener</code>, which is used to create a Server Load Balancer (SLB) listener.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-22T08:56:24.163Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.slb.$Module.class, fqn = "@alicloud/ros-cdk-slb.Listener")
public class Listener extends com.aliyun.ros.cdk.core.Resource {

    protected Listener(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Listener(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Listener(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.slb.ListenerProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Listener(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.slb.ListenerProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ListenerPortsAndProtocol: The collection of listener.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrListenerPortsAndProtocol() {
        return software.amazon.jsii.Kernel.get(this, "attrListenerPortsAndProtocol", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute LoadBalancerId: The id of load balancer.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrLoadBalancerId() {
        return software.amazon.jsii.Kernel.get(this, "attrLoadBalancerId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.slb.ListenerProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.slb.ListenerProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.slb.ListenerProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.slb.Listener}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.slb.Listener> {
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
        private final com.aliyun.ros.cdk.slb.ListenerProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.slb.ListenerProps.Builder();
        }

        /**
         * Property bandwidth: The bandwidth of network, unit in Mbps(Million bits per second).
         * <p>
         * If the specified load balancer with "LOAD_BALANCE_ID" is charged by "paybybandwidth" and is created in classic network, each Listener's bandwidth must be greater than 0 and the sum of all of its Listeners' bandwidth can't be greater than the bandwidth of the load balancer.
         * <p>
         * @return {@code this}
         * @param bandwidth Property bandwidth: The bandwidth of network, unit in Mbps(Million bits per second). This parameter is required.
         */
        public Builder bandwidth(final java.lang.Number bandwidth) {
            this.props.bandwidth(bandwidth);
            return this;
        }
        /**
         * Property bandwidth: The bandwidth of network, unit in Mbps(Million bits per second).
         * <p>
         * If the specified load balancer with "LOAD_BALANCE_ID" is charged by "paybybandwidth" and is created in classic network, each Listener's bandwidth must be greater than 0 and the sum of all of its Listeners' bandwidth can't be greater than the bandwidth of the load balancer.
         * <p>
         * @return {@code this}
         * @param bandwidth Property bandwidth: The bandwidth of network, unit in Mbps(Million bits per second). This parameter is required.
         */
        public Builder bandwidth(final com.aliyun.ros.cdk.core.IResolvable bandwidth) {
            this.props.bandwidth(bandwidth);
            return this;
        }

        /**
         * Property listenerPort: Port for front listener.
         * <p>
         * Range from 0 to 65535.
         * <p>
         * @return {@code this}
         * @param listenerPort Property listenerPort: Port for front listener. This parameter is required.
         */
        public Builder listenerPort(final java.lang.Number listenerPort) {
            this.props.listenerPort(listenerPort);
            return this;
        }
        /**
         * Property listenerPort: Port for front listener.
         * <p>
         * Range from 0 to 65535.
         * <p>
         * @return {@code this}
         * @param listenerPort Property listenerPort: Port for front listener. This parameter is required.
         */
        public Builder listenerPort(final com.aliyun.ros.cdk.core.IResolvable listenerPort) {
            this.props.listenerPort(listenerPort);
            return this;
        }

        /**
         * Property loadBalancerId: The id of load balancer to create listener.
         * <p>
         * @return {@code this}
         * @param loadBalancerId Property loadBalancerId: The id of load balancer to create listener. This parameter is required.
         */
        public Builder loadBalancerId(final java.lang.String loadBalancerId) {
            this.props.loadBalancerId(loadBalancerId);
            return this;
        }
        /**
         * Property loadBalancerId: The id of load balancer to create listener.
         * <p>
         * @return {@code this}
         * @param loadBalancerId Property loadBalancerId: The id of load balancer to create listener. This parameter is required.
         */
        public Builder loadBalancerId(final com.aliyun.ros.cdk.core.IResolvable loadBalancerId) {
            this.props.loadBalancerId(loadBalancerId);
            return this;
        }

        /**
         * Property protocol: The load balancer transport protocol to use for routing: http, https, tcp, or udp.
         * <p>
         * @return {@code this}
         * @param protocol Property protocol: The load balancer transport protocol to use for routing: http, https, tcp, or udp. This parameter is required.
         */
        public Builder protocol(final java.lang.String protocol) {
            this.props.protocol(protocol);
            return this;
        }
        /**
         * Property protocol: The load balancer transport protocol to use for routing: http, https, tcp, or udp.
         * <p>
         * @return {@code this}
         * @param protocol Property protocol: The load balancer transport protocol to use for routing: http, https, tcp, or udp. This parameter is required.
         */
        public Builder protocol(final com.aliyun.ros.cdk.core.IResolvable protocol) {
            this.props.protocol(protocol);
            return this;
        }

        /**
         * Property aclId: The ID of the access control associated with the listener to be created.
         * <p>
         * If the value of the AclStatus parameter is on, this parameter is required.
         * <p>
         * @return {@code this}
         * @param aclId Property aclId: The ID of the access control associated with the listener to be created. This parameter is required.
         */
        public Builder aclId(final java.lang.String aclId) {
            this.props.aclId(aclId);
            return this;
        }
        /**
         * Property aclId: The ID of the access control associated with the listener to be created.
         * <p>
         * If the value of the AclStatus parameter is on, this parameter is required.
         * <p>
         * @return {@code this}
         * @param aclId Property aclId: The ID of the access control associated with the listener to be created. This parameter is required.
         */
        public Builder aclId(final com.aliyun.ros.cdk.core.IResolvable aclId) {
            this.props.aclId(aclId);
            return this;
        }

        /**
         * Property aclIds: The ID list of the access controls associated with the listener to be created.
         * <p>
         * If the value of the AclStatus parameter is on, this parameter is required.AclIds have higher priority than AclId.
         * <p>
         * @return {@code this}
         * @param aclIds Property aclIds: The ID list of the access controls associated with the listener to be created. This parameter is required.
         */
        public Builder aclIds(final com.aliyun.ros.cdk.core.IResolvable aclIds) {
            this.props.aclIds(aclIds);
            return this;
        }
        /**
         * Property aclIds: The ID list of the access controls associated with the listener to be created.
         * <p>
         * If the value of the AclStatus parameter is on, this parameter is required.AclIds have higher priority than AclId.
         * <p>
         * @return {@code this}
         * @param aclIds Property aclIds: The ID list of the access controls associated with the listener to be created. This parameter is required.
         */
        public Builder aclIds(final java.util.List<? extends java.lang.Object> aclIds) {
            this.props.aclIds(aclIds);
            return this;
        }

        /**
         * Property aclStatus: Indicates whether to enable access control.
         * <p>
         * Valid values: on | off. Default value: off
         * <p>
         * @return {@code this}
         * @param aclStatus Property aclStatus: Indicates whether to enable access control. This parameter is required.
         */
        public Builder aclStatus(final java.lang.String aclStatus) {
            this.props.aclStatus(aclStatus);
            return this;
        }
        /**
         * Property aclStatus: Indicates whether to enable access control.
         * <p>
         * Valid values: on | off. Default value: off
         * <p>
         * @return {@code this}
         * @param aclStatus Property aclStatus: Indicates whether to enable access control. This parameter is required.
         */
        public Builder aclStatus(final com.aliyun.ros.cdk.core.IResolvable aclStatus) {
            this.props.aclStatus(aclStatus);
            return this;
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
         * <p>
         * @return {@code this}
         * @param aclType Property aclType: The access control type: * white: Indicates a whitelist. This parameter is required.
         */
        public Builder aclType(final java.lang.String aclType) {
            this.props.aclType(aclType);
            return this;
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
         * <p>
         * @return {@code this}
         * @param aclType Property aclType: The access control type: * white: Indicates a whitelist. This parameter is required.
         */
        public Builder aclType(final com.aliyun.ros.cdk.core.IResolvable aclType) {
            this.props.aclType(aclType);
            return this;
        }

        /**
         * Property backendServerPort: Backend server can listen on ports from 1 to 65535.
         * <p>
         * @return {@code this}
         * @param backendServerPort Property backendServerPort: Backend server can listen on ports from 1 to 65535. This parameter is required.
         */
        public Builder backendServerPort(final java.lang.Number backendServerPort) {
            this.props.backendServerPort(backendServerPort);
            return this;
        }
        /**
         * Property backendServerPort: Backend server can listen on ports from 1 to 65535.
         * <p>
         * @return {@code this}
         * @param backendServerPort Property backendServerPort: Backend server can listen on ports from 1 to 65535. This parameter is required.
         */
        public Builder backendServerPort(final com.aliyun.ros.cdk.core.IResolvable backendServerPort) {
            this.props.backendServerPort(backendServerPort);
            return this;
        }

        /**
         * Property caCertificateId: CA server certificate id, for https listener only.
         * <p>
         * @return {@code this}
         * @param caCertificateId Property caCertificateId: CA server certificate id, for https listener only. This parameter is required.
         */
        public Builder caCertificateId(final java.lang.String caCertificateId) {
            this.props.caCertificateId(caCertificateId);
            return this;
        }
        /**
         * Property caCertificateId: CA server certificate id, for https listener only.
         * <p>
         * @return {@code this}
         * @param caCertificateId Property caCertificateId: CA server certificate id, for https listener only. This parameter is required.
         */
        public Builder caCertificateId(final com.aliyun.ros.cdk.core.IResolvable caCertificateId) {
            this.props.caCertificateId(caCertificateId);
            return this;
        }

        /**
         * Property connectionDrain: Whether to enable graceful connection interruption.
         * <p>
         * Value:on: turn on
         * off: Not turned on
         * Note: Only effective TCP listener.
         * <p>
         * @return {@code this}
         * @param connectionDrain Property connectionDrain: Whether to enable graceful connection interruption. This parameter is required.
         */
        public Builder connectionDrain(final java.lang.String connectionDrain) {
            this.props.connectionDrain(connectionDrain);
            return this;
        }
        /**
         * Property connectionDrain: Whether to enable graceful connection interruption.
         * <p>
         * Value:on: turn on
         * off: Not turned on
         * Note: Only effective TCP listener.
         * <p>
         * @return {@code this}
         * @param connectionDrain Property connectionDrain: Whether to enable graceful connection interruption. This parameter is required.
         */
        public Builder connectionDrain(final com.aliyun.ros.cdk.core.IResolvable connectionDrain) {
            this.props.connectionDrain(connectionDrain);
            return this;
        }

        /**
         * Property connectionDrainTimeout: Set the connection graceful interruption timeout.
         * <p>
         * Unit: seconds. Value range: 10-900.
         * Note: Only effective for TCP listener. When ConnectionDrain is on, this option is required.
         * <p>
         * @return {@code this}
         * @param connectionDrainTimeout Property connectionDrainTimeout: Set the connection graceful interruption timeout. This parameter is required.
         */
        public Builder connectionDrainTimeout(final java.lang.Number connectionDrainTimeout) {
            this.props.connectionDrainTimeout(connectionDrainTimeout);
            return this;
        }
        /**
         * Property connectionDrainTimeout: Set the connection graceful interruption timeout.
         * <p>
         * Unit: seconds. Value range: 10-900.
         * Note: Only effective for TCP listener. When ConnectionDrain is on, this option is required.
         * <p>
         * @return {@code this}
         * @param connectionDrainTimeout Property connectionDrainTimeout: Set the connection graceful interruption timeout. This parameter is required.
         */
        public Builder connectionDrainTimeout(final com.aliyun.ros.cdk.core.IResolvable connectionDrainTimeout) {
            this.props.connectionDrainTimeout(connectionDrainTimeout);
            return this;
        }

        /**
         * Property description: The description of the listener.It must be 1 to 80 characters in length and can contain letters, digits, hyphens (-), forward slashes (/), periods (.), and underscores (_). Chinese characters are supported.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the listener.It must be 1 to 80 characters in length and can contain letters, digits, hyphens (-), forward slashes (/), periods (.), and underscores (_). Chinese characters are supported. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: The description of the listener.It must be 1 to 80 characters in length and can contain letters, digits, hyphens (-), forward slashes (/), periods (.), and underscores (_). Chinese characters are supported.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the listener.It must be 1 to 80 characters in length and can contain letters, digits, hyphens (-), forward slashes (/), periods (.), and underscores (_). Chinese characters are supported. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property enableHttp2: Specifies whether to use HTTP/2.
         * <p>
         * It takes effect when Protocol=https. Valid values:
         * on: yes
         * off: no
         * <p>
         * @return {@code this}
         * @param enableHttp2 Property enableHttp2: Specifies whether to use HTTP/2. This parameter is required.
         */
        public Builder enableHttp2(final java.lang.String enableHttp2) {
            this.props.enableHttp2(enableHttp2);
            return this;
        }
        /**
         * Property enableHttp2: Specifies whether to use HTTP/2.
         * <p>
         * It takes effect when Protocol=https. Valid values:
         * on: yes
         * off: no
         * <p>
         * @return {@code this}
         * @param enableHttp2 Property enableHttp2: Specifies whether to use HTTP/2. This parameter is required.
         */
        public Builder enableHttp2(final com.aliyun.ros.cdk.core.IResolvable enableHttp2) {
            this.props.enableHttp2(enableHttp2);
            return this;
        }

        /**
         * Property gzip: Specifies whether to enable Gzip compression to compress specific types of files.
         * <p>
         * Valid values:
         * on (default): yes
         * off: no
         * <p>
         * @return {@code this}
         * @param gzip Property gzip: Specifies whether to enable Gzip compression to compress specific types of files. This parameter is required.
         */
        public Builder gzip(final java.lang.String gzip) {
            this.props.gzip(gzip);
            return this;
        }
        /**
         * Property gzip: Specifies whether to enable Gzip compression to compress specific types of files.
         * <p>
         * Valid values:
         * on (default): yes
         * off: no
         * <p>
         * @return {@code this}
         * @param gzip Property gzip: Specifies whether to enable Gzip compression to compress specific types of files. This parameter is required.
         */
        public Builder gzip(final com.aliyun.ros.cdk.core.IResolvable gzip) {
            this.props.gzip(gzip);
            return this;
        }

        /**
         * Property healthCheck: The properties of health checking setting.
         * <p>
         * @return {@code this}
         * @param healthCheck Property healthCheck: The properties of health checking setting. This parameter is required.
         */
        public Builder healthCheck(final com.aliyun.ros.cdk.core.IResolvable healthCheck) {
            this.props.healthCheck(healthCheck);
            return this;
        }
        /**
         * Property healthCheck: The properties of health checking setting.
         * <p>
         * @return {@code this}
         * @param healthCheck Property healthCheck: The properties of health checking setting. This parameter is required.
         */
        public Builder healthCheck(final com.aliyun.ros.cdk.slb.RosListener.HealthCheckProperty healthCheck) {
            this.props.healthCheck(healthCheck);
            return this;
        }

        /**
         * Property httpConfig: Config for http protocol.
         * <p>
         * @return {@code this}
         * @param httpConfig Property httpConfig: Config for http protocol. This parameter is required.
         */
        public Builder httpConfig(final com.aliyun.ros.cdk.core.IResolvable httpConfig) {
            this.props.httpConfig(httpConfig);
            return this;
        }
        /**
         * Property httpConfig: Config for http protocol.
         * <p>
         * @return {@code this}
         * @param httpConfig Property httpConfig: Config for http protocol. This parameter is required.
         */
        public Builder httpConfig(final com.aliyun.ros.cdk.slb.RosListener.HttpConfigProperty httpConfig) {
            this.props.httpConfig(httpConfig);
            return this;
        }

        /**
         * Property idleTimeout: Specify the idle connection timeout in seconds.
         * <p>
         * Valid value: 1-60 If no request is received during the specified timeout period, Server Load Balancer will temporarily terminate the connection and restart the connection when the next request comes.
         * <p>
         * @return {@code this}
         * @param idleTimeout Property idleTimeout: Specify the idle connection timeout in seconds. This parameter is required.
         */
        public Builder idleTimeout(final java.lang.Number idleTimeout) {
            this.props.idleTimeout(idleTimeout);
            return this;
        }
        /**
         * Property idleTimeout: Specify the idle connection timeout in seconds.
         * <p>
         * Valid value: 1-60 If no request is received during the specified timeout period, Server Load Balancer will temporarily terminate the connection and restart the connection when the next request comes.
         * <p>
         * @return {@code this}
         * @param idleTimeout Property idleTimeout: Specify the idle connection timeout in seconds. This parameter is required.
         */
        public Builder idleTimeout(final com.aliyun.ros.cdk.core.IResolvable idleTimeout) {
            this.props.idleTimeout(idleTimeout);
            return this;
        }

        /**
         * Property masterSlaveServerGroupId: The id of the MasterSlaveServerGroup which use in listener.
         * <p>
         * @return {@code this}
         * @param masterSlaveServerGroupId Property masterSlaveServerGroupId: The id of the MasterSlaveServerGroup which use in listener. This parameter is required.
         */
        public Builder masterSlaveServerGroupId(final java.lang.String masterSlaveServerGroupId) {
            this.props.masterSlaveServerGroupId(masterSlaveServerGroupId);
            return this;
        }
        /**
         * Property masterSlaveServerGroupId: The id of the MasterSlaveServerGroup which use in listener.
         * <p>
         * @return {@code this}
         * @param masterSlaveServerGroupId Property masterSlaveServerGroupId: The id of the MasterSlaveServerGroup which use in listener. This parameter is required.
         */
        public Builder masterSlaveServerGroupId(final com.aliyun.ros.cdk.core.IResolvable masterSlaveServerGroupId) {
            this.props.masterSlaveServerGroupId(masterSlaveServerGroupId);
            return this;
        }

        /**
         * Property persistence: The properties of persistence.
         * <p>
         * @return {@code this}
         * @param persistence Property persistence: The properties of persistence. This parameter is required.
         */
        public Builder persistence(final com.aliyun.ros.cdk.core.IResolvable persistence) {
            this.props.persistence(persistence);
            return this;
        }
        /**
         * Property persistence: The properties of persistence.
         * <p>
         * @return {@code this}
         * @param persistence Property persistence: The properties of persistence. This parameter is required.
         */
        public Builder persistence(final com.aliyun.ros.cdk.slb.RosListener.PersistenceProperty persistence) {
            this.props.persistence(persistence);
            return this;
        }

        /**
         * Property portRange: Port range, only supports TCP or UDP listener.
         * <p>
         * ListenerPort should be 0 when PortRange is specified.
         * <p>
         * @return {@code this}
         * @param portRange Property portRange: Port range, only supports TCP or UDP listener. This parameter is required.
         */
        public Builder portRange(final com.aliyun.ros.cdk.core.IResolvable portRange) {
            this.props.portRange(portRange);
            return this;
        }
        /**
         * Property portRange: Port range, only supports TCP or UDP listener.
         * <p>
         * ListenerPort should be 0 when PortRange is specified.
         * <p>
         * @return {@code this}
         * @param portRange Property portRange: Port range, only supports TCP or UDP listener. This parameter is required.
         */
        public Builder portRange(final java.util.List<? extends java.lang.Object> portRange) {
            this.props.portRange(portRange);
            return this;
        }

        /**
         * Property proxyProtocolV2Enabled: Whether to support carrying the client source address to the backend server through the Proxy Protocol.
         * <p>
         * Value:
         * true: Yes
         * false (default): No
         * Note: Only effective TCP or UDP listener.
         * <p>
         * @return {@code this}
         * @param proxyProtocolV2Enabled Property proxyProtocolV2Enabled: Whether to support carrying the client source address to the backend server through the Proxy Protocol. This parameter is required.
         */
        public Builder proxyProtocolV2Enabled(final java.lang.Boolean proxyProtocolV2Enabled) {
            this.props.proxyProtocolV2Enabled(proxyProtocolV2Enabled);
            return this;
        }
        /**
         * Property proxyProtocolV2Enabled: Whether to support carrying the client source address to the backend server through the Proxy Protocol.
         * <p>
         * Value:
         * true: Yes
         * false (default): No
         * Note: Only effective TCP or UDP listener.
         * <p>
         * @return {@code this}
         * @param proxyProtocolV2Enabled Property proxyProtocolV2Enabled: Whether to support carrying the client source address to the backend server through the Proxy Protocol. This parameter is required.
         */
        public Builder proxyProtocolV2Enabled(final com.aliyun.ros.cdk.core.IResolvable proxyProtocolV2Enabled) {
            this.props.proxyProtocolV2Enabled(proxyProtocolV2Enabled);
            return this;
        }

        /**
         * Property requestTimeout: Specify the request timeout in seconds.
         * <p>
         * Valid value: 1-180 If no response is received from the backend server during the specified timeout period, Server Load Balancer will stop waiting and send an HTTP 504 error to the client.
         * <p>
         * @return {@code this}
         * @param requestTimeout Property requestTimeout: Specify the request timeout in seconds. This parameter is required.
         */
        public Builder requestTimeout(final java.lang.Number requestTimeout) {
            this.props.requestTimeout(requestTimeout);
            return this;
        }
        /**
         * Property requestTimeout: Specify the request timeout in seconds.
         * <p>
         * Valid value: 1-180 If no response is received from the backend server during the specified timeout period, Server Load Balancer will stop waiting and send an HTTP 504 error to the client.
         * <p>
         * @return {@code this}
         * @param requestTimeout Property requestTimeout: Specify the request timeout in seconds. This parameter is required.
         */
        public Builder requestTimeout(final com.aliyun.ros.cdk.core.IResolvable requestTimeout) {
            this.props.requestTimeout(requestTimeout);
            return this;
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
         * wrr: Backend servers that have higher weights receive more requests than those that have lower weights.
         * wlc: Requests are distributed based on the combination of the weights and connections to backend servers. If two backend servers have the same weight, the backend server that has fewer connections receives more requests.
         * rr: Requests are distributed to backend servers in sequence.
         * sch: specifies consistent hashing that is based on source IP addresses. Requests from the same source IP address are distributed to the same backend server.
         * tch: specifies consistent hashing that is based on four factors: source IP address, destination IP address, source port number, and destination port number. Requests that contain the same preceding information are distributed to the same backend server.
         * Default: wrr
         * <p>
         * @return {@code this}
         * @param scheduler Property scheduler: The scheduling algorithm. This parameter is required.
         */
        public Builder scheduler(final com.aliyun.ros.cdk.core.IResolvable scheduler) {
            this.props.scheduler(scheduler);
            return this;
        }

        /**
         * Property serverCertificateId: Server certificate id, for https listener only, this properties is required.
         * <p>
         * @return {@code this}
         * @param serverCertificateId Property serverCertificateId: Server certificate id, for https listener only, this properties is required. This parameter is required.
         */
        public Builder serverCertificateId(final java.lang.String serverCertificateId) {
            this.props.serverCertificateId(serverCertificateId);
            return this;
        }
        /**
         * Property serverCertificateId: Server certificate id, for https listener only, this properties is required.
         * <p>
         * @return {@code this}
         * @param serverCertificateId Property serverCertificateId: Server certificate id, for https listener only, this properties is required. This parameter is required.
         */
        public Builder serverCertificateId(final com.aliyun.ros.cdk.core.IResolvable serverCertificateId) {
            this.props.serverCertificateId(serverCertificateId);
            return this;
        }

        /**
         * Property startListener: Whether start listener after listener created.
         * <p>
         * Default True.
         * <p>
         * @return {@code this}
         * @param startListener Property startListener: Whether start listener after listener created. This parameter is required.
         */
        public Builder startListener(final java.lang.Boolean startListener) {
            this.props.startListener(startListener);
            return this;
        }
        /**
         * Property startListener: Whether start listener after listener created.
         * <p>
         * Default True.
         * <p>
         * @return {@code this}
         * @param startListener Property startListener: Whether start listener after listener created. This parameter is required.
         */
        public Builder startListener(final com.aliyun.ros.cdk.core.IResolvable startListener) {
            this.props.startListener(startListener);
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
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.slb.RosListener.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * Property tlsCipherPolicy: The Transport Layer Security (TLS) security policy.
         * <p>
         * Each security policy contains TLS protocol versions and cipher suites available for HTTPS. It takes effect when Protocol=https.
         * <p>
         * @return {@code this}
         * @param tlsCipherPolicy Property tlsCipherPolicy: The Transport Layer Security (TLS) security policy. This parameter is required.
         */
        public Builder tlsCipherPolicy(final java.lang.String tlsCipherPolicy) {
            this.props.tlsCipherPolicy(tlsCipherPolicy);
            return this;
        }
        /**
         * Property tlsCipherPolicy: The Transport Layer Security (TLS) security policy.
         * <p>
         * Each security policy contains TLS protocol versions and cipher suites available for HTTPS. It takes effect when Protocol=https.
         * <p>
         * @return {@code this}
         * @param tlsCipherPolicy Property tlsCipherPolicy: The Transport Layer Security (TLS) security policy. This parameter is required.
         */
        public Builder tlsCipherPolicy(final com.aliyun.ros.cdk.core.IResolvable tlsCipherPolicy) {
            this.props.tlsCipherPolicy(tlsCipherPolicy);
            return this;
        }

        /**
         * Property vServerGroupId: The id of the VServerGroup which use in listener.
         * <p>
         * @return {@code this}
         * @param vServerGroupId Property vServerGroupId: The id of the VServerGroup which use in listener. This parameter is required.
         */
        public Builder vServerGroupId(final java.lang.String vServerGroupId) {
            this.props.vServerGroupId(vServerGroupId);
            return this;
        }
        /**
         * Property vServerGroupId: The id of the VServerGroup which use in listener.
         * <p>
         * @return {@code this}
         * @param vServerGroupId Property vServerGroupId: The id of the VServerGroup which use in listener. This parameter is required.
         */
        public Builder vServerGroupId(final com.aliyun.ros.cdk.core.IResolvable vServerGroupId) {
            this.props.vServerGroupId(vServerGroupId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.slb.Listener}.
         */
        @Override
        public com.aliyun.ros.cdk.slb.Listener build() {
            return new com.aliyun.ros.cdk.slb.Listener(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
