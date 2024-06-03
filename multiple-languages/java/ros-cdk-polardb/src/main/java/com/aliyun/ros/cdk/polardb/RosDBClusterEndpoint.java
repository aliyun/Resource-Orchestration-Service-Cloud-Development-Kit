package com.aliyun.ros.cdk.polardb;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::POLARDB::DBClusterEndpoint</code>, which is used to create a custom endpoint for a PolarDB cluster.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-03T08:19:53.345Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.polardb.$Module.class, fqn = "@alicloud/ros-cdk-polardb.RosDBClusterEndpoint")
public class RosDBClusterEndpoint extends com.aliyun.ros.cdk.core.RosResource {

    protected RosDBClusterEndpoint(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosDBClusterEndpoint(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.polardb.RosDBClusterEndpoint.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosDBClusterEndpoint(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.polardb.RosDBClusterEndpointProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), java.util.Objects.requireNonNull(enableResourcePropertyConstraint, "enableResourcePropertyConstraint is required") });
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> renderProperties(final @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> props) {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.call(this, "renderProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)), new Object[] { java.util.Objects.requireNonNull(props, "props is required") }));
    }

    /**
     * The resource type name for this resource class.
     */
    public final static java.lang.String ROS_RESOURCE_TYPE_NAME;

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAddresses() {
        return software.amazon.jsii.Kernel.get(this, "attrAddresses", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrConnectionString() {
        return software.amazon.jsii.Kernel.get(this, "attrConnectionString", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDbEndpointId() {
        return software.amazon.jsii.Kernel.get(this, "attrDbEndpointId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDbClusterId() {
        return software.amazon.jsii.Kernel.get(this, "dbClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDbClusterId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "dbClusterId", java.util.Objects.requireNonNull(value, "dbClusterId is required"));
    }

    /**
     */
    public void setDbClusterId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dbClusterId", java.util.Objects.requireNonNull(value, "dbClusterId is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAutoAddNewNodes() {
        return software.amazon.jsii.Kernel.get(this, "autoAddNewNodes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAutoAddNewNodes(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "autoAddNewNodes", value);
    }

    /**
     */
    public void setAutoAddNewNodes(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "autoAddNewNodes", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEndpointConfig() {
        return software.amazon.jsii.Kernel.get(this, "endpointConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEndpointConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "endpointConfig", value);
    }

    /**
     */
    public void setEndpointConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.polardb.RosDBClusterEndpoint.EndpointConfigProperty value) {
        software.amazon.jsii.Kernel.set(this, "endpointConfig", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEndpointType() {
        return software.amazon.jsii.Kernel.get(this, "endpointType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEndpointType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "endpointType", value);
    }

    /**
     */
    public void setEndpointType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "endpointType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getNodes() {
        return software.amazon.jsii.Kernel.get(this, "nodes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setNodes(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
            }
        }
        software.amazon.jsii.Kernel.set(this, "nodes", value);
    }

    /**
     */
    public void setNodes(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "nodes", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getReadWriteMode() {
        return software.amazon.jsii.Kernel.get(this, "readWriteMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setReadWriteMode(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "readWriteMode", value);
    }

    /**
     */
    public void setReadWriteMode(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "readWriteMode", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.polardb.$Module.class, fqn = "@alicloud/ros-cdk-polardb.RosDBClusterEndpoint.EndpointConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(EndpointConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface EndpointConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getConnectionPersist() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getConsistLevel() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getConsistTimeout() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getConsistTimeoutAction() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDistributedTransaction() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEnableHtapImci() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEnableOverloadThrottle() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getLoadBalancePolicy() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMasterAcceptReads() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMaxParallelDegree() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link EndpointConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link EndpointConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<EndpointConfigProperty> {
            java.lang.Object connectionPersist;
            java.lang.Object consistLevel;
            java.lang.Object consistTimeout;
            java.lang.Object consistTimeoutAction;
            java.lang.Object distributedTransaction;
            java.lang.Object enableHtapImci;
            java.lang.Object enableOverloadThrottle;
            java.lang.Object loadBalancePolicy;
            java.lang.Object masterAcceptReads;
            java.lang.Object maxParallelDegree;

            /**
             * Sets the value of {@link EndpointConfigProperty#getConnectionPersist}
             * @param connectionPersist the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder connectionPersist(java.lang.String connectionPersist) {
                this.connectionPersist = connectionPersist;
                return this;
            }

            /**
             * Sets the value of {@link EndpointConfigProperty#getConnectionPersist}
             * @param connectionPersist the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder connectionPersist(com.aliyun.ros.cdk.core.IResolvable connectionPersist) {
                this.connectionPersist = connectionPersist;
                return this;
            }

            /**
             * Sets the value of {@link EndpointConfigProperty#getConsistLevel}
             * @param consistLevel the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder consistLevel(java.lang.String consistLevel) {
                this.consistLevel = consistLevel;
                return this;
            }

            /**
             * Sets the value of {@link EndpointConfigProperty#getConsistLevel}
             * @param consistLevel the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder consistLevel(com.aliyun.ros.cdk.core.IResolvable consistLevel) {
                this.consistLevel = consistLevel;
                return this;
            }

            /**
             * Sets the value of {@link EndpointConfigProperty#getConsistTimeout}
             * @param consistTimeout the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder consistTimeout(java.lang.String consistTimeout) {
                this.consistTimeout = consistTimeout;
                return this;
            }

            /**
             * Sets the value of {@link EndpointConfigProperty#getConsistTimeout}
             * @param consistTimeout the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder consistTimeout(com.aliyun.ros.cdk.core.IResolvable consistTimeout) {
                this.consistTimeout = consistTimeout;
                return this;
            }

            /**
             * Sets the value of {@link EndpointConfigProperty#getConsistTimeoutAction}
             * @param consistTimeoutAction the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder consistTimeoutAction(java.lang.String consistTimeoutAction) {
                this.consistTimeoutAction = consistTimeoutAction;
                return this;
            }

            /**
             * Sets the value of {@link EndpointConfigProperty#getConsistTimeoutAction}
             * @param consistTimeoutAction the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder consistTimeoutAction(com.aliyun.ros.cdk.core.IResolvable consistTimeoutAction) {
                this.consistTimeoutAction = consistTimeoutAction;
                return this;
            }

            /**
             * Sets the value of {@link EndpointConfigProperty#getDistributedTransaction}
             * @param distributedTransaction the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder distributedTransaction(java.lang.String distributedTransaction) {
                this.distributedTransaction = distributedTransaction;
                return this;
            }

            /**
             * Sets the value of {@link EndpointConfigProperty#getDistributedTransaction}
             * @param distributedTransaction the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder distributedTransaction(com.aliyun.ros.cdk.core.IResolvable distributedTransaction) {
                this.distributedTransaction = distributedTransaction;
                return this;
            }

            /**
             * Sets the value of {@link EndpointConfigProperty#getEnableHtapImci}
             * @param enableHtapImci the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enableHtapImci(java.lang.String enableHtapImci) {
                this.enableHtapImci = enableHtapImci;
                return this;
            }

            /**
             * Sets the value of {@link EndpointConfigProperty#getEnableHtapImci}
             * @param enableHtapImci the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enableHtapImci(com.aliyun.ros.cdk.core.IResolvable enableHtapImci) {
                this.enableHtapImci = enableHtapImci;
                return this;
            }

            /**
             * Sets the value of {@link EndpointConfigProperty#getEnableOverloadThrottle}
             * @param enableOverloadThrottle the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enableOverloadThrottle(java.lang.String enableOverloadThrottle) {
                this.enableOverloadThrottle = enableOverloadThrottle;
                return this;
            }

            /**
             * Sets the value of {@link EndpointConfigProperty#getEnableOverloadThrottle}
             * @param enableOverloadThrottle the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enableOverloadThrottle(com.aliyun.ros.cdk.core.IResolvable enableOverloadThrottle) {
                this.enableOverloadThrottle = enableOverloadThrottle;
                return this;
            }

            /**
             * Sets the value of {@link EndpointConfigProperty#getLoadBalancePolicy}
             * @param loadBalancePolicy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder loadBalancePolicy(java.lang.String loadBalancePolicy) {
                this.loadBalancePolicy = loadBalancePolicy;
                return this;
            }

            /**
             * Sets the value of {@link EndpointConfigProperty#getLoadBalancePolicy}
             * @param loadBalancePolicy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder loadBalancePolicy(com.aliyun.ros.cdk.core.IResolvable loadBalancePolicy) {
                this.loadBalancePolicy = loadBalancePolicy;
                return this;
            }

            /**
             * Sets the value of {@link EndpointConfigProperty#getMasterAcceptReads}
             * @param masterAcceptReads the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder masterAcceptReads(java.lang.String masterAcceptReads) {
                this.masterAcceptReads = masterAcceptReads;
                return this;
            }

            /**
             * Sets the value of {@link EndpointConfigProperty#getMasterAcceptReads}
             * @param masterAcceptReads the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder masterAcceptReads(com.aliyun.ros.cdk.core.IResolvable masterAcceptReads) {
                this.masterAcceptReads = masterAcceptReads;
                return this;
            }

            /**
             * Sets the value of {@link EndpointConfigProperty#getMaxParallelDegree}
             * @param maxParallelDegree the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder maxParallelDegree(java.lang.String maxParallelDegree) {
                this.maxParallelDegree = maxParallelDegree;
                return this;
            }

            /**
             * Sets the value of {@link EndpointConfigProperty#getMaxParallelDegree}
             * @param maxParallelDegree the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder maxParallelDegree(com.aliyun.ros.cdk.core.IResolvable maxParallelDegree) {
                this.maxParallelDegree = maxParallelDegree;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link EndpointConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public EndpointConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link EndpointConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements EndpointConfigProperty {
            private final java.lang.Object connectionPersist;
            private final java.lang.Object consistLevel;
            private final java.lang.Object consistTimeout;
            private final java.lang.Object consistTimeoutAction;
            private final java.lang.Object distributedTransaction;
            private final java.lang.Object enableHtapImci;
            private final java.lang.Object enableOverloadThrottle;
            private final java.lang.Object loadBalancePolicy;
            private final java.lang.Object masterAcceptReads;
            private final java.lang.Object maxParallelDegree;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.connectionPersist = software.amazon.jsii.Kernel.get(this, "connectionPersist", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.consistLevel = software.amazon.jsii.Kernel.get(this, "consistLevel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.consistTimeout = software.amazon.jsii.Kernel.get(this, "consistTimeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.consistTimeoutAction = software.amazon.jsii.Kernel.get(this, "consistTimeoutAction", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.distributedTransaction = software.amazon.jsii.Kernel.get(this, "distributedTransaction", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.enableHtapImci = software.amazon.jsii.Kernel.get(this, "enableHtapImci", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.enableOverloadThrottle = software.amazon.jsii.Kernel.get(this, "enableOverloadThrottle", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.loadBalancePolicy = software.amazon.jsii.Kernel.get(this, "loadBalancePolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.masterAcceptReads = software.amazon.jsii.Kernel.get(this, "masterAcceptReads", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.maxParallelDegree = software.amazon.jsii.Kernel.get(this, "maxParallelDegree", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.connectionPersist = builder.connectionPersist;
                this.consistLevel = builder.consistLevel;
                this.consistTimeout = builder.consistTimeout;
                this.consistTimeoutAction = builder.consistTimeoutAction;
                this.distributedTransaction = builder.distributedTransaction;
                this.enableHtapImci = builder.enableHtapImci;
                this.enableOverloadThrottle = builder.enableOverloadThrottle;
                this.loadBalancePolicy = builder.loadBalancePolicy;
                this.masterAcceptReads = builder.masterAcceptReads;
                this.maxParallelDegree = builder.maxParallelDegree;
            }

            @Override
            public final java.lang.Object getConnectionPersist() {
                return this.connectionPersist;
            }

            @Override
            public final java.lang.Object getConsistLevel() {
                return this.consistLevel;
            }

            @Override
            public final java.lang.Object getConsistTimeout() {
                return this.consistTimeout;
            }

            @Override
            public final java.lang.Object getConsistTimeoutAction() {
                return this.consistTimeoutAction;
            }

            @Override
            public final java.lang.Object getDistributedTransaction() {
                return this.distributedTransaction;
            }

            @Override
            public final java.lang.Object getEnableHtapImci() {
                return this.enableHtapImci;
            }

            @Override
            public final java.lang.Object getEnableOverloadThrottle() {
                return this.enableOverloadThrottle;
            }

            @Override
            public final java.lang.Object getLoadBalancePolicy() {
                return this.loadBalancePolicy;
            }

            @Override
            public final java.lang.Object getMasterAcceptReads() {
                return this.masterAcceptReads;
            }

            @Override
            public final java.lang.Object getMaxParallelDegree() {
                return this.maxParallelDegree;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getConnectionPersist() != null) {
                    data.set("connectionPersist", om.valueToTree(this.getConnectionPersist()));
                }
                if (this.getConsistLevel() != null) {
                    data.set("consistLevel", om.valueToTree(this.getConsistLevel()));
                }
                if (this.getConsistTimeout() != null) {
                    data.set("consistTimeout", om.valueToTree(this.getConsistTimeout()));
                }
                if (this.getConsistTimeoutAction() != null) {
                    data.set("consistTimeoutAction", om.valueToTree(this.getConsistTimeoutAction()));
                }
                if (this.getDistributedTransaction() != null) {
                    data.set("distributedTransaction", om.valueToTree(this.getDistributedTransaction()));
                }
                if (this.getEnableHtapImci() != null) {
                    data.set("enableHtapImci", om.valueToTree(this.getEnableHtapImci()));
                }
                if (this.getEnableOverloadThrottle() != null) {
                    data.set("enableOverloadThrottle", om.valueToTree(this.getEnableOverloadThrottle()));
                }
                if (this.getLoadBalancePolicy() != null) {
                    data.set("loadBalancePolicy", om.valueToTree(this.getLoadBalancePolicy()));
                }
                if (this.getMasterAcceptReads() != null) {
                    data.set("masterAcceptReads", om.valueToTree(this.getMasterAcceptReads()));
                }
                if (this.getMaxParallelDegree() != null) {
                    data.set("maxParallelDegree", om.valueToTree(this.getMaxParallelDegree()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-polardb.RosDBClusterEndpoint.EndpointConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                EndpointConfigProperty.Jsii$Proxy that = (EndpointConfigProperty.Jsii$Proxy) o;

                if (this.connectionPersist != null ? !this.connectionPersist.equals(that.connectionPersist) : that.connectionPersist != null) return false;
                if (this.consistLevel != null ? !this.consistLevel.equals(that.consistLevel) : that.consistLevel != null) return false;
                if (this.consistTimeout != null ? !this.consistTimeout.equals(that.consistTimeout) : that.consistTimeout != null) return false;
                if (this.consistTimeoutAction != null ? !this.consistTimeoutAction.equals(that.consistTimeoutAction) : that.consistTimeoutAction != null) return false;
                if (this.distributedTransaction != null ? !this.distributedTransaction.equals(that.distributedTransaction) : that.distributedTransaction != null) return false;
                if (this.enableHtapImci != null ? !this.enableHtapImci.equals(that.enableHtapImci) : that.enableHtapImci != null) return false;
                if (this.enableOverloadThrottle != null ? !this.enableOverloadThrottle.equals(that.enableOverloadThrottle) : that.enableOverloadThrottle != null) return false;
                if (this.loadBalancePolicy != null ? !this.loadBalancePolicy.equals(that.loadBalancePolicy) : that.loadBalancePolicy != null) return false;
                if (this.masterAcceptReads != null ? !this.masterAcceptReads.equals(that.masterAcceptReads) : that.masterAcceptReads != null) return false;
                return this.maxParallelDegree != null ? this.maxParallelDegree.equals(that.maxParallelDegree) : that.maxParallelDegree == null;
            }

            @Override
            public final int hashCode() {
                int result = this.connectionPersist != null ? this.connectionPersist.hashCode() : 0;
                result = 31 * result + (this.consistLevel != null ? this.consistLevel.hashCode() : 0);
                result = 31 * result + (this.consistTimeout != null ? this.consistTimeout.hashCode() : 0);
                result = 31 * result + (this.consistTimeoutAction != null ? this.consistTimeoutAction.hashCode() : 0);
                result = 31 * result + (this.distributedTransaction != null ? this.distributedTransaction.hashCode() : 0);
                result = 31 * result + (this.enableHtapImci != null ? this.enableHtapImci.hashCode() : 0);
                result = 31 * result + (this.enableOverloadThrottle != null ? this.enableOverloadThrottle.hashCode() : 0);
                result = 31 * result + (this.loadBalancePolicy != null ? this.loadBalancePolicy.hashCode() : 0);
                result = 31 * result + (this.masterAcceptReads != null ? this.masterAcceptReads.hashCode() : 0);
                result = 31 * result + (this.maxParallelDegree != null ? this.maxParallelDegree.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.polardb.RosDBClusterEndpoint}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.polardb.RosDBClusterEndpoint> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
         * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.polardb.RosDBClusterEndpointProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.polardb.RosDBClusterEndpointProps.Builder();
        }

        /**
         * @return {@code this}
         * @param dbClusterId This parameter is required.
         */
        public Builder dbClusterId(final java.lang.String dbClusterId) {
            this.props.dbClusterId(dbClusterId);
            return this;
        }
        /**
         * @return {@code this}
         * @param dbClusterId This parameter is required.
         */
        public Builder dbClusterId(final com.aliyun.ros.cdk.core.IResolvable dbClusterId) {
            this.props.dbClusterId(dbClusterId);
            return this;
        }

        /**
         * @return {@code this}
         * @param autoAddNewNodes This parameter is required.
         */
        public Builder autoAddNewNodes(final java.lang.String autoAddNewNodes) {
            this.props.autoAddNewNodes(autoAddNewNodes);
            return this;
        }
        /**
         * @return {@code this}
         * @param autoAddNewNodes This parameter is required.
         */
        public Builder autoAddNewNodes(final com.aliyun.ros.cdk.core.IResolvable autoAddNewNodes) {
            this.props.autoAddNewNodes(autoAddNewNodes);
            return this;
        }

        /**
         * @return {@code this}
         * @param endpointConfig This parameter is required.
         */
        public Builder endpointConfig(final com.aliyun.ros.cdk.core.IResolvable endpointConfig) {
            this.props.endpointConfig(endpointConfig);
            return this;
        }
        /**
         * @return {@code this}
         * @param endpointConfig This parameter is required.
         */
        public Builder endpointConfig(final com.aliyun.ros.cdk.polardb.RosDBClusterEndpoint.EndpointConfigProperty endpointConfig) {
            this.props.endpointConfig(endpointConfig);
            return this;
        }

        /**
         * @return {@code this}
         * @param endpointType This parameter is required.
         */
        public Builder endpointType(final java.lang.String endpointType) {
            this.props.endpointType(endpointType);
            return this;
        }
        /**
         * @return {@code this}
         * @param endpointType This parameter is required.
         */
        public Builder endpointType(final com.aliyun.ros.cdk.core.IResolvable endpointType) {
            this.props.endpointType(endpointType);
            return this;
        }

        /**
         * @return {@code this}
         * @param nodes This parameter is required.
         */
        public Builder nodes(final java.util.List<? extends java.lang.Object> nodes) {
            this.props.nodes(nodes);
            return this;
        }
        /**
         * @return {@code this}
         * @param nodes This parameter is required.
         */
        public Builder nodes(final com.aliyun.ros.cdk.core.IResolvable nodes) {
            this.props.nodes(nodes);
            return this;
        }

        /**
         * @return {@code this}
         * @param readWriteMode This parameter is required.
         */
        public Builder readWriteMode(final java.lang.String readWriteMode) {
            this.props.readWriteMode(readWriteMode);
            return this;
        }
        /**
         * @return {@code this}
         * @param readWriteMode This parameter is required.
         */
        public Builder readWriteMode(final com.aliyun.ros.cdk.core.IResolvable readWriteMode) {
            this.props.readWriteMode(readWriteMode);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.polardb.RosDBClusterEndpoint}.
         */
        @Override
        public com.aliyun.ros.cdk.polardb.RosDBClusterEndpoint build() {
            return new com.aliyun.ros.cdk.polardb.RosDBClusterEndpoint(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
