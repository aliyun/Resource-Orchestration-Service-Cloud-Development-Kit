package com.aliyun.ros.cdk.cen;

/**
 * Properties for defining a <code>ALIYUN::CEN::CenVbrHealthCheck</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.84.0 (build 5404dcf)", date = "2023-06-19T08:52:08.471Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cen.$Module.class, fqn = "@alicloud/ros-cdk-cen.RosCenVbrHealthCheckProps")
@software.amazon.jsii.Jsii.Proxy(RosCenVbrHealthCheckProps.Jsii$Proxy.class)
public interface RosCenVbrHealthCheckProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCenId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getHealthCheckTargetIp();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVbrInstanceId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVbrInstanceRegionId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckInterval() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckSourceIp() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHealthyThreshold() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVbrInstanceOwnerId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosCenVbrHealthCheckProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosCenVbrHealthCheckProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosCenVbrHealthCheckProps> {
        java.lang.Object cenId;
        java.lang.Object healthCheckTargetIp;
        java.lang.Object vbrInstanceId;
        java.lang.Object vbrInstanceRegionId;
        java.lang.Object healthCheckInterval;
        java.lang.Object healthCheckSourceIp;
        java.lang.Object healthyThreshold;
        java.lang.Object vbrInstanceOwnerId;

        /**
         * Sets the value of {@link RosCenVbrHealthCheckProps#getCenId}
         * @param cenId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder cenId(java.lang.String cenId) {
            this.cenId = cenId;
            return this;
        }

        /**
         * Sets the value of {@link RosCenVbrHealthCheckProps#getCenId}
         * @param cenId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder cenId(com.aliyun.ros.cdk.core.IResolvable cenId) {
            this.cenId = cenId;
            return this;
        }

        /**
         * Sets the value of {@link RosCenVbrHealthCheckProps#getHealthCheckTargetIp}
         * @param healthCheckTargetIp the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder healthCheckTargetIp(java.lang.String healthCheckTargetIp) {
            this.healthCheckTargetIp = healthCheckTargetIp;
            return this;
        }

        /**
         * Sets the value of {@link RosCenVbrHealthCheckProps#getHealthCheckTargetIp}
         * @param healthCheckTargetIp the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder healthCheckTargetIp(com.aliyun.ros.cdk.core.IResolvable healthCheckTargetIp) {
            this.healthCheckTargetIp = healthCheckTargetIp;
            return this;
        }

        /**
         * Sets the value of {@link RosCenVbrHealthCheckProps#getVbrInstanceId}
         * @param vbrInstanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vbrInstanceId(java.lang.String vbrInstanceId) {
            this.vbrInstanceId = vbrInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosCenVbrHealthCheckProps#getVbrInstanceId}
         * @param vbrInstanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vbrInstanceId(com.aliyun.ros.cdk.core.IResolvable vbrInstanceId) {
            this.vbrInstanceId = vbrInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosCenVbrHealthCheckProps#getVbrInstanceRegionId}
         * @param vbrInstanceRegionId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vbrInstanceRegionId(java.lang.String vbrInstanceRegionId) {
            this.vbrInstanceRegionId = vbrInstanceRegionId;
            return this;
        }

        /**
         * Sets the value of {@link RosCenVbrHealthCheckProps#getVbrInstanceRegionId}
         * @param vbrInstanceRegionId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vbrInstanceRegionId(com.aliyun.ros.cdk.core.IResolvable vbrInstanceRegionId) {
            this.vbrInstanceRegionId = vbrInstanceRegionId;
            return this;
        }

        /**
         * Sets the value of {@link RosCenVbrHealthCheckProps#getHealthCheckInterval}
         * @param healthCheckInterval the value to be set.
         * @return {@code this}
         */
        public Builder healthCheckInterval(java.lang.Number healthCheckInterval) {
            this.healthCheckInterval = healthCheckInterval;
            return this;
        }

        /**
         * Sets the value of {@link RosCenVbrHealthCheckProps#getHealthCheckInterval}
         * @param healthCheckInterval the value to be set.
         * @return {@code this}
         */
        public Builder healthCheckInterval(com.aliyun.ros.cdk.core.IResolvable healthCheckInterval) {
            this.healthCheckInterval = healthCheckInterval;
            return this;
        }

        /**
         * Sets the value of {@link RosCenVbrHealthCheckProps#getHealthCheckSourceIp}
         * @param healthCheckSourceIp the value to be set.
         * @return {@code this}
         */
        public Builder healthCheckSourceIp(java.lang.String healthCheckSourceIp) {
            this.healthCheckSourceIp = healthCheckSourceIp;
            return this;
        }

        /**
         * Sets the value of {@link RosCenVbrHealthCheckProps#getHealthCheckSourceIp}
         * @param healthCheckSourceIp the value to be set.
         * @return {@code this}
         */
        public Builder healthCheckSourceIp(com.aliyun.ros.cdk.core.IResolvable healthCheckSourceIp) {
            this.healthCheckSourceIp = healthCheckSourceIp;
            return this;
        }

        /**
         * Sets the value of {@link RosCenVbrHealthCheckProps#getHealthyThreshold}
         * @param healthyThreshold the value to be set.
         * @return {@code this}
         */
        public Builder healthyThreshold(java.lang.Number healthyThreshold) {
            this.healthyThreshold = healthyThreshold;
            return this;
        }

        /**
         * Sets the value of {@link RosCenVbrHealthCheckProps#getHealthyThreshold}
         * @param healthyThreshold the value to be set.
         * @return {@code this}
         */
        public Builder healthyThreshold(com.aliyun.ros.cdk.core.IResolvable healthyThreshold) {
            this.healthyThreshold = healthyThreshold;
            return this;
        }

        /**
         * Sets the value of {@link RosCenVbrHealthCheckProps#getVbrInstanceOwnerId}
         * @param vbrInstanceOwnerId the value to be set.
         * @return {@code this}
         */
        public Builder vbrInstanceOwnerId(java.lang.Number vbrInstanceOwnerId) {
            this.vbrInstanceOwnerId = vbrInstanceOwnerId;
            return this;
        }

        /**
         * Sets the value of {@link RosCenVbrHealthCheckProps#getVbrInstanceOwnerId}
         * @param vbrInstanceOwnerId the value to be set.
         * @return {@code this}
         */
        public Builder vbrInstanceOwnerId(com.aliyun.ros.cdk.core.IResolvable vbrInstanceOwnerId) {
            this.vbrInstanceOwnerId = vbrInstanceOwnerId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosCenVbrHealthCheckProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosCenVbrHealthCheckProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosCenVbrHealthCheckProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosCenVbrHealthCheckProps {
        private final java.lang.Object cenId;
        private final java.lang.Object healthCheckTargetIp;
        private final java.lang.Object vbrInstanceId;
        private final java.lang.Object vbrInstanceRegionId;
        private final java.lang.Object healthCheckInterval;
        private final java.lang.Object healthCheckSourceIp;
        private final java.lang.Object healthyThreshold;
        private final java.lang.Object vbrInstanceOwnerId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.cenId = software.amazon.jsii.Kernel.get(this, "cenId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.healthCheckTargetIp = software.amazon.jsii.Kernel.get(this, "healthCheckTargetIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vbrInstanceId = software.amazon.jsii.Kernel.get(this, "vbrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vbrInstanceRegionId = software.amazon.jsii.Kernel.get(this, "vbrInstanceRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.healthCheckInterval = software.amazon.jsii.Kernel.get(this, "healthCheckInterval", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.healthCheckSourceIp = software.amazon.jsii.Kernel.get(this, "healthCheckSourceIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.healthyThreshold = software.amazon.jsii.Kernel.get(this, "healthyThreshold", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vbrInstanceOwnerId = software.amazon.jsii.Kernel.get(this, "vbrInstanceOwnerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.cenId = java.util.Objects.requireNonNull(builder.cenId, "cenId is required");
            this.healthCheckTargetIp = java.util.Objects.requireNonNull(builder.healthCheckTargetIp, "healthCheckTargetIp is required");
            this.vbrInstanceId = java.util.Objects.requireNonNull(builder.vbrInstanceId, "vbrInstanceId is required");
            this.vbrInstanceRegionId = java.util.Objects.requireNonNull(builder.vbrInstanceRegionId, "vbrInstanceRegionId is required");
            this.healthCheckInterval = builder.healthCheckInterval;
            this.healthCheckSourceIp = builder.healthCheckSourceIp;
            this.healthyThreshold = builder.healthyThreshold;
            this.vbrInstanceOwnerId = builder.vbrInstanceOwnerId;
        }

        @Override
        public final java.lang.Object getCenId() {
            return this.cenId;
        }

        @Override
        public final java.lang.Object getHealthCheckTargetIp() {
            return this.healthCheckTargetIp;
        }

        @Override
        public final java.lang.Object getVbrInstanceId() {
            return this.vbrInstanceId;
        }

        @Override
        public final java.lang.Object getVbrInstanceRegionId() {
            return this.vbrInstanceRegionId;
        }

        @Override
        public final java.lang.Object getHealthCheckInterval() {
            return this.healthCheckInterval;
        }

        @Override
        public final java.lang.Object getHealthCheckSourceIp() {
            return this.healthCheckSourceIp;
        }

        @Override
        public final java.lang.Object getHealthyThreshold() {
            return this.healthyThreshold;
        }

        @Override
        public final java.lang.Object getVbrInstanceOwnerId() {
            return this.vbrInstanceOwnerId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("cenId", om.valueToTree(this.getCenId()));
            data.set("healthCheckTargetIp", om.valueToTree(this.getHealthCheckTargetIp()));
            data.set("vbrInstanceId", om.valueToTree(this.getVbrInstanceId()));
            data.set("vbrInstanceRegionId", om.valueToTree(this.getVbrInstanceRegionId()));
            if (this.getHealthCheckInterval() != null) {
                data.set("healthCheckInterval", om.valueToTree(this.getHealthCheckInterval()));
            }
            if (this.getHealthCheckSourceIp() != null) {
                data.set("healthCheckSourceIp", om.valueToTree(this.getHealthCheckSourceIp()));
            }
            if (this.getHealthyThreshold() != null) {
                data.set("healthyThreshold", om.valueToTree(this.getHealthyThreshold()));
            }
            if (this.getVbrInstanceOwnerId() != null) {
                data.set("vbrInstanceOwnerId", om.valueToTree(this.getVbrInstanceOwnerId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cen.RosCenVbrHealthCheckProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosCenVbrHealthCheckProps.Jsii$Proxy that = (RosCenVbrHealthCheckProps.Jsii$Proxy) o;

            if (!cenId.equals(that.cenId)) return false;
            if (!healthCheckTargetIp.equals(that.healthCheckTargetIp)) return false;
            if (!vbrInstanceId.equals(that.vbrInstanceId)) return false;
            if (!vbrInstanceRegionId.equals(that.vbrInstanceRegionId)) return false;
            if (this.healthCheckInterval != null ? !this.healthCheckInterval.equals(that.healthCheckInterval) : that.healthCheckInterval != null) return false;
            if (this.healthCheckSourceIp != null ? !this.healthCheckSourceIp.equals(that.healthCheckSourceIp) : that.healthCheckSourceIp != null) return false;
            if (this.healthyThreshold != null ? !this.healthyThreshold.equals(that.healthyThreshold) : that.healthyThreshold != null) return false;
            return this.vbrInstanceOwnerId != null ? this.vbrInstanceOwnerId.equals(that.vbrInstanceOwnerId) : that.vbrInstanceOwnerId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.cenId.hashCode();
            result = 31 * result + (this.healthCheckTargetIp.hashCode());
            result = 31 * result + (this.vbrInstanceId.hashCode());
            result = 31 * result + (this.vbrInstanceRegionId.hashCode());
            result = 31 * result + (this.healthCheckInterval != null ? this.healthCheckInterval.hashCode() : 0);
            result = 31 * result + (this.healthCheckSourceIp != null ? this.healthCheckSourceIp.hashCode() : 0);
            result = 31 * result + (this.healthyThreshold != null ? this.healthyThreshold.hashCode() : 0);
            result = 31 * result + (this.vbrInstanceOwnerId != null ? this.vbrInstanceOwnerId.hashCode() : 0);
            return result;
        }
    }
}
