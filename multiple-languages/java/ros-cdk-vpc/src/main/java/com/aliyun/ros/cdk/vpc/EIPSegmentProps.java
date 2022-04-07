package com.aliyun.ros.cdk.vpc;

/**
 * Properties for defining a `ALIYUN::VPC::EIPSegment`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.55.1 (build 07d2d90)", date = "2022-04-07T03:17:42.738Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.EIPSegmentProps")
@software.amazon.jsii.Jsii.Proxy(EIPSegmentProps.Jsii$Proxy.class)
public interface EIPSegmentProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property eipMask: The mask of the contiguous EIP group.
     * <p>
     * Valid values:
     * 28: 16 contiguous EIPs are allocated for one call.
     * 27: 32 contiguous EIPs are allocated for one call.
     * 26: 64 contiguous EIPs are allocated for one call.
     * 25: 128 contiguous EIPs are allocated for one call.
     * 24: 256 contiguous EIPs are allocated for one call.
     * Note The actual number of assigned EIPs may be less than the expected number because one,
     * three, or four EIPs may be reserved.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEipMask();

    /**
     * Property bandwidth: The maximum bandwidth of the contiguous EIPs.
     * <p>
     * Unit: Mbit/s. Default value: 5.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBandwidth() {
        return null;
    }

    /**
     * Property internetChargeType: The metering method of the contiguous EIPs.
     * <p>
     * Valid values:
     * PayByBandwidth: Fees are charged based on bandwidth usage. This is the default value.
     * PayByTraffic: Fees are charged based on data transfer.
     * Note If the Netmode parameter is set to hybrid, InternetChargeType is set to PayByBandwidth.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInternetChargeType() {
        return null;
    }

    /**
     * Property netmode: The network type.
     * <p>
     * Valid values:
     * public: the Internet. This is the default value. After contiguous EIPs are associated with
     * cloud resources, the cloud resources can access the Internet by using the EIPs.
     * hybrid: the hybrid cloud. After contiguous EIPs are associated with cloud resources, the
     * cloud resources can access the hybrid cloud by using the EIPs.
     * Note This network type is available only to users who are added to the whitelist. To use
     * this network type, contact your customer manager.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNetmode() {
        return null;
    }

    /**
     * Property resourceGroupId: The ID of the resource group to which the EIPs belong.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link EIPSegmentProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link EIPSegmentProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<EIPSegmentProps> {
        java.lang.Object eipMask;
        java.lang.Object bandwidth;
        java.lang.Object internetChargeType;
        java.lang.Object netmode;
        java.lang.Object resourceGroupId;

        /**
         * Sets the value of {@link EIPSegmentProps#getEipMask}
         * @param eipMask Property eipMask: The mask of the contiguous EIP group. This parameter is required.
         *                Valid values:
         *                28: 16 contiguous EIPs are allocated for one call.
         *                27: 32 contiguous EIPs are allocated for one call.
         *                26: 64 contiguous EIPs are allocated for one call.
         *                25: 128 contiguous EIPs are allocated for one call.
         *                24: 256 contiguous EIPs are allocated for one call.
         *                Note The actual number of assigned EIPs may be less than the expected number because one,
         *                three, or four EIPs may be reserved.
         * @return {@code this}
         */
        public Builder eipMask(java.lang.Number eipMask) {
            this.eipMask = eipMask;
            return this;
        }

        /**
         * Sets the value of {@link EIPSegmentProps#getEipMask}
         * @param eipMask Property eipMask: The mask of the contiguous EIP group. This parameter is required.
         *                Valid values:
         *                28: 16 contiguous EIPs are allocated for one call.
         *                27: 32 contiguous EIPs are allocated for one call.
         *                26: 64 contiguous EIPs are allocated for one call.
         *                25: 128 contiguous EIPs are allocated for one call.
         *                24: 256 contiguous EIPs are allocated for one call.
         *                Note The actual number of assigned EIPs may be less than the expected number because one,
         *                three, or four EIPs may be reserved.
         * @return {@code this}
         */
        public Builder eipMask(com.aliyun.ros.cdk.core.IResolvable eipMask) {
            this.eipMask = eipMask;
            return this;
        }

        /**
         * Sets the value of {@link EIPSegmentProps#getBandwidth}
         * @param bandwidth Property bandwidth: The maximum bandwidth of the contiguous EIPs.
         *                  Unit: Mbit/s. Default value: 5.
         * @return {@code this}
         */
        public Builder bandwidth(java.lang.Number bandwidth) {
            this.bandwidth = bandwidth;
            return this;
        }

        /**
         * Sets the value of {@link EIPSegmentProps#getBandwidth}
         * @param bandwidth Property bandwidth: The maximum bandwidth of the contiguous EIPs.
         *                  Unit: Mbit/s. Default value: 5.
         * @return {@code this}
         */
        public Builder bandwidth(com.aliyun.ros.cdk.core.IResolvable bandwidth) {
            this.bandwidth = bandwidth;
            return this;
        }

        /**
         * Sets the value of {@link EIPSegmentProps#getInternetChargeType}
         * @param internetChargeType Property internetChargeType: The metering method of the contiguous EIPs.
         *                           Valid values:
         *                           PayByBandwidth: Fees are charged based on bandwidth usage. This is the default value.
         *                           PayByTraffic: Fees are charged based on data transfer.
         *                           Note If the Netmode parameter is set to hybrid, InternetChargeType is set to PayByBandwidth.
         * @return {@code this}
         */
        public Builder internetChargeType(java.lang.String internetChargeType) {
            this.internetChargeType = internetChargeType;
            return this;
        }

        /**
         * Sets the value of {@link EIPSegmentProps#getInternetChargeType}
         * @param internetChargeType Property internetChargeType: The metering method of the contiguous EIPs.
         *                           Valid values:
         *                           PayByBandwidth: Fees are charged based on bandwidth usage. This is the default value.
         *                           PayByTraffic: Fees are charged based on data transfer.
         *                           Note If the Netmode parameter is set to hybrid, InternetChargeType is set to PayByBandwidth.
         * @return {@code this}
         */
        public Builder internetChargeType(com.aliyun.ros.cdk.core.IResolvable internetChargeType) {
            this.internetChargeType = internetChargeType;
            return this;
        }

        /**
         * Sets the value of {@link EIPSegmentProps#getNetmode}
         * @param netmode Property netmode: The network type.
         *                Valid values:
         *                public: the Internet. This is the default value. After contiguous EIPs are associated with
         *                cloud resources, the cloud resources can access the Internet by using the EIPs.
         *                hybrid: the hybrid cloud. After contiguous EIPs are associated with cloud resources, the
         *                cloud resources can access the hybrid cloud by using the EIPs.
         *                Note This network type is available only to users who are added to the whitelist. To use
         *                this network type, contact your customer manager.
         * @return {@code this}
         */
        public Builder netmode(java.lang.String netmode) {
            this.netmode = netmode;
            return this;
        }

        /**
         * Sets the value of {@link EIPSegmentProps#getNetmode}
         * @param netmode Property netmode: The network type.
         *                Valid values:
         *                public: the Internet. This is the default value. After contiguous EIPs are associated with
         *                cloud resources, the cloud resources can access the Internet by using the EIPs.
         *                hybrid: the hybrid cloud. After contiguous EIPs are associated with cloud resources, the
         *                cloud resources can access the hybrid cloud by using the EIPs.
         *                Note This network type is available only to users who are added to the whitelist. To use
         *                this network type, contact your customer manager.
         * @return {@code this}
         */
        public Builder netmode(com.aliyun.ros.cdk.core.IResolvable netmode) {
            this.netmode = netmode;
            return this;
        }

        /**
         * Sets the value of {@link EIPSegmentProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the EIPs belong.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link EIPSegmentProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the EIPs belong.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link EIPSegmentProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public EIPSegmentProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link EIPSegmentProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements EIPSegmentProps {
        private final java.lang.Object eipMask;
        private final java.lang.Object bandwidth;
        private final java.lang.Object internetChargeType;
        private final java.lang.Object netmode;
        private final java.lang.Object resourceGroupId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.eipMask = software.amazon.jsii.Kernel.get(this, "eipMask", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.bandwidth = software.amazon.jsii.Kernel.get(this, "bandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.internetChargeType = software.amazon.jsii.Kernel.get(this, "internetChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.netmode = software.amazon.jsii.Kernel.get(this, "netmode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.eipMask = java.util.Objects.requireNonNull(builder.eipMask, "eipMask is required");
            this.bandwidth = builder.bandwidth;
            this.internetChargeType = builder.internetChargeType;
            this.netmode = builder.netmode;
            this.resourceGroupId = builder.resourceGroupId;
        }

        @Override
        public final java.lang.Object getEipMask() {
            return this.eipMask;
        }

        @Override
        public final java.lang.Object getBandwidth() {
            return this.bandwidth;
        }

        @Override
        public final java.lang.Object getInternetChargeType() {
            return this.internetChargeType;
        }

        @Override
        public final java.lang.Object getNetmode() {
            return this.netmode;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("eipMask", om.valueToTree(this.getEipMask()));
            if (this.getBandwidth() != null) {
                data.set("bandwidth", om.valueToTree(this.getBandwidth()));
            }
            if (this.getInternetChargeType() != null) {
                data.set("internetChargeType", om.valueToTree(this.getInternetChargeType()));
            }
            if (this.getNetmode() != null) {
                data.set("netmode", om.valueToTree(this.getNetmode()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.EIPSegmentProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            EIPSegmentProps.Jsii$Proxy that = (EIPSegmentProps.Jsii$Proxy) o;

            if (!eipMask.equals(that.eipMask)) return false;
            if (this.bandwidth != null ? !this.bandwidth.equals(that.bandwidth) : that.bandwidth != null) return false;
            if (this.internetChargeType != null ? !this.internetChargeType.equals(that.internetChargeType) : that.internetChargeType != null) return false;
            if (this.netmode != null ? !this.netmode.equals(that.netmode) : that.netmode != null) return false;
            return this.resourceGroupId != null ? this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.eipMask.hashCode();
            result = 31 * result + (this.bandwidth != null ? this.bandwidth.hashCode() : 0);
            result = 31 * result + (this.internetChargeType != null ? this.internetChargeType.hashCode() : 0);
            result = 31 * result + (this.netmode != null ? this.netmode.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            return result;
        }
    }
}
