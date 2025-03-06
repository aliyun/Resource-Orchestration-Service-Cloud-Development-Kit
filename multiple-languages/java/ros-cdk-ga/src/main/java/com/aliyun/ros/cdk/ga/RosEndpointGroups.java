package com.aliyun.ros.cdk.ga;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::GA::EndpointGroups</code>, which is used to create multiple endpoint groups at a time.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:07.195Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ga.$Module.class, fqn = "@alicloud/ros-cdk-ga.RosEndpointGroups")
public class RosEndpointGroups extends com.aliyun.ros.cdk.core.RosResource {

    protected RosEndpointGroups(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosEndpointGroups(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.ga.RosEndpointGroups.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosEndpointGroups(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ga.RosEndpointGroupsProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrEndpointGroupIds() {
        return software.amazon.jsii.Kernel.get(this, "attrEndpointGroupIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAcceleratorId() {
        return software.amazon.jsii.Kernel.get(this, "acceleratorId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAcceleratorId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "acceleratorId", java.util.Objects.requireNonNull(value, "acceleratorId is required"));
    }

    /**
     */
    public void setAcceleratorId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getEndpointGroupConfigurations() {
        return software.amazon.jsii.Kernel.get(this, "endpointGroupConfigurations", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEndpointGroupConfigurations(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "endpointGroupConfigurations", java.util.Objects.requireNonNull(value, "endpointGroupConfigurations is required"));
    }

    /**
     */
    public void setEndpointGroupConfigurations(final @org.jetbrains.annotations.NotNull java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.ga.RosEndpointGroups.EndpointGroupConfigurationsProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.ga.RosEndpointGroups.EndpointGroupConfigurationsProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "endpointGroupConfigurations", java.util.Objects.requireNonNull(value, "endpointGroupConfigurations is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getListenerId() {
        return software.amazon.jsii.Kernel.get(this, "listenerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setListenerId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "listenerId", java.util.Objects.requireNonNull(value, "listenerId is required"));
    }

    /**
     */
    public void setListenerId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "listenerId", java.util.Objects.requireNonNull(value, "listenerId is required"));
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ga.$Module.class, fqn = "@alicloud/ros-cdk-ga.RosEndpointGroups.EndpointConfigurationsProperty")
    @software.amazon.jsii.Jsii.Proxy(EndpointConfigurationsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface EndpointConfigurationsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getEndpoint();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getType();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getWeight();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSubAddress() {
            return null;
        }

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
            java.lang.Object endpoint;
            java.lang.Object type;
            java.lang.Object weight;
            java.lang.Object subAddress;

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
             * Sets the value of {@link EndpointConfigurationsProperty#getEndpoint}
             * @param endpoint the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder endpoint(com.aliyun.ros.cdk.core.IResolvable endpoint) {
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
             * Sets the value of {@link EndpointConfigurationsProperty#getType}
             * @param type the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
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
             * Sets the value of {@link EndpointConfigurationsProperty#getWeight}
             * @param weight the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder weight(com.aliyun.ros.cdk.core.IResolvable weight) {
                this.weight = weight;
                return this;
            }

            /**
             * Sets the value of {@link EndpointConfigurationsProperty#getSubAddress}
             * @param subAddress the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder subAddress(java.lang.String subAddress) {
                this.subAddress = subAddress;
                return this;
            }

            /**
             * Sets the value of {@link EndpointConfigurationsProperty#getSubAddress}
             * @param subAddress the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder subAddress(com.aliyun.ros.cdk.core.IResolvable subAddress) {
                this.subAddress = subAddress;
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
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link EndpointConfigurationsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements EndpointConfigurationsProperty {
            private final java.lang.Object endpoint;
            private final java.lang.Object type;
            private final java.lang.Object weight;
            private final java.lang.Object subAddress;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.endpoint = software.amazon.jsii.Kernel.get(this, "endpoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.weight = software.amazon.jsii.Kernel.get(this, "weight", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.subAddress = software.amazon.jsii.Kernel.get(this, "subAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.endpoint = java.util.Objects.requireNonNull(builder.endpoint, "endpoint is required");
                this.type = java.util.Objects.requireNonNull(builder.type, "type is required");
                this.weight = java.util.Objects.requireNonNull(builder.weight, "weight is required");
                this.subAddress = builder.subAddress;
            }

            @Override
            public final java.lang.Object getEndpoint() {
                return this.endpoint;
            }

            @Override
            public final java.lang.Object getType() {
                return this.type;
            }

            @Override
            public final java.lang.Object getWeight() {
                return this.weight;
            }

            @Override
            public final java.lang.Object getSubAddress() {
                return this.subAddress;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("endpoint", om.valueToTree(this.getEndpoint()));
                data.set("type", om.valueToTree(this.getType()));
                data.set("weight", om.valueToTree(this.getWeight()));
                if (this.getSubAddress() != null) {
                    data.set("subAddress", om.valueToTree(this.getSubAddress()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ga.RosEndpointGroups.EndpointConfigurationsProperty"));
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
                if (!weight.equals(that.weight)) return false;
                return this.subAddress != null ? this.subAddress.equals(that.subAddress) : that.subAddress == null;
            }

            @Override
            public final int hashCode() {
                int result = this.endpoint.hashCode();
                result = 31 * result + (this.type.hashCode());
                result = 31 * result + (this.weight.hashCode());
                result = 31 * result + (this.subAddress != null ? this.subAddress.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ga.$Module.class, fqn = "@alicloud/ros-cdk-ga.RosEndpointGroups.EndpointGroupConfigurationsProperty")
    @software.amazon.jsii.Jsii.Proxy(EndpointGroupConfigurationsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface EndpointGroupConfigurationsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getEndpointGroupRegion();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEnableClientIpPreservationProxyProtocol() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEnableClientIpPreservationToa() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEndpointConfigurations() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEndpointGroupDescription() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEndpointGroupName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEndpointGroupType() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEndpointRequestProtocol() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckEnabled() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckIntervalSeconds() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckPath() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckPort() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckProtocol() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPortOverrides() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.ga.RosEndpointGroups.TagsProperty> getTags() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getThresholdCount() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getTrafficPercentage() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link EndpointGroupConfigurationsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link EndpointGroupConfigurationsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<EndpointGroupConfigurationsProperty> {
            java.lang.Object endpointGroupRegion;
            java.lang.Object enableClientIpPreservationProxyProtocol;
            java.lang.Object enableClientIpPreservationToa;
            java.lang.Object endpointConfigurations;
            java.lang.Object endpointGroupDescription;
            java.lang.Object endpointGroupName;
            java.lang.Object endpointGroupType;
            java.lang.Object endpointRequestProtocol;
            java.lang.Object healthCheckEnabled;
            java.lang.Object healthCheckIntervalSeconds;
            java.lang.Object healthCheckPath;
            java.lang.Object healthCheckPort;
            java.lang.Object healthCheckProtocol;
            java.lang.Object portOverrides;
            java.util.List<com.aliyun.ros.cdk.ga.RosEndpointGroups.TagsProperty> tags;
            java.lang.Object thresholdCount;
            java.lang.Object trafficPercentage;

            /**
             * Sets the value of {@link EndpointGroupConfigurationsProperty#getEndpointGroupRegion}
             * @param endpointGroupRegion the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder endpointGroupRegion(java.lang.String endpointGroupRegion) {
                this.endpointGroupRegion = endpointGroupRegion;
                return this;
            }

            /**
             * Sets the value of {@link EndpointGroupConfigurationsProperty#getEndpointGroupRegion}
             * @param endpointGroupRegion the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder endpointGroupRegion(com.aliyun.ros.cdk.core.IResolvable endpointGroupRegion) {
                this.endpointGroupRegion = endpointGroupRegion;
                return this;
            }

            /**
             * Sets the value of {@link EndpointGroupConfigurationsProperty#getEnableClientIpPreservationProxyProtocol}
             * @param enableClientIpPreservationProxyProtocol the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enableClientIpPreservationProxyProtocol(java.lang.Boolean enableClientIpPreservationProxyProtocol) {
                this.enableClientIpPreservationProxyProtocol = enableClientIpPreservationProxyProtocol;
                return this;
            }

            /**
             * Sets the value of {@link EndpointGroupConfigurationsProperty#getEnableClientIpPreservationProxyProtocol}
             * @param enableClientIpPreservationProxyProtocol the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enableClientIpPreservationProxyProtocol(com.aliyun.ros.cdk.core.IResolvable enableClientIpPreservationProxyProtocol) {
                this.enableClientIpPreservationProxyProtocol = enableClientIpPreservationProxyProtocol;
                return this;
            }

            /**
             * Sets the value of {@link EndpointGroupConfigurationsProperty#getEnableClientIpPreservationToa}
             * @param enableClientIpPreservationToa the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enableClientIpPreservationToa(java.lang.Boolean enableClientIpPreservationToa) {
                this.enableClientIpPreservationToa = enableClientIpPreservationToa;
                return this;
            }

            /**
             * Sets the value of {@link EndpointGroupConfigurationsProperty#getEnableClientIpPreservationToa}
             * @param enableClientIpPreservationToa the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enableClientIpPreservationToa(com.aliyun.ros.cdk.core.IResolvable enableClientIpPreservationToa) {
                this.enableClientIpPreservationToa = enableClientIpPreservationToa;
                return this;
            }

            /**
             * Sets the value of {@link EndpointGroupConfigurationsProperty#getEndpointConfigurations}
             * @param endpointConfigurations the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder endpointConfigurations(com.aliyun.ros.cdk.core.IResolvable endpointConfigurations) {
                this.endpointConfigurations = endpointConfigurations;
                return this;
            }

            /**
             * Sets the value of {@link EndpointGroupConfigurationsProperty#getEndpointConfigurations}
             * @param endpointConfigurations the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder endpointConfigurations(java.util.List<? extends java.lang.Object> endpointConfigurations) {
                this.endpointConfigurations = endpointConfigurations;
                return this;
            }

            /**
             * Sets the value of {@link EndpointGroupConfigurationsProperty#getEndpointGroupDescription}
             * @param endpointGroupDescription the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder endpointGroupDescription(java.lang.String endpointGroupDescription) {
                this.endpointGroupDescription = endpointGroupDescription;
                return this;
            }

            /**
             * Sets the value of {@link EndpointGroupConfigurationsProperty#getEndpointGroupDescription}
             * @param endpointGroupDescription the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder endpointGroupDescription(com.aliyun.ros.cdk.core.IResolvable endpointGroupDescription) {
                this.endpointGroupDescription = endpointGroupDescription;
                return this;
            }

            /**
             * Sets the value of {@link EndpointGroupConfigurationsProperty#getEndpointGroupName}
             * @param endpointGroupName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder endpointGroupName(java.lang.String endpointGroupName) {
                this.endpointGroupName = endpointGroupName;
                return this;
            }

            /**
             * Sets the value of {@link EndpointGroupConfigurationsProperty#getEndpointGroupName}
             * @param endpointGroupName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder endpointGroupName(com.aliyun.ros.cdk.core.IResolvable endpointGroupName) {
                this.endpointGroupName = endpointGroupName;
                return this;
            }

            /**
             * Sets the value of {@link EndpointGroupConfigurationsProperty#getEndpointGroupType}
             * @param endpointGroupType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder endpointGroupType(java.lang.String endpointGroupType) {
                this.endpointGroupType = endpointGroupType;
                return this;
            }

            /**
             * Sets the value of {@link EndpointGroupConfigurationsProperty#getEndpointGroupType}
             * @param endpointGroupType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder endpointGroupType(com.aliyun.ros.cdk.core.IResolvable endpointGroupType) {
                this.endpointGroupType = endpointGroupType;
                return this;
            }

            /**
             * Sets the value of {@link EndpointGroupConfigurationsProperty#getEndpointRequestProtocol}
             * @param endpointRequestProtocol the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder endpointRequestProtocol(java.lang.String endpointRequestProtocol) {
                this.endpointRequestProtocol = endpointRequestProtocol;
                return this;
            }

            /**
             * Sets the value of {@link EndpointGroupConfigurationsProperty#getEndpointRequestProtocol}
             * @param endpointRequestProtocol the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder endpointRequestProtocol(com.aliyun.ros.cdk.core.IResolvable endpointRequestProtocol) {
                this.endpointRequestProtocol = endpointRequestProtocol;
                return this;
            }

            /**
             * Sets the value of {@link EndpointGroupConfigurationsProperty#getHealthCheckEnabled}
             * @param healthCheckEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder healthCheckEnabled(java.lang.Boolean healthCheckEnabled) {
                this.healthCheckEnabled = healthCheckEnabled;
                return this;
            }

            /**
             * Sets the value of {@link EndpointGroupConfigurationsProperty#getHealthCheckEnabled}
             * @param healthCheckEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder healthCheckEnabled(com.aliyun.ros.cdk.core.IResolvable healthCheckEnabled) {
                this.healthCheckEnabled = healthCheckEnabled;
                return this;
            }

            /**
             * Sets the value of {@link EndpointGroupConfigurationsProperty#getHealthCheckIntervalSeconds}
             * @param healthCheckIntervalSeconds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder healthCheckIntervalSeconds(java.lang.Number healthCheckIntervalSeconds) {
                this.healthCheckIntervalSeconds = healthCheckIntervalSeconds;
                return this;
            }

            /**
             * Sets the value of {@link EndpointGroupConfigurationsProperty#getHealthCheckIntervalSeconds}
             * @param healthCheckIntervalSeconds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder healthCheckIntervalSeconds(com.aliyun.ros.cdk.core.IResolvable healthCheckIntervalSeconds) {
                this.healthCheckIntervalSeconds = healthCheckIntervalSeconds;
                return this;
            }

            /**
             * Sets the value of {@link EndpointGroupConfigurationsProperty#getHealthCheckPath}
             * @param healthCheckPath the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder healthCheckPath(java.lang.String healthCheckPath) {
                this.healthCheckPath = healthCheckPath;
                return this;
            }

            /**
             * Sets the value of {@link EndpointGroupConfigurationsProperty#getHealthCheckPath}
             * @param healthCheckPath the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder healthCheckPath(com.aliyun.ros.cdk.core.IResolvable healthCheckPath) {
                this.healthCheckPath = healthCheckPath;
                return this;
            }

            /**
             * Sets the value of {@link EndpointGroupConfigurationsProperty#getHealthCheckPort}
             * @param healthCheckPort the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder healthCheckPort(java.lang.Number healthCheckPort) {
                this.healthCheckPort = healthCheckPort;
                return this;
            }

            /**
             * Sets the value of {@link EndpointGroupConfigurationsProperty#getHealthCheckPort}
             * @param healthCheckPort the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder healthCheckPort(com.aliyun.ros.cdk.core.IResolvable healthCheckPort) {
                this.healthCheckPort = healthCheckPort;
                return this;
            }

            /**
             * Sets the value of {@link EndpointGroupConfigurationsProperty#getHealthCheckProtocol}
             * @param healthCheckProtocol the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder healthCheckProtocol(java.lang.String healthCheckProtocol) {
                this.healthCheckProtocol = healthCheckProtocol;
                return this;
            }

            /**
             * Sets the value of {@link EndpointGroupConfigurationsProperty#getHealthCheckProtocol}
             * @param healthCheckProtocol the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder healthCheckProtocol(com.aliyun.ros.cdk.core.IResolvable healthCheckProtocol) {
                this.healthCheckProtocol = healthCheckProtocol;
                return this;
            }

            /**
             * Sets the value of {@link EndpointGroupConfigurationsProperty#getPortOverrides}
             * @param portOverrides the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder portOverrides(com.aliyun.ros.cdk.core.IResolvable portOverrides) {
                this.portOverrides = portOverrides;
                return this;
            }

            /**
             * Sets the value of {@link EndpointGroupConfigurationsProperty#getPortOverrides}
             * @param portOverrides the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder portOverrides(java.util.List<? extends java.lang.Object> portOverrides) {
                this.portOverrides = portOverrides;
                return this;
            }

            /**
             * Sets the value of {@link EndpointGroupConfigurationsProperty#getTags}
             * @param tags the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @SuppressWarnings("unchecked")
            public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.ga.RosEndpointGroups.TagsProperty> tags) {
                this.tags = (java.util.List<com.aliyun.ros.cdk.ga.RosEndpointGroups.TagsProperty>)tags;
                return this;
            }

            /**
             * Sets the value of {@link EndpointGroupConfigurationsProperty#getThresholdCount}
             * @param thresholdCount the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder thresholdCount(java.lang.Number thresholdCount) {
                this.thresholdCount = thresholdCount;
                return this;
            }

            /**
             * Sets the value of {@link EndpointGroupConfigurationsProperty#getThresholdCount}
             * @param thresholdCount the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder thresholdCount(com.aliyun.ros.cdk.core.IResolvable thresholdCount) {
                this.thresholdCount = thresholdCount;
                return this;
            }

            /**
             * Sets the value of {@link EndpointGroupConfigurationsProperty#getTrafficPercentage}
             * @param trafficPercentage the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder trafficPercentage(java.lang.Number trafficPercentage) {
                this.trafficPercentage = trafficPercentage;
                return this;
            }

            /**
             * Sets the value of {@link EndpointGroupConfigurationsProperty#getTrafficPercentage}
             * @param trafficPercentage the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder trafficPercentage(com.aliyun.ros.cdk.core.IResolvable trafficPercentage) {
                this.trafficPercentage = trafficPercentage;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link EndpointGroupConfigurationsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public EndpointGroupConfigurationsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link EndpointGroupConfigurationsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements EndpointGroupConfigurationsProperty {
            private final java.lang.Object endpointGroupRegion;
            private final java.lang.Object enableClientIpPreservationProxyProtocol;
            private final java.lang.Object enableClientIpPreservationToa;
            private final java.lang.Object endpointConfigurations;
            private final java.lang.Object endpointGroupDescription;
            private final java.lang.Object endpointGroupName;
            private final java.lang.Object endpointGroupType;
            private final java.lang.Object endpointRequestProtocol;
            private final java.lang.Object healthCheckEnabled;
            private final java.lang.Object healthCheckIntervalSeconds;
            private final java.lang.Object healthCheckPath;
            private final java.lang.Object healthCheckPort;
            private final java.lang.Object healthCheckProtocol;
            private final java.lang.Object portOverrides;
            private final java.util.List<com.aliyun.ros.cdk.ga.RosEndpointGroups.TagsProperty> tags;
            private final java.lang.Object thresholdCount;
            private final java.lang.Object trafficPercentage;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.endpointGroupRegion = software.amazon.jsii.Kernel.get(this, "endpointGroupRegion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.enableClientIpPreservationProxyProtocol = software.amazon.jsii.Kernel.get(this, "enableClientIpPreservationProxyProtocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.enableClientIpPreservationToa = software.amazon.jsii.Kernel.get(this, "enableClientIpPreservationToa", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.endpointConfigurations = software.amazon.jsii.Kernel.get(this, "endpointConfigurations", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.endpointGroupDescription = software.amazon.jsii.Kernel.get(this, "endpointGroupDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.endpointGroupName = software.amazon.jsii.Kernel.get(this, "endpointGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.endpointGroupType = software.amazon.jsii.Kernel.get(this, "endpointGroupType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.endpointRequestProtocol = software.amazon.jsii.Kernel.get(this, "endpointRequestProtocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.healthCheckEnabled = software.amazon.jsii.Kernel.get(this, "healthCheckEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.healthCheckIntervalSeconds = software.amazon.jsii.Kernel.get(this, "healthCheckIntervalSeconds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.healthCheckPath = software.amazon.jsii.Kernel.get(this, "healthCheckPath", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.healthCheckPort = software.amazon.jsii.Kernel.get(this, "healthCheckPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.healthCheckProtocol = software.amazon.jsii.Kernel.get(this, "healthCheckProtocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.portOverrides = software.amazon.jsii.Kernel.get(this, "portOverrides", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ga.RosEndpointGroups.TagsProperty.class)));
                this.thresholdCount = software.amazon.jsii.Kernel.get(this, "thresholdCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.trafficPercentage = software.amazon.jsii.Kernel.get(this, "trafficPercentage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            @SuppressWarnings("unchecked")
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.endpointGroupRegion = java.util.Objects.requireNonNull(builder.endpointGroupRegion, "endpointGroupRegion is required");
                this.enableClientIpPreservationProxyProtocol = builder.enableClientIpPreservationProxyProtocol;
                this.enableClientIpPreservationToa = builder.enableClientIpPreservationToa;
                this.endpointConfigurations = builder.endpointConfigurations;
                this.endpointGroupDescription = builder.endpointGroupDescription;
                this.endpointGroupName = builder.endpointGroupName;
                this.endpointGroupType = builder.endpointGroupType;
                this.endpointRequestProtocol = builder.endpointRequestProtocol;
                this.healthCheckEnabled = builder.healthCheckEnabled;
                this.healthCheckIntervalSeconds = builder.healthCheckIntervalSeconds;
                this.healthCheckPath = builder.healthCheckPath;
                this.healthCheckPort = builder.healthCheckPort;
                this.healthCheckProtocol = builder.healthCheckProtocol;
                this.portOverrides = builder.portOverrides;
                this.tags = (java.util.List<com.aliyun.ros.cdk.ga.RosEndpointGroups.TagsProperty>)builder.tags;
                this.thresholdCount = builder.thresholdCount;
                this.trafficPercentage = builder.trafficPercentage;
            }

            @Override
            public final java.lang.Object getEndpointGroupRegion() {
                return this.endpointGroupRegion;
            }

            @Override
            public final java.lang.Object getEnableClientIpPreservationProxyProtocol() {
                return this.enableClientIpPreservationProxyProtocol;
            }

            @Override
            public final java.lang.Object getEnableClientIpPreservationToa() {
                return this.enableClientIpPreservationToa;
            }

            @Override
            public final java.lang.Object getEndpointConfigurations() {
                return this.endpointConfigurations;
            }

            @Override
            public final java.lang.Object getEndpointGroupDescription() {
                return this.endpointGroupDescription;
            }

            @Override
            public final java.lang.Object getEndpointGroupName() {
                return this.endpointGroupName;
            }

            @Override
            public final java.lang.Object getEndpointGroupType() {
                return this.endpointGroupType;
            }

            @Override
            public final java.lang.Object getEndpointRequestProtocol() {
                return this.endpointRequestProtocol;
            }

            @Override
            public final java.lang.Object getHealthCheckEnabled() {
                return this.healthCheckEnabled;
            }

            @Override
            public final java.lang.Object getHealthCheckIntervalSeconds() {
                return this.healthCheckIntervalSeconds;
            }

            @Override
            public final java.lang.Object getHealthCheckPath() {
                return this.healthCheckPath;
            }

            @Override
            public final java.lang.Object getHealthCheckPort() {
                return this.healthCheckPort;
            }

            @Override
            public final java.lang.Object getHealthCheckProtocol() {
                return this.healthCheckProtocol;
            }

            @Override
            public final java.lang.Object getPortOverrides() {
                return this.portOverrides;
            }

            @Override
            public final java.util.List<com.aliyun.ros.cdk.ga.RosEndpointGroups.TagsProperty> getTags() {
                return this.tags;
            }

            @Override
            public final java.lang.Object getThresholdCount() {
                return this.thresholdCount;
            }

            @Override
            public final java.lang.Object getTrafficPercentage() {
                return this.trafficPercentage;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("endpointGroupRegion", om.valueToTree(this.getEndpointGroupRegion()));
                if (this.getEnableClientIpPreservationProxyProtocol() != null) {
                    data.set("enableClientIpPreservationProxyProtocol", om.valueToTree(this.getEnableClientIpPreservationProxyProtocol()));
                }
                if (this.getEnableClientIpPreservationToa() != null) {
                    data.set("enableClientIpPreservationToa", om.valueToTree(this.getEnableClientIpPreservationToa()));
                }
                if (this.getEndpointConfigurations() != null) {
                    data.set("endpointConfigurations", om.valueToTree(this.getEndpointConfigurations()));
                }
                if (this.getEndpointGroupDescription() != null) {
                    data.set("endpointGroupDescription", om.valueToTree(this.getEndpointGroupDescription()));
                }
                if (this.getEndpointGroupName() != null) {
                    data.set("endpointGroupName", om.valueToTree(this.getEndpointGroupName()));
                }
                if (this.getEndpointGroupType() != null) {
                    data.set("endpointGroupType", om.valueToTree(this.getEndpointGroupType()));
                }
                if (this.getEndpointRequestProtocol() != null) {
                    data.set("endpointRequestProtocol", om.valueToTree(this.getEndpointRequestProtocol()));
                }
                if (this.getHealthCheckEnabled() != null) {
                    data.set("healthCheckEnabled", om.valueToTree(this.getHealthCheckEnabled()));
                }
                if (this.getHealthCheckIntervalSeconds() != null) {
                    data.set("healthCheckIntervalSeconds", om.valueToTree(this.getHealthCheckIntervalSeconds()));
                }
                if (this.getHealthCheckPath() != null) {
                    data.set("healthCheckPath", om.valueToTree(this.getHealthCheckPath()));
                }
                if (this.getHealthCheckPort() != null) {
                    data.set("healthCheckPort", om.valueToTree(this.getHealthCheckPort()));
                }
                if (this.getHealthCheckProtocol() != null) {
                    data.set("healthCheckProtocol", om.valueToTree(this.getHealthCheckProtocol()));
                }
                if (this.getPortOverrides() != null) {
                    data.set("portOverrides", om.valueToTree(this.getPortOverrides()));
                }
                if (this.getTags() != null) {
                    data.set("tags", om.valueToTree(this.getTags()));
                }
                if (this.getThresholdCount() != null) {
                    data.set("thresholdCount", om.valueToTree(this.getThresholdCount()));
                }
                if (this.getTrafficPercentage() != null) {
                    data.set("trafficPercentage", om.valueToTree(this.getTrafficPercentage()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ga.RosEndpointGroups.EndpointGroupConfigurationsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                EndpointGroupConfigurationsProperty.Jsii$Proxy that = (EndpointGroupConfigurationsProperty.Jsii$Proxy) o;

                if (!endpointGroupRegion.equals(that.endpointGroupRegion)) return false;
                if (this.enableClientIpPreservationProxyProtocol != null ? !this.enableClientIpPreservationProxyProtocol.equals(that.enableClientIpPreservationProxyProtocol) : that.enableClientIpPreservationProxyProtocol != null) return false;
                if (this.enableClientIpPreservationToa != null ? !this.enableClientIpPreservationToa.equals(that.enableClientIpPreservationToa) : that.enableClientIpPreservationToa != null) return false;
                if (this.endpointConfigurations != null ? !this.endpointConfigurations.equals(that.endpointConfigurations) : that.endpointConfigurations != null) return false;
                if (this.endpointGroupDescription != null ? !this.endpointGroupDescription.equals(that.endpointGroupDescription) : that.endpointGroupDescription != null) return false;
                if (this.endpointGroupName != null ? !this.endpointGroupName.equals(that.endpointGroupName) : that.endpointGroupName != null) return false;
                if (this.endpointGroupType != null ? !this.endpointGroupType.equals(that.endpointGroupType) : that.endpointGroupType != null) return false;
                if (this.endpointRequestProtocol != null ? !this.endpointRequestProtocol.equals(that.endpointRequestProtocol) : that.endpointRequestProtocol != null) return false;
                if (this.healthCheckEnabled != null ? !this.healthCheckEnabled.equals(that.healthCheckEnabled) : that.healthCheckEnabled != null) return false;
                if (this.healthCheckIntervalSeconds != null ? !this.healthCheckIntervalSeconds.equals(that.healthCheckIntervalSeconds) : that.healthCheckIntervalSeconds != null) return false;
                if (this.healthCheckPath != null ? !this.healthCheckPath.equals(that.healthCheckPath) : that.healthCheckPath != null) return false;
                if (this.healthCheckPort != null ? !this.healthCheckPort.equals(that.healthCheckPort) : that.healthCheckPort != null) return false;
                if (this.healthCheckProtocol != null ? !this.healthCheckProtocol.equals(that.healthCheckProtocol) : that.healthCheckProtocol != null) return false;
                if (this.portOverrides != null ? !this.portOverrides.equals(that.portOverrides) : that.portOverrides != null) return false;
                if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
                if (this.thresholdCount != null ? !this.thresholdCount.equals(that.thresholdCount) : that.thresholdCount != null) return false;
                return this.trafficPercentage != null ? this.trafficPercentage.equals(that.trafficPercentage) : that.trafficPercentage == null;
            }

            @Override
            public final int hashCode() {
                int result = this.endpointGroupRegion.hashCode();
                result = 31 * result + (this.enableClientIpPreservationProxyProtocol != null ? this.enableClientIpPreservationProxyProtocol.hashCode() : 0);
                result = 31 * result + (this.enableClientIpPreservationToa != null ? this.enableClientIpPreservationToa.hashCode() : 0);
                result = 31 * result + (this.endpointConfigurations != null ? this.endpointConfigurations.hashCode() : 0);
                result = 31 * result + (this.endpointGroupDescription != null ? this.endpointGroupDescription.hashCode() : 0);
                result = 31 * result + (this.endpointGroupName != null ? this.endpointGroupName.hashCode() : 0);
                result = 31 * result + (this.endpointGroupType != null ? this.endpointGroupType.hashCode() : 0);
                result = 31 * result + (this.endpointRequestProtocol != null ? this.endpointRequestProtocol.hashCode() : 0);
                result = 31 * result + (this.healthCheckEnabled != null ? this.healthCheckEnabled.hashCode() : 0);
                result = 31 * result + (this.healthCheckIntervalSeconds != null ? this.healthCheckIntervalSeconds.hashCode() : 0);
                result = 31 * result + (this.healthCheckPath != null ? this.healthCheckPath.hashCode() : 0);
                result = 31 * result + (this.healthCheckPort != null ? this.healthCheckPort.hashCode() : 0);
                result = 31 * result + (this.healthCheckProtocol != null ? this.healthCheckProtocol.hashCode() : 0);
                result = 31 * result + (this.portOverrides != null ? this.portOverrides.hashCode() : 0);
                result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
                result = 31 * result + (this.thresholdCount != null ? this.thresholdCount.hashCode() : 0);
                result = 31 * result + (this.trafficPercentage != null ? this.trafficPercentage.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ga.$Module.class, fqn = "@alicloud/ros-cdk-ga.RosEndpointGroups.PortOverridesProperty")
    @software.amazon.jsii.Jsii.Proxy(PortOverridesProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface PortOverridesProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getEndpointPort();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getListenerPort();

        /**
         * @return a {@link Builder} of {@link PortOverridesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link PortOverridesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<PortOverridesProperty> {
            java.lang.Object endpointPort;
            java.lang.Object listenerPort;

            /**
             * Sets the value of {@link PortOverridesProperty#getEndpointPort}
             * @param endpointPort the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder endpointPort(java.lang.Number endpointPort) {
                this.endpointPort = endpointPort;
                return this;
            }

            /**
             * Sets the value of {@link PortOverridesProperty#getEndpointPort}
             * @param endpointPort the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder endpointPort(com.aliyun.ros.cdk.core.IResolvable endpointPort) {
                this.endpointPort = endpointPort;
                return this;
            }

            /**
             * Sets the value of {@link PortOverridesProperty#getListenerPort}
             * @param listenerPort the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder listenerPort(java.lang.Number listenerPort) {
                this.listenerPort = listenerPort;
                return this;
            }

            /**
             * Sets the value of {@link PortOverridesProperty#getListenerPort}
             * @param listenerPort the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder listenerPort(com.aliyun.ros.cdk.core.IResolvable listenerPort) {
                this.listenerPort = listenerPort;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link PortOverridesProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public PortOverridesProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link PortOverridesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements PortOverridesProperty {
            private final java.lang.Object endpointPort;
            private final java.lang.Object listenerPort;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.endpointPort = software.amazon.jsii.Kernel.get(this, "endpointPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.listenerPort = software.amazon.jsii.Kernel.get(this, "listenerPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.endpointPort = java.util.Objects.requireNonNull(builder.endpointPort, "endpointPort is required");
                this.listenerPort = java.util.Objects.requireNonNull(builder.listenerPort, "listenerPort is required");
            }

            @Override
            public final java.lang.Object getEndpointPort() {
                return this.endpointPort;
            }

            @Override
            public final java.lang.Object getListenerPort() {
                return this.listenerPort;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("endpointPort", om.valueToTree(this.getEndpointPort()));
                data.set("listenerPort", om.valueToTree(this.getListenerPort()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ga.RosEndpointGroups.PortOverridesProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                PortOverridesProperty.Jsii$Proxy that = (PortOverridesProperty.Jsii$Proxy) o;

                if (!endpointPort.equals(that.endpointPort)) return false;
                return this.listenerPort.equals(that.listenerPort);
            }

            @Override
            public final int hashCode() {
                int result = this.endpointPort.hashCode();
                result = 31 * result + (this.listenerPort.hashCode());
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ga.$Module.class, fqn = "@alicloud/ros-cdk-ga.RosEndpointGroups.TagsProperty")
    @software.amazon.jsii.Jsii.Proxy(TagsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface TagsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getKey() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getValue() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link TagsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link TagsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<TagsProperty> {
            java.lang.Object key;
            java.lang.Object value;

            /**
             * Sets the value of {@link TagsProperty#getKey}
             * @param key the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(java.lang.String key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link TagsProperty#getKey}
             * @param key the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(com.aliyun.ros.cdk.core.IResolvable key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link TagsProperty#getValue}
             * @param value the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(java.lang.String value) {
                this.value = value;
                return this;
            }

            /**
             * Sets the value of {@link TagsProperty#getValue}
             * @param value the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(com.aliyun.ros.cdk.core.IResolvable value) {
                this.value = value;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link TagsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public TagsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link TagsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements TagsProperty {
            private final java.lang.Object key;
            private final java.lang.Object value;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.key = software.amazon.jsii.Kernel.get(this, "key", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.value = software.amazon.jsii.Kernel.get(this, "value", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.key = builder.key;
                this.value = builder.value;
            }

            @Override
            public final java.lang.Object getKey() {
                return this.key;
            }

            @Override
            public final java.lang.Object getValue() {
                return this.value;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getKey() != null) {
                    data.set("key", om.valueToTree(this.getKey()));
                }
                if (this.getValue() != null) {
                    data.set("value", om.valueToTree(this.getValue()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ga.RosEndpointGroups.TagsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                TagsProperty.Jsii$Proxy that = (TagsProperty.Jsii$Proxy) o;

                if (this.key != null ? !this.key.equals(that.key) : that.key != null) return false;
                return this.value != null ? this.value.equals(that.value) : that.value == null;
            }

            @Override
            public final int hashCode() {
                int result = this.key != null ? this.key.hashCode() : 0;
                result = 31 * result + (this.value != null ? this.value.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ga.RosEndpointGroups}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ga.RosEndpointGroups> {
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
        private final com.aliyun.ros.cdk.ga.RosEndpointGroupsProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ga.RosEndpointGroupsProps.Builder();
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
         * @param acceleratorId This parameter is required.
         */
        public Builder acceleratorId(final com.aliyun.ros.cdk.core.IResolvable acceleratorId) {
            this.props.acceleratorId(acceleratorId);
            return this;
        }

        /**
         * @return {@code this}
         * @param endpointGroupConfigurations This parameter is required.
         */
        public Builder endpointGroupConfigurations(final com.aliyun.ros.cdk.core.IResolvable endpointGroupConfigurations) {
            this.props.endpointGroupConfigurations(endpointGroupConfigurations);
            return this;
        }
        /**
         * @return {@code this}
         * @param endpointGroupConfigurations This parameter is required.
         */
        public Builder endpointGroupConfigurations(final java.util.List<? extends java.lang.Object> endpointGroupConfigurations) {
            this.props.endpointGroupConfigurations(endpointGroupConfigurations);
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
         * @param listenerId This parameter is required.
         */
        public Builder listenerId(final com.aliyun.ros.cdk.core.IResolvable listenerId) {
            this.props.listenerId(listenerId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ga.RosEndpointGroups}.
         */
        @Override
        public com.aliyun.ros.cdk.ga.RosEndpointGroups build() {
            return new com.aliyun.ros.cdk.ga.RosEndpointGroups(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
