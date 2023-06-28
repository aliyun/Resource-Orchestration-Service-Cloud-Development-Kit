package com.aliyun.ros.cdk.nlb;

/**
 * A ROS resource type:  <code>ALIYUN::NLB::Listener</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.84.0 (build 5404dcf)", date = "2023-06-28T08:22:29.491Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.nlb.$Module.class, fqn = "@alicloud/ros-cdk-nlb.Listener")
public class Listener extends com.aliyun.ros.cdk.core.Resource {

    protected Listener(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Listener(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>ALIYUN::NLB::Listener</code>.
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
    public Listener(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.nlb.ListenerProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>ALIYUN::NLB::Listener</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Listener(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.nlb.ListenerProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ListenerId: Id of created Listener.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrListenerId() {
        return software.amazon.jsii.Kernel.get(this, "attrListenerId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ListenerPort: ListenerPort of created Listener.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrListenerPort() {
        return software.amazon.jsii.Kernel.get(this, "attrListenerPort", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.nlb.Listener}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.nlb.Listener> {
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
        private final com.aliyun.ros.cdk.nlb.ListenerProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.nlb.ListenerProps.Builder();
        }

        /**
         * Property listenerProtocol: undefined.
         * <p>
         * @return {@code this}
         * @param listenerProtocol Property listenerProtocol: undefined. This parameter is required.
         */
        public Builder listenerProtocol(final java.lang.String listenerProtocol) {
            this.props.listenerProtocol(listenerProtocol);
            return this;
        }
        /**
         * Property listenerProtocol: undefined.
         * <p>
         * @return {@code this}
         * @param listenerProtocol Property listenerProtocol: undefined. This parameter is required.
         */
        public Builder listenerProtocol(final com.aliyun.ros.cdk.core.IResolvable listenerProtocol) {
            this.props.listenerProtocol(listenerProtocol);
            return this;
        }

        /**
         * Property loadBalancerId: ID of the LoadBalancer.
         * <p>
         * @return {@code this}
         * @param loadBalancerId Property loadBalancerId: ID of the LoadBalancer. This parameter is required.
         */
        public Builder loadBalancerId(final java.lang.String loadBalancerId) {
            this.props.loadBalancerId(loadBalancerId);
            return this;
        }
        /**
         * Property loadBalancerId: ID of the LoadBalancer.
         * <p>
         * @return {@code this}
         * @param loadBalancerId Property loadBalancerId: ID of the LoadBalancer. This parameter is required.
         */
        public Builder loadBalancerId(final com.aliyun.ros.cdk.core.IResolvable loadBalancerId) {
            this.props.loadBalancerId(loadBalancerId);
            return this;
        }

        /**
         * Property serverGroupId: ID of the ServerGroup.
         * <p>
         * @return {@code this}
         * @param serverGroupId Property serverGroupId: ID of the ServerGroup. This parameter is required.
         */
        public Builder serverGroupId(final java.lang.String serverGroupId) {
            this.props.serverGroupId(serverGroupId);
            return this;
        }
        /**
         * Property serverGroupId: ID of the ServerGroup.
         * <p>
         * @return {@code this}
         * @param serverGroupId Property serverGroupId: ID of the ServerGroup. This parameter is required.
         */
        public Builder serverGroupId(final com.aliyun.ros.cdk.core.IResolvable serverGroupId) {
            this.props.serverGroupId(serverGroupId);
            return this;
        }

        /**
         * Property alpnEnabled: undefined.
         * <p>
         * @return {@code this}
         * @param alpnEnabled Property alpnEnabled: undefined. This parameter is required.
         */
        public Builder alpnEnabled(final java.lang.Boolean alpnEnabled) {
            this.props.alpnEnabled(alpnEnabled);
            return this;
        }
        /**
         * Property alpnEnabled: undefined.
         * <p>
         * @return {@code this}
         * @param alpnEnabled Property alpnEnabled: undefined. This parameter is required.
         */
        public Builder alpnEnabled(final com.aliyun.ros.cdk.core.IResolvable alpnEnabled) {
            this.props.alpnEnabled(alpnEnabled);
            return this;
        }

        /**
         * Property alpnPolicy: Proxy of alpn.
         * <p>
         * @return {@code this}
         * @param alpnPolicy Property alpnPolicy: Proxy of alpn. This parameter is required.
         */
        public Builder alpnPolicy(final java.lang.String alpnPolicy) {
            this.props.alpnPolicy(alpnPolicy);
            return this;
        }
        /**
         * Property alpnPolicy: Proxy of alpn.
         * <p>
         * @return {@code this}
         * @param alpnPolicy Property alpnPolicy: Proxy of alpn. This parameter is required.
         */
        public Builder alpnPolicy(final com.aliyun.ros.cdk.core.IResolvable alpnPolicy) {
            this.props.alpnPolicy(alpnPolicy);
            return this;
        }

        /**
         * Property caCertificateIds: List of the ca certificate ids.
         * <p>
         * @return {@code this}
         * @param caCertificateIds Property caCertificateIds: List of the ca certificate ids. This parameter is required.
         */
        public Builder caCertificateIds(final com.aliyun.ros.cdk.core.IResolvable caCertificateIds) {
            this.props.caCertificateIds(caCertificateIds);
            return this;
        }
        /**
         * Property caCertificateIds: List of the ca certificate ids.
         * <p>
         * @return {@code this}
         * @param caCertificateIds Property caCertificateIds: List of the ca certificate ids. This parameter is required.
         */
        public Builder caCertificateIds(final java.util.List<? extends java.lang.Object> caCertificateIds) {
            this.props.caCertificateIds(caCertificateIds);
            return this;
        }

        /**
         * Property caEnabled: Whether to open CA.
         * <p>
         * @return {@code this}
         * @param caEnabled Property caEnabled: Whether to open CA. This parameter is required.
         */
        public Builder caEnabled(final java.lang.Boolean caEnabled) {
            this.props.caEnabled(caEnabled);
            return this;
        }
        /**
         * Property caEnabled: Whether to open CA.
         * <p>
         * @return {@code this}
         * @param caEnabled Property caEnabled: Whether to open CA. This parameter is required.
         */
        public Builder caEnabled(final com.aliyun.ros.cdk.core.IResolvable caEnabled) {
            this.props.caEnabled(caEnabled);
            return this;
        }

        /**
         * Property certificateIds: List of the certificate ids.
         * <p>
         * @return {@code this}
         * @param certificateIds Property certificateIds: List of the certificate ids. This parameter is required.
         */
        public Builder certificateIds(final com.aliyun.ros.cdk.core.IResolvable certificateIds) {
            this.props.certificateIds(certificateIds);
            return this;
        }
        /**
         * Property certificateIds: List of the certificate ids.
         * <p>
         * @return {@code this}
         * @param certificateIds Property certificateIds: List of the certificate ids. This parameter is required.
         */
        public Builder certificateIds(final java.util.List<? extends java.lang.Object> certificateIds) {
            this.props.certificateIds(certificateIds);
            return this;
        }

        /**
         * Property cps: New connection rate limit of Instance.
         * <p>
         * @return {@code this}
         * @param cps Property cps: New connection rate limit of Instance. This parameter is required.
         */
        public Builder cps(final java.lang.Number cps) {
            this.props.cps(cps);
            return this;
        }
        /**
         * Property cps: New connection rate limit of Instance.
         * <p>
         * @return {@code this}
         * @param cps Property cps: New connection rate limit of Instance. This parameter is required.
         */
        public Builder cps(final com.aliyun.ros.cdk.core.IResolvable cps) {
            this.props.cps(cps);
            return this;
        }

        /**
         * Property enable: Whether to start listener or not.
         * <p>
         * Default True.
         * <p>
         * @return {@code this}
         * @param enable Property enable: Whether to start listener or not. This parameter is required.
         */
        public Builder enable(final java.lang.Boolean enable) {
            this.props.enable(enable);
            return this;
        }
        /**
         * Property enable: Whether to start listener or not.
         * <p>
         * Default True.
         * <p>
         * @return {@code this}
         * @param enable Property enable: Whether to start listener or not. This parameter is required.
         */
        public Builder enable(final com.aliyun.ros.cdk.core.IResolvable enable) {
            this.props.enable(enable);
            return this;
        }

        /**
         * Property endPort: EndPort of the portRange.
         * <p>
         * @return {@code this}
         * @param endPort Property endPort: EndPort of the portRange. This parameter is required.
         */
        public Builder endPort(final java.lang.Number endPort) {
            this.props.endPort(endPort);
            return this;
        }
        /**
         * Property endPort: EndPort of the portRange.
         * <p>
         * @return {@code this}
         * @param endPort Property endPort: EndPort of the portRange. This parameter is required.
         */
        public Builder endPort(final com.aliyun.ros.cdk.core.IResolvable endPort) {
            this.props.endPort(endPort);
            return this;
        }

        /**
         * Property idleTimeout: Specifies the connection idle timeout.
         * <p>
         * @return {@code this}
         * @param idleTimeout Property idleTimeout: Specifies the connection idle timeout. This parameter is required.
         */
        public Builder idleTimeout(final java.lang.Number idleTimeout) {
            this.props.idleTimeout(idleTimeout);
            return this;
        }
        /**
         * Property idleTimeout: Specifies the connection idle timeout.
         * <p>
         * @return {@code this}
         * @param idleTimeout Property idleTimeout: Specifies the connection idle timeout. This parameter is required.
         */
        public Builder idleTimeout(final com.aliyun.ros.cdk.core.IResolvable idleTimeout) {
            this.props.idleTimeout(idleTimeout);
            return this;
        }

        /**
         * Property listenerDescription: Description of the listener, [2, 256] characters.
         * <p>
         * @return {@code this}
         * @param listenerDescription Property listenerDescription: Description of the listener, [2, 256] characters. This parameter is required.
         */
        public Builder listenerDescription(final java.lang.String listenerDescription) {
            this.props.listenerDescription(listenerDescription);
            return this;
        }
        /**
         * Property listenerDescription: Description of the listener, [2, 256] characters.
         * <p>
         * @return {@code this}
         * @param listenerDescription Property listenerDescription: Description of the listener, [2, 256] characters. This parameter is required.
         */
        public Builder listenerDescription(final com.aliyun.ros.cdk.core.IResolvable listenerDescription) {
            this.props.listenerDescription(listenerDescription);
            return this;
        }

        /**
         * Property listenerPort: Port of the listener,[0, 65535] the portRange setting need 0.
         * <p>
         * @return {@code this}
         * @param listenerPort Property listenerPort: Port of the listener,[0, 65535] the portRange setting need 0. This parameter is required.
         */
        public Builder listenerPort(final java.lang.Number listenerPort) {
            this.props.listenerPort(listenerPort);
            return this;
        }
        /**
         * Property listenerPort: Port of the listener,[0, 65535] the portRange setting need 0.
         * <p>
         * @return {@code this}
         * @param listenerPort Property listenerPort: Port of the listener,[0, 65535] the portRange setting need 0. This parameter is required.
         */
        public Builder listenerPort(final com.aliyun.ros.cdk.core.IResolvable listenerPort) {
            this.props.listenerPort(listenerPort);
            return this;
        }

        /**
         * Property mss: Max length of the TCP packet.
         * <p>
         * @return {@code this}
         * @param mss Property mss: Max length of the TCP packet. This parameter is required.
         */
        public Builder mss(final java.lang.Number mss) {
            this.props.mss(mss);
            return this;
        }
        /**
         * Property mss: Max length of the TCP packet.
         * <p>
         * @return {@code this}
         * @param mss Property mss: Max length of the TCP packet. This parameter is required.
         */
        public Builder mss(final com.aliyun.ros.cdk.core.IResolvable mss) {
            this.props.mss(mss);
            return this;
        }

        /**
         * Property proxyProtocolEnabled: Whether to enable ppv2 function.
         * <p>
         * @return {@code this}
         * @param proxyProtocolEnabled Property proxyProtocolEnabled: Whether to enable ppv2 function. This parameter is required.
         */
        public Builder proxyProtocolEnabled(final java.lang.Boolean proxyProtocolEnabled) {
            this.props.proxyProtocolEnabled(proxyProtocolEnabled);
            return this;
        }
        /**
         * Property proxyProtocolEnabled: Whether to enable ppv2 function.
         * <p>
         * @return {@code this}
         * @param proxyProtocolEnabled Property proxyProtocolEnabled: Whether to enable ppv2 function. This parameter is required.
         */
        public Builder proxyProtocolEnabled(final com.aliyun.ros.cdk.core.IResolvable proxyProtocolEnabled) {
            this.props.proxyProtocolEnabled(proxyProtocolEnabled);
            return this;
        }

        /**
         * Property secSensorEnabled: Whether to enable the second-level monitoring function.
         * <p>
         * @return {@code this}
         * @param secSensorEnabled Property secSensorEnabled: Whether to enable the second-level monitoring function. This parameter is required.
         */
        public Builder secSensorEnabled(final java.lang.Boolean secSensorEnabled) {
            this.props.secSensorEnabled(secSensorEnabled);
            return this;
        }
        /**
         * Property secSensorEnabled: Whether to enable the second-level monitoring function.
         * <p>
         * @return {@code this}
         * @param secSensorEnabled Property secSensorEnabled: Whether to enable the second-level monitoring function. This parameter is required.
         */
        public Builder secSensorEnabled(final com.aliyun.ros.cdk.core.IResolvable secSensorEnabled) {
            this.props.secSensorEnabled(secSensorEnabled);
            return this;
        }

        /**
         * Property securityPolicyId: Only valid for TcpSSL protocol monitoring.
         * <p>
         * @return {@code this}
         * @param securityPolicyId Property securityPolicyId: Only valid for TcpSSL protocol monitoring. This parameter is required.
         */
        public Builder securityPolicyId(final java.lang.String securityPolicyId) {
            this.props.securityPolicyId(securityPolicyId);
            return this;
        }
        /**
         * Property securityPolicyId: Only valid for TcpSSL protocol monitoring.
         * <p>
         * @return {@code this}
         * @param securityPolicyId Property securityPolicyId: Only valid for TcpSSL protocol monitoring. This parameter is required.
         */
        public Builder securityPolicyId(final com.aliyun.ros.cdk.core.IResolvable securityPolicyId) {
            this.props.securityPolicyId(securityPolicyId);
            return this;
        }

        /**
         * Property startPort: StartPort of the portRange.
         * <p>
         * @return {@code this}
         * @param startPort Property startPort: StartPort of the portRange. This parameter is required.
         */
        public Builder startPort(final java.lang.Number startPort) {
            this.props.startPort(startPort);
            return this;
        }
        /**
         * Property startPort: StartPort of the portRange.
         * <p>
         * @return {@code this}
         * @param startPort Property startPort: StartPort of the portRange. This parameter is required.
         */
        public Builder startPort(final com.aliyun.ros.cdk.core.IResolvable startPort) {
            this.props.startPort(startPort);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.nlb.Listener}.
         */
        @Override
        public com.aliyun.ros.cdk.nlb.Listener build() {
            return new com.aliyun.ros.cdk.nlb.Listener(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
