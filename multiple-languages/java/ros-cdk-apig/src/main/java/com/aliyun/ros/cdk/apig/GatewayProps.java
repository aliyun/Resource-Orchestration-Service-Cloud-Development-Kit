package com.aliyun.ros.cdk.apig;

/**
 * Properties for defining a <code>Gateway</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-gateway
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:20.882Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.GatewayProps")
@software.amazon.jsii.Jsii.Proxy(GatewayProps.Jsii$Proxy.class)
public interface GatewayProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property gatewayName: The name of the Gateway.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getGatewayName();

    /**
     * Property networkAccessConfig: Network Access Configuration.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNetworkAccessConfig();

    /**
     * Property paymentType: The payment type of the gateway.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>PayAsYouGo</li>
     * <li>Subscription</li>
     * </ul>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPaymentType();

    /**
     * Property spec: Gateway instance specifications.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSpec();

    /**
     * Property zoneConfig: Availability Zone Configuration.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getZoneConfig();

    /**
     * Property gatewayType: Describes the gateway type, which is categorized into the following two types: * API: indicates an API gateway * AI: Indicates an AI gateway.
     * <p>
     * Default value: API.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getGatewayType() {
        return null;
    }

    /**
     * Property logConfig: Log Configuration.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLogConfig() {
        return null;
    }

    /**
     * Property period: The purchase time of the gateway.
     * <p>
     * This parameter is only valid when updating PaymentType from PayAsYouGo to Subscription.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriod() {
        return null;
    }

    /**
     * Property periodUnit: The unit of the purchase time of the gateway.
     * <p>
     * This parameter is only valid when updating PaymentType from PayAsYouGo to Subscription.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriodUnit() {
        return null;
    }

    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * Property tags: Tags of The tags of the Gateway..
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.apig.RosGateway.TagsProperty> getTags() {
        return null;
    }

    /**
     * Property vpc: The VPC associated with the Gateway.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVpc() {
        return null;
    }

    /**
     * Property vSwitch: The virtual switch associated with the Gateway.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVSwitch() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link GatewayProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link GatewayProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<GatewayProps> {
        java.lang.Object gatewayName;
        java.lang.Object networkAccessConfig;
        java.lang.Object paymentType;
        java.lang.Object spec;
        java.lang.Object zoneConfig;
        java.lang.Object gatewayType;
        java.lang.Object logConfig;
        java.lang.Object period;
        java.lang.Object periodUnit;
        java.lang.Object resourceGroupId;
        java.util.List<com.aliyun.ros.cdk.apig.RosGateway.TagsProperty> tags;
        java.lang.Object vpc;
        java.lang.Object vSwitch;

        /**
         * Sets the value of {@link GatewayProps#getGatewayName}
         * @param gatewayName Property gatewayName: The name of the Gateway. This parameter is required.
         * @return {@code this}
         */
        public Builder gatewayName(java.lang.String gatewayName) {
            this.gatewayName = gatewayName;
            return this;
        }

        /**
         * Sets the value of {@link GatewayProps#getGatewayName}
         * @param gatewayName Property gatewayName: The name of the Gateway. This parameter is required.
         * @return {@code this}
         */
        public Builder gatewayName(com.aliyun.ros.cdk.core.IResolvable gatewayName) {
            this.gatewayName = gatewayName;
            return this;
        }

        /**
         * Sets the value of {@link GatewayProps#getNetworkAccessConfig}
         * @param networkAccessConfig Property networkAccessConfig: Network Access Configuration. This parameter is required.
         * @return {@code this}
         */
        public Builder networkAccessConfig(com.aliyun.ros.cdk.core.IResolvable networkAccessConfig) {
            this.networkAccessConfig = networkAccessConfig;
            return this;
        }

        /**
         * Sets the value of {@link GatewayProps#getNetworkAccessConfig}
         * @param networkAccessConfig Property networkAccessConfig: Network Access Configuration. This parameter is required.
         * @return {@code this}
         */
        public Builder networkAccessConfig(com.aliyun.ros.cdk.apig.RosGateway.NetworkAccessConfigProperty networkAccessConfig) {
            this.networkAccessConfig = networkAccessConfig;
            return this;
        }

        /**
         * Sets the value of {@link GatewayProps#getPaymentType}
         * @param paymentType Property paymentType: The payment type of the gateway. This parameter is required.
         *                    Valid values:
         *                    <p>
         *                    <ul>
         *                    <li>PayAsYouGo</li>
         *                    <li>Subscription</li>
         *                    </ul>
         * @return {@code this}
         */
        public Builder paymentType(java.lang.String paymentType) {
            this.paymentType = paymentType;
            return this;
        }

        /**
         * Sets the value of {@link GatewayProps#getPaymentType}
         * @param paymentType Property paymentType: The payment type of the gateway. This parameter is required.
         *                    Valid values:
         *                    <p>
         *                    <ul>
         *                    <li>PayAsYouGo</li>
         *                    <li>Subscription</li>
         *                    </ul>
         * @return {@code this}
         */
        public Builder paymentType(com.aliyun.ros.cdk.core.IResolvable paymentType) {
            this.paymentType = paymentType;
            return this;
        }

        /**
         * Sets the value of {@link GatewayProps#getSpec}
         * @param spec Property spec: Gateway instance specifications. This parameter is required.
         * @return {@code this}
         */
        public Builder spec(java.lang.String spec) {
            this.spec = spec;
            return this;
        }

        /**
         * Sets the value of {@link GatewayProps#getSpec}
         * @param spec Property spec: Gateway instance specifications. This parameter is required.
         * @return {@code this}
         */
        public Builder spec(com.aliyun.ros.cdk.core.IResolvable spec) {
            this.spec = spec;
            return this;
        }

        /**
         * Sets the value of {@link GatewayProps#getZoneConfig}
         * @param zoneConfig Property zoneConfig: Availability Zone Configuration. This parameter is required.
         * @return {@code this}
         */
        public Builder zoneConfig(com.aliyun.ros.cdk.core.IResolvable zoneConfig) {
            this.zoneConfig = zoneConfig;
            return this;
        }

        /**
         * Sets the value of {@link GatewayProps#getZoneConfig}
         * @param zoneConfig Property zoneConfig: Availability Zone Configuration. This parameter is required.
         * @return {@code this}
         */
        public Builder zoneConfig(com.aliyun.ros.cdk.apig.RosGateway.ZoneConfigProperty zoneConfig) {
            this.zoneConfig = zoneConfig;
            return this;
        }

        /**
         * Sets the value of {@link GatewayProps#getGatewayType}
         * @param gatewayType Property gatewayType: Describes the gateway type, which is categorized into the following two types: * API: indicates an API gateway * AI: Indicates an AI gateway.
         *                    Default value: API.
         * @return {@code this}
         */
        public Builder gatewayType(java.lang.String gatewayType) {
            this.gatewayType = gatewayType;
            return this;
        }

        /**
         * Sets the value of {@link GatewayProps#getGatewayType}
         * @param gatewayType Property gatewayType: Describes the gateway type, which is categorized into the following two types: * API: indicates an API gateway * AI: Indicates an AI gateway.
         *                    Default value: API.
         * @return {@code this}
         */
        public Builder gatewayType(com.aliyun.ros.cdk.core.IResolvable gatewayType) {
            this.gatewayType = gatewayType;
            return this;
        }

        /**
         * Sets the value of {@link GatewayProps#getLogConfig}
         * @param logConfig Property logConfig: Log Configuration.
         * @return {@code this}
         */
        public Builder logConfig(com.aliyun.ros.cdk.core.IResolvable logConfig) {
            this.logConfig = logConfig;
            return this;
        }

        /**
         * Sets the value of {@link GatewayProps#getLogConfig}
         * @param logConfig Property logConfig: Log Configuration.
         * @return {@code this}
         */
        public Builder logConfig(com.aliyun.ros.cdk.apig.RosGateway.LogConfigProperty logConfig) {
            this.logConfig = logConfig;
            return this;
        }

        /**
         * Sets the value of {@link GatewayProps#getPeriod}
         * @param period Property period: The purchase time of the gateway.
         *               This parameter is only valid when updating PaymentType from PayAsYouGo to Subscription.
         * @return {@code this}
         */
        public Builder period(java.lang.Number period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link GatewayProps#getPeriod}
         * @param period Property period: The purchase time of the gateway.
         *               This parameter is only valid when updating PaymentType from PayAsYouGo to Subscription.
         * @return {@code this}
         */
        public Builder period(com.aliyun.ros.cdk.core.IResolvable period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link GatewayProps#getPeriodUnit}
         * @param periodUnit Property periodUnit: The unit of the purchase time of the gateway.
         *                   This parameter is only valid when updating PaymentType from PayAsYouGo to Subscription.
         * @return {@code this}
         */
        public Builder periodUnit(java.lang.String periodUnit) {
            this.periodUnit = periodUnit;
            return this;
        }

        /**
         * Sets the value of {@link GatewayProps#getPeriodUnit}
         * @param periodUnit Property periodUnit: The unit of the purchase time of the gateway.
         *                   This parameter is only valid when updating PaymentType from PayAsYouGo to Subscription.
         * @return {@code this}
         */
        public Builder periodUnit(com.aliyun.ros.cdk.core.IResolvable periodUnit) {
            this.periodUnit = periodUnit;
            return this;
        }

        /**
         * Sets the value of {@link GatewayProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link GatewayProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link GatewayProps#getTags}
         * @param tags Property tags: Tags of The tags of the Gateway..
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.apig.RosGateway.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.apig.RosGateway.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link GatewayProps#getVpc}
         * @param vpc Property vpc: The VPC associated with the Gateway.
         * @return {@code this}
         */
        public Builder vpc(com.aliyun.ros.cdk.core.IResolvable vpc) {
            this.vpc = vpc;
            return this;
        }

        /**
         * Sets the value of {@link GatewayProps#getVpc}
         * @param vpc Property vpc: The VPC associated with the Gateway.
         * @return {@code this}
         */
        public Builder vpc(com.aliyun.ros.cdk.apig.RosGateway.VpcProperty vpc) {
            this.vpc = vpc;
            return this;
        }

        /**
         * Sets the value of {@link GatewayProps#getVSwitch}
         * @param vSwitch Property vSwitch: The virtual switch associated with the Gateway.
         * @return {@code this}
         */
        public Builder vSwitch(com.aliyun.ros.cdk.core.IResolvable vSwitch) {
            this.vSwitch = vSwitch;
            return this;
        }

        /**
         * Sets the value of {@link GatewayProps#getVSwitch}
         * @param vSwitch Property vSwitch: The virtual switch associated with the Gateway.
         * @return {@code this}
         */
        public Builder vSwitch(com.aliyun.ros.cdk.apig.RosGateway.VSwitchProperty vSwitch) {
            this.vSwitch = vSwitch;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link GatewayProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public GatewayProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link GatewayProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements GatewayProps {
        private final java.lang.Object gatewayName;
        private final java.lang.Object networkAccessConfig;
        private final java.lang.Object paymentType;
        private final java.lang.Object spec;
        private final java.lang.Object zoneConfig;
        private final java.lang.Object gatewayType;
        private final java.lang.Object logConfig;
        private final java.lang.Object period;
        private final java.lang.Object periodUnit;
        private final java.lang.Object resourceGroupId;
        private final java.util.List<com.aliyun.ros.cdk.apig.RosGateway.TagsProperty> tags;
        private final java.lang.Object vpc;
        private final java.lang.Object vSwitch;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.gatewayName = software.amazon.jsii.Kernel.get(this, "gatewayName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.networkAccessConfig = software.amazon.jsii.Kernel.get(this, "networkAccessConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.paymentType = software.amazon.jsii.Kernel.get(this, "paymentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.spec = software.amazon.jsii.Kernel.get(this, "spec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zoneConfig = software.amazon.jsii.Kernel.get(this, "zoneConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.gatewayType = software.amazon.jsii.Kernel.get(this, "gatewayType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.logConfig = software.amazon.jsii.Kernel.get(this, "logConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.periodUnit = software.amazon.jsii.Kernel.get(this, "periodUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.apig.RosGateway.TagsProperty.class)));
            this.vpc = software.amazon.jsii.Kernel.get(this, "vpc", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitch = software.amazon.jsii.Kernel.get(this, "vSwitch", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.gatewayName = java.util.Objects.requireNonNull(builder.gatewayName, "gatewayName is required");
            this.networkAccessConfig = java.util.Objects.requireNonNull(builder.networkAccessConfig, "networkAccessConfig is required");
            this.paymentType = java.util.Objects.requireNonNull(builder.paymentType, "paymentType is required");
            this.spec = java.util.Objects.requireNonNull(builder.spec, "spec is required");
            this.zoneConfig = java.util.Objects.requireNonNull(builder.zoneConfig, "zoneConfig is required");
            this.gatewayType = builder.gatewayType;
            this.logConfig = builder.logConfig;
            this.period = builder.period;
            this.periodUnit = builder.periodUnit;
            this.resourceGroupId = builder.resourceGroupId;
            this.tags = (java.util.List<com.aliyun.ros.cdk.apig.RosGateway.TagsProperty>)builder.tags;
            this.vpc = builder.vpc;
            this.vSwitch = builder.vSwitch;
        }

        @Override
        public final java.lang.Object getGatewayName() {
            return this.gatewayName;
        }

        @Override
        public final java.lang.Object getNetworkAccessConfig() {
            return this.networkAccessConfig;
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
        public final java.lang.Object getGatewayType() {
            return this.gatewayType;
        }

        @Override
        public final java.lang.Object getLogConfig() {
            return this.logConfig;
        }

        @Override
        public final java.lang.Object getPeriod() {
            return this.period;
        }

        @Override
        public final java.lang.Object getPeriodUnit() {
            return this.periodUnit;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.apig.RosGateway.TagsProperty> getTags() {
            return this.tags;
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

            data.set("gatewayName", om.valueToTree(this.getGatewayName()));
            data.set("networkAccessConfig", om.valueToTree(this.getNetworkAccessConfig()));
            data.set("paymentType", om.valueToTree(this.getPaymentType()));
            data.set("spec", om.valueToTree(this.getSpec()));
            data.set("zoneConfig", om.valueToTree(this.getZoneConfig()));
            if (this.getGatewayType() != null) {
                data.set("gatewayType", om.valueToTree(this.getGatewayType()));
            }
            if (this.getLogConfig() != null) {
                data.set("logConfig", om.valueToTree(this.getLogConfig()));
            }
            if (this.getPeriod() != null) {
                data.set("period", om.valueToTree(this.getPeriod()));
            }
            if (this.getPeriodUnit() != null) {
                data.set("periodUnit", om.valueToTree(this.getPeriodUnit()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getVpc() != null) {
                data.set("vpc", om.valueToTree(this.getVpc()));
            }
            if (this.getVSwitch() != null) {
                data.set("vSwitch", om.valueToTree(this.getVSwitch()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apig.GatewayProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            GatewayProps.Jsii$Proxy that = (GatewayProps.Jsii$Proxy) o;

            if (!gatewayName.equals(that.gatewayName)) return false;
            if (!networkAccessConfig.equals(that.networkAccessConfig)) return false;
            if (!paymentType.equals(that.paymentType)) return false;
            if (!spec.equals(that.spec)) return false;
            if (!zoneConfig.equals(that.zoneConfig)) return false;
            if (this.gatewayType != null ? !this.gatewayType.equals(that.gatewayType) : that.gatewayType != null) return false;
            if (this.logConfig != null ? !this.logConfig.equals(that.logConfig) : that.logConfig != null) return false;
            if (this.period != null ? !this.period.equals(that.period) : that.period != null) return false;
            if (this.periodUnit != null ? !this.periodUnit.equals(that.periodUnit) : that.periodUnit != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            if (this.vpc != null ? !this.vpc.equals(that.vpc) : that.vpc != null) return false;
            return this.vSwitch != null ? this.vSwitch.equals(that.vSwitch) : that.vSwitch == null;
        }

        @Override
        public final int hashCode() {
            int result = this.gatewayName.hashCode();
            result = 31 * result + (this.networkAccessConfig.hashCode());
            result = 31 * result + (this.paymentType.hashCode());
            result = 31 * result + (this.spec.hashCode());
            result = 31 * result + (this.zoneConfig.hashCode());
            result = 31 * result + (this.gatewayType != null ? this.gatewayType.hashCode() : 0);
            result = 31 * result + (this.logConfig != null ? this.logConfig.hashCode() : 0);
            result = 31 * result + (this.period != null ? this.period.hashCode() : 0);
            result = 31 * result + (this.periodUnit != null ? this.periodUnit.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.vpc != null ? this.vpc.hashCode() : 0);
            result = 31 * result + (this.vSwitch != null ? this.vSwitch.hashCode() : 0);
            return result;
        }
    }
}
