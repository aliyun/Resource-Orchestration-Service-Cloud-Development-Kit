package com.aliyun.ros.cdk.dns;

/**
 * Properties for defining a <code>AccessStrategy</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-accessstrategy
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T11:27:10.833Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dns.$Module.class, fqn = "@alicloud/ros-cdk-dns.AccessStrategyProps")
@software.amazon.jsii.Jsii.Proxy(AccessStrategyProps.Jsii$Proxy.class)
public interface AccessStrategyProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property defaultAddrPool: The default address pool of the access strategy.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDefaultAddrPool();

    /**
     * Property defaultAddrPoolType: The type of the default address pool.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDefaultAddrPoolType();

    /**
     * Property defaultMinAvailableAddrNum: The minimum available address number of the default address pool.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDefaultMinAvailableAddrNum();

    /**
     * Property instanceId: The ID of the Dns instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId();

    /**
     * Property strategyMode: The mode of the access strategy.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getStrategyMode();

    /**
     * Property strategyName: The name of the access strategy.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getStrategyName();

    /**
     * Property accessMode: The access mode of the access strategy.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAccessMode() {
        return null;
    }

    /**
     * Property defaultLatencyOptimization: Whether to enable latency optimization for the default address pool.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDefaultLatencyOptimization() {
        return null;
    }

    /**
     * Property defaultLbaStrategy: The load balancing strategy of the default address pool.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDefaultLbaStrategy() {
        return null;
    }

    /**
     * Property defaultMaxReturnAddrNum: The maximum return address number of the default address pool.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDefaultMaxReturnAddrNum() {
        return null;
    }

    /**
     * Property failoverAddrPool: The failover address pool of the access strategy.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFailoverAddrPool() {
        return null;
    }

    /**
     * Property failoverAddrPoolType: The type of the failover address pool.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFailoverAddrPoolType() {
        return null;
    }

    /**
     * Property failoverLatencyOptimization: Whether to enable latency optimization for the failover address pool.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFailoverLatencyOptimization() {
        return null;
    }

    /**
     * Property failoverLbaStrategy: The load balancing strategy of the failover address pool.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFailoverLbaStrategy() {
        return null;
    }

    /**
     * Property failoverMaxReturnAddrNum: The maximum return address number of the failover address pool.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFailoverMaxReturnAddrNum() {
        return null;
    }

    /**
     * Property failoverMinAvailableAddrNum: The minimum available address number of the failover address pool.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFailoverMinAvailableAddrNum() {
        return null;
    }

    /**
     * Property lines: The lines of the access strategy.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLines() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link AccessStrategyProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link AccessStrategyProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<AccessStrategyProps> {
        java.lang.Object defaultAddrPool;
        java.lang.Object defaultAddrPoolType;
        java.lang.Object defaultMinAvailableAddrNum;
        java.lang.Object instanceId;
        java.lang.Object strategyMode;
        java.lang.Object strategyName;
        java.lang.Object accessMode;
        java.lang.Object defaultLatencyOptimization;
        java.lang.Object defaultLbaStrategy;
        java.lang.Object defaultMaxReturnAddrNum;
        java.lang.Object failoverAddrPool;
        java.lang.Object failoverAddrPoolType;
        java.lang.Object failoverLatencyOptimization;
        java.lang.Object failoverLbaStrategy;
        java.lang.Object failoverMaxReturnAddrNum;
        java.lang.Object failoverMinAvailableAddrNum;
        java.lang.Object lines;

        /**
         * Sets the value of {@link AccessStrategyProps#getDefaultAddrPool}
         * @param defaultAddrPool Property defaultAddrPool: The default address pool of the access strategy. This parameter is required.
         * @return {@code this}
         */
        public Builder defaultAddrPool(com.aliyun.ros.cdk.core.IResolvable defaultAddrPool) {
            this.defaultAddrPool = defaultAddrPool;
            return this;
        }

        /**
         * Sets the value of {@link AccessStrategyProps#getDefaultAddrPool}
         * @param defaultAddrPool Property defaultAddrPool: The default address pool of the access strategy. This parameter is required.
         * @return {@code this}
         */
        public Builder defaultAddrPool(java.util.List<? extends java.lang.Object> defaultAddrPool) {
            this.defaultAddrPool = defaultAddrPool;
            return this;
        }

        /**
         * Sets the value of {@link AccessStrategyProps#getDefaultAddrPoolType}
         * @param defaultAddrPoolType Property defaultAddrPoolType: The type of the default address pool. This parameter is required.
         * @return {@code this}
         */
        public Builder defaultAddrPoolType(java.lang.String defaultAddrPoolType) {
            this.defaultAddrPoolType = defaultAddrPoolType;
            return this;
        }

        /**
         * Sets the value of {@link AccessStrategyProps#getDefaultAddrPoolType}
         * @param defaultAddrPoolType Property defaultAddrPoolType: The type of the default address pool. This parameter is required.
         * @return {@code this}
         */
        public Builder defaultAddrPoolType(com.aliyun.ros.cdk.core.IResolvable defaultAddrPoolType) {
            this.defaultAddrPoolType = defaultAddrPoolType;
            return this;
        }

        /**
         * Sets the value of {@link AccessStrategyProps#getDefaultMinAvailableAddrNum}
         * @param defaultMinAvailableAddrNum Property defaultMinAvailableAddrNum: The minimum available address number of the default address pool. This parameter is required.
         * @return {@code this}
         */
        public Builder defaultMinAvailableAddrNum(java.lang.Number defaultMinAvailableAddrNum) {
            this.defaultMinAvailableAddrNum = defaultMinAvailableAddrNum;
            return this;
        }

        /**
         * Sets the value of {@link AccessStrategyProps#getDefaultMinAvailableAddrNum}
         * @param defaultMinAvailableAddrNum Property defaultMinAvailableAddrNum: The minimum available address number of the default address pool. This parameter is required.
         * @return {@code this}
         */
        public Builder defaultMinAvailableAddrNum(com.aliyun.ros.cdk.core.IResolvable defaultMinAvailableAddrNum) {
            this.defaultMinAvailableAddrNum = defaultMinAvailableAddrNum;
            return this;
        }

        /**
         * Sets the value of {@link AccessStrategyProps#getInstanceId}
         * @param instanceId Property instanceId: The ID of the Dns instance. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link AccessStrategyProps#getInstanceId}
         * @param instanceId Property instanceId: The ID of the Dns instance. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link AccessStrategyProps#getStrategyMode}
         * @param strategyMode Property strategyMode: The mode of the access strategy. This parameter is required.
         * @return {@code this}
         */
        public Builder strategyMode(java.lang.String strategyMode) {
            this.strategyMode = strategyMode;
            return this;
        }

        /**
         * Sets the value of {@link AccessStrategyProps#getStrategyMode}
         * @param strategyMode Property strategyMode: The mode of the access strategy. This parameter is required.
         * @return {@code this}
         */
        public Builder strategyMode(com.aliyun.ros.cdk.core.IResolvable strategyMode) {
            this.strategyMode = strategyMode;
            return this;
        }

        /**
         * Sets the value of {@link AccessStrategyProps#getStrategyName}
         * @param strategyName Property strategyName: The name of the access strategy. This parameter is required.
         * @return {@code this}
         */
        public Builder strategyName(java.lang.String strategyName) {
            this.strategyName = strategyName;
            return this;
        }

        /**
         * Sets the value of {@link AccessStrategyProps#getStrategyName}
         * @param strategyName Property strategyName: The name of the access strategy. This parameter is required.
         * @return {@code this}
         */
        public Builder strategyName(com.aliyun.ros.cdk.core.IResolvable strategyName) {
            this.strategyName = strategyName;
            return this;
        }

        /**
         * Sets the value of {@link AccessStrategyProps#getAccessMode}
         * @param accessMode Property accessMode: The access mode of the access strategy.
         * @return {@code this}
         */
        public Builder accessMode(java.lang.String accessMode) {
            this.accessMode = accessMode;
            return this;
        }

        /**
         * Sets the value of {@link AccessStrategyProps#getAccessMode}
         * @param accessMode Property accessMode: The access mode of the access strategy.
         * @return {@code this}
         */
        public Builder accessMode(com.aliyun.ros.cdk.core.IResolvable accessMode) {
            this.accessMode = accessMode;
            return this;
        }

        /**
         * Sets the value of {@link AccessStrategyProps#getDefaultLatencyOptimization}
         * @param defaultLatencyOptimization Property defaultLatencyOptimization: Whether to enable latency optimization for the default address pool.
         * @return {@code this}
         */
        public Builder defaultLatencyOptimization(java.lang.String defaultLatencyOptimization) {
            this.defaultLatencyOptimization = defaultLatencyOptimization;
            return this;
        }

        /**
         * Sets the value of {@link AccessStrategyProps#getDefaultLatencyOptimization}
         * @param defaultLatencyOptimization Property defaultLatencyOptimization: Whether to enable latency optimization for the default address pool.
         * @return {@code this}
         */
        public Builder defaultLatencyOptimization(com.aliyun.ros.cdk.core.IResolvable defaultLatencyOptimization) {
            this.defaultLatencyOptimization = defaultLatencyOptimization;
            return this;
        }

        /**
         * Sets the value of {@link AccessStrategyProps#getDefaultLbaStrategy}
         * @param defaultLbaStrategy Property defaultLbaStrategy: The load balancing strategy of the default address pool.
         * @return {@code this}
         */
        public Builder defaultLbaStrategy(java.lang.String defaultLbaStrategy) {
            this.defaultLbaStrategy = defaultLbaStrategy;
            return this;
        }

        /**
         * Sets the value of {@link AccessStrategyProps#getDefaultLbaStrategy}
         * @param defaultLbaStrategy Property defaultLbaStrategy: The load balancing strategy of the default address pool.
         * @return {@code this}
         */
        public Builder defaultLbaStrategy(com.aliyun.ros.cdk.core.IResolvable defaultLbaStrategy) {
            this.defaultLbaStrategy = defaultLbaStrategy;
            return this;
        }

        /**
         * Sets the value of {@link AccessStrategyProps#getDefaultMaxReturnAddrNum}
         * @param defaultMaxReturnAddrNum Property defaultMaxReturnAddrNum: The maximum return address number of the default address pool.
         * @return {@code this}
         */
        public Builder defaultMaxReturnAddrNum(java.lang.Number defaultMaxReturnAddrNum) {
            this.defaultMaxReturnAddrNum = defaultMaxReturnAddrNum;
            return this;
        }

        /**
         * Sets the value of {@link AccessStrategyProps#getDefaultMaxReturnAddrNum}
         * @param defaultMaxReturnAddrNum Property defaultMaxReturnAddrNum: The maximum return address number of the default address pool.
         * @return {@code this}
         */
        public Builder defaultMaxReturnAddrNum(com.aliyun.ros.cdk.core.IResolvable defaultMaxReturnAddrNum) {
            this.defaultMaxReturnAddrNum = defaultMaxReturnAddrNum;
            return this;
        }

        /**
         * Sets the value of {@link AccessStrategyProps#getFailoverAddrPool}
         * @param failoverAddrPool Property failoverAddrPool: The failover address pool of the access strategy.
         * @return {@code this}
         */
        public Builder failoverAddrPool(com.aliyun.ros.cdk.core.IResolvable failoverAddrPool) {
            this.failoverAddrPool = failoverAddrPool;
            return this;
        }

        /**
         * Sets the value of {@link AccessStrategyProps#getFailoverAddrPool}
         * @param failoverAddrPool Property failoverAddrPool: The failover address pool of the access strategy.
         * @return {@code this}
         */
        public Builder failoverAddrPool(java.util.List<? extends java.lang.Object> failoverAddrPool) {
            this.failoverAddrPool = failoverAddrPool;
            return this;
        }

        /**
         * Sets the value of {@link AccessStrategyProps#getFailoverAddrPoolType}
         * @param failoverAddrPoolType Property failoverAddrPoolType: The type of the failover address pool.
         * @return {@code this}
         */
        public Builder failoverAddrPoolType(java.lang.String failoverAddrPoolType) {
            this.failoverAddrPoolType = failoverAddrPoolType;
            return this;
        }

        /**
         * Sets the value of {@link AccessStrategyProps#getFailoverAddrPoolType}
         * @param failoverAddrPoolType Property failoverAddrPoolType: The type of the failover address pool.
         * @return {@code this}
         */
        public Builder failoverAddrPoolType(com.aliyun.ros.cdk.core.IResolvable failoverAddrPoolType) {
            this.failoverAddrPoolType = failoverAddrPoolType;
            return this;
        }

        /**
         * Sets the value of {@link AccessStrategyProps#getFailoverLatencyOptimization}
         * @param failoverLatencyOptimization Property failoverLatencyOptimization: Whether to enable latency optimization for the failover address pool.
         * @return {@code this}
         */
        public Builder failoverLatencyOptimization(java.lang.String failoverLatencyOptimization) {
            this.failoverLatencyOptimization = failoverLatencyOptimization;
            return this;
        }

        /**
         * Sets the value of {@link AccessStrategyProps#getFailoverLatencyOptimization}
         * @param failoverLatencyOptimization Property failoverLatencyOptimization: Whether to enable latency optimization for the failover address pool.
         * @return {@code this}
         */
        public Builder failoverLatencyOptimization(com.aliyun.ros.cdk.core.IResolvable failoverLatencyOptimization) {
            this.failoverLatencyOptimization = failoverLatencyOptimization;
            return this;
        }

        /**
         * Sets the value of {@link AccessStrategyProps#getFailoverLbaStrategy}
         * @param failoverLbaStrategy Property failoverLbaStrategy: The load balancing strategy of the failover address pool.
         * @return {@code this}
         */
        public Builder failoverLbaStrategy(java.lang.String failoverLbaStrategy) {
            this.failoverLbaStrategy = failoverLbaStrategy;
            return this;
        }

        /**
         * Sets the value of {@link AccessStrategyProps#getFailoverLbaStrategy}
         * @param failoverLbaStrategy Property failoverLbaStrategy: The load balancing strategy of the failover address pool.
         * @return {@code this}
         */
        public Builder failoverLbaStrategy(com.aliyun.ros.cdk.core.IResolvable failoverLbaStrategy) {
            this.failoverLbaStrategy = failoverLbaStrategy;
            return this;
        }

        /**
         * Sets the value of {@link AccessStrategyProps#getFailoverMaxReturnAddrNum}
         * @param failoverMaxReturnAddrNum Property failoverMaxReturnAddrNum: The maximum return address number of the failover address pool.
         * @return {@code this}
         */
        public Builder failoverMaxReturnAddrNum(java.lang.Number failoverMaxReturnAddrNum) {
            this.failoverMaxReturnAddrNum = failoverMaxReturnAddrNum;
            return this;
        }

        /**
         * Sets the value of {@link AccessStrategyProps#getFailoverMaxReturnAddrNum}
         * @param failoverMaxReturnAddrNum Property failoverMaxReturnAddrNum: The maximum return address number of the failover address pool.
         * @return {@code this}
         */
        public Builder failoverMaxReturnAddrNum(com.aliyun.ros.cdk.core.IResolvable failoverMaxReturnAddrNum) {
            this.failoverMaxReturnAddrNum = failoverMaxReturnAddrNum;
            return this;
        }

        /**
         * Sets the value of {@link AccessStrategyProps#getFailoverMinAvailableAddrNum}
         * @param failoverMinAvailableAddrNum Property failoverMinAvailableAddrNum: The minimum available address number of the failover address pool.
         * @return {@code this}
         */
        public Builder failoverMinAvailableAddrNum(java.lang.Number failoverMinAvailableAddrNum) {
            this.failoverMinAvailableAddrNum = failoverMinAvailableAddrNum;
            return this;
        }

        /**
         * Sets the value of {@link AccessStrategyProps#getFailoverMinAvailableAddrNum}
         * @param failoverMinAvailableAddrNum Property failoverMinAvailableAddrNum: The minimum available address number of the failover address pool.
         * @return {@code this}
         */
        public Builder failoverMinAvailableAddrNum(com.aliyun.ros.cdk.core.IResolvable failoverMinAvailableAddrNum) {
            this.failoverMinAvailableAddrNum = failoverMinAvailableAddrNum;
            return this;
        }

        /**
         * Sets the value of {@link AccessStrategyProps#getLines}
         * @param lines Property lines: The lines of the access strategy.
         * @return {@code this}
         */
        public Builder lines(com.aliyun.ros.cdk.core.IResolvable lines) {
            this.lines = lines;
            return this;
        }

        /**
         * Sets the value of {@link AccessStrategyProps#getLines}
         * @param lines Property lines: The lines of the access strategy.
         * @return {@code this}
         */
        public Builder lines(java.util.List<? extends java.lang.Object> lines) {
            this.lines = lines;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link AccessStrategyProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public AccessStrategyProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link AccessStrategyProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AccessStrategyProps {
        private final java.lang.Object defaultAddrPool;
        private final java.lang.Object defaultAddrPoolType;
        private final java.lang.Object defaultMinAvailableAddrNum;
        private final java.lang.Object instanceId;
        private final java.lang.Object strategyMode;
        private final java.lang.Object strategyName;
        private final java.lang.Object accessMode;
        private final java.lang.Object defaultLatencyOptimization;
        private final java.lang.Object defaultLbaStrategy;
        private final java.lang.Object defaultMaxReturnAddrNum;
        private final java.lang.Object failoverAddrPool;
        private final java.lang.Object failoverAddrPoolType;
        private final java.lang.Object failoverLatencyOptimization;
        private final java.lang.Object failoverLbaStrategy;
        private final java.lang.Object failoverMaxReturnAddrNum;
        private final java.lang.Object failoverMinAvailableAddrNum;
        private final java.lang.Object lines;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.defaultAddrPool = software.amazon.jsii.Kernel.get(this, "defaultAddrPool", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.defaultAddrPoolType = software.amazon.jsii.Kernel.get(this, "defaultAddrPoolType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.defaultMinAvailableAddrNum = software.amazon.jsii.Kernel.get(this, "defaultMinAvailableAddrNum", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.strategyMode = software.amazon.jsii.Kernel.get(this, "strategyMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.strategyName = software.amazon.jsii.Kernel.get(this, "strategyName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.accessMode = software.amazon.jsii.Kernel.get(this, "accessMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.defaultLatencyOptimization = software.amazon.jsii.Kernel.get(this, "defaultLatencyOptimization", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.defaultLbaStrategy = software.amazon.jsii.Kernel.get(this, "defaultLbaStrategy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.defaultMaxReturnAddrNum = software.amazon.jsii.Kernel.get(this, "defaultMaxReturnAddrNum", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.failoverAddrPool = software.amazon.jsii.Kernel.get(this, "failoverAddrPool", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.failoverAddrPoolType = software.amazon.jsii.Kernel.get(this, "failoverAddrPoolType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.failoverLatencyOptimization = software.amazon.jsii.Kernel.get(this, "failoverLatencyOptimization", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.failoverLbaStrategy = software.amazon.jsii.Kernel.get(this, "failoverLbaStrategy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.failoverMaxReturnAddrNum = software.amazon.jsii.Kernel.get(this, "failoverMaxReturnAddrNum", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.failoverMinAvailableAddrNum = software.amazon.jsii.Kernel.get(this, "failoverMinAvailableAddrNum", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.lines = software.amazon.jsii.Kernel.get(this, "lines", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.defaultAddrPool = java.util.Objects.requireNonNull(builder.defaultAddrPool, "defaultAddrPool is required");
            this.defaultAddrPoolType = java.util.Objects.requireNonNull(builder.defaultAddrPoolType, "defaultAddrPoolType is required");
            this.defaultMinAvailableAddrNum = java.util.Objects.requireNonNull(builder.defaultMinAvailableAddrNum, "defaultMinAvailableAddrNum is required");
            this.instanceId = java.util.Objects.requireNonNull(builder.instanceId, "instanceId is required");
            this.strategyMode = java.util.Objects.requireNonNull(builder.strategyMode, "strategyMode is required");
            this.strategyName = java.util.Objects.requireNonNull(builder.strategyName, "strategyName is required");
            this.accessMode = builder.accessMode;
            this.defaultLatencyOptimization = builder.defaultLatencyOptimization;
            this.defaultLbaStrategy = builder.defaultLbaStrategy;
            this.defaultMaxReturnAddrNum = builder.defaultMaxReturnAddrNum;
            this.failoverAddrPool = builder.failoverAddrPool;
            this.failoverAddrPoolType = builder.failoverAddrPoolType;
            this.failoverLatencyOptimization = builder.failoverLatencyOptimization;
            this.failoverLbaStrategy = builder.failoverLbaStrategy;
            this.failoverMaxReturnAddrNum = builder.failoverMaxReturnAddrNum;
            this.failoverMinAvailableAddrNum = builder.failoverMinAvailableAddrNum;
            this.lines = builder.lines;
        }

        @Override
        public final java.lang.Object getDefaultAddrPool() {
            return this.defaultAddrPool;
        }

        @Override
        public final java.lang.Object getDefaultAddrPoolType() {
            return this.defaultAddrPoolType;
        }

        @Override
        public final java.lang.Object getDefaultMinAvailableAddrNum() {
            return this.defaultMinAvailableAddrNum;
        }

        @Override
        public final java.lang.Object getInstanceId() {
            return this.instanceId;
        }

        @Override
        public final java.lang.Object getStrategyMode() {
            return this.strategyMode;
        }

        @Override
        public final java.lang.Object getStrategyName() {
            return this.strategyName;
        }

        @Override
        public final java.lang.Object getAccessMode() {
            return this.accessMode;
        }

        @Override
        public final java.lang.Object getDefaultLatencyOptimization() {
            return this.defaultLatencyOptimization;
        }

        @Override
        public final java.lang.Object getDefaultLbaStrategy() {
            return this.defaultLbaStrategy;
        }

        @Override
        public final java.lang.Object getDefaultMaxReturnAddrNum() {
            return this.defaultMaxReturnAddrNum;
        }

        @Override
        public final java.lang.Object getFailoverAddrPool() {
            return this.failoverAddrPool;
        }

        @Override
        public final java.lang.Object getFailoverAddrPoolType() {
            return this.failoverAddrPoolType;
        }

        @Override
        public final java.lang.Object getFailoverLatencyOptimization() {
            return this.failoverLatencyOptimization;
        }

        @Override
        public final java.lang.Object getFailoverLbaStrategy() {
            return this.failoverLbaStrategy;
        }

        @Override
        public final java.lang.Object getFailoverMaxReturnAddrNum() {
            return this.failoverMaxReturnAddrNum;
        }

        @Override
        public final java.lang.Object getFailoverMinAvailableAddrNum() {
            return this.failoverMinAvailableAddrNum;
        }

        @Override
        public final java.lang.Object getLines() {
            return this.lines;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("defaultAddrPool", om.valueToTree(this.getDefaultAddrPool()));
            data.set("defaultAddrPoolType", om.valueToTree(this.getDefaultAddrPoolType()));
            data.set("defaultMinAvailableAddrNum", om.valueToTree(this.getDefaultMinAvailableAddrNum()));
            data.set("instanceId", om.valueToTree(this.getInstanceId()));
            data.set("strategyMode", om.valueToTree(this.getStrategyMode()));
            data.set("strategyName", om.valueToTree(this.getStrategyName()));
            if (this.getAccessMode() != null) {
                data.set("accessMode", om.valueToTree(this.getAccessMode()));
            }
            if (this.getDefaultLatencyOptimization() != null) {
                data.set("defaultLatencyOptimization", om.valueToTree(this.getDefaultLatencyOptimization()));
            }
            if (this.getDefaultLbaStrategy() != null) {
                data.set("defaultLbaStrategy", om.valueToTree(this.getDefaultLbaStrategy()));
            }
            if (this.getDefaultMaxReturnAddrNum() != null) {
                data.set("defaultMaxReturnAddrNum", om.valueToTree(this.getDefaultMaxReturnAddrNum()));
            }
            if (this.getFailoverAddrPool() != null) {
                data.set("failoverAddrPool", om.valueToTree(this.getFailoverAddrPool()));
            }
            if (this.getFailoverAddrPoolType() != null) {
                data.set("failoverAddrPoolType", om.valueToTree(this.getFailoverAddrPoolType()));
            }
            if (this.getFailoverLatencyOptimization() != null) {
                data.set("failoverLatencyOptimization", om.valueToTree(this.getFailoverLatencyOptimization()));
            }
            if (this.getFailoverLbaStrategy() != null) {
                data.set("failoverLbaStrategy", om.valueToTree(this.getFailoverLbaStrategy()));
            }
            if (this.getFailoverMaxReturnAddrNum() != null) {
                data.set("failoverMaxReturnAddrNum", om.valueToTree(this.getFailoverMaxReturnAddrNum()));
            }
            if (this.getFailoverMinAvailableAddrNum() != null) {
                data.set("failoverMinAvailableAddrNum", om.valueToTree(this.getFailoverMinAvailableAddrNum()));
            }
            if (this.getLines() != null) {
                data.set("lines", om.valueToTree(this.getLines()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-dns.AccessStrategyProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            AccessStrategyProps.Jsii$Proxy that = (AccessStrategyProps.Jsii$Proxy) o;

            if (!defaultAddrPool.equals(that.defaultAddrPool)) return false;
            if (!defaultAddrPoolType.equals(that.defaultAddrPoolType)) return false;
            if (!defaultMinAvailableAddrNum.equals(that.defaultMinAvailableAddrNum)) return false;
            if (!instanceId.equals(that.instanceId)) return false;
            if (!strategyMode.equals(that.strategyMode)) return false;
            if (!strategyName.equals(that.strategyName)) return false;
            if (this.accessMode != null ? !this.accessMode.equals(that.accessMode) : that.accessMode != null) return false;
            if (this.defaultLatencyOptimization != null ? !this.defaultLatencyOptimization.equals(that.defaultLatencyOptimization) : that.defaultLatencyOptimization != null) return false;
            if (this.defaultLbaStrategy != null ? !this.defaultLbaStrategy.equals(that.defaultLbaStrategy) : that.defaultLbaStrategy != null) return false;
            if (this.defaultMaxReturnAddrNum != null ? !this.defaultMaxReturnAddrNum.equals(that.defaultMaxReturnAddrNum) : that.defaultMaxReturnAddrNum != null) return false;
            if (this.failoverAddrPool != null ? !this.failoverAddrPool.equals(that.failoverAddrPool) : that.failoverAddrPool != null) return false;
            if (this.failoverAddrPoolType != null ? !this.failoverAddrPoolType.equals(that.failoverAddrPoolType) : that.failoverAddrPoolType != null) return false;
            if (this.failoverLatencyOptimization != null ? !this.failoverLatencyOptimization.equals(that.failoverLatencyOptimization) : that.failoverLatencyOptimization != null) return false;
            if (this.failoverLbaStrategy != null ? !this.failoverLbaStrategy.equals(that.failoverLbaStrategy) : that.failoverLbaStrategy != null) return false;
            if (this.failoverMaxReturnAddrNum != null ? !this.failoverMaxReturnAddrNum.equals(that.failoverMaxReturnAddrNum) : that.failoverMaxReturnAddrNum != null) return false;
            if (this.failoverMinAvailableAddrNum != null ? !this.failoverMinAvailableAddrNum.equals(that.failoverMinAvailableAddrNum) : that.failoverMinAvailableAddrNum != null) return false;
            return this.lines != null ? this.lines.equals(that.lines) : that.lines == null;
        }

        @Override
        public final int hashCode() {
            int result = this.defaultAddrPool.hashCode();
            result = 31 * result + (this.defaultAddrPoolType.hashCode());
            result = 31 * result + (this.defaultMinAvailableAddrNum.hashCode());
            result = 31 * result + (this.instanceId.hashCode());
            result = 31 * result + (this.strategyMode.hashCode());
            result = 31 * result + (this.strategyName.hashCode());
            result = 31 * result + (this.accessMode != null ? this.accessMode.hashCode() : 0);
            result = 31 * result + (this.defaultLatencyOptimization != null ? this.defaultLatencyOptimization.hashCode() : 0);
            result = 31 * result + (this.defaultLbaStrategy != null ? this.defaultLbaStrategy.hashCode() : 0);
            result = 31 * result + (this.defaultMaxReturnAddrNum != null ? this.defaultMaxReturnAddrNum.hashCode() : 0);
            result = 31 * result + (this.failoverAddrPool != null ? this.failoverAddrPool.hashCode() : 0);
            result = 31 * result + (this.failoverAddrPoolType != null ? this.failoverAddrPoolType.hashCode() : 0);
            result = 31 * result + (this.failoverLatencyOptimization != null ? this.failoverLatencyOptimization.hashCode() : 0);
            result = 31 * result + (this.failoverLbaStrategy != null ? this.failoverLbaStrategy.hashCode() : 0);
            result = 31 * result + (this.failoverMaxReturnAddrNum != null ? this.failoverMaxReturnAddrNum.hashCode() : 0);
            result = 31 * result + (this.failoverMinAvailableAddrNum != null ? this.failoverMinAvailableAddrNum.hashCode() : 0);
            result = 31 * result + (this.lines != null ? this.lines.hashCode() : 0);
            return result;
        }
    }
}
