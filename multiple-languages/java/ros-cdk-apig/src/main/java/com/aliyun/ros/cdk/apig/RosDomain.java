package com.aliyun.ros.cdk.apig;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::APIG::Domain</code>, which is used to create a domain name.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:01.650Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.RosDomain")
public class RosDomain extends com.aliyun.ros.cdk.core.RosResource {

    protected RosDomain(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosDomain(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.apig.RosDomain.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosDomain(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apig.RosDomainProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCertIdentifier() {
        return software.amazon.jsii.Kernel.get(this, "attrCertIdentifier", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDomainId() {
        return software.amazon.jsii.Kernel.get(this, "attrDomainId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDomainName() {
        return software.amazon.jsii.Kernel.get(this, "attrDomainName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrForceHttps() {
        return software.amazon.jsii.Kernel.get(this, "attrForceHttps", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrHttp2Option() {
        return software.amazon.jsii.Kernel.get(this, "attrHttp2Option", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrProtocol() {
        return software.amazon.jsii.Kernel.get(this, "attrProtocol", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrResourceGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTlsCipherSuitesConfig() {
        return software.amazon.jsii.Kernel.get(this, "attrTlsCipherSuitesConfig", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTlsMax() {
        return software.amazon.jsii.Kernel.get(this, "attrTlsMax", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTlsMin() {
        return software.amazon.jsii.Kernel.get(this, "attrTlsMin", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDomainName() {
        return software.amazon.jsii.Kernel.get(this, "domainName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDomainName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "domainName", java.util.Objects.requireNonNull(value, "domainName is required"));
    }

    /**
     */
    public void setDomainName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "domainName", java.util.Objects.requireNonNull(value, "domainName is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getForceHttps() {
        return software.amazon.jsii.Kernel.get(this, "forceHttps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setForceHttps(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "forceHttps", value);
    }

    /**
     */
    public void setForceHttps(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "forceHttps", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getHttp2Option() {
        return software.amazon.jsii.Kernel.get(this, "http2Option", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setHttp2Option(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "http2Option", value);
    }

    /**
     */
    public void setHttp2Option(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "http2Option", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setResourceGroupId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "resourceGroupId", value);
    }

    /**
     */
    public void setResourceGroupId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "resourceGroupId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTlsCipherSuitesConfig() {
        return software.amazon.jsii.Kernel.get(this, "tlsCipherSuitesConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTlsCipherSuitesConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "tlsCipherSuitesConfig", value);
    }

    /**
     */
    public void setTlsCipherSuitesConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.apig.RosDomain.TlsCipherSuitesConfigProperty value) {
        software.amazon.jsii.Kernel.set(this, "tlsCipherSuitesConfig", value);
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
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.RosDomain.TlsCipherSuiteProperty")
    @software.amazon.jsii.Jsii.Proxy(TlsCipherSuiteProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface TlsCipherSuiteProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getName() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link TlsCipherSuiteProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link TlsCipherSuiteProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<TlsCipherSuiteProperty> {
            java.lang.Object name;

            /**
             * Sets the value of {@link TlsCipherSuiteProperty#getName}
             * @param name the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(java.lang.String name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link TlsCipherSuiteProperty#getName}
             * @param name the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
                this.name = name;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link TlsCipherSuiteProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public TlsCipherSuiteProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link TlsCipherSuiteProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements TlsCipherSuiteProperty {
            private final java.lang.Object name;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.name = builder.name;
            }

            @Override
            public final java.lang.Object getName() {
                return this.name;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getName() != null) {
                    data.set("name", om.valueToTree(this.getName()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apig.RosDomain.TlsCipherSuiteProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                TlsCipherSuiteProperty.Jsii$Proxy that = (TlsCipherSuiteProperty.Jsii$Proxy) o;

                return this.name != null ? this.name.equals(that.name) : that.name == null;
            }

            @Override
            public final int hashCode() {
                int result = this.name != null ? this.name.hashCode() : 0;
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.RosDomain.TlsCipherSuitesConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(TlsCipherSuitesConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface TlsCipherSuitesConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getConfigType() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getTlsCipherSuite() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link TlsCipherSuitesConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link TlsCipherSuitesConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<TlsCipherSuitesConfigProperty> {
            java.lang.Object configType;
            java.lang.Object tlsCipherSuite;

            /**
             * Sets the value of {@link TlsCipherSuitesConfigProperty#getConfigType}
             * @param configType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder configType(java.lang.String configType) {
                this.configType = configType;
                return this;
            }

            /**
             * Sets the value of {@link TlsCipherSuitesConfigProperty#getConfigType}
             * @param configType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder configType(com.aliyun.ros.cdk.core.IResolvable configType) {
                this.configType = configType;
                return this;
            }

            /**
             * Sets the value of {@link TlsCipherSuitesConfigProperty#getTlsCipherSuite}
             * @param tlsCipherSuite the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder tlsCipherSuite(com.aliyun.ros.cdk.core.IResolvable tlsCipherSuite) {
                this.tlsCipherSuite = tlsCipherSuite;
                return this;
            }

            /**
             * Sets the value of {@link TlsCipherSuitesConfigProperty#getTlsCipherSuite}
             * @param tlsCipherSuite the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder tlsCipherSuite(java.util.List<? extends java.lang.Object> tlsCipherSuite) {
                this.tlsCipherSuite = tlsCipherSuite;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link TlsCipherSuitesConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public TlsCipherSuitesConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link TlsCipherSuitesConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements TlsCipherSuitesConfigProperty {
            private final java.lang.Object configType;
            private final java.lang.Object tlsCipherSuite;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.configType = software.amazon.jsii.Kernel.get(this, "configType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.tlsCipherSuite = software.amazon.jsii.Kernel.get(this, "tlsCipherSuite", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.configType = builder.configType;
                this.tlsCipherSuite = builder.tlsCipherSuite;
            }

            @Override
            public final java.lang.Object getConfigType() {
                return this.configType;
            }

            @Override
            public final java.lang.Object getTlsCipherSuite() {
                return this.tlsCipherSuite;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getConfigType() != null) {
                    data.set("configType", om.valueToTree(this.getConfigType()));
                }
                if (this.getTlsCipherSuite() != null) {
                    data.set("tlsCipherSuite", om.valueToTree(this.getTlsCipherSuite()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apig.RosDomain.TlsCipherSuitesConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                TlsCipherSuitesConfigProperty.Jsii$Proxy that = (TlsCipherSuitesConfigProperty.Jsii$Proxy) o;

                if (this.configType != null ? !this.configType.equals(that.configType) : that.configType != null) return false;
                return this.tlsCipherSuite != null ? this.tlsCipherSuite.equals(that.tlsCipherSuite) : that.tlsCipherSuite == null;
            }

            @Override
            public final int hashCode() {
                int result = this.configType != null ? this.configType.hashCode() : 0;
                result = 31 * result + (this.tlsCipherSuite != null ? this.tlsCipherSuite.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.apig.RosDomain}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.apig.RosDomain> {
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
        private final com.aliyun.ros.cdk.apig.RosDomainProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.apig.RosDomainProps.Builder();
        }

        /**
         * @return {@code this}
         * @param domainName This parameter is required.
         */
        public Builder domainName(final java.lang.String domainName) {
            this.props.domainName(domainName);
            return this;
        }
        /**
         * @return {@code this}
         * @param domainName This parameter is required.
         */
        public Builder domainName(final com.aliyun.ros.cdk.core.IResolvable domainName) {
            this.props.domainName(domainName);
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
         * @param forceHttps This parameter is required.
         */
        public Builder forceHttps(final java.lang.Boolean forceHttps) {
            this.props.forceHttps(forceHttps);
            return this;
        }
        /**
         * @return {@code this}
         * @param forceHttps This parameter is required.
         */
        public Builder forceHttps(final com.aliyun.ros.cdk.core.IResolvable forceHttps) {
            this.props.forceHttps(forceHttps);
            return this;
        }

        /**
         * @return {@code this}
         * @param http2Option This parameter is required.
         */
        public Builder http2Option(final java.lang.String http2Option) {
            this.props.http2Option(http2Option);
            return this;
        }
        /**
         * @return {@code this}
         * @param http2Option This parameter is required.
         */
        public Builder http2Option(final com.aliyun.ros.cdk.core.IResolvable http2Option) {
            this.props.http2Option(http2Option);
            return this;
        }

        /**
         * @return {@code this}
         * @param resourceGroupId This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * @return {@code this}
         * @param resourceGroupId This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * @return {@code this}
         * @param tlsCipherSuitesConfig This parameter is required.
         */
        public Builder tlsCipherSuitesConfig(final com.aliyun.ros.cdk.core.IResolvable tlsCipherSuitesConfig) {
            this.props.tlsCipherSuitesConfig(tlsCipherSuitesConfig);
            return this;
        }
        /**
         * @return {@code this}
         * @param tlsCipherSuitesConfig This parameter is required.
         */
        public Builder tlsCipherSuitesConfig(final com.aliyun.ros.cdk.apig.RosDomain.TlsCipherSuitesConfigProperty tlsCipherSuitesConfig) {
            this.props.tlsCipherSuitesConfig(tlsCipherSuitesConfig);
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
         * @return a newly built instance of {@link com.aliyun.ros.cdk.apig.RosDomain}.
         */
        @Override
        public com.aliyun.ros.cdk.apig.RosDomain build() {
            return new com.aliyun.ros.cdk.apig.RosDomain(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
