package com.aliyun.ros.cdk.nlb;

/**
 * Properties for defining a <code>ALIYUN::NLB::Listener</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.84.0 (build 5404dcf)", date = "2023-06-28T08:22:29.501Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.nlb.$Module.class, fqn = "@alicloud/ros-cdk-nlb.RosListenerProps")
@software.amazon.jsii.Jsii.Proxy(RosListenerProps.Jsii$Proxy.class)
public interface RosListenerProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getListenerProtocol();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getLoadBalancerId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getServerGroupId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAlpnEnabled() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAlpnPolicy() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCaCertificateIds() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCaEnabled() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCertificateIds() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCps() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnable() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEndPort() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIdleTimeout() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getListenerDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getListenerPort() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMss() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getProxyProtocolEnabled() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecSensorEnabled() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityPolicyId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getStartPort() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosListenerProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosListenerProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosListenerProps> {
        java.lang.Object listenerProtocol;
        java.lang.Object loadBalancerId;
        java.lang.Object serverGroupId;
        java.lang.Object alpnEnabled;
        java.lang.Object alpnPolicy;
        java.lang.Object caCertificateIds;
        java.lang.Object caEnabled;
        java.lang.Object certificateIds;
        java.lang.Object cps;
        java.lang.Object enable;
        java.lang.Object endPort;
        java.lang.Object idleTimeout;
        java.lang.Object listenerDescription;
        java.lang.Object listenerPort;
        java.lang.Object mss;
        java.lang.Object proxyProtocolEnabled;
        java.lang.Object secSensorEnabled;
        java.lang.Object securityPolicyId;
        java.lang.Object startPort;

        /**
         * Sets the value of {@link RosListenerProps#getListenerProtocol}
         * @param listenerProtocol the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder listenerProtocol(java.lang.String listenerProtocol) {
            this.listenerProtocol = listenerProtocol;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getListenerProtocol}
         * @param listenerProtocol the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder listenerProtocol(com.aliyun.ros.cdk.core.IResolvable listenerProtocol) {
            this.listenerProtocol = listenerProtocol;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getLoadBalancerId}
         * @param loadBalancerId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder loadBalancerId(java.lang.String loadBalancerId) {
            this.loadBalancerId = loadBalancerId;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getLoadBalancerId}
         * @param loadBalancerId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder loadBalancerId(com.aliyun.ros.cdk.core.IResolvable loadBalancerId) {
            this.loadBalancerId = loadBalancerId;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getServerGroupId}
         * @param serverGroupId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder serverGroupId(java.lang.String serverGroupId) {
            this.serverGroupId = serverGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getServerGroupId}
         * @param serverGroupId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder serverGroupId(com.aliyun.ros.cdk.core.IResolvable serverGroupId) {
            this.serverGroupId = serverGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getAlpnEnabled}
         * @param alpnEnabled the value to be set.
         * @return {@code this}
         */
        public Builder alpnEnabled(java.lang.Boolean alpnEnabled) {
            this.alpnEnabled = alpnEnabled;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getAlpnEnabled}
         * @param alpnEnabled the value to be set.
         * @return {@code this}
         */
        public Builder alpnEnabled(com.aliyun.ros.cdk.core.IResolvable alpnEnabled) {
            this.alpnEnabled = alpnEnabled;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getAlpnPolicy}
         * @param alpnPolicy the value to be set.
         * @return {@code this}
         */
        public Builder alpnPolicy(java.lang.String alpnPolicy) {
            this.alpnPolicy = alpnPolicy;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getAlpnPolicy}
         * @param alpnPolicy the value to be set.
         * @return {@code this}
         */
        public Builder alpnPolicy(com.aliyun.ros.cdk.core.IResolvable alpnPolicy) {
            this.alpnPolicy = alpnPolicy;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getCaCertificateIds}
         * @param caCertificateIds the value to be set.
         * @return {@code this}
         */
        public Builder caCertificateIds(com.aliyun.ros.cdk.core.IResolvable caCertificateIds) {
            this.caCertificateIds = caCertificateIds;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getCaCertificateIds}
         * @param caCertificateIds the value to be set.
         * @return {@code this}
         */
        public Builder caCertificateIds(java.util.List<? extends java.lang.Object> caCertificateIds) {
            this.caCertificateIds = caCertificateIds;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getCaEnabled}
         * @param caEnabled the value to be set.
         * @return {@code this}
         */
        public Builder caEnabled(java.lang.Boolean caEnabled) {
            this.caEnabled = caEnabled;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getCaEnabled}
         * @param caEnabled the value to be set.
         * @return {@code this}
         */
        public Builder caEnabled(com.aliyun.ros.cdk.core.IResolvable caEnabled) {
            this.caEnabled = caEnabled;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getCertificateIds}
         * @param certificateIds the value to be set.
         * @return {@code this}
         */
        public Builder certificateIds(com.aliyun.ros.cdk.core.IResolvable certificateIds) {
            this.certificateIds = certificateIds;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getCertificateIds}
         * @param certificateIds the value to be set.
         * @return {@code this}
         */
        public Builder certificateIds(java.util.List<? extends java.lang.Object> certificateIds) {
            this.certificateIds = certificateIds;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getCps}
         * @param cps the value to be set.
         * @return {@code this}
         */
        public Builder cps(java.lang.Number cps) {
            this.cps = cps;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getCps}
         * @param cps the value to be set.
         * @return {@code this}
         */
        public Builder cps(com.aliyun.ros.cdk.core.IResolvable cps) {
            this.cps = cps;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getEnable}
         * @param enable the value to be set.
         * @return {@code this}
         */
        public Builder enable(java.lang.Boolean enable) {
            this.enable = enable;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getEnable}
         * @param enable the value to be set.
         * @return {@code this}
         */
        public Builder enable(com.aliyun.ros.cdk.core.IResolvable enable) {
            this.enable = enable;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getEndPort}
         * @param endPort the value to be set.
         * @return {@code this}
         */
        public Builder endPort(java.lang.Number endPort) {
            this.endPort = endPort;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getEndPort}
         * @param endPort the value to be set.
         * @return {@code this}
         */
        public Builder endPort(com.aliyun.ros.cdk.core.IResolvable endPort) {
            this.endPort = endPort;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getIdleTimeout}
         * @param idleTimeout the value to be set.
         * @return {@code this}
         */
        public Builder idleTimeout(java.lang.Number idleTimeout) {
            this.idleTimeout = idleTimeout;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getIdleTimeout}
         * @param idleTimeout the value to be set.
         * @return {@code this}
         */
        public Builder idleTimeout(com.aliyun.ros.cdk.core.IResolvable idleTimeout) {
            this.idleTimeout = idleTimeout;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getListenerDescription}
         * @param listenerDescription the value to be set.
         * @return {@code this}
         */
        public Builder listenerDescription(java.lang.String listenerDescription) {
            this.listenerDescription = listenerDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getListenerDescription}
         * @param listenerDescription the value to be set.
         * @return {@code this}
         */
        public Builder listenerDescription(com.aliyun.ros.cdk.core.IResolvable listenerDescription) {
            this.listenerDescription = listenerDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getListenerPort}
         * @param listenerPort the value to be set.
         * @return {@code this}
         */
        public Builder listenerPort(java.lang.Number listenerPort) {
            this.listenerPort = listenerPort;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getListenerPort}
         * @param listenerPort the value to be set.
         * @return {@code this}
         */
        public Builder listenerPort(com.aliyun.ros.cdk.core.IResolvable listenerPort) {
            this.listenerPort = listenerPort;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getMss}
         * @param mss the value to be set.
         * @return {@code this}
         */
        public Builder mss(java.lang.Number mss) {
            this.mss = mss;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getMss}
         * @param mss the value to be set.
         * @return {@code this}
         */
        public Builder mss(com.aliyun.ros.cdk.core.IResolvable mss) {
            this.mss = mss;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getProxyProtocolEnabled}
         * @param proxyProtocolEnabled the value to be set.
         * @return {@code this}
         */
        public Builder proxyProtocolEnabled(java.lang.Boolean proxyProtocolEnabled) {
            this.proxyProtocolEnabled = proxyProtocolEnabled;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getProxyProtocolEnabled}
         * @param proxyProtocolEnabled the value to be set.
         * @return {@code this}
         */
        public Builder proxyProtocolEnabled(com.aliyun.ros.cdk.core.IResolvable proxyProtocolEnabled) {
            this.proxyProtocolEnabled = proxyProtocolEnabled;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getSecSensorEnabled}
         * @param secSensorEnabled the value to be set.
         * @return {@code this}
         */
        public Builder secSensorEnabled(java.lang.Boolean secSensorEnabled) {
            this.secSensorEnabled = secSensorEnabled;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getSecSensorEnabled}
         * @param secSensorEnabled the value to be set.
         * @return {@code this}
         */
        public Builder secSensorEnabled(com.aliyun.ros.cdk.core.IResolvable secSensorEnabled) {
            this.secSensorEnabled = secSensorEnabled;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getSecurityPolicyId}
         * @param securityPolicyId the value to be set.
         * @return {@code this}
         */
        public Builder securityPolicyId(java.lang.String securityPolicyId) {
            this.securityPolicyId = securityPolicyId;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getSecurityPolicyId}
         * @param securityPolicyId the value to be set.
         * @return {@code this}
         */
        public Builder securityPolicyId(com.aliyun.ros.cdk.core.IResolvable securityPolicyId) {
            this.securityPolicyId = securityPolicyId;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getStartPort}
         * @param startPort the value to be set.
         * @return {@code this}
         */
        public Builder startPort(java.lang.Number startPort) {
            this.startPort = startPort;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getStartPort}
         * @param startPort the value to be set.
         * @return {@code this}
         */
        public Builder startPort(com.aliyun.ros.cdk.core.IResolvable startPort) {
            this.startPort = startPort;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosListenerProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosListenerProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosListenerProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosListenerProps {
        private final java.lang.Object listenerProtocol;
        private final java.lang.Object loadBalancerId;
        private final java.lang.Object serverGroupId;
        private final java.lang.Object alpnEnabled;
        private final java.lang.Object alpnPolicy;
        private final java.lang.Object caCertificateIds;
        private final java.lang.Object caEnabled;
        private final java.lang.Object certificateIds;
        private final java.lang.Object cps;
        private final java.lang.Object enable;
        private final java.lang.Object endPort;
        private final java.lang.Object idleTimeout;
        private final java.lang.Object listenerDescription;
        private final java.lang.Object listenerPort;
        private final java.lang.Object mss;
        private final java.lang.Object proxyProtocolEnabled;
        private final java.lang.Object secSensorEnabled;
        private final java.lang.Object securityPolicyId;
        private final java.lang.Object startPort;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.listenerProtocol = software.amazon.jsii.Kernel.get(this, "listenerProtocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.loadBalancerId = software.amazon.jsii.Kernel.get(this, "loadBalancerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.serverGroupId = software.amazon.jsii.Kernel.get(this, "serverGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.alpnEnabled = software.amazon.jsii.Kernel.get(this, "alpnEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.alpnPolicy = software.amazon.jsii.Kernel.get(this, "alpnPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.caCertificateIds = software.amazon.jsii.Kernel.get(this, "caCertificateIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.caEnabled = software.amazon.jsii.Kernel.get(this, "caEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.certificateIds = software.amazon.jsii.Kernel.get(this, "certificateIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.cps = software.amazon.jsii.Kernel.get(this, "cps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enable = software.amazon.jsii.Kernel.get(this, "enable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.endPort = software.amazon.jsii.Kernel.get(this, "endPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.idleTimeout = software.amazon.jsii.Kernel.get(this, "idleTimeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.listenerDescription = software.amazon.jsii.Kernel.get(this, "listenerDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.listenerPort = software.amazon.jsii.Kernel.get(this, "listenerPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.mss = software.amazon.jsii.Kernel.get(this, "mss", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.proxyProtocolEnabled = software.amazon.jsii.Kernel.get(this, "proxyProtocolEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.secSensorEnabled = software.amazon.jsii.Kernel.get(this, "secSensorEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityPolicyId = software.amazon.jsii.Kernel.get(this, "securityPolicyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.startPort = software.amazon.jsii.Kernel.get(this, "startPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.listenerProtocol = java.util.Objects.requireNonNull(builder.listenerProtocol, "listenerProtocol is required");
            this.loadBalancerId = java.util.Objects.requireNonNull(builder.loadBalancerId, "loadBalancerId is required");
            this.serverGroupId = java.util.Objects.requireNonNull(builder.serverGroupId, "serverGroupId is required");
            this.alpnEnabled = builder.alpnEnabled;
            this.alpnPolicy = builder.alpnPolicy;
            this.caCertificateIds = builder.caCertificateIds;
            this.caEnabled = builder.caEnabled;
            this.certificateIds = builder.certificateIds;
            this.cps = builder.cps;
            this.enable = builder.enable;
            this.endPort = builder.endPort;
            this.idleTimeout = builder.idleTimeout;
            this.listenerDescription = builder.listenerDescription;
            this.listenerPort = builder.listenerPort;
            this.mss = builder.mss;
            this.proxyProtocolEnabled = builder.proxyProtocolEnabled;
            this.secSensorEnabled = builder.secSensorEnabled;
            this.securityPolicyId = builder.securityPolicyId;
            this.startPort = builder.startPort;
        }

        @Override
        public final java.lang.Object getListenerProtocol() {
            return this.listenerProtocol;
        }

        @Override
        public final java.lang.Object getLoadBalancerId() {
            return this.loadBalancerId;
        }

        @Override
        public final java.lang.Object getServerGroupId() {
            return this.serverGroupId;
        }

        @Override
        public final java.lang.Object getAlpnEnabled() {
            return this.alpnEnabled;
        }

        @Override
        public final java.lang.Object getAlpnPolicy() {
            return this.alpnPolicy;
        }

        @Override
        public final java.lang.Object getCaCertificateIds() {
            return this.caCertificateIds;
        }

        @Override
        public final java.lang.Object getCaEnabled() {
            return this.caEnabled;
        }

        @Override
        public final java.lang.Object getCertificateIds() {
            return this.certificateIds;
        }

        @Override
        public final java.lang.Object getCps() {
            return this.cps;
        }

        @Override
        public final java.lang.Object getEnable() {
            return this.enable;
        }

        @Override
        public final java.lang.Object getEndPort() {
            return this.endPort;
        }

        @Override
        public final java.lang.Object getIdleTimeout() {
            return this.idleTimeout;
        }

        @Override
        public final java.lang.Object getListenerDescription() {
            return this.listenerDescription;
        }

        @Override
        public final java.lang.Object getListenerPort() {
            return this.listenerPort;
        }

        @Override
        public final java.lang.Object getMss() {
            return this.mss;
        }

        @Override
        public final java.lang.Object getProxyProtocolEnabled() {
            return this.proxyProtocolEnabled;
        }

        @Override
        public final java.lang.Object getSecSensorEnabled() {
            return this.secSensorEnabled;
        }

        @Override
        public final java.lang.Object getSecurityPolicyId() {
            return this.securityPolicyId;
        }

        @Override
        public final java.lang.Object getStartPort() {
            return this.startPort;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("listenerProtocol", om.valueToTree(this.getListenerProtocol()));
            data.set("loadBalancerId", om.valueToTree(this.getLoadBalancerId()));
            data.set("serverGroupId", om.valueToTree(this.getServerGroupId()));
            if (this.getAlpnEnabled() != null) {
                data.set("alpnEnabled", om.valueToTree(this.getAlpnEnabled()));
            }
            if (this.getAlpnPolicy() != null) {
                data.set("alpnPolicy", om.valueToTree(this.getAlpnPolicy()));
            }
            if (this.getCaCertificateIds() != null) {
                data.set("caCertificateIds", om.valueToTree(this.getCaCertificateIds()));
            }
            if (this.getCaEnabled() != null) {
                data.set("caEnabled", om.valueToTree(this.getCaEnabled()));
            }
            if (this.getCertificateIds() != null) {
                data.set("certificateIds", om.valueToTree(this.getCertificateIds()));
            }
            if (this.getCps() != null) {
                data.set("cps", om.valueToTree(this.getCps()));
            }
            if (this.getEnable() != null) {
                data.set("enable", om.valueToTree(this.getEnable()));
            }
            if (this.getEndPort() != null) {
                data.set("endPort", om.valueToTree(this.getEndPort()));
            }
            if (this.getIdleTimeout() != null) {
                data.set("idleTimeout", om.valueToTree(this.getIdleTimeout()));
            }
            if (this.getListenerDescription() != null) {
                data.set("listenerDescription", om.valueToTree(this.getListenerDescription()));
            }
            if (this.getListenerPort() != null) {
                data.set("listenerPort", om.valueToTree(this.getListenerPort()));
            }
            if (this.getMss() != null) {
                data.set("mss", om.valueToTree(this.getMss()));
            }
            if (this.getProxyProtocolEnabled() != null) {
                data.set("proxyProtocolEnabled", om.valueToTree(this.getProxyProtocolEnabled()));
            }
            if (this.getSecSensorEnabled() != null) {
                data.set("secSensorEnabled", om.valueToTree(this.getSecSensorEnabled()));
            }
            if (this.getSecurityPolicyId() != null) {
                data.set("securityPolicyId", om.valueToTree(this.getSecurityPolicyId()));
            }
            if (this.getStartPort() != null) {
                data.set("startPort", om.valueToTree(this.getStartPort()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-nlb.RosListenerProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosListenerProps.Jsii$Proxy that = (RosListenerProps.Jsii$Proxy) o;

            if (!listenerProtocol.equals(that.listenerProtocol)) return false;
            if (!loadBalancerId.equals(that.loadBalancerId)) return false;
            if (!serverGroupId.equals(that.serverGroupId)) return false;
            if (this.alpnEnabled != null ? !this.alpnEnabled.equals(that.alpnEnabled) : that.alpnEnabled != null) return false;
            if (this.alpnPolicy != null ? !this.alpnPolicy.equals(that.alpnPolicy) : that.alpnPolicy != null) return false;
            if (this.caCertificateIds != null ? !this.caCertificateIds.equals(that.caCertificateIds) : that.caCertificateIds != null) return false;
            if (this.caEnabled != null ? !this.caEnabled.equals(that.caEnabled) : that.caEnabled != null) return false;
            if (this.certificateIds != null ? !this.certificateIds.equals(that.certificateIds) : that.certificateIds != null) return false;
            if (this.cps != null ? !this.cps.equals(that.cps) : that.cps != null) return false;
            if (this.enable != null ? !this.enable.equals(that.enable) : that.enable != null) return false;
            if (this.endPort != null ? !this.endPort.equals(that.endPort) : that.endPort != null) return false;
            if (this.idleTimeout != null ? !this.idleTimeout.equals(that.idleTimeout) : that.idleTimeout != null) return false;
            if (this.listenerDescription != null ? !this.listenerDescription.equals(that.listenerDescription) : that.listenerDescription != null) return false;
            if (this.listenerPort != null ? !this.listenerPort.equals(that.listenerPort) : that.listenerPort != null) return false;
            if (this.mss != null ? !this.mss.equals(that.mss) : that.mss != null) return false;
            if (this.proxyProtocolEnabled != null ? !this.proxyProtocolEnabled.equals(that.proxyProtocolEnabled) : that.proxyProtocolEnabled != null) return false;
            if (this.secSensorEnabled != null ? !this.secSensorEnabled.equals(that.secSensorEnabled) : that.secSensorEnabled != null) return false;
            if (this.securityPolicyId != null ? !this.securityPolicyId.equals(that.securityPolicyId) : that.securityPolicyId != null) return false;
            return this.startPort != null ? this.startPort.equals(that.startPort) : that.startPort == null;
        }

        @Override
        public final int hashCode() {
            int result = this.listenerProtocol.hashCode();
            result = 31 * result + (this.loadBalancerId.hashCode());
            result = 31 * result + (this.serverGroupId.hashCode());
            result = 31 * result + (this.alpnEnabled != null ? this.alpnEnabled.hashCode() : 0);
            result = 31 * result + (this.alpnPolicy != null ? this.alpnPolicy.hashCode() : 0);
            result = 31 * result + (this.caCertificateIds != null ? this.caCertificateIds.hashCode() : 0);
            result = 31 * result + (this.caEnabled != null ? this.caEnabled.hashCode() : 0);
            result = 31 * result + (this.certificateIds != null ? this.certificateIds.hashCode() : 0);
            result = 31 * result + (this.cps != null ? this.cps.hashCode() : 0);
            result = 31 * result + (this.enable != null ? this.enable.hashCode() : 0);
            result = 31 * result + (this.endPort != null ? this.endPort.hashCode() : 0);
            result = 31 * result + (this.idleTimeout != null ? this.idleTimeout.hashCode() : 0);
            result = 31 * result + (this.listenerDescription != null ? this.listenerDescription.hashCode() : 0);
            result = 31 * result + (this.listenerPort != null ? this.listenerPort.hashCode() : 0);
            result = 31 * result + (this.mss != null ? this.mss.hashCode() : 0);
            result = 31 * result + (this.proxyProtocolEnabled != null ? this.proxyProtocolEnabled.hashCode() : 0);
            result = 31 * result + (this.secSensorEnabled != null ? this.secSensorEnabled.hashCode() : 0);
            result = 31 * result + (this.securityPolicyId != null ? this.securityPolicyId.hashCode() : 0);
            result = 31 * result + (this.startPort != null ? this.startPort.hashCode() : 0);
            return result;
        }
    }
}
