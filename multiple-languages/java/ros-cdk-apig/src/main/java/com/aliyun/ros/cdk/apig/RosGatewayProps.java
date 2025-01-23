package com.aliyun.ros.cdk.apig;

/**
 * Properties for defining a <code>RosGateway</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-gateway
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-01-23T09:30:34.651Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.RosGatewayProps")
@software.amazon.jsii.Jsii.Proxy(RosGatewayProps.Jsii$Proxy.class)
public interface RosGatewayProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPaymentType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSpec();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getZoneConfig();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getGatewayName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLogConfig() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNetworkAccessConfig() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVpc() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVSwitch() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosGatewayProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosGatewayProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosGatewayProps> {
        java.lang.Object paymentType;
        java.lang.Object spec;
        java.lang.Object zoneConfig;
        java.lang.Object gatewayName;
        java.lang.Object logConfig;
        java.lang.Object networkAccessConfig;
        java.lang.Object vpc;
        java.lang.Object vSwitch;

        /**
         * Sets the value of {@link RosGatewayProps#getPaymentType}
         * @param paymentType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder paymentType(java.lang.String paymentType) {
            this.paymentType = paymentType;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayProps#getPaymentType}
         * @param paymentType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder paymentType(com.aliyun.ros.cdk.core.IResolvable paymentType) {
            this.paymentType = paymentType;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayProps#getSpec}
         * @param spec the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder spec(java.lang.String spec) {
            this.spec = spec;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayProps#getSpec}
         * @param spec the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder spec(com.aliyun.ros.cdk.core.IResolvable spec) {
            this.spec = spec;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayProps#getZoneConfig}
         * @param zoneConfig the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder zoneConfig(com.aliyun.ros.cdk.core.IResolvable zoneConfig) {
            this.zoneConfig = zoneConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayProps#getZoneConfig}
         * @param zoneConfig the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder zoneConfig(com.aliyun.ros.cdk.apig.RosGateway.ZoneConfigProperty zoneConfig) {
            this.zoneConfig = zoneConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayProps#getGatewayName}
         * @param gatewayName the value to be set.
         * @return {@code this}
         */
        public Builder gatewayName(java.lang.String gatewayName) {
            this.gatewayName = gatewayName;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayProps#getGatewayName}
         * @param gatewayName the value to be set.
         * @return {@code this}
         */
        public Builder gatewayName(com.aliyun.ros.cdk.core.IResolvable gatewayName) {
            this.gatewayName = gatewayName;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayProps#getLogConfig}
         * @param logConfig the value to be set.
         * @return {@code this}
         */
        public Builder logConfig(com.aliyun.ros.cdk.core.IResolvable logConfig) {
            this.logConfig = logConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayProps#getLogConfig}
         * @param logConfig the value to be set.
         * @return {@code this}
         */
        public Builder logConfig(com.aliyun.ros.cdk.apig.RosGateway.LogConfigProperty logConfig) {
            this.logConfig = logConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayProps#getNetworkAccessConfig}
         * @param networkAccessConfig the value to be set.
         * @return {@code this}
         */
        public Builder networkAccessConfig(com.aliyun.ros.cdk.core.IResolvable networkAccessConfig) {
            this.networkAccessConfig = networkAccessConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayProps#getNetworkAccessConfig}
         * @param networkAccessConfig the value to be set.
         * @return {@code this}
         */
        public Builder networkAccessConfig(com.aliyun.ros.cdk.apig.RosGateway.NetworkAccessConfigProperty networkAccessConfig) {
            this.networkAccessConfig = networkAccessConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayProps#getVpc}
         * @param vpc the value to be set.
         * @return {@code this}
         */
        public Builder vpc(com.aliyun.ros.cdk.core.IResolvable vpc) {
            this.vpc = vpc;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayProps#getVpc}
         * @param vpc the value to be set.
         * @return {@code this}
         */
        public Builder vpc(com.aliyun.ros.cdk.apig.RosGateway.VpcProperty vpc) {
            this.vpc = vpc;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayProps#getVSwitch}
         * @param vSwitch the value to be set.
         * @return {@code this}
         */
        public Builder vSwitch(com.aliyun.ros.cdk.core.IResolvable vSwitch) {
            this.vSwitch = vSwitch;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewayProps#getVSwitch}
         * @param vSwitch the value to be set.
         * @return {@code this}
         */
        public Builder vSwitch(com.aliyun.ros.cdk.apig.RosGateway.VSwitchProperty vSwitch) {
            this.vSwitch = vSwitch;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosGatewayProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosGatewayProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosGatewayProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosGatewayProps {
        private final java.lang.Object paymentType;
        private final java.lang.Object spec;
        private final java.lang.Object zoneConfig;
        private final java.lang.Object gatewayName;
        private final java.lang.Object logConfig;
        private final java.lang.Object networkAccessConfig;
        private final java.lang.Object vpc;
        private final java.lang.Object vSwitch;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.paymentType = software.amazon.jsii.Kernel.get(this, "paymentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.spec = software.amazon.jsii.Kernel.get(this, "spec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zoneConfig = software.amazon.jsii.Kernel.get(this, "zoneConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.gatewayName = software.amazon.jsii.Kernel.get(this, "gatewayName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.logConfig = software.amazon.jsii.Kernel.get(this, "logConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.networkAccessConfig = software.amazon.jsii.Kernel.get(this, "networkAccessConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpc = software.amazon.jsii.Kernel.get(this, "vpc", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitch = software.amazon.jsii.Kernel.get(this, "vSwitch", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.paymentType = java.util.Objects.requireNonNull(builder.paymentType, "paymentType is required");
            this.spec = java.util.Objects.requireNonNull(builder.spec, "spec is required");
            this.zoneConfig = java.util.Objects.requireNonNull(builder.zoneConfig, "zoneConfig is required");
            this.gatewayName = builder.gatewayName;
            this.logConfig = builder.logConfig;
            this.networkAccessConfig = builder.networkAccessConfig;
            this.vpc = builder.vpc;
            this.vSwitch = builder.vSwitch;
        }

        @Override
        public final java.lang.Object getPaymentType() {
            return this.paymentType;
        }

        @Override
        public final java.lang.Object getSpec() {
            return this.spec;
        }

        @Override
        public final java.lang.Object getZoneConfig() {
            return this.zoneConfig;
        }

        @Override
        public final java.lang.Object getGatewayName() {
            return this.gatewayName;
        }

        @Override
        public final java.lang.Object getLogConfig() {
            return this.logConfig;
        }

        @Override
        public final java.lang.Object getNetworkAccessConfig() {
            return this.networkAccessConfig;
        }

        @Override
        public final java.lang.Object getVpc() {
            return this.vpc;
        }

        @Override
        public final java.lang.Object getVSwitch() {
            return this.vSwitch;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("paymentType", om.valueToTree(this.getPaymentType()));
            data.set("spec", om.valueToTree(this.getSpec()));
            data.set("zoneConfig", om.valueToTree(this.getZoneConfig()));
            if (this.getGatewayName() != null) {
                data.set("gatewayName", om.valueToTree(this.getGatewayName()));
            }
            if (this.getLogConfig() != null) {
                data.set("logConfig", om.valueToTree(this.getLogConfig()));
            }
            if (this.getNetworkAccessConfig() != null) {
                data.set("networkAccessConfig", om.valueToTree(this.getNetworkAccessConfig()));
            }
            if (this.getVpc() != null) {
                data.set("vpc", om.valueToTree(this.getVpc()));
            }
            if (this.getVSwitch() != null) {
                data.set("vSwitch", om.valueToTree(this.getVSwitch()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apig.RosGatewayProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosGatewayProps.Jsii$Proxy that = (RosGatewayProps.Jsii$Proxy) o;

            if (!paymentType.equals(that.paymentType)) return false;
            if (!spec.equals(that.spec)) return false;
            if (!zoneConfig.equals(that.zoneConfig)) return false;
            if (this.gatewayName != null ? !this.gatewayName.equals(that.gatewayName) : that.gatewayName != null) return false;
            if (this.logConfig != null ? !this.logConfig.equals(that.logConfig) : that.logConfig != null) return false;
            if (this.networkAccessConfig != null ? !this.networkAccessConfig.equals(that.networkAccessConfig) : that.networkAccessConfig != null) return false;
            if (this.vpc != null ? !this.vpc.equals(that.vpc) : that.vpc != null) return false;
            return this.vSwitch != null ? this.vSwitch.equals(that.vSwitch) : that.vSwitch == null;
        }

        @Override
        public final int hashCode() {
            int result = this.paymentType.hashCode();
            result = 31 * result + (this.spec.hashCode());
            result = 31 * result + (this.zoneConfig.hashCode());
            result = 31 * result + (this.gatewayName != null ? this.gatewayName.hashCode() : 0);
            result = 31 * result + (this.logConfig != null ? this.logConfig.hashCode() : 0);
            result = 31 * result + (this.networkAccessConfig != null ? this.networkAccessConfig.hashCode() : 0);
            result = 31 * result + (this.vpc != null ? this.vpc.hashCode() : 0);
            result = 31 * result + (this.vSwitch != null ? this.vSwitch.hashCode() : 0);
            return result;
        }
    }
}
