package com.aliyun.ros.cdk.ga;

/**
 * A ROS resource type:  `ALIYUN::GA::Listener`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.62.0 (build 293ac17)", date = "2022-07-21T02:24:25.541Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ga.$Module.class, fqn = "@alicloud/ros-cdk-ga.Listener")
public class Listener extends com.aliyun.ros.cdk.core.Resource {

    protected Listener(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Listener(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::GA::Listener`.
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
    public Listener(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ga.ListenerProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::GA::Listener`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Listener(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ga.ListenerProps props) {
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
     * A fluent builder for {@link com.aliyun.ros.cdk.ga.Listener}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ga.Listener> {
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
        private final com.aliyun.ros.cdk.ga.ListenerProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ga.ListenerProps.Builder();
        }

        /**
         * Property acceleratorId: The ID of the Global Accelerator instance to which the listener will be added.
         * <p>
         * @return {@code this}
         * @param acceleratorId Property acceleratorId: The ID of the Global Accelerator instance to which the listener will be added. This parameter is required.
         */
        public Builder acceleratorId(final java.lang.String acceleratorId) {
            this.props.acceleratorId(acceleratorId);
            return this;
        }
        /**
         * Property acceleratorId: The ID of the Global Accelerator instance to which the listener will be added.
         * <p>
         * @return {@code this}
         * @param acceleratorId Property acceleratorId: The ID of the Global Accelerator instance to which the listener will be added. This parameter is required.
         */
        public Builder acceleratorId(final com.aliyun.ros.cdk.core.IResolvable acceleratorId) {
            this.props.acceleratorId(acceleratorId);
            return this;
        }

        /**
         * Property portRanges:.
         * <p>
         * @return {@code this}
         * @param portRanges Property portRanges:. This parameter is required.
         */
        public Builder portRanges(final com.aliyun.ros.cdk.core.IResolvable portRanges) {
            this.props.portRanges(portRanges);
            return this;
        }
        /**
         * Property portRanges:.
         * <p>
         * @return {@code this}
         * @param portRanges Property portRanges:. This parameter is required.
         */
        public Builder portRanges(final java.util.List<? extends java.lang.Object> portRanges) {
            this.props.portRanges(portRanges);
            return this;
        }

        /**
         * Property protocol: The network transmission protocol of the listener.
         * <p>
         * Valid values:
         * tcp: TCP protocol
         * udp: UDP protocol
         * http: HTTP protocolhttps: HTTPS protocol.
         * <p>
         * @return {@code this}
         * @param protocol Property protocol: The network transmission protocol of the listener. This parameter is required.
         */
        public Builder protocol(final java.lang.String protocol) {
            this.props.protocol(protocol);
            return this;
        }
        /**
         * Property protocol: The network transmission protocol of the listener.
         * <p>
         * Valid values:
         * tcp: TCP protocol
         * udp: UDP protocol
         * http: HTTP protocolhttps: HTTPS protocol.
         * <p>
         * @return {@code this}
         * @param protocol Property protocol: The network transmission protocol of the listener. This parameter is required.
         */
        public Builder protocol(final com.aliyun.ros.cdk.core.IResolvable protocol) {
            this.props.protocol(protocol);
            return this;
        }

        /**
         * Property certificates:.
         * <p>
         * @return {@code this}
         * @param certificates Property certificates:. This parameter is required.
         */
        public Builder certificates(final com.aliyun.ros.cdk.core.IResolvable certificates) {
            this.props.certificates(certificates);
            return this;
        }
        /**
         * Property certificates:.
         * <p>
         * @return {@code this}
         * @param certificates Property certificates:. This parameter is required.
         */
        public Builder certificates(final java.util.List<? extends java.lang.Object> certificates) {
            this.props.certificates(certificates);
            return this;
        }

        /**
         * Property clientAffinity: Specifies whether to enable client affinity for the listener.
         * <p>
         * If you do not specify the default value in the parameter, client affinity is disabled.
         * When client affinity is disabled, the connections from a specific source (client)
         * IP address are not always routed to the same endpoint.
         * If you set the value to SOURCE_IP, client affinity is enabled. When client affinity is enabled, the connections from
         * a specific source (client) IP address are always routed to the same endpoint.
         * <p>
         * @return {@code this}
         * @param clientAffinity Property clientAffinity: Specifies whether to enable client affinity for the listener. This parameter is required.
         */
        public Builder clientAffinity(final java.lang.String clientAffinity) {
            this.props.clientAffinity(clientAffinity);
            return this;
        }
        /**
         * Property clientAffinity: Specifies whether to enable client affinity for the listener.
         * <p>
         * If you do not specify the default value in the parameter, client affinity is disabled.
         * When client affinity is disabled, the connections from a specific source (client)
         * IP address are not always routed to the same endpoint.
         * If you set the value to SOURCE_IP, client affinity is enabled. When client affinity is enabled, the connections from
         * a specific source (client) IP address are always routed to the same endpoint.
         * <p>
         * @return {@code this}
         * @param clientAffinity Property clientAffinity: Specifies whether to enable client affinity for the listener. This parameter is required.
         */
        public Builder clientAffinity(final com.aliyun.ros.cdk.core.IResolvable clientAffinity) {
            this.props.clientAffinity(clientAffinity);
            return this;
        }

        /**
         * Property description: The description of the listener.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the listener. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: The description of the listener.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the listener. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property name: The name of the listener.
         * <p>
         * The name must be 2 to 128 characters in length and can contain letters, digits, underscores
         * (_), and hyphens (-). It must start with a letter or Chinese character.
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the listener. This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }
        /**
         * Property name: The name of the listener.
         * <p>
         * The name must be 2 to 128 characters in length and can contain letters, digits, underscores
         * (_), and hyphens (-). It must start with a letter or Chinese character.
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the listener. This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props.name(name);
            return this;
        }

        /**
         * Property proxyProtocol: Specifies whether to preserve client IP addresses.
         * <p>
         * Valid values:
         * true: preserves client IP addresses. After this feature is enabled, backend servers can retrieve client IP addresses.
         * false (default): does not preserve client IP addresses.
         * <p>
         * @return {@code this}
         * @param proxyProtocol Property proxyProtocol: Specifies whether to preserve client IP addresses. This parameter is required.
         */
        public Builder proxyProtocol(final java.lang.Boolean proxyProtocol) {
            this.props.proxyProtocol(proxyProtocol);
            return this;
        }
        /**
         * Property proxyProtocol: Specifies whether to preserve client IP addresses.
         * <p>
         * Valid values:
         * true: preserves client IP addresses. After this feature is enabled, backend servers can retrieve client IP addresses.
         * false (default): does not preserve client IP addresses.
         * <p>
         * @return {@code this}
         * @param proxyProtocol Property proxyProtocol: Specifies whether to preserve client IP addresses. This parameter is required.
         */
        public Builder proxyProtocol(final com.aliyun.ros.cdk.core.IResolvable proxyProtocol) {
            this.props.proxyProtocol(proxyProtocol);
            return this;
        }

        /**
         * Property securityPolicyId: The ID of the security policy.
         * <p>
         * Valid values:
         * tls_cipher_policy_1_0
         * tls_cipher_policy_1_1
         * tls_cipher_policy_1_2
         * tls_cipher_policy_1_2_strict
         * tls_cipher_policy_1_2_strict_with_1_3
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
         * Valid values:
         * tls_cipher_policy_1_0
         * tls_cipher_policy_1_1
         * tls_cipher_policy_1_2
         * tls_cipher_policy_1_2_strict
         * tls_cipher_policy_1_2_strict_with_1_3
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
        public Builder xForwardedForConfig(final com.aliyun.ros.cdk.ga.RosListener.XForwardedForConfigProperty xForwardedForConfig) {
            this.props.xForwardedForConfig(xForwardedForConfig);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.ga.Listener}.
         */
        @Override
        public com.aliyun.ros.cdk.ga.Listener build() {
            return new com.aliyun.ros.cdk.ga.Listener(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
