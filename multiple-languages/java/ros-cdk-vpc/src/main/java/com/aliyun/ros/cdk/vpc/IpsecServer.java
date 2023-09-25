package com.aliyun.ros.cdk.vpc;

/**
 * A ROS resource type:  <code>ALIYUN::VPC::IpsecServer</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-25T05:23:27.193Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.IpsecServer")
public class IpsecServer extends com.aliyun.ros.cdk.core.Resource {

    protected IpsecServer(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected IpsecServer(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>ALIYUN::VPC::IpsecServer</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public IpsecServer(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.IpsecServerProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>ALIYUN::VPC::IpsecServer</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public IpsecServer(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.IpsecServerProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute IpsecServerId: IPsec server ID.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrIpsecServerId() {
        return software.amazon.jsii.Kernel.get(this, "attrIpsecServerId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute IpsecServerName: IPsec server name.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrIpsecServerName() {
        return software.amazon.jsii.Kernel.get(this, "attrIpsecServerName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.vpc.IpsecServer}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.vpc.IpsecServer> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.vpc.IpsecServerProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.vpc.IpsecServerProps.Builder();
        }

        /**
         * Property clientIpPool: Client network segment refers to the address segment that assigns access addresses to the virtual network card of the client.
         * <p>
         * Note: The client network segment cannot conflict with the VPC side network segment.
         * <p>
         * @return {@code this}
         * @param clientIpPool Property clientIpPool: Client network segment refers to the address segment that assigns access addresses to the virtual network card of the client. This parameter is required.
         */
        public Builder clientIpPool(final java.lang.String clientIpPool) {
            this.props.clientIpPool(clientIpPool);
            return this;
        }
        /**
         * Property clientIpPool: Client network segment refers to the address segment that assigns access addresses to the virtual network card of the client.
         * <p>
         * Note: The client network segment cannot conflict with the VPC side network segment.
         * <p>
         * @return {@code this}
         * @param clientIpPool Property clientIpPool: Client network segment refers to the address segment that assigns access addresses to the virtual network card of the client. This parameter is required.
         */
        public Builder clientIpPool(final com.aliyun.ros.cdk.core.IResolvable clientIpPool) {
            this.props.clientIpPool(clientIpPool);
            return this;
        }

        /**
         * Property localSubnet: The local network segment refers to the network segment on the VPC side that needs to be interconnected with the client network segment.
         * <p>
         * Use half-width commas (,) to separate multiple network segments, for example: 192.168.1.0/24,192.168.2.0/24.
         * <p>
         * @return {@code this}
         * @param localSubnet Property localSubnet: The local network segment refers to the network segment on the VPC side that needs to be interconnected with the client network segment. This parameter is required.
         */
        public Builder localSubnet(final java.lang.String localSubnet) {
            this.props.localSubnet(localSubnet);
            return this;
        }
        /**
         * Property localSubnet: The local network segment refers to the network segment on the VPC side that needs to be interconnected with the client network segment.
         * <p>
         * Use half-width commas (,) to separate multiple network segments, for example: 192.168.1.0/24,192.168.2.0/24.
         * <p>
         * @return {@code this}
         * @param localSubnet Property localSubnet: The local network segment refers to the network segment on the VPC side that needs to be interconnected with the client network segment. This parameter is required.
         */
        public Builder localSubnet(final com.aliyun.ros.cdk.core.IResolvable localSubnet) {
            this.props.localSubnet(localSubnet);
            return this;
        }

        /**
         * Property vpnGatewayId: VPN gateway instance ID.
         * <p>
         * @return {@code this}
         * @param vpnGatewayId Property vpnGatewayId: VPN gateway instance ID. This parameter is required.
         */
        public Builder vpnGatewayId(final java.lang.String vpnGatewayId) {
            this.props.vpnGatewayId(vpnGatewayId);
            return this;
        }
        /**
         * Property vpnGatewayId: VPN gateway instance ID.
         * <p>
         * @return {@code this}
         * @param vpnGatewayId Property vpnGatewayId: VPN gateway instance ID. This parameter is required.
         */
        public Builder vpnGatewayId(final com.aliyun.ros.cdk.core.IResolvable vpnGatewayId) {
            this.props.vpnGatewayId(vpnGatewayId);
            return this;
        }

        /**
         * Property effectImmediately: true: Apply the new configuration and trigger a reconnection immediately.
         * <p>
         * false: Trigger a reconnection only when network traffic occurs. (The reconnection may cause the network to be unavailable for a brief moment)
         * <p>
         * @return {@code this}
         * @param effectImmediately Property effectImmediately: true: Apply the new configuration and trigger a reconnection immediately. This parameter is required.
         */
        public Builder effectImmediately(final java.lang.Boolean effectImmediately) {
            this.props.effectImmediately(effectImmediately);
            return this;
        }
        /**
         * Property effectImmediately: true: Apply the new configuration and trigger a reconnection immediately.
         * <p>
         * false: Trigger a reconnection only when network traffic occurs. (The reconnection may cause the network to be unavailable for a brief moment)
         * <p>
         * @return {@code this}
         * @param effectImmediately Property effectImmediately: true: Apply the new configuration and trigger a reconnection immediately. This parameter is required.
         */
        public Builder effectImmediately(final com.aliyun.ros.cdk.core.IResolvable effectImmediately) {
            this.props.effectImmediately(effectImmediately);
            return this;
        }

        /**
         * Property ikeConfig: Negotiation parameter configuration in the first phase.
         * <p>
         * @return {@code this}
         * @param ikeConfig Property ikeConfig: Negotiation parameter configuration in the first phase. This parameter is required.
         */
        public Builder ikeConfig(final com.aliyun.ros.cdk.core.IResolvable ikeConfig) {
            this.props.ikeConfig(ikeConfig);
            return this;
        }
        /**
         * Property ikeConfig: Negotiation parameter configuration in the first phase.
         * <p>
         * @return {@code this}
         * @param ikeConfig Property ikeConfig: Negotiation parameter configuration in the first phase. This parameter is required.
         */
        public Builder ikeConfig(final com.aliyun.ros.cdk.vpc.RosIpsecServer.IkeConfigProperty ikeConfig) {
            this.props.ikeConfig(ikeConfig);
            return this;
        }

        /**
         * Property ipsecConfig: Negotiation parameter configuration in the second phase.
         * <p>
         * @return {@code this}
         * @param ipsecConfig Property ipsecConfig: Negotiation parameter configuration in the second phase. This parameter is required.
         */
        public Builder ipsecConfig(final com.aliyun.ros.cdk.core.IResolvable ipsecConfig) {
            this.props.ipsecConfig(ipsecConfig);
            return this;
        }
        /**
         * Property ipsecConfig: Negotiation parameter configuration in the second phase.
         * <p>
         * @return {@code this}
         * @param ipsecConfig Property ipsecConfig: Negotiation parameter configuration in the second phase. This parameter is required.
         */
        public Builder ipsecConfig(final com.aliyun.ros.cdk.vpc.RosIpsecServer.IpsecConfigProperty ipsecConfig) {
            this.props.ipsecConfig(ipsecConfig);
            return this;
        }

        /**
         * Property ipsecServerName: The value must be 2 to 128 characters in length and start with a letter or Chinese character.
         * <p>
         * It can contain digits, underscores (_), and hyphens (-).
         * <p>
         * @return {@code this}
         * @param ipsecServerName Property ipsecServerName: The value must be 2 to 128 characters in length and start with a letter or Chinese character. This parameter is required.
         */
        public Builder ipsecServerName(final java.lang.String ipsecServerName) {
            this.props.ipsecServerName(ipsecServerName);
            return this;
        }
        /**
         * Property ipsecServerName: The value must be 2 to 128 characters in length and start with a letter or Chinese character.
         * <p>
         * It can contain digits, underscores (_), and hyphens (-).
         * <p>
         * @return {@code this}
         * @param ipsecServerName Property ipsecServerName: The value must be 2 to 128 characters in length and start with a letter or Chinese character. This parameter is required.
         */
        public Builder ipsecServerName(final com.aliyun.ros.cdk.core.IResolvable ipsecServerName) {
            this.props.ipsecServerName(ipsecServerName);
            return this;
        }

        /**
         * Property psk: Pre-Shared key.
         * <p>
         * Used for identity authentication between the VPN gateway and the client. A 16-bit random string is randomly generated by default, or you can manually specify the key. The length is limited to 100 characters.
         * <p>
         * @return {@code this}
         * @param psk Property psk: Pre-Shared key. This parameter is required.
         */
        public Builder psk(final java.lang.String psk) {
            this.props.psk(psk);
            return this;
        }
        /**
         * Property psk: Pre-Shared key.
         * <p>
         * Used for identity authentication between the VPN gateway and the client. A 16-bit random string is randomly generated by default, or you can manually specify the key. The length is limited to 100 characters.
         * <p>
         * @return {@code this}
         * @param psk Property psk: Pre-Shared key. This parameter is required.
         */
        public Builder psk(final com.aliyun.ros.cdk.core.IResolvable psk) {
            this.props.psk(psk);
            return this;
        }

        /**
         * Property pskEnabled: Whether to enable the pre-shared key authentication method.
         * <p>
         * Only the value is true, which means that the pre-shared key authentication mode is enabled.
         * <p>
         * @return {@code this}
         * @param pskEnabled Property pskEnabled: Whether to enable the pre-shared key authentication method. This parameter is required.
         */
        public Builder pskEnabled(final java.lang.Boolean pskEnabled) {
            this.props.pskEnabled(pskEnabled);
            return this;
        }
        /**
         * Property pskEnabled: Whether to enable the pre-shared key authentication method.
         * <p>
         * Only the value is true, which means that the pre-shared key authentication mode is enabled.
         * <p>
         * @return {@code this}
         * @param pskEnabled Property pskEnabled: Whether to enable the pre-shared key authentication method. This parameter is required.
         */
        public Builder pskEnabled(final com.aliyun.ros.cdk.core.IResolvable pskEnabled) {
            this.props.pskEnabled(pskEnabled);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.vpc.IpsecServer}.
         */
        @Override
        public com.aliyun.ros.cdk.vpc.IpsecServer build() {
            return new com.aliyun.ros.cdk.vpc.IpsecServer(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
