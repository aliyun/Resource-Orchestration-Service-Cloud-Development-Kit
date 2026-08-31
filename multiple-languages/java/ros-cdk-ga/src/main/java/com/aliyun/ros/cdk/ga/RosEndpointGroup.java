package com.aliyun.ros.cdk.ga;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::GA::EndpointGroup</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-08-31T09:19:27.838Z")
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
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrEndpointGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrEndpointGroupId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.ga.RosEndpointGroup.EndpointConfigurationsProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.ga.RosEndpointGroup.EndpointConfigurationsProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "endpointConfigurations", java.util.Objects.requireNonNull(value, "endpointConfigurations is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getEndpointGroupRegion() {
        return software.amazon.jsii.Kernel.get(this, "endpointGroupRegion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEndpointGroupRegion(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "endpointGroupRegion", java.util.Objects.requireNonNull(value, "endpointGroupRegion is required"));
    }

    /**
     */
    public void setEndpointGroupRegion(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "endpointGroupRegion", java.util.Objects.requireNonNull(value, "endpointGroupRegion is required"));
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "description", value);
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "description", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEndpointGroupType() {
        return software.amazon.jsii.Kernel.get(this, "endpointGroupType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEndpointGroupType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "endpointGroupType", value);
    }

    /**
     */
    public void setEndpointGroupType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "endpointGroupType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEndpointIpVersion() {
        return software.amazon.jsii.Kernel.get(this, "endpointIpVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEndpointIpVersion(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "endpointIpVersion", value);
    }

    /**
     */
    public void setEndpointIpVersion(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "endpointIpVersion", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEndpointProtocolVersion() {
        return software.amazon.jsii.Kernel.get(this, "endpointProtocolVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEndpointProtocolVersion(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "endpointProtocolVersion", value);
    }

    /**
     */
    public void setEndpointProtocolVersion(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "endpointProtocolVersion", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEndpointRequestProtocol() {
        return software.amazon.jsii.Kernel.get(this, "endpointRequestProtocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEndpointRequestProtocol(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "endpointRequestProtocol", value);
    }

    /**
     */
    public void setEndpointRequestProtocol(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "endpointRequestProtocol", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckEnabled() {
        return software.amazon.jsii.Kernel.get(this, "healthCheckEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setHealthCheckEnabled(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "healthCheckEnabled", value);
    }

    /**
     */
    public void setHealthCheckEnabled(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "healthCheckEnabled", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckHost() {
        return software.amazon.jsii.Kernel.get(this, "healthCheckHost", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setHealthCheckHost(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "healthCheckHost", value);
    }

    /**
     */
    public void setHealthCheckHost(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "healthCheckHost", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckIntervalSeconds() {
        return software.amazon.jsii.Kernel.get(this, "healthCheckIntervalSeconds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setHealthCheckIntervalSeconds(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "healthCheckIntervalSeconds", value);
    }

    /**
     */
    public void setHealthCheckIntervalSeconds(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "healthCheckIntervalSeconds", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckPath() {
        return software.amazon.jsii.Kernel.get(this, "healthCheckPath", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setHealthCheckPath(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "healthCheckPath", value);
    }

    /**
     */
    public void setHealthCheckPath(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "healthCheckPath", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckPort() {
        return software.amazon.jsii.Kernel.get(this, "healthCheckPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setHealthCheckPort(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "healthCheckPort", value);
    }

    /**
     */
    public void setHealthCheckPort(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "healthCheckPort", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckProtocol() {
        return software.amazon.jsii.Kernel.get(this, "healthCheckProtocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setHealthCheckProtocol(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "healthCheckProtocol", value);
    }

    /**
     */
    public void setHealthCheckProtocol(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "healthCheckProtocol", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getName() {
        return software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "name", value);
    }

    /**
     */
    public void setName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "name", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPortOverrides() {
        return software.amazon.jsii.Kernel.get(this, "portOverrides", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPortOverrides(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "portOverrides", value);
    }

    /**
     */
    public void setPortOverrides(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.ga.RosEndpointGroup.PortOverridesProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.ga.RosEndpointGroup.PortOverridesProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "portOverrides", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.ga.RosEndpointGroup.TagsProperty> getTags() {
        return java.util.Optional.ofNullable((java.util.List<com.aliyun.ros.cdk.ga.RosEndpointGroup.TagsProperty>)(software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ga.RosEndpointGroup.TagsProperty.class))))).map(java.util.Collections::unmodifiableList).orElse(null);
    }

    /**
     */
    public void setTags(final @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.ga.RosEndpointGroup.TagsProperty> value) {
        software.amazon.jsii.Kernel.set(this, "tags", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getThresholdCount() {
        return software.amazon.jsii.Kernel.get(this, "thresholdCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setThresholdCount(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "thresholdCount", value);
    }

    /**
     */
    public void setThresholdCount(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "thresholdCount", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTrafficPercentage() {
        return software.amazon.jsii.Kernel.get(this, "trafficPercentage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTrafficPercentage(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "trafficPercentage", value);
    }

    /**
     */
    public void setTrafficPercentage(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
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
        default @org.jetbrains.annotations.Nullable java.lang.Object getEnableClientIpPreservation() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEnableProxyProtocol() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getProxyProtocolV2Config() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSubAddress() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getVpcId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getVSwitchIds() {
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
            java.lang.Object enableClientIpPreservation;
            java.lang.Object enableProxyProtocol;
            java.lang.Object proxyProtocolV2Config;
            java.lang.Object subAddress;
            java.lang.Object vpcId;
            java.lang.Object vSwitchIds;

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
             * Sets the value of {@link EndpointConfigurationsProperty#getEnableClientIpPreservation}
             * @param enableClientIpPreservation the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enableClientIpPreservation(java.lang.Boolean enableClientIpPreservation) {
                this.enableClientIpPreservation = enableClientIpPreservation;
                return this;
            }

            /**
             * Sets the value of {@link EndpointConfigurationsProperty#getEnableClientIpPreservation}
             * @param enableClientIpPreservation the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enableClientIpPreservation(com.aliyun.ros.cdk.core.IResolvable enableClientIpPreservation) {
                this.enableClientIpPreservation = enableClientIpPreservation;
                return this;
            }

            /**
             * Sets the value of {@link EndpointConfigurationsProperty#getEnableProxyProtocol}
             * @param enableProxyProtocol the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enableProxyProtocol(java.lang.Boolean enableProxyProtocol) {
                this.enableProxyProtocol = enableProxyProtocol;
                return this;
            }

            /**
             * Sets the value of {@link EndpointConfigurationsProperty#getEnableProxyProtocol}
             * @param enableProxyProtocol the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enableProxyProtocol(com.aliyun.ros.cdk.core.IResolvable enableProxyProtocol) {
                this.enableProxyProtocol = enableProxyProtocol;
                return this;
            }

            /**
             * Sets the value of {@link EndpointConfigurationsProperty#getProxyProtocolV2Config}
             * @param proxyProtocolV2Config the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder proxyProtocolV2Config(com.aliyun.ros.cdk.core.IResolvable proxyProtocolV2Config) {
                this.proxyProtocolV2Config = proxyProtocolV2Config;
                return this;
            }

            /**
             * Sets the value of {@link EndpointConfigurationsProperty#getProxyProtocolV2Config}
             * @param proxyProtocolV2Config the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder proxyProtocolV2Config(com.aliyun.ros.cdk.ga.RosEndpointGroup.ProxyProtocolV2ConfigProperty proxyProtocolV2Config) {
                this.proxyProtocolV2Config = proxyProtocolV2Config;
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
             * Sets the value of {@link EndpointConfigurationsProperty#getVpcId}
             * @param vpcId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vpcId(java.lang.String vpcId) {
                this.vpcId = vpcId;
                return this;
            }

            /**
             * Sets the value of {@link EndpointConfigurationsProperty#getVpcId}
             * @param vpcId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
                this.vpcId = vpcId;
                return this;
            }

            /**
             * Sets the value of {@link EndpointConfigurationsProperty#getVSwitchIds}
             * @param vSwitchIds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vSwitchIds(com.aliyun.ros.cdk.core.IResolvable vSwitchIds) {
                this.vSwitchIds = vSwitchIds;
                return this;
            }

            /**
             * Sets the value of {@link EndpointConfigurationsProperty#getVSwitchIds}
             * @param vSwitchIds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vSwitchIds(java.util.List<? extends java.lang.Object> vSwitchIds) {
                this.vSwitchIds = vSwitchIds;
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
            private final java.lang.Object enableClientIpPreservation;
            private final java.lang.Object enableProxyProtocol;
            private final java.lang.Object proxyProtocolV2Config;
            private final java.lang.Object subAddress;
            private final java.lang.Object vpcId;
            private final java.lang.Object vSwitchIds;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.endpoint = software.amazon.jsii.Kernel.get(this, "endpoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.weight = software.amazon.jsii.Kernel.get(this, "weight", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.enableClientIpPreservation = software.amazon.jsii.Kernel.get(this, "enableClientIpPreservation", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.enableProxyProtocol = software.amazon.jsii.Kernel.get(this, "enableProxyProtocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.proxyProtocolV2Config = software.amazon.jsii.Kernel.get(this, "proxyProtocolV2Config", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.subAddress = software.amazon.jsii.Kernel.get(this, "subAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.vSwitchIds = software.amazon.jsii.Kernel.get(this, "vSwitchIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.endpoint = java.util.Objects.requireNonNull(builder.endpoint, "endpoint is required");
                this.type = java.util.Objects.requireNonNull(builder.type, "type is required");
                this.weight = java.util.Objects.requireNonNull(builder.weight, "weight is required");
                this.enableClientIpPreservation = builder.enableClientIpPreservation;
                this.enableProxyProtocol = builder.enableProxyProtocol;
                this.proxyProtocolV2Config = builder.proxyProtocolV2Config;
                this.subAddress = builder.subAddress;
                this.vpcId = builder.vpcId;
                this.vSwitchIds = builder.vSwitchIds;
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
            public final java.lang.Object getEnableClientIpPreservation() {
                return this.enableClientIpPreservation;
            }

            @Override
            public final java.lang.Object getEnableProxyProtocol() {
                return this.enableProxyProtocol;
            }

            @Override
            public final java.lang.Object getProxyProtocolV2Config() {
                return this.proxyProtocolV2Config;
            }

            @Override
            public final java.lang.Object getSubAddress() {
                return this.subAddress;
            }

            @Override
            public final java.lang.Object getVpcId() {
                return this.vpcId;
            }

            @Override
            public final java.lang.Object getVSwitchIds() {
                return this.vSwitchIds;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("endpoint", om.valueToTree(this.getEndpoint()));
                data.set("type", om.valueToTree(this.getType()));
                data.set("weight", om.valueToTree(this.getWeight()));
                if (this.getEnableClientIpPreservation() != null) {
                    data.set("enableClientIpPreservation", om.valueToTree(this.getEnableClientIpPreservation()));
                }
                if (this.getEnableProxyProtocol() != null) {
                    data.set("enableProxyProtocol", om.valueToTree(this.getEnableProxyProtocol()));
                }
                if (this.getProxyProtocolV2Config() != null) {
                    data.set("proxyProtocolV2Config", om.valueToTree(this.getProxyProtocolV2Config()));
                }
                if (this.getSubAddress() != null) {
                    data.set("subAddress", om.valueToTree(this.getSubAddress()));
                }
                if (this.getVpcId() != null) {
                    data.set("vpcId", om.valueToTree(this.getVpcId()));
                }
                if (this.getVSwitchIds() != null) {
                    data.set("vSwitchIds", om.valueToTree(this.getVSwitchIds()));
                }

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
                if (!weight.equals(that.weight)) return false;
                if (this.enableClientIpPreservation != null ? !this.enableClientIpPreservation.equals(that.enableClientIpPreservation) : that.enableClientIpPreservation != null) return false;
                if (this.enableProxyProtocol != null ? !this.enableProxyProtocol.equals(that.enableProxyProtocol) : that.enableProxyProtocol != null) return false;
                if (this.proxyProtocolV2Config != null ? !this.proxyProtocolV2Config.equals(that.proxyProtocolV2Config) : that.proxyProtocolV2Config != null) return false;
                if (this.subAddress != null ? !this.subAddress.equals(that.subAddress) : that.subAddress != null) return false;
                if (this.vpcId != null ? !this.vpcId.equals(that.vpcId) : that.vpcId != null) return false;
                return this.vSwitchIds != null ? this.vSwitchIds.equals(that.vSwitchIds) : that.vSwitchIds == null;
            }

            @Override
            public final int hashCode() {
                int result = this.endpoint.hashCode();
                result = 31 * result + (this.type.hashCode());
                result = 31 * result + (this.weight.hashCode());
                result = 31 * result + (this.enableClientIpPreservation != null ? this.enableClientIpPreservation.hashCode() : 0);
                result = 31 * result + (this.enableProxyProtocol != null ? this.enableProxyProtocol.hashCode() : 0);
                result = 31 * result + (this.proxyProtocolV2Config != null ? this.proxyProtocolV2Config.hashCode() : 0);
                result = 31 * result + (this.subAddress != null ? this.subAddress.hashCode() : 0);
                result = 31 * result + (this.vpcId != null ? this.vpcId.hashCode() : 0);
                result = 31 * result + (this.vSwitchIds != null ? this.vSwitchIds.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ga.$Module.class, fqn = "@alicloud/ros-cdk-ga.RosEndpointGroup.PortOverridesProperty")
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
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ga.RosEndpointGroup.PortOverridesProperty"));
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
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ga.$Module.class, fqn = "@alicloud/ros-cdk-ga.RosEndpointGroup.ProxyProtocolV2ConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(ProxyProtocolV2ConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ProxyProtocolV2ConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getPpv2GaIdEnabled();

        /**
         * @return a {@link Builder} of {@link ProxyProtocolV2ConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ProxyProtocolV2ConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ProxyProtocolV2ConfigProperty> {
            java.lang.Object ppv2GaIdEnabled;

            /**
             * Sets the value of {@link ProxyProtocolV2ConfigProperty#getPpv2GaIdEnabled}
             * @param ppv2GaIdEnabled the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ppv2GaIdEnabled(java.lang.Boolean ppv2GaIdEnabled) {
                this.ppv2GaIdEnabled = ppv2GaIdEnabled;
                return this;
            }

            /**
             * Sets the value of {@link ProxyProtocolV2ConfigProperty#getPpv2GaIdEnabled}
             * @param ppv2GaIdEnabled the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ppv2GaIdEnabled(com.aliyun.ros.cdk.core.IResolvable ppv2GaIdEnabled) {
                this.ppv2GaIdEnabled = ppv2GaIdEnabled;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ProxyProtocolV2ConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ProxyProtocolV2ConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ProxyProtocolV2ConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ProxyProtocolV2ConfigProperty {
            private final java.lang.Object ppv2GaIdEnabled;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.ppv2GaIdEnabled = software.amazon.jsii.Kernel.get(this, "ppv2GaIdEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.ppv2GaIdEnabled = java.util.Objects.requireNonNull(builder.ppv2GaIdEnabled, "ppv2GaIdEnabled is required");
            }

            @Override
            public final java.lang.Object getPpv2GaIdEnabled() {
                return this.ppv2GaIdEnabled;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("ppv2GaIdEnabled", om.valueToTree(this.getPpv2GaIdEnabled()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ga.RosEndpointGroup.ProxyProtocolV2ConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ProxyProtocolV2ConfigProperty.Jsii$Proxy that = (ProxyProtocolV2ConfigProperty.Jsii$Proxy) o;

                return this.ppv2GaIdEnabled.equals(that.ppv2GaIdEnabled);
            }

            @Override
            public final int hashCode() {
                int result = this.ppv2GaIdEnabled.hashCode();
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ga.$Module.class, fqn = "@alicloud/ros-cdk-ga.RosEndpointGroup.TagsProperty")
    @software.amazon.jsii.Jsii.Proxy(TagsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface TagsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getKey();

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
             * @param key the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(java.lang.String key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link TagsProperty#getKey}
             * @param key the value to be set. This parameter is required.
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
                this.key = java.util.Objects.requireNonNull(builder.key, "key is required");
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

                data.set("key", om.valueToTree(this.getKey()));
                if (this.getValue() != null) {
                    data.set("value", om.valueToTree(this.getValue()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ga.RosEndpointGroup.TagsProperty"));
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

                if (!key.equals(that.key)) return false;
                return this.value != null ? this.value.equals(that.value) : that.value == null;
            }

            @Override
            public final int hashCode() {
                int result = this.key.hashCode();
                result = 31 * result + (this.value != null ? this.value.hashCode() : 0);
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
         * @param acceleratorId This parameter is required.
         */
        public Builder acceleratorId(final com.aliyun.ros.cdk.core.IResolvable acceleratorId) {
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
         * @param endpointGroupRegion This parameter is required.
         */
        public Builder endpointGroupRegion(final com.aliyun.ros.cdk.core.IResolvable endpointGroupRegion) {
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
         * @param listenerId This parameter is required.
         */
        public Builder listenerId(final com.aliyun.ros.cdk.core.IResolvable listenerId) {
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
         * @param description This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * @return {@code this}
         * @param endpointGroupType This parameter is required.
         */
        public Builder endpointGroupType(final java.lang.String endpointGroupType) {
            this.props.endpointGroupType(endpointGroupType);
            return this;
        }
        /**
         * @return {@code this}
         * @param endpointGroupType This parameter is required.
         */
        public Builder endpointGroupType(final com.aliyun.ros.cdk.core.IResolvable endpointGroupType) {
            this.props.endpointGroupType(endpointGroupType);
            return this;
        }

        /**
         * @return {@code this}
         * @param endpointIpVersion This parameter is required.
         */
        public Builder endpointIpVersion(final java.lang.String endpointIpVersion) {
            this.props.endpointIpVersion(endpointIpVersion);
            return this;
        }
        /**
         * @return {@code this}
         * @param endpointIpVersion This parameter is required.
         */
        public Builder endpointIpVersion(final com.aliyun.ros.cdk.core.IResolvable endpointIpVersion) {
            this.props.endpointIpVersion(endpointIpVersion);
            return this;
        }

        /**
         * @return {@code this}
         * @param endpointProtocolVersion This parameter is required.
         */
        public Builder endpointProtocolVersion(final java.lang.String endpointProtocolVersion) {
            this.props.endpointProtocolVersion(endpointProtocolVersion);
            return this;
        }
        /**
         * @return {@code this}
         * @param endpointProtocolVersion This parameter is required.
         */
        public Builder endpointProtocolVersion(final com.aliyun.ros.cdk.core.IResolvable endpointProtocolVersion) {
            this.props.endpointProtocolVersion(endpointProtocolVersion);
            return this;
        }

        /**
         * @return {@code this}
         * @param endpointRequestProtocol This parameter is required.
         */
        public Builder endpointRequestProtocol(final java.lang.String endpointRequestProtocol) {
            this.props.endpointRequestProtocol(endpointRequestProtocol);
            return this;
        }
        /**
         * @return {@code this}
         * @param endpointRequestProtocol This parameter is required.
         */
        public Builder endpointRequestProtocol(final com.aliyun.ros.cdk.core.IResolvable endpointRequestProtocol) {
            this.props.endpointRequestProtocol(endpointRequestProtocol);
            return this;
        }

        /**
         * @return {@code this}
         * @param healthCheckEnabled This parameter is required.
         */
        public Builder healthCheckEnabled(final java.lang.Boolean healthCheckEnabled) {
            this.props.healthCheckEnabled(healthCheckEnabled);
            return this;
        }
        /**
         * @return {@code this}
         * @param healthCheckEnabled This parameter is required.
         */
        public Builder healthCheckEnabled(final com.aliyun.ros.cdk.core.IResolvable healthCheckEnabled) {
            this.props.healthCheckEnabled(healthCheckEnabled);
            return this;
        }

        /**
         * @return {@code this}
         * @param healthCheckHost This parameter is required.
         */
        public Builder healthCheckHost(final java.lang.String healthCheckHost) {
            this.props.healthCheckHost(healthCheckHost);
            return this;
        }
        /**
         * @return {@code this}
         * @param healthCheckHost This parameter is required.
         */
        public Builder healthCheckHost(final com.aliyun.ros.cdk.core.IResolvable healthCheckHost) {
            this.props.healthCheckHost(healthCheckHost);
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
         * @param healthCheckIntervalSeconds This parameter is required.
         */
        public Builder healthCheckIntervalSeconds(final com.aliyun.ros.cdk.core.IResolvable healthCheckIntervalSeconds) {
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
         * @param healthCheckPath This parameter is required.
         */
        public Builder healthCheckPath(final com.aliyun.ros.cdk.core.IResolvable healthCheckPath) {
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
         * @param healthCheckPort This parameter is required.
         */
        public Builder healthCheckPort(final com.aliyun.ros.cdk.core.IResolvable healthCheckPort) {
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
         * @param healthCheckProtocol This parameter is required.
         */
        public Builder healthCheckProtocol(final com.aliyun.ros.cdk.core.IResolvable healthCheckProtocol) {
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
         * @param name This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props.name(name);
            return this;
        }

        /**
         * @return {@code this}
         * @param portOverrides This parameter is required.
         */
        public Builder portOverrides(final com.aliyun.ros.cdk.core.IResolvable portOverrides) {
            this.props.portOverrides(portOverrides);
            return this;
        }
        /**
         * @return {@code this}
         * @param portOverrides This parameter is required.
         */
        public Builder portOverrides(final java.util.List<? extends java.lang.Object> portOverrides) {
            this.props.portOverrides(portOverrides);
            return this;
        }

        /**
         * @return {@code this}
         * @param tags This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.ga.RosEndpointGroup.TagsProperty> tags) {
            this.props.tags(tags);
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
         * @param thresholdCount This parameter is required.
         */
        public Builder thresholdCount(final com.aliyun.ros.cdk.core.IResolvable thresholdCount) {
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
         * @return {@code this}
         * @param trafficPercentage This parameter is required.
         */
        public Builder trafficPercentage(final com.aliyun.ros.cdk.core.IResolvable trafficPercentage) {
            this.props.trafficPercentage(trafficPercentage);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ga.RosEndpointGroup}.
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
