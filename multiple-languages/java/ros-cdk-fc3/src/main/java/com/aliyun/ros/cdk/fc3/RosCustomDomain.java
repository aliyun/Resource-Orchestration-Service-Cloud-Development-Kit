package com.aliyun.ros.cdk.fc3;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::FC3::CustomDomain</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:57.048Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc3.$Module.class, fqn = "@alicloud/ros-cdk-fc3.RosCustomDomain")
public class RosCustomDomain extends com.aliyun.ros.cdk.core.RosResource {

    protected RosCustomDomain(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosCustomDomain(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.fc3.RosCustomDomain.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosCustomDomain(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.fc3.RosCustomDomainProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDomainName() {
        return software.amazon.jsii.Kernel.get(this, "attrDomainName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAuthConfig() {
        return software.amazon.jsii.Kernel.get(this, "authConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAuthConfig(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "authConfig", java.util.Objects.requireNonNull(value, "authConfig is required"));
    }

    /**
     */
    public void setAuthConfig(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.fc3.RosCustomDomain.AuthConfigProperty value) {
        software.amazon.jsii.Kernel.set(this, "authConfig", java.util.Objects.requireNonNull(value, "authConfig is required"));
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
    public void setCertConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.fc3.RosCustomDomain.CertConfigProperty value) {
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
    public void setRouteConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.fc3.RosCustomDomain.RouteConfigProperty value) {
        software.amazon.jsii.Kernel.set(this, "routeConfig", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTlsConfig() {
        return software.amazon.jsii.Kernel.get(this, "tlsConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTlsConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "tlsConfig", value);
    }

    /**
     */
    public void setTlsConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.fc3.RosCustomDomain.TlsConfigProperty value) {
        software.amazon.jsii.Kernel.set(this, "tlsConfig", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getWafConfig() {
        return software.amazon.jsii.Kernel.get(this, "wafConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setWafConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "wafConfig", value);
    }

    /**
     */
    public void setWafConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.fc3.RosCustomDomain.WafConfigProperty value) {
        software.amazon.jsii.Kernel.set(this, "wafConfig", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc3.$Module.class, fqn = "@alicloud/ros-cdk-fc3.RosCustomDomain.AuthConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(AuthConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface AuthConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getAuthType();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAuthInfo() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link AuthConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link AuthConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<AuthConfigProperty> {
            java.lang.Object authType;
            java.lang.Object authInfo;

            /**
             * Sets the value of {@link AuthConfigProperty#getAuthType}
             * @param authType the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder authType(java.lang.String authType) {
                this.authType = authType;
                return this;
            }

            /**
             * Sets the value of {@link AuthConfigProperty#getAuthType}
             * @param authType the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder authType(com.aliyun.ros.cdk.core.IResolvable authType) {
                this.authType = authType;
                return this;
            }

            /**
             * Sets the value of {@link AuthConfigProperty#getAuthInfo}
             * @param authInfo the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder authInfo(java.lang.String authInfo) {
                this.authInfo = authInfo;
                return this;
            }

            /**
             * Sets the value of {@link AuthConfigProperty#getAuthInfo}
             * @param authInfo the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder authInfo(com.aliyun.ros.cdk.core.IResolvable authInfo) {
                this.authInfo = authInfo;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link AuthConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public AuthConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link AuthConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AuthConfigProperty {
            private final java.lang.Object authType;
            private final java.lang.Object authInfo;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.authType = software.amazon.jsii.Kernel.get(this, "authType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.authInfo = software.amazon.jsii.Kernel.get(this, "authInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.authType = java.util.Objects.requireNonNull(builder.authType, "authType is required");
                this.authInfo = builder.authInfo;
            }

            @Override
            public final java.lang.Object getAuthType() {
                return this.authType;
            }

            @Override
            public final java.lang.Object getAuthInfo() {
                return this.authInfo;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("authType", om.valueToTree(this.getAuthType()));
                if (this.getAuthInfo() != null) {
                    data.set("authInfo", om.valueToTree(this.getAuthInfo()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-fc3.RosCustomDomain.AuthConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                AuthConfigProperty.Jsii$Proxy that = (AuthConfigProperty.Jsii$Proxy) o;

                if (!authType.equals(that.authType)) return false;
                return this.authInfo != null ? this.authInfo.equals(that.authInfo) : that.authInfo == null;
            }

            @Override
            public final int hashCode() {
                int result = this.authType.hashCode();
                result = 31 * result + (this.authInfo != null ? this.authInfo.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc3.$Module.class, fqn = "@alicloud/ros-cdk-fc3.RosCustomDomain.CertConfigProperty")
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
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-fc3.RosCustomDomain.CertConfigProperty"));
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
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc3.$Module.class, fqn = "@alicloud/ros-cdk-fc3.RosCustomDomain.EqualRulesProperty")
    @software.amazon.jsii.Jsii.Proxy(EqualRulesProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface EqualRulesProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getMatch();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getReplacement();

        /**
         * @return a {@link Builder} of {@link EqualRulesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link EqualRulesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<EqualRulesProperty> {
            java.lang.Object match;
            java.lang.Object replacement;

            /**
             * Sets the value of {@link EqualRulesProperty#getMatch}
             * @param match the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder match(java.lang.String match) {
                this.match = match;
                return this;
            }

            /**
             * Sets the value of {@link EqualRulesProperty#getMatch}
             * @param match the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder match(com.aliyun.ros.cdk.core.IResolvable match) {
                this.match = match;
                return this;
            }

            /**
             * Sets the value of {@link EqualRulesProperty#getReplacement}
             * @param replacement the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder replacement(java.lang.String replacement) {
                this.replacement = replacement;
                return this;
            }

            /**
             * Sets the value of {@link EqualRulesProperty#getReplacement}
             * @param replacement the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder replacement(com.aliyun.ros.cdk.core.IResolvable replacement) {
                this.replacement = replacement;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link EqualRulesProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public EqualRulesProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link EqualRulesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements EqualRulesProperty {
            private final java.lang.Object match;
            private final java.lang.Object replacement;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.match = software.amazon.jsii.Kernel.get(this, "match", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.replacement = software.amazon.jsii.Kernel.get(this, "replacement", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.match = java.util.Objects.requireNonNull(builder.match, "match is required");
                this.replacement = java.util.Objects.requireNonNull(builder.replacement, "replacement is required");
            }

            @Override
            public final java.lang.Object getMatch() {
                return this.match;
            }

            @Override
            public final java.lang.Object getReplacement() {
                return this.replacement;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("match", om.valueToTree(this.getMatch()));
                data.set("replacement", om.valueToTree(this.getReplacement()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-fc3.RosCustomDomain.EqualRulesProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                EqualRulesProperty.Jsii$Proxy that = (EqualRulesProperty.Jsii$Proxy) o;

                if (!match.equals(that.match)) return false;
                return this.replacement.equals(that.replacement);
            }

            @Override
            public final int hashCode() {
                int result = this.match.hashCode();
                result = 31 * result + (this.replacement.hashCode());
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc3.$Module.class, fqn = "@alicloud/ros-cdk-fc3.RosCustomDomain.RegexRulesProperty")
    @software.amazon.jsii.Jsii.Proxy(RegexRulesProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface RegexRulesProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getMatch();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getReplacement();

        /**
         * @return a {@link Builder} of {@link RegexRulesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link RegexRulesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<RegexRulesProperty> {
            java.lang.Object match;
            java.lang.Object replacement;

            /**
             * Sets the value of {@link RegexRulesProperty#getMatch}
             * @param match the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder match(java.lang.String match) {
                this.match = match;
                return this;
            }

            /**
             * Sets the value of {@link RegexRulesProperty#getMatch}
             * @param match the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder match(com.aliyun.ros.cdk.core.IResolvable match) {
                this.match = match;
                return this;
            }

            /**
             * Sets the value of {@link RegexRulesProperty#getReplacement}
             * @param replacement the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder replacement(java.lang.String replacement) {
                this.replacement = replacement;
                return this;
            }

            /**
             * Sets the value of {@link RegexRulesProperty#getReplacement}
             * @param replacement the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder replacement(com.aliyun.ros.cdk.core.IResolvable replacement) {
                this.replacement = replacement;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link RegexRulesProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public RegexRulesProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link RegexRulesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RegexRulesProperty {
            private final java.lang.Object match;
            private final java.lang.Object replacement;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.match = software.amazon.jsii.Kernel.get(this, "match", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.replacement = software.amazon.jsii.Kernel.get(this, "replacement", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.match = java.util.Objects.requireNonNull(builder.match, "match is required");
                this.replacement = java.util.Objects.requireNonNull(builder.replacement, "replacement is required");
            }

            @Override
            public final java.lang.Object getMatch() {
                return this.match;
            }

            @Override
            public final java.lang.Object getReplacement() {
                return this.replacement;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("match", om.valueToTree(this.getMatch()));
                data.set("replacement", om.valueToTree(this.getReplacement()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-fc3.RosCustomDomain.RegexRulesProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                RegexRulesProperty.Jsii$Proxy that = (RegexRulesProperty.Jsii$Proxy) o;

                if (!match.equals(that.match)) return false;
                return this.replacement.equals(that.replacement);
            }

            @Override
            public final int hashCode() {
                int result = this.match.hashCode();
                result = 31 * result + (this.replacement.hashCode());
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc3.$Module.class, fqn = "@alicloud/ros-cdk-fc3.RosCustomDomain.RewriteConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(RewriteConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface RewriteConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEqualRules() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRegexRules() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getWildcardRules() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link RewriteConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link RewriteConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<RewriteConfigProperty> {
            java.lang.Object equalRules;
            java.lang.Object regexRules;
            java.lang.Object wildcardRules;

            /**
             * Sets the value of {@link RewriteConfigProperty#getEqualRules}
             * @param equalRules the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder equalRules(com.aliyun.ros.cdk.core.IResolvable equalRules) {
                this.equalRules = equalRules;
                return this;
            }

            /**
             * Sets the value of {@link RewriteConfigProperty#getEqualRules}
             * @param equalRules the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder equalRules(java.util.List<? extends java.lang.Object> equalRules) {
                this.equalRules = equalRules;
                return this;
            }

            /**
             * Sets the value of {@link RewriteConfigProperty#getRegexRules}
             * @param regexRules the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder regexRules(com.aliyun.ros.cdk.core.IResolvable regexRules) {
                this.regexRules = regexRules;
                return this;
            }

            /**
             * Sets the value of {@link RewriteConfigProperty#getRegexRules}
             * @param regexRules the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder regexRules(java.util.List<? extends java.lang.Object> regexRules) {
                this.regexRules = regexRules;
                return this;
            }

            /**
             * Sets the value of {@link RewriteConfigProperty#getWildcardRules}
             * @param wildcardRules the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder wildcardRules(com.aliyun.ros.cdk.core.IResolvable wildcardRules) {
                this.wildcardRules = wildcardRules;
                return this;
            }

            /**
             * Sets the value of {@link RewriteConfigProperty#getWildcardRules}
             * @param wildcardRules the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder wildcardRules(java.util.List<? extends java.lang.Object> wildcardRules) {
                this.wildcardRules = wildcardRules;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link RewriteConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public RewriteConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link RewriteConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RewriteConfigProperty {
            private final java.lang.Object equalRules;
            private final java.lang.Object regexRules;
            private final java.lang.Object wildcardRules;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.equalRules = software.amazon.jsii.Kernel.get(this, "equalRules", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.regexRules = software.amazon.jsii.Kernel.get(this, "regexRules", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.wildcardRules = software.amazon.jsii.Kernel.get(this, "wildcardRules", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.equalRules = builder.equalRules;
                this.regexRules = builder.regexRules;
                this.wildcardRules = builder.wildcardRules;
            }

            @Override
            public final java.lang.Object getEqualRules() {
                return this.equalRules;
            }

            @Override
            public final java.lang.Object getRegexRules() {
                return this.regexRules;
            }

            @Override
            public final java.lang.Object getWildcardRules() {
                return this.wildcardRules;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getEqualRules() != null) {
                    data.set("equalRules", om.valueToTree(this.getEqualRules()));
                }
                if (this.getRegexRules() != null) {
                    data.set("regexRules", om.valueToTree(this.getRegexRules()));
                }
                if (this.getWildcardRules() != null) {
                    data.set("wildcardRules", om.valueToTree(this.getWildcardRules()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-fc3.RosCustomDomain.RewriteConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                RewriteConfigProperty.Jsii$Proxy that = (RewriteConfigProperty.Jsii$Proxy) o;

                if (this.equalRules != null ? !this.equalRules.equals(that.equalRules) : that.equalRules != null) return false;
                if (this.regexRules != null ? !this.regexRules.equals(that.regexRules) : that.regexRules != null) return false;
                return this.wildcardRules != null ? this.wildcardRules.equals(that.wildcardRules) : that.wildcardRules == null;
            }

            @Override
            public final int hashCode() {
                int result = this.equalRules != null ? this.equalRules.hashCode() : 0;
                result = 31 * result + (this.regexRules != null ? this.regexRules.hashCode() : 0);
                result = 31 * result + (this.wildcardRules != null ? this.wildcardRules.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc3.$Module.class, fqn = "@alicloud/ros-cdk-fc3.RosCustomDomain.RouteConfigProperty")
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
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-fc3.RosCustomDomain.RouteConfigProperty"));
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
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc3.$Module.class, fqn = "@alicloud/ros-cdk-fc3.RosCustomDomain.RoutesProperty")
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
        @org.jetbrains.annotations.NotNull java.lang.Object getQualifier();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMethods() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRewriteConfig() {
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
            java.lang.Object qualifier;
            java.lang.Object methods;
            java.lang.Object rewriteConfig;

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
             * Sets the value of {@link RoutesProperty#getQualifier}
             * @param qualifier the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder qualifier(java.lang.String qualifier) {
                this.qualifier = qualifier;
                return this;
            }

            /**
             * Sets the value of {@link RoutesProperty#getQualifier}
             * @param qualifier the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder qualifier(com.aliyun.ros.cdk.core.IResolvable qualifier) {
                this.qualifier = qualifier;
                return this;
            }

            /**
             * Sets the value of {@link RoutesProperty#getMethods}
             * @param methods the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder methods(com.aliyun.ros.cdk.core.IResolvable methods) {
                this.methods = methods;
                return this;
            }

            /**
             * Sets the value of {@link RoutesProperty#getMethods}
             * @param methods the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder methods(java.util.List<? extends java.lang.Object> methods) {
                this.methods = methods;
                return this;
            }

            /**
             * Sets the value of {@link RoutesProperty#getRewriteConfig}
             * @param rewriteConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder rewriteConfig(com.aliyun.ros.cdk.core.IResolvable rewriteConfig) {
                this.rewriteConfig = rewriteConfig;
                return this;
            }

            /**
             * Sets the value of {@link RoutesProperty#getRewriteConfig}
             * @param rewriteConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder rewriteConfig(com.aliyun.ros.cdk.fc3.RosCustomDomain.RewriteConfigProperty rewriteConfig) {
                this.rewriteConfig = rewriteConfig;
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
            private final java.lang.Object qualifier;
            private final java.lang.Object methods;
            private final java.lang.Object rewriteConfig;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.functionName = software.amazon.jsii.Kernel.get(this, "functionName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.path = software.amazon.jsii.Kernel.get(this, "path", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.qualifier = software.amazon.jsii.Kernel.get(this, "qualifier", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.methods = software.amazon.jsii.Kernel.get(this, "methods", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.rewriteConfig = software.amazon.jsii.Kernel.get(this, "rewriteConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.functionName = java.util.Objects.requireNonNull(builder.functionName, "functionName is required");
                this.path = java.util.Objects.requireNonNull(builder.path, "path is required");
                this.qualifier = java.util.Objects.requireNonNull(builder.qualifier, "qualifier is required");
                this.methods = builder.methods;
                this.rewriteConfig = builder.rewriteConfig;
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
            public final java.lang.Object getQualifier() {
                return this.qualifier;
            }

            @Override
            public final java.lang.Object getMethods() {
                return this.methods;
            }

            @Override
            public final java.lang.Object getRewriteConfig() {
                return this.rewriteConfig;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("functionName", om.valueToTree(this.getFunctionName()));
                data.set("path", om.valueToTree(this.getPath()));
                data.set("qualifier", om.valueToTree(this.getQualifier()));
                if (this.getMethods() != null) {
                    data.set("methods", om.valueToTree(this.getMethods()));
                }
                if (this.getRewriteConfig() != null) {
                    data.set("rewriteConfig", om.valueToTree(this.getRewriteConfig()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-fc3.RosCustomDomain.RoutesProperty"));
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
                if (!qualifier.equals(that.qualifier)) return false;
                if (this.methods != null ? !this.methods.equals(that.methods) : that.methods != null) return false;
                return this.rewriteConfig != null ? this.rewriteConfig.equals(that.rewriteConfig) : that.rewriteConfig == null;
            }

            @Override
            public final int hashCode() {
                int result = this.functionName.hashCode();
                result = 31 * result + (this.path.hashCode());
                result = 31 * result + (this.qualifier.hashCode());
                result = 31 * result + (this.methods != null ? this.methods.hashCode() : 0);
                result = 31 * result + (this.rewriteConfig != null ? this.rewriteConfig.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc3.$Module.class, fqn = "@alicloud/ros-cdk-fc3.RosCustomDomain.TlsConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(TlsConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface TlsConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getCipherSuites();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getMinVersion();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMaxVersion() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link TlsConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link TlsConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<TlsConfigProperty> {
            java.lang.Object cipherSuites;
            java.lang.Object minVersion;
            java.lang.Object maxVersion;

            /**
             * Sets the value of {@link TlsConfigProperty#getCipherSuites}
             * @param cipherSuites the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder cipherSuites(com.aliyun.ros.cdk.core.IResolvable cipherSuites) {
                this.cipherSuites = cipherSuites;
                return this;
            }

            /**
             * Sets the value of {@link TlsConfigProperty#getCipherSuites}
             * @param cipherSuites the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder cipherSuites(java.util.List<? extends java.lang.Object> cipherSuites) {
                this.cipherSuites = cipherSuites;
                return this;
            }

            /**
             * Sets the value of {@link TlsConfigProperty#getMinVersion}
             * @param minVersion the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder minVersion(java.lang.String minVersion) {
                this.minVersion = minVersion;
                return this;
            }

            /**
             * Sets the value of {@link TlsConfigProperty#getMinVersion}
             * @param minVersion the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder minVersion(com.aliyun.ros.cdk.core.IResolvable minVersion) {
                this.minVersion = minVersion;
                return this;
            }

            /**
             * Sets the value of {@link TlsConfigProperty#getMaxVersion}
             * @param maxVersion the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder maxVersion(java.lang.String maxVersion) {
                this.maxVersion = maxVersion;
                return this;
            }

            /**
             * Sets the value of {@link TlsConfigProperty#getMaxVersion}
             * @param maxVersion the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder maxVersion(com.aliyun.ros.cdk.core.IResolvable maxVersion) {
                this.maxVersion = maxVersion;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link TlsConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public TlsConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link TlsConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements TlsConfigProperty {
            private final java.lang.Object cipherSuites;
            private final java.lang.Object minVersion;
            private final java.lang.Object maxVersion;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.cipherSuites = software.amazon.jsii.Kernel.get(this, "cipherSuites", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.minVersion = software.amazon.jsii.Kernel.get(this, "minVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.maxVersion = software.amazon.jsii.Kernel.get(this, "maxVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.cipherSuites = java.util.Objects.requireNonNull(builder.cipherSuites, "cipherSuites is required");
                this.minVersion = java.util.Objects.requireNonNull(builder.minVersion, "minVersion is required");
                this.maxVersion = builder.maxVersion;
            }

            @Override
            public final java.lang.Object getCipherSuites() {
                return this.cipherSuites;
            }

            @Override
            public final java.lang.Object getMinVersion() {
                return this.minVersion;
            }

            @Override
            public final java.lang.Object getMaxVersion() {
                return this.maxVersion;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("cipherSuites", om.valueToTree(this.getCipherSuites()));
                data.set("minVersion", om.valueToTree(this.getMinVersion()));
                if (this.getMaxVersion() != null) {
                    data.set("maxVersion", om.valueToTree(this.getMaxVersion()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-fc3.RosCustomDomain.TlsConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                TlsConfigProperty.Jsii$Proxy that = (TlsConfigProperty.Jsii$Proxy) o;

                if (!cipherSuites.equals(that.cipherSuites)) return false;
                if (!minVersion.equals(that.minVersion)) return false;
                return this.maxVersion != null ? this.maxVersion.equals(that.maxVersion) : that.maxVersion == null;
            }

            @Override
            public final int hashCode() {
                int result = this.cipherSuites.hashCode();
                result = 31 * result + (this.minVersion.hashCode());
                result = 31 * result + (this.maxVersion != null ? this.maxVersion.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc3.$Module.class, fqn = "@alicloud/ros-cdk-fc3.RosCustomDomain.WafConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(WafConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface WafConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEnableWaf() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link WafConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link WafConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<WafConfigProperty> {
            java.lang.Object enableWaf;

            /**
             * Sets the value of {@link WafConfigProperty#getEnableWaf}
             * @param enableWaf the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enableWaf(java.lang.Boolean enableWaf) {
                this.enableWaf = enableWaf;
                return this;
            }

            /**
             * Sets the value of {@link WafConfigProperty#getEnableWaf}
             * @param enableWaf the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enableWaf(com.aliyun.ros.cdk.core.IResolvable enableWaf) {
                this.enableWaf = enableWaf;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link WafConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public WafConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link WafConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements WafConfigProperty {
            private final java.lang.Object enableWaf;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.enableWaf = software.amazon.jsii.Kernel.get(this, "enableWaf", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.enableWaf = builder.enableWaf;
            }

            @Override
            public final java.lang.Object getEnableWaf() {
                return this.enableWaf;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getEnableWaf() != null) {
                    data.set("enableWaf", om.valueToTree(this.getEnableWaf()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-fc3.RosCustomDomain.WafConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                WafConfigProperty.Jsii$Proxy that = (WafConfigProperty.Jsii$Proxy) o;

                return this.enableWaf != null ? this.enableWaf.equals(that.enableWaf) : that.enableWaf == null;
            }

            @Override
            public final int hashCode() {
                int result = this.enableWaf != null ? this.enableWaf.hashCode() : 0;
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc3.$Module.class, fqn = "@alicloud/ros-cdk-fc3.RosCustomDomain.WildcardRulesProperty")
    @software.amazon.jsii.Jsii.Proxy(WildcardRulesProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface WildcardRulesProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getMatch();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getReplacement();

        /**
         * @return a {@link Builder} of {@link WildcardRulesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link WildcardRulesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<WildcardRulesProperty> {
            java.lang.Object match;
            java.lang.Object replacement;

            /**
             * Sets the value of {@link WildcardRulesProperty#getMatch}
             * @param match the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder match(java.lang.String match) {
                this.match = match;
                return this;
            }

            /**
             * Sets the value of {@link WildcardRulesProperty#getMatch}
             * @param match the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder match(com.aliyun.ros.cdk.core.IResolvable match) {
                this.match = match;
                return this;
            }

            /**
             * Sets the value of {@link WildcardRulesProperty#getReplacement}
             * @param replacement the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder replacement(java.lang.String replacement) {
                this.replacement = replacement;
                return this;
            }

            /**
             * Sets the value of {@link WildcardRulesProperty#getReplacement}
             * @param replacement the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder replacement(com.aliyun.ros.cdk.core.IResolvable replacement) {
                this.replacement = replacement;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link WildcardRulesProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public WildcardRulesProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link WildcardRulesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements WildcardRulesProperty {
            private final java.lang.Object match;
            private final java.lang.Object replacement;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.match = software.amazon.jsii.Kernel.get(this, "match", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.replacement = software.amazon.jsii.Kernel.get(this, "replacement", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.match = java.util.Objects.requireNonNull(builder.match, "match is required");
                this.replacement = java.util.Objects.requireNonNull(builder.replacement, "replacement is required");
            }

            @Override
            public final java.lang.Object getMatch() {
                return this.match;
            }

            @Override
            public final java.lang.Object getReplacement() {
                return this.replacement;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("match", om.valueToTree(this.getMatch()));
                data.set("replacement", om.valueToTree(this.getReplacement()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-fc3.RosCustomDomain.WildcardRulesProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                WildcardRulesProperty.Jsii$Proxy that = (WildcardRulesProperty.Jsii$Proxy) o;

                if (!match.equals(that.match)) return false;
                return this.replacement.equals(that.replacement);
            }

            @Override
            public final int hashCode() {
                int result = this.match.hashCode();
                result = 31 * result + (this.replacement.hashCode());
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.fc3.RosCustomDomain}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.fc3.RosCustomDomain> {
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
        private final com.aliyun.ros.cdk.fc3.RosCustomDomainProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.fc3.RosCustomDomainProps.Builder();
        }

        /**
         * @return {@code this}
         * @param authConfig This parameter is required.
         */
        public Builder authConfig(final com.aliyun.ros.cdk.core.IResolvable authConfig) {
            this.props.authConfig(authConfig);
            return this;
        }
        /**
         * @return {@code this}
         * @param authConfig This parameter is required.
         */
        public Builder authConfig(final com.aliyun.ros.cdk.fc3.RosCustomDomain.AuthConfigProperty authConfig) {
            this.props.authConfig(authConfig);
            return this;
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
        public Builder certConfig(final com.aliyun.ros.cdk.fc3.RosCustomDomain.CertConfigProperty certConfig) {
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
        public Builder routeConfig(final com.aliyun.ros.cdk.fc3.RosCustomDomain.RouteConfigProperty routeConfig) {
            this.props.routeConfig(routeConfig);
            return this;
        }

        /**
         * @return {@code this}
         * @param tlsConfig This parameter is required.
         */
        public Builder tlsConfig(final com.aliyun.ros.cdk.core.IResolvable tlsConfig) {
            this.props.tlsConfig(tlsConfig);
            return this;
        }
        /**
         * @return {@code this}
         * @param tlsConfig This parameter is required.
         */
        public Builder tlsConfig(final com.aliyun.ros.cdk.fc3.RosCustomDomain.TlsConfigProperty tlsConfig) {
            this.props.tlsConfig(tlsConfig);
            return this;
        }

        /**
         * @return {@code this}
         * @param wafConfig This parameter is required.
         */
        public Builder wafConfig(final com.aliyun.ros.cdk.core.IResolvable wafConfig) {
            this.props.wafConfig(wafConfig);
            return this;
        }
        /**
         * @return {@code this}
         * @param wafConfig This parameter is required.
         */
        public Builder wafConfig(final com.aliyun.ros.cdk.fc3.RosCustomDomain.WafConfigProperty wafConfig) {
            this.props.wafConfig(wafConfig);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.fc3.RosCustomDomain}.
         */
        @Override
        public com.aliyun.ros.cdk.fc3.RosCustomDomain build() {
            return new com.aliyun.ros.cdk.fc3.RosCustomDomain(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
