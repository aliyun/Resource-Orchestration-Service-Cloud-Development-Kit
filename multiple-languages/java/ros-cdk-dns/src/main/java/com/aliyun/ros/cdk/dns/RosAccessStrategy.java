package com.aliyun.ros.cdk.dns;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::DNS::AccessStrategy</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T11:27:10.887Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dns.$Module.class, fqn = "@alicloud/ros-cdk-dns.RosAccessStrategy")
public class RosAccessStrategy extends com.aliyun.ros.cdk.core.RosResource {

    protected RosAccessStrategy(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosAccessStrategy(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.dns.RosAccessStrategy.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosAccessStrategy(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dns.RosAccessStrategyProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrStrategyId() {
        return software.amazon.jsii.Kernel.get(this, "attrStrategyId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDefaultAddrPool() {
        return software.amazon.jsii.Kernel.get(this, "defaultAddrPool", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDefaultAddrPool(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "defaultAddrPool", java.util.Objects.requireNonNull(value, "defaultAddrPool is required"));
    }

    /**
     */
    public void setDefaultAddrPool(final @org.jetbrains.annotations.NotNull java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.dns.RosAccessStrategy.DefaultAddrPoolProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.dns.RosAccessStrategy.DefaultAddrPoolProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "defaultAddrPool", java.util.Objects.requireNonNull(value, "defaultAddrPool is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDefaultAddrPoolType() {
        return software.amazon.jsii.Kernel.get(this, "defaultAddrPoolType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDefaultAddrPoolType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "defaultAddrPoolType", java.util.Objects.requireNonNull(value, "defaultAddrPoolType is required"));
    }

    /**
     */
    public void setDefaultAddrPoolType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "defaultAddrPoolType", java.util.Objects.requireNonNull(value, "defaultAddrPoolType is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDefaultMinAvailableAddrNum() {
        return software.amazon.jsii.Kernel.get(this, "defaultMinAvailableAddrNum", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDefaultMinAvailableAddrNum(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "defaultMinAvailableAddrNum", java.util.Objects.requireNonNull(value, "defaultMinAvailableAddrNum is required"));
    }

    /**
     */
    public void setDefaultMinAvailableAddrNum(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "defaultMinAvailableAddrNum", java.util.Objects.requireNonNull(value, "defaultMinAvailableAddrNum is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setInstanceId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "instanceId", java.util.Objects.requireNonNull(value, "instanceId is required"));
    }

    /**
     */
    public void setInstanceId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "instanceId", java.util.Objects.requireNonNull(value, "instanceId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getStrategyMode() {
        return software.amazon.jsii.Kernel.get(this, "strategyMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setStrategyMode(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "strategyMode", java.util.Objects.requireNonNull(value, "strategyMode is required"));
    }

    /**
     */
    public void setStrategyMode(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "strategyMode", java.util.Objects.requireNonNull(value, "strategyMode is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getStrategyName() {
        return software.amazon.jsii.Kernel.get(this, "strategyName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setStrategyName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "strategyName", java.util.Objects.requireNonNull(value, "strategyName is required"));
    }

    /**
     */
    public void setStrategyName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "strategyName", java.util.Objects.requireNonNull(value, "strategyName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAccessMode() {
        return software.amazon.jsii.Kernel.get(this, "accessMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAccessMode(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "accessMode", value);
    }

    /**
     */
    public void setAccessMode(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "accessMode", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDefaultLatencyOptimization() {
        return software.amazon.jsii.Kernel.get(this, "defaultLatencyOptimization", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDefaultLatencyOptimization(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "defaultLatencyOptimization", value);
    }

    /**
     */
    public void setDefaultLatencyOptimization(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "defaultLatencyOptimization", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDefaultLbaStrategy() {
        return software.amazon.jsii.Kernel.get(this, "defaultLbaStrategy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDefaultLbaStrategy(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "defaultLbaStrategy", value);
    }

    /**
     */
    public void setDefaultLbaStrategy(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "defaultLbaStrategy", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDefaultMaxReturnAddrNum() {
        return software.amazon.jsii.Kernel.get(this, "defaultMaxReturnAddrNum", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDefaultMaxReturnAddrNum(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "defaultMaxReturnAddrNum", value);
    }

    /**
     */
    public void setDefaultMaxReturnAddrNum(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "defaultMaxReturnAddrNum", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getFailoverAddrPool() {
        return software.amazon.jsii.Kernel.get(this, "failoverAddrPool", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setFailoverAddrPool(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "failoverAddrPool", value);
    }

    /**
     */
    public void setFailoverAddrPool(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.dns.RosAccessStrategy.FailoverAddrPoolProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.dns.RosAccessStrategy.FailoverAddrPoolProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "failoverAddrPool", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getFailoverAddrPoolType() {
        return software.amazon.jsii.Kernel.get(this, "failoverAddrPoolType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setFailoverAddrPoolType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "failoverAddrPoolType", value);
    }

    /**
     */
    public void setFailoverAddrPoolType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "failoverAddrPoolType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getFailoverLatencyOptimization() {
        return software.amazon.jsii.Kernel.get(this, "failoverLatencyOptimization", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setFailoverLatencyOptimization(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "failoverLatencyOptimization", value);
    }

    /**
     */
    public void setFailoverLatencyOptimization(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "failoverLatencyOptimization", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getFailoverLbaStrategy() {
        return software.amazon.jsii.Kernel.get(this, "failoverLbaStrategy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setFailoverLbaStrategy(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "failoverLbaStrategy", value);
    }

    /**
     */
    public void setFailoverLbaStrategy(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "failoverLbaStrategy", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getFailoverMaxReturnAddrNum() {
        return software.amazon.jsii.Kernel.get(this, "failoverMaxReturnAddrNum", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setFailoverMaxReturnAddrNum(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "failoverMaxReturnAddrNum", value);
    }

    /**
     */
    public void setFailoverMaxReturnAddrNum(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "failoverMaxReturnAddrNum", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getFailoverMinAvailableAddrNum() {
        return software.amazon.jsii.Kernel.get(this, "failoverMinAvailableAddrNum", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setFailoverMinAvailableAddrNum(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "failoverMinAvailableAddrNum", value);
    }

    /**
     */
    public void setFailoverMinAvailableAddrNum(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "failoverMinAvailableAddrNum", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getLines() {
        return software.amazon.jsii.Kernel.get(this, "lines", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLines(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "lines", value);
    }

    /**
     */
    public void setLines(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof java.lang.String)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IResolvable; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "lines", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dns.$Module.class, fqn = "@alicloud/ros-cdk-dns.RosAccessStrategy.DefaultAddrPoolProperty")
    @software.amazon.jsii.Jsii.Proxy(DefaultAddrPoolProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface DefaultAddrPoolProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIdentity() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getLbaWeight() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link DefaultAddrPoolProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link DefaultAddrPoolProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<DefaultAddrPoolProperty> {
            java.lang.Object identity;
            java.lang.Object lbaWeight;

            /**
             * Sets the value of {@link DefaultAddrPoolProperty#getIdentity}
             * @param identity the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder identity(java.lang.String identity) {
                this.identity = identity;
                return this;
            }

            /**
             * Sets the value of {@link DefaultAddrPoolProperty#getIdentity}
             * @param identity the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder identity(com.aliyun.ros.cdk.core.IResolvable identity) {
                this.identity = identity;
                return this;
            }

            /**
             * Sets the value of {@link DefaultAddrPoolProperty#getLbaWeight}
             * @param lbaWeight the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder lbaWeight(java.lang.Number lbaWeight) {
                this.lbaWeight = lbaWeight;
                return this;
            }

            /**
             * Sets the value of {@link DefaultAddrPoolProperty#getLbaWeight}
             * @param lbaWeight the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder lbaWeight(com.aliyun.ros.cdk.core.IResolvable lbaWeight) {
                this.lbaWeight = lbaWeight;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link DefaultAddrPoolProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public DefaultAddrPoolProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link DefaultAddrPoolProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DefaultAddrPoolProperty {
            private final java.lang.Object identity;
            private final java.lang.Object lbaWeight;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.identity = software.amazon.jsii.Kernel.get(this, "identity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.lbaWeight = software.amazon.jsii.Kernel.get(this, "lbaWeight", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.identity = builder.identity;
                this.lbaWeight = builder.lbaWeight;
            }

            @Override
            public final java.lang.Object getIdentity() {
                return this.identity;
            }

            @Override
            public final java.lang.Object getLbaWeight() {
                return this.lbaWeight;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getIdentity() != null) {
                    data.set("identity", om.valueToTree(this.getIdentity()));
                }
                if (this.getLbaWeight() != null) {
                    data.set("lbaWeight", om.valueToTree(this.getLbaWeight()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-dns.RosAccessStrategy.DefaultAddrPoolProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                DefaultAddrPoolProperty.Jsii$Proxy that = (DefaultAddrPoolProperty.Jsii$Proxy) o;

                if (this.identity != null ? !this.identity.equals(that.identity) : that.identity != null) return false;
                return this.lbaWeight != null ? this.lbaWeight.equals(that.lbaWeight) : that.lbaWeight == null;
            }

            @Override
            public final int hashCode() {
                int result = this.identity != null ? this.identity.hashCode() : 0;
                result = 31 * result + (this.lbaWeight != null ? this.lbaWeight.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dns.$Module.class, fqn = "@alicloud/ros-cdk-dns.RosAccessStrategy.FailoverAddrPoolProperty")
    @software.amazon.jsii.Jsii.Proxy(FailoverAddrPoolProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface FailoverAddrPoolProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIdentity() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getLbaWeight() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link FailoverAddrPoolProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link FailoverAddrPoolProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<FailoverAddrPoolProperty> {
            java.lang.Object identity;
            java.lang.Object lbaWeight;

            /**
             * Sets the value of {@link FailoverAddrPoolProperty#getIdentity}
             * @param identity the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder identity(java.lang.String identity) {
                this.identity = identity;
                return this;
            }

            /**
             * Sets the value of {@link FailoverAddrPoolProperty#getIdentity}
             * @param identity the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder identity(com.aliyun.ros.cdk.core.IResolvable identity) {
                this.identity = identity;
                return this;
            }

            /**
             * Sets the value of {@link FailoverAddrPoolProperty#getLbaWeight}
             * @param lbaWeight the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder lbaWeight(java.lang.Number lbaWeight) {
                this.lbaWeight = lbaWeight;
                return this;
            }

            /**
             * Sets the value of {@link FailoverAddrPoolProperty#getLbaWeight}
             * @param lbaWeight the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder lbaWeight(com.aliyun.ros.cdk.core.IResolvable lbaWeight) {
                this.lbaWeight = lbaWeight;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link FailoverAddrPoolProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public FailoverAddrPoolProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link FailoverAddrPoolProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements FailoverAddrPoolProperty {
            private final java.lang.Object identity;
            private final java.lang.Object lbaWeight;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.identity = software.amazon.jsii.Kernel.get(this, "identity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.lbaWeight = software.amazon.jsii.Kernel.get(this, "lbaWeight", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.identity = builder.identity;
                this.lbaWeight = builder.lbaWeight;
            }

            @Override
            public final java.lang.Object getIdentity() {
                return this.identity;
            }

            @Override
            public final java.lang.Object getLbaWeight() {
                return this.lbaWeight;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getIdentity() != null) {
                    data.set("identity", om.valueToTree(this.getIdentity()));
                }
                if (this.getLbaWeight() != null) {
                    data.set("lbaWeight", om.valueToTree(this.getLbaWeight()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-dns.RosAccessStrategy.FailoverAddrPoolProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                FailoverAddrPoolProperty.Jsii$Proxy that = (FailoverAddrPoolProperty.Jsii$Proxy) o;

                if (this.identity != null ? !this.identity.equals(that.identity) : that.identity != null) return false;
                return this.lbaWeight != null ? this.lbaWeight.equals(that.lbaWeight) : that.lbaWeight == null;
            }

            @Override
            public final int hashCode() {
                int result = this.identity != null ? this.identity.hashCode() : 0;
                result = 31 * result + (this.lbaWeight != null ? this.lbaWeight.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.dns.RosAccessStrategy}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.dns.RosAccessStrategy> {
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
        private final com.aliyun.ros.cdk.dns.RosAccessStrategyProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.dns.RosAccessStrategyProps.Builder();
        }

        /**
         * @return {@code this}
         * @param defaultAddrPool This parameter is required.
         */
        public Builder defaultAddrPool(final com.aliyun.ros.cdk.core.IResolvable defaultAddrPool) {
            this.props.defaultAddrPool(defaultAddrPool);
            return this;
        }
        /**
         * @return {@code this}
         * @param defaultAddrPool This parameter is required.
         */
        public Builder defaultAddrPool(final java.util.List<? extends java.lang.Object> defaultAddrPool) {
            this.props.defaultAddrPool(defaultAddrPool);
            return this;
        }

        /**
         * @return {@code this}
         * @param defaultAddrPoolType This parameter is required.
         */
        public Builder defaultAddrPoolType(final java.lang.String defaultAddrPoolType) {
            this.props.defaultAddrPoolType(defaultAddrPoolType);
            return this;
        }
        /**
         * @return {@code this}
         * @param defaultAddrPoolType This parameter is required.
         */
        public Builder defaultAddrPoolType(final com.aliyun.ros.cdk.core.IResolvable defaultAddrPoolType) {
            this.props.defaultAddrPoolType(defaultAddrPoolType);
            return this;
        }

        /**
         * @return {@code this}
         * @param defaultMinAvailableAddrNum This parameter is required.
         */
        public Builder defaultMinAvailableAddrNum(final java.lang.Number defaultMinAvailableAddrNum) {
            this.props.defaultMinAvailableAddrNum(defaultMinAvailableAddrNum);
            return this;
        }
        /**
         * @return {@code this}
         * @param defaultMinAvailableAddrNum This parameter is required.
         */
        public Builder defaultMinAvailableAddrNum(final com.aliyun.ros.cdk.core.IResolvable defaultMinAvailableAddrNum) {
            this.props.defaultMinAvailableAddrNum(defaultMinAvailableAddrNum);
            return this;
        }

        /**
         * @return {@code this}
         * @param instanceId This parameter is required.
         */
        public Builder instanceId(final java.lang.String instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }
        /**
         * @return {@code this}
         * @param instanceId This parameter is required.
         */
        public Builder instanceId(final com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }

        /**
         * @return {@code this}
         * @param strategyMode This parameter is required.
         */
        public Builder strategyMode(final java.lang.String strategyMode) {
            this.props.strategyMode(strategyMode);
            return this;
        }
        /**
         * @return {@code this}
         * @param strategyMode This parameter is required.
         */
        public Builder strategyMode(final com.aliyun.ros.cdk.core.IResolvable strategyMode) {
            this.props.strategyMode(strategyMode);
            return this;
        }

        /**
         * @return {@code this}
         * @param strategyName This parameter is required.
         */
        public Builder strategyName(final java.lang.String strategyName) {
            this.props.strategyName(strategyName);
            return this;
        }
        /**
         * @return {@code this}
         * @param strategyName This parameter is required.
         */
        public Builder strategyName(final com.aliyun.ros.cdk.core.IResolvable strategyName) {
            this.props.strategyName(strategyName);
            return this;
        }

        /**
         * @return {@code this}
         * @param accessMode This parameter is required.
         */
        public Builder accessMode(final java.lang.String accessMode) {
            this.props.accessMode(accessMode);
            return this;
        }
        /**
         * @return {@code this}
         * @param accessMode This parameter is required.
         */
        public Builder accessMode(final com.aliyun.ros.cdk.core.IResolvable accessMode) {
            this.props.accessMode(accessMode);
            return this;
        }

        /**
         * @return {@code this}
         * @param defaultLatencyOptimization This parameter is required.
         */
        public Builder defaultLatencyOptimization(final java.lang.String defaultLatencyOptimization) {
            this.props.defaultLatencyOptimization(defaultLatencyOptimization);
            return this;
        }
        /**
         * @return {@code this}
         * @param defaultLatencyOptimization This parameter is required.
         */
        public Builder defaultLatencyOptimization(final com.aliyun.ros.cdk.core.IResolvable defaultLatencyOptimization) {
            this.props.defaultLatencyOptimization(defaultLatencyOptimization);
            return this;
        }

        /**
         * @return {@code this}
         * @param defaultLbaStrategy This parameter is required.
         */
        public Builder defaultLbaStrategy(final java.lang.String defaultLbaStrategy) {
            this.props.defaultLbaStrategy(defaultLbaStrategy);
            return this;
        }
        /**
         * @return {@code this}
         * @param defaultLbaStrategy This parameter is required.
         */
        public Builder defaultLbaStrategy(final com.aliyun.ros.cdk.core.IResolvable defaultLbaStrategy) {
            this.props.defaultLbaStrategy(defaultLbaStrategy);
            return this;
        }

        /**
         * @return {@code this}
         * @param defaultMaxReturnAddrNum This parameter is required.
         */
        public Builder defaultMaxReturnAddrNum(final java.lang.Number defaultMaxReturnAddrNum) {
            this.props.defaultMaxReturnAddrNum(defaultMaxReturnAddrNum);
            return this;
        }
        /**
         * @return {@code this}
         * @param defaultMaxReturnAddrNum This parameter is required.
         */
        public Builder defaultMaxReturnAddrNum(final com.aliyun.ros.cdk.core.IResolvable defaultMaxReturnAddrNum) {
            this.props.defaultMaxReturnAddrNum(defaultMaxReturnAddrNum);
            return this;
        }

        /**
         * @return {@code this}
         * @param failoverAddrPool This parameter is required.
         */
        public Builder failoverAddrPool(final com.aliyun.ros.cdk.core.IResolvable failoverAddrPool) {
            this.props.failoverAddrPool(failoverAddrPool);
            return this;
        }
        /**
         * @return {@code this}
         * @param failoverAddrPool This parameter is required.
         */
        public Builder failoverAddrPool(final java.util.List<? extends java.lang.Object> failoverAddrPool) {
            this.props.failoverAddrPool(failoverAddrPool);
            return this;
        }

        /**
         * @return {@code this}
         * @param failoverAddrPoolType This parameter is required.
         */
        public Builder failoverAddrPoolType(final java.lang.String failoverAddrPoolType) {
            this.props.failoverAddrPoolType(failoverAddrPoolType);
            return this;
        }
        /**
         * @return {@code this}
         * @param failoverAddrPoolType This parameter is required.
         */
        public Builder failoverAddrPoolType(final com.aliyun.ros.cdk.core.IResolvable failoverAddrPoolType) {
            this.props.failoverAddrPoolType(failoverAddrPoolType);
            return this;
        }

        /**
         * @return {@code this}
         * @param failoverLatencyOptimization This parameter is required.
         */
        public Builder failoverLatencyOptimization(final java.lang.String failoverLatencyOptimization) {
            this.props.failoverLatencyOptimization(failoverLatencyOptimization);
            return this;
        }
        /**
         * @return {@code this}
         * @param failoverLatencyOptimization This parameter is required.
         */
        public Builder failoverLatencyOptimization(final com.aliyun.ros.cdk.core.IResolvable failoverLatencyOptimization) {
            this.props.failoverLatencyOptimization(failoverLatencyOptimization);
            return this;
        }

        /**
         * @return {@code this}
         * @param failoverLbaStrategy This parameter is required.
         */
        public Builder failoverLbaStrategy(final java.lang.String failoverLbaStrategy) {
            this.props.failoverLbaStrategy(failoverLbaStrategy);
            return this;
        }
        /**
         * @return {@code this}
         * @param failoverLbaStrategy This parameter is required.
         */
        public Builder failoverLbaStrategy(final com.aliyun.ros.cdk.core.IResolvable failoverLbaStrategy) {
            this.props.failoverLbaStrategy(failoverLbaStrategy);
            return this;
        }

        /**
         * @return {@code this}
         * @param failoverMaxReturnAddrNum This parameter is required.
         */
        public Builder failoverMaxReturnAddrNum(final java.lang.Number failoverMaxReturnAddrNum) {
            this.props.failoverMaxReturnAddrNum(failoverMaxReturnAddrNum);
            return this;
        }
        /**
         * @return {@code this}
         * @param failoverMaxReturnAddrNum This parameter is required.
         */
        public Builder failoverMaxReturnAddrNum(final com.aliyun.ros.cdk.core.IResolvable failoverMaxReturnAddrNum) {
            this.props.failoverMaxReturnAddrNum(failoverMaxReturnAddrNum);
            return this;
        }

        /**
         * @return {@code this}
         * @param failoverMinAvailableAddrNum This parameter is required.
         */
        public Builder failoverMinAvailableAddrNum(final java.lang.Number failoverMinAvailableAddrNum) {
            this.props.failoverMinAvailableAddrNum(failoverMinAvailableAddrNum);
            return this;
        }
        /**
         * @return {@code this}
         * @param failoverMinAvailableAddrNum This parameter is required.
         */
        public Builder failoverMinAvailableAddrNum(final com.aliyun.ros.cdk.core.IResolvable failoverMinAvailableAddrNum) {
            this.props.failoverMinAvailableAddrNum(failoverMinAvailableAddrNum);
            return this;
        }

        /**
         * @return {@code this}
         * @param lines This parameter is required.
         */
        public Builder lines(final com.aliyun.ros.cdk.core.IResolvable lines) {
            this.props.lines(lines);
            return this;
        }
        /**
         * @return {@code this}
         * @param lines This parameter is required.
         */
        public Builder lines(final java.util.List<? extends java.lang.Object> lines) {
            this.props.lines(lines);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.dns.RosAccessStrategy}.
         */
        @Override
        public com.aliyun.ros.cdk.dns.RosAccessStrategy build() {
            return new com.aliyun.ros.cdk.dns.RosAccessStrategy(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
