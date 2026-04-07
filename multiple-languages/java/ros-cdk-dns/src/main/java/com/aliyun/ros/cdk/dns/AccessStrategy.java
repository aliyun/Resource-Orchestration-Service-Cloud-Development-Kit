package com.aliyun.ros.cdk.dns;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::DNS::AccessStrategy</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:23.916Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dns.$Module.class, fqn = "@alicloud/ros-cdk-dns.AccessStrategy")
public class AccessStrategy extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.dns.IAccessStrategy {

    protected AccessStrategy(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected AccessStrategy(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public AccessStrategy(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dns.AccessStrategyProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public AccessStrategy(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dns.AccessStrategyProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute StrategyId: The ID of the access strategy.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrStrategyId() {
        return software.amazon.jsii.Kernel.get(this, "attrStrategyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dns.AccessStrategyProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.dns.AccessStrategyProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.dns.AccessStrategy}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.dns.AccessStrategy> {
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
        private final com.aliyun.ros.cdk.dns.AccessStrategyProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.dns.AccessStrategyProps.Builder();
        }

        /**
         * Property defaultAddrPool: The default address pool of the access strategy.
         * <p>
         * @return {@code this}
         * @param defaultAddrPool Property defaultAddrPool: The default address pool of the access strategy. This parameter is required.
         */
        public Builder defaultAddrPool(final com.aliyun.ros.cdk.core.IResolvable defaultAddrPool) {
            this.props.defaultAddrPool(defaultAddrPool);
            return this;
        }
        /**
         * Property defaultAddrPool: The default address pool of the access strategy.
         * <p>
         * @return {@code this}
         * @param defaultAddrPool Property defaultAddrPool: The default address pool of the access strategy. This parameter is required.
         */
        public Builder defaultAddrPool(final java.util.List<? extends java.lang.Object> defaultAddrPool) {
            this.props.defaultAddrPool(defaultAddrPool);
            return this;
        }

        /**
         * Property defaultAddrPoolType: The type of the default address pool.
         * <p>
         * @return {@code this}
         * @param defaultAddrPoolType Property defaultAddrPoolType: The type of the default address pool. This parameter is required.
         */
        public Builder defaultAddrPoolType(final java.lang.String defaultAddrPoolType) {
            this.props.defaultAddrPoolType(defaultAddrPoolType);
            return this;
        }
        /**
         * Property defaultAddrPoolType: The type of the default address pool.
         * <p>
         * @return {@code this}
         * @param defaultAddrPoolType Property defaultAddrPoolType: The type of the default address pool. This parameter is required.
         */
        public Builder defaultAddrPoolType(final com.aliyun.ros.cdk.core.IResolvable defaultAddrPoolType) {
            this.props.defaultAddrPoolType(defaultAddrPoolType);
            return this;
        }

        /**
         * Property defaultMinAvailableAddrNum: The minimum available address number of the default address pool.
         * <p>
         * @return {@code this}
         * @param defaultMinAvailableAddrNum Property defaultMinAvailableAddrNum: The minimum available address number of the default address pool. This parameter is required.
         */
        public Builder defaultMinAvailableAddrNum(final java.lang.Number defaultMinAvailableAddrNum) {
            this.props.defaultMinAvailableAddrNum(defaultMinAvailableAddrNum);
            return this;
        }
        /**
         * Property defaultMinAvailableAddrNum: The minimum available address number of the default address pool.
         * <p>
         * @return {@code this}
         * @param defaultMinAvailableAddrNum Property defaultMinAvailableAddrNum: The minimum available address number of the default address pool. This parameter is required.
         */
        public Builder defaultMinAvailableAddrNum(final com.aliyun.ros.cdk.core.IResolvable defaultMinAvailableAddrNum) {
            this.props.defaultMinAvailableAddrNum(defaultMinAvailableAddrNum);
            return this;
        }

        /**
         * Property instanceId: The ID of the Dns instance.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: The ID of the Dns instance. This parameter is required.
         */
        public Builder instanceId(final java.lang.String instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }
        /**
         * Property instanceId: The ID of the Dns instance.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: The ID of the Dns instance. This parameter is required.
         */
        public Builder instanceId(final com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }

        /**
         * Property strategyMode: The mode of the access strategy.
         * <p>
         * @return {@code this}
         * @param strategyMode Property strategyMode: The mode of the access strategy. This parameter is required.
         */
        public Builder strategyMode(final java.lang.String strategyMode) {
            this.props.strategyMode(strategyMode);
            return this;
        }
        /**
         * Property strategyMode: The mode of the access strategy.
         * <p>
         * @return {@code this}
         * @param strategyMode Property strategyMode: The mode of the access strategy. This parameter is required.
         */
        public Builder strategyMode(final com.aliyun.ros.cdk.core.IResolvable strategyMode) {
            this.props.strategyMode(strategyMode);
            return this;
        }

        /**
         * Property strategyName: The name of the access strategy.
         * <p>
         * @return {@code this}
         * @param strategyName Property strategyName: The name of the access strategy. This parameter is required.
         */
        public Builder strategyName(final java.lang.String strategyName) {
            this.props.strategyName(strategyName);
            return this;
        }
        /**
         * Property strategyName: The name of the access strategy.
         * <p>
         * @return {@code this}
         * @param strategyName Property strategyName: The name of the access strategy. This parameter is required.
         */
        public Builder strategyName(final com.aliyun.ros.cdk.core.IResolvable strategyName) {
            this.props.strategyName(strategyName);
            return this;
        }

        /**
         * Property accessMode: The access mode of the access strategy.
         * <p>
         * @return {@code this}
         * @param accessMode Property accessMode: The access mode of the access strategy. This parameter is required.
         */
        public Builder accessMode(final java.lang.String accessMode) {
            this.props.accessMode(accessMode);
            return this;
        }
        /**
         * Property accessMode: The access mode of the access strategy.
         * <p>
         * @return {@code this}
         * @param accessMode Property accessMode: The access mode of the access strategy. This parameter is required.
         */
        public Builder accessMode(final com.aliyun.ros.cdk.core.IResolvable accessMode) {
            this.props.accessMode(accessMode);
            return this;
        }

        /**
         * Property defaultLatencyOptimization: Whether to enable latency optimization for the default address pool.
         * <p>
         * @return {@code this}
         * @param defaultLatencyOptimization Property defaultLatencyOptimization: Whether to enable latency optimization for the default address pool. This parameter is required.
         */
        public Builder defaultLatencyOptimization(final java.lang.String defaultLatencyOptimization) {
            this.props.defaultLatencyOptimization(defaultLatencyOptimization);
            return this;
        }
        /**
         * Property defaultLatencyOptimization: Whether to enable latency optimization for the default address pool.
         * <p>
         * @return {@code this}
         * @param defaultLatencyOptimization Property defaultLatencyOptimization: Whether to enable latency optimization for the default address pool. This parameter is required.
         */
        public Builder defaultLatencyOptimization(final com.aliyun.ros.cdk.core.IResolvable defaultLatencyOptimization) {
            this.props.defaultLatencyOptimization(defaultLatencyOptimization);
            return this;
        }

        /**
         * Property defaultLbaStrategy: The load balancing strategy of the default address pool.
         * <p>
         * @return {@code this}
         * @param defaultLbaStrategy Property defaultLbaStrategy: The load balancing strategy of the default address pool. This parameter is required.
         */
        public Builder defaultLbaStrategy(final java.lang.String defaultLbaStrategy) {
            this.props.defaultLbaStrategy(defaultLbaStrategy);
            return this;
        }
        /**
         * Property defaultLbaStrategy: The load balancing strategy of the default address pool.
         * <p>
         * @return {@code this}
         * @param defaultLbaStrategy Property defaultLbaStrategy: The load balancing strategy of the default address pool. This parameter is required.
         */
        public Builder defaultLbaStrategy(final com.aliyun.ros.cdk.core.IResolvable defaultLbaStrategy) {
            this.props.defaultLbaStrategy(defaultLbaStrategy);
            return this;
        }

        /**
         * Property defaultMaxReturnAddrNum: The maximum return address number of the default address pool.
         * <p>
         * @return {@code this}
         * @param defaultMaxReturnAddrNum Property defaultMaxReturnAddrNum: The maximum return address number of the default address pool. This parameter is required.
         */
        public Builder defaultMaxReturnAddrNum(final java.lang.Number defaultMaxReturnAddrNum) {
            this.props.defaultMaxReturnAddrNum(defaultMaxReturnAddrNum);
            return this;
        }
        /**
         * Property defaultMaxReturnAddrNum: The maximum return address number of the default address pool.
         * <p>
         * @return {@code this}
         * @param defaultMaxReturnAddrNum Property defaultMaxReturnAddrNum: The maximum return address number of the default address pool. This parameter is required.
         */
        public Builder defaultMaxReturnAddrNum(final com.aliyun.ros.cdk.core.IResolvable defaultMaxReturnAddrNum) {
            this.props.defaultMaxReturnAddrNum(defaultMaxReturnAddrNum);
            return this;
        }

        /**
         * Property failoverAddrPool: The failover address pool of the access strategy.
         * <p>
         * @return {@code this}
         * @param failoverAddrPool Property failoverAddrPool: The failover address pool of the access strategy. This parameter is required.
         */
        public Builder failoverAddrPool(final com.aliyun.ros.cdk.core.IResolvable failoverAddrPool) {
            this.props.failoverAddrPool(failoverAddrPool);
            return this;
        }
        /**
         * Property failoverAddrPool: The failover address pool of the access strategy.
         * <p>
         * @return {@code this}
         * @param failoverAddrPool Property failoverAddrPool: The failover address pool of the access strategy. This parameter is required.
         */
        public Builder failoverAddrPool(final java.util.List<? extends java.lang.Object> failoverAddrPool) {
            this.props.failoverAddrPool(failoverAddrPool);
            return this;
        }

        /**
         * Property failoverAddrPoolType: The type of the failover address pool.
         * <p>
         * @return {@code this}
         * @param failoverAddrPoolType Property failoverAddrPoolType: The type of the failover address pool. This parameter is required.
         */
        public Builder failoverAddrPoolType(final java.lang.String failoverAddrPoolType) {
            this.props.failoverAddrPoolType(failoverAddrPoolType);
            return this;
        }
        /**
         * Property failoverAddrPoolType: The type of the failover address pool.
         * <p>
         * @return {@code this}
         * @param failoverAddrPoolType Property failoverAddrPoolType: The type of the failover address pool. This parameter is required.
         */
        public Builder failoverAddrPoolType(final com.aliyun.ros.cdk.core.IResolvable failoverAddrPoolType) {
            this.props.failoverAddrPoolType(failoverAddrPoolType);
            return this;
        }

        /**
         * Property failoverLatencyOptimization: Whether to enable latency optimization for the failover address pool.
         * <p>
         * @return {@code this}
         * @param failoverLatencyOptimization Property failoverLatencyOptimization: Whether to enable latency optimization for the failover address pool. This parameter is required.
         */
        public Builder failoverLatencyOptimization(final java.lang.String failoverLatencyOptimization) {
            this.props.failoverLatencyOptimization(failoverLatencyOptimization);
            return this;
        }
        /**
         * Property failoverLatencyOptimization: Whether to enable latency optimization for the failover address pool.
         * <p>
         * @return {@code this}
         * @param failoverLatencyOptimization Property failoverLatencyOptimization: Whether to enable latency optimization for the failover address pool. This parameter is required.
         */
        public Builder failoverLatencyOptimization(final com.aliyun.ros.cdk.core.IResolvable failoverLatencyOptimization) {
            this.props.failoverLatencyOptimization(failoverLatencyOptimization);
            return this;
        }

        /**
         * Property failoverLbaStrategy: The load balancing strategy of the failover address pool.
         * <p>
         * @return {@code this}
         * @param failoverLbaStrategy Property failoverLbaStrategy: The load balancing strategy of the failover address pool. This parameter is required.
         */
        public Builder failoverLbaStrategy(final java.lang.String failoverLbaStrategy) {
            this.props.failoverLbaStrategy(failoverLbaStrategy);
            return this;
        }
        /**
         * Property failoverLbaStrategy: The load balancing strategy of the failover address pool.
         * <p>
         * @return {@code this}
         * @param failoverLbaStrategy Property failoverLbaStrategy: The load balancing strategy of the failover address pool. This parameter is required.
         */
        public Builder failoverLbaStrategy(final com.aliyun.ros.cdk.core.IResolvable failoverLbaStrategy) {
            this.props.failoverLbaStrategy(failoverLbaStrategy);
            return this;
        }

        /**
         * Property failoverMaxReturnAddrNum: The maximum return address number of the failover address pool.
         * <p>
         * @return {@code this}
         * @param failoverMaxReturnAddrNum Property failoverMaxReturnAddrNum: The maximum return address number of the failover address pool. This parameter is required.
         */
        public Builder failoverMaxReturnAddrNum(final java.lang.Number failoverMaxReturnAddrNum) {
            this.props.failoverMaxReturnAddrNum(failoverMaxReturnAddrNum);
            return this;
        }
        /**
         * Property failoverMaxReturnAddrNum: The maximum return address number of the failover address pool.
         * <p>
         * @return {@code this}
         * @param failoverMaxReturnAddrNum Property failoverMaxReturnAddrNum: The maximum return address number of the failover address pool. This parameter is required.
         */
        public Builder failoverMaxReturnAddrNum(final com.aliyun.ros.cdk.core.IResolvable failoverMaxReturnAddrNum) {
            this.props.failoverMaxReturnAddrNum(failoverMaxReturnAddrNum);
            return this;
        }

        /**
         * Property failoverMinAvailableAddrNum: The minimum available address number of the failover address pool.
         * <p>
         * @return {@code this}
         * @param failoverMinAvailableAddrNum Property failoverMinAvailableAddrNum: The minimum available address number of the failover address pool. This parameter is required.
         */
        public Builder failoverMinAvailableAddrNum(final java.lang.Number failoverMinAvailableAddrNum) {
            this.props.failoverMinAvailableAddrNum(failoverMinAvailableAddrNum);
            return this;
        }
        /**
         * Property failoverMinAvailableAddrNum: The minimum available address number of the failover address pool.
         * <p>
         * @return {@code this}
         * @param failoverMinAvailableAddrNum Property failoverMinAvailableAddrNum: The minimum available address number of the failover address pool. This parameter is required.
         */
        public Builder failoverMinAvailableAddrNum(final com.aliyun.ros.cdk.core.IResolvable failoverMinAvailableAddrNum) {
            this.props.failoverMinAvailableAddrNum(failoverMinAvailableAddrNum);
            return this;
        }

        /**
         * Property lines: The lines of the access strategy.
         * <p>
         * @return {@code this}
         * @param lines Property lines: The lines of the access strategy. This parameter is required.
         */
        public Builder lines(final com.aliyun.ros.cdk.core.IResolvable lines) {
            this.props.lines(lines);
            return this;
        }
        /**
         * Property lines: The lines of the access strategy.
         * <p>
         * @return {@code this}
         * @param lines Property lines: The lines of the access strategy. This parameter is required.
         */
        public Builder lines(final java.util.List<? extends java.lang.Object> lines) {
            this.props.lines(lines);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.dns.AccessStrategy}.
         */
        @Override
        public com.aliyun.ros.cdk.dns.AccessStrategy build() {
            return new com.aliyun.ros.cdk.dns.AccessStrategy(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
