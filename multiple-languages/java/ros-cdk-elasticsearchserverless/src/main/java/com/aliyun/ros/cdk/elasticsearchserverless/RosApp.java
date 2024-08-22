package com.aliyun.ros.cdk.elasticsearchserverless;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::ElasticSearchServerless::App</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-22T08:56:21.070Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.elasticsearchserverless.$Module.class, fqn = "@alicloud/ros-cdk-elasticsearchserverless.RosApp")
public class RosApp extends com.aliyun.ros.cdk.core.RosResource {

    protected RosApp(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosApp(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.elasticsearchserverless.RosApp.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosApp(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.elasticsearchserverless.RosAppProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPrivateEsDomain() {
        return software.amazon.jsii.Kernel.get(this, "attrPrivateEsDomain", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPrivateKibanaDomain() {
        return software.amazon.jsii.Kernel.get(this, "attrPrivateKibanaDomain", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPublicEsDomain() {
        return software.amazon.jsii.Kernel.get(this, "attrPublicEsDomain", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPublicKibanaDomain() {
        return software.amazon.jsii.Kernel.get(this, "attrPublicKibanaDomain", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAppName() {
        return software.amazon.jsii.Kernel.get(this, "appName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAppName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "appName", java.util.Objects.requireNonNull(value, "appName is required"));
    }

    /**
     */
    public void setAppName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "appName", java.util.Objects.requireNonNull(value, "appName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAuthentication() {
        return software.amazon.jsii.Kernel.get(this, "authentication", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAuthentication(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "authentication", java.util.Objects.requireNonNull(value, "authentication is required"));
    }

    /**
     */
    public void setAuthentication(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.elasticsearchserverless.RosApp.AuthenticationProperty value) {
        software.amazon.jsii.Kernel.set(this, "authentication", java.util.Objects.requireNonNull(value, "authentication is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getQuotaInfo() {
        return software.amazon.jsii.Kernel.get(this, "quotaInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setQuotaInfo(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "quotaInfo", java.util.Objects.requireNonNull(value, "quotaInfo is required"));
    }

    /**
     */
    public void setQuotaInfo(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.elasticsearchserverless.RosApp.QuotaInfoProperty value) {
        software.amazon.jsii.Kernel.set(this, "quotaInfo", java.util.Objects.requireNonNull(value, "quotaInfo is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAppVersion() {
        return software.amazon.jsii.Kernel.get(this, "appVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAppVersion(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "appVersion", value);
    }

    /**
     */
    public void setAppVersion(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "appVersion", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getNetwork() {
        return software.amazon.jsii.Kernel.get(this, "network", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setNetwork(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "network", value);
    }

    /**
     */
    public void setNetwork(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.elasticsearchserverless.RosApp.NetworkProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.elasticsearchserverless.RosApp.NetworkProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "network", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPrivateNetwork() {
        return software.amazon.jsii.Kernel.get(this, "privateNetwork", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPrivateNetwork(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "privateNetwork", value);
    }

    /**
     */
    public void setPrivateNetwork(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.elasticsearchserverless.RosApp.PrivateNetworkProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.elasticsearchserverless.RosApp.PrivateNetworkProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "privateNetwork", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.elasticsearchserverless.$Module.class, fqn = "@alicloud/ros-cdk-elasticsearchserverless.RosApp.AuthenticationProperty")
    @software.amazon.jsii.Jsii.Proxy(AuthenticationProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface AuthenticationProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getBasicAuth();

        /**
         * @return a {@link Builder} of {@link AuthenticationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link AuthenticationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<AuthenticationProperty> {
            java.lang.Object basicAuth;

            /**
             * Sets the value of {@link AuthenticationProperty#getBasicAuth}
             * @param basicAuth the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder basicAuth(com.aliyun.ros.cdk.core.IResolvable basicAuth) {
                this.basicAuth = basicAuth;
                return this;
            }

            /**
             * Sets the value of {@link AuthenticationProperty#getBasicAuth}
             * @param basicAuth the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder basicAuth(java.util.List<? extends java.lang.Object> basicAuth) {
                this.basicAuth = basicAuth;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link AuthenticationProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public AuthenticationProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link AuthenticationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AuthenticationProperty {
            private final java.lang.Object basicAuth;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.basicAuth = software.amazon.jsii.Kernel.get(this, "basicAuth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.basicAuth = java.util.Objects.requireNonNull(builder.basicAuth, "basicAuth is required");
            }

            @Override
            public final java.lang.Object getBasicAuth() {
                return this.basicAuth;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("basicAuth", om.valueToTree(this.getBasicAuth()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-elasticsearchserverless.RosApp.AuthenticationProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                AuthenticationProperty.Jsii$Proxy that = (AuthenticationProperty.Jsii$Proxy) o;

                return this.basicAuth.equals(that.basicAuth);
            }

            @Override
            public final int hashCode() {
                int result = this.basicAuth.hashCode();
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.elasticsearchserverless.$Module.class, fqn = "@alicloud/ros-cdk-elasticsearchserverless.RosApp.BasicAuthProperty")
    @software.amazon.jsii.Jsii.Proxy(BasicAuthProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface BasicAuthProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getPassword();

        /**
         * @return a {@link Builder} of {@link BasicAuthProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link BasicAuthProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<BasicAuthProperty> {
            java.lang.Object password;

            /**
             * Sets the value of {@link BasicAuthProperty#getPassword}
             * @param password the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder password(java.lang.String password) {
                this.password = password;
                return this;
            }

            /**
             * Sets the value of {@link BasicAuthProperty#getPassword}
             * @param password the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder password(com.aliyun.ros.cdk.core.IResolvable password) {
                this.password = password;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link BasicAuthProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public BasicAuthProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link BasicAuthProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements BasicAuthProperty {
            private final java.lang.Object password;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.password = software.amazon.jsii.Kernel.get(this, "password", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.password = java.util.Objects.requireNonNull(builder.password, "password is required");
            }

            @Override
            public final java.lang.Object getPassword() {
                return this.password;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("password", om.valueToTree(this.getPassword()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-elasticsearchserverless.RosApp.BasicAuthProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                BasicAuthProperty.Jsii$Proxy that = (BasicAuthProperty.Jsii$Proxy) o;

                return this.password.equals(that.password);
            }

            @Override
            public final int hashCode() {
                int result = this.password.hashCode();
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.elasticsearchserverless.$Module.class, fqn = "@alicloud/ros-cdk-elasticsearchserverless.RosApp.NetworkProperty")
    @software.amazon.jsii.Jsii.Proxy(NetworkProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface NetworkProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getEnabled();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getType();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getWhiteIpGroup() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link NetworkProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link NetworkProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<NetworkProperty> {
            java.lang.Object enabled;
            java.lang.Object type;
            java.lang.Object whiteIpGroup;

            /**
             * Sets the value of {@link NetworkProperty#getEnabled}
             * @param enabled the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enabled(java.lang.Boolean enabled) {
                this.enabled = enabled;
                return this;
            }

            /**
             * Sets the value of {@link NetworkProperty#getEnabled}
             * @param enabled the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enabled(com.aliyun.ros.cdk.core.IResolvable enabled) {
                this.enabled = enabled;
                return this;
            }

            /**
             * Sets the value of {@link NetworkProperty#getType}
             * @param type the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(java.lang.String type) {
                this.type = type;
                return this;
            }

            /**
             * Sets the value of {@link NetworkProperty#getType}
             * @param type the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
                this.type = type;
                return this;
            }

            /**
             * Sets the value of {@link NetworkProperty#getWhiteIpGroup}
             * @param whiteIpGroup the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder whiteIpGroup(com.aliyun.ros.cdk.core.IResolvable whiteIpGroup) {
                this.whiteIpGroup = whiteIpGroup;
                return this;
            }

            /**
             * Sets the value of {@link NetworkProperty#getWhiteIpGroup}
             * @param whiteIpGroup the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder whiteIpGroup(java.util.List<? extends java.lang.Object> whiteIpGroup) {
                this.whiteIpGroup = whiteIpGroup;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link NetworkProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public NetworkProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link NetworkProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements NetworkProperty {
            private final java.lang.Object enabled;
            private final java.lang.Object type;
            private final java.lang.Object whiteIpGroup;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.enabled = software.amazon.jsii.Kernel.get(this, "enabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.whiteIpGroup = software.amazon.jsii.Kernel.get(this, "whiteIpGroup", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.enabled = java.util.Objects.requireNonNull(builder.enabled, "enabled is required");
                this.type = java.util.Objects.requireNonNull(builder.type, "type is required");
                this.whiteIpGroup = builder.whiteIpGroup;
            }

            @Override
            public final java.lang.Object getEnabled() {
                return this.enabled;
            }

            @Override
            public final java.lang.Object getType() {
                return this.type;
            }

            @Override
            public final java.lang.Object getWhiteIpGroup() {
                return this.whiteIpGroup;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("enabled", om.valueToTree(this.getEnabled()));
                data.set("type", om.valueToTree(this.getType()));
                if (this.getWhiteIpGroup() != null) {
                    data.set("whiteIpGroup", om.valueToTree(this.getWhiteIpGroup()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-elasticsearchserverless.RosApp.NetworkProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                NetworkProperty.Jsii$Proxy that = (NetworkProperty.Jsii$Proxy) o;

                if (!enabled.equals(that.enabled)) return false;
                if (!type.equals(that.type)) return false;
                return this.whiteIpGroup != null ? this.whiteIpGroup.equals(that.whiteIpGroup) : that.whiteIpGroup == null;
            }

            @Override
            public final int hashCode() {
                int result = this.enabled.hashCode();
                result = 31 * result + (this.type.hashCode());
                result = 31 * result + (this.whiteIpGroup != null ? this.whiteIpGroup.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.elasticsearchserverless.$Module.class, fqn = "@alicloud/ros-cdk-elasticsearchserverless.RosApp.PrivateNetworkProperty")
    @software.amazon.jsii.Jsii.Proxy(PrivateNetworkProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface PrivateNetworkProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getEnabled();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getPvlEndpointId();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getType();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getVpcId();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getWhiteIpGroup() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link PrivateNetworkProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link PrivateNetworkProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<PrivateNetworkProperty> {
            java.lang.Object enabled;
            java.lang.Object pvlEndpointId;
            java.lang.Object type;
            java.lang.Object vpcId;
            java.lang.Object whiteIpGroup;

            /**
             * Sets the value of {@link PrivateNetworkProperty#getEnabled}
             * @param enabled the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enabled(java.lang.Boolean enabled) {
                this.enabled = enabled;
                return this;
            }

            /**
             * Sets the value of {@link PrivateNetworkProperty#getEnabled}
             * @param enabled the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enabled(com.aliyun.ros.cdk.core.IResolvable enabled) {
                this.enabled = enabled;
                return this;
            }

            /**
             * Sets the value of {@link PrivateNetworkProperty#getPvlEndpointId}
             * @param pvlEndpointId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder pvlEndpointId(java.lang.String pvlEndpointId) {
                this.pvlEndpointId = pvlEndpointId;
                return this;
            }

            /**
             * Sets the value of {@link PrivateNetworkProperty#getPvlEndpointId}
             * @param pvlEndpointId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder pvlEndpointId(com.aliyun.ros.cdk.core.IResolvable pvlEndpointId) {
                this.pvlEndpointId = pvlEndpointId;
                return this;
            }

            /**
             * Sets the value of {@link PrivateNetworkProperty#getType}
             * @param type the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(java.lang.String type) {
                this.type = type;
                return this;
            }

            /**
             * Sets the value of {@link PrivateNetworkProperty#getType}
             * @param type the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
                this.type = type;
                return this;
            }

            /**
             * Sets the value of {@link PrivateNetworkProperty#getVpcId}
             * @param vpcId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vpcId(java.lang.String vpcId) {
                this.vpcId = vpcId;
                return this;
            }

            /**
             * Sets the value of {@link PrivateNetworkProperty#getVpcId}
             * @param vpcId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
                this.vpcId = vpcId;
                return this;
            }

            /**
             * Sets the value of {@link PrivateNetworkProperty#getWhiteIpGroup}
             * @param whiteIpGroup the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder whiteIpGroup(com.aliyun.ros.cdk.core.IResolvable whiteIpGroup) {
                this.whiteIpGroup = whiteIpGroup;
                return this;
            }

            /**
             * Sets the value of {@link PrivateNetworkProperty#getWhiteIpGroup}
             * @param whiteIpGroup the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder whiteIpGroup(java.util.List<? extends java.lang.Object> whiteIpGroup) {
                this.whiteIpGroup = whiteIpGroup;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link PrivateNetworkProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public PrivateNetworkProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link PrivateNetworkProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements PrivateNetworkProperty {
            private final java.lang.Object enabled;
            private final java.lang.Object pvlEndpointId;
            private final java.lang.Object type;
            private final java.lang.Object vpcId;
            private final java.lang.Object whiteIpGroup;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.enabled = software.amazon.jsii.Kernel.get(this, "enabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.pvlEndpointId = software.amazon.jsii.Kernel.get(this, "pvlEndpointId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.whiteIpGroup = software.amazon.jsii.Kernel.get(this, "whiteIpGroup", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.enabled = java.util.Objects.requireNonNull(builder.enabled, "enabled is required");
                this.pvlEndpointId = java.util.Objects.requireNonNull(builder.pvlEndpointId, "pvlEndpointId is required");
                this.type = java.util.Objects.requireNonNull(builder.type, "type is required");
                this.vpcId = java.util.Objects.requireNonNull(builder.vpcId, "vpcId is required");
                this.whiteIpGroup = builder.whiteIpGroup;
            }

            @Override
            public final java.lang.Object getEnabled() {
                return this.enabled;
            }

            @Override
            public final java.lang.Object getPvlEndpointId() {
                return this.pvlEndpointId;
            }

            @Override
            public final java.lang.Object getType() {
                return this.type;
            }

            @Override
            public final java.lang.Object getVpcId() {
                return this.vpcId;
            }

            @Override
            public final java.lang.Object getWhiteIpGroup() {
                return this.whiteIpGroup;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("enabled", om.valueToTree(this.getEnabled()));
                data.set("pvlEndpointId", om.valueToTree(this.getPvlEndpointId()));
                data.set("type", om.valueToTree(this.getType()));
                data.set("vpcId", om.valueToTree(this.getVpcId()));
                if (this.getWhiteIpGroup() != null) {
                    data.set("whiteIpGroup", om.valueToTree(this.getWhiteIpGroup()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-elasticsearchserverless.RosApp.PrivateNetworkProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                PrivateNetworkProperty.Jsii$Proxy that = (PrivateNetworkProperty.Jsii$Proxy) o;

                if (!enabled.equals(that.enabled)) return false;
                if (!pvlEndpointId.equals(that.pvlEndpointId)) return false;
                if (!type.equals(that.type)) return false;
                if (!vpcId.equals(that.vpcId)) return false;
                return this.whiteIpGroup != null ? this.whiteIpGroup.equals(that.whiteIpGroup) : that.whiteIpGroup == null;
            }

            @Override
            public final int hashCode() {
                int result = this.enabled.hashCode();
                result = 31 * result + (this.pvlEndpointId.hashCode());
                result = 31 * result + (this.type.hashCode());
                result = 31 * result + (this.vpcId.hashCode());
                result = 31 * result + (this.whiteIpGroup != null ? this.whiteIpGroup.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.elasticsearchserverless.$Module.class, fqn = "@alicloud/ros-cdk-elasticsearchserverless.RosApp.PrivateNetworkWhiteIpGroupProperty")
    @software.amazon.jsii.Jsii.Proxy(PrivateNetworkWhiteIpGroupProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface PrivateNetworkWhiteIpGroupProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getGroupName();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIps() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link PrivateNetworkWhiteIpGroupProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link PrivateNetworkWhiteIpGroupProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<PrivateNetworkWhiteIpGroupProperty> {
            java.lang.Object groupName;
            java.lang.Object ips;

            /**
             * Sets the value of {@link PrivateNetworkWhiteIpGroupProperty#getGroupName}
             * @param groupName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder groupName(java.lang.String groupName) {
                this.groupName = groupName;
                return this;
            }

            /**
             * Sets the value of {@link PrivateNetworkWhiteIpGroupProperty#getGroupName}
             * @param groupName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder groupName(com.aliyun.ros.cdk.core.IResolvable groupName) {
                this.groupName = groupName;
                return this;
            }

            /**
             * Sets the value of {@link PrivateNetworkWhiteIpGroupProperty#getIps}
             * @param ips the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ips(java.util.List<? extends java.lang.Object> ips) {
                this.ips = ips;
                return this;
            }

            /**
             * Sets the value of {@link PrivateNetworkWhiteIpGroupProperty#getIps}
             * @param ips the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ips(com.aliyun.ros.cdk.core.IResolvable ips) {
                this.ips = ips;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link PrivateNetworkWhiteIpGroupProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public PrivateNetworkWhiteIpGroupProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link PrivateNetworkWhiteIpGroupProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements PrivateNetworkWhiteIpGroupProperty {
            private final java.lang.Object groupName;
            private final java.lang.Object ips;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.groupName = software.amazon.jsii.Kernel.get(this, "groupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.ips = software.amazon.jsii.Kernel.get(this, "ips", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.groupName = java.util.Objects.requireNonNull(builder.groupName, "groupName is required");
                this.ips = builder.ips;
            }

            @Override
            public final java.lang.Object getGroupName() {
                return this.groupName;
            }

            @Override
            public final java.lang.Object getIps() {
                return this.ips;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("groupName", om.valueToTree(this.getGroupName()));
                if (this.getIps() != null) {
                    data.set("ips", om.valueToTree(this.getIps()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-elasticsearchserverless.RosApp.PrivateNetworkWhiteIpGroupProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                PrivateNetworkWhiteIpGroupProperty.Jsii$Proxy that = (PrivateNetworkWhiteIpGroupProperty.Jsii$Proxy) o;

                if (!groupName.equals(that.groupName)) return false;
                return this.ips != null ? this.ips.equals(that.ips) : that.ips == null;
            }

            @Override
            public final int hashCode() {
                int result = this.groupName.hashCode();
                result = 31 * result + (this.ips != null ? this.ips.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.elasticsearchserverless.$Module.class, fqn = "@alicloud/ros-cdk-elasticsearchserverless.RosApp.QuotaInfoProperty")
    @software.amazon.jsii.Jsii.Proxy(QuotaInfoProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface QuotaInfoProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getAppType();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getCu();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getStorage();

        /**
         * @return a {@link Builder} of {@link QuotaInfoProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link QuotaInfoProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<QuotaInfoProperty> {
            java.lang.Object appType;
            java.lang.Object cu;
            java.lang.Object storage;

            /**
             * Sets the value of {@link QuotaInfoProperty#getAppType}
             * @param appType the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder appType(java.lang.String appType) {
                this.appType = appType;
                return this;
            }

            /**
             * Sets the value of {@link QuotaInfoProperty#getAppType}
             * @param appType the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder appType(com.aliyun.ros.cdk.core.IResolvable appType) {
                this.appType = appType;
                return this;
            }

            /**
             * Sets the value of {@link QuotaInfoProperty#getCu}
             * @param cu the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder cu(java.lang.Number cu) {
                this.cu = cu;
                return this;
            }

            /**
             * Sets the value of {@link QuotaInfoProperty#getCu}
             * @param cu the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder cu(com.aliyun.ros.cdk.core.IResolvable cu) {
                this.cu = cu;
                return this;
            }

            /**
             * Sets the value of {@link QuotaInfoProperty#getStorage}
             * @param storage the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder storage(java.lang.Number storage) {
                this.storage = storage;
                return this;
            }

            /**
             * Sets the value of {@link QuotaInfoProperty#getStorage}
             * @param storage the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder storage(com.aliyun.ros.cdk.core.IResolvable storage) {
                this.storage = storage;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link QuotaInfoProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public QuotaInfoProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link QuotaInfoProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements QuotaInfoProperty {
            private final java.lang.Object appType;
            private final java.lang.Object cu;
            private final java.lang.Object storage;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.appType = software.amazon.jsii.Kernel.get(this, "appType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.cu = software.amazon.jsii.Kernel.get(this, "cu", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.storage = software.amazon.jsii.Kernel.get(this, "storage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.appType = java.util.Objects.requireNonNull(builder.appType, "appType is required");
                this.cu = java.util.Objects.requireNonNull(builder.cu, "cu is required");
                this.storage = java.util.Objects.requireNonNull(builder.storage, "storage is required");
            }

            @Override
            public final java.lang.Object getAppType() {
                return this.appType;
            }

            @Override
            public final java.lang.Object getCu() {
                return this.cu;
            }

            @Override
            public final java.lang.Object getStorage() {
                return this.storage;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("appType", om.valueToTree(this.getAppType()));
                data.set("cu", om.valueToTree(this.getCu()));
                data.set("storage", om.valueToTree(this.getStorage()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-elasticsearchserverless.RosApp.QuotaInfoProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                QuotaInfoProperty.Jsii$Proxy that = (QuotaInfoProperty.Jsii$Proxy) o;

                if (!appType.equals(that.appType)) return false;
                if (!cu.equals(that.cu)) return false;
                return this.storage.equals(that.storage);
            }

            @Override
            public final int hashCode() {
                int result = this.appType.hashCode();
                result = 31 * result + (this.cu.hashCode());
                result = 31 * result + (this.storage.hashCode());
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.elasticsearchserverless.$Module.class, fqn = "@alicloud/ros-cdk-elasticsearchserverless.RosApp.WhiteIpGroupProperty")
    @software.amazon.jsii.Jsii.Proxy(WhiteIpGroupProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface WhiteIpGroupProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getGroupName();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIps() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link WhiteIpGroupProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link WhiteIpGroupProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<WhiteIpGroupProperty> {
            java.lang.Object groupName;
            java.lang.Object ips;

            /**
             * Sets the value of {@link WhiteIpGroupProperty#getGroupName}
             * @param groupName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder groupName(java.lang.String groupName) {
                this.groupName = groupName;
                return this;
            }

            /**
             * Sets the value of {@link WhiteIpGroupProperty#getGroupName}
             * @param groupName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder groupName(com.aliyun.ros.cdk.core.IResolvable groupName) {
                this.groupName = groupName;
                return this;
            }

            /**
             * Sets the value of {@link WhiteIpGroupProperty#getIps}
             * @param ips the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ips(java.util.List<? extends java.lang.Object> ips) {
                this.ips = ips;
                return this;
            }

            /**
             * Sets the value of {@link WhiteIpGroupProperty#getIps}
             * @param ips the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ips(com.aliyun.ros.cdk.core.IResolvable ips) {
                this.ips = ips;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link WhiteIpGroupProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public WhiteIpGroupProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link WhiteIpGroupProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements WhiteIpGroupProperty {
            private final java.lang.Object groupName;
            private final java.lang.Object ips;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.groupName = software.amazon.jsii.Kernel.get(this, "groupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.ips = software.amazon.jsii.Kernel.get(this, "ips", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.groupName = java.util.Objects.requireNonNull(builder.groupName, "groupName is required");
                this.ips = builder.ips;
            }

            @Override
            public final java.lang.Object getGroupName() {
                return this.groupName;
            }

            @Override
            public final java.lang.Object getIps() {
                return this.ips;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("groupName", om.valueToTree(this.getGroupName()));
                if (this.getIps() != null) {
                    data.set("ips", om.valueToTree(this.getIps()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-elasticsearchserverless.RosApp.WhiteIpGroupProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                WhiteIpGroupProperty.Jsii$Proxy that = (WhiteIpGroupProperty.Jsii$Proxy) o;

                if (!groupName.equals(that.groupName)) return false;
                return this.ips != null ? this.ips.equals(that.ips) : that.ips == null;
            }

            @Override
            public final int hashCode() {
                int result = this.groupName.hashCode();
                result = 31 * result + (this.ips != null ? this.ips.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.elasticsearchserverless.RosApp}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.elasticsearchserverless.RosApp> {
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
        private final com.aliyun.ros.cdk.elasticsearchserverless.RosAppProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.elasticsearchserverless.RosAppProps.Builder();
        }

        /**
         * @return {@code this}
         * @param appName This parameter is required.
         */
        public Builder appName(final java.lang.String appName) {
            this.props.appName(appName);
            return this;
        }
        /**
         * @return {@code this}
         * @param appName This parameter is required.
         */
        public Builder appName(final com.aliyun.ros.cdk.core.IResolvable appName) {
            this.props.appName(appName);
            return this;
        }

        /**
         * @return {@code this}
         * @param authentication This parameter is required.
         */
        public Builder authentication(final com.aliyun.ros.cdk.core.IResolvable authentication) {
            this.props.authentication(authentication);
            return this;
        }
        /**
         * @return {@code this}
         * @param authentication This parameter is required.
         */
        public Builder authentication(final com.aliyun.ros.cdk.elasticsearchserverless.RosApp.AuthenticationProperty authentication) {
            this.props.authentication(authentication);
            return this;
        }

        /**
         * @return {@code this}
         * @param quotaInfo This parameter is required.
         */
        public Builder quotaInfo(final com.aliyun.ros.cdk.core.IResolvable quotaInfo) {
            this.props.quotaInfo(quotaInfo);
            return this;
        }
        /**
         * @return {@code this}
         * @param quotaInfo This parameter is required.
         */
        public Builder quotaInfo(final com.aliyun.ros.cdk.elasticsearchserverless.RosApp.QuotaInfoProperty quotaInfo) {
            this.props.quotaInfo(quotaInfo);
            return this;
        }

        /**
         * @return {@code this}
         * @param appVersion This parameter is required.
         */
        public Builder appVersion(final java.lang.String appVersion) {
            this.props.appVersion(appVersion);
            return this;
        }
        /**
         * @return {@code this}
         * @param appVersion This parameter is required.
         */
        public Builder appVersion(final com.aliyun.ros.cdk.core.IResolvable appVersion) {
            this.props.appVersion(appVersion);
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
         * @param network This parameter is required.
         */
        public Builder network(final com.aliyun.ros.cdk.core.IResolvable network) {
            this.props.network(network);
            return this;
        }
        /**
         * @return {@code this}
         * @param network This parameter is required.
         */
        public Builder network(final java.util.List<? extends java.lang.Object> network) {
            this.props.network(network);
            return this;
        }

        /**
         * @return {@code this}
         * @param privateNetwork This parameter is required.
         */
        public Builder privateNetwork(final com.aliyun.ros.cdk.core.IResolvable privateNetwork) {
            this.props.privateNetwork(privateNetwork);
            return this;
        }
        /**
         * @return {@code this}
         * @param privateNetwork This parameter is required.
         */
        public Builder privateNetwork(final java.util.List<? extends java.lang.Object> privateNetwork) {
            this.props.privateNetwork(privateNetwork);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.elasticsearchserverless.RosApp}.
         */
        @Override
        public com.aliyun.ros.cdk.elasticsearchserverless.RosApp build() {
            return new com.aliyun.ros.cdk.elasticsearchserverless.RosApp(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
