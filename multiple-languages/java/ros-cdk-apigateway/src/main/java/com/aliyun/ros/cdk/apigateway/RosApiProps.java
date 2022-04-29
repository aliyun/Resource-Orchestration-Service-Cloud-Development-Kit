package com.aliyun.ros.cdk.apigateway;

/**
 * Properties for defining a `ALIYUN::ApiGateway::Api`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.57.0 (build f614666)", date = "2022-04-29T01:47:27.770Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apigateway.$Module.class, fqn = "@alicloud/ros-cdk-apigateway.RosApiProps")
@software.amazon.jsii.Jsii.Proxy(RosApiProps.Jsii$Proxy.class)
public interface RosApiProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getApiName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getGroupId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRequestConfig();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getResultSample();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getResultType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getServiceConfig();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVisibility();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAppCodeAuthType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAuthType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getConstParameters() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDisableInternet() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getErrorCodeSamples() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFailResultSample() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getForceNonceCheck() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOpenIdConnectConfig() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRequestParameters() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getServiceParameters() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getServiceParametersMap() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSystemParameters() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.apigateway.RosApi.TagsProperty> getTags() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosApiProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosApiProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosApiProps> {
        java.lang.Object apiName;
        java.lang.Object groupId;
        java.lang.Object requestConfig;
        java.lang.Object resultSample;
        java.lang.Object resultType;
        java.lang.Object serviceConfig;
        java.lang.Object visibility;
        java.lang.Object appCodeAuthType;
        java.lang.Object authType;
        java.lang.Object constParameters;
        java.lang.Object description;
        java.lang.Object disableInternet;
        java.lang.Object errorCodeSamples;
        java.lang.Object failResultSample;
        java.lang.Object forceNonceCheck;
        java.lang.Object openIdConnectConfig;
        java.lang.Object requestParameters;
        java.lang.Object serviceParameters;
        java.lang.Object serviceParametersMap;
        java.lang.Object systemParameters;
        java.util.List<com.aliyun.ros.cdk.apigateway.RosApi.TagsProperty> tags;

        /**
         * Sets the value of {@link RosApiProps#getApiName}
         * @param apiName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder apiName(java.lang.String apiName) {
            this.apiName = apiName;
            return this;
        }

        /**
         * Sets the value of {@link RosApiProps#getApiName}
         * @param apiName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder apiName(com.aliyun.ros.cdk.core.IResolvable apiName) {
            this.apiName = apiName;
            return this;
        }

        /**
         * Sets the value of {@link RosApiProps#getGroupId}
         * @param groupId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder groupId(java.lang.String groupId) {
            this.groupId = groupId;
            return this;
        }

        /**
         * Sets the value of {@link RosApiProps#getGroupId}
         * @param groupId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder groupId(com.aliyun.ros.cdk.core.IResolvable groupId) {
            this.groupId = groupId;
            return this;
        }

        /**
         * Sets the value of {@link RosApiProps#getRequestConfig}
         * @param requestConfig the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder requestConfig(com.aliyun.ros.cdk.core.IResolvable requestConfig) {
            this.requestConfig = requestConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosApiProps#getRequestConfig}
         * @param requestConfig the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder requestConfig(com.aliyun.ros.cdk.apigateway.RosApi.RequestConfigProperty requestConfig) {
            this.requestConfig = requestConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosApiProps#getResultSample}
         * @param resultSample the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder resultSample(java.lang.String resultSample) {
            this.resultSample = resultSample;
            return this;
        }

        /**
         * Sets the value of {@link RosApiProps#getResultSample}
         * @param resultSample the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder resultSample(com.aliyun.ros.cdk.core.IResolvable resultSample) {
            this.resultSample = resultSample;
            return this;
        }

        /**
         * Sets the value of {@link RosApiProps#getResultType}
         * @param resultType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder resultType(java.lang.String resultType) {
            this.resultType = resultType;
            return this;
        }

        /**
         * Sets the value of {@link RosApiProps#getResultType}
         * @param resultType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder resultType(com.aliyun.ros.cdk.core.IResolvable resultType) {
            this.resultType = resultType;
            return this;
        }

        /**
         * Sets the value of {@link RosApiProps#getServiceConfig}
         * @param serviceConfig the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder serviceConfig(com.aliyun.ros.cdk.core.IResolvable serviceConfig) {
            this.serviceConfig = serviceConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosApiProps#getServiceConfig}
         * @param serviceConfig the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder serviceConfig(com.aliyun.ros.cdk.apigateway.RosApi.ServiceConfigProperty serviceConfig) {
            this.serviceConfig = serviceConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosApiProps#getVisibility}
         * @param visibility the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder visibility(java.lang.String visibility) {
            this.visibility = visibility;
            return this;
        }

        /**
         * Sets the value of {@link RosApiProps#getVisibility}
         * @param visibility the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder visibility(com.aliyun.ros.cdk.core.IResolvable visibility) {
            this.visibility = visibility;
            return this;
        }

        /**
         * Sets the value of {@link RosApiProps#getAppCodeAuthType}
         * @param appCodeAuthType the value to be set.
         * @return {@code this}
         */
        public Builder appCodeAuthType(java.lang.String appCodeAuthType) {
            this.appCodeAuthType = appCodeAuthType;
            return this;
        }

        /**
         * Sets the value of {@link RosApiProps#getAppCodeAuthType}
         * @param appCodeAuthType the value to be set.
         * @return {@code this}
         */
        public Builder appCodeAuthType(com.aliyun.ros.cdk.core.IResolvable appCodeAuthType) {
            this.appCodeAuthType = appCodeAuthType;
            return this;
        }

        /**
         * Sets the value of {@link RosApiProps#getAuthType}
         * @param authType the value to be set.
         * @return {@code this}
         */
        public Builder authType(java.lang.String authType) {
            this.authType = authType;
            return this;
        }

        /**
         * Sets the value of {@link RosApiProps#getAuthType}
         * @param authType the value to be set.
         * @return {@code this}
         */
        public Builder authType(com.aliyun.ros.cdk.core.IResolvable authType) {
            this.authType = authType;
            return this;
        }

        /**
         * Sets the value of {@link RosApiProps#getConstParameters}
         * @param constParameters the value to be set.
         * @return {@code this}
         */
        public Builder constParameters(com.aliyun.ros.cdk.core.IResolvable constParameters) {
            this.constParameters = constParameters;
            return this;
        }

        /**
         * Sets the value of {@link RosApiProps#getConstParameters}
         * @param constParameters the value to be set.
         * @return {@code this}
         */
        public Builder constParameters(java.util.List<? extends java.lang.Object> constParameters) {
            this.constParameters = constParameters;
            return this;
        }

        /**
         * Sets the value of {@link RosApiProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosApiProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosApiProps#getDisableInternet}
         * @param disableInternet the value to be set.
         * @return {@code this}
         */
        public Builder disableInternet(java.lang.Boolean disableInternet) {
            this.disableInternet = disableInternet;
            return this;
        }

        /**
         * Sets the value of {@link RosApiProps#getDisableInternet}
         * @param disableInternet the value to be set.
         * @return {@code this}
         */
        public Builder disableInternet(com.aliyun.ros.cdk.core.IResolvable disableInternet) {
            this.disableInternet = disableInternet;
            return this;
        }

        /**
         * Sets the value of {@link RosApiProps#getErrorCodeSamples}
         * @param errorCodeSamples the value to be set.
         * @return {@code this}
         */
        public Builder errorCodeSamples(com.aliyun.ros.cdk.core.IResolvable errorCodeSamples) {
            this.errorCodeSamples = errorCodeSamples;
            return this;
        }

        /**
         * Sets the value of {@link RosApiProps#getErrorCodeSamples}
         * @param errorCodeSamples the value to be set.
         * @return {@code this}
         */
        public Builder errorCodeSamples(java.util.List<? extends java.lang.Object> errorCodeSamples) {
            this.errorCodeSamples = errorCodeSamples;
            return this;
        }

        /**
         * Sets the value of {@link RosApiProps#getFailResultSample}
         * @param failResultSample the value to be set.
         * @return {@code this}
         */
        public Builder failResultSample(java.lang.String failResultSample) {
            this.failResultSample = failResultSample;
            return this;
        }

        /**
         * Sets the value of {@link RosApiProps#getFailResultSample}
         * @param failResultSample the value to be set.
         * @return {@code this}
         */
        public Builder failResultSample(com.aliyun.ros.cdk.core.IResolvable failResultSample) {
            this.failResultSample = failResultSample;
            return this;
        }

        /**
         * Sets the value of {@link RosApiProps#getForceNonceCheck}
         * @param forceNonceCheck the value to be set.
         * @return {@code this}
         */
        public Builder forceNonceCheck(java.lang.Boolean forceNonceCheck) {
            this.forceNonceCheck = forceNonceCheck;
            return this;
        }

        /**
         * Sets the value of {@link RosApiProps#getForceNonceCheck}
         * @param forceNonceCheck the value to be set.
         * @return {@code this}
         */
        public Builder forceNonceCheck(com.aliyun.ros.cdk.core.IResolvable forceNonceCheck) {
            this.forceNonceCheck = forceNonceCheck;
            return this;
        }

        /**
         * Sets the value of {@link RosApiProps#getOpenIdConnectConfig}
         * @param openIdConnectConfig the value to be set.
         * @return {@code this}
         */
        public Builder openIdConnectConfig(com.aliyun.ros.cdk.core.IResolvable openIdConnectConfig) {
            this.openIdConnectConfig = openIdConnectConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosApiProps#getOpenIdConnectConfig}
         * @param openIdConnectConfig the value to be set.
         * @return {@code this}
         */
        public Builder openIdConnectConfig(com.aliyun.ros.cdk.apigateway.RosApi.OpenIdConnectConfigProperty openIdConnectConfig) {
            this.openIdConnectConfig = openIdConnectConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosApiProps#getRequestParameters}
         * @param requestParameters the value to be set.
         * @return {@code this}
         */
        public Builder requestParameters(com.aliyun.ros.cdk.core.IResolvable requestParameters) {
            this.requestParameters = requestParameters;
            return this;
        }

        /**
         * Sets the value of {@link RosApiProps#getRequestParameters}
         * @param requestParameters the value to be set.
         * @return {@code this}
         */
        public Builder requestParameters(java.util.List<? extends java.lang.Object> requestParameters) {
            this.requestParameters = requestParameters;
            return this;
        }

        /**
         * Sets the value of {@link RosApiProps#getServiceParameters}
         * @param serviceParameters the value to be set.
         * @return {@code this}
         */
        public Builder serviceParameters(com.aliyun.ros.cdk.core.IResolvable serviceParameters) {
            this.serviceParameters = serviceParameters;
            return this;
        }

        /**
         * Sets the value of {@link RosApiProps#getServiceParameters}
         * @param serviceParameters the value to be set.
         * @return {@code this}
         */
        public Builder serviceParameters(java.util.List<? extends java.lang.Object> serviceParameters) {
            this.serviceParameters = serviceParameters;
            return this;
        }

        /**
         * Sets the value of {@link RosApiProps#getServiceParametersMap}
         * @param serviceParametersMap the value to be set.
         * @return {@code this}
         */
        public Builder serviceParametersMap(com.aliyun.ros.cdk.core.IResolvable serviceParametersMap) {
            this.serviceParametersMap = serviceParametersMap;
            return this;
        }

        /**
         * Sets the value of {@link RosApiProps#getServiceParametersMap}
         * @param serviceParametersMap the value to be set.
         * @return {@code this}
         */
        public Builder serviceParametersMap(java.util.List<? extends java.lang.Object> serviceParametersMap) {
            this.serviceParametersMap = serviceParametersMap;
            return this;
        }

        /**
         * Sets the value of {@link RosApiProps#getSystemParameters}
         * @param systemParameters the value to be set.
         * @return {@code this}
         */
        public Builder systemParameters(com.aliyun.ros.cdk.core.IResolvable systemParameters) {
            this.systemParameters = systemParameters;
            return this;
        }

        /**
         * Sets the value of {@link RosApiProps#getSystemParameters}
         * @param systemParameters the value to be set.
         * @return {@code this}
         */
        public Builder systemParameters(java.util.List<? extends java.lang.Object> systemParameters) {
            this.systemParameters = systemParameters;
            return this;
        }

        /**
         * Sets the value of {@link RosApiProps#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.apigateway.RosApi.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.apigateway.RosApi.TagsProperty>)tags;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosApiProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosApiProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosApiProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosApiProps {
        private final java.lang.Object apiName;
        private final java.lang.Object groupId;
        private final java.lang.Object requestConfig;
        private final java.lang.Object resultSample;
        private final java.lang.Object resultType;
        private final java.lang.Object serviceConfig;
        private final java.lang.Object visibility;
        private final java.lang.Object appCodeAuthType;
        private final java.lang.Object authType;
        private final java.lang.Object constParameters;
        private final java.lang.Object description;
        private final java.lang.Object disableInternet;
        private final java.lang.Object errorCodeSamples;
        private final java.lang.Object failResultSample;
        private final java.lang.Object forceNonceCheck;
        private final java.lang.Object openIdConnectConfig;
        private final java.lang.Object requestParameters;
        private final java.lang.Object serviceParameters;
        private final java.lang.Object serviceParametersMap;
        private final java.lang.Object systemParameters;
        private final java.util.List<com.aliyun.ros.cdk.apigateway.RosApi.TagsProperty> tags;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.apiName = software.amazon.jsii.Kernel.get(this, "apiName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.groupId = software.amazon.jsii.Kernel.get(this, "groupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.requestConfig = software.amazon.jsii.Kernel.get(this, "requestConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resultSample = software.amazon.jsii.Kernel.get(this, "resultSample", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resultType = software.amazon.jsii.Kernel.get(this, "resultType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.serviceConfig = software.amazon.jsii.Kernel.get(this, "serviceConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.visibility = software.amazon.jsii.Kernel.get(this, "visibility", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.appCodeAuthType = software.amazon.jsii.Kernel.get(this, "appCodeAuthType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.authType = software.amazon.jsii.Kernel.get(this, "authType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.constParameters = software.amazon.jsii.Kernel.get(this, "constParameters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.disableInternet = software.amazon.jsii.Kernel.get(this, "disableInternet", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.errorCodeSamples = software.amazon.jsii.Kernel.get(this, "errorCodeSamples", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.failResultSample = software.amazon.jsii.Kernel.get(this, "failResultSample", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.forceNonceCheck = software.amazon.jsii.Kernel.get(this, "forceNonceCheck", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.openIdConnectConfig = software.amazon.jsii.Kernel.get(this, "openIdConnectConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.requestParameters = software.amazon.jsii.Kernel.get(this, "requestParameters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.serviceParameters = software.amazon.jsii.Kernel.get(this, "serviceParameters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.serviceParametersMap = software.amazon.jsii.Kernel.get(this, "serviceParametersMap", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.systemParameters = software.amazon.jsii.Kernel.get(this, "systemParameters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.apigateway.RosApi.TagsProperty.class)));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.apiName = java.util.Objects.requireNonNull(builder.apiName, "apiName is required");
            this.groupId = java.util.Objects.requireNonNull(builder.groupId, "groupId is required");
            this.requestConfig = java.util.Objects.requireNonNull(builder.requestConfig, "requestConfig is required");
            this.resultSample = java.util.Objects.requireNonNull(builder.resultSample, "resultSample is required");
            this.resultType = java.util.Objects.requireNonNull(builder.resultType, "resultType is required");
            this.serviceConfig = java.util.Objects.requireNonNull(builder.serviceConfig, "serviceConfig is required");
            this.visibility = java.util.Objects.requireNonNull(builder.visibility, "visibility is required");
            this.appCodeAuthType = builder.appCodeAuthType;
            this.authType = builder.authType;
            this.constParameters = builder.constParameters;
            this.description = builder.description;
            this.disableInternet = builder.disableInternet;
            this.errorCodeSamples = builder.errorCodeSamples;
            this.failResultSample = builder.failResultSample;
            this.forceNonceCheck = builder.forceNonceCheck;
            this.openIdConnectConfig = builder.openIdConnectConfig;
            this.requestParameters = builder.requestParameters;
            this.serviceParameters = builder.serviceParameters;
            this.serviceParametersMap = builder.serviceParametersMap;
            this.systemParameters = builder.systemParameters;
            this.tags = (java.util.List<com.aliyun.ros.cdk.apigateway.RosApi.TagsProperty>)builder.tags;
        }

        @Override
        public final java.lang.Object getApiName() {
            return this.apiName;
        }

        @Override
        public final java.lang.Object getGroupId() {
            return this.groupId;
        }

        @Override
        public final java.lang.Object getRequestConfig() {
            return this.requestConfig;
        }

        @Override
        public final java.lang.Object getResultSample() {
            return this.resultSample;
        }

        @Override
        public final java.lang.Object getResultType() {
            return this.resultType;
        }

        @Override
        public final java.lang.Object getServiceConfig() {
            return this.serviceConfig;
        }

        @Override
        public final java.lang.Object getVisibility() {
            return this.visibility;
        }

        @Override
        public final java.lang.Object getAppCodeAuthType() {
            return this.appCodeAuthType;
        }

        @Override
        public final java.lang.Object getAuthType() {
            return this.authType;
        }

        @Override
        public final java.lang.Object getConstParameters() {
            return this.constParameters;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getDisableInternet() {
            return this.disableInternet;
        }

        @Override
        public final java.lang.Object getErrorCodeSamples() {
            return this.errorCodeSamples;
        }

        @Override
        public final java.lang.Object getFailResultSample() {
            return this.failResultSample;
        }

        @Override
        public final java.lang.Object getForceNonceCheck() {
            return this.forceNonceCheck;
        }

        @Override
        public final java.lang.Object getOpenIdConnectConfig() {
            return this.openIdConnectConfig;
        }

        @Override
        public final java.lang.Object getRequestParameters() {
            return this.requestParameters;
        }

        @Override
        public final java.lang.Object getServiceParameters() {
            return this.serviceParameters;
        }

        @Override
        public final java.lang.Object getServiceParametersMap() {
            return this.serviceParametersMap;
        }

        @Override
        public final java.lang.Object getSystemParameters() {
            return this.systemParameters;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.apigateway.RosApi.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("apiName", om.valueToTree(this.getApiName()));
            data.set("groupId", om.valueToTree(this.getGroupId()));
            data.set("requestConfig", om.valueToTree(this.getRequestConfig()));
            data.set("resultSample", om.valueToTree(this.getResultSample()));
            data.set("resultType", om.valueToTree(this.getResultType()));
            data.set("serviceConfig", om.valueToTree(this.getServiceConfig()));
            data.set("visibility", om.valueToTree(this.getVisibility()));
            if (this.getAppCodeAuthType() != null) {
                data.set("appCodeAuthType", om.valueToTree(this.getAppCodeAuthType()));
            }
            if (this.getAuthType() != null) {
                data.set("authType", om.valueToTree(this.getAuthType()));
            }
            if (this.getConstParameters() != null) {
                data.set("constParameters", om.valueToTree(this.getConstParameters()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getDisableInternet() != null) {
                data.set("disableInternet", om.valueToTree(this.getDisableInternet()));
            }
            if (this.getErrorCodeSamples() != null) {
                data.set("errorCodeSamples", om.valueToTree(this.getErrorCodeSamples()));
            }
            if (this.getFailResultSample() != null) {
                data.set("failResultSample", om.valueToTree(this.getFailResultSample()));
            }
            if (this.getForceNonceCheck() != null) {
                data.set("forceNonceCheck", om.valueToTree(this.getForceNonceCheck()));
            }
            if (this.getOpenIdConnectConfig() != null) {
                data.set("openIdConnectConfig", om.valueToTree(this.getOpenIdConnectConfig()));
            }
            if (this.getRequestParameters() != null) {
                data.set("requestParameters", om.valueToTree(this.getRequestParameters()));
            }
            if (this.getServiceParameters() != null) {
                data.set("serviceParameters", om.valueToTree(this.getServiceParameters()));
            }
            if (this.getServiceParametersMap() != null) {
                data.set("serviceParametersMap", om.valueToTree(this.getServiceParametersMap()));
            }
            if (this.getSystemParameters() != null) {
                data.set("systemParameters", om.valueToTree(this.getSystemParameters()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apigateway.RosApiProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosApiProps.Jsii$Proxy that = (RosApiProps.Jsii$Proxy) o;

            if (!apiName.equals(that.apiName)) return false;
            if (!groupId.equals(that.groupId)) return false;
            if (!requestConfig.equals(that.requestConfig)) return false;
            if (!resultSample.equals(that.resultSample)) return false;
            if (!resultType.equals(that.resultType)) return false;
            if (!serviceConfig.equals(that.serviceConfig)) return false;
            if (!visibility.equals(that.visibility)) return false;
            if (this.appCodeAuthType != null ? !this.appCodeAuthType.equals(that.appCodeAuthType) : that.appCodeAuthType != null) return false;
            if (this.authType != null ? !this.authType.equals(that.authType) : that.authType != null) return false;
            if (this.constParameters != null ? !this.constParameters.equals(that.constParameters) : that.constParameters != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.disableInternet != null ? !this.disableInternet.equals(that.disableInternet) : that.disableInternet != null) return false;
            if (this.errorCodeSamples != null ? !this.errorCodeSamples.equals(that.errorCodeSamples) : that.errorCodeSamples != null) return false;
            if (this.failResultSample != null ? !this.failResultSample.equals(that.failResultSample) : that.failResultSample != null) return false;
            if (this.forceNonceCheck != null ? !this.forceNonceCheck.equals(that.forceNonceCheck) : that.forceNonceCheck != null) return false;
            if (this.openIdConnectConfig != null ? !this.openIdConnectConfig.equals(that.openIdConnectConfig) : that.openIdConnectConfig != null) return false;
            if (this.requestParameters != null ? !this.requestParameters.equals(that.requestParameters) : that.requestParameters != null) return false;
            if (this.serviceParameters != null ? !this.serviceParameters.equals(that.serviceParameters) : that.serviceParameters != null) return false;
            if (this.serviceParametersMap != null ? !this.serviceParametersMap.equals(that.serviceParametersMap) : that.serviceParametersMap != null) return false;
            if (this.systemParameters != null ? !this.systemParameters.equals(that.systemParameters) : that.systemParameters != null) return false;
            return this.tags != null ? this.tags.equals(that.tags) : that.tags == null;
        }

        @Override
        public final int hashCode() {
            int result = this.apiName.hashCode();
            result = 31 * result + (this.groupId.hashCode());
            result = 31 * result + (this.requestConfig.hashCode());
            result = 31 * result + (this.resultSample.hashCode());
            result = 31 * result + (this.resultType.hashCode());
            result = 31 * result + (this.serviceConfig.hashCode());
            result = 31 * result + (this.visibility.hashCode());
            result = 31 * result + (this.appCodeAuthType != null ? this.appCodeAuthType.hashCode() : 0);
            result = 31 * result + (this.authType != null ? this.authType.hashCode() : 0);
            result = 31 * result + (this.constParameters != null ? this.constParameters.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.disableInternet != null ? this.disableInternet.hashCode() : 0);
            result = 31 * result + (this.errorCodeSamples != null ? this.errorCodeSamples.hashCode() : 0);
            result = 31 * result + (this.failResultSample != null ? this.failResultSample.hashCode() : 0);
            result = 31 * result + (this.forceNonceCheck != null ? this.forceNonceCheck.hashCode() : 0);
            result = 31 * result + (this.openIdConnectConfig != null ? this.openIdConnectConfig.hashCode() : 0);
            result = 31 * result + (this.requestParameters != null ? this.requestParameters.hashCode() : 0);
            result = 31 * result + (this.serviceParameters != null ? this.serviceParameters.hashCode() : 0);
            result = 31 * result + (this.serviceParametersMap != null ? this.serviceParametersMap.hashCode() : 0);
            result = 31 * result + (this.systemParameters != null ? this.systemParameters.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            return result;
        }
    }
}
