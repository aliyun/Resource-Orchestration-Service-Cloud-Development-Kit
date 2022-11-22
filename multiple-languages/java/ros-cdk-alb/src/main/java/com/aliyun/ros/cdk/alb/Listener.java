package com.aliyun.ros.cdk.alb;

/**
 * A ROS resource type:  `ALIYUN::ALB::Listener`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.71.0 (build f1f58ae)", date = "2022-11-22T06:16:27.390Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.alb.$Module.class, fqn = "@alicloud/ros-cdk-alb.Listener")
public class Listener extends com.aliyun.ros.cdk.core.Resource {

    protected Listener(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Listener(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::ALB::Listener`.
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
    public Listener(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.alb.ListenerProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::ALB::Listener`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Listener(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.alb.ListenerProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ListenerId: The ID of the listener.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrListenerId() {
        return software.amazon.jsii.Kernel.get(this, "attrListenerId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.alb.Listener}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.alb.Listener> {
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
        private final com.aliyun.ros.cdk.alb.ListenerProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.alb.ListenerProps.Builder();
        }

        /**
         * Property defaultActions: The actions of the rule.
         * <p>
         * @return {@code this}
         * @param defaultActions Property defaultActions: The actions of the rule. This parameter is required.
         */
        public Builder defaultActions(final com.aliyun.ros.cdk.core.IResolvable defaultActions) {
            this.props.defaultActions(defaultActions);
            return this;
        }
        /**
         * Property defaultActions: The actions of the rule.
         * <p>
         * @return {@code this}
         * @param defaultActions Property defaultActions: The actions of the rule. This parameter is required.
         */
        public Builder defaultActions(final java.util.List<? extends java.lang.Object> defaultActions) {
            this.props.defaultActions(defaultActions);
            return this;
        }

        /**
         * Property listenerPort: The frontend port that is used by the ALB instance.
         * <p>
         * Valid values: 1 to 65535.
         * <p>
         * @return {@code this}
         * @param listenerPort Property listenerPort: The frontend port that is used by the ALB instance. This parameter is required.
         */
        public Builder listenerPort(final java.lang.Number listenerPort) {
            this.props.listenerPort(listenerPort);
            return this;
        }
        /**
         * Property listenerPort: The frontend port that is used by the ALB instance.
         * <p>
         * Valid values: 1 to 65535.
         * <p>
         * @return {@code this}
         * @param listenerPort Property listenerPort: The frontend port that is used by the ALB instance. This parameter is required.
         */
        public Builder listenerPort(final com.aliyun.ros.cdk.core.IResolvable listenerPort) {
            this.props.listenerPort(listenerPort);
            return this;
        }

        /**
         * Property listenerProtocol: The listener protocol.
         * <p>
         * Valid values: HTTP, HTTPS, and QUIC.
         * <p>
         * @return {@code this}
         * @param listenerProtocol Property listenerProtocol: The listener protocol. This parameter is required.
         */
        public Builder listenerProtocol(final java.lang.String listenerProtocol) {
            this.props.listenerProtocol(listenerProtocol);
            return this;
        }
        /**
         * Property listenerProtocol: The listener protocol.
         * <p>
         * Valid values: HTTP, HTTPS, and QUIC.
         * <p>
         * @return {@code this}
         * @param listenerProtocol Property listenerProtocol: The listener protocol. This parameter is required.
         */
        public Builder listenerProtocol(final com.aliyun.ros.cdk.core.IResolvable listenerProtocol) {
            this.props.listenerProtocol(listenerProtocol);
            return this;
        }

        /**
         * Property loadBalancerId: The ID of the ALB instance.
         * <p>
         * @return {@code this}
         * @param loadBalancerId Property loadBalancerId: The ID of the ALB instance. This parameter is required.
         */
        public Builder loadBalancerId(final java.lang.String loadBalancerId) {
            this.props.loadBalancerId(loadBalancerId);
            return this;
        }
        /**
         * Property loadBalancerId: The ID of the ALB instance.
         * <p>
         * @return {@code this}
         * @param loadBalancerId Property loadBalancerId: The ID of the ALB instance. This parameter is required.
         */
        public Builder loadBalancerId(final com.aliyun.ros.cdk.core.IResolvable loadBalancerId) {
            this.props.loadBalancerId(loadBalancerId);
            return this;
        }

        /**
         * Property caCertificates: List of configured CA certificates for listener.
         * <p>
         * @return {@code this}
         * @param caCertificates Property caCertificates: List of configured CA certificates for listener. This parameter is required.
         */
        public Builder caCertificates(final com.aliyun.ros.cdk.core.IResolvable caCertificates) {
            this.props.caCertificates(caCertificates);
            return this;
        }
        /**
         * Property caCertificates: List of configured CA certificates for listener.
         * <p>
         * @return {@code this}
         * @param caCertificates Property caCertificates: List of configured CA certificates for listener. This parameter is required.
         */
        public Builder caCertificates(final java.util.List<? extends java.lang.Object> caCertificates) {
            this.props.caCertificates(caCertificates);
            return this;
        }

        /**
         * Property caEnabled: Specifies whether to enable mutual authentication.
         * <p>
         * Default false.
         * <p>
         * @return {@code this}
         * @param caEnabled Property caEnabled: Specifies whether to enable mutual authentication. This parameter is required.
         */
        public Builder caEnabled(final java.lang.Boolean caEnabled) {
            this.props.caEnabled(caEnabled);
            return this;
        }
        /**
         * Property caEnabled: Specifies whether to enable mutual authentication.
         * <p>
         * Default false.
         * <p>
         * @return {@code this}
         * @param caEnabled Property caEnabled: Specifies whether to enable mutual authentication. This parameter is required.
         */
        public Builder caEnabled(final com.aliyun.ros.cdk.core.IResolvable caEnabled) {
            this.props.caEnabled(caEnabled);
            return this;
        }

        /**
         * Property certificates: The list of SSL certificates for listener.
         * <p>
         * @return {@code this}
         * @param certificates Property certificates: The list of SSL certificates for listener. This parameter is required.
         */
        public Builder certificates(final com.aliyun.ros.cdk.core.IResolvable certificates) {
            this.props.certificates(certificates);
            return this;
        }
        /**
         * Property certificates: The list of SSL certificates for listener.
         * <p>
         * @return {@code this}
         * @param certificates Property certificates: The list of SSL certificates for listener. This parameter is required.
         */
        public Builder certificates(final java.util.List<? extends java.lang.Object> certificates) {
            this.props.certificates(certificates);
            return this;
        }

        /**
         * Property gzipEnabled: Specifies whether to enable gzip compression to compress files of a specific type.
         * <p>
         * Valid values: true and false.
         * Default value: true.
         * <p>
         * @return {@code this}
         * @param gzipEnabled Property gzipEnabled: Specifies whether to enable gzip compression to compress files of a specific type. This parameter is required.
         */
        public Builder gzipEnabled(final java.lang.Boolean gzipEnabled) {
            this.props.gzipEnabled(gzipEnabled);
            return this;
        }
        /**
         * Property gzipEnabled: Specifies whether to enable gzip compression to compress files of a specific type.
         * <p>
         * Valid values: true and false.
         * Default value: true.
         * <p>
         * @return {@code this}
         * @param gzipEnabled Property gzipEnabled: Specifies whether to enable gzip compression to compress files of a specific type. This parameter is required.
         */
        public Builder gzipEnabled(final com.aliyun.ros.cdk.core.IResolvable gzipEnabled) {
            this.props.gzipEnabled(gzipEnabled);
            return this;
        }

        /**
         * Property http2Enabled: Specifies whether to enable HTTP/2.
         * <p>
         * Default value: on.
         * Valid values: true and false.
         * Default value: true.
         * Note Only HTTPS listeners support this parameter.
         * <p>
         * @return {@code this}
         * @param http2Enabled Property http2Enabled: Specifies whether to enable HTTP/2. This parameter is required.
         */
        public Builder http2Enabled(final java.lang.Boolean http2Enabled) {
            this.props.http2Enabled(http2Enabled);
            return this;
        }
        /**
         * Property http2Enabled: Specifies whether to enable HTTP/2.
         * <p>
         * Default value: on.
         * Valid values: true and false.
         * Default value: true.
         * Note Only HTTPS listeners support this parameter.
         * <p>
         * @return {@code this}
         * @param http2Enabled Property http2Enabled: Specifies whether to enable HTTP/2. This parameter is required.
         */
        public Builder http2Enabled(final com.aliyun.ros.cdk.core.IResolvable http2Enabled) {
            this.props.http2Enabled(http2Enabled);
            return this;
        }

        /**
         * Property idleTimeout: The timeout period of idle connections.
         * <p>
         * Valid values: 1 to 180. Unit: seconds.
         * Default value: 15.
         * If no request is received within the specified timeout period, ALB closes the connection.
         * ALB recreates the connection when a new connection request is received.
         * <p>
         * @return {@code this}
         * @param idleTimeout Property idleTimeout: The timeout period of idle connections. This parameter is required.
         */
        public Builder idleTimeout(final java.lang.Number idleTimeout) {
            this.props.idleTimeout(idleTimeout);
            return this;
        }
        /**
         * Property idleTimeout: The timeout period of idle connections.
         * <p>
         * Valid values: 1 to 180. Unit: seconds.
         * Default value: 15.
         * If no request is received within the specified timeout period, ALB closes the connection.
         * ALB recreates the connection when a new connection request is received.
         * <p>
         * @return {@code this}
         * @param idleTimeout Property idleTimeout: The timeout period of idle connections. This parameter is required.
         */
        public Builder idleTimeout(final com.aliyun.ros.cdk.core.IResolvable idleTimeout) {
            this.props.idleTimeout(idleTimeout);
            return this;
        }

        /**
         * Property listenerDescription: The description of the listener.
         * <p>
         * The description must be 2 to 256 characters in length.
         * <p>
         * @return {@code this}
         * @param listenerDescription Property listenerDescription: The description of the listener. This parameter is required.
         */
        public Builder listenerDescription(final java.lang.String listenerDescription) {
            this.props.listenerDescription(listenerDescription);
            return this;
        }
        /**
         * Property listenerDescription: The description of the listener.
         * <p>
         * The description must be 2 to 256 characters in length.
         * <p>
         * @return {@code this}
         * @param listenerDescription Property listenerDescription: The description of the listener. This parameter is required.
         */
        public Builder listenerDescription(final com.aliyun.ros.cdk.core.IResolvable listenerDescription) {
            this.props.listenerDescription(listenerDescription);
            return this;
        }

        /**
         * Property quicConfig: Select a QUIC listener and associate it with the ALB instance.
         * <p>
         * @return {@code this}
         * @param quicConfig Property quicConfig: Select a QUIC listener and associate it with the ALB instance. This parameter is required.
         */
        public Builder quicConfig(final com.aliyun.ros.cdk.core.IResolvable quicConfig) {
            this.props.quicConfig(quicConfig);
            return this;
        }
        /**
         * Property quicConfig: Select a QUIC listener and associate it with the ALB instance.
         * <p>
         * @return {@code this}
         * @param quicConfig Property quicConfig: Select a QUIC listener and associate it with the ALB instance. This parameter is required.
         */
        public Builder quicConfig(final com.aliyun.ros.cdk.alb.RosListener.QuicConfigProperty quicConfig) {
            this.props.quicConfig(quicConfig);
            return this;
        }

        /**
         * Property requestTimeout: The timeout period of the request.
         * <p>
         * Valid values: 1 to 180. Unit: seconds.
         * Default value: 60.
         * If no response is received from the backend server during the request timeout period,
         * ALB sends an HTTP 504 error code to the client.
         * <p>
         * @return {@code this}
         * @param requestTimeout Property requestTimeout: The timeout period of the request. This parameter is required.
         */
        public Builder requestTimeout(final java.lang.Number requestTimeout) {
            this.props.requestTimeout(requestTimeout);
            return this;
        }
        /**
         * Property requestTimeout: The timeout period of the request.
         * <p>
         * Valid values: 1 to 180. Unit: seconds.
         * Default value: 60.
         * If no response is received from the backend server during the request timeout period,
         * ALB sends an HTTP 504 error code to the client.
         * <p>
         * @return {@code this}
         * @param requestTimeout Property requestTimeout: The timeout period of the request. This parameter is required.
         */
        public Builder requestTimeout(final com.aliyun.ros.cdk.core.IResolvable requestTimeout) {
            this.props.requestTimeout(requestTimeout);
            return this;
        }

        /**
         * Property securityPolicyId: The ID of the security policy.
         * <p>
         * System security policies and custom security policies
         * are supported.
         * Default value: tls_cipher_policy_1_0. This value indicates a system security policy.
         * Note Only HTTPS listeners support this parameter.
         * <p>
         * @return {@code this}
         * @param securityPolicyId Property securityPolicyId: The ID of the security policy. This parameter is required.
         */
        public Builder securityPolicyId(final java.lang.String securityPolicyId) {
            this.props.securityPolicyId(securityPolicyId);
            return this;
        }
        /**
         * Property securityPolicyId: The ID of the security policy.
         * <p>
         * System security policies and custom security policies
         * are supported.
         * Default value: tls_cipher_policy_1_0. This value indicates a system security policy.
         * Note Only HTTPS listeners support this parameter.
         * <p>
         * @return {@code this}
         * @param securityPolicyId Property securityPolicyId: The ID of the security policy. This parameter is required.
         */
        public Builder securityPolicyId(final com.aliyun.ros.cdk.core.IResolvable securityPolicyId) {
            this.props.securityPolicyId(securityPolicyId);
            return this;
        }

        /**
         * Property xForwardedForConfig: The configuration of the XForward field.
         * <p>
         * @return {@code this}
         * @param xForwardedForConfig Property xForwardedForConfig: The configuration of the XForward field. This parameter is required.
         */
        public Builder xForwardedForConfig(final com.aliyun.ros.cdk.core.IResolvable xForwardedForConfig) {
            this.props.xForwardedForConfig(xForwardedForConfig);
            return this;
        }
        /**
         * Property xForwardedForConfig: The configuration of the XForward field.
         * <p>
         * @return {@code this}
         * @param xForwardedForConfig Property xForwardedForConfig: The configuration of the XForward field. This parameter is required.
         */
        public Builder xForwardedForConfig(final com.aliyun.ros.cdk.alb.RosListener.XForwardedForConfigProperty xForwardedForConfig) {
            this.props.xForwardedForConfig(xForwardedForConfig);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.alb.Listener}.
         */
        @Override
        public com.aliyun.ros.cdk.alb.Listener build() {
            return new com.aliyun.ros.cdk.alb.Listener(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
