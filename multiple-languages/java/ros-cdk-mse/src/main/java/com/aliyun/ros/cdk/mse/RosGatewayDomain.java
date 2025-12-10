package com.aliyun.ros.cdk.mse;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::MSE::GatewayDomain</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:58.258Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mse.$Module.class, fqn = "@alicloud/ros-cdk-mse.RosGatewayDomain")
public class RosGatewayDomain extends com.aliyun.ros.cdk.core.RosResource {

    protected RosGatewayDomain(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosGatewayDomain(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.mse.RosGatewayDomain.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosGatewayDomain(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mse.RosGatewayDomainProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDomainId() {
        return software.amazon.jsii.Kernel.get(this, "attrDomainId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getGatewayUniqueId() {
        return software.amazon.jsii.Kernel.get(this, "gatewayUniqueId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setGatewayUniqueId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "gatewayUniqueId", java.util.Objects.requireNonNull(value, "gatewayUniqueId is required"));
    }

    /**
     */
    public void setGatewayUniqueId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "gatewayUniqueId", java.util.Objects.requireNonNull(value, "gatewayUniqueId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getName() {
        return software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "name", java.util.Objects.requireNonNull(value, "name is required"));
    }

    /**
     */
    public void setName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "name", java.util.Objects.requireNonNull(value, "name is required"));
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getCertIdentifier() {
        return software.amazon.jsii.Kernel.get(this, "certIdentifier", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCertIdentifier(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "certIdentifier", value);
    }

    /**
     */
    public void setCertIdentifier(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "certIdentifier", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getHttp2() {
        return software.amazon.jsii.Kernel.get(this, "http2", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setHttp2(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "http2", value);
    }

    /**
     */
    public void setHttp2(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "http2", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMustHttps() {
        return software.amazon.jsii.Kernel.get(this, "mustHttps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMustHttps(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "mustHttps", value);
    }

    /**
     */
    public void setMustHttps(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "mustHttps", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTlsCipherSuitesConfigJson() {
        return software.amazon.jsii.Kernel.get(this, "tlsCipherSuitesConfigJson", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTlsCipherSuitesConfigJson(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "tlsCipherSuitesConfigJson", value);
    }

    /**
     */
    public void setTlsCipherSuitesConfigJson(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.mse.RosGatewayDomain.TlsCipherSuitesConfigJSONProperty value) {
        software.amazon.jsii.Kernel.set(this, "tlsCipherSuitesConfigJson", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTlsMax() {
        return software.amazon.jsii.Kernel.get(this, "tlsMax", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTlsMax(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "tlsMax", value);
    }

    /**
     */
    public void setTlsMax(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "tlsMax", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTlsMin() {
        return software.amazon.jsii.Kernel.get(this, "tlsMin", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTlsMin(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "tlsMin", value);
    }

    /**
     */
    public void setTlsMin(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "tlsMin", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mse.$Module.class, fqn = "@alicloud/ros-cdk-mse.RosGatewayDomain.TlsCipherSuitesConfigJSONProperty")
    @software.amazon.jsii.Jsii.Proxy(TlsCipherSuitesConfigJSONProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface TlsCipherSuitesConfigJSONProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getConfigType() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getTlsCipherSuites() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link TlsCipherSuitesConfigJSONProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link TlsCipherSuitesConfigJSONProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<TlsCipherSuitesConfigJSONProperty> {
            java.lang.Object configType;
            java.lang.Object tlsCipherSuites;

            /**
             * Sets the value of {@link TlsCipherSuitesConfigJSONProperty#getConfigType}
             * @param configType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder configType(java.lang.String configType) {
                this.configType = configType;
                return this;
            }

            /**
             * Sets the value of {@link TlsCipherSuitesConfigJSONProperty#getConfigType}
             * @param configType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder configType(com.aliyun.ros.cdk.core.IResolvable configType) {
                this.configType = configType;
                return this;
            }

            /**
             * Sets the value of {@link TlsCipherSuitesConfigJSONProperty#getTlsCipherSuites}
             * @param tlsCipherSuites the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder tlsCipherSuites(com.aliyun.ros.cdk.core.IResolvable tlsCipherSuites) {
                this.tlsCipherSuites = tlsCipherSuites;
                return this;
            }

            /**
             * Sets the value of {@link TlsCipherSuitesConfigJSONProperty#getTlsCipherSuites}
             * @param tlsCipherSuites the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder tlsCipherSuites(java.util.List<? extends java.lang.Object> tlsCipherSuites) {
                this.tlsCipherSuites = tlsCipherSuites;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link TlsCipherSuitesConfigJSONProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public TlsCipherSuitesConfigJSONProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link TlsCipherSuitesConfigJSONProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements TlsCipherSuitesConfigJSONProperty {
            private final java.lang.Object configType;
            private final java.lang.Object tlsCipherSuites;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.configType = software.amazon.jsii.Kernel.get(this, "configType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.tlsCipherSuites = software.amazon.jsii.Kernel.get(this, "tlsCipherSuites", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.configType = builder.configType;
                this.tlsCipherSuites = builder.tlsCipherSuites;
            }

            @Override
            public final java.lang.Object getConfigType() {
                return this.configType;
            }

            @Override
            public final java.lang.Object getTlsCipherSuites() {
                return this.tlsCipherSuites;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getConfigType() != null) {
                    data.set("configType", om.valueToTree(this.getConfigType()));
                }
                if (this.getTlsCipherSuites() != null) {
                    data.set("tlsCipherSuites", om.valueToTree(this.getTlsCipherSuites()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-mse.RosGatewayDomain.TlsCipherSuitesConfigJSONProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                TlsCipherSuitesConfigJSONProperty.Jsii$Proxy that = (TlsCipherSuitesConfigJSONProperty.Jsii$Proxy) o;

                if (this.configType != null ? !this.configType.equals(that.configType) : that.configType != null) return false;
                return this.tlsCipherSuites != null ? this.tlsCipherSuites.equals(that.tlsCipherSuites) : that.tlsCipherSuites == null;
            }

            @Override
            public final int hashCode() {
                int result = this.configType != null ? this.configType.hashCode() : 0;
                result = 31 * result + (this.tlsCipherSuites != null ? this.tlsCipherSuites.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.mse.RosGatewayDomain}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.mse.RosGatewayDomain> {
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
        private final com.aliyun.ros.cdk.mse.RosGatewayDomainProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.mse.RosGatewayDomainProps.Builder();
        }

        /**
         * @return {@code this}
         * @param gatewayUniqueId This parameter is required.
         */
        public Builder gatewayUniqueId(final java.lang.String gatewayUniqueId) {
            this.props.gatewayUniqueId(gatewayUniqueId);
            return this;
        }
        /**
         * @return {@code this}
         * @param gatewayUniqueId This parameter is required.
         */
        public Builder gatewayUniqueId(final com.aliyun.ros.cdk.core.IResolvable gatewayUniqueId) {
            this.props.gatewayUniqueId(gatewayUniqueId);
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
         * @param certIdentifier This parameter is required.
         */
        public Builder certIdentifier(final java.lang.String certIdentifier) {
            this.props.certIdentifier(certIdentifier);
            return this;
        }
        /**
         * @return {@code this}
         * @param certIdentifier This parameter is required.
         */
        public Builder certIdentifier(final com.aliyun.ros.cdk.core.IResolvable certIdentifier) {
            this.props.certIdentifier(certIdentifier);
            return this;
        }

        /**
         * @return {@code this}
         * @param http2 This parameter is required.
         */
        public Builder http2(final java.lang.String http2) {
            this.props.http2(http2);
            return this;
        }
        /**
         * @return {@code this}
         * @param http2 This parameter is required.
         */
        public Builder http2(final com.aliyun.ros.cdk.core.IResolvable http2) {
            this.props.http2(http2);
            return this;
        }

        /**
         * @return {@code this}
         * @param mustHttps This parameter is required.
         */
        public Builder mustHttps(final java.lang.Boolean mustHttps) {
            this.props.mustHttps(mustHttps);
            return this;
        }
        /**
         * @return {@code this}
         * @param mustHttps This parameter is required.
         */
        public Builder mustHttps(final com.aliyun.ros.cdk.core.IResolvable mustHttps) {
            this.props.mustHttps(mustHttps);
            return this;
        }

        /**
         * @return {@code this}
         * @param tlsCipherSuitesConfigJson This parameter is required.
         */
        public Builder tlsCipherSuitesConfigJson(final com.aliyun.ros.cdk.core.IResolvable tlsCipherSuitesConfigJson) {
            this.props.tlsCipherSuitesConfigJson(tlsCipherSuitesConfigJson);
            return this;
        }
        /**
         * @return {@code this}
         * @param tlsCipherSuitesConfigJson This parameter is required.
         */
        public Builder tlsCipherSuitesConfigJson(final com.aliyun.ros.cdk.mse.RosGatewayDomain.TlsCipherSuitesConfigJSONProperty tlsCipherSuitesConfigJson) {
            this.props.tlsCipherSuitesConfigJson(tlsCipherSuitesConfigJson);
            return this;
        }

        /**
         * @return {@code this}
         * @param tlsMax This parameter is required.
         */
        public Builder tlsMax(final java.lang.String tlsMax) {
            this.props.tlsMax(tlsMax);
            return this;
        }
        /**
         * @return {@code this}
         * @param tlsMax This parameter is required.
         */
        public Builder tlsMax(final com.aliyun.ros.cdk.core.IResolvable tlsMax) {
            this.props.tlsMax(tlsMax);
            return this;
        }

        /**
         * @return {@code this}
         * @param tlsMin This parameter is required.
         */
        public Builder tlsMin(final java.lang.String tlsMin) {
            this.props.tlsMin(tlsMin);
            return this;
        }
        /**
         * @return {@code this}
         * @param tlsMin This parameter is required.
         */
        public Builder tlsMin(final com.aliyun.ros.cdk.core.IResolvable tlsMin) {
            this.props.tlsMin(tlsMin);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.mse.RosGatewayDomain}.
         */
        @Override
        public com.aliyun.ros.cdk.mse.RosGatewayDomain build() {
            return new com.aliyun.ros.cdk.mse.RosGatewayDomain(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
