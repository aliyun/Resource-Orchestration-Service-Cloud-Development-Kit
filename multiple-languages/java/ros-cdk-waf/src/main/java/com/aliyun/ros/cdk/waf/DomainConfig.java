package com.aliyun.ros.cdk.waf;

/**
 * A ROS resource type:  `ALIYUN::WAF::DomainConfig`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.59.0 (build eb02c92)", date = "2022-05-20T02:42:03.958Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.waf.$Module.class, fqn = "@alicloud/ros-cdk-waf.DomainConfig")
public class DomainConfig extends com.aliyun.ros.cdk.core.Resource {

    protected DomainConfig(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected DomainConfig(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::WAF::DomainConfig`.
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
    public DomainConfig(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.waf.DomainConfigProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::WAF::DomainConfig`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public DomainConfig(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.waf.DomainConfigProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Cname: CNAME assigned by WAF instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCname() {
        return software.amazon.jsii.Kernel.get(this, "attrCname", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ProtocolType: agreement type:0: indicates that the HTTP protocol is supported.1: indicates that the HTTPS protocol is supported.2: indicates that both HTTP and HTTPS protocols are supported.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrProtocolType() {
        return software.amazon.jsii.Kernel.get(this, "attrProtocolType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.waf.DomainConfig}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.waf.DomainConfig> {
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
        private final com.aliyun.ros.cdk.waf.DomainConfigProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.waf.DomainConfigProps.Builder();
        }

        /**
         * Property domain: Domain name.
         * <p>
         * @return {@code this}
         * @param domain Property domain: Domain name. This parameter is required.
         */
        public Builder domain(final java.lang.String domain) {
            this.props.domain(domain);
            return this;
        }
        /**
         * Property domain: Domain name.
         * <p>
         * @return {@code this}
         * @param domain Property domain: Domain name. This parameter is required.
         */
        public Builder domain(final com.aliyun.ros.cdk.core.IResolvable domain) {
            this.props.domain(domain);
            return this;
        }

        /**
         * Property instanceId: WAF instance ID.
         * <p>
         * Description Interface You can view your current WAF instance ID by calling DescribePayInfo.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: WAF instance ID. This parameter is required.
         */
        public Builder instanceId(final java.lang.String instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }
        /**
         * Property instanceId: WAF instance ID.
         * <p>
         * Description Interface You can view your current WAF instance ID by calling DescribePayInfo.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: WAF instance ID. This parameter is required.
         */
        public Builder instanceId(final com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }

        /**
         * Property isAccessProduct: The domain before WAF is configured with seven agents (eg, high defense, CDN, etc.), the value of: 0: none. 1: expressed.
         * <p>
         * @return {@code this}
         * @param isAccessProduct Property isAccessProduct: The domain before WAF is configured with seven agents (eg, high defense, CDN, etc.), the value of: 0: none. 1: expressed. This parameter is required.
         */
        public Builder isAccessProduct(final java.lang.Number isAccessProduct) {
            this.props.isAccessProduct(isAccessProduct);
            return this;
        }
        /**
         * Property isAccessProduct: The domain before WAF is configured with seven agents (eg, high defense, CDN, etc.), the value of: 0: none. 1: expressed.
         * <p>
         * @return {@code this}
         * @param isAccessProduct Property isAccessProduct: The domain before WAF is configured with seven agents (eg, high defense, CDN, etc.), the value of: 0: none. 1: expressed. This parameter is required.
         */
        public Builder isAccessProduct(final com.aliyun.ros.cdk.core.IResolvable isAccessProduct) {
            this.props.isAccessProduct(isAccessProduct);
            return this;
        }

        /**
         * Property protocols: The domain supports access protocols, values: http: expressed support for the HTTP protocol.
         * <p>
         * https: support for HTTPS protocol.
         * http, https: supports HTTP, HTTPS protocol.
         * <p>
         * @return {@code this}
         * @param protocols Property protocols: The domain supports access protocols, values: http: expressed support for the HTTP protocol. This parameter is required.
         */
        public Builder protocols(final java.lang.String protocols) {
            this.props.protocols(protocols);
            return this;
        }
        /**
         * Property protocols: The domain supports access protocols, values: http: expressed support for the HTTP protocol.
         * <p>
         * https: support for HTTPS protocol.
         * http, https: supports HTTP, HTTPS protocol.
         * <p>
         * @return {@code this}
         * @param protocols Property protocols: The domain supports access protocols, values: http: expressed support for the HTTP protocol. This parameter is required.
         */
        public Builder protocols(final com.aliyun.ros.cdk.core.IResolvable protocols) {
            this.props.protocols(protocols);
            return this;
        }

        /**
         * Property httpPort: HTTP protocol configuration port.
         * <p>
         * When specifying a plurality of HTTP port "," separated. Example values: [80].
         * Configure the HTTP protocol, this parameter is required. The default value is 80. HttpPort HttpsPort with at least two parameters need to fill a request.
         * <p>
         * @return {@code this}
         * @param httpPort Property httpPort: HTTP protocol configuration port. This parameter is required.
         */
        public Builder httpPort(final java.lang.String httpPort) {
            this.props.httpPort(httpPort);
            return this;
        }
        /**
         * Property httpPort: HTTP protocol configuration port.
         * <p>
         * When specifying a plurality of HTTP port "," separated. Example values: [80].
         * Configure the HTTP protocol, this parameter is required. The default value is 80. HttpPort HttpsPort with at least two parameters need to fill a request.
         * <p>
         * @return {@code this}
         * @param httpPort Property httpPort: HTTP protocol configuration port. This parameter is required.
         */
        public Builder httpPort(final com.aliyun.ros.cdk.core.IResolvable httpPort) {
            this.props.httpPort(httpPort);
            return this;
        }

        /**
         * Property httpsPort: HTTPS protocol configuration port.
         * <p>
         * When specifying a plurality HTTPS port, using the "," separated. Example values: [443].
         * Configure the protocol is HTTPS, this parameter is required. The default value is 443. HttpPort HttpsPort with at least two parameters need to fill a request.
         * <p>
         * @return {@code this}
         * @param httpsPort Property httpsPort: HTTPS protocol configuration port. This parameter is required.
         */
        public Builder httpsPort(final java.lang.String httpsPort) {
            this.props.httpsPort(httpsPort);
            return this;
        }
        /**
         * Property httpsPort: HTTPS protocol configuration port.
         * <p>
         * When specifying a plurality HTTPS port, using the "," separated. Example values: [443].
         * Configure the protocol is HTTPS, this parameter is required. The default value is 443. HttpPort HttpsPort with at least two parameters need to fill a request.
         * <p>
         * @return {@code this}
         * @param httpsPort Property httpsPort: HTTPS protocol configuration port. This parameter is required.
         */
        public Builder httpsPort(final com.aliyun.ros.cdk.core.IResolvable httpsPort) {
            this.props.httpsPort(httpsPort);
            return this;
        }

        /**
         * Property httpsRedirect: HTTPS is turned forcefully jump the argument: 0: off (default) 1: Turn Description required to complete the request parameters using only HTTPS access protocol.
         * <p>
         * After opening force will show a jump HTTP request is HTTPS, a default jump to 443.
         * <p>
         * @return {@code this}
         * @param httpsRedirect Property httpsRedirect: HTTPS is turned forcefully jump the argument: 0: off (default) 1: Turn Description required to complete the request parameters using only HTTPS access protocol. This parameter is required.
         */
        public Builder httpsRedirect(final java.lang.Number httpsRedirect) {
            this.props.httpsRedirect(httpsRedirect);
            return this;
        }
        /**
         * Property httpsRedirect: HTTPS is turned forcefully jump the argument: 0: off (default) 1: Turn Description required to complete the request parameters using only HTTPS access protocol.
         * <p>
         * After opening force will show a jump HTTP request is HTTPS, a default jump to 443.
         * <p>
         * @return {@code this}
         * @param httpsRedirect Property httpsRedirect: HTTPS is turned forcefully jump the argument: 0: off (default) 1: Turn Description required to complete the request parameters using only HTTPS access protocol. This parameter is required.
         */
        public Builder httpsRedirect(final com.aliyun.ros.cdk.core.IResolvable httpsRedirect) {
            this.props.httpsRedirect(httpsRedirect);
            return this;
        }

        /**
         * Property httpToUserIp: Whether to open HTTPS access request is forwarded back to the source station via the HTTP protocol, the value of: 0: off (default) 1: Turn Note If your site does not support HTTPS back to the source, open source HTTP return (default back to the source port is port 80) function key, can be realized by WAF HTTPS access.
         * <p>
         * @return {@code this}
         * @param httpToUserIp Property httpToUserIp: Whether to open HTTPS access request is forwarded back to the source station via the HTTP protocol, the value of: 0: off (default) 1: Turn Note If your site does not support HTTPS back to the source, open source HTTP return (default back to the source port is port 80) function key, can be realized by WAF HTTPS access. This parameter is required.
         */
        public Builder httpToUserIp(final java.lang.Number httpToUserIp) {
            this.props.httpToUserIp(httpToUserIp);
            return this;
        }
        /**
         * Property httpToUserIp: Whether to open HTTPS access request is forwarded back to the source station via the HTTP protocol, the value of: 0: off (default) 1: Turn Note If your site does not support HTTPS back to the source, open source HTTP return (default back to the source port is port 80) function key, can be realized by WAF HTTPS access.
         * <p>
         * @return {@code this}
         * @param httpToUserIp Property httpToUserIp: Whether to open HTTPS access request is forwarded back to the source station via the HTTP protocol, the value of: 0: off (default) 1: Turn Note If your site does not support HTTPS back to the source, open source HTTP return (default back to the source port is port 80) function key, can be realized by WAF HTTPS access. This parameter is required.
         */
        public Builder httpToUserIp(final com.aliyun.ros.cdk.core.IResolvable httpToUserIp) {
            this.props.httpToUserIp(httpToUserIp);
            return this;
        }

        /**
         * Property loadBalancing: Back to the source load balancing policy values: 0: IP Hash way.
         * <p>
         * 1: represents a polling mode.
         * <p>
         * @return {@code this}
         * @param loadBalancing Property loadBalancing: Back to the source load balancing policy values: 0: IP Hash way. This parameter is required.
         */
        public Builder loadBalancing(final java.lang.Number loadBalancing) {
            this.props.loadBalancing(loadBalancing);
            return this;
        }
        /**
         * Property loadBalancing: Back to the source load balancing policy values: 0: IP Hash way.
         * <p>
         * 1: represents a polling mode.
         * <p>
         * @return {@code this}
         * @param loadBalancing Property loadBalancing: Back to the source load balancing policy values: 0: IP Hash way. This parameter is required.
         */
        public Builder loadBalancing(final com.aliyun.ros.cdk.core.IResolvable loadBalancing) {
            this.props.loadBalancing(loadBalancing);
            return this;
        }

        /**
         * Property region: Examples of areas where the WAF.
         * <p>
         * Value:
         * cn: China mainland (default)
         * cn-hongkong: China HongKong and other overseas
         * <p>
         * @return {@code this}
         * @param region Property region: Examples of areas where the WAF. This parameter is required.
         */
        public Builder region(final java.lang.String region) {
            this.props.region(region);
            return this;
        }
        /**
         * Property region: Examples of areas where the WAF.
         * <p>
         * Value:
         * cn: China mainland (default)
         * cn-hongkong: China HongKong and other overseas
         * <p>
         * @return {@code this}
         * @param region Property region: Examples of areas where the WAF. This parameter is required.
         */
        public Builder region(final com.aliyun.ros.cdk.core.IResolvable region) {
            this.props.region(region);
            return this;
        }

        /**
         * Property rsType: Back to the source address type the domain name values: 0: back to the source to IP.
         * <p>
         * 1: Indicates the domain name back to the source.
         * <p>
         * @return {@code this}
         * @param rsType Property rsType: Back to the source address type the domain name values: 0: back to the source to IP. This parameter is required.
         */
        public Builder rsType(final java.lang.Number rsType) {
            this.props.rsType(rsType);
            return this;
        }
        /**
         * Property rsType: Back to the source address type the domain name values: 0: back to the source to IP.
         * <p>
         * 1: Indicates the domain name back to the source.
         * <p>
         * @return {@code this}
         * @param rsType Property rsType: Back to the source address type the domain name values: 0: back to the source to IP. This parameter is required.
         */
        public Builder rsType(final com.aliyun.ros.cdk.core.IResolvable rsType) {
            this.props.rsType(rsType);
            return this;
        }

        /**
         * Property sourceIps: Source station IP, supports a plurality of specified IP.
         * <p>
         * Example values: [ "1.1.1.1"].
         * <p>
         * @return {@code this}
         * @param sourceIps Property sourceIps: Source station IP, supports a plurality of specified IP. This parameter is required.
         */
        public Builder sourceIps(final java.lang.String sourceIps) {
            this.props.sourceIps(sourceIps);
            return this;
        }
        /**
         * Property sourceIps: Source station IP, supports a plurality of specified IP.
         * <p>
         * Example values: [ "1.1.1.1"].
         * <p>
         * @return {@code this}
         * @param sourceIps Property sourceIps: Source station IP, supports a plurality of specified IP. This parameter is required.
         */
        public Builder sourceIps(final com.aliyun.ros.cdk.core.IResolvable sourceIps) {
            this.props.sourceIps(sourceIps);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.waf.DomainConfig}.
         */
        @Override
        public com.aliyun.ros.cdk.waf.DomainConfig build() {
            return new com.aliyun.ros.cdk.waf.DomainConfig(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
