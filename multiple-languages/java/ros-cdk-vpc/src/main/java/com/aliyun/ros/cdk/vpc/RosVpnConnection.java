package com.aliyun.ros.cdk.vpc;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::VPC::VpnConnection</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-12-26T06:30:18.523Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.RosVpnConnection")
public class RosVpnConnection extends com.aliyun.ros.cdk.core.RosResource {

    protected RosVpnConnection(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosVpnConnection(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.vpc.RosVpnConnection.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosVpnConnection(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.RosVpnConnectionProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), java.util.Objects.requireNonNull(enableResourcePropertyConstraint, "enableResourcePropertyConstraint is required") });
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> renderProperties(final @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> props) {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.call(this, "renderProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)), new Object[] { java.util.Objects.requireNonNull(props, "props is required") }));
    }

    /**
     * The resource type name for this resource class.
     */
    public final static java.lang.String ROS_RESOURCE_TYPE_NAME;

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPeerVpnConnectionConfig() {
        return software.amazon.jsii.Kernel.get(this, "attrPeerVpnConnectionConfig", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrStatus() {
        return software.amazon.jsii.Kernel.get(this, "attrStatus", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVpnConnectionId() {
        return software.amazon.jsii.Kernel.get(this, "attrVpnConnectionId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getLocalSubnet() {
        return software.amazon.jsii.Kernel.get(this, "localSubnet", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLocalSubnet(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "localSubnet", java.util.Objects.requireNonNull(value, "localSubnet is required"));
    }

    /**
     */
    public void setLocalSubnet(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "localSubnet", java.util.Objects.requireNonNull(value, "localSubnet is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getRemoteSubnet() {
        return software.amazon.jsii.Kernel.get(this, "remoteSubnet", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRemoteSubnet(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "remoteSubnet", java.util.Objects.requireNonNull(value, "remoteSubnet is required"));
    }

    /**
     */
    public void setRemoteSubnet(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "remoteSubnet", java.util.Objects.requireNonNull(value, "remoteSubnet is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getVpnGatewayId() {
        return software.amazon.jsii.Kernel.get(this, "vpnGatewayId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVpnGatewayId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "vpnGatewayId", java.util.Objects.requireNonNull(value, "vpnGatewayId is required"));
    }

    /**
     */
    public void setVpnGatewayId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "vpnGatewayId", java.util.Objects.requireNonNull(value, "vpnGatewayId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAutoConfigRoute() {
        return software.amazon.jsii.Kernel.get(this, "autoConfigRoute", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAutoConfigRoute(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "autoConfigRoute", value);
    }

    /**
     */
    public void setAutoConfigRoute(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "autoConfigRoute", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getBgpConfig() {
        return software.amazon.jsii.Kernel.get(this, "bgpConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setBgpConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "bgpConfig", value);
    }

    /**
     */
    public void setBgpConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.vpc.RosVpnConnection.BgpConfigProperty value) {
        software.amazon.jsii.Kernel.set(this, "bgpConfig", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCustomerGatewayId() {
        return software.amazon.jsii.Kernel.get(this, "customerGatewayId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCustomerGatewayId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "customerGatewayId", value);
    }

    /**
     */
    public void setCustomerGatewayId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "customerGatewayId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEffectImmediately() {
        return software.amazon.jsii.Kernel.get(this, "effectImmediately", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEffectImmediately(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "effectImmediately", value);
    }

    /**
     */
    public void setEffectImmediately(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "effectImmediately", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEnableDpd() {
        return software.amazon.jsii.Kernel.get(this, "enableDpd", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEnableDpd(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableDpd", value);
    }

    /**
     */
    public void setEnableDpd(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "enableDpd", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEnableNatTraversal() {
        return software.amazon.jsii.Kernel.get(this, "enableNatTraversal", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEnableNatTraversal(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableNatTraversal", value);
    }

    /**
     */
    public void setEnableNatTraversal(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "enableNatTraversal", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEnableTunnelsBgp() {
        return software.amazon.jsii.Kernel.get(this, "enableTunnelsBgp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEnableTunnelsBgp(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableTunnelsBgp", value);
    }

    /**
     */
    public void setEnableTunnelsBgp(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "enableTunnelsBgp", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckConfig() {
        return software.amazon.jsii.Kernel.get(this, "healthCheckConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setHealthCheckConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "healthCheckConfig", value);
    }

    /**
     */
    public void setHealthCheckConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.vpc.RosVpnConnection.HealthCheckConfigProperty value) {
        software.amazon.jsii.Kernel.set(this, "healthCheckConfig", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getIkeConfig() {
        return software.amazon.jsii.Kernel.get(this, "ikeConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setIkeConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ikeConfig", value);
    }

    /**
     */
    public void setIkeConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.vpc.RosVpnConnection.IkeConfigProperty value) {
        software.amazon.jsii.Kernel.set(this, "ikeConfig", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getIpsecConfig() {
        return software.amazon.jsii.Kernel.get(this, "ipsecConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setIpsecConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ipsecConfig", value);
    }

    /**
     */
    public void setIpsecConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.vpc.RosVpnConnection.IpsecConfigProperty value) {
        software.amazon.jsii.Kernel.set(this, "ipsecConfig", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getName() {
        return software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "name", value);
    }

    /**
     */
    public void setName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "name", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRemoteCaCertificate() {
        return software.amazon.jsii.Kernel.get(this, "remoteCaCertificate", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRemoteCaCertificate(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "remoteCaCertificate", value);
    }

    /**
     */
    public void setRemoteCaCertificate(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "remoteCaCertificate", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTunnelOptionsSpecification() {
        return software.amazon.jsii.Kernel.get(this, "tunnelOptionsSpecification", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTunnelOptionsSpecification(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "tunnelOptionsSpecification", value);
    }

    /**
     */
    public void setTunnelOptionsSpecification(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.vpc.RosVpnConnection.TunnelOptionsSpecificationProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.vpc.RosVpnConnection.TunnelOptionsSpecificationProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "tunnelOptionsSpecification", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.RosVpnConnection.BgpConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(BgpConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface BgpConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEnableBgp() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getLocalAsn() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getLocalBgpIp() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getTunnelCidr() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link BgpConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link BgpConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<BgpConfigProperty> {
            java.lang.Object enableBgp;
            java.lang.Object localAsn;
            java.lang.Object localBgpIp;
            java.lang.Object tunnelCidr;

            /**
             * Sets the value of {@link BgpConfigProperty#getEnableBgp}
             * @param enableBgp the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enableBgp(java.lang.Boolean enableBgp) {
                this.enableBgp = enableBgp;
                return this;
            }

            /**
             * Sets the value of {@link BgpConfigProperty#getEnableBgp}
             * @param enableBgp the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enableBgp(com.aliyun.ros.cdk.core.IResolvable enableBgp) {
                this.enableBgp = enableBgp;
                return this;
            }

            /**
             * Sets the value of {@link BgpConfigProperty#getLocalAsn}
             * @param localAsn the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder localAsn(java.lang.Number localAsn) {
                this.localAsn = localAsn;
                return this;
            }

            /**
             * Sets the value of {@link BgpConfigProperty#getLocalAsn}
             * @param localAsn the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder localAsn(com.aliyun.ros.cdk.core.IResolvable localAsn) {
                this.localAsn = localAsn;
                return this;
            }

            /**
             * Sets the value of {@link BgpConfigProperty#getLocalBgpIp}
             * @param localBgpIp the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder localBgpIp(java.lang.String localBgpIp) {
                this.localBgpIp = localBgpIp;
                return this;
            }

            /**
             * Sets the value of {@link BgpConfigProperty#getLocalBgpIp}
             * @param localBgpIp the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder localBgpIp(com.aliyun.ros.cdk.core.IResolvable localBgpIp) {
                this.localBgpIp = localBgpIp;
                return this;
            }

            /**
             * Sets the value of {@link BgpConfigProperty#getTunnelCidr}
             * @param tunnelCidr the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder tunnelCidr(java.lang.String tunnelCidr) {
                this.tunnelCidr = tunnelCidr;
                return this;
            }

            /**
             * Sets the value of {@link BgpConfigProperty#getTunnelCidr}
             * @param tunnelCidr the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder tunnelCidr(com.aliyun.ros.cdk.core.IResolvable tunnelCidr) {
                this.tunnelCidr = tunnelCidr;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link BgpConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public BgpConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link BgpConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements BgpConfigProperty {
            private final java.lang.Object enableBgp;
            private final java.lang.Object localAsn;
            private final java.lang.Object localBgpIp;
            private final java.lang.Object tunnelCidr;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.enableBgp = software.amazon.jsii.Kernel.get(this, "enableBgp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.localAsn = software.amazon.jsii.Kernel.get(this, "localAsn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.localBgpIp = software.amazon.jsii.Kernel.get(this, "localBgpIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.tunnelCidr = software.amazon.jsii.Kernel.get(this, "tunnelCidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.enableBgp = builder.enableBgp;
                this.localAsn = builder.localAsn;
                this.localBgpIp = builder.localBgpIp;
                this.tunnelCidr = builder.tunnelCidr;
            }

            @Override
            public final java.lang.Object getEnableBgp() {
                return this.enableBgp;
            }

            @Override
            public final java.lang.Object getLocalAsn() {
                return this.localAsn;
            }

            @Override
            public final java.lang.Object getLocalBgpIp() {
                return this.localBgpIp;
            }

            @Override
            public final java.lang.Object getTunnelCidr() {
                return this.tunnelCidr;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getEnableBgp() != null) {
                    data.set("enableBgp", om.valueToTree(this.getEnableBgp()));
                }
                if (this.getLocalAsn() != null) {
                    data.set("localAsn", om.valueToTree(this.getLocalAsn()));
                }
                if (this.getLocalBgpIp() != null) {
                    data.set("localBgpIp", om.valueToTree(this.getLocalBgpIp()));
                }
                if (this.getTunnelCidr() != null) {
                    data.set("tunnelCidr", om.valueToTree(this.getTunnelCidr()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.RosVpnConnection.BgpConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                BgpConfigProperty.Jsii$Proxy that = (BgpConfigProperty.Jsii$Proxy) o;

                if (this.enableBgp != null ? !this.enableBgp.equals(that.enableBgp) : that.enableBgp != null) return false;
                if (this.localAsn != null ? !this.localAsn.equals(that.localAsn) : that.localAsn != null) return false;
                if (this.localBgpIp != null ? !this.localBgpIp.equals(that.localBgpIp) : that.localBgpIp != null) return false;
                return this.tunnelCidr != null ? this.tunnelCidr.equals(that.tunnelCidr) : that.tunnelCidr == null;
            }

            @Override
            public final int hashCode() {
                int result = this.enableBgp != null ? this.enableBgp.hashCode() : 0;
                result = 31 * result + (this.localAsn != null ? this.localAsn.hashCode() : 0);
                result = 31 * result + (this.localBgpIp != null ? this.localBgpIp.hashCode() : 0);
                result = 31 * result + (this.tunnelCidr != null ? this.tunnelCidr.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.RosVpnConnection.HealthCheckConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(HealthCheckConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface HealthCheckConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDip() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEnable() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getInterval() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPolicy() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRetry() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSip() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link HealthCheckConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link HealthCheckConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<HealthCheckConfigProperty> {
            java.lang.Object dip;
            java.lang.Object enable;
            java.lang.Object interval;
            java.lang.Object policy;
            java.lang.Object retry;
            java.lang.Object sip;

            /**
             * Sets the value of {@link HealthCheckConfigProperty#getDip}
             * @param dip the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dip(java.lang.String dip) {
                this.dip = dip;
                return this;
            }

            /**
             * Sets the value of {@link HealthCheckConfigProperty#getDip}
             * @param dip the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dip(com.aliyun.ros.cdk.core.IResolvable dip) {
                this.dip = dip;
                return this;
            }

            /**
             * Sets the value of {@link HealthCheckConfigProperty#getEnable}
             * @param enable the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enable(java.lang.Boolean enable) {
                this.enable = enable;
                return this;
            }

            /**
             * Sets the value of {@link HealthCheckConfigProperty#getEnable}
             * @param enable the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enable(com.aliyun.ros.cdk.core.IResolvable enable) {
                this.enable = enable;
                return this;
            }

            /**
             * Sets the value of {@link HealthCheckConfigProperty#getInterval}
             * @param interval the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder interval(java.lang.Number interval) {
                this.interval = interval;
                return this;
            }

            /**
             * Sets the value of {@link HealthCheckConfigProperty#getInterval}
             * @param interval the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder interval(com.aliyun.ros.cdk.core.IResolvable interval) {
                this.interval = interval;
                return this;
            }

            /**
             * Sets the value of {@link HealthCheckConfigProperty#getPolicy}
             * @param policy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder policy(java.lang.String policy) {
                this.policy = policy;
                return this;
            }

            /**
             * Sets the value of {@link HealthCheckConfigProperty#getPolicy}
             * @param policy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder policy(com.aliyun.ros.cdk.core.IResolvable policy) {
                this.policy = policy;
                return this;
            }

            /**
             * Sets the value of {@link HealthCheckConfigProperty#getRetry}
             * @param retry the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder retry(java.lang.Number retry) {
                this.retry = retry;
                return this;
            }

            /**
             * Sets the value of {@link HealthCheckConfigProperty#getRetry}
             * @param retry the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder retry(com.aliyun.ros.cdk.core.IResolvable retry) {
                this.retry = retry;
                return this;
            }

            /**
             * Sets the value of {@link HealthCheckConfigProperty#getSip}
             * @param sip the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sip(java.lang.String sip) {
                this.sip = sip;
                return this;
            }

            /**
             * Sets the value of {@link HealthCheckConfigProperty#getSip}
             * @param sip the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sip(com.aliyun.ros.cdk.core.IResolvable sip) {
                this.sip = sip;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link HealthCheckConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public HealthCheckConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link HealthCheckConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements HealthCheckConfigProperty {
            private final java.lang.Object dip;
            private final java.lang.Object enable;
            private final java.lang.Object interval;
            private final java.lang.Object policy;
            private final java.lang.Object retry;
            private final java.lang.Object sip;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.dip = software.amazon.jsii.Kernel.get(this, "dip", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.enable = software.amazon.jsii.Kernel.get(this, "enable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.interval = software.amazon.jsii.Kernel.get(this, "interval", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.policy = software.amazon.jsii.Kernel.get(this, "policy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.retry = software.amazon.jsii.Kernel.get(this, "retry", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.sip = software.amazon.jsii.Kernel.get(this, "sip", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.dip = builder.dip;
                this.enable = builder.enable;
                this.interval = builder.interval;
                this.policy = builder.policy;
                this.retry = builder.retry;
                this.sip = builder.sip;
            }

            @Override
            public final java.lang.Object getDip() {
                return this.dip;
            }

            @Override
            public final java.lang.Object getEnable() {
                return this.enable;
            }

            @Override
            public final java.lang.Object getInterval() {
                return this.interval;
            }

            @Override
            public final java.lang.Object getPolicy() {
                return this.policy;
            }

            @Override
            public final java.lang.Object getRetry() {
                return this.retry;
            }

            @Override
            public final java.lang.Object getSip() {
                return this.sip;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getDip() != null) {
                    data.set("dip", om.valueToTree(this.getDip()));
                }
                if (this.getEnable() != null) {
                    data.set("enable", om.valueToTree(this.getEnable()));
                }
                if (this.getInterval() != null) {
                    data.set("interval", om.valueToTree(this.getInterval()));
                }
                if (this.getPolicy() != null) {
                    data.set("policy", om.valueToTree(this.getPolicy()));
                }
                if (this.getRetry() != null) {
                    data.set("retry", om.valueToTree(this.getRetry()));
                }
                if (this.getSip() != null) {
                    data.set("sip", om.valueToTree(this.getSip()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.RosVpnConnection.HealthCheckConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                HealthCheckConfigProperty.Jsii$Proxy that = (HealthCheckConfigProperty.Jsii$Proxy) o;

                if (this.dip != null ? !this.dip.equals(that.dip) : that.dip != null) return false;
                if (this.enable != null ? !this.enable.equals(that.enable) : that.enable != null) return false;
                if (this.interval != null ? !this.interval.equals(that.interval) : that.interval != null) return false;
                if (this.policy != null ? !this.policy.equals(that.policy) : that.policy != null) return false;
                if (this.retry != null ? !this.retry.equals(that.retry) : that.retry != null) return false;
                return this.sip != null ? this.sip.equals(that.sip) : that.sip == null;
            }

            @Override
            public final int hashCode() {
                int result = this.dip != null ? this.dip.hashCode() : 0;
                result = 31 * result + (this.enable != null ? this.enable.hashCode() : 0);
                result = 31 * result + (this.interval != null ? this.interval.hashCode() : 0);
                result = 31 * result + (this.policy != null ? this.policy.hashCode() : 0);
                result = 31 * result + (this.retry != null ? this.retry.hashCode() : 0);
                result = 31 * result + (this.sip != null ? this.sip.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.RosVpnConnection.IkeConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(IkeConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface IkeConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIkeAuthAlg() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIkeEncAlg() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIkeLifetime() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIkeMode() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIkePfs() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIkeVersion() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getLocalId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPsk() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRemoteId() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link IkeConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link IkeConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<IkeConfigProperty> {
            java.lang.Object ikeAuthAlg;
            java.lang.Object ikeEncAlg;
            java.lang.Object ikeLifetime;
            java.lang.Object ikeMode;
            java.lang.Object ikePfs;
            java.lang.Object ikeVersion;
            java.lang.Object localId;
            java.lang.Object psk;
            java.lang.Object remoteId;

            /**
             * Sets the value of {@link IkeConfigProperty#getIkeAuthAlg}
             * @param ikeAuthAlg the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ikeAuthAlg(java.lang.String ikeAuthAlg) {
                this.ikeAuthAlg = ikeAuthAlg;
                return this;
            }

            /**
             * Sets the value of {@link IkeConfigProperty#getIkeAuthAlg}
             * @param ikeAuthAlg the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ikeAuthAlg(com.aliyun.ros.cdk.core.IResolvable ikeAuthAlg) {
                this.ikeAuthAlg = ikeAuthAlg;
                return this;
            }

            /**
             * Sets the value of {@link IkeConfigProperty#getIkeEncAlg}
             * @param ikeEncAlg the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ikeEncAlg(java.lang.String ikeEncAlg) {
                this.ikeEncAlg = ikeEncAlg;
                return this;
            }

            /**
             * Sets the value of {@link IkeConfigProperty#getIkeEncAlg}
             * @param ikeEncAlg the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ikeEncAlg(com.aliyun.ros.cdk.core.IResolvable ikeEncAlg) {
                this.ikeEncAlg = ikeEncAlg;
                return this;
            }

            /**
             * Sets the value of {@link IkeConfigProperty#getIkeLifetime}
             * @param ikeLifetime the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ikeLifetime(java.lang.Number ikeLifetime) {
                this.ikeLifetime = ikeLifetime;
                return this;
            }

            /**
             * Sets the value of {@link IkeConfigProperty#getIkeLifetime}
             * @param ikeLifetime the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ikeLifetime(com.aliyun.ros.cdk.core.IResolvable ikeLifetime) {
                this.ikeLifetime = ikeLifetime;
                return this;
            }

            /**
             * Sets the value of {@link IkeConfigProperty#getIkeMode}
             * @param ikeMode the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ikeMode(java.lang.String ikeMode) {
                this.ikeMode = ikeMode;
                return this;
            }

            /**
             * Sets the value of {@link IkeConfigProperty#getIkeMode}
             * @param ikeMode the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ikeMode(com.aliyun.ros.cdk.core.IResolvable ikeMode) {
                this.ikeMode = ikeMode;
                return this;
            }

            /**
             * Sets the value of {@link IkeConfigProperty#getIkePfs}
             * @param ikePfs the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ikePfs(java.lang.String ikePfs) {
                this.ikePfs = ikePfs;
                return this;
            }

            /**
             * Sets the value of {@link IkeConfigProperty#getIkePfs}
             * @param ikePfs the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ikePfs(com.aliyun.ros.cdk.core.IResolvable ikePfs) {
                this.ikePfs = ikePfs;
                return this;
            }

            /**
             * Sets the value of {@link IkeConfigProperty#getIkeVersion}
             * @param ikeVersion the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ikeVersion(java.lang.String ikeVersion) {
                this.ikeVersion = ikeVersion;
                return this;
            }

            /**
             * Sets the value of {@link IkeConfigProperty#getIkeVersion}
             * @param ikeVersion the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ikeVersion(com.aliyun.ros.cdk.core.IResolvable ikeVersion) {
                this.ikeVersion = ikeVersion;
                return this;
            }

            /**
             * Sets the value of {@link IkeConfigProperty#getLocalId}
             * @param localId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder localId(java.lang.String localId) {
                this.localId = localId;
                return this;
            }

            /**
             * Sets the value of {@link IkeConfigProperty#getLocalId}
             * @param localId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder localId(com.aliyun.ros.cdk.core.IResolvable localId) {
                this.localId = localId;
                return this;
            }

            /**
             * Sets the value of {@link IkeConfigProperty#getPsk}
             * @param psk the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder psk(java.lang.String psk) {
                this.psk = psk;
                return this;
            }

            /**
             * Sets the value of {@link IkeConfigProperty#getPsk}
             * @param psk the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder psk(com.aliyun.ros.cdk.core.IResolvable psk) {
                this.psk = psk;
                return this;
            }

            /**
             * Sets the value of {@link IkeConfigProperty#getRemoteId}
             * @param remoteId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder remoteId(java.lang.String remoteId) {
                this.remoteId = remoteId;
                return this;
            }

            /**
             * Sets the value of {@link IkeConfigProperty#getRemoteId}
             * @param remoteId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder remoteId(com.aliyun.ros.cdk.core.IResolvable remoteId) {
                this.remoteId = remoteId;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link IkeConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public IkeConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link IkeConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements IkeConfigProperty {
            private final java.lang.Object ikeAuthAlg;
            private final java.lang.Object ikeEncAlg;
            private final java.lang.Object ikeLifetime;
            private final java.lang.Object ikeMode;
            private final java.lang.Object ikePfs;
            private final java.lang.Object ikeVersion;
            private final java.lang.Object localId;
            private final java.lang.Object psk;
            private final java.lang.Object remoteId;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.ikeAuthAlg = software.amazon.jsii.Kernel.get(this, "ikeAuthAlg", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.ikeEncAlg = software.amazon.jsii.Kernel.get(this, "ikeEncAlg", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.ikeLifetime = software.amazon.jsii.Kernel.get(this, "ikeLifetime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.ikeMode = software.amazon.jsii.Kernel.get(this, "ikeMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.ikePfs = software.amazon.jsii.Kernel.get(this, "ikePfs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.ikeVersion = software.amazon.jsii.Kernel.get(this, "ikeVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.localId = software.amazon.jsii.Kernel.get(this, "localId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.psk = software.amazon.jsii.Kernel.get(this, "psk", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.remoteId = software.amazon.jsii.Kernel.get(this, "remoteId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.ikeAuthAlg = builder.ikeAuthAlg;
                this.ikeEncAlg = builder.ikeEncAlg;
                this.ikeLifetime = builder.ikeLifetime;
                this.ikeMode = builder.ikeMode;
                this.ikePfs = builder.ikePfs;
                this.ikeVersion = builder.ikeVersion;
                this.localId = builder.localId;
                this.psk = builder.psk;
                this.remoteId = builder.remoteId;
            }

            @Override
            public final java.lang.Object getIkeAuthAlg() {
                return this.ikeAuthAlg;
            }

            @Override
            public final java.lang.Object getIkeEncAlg() {
                return this.ikeEncAlg;
            }

            @Override
            public final java.lang.Object getIkeLifetime() {
                return this.ikeLifetime;
            }

            @Override
            public final java.lang.Object getIkeMode() {
                return this.ikeMode;
            }

            @Override
            public final java.lang.Object getIkePfs() {
                return this.ikePfs;
            }

            @Override
            public final java.lang.Object getIkeVersion() {
                return this.ikeVersion;
            }

            @Override
            public final java.lang.Object getLocalId() {
                return this.localId;
            }

            @Override
            public final java.lang.Object getPsk() {
                return this.psk;
            }

            @Override
            public final java.lang.Object getRemoteId() {
                return this.remoteId;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getIkeAuthAlg() != null) {
                    data.set("ikeAuthAlg", om.valueToTree(this.getIkeAuthAlg()));
                }
                if (this.getIkeEncAlg() != null) {
                    data.set("ikeEncAlg", om.valueToTree(this.getIkeEncAlg()));
                }
                if (this.getIkeLifetime() != null) {
                    data.set("ikeLifetime", om.valueToTree(this.getIkeLifetime()));
                }
                if (this.getIkeMode() != null) {
                    data.set("ikeMode", om.valueToTree(this.getIkeMode()));
                }
                if (this.getIkePfs() != null) {
                    data.set("ikePfs", om.valueToTree(this.getIkePfs()));
                }
                if (this.getIkeVersion() != null) {
                    data.set("ikeVersion", om.valueToTree(this.getIkeVersion()));
                }
                if (this.getLocalId() != null) {
                    data.set("localId", om.valueToTree(this.getLocalId()));
                }
                if (this.getPsk() != null) {
                    data.set("psk", om.valueToTree(this.getPsk()));
                }
                if (this.getRemoteId() != null) {
                    data.set("remoteId", om.valueToTree(this.getRemoteId()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.RosVpnConnection.IkeConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                IkeConfigProperty.Jsii$Proxy that = (IkeConfigProperty.Jsii$Proxy) o;

                if (this.ikeAuthAlg != null ? !this.ikeAuthAlg.equals(that.ikeAuthAlg) : that.ikeAuthAlg != null) return false;
                if (this.ikeEncAlg != null ? !this.ikeEncAlg.equals(that.ikeEncAlg) : that.ikeEncAlg != null) return false;
                if (this.ikeLifetime != null ? !this.ikeLifetime.equals(that.ikeLifetime) : that.ikeLifetime != null) return false;
                if (this.ikeMode != null ? !this.ikeMode.equals(that.ikeMode) : that.ikeMode != null) return false;
                if (this.ikePfs != null ? !this.ikePfs.equals(that.ikePfs) : that.ikePfs != null) return false;
                if (this.ikeVersion != null ? !this.ikeVersion.equals(that.ikeVersion) : that.ikeVersion != null) return false;
                if (this.localId != null ? !this.localId.equals(that.localId) : that.localId != null) return false;
                if (this.psk != null ? !this.psk.equals(that.psk) : that.psk != null) return false;
                return this.remoteId != null ? this.remoteId.equals(that.remoteId) : that.remoteId == null;
            }

            @Override
            public final int hashCode() {
                int result = this.ikeAuthAlg != null ? this.ikeAuthAlg.hashCode() : 0;
                result = 31 * result + (this.ikeEncAlg != null ? this.ikeEncAlg.hashCode() : 0);
                result = 31 * result + (this.ikeLifetime != null ? this.ikeLifetime.hashCode() : 0);
                result = 31 * result + (this.ikeMode != null ? this.ikeMode.hashCode() : 0);
                result = 31 * result + (this.ikePfs != null ? this.ikePfs.hashCode() : 0);
                result = 31 * result + (this.ikeVersion != null ? this.ikeVersion.hashCode() : 0);
                result = 31 * result + (this.localId != null ? this.localId.hashCode() : 0);
                result = 31 * result + (this.psk != null ? this.psk.hashCode() : 0);
                result = 31 * result + (this.remoteId != null ? this.remoteId.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.RosVpnConnection.IpsecConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(IpsecConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface IpsecConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIpsecAuthAlg() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIpsecEncAlg() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIpsecLifetime() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIpsecPfs() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link IpsecConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link IpsecConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<IpsecConfigProperty> {
            java.lang.Object ipsecAuthAlg;
            java.lang.Object ipsecEncAlg;
            java.lang.Object ipsecLifetime;
            java.lang.Object ipsecPfs;

            /**
             * Sets the value of {@link IpsecConfigProperty#getIpsecAuthAlg}
             * @param ipsecAuthAlg the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ipsecAuthAlg(java.lang.String ipsecAuthAlg) {
                this.ipsecAuthAlg = ipsecAuthAlg;
                return this;
            }

            /**
             * Sets the value of {@link IpsecConfigProperty#getIpsecAuthAlg}
             * @param ipsecAuthAlg the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ipsecAuthAlg(com.aliyun.ros.cdk.core.IResolvable ipsecAuthAlg) {
                this.ipsecAuthAlg = ipsecAuthAlg;
                return this;
            }

            /**
             * Sets the value of {@link IpsecConfigProperty#getIpsecEncAlg}
             * @param ipsecEncAlg the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ipsecEncAlg(java.lang.String ipsecEncAlg) {
                this.ipsecEncAlg = ipsecEncAlg;
                return this;
            }

            /**
             * Sets the value of {@link IpsecConfigProperty#getIpsecEncAlg}
             * @param ipsecEncAlg the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ipsecEncAlg(com.aliyun.ros.cdk.core.IResolvable ipsecEncAlg) {
                this.ipsecEncAlg = ipsecEncAlg;
                return this;
            }

            /**
             * Sets the value of {@link IpsecConfigProperty#getIpsecLifetime}
             * @param ipsecLifetime the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ipsecLifetime(java.lang.Number ipsecLifetime) {
                this.ipsecLifetime = ipsecLifetime;
                return this;
            }

            /**
             * Sets the value of {@link IpsecConfigProperty#getIpsecLifetime}
             * @param ipsecLifetime the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ipsecLifetime(com.aliyun.ros.cdk.core.IResolvable ipsecLifetime) {
                this.ipsecLifetime = ipsecLifetime;
                return this;
            }

            /**
             * Sets the value of {@link IpsecConfigProperty#getIpsecPfs}
             * @param ipsecPfs the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ipsecPfs(java.lang.String ipsecPfs) {
                this.ipsecPfs = ipsecPfs;
                return this;
            }

            /**
             * Sets the value of {@link IpsecConfigProperty#getIpsecPfs}
             * @param ipsecPfs the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ipsecPfs(com.aliyun.ros.cdk.core.IResolvable ipsecPfs) {
                this.ipsecPfs = ipsecPfs;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link IpsecConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public IpsecConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link IpsecConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements IpsecConfigProperty {
            private final java.lang.Object ipsecAuthAlg;
            private final java.lang.Object ipsecEncAlg;
            private final java.lang.Object ipsecLifetime;
            private final java.lang.Object ipsecPfs;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.ipsecAuthAlg = software.amazon.jsii.Kernel.get(this, "ipsecAuthAlg", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.ipsecEncAlg = software.amazon.jsii.Kernel.get(this, "ipsecEncAlg", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.ipsecLifetime = software.amazon.jsii.Kernel.get(this, "ipsecLifetime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.ipsecPfs = software.amazon.jsii.Kernel.get(this, "ipsecPfs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.ipsecAuthAlg = builder.ipsecAuthAlg;
                this.ipsecEncAlg = builder.ipsecEncAlg;
                this.ipsecLifetime = builder.ipsecLifetime;
                this.ipsecPfs = builder.ipsecPfs;
            }

            @Override
            public final java.lang.Object getIpsecAuthAlg() {
                return this.ipsecAuthAlg;
            }

            @Override
            public final java.lang.Object getIpsecEncAlg() {
                return this.ipsecEncAlg;
            }

            @Override
            public final java.lang.Object getIpsecLifetime() {
                return this.ipsecLifetime;
            }

            @Override
            public final java.lang.Object getIpsecPfs() {
                return this.ipsecPfs;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getIpsecAuthAlg() != null) {
                    data.set("ipsecAuthAlg", om.valueToTree(this.getIpsecAuthAlg()));
                }
                if (this.getIpsecEncAlg() != null) {
                    data.set("ipsecEncAlg", om.valueToTree(this.getIpsecEncAlg()));
                }
                if (this.getIpsecLifetime() != null) {
                    data.set("ipsecLifetime", om.valueToTree(this.getIpsecLifetime()));
                }
                if (this.getIpsecPfs() != null) {
                    data.set("ipsecPfs", om.valueToTree(this.getIpsecPfs()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.RosVpnConnection.IpsecConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                IpsecConfigProperty.Jsii$Proxy that = (IpsecConfigProperty.Jsii$Proxy) o;

                if (this.ipsecAuthAlg != null ? !this.ipsecAuthAlg.equals(that.ipsecAuthAlg) : that.ipsecAuthAlg != null) return false;
                if (this.ipsecEncAlg != null ? !this.ipsecEncAlg.equals(that.ipsecEncAlg) : that.ipsecEncAlg != null) return false;
                if (this.ipsecLifetime != null ? !this.ipsecLifetime.equals(that.ipsecLifetime) : that.ipsecLifetime != null) return false;
                return this.ipsecPfs != null ? this.ipsecPfs.equals(that.ipsecPfs) : that.ipsecPfs == null;
            }

            @Override
            public final int hashCode() {
                int result = this.ipsecAuthAlg != null ? this.ipsecAuthAlg.hashCode() : 0;
                result = 31 * result + (this.ipsecEncAlg != null ? this.ipsecEncAlg.hashCode() : 0);
                result = 31 * result + (this.ipsecLifetime != null ? this.ipsecLifetime.hashCode() : 0);
                result = 31 * result + (this.ipsecPfs != null ? this.ipsecPfs.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.RosVpnConnection.TunnelBgpConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(TunnelBgpConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface TunnelBgpConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getLocalAsn() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getLocalBgpIp() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getTunnelCidr() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link TunnelBgpConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link TunnelBgpConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<TunnelBgpConfigProperty> {
            java.lang.Object localAsn;
            java.lang.Object localBgpIp;
            java.lang.Object tunnelCidr;

            /**
             * Sets the value of {@link TunnelBgpConfigProperty#getLocalAsn}
             * @param localAsn the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder localAsn(java.lang.Number localAsn) {
                this.localAsn = localAsn;
                return this;
            }

            /**
             * Sets the value of {@link TunnelBgpConfigProperty#getLocalAsn}
             * @param localAsn the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder localAsn(com.aliyun.ros.cdk.core.IResolvable localAsn) {
                this.localAsn = localAsn;
                return this;
            }

            /**
             * Sets the value of {@link TunnelBgpConfigProperty#getLocalBgpIp}
             * @param localBgpIp the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder localBgpIp(java.lang.String localBgpIp) {
                this.localBgpIp = localBgpIp;
                return this;
            }

            /**
             * Sets the value of {@link TunnelBgpConfigProperty#getLocalBgpIp}
             * @param localBgpIp the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder localBgpIp(com.aliyun.ros.cdk.core.IResolvable localBgpIp) {
                this.localBgpIp = localBgpIp;
                return this;
            }

            /**
             * Sets the value of {@link TunnelBgpConfigProperty#getTunnelCidr}
             * @param tunnelCidr the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder tunnelCidr(java.lang.String tunnelCidr) {
                this.tunnelCidr = tunnelCidr;
                return this;
            }

            /**
             * Sets the value of {@link TunnelBgpConfigProperty#getTunnelCidr}
             * @param tunnelCidr the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder tunnelCidr(com.aliyun.ros.cdk.core.IResolvable tunnelCidr) {
                this.tunnelCidr = tunnelCidr;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link TunnelBgpConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public TunnelBgpConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link TunnelBgpConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements TunnelBgpConfigProperty {
            private final java.lang.Object localAsn;
            private final java.lang.Object localBgpIp;
            private final java.lang.Object tunnelCidr;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.localAsn = software.amazon.jsii.Kernel.get(this, "localAsn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.localBgpIp = software.amazon.jsii.Kernel.get(this, "localBgpIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.tunnelCidr = software.amazon.jsii.Kernel.get(this, "tunnelCidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.localAsn = builder.localAsn;
                this.localBgpIp = builder.localBgpIp;
                this.tunnelCidr = builder.tunnelCidr;
            }

            @Override
            public final java.lang.Object getLocalAsn() {
                return this.localAsn;
            }

            @Override
            public final java.lang.Object getLocalBgpIp() {
                return this.localBgpIp;
            }

            @Override
            public final java.lang.Object getTunnelCidr() {
                return this.tunnelCidr;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getLocalAsn() != null) {
                    data.set("localAsn", om.valueToTree(this.getLocalAsn()));
                }
                if (this.getLocalBgpIp() != null) {
                    data.set("localBgpIp", om.valueToTree(this.getLocalBgpIp()));
                }
                if (this.getTunnelCidr() != null) {
                    data.set("tunnelCidr", om.valueToTree(this.getTunnelCidr()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.RosVpnConnection.TunnelBgpConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                TunnelBgpConfigProperty.Jsii$Proxy that = (TunnelBgpConfigProperty.Jsii$Proxy) o;

                if (this.localAsn != null ? !this.localAsn.equals(that.localAsn) : that.localAsn != null) return false;
                if (this.localBgpIp != null ? !this.localBgpIp.equals(that.localBgpIp) : that.localBgpIp != null) return false;
                return this.tunnelCidr != null ? this.tunnelCidr.equals(that.tunnelCidr) : that.tunnelCidr == null;
            }

            @Override
            public final int hashCode() {
                int result = this.localAsn != null ? this.localAsn.hashCode() : 0;
                result = 31 * result + (this.localBgpIp != null ? this.localBgpIp.hashCode() : 0);
                result = 31 * result + (this.tunnelCidr != null ? this.tunnelCidr.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.RosVpnConnection.TunnelIkeConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(TunnelIkeConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface TunnelIkeConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIkeAuthAlg() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIkeEncAlg() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIkeLifetime() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIkeMode() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIkePfs() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIkeVersion() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getLocalId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPsk() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRemoteId() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link TunnelIkeConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link TunnelIkeConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<TunnelIkeConfigProperty> {
            java.lang.Object ikeAuthAlg;
            java.lang.Object ikeEncAlg;
            java.lang.Object ikeLifetime;
            java.lang.Object ikeMode;
            java.lang.Object ikePfs;
            java.lang.Object ikeVersion;
            java.lang.Object localId;
            java.lang.Object psk;
            java.lang.Object remoteId;

            /**
             * Sets the value of {@link TunnelIkeConfigProperty#getIkeAuthAlg}
             * @param ikeAuthAlg the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ikeAuthAlg(java.lang.String ikeAuthAlg) {
                this.ikeAuthAlg = ikeAuthAlg;
                return this;
            }

            /**
             * Sets the value of {@link TunnelIkeConfigProperty#getIkeAuthAlg}
             * @param ikeAuthAlg the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ikeAuthAlg(com.aliyun.ros.cdk.core.IResolvable ikeAuthAlg) {
                this.ikeAuthAlg = ikeAuthAlg;
                return this;
            }

            /**
             * Sets the value of {@link TunnelIkeConfigProperty#getIkeEncAlg}
             * @param ikeEncAlg the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ikeEncAlg(java.lang.String ikeEncAlg) {
                this.ikeEncAlg = ikeEncAlg;
                return this;
            }

            /**
             * Sets the value of {@link TunnelIkeConfigProperty#getIkeEncAlg}
             * @param ikeEncAlg the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ikeEncAlg(com.aliyun.ros.cdk.core.IResolvable ikeEncAlg) {
                this.ikeEncAlg = ikeEncAlg;
                return this;
            }

            /**
             * Sets the value of {@link TunnelIkeConfigProperty#getIkeLifetime}
             * @param ikeLifetime the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ikeLifetime(java.lang.Number ikeLifetime) {
                this.ikeLifetime = ikeLifetime;
                return this;
            }

            /**
             * Sets the value of {@link TunnelIkeConfigProperty#getIkeLifetime}
             * @param ikeLifetime the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ikeLifetime(com.aliyun.ros.cdk.core.IResolvable ikeLifetime) {
                this.ikeLifetime = ikeLifetime;
                return this;
            }

            /**
             * Sets the value of {@link TunnelIkeConfigProperty#getIkeMode}
             * @param ikeMode the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ikeMode(java.lang.String ikeMode) {
                this.ikeMode = ikeMode;
                return this;
            }

            /**
             * Sets the value of {@link TunnelIkeConfigProperty#getIkeMode}
             * @param ikeMode the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ikeMode(com.aliyun.ros.cdk.core.IResolvable ikeMode) {
                this.ikeMode = ikeMode;
                return this;
            }

            /**
             * Sets the value of {@link TunnelIkeConfigProperty#getIkePfs}
             * @param ikePfs the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ikePfs(java.lang.String ikePfs) {
                this.ikePfs = ikePfs;
                return this;
            }

            /**
             * Sets the value of {@link TunnelIkeConfigProperty#getIkePfs}
             * @param ikePfs the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ikePfs(com.aliyun.ros.cdk.core.IResolvable ikePfs) {
                this.ikePfs = ikePfs;
                return this;
            }

            /**
             * Sets the value of {@link TunnelIkeConfigProperty#getIkeVersion}
             * @param ikeVersion the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ikeVersion(java.lang.String ikeVersion) {
                this.ikeVersion = ikeVersion;
                return this;
            }

            /**
             * Sets the value of {@link TunnelIkeConfigProperty#getIkeVersion}
             * @param ikeVersion the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ikeVersion(com.aliyun.ros.cdk.core.IResolvable ikeVersion) {
                this.ikeVersion = ikeVersion;
                return this;
            }

            /**
             * Sets the value of {@link TunnelIkeConfigProperty#getLocalId}
             * @param localId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder localId(java.lang.String localId) {
                this.localId = localId;
                return this;
            }

            /**
             * Sets the value of {@link TunnelIkeConfigProperty#getLocalId}
             * @param localId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder localId(com.aliyun.ros.cdk.core.IResolvable localId) {
                this.localId = localId;
                return this;
            }

            /**
             * Sets the value of {@link TunnelIkeConfigProperty#getPsk}
             * @param psk the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder psk(java.lang.String psk) {
                this.psk = psk;
                return this;
            }

            /**
             * Sets the value of {@link TunnelIkeConfigProperty#getPsk}
             * @param psk the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder psk(com.aliyun.ros.cdk.core.IResolvable psk) {
                this.psk = psk;
                return this;
            }

            /**
             * Sets the value of {@link TunnelIkeConfigProperty#getRemoteId}
             * @param remoteId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder remoteId(java.lang.String remoteId) {
                this.remoteId = remoteId;
                return this;
            }

            /**
             * Sets the value of {@link TunnelIkeConfigProperty#getRemoteId}
             * @param remoteId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder remoteId(com.aliyun.ros.cdk.core.IResolvable remoteId) {
                this.remoteId = remoteId;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link TunnelIkeConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public TunnelIkeConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link TunnelIkeConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements TunnelIkeConfigProperty {
            private final java.lang.Object ikeAuthAlg;
            private final java.lang.Object ikeEncAlg;
            private final java.lang.Object ikeLifetime;
            private final java.lang.Object ikeMode;
            private final java.lang.Object ikePfs;
            private final java.lang.Object ikeVersion;
            private final java.lang.Object localId;
            private final java.lang.Object psk;
            private final java.lang.Object remoteId;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.ikeAuthAlg = software.amazon.jsii.Kernel.get(this, "ikeAuthAlg", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.ikeEncAlg = software.amazon.jsii.Kernel.get(this, "ikeEncAlg", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.ikeLifetime = software.amazon.jsii.Kernel.get(this, "ikeLifetime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.ikeMode = software.amazon.jsii.Kernel.get(this, "ikeMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.ikePfs = software.amazon.jsii.Kernel.get(this, "ikePfs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.ikeVersion = software.amazon.jsii.Kernel.get(this, "ikeVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.localId = software.amazon.jsii.Kernel.get(this, "localId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.psk = software.amazon.jsii.Kernel.get(this, "psk", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.remoteId = software.amazon.jsii.Kernel.get(this, "remoteId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.ikeAuthAlg = builder.ikeAuthAlg;
                this.ikeEncAlg = builder.ikeEncAlg;
                this.ikeLifetime = builder.ikeLifetime;
                this.ikeMode = builder.ikeMode;
                this.ikePfs = builder.ikePfs;
                this.ikeVersion = builder.ikeVersion;
                this.localId = builder.localId;
                this.psk = builder.psk;
                this.remoteId = builder.remoteId;
            }

            @Override
            public final java.lang.Object getIkeAuthAlg() {
                return this.ikeAuthAlg;
            }

            @Override
            public final java.lang.Object getIkeEncAlg() {
                return this.ikeEncAlg;
            }

            @Override
            public final java.lang.Object getIkeLifetime() {
                return this.ikeLifetime;
            }

            @Override
            public final java.lang.Object getIkeMode() {
                return this.ikeMode;
            }

            @Override
            public final java.lang.Object getIkePfs() {
                return this.ikePfs;
            }

            @Override
            public final java.lang.Object getIkeVersion() {
                return this.ikeVersion;
            }

            @Override
            public final java.lang.Object getLocalId() {
                return this.localId;
            }

            @Override
            public final java.lang.Object getPsk() {
                return this.psk;
            }

            @Override
            public final java.lang.Object getRemoteId() {
                return this.remoteId;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getIkeAuthAlg() != null) {
                    data.set("ikeAuthAlg", om.valueToTree(this.getIkeAuthAlg()));
                }
                if (this.getIkeEncAlg() != null) {
                    data.set("ikeEncAlg", om.valueToTree(this.getIkeEncAlg()));
                }
                if (this.getIkeLifetime() != null) {
                    data.set("ikeLifetime", om.valueToTree(this.getIkeLifetime()));
                }
                if (this.getIkeMode() != null) {
                    data.set("ikeMode", om.valueToTree(this.getIkeMode()));
                }
                if (this.getIkePfs() != null) {
                    data.set("ikePfs", om.valueToTree(this.getIkePfs()));
                }
                if (this.getIkeVersion() != null) {
                    data.set("ikeVersion", om.valueToTree(this.getIkeVersion()));
                }
                if (this.getLocalId() != null) {
                    data.set("localId", om.valueToTree(this.getLocalId()));
                }
                if (this.getPsk() != null) {
                    data.set("psk", om.valueToTree(this.getPsk()));
                }
                if (this.getRemoteId() != null) {
                    data.set("remoteId", om.valueToTree(this.getRemoteId()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.RosVpnConnection.TunnelIkeConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                TunnelIkeConfigProperty.Jsii$Proxy that = (TunnelIkeConfigProperty.Jsii$Proxy) o;

                if (this.ikeAuthAlg != null ? !this.ikeAuthAlg.equals(that.ikeAuthAlg) : that.ikeAuthAlg != null) return false;
                if (this.ikeEncAlg != null ? !this.ikeEncAlg.equals(that.ikeEncAlg) : that.ikeEncAlg != null) return false;
                if (this.ikeLifetime != null ? !this.ikeLifetime.equals(that.ikeLifetime) : that.ikeLifetime != null) return false;
                if (this.ikeMode != null ? !this.ikeMode.equals(that.ikeMode) : that.ikeMode != null) return false;
                if (this.ikePfs != null ? !this.ikePfs.equals(that.ikePfs) : that.ikePfs != null) return false;
                if (this.ikeVersion != null ? !this.ikeVersion.equals(that.ikeVersion) : that.ikeVersion != null) return false;
                if (this.localId != null ? !this.localId.equals(that.localId) : that.localId != null) return false;
                if (this.psk != null ? !this.psk.equals(that.psk) : that.psk != null) return false;
                return this.remoteId != null ? this.remoteId.equals(that.remoteId) : that.remoteId == null;
            }

            @Override
            public final int hashCode() {
                int result = this.ikeAuthAlg != null ? this.ikeAuthAlg.hashCode() : 0;
                result = 31 * result + (this.ikeEncAlg != null ? this.ikeEncAlg.hashCode() : 0);
                result = 31 * result + (this.ikeLifetime != null ? this.ikeLifetime.hashCode() : 0);
                result = 31 * result + (this.ikeMode != null ? this.ikeMode.hashCode() : 0);
                result = 31 * result + (this.ikePfs != null ? this.ikePfs.hashCode() : 0);
                result = 31 * result + (this.ikeVersion != null ? this.ikeVersion.hashCode() : 0);
                result = 31 * result + (this.localId != null ? this.localId.hashCode() : 0);
                result = 31 * result + (this.psk != null ? this.psk.hashCode() : 0);
                result = 31 * result + (this.remoteId != null ? this.remoteId.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.RosVpnConnection.TunnelIpsecConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(TunnelIpsecConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface TunnelIpsecConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIpsecAuthAlg() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIpsecEncAlg() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIpsecLifetime() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIpsecPfs() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link TunnelIpsecConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link TunnelIpsecConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<TunnelIpsecConfigProperty> {
            java.lang.Object ipsecAuthAlg;
            java.lang.Object ipsecEncAlg;
            java.lang.Object ipsecLifetime;
            java.lang.Object ipsecPfs;

            /**
             * Sets the value of {@link TunnelIpsecConfigProperty#getIpsecAuthAlg}
             * @param ipsecAuthAlg the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ipsecAuthAlg(java.lang.String ipsecAuthAlg) {
                this.ipsecAuthAlg = ipsecAuthAlg;
                return this;
            }

            /**
             * Sets the value of {@link TunnelIpsecConfigProperty#getIpsecAuthAlg}
             * @param ipsecAuthAlg the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ipsecAuthAlg(com.aliyun.ros.cdk.core.IResolvable ipsecAuthAlg) {
                this.ipsecAuthAlg = ipsecAuthAlg;
                return this;
            }

            /**
             * Sets the value of {@link TunnelIpsecConfigProperty#getIpsecEncAlg}
             * @param ipsecEncAlg the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ipsecEncAlg(java.lang.String ipsecEncAlg) {
                this.ipsecEncAlg = ipsecEncAlg;
                return this;
            }

            /**
             * Sets the value of {@link TunnelIpsecConfigProperty#getIpsecEncAlg}
             * @param ipsecEncAlg the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ipsecEncAlg(com.aliyun.ros.cdk.core.IResolvable ipsecEncAlg) {
                this.ipsecEncAlg = ipsecEncAlg;
                return this;
            }

            /**
             * Sets the value of {@link TunnelIpsecConfigProperty#getIpsecLifetime}
             * @param ipsecLifetime the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ipsecLifetime(java.lang.Number ipsecLifetime) {
                this.ipsecLifetime = ipsecLifetime;
                return this;
            }

            /**
             * Sets the value of {@link TunnelIpsecConfigProperty#getIpsecLifetime}
             * @param ipsecLifetime the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ipsecLifetime(com.aliyun.ros.cdk.core.IResolvable ipsecLifetime) {
                this.ipsecLifetime = ipsecLifetime;
                return this;
            }

            /**
             * Sets the value of {@link TunnelIpsecConfigProperty#getIpsecPfs}
             * @param ipsecPfs the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ipsecPfs(java.lang.String ipsecPfs) {
                this.ipsecPfs = ipsecPfs;
                return this;
            }

            /**
             * Sets the value of {@link TunnelIpsecConfigProperty#getIpsecPfs}
             * @param ipsecPfs the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ipsecPfs(com.aliyun.ros.cdk.core.IResolvable ipsecPfs) {
                this.ipsecPfs = ipsecPfs;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link TunnelIpsecConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public TunnelIpsecConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link TunnelIpsecConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements TunnelIpsecConfigProperty {
            private final java.lang.Object ipsecAuthAlg;
            private final java.lang.Object ipsecEncAlg;
            private final java.lang.Object ipsecLifetime;
            private final java.lang.Object ipsecPfs;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.ipsecAuthAlg = software.amazon.jsii.Kernel.get(this, "ipsecAuthAlg", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.ipsecEncAlg = software.amazon.jsii.Kernel.get(this, "ipsecEncAlg", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.ipsecLifetime = software.amazon.jsii.Kernel.get(this, "ipsecLifetime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.ipsecPfs = software.amazon.jsii.Kernel.get(this, "ipsecPfs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.ipsecAuthAlg = builder.ipsecAuthAlg;
                this.ipsecEncAlg = builder.ipsecEncAlg;
                this.ipsecLifetime = builder.ipsecLifetime;
                this.ipsecPfs = builder.ipsecPfs;
            }

            @Override
            public final java.lang.Object getIpsecAuthAlg() {
                return this.ipsecAuthAlg;
            }

            @Override
            public final java.lang.Object getIpsecEncAlg() {
                return this.ipsecEncAlg;
            }

            @Override
            public final java.lang.Object getIpsecLifetime() {
                return this.ipsecLifetime;
            }

            @Override
            public final java.lang.Object getIpsecPfs() {
                return this.ipsecPfs;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getIpsecAuthAlg() != null) {
                    data.set("ipsecAuthAlg", om.valueToTree(this.getIpsecAuthAlg()));
                }
                if (this.getIpsecEncAlg() != null) {
                    data.set("ipsecEncAlg", om.valueToTree(this.getIpsecEncAlg()));
                }
                if (this.getIpsecLifetime() != null) {
                    data.set("ipsecLifetime", om.valueToTree(this.getIpsecLifetime()));
                }
                if (this.getIpsecPfs() != null) {
                    data.set("ipsecPfs", om.valueToTree(this.getIpsecPfs()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.RosVpnConnection.TunnelIpsecConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                TunnelIpsecConfigProperty.Jsii$Proxy that = (TunnelIpsecConfigProperty.Jsii$Proxy) o;

                if (this.ipsecAuthAlg != null ? !this.ipsecAuthAlg.equals(that.ipsecAuthAlg) : that.ipsecAuthAlg != null) return false;
                if (this.ipsecEncAlg != null ? !this.ipsecEncAlg.equals(that.ipsecEncAlg) : that.ipsecEncAlg != null) return false;
                if (this.ipsecLifetime != null ? !this.ipsecLifetime.equals(that.ipsecLifetime) : that.ipsecLifetime != null) return false;
                return this.ipsecPfs != null ? this.ipsecPfs.equals(that.ipsecPfs) : that.ipsecPfs == null;
            }

            @Override
            public final int hashCode() {
                int result = this.ipsecAuthAlg != null ? this.ipsecAuthAlg.hashCode() : 0;
                result = 31 * result + (this.ipsecEncAlg != null ? this.ipsecEncAlg.hashCode() : 0);
                result = 31 * result + (this.ipsecLifetime != null ? this.ipsecLifetime.hashCode() : 0);
                result = 31 * result + (this.ipsecPfs != null ? this.ipsecPfs.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.RosVpnConnection.TunnelOptionsSpecificationProperty")
    @software.amazon.jsii.Jsii.Proxy(TunnelOptionsSpecificationProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface TunnelOptionsSpecificationProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCustomerGatewayId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEnableDpd() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEnableNatTraversal() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRemoteCaCertificate() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRole() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getTunnelBgpConfig() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getTunnelIkeConfig() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getTunnelIpsecConfig() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link TunnelOptionsSpecificationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link TunnelOptionsSpecificationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<TunnelOptionsSpecificationProperty> {
            java.lang.Object customerGatewayId;
            java.lang.Object enableDpd;
            java.lang.Object enableNatTraversal;
            java.lang.Object remoteCaCertificate;
            java.lang.Object role;
            java.lang.Object tunnelBgpConfig;
            java.lang.Object tunnelIkeConfig;
            java.lang.Object tunnelIpsecConfig;

            /**
             * Sets the value of {@link TunnelOptionsSpecificationProperty#getCustomerGatewayId}
             * @param customerGatewayId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder customerGatewayId(java.lang.String customerGatewayId) {
                this.customerGatewayId = customerGatewayId;
                return this;
            }

            /**
             * Sets the value of {@link TunnelOptionsSpecificationProperty#getCustomerGatewayId}
             * @param customerGatewayId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder customerGatewayId(com.aliyun.ros.cdk.core.IResolvable customerGatewayId) {
                this.customerGatewayId = customerGatewayId;
                return this;
            }

            /**
             * Sets the value of {@link TunnelOptionsSpecificationProperty#getEnableDpd}
             * @param enableDpd the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enableDpd(java.lang.Boolean enableDpd) {
                this.enableDpd = enableDpd;
                return this;
            }

            /**
             * Sets the value of {@link TunnelOptionsSpecificationProperty#getEnableDpd}
             * @param enableDpd the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enableDpd(com.aliyun.ros.cdk.core.IResolvable enableDpd) {
                this.enableDpd = enableDpd;
                return this;
            }

            /**
             * Sets the value of {@link TunnelOptionsSpecificationProperty#getEnableNatTraversal}
             * @param enableNatTraversal the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enableNatTraversal(java.lang.Boolean enableNatTraversal) {
                this.enableNatTraversal = enableNatTraversal;
                return this;
            }

            /**
             * Sets the value of {@link TunnelOptionsSpecificationProperty#getEnableNatTraversal}
             * @param enableNatTraversal the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enableNatTraversal(com.aliyun.ros.cdk.core.IResolvable enableNatTraversal) {
                this.enableNatTraversal = enableNatTraversal;
                return this;
            }

            /**
             * Sets the value of {@link TunnelOptionsSpecificationProperty#getRemoteCaCertificate}
             * @param remoteCaCertificate the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder remoteCaCertificate(java.lang.String remoteCaCertificate) {
                this.remoteCaCertificate = remoteCaCertificate;
                return this;
            }

            /**
             * Sets the value of {@link TunnelOptionsSpecificationProperty#getRemoteCaCertificate}
             * @param remoteCaCertificate the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder remoteCaCertificate(com.aliyun.ros.cdk.core.IResolvable remoteCaCertificate) {
                this.remoteCaCertificate = remoteCaCertificate;
                return this;
            }

            /**
             * Sets the value of {@link TunnelOptionsSpecificationProperty#getRole}
             * @param role the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder role(java.lang.String role) {
                this.role = role;
                return this;
            }

            /**
             * Sets the value of {@link TunnelOptionsSpecificationProperty#getRole}
             * @param role the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder role(com.aliyun.ros.cdk.core.IResolvable role) {
                this.role = role;
                return this;
            }

            /**
             * Sets the value of {@link TunnelOptionsSpecificationProperty#getTunnelBgpConfig}
             * @param tunnelBgpConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder tunnelBgpConfig(com.aliyun.ros.cdk.core.IResolvable tunnelBgpConfig) {
                this.tunnelBgpConfig = tunnelBgpConfig;
                return this;
            }

            /**
             * Sets the value of {@link TunnelOptionsSpecificationProperty#getTunnelBgpConfig}
             * @param tunnelBgpConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder tunnelBgpConfig(com.aliyun.ros.cdk.vpc.RosVpnConnection.TunnelBgpConfigProperty tunnelBgpConfig) {
                this.tunnelBgpConfig = tunnelBgpConfig;
                return this;
            }

            /**
             * Sets the value of {@link TunnelOptionsSpecificationProperty#getTunnelIkeConfig}
             * @param tunnelIkeConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder tunnelIkeConfig(com.aliyun.ros.cdk.core.IResolvable tunnelIkeConfig) {
                this.tunnelIkeConfig = tunnelIkeConfig;
                return this;
            }

            /**
             * Sets the value of {@link TunnelOptionsSpecificationProperty#getTunnelIkeConfig}
             * @param tunnelIkeConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder tunnelIkeConfig(com.aliyun.ros.cdk.vpc.RosVpnConnection.TunnelIkeConfigProperty tunnelIkeConfig) {
                this.tunnelIkeConfig = tunnelIkeConfig;
                return this;
            }

            /**
             * Sets the value of {@link TunnelOptionsSpecificationProperty#getTunnelIpsecConfig}
             * @param tunnelIpsecConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder tunnelIpsecConfig(com.aliyun.ros.cdk.core.IResolvable tunnelIpsecConfig) {
                this.tunnelIpsecConfig = tunnelIpsecConfig;
                return this;
            }

            /**
             * Sets the value of {@link TunnelOptionsSpecificationProperty#getTunnelIpsecConfig}
             * @param tunnelIpsecConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder tunnelIpsecConfig(com.aliyun.ros.cdk.vpc.RosVpnConnection.TunnelIpsecConfigProperty tunnelIpsecConfig) {
                this.tunnelIpsecConfig = tunnelIpsecConfig;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link TunnelOptionsSpecificationProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public TunnelOptionsSpecificationProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link TunnelOptionsSpecificationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements TunnelOptionsSpecificationProperty {
            private final java.lang.Object customerGatewayId;
            private final java.lang.Object enableDpd;
            private final java.lang.Object enableNatTraversal;
            private final java.lang.Object remoteCaCertificate;
            private final java.lang.Object role;
            private final java.lang.Object tunnelBgpConfig;
            private final java.lang.Object tunnelIkeConfig;
            private final java.lang.Object tunnelIpsecConfig;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.customerGatewayId = software.amazon.jsii.Kernel.get(this, "customerGatewayId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.enableDpd = software.amazon.jsii.Kernel.get(this, "enableDpd", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.enableNatTraversal = software.amazon.jsii.Kernel.get(this, "enableNatTraversal", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.remoteCaCertificate = software.amazon.jsii.Kernel.get(this, "remoteCaCertificate", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.role = software.amazon.jsii.Kernel.get(this, "role", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.tunnelBgpConfig = software.amazon.jsii.Kernel.get(this, "tunnelBgpConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.tunnelIkeConfig = software.amazon.jsii.Kernel.get(this, "tunnelIkeConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.tunnelIpsecConfig = software.amazon.jsii.Kernel.get(this, "tunnelIpsecConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.customerGatewayId = builder.customerGatewayId;
                this.enableDpd = builder.enableDpd;
                this.enableNatTraversal = builder.enableNatTraversal;
                this.remoteCaCertificate = builder.remoteCaCertificate;
                this.role = builder.role;
                this.tunnelBgpConfig = builder.tunnelBgpConfig;
                this.tunnelIkeConfig = builder.tunnelIkeConfig;
                this.tunnelIpsecConfig = builder.tunnelIpsecConfig;
            }

            @Override
            public final java.lang.Object getCustomerGatewayId() {
                return this.customerGatewayId;
            }

            @Override
            public final java.lang.Object getEnableDpd() {
                return this.enableDpd;
            }

            @Override
            public final java.lang.Object getEnableNatTraversal() {
                return this.enableNatTraversal;
            }

            @Override
            public final java.lang.Object getRemoteCaCertificate() {
                return this.remoteCaCertificate;
            }

            @Override
            public final java.lang.Object getRole() {
                return this.role;
            }

            @Override
            public final java.lang.Object getTunnelBgpConfig() {
                return this.tunnelBgpConfig;
            }

            @Override
            public final java.lang.Object getTunnelIkeConfig() {
                return this.tunnelIkeConfig;
            }

            @Override
            public final java.lang.Object getTunnelIpsecConfig() {
                return this.tunnelIpsecConfig;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getCustomerGatewayId() != null) {
                    data.set("customerGatewayId", om.valueToTree(this.getCustomerGatewayId()));
                }
                if (this.getEnableDpd() != null) {
                    data.set("enableDpd", om.valueToTree(this.getEnableDpd()));
                }
                if (this.getEnableNatTraversal() != null) {
                    data.set("enableNatTraversal", om.valueToTree(this.getEnableNatTraversal()));
                }
                if (this.getRemoteCaCertificate() != null) {
                    data.set("remoteCaCertificate", om.valueToTree(this.getRemoteCaCertificate()));
                }
                if (this.getRole() != null) {
                    data.set("role", om.valueToTree(this.getRole()));
                }
                if (this.getTunnelBgpConfig() != null) {
                    data.set("tunnelBgpConfig", om.valueToTree(this.getTunnelBgpConfig()));
                }
                if (this.getTunnelIkeConfig() != null) {
                    data.set("tunnelIkeConfig", om.valueToTree(this.getTunnelIkeConfig()));
                }
                if (this.getTunnelIpsecConfig() != null) {
                    data.set("tunnelIpsecConfig", om.valueToTree(this.getTunnelIpsecConfig()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.RosVpnConnection.TunnelOptionsSpecificationProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                TunnelOptionsSpecificationProperty.Jsii$Proxy that = (TunnelOptionsSpecificationProperty.Jsii$Proxy) o;

                if (this.customerGatewayId != null ? !this.customerGatewayId.equals(that.customerGatewayId) : that.customerGatewayId != null) return false;
                if (this.enableDpd != null ? !this.enableDpd.equals(that.enableDpd) : that.enableDpd != null) return false;
                if (this.enableNatTraversal != null ? !this.enableNatTraversal.equals(that.enableNatTraversal) : that.enableNatTraversal != null) return false;
                if (this.remoteCaCertificate != null ? !this.remoteCaCertificate.equals(that.remoteCaCertificate) : that.remoteCaCertificate != null) return false;
                if (this.role != null ? !this.role.equals(that.role) : that.role != null) return false;
                if (this.tunnelBgpConfig != null ? !this.tunnelBgpConfig.equals(that.tunnelBgpConfig) : that.tunnelBgpConfig != null) return false;
                if (this.tunnelIkeConfig != null ? !this.tunnelIkeConfig.equals(that.tunnelIkeConfig) : that.tunnelIkeConfig != null) return false;
                return this.tunnelIpsecConfig != null ? this.tunnelIpsecConfig.equals(that.tunnelIpsecConfig) : that.tunnelIpsecConfig == null;
            }

            @Override
            public final int hashCode() {
                int result = this.customerGatewayId != null ? this.customerGatewayId.hashCode() : 0;
                result = 31 * result + (this.enableDpd != null ? this.enableDpd.hashCode() : 0);
                result = 31 * result + (this.enableNatTraversal != null ? this.enableNatTraversal.hashCode() : 0);
                result = 31 * result + (this.remoteCaCertificate != null ? this.remoteCaCertificate.hashCode() : 0);
                result = 31 * result + (this.role != null ? this.role.hashCode() : 0);
                result = 31 * result + (this.tunnelBgpConfig != null ? this.tunnelBgpConfig.hashCode() : 0);
                result = 31 * result + (this.tunnelIkeConfig != null ? this.tunnelIkeConfig.hashCode() : 0);
                result = 31 * result + (this.tunnelIpsecConfig != null ? this.tunnelIpsecConfig.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.vpc.RosVpnConnection}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.vpc.RosVpnConnection> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
         * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.vpc.RosVpnConnectionProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.vpc.RosVpnConnectionProps.Builder();
        }

        /**
         * @return {@code this}
         * @param localSubnet This parameter is required.
         */
        public Builder localSubnet(final java.lang.String localSubnet) {
            this.props.localSubnet(localSubnet);
            return this;
        }
        /**
         * @return {@code this}
         * @param localSubnet This parameter is required.
         */
        public Builder localSubnet(final com.aliyun.ros.cdk.core.IResolvable localSubnet) {
            this.props.localSubnet(localSubnet);
            return this;
        }

        /**
         * @return {@code this}
         * @param remoteSubnet This parameter is required.
         */
        public Builder remoteSubnet(final java.lang.String remoteSubnet) {
            this.props.remoteSubnet(remoteSubnet);
            return this;
        }
        /**
         * @return {@code this}
         * @param remoteSubnet This parameter is required.
         */
        public Builder remoteSubnet(final com.aliyun.ros.cdk.core.IResolvable remoteSubnet) {
            this.props.remoteSubnet(remoteSubnet);
            return this;
        }

        /**
         * @return {@code this}
         * @param vpnGatewayId This parameter is required.
         */
        public Builder vpnGatewayId(final java.lang.String vpnGatewayId) {
            this.props.vpnGatewayId(vpnGatewayId);
            return this;
        }
        /**
         * @return {@code this}
         * @param vpnGatewayId This parameter is required.
         */
        public Builder vpnGatewayId(final com.aliyun.ros.cdk.core.IResolvable vpnGatewayId) {
            this.props.vpnGatewayId(vpnGatewayId);
            return this;
        }

        /**
         * @return {@code this}
         * @param autoConfigRoute This parameter is required.
         */
        public Builder autoConfigRoute(final java.lang.Boolean autoConfigRoute) {
            this.props.autoConfigRoute(autoConfigRoute);
            return this;
        }
        /**
         * @return {@code this}
         * @param autoConfigRoute This parameter is required.
         */
        public Builder autoConfigRoute(final com.aliyun.ros.cdk.core.IResolvable autoConfigRoute) {
            this.props.autoConfigRoute(autoConfigRoute);
            return this;
        }

        /**
         * @return {@code this}
         * @param bgpConfig This parameter is required.
         */
        public Builder bgpConfig(final com.aliyun.ros.cdk.core.IResolvable bgpConfig) {
            this.props.bgpConfig(bgpConfig);
            return this;
        }
        /**
         * @return {@code this}
         * @param bgpConfig This parameter is required.
         */
        public Builder bgpConfig(final com.aliyun.ros.cdk.vpc.RosVpnConnection.BgpConfigProperty bgpConfig) {
            this.props.bgpConfig(bgpConfig);
            return this;
        }

        /**
         * @return {@code this}
         * @param customerGatewayId This parameter is required.
         */
        public Builder customerGatewayId(final java.lang.String customerGatewayId) {
            this.props.customerGatewayId(customerGatewayId);
            return this;
        }
        /**
         * @return {@code this}
         * @param customerGatewayId This parameter is required.
         */
        public Builder customerGatewayId(final com.aliyun.ros.cdk.core.IResolvable customerGatewayId) {
            this.props.customerGatewayId(customerGatewayId);
            return this;
        }

        /**
         * @return {@code this}
         * @param effectImmediately This parameter is required.
         */
        public Builder effectImmediately(final java.lang.Boolean effectImmediately) {
            this.props.effectImmediately(effectImmediately);
            return this;
        }
        /**
         * @return {@code this}
         * @param effectImmediately This parameter is required.
         */
        public Builder effectImmediately(final com.aliyun.ros.cdk.core.IResolvable effectImmediately) {
            this.props.effectImmediately(effectImmediately);
            return this;
        }

        /**
         * @return {@code this}
         * @param enableDpd This parameter is required.
         */
        public Builder enableDpd(final java.lang.Boolean enableDpd) {
            this.props.enableDpd(enableDpd);
            return this;
        }
        /**
         * @return {@code this}
         * @param enableDpd This parameter is required.
         */
        public Builder enableDpd(final com.aliyun.ros.cdk.core.IResolvable enableDpd) {
            this.props.enableDpd(enableDpd);
            return this;
        }

        /**
         * @return {@code this}
         * @param enableNatTraversal This parameter is required.
         */
        public Builder enableNatTraversal(final java.lang.Boolean enableNatTraversal) {
            this.props.enableNatTraversal(enableNatTraversal);
            return this;
        }
        /**
         * @return {@code this}
         * @param enableNatTraversal This parameter is required.
         */
        public Builder enableNatTraversal(final com.aliyun.ros.cdk.core.IResolvable enableNatTraversal) {
            this.props.enableNatTraversal(enableNatTraversal);
            return this;
        }

        /**
         * @return {@code this}
         * @param enableTunnelsBgp This parameter is required.
         */
        public Builder enableTunnelsBgp(final java.lang.Boolean enableTunnelsBgp) {
            this.props.enableTunnelsBgp(enableTunnelsBgp);
            return this;
        }
        /**
         * @return {@code this}
         * @param enableTunnelsBgp This parameter is required.
         */
        public Builder enableTunnelsBgp(final com.aliyun.ros.cdk.core.IResolvable enableTunnelsBgp) {
            this.props.enableTunnelsBgp(enableTunnelsBgp);
            return this;
        }

        /**
         * @return {@code this}
         * @param healthCheckConfig This parameter is required.
         */
        public Builder healthCheckConfig(final com.aliyun.ros.cdk.core.IResolvable healthCheckConfig) {
            this.props.healthCheckConfig(healthCheckConfig);
            return this;
        }
        /**
         * @return {@code this}
         * @param healthCheckConfig This parameter is required.
         */
        public Builder healthCheckConfig(final com.aliyun.ros.cdk.vpc.RosVpnConnection.HealthCheckConfigProperty healthCheckConfig) {
            this.props.healthCheckConfig(healthCheckConfig);
            return this;
        }

        /**
         * @return {@code this}
         * @param ikeConfig This parameter is required.
         */
        public Builder ikeConfig(final com.aliyun.ros.cdk.core.IResolvable ikeConfig) {
            this.props.ikeConfig(ikeConfig);
            return this;
        }
        /**
         * @return {@code this}
         * @param ikeConfig This parameter is required.
         */
        public Builder ikeConfig(final com.aliyun.ros.cdk.vpc.RosVpnConnection.IkeConfigProperty ikeConfig) {
            this.props.ikeConfig(ikeConfig);
            return this;
        }

        /**
         * @return {@code this}
         * @param ipsecConfig This parameter is required.
         */
        public Builder ipsecConfig(final com.aliyun.ros.cdk.core.IResolvable ipsecConfig) {
            this.props.ipsecConfig(ipsecConfig);
            return this;
        }
        /**
         * @return {@code this}
         * @param ipsecConfig This parameter is required.
         */
        public Builder ipsecConfig(final com.aliyun.ros.cdk.vpc.RosVpnConnection.IpsecConfigProperty ipsecConfig) {
            this.props.ipsecConfig(ipsecConfig);
            return this;
        }

        /**
         * @return {@code this}
         * @param name This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }
        /**
         * @return {@code this}
         * @param name This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props.name(name);
            return this;
        }

        /**
         * @return {@code this}
         * @param remoteCaCertificate This parameter is required.
         */
        public Builder remoteCaCertificate(final java.lang.String remoteCaCertificate) {
            this.props.remoteCaCertificate(remoteCaCertificate);
            return this;
        }
        /**
         * @return {@code this}
         * @param remoteCaCertificate This parameter is required.
         */
        public Builder remoteCaCertificate(final com.aliyun.ros.cdk.core.IResolvable remoteCaCertificate) {
            this.props.remoteCaCertificate(remoteCaCertificate);
            return this;
        }

        /**
         * @return {@code this}
         * @param tunnelOptionsSpecification This parameter is required.
         */
        public Builder tunnelOptionsSpecification(final com.aliyun.ros.cdk.core.IResolvable tunnelOptionsSpecification) {
            this.props.tunnelOptionsSpecification(tunnelOptionsSpecification);
            return this;
        }
        /**
         * @return {@code this}
         * @param tunnelOptionsSpecification This parameter is required.
         */
        public Builder tunnelOptionsSpecification(final java.util.List<? extends java.lang.Object> tunnelOptionsSpecification) {
            this.props.tunnelOptionsSpecification(tunnelOptionsSpecification);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.vpc.RosVpnConnection}.
         */
        @Override
        public com.aliyun.ros.cdk.vpc.RosVpnConnection build() {
            return new com.aliyun.ros.cdk.vpc.RosVpnConnection(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
