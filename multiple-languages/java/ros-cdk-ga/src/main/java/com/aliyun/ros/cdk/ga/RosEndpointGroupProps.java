package com.aliyun.ros.cdk.ga;

/**
 * Properties for defining a `ALIYUN::GA::EndpointGroup`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.27.0 (build 07d848a)", date = "2021-04-07T04:01:42.593Z")
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
        private java.lang.Object acceleratorId;
        private java.lang.Object endpointConfigurations;
        private java.lang.Object endpointGroupRegion;
        private java.lang.Object listenerId;
        private java.lang.Object description;
        private java.lang.Object healthCheckIntervalSeconds;
        private java.lang.Object healthCheckPath;
        private java.lang.Object healthCheckPort;
        private java.lang.Object healthCheckProtocol;
        private java.lang.Object name;
        private java.lang.Object thresholdCount;
        private java.lang.Object trafficPercentage;

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
            return new Jsii$Proxy(acceleratorId, endpointConfigurations, endpointGroupRegion, listenerId, description, healthCheckIntervalSeconds, healthCheckPath, healthCheckPort, healthCheckProtocol, name, thresholdCount, trafficPercentage);
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
        private final java.lang.Object healthCheckIntervalSeconds;
        private final java.lang.Object healthCheckPath;
        private final java.lang.Object healthCheckPort;
        private final java.lang.Object healthCheckProtocol;
        private final java.lang.Object name;
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
            this.healthCheckIntervalSeconds = software.amazon.jsii.Kernel.get(this, "healthCheckIntervalSeconds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.healthCheckPath = software.amazon.jsii.Kernel.get(this, "healthCheckPath", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.healthCheckPort = software.amazon.jsii.Kernel.get(this, "healthCheckPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.healthCheckProtocol = software.amazon.jsii.Kernel.get(this, "healthCheckProtocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.thresholdCount = software.amazon.jsii.Kernel.get(this, "thresholdCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.trafficPercentage = software.amazon.jsii.Kernel.get(this, "trafficPercentage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.Object acceleratorId, final java.lang.Object endpointConfigurations, final java.lang.Object endpointGroupRegion, final java.lang.Object listenerId, final java.lang.Object description, final java.lang.Object healthCheckIntervalSeconds, final java.lang.Object healthCheckPath, final java.lang.Object healthCheckPort, final java.lang.Object healthCheckProtocol, final java.lang.Object name, final java.lang.Object thresholdCount, final java.lang.Object trafficPercentage) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.acceleratorId = java.util.Objects.requireNonNull(acceleratorId, "acceleratorId is required");
            this.endpointConfigurations = java.util.Objects.requireNonNull(endpointConfigurations, "endpointConfigurations is required");
            this.endpointGroupRegion = java.util.Objects.requireNonNull(endpointGroupRegion, "endpointGroupRegion is required");
            this.listenerId = java.util.Objects.requireNonNull(listenerId, "listenerId is required");
            this.description = description;
            this.healthCheckIntervalSeconds = healthCheckIntervalSeconds;
            this.healthCheckPath = healthCheckPath;
            this.healthCheckPort = healthCheckPort;
            this.healthCheckProtocol = healthCheckProtocol;
            this.name = name;
            this.thresholdCount = thresholdCount;
            this.trafficPercentage = trafficPercentage;
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
            if (this.healthCheckIntervalSeconds != null ? !this.healthCheckIntervalSeconds.equals(that.healthCheckIntervalSeconds) : that.healthCheckIntervalSeconds != null) return false;
            if (this.healthCheckPath != null ? !this.healthCheckPath.equals(that.healthCheckPath) : that.healthCheckPath != null) return false;
            if (this.healthCheckPort != null ? !this.healthCheckPort.equals(that.healthCheckPort) : that.healthCheckPort != null) return false;
            if (this.healthCheckProtocol != null ? !this.healthCheckProtocol.equals(that.healthCheckProtocol) : that.healthCheckProtocol != null) return false;
            if (this.name != null ? !this.name.equals(that.name) : that.name != null) return false;
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
            result = 31 * result + (this.healthCheckIntervalSeconds != null ? this.healthCheckIntervalSeconds.hashCode() : 0);
            result = 31 * result + (this.healthCheckPath != null ? this.healthCheckPath.hashCode() : 0);
            result = 31 * result + (this.healthCheckPort != null ? this.healthCheckPort.hashCode() : 0);
            result = 31 * result + (this.healthCheckProtocol != null ? this.healthCheckProtocol.hashCode() : 0);
            result = 31 * result + (this.name != null ? this.name.hashCode() : 0);
            result = 31 * result + (this.thresholdCount != null ? this.thresholdCount.hashCode() : 0);
            result = 31 * result + (this.trafficPercentage != null ? this.trafficPercentage.hashCode() : 0);
            return result;
        }
    }
}
