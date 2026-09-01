package com.aliyun.ros.cdk.ga;

/**
 * Properties for defining a <code>RosEndpointGroup</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-endpointgroup
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-08-31T09:19:27.854Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ga.$Module.class, fqn = "@alicloud/ros-cdk-ga.RosEndpointGroupProps")
@software.amazon.jsii.Jsii.Proxy(RosEndpointGroupProps.Jsii$Proxy.class)
public interface RosEndpointGroupProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAcceleratorId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEndpointConfigurations();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEndpointGroupRegion();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getListenerId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEndpointGroupType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEndpointIpVersion() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEndpointProtocolVersion() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEndpointRequestProtocol() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckEnabled() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckHost() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckIntervalSeconds() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckPath() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckPort() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckProtocol() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPortOverrides() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.ga.RosEndpointGroup.TagsProperty> getTags() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getThresholdCount() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTrafficPercentage() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosEndpointGroupProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosEndpointGroupProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosEndpointGroupProps> {
        java.lang.Object acceleratorId;
        java.lang.Object endpointConfigurations;
        java.lang.Object endpointGroupRegion;
        java.lang.Object listenerId;
        java.lang.Object description;
        java.lang.Object endpointGroupType;
        java.lang.Object endpointIpVersion;
        java.lang.Object endpointProtocolVersion;
        java.lang.Object endpointRequestProtocol;
        java.lang.Object healthCheckEnabled;
        java.lang.Object healthCheckHost;
        java.lang.Object healthCheckIntervalSeconds;
        java.lang.Object healthCheckPath;
        java.lang.Object healthCheckPort;
        java.lang.Object healthCheckProtocol;
        java.lang.Object name;
        java.lang.Object portOverrides;
        java.util.List<com.aliyun.ros.cdk.ga.RosEndpointGroup.TagsProperty> tags;
        java.lang.Object thresholdCount;
        java.lang.Object trafficPercentage;

        /**
         * Sets the value of {@link RosEndpointGroupProps#getAcceleratorId}
         * @param acceleratorId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder acceleratorId(java.lang.String acceleratorId) {
            this.acceleratorId = acceleratorId;
            return this;
        }

        /**
         * Sets the value of {@link RosEndpointGroupProps#getAcceleratorId}
         * @param acceleratorId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder acceleratorId(com.aliyun.ros.cdk.core.IResolvable acceleratorId) {
            this.acceleratorId = acceleratorId;
            return this;
        }

        /**
         * Sets the value of {@link RosEndpointGroupProps#getEndpointConfigurations}
         * @param endpointConfigurations the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder endpointConfigurations(com.aliyun.ros.cdk.core.IResolvable endpointConfigurations) {
            this.endpointConfigurations = endpointConfigurations;
            return this;
        }

        /**
         * Sets the value of {@link RosEndpointGroupProps#getEndpointConfigurations}
         * @param endpointConfigurations the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder endpointConfigurations(java.util.List<? extends java.lang.Object> endpointConfigurations) {
            this.endpointConfigurations = endpointConfigurations;
            return this;
        }

        /**
         * Sets the value of {@link RosEndpointGroupProps#getEndpointGroupRegion}
         * @param endpointGroupRegion the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder endpointGroupRegion(java.lang.String endpointGroupRegion) {
            this.endpointGroupRegion = endpointGroupRegion;
            return this;
        }

        /**
         * Sets the value of {@link RosEndpointGroupProps#getEndpointGroupRegion}
         * @param endpointGroupRegion the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder endpointGroupRegion(com.aliyun.ros.cdk.core.IResolvable endpointGroupRegion) {
            this.endpointGroupRegion = endpointGroupRegion;
            return this;
        }

        /**
         * Sets the value of {@link RosEndpointGroupProps#getListenerId}
         * @param listenerId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder listenerId(java.lang.String listenerId) {
            this.listenerId = listenerId;
            return this;
        }

        /**
         * Sets the value of {@link RosEndpointGroupProps#getListenerId}
         * @param listenerId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder listenerId(com.aliyun.ros.cdk.core.IResolvable listenerId) {
            this.listenerId = listenerId;
            return this;
        }

        /**
         * Sets the value of {@link RosEndpointGroupProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosEndpointGroupProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosEndpointGroupProps#getEndpointGroupType}
         * @param endpointGroupType the value to be set.
         * @return {@code this}
         */
        public Builder endpointGroupType(java.lang.String endpointGroupType) {
            this.endpointGroupType = endpointGroupType;
            return this;
        }

        /**
         * Sets the value of {@link RosEndpointGroupProps#getEndpointGroupType}
         * @param endpointGroupType the value to be set.
         * @return {@code this}
         */
        public Builder endpointGroupType(com.aliyun.ros.cdk.core.IResolvable endpointGroupType) {
            this.endpointGroupType = endpointGroupType;
            return this;
        }

        /**
         * Sets the value of {@link RosEndpointGroupProps#getEndpointIpVersion}
         * @param endpointIpVersion the value to be set.
         * @return {@code this}
         */
        public Builder endpointIpVersion(java.lang.String endpointIpVersion) {
            this.endpointIpVersion = endpointIpVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosEndpointGroupProps#getEndpointIpVersion}
         * @param endpointIpVersion the value to be set.
         * @return {@code this}
         */
        public Builder endpointIpVersion(com.aliyun.ros.cdk.core.IResolvable endpointIpVersion) {
            this.endpointIpVersion = endpointIpVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosEndpointGroupProps#getEndpointProtocolVersion}
         * @param endpointProtocolVersion the value to be set.
         * @return {@code this}
         */
        public Builder endpointProtocolVersion(java.lang.String endpointProtocolVersion) {
            this.endpointProtocolVersion = endpointProtocolVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosEndpointGroupProps#getEndpointProtocolVersion}
         * @param endpointProtocolVersion the value to be set.
         * @return {@code this}
         */
        public Builder endpointProtocolVersion(com.aliyun.ros.cdk.core.IResolvable endpointProtocolVersion) {
            this.endpointProtocolVersion = endpointProtocolVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosEndpointGroupProps#getEndpointRequestProtocol}
         * @param endpointRequestProtocol the value to be set.
         * @return {@code this}
         */
        public Builder endpointRequestProtocol(java.lang.String endpointRequestProtocol) {
            this.endpointRequestProtocol = endpointRequestProtocol;
            return this;
        }

        /**
         * Sets the value of {@link RosEndpointGroupProps#getEndpointRequestProtocol}
         * @param endpointRequestProtocol the value to be set.
         * @return {@code this}
         */
        public Builder endpointRequestProtocol(com.aliyun.ros.cdk.core.IResolvable endpointRequestProtocol) {
            this.endpointRequestProtocol = endpointRequestProtocol;
            return this;
        }

        /**
         * Sets the value of {@link RosEndpointGroupProps#getHealthCheckEnabled}
         * @param healthCheckEnabled the value to be set.
         * @return {@code this}
         */
        public Builder healthCheckEnabled(java.lang.Boolean healthCheckEnabled) {
            this.healthCheckEnabled = healthCheckEnabled;
            return this;
        }

        /**
         * Sets the value of {@link RosEndpointGroupProps#getHealthCheckEnabled}
         * @param healthCheckEnabled the value to be set.
         * @return {@code this}
         */
        public Builder healthCheckEnabled(com.aliyun.ros.cdk.core.IResolvable healthCheckEnabled) {
            this.healthCheckEnabled = healthCheckEnabled;
            return this;
        }

        /**
         * Sets the value of {@link RosEndpointGroupProps#getHealthCheckHost}
         * @param healthCheckHost the value to be set.
         * @return {@code this}
         */
        public Builder healthCheckHost(java.lang.String healthCheckHost) {
            this.healthCheckHost = healthCheckHost;
            return this;
        }

        /**
         * Sets the value of {@link RosEndpointGroupProps#getHealthCheckHost}
         * @param healthCheckHost the value to be set.
         * @return {@code this}
         */
        public Builder healthCheckHost(com.aliyun.ros.cdk.core.IResolvable healthCheckHost) {
            this.healthCheckHost = healthCheckHost;
            return this;
        }

        /**
         * Sets the value of {@link RosEndpointGroupProps#getHealthCheckIntervalSeconds}
         * @param healthCheckIntervalSeconds the value to be set.
         * @return {@code this}
         */
        public Builder healthCheckIntervalSeconds(java.lang.Number healthCheckIntervalSeconds) {
            this.healthCheckIntervalSeconds = healthCheckIntervalSeconds;
            return this;
        }

        /**
         * Sets the value of {@link RosEndpointGroupProps#getHealthCheckIntervalSeconds}
         * @param healthCheckIntervalSeconds the value to be set.
         * @return {@code this}
         */
        public Builder healthCheckIntervalSeconds(com.aliyun.ros.cdk.core.IResolvable healthCheckIntervalSeconds) {
            this.healthCheckIntervalSeconds = healthCheckIntervalSeconds;
            return this;
        }

        /**
         * Sets the value of {@link RosEndpointGroupProps#getHealthCheckPath}
         * @param healthCheckPath the value to be set.
         * @return {@code this}
         */
        public Builder healthCheckPath(java.lang.String healthCheckPath) {
            this.healthCheckPath = healthCheckPath;
            return this;
        }

        /**
         * Sets the value of {@link RosEndpointGroupProps#getHealthCheckPath}
         * @param healthCheckPath the value to be set.
         * @return {@code this}
         */
        public Builder healthCheckPath(com.aliyun.ros.cdk.core.IResolvable healthCheckPath) {
            this.healthCheckPath = healthCheckPath;
            return this;
        }

        /**
         * Sets the value of {@link RosEndpointGroupProps#getHealthCheckPort}
         * @param healthCheckPort the value to be set.
         * @return {@code this}
         */
        public Builder healthCheckPort(java.lang.Number healthCheckPort) {
            this.healthCheckPort = healthCheckPort;
            return this;
        }

        /**
         * Sets the value of {@link RosEndpointGroupProps#getHealthCheckPort}
         * @param healthCheckPort the value to be set.
         * @return {@code this}
         */
        public Builder healthCheckPort(com.aliyun.ros.cdk.core.IResolvable healthCheckPort) {
            this.healthCheckPort = healthCheckPort;
            return this;
        }

        /**
         * Sets the value of {@link RosEndpointGroupProps#getHealthCheckProtocol}
         * @param healthCheckProtocol the value to be set.
         * @return {@code this}
         */
        public Builder healthCheckProtocol(java.lang.String healthCheckProtocol) {
            this.healthCheckProtocol = healthCheckProtocol;
            return this;
        }

        /**
         * Sets the value of {@link RosEndpointGroupProps#getHealthCheckProtocol}
         * @param healthCheckProtocol the value to be set.
         * @return {@code this}
         */
        public Builder healthCheckProtocol(com.aliyun.ros.cdk.core.IResolvable healthCheckProtocol) {
            this.healthCheckProtocol = healthCheckProtocol;
            return this;
        }

        /**
         * Sets the value of {@link RosEndpointGroupProps#getName}
         * @param name the value to be set.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RosEndpointGroupProps#getName}
         * @param name the value to be set.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RosEndpointGroupProps#getPortOverrides}
         * @param portOverrides the value to be set.
         * @return {@code this}
         */
        public Builder portOverrides(com.aliyun.ros.cdk.core.IResolvable portOverrides) {
            this.portOverrides = portOverrides;
            return this;
        }

        /**
         * Sets the value of {@link RosEndpointGroupProps#getPortOverrides}
         * @param portOverrides the value to be set.
         * @return {@code this}
         */
        public Builder portOverrides(java.util.List<? extends java.lang.Object> portOverrides) {
            this.portOverrides = portOverrides;
            return this;
        }

        /**
         * Sets the value of {@link RosEndpointGroupProps#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.ga.RosEndpointGroup.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.ga.RosEndpointGroup.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link RosEndpointGroupProps#getThresholdCount}
         * @param thresholdCount the value to be set.
         * @return {@code this}
         */
        public Builder thresholdCount(java.lang.Number thresholdCount) {
            this.thresholdCount = thresholdCount;
            return this;
        }

        /**
         * Sets the value of {@link RosEndpointGroupProps#getThresholdCount}
         * @param thresholdCount the value to be set.
         * @return {@code this}
         */
        public Builder thresholdCount(com.aliyun.ros.cdk.core.IResolvable thresholdCount) {
            this.thresholdCount = thresholdCount;
            return this;
        }

        /**
         * Sets the value of {@link RosEndpointGroupProps#getTrafficPercentage}
         * @param trafficPercentage the value to be set.
         * @return {@code this}
         */
        public Builder trafficPercentage(java.lang.Number trafficPercentage) {
            this.trafficPercentage = trafficPercentage;
            return this;
        }

        /**
         * Sets the value of {@link RosEndpointGroupProps#getTrafficPercentage}
         * @param trafficPercentage the value to be set.
         * @return {@code this}
         */
        public Builder trafficPercentage(com.aliyun.ros.cdk.core.IResolvable trafficPercentage) {
            this.trafficPercentage = trafficPercentage;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosEndpointGroupProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosEndpointGroupProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosEndpointGroupProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosEndpointGroupProps {
        private final java.lang.Object acceleratorId;
        private final java.lang.Object endpointConfigurations;
        private final java.lang.Object endpointGroupRegion;
        private final java.lang.Object listenerId;
        private final java.lang.Object description;
        private final java.lang.Object endpointGroupType;
        private final java.lang.Object endpointIpVersion;
        private final java.lang.Object endpointProtocolVersion;
        private final java.lang.Object endpointRequestProtocol;
        private final java.lang.Object healthCheckEnabled;
        private final java.lang.Object healthCheckHost;
        private final java.lang.Object healthCheckIntervalSeconds;
        private final java.lang.Object healthCheckPath;
        private final java.lang.Object healthCheckPort;
        private final java.lang.Object healthCheckProtocol;
        private final java.lang.Object name;
        private final java.lang.Object portOverrides;
        private final java.util.List<com.aliyun.ros.cdk.ga.RosEndpointGroup.TagsProperty> tags;
        private final java.lang.Object thresholdCount;
        private final java.lang.Object trafficPercentage;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.acceleratorId = software.amazon.jsii.Kernel.get(this, "acceleratorId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.endpointConfigurations = software.amazon.jsii.Kernel.get(this, "endpointConfigurations", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.endpointGroupRegion = software.amazon.jsii.Kernel.get(this, "endpointGroupRegion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.listenerId = software.amazon.jsii.Kernel.get(this, "listenerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.endpointGroupType = software.amazon.jsii.Kernel.get(this, "endpointGroupType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.endpointIpVersion = software.amazon.jsii.Kernel.get(this, "endpointIpVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.endpointProtocolVersion = software.amazon.jsii.Kernel.get(this, "endpointProtocolVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.endpointRequestProtocol = software.amazon.jsii.Kernel.get(this, "endpointRequestProtocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.healthCheckEnabled = software.amazon.jsii.Kernel.get(this, "healthCheckEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.healthCheckHost = software.amazon.jsii.Kernel.get(this, "healthCheckHost", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.healthCheckIntervalSeconds = software.amazon.jsii.Kernel.get(this, "healthCheckIntervalSeconds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.healthCheckPath = software.amazon.jsii.Kernel.get(this, "healthCheckPath", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.healthCheckPort = software.amazon.jsii.Kernel.get(this, "healthCheckPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.healthCheckProtocol = software.amazon.jsii.Kernel.get(this, "healthCheckProtocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.portOverrides = software.amazon.jsii.Kernel.get(this, "portOverrides", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ga.RosEndpointGroup.TagsProperty.class)));
            this.thresholdCount = software.amazon.jsii.Kernel.get(this, "thresholdCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.trafficPercentage = software.amazon.jsii.Kernel.get(this, "trafficPercentage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.acceleratorId = java.util.Objects.requireNonNull(builder.acceleratorId, "acceleratorId is required");
            this.endpointConfigurations = java.util.Objects.requireNonNull(builder.endpointConfigurations, "endpointConfigurations is required");
            this.endpointGroupRegion = java.util.Objects.requireNonNull(builder.endpointGroupRegion, "endpointGroupRegion is required");
            this.listenerId = java.util.Objects.requireNonNull(builder.listenerId, "listenerId is required");
            this.description = builder.description;
            this.endpointGroupType = builder.endpointGroupType;
            this.endpointIpVersion = builder.endpointIpVersion;
            this.endpointProtocolVersion = builder.endpointProtocolVersion;
            this.endpointRequestProtocol = builder.endpointRequestProtocol;
            this.healthCheckEnabled = builder.healthCheckEnabled;
            this.healthCheckHost = builder.healthCheckHost;
            this.healthCheckIntervalSeconds = builder.healthCheckIntervalSeconds;
            this.healthCheckPath = builder.healthCheckPath;
            this.healthCheckPort = builder.healthCheckPort;
            this.healthCheckProtocol = builder.healthCheckProtocol;
            this.name = builder.name;
            this.portOverrides = builder.portOverrides;
            this.tags = (java.util.List<com.aliyun.ros.cdk.ga.RosEndpointGroup.TagsProperty>)builder.tags;
            this.thresholdCount = builder.thresholdCount;
            this.trafficPercentage = builder.trafficPercentage;
        }

        @Override
        public final java.lang.Object getAcceleratorId() {
            return this.acceleratorId;
        }

        @Override
        public final java.lang.Object getEndpointConfigurations() {
            return this.endpointConfigurations;
        }

        @Override
        public final java.lang.Object getEndpointGroupRegion() {
            return this.endpointGroupRegion;
        }

        @Override
        public final java.lang.Object getListenerId() {
            return this.listenerId;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getEndpointGroupType() {
            return this.endpointGroupType;
        }

        @Override
        public final java.lang.Object getEndpointIpVersion() {
            return this.endpointIpVersion;
        }

        @Override
        public final java.lang.Object getEndpointProtocolVersion() {
            return this.endpointProtocolVersion;
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
        public final java.lang.Object getHealthCheckHost() {
            return this.healthCheckHost;
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
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        public final java.lang.Object getPortOverrides() {
            return this.portOverrides;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.ga.RosEndpointGroup.TagsProperty> getTags() {
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

            data.set("acceleratorId", om.valueToTree(this.getAcceleratorId()));
            data.set("endpointConfigurations", om.valueToTree(this.getEndpointConfigurations()));
            data.set("endpointGroupRegion", om.valueToTree(this.getEndpointGroupRegion()));
            data.set("listenerId", om.valueToTree(this.getListenerId()));
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getEndpointGroupType() != null) {
                data.set("endpointGroupType", om.valueToTree(this.getEndpointGroupType()));
            }
            if (this.getEndpointIpVersion() != null) {
                data.set("endpointIpVersion", om.valueToTree(this.getEndpointIpVersion()));
            }
            if (this.getEndpointProtocolVersion() != null) {
                data.set("endpointProtocolVersion", om.valueToTree(this.getEndpointProtocolVersion()));
            }
            if (this.getEndpointRequestProtocol() != null) {
                data.set("endpointRequestProtocol", om.valueToTree(this.getEndpointRequestProtocol()));
            }
            if (this.getHealthCheckEnabled() != null) {
                data.set("healthCheckEnabled", om.valueToTree(this.getHealthCheckEnabled()));
            }
            if (this.getHealthCheckHost() != null) {
                data.set("healthCheckHost", om.valueToTree(this.getHealthCheckHost()));
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
            if (this.getName() != null) {
                data.set("name", om.valueToTree(this.getName()));
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ga.RosEndpointGroupProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosEndpointGroupProps.Jsii$Proxy that = (RosEndpointGroupProps.Jsii$Proxy) o;

            if (!acceleratorId.equals(that.acceleratorId)) return false;
            if (!endpointConfigurations.equals(that.endpointConfigurations)) return false;
            if (!endpointGroupRegion.equals(that.endpointGroupRegion)) return false;
            if (!listenerId.equals(that.listenerId)) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.endpointGroupType != null ? !this.endpointGroupType.equals(that.endpointGroupType) : that.endpointGroupType != null) return false;
            if (this.endpointIpVersion != null ? !this.endpointIpVersion.equals(that.endpointIpVersion) : that.endpointIpVersion != null) return false;
            if (this.endpointProtocolVersion != null ? !this.endpointProtocolVersion.equals(that.endpointProtocolVersion) : that.endpointProtocolVersion != null) return false;
            if (this.endpointRequestProtocol != null ? !this.endpointRequestProtocol.equals(that.endpointRequestProtocol) : that.endpointRequestProtocol != null) return false;
            if (this.healthCheckEnabled != null ? !this.healthCheckEnabled.equals(that.healthCheckEnabled) : that.healthCheckEnabled != null) return false;
            if (this.healthCheckHost != null ? !this.healthCheckHost.equals(that.healthCheckHost) : that.healthCheckHost != null) return false;
            if (this.healthCheckIntervalSeconds != null ? !this.healthCheckIntervalSeconds.equals(that.healthCheckIntervalSeconds) : that.healthCheckIntervalSeconds != null) return false;
            if (this.healthCheckPath != null ? !this.healthCheckPath.equals(that.healthCheckPath) : that.healthCheckPath != null) return false;
            if (this.healthCheckPort != null ? !this.healthCheckPort.equals(that.healthCheckPort) : that.healthCheckPort != null) return false;
            if (this.healthCheckProtocol != null ? !this.healthCheckProtocol.equals(that.healthCheckProtocol) : that.healthCheckProtocol != null) return false;
            if (this.name != null ? !this.name.equals(that.name) : that.name != null) return false;
            if (this.portOverrides != null ? !this.portOverrides.equals(that.portOverrides) : that.portOverrides != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            if (this.thresholdCount != null ? !this.thresholdCount.equals(that.thresholdCount) : that.thresholdCount != null) return false;
            return this.trafficPercentage != null ? this.trafficPercentage.equals(that.trafficPercentage) : that.trafficPercentage == null;
        }

        @Override
        public final int hashCode() {
            int result = this.acceleratorId.hashCode();
            result = 31 * result + (this.endpointConfigurations.hashCode());
            result = 31 * result + (this.endpointGroupRegion.hashCode());
            result = 31 * result + (this.listenerId.hashCode());
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.endpointGroupType != null ? this.endpointGroupType.hashCode() : 0);
            result = 31 * result + (this.endpointIpVersion != null ? this.endpointIpVersion.hashCode() : 0);
            result = 31 * result + (this.endpointProtocolVersion != null ? this.endpointProtocolVersion.hashCode() : 0);
            result = 31 * result + (this.endpointRequestProtocol != null ? this.endpointRequestProtocol.hashCode() : 0);
            result = 31 * result + (this.healthCheckEnabled != null ? this.healthCheckEnabled.hashCode() : 0);
            result = 31 * result + (this.healthCheckHost != null ? this.healthCheckHost.hashCode() : 0);
            result = 31 * result + (this.healthCheckIntervalSeconds != null ? this.healthCheckIntervalSeconds.hashCode() : 0);
            result = 31 * result + (this.healthCheckPath != null ? this.healthCheckPath.hashCode() : 0);
            result = 31 * result + (this.healthCheckPort != null ? this.healthCheckPort.hashCode() : 0);
            result = 31 * result + (this.healthCheckProtocol != null ? this.healthCheckProtocol.hashCode() : 0);
            result = 31 * result + (this.name != null ? this.name.hashCode() : 0);
            result = 31 * result + (this.portOverrides != null ? this.portOverrides.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.thresholdCount != null ? this.thresholdCount.hashCode() : 0);
            result = 31 * result + (this.trafficPercentage != null ? this.trafficPercentage.hashCode() : 0);
            return result;
        }
    }
}
