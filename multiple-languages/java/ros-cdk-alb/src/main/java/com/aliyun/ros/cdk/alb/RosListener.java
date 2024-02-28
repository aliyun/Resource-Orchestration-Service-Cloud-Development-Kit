package com.aliyun.ros.cdk.alb;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::ALB::Listener</code>, which is used to create an HTTP, HTTPS, or Quick UDP Internet Connections (QUIC) listener.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-02-28T02:53:26.583Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.alb.$Module.class, fqn = "@alicloud/ros-cdk-alb.RosListener")
public class RosListener extends com.aliyun.ros.cdk.core.RosResource {

    protected RosListener(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosListener(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.alb.RosListener.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosListener(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.alb.RosListenerProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), java.util.Objects.requireNonNull(enableResourcePropertyConstraint, "enableResourcePropertyConstraint is required") });
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> renderProperties(final @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> props) {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.call(this, "renderProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)), new Object[] { java.util.Objects.requireNonNull(props, "props is required") }));
    }

    /**
     * The resource type name for this resource class.
     */
    public final static java.lang.String ROS_RESOURCE_TYPE_NAME;

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrListenerId() {
        return software.amazon.jsii.Kernel.get(this, "attrListenerId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDefaultActions() {
        return software.amazon.jsii.Kernel.get(this, "defaultActions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDefaultActions(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "defaultActions", java.util.Objects.requireNonNull(value, "defaultActions is required"));
    }

    /**
     */
    public void setDefaultActions(final @org.jetbrains.annotations.NotNull java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.alb.RosListener.DefaultActionsProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.alb.RosListener.DefaultActionsProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "defaultActions", java.util.Objects.requireNonNull(value, "defaultActions is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getListenerPort() {
        return software.amazon.jsii.Kernel.get(this, "listenerPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setListenerPort(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "listenerPort", java.util.Objects.requireNonNull(value, "listenerPort is required"));
    }

    /**
     */
    public void setListenerPort(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "listenerPort", java.util.Objects.requireNonNull(value, "listenerPort is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getListenerProtocol() {
        return software.amazon.jsii.Kernel.get(this, "listenerProtocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setListenerProtocol(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "listenerProtocol", java.util.Objects.requireNonNull(value, "listenerProtocol is required"));
    }

    /**
     */
    public void setListenerProtocol(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "listenerProtocol", java.util.Objects.requireNonNull(value, "listenerProtocol is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getLoadBalancerId() {
        return software.amazon.jsii.Kernel.get(this, "loadBalancerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLoadBalancerId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "loadBalancerId", java.util.Objects.requireNonNull(value, "loadBalancerId is required"));
    }

    /**
     */
    public void setLoadBalancerId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "loadBalancerId", java.util.Objects.requireNonNull(value, "loadBalancerId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCaCertificates() {
        return software.amazon.jsii.Kernel.get(this, "caCertificates", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCaCertificates(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "caCertificates", value);
    }

    /**
     */
    public void setCaCertificates(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.alb.RosListener.CaCertificatesProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.alb.RosListener.CaCertificatesProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "caCertificates", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCaEnabled() {
        return software.amazon.jsii.Kernel.get(this, "caEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCaEnabled(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "caEnabled", value);
    }

    /**
     */
    public void setCaEnabled(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "caEnabled", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCertificates() {
        return software.amazon.jsii.Kernel.get(this, "certificates", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCertificates(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "certificates", value);
    }

    /**
     */
    public void setCertificates(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.alb.RosListener.CertificatesProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.alb.RosListener.CertificatesProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "certificates", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getGzipEnabled() {
        return software.amazon.jsii.Kernel.get(this, "gzipEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setGzipEnabled(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "gzipEnabled", value);
    }

    /**
     */
    public void setGzipEnabled(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "gzipEnabled", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getHttp2Enabled() {
        return software.amazon.jsii.Kernel.get(this, "http2Enabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setHttp2Enabled(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "http2Enabled", value);
    }

    /**
     */
    public void setHttp2Enabled(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "http2Enabled", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getIdleTimeout() {
        return software.amazon.jsii.Kernel.get(this, "idleTimeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setIdleTimeout(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "idleTimeout", value);
    }

    /**
     */
    public void setIdleTimeout(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "idleTimeout", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getListenerDescription() {
        return software.amazon.jsii.Kernel.get(this, "listenerDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setListenerDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "listenerDescription", value);
    }

    /**
     */
    public void setListenerDescription(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "listenerDescription", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getListenerStatus() {
        return software.amazon.jsii.Kernel.get(this, "listenerStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setListenerStatus(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "listenerStatus", value);
    }

    /**
     */
    public void setListenerStatus(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "listenerStatus", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getQuicConfig() {
        return software.amazon.jsii.Kernel.get(this, "quicConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setQuicConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "quicConfig", value);
    }

    /**
     */
    public void setQuicConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.alb.RosListener.QuicConfigProperty value) {
        software.amazon.jsii.Kernel.set(this, "quicConfig", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRequestTimeout() {
        return software.amazon.jsii.Kernel.get(this, "requestTimeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRequestTimeout(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "requestTimeout", value);
    }

    /**
     */
    public void setRequestTimeout(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "requestTimeout", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSecurityPolicyId() {
        return software.amazon.jsii.Kernel.get(this, "securityPolicyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSecurityPolicyId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "securityPolicyId", value);
    }

    /**
     */
    public void setSecurityPolicyId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "securityPolicyId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getXForwardedForConfig() {
        return software.amazon.jsii.Kernel.get(this, "xForwardedForConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setXForwardedForConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "xForwardedForConfig", value);
    }

    /**
     */
    public void setXForwardedForConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.alb.RosListener.XForwardedForConfigProperty value) {
        software.amazon.jsii.Kernel.set(this, "xForwardedForConfig", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.alb.$Module.class, fqn = "@alicloud/ros-cdk-alb.RosListener.CaCertificatesProperty")
    @software.amazon.jsii.Jsii.Proxy(CaCertificatesProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface CaCertificatesProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCertificateId() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link CaCertificatesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link CaCertificatesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<CaCertificatesProperty> {
            java.lang.Object certificateId;

            /**
             * Sets the value of {@link CaCertificatesProperty#getCertificateId}
             * @param certificateId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder certificateId(java.lang.String certificateId) {
                this.certificateId = certificateId;
                return this;
            }

            /**
             * Sets the value of {@link CaCertificatesProperty#getCertificateId}
             * @param certificateId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder certificateId(com.aliyun.ros.cdk.core.IResolvable certificateId) {
                this.certificateId = certificateId;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link CaCertificatesProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public CaCertificatesProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link CaCertificatesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements CaCertificatesProperty {
            private final java.lang.Object certificateId;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.certificateId = software.amazon.jsii.Kernel.get(this, "certificateId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.certificateId = builder.certificateId;
            }

            @Override
            public final java.lang.Object getCertificateId() {
                return this.certificateId;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getCertificateId() != null) {
                    data.set("certificateId", om.valueToTree(this.getCertificateId()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-alb.RosListener.CaCertificatesProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                CaCertificatesProperty.Jsii$Proxy that = (CaCertificatesProperty.Jsii$Proxy) o;

                return this.certificateId != null ? this.certificateId.equals(that.certificateId) : that.certificateId == null;
            }

            @Override
            public final int hashCode() {
                int result = this.certificateId != null ? this.certificateId.hashCode() : 0;
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.alb.$Module.class, fqn = "@alicloud/ros-cdk-alb.RosListener.CertificatesProperty")
    @software.amazon.jsii.Jsii.Proxy(CertificatesProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface CertificatesProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCertificateId() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link CertificatesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link CertificatesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<CertificatesProperty> {
            java.lang.Object certificateId;

            /**
             * Sets the value of {@link CertificatesProperty#getCertificateId}
             * @param certificateId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder certificateId(java.lang.String certificateId) {
                this.certificateId = certificateId;
                return this;
            }

            /**
             * Sets the value of {@link CertificatesProperty#getCertificateId}
             * @param certificateId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder certificateId(com.aliyun.ros.cdk.core.IResolvable certificateId) {
                this.certificateId = certificateId;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link CertificatesProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public CertificatesProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link CertificatesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements CertificatesProperty {
            private final java.lang.Object certificateId;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.certificateId = software.amazon.jsii.Kernel.get(this, "certificateId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.certificateId = builder.certificateId;
            }

            @Override
            public final java.lang.Object getCertificateId() {
                return this.certificateId;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getCertificateId() != null) {
                    data.set("certificateId", om.valueToTree(this.getCertificateId()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-alb.RosListener.CertificatesProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                CertificatesProperty.Jsii$Proxy that = (CertificatesProperty.Jsii$Proxy) o;

                return this.certificateId != null ? this.certificateId.equals(that.certificateId) : that.certificateId == null;
            }

            @Override
            public final int hashCode() {
                int result = this.certificateId != null ? this.certificateId.hashCode() : 0;
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.alb.$Module.class, fqn = "@alicloud/ros-cdk-alb.RosListener.DefaultActionsProperty")
    @software.amazon.jsii.Jsii.Proxy(DefaultActionsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface DefaultActionsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getForwardGroupConfig();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getType();

        /**
         * @return a {@link Builder} of {@link DefaultActionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link DefaultActionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<DefaultActionsProperty> {
            java.lang.Object forwardGroupConfig;
            java.lang.Object type;

            /**
             * Sets the value of {@link DefaultActionsProperty#getForwardGroupConfig}
             * @param forwardGroupConfig the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder forwardGroupConfig(com.aliyun.ros.cdk.core.IResolvable forwardGroupConfig) {
                this.forwardGroupConfig = forwardGroupConfig;
                return this;
            }

            /**
             * Sets the value of {@link DefaultActionsProperty#getForwardGroupConfig}
             * @param forwardGroupConfig the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder forwardGroupConfig(com.aliyun.ros.cdk.alb.RosListener.ForwardGroupConfigProperty forwardGroupConfig) {
                this.forwardGroupConfig = forwardGroupConfig;
                return this;
            }

            /**
             * Sets the value of {@link DefaultActionsProperty#getType}
             * @param type the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(java.lang.String type) {
                this.type = type;
                return this;
            }

            /**
             * Sets the value of {@link DefaultActionsProperty#getType}
             * @param type the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
                this.type = type;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link DefaultActionsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public DefaultActionsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link DefaultActionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DefaultActionsProperty {
            private final java.lang.Object forwardGroupConfig;
            private final java.lang.Object type;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.forwardGroupConfig = software.amazon.jsii.Kernel.get(this, "forwardGroupConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.forwardGroupConfig = java.util.Objects.requireNonNull(builder.forwardGroupConfig, "forwardGroupConfig is required");
                this.type = java.util.Objects.requireNonNull(builder.type, "type is required");
            }

            @Override
            public final java.lang.Object getForwardGroupConfig() {
                return this.forwardGroupConfig;
            }

            @Override
            public final java.lang.Object getType() {
                return this.type;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("forwardGroupConfig", om.valueToTree(this.getForwardGroupConfig()));
                data.set("type", om.valueToTree(this.getType()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-alb.RosListener.DefaultActionsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                DefaultActionsProperty.Jsii$Proxy that = (DefaultActionsProperty.Jsii$Proxy) o;

                if (!forwardGroupConfig.equals(that.forwardGroupConfig)) return false;
                return this.type.equals(that.type);
            }

            @Override
            public final int hashCode() {
                int result = this.forwardGroupConfig.hashCode();
                result = 31 * result + (this.type.hashCode());
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.alb.$Module.class, fqn = "@alicloud/ros-cdk-alb.RosListener.ForwardGroupConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(ForwardGroupConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ForwardGroupConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getServerGroupTuples();

        /**
         * @return a {@link Builder} of {@link ForwardGroupConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ForwardGroupConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ForwardGroupConfigProperty> {
            java.lang.Object serverGroupTuples;

            /**
             * Sets the value of {@link ForwardGroupConfigProperty#getServerGroupTuples}
             * @param serverGroupTuples the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serverGroupTuples(com.aliyun.ros.cdk.core.IResolvable serverGroupTuples) {
                this.serverGroupTuples = serverGroupTuples;
                return this;
            }

            /**
             * Sets the value of {@link ForwardGroupConfigProperty#getServerGroupTuples}
             * @param serverGroupTuples the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serverGroupTuples(java.util.List<? extends java.lang.Object> serverGroupTuples) {
                this.serverGroupTuples = serverGroupTuples;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ForwardGroupConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ForwardGroupConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ForwardGroupConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ForwardGroupConfigProperty {
            private final java.lang.Object serverGroupTuples;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.serverGroupTuples = software.amazon.jsii.Kernel.get(this, "serverGroupTuples", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.serverGroupTuples = java.util.Objects.requireNonNull(builder.serverGroupTuples, "serverGroupTuples is required");
            }

            @Override
            public final java.lang.Object getServerGroupTuples() {
                return this.serverGroupTuples;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("serverGroupTuples", om.valueToTree(this.getServerGroupTuples()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-alb.RosListener.ForwardGroupConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ForwardGroupConfigProperty.Jsii$Proxy that = (ForwardGroupConfigProperty.Jsii$Proxy) o;

                return this.serverGroupTuples.equals(that.serverGroupTuples);
            }

            @Override
            public final int hashCode() {
                int result = this.serverGroupTuples.hashCode();
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.alb.$Module.class, fqn = "@alicloud/ros-cdk-alb.RosListener.QuicConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(QuicConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface QuicConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getQuicListenerId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getQuicUpgradeEnabled() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link QuicConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link QuicConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<QuicConfigProperty> {
            java.lang.Object quicListenerId;
            java.lang.Object quicUpgradeEnabled;

            /**
             * Sets the value of {@link QuicConfigProperty#getQuicListenerId}
             * @param quicListenerId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder quicListenerId(java.lang.String quicListenerId) {
                this.quicListenerId = quicListenerId;
                return this;
            }

            /**
             * Sets the value of {@link QuicConfigProperty#getQuicListenerId}
             * @param quicListenerId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder quicListenerId(com.aliyun.ros.cdk.core.IResolvable quicListenerId) {
                this.quicListenerId = quicListenerId;
                return this;
            }

            /**
             * Sets the value of {@link QuicConfigProperty#getQuicUpgradeEnabled}
             * @param quicUpgradeEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder quicUpgradeEnabled(java.lang.Boolean quicUpgradeEnabled) {
                this.quicUpgradeEnabled = quicUpgradeEnabled;
                return this;
            }

            /**
             * Sets the value of {@link QuicConfigProperty#getQuicUpgradeEnabled}
             * @param quicUpgradeEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder quicUpgradeEnabled(com.aliyun.ros.cdk.core.IResolvable quicUpgradeEnabled) {
                this.quicUpgradeEnabled = quicUpgradeEnabled;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link QuicConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public QuicConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link QuicConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements QuicConfigProperty {
            private final java.lang.Object quicListenerId;
            private final java.lang.Object quicUpgradeEnabled;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.quicListenerId = software.amazon.jsii.Kernel.get(this, "quicListenerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.quicUpgradeEnabled = software.amazon.jsii.Kernel.get(this, "quicUpgradeEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.quicListenerId = builder.quicListenerId;
                this.quicUpgradeEnabled = builder.quicUpgradeEnabled;
            }

            @Override
            public final java.lang.Object getQuicListenerId() {
                return this.quicListenerId;
            }

            @Override
            public final java.lang.Object getQuicUpgradeEnabled() {
                return this.quicUpgradeEnabled;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getQuicListenerId() != null) {
                    data.set("quicListenerId", om.valueToTree(this.getQuicListenerId()));
                }
                if (this.getQuicUpgradeEnabled() != null) {
                    data.set("quicUpgradeEnabled", om.valueToTree(this.getQuicUpgradeEnabled()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-alb.RosListener.QuicConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                QuicConfigProperty.Jsii$Proxy that = (QuicConfigProperty.Jsii$Proxy) o;

                if (this.quicListenerId != null ? !this.quicListenerId.equals(that.quicListenerId) : that.quicListenerId != null) return false;
                return this.quicUpgradeEnabled != null ? this.quicUpgradeEnabled.equals(that.quicUpgradeEnabled) : that.quicUpgradeEnabled == null;
            }

            @Override
            public final int hashCode() {
                int result = this.quicListenerId != null ? this.quicListenerId.hashCode() : 0;
                result = 31 * result + (this.quicUpgradeEnabled != null ? this.quicUpgradeEnabled.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.alb.$Module.class, fqn = "@alicloud/ros-cdk-alb.RosListener.ServerGroupTuplesProperty")
    @software.amazon.jsii.Jsii.Proxy(ServerGroupTuplesProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ServerGroupTuplesProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getServerGroupId();

        /**
         * @return a {@link Builder} of {@link ServerGroupTuplesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ServerGroupTuplesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ServerGroupTuplesProperty> {
            java.lang.Object serverGroupId;

            /**
             * Sets the value of {@link ServerGroupTuplesProperty#getServerGroupId}
             * @param serverGroupId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serverGroupId(java.lang.String serverGroupId) {
                this.serverGroupId = serverGroupId;
                return this;
            }

            /**
             * Sets the value of {@link ServerGroupTuplesProperty#getServerGroupId}
             * @param serverGroupId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serverGroupId(com.aliyun.ros.cdk.core.IResolvable serverGroupId) {
                this.serverGroupId = serverGroupId;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ServerGroupTuplesProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ServerGroupTuplesProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ServerGroupTuplesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ServerGroupTuplesProperty {
            private final java.lang.Object serverGroupId;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.serverGroupId = software.amazon.jsii.Kernel.get(this, "serverGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.serverGroupId = java.util.Objects.requireNonNull(builder.serverGroupId, "serverGroupId is required");
            }

            @Override
            public final java.lang.Object getServerGroupId() {
                return this.serverGroupId;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("serverGroupId", om.valueToTree(this.getServerGroupId()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-alb.RosListener.ServerGroupTuplesProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ServerGroupTuplesProperty.Jsii$Proxy that = (ServerGroupTuplesProperty.Jsii$Proxy) o;

                return this.serverGroupId.equals(that.serverGroupId);
            }

            @Override
            public final int hashCode() {
                int result = this.serverGroupId.hashCode();
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.alb.$Module.class, fqn = "@alicloud/ros-cdk-alb.RosListener.XForwardedForConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(XForwardedForConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface XForwardedForConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getXForwardedForClientCertClientVerifyAlias() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getXForwardedForClientCertClientVerifyEnabled() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getXForwardedForClientCertFingerprintAlias() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getXForwardedForClientCertFingerprintEnabled() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getXForwardedForClientCertIssuerDnAlias() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getXForwardedForClientCertIssuerDnEnabled() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getXForwardedForClientCertSubjectDnAlias() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getXForwardedForClientCertSubjectDnEnabled() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getXForwardedForClientSourceIpsEnabled() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getXForwardedForClientSourceIpsTrusted() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getXForwardedForClientSrcPortEnabled() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getXForwardedForEnabled() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getXForwardedForProtoEnabled() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getXForwardedForSlbIdEnabled() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getXForwardedForSlbPortEnabled() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link XForwardedForConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link XForwardedForConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<XForwardedForConfigProperty> {
            java.lang.Object xForwardedForClientCertClientVerifyAlias;
            java.lang.Object xForwardedForClientCertClientVerifyEnabled;
            java.lang.Object xForwardedForClientCertFingerprintAlias;
            java.lang.Object xForwardedForClientCertFingerprintEnabled;
            java.lang.Object xForwardedForClientCertIssuerDnAlias;
            java.lang.Object xForwardedForClientCertIssuerDnEnabled;
            java.lang.Object xForwardedForClientCertSubjectDnAlias;
            java.lang.Object xForwardedForClientCertSubjectDnEnabled;
            java.lang.Object xForwardedForClientSourceIpsEnabled;
            java.lang.Object xForwardedForClientSourceIpsTrusted;
            java.lang.Object xForwardedForClientSrcPortEnabled;
            java.lang.Object xForwardedForEnabled;
            java.lang.Object xForwardedForProtoEnabled;
            java.lang.Object xForwardedForSlbIdEnabled;
            java.lang.Object xForwardedForSlbPortEnabled;

            /**
             * Sets the value of {@link XForwardedForConfigProperty#getXForwardedForClientCertClientVerifyAlias}
             * @param xForwardedForClientCertClientVerifyAlias the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder xForwardedForClientCertClientVerifyAlias(java.lang.String xForwardedForClientCertClientVerifyAlias) {
                this.xForwardedForClientCertClientVerifyAlias = xForwardedForClientCertClientVerifyAlias;
                return this;
            }

            /**
             * Sets the value of {@link XForwardedForConfigProperty#getXForwardedForClientCertClientVerifyAlias}
             * @param xForwardedForClientCertClientVerifyAlias the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder xForwardedForClientCertClientVerifyAlias(com.aliyun.ros.cdk.core.IResolvable xForwardedForClientCertClientVerifyAlias) {
                this.xForwardedForClientCertClientVerifyAlias = xForwardedForClientCertClientVerifyAlias;
                return this;
            }

            /**
             * Sets the value of {@link XForwardedForConfigProperty#getXForwardedForClientCertClientVerifyEnabled}
             * @param xForwardedForClientCertClientVerifyEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder xForwardedForClientCertClientVerifyEnabled(java.lang.Boolean xForwardedForClientCertClientVerifyEnabled) {
                this.xForwardedForClientCertClientVerifyEnabled = xForwardedForClientCertClientVerifyEnabled;
                return this;
            }

            /**
             * Sets the value of {@link XForwardedForConfigProperty#getXForwardedForClientCertClientVerifyEnabled}
             * @param xForwardedForClientCertClientVerifyEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder xForwardedForClientCertClientVerifyEnabled(com.aliyun.ros.cdk.core.IResolvable xForwardedForClientCertClientVerifyEnabled) {
                this.xForwardedForClientCertClientVerifyEnabled = xForwardedForClientCertClientVerifyEnabled;
                return this;
            }

            /**
             * Sets the value of {@link XForwardedForConfigProperty#getXForwardedForClientCertFingerprintAlias}
             * @param xForwardedForClientCertFingerprintAlias the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder xForwardedForClientCertFingerprintAlias(java.lang.String xForwardedForClientCertFingerprintAlias) {
                this.xForwardedForClientCertFingerprintAlias = xForwardedForClientCertFingerprintAlias;
                return this;
            }

            /**
             * Sets the value of {@link XForwardedForConfigProperty#getXForwardedForClientCertFingerprintAlias}
             * @param xForwardedForClientCertFingerprintAlias the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder xForwardedForClientCertFingerprintAlias(com.aliyun.ros.cdk.core.IResolvable xForwardedForClientCertFingerprintAlias) {
                this.xForwardedForClientCertFingerprintAlias = xForwardedForClientCertFingerprintAlias;
                return this;
            }

            /**
             * Sets the value of {@link XForwardedForConfigProperty#getXForwardedForClientCertFingerprintEnabled}
             * @param xForwardedForClientCertFingerprintEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder xForwardedForClientCertFingerprintEnabled(java.lang.Boolean xForwardedForClientCertFingerprintEnabled) {
                this.xForwardedForClientCertFingerprintEnabled = xForwardedForClientCertFingerprintEnabled;
                return this;
            }

            /**
             * Sets the value of {@link XForwardedForConfigProperty#getXForwardedForClientCertFingerprintEnabled}
             * @param xForwardedForClientCertFingerprintEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder xForwardedForClientCertFingerprintEnabled(com.aliyun.ros.cdk.core.IResolvable xForwardedForClientCertFingerprintEnabled) {
                this.xForwardedForClientCertFingerprintEnabled = xForwardedForClientCertFingerprintEnabled;
                return this;
            }

            /**
             * Sets the value of {@link XForwardedForConfigProperty#getXForwardedForClientCertIssuerDnAlias}
             * @param xForwardedForClientCertIssuerDnAlias the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder xForwardedForClientCertIssuerDnAlias(java.lang.String xForwardedForClientCertIssuerDnAlias) {
                this.xForwardedForClientCertIssuerDnAlias = xForwardedForClientCertIssuerDnAlias;
                return this;
            }

            /**
             * Sets the value of {@link XForwardedForConfigProperty#getXForwardedForClientCertIssuerDnAlias}
             * @param xForwardedForClientCertIssuerDnAlias the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder xForwardedForClientCertIssuerDnAlias(com.aliyun.ros.cdk.core.IResolvable xForwardedForClientCertIssuerDnAlias) {
                this.xForwardedForClientCertIssuerDnAlias = xForwardedForClientCertIssuerDnAlias;
                return this;
            }

            /**
             * Sets the value of {@link XForwardedForConfigProperty#getXForwardedForClientCertIssuerDnEnabled}
             * @param xForwardedForClientCertIssuerDnEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder xForwardedForClientCertIssuerDnEnabled(java.lang.Boolean xForwardedForClientCertIssuerDnEnabled) {
                this.xForwardedForClientCertIssuerDnEnabled = xForwardedForClientCertIssuerDnEnabled;
                return this;
            }

            /**
             * Sets the value of {@link XForwardedForConfigProperty#getXForwardedForClientCertIssuerDnEnabled}
             * @param xForwardedForClientCertIssuerDnEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder xForwardedForClientCertIssuerDnEnabled(com.aliyun.ros.cdk.core.IResolvable xForwardedForClientCertIssuerDnEnabled) {
                this.xForwardedForClientCertIssuerDnEnabled = xForwardedForClientCertIssuerDnEnabled;
                return this;
            }

            /**
             * Sets the value of {@link XForwardedForConfigProperty#getXForwardedForClientCertSubjectDnAlias}
             * @param xForwardedForClientCertSubjectDnAlias the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder xForwardedForClientCertSubjectDnAlias(java.lang.String xForwardedForClientCertSubjectDnAlias) {
                this.xForwardedForClientCertSubjectDnAlias = xForwardedForClientCertSubjectDnAlias;
                return this;
            }

            /**
             * Sets the value of {@link XForwardedForConfigProperty#getXForwardedForClientCertSubjectDnAlias}
             * @param xForwardedForClientCertSubjectDnAlias the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder xForwardedForClientCertSubjectDnAlias(com.aliyun.ros.cdk.core.IResolvable xForwardedForClientCertSubjectDnAlias) {
                this.xForwardedForClientCertSubjectDnAlias = xForwardedForClientCertSubjectDnAlias;
                return this;
            }

            /**
             * Sets the value of {@link XForwardedForConfigProperty#getXForwardedForClientCertSubjectDnEnabled}
             * @param xForwardedForClientCertSubjectDnEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder xForwardedForClientCertSubjectDnEnabled(java.lang.Boolean xForwardedForClientCertSubjectDnEnabled) {
                this.xForwardedForClientCertSubjectDnEnabled = xForwardedForClientCertSubjectDnEnabled;
                return this;
            }

            /**
             * Sets the value of {@link XForwardedForConfigProperty#getXForwardedForClientCertSubjectDnEnabled}
             * @param xForwardedForClientCertSubjectDnEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder xForwardedForClientCertSubjectDnEnabled(com.aliyun.ros.cdk.core.IResolvable xForwardedForClientCertSubjectDnEnabled) {
                this.xForwardedForClientCertSubjectDnEnabled = xForwardedForClientCertSubjectDnEnabled;
                return this;
            }

            /**
             * Sets the value of {@link XForwardedForConfigProperty#getXForwardedForClientSourceIpsEnabled}
             * @param xForwardedForClientSourceIpsEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder xForwardedForClientSourceIpsEnabled(java.lang.Boolean xForwardedForClientSourceIpsEnabled) {
                this.xForwardedForClientSourceIpsEnabled = xForwardedForClientSourceIpsEnabled;
                return this;
            }

            /**
             * Sets the value of {@link XForwardedForConfigProperty#getXForwardedForClientSourceIpsEnabled}
             * @param xForwardedForClientSourceIpsEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder xForwardedForClientSourceIpsEnabled(com.aliyun.ros.cdk.core.IResolvable xForwardedForClientSourceIpsEnabled) {
                this.xForwardedForClientSourceIpsEnabled = xForwardedForClientSourceIpsEnabled;
                return this;
            }

            /**
             * Sets the value of {@link XForwardedForConfigProperty#getXForwardedForClientSourceIpsTrusted}
             * @param xForwardedForClientSourceIpsTrusted the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder xForwardedForClientSourceIpsTrusted(java.lang.String xForwardedForClientSourceIpsTrusted) {
                this.xForwardedForClientSourceIpsTrusted = xForwardedForClientSourceIpsTrusted;
                return this;
            }

            /**
             * Sets the value of {@link XForwardedForConfigProperty#getXForwardedForClientSourceIpsTrusted}
             * @param xForwardedForClientSourceIpsTrusted the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder xForwardedForClientSourceIpsTrusted(com.aliyun.ros.cdk.core.IResolvable xForwardedForClientSourceIpsTrusted) {
                this.xForwardedForClientSourceIpsTrusted = xForwardedForClientSourceIpsTrusted;
                return this;
            }

            /**
             * Sets the value of {@link XForwardedForConfigProperty#getXForwardedForClientSrcPortEnabled}
             * @param xForwardedForClientSrcPortEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder xForwardedForClientSrcPortEnabled(java.lang.Boolean xForwardedForClientSrcPortEnabled) {
                this.xForwardedForClientSrcPortEnabled = xForwardedForClientSrcPortEnabled;
                return this;
            }

            /**
             * Sets the value of {@link XForwardedForConfigProperty#getXForwardedForClientSrcPortEnabled}
             * @param xForwardedForClientSrcPortEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder xForwardedForClientSrcPortEnabled(com.aliyun.ros.cdk.core.IResolvable xForwardedForClientSrcPortEnabled) {
                this.xForwardedForClientSrcPortEnabled = xForwardedForClientSrcPortEnabled;
                return this;
            }

            /**
             * Sets the value of {@link XForwardedForConfigProperty#getXForwardedForEnabled}
             * @param xForwardedForEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder xForwardedForEnabled(java.lang.Boolean xForwardedForEnabled) {
                this.xForwardedForEnabled = xForwardedForEnabled;
                return this;
            }

            /**
             * Sets the value of {@link XForwardedForConfigProperty#getXForwardedForEnabled}
             * @param xForwardedForEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder xForwardedForEnabled(com.aliyun.ros.cdk.core.IResolvable xForwardedForEnabled) {
                this.xForwardedForEnabled = xForwardedForEnabled;
                return this;
            }

            /**
             * Sets the value of {@link XForwardedForConfigProperty#getXForwardedForProtoEnabled}
             * @param xForwardedForProtoEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder xForwardedForProtoEnabled(java.lang.Boolean xForwardedForProtoEnabled) {
                this.xForwardedForProtoEnabled = xForwardedForProtoEnabled;
                return this;
            }

            /**
             * Sets the value of {@link XForwardedForConfigProperty#getXForwardedForProtoEnabled}
             * @param xForwardedForProtoEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder xForwardedForProtoEnabled(com.aliyun.ros.cdk.core.IResolvable xForwardedForProtoEnabled) {
                this.xForwardedForProtoEnabled = xForwardedForProtoEnabled;
                return this;
            }

            /**
             * Sets the value of {@link XForwardedForConfigProperty#getXForwardedForSlbIdEnabled}
             * @param xForwardedForSlbIdEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder xForwardedForSlbIdEnabled(java.lang.Boolean xForwardedForSlbIdEnabled) {
                this.xForwardedForSlbIdEnabled = xForwardedForSlbIdEnabled;
                return this;
            }

            /**
             * Sets the value of {@link XForwardedForConfigProperty#getXForwardedForSlbIdEnabled}
             * @param xForwardedForSlbIdEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder xForwardedForSlbIdEnabled(com.aliyun.ros.cdk.core.IResolvable xForwardedForSlbIdEnabled) {
                this.xForwardedForSlbIdEnabled = xForwardedForSlbIdEnabled;
                return this;
            }

            /**
             * Sets the value of {@link XForwardedForConfigProperty#getXForwardedForSlbPortEnabled}
             * @param xForwardedForSlbPortEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder xForwardedForSlbPortEnabled(java.lang.Boolean xForwardedForSlbPortEnabled) {
                this.xForwardedForSlbPortEnabled = xForwardedForSlbPortEnabled;
                return this;
            }

            /**
             * Sets the value of {@link XForwardedForConfigProperty#getXForwardedForSlbPortEnabled}
             * @param xForwardedForSlbPortEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder xForwardedForSlbPortEnabled(com.aliyun.ros.cdk.core.IResolvable xForwardedForSlbPortEnabled) {
                this.xForwardedForSlbPortEnabled = xForwardedForSlbPortEnabled;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link XForwardedForConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public XForwardedForConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link XForwardedForConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements XForwardedForConfigProperty {
            private final java.lang.Object xForwardedForClientCertClientVerifyAlias;
            private final java.lang.Object xForwardedForClientCertClientVerifyEnabled;
            private final java.lang.Object xForwardedForClientCertFingerprintAlias;
            private final java.lang.Object xForwardedForClientCertFingerprintEnabled;
            private final java.lang.Object xForwardedForClientCertIssuerDnAlias;
            private final java.lang.Object xForwardedForClientCertIssuerDnEnabled;
            private final java.lang.Object xForwardedForClientCertSubjectDnAlias;
            private final java.lang.Object xForwardedForClientCertSubjectDnEnabled;
            private final java.lang.Object xForwardedForClientSourceIpsEnabled;
            private final java.lang.Object xForwardedForClientSourceIpsTrusted;
            private final java.lang.Object xForwardedForClientSrcPortEnabled;
            private final java.lang.Object xForwardedForEnabled;
            private final java.lang.Object xForwardedForProtoEnabled;
            private final java.lang.Object xForwardedForSlbIdEnabled;
            private final java.lang.Object xForwardedForSlbPortEnabled;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.xForwardedForClientCertClientVerifyAlias = software.amazon.jsii.Kernel.get(this, "xForwardedForClientCertClientVerifyAlias", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.xForwardedForClientCertClientVerifyEnabled = software.amazon.jsii.Kernel.get(this, "xForwardedForClientCertClientVerifyEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.xForwardedForClientCertFingerprintAlias = software.amazon.jsii.Kernel.get(this, "xForwardedForClientCertFingerprintAlias", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.xForwardedForClientCertFingerprintEnabled = software.amazon.jsii.Kernel.get(this, "xForwardedForClientCertFingerprintEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.xForwardedForClientCertIssuerDnAlias = software.amazon.jsii.Kernel.get(this, "xForwardedForClientCertIssuerDnAlias", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.xForwardedForClientCertIssuerDnEnabled = software.amazon.jsii.Kernel.get(this, "xForwardedForClientCertIssuerDnEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.xForwardedForClientCertSubjectDnAlias = software.amazon.jsii.Kernel.get(this, "xForwardedForClientCertSubjectDnAlias", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.xForwardedForClientCertSubjectDnEnabled = software.amazon.jsii.Kernel.get(this, "xForwardedForClientCertSubjectDnEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.xForwardedForClientSourceIpsEnabled = software.amazon.jsii.Kernel.get(this, "xForwardedForClientSourceIpsEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.xForwardedForClientSourceIpsTrusted = software.amazon.jsii.Kernel.get(this, "xForwardedForClientSourceIpsTrusted", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.xForwardedForClientSrcPortEnabled = software.amazon.jsii.Kernel.get(this, "xForwardedForClientSrcPortEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.xForwardedForEnabled = software.amazon.jsii.Kernel.get(this, "xForwardedForEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.xForwardedForProtoEnabled = software.amazon.jsii.Kernel.get(this, "xForwardedForProtoEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.xForwardedForSlbIdEnabled = software.amazon.jsii.Kernel.get(this, "xForwardedForSlbIdEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.xForwardedForSlbPortEnabled = software.amazon.jsii.Kernel.get(this, "xForwardedForSlbPortEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.xForwardedForClientCertClientVerifyAlias = builder.xForwardedForClientCertClientVerifyAlias;
                this.xForwardedForClientCertClientVerifyEnabled = builder.xForwardedForClientCertClientVerifyEnabled;
                this.xForwardedForClientCertFingerprintAlias = builder.xForwardedForClientCertFingerprintAlias;
                this.xForwardedForClientCertFingerprintEnabled = builder.xForwardedForClientCertFingerprintEnabled;
                this.xForwardedForClientCertIssuerDnAlias = builder.xForwardedForClientCertIssuerDnAlias;
                this.xForwardedForClientCertIssuerDnEnabled = builder.xForwardedForClientCertIssuerDnEnabled;
                this.xForwardedForClientCertSubjectDnAlias = builder.xForwardedForClientCertSubjectDnAlias;
                this.xForwardedForClientCertSubjectDnEnabled = builder.xForwardedForClientCertSubjectDnEnabled;
                this.xForwardedForClientSourceIpsEnabled = builder.xForwardedForClientSourceIpsEnabled;
                this.xForwardedForClientSourceIpsTrusted = builder.xForwardedForClientSourceIpsTrusted;
                this.xForwardedForClientSrcPortEnabled = builder.xForwardedForClientSrcPortEnabled;
                this.xForwardedForEnabled = builder.xForwardedForEnabled;
                this.xForwardedForProtoEnabled = builder.xForwardedForProtoEnabled;
                this.xForwardedForSlbIdEnabled = builder.xForwardedForSlbIdEnabled;
                this.xForwardedForSlbPortEnabled = builder.xForwardedForSlbPortEnabled;
            }

            @Override
            public final java.lang.Object getXForwardedForClientCertClientVerifyAlias() {
                return this.xForwardedForClientCertClientVerifyAlias;
            }

            @Override
            public final java.lang.Object getXForwardedForClientCertClientVerifyEnabled() {
                return this.xForwardedForClientCertClientVerifyEnabled;
            }

            @Override
            public final java.lang.Object getXForwardedForClientCertFingerprintAlias() {
                return this.xForwardedForClientCertFingerprintAlias;
            }

            @Override
            public final java.lang.Object getXForwardedForClientCertFingerprintEnabled() {
                return this.xForwardedForClientCertFingerprintEnabled;
            }

            @Override
            public final java.lang.Object getXForwardedForClientCertIssuerDnAlias() {
                return this.xForwardedForClientCertIssuerDnAlias;
            }

            @Override
            public final java.lang.Object getXForwardedForClientCertIssuerDnEnabled() {
                return this.xForwardedForClientCertIssuerDnEnabled;
            }

            @Override
            public final java.lang.Object getXForwardedForClientCertSubjectDnAlias() {
                return this.xForwardedForClientCertSubjectDnAlias;
            }

            @Override
            public final java.lang.Object getXForwardedForClientCertSubjectDnEnabled() {
                return this.xForwardedForClientCertSubjectDnEnabled;
            }

            @Override
            public final java.lang.Object getXForwardedForClientSourceIpsEnabled() {
                return this.xForwardedForClientSourceIpsEnabled;
            }

            @Override
            public final java.lang.Object getXForwardedForClientSourceIpsTrusted() {
                return this.xForwardedForClientSourceIpsTrusted;
            }

            @Override
            public final java.lang.Object getXForwardedForClientSrcPortEnabled() {
                return this.xForwardedForClientSrcPortEnabled;
            }

            @Override
            public final java.lang.Object getXForwardedForEnabled() {
                return this.xForwardedForEnabled;
            }

            @Override
            public final java.lang.Object getXForwardedForProtoEnabled() {
                return this.xForwardedForProtoEnabled;
            }

            @Override
            public final java.lang.Object getXForwardedForSlbIdEnabled() {
                return this.xForwardedForSlbIdEnabled;
            }

            @Override
            public final java.lang.Object getXForwardedForSlbPortEnabled() {
                return this.xForwardedForSlbPortEnabled;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getXForwardedForClientCertClientVerifyAlias() != null) {
                    data.set("xForwardedForClientCertClientVerifyAlias", om.valueToTree(this.getXForwardedForClientCertClientVerifyAlias()));
                }
                if (this.getXForwardedForClientCertClientVerifyEnabled() != null) {
                    data.set("xForwardedForClientCertClientVerifyEnabled", om.valueToTree(this.getXForwardedForClientCertClientVerifyEnabled()));
                }
                if (this.getXForwardedForClientCertFingerprintAlias() != null) {
                    data.set("xForwardedForClientCertFingerprintAlias", om.valueToTree(this.getXForwardedForClientCertFingerprintAlias()));
                }
                if (this.getXForwardedForClientCertFingerprintEnabled() != null) {
                    data.set("xForwardedForClientCertFingerprintEnabled", om.valueToTree(this.getXForwardedForClientCertFingerprintEnabled()));
                }
                if (this.getXForwardedForClientCertIssuerDnAlias() != null) {
                    data.set("xForwardedForClientCertIssuerDnAlias", om.valueToTree(this.getXForwardedForClientCertIssuerDnAlias()));
                }
                if (this.getXForwardedForClientCertIssuerDnEnabled() != null) {
                    data.set("xForwardedForClientCertIssuerDnEnabled", om.valueToTree(this.getXForwardedForClientCertIssuerDnEnabled()));
                }
                if (this.getXForwardedForClientCertSubjectDnAlias() != null) {
                    data.set("xForwardedForClientCertSubjectDnAlias", om.valueToTree(this.getXForwardedForClientCertSubjectDnAlias()));
                }
                if (this.getXForwardedForClientCertSubjectDnEnabled() != null) {
                    data.set("xForwardedForClientCertSubjectDnEnabled", om.valueToTree(this.getXForwardedForClientCertSubjectDnEnabled()));
                }
                if (this.getXForwardedForClientSourceIpsEnabled() != null) {
                    data.set("xForwardedForClientSourceIpsEnabled", om.valueToTree(this.getXForwardedForClientSourceIpsEnabled()));
                }
                if (this.getXForwardedForClientSourceIpsTrusted() != null) {
                    data.set("xForwardedForClientSourceIpsTrusted", om.valueToTree(this.getXForwardedForClientSourceIpsTrusted()));
                }
                if (this.getXForwardedForClientSrcPortEnabled() != null) {
                    data.set("xForwardedForClientSrcPortEnabled", om.valueToTree(this.getXForwardedForClientSrcPortEnabled()));
                }
                if (this.getXForwardedForEnabled() != null) {
                    data.set("xForwardedForEnabled", om.valueToTree(this.getXForwardedForEnabled()));
                }
                if (this.getXForwardedForProtoEnabled() != null) {
                    data.set("xForwardedForProtoEnabled", om.valueToTree(this.getXForwardedForProtoEnabled()));
                }
                if (this.getXForwardedForSlbIdEnabled() != null) {
                    data.set("xForwardedForSlbIdEnabled", om.valueToTree(this.getXForwardedForSlbIdEnabled()));
                }
                if (this.getXForwardedForSlbPortEnabled() != null) {
                    data.set("xForwardedForSlbPortEnabled", om.valueToTree(this.getXForwardedForSlbPortEnabled()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-alb.RosListener.XForwardedForConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                XForwardedForConfigProperty.Jsii$Proxy that = (XForwardedForConfigProperty.Jsii$Proxy) o;

                if (this.xForwardedForClientCertClientVerifyAlias != null ? !this.xForwardedForClientCertClientVerifyAlias.equals(that.xForwardedForClientCertClientVerifyAlias) : that.xForwardedForClientCertClientVerifyAlias != null) return false;
                if (this.xForwardedForClientCertClientVerifyEnabled != null ? !this.xForwardedForClientCertClientVerifyEnabled.equals(that.xForwardedForClientCertClientVerifyEnabled) : that.xForwardedForClientCertClientVerifyEnabled != null) return false;
                if (this.xForwardedForClientCertFingerprintAlias != null ? !this.xForwardedForClientCertFingerprintAlias.equals(that.xForwardedForClientCertFingerprintAlias) : that.xForwardedForClientCertFingerprintAlias != null) return false;
                if (this.xForwardedForClientCertFingerprintEnabled != null ? !this.xForwardedForClientCertFingerprintEnabled.equals(that.xForwardedForClientCertFingerprintEnabled) : that.xForwardedForClientCertFingerprintEnabled != null) return false;
                if (this.xForwardedForClientCertIssuerDnAlias != null ? !this.xForwardedForClientCertIssuerDnAlias.equals(that.xForwardedForClientCertIssuerDnAlias) : that.xForwardedForClientCertIssuerDnAlias != null) return false;
                if (this.xForwardedForClientCertIssuerDnEnabled != null ? !this.xForwardedForClientCertIssuerDnEnabled.equals(that.xForwardedForClientCertIssuerDnEnabled) : that.xForwardedForClientCertIssuerDnEnabled != null) return false;
                if (this.xForwardedForClientCertSubjectDnAlias != null ? !this.xForwardedForClientCertSubjectDnAlias.equals(that.xForwardedForClientCertSubjectDnAlias) : that.xForwardedForClientCertSubjectDnAlias != null) return false;
                if (this.xForwardedForClientCertSubjectDnEnabled != null ? !this.xForwardedForClientCertSubjectDnEnabled.equals(that.xForwardedForClientCertSubjectDnEnabled) : that.xForwardedForClientCertSubjectDnEnabled != null) return false;
                if (this.xForwardedForClientSourceIpsEnabled != null ? !this.xForwardedForClientSourceIpsEnabled.equals(that.xForwardedForClientSourceIpsEnabled) : that.xForwardedForClientSourceIpsEnabled != null) return false;
                if (this.xForwardedForClientSourceIpsTrusted != null ? !this.xForwardedForClientSourceIpsTrusted.equals(that.xForwardedForClientSourceIpsTrusted) : that.xForwardedForClientSourceIpsTrusted != null) return false;
                if (this.xForwardedForClientSrcPortEnabled != null ? !this.xForwardedForClientSrcPortEnabled.equals(that.xForwardedForClientSrcPortEnabled) : that.xForwardedForClientSrcPortEnabled != null) return false;
                if (this.xForwardedForEnabled != null ? !this.xForwardedForEnabled.equals(that.xForwardedForEnabled) : that.xForwardedForEnabled != null) return false;
                if (this.xForwardedForProtoEnabled != null ? !this.xForwardedForProtoEnabled.equals(that.xForwardedForProtoEnabled) : that.xForwardedForProtoEnabled != null) return false;
                if (this.xForwardedForSlbIdEnabled != null ? !this.xForwardedForSlbIdEnabled.equals(that.xForwardedForSlbIdEnabled) : that.xForwardedForSlbIdEnabled != null) return false;
                return this.xForwardedForSlbPortEnabled != null ? this.xForwardedForSlbPortEnabled.equals(that.xForwardedForSlbPortEnabled) : that.xForwardedForSlbPortEnabled == null;
            }

            @Override
            public final int hashCode() {
                int result = this.xForwardedForClientCertClientVerifyAlias != null ? this.xForwardedForClientCertClientVerifyAlias.hashCode() : 0;
                result = 31 * result + (this.xForwardedForClientCertClientVerifyEnabled != null ? this.xForwardedForClientCertClientVerifyEnabled.hashCode() : 0);
                result = 31 * result + (this.xForwardedForClientCertFingerprintAlias != null ? this.xForwardedForClientCertFingerprintAlias.hashCode() : 0);
                result = 31 * result + (this.xForwardedForClientCertFingerprintEnabled != null ? this.xForwardedForClientCertFingerprintEnabled.hashCode() : 0);
                result = 31 * result + (this.xForwardedForClientCertIssuerDnAlias != null ? this.xForwardedForClientCertIssuerDnAlias.hashCode() : 0);
                result = 31 * result + (this.xForwardedForClientCertIssuerDnEnabled != null ? this.xForwardedForClientCertIssuerDnEnabled.hashCode() : 0);
                result = 31 * result + (this.xForwardedForClientCertSubjectDnAlias != null ? this.xForwardedForClientCertSubjectDnAlias.hashCode() : 0);
                result = 31 * result + (this.xForwardedForClientCertSubjectDnEnabled != null ? this.xForwardedForClientCertSubjectDnEnabled.hashCode() : 0);
                result = 31 * result + (this.xForwardedForClientSourceIpsEnabled != null ? this.xForwardedForClientSourceIpsEnabled.hashCode() : 0);
                result = 31 * result + (this.xForwardedForClientSourceIpsTrusted != null ? this.xForwardedForClientSourceIpsTrusted.hashCode() : 0);
                result = 31 * result + (this.xForwardedForClientSrcPortEnabled != null ? this.xForwardedForClientSrcPortEnabled.hashCode() : 0);
                result = 31 * result + (this.xForwardedForEnabled != null ? this.xForwardedForEnabled.hashCode() : 0);
                result = 31 * result + (this.xForwardedForProtoEnabled != null ? this.xForwardedForProtoEnabled.hashCode() : 0);
                result = 31 * result + (this.xForwardedForSlbIdEnabled != null ? this.xForwardedForSlbIdEnabled.hashCode() : 0);
                result = 31 * result + (this.xForwardedForSlbPortEnabled != null ? this.xForwardedForSlbPortEnabled.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.alb.RosListener}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.alb.RosListener> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
         * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.alb.RosListenerProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.alb.RosListenerProps.Builder();
        }

        /**
         * @return {@code this}
         * @param defaultActions This parameter is required.
         */
        public Builder defaultActions(final com.aliyun.ros.cdk.core.IResolvable defaultActions) {
            this.props.defaultActions(defaultActions);
            return this;
        }
        /**
         * @return {@code this}
         * @param defaultActions This parameter is required.
         */
        public Builder defaultActions(final java.util.List<? extends java.lang.Object> defaultActions) {
            this.props.defaultActions(defaultActions);
            return this;
        }

        /**
         * @return {@code this}
         * @param listenerPort This parameter is required.
         */
        public Builder listenerPort(final java.lang.Number listenerPort) {
            this.props.listenerPort(listenerPort);
            return this;
        }
        /**
         * @return {@code this}
         * @param listenerPort This parameter is required.
         */
        public Builder listenerPort(final com.aliyun.ros.cdk.core.IResolvable listenerPort) {
            this.props.listenerPort(listenerPort);
            return this;
        }

        /**
         * @return {@code this}
         * @param listenerProtocol This parameter is required.
         */
        public Builder listenerProtocol(final java.lang.String listenerProtocol) {
            this.props.listenerProtocol(listenerProtocol);
            return this;
        }
        /**
         * @return {@code this}
         * @param listenerProtocol This parameter is required.
         */
        public Builder listenerProtocol(final com.aliyun.ros.cdk.core.IResolvable listenerProtocol) {
            this.props.listenerProtocol(listenerProtocol);
            return this;
        }

        /**
         * @return {@code this}
         * @param loadBalancerId This parameter is required.
         */
        public Builder loadBalancerId(final java.lang.String loadBalancerId) {
            this.props.loadBalancerId(loadBalancerId);
            return this;
        }
        /**
         * @return {@code this}
         * @param loadBalancerId This parameter is required.
         */
        public Builder loadBalancerId(final com.aliyun.ros.cdk.core.IResolvable loadBalancerId) {
            this.props.loadBalancerId(loadBalancerId);
            return this;
        }

        /**
         * @return {@code this}
         * @param caCertificates This parameter is required.
         */
        public Builder caCertificates(final com.aliyun.ros.cdk.core.IResolvable caCertificates) {
            this.props.caCertificates(caCertificates);
            return this;
        }
        /**
         * @return {@code this}
         * @param caCertificates This parameter is required.
         */
        public Builder caCertificates(final java.util.List<? extends java.lang.Object> caCertificates) {
            this.props.caCertificates(caCertificates);
            return this;
        }

        /**
         * @return {@code this}
         * @param caEnabled This parameter is required.
         */
        public Builder caEnabled(final java.lang.Boolean caEnabled) {
            this.props.caEnabled(caEnabled);
            return this;
        }
        /**
         * @return {@code this}
         * @param caEnabled This parameter is required.
         */
        public Builder caEnabled(final com.aliyun.ros.cdk.core.IResolvable caEnabled) {
            this.props.caEnabled(caEnabled);
            return this;
        }

        /**
         * @return {@code this}
         * @param certificates This parameter is required.
         */
        public Builder certificates(final com.aliyun.ros.cdk.core.IResolvable certificates) {
            this.props.certificates(certificates);
            return this;
        }
        /**
         * @return {@code this}
         * @param certificates This parameter is required.
         */
        public Builder certificates(final java.util.List<? extends java.lang.Object> certificates) {
            this.props.certificates(certificates);
            return this;
        }

        /**
         * @return {@code this}
         * @param gzipEnabled This parameter is required.
         */
        public Builder gzipEnabled(final java.lang.Boolean gzipEnabled) {
            this.props.gzipEnabled(gzipEnabled);
            return this;
        }
        /**
         * @return {@code this}
         * @param gzipEnabled This parameter is required.
         */
        public Builder gzipEnabled(final com.aliyun.ros.cdk.core.IResolvable gzipEnabled) {
            this.props.gzipEnabled(gzipEnabled);
            return this;
        }

        /**
         * @return {@code this}
         * @param http2Enabled This parameter is required.
         */
        public Builder http2Enabled(final java.lang.Boolean http2Enabled) {
            this.props.http2Enabled(http2Enabled);
            return this;
        }
        /**
         * @return {@code this}
         * @param http2Enabled This parameter is required.
         */
        public Builder http2Enabled(final com.aliyun.ros.cdk.core.IResolvable http2Enabled) {
            this.props.http2Enabled(http2Enabled);
            return this;
        }

        /**
         * @return {@code this}
         * @param idleTimeout This parameter is required.
         */
        public Builder idleTimeout(final java.lang.Number idleTimeout) {
            this.props.idleTimeout(idleTimeout);
            return this;
        }
        /**
         * @return {@code this}
         * @param idleTimeout This parameter is required.
         */
        public Builder idleTimeout(final com.aliyun.ros.cdk.core.IResolvable idleTimeout) {
            this.props.idleTimeout(idleTimeout);
            return this;
        }

        /**
         * @return {@code this}
         * @param listenerDescription This parameter is required.
         */
        public Builder listenerDescription(final java.lang.String listenerDescription) {
            this.props.listenerDescription(listenerDescription);
            return this;
        }
        /**
         * @return {@code this}
         * @param listenerDescription This parameter is required.
         */
        public Builder listenerDescription(final com.aliyun.ros.cdk.core.IResolvable listenerDescription) {
            this.props.listenerDescription(listenerDescription);
            return this;
        }

        /**
         * @return {@code this}
         * @param listenerStatus This parameter is required.
         */
        public Builder listenerStatus(final java.lang.String listenerStatus) {
            this.props.listenerStatus(listenerStatus);
            return this;
        }
        /**
         * @return {@code this}
         * @param listenerStatus This parameter is required.
         */
        public Builder listenerStatus(final com.aliyun.ros.cdk.core.IResolvable listenerStatus) {
            this.props.listenerStatus(listenerStatus);
            return this;
        }

        /**
         * @return {@code this}
         * @param quicConfig This parameter is required.
         */
        public Builder quicConfig(final com.aliyun.ros.cdk.core.IResolvable quicConfig) {
            this.props.quicConfig(quicConfig);
            return this;
        }
        /**
         * @return {@code this}
         * @param quicConfig This parameter is required.
         */
        public Builder quicConfig(final com.aliyun.ros.cdk.alb.RosListener.QuicConfigProperty quicConfig) {
            this.props.quicConfig(quicConfig);
            return this;
        }

        /**
         * @return {@code this}
         * @param requestTimeout This parameter is required.
         */
        public Builder requestTimeout(final java.lang.Number requestTimeout) {
            this.props.requestTimeout(requestTimeout);
            return this;
        }
        /**
         * @return {@code this}
         * @param requestTimeout This parameter is required.
         */
        public Builder requestTimeout(final com.aliyun.ros.cdk.core.IResolvable requestTimeout) {
            this.props.requestTimeout(requestTimeout);
            return this;
        }

        /**
         * @return {@code this}
         * @param securityPolicyId This parameter is required.
         */
        public Builder securityPolicyId(final java.lang.String securityPolicyId) {
            this.props.securityPolicyId(securityPolicyId);
            return this;
        }
        /**
         * @return {@code this}
         * @param securityPolicyId This parameter is required.
         */
        public Builder securityPolicyId(final com.aliyun.ros.cdk.core.IResolvable securityPolicyId) {
            this.props.securityPolicyId(securityPolicyId);
            return this;
        }

        /**
         * @return {@code this}
         * @param xForwardedForConfig This parameter is required.
         */
        public Builder xForwardedForConfig(final com.aliyun.ros.cdk.core.IResolvable xForwardedForConfig) {
            this.props.xForwardedForConfig(xForwardedForConfig);
            return this;
        }
        /**
         * @return {@code this}
         * @param xForwardedForConfig This parameter is required.
         */
        public Builder xForwardedForConfig(final com.aliyun.ros.cdk.alb.RosListener.XForwardedForConfigProperty xForwardedForConfig) {
            this.props.xForwardedForConfig(xForwardedForConfig);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.alb.RosListener}.
         */
        @Override
        public com.aliyun.ros.cdk.alb.RosListener build() {
            return new com.aliyun.ros.cdk.alb.RosListener(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
