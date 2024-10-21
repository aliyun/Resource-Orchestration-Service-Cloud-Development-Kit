package com.aliyun.ros.cdk.cen;

/**
 * Properties for defining a <code>CenVbrHealthCheck</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-cenvbrhealthcheck
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-10-18T08:56:27.221Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cen.$Module.class, fqn = "@alicloud/ros-cdk-cen.CenVbrHealthCheckProps")
@software.amazon.jsii.Jsii.Proxy(CenVbrHealthCheckProps.Jsii$Proxy.class)
public interface CenVbrHealthCheckProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property cenId: The ID of the CEN instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCenId();

    /**
     * Property healthCheckTargetIp: Specifies the destination IP address of the health check.
     * <p>
     * The destination IP address is the IP address of the client-facing interface on the VBR instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getHealthCheckTargetIp();

    /**
     * Property vbrInstanceId: The ID of the VBR instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVbrInstanceId();

    /**
     * Property vbrInstanceRegionId: The ID of the region where the VBR instance is deployed.
     * <p>
     * You can call the DescribeRegionsoperation to query region IDs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVbrInstanceRegionId();

    /**
     * Property healthCheckInterval: Specifies the time interval at which probe packets are sent during the health check.
     * <p>
     * Default value: 2. Valid values: 2 to 3.  Unit: second.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckInterval() {
        return null;
    }

    /**
     * Property healthCheckSourceIp: You can use either of the following methods to specify the source IP address of the health check.
     * <p>
     * Automatic IP Address: The system automatically assigns an IP address within the CIDR block 100.96.0.0/16 (recommended).  Custom IP Address: You can specify a source IP address that is available within the CIDR block 10.0.0.0/8, 192.168.0.0/16, or 172.16.0.0/12. The specified source IP address must not overlap with the IP addresses of the Alibaba Cloud-facing and client-facing interfaces on the VBR instance, or the IP addresses of the instances with which the VBR instance needs to communicate in the CEN.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckSourceIp() {
        return null;
    }

    /**
     * Property healthyThreshold: Specifies the number of probe packets to be sent during the health check.
     * <p>
     * Default value: 8. Valid values: 3 to 8.  Unit: packet.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHealthyThreshold() {
        return null;
    }

    /**
     * Property vbrInstanceOwnerId: The User ID (UID) of the account to which the VBR instance belongs.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVbrInstanceOwnerId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link CenVbrHealthCheckProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link CenVbrHealthCheckProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<CenVbrHealthCheckProps> {
        java.lang.Object cenId;
        java.lang.Object healthCheckTargetIp;
        java.lang.Object vbrInstanceId;
        java.lang.Object vbrInstanceRegionId;
        java.lang.Object healthCheckInterval;
        java.lang.Object healthCheckSourceIp;
        java.lang.Object healthyThreshold;
        java.lang.Object vbrInstanceOwnerId;

        /**
         * Sets the value of {@link CenVbrHealthCheckProps#getCenId}
         * @param cenId Property cenId: The ID of the CEN instance. This parameter is required.
         * @return {@code this}
         */
        public Builder cenId(java.lang.String cenId) {
            this.cenId = cenId;
            return this;
        }

        /**
         * Sets the value of {@link CenVbrHealthCheckProps#getCenId}
         * @param cenId Property cenId: The ID of the CEN instance. This parameter is required.
         * @return {@code this}
         */
        public Builder cenId(com.aliyun.ros.cdk.core.IResolvable cenId) {
            this.cenId = cenId;
            return this;
        }

        /**
         * Sets the value of {@link CenVbrHealthCheckProps#getHealthCheckTargetIp}
         * @param healthCheckTargetIp Property healthCheckTargetIp: Specifies the destination IP address of the health check. This parameter is required.
         *                            The destination IP address is the IP address of the client-facing interface on the VBR instance.
         * @return {@code this}
         */
        public Builder healthCheckTargetIp(java.lang.String healthCheckTargetIp) {
            this.healthCheckTargetIp = healthCheckTargetIp;
            return this;
        }

        /**
         * Sets the value of {@link CenVbrHealthCheckProps#getHealthCheckTargetIp}
         * @param healthCheckTargetIp Property healthCheckTargetIp: Specifies the destination IP address of the health check. This parameter is required.
         *                            The destination IP address is the IP address of the client-facing interface on the VBR instance.
         * @return {@code this}
         */
        public Builder healthCheckTargetIp(com.aliyun.ros.cdk.core.IResolvable healthCheckTargetIp) {
            this.healthCheckTargetIp = healthCheckTargetIp;
            return this;
        }

        /**
         * Sets the value of {@link CenVbrHealthCheckProps#getVbrInstanceId}
         * @param vbrInstanceId Property vbrInstanceId: The ID of the VBR instance. This parameter is required.
         * @return {@code this}
         */
        public Builder vbrInstanceId(java.lang.String vbrInstanceId) {
            this.vbrInstanceId = vbrInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link CenVbrHealthCheckProps#getVbrInstanceId}
         * @param vbrInstanceId Property vbrInstanceId: The ID of the VBR instance. This parameter is required.
         * @return {@code this}
         */
        public Builder vbrInstanceId(com.aliyun.ros.cdk.core.IResolvable vbrInstanceId) {
            this.vbrInstanceId = vbrInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link CenVbrHealthCheckProps#getVbrInstanceRegionId}
         * @param vbrInstanceRegionId Property vbrInstanceRegionId: The ID of the region where the VBR instance is deployed. This parameter is required.
         *                            You can call the DescribeRegionsoperation to query region IDs.
         * @return {@code this}
         */
        public Builder vbrInstanceRegionId(java.lang.String vbrInstanceRegionId) {
            this.vbrInstanceRegionId = vbrInstanceRegionId;
            return this;
        }

        /**
         * Sets the value of {@link CenVbrHealthCheckProps#getVbrInstanceRegionId}
         * @param vbrInstanceRegionId Property vbrInstanceRegionId: The ID of the region where the VBR instance is deployed. This parameter is required.
         *                            You can call the DescribeRegionsoperation to query region IDs.
         * @return {@code this}
         */
        public Builder vbrInstanceRegionId(com.aliyun.ros.cdk.core.IResolvable vbrInstanceRegionId) {
            this.vbrInstanceRegionId = vbrInstanceRegionId;
            return this;
        }

        /**
         * Sets the value of {@link CenVbrHealthCheckProps#getHealthCheckInterval}
         * @param healthCheckInterval Property healthCheckInterval: Specifies the time interval at which probe packets are sent during the health check.
         *                            Default value: 2. Valid values: 2 to 3.  Unit: second.
         * @return {@code this}
         */
        public Builder healthCheckInterval(java.lang.Number healthCheckInterval) {
            this.healthCheckInterval = healthCheckInterval;
            return this;
        }

        /**
         * Sets the value of {@link CenVbrHealthCheckProps#getHealthCheckInterval}
         * @param healthCheckInterval Property healthCheckInterval: Specifies the time interval at which probe packets are sent during the health check.
         *                            Default value: 2. Valid values: 2 to 3.  Unit: second.
         * @return {@code this}
         */
        public Builder healthCheckInterval(com.aliyun.ros.cdk.core.IResolvable healthCheckInterval) {
            this.healthCheckInterval = healthCheckInterval;
            return this;
        }

        /**
         * Sets the value of {@link CenVbrHealthCheckProps#getHealthCheckSourceIp}
         * @param healthCheckSourceIp Property healthCheckSourceIp: You can use either of the following methods to specify the source IP address of the health check.
         *                            Automatic IP Address: The system automatically assigns an IP address within the CIDR block 100.96.0.0/16 (recommended).  Custom IP Address: You can specify a source IP address that is available within the CIDR block 10.0.0.0/8, 192.168.0.0/16, or 172.16.0.0/12. The specified source IP address must not overlap with the IP addresses of the Alibaba Cloud-facing and client-facing interfaces on the VBR instance, or the IP addresses of the instances with which the VBR instance needs to communicate in the CEN.
         * @return {@code this}
         */
        public Builder healthCheckSourceIp(java.lang.String healthCheckSourceIp) {
            this.healthCheckSourceIp = healthCheckSourceIp;
            return this;
        }

        /**
         * Sets the value of {@link CenVbrHealthCheckProps#getHealthCheckSourceIp}
         * @param healthCheckSourceIp Property healthCheckSourceIp: You can use either of the following methods to specify the source IP address of the health check.
         *                            Automatic IP Address: The system automatically assigns an IP address within the CIDR block 100.96.0.0/16 (recommended).  Custom IP Address: You can specify a source IP address that is available within the CIDR block 10.0.0.0/8, 192.168.0.0/16, or 172.16.0.0/12. The specified source IP address must not overlap with the IP addresses of the Alibaba Cloud-facing and client-facing interfaces on the VBR instance, or the IP addresses of the instances with which the VBR instance needs to communicate in the CEN.
         * @return {@code this}
         */
        public Builder healthCheckSourceIp(com.aliyun.ros.cdk.core.IResolvable healthCheckSourceIp) {
            this.healthCheckSourceIp = healthCheckSourceIp;
            return this;
        }

        /**
         * Sets the value of {@link CenVbrHealthCheckProps#getHealthyThreshold}
         * @param healthyThreshold Property healthyThreshold: Specifies the number of probe packets to be sent during the health check.
         *                         Default value: 8. Valid values: 3 to 8.  Unit: packet.
         * @return {@code this}
         */
        public Builder healthyThreshold(java.lang.Number healthyThreshold) {
            this.healthyThreshold = healthyThreshold;
            return this;
        }

        /**
         * Sets the value of {@link CenVbrHealthCheckProps#getHealthyThreshold}
         * @param healthyThreshold Property healthyThreshold: Specifies the number of probe packets to be sent during the health check.
         *                         Default value: 8. Valid values: 3 to 8.  Unit: packet.
         * @return {@code this}
         */
        public Builder healthyThreshold(com.aliyun.ros.cdk.core.IResolvable healthyThreshold) {
            this.healthyThreshold = healthyThreshold;
            return this;
        }

        /**
         * Sets the value of {@link CenVbrHealthCheckProps#getVbrInstanceOwnerId}
         * @param vbrInstanceOwnerId Property vbrInstanceOwnerId: The User ID (UID) of the account to which the VBR instance belongs.
         * @return {@code this}
         */
        public Builder vbrInstanceOwnerId(java.lang.Number vbrInstanceOwnerId) {
            this.vbrInstanceOwnerId = vbrInstanceOwnerId;
            return this;
        }

        /**
         * Sets the value of {@link CenVbrHealthCheckProps#getVbrInstanceOwnerId}
         * @param vbrInstanceOwnerId Property vbrInstanceOwnerId: The User ID (UID) of the account to which the VBR instance belongs.
         * @return {@code this}
         */
        public Builder vbrInstanceOwnerId(com.aliyun.ros.cdk.core.IResolvable vbrInstanceOwnerId) {
            this.vbrInstanceOwnerId = vbrInstanceOwnerId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link CenVbrHealthCheckProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public CenVbrHealthCheckProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link CenVbrHealthCheckProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements CenVbrHealthCheckProps {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cen.CenVbrHealthCheckProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            CenVbrHealthCheckProps.Jsii$Proxy that = (CenVbrHealthCheckProps.Jsii$Proxy) o;

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
