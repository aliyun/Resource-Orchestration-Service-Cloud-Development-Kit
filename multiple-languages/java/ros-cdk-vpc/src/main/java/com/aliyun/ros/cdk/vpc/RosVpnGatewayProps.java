package com.aliyun.ros.cdk.vpc;

/**
 * Properties for defining a <code>RosVpnGateway</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vpngateway
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-10-18T08:56:34.211Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.RosVpnGatewayProps")
@software.amazon.jsii.Jsii.Proxy(RosVpnGatewayProps.Jsii$Proxy.class)
public interface RosVpnGatewayProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getBandwidth();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVpcId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoPay() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDisasterRecoveryVSwitchId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnableIpsec() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnableSsl() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceChargeType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNetworkType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriod() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSslConnections() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.vpc.RosVpnGateway.TagsProperty> getTags() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVpnType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVSwitchId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosVpnGatewayProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosVpnGatewayProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosVpnGatewayProps> {
        java.lang.Object bandwidth;
        java.lang.Object vpcId;
        java.lang.Object autoPay;
        java.lang.Object description;
        java.lang.Object disasterRecoveryVSwitchId;
        java.lang.Object enableIpsec;
        java.lang.Object enableSsl;
        java.lang.Object instanceChargeType;
        java.lang.Object name;
        java.lang.Object networkType;
        java.lang.Object period;
        java.lang.Object sslConnections;
        java.util.List<com.aliyun.ros.cdk.vpc.RosVpnGateway.TagsProperty> tags;
        java.lang.Object vpnType;
        java.lang.Object vSwitchId;

        /**
         * Sets the value of {@link RosVpnGatewayProps#getBandwidth}
         * @param bandwidth the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder bandwidth(java.lang.Number bandwidth) {
            this.bandwidth = bandwidth;
            return this;
        }

        /**
         * Sets the value of {@link RosVpnGatewayProps#getBandwidth}
         * @param bandwidth the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder bandwidth(com.aliyun.ros.cdk.core.IResolvable bandwidth) {
            this.bandwidth = bandwidth;
            return this;
        }

        /**
         * Sets the value of {@link RosVpnGatewayProps#getVpcId}
         * @param vpcId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link RosVpnGatewayProps#getVpcId}
         * @param vpcId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link RosVpnGatewayProps#getAutoPay}
         * @param autoPay the value to be set.
         * @return {@code this}
         */
        public Builder autoPay(java.lang.Boolean autoPay) {
            this.autoPay = autoPay;
            return this;
        }

        /**
         * Sets the value of {@link RosVpnGatewayProps#getAutoPay}
         * @param autoPay the value to be set.
         * @return {@code this}
         */
        public Builder autoPay(com.aliyun.ros.cdk.core.IResolvable autoPay) {
            this.autoPay = autoPay;
            return this;
        }

        /**
         * Sets the value of {@link RosVpnGatewayProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosVpnGatewayProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosVpnGatewayProps#getDisasterRecoveryVSwitchId}
         * @param disasterRecoveryVSwitchId the value to be set.
         * @return {@code this}
         */
        public Builder disasterRecoveryVSwitchId(java.lang.String disasterRecoveryVSwitchId) {
            this.disasterRecoveryVSwitchId = disasterRecoveryVSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link RosVpnGatewayProps#getDisasterRecoveryVSwitchId}
         * @param disasterRecoveryVSwitchId the value to be set.
         * @return {@code this}
         */
        public Builder disasterRecoveryVSwitchId(com.aliyun.ros.cdk.core.IResolvable disasterRecoveryVSwitchId) {
            this.disasterRecoveryVSwitchId = disasterRecoveryVSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link RosVpnGatewayProps#getEnableIpsec}
         * @param enableIpsec the value to be set.
         * @return {@code this}
         */
        public Builder enableIpsec(java.lang.Boolean enableIpsec) {
            this.enableIpsec = enableIpsec;
            return this;
        }

        /**
         * Sets the value of {@link RosVpnGatewayProps#getEnableIpsec}
         * @param enableIpsec the value to be set.
         * @return {@code this}
         */
        public Builder enableIpsec(com.aliyun.ros.cdk.core.IResolvable enableIpsec) {
            this.enableIpsec = enableIpsec;
            return this;
        }

        /**
         * Sets the value of {@link RosVpnGatewayProps#getEnableSsl}
         * @param enableSsl the value to be set.
         * @return {@code this}
         */
        public Builder enableSsl(java.lang.Boolean enableSsl) {
            this.enableSsl = enableSsl;
            return this;
        }

        /**
         * Sets the value of {@link RosVpnGatewayProps#getEnableSsl}
         * @param enableSsl the value to be set.
         * @return {@code this}
         */
        public Builder enableSsl(com.aliyun.ros.cdk.core.IResolvable enableSsl) {
            this.enableSsl = enableSsl;
            return this;
        }

        /**
         * Sets the value of {@link RosVpnGatewayProps#getInstanceChargeType}
         * @param instanceChargeType the value to be set.
         * @return {@code this}
         */
        public Builder instanceChargeType(java.lang.String instanceChargeType) {
            this.instanceChargeType = instanceChargeType;
            return this;
        }

        /**
         * Sets the value of {@link RosVpnGatewayProps#getInstanceChargeType}
         * @param instanceChargeType the value to be set.
         * @return {@code this}
         */
        public Builder instanceChargeType(com.aliyun.ros.cdk.core.IResolvable instanceChargeType) {
            this.instanceChargeType = instanceChargeType;
            return this;
        }

        /**
         * Sets the value of {@link RosVpnGatewayProps#getName}
         * @param name the value to be set.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RosVpnGatewayProps#getName}
         * @param name the value to be set.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RosVpnGatewayProps#getNetworkType}
         * @param networkType the value to be set.
         * @return {@code this}
         */
        public Builder networkType(java.lang.String networkType) {
            this.networkType = networkType;
            return this;
        }

        /**
         * Sets the value of {@link RosVpnGatewayProps#getNetworkType}
         * @param networkType the value to be set.
         * @return {@code this}
         */
        public Builder networkType(com.aliyun.ros.cdk.core.IResolvable networkType) {
            this.networkType = networkType;
            return this;
        }

        /**
         * Sets the value of {@link RosVpnGatewayProps#getPeriod}
         * @param period the value to be set.
         * @return {@code this}
         */
        public Builder period(java.lang.Number period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link RosVpnGatewayProps#getPeriod}
         * @param period the value to be set.
         * @return {@code this}
         */
        public Builder period(com.aliyun.ros.cdk.core.IResolvable period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link RosVpnGatewayProps#getSslConnections}
         * @param sslConnections the value to be set.
         * @return {@code this}
         */
        public Builder sslConnections(java.lang.Number sslConnections) {
            this.sslConnections = sslConnections;
            return this;
        }

        /**
         * Sets the value of {@link RosVpnGatewayProps#getSslConnections}
         * @param sslConnections the value to be set.
         * @return {@code this}
         */
        public Builder sslConnections(com.aliyun.ros.cdk.core.IResolvable sslConnections) {
            this.sslConnections = sslConnections;
            return this;
        }

        /**
         * Sets the value of {@link RosVpnGatewayProps#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.vpc.RosVpnGateway.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.vpc.RosVpnGateway.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link RosVpnGatewayProps#getVpnType}
         * @param vpnType the value to be set.
         * @return {@code this}
         */
        public Builder vpnType(java.lang.String vpnType) {
            this.vpnType = vpnType;
            return this;
        }

        /**
         * Sets the value of {@link RosVpnGatewayProps#getVpnType}
         * @param vpnType the value to be set.
         * @return {@code this}
         */
        public Builder vpnType(com.aliyun.ros.cdk.core.IResolvable vpnType) {
            this.vpnType = vpnType;
            return this;
        }

        /**
         * Sets the value of {@link RosVpnGatewayProps#getVSwitchId}
         * @param vSwitchId the value to be set.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link RosVpnGatewayProps#getVSwitchId}
         * @param vSwitchId the value to be set.
         * @return {@code this}
         */
        public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosVpnGatewayProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosVpnGatewayProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosVpnGatewayProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosVpnGatewayProps {
        private final java.lang.Object bandwidth;
        private final java.lang.Object vpcId;
        private final java.lang.Object autoPay;
        private final java.lang.Object description;
        private final java.lang.Object disasterRecoveryVSwitchId;
        private final java.lang.Object enableIpsec;
        private final java.lang.Object enableSsl;
        private final java.lang.Object instanceChargeType;
        private final java.lang.Object name;
        private final java.lang.Object networkType;
        private final java.lang.Object period;
        private final java.lang.Object sslConnections;
        private final java.util.List<com.aliyun.ros.cdk.vpc.RosVpnGateway.TagsProperty> tags;
        private final java.lang.Object vpnType;
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
            this.disasterRecoveryVSwitchId = software.amazon.jsii.Kernel.get(this, "disasterRecoveryVSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enableIpsec = software.amazon.jsii.Kernel.get(this, "enableIpsec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enableSsl = software.amazon.jsii.Kernel.get(this, "enableSsl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceChargeType = software.amazon.jsii.Kernel.get(this, "instanceChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.networkType = software.amazon.jsii.Kernel.get(this, "networkType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sslConnections = software.amazon.jsii.Kernel.get(this, "sslConnections", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.RosVpnGateway.TagsProperty.class)));
            this.vpnType = software.amazon.jsii.Kernel.get(this, "vpnType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
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
            this.disasterRecoveryVSwitchId = builder.disasterRecoveryVSwitchId;
            this.enableIpsec = builder.enableIpsec;
            this.enableSsl = builder.enableSsl;
            this.instanceChargeType = builder.instanceChargeType;
            this.name = builder.name;
            this.networkType = builder.networkType;
            this.period = builder.period;
            this.sslConnections = builder.sslConnections;
            this.tags = (java.util.List<com.aliyun.ros.cdk.vpc.RosVpnGateway.TagsProperty>)builder.tags;
            this.vpnType = builder.vpnType;
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
        public final java.lang.Object getDisasterRecoveryVSwitchId() {
            return this.disasterRecoveryVSwitchId;
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
        public final java.lang.Object getNetworkType() {
            return this.networkType;
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
        public final java.lang.Object getVpnType() {
            return this.vpnType;
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
            if (this.getDisasterRecoveryVSwitchId() != null) {
                data.set("disasterRecoveryVSwitchId", om.valueToTree(this.getDisasterRecoveryVSwitchId()));
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
            if (this.getNetworkType() != null) {
                data.set("networkType", om.valueToTree(this.getNetworkType()));
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
            if (this.getVpnType() != null) {
                data.set("vpnType", om.valueToTree(this.getVpnType()));
            }
            if (this.getVSwitchId() != null) {
                data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.RosVpnGatewayProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosVpnGatewayProps.Jsii$Proxy that = (RosVpnGatewayProps.Jsii$Proxy) o;

            if (!bandwidth.equals(that.bandwidth)) return false;
            if (!vpcId.equals(that.vpcId)) return false;
            if (this.autoPay != null ? !this.autoPay.equals(that.autoPay) : that.autoPay != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.disasterRecoveryVSwitchId != null ? !this.disasterRecoveryVSwitchId.equals(that.disasterRecoveryVSwitchId) : that.disasterRecoveryVSwitchId != null) return false;
            if (this.enableIpsec != null ? !this.enableIpsec.equals(that.enableIpsec) : that.enableIpsec != null) return false;
            if (this.enableSsl != null ? !this.enableSsl.equals(that.enableSsl) : that.enableSsl != null) return false;
            if (this.instanceChargeType != null ? !this.instanceChargeType.equals(that.instanceChargeType) : that.instanceChargeType != null) return false;
            if (this.name != null ? !this.name.equals(that.name) : that.name != null) return false;
            if (this.networkType != null ? !this.networkType.equals(that.networkType) : that.networkType != null) return false;
            if (this.period != null ? !this.period.equals(that.period) : that.period != null) return false;
            if (this.sslConnections != null ? !this.sslConnections.equals(that.sslConnections) : that.sslConnections != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            if (this.vpnType != null ? !this.vpnType.equals(that.vpnType) : that.vpnType != null) return false;
            return this.vSwitchId != null ? this.vSwitchId.equals(that.vSwitchId) : that.vSwitchId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.bandwidth.hashCode();
            result = 31 * result + (this.vpcId.hashCode());
            result = 31 * result + (this.autoPay != null ? this.autoPay.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.disasterRecoveryVSwitchId != null ? this.disasterRecoveryVSwitchId.hashCode() : 0);
            result = 31 * result + (this.enableIpsec != null ? this.enableIpsec.hashCode() : 0);
            result = 31 * result + (this.enableSsl != null ? this.enableSsl.hashCode() : 0);
            result = 31 * result + (this.instanceChargeType != null ? this.instanceChargeType.hashCode() : 0);
            result = 31 * result + (this.name != null ? this.name.hashCode() : 0);
            result = 31 * result + (this.networkType != null ? this.networkType.hashCode() : 0);
            result = 31 * result + (this.period != null ? this.period.hashCode() : 0);
            result = 31 * result + (this.sslConnections != null ? this.sslConnections.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.vpnType != null ? this.vpnType.hashCode() : 0);
            result = 31 * result + (this.vSwitchId != null ? this.vSwitchId.hashCode() : 0);
            return result;
        }
    }
}
