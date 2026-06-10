package com.aliyun.ros.cdk.eventbridge;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::EventBridge::Connection</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T12:01:25.411Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.eventbridge.$Module.class, fqn = "@alicloud/ros-cdk-eventbridge.RosConnection")
public class RosConnection extends com.aliyun.ros.cdk.core.RosResource {

    protected RosConnection(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosConnection(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.eventbridge.RosConnection.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosConnection(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.eventbridge.RosConnectionProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAuthParameters() {
        return software.amazon.jsii.Kernel.get(this, "attrAuthParameters", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrConnectionName() {
        return software.amazon.jsii.Kernel.get(this, "attrConnectionName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrNetworkParameters() {
        return software.amazon.jsii.Kernel.get(this, "attrNetworkParameters", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getConnectionName() {
        return software.amazon.jsii.Kernel.get(this, "connectionName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setConnectionName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "connectionName", java.util.Objects.requireNonNull(value, "connectionName is required"));
    }

    /**
     */
    public void setConnectionName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "connectionName", java.util.Objects.requireNonNull(value, "connectionName is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getNetworkParameters() {
        return software.amazon.jsii.Kernel.get(this, "networkParameters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setNetworkParameters(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "networkParameters", java.util.Objects.requireNonNull(value, "networkParameters is required"));
    }

    /**
     */
    public void setNetworkParameters(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.eventbridge.RosConnection.NetworkParametersProperty value) {
        software.amazon.jsii.Kernel.set(this, "networkParameters", java.util.Objects.requireNonNull(value, "networkParameters is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAuthParameters() {
        return software.amazon.jsii.Kernel.get(this, "authParameters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAuthParameters(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "authParameters", value);
    }

    /**
     */
    public void setAuthParameters(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.eventbridge.RosConnection.AuthParametersProperty value) {
        software.amazon.jsii.Kernel.set(this, "authParameters", value);
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
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.eventbridge.$Module.class, fqn = "@alicloud/ros-cdk-eventbridge.RosConnection.ApiKeyAuthParametersProperty")
    @software.amazon.jsii.Jsii.Proxy(ApiKeyAuthParametersProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ApiKeyAuthParametersProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getApiKeyName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getApiKeyValue() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ApiKeyAuthParametersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ApiKeyAuthParametersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ApiKeyAuthParametersProperty> {
            java.lang.Object apiKeyName;
            java.lang.Object apiKeyValue;

            /**
             * Sets the value of {@link ApiKeyAuthParametersProperty#getApiKeyName}
             * @param apiKeyName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder apiKeyName(java.lang.String apiKeyName) {
                this.apiKeyName = apiKeyName;
                return this;
            }

            /**
             * Sets the value of {@link ApiKeyAuthParametersProperty#getApiKeyName}
             * @param apiKeyName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder apiKeyName(com.aliyun.ros.cdk.core.IResolvable apiKeyName) {
                this.apiKeyName = apiKeyName;
                return this;
            }

            /**
             * Sets the value of {@link ApiKeyAuthParametersProperty#getApiKeyValue}
             * @param apiKeyValue the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder apiKeyValue(java.lang.String apiKeyValue) {
                this.apiKeyValue = apiKeyValue;
                return this;
            }

            /**
             * Sets the value of {@link ApiKeyAuthParametersProperty#getApiKeyValue}
             * @param apiKeyValue the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder apiKeyValue(com.aliyun.ros.cdk.core.IResolvable apiKeyValue) {
                this.apiKeyValue = apiKeyValue;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ApiKeyAuthParametersProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ApiKeyAuthParametersProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ApiKeyAuthParametersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ApiKeyAuthParametersProperty {
            private final java.lang.Object apiKeyName;
            private final java.lang.Object apiKeyValue;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.apiKeyName = software.amazon.jsii.Kernel.get(this, "apiKeyName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.apiKeyValue = software.amazon.jsii.Kernel.get(this, "apiKeyValue", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.apiKeyName = builder.apiKeyName;
                this.apiKeyValue = builder.apiKeyValue;
            }

            @Override
            public final java.lang.Object getApiKeyName() {
                return this.apiKeyName;
            }

            @Override
            public final java.lang.Object getApiKeyValue() {
                return this.apiKeyValue;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getApiKeyName() != null) {
                    data.set("apiKeyName", om.valueToTree(this.getApiKeyName()));
                }
                if (this.getApiKeyValue() != null) {
                    data.set("apiKeyValue", om.valueToTree(this.getApiKeyValue()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-eventbridge.RosConnection.ApiKeyAuthParametersProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ApiKeyAuthParametersProperty.Jsii$Proxy that = (ApiKeyAuthParametersProperty.Jsii$Proxy) o;

                if (this.apiKeyName != null ? !this.apiKeyName.equals(that.apiKeyName) : that.apiKeyName != null) return false;
                return this.apiKeyValue != null ? this.apiKeyValue.equals(that.apiKeyValue) : that.apiKeyValue == null;
            }

            @Override
            public final int hashCode() {
                int result = this.apiKeyName != null ? this.apiKeyName.hashCode() : 0;
                result = 31 * result + (this.apiKeyValue != null ? this.apiKeyValue.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.eventbridge.$Module.class, fqn = "@alicloud/ros-cdk-eventbridge.RosConnection.AuthParametersProperty")
    @software.amazon.jsii.Jsii.Proxy(AuthParametersProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface AuthParametersProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getApiKeyAuthParameters() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAuthorizationType() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getBasicAuthParameters() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getOauthParameters() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link AuthParametersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link AuthParametersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<AuthParametersProperty> {
            java.lang.Object apiKeyAuthParameters;
            java.lang.Object authorizationType;
            java.lang.Object basicAuthParameters;
            java.lang.Object oauthParameters;

            /**
             * Sets the value of {@link AuthParametersProperty#getApiKeyAuthParameters}
             * @param apiKeyAuthParameters the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder apiKeyAuthParameters(com.aliyun.ros.cdk.core.IResolvable apiKeyAuthParameters) {
                this.apiKeyAuthParameters = apiKeyAuthParameters;
                return this;
            }

            /**
             * Sets the value of {@link AuthParametersProperty#getApiKeyAuthParameters}
             * @param apiKeyAuthParameters the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder apiKeyAuthParameters(com.aliyun.ros.cdk.eventbridge.RosConnection.ApiKeyAuthParametersProperty apiKeyAuthParameters) {
                this.apiKeyAuthParameters = apiKeyAuthParameters;
                return this;
            }

            /**
             * Sets the value of {@link AuthParametersProperty#getAuthorizationType}
             * @param authorizationType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder authorizationType(java.lang.String authorizationType) {
                this.authorizationType = authorizationType;
                return this;
            }

            /**
             * Sets the value of {@link AuthParametersProperty#getAuthorizationType}
             * @param authorizationType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder authorizationType(com.aliyun.ros.cdk.core.IResolvable authorizationType) {
                this.authorizationType = authorizationType;
                return this;
            }

            /**
             * Sets the value of {@link AuthParametersProperty#getBasicAuthParameters}
             * @param basicAuthParameters the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder basicAuthParameters(com.aliyun.ros.cdk.core.IResolvable basicAuthParameters) {
                this.basicAuthParameters = basicAuthParameters;
                return this;
            }

            /**
             * Sets the value of {@link AuthParametersProperty#getBasicAuthParameters}
             * @param basicAuthParameters the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder basicAuthParameters(com.aliyun.ros.cdk.eventbridge.RosConnection.BasicAuthParametersProperty basicAuthParameters) {
                this.basicAuthParameters = basicAuthParameters;
                return this;
            }

            /**
             * Sets the value of {@link AuthParametersProperty#getOauthParameters}
             * @param oauthParameters the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder oauthParameters(com.aliyun.ros.cdk.core.IResolvable oauthParameters) {
                this.oauthParameters = oauthParameters;
                return this;
            }

            /**
             * Sets the value of {@link AuthParametersProperty#getOauthParameters}
             * @param oauthParameters the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder oauthParameters(com.aliyun.ros.cdk.eventbridge.RosConnection.OauthParametersProperty oauthParameters) {
                this.oauthParameters = oauthParameters;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link AuthParametersProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public AuthParametersProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link AuthParametersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AuthParametersProperty {
            private final java.lang.Object apiKeyAuthParameters;
            private final java.lang.Object authorizationType;
            private final java.lang.Object basicAuthParameters;
            private final java.lang.Object oauthParameters;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.apiKeyAuthParameters = software.amazon.jsii.Kernel.get(this, "apiKeyAuthParameters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.authorizationType = software.amazon.jsii.Kernel.get(this, "authorizationType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.basicAuthParameters = software.amazon.jsii.Kernel.get(this, "basicAuthParameters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.oauthParameters = software.amazon.jsii.Kernel.get(this, "oauthParameters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.apiKeyAuthParameters = builder.apiKeyAuthParameters;
                this.authorizationType = builder.authorizationType;
                this.basicAuthParameters = builder.basicAuthParameters;
                this.oauthParameters = builder.oauthParameters;
            }

            @Override
            public final java.lang.Object getApiKeyAuthParameters() {
                return this.apiKeyAuthParameters;
            }

            @Override
            public final java.lang.Object getAuthorizationType() {
                return this.authorizationType;
            }

            @Override
            public final java.lang.Object getBasicAuthParameters() {
                return this.basicAuthParameters;
            }

            @Override
            public final java.lang.Object getOauthParameters() {
                return this.oauthParameters;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getApiKeyAuthParameters() != null) {
                    data.set("apiKeyAuthParameters", om.valueToTree(this.getApiKeyAuthParameters()));
                }
                if (this.getAuthorizationType() != null) {
                    data.set("authorizationType", om.valueToTree(this.getAuthorizationType()));
                }
                if (this.getBasicAuthParameters() != null) {
                    data.set("basicAuthParameters", om.valueToTree(this.getBasicAuthParameters()));
                }
                if (this.getOauthParameters() != null) {
                    data.set("oauthParameters", om.valueToTree(this.getOauthParameters()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-eventbridge.RosConnection.AuthParametersProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                AuthParametersProperty.Jsii$Proxy that = (AuthParametersProperty.Jsii$Proxy) o;

                if (this.apiKeyAuthParameters != null ? !this.apiKeyAuthParameters.equals(that.apiKeyAuthParameters) : that.apiKeyAuthParameters != null) return false;
                if (this.authorizationType != null ? !this.authorizationType.equals(that.authorizationType) : that.authorizationType != null) return false;
                if (this.basicAuthParameters != null ? !this.basicAuthParameters.equals(that.basicAuthParameters) : that.basicAuthParameters != null) return false;
                return this.oauthParameters != null ? this.oauthParameters.equals(that.oauthParameters) : that.oauthParameters == null;
            }

            @Override
            public final int hashCode() {
                int result = this.apiKeyAuthParameters != null ? this.apiKeyAuthParameters.hashCode() : 0;
                result = 31 * result + (this.authorizationType != null ? this.authorizationType.hashCode() : 0);
                result = 31 * result + (this.basicAuthParameters != null ? this.basicAuthParameters.hashCode() : 0);
                result = 31 * result + (this.oauthParameters != null ? this.oauthParameters.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.eventbridge.$Module.class, fqn = "@alicloud/ros-cdk-eventbridge.RosConnection.BasicAuthParametersProperty")
    @software.amazon.jsii.Jsii.Proxy(BasicAuthParametersProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface BasicAuthParametersProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPassword() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getUsername() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link BasicAuthParametersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link BasicAuthParametersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<BasicAuthParametersProperty> {
            java.lang.Object password;
            java.lang.Object username;

            /**
             * Sets the value of {@link BasicAuthParametersProperty#getPassword}
             * @param password the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder password(java.lang.String password) {
                this.password = password;
                return this;
            }

            /**
             * Sets the value of {@link BasicAuthParametersProperty#getPassword}
             * @param password the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder password(com.aliyun.ros.cdk.core.IResolvable password) {
                this.password = password;
                return this;
            }

            /**
             * Sets the value of {@link BasicAuthParametersProperty#getUsername}
             * @param username the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder username(java.lang.String username) {
                this.username = username;
                return this;
            }

            /**
             * Sets the value of {@link BasicAuthParametersProperty#getUsername}
             * @param username the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder username(com.aliyun.ros.cdk.core.IResolvable username) {
                this.username = username;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link BasicAuthParametersProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public BasicAuthParametersProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link BasicAuthParametersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements BasicAuthParametersProperty {
            private final java.lang.Object password;
            private final java.lang.Object username;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.password = software.amazon.jsii.Kernel.get(this, "password", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.username = software.amazon.jsii.Kernel.get(this, "username", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.password = builder.password;
                this.username = builder.username;
            }

            @Override
            public final java.lang.Object getPassword() {
                return this.password;
            }

            @Override
            public final java.lang.Object getUsername() {
                return this.username;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getPassword() != null) {
                    data.set("password", om.valueToTree(this.getPassword()));
                }
                if (this.getUsername() != null) {
                    data.set("username", om.valueToTree(this.getUsername()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-eventbridge.RosConnection.BasicAuthParametersProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                BasicAuthParametersProperty.Jsii$Proxy that = (BasicAuthParametersProperty.Jsii$Proxy) o;

                if (this.password != null ? !this.password.equals(that.password) : that.password != null) return false;
                return this.username != null ? this.username.equals(that.username) : that.username == null;
            }

            @Override
            public final int hashCode() {
                int result = this.password != null ? this.password.hashCode() : 0;
                result = 31 * result + (this.username != null ? this.username.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.eventbridge.$Module.class, fqn = "@alicloud/ros-cdk-eventbridge.RosConnection.BodyParametersProperty")
    @software.amazon.jsii.Jsii.Proxy(BodyParametersProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface BodyParametersProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIsValueSecret() {
            return null;
        }

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
         * @return a {@link Builder} of {@link BodyParametersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link BodyParametersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<BodyParametersProperty> {
            java.lang.Object isValueSecret;
            java.lang.Object key;
            java.lang.Object value;

            /**
             * Sets the value of {@link BodyParametersProperty#getIsValueSecret}
             * @param isValueSecret the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder isValueSecret(java.lang.Boolean isValueSecret) {
                this.isValueSecret = isValueSecret;
                return this;
            }

            /**
             * Sets the value of {@link BodyParametersProperty#getIsValueSecret}
             * @param isValueSecret the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder isValueSecret(com.aliyun.ros.cdk.core.IResolvable isValueSecret) {
                this.isValueSecret = isValueSecret;
                return this;
            }

            /**
             * Sets the value of {@link BodyParametersProperty#getKey}
             * @param key the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(java.lang.String key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link BodyParametersProperty#getKey}
             * @param key the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(com.aliyun.ros.cdk.core.IResolvable key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link BodyParametersProperty#getValue}
             * @param value the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(java.lang.String value) {
                this.value = value;
                return this;
            }

            /**
             * Sets the value of {@link BodyParametersProperty#getValue}
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
             * @return a new instance of {@link BodyParametersProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public BodyParametersProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link BodyParametersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements BodyParametersProperty {
            private final java.lang.Object isValueSecret;
            private final java.lang.Object key;
            private final java.lang.Object value;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.isValueSecret = software.amazon.jsii.Kernel.get(this, "isValueSecret", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.key = software.amazon.jsii.Kernel.get(this, "key", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.value = software.amazon.jsii.Kernel.get(this, "value", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.isValueSecret = builder.isValueSecret;
                this.key = builder.key;
                this.value = builder.value;
            }

            @Override
            public final java.lang.Object getIsValueSecret() {
                return this.isValueSecret;
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

                if (this.getIsValueSecret() != null) {
                    data.set("isValueSecret", om.valueToTree(this.getIsValueSecret()));
                }
                if (this.getKey() != null) {
                    data.set("key", om.valueToTree(this.getKey()));
                }
                if (this.getValue() != null) {
                    data.set("value", om.valueToTree(this.getValue()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-eventbridge.RosConnection.BodyParametersProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                BodyParametersProperty.Jsii$Proxy that = (BodyParametersProperty.Jsii$Proxy) o;

                if (this.isValueSecret != null ? !this.isValueSecret.equals(that.isValueSecret) : that.isValueSecret != null) return false;
                if (this.key != null ? !this.key.equals(that.key) : that.key != null) return false;
                return this.value != null ? this.value.equals(that.value) : that.value == null;
            }

            @Override
            public final int hashCode() {
                int result = this.isValueSecret != null ? this.isValueSecret.hashCode() : 0;
                result = 31 * result + (this.key != null ? this.key.hashCode() : 0);
                result = 31 * result + (this.value != null ? this.value.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.eventbridge.$Module.class, fqn = "@alicloud/ros-cdk-eventbridge.RosConnection.ClientParametersProperty")
    @software.amazon.jsii.Jsii.Proxy(ClientParametersProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ClientParametersProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getClientId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getClientSecret() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ClientParametersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ClientParametersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ClientParametersProperty> {
            java.lang.Object clientId;
            java.lang.Object clientSecret;

            /**
             * Sets the value of {@link ClientParametersProperty#getClientId}
             * @param clientId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder clientId(java.lang.String clientId) {
                this.clientId = clientId;
                return this;
            }

            /**
             * Sets the value of {@link ClientParametersProperty#getClientId}
             * @param clientId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder clientId(com.aliyun.ros.cdk.core.IResolvable clientId) {
                this.clientId = clientId;
                return this;
            }

            /**
             * Sets the value of {@link ClientParametersProperty#getClientSecret}
             * @param clientSecret the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder clientSecret(java.lang.String clientSecret) {
                this.clientSecret = clientSecret;
                return this;
            }

            /**
             * Sets the value of {@link ClientParametersProperty#getClientSecret}
             * @param clientSecret the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder clientSecret(com.aliyun.ros.cdk.core.IResolvable clientSecret) {
                this.clientSecret = clientSecret;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ClientParametersProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ClientParametersProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ClientParametersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ClientParametersProperty {
            private final java.lang.Object clientId;
            private final java.lang.Object clientSecret;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.clientId = software.amazon.jsii.Kernel.get(this, "clientId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.clientSecret = software.amazon.jsii.Kernel.get(this, "clientSecret", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.clientId = builder.clientId;
                this.clientSecret = builder.clientSecret;
            }

            @Override
            public final java.lang.Object getClientId() {
                return this.clientId;
            }

            @Override
            public final java.lang.Object getClientSecret() {
                return this.clientSecret;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getClientId() != null) {
                    data.set("clientId", om.valueToTree(this.getClientId()));
                }
                if (this.getClientSecret() != null) {
                    data.set("clientSecret", om.valueToTree(this.getClientSecret()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-eventbridge.RosConnection.ClientParametersProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ClientParametersProperty.Jsii$Proxy that = (ClientParametersProperty.Jsii$Proxy) o;

                if (this.clientId != null ? !this.clientId.equals(that.clientId) : that.clientId != null) return false;
                return this.clientSecret != null ? this.clientSecret.equals(that.clientSecret) : that.clientSecret == null;
            }

            @Override
            public final int hashCode() {
                int result = this.clientId != null ? this.clientId.hashCode() : 0;
                result = 31 * result + (this.clientSecret != null ? this.clientSecret.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.eventbridge.$Module.class, fqn = "@alicloud/ros-cdk-eventbridge.RosConnection.HeaderParametersProperty")
    @software.amazon.jsii.Jsii.Proxy(HeaderParametersProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface HeaderParametersProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIsValueSecret() {
            return null;
        }

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
         * @return a {@link Builder} of {@link HeaderParametersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link HeaderParametersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<HeaderParametersProperty> {
            java.lang.Object isValueSecret;
            java.lang.Object key;
            java.lang.Object value;

            /**
             * Sets the value of {@link HeaderParametersProperty#getIsValueSecret}
             * @param isValueSecret the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder isValueSecret(java.lang.Boolean isValueSecret) {
                this.isValueSecret = isValueSecret;
                return this;
            }

            /**
             * Sets the value of {@link HeaderParametersProperty#getIsValueSecret}
             * @param isValueSecret the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder isValueSecret(com.aliyun.ros.cdk.core.IResolvable isValueSecret) {
                this.isValueSecret = isValueSecret;
                return this;
            }

            /**
             * Sets the value of {@link HeaderParametersProperty#getKey}
             * @param key the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(java.lang.String key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link HeaderParametersProperty#getKey}
             * @param key the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(com.aliyun.ros.cdk.core.IResolvable key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link HeaderParametersProperty#getValue}
             * @param value the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(java.lang.String value) {
                this.value = value;
                return this;
            }

            /**
             * Sets the value of {@link HeaderParametersProperty#getValue}
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
             * @return a new instance of {@link HeaderParametersProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public HeaderParametersProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link HeaderParametersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements HeaderParametersProperty {
            private final java.lang.Object isValueSecret;
            private final java.lang.Object key;
            private final java.lang.Object value;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.isValueSecret = software.amazon.jsii.Kernel.get(this, "isValueSecret", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.key = software.amazon.jsii.Kernel.get(this, "key", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.value = software.amazon.jsii.Kernel.get(this, "value", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.isValueSecret = builder.isValueSecret;
                this.key = builder.key;
                this.value = builder.value;
            }

            @Override
            public final java.lang.Object getIsValueSecret() {
                return this.isValueSecret;
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

                if (this.getIsValueSecret() != null) {
                    data.set("isValueSecret", om.valueToTree(this.getIsValueSecret()));
                }
                if (this.getKey() != null) {
                    data.set("key", om.valueToTree(this.getKey()));
                }
                if (this.getValue() != null) {
                    data.set("value", om.valueToTree(this.getValue()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-eventbridge.RosConnection.HeaderParametersProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                HeaderParametersProperty.Jsii$Proxy that = (HeaderParametersProperty.Jsii$Proxy) o;

                if (this.isValueSecret != null ? !this.isValueSecret.equals(that.isValueSecret) : that.isValueSecret != null) return false;
                if (this.key != null ? !this.key.equals(that.key) : that.key != null) return false;
                return this.value != null ? this.value.equals(that.value) : that.value == null;
            }

            @Override
            public final int hashCode() {
                int result = this.isValueSecret != null ? this.isValueSecret.hashCode() : 0;
                result = 31 * result + (this.key != null ? this.key.hashCode() : 0);
                result = 31 * result + (this.value != null ? this.value.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.eventbridge.$Module.class, fqn = "@alicloud/ros-cdk-eventbridge.RosConnection.NetworkParametersProperty")
    @software.amazon.jsii.Jsii.Proxy(NetworkParametersProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface NetworkParametersProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getNetworkType();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityGroupId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getVpcId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getVswitcheId() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link NetworkParametersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link NetworkParametersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<NetworkParametersProperty> {
            java.lang.Object networkType;
            java.lang.Object securityGroupId;
            java.lang.Object vpcId;
            java.lang.Object vswitcheId;

            /**
             * Sets the value of {@link NetworkParametersProperty#getNetworkType}
             * @param networkType the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder networkType(java.lang.String networkType) {
                this.networkType = networkType;
                return this;
            }

            /**
             * Sets the value of {@link NetworkParametersProperty#getNetworkType}
             * @param networkType the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder networkType(com.aliyun.ros.cdk.core.IResolvable networkType) {
                this.networkType = networkType;
                return this;
            }

            /**
             * Sets the value of {@link NetworkParametersProperty#getSecurityGroupId}
             * @param securityGroupId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder securityGroupId(java.lang.String securityGroupId) {
                this.securityGroupId = securityGroupId;
                return this;
            }

            /**
             * Sets the value of {@link NetworkParametersProperty#getSecurityGroupId}
             * @param securityGroupId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder securityGroupId(com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
                this.securityGroupId = securityGroupId;
                return this;
            }

            /**
             * Sets the value of {@link NetworkParametersProperty#getVpcId}
             * @param vpcId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vpcId(java.lang.String vpcId) {
                this.vpcId = vpcId;
                return this;
            }

            /**
             * Sets the value of {@link NetworkParametersProperty#getVpcId}
             * @param vpcId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
                this.vpcId = vpcId;
                return this;
            }

            /**
             * Sets the value of {@link NetworkParametersProperty#getVswitcheId}
             * @param vswitcheId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vswitcheId(java.lang.String vswitcheId) {
                this.vswitcheId = vswitcheId;
                return this;
            }

            /**
             * Sets the value of {@link NetworkParametersProperty#getVswitcheId}
             * @param vswitcheId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vswitcheId(com.aliyun.ros.cdk.core.IResolvable vswitcheId) {
                this.vswitcheId = vswitcheId;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link NetworkParametersProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public NetworkParametersProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link NetworkParametersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements NetworkParametersProperty {
            private final java.lang.Object networkType;
            private final java.lang.Object securityGroupId;
            private final java.lang.Object vpcId;
            private final java.lang.Object vswitcheId;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.networkType = software.amazon.jsii.Kernel.get(this, "networkType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.securityGroupId = software.amazon.jsii.Kernel.get(this, "securityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.vswitcheId = software.amazon.jsii.Kernel.get(this, "vswitcheId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.networkType = java.util.Objects.requireNonNull(builder.networkType, "networkType is required");
                this.securityGroupId = builder.securityGroupId;
                this.vpcId = builder.vpcId;
                this.vswitcheId = builder.vswitcheId;
            }

            @Override
            public final java.lang.Object getNetworkType() {
                return this.networkType;
            }

            @Override
            public final java.lang.Object getSecurityGroupId() {
                return this.securityGroupId;
            }

            @Override
            public final java.lang.Object getVpcId() {
                return this.vpcId;
            }

            @Override
            public final java.lang.Object getVswitcheId() {
                return this.vswitcheId;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("networkType", om.valueToTree(this.getNetworkType()));
                if (this.getSecurityGroupId() != null) {
                    data.set("securityGroupId", om.valueToTree(this.getSecurityGroupId()));
                }
                if (this.getVpcId() != null) {
                    data.set("vpcId", om.valueToTree(this.getVpcId()));
                }
                if (this.getVswitcheId() != null) {
                    data.set("vswitcheId", om.valueToTree(this.getVswitcheId()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-eventbridge.RosConnection.NetworkParametersProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                NetworkParametersProperty.Jsii$Proxy that = (NetworkParametersProperty.Jsii$Proxy) o;

                if (!networkType.equals(that.networkType)) return false;
                if (this.securityGroupId != null ? !this.securityGroupId.equals(that.securityGroupId) : that.securityGroupId != null) return false;
                if (this.vpcId != null ? !this.vpcId.equals(that.vpcId) : that.vpcId != null) return false;
                return this.vswitcheId != null ? this.vswitcheId.equals(that.vswitcheId) : that.vswitcheId == null;
            }

            @Override
            public final int hashCode() {
                int result = this.networkType.hashCode();
                result = 31 * result + (this.securityGroupId != null ? this.securityGroupId.hashCode() : 0);
                result = 31 * result + (this.vpcId != null ? this.vpcId.hashCode() : 0);
                result = 31 * result + (this.vswitcheId != null ? this.vswitcheId.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.eventbridge.$Module.class, fqn = "@alicloud/ros-cdk-eventbridge.RosConnection.OauthHttpParametersProperty")
    @software.amazon.jsii.Jsii.Proxy(OauthHttpParametersProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface OauthHttpParametersProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getBodyParameters() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHeaderParameters() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getQueryStringParameters() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link OauthHttpParametersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link OauthHttpParametersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<OauthHttpParametersProperty> {
            java.lang.Object bodyParameters;
            java.lang.Object headerParameters;
            java.lang.Object queryStringParameters;

            /**
             * Sets the value of {@link OauthHttpParametersProperty#getBodyParameters}
             * @param bodyParameters the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder bodyParameters(com.aliyun.ros.cdk.core.IResolvable bodyParameters) {
                this.bodyParameters = bodyParameters;
                return this;
            }

            /**
             * Sets the value of {@link OauthHttpParametersProperty#getBodyParameters}
             * @param bodyParameters the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder bodyParameters(java.util.List<? extends java.lang.Object> bodyParameters) {
                this.bodyParameters = bodyParameters;
                return this;
            }

            /**
             * Sets the value of {@link OauthHttpParametersProperty#getHeaderParameters}
             * @param headerParameters the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder headerParameters(com.aliyun.ros.cdk.core.IResolvable headerParameters) {
                this.headerParameters = headerParameters;
                return this;
            }

            /**
             * Sets the value of {@link OauthHttpParametersProperty#getHeaderParameters}
             * @param headerParameters the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder headerParameters(java.util.List<? extends java.lang.Object> headerParameters) {
                this.headerParameters = headerParameters;
                return this;
            }

            /**
             * Sets the value of {@link OauthHttpParametersProperty#getQueryStringParameters}
             * @param queryStringParameters the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder queryStringParameters(com.aliyun.ros.cdk.core.IResolvable queryStringParameters) {
                this.queryStringParameters = queryStringParameters;
                return this;
            }

            /**
             * Sets the value of {@link OauthHttpParametersProperty#getQueryStringParameters}
             * @param queryStringParameters the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder queryStringParameters(java.util.List<? extends java.lang.Object> queryStringParameters) {
                this.queryStringParameters = queryStringParameters;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link OauthHttpParametersProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public OauthHttpParametersProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link OauthHttpParametersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements OauthHttpParametersProperty {
            private final java.lang.Object bodyParameters;
            private final java.lang.Object headerParameters;
            private final java.lang.Object queryStringParameters;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.bodyParameters = software.amazon.jsii.Kernel.get(this, "bodyParameters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.headerParameters = software.amazon.jsii.Kernel.get(this, "headerParameters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.queryStringParameters = software.amazon.jsii.Kernel.get(this, "queryStringParameters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.bodyParameters = builder.bodyParameters;
                this.headerParameters = builder.headerParameters;
                this.queryStringParameters = builder.queryStringParameters;
            }

            @Override
            public final java.lang.Object getBodyParameters() {
                return this.bodyParameters;
            }

            @Override
            public final java.lang.Object getHeaderParameters() {
                return this.headerParameters;
            }

            @Override
            public final java.lang.Object getQueryStringParameters() {
                return this.queryStringParameters;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getBodyParameters() != null) {
                    data.set("bodyParameters", om.valueToTree(this.getBodyParameters()));
                }
                if (this.getHeaderParameters() != null) {
                    data.set("headerParameters", om.valueToTree(this.getHeaderParameters()));
                }
                if (this.getQueryStringParameters() != null) {
                    data.set("queryStringParameters", om.valueToTree(this.getQueryStringParameters()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-eventbridge.RosConnection.OauthHttpParametersProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                OauthHttpParametersProperty.Jsii$Proxy that = (OauthHttpParametersProperty.Jsii$Proxy) o;

                if (this.bodyParameters != null ? !this.bodyParameters.equals(that.bodyParameters) : that.bodyParameters != null) return false;
                if (this.headerParameters != null ? !this.headerParameters.equals(that.headerParameters) : that.headerParameters != null) return false;
                return this.queryStringParameters != null ? this.queryStringParameters.equals(that.queryStringParameters) : that.queryStringParameters == null;
            }

            @Override
            public final int hashCode() {
                int result = this.bodyParameters != null ? this.bodyParameters.hashCode() : 0;
                result = 31 * result + (this.headerParameters != null ? this.headerParameters.hashCode() : 0);
                result = 31 * result + (this.queryStringParameters != null ? this.queryStringParameters.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.eventbridge.$Module.class, fqn = "@alicloud/ros-cdk-eventbridge.RosConnection.OauthParametersProperty")
    @software.amazon.jsii.Jsii.Proxy(OauthParametersProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface OauthParametersProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAuthorizationEndpoint() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getClientParameters() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHttpMethod() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getOauthHttpParameters() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link OauthParametersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link OauthParametersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<OauthParametersProperty> {
            java.lang.Object authorizationEndpoint;
            java.lang.Object clientParameters;
            java.lang.Object httpMethod;
            java.lang.Object oauthHttpParameters;

            /**
             * Sets the value of {@link OauthParametersProperty#getAuthorizationEndpoint}
             * @param authorizationEndpoint the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder authorizationEndpoint(java.lang.String authorizationEndpoint) {
                this.authorizationEndpoint = authorizationEndpoint;
                return this;
            }

            /**
             * Sets the value of {@link OauthParametersProperty#getAuthorizationEndpoint}
             * @param authorizationEndpoint the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder authorizationEndpoint(com.aliyun.ros.cdk.core.IResolvable authorizationEndpoint) {
                this.authorizationEndpoint = authorizationEndpoint;
                return this;
            }

            /**
             * Sets the value of {@link OauthParametersProperty#getClientParameters}
             * @param clientParameters the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder clientParameters(com.aliyun.ros.cdk.core.IResolvable clientParameters) {
                this.clientParameters = clientParameters;
                return this;
            }

            /**
             * Sets the value of {@link OauthParametersProperty#getClientParameters}
             * @param clientParameters the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder clientParameters(com.aliyun.ros.cdk.eventbridge.RosConnection.ClientParametersProperty clientParameters) {
                this.clientParameters = clientParameters;
                return this;
            }

            /**
             * Sets the value of {@link OauthParametersProperty#getHttpMethod}
             * @param httpMethod the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder httpMethod(java.lang.String httpMethod) {
                this.httpMethod = httpMethod;
                return this;
            }

            /**
             * Sets the value of {@link OauthParametersProperty#getHttpMethod}
             * @param httpMethod the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder httpMethod(com.aliyun.ros.cdk.core.IResolvable httpMethod) {
                this.httpMethod = httpMethod;
                return this;
            }

            /**
             * Sets the value of {@link OauthParametersProperty#getOauthHttpParameters}
             * @param oauthHttpParameters the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder oauthHttpParameters(com.aliyun.ros.cdk.core.IResolvable oauthHttpParameters) {
                this.oauthHttpParameters = oauthHttpParameters;
                return this;
            }

            /**
             * Sets the value of {@link OauthParametersProperty#getOauthHttpParameters}
             * @param oauthHttpParameters the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder oauthHttpParameters(com.aliyun.ros.cdk.eventbridge.RosConnection.OauthHttpParametersProperty oauthHttpParameters) {
                this.oauthHttpParameters = oauthHttpParameters;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link OauthParametersProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public OauthParametersProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link OauthParametersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements OauthParametersProperty {
            private final java.lang.Object authorizationEndpoint;
            private final java.lang.Object clientParameters;
            private final java.lang.Object httpMethod;
            private final java.lang.Object oauthHttpParameters;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.authorizationEndpoint = software.amazon.jsii.Kernel.get(this, "authorizationEndpoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.clientParameters = software.amazon.jsii.Kernel.get(this, "clientParameters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.httpMethod = software.amazon.jsii.Kernel.get(this, "httpMethod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.oauthHttpParameters = software.amazon.jsii.Kernel.get(this, "oauthHttpParameters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.authorizationEndpoint = builder.authorizationEndpoint;
                this.clientParameters = builder.clientParameters;
                this.httpMethod = builder.httpMethod;
                this.oauthHttpParameters = builder.oauthHttpParameters;
            }

            @Override
            public final java.lang.Object getAuthorizationEndpoint() {
                return this.authorizationEndpoint;
            }

            @Override
            public final java.lang.Object getClientParameters() {
                return this.clientParameters;
            }

            @Override
            public final java.lang.Object getHttpMethod() {
                return this.httpMethod;
            }

            @Override
            public final java.lang.Object getOauthHttpParameters() {
                return this.oauthHttpParameters;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getAuthorizationEndpoint() != null) {
                    data.set("authorizationEndpoint", om.valueToTree(this.getAuthorizationEndpoint()));
                }
                if (this.getClientParameters() != null) {
                    data.set("clientParameters", om.valueToTree(this.getClientParameters()));
                }
                if (this.getHttpMethod() != null) {
                    data.set("httpMethod", om.valueToTree(this.getHttpMethod()));
                }
                if (this.getOauthHttpParameters() != null) {
                    data.set("oauthHttpParameters", om.valueToTree(this.getOauthHttpParameters()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-eventbridge.RosConnection.OauthParametersProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                OauthParametersProperty.Jsii$Proxy that = (OauthParametersProperty.Jsii$Proxy) o;

                if (this.authorizationEndpoint != null ? !this.authorizationEndpoint.equals(that.authorizationEndpoint) : that.authorizationEndpoint != null) return false;
                if (this.clientParameters != null ? !this.clientParameters.equals(that.clientParameters) : that.clientParameters != null) return false;
                if (this.httpMethod != null ? !this.httpMethod.equals(that.httpMethod) : that.httpMethod != null) return false;
                return this.oauthHttpParameters != null ? this.oauthHttpParameters.equals(that.oauthHttpParameters) : that.oauthHttpParameters == null;
            }

            @Override
            public final int hashCode() {
                int result = this.authorizationEndpoint != null ? this.authorizationEndpoint.hashCode() : 0;
                result = 31 * result + (this.clientParameters != null ? this.clientParameters.hashCode() : 0);
                result = 31 * result + (this.httpMethod != null ? this.httpMethod.hashCode() : 0);
                result = 31 * result + (this.oauthHttpParameters != null ? this.oauthHttpParameters.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.eventbridge.$Module.class, fqn = "@alicloud/ros-cdk-eventbridge.RosConnection.QueryStringParametersProperty")
    @software.amazon.jsii.Jsii.Proxy(QueryStringParametersProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface QueryStringParametersProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIsValueSecret() {
            return null;
        }

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
         * @return a {@link Builder} of {@link QueryStringParametersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link QueryStringParametersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<QueryStringParametersProperty> {
            java.lang.Object isValueSecret;
            java.lang.Object key;
            java.lang.Object value;

            /**
             * Sets the value of {@link QueryStringParametersProperty#getIsValueSecret}
             * @param isValueSecret the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder isValueSecret(java.lang.Boolean isValueSecret) {
                this.isValueSecret = isValueSecret;
                return this;
            }

            /**
             * Sets the value of {@link QueryStringParametersProperty#getIsValueSecret}
             * @param isValueSecret the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder isValueSecret(com.aliyun.ros.cdk.core.IResolvable isValueSecret) {
                this.isValueSecret = isValueSecret;
                return this;
            }

            /**
             * Sets the value of {@link QueryStringParametersProperty#getKey}
             * @param key the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(java.lang.String key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link QueryStringParametersProperty#getKey}
             * @param key the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(com.aliyun.ros.cdk.core.IResolvable key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link QueryStringParametersProperty#getValue}
             * @param value the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(java.lang.String value) {
                this.value = value;
                return this;
            }

            /**
             * Sets the value of {@link QueryStringParametersProperty#getValue}
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
             * @return a new instance of {@link QueryStringParametersProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public QueryStringParametersProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link QueryStringParametersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements QueryStringParametersProperty {
            private final java.lang.Object isValueSecret;
            private final java.lang.Object key;
            private final java.lang.Object value;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.isValueSecret = software.amazon.jsii.Kernel.get(this, "isValueSecret", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.key = software.amazon.jsii.Kernel.get(this, "key", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.value = software.amazon.jsii.Kernel.get(this, "value", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.isValueSecret = builder.isValueSecret;
                this.key = builder.key;
                this.value = builder.value;
            }

            @Override
            public final java.lang.Object getIsValueSecret() {
                return this.isValueSecret;
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

                if (this.getIsValueSecret() != null) {
                    data.set("isValueSecret", om.valueToTree(this.getIsValueSecret()));
                }
                if (this.getKey() != null) {
                    data.set("key", om.valueToTree(this.getKey()));
                }
                if (this.getValue() != null) {
                    data.set("value", om.valueToTree(this.getValue()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-eventbridge.RosConnection.QueryStringParametersProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                QueryStringParametersProperty.Jsii$Proxy that = (QueryStringParametersProperty.Jsii$Proxy) o;

                if (this.isValueSecret != null ? !this.isValueSecret.equals(that.isValueSecret) : that.isValueSecret != null) return false;
                if (this.key != null ? !this.key.equals(that.key) : that.key != null) return false;
                return this.value != null ? this.value.equals(that.value) : that.value == null;
            }

            @Override
            public final int hashCode() {
                int result = this.isValueSecret != null ? this.isValueSecret.hashCode() : 0;
                result = 31 * result + (this.key != null ? this.key.hashCode() : 0);
                result = 31 * result + (this.value != null ? this.value.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.eventbridge.RosConnection}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.eventbridge.RosConnection> {
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
        private final com.aliyun.ros.cdk.eventbridge.RosConnectionProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.eventbridge.RosConnectionProps.Builder();
        }

        /**
         * @return {@code this}
         * @param connectionName This parameter is required.
         */
        public Builder connectionName(final java.lang.String connectionName) {
            this.props.connectionName(connectionName);
            return this;
        }
        /**
         * @return {@code this}
         * @param connectionName This parameter is required.
         */
        public Builder connectionName(final com.aliyun.ros.cdk.core.IResolvable connectionName) {
            this.props.connectionName(connectionName);
            return this;
        }

        /**
         * @return {@code this}
         * @param networkParameters This parameter is required.
         */
        public Builder networkParameters(final com.aliyun.ros.cdk.core.IResolvable networkParameters) {
            this.props.networkParameters(networkParameters);
            return this;
        }
        /**
         * @return {@code this}
         * @param networkParameters This parameter is required.
         */
        public Builder networkParameters(final com.aliyun.ros.cdk.eventbridge.RosConnection.NetworkParametersProperty networkParameters) {
            this.props.networkParameters(networkParameters);
            return this;
        }

        /**
         * @return {@code this}
         * @param authParameters This parameter is required.
         */
        public Builder authParameters(final com.aliyun.ros.cdk.core.IResolvable authParameters) {
            this.props.authParameters(authParameters);
            return this;
        }
        /**
         * @return {@code this}
         * @param authParameters This parameter is required.
         */
        public Builder authParameters(final com.aliyun.ros.cdk.eventbridge.RosConnection.AuthParametersProperty authParameters) {
            this.props.authParameters(authParameters);
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
         * @return a newly built instance of {@link com.aliyun.ros.cdk.eventbridge.RosConnection}.
         */
        @Override
        public com.aliyun.ros.cdk.eventbridge.RosConnection build() {
            return new com.aliyun.ros.cdk.eventbridge.RosConnection(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
