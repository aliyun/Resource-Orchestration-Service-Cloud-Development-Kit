package com.aliyun.ros.cdk.vpc;

/**
 * Properties for defining a `ALIYUN::VPC::VpnGateway`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.55.1 (build 07d2d90)", date = "2022-04-07T03:17:42.864Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.VpnGatewayProps")
@software.amazon.jsii.Jsii.Proxy(VpnGatewayProps.Jsii$Proxy.class)
public interface VpnGatewayProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property bandwidth: The public network bandwidth of the VPN gateway, in Mbps.
     * <p>
     * Value: 5|10|20|50|100|200.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getBandwidth();

    /**
     * Property vpcId: VPC ID to which the VPN gateway belongs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVpcId();

    /**
     * Property autoPay: Whether to automatically pay the bill of the VPN gateway, the value: true: Automatically pays the bill for the VPN gateway.
     * <p>
     * false (default): Does not automatically pay the bill for the VPN gateway.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoPay() {
        return null;
    }

    /**
     * Property description: Description of the VPN gateway.
     * <p>
     * The length is 2-256 characters and must start with a letter or Chinese, but cannot start with http:// or https://.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property enableIpsec: Whether to enable IPsec-VPN.
     * <p>
     * The IPsec-VPN feature provides a site-to-site connection. You can securely connect your local data center network to a private network or two proprietary networks by creating an IPsec tunnel. Value:
     * True (default): Enables the IPsec-VPN feature.
     * False: The IPsec-VPN function is not enabled.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnableIpsec() {
        return null;
    }

    /**
     * Property enableSsl: Enable the SSL-VPN function.
     * <p>
     * Provide point-to-site VPN connection, no need to configure customer gateway, terminal directly access. Value:
     * True: Enable SSL-VPN.
     * False (default): Does not enable SSL-VPN.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnableSsl() {
        return null;
    }

    /**
     * Property instanceChargeType: Accounting type of the VPN gateway, the value is: PREPAY, POSTPAY.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceChargeType() {
        return null;
    }

    /**
     * Property name: Name of the VPN gateway.
     * <p>
     * The default value is the ID of the VPN gateway.
     * The length is 2~100 English or Chinese characters. It must start with a large or small letter or Chinese. It can contain numbers, underscores (_) and dashes (-). It cannot start with http:// or https://.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getName() {
        return null;
    }

    /**
     * Property period: Purchase time, value: 1~9|12|24|36.
     * <p>
     * When the value of the InstanceChargeType parameter is PREPAY, this parameter is mandatory.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriod() {
        return null;
    }

    /**
     * Property sslConnections: The maximum number of clients allowed to connect at the same time.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSslConnections() {
        return null;
    }

    /**
     * Property tags: Tags to attach to instance.
     * <p>
     * Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.vpc.RosVpnGateway.TagsProperty> getTags() {
        return null;
    }

    /**
     * Property vSwitchId: The ID of the VSwitch to which the VPN gateway belongs.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVSwitchId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link VpnGatewayProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link VpnGatewayProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<VpnGatewayProps> {
        java.lang.Object bandwidth;
        java.lang.Object vpcId;
        java.lang.Object autoPay;
        java.lang.Object description;
        java.lang.Object enableIpsec;
        java.lang.Object enableSsl;
        java.lang.Object instanceChargeType;
        java.lang.Object name;
        java.lang.Object period;
        java.lang.Object sslConnections;
        java.util.List<com.aliyun.ros.cdk.vpc.RosVpnGateway.TagsProperty> tags;
        java.lang.Object vSwitchId;

        /**
         * Sets the value of {@link VpnGatewayProps#getBandwidth}
         * @param bandwidth Property bandwidth: The public network bandwidth of the VPN gateway, in Mbps. This parameter is required.
         *                  Value: 5|10|20|50|100|200.
         * @return {@code this}
         */
        public Builder bandwidth(java.lang.Number bandwidth) {
            this.bandwidth = bandwidth;
            return this;
        }

        /**
         * Sets the value of {@link VpnGatewayProps#getBandwidth}
         * @param bandwidth Property bandwidth: The public network bandwidth of the VPN gateway, in Mbps. This parameter is required.
         *                  Value: 5|10|20|50|100|200.
         * @return {@code this}
         */
        public Builder bandwidth(com.aliyun.ros.cdk.core.IResolvable bandwidth) {
            this.bandwidth = bandwidth;
            return this;
        }

        /**
         * Sets the value of {@link VpnGatewayProps#getVpcId}
         * @param vpcId Property vpcId: VPC ID to which the VPN gateway belongs. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link VpnGatewayProps#getVpcId}
         * @param vpcId Property vpcId: VPC ID to which the VPN gateway belongs. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link VpnGatewayProps#getAutoPay}
         * @param autoPay Property autoPay: Whether to automatically pay the bill of the VPN gateway, the value: true: Automatically pays the bill for the VPN gateway.
         *                false (default): Does not automatically pay the bill for the VPN gateway.
         * @return {@code this}
         */
        public Builder autoPay(java.lang.Boolean autoPay) {
            this.autoPay = autoPay;
            return this;
        }

        /**
         * Sets the value of {@link VpnGatewayProps#getAutoPay}
         * @param autoPay Property autoPay: Whether to automatically pay the bill of the VPN gateway, the value: true: Automatically pays the bill for the VPN gateway.
         *                false (default): Does not automatically pay the bill for the VPN gateway.
         * @return {@code this}
         */
        public Builder autoPay(com.aliyun.ros.cdk.core.IResolvable autoPay) {
            this.autoPay = autoPay;
            return this;
        }

        /**
         * Sets the value of {@link VpnGatewayProps#getDescription}
         * @param description Property description: Description of the VPN gateway.
         *                    The length is 2-256 characters and must start with a letter or Chinese, but cannot start with http:// or https://.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link VpnGatewayProps#getDescription}
         * @param description Property description: Description of the VPN gateway.
         *                    The length is 2-256 characters and must start with a letter or Chinese, but cannot start with http:// or https://.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link VpnGatewayProps#getEnableIpsec}
         * @param enableIpsec Property enableIpsec: Whether to enable IPsec-VPN.
         *                    The IPsec-VPN feature provides a site-to-site connection. You can securely connect your local data center network to a private network or two proprietary networks by creating an IPsec tunnel. Value:
         *                    True (default): Enables the IPsec-VPN feature.
         *                    False: The IPsec-VPN function is not enabled.
         * @return {@code this}
         */
        public Builder enableIpsec(java.lang.Boolean enableIpsec) {
            this.enableIpsec = enableIpsec;
            return this;
        }

        /**
         * Sets the value of {@link VpnGatewayProps#getEnableIpsec}
         * @param enableIpsec Property enableIpsec: Whether to enable IPsec-VPN.
         *                    The IPsec-VPN feature provides a site-to-site connection. You can securely connect your local data center network to a private network or two proprietary networks by creating an IPsec tunnel. Value:
         *                    True (default): Enables the IPsec-VPN feature.
         *                    False: The IPsec-VPN function is not enabled.
         * @return {@code this}
         */
        public Builder enableIpsec(com.aliyun.ros.cdk.core.IResolvable enableIpsec) {
            this.enableIpsec = enableIpsec;
            return this;
        }

        /**
         * Sets the value of {@link VpnGatewayProps#getEnableSsl}
         * @param enableSsl Property enableSsl: Enable the SSL-VPN function.
         *                  Provide point-to-site VPN connection, no need to configure customer gateway, terminal directly access. Value:
         *                  True: Enable SSL-VPN.
         *                  False (default): Does not enable SSL-VPN.
         * @return {@code this}
         */
        public Builder enableSsl(java.lang.Boolean enableSsl) {
            this.enableSsl = enableSsl;
            return this;
        }

        /**
         * Sets the value of {@link VpnGatewayProps#getEnableSsl}
         * @param enableSsl Property enableSsl: Enable the SSL-VPN function.
         *                  Provide point-to-site VPN connection, no need to configure customer gateway, terminal directly access. Value:
         *                  True: Enable SSL-VPN.
         *                  False (default): Does not enable SSL-VPN.
         * @return {@code this}
         */
        public Builder enableSsl(com.aliyun.ros.cdk.core.IResolvable enableSsl) {
            this.enableSsl = enableSsl;
            return this;
        }

        /**
         * Sets the value of {@link VpnGatewayProps#getInstanceChargeType}
         * @param instanceChargeType Property instanceChargeType: Accounting type of the VPN gateway, the value is: PREPAY, POSTPAY.
         * @return {@code this}
         */
        public Builder instanceChargeType(java.lang.String instanceChargeType) {
            this.instanceChargeType = instanceChargeType;
            return this;
        }

        /**
         * Sets the value of {@link VpnGatewayProps#getInstanceChargeType}
         * @param instanceChargeType Property instanceChargeType: Accounting type of the VPN gateway, the value is: PREPAY, POSTPAY.
         * @return {@code this}
         */
        public Builder instanceChargeType(com.aliyun.ros.cdk.core.IResolvable instanceChargeType) {
            this.instanceChargeType = instanceChargeType;
            return this;
        }

        /**
         * Sets the value of {@link VpnGatewayProps#getName}
         * @param name Property name: Name of the VPN gateway.
         *             The default value is the ID of the VPN gateway.
         *             The length is 2~100 English or Chinese characters. It must start with a large or small letter or Chinese. It can contain numbers, underscores (_) and dashes (-). It cannot start with http:// or https://.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link VpnGatewayProps#getName}
         * @param name Property name: Name of the VPN gateway.
         *             The default value is the ID of the VPN gateway.
         *             The length is 2~100 English or Chinese characters. It must start with a large or small letter or Chinese. It can contain numbers, underscores (_) and dashes (-). It cannot start with http:// or https://.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link VpnGatewayProps#getPeriod}
         * @param period Property period: Purchase time, value: 1~9|12|24|36.
         *               When the value of the InstanceChargeType parameter is PREPAY, this parameter is mandatory.
         * @return {@code this}
         */
        public Builder period(java.lang.Number period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link VpnGatewayProps#getPeriod}
         * @param period Property period: Purchase time, value: 1~9|12|24|36.
         *               When the value of the InstanceChargeType parameter is PREPAY, this parameter is mandatory.
         * @return {@code this}
         */
        public Builder period(com.aliyun.ros.cdk.core.IResolvable period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link VpnGatewayProps#getSslConnections}
         * @param sslConnections Property sslConnections: The maximum number of clients allowed to connect at the same time.
         * @return {@code this}
         */
        public Builder sslConnections(java.lang.Number sslConnections) {
            this.sslConnections = sslConnections;
            return this;
        }

        /**
         * Sets the value of {@link VpnGatewayProps#getSslConnections}
         * @param sslConnections Property sslConnections: The maximum number of clients allowed to connect at the same time.
         * @return {@code this}
         */
        public Builder sslConnections(com.aliyun.ros.cdk.core.IResolvable sslConnections) {
            this.sslConnections = sslConnections;
            return this;
        }

        /**
         * Sets the value of {@link VpnGatewayProps#getTags}
         * @param tags Property tags: Tags to attach to instance.
         *             Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.vpc.RosVpnGateway.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.vpc.RosVpnGateway.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link VpnGatewayProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: The ID of the VSwitch to which the VPN gateway belongs.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link VpnGatewayProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: The ID of the VSwitch to which the VPN gateway belongs.
         * @return {@code this}
         */
        public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link VpnGatewayProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public VpnGatewayProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link VpnGatewayProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements VpnGatewayProps {
        private final java.lang.Object bandwidth;
        private final java.lang.Object vpcId;
        private final java.lang.Object autoPay;
        private final java.lang.Object description;
        private final java.lang.Object enableIpsec;
        private final java.lang.Object enableSsl;
        private final java.lang.Object instanceChargeType;
        private final java.lang.Object name;
        private final java.lang.Object period;
        private final java.lang.Object sslConnections;
        private final java.util.List<com.aliyun.ros.cdk.vpc.RosVpnGateway.TagsProperty> tags;
        private final java.lang.Object vSwitchId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.bandwidth = software.amazon.jsii.Kernel.get(this, "bandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoPay = software.amazon.jsii.Kernel.get(this, "autoPay", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enableIpsec = software.amazon.jsii.Kernel.get(this, "enableIpsec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enableSsl = software.amazon.jsii.Kernel.get(this, "enableSsl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceChargeType = software.amazon.jsii.Kernel.get(this, "instanceChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sslConnections = software.amazon.jsii.Kernel.get(this, "sslConnections", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.RosVpnGateway.TagsProperty.class)));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.bandwidth = java.util.Objects.requireNonNull(builder.bandwidth, "bandwidth is required");
            this.vpcId = java.util.Objects.requireNonNull(builder.vpcId, "vpcId is required");
            this.autoPay = builder.autoPay;
            this.description = builder.description;
            this.enableIpsec = builder.enableIpsec;
            this.enableSsl = builder.enableSsl;
            this.instanceChargeType = builder.instanceChargeType;
            this.name = builder.name;
            this.period = builder.period;
            this.sslConnections = builder.sslConnections;
            this.tags = (java.util.List<com.aliyun.ros.cdk.vpc.RosVpnGateway.TagsProperty>)builder.tags;
            this.vSwitchId = builder.vSwitchId;
        }

        @Override
        public final java.lang.Object getBandwidth() {
            return this.bandwidth;
        }

        @Override
        public final java.lang.Object getVpcId() {
            return this.vpcId;
        }

        @Override
        public final java.lang.Object getAutoPay() {
            return this.autoPay;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getEnableIpsec() {
            return this.enableIpsec;
        }

        @Override
        public final java.lang.Object getEnableSsl() {
            return this.enableSsl;
        }

        @Override
        public final java.lang.Object getInstanceChargeType() {
            return this.instanceChargeType;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        public final java.lang.Object getPeriod() {
            return this.period;
        }

        @Override
        public final java.lang.Object getSslConnections() {
            return this.sslConnections;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.vpc.RosVpnGateway.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        public final java.lang.Object getVSwitchId() {
            return this.vSwitchId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("bandwidth", om.valueToTree(this.getBandwidth()));
            data.set("vpcId", om.valueToTree(this.getVpcId()));
            if (this.getAutoPay() != null) {
                data.set("autoPay", om.valueToTree(this.getAutoPay()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getEnableIpsec() != null) {
                data.set("enableIpsec", om.valueToTree(this.getEnableIpsec()));
            }
            if (this.getEnableSsl() != null) {
                data.set("enableSsl", om.valueToTree(this.getEnableSsl()));
            }
            if (this.getInstanceChargeType() != null) {
                data.set("instanceChargeType", om.valueToTree(this.getInstanceChargeType()));
            }
            if (this.getName() != null) {
                data.set("name", om.valueToTree(this.getName()));
            }
            if (this.getPeriod() != null) {
                data.set("period", om.valueToTree(this.getPeriod()));
            }
            if (this.getSslConnections() != null) {
                data.set("sslConnections", om.valueToTree(this.getSslConnections()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getVSwitchId() != null) {
                data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.VpnGatewayProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            VpnGatewayProps.Jsii$Proxy that = (VpnGatewayProps.Jsii$Proxy) o;

            if (!bandwidth.equals(that.bandwidth)) return false;
            if (!vpcId.equals(that.vpcId)) return false;
            if (this.autoPay != null ? !this.autoPay.equals(that.autoPay) : that.autoPay != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.enableIpsec != null ? !this.enableIpsec.equals(that.enableIpsec) : that.enableIpsec != null) return false;
            if (this.enableSsl != null ? !this.enableSsl.equals(that.enableSsl) : that.enableSsl != null) return false;
            if (this.instanceChargeType != null ? !this.instanceChargeType.equals(that.instanceChargeType) : that.instanceChargeType != null) return false;
            if (this.name != null ? !this.name.equals(that.name) : that.name != null) return false;
            if (this.period != null ? !this.period.equals(that.period) : that.period != null) return false;
            if (this.sslConnections != null ? !this.sslConnections.equals(that.sslConnections) : that.sslConnections != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            return this.vSwitchId != null ? this.vSwitchId.equals(that.vSwitchId) : that.vSwitchId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.bandwidth.hashCode();
            result = 31 * result + (this.vpcId.hashCode());
            result = 31 * result + (this.autoPay != null ? this.autoPay.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.enableIpsec != null ? this.enableIpsec.hashCode() : 0);
            result = 31 * result + (this.enableSsl != null ? this.enableSsl.hashCode() : 0);
            result = 31 * result + (this.instanceChargeType != null ? this.instanceChargeType.hashCode() : 0);
            result = 31 * result + (this.name != null ? this.name.hashCode() : 0);
            result = 31 * result + (this.period != null ? this.period.hashCode() : 0);
            result = 31 * result + (this.sslConnections != null ? this.sslConnections.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.vSwitchId != null ? this.vSwitchId.hashCode() : 0);
            return result;
        }
    }
}
