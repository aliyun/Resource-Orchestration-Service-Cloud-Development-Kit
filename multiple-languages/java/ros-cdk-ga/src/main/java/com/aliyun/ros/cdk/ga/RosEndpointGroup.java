package com.aliyun.ros.cdk.ga;

/**
 * A ROS template type:  `ALIYUN::GA::EndpointGroup`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:33.994Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ga.$Module.class, fqn = "@alicloud/ros-cdk-ga.RosEndpointGroup")
public class RosEndpointGroup extends com.aliyun.ros.cdk.core.RosResource {

    protected RosEndpointGroup(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosEndpointGroup(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.ga.RosEndpointGroup.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new `ALIYUN::GA::EndpointGroup`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosEndpointGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ga.RosEndpointGroupProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEndpointGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrEndpointGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.String getAcceleratorId() {
        return software.amazon.jsii.Kernel.get(this, "acceleratorId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setAcceleratorId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "acceleratorId", java.util.Objects.requireNonNull(value, "acceleratorId is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getEndpointConfigurations() {
        return software.amazon.jsii.Kernel.get(this, "endpointConfigurations", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEndpointConfigurations(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "endpointConfigurations", java.util.Objects.requireNonNull(value, "endpointConfigurations is required"));
    }

    /**
     */
    public void setEndpointConfigurations(final @org.jetbrains.annotations.NotNull java.util.List<java.lang.Object> value) {
        software.amazon.jsii.Kernel.set(this, "endpointConfigurations", java.util.Objects.requireNonNull(value, "endpointConfigurations is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.String getEndpointGroupRegion() {
        return software.amazon.jsii.Kernel.get(this, "endpointGroupRegion", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setEndpointGroupRegion(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "endpointGroupRegion", java.util.Objects.requireNonNull(value, "endpointGroupRegion is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.String getListenerId() {
        return software.amazon.jsii.Kernel.get(this, "listenerId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setListenerId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "listenerId", java.util.Objects.requireNonNull(value, "listenerId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getDescription() {
        return software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "description", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Number getHealthCheckIntervalSeconds() {
        return software.amazon.jsii.Kernel.get(this, "healthCheckIntervalSeconds", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
    }

    /**
     */
    public void setHealthCheckIntervalSeconds(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "healthCheckIntervalSeconds", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getHealthCheckPath() {
        return software.amazon.jsii.Kernel.get(this, "healthCheckPath", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setHealthCheckPath(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "healthCheckPath", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Number getHealthCheckPort() {
        return software.amazon.jsii.Kernel.get(this, "healthCheckPort", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
    }

    /**
     */
    public void setHealthCheckPort(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "healthCheckPort", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getHealthCheckProtocol() {
        return software.amazon.jsii.Kernel.get(this, "healthCheckProtocol", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setHealthCheckProtocol(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "healthCheckProtocol", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getName() {
        return software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "name", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Number getThresholdCount() {
        return software.amazon.jsii.Kernel.get(this, "thresholdCount", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
    }

    /**
     */
    public void setThresholdCount(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "thresholdCount", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Number getTrafficPercentage() {
        return software.amazon.jsii.Kernel.get(this, "trafficPercentage", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
    }

    /**
     */
    public void setTrafficPercentage(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "trafficPercentage", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ga.$Module.class, fqn = "@alicloud/ros-cdk-ga.RosEndpointGroup.EndpointConfigurationsProperty")
    @software.amazon.jsii.Jsii.Proxy(EndpointConfigurationsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface EndpointConfigurationsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.String getEndpoint();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.String getType();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Number getWeight();

        /**
         * @return a {@link Builder} of {@link EndpointConfigurationsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link EndpointConfigurationsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<EndpointConfigurationsProperty> {
            private java.lang.String endpoint;
            private java.lang.String type;
            private java.lang.Number weight;

            /**
             * Sets the value of {@link EndpointConfigurationsProperty#getEndpoint}
             * @param endpoint the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder endpoint(java.lang.String endpoint) {
                this.endpoint = endpoint;
                return this;
            }

            /**
             * Sets the value of {@link EndpointConfigurationsProperty#getType}
             * @param type the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(java.lang.String type) {
                this.type = type;
                return this;
            }

            /**
             * Sets the value of {@link EndpointConfigurationsProperty#getWeight}
             * @param weight the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder weight(java.lang.Number weight) {
                this.weight = weight;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link EndpointConfigurationsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public EndpointConfigurationsProperty build() {
                return new Jsii$Proxy(endpoint, type, weight);
            }
        }

        /**
         * An implementation for {@link EndpointConfigurationsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements EndpointConfigurationsProperty {
            private final java.lang.String endpoint;
            private final java.lang.String type;
            private final java.lang.Number weight;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.endpoint = software.amazon.jsii.Kernel.get(this, "endpoint", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.weight = software.amazon.jsii.Kernel.get(this, "weight", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final java.lang.String endpoint, final java.lang.String type, final java.lang.Number weight) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.endpoint = java.util.Objects.requireNonNull(endpoint, "endpoint is required");
                this.type = java.util.Objects.requireNonNull(type, "type is required");
                this.weight = java.util.Objects.requireNonNull(weight, "weight is required");
            }

            @Override
            public final java.lang.String getEndpoint() {
                return this.endpoint;
            }

            @Override
            public final java.lang.String getType() {
                return this.type;
            }

            @Override
            public final java.lang.Number getWeight() {
                return this.weight;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("endpoint", om.valueToTree(this.getEndpoint()));
                data.set("type", om.valueToTree(this.getType()));
                data.set("weight", om.valueToTree(this.getWeight()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ga.RosEndpointGroup.EndpointConfigurationsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                EndpointConfigurationsProperty.Jsii$Proxy that = (EndpointConfigurationsProperty.Jsii$Proxy) o;

                if (!endpoint.equals(that.endpoint)) return false;
                if (!type.equals(that.type)) return false;
                return this.weight.equals(that.weight);
            }

            @Override
            public final int hashCode() {
                int result = this.endpoint.hashCode();
                result = 31 * result + (this.type.hashCode());
                result = 31 * result + (this.weight.hashCode());
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ga.RosEndpointGroup}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ga.RosEndpointGroup> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope - scope in which this resource is defined. This parameter is required.
         * @param id - scoped id of the resource. This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.ga.RosEndpointGroupProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ga.RosEndpointGroupProps.Builder();
        }

        /**
         * @return {@code this}
         * @param acceleratorId This parameter is required.
         */
        public Builder acceleratorId(final java.lang.String acceleratorId) {
            this.props.acceleratorId(acceleratorId);
            return this;
        }

        /**
         * @return {@code this}
         * @param endpointConfigurations This parameter is required.
         */
        public Builder endpointConfigurations(final com.aliyun.ros.cdk.core.IResolvable endpointConfigurations) {
            this.props.endpointConfigurations(endpointConfigurations);
            return this;
        }
        /**
         * @return {@code this}
         * @param endpointConfigurations This parameter is required.
         */
        public Builder endpointConfigurations(final java.util.List<? extends java.lang.Object> endpointConfigurations) {
            this.props.endpointConfigurations(endpointConfigurations);
            return this;
        }

        /**
         * @return {@code this}
         * @param endpointGroupRegion This parameter is required.
         */
        public Builder endpointGroupRegion(final java.lang.String endpointGroupRegion) {
            this.props.endpointGroupRegion(endpointGroupRegion);
            return this;
        }

        /**
         * @return {@code this}
         * @param listenerId This parameter is required.
         */
        public Builder listenerId(final java.lang.String listenerId) {
            this.props.listenerId(listenerId);
            return this;
        }

        /**
         * @return {@code this}
         * @param description This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }

        /**
         * @return {@code this}
         * @param healthCheckIntervalSeconds This parameter is required.
         */
        public Builder healthCheckIntervalSeconds(final java.lang.Number healthCheckIntervalSeconds) {
            this.props.healthCheckIntervalSeconds(healthCheckIntervalSeconds);
            return this;
        }

        /**
         * @return {@code this}
         * @param healthCheckPath This parameter is required.
         */
        public Builder healthCheckPath(final java.lang.String healthCheckPath) {
            this.props.healthCheckPath(healthCheckPath);
            return this;
        }

        /**
         * @return {@code this}
         * @param healthCheckPort This parameter is required.
         */
        public Builder healthCheckPort(final java.lang.Number healthCheckPort) {
            this.props.healthCheckPort(healthCheckPort);
            return this;
        }

        /**
         * @return {@code this}
         * @param healthCheckProtocol This parameter is required.
         */
        public Builder healthCheckProtocol(final java.lang.String healthCheckProtocol) {
            this.props.healthCheckProtocol(healthCheckProtocol);
            return this;
        }

        /**
         * @return {@code this}
         * @param name This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }

        /**
         * @return {@code this}
         * @param thresholdCount This parameter is required.
         */
        public Builder thresholdCount(final java.lang.Number thresholdCount) {
            this.props.thresholdCount(thresholdCount);
            return this;
        }

        /**
         * @return {@code this}
         * @param trafficPercentage This parameter is required.
         */
        public Builder trafficPercentage(final java.lang.Number trafficPercentage) {
            this.props.trafficPercentage(trafficPercentage);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.ga.RosEndpointGroup}.
         */
        @Override
        public com.aliyun.ros.cdk.ga.RosEndpointGroup build() {
            return new com.aliyun.ros.cdk.ga.RosEndpointGroup(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
