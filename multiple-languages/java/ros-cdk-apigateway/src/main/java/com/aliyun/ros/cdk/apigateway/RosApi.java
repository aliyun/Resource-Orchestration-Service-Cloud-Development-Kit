package com.aliyun.ros.cdk.apigateway;

/**
 * A ROS template type:  `ALIYUN::ApiGateway::Api`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-02-04T07:29:35.095Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apigateway.$Module.class, fqn = "@alicloud/ros-cdk-apigateway.RosApi")
public class RosApi extends com.aliyun.ros.cdk.core.RosResource {

    protected RosApi(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosApi(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.apigateway.RosApi.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new `ALIYUN::ApiGateway::Api`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosApi(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apigateway.RosApiProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrApiId() {
        return software.amazon.jsii.Kernel.get(this, "attrApiId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.String getApiName() {
        return software.amazon.jsii.Kernel.get(this, "apiName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setApiName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "apiName", java.util.Objects.requireNonNull(value, "apiName is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.String getGroupId() {
        return software.amazon.jsii.Kernel.get(this, "groupId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setGroupId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "groupId", java.util.Objects.requireNonNull(value, "groupId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getRequestConfig() {
        return software.amazon.jsii.Kernel.get(this, "requestConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRequestConfig(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "requestConfig", java.util.Objects.requireNonNull(value, "requestConfig is required"));
    }

    /**
     */
    public void setRequestConfig(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apigateway.RosApi.RequestConfigProperty value) {
        software.amazon.jsii.Kernel.set(this, "requestConfig", java.util.Objects.requireNonNull(value, "requestConfig is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.String getResultSample() {
        return software.amazon.jsii.Kernel.get(this, "resultSample", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setResultSample(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "resultSample", java.util.Objects.requireNonNull(value, "resultSample is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.String getResultType() {
        return software.amazon.jsii.Kernel.get(this, "resultType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setResultType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "resultType", java.util.Objects.requireNonNull(value, "resultType is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getServiceConfig() {
        return software.amazon.jsii.Kernel.get(this, "serviceConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setServiceConfig(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "serviceConfig", java.util.Objects.requireNonNull(value, "serviceConfig is required"));
    }

    /**
     */
    public void setServiceConfig(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apigateway.RosApi.ServiceConfigProperty value) {
        software.amazon.jsii.Kernel.set(this, "serviceConfig", java.util.Objects.requireNonNull(value, "serviceConfig is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.String getVisibility() {
        return software.amazon.jsii.Kernel.get(this, "visibility", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setVisibility(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "visibility", java.util.Objects.requireNonNull(value, "visibility is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getAppCodeAuthType() {
        return software.amazon.jsii.Kernel.get(this, "appCodeAuthType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setAppCodeAuthType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "appCodeAuthType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getAuthType() {
        return software.amazon.jsii.Kernel.get(this, "authType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setAuthType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "authType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getConstParameters() {
        return software.amazon.jsii.Kernel.get(this, "constParameters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setConstParameters(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "constParameters", value);
    }

    /**
     */
    public void setConstParameters(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        software.amazon.jsii.Kernel.set(this, "constParameters", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getDescription() {
        return software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "description", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getErrorCodeSamples() {
        return software.amazon.jsii.Kernel.get(this, "errorCodeSamples", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setErrorCodeSamples(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "errorCodeSamples", value);
    }

    /**
     */
    public void setErrorCodeSamples(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        software.amazon.jsii.Kernel.set(this, "errorCodeSamples", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getFailResultSample() {
        return software.amazon.jsii.Kernel.get(this, "failResultSample", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setFailResultSample(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "failResultSample", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getOpenIdConnectConfig() {
        return software.amazon.jsii.Kernel.get(this, "openIdConnectConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setOpenIdConnectConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "openIdConnectConfig", value);
    }

    /**
     */
    public void setOpenIdConnectConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.apigateway.RosApi.OpenIdConnectConfigProperty value) {
        software.amazon.jsii.Kernel.set(this, "openIdConnectConfig", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRequestParameters() {
        return software.amazon.jsii.Kernel.get(this, "requestParameters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRequestParameters(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "requestParameters", value);
    }

    /**
     */
    public void setRequestParameters(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        software.amazon.jsii.Kernel.set(this, "requestParameters", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getServiceParameters() {
        return software.amazon.jsii.Kernel.get(this, "serviceParameters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setServiceParameters(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "serviceParameters", value);
    }

    /**
     */
    public void setServiceParameters(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        software.amazon.jsii.Kernel.set(this, "serviceParameters", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getServiceParametersMap() {
        return software.amazon.jsii.Kernel.get(this, "serviceParametersMap", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setServiceParametersMap(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "serviceParametersMap", value);
    }

    /**
     */
    public void setServiceParametersMap(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        software.amazon.jsii.Kernel.set(this, "serviceParametersMap", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSystemParameters() {
        return software.amazon.jsii.Kernel.get(this, "systemParameters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSystemParameters(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "systemParameters", value);
    }

    /**
     */
    public void setSystemParameters(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        software.amazon.jsii.Kernel.set(this, "systemParameters", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apigateway.$Module.class, fqn = "@alicloud/ros-cdk-apigateway.RosApi.ConstParametersProperty")
    @software.amazon.jsii.Jsii.Proxy(ConstParametersProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ConstParametersProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.String getConstValue();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.String getLocation();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.String getServiceParameterName();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getDescription() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ConstParametersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ConstParametersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ConstParametersProperty> {
            private java.lang.String constValue;
            private java.lang.String location;
            private java.lang.String serviceParameterName;
            private java.lang.String description;

            /**
             * Sets the value of {@link ConstParametersProperty#getConstValue}
             * @param constValue the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder constValue(java.lang.String constValue) {
                this.constValue = constValue;
                return this;
            }

            /**
             * Sets the value of {@link ConstParametersProperty#getLocation}
             * @param location the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder location(java.lang.String location) {
                this.location = location;
                return this;
            }

            /**
             * Sets the value of {@link ConstParametersProperty#getServiceParameterName}
             * @param serviceParameterName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serviceParameterName(java.lang.String serviceParameterName) {
                this.serviceParameterName = serviceParameterName;
                return this;
            }

            /**
             * Sets the value of {@link ConstParametersProperty#getDescription}
             * @param description the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder description(java.lang.String description) {
                this.description = description;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ConstParametersProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ConstParametersProperty build() {
                return new Jsii$Proxy(constValue, location, serviceParameterName, description);
            }
        }

        /**
         * An implementation for {@link ConstParametersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ConstParametersProperty {
            private final java.lang.String constValue;
            private final java.lang.String location;
            private final java.lang.String serviceParameterName;
            private final java.lang.String description;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.constValue = software.amazon.jsii.Kernel.get(this, "constValue", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.location = software.amazon.jsii.Kernel.get(this, "location", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.serviceParameterName = software.amazon.jsii.Kernel.get(this, "serviceParameterName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final java.lang.String constValue, final java.lang.String location, final java.lang.String serviceParameterName, final java.lang.String description) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.constValue = java.util.Objects.requireNonNull(constValue, "constValue is required");
                this.location = java.util.Objects.requireNonNull(location, "location is required");
                this.serviceParameterName = java.util.Objects.requireNonNull(serviceParameterName, "serviceParameterName is required");
                this.description = description;
            }

            @Override
            public final java.lang.String getConstValue() {
                return this.constValue;
            }

            @Override
            public final java.lang.String getLocation() {
                return this.location;
            }

            @Override
            public final java.lang.String getServiceParameterName() {
                return this.serviceParameterName;
            }

            @Override
            public final java.lang.String getDescription() {
                return this.description;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("constValue", om.valueToTree(this.getConstValue()));
                data.set("location", om.valueToTree(this.getLocation()));
                data.set("serviceParameterName", om.valueToTree(this.getServiceParameterName()));
                if (this.getDescription() != null) {
                    data.set("description", om.valueToTree(this.getDescription()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apigateway.RosApi.ConstParametersProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ConstParametersProperty.Jsii$Proxy that = (ConstParametersProperty.Jsii$Proxy) o;

                if (!constValue.equals(that.constValue)) return false;
                if (!location.equals(that.location)) return false;
                if (!serviceParameterName.equals(that.serviceParameterName)) return false;
                return this.description != null ? this.description.equals(that.description) : that.description == null;
            }

            @Override
            public final int hashCode() {
                int result = this.constValue.hashCode();
                result = 31 * result + (this.location.hashCode());
                result = 31 * result + (this.serviceParameterName.hashCode());
                result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apigateway.$Module.class, fqn = "@alicloud/ros-cdk-apigateway.RosApi.ErrorCodeSamplesProperty")
    @software.amazon.jsii.Jsii.Proxy(ErrorCodeSamplesProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ErrorCodeSamplesProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.String getCode();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.String getMessage();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getDescription() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ErrorCodeSamplesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ErrorCodeSamplesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ErrorCodeSamplesProperty> {
            private java.lang.String code;
            private java.lang.String message;
            private java.lang.String description;

            /**
             * Sets the value of {@link ErrorCodeSamplesProperty#getCode}
             * @param code the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder code(java.lang.String code) {
                this.code = code;
                return this;
            }

            /**
             * Sets the value of {@link ErrorCodeSamplesProperty#getMessage}
             * @param message the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder message(java.lang.String message) {
                this.message = message;
                return this;
            }

            /**
             * Sets the value of {@link ErrorCodeSamplesProperty#getDescription}
             * @param description the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder description(java.lang.String description) {
                this.description = description;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ErrorCodeSamplesProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ErrorCodeSamplesProperty build() {
                return new Jsii$Proxy(code, message, description);
            }
        }

        /**
         * An implementation for {@link ErrorCodeSamplesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ErrorCodeSamplesProperty {
            private final java.lang.String code;
            private final java.lang.String message;
            private final java.lang.String description;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.code = software.amazon.jsii.Kernel.get(this, "code", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.message = software.amazon.jsii.Kernel.get(this, "message", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final java.lang.String code, final java.lang.String message, final java.lang.String description) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.code = java.util.Objects.requireNonNull(code, "code is required");
                this.message = java.util.Objects.requireNonNull(message, "message is required");
                this.description = description;
            }

            @Override
            public final java.lang.String getCode() {
                return this.code;
            }

            @Override
            public final java.lang.String getMessage() {
                return this.message;
            }

            @Override
            public final java.lang.String getDescription() {
                return this.description;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("code", om.valueToTree(this.getCode()));
                data.set("message", om.valueToTree(this.getMessage()));
                if (this.getDescription() != null) {
                    data.set("description", om.valueToTree(this.getDescription()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apigateway.RosApi.ErrorCodeSamplesProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ErrorCodeSamplesProperty.Jsii$Proxy that = (ErrorCodeSamplesProperty.Jsii$Proxy) o;

                if (!code.equals(that.code)) return false;
                if (!message.equals(that.message)) return false;
                return this.description != null ? this.description.equals(that.description) : that.description == null;
            }

            @Override
            public final int hashCode() {
                int result = this.code.hashCode();
                result = 31 * result + (this.message.hashCode());
                result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apigateway.$Module.class, fqn = "@alicloud/ros-cdk-apigateway.RosApi.FunctionComputeConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(FunctionComputeConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface FunctionComputeConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.String getFcRegionId();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.String getFunctionName();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.String getRoleArn();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.String getServiceName();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getQualifier() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link FunctionComputeConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link FunctionComputeConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<FunctionComputeConfigProperty> {
            private java.lang.String fcRegionId;
            private java.lang.String functionName;
            private java.lang.String roleArn;
            private java.lang.String serviceName;
            private java.lang.String qualifier;

            /**
             * Sets the value of {@link FunctionComputeConfigProperty#getFcRegionId}
             * @param fcRegionId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder fcRegionId(java.lang.String fcRegionId) {
                this.fcRegionId = fcRegionId;
                return this;
            }

            /**
             * Sets the value of {@link FunctionComputeConfigProperty#getFunctionName}
             * @param functionName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder functionName(java.lang.String functionName) {
                this.functionName = functionName;
                return this;
            }

            /**
             * Sets the value of {@link FunctionComputeConfigProperty#getRoleArn}
             * @param roleArn the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder roleArn(java.lang.String roleArn) {
                this.roleArn = roleArn;
                return this;
            }

            /**
             * Sets the value of {@link FunctionComputeConfigProperty#getServiceName}
             * @param serviceName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serviceName(java.lang.String serviceName) {
                this.serviceName = serviceName;
                return this;
            }

            /**
             * Sets the value of {@link FunctionComputeConfigProperty#getQualifier}
             * @param qualifier the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder qualifier(java.lang.String qualifier) {
                this.qualifier = qualifier;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link FunctionComputeConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public FunctionComputeConfigProperty build() {
                return new Jsii$Proxy(fcRegionId, functionName, roleArn, serviceName, qualifier);
            }
        }

        /**
         * An implementation for {@link FunctionComputeConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements FunctionComputeConfigProperty {
            private final java.lang.String fcRegionId;
            private final java.lang.String functionName;
            private final java.lang.String roleArn;
            private final java.lang.String serviceName;
            private final java.lang.String qualifier;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.fcRegionId = software.amazon.jsii.Kernel.get(this, "fcRegionId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.functionName = software.amazon.jsii.Kernel.get(this, "functionName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.roleArn = software.amazon.jsii.Kernel.get(this, "roleArn", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.serviceName = software.amazon.jsii.Kernel.get(this, "serviceName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.qualifier = software.amazon.jsii.Kernel.get(this, "qualifier", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final java.lang.String fcRegionId, final java.lang.String functionName, final java.lang.String roleArn, final java.lang.String serviceName, final java.lang.String qualifier) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.fcRegionId = java.util.Objects.requireNonNull(fcRegionId, "fcRegionId is required");
                this.functionName = java.util.Objects.requireNonNull(functionName, "functionName is required");
                this.roleArn = java.util.Objects.requireNonNull(roleArn, "roleArn is required");
                this.serviceName = java.util.Objects.requireNonNull(serviceName, "serviceName is required");
                this.qualifier = qualifier;
            }

            @Override
            public final java.lang.String getFcRegionId() {
                return this.fcRegionId;
            }

            @Override
            public final java.lang.String getFunctionName() {
                return this.functionName;
            }

            @Override
            public final java.lang.String getRoleArn() {
                return this.roleArn;
            }

            @Override
            public final java.lang.String getServiceName() {
                return this.serviceName;
            }

            @Override
            public final java.lang.String getQualifier() {
                return this.qualifier;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("fcRegionId", om.valueToTree(this.getFcRegionId()));
                data.set("functionName", om.valueToTree(this.getFunctionName()));
                data.set("roleArn", om.valueToTree(this.getRoleArn()));
                data.set("serviceName", om.valueToTree(this.getServiceName()));
                if (this.getQualifier() != null) {
                    data.set("qualifier", om.valueToTree(this.getQualifier()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apigateway.RosApi.FunctionComputeConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                FunctionComputeConfigProperty.Jsii$Proxy that = (FunctionComputeConfigProperty.Jsii$Proxy) o;

                if (!fcRegionId.equals(that.fcRegionId)) return false;
                if (!functionName.equals(that.functionName)) return false;
                if (!roleArn.equals(that.roleArn)) return false;
                if (!serviceName.equals(that.serviceName)) return false;
                return this.qualifier != null ? this.qualifier.equals(that.qualifier) : that.qualifier == null;
            }

            @Override
            public final int hashCode() {
                int result = this.fcRegionId.hashCode();
                result = 31 * result + (this.functionName.hashCode());
                result = 31 * result + (this.roleArn.hashCode());
                result = 31 * result + (this.serviceName.hashCode());
                result = 31 * result + (this.qualifier != null ? this.qualifier.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apigateway.$Module.class, fqn = "@alicloud/ros-cdk-apigateway.RosApi.MockHeadersProperty")
    @software.amazon.jsii.Jsii.Proxy(MockHeadersProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface MockHeadersProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.String getHeaderName();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.String getHeaderValue();

        /**
         * @return a {@link Builder} of {@link MockHeadersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link MockHeadersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<MockHeadersProperty> {
            private java.lang.String headerName;
            private java.lang.String headerValue;

            /**
             * Sets the value of {@link MockHeadersProperty#getHeaderName}
             * @param headerName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder headerName(java.lang.String headerName) {
                this.headerName = headerName;
                return this;
            }

            /**
             * Sets the value of {@link MockHeadersProperty#getHeaderValue}
             * @param headerValue the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder headerValue(java.lang.String headerValue) {
                this.headerValue = headerValue;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link MockHeadersProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public MockHeadersProperty build() {
                return new Jsii$Proxy(headerName, headerValue);
            }
        }

        /**
         * An implementation for {@link MockHeadersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements MockHeadersProperty {
            private final java.lang.String headerName;
            private final java.lang.String headerValue;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.headerName = software.amazon.jsii.Kernel.get(this, "headerName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.headerValue = software.amazon.jsii.Kernel.get(this, "headerValue", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final java.lang.String headerName, final java.lang.String headerValue) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.headerName = java.util.Objects.requireNonNull(headerName, "headerName is required");
                this.headerValue = java.util.Objects.requireNonNull(headerValue, "headerValue is required");
            }

            @Override
            public final java.lang.String getHeaderName() {
                return this.headerName;
            }

            @Override
            public final java.lang.String getHeaderValue() {
                return this.headerValue;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("headerName", om.valueToTree(this.getHeaderName()));
                data.set("headerValue", om.valueToTree(this.getHeaderValue()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apigateway.RosApi.MockHeadersProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                MockHeadersProperty.Jsii$Proxy that = (MockHeadersProperty.Jsii$Proxy) o;

                if (!headerName.equals(that.headerName)) return false;
                return this.headerValue.equals(that.headerValue);
            }

            @Override
            public final int hashCode() {
                int result = this.headerName.hashCode();
                result = 31 * result + (this.headerValue.hashCode());
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apigateway.$Module.class, fqn = "@alicloud/ros-cdk-apigateway.RosApi.OpenIdConnectConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(OpenIdConnectConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface OpenIdConnectConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.String getOpenIdApiType();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getIdTokenParamName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getPublicKey() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getPublicKeyId() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link OpenIdConnectConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link OpenIdConnectConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<OpenIdConnectConfigProperty> {
            private java.lang.String openIdApiType;
            private java.lang.String idTokenParamName;
            private java.lang.String publicKey;
            private java.lang.String publicKeyId;

            /**
             * Sets the value of {@link OpenIdConnectConfigProperty#getOpenIdApiType}
             * @param openIdApiType the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder openIdApiType(java.lang.String openIdApiType) {
                this.openIdApiType = openIdApiType;
                return this;
            }

            /**
             * Sets the value of {@link OpenIdConnectConfigProperty#getIdTokenParamName}
             * @param idTokenParamName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder idTokenParamName(java.lang.String idTokenParamName) {
                this.idTokenParamName = idTokenParamName;
                return this;
            }

            /**
             * Sets the value of {@link OpenIdConnectConfigProperty#getPublicKey}
             * @param publicKey the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder publicKey(java.lang.String publicKey) {
                this.publicKey = publicKey;
                return this;
            }

            /**
             * Sets the value of {@link OpenIdConnectConfigProperty#getPublicKeyId}
             * @param publicKeyId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder publicKeyId(java.lang.String publicKeyId) {
                this.publicKeyId = publicKeyId;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link OpenIdConnectConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public OpenIdConnectConfigProperty build() {
                return new Jsii$Proxy(openIdApiType, idTokenParamName, publicKey, publicKeyId);
            }
        }

        /**
         * An implementation for {@link OpenIdConnectConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements OpenIdConnectConfigProperty {
            private final java.lang.String openIdApiType;
            private final java.lang.String idTokenParamName;
            private final java.lang.String publicKey;
            private final java.lang.String publicKeyId;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.openIdApiType = software.amazon.jsii.Kernel.get(this, "openIdApiType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.idTokenParamName = software.amazon.jsii.Kernel.get(this, "idTokenParamName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.publicKey = software.amazon.jsii.Kernel.get(this, "publicKey", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.publicKeyId = software.amazon.jsii.Kernel.get(this, "publicKeyId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final java.lang.String openIdApiType, final java.lang.String idTokenParamName, final java.lang.String publicKey, final java.lang.String publicKeyId) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.openIdApiType = java.util.Objects.requireNonNull(openIdApiType, "openIdApiType is required");
                this.idTokenParamName = idTokenParamName;
                this.publicKey = publicKey;
                this.publicKeyId = publicKeyId;
            }

            @Override
            public final java.lang.String getOpenIdApiType() {
                return this.openIdApiType;
            }

            @Override
            public final java.lang.String getIdTokenParamName() {
                return this.idTokenParamName;
            }

            @Override
            public final java.lang.String getPublicKey() {
                return this.publicKey;
            }

            @Override
            public final java.lang.String getPublicKeyId() {
                return this.publicKeyId;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("openIdApiType", om.valueToTree(this.getOpenIdApiType()));
                if (this.getIdTokenParamName() != null) {
                    data.set("idTokenParamName", om.valueToTree(this.getIdTokenParamName()));
                }
                if (this.getPublicKey() != null) {
                    data.set("publicKey", om.valueToTree(this.getPublicKey()));
                }
                if (this.getPublicKeyId() != null) {
                    data.set("publicKeyId", om.valueToTree(this.getPublicKeyId()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apigateway.RosApi.OpenIdConnectConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                OpenIdConnectConfigProperty.Jsii$Proxy that = (OpenIdConnectConfigProperty.Jsii$Proxy) o;

                if (!openIdApiType.equals(that.openIdApiType)) return false;
                if (this.idTokenParamName != null ? !this.idTokenParamName.equals(that.idTokenParamName) : that.idTokenParamName != null) return false;
                if (this.publicKey != null ? !this.publicKey.equals(that.publicKey) : that.publicKey != null) return false;
                return this.publicKeyId != null ? this.publicKeyId.equals(that.publicKeyId) : that.publicKeyId == null;
            }

            @Override
            public final int hashCode() {
                int result = this.openIdApiType.hashCode();
                result = 31 * result + (this.idTokenParamName != null ? this.idTokenParamName.hashCode() : 0);
                result = 31 * result + (this.publicKey != null ? this.publicKey.hashCode() : 0);
                result = 31 * result + (this.publicKeyId != null ? this.publicKeyId.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apigateway.$Module.class, fqn = "@alicloud/ros-cdk-apigateway.RosApi.RequestConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(RequestConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface RequestConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.String getRequestHttpMethod();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.String getRequestMode();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.String getRequestPath();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.String getRequestProtocol();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getBodyFormat() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getPostBodyDescription() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link RequestConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link RequestConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<RequestConfigProperty> {
            private java.lang.String requestHttpMethod;
            private java.lang.String requestMode;
            private java.lang.String requestPath;
            private java.lang.String requestProtocol;
            private java.lang.String bodyFormat;
            private java.lang.String postBodyDescription;

            /**
             * Sets the value of {@link RequestConfigProperty#getRequestHttpMethod}
             * @param requestHttpMethod the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder requestHttpMethod(java.lang.String requestHttpMethod) {
                this.requestHttpMethod = requestHttpMethod;
                return this;
            }

            /**
             * Sets the value of {@link RequestConfigProperty#getRequestMode}
             * @param requestMode the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder requestMode(java.lang.String requestMode) {
                this.requestMode = requestMode;
                return this;
            }

            /**
             * Sets the value of {@link RequestConfigProperty#getRequestPath}
             * @param requestPath the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder requestPath(java.lang.String requestPath) {
                this.requestPath = requestPath;
                return this;
            }

            /**
             * Sets the value of {@link RequestConfigProperty#getRequestProtocol}
             * @param requestProtocol the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder requestProtocol(java.lang.String requestProtocol) {
                this.requestProtocol = requestProtocol;
                return this;
            }

            /**
             * Sets the value of {@link RequestConfigProperty#getBodyFormat}
             * @param bodyFormat the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder bodyFormat(java.lang.String bodyFormat) {
                this.bodyFormat = bodyFormat;
                return this;
            }

            /**
             * Sets the value of {@link RequestConfigProperty#getPostBodyDescription}
             * @param postBodyDescription the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder postBodyDescription(java.lang.String postBodyDescription) {
                this.postBodyDescription = postBodyDescription;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link RequestConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public RequestConfigProperty build() {
                return new Jsii$Proxy(requestHttpMethod, requestMode, requestPath, requestProtocol, bodyFormat, postBodyDescription);
            }
        }

        /**
         * An implementation for {@link RequestConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RequestConfigProperty {
            private final java.lang.String requestHttpMethod;
            private final java.lang.String requestMode;
            private final java.lang.String requestPath;
            private final java.lang.String requestProtocol;
            private final java.lang.String bodyFormat;
            private final java.lang.String postBodyDescription;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.requestHttpMethod = software.amazon.jsii.Kernel.get(this, "requestHttpMethod", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.requestMode = software.amazon.jsii.Kernel.get(this, "requestMode", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.requestPath = software.amazon.jsii.Kernel.get(this, "requestPath", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.requestProtocol = software.amazon.jsii.Kernel.get(this, "requestProtocol", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.bodyFormat = software.amazon.jsii.Kernel.get(this, "bodyFormat", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.postBodyDescription = software.amazon.jsii.Kernel.get(this, "postBodyDescription", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final java.lang.String requestHttpMethod, final java.lang.String requestMode, final java.lang.String requestPath, final java.lang.String requestProtocol, final java.lang.String bodyFormat, final java.lang.String postBodyDescription) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.requestHttpMethod = java.util.Objects.requireNonNull(requestHttpMethod, "requestHttpMethod is required");
                this.requestMode = java.util.Objects.requireNonNull(requestMode, "requestMode is required");
                this.requestPath = java.util.Objects.requireNonNull(requestPath, "requestPath is required");
                this.requestProtocol = java.util.Objects.requireNonNull(requestProtocol, "requestProtocol is required");
                this.bodyFormat = bodyFormat;
                this.postBodyDescription = postBodyDescription;
            }

            @Override
            public final java.lang.String getRequestHttpMethod() {
                return this.requestHttpMethod;
            }

            @Override
            public final java.lang.String getRequestMode() {
                return this.requestMode;
            }

            @Override
            public final java.lang.String getRequestPath() {
                return this.requestPath;
            }

            @Override
            public final java.lang.String getRequestProtocol() {
                return this.requestProtocol;
            }

            @Override
            public final java.lang.String getBodyFormat() {
                return this.bodyFormat;
            }

            @Override
            public final java.lang.String getPostBodyDescription() {
                return this.postBodyDescription;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("requestHttpMethod", om.valueToTree(this.getRequestHttpMethod()));
                data.set("requestMode", om.valueToTree(this.getRequestMode()));
                data.set("requestPath", om.valueToTree(this.getRequestPath()));
                data.set("requestProtocol", om.valueToTree(this.getRequestProtocol()));
                if (this.getBodyFormat() != null) {
                    data.set("bodyFormat", om.valueToTree(this.getBodyFormat()));
                }
                if (this.getPostBodyDescription() != null) {
                    data.set("postBodyDescription", om.valueToTree(this.getPostBodyDescription()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apigateway.RosApi.RequestConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                RequestConfigProperty.Jsii$Proxy that = (RequestConfigProperty.Jsii$Proxy) o;

                if (!requestHttpMethod.equals(that.requestHttpMethod)) return false;
                if (!requestMode.equals(that.requestMode)) return false;
                if (!requestPath.equals(that.requestPath)) return false;
                if (!requestProtocol.equals(that.requestProtocol)) return false;
                if (this.bodyFormat != null ? !this.bodyFormat.equals(that.bodyFormat) : that.bodyFormat != null) return false;
                return this.postBodyDescription != null ? this.postBodyDescription.equals(that.postBodyDescription) : that.postBodyDescription == null;
            }

            @Override
            public final int hashCode() {
                int result = this.requestHttpMethod.hashCode();
                result = 31 * result + (this.requestMode.hashCode());
                result = 31 * result + (this.requestPath.hashCode());
                result = 31 * result + (this.requestProtocol.hashCode());
                result = 31 * result + (this.bodyFormat != null ? this.bodyFormat.hashCode() : 0);
                result = 31 * result + (this.postBodyDescription != null ? this.postBodyDescription.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apigateway.$Module.class, fqn = "@alicloud/ros-cdk-apigateway.RosApi.RequestParametersProperty")
    @software.amazon.jsii.Jsii.Proxy(RequestParametersProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface RequestParametersProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.String getApiParameterName();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.String getLocation();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.String getParameterType();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.String getRequired();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getDefaultValue() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getDemoValue() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getDescription() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Number getDocOrder() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getDocShow() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getEnumValue() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getJsonScheme() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Number getMaxLength() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Number getMaxValue() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Number getMinLength() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Number getMinValue() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getRegularExpression() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link RequestParametersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link RequestParametersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<RequestParametersProperty> {
            private java.lang.String apiParameterName;
            private java.lang.String location;
            private java.lang.String parameterType;
            private java.lang.String required;
            private java.lang.String defaultValue;
            private java.lang.String demoValue;
            private java.lang.String description;
            private java.lang.Number docOrder;
            private java.lang.String docShow;
            private java.lang.String enumValue;
            private java.lang.String jsonScheme;
            private java.lang.Number maxLength;
            private java.lang.Number maxValue;
            private java.lang.Number minLength;
            private java.lang.Number minValue;
            private java.lang.String regularExpression;

            /**
             * Sets the value of {@link RequestParametersProperty#getApiParameterName}
             * @param apiParameterName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder apiParameterName(java.lang.String apiParameterName) {
                this.apiParameterName = apiParameterName;
                return this;
            }

            /**
             * Sets the value of {@link RequestParametersProperty#getLocation}
             * @param location the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder location(java.lang.String location) {
                this.location = location;
                return this;
            }

            /**
             * Sets the value of {@link RequestParametersProperty#getParameterType}
             * @param parameterType the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder parameterType(java.lang.String parameterType) {
                this.parameterType = parameterType;
                return this;
            }

            /**
             * Sets the value of {@link RequestParametersProperty#getRequired}
             * @param required the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder required(java.lang.String required) {
                this.required = required;
                return this;
            }

            /**
             * Sets the value of {@link RequestParametersProperty#getDefaultValue}
             * @param defaultValue the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder defaultValue(java.lang.String defaultValue) {
                this.defaultValue = defaultValue;
                return this;
            }

            /**
             * Sets the value of {@link RequestParametersProperty#getDemoValue}
             * @param demoValue the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder demoValue(java.lang.String demoValue) {
                this.demoValue = demoValue;
                return this;
            }

            /**
             * Sets the value of {@link RequestParametersProperty#getDescription}
             * @param description the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder description(java.lang.String description) {
                this.description = description;
                return this;
            }

            /**
             * Sets the value of {@link RequestParametersProperty#getDocOrder}
             * @param docOrder the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder docOrder(java.lang.Number docOrder) {
                this.docOrder = docOrder;
                return this;
            }

            /**
             * Sets the value of {@link RequestParametersProperty#getDocShow}
             * @param docShow the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder docShow(java.lang.String docShow) {
                this.docShow = docShow;
                return this;
            }

            /**
             * Sets the value of {@link RequestParametersProperty#getEnumValue}
             * @param enumValue the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enumValue(java.lang.String enumValue) {
                this.enumValue = enumValue;
                return this;
            }

            /**
             * Sets the value of {@link RequestParametersProperty#getJsonScheme}
             * @param jsonScheme the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder jsonScheme(java.lang.String jsonScheme) {
                this.jsonScheme = jsonScheme;
                return this;
            }

            /**
             * Sets the value of {@link RequestParametersProperty#getMaxLength}
             * @param maxLength the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder maxLength(java.lang.Number maxLength) {
                this.maxLength = maxLength;
                return this;
            }

            /**
             * Sets the value of {@link RequestParametersProperty#getMaxValue}
             * @param maxValue the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder maxValue(java.lang.Number maxValue) {
                this.maxValue = maxValue;
                return this;
            }

            /**
             * Sets the value of {@link RequestParametersProperty#getMinLength}
             * @param minLength the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder minLength(java.lang.Number minLength) {
                this.minLength = minLength;
                return this;
            }

            /**
             * Sets the value of {@link RequestParametersProperty#getMinValue}
             * @param minValue the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder minValue(java.lang.Number minValue) {
                this.minValue = minValue;
                return this;
            }

            /**
             * Sets the value of {@link RequestParametersProperty#getRegularExpression}
             * @param regularExpression the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder regularExpression(java.lang.String regularExpression) {
                this.regularExpression = regularExpression;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link RequestParametersProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public RequestParametersProperty build() {
                return new Jsii$Proxy(apiParameterName, location, parameterType, required, defaultValue, demoValue, description, docOrder, docShow, enumValue, jsonScheme, maxLength, maxValue, minLength, minValue, regularExpression);
            }
        }

        /**
         * An implementation for {@link RequestParametersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RequestParametersProperty {
            private final java.lang.String apiParameterName;
            private final java.lang.String location;
            private final java.lang.String parameterType;
            private final java.lang.String required;
            private final java.lang.String defaultValue;
            private final java.lang.String demoValue;
            private final java.lang.String description;
            private final java.lang.Number docOrder;
            private final java.lang.String docShow;
            private final java.lang.String enumValue;
            private final java.lang.String jsonScheme;
            private final java.lang.Number maxLength;
            private final java.lang.Number maxValue;
            private final java.lang.Number minLength;
            private final java.lang.Number minValue;
            private final java.lang.String regularExpression;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.apiParameterName = software.amazon.jsii.Kernel.get(this, "apiParameterName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.location = software.amazon.jsii.Kernel.get(this, "location", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.parameterType = software.amazon.jsii.Kernel.get(this, "parameterType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.required = software.amazon.jsii.Kernel.get(this, "required", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.defaultValue = software.amazon.jsii.Kernel.get(this, "defaultValue", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.demoValue = software.amazon.jsii.Kernel.get(this, "demoValue", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.docOrder = software.amazon.jsii.Kernel.get(this, "docOrder", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
                this.docShow = software.amazon.jsii.Kernel.get(this, "docShow", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.enumValue = software.amazon.jsii.Kernel.get(this, "enumValue", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.jsonScheme = software.amazon.jsii.Kernel.get(this, "jsonScheme", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.maxLength = software.amazon.jsii.Kernel.get(this, "maxLength", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
                this.maxValue = software.amazon.jsii.Kernel.get(this, "maxValue", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
                this.minLength = software.amazon.jsii.Kernel.get(this, "minLength", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
                this.minValue = software.amazon.jsii.Kernel.get(this, "minValue", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
                this.regularExpression = software.amazon.jsii.Kernel.get(this, "regularExpression", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final java.lang.String apiParameterName, final java.lang.String location, final java.lang.String parameterType, final java.lang.String required, final java.lang.String defaultValue, final java.lang.String demoValue, final java.lang.String description, final java.lang.Number docOrder, final java.lang.String docShow, final java.lang.String enumValue, final java.lang.String jsonScheme, final java.lang.Number maxLength, final java.lang.Number maxValue, final java.lang.Number minLength, final java.lang.Number minValue, final java.lang.String regularExpression) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.apiParameterName = java.util.Objects.requireNonNull(apiParameterName, "apiParameterName is required");
                this.location = java.util.Objects.requireNonNull(location, "location is required");
                this.parameterType = java.util.Objects.requireNonNull(parameterType, "parameterType is required");
                this.required = java.util.Objects.requireNonNull(required, "required is required");
                this.defaultValue = defaultValue;
                this.demoValue = demoValue;
                this.description = description;
                this.docOrder = docOrder;
                this.docShow = docShow;
                this.enumValue = enumValue;
                this.jsonScheme = jsonScheme;
                this.maxLength = maxLength;
                this.maxValue = maxValue;
                this.minLength = minLength;
                this.minValue = minValue;
                this.regularExpression = regularExpression;
            }

            @Override
            public final java.lang.String getApiParameterName() {
                return this.apiParameterName;
            }

            @Override
            public final java.lang.String getLocation() {
                return this.location;
            }

            @Override
            public final java.lang.String getParameterType() {
                return this.parameterType;
            }

            @Override
            public final java.lang.String getRequired() {
                return this.required;
            }

            @Override
            public final java.lang.String getDefaultValue() {
                return this.defaultValue;
            }

            @Override
            public final java.lang.String getDemoValue() {
                return this.demoValue;
            }

            @Override
            public final java.lang.String getDescription() {
                return this.description;
            }

            @Override
            public final java.lang.Number getDocOrder() {
                return this.docOrder;
            }

            @Override
            public final java.lang.String getDocShow() {
                return this.docShow;
            }

            @Override
            public final java.lang.String getEnumValue() {
                return this.enumValue;
            }

            @Override
            public final java.lang.String getJsonScheme() {
                return this.jsonScheme;
            }

            @Override
            public final java.lang.Number getMaxLength() {
                return this.maxLength;
            }

            @Override
            public final java.lang.Number getMaxValue() {
                return this.maxValue;
            }

            @Override
            public final java.lang.Number getMinLength() {
                return this.minLength;
            }

            @Override
            public final java.lang.Number getMinValue() {
                return this.minValue;
            }

            @Override
            public final java.lang.String getRegularExpression() {
                return this.regularExpression;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("apiParameterName", om.valueToTree(this.getApiParameterName()));
                data.set("location", om.valueToTree(this.getLocation()));
                data.set("parameterType", om.valueToTree(this.getParameterType()));
                data.set("required", om.valueToTree(this.getRequired()));
                if (this.getDefaultValue() != null) {
                    data.set("defaultValue", om.valueToTree(this.getDefaultValue()));
                }
                if (this.getDemoValue() != null) {
                    data.set("demoValue", om.valueToTree(this.getDemoValue()));
                }
                if (this.getDescription() != null) {
                    data.set("description", om.valueToTree(this.getDescription()));
                }
                if (this.getDocOrder() != null) {
                    data.set("docOrder", om.valueToTree(this.getDocOrder()));
                }
                if (this.getDocShow() != null) {
                    data.set("docShow", om.valueToTree(this.getDocShow()));
                }
                if (this.getEnumValue() != null) {
                    data.set("enumValue", om.valueToTree(this.getEnumValue()));
                }
                if (this.getJsonScheme() != null) {
                    data.set("jsonScheme", om.valueToTree(this.getJsonScheme()));
                }
                if (this.getMaxLength() != null) {
                    data.set("maxLength", om.valueToTree(this.getMaxLength()));
                }
                if (this.getMaxValue() != null) {
                    data.set("maxValue", om.valueToTree(this.getMaxValue()));
                }
                if (this.getMinLength() != null) {
                    data.set("minLength", om.valueToTree(this.getMinLength()));
                }
                if (this.getMinValue() != null) {
                    data.set("minValue", om.valueToTree(this.getMinValue()));
                }
                if (this.getRegularExpression() != null) {
                    data.set("regularExpression", om.valueToTree(this.getRegularExpression()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apigateway.RosApi.RequestParametersProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                RequestParametersProperty.Jsii$Proxy that = (RequestParametersProperty.Jsii$Proxy) o;

                if (!apiParameterName.equals(that.apiParameterName)) return false;
                if (!location.equals(that.location)) return false;
                if (!parameterType.equals(that.parameterType)) return false;
                if (!required.equals(that.required)) return false;
                if (this.defaultValue != null ? !this.defaultValue.equals(that.defaultValue) : that.defaultValue != null) return false;
                if (this.demoValue != null ? !this.demoValue.equals(that.demoValue) : that.demoValue != null) return false;
                if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
                if (this.docOrder != null ? !this.docOrder.equals(that.docOrder) : that.docOrder != null) return false;
                if (this.docShow != null ? !this.docShow.equals(that.docShow) : that.docShow != null) return false;
                if (this.enumValue != null ? !this.enumValue.equals(that.enumValue) : that.enumValue != null) return false;
                if (this.jsonScheme != null ? !this.jsonScheme.equals(that.jsonScheme) : that.jsonScheme != null) return false;
                if (this.maxLength != null ? !this.maxLength.equals(that.maxLength) : that.maxLength != null) return false;
                if (this.maxValue != null ? !this.maxValue.equals(that.maxValue) : that.maxValue != null) return false;
                if (this.minLength != null ? !this.minLength.equals(that.minLength) : that.minLength != null) return false;
                if (this.minValue != null ? !this.minValue.equals(that.minValue) : that.minValue != null) return false;
                return this.regularExpression != null ? this.regularExpression.equals(that.regularExpression) : that.regularExpression == null;
            }

            @Override
            public final int hashCode() {
                int result = this.apiParameterName.hashCode();
                result = 31 * result + (this.location.hashCode());
                result = 31 * result + (this.parameterType.hashCode());
                result = 31 * result + (this.required.hashCode());
                result = 31 * result + (this.defaultValue != null ? this.defaultValue.hashCode() : 0);
                result = 31 * result + (this.demoValue != null ? this.demoValue.hashCode() : 0);
                result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
                result = 31 * result + (this.docOrder != null ? this.docOrder.hashCode() : 0);
                result = 31 * result + (this.docShow != null ? this.docShow.hashCode() : 0);
                result = 31 * result + (this.enumValue != null ? this.enumValue.hashCode() : 0);
                result = 31 * result + (this.jsonScheme != null ? this.jsonScheme.hashCode() : 0);
                result = 31 * result + (this.maxLength != null ? this.maxLength.hashCode() : 0);
                result = 31 * result + (this.maxValue != null ? this.maxValue.hashCode() : 0);
                result = 31 * result + (this.minLength != null ? this.minLength.hashCode() : 0);
                result = 31 * result + (this.minValue != null ? this.minValue.hashCode() : 0);
                result = 31 * result + (this.regularExpression != null ? this.regularExpression.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apigateway.$Module.class, fqn = "@alicloud/ros-cdk-apigateway.RosApi.ServiceConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(ServiceConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ServiceConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getContentTypeCatagory() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getContentTypeValue() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getFunctionComputeConfig() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getMock() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMockHeaders() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getMockResult() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Number getMockStatusCode() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getServiceAddress() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getServiceHttpMethod() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getServicePath() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getServiceProtocol() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Number getServiceTimeOut() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getServiceVpcEnable() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getVpcConfig() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ServiceConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ServiceConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ServiceConfigProperty> {
            private java.lang.String contentTypeCatagory;
            private java.lang.String contentTypeValue;
            private java.lang.Object functionComputeConfig;
            private java.lang.String mock;
            private java.lang.Object mockHeaders;
            private java.lang.String mockResult;
            private java.lang.Number mockStatusCode;
            private java.lang.String serviceAddress;
            private java.lang.String serviceHttpMethod;
            private java.lang.String servicePath;
            private java.lang.String serviceProtocol;
            private java.lang.Number serviceTimeOut;
            private java.lang.String serviceVpcEnable;
            private java.lang.Object vpcConfig;

            /**
             * Sets the value of {@link ServiceConfigProperty#getContentTypeCatagory}
             * @param contentTypeCatagory the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder contentTypeCatagory(java.lang.String contentTypeCatagory) {
                this.contentTypeCatagory = contentTypeCatagory;
                return this;
            }

            /**
             * Sets the value of {@link ServiceConfigProperty#getContentTypeValue}
             * @param contentTypeValue the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder contentTypeValue(java.lang.String contentTypeValue) {
                this.contentTypeValue = contentTypeValue;
                return this;
            }

            /**
             * Sets the value of {@link ServiceConfigProperty#getFunctionComputeConfig}
             * @param functionComputeConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder functionComputeConfig(com.aliyun.ros.cdk.core.IResolvable functionComputeConfig) {
                this.functionComputeConfig = functionComputeConfig;
                return this;
            }

            /**
             * Sets the value of {@link ServiceConfigProperty#getFunctionComputeConfig}
             * @param functionComputeConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder functionComputeConfig(com.aliyun.ros.cdk.apigateway.RosApi.FunctionComputeConfigProperty functionComputeConfig) {
                this.functionComputeConfig = functionComputeConfig;
                return this;
            }

            /**
             * Sets the value of {@link ServiceConfigProperty#getMock}
             * @param mock the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder mock(java.lang.String mock) {
                this.mock = mock;
                return this;
            }

            /**
             * Sets the value of {@link ServiceConfigProperty#getMockHeaders}
             * @param mockHeaders the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder mockHeaders(com.aliyun.ros.cdk.core.IResolvable mockHeaders) {
                this.mockHeaders = mockHeaders;
                return this;
            }

            /**
             * Sets the value of {@link ServiceConfigProperty#getMockHeaders}
             * @param mockHeaders the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder mockHeaders(java.util.List<? extends java.lang.Object> mockHeaders) {
                this.mockHeaders = mockHeaders;
                return this;
            }

            /**
             * Sets the value of {@link ServiceConfigProperty#getMockResult}
             * @param mockResult the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder mockResult(java.lang.String mockResult) {
                this.mockResult = mockResult;
                return this;
            }

            /**
             * Sets the value of {@link ServiceConfigProperty#getMockStatusCode}
             * @param mockStatusCode the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder mockStatusCode(java.lang.Number mockStatusCode) {
                this.mockStatusCode = mockStatusCode;
                return this;
            }

            /**
             * Sets the value of {@link ServiceConfigProperty#getServiceAddress}
             * @param serviceAddress the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serviceAddress(java.lang.String serviceAddress) {
                this.serviceAddress = serviceAddress;
                return this;
            }

            /**
             * Sets the value of {@link ServiceConfigProperty#getServiceHttpMethod}
             * @param serviceHttpMethod the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serviceHttpMethod(java.lang.String serviceHttpMethod) {
                this.serviceHttpMethod = serviceHttpMethod;
                return this;
            }

            /**
             * Sets the value of {@link ServiceConfigProperty#getServicePath}
             * @param servicePath the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder servicePath(java.lang.String servicePath) {
                this.servicePath = servicePath;
                return this;
            }

            /**
             * Sets the value of {@link ServiceConfigProperty#getServiceProtocol}
             * @param serviceProtocol the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serviceProtocol(java.lang.String serviceProtocol) {
                this.serviceProtocol = serviceProtocol;
                return this;
            }

            /**
             * Sets the value of {@link ServiceConfigProperty#getServiceTimeOut}
             * @param serviceTimeOut the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serviceTimeOut(java.lang.Number serviceTimeOut) {
                this.serviceTimeOut = serviceTimeOut;
                return this;
            }

            /**
             * Sets the value of {@link ServiceConfigProperty#getServiceVpcEnable}
             * @param serviceVpcEnable the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serviceVpcEnable(java.lang.String serviceVpcEnable) {
                this.serviceVpcEnable = serviceVpcEnable;
                return this;
            }

            /**
             * Sets the value of {@link ServiceConfigProperty#getVpcConfig}
             * @param vpcConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vpcConfig(com.aliyun.ros.cdk.core.IResolvable vpcConfig) {
                this.vpcConfig = vpcConfig;
                return this;
            }

            /**
             * Sets the value of {@link ServiceConfigProperty#getVpcConfig}
             * @param vpcConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vpcConfig(com.aliyun.ros.cdk.apigateway.RosApi.VpcConfigProperty vpcConfig) {
                this.vpcConfig = vpcConfig;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ServiceConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ServiceConfigProperty build() {
                return new Jsii$Proxy(contentTypeCatagory, contentTypeValue, functionComputeConfig, mock, mockHeaders, mockResult, mockStatusCode, serviceAddress, serviceHttpMethod, servicePath, serviceProtocol, serviceTimeOut, serviceVpcEnable, vpcConfig);
            }
        }

        /**
         * An implementation for {@link ServiceConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ServiceConfigProperty {
            private final java.lang.String contentTypeCatagory;
            private final java.lang.String contentTypeValue;
            private final java.lang.Object functionComputeConfig;
            private final java.lang.String mock;
            private final java.lang.Object mockHeaders;
            private final java.lang.String mockResult;
            private final java.lang.Number mockStatusCode;
            private final java.lang.String serviceAddress;
            private final java.lang.String serviceHttpMethod;
            private final java.lang.String servicePath;
            private final java.lang.String serviceProtocol;
            private final java.lang.Number serviceTimeOut;
            private final java.lang.String serviceVpcEnable;
            private final java.lang.Object vpcConfig;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.contentTypeCatagory = software.amazon.jsii.Kernel.get(this, "contentTypeCatagory", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.contentTypeValue = software.amazon.jsii.Kernel.get(this, "contentTypeValue", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.functionComputeConfig = software.amazon.jsii.Kernel.get(this, "functionComputeConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.mock = software.amazon.jsii.Kernel.get(this, "mock", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.mockHeaders = software.amazon.jsii.Kernel.get(this, "mockHeaders", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.mockResult = software.amazon.jsii.Kernel.get(this, "mockResult", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.mockStatusCode = software.amazon.jsii.Kernel.get(this, "mockStatusCode", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
                this.serviceAddress = software.amazon.jsii.Kernel.get(this, "serviceAddress", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.serviceHttpMethod = software.amazon.jsii.Kernel.get(this, "serviceHttpMethod", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.servicePath = software.amazon.jsii.Kernel.get(this, "servicePath", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.serviceProtocol = software.amazon.jsii.Kernel.get(this, "serviceProtocol", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.serviceTimeOut = software.amazon.jsii.Kernel.get(this, "serviceTimeOut", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
                this.serviceVpcEnable = software.amazon.jsii.Kernel.get(this, "serviceVpcEnable", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.vpcConfig = software.amazon.jsii.Kernel.get(this, "vpcConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final java.lang.String contentTypeCatagory, final java.lang.String contentTypeValue, final java.lang.Object functionComputeConfig, final java.lang.String mock, final java.lang.Object mockHeaders, final java.lang.String mockResult, final java.lang.Number mockStatusCode, final java.lang.String serviceAddress, final java.lang.String serviceHttpMethod, final java.lang.String servicePath, final java.lang.String serviceProtocol, final java.lang.Number serviceTimeOut, final java.lang.String serviceVpcEnable, final java.lang.Object vpcConfig) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.contentTypeCatagory = contentTypeCatagory;
                this.contentTypeValue = contentTypeValue;
                this.functionComputeConfig = functionComputeConfig;
                this.mock = mock;
                this.mockHeaders = mockHeaders;
                this.mockResult = mockResult;
                this.mockStatusCode = mockStatusCode;
                this.serviceAddress = serviceAddress;
                this.serviceHttpMethod = serviceHttpMethod;
                this.servicePath = servicePath;
                this.serviceProtocol = serviceProtocol;
                this.serviceTimeOut = serviceTimeOut;
                this.serviceVpcEnable = serviceVpcEnable;
                this.vpcConfig = vpcConfig;
            }

            @Override
            public final java.lang.String getContentTypeCatagory() {
                return this.contentTypeCatagory;
            }

            @Override
            public final java.lang.String getContentTypeValue() {
                return this.contentTypeValue;
            }

            @Override
            public final java.lang.Object getFunctionComputeConfig() {
                return this.functionComputeConfig;
            }

            @Override
            public final java.lang.String getMock() {
                return this.mock;
            }

            @Override
            public final java.lang.Object getMockHeaders() {
                return this.mockHeaders;
            }

            @Override
            public final java.lang.String getMockResult() {
                return this.mockResult;
            }

            @Override
            public final java.lang.Number getMockStatusCode() {
                return this.mockStatusCode;
            }

            @Override
            public final java.lang.String getServiceAddress() {
                return this.serviceAddress;
            }

            @Override
            public final java.lang.String getServiceHttpMethod() {
                return this.serviceHttpMethod;
            }

            @Override
            public final java.lang.String getServicePath() {
                return this.servicePath;
            }

            @Override
            public final java.lang.String getServiceProtocol() {
                return this.serviceProtocol;
            }

            @Override
            public final java.lang.Number getServiceTimeOut() {
                return this.serviceTimeOut;
            }

            @Override
            public final java.lang.String getServiceVpcEnable() {
                return this.serviceVpcEnable;
            }

            @Override
            public final java.lang.Object getVpcConfig() {
                return this.vpcConfig;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getContentTypeCatagory() != null) {
                    data.set("contentTypeCatagory", om.valueToTree(this.getContentTypeCatagory()));
                }
                if (this.getContentTypeValue() != null) {
                    data.set("contentTypeValue", om.valueToTree(this.getContentTypeValue()));
                }
                if (this.getFunctionComputeConfig() != null) {
                    data.set("functionComputeConfig", om.valueToTree(this.getFunctionComputeConfig()));
                }
                if (this.getMock() != null) {
                    data.set("mock", om.valueToTree(this.getMock()));
                }
                if (this.getMockHeaders() != null) {
                    data.set("mockHeaders", om.valueToTree(this.getMockHeaders()));
                }
                if (this.getMockResult() != null) {
                    data.set("mockResult", om.valueToTree(this.getMockResult()));
                }
                if (this.getMockStatusCode() != null) {
                    data.set("mockStatusCode", om.valueToTree(this.getMockStatusCode()));
                }
                if (this.getServiceAddress() != null) {
                    data.set("serviceAddress", om.valueToTree(this.getServiceAddress()));
                }
                if (this.getServiceHttpMethod() != null) {
                    data.set("serviceHttpMethod", om.valueToTree(this.getServiceHttpMethod()));
                }
                if (this.getServicePath() != null) {
                    data.set("servicePath", om.valueToTree(this.getServicePath()));
                }
                if (this.getServiceProtocol() != null) {
                    data.set("serviceProtocol", om.valueToTree(this.getServiceProtocol()));
                }
                if (this.getServiceTimeOut() != null) {
                    data.set("serviceTimeOut", om.valueToTree(this.getServiceTimeOut()));
                }
                if (this.getServiceVpcEnable() != null) {
                    data.set("serviceVpcEnable", om.valueToTree(this.getServiceVpcEnable()));
                }
                if (this.getVpcConfig() != null) {
                    data.set("vpcConfig", om.valueToTree(this.getVpcConfig()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apigateway.RosApi.ServiceConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ServiceConfigProperty.Jsii$Proxy that = (ServiceConfigProperty.Jsii$Proxy) o;

                if (this.contentTypeCatagory != null ? !this.contentTypeCatagory.equals(that.contentTypeCatagory) : that.contentTypeCatagory != null) return false;
                if (this.contentTypeValue != null ? !this.contentTypeValue.equals(that.contentTypeValue) : that.contentTypeValue != null) return false;
                if (this.functionComputeConfig != null ? !this.functionComputeConfig.equals(that.functionComputeConfig) : that.functionComputeConfig != null) return false;
                if (this.mock != null ? !this.mock.equals(that.mock) : that.mock != null) return false;
                if (this.mockHeaders != null ? !this.mockHeaders.equals(that.mockHeaders) : that.mockHeaders != null) return false;
                if (this.mockResult != null ? !this.mockResult.equals(that.mockResult) : that.mockResult != null) return false;
                if (this.mockStatusCode != null ? !this.mockStatusCode.equals(that.mockStatusCode) : that.mockStatusCode != null) return false;
                if (this.serviceAddress != null ? !this.serviceAddress.equals(that.serviceAddress) : that.serviceAddress != null) return false;
                if (this.serviceHttpMethod != null ? !this.serviceHttpMethod.equals(that.serviceHttpMethod) : that.serviceHttpMethod != null) return false;
                if (this.servicePath != null ? !this.servicePath.equals(that.servicePath) : that.servicePath != null) return false;
                if (this.serviceProtocol != null ? !this.serviceProtocol.equals(that.serviceProtocol) : that.serviceProtocol != null) return false;
                if (this.serviceTimeOut != null ? !this.serviceTimeOut.equals(that.serviceTimeOut) : that.serviceTimeOut != null) return false;
                if (this.serviceVpcEnable != null ? !this.serviceVpcEnable.equals(that.serviceVpcEnable) : that.serviceVpcEnable != null) return false;
                return this.vpcConfig != null ? this.vpcConfig.equals(that.vpcConfig) : that.vpcConfig == null;
            }

            @Override
            public final int hashCode() {
                int result = this.contentTypeCatagory != null ? this.contentTypeCatagory.hashCode() : 0;
                result = 31 * result + (this.contentTypeValue != null ? this.contentTypeValue.hashCode() : 0);
                result = 31 * result + (this.functionComputeConfig != null ? this.functionComputeConfig.hashCode() : 0);
                result = 31 * result + (this.mock != null ? this.mock.hashCode() : 0);
                result = 31 * result + (this.mockHeaders != null ? this.mockHeaders.hashCode() : 0);
                result = 31 * result + (this.mockResult != null ? this.mockResult.hashCode() : 0);
                result = 31 * result + (this.mockStatusCode != null ? this.mockStatusCode.hashCode() : 0);
                result = 31 * result + (this.serviceAddress != null ? this.serviceAddress.hashCode() : 0);
                result = 31 * result + (this.serviceHttpMethod != null ? this.serviceHttpMethod.hashCode() : 0);
                result = 31 * result + (this.servicePath != null ? this.servicePath.hashCode() : 0);
                result = 31 * result + (this.serviceProtocol != null ? this.serviceProtocol.hashCode() : 0);
                result = 31 * result + (this.serviceTimeOut != null ? this.serviceTimeOut.hashCode() : 0);
                result = 31 * result + (this.serviceVpcEnable != null ? this.serviceVpcEnable.hashCode() : 0);
                result = 31 * result + (this.vpcConfig != null ? this.vpcConfig.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apigateway.$Module.class, fqn = "@alicloud/ros-cdk-apigateway.RosApi.ServiceParametersMapProperty")
    @software.amazon.jsii.Jsii.Proxy(ServiceParametersMapProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ServiceParametersMapProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.String getRequestParameterName();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.String getServiceParameterName();

        /**
         * @return a {@link Builder} of {@link ServiceParametersMapProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ServiceParametersMapProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ServiceParametersMapProperty> {
            private java.lang.String requestParameterName;
            private java.lang.String serviceParameterName;

            /**
             * Sets the value of {@link ServiceParametersMapProperty#getRequestParameterName}
             * @param requestParameterName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder requestParameterName(java.lang.String requestParameterName) {
                this.requestParameterName = requestParameterName;
                return this;
            }

            /**
             * Sets the value of {@link ServiceParametersMapProperty#getServiceParameterName}
             * @param serviceParameterName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serviceParameterName(java.lang.String serviceParameterName) {
                this.serviceParameterName = serviceParameterName;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ServiceParametersMapProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ServiceParametersMapProperty build() {
                return new Jsii$Proxy(requestParameterName, serviceParameterName);
            }
        }

        /**
         * An implementation for {@link ServiceParametersMapProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ServiceParametersMapProperty {
            private final java.lang.String requestParameterName;
            private final java.lang.String serviceParameterName;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.requestParameterName = software.amazon.jsii.Kernel.get(this, "requestParameterName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.serviceParameterName = software.amazon.jsii.Kernel.get(this, "serviceParameterName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final java.lang.String requestParameterName, final java.lang.String serviceParameterName) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.requestParameterName = java.util.Objects.requireNonNull(requestParameterName, "requestParameterName is required");
                this.serviceParameterName = java.util.Objects.requireNonNull(serviceParameterName, "serviceParameterName is required");
            }

            @Override
            public final java.lang.String getRequestParameterName() {
                return this.requestParameterName;
            }

            @Override
            public final java.lang.String getServiceParameterName() {
                return this.serviceParameterName;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("requestParameterName", om.valueToTree(this.getRequestParameterName()));
                data.set("serviceParameterName", om.valueToTree(this.getServiceParameterName()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apigateway.RosApi.ServiceParametersMapProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ServiceParametersMapProperty.Jsii$Proxy that = (ServiceParametersMapProperty.Jsii$Proxy) o;

                if (!requestParameterName.equals(that.requestParameterName)) return false;
                return this.serviceParameterName.equals(that.serviceParameterName);
            }

            @Override
            public final int hashCode() {
                int result = this.requestParameterName.hashCode();
                result = 31 * result + (this.serviceParameterName.hashCode());
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apigateway.$Module.class, fqn = "@alicloud/ros-cdk-apigateway.RosApi.ServiceParametersProperty")
    @software.amazon.jsii.Jsii.Proxy(ServiceParametersProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ServiceParametersProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.String getLocation();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.String getParameterType();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.String getServiceParameterName();

        /**
         * @return a {@link Builder} of {@link ServiceParametersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ServiceParametersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ServiceParametersProperty> {
            private java.lang.String location;
            private java.lang.String parameterType;
            private java.lang.String serviceParameterName;

            /**
             * Sets the value of {@link ServiceParametersProperty#getLocation}
             * @param location the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder location(java.lang.String location) {
                this.location = location;
                return this;
            }

            /**
             * Sets the value of {@link ServiceParametersProperty#getParameterType}
             * @param parameterType the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder parameterType(java.lang.String parameterType) {
                this.parameterType = parameterType;
                return this;
            }

            /**
             * Sets the value of {@link ServiceParametersProperty#getServiceParameterName}
             * @param serviceParameterName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serviceParameterName(java.lang.String serviceParameterName) {
                this.serviceParameterName = serviceParameterName;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ServiceParametersProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ServiceParametersProperty build() {
                return new Jsii$Proxy(location, parameterType, serviceParameterName);
            }
        }

        /**
         * An implementation for {@link ServiceParametersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ServiceParametersProperty {
            private final java.lang.String location;
            private final java.lang.String parameterType;
            private final java.lang.String serviceParameterName;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.location = software.amazon.jsii.Kernel.get(this, "location", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.parameterType = software.amazon.jsii.Kernel.get(this, "parameterType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.serviceParameterName = software.amazon.jsii.Kernel.get(this, "serviceParameterName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final java.lang.String location, final java.lang.String parameterType, final java.lang.String serviceParameterName) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.location = java.util.Objects.requireNonNull(location, "location is required");
                this.parameterType = java.util.Objects.requireNonNull(parameterType, "parameterType is required");
                this.serviceParameterName = java.util.Objects.requireNonNull(serviceParameterName, "serviceParameterName is required");
            }

            @Override
            public final java.lang.String getLocation() {
                return this.location;
            }

            @Override
            public final java.lang.String getParameterType() {
                return this.parameterType;
            }

            @Override
            public final java.lang.String getServiceParameterName() {
                return this.serviceParameterName;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("location", om.valueToTree(this.getLocation()));
                data.set("parameterType", om.valueToTree(this.getParameterType()));
                data.set("serviceParameterName", om.valueToTree(this.getServiceParameterName()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apigateway.RosApi.ServiceParametersProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ServiceParametersProperty.Jsii$Proxy that = (ServiceParametersProperty.Jsii$Proxy) o;

                if (!location.equals(that.location)) return false;
                if (!parameterType.equals(that.parameterType)) return false;
                return this.serviceParameterName.equals(that.serviceParameterName);
            }

            @Override
            public final int hashCode() {
                int result = this.location.hashCode();
                result = 31 * result + (this.parameterType.hashCode());
                result = 31 * result + (this.serviceParameterName.hashCode());
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apigateway.$Module.class, fqn = "@alicloud/ros-cdk-apigateway.RosApi.SystemParametersProperty")
    @software.amazon.jsii.Jsii.Proxy(SystemParametersProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface SystemParametersProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.String getLocation();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.String getParameterName();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.String getServiceParameterName();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getDemoValue() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getDescription() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link SystemParametersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link SystemParametersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<SystemParametersProperty> {
            private java.lang.String location;
            private java.lang.String parameterName;
            private java.lang.String serviceParameterName;
            private java.lang.String demoValue;
            private java.lang.String description;

            /**
             * Sets the value of {@link SystemParametersProperty#getLocation}
             * @param location the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder location(java.lang.String location) {
                this.location = location;
                return this;
            }

            /**
             * Sets the value of {@link SystemParametersProperty#getParameterName}
             * @param parameterName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder parameterName(java.lang.String parameterName) {
                this.parameterName = parameterName;
                return this;
            }

            /**
             * Sets the value of {@link SystemParametersProperty#getServiceParameterName}
             * @param serviceParameterName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serviceParameterName(java.lang.String serviceParameterName) {
                this.serviceParameterName = serviceParameterName;
                return this;
            }

            /**
             * Sets the value of {@link SystemParametersProperty#getDemoValue}
             * @param demoValue the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder demoValue(java.lang.String demoValue) {
                this.demoValue = demoValue;
                return this;
            }

            /**
             * Sets the value of {@link SystemParametersProperty#getDescription}
             * @param description the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder description(java.lang.String description) {
                this.description = description;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link SystemParametersProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public SystemParametersProperty build() {
                return new Jsii$Proxy(location, parameterName, serviceParameterName, demoValue, description);
            }
        }

        /**
         * An implementation for {@link SystemParametersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SystemParametersProperty {
            private final java.lang.String location;
            private final java.lang.String parameterName;
            private final java.lang.String serviceParameterName;
            private final java.lang.String demoValue;
            private final java.lang.String description;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.location = software.amazon.jsii.Kernel.get(this, "location", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.parameterName = software.amazon.jsii.Kernel.get(this, "parameterName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.serviceParameterName = software.amazon.jsii.Kernel.get(this, "serviceParameterName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.demoValue = software.amazon.jsii.Kernel.get(this, "demoValue", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final java.lang.String location, final java.lang.String parameterName, final java.lang.String serviceParameterName, final java.lang.String demoValue, final java.lang.String description) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.location = java.util.Objects.requireNonNull(location, "location is required");
                this.parameterName = java.util.Objects.requireNonNull(parameterName, "parameterName is required");
                this.serviceParameterName = java.util.Objects.requireNonNull(serviceParameterName, "serviceParameterName is required");
                this.demoValue = demoValue;
                this.description = description;
            }

            @Override
            public final java.lang.String getLocation() {
                return this.location;
            }

            @Override
            public final java.lang.String getParameterName() {
                return this.parameterName;
            }

            @Override
            public final java.lang.String getServiceParameterName() {
                return this.serviceParameterName;
            }

            @Override
            public final java.lang.String getDemoValue() {
                return this.demoValue;
            }

            @Override
            public final java.lang.String getDescription() {
                return this.description;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("location", om.valueToTree(this.getLocation()));
                data.set("parameterName", om.valueToTree(this.getParameterName()));
                data.set("serviceParameterName", om.valueToTree(this.getServiceParameterName()));
                if (this.getDemoValue() != null) {
                    data.set("demoValue", om.valueToTree(this.getDemoValue()));
                }
                if (this.getDescription() != null) {
                    data.set("description", om.valueToTree(this.getDescription()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apigateway.RosApi.SystemParametersProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                SystemParametersProperty.Jsii$Proxy that = (SystemParametersProperty.Jsii$Proxy) o;

                if (!location.equals(that.location)) return false;
                if (!parameterName.equals(that.parameterName)) return false;
                if (!serviceParameterName.equals(that.serviceParameterName)) return false;
                if (this.demoValue != null ? !this.demoValue.equals(that.demoValue) : that.demoValue != null) return false;
                return this.description != null ? this.description.equals(that.description) : that.description == null;
            }

            @Override
            public final int hashCode() {
                int result = this.location.hashCode();
                result = 31 * result + (this.parameterName.hashCode());
                result = 31 * result + (this.serviceParameterName.hashCode());
                result = 31 * result + (this.demoValue != null ? this.demoValue.hashCode() : 0);
                result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apigateway.$Module.class, fqn = "@alicloud/ros-cdk-apigateway.RosApi.VpcConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(VpcConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface VpcConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.String getInstanceId();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Number getPort();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.String getVpcId();

        /**
         * @return a {@link Builder} of {@link VpcConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link VpcConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<VpcConfigProperty> {
            private java.lang.String instanceId;
            private java.lang.Number port;
            private java.lang.String vpcId;

            /**
             * Sets the value of {@link VpcConfigProperty#getInstanceId}
             * @param instanceId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder instanceId(java.lang.String instanceId) {
                this.instanceId = instanceId;
                return this;
            }

            /**
             * Sets the value of {@link VpcConfigProperty#getPort}
             * @param port the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder port(java.lang.Number port) {
                this.port = port;
                return this;
            }

            /**
             * Sets the value of {@link VpcConfigProperty#getVpcId}
             * @param vpcId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vpcId(java.lang.String vpcId) {
                this.vpcId = vpcId;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link VpcConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public VpcConfigProperty build() {
                return new Jsii$Proxy(instanceId, port, vpcId);
            }
        }

        /**
         * An implementation for {@link VpcConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements VpcConfigProperty {
            private final java.lang.String instanceId;
            private final java.lang.Number port;
            private final java.lang.String vpcId;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.port = software.amazon.jsii.Kernel.get(this, "port", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
                this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final java.lang.String instanceId, final java.lang.Number port, final java.lang.String vpcId) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.instanceId = java.util.Objects.requireNonNull(instanceId, "instanceId is required");
                this.port = java.util.Objects.requireNonNull(port, "port is required");
                this.vpcId = java.util.Objects.requireNonNull(vpcId, "vpcId is required");
            }

            @Override
            public final java.lang.String getInstanceId() {
                return this.instanceId;
            }

            @Override
            public final java.lang.Number getPort() {
                return this.port;
            }

            @Override
            public final java.lang.String getVpcId() {
                return this.vpcId;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("instanceId", om.valueToTree(this.getInstanceId()));
                data.set("port", om.valueToTree(this.getPort()));
                data.set("vpcId", om.valueToTree(this.getVpcId()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apigateway.RosApi.VpcConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                VpcConfigProperty.Jsii$Proxy that = (VpcConfigProperty.Jsii$Proxy) o;

                if (!instanceId.equals(that.instanceId)) return false;
                if (!port.equals(that.port)) return false;
                return this.vpcId.equals(that.vpcId);
            }

            @Override
            public final int hashCode() {
                int result = this.instanceId.hashCode();
                result = 31 * result + (this.port.hashCode());
                result = 31 * result + (this.vpcId.hashCode());
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.apigateway.RosApi}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.apigateway.RosApi> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope - scope in which this resource is defined. This parameter is required.
         * @param id - scoped id of the resource. This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.apigateway.RosApiProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.apigateway.RosApiProps.Builder();
        }

        /**
         * @return {@code this}
         * @param apiName This parameter is required.
         */
        public Builder apiName(final java.lang.String apiName) {
            this.props.apiName(apiName);
            return this;
        }

        /**
         * @return {@code this}
         * @param groupId This parameter is required.
         */
        public Builder groupId(final java.lang.String groupId) {
            this.props.groupId(groupId);
            return this;
        }

        /**
         * @return {@code this}
         * @param requestConfig This parameter is required.
         */
        public Builder requestConfig(final com.aliyun.ros.cdk.core.IResolvable requestConfig) {
            this.props.requestConfig(requestConfig);
            return this;
        }
        /**
         * @return {@code this}
         * @param requestConfig This parameter is required.
         */
        public Builder requestConfig(final com.aliyun.ros.cdk.apigateway.RosApi.RequestConfigProperty requestConfig) {
            this.props.requestConfig(requestConfig);
            return this;
        }

        /**
         * @return {@code this}
         * @param resultSample This parameter is required.
         */
        public Builder resultSample(final java.lang.String resultSample) {
            this.props.resultSample(resultSample);
            return this;
        }

        /**
         * @return {@code this}
         * @param resultType This parameter is required.
         */
        public Builder resultType(final java.lang.String resultType) {
            this.props.resultType(resultType);
            return this;
        }

        /**
         * @return {@code this}
         * @param serviceConfig This parameter is required.
         */
        public Builder serviceConfig(final com.aliyun.ros.cdk.core.IResolvable serviceConfig) {
            this.props.serviceConfig(serviceConfig);
            return this;
        }
        /**
         * @return {@code this}
         * @param serviceConfig This parameter is required.
         */
        public Builder serviceConfig(final com.aliyun.ros.cdk.apigateway.RosApi.ServiceConfigProperty serviceConfig) {
            this.props.serviceConfig(serviceConfig);
            return this;
        }

        /**
         * @return {@code this}
         * @param visibility This parameter is required.
         */
        public Builder visibility(final java.lang.String visibility) {
            this.props.visibility(visibility);
            return this;
        }

        /**
         * @return {@code this}
         * @param appCodeAuthType This parameter is required.
         */
        public Builder appCodeAuthType(final java.lang.String appCodeAuthType) {
            this.props.appCodeAuthType(appCodeAuthType);
            return this;
        }

        /**
         * @return {@code this}
         * @param authType This parameter is required.
         */
        public Builder authType(final java.lang.String authType) {
            this.props.authType(authType);
            return this;
        }

        /**
         * @return {@code this}
         * @param constParameters This parameter is required.
         */
        public Builder constParameters(final com.aliyun.ros.cdk.core.IResolvable constParameters) {
            this.props.constParameters(constParameters);
            return this;
        }
        /**
         * @return {@code this}
         * @param constParameters This parameter is required.
         */
        public Builder constParameters(final java.util.List<? extends java.lang.Object> constParameters) {
            this.props.constParameters(constParameters);
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
         * @param errorCodeSamples This parameter is required.
         */
        public Builder errorCodeSamples(final com.aliyun.ros.cdk.core.IResolvable errorCodeSamples) {
            this.props.errorCodeSamples(errorCodeSamples);
            return this;
        }
        /**
         * @return {@code this}
         * @param errorCodeSamples This parameter is required.
         */
        public Builder errorCodeSamples(final java.util.List<? extends java.lang.Object> errorCodeSamples) {
            this.props.errorCodeSamples(errorCodeSamples);
            return this;
        }

        /**
         * @return {@code this}
         * @param failResultSample This parameter is required.
         */
        public Builder failResultSample(final java.lang.String failResultSample) {
            this.props.failResultSample(failResultSample);
            return this;
        }

        /**
         * @return {@code this}
         * @param openIdConnectConfig This parameter is required.
         */
        public Builder openIdConnectConfig(final com.aliyun.ros.cdk.core.IResolvable openIdConnectConfig) {
            this.props.openIdConnectConfig(openIdConnectConfig);
            return this;
        }
        /**
         * @return {@code this}
         * @param openIdConnectConfig This parameter is required.
         */
        public Builder openIdConnectConfig(final com.aliyun.ros.cdk.apigateway.RosApi.OpenIdConnectConfigProperty openIdConnectConfig) {
            this.props.openIdConnectConfig(openIdConnectConfig);
            return this;
        }

        /**
         * @return {@code this}
         * @param requestParameters This parameter is required.
         */
        public Builder requestParameters(final com.aliyun.ros.cdk.core.IResolvable requestParameters) {
            this.props.requestParameters(requestParameters);
            return this;
        }
        /**
         * @return {@code this}
         * @param requestParameters This parameter is required.
         */
        public Builder requestParameters(final java.util.List<? extends java.lang.Object> requestParameters) {
            this.props.requestParameters(requestParameters);
            return this;
        }

        /**
         * @return {@code this}
         * @param serviceParameters This parameter is required.
         */
        public Builder serviceParameters(final com.aliyun.ros.cdk.core.IResolvable serviceParameters) {
            this.props.serviceParameters(serviceParameters);
            return this;
        }
        /**
         * @return {@code this}
         * @param serviceParameters This parameter is required.
         */
        public Builder serviceParameters(final java.util.List<? extends java.lang.Object> serviceParameters) {
            this.props.serviceParameters(serviceParameters);
            return this;
        }

        /**
         * @return {@code this}
         * @param serviceParametersMap This parameter is required.
         */
        public Builder serviceParametersMap(final com.aliyun.ros.cdk.core.IResolvable serviceParametersMap) {
            this.props.serviceParametersMap(serviceParametersMap);
            return this;
        }
        /**
         * @return {@code this}
         * @param serviceParametersMap This parameter is required.
         */
        public Builder serviceParametersMap(final java.util.List<? extends java.lang.Object> serviceParametersMap) {
            this.props.serviceParametersMap(serviceParametersMap);
            return this;
        }

        /**
         * @return {@code this}
         * @param systemParameters This parameter is required.
         */
        public Builder systemParameters(final com.aliyun.ros.cdk.core.IResolvable systemParameters) {
            this.props.systemParameters(systemParameters);
            return this;
        }
        /**
         * @return {@code this}
         * @param systemParameters This parameter is required.
         */
        public Builder systemParameters(final java.util.List<? extends java.lang.Object> systemParameters) {
            this.props.systemParameters(systemParameters);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.apigateway.RosApi}.
         */
        @Override
        public com.aliyun.ros.cdk.apigateway.RosApi build() {
            return new com.aliyun.ros.cdk.apigateway.RosApi(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
