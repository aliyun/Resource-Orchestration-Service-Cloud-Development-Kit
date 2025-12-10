package com.aliyun.ros.cdk.slb.datasource;

/**
 * This class encapsulates and extends the ROS resource type <code>DATASOURCE::SLB::LoadBalancerTCPListener</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:25:00.473Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.slb.$Module.class, fqn = "@alicloud/ros-cdk-slb.datasource.LoadBalancerTCPListener")
public class LoadBalancerTCPListener extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.slb.datasource.ILoadBalancerTCPListener {

    protected LoadBalancerTCPListener(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected LoadBalancerTCPListener(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public LoadBalancerTCPListener(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.slb.datasource.LoadBalancerTCPListenerProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public LoadBalancerTCPListener(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.slb.datasource.LoadBalancerTCPListenerProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute AclId: The ID of the network ACL that is associated with the listener.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAclId() {
        return software.amazon.jsii.Kernel.get(this, "attrAclId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute AclIds: The ID list of the network ACL that is associated with the listener.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAclIds() {
        return software.amazon.jsii.Kernel.get(this, "attrAclIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute AclStatus: Indicates whether access control is enabled.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAclStatus() {
        return software.amazon.jsii.Kernel.get(this, "attrAclStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute AclType: The type of the ACL.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAclType() {
        return software.amazon.jsii.Kernel.get(this, "attrAclType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute BackendServerPort: The backend port used by the CLB instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrBackendServerPort() {
        return software.amazon.jsii.Kernel.get(this, "attrBackendServerPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Bandwidth: The maximum bandwidth of the listener.
     * <p>
     * Unit: Mbit/s.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrBandwidth() {
        return software.amazon.jsii.Kernel.get(this, "attrBandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ConnectionDrain: Indicates whether connection draining is enabled.
     * <p>
     * If ConnectionDrain is set to on, the parameter is returned.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrConnectionDrain() {
        return software.amazon.jsii.Kernel.get(this, "attrConnectionDrain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ConnectionDrainTimeout: The timeout period of connection draining.
     * <p>
     * If ConnectionDrain is set to on, the parameter is returned.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrConnectionDrainTimeout() {
        return software.amazon.jsii.Kernel.get(this, "attrConnectionDrainTimeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Description: The description of the listener.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute EstablishedTimeout: The timeout period of a connection.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEstablishedTimeout() {
        return software.amazon.jsii.Kernel.get(this, "attrEstablishedTimeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute HealthCheck: Indicates whether the health check feature is enabled.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheck() {
        return software.amazon.jsii.Kernel.get(this, "attrHealthCheck", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute HealthCheckConnectPort: The port that is used for health checks.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckConnectPort() {
        return software.amazon.jsii.Kernel.get(this, "attrHealthCheckConnectPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute HealthCheckConnectTimeout: The timeout period.
     * <p>
     * Unit: seconds.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckConnectTimeout() {
        return software.amazon.jsii.Kernel.get(this, "attrHealthCheckConnectTimeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute HealthCheckDomain: The domain name that is used for health checks.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckDomain() {
        return software.amazon.jsii.Kernel.get(this, "attrHealthCheckDomain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute HealthCheckHttpCode: The HTTP status code for a successful health check.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckHttpCode() {
        return software.amazon.jsii.Kernel.get(this, "attrHealthCheckHttpCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute HealthCheckInterval: The interval between two consecutive health checks.
     * <p>
     * Valid values: 1 to 50. Unit: seconds.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckInterval() {
        return software.amazon.jsii.Kernel.get(this, "attrHealthCheckInterval", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute HealthCheckMethod: The health check method.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckMethod() {
        return software.amazon.jsii.Kernel.get(this, "attrHealthCheckMethod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute HealthCheckType: The health check method that is used by the TCP listener.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckType() {
        return software.amazon.jsii.Kernel.get(this, "attrHealthCheckType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute HealthCheckUri: The URL that is used for health checks.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthCheckUri() {
        return software.amazon.jsii.Kernel.get(this, "attrHealthCheckUri", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute HealthyThreshold: The healthy threshold.
     * <p>
     * The number of times that an unhealthy backend server must consecutively pass health checks before it is declared healthy. In this case, the health status is changed from fail to success. Valid values: 2 to 10.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrHealthyThreshold() {
        return software.amazon.jsii.Kernel.get(this, "attrHealthyThreshold", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ListenerPort: The frontend port used by the CLB instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrListenerPort() {
        return software.amazon.jsii.Kernel.get(this, "attrListenerPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute LoadBalancerId: The ID of the CLB instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrLoadBalancerId() {
        return software.amazon.jsii.Kernel.get(this, "attrLoadBalancerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute MasterSlaveServerGroupId: The ID of the primary/secondary server group that is associated with the listener.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrMasterSlaveServerGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrMasterSlaveServerGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PersistenceTimeout: The timeout period of session persistence.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPersistenceTimeout() {
        return software.amazon.jsii.Kernel.get(this, "attrPersistenceTimeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ProxyProtocolV2Enabled: Indicates whether the Proxy protocol is used to pass client IP addresses to backend servers.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrProxyProtocolV2Enabled() {
        return software.amazon.jsii.Kernel.get(this, "attrProxyProtocolV2Enabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Scheduler: The scheduling algorithm.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrScheduler() {
        return software.amazon.jsii.Kernel.get(this, "attrScheduler", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SynProxy: Indicates whether the SynProxy feature of CLB is enabled for protection.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSynProxy() {
        return software.amazon.jsii.Kernel.get(this, "attrSynProxy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute UnhealthyThreshold: The unhealthy threshold.
     * <p>
     * The number of times that a healthy backend server must consecutively fail health checks before it is declared unhealthy. In this case, the health status is changed from success to fail. Valid values: 2 to 10.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrUnhealthyThreshold() {
        return software.amazon.jsii.Kernel.get(this, "attrUnhealthyThreshold", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute VServerGroupId: The ID of the associated server group.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrVServerGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrVServerGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.slb.datasource.LoadBalancerTCPListenerProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.slb.datasource.LoadBalancerTCPListenerProps.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.slb.datasource.LoadBalancerTCPListener}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.slb.datasource.LoadBalancerTCPListener> {
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
        private final com.aliyun.ros.cdk.slb.datasource.LoadBalancerTCPListenerProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.slb.datasource.LoadBalancerTCPListenerProps.Builder();
        }

        /**
         * Property listenerPort: The frontend port used by the CLB instance.Valid values: 1 to 65535.
         * <p>
         * @return {@code this}
         * @param listenerPort Property listenerPort: The frontend port used by the CLB instance.Valid values: 1 to 65535. This parameter is required.
         */
        public Builder listenerPort(final java.lang.Number listenerPort) {
            this.props.listenerPort(listenerPort);
            return this;
        }
        /**
         * Property listenerPort: The frontend port used by the CLB instance.Valid values: 1 to 65535.
         * <p>
         * @return {@code this}
         * @param listenerPort Property listenerPort: The frontend port used by the CLB instance.Valid values: 1 to 65535. This parameter is required.
         */
        public Builder listenerPort(final com.aliyun.ros.cdk.core.IResolvable listenerPort) {
            this.props.listenerPort(listenerPort);
            return this;
        }

        /**
         * Property loadBalancerId: The ID of the CLB instance.
         * <p>
         * @return {@code this}
         * @param loadBalancerId Property loadBalancerId: The ID of the CLB instance. This parameter is required.
         */
        public Builder loadBalancerId(final java.lang.String loadBalancerId) {
            this.props.loadBalancerId(loadBalancerId);
            return this;
        }
        /**
         * Property loadBalancerId: The ID of the CLB instance.
         * <p>
         * @return {@code this}
         * @param loadBalancerId Property loadBalancerId: The ID of the CLB instance. This parameter is required.
         */
        public Builder loadBalancerId(final com.aliyun.ros.cdk.core.IResolvable loadBalancerId) {
            this.props.loadBalancerId(loadBalancerId);
            return this;
        }

        /**
         * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         * <li>Always: Always refresh the datasource resource when the stack is updated.
         * Default is Never.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. This parameter is required.
         */
        public Builder refreshOptions(final java.lang.String refreshOptions) {
            this.props.refreshOptions(refreshOptions);
            return this;
        }
        /**
         * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         * <li>Always: Always refresh the datasource resource when the stack is updated.
         * Default is Never.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. This parameter is required.
         */
        public Builder refreshOptions(final com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.props.refreshOptions(refreshOptions);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.slb.datasource.LoadBalancerTCPListener}.
         */
        @Override
        public com.aliyun.ros.cdk.slb.datasource.LoadBalancerTCPListener build() {
            return new com.aliyun.ros.cdk.slb.datasource.LoadBalancerTCPListener(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
