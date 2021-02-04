package com.aliyun.ros.cdk.ga;

/**
 * Properties for defining a `ALIYUN::GA::EndpointGroup`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-02-04T07:29:35.997Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ga.$Module.class, fqn = "@alicloud/ros-cdk-ga.EndpointGroupProps")
@software.amazon.jsii.Jsii.Proxy(EndpointGroupProps.Jsii$Proxy.class)
public interface EndpointGroupProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getAcceleratorId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEndpointConfigurations();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getEndpointGroupRegion();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getListenerId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getHealthCheckIntervalSeconds() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getHealthCheckPath() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getHealthCheckPort() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getHealthCheckProtocol() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getThresholdCount() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getTrafficPercentage() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link EndpointGroupProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link EndpointGroupProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<EndpointGroupProps> {
        private java.lang.String acceleratorId;
        private java.lang.Object endpointConfigurations;
        private java.lang.String endpointGroupRegion;
        private java.lang.String listenerId;
        private java.lang.String description;
        private java.lang.Number healthCheckIntervalSeconds;
        private java.lang.String healthCheckPath;
        private java.lang.Number healthCheckPort;
        private java.lang.String healthCheckProtocol;
        private java.lang.String name;
        private java.lang.Number thresholdCount;
        private java.lang.Number trafficPercentage;

        /**
         * Sets the value of {@link EndpointGroupProps#getAcceleratorId}
         * @param acceleratorId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder acceleratorId(java.lang.String acceleratorId) {
            this.acceleratorId = acceleratorId;
            return this;
        }

        /**
         * Sets the value of {@link EndpointGroupProps#getEndpointConfigurations}
         * @param endpointConfigurations the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder endpointConfigurations(com.aliyun.ros.cdk.core.IResolvable endpointConfigurations) {
            this.endpointConfigurations = endpointConfigurations;
            return this;
        }

        /**
         * Sets the value of {@link EndpointGroupProps#getEndpointConfigurations}
         * @param endpointConfigurations the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder endpointConfigurations(java.util.List<? extends java.lang.Object> endpointConfigurations) {
            this.endpointConfigurations = endpointConfigurations;
            return this;
        }

        /**
         * Sets the value of {@link EndpointGroupProps#getEndpointGroupRegion}
         * @param endpointGroupRegion the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder endpointGroupRegion(java.lang.String endpointGroupRegion) {
            this.endpointGroupRegion = endpointGroupRegion;
            return this;
        }

        /**
         * Sets the value of {@link EndpointGroupProps#getListenerId}
         * @param listenerId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder listenerId(java.lang.String listenerId) {
            this.listenerId = listenerId;
            return this;
        }

        /**
         * Sets the value of {@link EndpointGroupProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link EndpointGroupProps#getHealthCheckIntervalSeconds}
         * @param healthCheckIntervalSeconds the value to be set.
         * @return {@code this}
         */
        public Builder healthCheckIntervalSeconds(java.lang.Number healthCheckIntervalSeconds) {
            this.healthCheckIntervalSeconds = healthCheckIntervalSeconds;
            return this;
        }

        /**
         * Sets the value of {@link EndpointGroupProps#getHealthCheckPath}
         * @param healthCheckPath the value to be set.
         * @return {@code this}
         */
        public Builder healthCheckPath(java.lang.String healthCheckPath) {
            this.healthCheckPath = healthCheckPath;
            return this;
        }

        /**
         * Sets the value of {@link EndpointGroupProps#getHealthCheckPort}
         * @param healthCheckPort the value to be set.
         * @return {@code this}
         */
        public Builder healthCheckPort(java.lang.Number healthCheckPort) {
            this.healthCheckPort = healthCheckPort;
            return this;
        }

        /**
         * Sets the value of {@link EndpointGroupProps#getHealthCheckProtocol}
         * @param healthCheckProtocol the value to be set.
         * @return {@code this}
         */
        public Builder healthCheckProtocol(java.lang.String healthCheckProtocol) {
            this.healthCheckProtocol = healthCheckProtocol;
            return this;
        }

        /**
         * Sets the value of {@link EndpointGroupProps#getName}
         * @param name the value to be set.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link EndpointGroupProps#getThresholdCount}
         * @param thresholdCount the value to be set.
         * @return {@code this}
         */
        public Builder thresholdCount(java.lang.Number thresholdCount) {
            this.thresholdCount = thresholdCount;
            return this;
        }

        /**
         * Sets the value of {@link EndpointGroupProps#getTrafficPercentage}
         * @param trafficPercentage the value to be set.
         * @return {@code this}
         */
        public Builder trafficPercentage(java.lang.Number trafficPercentage) {
            this.trafficPercentage = trafficPercentage;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link EndpointGroupProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public EndpointGroupProps build() {
            return new Jsii$Proxy(acceleratorId, endpointConfigurations, endpointGroupRegion, listenerId, description, healthCheckIntervalSeconds, healthCheckPath, healthCheckPort, healthCheckProtocol, name, thresholdCount, trafficPercentage);
        }
    }

    /**
     * An implementation for {@link EndpointGroupProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements EndpointGroupProps {
        private final java.lang.String acceleratorId;
        private final java.lang.Object endpointConfigurations;
        private final java.lang.String endpointGroupRegion;
        private final java.lang.String listenerId;
        private final java.lang.String description;
        private final java.lang.Number healthCheckIntervalSeconds;
        private final java.lang.String healthCheckPath;
        private final java.lang.Number healthCheckPort;
        private final java.lang.String healthCheckProtocol;
        private final java.lang.String name;
        private final java.lang.Number thresholdCount;
        private final java.lang.Number trafficPercentage;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.acceleratorId = software.amazon.jsii.Kernel.get(this, "acceleratorId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.endpointConfigurations = software.amazon.jsii.Kernel.get(this, "endpointConfigurations", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.endpointGroupRegion = software.amazon.jsii.Kernel.get(this, "endpointGroupRegion", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.listenerId = software.amazon.jsii.Kernel.get(this, "listenerId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.healthCheckIntervalSeconds = software.amazon.jsii.Kernel.get(this, "healthCheckIntervalSeconds", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.healthCheckPath = software.amazon.jsii.Kernel.get(this, "healthCheckPath", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.healthCheckPort = software.amazon.jsii.Kernel.get(this, "healthCheckPort", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.healthCheckProtocol = software.amazon.jsii.Kernel.get(this, "healthCheckProtocol", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.thresholdCount = software.amazon.jsii.Kernel.get(this, "thresholdCount", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.trafficPercentage = software.amazon.jsii.Kernel.get(this, "trafficPercentage", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String acceleratorId, final java.lang.Object endpointConfigurations, final java.lang.String endpointGroupRegion, final java.lang.String listenerId, final java.lang.String description, final java.lang.Number healthCheckIntervalSeconds, final java.lang.String healthCheckPath, final java.lang.Number healthCheckPort, final java.lang.String healthCheckProtocol, final java.lang.String name, final java.lang.Number thresholdCount, final java.lang.Number trafficPercentage) {
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
        public final java.lang.String getAcceleratorId() {
            return this.acceleratorId;
        }

        @Override
        public final java.lang.Object getEndpointConfigurations() {
            return this.endpointConfigurations;
        }

        @Override
        public final java.lang.String getEndpointGroupRegion() {
            return this.endpointGroupRegion;
        }

        @Override
        public final java.lang.String getListenerId() {
            return this.listenerId;
        }

        @Override
        public final java.lang.String getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Number getHealthCheckIntervalSeconds() {
            return this.healthCheckIntervalSeconds;
        }

        @Override
        public final java.lang.String getHealthCheckPath() {
            return this.healthCheckPath;
        }

        @Override
        public final java.lang.Number getHealthCheckPort() {
            return this.healthCheckPort;
        }

        @Override
        public final java.lang.String getHealthCheckProtocol() {
            return this.healthCheckProtocol;
        }

        @Override
        public final java.lang.String getName() {
            return this.name;
        }

        @Override
        public final java.lang.Number getThresholdCount() {
            return this.thresholdCount;
        }

        @Override
        public final java.lang.Number getTrafficPercentage() {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ga.EndpointGroupProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            EndpointGroupProps.Jsii$Proxy that = (EndpointGroupProps.Jsii$Proxy) o;

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
