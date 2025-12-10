package com.aliyun.ros.cdk.mse;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::MSE::GatewayService</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:58.210Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mse.$Module.class, fqn = "@alicloud/ros-cdk-mse.GatewayService")
public class GatewayService extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.mse.IGatewayService {

    protected GatewayService(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected GatewayService(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public GatewayService(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mse.GatewayServiceProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public GatewayService(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mse.GatewayServiceProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Name: The name of the service.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrName() {
        return software.amazon.jsii.Kernel.get(this, "attrName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ServiceId: The ID of the gateway service.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceId() {
        return software.amazon.jsii.Kernel.get(this, "attrServiceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mse.GatewayServiceProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.mse.GatewayServiceProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.mse.GatewayService}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.mse.GatewayService> {
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
        private final com.aliyun.ros.cdk.mse.GatewayServiceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.mse.GatewayServiceProps.Builder();
        }

        /**
         * Property gatewayUniqueId: Unique identifier of the gateway.
         * <p>
         * @return {@code this}
         * @param gatewayUniqueId Property gatewayUniqueId: Unique identifier of the gateway. This parameter is required.
         */
        public Builder gatewayUniqueId(final java.lang.String gatewayUniqueId) {
            this.props.gatewayUniqueId(gatewayUniqueId);
            return this;
        }
        /**
         * Property gatewayUniqueId: Unique identifier of the gateway.
         * <p>
         * @return {@code this}
         * @param gatewayUniqueId Property gatewayUniqueId: Unique identifier of the gateway. This parameter is required.
         */
        public Builder gatewayUniqueId(final com.aliyun.ros.cdk.core.IResolvable gatewayUniqueId) {
            this.props.gatewayUniqueId(gatewayUniqueId);
            return this;
        }

        /**
         * Property name: Name of the service.
         * <p>
         * @return {@code this}
         * @param name Property name: Name of the service. This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }
        /**
         * Property name: Name of the service.
         * <p>
         * @return {@code this}
         * @param name Property name: Name of the service. This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props.name(name);
            return this;
        }

        /**
         * Property sourceType: Type of service source.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>MSE: MSE-NACOS</li>
         * <li>K8s: ACK container service</li>
         * <li>VIP: Fixed address</li>
         * <li>DNS: DNS domain name</li>
         * <li>FC: Function Compute</li>
         * <li>EDAS: EDAS</li>
         * <li>MSE_ZK: MSE-Zookeeper</li>
         * <li>SAE: SAE</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param sourceType Property sourceType: Type of service source. This parameter is required.
         */
        public Builder sourceType(final java.lang.String sourceType) {
            this.props.sourceType(sourceType);
            return this;
        }
        /**
         * Property sourceType: Type of service source.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>MSE: MSE-NACOS</li>
         * <li>K8s: ACK container service</li>
         * <li>VIP: Fixed address</li>
         * <li>DNS: DNS domain name</li>
         * <li>FC: Function Compute</li>
         * <li>EDAS: EDAS</li>
         * <li>MSE_ZK: MSE-Zookeeper</li>
         * <li>SAE: SAE</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param sourceType Property sourceType: Type of service source. This parameter is required.
         */
        public Builder sourceType(final com.aliyun.ros.cdk.core.IResolvable sourceType) {
            this.props.sourceType(sourceType);
            return this;
        }

        /**
         * Property dnsServerList: List of DNS servers.
         * <p>
         * @return {@code this}
         * @param dnsServerList Property dnsServerList: List of DNS servers. This parameter is required.
         */
        public Builder dnsServerList(final com.aliyun.ros.cdk.core.IResolvable dnsServerList) {
            this.props.dnsServerList(dnsServerList);
            return this;
        }
        /**
         * Property dnsServerList: List of DNS servers.
         * <p>
         * @return {@code this}
         * @param dnsServerList Property dnsServerList: List of DNS servers. This parameter is required.
         */
        public Builder dnsServerList(final java.util.List<? extends java.lang.Object> dnsServerList) {
            this.props.dnsServerList(dnsServerList);
            return this;
        }

        /**
         * Property fcAlias: Function Compute service alias.
         * <p>
         * Used when SourceType is FC.
         * <p>
         * @return {@code this}
         * @param fcAlias Property fcAlias: Function Compute service alias. This parameter is required.
         */
        public Builder fcAlias(final java.lang.String fcAlias) {
            this.props.fcAlias(fcAlias);
            return this;
        }
        /**
         * Property fcAlias: Function Compute service alias.
         * <p>
         * Used when SourceType is FC.
         * <p>
         * @return {@code this}
         * @param fcAlias Property fcAlias: Function Compute service alias. This parameter is required.
         */
        public Builder fcAlias(final com.aliyun.ros.cdk.core.IResolvable fcAlias) {
            this.props.fcAlias(fcAlias);
            return this;
        }

        /**
         * Property fcServiceName: Function Compute service name.
         * <p>
         * Required when SourceType is FC.
         * <p>
         * @return {@code this}
         * @param fcServiceName Property fcServiceName: Function Compute service name. This parameter is required.
         */
        public Builder fcServiceName(final java.lang.String fcServiceName) {
            this.props.fcServiceName(fcServiceName);
            return this;
        }
        /**
         * Property fcServiceName: Function Compute service name.
         * <p>
         * Required when SourceType is FC.
         * <p>
         * @return {@code this}
         * @param fcServiceName Property fcServiceName: Function Compute service name. This parameter is required.
         */
        public Builder fcServiceName(final com.aliyun.ros.cdk.core.IResolvable fcServiceName) {
            this.props.fcServiceName(fcServiceName);
            return this;
        }

        /**
         * Property fcVersion: Function Compute service version.
         * <p>
         * Used when SourceType is FC.
         * <p>
         * @return {@code this}
         * @param fcVersion Property fcVersion: Function Compute service version. This parameter is required.
         */
        public Builder fcVersion(final java.lang.String fcVersion) {
            this.props.fcVersion(fcVersion);
            return this;
        }
        /**
         * Property fcVersion: Function Compute service version.
         * <p>
         * Used when SourceType is FC.
         * <p>
         * @return {@code this}
         * @param fcVersion Property fcVersion: Function Compute service version. This parameter is required.
         */
        public Builder fcVersion(final com.aliyun.ros.cdk.core.IResolvable fcVersion) {
            this.props.fcVersion(fcVersion);
            return this;
        }

        /**
         * Property groupName: Group name of the service.
         * <p>
         * @return {@code this}
         * @param groupName Property groupName: Group name of the service. This parameter is required.
         */
        public Builder groupName(final java.lang.String groupName) {
            this.props.groupName(groupName);
            return this;
        }
        /**
         * Property groupName: Group name of the service.
         * <p>
         * @return {@code this}
         * @param groupName Property groupName: Group name of the service. This parameter is required.
         */
        public Builder groupName(final com.aliyun.ros.cdk.core.IResolvable groupName) {
            this.props.groupName(groupName);
            return this;
        }

        /**
         * Property ips: List of IPs.
         * <p>
         * @return {@code this}
         * @param ips Property ips: List of IPs. This parameter is required.
         */
        public Builder ips(final com.aliyun.ros.cdk.core.IResolvable ips) {
            this.props.ips(ips);
            return this;
        }
        /**
         * Property ips: List of IPs.
         * <p>
         * @return {@code this}
         * @param ips Property ips: List of IPs. This parameter is required.
         */
        public Builder ips(final java.util.List<? extends java.lang.Object> ips) {
            this.props.ips(ips);
            return this;
        }

        /**
         * Property namespace: Namespace of the service.
         * <p>
         * @return {@code this}
         * @param namespace Property namespace: Namespace of the service. This parameter is required.
         */
        public Builder namespace(final java.lang.String namespace) {
            this.props.namespace(namespace);
            return this;
        }
        /**
         * Property namespace: Namespace of the service.
         * <p>
         * @return {@code this}
         * @param namespace Property namespace: Namespace of the service. This parameter is required.
         */
        public Builder namespace(final com.aliyun.ros.cdk.core.IResolvable namespace) {
            this.props.namespace(namespace);
            return this;
        }

        /**
         * Property saeAppId: SAE application ID.
         * <p>
         * @return {@code this}
         * @param saeAppId Property saeAppId: SAE application ID. This parameter is required.
         */
        public Builder saeAppId(final java.lang.String saeAppId) {
            this.props.saeAppId(saeAppId);
            return this;
        }
        /**
         * Property saeAppId: SAE application ID.
         * <p>
         * @return {@code this}
         * @param saeAppId Property saeAppId: SAE application ID. This parameter is required.
         */
        public Builder saeAppId(final com.aliyun.ros.cdk.core.IResolvable saeAppId) {
            this.props.saeAppId(saeAppId);
            return this;
        }

        /**
         * Property servicePort: Port of the service.
         * <p>
         * @return {@code this}
         * @param servicePort Property servicePort: Port of the service. This parameter is required.
         */
        public Builder servicePort(final java.lang.Number servicePort) {
            this.props.servicePort(servicePort);
            return this;
        }
        /**
         * Property servicePort: Port of the service.
         * <p>
         * @return {@code this}
         * @param servicePort Property servicePort: Port of the service. This parameter is required.
         */
        public Builder servicePort(final com.aliyun.ros.cdk.core.IResolvable servicePort) {
            this.props.servicePort(servicePort);
            return this;
        }

        /**
         * Property serviceProtocol: Protocol of the service.
         * <p>
         * @return {@code this}
         * @param serviceProtocol Property serviceProtocol: Protocol of the service. This parameter is required.
         */
        public Builder serviceProtocol(final java.lang.String serviceProtocol) {
            this.props.serviceProtocol(serviceProtocol);
            return this;
        }
        /**
         * Property serviceProtocol: Protocol of the service.
         * <p>
         * @return {@code this}
         * @param serviceProtocol Property serviceProtocol: Protocol of the service. This parameter is required.
         */
        public Builder serviceProtocol(final com.aliyun.ros.cdk.core.IResolvable serviceProtocol) {
            this.props.serviceProtocol(serviceProtocol);
            return this;
        }

        /**
         * Property sourceId: Source ID of the service.
         * <p>
         * Used when specifying a source to add services.
         * <p>
         * @return {@code this}
         * @param sourceId Property sourceId: Source ID of the service. This parameter is required.
         */
        public Builder sourceId(final java.lang.Number sourceId) {
            this.props.sourceId(sourceId);
            return this;
        }
        /**
         * Property sourceId: Source ID of the service.
         * <p>
         * Used when specifying a source to add services.
         * <p>
         * @return {@code this}
         * @param sourceId Property sourceId: Source ID of the service. This parameter is required.
         */
        public Builder sourceId(final com.aliyun.ros.cdk.core.IResolvable sourceId) {
            this.props.sourceId(sourceId);
            return this;
        }

        /**
         * Property tlsSetting: TLS settings for the service.
         * <p>
         * @return {@code this}
         * @param tlsSetting Property tlsSetting: TLS settings for the service. This parameter is required.
         */
        public Builder tlsSetting(final com.aliyun.ros.cdk.core.IResolvable tlsSetting) {
            this.props.tlsSetting(tlsSetting);
            return this;
        }
        /**
         * Property tlsSetting: TLS settings for the service.
         * <p>
         * @return {@code this}
         * @param tlsSetting Property tlsSetting: TLS settings for the service. This parameter is required.
         */
        public Builder tlsSetting(final java.util.Map<java.lang.String, ? extends java.lang.Object> tlsSetting) {
            this.props.tlsSetting(tlsSetting);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.mse.GatewayService}.
         */
        @Override
        public com.aliyun.ros.cdk.mse.GatewayService build() {
            return new com.aliyun.ros.cdk.mse.GatewayService(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
