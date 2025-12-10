package com.aliyun.ros.cdk.alb;

/**
 * Properties for defining a <code>RosListener</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-listener
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:52.063Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.alb.$Module.class, fqn = "@alicloud/ros-cdk-alb.RosListenerProps")
@software.amazon.jsii.Jsii.Proxy(RosListenerProps.Jsii$Proxy.class)
public interface RosListenerProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDefaultActions();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getListenerPort();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getListenerProtocol();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getLoadBalancerId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCaCertificates() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCaEnabled() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCertificates() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getGzipEnabled() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHttp2Enabled() {
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
    default @org.jetbrains.annotations.Nullable java.lang.Object getListenerStatus() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLogConfig() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getQuicConfig() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRequestTimeout() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityPolicyId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getXForwardedForConfig() {
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
        java.lang.Object defaultActions;
        java.lang.Object listenerPort;
        java.lang.Object listenerProtocol;
        java.lang.Object loadBalancerId;
        java.lang.Object caCertificates;
        java.lang.Object caEnabled;
        java.lang.Object certificates;
        java.lang.Object gzipEnabled;
        java.lang.Object http2Enabled;
        java.lang.Object idleTimeout;
        java.lang.Object listenerDescription;
        java.lang.Object listenerStatus;
        java.lang.Object logConfig;
        java.lang.Object quicConfig;
        java.lang.Object requestTimeout;
        java.lang.Object securityPolicyId;
        java.lang.Object xForwardedForConfig;

        /**
         * Sets the value of {@link RosListenerProps#getDefaultActions}
         * @param defaultActions the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder defaultActions(com.aliyun.ros.cdk.core.IResolvable defaultActions) {
            this.defaultActions = defaultActions;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getDefaultActions}
         * @param defaultActions the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder defaultActions(java.util.List<? extends java.lang.Object> defaultActions) {
            this.defaultActions = defaultActions;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getListenerPort}
         * @param listenerPort the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder listenerPort(java.lang.Number listenerPort) {
            this.listenerPort = listenerPort;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getListenerPort}
         * @param listenerPort the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder listenerPort(com.aliyun.ros.cdk.core.IResolvable listenerPort) {
            this.listenerPort = listenerPort;
            return this;
        }

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
         * Sets the value of {@link RosListenerProps#getCaCertificates}
         * @param caCertificates the value to be set.
         * @return {@code this}
         */
        public Builder caCertificates(com.aliyun.ros.cdk.core.IResolvable caCertificates) {
            this.caCertificates = caCertificates;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getCaCertificates}
         * @param caCertificates the value to be set.
         * @return {@code this}
         */
        public Builder caCertificates(java.util.List<? extends java.lang.Object> caCertificates) {
            this.caCertificates = caCertificates;
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
         * Sets the value of {@link RosListenerProps#getCertificates}
         * @param certificates the value to be set.
         * @return {@code this}
         */
        public Builder certificates(com.aliyun.ros.cdk.core.IResolvable certificates) {
            this.certificates = certificates;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getCertificates}
         * @param certificates the value to be set.
         * @return {@code this}
         */
        public Builder certificates(java.util.List<? extends java.lang.Object> certificates) {
            this.certificates = certificates;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getGzipEnabled}
         * @param gzipEnabled the value to be set.
         * @return {@code this}
         */
        public Builder gzipEnabled(java.lang.Boolean gzipEnabled) {
            this.gzipEnabled = gzipEnabled;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getGzipEnabled}
         * @param gzipEnabled the value to be set.
         * @return {@code this}
         */
        public Builder gzipEnabled(com.aliyun.ros.cdk.core.IResolvable gzipEnabled) {
            this.gzipEnabled = gzipEnabled;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getHttp2Enabled}
         * @param http2Enabled the value to be set.
         * @return {@code this}
         */
        public Builder http2Enabled(java.lang.Boolean http2Enabled) {
            this.http2Enabled = http2Enabled;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getHttp2Enabled}
         * @param http2Enabled the value to be set.
         * @return {@code this}
         */
        public Builder http2Enabled(com.aliyun.ros.cdk.core.IResolvable http2Enabled) {
            this.http2Enabled = http2Enabled;
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
         * Sets the value of {@link RosListenerProps#getListenerStatus}
         * @param listenerStatus the value to be set.
         * @return {@code this}
         */
        public Builder listenerStatus(java.lang.String listenerStatus) {
            this.listenerStatus = listenerStatus;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getListenerStatus}
         * @param listenerStatus the value to be set.
         * @return {@code this}
         */
        public Builder listenerStatus(com.aliyun.ros.cdk.core.IResolvable listenerStatus) {
            this.listenerStatus = listenerStatus;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getLogConfig}
         * @param logConfig the value to be set.
         * @return {@code this}
         */
        public Builder logConfig(com.aliyun.ros.cdk.core.IResolvable logConfig) {
            this.logConfig = logConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getLogConfig}
         * @param logConfig the value to be set.
         * @return {@code this}
         */
        public Builder logConfig(com.aliyun.ros.cdk.alb.RosListener.LogConfigProperty logConfig) {
            this.logConfig = logConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getQuicConfig}
         * @param quicConfig the value to be set.
         * @return {@code this}
         */
        public Builder quicConfig(com.aliyun.ros.cdk.core.IResolvable quicConfig) {
            this.quicConfig = quicConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getQuicConfig}
         * @param quicConfig the value to be set.
         * @return {@code this}
         */
        public Builder quicConfig(com.aliyun.ros.cdk.alb.RosListener.QuicConfigProperty quicConfig) {
            this.quicConfig = quicConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getRequestTimeout}
         * @param requestTimeout the value to be set.
         * @return {@code this}
         */
        public Builder requestTimeout(java.lang.Number requestTimeout) {
            this.requestTimeout = requestTimeout;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getRequestTimeout}
         * @param requestTimeout the value to be set.
         * @return {@code this}
         */
        public Builder requestTimeout(com.aliyun.ros.cdk.core.IResolvable requestTimeout) {
            this.requestTimeout = requestTimeout;
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
         * Sets the value of {@link RosListenerProps#getXForwardedForConfig}
         * @param xForwardedForConfig the value to be set.
         * @return {@code this}
         */
        public Builder xForwardedForConfig(com.aliyun.ros.cdk.core.IResolvable xForwardedForConfig) {
            this.xForwardedForConfig = xForwardedForConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getXForwardedForConfig}
         * @param xForwardedForConfig the value to be set.
         * @return {@code this}
         */
        public Builder xForwardedForConfig(com.aliyun.ros.cdk.alb.RosListener.XForwardedForConfigProperty xForwardedForConfig) {
            this.xForwardedForConfig = xForwardedForConfig;
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
        private final java.lang.Object defaultActions;
        private final java.lang.Object listenerPort;
        private final java.lang.Object listenerProtocol;
        private final java.lang.Object loadBalancerId;
        private final java.lang.Object caCertificates;
        private final java.lang.Object caEnabled;
        private final java.lang.Object certificates;
        private final java.lang.Object gzipEnabled;
        private final java.lang.Object http2Enabled;
        private final java.lang.Object idleTimeout;
        private final java.lang.Object listenerDescription;
        private final java.lang.Object listenerStatus;
        private final java.lang.Object logConfig;
        private final java.lang.Object quicConfig;
        private final java.lang.Object requestTimeout;
        private final java.lang.Object securityPolicyId;
        private final java.lang.Object xForwardedForConfig;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.defaultActions = software.amazon.jsii.Kernel.get(this, "defaultActions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.listenerPort = software.amazon.jsii.Kernel.get(this, "listenerPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.listenerProtocol = software.amazon.jsii.Kernel.get(this, "listenerProtocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.loadBalancerId = software.amazon.jsii.Kernel.get(this, "loadBalancerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.caCertificates = software.amazon.jsii.Kernel.get(this, "caCertificates", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.caEnabled = software.amazon.jsii.Kernel.get(this, "caEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.certificates = software.amazon.jsii.Kernel.get(this, "certificates", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.gzipEnabled = software.amazon.jsii.Kernel.get(this, "gzipEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.http2Enabled = software.amazon.jsii.Kernel.get(this, "http2Enabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.idleTimeout = software.amazon.jsii.Kernel.get(this, "idleTimeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.listenerDescription = software.amazon.jsii.Kernel.get(this, "listenerDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.listenerStatus = software.amazon.jsii.Kernel.get(this, "listenerStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.logConfig = software.amazon.jsii.Kernel.get(this, "logConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.quicConfig = software.amazon.jsii.Kernel.get(this, "quicConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.requestTimeout = software.amazon.jsii.Kernel.get(this, "requestTimeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityPolicyId = software.amazon.jsii.Kernel.get(this, "securityPolicyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.xForwardedForConfig = software.amazon.jsii.Kernel.get(this, "xForwardedForConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.defaultActions = java.util.Objects.requireNonNull(builder.defaultActions, "defaultActions is required");
            this.listenerPort = java.util.Objects.requireNonNull(builder.listenerPort, "listenerPort is required");
            this.listenerProtocol = java.util.Objects.requireNonNull(builder.listenerProtocol, "listenerProtocol is required");
            this.loadBalancerId = java.util.Objects.requireNonNull(builder.loadBalancerId, "loadBalancerId is required");
            this.caCertificates = builder.caCertificates;
            this.caEnabled = builder.caEnabled;
            this.certificates = builder.certificates;
            this.gzipEnabled = builder.gzipEnabled;
            this.http2Enabled = builder.http2Enabled;
            this.idleTimeout = builder.idleTimeout;
            this.listenerDescription = builder.listenerDescription;
            this.listenerStatus = builder.listenerStatus;
            this.logConfig = builder.logConfig;
            this.quicConfig = builder.quicConfig;
            this.requestTimeout = builder.requestTimeout;
            this.securityPolicyId = builder.securityPolicyId;
            this.xForwardedForConfig = builder.xForwardedForConfig;
        }

        @Override
        public final java.lang.Object getDefaultActions() {
            return this.defaultActions;
        }

        @Override
        public final java.lang.Object getListenerPort() {
            return this.listenerPort;
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
        public final java.lang.Object getCaCertificates() {
            return this.caCertificates;
        }

        @Override
        public final java.lang.Object getCaEnabled() {
            return this.caEnabled;
        }

        @Override
        public final java.lang.Object getCertificates() {
            return this.certificates;
        }

        @Override
        public final java.lang.Object getGzipEnabled() {
            return this.gzipEnabled;
        }

        @Override
        public final java.lang.Object getHttp2Enabled() {
            return this.http2Enabled;
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
        public final java.lang.Object getListenerStatus() {
            return this.listenerStatus;
        }

        @Override
        public final java.lang.Object getLogConfig() {
            return this.logConfig;
        }

        @Override
        public final java.lang.Object getQuicConfig() {
            return this.quicConfig;
        }

        @Override
        public final java.lang.Object getRequestTimeout() {
            return this.requestTimeout;
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

            data.set("defaultActions", om.valueToTree(this.getDefaultActions()));
            data.set("listenerPort", om.valueToTree(this.getListenerPort()));
            data.set("listenerProtocol", om.valueToTree(this.getListenerProtocol()));
            data.set("loadBalancerId", om.valueToTree(this.getLoadBalancerId()));
            if (this.getCaCertificates() != null) {
                data.set("caCertificates", om.valueToTree(this.getCaCertificates()));
            }
            if (this.getCaEnabled() != null) {
                data.set("caEnabled", om.valueToTree(this.getCaEnabled()));
            }
            if (this.getCertificates() != null) {
                data.set("certificates", om.valueToTree(this.getCertificates()));
            }
            if (this.getGzipEnabled() != null) {
                data.set("gzipEnabled", om.valueToTree(this.getGzipEnabled()));
            }
            if (this.getHttp2Enabled() != null) {
                data.set("http2Enabled", om.valueToTree(this.getHttp2Enabled()));
            }
            if (this.getIdleTimeout() != null) {
                data.set("idleTimeout", om.valueToTree(this.getIdleTimeout()));
            }
            if (this.getListenerDescription() != null) {
                data.set("listenerDescription", om.valueToTree(this.getListenerDescription()));
            }
            if (this.getListenerStatus() != null) {
                data.set("listenerStatus", om.valueToTree(this.getListenerStatus()));
            }
            if (this.getLogConfig() != null) {
                data.set("logConfig", om.valueToTree(this.getLogConfig()));
            }
            if (this.getQuicConfig() != null) {
                data.set("quicConfig", om.valueToTree(this.getQuicConfig()));
            }
            if (this.getRequestTimeout() != null) {
                data.set("requestTimeout", om.valueToTree(this.getRequestTimeout()));
            }
            if (this.getSecurityPolicyId() != null) {
                data.set("securityPolicyId", om.valueToTree(this.getSecurityPolicyId()));
            }
            if (this.getXForwardedForConfig() != null) {
                data.set("xForwardedForConfig", om.valueToTree(this.getXForwardedForConfig()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-alb.RosListenerProps"));
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

            if (!defaultActions.equals(that.defaultActions)) return false;
            if (!listenerPort.equals(that.listenerPort)) return false;
            if (!listenerProtocol.equals(that.listenerProtocol)) return false;
            if (!loadBalancerId.equals(that.loadBalancerId)) return false;
            if (this.caCertificates != null ? !this.caCertificates.equals(that.caCertificates) : that.caCertificates != null) return false;
            if (this.caEnabled != null ? !this.caEnabled.equals(that.caEnabled) : that.caEnabled != null) return false;
            if (this.certificates != null ? !this.certificates.equals(that.certificates) : that.certificates != null) return false;
            if (this.gzipEnabled != null ? !this.gzipEnabled.equals(that.gzipEnabled) : that.gzipEnabled != null) return false;
            if (this.http2Enabled != null ? !this.http2Enabled.equals(that.http2Enabled) : that.http2Enabled != null) return false;
            if (this.idleTimeout != null ? !this.idleTimeout.equals(that.idleTimeout) : that.idleTimeout != null) return false;
            if (this.listenerDescription != null ? !this.listenerDescription.equals(that.listenerDescription) : that.listenerDescription != null) return false;
            if (this.listenerStatus != null ? !this.listenerStatus.equals(that.listenerStatus) : that.listenerStatus != null) return false;
            if (this.logConfig != null ? !this.logConfig.equals(that.logConfig) : that.logConfig != null) return false;
            if (this.quicConfig != null ? !this.quicConfig.equals(that.quicConfig) : that.quicConfig != null) return false;
            if (this.requestTimeout != null ? !this.requestTimeout.equals(that.requestTimeout) : that.requestTimeout != null) return false;
            if (this.securityPolicyId != null ? !this.securityPolicyId.equals(that.securityPolicyId) : that.securityPolicyId != null) return false;
            return this.xForwardedForConfig != null ? this.xForwardedForConfig.equals(that.xForwardedForConfig) : that.xForwardedForConfig == null;
        }

        @Override
        public final int hashCode() {
            int result = this.defaultActions.hashCode();
            result = 31 * result + (this.listenerPort.hashCode());
            result = 31 * result + (this.listenerProtocol.hashCode());
            result = 31 * result + (this.loadBalancerId.hashCode());
            result = 31 * result + (this.caCertificates != null ? this.caCertificates.hashCode() : 0);
            result = 31 * result + (this.caEnabled != null ? this.caEnabled.hashCode() : 0);
            result = 31 * result + (this.certificates != null ? this.certificates.hashCode() : 0);
            result = 31 * result + (this.gzipEnabled != null ? this.gzipEnabled.hashCode() : 0);
            result = 31 * result + (this.http2Enabled != null ? this.http2Enabled.hashCode() : 0);
            result = 31 * result + (this.idleTimeout != null ? this.idleTimeout.hashCode() : 0);
            result = 31 * result + (this.listenerDescription != null ? this.listenerDescription.hashCode() : 0);
            result = 31 * result + (this.listenerStatus != null ? this.listenerStatus.hashCode() : 0);
            result = 31 * result + (this.logConfig != null ? this.logConfig.hashCode() : 0);
            result = 31 * result + (this.quicConfig != null ? this.quicConfig.hashCode() : 0);
            result = 31 * result + (this.requestTimeout != null ? this.requestTimeout.hashCode() : 0);
            result = 31 * result + (this.securityPolicyId != null ? this.securityPolicyId.hashCode() : 0);
            result = 31 * result + (this.xForwardedForConfig != null ? this.xForwardedForConfig.hashCode() : 0);
            return result;
        }
    }
}
