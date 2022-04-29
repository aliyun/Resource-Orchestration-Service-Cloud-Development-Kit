package com.aliyun.ros.cdk.vpc;

/**
 * A ROS resource type:  `ALIYUN::VPC::SslVpnServer`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.57.0 (build f614666)", date = "2022-04-29T01:47:30.770Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.SslVpnServer")
public class SslVpnServer extends com.aliyun.ros.cdk.core.Resource {

    protected SslVpnServer(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected SslVpnServer(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::VPC::SslVpnServer`.
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
    public SslVpnServer(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.SslVpnServerProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::VPC::SslVpnServer`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSslVpnServerId() {
        return software.amazon.jsii.Kernel.get(this, "attrSslVpnServerId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
         * Property clientIpPool: It is the address segment that assigns the access address to the client virtual NIC.
         * <p>
         * It does not refer to the existing intranet segment of the client.
         * When the client accesses the local end through an SSL-VPN connection, the VPN gateway allocates an IP address to the client from the specified client network segment.
         * The network segment cannot conflict with the LocalSubnet address segment.
         * <p>
         * @return {@code this}
         * @param clientIpPool Property clientIpPool: It is the address segment that assigns the access address to the client virtual NIC. This parameter is required.
         */
        public Builder clientIpPool(final java.lang.String clientIpPool) {
            this.props.clientIpPool(clientIpPool);
            return this;
        }
        /**
         * Property clientIpPool: It is the address segment that assigns the access address to the client virtual NIC.
         * <p>
         * It does not refer to the existing intranet segment of the client.
         * When the client accesses the local end through an SSL-VPN connection, the VPN gateway allocates an IP address to the client from the specified client network segment.
         * The network segment cannot conflict with the LocalSubnet address segment.
         * <p>
         * @return {@code this}
         * @param clientIpPool Property clientIpPool: It is the address segment that assigns the access address to the client virtual NIC. This parameter is required.
         */
        public Builder clientIpPool(final com.aliyun.ros.cdk.core.IResolvable clientIpPool) {
            this.props.clientIpPool(clientIpPool);
            return this;
        }

        /**
         * Property localSubnet: Is the address segment that the client wants to access through an SSL-VPN connection.
         * <p>
         * The local network segment can be the network segment of the VPC, the network segment of the switch, the network segment of the IDC interconnected by the leased line and the VPC, and the network segment of the cloud service such as RDS/OSS.
         * <p>
         * @return {@code this}
         * @param localSubnet Property localSubnet: Is the address segment that the client wants to access through an SSL-VPN connection. This parameter is required.
         */
        public Builder localSubnet(final java.lang.String localSubnet) {
            this.props.localSubnet(localSubnet);
            return this;
        }
        /**
         * Property localSubnet: Is the address segment that the client wants to access through an SSL-VPN connection.
         * <p>
         * The local network segment can be the network segment of the VPC, the network segment of the switch, the network segment of the IDC interconnected by the leased line and the VPC, and the network segment of the cloud service such as RDS/OSS.
         * <p>
         * @return {@code this}
         * @param localSubnet Property localSubnet: Is the address segment that the client wants to access through an SSL-VPN connection. This parameter is required.
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
         * Property name: The name of the SSL-VPN server.
         * <p>
         * The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_), and dashes (-).
         * But it can't start with http:// or https://.
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the SSL-VPN server. This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }
        /**
         * Property name: The name of the SSL-VPN server.
         * <p>
         * The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_), and dashes (-).
         * But it can't start with http:// or https://.
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the SSL-VPN server. This parameter is required.
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
         * Property proto: The protocol used by the SSL-VPN server.
         * <p>
         * Allowed values: UDP (default) | TCP.
         * <p>
         * @return {@code this}
         * @param proto Property proto: The protocol used by the SSL-VPN server. This parameter is required.
         */
        public Builder proto(final java.lang.String proto) {
            this.props.proto(proto);
            return this;
        }
        /**
         * Property proto: The protocol used by the SSL-VPN server.
         * <p>
         * Allowed values: UDP (default) | TCP.
         * <p>
         * @return {@code this}
         * @param proto Property proto: The protocol used by the SSL-VPN server. This parameter is required.
         */
        public Builder proto(final com.aliyun.ros.cdk.core.IResolvable proto) {
            this.props.proto(proto);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.vpc.SslVpnServer}.
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
