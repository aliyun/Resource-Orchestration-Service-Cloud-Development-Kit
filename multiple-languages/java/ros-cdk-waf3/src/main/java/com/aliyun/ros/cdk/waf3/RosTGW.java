package com.aliyun.ros.cdk.waf3;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::WAF3::TGW</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:25:01.596Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.waf3.$Module.class, fqn = "@alicloud/ros-cdk-waf3.RosTGW")
public class RosTGW extends com.aliyun.ros.cdk.core.RosResource {

    protected RosTGW(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosTGW(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.waf3.RosTGW.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosTGW(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.waf3.RosTGWProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPort() {
        return software.amazon.jsii.Kernel.get(this, "attrPort", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrResourceProduct() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceProduct", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTgwId() {
        return software.amazon.jsii.Kernel.get(this, "attrTgwId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setInstanceId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "instanceId", java.util.Objects.requireNonNull(value, "instanceId is required"));
    }

    /**
     */
    public void setInstanceId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "instanceId", java.util.Objects.requireNonNull(value, "instanceId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getListen() {
        return software.amazon.jsii.Kernel.get(this, "listen", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setListen(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "listen", java.util.Objects.requireNonNull(value, "listen is required"));
    }

    /**
     */
    public void setListen(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.waf3.RosTGW.ListenProperty value) {
        software.amazon.jsii.Kernel.set(this, "listen", java.util.Objects.requireNonNull(value, "listen is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRedirect() {
        return software.amazon.jsii.Kernel.get(this, "redirect", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRedirect(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "redirect", value);
    }

    /**
     */
    public void setRedirect(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.waf3.RosTGW.RedirectProperty value) {
        software.amazon.jsii.Kernel.set(this, "redirect", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getWafInstanceRegion() {
        return software.amazon.jsii.Kernel.get(this, "wafInstanceRegion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setWafInstanceRegion(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "wafInstanceRegion", value);
    }

    /**
     */
    public void setWafInstanceRegion(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "wafInstanceRegion", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.waf3.$Module.class, fqn = "@alicloud/ros-cdk-waf3.RosTGW.CertificatesProperty")
    @software.amazon.jsii.Jsii.Proxy(CertificatesProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface CertificatesProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAppliedType() {
            return null;
        }

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
            java.lang.Object appliedType;
            java.lang.Object certificateId;

            /**
             * Sets the value of {@link CertificatesProperty#getAppliedType}
             * @param appliedType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder appliedType(java.lang.String appliedType) {
                this.appliedType = appliedType;
                return this;
            }

            /**
             * Sets the value of {@link CertificatesProperty#getAppliedType}
             * @param appliedType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder appliedType(com.aliyun.ros.cdk.core.IResolvable appliedType) {
                this.appliedType = appliedType;
                return this;
            }

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
            private final java.lang.Object appliedType;
            private final java.lang.Object certificateId;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.appliedType = software.amazon.jsii.Kernel.get(this, "appliedType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.certificateId = software.amazon.jsii.Kernel.get(this, "certificateId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.appliedType = builder.appliedType;
                this.certificateId = builder.certificateId;
            }

            @Override
            public final java.lang.Object getAppliedType() {
                return this.appliedType;
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

                if (this.getAppliedType() != null) {
                    data.set("appliedType", om.valueToTree(this.getAppliedType()));
                }
                if (this.getCertificateId() != null) {
                    data.set("certificateId", om.valueToTree(this.getCertificateId()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-waf3.RosTGW.CertificatesProperty"));
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

                if (this.appliedType != null ? !this.appliedType.equals(that.appliedType) : that.appliedType != null) return false;
                return this.certificateId != null ? this.certificateId.equals(that.certificateId) : that.certificateId == null;
            }

            @Override
            public final int hashCode() {
                int result = this.appliedType != null ? this.appliedType.hashCode() : 0;
                result = 31 * result + (this.certificateId != null ? this.certificateId.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.waf3.$Module.class, fqn = "@alicloud/ros-cdk-waf3.RosTGW.ListenProperty")
    @software.amazon.jsii.Jsii.Proxy(ListenProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ListenProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getPort();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getProtocol();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getResourceInstanceId();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getResourceProduct();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCertificates() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCipherSuite() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCustomCiphers() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEnableTlSv3() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHttp2Enabled() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getTlsVersion() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ListenProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ListenProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ListenProperty> {
            java.lang.Object port;
            java.lang.Object protocol;
            java.lang.Object resourceInstanceId;
            java.lang.Object resourceProduct;
            java.lang.Object certificates;
            java.lang.Object cipherSuite;
            java.lang.Object customCiphers;
            java.lang.Object enableTlSv3;
            java.lang.Object http2Enabled;
            java.lang.Object tlsVersion;

            /**
             * Sets the value of {@link ListenProperty#getPort}
             * @param port the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder port(java.lang.Number port) {
                this.port = port;
                return this;
            }

            /**
             * Sets the value of {@link ListenProperty#getPort}
             * @param port the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder port(com.aliyun.ros.cdk.core.IResolvable port) {
                this.port = port;
                return this;
            }

            /**
             * Sets the value of {@link ListenProperty#getProtocol}
             * @param protocol the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder protocol(java.lang.String protocol) {
                this.protocol = protocol;
                return this;
            }

            /**
             * Sets the value of {@link ListenProperty#getProtocol}
             * @param protocol the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder protocol(com.aliyun.ros.cdk.core.IResolvable protocol) {
                this.protocol = protocol;
                return this;
            }

            /**
             * Sets the value of {@link ListenProperty#getResourceInstanceId}
             * @param resourceInstanceId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder resourceInstanceId(java.lang.String resourceInstanceId) {
                this.resourceInstanceId = resourceInstanceId;
                return this;
            }

            /**
             * Sets the value of {@link ListenProperty#getResourceInstanceId}
             * @param resourceInstanceId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder resourceInstanceId(com.aliyun.ros.cdk.core.IResolvable resourceInstanceId) {
                this.resourceInstanceId = resourceInstanceId;
                return this;
            }

            /**
             * Sets the value of {@link ListenProperty#getResourceProduct}
             * @param resourceProduct the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder resourceProduct(java.lang.String resourceProduct) {
                this.resourceProduct = resourceProduct;
                return this;
            }

            /**
             * Sets the value of {@link ListenProperty#getResourceProduct}
             * @param resourceProduct the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder resourceProduct(com.aliyun.ros.cdk.core.IResolvable resourceProduct) {
                this.resourceProduct = resourceProduct;
                return this;
            }

            /**
             * Sets the value of {@link ListenProperty#getCertificates}
             * @param certificates the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder certificates(com.aliyun.ros.cdk.core.IResolvable certificates) {
                this.certificates = certificates;
                return this;
            }

            /**
             * Sets the value of {@link ListenProperty#getCertificates}
             * @param certificates the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder certificates(java.util.List<? extends java.lang.Object> certificates) {
                this.certificates = certificates;
                return this;
            }

            /**
             * Sets the value of {@link ListenProperty#getCipherSuite}
             * @param cipherSuite the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder cipherSuite(java.lang.Number cipherSuite) {
                this.cipherSuite = cipherSuite;
                return this;
            }

            /**
             * Sets the value of {@link ListenProperty#getCipherSuite}
             * @param cipherSuite the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder cipherSuite(com.aliyun.ros.cdk.core.IResolvable cipherSuite) {
                this.cipherSuite = cipherSuite;
                return this;
            }

            /**
             * Sets the value of {@link ListenProperty#getCustomCiphers}
             * @param customCiphers the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder customCiphers(java.util.List<? extends java.lang.Object> customCiphers) {
                this.customCiphers = customCiphers;
                return this;
            }

            /**
             * Sets the value of {@link ListenProperty#getCustomCiphers}
             * @param customCiphers the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder customCiphers(com.aliyun.ros.cdk.core.IResolvable customCiphers) {
                this.customCiphers = customCiphers;
                return this;
            }

            /**
             * Sets the value of {@link ListenProperty#getEnableTlSv3}
             * @param enableTlSv3 the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enableTlSv3(java.lang.Boolean enableTlSv3) {
                this.enableTlSv3 = enableTlSv3;
                return this;
            }

            /**
             * Sets the value of {@link ListenProperty#getEnableTlSv3}
             * @param enableTlSv3 the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enableTlSv3(com.aliyun.ros.cdk.core.IResolvable enableTlSv3) {
                this.enableTlSv3 = enableTlSv3;
                return this;
            }

            /**
             * Sets the value of {@link ListenProperty#getHttp2Enabled}
             * @param http2Enabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder http2Enabled(java.lang.Boolean http2Enabled) {
                this.http2Enabled = http2Enabled;
                return this;
            }

            /**
             * Sets the value of {@link ListenProperty#getHttp2Enabled}
             * @param http2Enabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder http2Enabled(com.aliyun.ros.cdk.core.IResolvable http2Enabled) {
                this.http2Enabled = http2Enabled;
                return this;
            }

            /**
             * Sets the value of {@link ListenProperty#getTlsVersion}
             * @param tlsVersion the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder tlsVersion(java.lang.String tlsVersion) {
                this.tlsVersion = tlsVersion;
                return this;
            }

            /**
             * Sets the value of {@link ListenProperty#getTlsVersion}
             * @param tlsVersion the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder tlsVersion(com.aliyun.ros.cdk.core.IResolvable tlsVersion) {
                this.tlsVersion = tlsVersion;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ListenProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ListenProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ListenProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ListenProperty {
            private final java.lang.Object port;
            private final java.lang.Object protocol;
            private final java.lang.Object resourceInstanceId;
            private final java.lang.Object resourceProduct;
            private final java.lang.Object certificates;
            private final java.lang.Object cipherSuite;
            private final java.lang.Object customCiphers;
            private final java.lang.Object enableTlSv3;
            private final java.lang.Object http2Enabled;
            private final java.lang.Object tlsVersion;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.port = software.amazon.jsii.Kernel.get(this, "port", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.protocol = software.amazon.jsii.Kernel.get(this, "protocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.resourceInstanceId = software.amazon.jsii.Kernel.get(this, "resourceInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.resourceProduct = software.amazon.jsii.Kernel.get(this, "resourceProduct", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.certificates = software.amazon.jsii.Kernel.get(this, "certificates", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.cipherSuite = software.amazon.jsii.Kernel.get(this, "cipherSuite", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.customCiphers = software.amazon.jsii.Kernel.get(this, "customCiphers", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.enableTlSv3 = software.amazon.jsii.Kernel.get(this, "enableTlSv3", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.http2Enabled = software.amazon.jsii.Kernel.get(this, "http2Enabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.tlsVersion = software.amazon.jsii.Kernel.get(this, "tlsVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.port = java.util.Objects.requireNonNull(builder.port, "port is required");
                this.protocol = java.util.Objects.requireNonNull(builder.protocol, "protocol is required");
                this.resourceInstanceId = java.util.Objects.requireNonNull(builder.resourceInstanceId, "resourceInstanceId is required");
                this.resourceProduct = java.util.Objects.requireNonNull(builder.resourceProduct, "resourceProduct is required");
                this.certificates = builder.certificates;
                this.cipherSuite = builder.cipherSuite;
                this.customCiphers = builder.customCiphers;
                this.enableTlSv3 = builder.enableTlSv3;
                this.http2Enabled = builder.http2Enabled;
                this.tlsVersion = builder.tlsVersion;
            }

            @Override
            public final java.lang.Object getPort() {
                return this.port;
            }

            @Override
            public final java.lang.Object getProtocol() {
                return this.protocol;
            }

            @Override
            public final java.lang.Object getResourceInstanceId() {
                return this.resourceInstanceId;
            }

            @Override
            public final java.lang.Object getResourceProduct() {
                return this.resourceProduct;
            }

            @Override
            public final java.lang.Object getCertificates() {
                return this.certificates;
            }

            @Override
            public final java.lang.Object getCipherSuite() {
                return this.cipherSuite;
            }

            @Override
            public final java.lang.Object getCustomCiphers() {
                return this.customCiphers;
            }

            @Override
            public final java.lang.Object getEnableTlSv3() {
                return this.enableTlSv3;
            }

            @Override
            public final java.lang.Object getHttp2Enabled() {
                return this.http2Enabled;
            }

            @Override
            public final java.lang.Object getTlsVersion() {
                return this.tlsVersion;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("port", om.valueToTree(this.getPort()));
                data.set("protocol", om.valueToTree(this.getProtocol()));
                data.set("resourceInstanceId", om.valueToTree(this.getResourceInstanceId()));
                data.set("resourceProduct", om.valueToTree(this.getResourceProduct()));
                if (this.getCertificates() != null) {
                    data.set("certificates", om.valueToTree(this.getCertificates()));
                }
                if (this.getCipherSuite() != null) {
                    data.set("cipherSuite", om.valueToTree(this.getCipherSuite()));
                }
                if (this.getCustomCiphers() != null) {
                    data.set("customCiphers", om.valueToTree(this.getCustomCiphers()));
                }
                if (this.getEnableTlSv3() != null) {
                    data.set("enableTlSv3", om.valueToTree(this.getEnableTlSv3()));
                }
                if (this.getHttp2Enabled() != null) {
                    data.set("http2Enabled", om.valueToTree(this.getHttp2Enabled()));
                }
                if (this.getTlsVersion() != null) {
                    data.set("tlsVersion", om.valueToTree(this.getTlsVersion()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-waf3.RosTGW.ListenProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ListenProperty.Jsii$Proxy that = (ListenProperty.Jsii$Proxy) o;

                if (!port.equals(that.port)) return false;
                if (!protocol.equals(that.protocol)) return false;
                if (!resourceInstanceId.equals(that.resourceInstanceId)) return false;
                if (!resourceProduct.equals(that.resourceProduct)) return false;
                if (this.certificates != null ? !this.certificates.equals(that.certificates) : that.certificates != null) return false;
                if (this.cipherSuite != null ? !this.cipherSuite.equals(that.cipherSuite) : that.cipherSuite != null) return false;
                if (this.customCiphers != null ? !this.customCiphers.equals(that.customCiphers) : that.customCiphers != null) return false;
                if (this.enableTlSv3 != null ? !this.enableTlSv3.equals(that.enableTlSv3) : that.enableTlSv3 != null) return false;
                if (this.http2Enabled != null ? !this.http2Enabled.equals(that.http2Enabled) : that.http2Enabled != null) return false;
                return this.tlsVersion != null ? this.tlsVersion.equals(that.tlsVersion) : that.tlsVersion == null;
            }

            @Override
            public final int hashCode() {
                int result = this.port.hashCode();
                result = 31 * result + (this.protocol.hashCode());
                result = 31 * result + (this.resourceInstanceId.hashCode());
                result = 31 * result + (this.resourceProduct.hashCode());
                result = 31 * result + (this.certificates != null ? this.certificates.hashCode() : 0);
                result = 31 * result + (this.cipherSuite != null ? this.cipherSuite.hashCode() : 0);
                result = 31 * result + (this.customCiphers != null ? this.customCiphers.hashCode() : 0);
                result = 31 * result + (this.enableTlSv3 != null ? this.enableTlSv3.hashCode() : 0);
                result = 31 * result + (this.http2Enabled != null ? this.http2Enabled.hashCode() : 0);
                result = 31 * result + (this.tlsVersion != null ? this.tlsVersion.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.waf3.$Module.class, fqn = "@alicloud/ros-cdk-waf3.RosTGW.RedirectProperty")
    @software.amazon.jsii.Jsii.Proxy(RedirectProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface RedirectProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getKeepalive() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getKeepaliveRequests() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getKeepaliveTimeout() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getReadTimeout() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRequestHeaders() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getWriteTimeout() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getXffHeaderMode() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getXffHeaders() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getXffProto() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link RedirectProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link RedirectProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<RedirectProperty> {
            java.lang.Object keepalive;
            java.lang.Object keepaliveRequests;
            java.lang.Object keepaliveTimeout;
            java.lang.Object readTimeout;
            java.lang.Object requestHeaders;
            java.lang.Object writeTimeout;
            java.lang.Object xffHeaderMode;
            java.lang.Object xffHeaders;
            java.lang.Object xffProto;

            /**
             * Sets the value of {@link RedirectProperty#getKeepalive}
             * @param keepalive the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder keepalive(java.lang.Boolean keepalive) {
                this.keepalive = keepalive;
                return this;
            }

            /**
             * Sets the value of {@link RedirectProperty#getKeepalive}
             * @param keepalive the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder keepalive(com.aliyun.ros.cdk.core.IResolvable keepalive) {
                this.keepalive = keepalive;
                return this;
            }

            /**
             * Sets the value of {@link RedirectProperty#getKeepaliveRequests}
             * @param keepaliveRequests the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder keepaliveRequests(java.lang.Number keepaliveRequests) {
                this.keepaliveRequests = keepaliveRequests;
                return this;
            }

            /**
             * Sets the value of {@link RedirectProperty#getKeepaliveRequests}
             * @param keepaliveRequests the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder keepaliveRequests(com.aliyun.ros.cdk.core.IResolvable keepaliveRequests) {
                this.keepaliveRequests = keepaliveRequests;
                return this;
            }

            /**
             * Sets the value of {@link RedirectProperty#getKeepaliveTimeout}
             * @param keepaliveTimeout the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder keepaliveTimeout(java.lang.Number keepaliveTimeout) {
                this.keepaliveTimeout = keepaliveTimeout;
                return this;
            }

            /**
             * Sets the value of {@link RedirectProperty#getKeepaliveTimeout}
             * @param keepaliveTimeout the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder keepaliveTimeout(com.aliyun.ros.cdk.core.IResolvable keepaliveTimeout) {
                this.keepaliveTimeout = keepaliveTimeout;
                return this;
            }

            /**
             * Sets the value of {@link RedirectProperty#getReadTimeout}
             * @param readTimeout the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder readTimeout(java.lang.Number readTimeout) {
                this.readTimeout = readTimeout;
                return this;
            }

            /**
             * Sets the value of {@link RedirectProperty#getReadTimeout}
             * @param readTimeout the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder readTimeout(com.aliyun.ros.cdk.core.IResolvable readTimeout) {
                this.readTimeout = readTimeout;
                return this;
            }

            /**
             * Sets the value of {@link RedirectProperty#getRequestHeaders}
             * @param requestHeaders the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder requestHeaders(com.aliyun.ros.cdk.core.IResolvable requestHeaders) {
                this.requestHeaders = requestHeaders;
                return this;
            }

            /**
             * Sets the value of {@link RedirectProperty#getRequestHeaders}
             * @param requestHeaders the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder requestHeaders(java.util.List<? extends java.lang.Object> requestHeaders) {
                this.requestHeaders = requestHeaders;
                return this;
            }

            /**
             * Sets the value of {@link RedirectProperty#getWriteTimeout}
             * @param writeTimeout the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder writeTimeout(java.lang.Number writeTimeout) {
                this.writeTimeout = writeTimeout;
                return this;
            }

            /**
             * Sets the value of {@link RedirectProperty#getWriteTimeout}
             * @param writeTimeout the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder writeTimeout(com.aliyun.ros.cdk.core.IResolvable writeTimeout) {
                this.writeTimeout = writeTimeout;
                return this;
            }

            /**
             * Sets the value of {@link RedirectProperty#getXffHeaderMode}
             * @param xffHeaderMode the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder xffHeaderMode(java.lang.Number xffHeaderMode) {
                this.xffHeaderMode = xffHeaderMode;
                return this;
            }

            /**
             * Sets the value of {@link RedirectProperty#getXffHeaderMode}
             * @param xffHeaderMode the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder xffHeaderMode(com.aliyun.ros.cdk.core.IResolvable xffHeaderMode) {
                this.xffHeaderMode = xffHeaderMode;
                return this;
            }

            /**
             * Sets the value of {@link RedirectProperty#getXffHeaders}
             * @param xffHeaders the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder xffHeaders(java.util.List<? extends java.lang.Object> xffHeaders) {
                this.xffHeaders = xffHeaders;
                return this;
            }

            /**
             * Sets the value of {@link RedirectProperty#getXffHeaders}
             * @param xffHeaders the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder xffHeaders(com.aliyun.ros.cdk.core.IResolvable xffHeaders) {
                this.xffHeaders = xffHeaders;
                return this;
            }

            /**
             * Sets the value of {@link RedirectProperty#getXffProto}
             * @param xffProto the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder xffProto(java.lang.Boolean xffProto) {
                this.xffProto = xffProto;
                return this;
            }

            /**
             * Sets the value of {@link RedirectProperty#getXffProto}
             * @param xffProto the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder xffProto(com.aliyun.ros.cdk.core.IResolvable xffProto) {
                this.xffProto = xffProto;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link RedirectProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public RedirectProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link RedirectProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RedirectProperty {
            private final java.lang.Object keepalive;
            private final java.lang.Object keepaliveRequests;
            private final java.lang.Object keepaliveTimeout;
            private final java.lang.Object readTimeout;
            private final java.lang.Object requestHeaders;
            private final java.lang.Object writeTimeout;
            private final java.lang.Object xffHeaderMode;
            private final java.lang.Object xffHeaders;
            private final java.lang.Object xffProto;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.keepalive = software.amazon.jsii.Kernel.get(this, "keepalive", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.keepaliveRequests = software.amazon.jsii.Kernel.get(this, "keepaliveRequests", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.keepaliveTimeout = software.amazon.jsii.Kernel.get(this, "keepaliveTimeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.readTimeout = software.amazon.jsii.Kernel.get(this, "readTimeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.requestHeaders = software.amazon.jsii.Kernel.get(this, "requestHeaders", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.writeTimeout = software.amazon.jsii.Kernel.get(this, "writeTimeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.xffHeaderMode = software.amazon.jsii.Kernel.get(this, "xffHeaderMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.xffHeaders = software.amazon.jsii.Kernel.get(this, "xffHeaders", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.xffProto = software.amazon.jsii.Kernel.get(this, "xffProto", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.keepalive = builder.keepalive;
                this.keepaliveRequests = builder.keepaliveRequests;
                this.keepaliveTimeout = builder.keepaliveTimeout;
                this.readTimeout = builder.readTimeout;
                this.requestHeaders = builder.requestHeaders;
                this.writeTimeout = builder.writeTimeout;
                this.xffHeaderMode = builder.xffHeaderMode;
                this.xffHeaders = builder.xffHeaders;
                this.xffProto = builder.xffProto;
            }

            @Override
            public final java.lang.Object getKeepalive() {
                return this.keepalive;
            }

            @Override
            public final java.lang.Object getKeepaliveRequests() {
                return this.keepaliveRequests;
            }

            @Override
            public final java.lang.Object getKeepaliveTimeout() {
                return this.keepaliveTimeout;
            }

            @Override
            public final java.lang.Object getReadTimeout() {
                return this.readTimeout;
            }

            @Override
            public final java.lang.Object getRequestHeaders() {
                return this.requestHeaders;
            }

            @Override
            public final java.lang.Object getWriteTimeout() {
                return this.writeTimeout;
            }

            @Override
            public final java.lang.Object getXffHeaderMode() {
                return this.xffHeaderMode;
            }

            @Override
            public final java.lang.Object getXffHeaders() {
                return this.xffHeaders;
            }

            @Override
            public final java.lang.Object getXffProto() {
                return this.xffProto;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getKeepalive() != null) {
                    data.set("keepalive", om.valueToTree(this.getKeepalive()));
                }
                if (this.getKeepaliveRequests() != null) {
                    data.set("keepaliveRequests", om.valueToTree(this.getKeepaliveRequests()));
                }
                if (this.getKeepaliveTimeout() != null) {
                    data.set("keepaliveTimeout", om.valueToTree(this.getKeepaliveTimeout()));
                }
                if (this.getReadTimeout() != null) {
                    data.set("readTimeout", om.valueToTree(this.getReadTimeout()));
                }
                if (this.getRequestHeaders() != null) {
                    data.set("requestHeaders", om.valueToTree(this.getRequestHeaders()));
                }
                if (this.getWriteTimeout() != null) {
                    data.set("writeTimeout", om.valueToTree(this.getWriteTimeout()));
                }
                if (this.getXffHeaderMode() != null) {
                    data.set("xffHeaderMode", om.valueToTree(this.getXffHeaderMode()));
                }
                if (this.getXffHeaders() != null) {
                    data.set("xffHeaders", om.valueToTree(this.getXffHeaders()));
                }
                if (this.getXffProto() != null) {
                    data.set("xffProto", om.valueToTree(this.getXffProto()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-waf3.RosTGW.RedirectProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                RedirectProperty.Jsii$Proxy that = (RedirectProperty.Jsii$Proxy) o;

                if (this.keepalive != null ? !this.keepalive.equals(that.keepalive) : that.keepalive != null) return false;
                if (this.keepaliveRequests != null ? !this.keepaliveRequests.equals(that.keepaliveRequests) : that.keepaliveRequests != null) return false;
                if (this.keepaliveTimeout != null ? !this.keepaliveTimeout.equals(that.keepaliveTimeout) : that.keepaliveTimeout != null) return false;
                if (this.readTimeout != null ? !this.readTimeout.equals(that.readTimeout) : that.readTimeout != null) return false;
                if (this.requestHeaders != null ? !this.requestHeaders.equals(that.requestHeaders) : that.requestHeaders != null) return false;
                if (this.writeTimeout != null ? !this.writeTimeout.equals(that.writeTimeout) : that.writeTimeout != null) return false;
                if (this.xffHeaderMode != null ? !this.xffHeaderMode.equals(that.xffHeaderMode) : that.xffHeaderMode != null) return false;
                if (this.xffHeaders != null ? !this.xffHeaders.equals(that.xffHeaders) : that.xffHeaders != null) return false;
                return this.xffProto != null ? this.xffProto.equals(that.xffProto) : that.xffProto == null;
            }

            @Override
            public final int hashCode() {
                int result = this.keepalive != null ? this.keepalive.hashCode() : 0;
                result = 31 * result + (this.keepaliveRequests != null ? this.keepaliveRequests.hashCode() : 0);
                result = 31 * result + (this.keepaliveTimeout != null ? this.keepaliveTimeout.hashCode() : 0);
                result = 31 * result + (this.readTimeout != null ? this.readTimeout.hashCode() : 0);
                result = 31 * result + (this.requestHeaders != null ? this.requestHeaders.hashCode() : 0);
                result = 31 * result + (this.writeTimeout != null ? this.writeTimeout.hashCode() : 0);
                result = 31 * result + (this.xffHeaderMode != null ? this.xffHeaderMode.hashCode() : 0);
                result = 31 * result + (this.xffHeaders != null ? this.xffHeaders.hashCode() : 0);
                result = 31 * result + (this.xffProto != null ? this.xffProto.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.waf3.$Module.class, fqn = "@alicloud/ros-cdk-waf3.RosTGW.RequestHeadersProperty")
    @software.amazon.jsii.Jsii.Proxy(RequestHeadersProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface RequestHeadersProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getKey() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getValue() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link RequestHeadersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link RequestHeadersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<RequestHeadersProperty> {
            java.lang.Object key;
            java.lang.Object value;

            /**
             * Sets the value of {@link RequestHeadersProperty#getKey}
             * @param key the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(java.lang.String key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link RequestHeadersProperty#getKey}
             * @param key the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(com.aliyun.ros.cdk.core.IResolvable key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link RequestHeadersProperty#getValue}
             * @param value the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(java.lang.String value) {
                this.value = value;
                return this;
            }

            /**
             * Sets the value of {@link RequestHeadersProperty#getValue}
             * @param value the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(com.aliyun.ros.cdk.core.IResolvable value) {
                this.value = value;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link RequestHeadersProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public RequestHeadersProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link RequestHeadersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RequestHeadersProperty {
            private final java.lang.Object key;
            private final java.lang.Object value;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.key = software.amazon.jsii.Kernel.get(this, "key", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.value = software.amazon.jsii.Kernel.get(this, "value", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.key = builder.key;
                this.value = builder.value;
            }

            @Override
            public final java.lang.Object getKey() {
                return this.key;
            }

            @Override
            public final java.lang.Object getValue() {
                return this.value;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getKey() != null) {
                    data.set("key", om.valueToTree(this.getKey()));
                }
                if (this.getValue() != null) {
                    data.set("value", om.valueToTree(this.getValue()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-waf3.RosTGW.RequestHeadersProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                RequestHeadersProperty.Jsii$Proxy that = (RequestHeadersProperty.Jsii$Proxy) o;

                if (this.key != null ? !this.key.equals(that.key) : that.key != null) return false;
                return this.value != null ? this.value.equals(that.value) : that.value == null;
            }

            @Override
            public final int hashCode() {
                int result = this.key != null ? this.key.hashCode() : 0;
                result = 31 * result + (this.value != null ? this.value.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.waf3.RosTGW}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.waf3.RosTGW> {
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
        private final com.aliyun.ros.cdk.waf3.RosTGWProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.waf3.RosTGWProps.Builder();
        }

        /**
         * @return {@code this}
         * @param instanceId This parameter is required.
         */
        public Builder instanceId(final java.lang.String instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }
        /**
         * @return {@code this}
         * @param instanceId This parameter is required.
         */
        public Builder instanceId(final com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }

        /**
         * @return {@code this}
         * @param listen This parameter is required.
         */
        public Builder listen(final com.aliyun.ros.cdk.core.IResolvable listen) {
            this.props.listen(listen);
            return this;
        }
        /**
         * @return {@code this}
         * @param listen This parameter is required.
         */
        public Builder listen(final com.aliyun.ros.cdk.waf3.RosTGW.ListenProperty listen) {
            this.props.listen(listen);
            return this;
        }

        /**
         * @return {@code this}
         * @param redirect This parameter is required.
         */
        public Builder redirect(final com.aliyun.ros.cdk.core.IResolvable redirect) {
            this.props.redirect(redirect);
            return this;
        }
        /**
         * @return {@code this}
         * @param redirect This parameter is required.
         */
        public Builder redirect(final com.aliyun.ros.cdk.waf3.RosTGW.RedirectProperty redirect) {
            this.props.redirect(redirect);
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
         * @param wafInstanceRegion This parameter is required.
         */
        public Builder wafInstanceRegion(final java.lang.String wafInstanceRegion) {
            this.props.wafInstanceRegion(wafInstanceRegion);
            return this;
        }
        /**
         * @return {@code this}
         * @param wafInstanceRegion This parameter is required.
         */
        public Builder wafInstanceRegion(final com.aliyun.ros.cdk.core.IResolvable wafInstanceRegion) {
            this.props.wafInstanceRegion(wafInstanceRegion);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.waf3.RosTGW}.
         */
        @Override
        public com.aliyun.ros.cdk.waf3.RosTGW build() {
            return new com.aliyun.ros.cdk.waf3.RosTGW(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
