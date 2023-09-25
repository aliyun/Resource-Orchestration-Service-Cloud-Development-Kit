package com.aliyun.ros.cdk.fc;

/**
 * A ROS template type:  <code>ALIYUN::FC::CustomDomain</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-25T05:23:25.466Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc.$Module.class, fqn = "@alicloud/ros-cdk-fc.RosCustomDomain")
public class RosCustomDomain extends com.aliyun.ros.cdk.core.RosResource {

    protected RosCustomDomain(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosCustomDomain(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.fc.RosCustomDomain.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new <code>ALIYUN::FC::CustomDomain</code>.
     * <p>
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosCustomDomain(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.fc.RosCustomDomainProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDomain() {
        return software.amazon.jsii.Kernel.get(this, "attrDomain", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDomainName() {
        return software.amazon.jsii.Kernel.get(this, "attrDomainName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getApiVersion() {
        return software.amazon.jsii.Kernel.get(this, "apiVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setApiVersion(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "apiVersion", value);
    }

    /**
     */
    public void setApiVersion(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "apiVersion", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCertConfig() {
        return software.amazon.jsii.Kernel.get(this, "certConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCertConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "certConfig", value);
    }

    /**
     */
    public void setCertConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.fc.RosCustomDomain.CertConfigProperty value) {
        software.amazon.jsii.Kernel.set(this, "certConfig", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRouteConfig() {
        return software.amazon.jsii.Kernel.get(this, "routeConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRouteConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "routeConfig", value);
    }

    /**
     */
    public void setRouteConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.fc.RosCustomDomain.RouteConfigProperty value) {
        software.amazon.jsii.Kernel.set(this, "routeConfig", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc.$Module.class, fqn = "@alicloud/ros-cdk-fc.RosCustomDomain.CertConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(CertConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface CertConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getCertificate();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getCertName();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getPrivateKey();

        /**
         * @return a {@link Builder} of {@link CertConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link CertConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<CertConfigProperty> {
            java.lang.Object certificate;
            java.lang.Object certName;
            java.lang.Object privateKey;

            /**
             * Sets the value of {@link CertConfigProperty#getCertificate}
             * @param certificate the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder certificate(java.lang.String certificate) {
                this.certificate = certificate;
                return this;
            }

            /**
             * Sets the value of {@link CertConfigProperty#getCertificate}
             * @param certificate the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder certificate(com.aliyun.ros.cdk.core.IResolvable certificate) {
                this.certificate = certificate;
                return this;
            }

            /**
             * Sets the value of {@link CertConfigProperty#getCertName}
             * @param certName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder certName(java.lang.String certName) {
                this.certName = certName;
                return this;
            }

            /**
             * Sets the value of {@link CertConfigProperty#getCertName}
             * @param certName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder certName(com.aliyun.ros.cdk.core.IResolvable certName) {
                this.certName = certName;
                return this;
            }

            /**
             * Sets the value of {@link CertConfigProperty#getPrivateKey}
             * @param privateKey the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder privateKey(java.lang.String privateKey) {
                this.privateKey = privateKey;
                return this;
            }

            /**
             * Sets the value of {@link CertConfigProperty#getPrivateKey}
             * @param privateKey the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder privateKey(com.aliyun.ros.cdk.core.IResolvable privateKey) {
                this.privateKey = privateKey;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link CertConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public CertConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link CertConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements CertConfigProperty {
            private final java.lang.Object certificate;
            private final java.lang.Object certName;
            private final java.lang.Object privateKey;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.certificate = software.amazon.jsii.Kernel.get(this, "certificate", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.certName = software.amazon.jsii.Kernel.get(this, "certName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.privateKey = software.amazon.jsii.Kernel.get(this, "privateKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.certificate = java.util.Objects.requireNonNull(builder.certificate, "certificate is required");
                this.certName = java.util.Objects.requireNonNull(builder.certName, "certName is required");
                this.privateKey = java.util.Objects.requireNonNull(builder.privateKey, "privateKey is required");
            }

            @Override
            public final java.lang.Object getCertificate() {
                return this.certificate;
            }

            @Override
            public final java.lang.Object getCertName() {
                return this.certName;
            }

            @Override
            public final java.lang.Object getPrivateKey() {
                return this.privateKey;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("certificate", om.valueToTree(this.getCertificate()));
                data.set("certName", om.valueToTree(this.getCertName()));
                data.set("privateKey", om.valueToTree(this.getPrivateKey()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-fc.RosCustomDomain.CertConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                CertConfigProperty.Jsii$Proxy that = (CertConfigProperty.Jsii$Proxy) o;

                if (!certificate.equals(that.certificate)) return false;
                if (!certName.equals(that.certName)) return false;
                return this.privateKey.equals(that.privateKey);
            }

            @Override
            public final int hashCode() {
                int result = this.certificate.hashCode();
                result = 31 * result + (this.certName.hashCode());
                result = 31 * result + (this.privateKey.hashCode());
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc.$Module.class, fqn = "@alicloud/ros-cdk-fc.RosCustomDomain.RouteConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(RouteConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface RouteConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getRoutes();

        /**
         * @return a {@link Builder} of {@link RouteConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link RouteConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<RouteConfigProperty> {
            java.lang.Object routes;

            /**
             * Sets the value of {@link RouteConfigProperty#getRoutes}
             * @param routes the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder routes(com.aliyun.ros.cdk.core.IResolvable routes) {
                this.routes = routes;
                return this;
            }

            /**
             * Sets the value of {@link RouteConfigProperty#getRoutes}
             * @param routes the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder routes(java.util.List<? extends java.lang.Object> routes) {
                this.routes = routes;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link RouteConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public RouteConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link RouteConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RouteConfigProperty {
            private final java.lang.Object routes;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.routes = software.amazon.jsii.Kernel.get(this, "routes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.routes = java.util.Objects.requireNonNull(builder.routes, "routes is required");
            }

            @Override
            public final java.lang.Object getRoutes() {
                return this.routes;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("routes", om.valueToTree(this.getRoutes()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-fc.RosCustomDomain.RouteConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                RouteConfigProperty.Jsii$Proxy that = (RouteConfigProperty.Jsii$Proxy) o;

                return this.routes.equals(that.routes);
            }

            @Override
            public final int hashCode() {
                int result = this.routes.hashCode();
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc.$Module.class, fqn = "@alicloud/ros-cdk-fc.RosCustomDomain.RoutesProperty")
    @software.amazon.jsii.Jsii.Proxy(RoutesProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface RoutesProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getFunctionName();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getPath();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getServiceName();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getQualifier() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link RoutesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link RoutesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<RoutesProperty> {
            java.lang.Object functionName;
            java.lang.Object path;
            java.lang.Object serviceName;
            java.lang.Object qualifier;

            /**
             * Sets the value of {@link RoutesProperty#getFunctionName}
             * @param functionName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder functionName(java.lang.String functionName) {
                this.functionName = functionName;
                return this;
            }

            /**
             * Sets the value of {@link RoutesProperty#getFunctionName}
             * @param functionName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder functionName(com.aliyun.ros.cdk.core.IResolvable functionName) {
                this.functionName = functionName;
                return this;
            }

            /**
             * Sets the value of {@link RoutesProperty#getPath}
             * @param path the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder path(java.lang.String path) {
                this.path = path;
                return this;
            }

            /**
             * Sets the value of {@link RoutesProperty#getPath}
             * @param path the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder path(com.aliyun.ros.cdk.core.IResolvable path) {
                this.path = path;
                return this;
            }

            /**
             * Sets the value of {@link RoutesProperty#getServiceName}
             * @param serviceName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serviceName(java.lang.String serviceName) {
                this.serviceName = serviceName;
                return this;
            }

            /**
             * Sets the value of {@link RoutesProperty#getServiceName}
             * @param serviceName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serviceName(com.aliyun.ros.cdk.core.IResolvable serviceName) {
                this.serviceName = serviceName;
                return this;
            }

            /**
             * Sets the value of {@link RoutesProperty#getQualifier}
             * @param qualifier the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder qualifier(java.lang.String qualifier) {
                this.qualifier = qualifier;
                return this;
            }

            /**
             * Sets the value of {@link RoutesProperty#getQualifier}
             * @param qualifier the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder qualifier(com.aliyun.ros.cdk.core.IResolvable qualifier) {
                this.qualifier = qualifier;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link RoutesProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public RoutesProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link RoutesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RoutesProperty {
            private final java.lang.Object functionName;
            private final java.lang.Object path;
            private final java.lang.Object serviceName;
            private final java.lang.Object qualifier;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.functionName = software.amazon.jsii.Kernel.get(this, "functionName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.path = software.amazon.jsii.Kernel.get(this, "path", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.serviceName = software.amazon.jsii.Kernel.get(this, "serviceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.qualifier = software.amazon.jsii.Kernel.get(this, "qualifier", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.functionName = java.util.Objects.requireNonNull(builder.functionName, "functionName is required");
                this.path = java.util.Objects.requireNonNull(builder.path, "path is required");
                this.serviceName = java.util.Objects.requireNonNull(builder.serviceName, "serviceName is required");
                this.qualifier = builder.qualifier;
            }

            @Override
            public final java.lang.Object getFunctionName() {
                return this.functionName;
            }

            @Override
            public final java.lang.Object getPath() {
                return this.path;
            }

            @Override
            public final java.lang.Object getServiceName() {
                return this.serviceName;
            }

            @Override
            public final java.lang.Object getQualifier() {
                return this.qualifier;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("functionName", om.valueToTree(this.getFunctionName()));
                data.set("path", om.valueToTree(this.getPath()));
                data.set("serviceName", om.valueToTree(this.getServiceName()));
                if (this.getQualifier() != null) {
                    data.set("qualifier", om.valueToTree(this.getQualifier()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-fc.RosCustomDomain.RoutesProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                RoutesProperty.Jsii$Proxy that = (RoutesProperty.Jsii$Proxy) o;

                if (!functionName.equals(that.functionName)) return false;
                if (!path.equals(that.path)) return false;
                if (!serviceName.equals(that.serviceName)) return false;
                return this.qualifier != null ? this.qualifier.equals(that.qualifier) : that.qualifier == null;
            }

            @Override
            public final int hashCode() {
                int result = this.functionName.hashCode();
                result = 31 * result + (this.path.hashCode());
                result = 31 * result + (this.serviceName.hashCode());
                result = 31 * result + (this.qualifier != null ? this.qualifier.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.fc.RosCustomDomain}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.fc.RosCustomDomain> {
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
        private final com.aliyun.ros.cdk.fc.RosCustomDomainProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.fc.RosCustomDomainProps.Builder();
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
         * @param apiVersion This parameter is required.
         */
        public Builder apiVersion(final java.lang.String apiVersion) {
            this.props.apiVersion(apiVersion);
            return this;
        }
        /**
         * @return {@code this}
         * @param apiVersion This parameter is required.
         */
        public Builder apiVersion(final com.aliyun.ros.cdk.core.IResolvable apiVersion) {
            this.props.apiVersion(apiVersion);
            return this;
        }

        /**
         * @return {@code this}
         * @param certConfig This parameter is required.
         */
        public Builder certConfig(final com.aliyun.ros.cdk.core.IResolvable certConfig) {
            this.props.certConfig(certConfig);
            return this;
        }
        /**
         * @return {@code this}
         * @param certConfig This parameter is required.
         */
        public Builder certConfig(final com.aliyun.ros.cdk.fc.RosCustomDomain.CertConfigProperty certConfig) {
            this.props.certConfig(certConfig);
            return this;
        }

        /**
         * @return {@code this}
         * @param routeConfig This parameter is required.
         */
        public Builder routeConfig(final com.aliyun.ros.cdk.core.IResolvable routeConfig) {
            this.props.routeConfig(routeConfig);
            return this;
        }
        /**
         * @return {@code this}
         * @param routeConfig This parameter is required.
         */
        public Builder routeConfig(final com.aliyun.ros.cdk.fc.RosCustomDomain.RouteConfigProperty routeConfig) {
            this.props.routeConfig(routeConfig);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.fc.RosCustomDomain}.
         */
        @Override
        public com.aliyun.ros.cdk.fc.RosCustomDomain build() {
            return new com.aliyun.ros.cdk.fc.RosCustomDomain(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
