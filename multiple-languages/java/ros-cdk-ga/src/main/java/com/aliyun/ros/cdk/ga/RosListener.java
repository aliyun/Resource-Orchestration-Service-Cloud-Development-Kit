package com.aliyun.ros.cdk.ga;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::GA::Listener</code>, which is used to create a listener for a Global Accelerator (GA) instance.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:17.197Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ga.$Module.class, fqn = "@alicloud/ros-cdk-ga.RosListener")
public class RosListener extends com.aliyun.ros.cdk.core.RosResource {

    protected RosListener(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosListener(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.ga.RosListener.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosListener(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ga.RosListenerProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getAcceleratorId() {
        return software.amazon.jsii.Kernel.get(this, "acceleratorId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAcceleratorId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "acceleratorId", java.util.Objects.requireNonNull(value, "acceleratorId is required"));
    }

    /**
     */
    public void setAcceleratorId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "acceleratorId", java.util.Objects.requireNonNull(value, "acceleratorId is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getPortRanges() {
        return software.amazon.jsii.Kernel.get(this, "portRanges", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPortRanges(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "portRanges", java.util.Objects.requireNonNull(value, "portRanges is required"));
    }

    /**
     */
    public void setPortRanges(final @org.jetbrains.annotations.NotNull java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.ga.RosListener.PortRangesProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.ga.RosListener.PortRangesProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "portRanges", java.util.Objects.requireNonNull(value, "portRanges is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getProtocol() {
        return software.amazon.jsii.Kernel.get(this, "protocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setProtocol(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "protocol", java.util.Objects.requireNonNull(value, "protocol is required"));
    }

    /**
     */
    public void setProtocol(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "protocol", java.util.Objects.requireNonNull(value, "protocol is required"));
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
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.ga.RosListener.CertificatesProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.ga.RosListener.CertificatesProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "certificates", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getClientAffinity() {
        return software.amazon.jsii.Kernel.get(this, "clientAffinity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setClientAffinity(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "clientAffinity", value);
    }

    /**
     */
    public void setClientAffinity(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "clientAffinity", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "description", value);
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "description", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getName() {
        return software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "name", value);
    }

    /**
     */
    public void setName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "name", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getProxyProtocol() {
        return software.amazon.jsii.Kernel.get(this, "proxyProtocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setProxyProtocol(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "proxyProtocol", value);
    }

    /**
     */
    public void setProxyProtocol(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "proxyProtocol", value);
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
    public void setXForwardedForConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.ga.RosListener.XForwardedForConfigProperty value) {
        software.amazon.jsii.Kernel.set(this, "xForwardedForConfig", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ga.$Module.class, fqn = "@alicloud/ros-cdk-ga.RosListener.CertificatesProperty")
    @software.amazon.jsii.Jsii.Proxy(CertificatesProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface CertificatesProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getIdentity();

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
            java.lang.Object identity;

            /**
             * Sets the value of {@link CertificatesProperty#getIdentity}
             * @param identity the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder identity(java.lang.String identity) {
                this.identity = identity;
                return this;
            }

            /**
             * Sets the value of {@link CertificatesProperty#getIdentity}
             * @param identity the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder identity(com.aliyun.ros.cdk.core.IResolvable identity) {
                this.identity = identity;
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
            private final java.lang.Object identity;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.identity = software.amazon.jsii.Kernel.get(this, "identity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.identity = java.util.Objects.requireNonNull(builder.identity, "identity is required");
            }

            @Override
            public final java.lang.Object getIdentity() {
                return this.identity;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("identity", om.valueToTree(this.getIdentity()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ga.RosListener.CertificatesProperty"));
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

                return this.identity.equals(that.identity);
            }

            @Override
            public final int hashCode() {
                int result = this.identity.hashCode();
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ga.$Module.class, fqn = "@alicloud/ros-cdk-ga.RosListener.PortRangesProperty")
    @software.amazon.jsii.Jsii.Proxy(PortRangesProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface PortRangesProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getFromPort();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getToPort();

        /**
         * @return a {@link Builder} of {@link PortRangesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link PortRangesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<PortRangesProperty> {
            java.lang.Object fromPort;
            java.lang.Object toPort;

            /**
             * Sets the value of {@link PortRangesProperty#getFromPort}
             * @param fromPort the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder fromPort(java.lang.Number fromPort) {
                this.fromPort = fromPort;
                return this;
            }

            /**
             * Sets the value of {@link PortRangesProperty#getFromPort}
             * @param fromPort the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder fromPort(com.aliyun.ros.cdk.core.IResolvable fromPort) {
                this.fromPort = fromPort;
                return this;
            }

            /**
             * Sets the value of {@link PortRangesProperty#getToPort}
             * @param toPort the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder toPort(java.lang.Number toPort) {
                this.toPort = toPort;
                return this;
            }

            /**
             * Sets the value of {@link PortRangesProperty#getToPort}
             * @param toPort the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder toPort(com.aliyun.ros.cdk.core.IResolvable toPort) {
                this.toPort = toPort;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link PortRangesProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public PortRangesProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link PortRangesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements PortRangesProperty {
            private final java.lang.Object fromPort;
            private final java.lang.Object toPort;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.fromPort = software.amazon.jsii.Kernel.get(this, "fromPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.toPort = software.amazon.jsii.Kernel.get(this, "toPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.fromPort = java.util.Objects.requireNonNull(builder.fromPort, "fromPort is required");
                this.toPort = java.util.Objects.requireNonNull(builder.toPort, "toPort is required");
            }

            @Override
            public final java.lang.Object getFromPort() {
                return this.fromPort;
            }

            @Override
            public final java.lang.Object getToPort() {
                return this.toPort;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("fromPort", om.valueToTree(this.getFromPort()));
                data.set("toPort", om.valueToTree(this.getToPort()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ga.RosListener.PortRangesProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                PortRangesProperty.Jsii$Proxy that = (PortRangesProperty.Jsii$Proxy) o;

                if (!fromPort.equals(that.fromPort)) return false;
                return this.toPort.equals(that.toPort);
            }

            @Override
            public final int hashCode() {
                int result = this.fromPort.hashCode();
                result = 31 * result + (this.toPort.hashCode());
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ga.$Module.class, fqn = "@alicloud/ros-cdk-ga.RosListener.XForwardedForConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(XForwardedForConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface XForwardedForConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getXForwardedForGaApEnabled() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getXForwardedForGaIdEnabled() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getXForwardedForPortEnabled() {
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
        default @org.jetbrains.annotations.Nullable java.lang.Object getXRealIpEnabled() {
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
            java.lang.Object xForwardedForGaApEnabled;
            java.lang.Object xForwardedForGaIdEnabled;
            java.lang.Object xForwardedForPortEnabled;
            java.lang.Object xForwardedForProtoEnabled;
            java.lang.Object xRealIpEnabled;

            /**
             * Sets the value of {@link XForwardedForConfigProperty#getXForwardedForGaApEnabled}
             * @param xForwardedForGaApEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder xForwardedForGaApEnabled(java.lang.Boolean xForwardedForGaApEnabled) {
                this.xForwardedForGaApEnabled = xForwardedForGaApEnabled;
                return this;
            }

            /**
             * Sets the value of {@link XForwardedForConfigProperty#getXForwardedForGaApEnabled}
             * @param xForwardedForGaApEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder xForwardedForGaApEnabled(com.aliyun.ros.cdk.core.IResolvable xForwardedForGaApEnabled) {
                this.xForwardedForGaApEnabled = xForwardedForGaApEnabled;
                return this;
            }

            /**
             * Sets the value of {@link XForwardedForConfigProperty#getXForwardedForGaIdEnabled}
             * @param xForwardedForGaIdEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder xForwardedForGaIdEnabled(java.lang.Boolean xForwardedForGaIdEnabled) {
                this.xForwardedForGaIdEnabled = xForwardedForGaIdEnabled;
                return this;
            }

            /**
             * Sets the value of {@link XForwardedForConfigProperty#getXForwardedForGaIdEnabled}
             * @param xForwardedForGaIdEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder xForwardedForGaIdEnabled(com.aliyun.ros.cdk.core.IResolvable xForwardedForGaIdEnabled) {
                this.xForwardedForGaIdEnabled = xForwardedForGaIdEnabled;
                return this;
            }

            /**
             * Sets the value of {@link XForwardedForConfigProperty#getXForwardedForPortEnabled}
             * @param xForwardedForPortEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder xForwardedForPortEnabled(java.lang.Boolean xForwardedForPortEnabled) {
                this.xForwardedForPortEnabled = xForwardedForPortEnabled;
                return this;
            }

            /**
             * Sets the value of {@link XForwardedForConfigProperty#getXForwardedForPortEnabled}
             * @param xForwardedForPortEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder xForwardedForPortEnabled(com.aliyun.ros.cdk.core.IResolvable xForwardedForPortEnabled) {
                this.xForwardedForPortEnabled = xForwardedForPortEnabled;
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
             * Sets the value of {@link XForwardedForConfigProperty#getXRealIpEnabled}
             * @param xRealIpEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder xRealIpEnabled(java.lang.Boolean xRealIpEnabled) {
                this.xRealIpEnabled = xRealIpEnabled;
                return this;
            }

            /**
             * Sets the value of {@link XForwardedForConfigProperty#getXRealIpEnabled}
             * @param xRealIpEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder xRealIpEnabled(com.aliyun.ros.cdk.core.IResolvable xRealIpEnabled) {
                this.xRealIpEnabled = xRealIpEnabled;
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
            private final java.lang.Object xForwardedForGaApEnabled;
            private final java.lang.Object xForwardedForGaIdEnabled;
            private final java.lang.Object xForwardedForPortEnabled;
            private final java.lang.Object xForwardedForProtoEnabled;
            private final java.lang.Object xRealIpEnabled;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.xForwardedForGaApEnabled = software.amazon.jsii.Kernel.get(this, "xForwardedForGaApEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.xForwardedForGaIdEnabled = software.amazon.jsii.Kernel.get(this, "xForwardedForGaIdEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.xForwardedForPortEnabled = software.amazon.jsii.Kernel.get(this, "xForwardedForPortEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.xForwardedForProtoEnabled = software.amazon.jsii.Kernel.get(this, "xForwardedForProtoEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.xRealIpEnabled = software.amazon.jsii.Kernel.get(this, "xRealIpEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.xForwardedForGaApEnabled = builder.xForwardedForGaApEnabled;
                this.xForwardedForGaIdEnabled = builder.xForwardedForGaIdEnabled;
                this.xForwardedForPortEnabled = builder.xForwardedForPortEnabled;
                this.xForwardedForProtoEnabled = builder.xForwardedForProtoEnabled;
                this.xRealIpEnabled = builder.xRealIpEnabled;
            }

            @Override
            public final java.lang.Object getXForwardedForGaApEnabled() {
                return this.xForwardedForGaApEnabled;
            }

            @Override
            public final java.lang.Object getXForwardedForGaIdEnabled() {
                return this.xForwardedForGaIdEnabled;
            }

            @Override
            public final java.lang.Object getXForwardedForPortEnabled() {
                return this.xForwardedForPortEnabled;
            }

            @Override
            public final java.lang.Object getXForwardedForProtoEnabled() {
                return this.xForwardedForProtoEnabled;
            }

            @Override
            public final java.lang.Object getXRealIpEnabled() {
                return this.xRealIpEnabled;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getXForwardedForGaApEnabled() != null) {
                    data.set("xForwardedForGaApEnabled", om.valueToTree(this.getXForwardedForGaApEnabled()));
                }
                if (this.getXForwardedForGaIdEnabled() != null) {
                    data.set("xForwardedForGaIdEnabled", om.valueToTree(this.getXForwardedForGaIdEnabled()));
                }
                if (this.getXForwardedForPortEnabled() != null) {
                    data.set("xForwardedForPortEnabled", om.valueToTree(this.getXForwardedForPortEnabled()));
                }
                if (this.getXForwardedForProtoEnabled() != null) {
                    data.set("xForwardedForProtoEnabled", om.valueToTree(this.getXForwardedForProtoEnabled()));
                }
                if (this.getXRealIpEnabled() != null) {
                    data.set("xRealIpEnabled", om.valueToTree(this.getXRealIpEnabled()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ga.RosListener.XForwardedForConfigProperty"));
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

                if (this.xForwardedForGaApEnabled != null ? !this.xForwardedForGaApEnabled.equals(that.xForwardedForGaApEnabled) : that.xForwardedForGaApEnabled != null) return false;
                if (this.xForwardedForGaIdEnabled != null ? !this.xForwardedForGaIdEnabled.equals(that.xForwardedForGaIdEnabled) : that.xForwardedForGaIdEnabled != null) return false;
                if (this.xForwardedForPortEnabled != null ? !this.xForwardedForPortEnabled.equals(that.xForwardedForPortEnabled) : that.xForwardedForPortEnabled != null) return false;
                if (this.xForwardedForProtoEnabled != null ? !this.xForwardedForProtoEnabled.equals(that.xForwardedForProtoEnabled) : that.xForwardedForProtoEnabled != null) return false;
                return this.xRealIpEnabled != null ? this.xRealIpEnabled.equals(that.xRealIpEnabled) : that.xRealIpEnabled == null;
            }

            @Override
            public final int hashCode() {
                int result = this.xForwardedForGaApEnabled != null ? this.xForwardedForGaApEnabled.hashCode() : 0;
                result = 31 * result + (this.xForwardedForGaIdEnabled != null ? this.xForwardedForGaIdEnabled.hashCode() : 0);
                result = 31 * result + (this.xForwardedForPortEnabled != null ? this.xForwardedForPortEnabled.hashCode() : 0);
                result = 31 * result + (this.xForwardedForProtoEnabled != null ? this.xForwardedForProtoEnabled.hashCode() : 0);
                result = 31 * result + (this.xRealIpEnabled != null ? this.xRealIpEnabled.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ga.RosListener}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ga.RosListener> {
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
        private final com.aliyun.ros.cdk.ga.RosListenerProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ga.RosListenerProps.Builder();
        }

        /**
         * @return {@code this}
         * @param acceleratorId This parameter is required.
         */
        public Builder acceleratorId(final java.lang.String acceleratorId) {
            this.props.acceleratorId(acceleratorId);
            return this;
        }
        /**
         * @return {@code this}
         * @param acceleratorId This parameter is required.
         */
        public Builder acceleratorId(final com.aliyun.ros.cdk.core.IResolvable acceleratorId) {
            this.props.acceleratorId(acceleratorId);
            return this;
        }

        /**
         * @return {@code this}
         * @param portRanges This parameter is required.
         */
        public Builder portRanges(final com.aliyun.ros.cdk.core.IResolvable portRanges) {
            this.props.portRanges(portRanges);
            return this;
        }
        /**
         * @return {@code this}
         * @param portRanges This parameter is required.
         */
        public Builder portRanges(final java.util.List<? extends java.lang.Object> portRanges) {
            this.props.portRanges(portRanges);
            return this;
        }

        /**
         * @return {@code this}
         * @param protocol This parameter is required.
         */
        public Builder protocol(final java.lang.String protocol) {
            this.props.protocol(protocol);
            return this;
        }
        /**
         * @return {@code this}
         * @param protocol This parameter is required.
         */
        public Builder protocol(final com.aliyun.ros.cdk.core.IResolvable protocol) {
            this.props.protocol(protocol);
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
         * @param clientAffinity This parameter is required.
         */
        public Builder clientAffinity(final java.lang.String clientAffinity) {
            this.props.clientAffinity(clientAffinity);
            return this;
        }
        /**
         * @return {@code this}
         * @param clientAffinity This parameter is required.
         */
        public Builder clientAffinity(final com.aliyun.ros.cdk.core.IResolvable clientAffinity) {
            this.props.clientAffinity(clientAffinity);
            return this;
        }

        /**
         * @return {@code this}
         * @param description This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * @return {@code this}
         * @param description This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * @return {@code this}
         * @param name This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }
        /**
         * @return {@code this}
         * @param name This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props.name(name);
            return this;
        }

        /**
         * @return {@code this}
         * @param proxyProtocol This parameter is required.
         */
        public Builder proxyProtocol(final java.lang.Boolean proxyProtocol) {
            this.props.proxyProtocol(proxyProtocol);
            return this;
        }
        /**
         * @return {@code this}
         * @param proxyProtocol This parameter is required.
         */
        public Builder proxyProtocol(final com.aliyun.ros.cdk.core.IResolvable proxyProtocol) {
            this.props.proxyProtocol(proxyProtocol);
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
        public Builder xForwardedForConfig(final com.aliyun.ros.cdk.ga.RosListener.XForwardedForConfigProperty xForwardedForConfig) {
            this.props.xForwardedForConfig(xForwardedForConfig);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ga.RosListener}.
         */
        @Override
        public com.aliyun.ros.cdk.ga.RosListener build() {
            return new com.aliyun.ros.cdk.ga.RosListener(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
