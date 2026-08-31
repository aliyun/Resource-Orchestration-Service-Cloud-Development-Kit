package com.aliyun.ros.cdk.vpc;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::VPC::SslVpnServer</code>, which is used to create an SSL-VPN server.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-08-31T12:05:00.493Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.SslVpnServer")
public class SslVpnServer extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.vpc.ISslVpnServer {

    protected SslVpnServer(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected SslVpnServer(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public SslVpnServer(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.SslVpnServerProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public SslVpnServer(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.SslVpnServerProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute SslVpnServerId: ID of the SSL-VPN server.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSslVpnServerId() {
        return software.amazon.jsii.Kernel.get(this, "attrSslVpnServerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.SslVpnServerProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.SslVpnServerProps.class));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    protected void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.String getId() {
        return software.amazon.jsii.Kernel.get(this, "id", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    protected void setId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "id", java.util.Objects.requireNonNull(value, "id is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.vpc.SslVpnServer}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.vpc.SslVpnServer> {
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
        private final com.aliyun.ros.cdk.vpc.SslVpnServerProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.vpc.SslVpnServerProps.Builder();
        }

        /**
         * Property clientIpPool: The client CIDR block.
         * <p>
         * The CIDR block from which an IP address is allocated to the virtual network
         * interface controller (NIC) of the client, rather than the private CIDR block.
         * If the client accesses the SSL server over an SSL-VPN connection, the VPN gateway
         * assigns an IP address from the specified client CIDR block for the client to
         * access cloud resources.
         * Make sure that the number of IP addresses in the client CIDR block is at least
         * four times the maximum number of SSL-VPN connections supported by the VPN
         * gateway.
         * ... (omitted for brevity; see metadata URL) ...
         * <p>
         * <ul>
         * <li>The subnet mask of the client CIDR block must be 16 to 29 bits in length.</li>
         * <li>Make sure that the client CIDR block does not overlap with the local CIDR
         * block, the VPC CIDR block, or route CIDR blocks associated with the client.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param clientIpPool Property clientIpPool: The client CIDR block. This parameter is required.
         */
        public Builder clientIpPool(final java.lang.String clientIpPool) {
            this.props.clientIpPool(clientIpPool);
            return this;
        }
        /**
         * Property clientIpPool: The client CIDR block.
         * <p>
         * The CIDR block from which an IP address is allocated to the virtual network
         * interface controller (NIC) of the client, rather than the private CIDR block.
         * If the client accesses the SSL server over an SSL-VPN connection, the VPN gateway
         * assigns an IP address from the specified client CIDR block for the client to
         * access cloud resources.
         * Make sure that the number of IP addresses in the client CIDR block is at least
         * four times the maximum number of SSL-VPN connections supported by the VPN
         * gateway.
         * ... (omitted for brevity; see metadata URL) ...
         * <p>
         * <ul>
         * <li>The subnet mask of the client CIDR block must be 16 to 29 bits in length.</li>
         * <li>Make sure that the client CIDR block does not overlap with the local CIDR
         * block, the VPC CIDR block, or route CIDR blocks associated with the client.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param clientIpPool Property clientIpPool: The client CIDR block. This parameter is required.
         */
        public Builder clientIpPool(final com.aliyun.ros.cdk.core.IResolvable clientIpPool) {
            this.props.clientIpPool(clientIpPool);
            return this;
        }

        /**
         * Property localSubnet: The local CIDR block.
         * <p>
         * The CIDR block that your client needs to access by using the SSL-VPN connection.
         * This value can be the CIDR block of a VPC, a vSwitch, a data center that is
         * connected to a VPC by using an Express Connect circuit, or a cloud
         * service such as Object Storage Service (OSS).
         * The subnet mask of the specified local CIDR block must be 8 to 32 bits in length.
         * You cannot specify the following CIDR blocks as the local CIDR blocks:
         * <p>
         * <ul>
         * <li>127.0.0.0~127.255.255.255</li>
         * <li>169.254.0.0~169.254.255.255</li>
         * <li>224.0.0.0~239.255.255.255</li>
         * <li>255.0.0.0~255.255.255.255</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param localSubnet Property localSubnet: The local CIDR block. This parameter is required.
         */
        public Builder localSubnet(final java.lang.String localSubnet) {
            this.props.localSubnet(localSubnet);
            return this;
        }
        /**
         * Property localSubnet: The local CIDR block.
         * <p>
         * The CIDR block that your client needs to access by using the SSL-VPN connection.
         * This value can be the CIDR block of a VPC, a vSwitch, a data center that is
         * connected to a VPC by using an Express Connect circuit, or a cloud
         * service such as Object Storage Service (OSS).
         * The subnet mask of the specified local CIDR block must be 8 to 32 bits in length.
         * You cannot specify the following CIDR blocks as the local CIDR blocks:
         * <p>
         * <ul>
         * <li>127.0.0.0~127.255.255.255</li>
         * <li>169.254.0.0~169.254.255.255</li>
         * <li>224.0.0.0~239.255.255.255</li>
         * <li>255.0.0.0~255.255.255.255</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param localSubnet Property localSubnet: The local CIDR block. This parameter is required.
         */
        public Builder localSubnet(final com.aliyun.ros.cdk.core.IResolvable localSubnet) {
            this.props.localSubnet(localSubnet);
            return this;
        }

        /**
         * Property vpnGatewayId: ID of the VPN gateway.
         * <p>
         * @return {@code this}
         * @param vpnGatewayId Property vpnGatewayId: ID of the VPN gateway. This parameter is required.
         */
        public Builder vpnGatewayId(final java.lang.String vpnGatewayId) {
            this.props.vpnGatewayId(vpnGatewayId);
            return this;
        }
        /**
         * Property vpnGatewayId: ID of the VPN gateway.
         * <p>
         * @return {@code this}
         * @param vpnGatewayId Property vpnGatewayId: ID of the VPN gateway. This parameter is required.
         */
        public Builder vpnGatewayId(final com.aliyun.ros.cdk.core.IResolvable vpnGatewayId) {
            this.props.vpnGatewayId(vpnGatewayId);
            return this;
        }

        /**
         * Property cipher: The encryption algorithm used by SSL-VPN.
         * <p>
         * Value:
         * AES-128-CBC (default) | AES-192-CBC | AES-256-CBC | none
         * <p>
         * @return {@code this}
         * @param cipher Property cipher: The encryption algorithm used by SSL-VPN. This parameter is required.
         */
        public Builder cipher(final java.lang.String cipher) {
            this.props.cipher(cipher);
            return this;
        }
        /**
         * Property cipher: The encryption algorithm used by SSL-VPN.
         * <p>
         * Value:
         * AES-128-CBC (default) | AES-192-CBC | AES-256-CBC | none
         * <p>
         * @return {@code this}
         * @param cipher Property cipher: The encryption algorithm used by SSL-VPN. This parameter is required.
         */
        public Builder cipher(final com.aliyun.ros.cdk.core.IResolvable cipher) {
            this.props.cipher(cipher);
            return this;
        }

        /**
         * Property compress: Whether it is compressed.
         * <p>
         * @return {@code this}
         * @param compress Property compress: Whether it is compressed. This parameter is required.
         */
        public Builder compress(final java.lang.Boolean compress) {
            this.props.compress(compress);
            return this;
        }
        /**
         * Property compress: Whether it is compressed.
         * <p>
         * @return {@code this}
         * @param compress Property compress: Whether it is compressed. This parameter is required.
         */
        public Builder compress(final com.aliyun.ros.cdk.core.IResolvable compress) {
            this.props.compress(compress);
            return this;
        }

        /**
         * Property enableMultiFactorAuth: Whether to enable multi-factor authentication.
         * <p>
         * The default value is false.
         * <p>
         * @return {@code this}
         * @param enableMultiFactorAuth Property enableMultiFactorAuth: Whether to enable multi-factor authentication. This parameter is required.
         */
        public Builder enableMultiFactorAuth(final java.lang.Boolean enableMultiFactorAuth) {
            this.props.enableMultiFactorAuth(enableMultiFactorAuth);
            return this;
        }
        /**
         * Property enableMultiFactorAuth: Whether to enable multi-factor authentication.
         * <p>
         * The default value is false.
         * <p>
         * @return {@code this}
         * @param enableMultiFactorAuth Property enableMultiFactorAuth: Whether to enable multi-factor authentication. This parameter is required.
         */
        public Builder enableMultiFactorAuth(final com.aliyun.ros.cdk.core.IResolvable enableMultiFactorAuth) {
            this.props.enableMultiFactorAuth(enableMultiFactorAuth);
            return this;
        }

        /**
         * Property iDaaSApplicationId: The ID of the IDaaS application.
         * <p>
         * @return {@code this}
         * @param iDaaSApplicationId Property iDaaSApplicationId: The ID of the IDaaS application. This parameter is required.
         */
        public Builder iDaaSApplicationId(final java.lang.String iDaaSApplicationId) {
            this.props.iDaaSApplicationId(iDaaSApplicationId);
            return this;
        }
        /**
         * Property iDaaSApplicationId: The ID of the IDaaS application.
         * <p>
         * @return {@code this}
         * @param iDaaSApplicationId Property iDaaSApplicationId: The ID of the IDaaS application. This parameter is required.
         */
        public Builder iDaaSApplicationId(final com.aliyun.ros.cdk.core.IResolvable iDaaSApplicationId) {
            this.props.iDaaSApplicationId(iDaaSApplicationId);
            return this;
        }

        /**
         * Property iDaaSInstanceId: The ID of the IDaaS instance.
         * <p>
         * @return {@code this}
         * @param iDaaSInstanceId Property iDaaSInstanceId: The ID of the IDaaS instance. This parameter is required.
         */
        public Builder iDaaSInstanceId(final java.lang.String iDaaSInstanceId) {
            this.props.iDaaSInstanceId(iDaaSInstanceId);
            return this;
        }
        /**
         * Property iDaaSInstanceId: The ID of the IDaaS instance.
         * <p>
         * @return {@code this}
         * @param iDaaSInstanceId Property iDaaSInstanceId: The ID of the IDaaS instance. This parameter is required.
         */
        public Builder iDaaSInstanceId(final com.aliyun.ros.cdk.core.IResolvable iDaaSInstanceId) {
            this.props.iDaaSInstanceId(iDaaSInstanceId);
            return this;
        }

        /**
         * Property iDaaSRegionId: The region ID of the IDaaS instance.
         * <p>
         * @return {@code this}
         * @param iDaaSRegionId Property iDaaSRegionId: The region ID of the IDaaS instance. This parameter is required.
         */
        public Builder iDaaSRegionId(final java.lang.String iDaaSRegionId) {
            this.props.iDaaSRegionId(iDaaSRegionId);
            return this;
        }
        /**
         * Property iDaaSRegionId: The region ID of the IDaaS instance.
         * <p>
         * @return {@code this}
         * @param iDaaSRegionId Property iDaaSRegionId: The region ID of the IDaaS instance. This parameter is required.
         */
        public Builder iDaaSRegionId(final com.aliyun.ros.cdk.core.IResolvable iDaaSRegionId) {
            this.props.iDaaSRegionId(iDaaSRegionId);
            return this;
        }

        /**
         * Property name: The SSL server name.
         * <p>
         * The name must be 1 to 100 characters in length and cannot start with <code>http:\/\/</code> or
         * <code>https:\/\/</code>.
         * <p>
         * @return {@code this}
         * @param name Property name: The SSL server name. This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }
        /**
         * Property name: The SSL server name.
         * <p>
         * The name must be 1 to 100 characters in length and cannot start with <code>http:\/\/</code> or
         * <code>https:\/\/</code>.
         * <p>
         * @return {@code this}
         * @param name Property name: The SSL server name. This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props.name(name);
            return this;
        }

        /**
         * Property port: The port used by the SSL-VPN server.
         * <p>
         * The default value is 1194. Cannot use the following ports:
         * 22, 2222, 22222, 9000, 9001, 9002, 7505, 80, 443, 53, 68, 123, 4510, 4560, 500, 4500
         * <p>
         * @return {@code this}
         * @param port Property port: The port used by the SSL-VPN server. This parameter is required.
         */
        public Builder port(final java.lang.Number port) {
            this.props.port(port);
            return this;
        }
        /**
         * Property port: The port used by the SSL-VPN server.
         * <p>
         * The default value is 1194. Cannot use the following ports:
         * 22, 2222, 22222, 9000, 9001, 9002, 7505, 80, 443, 53, 68, 123, 4510, 4560, 500, 4500
         * <p>
         * @return {@code this}
         * @param port Property port: The port used by the SSL-VPN server. This parameter is required.
         */
        public Builder port(final com.aliyun.ros.cdk.core.IResolvable port) {
            this.props.port(port);
            return this;
        }

        /**
         * Property proto: The protocol that is used by the SSL server.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>TCP (default)</li>
         * <li>UDP</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param proto Property proto: The protocol that is used by the SSL server. This parameter is required.
         */
        public Builder proto(final java.lang.String proto) {
            this.props.proto(proto);
            return this;
        }
        /**
         * Property proto: The protocol that is used by the SSL server.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>TCP (default)</li>
         * <li>UDP</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param proto Property proto: The protocol that is used by the SSL server. This parameter is required.
         */
        public Builder proto(final com.aliyun.ros.cdk.core.IResolvable proto) {
            this.props.proto(proto);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.vpc.SslVpnServer}.
         */
        @Override
        public com.aliyun.ros.cdk.vpc.SslVpnServer build() {
            return new com.aliyun.ros.cdk.vpc.SslVpnServer(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
