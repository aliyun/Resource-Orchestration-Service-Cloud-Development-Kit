package com.aliyun.ros.cdk.ga;

/**
 * Properties for defining a <code>BasicIpSet</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicipset
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-08T09:17:11.247Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ga.$Module.class, fqn = "@alicloud/ros-cdk-ga.BasicIpSetProps")
@software.amazon.jsii.Jsii.Proxy(BasicIpSetProps.Jsii$Proxy.class)
public interface BasicIpSetProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property acceleratorId: The ID of the basic GA instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAcceleratorId();

    /**
     * Property accelerateRegionId: The ID of the acceleration region.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAccelerateRegionId() {
        return null;
    }

    /**
     * Property bandwidth: The bandwidth that you want to allocate to the acceleration region.
     * <p>
     * Unit: Mbit/s.You must allocate at least 2 Mbit/s of bandwidth to the acceleration region.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBandwidth() {
        return null;
    }

    /**
     * Property ispType: The line type of the elastic IP address (EIP) in the acceleration region.
     * <p>
     * Valid values:
     * BGP (default): BGP (Multi-ISP) lines.
     * BGP_PRO: BGP (Multi-ISP) Pro lines.
     * Valid values if you are allowed to use single-ISP bandwidth:
     * ChinaTelecom
     * ChinaUnicom
     * ChinaMobile
     * ChinaTelecom_L2
     * ChinaUnicom_L2
     * ChinaMobile_L2
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIspType() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link BasicIpSetProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link BasicIpSetProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<BasicIpSetProps> {
        java.lang.Object acceleratorId;
        java.lang.Object accelerateRegionId;
        java.lang.Object bandwidth;
        java.lang.Object ispType;

        /**
         * Sets the value of {@link BasicIpSetProps#getAcceleratorId}
         * @param acceleratorId Property acceleratorId: The ID of the basic GA instance. This parameter is required.
         * @return {@code this}
         */
        public Builder acceleratorId(java.lang.String acceleratorId) {
            this.acceleratorId = acceleratorId;
            return this;
        }

        /**
         * Sets the value of {@link BasicIpSetProps#getAcceleratorId}
         * @param acceleratorId Property acceleratorId: The ID of the basic GA instance. This parameter is required.
         * @return {@code this}
         */
        public Builder acceleratorId(com.aliyun.ros.cdk.core.IResolvable acceleratorId) {
            this.acceleratorId = acceleratorId;
            return this;
        }

        /**
         * Sets the value of {@link BasicIpSetProps#getAccelerateRegionId}
         * @param accelerateRegionId Property accelerateRegionId: The ID of the acceleration region.
         * @return {@code this}
         */
        public Builder accelerateRegionId(java.lang.String accelerateRegionId) {
            this.accelerateRegionId = accelerateRegionId;
            return this;
        }

        /**
         * Sets the value of {@link BasicIpSetProps#getAccelerateRegionId}
         * @param accelerateRegionId Property accelerateRegionId: The ID of the acceleration region.
         * @return {@code this}
         */
        public Builder accelerateRegionId(com.aliyun.ros.cdk.core.IResolvable accelerateRegionId) {
            this.accelerateRegionId = accelerateRegionId;
            return this;
        }

        /**
         * Sets the value of {@link BasicIpSetProps#getBandwidth}
         * @param bandwidth Property bandwidth: The bandwidth that you want to allocate to the acceleration region.
         *                  Unit: Mbit/s.You must allocate at least 2 Mbit/s of bandwidth to the acceleration region.
         * @return {@code this}
         */
        public Builder bandwidth(java.lang.Number bandwidth) {
            this.bandwidth = bandwidth;
            return this;
        }

        /**
         * Sets the value of {@link BasicIpSetProps#getBandwidth}
         * @param bandwidth Property bandwidth: The bandwidth that you want to allocate to the acceleration region.
         *                  Unit: Mbit/s.You must allocate at least 2 Mbit/s of bandwidth to the acceleration region.
         * @return {@code this}
         */
        public Builder bandwidth(com.aliyun.ros.cdk.core.IResolvable bandwidth) {
            this.bandwidth = bandwidth;
            return this;
        }

        /**
         * Sets the value of {@link BasicIpSetProps#getIspType}
         * @param ispType Property ispType: The line type of the elastic IP address (EIP) in the acceleration region.
         *                Valid values:
         *                BGP (default): BGP (Multi-ISP) lines.
         *                BGP_PRO: BGP (Multi-ISP) Pro lines.
         *                Valid values if you are allowed to use single-ISP bandwidth:
         *                ChinaTelecom
         *                ChinaUnicom
         *                ChinaMobile
         *                ChinaTelecom_L2
         *                ChinaUnicom_L2
         *                ChinaMobile_L2
         * @return {@code this}
         */
        public Builder ispType(java.lang.String ispType) {
            this.ispType = ispType;
            return this;
        }

        /**
         * Sets the value of {@link BasicIpSetProps#getIspType}
         * @param ispType Property ispType: The line type of the elastic IP address (EIP) in the acceleration region.
         *                Valid values:
         *                BGP (default): BGP (Multi-ISP) lines.
         *                BGP_PRO: BGP (Multi-ISP) Pro lines.
         *                Valid values if you are allowed to use single-ISP bandwidth:
         *                ChinaTelecom
         *                ChinaUnicom
         *                ChinaMobile
         *                ChinaTelecom_L2
         *                ChinaUnicom_L2
         *                ChinaMobile_L2
         * @return {@code this}
         */
        public Builder ispType(com.aliyun.ros.cdk.core.IResolvable ispType) {
            this.ispType = ispType;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link BasicIpSetProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public BasicIpSetProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link BasicIpSetProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements BasicIpSetProps {
        private final java.lang.Object acceleratorId;
        private final java.lang.Object accelerateRegionId;
        private final java.lang.Object bandwidth;
        private final java.lang.Object ispType;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.acceleratorId = software.amazon.jsii.Kernel.get(this, "acceleratorId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.accelerateRegionId = software.amazon.jsii.Kernel.get(this, "accelerateRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.bandwidth = software.amazon.jsii.Kernel.get(this, "bandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ispType = software.amazon.jsii.Kernel.get(this, "ispType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.acceleratorId = java.util.Objects.requireNonNull(builder.acceleratorId, "acceleratorId is required");
            this.accelerateRegionId = builder.accelerateRegionId;
            this.bandwidth = builder.bandwidth;
            this.ispType = builder.ispType;
        }

        @Override
        public final java.lang.Object getAcceleratorId() {
            return this.acceleratorId;
        }

        @Override
        public final java.lang.Object getAccelerateRegionId() {
            return this.accelerateRegionId;
        }

        @Override
        public final java.lang.Object getBandwidth() {
            return this.bandwidth;
        }

        @Override
        public final java.lang.Object getIspType() {
            return this.ispType;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("acceleratorId", om.valueToTree(this.getAcceleratorId()));
            if (this.getAccelerateRegionId() != null) {
                data.set("accelerateRegionId", om.valueToTree(this.getAccelerateRegionId()));
            }
            if (this.getBandwidth() != null) {
                data.set("bandwidth", om.valueToTree(this.getBandwidth()));
            }
            if (this.getIspType() != null) {
                data.set("ispType", om.valueToTree(this.getIspType()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ga.BasicIpSetProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            BasicIpSetProps.Jsii$Proxy that = (BasicIpSetProps.Jsii$Proxy) o;

            if (!acceleratorId.equals(that.acceleratorId)) return false;
            if (this.accelerateRegionId != null ? !this.accelerateRegionId.equals(that.accelerateRegionId) : that.accelerateRegionId != null) return false;
            if (this.bandwidth != null ? !this.bandwidth.equals(that.bandwidth) : that.bandwidth != null) return false;
            return this.ispType != null ? this.ispType.equals(that.ispType) : that.ispType == null;
        }

        @Override
        public final int hashCode() {
            int result = this.acceleratorId.hashCode();
            result = 31 * result + (this.accelerateRegionId != null ? this.accelerateRegionId.hashCode() : 0);
            result = 31 * result + (this.bandwidth != null ? this.bandwidth.hashCode() : 0);
            result = 31 * result + (this.ispType != null ? this.ispType.hashCode() : 0);
            return result;
        }
    }
}
