package com.aliyun.ros.cdk.ga;

/**
 * Properties for defining a <code>Listener</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-listener
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-21T05:59:10.195Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ga.$Module.class, fqn = "@alicloud/ros-cdk-ga.ListenerProps")
@software.amazon.jsii.Jsii.Proxy(ListenerProps.Jsii$Proxy.class)
public interface ListenerProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property acceleratorId: The ID of the Global Accelerator instance to which the listener will be added.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAcceleratorId();

    /**
     * Property portRanges:.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPortRanges();

    /**
     * Property protocol: The network transmission protocol of the listener.
     * <p>
     * Valid values:
     * tcp: TCP protocol
     * udp: UDP protocol
     * http: HTTP protocolhttps: HTTPS protocol.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getProtocol();

    /**
     * Property certificates:.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCertificates() {
        return null;
    }

    /**
     * Property clientAffinity: Specifies whether to enable client affinity for the listener.
     * <p>
     * If you do not specify the default value in the parameter, client affinity is disabled.
     * When client affinity is disabled, the connections from a specific source (client)
     * IP address are not always routed to the same endpoint.
     * If you set the value to SOURCE_IP, client affinity is enabled. When client affinity is enabled, the connections from
     * a specific source (client) IP address are always routed to the same endpoint.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getClientAffinity() {
        return null;
    }

    /**
     * Property description: The description of the listener.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property name: The name of the listener.
     * <p>
     * The name must be 2 to 128 characters in length and can contain letters, digits, underscores
     * (_), and hyphens (-). It must start with a letter or Chinese character.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getName() {
        return null;
    }

    /**
     * Property proxyProtocol: Specifies whether to preserve client IP addresses.
     * <p>
     * Valid values:
     * true: preserves client IP addresses. After this feature is enabled, backend servers can retrieve client IP addresses.
     * false (default): does not preserve client IP addresses.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getProxyProtocol() {
        return null;
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
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityPolicyId() {
        return null;
    }

    /**
     * Property xForwardedForConfig: The configuration of the XForward field.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getXForwardedForConfig() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ListenerProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ListenerProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ListenerProps> {
        java.lang.Object acceleratorId;
        java.lang.Object portRanges;
        java.lang.Object protocol;
        java.lang.Object certificates;
        java.lang.Object clientAffinity;
        java.lang.Object description;
        java.lang.Object name;
        java.lang.Object proxyProtocol;
        java.lang.Object securityPolicyId;
        java.lang.Object xForwardedForConfig;

        /**
         * Sets the value of {@link ListenerProps#getAcceleratorId}
         * @param acceleratorId Property acceleratorId: The ID of the Global Accelerator instance to which the listener will be added. This parameter is required.
         * @return {@code this}
         */
        public Builder acceleratorId(java.lang.String acceleratorId) {
            this.acceleratorId = acceleratorId;
            return this;
        }

        /**
         * Sets the value of {@link ListenerProps#getAcceleratorId}
         * @param acceleratorId Property acceleratorId: The ID of the Global Accelerator instance to which the listener will be added. This parameter is required.
         * @return {@code this}
         */
        public Builder acceleratorId(com.aliyun.ros.cdk.core.IResolvable acceleratorId) {
            this.acceleratorId = acceleratorId;
            return this;
        }

        /**
         * Sets the value of {@link ListenerProps#getPortRanges}
         * @param portRanges Property portRanges:. This parameter is required.
         * @return {@code this}
         */
        public Builder portRanges(com.aliyun.ros.cdk.core.IResolvable portRanges) {
            this.portRanges = portRanges;
            return this;
        }

        /**
         * Sets the value of {@link ListenerProps#getPortRanges}
         * @param portRanges Property portRanges:. This parameter is required.
         * @return {@code this}
         */
        public Builder portRanges(java.util.List<? extends java.lang.Object> portRanges) {
            this.portRanges = portRanges;
            return this;
        }

        /**
         * Sets the value of {@link ListenerProps#getProtocol}
         * @param protocol Property protocol: The network transmission protocol of the listener. This parameter is required.
         *                 Valid values:
         *                 tcp: TCP protocol
         *                 udp: UDP protocol
         *                 http: HTTP protocolhttps: HTTPS protocol.
         * @return {@code this}
         */
        public Builder protocol(java.lang.String protocol) {
            this.protocol = protocol;
            return this;
        }

        /**
         * Sets the value of {@link ListenerProps#getProtocol}
         * @param protocol Property protocol: The network transmission protocol of the listener. This parameter is required.
         *                 Valid values:
         *                 tcp: TCP protocol
         *                 udp: UDP protocol
         *                 http: HTTP protocolhttps: HTTPS protocol.
         * @return {@code this}
         */
        public Builder protocol(com.aliyun.ros.cdk.core.IResolvable protocol) {
            this.protocol = protocol;
            return this;
        }

        /**
         * Sets the value of {@link ListenerProps#getCertificates}
         * @param certificates Property certificates:.
         * @return {@code this}
         */
        public Builder certificates(com.aliyun.ros.cdk.core.IResolvable certificates) {
            this.certificates = certificates;
            return this;
        }

        /**
         * Sets the value of {@link ListenerProps#getCertificates}
         * @param certificates Property certificates:.
         * @return {@code this}
         */
        public Builder certificates(java.util.List<? extends java.lang.Object> certificates) {
            this.certificates = certificates;
            return this;
        }

        /**
         * Sets the value of {@link ListenerProps#getClientAffinity}
         * @param clientAffinity Property clientAffinity: Specifies whether to enable client affinity for the listener.
         *                       If you do not specify the default value in the parameter, client affinity is disabled.
         *                       When client affinity is disabled, the connections from a specific source (client)
         *                       IP address are not always routed to the same endpoint.
         *                       If you set the value to SOURCE_IP, client affinity is enabled. When client affinity is enabled, the connections from
         *                       a specific source (client) IP address are always routed to the same endpoint.
         * @return {@code this}
         */
        public Builder clientAffinity(java.lang.String clientAffinity) {
            this.clientAffinity = clientAffinity;
            return this;
        }

        /**
         * Sets the value of {@link ListenerProps#getClientAffinity}
         * @param clientAffinity Property clientAffinity: Specifies whether to enable client affinity for the listener.
         *                       If you do not specify the default value in the parameter, client affinity is disabled.
         *                       When client affinity is disabled, the connections from a specific source (client)
         *                       IP address are not always routed to the same endpoint.
         *                       If you set the value to SOURCE_IP, client affinity is enabled. When client affinity is enabled, the connections from
         *                       a specific source (client) IP address are always routed to the same endpoint.
         * @return {@code this}
         */
        public Builder clientAffinity(com.aliyun.ros.cdk.core.IResolvable clientAffinity) {
            this.clientAffinity = clientAffinity;
            return this;
        }

        /**
         * Sets the value of {@link ListenerProps#getDescription}
         * @param description Property description: The description of the listener.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link ListenerProps#getDescription}
         * @param description Property description: The description of the listener.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link ListenerProps#getName}
         * @param name Property name: The name of the listener.
         *             The name must be 2 to 128 characters in length and can contain letters, digits, underscores
         *             (_), and hyphens (-). It must start with a letter or Chinese character.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link ListenerProps#getName}
         * @param name Property name: The name of the listener.
         *             The name must be 2 to 128 characters in length and can contain letters, digits, underscores
         *             (_), and hyphens (-). It must start with a letter or Chinese character.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link ListenerProps#getProxyProtocol}
         * @param proxyProtocol Property proxyProtocol: Specifies whether to preserve client IP addresses.
         *                      Valid values:
         *                      true: preserves client IP addresses. After this feature is enabled, backend servers can retrieve client IP addresses.
         *                      false (default): does not preserve client IP addresses.
         * @return {@code this}
         */
        public Builder proxyProtocol(java.lang.Boolean proxyProtocol) {
            this.proxyProtocol = proxyProtocol;
            return this;
        }

        /**
         * Sets the value of {@link ListenerProps#getProxyProtocol}
         * @param proxyProtocol Property proxyProtocol: Specifies whether to preserve client IP addresses.
         *                      Valid values:
         *                      true: preserves client IP addresses. After this feature is enabled, backend servers can retrieve client IP addresses.
         *                      false (default): does not preserve client IP addresses.
         * @return {@code this}
         */
        public Builder proxyProtocol(com.aliyun.ros.cdk.core.IResolvable proxyProtocol) {
            this.proxyProtocol = proxyProtocol;
            return this;
        }

        /**
         * Sets the value of {@link ListenerProps#getSecurityPolicyId}
         * @param securityPolicyId Property securityPolicyId: The ID of the security policy.
         *                         Valid values:
         *                         tls_cipher_policy_1_0
         *                         tls_cipher_policy_1_1
         *                         tls_cipher_policy_1_2
         *                         tls_cipher_policy_1_2_strict
         *                         tls_cipher_policy_1_2_strict_with_1_3
         *                         Note Only HTTPS listeners support this parameter.
         * @return {@code this}
         */
        public Builder securityPolicyId(java.lang.String securityPolicyId) {
            this.securityPolicyId = securityPolicyId;
            return this;
        }

        /**
         * Sets the value of {@link ListenerProps#getSecurityPolicyId}
         * @param securityPolicyId Property securityPolicyId: The ID of the security policy.
         *                         Valid values:
         *                         tls_cipher_policy_1_0
         *                         tls_cipher_policy_1_1
         *                         tls_cipher_policy_1_2
         *                         tls_cipher_policy_1_2_strict
         *                         tls_cipher_policy_1_2_strict_with_1_3
         *                         Note Only HTTPS listeners support this parameter.
         * @return {@code this}
         */
        public Builder securityPolicyId(com.aliyun.ros.cdk.core.IResolvable securityPolicyId) {
            this.securityPolicyId = securityPolicyId;
            return this;
        }

        /**
         * Sets the value of {@link ListenerProps#getXForwardedForConfig}
         * @param xForwardedForConfig Property xForwardedForConfig: The configuration of the XForward field.
         * @return {@code this}
         */
        public Builder xForwardedForConfig(com.aliyun.ros.cdk.core.IResolvable xForwardedForConfig) {
            this.xForwardedForConfig = xForwardedForConfig;
            return this;
        }

        /**
         * Sets the value of {@link ListenerProps#getXForwardedForConfig}
         * @param xForwardedForConfig Property xForwardedForConfig: The configuration of the XForward field.
         * @return {@code this}
         */
        public Builder xForwardedForConfig(com.aliyun.ros.cdk.ga.RosListener.XForwardedForConfigProperty xForwardedForConfig) {
            this.xForwardedForConfig = xForwardedForConfig;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ListenerProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ListenerProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ListenerProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ListenerProps {
        private final java.lang.Object acceleratorId;
        private final java.lang.Object portRanges;
        private final java.lang.Object protocol;
        private final java.lang.Object certificates;
        private final java.lang.Object clientAffinity;
        private final java.lang.Object description;
        private final java.lang.Object name;
        private final java.lang.Object proxyProtocol;
        private final java.lang.Object securityPolicyId;
        private final java.lang.Object xForwardedForConfig;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.acceleratorId = software.amazon.jsii.Kernel.get(this, "acceleratorId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.portRanges = software.amazon.jsii.Kernel.get(this, "portRanges", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.protocol = software.amazon.jsii.Kernel.get(this, "protocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.certificates = software.amazon.jsii.Kernel.get(this, "certificates", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.clientAffinity = software.amazon.jsii.Kernel.get(this, "clientAffinity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.proxyProtocol = software.amazon.jsii.Kernel.get(this, "proxyProtocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityPolicyId = software.amazon.jsii.Kernel.get(this, "securityPolicyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.xForwardedForConfig = software.amazon.jsii.Kernel.get(this, "xForwardedForConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.acceleratorId = java.util.Objects.requireNonNull(builder.acceleratorId, "acceleratorId is required");
            this.portRanges = java.util.Objects.requireNonNull(builder.portRanges, "portRanges is required");
            this.protocol = java.util.Objects.requireNonNull(builder.protocol, "protocol is required");
            this.certificates = builder.certificates;
            this.clientAffinity = builder.clientAffinity;
            this.description = builder.description;
            this.name = builder.name;
            this.proxyProtocol = builder.proxyProtocol;
            this.securityPolicyId = builder.securityPolicyId;
            this.xForwardedForConfig = builder.xForwardedForConfig;
        }

        @Override
        public final java.lang.Object getAcceleratorId() {
            return this.acceleratorId;
        }

        @Override
        public final java.lang.Object getPortRanges() {
            return this.portRanges;
        }

        @Override
        public final java.lang.Object getProtocol() {
            return this.protocol;
        }

        @Override
        public final java.lang.Object getCertificates() {
            return this.certificates;
        }

        @Override
        public final java.lang.Object getClientAffinity() {
            return this.clientAffinity;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        public final java.lang.Object getProxyProtocol() {
            return this.proxyProtocol;
        }

        @Override
        public final java.lang.Object getSecurityPolicyId() {
            return this.securityPolicyId;
        }

        @Override
        public final java.lang.Object getXForwardedForConfig() {
            return this.xForwardedForConfig;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("acceleratorId", om.valueToTree(this.getAcceleratorId()));
            data.set("portRanges", om.valueToTree(this.getPortRanges()));
            data.set("protocol", om.valueToTree(this.getProtocol()));
            if (this.getCertificates() != null) {
                data.set("certificates", om.valueToTree(this.getCertificates()));
            }
            if (this.getClientAffinity() != null) {
                data.set("clientAffinity", om.valueToTree(this.getClientAffinity()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getName() != null) {
                data.set("name", om.valueToTree(this.getName()));
            }
            if (this.getProxyProtocol() != null) {
                data.set("proxyProtocol", om.valueToTree(this.getProxyProtocol()));
            }
            if (this.getSecurityPolicyId() != null) {
                data.set("securityPolicyId", om.valueToTree(this.getSecurityPolicyId()));
            }
            if (this.getXForwardedForConfig() != null) {
                data.set("xForwardedForConfig", om.valueToTree(this.getXForwardedForConfig()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ga.ListenerProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ListenerProps.Jsii$Proxy that = (ListenerProps.Jsii$Proxy) o;

            if (!acceleratorId.equals(that.acceleratorId)) return false;
            if (!portRanges.equals(that.portRanges)) return false;
            if (!protocol.equals(that.protocol)) return false;
            if (this.certificates != null ? !this.certificates.equals(that.certificates) : that.certificates != null) return false;
            if (this.clientAffinity != null ? !this.clientAffinity.equals(that.clientAffinity) : that.clientAffinity != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.name != null ? !this.name.equals(that.name) : that.name != null) return false;
            if (this.proxyProtocol != null ? !this.proxyProtocol.equals(that.proxyProtocol) : that.proxyProtocol != null) return false;
            if (this.securityPolicyId != null ? !this.securityPolicyId.equals(that.securityPolicyId) : that.securityPolicyId != null) return false;
            return this.xForwardedForConfig != null ? this.xForwardedForConfig.equals(that.xForwardedForConfig) : that.xForwardedForConfig == null;
        }

        @Override
        public final int hashCode() {
            int result = this.acceleratorId.hashCode();
            result = 31 * result + (this.portRanges.hashCode());
            result = 31 * result + (this.protocol.hashCode());
            result = 31 * result + (this.certificates != null ? this.certificates.hashCode() : 0);
            result = 31 * result + (this.clientAffinity != null ? this.clientAffinity.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.name != null ? this.name.hashCode() : 0);
            result = 31 * result + (this.proxyProtocol != null ? this.proxyProtocol.hashCode() : 0);
            result = 31 * result + (this.securityPolicyId != null ? this.securityPolicyId.hashCode() : 0);
            result = 31 * result + (this.xForwardedForConfig != null ? this.xForwardedForConfig.hashCode() : 0);
            return result;
        }
    }
}
