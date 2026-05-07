package com.aliyun.ros.cdk.dns;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::DNS::AddressPool</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:47.916Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dns.$Module.class, fqn = "@alicloud/ros-cdk-dns.AddressPool")
public class AddressPool extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.dns.IAddressPool {

    protected AddressPool(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected AddressPool(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public AddressPool(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dns.AddressPoolProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public AddressPool(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dns.AddressPoolProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute AddrPoolId: The ID of the address pool.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAddrPoolId() {
        return software.amazon.jsii.Kernel.get(this, "attrAddrPoolId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dns.AddressPoolProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.dns.AddressPoolProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.dns.AddressPool}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.dns.AddressPool> {
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
        private final com.aliyun.ros.cdk.dns.AddressPoolProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.dns.AddressPoolProps.Builder();
        }

        /**
         * Property addr: The list of addresses in the address pool.
         * <p>
         * @return {@code this}
         * @param addr Property addr: The list of addresses in the address pool. This parameter is required.
         */
        public Builder addr(final com.aliyun.ros.cdk.core.IResolvable addr) {
            this.props.addr(addr);
            return this;
        }
        /**
         * Property addr: The list of addresses in the address pool.
         * <p>
         * @return {@code this}
         * @param addr Property addr: The list of addresses in the address pool. This parameter is required.
         */
        public Builder addr(final java.util.List<? extends java.lang.Object> addr) {
            this.props.addr(addr);
            return this;
        }

        /**
         * Property instanceId: The ID of the GTM instance.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: The ID of the GTM instance. This parameter is required.
         */
        public Builder instanceId(final java.lang.String instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }
        /**
         * Property instanceId: The ID of the GTM instance.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: The ID of the GTM instance. This parameter is required.
         */
        public Builder instanceId(final com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }

        /**
         * Property lbaStrategy: The load balancing strategy.
         * <p>
         * Valid values: RoundRobin, Weighted, FallbackToFirst.
         * <p>
         * @return {@code this}
         * @param lbaStrategy Property lbaStrategy: The load balancing strategy. This parameter is required.
         */
        public Builder lbaStrategy(final java.lang.String lbaStrategy) {
            this.props.lbaStrategy(lbaStrategy);
            return this;
        }
        /**
         * Property lbaStrategy: The load balancing strategy.
         * <p>
         * Valid values: RoundRobin, Weighted, FallbackToFirst.
         * <p>
         * @return {@code this}
         * @param lbaStrategy Property lbaStrategy: The load balancing strategy. This parameter is required.
         */
        public Builder lbaStrategy(final com.aliyun.ros.cdk.core.IResolvable lbaStrategy) {
            this.props.lbaStrategy(lbaStrategy);
            return this;
        }

        /**
         * Property name: The name of the address pool.
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the address pool. This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }
        /**
         * Property name: The name of the address pool.
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the address pool. This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props.name(name);
            return this;
        }

        /**
         * Property type: The type of the address pool.
         * <p>
         * Valid values: Ipv4, Ipv6, Domain.
         * <p>
         * @return {@code this}
         * @param type Property type: The type of the address pool. This parameter is required.
         */
        public Builder type(final java.lang.String type) {
            this.props.type(type);
            return this;
        }
        /**
         * Property type: The type of the address pool.
         * <p>
         * Valid values: Ipv4, Ipv6, Domain.
         * <p>
         * @return {@code this}
         * @param type Property type: The type of the address pool. This parameter is required.
         */
        public Builder type(final com.aliyun.ros.cdk.core.IResolvable type) {
            this.props.type(type);
            return this;
        }

        /**
         * Property evaluationCount: The number of times that the system waits for a response from each address before it marks the address as unhealthy.
         * <p>
         * @return {@code this}
         * @param evaluationCount Property evaluationCount: The number of times that the system waits for a response from each address before it marks the address as unhealthy. This parameter is required.
         */
        public Builder evaluationCount(final java.lang.Number evaluationCount) {
            this.props.evaluationCount(evaluationCount);
            return this;
        }
        /**
         * Property evaluationCount: The number of times that the system waits for a response from each address before it marks the address as unhealthy.
         * <p>
         * @return {@code this}
         * @param evaluationCount Property evaluationCount: The number of times that the system waits for a response from each address before it marks the address as unhealthy. This parameter is required.
         */
        public Builder evaluationCount(final com.aliyun.ros.cdk.core.IResolvable evaluationCount) {
            this.props.evaluationCount(evaluationCount);
            return this;
        }

        /**
         * Property interval: The interval between two consecutive health checks, in seconds.
         * <p>
         * @return {@code this}
         * @param interval Property interval: The interval between two consecutive health checks, in seconds. This parameter is required.
         */
        public Builder interval(final java.lang.Number interval) {
            this.props.interval(interval);
            return this;
        }
        /**
         * Property interval: The interval between two consecutive health checks, in seconds.
         * <p>
         * @return {@code this}
         * @param interval Property interval: The interval between two consecutive health checks, in seconds. This parameter is required.
         */
        public Builder interval(final com.aliyun.ros.cdk.core.IResolvable interval) {
            this.props.interval(interval);
            return this;
        }

        /**
         * Property ispCityNode: The list of ISP city nodes.
         * <p>
         * @return {@code this}
         * @param ispCityNode Property ispCityNode: The list of ISP city nodes. This parameter is required.
         */
        public Builder ispCityNode(final com.aliyun.ros.cdk.core.IResolvable ispCityNode) {
            this.props.ispCityNode(ispCityNode);
            return this;
        }
        /**
         * Property ispCityNode: The list of ISP city nodes.
         * <p>
         * @return {@code this}
         * @param ispCityNode Property ispCityNode: The list of ISP city nodes. This parameter is required.
         */
        public Builder ispCityNode(final java.util.List<? extends java.lang.Object> ispCityNode) {
            this.props.ispCityNode(ispCityNode);
            return this;
        }

        /**
         * Property monitorExtendInfo: The extended information of the health check.
         * <p>
         * @return {@code this}
         * @param monitorExtendInfo Property monitorExtendInfo: The extended information of the health check. This parameter is required.
         */
        public Builder monitorExtendInfo(final com.aliyun.ros.cdk.core.IResolvable monitorExtendInfo) {
            this.props.monitorExtendInfo(monitorExtendInfo);
            return this;
        }
        /**
         * Property monitorExtendInfo: The extended information of the health check.
         * <p>
         * @return {@code this}
         * @param monitorExtendInfo Property monitorExtendInfo: The extended information of the health check. This parameter is required.
         */
        public Builder monitorExtendInfo(final java.util.Map<java.lang.String, ? extends java.lang.Object> monitorExtendInfo) {
            this.props.monitorExtendInfo(monitorExtendInfo);
            return this;
        }

        /**
         * Property monitorStatus: The monitoring status of the address pool.
         * <p>
         * @return {@code this}
         * @param monitorStatus Property monitorStatus: The monitoring status of the address pool. This parameter is required.
         */
        public Builder monitorStatus(final java.lang.String monitorStatus) {
            this.props.monitorStatus(monitorStatus);
            return this;
        }
        /**
         * Property monitorStatus: The monitoring status of the address pool.
         * <p>
         * @return {@code this}
         * @param monitorStatus Property monitorStatus: The monitoring status of the address pool. This parameter is required.
         */
        public Builder monitorStatus(final com.aliyun.ros.cdk.core.IResolvable monitorStatus) {
            this.props.monitorStatus(monitorStatus);
            return this;
        }

        /**
         * Property protocolType: The protocol type.
         * <p>
         * @return {@code this}
         * @param protocolType Property protocolType: The protocol type. This parameter is required.
         */
        public Builder protocolType(final java.lang.String protocolType) {
            this.props.protocolType(protocolType);
            return this;
        }
        /**
         * Property protocolType: The protocol type.
         * <p>
         * @return {@code this}
         * @param protocolType Property protocolType: The protocol type. This parameter is required.
         */
        public Builder protocolType(final com.aliyun.ros.cdk.core.IResolvable protocolType) {
            this.props.protocolType(protocolType);
            return this;
        }

        /**
         * Property timeout: The timeout period of a health check, in seconds.
         * <p>
         * @return {@code this}
         * @param timeout Property timeout: The timeout period of a health check, in seconds. This parameter is required.
         */
        public Builder timeout(final java.lang.Number timeout) {
            this.props.timeout(timeout);
            return this;
        }
        /**
         * Property timeout: The timeout period of a health check, in seconds.
         * <p>
         * @return {@code this}
         * @param timeout Property timeout: The timeout period of a health check, in seconds. This parameter is required.
         */
        public Builder timeout(final com.aliyun.ros.cdk.core.IResolvable timeout) {
            this.props.timeout(timeout);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.dns.AddressPool}.
         */
        @Override
        public com.aliyun.ros.cdk.dns.AddressPool build() {
            return new com.aliyun.ros.cdk.dns.AddressPool(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
